/**
 * Part 1 — Multiple-choice cloze (shared).
 * Configure before load: window.PART1_MC_BOOT = { contextId, dataSrc, backHref, backLabel, pageTitle, documentTitle }
 * Or URL: ?context=slug&src=relative/path/to/published.json&back=unit3.html&backLabel=...
 * Optional: &admin=1
 */
(function () {
  var boot = window.PART1_MC_BOOT || window.PART1_MC_CONFIG || {};
  var sp = new URLSearchParams(window.location.search);
  var contextId = String(boot.contextId || sp.get("context") || "default").trim() || "default";
  var dataSrc = String(boot.dataSrc || sp.get("src") || "").trim();
  var backHref = String(boot.backHref || sp.get("back") || "").trim();
  var backLabel = String(
    boot.backLabel || (sp.get("backLabel") ? decodeURIComponent(sp.get("backLabel")) : "") || "Назад"
  ).trim();
  var pageTitle = String(boot.pageTitle || sp.get("title") || "Part 1 — Multiple-choice cloze").trim();
  var docTitle = String(boot.documentTitle || boot.pageTitle || document.title || pageTitle).trim();

  var STORAGE_PUBLISH_KEY = "part1-mc-published-v1:" + contextId;
  var SPLIT_KEY = "part1-mc-opts-pct:" + contextId;
  var LEGACY_STORAGE = "unit12-part1-mc-published-v1";
  var LEGACY_SPLIT = "unit12-part1-mc-opts-pct";

  var LETTERS = ["a", "b", "c", "d"];
  var LETTERS_U = ["A", "B", "C", "D"];

  document.body.classList.add("part1-mc-body");
  document.title = docTitle;

  function parseDefaultJson() {
    var el = document.getElementById("part1-mc-default-data");
    if (!el) {
      return {
        title: "PART 1 — DEMO",
        subtitle: "Добавь [[1]] в текст и четыре варианта в админке (?admin=1).",
        passage: "Replace this demo with your text and a gap [[1]].\n\nSecond paragraph.",
        example: null,
        items: [{ options: ["option A", "option B", "option C", "option D"], correctIndex: 0 }]
      };
    }
    try {
      return JSON.parse(el.textContent.trim());
    } catch (e) {
      return {
        title: "Sample",
        subtitle: "",
        passage: "Text with [[1]] here.",
        example: null,
        items: [{ options: ["one", "two", "three", "four"], correctIndex: 0 }]
      };
    }
  }

  function deepClone(o) {
    return JSON.parse(JSON.stringify(o));
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function publishedFetchUrl() {
    if (dataSrc) {
      try {
        return new URL(dataSrc, window.location.href).href;
      } catch (e) {
        return new URL("published.json", window.location.href).href;
      }
    }
    return new URL("published.json", window.location.href).href;
  }

  function buildNavQuery(adminOn) {
    var p = new URLSearchParams(window.location.search);
    if (adminOn) p.set("admin", "1");
    else p.delete("admin");
    var q = p.toString();
    return window.location.pathname + (q ? "?" + q : "") + window.location.hash;
  }

  function wireNav() {
    var back = document.getElementById("part1McBack");
    if (back) {
      if (backHref) back.href = backHref;
      if (backLabel) back.textContent = backLabel;
    }
    var h1 = document.getElementById("part1McH1");
    if (h1) h1.textContent = pageTitle;

    var admStudent = document.getElementById("part1McAdminLink");
    var admBackStudent = document.getElementById("part1McStudentLink");
    if (admStudent) admStudent.href = buildNavQuery(true);
    if (admBackStudent) admBackStudent.href = buildNavQuery(false);
  }

  function extractGapNums(passage) {
    var re = /\[\[(\d+)\]\]/g;
    var m;
    var set = {};
    while ((m = re.exec(passage)) !== null) {
      set[m[1]] = true;
    }
    return Object.keys(set)
      .map(function (x) {
        return parseInt(x, 10);
      })
      .filter(function (n) {
        return isFinite(n) && n >= 0;
      })
      .sort(function (a, b) {
        return a - b;
      });
  }

  function questionNumsFromPassage(passage) {
    return extractGapNums(passage).filter(function (n) {
      return n > 0;
    });
  }

  function validateExercise(data) {
    var errs = [];
    if (!data.title || !String(data.title).trim()) errs.push("Нужен заголовок.");
    if (!data.passage || !String(data.passage).trim()) errs.push("Нужен текст с [[1]] …");
    var qnums = questionNumsFromPassage(data.passage);
    if (!qnums.length) errs.push("В тексте нет пропусков [[1]], [[2]], …");
    var maxq = qnums[qnums.length - 1];
    for (var i = 1; i <= maxq; i++) {
      if (qnums.indexOf(i) === -1) {
        errs.push("Пропуски должны идти подряд без дыр: есть [[1]]…[[" + maxq + "]], но нет [[" + i + "]].");
        break;
      }
    }
    if (data.passage.indexOf("[[0]]") !== -1) {
      if (!data.example || !data.example.letter || data.example.text == null || !String(data.example.text).trim()) {
        errs.push("Для [[0]] заполни букву и текст примера.");
      }
    }
    if (qnums.length && (!data.items || data.items.length !== qnums.length)) {
      errs.push("Число блоков ответов (" + (data.items ? data.items.length : 0) + ") должно совпадать с числом пропусков " + qnums.length + ".");
    }
    if (data.items) {
      data.items.forEach(function (it, idx) {
        if (!it.options || it.options.length !== 4) {
          errs.push("Вопрос " + (idx + 1) + ": нужно ровно 4 варианта.");
          return;
        }
        var ci = Number(it.correctIndex);
        if (!isFinite(ci) || ci < 0 || ci > 3) {
          errs.push("Вопрос " + (idx + 1) + ": верный ответ — A, B, C или D.");
        }
        it.options.forEach(function (op, j) {
          if (!String(op || "").trim()) errs.push("Вопрос " + (idx + 1) + ", вариант " + LETTERS_U[j] + ": пусто.");
        });
      });
    }
    return errs;
  }

  function passageToHtml(data) {
    var passage = String(data.passage || "");
    var ex = data.example || {};
    var exLetter = String(ex.letter || "C").trim().toUpperCase().slice(0, 1) || "C";
    var exText = String(ex.text || "").trim();

    function replaceGapToken(num) {
      var n = parseInt(num, 10);
      if (n === 0) {
        return (
          "<strong>(0)</strong> <span class=\"example-ans\">" +
          esc(exLetter) +
          " — " +
          esc(exText) +
          "</span>"
        );
      }
      return "<strong>(" + n + ")</strong>";
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

  function buildCorrectLetters(data) {
    return (data.items || []).map(function (it) {
      return LETTERS[Number(it.correctIndex) || 0];
    });
  }

  function buildRevealLines(data) {
    var lines = [];
    var row = [];
    (data.items || []).forEach(function (it, i) {
      var num = i + 1;
      var L = LETTERS_U[it.correctIndex] || "A";
      row.push(" " + num + " " + L + "    ");
      if (row.length === 4) {
        lines.push(row.join(""));
        row = [];
      }
    });
    if (row.length) lines.push(row.join(""));
    return lines.join("\n").trim();
  }

  var state = {
    exercise: parseDefaultJson(),
    names: [],
    blocks: [],
    nQuestions: 0
  };

  var isAdmin = /\badmin=1\b/.test(location.search);

  var elTitle = document.getElementById("elTitle");
  var elSubtitle = document.getElementById("elSubtitle");
  var elPassage = document.getElementById("elPassage");
  var mcOptsCol = document.getElementById("mcOptsCol");
  var btnCheck = document.getElementById("btnCheck");
  var btnReset = document.getElementById("btnReset");
  var feedback = document.getElementById("feedback");
  var answerRevealLayer = document.getElementById("answerRevealLayer");
  var answerRevealBody = document.getElementById("answerRevealBody");
  var answerRevealBtn = document.getElementById("answerRevealBtn");
  var mcLayout = document.getElementById("mcLayout");
  var mcResizer = document.getElementById("mcResizer");
  var mqMcNarrow = window.matchMedia("(max-width: 880px)");

  if (answerRevealLayer) document.body.appendChild(answerRevealLayer);

  if (isAdmin) {
    document.body.classList.add("is-admin");
  }

  wireNav();

  function renderStudent(data) {
    state.exercise = data;
    var errs = validateExercise(data);
    if (errs.length) {
      feedback.className = "feedback show err";
      feedback.textContent = errs.join(" ");
      return false;
    }
    feedback.className = "feedback";
    feedback.textContent = "";

    elTitle.textContent = data.title;
    elSubtitle.textContent = data.subtitle || "";
    elPassage.innerHTML = passageToHtml(data);

    mcOptsCol.innerHTML = "";
    state.names = [];
    state.blocks = [];
    var n = (data.items || []).length;
    state.nQuestions = n;
    for (var i = 0; i < n; i++) {
      var qnum = i + 1;
      var nm = "mc_" + contextId.replace(/[^\w-]/g, "_") + "_" + qnum;
      state.names.push(nm);
      var block = document.createElement("div");
      block.className = "gap-block";
      block.id = "q" + qnum;
      block.setAttribute("data-q", String(qnum));
      var head = document.createElement("div");
      head.className = "gap-num";
      head.textContent = String(qnum);
      var rg = document.createElement("div");
      rg.className = "choices";
      rg.setAttribute("role", "radiogroup");
      rg.setAttribute("aria-label", "Question " + qnum);
      var it = data.items[i];
      for (var j = 0; j < 4; j++) {
        var lab = document.createElement("label");
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = nm;
        radio.value = LETTERS[j];
        lab.appendChild(radio);
        lab.appendChild(document.createTextNode(" " + LETTERS_U[j] + " " + (it.options[j] || "")));
        rg.appendChild(lab);
      }
      block.appendChild(head);
      block.appendChild(rg);
      mcOptsCol.appendChild(block);
      state.blocks.push(block);
    }

    wireRadios();
    return true;
  }

  var afterAnswerReveal = null;

  function applyMcOptsPct(pct) {
    var n = Math.round(Number(pct));
    if (!isFinite(n)) return;
    n = Math.max(24, Math.min(46, n));
    mcLayout.style.setProperty("--mc-opts", n + "%");
  }

  function readMcOptsPct() {
    var cs = getComputedStyle(mcLayout).getPropertyValue("--mc-opts").trim();
    var m = cs.match(/^([\d.]+)%/);
    return m ? parseFloat(m[1], 10) : 36;
  }

  try {
    var savedSplit = localStorage.getItem(SPLIT_KEY);
    if (!savedSplit && contextId === "unit12-part1-sedentary") {
      savedSplit = localStorage.getItem(LEGACY_SPLIT);
    }
    if (savedSplit) applyMcOptsPct(savedSplit);
    else {
      var legacy = localStorage.getItem("unit12-part1-mc-split");
      if (legacy) {
        var L = parseFloat(legacy, 10);
        if (isFinite(L)) applyMcOptsPct(100 - L - 1.5);
      }
    }
  } catch (e1) {}

  function mcSplitFromClientX(clientX) {
    var rect = mcLayout.getBoundingClientRect();
    var w = rect.width;
    if (w < 1) return;
    var pct = ((rect.right - clientX) / w) * 100;
    applyMcOptsPct(pct);
  }

  var mcDragging = false;

  function mcCanDrag() {
    return !mqMcNarrow.matches;
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

  function getChoice(index) {
    var nm = state.names[index];
    var sel = document.querySelector('input[name="' + nm + '"]:checked');
    return sel ? sel.value : "";
  }

  function clearLabelMarks(block) {
    block.querySelectorAll("label").forEach(function (lab) {
      lab.classList.remove("is-correct-key", "is-pick-ok", "is-pick-bad");
    });
  }

  function clearCheckState() {
    state.blocks.forEach(function (el) {
      clearLabelMarks(el);
    });
    feedback.className = "feedback";
    feedback.textContent = "";
  }

  function applyMarksForQuestion(index) {
    var CORRECT = buildCorrectLetters(state.exercise);
    var block = state.blocks[index];
    var key = CORRECT[index];
    clearLabelMarks(block);
    block.querySelectorAll('input[type="radio"]').forEach(function (radio) {
      var lab = radio.closest("label");
      var v = radio.value;
      if (v === key) {
        lab.classList.add("is-correct-key");
      }
      if (radio.checked) {
        if (v === key) {
          lab.classList.add("is-pick-ok");
        } else {
          lab.classList.add("is-pick-bad");
        }
      }
    });
  }

  function openAnswerReveal(text) {
    answerRevealBody.textContent = text;
    answerRevealLayer.classList.add("is-open");
    answerRevealLayer.style.display = "flex";
    answerRevealLayer.setAttribute("aria-hidden", "false");
    answerRevealBtn.focus();
  }

  function closeAnswerReveal() {
    answerRevealLayer.classList.remove("is-open");
    answerRevealLayer.style.display = "none";
    answerRevealLayer.setAttribute("aria-hidden", "true");
  }

  answerRevealBtn.addEventListener("click", function () {
    closeAnswerReveal();
    if (typeof afterAnswerReveal === "function") {
      var fn = afterAnswerReveal;
      afterAnswerReveal = null;
      fn();
    }
  });

  function wireRadios() {
    state.names.forEach(function (nm) {
      document.querySelectorAll('input[name="' + nm + '"]').forEach(function (radio) {
        radio.removeEventListener("change", onRadioChange);
        radio.addEventListener("change", onRadioChange);
      });
    });
  }

  function onRadioChange() {
    clearCheckState();
    afterAnswerReveal = null;
  }

  btnCheck.addEventListener("click", function () {
    var n = state.nQuestions;
    if (!n) return;
    var missing = false;
    for (var i = 0; i < n; i++) {
      if (!getChoice(i)) {
        missing = true;
        break;
      }
    }
    if (missing) {
      feedback.className = "feedback show";
      feedback.textContent = "Choose A, B, C or D for every question, then press Submit.";
      return;
    }

    var CORRECT = buildCorrectLetters(state.exercise);
    var score = 0;
    for (var j = 0; j < n; j++) {
      applyMarksForQuestion(j);
      if (getChoice(j) === CORRECT[j]) {
        score += 1;
      }
    }

    if (score === n) {
      feedback.className = "feedback show";
      feedback.innerHTML = "Excellent! All <strong>" + n + "</strong> answers are correct.";
      return;
    }

    var wrong = n - score;
    feedback.className = "feedback";
    feedback.textContent = "";
    afterAnswerReveal = function () {
      feedback.className = "feedback show";
      feedback.innerHTML =
        "Correct: <strong>" +
        score +
        "</strong>, still to fix: <strong>" +
        wrong +
        "</strong>. " +
        "Green = right letter; if you chose wrong, your choice is red. Press <strong>Submit</strong> again after changes.";
    };
    openAnswerReveal(buildRevealLines(state.exercise));
  });

  btnReset.addEventListener("click", function () {
    afterAnswerReveal = null;
    state.names.forEach(function (nm) {
      document.querySelectorAll('input[name="' + nm + '"]').forEach(function (r) {
        r.checked = false;
      });
    });
    clearCheckState();
    closeAnswerReveal();
  });

  var admTitle = document.getElementById("admTitle");
  var admSubtitle = document.getElementById("admSubtitle");
  var admPassage = document.getElementById("admPassage");
  var admExLetter = document.getElementById("admExLetter");
  var admExText = document.getElementById("admExText");
  var admGapsWrap = document.getElementById("admGapsWrap");
  var admDataBanner = document.getElementById("admDataBanner");
  var hasAdminDom = !!(admTitle && admPassage && admGapsWrap && admDataBanner);

  function adminFillFromData(data) {
    if (!hasAdminDom) return;
    admTitle.value = data.title || "";
    admSubtitle.value = data.subtitle || "";
    admPassage.value = data.passage || "";
    if (data.example) {
      admExLetter.value = (data.example.letter || "").toString();
      admExText.value = (data.example.text || "").toString();
    } else {
      admExLetter.value = "";
      admExText.value = "";
    }
    adminRenderGapEditors();
  }

  function adminRenderGapEditors() {
    if (!hasAdminDom) return;
    var passage = admPassage.value;
    var qnums = questionNumsFromPassage(passage);
    admGapsWrap.innerHTML = "";
    var draft = readDraftFromDom();
    qnums.forEach(function (num, idx) {
      var it = draft.items[idx] || { options: ["", "", "", ""], correctIndex: 0 };
      var box = document.createElement("div");
      box.className = "gap-editor";
      var h = document.createElement("div");
      h.className = "row-head";
      h.textContent = "Вопрос " + num;
      box.appendChild(h);
      for (var j = 0; j < 4; j++) {
        var row = document.createElement("div");
        row.className = "opt-grid";
        var sp = document.createElement("span");
        sp.textContent = LETTERS_U[j];
        var inp = document.createElement("input");
        inp.type = "text";
        inp.setAttribute("data-qidx", String(idx));
        inp.setAttribute("data-oj", String(j));
        inp.value = it.options[j] || "";
        row.appendChild(sp);
        row.appendChild(inp);
        box.appendChild(row);
      }
      var cr = document.createElement("div");
      cr.className = "correct-row";
      cr.innerHTML = "<span>Верно:</span>";
      var sel = document.createElement("select");
      sel.setAttribute("data-qidx", String(idx));
      for (var k = 0; k < 4; k++) {
        var opt = document.createElement("option");
        opt.value = String(k);
        opt.textContent = LETTERS_U[k];
        if (Number(it.correctIndex) === k) opt.selected = true;
        sel.appendChild(opt);
      }
      cr.appendChild(sel);
      box.appendChild(cr);
      admGapsWrap.appendChild(box);
    });
  }

  function readDraftFromDom() {
    if (!hasAdminDom) {
      return { title: "", subtitle: "", passage: "", example: null, items: [] };
    }
    var data = {
      title: admTitle.value.trim(),
      subtitle: admSubtitle.value.trim(),
      passage: admPassage.value,
      example: null,
      items: []
    };
    if (data.passage.indexOf("[[0]]") !== -1) {
      data.example = {
        letter: admExLetter.value.trim().toUpperCase().slice(0, 1) || "C",
        text: admExText.value.trim()
      };
    }
    var qnums = questionNumsFromPassage(data.passage);
    qnums.forEach(function (num, idx) {
      var box = admGapsWrap.children[idx];
      if (!box) {
        data.items.push({ options: ["", "", "", ""], correctIndex: 0 });
        return;
      }
      var opts = [];
      for (var j = 0; j < 4; j++) {
        var inp = box.querySelector('input[data-oj="' + j + '"]');
        opts.push(inp ? inp.value.trim() : "");
      }
      var sel = box.querySelector("select");
      var ci = sel ? parseInt(sel.value, 10) : 0;
      data.items.push({ options: opts, correctIndex: ci });
    });
    return data;
  }

  if (hasAdminDom) {
    admPassage.addEventListener("blur", function () {
      adminRenderGapEditors();
    });
  }

  function setDataBanner(text, ok) {
    if (!admDataBanner) return;
    admDataBanner.innerHTML = text;
    admDataBanner.style.color = ok ? "#86efac" : "#fca5a5";
  }

  function publishExercise(data) {
    try {
      localStorage.setItem(STORAGE_PUBLISH_KEY, JSON.stringify(data));
      var srcHint = dataSrc
        ? "Файл для загрузки на сервер: по адресу <strong>" + esc(dataSrc) + "</strong> (относительно этой страницы)."
        : "Положи <strong>published.json</strong> рядом с этой страницей на хостинге.";
      setDataBanner(
        "Сохранено в браузере (ключ контекста: <strong>" +
          esc(contextId) +
          "</strong>). " +
          srcHint +
          " Студенты получат данные из файла, если он открывается по сети; иначе из этого браузера.",
        true
      );
    } catch (e) {
      setDataBanner("Не удалось записать localStorage: " + (e && e.message), false);
    }
  }

  function downloadJson(filename, obj) {
    var blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function readLocalPublished() {
    try {
      var raw = localStorage.getItem(STORAGE_PUBLISH_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    if (contextId === "unit12-part1-sedentary") {
      try {
        var leg = localStorage.getItem(LEGACY_STORAGE);
        if (leg) return JSON.parse(leg);
      } catch (e2) {}
    }
    return null;
  }

  if (hasAdminDom) {
    document.getElementById("btnAdmSave").addEventListener("click", function () {
      var data = readDraftFromDom();
      var errs = validateExercise(data);
      if (errs.length) {
        setDataBanner(errs.join(" "), false);
        return;
      }
      publishExercise(data);
      state.exercise = deepClone(data);
    });

    document.getElementById("btnAdmPreview").addEventListener("click", function () {
      var data = readDraftFromDom();
      var errs = validateExercise(data);
      if (errs.length) {
        setDataBanner(errs.join(" "), false);
        return;
      }
      try {
        localStorage.setItem(STORAGE_PUBLISH_KEY, JSON.stringify(data));
      } catch (e) {
        setDataBanner("Не удалось сохранить для предпросмотра: " + (e && e.message), false);
        return;
      }
      window.location.href = buildNavQuery(false);
    });

    document.getElementById("btnAdmExport").addEventListener("click", function () {
      var data = readDraftFromDom();
      var errs = validateExercise(data);
      if (errs.length) {
        setDataBanner(errs.join(" "), false);
        return;
      }
      downloadJson("published.json", data);
    });

    document.getElementById("btnAdmImport").addEventListener("click", function () {
      document.getElementById("adminImportFile").click();
    });

    document.getElementById("adminImportFile").addEventListener("change", function (ev) {
      var f = ev.target.files && ev.target.files[0];
      ev.target.value = "";
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          adminFillFromData(data);
          setDataBanner("JSON загружен в форму. Нажми «Сохранить и опубликовать» или «Скачать».", true);
        } catch (e) {
          setDataBanner("Файл не JSON или битый.", false);
        }
      };
      reader.readAsText(f, "UTF-8");
    });

    document.getElementById("btnAdmReset").addEventListener("click", function () {
      var d = parseDefaultJson();
      adminFillFromData(d);
      try {
        localStorage.removeItem(STORAGE_PUBLISH_KEY);
        if (contextId === "unit12-part1-sedentary") {
          localStorage.removeItem(LEGACY_STORAGE);
        }
      } catch (e) {}
      setDataBanner("Сброшено к встроенному демо. localStorage очищен.", true);
    });
  }

  function mergeLoadOrder() {
    /* Course CMS: open with ?sessionKey=... after sessionStorage.setItem(key, JSON.stringify(exercise)) */
    var sk = sp.get("sessionKey");
    if (sk) {
      try {
        var rawS = sessionStorage.getItem(sk);
        if (rawS) return Promise.resolve(JSON.parse(rawS));
      } catch (eS) {}
    }
    var def = parseDefaultJson();
    var url = publishedFetchUrl();
    return fetch(url, { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("no file");
        return r.json();
      })
      .catch(function () {
        var loc = readLocalPublished();
        if (loc) return loc;
        return def;
      });
  }

  mergeLoadOrder().then(function (data) {
    if (isAdmin && hasAdminDom) {
      adminFillFromData(deepClone(data));
      try {
        var hasLoc = !!readLocalPublished();
        setDataBanner(
          hasLoc
            ? "Контекст <strong>" +
                esc(contextId) +
                "</strong>. Есть черновик в localStorage. Для продакшена положи JSON по пути из <code>src</code> или рядом со страницей."
            : "Контекст <strong>" +
                esc(contextId) +
                "</strong>. Редактируй и сохрани, либо импортируй JSON.",
          true
        );
      } catch (e) {
        setDataBanner("", true);
      }
    } else {
      renderStudent(data);
    }
  });
})();
