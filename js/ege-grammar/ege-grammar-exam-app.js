/**
 * ЕГЭ Grammar Exam (§19–24): преобразование слова в пропуске.
 */
(function () {
  var root = document.getElementById("ege-gx-app");
  if (!root) return;

  var pack = window.__EGE_GRAMMAR_EXAM__;
  var units = pack && pack.units;
  if (!units || !units.length) {
    root.innerHTML =
      '<p class="ege-gx-error">Задание не загрузилось. Обновите страницу (F5).</p>';
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
  var msgEl = null;
  var timerEl = null;
  var timerIntervalId = null;
  var timerRemainingSec = 0;
  var checked = false;
  var cheerEl = null;

  function cheerCounts() {
    var inputs = allInputs();
    var filled = 0;
    inputs.forEach(function (inp) {
      if (normalizeAnswer(inp.value)) filled++;
    });
    return { filled: filled, total: inputs.length };
  }

  function refreshCheer(opts) {
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !cheerEl) return;
    opts = opts || {};
    var c = cheerCounts();
    ch.update(cheerEl, {
      phase: opts.phase || (checked ? "checked" : "working"),
      filled: c.filled,
      total: c.total,
      percent: opts.percent
    }, { force: !!(opts && opts.force) });
  }

  function mountCheerRail(itemCount) {
    cheerEl = null;
    var wrap = root.querySelector(".ege-gx-wrap");
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !wrap) return;
    var old = wrap.querySelector("#ege-gx-cheer");
    if (old) old.remove();
    cheerEl = ch.mount(wrap);
    ch.update(
      cheerEl,
      { phase: "welcome", filled: 0, total: itemCount || 0 },
      { force: true }
    );
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizeAnswer(v) {
    return String(v || "")
      .trim()
      .toLowerCase()
      .replace(/[\u2018\u2019\u0060\u00B4]/g, "'")
      .replace(/\s+/g, " ");
  }

  function isCorrect(item, raw) {
    var user = normalizeAnswer(raw);
    if (!user) return false;
    var list = item.answers || [];
    var i;
    for (i = 0; i < list.length; i++) {
      if (normalizeAnswer(list[i]) === user) return true;
    }
    return false;
  }

  function acceptedDisplay(item) {
    var list = item.answers || [];
    var parts = [];
    var i;
    for (i = 0; i < list.length; i++) {
      var s = String(list[i] || "").trim();
      if (s) parts.push(s);
    }
    return parts.join(" / ");
  }

  /** Первая часть after — в строку с пропуском и CAPS; остальное — «хвост» абзаца. */
  function splitAfterParts(item) {
    if (item.afterInline != null || item.afterTail != null) {
      return {
        inline: String(item.afterInline != null ? item.afterInline : ""),
        tail: String(item.afterTail != null ? item.afterTail : "")
      };
    }
    var after = String(item.after != null ? item.after : "");
    if (!after) return { inline: "", tail: "" };
    var m = after.match(/^(\s*[^.!?]*[.!?])\s*(.*)$/);
    if (m && m[2] && m[2].trim()) {
      return { inline: m[1], tail: m[2] };
    }
    return { inline: after, tail: "" };
  }

  function pickWrongHint(item, userRaw) {
    var user = normalizeAnswer(userRaw);
    if (!user) return item.explainWrongRu || "";
    var rules = item.wrongIf || [];
    var i;
    for (i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!rule || !rule.includes) continue;
      if (user.indexOf(normalizeAnswer(rule.includes)) !== -1) {
        return rule.hintRu || item.explainWrongRu || "";
      }
    }
    return item.explainWrongRu || "";
  }

  function storageKey() {
    return "ege_gx_" + U.id + "_draft_v1";
  }

  function unitTimerSec() {
    var packD = window.__EGE_GRAMMAR_EXAM__ || {};
    var def =
      packD.defaultTimerSec != null && packD.defaultTimerSec > 0
        ? Math.floor(packD.defaultTimerSec)
        : 10 * 60;
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
    if (timerRemainingSec <= 0) {
      stopExamTimer();
      if (msgEl && !checked) {
        msgEl.textContent =
          "Время вышло — можно всё равно отправить ответ на проверку.";
        msgEl.className = "ege-gx-msg is-warn";
      }
    }
  }

  function startExamTimer() {
    stopExamTimer();
    timerRemainingSec = unitTimerSec();
    updateExamTimerDisplay();
    timerIntervalId = setInterval(tickExamTimer, 1000);
  }

  function allInputs() {
    return [].slice.call(root.querySelectorAll(".ege-gx-input"));
  }

  function saveDraft() {
    if (checked) return;
    var map = {};
    allInputs().forEach(function (inp) {
      var n = inp.getAttribute("data-exam-num");
      if (n) map[n] = inp.value;
    });
    try {
      sessionStorage.setItem(storageKey(), JSON.stringify(map));
    } catch (e1) {}
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
    allInputs().forEach(function (inp) {
      var n = inp.getAttribute("data-exam-num");
      if (n && map[n] != null) inp.value = String(map[n]);
    });
    updateProgress();
  }

  function updateProgress() {
    var bar = root.querySelector("#ege-gx-progress");
    if (!bar) return;
    var inputs = allInputs();
    var filled = 0;
    inputs.forEach(function (inp) {
      if (normalizeAnswer(inp.value)) filled++;
    });
    bar.textContent = filled + " / " + inputs.length + " заполнено";
    bar.classList.toggle("ege-gx-progress--full", filled === inputs.length);
    if (!checked) refreshCheer({ phase: "working" });
  }

  function clearPostSubmitUI() {
    checked = false;
    var fb = root.querySelector("#ege-gx-feedback");
    var body = root.querySelector("#ege-gx-feedback-body");
    if (fb) fb.setAttribute("hidden", "");
    if (body) body.innerHTML = "";
    allInputs().forEach(function (inp) {
      inp.classList.remove("is-correct", "is-wrong");
      inp.removeAttribute("readonly");
    });
    [].forEach.call(root.querySelectorAll(".ege-gx-item"), function (row) {
      row.classList.remove("is-active", "is-checked-ok", "is-checked-bad");
    });
  }

  function refreshStatsBar() {
    var el = document.getElementById("ege-gx-stats-bar");
    if (!el || !U || !U.id) return;
    var br = window.__egeGrammarExamStats;
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

  function renderPlainLead(item) {
    if (!item.plainRu || !String(item.plainRu).trim()) return "";
    return (
      '<p class="ege-gx-walk-plain"><strong>Коротко:</strong> ' +
      item.plainRu +
      "</p>"
    );
  }

  function renderExamplesBlock(item) {
    var ex = item.examplesRu;
    if (!ex || !ex.length) return "";
    var html = '<div class="ege-gx-walk-examples">';
    html += '<div class="ege-gx-walk-block-title">Примеры рядом</div>';
    html += "<ul>";
    var i;
    for (i = 0; i < ex.length; i++) {
      html += "<li>" + ex[i] + "</li>";
    }
    html += "</ul></div>";
    return html;
  }

  function renderFeedbackCard(item, userRaw, ok) {
    var key =
      item.keyShow ||
      (item.answers && item.answers[0]) ||
      acceptedDisplay(item);
    var parts = splitAfterParts(item);
    var html = "";
    html +=
      '<article class="ege-gx-walk-card' +
      (ok ? " ege-gx-walk-card--ok" : " ege-gx-walk-card--wrong") +
      '" id="ege-gx-review-' +
      esc(String(item.examNum)) +
      '">';
    html += '<div class="ege-gx-walk-head">';
    html +=
      '<span class="ege-gx-walk-num">' +
      esc(String(item.examNum)) +
      "</span>";
    html +=
      '<span class="ege-gx-walk-cue-mini">' +
      esc(item.cue) +
      "</span>";
    html +=
      '<span class="ege-gx-walk-badge' +
      (ok ? " is-ok" : " is-bad") +
      '">' +
      (ok ? "✓ Верно" : "✗ Ошибка") +
      "</span>";
    if (item.grammarTag) {
      html +=
        '<span class="ege-gx-walk-tag">' + esc(item.grammarTag) + "</span>";
    }
    html += "</div>";

    html += '<p class="ege-gx-walk-sentence" lang="en">';
    html +=
      esc(item.before) +
      '<strong class="ege-gx-walk-gap">' +
      esc(ok ? userRaw || key : key) +
      "</strong>" +
      esc(parts.inline) +
      esc(parts.tail ? " " + parts.tail : "");
    html += "</p>";

    if (ok) {
      html += '<div class="ege-gx-walk-block ege-gx-walk-block--ok">';
      html += '<div class="ege-gx-walk-block-title">Почему зачтено</div>';
      html += renderPlainLead(item);
      html +=
        '<div class="ege-gx-walk-block-body">' +
        (item.explainOkRu || item.explainRu || "—") +
        "</div>";
      html += renderExamplesBlock(item);
      html += "</div>";
    } else {
      html += '<div class="ege-gx-walk-block ege-gx-walk-block--bad">';
      html += '<div class="ege-gx-walk-block-title">Где ошибка</div>';
      if (normalizeAnswer(userRaw)) {
        html +=
          '<p class="ege-gx-walk-your">Ты написал: <strong>«' +
          esc(userRaw) +
          "»</strong></p>";
      }
      html += renderPlainLead(item);
      html +=
        '<div class="ege-gx-walk-block-body">' +
        (pickWrongHint(item, userRaw) || item.explainWrongRu || "Форма не совпала с ключом.") +
        "</div>";
      html += "</div>";
      html += '<div class="ege-gx-walk-block ege-gx-walk-block--key">';
      html += '<div class="ege-gx-walk-block-title">Как надо</div>';
      html +=
        '<p class="ege-gx-walk-key-main"><strong>«' +
        esc(key) +
        "»</strong>";
      if ((item.answers || []).length > 1) {
        html +=
          ' <span class="ege-gx-walk-key-alt">(ещё можно: ' +
          esc(acceptedDisplay(item)) +
          ")</span>";
      }
      html += "</p>";
      html += '<div class="ege-gx-walk-block-title">Объяснение по-простому</div>';
      html +=
        '<div class="ege-gx-walk-block-body">' +
        (item.explainRu || "—") +
        "</div>";
      html += renderExamplesBlock(item);
      html += "</div>";
    }

    html += "</article>";
    return html;
  }

  function renderFeedbackAfterSubmit(results) {
    var okCount = 0;
    var total = results.length;
    var i;
    for (i = 0; i < results.length; i++) {
      if (results[i].ok) okCount++;
    }

    var html = "";
    html += renderUnitNavAfterCheck(okCount, total);

    html += '<div class="ege-gx-feedback-score">';
    if (okCount === total) {
      html +=
        '<p class="ege-gx-feedback-result is-ok"><strong>Зачёт:</strong> все ' +
        total +
        " из " +
        total +
        ".</p>";
    } else {
      html +=
        '<p class="ege-gx-feedback-result is-warn"><strong>Итог:</strong> верно ' +
        okCount +
        " из " +
        total +
        " · " +
        Math.round((okCount / total) * 100) +
        "%</p>";
    }
    html += "</div>";

    var life =
      (U.lifehackRu && String(U.lifehackRu).trim()) ||
      "<p><strong>Совет:</strong> смотри на слова слева и справа от пропуска — они подсказывают время, падеж и структуру.</p>";
    html += '<div class="ege-gx-lifehack">' + life + "</div>";

    html += '<h4 class="ege-gx-feedback-sub">Разбор по каждому пропуску</h4>';
    for (i = 0; i < results.length; i++) {
      html += renderFeedbackCard(
        results[i].item,
        results[i].userRaw,
        results[i].ok
      );
    }
    return html;
  }

  function renderUnitNavAfterCheck(okCount, total) {
    if (!units || units.length < 2) return "";
    var perfect = okCount === total;
    var hasPrev = unitIndex > 0;
    var hasNext = unitIndex < units.length - 1;

    var html = "";
    html +=
      '<div class="ege-gx-unit-nav' +
      (perfect ? " ege-gx-unit-nav--perfect" : "") +
      '" id="ege-gx-unit-nav">';

    if (hasPrev) {
      html +=
        '<button type="button" class="ege-gx-unit-nav-btn ege-gx-unit-nav-btn--prev" data-gx-nav="prev">';
      html += '<span class="ege-gx-unit-nav-arrow" aria-hidden="true">←</span> ';
      html += esc(units[unitIndex - 1].title);
      html += "</button>";
    } else {
      html += '<span class="ege-gx-unit-nav-spacer" aria-hidden="true"></span>';
    }

    html += '<div class="ege-gx-unit-nav-mid">';
    html +=
      '<span class="ege-gx-unit-nav-kicker">' +
      (perfect
        ? "Зачёт — можно идти дальше"
        : "Разбор ниже · следующую тему тоже можно открыть") +
      "</span>";
    html +=
      '<span class="ege-gx-unit-nav-pos">Тема ' +
      (unitIndex + 1) +
      " из " +
      units.length +
      "</span>";
    html += "</div>";

    if (hasNext) {
      html +=
        '<button type="button" class="ege-gx-unit-nav-btn ege-gx-unit-nav-btn--next' +
        (perfect ? " ege-gx-unit-nav-btn--primary" : " ege-gx-unit-nav-btn--ghost") +
        '" data-gx-nav="next">';
      html += esc(units[unitIndex + 1].title);
      html += ' <span class="ege-gx-unit-nav-arrow" aria-hidden="true">→</span>';
      html += "</button>";
    } else {
      html +=
        '<a class="ege-gx-unit-nav-btn ege-gx-unit-nav-btn--hub" href="ege-grammar.html"><span class="ege-gx-unit-nav-arrow" aria-hidden="true">←</span> К разделу Grammar</a>';
    }

    html += "</div>";
    return html;
  }

  function wireUnitNavButtons() {
    var nav = root.querySelector("#ege-gx-unit-nav");
    if (!nav) return;
    var prev = nav.querySelector('[data-gx-nav="prev"]');
    var next = nav.querySelector('[data-gx-nav="next"]');
    if (prev) {
      prev.addEventListener("click", function () {
        goToUnitIndex(unitIndex - 1, { scrollTop: true });
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        goToUnitIndex(unitIndex + 1, { scrollTop: true });
      });
    }
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
    clearPostSubmitUI();
    U = units[unitIndex];
    checked = false;

    var items = U.items || [];
    var html = "";
    html += '<div class="ege-gx-wrap">';

    html += '<div class="ege-gx-toolbar">';
    html += '<label><span>Тема</span> ';
    html += '<select id="ege-gx-unit-select" class="ege-gx-select">';
    var ui;
    var gxStats = window.__egeGrammarExamStats;
    var gxPerfect = window.__egeExamUnitPerfectMark;
    for (ui = 0; ui < units.length; ui++) {
      html +=
        '<option value="' +
        esc(units[ui].id) +
        '"' +
        (ui === unitIndex ? " selected" : "") +
        (gxPerfect && gxPerfect.optionPerfectClassAttr
          ? gxPerfect.optionPerfectClassAttr(gxStats, units[ui].id)
          : "") +
        ">" +
        esc(units[ui].title) +
        "</option>";
    }
    html += "</select></label>";
    html +=
      '<div class="ege-gx-timer-wrap" role="timer" aria-live="polite" aria-atomic="true">' +
      '<span class="ege-gx-timer-label">Осталось</span>' +
      '<span id="ege-gx-timer" class="ege-gx-timer">00:00</span>' +
      "</div>";
    html += "</div>";

    if (U.examSection) {
      html +=
        '<p class="ege-gx-kicker">Grammar · ' + esc(U.examSection) + "</p>";
    }
    html += '<h2 class="ege-gx-page-title">' + esc(U.title) + "</h2>";
    html +=
      '<p class="ege-gx-vibe"><strong>Как в бланке:</strong> у каждого номера — своя строка: пропуск слева, <strong>CAPS справа в жёлтой колонке</strong> (только для этого пропуска). Текст ниже строки — продолжение абзаца, без нового слова. <strong>Enter</strong> — следующий пропуск.</p>';
    html += '<p class="ege-gx-ins">' + U.instructionHtml + "</p>";
    html +=
      '<div class="ege-reading-stats-bar" id="ege-gx-stats-bar" role="region" aria-label="Статистика по этой теме"></div>';

    html += '<div class="ege-gx-exam-sheet">';
    if (U.headerTitle) {
      html +=
        '<h3 class="ege-gx-sheet-title">' + esc(U.headerTitle) + "</h3>";
    }

    html += '<div id="ege-gx-progress" class="ege-gx-progress">0 / ' + items.length + " заполнено</div>";

    html += '<div class="ege-gx-sheet-legend" aria-hidden="true">';
    html += '<span class="ege-gx-legend-num">№</span>';
    html += '<span class="ege-gx-legend-text">Текст и пропуск</span>';
    html += '<span class="ege-gx-legend-cue">Базовое слово</span>';
    html += "</div>";

    var currentPara = null;
    var ii;
    var it;
    var parts;
    for (ii = 0; ii < items.length; ii++) {
      it = items[ii];
      parts = splitAfterParts(it);
      var pNum = it.paragraph != null ? it.paragraph : 1;
      if (pNum !== currentPara) {
        if (currentPara != null) html += "</div>";
        html += '<div class="ege-gx-para-block">';
        currentPara = pNum;
      }

      html +=
        '<div class="ege-gx-item" data-exam-num="' +
        esc(String(it.examNum)) +
        '">';
      html += '<div class="ege-gx-item-row">';
      html +=
        '<span class="ege-gx-num" aria-hidden="true">' +
        esc(String(it.examNum)) +
        "</span>";
      html += '<div class="ege-gx-item-main">';
      html += esc(it.before);
      html +=
        '<span class="ege-gx-gap-wrap"><input type="text" class="ege-gx-input" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Пропуск ' +
        esc(String(it.examNum)) +
        ", базовое слово " +
        esc(it.cue) +
        '" data-exam-num="' +
        esc(String(it.examNum)) +
        '" data-cue="' +
        esc(it.cue) +
        '" data-idx="' +
        ii +
        '" /></span>';
      html += esc(parts.inline);
      html += "</div>";
      html += '<div class="ege-gx-cue-slot">';
      html += '<span class="ege-gx-cue-bridge" aria-hidden="true"></span>';
      html +=
        '<span class="ege-gx-cue" title="Базовое слово для пропуска ' +
        esc(String(it.examNum)) +
        '">' +
        esc(it.cue) +
        "</span>";
      html += "</div>";
      html += "</div>";
      if (parts.tail) {
        html +=
          '<p class="ege-gx-item-tail" lang="en">' + esc(parts.tail) + "</p>";
      }
      html += "</div>";
    }
    if (currentPara != null) html += "</div>";
    html += "</div>";

    html += '<div class="ege-gx-actions">';
    html += '<button type="button" id="ege-gx-reset" class="ege-gx-btn-ghost">С нуля</button>';
    html +=
      '<button type="button" id="ege-gx-check" class="ege-gx-btn-main">Отправить на проверку</button>';
    html += "</div>";
    html += '<p id="ege-gx-msg" class="ege-gx-msg" role="status"></p>';

    html += '<section id="ege-gx-feedback" class="ege-gx-feedback" hidden aria-live="polite">';
    html += '<h3 class="ege-gx-feedback-title">Разбор после отправки</h3>';
    html += '<div id="ege-gx-feedback-body"></div>';
    html += "</section>";

    html +=
      '<p class="ege-gx-route-note"><a href="ege-grammar.html">&larr; Другие задания Grammar</a></p>';
    html += "</div>";

    root.innerHTML = html;
    msgEl = document.getElementById("ege-gx-msg");
    timerEl = document.getElementById("ege-gx-timer");
    mountCheerRail(items.length);

    var inputs = allInputs();
    inputs.forEach(function (inp, idx) {
      inp.addEventListener("input", function () {
        if (checked) return;
        saveDraft();
        updateProgress();
        if (msgEl && msgEl.className.indexOf("is-ok") === -1) {
          msgEl.textContent = "";
          msgEl.className = "ege-gx-msg";
        }
      });
      inp.addEventListener("focus", function () {
        [].forEach.call(root.querySelectorAll(".ege-gx-item"), function (row) {
          row.classList.remove("is-active");
        });
        var itemRow = inp.closest(".ege-gx-item");
        if (itemRow) {
          itemRow.classList.add("is-active");
          if (window.matchMedia("(max-width: 720px)").matches) {
            itemRow.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      });
      inp.addEventListener("blur", function () {
        var itemRow = inp.closest(".ege-gx-item");
        if (itemRow) itemRow.classList.remove("is-active");
      });
      inp.addEventListener("keydown", function (e) {
        if (e.key !== "Enter") return;
        e.preventDefault();
        var next = inputs[idx + 1];
        if (next) next.focus();
        else document.getElementById("ege-gx-check").focus();
      });
    });

    document.getElementById("ege-gx-unit-select").addEventListener("change", function () {
      var v = this.value;
      var ix = 0;
      for (var j = 0; j < units.length; j++) {
        if (units[j].id === v) {
          ix = j;
          break;
        }
      }
      goToUnitIndex(ix);
    });

    document.getElementById("ege-gx-reset").addEventListener("click", function () {
      clearPostSubmitUI();
      inputs.forEach(function (inp) {
        inp.value = "";
      });
      try {
        sessionStorage.removeItem(storageKey());
      } catch (e5) {}
      updateProgress();
      if (msgEl) {
        msgEl.textContent = "Чистый лист — можно начинать заново.";
        msgEl.className = "ege-gx-msg";
      }
      startExamTimer();
      if (inputs[0]) inputs[0].focus();
      refreshCheer({ phase: "welcome", force: true });
    });

    document.getElementById("ege-gx-check").addEventListener("click", function () {
      var missing = false;
      var results = [];
      var ok = 0;
      var ki;
      var item;
      var inp;
      var userRaw;

      for (ki = 0; ki < items.length; ki++) {
        item = items[ki];
        inp = root.querySelector(
          '.ege-gx-input[data-exam-num="' + item.examNum + '"]'
        );
        userRaw = inp ? inp.value.trim() : "";
        if (!normalizeAnswer(userRaw)) {
          missing = true;
          break;
        }
      }

      if (missing) {
        clearPostSubmitUI();
        if (msgEl) {
          msgEl.textContent =
            "Заполни все пропуски — тогда проверим без догадок.";
          msgEl.className = "ege-gx-msg is-warn";
        }
        return;
      }

      stopExamTimer();
      checked = true;

      for (ki = 0; ki < items.length; ki++) {
        item = items[ki];
        inp = root.querySelector(
          '.ege-gx-input[data-exam-num="' + item.examNum + '"]'
        );
        userRaw = inp ? inp.value.trim() : "";
        var good = isCorrect(item, userRaw);
        if (good) ok++;
        results.push({ item: item, userRaw: userRaw, ok: good });
        if (inp) {
          inp.classList.remove("is-correct", "is-wrong");
          inp.classList.add(good ? "is-correct" : "is-wrong");
          inp.setAttribute("readonly", "readonly");
        }
        var itemRow = root.querySelector(
          '.ege-gx-item[data-exam-num="' + item.examNum + '"]'
        );
        if (itemRow) {
          itemRow.classList.add(good ? "is-checked-ok" : "is-checked-bad");
        }
      }

      var total = items.length;
      var percent = total ? Math.round((ok / total) * 100) : 0;
      var br = window.__egeGrammarExamStats;
      if (br && typeof br.recordAttempt === "function") {
        br.recordAttempt(U.id, percent);
      }
      var gxSel = document.getElementById("ege-gx-unit-select");
      if (
        gxSel &&
        window.__egeExamUnitPerfectMark &&
        typeof window.__egeExamUnitPerfectMark.paintUnitSelectPerfectMarks ===
          "function"
      ) {
        window.__egeExamUnitPerfectMark.paintUnitSelectPerfectMarks(
          gxSel,
          units,
          br
        );
      }
      refreshStatsBar();

      var fbBody = root.querySelector("#ege-gx-feedback-body");
      var fbEl = root.querySelector("#ege-gx-feedback");
      if (fbBody) fbBody.innerHTML = renderFeedbackAfterSubmit(results);
      wireUnitNavButtons();
      if (fbEl) {
        fbEl.removeAttribute("hidden");
        fbEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (ok === total) {
        if (msgEl) {
          msgEl.textContent = "Идеально: все " + total + " из " + total + ".";
          msgEl.className = "ege-gx-msg is-ok";
        }
      } else {
        if (msgEl) {
          msgEl.textContent =
            "Верно " + ok + " из " + total + ". Разбор ниже — пролистай.";
          msgEl.className = "ege-gx-msg is-warn";
        }
      }
      refreshCheer({ phase: "checked", percent: percent, force: true });
    });

    refreshStatsBar();
    restoreDraft();
    startExamTimer();
    if (inputs[0]) inputs[0].focus();
  }

  mountUnit();
})();
