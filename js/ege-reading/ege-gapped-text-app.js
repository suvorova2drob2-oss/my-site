/**
 * ЕГЭ Reading — Gapped Text: общий интерфейс (drag-and-drop + тап по фразе и пропуску).
 */
(function () {
  var root = document.getElementById("ege-gt-app");
  if (!root) return;

  var pack = window.__EGE_READING_GAPPED_TEXT__;
  var units = pack && pack.units;
  if (!units || !units.length) {
    root.innerHTML =
      '<p class="ege-gt-error">Задание не загрузилось. Обновите страницу (F5).</p>';
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

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var DEFAULT_LIFEHACK_RU =
    "<p><strong>В чём соль задания 11:</strong> каждый фрагмент должен <strong>стыковаться</strong> с текстом <em>сразу до и после</em> пропуска — по грамматике и логике (местоимение, союз, время).</p>" +
    "<p><strong>Лайфхак:</strong> найди <strong>опорное слово</strong> перед пропуском и проверь: твоя вставка продолжает именно его или уже «уводит» мысль в сторону.</p>";

  function clearPostSubmitUI() {
    var fb = root.querySelector("#ege-gt-feedback");
    var body = root.querySelector("#ege-gt-feedback-body");
    var kw = root.querySelector("#ege-gt-key-wrap");
    if (fb) fb.setAttribute("hidden", "");
    if (body) body.innerHTML = "";
    if (kw) kw.setAttribute("hidden", "");
    [].forEach.call(root.querySelectorAll(".ege-gt-drop"), function (z) {
      z.classList.remove("is-correct", "is-wrong");
    });
  }

  function findParagraphIndexForGap(letter) {
    var pi;
    var si;
    var para;
    var segs;
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      para = U.paragraphs[pi];
      segs = para.segments;
      if (!segs) continue;
      for (si = 0; si < segs.length; si++) {
        if (segs[si].g === letter) return pi;
      }
    }
    return 0;
  }

  function filledParagraphAt(pi) {
    var para = U.paragraphs[pi];
    var text = "";
    var spans = {};
    if (!para || !para.segments) return { text: text, spans: spans };

    var si;
    var seg;
    var nn;
    var frag;
    var st;
    for (si = 0; si < para.segments.length; si++) {
      seg = para.segments[si];
      if (seg.t != null) text += seg.t;
      else if (seg.g) {
        st = text.length;
        nn = (U.key || {})[seg.g];
        frag = fragmentByNum(nn);
        text += frag ? frag.text : "";
        spans[seg.g] = { start: st, end: text.length };
      }
    }
    return { text: text, spans: spans };
  }

  function sentenceBoundsAround(text, pos) {
    var len = text.length;
    pos = Math.max(0, Math.min(pos, len));
    var start = 0;
    var i;
    var c;
    var after;
    for (i = pos - 1; i >= 0; i--) {
      c = text[i];
      if (c === "." || c === "?" || c === "!") {
        after = i + 1;
        if (after === len || text[after] === " ") {
          start = after === len ? len : after + 1;
          break;
        }
      }
    }
    var endIdx = len ? len - 1 : 0;
    for (i = pos; i < len; i++) {
      c = text[i];
      if (c === "." || c === "?" || c === "!") {
        after = i + 1;
        if (after === len || text[after] === " ") {
          endIdx = i;
          break;
        }
      }
    }
    return { start: start, end: endIdx };
  }

  function renderWalkCard(LL, userNum, keyNum) {
    var ky = U.key || {};
    var expect = keyNum != null ? keyNum : ky[LL];
    var isOk = userNum === expect;
    var pi = findParagraphIndexForGap(LL);
    var filled = filledParagraphAt(pi);
    var span = filled.spans[LL];
    var exp = U.explainRu || {};
    var coach = U.coachRu || {};
    var rightFrag = fragmentByNum(expect);
    var wrongFrag = userNum ? fragmentByNum(userNum) : null;

    var html = "";
    html +=
      '<div class="ege-gt-walk-card' +
      (isOk ? "" : " ege-gt-walk-card--wrong") +
      '">';
    html += '<div class="ege-gt-walk-head">';
    html +=
      'Пропуск <strong class="ege-gt-walk-gap-id">' +
      esc(LL) +
      "</strong>";
    html +=
      '<span class="ege-gt-walk-badge' +
      (isOk ? " is-ok" : " is-bad") +
      '"><span class="ege-gt-walk-ico" aria-hidden="true">' +
      (isOk ? "✅" : "❌") +
      '</span><span class="ege-gt-walk-badge-txt">' +
      (isOk ? "Верно" : "Не сходится") +
      "</span></span>";
    html += "</div>";

    if (!isOk && userNum) {
      html += '<p class="ege-gt-walk-your">';
      html +=
        "<strong>Сейчас стоит:</strong> фрагмент " +
        esc(String(userNum));
      if (wrongFrag) html += " — «" + esc(wrongFrag.text) + "»";
      html += ".";
      html += "</p>";
      html += '<p class="ege-gt-walk-keyln">';
      html +=
        "<strong>Нужно по ключу:</strong> фрагмент " +
        esc(String(expect));
      if (rightFrag) html += " — «" + esc(rightFrag.text) + "»";
      html += ".";
      html += "</p>";
    }

    if (span) {
      var bounds = sentenceBoundsAround(filled.text, span.start);
      var sentence = filled.text.slice(bounds.start, bounds.end + 1);
      var relS = span.start - bounds.start;
      var relE = span.end - bounds.start;
      relS = Math.max(0, Math.min(relS, sentence.length));
      relE = Math.max(relS, Math.min(relE, sentence.length));
      var s0 = sentence.slice(0, relS);
      var s1 = sentence.slice(relS, relE);
      var s2 = sentence.slice(relE);
      var sentInner =
        esc(s0) +
        '<strong class="ege-gt-walk-insert">' +
        esc(s1) +
        "</strong>" +
        esc(s2);

      var sameBefore = filled.text.slice(0, bounds.start).trim();
      var tailStart = bounds.end + 1;
      if (tailStart < filled.text.length && filled.text[tailStart] === " ")
        tailStart++;
      var sameAfter = filled.text.slice(tailStart).trim();

      var prevPara = "";
      if (bounds.start === 0 && pi > 0)
        prevPara = filledParagraphAt(pi - 1).text.trim();
      var nextPara = "";
      if (sameAfter === "" && pi < U.paragraphs.length - 1)
        nextPara = filledParagraphAt(pi + 1).text.trim();

      html += '<div class="ege-gt-walk-block">';
      html += '<div class="ege-gt-walk-label">В том же абзаце до этого предложения</div>';
      html +=
        '<p class="ege-gt-walk-txt">' +
        (sameBefore
          ? esc(sameBefore)
          : "— <span class=\"ege-gt-walk-muted\">(это предложение первое в абзаце)</span>") +
        "</p>";
      if (prevPara) {
        html += '<div class="ege-gt-walk-label">Предыдущий абзац целиком <span class="ege-gt-walk-muted">(что шло прямо перед)</span></div>';
        html += '<p class="ege-gt-walk-txt ege-gt-walk-context">' + esc(prevPara) + "</p>";
      }
      html += "</div>";

      html += '<div class="ege-gt-walk-block ege-gt-walk-block--hero">';
      html +=
        '<div class="ege-gt-walk-label">Предложение целиком с <strong>верной</strong> вставкой по ключу</div>';
      html +=
        '<p class="ege-gt-walk-sentence" lang="en">' + sentInner + "</p>";
      html += "</div>";

      html += '<div class="ege-gt-walk-block">';
      html += '<div class="ege-gt-walk-label">В том же абзаце после этого предложения</div>';
      html +=
        '<p class="ege-gt-walk-txt">' +
        (sameAfter
          ? esc(sameAfter)
          : "— <span class=\"ege-gt-walk-muted\">(это предложение последнее в абзаце)</span>") +
        "</p>";
      if (nextPara) {
        html += '<div class="ege-gt-walk-label">Следующий абзац целиком <span class="ege-gt-walk-muted">(что идёт дальше)</span></div>';
        html += '<p class="ege-gt-walk-txt ege-gt-walk-context">' + esc(nextPara) + "</p>";
      }
      html += "</div>";
    }

    if (!isOk && coach[LL]) {
      html += '<div class="ege-gt-coach-detail">' + coach[LL] + "</div>";
    } else if (isOk && coach[LL]) {
      var coachOk = coach[LL].replace(
        /<p class="ege-gt-coach-miss">[\s\S]*?<\/p>/gi,
        ""
      );
      if (String(coachOk).replace(/\s/g, "").length) {
        html += '<p class="ege-gt-walk-coach-ok-lead"><span aria-hidden="true">🔗</span> Закрепи взглядом: <strong>связи</strong> и <strong>стык</strong></p>';
        html += '<div class="ege-gt-coach-detail ege-gt-coach-detail--ok">' + coachOk + "</div>";
      }
    }

    if (exp[LL]) {
      html += '<div class="ege-gt-walk-tip">';
      html += '<div class="ege-gt-walk-label">На что смотреть и почему так логично</div>';
      html += '<div class="ege-gt-walk-tip-body">' + exp[LL] + "</div>";
      html += "</div>";
    }

    html += "</div>";
    return html;
  }

  function renderFeedbackAfterSubmit(lettersC, ok, total) {
    var html = "";
    var life = (U.lifehackRu && String(U.lifehackRu).trim()) || DEFAULT_LIFEHACK_RU;
    html += '<div class="ege-gt-feedback-score">';
    if (ok === total) {
      html +=
        '<p class="ege-gt-feedback-result is-ok"><strong>Верно:</strong> все ' +
        total +
        " из " +
        total +
        ".</p>";
    } else {
      html +=
        '<p class="ege-gt-feedback-result is-warn"><strong>Итог:</strong> верно ' +
        ok +
        " из " +
        total +
        ".</p>";
    }
    html += "</div>";
    html += '<div class="ege-gt-lifehack-card">' + life + "</div>";

    html +=
      '<h4 class="ege-gt-feedback-sub">Каждый пропуск: контекст до и после + целое предложение</h4>';
    html +=
      '<p class="ege-gt-walk-intro">Ниже — тот же абзац, но со всеми пропусками уже заполненными <strong>по ключу</strong>, чтобы была видна цельная цепочка. Для каждого пропуска верная вставка в предложении <strong class="ege-gt-walk-insert ege-gt-walk-insert--inline">подсвечена</strong>.</p>';

    var ki;
    var LL;
    var ky = U.key || {};
    for (ki = 0; ki < lettersC.length; ki++) {
      LL = lettersC[ki];
      var zone = root.querySelector(
        '.ege-gt-drop[data-gap-letter="' + LL + '"]'
      );
      var chip = zone ? zone.querySelector(".ege-gt-chip") : null;
      var nChip = chip ? parseInt(chip.getAttribute("data-n") || "0", 10) : 0;
      html += renderWalkCard(LL, nChip, ky[LL]);
    }

    if (ok === total) {
      html +=
        '<p class="ege-gt-feedback-allok"><strong>Все цепочки сошлись.</strong> Ниже ты всё равно видишь разбор по каждому пропуску — так проще запомнить опорные слова.</p>';
    }

    return html;
  }

  function storageKey() {
    return "ege_gt_" + U.id + "_layout_v1";
  }

  var U = units[unitIndex];
  var bankEl = null;
  var msgEl = null;
  var selectedChip = null;
  var timerEl = null;
  var timerIntervalId = null;
  var timerRemainingSec = 0;

  function unitTimerSec() {
    var packD = window.__EGE_READING_GAPPED_TEXT__ || {};
    var def =
      packD.defaultTimerSec != null && packD.defaultTimerSec > 0
        ? Math.floor(packD.defaultTimerSec)
        : 20 * 60;
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
      "ege-gt-timer--warn",
      timerRemainingSec > 0 && timerRemainingSec <= 120
    );
    timerEl.classList.toggle(
      "ege-gt-timer--critical",
      timerRemainingSec > 0 && timerRemainingSec <= 30
    );
    timerEl.classList.toggle("ege-gt-timer--expired", timerRemainingSec <= 0);
  }

  function tickExamTimer() {
    if (timerRemainingSec <= 0) return;
    timerRemainingSec--;
    updateExamTimerDisplay();
    if (timerRemainingSec <= 0) {
      stopExamTimer();
      var fb = root.querySelector("#ege-gt-feedback");
      if (fb && fb.hasAttribute("hidden") && msgEl) {
        msgEl.textContent =
          "Время на задание вышло — можно всё равно отправить ответ.";
        msgEl.className = "ege-gt-msg is-warn";
      }
    }
  }

  function startExamTimer() {
    stopExamTimer();
    timerRemainingSec = unitTimerSec();
    updateExamTimerDisplay();
    timerIntervalId = setInterval(tickExamTimer, 1000);
  }

  function collectGapLetters() {
    var letters = [];
    var seen = {};
    var pi;
    var si;
    var para;
    var seg;
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      para = U.paragraphs[pi];
      if (!para.segments) continue;
      for (si = 0; si < para.segments.length; si++) {
        seg = para.segments[si];
        if (seg.g && !seen[seg.g]) {
          seen[seg.g] = true;
          letters.push(seg.g);
        }
      }
    }
    return letters;
  }

  function fragmentByNum(n) {
    var i;
    var f;
    var list = U.fragments || [];
    for (i = 0; i < list.length; i++) {
      f = list[i];
      if (f.num === n) return f;
    }
    return null;
  }

  function makeChip(num, text) {
    var b = document.createElement("div");
    b.className = "ege-gt-chip";
    b.setAttribute("draggable", "true");
    b.setAttribute("data-n", String(num));
    b.setAttribute("tabindex", "0");
    b.innerHTML =
      '<span class="ege-gt-chip-num" aria-hidden="true">' +
      esc(num) +
      '</span><span class="ege-gt-chip-txt">' +
      esc(text) +
      "</span>";
    return b;
  }

  function shuffleBankChildren() {
    if (!bankEl) return;
    var list = [].slice.call(bankEl.children);
    var i;
    var j;
    var t;
    for (i = list.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      t = list[i];
      list[i] = list[j];
      list[j] = t;
    }
    list.forEach(function (node) {
      bankEl.appendChild(node);
    });
  }

  function allChips() {
    return [].slice.call(document.querySelectorAll(".ege-gt-chip"));
  }

  function clearPick() {
    if (selectedChip) {
      selectedChip.classList.remove("is-picked");
      selectedChip = null;
    }
  }

  function fixEmptyZones() {
    [].forEach.call(document.querySelectorAll(".ege-gt-drop"), function (z) {
      if (z.querySelector(".ege-gt-chip")) {
        z.classList.remove("empty");
        z.classList.add("has-chip");
      } else {
        z.classList.add("empty");
        z.classList.remove("has-chip");
      }
    });
  }

  function placeChipInZone(chip, zone) {
    if (!zone || !chip) return;
    clearPostSubmitUI();
    var prev = zone.querySelector(".ege-gt-chip");
    if (prev && prev !== chip) {
      bankEl.appendChild(prev);
    }
    zone.innerHTML = "";
    zone.appendChild(chip);
    fixEmptyZones();
    saveLayout();
  }

  function moveToBank(chip) {
    if (!chip || !chip.classList.contains("ege-gt-chip")) return;
    clearPostSubmitUI();
    bankEl.appendChild(chip);
    fixEmptyZones();
    saveLayout();
  }

  function hookChip(chip) {
    chip.addEventListener("dragstart", function (e) {
      clearPick();
      e.dataTransfer.setData("text/plain", chip.getAttribute("data-n") || "");
      e.dataTransfer.effectAllowed = "move";
      chip.setAttribute("data-drag", "1");
    });
    chip.addEventListener("dragend", function () {
      chip.removeAttribute("data-drag");
    });
    chip.addEventListener("click", function (e) {
      e.stopPropagation();
      if (selectedChip === chip) {
        clearPick();
        return;
      }
      clearPick();
      selectedChip = chip;
      chip.classList.add("is-picked");
    });
    chip.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        chip.click();
      }
    });
  }

  function saveLayout() {
    var map = {};
    [].forEach.call(document.querySelectorAll(".ege-gt-drop"), function (z) {
      var L = z.getAttribute("data-gap-letter");
      var c = z.querySelector(".ege-gt-chip");
      map[L] = c ? parseInt(c.getAttribute("data-n") || "0", 10) : null;
    });
    try {
      sessionStorage.setItem(storageKey(), JSON.stringify(map));
    } catch (e1) {}
  }

  function restoreLayout() {
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

    var letters = collectGapLetters();
    var li;
    var L;
    var num;
    var chip;
    for (li = 0; li < letters.length; li++) {
      L = letters[li];
      num = map[L];
      if (!num) continue;
      chip = allChips().find(function (c) {
        return parseInt(c.getAttribute("data-n") || "0", 10) === num;
      });
      var zone = root.querySelector(
        '.ege-gt-drop[data-gap-letter="' + L + '"]'
      );
      if (chip && zone && chip.parentNode) {
        placeChipInZone(chip, zone);
      }
    }
    clearPick();
    if (msgEl) {
      msgEl.textContent = "";
      msgEl.className = "ege-gt-msg";
    }
  }

  function buildBankFresh() {
    bankEl.innerHTML = "";
    var list = U.fragments || [];
    var i;
    var fr;
    var c;
    for (i = 0; i < list.length; i++) {
      fr = list[i];
      c = makeChip(fr.num, fr.text);
      hookChip(c);
      bankEl.appendChild(c);
    }
    shuffleBankChildren();
  }

  function wireDropZones() {
    [].forEach.call(document.querySelectorAll(".ege-gt-drop"), function (zone) {
      zone.addEventListener("dragover", function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      });
      zone.addEventListener("drop", function (e) {
        e.preventDefault();
        var id = e.dataTransfer.getData("text/plain");
        var chip = allChips().find(function (c) {
          return c.getAttribute("data-n") === id;
        });
        if (!chip) return;
        placeChipInZone(chip, zone);
        clearPick();
        if (msgEl) {
          msgEl.textContent = "";
          msgEl.className = "ege-gt-msg";
        }
      });
      zone.addEventListener("click", function () {
        if (!selectedChip) return;
        var prev = zone.querySelector(".ege-gt-chip");
        if (prev && prev !== selectedChip) {
          bankEl.appendChild(prev);
        }
        placeChipInZone(selectedChip, zone);
        clearPick();
        if (msgEl) {
          msgEl.textContent = "";
          msgEl.className = "ege-gt-msg";
        }
      });
      zone.addEventListener("keydown", function (e) {
        if (e.key !== "Enter" && e.key !== " ") return;
        if (!selectedChip) return;
        e.preventDefault();
        zone.click();
      });
    });
  }

  function wireBankDrag() {
    bankEl.addEventListener("dragover", function (e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      bankEl.classList.add("drag-over");
    });
    bankEl.addEventListener("dragleave", function (e) {
      if (!bankEl.contains(e.relatedTarget)) bankEl.classList.remove("drag-over");
    });
    bankEl.addEventListener("drop", function (e) {
      e.preventDefault();
      bankEl.classList.remove("drag-over");
      var id = e.dataTransfer.getData("text/plain");
      var chip = allChips().find(function (c) {
        return c.getAttribute("data-n") === id;
      });
      if (chip) moveToBank(chip);
      clearPick();
      saveLayout();
    });
    bankEl.addEventListener("click", function (e) {
      if (e.target.closest(".ege-gt-chip")) return;
      if (selectedChip) {
        moveToBank(selectedChip);
        clearPick();
        saveLayout();
      }
    });
  }

  function renderKeyDetails() {
    var exp = U.explainRu;
    if (!exp) return "";
    var letters = collectGapLetters();
    var html = "<dl>";
    var i;
    var L;
    for (i = 0; i < letters.length; i++) {
      L = letters[i];
      if (exp[L]) {
        html += "<dt>" + esc(L) + "</dt><dd>" + exp[L] + "</dd>";
      }
    }
    if (exp.extra) {
      html += "<dt>Лишний фрагмент</dt><dd>" + exp.extra + "</dd>";
    }
    html += "</dl>";
    return html;
  }

  function refreshGtStatsBar() {
    var el = document.getElementById("ege-gt-stats-bar");
    if (!el || !U || !U.id) return;
    var br = window.__egeReadingGappedTextStats;
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
          '<span class="ege-reading-stats-main">Пока нет записанных проверок по этой теме — нажми «Отправить на проверку».</span>';
      }
    } else {
      main =
        '<span class="ege-reading-stats-main">Сохранение статистики не подключено.</span>';
    }
    el.innerHTML =
      main +
      '<a class="ege-reading-stats-hub" href="ege-statistics.html">Statistics hub →</a>';
  }

  function mountUnit() {
    stopExamTimer();
    clearPick();
    U = units[unitIndex];
    var letters = collectGapLetters();
    var gapsCount = letters.length;
    var fragCount = (U.fragments || []).length;

    var html = "";
    html += '<div class="ege-gt-wrap">';
    html += '<div class="ege-gt-toolbar">';
    html += '<label><span>Тема</span> ';
    html += '<select id="ege-gt-unit-select" class="ege-gt-select">';
    var ui;
    for (ui = 0; ui < units.length; ui++) {
      html +=
        '<option value="' +
        esc(units[ui].id) +
        '"' +
        (ui === unitIndex ? " selected" : "") +
        ">" +
        esc(units[ui].title) +
        "</option>";
    }
    html += "</select></label>";
    html +=
      '<div class="ege-gt-timer-wrap" role="timer" aria-live="polite" aria-atomic="true" title="После отправки на проверку таймер останавливается. «С нуля» — новый отсчёт.">' +
      '<span class="ege-gt-timer-label">Осталось</span>' +
      '<span id="ege-gt-timer" class="ege-gt-timer">00:00</span>' +
      "</div>";
    html += "</div>";

    if (U.examSection) {
      html +=
        '<p class="ege-gt-kicker">Reading · ' + esc(U.examSection) + "</p>";
    }
    html += "<h2 class=\"ege-gt-page-title\">" + esc(U.title) + "</h2>";
    html +=
      '<p class="ege-gt-vibe"><strong>Как играть:</strong> перетащи фразу в пропуск <strong>A–F</strong> или тапни по фразе, потом по ячейке. Вернуть в банк — перетащи обратно или тап по выбранной фразе по серой зоне. Одна фраза из семи <strong>не нужна</strong> — это нормально. Сверху идёт <strong>таймер</strong> (обратный отсчёт); после кнопки <strong>«Отправить на проверку»</strong> он останавливается. <strong>Разбор, лайфхак и ключ</strong> откроются только после отправки — так ты сначала пробуешь сам.</p>';
    html += '<p class="ege-gt-ins">' + U.instructionHtml + "</p>";
    html +=
      '<div class="ege-reading-stats-bar" id="ege-gt-stats-bar" role="region" aria-label="Статистика по этой теме"></div>';

    html += '<div class="ege-gt-layout">';
    html += '<div class="ege-gt-passage">';

    var pi;
    var si;
    var para;
    var seg;
    for (pi = 0; pi < U.paragraphs.length; pi++) {
      para = U.paragraphs[pi];
      html += '<p class="ege-gt-para">';
      if (!para.segments || !para.segments.length) {
        html += "</p>";
        continue;
      }
      for (si = 0; si < para.segments.length; si++) {
        seg = para.segments[si];
        if (seg.t != null) {
          html += esc(seg.t);
        } else if (seg.g) {
          html +=
            '<span class="ege-gt-gap-wrap"><span class="ege-gt-gap-label" aria-hidden="true">' +
            esc(seg.g) +
            '</span><span class="ege-gt-drop empty" role="button" tabindex="0" data-gap-letter="' +
            esc(seg.g) +
            '" title="Пропуск ' +
            esc(seg.g) +
            '"></span></span>';
        }
      }
      html += "</p>";
    }

    html += "</div>";

    html += '<aside class="ege-gt-bank-aside" aria-label="Банк фраз">';
    html += '<div class="ege-gt-bank-card">';
    html += "<h2>Фразы-пазлы</h2>";
    html +=
      '<p class="ege-gt-bank-hint">' +
      fragCount +
      " карточек на " +
      gapsCount +
      ' пропусков — <strong>одна лишняя</strong>. На телефоне удобнее «тап-тап».</p>';
    html +=
      '<div id="ege-gt-bank" class="ege-gt-bank" aria-live="polite"></div>';
    html += '<div class="ege-gt-actions">';
    html +=
      '<button type="button" id="ege-gt-shuffle">Перемешать банк</button>';
    html += '<button type="button" id="ege-gt-reset">С нуля</button>';
    html +=
      '<button type="button" id="ege-gt-check" class="ege-gt-btn-main">Отправить на проверку</button>';
    html += "</div>";
    html += '<p id="ege-gt-msg" class="ege-gt-msg" role="status"></p>';
    html += "</div></aside>";

    html += "</div>";

    html += '<section id="ege-gt-feedback" class="ege-gt-feedback" hidden aria-live="polite">';
    html += '<h3 class="ege-gt-feedback-title">Разбор после отправки</h3>';
    html += '<div id="ege-gt-feedback-body"></div>';
    html += "</section>";

    html += '<div id="ege-gt-key-wrap" class="ege-gt-key-wrap" hidden>';
    html += '<details class="ege-gt-key">';
    html += "<summary>Ключ и коротко почему</summary>";
    html += '<div class="ege-gt-key-body">';
    var ky = U.key || {};
    html += "<p><strong>Вставки:</strong></p><ul>";
    var gi;
    var gapLet;
    for (gi = 0; gi < letters.length; gi++) {
      gapLet = letters[gi];
      var kn = ky[gapLet];
      var frag = fragmentByNum(kn);
      html +=
        "<li><strong>" +
        esc(gapLet) +
        "</strong> → фрагмент " +
        esc(kn) +
        (frag ? ": «" + esc(frag.text) + "»" : "") +
        "</li>";
    }
    html += "</ul>";
    if (U.extraFragmentNum != null) {
      var ex = fragmentByNum(U.extraFragmentNum);
      html +=
        "<p><strong>Лишний:</strong> фрагмент " +
        esc(U.extraFragmentNum) +
        (ex ? " — «" + esc(ex.text) + "»." : ".") +
        "</p>";
    }
    html += renderKeyDetails();
    html += "</div></details>";
    html += "</div>";

    html +=
      '<p class="ege-gt-route-note"><a href="ege-reading.html">&larr; Другие задания Reading</a></p>';
    html += "</div>";

    root.innerHTML = html;

    bankEl = document.getElementById("ege-gt-bank");
    msgEl = document.getElementById("ege-gt-msg");
    timerEl = document.getElementById("ege-gt-timer");

    buildBankFresh();
    wireDropZones();
    wireBankDrag();
    refreshGtStatsBar();

    document.getElementById("ege-gt-unit-select").addEventListener("change", function () {
      var v = this.value;
      var ix = 0;
      for (var j = 0; j < units.length; j++) {
        if (units[j].id === v) {
          ix = j;
          break;
        }
      }
      unitIndex = ix;
      try {
        var url = new URL(location.href);
        url.searchParams.set("unit", units[unitIndex].id);
        history.replaceState({}, "", url.toString());
      } catch (e4) {}
      mountUnit();
    });

    document.getElementById("ege-gt-shuffle").addEventListener("click", function () {
      var inBank = [].filter.call(bankEl.querySelectorAll(".ege-gt-chip"), function (c) {
        return c.parentNode === bankEl;
      });
      inBank.forEach(function (c) {
        bankEl.appendChild(c);
      });
      shuffleBankChildren();
      saveLayout();
    });

    document.getElementById("ege-gt-reset").addEventListener("click", function () {
      clearPostSubmitUI();
      [].forEach.call(document.querySelectorAll(".ege-gt-drop"), function (z) {
        var c = z.querySelector(".ege-gt-chip");
        if (c) bankEl.appendChild(c);
      });
      buildBankFresh();
      fixEmptyZones();
      clearPick();
      try {
        sessionStorage.removeItem(storageKey());
      } catch (e5) {}
      if (msgEl) {
        msgEl.textContent = "Окей, всё сбросили — собери заново.";
        msgEl.className = "ege-gt-msg";
      }
      startExamTimer();
    });

    document.getElementById("ege-gt-check").addEventListener("click", function () {
      var lettersC = collectGapLetters();
      var missing = false;
      var ok = 0;
      var total = lettersC.length;
      var ki;
      var LL;
      var zone;
      var chip;
      var nChip;
      var expect;

      for (ki = 0; ki < lettersC.length; ki++) {
        LL = lettersC[ki];
        zone = root.querySelector('.ege-gt-drop[data-gap-letter="' + LL + '"]');
        chip = zone ? zone.querySelector(".ege-gt-chip") : null;
        if (!chip) {
          missing = true;
          break;
        }
        nChip = parseInt(chip.getAttribute("data-n") || "0", 10);
        expect = (U.key || {})[LL];
        if (nChip === expect) ok++;
      }

      if (missing) {
        clearPostSubmitUI();
        msgEl.textContent =
          "Заполни все пропуски A–F — тогда проверим без гадания.";
        msgEl.className = "ege-gt-msg is-warn";
        return;
      }

      stopExamTimer();

      var zi;
      var zz;
      for (zi = 0; zi < lettersC.length; zi++) {
        zz = root.querySelector(
          '.ege-gt-drop[data-gap-letter="' + lettersC[zi] + '"]'
        );
        if (zz) zz.classList.remove("is-correct", "is-wrong");
      }

      for (ki = 0; ki < lettersC.length; ki++) {
        LL = lettersC[ki];
        zone = root.querySelector('.ege-gt-drop[data-gap-letter="' + LL + '"]');
        chip = zone ? zone.querySelector(".ege-gt-chip") : null;
        nChip = chip ? parseInt(chip.getAttribute("data-n") || "0", 10) : 0;
        expect = (U.key || {})[LL];
        if (!zone) continue;
        if (nChip === expect) zone.classList.add("is-correct");
        else zone.classList.add("is-wrong");
      }

      var fbBody = root.querySelector("#ege-gt-feedback-body");
      var fbEl = root.querySelector("#ege-gt-feedback");
      var kwEl = root.querySelector("#ege-gt-key-wrap");
      if (fbBody) fbBody.innerHTML = renderFeedbackAfterSubmit(lettersC, ok, total);
      if (fbEl) fbEl.removeAttribute("hidden");
      if (kwEl) kwEl.removeAttribute("hidden");

      if (ok === total) {
        msgEl.textContent = "Зачёт: все " + total + " на месте. Красава.";
        msgEl.className = "ege-gt-msg is-ok";
      } else {
        msgEl.textContent =
          "Попало " +
          ok +
          " из " +
          total +
          ". Ниже — на какое слово смотреть; переставь и отправь снова.";
        msgEl.className = "ege-gt-msg is-warn";
      }
      var pct = total ? Math.round((100 * ok) / total) : 0;
      if (
        window.__egeReadingGappedTextStats &&
        typeof window.__egeReadingGappedTextStats.recordAttempt === "function"
      ) {
        window.__egeReadingGappedTextStats.recordAttempt(U.id, pct);
      }
      refreshGtStatsBar();
      saveLayout();
    });

    restoreLayout();
    startExamTimer();

    if (!root.dataset.egeGtUiBound) {
      root.dataset.egeGtUiBound = "1";
      root.addEventListener("click", function (e) {
        if (
          e.target.closest(".ege-gt-chip") ||
          e.target.closest(".ege-gt-drop") ||
          e.target.closest("#ege-gt-bank")
        ) {
          return;
        }
        clearPick();
      });
    }
  }

  mountUnit();
})();
