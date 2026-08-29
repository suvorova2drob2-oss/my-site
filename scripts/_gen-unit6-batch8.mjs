/**
 * Unit 6 batch 8 — writing review, hub updates, progress catalog, back-links
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

write(
  "unit6-writing/review-wb/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 WB Writing &mdash; Review</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <style>
    h2 { color:#bae6fd; font-size:1.05rem; margin:18px 0 8px; }
    .model { border:1px solid #324a71; border-radius:14px; padding:14px; background:rgba(8,18,40,.45); color:#e8f0ff; line-height:1.55; margin-bottom:14px; }
    .item { margin:8px 0; color:#e8f0ff; }
    select, .gap { padding:4px 8px; border-radius:8px; border:1px solid #324a71; background:#172948; color:#e8f0ff; }
    button { font:inherit; font-weight:700; border:none; border-radius:10px; padding:8px 14px; cursor:pointer; background:#36d399; color:#05271a; margin:8px 8px 8px 0; }
    .fb { color:#9bb0d3; }
    .mb2-key-hint { display:none; color:#fbbf24; margin-left:6px; }
    .mb2-key-hint.is-show { display:inline; }
    textarea { width:100%; min-height:160px; border-radius:12px; border:1px solid #324a71; background:#172948; color:#e8f0ff; padding:12px; font:inherit; }
    .sample { border:1px solid #324a71; border-radius:12px; padding:12px; background:#223657; color:#d5e2f8; line-height:1.55; margin-top:12px; }
  </style>
</head>
<body data-mb2-unit="6" data-mb2-skill="writing" data-mb2-ex="u6-wb-writing-review">
  <main class="page">
    <header class="top">
      <div>
        <span class="tag">Workbook &middot; Writing Part 2 Review</span>
        <h1>Musical / Comedy review</h1>
      </div>
      <a class="back" href="../index.html">&larr; Writing</a>
    </header>

    <h2>Model &mdash; Mamma Mia! Here We Go Again</h2>
    <div class="model">
      <p><strong>Mamma Mia! Here We Go Again</strong></p>
      <p>(1) I went to see it with my mum, dad and brother for my birthday. While the first film was filmed on location on the Greek island of Skopelos, the 2018 sequel, directed by Ol Parker, was filmed on the island of Vis in Croatia.</p>
      <p>In the sequel, (2) the story takes place in the present with flashbacks to 1979 &hellip; (3) Unfortunately, one of the main characters dies.</p>
      <p>(4) So, what&rsquo;s right about it and what&rsquo;s wrong? &hellip; (5) My only criticism is that Meryl Streep features less in this one. (6) Also, a few of the songs are rubbish.</p>
      <p>(7) I would recommend this film to anyone who wants to go into the cinema and come out feeling better about the world. (8) I reckon it&rsquo;s pretty good. It&rsquo;s uplifting and a must-see for me.</p>
    </div>

    <h2>2 Match paragraphs to purpose</h2>
    <p style="color:#9bb0d3;">A Plot details without revealing the ending &middot; B Introduction and title &middot; C Recommendation &middot; D Discussion about the musical</p>
    <div class="item">Paragraph 1 <select id="p1"><option value="">—</option><option>A</option><option>B</option><option>C</option><option>D</option></select> <span class="mb2-key-hint" id="p1h"></span></div>
    <div class="item">Paragraph 2 <select id="p2"><option value="">—</option><option>A</option><option>B</option><option>C</option><option>D</option></select> <span class="mb2-key-hint" id="p2h"></span></div>
    <div class="item">Paragraph 3 <select id="p3"><option value="">—</option><option>A</option><option>B</option><option>C</option><option>D</option></select> <span class="mb2-key-hint" id="p3h"></span></div>
    <div class="item">Paragraph 4 <select id="p4"><option value="">—</option><option>A</option><option>B</option><option>C</option><option>D</option></select> <span class="mb2-key-hint" id="p4h"></span></div>
    <button type="button" id="chkP">Check structure</button>
    <p class="fb" id="fbP"></p>

    <h2>3 Include / Don&rsquo;t include</h2>
    <p style="color:#9bb0d3;">Write numbers of underlined phrases: Include 2,4,5,7 &middot; Don&rsquo;t include 1,3,6,8 (key).</p>
    <div class="item">Include: <input class="gap" id="inc" placeholder="e.g. 2, 4, 5, 7" /> <span class="mb2-key-hint" id="inch"></span></div>
    <div class="item">Don&rsquo;t include: <input class="gap" id="exc" placeholder="e.g. 1, 3, 6, 8" /> <span class="mb2-key-hint" id="exch"></span></div>
    <button type="button" id="chkInc">Check include table</button>
    <p class="fb" id="fbInc"></p>

    <h2>4 Descriptive adjectives</h2>
    <div id="adj"></div>
    <button type="button" id="chkAdj">Check adjectives</button>
    <p class="fb" id="fbAdj"></p>

    <h2>5&ndash;6 Write a comedy review (140&ndash;190)</h2>
    <p style="color:#9bb0d3;">Comedy Review Wanted &mdash; explain what it was about, likes/dislikes, recommend or not.</p>
    <textarea id="own" placeholder="Write your review…"></textarea>
    <button type="button" id="btnDone">Done &mdash; save</button>
    <p class="fb" id="note"></p>

    <details class="sample">
      <summary>Sample answer (Bridesmaids) &mdash; Answer Key</summary>
      <p><strong>Bridesmaids</strong></p>
      <p>I recently saw the comedy Bridesmaids and wasn&rsquo;t disappointed. The 2011 film was co-written by Kristen Wiig, who also stars as the main character, Annie.</p>
      <p>Annie has been asked to be the maid of honour for her best friend, Lillian, played by Maya Rudolph. Annie is down on her luck as her cake-making business has failed and she is forced to move back in with her mum. To make things worse, Annie finds a rival in Helen&hellip; At the same time, Annie&rsquo;s on/off boyfriend looks like bad news – that is, until she meets a friendly police officer.</p>
      <p>There is a lot to celebrate in this film. The situations &hellip; are hilarious. The mainly female cast is also fantastic. My only criticism is that the romance &hellip; is predictable&hellip;</p>
      <p>I would recommend this film to anyone who needs a good night out. It&rsquo;s laugh-out-loud and heart-warming at the same time.</p>
    </details>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
(function () {
  var PKEY = ["B","A","D","C"];
  document.getElementById("chkP").addEventListener("click", function () {
    var ok = 0;
    for (var i = 1; i <= 4; i++) {
      var s = document.getElementById("p" + i);
      var h = document.getElementById("p" + i + "h");
      var good = s.value === PKEY[i-1];
      s.classList.toggle("is-ok", good); s.classList.toggle("is-bad", !good);
      h.textContent = good ? "" : "→ " + PKEY[i-1];
      h.classList.toggle("is-show", !good);
      if (good) ok++;
    }
    document.getElementById("fbP").textContent = "Score: " + ok + " / 4";
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, 4);
  });
  function normList(s) {
    return String(s || "").replace(/\\s+/g, "").split(",").filter(Boolean).sort().join(",");
  }
  document.getElementById("chkInc").addEventListener("click", function () {
    var incOk = normList(document.getElementById("inc").value) === "2,4,5,7";
    var excOk = normList(document.getElementById("exc").value) === "1,3,6,8";
    document.getElementById("inch").textContent = incOk ? "" : "→ 2, 4, 5, 7";
    document.getElementById("inch").classList.toggle("is-show", !incOk);
    document.getElementById("exch").textContent = excOk ? "" : "→ 1, 3, 6, 8";
    document.getElementById("exch").classList.toggle("is-show", !excOk);
    var ok = (incOk?1:0)+(excOk?1:0);
    document.getElementById("fbInc").textContent = "Score: " + ok + " / 2";
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, 2);
  });
  var ADJ = [
    { t: "1 The comedy is laugh-out-loud. The main character is ___.", k: "hilarious" },
    { t: "2 The plot was fast-paced and unclear. In fact, it was rather ___.", k: "confusing" },
    { t: "3 I hoped the ending would be original, but unfortunately it was all very ___.", k: "predictable" },
    { t: "4 The Greek scenery was ___.", k: "stunning" },
    { t: "5 If you don't come out of this film happy, I'd be surprised. It's so ___.", k: "uplifting" },
    { t: "6 It's a ___ story of love and loss.", k: "moving" },
    { t: "7 It's action-packed and ___.", k: "gripping" },
    { t: "8 I have never seen such a ___ cast.", k: "fantastic" }
  ];
  var adj = document.getElementById("adj");
  adj.innerHTML = ADJ.map(function (a, i) {
    return '<div class="item">' + a.t.replace("___", '<input class="gap" id="a' + i + '" /> <span class="mb2-key-hint" id="ah' + i + '"></span>') + "</div>";
  }).join("");
  document.getElementById("chkAdj").addEventListener("click", function () {
    var ok = 0;
    ADJ.forEach(function (a, i) {
      var g = document.getElementById("a" + i);
      var h = document.getElementById("ah" + i);
      var good = String(g.value || "").trim().toLowerCase() === a.k;
      g.classList.toggle("is-ok", good); g.classList.toggle("is-bad", !good);
      h.textContent = good ? "" : "→ " + a.k;
      h.classList.toggle("is-show", !good);
      if (good) ok++;
    });
    document.getElementById("fbAdj").textContent = "Score: " + ok + " / 8";
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, 8);
  });
  document.getElementById("btnDone").addEventListener("click", function () {
    try { localStorage.setItem("mb2-u6-wb-review", document.getElementById("own").value || ""); } catch (e) {}
    if (window.MasteringB2Progress) {
      MasteringB2Progress.recordAndReward(
        { unit: 6, skill: "writing", exerciseId: "u6-wb-writing-review", percent: 100 },
        10
      );
    }
    document.getElementById("note").textContent = "Saved · Writing ✓";
  });
})();
  </script>
</body>
</html>
`
);

// Grammar hub
write(
  "unit6-grammar/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 &mdash; Grammar</title>
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
        <h1>Grammar &mdash; Unit 6</h1>
      </div>
      <a class="back" href="../unit6.html">&larr; Unit 6</a>
    </header>
    <p class="lead">Relative clauses (defining / non-defining) + causative <em>have/get</em> + Workbook practice.</p>
    <a class="card-link" href="relative-clauses/index.html" data-mb2-unit="6" data-mb2-skill="grammar" data-mb2-ex="u6-relative-clauses">
      <h2>Language focus: Relative clauses</h2>
      <p>SB flatshare-style gaps with relative pronouns + commas.</p>
      <span class="go">Open &rarr;</span>
    </a>
    <a class="card-link" href="causative-have-get/index.html" data-mb2-unit="6" data-mb2-skill="grammar" data-mb2-ex="u6-causative">
      <h2>Causative have / get</h2>
      <p>pierce / do / frame + Ready for Grammar practice.</p>
      <span class="go">Open &rarr;</span>
    </a>
    <a class="card-link" href="workbook/index.html" data-mb2-unit="6" data-mb2-skill="grammar" data-mb2-ex="u6-grammar-wb">
      <h2>Workbook &mdash; Defining / non-defining + causative text</h2>
      <p>Keys from Answer Key pp.135&ndash;136.</p>
      <span class="go">Open &rarr;</span>
    </a>
  </main>
  <script src="../js/mastering-b2-skill-progress.js"></script>
  <script src="../js/mastering-b2-hub-marks.js"></script>
</body>
</html>
`
);

// UoE hub update
write(
  "use-of-english/unit6/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Use of English — Unit 6</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-unit-hub.css" />
</head>
<body>
  <main class="page">
    <header class="top">
      <div>
        <div class="brand-kicker">Mastering B2</div>
        <h1>Use of English — Unit 6</h1>
      </div>
      <a class="back" id="backHub" href="../../unit6.html">&larr; Unit 6 hub</a>
    </header>
    <p class="lead">Part 1 friendship apps, relative gaps, Part 3 Hove, Part 4 + Workbook cloze / KWT.</p>
    <section class="grid">
      <a class="tile" href="part1-friendship-apps/index.html" data-mb2-unit="6" data-mb2-skill="uoe" data-mb2-ex="unit6-p1-friendship-apps">
        <h2>Part 1 &mdash; Friendship apps (SB)</h2>
        <p>Example (0) plenty; gaps 1&ndash;8. Keys 1B 2A 3C 4A 5D 6C 7C 8B.</p>
        <span class="go">Open Part 1 →</span>
      </a>
      <a class="tile" href="neighbours-relative-gaps.html?back=..%2Funit6%2Findex.html&amp;backLabel=Use%20of%20English%20%E2%80%94%20Unit%206" data-mb2-unit="6" data-mb2-skill="uoe" data-mb2-ex="unit6-neighbours-gaps">
        <h2>Relative pronouns &mdash; neighbours / social media</h2>
        <p>Example (0) who/that; gaps 1&ndash;12.</p>
        <span class="go">Open task →</span>
      </a>
      <a class="tile" href="../part3-word-formation/unit6-hove-flatshare.html?back=..%2Funit6%2Findex.html&amp;backLabel=Use%20of%20English%20%E2%80%94%20Unit%206" data-mb2-unit="6" data-mb2-skill="uoe" data-mb2-ex="unit6-p3-hove">
        <h2>Part 3 &mdash; Word formation (Hove flatshare)</h2>
        <p>Eight gaps + example (0) distance.</p>
        <span class="go">Open Part 3 →</span>
      </a>
      <a class="tile" href="../part4-key-word-transformation/unit6.html?back=..%2Funit6%2Findex.html&amp;backLabel=Use%20of%20English%20%E2%80%94%20Unit%206" data-mb2-unit="6" data-mb2-skill="uoe" data-mb2-ex="unit6-p4-kwt">
        <h2>Part 4 &mdash; Key word transformation (SB)</h2>
        <p>Four items: PUT, RUN, SHOULD, HOW.</p>
        <span class="go">Open Part 4 →</span>
      </a>
      <a class="tile" href="part2-why-i-travel-alone/index.html" data-mb2-unit="6" data-mb2-skill="uoe" data-mb2-ex="unit6-wb-p2-travel-alone">
        <h2>Workbook Part 2 &mdash; Why I Travel Alone</h2>
        <p>Open cloze keys: up, who/that, The, can&rsquo;t, rather, In, up, would.</p>
        <span class="go">Open Part 2 →</span>
      </a>
      <a class="tile" href="part4-wb-kwt/index.html" data-mb2-unit="6" data-mb2-skill="uoe" data-mb2-ex="unit6-wb-p4-kwt">
        <h2>Workbook Part 4 &mdash; Key word transformation</h2>
        <p>Six items (HAVING, GREW, PUT, CIRCUMSTANCES, IS, KNOWN).</p>
        <span class="go">Open WB Part 4 →</span>
      </a>
    </section>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script src="../../js/mastering-b2-hub-marks.js"></script>
</body>
</html>
`
);

console.log("batch8 hubs ok");
