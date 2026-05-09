/**
 * Part 1 — Multiple-choice cloze (shared).
 * Configure before load: window.PART1_MC_BOOT = { contextId, dataSrc, backHref, backLabel, pageTitle, documentTitle }
 * Or URL: ?context=slug&src=relative/path/to/published.json&back=unit3.html&backLabel=...
 * Edit mode: &prepView=edit (hub / track) and/or legacy &admin=1
 * Student-only chrome: boot.studentOnly or &part1Student=1 — скрывает редактор и игнорирует edit в URL.
 * Вшитые данные без сети: boot.embeddedOnly or &part1Embedded=1 — см. readEmbeddedExercisePayload().
 * Коробка: window.__PREP_BOXED_SITE__ (js/prep-boxed.js) — без pull из облака, fetch published.json с cache default.
 */
(function () {
  var boot = window.PART1_MC_BOOT || window.PART1_MC_CONFIG || {};
  var sp = new URLSearchParams(window.location.search);
  var contextId = String(boot.contextId || sp.get("context") || "default").trim() || "default";
  function isEditModeParams(params) {
    var p = params || sp;
    return p.get("admin") === "1" || p.get("prepView") === "edit";
  }
  var isEditRoute = isEditModeParams(sp);
  var dataSrc = String(boot.dataSrc || sp.get("src") || "").trim();
  if (!dataSrc && contextId === "unit10-uoe") {
    dataSrc = "ex-athlete-taken-in/published.json";
  }
  /** Level 9 Workbook Part 1: вшитый JSON в part1-mc-cloze/index.html (без fetch / file://). */
  var unit9InteriorHardwired =
    String(contextId) === "unit9-uoe" ||
    /published-unit9-interior-design\.json\s*$/i.test(dataSrc);
  var unit9ArtisticTalentHardwired =
    String(contextId) === "unit9-uoe-artistic-talent" ||
    /published-unit9-artistic-talent\.json\s*$/i.test(dataSrc);
  var unit9PisaHardwired =
    String(contextId) === "unit9-uoe-pisa" ||
    /published-unit9-pisa-leaning-tower\.json\s*$/i.test(dataSrc);
  /** Unit 9 · Solving a mystery — same as other L9 Part 1: JSON in #part1-mc-bundled-unit9-solving-mystery (works file://). */
  var unit9SolvingMysteryHardwired =
    String(contextId) === "unit9-uoe-solving-mystery" ||
    /published-unit9-solving-mystery\.json\s*$/i.test(dataSrc);
  /** Unit 8 FCE · Seville — JSON in #part1-mc-bundled-unit8-seville. */
  var unit8UoeSevilleBundled = String(contextId) === "unit8-uoe-seville";
  var unit9BundledPart1 =
    unit9InteriorHardwired ||
    unit9ArtisticTalentHardwired ||
    unit9PisaHardwired ||
    unit9SolvingMysteryHardwired;
  var unit10ExAthleteBundled =
    String(contextId) === "unit10-uoe" ||
    /ex-athlete-taken-in\/published\.json\s*$/i.test(dataSrc);
  /** Unit 5 FCE · Summer jobs — JSON in #part1-mc-bundled-unit5-summer-jobs (works file://). */
  var unit5UoeBundled = String(contextId) === "unit5-uoe";
  var studentOnly =
    boot.studentOnly === true ||
    sp.get("part1Student") === "1" ||
    unit9BundledPart1 ||
    unit8UoeSevilleBundled;
  var useEmbeddedExercise =
    boot.embeddedOnly === true ||
    sp.get("part1Embedded") === "1" ||
    unit9BundledPart1 ||
    unit10ExAthleteBundled ||
    unit5UoeBundled ||
    unit8UoeSevilleBundled;
  var boxedSite =
    (typeof window !== "undefined" && window.__PREP_BOXED_SITE__ === true) ||
    boot.boxedSite === true ||
    sp.get("prepBoxed") === "1";
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

  function stripStudentOnlyAdminChrome() {
    if (!studentOnly) return;
    try {
      document.querySelectorAll(".admin-only").forEach(function (n) {
        if (n && n.parentNode) n.parentNode.removeChild(n);
      });
    } catch (eStrip) {}
    document.body.classList.add("part1-mc-student-only");
  }
  stripStudentOnlyAdminChrome();

  /** Опциональный шаблон только если в HTML есть #part1-mc-default-data (без демо-заглушки в коде). */
  function parseDefaultJson() {
    var el = document.getElementById("part1-mc-default-data");
    if (!el) return null;
    try {
      return JSON.parse(el.textContent.trim());
    } catch (e) {
      return null;
    }
  }

  /** Пустой черновик для редактора после «Сбросить» — не показывается ученикам. */
  function adminBlankExerciseTemplate() {
    return {
      title: "Part 1 — Multiple-choice cloze",
      subtitle: "Edit subtitle and passage, then Save.",
      passage: "Replace this passage. Use gap markers [[1]], [[2]], …\n\nSecond paragraph with [[2]].",
      example: null,
      items: [
        { options: ["(replace)", "(replace)", "(replace)", "(replace)"], correctIndex: 0 },
        { options: ["(replace)", "(replace)", "(replace)", "(replace)"], correctIndex: 1 }
      ]
    };
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

  /** Optional pedagogy: explainCorrect + explainIfChosen (keys "0".."3" = option slot). */
  function attachExplainFields(target, source) {
    if (!target || !source) return;
    if (source.explainCorrect != null && String(source.explainCorrect).trim()) {
      target.explainCorrect = String(source.explainCorrect).trim();
    }
    if (source.explainIfChosen && typeof source.explainIfChosen === "object") {
      var ex = {};
      Object.keys(source.explainIfChosen).forEach(function (k) {
        var v = source.explainIfChosen[k];
        if (v != null && String(v).trim()) ex[String(k)] = String(v).trim();
      });
      if (Object.keys(ex).length) target.explainIfChosen = ex;
    }
  }

  function lookupExplainChosen(obj, pick) {
    if (!obj || pick == null || pick === "") return "";
    var k = String(pick);
    if (obj[k]) return String(obj[k]);
    var n = Number(pick);
    if (!isNaN(n) && obj[n] != null) return String(obj[n]);
    return "";
  }

  function displayLetterForSlot(qIndex, slotIndexStr) {
    var si = Number(slotIndexStr);
    var items = state.exercise && state.exercise.items;
    var it = items ? items[qIndex] : null;
    if (!it || !isFinite(si)) return "?";
    var order = state.studentOptionOrder && state.studentOptionOrder[qIndex];
    if (order && order.length) {
      var pos = order.indexOf(si);
      if (pos >= 0) return LETTERS_U[pos];
    }
    var filled = [];
    for (var j0 = 0; j0 < 4; j0++) {
      if (String(it.options[j0] || "").trim()) filled.push(j0);
    }
    var k = filled.indexOf(si);
    return k >= 0 ? LETTERS_U[k] : "?";
  }

  function buildExplainHtml(data, userPicks) {
    var items = data.items || [];
    var docNums = questionNumsInDocumentOrder(data.passage || "");
    var blocks = [];
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      var pick = userPicks[i];
      var correct = String(Number(it.correctIndex) || 0);
      var wrong = pick !== correct;
      if (!wrong) continue;
      var ec = it.explainCorrect != null ? String(it.explainCorrect).trim() : "";
      var eic = it.explainIfChosen || {};
      var gapNum = docNums[i] != null ? docNums[i] : i + 1;
      var ynote = lookupExplainChosen(eic, pick);
      if (!ec && !ynote) continue;
      var Lc = displayLetterForSlot(i, correct);
      var Lp = pick ? displayLetterForSlot(i, pick) : "?";
      var html =
        '<div class="reveal-explain-block"><div class="reveal-explain-gap">Gap ' +
        esc(String(gapNum)) +
        "</div>";
      if (ec) {
        html +=
          '<p class="reveal-explain-line"><span class="reveal-tag reveal-tag--ok">Why ' +
          esc(Lc) +
          "</span> " +
          esc(ec) +
          "</p>";
      }
      html +=
        '<p class="reveal-explain-line"><span class="reveal-tag reveal-tag--bad">Why not ' +
        esc(Lp) +
        "</span> " +
        esc(
          ynote ||
            "This option doesn't fit the meaning or usual collocation here — compare with " +
              esc(Lc) +
              "."
        ) +
        "</p>";
      html += "</div>";
      blocks.push(html);
    }
    if (!blocks.length) return "";
    return (
      '<div class="reveal-explain-wrap"><h3 class="reveal-explain-h3">Explanations</h3>' +
      blocks.join("") +
      "</div>"
    );
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

  function buildNavQuery(editOn) {
    var p = new URLSearchParams(window.location.search);
    if (editOn) {
      p.set("prepView", "edit");
      p.set("admin", "1");
    } else {
      p.delete("admin");
      p.delete("prepView");
    }
    var q = p.toString();
    return window.location.pathname + (q ? "?" + q : "") + window.location.hash;
  }

  function resolveBackHref() {
    var raw = String(backHref || "").trim();
    if (!raw) {
      try {
        return new URL("../../index.html", window.location.href).href;
      } catch (e) {
        return "../../index.html";
      }
    }
    try {
      return new URL(raw, window.location.href).href;
    } catch (e2) {
      return raw;
    }
  }

  function resolveChainNextHref(raw) {
    var s = String(raw || "").trim();
    if (!s) return "";
    try {
      if (/^https?:\/\//i.test(s)) return s;
      var pathPart = s.split(/[?#]/)[0] || "";
      if (/^use-of-english\//.test(pathPart)) {
        var proto = window.location.protocol;
        if (proto === "http:" || proto === "https:") {
          return new URL("/" + s.replace(/^\//, ""), window.location.origin).href;
        }
        if (proto === "file:") {
          var cur = window.location.href.split(/[?#]/)[0].replace(/\\/g, "/");
          var key = "/use-of-english/";
          var pos = cur.toLowerCase().indexOf(key);
          if (pos !== -1) {
            var baseDir = cur.slice(0, pos).replace(/\/?$/, "") + "/";
            return new URL(s, baseDir).href;
          }
        }
      }
      return new URL(s, window.location.href).href;
    } catch (e) {
      return s;
    }
  }

  function wirePart1ChainNext() {
    var rawNext = sp.get("next");
    if (!rawNext) return;
    var strip = document.getElementById("part1McNextStrip");
    var link = document.getElementById("part1McNextLink");
    if (!strip || !link) return;
    var nextLabelDecoded = sp.get("nextLabel")
      ? decodeURIComponent(sp.get("nextLabel"))
      : "Next task";
    link.setAttribute("href", resolveChainNextHref(String(rawNext).trim()));
    link.textContent = "\u2192 " + nextLabelDecoded;
    strip.removeAttribute("hidden");
  }

  function wireNav() {
    var back = document.getElementById("part1McBack");
    if (back) {
      back.setAttribute("href", resolveBackHref());
      var lb = String(backLabel || "Back").trim() || "Back";
      if (lb.indexOf("\u2190") !== 0) {
        lb = "\u2190 " + lb;
      }
      back.textContent = lb;
      back.addEventListener("click", function (e) {
        if (window.history.length > 1) {
          e.preventDefault();
          window.history.back();
        }
      });
    }
    var h1 = document.getElementById("part1McH1");
    if (h1) h1.textContent = pageTitle;
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

  /** Номера пропусков в порядке первого появления в тексте (как читает ученик). Не сортирует 3,4,5 — важно для редактора и сопоставления items. */
  function questionNumsInDocumentOrder(passage) {
    var re = /\[\[(\d+)\]\]/g;
    var m;
    var seen = {};
    var out = [];
    while ((m = re.exec(String(passage || ""))) !== null) {
      var n = parseInt(m[1], 10);
      if (!isFinite(n) || n <= 0) continue;
      if (seen[n]) continue;
      seen[n] = true;
      out.push(n);
    }
    return out;
  }

  /** В файле / localStorage items идут в порядке возрастания номера пропуска (как раньше). В редакторе — в порядке текста. */
  function alignItemsToDocumentPassage(passage, items) {
    var sorted = questionNumsFromPassage(passage);
    var doc = questionNumsInDocumentOrder(passage);
    var arr = Array.isArray(items) ? items : [];
    var byNum = {};
    sorted.forEach(function (g, si) {
      var it = arr[si];
      if (it) {
        var o = {
          options: (it.options || []).slice(0, 4),
          correctIndex: Number(it.correctIndex) || 0
        };
        attachExplainFields(o, it);
        byNum[g] = o;
      }
    });
    return doc.map(function (g) {
      var x = byNum[g];
      if (!x) return { options: ["", "", "", ""], correctIndex: 0 };
      var row = { options: x.options.slice(), correctIndex: x.correctIndex };
      attachExplainFields(row, x);
      return row;
    });
  }

  function itemsDocumentToSortedStorage(passage, itemsDoc) {
    var sorted = questionNumsFromPassage(passage);
    var doc = questionNumsInDocumentOrder(passage);
    var arr = Array.isArray(itemsDoc) ? itemsDoc : [];
    var byNum = {};
    doc.forEach(function (g, di) {
      var it = arr[di];
      if (it) {
        var o = {
          options: (it.options || []).slice(0, 4),
          correctIndex: Number(it.correctIndex) || 0
        };
        attachExplainFields(o, it);
        byNum[g] = o;
      }
    });
    return sorted.map(function (g) {
      var x = byNum[g];
      if (!x) return { options: ["", "", "", ""], correctIndex: 0 };
      var row = { options: x.options.slice(), correctIndex: x.correctIndex };
      attachExplainFields(row, x);
      return row;
    });
  }

  function exerciseForStorage(data) {
    var o = deepClone(data);
    o.items = itemsDocumentToSortedStorage(o.passage, o.items || []);
    return o;
  }

  function validateExercise(data) {
    var errs = [];
    if (!data.title || !String(data.title).trim()) errs.push("Нужен заголовок.");
    if (!data.passage || !String(data.passage).trim()) errs.push("Нужен текст с [[1]] …");
    var qnums = questionNumsFromPassage(data.passage);
    if (!qnums.length) errs.push("В тексте нет пропусков [[1]], [[2]], …");
    var dupSeen = {};
    var reDup = /\[\[(\d+)\]\]/g;
    var dm;
    while ((dm = reDup.exec(String(data.passage || ""))) !== null) {
      var dn = parseInt(dm[1], 10);
      if (!isFinite(dn) || dn <= 0) continue;
      if (dupSeen[dn]) {
        errs.push("Пропуск [[" + dn + "]] встречается в тексте больше одного раза — оставь один маркер.");
        break;
      }
      dupSeen[dn] = true;
    }
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
      var docLab = questionNumsInDocumentOrder(data.passage);
      data.items.forEach(function (it, idx) {
        var qLabel = docLab[idx] != null ? "[[" + docLab[idx] + "]]" : String(idx + 1);
        if (!it.options || it.options.length !== 4) {
          errs.push("Пропуск " + qLabel + ": нужны слоты A–D (внутренняя ошибка).");
          return;
        }
        var ci = Number(it.correctIndex);
        if (!isFinite(ci) || ci < 0 || ci > 3) {
          errs.push("Пропуск " + qLabel + ": верный ответ — ячейка A, B, C или D.");
          return;
        }
        var filled = 0;
        var correctText = "";
        it.options.forEach(function (op, j) {
          var t = String(op || "").trim();
          if (t) filled++;
          if (j === ci) correctText = t;
        });
        if (!correctText) {
          errs.push(
            "Пропуск " + qLabel + ": в ячейке верного ответа (" + LETTERS_U[ci] + ") должен быть текст."
          );
          return;
        }
        if (filled < 2) {
          errs.push(
            "Пропуск " +
              qLabel +
              ": нужен хотя бы один неверный вариант (сейчас заполнено слотов: " +
              filled +
              "). Пустые буквы можно не трогать."
          );
        }
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

  /** Radio values are original slot indices "0".."3", not display letters. */
  function buildCorrectChoiceValues(data) {
    return (data.items || []).map(function (it) {
      return String(Number(it.correctIndex) || 0);
    });
  }

  function displayLetterForCorrect(it) {
    var ci = Number(it.correctIndex) || 0;
    var k = 0;
    for (var j = 0; j < 4; j++) {
      if (!String(it.options[j] || "").trim()) continue;
      if (j === ci) return LETTERS_U[k];
      k++;
    }
    return LETTERS_U[Math.min(ci, 3)];
  }

  var state = {
    exercise: null,
    names: [],
    blocks: [],
    nQuestions: 0,
    /** Для каждого вопроса — порядок слотов 0..3 в колонке A, B, C… (после перемешивания у ученика). */
    studentOptionOrder: []
  };

  function displayLetterForStudentView(qIndex, it) {
    var order = state.studentOptionOrder && state.studentOptionOrder[qIndex];
    var ci = Number(it.correctIndex) || 0;
    if (order && order.length) {
      for (var v = 0; v < order.length; v++) {
        if (order[v] === ci) return LETTERS_U[v];
      }
    }
    return displayLetterForCorrect(it);
  }

  function buildRevealLines(data) {
    var lines = [];
    var row = [];
    (data.items || []).forEach(function (it, i) {
      var num = i + 1;
      var L = displayLetterForStudentView(i, it);
      row.push(" " + num + " " + L + "    ");
      if (row.length === 4) {
        lines.push(row.join(""));
        row = [];
      }
    });
    if (row.length) lines.push(row.join(""));
    return lines.join("\n").trim();
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

  var isAdmin = !studentOnly && isEditModeParams(new URLSearchParams(window.location.search));

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

  function showStudentExerciseLoadFailed() {
    document.body.classList.add("part1-mc-load-failed");
    if (elTitle) elTitle.textContent = "";
    if (elSubtitle) elSubtitle.textContent = "";
    if (elPassage) elPassage.innerHTML = "";
    if (mcOptsCol) mcOptsCol.innerHTML = "";
    if (mcLayout) mcLayout.style.display = "none";
    if (feedback) {
      feedback.className = "feedback";
      feedback.innerHTML = "";
    }
    if (btnCheck) btnCheck.disabled = true;
    if (btnReset) btnReset.disabled = true;
  }

  /**
   * Общая отрисовка заголовка, текста и колонки вариантов (как у ученика).
   * @param {boolean} cfg.collectState — заполнить state.names / state.blocks для Submit
   * @param {boolean} cfg.shuffleForStudent — случайный порядок вариантов (режим Preview / ученик); в редакторе — false
   */
  function renderExerciseLayout(data, cfg) {
    cfg.titleEl.textContent = data.title || "";
    if (cfg.subtitleEl) cfg.subtitleEl.textContent = data.subtitle || "";
    cfg.passageEl.innerHTML = passageToHtml(data);
    cfg.optsCol.innerHTML = "";
    var collect = !!cfg.collectState;
    var shuffleStudent = !!cfg.shuffleForStudent;
    var names = collect ? [] : null;
    var blocks = collect ? [] : null;
    if (collect) {
      state.studentOptionOrder = [];
    }
    var n = (data.items || []).length;
    var docNums = questionNumsInDocumentOrder(data.passage);
    var prefix = cfg.radioPrefix;
    var idPref = cfg.blockIdPrefix != null ? cfg.blockIdPrefix : "q";
    for (var i = 0; i < n; i++) {
      var gapLabel = docNums[i] != null ? docNums[i] : i + 1;
      var nm = prefix + "_" + (i + 1);
      if (names) names.push(nm);
      var block = document.createElement("div");
      block.className = "gap-block";
      block.id = idPref + gapLabel;
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
      for (var j0 = 0; j0 < 4; j0++) {
        if (String(it.options[j0] || "").trim()) filled.push(j0);
      }
      var order = filled.slice();
      if (shuffleStudent && order.length > 1) {
        shuffleIntArray(order);
      }
      if (collect) {
        state.studentOptionOrder.push(order.slice());
      }
      var vis = 0;
      for (var si = 0; si < order.length; si++) {
        var j = order[si];
        var optText = String(it.options[j] || "").trim();
        if (!optText) continue;
        var lab = document.createElement("label");
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = nm;
        radio.value = String(j);
        lab.appendChild(radio);
        lab.appendChild(document.createTextNode(" " + LETTERS_U[vis] + " " + optText));
        rg.appendChild(lab);
        vis++;
      }
      block.appendChild(head);
      block.appendChild(rg);
      cfg.optsCol.appendChild(block);
      if (blocks) blocks.push(block);
    }
    return collect ? { names: names, blocks: blocks } : null;
  }

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

    var r = renderExerciseLayout(data, {
      titleEl: elTitle,
      subtitleEl: elSubtitle,
      passageEl: elPassage,
      optsCol: mcOptsCol,
      radioPrefix: "mc_" + contextId.replace(/[^\w-]/g, "_"),
      blockIdPrefix: "q",
      collectState: true,
      shuffleForStudent: true
    });
    state.names = r.names;
    state.blocks = r.blocks;
    state.nQuestions = state.names.length;
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
    var CORRECT = buildCorrectChoiceValues(state.exercise);
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

  function openAnswerReveal(keyText, explainHtml) {
    var keyBlock =
      '<div class="reveal-key-block">' +
      esc(keyText).replace(/\r\n/g, "\n").replace(/\n/g, "<br/>") +
      "</div>";
    answerRevealBody.innerHTML = keyBlock + (explainHtml || "");
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
      feedback.textContent = "Отметьте вариант по каждому вопросу, затем Submit.";
      return;
    }

    var CORRECT = buildCorrectChoiceValues(state.exercise);
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
    var picks = [];
    for (var pi = 0; pi < n; pi++) {
      picks.push(getChoice(pi));
    }
    var explainHtml = buildExplainHtml(state.exercise, picks);
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
    openAnswerReveal(buildRevealLines(state.exercise), explainHtml);
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

  function applyExerciseMetaLock() {
    if (!hasAdminDom) return;
    var lock = boot.lockExerciseMeta === true || boot.lockExerciseMeta === "1";
    var t0 = boot.activityTitle || boot.presetTitle || "";
    var s0 = boot.activitySubtitle || boot.presetSubtitle || "";
    try {
      if (sp.get("activityTitle")) {
        t0 = decodeURIComponent(String(sp.get("activityTitle")).replace(/\+/g, " "));
      }
      if (sp.get("activitySubtitle")) {
        s0 = decodeURIComponent(String(sp.get("activitySubtitle")).replace(/\+/g, " "));
      }
    } catch (eM) {}
    if (t0) {
      admTitle.value = t0;
      admTitle.readOnly = true;
      admTitle.classList.add("admin-meta-from-activity");
    }
    if (s0) {
      admSubtitle.value = s0;
      admSubtitle.readOnly = true;
      admSubtitle.classList.add("admin-meta-from-activity");
    }
    if (lock) {
      admTitle.readOnly = true;
      admSubtitle.readOnly = true;
      admTitle.classList.add("admin-meta-from-activity");
      admSubtitle.classList.add("admin-meta-from-activity");
    }
  }

  function normalizeItemsForPassage(passage, itemsIn) {
    var qnums = questionNumsInDocumentOrder(passage);
    var items = Array.isArray(itemsIn)
      ? itemsIn.map(function (x) {
          var o = {
            options: (x.options || []).slice(0, 4),
            correctIndex: Number(x.correctIndex) || 0
          };
          attachExplainFields(o, x);
          return o;
        })
      : [];
    while (items.length < qnums.length) {
      items.push({ options: ["", "", "", ""], correctIndex: 0 });
    }
    while (items.length > qnums.length) {
      items.pop();
    }
    items.forEach(function (it) {
      while (it.options.length < 4) it.options.push("");
      if (it.options.length > 4) it.options = it.options.slice(0, 4);
    });
    return items;
  }

  var livePreviewTimer = null;

  function scheduleLivePreview() {
    if (!isAdmin || !hasAdminDom) return;
    window.clearTimeout(livePreviewTimer);
    livePreviewTimer = window.setTimeout(function () {
      syncAdminLivePreview();
    }, 260);
  }

  function syncAdminLivePreview() {
    if (!isAdmin || !hasAdminDom) return;
    var titleEl = document.getElementById("adminLiveTitle");
    var optsEl = document.getElementById("adminLiveOpts");
    if (!titleEl || !optsEl) return;
    var raw = readDraftFromDom();
    var items = normalizeItemsForPassage(raw.passage, raw.items);
    var data = {
      title: raw.title,
      subtitle: raw.subtitle,
      passage: raw.passage,
      example: raw.example,
      items: items
    };
    var errs = validateExercise(data);
    renderExerciseLayout(data, {
      titleEl: titleEl,
      subtitleEl: document.getElementById("adminLiveSubtitle"),
      passageEl: document.getElementById("adminLivePassage"),
      optsCol: optsEl,
      radioPrefix: "mc_lp_" + contextId.replace(/[^\w-]/g, "_"),
      blockIdPrefix: "qlp-",
      collectState: false
    });
    var fb = document.getElementById("adminLiveFeedback");
    if (fb) {
      if (errs.length) {
        fb.className = "admin-live-preview-feedback is-warn";
        fb.textContent =
          "Черновик (сохранение и полный Preview после исправления): " + errs.slice(0, 3).join(" ");
        if (errs.length > 3) fb.textContent += "\u2026";
      } else {
        fb.className = "admin-live-preview-feedback is-ok";
        fb.textContent =
          "Превью: как у ученика. Справа в редакторе порядок букв — как после «Перемешать показ»; у ученика при открытии снова случайный. Submit — «Проверить как ученик».";
      }
    }
  }

  function adminFillFromData(data) {
    if (!hasAdminDom) return;
    if (!admTitle.readOnly) admTitle.value = data.title || "";
    if (!admSubtitle.readOnly) admSubtitle.value = data.subtitle || "";
    var passage = String(data.passage || "");
    admPassage.value = passage;
    if (data.example) {
      admExLetter.value = (data.example.letter || "").toString();
      admExText.value = (data.example.text || "").toString();
    } else {
      admExLetter.value = "";
      admExText.value = "";
    }
    var itemsDoc = alignItemsToDocumentPassage(passage, data.items || []);
    var merged = normalizeItemsForPassage(admPassage.value, itemsDoc);
    adminRenderGapEditors(merged);
    adminRenderPassageInteractive();
    scheduleLivePreview();
  }

  function parseAdminWordsPaste(raw) {
    return String(raw || "")
      .split(/[,;|•·\n\r]+/)
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean)
      .slice(0, 4);
  }

  function uniqueAdminWords(arr) {
    var seen = {};
    var out = [];
    (arr || []).forEach(function (w) {
      var k = String(w).toLowerCase();
      if (!w || seen[k]) return;
      seen[k] = true;
      out.push(String(w).trim());
    });
    return out;
  }

  function sortedStorageSlotsFromWords(words) {
    var u = uniqueAdminWords(words).slice(0, 4);
    u.sort(function (a, b) {
      return a.localeCompare(b, undefined, { sensitivity: "base" });
    });
    while (u.length < 4) u.push("");
    return u.slice(0, 4);
  }

  function itemToWordsTextareaLines(it) {
    var o = (it && it.options) || [];
    var w = [];
    for (var i = 0; i < 4; i++) {
      var t = String(o[i] || "").trim();
      if (t) w.push(t);
    }
    w.sort(function (a, b) {
      return a.localeCompare(b, undefined, { sensitivity: "base" });
    });
    return w.join("\n");
  }

  function correctWordFromItem(it) {
    if (!it || !it.options) return "";
    var ci = Number(it.correctIndex) || 0;
    return String(it.options[ci] || "").trim();
  }

  function rebuildGapShuffledPreview(box, preferredCorrectWord) {
    var ta = box.querySelector(".admin-gap-words-input");
    var prev = box.querySelector(".admin-gap-shuffled-preview");
    if (!ta || !prev) return;
    var words = uniqueAdminWords(parseAdminWordsPaste(ta.value));
    prev.innerHTML = "";
    if (words.length < 2) {
      var p = document.createElement("p");
      p.className = "admin-gap-preview-hint";
      p.textContent = "Вставь минимум два разных слова (через запятую или с новой строки).";
      prev.appendChild(p);
      return;
    }
    var order = words.slice();
    shuffleIntArray(order);
    var picked = String(preferredCorrectWord || "").trim();
    var matched = false;
    for (var i = 0; i < order.length; i++) {
      var lab = document.createElement("label");
      lab.className = "admin-gap-radio-line";
      var radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "adm-gap-correct-" + box.id;
      radio.value = order[i];
      if (picked && order[i] === picked) {
        radio.checked = true;
        matched = true;
      } else if (picked && order[i].toLowerCase() === picked.toLowerCase()) {
        radio.checked = true;
        matched = true;
      }
      lab.appendChild(radio);
      lab.appendChild(
        document.createTextNode(" " + LETTERS_U[i] + " " + order[i])
      );
      prev.appendChild(lab);
    }
    if (!matched) {
      var r0 = prev.querySelector('input[type="radio"]');
      if (r0) r0.checked = true;
    }
  }

  /** Следующий свободный номер пропуска (заполняет «дыры»: при [[9]],[[12]] вернёт 1, а не 13). */
  function nextFreeQuestionNum(oldQ) {
    var s = {};
    (oldQ || []).forEach(function (n) {
      s[n] = true;
    });
    var n = 1;
    while (s[n]) n++;
    return n;
  }

  /**
   * Перенумеровать все пропуски в тексте подряд [[1]]…[[N]] в порядке возрастания старых номеров;
   * порядок элементов items не меняется.
   */
  function adminRenumberGapsPassageAndItems(precookedItems) {
    if (!hasAdminDom) return;
    var pass = admPassage.value;
    var oldQ = questionNumsFromPassage(pass);
    var items;
    if (precookedItems != null) {
      items = normalizeItemsForPassage(pass, precookedItems);
    } else {
      items = normalizeItemsForPassage(pass, readDraftFromDom().items);
    }
    if (!oldQ.length) {
      adminRenderGapEditors(items);
      adminRenderPassageInteractive();
      scheduleLivePreview();
      return;
    }
    var map = {};
    oldQ.forEach(function (on, i) {
      map[on] = i + 1;
    });
    var newPass = pass.replace(/\[\[(\d+)\]\]/g, function (full, d) {
      var n = parseInt(d, 10);
      if (n === 0) return full;
      if (map[n] != null) return "[[" + map[n] + "]]";
      return full;
    });
    admPassage.value = newPass;
    items = normalizeItemsForPassage(newPass, items);
    adminRenderGapEditors(items);
    adminRenderPassageInteractive();
    scheduleLivePreview();
  }

  /** Удалить [[num]] из текста и соответствующий блок вариантов; затем нормализовать 1…N. */
  function adminRemoveQuestionGap(questionNum) {
    if (!hasAdminDom) return;
    var num = parseInt(questionNum, 10);
    if (!isFinite(num) || num <= 0) return;
    var pass = admPassage.value;
    var token = "[[" + num + "]]";
    if (pass.indexOf(token) === -1) return;
    var draft = readDraftFromDom();
    var ix = questionNumsInDocumentOrder(pass).indexOf(num);
    if (ix < 0) return;
    var newPass = pass.split(token).join("");
    var merged = draft.items.slice();
    if (ix < merged.length) merged.splice(ix, 1);
    admPassage.value = newPass;
    merged = normalizeItemsForPassage(newPass, merged);
    adminRenumberGapsPassageAndItems(merged);
  }

  function adminRenderGapEditors(precookedItems) {
    if (!hasAdminDom) return;
    var passage = admPassage.value;
    var qnums = questionNumsInDocumentOrder(passage);
    var items = precookedItems;
    if (!items) {
      items = readDraftFromDom().items;
    }
    items = normalizeItemsForPassage(passage, items);
    admGapsWrap.innerHTML = "";
    qnums.forEach(function (num, idx) {
      var it = items[idx] || { options: ["", "", "", ""], correctIndex: 0 };
      var box = document.createElement("div");
      box.className = "gap-editor gap-editor--paste";
      box.id = "gap-editor-q-" + num;
      var headRow = document.createElement("div");
      headRow.className = "gap-editor-head";
      var h = document.createElement("div");
      h.className = "row-head";
      h.textContent =
        "Пропуск [[" +
        num +
        "]] — вставь 3–4 слова; ниже порядок как у ученика (перемешан). Отметь верный.";
      headRow.appendChild(h);
      var delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "btn-muted admin-gap-remove";
      delBtn.textContent = "Удалить";
      delBtn.title = "Убрать [[" + num + "]] из текста и этот блок.";
      (function (nDel) {
        delBtn.addEventListener("click", function () {
          if (!window.confirm("Удалить пропуск [[" + nDel + "]] из текста и варианты к нему?")) return;
          adminRemoveQuestionGap(nDel);
        });
      })(num);
      headRow.appendChild(delBtn);
      box.appendChild(headRow);

      var taLab = document.createElement("label");
      taLab.className = "admin-gap-words-label";
      taLab.textContent = "Слова (запятая или новая строка). Для сохранения сортируются по алфавиту в слоты A–D.";
      var ta = document.createElement("textarea");
      ta.className = "admin-gap-words-input";
      ta.rows = 4;
      ta.setAttribute("spellcheck", "true");
      ta.setAttribute("autocomplete", "off");
      ta.value = itemToWordsTextareaLines(it);
      taLab.setAttribute("for", "adm-gap-words-" + num);
      ta.id = "adm-gap-words-" + num;
      box.appendChild(taLab);
      box.appendChild(ta);

      var btnRow = document.createElement("div");
      btnRow.className = "admin-gap-btn-row";
      var shufBtn = document.createElement("button");
      shufBtn.type = "button";
      shufBtn.className = "btn-muted admin-gap-reshuffle-btn";
      shufBtn.textContent = "Перемешать показ";
      shufBtn.title = "Новый случайный порядок букв A, B, C… как у ученика";
      var sortTaBtn = document.createElement("button");
      sortTaBtn.type = "button";
      sortTaBtn.className = "btn-muted admin-gap-sort-list-btn";
      sortTaBtn.textContent = "Упорядочить список";
      sortTaBtn.title = "Отсортировать строки в поле по алфавиту";
      btnRow.appendChild(shufBtn);
      btnRow.appendChild(sortTaBtn);
      box.appendChild(btnRow);

      var prevLab = document.createElement("div");
      prevLab.className = "admin-gap-preview-label";
      prevLab.textContent = "Как увидит ученик (выбери верный):";
      box.appendChild(prevLab);
      var prev = document.createElement("div");
      prev.className = "admin-gap-shuffled-preview";
      box.appendChild(prev);

      function currentCorrectFromRadios() {
        var r = box.querySelector('.admin-gap-shuffled-preview input[type="radio"]:checked');
        return r ? String(r.value) : "";
      }

      function refreshPreview(keepCorrectWord) {
        var keep = keepCorrectWord || currentCorrectFromRadios() || correctWordFromItem(it);
        rebuildGapShuffledPreview(box, keep);
      }

      ta.addEventListener("input", function () {
        refreshPreview(currentCorrectFromRadios() || correctWordFromItem(it));
      });
      shufBtn.addEventListener("click", function () {
        refreshPreview(currentCorrectFromRadios());
        scheduleLivePreview();
      });
      sortTaBtn.addEventListener("click", function () {
        var u = uniqueAdminWords(parseAdminWordsPaste(ta.value));
        u.sort(function (a, b) {
          return a.localeCompare(b, undefined, { sensitivity: "base" });
        });
        ta.value = u.join("\n");
        refreshPreview(currentCorrectFromRadios());
        scheduleLivePreview();
      });
      prev.addEventListener("change", function () {
        scheduleLivePreview();
      });

      refreshPreview(correctWordFromItem(it));
      admGapsWrap.appendChild(box);
    });
    scheduleLivePreview();
  }

  function jumpToGapEditor(numStr) {
    if (!hasAdminDom) return;
    var n = parseInt(numStr, 10);
    if (!isFinite(n) || n < 1) return;
    var qnums = questionNumsInDocumentOrder(admPassage.value);
    var idx = qnums.indexOf(n);
    if (idx < 0) return;
    var box = admGapsWrap.children[idx];
    if (!box) return;
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
    box.classList.add("gap-editor--flash");
    window.setTimeout(function () {
      box.classList.remove("gap-editor--flash");
    }, 1400);
    var ta = box.querySelector(".admin-gap-words-input");
    if (ta) {
      ta.focus();
      return;
    }
  }

  function addGapFromWordClick(absStart, absEnd, word) {
    if (!hasAdminDom) return;
    var w = String(word || "").trim();
    if (!w) return;
    var draft = readDraftFromDom();
    var oldPass = draft.passage;
    var oldQ = questionNumsFromPassage(oldPass);
    if (absStart < 0 || absEnd > oldPass.length || absStart >= absEnd) return;
    var nextN = nextFreeQuestionNum(oldQ);
    var newPass = oldPass.slice(0, absStart) + "[[" + nextN + "]]" + oldPass.slice(absEnd);
    admPassage.value = newPass;
    var newQ = questionNumsInDocumentOrder(newPass);
    var oldDoc = questionNumsInDocumentOrder(oldPass);
    var merged = [];
    for (var i = 0; i < newQ.length; i++) {
      var num = newQ[i];
      var jDoc = oldDoc.indexOf(num);
      if (num === nextN) {
        var ri = Math.floor(Math.random() * 4);
        var ro = ["", "", "", ""];
        ro[ri] = w;
        merged.push({ options: ro, correctIndex: ri });
      } else if (jDoc >= 0 && draft.items[jDoc]) {
        var rowKeep = {
          options: draft.items[jDoc].options.slice(),
          correctIndex: draft.items[jDoc].correctIndex
        };
        attachExplainFields(rowKeep, draft.items[jDoc]);
        merged.push(rowKeep);
      } else {
        merged.push({ options: ["", "", "", ""], correctIndex: 0 });
      }
    }
    adminRenderGapEditors(merged);
    adminRenderPassageInteractive();
  }

  function adminRenderPassageInteractive() {
    var el = document.getElementById("admPassageVisual");
    if (!el || !hasAdminDom) return;
    var passage = admPassage.value;
    el.innerHTML = "";
    var parts = passage.split(/(\[\[\d+\]\])/g);
    var globalOffset = 0;
    for (var pi = 0; pi < parts.length; pi++) {
      var part = parts[pi];
      var mm = part.match(/^\[\[(\d+)\]\]$/);
      if (mm) {
        var gLabel = mm[1] === "0" ? "0" : mm[1];
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "adm-gap-chip" + (mm[1] === "0" ? " adm-gap-chip--ex" : "");
        chip.textContent = "[" + gLabel + "]";
        chip.title = mm[1] === "0" ? "Пример [[0]]" : "К вопросу " + mm[1] + ": ввести неверные варианты";
        if (mm[1] !== "0") {
          chip.setAttribute("data-gap-num", mm[1]);
          chip.addEventListener("click", function (ev) {
            jumpToGapEditor(ev.currentTarget.getAttribute("data-gap-num"));
          });
        }
        el.appendChild(chip);
        globalOffset += part.length;
        continue;
      }
      var re = /[A-Za-z]+(?:'[A-Za-z]+)?/g;
      var last = 0;
      var m;
      while ((m = re.exec(part)) !== null) {
        if (m.index > last) {
          el.appendChild(document.createTextNode(part.slice(last, m.index)));
        }
        var absA = globalOffset + m.index;
        var absB = globalOffset + re.lastIndex;
        var wordTxt = m[0];
        var wbtn = document.createElement("button");
        wbtn.type = "button";
        wbtn.className = "adm-word";
        wbtn.textContent = wordTxt;
        wbtn.title =
          "Сделать пропуск; «" + wordTxt + "» → верный ответ в случайной позиции A–D (кнопка «Перемешать A–D» — ещё раз)";
        (function (a0, a1, wt) {
          wbtn.addEventListener("click", function () {
            addGapFromWordClick(a0, a1, wt);
          });
        })(absA, absB, wordTxt);
        el.appendChild(wbtn);
        last = re.lastIndex;
      }
      if (last < part.length) {
        el.appendChild(document.createTextNode(part.slice(last)));
      }
      globalOffset += part.length;
    }
  }

  var admVisTimer = null;

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
    var qnums = questionNumsInDocumentOrder(data.passage);
    qnums.forEach(function (num, idx) {
      var box = admGapsWrap.children[idx];
      if (!box) {
        data.items.push({ options: ["", "", "", ""], correctIndex: 0 });
        return;
      }
      var ta = box.querySelector(".admin-gap-words-input");
      var words = uniqueAdminWords(parseAdminWordsPaste(ta ? ta.value : ""));
      var sortedSlots = sortedStorageSlotsFromWords(words);
      var r = box.querySelector('.admin-gap-shuffled-preview input[type="radio"]:checked');
      var correctW = r ? String(r.value).trim() : "";
      if (!correctW && sortedSlots[0]) correctW = sortedSlots[0];
      var ci = 0;
      var found = false;
      for (var j = 0; j < 4; j++) {
        if (sortedSlots[j] === correctW) {
          ci = j;
          found = true;
          break;
        }
      }
      if (!found && correctW) {
        for (var k = 0; k < 4; k++) {
          if (String(sortedSlots[k] || "").toLowerCase() === correctW.toLowerCase()) {
            ci = k;
            break;
          }
        }
      }
      data.items.push({ options: sortedSlots, correctIndex: ci });
    });
    var prevItems = state.exercise && Array.isArray(state.exercise.items) ? state.exercise.items : [];
    if (prevItems.length === data.items.length) {
      for (var exi = 0; exi < data.items.length; exi++) {
        attachExplainFields(data.items[exi], prevItems[exi]);
      }
    }
    return data;
  }

  if (hasAdminDom) {
    applyExerciseMetaLock();
    admPassage.addEventListener("blur", function () {
      var v = admPassage.value;
      var v2 = v.replace(/\((\d+)\)/g, "[[$1]]");
      if (v2 !== v) admPassage.value = v2;
      adminRenderGapEditors();
      adminRenderPassageInteractive();
    });
    admPassage.addEventListener("input", function () {
      window.clearTimeout(admVisTimer);
      admVisTimer = window.setTimeout(function () {
        try {
          var qn = questionNumsInDocumentOrder(admPassage.value);
          if (qn.length !== admGapsWrap.children.length) {
            adminRenderGapEditors();
          }
        } catch (eGap) {}
        adminRenderPassageInteractive();
        scheduleLivePreview();
      }, 180);
    });

    var admShell = document.querySelector(".admin-shell");
    if (admShell) {
      admShell.addEventListener("input", scheduleLivePreview);
      admShell.addEventListener("change", scheduleLivePreview);
    }
  }

  function setDataBanner(text, ok) {
    if (!admDataBanner) return;
    admDataBanner.innerHTML = text;
    admDataBanner.style.color = ok ? "#86efac" : "#fca5a5";
  }

  function publishExercise(data) {
    try {
      var toStore = exerciseForStorage(data);
      localStorage.setItem(STORAGE_PUBLISH_KEY, JSON.stringify(toStore));
      var autoDl =
        boot.saveAlsoDownloadsPublishedJson === true || /^prep-hub-/.test(contextId);
      if (autoDl) {
        try {
          downloadJson("published.json", toStore);
        } catch (eDl) {}
      }
      var localOk =
        "<strong>Сохранено.</strong> На этом устройстве открывается эта версия. " +
        (autoDl ? "Файл скачан — можно подложить в репозиторий при желании. " : "");
      var cloudW =
        typeof window.PrepCloudClient !== "undefined" &&
        PrepCloudClient.isWriteConfigured &&
        PrepCloudClient.isWriteConfigured();
      if (cloudW) {
        PrepCloudClient.pushExercise(contextId, toStore)
          .then(function () {
            setDataBanner(
              localOk + "<strong>Облако:</strong> по ссылке ученики видят эту опубликованную версию задания.",
              true
            );
          })
          .catch(function (err) {
            setDataBanner(
              localOk +
                "<strong>Облако не записалось:</strong> " +
                String((err && err.message) || err) +
                " (проверьте настройки публикации и секрет).",
              false
            );
          });
      } else {
        setDataBanner(
          localOk + "Для учеников без ручного выкладывания файла подключи облачную публикацию (настрой у разработчика).",
          true
        );
      }
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
        var prev = exerciseForStorage(data);
        localStorage.setItem(STORAGE_PUBLISH_KEY, JSON.stringify(prev));
        if (
          typeof window.PrepCloudClient !== "undefined" &&
          PrepCloudClient.isWriteConfigured &&
          PrepCloudClient.isWriteConfigured()
        ) {
          PrepCloudClient.pushExercise(contextId, prev).catch(function () {});
        }
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
      downloadJson("published.json", exerciseForStorage(data));
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
          setDataBanner("JSON загружен в форму. Нажми «Сохранить».", true);
        } catch (e) {
          setDataBanner("Файл не JSON или битый.", false);
        }
      };
      reader.readAsText(f, "UTF-8");
    });

    var btnRenumber = document.getElementById("btnAdmRenumberGaps");
    if (btnRenumber) {
      btnRenumber.addEventListener("click", function () {
        adminRenumberGapsPassageAndItems(null);
        setDataBanner("Пропуски перенумерованы подряд [[1]]…[[N]] (порядок вариантов сохранён).", true);
      });
    }

    document.getElementById("btnAdmReset").addEventListener("click", function () {
      var d = adminBlankExerciseTemplate();
      adminFillFromData(d);
      try {
        localStorage.removeItem(STORAGE_PUBLISH_KEY);
        if (contextId === "unit12-part1-sedentary") {
          localStorage.removeItem(LEGACY_STORAGE);
        }
      } catch (e) {}
      setDataBanner("Сброшен черновик в редакторе. Заполните текст и варианты, затем Сохранить.", true);
    });
  }

  function resolveSessionExercisePayload() {
    var sk = sp.get("sessionKey");
    if (sk) {
      try {
        var rawS = sessionStorage.getItem(sk);
        if (rawS) return JSON.parse(rawS);
      } catch (eS) {}
    }
    return null;
  }

  /** Встроенный JSON (например unit9 interior) или #id из boot.embeddedDataScriptId. */
  function readEmbeddedExercisePayload() {
    if (unit9InteriorHardwired) {
      var elU9 = document.getElementById("part1-mc-bundled-unit9-interior");
      if (elU9) {
        try {
          return JSON.parse(elU9.textContent.trim());
        } catch (eU9) {
          return null;
        }
      }
    }
    if (unit9ArtisticTalentHardwired) {
      var elAt = document.getElementById("part1-mc-bundled-unit9-artistic-talent");
      if (elAt) {
        try {
          return JSON.parse(elAt.textContent.trim());
        } catch (eAt) {
          return null;
        }
      }
    }
    if (unit9PisaHardwired) {
      var elPi = document.getElementById("part1-mc-bundled-unit9-pisa");
      if (elPi) {
        try {
          return JSON.parse(elPi.textContent.trim());
        } catch (ePi) {
          return null;
        }
      }
    }
    if (unit9SolvingMysteryHardwired) {
      var elSm = document.getElementById("part1-mc-bundled-unit9-solving-mystery");
      if (elSm) {
        try {
          return JSON.parse(elSm.textContent.trim());
        } catch (eSm) {
          return null;
        }
      }
    }
    if (unit8UoeSevilleBundled) {
      var elU8s = document.getElementById("part1-mc-bundled-unit8-seville");
      if (elU8s) {
        try {
          return JSON.parse(elU8s.textContent.trim());
        } catch (eU8s) {
          return null;
        }
      }
    }
    if (unit10ExAthleteBundled) {
      var el10ex = document.getElementById("part1-mc-bundled-unit10-ex-athlete");
      if (el10ex) {
        try {
          return JSON.parse(el10ex.textContent.trim());
        } catch (e10ex) {
          return null;
        }
      }
    }
    if (unit5UoeBundled) {
      var el5sj = document.getElementById("part1-mc-bundled-unit5-summer-jobs");
      if (el5sj) {
        try {
          return JSON.parse(el5sj.textContent.trim());
        } catch (e5sj) {
          return null;
        }
      }
    }
    if (String(contextId) === "unit12-part1-sedentary") {
      var el12 = document.getElementById("part1-mc-bundled-unit12-sedentary");
      if (el12) {
        try {
          return JSON.parse(el12.textContent.trim());
        } catch (e12) {
          return null;
        }
      }
    }
    var bid = boot.embeddedDataScriptId;
    if (bid) {
      var elId = document.getElementById(String(bid));
      if (elId) {
        try {
          return JSON.parse(elId.textContent.trim());
        } catch (eId) {
          return null;
        }
      }
    }
    return null;
  }

  /** Встроенный в страницу JSON для unit9 / unit10 / unit12, если fetch недоступен (file:// и т.д.). */
  function readBundledPublishedFallback() {
    return readEmbeddedExercisePayload();
  }

  function loadPublishedFileThenFallback() {
    var url = publishedFetchUrl();
    var fetchCache = boxedSite ? "default" : "no-store";
    var tryCloud = boxedSite
      ? Promise.resolve(null)
      : typeof window.PrepCloudClient !== "undefined" && PrepCloudClient.pullExercise
        ? PrepCloudClient.pullExercise(contextId).then(function (row) {
            return row && row.data ? row.data : null;
          })
        : Promise.resolve(null);
    return tryCloud.then(function (cloudData) {
      if (cloudData) return cloudData;
      return fetch(url, { cache: fetchCache })
        .then(function (r) {
          if (!r.ok) throw new Error("no file");
          return r.json();
        })
        .catch(function () {
          var loc = readLocalPublished();
          if (loc) return loc;
          var bundled = readBundledPublishedFallback();
          if (bundled) return bundled;
          return null;
        });
    });
  }

  /** Ученик и Preview: сессия → сеть → опубликованный localStorage → шаблон. */
  function mergeLoadOrderStudent() {
    var sess = resolveSessionExercisePayload();
    if (sess) return Promise.resolve(sess);
    if (useEmbeddedExercise) {
      var emb = readEmbeddedExercisePayload();
      if (emb) return Promise.resolve(emb);
      return Promise.resolve(null);
    }
    return loadPublishedFileThenFallback();
  }

  /** Режим Edit: сессия CMS → как у ученика (файл / опубликованный слой / шаблон). Без автосейва черновика. */
  function mergeLoadOrderAdmin() {
    var sess = resolveSessionExercisePayload();
    if (sess) return Promise.resolve(sess);
    return loadPublishedFileThenFallback();
  }

  (isAdmin && hasAdminDom ? mergeLoadOrderAdmin() : mergeLoadOrderStudent()).then(function (data) {
    if (isAdmin && hasAdminDom) {
      if (!data) {
        adminFillFromData(adminBlankExerciseTemplate());
        setDataBanner(
          "Файл задания не найден или недоступен. Заполните форму или импортируйте published.json.",
          false
        );
        return;
      }
      adminFillFromData(deepClone(data));
      try {
        var hasPub = !!readLocalPublished();
        setDataBanner(
          "После <strong>«Сохранить»</strong> фиксируется версия для учеников (облако, если настроено; иначе файл и localStorage). " +
            (hasPub ? "На этом устройстве уже есть опубликованная копия." : ""),
          true
        );
      } catch (e) {
        setDataBanner("", true);
      }
    } else {
      if (!data) {
        showStudentExerciseLoadFailed();
        return;
      }
      var forStudent = deepClone(data);
      forStudent.items = alignItemsToDocumentPassage(forStudent.passage || "", forStudent.items || []);
      if (renderStudent(forStudent)) {
        wirePart1ChainNext();
      }
    }
  });

})();
