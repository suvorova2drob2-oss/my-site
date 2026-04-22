/**
 * Yandex Cloud Function (Node.js): Sticky live room API + YDB.
 *
 * Env: YDB_CONNECTION_STRING (из консоли YDB, вид grpcs://...?database=/ru-central1/.../...)
 * IAM: в первую очередь `context.token` из хендлера (нужен сервисный аккаунт у версии функции);
 *       иначе — OAuth access_token из metadata 169.254.169.254 (для ВМ / локальных сценариев).
 *
 * Таблица (выполнить один раз в YDB):
 * CREATE TABLE sticky_live_rooms (
 *   room_code Utf8 NOT NULL,
 *   host_token Utf8 NOT NULL,
 *   deck_id Utf8 NOT NULL,
 *   phase Utf8 NOT NULL,
 *   card_index Int32 NOT NULL,
 *   state_json Utf8 NOT NULL,
 *   PRIMARY KEY (room_code)
 * );
 *
 * Тело запроса: POST JSON { "op": "...", ...поля }
 * Ответ: { "ok": true, "result": ... } или { "ok": false, "error": "..." }
 */

"use strict";

const crypto = require("crypto");
const grpc = require("@grpc/grpc-js");
const { Driver, TypedValues, Context } = require("ydb-sdk");

/**
 * В Cloud Functions IAM-токен надёжнее брать из второго аргумента хендлера (`context.token`),
 * а не через fetch к 169.254.169.254 — в рантайме Node это часто даёт "fetch failed".
 * @see https://yandex.cloud/en/docs/functions/concepts/function-invoke#service-data
 */
const CF_IAM_METADATA_URL =
  "http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token";

/** Токен текущего вызова (устанавливается в handler до YDB). */
const requestIam = { accessToken: null };

class InstanceMetadataIamAuth {
  constructor() {
    this._token = "";
    this._expiresAt = 0;
  }
  async getAuthMetadata() {
    const token = await this._getToken();
    const metadata = new grpc.Metadata();
    metadata.add("x-ydb-auth-ticket", token);
    return metadata;
  }
  async _getToken() {
    if (requestIam.accessToken) return requestIam.accessToken;
    const now = Date.now();
    if (this._token && now < this._expiresAt - 60_000) return this._token;
    const res = await fetch(CF_IAM_METADATA_URL, {
      headers: { "Metadata-Flavor": "Google" },
    });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error("IAM metadata HTTP " + res.status + ": " + t.slice(0, 200));
    }
    const j = await res.json();
    this._token = j.access_token;
    const sec = Number(j.expires_in) || 3600;
    this._expiresAt = now + sec * 1000;
    return this._token;
  }
}

const CORS = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS,GET",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
};

let driverRef = null;

function getDriver() {
  if (driverRef) return driverRef;
  const cs = process.env.YDB_CONNECTION_STRING;
  if (!cs) throw new Error("YDB_CONNECTION_STRING is not set");
  const driver = new Driver({
    connectionString: cs,
    authService: new InstanceMetadataIamAuth(),
  });
  driverRef = driver;
  return driver;
}

function randToken(len) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  const buf = crypto.randomBytes(len);
  let s = "";
  for (let i = 0; i < len; i += 1) s += alphabet[buf[i] % alphabet.length];
  return s;
}

function normalizeRoom(code) {
  return String(code || "")
    .trim()
    .toUpperCase();
}

function decodePrimitive(type, v) {
  if (!type || !v) return null;
  if (type.optionalType) {
    if (v.nullFlagValue != null) return null;
    return decodePrimitive(type.optionalType.item, v);
  }
  if (v.nullFlagValue != null) return null;
  if (type.typeId != null) {
    if (v.textValue !== undefined) return v.textValue;
    if (typeof v.int32Value === "number") return v.int32Value;
    if (v.int32Value && typeof v.int32Value.low === "number")
      return v.int32Value.low;
    if (typeof v.uint32Value === "number") return v.uint32Value;
    if (v.boolValue !== undefined) return v.boolValue;
  }
  return null;
}

async function firstRow(execResult) {
  for await (const rs of execResult.resultSets) {
    const cols = rs.columns || [];
    for await (const row of rs.rows) {
      const items = row.items || [];
      const o = {};
      for (let i = 0; i < cols.length; i += 1) {
        o[cols[i].name] = decodePrimitive(cols[i].type, items[i]);
      }
      return o;
    }
  }
  return null;
}

