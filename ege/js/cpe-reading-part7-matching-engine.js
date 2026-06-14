/**
 * CPE Reading Part 7 — multiple matching (sections A–F, reusable pack).
 * mountPage({ pack }) — see unit3-reading-innovation-limits-data.js
 */
(function (W) {
  "use strict";

  var STORAGE_KEY = "english_mastery_perfect";

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function labelForLetter(pack, letter) {
    var names = pack.names || {};
    var L = String(letter || "");
    if (names[L]) return L + " (" + names[L] + ")";
    return L;
  }

  function persistExamResult(pack, correct, total) {
    if (!pack.examId) return;
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var p = raw ? JSON.parse(raw) : {};
      if (!p || typeof p !== "object") p = {};
      if (!p.wins || typeof p.wins !== "object") p.wins = {};
      if (typeof p.name !== "string") p.name = "";
      p.score = Number(p.score) || 0;
      p.totalErrors = Number(p.totalErrors) || 0;
      if (!p.exams || typeof p.exams !== "object") p.exams = {};
      var examId = String(pack.examId);
      if (!p.exams[examId] || typeof p.exams[examId] !== "object") {
        p.exams[examId] = { label: pack.examLabel || examId, attempts: [] };
      }
      p.exams[examId].label = pack.examLabel || examId;
      if (!Array.isArray(p.exams[examId].attempts)) p.exams[examId].attempts = [];
      p.exams[examId].attempts.push({
        at: new Date().toISOString(),
        correct: correct,
        total: total,
      });
      if (p.exams[examId].attempts.length > 20) {
        p.exams[examId].attempts = p.exams[examId].attempts.slice(-20);
      }
      p.score += correct;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) {}
  }

  function mountPage(opts) {
    var pack = (opts && opts.pack) || null;
    if (!pack || !Array.isArray(pack.passages) || !Array.isArray(pack.statements)) return;

    var letters = Array.isArray(pack.letters) && pack.letters.length
      ? pack.letters.slice()
      : pack.passages.map(function (p) {
          return p.letter;
        });

    var key = pack.key || {};
    var explanations = pack.explanations || {};
    var selectLabel = pack.selectLabel || "Section";
    var submitted = false;
    var answers = {};

    function renderPassages() {
      var root = document.getElementById("passages-root");
      var strip = document.getElementById("tab-strip");
      if (!root || !strip) return;
      root.innerHTML = "";
      strip.innerHTML = "";

      pack.passages.forEach(function (p, idx) {
        var article = el("article", "passage");
        article.id = "passage-" + p.letter;
        article.dataset.letter = p.letter;
        if (idx === 0) article.classList.add("visible");

        var head = el("div", "passage-header");
        head.appendChild(el("span", "letter", p.letter));
        if (p.name) head.appendChild(el("span", "name", p.name));
        article.appendChild(head);

        var body = el("div", "passage-body");
        body.innerHTML = p.body;
        article.appendChild(body);
        root.appendChild(article);

        var tab = document.createElement("button");
        tab.type = "button";
        tab.textContent = p.short ? p.letter + " · " + p.short : p.letter;
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

      pack.statements.forEach(function (s) {
        var item = el("div", "q-item");
        item.dataset.qid = String(s.id);

        item.appendChild(el("div", "q-num", "Question " + s.id));
        item.appendChild(el("div", "q-text", s.text));

        var wrap = el("div", "q-select-wrap");
        wrap.appendChild(el("label", null, selectLabel));
        var sel = document.createElement("select");
        sel.id = "sel-" + s.id;
        sel.dataset.qid = String(s.id);
        var opt0 = document.createElement("option");
        opt0.value = "";
        opt0.textContent = "\u2014";
        sel.appendChild(opt0);
        letters.forEach(function (L) {
          var o = document.createElement("option");
          o.value = L;
          o.textContent = labelForLetter(pack, L);
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
        var ex = explanations[s.id] || {};
        var who =
          "Answer: " +
          (ex.letter || key[s.id] || "?") +
          (ex.letter && pack.names && pack.names[ex.letter]
            ? " (" + pack.names[ex.letter] + ")"
            : "");
        expl.innerHTML =
          "<div class=\"who\">" +
          who +
          "</div><blockquote>&ldquo;" +
          (ex.quote || "") +
          "&rdquo;</blockquote>";
        item.appendChild(expl);

        root.appendChild(item);
      });
    }

    function updateSubmitState() {
      var btn = document.getElementById("btn-submit");
      if (!btn) return;
      var n = Object.keys(answers).length;
      btn.disabled = n < pack.statements.length || submitted;
    }

    function applyResults() {
      submitted = true;
      var correctCount = 0;
      pack.statements.forEach(function (s) {
        var item = document.querySelector('.q-item[data-qid="' + s.id + '"]');
        var sel = document.getElementById("sel-" + s.id);
        var res = document.getElementById("res-" + s.id);
        var why = document.getElementById("why-" + s.id);
        var correct = key[s.id];
        var chosen = answers[s.id];

        item.classList.remove("correct", "incorrect");
        if (chosen === correct) {
          correctCount++;
          item.classList.add("correct");
          res.textContent = "Correct — " + labelForLetter(pack, correct) + ".";
          res.className = "result-line ok";
        } else {
          item.classList.add("incorrect");
          res.textContent =
            "Incorrect — you chose " +
            (chosen ? labelForLetter(pack, chosen) : "\u2014") +
            "; correct answer is " +
            labelForLetter(pack, correct) +
            ".";
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
      persistExamResult(pack, correctCount, pack.statements.length);
    }

    function resetAll() {
      submitted = false;
      answers = {};
      pack.statements.forEach(function (s) {
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
  }

  W.CPE_READING_PART7 = { mountPage: mountPage };
})(typeof window !== "undefined" ? window : globalThis);
