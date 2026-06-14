import fs from "fs";
import path from "path";

const root = path.resolve(".");
const files = [
  "games/cpe/unit12/snowball-phrases.html",
  "games/cpe/unit12/voice-bingo.html",
  "games/cpe/unit12/echo-minute.html",
  "games/cpe/unit12/squid-red-green.html",
  "games/cpe/unit12/glass-bridge.html",
  "games/cpe/unit12/hundred-to-one.html",
  "games/cpe/unit12/speaking-squad.html",
  "games/cpe/unit12/weakest-link.html",
  "games/cpe/unit12/what-missing.html",
  "games/cpe/unit12/alias.html",
  "games/cpe/unit12/pictionary.html",
  "games/cpe/unit12/millionaire/index.html",
  "vocabulary-tic-tac-toe-unit12.html",
];

const re =
  /(<script src="[^"]*unit12-listening-sb12-1-disabled-access-lexicon\.js"><\/script>)/;

for (const rel of files) {
  const p = path.join(root, rel);
  let c = fs.readFileSync(p, "utf8");
  if (c.includes("unit12-multi-word-verbs-lexicon.js")) {
    console.log("skip", rel);
    continue;
  }
  if (!re.test(c)) {
    console.log("no match", rel);
    continue;
  }
  c = c.replace(re, (m) => {
    const src = m.match(/src="([^"]+)"/)[1];
    const mwv = src.replace(
      "unit12-listening-sb12-1-disabled-access-lexicon.js",
      "unit12-multi-word-verbs-lexicon.js"
    );
    return m + `\n  <script src="${mwv}"></script>`;
  });
  fs.writeFileSync(p, c);
  console.log("ok", rel);
}
