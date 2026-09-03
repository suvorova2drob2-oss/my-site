/**
 * Start local Live server (port 8787) + optional browser.
 * Usage: node scripts/run-local-live.mjs [--open=URL]
 */
import { spawn } from "node:child_process";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const PORT = 8787;

function firstLanIPv4() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return null;
}

function withLanHost(url) {
  const lan = firstLanIPv4();
  if (!lan) return url;
  return String(url || "").replace(/127\.0\.0\.1/g, lan);
}

function waitHealth(maxMs = 20000) {
  const start = Date.now();
  return new Promise(function (resolve, reject) {
    function ping() {
      http
        .get("http://127.0.0.1:" + PORT + "/health", function (res) {
          if (res.statusCode === 200) resolve();
          else retry();
        })
        .on("error", retry);
    }
    function retry() {
      if (Date.now() - start > maxMs) {
        reject(new Error("Live server did not respond on port " + PORT));
      } else {
        setTimeout(ping, 350);
      }
    }
    ping();
  });
}

const openArg = process.argv.find(function (a) {
  return a.startsWith("--open");
});
const defaultOpen =
  "http://127.0.0.1:8787/unit1-class-games/tic-tac-toe-gaps.html";
const openUrl = withLanHost(
  openArg && openArg.includes("=")
    ? openArg.split("=").slice(1).join("=")
    : defaultOpen
);

const child = spawn("node", ["server/live-rooms-server.js"], {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
});

child.on("exit", function (code) {
  process.exit(code || 0);
});

waitHealth()
  .then(function () {
    const lan = firstLanIPv4();
    console.log("[live:local] Server OK on http://127.0.0.1:" + PORT);
    if (lan) {
      console.log(
        "[live:local] Phones / other devices (same Wi-Fi): http://" +
          lan +
          ":" +
          PORT +
          "/"
      );
      console.log(
        "[live:local] Open the game at that IP, then Create room — copy THAT link to students."
      );
    } else {
      console.log("[live:local] Could not detect LAN IP — phones may not connect.");
    }
    if (openArg !== undefined) {
      console.log("[live:local] Opening:", openUrl);
      const cmd =
        process.platform === "win32"
          ? spawn("cmd", ["/c", "start", "", openUrl], {
              detached: true,
              stdio: "ignore",
            })
          : spawn("open", [openUrl], { detached: true, stdio: "ignore" });
      cmd.unref();
    }
  })
  .catch(function (err) {
    console.error("[live:local]", err.message || err);
  });
