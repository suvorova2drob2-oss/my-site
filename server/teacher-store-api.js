/**
 * Teacher constructor storage (packs, units, courses…) + uploaded media, one store per teacher.
 *
 * Accounts (no open sign-up — the admin issues logins):
 *   GET  /store/auth/me                 → { ok, user|null }
 *   POST /store/auth/start   {login}    → { ok, status:"pending"|"active" }  pending = teacher sets a password first
 *   POST /store/auth/setup   {login, password}          → sets the first password, logs in
 *   POST /store/auth/login   {login, password}          → logs in (httpOnly session cookie)
 *   POST /store/auth/logout
 *   POST /store/auth/password {oldPassword, newPassword}
 *   GET  /store/admin/users                             (admin)
 *   POST /store/admin/users  {login, name}              (admin) → pending account
 *   POST /store/admin/users/:id/reset                   (admin) → pending again, sessions dropped
 *   POST /store/admin/users/:id/disable {disabled}      (admin)
 *
 * Data:
 *   GET  /store/snapshot?rev=N   → the logged-in teacher's data; without a session → the public (admin) copy
 *   POST /store/save             { keyRevs, data:{key:value} }   (session)
 *        409 { ok:false, error:"conflict", conflicts:[key…], rev } when another device saved those keys first
 *   PUT  /store/media/:id        { dataUrl }   (session; an id belongs to whoever uploaded it first)
 *   GET  /store/media/:id        → the file itself (public: students see teacher pictures)
 *
 * First admin: node server/teacher-accounts-cli.js add-admin <login> "<name>"
 * Layout under <dir>: accounts.json, sessions.json, users/<id>/{state.json,keys,backups}, media/, media-owners.json
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
const MIN_PASSWORD = 8;
const LOGIN_RE = /^[a-z0-9._-]{3,32}$/;
const SESSION_COOKIE = "th_session";
const SESSION_DAYS = 30;
const FAIL_WINDOW_MS = 15 * 60 * 1000;
const FAIL_LIMIT = 10;

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

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(String(password), salt, 64).toString("hex");
  return "scrypt$" + salt + "$" + hash;
}

function checkPassword(password, stored) {
  const parts = String(stored || "").split("$");
  if (parts.length !== 3 || parts[0] !== "scrypt") return false;
  const hash = crypto.scryptSync(String(password), parts[1], 64).toString("hex");
  return safeEqual(hash, parts[2]);
}

function normLogin(login) {
  return String(login || "").trim().toLowerCase();
}

function publicUser(u) {
  if (!u) return null;
  return {
    id: u.id,
    login: u.login,
    name: u.name || u.login,
    role: u.role === "admin" ? "admin" : "teacher",
    status: u.status,
    createdAt: u.createdAt || 0
  };
}

/** accounts.json is read on every request, so the CLI can edit it while the server runs. */
function createAccounts(dir) {
  const file = path.join(dir, "accounts.json");
  function load() {
    const data = readJson(file, null);
    return data && Array.isArray(data.users) ? data : { users: [] };
  }
  function save(data) {
    writeAtomic(file, JSON.stringify(data, null, 2));
  }
  function byLogin(data, login) {
    const l = normLogin(login);
    return data.users.find(function (u) { return u.login === l; }) || null;
  }
  function byId(data, id) {
    return data.users.find(function (u) { return u.id === id; }) || null;
  }
  function create(fields) {
    const login = normLogin(fields.login);
    if (!LOGIN_RE.test(login)) throw new Error("Логин: 3–32 символа (латиница, цифры, . _ -)");
    const data = load();
    if (byLogin(data, login)) throw new Error("Такой логин уже есть");
    const user = {
      id: "u_" + crypto.randomBytes(6).toString("hex"),
      login: login,
      name: String(fields.name || "").trim().slice(0, 80) || login,
      role: fields.role === "admin" ? "admin" : "teacher",
      status: "pending",
      passHash: "",
      createdAt: Date.now(),
      createdBy: fields.createdBy || ""
    };
    data.users.push(user);
    save(data);
    return user;
  }
  /** The public copy for student links = the first admin's store. */
  function publicUserId() {
    const admins = load().users.filter(function (u) { return u.role === "admin"; });
    admins.sort(function (a, b) { return (a.createdAt || 0) - (b.createdAt || 0); });
    return admins.length ? admins[0].id : "";
  }
  return { file: file, load: load, save: save, byLogin: byLogin, byId: byId, create: create, publicUserId: publicUserId };
}

