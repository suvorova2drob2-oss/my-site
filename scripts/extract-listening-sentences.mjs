import fs from "fs";
import path from "path";

const root = "js/ege-listening";
const dirs = ["listening-matching-units", "listening-tfns-units", "listening-mc-units"];

function splitSentences(text) {
  const s = String(text || "").trim();
  if (!s) return [];
  const re = /([^.!?]+[.!?]+)|([^.!?]+$)/g;
  const out = [];
  let m;
  while ((m = re.exec(s)) !== null) {
    const c = String(m[1] || m[2] || "").trim();
    if (c) out.push(c);
  }
  if (!out.length) out.push(s);
  return out;
}

function norm(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

const unique = new Map();

for (const d of dirs) {
  const dir = path.join(root, d);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".js"))) {
    const src = fs.readFileSync(path.join(dir, f), "utf8");
    const reFull = /fullText:\s*\n?\s*"((?:[^"\\]|\\.)*)"/gs;
    const reTurn = /speaker:\s*"[^"]+",\s*\n?\s*text:\s*\n?\s*"((?:[^"\\]|\\.)*)"/gs;
    for (const re of [reFull, reTurn]) {
      let m;
      re.lastIndex = 0;
      while ((m = re.exec(src)) !== null) {
        const text = m[1].replace(/\\n/g, " ").replace(/\\"/g, '"');
        for (const sent of splitSentences(text)) {
          const key = norm(sent);
          if (!unique.has(key)) unique.set(key, sent);
        }
      }
    }
  }
}

console.log("Unique sentences:", unique.size);
const outPath = "js/ege-listening/listening-sentence-ru-bank.json";
const obj = {};
for (const [, sent] of unique) {
  obj[sent] = "";
}
fs.writeFileSync(outPath, JSON.stringify(obj, null, 2), "utf8");
console.log("Wrote", outPath);
