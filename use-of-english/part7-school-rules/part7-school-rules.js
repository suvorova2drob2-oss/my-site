/**
 * Unit 5 — Reading & Use of English Part 7 (B2 First style).
 * Four people A–D · 10 statements.
 * Key aligns statements to evidence in the passage (verify with your Teacher's Book).
 */
(function () {
  var LETTERS = ["A", "B", "C", "D"];
  var NAMES = {
    A: "Simon",
    B: "Jenny",
    C: "Lucy",
    D: "Andrew"
  };

  /** Official-style key — edit if your answer key differs. */
  var KEY = {
    1: "C",
    2: "A",
    3: "D",
    4: "B",
    5: "C",
    6: "B",
    7: "A",
    8: "D",
    9: "C",
    10: "C"
  };

  var EXPLANATIONS = {
    1: {
      letter: "C",
      quote:
        "I can\u2019t see why \u2013 they\u2019re no more dangerous than carrying a sharpened pencil in your pocket"
    },
    2: {
      letter: "A",
      quote:
        "they weren\u2019t allowed to drink water in class\u2026 his daughter\u2026 is expected to bring a refillable bottle for water"
    },
    3: {
      letter: "D",
      quote:
        "all rules, whatever they are, help to maintain order and get children ready for the real world"
    },
    4: {
      letter: "B",
      quote:
        "It\u2019s very confusing \u2013 it would be much simpler just to ban them altogether."
    },
    5: {
      letter: "C",
      quote:
        "It seems I agreed to all this when I signed the school rules document\u2026 but I honestly wasn\u2019t aware of any ban"
    },
    6: {
      letter: "B",
      quote: "Everything was black and white in those days, just like our school tie."
    },
    7: {
      letter: "A",
      quote:
        "far too much emphasis was placed on what we could and couldn\u2019t do, and sometimes this got in the way of learning"
    },
    8: {
      letter: "D",
      quote:
        "Discipline there has gone downhill in the last few years and the kids seem to do what they want."
    },
    9: {
      letter: "C",
      quote:
        "they humiliated her in front of her classmates and there\u2019s no excuse for that"
    },
    10: {
      letter: "C",
      quote:
        "We were given a couple of warnings, but I was still furious when they made her take the stud out"
    }
  };

  var STATEMENTS = [
    { id: 1, text: "I fail to understand the reason for a rule at my child's school." },
    {
      id: 2,
      text: "Something which was forbidden at the school before is actively encouraged now."
    },
    {
      id: 3,
      text: "School rules serve to prepare young people for the future."
    },
    {
      id: 4,
      text: "I disagree with the element of choice offered to my child."
    },
    {
      id: 5,
      text: "I did not realise that I had accepted a rule at my child's school."
    },
    {
      id: 6,
      text: "School rules were clearer and easier to understand when I was at school."
    },
    {
      id: 7,
      text: "Some school rules affected my ability to study."
    },
    {
      id: 8,
      text: "There has been a decline in standards of behaviour at my child's school."
    },
    {
      id: 9,
      text: "I was angry at the way my child was made to feel."
    },
    {
      id: 10,
      text: "I was discouraged from voicing my opinion on a rule at my child's school."
    }
  ];

  var PASSAGES = [
    {
      letter: "A",
      short: "Simon",
      name: "Simon",
      body:
        "<p>When I was at school \u2013 more years ago than I care to remember \u2013 far too much emphasis was placed on what we could and couldn\u2019t do, and sometimes this got in the way of learning. We had to wear our jacket and tie at all times, no matter what the temperature, and I remember sitting there in the height of summer, sweating profusely as I battled with algebra or struggled with French verb forms.</p>" +
        "<p>Simon recalls that they weren\u2019t allowed to drink water in class, which would be unacceptable today. In contrast, his daughter, attending the same school, is expected to bring a refillable bottle for water, as it\u2019s recognized that it improves concentration.</p>"
    },
    {
      letter: "B",
      short: "Jenny",
      name: "Jenny",
      body:
        "<p>At my son David\u2019s school, rule number one of their two-page Mobile Phone Policy states that \u2018pupils are strongly advised not to bring mobile phones to school\u2019; then there are sixteen more rules describing situations in which they can and cannot be used. It\u2019s very confusing \u2013 it would be much simpler just to ban them altogether. That\u2019s what my old school would have done if mobile phones had been around then. Everything was black and white in those days, just like our school tie.</p>"
    },
    {
      letter: "C",
      short: "Lucy",
      name: "Lucy",
      body:
        "<p>My sixteen-year-old daughter isn\u2019t allowed to wear a nose stud to school on health and safety grounds. Can you believe it? According to the headteacher, in a busy school piercings present \u2018a very real risk of accidents\u2019. I can\u2019t see why \u2013 they\u2019re no more dangerous than carrying a sharpened pencil in your pocket, and there\u2019s no rule against that, as far as I know. I used to wear earrings to school and never had any problems.</p>" +
        "<p>It seems I agreed to all this when I signed the school rules document at the beginning of last term, but I honestly wasn\u2019t aware of any ban on tiny metal objects in the nose. We were given a couple of warnings, but I was still furious when they made her take the stud out and sent her home for the day: they humiliated her in front of her classmates and there\u2019s no excuse for that.</p>"
    },
    {
      letter: "D",
      short: "Andrew",
      name: "Andrew",
      body:
        "<p>It\u2019s gone from one extreme to the other. When I was a lad, we weren\u2019t allowed to have shoulder-length hair at school. The headteacher cut it off in his office if we did, without so much as a phone call home. Now my boy mustn\u2019t have his hair cut too short, otherwise he\u2019ll be suspended until it grows back to \u2018a suitable length\u2019. He thinks it\u2019s unfair, but ultimately all rules, whatever they are, help to maintain order and get children ready for the real world. As a lawyer, I don\u2019t need to be convinced of their importance \u2013 they\u2019re part of my daily life. If anything, they should tighten the rules up a bit more at my son\u2019s place. Discipline there has gone downhill in the last few years and the kids seem to do what they want.</p>"
    }
  ];

  var submitted = false;
  var answers = {};

  var STORAGE_KEY = "english_mastery_perfect";
  var EXAM_ID = "unit5SchoolRulesPart7";
  var EXAM_LABEL = "Reading: School rules \u2014 Part 7 multiple matching";

  function persistExamResult(correct, total) {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var p = raw ? JSON.parse(raw) : {};
      if (!p || typeof p !== "object") p = {};
      if (!p.wins || typeof p.wins !== "object") p.wins = {};
      if (typeof p.name !== "string") p.name = "";
      p.score = Number(p.score) || 0;
      p.totalErrors = Number(p.totalErrors) || 0;
      if (!p.exams || typeof p.exams !== "object") p.exams = {};
      if (!p.exams[EXAM_ID] || typeof p.exams[EXAM_ID] !== "object") {
        p.exams[EXAM_ID] = { label: EXAM_LABEL, attempts: [] };
      }
      p.exams[EXAM_ID].label = EXAM_LABEL;
      if (!Array.isArray(p.exams[EXAM_ID].attempts)) p.exams[EXAM_ID].attempts = [];
      p.exams[EXAM_ID].attempts.push({
        at: new Date().toISOString(),
        correct: correct,
        total: total
      });
      if (p.exams[EXAM_ID].attempts.length > 20) {
        p.exams[EXAM_ID].attempts = p.exams[EXAM_ID].attempts.slice(-20);
      }
      p.score += correct;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) {}
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function renderPassages() {
    var root = document.getElementById("passages-root");
    var strip = document.getElementById("tab-strip");
    if (!root || !strip) return;
    root.innerHTML = "";
    strip.innerHTML = "";

    PASSAGES.forEach(function (p, idx) {
      var article = el("article", "passage");
      article.id = "passage-" + p.letter;
      article.dataset.letter = p.letter;
      if (idx === 0) article.classList.add("visible");

      var head = el("div", "passage-header");
      head.appendChild(el("span", "letter", p.letter));
      head.appendChild(el("span", "name", p.name));
      article.appendChild(head);
      var body = el("div", "passage-body");
      body.innerHTML = p.body;
      article.appendChild(body);
      root.appendChild(article);

      var tab = document.createElement("button");
      tab.type = "button";
      tab.textContent = p.letter + " · " + p.short;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", idx === 0 ? "true" : "false");
      if (idx === 0) tab.classList.add("active");
      tab.addEventListener("click", function () {
        strip.querySelectorAll("button").forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        root.querySelectorAll(".passage").forEach(function (a) {
          a.classList.toggle("visible", a.dataset.letter === p.letter);
        });
      });
      strip.appendChild(tab);
    });
  }

  function renderQuestions() {
    var root = document.getElementById("questions-root");
    if (!root) return;
    root.innerHTML = "";

    STATEMENTS.forEach(function (s) {
      var item = el("div", "q-item");
      item.dataset.qid = String(s.id);

      item.appendChild(el("div", "q-num", "Question " + s.id));
      item.appendChild(el("div", "q-text", s.text));

      var wrap = el("div", "q-select-wrap");
      wrap.appendChild(el("label", null, "Person"));
      var sel = document.createElement("select");
      sel.id = "sel-" + s.id;
      sel.dataset.qid = String(s.id);
      var opt0 = document.createElement("option");
      opt0.value = "";
      opt0.textContent = "\u2014";
      sel.appendChild(opt0);
      LETTERS.forEach(function (L) {
        var o = document.createElement("option");
        o.value = L;
        o.textContent = L + " (" + NAMES[L] + ")";
        sel.appendChild(o);
      });
      sel.addEventListener("change", function () {
        if (submitted) return;
        var v = sel.value;
        if (v) answers[s.id] = v;
        else delete answers[s.id];
        updateSubmitState();
      });
      wrap.appendChild(sel);
      item.appendChild(wrap);

      var res = el("div", "result-line");
      res.id = "res-" + s.id;
      res.style.display = "none";
      item.appendChild(res);

      var why = document.createElement("button");
      why.type = "button";
      why.className = "btn-why";
      why.id = "why-" + s.id;
      why.textContent = "Why?";
      why.style.display = "none";
      why.disabled = true;
      why.addEventListener("click", function () {
        var exp = item.querySelector(".explanation");
        if (!exp) return;
        exp.classList.toggle("open");
        why.textContent = exp.classList.contains("open") ? "Hide" : "Why?";
      });
      item.appendChild(why);

      var expl = el("div", "explanation");
      expl.id = "expl-" + s.id;
      var ex = EXPLANATIONS[s.id];
      expl.innerHTML =
        "<div class=\"who\">Answer: " +
        ex.letter +
        " (" +
        NAMES[ex.letter] +
        ")</div><blockquote>&ldquo;" +
        ex.quote +
        "&rdquo;</blockquote>";
      item.appendChild(expl);

      root.appendChild(item);
    });
  }

  function updateSubmitState() {
    var btn = document.getElementById("btn-submit");
    if (!btn) return;
    var n = Object.keys(answers).length;
    btn.disabled = n < STATEMENTS.length || submitted;
  }

  function applyResults() {
    submitted = true;
    var correctCount = 0;
    STATEMENTS.forEach(function (s) {
      var item = document.querySelector('.q-item[data-qid="' + s.id + '"]');
      var sel = document.getElementById("sel-" + s.id);
      var res = document.getElementById("res-" + s.id);
      var why = document.getElementById("why-" + s.id);
      var correct = KEY[s.id];
      var chosen = answers[s.id];

      item.classList.remove("correct", "incorrect");
      if (chosen === correct) {
        correctCount++;
        item.classList.add("correct");
        res.textContent = "Correct — " + correct + " (" + NAMES[correct] + ").";
        res.className = "result-line ok";
      } else {
        item.classList.add("incorrect");
        res.textContent =
          "Incorrect — you chose " +
          (chosen || "\u2014") +
          "; correct answer is " +
          correct +
          " (" +
          NAMES[correct] +
          ").";
        res.className = "result-line bad";
      }
      res.style.display = "block";
      why.style.display = "inline-block";
      why.disabled = false;
      why.textContent = "Why?";
      item.querySelector(".explanation").classList.remove("open");
      sel.disabled = true;
    });
    var btn = document.getElementById("btn-submit");
    if (btn) btn.disabled = true;
    persistExamResult(correctCount, STATEMENTS.length);
  }

  function resetAll() {
    submitted = false;
    answers = {};
    STATEMENTS.forEach(function (s) {
      var item = document.querySelector('.q-item[data-qid="' + s.id + '"]');
      var sel = document.getElementById("sel-" + s.id);
      if (sel) {
        sel.value = "";
        sel.disabled = false;
      }
      item.classList.remove("correct", "incorrect");
      var res = document.getElementById("res-" + s.id);
      if (res) res.style.display = "none";
      var why = document.getElementById("why-" + s.id);
      if (why) {
        why.style.display = "none";
        why.disabled = true;
        why.textContent = "Why?";
      }
      item.querySelector(".explanation").classList.remove("open");
    });
    updateSubmitState();
  }

  var btnSub = document.getElementById("btn-submit");
  var btnReset = document.getElementById("btn-reset");
  if (btnSub) btnSub.addEventListener("click", applyResults);
  if (btnReset) btnReset.addEventListener("click", resetAll);

  renderPassages();
  renderQuestions();
  updateSubmitState();
})();
