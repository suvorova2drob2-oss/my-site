/**
 * FCE Sound Booth stubs for units 1–12.
 * Engines: prep-voice-bingo-engine.js + prep-echo-minute-engine.js
 * Run: node scripts/_gen-unit-sound-booth.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function extractStyle(srcRel, destRel) {
  const h = fs.readFileSync(path.join(root, srcRel), "utf8");
  const m = h.match(/<style>([\s\S]*?)<\/style>/);
  if (!m) throw new Error("no style in " + srcRel);
  fs.writeFileSync(
    path.join(root, destRel),
    "/* FCE Sound Booth — shared with CPE playground engines */\n" + m[1].trim() + "\n"
  );
  console.log("css", destRel);
}

extractStyle("games/cpe/unit12/voice-bingo.html", "css/fce-voice-bingo.css");
extractStyle("games/cpe/unit12/echo-minute.html", "css/fce-echo-minute.css");

const hubCss = `/* FCE Sound Booth hub folder */
.sb-hub {
  width: min(880px, 100%);
  margin: 0 auto;
  background: #1d2b4a;
  border: 1px solid #324a71;
  border-radius: 20px;
  padding: 24px;
  color: #e8f0ff;
}
.sb-hub .top {
  border-bottom: 1px solid #324a71;
  padding-bottom: 16px;
  margin-bottom: 18px;
}
.sb-hub .section-title {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7dd3fc;
  border-left: 3px solid rgba(94, 200, 240, 0.55);
  padding-left: 10px;
  margin-bottom: 8px;
}
.sb-hub .section-lede {
  color: #9bb0d3;
  font-size: 0.92rem;
  line-height: 1.45;
  margin-bottom: 16px;
}
.sb-hub .stub-note {
  font-size: 0.82rem;
  color: #86efac;
  margin-bottom: 14px;
}
.sb-hub .games-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
@media (max-width: 640px) {
  .sb-hub .games-grid { grid-template-columns: 1fr; }
}
.sb-hub .game-tile {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid #324a71;
  background: #223657;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.sb-hub .game-tile:hover {
  border-color: rgba(86, 204, 242, 0.45);
  background: #263d62;
}
.sb-hub .tile-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.sb-hub .tile-icon { font-size: 1.6rem; line-height: 1; }
.sb-hub .tile-copy h2 {
  font-size: 1.05rem;
  margin: 0 0 6px;
  color: #e8f0ff;
}
.sb-hub .tile-copy p {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.45;
  color: #9bb0d3;
}
.sb-hub .go {
  color: #56ccf2;
  font-weight: 700;
  font-size: 0.9rem;
}
body.sb-page {
  background: linear-gradient(180deg, #09122a 0%, #101d3c 100%);
  min-height: 100vh;
  padding: 24px;
  margin: 0;
  font-family: Manrope, "Segoe UI", sans-serif;
}
`;
fs.writeFileSync(path.join(root, "css", "fce-unit-sound-booth-hub.css"), hubCss);

