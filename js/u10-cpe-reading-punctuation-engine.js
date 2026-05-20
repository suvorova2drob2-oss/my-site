(function (W, D) {
  "use strict";

  var pack = W.U10_CPE_READING_PUNCTUATION_DATA;
  if (!pack) return;

  var CORRECT = pack.correct;
  var MCQ = pack.mcq;
  var HUNTS = pack.hunts;
  var KEYS = ["A", "B", "C", "D"];

  var root = D.getElementById("mcq-root");
  var fb = D.getElementById("feedback");
  if (!root || !fb) return;

  function clearNode(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  function mk(tag, className, text) {
    var el = D.createElement(tag);
    if (className) el.className = className;
    if (typeof text === "string") el.textContent = text;
    return el;
  }

  function renderMcq() {
    clearNode(root);
    MCQ.forEach(function (item, qIdx) {
      var article = mk("article", "q");
      var stem = mk("p", "stem");
      var strong = mk("strong", "", String(qIdx + 1) + ".");
      stem.appendChild(strong);
      stem.appendChild(D.createTextNode(" " + item.q));
      article.appendChild(stem);

      var ul = mk("ul", "opts");
      KEYS.forEach(function (k) {
        var id = "q" + qIdx + k;
        var li = mk("li", "opt-line");
        li.dataset.q = String(qIdx);
        li.dataset.k = k;

        var input = D.createElement("input");
        input.type = "radio";
        input.name = "q" + qIdx;
        input.value = k;
        input.id = id;
        input.addEventListener("change", function () {
          clearMcqMarks();
          fb.textContent = "";
        });

        var label = D.createElement("label");
        label.setAttribute("for", id);
        var letter = mk("span", "letter", k);
        label.appendChild(letter);
        label.appendChild(D.createTextNode(" " + item.options[k]));

        li.appendChild(input);
        li.appendChild(label);
        ul.appendChild(li);
      });
      article.appendChild(ul);
      root.appendChild(article);
    });
  }

  function clearMcqMarks() {
    root.querySelectorAll(".opt-line").forEach(function (line) {
      line.classList.remove("ok", "bad-pick");
    });
  }

  function getChoice(i) {
    var el = root.querySelector('input[name="q' + i + '"]:checked');
    return el ? el.value : "";
  }

  renderMcq();

  D.getElementById("btnCheck").addEventListener("click", function () {
    clearMcqMarks();
    var missing = false;
    for (var i = 0; i < MCQ.length; i++) {
      if (!getChoice(i)) {
        missing = true;
        break;
      }
    }
    if (missing) {
      fb.textContent = "Choose A, B, C or D for every question, then check again.";
      return;
    }
    var score = 0;
    for (var j = 0; j < MCQ.length; j++) {
      var pick = getChoice(j);
      var ok = pick === CORRECT[j];
      if (ok) score++;
      var line = root.querySelector('.opt-line[data-q="' + j + '"][data-k="' + pick + '"]');
      if (line) line.classList.add(ok ? "ok" : "bad-pick");
      var correctLine = root.querySelector('.opt-line[data-q="' + j + '"][data-k="' + CORRECT[j] + '"]');
      if (correctLine && !ok) correctLine.classList.add("ok");
    }
    fb.textContent =
      score === MCQ.length
        ? "All " + MCQ.length + " correct."
        : "Score: " + score + " / " + MCQ.length + ". Green = correct option; your wrong pick is outlined in red.";
  });

  D.getElementById("btnClear").addEventListener("click", function () {
    root.querySelectorAll('input[type="radio"]').forEach(function (r) {
      r.checked = false;
    });
    clearMcqMarks();
    fb.textContent = "";
  });

  // Hunt state
  var huntQ = 0;
  var huntBrush = "e";
  var huntMarks = HUNTS.map(function (q) {
    return q.chunks.map(function () {
      return "";
    });
  });
  var huntTabs = D.getElementById("huntTabs");
  var huntPrompt = D.getElementById("huntPrompt");
  var huntList = D.getElementById("huntList");
  var huntFeedback = D.getElementById("huntFeedback");
  var huntExplain = D.getElementById("huntExplain");
  var huntExplainList = D.getElementById("huntExplainList");

  function setBrush(next) {
    huntBrush = next;
    D.getElementById("huntBrushE").classList.toggle("active", next === "e");
    D.getElementById("huntBrushD").classList.toggle("active", next === "d");
    D.getElementById("huntBrushX").classList.toggle("active", next === "x");
  }

  function renderTabs() {
    clearNode(huntTabs);
    HUNTS.forEach(function (_, i) {
      var tab = mk("button", "hunt-tab" + (i === huntQ ? " active" : ""), "Q" + (i + 1));
      tab.type = "button";
      tab.dataset.q = String(i);
      tab.addEventListener("click", function () {
        huntQ = Number(tab.dataset.q);
        huntFeedback.textContent = "";
        huntExplain.hidden = true;
        renderTabs();
        renderHunt();
      });
      huntTabs.appendChild(tab);
    });
  }

  function renderHunt() {
    var q = HUNTS[huntQ];
    huntPrompt.textContent = q.prompt;
    clearNode(huntList);
    q.chunks.forEach(function (chunk, i) {
      var mark = huntMarks[huntQ][i];
      var cls = "hunt-hit";
      if (mark === "e") cls += " is-evidence";
      else if (mark === "d") cls += " is-distractor";
      var li = D.createElement("li");
      var btn = mk("button", cls, chunk.text);
      btn.type = "button";
      btn.dataset.i = String(i);
      btn.addEventListener("click", function () {
        var idx = Number(btn.dataset.i);
        btn.classList.remove("hunt-bad");
        if (huntBrush === "x") huntMarks[huntQ][idx] = "";
        else huntMarks[huntQ][idx] = huntBrush;
        huntFeedback.textContent = "";
        huntExplain.hidden = true;
        renderHunt();
      });
      li.appendChild(btn);
      huntList.appendChild(li);
    });
  }

  function showExplain(qi) {
    var q = HUNTS[qi];
    clearNode(huntExplainList);
    q.chunks.forEach(function (chunk) {
      var label = chunk.sol === "e" ? "Evidence" : "Distractor";
      var cls = chunk.sol === "e" ? "e" : "d";
      var li = D.createElement("li");
      var labelSpan = mk("span", "hunt-label " + cls, label);
      var whySpan = mk("span", "", chunk.why);
      whySpan.style.color = "#9ec2e8";
      li.appendChild(labelSpan);
      li.appendChild(D.createTextNode(chunk.text));
      li.appendChild(D.createElement("br"));
      li.appendChild(whySpan);
      huntExplainList.appendChild(li);
    });
    huntExplain.hidden = false;
  }

  function checkHunt() {
    var q = HUNTS[huntQ];
    var marks = huntMarks[huntQ];
    var bad = 0;
    var missing = 0;
    huntList.querySelectorAll(".hunt-hit").forEach(function (btn) {
      btn.classList.remove("hunt-bad");
    });
    for (var i = 0; i < q.chunks.length; i++) {
      var got = marks[i];
      var want = q.chunks[i].sol;
      if (!got) {
        missing++;
        bad++;
        var missEl = huntList.querySelector('.hunt-hit[data-i="' + i + '"]');
        if (missEl) missEl.classList.add("hunt-bad");
        continue;
      }
      if (got !== want) {
        bad++;
        var badEl = huntList.querySelector('.hunt-hit[data-i="' + i + '"]');
        if (badEl) badEl.classList.add("hunt-bad");
      }
    }
    if (!bad) {
      huntFeedback.textContent = "Perfect marking. Evidence and distractors are correctly sorted.";
      showExplain(huntQ);
    } else {
      huntExplain.hidden = true;
      huntFeedback.textContent =
        "Not yet: " + bad + " issue(s), including " + missing + " unmarked fragment(s). Yellow outline shows what to revisit.";
    }
  }

  function clearHuntQuestion() {
    huntMarks[huntQ] = huntMarks[huntQ].map(function () {
      return "";
    });
    huntFeedback.textContent = "";
    huntExplain.hidden = true;
    renderHunt();
  }

  D.getElementById("huntBrushE").addEventListener("click", function () { setBrush("e"); });
  D.getElementById("huntBrushD").addEventListener("click", function () { setBrush("d"); });
  D.getElementById("huntBrushX").addEventListener("click", function () { setBrush("x"); });
  D.getElementById("huntCheck").addEventListener("click", checkHunt);
  D.getElementById("huntClear").addEventListener("click", clearHuntQuestion);

  renderTabs();
  renderHunt();
})(window, document);