async function readRoom(session, roomCode) {
  const code = normalizeRoom(roomCode);
  const r = await session.execute({
    text: `
      SELECT host_token, deck_id, phase, card_index, state_json
      FROM sticky_live_rooms
      WHERE room_code = $room
    `,
    parameters: { $room: TypedValues.utf8(code) },
  });
  return firstRow(r);
}

async function upsertRoom(session, row) {
  const code = normalizeRoom(row.room_code);
  await session.execute({
    text: `
      UPSERT INTO sticky_live_rooms (room_code, host_token, deck_id, phase, card_index, state_json)
      VALUES ($room, $host, $deck, $phase, $idx, $json)
    `,
    parameters: {
      $room: TypedValues.utf8(code),
      $host: TypedValues.utf8(String(row.host_token)),
      $deck: TypedValues.utf8(String(row.deck_id)),
      $phase: TypedValues.utf8(String(row.phase)),
      $idx: TypedValues.int32(Number(row.card_index) || 0),
      $json: TypedValues.utf8(String(row.state_json)),
    },
  });
}

function parseState(json) {
  try {
    const o = JSON.parse(json || "{}");
    if (!o.players || typeof o.players !== "object") o.players = {};
    return o;
  } catch {
    return { players: {} };
  }
}

function buildSnapshot(roomCode, row) {
  if (!row) return null;
  const st = parseState(row.state_json);
  const pobj = st.players;
  const players = Object.keys(pobj).map((id) => ({
    id,
    displayName: String(pobj[id].displayName || ""),
  }));
  const leaderboard = Object.keys(pobj).map((id) => ({
    playerId: id,
    displayName: String(pobj[id].displayName || ""),
    score: Number(pobj[id].score || 0),
  }));
  leaderboard.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return String(a.displayName).localeCompare(String(b.displayName));
  });
  return {
    roomCode: normalizeRoom(roomCode),
    deckId: String(row.deck_id || ""),
    phase: String(row.phase || "lobby"),
    cardIndex: Number(row.card_index || 0),
    leaderboard,
    players,
  };
}

async function withYdb(fn) {
  const driver = getDriver();
  const ready = await driver.ready(20000);
  if (!ready) throw new Error("YDB driver not ready");
  const { ctx } = Context.createNew();
  return driver.queryClient.do({ ctx, fn });
}

function json(statusCode, obj) {
  return {
    statusCode,
    headers: CORS,
    body: JSON.stringify(obj),
    isBase64Encoded: false,
  };
}

function readBody(event) {
  let raw = event.body;
  if (raw == null) return {};
  if (event.isBase64Encoded && typeof raw === "string") {
    raw = Buffer.from(raw, "base64").toString("utf8");
  }
  if (typeof raw !== "string") return raw && typeof raw === "object" ? raw : {};
  try {
    return JSON.parse(raw || "{}");
  } catch {
    return {};
  }
}

