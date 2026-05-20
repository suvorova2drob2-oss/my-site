import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === ".git" || e.name.startsWith("publish-") || e.name === "dist") {
        continue;
      }
      walk(p, out);
    } else if (e.isFile()) {
      if (/\.(html|js|mjs|cjs)$/i.test(e.name)) out.push(p);
    }
  }
  return out;
}

const files = walk(root);
const findings = [];
const SKIP_PATHS = [
  "live-supabase-local.js",
  "live-supabase-local.example.js",
  "js/prep-cloud-client.js",
  "js/prep-remote-defaults.js",
  "scripts/check-security-guards.mjs"
];

function isSkipped(relPath) {
  const rp = relPath.replace(/\\/g, "/");
  return SKIP_PATHS.some((p) => rp === p);
}

// High-risk patterns we do not want to reintroduce.
const rules = [
  {
    name: "backLabel injected via innerHTML",
    re: /innerHTML\s*=\s*[^;\n]*backLabel/i
  },
  {
    name: "Legacy Supabase local config script include",
    re: /live-supabase-local\.js/i
  }
];

for (const file of files) {
  const rel = path.relative(root, file).replace(/\\/g, "/");
  if (isSkipped(rel)) continue;
  let src = "";
  try {
    src = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }

  // Direct (unsafe) query-param assignment patterns only.
  const lines = src.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/\.\s*href\s*=\s*(?:q|params|sp|searchParams)\.get\(\s*['"](back|next)['"]\s*\)/i.test(line)) {
      findings.push({
        file: rel,
        rule: "Direct href assignment from back/next query param"
      });
    }
    if (/location\.href\s*=\s*(?:q|params|sp|searchParams)\.get\(\s*['"](back|next)['"]\s*\)/i.test(line)) {
      findings.push({
        file: rel,
        rule: "Direct location assignment from back/next query param"
      });
    }
  }

  for (const rule of rules) {
    if (rule.re.test(src)) {
      findings.push({
        file: rel,
        rule: rule.name
      });
    }
  }
}

if (findings.length) {
  console.error("[check-security-guards] FAILED");
  for (const f of findings) {
    console.error(`- ${f.file}: ${f.rule}`);
  }
  process.exit(1);
}

console.log("[check-security-guards] OK — no blocked security patterns found.");
