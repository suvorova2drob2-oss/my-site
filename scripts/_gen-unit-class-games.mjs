/**
 * Generate unitN-class-games.html stubs + hub tiles (Class Games next to Vocabulary Games).
 * Run: node scripts/_gen-unit-class-games.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const UNIT_TITLES = {
  1: "Unit 1 · lifestyle / clothes / get",
  2: "Unit 2 · sport / music / get phrasals",
  3: "Unit 3 · My digital detox",
  4: "Unit 4 · films / take",
  5: "Unit 5 · coursebook lexis",
  6: "Unit 6 · coursebook lexis",
  7: "Unit 7 · coursebook lexis",
  8: "Unit 8 · environment",
  9: "Unit 9 · art / mystery / listening",
  10: "Unit 10 · phrasal / crimes / honesty",
  11: "Unit 11 · coursebook lexis",
  12: "Unit 12 · Naomi / restaurants / vegan",
};

const GAME_SECTIONS = [
  {
    h: "Retell check",
    items: [
      {
        title: "Retell check",
        live: true,
        blurb:
          "Step 1: текст с пунктирными фразами → Step 2: пересказ с таймером. Галочками выберите текст.",
      },
    ],
  },
  {
    h: "Экзамен (как на листе)",
    items: [
      {
        title: "4 фрагмента текста, пропуски 1–8",
        live: true,
        exam: true,
        blurb: "Текст слева, банк фраз справа (drag + клик). Галочками выберите текст.",
      },
    ],
  },
  {
    h: "Quiz «Миллионер» (3 × 15 вопросов)",
    items: [
      {
        title: "Факты (multiple choice)",
        blurb: "50:50, несгораемые, подсказка — исходный текст. Заглушка.",
      },
      {
        title: "Пропуски (cloze)",
        blurb: "Вопросы с пропуском _______. Заглушка.",
      },
      {
        title: "Парафраз",
        blurb: "Фрагмент + ближайший по смыслу. Заглушка.",
      },
    ],
  },
  {
    h: "Этапы 4 – 5",
    items: [
      {
        title: "Stage 4: The Weakest Link",
        blurb: "Команды + банк вопросов. Заглушка.",
      },
      {
        title: "Stage 5: Tic-tac-toe + gaps",
        blurb: "9 ячеек + гэпы. Заглушка.",
      },
    ],
  },
  {
    h: "Борды и Squid",
    items: [
      { title: "100 to 1", blurb: "Раунды по частям текста. Заглушка." },
      { title: "Glass bridge", blurb: "Шаги good/bad. Заглушка." },
    ],
  },
  {
    h: "Речь и фразы",
    items: [
      {
        title: "Alias · Pictionary",
        blurb: "Колода ключевых фраз юнита. Заглушка — пришлите список.",
      },
      {
        title: "Speaking Squad",
        blurb: "Миссии и таймер. Заглушка.",
      },
      {
        title: "Memory pairs (phrase ↔ paraphrase)",
        blurb: "Пары карт. Заглушка.",
      },
    ],
  },
  {
    h: "Память и цепочки",
    items: [
      {
        title: "Watch & Memorize",
        blurb: "Wordwall-style / projector. Заглушка.",
      },
      { title: "«Что пропало?»", blurb: "Пропавшая строка. Заглушка." },
      { title: "Снежный ком", blurb: "Имена + фразы. Заглушка." },
    ],
  },
  {
    h: "Eco-Uno",
    items: [
      {
        title: "Eco-Uno",
        blurb: "Временно закрыто.",
        locked: true,
      },
    ],
  },
];

function shellHtml(unit) {
  const title = UNIT_TITLES[unit] || `Unit ${unit}`;
  const sections = GAME_SECTIONS.map((sec) => {
    const lis = sec.items
      .map((it) => {
        if (it.locked) {
          return `<li class="is-locked"><span class="cg-stub-title">🔒 ${it.title}</span><span class="cg-soon">Coming soon</span><p>${it.blurb}</p></li>`;
        }
        if (it.live) {
          const u1extra =
            unit === 1
              ? " Галочками: <strong>lifestyle</strong> и <strong>clothes</strong>."
              : "";
          const href = it.exam
            ? `exam-numbered-gaps.html?unit=${unit}`
            : `retell-check.html?unit=${unit}`;
          return `<li><a href="${href}">${it.title}</a><p>${it.blurb}${u1extra}</p></li>`;
        }
        return `<li><span class="cg-stub-title">${it.title}</span><p>${it.blurb}</p></li>`;
      })
      .join("\n        ");
    return `    <div class="sec">
      <h2>${sec.h}</h2>
      <ul>
        ${lis}
      </ul>
    </div>`;
  }).join("\n\n");

  const liveNote =
    unit === 3
      ? `<p class="cg-live-note">Живой хаб уже есть: <a href="unit3-digital-detox/games/index.html">My digital detox → Class Games</a>.</p>`
      : "";

  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit ${unit} — Классные игры (заглушка)</title>
  <link rel="stylesheet" href="css/fce-unit-class-games-hub.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="css/mastering-b2-back-link.css" />
</head>
<body>
  <main class="page cg-hub">
    <header class="top">
      <h1>Классные игры — <em>${title}</em></h1>
      <p class="lead">Те же форматы, что в Unit 3 (<em>My digital detox</em>): Миллионер ×3, этапы 4–5, 100:1, Glass bridge, Alias, Speaking Squad и др. Сейчас <strong>заглушка</strong> — пришлите фразы / текст → <code>data/u${unit}-games-content.js</code>.</p>
      <p class="cg-nav"><a class="back" href="unit${unit}.html">&larr; Unit ${unit}</a> · <a class="back" href="unit${unit}-lexical-games.html">Vocabulary Games</a></p>
    </header>

    <p class="count">Всего слотов: <strong>14+</strong> (Миллионер = 3 страницы). Отдельно: экзамен 1–8, Watch &amp; Memorize. Пока без рабочих ссылок — список форматов для планирования.</p>
    ${liveNote}

${sections}

  </main>
</body>
</html>
`;
}

function writeCss() {
  const css = `/* Mastering B2 — Class Games hub (stub + live Unit 3 style) */
