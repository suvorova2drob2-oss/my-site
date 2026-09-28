/**
 * Teacher constructor storage (packs, units, courses…) + uploaded media.
 *
 *   GET  /store/snapshot?rev=N   → { ok, rev, same:true } | { ok, rev, keyRevs, data }
 *   GET  /store/check            → { ok, claimed, valid }        (header X-Teacher-Key)
 *   POST /store/save             { baseRev, keyRevs, data:{key:value} }  (header X-Teacher-Key)
 *        409 { ok:false, error:"conflict", conflicts:[key…], rev } when another device saved those keys first
 *   PUT  /store/media/:id        { dataUrl }                     (header X-Teacher-Key)
 *   GET  /store/media/:id        → the file itself
 *
 * Reading is public so students on any device see the teacher's packs.
 * Writing needs the teacher key: TEACHER_STORE_KEY env, or the first key ever saved
 * (its SHA-256 lands in <dir>/key.sha256; delete that file on the VPS to reset the key).
 */
"use strict";

const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const express = require("express");

const SYNC_KEYS = [
  "teacher_hub_brand_v1",
  "teacher_hub_packs_v1",
  "teacher_hub_text_packs_v1",
  "teacher_hub_decks_v1",
  "teacher_hub_lessons_v1",
  "teacher_hub_units_v1",
  "teacher_hub_courses_v1",
  "teacher_hub_engine_cfg_v1",
  "teacher_hub_my_games_v1",
  "teacher_hub_books_v1",
  "teacher_hub_story_configs_v1",
  "teacher_hub_my_worlds_v1",
  "teacher_hub_cleared_demo_v1"
];
const BACKUPS_PER_KEY = 40;
const MIN_KEY_LENGTH = 6;

const MIME_EXT = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "audio/mpeg": "mp3",
  "audio/mp3": "mp3",
  "audio/wav": "wav",
  "audio/x-wav": "wav",
  "audio/ogg": "ogg",
  "audio/webm": "weba",
  "audio/mp4": "m4a",
  "audio/x-m4a": "m4a",
  "video/mp4": "mp4",
  "video/webm": "webm"
};

function sha256(s) {
  return crypto.createHash("sha256").update(String(s), "utf8").digest("hex");
}

function safeEqual(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

function writeAtomic(file, text) {
  const tmp = file + ".tmp-" + process.pid + "-" + Date.now();
  fs.writeFileSync(tmp, text);
  fs.renameSync(tmp, file);
}

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    return fallback;
  }
}

