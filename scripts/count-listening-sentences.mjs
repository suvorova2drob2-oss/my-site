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

let total = 0;
for (const d of dirs) {
  const dir = path.join(root, d);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".js"))) {
    const src = fs.readFileSync(path.join(dir, f), "utf8");
    const id = src.match(/id:\s*"([^"]+)"/)?.[1] || f;
    let n = 0;
    const reFull = /fullText:\s*\n?\s*"((?:[^"\\]|\\.)*)"/gs;
    let m;
    while ((m = reFull.exec(src)) !== null) {
      n += splitSentences(m[1].replace(/\\n/g, " ")).length;
    }
    const reTurn = /speaker:\s*"[^"]+",\s*\n?\s*text:\s*\n?\s*"((?:[^"\\]|\\.)*)"/gs;
    while ((m = reTurn.exec(src)) !== null) {
      n += splitSentences(m[1].replace(/\\n/g, " ")).length;
    }
    console.log(`${id}: ~${n}`);
    total += n;
  }
}
console.log(`TOTAL ~${total}`);
