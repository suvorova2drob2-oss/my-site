import fs from "fs";

const hubs = [
  [1, "unit1-vocabulary/index.html"],
  [2, "unit2-vocabulary/index.html"],
  [3, "unit3-vocabulary/index.html"],
  [4, "unit4-vocabulary/index.html"],
  [5, "unit5-vocabulary/index.html"],
  [6, "unit6-vocabulary/index.html"],
  [7, "unit7-vocabulary/index.html"],
  [8, "unit8-vocabulary/index.html"],
  [9, "unit9-vocabulary/index.html"],
  [10, "unit10-vocabulary/fce/index.html"],
  [11, "unit11-vocabulary/index.html"],
  [12, "unit12-vocabulary/index.html"],
];

for (const [u, rel] of hubs) {
  if (!fs.existsSync(rel)) {
    console.log("skip", rel);
    continue;
  }
  let h = fs.readFileSync(rel, "utf8");
  const href =
    u === 3
      ? "../unit3-digital-detox/games/index.html"
      : u === 10
        ? "../../unit10-class-games.html"
        : `../unit${u}-class-games.html`;
  if (h.includes("class-games.html") || (u === 3 && h.includes("digital-detox/games/index.html") && h.includes("Class Games"))) {
    // unit3 already has digital-detox games link — ensure Class Games label if missing
    if (u === 3 && !/Class Games|Классные игры/.test(h)) {
      /* already has games card below */
    }
    console.log("ok", u);
    continue;
  }
  if (u === 3 && h.includes("digital-detox/games/index.html")) {
    console.log("ok unit3 live games already");
    continue;
  }

  const card = `
      <a class="card card-link" href="${href}">
        <h2>Class Games</h2>
        <p>Классные игры (Миллионер, Squid, speaking&hellip;) — заглушка, пока нет фраз.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>`;

  if (u === 9) {
    const tc = `
    <a class="task-card u9-task-from-vocab" href="../unit9-class-games.html">
      <h2>Class Games</h2>
      <p>Классные игры (14 форматов) — заглушка, пока нет фраз.</p>
      <span class="go">Open hub →</span>
    </a>`;
    if (h.includes("unit9-lexical-games.html")) {
      h = h.replace(
        /(<a class="task-card[^"]*"[^>]*href="\.\.\/unit9-lexical-games\.html"[\s\S]*?<\/a>)/,
        `$1\n${tc}`
      );
    } else if (h.includes('class="lead"')) {
      h = h.replace(/(<p class="lead">[\s\S]*?<\/p>)/, `$1\n${tc}`);
    } else {
      h = h.replace("</header>", `</header>\n${tc}`);
    }
  } else if (h.includes("lexical-games.html")) {
    h = h.replace(
      new RegExp(
        `(<a class="card card-link"[^>]*href="[^"]*lexical-games[^"]*"[\\s\\S]*?</a>)`
      ),
      `$1${card}`
    );
  } else if (h.includes('<section class="grid">')) {
    h = h.replace('<section class="grid">', `<section class="grid">${card}`);
  } else {
    h = h.replace(
      "</header>",
      `</header>\n    <p class="subtitle">Class Games: <a href="${href}">hub</a> (stub).</p>`
    );
  }
  fs.writeFileSync(rel, h);
  console.log("linked", u);
}
