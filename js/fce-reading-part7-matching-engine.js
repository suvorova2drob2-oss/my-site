/**
 * FCE / B2 First — Reading Part 7 multiple matching (people A–D, typically 10 statements).
 * Global: FCE_READING_PART7.mountPage({ pack })
 *
 * UX (mandatory): sticky question rail beside single-column passages A→D;
 * letter chips A/B/C/D (not &lt;select&gt;) so all answers stay usable while reading C/D.
 * Etalon shell: css/fce-reading-part7-shell.css
 * Rule: .cursor/rules/fce-reading-part7-matching-sticky-rail.mdc
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

  function setLetterButtons(item, chosen) {
    item.querySelectorAll(".letter-btn").forEach(function (btn) {
      btn.classList.toggle("is-on", btn.getAttribute("data-letter") === chosen);
    });
  }

  function setLettersDisabled(item, disabled) {
    item.querySelectorAll(".letter-btn").forEach(function (btn) {
      btn.disabled = disabled;
    });
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
        total: total
      });
      if (p.exams[examId].attempts.length > 20) {
        p.exams[examId].attempts = p.exams[examId].attempts.slice(-20);
      }
      p.score += correct;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) {}
  }

  function clearBootShell() {
    if (W.document.documentElement) {
      W.document.documentElement.classList.remove("p7-booting");
    }
  }

  function paintBootShell() {
    var pr = W.document.getElementById("passages-root");
    var qr = W.document.getElementById("questions-root");
    if (!pr || !qr) return;
    if (pr.querySelector(".passage")) return;
    if (W.document.documentElement) {
      W.document.documentElement.classList.add("p7-booting");
    }
    if (!pr.querySelector(".p7-boot-skel")) {
      pr.innerHTML =
        '<div class="p7-boot-skel p7-boot-skel-passage" aria-busy="true" aria-label="Loading text"></div>';
    }
    if (!qr.querySelector(".p7-boot-skel") && !qr.querySelector(".q-item")) {
      var qh = "";
      var n = 10;
      var i;
      for (i = 0; i < n; i++) {
        qh += '<div class="p7-boot-skel p7-boot-skel-q" aria-hidden="true"></div>';
      }
      qr.innerHTML = qh;
    }
  }

  if (W.document.readyState === "loading") {
    W.document.addEventListener("DOMContentLoaded", paintBootShell);
  } else {
    paintBootShell();
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
    var submitted = false;
    var answers = {};

    function renderPassages() {
      var root = document.getElementById("passages-root");
      var strip = document.getElementById("tab-strip");
      if (!root) return;
      root.innerHTML = "";
      if (strip) strip.innerHTML = "";

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

        if (!strip) return;
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

        item.appendChild(el("div", "q-num", String(s.id) + "."));
        item.appendChild(el("div", "q-text", s.text));

        var lettersWrap = el("div", "q-letters");
        lettersWrap.setAttribute("role", "group");
        lettersWrap.setAttribute("aria-label", "Answer for statement " + s.id);
        letters.forEach(function (L) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "letter-btn";
          btn.setAttribute("data-letter", L);
          btn.textContent = L;
          btn.title = labelForLetter(pack, L);
          btn.addEventListener("click", function () {
            if (submitted) return;
            if (answers[s.id] === L) {
              delete answers[s.id];
              setLetterButtons(item, "");
            } else {
              answers[s.id] = L;
              setLetterButtons(item, L);
            }
            updateSubmitState();
          });
          lettersWrap.appendChild(btn);
        });
        item.appendChild(lettersWrap);

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
        var whoLetter = ex.letter || key[s.id] || "?";
        expl.innerHTML =
          "<div class=\"who\">Answer: " +
          labelForLetter(pack, whoLetter) +
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
        var res = document.getElementById("res-" + s.id);
        var why = document.getElementById("why-" + s.id);
        var correct = key[s.id];
        var chosen = answers[s.id];

        item.classList.remove("correct", "incorrect");
        if (chosen === correct) {
          correctCount++;
          item.classList.add("correct");
          res.textContent = "Correct \u2014 " + labelForLetter(pack, correct) + ".";
          res.className = "result-line ok";
        } else {
          item.classList.add("incorrect");
          res.textContent =
            "Incorrect \u2014 you chose " +
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
        setLettersDisabled(item, true);
      });
      var btn = document.getElementById("btn-submit");
      if (btn) btn.disabled = true;
      persistExamResult(pack, correctCount, pack.statements.length);
      if (typeof pack.onScored === "function") {
        pack.onScored(correctCount, pack.statements.length);
      } else if (window.MasteringB2Progress) {
        MasteringB2Progress.recordCheckFromDom(correctCount, pack.statements.length);
      }
    }

    function resetAll() {
      submitted = false;
      answers = {};
      pack.statements.forEach(function (s) {
        var item = document.querySelector('.q-item[data-qid="' + s.id + '"]');
        setLetterButtons(item, "");
        setLettersDisabled(item, false);
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
    clearBootShell();
  }

  W.FCE_READING_PART7 = { mountPage: mountPage };
})(typeof window !== "undefined" ? window : globalThis);