function createTeacherStoreRouter(options) {
  const dir = path.resolve(options.dir);
  const keysDir = path.join(dir, "keys");
  const backupDir = path.join(dir, "backups");
  const mediaDir = path.join(dir, "media");
  const stateFile = path.join(dir, "state.json");
  const keyHashFile = path.join(dir, "key.sha256");
  [dir, keysDir, backupDir, mediaDir].forEach(function (d) {
    fs.mkdirSync(d, { recursive: true });
  });

  const envKey = String(options.key || "").trim();
  let state = readJson(stateFile, null) || { rev: 0, updatedAt: 0, keys: {} };
  if (!state.keys) state.keys = {};

  function keyHash() {
    if (envKey) return sha256(envKey);
    try {
      return fs.readFileSync(keyHashFile, "utf8").trim();
    } catch (e) {
      return "";
    }
  }

  /** @returns {"ok"|"claimed"|"missing"|"bad"} */
  function checkKey(req, allowClaim) {
    const given = String(req.get("X-Teacher-Key") || "").trim();
    if (!given) return "missing";
    const stored = keyHash();
    if (!stored) {
      if (!allowClaim || given.length < MIN_KEY_LENGTH) return "bad";
      writeAtomic(keyHashFile, sha256(given) + "\n");
      console.log("[teacher-store] teacher key set (first save)");
      return "claimed";
    }
    return safeEqual(sha256(given), stored) ? "ok" : "bad";
  }

  function keyFile(key) {
    return path.join(keysDir, key + ".json");
  }

  function readKeyRaw(key) {
    try {
      return fs.readFileSync(keyFile(key), "utf8");
    } catch (e) {
      return null;
    }
  }

  function backupKey(key, oldRaw, oldRev) {
    if (oldRaw == null) return;
    const kd = path.join(backupDir, key);
    fs.mkdirSync(kd, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    fs.writeFileSync(path.join(kd, stamp + "_r" + oldRev + ".json"), oldRaw);
    const files = fs.readdirSync(kd).filter(function (f) {
      return /\.json$/.test(f);
    }).sort();
    files.slice(0, Math.max(0, files.length - BACKUPS_PER_KEY)).forEach(function (f) {
      try {
        fs.unlinkSync(path.join(kd, f));
      } catch (e) {}
    });
  }

  function keyRevs() {
    const out = {};
    Object.keys(state.keys).forEach(function (k) {
      out[k] = Number(state.keys[k].rev || 0);
    });
    return out;
  }

  const router = express.Router();
  const bigJson = express.json({ limit: "40mb" });
  const mediaJson = express.json({ limit: "25mb" });

  router.use(function (_req, res, next) {
    res.setHeader("Cache-Control", "no-store");
    next();
  });

  router.get("/snapshot", function (req, res) {
    const known = req.query.rev != null ? Number(req.query.rev) : -1;
    if (known === Number(state.rev)) {
      res.json({ ok: true, rev: state.rev, same: true });
      return;
    }
    const parts = [];
    SYNC_KEYS.forEach(function (k) {
      const raw = readKeyRaw(k);
      if (raw != null) parts.push(JSON.stringify(k) + ":" + raw);
    });
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send(
      '{"ok":true,"rev":' + Number(state.rev) +
        ',"updatedAt":' + Number(state.updatedAt || 0) +
        ',"keyRevs":' + JSON.stringify(keyRevs()) +
        ',"data":{' + parts.join(",") + "}}"
    );
  });

  router.get("/check", function (req, res) {
    const claimed = !!keyHash();
    const given = String(req.get("X-Teacher-Key") || "").trim();
    let valid = false;
    if (given && claimed) valid = safeEqual(sha256(given), keyHash());
    if (given && !claimed) valid = given.length >= MIN_KEY_LENGTH;
    res.json({ ok: true, claimed: claimed, valid: valid, rev: state.rev });
  });

  router.post("/save", bigJson, function (req, res) {
    const auth = checkKey(req, true);
    if (auth === "missing" || auth === "bad") {
      res.status(403).json({ ok: false, error: auth === "missing" ? "key required" : "wrong key" });
      return;
    }
    const body = req.body || {};
    const data = body.data && typeof body.data === "object" ? body.data : null;
    if (!data) {
      res.status(400).json({ ok: false, error: "data required" });
      return;
    }
    const names = Object.keys(data).filter(function (k) {
      return SYNC_KEYS.indexOf(k) >= 0;
    });
    if (!names.length) {
      res.status(400).json({ ok: false, error: "no known keys" });
      return;
    }
    for (let i = 0; i < names.length; i += 1) {
      const v = data[names[i]];
      if (v === undefined || typeof v === "function") {
        res.status(400).json({ ok: false, error: "bad value for " + names[i] });
        return;
      }
    }

    const clientRevs = body.keyRevs && typeof body.keyRevs === "object" ? body.keyRevs : {};
    const conflicts = names.filter(function (k) {
      const serverRev = Number((state.keys[k] && state.keys[k].rev) || 0);
      const seen = Number(clientRevs[k] || 0);
      return serverRev > seen && !body.force;
    });
    if (conflicts.length) {
      res.status(409).json({ ok: false, error: "conflict", conflicts: conflicts, rev: state.rev });
      return;
    }

    const now = Date.now();
    const nextRev = Number(state.rev || 0) + 1;
    names.forEach(function (k) {
      const oldRaw = readKeyRaw(k);
      const raw = JSON.stringify(data[k]);
      if (oldRaw === raw) return;
      backupKey(k, oldRaw, (state.keys[k] && state.keys[k].rev) || 0);
      writeAtomic(keyFile(k), raw);
      state.keys[k] = { rev: nextRev, updatedAt: now, bytes: raw.length };
    });
    const touched = names.some(function (k) {
      return state.keys[k] && state.keys[k].rev === nextRev;
    });
    if (touched) {
      state.rev = nextRev;
      state.updatedAt = now;
      writeAtomic(stateFile, JSON.stringify(state, null, 2));
    }
    res.json({ ok: true, rev: state.rev, keyRevs: keyRevs(), claimed: auth === "claimed" });
  });

  function mediaIdOk(id) {
    return /^[A-Za-z0-9_-]{4,80}$/.test(String(id || ""));
  }

  function findMediaFile(id) {
    const exts = fs.readdirSync(mediaDir).filter(function (f) {
      return f.indexOf(id + ".") === 0;
    });
    return exts.length ? path.join(mediaDir, exts[0]) : "";
  }

  router.put("/media/:id", mediaJson, function (req, res) {
    const auth = checkKey(req, true);
    if (auth === "missing" || auth === "bad") {
      res.status(403).json({ ok: false, error: "wrong key" });
      return;
    }
    const id = String(req.params.id || "");
    if (!mediaIdOk(id)) {
      res.status(400).json({ ok: false, error: "bad id" });
      return;
    }
    const dataUrl = String((req.body && req.body.dataUrl) || "");
    const m = /^data:([a-z0-9.+\/-]+)((?:;[^,;]*)*),/i.exec(dataUrl.slice(0, 300));
    if (!m) {
      res.status(400).json({ ok: false, error: "dataUrl required" });
      return;
    }
    const mime = m[1].toLowerCase();
    const ext = MIME_EXT[mime];
    if (!ext) {
      res.status(400).json({ ok: false, error: "unsupported type " + mime });
      return;
    }
    const payload = dataUrl.slice(m[0].length);
    const isB64 = /;base64/i.test(m[2] || "");
    const buf = isB64 ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload), "utf8");
    const old = findMediaFile(id);
    if (old) {
      try {
        fs.unlinkSync(old);
      } catch (e) {}
    }
    writeAtomic(path.join(mediaDir, id + "." + ext), buf);
    res.json({ ok: true, id: id, bytes: buf.length });
  });

  router.get("/media/:id", function (req, res) {
    const id = String(req.params.id || "");
    if (!mediaIdOk(id)) {
      res.status(400).end();
      return;
    }
    const file = findMediaFile(id);
    if (!file) {
      res.status(404).end();
      return;
    }
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.sendFile(file);
  });

  router.use(function (err, _req, res, _next) {
    const tooBig = err && (err.type === "entity.too.large" || err.status === 413);
    res.status(tooBig ? 413 : 400).json({ ok: false, error: tooBig ? "too large" : (err && err.message) || "error" });
  });

  return router;
}

module.exports = { createTeacherStoreRouter: createTeacherStoreRouter, SYNC_KEYS: SYNC_KEYS };
