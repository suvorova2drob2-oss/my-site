/**
 * One-off generator · Eat beat 2 dialogue comic panels (SVG, no text on image).
 * Run: node workshops/pre-intermediate/tools/gen-eat2-comic-svgs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "img", "eat2-comics");

const scenes = [
  { file: "01-hungry", draw: drawHungry },
  { file: "02-yeah-a-bit", draw: drawABit },
  { file: "03-something-to-eat", draw: drawInviteEat },
  { file: "04-where-going", draw: drawWhereGoing },
  { file: "05-thai-place", draw: drawThaiPlace },
  { file: "06-went-yesterday", draw: drawYesterday },
  { file: "07-not-again-today", draw: drawNotToday },
  { file: "08-no-spicy", draw: drawNoSpicy },
  { file: "09-somewhere-else", draw: drawSomewhereElse },
  { file: "10-seafood-dept", draw: drawSeafoodDept },
  { file: "11-prefer-meat", draw: drawPreferMeat },
  { file: "12-selale", draw: drawSelale },
  { file: "13-never-heard", draw: drawNeverHeard },
  { file: "14-walk-bus", draw: drawWalkBus },
  { file: "15-what-kind", draw: drawWhatKind },
  { file: "16-turkish-good", draw: drawTurkish },
  { file: "17-never-turkish", draw: drawNeverTurkish },
  { file: "18-joking-meat", draw: drawJokingMeat },
  { file: "19-sounds-great", draw: drawSoundsGreat },
  { file: "20-busy-wait", draw: drawBusyWait },
  { file: "21-ring-table", draw: drawRingTable },
  { file: "22-phone-number", draw: drawPhoneNumber },
];

function panel(open, inner) {
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">\n` +
    `<defs><pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#000" opacity="0.08"/></pattern></defs>\n` +
    `<rect width="400" height="300" fill="#fff7e6"/>\n` +
    `<rect width="400" height="300" fill="url(#dots)"/>\n` +
    `<rect x="6" y="6" width="388" height="288" rx="12" fill="none" stroke="#1a1a1a" stroke-width="5"/>\n` +
    inner +
    `</svg>`
  );
}

function person(x, y, color, armUp) {
  const arm = armUp
    ? `<path d="M${x - 28} ${y + 10} Q${x - 40} ${y - 20} ${x - 18} ${y - 35}" fill="none" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>`
    : `<path d="M${x - 22} ${y + 8} L${x - 38} ${y + 38}" fill="none" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
       <path d="M${x + 22} ${y + 8} L${x + 38} ${y + 38}" fill="none" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>`;
  return (
    `<circle cx="${x}" cy="${y - 42}" r="22" fill="${color}" stroke="#1a1a1a" stroke-width="4"/>
     <path d="M${x} ${y - 20} L${x} ${y + 45}" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
     ${arm}
     <path d="M${x - 18} ${y + 45} L${x - 28} ${y + 88}" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
     <path d="M${x + 18} ${y + 45} L${x + 28} ${y + 88}" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>`
  );
}

function drawHungry() {
  return panel(true,
    person(260, 130, "#7dd3fc", false) +
    person(140, 130, "#f9a8d4", true) +
    `<path d="M230 115 Q248 95 266 115 Q248 135 230 115" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
     <path d="M235 112 Q248 102 261 112" fill="none" stroke="#dc2626" stroke-width="2"/>`
  );
}
function drawABit() {
  return panel(true,
    person(220, 130, "#7dd3fc", false) +
    `<circle cx="280" cy="200" r="18" fill="#fde68a" stroke="#1a1a1a" stroke-width="3"/>
     <path d="M298 200 L320 200" stroke="#1a1a1a" stroke-width="3"/>`
  );
}
function drawInviteEat() {
  return panel(true,
    person(160, 130, "#f9a8d4", false) +
    person(280, 130, "#7dd3fc", false) +
    `<path d="M120 210 L180 210" stroke="#1a1a1a" stroke-width="4"/>
     <path d="M150 190 L150 230 M130 210 L170 210" stroke="#1a1a1a" stroke-width="4"/>`
  );
}
function drawWhereGoing() {
  return panel(true,
    person(200, 130, "#7dd3fc", true) +
    `<circle cx="300" cy="100" r="40" fill="#e0f2fe" stroke="#1a1a1a" stroke-width="4"/>
     <text x="300" y="108" text-anchor="middle" font-size="36" font-weight="900">?</text>`
  );
}
function drawThaiPlace() {
  return panel(true,
    person(120, 140, "#f9a8d4", true) +
    `<path d="M220 200 L280 140 L340 200 Z" fill="#dc2626" stroke="#1a1a1a" stroke-width="4"/>
     <rect x="250" y="200" width="60" height="50" fill="#fcd34d" stroke="#1a1a1a" stroke-width="3"/>
     <path d="M180 230 L360 230" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>`
  );
}
function drawYesterday() {
  return panel(true,
    person(200, 130, "#7dd3fc", false) +
    `<rect x="240" y="70" width="120" height="100" rx="8" fill="#fff" stroke="#1a1a1a" stroke-width="4"/>
     <circle cx="300" cy="105" r="22" fill="#fecaca" stroke="#dc2626" stroke-width="4"/>
     <path d="M288 105 L312 105 M300 93 L300 117" stroke="#dc2626" stroke-width="3"/>
     <ellipse cx="300" cy="175" rx="35" ry="12" fill="#fbbf24" stroke="#1a1a1a" stroke-width="2"/>`
  );
}
function drawNotToday() {
  return panel(true,
    person(140, 130, "#f9a8d4", true) +
    `<rect x="220" y="90" width="140" height="120" rx="8" fill="#fecaca" stroke="#1a1a1a" stroke-width="4"/>
     <path d="M250 150 L330 150 M290 110 L290 190" stroke="#dc2626" stroke-width="8"/>`
  );
}
function drawNoSpicy() {
  return panel(true,
    person(120, 150, "#7dd3fc", true) +
    `<path d="M260 180 L300 120 L340 180 Z" fill="#dc2626" stroke="#1a1a1a" stroke-width="3"/>
     <path d="M280 200 L320 240 M320 200 L280 240" stroke="#1a1a1a" stroke-width="5"/>`
  );
}
function drawSomewhereElse() {
  return panel(true,
    person(200, 130, "#f9a8d4", true) +
    `<rect x="80" y="190" width="50" height="60" fill="#a7f3d0" stroke="#1a1a1a" stroke-width="3"/>
     <rect x="170" y="190" width="50" height="60" fill="#bfdbfe" stroke="#1a1a1a" stroke-width="3"/>
     <rect x="260" y="190" width="50" height="60" fill="#fde68a" stroke="#1a1a1a" stroke-width="3"/>`
  );
}
function drawSeafoodDept() {
  return panel(true,
    person(280, 130, "#7dd3fc", true) +
    `<rect x="60" y="100" width="160" height="140" fill="#e2e8f0" stroke="#1a1a1a" stroke-width="4"/>
     <rect x="100" y="120" width="80" height="12" fill="#94a3b8"/>
     <path d="M100 200 Q130 160 160 200" fill="#fca5a5" stroke="#1a1a1a" stroke-width="3"/>
     <circle cx="115" cy="195" r="4" fill="#1a1a1a"/><circle cx="145" cy="195" r="4" fill="#1a1a1a"/>`
  );
}
function drawPreferMeat() {
  return panel(true,
    person(200, 130, "#f9a8d4", false) +
    `<ellipse cx="120" cy="200" rx="40" ry="25" fill="#bae6fd" stroke="#1a1a1a" stroke-width="3"/>
     <path d="M100 200 L140 200 M120 185 L120 215" stroke="#dc2626" stroke-width="4"/>
     <rect x="260" y="185" width="70" height="35" rx="8" fill="#78350f" stroke="#1a1a1a" stroke-width="3"/>`
  );
}
function drawSelale() {
  return panel(true,
    person(140, 130, "#7dd3fc", true) +
    `<rect x="200" y="110" width="160" height="100" rx="10" fill="#fef3c7" stroke="#1a1a1a" stroke-width="4"/>
     <circle cx="280" cy="150" r="18" fill="#dc2626" stroke="#1a1a1a" stroke-width="2"/>
     <circle cx="280" cy="150" r="8" fill="#fff"/>`
  );
}
function drawNeverHeard() {
  return panel(true,
    person(200, 130, "#f9a8d4", true) +
    `<ellipse cx="300" cy="110" rx="55" ry="40" fill="#fff" stroke="#1a1a1a" stroke-width="4"/>
     <text x="300" y="118" text-anchor="middle" font-size="32" font-weight="900">?</text>`
  );
}
function drawWalkBus() {
  return panel(true,
    person(160, 150, "#7dd3fc", false) +
    `<circle cx="280" cy="200" r="28" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
     <text x="280" y="207" text-anchor="middle" font-size="16" font-weight="800">15</text>
     <rect x="320" y="170" width="60" height="40" fill="#fde047" stroke="#1a1a1a" stroke-width="3"/>`
  );
}
function drawWhatKind() {
  return panel(true,
    person(200, 130, "#f9a8d4", false) +
    `<circle cx="290" cy="120" r="35" fill="#e0f2fe" stroke="#1a1a1a" stroke-width="4"/>
     <rect x="275" y="155" width="30" height="50" fill="#94a3b8" stroke="#1a1a1a" stroke-width="3"/>`
  );
}
function drawTurkish() {
  return panel(true,
    person(160, 130, "#7dd3fc", false) +
    `<rect x="220" y="100" width="140" height="90" fill="#dc2626" stroke="#1a1a1a" stroke-width="4"/>
     <circle cx="250" cy="130" r="12" fill="#fff"/><circle cx="290" cy="130" r="12" fill="#fff"/>
     <rect x="240" y="200" width="80" height="20" fill="#451a03" stroke="#1a1a1a" stroke-width="2"/>
     <path d="M255 210 L265 220 L275 205 M285 210 L295 220 M305 205 L315 215" fill="none" stroke="#16a34a" stroke-width="3"/>`
  );
}
function drawNeverTurkish() {
  return panel(true,
    person(200, 130, "#f9a8d4", true) +
    `<ellipse cx="290" cy="200" rx="45" ry="30" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
     <text x="290" y="208" text-anchor="middle" font-size="28" font-weight="900">?</text>`
  );
}
function drawJokingMeat() {
  return panel(true,
    person(140, 130, "#7dd3fc", true) +
    person(280, 130, "#f9a8d4", false) +
    `<rect x="200" y="190" width="120" height="40" rx="6" fill="#92400e" stroke="#1a1a1a" stroke-width="3"/>
     <path d="M210 200 L310 200" stroke="#451a03" stroke-width="6"/>`
  );
}
function drawSoundsGreat() {
  return panel(true,
    person(200, 130, "#f9a8d4", true) +
    `<polygon points="120,80 130,110 160,110 135,130 145,160 120,140 95,160 105,130 80,110 110,110" fill="#fde047" stroke="#1a1a1a" stroke-width="2"/>
     <polygon points="300,70 308,95 335,95 312,112 320,138 300,122 280,138 288,112 265,95 292,95" fill="#fde047" stroke="#1a1a1a" stroke-width="2"/>`
  );
}
function drawBusyWait() {
  return panel(true,
    `<rect x="80" y="100" width="240" height="120" fill="#fecaca" stroke="#1a1a1a" stroke-width="4"/>
     ${person(130, 160, "#7dd3fc", false)}
     ${person(180, 160, "#f9a8d4", false)}
     ${person(230, 160, "#86efac", false)}
     ${person(280, 160, "#fcd34d", false)}
     <rect x="300" y="200" width="50" height="30" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>`
  );
}
function drawRingTable() {
  return panel(true,
    person(160, 130, "#f9a8d4", false) +
    `<rect x="240" y="150" width="70" height="110" rx="12" fill="#1e293b" stroke="#1a1a1a" stroke-width="4"/>
     <path d="M275 150 C285 120 305 120 315 150" fill="none" stroke="#22c55e" stroke-width="4"/>`
  );
}
function drawPhoneNumber() {
  return panel(true,
    person(220, 130, "#7dd3fc", false) +
    `<rect x="260" y="140" width="80" height="120" rx="10" fill="#0f172a" stroke="#1a1a1a" stroke-width="4"/>
     <rect x="270" y="160" width="60" height="8" fill="#64748b"/>
     <rect x="270" y="175" width="60" height="8" fill="#64748b"/>
     <rect x="270" y="190" width="60" height="8" fill="#64748b"/>`
  );
}

fs.mkdirSync(OUT, { recursive: true });
for (const s of scenes) {
  const svg = s.draw();
  fs.writeFileSync(path.join(OUT, s.file + ".svg"), svg, "utf8");
}
console.log("Wrote", scenes.length, "SVGs to", OUT);
