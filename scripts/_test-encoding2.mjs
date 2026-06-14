import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const target = path.join(path.dirname(fileURLToPath(import.meta.url)), "../js/ege-writing/ege-writing-data-v2.js");
const s = fs.readFileSync(target, "utf8");
const m = s.match(/Unit 1: personal email\. ([^"]+)/);
const inner = m[1];
for (const ch of inner) {
  const code = ch.charCodeAt(0);
  if (code > 0xff) console.log(JSON.stringify(ch), "U+" + code.toString(16).toUpperCase());
}
