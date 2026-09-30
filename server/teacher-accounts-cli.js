#!/usr/bin/env node
/**
 * Teacher accounts from the VPS shell (the server re-reads accounts.json on every request).
 *
 *   node server/teacher-accounts-cli.js add-admin <login> ["Имя"]   → pending admin; set the password on auth.html
 *   node server/teacher-accounts-cli.js list
 *   node server/teacher-accounts-cli.js reset <login>                → pending again (forgotten password)
 *
 * Store dir: TEACHER_STORE_DIR (same as the server), default ../teacher-store-data next to the repo.
 */
"use strict";

const path = require("path");
const { createAccounts } = require("./teacher-store-api");

const dir = path.resolve(
  process.env.TEACHER_STORE_DIR || path.join(__dirname, "..", "..", "teacher-store-data")
);
const accounts = createAccounts(dir);
const [cmd, login, name] = process.argv.slice(2);

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

if (cmd === "add-admin") {
  if (!login) fail("usage: add-admin <login> [name]");
  try {
    const u = accounts.create({ login: login, name: name, role: "admin", createdBy: "cli" });
    console.log("Admin " + u.login + " (" + u.id + ") created, status pending.");
    console.log("Open auth.html, enter the login and set a password.");
  } catch (e) {
    fail(e.message);
  }
} else if (cmd === "list") {
  accounts.load().users.forEach(function (u) {
    console.log([u.id, u.login, u.role, u.status, u.name].join("\t"));
  });
} else if (cmd === "reset") {
  if (!login) fail("usage: reset <login>");
  const data = accounts.load();
  const u = accounts.byLogin(data, login);
  if (!u) fail("no such login");
  u.status = "pending";
  u.passHash = "";
  accounts.save(data);
  console.log(u.login + " is pending: set a new password on auth.html (old sessions stop working).");
} else {
  fail("commands: add-admin <login> [name] | list | reset <login>\nstore: " + dir);
}
