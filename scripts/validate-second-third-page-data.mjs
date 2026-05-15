/**
 * Проверяет, что в js/ege-conditionals/second-third-page-data.js объявлены все ключи пакета.
 * Запуск: node scripts/validate-second-third-page-data.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const file = path.join(ROOT, "js", "ege-conditionals", "second-third-page-data.js");
const s = fs.readFileSync(file, "utf8");
const keys = [
  "ex1FlipCards",
  "drill1Slides",
  "drill2Slides",
  "chainDrills",
  "blitzItems",
  "famousFails",
  "mixedHeartItems",
];
for (const k of keys) {
  if (!s.includes("D." + k)) {
    console.error("Missing assignment:", k);
    process.exit(1);
  }
}
execSync(`node --check "${file}"`, { stdio: "inherit" });
console.log("second-third-page-data.js OK");
