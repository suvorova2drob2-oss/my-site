/**
 * Fix UTF-8 → Windows-1251 → UTF-8 mojibake in one file.
 * Encode Unicode string as CP1251 bytes, then decode those bytes as UTF-8.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(root, "use-of-english/part1-mc-cloze/index.html");

/** Unicode code point → CP1251 byte (0x80–0xFF); ASCII is identity */
const U_TO_CP1251 = new Map([
  [0x0402, 0x80], [0x0403, 0x81], [0x201a, 0x82], [0x0453, 0x83],
  [0x201e, 0x84], [0x2026, 0x85], [0x2020, 0x86], [0x2021, 0x87],
  [0x20ac, 0x88], [0x2030, 0x89], [0x0409, 0x8a], [0x2039, 0x8b],
  [0x040a, 0x8c], [0x040c, 0x8d], [0x040b, 0x8e], [0x040f, 0x8f],
  [0x0452, 0x90], [0x2018, 0x91], [0x2019, 0x92], [0x201c, 0x93],
  [0x201d, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97],
  [0x00a0, 0x98], // some tables use 0x98 differently; keep rare
  [0x2122, 0x99], [0x0459, 0x9a], [0x203a, 0x9b], [0x045a, 0x9c],
  [0x045c, 0x9d], [0x045b, 0x9e], [0x045f, 0x9f],
  [0x00a0, 0xa0], [0x040e, 0xa1], [0x045e, 0xa2], [0x0408, 0xa3],
  [0x00a4, 0xa4], [0x0490, 0xa5], [0x00a6, 0xa6], [0x00a7, 0xa7],
  [0x0401, 0xa8], [0x00a9, 0xa9], [0x0404, 0xaa], [0x00ab, 0xab],
  [0x00ac, 0xac], [0x00ad, 0xad], [0x00ae, 0xae], [0x0407, 0xaf],
  [0x00b0, 0xb0], [0x00b1, 0xb1], [0x0406, 0xb2], [0x0456, 0xb3],
  [0x0491, 0xb4], [0x00b5, 0xb5], [0x00b6, 0xb6], [0x00b7, 0xb7],
  [0x0451, 0xb8], [0x2116, 0xb9], [0x0454, 0xba], [0x00bb, 0xbb],
  [0x0458, 0xbc], [0x0405, 0xbd], [0x0455, 0xbe], [0x0457, 0xbf],
]);

for (let i = 0; i < 64; i++) {
  U_TO_CP1251.set(0x0410 + i, 0xc0 + i); // А–Я / а–п range via two loops
}
for (let i = 0; i < 32; i++) {
  U_TO_CP1251.set(0x0410 + i, 0xc0 + i); // А–Я
  U_TO_CP1251.set(0x0430 + i, 0xe0 + i); // а–я
}

function encodeCp1251(str) {
  const out = Buffer.alloc(str.length);
  for (let i = 0; i < str.length; i++) {
    const cp = str.charCodeAt(i);
    if (cp < 0x80) {
      out[i] = cp;
      continue;
    }
    if (cp < 0x100 && !U_TO_CP1251.has(cp)) {
      // Latin-1 byte that isn't in our map — keep as-is (rare)
      out[i] = cp;
      continue;
    }
    const b = U_TO_CP1251.get(cp);
    if (b === undefined) {
      throw new Error(
        "Cannot map U+" + cp.toString(16) + " (" + str[i] + ") at " + i
      );
    }
    out[i] = b;
  }
  return out;
}

function looksMojibake(s) {
  return /Р[А-Яа-яЁё]|вЂ|Г©|В«|В»/.test(s);
}

const raw = fs.readFileSync(target, "utf8");
if (!looksMojibake(raw)) {
  console.log("No mojibake markers — skip");
  process.exit(0);
}

const fixed = encodeCp1251(raw).toString("utf8");

const checks = [
  ["Назад", fixed.includes("Назад")],
  ["Редактор", fixed.includes("Редактор")],
  ["Part 1 —", fixed.includes("Part 1 —")],
  ["no leftover РќР°", !fixed.includes("РќР°Р·Р°Рґ")],
  ["no leftover вЂ", !/вЂ/.test(fixed)],
];

for (const [label, ok] of checks) {
  console.log((ok ? "OK  " : "FAIL") + " " + label);
}
if (checks.some(([, ok]) => !ok)) {
  console.error("Validation failed — not writing");
  process.exit(1);
}

fs.writeFileSync(target, fixed, "utf8");
console.log("Fixed:", path.relative(root, target));
console.log("Sample title line:", fixed.split("\n")[5]);
