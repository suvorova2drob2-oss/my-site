/**
 * EGE Speaking · Task 3 — interview-reply.
 * Listen → see questions → one click to model answers + criteria.
 * window.__EGE_SPEAKING_INTERVIEW_REPLY__.mount()
 */
(function (W, D) {
  "use strict";

  var PREF_UNIT = "ege_speaking_interview_unit_v1";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function mount() {
    var pack = W.__EGE_SPEAKING_INTERVIEW_DATA__;
    var units = pack && Array.isArray(pack.units) ? pack.units : [];
    if (!units.length) return;

    var unitSelect = D.getElementById("irUnitSelect");
    var titleEl = D.getElementById("irTitle");
    var leadEl = D.getElementById("irLead");
    var phaseBadge = D.getElementById("irPhaseBadge");
    var timerEl = D.getElementById("irTimer");
    var timerLabel = D.getElementById("irTimerLabel");
    var statusEl = D.getElementById("irStatus");
    var introEl = D.getElementById("irIntro");
    var topicEl = D.getElementById("irTopic");
    var audioEl = D.getElementById("irAudio");
    var listenPanel = D.getElementById("irListenPanel");
    var reviewPanel = D.getElementById("irReviewPanel");
    var modelAnswersEl = D.getElementById("irModelAnswers");
    var promptPanel = D.getElementById("irPromptPanel");
    var btnStart = D.getElementById("irBtnStart");
    var btnShowModels = D.getElementById("irBtnShowModels");
    var btnReplay = D.getElementById("irBtnReplay");
    var btnRestart = D.getElementById("irBtnRestart");
    var statsBarEl = D.getElementById("ir-stats-bar");

    if (!unitSelect || !btnStart || !audioEl) return;

    var unit = units[0];
    /** @type {'idle'|'listen'|'ready'|'review'} */
    var phase = "idle";

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
      if (pref && unitSelect.querySelector('option[value="' + pref + '"]')) {
        unitSelect.value = pref;
      }
    }

    function renderMeta() {
      titleEl.textContent = unit.title || "interview-reply";
      leadEl.textContent = unit.lead || "";
      if (introEl) introEl.textContent = unit.examIntro || "";
      if (topicEl) {
        topicEl.textContent = unit.topic ? "Topic: " + unit.topic : "";
      }
    }

    function bindAudio() {
      audioEl.src = unit.audioSrc || "";
      audioEl.load();
    }

    function renderPromptList() {
      var qs = unit.questions || [];
      var total = qs.length || 5;
      if (!promptPanel) return;

      if (phase === "idle" || phase === "listen") {
        promptPanel.innerHTML =
          '<p class="es-ir-muted">Тексты вопросов скрыты — как на экзамене. Сначала прослушайте запись.</p>' +
          '<p class="es-ir-muted"><strong>' +
          total +
          " questions</strong> on the recording.</p>";
        return;
      }

      var html = '<ul class="es-ir-prompt-list">';
      var i;
      for (i = 0; i < qs.length; i++) {
        html +=
          '<li class="es-ir-prompt-item"><span class="es-ir-prompt-num">' +
          (i + 1) +
          ".</span> " +
          esc(qs[i]) +
          "</li>";
      }
      html += "</ul>";
      promptPanel.innerHTML = html;
    }

    function normalizeModel(row) {
      if (!row) return { text: "", criteria: "" };
      if (typeof row === "string") return { text: row, criteria: "" };
      return {
        text: row.text || row.answer || "",
        criteria: row.criteria || row.tip || ""
      };
    }

    function renderModelAnswers() {
      if (!modelAnswersEl) return;
      var qs = unit.questions || [];
      var models = unit.modelAnswers || [];
      var html = "";
      var i;
      for (i = 0; i < qs.length; i++) {
        var m = normalizeModel(models[i]);
        html +=
          '<div class="es-ir-model-row"><strong>' +
          (i + 1) +
          ". " +
          esc(qs[i]) +
          "</strong>";
        if (m.text) {
          html += '<p class="es-ir-model-text">Model answer: <em>' + esc(m.text) + "</em></p>";
        }
        if (m.criteria) {
          html +=
            '<p class="es-ir-model-criteria"><span class="es-ir-criteria-label">Критерий:</span> ' +
            esc(m.criteria) +
            "</p>";
        }
        html += "</div>";
      }
      modelAnswersEl.innerHTML = html;
    }

    function setPhase(next) {
      phase = next;
      if (listenPanel) listenPanel.hidden = phase === "review";
      if (reviewPanel) reviewPanel.hidden = phase !== "review";
      btnStart.hidden = phase !== "idle";
      if (btnShowModels) btnShowModels.hidden = phase !== "ready";
      if (btnReplay) btnReplay.hidden = phase !== "listen" && phase !== "idle";
      btnRestart.hidden = phase !== "review";

      if (phase === "idle") {
        phaseBadge.textContent = "Ready";
        phaseBadge.className = "es-ir-phase es-ir-phase--idle";
        timerLabel.textContent = "Exam mode";
        timerEl.textContent = "5 Q";
        statusEl.textContent =
          "Start: прослушайте запись с 5 вопросами, затем откройте model answers для сверки.";
        renderPromptList();
      } else if (phase === "listen") {
        phaseBadge.textContent = "Listening";
        phaseBadge.className = "es-ir-phase es-ir-phase--listen";
        timerLabel.textContent = "Recording · 5 questions";
        timerEl.textContent = "♪";
        statusEl.textContent =
          "Слушайте запись. После прослушивания появятся тексты вопросов — затем «Посмотреть model answers».";
        renderPromptList();
      } else if (phase === "ready") {
        phaseBadge.textContent = "Questions";
        phaseBadge.className = "es-ir-phase es-ir-phase--ready";
        timerLabel.textContent = "5 questions";
        timerEl.textContent = "5";
        statusEl.textContent =
          "Все 5 вопросов справа. Ответьте вслух (2–3 предложения на каждый), затем нажмите «Посмотреть model answers».";
        renderPromptList();
      } else if (phase === "review") {
        phaseBadge.textContent = "Review";
        phaseBadge.className = "es-ir-phase es-ir-phase--done";
        timerLabel.textContent = "Model answers";
        timerEl.textContent = "✓";
        statusEl.textContent =
          "Сверьтесь с model answers и критериями по каждому вопросу.";
        renderPromptList();
      }
    }

    function renderStatsBar() {
      if (!statsBarEl) return;
      var br = W.__egeSpeakingInterviewStats;
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
            '<span class="ege-reading-stats-main">Пока нет записей — прослушайте запись и откройте model answers.</span>' +
            html;
        }
      }
      statsBarEl.innerHTML = html;
    }

    function saveStatsAttempt() {
      var br = W.__egeSpeakingInterviewStats;
      if (!br || typeof br.recordAttempt !== "function") return;
      br.recordAttempt(unit.id, 100);
      renderStatsBar();
    }

    function showModelAnswers() {
      audioEl.pause();
      renderModelAnswers();
      setPhase("review");
      saveStatsAttempt();
    }

    function afterListen() {
      setPhase("ready");
    }

    function beginListen() {
      setPhase("listen");
      audioEl.currentTime = 0;
      var p = audioEl.play();
      if (p && typeof p.catch === "function") {
        p.catch(function () {
          statusEl.textContent =
            "Нажмите Play на плеере — браузер блокирует автозапуск.";
        });
      }
    }

    function resetRound() {
      audioEl.pause();
      audioEl.currentTime = 0;
      if (modelAnswersEl) modelAnswersEl.innerHTML = "";
      setPhase("idle");
    }

    function loadUnit(id) {
      unit = getUnitById(id);
      saveUnitPref(unit.id);
      resetRound();
      renderMeta();
      bindAudio();
      renderStatsBar();
    }

    audioEl.addEventListener("ended", function () {
      if (phase === "listen") afterListen();
    });

    populateUnitSelect();
    loadUnit(unitSelect.value);

    unitSelect.addEventListener("change", function () {
      loadUnit(unitSelect.value);
    });

    btnStart.addEventListener("click", beginListen);

    if (btnShowModels) {
      btnShowModels.addEventListener("click", showModelAnswers);
    }

    if (btnReplay) {
      btnReplay.addEventListener("click", function () {
        audioEl.currentTime = 0;
        audioEl.play();
      });
    }

    if (btnRestart) {
      btnRestart.addEventListener("click", resetRound);
    }
  }

  W.__EGE_SPEAKING_INTERVIEW_REPLY__ = { mount: mount };
})(typeof window !== "undefined" ? window : this, document);