const wordbankJs = `/**
 * FCE Sound Booth word bank — stub decks per unit for Voice bingo / Echo Minute.
 * Engines need { ans, hint } rows (≥9 for bingo, ≥5 for echo).
 * Depends on: fce-unit-lexical-stub-packs.js (theme names).
 */
(function (W) {
  "use strict";

  var unit = Number(W.FCE_SOUND_BOOTH_UNIT) || 0;
  var COMBINED_ID = "all-themes";

  function padRows(themeLabel, short, minCount) {
    minCount = minCount || 9;
    var out = [];
    var i;
    for (i = 1; i <= minCount; i++) {
      var n = i < 10 ? "0" + i : String(i);
      out.push({
        ans: "PLACEHOLDER · " + short + " · phrase " + n,
        hint:
          "Stub sense " +
          n +
          " — replace with a real gloss for " +
          themeLabel +
          "."
      });
    }
    return out;
  }

  function buildFromStubs() {
    var pack =
      W.FCE_UNIT_LEX_STUBS && typeof W.FCE_UNIT_LEX_STUBS.forUnit === "function"
        ? W.FCE_UNIT_LEX_STUBS.forUnit(unit)
        : null;
    var themes = (pack && pack.themes) || [];
    var defs = [];
    var byId = Object.create(null);
    var t;
    for (t = 0; t < themes.length; t++) {
      var th = themes[t];
      var id = th.id || "theme-" + t;
      var label = th.label || th.short || "Theme " + (t + 1);
      var short = th.short || label;
      defs.push({
        id: id,
        title: label,
        tagline: "Stub pack · send phrases",
        icon: t === 0 ? "📘" : t === 1 ? "📗" : "📙"
      });
      byId[id] = padRows(label, short, 9);
    }
    if (!defs.length) {
      defs.push({
        id: "stub-a",
        title: "Stub theme A",
        tagline: "Stub pack",
        icon: "📘"
      });
      byId["stub-a"] = padRows("Stub theme A", "A", 9);
    }
    return { defs: defs, byId: byId };
  }

  var built = buildFromStubs();
  var DEFINITIONS = built.defs;
  var BY_ID = built.byId;

  function lexRowsForTheme(themeId) {
    if (themeId === COMBINED_ID) {
      var merged = [];
      var k;
      var seen = Object.create(null);
      for (k = 0; k < DEFINITIONS.length; k++) {
        var rows = BY_ID[DEFINITIONS[k].id] || [];
        var i;
        for (i = 0; i < rows.length; i++) {
          var a = rows[i].ans;
          if (!a || seen[a]) continue;
          seen[a] = true;
          merged.push(rows[i]);
        }
      }
      return merged;
    }
    return (BY_ID[themeId] || []).slice();
  }

  W.FCE_SB_COMBINED_THEME_ID = COMBINED_ID;
  W.FCE_SB_THEME_DEFINITIONS = DEFINITIONS;
  W.FCE_SB_THEME_DEFINITIONS_COMBINED = {
    id: COMBINED_ID,
    title: "All stub themes",
    tagline: "Unit " + unit + " · combined stub deck",
    icon: "✨"
  };
  W.FCE_SB_getLexRows = lexRowsForTheme;
  W.FCE_SB_getPhrases = function (themeId) {
    return lexRowsForTheme(themeId).map(function (r) {
      return r.ans;
    });
  };
})(typeof window !== "undefined" ? window : globalThis);
`;
fs.writeFileSync(
  path.join(root, "js", "fce-unit-sound-booth-wordbank.js"),
  wordbankJs
);
console.log("wordbank");

function hubHtml(unit) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit ${unit} — Sound Booth</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../css/mastering-b2-back-link.css" />
  <link rel="stylesheet" href="../css/fce-unit-sound-booth-hub.css" />
</head>
<body class="sb-page">
  <main class="sb-hub">
    <header class="top">
      <h1 style="font-size:1.25rem;margin:0 0 8px;">Sound Booth · Unit ${unit}</h1>
      <p style="margin:0;"><a class="back" href="../unit${unit}.html">&larr; Unit ${unit}</a>
        · <a class="back" href="../unit${unit}-lexical-games.html">Vocabulary Games</a></p>
    </header>

    <p class="section-title">Sound booth · mic warm-ups</p>
    <p class="section-lede">Mic-first recall on Unit ${unit} phrase decks — sprint and bingo (pronunciation &amp; listening, not retelling).</p>
    <p class="stub-note">Stub decks for now (9 placeholder phrases per theme). Engines are live — send phrase lists to fill.</p>

    <div class="games-grid">
      <a class="game-tile" href="voice-bingo.html">
        <div class="tile-row">
          <span class="tile-icon" aria-hidden="true">🎙️</span>
          <div class="tile-copy">
            <h2>Voice bingo</h2>
            <p>3×3 grid from hints; say or type the chunk. Forgiving mic match; “I don’t know” reveals without a point.</p>
          </div>
        </div>
        <span class="go">Open →</span>
      </a>
      <a class="game-tile" href="echo-minute.html">
        <div class="tile-row">
          <span class="tile-icon" aria-hidden="true">⏱️</span>
          <div class="tile-copy">
            <h2>Echo Minute</h2>
            <p>60-second sprint: definition played aloud only — name as many target phrases as you can; skip reveals and advances.</p>
          </div>
        </div>
        <span class="go">Open →</span>
      </a>
    </div>
  </main>