async function handleOp(op, body) {
  switch (op) {
    case "createRoom": {
      const deckId = String((body && body.deckId) || "going-vegan").slice(0, 64);
      const hostDisplayName = String(
        (body && body.hostDisplayName) || "Host"
      )
        .trim()
        .slice(0, 40);
      return withYdb(async (session) => {
        let roomCode = "";
        for (let i = 0; i < 12; i += 1) {
          const c = randToken(5).toUpperCase();
          const ex = await readRoom(session, c);
          if (!ex) {
            roomCode = c;
            break;
          }
        }
        if (!roomCode) throw new Error("Could not allocate room code");
        const hostToken = randToken(24);
        const hostId = "p_host_" + randToken(6);
        const state = {
          players: {
            [hostId]: {
              displayName: hostDisplayName,
              score: 0,
              isHost: true,
            },
          },
        };
        await upsertRoom(session, {
          room_code: roomCode,
          host_token: hostToken,
          deck_id: deckId,
          phase: "lobby",
          card_index: 0,
          state_json: JSON.stringify(state),
        });
        return { roomCode, hostToken };
      });
    }
    case "joinRoom": {
      const roomCode = normalizeRoom(body && body.roomCode);
      const displayName = String((body && body.displayName) || "Student")
        .trim()
        .slice(0, 40);
      if (!roomCode) throw new Error("roomCode required");
      return withYdb(async (session) => {
        const row = await readRoom(session, roomCode);
        if (!row) throw new Error("Room not found");
        const st = parseState(row.state_json);
        const playerId = "p_" + randToken(8);
        st.players[playerId] = {
          displayName,
          score: 0,
          isHost: false,
        };
        row.state_json = JSON.stringify(st);
        await upsertRoom(session, row);
        return { playerId, displayName };
      });
    }
    case "submitAnswer": {
      const roomCode = normalizeRoom(body && body.roomCode);
      const playerId = String((body && body.playerId) || "");
      const correct = Boolean(body && body.correct);
      const latencyMs =
        body && body.latencyMs != null ? Number(body.latencyMs) : null;
      if (!roomCode || !playerId) throw new Error("roomCode and playerId required");
      return withYdb(async (session) => {
        const row = await readRoom(session, roomCode);
        if (!row) throw new Error("Room not found");
        const st = parseState(row.state_json);
        const p = st.players[playerId];
        if (!p) throw new Error("Player not found");
        if (correct) {
          let bonus = 0;
          if (latencyMs != null && latencyMs < 2500) {
            bonus = Math.max(
              0,
              Math.min(5, Math.floor((2500 - latencyMs) / 400))
            );
          }
          p.score = Number(p.score || 0) + 10 + bonus;
        }
        row.state_json = JSON.stringify(st);
        await upsertRoom(session, row);
        return null;
      });
    }
    case "getSnapshot": {
      const roomCode = normalizeRoom(body && body.roomCode);
      if (!roomCode) throw new Error("roomCode required");
      return withYdb(async (session) => {
        const row = await readRoom(session, roomCode);
        return buildSnapshot(roomCode, row);
      });
    }
    case "setPhase": {
      const roomCode = normalizeRoom(body && body.roomCode);
      const hostToken = String((body && body.hostToken) || "");
      const phase = String((body && body.phase) || "lobby");
      if (!roomCode) throw new Error("roomCode required");
      return withYdb(async (session) => {
        const row = await readRoom(session, roomCode);
        if (!row) throw new Error("Room not found");
        if (hostToken !== row.host_token) throw new Error("Host only");
        if (!["lobby", "playing", "leaderboard"].includes(phase))
          throw new Error("Invalid phase");
        row.phase = phase;
        await upsertRoom(session, row);
        return null;
      });
    }
    case "advanceCard": {
      const roomCode = normalizeRoom(body && body.roomCode);
      const hostToken = String((body && body.hostToken) || "");
      const cardIndex = Math.max(0, Math.floor(Number(body && body.cardIndex) || 0));
      if (!roomCode) throw new Error("roomCode required");
      return withYdb(async (session) => {
        const row = await readRoom(session, roomCode);
        if (!row) throw new Error("Room not found");
        if (hostToken !== row.host_token) throw new Error("Host only");
        row.card_index = cardIndex;
        await upsertRoom(session, row);
        return null;
      });
    }
    default:
      throw new Error("Unknown op: " + op);
  }
}

module.exports.handler = async function handler(event, context) {
  const method = (event.httpMethod || event.requestContext?.http?.method || "GET").toUpperCase();

  if (method === "OPTIONS") {
    return { statusCode: 204, headers: CORS, body: "" };
  }

  requestIam.accessToken =
    context && typeof context.token === "string" && context.token.length > 0
      ? context.token
      : null;
  try {
    const body = readBody(event);
    const op = String(body.op || "");
    if (!op) throw new Error('Missing "op" in JSON body');
    const result = await handleOp(op, body);
    return json(200, { ok: true, result });
  } catch (e) {
    const msg = e && e.message ? e.message : String(e);
    let hint = "";
    if (!requestIam.accessToken && /fetch failed|metadata|IAM/i.test(msg)) {
      hint =
        " В консоли Yandex Cloud откройте версию функции и привяжите сервисный аккаунт с правами на YDB — без него нет IAM-токена (context.token).";
    }
    return json(200, { ok: false, error: msg + hint });
  } finally {
    requestIam.accessToken = null;
  }
};
