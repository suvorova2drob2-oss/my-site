import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(root, "js/ege-writing/ege-writing-data-v2.js");
const unit2Path = path.join(root, "js/ege-writing/ege-writing-unit2-tasks.js");

const clean = execSync("git show HEAD:js/ege-writing/ege-writing-data-v2.js", {
  cwd: root,
  encoding: "utf8"
});

const unit2Src = fs.readFileSync(unit2Path, "utf8");
const unit2Match = unit2Src.match(/export const UNIT2_TASKS = (\[[\s\S]*\]);/);
if (!unit2Match) {
  console.error("UNIT2_TASKS export not found");
  process.exit(1);
}

const unit2Tasks = Function("return " + unit2Match[1])();
const insertAt = clean.lastIndexOf("\n    ]");
const taskBlocks = unit2Tasks
  .map((task) => "      " + JSON.stringify(task, null, 2).replace(/^/gm, "  ").slice(2))
  .join(",\n");

const merged =
  clean.slice(0, insertAt) +
  ",\n" +
  taskBlocks +
  clean.slice(insertAt);

fs.writeFileSync(target, merged, "utf8");
console.log("Restored clean Unit 1 and appended", unit2Tasks.length, "Unit 2 tasks.");
