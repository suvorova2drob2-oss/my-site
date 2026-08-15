import fs from "fs";
import path from "path";

for (let u = 1; u <= 12; u++) {
  const p = `unit${u}.html`;
  if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, "utf8");
  const before = h;
  h = h.replace(
    /\s*<a class="card card-link" href="unit\d+-sound-booth\/index\.html">[\s\S]*?<\/a>/g,
    ""
  );
  if (h === before) {
    console.log("no card", u);
    continue;
  }
  fs.writeFileSync(p, h);
  console.log("removed hub tile", u);
}

// Stop re-adding Sound Booth tiles from the generator
const gen = "scripts/_gen-unit-sound-booth.mjs";
if (fs.existsSync(gen)) {
  let s = fs.readFileSync(gen, "utf8");
  if (!s.includes("SKIP_HUB_TILES")) {
    s = s.replace(
      /for \(let u = 1; u <= 12; u \+= 1\) \{[\s\S]*?patchHub\(u\);\n\}/,
      `const SKIP_HUB_TILES = true; // Sound Booth lives inside Vocabulary Games only
for (let u = 1; u <= 12; u += 1) {
  const dir = path.join(root, \`unit\${u}-sound-booth\`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), hubHtml(u));
  fs.writeFileSync(path.join(dir, "voice-bingo.html"), bingoHtml(u));
  fs.writeFileSync(path.join(dir, "echo-minute.html"), echoHtml(u));
  console.log("wrote unit" + u + "-sound-booth/");
  if (!SKIP_HUB_TILES) patchHub(u);
}`
    );
    fs.writeFileSync(gen, s);
    console.log("patched generator");
  }
}
