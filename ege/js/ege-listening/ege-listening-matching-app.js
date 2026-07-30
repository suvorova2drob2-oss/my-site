/**
 * ЕГЭ Listening Matching (задание 1): audio + A–F ↔ 1–7 + post-check hunt.
 */
(function () {
  var root = document.getElementById("ege-lm-app");
  if (!root) return;

  var pack = window.__EGE_LISTENING_MATCHING__;
  var units = pack && pack.units;
  if (!units || !units.length) {
    root.innerHTML =
      '<p class="ege-lm-error">Задание не загрузилось. Обновите страницу (F5).</p>';
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
  var msgEl = null;
  var cheerEl = null;
  var huntMounted = false;
  var shadowMounted = false;
  var selects = [];

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function speakerCount() {
    return (U.key && U.key.length) || (U.speakerLabels && U.speakerLabels.length) || 6;
  }

  function cheerFilled() {
    var n = 0;
    selects.forEach(function (sel) {
      if (sel && sel.value) n++;
    });
    return n;
  }

  function refreshCheer(opts) {
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !cheerEl) return;
    opts = opts || {};
    ch.update(
      cheerEl,
      {
        context: "listening",
        phase: opts.phase || (checked ? "checked" : "working"),
        filled: cheerFilled(),
        total: speakerCount(),
        percent: opts.percent
      },
      { force: !!(opts && opts.force) }
    );
  }

  function mountCheerRail() {
    cheerEl = null;
    var wrap = root.querySelector(".ege-lm-wrap");
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !wrap) return;
    var old = wrap.querySelector("#ege-gx-cheer");
    if (old) old.remove();
    cheerEl = document.createElement("aside");
    cheerEl.className = "ege-gx-cheer";
    cheerEl.id = "ege-gx-cheer";
    cheerEl.setAttribute("aria-live", "polite");
    cheerEl.setAttribute("aria-label", "Подбадривание");
    cheerEl.innerHTML =
      '<div class="ege-gx-cheer-inner">' +
      '<span class="ege-gx-cheer-spark" aria-hidden="true">✦</span>' +
      '<p class="ege-gx-cheer-text" id="ege-gx-cheer-text"></p>' +
      '<span class="ege-gx-cheer-tag" id="ege-gx-cheer-tag"></span>' +
      "</div>";
    var nav = wrap.querySelector("#ege-lm-quick-nav");
    if (nav) {
      wrap.insertBefore(cheerEl, nav.nextSibling);
    } else {
      wrap.insertBefore(cheerEl, wrap.firstChild);
    }
    ch.update(
      cheerEl,
      { context: "listening", phase: "welcome", filled: 0, total: speakerCount() },
      { force: true }
    );
  }

  function wireQuickNav() {
    var goShadow = document.getElementById("ege-lm-go-shadow");
    var goDict = document.getElementById("ege-lm-go-dict");
    if (goShadow) {
      goShadow.addEventListener("click", function () {
        var shRoot = document.getElementById("ege-lm-shadow-root");
        if (shRoot) shRoot.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    if (goDict) {
      goDict.addEventListener("click", function () {
        var shRoot = document.getElementById("ege-lm-shadow-root");
        if (shRoot) shRoot.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(function () {
          var api = window.__EGE_LISTENING_SHADOWING__;
          if (api && api.openDict) api.openDict();
        }, 350);
      });
    }
  }

  function refreshStatsBar() {
    var el = document.getElementById("ege-lm-stats-bar");
    if (!el || !U.id) return;
    var br = window.__egeListeningMatchingStats;
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
          '<span class="ege-reading-stats-main">Пока нет записанных проверок — нажми «Отправить на проверку».</span>';
      }
    } else {
      main =
        '<span class="ege-reading-stats-main">Сохранение статистики не подключено.</span>';
    }
    el.innerHTML =
      main +
      '<a class="ege-reading-stats-hub" href="ege-statistics.html">Statistics hub →</a>';
  }

  function paintUnitSelect() {
    var sel = document.getElementById("ege-lm-unit-select");
    if (!sel) return;
    var br = window.__egeListeningMatchingStats;
    var pm = window.__egeExamUnitPerfectMark;
    if (pm && typeof pm.paintUnitSelectPerfectMarks === "function") {
      pm.paintUnitSelectPerfectMarks(sel, units, br);
    }
  }

  function getValues() {
    return selects.map(function (s) {
      return s.value;
    });
  }

  function rebuildSelects() {
    var vals = getValues();
    selects.forEach(function (sel, idx) {
      var current = vals[idx];
      var usedElsewhere = {};
      vals.forEach(function (v, j) {
        if (j !== idx && v) usedElsewhere[v] = true;
      });
      sel.innerHTML = "";
      var opt0 = document.createElement("option");
      opt0.value = "";
      opt0.textContent = "— выбери —";
      sel.appendChild(opt0);
      (U.statements || []).forEach(function (st) {
        var num = String(st.num);
        if (!usedElsewhere[num] || num === current) {
          var opt = document.createElement("option");
          opt.value = num;
          opt.textContent = st.num;
          if (num === current) opt.selected = true;
          sel.appendChild(opt);
        }
      });
    });
  }

  function clearResultStyles() {
    selects.forEach(function (s) {
      s.classList.remove("is-correct", "is-wrong");
      var row = s.closest ? s.closest(".ege-lm-match-row") : null;
      if (row) {
        var tip = row.querySelector(".ege-lm-correct-tip");
        if (tip) tip.remove();
      }
    });
  }

  function mountHuntIfNeeded() {
    if (huntMounted || !U.huntLabs || !U.huntLabs.length) return;
    var hunt = window.__EGE_GUIDED_TRANSCRIPT_HUNT__ || window.__EGE_LISTENING_MATCHING_HUNT__;
    if (!hunt || typeof hunt.mount !== "function") return;
    hunt.mount({
      prefix: "ege-lm",
      labs: U.huntLabs,
      statements: U.statements || [],
      extraStatementNum: U.extraStatementNum,
      guided: true
    });
    huntMounted = true;
  }

  function hasPriorAttempt() {
    var br = window.__egeListeningMatchingStats;
    if (br && typeof br.getUnitStats === "function") {
      var st = br.getUnitStats(U.id);
      return !!(st && st.attempts > 0);
    }
    return false;
  }

  function mountShadowIfNeeded() {
    if (shadowMounted || !U.shadowSpeakers || !U.shadowSpeakers.length) return;
    var sh = window.__EGE_LISTENING_SHADOWING__;
    if (!sh || typeof sh.mount !== "function") return;
    var repeat = hasPriorAttempt();
    sh.mount({
      rootId: "ege-lm-shadow-root",
      prefix: "ege-lm-sh",
      audioSrc: U.audioSrc,
      speakers: U.shadowSpeakers,
      repeatMode: repeat
    });
    shadowMounted = true;
  }

  function buildLiveItems() {
    var n = speakerCount();
    var vals = getValues();
    var labels = U.speakerLabels || ["A", "B", "C", "D", "E", "F"];
    var items = [];
    var ok = 0;
    var filled = 0;
    var i;
    for (i = 0; i < n; i++) {
      var ans = String(vals[i] || "");
      var exp = String(U.key[i]);
      var isFilled = !!ans;
      var isOk = isFilled && ans === exp;
      if (isFilled) filled += 1;
      if (isOk) ok += 1;
      items.push({
        id: String(labels[i] || i + 1),
        label: "Speaker " + String(labels[i] || i + 1),
        correct: isOk,
        answer: ans,
        expected: exp,
        filled: isFilled
      });
    }
    return {
      items: items,
      correct: ok,
      filled: filled,
      total: n,
      score: Math.round((ok / n) * 100)
    };
  }

  function pushLiveDraft() {
    if (
      !window.EgeLiveRoom ||
      typeof window.EgeLiveRoom.isLiveStudent !== "function" ||
      !window.EgeLiveRoom.isLiveStudent()
    ) {
      return;
    }
    if (checked) return;
    var pack = buildLiveItems();
    window.EgeLiveRoom.notifyProgress({
      draft: true,
      score: pack.score,
      correct: pack.correct,
      total: pack.total,
      items: pack.items
    });
  }

  function isLiveStudentNow() {
    return (
      window.EgeLiveRoom &&
      typeof window.EgeLiveRoom.isLiveStudent === "function" &&
      window.EgeLiveRoom.isLiveStudent()
    );
  }

  function showHuntStage() {
    var stage = document.getElementById("ege-lm-hunt-stage");
    if (stage) {
      stage.hidden = false;
      stage.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    var keyBox = document.getElementById("ege-lm-key-box");
    if (keyBox && isLiveStudentNow()) keyBox.hidden = false;
    mountHuntIfNeeded();
  }

  function onCheck() {
    var vals = getValues();
    var n = speakerCount();
    if (vals.some(function (v) {
      return !v;
    })) {
      if (msgEl) {
        msgEl.className = "ege-lm-msg is-warn";
        msgEl.textContent =
          "Выбери утверждение (1–7) для каждого говорящего A–F, затем нажми «Отправить на проверку».";
      }
      return;
    }
    var dup = {};
    var hasDup = false;
    vals.forEach(function (v) {
      if (dup[v]) hasDup = true;
      dup[v] = true;
    });
    if (hasDup) {
      if (msgEl) {
        msgEl.className = "ege-lm-msg is-warn";
        msgEl.textContent =
          "Каждую цифру 1–7 можно использовать только один раз.";
      }
      return;
    }

    checked = true;
    clearResultStyles();
    var ok = 0;
    var i;
    for (i = 0; i < n; i++) {
      var want = String(U.key[i]);
      var got = vals[i];
      if (got === want) {
        selects[i].classList.add("is-correct");
        ok++;
      } else {
        selects[i].classList.add("is-wrong");
        var row = selects[i].closest ? selects[i].closest(".ege-lm-match-row") : null;
        if (row) {
          var tip = document.createElement("span");
          tip.className = "ege-lm-correct-tip";
          tip.setAttribute("aria-label", "Правильный ответ " + want);
          tip.innerHTML = "верно → <strong>" + esc(want) + "</strong>";
          row.appendChild(tip);
        }
      }
    }

    var pct = Math.round((ok / n) * 100);
    var br = window.__egeListeningMatchingStats;
    if (br && typeof br.recordAttempt === "function") {
      br.recordAttempt(U.id, pct);
    }
    paintUnitSelect();
    refreshStatsBar();

    if (msgEl) {
      if (ok === n) {
        msgEl.className = "ege-lm-msg is-ok";
        msgEl.textContent = "Отлично — все " + n + " из " + n + ".";
      } else {
        msgEl.className = "ege-lm-msg is-warn";
        msgEl.textContent = "Верно " + ok + " из " + n + " (" + pct + "%).";
      }
    }

    var keyHtml = "";
    var labels = U.speakerLabels || ["A", "B", "C", "D", "E", "F"];
    function stmtTextForNum(num) {
      var stList = U.statements || [];
      var j;
      for (j = 0; j < stList.length; j++) {
        if (String(stList[j].num) === String(num)) return stList[j].text || "";
      }
      return "";
    }
    for (i = 0; i < n; i++) {
      keyHtml +=
        "<li><strong>Speaker " +
        esc(labels[i]) +
        "</strong> → <strong>" +
        esc(String(U.key[i])) +
        "</strong> · " +
        esc(stmtTextForNum(U.key[i])) +
        "</li>";
    }
    var keyBox = document.getElementById("ege-lm-key-box");
    if (keyBox) {
      keyBox.innerHTML =
        "<p class=\"ege-lm-key-head\"><strong>Ключ:</strong></p><ul class=\"ege-lm-key-list\">" +
        keyHtml +
        "</ul>" +
        (U.extraStatementNum
          ? "<p class=\"ege-lm-key-extra\">Лишнее утверждение: <strong>" +
            esc(String(U.extraStatementNum)) +
            "</strong></p>"
          : "");
      keyBox.hidden = isLiveStudentNow();
    }

    refreshCheer({ phase: "checked", percent: pct, force: true });
    if (window.EgeLiveRoom && typeof window.EgeLiveRoom.notifyProgress === "function") {
      var pack = buildLiveItems();
      window.EgeLiveRoom.notifyProgress({
        draft: false,
        score: pct,
        correct: ok,
        total: n,
        items: pack.items
      });
    }

    var liveStudent = isLiveStudentNow();
    if (liveStudent) {
      var hunt = document.getElementById("ege-lm-hunt-stage");
      if (hunt) hunt.hidden = true;
      var keyBoxLive = document.getElementById("ege-lm-key-box");
      if (keyBoxLive) keyBoxLive.hidden = true;
      var shRoot = document.getElementById("ege-lm-shadow-root");
      if (shRoot) {
        shRoot.hidden = true;
        shRoot.innerHTML = "";
      }
      if (window.EgeLiveRoom && typeof window.EgeLiveRoom.showStudentDone === "function") {
        window.EgeLiveRoom.showStudentDone(false);
      }
      showLiveAfterBar(pct, ok, n);
      var matchCol = root.querySelector(".ege-lm-col--match");
      if (matchCol) matchCol.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      hideLiveAfterBar();
      showHuntStage();
    }
  }

  function hideLiveAfterBar() {
    var bar = document.getElementById("ege-lm-live-after");
    if (bar) bar.hidden = true;
  }

  function showLiveAfterBar(pct, ok, n) {
    var bar = document.getElementById("ege-lm-live-after");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "ege-lm-live-after";
      bar.className = "ege-lm-live-after";
      var keyBox = document.getElementById("ege-lm-key-box");
      if (keyBox && keyBox.parentNode) {
        keyBox.parentNode.insertBefore(bar, keyBox.nextSibling);
      } else {
        var btnRow = root.querySelector(".ege-lm-btn-row");
        if (btnRow && btnRow.parentNode) btnRow.parentNode.insertBefore(bar, btnRow.nextSibling);
      }
    }
    bar.hidden = false;
    bar.innerHTML =
      '<p class="ege-lm-live-after-score"><strong>' +
      esc(String(pct)) +
      "%</strong> · верно " +
      esc(String(ok)) +
      " из " +
      esc(String(n)) +
      "</p>" +
      '<p class="ege-lm-live-after-lead">Сверху уже видно, где ошибки (зелёным — правильный номер). Разбор в тексте — по желанию.</p>' +
      '<div class="ege-lm-live-after-btns">' +
      '<button type="button" class="ege-lm-btn ege-lm-btn--check" id="ege-lm-live-hunt">Разбор задания</button>' +
      '<button type="button" class="ege-lm-btn ege-lm-btn--reset" id="ege-lm-live-restart">Начать заново</button>' +
      "</div>";
    var huntBtn = document.getElementById("ege-lm-live-hunt");
    var restartBtn = document.getElementById("ege-lm-live-restart");
    if (huntBtn) {
      huntBtn.onclick = function () {
        showHuntStage();
      };
    }
    if (restartBtn) {
      restartBtn.onclick = function () {
        hideLiveAfterBar();
        onReset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    }
  }

  function onReset() {
    checked = false;
    hideLiveAfterBar();
    selects.forEach(function (sel) {
      sel.value = "";
    });
    clearResultStyles();
    rebuildSelects();
    if (msgEl) {
      msgEl.textContent = "";
      msgEl.className = "ege-lm-msg";
    }
    var keyBox = document.getElementById("ege-lm-key-box");
    if (keyBox) {
      keyBox.hidden = true;
      keyBox.innerHTML = "";
    }
    var stage = document.getElementById("ege-lm-hunt-stage");
    if (stage) {
      stage.hidden = true;
      stage.innerHTML = "";
    }
    huntMounted = false;
    var shRoot = document.getElementById("ege-lm-shadow-root");
    if (shRoot && isLiveStudentNow()) {
      shRoot.hidden = true;
      shRoot.innerHTML = "";
      shadowMounted = false;
    }
    refreshCheer({ phase: "working", force: true });
    pushLiveDraft();
  }

  function goToUnitIndex(ix) {
    unitIndex = ix;
    U = units[unitIndex];
    checked = false;
    huntMounted = false;
    shadowMounted = false;
    try {
      var url = new URL(location.href);
      url.searchParams.set("unit", U.id);
      history.replaceState(null, "", url.pathname + url.search);
    } catch (eNav) {}
    mountUnit();
    window.scrollTo(0, 0);
  }

  function mountUnit() {
    checked = false;
    huntMounted = false;
    shadowMounted = false;
    selects = [];

    var n = speakerCount();
    var labels = U.speakerLabels || ["A", "B", "C", "D", "E", "F"];
    var liveMode = !!(
      typeof location !== "undefined" &&
      new URLSearchParams(location.search).get("room")
    );
    var repeatVisit = hasPriorAttempt() && !liveMode;
    var html = "";
    html += '<div class="ege-lm-wrap">';

    if (repeatVisit) {
      html +=
        '<nav id="ege-lm-quick-nav" class="ege-lm-quick-nav" aria-label="Быстрый переход">' +
        '<span class="ege-lm-quick-nav-lab">Повтор</span>' +
        '<button type="button" class="ege-lm-quick-nav-btn ege-lm-quick-nav-btn--shadow" id="ege-lm-go-shadow">Аудиосуфлирование</button>' +
        '<button type="button" class="ege-lm-quick-nav-btn ege-lm-quick-nav-btn--dict" id="ege-lm-go-dict">Быстрый словарь</button>' +
        "</nav>";
    }

    html += '<div class="ege-lm-toolbar">';
    html += '<label><span>Тема</span> ';
    html += '<select id="ege-lm-unit-select" class="ege-gx-select">';
    var ui;
    var lmStats = window.__egeListeningMatchingStats;
    var lmPerfect = window.__egeExamUnitPerfectMark;
    for (ui = 0; ui < units.length; ui++) {
      html +=
        '<option value="' +
        esc(units[ui].id) +
        '"' +
        (ui === unitIndex ? " selected" : "") +
        (lmPerfect && lmPerfect.optionPerfectClassAttr
          ? lmPerfect.optionPerfectClassAttr(lmStats, units[ui].id)
          : "") +
        ">" +
        esc(units[ui].title) +
        "</option>";
    }
    html += "</select></label>";
    html += "</div>";

    if (U.examSection) {
      html += '<p class="ege-lm-kicker">Listening · ' + esc(U.examSection) + "</p>";
    }
    html += '<h2 class="ege-lm-page-title">' + esc(U.title) + "</h2>";
    html += '<p class="ege-lm-ins">' + U.instructionHtml + "</p>";

    if (U.listenTipsRu) {
      html +=
        '<details class="ege-lm-tips"><summary>На что обращать внимание при прослушивании</summary><div class="ege-lm-tips-body">' +
        U.listenTipsRu +
        "</div></details>";
    }

    html +=
      '<div class="ege-reading-stats-bar" id="ege-lm-stats-bar" role="region" aria-label="Статистика"></div>';

    html += '<div class="ege-lm-audio">';
    html += '<label class="ege-lm-audio-label" for="ege-lm-audio">Аудио (2 прослушивания, как на экзамене)</label>';
    html +=
      '<audio id="ege-lm-audio" controls preload="metadata" src="' +
      esc(U.audioSrc) +
      '">Ваш браузер не поддерживает audio.</audio>';
    html += "</div>";

    html += '<div class="ege-lm-split">';
    html += '<section class="ege-lm-col ege-lm-col--stmts" aria-labelledby="ege-lm-stmt-head">';
    html += '<h3 id="ege-lm-stmt-head" class="ege-lm-col-title">Утверждения 1–7</h3>';
    html += '<ol class="ege-lm-stmt-list" start="1">';
    (U.statements || []).forEach(function (st) {
      html +=
        '<li class="ege-lm-stmt-item"><span class="ege-lm-stmt-num">' +
        st.num +
        ".</span> " +
        esc(st.text) +
        "</li>";
    });
    html += "</ol></section>";

    html += '<section class="ege-lm-col ege-lm-col--match" aria-labelledby="ege-lm-match-head">';
    html += '<h3 id="ege-lm-match-head" class="ege-lm-col-title">Говорящие A–F</h3>';
    html += '<div id="ege-lm-match-rows" class="ege-lm-match-rows">';
    var si;
    for (si = 0; si < n; si++) {
      html +=
        '<div class="ege-lm-match-row"><label for="ege-lm-spk-' +
        si +
        '">Speaker ' +
        esc(labels[si]) +
        '</label><select id="ege-lm-spk-' +
        si +
        '" class="ege-lm-match-select" aria-label="Утверждение для Speaker ' +
        esc(labels[si]) +
        '"></select></div>';
    }
    html += "</div></section>";
    html += "</div>";

    html += '<p class="ege-lm-msg" id="ege-lm-msg" aria-live="polite"></p>';
    html += '<div class="ege-lm-btn-row">';
    html +=
      '<button type="button" id="ege-lm-check" class="ege-lm-btn ege-lm-btn--check">Отправить на проверку</button>';
    html +=
      '<button type="button" id="ege-lm-reset" class="ege-lm-btn ege-lm-btn--reset">Сбросить</button>';
    html += "</div>";

    html += '<div id="ege-lm-key-box" class="ege-lm-key-box" hidden></div>';

    html += '<div id="ege-lm-hunt-stage" class="ege-lm-hunt-stage" hidden>';
    html += '<h3 class="ege-lm-hunt-title">Разбор в тексте · парафраз</h3>';
    html +=
      '<p class="ege-lm-hunt-lead">Слева — твоё утверждение. В транскрипте отметь <strong style="color:#86efac">зелёным</strong> все парафразы. После проверки внизу — ключ и коротко «не путай с…».</p>';

    html += '<div class="ege-lm-hunt-tools">';
    html += '<span class="ege-lm-hunt-tools-lab">Кисть:</span>';
    html +=
      '<button type="button" class="ege-lm-hunt-brush ege-lm-hunt-brush--green is-active" data-brush="green" aria-pressed="true">Парафраз · зелёный</button>';
    html +=
      '<button type="button" class="ege-lm-hunt-brush ege-lm-hunt-brush--red" data-brush="red" aria-pressed="false" hidden>Парафраз · красный</button>';
    html +=
      '<button type="button" class="ege-lm-hunt-brush ege-lm-hunt-brush--erase" data-brush="erase" aria-pressed="false">Стереть</button>';
    html += "</div>";

    html += '<div class="ege-lm-hunt-tabs" role="tablist">';
    for (si = 0; si < n; si++) {
      html +=
        '<button type="button" class="ege-lm-hunt-tab' +
        (si === 0 ? " is-active" : "") +
        '" role="tab" data-spk="' +
        si +
        '" aria-selected="' +
        (si === 0 ? "true" : "false") +
        '">Speaker ' +
        esc(labels[si]) +
        "</button>";
    }
    html += "</div>";

    html += '<p id="ege-lm-hunt-meta" class="ege-lm-hunt-meta" aria-live="polite"></p>';
    html += '<div class="ege-lm-hunt-workspace">';
    html +=
      '<aside id="ege-lm-hunt-stmts" class="ege-lm-hunt-stmts" aria-label="Утверждения для поиска парафраза"></aside>';
    html += '<div class="ege-lm-hunt-main">';
    html += '<p id="ege-lm-hunt-prompt" class="ege-lm-hunt-prompt"></p>';
    html +=
      '<div id="ege-lm-hunt-passage" class="ege-lm-hunt-passage lies-passage" aria-label="Транскрипт"></div>';
    html += '<div class="ege-lm-hunt-actions">';
    html +=
      '<button type="button" id="ege-lm-hunt-verify" class="ege-lm-btn ege-lm-btn--check">Проверить парафразы</button>';
    html +=
      '<button type="button" id="ege-lm-hunt-reset" class="ege-lm-btn ege-lm-btn--reset">Сбросить этого спикера</button>';
    html += "</div>";
    html += '<div id="ege-lm-hunt-fb" class="ege-lm-hunt-fb" role="status"></div>';
    html += '<div id="ege-lm-hunt-toast" class="ege-lm-hunt-toast" aria-live="polite"></div>';
    html += "</div></div>";
    html += "</div>";

    html += '<div id="ege-lm-shadow-root" class="ege-lm-shadow-root"' +
      (liveMode ? " hidden" : "") +
      "></div>";

    html += "</div>";

    root.innerHTML = html;
    msgEl = document.getElementById("ege-lm-msg");

    for (si = 0; si < n; si++) {
      selects.push(document.getElementById("ege-lm-spk-" + si));
    }
    rebuildSelects();

    selects.forEach(function (sel) {
      sel.addEventListener("change", function (ev) {
        var target = ev.target;
        var newVal = target.value;
        if (newVal) {
          selects.forEach(function (other) {
            if (other !== target && other.value === newVal) {
              other.value = "";
            }
          });
        }
        clearResultStyles();
        if (msgEl) msgEl.textContent = "";
        rebuildSelects();
        refreshCheer();
        pushLiveDraft();
      });
    });

    document.getElementById("ege-lm-check").addEventListener("click", onCheck);
    document.getElementById("ege-lm-reset").addEventListener("click", onReset);

    var unitSel = document.getElementById("ege-lm-unit-select");
    if (unitSel) {
      unitSel.addEventListener("change", function () {
        var next = unitSel.value;
        for (var ix = 0; ix < units.length; ix++) {
          if (units[ix].id === next) {
            goToUnitIndex(ix);
            break;
          }
        }
      });
    }

    mountCheerRail();
    wireQuickNav();
    refreshStatsBar();
    if (!liveMode) mountShadowIfNeeded();
  }

  mountUnit();

  if (window.EgeLiveRoom && typeof window.EgeLiveRoom.mount === "function") {
    window.EgeLiveRoom.mount({
      deckPrefix: "ege-listening-matching",
      getUnitId: function () {
        return U && U.id;
      },
      getUnitData: function () {
        return U
          ? {
              id: U.id,
              statements: U.statements || [],
              key: U.key || [],
              speakerLabels: U.speakerLabels || []
            }
          : null;
      },
      onOpenHunt: function () {
        showHuntStage();
      },
      onRestart: function () {
        onReset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
})();
