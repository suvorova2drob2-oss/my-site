/**
 * One-shot: patch engine theme labels + write unitN-lexical-games shells + hub tiles.
 * Run: node scripts/_gen-unit-lex-games.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function patchEngine() {
  const p = path.join(root, "js", "fce-unit-lexical-games-engine.js");
  let s = fs.readFileSync(p, "utf8");

  const reps = [
    [
      'hint: "Phrasal · Crimes · Lies/honesty (stubs)"',
      'hint: (T0.short || "A") + " · " + (T1.short || "B") + " · " + (T2.short || "C") + " (stubs)"',
    ],
    [
      `<span><b>Phrasal out / up</b>Coursebook phrasals · stub until phrase list arrives.</span>`,
      `<span data-lex-theme-title="0"><b></b></span>`,
    ],
    [
      `<span><b>Crimes &amp; criminals</b>Crime lexis · stub until phrase list arrives.</span>`,
      `<span data-lex-theme-title="1"><b></b></span>`,
    ],
    [
      `<span><b>Lies / honesty / investigators</b>Listening + reading · stub until phrase list arrives.</span>`,
      `<span data-lex-theme-title="2"><b></b></span>`,
    ],
    [
      `<label class="pack-check pack-card"><input type="checkbox" id="dropPhrasal" checked><span><b>Phrasal out / up</b></span></label>`,
      `<label class="pack-check pack-card"><input type="checkbox" id="dropPhrasal" checked><span><b data-lex-theme-label="0">A</b></span></label>`,
    ],
    [
      `<label class="pack-check pack-card"><input type="checkbox" id="dropCrime" checked><span><b>Crimes &amp; criminals</b></span></label>`,
      `<label class="pack-check pack-card"><input type="checkbox" id="dropCrime" checked><span><b data-lex-theme-label="1">B</b></span></label>`,
    ],
    [
      `<label class="pack-check pack-card"><input type="checkbox" id="dropStories" checked><span><b>Lies / honesty</b></span></label>`,
      `<label class="pack-check pack-card"><input type="checkbox" id="dropStories" checked><span><b data-lex-theme-label="2">C</b></span></label>`,
    ],
    [
      `<p class="cards-subtitle">Unit 10 · vocabulary</p>`,
      `<p class="cards-subtitle">Unit \${unit} · vocabulary</p>`,
    ],
    [
      `<label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchPhrasal" checked><span><b>Phrasal</b>Phrasal stubs.</span></label>`,
      `<label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchPhrasal" checked><span><b data-lex-theme-label="0">A</b> Stub.</span></label>`,
    ],
    [
      `<label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchCrime" checked><span><b>Crimes</b>Crime stubs.</span></label>`,
      `<label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchCrime" checked><span><b data-lex-theme-label="1">B</b> Stub.</span></label>`,
    ],
    [
      `<label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchStories" checked><span><b>Lies / honesty</b>Part 7 reading.</span></label>`,
      `<label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchStories" checked><span><b data-lex-theme-label="2">C</b> Stub.</span></label>`,
    ],
    [
      `<button class="wb-theme-btn" data-wb-theme="phrasal" type="button">Phrasal</button>`,
      `<button class="wb-theme-btn" data-wb-theme="phrasal" type="button" data-lex-theme-label="0">A</button>`,
    ],
    [
      `<button class="wb-theme-btn" data-wb-theme="crime" type="button">Crimes</button>`,
      `<button class="wb-theme-btn" data-wb-theme="crime" type="button" data-lex-theme-label="1">B</button>`,
    ],
    [
      `<button class="wb-theme-btn" data-wb-theme="stories" type="button">Lies / honesty</button>`,
      `<button class="wb-theme-btn" data-wb-theme="stories" type="button" data-lex-theme-label="2">C</button>`,
    ],
    [
      'speaker: "Phrasal · " + speakerBlock.name',
      'speaker: (T0.short || "A") + " · " + speakerBlock.name',
    ],
    [
      'speaker: "Restaurant · " + speakerBlock.name',
      'speaker: (T1.short || "B") + " · " + speakerBlock.name',
    ],
    [
      'speaker: "Stories · " + speakerBlock.name',
      'speaker: (T2.short || "C") + " · " + speakerBlock.name',
    ],
    [
      'name: "Stories · " + s.name',
      'name: (T2.short || "C") + " · " + s.name',
    ],
    [
      'if (trainerPackFlags.phrasal) bits.push("Phrasal");\n      if (trainerPackFlags.crime) bits.push("Crimes");\n      if (trainerPackFlags.stories) bits.push("Lies / honesty");',
      'if (trainerPackFlags.phrasal) bits.push(T0.short || "A");\n      if (trainerPackFlags.crime) bits.push(T1.short || "B");\n      if (trainerPackFlags.stories) bits.push(T2.short || "C");',
    ],
    [
      'const themeLabel = WB_THEME === "phrasal" ? "Phrasal" : WB_THEME === "stories" ? "Lies / honesty" : "Crimes";',
      'const themeLabel = WB_THEME === "phrasal" ? (T0.short || T0.label || "A") : WB_THEME === "stories" ? (T2.short || T2.label || "C") : (T1.short || T1.label || "B");',
    ],
    [
      "Tick at least one <b>Reading theme</b> above (Phrasal / Crimes / Lies·honesty).",
      "Tick at least one <b>theme</b> above.",
    ],
  ];

  for (const [a, b] of reps) {
    if (!s.includes(a)) {
      console.log("WARN missing:", a.slice(0, 70).replace(/\n/g, "\\n"));
    } else {
      s = s.split(a).join(b);
    }
  }

  // After injecting pool HTML, re-paint theme titles/labels
  if (!s.includes("paintThemeLabelsIn(pool)")) {
    s = s.replace(
      "if (key === \"trainer\") pool.innerHTML = trainerHtml;",
      `function paintThemeLabelsIn(root) {
        if (!root) return;
        root.querySelectorAll("[data-lex-theme-title='0']").forEach(function (el) {
          el.innerHTML = "<b>" + (T0.label || "A") + "</b>" + (T0.blurb || " Stub.");
        });
        root.querySelectorAll("[data-lex-theme-title='1']").forEach(function (el) {
          el.innerHTML = "<b>" + (T1.label || "B") + "</b>" + (T1.blurb || " Stub.");
        });
        root.querySelectorAll("[data-lex-theme-title='2']").forEach(function (el) {
          el.innerHTML = "<b>" + (T2.label || "C") + "</b>" + (T2.blurb || " Stub.");
        });
        root.querySelectorAll("[data-lex-theme-label='0']").forEach(function (el) {
          el.textContent = T0.short || T0.label || "A";
        });
        root.querySelectorAll("[data-lex-theme-label='1']").forEach(function (el) {
          el.textContent = T1.short || T1.label || "B";
        });
        root.querySelectorAll("[data-lex-theme-label='2']").forEach(function (el) {
          el.textContent = T2.short || T2.label || "C";
        });
      }
      if (key === "trainer") pool.innerHTML = trainerHtml;`
    );
    // Find where pool gets filled for all keys and call paint after assignment block
    s = s.replace(
      /if \(key === "trainer"\) pool\.innerHTML = trainerHtml;\s*else if \(key === "drop"\) pool\.innerHTML = dropHtml;\s*else if \(key === "cards"\) pool\.innerHTML = cardsHtml;\s*else if \(key === "pick"\) pool\.innerHTML = pickHtml;\s*else if \(key === "express"\) pool\.innerHTML = expressHtml;\s*else if \(key === "echo"\) pool\.innerHTML = echoHtml;\s*else if \(key === "match"\) pool\.innerHTML = matchHtml;\s*else if \(key === "wordbank"\) pool\.innerHTML = wordBankHtml;/,
      `if (key === "trainer") pool.innerHTML = trainerHtml;
          else if (key === "drop") pool.innerHTML = dropHtml;
          else if (key === "cards") pool.innerHTML = cardsHtml;
          else if (key === "pick") pool.innerHTML = pickHtml;
          else if (key === "express") pool.innerHTML = expressHtml;
          else if (key === "echo") pool.innerHTML = echoHtml;
          else if (key === "match") pool.innerHTML = matchHtml;
          else if (key === "wordbank") pool.innerHTML = wordBankHtml;
          paintThemeLabelsIn(pool);`
    );
  }

  // Mini theme bar labels on page chrome
  if (!s.includes("paintMiniThemeBar")) {
    s = s.replace(
      "(function paintChrome() {",
      `(function paintChrome() {
    function paintMiniThemeBar() {
      var map = [
        ["miniPhrasal", T0.short || T0.label || "A"],
        ["miniCrime", T1.short || T1.label || "B"],
        ["miniStories", T2.short || T2.label || "C"]
      ];
      map.forEach(function (row) {
        var inp = document.getElementById(row[0]);
        if (!inp) return;
        var span = inp.parentElement && inp.parentElement.querySelector("span");
        if (span) span.textContent = row[1];
      });
    }
    paintMiniThemeBar();`
    );
  }

  fs.writeFileSync(p, s);
  console.log("patched engine");
}

function shellHtml(unit) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit ${unit} — Lexical games</title>
  <link rel="stylesheet" href="css/fce-unit-lexical-games.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="css/mastering-b2-back-link.css" />
</head>
<body>
  <main class="page">
    <header class="top">
      <h1 id="lexGamesTitle">Lexical games — Unit ${unit}</h1>
      <a class="back" id="lexGamesBack" href="unit${unit}.html">Back to Unit ${unit}</a>
    </header>

    <p class="subtitle" id="lexGamesSubtitle"><b>Lexical games, Unit ${unit}.</b> Stub themes — send phrase lists to fill. Same trainers as Unit 12.</p>
    <div id="lexMiniThemeBar" class="lex-mini-theme" style="display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;margin-bottom:14px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:var(--panel-soft);">
      <span style="font-size:0.88rem;color:var(--muted);"><b style="color:var(--text);">Topic</b> (cards, pick, express, echo):</span>
      <label class="pack-check" style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-size:0.88rem;"><input type="checkbox" id="miniPhrasal" checked /><span data-lex-theme-label="0">A</span></label>
      <label class="pack-check" style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-size:0.88rem;"><input type="checkbox" id="miniCrime" checked /><span data-lex-theme-label="1">B</span></label>
      <label class="pack-check" style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-size:0.88rem;"><input type="checkbox" id="miniStories" checked /><span data-lex-theme-label="2">C</span></label>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">
      <a class="live-link" id="lexGamesVocabLink" hidden href="#">Vocabulary hub →</a>
      <a class="live-link" href="lexical-quiz-live-demo.html">Lexical Quiz Live →</a>
      <a class="live-link" href="lexical-quiz-live.html">Teacher realtime →</a>
    </div>

    <section id="gamesHost"></section>
  </main>
  <script src="js/mastering-b2-daily-activity.js"></script>
  <script src="js/fce-unit-lexical-stub-packs.js"></script>
  <script>
    window.FCE_UNIT_LEX_GAMES = window.FCE_UNIT_LEX_STUBS.forUnit(${unit});
  </script>
  <script src="js/fce-unit-lexical-games-engine.js"></script>
</body>
</html>
`;
}

function writeShells() {
  for (let u = 1; u <= 11; u += 1) {
    const dest = path.join(root, `unit${u}-lexical-games.html`);
    fs.writeFileSync(dest, shellHtml(u));
    console.log("wrote", path.basename(dest));
  }
}

const TILE = (n) => `
      <a class="card card-link" href="unit${n}-lexical-games.html">
        <h2>Vocabulary Games</h2>
        <div class="placeholder listening-open lines-2">
          <span class="l1">Play to master Unit ${n} phrases.</span>
          <span class="l2">Same trainers as Unit 12 — stub packs until lists arrive</span>
        </div>
        <span class="link-hint">Open folder →</span>
      </a>`;

function patchHub(unit) {
  const p = path.join(root, `unit${unit}.html`);
  if (!fs.existsSync(p)) {
    console.log("skip missing hub", unit);
    return;
  }
  let html = fs.readFileSync(p, "utf8");
  if (html.includes(`unit${unit}-lexical-games.html`)) {
    console.log("hub already linked", unit);
    return;
  }
  // Insert after Vocabulary card if possible
  const vocabRe = new RegExp(
    `(<a class="card card-link"[^>]*href="[^"]*unit${unit}-vocabulary[^"]*"[\\s\\S]*?</a>)`,
    "i"
  );
  if (vocabRe.test(html)) {
    html = html.replace(vocabRe, `$1${TILE(unit)}`);
  } else {
    html = html.replace(
      /<\/section>\s*<\/main>/i,
      `${TILE(unit)}\n    </section>\n  </main>`
    );
  }
  fs.writeFileSync(p, html);
  console.log("hub tiled", unit);
}

function patchHubs() {
  for (let u = 1; u <= 11; u += 1) patchHub(u);
}

patchEngine();
writeShells();
patchHubs();
console.log("done");
