import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const indexPath = path.join(root, "index.html");
const src = fs.readFileSync(indexPath, "utf8");

const checks = [
  {
    name: "No legacy Level 7 direct opener",
    failIfMatch: /openUnitDetail\(7\)/,
    hint: "Level 7 must route via openBuiltInUnitMenu/openGenericUnitMenu."
  },
  {
    name: "No Classic Level 7 legacy tile",
    failIfMatch: /appendLegacy\("Classic Level 7"/,
    hint: "Legacy Level 7 tile should not be rendered."
  },
  {
    name: "No direct showScreen to protected legacy screens",
    failIfMatch: /showScreen\(['"](screen-uoe|screen-uoe-wf-detail|screen-unit-detail)['"]\)/,
    hint: "Use showLegacyProtectedScreen(...) instead."
  },
  {
    name: "Deep-link unit7 routes via built-in router",
    mustMatch: /targetScreen === 'unit7'[\s\S]{0,120}openBuiltInUnitMenu\(7\)/,
    hint: "Boot routing for unit7 must call openBuiltInUnitMenu(7)."
  },
  {
    name: "Deep-link unit8 routes via built-in router",
    mustMatch: /targetScreen === 'unit8'[\s\S]{0,120}openBuiltInUnitMenu\(8\)/,
    hint: "Boot routing for unit8 must call openBuiltInUnitMenu(8)."
  },
  {
    name: "Deep-link unit12 routes via built-in router",
    mustMatch: /targetScreen === 'unit12'[\s\S]{0,120}openBuiltInUnitMenu\(12\)/,
    hint: "Boot routing for unit12 must call openBuiltInUnitMenu(12)."
  }
];

const failures = [];
for (const c of checks) {
  if (c.failIfMatch && c.failIfMatch.test(src)) {
    failures.push(`FAIL: ${c.name} — ${c.hint}`);
  }
  if (c.mustMatch && !c.mustMatch.test(src)) {
    failures.push(`FAIL: ${c.name} — ${c.hint}`);
  }
}

if (failures.length) {
  console.error("[check-hub-routing] FAILED");
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log("[check-hub-routing] OK — routing guards are consistent.");
