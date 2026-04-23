/**
 * One static tree → publish-cpe | publish-ege | publish-fce for separate Netlify sites.
 * Usage: node scripts/build-netlify-track.mjs cpe|ege|fce
 *
 * - CPE publish: full index.html; removes ege.html & fce.html.
 * - EGE / FCE publish: removes the other track’s hub HTML; replaces root index.html with a tiny redirect stub to ege.html | fce.html (no full CPE app on that origin).
 *
 * Sets <meta name="prep-deploy-track" content="…"> via the __PREP_META_TRACK__ placeholder
 * in any HTML file that includes it (see index.html, ege.html, fce.html).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const TRACK = String(process.argv[2] || "cpe").toLowerCase();
if (!["cpe", "ege", "fce"].includes(TRACK)) {
  console.error("Usage: node scripts/build-netlify-track.mjs cpe|ege|fce");
  process.exit(1);
}

const OUT = path.join(ROOT, `publish-${TRACK}`);

/** Top-level hub HTML removed per track so each Netlify site only ships its own home (+ shared content). */
const DROP_TOP_HTML = {
  cpe: ["ege.html", "fce.html"],
  ege: ["fce.html"],
  fce: ["ege.html"],
};

const IGNORE_TOP = new Set([
  "node_modules",
  ".git",
  "publish-cpe",
  "publish-ege",
  "publish-fce",
  ".cursor",
  ".DS_Store",
]);

function shouldCopyTopLevel(name) {
  if (IGNORE_TOP.has(name)) return false;
  return true;
}

function copyTree() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  for (const ent of fs.readdirSync(ROOT, { withFileTypes: true })) {
    const name = ent.name;
    if (ent.isFile()) {
      fs.copyFileSync(path.join(ROOT, name), path.join(OUT, name));
      continue;
    }
    if (!ent.isDirectory()) continue;
    if (!shouldCopyTopLevel(name)) continue;
    fs.cpSync(path.join(ROOT, name), path.join(OUT, name), { recursive: true });
  }
}

const REDIRECT_LINES = {
  cpe: [
    "/ /index.html 200",
    "/b2 /index.html 200",
    "/fce-course /index.html 200",
    "/legacy /index.html 200",
  ],
  ege: [
    "/ /ege.html 200",
    "/b2 /ege.html 200",
    "/fce-course /ege.html 200",
    "/legacy /ege.html 200",
  ],
  fce: [
    "/ /fce.html 200",
    "/b2 /fce.html 200",
    "/fce-course /fce.html 200",
    "/legacy /fce.html 200",
  ],
};

function writeRedirects() {
  const body = REDIRECT_LINES[TRACK].join("\n") + "\n";
  fs.writeFileSync(path.join(OUT, "_redirects"), body, "utf8");
}

function walkHtmlFiles(dir, acc) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkHtmlFiles(p, acc);
    else if (ent.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function patchPrepMeta() {
  const re = /<meta\s+name="prep-deploy-track"\s+content="__PREP_META_TRACK__"\s*>/;
  const htmlFiles = walkHtmlFiles(OUT, []);
  for (const file of htmlFiles) {
    let s = fs.readFileSync(file, "utf8");
    if (!re.test(s)) continue;
    s = s.replace(
      re,
      `<meta name="prep-deploy-track" content="${TRACK}">`
    );
    fs.writeFileSync(file, s, "utf8");
  }
}

/** EGE/FCE sites: no full CPE hub — tiny index forwards to the real home (keeps /index.html URLs from 404ing). */
function writeLightIndexStub() {
  if (TRACK !== "ege" && TRACK !== "fce") return;
  const target = TRACK === "ege" ? "ege.html" : "fce.html";
  const stub = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redirect…</title>
  <meta http-equiv="refresh" content="0;url=${target}" />
  <script>
    (function () {
      var t = ${JSON.stringify(target)};
      var s = window.location.search || "";
      var h = window.location.hash || "";
      try {
        location.replace(t + s + h);
      } catch (e) {
        location.href = t + s + h;
      }
    })();
  </script>
</head>
<body>
  <p style="font-family:system-ui,sans-serif;padding:1rem"><a href="${target}">Continue to course home…</a></p>
</body>
</html>
`;
  fs.writeFileSync(path.join(OUT, "index.html"), stub, "utf8");
}

function pruneSiblingHubFiles() {
  for (const name of DROP_TOP_HTML[TRACK] || []) {
    const p = path.join(OUT, name);
    if (fs.existsSync(p)) fs.rmSync(p);
  }
}

copyTree();
pruneSiblingHubFiles();
writeLightIndexStub();
patchPrepMeta();
writeRedirects();
console.log("Built", OUT, "track=" + TRACK);