:root {
  --bg: #0f1b38;
  --panel: #1d2b4a;
  --line: #324a71;
  --text: #e8f0ff;
  --muted: #9bb0d3;
  --accent: #56ccf2;
}
* { box-sizing: border-box; margin: 0; padding: 0; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; }
body {
  background: linear-gradient(180deg, #09122a 0%, #101d3c 100%);
  color: var(--text);
  min-height: 100vh;
  padding: 24px;
}
.page.cg-hub {
  width: min(880px, 100%);
  margin: 0 auto;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 24px;
}
.cg-hub .top { border-bottom: 1px solid var(--line); padding-bottom: 16px; margin-bottom: 16px; }
.cg-hub .top h1 { font-size: 1.2rem; line-height: 1.35; }
.cg-hub .lead { color: var(--muted); font-size: 0.92rem; line-height: 1.5; margin-top: 10px; }
.cg-hub .cg-nav { margin-top: 12px; }
.cg-hub .sec { margin: 18px 0; font-size: 0.95rem; line-height: 1.55; }
.cg-hub .sec h2 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7dd3fc;
  margin-bottom: 10px;
}
.cg-hub ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.cg-hub li {
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: #223657;
}
.cg-hub .cg-stub-title {
  color: #9bb0d3;
  font-weight: 700;
}
.cg-hub li.is-locked { opacity: 0.72; border-style: dashed; }
.cg-hub .cg-soon {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #86efac;
  border: 1px solid rgba(134, 239, 172, 0.35);
  background: rgba(134, 239, 172, 0.08);
  vertical-align: middle;
}
.cg-hub li p {
  font-size: 0.86rem;
  color: var(--muted);
  margin-top: 6px;
  line-height: 1.45;
}
.cg-hub code { font-size: 0.85em; color: #c9d8f0; }
.cg-hub .count { font-size: 0.82rem; color: #86efac; margin-top: 12px; }
.cg-hub .cg-live-note {
  margin: 12px 0 0;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(86, 204, 242, 0.35);
  background: rgba(86, 204, 242, 0.08);
  font-size: 0.9rem;
  line-height: 1.45;
}
.cg-hub .cg-live-note a { color: #7dd3fc; font-weight: 700; }
`;
  fs.writeFileSync(path.join(root, "css", "fce-unit-class-games-hub.css"), css);
  console.log("wrote css");
}

const TILE = (n) => `
      <a class="card card-link" href="unit${n}-class-games.html">
        <h2>Class Games</h2>
        <div class="placeholder listening-open lines-2">
          <span class="l1">Классные игры · 14 форматов (как Unit 3).</span>
          <span class="l2">Заглушка — пришлите фразы / текст</span>
        </div>
        <span class="link-hint">Open hub →</span>
      </a>`;

function patchHub(unit) {
  const p = path.join(root, `unit${unit}.html`);
  if (!fs.existsSync(p)) {
    console.log("skip hub", unit);
    return;
  }
  let html = fs.readFileSync(p, "utf8");
  if (unit === 3) {
    // Unit 3 uses the live digital-detox games hub, not the stub page
    if (html.includes("unit3-digital-detox/games/index.html")) {
      console.log("hub live u3");
      return;
    }
  }
  if (html.includes(`unit${unit}-class-games.html`)) {
    console.log("hub already", unit);
    return;
  }
  // Prefer after Vocabulary Games tile
  const lexRe = new RegExp(
    `(<a class="card card-link"[^>]*href="unit${unit}-lexical-games\\.html"[\\s\\S]*?</a>)`,
    "i"
  );
  if (lexRe.test(html)) {
    html = html.replace(lexRe, `$1${TILE(unit)}`);
  } else {
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
  }
  fs.writeFileSync(p, html);
  console.log("hub tiled", unit);
}

writeCss();
for (let u = 1; u <= 12; u += 1) {
  fs.writeFileSync(path.join(root, `unit${u}-class-games.html`), shellHtml(u));
  console.log("wrote unit" + u + "-class-games.html");
  patchHub(u);
}
console.log("done");
