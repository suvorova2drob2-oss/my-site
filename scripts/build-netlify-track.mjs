/**
 * One static tree → publish-cpe | publish-ege | publish-fce for separate Netlify sites.
 * Usage: node scripts/build-netlify-track.mjs cpe|ege|fce
 *
 * Sets <meta name="prep-deploy-track" content="…"> via the __PREP_META_TRACK__ placeholder
 * (index.html only — do not global-replace: it would break window.__PREP_DEPLOY_TRACK__).
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
  cpe: ["/ /index.html 200", "/b2 /fce.html 200", "/fce-course /fce.html 200", "/legacy /index.html 200"],
  ege: ["/ /ege.html 200", "/b2 /fce.html 200", "/fce-course /fce.html 200", "/legacy /index.html 200"],
  fce: ["/ /fce.html 200", "/b2 /fce.html 200", "/fce-course /fce.html 200", "/legacy /index.html 200"],
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

copyTree();
patchPrepMeta();
writeRedirects();
console.log("Built", OUT, "track=" + TRACK);