function createSessions(dir) {
  const file = path.join(dir, "sessions.json");
  function load() {
    const data = readJson(file, null);
    return data && typeof data === "object" ? data : {};
  }
  function save(data) {
    writeAtomic(file, JSON.stringify(data));
  }
  function prune(data) {
    const now = Date.now();
    Object.keys(data).forEach(function (k) {
      if (!data[k] || data[k].exp < now) delete data[k];
    });
    return data;
  }
  function open(userId) {
    const token = crypto.randomBytes(32).toString("hex");
    const data = prune(load());
    data[sha256(token)] = { userId: userId, exp: Date.now() + SESSION_DAYS * 86400000 };
    save(data);
    return token;
  }
  function find(token) {
    if (!token) return "";
    const s = load()[sha256(token)];
    return s && s.exp > Date.now() ? s.userId : "";
  }
  function close(token) {
    const data = load();
    delete data[sha256(token)];
    save(prune(data));
  }
  function closeAllFor(userId) {
    const data = load();
    Object.keys(data).forEach(function (k) {
      if (data[k] && data[k].userId === userId) delete data[k];
    });
    save(prune(data));
  }
  return { open: open, find: find, close: close, closeAllFor: closeAllFor };
}

/** One teacher's keyed JSON store with per-key revisions and rolling backups. */
function createUserStore(userDir) {
  const keysDir = path.join(userDir, "keys");
  const backupDir = path.join(userDir, "backups");
  const stateFile = path.join(userDir, "state.json");

  function ensureDirs() {
    [userDir, keysDir, backupDir].forEach(function (d) {
      fs.mkdirSync(d, { recursive: true });
    });
  }
  function state() {
    const st = readJson(stateFile, null) || { rev: 0, updatedAt: 0, keys: {} };
    if (!st.keys) st.keys = {};
    return st;
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
  function keyRevs(st) {
    const out = {};
    Object.keys(st.keys).forEach(function (k) {
      out[k] = Number(st.keys[k].rev || 0);
    });
    return out;
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

  function snapshotJson(knownRev) {
    const st = state();
    if (knownRev === Number(st.rev)) return JSON.stringify({ ok: true, rev: st.rev, same: true });
    const parts = [];
    SYNC_KEYS.forEach(function (k) {
      const raw = readKeyRaw(k);
      if (raw != null) parts.push(JSON.stringify(k) + ":" + raw);
    });
    return '{"ok":true,"rev":' + Number(st.rev) +
      ',"updatedAt":' + Number(st.updatedAt || 0) +
      ',"keyRevs":' + JSON.stringify(keyRevs(st)) +
      ',"data":{' + parts.join(",") + "}}";
  }

  /** @returns {{ok:true, rev, keyRevs}|{conflict:true, conflicts, rev}} */
  function save(data, clientRevs, force) {
    ensureDirs();
    const st = state();
    const names = Object.keys(data).filter(function (k) {
      return SYNC_KEYS.indexOf(k) >= 0;
    });
    const conflicts = names.filter(function (k) {
      const serverRev = Number((st.keys[k] && st.keys[k].rev) || 0);
      return serverRev > Number(clientRevs[k] || 0) && !force;
    });
    if (conflicts.length) return { conflict: true, conflicts: conflicts, rev: st.rev };

    const now = Date.now();
    const nextRev = Number(st.rev || 0) + 1;
    let touched = false;
    names.forEach(function (k) {
      const oldRaw = readKeyRaw(k);
      const raw = JSON.stringify(data[k]);
      if (oldRaw === raw) return;
      backupKey(k, oldRaw, (st.keys[k] && st.keys[k].rev) || 0);
      writeAtomic(keyFile(k), raw);
      st.keys[k] = { rev: nextRev, updatedAt: now, bytes: raw.length };
      touched = true;
    });
    if (touched) {
      st.rev = nextRev;
      st.updatedAt = now;
      writeAtomic(stateFile, JSON.stringify(st, null, 2));
    }
    return { ok: true, rev: st.rev, keyRevs: keyRevs(st) };
  }

  return { snapshotJson: snapshotJson, save: save, names: SYNC_KEYS };
}

function parseCookies(req) {
  const out = {};
  String(req.headers.cookie || "").split(";").forEach(function (part) {
    const i = part.indexOf("=");
    if (i < 0) return;
    const k = part.slice(0, i).trim();
    if (k) out[k] = decodeURIComponent(part.slice(i + 1).trim());
  });
  return out;
}

function createTeacherStoreRouter(options) {
  const dir = path.resolve(options.dir);
  const usersDir = path.join(dir, "users");
  const mediaDir = path.join(dir, "media");
  const mediaOwnersFile = path.join(dir, "media-owners.json");
  [dir, usersDir, mediaDir].forEach(function (d) {
    fs.mkdirSync(d, { recursive: true });
  });

  const accounts = createAccounts(dir);
  const sessions = createSessions(dir);
  const fails = new Map();

  function userStore(userId) {
    if (!/^u_[a-f0-9]{12}$/.test(String(userId))) throw new Error("bad user id");
    return createUserStore(path.join(usersDir, userId));
  }

  function tooManyFails(key) {
    const f = fails.get(key);
    return !!(f && f.until > Date.now() && f.count >= FAIL_LIMIT);
  }
  function noteFail(key) {
    const now = Date.now();
    const f = fails.get(key);
    if (!f || f.until < now) fails.set(key, { count: 1, until: now + FAIL_WINDOW_MS });
    else f.count += 1;
  }
  function failKeys(req, login) {
    return ["ip:" + (req.ip || ""), "login:" + normLogin(login)];
  }

  function setSessionCookie(req, res, token) {
    const secure = req.secure || req.get("X-Forwarded-Proto") === "https" ? "; Secure" : "";
    res.setHeader(
      "Set-Cookie",
      SESSION_COOKIE + "=" + token + "; Path=/; HttpOnly; SameSite=Lax; Max-Age=" +
        SESSION_DAYS * 86400 + secure
    );
  }
  function clearSessionCookie(res) {
    res.setHeader("Set-Cookie", SESSION_COOKIE + "=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0");
  }

  /** Active (not pending/disabled) account behind the session cookie, or null. */
  function sessionUser(req) {
    const token = parseCookies(req)[SESSION_COOKIE];
    const userId = sessions.find(token);
    if (!userId) return null;
    const u = accounts.byId(accounts.load(), userId);
    return u && u.status === "active" ? u : null;
  }

  function requireUser(req, res) {
    const u = sessionUser(req);
    if (!u) res.status(401).json({ ok: false, error: "login required" });
    return u;
  }
  function requireAdmin(req, res) {
    const u = requireUser(req, res);
    if (u && u.role !== "admin") {
      res.status(403).json({ ok: false, error: "admin only" });
      return null;
    }
    return u;
  }

  const router = express.Router();
  const smallJson = express.json({ limit: "32kb" });
  const bigJson = express.json({ limit: "40mb" });
  const mediaJson = express.json({ limit: "25mb" });

  router.use(function (_req, res, next) {
    res.setHeader("Cache-Control", "no-store");
    next();
  });

  /* ---------- auth ---------- */

  router.get("/auth/me", function (req, res) {
    res.json({ ok: true, user: publicUser(sessionUser(req)) });
  });

  router.post("/auth/start", smallJson, function (req, res) {
    const login = normLogin(req.body && req.body.login);
    const u = accounts.byLogin(accounts.load(), login);
    // Unknown logins look like normal ones — the password step then fails with a generic error.
    res.json({ ok: true, status: u && u.status === "pending" ? "pending" : "active" });
  });

  router.post("/auth/setup", smallJson, function (req, res) {
    const body = req.body || {};
    const login = normLogin(body.login);
    const password = String(body.password || "");
    const keys = failKeys(req, login);
    if (keys.some(tooManyFails)) {
      res.status(429).json({ ok: false, error: "Слишком много попыток. Подождите 15 минут." });
      return;
    }
    if (password.length < MIN_PASSWORD) {
      res.status(400).json({ ok: false, error: "Пароль не короче " + MIN_PASSWORD + " символов" });
      return;
    }
    const data = accounts.load();
    const u = accounts.byLogin(data, login);
    if (!u || u.status !== "pending") {
      keys.forEach(noteFail);
      res.status(400).json({ ok: false, error: "Этот логин не ждёт нового пароля" });
      return;
    }
    u.passHash = hashPassword(password);
    u.status = "active";
    u.passwordSetAt = Date.now();
    accounts.save(data);
    setSessionCookie(req, res, sessions.open(u.id));
    res.json({ ok: true, user: publicUser(u) });
  });

  router.post("/auth/login", smallJson, function (req, res) {
    const body = req.body || {};
    const login = normLogin(body.login);
    const keys = failKeys(req, login);
    if (keys.some(tooManyFails)) {
      res.status(429).json({ ok: false, error: "Слишком много попыток. Подождите 15 минут." });
      return;
    }
    const u = accounts.byLogin(accounts.load(), login);
    if (!u || u.status !== "active" || !checkPassword(body.password, u.passHash)) {
      keys.forEach(noteFail);
      const blocked = u && u.status === "disabled";
      res.status(401).json({ ok: false, error: blocked ? "Аккаунт отключён" : "Неверный логин или пароль" });
      return;
    }
    keys.forEach(function (k) { fails.delete(k); });
    setSessionCookie(req, res, sessions.open(u.id));
    res.json({ ok: true, user: publicUser(u) });
  });

  router.post("/auth/logout", function (req, res) {
    const token = parseCookies(req)[SESSION_COOKIE];
    if (token) sessions.close(token);
    clearSessionCookie(res);
    res.json({ ok: true });
  });

  router.post("/auth/password", smallJson, function (req, res) {
    const me = requireUser(req, res);
    if (!me) return;
    const body = req.body || {};
    const next = String(body.newPassword || "");
    if (next.length < MIN_PASSWORD) {
      res.status(400).json({ ok: false, error: "Пароль не короче " + MIN_PASSWORD + " символов" });
      return;
    }
    const data = accounts.load();
    const u = accounts.byId(data, me.id);
    if (!checkPassword(body.oldPassword, u.passHash)) {
      res.status(400).json({ ok: false, error: "Старый пароль не подходит" });
      return;
    }
    u.passHash = hashPassword(next);
    u.passwordSetAt = Date.now();
    accounts.save(data);
    sessions.closeAllFor(u.id);
    setSessionCookie(req, res, sessions.open(u.id));
    res.json({ ok: true });
  });

  /* ---------- admin ---------- */

  router.get("/admin/users", function (req, res) {
    if (!requireAdmin(req, res)) return;
    res.json({ ok: true, users: accounts.load().users.map(publicUser) });
  });

  router.post("/admin/users", smallJson, function (req, res) {
    const admin = requireAdmin(req, res);
    if (!admin) return;
    try {
      const u = accounts.create({
        login: req.body && req.body.login,
        name: req.body && req.body.name,
        role: "teacher",
        createdBy: admin.id
      });
      res.json({ ok: true, user: publicUser(u) });
    } catch (e) {
      res.status(400).json({ ok: false, error: e.message });
    }
  });

  router.post("/admin/users/:id/reset", function (req, res) {
    const admin = requireAdmin(req, res);
    if (!admin) return;
    const data = accounts.load();
    const u = accounts.byId(data, req.params.id);
    if (!u) {
      res.status(404).json({ ok: false, error: "not found" });
      return;
    }
    if (u.id === admin.id) {
      res.status(400).json({ ok: false, error: "Свой пароль меняйте в профиле" });
      return;
    }
    u.status = "pending";
    u.passHash = "";
    accounts.save(data);
    sessions.closeAllFor(u.id);
    res.json({ ok: true, user: publicUser(u) });
  });

  router.post("/admin/users/:id/disable", smallJson, function (req, res) {
    const admin = requireAdmin(req, res);
    if (!admin) return;
    const data = accounts.load();
    const u = accounts.byId(data, req.params.id);
    if (!u) {
      res.status(404).json({ ok: false, error: "not found" });
      return;
    }
    if (u.id === admin.id) {
      res.status(400).json({ ok: false, error: "Нельзя отключить себя" });
      return;
    }
    const disable = !!(req.body && req.body.disabled);
    if (disable) {
      u.status = "disabled";
      sessions.closeAllFor(u.id);
    } else if (u.status === "disabled") {
      u.status = u.passHash ? "active" : "pending";
    }
    accounts.save(data);
    res.json({ ok: true, user: publicUser(u) });
  });

  /* ---------- data ---------- */

  router.get("/snapshot", function (req, res) {
    const me = sessionUser(req);
    const userId = me ? me.id : accounts.publicUserId();
    const known = req.query.rev != null ? Number(req.query.rev) : -1;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    if (!userId) {
      res.send(JSON.stringify({ ok: true, rev: 0, keyRevs: {}, data: {}, owner: "" }));
      return;
    }
    // owner tells the page whose copy this is, so a teacher's local edits never mix with the public copy
    const json = userStore(userId).snapshotJson(known);
    res.send(json.replace(/^\{/, '{"owner":' + JSON.stringify(me ? userId : "public") + ","));
  });

  router.post("/save", bigJson, function (req, res) {
    const me = requireUser(req, res);
    if (!me) return;
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
    const result = userStore(me.id).save(data, clientRevs, !!body.force);
    if (result.conflict) {
      res.status(409).json({ ok: false, error: "conflict", conflicts: result.conflicts, rev: result.rev });
      return;
    }
    res.json({ ok: true, rev: result.rev, keyRevs: result.keyRevs });
  });

  function mediaIdOk(id) {
    return /^[A-Za-z0-9_-]{4,80}$/.test(String(id || ""));
  }

  function findMediaFile(id) {
    let names = [];
    try {
      names = fs.readdirSync(mediaDir);
    } catch (e) {
      return "";
    }
    const exts = names.filter(function (f) {
      return f.indexOf(id + ".") === 0;
    });
    return exts.length ? path.join(mediaDir, exts[0]) : "";
  }

  router.put("/media/:id", mediaJson, function (req, res) {
    const me = requireUser(req, res);
    if (!me) return;
    const id = String(req.params.id || "");
    if (!mediaIdOk(id)) {
      res.status(400).json({ ok: false, error: "bad id" });
      return;
    }
    const owners = readJson(mediaOwnersFile, {}) || {};
    if (owners[id] && owners[id] !== me.id) {
      res.status(403).json({ ok: false, error: "media belongs to another teacher" });
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
    fs.mkdirSync(mediaDir, { recursive: true });
    writeAtomic(path.join(mediaDir, id + "." + ext), buf);
    if (owners[id] !== me.id) {
      owners[id] = me.id;
      writeAtomic(mediaOwnersFile, JSON.stringify(owners));
    }
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

module.exports = {
  createTeacherStoreRouter: createTeacherStoreRouter,
  createAccounts: createAccounts,
  SYNC_KEYS: SYNC_KEYS
};