</body>
</html>
`;
}

function bingoHtml(unit) {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Voice bingo · Unit ${unit} · Sound Booth</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/fce-voice-bingo.css" />
  <link rel="stylesheet" href="../css/mastering-b2-back-link.css" />
</head>
<body>
  <div class="wrap">
    <div class="bar">
      <div>
        <p class="tag">Mastering B2 · Unit ${unit} · Sound Booth</p>
        <h1>Voice bingo · 3×3</h1>
      </div>
      <a id="navBack" href="index.html">&larr; Sound Booth</a>
    </div>
    <details class="howfold">
      <summary>Правила и подсказки</summary>
      <p class="sub">
        Девять клеток закрыты; сверху — <strong>определение</strong>.
        Голос сравнивается мягко; можно ввести фразу вручную.
        <strong>I don't know</strong> — без очка. Сейчас stub-колода — пришлите реальные фразы.
      </p>
    </details>

    <div class="card">
      <p class="wb-head">Тема (stub)</p>
      <div class="theme-grid" id="bingoThemeRail" role="radiogroup" aria-label="Тема"></div>
      <p class="deck-meta" id="bingoDeckMeta"></p>

      <div class="vb-actions-top">
        <button type="button" class="b-main" id="bingoNew">Новая игра</button>
        <button type="button" class="b-sec b-dontknow" id="bingoDontKnow">I don't know / Не знаю</button>
      </div>

      <p class="clue-label">Определение (цель — произнести фразу)</p>
      <p id="bingoClue" aria-live="polite"></p>

      <div class="vb-grid" id="bingoGrid" aria-label="Сетка бинго"></div>

      <p class="progress-row" id="bingoProgress" aria-live="polite"></p>

      <p class="mic-label">Микрофон · распознавание скрыто</p>
      <p class="vb-transcript" id="bingoTranscript" aria-live="polite"></p>

      <p class="vb-type-label">Или введите ответ</p>
      <div class="vb-type-row">
        <input type="text" id="bingoType" enterkeyhint="done" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type the phrase…" />
        <button type="button" class="b-main" id="bingoCheck">Проверить</button>
      </div>

      <p class="status-row" id="bingoStatus" aria-live="polite"></p>
      <p class="win-banner" id="bingoWin" hidden></p>
    </div>
  </div>

  <script>window.FCE_SOUND_BOOTH_UNIT = ${unit};</script>
  <script src="../js/fce-unit-lexical-stub-packs.js"></script>
  <script src="../js/fce-unit-sound-booth-wordbank.js"></script>
  <script src="../js/prep-retell-chain-speech-match.js"></script>
  <script src="../js/prep-snowball-phrases-engine.js"></script>
  <script src="../js/prep-voice-bingo-engine.js"></script>
  <script>
(function () {
  var defs = window.FCE_SB_THEME_DEFINITIONS || [];
  var combined = window.FCE_SB_THEME_DEFINITIONS_COMBINED;
  var rail = document.getElementById("bingoThemeRail");
  var deckMeta = document.getElementById("bingoDeckMeta");
  function countLex(id) {
    return typeof window.FCE_SB_getLexRows === "function"
      ? window.FCE_SB_getLexRows(id).length
      : 0;
  }
  if (rail && window.PREP_SNOWBALL_PHRASES && PREP_SNOWBALL_PHRASES.fillThemeRail) {
    PREP_SNOWBALL_PHRASES.fillThemeRail(rail, {
      definitions: defs,
      combined: combined || null,
      radioName: "bingoTheme",
      inputClass: "theme-input",
      deckMetaEl: deckMeta,
      countPhrases: countLex,
      formatDeckMeta: function (n) {
        return n + " пар hint→phrase · нужно минимум 9 (stub).";
      }
    });
  }
  if (window.PREP_VOICE_BINGO && PREP_VOICE_BINGO.mount) {
    PREP_VOICE_BINGO.mount({
      els: {
        grid: document.getElementById("bingoGrid"),
        clue: document.getElementById("bingoClue"),
        progress: document.getElementById("bingoProgress"),
        status: document.getElementById("bingoStatus"),
        transcript: document.getElementById("bingoTranscript"),
        typeInput: document.getElementById("bingoType"),
        btnCheck: document.getElementById("bingoCheck"),
        btnDontKnow: document.getElementById("bingoDontKnow"),
        btnNew: document.getElementById("bingoNew"),
        winBanner: document.getElementById("bingoWin")
      },
      themeDefinitions: defs,
      radioName: "bingoTheme",
      getLexRows: function (themeId) {
        return typeof window.FCE_SB_getLexRows === "function"
          ? window.FCE_SB_getLexRows(themeId)
          : [];
      }
    });
  }
})();
  </script>
</body>
</html>
`;
}

