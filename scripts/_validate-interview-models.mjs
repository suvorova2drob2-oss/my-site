import fs from "fs";
import vm from "vm";

const code = fs.readFileSync("js/ege-speaking/speaking-interview-models.js", "utf8");
const pack = { units: [] };
for (let i = 1; i <= 20; i++) pack.units.push({ id: `v${i}-interview` });

const ctx = { window: {}, __EGE_SPEAKING_INTERVIEW_DATA__: pack };
ctx.window = ctx;
vm.runInContext(code, vm.createContext(ctx));

let total = 0;
const bad = [];
for (const u of pack.units) {
  const n = (u.modelAnswers || []).length;
  total += n;
  if (n !== 5) bad.push(`${u.id}: count=${n}`);
  (u.modelAnswers || []).forEach((m, j) => {
    if (!m.text || !m.criteria) bad.push(`${u.id} q${j + 1} incomplete`);
  });
}

console.log({ units: pack.units.length, total, bad });
