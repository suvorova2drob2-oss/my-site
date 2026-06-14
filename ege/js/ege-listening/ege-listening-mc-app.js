/**
 * ЕГЭ Listening · Multiple Choice (задание 3): audio + 3–9 + hunt + shadowing.
 */
(function () {
  var root = document.getElementById("ege-lmc-app");
  if (!root) return;

  var pack = window.__EGE_LISTENING_MC__;
  var units = pack && pack.units;
  if (!units || !units.length) {
    root.innerHTML =
      '<p class="ege-lmc-error">Задание не загрузилось. Обновите страницу (F5).</p>';
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

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function qCount() {
    return (U.questions && U.questions.length) || 7;
  }

  function cheerFilled() {
    var n = 0;
    answerRows.forEach(function (row) {
      if (row && row.val) n++;
    });
    return n;
  }

  function getRowVal(examNum) {
    var i;
    for (i = 0; i < answerRows.length; i++) {
      if (String(answerRows[i].examNum) === String(examNum)) return answerRows[i].val;
    }
    return 0;
  }

  function setRowVal(examNum, val) {
    var i;
    for (i = 0; i < answerRows.length; i++) {
      if (String(answerRows[i].examNum) === String(examNum)) {
        answerRows[i].val = val;
        return;
      }
    }
  }

  function questionFor(examNum) {
    var i;
    for (i = 0; i < (U.questions || []).length; i++) {
      if (String(U.questions[i].examNum) === String(examNum)) return U.questions[i];
    }
    return null;
  }

  function choiceText(q, num) {
    if (!q || !q.choices) return "";
    var i;
    for (i = 0; i < q.choices.length; i++) {
      if (q.choices[i].num === num) return q.choices[i].text;
    }
    return "";
  }

  function choiceLabel(q, num) {
    return String(num) + ") " + choiceText(q, num);
  }

  function refreshCheer(opts) {
    var ch = window.__EGE_EXAM_CHEER__;
    if (!ch || !cheerEl) return;
    opts = opts || {};
    ch.update(
      cheerEl,
      {
        context: "listening-mc",
        phase: opts.phase || (checked ? "checked" : "working"),
        filled: cheerFilled(),
        total: qCount(),
        percent: opts.percent
      },
      { force: !!(opts && opts.force) }
    );
  }

  function mountCheerRail() {
    cheerEl = null;
    var wrap = root.querySelector(".ege-lmc-wrap");
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
    var nav = wrap.querySelector("#ege-lmc-quick-nav");
    if (nav) wrap.insertBefore(cheerEl, nav.nextSibling);
    else wrap.insertBefore(cheerEl, wrap.firstChild);
    ch.update(
      cheerEl,
      {
        context: "listening-mc",
        phase: "welcome",
        filled: 0,
        total: qCount()
      },
      { force: true }
    );
  }

  function wireQuickNav() {
    var goShadow = document.getElementById("ege-lmc-go-shadow");
    var goDict = document.getElementById("ege-lmc-go-dict");
    if (goShadow) {
      goShadow.addEventListener("click", function () {
        var el = document.getElementById("ege-lmc-shadow-root");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    if (goDict) {
      goDict.addEventListener("click", function () {
        var el = document.getElementById("ege-lmc-shadow-root");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(function () {
          var api = window.__EGE_LISTENING_SHADOWING__;
          if (api && api.openDict) api.openDict();
        }, 350);
      });
    }
  }

  function refreshStatsBar() {
    var el = document.getElementById("ege-lmc-stats-bar");
    if (!el || !U.id) return;
    var br = window.__egeListeningMcStats;
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

  function labForExamNum(examNum) {
    var labs = U.huntLabs || [];
    var i;
    for (i = 0; i < labs.length; i++) {
      if (String(labs[i].examNum) === String(examNum)) return labs[i];
    }
    return null;
  }

  function becauseCorrectRu(examNum) {
    var lab = labForExamNum(examNum);
    if (lab && lab.explainRu) return lab.explainRu;
    var q = questionFor(examNum);
    if (q && q.explainRu) return q.explainRu;
    return "";
  }

  function whyYourWrongRu(got, q) {
    if (!q) return "Выбран неверный вариант — переслушай опорную фразу.";
    if (q.distractorWrongRu && q.distractorWrongRu[got]) return q.distractorWrongRu[got];
    return (
      "Вариант " +
      got +
      " — ловушка: в записи другая мысль, чем в формулировке ответа."
    );
  }

  function buildQFeedbackHtml(got, want, examNum, isOk) {
    var q = questionFor(examNum);
    var because = becauseCorrectRu(examNum);
    var mark = isOk ? "✓" : "✗";
    var inner =
      '<p class="ege-lmc-fb-line"><span class="ege-lmc-fb-lab">Твой вариант:</span> <strong>' +
      esc(choiceLabel(q, got)) +
      "</strong>" +
      (isOk ? " — <em>верно</em>" : "") +
      "</p>";
    if (isOk) {
      inner +=
        '<p class="ege-lmc-fb-line"><span class="ege-lmc-fb-lab">Потому что:</span> ' +
        esc(because) +
        "</p>";
    } else {
      inner +=
        '<p class="ege-lmc-fb-line"><span class="ege-lmc-fb-lab">Правильный вариант:</span> <strong>' +
        esc(choiceLabel(q, want)) +
        "</strong> — потому что " +
        esc(because) +
        "</p>" +
        '<p class="ege-lmc-fb-line ege-lmc-fb-line--why"><span class="ege-lmc-fb-lab">Почему твой неверный:</span> ' +
        esc(whyYourWrongRu(got, q)) +
        "</p>";
    }
    return (
      '<span class="ege-lmc-q-fb-mark" aria-hidden="true">' +
      mark +
      '</span><div class="ege-lmc-q-fb-text">' +
      inner +
      "</div>"
    );
  }

  function clearResultStyles() {
    root.querySelectorAll(".ege-lmc-opt").forEach(function (lab) {
      lab.classList.remove("is-correct", "is-wrong", "is-key", "is-picked");
    });
    root.querySelectorAll(".ege-lmc-q-item").forEach(function (row) {
      row.classList.remove("is-row-ok", "is-row-bad");
      var verdict = row.querySelector(".ege-lmc-q-verdict");
      if (verdict) {
        verdict.textContent = "";
        verdict.className = "ege-lmc-q-verdict";
        verdict.setAttribute("aria-hidden", "true");
        verdict.removeAttribute("aria-label");
      }
      var fb = row.querySelector(".ege-lmc-q-fb");
      if (fb) {
        fb.hidden = true;
        fb.className = "ege-lmc-q-fb";
        fb.innerHTML = "";
      }
    });
  }

  function mountHuntIfNeeded() {
    if (huntMounted || !U.huntLabs || !U.huntLabs.length) return;
    var hunt = window.__EGE_LISTENING_MC_HUNT__;
    if (!hunt || typeof hunt.mount !== "function") return;
    hunt.mount({
      prefix: "ege-lmc",
      questions: U.questions || [],
      labs: U.huntLabs,
      dialogueParagraphs: U.dialogueParagraphs || []
    });
    huntMounted = true;
  }

  function hasPriorAttempt() {
    var br = window.__egeListeningMcStats;
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
      rootId: "ege-lmc-shadow-root",
      prefix: "ege-lm-sh",
      audioSrc: U.audioSrc,
      speakers: U.shadowSpeakers,
      dialogueParagraphs: U.dialogueParagraphs || null,
      repeatMode: hasPriorAttempt()
    });
    shadowMounted = true;
  }

  function showHuntStage() {
    var stage = document.getElementById("ege-lmc-hunt-stage");
    if (stage) {
      stage.hidden = false;
      mountHuntIfNeeded();
    }
  }

  function onChoiceClick(examNum, val) {
    if (checked) return;
    setRowVal(examNum, val);
    root.querySelectorAll('.ege-lmc-opt[data-exam="' + examNum + '"]').forEach(function (lab) {
      lab.classList.toggle("is-picked", parseInt(lab.getAttribute("data-val"), 10) === val);
    });
    refreshCheer();
  }

  function onCheck() {
    var missing = [];
    (U.questions || []).forEach(function (q) {
      if (!getRowVal(q.examNum)) missing.push(q.examNum);
    });
    if (missing.length) {
      if (msgEl) {
        msgEl.className = "ege-lmc-msg is-warn";
        msgEl.textContent =
          "Выбери вариант 1, 2 или 3 для каждого вопроса (осталось: " +
          missing.join(", ") +
          ").";
      }
      return;
    }

    checked = true;
    clearResultStyles();
    var ok = 0;
    var html = "";
    (U.questions || []).forEach(function (q) {
      var num = q.examNum;
      var got = getRowVal(num);
      var want = q.key;
      var isOk = got === want;
      if (isOk) ok++;

      var row = root.querySelector('.ege-lmc-q-item[data-exam="' + num + '"]');
      if (row) {
        row.classList.add(isOk ? "is-row-ok" : "is-row-bad");
        var verdict = row.querySelector(".ege-lmc-q-verdict");
        if (verdict) {
          verdict.textContent = isOk ? "✓" : "✗";
          verdict.className =
            "ege-lmc-q-verdict " +
            (isOk ? "ege-lmc-q-verdict--ok" : "ege-lmc-q-verdict--bad");
          verdict.setAttribute(
            "aria-label",
            isOk ? "Верно" : "Неверно · ключ " + want
          );
          verdict.removeAttribute("aria-hidden");
        }
        var fb = row.querySelector(".ege-lmc-q-fb");
        if (fb) {
          fb.hidden = false;
          fb.className = "ege-lmc-q-fb " + (isOk ? "is-ok" : "is-bad");
          fb.innerHTML = buildQFeedbackHtml(got, want, num, isOk);
        }
      }

      root.querySelectorAll('.ege-lmc-opt[data-exam="' + num + '"]').forEach(function (lab) {
        var val = parseInt(lab.getAttribute("data-val"), 10);
        lab.classList.remove("is-correct", "is-wrong", "is-key");
        if (val === want) lab.classList.add("is-key");
        if (val === got) lab.classList.add(isOk ? "is-correct" : "is-wrong");
      });

      html +=
        "<li class=\"" +
        (isOk ? "ege-lmc-key-li--ok" : "ege-lmc-key-li--bad") +
        "\"><span class=\"ege-lmc-key-li-mark\" aria-hidden=\"true\">" +
        (isOk ? "✓" : "✗") +
        "</span> <strong>" +
        esc(String(num)) +
        "</strong> · " +
        (isOk
          ? esc(String(want) + ")")
          : "твой " + esc(String(got)) + " → " + esc(String(want))) +
        "</li>";
    });

    var total = qCount();
    var pct = total ? Math.round((100 * ok) / total) : 0;
    var br = window.__egeListeningMcStats;
    if (br && typeof br.recordAttempt === "function") {
      br.recordAttempt(U.id, pct);
    }
    refreshStatsBar();
    paintUnitSelect();

    if (msgEl) {
      msgEl.className = ok === total ? "ege-lmc-msg is-ok" : "ege-lmc-msg is-warn";
      msgEl.textContent =
        ok === total
          ? "Отлично — все " + total + " из " + total + ". Ниже — разбор в тексте."
          : "Верно " + ok + " из " + total + " (" + pct + "%). Разбор — под каждым вопросом.";
    }

    var keyBox = document.getElementById("ege-lmc-key-box");
    if (keyBox) {
      keyBox.hidden = false;
      keyBox.innerHTML =
        '<p class="ege-lmc-key-head"><strong>Сводка:</strong> подробный разбор — под каждым вопросом выше.</p><ul class="ege-lmc-key-list">' +
        html +
        "</ul>";
    }

    refreshCheer({ phase: "checked", percent: pct, force: true });
    showHuntStage();
  }

  function onReset() {
    checked = false;
    answerRows.forEach(function (row) {
      row.val = 0;
    });
    clearResultStyles();
    if (msgEl) {
      msgEl.textContent = "";
      msgEl.className = "ege-lmc-msg";
    }
    var keyBox = document.getElementById("ege-lmc-key-box");
    if (keyBox) {
      keyBox.hidden = true;
      keyBox.innerHTML = "";
    }
    var stage = document.getElementById("ege-lmc-hunt-stage");
    if (stage) stage.hidden = true;
    refreshCheer({ phase: "working", force: true });
  }

  function paintUnitSelect() {
    var sel = document.getElementById("ege-lmc-unit-select");
    if (!sel) return;
    var pm = window.__egeExamUnitPerfectMark;
    if (pm && typeof pm.paintUnitSelectPerfectMarks === "function") {
      pm.paintUnitSelectPerfectMarks(sel, units, window.__egeListeningMcStats);
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
    var html = '<div class="ege-lmc-wrap">';

    if (repeatVisit) {
      html +=
        '<nav id="ege-lmc-quick-nav" class="ege-lmc-quick-nav" aria-label="Быстрый переход">' +
        '<span class="ege-lmc-quick-nav-lab">Повтор</span>' +
        '<button type="button" class="ege-lmc-quick-nav-btn ege-lmc-quick-nav-btn--shadow" id="ege-lmc-go-shadow">Аудиосуфлирование</button>' +
        '<button type="button" class="ege-lmc-quick-nav-btn ege-lmc-quick-nav-btn--dict" id="ege-lmc-go-dict">Быстрый словарь</button>' +
        "</nav>";
    }

    html += '<div class="ege-lmc-toolbar">';
    html += '<label><span>Тема</span> <select id="ege-lmc-unit-select" class="ege-gx-select">';
    var ui;
    var stBr = window.__egeListeningMcStats;
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
      html += '<p class="ege-lmc-kicker">Listening · ' + esc(U.examSection) + "</p>";
    }
    html += '<h2 class="ege-lmc-page-title">' + esc(U.title) + "</h2>";
    html += '<p class="ege-lmc-ins">' + U.instructionHtml + "</p>";

    if (U.listenTipsRu) {
      html +=
        '<details class="ege-lmc-tips"><summary>MC — на что смотреть</summary><div class="ege-lmc-tips-body">' +
        U.listenTipsRu +
        "</div></details>";
    }

    html +=
      '<div class="ege-reading-stats-bar" id="ege-lmc-stats-bar" role="region" aria-label="Статистика"></div>';

    html += '<div class="ege-lmc-audio">';
    html +=
      '<label class="ege-lmc-audio-label" for="ege-lmc-audio">Аудио (2 прослушивания)</label>';
    html +=
      '<audio id="ege-lmc-audio" controls preload="metadata" src="' +
      esc(U.audioSrc) +
      '"></audio></div>';

    html += '<ol class="ege-lmc-q-list" start="3">';
    (U.questions || []).forEach(function (q) {
      answerRows.push({ examNum: q.examNum, val: 0 });
      html += '<li class="ege-lmc-q-item" data-exam="' + esc(String(q.examNum)) + '">';
      html +=
        '<span class="ege-lmc-q-num">' +
        esc(String(q.examNum)) +
        '.<span class="ege-lmc-q-verdict" aria-hidden="true"></span></span>';
      html += '<p class="ege-lmc-q-prompt">' + q.prompt + "</p>";
      html += '<div class="ege-lmc-opts" role="radiogroup" aria-label="Ответ для ' + esc(String(q.examNum)) + '">';
      var ci;
      for (ci = 0; ci < q.choices.length; ci++) {
        var ch = q.choices[ci];
        html +=
          '<button type="button" class="ege-lmc-opt" data-exam="' +
          esc(String(q.examNum)) +
          '" data-val="' +
          ch.num +
          '"><span class="ege-lmc-opt-num">' +
          esc(String(ch.num)) +
          ')</span> <span class="ege-lmc-opt-text">' +
          esc(ch.text) +
          "</span></button>";
      }
      html += '</div><div class="ege-lmc-q-fb" hidden aria-live="polite"></div></li>';
    });
    html += "</ol>";

    html += '<p class="ege-lmc-msg" id="ege-lmc-msg" aria-live="polite"></p>';
    html += '<div class="ege-lmc-btn-row">';
    html +=
      '<button type="button" id="ege-lmc-check" class="ege-lmc-btn ege-lmc-btn--check">Отправить на проверку</button>';
    html +=
      '<button type="button" id="ege-lmc-reset" class="ege-lmc-btn ege-lmc-btn--reset">Сбросить</button>';
    html += "</div>";
    html += '<div id="ege-lmc-key-box" class="ege-lmc-key-box" hidden></div>';

    html += '<div id="ege-lmc-hunt-stage" class="ege-lmc-hunt-stage" hidden>';
    html += '<h3 class="ege-lmc-hunt-title">Этап 2 · Правильный вариант + парафраз</h3>';
    html +=
      '<p class="ege-lmc-hunt-lead">Слева — <strong>правильный вариант</strong> ответа. Справа — <strong>найди парафраз</strong> в записи: <strong style="color:#86efac">зелёным</strong> опора, <strong style="color:#fda4af">красным</strong> ловушка.</p>';
    html += '<div class="ege-lmc-hunt-tools">';
    html += '<span class="ege-lmc-hunt-tools-lab">Кисть:</span>';
    html +=
      '<button type="button" class="ege-lmc-hunt-brush ege-lmc-hunt-brush--green is-active" data-brush="green">Опора · зелёный</button>';
    html +=
      '<button type="button" class="ege-lmc-hunt-brush ege-lmc-hunt-brush--red" data-brush="red">Ловушка · красный</button>';
    html +=
      '<button type="button" class="ege-lmc-hunt-brush ege-lmc-hunt-brush--erase" data-brush="erase">Стереть</button>';
    html += "</div>";
    html += '<div class="ege-lmc-hunt-tabs" role="tablist">';
    (U.questions || []).forEach(function (q, si) {
      html +=
        '<button type="button" class="ege-lmc-hunt-tab' +
        (si === 0 ? " is-active" : "") +
        '" role="tab">' +
        esc(String(q.examNum)) +
        "</button>";
    });
    html += "</div>";
    html += '<div class="ege-lmc-hunt-workspace">';
    html +=
      '<aside id="ege-lmc-hunt-target" class="ege-lmc-hunt-stmts" aria-label="Вопрос"></aside>';
    html += '<div class="ege-lmc-hunt-main">';
    html += '<p id="ege-lmc-hunt-prompt" class="ege-lmc-hunt-prompt"></p>';
    html +=
      '<div id="ege-lmc-hunt-passage" class="ege-lmc-hunt-passage lies-passage"></div>';
    html += '<div class="ege-lmc-hunt-actions">';
    html +=
      '<button type="button" id="ege-lmc-hunt-verify" class="ege-lmc-btn ege-lmc-btn--check">Проверить фразу</button>';
    html +=
      '<button type="button" id="ege-lmc-hunt-reset" class="ege-lmc-btn ege-lmc-btn--reset">Сбросить</button>';
    html += "</div>";
    html += '<div id="ege-lmc-hunt-fb" class="ege-lmc-hunt-fb"></div>';
    html += "</div></div></div>";

    html += '<div id="ege-lmc-shadow-root" class="ege-lmc-shadow-root"></div>';
    html += "</div>";

    root.innerHTML = html;
    msgEl = document.getElementById("ege-lmc-msg");

    root.querySelectorAll(".ege-lmc-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        onChoiceClick(
          btn.getAttribute("data-exam"),
          parseInt(btn.getAttribute("data-val"), 10)
        );
      });
    });

    document.getElementById("ege-lmc-check").addEventListener("click", onCheck);
    document.getElementById("ege-lmc-reset").addEventListener("click", onReset);

    var unitSel = document.getElementById("ege-lmc-unit-select");
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
})();
