import fs from "fs";
import path from "path";

const files = [
  ["squid-red-green-digital-detox.html", "Red / green"],
  ["whisper-digital-detox.html", "Whisper"],
  ["speaking-names-minute-digital-detox.html", "Names (1:00)"],
  ["part-thesis-match-digital-detox.html", "Part → thesis"],
  ["domino-sentences-digital-detox.html", "Sentence dominoes"],
  ["eco-uno-digital-detox.html", "Eco-Uno"],
];
const dir = "unit3-digital-detox/games";
const tag = "fce-class-game-locked.js";

for (const [file, label] of files) {
  const p = path.join(dir, file);
  let h = fs.readFileSync(p, "utf8");
  if (h.includes(tag)) {
    console.log("already", file);
    continue;
  }
  h = h.replace(/<body([^>]*)>/i, (m, attrs) => {
    if (/data-locked-game=/.test(attrs)) return m;
    return `<body${attrs} data-locked-game="${label}">`;
  });
  const inj = `  <script src="../../js/${tag}"></script>\n`;
  h = h.replace(/<body[^>]*>/i, (m) => m + "\n" + inj);
  fs.writeFileSync(p, h);
  console.log("locked", file);
}
