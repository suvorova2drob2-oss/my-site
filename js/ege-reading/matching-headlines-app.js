/**
 * ЕГЭ Reading — подбор заголовков (§10): интерфейс, таймер, подсказки в тексте, словарь.
 */
(function () {
  var root = document.getElementById("ege-mh-app");
  if (!root) return;

  var pack = window.__EGE_READING_MATCHING_HEADLINES__;
  var units = pack && pack.units;
  if (!units || !units.length) {
    root.innerHTML =
      '<p class="ege-mh-error">Сейчас задание не загрузилось. Попробуйте обновить страницу (F5). Если не поможет — зайдите чуть позже.</p>';
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
  var isSheetView = false;
  var tapModeActive = false;
  var tapLexMap = null;
  var dictDocBound = false;
  var tapPhraseCache = null;
  var timerSec = 0;
  var timerRunning = false;
  var timerIntervalId = null;
  var timerStartedEver = false;

  function storageKeyAnswers() {
    return "ege_mh_ans_" + U.id;
  }

  function storageKeyView() {
    return "ege_mh_view_" + U.id;
  }

  function storageKeyTap() {
    return "ege_mh_tap_" + U.id;
  }

  function storageKeyTimer() {
    return "ege_mh_timer_" + U.id;
  }

  function hasQuickPhrases() {
    return U.quickPhrases && U.quickPhrases.length > 0;
  }

  /** Юниты 10+: в тексте кликабельны только tapPhrases (без поштучных слов из tapLexicon). */
  function mhPhraseOnlyLex() {
    return typeof U.unitOrder === "number" && U.unitOrder >= 10;
  }

  function hasTapLexicon() {
    var tp = U.tapPhrases && U.tapPhrases.length > 0;
    if (mhPhraseOnlyLex()) return tp;
    return (
      (U.tapLexicon && U.tapLexicon.length > 0) ||
      tp
    );
  }

  function hasQuickDict() {
    return hasQuickPhrases() || hasTapLexicon();
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getPara(letter) {
    for (var i = 0; i < U.paragraphs.length; i++) {
      if (U.paragraphs[i].letter === letter) return U.paragraphs[i];
    }
    return null;
  }

  function headlineByNum(n) {
    for (var i = 0; i < U.headlines.length; i++) {
      if (U.headlines[i].num === n) return U.headlines[i];
    }
    return null;
  }

  function getTapLexMap() {
    if (tapLexMap) return tapLexMap;
    tapLexMap = {};
    if (mhPhraseOnlyLex()) return tapLexMap;
    var i;
    var pair;
    var k;
    var list = U.tapLexicon || [];
    for (i = 0; i < list.length; i++) {
      pair = list[i];
      k = String(pair.en || "")
        .toLowerCase()
        .trim();
      if (k) tapLexMap[k] = String(pair.ru || "");
    }
    return tapLexMap;
  }

  function getTapPhraseSorted() {
    if (tapPhraseCache) return tapPhraseCache;
    var raw = U.tapPhrases || [];
    tapPhraseCache = raw.slice().sort(function (a, b) {
      return String(b.en || "").length - String(a.en || "").length;
    });
    return tapPhraseCache;
  }

  function collectPhraseMatches(text, sortedPhrases) {
    var s = String(text);
    var all = [];
    var i;
    var pair;
    var needle;
    var re;
    var m;
    var escNeedle;
    for (i = 0; i < sortedPhrases.length; i++) {
      pair = sortedPhrases[i];
      needle = String(pair.en || "");
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

  function wrapTapRichHTML(text) {
    var s = String(text || "");
    var map = mhPhraseOnlyLex() ? {} : getTapLexMap();
    var sortedPhrases = getTapPhraseSorted();
    var picked =
      sortedPhrases.length > 0
        ? collectPhraseMatches(s, sortedPhrases)
        : [];
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

  function openFragDialog(letter) {
    var para = getPara(letter);
    if (!para) return;
    var dlg = document.getElementById("ege-mh-frag-dlg");
    var titleEl = document.getElementById("ege-mh-frag-dlg-title");
    var bodyEl = document.getElementById("ege-mh-frag-dlg-body");
    if (!dlg || !titleEl || !bodyEl) return;
    titleEl.textContent = "Абзац " + letter;
    if (tapModeActive && hasTapLexicon()) {
      bodyEl.innerHTML = wrapTapRichHTML(para.text);
    } else {
      bodyEl.textContent = para.text;
    }
    if (typeof dlg.showModal === "function") {
      dlg.showModal();
    }
  }

  function closeFragDialog() {
    var dlg = document.getElementById("ege-mh-frag-dlg");
    if (dlg && typeof dlg.close === "function") dlg.close();
  }

  function previewText(text, maxLen) {
    var t = String(text || "").replace(/\s+/g, " ").trim();
    if (t.length <= maxLen) return t;
    return t.slice(0, maxLen - 1) + "…";
  }

  function snapshotMap() {
    var map = {};
    root.querySelectorAll(".ege-mh-select").forEach(function (s) {
      var L = s.getAttribute("data-letter");
      map[L] = s.value ? parseInt(s.value, 10) : null;
    });
    return map;
  }

  function saveAnswers() {
    try {
      sessionStorage.setItem(storageKeyAnswers(), JSON.stringify(snapshotMap()));
    } catch (e1) {}
  }

  /** Восстановить ответы: только уникальные номера; иначе не применять кусок. */
  function loadStoredAnswers() {
    var raw;
    try {
      raw = sessionStorage.getItem(storageKeyAnswers());
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
    var used = {};
    var pi;
    var L;
    var num;
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      L = U.paragraphs[pi].letter;
      if (o[L] == null || o[L] === "") continue;
      num = parseInt(o[L], 10);
      if (!num || used[num]) return;
      used[num] = true;
    }
    syncSelectOptions();
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      L = U.paragraphs[pi].letter;
      if (o[L] == null || o[L] === "") continue;
      num = parseInt(o[L], 10);
      var sel = root.querySelector('.ege-mh-select[data-letter="' + L + '"]');
      if (!sel) continue;
      var v = String(num);
      var ok = false;
      var oi;
      for (oi = 0; oi < sel.options.length; oi++) {
        if (sel.options[oi].value === v) {
          ok = true;
          break;
        }
      }
      if (ok) sel.value = v;
    }
    syncSelectOptions();
  }

  function loadStoredView() {
    try {
      var v = sessionStorage.getItem(storageKeyView());
      return v === "sheet";
    } catch (e1) {
      return false;
    }
  }

  function saveViewPref() {
    try {
      sessionStorage.setItem(storageKeyView(), isSheetView ? "sheet" : "cards");
    } catch (e1) {}
  }

  function syncSelectOptions() {
    var map = snapshotMap();
    root.querySelectorAll(".ege-mh-select").forEach(function (sel) {
      var myL = sel.getAttribute("data-letter");
      var myNum = map[myL];
      var frag = document.createDocumentFragment();
      var o0 = document.createElement("option");
      o0.value = "";
      o0.textContent = "—";
      frag.appendChild(o0);
      for (var h = 0; h < U.headlines.length; h++) {
        var hm = U.headlines[h];
        var num = hm.num;
        var takenElsewhere = false;
        for (var L in map) {
          if (L === myL) continue;
          if (map[L] === num) {
            takenElsewhere = true;
            break;
          }
        }
        if (takenElsewhere && myNum !== num) continue;
        var o = document.createElement("option");
        o.value = String(num);
        o.textContent = num + " — " + hm.text;
        frag.appendChild(o);
      }
      sel.innerHTML = "";
      sel.appendChild(frag);
      if (myNum != null) {
        var okv = String(myNum);
        var has = false;
        for (var oi = 0; oi < sel.options.length; oi++) {
          if (sel.options[oi].value === okv) {
            has = true;
            break;
          }
        }
        sel.value = has ? okv : "";
      } else {
        sel.value = "";
      }
    });
  }

  function updateRemainCounter() {
    var el = document.getElementById("ege-mh-remain");
    if (!el) return;
    var n = 0;
    root.querySelectorAll(".ege-mh-select").forEach(function (s) {
      if (s.value) n++;
    });
    var total = U.headlines.length;
    var free = total - n;
    el.textContent =
      "Осталось раздать: " + free + " из " + total + " (каждый номер — в один абзац; один останется лишним).";
  }

  function unitHasEvidence() {
    for (var i = 0; i < U.paragraphs.length; i++) {
      var ev = U.paragraphs[i].evidence;
      if (
        ev &&
        ((ev.support && ev.support.length) || (ev.distract && ev.distract.length))
      ) {
        return true;
      }
    }
    return false;
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
    var huntToggleEl = document.getElementById("ege-mh-hunt-toggle");
    var wantHunt =
      checked &&
      unitHasEvidence() &&
      !isSheetView &&
      huntToggleEl &&
      huntToggleEl.checked;

    root.querySelectorAll(".ege-mh-text").forEach(function (el) {
      var L = el.getAttribute("data-letter");
      var para = getPara(L);
      if (!para) return;

      /* Режим «клик по фразам» важнее подсветки улик: иначе в тексте остаётся одна-две метки evidence вместо всего словаря tapPhrases. */
      if (tapModeActive && hasTapLexicon()) {
        el.innerHTML = wrapTapRichHTML(para.text);
        return;
      }

      if (wantHunt) {
        var ev = para.evidence;
        if (
          ev &&
          ((ev.support && ev.support.length) || (ev.distract && ev.distract.length))
        ) {
          el.innerHTML = buildHighlightedHtml(para.text, ev);
          return;
        }
      }

      el.textContent = para.text;
    });
  }

  /** Вернуть pick и explain в карточку в правильном порядке. */
  function mountPicksInCards() {
    var pi;
    var para;
    var row;
    var body;
    var passage;
    var pick;
    var expl;
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      para = U.paragraphs[pi];
      row = root.querySelector('.ege-mh-row[data-letter="' + para.letter + '"]');
      if (!row) continue;
      body = row.querySelector(".ege-mh-body");
      passage = row.querySelector(".ege-mh-passage");
      pick = row.querySelector(".ege-mh-pick");
      expl = row.querySelector(".ege-mh-explain");
      if (!body || !passage || !pick || !expl) continue;
      body.insertBefore(pick, passage.nextSibling);
      body.appendChild(expl);
    }
  }

  function mountPicksInSheet() {
    var tb = document.getElementById("ege-mh-sheet-body");
    if (!tb) return;
    tb.innerHTML = "";
    var pi;
    var para;
    var row;
    var pick;
    var expl;
    var tr;
    var tdL;
    var tdPrev;
    var tdP;
    var trE;
    var tdE;
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      para = U.paragraphs[pi];
      row = root.querySelector('.ege-mh-row[data-letter="' + para.letter + '"]');
      if (!row) continue;
      pick = row.querySelector(".ege-mh-pick");
      expl = row.querySelector(".ege-mh-explain");
      if (!pick || !expl) continue;

      tr = document.createElement("tr");
      tr.className = "ege-mh-sheet-tr";
      tr.setAttribute("data-letter", para.letter);
      tdL = document.createElement("td");
      tdL.className = "ege-mh-sheet-let";
      tdL.textContent = para.letter;
      tdPrev = document.createElement("td");
      tdPrev.className = "ege-mh-sheet-prev";
      var prevWrap = document.createElement("div");
      prevWrap.className = "ege-mh-sheet-prev-wrap";
      var prevShort = document.createElement("p");
      prevShort.className = "ege-mh-sheet-prev-short";
      var shortStr = previewText(para.text, 120);
      prevShort.textContent = shortStr;
      prevWrap.appendChild(prevShort);
      var openFull = document.createElement("button");
      openFull.type = "button";
      openFull.className = "ege-mh-sheet-frag-open";
      openFull.setAttribute("data-letter", para.letter);
      openFull.setAttribute(
        "aria-label",
        "Показать полный текст абзаца " + para.letter
      );
      openFull.textContent = "Весь абзац…";
      prevWrap.appendChild(openFull);
      tdPrev.appendChild(prevWrap);
      tdP = document.createElement("td");
      tdP.className = "ege-mh-sheet-pick";
      tdP.appendChild(pick);
      tr.appendChild(tdL);
      tr.appendChild(tdPrev);
      tr.appendChild(tdP);
      tb.appendChild(tr);

      trE = document.createElement("tr");
      trE.className = "ege-mh-sheet-explrow";
      trE.setAttribute("data-letter", para.letter);
      tdE = document.createElement("td");
      tdE.colSpan = 3;
      tdE.className = "ege-mh-sheet-explain-cell";
      tdE.appendChild(expl);
      trE.appendChild(tdE);
      tb.appendChild(trE);
    }
  }

  function setSheetView(sheet) {
    isSheetView = !!sheet;
    var wrap = document.getElementById("ege-mh-sheet-wrap");
    var paras = document.getElementById("ege-mh-paras");
    var btn = document.getElementById("ege-mh-view-toggle");
    root.classList.toggle("ege-mh--sheet", isSheetView);
    if (isSheetView) {
      mountPicksInSheet();
      if (wrap) wrap.hidden = false;
      if (paras) paras.hidden = true;
      if (btn) btn.textContent = "Вид: карточки";
    } else {
      mountPicksInCards();
      if (wrap) wrap.hidden = true;
      if (paras) paras.hidden = false;
      if (btn) btn.textContent = "Вид: бланк";
    }
    saveViewPref();
  }

  function toggleView() {
    setSheetView(!isSheetView);
    refreshPassageDisplay();
  }

  function closeWtip() {
    var tip = document.getElementById("ege-mh-wtip");
    if (tip) tip.hidden = true;
  }

  function showWtip(target) {
    var tip = document.getElementById("ege-mh-wtip");
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
    var backdrop = document.getElementById("ege-mh-dict-backdrop");
    var drawer = document.getElementById("ege-mh-dict-drawer");
    var fab = document.getElementById("ege-mh-dict-fab");
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
    var backdrop = document.getElementById("ege-mh-dict-backdrop");
    var drawer = document.getElementById("ege-mh-dict-drawer");
    var fab = document.getElementById("ege-mh-dict-fab");
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
    var drawer = document.getElementById("ege-mh-dict-drawer");
    if (drawer && drawer.classList.contains("is-visible")) closeDictDrawer();
    else openDictDrawer();
  }

  function bindDictDocEvents() {
    if (dictDocBound) return;
    dictDocBound = true;
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      closeWtip();
      var drawer = document.getElementById("ege-mh-dict-drawer");
      if (drawer && drawer.classList.contains("is-visible")) closeDictDrawer();
    });
    document.addEventListener("click", function (e) {
      var tip = document.getElementById("ege-mh-wtip");
      if (!tip || tip.hidden) return;
      if (e.target.closest && e.target.closest(".ege-mh-wtip")) return;
      if (e.target.closest && e.target.closest(".ege-mh-wtap")) return;
      closeWtip();
    });
  }

  function loadStoredTap() {
    tapModeActive = false;
    if (!hasTapLexicon()) return;
    try {
      if (sessionStorage.getItem(storageKeyTap()) === "1") tapModeActive = true;
    } catch (e1) {}
  }

  function setTapMode(on) {
    if (!hasTapLexicon()) return;
    if (checked) {
      tapModeActive = false;
      var t1 = document.getElementById("ege-mh-tap-toggle");
      if (t1) t1.checked = false;
      return;
    }
    tapModeActive = !!on;
    try {
      if (tapModeActive) sessionStorage.setItem(storageKeyTap(), "1");
      else sessionStorage.removeItem(storageKeyTap());
    } catch (e2) {}
    var t2 = document.getElementById("ege-mh-tap-toggle");
    if (t2) t2.checked = tapModeActive;
    refreshPassageDisplay();
  }

  function initDictUi() {
    var dm = document.getElementById("ege-mh-dict-mount");
    if (!dm) return;
    tapLexMap = null;
    tapPhraseCache = null;
    if (!hasQuickDict()) {
      dm.innerHTML = "";
      dm.hidden = true;
      return;
    }
    dm.hidden = false;
    dm.innerHTML =
      '<button type="button" class="ex3-dict-fab" id="ege-mh-dict-fab" aria-controls="ege-mh-dict-drawer" aria-expanded="false">' +
      '<span class="ex3-dict-fab-text"><span class="ex3-dict-fab-line">Быстрый</span><span class="ex3-dict-fab-line">словарь</span></span></button>' +
      '<div class="ex3-dict-backdrop" id="ege-mh-dict-backdrop" hidden aria-hidden="true"></div>' +
      '<div class="ex3-dict-drawer" id="ege-mh-dict-drawer" aria-hidden="true">' +
      '<div class="ex3-dict-drawer-head"><span>Быстрый словарь</span>' +
      '<button type="button" class="ex3-dict-drawer-x" id="ege-mh-dict-close" aria-label="Закрыть">×</button></div>' +
      '<div class="ex3-dict-drawer-body"><div class="ege-mh-dict-body-inner">' +
      '<div id="ege-mh-dict-phrases-wrap" class="ege-mh-dict-phrases-wrap"></div>' +
      '<div id="ege-mh-dict-tap-wrap" class="ege-mh-dict-tap-wrap"></div>' +
      "</div></div></div>" +
      '<div id="ege-mh-wtip" class="ege-mh-wtip" hidden></div>';

    var phrasesW = document.getElementById("ege-mh-dict-phrases-wrap");
    var tapW = document.getElementById("ege-mh-dict-tap-wrap");
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
          '<h3 class="ege-mh-dict-sub">Важные фразы</h3>' + dl;
      } else {
        phrasesW.innerHTML = "";
      }
    }
    if (tapW) {
      if (hasTapLexicon()) {
        var tapHint = mhPhraseOnlyLex()
          ? '<p class="ege-mh-dict-hint">В этом юните кликабельны <strong>только целые фразы</strong> из списка (нет перевода по одиночным словам). После «Проверить» режим отключается, чтобы показать подсказки в тексте.</p>'
          : '<p class="ege-mh-dict-hint">Сначала выделяются <strong>целые фразы</strong> (клик — перевод и пояснение), между ними — отдельные слова из списка. После «Проверить» этот режим отключается, чтобы показать подсказки в тексте.</p>';
        var tapTitle = mhPhraseOnlyLex()
          ? "Фразы для клика по тексту"
          : "Слова в тексте";
        var tapLabel = mhPhraseOnlyLex()
          ? "Клик по фразам — перевод"
          : "Клик по словам — перевод";
        tapW.innerHTML =
          '<h3 class="ege-mh-dict-sub">' +
          esc(tapTitle) +
          "</h3>" +
          '<label class="ege-mh-dict-tap-label"><input type="checkbox" id="ege-mh-tap-toggle" /> ' +
          esc(tapLabel) +
          "</label>" +
          tapHint;
        loadStoredTap();
        var tapCb = document.getElementById("ege-mh-tap-toggle");
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

    var fab = document.getElementById("ege-mh-dict-fab");
    var backdrop = document.getElementById("ege-mh-dict-backdrop");
    var closeB = document.getElementById("ege-mh-dict-close");
    if (fab) fab.addEventListener("click", toggleDictDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDictDrawer);
    if (closeB) closeB.addEventListener("click", closeDictDrawer);
  }

  function renderUnitStrip() {
    var el = document.getElementById("ege-mh-unit-strip");
    if (!el) return;
    var n = typeof U.unitOrder === "number" ? U.unitOrder : unitIndex + 1;
    var html =
      '<div class="ege-mh-unit-strip-inner">' +
      '<span class="ege-mh-unit-pill">Юнит ' +
      esc(String(n)) +
      "</span>" +
      '<span class="ege-mh-unit-desc">' +
      esc(U.title || "") +
      "</span>";
    if (units.length > 1) {
      html +=
        '<label class="ege-mh-unit-sel-label">Пакет ' +
        '<select id="ege-mh-unit-jump" class="ege-mh-unit-jump" aria-label="Номер пакета §10">';
      var ui;
      var un;
      var ord;
      for (ui = 0; ui < units.length; ui++) {
        un = units[ui];
        ord = typeof un.unitOrder === "number" ? un.unitOrder : ui + 1;
        html +=
          '<option value="' +
          esc(un.id) +
          '"' +
          (un.id === U.id ? " selected" : "") +
          ">Юнит " +
          esc(String(ord)) +
          "</option>";
      }
      html += "</select></label>";
    }
    html += "</div>";
    el.innerHTML = html;
    var jump = document.getElementById("ege-mh-unit-jump");
    if (jump) {
      jump.addEventListener("change", function () {
        var v = jump.value;
        if (!v || v === U.id) return;
        var url = new URL(location.href);
        url.searchParams.set("unit", v);
        location.href = url.pathname + url.search + url.hash;
      });
    }
    refreshMhStatsBar();
  }

  function refreshMhStatsBar() {
    var el = document.getElementById("ege-mh-stats-bar");
    if (!el || !U || !U.id) return;
    var br = window.__egeReadingMatchingStats;
    var main;
    if (br && typeof br.getUnitStats === "function") {
      var st = br.getUnitStats(U.id);
      if (st) {
        main =
          '<span class="ege-reading-stats-main">Эта тема: попыток <strong>' +
          st.attempts +
          '</strong> · лучший <strong>' +
          st.best +
          '%</strong> · последний <strong>' +
          st.last +
          "%</strong></span>";
      } else {
        main =
          '<span class="ege-reading-stats-main">Пока нет записанных проверок — нажми «Проверить».</span>';
      }
    } else {
      main =
        '<span class="ege-reading-stats-main">Сохранение статистики не подключено.</span>';
    }
    el.innerHTML =
      main +
      '<a class="ege-reading-stats-hub" href="ege-statistics.html">Statistics hub →</a>';
  }

  function clearTimerInterval() {
    if (timerIntervalId != null) {
      clearInterval(timerIntervalId);
      timerIntervalId = null;
    }
  }

  function persistTimerSeconds() {
    try {
      sessionStorage.setItem(storageKeyTimer(), String(timerSec));
    } catch (eT) {}
  }

  function loadTimerFromStorage() {
    timerSec = 0;
    timerStartedEver = false;
    timerRunning = false;
    clearTimerInterval();
    try {
      var raw = sessionStorage.getItem(storageKeyTimer());
      if (raw == null || raw === "") return;
      var n = parseInt(raw, 10);
      if (!isNaN(n) && n >= 0) {
        timerSec = n;
        if (n > 0) timerStartedEver = true;
      }
    } catch (e1) {}
  }

  function formatTimerDisplay(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function updateTimerUi() {
    var el = document.getElementById("ege-mh-timer-display");
    if (el) el.textContent = formatTimerDisplay(timerSec);
    var btn = document.getElementById("ege-mh-timer-toggle");
    if (btn) {
      if (timerRunning) {
        btn.textContent = "Пауза";
        btn.setAttribute("aria-label", "Пауза таймера");
      } else if (timerStartedEver && timerSec > 0) {
        btn.textContent = "Продолжить";
        btn.setAttribute("aria-label", "Продолжить таймер");
      } else {
        btn.textContent = "Старт";
        btn.setAttribute("aria-label", "Запустить таймер");
      }
    }
  }

  function tickTimer() {
    timerSec += 1;
    updateTimerUi();
    persistTimerSeconds();
  }

  function startTimerInterval() {
    clearTimerInterval();
    timerIntervalId = setInterval(tickTimer, 1000);
  }

  function tryStartTimerOnInteraction() {
    if (timerRunning) return;
    var any = false;
    root.querySelectorAll(".ege-mh-select").forEach(function (s) {
      if (s.value) any = true;
    });
    if (!any) return;
    timerStartedEver = true;
    timerRunning = true;
    startTimerInterval();
    updateTimerUi();
    persistTimerSeconds();
  }

  function onTimerToggleClick() {
    if (timerRunning) {
      timerRunning = false;
      clearTimerInterval();
      persistTimerSeconds();
      updateTimerUi();
      return;
    }
    timerStartedEver = true;
    timerRunning = true;
    startTimerInterval();
    persistTimerSeconds();
    updateTimerUi();
  }

  function resetTimerFully() {
    timerRunning = false;
    clearTimerInterval();
    timerSec = 0;
    timerStartedEver = false;
    try {
      sessionStorage.removeItem(storageKeyTimer());
    } catch (e2) {}
    updateTimerUi();
  }

  function onTimerResetClick() {
    resetTimerFully();
  }

  function build() {
    var paras = [];
    var p;
    var para;
    for (p = 0; p < U.paragraphs.length; p++) {
      para = U.paragraphs[p];
      paras.push(
        '<article class="ege-mh-row" data-letter="' +
          esc(para.letter) +
          '">' +
          '<div class="ege-mh-letter">' +
          esc(para.letter) +
          "</div>" +
          '<div class="ege-mh-body">' +
          '<div class="ege-mh-passage">' +
          '<p class="ege-mh-text" data-letter="' +
          esc(para.letter) +
          '">' +
          esc(para.text) +
          "</p>" +
          "</div>" +
          '<div class="ege-mh-pick">' +
          '<label class="ege-mh-label">Заголовок ' +
          '<select class="ege-mh-select" data-letter="' +
          esc(para.letter) +
          '" aria-label="Выбор заголовка для текста ' +
          esc(para.letter) +
          '"></select></label>' +
          '<span class="ege-mh-mark" data-mark="' +
          esc(para.letter) +
          '" hidden></span>' +
          "</div>" +
          '<div class="ege-mh-explain" data-explain="' +
          esc(para.letter) +
          '" hidden></div>' +
          "</div></article>"
      );
    }

    var hlList = [];
    var j;
    var y;
    for (j = 0; j < U.headlines.length; j++) {
      y = U.headlines[j];
      hlList.push(
        '<li><span class="ege-mh-hl-num">' +
          y.num +
          "</span> " +
          esc(y.text) +
          "</li>"
      );
    }

    var lastParaLetter =
      U.paragraphs.length > 0
        ? U.paragraphs[U.paragraphs.length - 1].letter
        : "G";

    root.innerHTML =
      '<div class="ege-mh-unit-strip" id="ege-mh-unit-strip"></div>' +
      '<div class="ege-reading-stats-bar" id="ege-mh-stats-bar" role="region" aria-label="Статистика по этой теме"></div>' +
      '<header class="ege-mh-head">' +
      '<p class="ege-mh-inst">' +
      U.instructionHtml +
      "</p>" +
      '<aside class="ege-mh-headlines" aria-label="Заголовки">' +
      '<h2 class="ege-mh-h2">Заголовки</h2>' +
      '<ol class="ege-mh-hl-list">' +
      hlList.join("") +
      "</ol></aside></header>" +
      '<div class="ege-mh-toolbar">' +
      '<p class="ege-mh-remain" id="ege-mh-remain" aria-live="polite"></p>' +
      '<div class="ege-mh-timer" role="group" aria-labelledby="ege-mh-timer-label">' +
      '<span id="ege-mh-timer-label" class="ege-mh-timer-label">Время</span>' +
      '<span class="ege-mh-timer-display" id="ege-mh-timer-display" aria-live="polite">00:00</span>' +
      '<button type="button" class="ege-mh-btn ege-mh-btn--compact" id="ege-mh-timer-toggle">Старт</button>' +
      '<button type="button" class="ege-mh-btn ege-mh-btn--compact ege-mh-btn--ghost" id="ege-mh-timer-reset" aria-label="Обнулить счётчик времени">Сброс времени</button>' +
      "</div>" +
      '<button type="button" class="ege-mh-btn" id="ege-mh-view-toggle">Вид: бланк</button>' +
      "</div>" +
      '<div class="ege-mh-sheet-wrap" id="ege-mh-sheet-wrap" hidden>' +
      '<p class="ege-mh-sheet-note">Режим таблицы: в каждой строке — короткий фрагмент текста; полный абзац открывается кнопкой «Весь абзац…». Режим карточек удобен, когда нужен весь текст сразу и подсказки в тексте после проверки.</p>' +
      '<table class="ege-mh-sheet" aria-label="Таблица ответов A–' +
      esc(lastParaLetter) +
      '">' +
      "<thead><tr>" +
      '<th class="ege-mh-sheet-th-let" scope="col">№</th>' +
      '<th class="ege-mh-sheet-th-prev" scope="col">Фрагмент текста</th>' +
      '<th class="ege-mh-sheet-th-pick" scope="col">Заголовок</th>' +
      "</tr></thead>" +
      '<tbody id="ege-mh-sheet-body"></tbody>' +
      "</table></div>" +
      '<section class="ege-mh-paras" id="ege-mh-paras" aria-label="Тексты">' +
      paras.join("") +
      "</section>" +
      '<div class="ege-mh-actions">' +
      '<button type="button" class="ege-mh-btn ege-mh-btn--primary" id="ege-mh-check">Проверить</button>' +
      '<button type="button" class="ege-mh-btn" id="ege-mh-reset">Сбросить</button>' +
      "</div>" +
      '<div class="ege-mh-hunt-bar" id="ege-mh-hunt-bar" hidden>' +
      '<label class="ege-mh-hunt-label">' +
      '<input type="checkbox" id="ege-mh-hunt-toggle" checked />' +
      "<span><strong>Подсказки в тексте</strong> — подсветка фраз: " +
      '<span class="ege-mh-legend ege-mh-legend--ok">зелёный</span> — опора под заголовок; ' +
      '<span class="ege-mh-legend ege-mh-legend--bad">красный</span> — фрагмент, который часто соблазняет ошибиться. ' +
      "<em>Работает в виде «карточки».</em></span>" +
      "</label>" +
      "</div>" +
      '<p class="ege-mh-extra-note" id="ege-mh-extra" hidden></p>' +
      '<dialog class="ege-mh-frag-dlg" id="ege-mh-frag-dlg" aria-labelledby="ege-mh-frag-dlg-title">' +
      '<div class="ege-mh-frag-dlg-box">' +
      '<div class="ege-mh-frag-dlg-head">' +
      '<h3 class="ege-mh-frag-dlg-title" id="ege-mh-frag-dlg-title">Абзац</h3>' +
      '<button type="button" class="ege-mh-frag-dlg-close" id="ege-mh-frag-dlg-close" aria-label="Закрыть">×</button>' +
      "</div>" +
      '<p class="ege-mh-frag-dlg-body" id="ege-mh-frag-dlg-body"></p>' +
      "</div></dialog>";

    renderUnitStrip();
    loadTimerFromStorage();
    updateTimerUi();

    var fragDlg = document.getElementById("ege-mh-frag-dlg");
    var fragClose = document.getElementById("ege-mh-frag-dlg-close");
    if (fragDlg && fragClose) {
      fragClose.addEventListener("click", closeFragDialog);
    }
    root.addEventListener("click", function (ev) {
      var opener = ev.target && ev.target.closest
        ? ev.target.closest(".ege-mh-sheet-frag-open")
        : null;
      if (!opener || !root.contains(opener)) return;
      ev.preventDefault();
      var L = opener.getAttribute("data-letter");
      if (L) openFragDialog(L);
    });
    root.addEventListener("click", function (ev) {
      var w = ev.target && ev.target.closest && ev.target.closest(".ege-mh-wtap");
      if (!w || !root.contains(w)) return;
      ev.preventDefault();
      showWtip(w);
    });
    root.addEventListener("keydown", function (ev) {
      var w = ev.target && ev.target.closest && ev.target.closest(".ege-mh-wtap");
      if (!w || !root.contains(w)) return;
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        showWtip(w);
      }
    });

    syncSelectOptions();
    loadStoredAnswers();
    updateRemainCounter();

    root.querySelectorAll(".ege-mh-select").forEach(function (sel) {
      sel.addEventListener("change", onPickChange);
    });
    var checkBtn = document.getElementById("ege-mh-check");
    var resetBtn = document.getElementById("ege-mh-reset");
    var huntToggle = document.getElementById("ege-mh-hunt-toggle");
    var viewBtn = document.getElementById("ege-mh-view-toggle");
    if (checkBtn) checkBtn.addEventListener("click", onCheck);
    if (resetBtn) resetBtn.addEventListener("click", onReset);
    if (huntToggle) {
      huntToggle.addEventListener("change", function () {
        if (!checked || isSheetView) return;
        refreshPassageDisplay();
      });
    }
    if (viewBtn) viewBtn.addEventListener("click", toggleView);
    var timerToggle = document.getElementById("ege-mh-timer-toggle");
    var timerReset = document.getElementById("ege-mh-timer-reset");
    if (timerToggle) timerToggle.addEventListener("click", onTimerToggleClick);
    if (timerReset) timerReset.addEventListener("click", onTimerResetClick);

    if (loadStoredView()) {
      setSheetView(true);
    } else {
      setSheetView(false);
    }
    initDictUi();
    bindDictDocEvents();
    tryStartTimerOnInteraction();
    refreshPassageDisplay();
    updateRemainCounter();
  }

  function onPickChange() {
    syncSelectOptions();
    saveAnswers();
    updateRemainCounter();
    if (checked) {
      checked = false;
      clearMarks();
      var hb = document.getElementById("ege-mh-hunt-bar");
      if (hb) hb.hidden = true;
    }
    tryStartTimerOnInteraction();
    refreshPassageDisplay();
  }

  function clearMarks() {
    root.querySelectorAll(".ege-mh-mark").forEach(function (el) {
      el.hidden = true;
      el.textContent = "";
      el.className = "ege-mh-mark";
    });
    root.querySelectorAll(".ege-mh-explain").forEach(function (el) {
      el.hidden = true;
      el.innerHTML = "";
    });
    root.querySelectorAll(".ege-mh-row").forEach(function (row) {
      row.classList.remove("ege-mh-row--ok", "ege-mh-row--bad");
    });
    root.querySelectorAll(".ege-mh-sheet-tr").forEach(function (tr) {
      tr.classList.remove("ege-mh-sheet-tr--ok", "ege-mh-sheet-tr--bad");
    });
    var ex = document.getElementById("ege-mh-extra");
    if (ex) ex.hidden = true;
  }

  function onReset() {
    checked = false;
    clearMarks();
    try {
      sessionStorage.removeItem(storageKeyAnswers());
    } catch (e1) {}
    root.querySelectorAll(".ege-mh-select").forEach(function (sel) {
      sel.value = "";
    });
    syncSelectOptions();
    loadStoredTap();
    var tapCbR = document.getElementById("ege-mh-tap-toggle");
    if (tapCbR) tapCbR.checked = tapModeActive;
    resetTimerFully();
    refreshPassageDisplay();
    updateRemainCounter();
    var hb = document.getElementById("ege-mh-hunt-bar");
    if (hb) hb.hidden = true;
    var ht = document.getElementById("ege-mh-hunt-toggle");
    if (ht) ht.checked = true;
  }

  function onCheck() {
    checked = true;
    clearMarks();

    var used = {};
    var dup = false;
    root.querySelectorAll(".ege-mh-select").forEach(function (sel) {
      var v = sel.value;
      if (!v) return;
      if (used[v]) dup = true;
      used[v] = true;
    });

    if (dup) {
      alert(
        "В ЕГЭ каждую цифру можно использовать только один раз. Проверь, нет ли повторов."
      );
      checked = false;
      return;
    }

    var allFilled = true;
    var pi;
    var L;
    var sel;
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      L = U.paragraphs[pi].letter;
      sel = root.querySelector('.ege-mh-select[data-letter="' + L + '"]');
      if (!sel || !sel.value) {
        allFilled = false;
        break;
      }
    }
    if (!allFilled) {
      var lastLet =
        U.paragraphs.length > 0
          ? U.paragraphs[U.paragraphs.length - 1].letter
          : "G";
      alert("Выбери заголовок для каждого абзаца A–" + lastLet + ".");
      checked = false;
      return;
    }

    tapModeActive = false;
    try {
      sessionStorage.removeItem(storageKeyTap());
    } catch (eTap) {}
    var tapCbCheck = document.getElementById("ege-mh-tap-toggle");
    if (tapCbCheck) tapCbCheck.checked = false;

    var pj;
    var letter;
    var sel2;
    var pick;
    var ok;
    var row;
    var rowS;
    var mark;
    var expl;
    var chunk;
    var rightN;
    var h;
    var rightLine;
    var correctCount = 0;
    for (pj = 0; pj < U.paragraphs.length; pj++) {
      letter = U.paragraphs[pj].letter;
      sel2 = root.querySelector('.ege-mh-select[data-letter="' + letter + '"]');
      pick = sel2 ? parseInt(sel2.value, 10) : 0;
      ok = U.key[letter] === pick;
      if (ok) correctCount += 1;
      row = root.querySelector('.ege-mh-row[data-letter="' + letter + '"]');
      rowS = root.querySelector('.ege-mh-sheet-tr[data-letter="' + letter + '"]');
      mark = root.querySelector('.ege-mh-mark[data-mark="' + letter + '"]');
      expl = root.querySelector('.ege-mh-explain[data-explain="' + letter + '"]');

      if (row) row.classList.add(ok ? "ege-mh-row--ok" : "ege-mh-row--bad");
      if (rowS) rowS.classList.add(ok ? "ege-mh-sheet-tr--ok" : "ege-mh-sheet-tr--bad");
      if (mark) {
        mark.hidden = false;
        mark.textContent = ok ? "✓" : "✗";
        mark.className = "ege-mh-mark " + (ok ? "is-ok" : "is-bad");
      }
      if (expl) {
        expl.hidden = false;
        chunk = U.explanationsRu[letter] || "";
        if (!ok) {
          rightN = U.key[letter];
          h = headlineByNum(rightN);
          rightLine = h
            ? "Правильно: <strong>" + rightN + "</strong> — " + esc(h.text)
            : "";
          expl.innerHTML =
            "<p>" +
            chunk +
            "</p>" +
            (rightLine ? '<p class="ege-mh-key">' + rightLine + "</p>" : "");
        } else {
          expl.innerHTML = "<p>" + chunk + "</p>";
        }
      }
    }

    var mhTotal = U.paragraphs.length;
    var mhPct = mhTotal
      ? Math.max(
          0,
          Math.min(100, Math.round((100 * correctCount) / mhTotal))
        )
      : 0;
    if (
      window.__egeReadingMatchingStats &&
      typeof window.__egeReadingMatchingStats.recordAttempt === "function"
    ) {
      window.__egeReadingMatchingStats.recordAttempt(U.id, mhPct);
    }
    refreshMhStatsBar();

    var extraEl = document.getElementById("ege-mh-extra");
    if (extraEl && U.extraExplainRu) {
      extraEl.hidden = false;
      extraEl.innerHTML = "<strong>Лишний заголовок.</strong> " + U.extraExplainRu;
    }

    var huntBar = document.getElementById("ege-mh-hunt-bar");
    if (huntBar) {
      huntBar.hidden = !unitHasEvidence() || isSheetView;
    }
    refreshPassageDisplay();
  }

  window.addEventListener("pagehide", function () {
    clearTimerInterval();
    persistTimerSeconds();
  });
  window.addEventListener("pageshow", function (ev) {
    if (!ev.persisted) return;
    timerRunning = false;
    clearTimerInterval();
    loadTimerFromStorage();
    updateTimerUi();
  });

  build();
})();
