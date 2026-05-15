/**
 * ЕГЭ Reading — Multiple Choice по тексту: словарь (фразы), улики/дистракторы после проверки.
 */
(function () {
  var root = document.getElementById("ege-mcr-app");
  if (!root) return;

  var pack = window.__EGE_READING_MC__;
  var units = pack && pack.units;
  if (!units || !units.length) {
    root.innerHTML =
      '<p class="ege-mcr-error">Задание не загрузилось. Обновите страницу (F5).</p>';
    return;
  }

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
  var checked = false;
  var tapModeActive = false;
  var tapPhraseCache = null;
  var dictDocBound = false;

  function storageKeyAns() {
    return "ege_mcr_ans_" + U.id;
  }

  function storageKeyTap() {
    return "ege_mcr_tap_" + U.id;
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function phraseOnlyLex() {
    return U.tapPhrases && U.tapPhrases.length && !(U.tapLexicon && U.tapLexicon.length);
  }

  function hasQuickPhrases() {
    return U.quickPhrases && U.quickPhrases.length > 0;
  }

  function hasTapPhrases() {
    return U.tapPhrases && U.tapPhrases.length > 0;
  }

  function hasQuickDict() {
    return hasQuickPhrases() || hasTapPhrases() || (U.tapLexicon && U.tapLexicon.length);
  }

  function getPara(pid) {
    var i;
    for (i = 0; i < U.paragraphs.length; i++) {
      if (U.paragraphs[i].n === pid) return U.paragraphs[i];
    }
    return null;
  }

  function unitHasEvidence() {
    var i;
    var ev;
    for (i = 0; i < U.paragraphs.length; i++) {
      ev = U.paragraphs[i].evidence;
      if (
        ev &&
        ((ev.support && ev.support.length) || (ev.distract && ev.distract.length))
      ) {
        return true;
      }
    }
    return false;
  }

  function getTapPhraseSorted() {
    if (tapPhraseCache) return tapPhraseCache;
    var raw = U.tapPhrases || [];
    tapPhraseCache = raw.slice().sort(function (a, b) {
      return String(b.en || "").length - String(a.en || "").length;
    });
    return tapPhraseCache;
  }

  /** Сверяем фразы с текстом независимо от «умных» кавычек и апострофов. */
  function normalizeTapText(s) {
    return String(s || "")
      .replace(/\u2019|\u2018/g, "'")
      .replace(/\u201c|\u201d/g, '"')
      .replace(/\u2013|\u2014/g, "-");
  }

  function collectPhraseMatches(text, sortedPhrases) {
    var s = normalizeTapText(String(text));
    var all = [];
    var i;
    var pair;
    var needle;
    var re;
    var m;
    var escNeedle;
    for (i = 0; i < sortedPhrases.length; i++) {
      pair = sortedPhrases[i];
      needle = normalizeTapText(String(pair.en || ""));
      if (!needle) continue;
      escNeedle = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      try {
        re = new RegExp(escNeedle, "gi");
      } catch (e0) {
        continue;
      }
      re.lastIndex = 0;
      while ((m = re.exec(s)) !== null) {
        if (!m[0].length) {
          if (re.lastIndex === m.index) re.lastIndex++;
          else break;
          continue;
        }
        all.push({
          start: m.index,
          end: m.index + m[0].length,
          ru: String(pair.ru || "")
        });
      }
    }
    all.sort(function (a, b) {
      if (a.start !== b.start) return a.start - b.start;
      return b.end - b.start - (a.end - a.start);
    });
    var picked = [];
    var lastEnd = -1;
    var j;
    var x;
    for (j = 0; j < all.length; j++) {
      x = all[j];
      if (x.start >= lastEnd) {
        picked.push(x);
        lastEnd = x.end;
      }
    }
    return picked;
  }

  function wrapPlainTokens(fragment, map) {
    var re = /[A-Za-z]+(?:[-'][A-Za-z]+)*|[^A-Za-z]+/g;
    var html = "";
    var m;
    var t;
    var ru;
    map = map || {};
    re.lastIndex = 0;
    while ((m = re.exec(fragment)) !== null) {
      t = m[0];
      if (/^[A-Za-z]/.test(t)) {
        ru = map[t.toLowerCase()];
        if (ru) {
          html +=
            '<span class="ege-mh-wtap" tabindex="0" role="button" data-ru="' +
            esc(ru) +
            '">' +
            esc(t) +
            "</span>";
        } else {
          html += esc(t);
        }
      } else {
        html += esc(t);
      }
    }
    return html;
  }

  function getTapLexMap() {
    var map = {};
    if (phraseOnlyLex()) return map;
    var i;
    var pair;
    var k;
    var list = U.tapLexicon || [];
    for (i = 0; i < list.length; i++) {
      pair = list[i];
      k = String(pair.en || "")
        .toLowerCase()
        .trim();
      if (k) map[k] = String(pair.ru || "");
    }
    return map;
  }

  function wrapTapRichHTML(text) {
    var s = String(text || "");
    var sNorm = normalizeTapText(s);
    var map = phraseOnlyLex() ? {} : getTapLexMap();
    var sortedPhrases = getTapPhraseSorted();
    var picked =
      sortedPhrases.length > 0 ? collectPhraseMatches(sNorm, sortedPhrases) : [];
    var html = "";
    var pos = 0;
    var pi;
    var p;
    for (pi = 0; pi < picked.length; pi++) {
      p = picked[pi];
      if (p.start > pos) {
        html += wrapPlainTokens(s.slice(pos, p.start), map);
      }
      html +=
        '<span class="ege-mh-wtap ege-mh-wtap--phrase" tabindex="0" role="button" data-ru="' +
        esc(p.ru) +
        '">' +
        esc(s.slice(p.start, p.end)) +
        "</span>";
      pos = p.end;
    }
    if (pos < s.length) {
      html += wrapPlainTokens(s.slice(pos), map);
    }
    return html;
  }

  function buildHighlightedHtml(text, evidence) {
    if (!evidence) return esc(text);
    var support = evidence.support || [];
    var dirst = evidence.distract || [];
    var candidates = [];
    var si;
    var di;
    var idx;
    for (si = 0; si < support.length; si++) {
      idx = text.indexOf(support[si]);
      if (idx >= 0) {
        candidates.push({
          start: idx,
          end: idx + support[si].length,
          kind: "support"
        });
      }
    }
    for (di = 0; di < dirst.length; di++) {
      idx = text.indexOf(dirst[di]);
      if (idx >= 0) {
        candidates.push({
          start: idx,
          end: idx + dirst[di].length,
          kind: "distract"
        });
      }
    }
    if (!candidates.length) return esc(text);

    candidates.sort(function (a, b) {
      return b.end - b.start - (a.end - a.start);
    });
    var picked = [];
    var k;
    var c;
    var overlaps;
    for (k = 0; k < candidates.length; k++) {
      c = candidates[k];
      overlaps = picked.some(function (p) {
        return !(c.end <= p.start || c.start >= p.end);
      });
      if (!overlaps) picked.push(c);
    }
    picked.sort(function (a, b) {
      return a.start - b.start;
    });

    var out = "";
    var pos = 0;
    var p;
    var it;
    var slice;
    var cls;
    for (p = 0; p < picked.length; p++) {
      it = picked[p];
      if (it.start > pos) out += esc(text.slice(pos, it.start));
      slice = text.slice(it.start, it.end);
      cls =
        it.kind === "support"
          ? "ege-mh-ev ege-mh-ev--ok"
          : "ege-mh-ev ege-mh-ev--distract";
      out += '<mark class="' + cls + '">' + esc(slice) + "</mark>";
      pos = it.end;
    }
    if (pos < text.length) out += esc(text.slice(pos));
    return out;
  }

  function refreshPassageDisplay() {
    var huntToggleEl = document.getElementById("ege-mcr-hunt-toggle");
    var wantHunt =
      checked &&
      unitHasEvidence() &&
      huntToggleEl &&
      huntToggleEl.checked;

    root.querySelectorAll(".ege-mcr-para-text").forEach(function (el) {
      var pid = parseInt(el.getAttribute("data-pid"), 10);
      var para = getPara(pid);
      if (!para) return;

      if (tapModeActive && hasTapPhrases()) {
        el.innerHTML = wrapTapRichHTML(para.text);
        return;
      }

      if (wantHunt && para.evidence) {
        var ev = para.evidence;
        if (
          (ev.support && ev.support.length) ||
          (ev.distract && ev.distract.length)
        ) {
          el.innerHTML = buildHighlightedHtml(para.text, ev);
          return;
        }
      }

      el.textContent = para.text;
    });
  }

  function closeWtip() {
    var tip = document.getElementById("ege-mcr-wtip");
    if (tip) tip.hidden = true;
  }

  function showWtip(target) {
    var tip = document.getElementById("ege-mcr-wtip");
    if (!tip) return;
    var ru = target.getAttribute("data-ru");
    if (ru == null) return;
    tip.innerHTML =
      '<strong class="ege-mh-wtip-en">' +
      esc(target.textContent) +
      "</strong>" +
      '<span class="ege-mh-wtip-ru">' +
      esc(ru) +
      "</span>";
    tip.hidden = false;
    var r = target.getBoundingClientRect();
    var top = r.bottom + 8;
    var left = Math.max(8, Math.min(r.left, window.innerWidth - 268));
    if (top + 130 > window.innerHeight) {
      top = Math.max(8, r.top - 130);
    }
    tip.style.top = top + "px";
    tip.style.left = left + "px";
  }

  function openDictDrawer() {
    var backdrop = document.getElementById("ege-mcr-dict-backdrop");
    var drawer = document.getElementById("ege-mcr-dict-drawer");
    var fab = document.getElementById("ege-mcr-dict-fab");
    document.body.classList.add("ege-mh--dict-open");
    if (backdrop) {
      backdrop.hidden = false;
      backdrop.setAttribute("aria-hidden", "false");
    }
    if (drawer) {
      drawer.classList.add("is-visible");
      drawer.setAttribute("aria-hidden", "false");
    }
    if (fab) fab.setAttribute("aria-expanded", "true");
  }

  function closeDictDrawer() {
    var backdrop = document.getElementById("ege-mcr-dict-backdrop");
    var drawer = document.getElementById("ege-mcr-dict-drawer");
    var fab = document.getElementById("ege-mcr-dict-fab");
    document.body.classList.remove("ege-mh--dict-open");
    if (backdrop) {
      backdrop.hidden = true;
      backdrop.setAttribute("aria-hidden", "true");
    }
    if (drawer) {
      drawer.classList.remove("is-visible");
      drawer.setAttribute("aria-hidden", "true");
    }
    if (fab) fab.setAttribute("aria-expanded", "false");
  }

  function toggleDictDrawer() {
    var drawer = document.getElementById("ege-mcr-dict-drawer");
    if (drawer && drawer.classList.contains("is-visible")) closeDictDrawer();
    else openDictDrawer();
  }

  function bindDictDocEvents() {
    if (dictDocBound) return;
    dictDocBound = true;
    root.addEventListener("click", function (ev) {
      var t = ev.target;
      if (t && t.closest && t.closest(".ege-mh-wtap")) {
        showWtip(t.closest(".ege-mh-wtap"));
        ev.preventDefault();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      closeWtip();
      var drawer = document.getElementById("ege-mcr-dict-drawer");
      if (drawer && drawer.classList.contains("is-visible")) closeDictDrawer();
    });
    document.addEventListener("click", function (e) {
      var tip = document.getElementById("ege-mcr-wtip");
      if (!tip || tip.hidden) return;
      if (e.target.closest && e.target.closest(".ege-mh-wtip")) return;
      if (e.target.closest && e.target.closest(".ege-mh-wtap")) return;
      closeWtip();
    });
  }

  function loadStoredTap() {
    tapModeActive = false;
    if (!hasTapPhrases()) return;
    try {
      if (sessionStorage.getItem(storageKeyTap()) === "1") tapModeActive = true;
    } catch (e1) {}
  }

  function setTapMode(on) {
    if (checked) {
      tapModeActive = false;
      var t1 = document.getElementById("ege-mcr-tap-toggle");
      if (t1) t1.checked = false;
      return;
    }
    tapModeActive = !!on;
    try {
      if (tapModeActive) sessionStorage.setItem(storageKeyTap(), "1");
      else sessionStorage.removeItem(storageKeyTap());
    } catch (e2) {}
    var t2 = document.getElementById("ege-mcr-tap-toggle");
    if (t2) t2.checked = tapModeActive;
    refreshPassageDisplay();
  }

  function initDictUi() {
    var dm = document.getElementById("ege-mcr-dict-mount");
    if (!dm) return;
    tapPhraseCache = null;
    if (!hasQuickDict()) {
      dm.innerHTML = "";
      dm.hidden = true;
      return;
    }
    dm.hidden = false;
    dm.innerHTML =
      '<button type="button" class="ex3-dict-fab" id="ege-mcr-dict-fab" aria-controls="ege-mcr-dict-drawer" aria-expanded="false">' +
      '<span class="ex3-dict-fab-text"><span class="ex3-dict-fab-line">Быстрый</span><span class="ex3-dict-fab-line">словарь</span></span></button>' +
      '<div class="ex3-dict-backdrop" id="ege-mcr-dict-backdrop" hidden aria-hidden="true"></div>' +
      '<div class="ex3-dict-drawer" id="ege-mcr-dict-drawer" aria-hidden="true">' +
      '<div class="ex3-dict-drawer-head"><span>Быстрый словарь</span>' +
      '<button type="button" class="ex3-dict-drawer-x" id="ege-mcr-dict-close" aria-label="Закрыть">×</button></div>' +
      '<div class="ex3-dict-drawer-body"><div class="ege-mh-dict-body-inner">' +
      '<div id="ege-mcr-dict-phrases-wrap" class="ege-mh-dict-phrases-wrap"></div>' +
      '<div id="ege-mcr-dict-tap-wrap" class="ege-mh-dict-tap-wrap"></div>' +
      "</div></div></div>" +
      '<div id="ege-mcr-wtip" class="ege-mh-wtip" hidden></div>';

    var phrasesW = document.getElementById("ege-mcr-dict-phrases-wrap");
    var tapW = document.getElementById("ege-mcr-dict-tap-wrap");
    if (phrasesW) {
      if (hasQuickPhrases()) {
        var dl = '<dl class="ege-mh-dict-dl">';
        var qi;
        for (qi = 0; qi < U.quickPhrases.length; qi++) {
          dl +=
            "<dt>" +
            esc(U.quickPhrases[qi].en) +
            "</dt><dd>" +
            esc(U.quickPhrases[qi].ru) +
            "</dd>";
        }
        dl += "</dl>";
        phrasesW.innerHTML =
          '<h3 class="ege-mh-dict-sub">Важные фразы (must-have)</h3>' + dl;
      } else {
        phrasesW.innerHTML = "";
      }
    }
    if (tapW) {
      if (hasTapPhrases()) {
        var tapHint = phraseOnlyLex()
          ? '<p class="ege-mh-dict-hint">Кликабельны <strong>только целые фразы</strong> из списка в тексте. После «Проверить» режим отключается, чтобы показать <strong>улики (зелёный)</strong> и <strong>дистракторы (розовый)</strong>.</p>'
          : '<p class="ege-mh-dict-hint">Фразы и отдельные слова из лексикона. После проверки включаются подсказки в тексте.</p>';
        tapW.innerHTML =
          '<h3 class="ege-mh-dict-sub">Фразы для клика по тексту</h3>' +
          '<label class="ege-mh-dict-tap-label"><input type="checkbox" id="ege-mcr-tap-toggle" /> Клик по фразам — перевод</label>' +
          tapHint;
        loadStoredTap();
        var tapCb = document.getElementById("ege-mcr-tap-toggle");
        if (tapCb) {
          tapCb.checked = tapModeActive;
          tapCb.addEventListener("change", function () {
            if (checked) {
              tapCb.checked = false;
              return;
            }
            setTapMode(tapCb.checked);
          });
        }
      } else {
        tapW.innerHTML = "";
      }
    }

    var fab = document.getElementById("ege-mcr-dict-fab");
    var backdrop = document.getElementById("ege-mcr-dict-backdrop");
    var closeB = document.getElementById("ege-mcr-dict-close");
    if (fab) fab.addEventListener("click", toggleDictDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDictDrawer);
    if (closeB) closeB.addEventListener("click", closeDictDrawer);
  }

  function renderStatsBar() {
    var el = document.getElementById("ege-mcr-stats");
    if (!el || !window.__egeReadingMcStats || typeof window.__egeReadingMcStats.getUnitStats !== "function") {
      return;
    }
    var st = window.__egeReadingMcStats.getUnitStats(U.id);
    if (!st) {
      el.innerHTML = "";
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.innerHTML =
      '<span class="ege-mcr-stats-inner">Попыток: <strong>' +
      st.attempts +
      "</strong>. Лучший результат: <strong>" +
      st.best +
      "%</strong>, последний: <strong>" +
      st.last +
      '%</strong>. <a href="ege-statistics.html">Statistics hub</a></span>';
  }

  function saveAnswers() {
    var o = {};
    U.questions.forEach(function (q) {
      var sel = root.querySelector('input[name="q' + q.examNum + '"]:checked');
      o[q.examNum] = sel ? parseInt(sel.value, 10) : null;
    });
    try {
      sessionStorage.setItem(storageKeyAns(), JSON.stringify(o));
    } catch (e1) {}
  }

  function loadAnswers() {
    var raw;
    try {
      raw = sessionStorage.getItem(storageKeyAns());
    } catch (e1) {
      return;
    }
    if (!raw) return;
    var o;
    try {
      o = JSON.parse(raw);
    } catch (e2) {
      return;
    }
    if (!o || typeof o !== "object") return;
    U.questions.forEach(function (q) {
      var v = o[q.examNum];
      if (v == null) return;
      var inp = root.querySelector(
        'input[name="q' + q.examNum + '"][value="' + v + '"]'
      );
      if (inp) inp.checked = true;
    });
  }

  function choiceText(q, num) {
    var i;
    for (i = 0; i < q.choices.length; i++) {
      if (q.choices[i].num === num) return q.choices[i].text;
    }
    return "";
  }

  function render() {
    var html = "";
    var ord = typeof U.unitOrder === "number" ? U.unitOrder : unitIndex + 1;
    html += '<div class="ege-mcr-toolbar">';
    html += '<span class="ege-mh-unit-pill">Юнит ' + esc(String(ord)) + "</span>";
    html += '<span class="ege-mcr-title">' + esc(U.title || "") + "</span>";
    if (units.length > 1) {
      html +=
        '<label class="ege-mcr-unit-sel">Пакет <select id="ege-mcr-unit-jump" class="ege-mh-unit-jump">';
      var uu;
      for (uu = 0; uu < units.length; uu++) {
        html +=
          '<option value="' +
          esc(units[uu].id) +
          '"' +
          (uu === unitIndex ? " selected" : "") +
          ">" +
          esc(units[uu].title || units[uu].id) +
          "</option>";
      }
      html += "</select></label>";
    }
    html += "</div>";

    html += '<div id="ege-mcr-stats" class="ege-mcr-stats" hidden></div>';

    if (U.instructionHtml) {
      html +=
        '<div class="ege-mcr-instr">' + U.instructionHtml + "</div>";
    }

    html += '<div class="ege-mcr-split">';

    html += '<div class="ege-mcr-col ege-mcr-col--passage">';
    html += '<article class="ege-mcr-passage">';
    var pi;
    var para;
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      para = U.paragraphs[pi];
      html += '<div class="ege-mcr-para">';
      html +=
        '<span class="ege-mcr-para-num" aria-label="Абзац ' +
        para.n +
        '">' +
        para.n +
        "</span>";
      html +=
        '<div class="ege-mcr-para-text" data-pid="' +
        para.n +
        '"></div></div>';
    }
    html += "</article>";
    html += '<div id="ege-mcr-hunt-bar" class="ege-mcr-hunt-bar" hidden>';
    html +=
      '<label class="ege-mcr-hunt-label"><input type="checkbox" id="ege-mcr-hunt-toggle" checked /> ';
    html +=
      "<strong>Evidence hunt / distractor hunt:</strong> зелёным — опорные фразы к ответам, розовым — типичные «соблазны» в том же фрагменте.";
    html += "</label></div>";
    html += "</div>";

    html += '<div class="ege-mcr-col ege-mcr-col--tasks">';
    html +=
      '<section class="ege-mcr-questions"><h2 class="ege-mcr-qh">Questions</h2>';
    var qi;
    var q;
    var ci;
    var ch;
    for (qi = 0; qi < U.questions.length; qi++) {
      q = U.questions[qi];
      html += '<fieldset class="ege-mcr-q" data-exam="' + q.examNum + '">';
      html +=
        '<legend class="ege-mcr-legend">' +
        esc(String(q.examNum)) +
        "</legend>";
      html += '<p class="ege-mcr-prompt">' + q.prompt + "</p>";
      html += '<div class="ege-mcr-opts">';
      for (ci = 0; ci < q.choices.length; ci++) {
        ch = q.choices[ci];
        var id = "q" + q.examNum + "_" + ch.num;
        html +=
          '<label class="ege-mcr-opt"><input type="radio" name="q' +
          q.examNum +
          '" value="' +
          ch.num +
          '" id="' +
          id +
          '" /> ' +
          "<span>" +
          esc(String(ch.num)) +
          ") " +
          esc(ch.text) +
          "</span></label>";
      }
      html += "</div>";
      html +=
        '<div class="ege-mcr-explain" data-expl="' +
        q.examNum +
        '" hidden></div>';
      html += "</fieldset>";
    }
    html += "</section>";

    html += '<div class="ege-mcr-actions">';
    html +=
      '<button type="button" class="ege-mcr-btn ege-mcr-btn--primary" id="ege-mcr-check">Проверить</button>';
    html +=
      '<button type="button" class="ege-mcr-btn" id="ege-mcr-reset">Сбросить</button>';
    html += "</div>";

    html += '<div id="ege-mcr-summary" class="ege-mcr-summary" hidden></div>';

    html += "</div>";

    html += "</div>";

    root.innerHTML = html;

    for (pi = 0; pi < U.paragraphs.length; pi++) {
      para = U.paragraphs[pi];
      var node = root.querySelector('.ege-mcr-para-text[data-pid="' + para.n + '"]');
      if (node) node.textContent = para.text;
    }

    var jump = document.getElementById("ege-mcr-unit-jump");
    if (jump) {
      jump.addEventListener("change", function () {
        var v = jump.value;
        if (v) location.search = "?unit=" + encodeURIComponent(v);
      });
    }

    root.querySelectorAll('.ege-mcr-q input[type="radio"]').forEach(function (inp) {
      inp.addEventListener("change", function () {
        if (checked) return;
        saveAnswers();
      });
    });

    document.getElementById("ege-mcr-check").addEventListener("click", onCheck);
    document.getElementById("ege-mcr-reset").addEventListener("click", onReset);

    var ht = document.getElementById("ege-mcr-hunt-toggle");
    if (ht) {
      ht.addEventListener("change", function () {
        if (!checked) return;
        refreshPassageDisplay();
      });
    }

    initDictUi();
    bindDictDocEvents();
    loadAnswers();
    loadStoredTap();
    var tapCb0 = document.getElementById("ege-mcr-tap-toggle");
    if (tapCb0) tapCb0.checked = tapModeActive;
    refreshPassageDisplay();
    renderStatsBar();
  }

  function onReset() {
    checked = false;
    root.querySelectorAll(".ege-mcr-opt").forEach(function (lab) {
      lab.classList.remove(
        "ege-mcr-opt--key",
        "ege-mcr-opt--user",
        "ege-mcr-opt--user-wrong"
      );
    });
    root.querySelectorAll(".ege-mcr-explain").forEach(function (el) {
      el.hidden = true;
      el.innerHTML = "";
    });
    root.querySelectorAll(".ege-mcr-q").forEach(function (fs) {
      fs.classList.remove("ege-mcr-q--ok", "ege-mcr-q--bad");
    });
    var hb = document.getElementById("ege-mcr-hunt-bar");
    if (hb) hb.hidden = true;
    var ht = document.getElementById("ege-mcr-hunt-toggle");
    if (ht) ht.checked = true;
    try {
      sessionStorage.removeItem(storageKeyAns());
    } catch (e1) {}
    loadStoredTap();
    var tapCbR = document.getElementById("ege-mcr-tap-toggle");
    if (tapCbR) tapCbR.checked = tapModeActive;
    var sum = document.getElementById("ege-mcr-summary");
    if (sum) {
      sum.hidden = true;
      sum.innerHTML = "";
    }
    refreshPassageDisplay();
  }

  function onCheck() {
    var unanswered = [];
    U.questions.forEach(function (q) {
      var sel = root.querySelector('input[name="q' + q.examNum + '"]:checked');
      if (!sel) unanswered.push(q.examNum);
    });
    if (unanswered.length) {
      alert("Отметь ответ по каждому номеру: " + unanswered.join(", ") + ".");
      return;
    }

    checked = true;
    tapModeActive = false;
    try {
      sessionStorage.removeItem(storageKeyTap());
    } catch (eT) {}
    var tapCb = document.getElementById("ege-mcr-tap-toggle");
    if (tapCb) tapCb.checked = false;

    saveAnswers();

    var ok = 0;
    U.questions.forEach(function (q) {
      var sel = root.querySelector('input[name="q' + q.examNum + '"]:checked');
      var v = sel ? parseInt(sel.value, 10) : 0;
      var isOk = v === q.key;
      if (isOk) ok++;
      var fs = root.querySelector('.ege-mcr-q[data-exam="' + q.examNum + '"]');
      var expl = root.querySelector('.ege-mcr-explain[data-expl="' + q.examNum + '"]');
      if (fs) {
        fs.classList.toggle("ege-mcr-q--ok", isOk);
        fs.classList.toggle("ege-mcr-q--bad", !isOk);
        fs.querySelectorAll(".ege-mcr-opt").forEach(function (lab) {
          lab.classList.remove(
            "ege-mcr-opt--key",
            "ege-mcr-opt--user",
            "ege-mcr-opt--user-wrong"
          );
        });
      }
      root.querySelectorAll('input[name="q' + q.examNum + '"]').forEach(function (inp) {
        inp.disabled = true;
        var lab = inp.closest(".ege-mcr-opt");
        if (!lab) return;
        var num = parseInt(inp.value, 10);
        if (num === q.key) lab.classList.add("ege-mcr-opt--key");
      });
      var userLab = sel ? sel.closest(".ege-mcr-opt") : null;
      if (userLab) {
        userLab.classList.add("ege-mcr-opt--user");
        if (!isOk) userLab.classList.add("ege-mcr-opt--user-wrong");
      }
      if (expl) {
        expl.hidden = false;
        var keyTxt = choiceText(q, q.key);
        var userTxt = choiceText(q, v);
        var head =
          '<p class="ege-mcr-explain-head">' +
          (isOk
            ? "<strong>Верно.</strong> Твой ответ: <strong>" +
              esc(String(v)) +
              "</strong> — " +
              esc(userTxt)
            : "<strong>Неверно.</strong> Твой ответ: <strong>" +
              esc(String(v)) +
              "</strong> — " +
              esc(userTxt) +
              ". <strong>Правильно:</strong> <strong>" +
              esc(String(q.key)) +
              "</strong> — " +
              esc(keyTxt)) +
          ".</p>";
        expl.innerHTML =
          head + '<p class="ege-mcr-explain-body">' + q.explainRu + "</p>";
      }
    });

    var total = U.questions.length;
    var pct = total ? Math.round((100 * ok) / total) : 0;
    var sum = document.getElementById("ege-mcr-summary");
    if (sum) {
      sum.hidden = false;
      sum.innerHTML =
        "<p><strong>Результат:</strong> " +
        ok +
        " из " +
        total +
        " (" +
        pct +
        "%).</p>";
    }

    if (
      window.__egeReadingMcStats &&
      typeof window.__egeReadingMcStats.recordAttempt === "function"
    ) {
      window.__egeReadingMcStats.recordAttempt(U.id, pct);
    }
    renderStatsBar();

    var hb = document.getElementById("ege-mcr-hunt-bar");
    if (hb && unitHasEvidence()) hb.hidden = false;

    closeDictDrawer();
    refreshPassageDisplay();
  }

  render();
})();
