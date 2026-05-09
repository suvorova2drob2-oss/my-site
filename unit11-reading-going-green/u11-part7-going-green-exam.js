/**
 * FCE-style Reading Part 7 — multiple matching (four extracts).
 * Going Green: four people on eco-friendly town projects.
 */
(function () {
  var LETTERS = ["A", "B", "C", "D"];
  var NAMES = {
    A: "Speaker A (trees, past community plots & cycle paths)",
    B: "Speaker B (planner: greener building, water savings & buses/trains)",
    C: "Speaker C (100% green power, shared growing on public land)",
    D: "Speaker D (grow-your-own, centre traffic rule & cheaper bikes)"
  };

  var KEY = {
    1: "A",
    2: "B",
    3: "A",
    4: "D",
    5: "D",
    6: "C",
    7: "B",
    8: "D",
    9: "B",
    10: "C"
  };

  var EXPLANATIONS = {
    1: {
      letter: "A",
      quote:
        "We have some special planting days when volunteers help to increase the tree population in parks."
    },
    2: {
      letter: "B",
      quote:
        "We\u2019ve managed to decrease the amount of water used in the town as a whole \u2026 It\u2019s something like 20% down"
    },
    3: {
      letter: "A",
      quote: "there are all these bike paths now, so it feels much safer"
    },
    4: {
      letter: "D",
      quote: "buying a bike at a reduced cost to cycle there and back"
    },
    5: {
      letter: "D",
      quote:
        "It\u2019s all about not depending on outside help, for example, by growing your own vegetables. Fewer people here are reliant on supermarkets."
    },
    6: {
      letter: "C",
      quote:
        "a new scheme where you grow your own food on public land and all the local people help out"
    },
    7: {
      letter: "B",
      quote:
        "what we have done is manage to promote eco-friendly construction. The heating and design are modern and very effective."
    },
    8: {
      letter: "D",
      quote:
        "they recently introduced a system that means only certain number plates can be in the centre on one particular day"
    },
    9: {
      letter: "B",
      quote: "There has been considerable investment in buses and trains as well"
    },
    10: {
      letter: "C",
      quote: "we\u2019re running entirely on green power"
    }
  };

  var STATEMENTS = [
    { id: 1, text: "has a tree-planting scheme?" },
    { id: 2, text: "has seen a reduction in water usage?" },
    { id: 3, text: "has increased its number of cycle lanes?" },
    { id: 4, text: "has put the price of bikes down?" },
    { id: 5, text: "has encouraged self-sufficiency at home?" },
    { id: 6, text: "has introduced town gardens for growing produce?" },
    { id: 7, text: "has encouraged energy-efficient buildings?" },
    { id: 8, text: "has limited the number of cars going into the city centre?" },
    { id: 9, text: "has put a lot of money into public transport?" },
    { id: 10, text: "has managed to generate 100% renewable energy?" }
  ];

  var PASSAGES = [
    {
      letter: "A",
      name: "Going Green",
      body:
        "<p>Well, in my town, there are a few new incentives that have made a welcome difference. A couple of years ago, we had a go at all that. You know, having a few places where everyone could grow their own food and cutting down on water use. It didn\u2019t seem to take off for some reason and they put an end to it, so now they\u2019ve tried another approach. We have some special planting days when volunteers help to increase the tree population in parks. It\u2019s a lovely thing to do with the family and you feel like you\u2019re making a real difference. And rather than hopping on the bus, there are all these bike paths now, so it feels much safer. The good thing is that it\u2019s not only environmentally friendly, but it\u2019s also good for your own fitness. I\u2019d love to be able to do it, but I actually work from home so it\u2019s a bit tricky.</p>"
    },
    {
      letter: "B",
      name: "Going Green",
      body:
        "<p>I\u2019m actually a town planner and what they\u2019ve done in my local area is incredible. It\u2019s not been quick enough in my opinion, but hopefully they\u2019ll put pressure on the council before too long. There\u2019s still a severe lack of green areas in the centre, so I hope they\u2019ll look into this in the future. However, what we have done is manage to promote eco-friendly construction. The heating and design are modern and very effective. In addition, it\u2019s all locally sourced, so that\u2019s got to be good for the economy. We\u2019ve managed to decrease the amount of water used in the town as a whole, which we\u2019re rather proud of. It\u2019s something like 20% down and we\u2019ve raised awareness of the fact that we shouldn\u2019t waste water. There has been considerable investment in buses and trains as well, which has paid off. The key message is that we should be considerate and work towards the greater good of the community.</p>"
    },
    {
      letter: "C",
      name: "Going Green",
      body:
        "<p>I\u2019m only aware of what people tell me or what\u2019s been reported in the local paper. If I didn\u2019t read that, I wouldn\u2019t have a clue. Anyway, I read somewhere that we\u2019re running entirely on green power. I think that\u2019s something to brag about. But smog remains a problem. If they put to use a driving scheme, whereby some people could only drive on certain days, that would be a big improvement. In my opinion, they\u2019re scared of doing that because it wouldn\u2019t be popular with the public. The clear skies and fresh air would make it worthwhile, though. I try to cycle to work and do my bit. I have to go on the main road with the traffic though, so it puts me off. My friend told me about a new scheme where you grow your own food on public land and all the local people help out. I think I\u2019d prefer that to going to the supermarket!</p>"
    },
    {
      letter: "D",
      name: "Going Green",
      body:
        "<p>The message here is very clear. It\u2019s all about not depending on outside help, for example, by growing your own vegetables. Fewer people here are reliant on supermarkets. This is an old market town, so we\u2019re not likely to get fancy new buildings with all the modern energy-saving stuff very soon. It would spoil the look of the place, to be honest. But they recently introduced a system that means only certain number plates can be in the centre on one particular day. It was criticised initially, but now people are starting to see the benefits of less traffic. When you\u2019re walking through the park in the centre, it\u2019s just more peaceful and you feel like you could actually be in the middle of the countryside. Alongside this, there has been an initiative for people to get fit on their way to work, like buying a bike at a reduced cost to cycle there and back. It\u2019s really worth it.</p>"
    }
  ];

  var submitted = false;
  var answers = {};

  var STORAGE_KEY = "english_mastery_perfect";
  var EXAM_ID = "unit11GoingGreenPart7";
  var EXAM_LABEL = "Reading: Going green \u2014 Part 7 multiple matching";

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
      article.appendChild(el("div", "passage-body", p.body));
      root.appendChild(article);

      var tab = document.createElement("button");
      tab.type = "button";
      tab.textContent = p.letter;
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
    root.innerHTML = "";

    STATEMENTS.forEach(function (s) {
      var item = el("div", "q-item");
      item.dataset.qid = String(s.id);

      item.appendChild(el("div", "q-num", "Question " + s.id));
      item.appendChild(el("div", "q-text", s.text));

      var wrap = el("div", "q-select-wrap");
      wrap.appendChild(el("label", null, "Extract"));
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
        o.textContent = L + " \u2014 " + NAMES[L];
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
        '<div class="who">Answer: ' +
        ex.letter +
        " (" +
        NAMES[ex.letter] +
        ')</div><blockquote>&ldquo;' +
        ex.quote +
        "&rdquo;</blockquote>";
      item.appendChild(expl);

      root.appendChild(item);
    });
  }

  function updateSubmitState() {
    var n = Object.keys(answers).length;
    document.getElementById("btn-submit").disabled = n < 10 || submitted;
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
        res.textContent = "Correct \u2014 " + correct + " (" + NAMES[correct] + ").";
        res.className = "result-line ok";
      } else {
        item.classList.add("incorrect");
        res.textContent =
          "Incorrect \u2014 you chose " +
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
    document.getElementById("btn-submit").disabled = true;
    persistExamResult(correctCount, STATEMENTS.length);
  }

  function resetAll() {
    submitted = false;
    answers = {};
    STATEMENTS.forEach(function (s) {
      var item = document.querySelector('.q-item[data-qid="' + s.id + '"]');
      var sel = document.getElementById("sel-" + s.id);
      sel.value = "";
      sel.disabled = false;
      item.classList.remove("correct", "incorrect");
      document.getElementById("res-" + s.id).style.display = "none";
      var why = document.getElementById("why-" + s.id);
      why.style.display = "none";
      why.disabled = true;
      why.textContent = "Why?";
      item.querySelector(".explanation").classList.remove("open");
    });
    updateSubmitState();
  }

  document.getElementById("btn-submit").addEventListener("click", applyResults);
  document.getElementById("btn-reset").addEventListener("click", resetAll);

  renderPassages();
  renderQuestions();
  updateSubmitState();
})();
