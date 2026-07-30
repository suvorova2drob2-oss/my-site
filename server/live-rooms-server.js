/**
 * Live classroom rooms API (Quizizz-style thin backend).
 * POST /live  { "op": "...", ... }
 * Response: { "ok": true, "result": ... } | { "ok": false, "error": "..." }
 *
 * Local:  npm run live:rooms   → http://127.0.0.1:8787/live
 */
"use strict";

const path = require("path");
const express = require("express");

const PORT = Number(process.env.PORT || 8787);
const ROOT = path.join(__dirname, "..");
const PUBLIC_ORIGIN = String(
  process.env.PUBLIC_ORIGIN || "http://77.110.113.165:8787"
).replace(/\/$/, "");
const allowedOrigins = String(process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map(function (x) {
    return x.trim();
  })
  .filter(Boolean);

const DECK_PATHS = {
  "ege-listening-matching": "/ege/ege-listening-matching.html",
  "ege-listening-tfns": "/ege/ege-listening-tfns.html",
  "ege-listening-mc": "/ege/ege-listening-mc.html",
  "ege-reading-matching-headlines": "/ege/ege-reading-matching-headlines.html",
  "ege-reading-gapped-text": "/ege/ege-reading-gapped-text.html",
  "ege-reading-mc": "/ege/ege-reading-multiple-choice.html",
  "ege-grammar-exam": "/ege/ege-grammar-exam.html",
  "ege-word-formation-exam": "/ege/ege-word-formation-exam.html",
  "ege-lexis-exam": "/ege/ege-lexis-exam.html"
};

function deckPrefixOf(deckId) {
  const raw = String(deckId || "");
  const cut = raw.indexOf(":");
  return cut >= 0 ? raw.slice(0, cut) : raw;
}

function studentInviteUrl(roomCode, deckId, unitId) {
  const prefix = deckPrefixOf(deckId);
  const page = DECK_PATHS[prefix] || "/ege/ege-listening-matching.html";
  let url = PUBLIC_ORIGIN + page + "?room=" + encodeURIComponent(roomCode);
  const unit = String(unitId || "").trim();
  if (unit) url += "&unit=" + encodeURIComponent(unit);
  return url;
}

/** @type {Map<string, object>} */
const rooms = new Map();

function randToken(len) {
  const alphabet = "abcdefghijkmnopqrstuvwxyz23456789";
  let s = "";
  for (let i = 0; i < (len || 12); i += 1) {
    s += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return s;
}

function normalizeRoom(code) {
  return String(code || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 12);
}

function normalizeItems(raw) {
  if (!Array.isArray(raw)) return null;
  return raw.slice(0, 40).map(function (it, idx) {
    const answer = String((it && it.answer) != null ? it.answer : "").slice(0, 64);
    const filled =
      it && typeof it.filled === "boolean" ? !!it.filled : answer.length > 0;
    return {
      id: String((it && it.id) || "q" + (idx + 1)).slice(0, 32),
      label: String((it && it.label) || it.id || "Q" + (idx + 1)).slice(0, 80),
      correct: !!(it && it.correct),
      answer: answer,
      expected: String((it && it.expected) != null ? it.expected : "").slice(0, 64),
      filled: filled
    };
  });
}

function snapshot(roomCode) {
  const code = normalizeRoom(roomCode);
  const r = rooms.get(code);
  if (!r) return null;
  const leaderboard = [];
  const players = [];
  r.players.forEach(function (p, id) {
    if (p.isHost) return;
    leaderboard.push({
      playerId: id,
      displayName: p.displayName,
      score: Number(p.score || 0),
      submitted: !!p.submitted,
      attempts: Number(p.attempts || 0),
      correctCount: Number(p.correctCount || 0),
      totalCount: Number(p.totalCount || 0),
      items: Array.isArray(p.items) ? p.items : []
    });
    players.push({ id: id, displayName: p.displayName });
  });
  leaderboard.sort(function (a, b) {
    return b.score - a.score || a.displayName.localeCompare(b.displayName);
  });
  return {
    roomCode: code,
    deckId: r.deckId,
    phase: r.phase,
    cardIndex: r.cardIndex,
    leaderboard: leaderboard,
    players: players
  };
}

function handleOp(op, body) {
  switch (op) {
    case "createRoom": {
      let roomCode = "";
      for (let i = 0; i < 16; i += 1) {
        const c = randToken(5).toUpperCase();
        if (!rooms.has(c)) {
          roomCode = c;
          break;
        }
      }
      if (!roomCode) throw new Error("Could not allocate room code");
      const hostToken = randToken(24);
      const deckId = String((body && body.deckId) || "ege").slice(0, 96);
      rooms.set(roomCode, {
        deckId: deckId,
        hostToken: hostToken,
        phase: "lobby",
        cardIndex: 0,
        players: new Map(),
        createdAt: Date.now()
      });
      // Teacher is host only — not a player on the leaderboard.
      const unitId = String((body && body.unitId) || "").trim();
      return {
        roomCode: roomCode,
        hostToken: hostToken,
        studentUrl: studentInviteUrl(roomCode, deckId, unitId)
      };
    }
    case "joinRoom": {
      const code = normalizeRoom(body && body.roomCode);
      const r = rooms.get(code);
      if (!r) throw new Error("Room not found");
      const displayName = String((body && body.displayName) || "Student")
        .trim()
        .slice(0, 40);
      const nameKey = displayName.toLowerCase();
      const replaceId = String((body && body.replacePlayerId) || "");

      let existingId = null;
      r.players.forEach(function (p, id) {
        if (p.isHost) return;
        if (String(p.displayName || "").trim().toLowerCase() === nameKey) {
          existingId = id;
        }
      });

      // Rename existing seat (Сменить имя) — do not create a second player
      if (replaceId && r.players.has(replaceId)) {
        const old = r.players.get(replaceId);
        if (old && !old.isHost) {
          if (existingId && existingId !== replaceId) {
            r.players.delete(replaceId);
            const keep = r.players.get(existingId);
            return {
              playerId: existingId,
              displayName: keep.displayName,
              attempts: Number(keep.attempts || 0),
              rejoined: true
            };
          }
          old.displayName = displayName;
          return {
            playerId: replaceId,
            displayName: displayName,
            attempts: Number(old.attempts || 0),
            renamed: true
          };
        }
      }

      if (existingId) {
        const ex = r.players.get(existingId);
        return {
          playerId: existingId,
          displayName: ex.displayName,
          attempts: Number(ex.attempts || 0),
          rejoined: true
        };
      }
      const playerId = "p_" + randToken(8);
      r.players.set(playerId, {
        displayName: displayName,
        score: 0,
        isHost: false,
        submitted: false,
        attempts: 0,
        items: [],
        correctCount: 0,
        totalCount: 0
      });
      return { playerId: playerId, displayName: displayName, attempts: 0 };
    }
    case "submitAnswer": {
      const code = normalizeRoom(body && body.roomCode);
      const r = rooms.get(code);
      if (!r) throw new Error("Room not found");
      const playerId = String((body && body.playerId) || "");
      const p = r.players.get(playerId);
      if (!p) throw new Error("Player not found");
      if (p.isHost) throw new Error("Host is not a player");

      const isDraft = !!(body && (body.draft === true || body.submitted === false));
      const items = normalizeItems(body && body.items);
      if (items) {
        p.items = items;
        p.correctCount = items.filter(function (it) {
          return it.filled && it.correct;
        }).length;
        p.totalCount = items.length;
        if (isDraft) {
          // Retry / typing — keep attempt count, unlock for another final submit
          p.submitted = false;
        } else {
          p.attempts = Number(p.attempts || 0) + 1;
          p.submitted = true;
        }
        if (body && body.score != null && body.score !== "") {
          p.score = Math.max(0, Math.min(100, Math.round(Number(body.score) || 0)));
        } else if (p.totalCount > 0) {
          p.score = Math.round((p.correctCount / p.totalCount) * 100);
        }
      } else if (body && body.score != null && body.score !== "") {
        p.score = Math.max(0, Math.min(100, Math.round(Number(body.score) || 0)));
        if (isDraft) {
          p.submitted = false;
        } else {
          p.attempts = Number(p.attempts || 0) + 1;
          p.submitted = true;
        }
      } else if (body && body.correct) {
        let bonus = 0;
        const latencyMs = body.latencyMs != null ? Number(body.latencyMs) : null;
        if (latencyMs != null && latencyMs < 2500) {
          bonus = Math.max(0, Math.min(5, Math.floor((2500 - latencyMs) / 400)));
        }
        p.score = Number(p.score || 0) + 10 + bonus;
        if (isDraft) {
          p.submitted = false;
        } else {
          p.attempts = Number(p.attempts || 0) + 1;
          p.submitted = true;
        }
      }

      // Auto-finish when every non-host player has submitted (final, not draft)
      if (r.phase === "playing" && r.players.size > 0) {
        let allIn = true;
        let any = false;
        r.players.forEach(function (pl) {
          if (pl.isHost) return;
          any = true;
          if (!pl.submitted) allIn = false;
        });
        if (any && allIn) r.phase = "leaderboard";
      }
      return null;
    }
    case "getSnapshot": {
      const code = normalizeRoom(body && body.roomCode);
      if (!code) throw new Error("roomCode required");
      return snapshot(code);
    }
    case "setPhase": {
      const code = normalizeRoom(body && body.roomCode);
      const r = rooms.get(code);
      if (!r) throw new Error("Room not found");
      if (!body || body.hostToken !== r.hostToken) throw new Error("Host only");
      const phase = String((body && body.phase) || "lobby");
      if (["lobby", "playing", "leaderboard"].indexOf(phase) < 0) {
        throw new Error("Invalid phase");
      }
      r.phase = phase;
      return null;
    }
    case "advanceCard": {
      const code = normalizeRoom(body && body.roomCode);
      const r = rooms.get(code);
      if (!r) throw new Error("Room not found");
      if (!body || body.hostToken !== r.hostToken) throw new Error("Host only");
      r.cardIndex = Math.max(0, Math.floor(Number(body.cardIndex) || 0));
      return null;
    }
    default:
      throw new Error("Unknown op: " + op);
  }
}

const app = express();
app.use(express.json({ limit: "128kb" }));

app.use(function (req, res, next) {
  const origin = req.headers.origin || "";
  if (!allowedOrigins.length || allowedOrigins.indexOf(origin) >= 0 || origin === "") {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  } else if (allowedOrigins.length) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigins[0]);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS,GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  next();
});

app.get("/health", function (_req, res) {
  res.json({ ok: true, rooms: rooms.size });
});

app.post("/live", function (req, res) {
  try {
    const body = req.body || {};
    const op = String(body.op || "");
    const result = handleOp(op, body);
    res.json({ ok: true, result: result });
  } catch (e) {
    res.status(400).json({ ok: false, error: (e && e.message) || "error" });
  }
});

// Serve the site so student links work without Vite / file://
app.use(express.static(ROOT, { index: false, fallthrough: true }));

app.listen(PORT, "0.0.0.0", function () {
  console.log("[live-rooms] POST http://127.0.0.1:" + PORT + "/live");
  console.log("[live-rooms] health http://127.0.0.1:" + PORT + "/health");
  console.log(
    "[live-rooms] open teacher page: http://127.0.0.1:" +
      PORT +
      "/ege/ege-listening-matching.html"
  );
  console.log("[live-rooms] PUBLIC_ORIGIN " + PUBLIC_ORIGIN);
  console.log("[live-rooms] student links include ?room=CODE automatically");
  if (allowedOrigins.length) {
    console.log("[live-rooms] ALLOWED_ORIGINS:", allowedOrigins.join(", "));
  } else {
    console.log("[live-rooms] CORS: allow all (set ALLOWED_ORIGINS in production)");
  }
});
