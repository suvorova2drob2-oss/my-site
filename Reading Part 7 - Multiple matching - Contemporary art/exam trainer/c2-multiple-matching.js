(function () {
  var LETTERS = ["A", "B", "C", "D", "E"];
  var NAMES = {
    A: "Myth: \u2018Contemporary\u2019 is new",
    B: "Myth: be impressed by all",
    C: "Myth: no beautiful art left",
    D: "Myth: vs Western tradition",
    E: "Myth: toys for the rich"
  };

  var KEY = { 1: "B", 2: "B", 3: "E", 4: "B", 5: "A", 6: "A", 7: "D", 8: "E", 9: "B", 10: "D" };

  var EXPLANATIONS = {
    1: { letter: "B", quote: "Yet the sieving process of history will deem that most of them are." },
    2: { letter: "B", quote: "Chances are, the artist hasn\u2019t either." },
    3: { letter: "E", quote: "To grumble about the relations between art and money is really to try to close the stable door once the horse has bolted." },
    4: { letter: "B", quote: "It\u2019s just whether it touches you at a more instinctive, gut level." },
    5: { letter: "A", quote: "The story of modern art is littered with innovations and provocations that once felt scandalous." },
    6: { letter: "A", quote: "If you only want a feed of static pictures, you can scroll a screen, not a wall." },
    7: { letter: "D", quote: "Okay, so you think that Western art is declining and decadent because the West is decadent and in decline." },
    8: { letter: "E", quote: "If a billionaire chooses to spend millions on a pile of bricks and rubber, at least they are supporting an artist and a gallery, indeed a whole ecosystem in which other, smaller artists can thrive." },
    9: { letter: "B", quote: "It\u2019s because you\u2019ve missed a trick." },
    10: { letter: "D", quote: "You could call it tokenism, you could call it vampirism, but you could also call it common sense." }
  };

  var STATEMENTS = [
    { id: 1, text: "a suggestion that the majority of artists will fail to make a lasting impression" },
    { id: 2, text: "the inherent impossibility of determining the definitive quality of artworks" },
    { id: 3, text: "an admission that it is too late to end a controversial connection" },
    { id: 4, text: "a reassurance that emotional responses are more valid than interpretation" },
    { id: 5, text: "a hint that the quality of art can be judged by its originality" },
    { id: 6, text: "an outdated assumption that art is essentially about still pictures" },
    { id: 7, text: "a rebuttal of a claim about a decline in the aesthetic value of art" },
    { id: 8, text: "the indirect benefits of an apparently ridiculous decision" },
    { id: 9, text: "an arrogant assertion that is likely to reflect badly on the critic" },
    { id: 10, text: "a rejection of criticisms of displaying work by a more diverse range of creators" }
  ];

  var PASSAGES = [
    {
      letter: "A",
      name: NAMES.A,
      body:
        "A MYTH: The idea of being \u2018contemporary\u2019 is new. Every era has called its own art \u2018contemporary\u2019, from the early impressionists to Picasso\u2019s experiments with Cubism, and the story of modern art is littered with innovations and provocations that once felt scandalous. To say that the label is a novelty is either screamingly obvious, or crass, or opportunistic. Walk into a serious gallery now and you meet a dizzying smorgasbord of photographs, paintings, sculptures, installation and video; the idea that \u2018art\u2019 is still a framed picture in a gilded frame, meanwhile, is hard to sustain when anyone can post still images in an instant. If you only want a feed of static pictures, you can scroll a screen, not a wall."
    },
    {
      letter: "B",
      name: NAMES.B,
      body:
        "B MYTH: You\u2019re meant to be impressed by everything. One of the worst things someone can say at an art gallery is, \u2018My child could do that!\u2019 That\u2019s not because it\u2019s insulting to the artist. It\u2019s because you\u2019ve missed a trick. Get your child to do it, then! It would at the very least pay for their future astronomical student fees. If you will persist in viewing the art world as a joke, just be sure that it isn\u2019t at your expense. It\u2019s okay to dislike some contemporary art. You\u2019re not meant to like everything, or indeed \u2018get\u2019 it. Because that is the big fear: \u2018Do I get it?\u2019 This is, however, looking through the wrong end of the telescope. Sometimes, with art, there isn\u2019t much to get \u2013 it\u2019s just whether it touches you at a more instinctive, gut level. Other times, there is so much to get, so many potential readings, that you couldn\u2019t possibly get all of them anyway. Chances are, the artist hasn\u2019t either. Failure is a prerequisite, and must be forgiven. Not every work that is created and shown is a Raphael. Not every idea that seemed dazzling in the studio comes across as particularly deft in a museum. Remember: no artist sets out to be minor. Yet the sieving process of history will deem that most of them are."
    },
    {
      letter: "C",
      name: NAMES.C,
      body:
        "C MYTH: All the beautiful pictures have gone. The clich\u00e9 of contemporary work as so many piles of bricks and \u2018clouds of wasps\u2019 is a lazy caricature. In practice we have Gerhard Richter\u2019s mysterious blurry paintings, Warhol\u2019s multiple Marilyns, and a noticeable return of serious figurative painting in auction salerooms and in critical recognition. It is a strange time to claim that the human figure has been banished, when a major show at the Whitechapel Gallery, Radical Figures, can put painted bodies back at the centre of the conversation with an intensity that has not been seen for a generation."
    },
    {
      letter: "D",
      name: NAMES.D,
      body:
        "D MYTH: Artists want to thumb their noses at Western tradition. Okay, so you think that Western art is declining and decadent because the West is decadent and in decline. Fine. But note that contemporary art has very much opened itself up to other continents; these days, no self-respecting museum isn\u2019t scrambling to host work from Africa, Asia or South America. You could call it tokenism, you could call it vampirism, but you could also call it common sense. Fervid interest in the likes of the Nigerian Njideka Akunyili Crosby, or the Argentine-Swiss Vivian Suter (both contributors to London\u2019s Art on the Underground scheme) remind us that the art world isn\u2019t necessarily a closed circle; it is much, much larger than you think."
    },
    {
      letter: "E",
      name: NAMES.E,
      body:
        "E MYTH: Artworks are just playthings for the ultra-rich. Art has always been a yardstick of power. It was like this when the Medici were covering Florence with their self-aggrandising commissions, and it\u2019s like this now when a billionaire funds a brand new wing at Tate Modern and gets their name plastered on it. To grumble about the relations between art and money is really to try to close the stable door once the horse has bolted. Everyone kvetches about how much modern art costs, but this is more to do with our grim fascination with money rather than any specific interest in the works. If a billionaire chooses to spend millions on a pile of bricks and rubber, at least they are supporting an artist and a gallery, indeed a whole ecosystem in which other, smaller artists can thrive. The general public, meanwhile, isn\u2019t asked to spend millions to enjoy the same stuff, thankfully."
    }
  ];

  var submitted = false;
  var answers = {};

  var STORAGE_KEY = "english_mastery_perfect";
  var EXAM_ID = "contemporaryArtPart7";
  var EXAM_LABEL = "Reading: Contemporary art \u2014 Part 7 multiple matching";

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
      tab.textContent = p.letter + " " + p.name;
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
        res.textContent = "Correct - " + correct + " (" + NAMES[correct] + ").";
        res.className = "result-line ok";
      } else {
        item.classList.add("incorrect");
        res.textContent =
          "Incorrect - you chose " +
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
