/**
 * Unit 6 batch 5 — WB listening, Friends reading, vocab WB, grammar WB, UoE WB, review writing, unit6.html, hubs, progress
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
function patch(rel, fn) {
  const p = path.join(root, rel);
  let s = fs.readFileSync(p, "utf8");
  s = fn(s);
  fs.writeFileSync(p, s, "utf8");
  console.log("P", rel);
}

// --- WB Listening Part 3 (from copied sb-6-1) ---
patch("unit6-listening/wb-track-6/index.html", (s) => {
  s = s.replace(/Unit 6 &mdash; SB 6\.1[^<]*/g, "Unit 6 &mdash; WB Track 6 · Part 3 Families");
  s = s.replace(/data-mb2-ex="sb-6-1"/, 'data-mb2-ex="u6-wb-track-6"');
  s = s.replace(/Student&rsquo;s Book 6\.1 &mdash; Relationship problems/, "Workbook Track 6 &mdash; Families");
  s = s.replace(/problems in their relationships with other people/, "their families");
  s = s.replace(/what each speaker says was the cause of the problem/, "what each speaker says about the different family members");
  s = s.replace(/fce\/RfB2First_SB_Track 6\.1\.mp3/g, "fce/RfB2First_WB_Track 6.mp3");
  s = s.replace(/RfB2First_SB_Track%206\.1\.mp3/g, "RfB2First_WB_Track%206.mp3");
  s = s.replace(/transcript\.html/, "#phrase-match");
  s = s.replace(
    /var ANSWER_KEY = \[[^\]]+\];[\s\S]*?var OPTIONS = \[[\s\S]*?\];/,
    `var ANSWER_KEY = ["C", "F", "H", "E", "B"];

  var OPTIONS = [
    { letter: "A", text: "She has a busy working life with little opportunity to go out much." },
    { letter: "B", text: "She has worked hard to achieve her ambitions." },
    { letter: "C", text: "Her marriage was not as strong as it seemed." },
    { letter: "D", text: "She now has the job that her parents had hoped for her." },
    { letter: "E", text: "She does not judge the speaker." },
    { letter: "F", text: "She studied the same subject as the speaker." },
    { letter: "G", text: "She has a successful and steady relationship with her partner." },
    { letter: "H", text: "Her work seems unsuited to her personality." }
  ];`
  );
  // inject phrase match before closing main
  if (!s.includes("id=\"phrase-match\"")) {
    s = s.replace(
      '<div class="feedback" id="feedback" role="status"></div>\n  </main>',
      `<div class="feedback" id="feedback" role="status"></div>

    <section id="phrase-match" style="margin-top:28px;padding-top:18px;border-top:1px solid #324a71;">
      <h2>Exercise 2 &mdash; Phrase meanings</h2>
      <p class="instr">Match the phrases in bold (1&ndash;6) to meanings (a&ndash;f).</p>
      <div id="phraseRows"></div>
      <div class="btn-row" style="margin-top:10px;">
        <button type="button" class="btn-check" id="btnPhraseCheck">Check phrases</button>
      </div>
      <div class="feedback" id="phraseFb" role="status"></div>
    </section>
  </main>`
    );
    s = s.replace(
      "})();\n  </script>",
      `  // Phrase match
  var PHRASE_KEY = ["c", "e", "a", "f", "d", "b"];
  var PHRASES = [
    { n: 1, t: "prove them all wrong" },
    { n: 2, t: "having an affair" },
    { n: 3, t: "went to pieces" },
    { n: 4, t: "let anyone down" },
    { n: 5, t: "looked up to her" },
    { n: 6, t: "pushed herself to the limit" }
  ];
  var MEANINGS = [
    { letter: "a", text: "became extremely upset" },
    { letter: "b", text: "done as much as she possibly could" },
    { letter: "c", text: "show everyone they were mistaken" },
    { letter: "d", text: "admired and respected her" },
    { letter: "e", text: "going out with each other" },
    { letter: "f", text: "disappoint people" }
  ];
  var pr = document.getElementById("phraseRows");
  if (pr) {
    pr.innerHTML = '<p style="color:#9bb0d3;margin-bottom:10px;">' + MEANINGS.map(function (m) {
      return "<strong>" + m.letter + "</strong> " + m.text;
    }).join("<br>") + "</p>" + PHRASES.map(function (p, i) {
      return '<div class="fce-p3-row" style="margin:8px 0;"><label>' + p.n + ". " + p.t +
        '</label> <select id="ph' + i + '"><option value="">a–f</option>' +
        MEANINGS.map(function (m) { return '<option value="' + m.letter + '">' + m.letter + "</option>"; }).join("") +
        "</select> <span class=\"gap-key\" id=\"phk" + i + "\"></span></div>";
    }).join("");
    document.getElementById("btnPhraseCheck").addEventListener("click", function () {
      var ok = 0;
      for (var i = 0; i < 6; i++) {
        var sel = document.getElementById("ph" + i);
        var key = document.getElementById("phk" + i);
        var good = sel.value === PHRASE_KEY[i];
        sel.classList.toggle("correct", good);
        sel.classList.toggle("wrong", !good);
        key.textContent = good ? "" : "→ " + PHRASE_KEY[i];
        key.classList.toggle("show", !good);
        if (good) ok++;
      }
      document.getElementById("phraseFb").textContent = "Phrases: " + ok + " / 6";
      if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, 6);
    });
  }
})();
  </script>`
    );
  }
  return s;
});

