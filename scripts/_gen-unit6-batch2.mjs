/**
 * Unit 6 generator batch 2 — hubs, writing, pron, UoE, grammar, WB, progress
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
function write(rel, c) {
  const p = path.join(root, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, c, "utf8");
  console.log("W", rel);
}

write(
  "unit6-speaking/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 &mdash; Speaking</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/mastering-b2-unit-hub.css" />
</head>
<body>
  <main class="page">
    <header class="top">
      <div>
        <div class="brand-kicker">Mastering B2</div>
        <h1>Unit 6 &mdash; Speaking</h1>
      </div>
      <a class="back" href="../unit6.html">&larr; Unit 6</a>
    </header>
    <p class="lead">Relative relationships &mdash; Part 1 interview, Part 3 collaborative, Part 4 discussion.</p>
    <a class="card-link" href="interview/index.html" data-mb2-unit="6" data-mb2-skill="speaking" data-mb2-ex="u6-speaking-interview">
      <h2>Part 1 &mdash; Interview</h2>
      <p>Family and friends questions from the Student&rsquo;s Book.</p>
      <span class="go">Open &rarr;</span>
    </a>
    <a class="card-link" href="collaborative/index.html" data-mb2-unit="6" data-mb2-skill="speaking" data-mb2-ex="u6-speaking-collaborative">
      <h2>Part 3 &mdash; Collaborative task</h2>
      <p>Advice about relationships: boyfriends/girlfriends, parents/teenagers, colleagues, flatmates, siblings.</p>
      <span class="go">Open &rarr;</span>
    </a>
    <a class="card-link" href="further-discussion/index.html" data-mb2-unit="6" data-mb2-skill="speaking" data-mb2-ex="u6-speaking-part4">
      <h2>Part 4 &mdash; Further discussion</h2>
      <p>Six follow-up questions (flat, siblings, opinions, parenting, schools, work from home).</p>
      <span class="go">Open &rarr;</span>
    </a>
  </main>
  <script src="../js/mastering-b2-skill-progress.js"></script>
  <script src="../js/mastering-b2-hub-marks.js"></script>
</body>
</html>
`
);

write(
  "unit6-writing/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 &mdash; Writing</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/mastering-b2-unit-hub.css" />
</head>
<body>
  <main class="page">
    <header class="top">
      <div>
        <div class="brand-kicker">Mastering B2</div>
        <h1>Unit 6 &mdash; Writing</h1>
      </div>
      <a class="back" href="../unit6.html">&larr; Unit 6</a>
    </header>
    <p class="lead">Article (INFLUENCES), informal email to host family, Workbook review.</p>
    <a class="card-link" href="article-influences/index.html" data-mb2-unit="6" data-mb2-skill="writing" data-mb2-ex="u6-writing-article">
      <h2>Part 2 Article &mdash; INFLUENCES</h2>
      <p>Notice + sample &ldquo;Cheer up, chicken!&rdquo; (8 mistakes) + write your own.</p>
      <span class="go">Open &rarr;</span>
    </a>
    <a class="card-link" href="informal-email-host/index.html" data-mb2-unit="6" data-mb2-skill="writing" data-mb2-ex="u6-writing-email-host">
      <h2>Informal email &mdash; Kate &amp; Andy Newson</h2>
      <p>Reply to your host family (140&ndash;190 words).</p>
      <span class="go">Open &rarr;</span>
    </a>
    <a class="card-link" href="review-wb/index.html" data-mb2-unit="6" data-mb2-skill="writing" data-mb2-ex="u6-wb-writing-review">
      <h2>Workbook &mdash; Review (structure + adjectives)</h2>
      <p>Mamma Mia model, include/exclude, descriptive adjectives, Comedy Review task.</p>
      <span class="go">Open &rarr;</span>
    </a>
  </main>
  <script src="../js/mastering-b2-skill-progress.js"></script>
  <script src="../js/mastering-b2-hub-marks.js"></script>
</body>
</html>
`
);

write(
  "unit6-reading/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 &mdash; Reading</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/mastering-b2-unit-hub.css" />
</head>
<body>
  <main class="page">
    <header class="top">
      <div>
        <div class="brand-kicker">Mastering B2</div>
        <h1>Unit 6 &mdash; Reading</h1>
      </div>
      <a class="back" href="../unit6.html">&larr; Unit 6</a>
    </header>
    <p class="lead">SB Petrosillo sisters (Part 5) + Workbook Friends TV series.</p>
    <a class="card-link" href="../unit6-reading-petrosillo-sisters/index.html" data-mb2-unit="6" data-mb2-skill="reading" data-mb2-ex="petrosillo-sisters">
      <h2>SB Part 5 &mdash; Clara &amp; Silvia Petrosillo</h2>
      <p>Two sisters &middot; six MCQ (A&ndash;D).</p>
      <span class="go">Open &rarr;</span>
    </a>
    <a class="card-link" href="friends-wb/index.html" data-mb2-unit="6" data-mb2-skill="reading" data-mb2-ex="u6-wb-friends">
      <h2>Workbook Part 5 &mdash; Friends Like These</h2>
      <p>TV series article + compound -line nouns.</p>
      <span class="go">Open &rarr;</span>
    </a>
  </main>
  <script src="../js/mastering-b2-skill-progress.js"></script>
  <script src="../js/mastering-b2-hub-marks.js"></script>
</body>
</html>
`
);

console.log("hubs batch2 ok");
