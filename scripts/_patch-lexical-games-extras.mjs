import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const extraCss = `  <link rel="stylesheet" href="css/fce-vocab-meme-flip.css" />
  <link rel="stylesheet" href="css/fce-voice-bingo.css" />
  <link rel="stylesheet" href="css/fce-echo-minute.css" />
  <link rel="stylesheet" href="css/sticky-board-page.css" />
`;

function tailScripts(unit) {
  return `  <script src="js/fce-lexical-games-page-boot.js"></script>
  <script src="js/fce-unit-lexical-stub-packs.js"></script>
  <script>
    window.FCE_UNIT_LEX_GAMES = window.FCE_UNIT_LEX_STUBS.forUnit(${unit});
  </script>
  <script src="js/fce-unit-sound-booth-wordbank.js"></script>
  <script src="js/prep-retell-chain-speech-match.js"></script>
  <script src="js/prep-mic-device-picker.js"></script>
  <script src="js/prep-snowball-phrases-engine.js"></script>
  <script src="js/prep-voice-bingo-engine.js"></script>
  <script src="js/prep-echo-minute-engine.js"></script>
  <script src="js/sticky-board-core.js"></script>
  <script src="js/fce-unit-sticky-bridge.js"></script>
  <script src="js/fce-unit-memes-bridge.js"></script>
  <script src="js/fce-vocab-meme-flip-engine.js"></script>
  <script src="js/fce-vocab-meme-parts-engine.js"></script>
  <script src="js/sticky-board-page.js"></script>
  <script src="js/fce-lexical-games-extras-mount.js"></script>
  <script src="js/fce-unit-lexical-games-engine.js?v=extras1"></script>`;
}

for (let u = 2; u <= 11; u++) {
  const f = path.join(root, `unit${u}-lexical-games.html`);
  let html = fs.readFileSync(f, "utf8");
  if (html.includes("fce-lexical-games-extras-mount")) continue;
  html = html.replace(
    '  <link rel="stylesheet" href="css/fce-unit-lexical-games.css" />\n',
    '  <link rel="stylesheet" href="css/fce-unit-lexical-games.css" />\n' + extraCss
  );
  html = html.replace(
    /  <script src="js\/mastering-b2-daily-activity\.js"><\/script>[\s\S]*?<\/body>/,
    `  <script src="js/mastering-b2-daily-activity.js"></script>\n${tailScripts(u)}\n</body>`
  );
  fs.writeFileSync(f, html);
  console.log("updated", f);
}
