import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "unit3-digital-detox");
const files = [1, 2, 3, 4, 5, 6].map((n) => `text-0${n}-digital-detox.html`);
const acc = [];
for (const f of files) {
  let s = fs.readFileSync(path.join(root, f), "utf8");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, " ");
  s = s.replace(/<span[^>]*class="lex-tip"[^>]*>([^<]*)<\/span>/g, "$1");
  s = s.replace(/<script[\s\S]*?<\/script>/g, " ");
  s = s.replace(/<[^>]+>/g, " ");
  s = s.replace(/&rsquo;|&#8217;/g, "'");
  s = s.replace(/&lsquo;|&#8216;/g, "'");
  s = s.replace(/&rdquo;|&ldquo;/g, '"');
  s = s.replace(/&hellip;/g, "...");
  s = s.replace(/&mdash;/g, "-");
  s = s.replace(/&ndash;/g, "-");
  s = s.replace(/\s+/g, " ").trim();
  acc.push(s);
}
const full = acc.join(" ").replace(/\s+/g, " ");
const lexPath = path.join(root, "data", "u3-digital-detox-lexis.js");
const lex = fs.readFileSync(lexPath, "utf8");
const phrases = [];
const re = /"((?:[^"\\]|\\.)*)"/g;
const block = lex.split("U3_DIGITAL_DETOX_BY_PART")[1] || "";
let m;
while ((m = re.exec(block)) && phrases.length < 80) {
  const q = m[1].replace(/\\'/g, "'");
  if (q.length > 4 && !q.includes("part") && q !== "My digital detox") phrases.push(q);
}
const uniq = [...new Set(phrases)];
let missing = [];
for (const p of uniq) {
  if (full.indexOf(p) < 0) {
    missing.push(p);
  }
}
console.log(JSON.stringify({ length: full.length, phraseCount: uniq.length, missing }, null, 2));
if (missing.length) process.exitCode = 1;

const outPath = path.join(__dirname, "..", "unit3-digital-detox", "data", "u3-digital-detox-passage-plain.js");
const body = `/**
 * Plain passage for My digital detox (all six parts) — for Unit 3 (FCE) on-disk games only, not app Unit 9.
 * Regenerate: \`node scripts/extract-u3-digital-detox-plain.mjs\` (re-run after text HTML edits).
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;
  G.U3_DIGITAL_DETOX_LEX_SPEAKER = "Reading: My digital detox";
  G.U3_DIGITAL_DETOX_PASSAGE_PLAIN = ${JSON.stringify(full)};
})(typeof globalThis !== "undefined" ? globalThis : this);
`;
fs.writeFileSync(outPath, body, "utf8");
console.log("Wrote", outPath);
