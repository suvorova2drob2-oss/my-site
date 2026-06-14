/**
 * EGE Speaking · Task 2 — question-master (4 direct questions).
 * window.__EGE_SPEAKING_QUESTION_MASTER__.mount()
 */
(function (W, D) {
  "use strict";

  var PREF_UNIT = "ege_speaking_task2_unit_v1";
  var DEFAULT_PREPARE = 90;
  var DEFAULT_QUESTION = 20;
  var SPEECH_LANG = "en-GB";

  var QUESTION_STARTERS =
    /^(how|what|when|where|who|whom|whose|why|which|do|does|did|is|are|was|were|can|could|will|would|have|has|had|shall|should|may|might|must)\b/i;

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/['']/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  function formatClock(sec) {
    var s = Math.max(0, Math.ceil(sec));
    if (s >= 60) {
      var m = Math.floor(s / 60);
      var r = s % 60;
      return m + ":" + (r < 10 ? "0" : "") + r;
    }
    return String(s);
  }

  function mount() {
    var pack = W.__EGE_SPEAKING_TASK2_DATA__;
    var units = pack && Array.isArray(pack.units) ? pack.units : [];
    if (!units.length) return;

    var unitSelect = D.getElementById("qmUnitSelect");
    var titleEl = D.getElementById("qmTitle");
    var leadEl = D.getElementById("qmLead");
    var phaseBadge = D.getElementById("qmPhaseBadge");
    var timerEl = D.getElementById("qmTimer");
    var timerLabel = D.getElementById("qmTimerLabel");
    var statusEl = D.getElementById("qmStatus");
    var adEl = D.getElementById("qmAd");
    var promptPanel = D.getElementById("qmPromptPanel");
    var questionInput = D.getElementById("qmQuestionInput");
    var feedbackEl = D.getElementById("qmFeedback");
    var resultsEl = D.getElementById("qmResults");
    var selfCheckEl = D.getElementById("qmSelfCheck");
    var grammarEl = D.getElementById("qmGrammarTips");
    var sideHelpTitleEl = D.getElementById("qmSideHelpTitle");
    var modelAnswersEl = D.getElementById("qmModelAnswers");
    var btnStart = D.getElementById("qmBtnStart");
    var btnSkipPrepare = D.getElementById("qmBtnSkipPrepare");
    var btnNext = D.getElementById("qmBtnNext");
    var btnRestart = D.getElementById("qmBtnRestart");
    var donePanel = D.getElementById("qmDonePanel");
    var questionWrap = D.getElementById("qmQuestionWrap");
    var micToggle = D.getElementById("qmMicToggle");
    var statsBarEl = D.getElementById("qm-stats-bar");

    if (!unitSelect || !adEl || !btnStart) return;

    var unit = units[0];
    /** @type {'idle'|'prepare'|'question'|'done'} */
    var phase = "idle";
    var tickId = 0;
    var remainingSec = 0;
    var qIndex = 0;
    var answers = [];
    var micRec = null;
    var micShouldRun = false;

    function getUnitById(id) {
      var i;
      for (i = 0; i < units.length; i++) {
        if (units[i].id === id) return units[i];
      }
      return units[0];
    }

    function saveUnitPref(id) {
      try {
        localStorage.setItem(PREF_UNIT, id);
      } catch (e) {}
    }

    function loadUnitPref() {
      try {
        return localStorage.getItem(PREF_UNIT) || "";
      } catch (e) {
        return "";
      }
    }

    function populateUnitSelect() {
      var html = "";
      var i;
      for (i = 0; i < units.length; i++) {
        html +=
          '<option value="' +
          esc(units[i].id) +
          '">' +
          esc(units[i].unitLabel || "Unit") +
          " · " +
          esc(units[i].title || units[i].id) +
          "</option>";
      }
      unitSelect.innerHTML = html;
      var pref = loadUnitPref();
      if (
        pref &&
        units.some(function (u) {
          return u.id === pref;
        })
      ) {
        unitSelect.value = pref;
      }
    }

    function validateQuestion(text, prompt) {
      var t = norm(text);
      var issues = [];
      var score = 0;
      if (!t) {
        return { ok: false, score: 0, issues: ["Пустой ответ — напишите или продиктуйте вопрос."] };
      }
      if (!/[?？]$/.test(String(text || "").trim())) {
        issues.push("Нужен знак вопроса ? в конце.");
      } else {
        score += 8;
      }
      if (QUESTION_STARTERS.test(t)) {
        score += 10;
      } else {
        issues.push("Direct question обычно начинается с How/What/Do/Does/Is/Are…");
      }
      if (/^(i|you|we|they|he|she|it)\s+[a-z]+/i.test(t) && !QUESTION_STARTERS.test(t)) {
        issues.push("Похоже на утверждение, не на вопрос.");
        score -= 5;
      }
      var kws = (prompt && prompt.keywords) || [];
      var hasKw = false;
      var ki;
      for (ki = 0; ki < kws.length; ki++) {
        if (t.indexOf(norm(kws[ki])) !== -1) {
          hasKw = true;
          break;
        }
      }
      if (hasKw) {
        score += 7;
      } else {
        issues.push("В вопросе не видно темы «" + (prompt ? prompt.label : "") + "».");
      }
      score = Math.max(0, Math.min(25, score));
      return {
        ok: issues.length === 0,
        score: score,
        issues: issues
      };
    }

    function renderAd() {
      var imgHtml = unit.imageSrc
        ? '<img class="es-qm-ad-img" src="' +
          esc(unit.imageSrc) +
          '" alt="' +
          esc(unit.imageAlt || unit.title || "Advertisement") +
          '" />'
        : '<div class="es-qm-ad-placeholder" aria-hidden="true"><span>' +
          esc(unit.adPlaceholder || unit.title || "Advertisement") +
          "</span></div>";
      adEl.innerHTML =
        '<p class="es-qm-task-lead">' +
        esc(unit.taskLead || "Task 2. Study the advertisement.") +
        "</p>" +
        '<div class="es-qm-ad-card">' +
        '<p class="es-qm-ad-slogan">' +
        esc(unit.slogan || "") +
        "</p>" +
        imgHtml +
        "</div>" +
        '<p class="es-qm-scenario">' +
        esc(unit.scenario || "") +
        "</p>" +
        '<p class="es-qm-exam-inst">' +
        esc(unit.examInstruction || "") +
        "</p>";
    }

    function renderPromptList(activeId) {
      var prompts = unit.prompts || [];
      var html = "<ul class=\"es-qm-prompt-list\">";
      var i;
      for (i = 0; i < prompts.length; i++) {
        var p = prompts[i];
        var cls = "es-qm-prompt-item";
        if (activeId && p.id === activeId) cls += " is-active";
        if (phase === "done" && answers[i]) {
          cls += answers[i].validation.ok ? " is-ok" : " is-warn";
        }
        html +=
          "<li class=\"" +
          cls +
          "\"><span class=\"es-qm-prompt-num\">" +
          (i + 1) +
          ".</span> " +
          esc(p.label) +
          "</li>";
      }
      html += "</ul>";
      if (unit.perQuestionNote) {
        html +=
          '<p class="es-qm-muted">' + esc(unit.perQuestionNote) + "</p>";
      }
      promptPanel.innerHTML = html;
    }

    function renderSideHelp(activePrompt) {
      if (!grammarEl) return;
      if (sideHelpTitleEl) sideHelpTitleEl.hidden = false;

      var base =
        '<ul class="es-qm-checklist">' +
        "<li>Direct question — не утверждение</li>" +
        "<li>Закончите знаком <strong>?</strong></li>" +
        "<li>Начните с <strong>How / What / Do / Does / Are / Is…</strong></li>" +
        "<li>Упомяните слова из темы подсказки</li></ul>";

      if (!activePrompt) {
        var prompts = unit.prompts || [];
        var topics = "";
        var i;
        for (i = 0; i < prompts.length; i++) {
          topics += "<li>" + esc(prompts[i].label) + "</li>";
        }
        grammarEl.innerHTML =
          base +
          (phase === "prepare"
            ? '<p class="es-qm-muted">Prepare: продумайте 4 вопроса по темам:</p><ul class="es-qm-checklist">' +
              topics +
              "</ul>"
            : '<p class="es-qm-muted">Model answers откроются после раунда — для сверки.</p>');
        return;
      }

      grammarEl.innerHTML =
        base +
        '<p><strong>Сейчас:</strong> ' +
        esc(activePrompt.label) +
        "</p>" +
        (activePrompt.grammarTip
          ? '<p class="es-qm-muted">' + esc(activePrompt.grammarTip) + "</p>"
          : "");
    }

    function renderModelAnswers() {
      if (!modelAnswersEl) return;
      var prompts = unit.prompts || [];
      var models = unit.modelQuestions || [];
      var html = "";
      var i;
      for (i = 0; i < prompts.length; i++) {
        var model = models[i] || prompts[i].frame || "";
        var yours = answers[i] && answers[i].text ? answers[i].text : "";
        html +=
          '<div class="es-qm-model-answer-row">' +
          "<strong>" +
          (i + 1) +
          ". " +
          esc(prompts[i].label) +
          "</strong>" +
          (yours
            ? "<p>Your question: <em>" + esc(yours) + "</em></p>"
            : '<p class="es-qm-muted">Your question: <em>(empty)</em></p>') +
          '<p>Model answer: <em>' +
          esc(model) +
          "</em></p></div>";
      }
      modelAnswersEl.innerHTML = html;
    }

    function renderMeta() {
      titleEl.textContent = unit.title || "question-master";
      leadEl.textContent = unit.lead || "";
    }

    function setPhase(next) {
      phase = next;
      if (questionWrap) questionWrap.hidden = phase !== "question";
      if (donePanel) donePanel.hidden = phase !== "done";
      btnStart.hidden = phase !== "idle";
      if (btnSkipPrepare) btnSkipPrepare.hidden = phase !== "prepare";
      if (btnNext) btnNext.hidden = phase !== "question";
      btnRestart.hidden = phase !== "done";

      if (phase === "idle") {
        phaseBadge.textContent = "Ready";
        phaseBadge.className = "es-qm-phase es-qm-phase--idle";
        timerLabel.textContent = "Exam mode";
        timerEl.textContent = formatClock(unit.prepareSeconds || DEFAULT_PREPARE);
        statusEl.textContent =
          "Нажмите Start exam mode: 1:30 prepare, затем 4 вопроса по 20 секунд.";
        renderPromptList("");
        renderSideHelp(null);
      } else if (phase === "prepare") {
        phaseBadge.textContent = "Prepare";
        phaseBadge.className = "es-qm-phase es-qm-phase--prepare";
        timerLabel.textContent = "Preparation · 1.5 min";
        statusEl.textContent =
          "Изучите объявление и подготовьте 4 direct questions. Можно шепнуть вслух — вводить текст необязательно до фазы вопросов.";
        renderPromptList("");
        renderSideHelp(null);
      } else if (phase === "question") {
        phaseBadge.textContent = "Question " + (qIndex + 1) + "/4";
        phaseBadge.className = "es-qm-phase es-qm-phase--question";
        timerLabel.textContent = "20 seconds · question " + (qIndex + 1);
        var pr = (unit.prompts || [])[qIndex];
        statusEl.textContent =
          "Сформулируйте direct question про: " + (pr ? pr.label : "") + ".";
        renderPromptList(pr ? pr.id : "");
        renderSideHelp(pr || null);
      } else if (phase === "done") {
        phaseBadge.textContent = "Done";
        phaseBadge.className = "es-qm-phase es-qm-phase--done";
        timerLabel.textContent = "Finished";
        timerEl.textContent = "0";
        statusEl.textContent =
          "Раунд завершён. Сверьтесь с model answers ниже и отметьте self-check.";
        if (sideHelpTitleEl) sideHelpTitleEl.hidden = true;
        if (grammarEl) grammarEl.innerHTML = "";
        renderPromptList("");
      }
    }

    function clearTick() {
      if (tickId) {
        clearInterval(tickId);
        tickId = 0;
      }
    }

    function stopMic() {
      micShouldRun = false;
      if (micRec) {
        try {
          micRec.abort();
        } catch (e1) {
          try {
            micRec.stop();
          } catch (e2) {}
        }
        micRec = null;
      }
    }

    function startMic() {
      if (!micToggle || !micToggle.checked || phase !== "question") return;
      var SR = W.SpeechRecognition || W.webkitSpeechRecognition;
      if (!SR) return;
      stopMic();
      micRec = new SR();
      micRec.lang = SPEECH_LANG;
      micRec.continuous = true;
      micRec.interimResults = true;
      micShouldRun = true;
      micRec.onresult = function (ev) {
        var chunk = "";
        var i;
        for (i = ev.resultIndex; i < ev.results.length; i++) {
          if (ev.results[i].isFinal) {
            chunk += ev.results[i][0].transcript;
          }
        }
        if (chunk && questionInput) {
          var prev = questionInput.value.trim();
          questionInput.value = prev ? prev + " " + chunk.trim() : chunk.trim();
        }
      };
      micRec.onend = function () {
        if (micShouldRun && phase === "question") {
          try {
            micRec.start();
          } catch (e) {}
        }
      };
      try {
        micRec.start();
      } catch (eStart) {}
    }

    function runTimer(seconds, onDone) {
      clearTick();
      remainingSec = seconds;
      timerEl.textContent = formatClock(remainingSec);
      tickId = setInterval(function () {
        remainingSec -= 1;
        timerEl.textContent = formatClock(remainingSec);
        if (remainingSec <= 0) {
          clearTick();
          onDone();
        }
      }, 1000);
    }

    function saveCurrentQuestion() {
      var prompts = unit.prompts || [];
      var pr = prompts[qIndex];
      var text = questionInput ? questionInput.value : "";
      var validation = validateQuestion(text, pr);
      answers[qIndex] = {
        prompt: pr,
        text: text,
        validation: validation
      };
      if (feedbackEl) {
        if (validation.ok) {
          feedbackEl.className = "es-qm-feedback es-qm-feedback--ok";
          feedbackEl.textContent = "Форма вопроса выглядит хорошо (локальная проверка).";
        } else {
          feedbackEl.className = "es-qm-feedback es-qm-feedback--warn";
          feedbackEl.textContent = validation.issues.join(" ");
        }
      }
    }

    function beginQuestionPhase() {
      qIndex = 0;
      answers = [];
      showQuestionRound();
    }

    function showQuestionRound() {
      setPhase("question");
      var pr = (unit.prompts || [])[qIndex];
      if (questionInput) {
        questionInput.value = "";
        questionInput.placeholder = pr
          ? "Ask about: " + pr.label + "…"
          : "Write your own direct question here…";
        questionInput.focus();
      }
      if (feedbackEl) {
        feedbackEl.textContent = "";
        feedbackEl.className = "es-qm-feedback";
      }
      startMic();
      runTimer(unit.questionSeconds || DEFAULT_QUESTION, advanceQuestion);
    }

    function advanceQuestion() {
      stopMic();
      saveCurrentQuestion();
      qIndex += 1;
      if (qIndex >= (unit.prompts || []).length) {
        finishAll();
      } else {
        showQuestionRound();
      }
    }

    function totalScore() {
      var sum = 0;
      var i;
      for (i = 0; i < answers.length; i++) {
        if (answers[i] && answers[i].validation) {
          sum += answers[i].validation.score;
        }
      }
      var selfPart = selfCheckRatio() * 10;
      return Math.max(0, Math.min(100, Math.round(sum + selfPart)));
    }

    function selfCheckRatio() {
      if (!selfCheckEl) return 0;
      var boxes = selfCheckEl.querySelectorAll('input[type="checkbox"]');
      if (!boxes.length) return 0;
      var checked = 0;
      var i;
      for (i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) checked += 1;
      }
      return checked / boxes.length;
    }

    function renderResults() {
      if (!resultsEl) return;
      var html = "";
      var i;
      for (i = 0; i < answers.length; i++) {
        var a = answers[i];
        var tag = a.validation.ok ? "OK" : "Check";
        html +=
          '<div class="es-qm-result-row">' +
          "<strong>" +
          (i + 1) +
          ". " +
          esc(a.prompt.label) +
          ' <span class="es-qm-tag">' +
          tag +
          "</span></strong>" +
          "<p>Your question: " +
          (a.text ? esc(a.text) : "<em>(empty)</em>") +
          "</p>";
        if (a.validation.issues && a.validation.issues.length) {
          html +=
            '<p class="es-qm-muted">' + esc(a.validation.issues.join(" ")) + "</p>";
        }
        html += "</div>";
      }
      resultsEl.innerHTML = html;
    }

    function renderSelfCheck() {
      var rows = unit.selfCheck || [];
      if (!selfCheckEl) return;
      if (!rows.length) {
        selfCheckEl.innerHTML = "";
        return;
      }
      var html = "";
      var i;
      for (i = 0; i < rows.length; i++) {
        html +=
          '<label class="es-qm-check"><input type="checkbox" /> <span>' +
          esc(rows[i]) +
          "</span></label>";
      }
      selfCheckEl.innerHTML = html;
      selfCheckEl.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
        cb.addEventListener("change", function () {
          if (phase === "done") saveStatsAttempt();
        });
      });
    }

    function renderStatsBar() {
      if (!statsBarEl) return;
      var br = W.__egeSpeakingQuestionMasterStats;
      var html =
        '<a class="ege-reading-stats-hub" href="ege-statistics.html">Statistics hub →</a>';
      if (br && typeof br.getUnitStats === "function") {
        var st = br.getUnitStats(unit.id);
        if (st) {
          html =
            '<span class="ege-reading-stats-main">Эта тема: попыток <strong>' +
            st.attempts +
            "</strong> · лучший <strong>" +
            st.best +
            '%</strong> · последний <strong>' +
            st.last +
            "%</strong></span>" +
            html;
        } else {
          html =
            '<span class="ege-reading-stats-main">Пока нет записей — пройдите exam mode (1:30 + 4×20 сек).</span>' +
            html;
        }
      }
      statsBarEl.innerHTML = html;
    }

    function saveStatsAttempt() {
      var br = W.__egeSpeakingQuestionMasterStats;
      if (!br || typeof br.recordAttempt !== "function") return;
      br.recordAttempt(unit.id, totalScore());
      renderStatsBar();
    }

    function finishAll() {
      clearTick();
      stopMic();
      setPhase("done");
      renderResults();
      renderModelAnswers();
      renderPromptList("");
      saveStatsAttempt();
    }

    function beginPrepare() {
      setPhase("prepare");
      runTimer(unit.prepareSeconds || DEFAULT_PREPARE, beginQuestionPhase);
    }

    function resetRound() {
      clearTick();
      stopMic();
      qIndex = 0;
      answers = [];
      if (resultsEl) resultsEl.innerHTML = "";
      if (modelAnswersEl) modelAnswersEl.innerHTML = "";
      if (questionInput) questionInput.value = "";
      if (feedbackEl) feedbackEl.textContent = "";
      setPhase("idle");
      renderAd();
      renderPromptList("");
      if (selfCheckEl) {
        selfCheckEl.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
          cb.checked = false;
        });
      }
    }

    function loadUnit(id) {
      unit = getUnitById(id);
      saveUnitPref(unit.id);
      resetRound();
      renderMeta();
      renderAd();
      renderSelfCheck();
      renderStatsBar();
    }

    populateUnitSelect();
    loadUnit(unitSelect.value);
    setPhase("idle");
    renderAd();

    unitSelect.addEventListener("change", function () {
      loadUnit(unitSelect.value);
    });

    btnStart.addEventListener("click", function () {
      beginPrepare();
    });

    if (btnSkipPrepare) {
      btnSkipPrepare.addEventListener("click", function () {
        clearTick();
        beginQuestionPhase();
      });
    }

    if (btnNext) {
      btnNext.addEventListener("click", function () {
        clearTick();
        advanceQuestion();
      });
    }

    if (btnRestart) {
      btnRestart.addEventListener("click", resetRound);
    }
  }

  W.__EGE_SPEAKING_QUESTION_MASTER__ = { mount: mount };
})(typeof window !== "undefined" ? window : this, document);
