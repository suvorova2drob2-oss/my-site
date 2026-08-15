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
  [11, "unit11-vocabulary/index.html"],
];

for (const [u, rel] of hubs) {
  if (!fs.existsSync(rel)) {
    console.log("skip", rel);
    continue;
  }
  let h = fs.readFileSync(rel, "utf8");
  if (h.includes(`unit${u}-lexical-games.html`)) {
    console.log("ok", u);
    continue;
  }
  const card = `
      <a class="card card-link" href="../unit${u}-lexical-games.html">
        <h2>Vocabulary Games</h2>
        <p>Shared trainers (trainer, cards, drop, pick, express, echo, match, word bank). Stub packs until phrase lists arrive.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>`;
  if (u === 9) {
    const tc = `
    <a class="task-card u9-task-from-vocab" href="../unit9-lexical-games.html">
      <h2>Vocabulary Games</h2>
      <p>Shared trainers (trainer, cards, drop, pick, express, echo, match, word bank). Stub packs until phrase lists arrive.</p>
      <span class="go">Open folder →</span>
    </a>`;
    if (h.includes('class="lead"')) {
      h = h.replace(/(<p class="lead">[\s\S]*?<\/p>)/, `$1\n${tc}`);
    } else {
      h = h.replace("</header>", `</header>\n${tc}`);
    }
  } else if (h.includes('<section class="grid">')) {
    h = h.replace('<section class="grid">', `<section class="grid">${card}`);
  } else {
    h = h.replace(
      "</header>",
      `</header>\n    <p class="subtitle">Games hub: <a href="../unit${u}-lexical-games.html">Vocabulary Games</a> (stubs).</p>`
    );
  }
  fs.writeFileSync(rel, h);
  console.log("linked vocab", u);
}
