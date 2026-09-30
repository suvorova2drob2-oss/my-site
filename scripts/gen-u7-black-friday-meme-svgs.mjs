/**
 * Writes funny literal-meme SVGs for Unit 7 Black Friday (no target phrase text on image).
 * Run: node scripts/gen-u7-black-friday-meme-svgs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(
  __dirname,
  "..",
  "unit7-reading-black-friday",
  "memes",
  "img"
);

function wrap(id, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Meme ${id}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f1f3d"/>
      <stop offset="100%" stop-color="#1a2f55"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)"/>
  ${body}
</svg>`;
}

const scenes = {
  "bf-scramble-discount": `
  <text x="256" y="48" text-anchor="middle" fill="#ffd166" font-family="Arial Black,sans-serif" font-size="28">NOVEMBER</text>
  <rect x="80" y="320" width="60" height="50" fill="#c0392b" rx="6"/><rect x="150" y="330" width="55" height="45" fill="#27ae60" rx="6"/>
  <rect x="220" y="315" width="65" height="55" fill="#2980b9" rx="6"/><rect x="300" y="325" width="58" height="48" fill="#8e44ad" rx="6"/>
  <circle cx="120" cy="280" r="22" fill="#f5d0a9"/><circle cx="200" cy="270" r="22" fill="#f5d0a9"/><circle cx="280" cy="265" r="22" fill="#f5d0a9"/>
  <circle cx="360" cy="275" r="22" fill="#f5d0a9"/><circle cx="400" cy="290" r="22" fill="#f5d0a9"/>
  <path d="M120 302 L150 340 M200 292 L180 330 M280 287 L250 335 M360 297 L320 340 M400 312 L370 350" stroke="#5ec8f0" stroke-width="4" fill="none"/>
  <text x="256" y="420" text-anchor="middle" fill="#fff" font-size="22" font-family="Arial,sans-serif" font-weight="bold">THE SCRAMBLE IS REAL</text>`,

  "bf-chaos-aisles": `
  <rect x="40" y="120" width="432" height="280" fill="#2c3e50" stroke="#5ec8f0" stroke-width="3"/>
  <line x1="40" y1="200" x2="472" y2="200" stroke="#34495e" stroke-width="8"/>
  <line x1="40" y1="280" x2="472" y2="280" stroke="#34495e" stroke-width="8"/>
  <text x="256" y="100" text-anchor="middle" fill="#e74c3c" font-size="26" font-family="Arial Black">AISLE 7</text>
  <circle cx="180" cy="240" r="30" fill="#f39c12"/><text x="180" y="248" text-anchor="middle" font-size="28">!</text>
  <circle cx="320" cy="260" r="35" fill="#e74c3c" opacity="0.8"/>
  <path d="M250 180 Q256 140 262 180" fill="#f1c40f"/><path d="M240 190 L272 190 L256 220 Z" fill="#f1c40f"/>
  <text x="256" y="430" text-anchor="middle" fill="#86efac" font-size="20">CHAOS ERUPTED (AGAIN)</text>`,

  "bf-squabble-tvs": `
  <rect x="206" y="200" width="100" height="70" fill="#111" stroke="#5ec8f0" stroke-width="4" rx="4"/>
  <rect x="216" y="210" width="80" height="50" fill="#3498db"/>
  <circle cx="160" cy="260" r="28" fill="#f5d0a9"/><circle cx="352" cy="260" r="28" fill="#f5d0a9"/>
  <path d="M188 250 L206 235" stroke="#f5d0a9" stroke-width="14" stroke-linecap="round"/>
  <path d="M324 250 L306 235" stroke="#f5d0a9" stroke-width="14" stroke-linecap="round"/>
  <text x="256" y="380" text-anchor="middle" fill="#ffd166" font-size="22" font-weight="bold">ONE TV. TWO DREAMS.</text>`,

  "bf-step-over-xbox": `
  <rect x="200" y="300" width="112" height="40" fill="#107c10" rx="8"/>
  <text x="256" y="328" text-anchor="middle" fill="#fff" font-size="18" font-family="Arial">X</text>
  <ellipse cx="256" cy="285" rx="70" ry="18" fill="#e74c3c"/><text x="256" y="292" text-anchor="middle" fill="#fff" font-size="14">-70%</text>
  <circle cx="180" cy="220" r="24" fill="#f5d0a9"/><circle cx="256" cy="200" r="24" fill="#f5d0a9"/><circle cx="332" cy="220" r="24" fill="#f5d0a9"/>
  <rect x="168" y="244" width="176" height="12" fill="#3498db" rx="4"/>
  <circle cx="400" cy="250" r="26" fill="#f5d0a9"/>
  <path d="M400 276 L380 300" stroke="#f5d0a9" stroke-width="10" stroke-linecap="round"/>
  <text x="256" y="400" text-anchor="middle" fill="#fff" font-size="18">POLITE SHOPPING (NOT)</text>`,

  "bf-discount-bonanza": `
  <ellipse cx="256" cy="260" rx="120" ry="100" fill="#f39c12" stroke="#ffd166" stroke-width="4"/>
  <text x="256" y="200" text-anchor="middle" fill="#c0392b" font-size="32" font-weight="bold">%</text>
  <text x="256" y="280" text-anchor="middle" fill="#fff" font-size="28" font-weight="bold">SALE</text>
  <path d="M256 160 L256 120" stroke="#fff" stroke-width="4"/><circle cx="256" cy="110" r="8" fill="#fff"/>
  <ellipse cx="80" cy="380" rx="40" ry="30" fill="#8B4513"/><ellipse cx="80" cy="360" rx="35" ry="25" fill="#D2691E"/>
  <text x="80" y="430" text-anchor="middle" fill="#aaa" font-size="12">turkey watching</text>`,

  "bf-sinister-name": `
  <rect x="156" y="140" width="200" height="180" fill="#fff" rx="12"/>
  <text x="256" y="200" text-anchor="middle" fill="#111" font-size="36" font-weight="bold">FRI</text>
  <text x="256" y="260" text-anchor="middle" fill="#e74c3c" font-size="48" font-weight="bold">DAY</text>
  <path d="M256 120 L280 80 L232 80 Z" fill="#2c3e50"/>
  <rect x="230" y="80" width="52" height="40" fill="#2c3e50" rx="4"/>
  <circle cx="246" cy="95" r="6" fill="#e74c3c"/><circle cx="266" cy="95" r="6" fill="#e74c3c"/>
  <polyline points="120,360 160,320 200,340 240,300 280,330 320,290 392,350" fill="none" stroke="#e74c3c" stroke-width="4"/>
  <text x="256" y="420" text-anchor="middle" fill="#86efac" font-size="18">SAME NAME. BAD VIBES.</text>`,

  "bf-call-in-sick": `
  <rect x="160" y="160" width="192" height="120" rx="20" fill="#27ae60"/>
  <circle cx="256" cy="220" r="40" fill="#f5d0a9"/>
  <rect x="220" y="280" width="72" height="80" fill="#3498db" rx="8"/>
  <path d="M300 180 L340 160 L340 200 Z" fill="#e74c3c"/>
  <text x="370" y="190" fill="#fff" font-size="14">BOSS</text>
  <text x="256" y="400" text-anchor="middle" fill="#ffd166" font-size="20">4-DAY WEEKEND MODE</text>`,

  "bf-traffic-congestion": `
  <rect x="60" y="280" width="392" height="80" fill="#555"/>
  <rect x="80" y="250" width="50" height="30" fill="#e74c3c"/><rect x="140" y="240" width="50" height="40" fill="#3498db"/>
  <rect x="200" y="235" width="50" height="45" fill="#f1c40f"/><rect x="260" y="245" width="50" height="35" fill="#9b59b6"/>
  <rect x="320" y="230" width="50" height="50" fill="#1abc9c"/><rect x="380" y="238" width="50" height="42" fill="#e67e22"/>
  <text x="256" y="200" text-anchor="middle" fill="#fff" font-size="24">MALL →</text>
  <text x="256" y="420" text-anchor="middle" fill="#e74c3c" font-size="22" font-weight="bold">HONK IF YOU LOVE SALES</text>`,

  "bf-cease-loss": `
  <text x="256" y="180" text-anchor="middle" fill="#e74c3c" font-size="72" font-weight="bold">−$</text>
  <circle cx="256" cy="280" r="60" fill="#f5d0a9"/>
  <path d="M220 300 Q256 340 292 300" stroke="#333" fill="none" stroke-width="3"/>
  <circle cx="236" cy="268" r="6" fill="#333"/><circle cx="276" cy="268" r="6" fill="#333"/>
  <text x="256" y="400" text-anchor="middle" fill="#86efac" font-size="20">FINALLY IN THE GREEN?</text>`,

  "bf-red-to-black": `
  <rect x="80" y="220" width="140" height="100" fill="#c0392b" rx="8"/><text x="150" y="280" text-anchor="middle" fill="#fff" font-size="28">RED</text>
  <rect x="292" y="220" width="140" height="100" fill="#111" rx="8"/><text x="362" y="280" text-anchor="middle" fill="#fff" font-size="28">BLACK</text>
  <path d="M220 270 L292 270" stroke="#ffd166" stroke-width="6" marker-end="url(#arr)"/>
  <circle cx="256" cy="270" r="30" fill="#f5d0a9"/>
  <text x="256" y="380" text-anchor="middle" fill="#5ec8f0" font-size="18">ACCOUNTANTS EXPLAIN EVERYTHING</text>`,

  "bf-unruly-scenes": `
  <rect x="100" y="140" width="312" height="200" fill="#222" rx="8"/>
  <text x="120" y="170" fill="#0f0" font-size="14" font-family="monospace">REC ● 2014</text>
  <circle cx="200" cy="240" r="20" fill="#f5d0a9"/><circle cx="280" cy="250" r="20" fill="#f5d0a9"/>
  <rect x="180" y="260" width="120" height="40" fill="#95a5a6" rx="4"/>
  <path d="M190 240 L210 260 M290 250 L270 270" stroke="#e74c3c" stroke-width="4"/>
  <text x="256" y="400" text-anchor="middle" fill="#ffd166" font-size="20">UNRULY SCENE DETECTED</text>`,

  "bf-embraced-mania": `
  <circle cx="256" cy="260" r="100" fill="#3498db" opacity="0.5"/>
  <circle cx="256" cy="260" r="70" fill="#2ecc71" opacity="0.6"/>
  <rect x="220" y="300" width="72" height="50" fill="#e74c3c" rx="6"/>
  <circle cx="244" cy="318" r="10" fill="#111"/><circle cx="268" cy="318" r="10" fill="#111"/>
  <path d="M256 200 Q220 240 200 280" stroke="#f5d0a9" stroke-width="12" fill="none" stroke-linecap="round"/>
  <path d="M256 200 Q292 240 312 280" stroke="#f5d0a9" stroke-width="12" fill="none" stroke-linecap="round"/>
  <text x="256" y="420" text-anchor="middle" fill="#fff" font-size="18">WORLDWIDE GROUP HUG</text>`,

  "bf-dishonest-practices": `
  <circle cx="256" cy="220" r="55" fill="#95a5a6"/>
  <circle cx="240" cy="210" r="8" fill="#111"/><circle cx="272" cy="210" r="8" fill="#111"/>
  <circle cx="256" cy="235" r="18" fill="#111"/>
  <path d="M230 260 L282 260 L256 300 Z" fill="#27ae60"/>
  <rect x="190" y="300" width="132" height="60" fill="#fff" rx="4"/>
  <text x="256" y="340" text-anchor="middle" fill="#e74c3c" font-size="22" font-weight="bold">50% OFF*</text>
  <text x="256" y="400" text-anchor="middle" fill="#aaa" font-size="14">*maybe not</text>`,

  "bf-strain-staff": `
  <circle cx="256" cy="200" r="35" fill="#f5d0a9"/>
  <rect x="226" y="235" width="60" height="80" fill="#3498db" rx="6"/>
  <path d="M226 260 L120 320" stroke="#f5d0a9" stroke-width="14" stroke-linecap="round"/>
  <path d="M286 260 L392 320" stroke="#f5d0a9" stroke-width="14" stroke-linecap="round"/>
  <rect x="80" y="320" width="352" height="20" fill="#555"/>
  <text x="100" y="360" fill="#fff" font-size="14">still loading...</text>
  <text x="256" y="420" text-anchor="middle" fill="#ffd166" font-size="18">STRETCH BUT MAKE SALES</text>`,

  "bf-inflate-prices": `
  <ellipse cx="256" cy="280" rx="90" ry="110" fill="#e74c3c" opacity="0.9"/>
  <text x="256" y="290" text-anchor="middle" fill="#fff" font-size="36" font-weight="bold">£999</text>
  <line x1="360" y1="180" x2="400" y2="140" stroke="#fff" stroke-width="4"/>
  <circle cx="410" cy="130" r="20" fill="#f1c40f"/>
  <text x="256" y="420" text-anchor="middle" fill="#86efac" font-size="18">BALLOON ECONOMICS</text>`,

  "bf-inferior-products": `
  <rect x="140" y="180" width="232" height="160" fill="#8B4513" rx="8"/>
  <text x="256" y="220" text-anchor="middle" fill="#ffd166" font-size="16">ULTRA HD 8K</text>
  <rect x="170" y="240" width="172" height="80" fill="#D2691E" stroke="#333" stroke-width="2" stroke-dasharray="8 4"/>
  <text x="256" y="290" text-anchor="middle" fill="#333" font-size="14">(drawn on cardboard)</text>
  <text x="256" y="400" text-anchor="middle" fill="#fff" font-size="20">MEETS DEMAND ✓</text>`
};

fs.mkdirSync(outDir, { recursive: true });
for (const [id, body] of Object.entries(scenes)) {
  fs.writeFileSync(path.join(outDir, id + ".svg"), wrap(id, body), "utf8");
}
console.log("Wrote", Object.keys(scenes).length, "meme SVGs to", outDir);