function echoHtml(unit) {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Echo Minute · Unit ${unit} · Sound Booth</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/fce-echo-minute.css" />
  <link rel="stylesheet" href="../css/mastering-b2-back-link.css" />
</head>
<body>
  <div class="wrap">
    <div class="bar">
      <div>
        <p class="tag">Mastering B2 · Unit ${unit} · Sound Booth</p>
        <h1>Echo Minute</h1>
        <p class="subtitle">60s · definition aloud · name the phrase</p>
      </div>
      <a id="navBack" href="index.html">&larr; Sound Booth</a>
    </div>
    <details class="howfold">
      <summary>Правила</summary>
      <p class="sub">Определение только на слух. Назовите фразу голосом или вводом. Skip / I don't know — дальше без очка. Stub-колода, пока нет реальных фраз.</p>
    </details>

    <div class="panel">
      <p class="wb-head">Тема (stub)</p>
      <div class="theme-grid" id="emThemeRail" role="radiogroup" aria-label="Тема"></div>
      <p class="deck-meta" id="emDeckMeta"></p>

      <div class="tts-voice-select-wrap" style="margin-bottom:10px;">
        <label for="emVoicePick">Голос</label>
        <select id="emVoicePick" class="tts-voice-select" aria-label="Голос синтеза речи"></select>
      </div>

      <div class="hud" aria-live="polite">
        <div class="hud-block">
          <p class="hud-label">Секунд</p>
          <p class="hud-value hud-value--time" id="emTimer">60</p>
        </div>
        <div class="hud-block">
          <p class="hud-label">Попадания</p>
          <p class="hud-value hud-value--score" id="emScore">0</p>
        </div>
      </div>

      <div class="stage" id="emStage" aria-live="polite"></div>
      <p class="stage-sub" id="emStageSub"></p>
      <p class="summary-line" id="emSummary" hidden></p>

      <div class="actions">
        <button type="button" class="b-go" id="emStart">Старт</button>
        <button type="button" class="b-replay" id="emReplay">Повторить определение</button>
        <button type="button" class="b-skip" id="emSkip">I don't know / Skip</button>
      </div>

      <p class="mic-label">Микрофон · транскрипт скрыт</p>
      <p class="vb-transcript" id="emTranscript"></p>

      <p class="vb-type-label">Или ввод с клавиатуры</p>
      <div class="vb-type-row">
        <input type="text" id="emType" enterkeyhint="done" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Phrase or skip…" />
        <button type="button" class="b-check" id="emCheck">Проверить</button>
      </div>

      <p class="status-row" id="emStatus"></p>
    </div>
  </div>

  <script>window.FCE_SOUND_BOOTH_UNIT = ${unit};</script>
  <script src="../js/fce-unit-lexical-stub-packs.js"></script>
  <script src="../js/fce-unit-sound-booth-wordbank.js"></script>
  <script src="../js/prep-retell-chain-speech-match.js"></script>
  <script src="../js/prep-snowball-phrases-engine.js"></script>
  <script src="../js/prep-echo-minute-engine.js"></script>
  <script>
(function () {
  var defs = window.FCE_SB_THEME_DEFINITIONS || [];
  var combined = window.FCE_SB_THEME_DEFINITIONS_COMBINED;
  var rail = document.getElementById("emThemeRail");
  var deckMeta = document.getElementById("emDeckMeta");
  function countLex(id) {
    return typeof window.FCE_SB_getLexRows === "function"
      ? window.FCE_SB_getLexRows(id).length
      : 0;
  }
  if (rail && window.PREP_SNOWBALL_PHRASES && PREP_SNOWBALL_PHRASES.fillThemeRail) {
    PREP_SNOWBALL_PHRASES.fillThemeRail(rail, {
      definitions: defs,
      combined: combined || null,
      radioName: "echoMinuteTheme",
      inputClass: "theme-input",
      deckMetaEl: deckMeta,
      countPhrases: countLex,
      formatDeckMeta: function (n) {
        return n + " пар · минимум 5 (stub).";
      }
    });
  }
  var stage = document.getElementById("emStage");
  if (stage && window.PREP_ECHO_MINUTE && PREP_ECHO_MINUTE.mount) {
    PREP_ECHO_MINUTE.mount({
      els: {
        stageMain: stage,
        stageSub: document.getElementById("emStageSub"),
        timer: document.getElementById("emTimer"),
        scoreLive: document.getElementById("emScore"),
        summary: document.getElementById("emSummary"),
        status: document.getElementById("emStatus"),
        transcript: document.getElementById("emTranscript"),
        typeInput: document.getElementById("emType"),
        btnCheck: document.getElementById("emCheck"),
        btnStart: document.getElementById("emStart"),
        btnReplay: document.getElementById("emReplay"),
        btnSkip: document.getElementById("emSkip"),
        voicePickSelect: document.getElementById("emVoicePick")
      },
      themeDefinitions: defs,
      radioName: "echoMinuteTheme",
      roundSeconds: 60,
      minDeck: 5,
      getLexRows: function (themeId) {
        return typeof window.FCE_SB_getLexRows === "function"
          ? window.FCE_SB_getLexRows(themeId)
          : [];
      }
    });
  }
})();
  </script>
</body>
</html>
`;
}

const TILE = (n) => `
      <a class="card card-link" href="unit${n}-sound-booth/index.html">
        <h2>Sound Booth</h2>
        <div class="placeholder listening-open lines-2">
          <span class="l1">Mic warm-ups · Voice bingo + Echo Minute.</span>
          <span class="l2">Engines live — stub phrase decks until lists arrive</span>
        </div>
        <span class="link-hint">Open folder →</span>
      </a>`;

function patchHub(unit) {
  const p = path.join(root, `unit${unit}.html`);
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, "utf8");
  if (html.includes(`unit${unit}-sound-booth/`)) {
    console.log("hub already", unit);
    return;
  }
  const afterClass = new RegExp(
    `(<a class="card card-link"[^>]*href="[^"]*(?:class-games|digital-detox/games)[^"]*"[\\s\\S]*?</a>)`,
    "i"
  );
  const afterLex = new RegExp(
    `(<a class="card card-link"[^>]*href="unit${unit}-lexical-games\\.html"[\\s\\S]*?</a>)`,
    "i"
  );
  if (afterClass.test(html)) {
    html = html.replace(afterClass, `$1${TILE(unit)}`);
  } else if (afterLex.test(html)) {
    html = html.replace(afterLex, `$1${TILE(unit)}`);
  } else {
    html = html.replace(
      /<\/section>\s*<\/main>/i,
      `${TILE(unit)}\n    </section>\n  </main>`
    );
  }
  fs.writeFileSync(p, html);
  console.log("hub tiled", unit);
}

for (let u = 1; u <= 12; u += 1) {
  const dir = path.join(root, `unit${u}-sound-booth`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), hubHtml(u));
  fs.writeFileSync(path.join(dir, "voice-bingo.html"), bingoHtml(u));
  fs.writeFileSync(path.join(dir, "echo-minute.html"), echoHtml(u));
  console.log("wrote unit" + u + "-sound-booth/");
  // Sound Booth is only inside Vocabulary Games — do not tile unit hubs
}
console.log("done");
