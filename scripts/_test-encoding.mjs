import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const target = path.join(path.dirname(fileURLToPath(import.meta.url)), "../js/ege-writing/ege-writing-data-v2.js");
const s = fs.readFileSync(target, "utf8");
const m = s.match(/Unit 1: personal email\. ([^"]+)/);
const inner = m[1];
console.log("RAW:", inner);
console.log("latin1->utf8:", Buffer.from(inner, "latin1").toString("utf8"));
console.log("binary->utf8:", Buffer.from(inner, "binary").toString("utf8"));
