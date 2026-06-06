/**
 * EGE Speaking · Task 4 — logic-comparison (photo project).
 * window.__EGE_SPEAKING_LOGIC_COMPARISON__.mount()
 */
(function (W, D) {
  "use strict";

  var PREF_UNIT = "ege_speaking_task4_unit_u1";
  var DEFAULT_PREPARE = 150;
  var DEFAULT_SPEAK = 180;

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatClock(sec) {
    var s = Math.max(0, Math.ceil(sec));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function mount() {
    var pack = W.__EGE_SPEAKING_TASK4_DATA__;
    var units = pack && Array.isArray(pack.units) ? pack.units : [];
    if (!units.length) return;

    var unitSelect = D.getElementById("lcUnitSelect");
    var titleEl = D.getElementById("lcTitle");
    var leadEl = D.getElementById("lcLead");
    var phaseBadge = D.getElementById("lcPhaseBadge");
    var timerEl = D.getElementById("lcTimer");
    var timerLabel = D.getElementById("lcTimerLabel");
    var statusEl = D.getElementById("lcStatus");
    var introEl = D.getElementById("lcIntro");
    var readyIntroEl = D.getElementById("lcReadyIntro");
    var bulletEl = D.getElementById("lcBullets");
    var speakNoteEl = D.getElementById("lcSpeakNote");
    var photosEl = D.getElementById("lcPhotos");
    var sidePanel = D.getElementById("lcSidePanel");
    var reviewPanel = D.getElementById("lcReviewPanel");
    var modelEl = D.getElementById("lcModel");
    var btnStart = D.getElementById("lcBtnStart");
    var btnSkipPrepare = D.getElementById("lcBtnSkipPrepare");
    var btnShowModel = D.getElementById("lcBtnShowModel");
    var btnRestart = D.getElementById("lcBtnRestart");
    var statsBarEl = D.getElementById("lc-stats-bar");

    if (!unitSelect || !btnStart || !photosEl) return;

    var unit = units[0];
    /** @type {'idle'|'prepare'|'speak'|'ready'|'review'} */
    var phase = "idle";
    var tickId = 0;

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
      titleEl.textContent = unit.title || "logic-comparison";
      leadEl.textContent = unit.lead || "";
      if (introEl) introEl.textContent = unit.examIntro || "";
      if (readyIntroEl) readyIntroEl.textContent = unit.readyIntro || "In 2.5 minutes be ready to:";
      if (speakNoteEl) speakNoteEl.textContent = unit.speakNote || "";
      renderBullets();
      renderPhotos();
      renderSidePanel();
    }

    function renderBullets() {
      if (!bulletEl) return;
      var rows = unit.bulletPoints || [];
      if (!rows.length) {
        bulletEl.innerHTML = "";
        return;
      }
      var html = "<ul>";
      var i;
      for (i = 0; i < rows.length; i++) {
        html += "<li>" + esc(rows[i]) + "</li>";
      }
      html += "</ul>";
      bulletEl.innerHTML = html;
    }

    function renderPhotos() {
      var photos = unit.photos || [];
      if (!photos.length) {
        photosEl.innerHTML =
          '<p class="es-lc-muted">Photos for this unit are not set yet.</p>';
        return;
      }
      var html = '<div class="es-lc-photo-grid">';
      var i;
      for (i = 0; i < photos.length; i++) {
        var p = photos[i];
        html +=
          '<figure class="es-lc-photo-card">' +
          '<img class="es-lc-photo" src="' +
          esc(p.src) +
          '" alt="' +
          esc(p.alt || p.label || "Photo") +
          '" loading="lazy" />' +
          (p.label
            ? '<figcaption class="es-lc-photo-cap">' + esc(p.label) + "</figcaption>"
            : "") +
          "</figure>";
      }
      html += "</div>";
      photosEl.innerHTML = html;
    }

    function renderSidePanel() {
      if (!sidePanel) return;
      if (phase === "review") {
        var tips = unit.tips || [];
        var useful = unit.usefulLanguage || [];
        var html =
          '<h3 class="es-lc-side-title">Рекомендации</h3><ul class="es-lc-tip-list">';
        var i;
        for (i = 0; i < tips.length; i++) {
          html += "<li>" + esc(tips[i]) + "</li>";
        }
        html += '</ul><h3 class="es-lc-side-title">Useful language</h3><ul class="es-lc-useful-list">';
        for (i = 0; i < useful.length; i++) {
          html += "<li><em>" + esc(useful[i]) + "</em></li>";
        }
        html += "</ul>";
        sidePanel.innerHTML = html;
        return;
      }
      if (phase === "idle") {
        sidePanel.innerHTML =
          '<p class="es-lc-muted">После Start появятся фото и план ответа. Model answer — после подготовки и speaking.</p>';
        return;
      }
      sidePanel.innerHTML =
        '<p class="es-lc-muted"><strong>Project:</strong> ' +
        esc(unit.projectTitle || unit.title) +
        '</p><p class="es-lc-muted">Держите в голове 4 пункта плана слева. На экзамене говорите непрерывно до 3 минут.</p>';
    }

    function renderModelReview() {
      if (!modelEl) return;
      var text = unit.modelMonologue || "";
      var sections = unit.modelSections || [];
      var html = "";
      if (text) {
        var paras = text.split(/\n\n+/);
        html += '<div class="es-lc-model-text">';
        var pi;
        for (pi = 0; pi < paras.length; pi++) {
          html += "<p><em>" + esc(paras[pi]) + "</em></p>";
        }
        html += "</div>";
      }
      if (sections.length) {
        html += '<div class="es-lc-criteria-block"><h3>Критерии по пунктам плана</h3>';
        var si;
        for (si = 0; si < sections.length; si++) {
          html +=
            '<div class="es-lc-criteria-row"><strong>' +
            esc(sections[si].title) +
            '</strong><p class="es-lc-muted">' +
            esc(sections[si].criteria) +
            "</p></div>";
        }
        html += "</div>";
      }
      modelEl.innerHTML = html;
    }

    function setPhase(next) {
      phase = next;
      if (reviewPanel) reviewPanel.hidden = phase !== "review";
      btnStart.hidden = phase !== "idle";
      if (btnSkipPrepare) btnSkipPrepare.hidden = phase !== "prepare";
      if (btnShowModel) btnShowModel.hidden = phase !== "ready";
      btnRestart.hidden = phase !== "review";

      if (phase === "idle") {
        phaseBadge.textContent = "Ready";
        phaseBadge.className = "es-lc-phase es-lc-phase--idle";
        timerLabel.textContent = "Exam mode";
        timerEl.textContent = formatClock(unit.prepareSeconds || DEFAULT_PREPARE);
        statusEl.textContent =
          "Start: 2:30 подготовки с фото и планом → 3:00 speaking → model answer.";
      } else if (phase === "prepare") {
        phaseBadge.textContent = "Prepare";
        phaseBadge.className = "es-lc-phase es-lc-phase--prepare";
        timerLabel.textContent = "Preparation · 2:30";
        statusEl.textContent =
          "Подготовьтесь: опишите оба фото, различия, плюсы/минусы, своё мнение. Можно пропустить таймер.";
      } else if (phase === "speak") {
        phaseBadge.textContent = "Speak";
        phaseBadge.className = "es-lc-phase es-lc-phase--speak";
        timerLabel.textContent = "Speaking · up to 3:00";
        statusEl.textContent =
          "Говорите вслух непрерывно (12–15 предложений). Фото и план остаются на экране.";
      } else if (phase === "ready") {
        phaseBadge.textContent = "Done";
        phaseBadge.className = "es-lc-phase es-lc-phase--ready";
        timerLabel.textContent = "Speaking finished";
        timerEl.textContent = "✓";
        statusEl.textContent =
          "Время speaking закончилось. Нажмите «Посмотреть model answer» для сверки.";
      } else if (phase === "review") {
        phaseBadge.textContent = "Review";
        phaseBadge.className = "es-lc-phase es-lc-phase--done";
        timerLabel.textContent = "Model answer";
        timerEl.textContent = "✓";
        statusEl.textContent =
          "Сверьтесь с образцом монолога и критериями по каждому пункту плана.";
      }
      renderSidePanel();
    }

    function clearTick() {
      if (tickId) {
        clearInterval(tickId);
        tickId = 0;
      }
    }

    function runTimer(sec, onDone) {
      clearTick();
      var remainingSec = sec;
      timerEl.textContent = formatClock(remainingSec);
      tickId = setInterval(function () {
        remainingSec -= 1;
        timerEl.textContent = formatClock(remainingSec);
        if (remainingSec <= 0) {
          clearTick();
          if (typeof onDone === "function") onDone();
        }
      }, 1000);
    }

    function beginPrepare() {
      setPhase("prepare");
      runTimer(unit.prepareSeconds || DEFAULT_PREPARE, beginSpeak);
    }

    function beginSpeak() {
      setPhase("speak");
      runTimer(unit.speakSeconds || DEFAULT_SPEAK, beginReady);
    }

    function beginReady() {
      clearTick();
      setPhase("ready");
    }

    function showModel() {
      renderModelReview();
      setPhase("review");
      saveStatsAttempt();
    }

    function renderStatsBar() {
      if (!statsBarEl) return;
      var br = W.__egeSpeakingTask4Stats;
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
            '<span class="ege-reading-stats-main">Пока нет записей — пройдите prep + speak и откройте model answer.</span>' +
            html;
        }
      }
      statsBarEl.innerHTML = html;
    }

    function saveStatsAttempt() {
      var br = W.__egeSpeakingTask4Stats;
      if (!br || typeof br.recordAttempt !== "function") return;
      br.recordAttempt(unit.id, 100);
      renderStatsBar();
    }

    function resetRound() {
      clearTick();
      if (modelEl) modelEl.innerHTML = "";
      setPhase("idle");
    }

    function loadUnit(id) {
      unit = getUnitById(id);
      saveUnitPref(unit.id);
      resetRound();
      renderMeta();
      renderStatsBar();
    }

    populateUnitSelect();
    loadUnit(unitSelect.value);

    unitSelect.addEventListener("change", function () {
      loadUnit(unitSelect.value);
    });

    btnStart.addEventListener("click", beginPrepare);

    if (btnSkipPrepare) {
      btnSkipPrepare.addEventListener("click", function () {
        clearTick();
        beginSpeak();
      });
    }

    if (btnShowModel) {
      btnShowModel.addEventListener("click", showModel);
    }

    if (btnRestart) {
      btnRestart.addEventListener("click", resetRound);
    }
  }

  W.__EGE_SPEAKING_LOGIC_COMPARISON__ = { mount: mount };
})(typeof window !== "undefined" ? window : this, document);