write(
  "unit6.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mastering B2 - Unit 6</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/mastering-b2-unit-hub.css" />
</head>
<body>
  <main class="page">
    <header class="top">
      <div>
        <div class="brand-kicker">Mastering B2</div>
        <h1>Unit 6</h1>
      </div>
      <a id="mb2-course-home-link" class="back" href="fce.html">&larr; Course home</a>
    </header>
    <p class="subtitle">Relative relationships &mdash; reading, listening, vocab, grammar, speaking, writing, UoE, pronunciation.</p>
    <section class="grid">
      <a class="card card-link" href="unit6-reading/index.html" data-mb2-hub="skill" data-mb2-unit="6" data-mb2-skill="reading">
        <h2>Reading</h2>
        <p><strong>Part 5</strong> Petrosillo sisters + <strong>WB</strong> Friends Like These.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>
      <a class="card card-link" href="unit6-listening/index.html" data-mb2-hub="skill" data-mb2-unit="6" data-mb2-skill="listening">
        <h2>Listening</h2>
        <p><strong>SB 6.1</strong> / <strong>6.2</strong> + <strong>WB Track 6</strong> (families).</p>
        <div class="link-hint">Open &rarr;</div>
      </a>
      <a class="card card-link" href="unit6-vocabulary/index.html" data-mb2-hub="skill" data-mb2-unit="6" data-mb2-skill="vocabulary">
        <h2>Vocabulary</h2>
        <p>Describing people, prefixes, phrasals, matching + <strong>WB</strong> relationships.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>
      <a class="card card-link" href="unit6-speaking/index.html" data-mb2-hub="skill" data-mb2-unit="6" data-mb2-skill="speaking">
        <h2>Speaking</h2>
        <p><strong>Part 1</strong> interview &middot; <strong>Part 3</strong> advice &middot; <strong>Part 4</strong> discussion.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>
      <a class="card card-link" href="unit6-writing/index.html" data-mb2-hub="skill" data-mb2-unit="6" data-mb2-skill="writing">
        <h2>Writing</h2>
        <p><strong>Article</strong> INFLUENCES, host-family email + <strong>WB</strong> review.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>
      <a class="card card-link" href="unit6-pronunciation/consonant-vowel-linking/index.html" data-mb2-hub="skill" data-mb2-unit="6" data-mb2-skill="pronunciation">
        <h2>Pronunciation</h2>
        <p>Consonant-vowel linking &mdash; Tracks 6.3 &amp; 6.4.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>
      <a class="card card-link" href="unit6-lexical-games.html">
        <h2>Vocabulary Games</h2>
        <div class="placeholder listening-open lines-2">
          <span class="l1">Play to master Unit 6 phrases.</span>
          <span class="l2">Same trainers as Unit 12 — stub packs until lists arrive</span>
        </div>
        <span class="link-hint">Open folder →</span>
      </a>
      <a class="card card-link" href="unit6-class-games.html">
        <h2>Class Games</h2>
        <div class="placeholder listening-open lines-2">
          <span class="l1">Классные игры · 14 форматов (как Unit 3).</span>
          <span class="l2">Заглушка — пришлите фразы / текст</span>
        </div>
        <span class="link-hint">Open hub →</span>
      </a>
      <a class="card card-link" href="unit6-grammar/index.html" data-mb2-hub="skill" data-mb2-unit="6" data-mb2-skill="grammar">
        <h2>Grammar</h2>
        <p><strong>Relative clauses</strong> + <strong>causative have/get</strong> + <strong>WB</strong>.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>
      <a class="card card-link" href="use-of-english/unit6/index.html" data-mb2-hub="skill" data-mb2-unit="6" data-mb2-skill="uoe">
        <h2>Use of English</h2>
        <p><strong>Part 1</strong> friendship apps, neighbours, Hove Part 3, Part 4 + WB cloze/KWT.</p>
        <div class="link-hint">Open &rarr;</div>
      </a>
    </section>
  </main>
  <script src="js/prep-course-profile.js"></script>
  <script src="js/prep-site-content.js"></script>
  <script src="js/mastering-b2-skill-progress.js"></script>
  <script src="js/mastering-b2-hub-marks.js"></script>
</body>
</html>
`
);

console.log("batch5a ok");
