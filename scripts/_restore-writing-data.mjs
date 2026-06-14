import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(root, "js/ege-writing/ege-writing-data-v2.js");
const clean = execSync("git show HEAD:js/ege-writing/ege-writing-data-v2.js", {
  cwd: root,
  encoding: "utf8"
});
fs.writeFileSync(target, clean, "utf8");
console.log("Restored Unit 1 from git with correct UTF-8.");
