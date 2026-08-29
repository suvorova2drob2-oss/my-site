/**
 * One-shot generator: Unit 6 Mastering B2 missing pages.
 * Run: node scripts/_gen-unit6-pages.mjs
 * Does NOT delete anything — only writes/overwrites listed targets.
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
function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

// ========== Speaking collaborative ==========
write(
  "unit6-speaking/collaborative/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 Speaking &mdash; Part 3 Collaborative task</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <link rel="stylesheet" href="../../css/fce-speaking-part3-collaborative.css" />
</head>
<body data-mb2-unit="6" data-mb2-skill="speaking" data-mb2-ex="u6-speaking-collaborative">
  <main class="page">
    <header class="top">
      <div>
        <span class="tag">Speaking Part 3 &middot; Collaborative task</span>
        <h1>Unit 6 &mdash; Relationship advice</h1>
        <p class="lead">Magazine series for teenagers and young adults &middot; discuss problems, then choose two topics.</p>
      </div>
      <a class="back" href="../index.html">&larr; Speaking</a>
    </header>

    <div class="p3-layout">
      <div>
        <section class="p3-task" aria-labelledby="t1-h">
          <h2 id="t1-h">1 SPEAK</h2>
          <p>
            Imagine that a magazine for teenagers and young adults is going to publish a series of articles giving advice about relationships.
            Below are some of the relationships they want to include.
            Talk to each other about what problems might arise in these relationships.
          </p>
          <div class="p3-spider-wrap" aria-label="Discussion prompts">
            <div class="p3-spider p3-spider--5">
              <div class="p3-node p3-node--tl">Boyfriends and girlfriends</div>
              <div class="p3-node p3-node--tc">Parents and teenagers</div>
              <div class="p3-node p3-node--tr">Work colleagues</div>
              <div class="p3-hub">What problems might arise in these relationships?</div>
              <div class="p3-node p3-node--bl">Flatmates</div>
              <div class="p3-node p3-node--br">Brothers and sisters</div>
            </div>
          </div>
        </section>

        <section class="p3-task p3-task2" aria-labelledby="t2-h">
          <h2 id="t2-h">2 SPEAK</h2>
          <p>Now decide which two relationships teenagers and young adults would be most interested to receive advice on.</p>
        </section>

        <div class="p3-done-row">
          <button type="button" id="btn-done">Done &mdash; we finished both tasks</button>
          <p class="p3-save-note" id="save-note" role="status" aria-live="polite"></p>
        </div>
      </div>

      <aside class="p3-rail" aria-label="Useful language">
        <p class="p3-rail-head">Useful language</p>
        <p class="p3-rail-sub">Changing topic</p>
        <ul class="p3-rail-example">
          <li>Let&rsquo;s talk about &hellip; first/next.</li>
          <li>Shall we move on to &hellip; now?</li>
        </ul>
        <p class="p3-rail-sub">Deciding (Task 2)</p>
        <ul class="p3-rail-example">
          <li>This relationship is far more/less relevant to (young adults) than that one.</li>
          <li>(Teenagers) would have great/little/no interest in reading about that.</li>
          <li>This one would have great/limited/no appeal to (teenagers).</li>
        </ul>
        <p class="p3-rail-sub">Tip</p>
        <ul class="p3-rail-example">
          <li>Try to use phrasal verbs from the Vocabulary section (get on, fall out, put up with, look up to, &hellip;).</li>
        </ul>
      </aside>
    </div>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
    (function () {
      var btn = document.getElementById("btn-done");
      var note = document.getElementById("save-note");
      if (!btn) return;
      btn.addEventListener("click", function () {
        if (!window.MasteringB2Progress) return;
        var res = MasteringB2Progress.recordAndReward(
          { unit: 6, skill: "speaking", exerciseId: "u6-speaking-collaborative", percent: 100 },
          10
        );
        btn.disabled = true;
        if (note) {
          note.textContent =
            res && res.updated
              ? "Saved to My progress · Speaking ✓"
              : "Already saved · Speaking ✓";
        }
      });
    })();
  </script>
  <script src="../../js/mastering-b2-daily-activity.js"></script>
  <script src="../../js/mastering-b2-exercise-auto.js"></script>
</body>
</html>
`
);

// ========== Speaking Part 4 ==========
write(
  "unit6-speaking/further-discussion/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 Speaking &mdash; Part 4 Discussion</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <link rel="stylesheet" href="../../css/fce-speaking-part4-discussion.css" />
</head>
<body data-mb2-unit="6" data-mb2-skill="speaking" data-mb2-ex="u6-speaking-part4">
  <main class="page">
    <header class="top">
      <div>
        <span class="tag">Speaking Part 4 &middot; Discussion</span>
        <h1>Unit 6 &mdash; Relationships</h1>
      </div>
      <a class="back" href="../index.html">&larr; Speaking</a>
    </header>
    <p class="sp4-instr">
      <strong>SPEAK</strong> Following on from your discussion in the Part 3 task, discuss these questions with your partner. Give reasons for your answers.
    </p>
    <div class="sp4-layout">
      <section class="sp4-stage" aria-live="polite">
        <p class="sp4-progress" id="qProgress">Question 1 / 6</p>
        <div class="sp4-num" id="qNum" aria-hidden="true">1</div>
        <p class="sp4-q" id="qText"></p>
        <p class="sp4-cue">Discuss out loud with your partner &mdash; give full answers with reasons.</p>
        <p class="sp4-hint">The examiner may ask you, your partner, or both of you the same question.</p>
        <div class="sp4-nav">
          <button type="button" id="btnPrev">&larr; Previous</button>
          <button type="button" id="btnNext">Next &rarr;</button>
          <div class="sp4-dots" id="qDots" aria-hidden="true"></div>
        </div>
      </section>
      <aside class="sp4-exam-rail" aria-labelledby="exam-expect-h">
        <h2 id="exam-expect-h">What to expect in the exam</h2>
        <ul>
          <li>A particular question may be directed specifically at you or your partner. Alternatively, you may both be asked the same question and encouraged to discuss your ideas together.</li>
          <li>In either case, you are expected to give full answers to the questions asked, with reasons for your opinions.</li>
        </ul>
      </aside>
    </div>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
(function () {
  var QUESTIONS = [
    "Would you prefer to share a flat with friends, or live with your parents?",
    "What do you think is the ideal number of brothers and sisters to have?",
    "Is it possible to get on well with people who have very different opinions from us?",
    "Some people say that being a parent is the hardest job in the world. Do you agree?",
    "Should all schools be mixed-gender, with both boys and girls, or is single-sex education better?",
    "Some companies allow their employees to work at home on one or more days of the week. Do you think this is a good idea?"
  ];
  var idx = 0;
  var progress = document.getElementById("qProgress");
  var num = document.getElementById("qNum");
  var text = document.getElementById("qText");
  var dots = document.getElementById("qDots");
  var btnPrev = document.getElementById("btnPrev");
  var btnNext = document.getElementById("btnNext");
  dots.innerHTML = QUESTIONS.map(function (_, i) {
    return '<span class="sp4-dot" data-i="' + i + '"></span>';
  }).join("");
  function saveProgressDone() {
    if (!window.MasteringB2Progress) return;
    MasteringB2Progress.recordAndReward(
      { unit: 6, skill: "speaking", exerciseId: "u6-speaking-part4", percent: 100 },
      10
    );
  }
  function render() {
    var last = idx >= QUESTIONS.length - 1;
    progress.textContent = "Question " + (idx + 1) + " / " + QUESTIONS.length;
    num.textContent = String(idx + 1);
    text.textContent = QUESTIONS[idx];
    btnPrev.disabled = idx <= 0;
    btnNext.textContent = last ? "Done" : "Next \\u2192";
    btnNext.classList.toggle("is-done", last);
    dots.querySelectorAll(".sp4-dot").forEach(function (d, i) {
      d.classList.toggle("is-on", i === idx);
    });
  }
  btnPrev.addEventListener("click", function () {
    if (idx > 0) { idx--; render(); }
  });
  btnNext.addEventListener("click", function () {
    if (idx >= QUESTIONS.length - 1) { saveProgressDone(); return; }
    idx++;
    render();
  });
  dots.addEventListener("click", function (e) {
    var t = e.target.closest(".sp4-dot");
    if (!t) return;
    idx = Number(t.getAttribute("data-i")) || 0;
    render();
  });
  render();
})();
  </script>
  <script src="../../js/mastering-b2-daily-activity.js"></script>
  <script src="../../js/mastering-b2-exercise-auto.js"></script>
</body>
</html>
`
);

console.log("batch1 speaking ok");
