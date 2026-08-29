/**
 * Unit 6 batch 4 — writing, grammar causative, WB listening, Friends reading skeleton
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
  "unit6-writing/article-influences/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 Writing &mdash; Article INFLUENCES</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <style>
    .notice { border:1px solid #324a71; border-radius:14px; background:#223657; padding:16px 18px; margin-bottom:18px; }
    .notice h2 { color:#bae6fd; font-size:1.1rem; margin:0 0 8px; }
    .sample { border:1px solid #324a71; border-radius:14px; background:rgba(8,18,40,.5); padding:16px; margin:14px 0; line-height:1.65; color:#e8f0ff; }
    .sample h3 { color:#56ccf2; margin:0 0 10px; font-family:Fraunces,Georgia,serif; }
    .err { background:rgba(248,113,113,.18); border-bottom:2px solid #f87171; cursor:pointer; padding:0 2px; border-radius:3px; }
    .err.is-fixed { background:rgba(54,211,153,.2); border-bottom-color:#36d399; }
    .key-panel { margin-top:12px; padding:12px; border-radius:10px; background:#1a2c49; border:1px solid #324a71; color:#a7f3d0; display:none; }
    .key-panel.show { display:block; }
    .btn-row { display:flex; flex-wrap:wrap; gap:8px; margin-top:12px; }
    button { font:inherit; font-weight:700; border:none; border-radius:10px; padding:8px 14px; cursor:pointer; }
    .btn-check { background:#36d399; color:#05271a; }
    .btn-reset { background:#3d4f6f; color:#e8f0ff; }
    .write-box { width:100%; min-height:180px; border-radius:12px; border:1px solid #324a71; background:#172948; color:#e8f0ff; padding:12px; font:inherit; line-height:1.55; }
    .tips { color:#9bb0d3; font-size:.92rem; line-height:1.5; }
  </style>
</head>
<body data-mb2-unit="6" data-mb2-skill="writing" data-mb2-ex="u6-writing-article">
  <main class="page">
    <header class="top">
      <div>
        <span class="tag">Writing Part 2 &middot; Article</span>
        <h1>INFLUENCES</h1>
        <p class="lead">Notice + sample with 8 mistakes + write your own (140&ndash;190 words).</p>
      </div>
      <a class="back" href="../index.html">&larr; Writing</a>
    </header>

    <div class="notice">
      <h2>Articles wanted</h2>
      <p><strong>INFLUENCES</strong></p>
      <ul>
        <li>Which person has had a big influence on you?</li>
        <li>How has this person influenced you?</li>
      </ul>
      <p>Write us an article for the school magazine describing the person and saying how he or she has influenced you.</p>
    </div>

    <section>
      <h2 style="color:#bae6fd;font-size:1.05rem;">Sample answer &mdash; find and correct 8 mistakes</h2>
      <p class="tips">Click a red highlight if you spot an error (optional). Then press <strong>Check</strong> to see TB corrections.</p>
      <article class="sample" id="sample">
        <h3>&lsquo;Cheer up, chicken!&rsquo;</h3>
        <p>That&rsquo;s what my grandmother, my Nana, <span class="err" data-k="says to me / tells me">says me</span> when things aren&rsquo;t going well. Then she tells me, &lsquo;It&rsquo;ll turn out alright at the end, you&rsquo;ll see.&rsquo; And she&rsquo;s nearly always right.</p>
        <p>So when I&rsquo;m ill, or I&rsquo;ve <span class="err" data-k="fallen">fell</span> out with a friend or I&rsquo;m just feeling down, I imagine Nana, with her wrinkled, but smiling face and sparkling blue eyes, saying her words of encouragement to me. And although my problems <span class="err" data-k="(delete they)">they </span>don&rsquo;t just magically disappear, they don&rsquo;t seem so bad anymore and I&rsquo;m in <span class="err" data-k="a better mood">better mood</span> to sort them out.</p>
        <p>Nana has taught me to be positive in difficult moments. She&rsquo;s had many of them in her long and hard life. But despite this, she has a straight back and a determined look on her face. <span class="err" data-k="She is always">Always she is</span> cheerful and I&rsquo;ve never seen her in a bad temper.</p>
        <p>So even though she&rsquo;s nearly half my size and <span class="err" data-k="so">such</span> small that she sometimes wears children&rsquo;s clothes, she&rsquo;s the person I most look up <span class="err" data-k="to">at</span> in my family. She&rsquo;s a little lady with a big influence.</p>
      </article>
      <div class="btn-row">
        <button type="button" class="btn-check" id="btnCheck">Check mistakes</button>
        <button type="button" class="btn-reset" id="btnReset">Hide keys</button>
      </div>
      <div class="key-panel" id="keys">
        <strong>Teacher&rsquo;s Book corrections:</strong>
        <ol>
          <li>says me &rarr; <em>says to me</em> / <em>tells me</em></li>
          <li>I&rsquo;ve fell &rarr; I&rsquo;ve <em>fallen</em></li>
          <li>my problems they &rarr; delete <em>they</em></li>
          <li>in better mood &rarr; in <em>a</em> better mood</li>
          <li>Always she is &rarr; <em>She is always</em></li>
          <li>such small &rarr; <em>so</em> small</li>
          <li>look up at &rarr; look up <em>to</em></li>
          <li>(eighth surface error often paired with word order / article above &mdash; check full TB list)</li>
        </ol>
        <p>Phrasal verbs in the sample: turn out, fallen out with, sort &hellip; out, look up to.</p>
      </div>
    </section>

    <section style="margin-top:22px;">
      <h2 style="color:#bae6fd;font-size:1.05rem;">Now write your own article (140&ndash;190 words)</h2>
      <p class="tips">Don&rsquo;t forget: catchy title, lively opening (direct speech/questions), contractions &amp; phrasal verbs, descriptive language, leave the reader something to think about.</p>
      <textarea class="write-box" id="own" placeholder="Write your article here…"></textarea>
      <div class="btn-row">
        <button type="button" class="btn-check" id="btnDone">Done &mdash; saved draft locally</button>
      </div>
      <p class="tips" id="saveNote"></p>
    </section>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
(function () {
  document.querySelectorAll(".err").forEach(function (el) {
    el.addEventListener("click", function () {
      el.title = el.getAttribute("data-k") || "";
      el.classList.toggle("is-fixed");
    });
  });
  document.getElementById("btnCheck").addEventListener("click", function () {
    document.getElementById("keys").classList.add("show");
    document.querySelectorAll(".err").forEach(function (el) { el.classList.add("is-fixed"); });
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(8, 8);
  });
  document.getElementById("btnReset").addEventListener("click", function () {
    document.getElementById("keys").classList.remove("show");
    document.querySelectorAll(".err").forEach(function (el) { el.classList.remove("is-fixed"); });
  });
  document.getElementById("btnDone").addEventListener("click", function () {
    try {
      localStorage.setItem("mb2-u6-article-draft", document.getElementById("own").value || "");
    } catch (e) {}
    if (window.MasteringB2Progress) {
      MasteringB2Progress.recordAndReward(
        { unit: 6, skill: "writing", exerciseId: "u6-writing-article", percent: 100 },
        10
      );
    }
    document.getElementById("saveNote").textContent = "Draft saved in this browser · Writing ✓";
  });
})();
  </script>
</body>
</html>
`
);

write(
  "unit6-writing/informal-email-host/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 Writing &mdash; Informal email (host family)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <style>
    .mail { border:1px solid #324a71; border-radius:14px; background:#223657; padding:16px 18px; margin-bottom:16px; line-height:1.55; }
    .mail .from { color:#7dd3fc; font-weight:800; margin-bottom:8px; }
    textarea { width:100%; min-height:220px; border-radius:12px; border:1px solid #324a71; background:#172948; color:#e8f0ff; padding:12px; font:inherit; line-height:1.55; }
    button { font:inherit; font-weight:700; border:none; border-radius:10px; padding:8px 14px; background:#36d399; color:#05271a; cursor:pointer; margin-top:10px; }
    .tips { color:#9bb0d3; font-size:.92rem; }
  </style>
</head>
<body data-mb2-unit="6" data-mb2-skill="writing" data-mb2-ex="u6-writing-email-host">
  <main class="page">
    <header class="top">
      <div>
        <span class="tag">Writing Part 2 &middot; Informal email</span>
        <h1>Host family &mdash; Kate &amp; Andy Newson</h1>
        <p class="lead">Reply in 140&ndash;190 words.</p>
      </div>
      <a class="back" href="../index.html">&larr; Writing</a>
    </header>
    <p>This summer you are going to spend one month studying English in an English-speaking country. Read this part of an email you received from your host family and write your reply to them.</p>
    <div class="mail">
      <div class="from">From: Kate and Andy Newson</div>
      <p>We have your personal details but perhaps you could tell us a little more about yourself. How would you describe your personality and what sorts of things would you like to do when you&rsquo;re here?</p>
      <p>Thanks<br />Kate and Andy Newson</p>
    </div>
    <p class="tips">Write your email in 140&ndash;190 words. Cover personality + activities you&rsquo;d like to do.</p>
    <textarea id="reply" placeholder="Dear Kate and Andy,…"></textarea>
    <button type="button" id="btnDone">Done &mdash; save draft</button>
    <p class="tips" id="note"></p>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
    document.getElementById("btnDone").addEventListener("click", function () {
      try { localStorage.setItem("mb2-u6-host-email", document.getElementById("reply").value || ""); } catch (e) {}
      if (window.MasteringB2Progress) {
        MasteringB2Progress.recordAndReward(
          { unit: 6, skill: "writing", exerciseId: "u6-writing-email-host", percent: 100 },
          10
        );
      }
      document.getElementById("note").textContent = "Draft saved · Writing ✓";
    });
  </script>
</body>
</html>
`
);

write(
  "unit6-grammar/causative-have-get/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 Grammar &mdash; Causative have/get</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <link rel="stylesheet" href="../../css/part2-open-cloze.css" />
  <style>
    .rule { border:1px solid #324a71; border-radius:12px; padding:14px; background:#223657; margin-bottom:16px; color:#d5e2f8; line-height:1.55; }
    .item { margin:12px 0; padding:12px; border-radius:12px; border:1px solid #324a71; background:rgba(8,18,40,.45); }
    .gap { min-width:7rem; }
    .mb2-key-hint { display:none; margin-left:8px; color:#fbbf24; font-size:.9rem; }
    .mb2-key-hint.is-show { display:inline; }
  </style>
</head>
<body class="part2-open-body" data-mb2-unit="6" data-mb2-skill="grammar" data-mb2-ex="u6-causative">
  <main class="page part2-open-page">
    <header class="top">
      <div>
        <span class="tag">Language focus</span>
        <h1>Causative passive with <em>have</em> and <em>get</em></h1>
      </div>
      <a class="back" href="../index.html">&larr; Grammar</a>
    </header>
    <div class="rule">
      <p><strong>have/get + object + past participle</strong> &mdash; someone else does the action for the subject (or an unpleasant event outside the speaker&rsquo;s control).</p>
      <p>Compare: <em>I repainted the windows.</em> (= I did it) &nbsp;|&nbsp; <em>I had the windows repainted.</em> (= someone did it for me)</p>
      <p><em>Get</em> is more informal: <em>Where did you get your photos developed?</em></p>
    </div>
    <section class="part2-open-task">
      <h2 style="color:#bae6fd;font-size:1rem;margin-bottom:10px;">SB prompts &mdash; past participle</h2>
      <div class="item">1 &hellip; they want to have their nose <input class="gap" id="g1" data-ans="pierced" /> (pierce) or get a tattoo <input class="gap" id="g2" data-ans="done" /> (do).</div>
      <div class="item">2 She&rsquo;s had it <input class="gap" id="g3" data-ans="framed" /> (frame) and it&rsquo;s up on the wall in her living room.</div>
      <h2 style="color:#bae6fd;font-size:1rem;margin:18px 0 10px;">Ready for Grammar &mdash; discuss / complete</h2>
      <div class="item">3 Would you like to have any part of your body <input class="gap" id="g4" data-ans="pierced" /> (pierce)?</div>
      <div class="item">4 What are the advantages of having your head <input class="gap" id="g5" data-ans="shaved" /> (shave)?</div>
      <div class="item">5 If you could have your photo <input class="gap" id="g6" data-ans="taken" /> (take) with someone famous, who would you choose?</div>
      <div class="item">6 When was the last time you had a tooth <input class="gap" id="g7" data-ans="filled" /> (fill)?</div>
      <div class="item">7 Have you ever considered having your hair <input class="gap" id="g8" data-ans="restyled" /> (restyle)?</div>
      <div class="item">8 Do you know anyone who has had something <input class="gap" id="g9" data-ans="stolen" /> (steal) from them?</div>
    </section>
    <div class="btn-row" style="margin-top:12px;display:flex;gap:8px;">
      <button type="button" class="part2-btn-check" id="btnCheck">Check</button>
      <button type="button" class="part2-btn-reset" id="btnReset">Reset</button>
    </div>
    <div class="part2-feedback" id="fb"></div>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
(function () {
  var gaps = [].slice.call(document.querySelectorAll(".gap"));
  gaps.forEach(function (g) {
    var h = document.createElement("span");
    h.className = "mb2-key-hint";
    g.parentNode.insertBefore(h, g.nextSibling);
    g.addEventListener("input", function () {
      g.classList.remove("is-ok", "is-bad");
      h.classList.remove("is-show");
    });
  });
  function norm(s) { return String(s || "").trim().toLowerCase(); }
  document.getElementById("btnCheck").addEventListener("click", function () {
    var ok = 0;
    gaps.forEach(function (g) {
      var h = g.nextSibling;
      var good = norm(g.value) === norm(g.getAttribute("data-ans"));
      g.classList.toggle("is-ok", good);
      g.classList.toggle("is-bad", !good);
      if (h && h.classList) {
        h.textContent = good ? "" : "\\u2192 " + g.getAttribute("data-ans");
        h.classList.toggle("is-show", !good);
      }
      if (good) ok++;
    });
    var fb = document.getElementById("fb");
    fb.classList.add("show");
    fb.textContent = "Score: " + ok + " / " + gaps.length;
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, gaps.length);
  });
  document.getElementById("btnReset").addEventListener("click", function () {
    gaps.forEach(function (g) {
      g.value = "";
      g.classList.remove("is-ok", "is-bad");
      var h = g.nextSibling;
      if (h && h.classList) h.classList.remove("is-show");
    });
    document.getElementById("fb").classList.remove("show");
  });
})();
  </script>
</body>
</html>
`
);

console.log("batch4 ok");
