import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(root, "js/ege-writing/ege-writing-data-v2.js");

const clean = execSync("git show HEAD:js/ege-writing/ege-writing-data-v2.js", {
  cwd: root,
  encoding: "utf8"
});

const current = fs.readFileSync(target, "utf8");
const unit2Start = current.indexOf('id: "ege-email-task37-u2"');
if (unit2Start < 0) {
  console.error("Unit 2 block not found in current file");
  process.exit(1);
}

const unit2Chunk = current.slice(unit2Start);
const unit2End = unit2Chunk.lastIndexOf("\n      }");
const unit2Body = unit2Chunk.slice(0, unit2End + "\n      }".length);

function fixStringLiteral(inner) {
  if (!/[РЎРћРџРЇР›В]/.test(inner)) return inner;
  const fixed = Buffer.from(inner, "latin1").toString("utf8");
  if (/[\u0400-\u04FF]/.test(fixed) && !/РћС|Р›Рѕ|РЎС/.test(fixed)) {
    return fixed;
  }
  return inner;
}

function fixChunk(text) {
  return text.replace(/"((?:\\.|[^"\\])*)"/g, (full, inner) => {
    const fixed = fixStringLiteral(inner);
    return fixed === inner ? full : `"${fixed}"`;
  });
}

const unit2Fixed = fixChunk(unit2Body);

const cleanInsertPoint = clean.lastIndexOf("\n    ]");
const merged =
  clean.slice(0, cleanInsertPoint) +
  ",\n      {\n        " +
  unit2Fixed +
  clean.slice(cleanInsertPoint);

if (!merged.includes("Локальная проверка")) {
  console.error("Clean base missing expected Cyrillic");
  process.exit(1);
}
if (!merged.includes("Отдельная шкала")) {
  console.error("Unit 2 fix missing expected Cyrillic");
  process.exit(1);
}
if (merged.includes("РћС‚РґРµР»СЊРЅР°СЏ")) {
  console.error("Mojibake still present");
  process.exit(1);
}

fs.writeFileSync(target, merged, "utf8");
console.log("Merged clean Unit 1 from git with fixed Unit 2 block.");
