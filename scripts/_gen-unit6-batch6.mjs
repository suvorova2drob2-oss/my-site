/**
 * Unit 6 batch 6 — Friends WB reading, vocab WB, grammar WB, writing review, UoE WB, hub updates, progress
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

const FRIENDS_PASSAGE = `
<p><strong>FRIENDS LIKE THESE</strong></p>
<p>Friends, the TV series which follows six 20-somethings living in New York, doesn't seem to have lost its appeal even though the doors to Central Perk finally closed in 2004. It ran for 10 years and its last episode attracted over 50 million American viewers. So, what continues to be the appeal of this iconic programme? Shouldn't something your parents watched be 'uncool'?</p>
<p>I can't quite remember the first episode I watched. I realised then that it was ahead of its time. But I had no idea of the impact it would have in years to come, thanks to the incredibly talented cast and crew who all contributed to its success. It is cross-generational, which is something that is harder to achieve than it sounds.</p>
<p>There is no denying that certain aspects of the show give the game away regarding when it was made. The appearance of the Twin Towers on the New York skyline is hard to miss, as are the fashions: the high-waisted trousers, the 1990s hairstyles and the amount of denim! Then, there's the technology, which is perhaps the most evident factor. There are several scenes where one of the characters puts a VHS into the far-from-slimline TV. And the lack of phones is actually nostalgic, considering they are so prominent in modern life. How refreshing are their chats at the Central Perk café without people constantly checking their phones?</p>
<p>Not many series could stand the test of time over 25 years since it was first aired. Regardless of certain aspects of the show that date it, there is a lot to be positive about. It is still relatable to people in their 20s. There are the dating disasters, not just from Joey, the serial dater, but from all of the key characters. Then, there's entering the world of work when you're at the bottom of the career ladder. Joey struggles to find acting work, Rachel starts off waitressing and Monica tries to establish herself as a chef. Also, family dynamics which have been carried over from childhood – Ross is still the golden child, leaving sister, Monica, to live in his shadow. Chandler's relationship with his parents is difficult and Phoebe's childhood is a slow reveal of tragedy.</p>
<p>But the main message is that friendship makes you strong. Although they are all very different in character, they all get on. To anyone who has made the move to a big city from the security of their parents and siblings, living with friends for the first time increases your dependence on them. If there's a problem with colleagues at your new workplace, your friends are there to make you feel better. To young people about to leave home, this type of programme must be reassuring.</p>
<p>And let's not forget the fun factor. Ultimately, the show is uplifting. No one actor stands out when it comes to comic timing. This is due to the quality of the writing as well as the actors themselves, who quite literally throw themselves into the part. One of the funniest scenes is when Ross, Rachel and Chandler try to get a sofa up a narrow staircase. Any fan would tell you that the comedy here is both physical and verbal.</p>
<p>So, when I find my kids watching the whole series for the third time, it's far from the annoyance of other rubbish they watch. As I find a comfortable place on the sofa, there's a little guilt as I know I should be getting on with some jobs. It's not quite nostalgia I feel, more a sense of satisfaction. There aren't many things that I can honestly say we watch together, but this is definitely one of them – a rare and genuine common interest in a world where teen life and adult life rarely meet.</p>
`.trim();

write(
  "unit6-reading/friends-wb/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 WB Reading &mdash; Friends Like These</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <style>
    .layout { display:grid; gap:20px; }
    @media (min-width:900px) { .layout { grid-template-columns:1fr 380px; align-items:start; } }
    .passage-wrap { border:1px solid #324a71; border-radius:14px; background:#223657; padding:18px; max-height:min(72vh,680px); overflow-y:auto; line-height:1.65; }
    .passage-wrap p { margin:0 0 12px; }
    .q { border:1px solid #324a71; border-radius:12px; padding:12px; margin-bottom:12px; background:rgba(8,18,40,.45); }
    .q h3 { font-size:.92rem; color:#bae6fd; margin:0 0 8px; }
    .opt { display:block; margin:4px 0; }
    .opt label { cursor:pointer; color:#e8f0ff; font-size:.92rem; }
    .opt.is-ok { outline:2px solid #36d399; }
    .opt.is-bad { outline:2px solid #f87171; }
    .btn-row { display:flex; gap:8px; flex-wrap:wrap; margin-top:10px; }
    button { font:inherit; font-weight:700; border:none; border-radius:10px; padding:8px 14px; cursor:pointer; }
    .btn-check { background:#36d399; color:#05271a; }
    .btn-reset { background:#3d4f6f; color:#e8f0ff; }
    .fb { margin-top:10px; color:#9bb0d3; }
    .line-ex { margin-top:22px; padding-top:16px; border-top:1px solid #324a71; }
    .gap { min-width:8rem; padding:4px 8px; border-radius:8px; border:1px solid #324a71; background:#172948; color:#e8f0ff; }
    .mb2-key-hint { display:none; color:#fbbf24; margin-left:6px; }
    .mb2-key-hint.is-show { display:inline; }
  </style>
</head>
<body data-mb2-unit="6" data-mb2-skill="reading" data-mb2-ex="u6-wb-friends">
  <main class="page">
    <header class="top">
      <div>
        <span class="tag">Workbook &middot; Reading Part 5</span>
        <h1>Friends Like These</h1>
      </div>
      <a class="back" href="../index.html">&larr; Reading</a>
    </header>
    <div class="layout">
      <div class="passage-wrap">${FRIENDS_PASSAGE}</div>
      <div>
        <div id="mcq"></div>
        <div class="btn-row">
          <button type="button" class="btn-check" id="btnCheck">Check</button>
          <button type="button" class="btn-reset" id="btnReset">Reset</button>
        </div>
        <p class="fb" id="fb"></p>
      </div>
    </div>
    <section class="line-ex">
      <h2 style="color:#bae6fd;font-size:1.05rem;">Exercise 2 &mdash; Words ending in -line</h2>
      <p style="color:#9bb0d3;">Bank: airline, coastline, deadline, guideline, headline, offline, outline, pipeline, underline</p>
      <ol id="lineGaps" style="color:#e8f0ff;line-height:2;"></ol>
      <div class="btn-row">
        <button type="button" class="btn-check" id="btnLine">Check -line words</button>
      </div>
      <p class="fb" id="fbLine"></p>
    </section>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
(function () {
  var KEY = ["A","B","C","A","D","C"];
  var MCQ = [
    { q: "What does 'the doors to Central Perk finally closed' in line 3 mean?", A:"The series came to an end.", B:"The actors found new jobs.", C:"The filming location moved.", D:"The series was no longer popular." },
    { q: "What does the writer appreciate about the show in the second paragraph?", A:"the impact of the very first show", B:"the future influence the show would have", C:"the appeal of the show to all age groups", D:"the well-written scripts" },
    { q: "What is it that most dates the show?", A:"the Twin Towers", B:"the coffee shop", C:"the technology", D:"the fashion" },
    { q: "What message do the storylines give to young people?", A:"A support network is very important.", B:"Look for acceptance in others.", C:"Don't grow up too soon.", D:"Try to forget the past." },
    { q: "What does 'uplifting' mean in line 51?", A:"intelligently written", B:"thought-provoking", C:"a high standard", D:"full of hope" },
    { q: "How does the writer feel when she sees her children watching the series?", A:"nostalgic", B:"annoyed", C:"content", D:"guilty" }
  ];
  var root = document.getElementById("mcq");
  root.innerHTML = MCQ.map(function (item, i) {
    return '<div class="q" data-i="' + i + '"><h3>' + (i+1) + ". " + item.q + "</h3>" +
      ["A","B","C","D"].map(function (L) {
        return '<div class="opt"><label><input type="radio" name="q' + i + '" value="' + L + '" /> ' + L + ") " + item[L] + "</label></div>";
      }).join("") + "</div>";
  }).join("");
  document.getElementById("btnCheck").addEventListener("click", function () {
    var ok = 0;
    MCQ.forEach(function (_, i) {
      var chosen = (document.querySelector('input[name="q' + i + '"]:checked') || {}).value;
      var good = chosen === KEY[i];
      if (good) ok++;
      var box = root.querySelector('.q[data-i="' + i + '"]');
      box.querySelectorAll(".opt").forEach(function (o) {
        o.classList.remove("is-ok", "is-bad");
        var inp = o.querySelector("input");
        if (inp.value === KEY[i]) o.classList.add("is-ok");
        else if (inp.checked && !good) o.classList.add("is-bad");
      });
    });
    document.getElementById("fb").textContent = "Score: " + ok + " / 6";
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, 6);
  });
  document.getElementById("btnReset").addEventListener("click", function () {
    root.querySelectorAll("input").forEach(function (i) { i.checked = false; });
    root.querySelectorAll(".opt").forEach(function (o) { o.classList.remove("is-ok", "is-bad"); });
    document.getElementById("fb").textContent = "";
  });

  var LINE_KEY = ["headline","coastline","deadline","outline","underline","offline","pipeline","guideline"];
  var LINE_PROMPTS = [
    "Have you seen the ___ of this morning's newspaper?",
    "The ___ of our country is becoming more damaged by violent seas.",
    "I'm working as fast as I can to make sure I meet the ___.",
    "When writing an essay, make sure you write an ___ first.",
    "Do we have to ___ or just circle the answers?",
    "I'm going to take a week ___ to have a break from technology.",
    "I read that an important oil ___ was damaged in the storm.",
    "I followed every ___ so I know I did everything correctly."
  ];
  var lg = document.getElementById("lineGaps");
  lg.innerHTML = LINE_PROMPTS.map(function (t, i) {
    return "<li>" + t.replace("___", '<input class="gap" id="lg' + i + '" /> <span class="mb2-key-hint" id="lh' + i + '"></span>') + "</li>";
  }).join("");
  document.getElementById("btnLine").addEventListener("click", function () {
    var ok = 0;
    LINE_KEY.forEach(function (k, i) {
      var g = document.getElementById("lg" + i);
      var h = document.getElementById("lh" + i);
      var good = String(g.value || "").trim().toLowerCase() === k;
      g.classList.toggle("is-ok", good);
      g.classList.toggle("is-bad", !good);
      h.textContent = good ? "" : "→ " + k;
      h.classList.toggle("is-show", !good);
      if (good) ok++;
    });
    document.getElementById("fbLine").textContent = "Score: " + ok + " / 8";
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, 8);
  });
})();
  </script>
</body>
</html>
`
);

write(
  "unit6-vocabulary/relationships-wb/index.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Unit 6 WB Vocabulary &mdash; Relationships</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/mastering-b2-page-skin.css" />
  <link rel="stylesheet" href="../../css/mastering-b2-back-link.css" />
  <style>
    .item { margin:10px 0; padding:12px; border-radius:12px; border:1px solid #324a71; background:rgba(8,18,40,.45); color:#e8f0ff; line-height:1.6; }
    select, .gap { padding:4px 8px; border-radius:8px; border:1px solid #324a71; background:#172948; color:#e8f0ff; }
    button { font:inherit; font-weight:700; border:none; border-radius:10px; padding:8px 14px; cursor:pointer; background:#36d399; color:#05271a; margin-top:10px; }
    .fb { color:#9bb0d3; margin-top:8px; }
    .mb2-key-hint { display:none; color:#fbbf24; margin-left:6px; }
    .mb2-key-hint.is-show { display:inline; }
    h2 { color:#bae6fd; font-size:1.05rem; margin:20px 0 8px; }
  </style>
</head>
<body data-mb2-unit="6" data-mb2-skill="vocabulary" data-mb2-ex="u6-wb-relationships">
  <main class="page">
    <header class="top">
      <div>
        <span class="tag">Workbook &middot; Vocabulary</span>
        <h1>Relationships &amp; describing people</h1>
      </div>
      <a class="back" href="../index.html">&larr; Vocabulary</a>
    </header>

    <h2>1 Choose the correct particle / word</h2>
    <div id="rel"></div>
    <button type="button" id="chk1">Check relationships</button>
    <p class="fb" id="fb1"></p>

    <h2>2 Describing people &mdash; complete the sentences</h2>
    <p style="color:#9bb0d3;">Bank: bald, expressive, freckled, generous, intolerant, modest, pale, plump, reserved (one extra unused from full box)</p>
    <div id="desc"></div>
    <button type="button" id="chk2">Check describing people</button>
    <p class="fb" id="fb2"></p>
  </main>
  <script src="../../js/mastering-b2-skill-progress.js"></script>
  <script>
(function () {
  var REL = [
    { t: "0 It looks like they've managed to sort ___ their differences.", opts: ["out","on","of"], key: "out" },
    { t: "1 My cousin was brought ___ mainly by my parents.", opts: ["up","on","in"], key: "up" },
    { t: "2 I have no idea how they put up ___ each other.", opts: ["by","with","for"], key: "with" },
    { t: "3 I'm really starting to run out ___ patience with her attitude to work.", opts: ["for","of","off"], key: "of" },
    { t: "4 Mary and Jack are so different, but they get ___ so well.", opts: ["over","in","on"], key: "on" },
    { t: "5 They fell ___ years ago and haven't spoken since.", opts: ["down","over","out"], key: "out" },
    { t: "6 Who did you ___ up to when you were a child?", opts: ["look","watch","see"], key: "look" },
    { t: "7 You should never let a good friend ___.", opts: ["up","down","in"], key: "down" },
    { t: "8 That girl always gets ___ off in lessons for talking.", opts: ["spoken","said","told"], key: "told" }
  ];
  var rel = document.getElementById("rel");
  rel.innerHTML = REL.map(function (r, i) {
    return '<div class="item">' + r.t.replace("___", '<select id="r' + i + '"><option value="">—</option>' +
      r.opts.map(function (o) { return '<option value="' + o + '">' + o + "</option>"; }).join("") +
      '</select> <span class="mb2-key-hint" id="rh' + i + '"></span>') + "</div>";
  }).join("");
  document.getElementById("chk1").addEventListener("click", function () {
    var ok = 0;
    REL.forEach(function (r, i) {
      var s = document.getElementById("r" + i);
      var h = document.getElementById("rh" + i);
      var good = s.value === r.key;
      s.classList.toggle("is-ok", good);
      s.classList.toggle("is-bad", !good);
      h.textContent = good ? "" : "→ " + r.key;
      h.classList.toggle("is-show", !good);
      if (good) ok++;
    });
    document.getElementById("fb1").textContent = "Score: " + ok + " / " + REL.length;
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, REL.length);
  });

  var DESC = [
    { t: "1 She has red hair and ___ cheeks just like her sister.", key: "freckled" },
    { t: "2 He is very ___ about how good he is at playing the piano.", key: "modest" },
    { t: "3 My dad went ___ at an early age.", key: "bald" },
    { t: "4 The dog is looking a little ___. We should take her for longer walks.", key: "plump" },
    { t: "5 My grandma has become so ___. She used to be very open-minded.", key: "intolerant" },
    { t: "6 Mr Bean has a very ___ face.", key: "expressive" },
    { t: "7 I'm really ___. I need to go somewhere hot on holiday to get a tan.", key: "pale" },
    { t: "8 My brother is ___. He doesn't show his true feelings very often.", key: "reserved" },
    { t: "9 Our teacher is ___. She gave us all ice creams at the end of term.", key: "generous" }
  ];
  var desc = document.getElementById("desc");
  desc.innerHTML = DESC.map(function (d, i) {
    return '<div class="item">' + d.t.replace("___", '<input class="gap" id="d' + i + '" /> <span class="mb2-key-hint" id="dh' + i + '"></span>') + "</div>";
  }).join("");
  document.getElementById("chk2").addEventListener("click", function () {
    var ok = 0;
    DESC.forEach(function (d, i) {
      var g = document.getElementById("d" + i);
      var h = document.getElementById("dh" + i);
      var val = String(g.value || "").trim().toLowerCase();
      var good = val === d.key || (d.key === "freckled" && (val === "freckled" || val === "plump"));
      // key_136: 1 freckled/plump
      if (i === 0) good = val === "freckled" || val === "plump";
      g.classList.toggle("is-ok", good);
      g.classList.toggle("is-bad", !good);
      h.textContent = good ? "" : "→ " + (i === 0 ? "freckled/plump" : d.key);
      h.classList.toggle("is-show", !good);
      if (good) ok++;
    });
    document.getElementById("fb2").textContent = "Score: " + ok + " / " + DESC.length;
    if (window.MasteringB2Progress) MasteringB2Progress.recordCheckFromDom(ok, DESC.length);
  });
})();
  </script>
</body>
</html>
`
);

console.log("batch6a ok");
