/**
 * Unit 6 generator batch 3 — pron, UoE P1, writing article/email, causative, WB listening
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
  "unit6-pronunciation/consonant-vowel-linking/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 Pronunciation &mdash; Consonant-vowel linking</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <style>
    .task { margin-bottom:18px; padding:16px; border-radius:14px; border:1px solid rgba(120,160,210,.22); background:rgba(8,22,48,.4); }
    .task h2 { font-family:Fraunces,Georgia,serif; font-size:1.05rem; color:#bae6fd; margin:0 0 8px; }
    .task > p, .task li { color:#d5e2f8; font-size:.94rem; line-height:1.55; }
    .audio-wrap { border:1px solid #324a71; border-radius:12px; background:#172948; padding:12px; margin:10px 0 14px; }
    .audio-wrap label { font-size:12px; color:#9bb0d3; display:block; margin-bottom:6px; }
    audio { width:100%; }
    .sent-row { margin:12px 0; padding:12px; border-radius:12px; border:1px solid rgba(120,160,210,.22); background:rgba(8,18,40,.45); }
    .sent-row .label { font-size:0.72rem; font-weight:800; color:#8fa3c4; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:8px; }
    .plain { color:#e8f0ff; line-height:1.6; }
    .linked { color:#a7f3d0; line-height:1.6; font-weight:600; display:none; }
    .sent-row.is-checked .linked { display:block; }
    .sent-row.is-checked .plain { display:none; }
    .btn-check { font:inherit; font-weight:700; border:none; border-radius:10px; padding:8px 14px; background:#36d399; color:#05271a; cursor:pointer; margin-top:8px; }
    .fb { margin-top:8px; color:#9bb0d3; }
    .drill { color:#fde68a; margin:6px 0; }
  </style>
</head>
<body data-mb2-unit="6" data-mb2-skill="pronunciation" data-mb2-ex="u6-pron-linking">
  <main class="page">
    <header class="top">
      <div>
        <span class="tag">Pronunciation &middot; Student&rsquo;s Book</span>
        <h1>Connected speech: consonant-vowel linking</h1>
        <p class="lead">Tracks 6.3 and 6.4 &mdash; link a final consonant to a following vowel.</p>
      </div>
      <a class="back" href="../../unit6.html">&larr; Unit 6</a>
    </header>

    <section class="task">
      <h2>1 Track 6.3 &mdash; example</h2>
      <p>In connected speech, a consonant sound at the end of one word often links to a vowel sound at the start of the next word. Listen and notice the links.</p>
      <div class="audio-wrap">
        <label for="t63">Audio (Yandex Object Storage)</label>
        <audio id="t63" controls preload="metadata">
          <source src="https://storage.yandexcloud.net/cpeaudio/fce/RfB2First_SB_Track%206.3.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <p class="linked" style="display:block;color:#a7f3d0;font-weight:600;">She&rsquo;s ha<strong>d i</strong>t framed, an<strong>d i</strong>t&rsquo;s u<strong>p o</strong>n the wal<strong>l i</strong>n he<strong>r</strong> living room.</p>
    </section>

    <section class="task">
      <h2>2 Predict the linking &mdash; then Track 6.4</h2>
      <p>Mark where you think consonant-vowel linking happens. Press <strong>Check</strong> to reveal the links, then listen to check.</p>
      <div class="audio-wrap">
        <label for="t64">Track 6.4</label>
        <audio id="t64" controls preload="metadata">
          <source src="https://storage.yandexcloud.net/cpeaudio/fce/RfB2First_SB_Track%206.4.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div id="ex2"></div>
      <button type="button" class="btn-check" id="chk2">Check &mdash; show linking</button>
      <p class="fb" id="fb2"></p>
    </section>

    <section class="task">
      <h2>3 Speed drill</h2>
      <p>Practise saying these aloud, linking consonants to vowels:</p>
      <p class="drill">1 Can I have an egg?</p>
      <p class="drill">2 Can I have a box of eggs?</p>
      <p class="drill">3 Can I have a box of eggs and an apple?</p>
      <p class="drill">4 Can I have a box of eggs and a bag of apples?</p>
      <p class="drill">5 Can I have half a box of eggs and a bag of apples?</p>
      <p class="drill">6 Can I have eight and a half boxes of eggs and a bag of apples?</p>
      <button type="button" class="btn-check" id="chkDone" style="background:#56ccf2;color:#052018;">Done &mdash; practised</button>
      <p class="fb" id="fbDone"></p>
    </section>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
(function () {
  var ITEMS = [
    { n: 1, plain: "Ask Alan if he can come on Friday.", linked: "As<strong>k A</strong>lan i<strong>f h</strong>e ca<strong>n</strong> come o<strong>n</strong> Friday." },
    { n: 2, plain: "We live in a flat on the edge of town.", linked: "We liv<strong>e i</strong>n a fla<strong>t o</strong>n th<strong>e e</strong>dg<strong>e o</strong>f town." },
    { n: 3, plain: "Pick it up and put it on the table.", linked: "Pic<strong>k i</strong>t u<strong>p a</strong>n<strong>d</strong> pu<strong>t i</strong>t o<strong>n</strong> the table." },
    { n: 4, plain: "I found a box of sweets in your room.", linked: "I foun<strong>d a</strong> bo<strong>x o</strong>f sweet<strong>s i</strong>n your room." },
    { n: 5, plain: "This town isn't big enough for both of us.", linked: "This tow<strong>n i</strong>sn't bi<strong>g e</strong>nough fo<strong>r</strong> bot<strong>h o</strong>f us." }
  ];
  var root = document.getElementById("ex2");
  root.innerHTML = ITEMS.map(function (it) {
    return '<div class="sent-row" data-n="' + it.n + '"><div class="label">Sentence ' + it.n + '</div><p class="plain">' + it.plain + '</p><p class="linked">' + it.linked + '</p></div>';
  }).join("");
  document.getElementById("chk2").addEventListener("click", function () {
    root.querySelectorAll(".sent-row").forEach(function (r) { r.classList.add("is-checked"); });
    document.getElementById("fb2").textContent = "Links revealed. Listen to Track 6.4 and practise.";
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(5, 5);
  });
  document.getElementById("chkDone").addEventListener("click", function () {
    if (window.MasteringB2Progress) {
      MasteringB2Progress.recordAndReward(
        { unit: 6, skill: "pronunciation", exerciseId: "u6-pron-linking", percent: 100 },
        10
      );
    }
    document.getElementById("fbDone").textContent = "Saved · Pronunciation ✓";
  });
})();
  </script>
  <script src="../../js/mastering-b2-daily-activity.js"></script>
  <script src="../../js/mastering-b2-exercise-auto.js"></script>
</body>
</html>
`
);

write(
  "use-of-english/unit6/part1-friendship-apps/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 Part 1 &mdash; Friendship apps</title>
  <link rel="stylesheet" href="../../../css/part1-mc-cloze.css" />
  <link rel="stylesheet" href="../../../css/mastering-b2-back-link.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <script>
    window.PART1_MC_BOOT = {
      contextId: "unit6-p1-friendship-apps",
      studentOnly: true,
      embeddedOnly: true,
      embeddedDataScriptId: "part1-mc-bundled-u6-friendship-apps",
      backHref: "../index.html",
      backLabel: "Use of English — Unit 6",
      pageTitle: "Part 1 — Friendship apps",
      documentTitle: "Unit 6 Part 1 — Friendship apps"
    };
  </script>
</head>
<body class="part1-mc-fce-theme" data-mb2-unit="6" data-mb2-skill="uoe" data-mb2-ex="unit6-p1-friendship-apps">
  <main class="part1-mc-page">
    <header class="top">
      <h1 id="part1McH1">Part 1 — Friendship apps</h1>
      <div class="top-links">
        <a class="back" id="part1McBack" href="../index.html">&larr; Use of English — Unit 6</a>
      </div>
    </header>
    <p class="subtitle student-only" id="elSubtitle"></p>
    <div class="mc-layout student-only" id="mcLayout">
      <div class="mc-text-col" id="mcTextCol">
        <h2 class="title-text" id="elTitle"></h2>
        <div class="passage" id="elPassage"></div>
      </div>
      <div class="mc-resizer" id="mcResizer" role="separator" aria-orientation="vertical" aria-label="Resize columns" title="Drag left or right" tabindex="0"></div>
      <div class="mc-opts-col" id="mcOptsCol"></div>
    </div>
    <div class="btn-row student-only">
      <button type="button" id="btnCheck" class="btn-check">Check answers</button>
      <button type="button" id="btnReset" class="btn-reset">Reset</button>
    </div>
    <div id="feedback" class="feedback"></div>
  </main>

  <script id="part1-mc-bundled-u6-friendship-apps" type="application/json">
{
  "title": "Friendship apps",
  "subtitle": "For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).",
  "passage": "There are (0) [[0]] of reasons why you might want to use one of the many friendship apps currently (1) [[1]]. You may, for example, have moved to a new city, where there is (2) [[2]] nobody you know. Perhaps you're the only single person in your group and you'd (3) [[3]] go to a concert with someone than spend the evening at a dinner party with cosy couples. Or maybe you just want to (4) [[4]] your circle of friends – friends you actually meet up with, as opposed to those you know online.\\n\\nFor (5) [[5]] we may have hundreds of virtual friends, many of us have just a handful of real-life ones. Whilst social media should arguably (6) [[6]] some of the blame for this, supposedly causing us to lose our ability to communicate face to face, there are other factors. We're working (7) [[7]] hours than ever before, with little time left over for socialising, and we're also spending more time living alone, (8) [[8]] marriage in favour of the single life. No wonder friendship apps are increasingly in demand.",
  "example": { "letter": "C", "text": "plenty" },
  "items": [
    { "options": ["disposable", "available", "enjoyable", "suitable"], "correctIndex": 1 },
    { "options": ["absolutely", "completely", "perfectly", "entirely"], "correctIndex": 0 },
    { "options": ["prefer", "better", "rather", "happier"], "correctIndex": 2 },
    { "options": ["widen", "rise", "grow", "spread"], "correctIndex": 0 },
    { "options": ["despite", "instead", "unless", "although"], "correctIndex": 3 },
    { "options": ["catch", "stand", "take", "meet"], "correctIndex": 2 },
    { "options": ["greater", "further", "longer", "higher"], "correctIndex": 2 },
    { "options": ["waiting", "delaying", "pausing", "holding"], "correctIndex": 1 }
  ]
}
  </script>
  <script src="../../../js/mastering-b2-skill-progress.js"></script>
  <script src="../../../js/part1-mc-cloze-core.js"></script>
  <script src="../../../js/mastering-b2-daily-activity.js"></script>
  <script src="../../../js/mastering-b2-exercise-auto.js"></script>
</body>
</html>
`
);

console.log("batch3a ok");
