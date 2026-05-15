/**
 * Track hygiene checks — wrong relative URLs break on deploy/Linux and confuse CPE vs FCE roots.
 * Usage: node scripts/check-tracks.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SKIP_DIRS = new Set([
  "node_modules",
  "dist",
  "publish-cpe",
  "publish-fce",
  "publish-ege",
  ".git",
  ".cursor",
]);

/** @type {{ id: string; message: string; test: (relPath: string, text: string) => string[] }}[] */
const RULES = [
  {
    id: "encoded-double-back-u10-subhub",
    message:
      "Encoded back URL uses ../../unit10/{fce|cpe}/ — from use-of-english/** tasks use ../unit10/... (single .. from part folders).",
    test(rel, text) {
      const re = /\.\.%2F\.\.%2Funit10%2F(fce|cpe)%2F/gi;
      return matchLines(text, re);
    },
  },
  {
    id: "part-uoe-root-unit10-subhub",
    message:
      "From part1-mc-cloze or part2-open-cloze, ../../unit10/fce|cpe/ resolves to site root /unit10/… (wrong). Use ../unit10/…",
    test(rel, text) {
      const lower = rel.replace(/\\/g, "/").toLowerCase();
      if (!lower.includes("/use-of-english/part1-mc-cloze/") && !lower.includes("/use-of-english/part2-open-cloze/")) {
        return [];
      }
      const re = /href\s*=\s*["']((?:\.\.\/){2})unit10\/(fce|cpe)\//gi;
      return matchLines(text, re);
    },
  },
];

/**
 * @param {string} text
 * @param {RegExp} re
 */
function matchLines(text, re) {
  const hits = [];
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    re.lastIndex = 0;
    if (re.test(lines[i])) hits.push(`line ${i + 1}: ${lines[i].trim().slice(0, 160)}`);
  }
  return hits;
}

/**
 * @param {string} dir
 * @param {(f: string, rel: string) => void} onFile
 */
function walk(dir, onFile) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    const rel = path.relative(ROOT, full);
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      walk(full, onFile);
    } else if (/\.html?$/i.test(ent.name)) {
      onFile(full, rel);
    }
  }
}

let errors = 0;
walk(ROOT, (full, rel) => {
  let text;
  try {
    text = fs.readFileSync(full, "utf8");
  } catch {
    return;
  }
  const posix = rel.split(path.sep).join("/");
  for (const rule of RULES) {
    const lines = rule.test(posix, text);
    if (lines.length) {
      errors++;
      console.error(`\n[check-tracks] FAIL ${rule.id}`);
      console.error(`  file: ${posix}`);
      console.error(`  ${rule.message}`);
      for (const L of lines.slice(0, 12)) console.error(`    ${L}`);
      if (lines.length > 12) console.error(`    … +${lines.length - 12} more`);
    }
  }
});

if (errors) {
  console.error(`\n[check-tracks] ${errors} file(s) with issues — fix before deploy.\n`);
  process.exit(1);
}

console.log("[check-tracks] OK — no forbidden track/path patterns found.\n");
