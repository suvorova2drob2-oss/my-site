/**
 * ЕГЭ Lexis Exam (§30–36): multiple-choice cloze в формате бланка.
 */
(function () {
  var root = document.getElementById("ege-lx-app");
  if (!root) return;

  var pack = window.__EGE_LEXIS_EXAM__;
  var units = pack && pack.units;
  if (!units || !units.length) {
    root.innerHTML =
      '<p class="ege-gx-error">Задание не загрузилось. Обновите страницу (F5).</p>';
    return;
  }

  units.sort(function (a, b) {
    return (a.unitOrder || 0) - (b.unitOrder || 0);
  });

  var params = new URLSearchParams(location.search);
  var wantId = params.get("unit");
  var unitIndex = 0;
  if (wantId) {
    for (var u = 0; u < units.length; u++) {
      if (units[u].id === wantId) {
        unitIndex = u;
        break;
      }
    }
  }

  var U = units[unitIndex];
  var LETTERS_U = ["A", "B", "C", "D"];
  var checked = false;
  var msgEl = null;
  var timerEl = null;
  var timerIntervalId = null;
  var timerRemainingSec = 0;
  var cheerEl = null;
  var mcLayout = null;
  var mcResizer = null;
  var mqMcNarrow = window.matchMedia("(max-width: 880px)");
  var mcDragging = false;
  var SPLIT_KEY = "ege-lx-exam-opts-pct";

  var state = {
    names: [],
    blocks: [],
    studentOptionOrder: [],
    nQuestions: 0
  };

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function questionNumsFromPassage(passage) {
    var nums = [];
    var re = /\[\[(\d+)\]\]/g;
    var m;
    while ((m = re.exec(String(passage || ""))) !== null) {
      var n = parseInt(m[1], 10);
      if (isFinite(n) && n > 0) nums.push(n);
    }
    return nums.sort(function (a, b) {
      return a - b;
    });
  }

  function questionNumsInDocumentOrder(passage) {
    var nums = [];
    var re = /\[\[(\d+)\]\]/g;
    var m;
    while ((m = re.exec(String(passage || ""))) !== null) {
      var n = parseInt(m[1], 10);
      if (isFinite(n) && n > 0) nums.push(n);
    }
    return nums;
  }

  function passageToHtml(passage) {
    passage = String(passage || "");
    function replaceGapToken(num) {
      return "<strong>(" + parseInt(num, 10) + ")</strong>";
    }
    var parts = passage.split(/(\[\[\d+\]\])/g);
    var htmlParts = parts.map(function (chunk) {
      var mm = chunk.match(/^\[\[(\d+)\]\]$/);
      if (mm) return replaceGapToken(mm[1]);
      return esc(chunk).replace(/\r\n/g, "\n").replace(/\n/g, "<br/>");
    });
    var merged = htmlParts.join("");
    var paras = merged.split(/(?:<br\/>\s*){2,}/);
    var inner = paras
      .map(function (p) {
        var t = p.trim();
        if (!t) return "";
        return "<p>" + t + "</p>";
      })
      .join("");
    return inner || "<p>" + merged + "</p>";
  }

  function shuffleIntArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  function displayLetterForSlot(qIndex, slotIndex) {
    var order = state.studentOptionOrder[qIndex];
    var si = Number(slotIndex) || 0;
    if (order && order.length) {
      for (var v = 0; v < order.length; v++) {
        if (order[v] === si) return LETTERS_U[v];
      }
    }
    var k = 0;
    var it = U.items[qIndex];
    if (!it) return LETTERS_U[Math.min(si, 3)];
    for (var j = 0; j < 4; j++) {
      if (!String(it.options[j] || "").trim()) continue;
      if (j === si) return LETTERS_U[k];
      k++;
    }
    return LETTERS_U[Math.min(si, 3)];
  }

  function lookupExplainChosen(obj, pick) {
    if (!obj || pick == null || pick === "") return "";
    var v = obj[String(pick)];
    return v != null && String(v).trim() ? String(v).trim() : "";
  }

  function optionWordAtSlot(item, slotIndex) {
    var si = Number(slotIndex);
    if (!isFinite(si) || si < 0 || si > 3) return "";
    return String(item.options[si] || "").trim();
  }

  function clearInlineReview() {
    root.querySelectorAll(".ege-lx-gap-tip").forEach(function (n) {
      n.remove();
    });
    state.blocks.forEach(function (block) {
      block.classList.remove("gap-block--review-wrong", "gap-block--review-ok");
    });
    var panel = root.querySelector("#ege-lx-review");
    if (panel) panel.remove();
  }

  function buildGapMainHtml(item, qIndex, pick) {
    var correct = String(Number(item.correctIndex) || 0);
    var Lc = displayLetterForSlot(qIndex, correct);
    var Lp = pick ? displayLetterForSlot(qIndex, pick) : "?";
    var correctWord = optionWordAtSlot(item, correct);
    var pickWord = pick ? optionWordAtSlot(item, pick) : "";
    var ec = item.explainCorrect || "";
    var pickNote = lookupExplainChosen(item.explainIfChosen, pick);
    var html = "";

    html += '<div class="ege-lx-gap-tip-main">';
    html +=
      '<p class="ege-lx-gap-tip-heading"><span class="ege-lx-gap-tip-label">Разбор</span></p>';

    if (ec) {
      html += '<p class="ege-lx-gap-line">';
      html +=
        '<span class="ege-lx-gap-k ege-lx-gap-k--ok">Верно · ' +
        esc(Lc) +
        "</span> ";
      if (correctWord) html += "<em>" + esc(correctWord) + "</em> — ";
      html += ec;
      html += "</p>";
    }

    if (pick && pick !== correct) {
      html += '<p class="ege-lx-gap-line">';
      html +=
        '<span class="ege-lx-gap-k ege-lx-gap-k--bad">Не ' +
        esc(Lp) +
        "</span> ";
      if (pickWord) html += "<em>" + esc(pickWord) + "</em> — ";
      html +=
        pickNote ||
        item.trapRu ||
        "По смыслу или коллокации здесь не подходит.";
      html += "</p>";
    }

    html += "</div>";
    return html;
  }

  function buildGapAnalysisHtml(item, qIndex, pick) {
    var correct = String(Number(item.correctIndex) || 0);
    var Lc = displayLetterForSlot(qIndex, correct);
    var Lp = pick ? displayLetterForSlot(qIndex, pick) : "?";
    var correctWord = optionWordAtSlot(item, correct);
    var pickWord = pick ? optionWordAtSlot(item, pick) : "";
    var skill = item.skillRu || "";
    var ec = item.explainCorrect || "";
    var trap = item.trapRu || "";
    var pickNote = lookupExplainChosen(item.explainIfChosen, pick);
    var eic = item.explainIfChosen || {};
    var html = "";
    var sj;

    html += '<div class="ege-lx-gap-tip-inner">';

    if (trap) {
      html += '<p class="ege-lx-gap-line">';
      html += '<span class="ege-lx-gap-k ege-lx-gap-k--trap">Ловушка</span> ';
      html += trap;
      html += "</p>";
    }

    if (skill) {
      html += '<p class="ege-lx-gap-line">';
      html += '<span class="ege-lx-gap-k">Что проверяют</span> ';
      html += skill;
      html += "</p>";
    }

    if (ec) {
      html += '<p class="ege-lx-gap-line">';
      html +=
        '<span class="ege-lx-gap-k ege-lx-gap-k--ok">Подходит только ' +
        esc(Lc) +
        "</span> ";
      if (correctWord) html += "<em>" + esc(correctWord) + "</em> — ";
      html += ec;
      html += "</p>";
    }

    if (pick && pick !== correct) {
      html += '<p class="ege-lx-gap-line">';
      html +=
        '<span class="ege-lx-gap-k ege-lx-gap-k--bad">Не ' +
        esc(Lp) +
        "</span> ";
      if (pickWord) html += "<em>" + esc(pickWord) + "</em> — ";
      html += pickNote || "По смыслу или грамматике здесь не подходит.";
      html += "</p>";
    }

    for (sj = 0; sj < 4; sj++) {
      var sk = String(sj);
      if (sk === correct || sk === pick) continue;
      var note = lookupExplainChosen(eic, sk);
      if (!note) continue;
      var Ld = displayLetterForSlot(qIndex, sj);
      var dw = optionWordAtSlot(item, sj);
      html += '<p class="ege-lx-gap-line ege-lx-gap-line--muted">';
      html += '<span class="ege-lx-gap-k">Не ' + esc(Ld) + "</span> ";
      if (dw) html += "<em>" + esc(dw) + "</em> — ";
      html += note;
      html += "</p>";
    }

    html += "</div>";
    return html;
  }

  function appendGapTip(block, item, qIndex, pick) {
    if (!block || !item) return;
    var mainHtml = buildGapMainHtml(item, qIndex, pick);
    var fullHtml = buildGapAnalysisHtml(item, qIndex, pick);

    var tip = document.createElement("div");
    tip.className = "ege-lx-gap-tip";
    tip.innerHTML =
      mainHtml +
      '<details class="ege-lx-gap-tip-details">' +
      '<summary class="ege-lx-gap-tip-toggle">Полный разбор · развернуть ↓</summary>' +
      fullHtml +
      "</details>";

    var details = tip.querySelector(".ege-lx-gap-tip-details");
    var summary = tip.querySelector(".ege-lx-gap-tip-toggle");
    if (details && summary) {
      details.addEventListener("toggle", function () {
        summary.textContent = details.open
          ? "Полный разбор · свернуть"
          : "Полный разбор · развернуть ↓";
      });
    }

    block.appendChild(tip);
  }

  function renderInlineReview(picks, score, total) {
    clearInlineReview();

    var docNums = questionNumsInDocumentOrder(U.passage || "");
    var firstWrongBlock = null;
    var i;

    for (i = 0; i < (U.items || []).length; i++) {
      var item = U.items[i];
      var userPick = picks[i];
      var key = String(Number(item.correctIndex) || 0);
      var gapN = docNums[i] != null ? docNums[i] : i + 1;
      var block = state.blocks[i];
      if (!block) continue;

      if (userPick === key) {
        block.classList.add("gap-block--review-ok");
        continue;
      }

      block.classList.add("gap-block--review-wrong");
      if (!firstWrongBlock) firstWrongBlock = block;
      appendGapTip(block, item, i, userPick);
    }

    if (firstWrongBlock) {
      try {
        firstWrongBlock.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch (eScroll) {
        firstWrongBlock.scrollIntoView();
      }
    }
  }

  function exerciseData() {
    return {
      title: U.headerTitle || U.title,
      subtitle: U.subtitle || "",
      passage: U.passage,
      items: U.items
    };
  }

  function allRadios() {
    return [].slice.call(root.querySelectorAll('.ege-lx-mc input[type="radio"]'));
  }

  function cheerCounts() {
    var filled = 0;
    var i;
    for (i = 0; i < state.names.length; i++) {
      if (getChoice(i)) filled++;
    }
    return { filled: filled, total: state.nQuestions };
  }

  function refreshCheer(opts) {
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !cheerEl) return;
    opts = opts || {};
    var c = cheerCounts();
    ch.update(
      cheerEl,
      {
        phase: opts.phase || (checked ? "checked" : "working"),
        filled: c.filled,
        total: c.total,
        percent: opts.percent
      },
      { force: !!(opts && opts.force) }
    );
  }

  function mountCheerRail() {
    cheerEl = null;
    var wrap = root.querySelector(".ege-gx-wrap");
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !wrap) return;
    var old = wrap.querySelector("#ege-gx-cheer");
    if (old) old.remove();
    cheerEl = ch.mount(wrap);
    ch.update(
      cheerEl,
      { phase: "welcome", filled: 0, total: state.nQuestions || 0 },
      { force: true }
    );
  }

  function isLiveStudent() {
    return !!(
      window.EgeLiveRoom &&
      typeof window.EgeLiveRoom.isLiveStudent === "function" &&
      window.EgeLiveRoom.isLiveStudent()
    );
  }

  function buildLiveItems() {
    var n = state.nQuestions;
    var items = [];
    var ok = 0;
    var filledN = 0;
    var i;
    var v;
    var isFilled;
    var exp;
    var isOk;
    for (i = 0; i < n; i++) {
      v = getChoice(i);
      isFilled = !!v;
      exp = String(Number((U.items[i] || {}).correctIndex) || 0);
      isOk = isFilled && v === exp;
      if (isFilled) filledN++;
      if (isOk) ok++;
      items.push({
        id: String(30 + i),
        label: "№" + (30 + i),
        correct: isOk,
        answer: v,
        expected: exp,
        filled: isFilled
      });
    }
    return {
      items: items,
      correct: ok,
      filled: filledN,
      total: n,
      score: n ? Math.round((ok / n) * 100) : 0
    };
  }

  function pushLiveDraft() {
    if (!isLiveStudent() || checked) return;
    var pk = buildLiveItems();
    window.EgeLiveRoom.notifyProgress({
      draft: true,
      score: pk.score,
      correct: pk.correct,
      total: pk.total,
      items: pk.items
    });
  }

  function unitTimerSec() {
    var def =
      pack.defaultTimerSec != null && pack.defaultTimerSec > 0
        ? Math.floor(pack.defaultTimerSec)
        : 12 * 60;
    if (U && U.timerSec != null && U.timerSec > 0) {
      return Math.floor(U.timerSec);
    }
    return def;
  }

  function stopExamTimer() {
    if (timerIntervalId) {
      clearInterval(timerIntervalId);
      timerIntervalId = null;
    }
  }

  function formatExamTimer(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function updateExamTimerDisplay() {
    if (!timerEl) return;
    timerEl.textContent = formatExamTimer(timerRemainingSec);
    timerEl.classList.toggle(
      "ege-gx-timer--warn",
      timerRemainingSec > 0 && timerRemainingSec <= 120
    );
    timerEl.classList.toggle(
      "ege-gx-timer--critical",
      timerRemainingSec > 0 && timerRemainingSec <= 30
    );
    timerEl.classList.toggle("ege-gx-timer--expired", timerRemainingSec <= 0);
  }

  function tickExamTimer() {
    if (timerRemainingSec <= 0) return;
    timerRemainingSec--;
    updateExamTimerDisplay();
    if (timerRemainingSec <= 0 && msgEl && !checked) {
      msgEl.textContent =
        "Время вышло — можно всё равно отправить ответ на проверку.";
      msgEl.className = "ege-gx-msg is-warn";
    }
  }

  function startExamTimer() {
    stopExamTimer();
    timerRemainingSec = unitTimerSec();
    updateExamTimerDisplay();
    timerIntervalId = setInterval(tickExamTimer, 1000);
  }

  function storageKey() {
    return "ege_lx_" + U.id + "_draft_v1";
  }

  function saveDraft() {
    if (checked) return;
    var map = {};
    state.names.forEach(function (nm, i) {
      var sel = root.querySelector(
        'input[name="' + nm + '"]:checked'
      );
      if (sel) map[String(i)] = sel.value;
    });
    try {
      sessionStorage.setItem(storageKey(), JSON.stringify(map));
    } catch (e1) {}
    refreshCheer({ phase: "working" });
  }

  function restoreDraft() {
    var raw;
    try {
      raw = sessionStorage.getItem(storageKey());
    } catch (e2) {
      return;
    }
    if (!raw) return;
    var map;
    try {
      map = JSON.parse(raw);
    } catch (e3) {
      return;
    }
    if (!map || typeof map !== "object") return;
    state.names.forEach(function (nm, i) {
      var v = map[String(i)];
      if (v == null) return;
      var radio = root.querySelector(
        'input[name="' + nm + '"][value="' + v + '"]'
      );
      if (radio) radio.checked = true;
    });
    updateProgress();
  }

  function getChoice(qIndex) {
    var nm = state.names[qIndex];
    if (!nm) return "";
    var sel = root.querySelector('input[name="' + nm + '"]:checked');
    return sel ? sel.value : "";
  }

  function updateProgress() {
    var bar = root.querySelector("#ege-lx-progress");
    if (!bar) return;
    var filled = 0;
    var i;
    for (i = 0; i < state.nQuestions; i++) {
      if (getChoice(i)) filled++;
    }
    bar.textContent = filled + " / " + state.nQuestions + " выбрано";
    bar.classList.toggle(
      "ege-gx-progress--full",
      filled === state.nQuestions && state.nQuestions > 0
    );
    if (!checked) refreshCheer({ phase: "working" });
  }

  function renderExerciseLayout() {
    var data = exerciseData();
    var passageEl = root.querySelector("#ege-lx-passage");
    var optsCol = root.querySelector("#ege-lx-opts");
    var titleEl = root.querySelector("#ege-lx-title");
    if (!passageEl || !optsCol) return;

    if (titleEl) titleEl.textContent = data.title || "";
    passageEl.innerHTML = passageToHtml(data.passage);
    optsCol.innerHTML = "";

    state.names = [];
    state.blocks = [];
    state.studentOptionOrder = [];

    var n = (data.items || []).length;
    var docNums = questionNumsInDocumentOrder(data.passage);
    var prefix = "ege_lx_" + U.id.replace(/[^\w-]/g, "_");

    var i;
    for (i = 0; i < n; i++) {
      var gapLabel = docNums[i] != null ? docNums[i] : i + 1;
      var nm = prefix + "_" + (i + 1);
      state.names.push(nm);

      var block = document.createElement("div");
      block.className = "gap-block";
      block.id = "q" + gapLabel;
      block.setAttribute("data-q", String(gapLabel));

      var head = document.createElement("div");
      head.className = "gap-num";
      head.textContent = String(gapLabel);

      var rg = document.createElement("div");
      rg.className = "choices";
      rg.setAttribute("role", "radiogroup");
      rg.setAttribute("aria-label", "Вопрос " + gapLabel);

      var it = data.items[i];
      var filled = [];
      var j0;
      for (j0 = 0; j0 < 4; j0++) {
        if (String(it.options[j0] || "").trim()) filled.push(j0);
      }
      var order = filled.slice();
      if (order.length > 1) shuffleIntArray(order);
      state.studentOptionOrder.push(order.slice());

      var vis = 0;
      var si;
      for (si = 0; si < order.length; si++) {
        var j = order[si];
        var optText = String(it.options[j] || "").trim();
        if (!optText) continue;
        var lab = document.createElement("label");
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = nm;
        radio.value = String(j);
        radio.addEventListener("change", function () {
          if (checked) clearCheckMarks();
          checked = false;
          if (msgEl) {
            msgEl.textContent = "";
            msgEl.className = "ege-gx-msg";
          }
          saveDraft();
          updateProgress();
          pushLiveDraft();
        });
        lab.appendChild(radio);
        lab.appendChild(
          document.createTextNode(" " + LETTERS_U[vis] + " " + optText)
        );
        rg.appendChild(lab);
        vis++;
      }

      block.appendChild(head);
      block.appendChild(rg);
      optsCol.appendChild(block);
      state.blocks.push(block);
    }

    state.nQuestions = state.names.length;
  }

  function clearLabelMarks(block) {
    block.querySelectorAll("label").forEach(function (lab) {
      lab.classList.remove("is-correct-key", "is-pick-ok", "is-pick-bad");
    });
  }

  function clearCheckMarks() {
    clearInlineReview();
    state.blocks.forEach(clearLabelMarks);
    var fb = root.querySelector("#ege-lx-feedback");
    if (fb) {
      fb.className = "feedback";
      fb.textContent = "";
    }
  }

  function applyMarksForQuestion(index) {
    var it = U.items[index];
    var correct = String(Number(it.correctIndex) || 0);
    var block = state.blocks[index];
    clearLabelMarks(block);
    block.querySelectorAll('input[type="radio"]').forEach(function (radio) {
      var lab = radio.closest("label");
      var v = radio.value;
      if (v === correct) lab.classList.add("is-correct-key");
      if (radio.checked) {
        if (v === correct) lab.classList.add("is-pick-ok");
        else lab.classList.add("is-pick-bad");
      }
    });
  }

  function applyMcOptsPct(pct) {
    if (!mcLayout) return;
    var n = Math.round(Number(pct));
    if (!isFinite(n)) return;
    n = Math.max(24, Math.min(46, n));
    mcLayout.style.setProperty("--mc-opts", n + "%");
  }

  function readMcOptsPct() {
    if (!mcLayout) return 36;
    var cs = getComputedStyle(mcLayout).getPropertyValue("--mc-opts").trim();
    var m = cs.match(/^([\d.]+)%/);
    return m ? parseFloat(m[1], 10) : 36;
  }

  function wireMcResizer() {
    mcLayout = root.querySelector("#ege-lx-mc-layout");
    mcResizer = root.querySelector("#ege-lx-mc-resizer");
    if (!mcLayout || !mcResizer) return;

    try {
      var savedSplit = localStorage.getItem(SPLIT_KEY);
      if (savedSplit) applyMcOptsPct(savedSplit);
    } catch (eSplit) {}

    function mcCanDrag() {
      return !mqMcNarrow.matches;
    }

    function mcSplitFromClientX(clientX) {
      var rect = mcLayout.getBoundingClientRect();
      var w = rect.width;
      if (w < 1) return;
      var pct = ((rect.right - clientX) / w) * 100;
      applyMcOptsPct(pct);
    }

    function onMcDragEnd() {
      if (!mcDragging) return;
      mcDragging = false;
      mcResizer.classList.remove("is-dragging");
      document.body.style.cursor = "";
      try {
        localStorage.setItem(SPLIT_KEY, String(Math.round(readMcOptsPct())));
      } catch (e2) {}
    }

    mcResizer.addEventListener("mousedown", function (e) {
      if (e.button !== 0 || !mcCanDrag()) return;
      e.preventDefault();
      mcDragging = true;
      mcResizer.classList.add("is-dragging");
      document.body.style.cursor = "col-resize";
    });

    document.addEventListener("mousemove", function (e) {
      if (!mcDragging) return;
      e.preventDefault();
      mcSplitFromClientX(e.clientX);
    });

    document.addEventListener("mouseup", onMcDragEnd);

    mcResizer.addEventListener(
      "touchstart",
      function (e) {
        if (!mcCanDrag()) return;
        if (e.touches.length !== 1) return;
        mcDragging = true;
        mcResizer.classList.add("is-dragging");
      },
      { passive: true }
    );

    document.addEventListener(
      "touchmove",
      function (e) {
        if (!mcDragging) return;
        e.preventDefault();
        mcSplitFromClientX(e.touches[0].clientX);
      },
      { passive: false }
    );

    document.addEventListener("touchend", onMcDragEnd);
    document.addEventListener("touchcancel", onMcDragEnd);

    mcResizer.addEventListener("keydown", function (e) {
      if (!mcCanDrag()) return;
      var step = e.shiftKey ? 5 : 2;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        applyMcOptsPct(readMcOptsPct() - step);
        try {
          localStorage.setItem(SPLIT_KEY, String(Math.round(readMcOptsPct())));
        } catch (e3) {}
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        applyMcOptsPct(readMcOptsPct() + step);
        try {
          localStorage.setItem(SPLIT_KEY, String(Math.round(readMcOptsPct())));
        } catch (e4) {}
      }
    });
  }

  function onCheck() {
    var n = state.nQuestions;
    if (!n) return;
    var missing = false;
    var i;
    for (i = 0; i < n; i++) {
      if (!getChoice(i)) {
        missing = true;
        break;
      }
    }
    if (missing) {
      if (msgEl) {
        msgEl.className = "ege-gx-msg is-warn";
        msgEl.textContent =
          "Отметьте вариант по каждому пропуску, затем нажмите «Отправить на проверку».";
      }
      return;
    }

    var score = 0;
    var picks = [];
    for (i = 0; i < n; i++) {
      picks.push(getChoice(i));
      var correct = String(Number(U.items[i].correctIndex) || 0);
      applyMarksForQuestion(i);
      if (picks[i] === correct) score++;
    }

    checked = true;
    var fb = root.querySelector("#ege-lx-feedback");
    var pct = Math.round((score / n) * 100);

    refreshCheer({ phase: "checked", percent: pct, force: true });

    if (fb) {
      fb.className = "feedback";
      fb.textContent = "";
    }

    if (score === n) {
      if (msgEl) {
        msgEl.className = "ege-gx-msg is-ok";
        msgEl.textContent = "Зачёт — все пропуски верны.";
      }
    } else {
      if (msgEl) {
        msgEl.className = "ege-gx-msg is-warn";
        msgEl.textContent =
          "Итог: " + score + " из " + n + " (" + pct + "%). Разбор — под каждым неверным пропуском справа.";
      }
    }

    renderInlineReview(picks, score, n);

    var lxBr = window.__egeLexisExamStats;
    if (lxBr && typeof lxBr.recordAttempt === "function") {
      lxBr.recordAttempt(U.id, pct);
    }
    var lxSel = root.querySelector("#ege-lx-unit-select");
    if (
      lxSel &&
      window.__egeExamUnitPerfectMark &&
      typeof window.__egeExamUnitPerfectMark.paintUnitSelectPerfectMarks ===
        "function"
    ) {
      window.__egeExamUnitPerfectMark.paintUnitSelectPerfectMarks(
        lxSel,
        units,
        lxBr
      );
    }
    if (window.EgeLiveRoom && typeof window.EgeLiveRoom.notifyProgress === "function") {
      var livePack = buildLiveItems();
      window.EgeLiveRoom.notifyProgress({
        draft: false,
        score: pct,
        correct: score,
        total: n,
        items: livePack.items
      });
    }
  }

  function onReset() {
    checked = false;
    state.names.forEach(function (nm) {
      root.querySelectorAll('input[name="' + nm + '"]').forEach(function (r) {
        r.checked = false;
      });
    });
    clearCheckMarks();
    try {
      sessionStorage.removeItem(storageKey());
    } catch (eRm) {}
    if (msgEl) {
      msgEl.textContent = "";
      msgEl.className = "ege-gx-msg";
    }
    updateProgress();
    refreshCheer({ phase: "working", force: true });
    pushLiveDraft();
  }

  function goToUnitIndex(ix, opts) {
    if (ix < 0 || ix >= units.length) return;
    unitIndex = ix;
    try {
      var url = new URL(location.href);
      url.searchParams.set("unit", units[unitIndex].id);
      history.replaceState({}, "", url.toString());
    } catch (eNav) {}
    mountUnit();
    if (opts && opts.scrollTop) {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (eScroll) {
        window.scrollTo(0, 0);
      }
    }
  }

  function mountUnit() {
    stopExamTimer();
    checked = false;
    U = units[unitIndex];

    var html = "";
    html += '<div class="ege-gx-wrap">';

    html += '<div class="ege-gx-toolbar">';
    html += '<label><span>Тема</span> ';
    html += '<select id="ege-lx-unit-select" class="ege-gx-select">';
    var ui;
    var lxStats = window.__egeLexisExamStats;
    var lxPerfect = window.__egeExamUnitPerfectMark;
    for (ui = 0; ui < units.length; ui++) {
      html +=
        '<option value="' +
        esc(units[ui].id) +
        '"' +
        (ui === unitIndex ? " selected" : "") +
        (lxPerfect && lxPerfect.optionPerfectClassAttr
          ? lxPerfect.optionPerfectClassAttr(lxStats, units[ui].id)
          : "") +
        ">" +
        esc(units[ui].title) +
        "</option>";
    }
    html += "</select></label>";
    html +=
      '<div class="ege-gx-timer-wrap" role="timer" aria-live="polite" aria-atomic="true">' +
      '<span class="ege-gx-timer-label">Осталось</span>' +
      '<span id="ege-lx-timer" class="ege-gx-timer">00:00</span>' +
      "</div>";
    html += "</div>";

    if (U.examSection) {
      html +=
        '<p class="ege-gx-kicker">Lexis Exam · ' + esc(U.examSection) + "</p>";
    }
    html += '<h2 class="ege-gx-page-title">' + esc(U.title) + "</h2>";
    html +=
      '<p class="ege-gx-vibe"><strong>Как в бланке:</strong> слева — текст с номерами пропусков, справа — варианты A–D для каждого номера. Можно потянуть разделитель ↔ между колонками.</p>';
    html += '<p class="ege-gx-ins">' + U.instructionHtml + "</p>";
    if (U.subtitle) {
      html += '<p class="ege-lx-subtitle">' + esc(U.subtitle) + "</p>";
    }
    html +=
      '<p class="ege-gx-progress" id="ege-lx-progress" aria-live="polite">0 / 0 выбрано</p>';
    html += '<p class="ege-gx-msg" id="ege-lx-msg" aria-live="polite"></p>';

    html += '<div class="part1-mc-page ege-lx-mc part1-mc-cpe-theme">';
    html +=
      '<div class="mc-layout" id="ege-lx-mc-layout" style="--mc-opts: 36%">';
    html += '<div class="mc-text-col">';
    html += '<h3 class="title-text" id="ege-lx-title"></h3>';
    html += '<div class="passage" id="ege-lx-passage"></div>';
    html += "</div>";
    html +=
      '<div class="mc-resizer" id="ege-lx-mc-resizer" role="separator" aria-orientation="vertical" aria-label="Разделитель колонок" tabindex="0"></div>';
    html += '<div class="mc-opts-col" id="ege-lx-opts"></div>';
    html += "</div>";

    html += '<div class="btn-row">';
    html +=
      '<button type="button" id="ege-lx-check" class="btn-check">Отправить на проверку</button>';
    html +=
      '<button type="button" id="ege-lx-reset" class="btn-reset">Сбросить</button>';
    html += "</div>";
    html += '<div id="ege-lx-feedback" class="feedback"></div>';
    html += "</div>";

    html += "</div>";

    root.innerHTML = html;

    msgEl = root.querySelector("#ege-lx-msg");
    timerEl = root.querySelector("#ege-lx-timer");

    renderExerciseLayout();
    wireMcResizer();
    mountCheerRail();
    restoreDraft();
    updateProgress();
    startExamTimer();

    var sel = root.querySelector("#ege-lx-unit-select");
    if (sel) {
      sel.addEventListener("change", function () {
        var next = sel.value;
        for (var ix = 0; ix < units.length; ix++) {
          if (units[ix].id === next) {
            goToUnitIndex(ix, { scrollTop: true });
            break;
          }
        }
      });
    }

    var btnCheck = root.querySelector("#ege-lx-check");
    var btnReset = root.querySelector("#ege-lx-reset");
    if (btnCheck) btnCheck.addEventListener("click", onCheck);
    if (btnReset) btnReset.addEventListener("click", onReset);
  }

  mountUnit();

  if (window.EgeLiveRoom && typeof window.EgeLiveRoom.mount === "function") {
    window.EgeLiveRoom.mount({
      deckPrefix: "ege-lexis-exam",
      getUnitId: function () {
        return U && U.id;
      },
      getUnitData: function () {
        return U
          ? {
              bankTitle: "Ключ (§30–36)",
              bankLines: (U.items || []).map(function (it, idx) {
                var ci = Number(it.correctIndex) || 0;
                return { id: 30 + idx, text: String(it.options[ci] || "") };
              })
            }
          : null;
      },
      onOpenHunt: function () {
        var fb = root.querySelector("#ege-lx-feedback");
        if (fb) fb.scrollIntoView({ behavior: "smooth", block: "start" });
      },
      onRestart: function () {
        var btn = root.querySelector("#ege-lx-reset");
        if (btn) btn.click();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
})();
