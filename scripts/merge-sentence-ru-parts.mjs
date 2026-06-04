import fs from "fs";
import path from "path";

const bankPath = "js/ege-listening/listening-sentence-ru-bank.json";
const partsDir = "js/ege-listening/sentence-ru-parts";

let bank = {};
if (fs.existsSync(bankPath)) {
  bank = JSON.parse(fs.readFileSync(bankPath, "utf8"));
}

const files = fs.readdirSync(partsDir).filter((f) => f.endsWith(".json"));
let merged = 0;
for (const f of files) {
  const part = JSON.parse(fs.readFileSync(path.join(partsDir, f), "utf8"));
  for (const [k, v] of Object.entries(part)) {
    if (v && String(v).trim()) {
      bank[k] = v;
      merged++;
    }
  }
}

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), "utf8");
const keys = Object.keys(bank);
const filled = keys.filter((k) => bank[k]).length;
console.log(`Merged ${files.length} part files, ${merged} entries touched`);
console.log(`Bank: ${keys.length} keys, ${filled} filled, ${keys.length - filled} empty`);
