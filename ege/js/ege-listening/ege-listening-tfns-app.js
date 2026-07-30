/**
 * ЕГЭ Listening · True / False / Not Stated: audio + A–G + hunt + shadowing.
 */
(function () {
  var root = document.getElementById("ege-tfns-app");
  if (!root) return;

  var pack = window.__EGE_LISTENING_TFNS__;
  var units = pack && pack.units;
  if (!units || !units.length) {
    root.innerHTML =
      '<p class="ege-tfns-error">Задание не загрузилось. Обновите страницу (F5).</p>';
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
  var answerRows = [];

  var CHOICES = [
    { val: "t", label: "+", title: "True" },
    { val: "f", label: "−", title: "False" },
    { val: "ns", label: "?", title: "Not stated" }
  ];

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function stmtCount() {
    return (U.statements && U.statements.length) || 7;
  }

  function cheerFilled() {
    var n = 0;
    answerRows.forEach(function (row) {
      if (row && row.val) n++;
    });
    return n;
  }

  function getRowVal(letter) {
    var i;
    for (i = 0; i < answerRows.length; i++) {
      if (answerRows[i].letter === letter) return answerRows[i].val;
    }
    return "";
  }

  function setRowVal(letter, val) {
    var i;
    for (i = 0; i < answerRows.length; i++) {
      if (answerRows[i].letter === letter) {
        answerRows[i].val = val;
        return;
      }
    }
  }

  function refreshCheer(opts) {
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !cheerEl) return;
    opts = opts || {};
    ch.update(
      cheerEl,
      {
        context: "listening-tfns",
        phase: opts.phase || (checked ? "checked" : "working"),
        filled: cheerFilled(),
        total: stmtCount(),
        percent: opts.percent
      },
      { force: !!(opts && opts.force) }
    );
  }

  function mountCheerRail() {
    cheerEl = null;
    var wrap = root.querySelector(".ege-tfns-wrap");
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !wrap) return;
    var old = wrap.querySelector("#ege-gx-cheer");
    if (old) old.remove();
    cheerEl = document.createElement("aside");
    cheerEl.className = "ege-gx-cheer";
    cheerEl.id = "ege-gx-cheer";
    cheerEl.setAttribute("aria-live", "polite");
    cheerEl.innerHTML =
      '<div class="ege-gx-cheer-inner">' +
      '<span class="ege-gx-cheer-spark" aria-hidden="true">✦</span>' +
      '<p class="ege-gx-cheer-text" id="ege-gx-cheer-text"></p>' +
      '<span class="ege-gx-cheer-tag" id="ege-gx-cheer-tag"></span>' +
      "</div>";
    var nav = wrap.querySelector("#ege-tfns-quick-nav");
    if (nav) wrap.insertBefore(cheerEl, nav.nextSibling);
    else wrap.insertBefore(cheerEl, wrap.firstChild);
    ch.update(
      cheerEl,
      {
        context: "listening-tfns",
        phase: "welcome",
        filled: 0,
        total: stmtCount()
      },
      { force: true }
    );
  }

  function wireQuickNav() {
    var goShadow = document.getElementById("ege-tfns-go-shadow");
    var goDict = document.getElementById("ege-tfns-go-dict");
    if (goShadow) {
      goShadow.addEventListener("click", function () {
        var el = document.getElementById("ege-tfns-shadow-root");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    if (goDict) {
      goDict.addEventListener("click", function () {
        var el = document.getElementById("ege-tfns-shadow-root");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(function () {
          var api = window.__EGE_LISTENING_SHADOWING__;
          if (api && api.openDict) api.openDict();
        }, 350);
      });
    }
  }

  function refreshStatsBar() {
    var el = document.getElementById("ege-tfns-stats-bar");
    if (!el || !U.id) return;
    var br = window.__egeListeningTfnsStats;
    var main;
    if (br && typeof br.getUnitStats === "function") {
      var st = br.getUnitStats(U.id);
      main = st
        ? '<span class="ege-reading-stats-main">Эта тема: попыток <strong>' +
          st.attempts +
          '</strong> · лучший <strong>' +
          st.best +
          '%</strong> · последний <strong>' +
          st.last +
          "%</strong></span>"
        : '<span class="ege-reading-stats-main">Пока нет записанных проверок — нажми «Отправить на проверку».</span>';
    } else {
      main =
        '<span class="ege-reading-stats-main">Сохранение статистики не подключено.</span>';
    }
    el.innerHTML =
      main +
      '<a class="ege-reading-stats-hub" href="ege-statistics.html">Statistics hub →</a>';
  }

  function keyLabel(k) {
    if (k === "t") return "+ True";
    if (k === "f") return "− False";
    return "? Not stated";
  }

  function labForLetter(letter) {
    var labs = U.huntLabs || [];
    var i;
    for (i = 0; i < labs.length; i++) {
      if (String(labs[i].letter) === String(letter)) return labs[i];
    }
    return null;
  }

  function becauseCorrectRu(letter) {
    var lab = labForLetter(letter);
    if (!lab) return "";
    if (lab.key === "ns" && lab.nsExplainRu) return lab.nsExplainRu;
    if (lab.explainRu) return lab.explainRu;
    if (lab.keyLineRu) {
      return String(lab.keyLineRu).replace(/^(True|False|Not stated)\s*[—–-]\s*/i, "");
    }
    return "";
  }

  function whyYourWrongRu(got, want) {
    var templates = {
      "t>f": "Перепутал + True и − False.",
      "f>t": "Перепутал − False и + True.",
      "t>ns": "Перепутал + True и ? Not stated.",
      "f>ns": "Перепутал − False и ? Not stated.",
      "ns>t": "Перепутал ? Not stated и + True.",
      "ns>f": "Перепутал ? Not stated и − False."
    };
    return templates[got + ">" + want] || "Перепутаны +, − и ?.";
  }

  function buildStmtFeedbackHtml(got, want, letter, isOk) {
    var because = becauseCorrectRu(letter);
    var mark = isOk ? "✓" : "✗";
    var inner =
      '<p class="ege-tfns-fb-line"><span class="ege-tfns-fb-lab">Твой вариант:</span> <strong>' +
      esc(keyLabel(got)) +
      "</strong>" +
      (isOk ? " — <em>верно</em>" : "") +
      "</p>";
    if (isOk) {
      inner +=
        '<p class="ege-tfns-fb-line"><span class="ege-tfns-fb-lab">Потому что:</span> ' +
        esc(because) +
        "</p>";
    } else {
      inner +=
        '<p class="ege-tfns-fb-line"><span class="ege-tfns-fb-lab">Правильный вариант:</span> <strong>' +
        esc(keyLabel(want)) +
        "</strong> — потому что " +
        esc(because) +
        "</p>" +
        '<p class="ege-tfns-fb-line ege-tfns-fb-line--why"><span class="ege-tfns-fb-lab">Почему твой неверный:</span> ' +
        esc(whyYourWrongRu(got, want)) +
        "</p>";
    }
    return (
      '<span class="ege-tfns-stmt-fb-mark" aria-hidden="true">' +
      mark +
      '</span><div class="ege-tfns-stmt-fb-text">' +
      inner +
      "</div>"
    );
  }

  function clearResultStyles() {
    root.querySelectorAll(".ege-tfns-choice").forEach(function (b) {
      b.classList.remove("is-correct", "is-wrong", "is-key");
    });
    root.querySelectorAll(".ege-tfns-stmt-item").forEach(function (row) {
      row.classList.remove("is-row-ok", "is-row-bad");
      var verdict = row.querySelector(".ege-tfns-stmt-verdict");
      if (verdict) {
        verdict.textContent = "";
        verdict.className = "ege-tfns-stmt-verdict";
        verdict.setAttribute("aria-hidden", "true");
        verdict.removeAttribute("aria-label");
      }
      var fb = row.querySelector(".ege-tfns-stmt-fb");
      if (fb) {
        fb.hidden = true;
        fb.className = "ege-tfns-stmt-fb";
        fb.innerHTML = "";
      }
    });
  }

  function mountHuntIfNeeded() {
    if (huntMounted || !U.huntLabs || !U.huntLabs.length) return;
    var hunt = window.__EGE_LISTENING_TFNS_HUNT__;
    if (!hunt || typeof hunt.mount !== "function") return;
    hunt.mount({
      prefix: "ege-tfns",
      statements: U.statements || [],
      labs: U.huntLabs,
      dialogueParagraphs: U.dialogueParagraphs || []
    });
    huntMounted = true;
  }

  function hasPriorAttempt() {
    var br = window.__egeListeningTfnsStats;
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
    sh.mount({
      rootId: "ege-tfns-shadow-root",
      prefix: "ege-lm-sh",
      audioSrc: U.audioSrc,
      speakers: U.shadowSpeakers,
      dialogueParagraphs: U.dialogueParagraphs || null,
      repeatMode: hasPriorAttempt()
    });
    shadowMounted = true;
  }

  function showHuntStage() {
    var stage = document.getElementById("ege-tfns-hunt-stage");
    if (stage) {
      stage.hidden = false;
      mountHuntIfNeeded();
    }
  }

  function buildLiveItems() {
    var stmts = U.statements || [];
    var key = U.key || {};
    var n = stmts.length;
    var items = [];
    var ok = 0;
    var filled = 0;
    stmts.forEach(function (st) {
      var L = st.letter;
      var ans = getRowVal(L) || "";
      var exp = String(key[L] || "");
      var isFilled = !!ans;
      var isOk = isFilled && ans === exp;
      if (isFilled) filled += 1;
      if (isOk) ok += 1;
      items.push({
        id: L,
        label: "Statement " + L,
        correct: isOk,
        answer: ans,
        expected: exp,
        filled: isFilled
      });
    });
    return {
      items: items,
      correct: ok,
      filled: filled,
      total: n,
      score: n ? Math.round((ok / n) * 100) : 0
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

  function onChoiceClick(letter, val) {
    if (checked) return;
    setRowVal(letter, val);
    root.querySelectorAll('.ege-tfns-choice[data-letter="' + letter + '"]').forEach(
      function (btn) {
        btn.classList.toggle("is-picked", btn.getAttribute("data-val") === val);
      }
    );
    refreshCheer();
    pushLiveDraft();
  }

  function onCheck() {
    var missing = [];
    (U.statements || []).forEach(function (st) {
      if (!getRowVal(st.letter)) missing.push(st.letter);
    });
    if (missing.length) {
      if (msgEl) {
        msgEl.className = "ege-tfns-msg is-warn";
        msgEl.textContent =
          "Отметь + / − / ? для каждого утверждения A–G (осталось: " +
          missing.join(", ") +
          ").";
      }
      return;
    }

    checked = true;
    clearResultStyles();
    var key = U.key || {};
    var ok = 0;
    var html = "";
    (U.statements || []).forEach(function (st) {
      var L = st.letter;
      var got = getRowVal(L);
      var want = key[L];
      var isOk = got === want;
      if (isOk) ok++;

      var row = root.querySelector('.ege-tfns-stmt-item[data-letter="' + L + '"]');
      if (row) {
        row.classList.add(isOk ? "is-row-ok" : "is-row-bad");
        var verdict = row.querySelector(".ege-tfns-stmt-verdict");
        if (verdict) {
          verdict.textContent = isOk ? "✓" : "✗";
          verdict.className =
            "ege-tfns-stmt-verdict " + (isOk ? "ege-tfns-stmt-verdict--ok" : "ege-tfns-stmt-verdict--bad");
          verdict.setAttribute(
            "aria-label",
            isOk ? "Верно" : "Неверно · ключ " + keyLabel(want)
          );
          verdict.removeAttribute("aria-hidden");
        }
        var fb = row.querySelector(".ege-tfns-stmt-fb");
        if (fb) {
          fb.hidden = false;
          fb.className = "ege-tfns-stmt-fb " + (isOk ? "is-ok" : "is-bad");
          fb.innerHTML = buildStmtFeedbackHtml(got, want, L, isOk);
        }
      }

      root.querySelectorAll('.ege-tfns-choice[data-letter="' + L + '"]').forEach(function (btn) {
        var val = btn.getAttribute("data-val");
        if (val === want) btn.classList.add("is-key");
        if (val === got) btn.classList.add(isOk ? "is-correct" : "is-wrong");
      });

      html +=
        "<li class=\"" +
        (isOk ? "ege-tfns-key-li--ok" : "ege-tfns-key-li--bad") +
        "\"><span class=\"ege-tfns-key-li-mark\" aria-hidden=\"true\">" +
        (isOk ? "✓" : "✗") +
        "</span> <strong>" +
        esc(L) +
        "</strong> · " +
        (isOk
          ? esc(keyLabel(want))
          : "твой " + esc(keyLabel(got)) + " → " + esc(keyLabel(want))) +
        "</li>";
    });

    var total = stmtCount();
    var pct = total ? Math.round((100 * ok) / total) : 0;
    var br = window.__egeListeningTfnsStats;
    if (br && typeof br.recordAttempt === "function") {
      br.recordAttempt(U.id, pct);
    }
    refreshStatsBar();
    paintUnitSelect();

    if (msgEl) {
      msgEl.className = ok === total ? "ege-tfns-msg is-ok" : "ege-tfns-msg is-warn";
      msgEl.textContent =
        ok === total
          ? "Отлично — все " + total + " из " + total + ". Ниже — разбор в тексте."
          : "Верно " + ok + " из " + total + " (" + pct + "%). Разбор — под каждым пунктом.";
    }

    var keyBox = document.getElementById("ege-tfns-key-box");
    if (keyBox) {
      keyBox.hidden = false;
      keyBox.innerHTML =
        '<p class="ege-tfns-key-head"><strong>Сводка:</strong> подробный разбор — под каждым пунктом выше.</p><ul class="ege-tfns-key-list">' +
        html +
        "</ul>";
    }

    refreshCheer({ phase: "checked", percent: pct, force: true });
    if (window.EgeLiveRoom && typeof window.EgeLiveRoom.notifyProgress === "function") {
      var livePack = buildLiveItems();
      window.EgeLiveRoom.notifyProgress({
        draft: false,
        score: pct,
        correct: ok,
        total: total,
        items: livePack.items
      });
    }
    var liveStudent =
      window.EgeLiveRoom &&
      typeof window.EgeLiveRoom.isLiveStudent === "function" &&
      window.EgeLiveRoom.isLiveStudent();
    if (liveStudent) {
      var hunt = document.getElementById("ege-tfns-hunt-stage");
      if (hunt) hunt.hidden = true;
    } else {
      showHuntStage();
    }
  }

  function onReset() {
    checked = false;
    answerRows.forEach(function (row) {
      row.val = "";
    });
    clearResultStyles();
    root.querySelectorAll(".ege-tfns-choice").forEach(function (b) {
      b.classList.remove("is-picked");
    });
    if (msgEl) {
      msgEl.textContent = "";
      msgEl.className = "ege-tfns-msg";
    }
    var keyBox = document.getElementById("ege-tfns-key-box");
    if (keyBox) {
      keyBox.hidden = true;
      keyBox.innerHTML = "";
    }
    var stage = document.getElementById("ege-tfns-hunt-stage");
    if (stage) stage.hidden = true;
    refreshCheer({ phase: "working", force: true });
    pushLiveDraft();
  }

  function paintUnitSelect() {
    var sel = document.getElementById("ege-tfns-unit-select");
    if (!sel) return;
    var pm = window.__egeExamUnitPerfectMark;
    if (pm && typeof pm.paintUnitSelectPerfectMarks === "function") {
      pm.paintUnitSelectPerfectMarks(sel, units, window.__egeListeningTfnsStats);
    }
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
    answerRows = [];

    var repeatVisit = hasPriorAttempt();
    var html = '<div class="ege-tfns-wrap">';

    if (repeatVisit) {
      html +=
        '<nav id="ege-tfns-quick-nav" class="ege-tfns-quick-nav" aria-label="Быстрый переход">' +
        '<span class="ege-tfns-quick-nav-lab">Повтор</span>' +
        '<button type="button" class="ege-tfns-quick-nav-btn ege-tfns-quick-nav-btn--shadow" id="ege-tfns-go-shadow">Аудиосуфлирование</button>' +
        '<button type="button" class="ege-tfns-quick-nav-btn ege-tfns-quick-nav-btn--dict" id="ege-tfns-go-dict">Быстрый словарь</button>' +
        "</nav>";
    }

    html += '<div class="ege-tfns-toolbar">';
    html += '<label><span>Тема</span> <select id="ege-tfns-unit-select" class="ege-gx-select">';
    var ui;
    var stBr = window.__egeListeningTfnsStats;
    var pm = window.__egeExamUnitPerfectMark;
    for (ui = 0; ui < units.length; ui++) {
      html +=
        '<option value="' +
        esc(units[ui].id) +
        '"' +
        (ui === unitIndex ? " selected" : "") +
        (pm && pm.optionPerfectClassAttr
          ? pm.optionPerfectClassAttr(stBr, units[ui].id)
          : "") +
        ">" +
        esc(units[ui].title) +
        "</option>";
    }
    html += "</select></label></div>";

    if (U.examSection) {
      html += '<p class="ege-tfns-kicker">Listening · ' + esc(U.examSection) + "</p>";
    }
    html += '<h2 class="ege-tfns-page-title">' + esc(U.title) + "</h2>";
    html += '<p class="ege-tfns-ins">' + U.instructionHtml + "</p>";

    if (U.listenTipsRu) {
      html +=
        '<details class="ege-tfns-tips"><summary>+/−/? — на что смотреть</summary><div class="ege-tfns-tips-body">' +
        U.listenTipsRu +
        "</div></details>";
    }

    html +=
      '<div class="ege-reading-stats-bar" id="ege-tfns-stats-bar" role="region" aria-label="Статистика"></div>';

    html += '<div class="ege-tfns-audio">';
    html +=
      '<label class="ege-tfns-audio-label" for="ege-tfns-audio">Аудио (2 прослушивания)</label>';
    html +=
      '<audio id="ege-tfns-audio" controls preload="metadata" src="' +
      esc(U.audioSrc) +
      '"></audio></div>';

    html += '<div class="ege-tfns-legend">';
    html += '<span class="ege-tfns-leg ege-tfns-leg--t"><strong>+</strong> True</span>';
    html += '<span class="ege-tfns-leg ege-tfns-leg--f"><strong>−</strong> False</span>';
    html +=
      '<span class="ege-tfns-leg ege-tfns-leg--ns"><strong>?</strong> Not stated</span>';
    html += "</div>";

    html += '<ol class="ege-tfns-stmt-list">';
    (U.statements || []).forEach(function (st) {
      answerRows.push({ letter: st.letter, val: "" });
      html +=
        '<li class="ege-tfns-stmt-item" data-letter="' + esc(st.letter) + '">';
      html +=
        '<span class="ege-tfns-stmt-letter">' +
        esc(st.letter) +
        '.<span class="ege-tfns-stmt-verdict" aria-hidden="true"></span></span>';
      html += '<p class="ege-tfns-stmt-text">' + esc(st.text) + "</p>";
      html +=
        '<div class="ege-tfns-choices" role="group" aria-label="Ответ для ' +
        esc(st.letter) +
        '">';
      CHOICES.forEach(function (c) {
        html +=
          '<button type="button" class="ege-tfns-choice ege-tfns-choice--' +
          c.val +
          '" data-letter="' +
          esc(st.letter) +
          '" data-val="' +
          c.val +
          '" title="' +
          esc(c.title) +
          '">' +
          esc(c.label) +
          "</button>";
      });
      html +=
        '</div><div class="ege-tfns-stmt-fb" hidden aria-live="polite"></div></li>';
    });
    html += "</ol>";

    html += '<p class="ege-tfns-msg" id="ege-tfns-msg" aria-live="polite"></p>';
    html += '<div class="ege-tfns-btn-row">';
    html +=
      '<button type="button" id="ege-tfns-check" class="ege-tfns-btn ege-tfns-btn--check">Отправить на проверку</button>';
    html +=
      '<button type="button" id="ege-tfns-reset" class="ege-tfns-btn ege-tfns-btn--reset">Сбросить</button>';
    html += "</div>";
    html += '<div id="ege-tfns-key-box" class="ege-tfns-key-box" hidden></div>';

    html += '<div id="ege-tfns-hunt-stage" class="ege-tfns-hunt-stage" hidden>';
    html += '<h3 class="ege-tfns-hunt-title">Этап 2 · Разбор в тексте</h3>';
    html +=
      '<p class="ege-tfns-hunt-lead">Вкладки A–G · полный абзац диалога · <strong style="color:#86efac">зелёным</strong> — опора для +/−; для <strong>?</strong> — прочитай абзац.</p>';
    html += '<div class="ege-tfns-hunt-tools">';
    html += '<span class="ege-tfns-hunt-tools-lab">Кисть:</span>';
    html +=
      '<button type="button" class="ege-tfns-hunt-brush ege-tfns-hunt-brush--green is-active" data-brush="green">Опора · зелёный</button>';
    html +=
      '<button type="button" class="ege-tfns-hunt-brush ege-tfns-hunt-brush--erase" data-brush="erase">Стереть</button>';
    html += "</div>";
    html += '<div class="ege-tfns-hunt-tabs" role="tablist">';
    (U.statements || []).forEach(function (st, si) {
      html +=
        '<button type="button" class="ege-tfns-hunt-tab' +
        (si === 0 ? " is-active" : "") +
        '" role="tab">' +
        esc(st.letter) +
        "</button>";
    });
    html += "</div>";
    html += '<div class="ege-tfns-hunt-workspace">';
    html +=
      '<aside id="ege-tfns-hunt-target" class="ege-tfns-hunt-stmts" aria-label="Утверждение"></aside>';
    html += '<div class="ege-tfns-hunt-main">';
    html += '<p id="ege-tfns-hunt-prompt" class="ege-tfns-hunt-prompt"></p>';
    html +=
      '<div id="ege-tfns-hunt-passage" class="ege-tfns-hunt-passage lies-passage"></div>';
    html += '<div class="ege-tfns-hunt-actions">';
    html +=
      '<button type="button" id="ege-tfns-hunt-verify" class="ege-tfns-btn ege-tfns-btn--check">Проверить фразу</button>';
    html +=
      '<button type="button" id="ege-tfns-hunt-reset" class="ege-tfns-btn ege-tfns-btn--reset">Сбросить</button>';
    html += "</div>";
    html += '<div id="ege-tfns-hunt-fb" class="ege-tfns-hunt-fb"></div>';
    html += "</div></div></div>";

    html += '<div id="ege-tfns-shadow-root" class="ege-tfns-shadow-root"></div>';
    html += "</div>";

    root.innerHTML = html;
    msgEl = document.getElementById("ege-tfns-msg");

    root.querySelectorAll(".ege-tfns-choice").forEach(function (btn) {
      btn.addEventListener("click", function () {
        onChoiceClick(btn.getAttribute("data-letter"), btn.getAttribute("data-val"));
      });
    });

    document.getElementById("ege-tfns-check").addEventListener("click", onCheck);
    document.getElementById("ege-tfns-reset").addEventListener("click", onReset);

    var unitSel = document.getElementById("ege-tfns-unit-select");
    if (unitSel) {
      unitSel.addEventListener("change", function () {
        for (var ix = 0; ix < units.length; ix++) {
          if (units[ix].id === unitSel.value) {
            goToUnitIndex(ix);
            break;
          }
        }
      });
    }

    mountCheerRail();
    wireQuickNav();
    refreshStatsBar();
    paintUnitSelect();
    mountShadowIfNeeded();
  }

  mountUnit();

  if (window.EgeLiveRoom && typeof window.EgeLiveRoom.mount === "function") {
    window.EgeLiveRoom.mount({
      deckPrefix: "ege-listening-tfns",
      getUnitId: function () {
        return U && U.id;
      },
      getUnitData: function () {
        return U
          ? {
              id: U.id,
              bankTitle: "Утверждения A–G",
              bankLines: (U.statements || []).map(function (st) {
                return { id: st.letter, text: st.text };
              })
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
