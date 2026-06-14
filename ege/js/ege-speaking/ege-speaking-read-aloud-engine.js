/**
 * EGE Speaking · Task 1 — read aloud (phonetic-flow).
 * window.__EGE_SPEAKING_READ_ALOUD__.mount()
 *
 * Data: __EGE_SPEAKING_READ_DATA__.units[] from ege-speaking-read-data.js + unit modules.
 */
(function (W, D) {
  "use strict";

  var PREF_UNIT = "ege_speaking_read_unit_v1";
  var DEFAULT_PREPARE = 90;
  var DEFAULT_READ = 90;
  var TTS_LANG = "en-GB";

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

  function wordTokens(text) {
    var m = String(text || "").match(/[a-z0-9]+(?:[''-][a-z0-9]+)*/gi);
    return m ? m.map(function (w) {
      return w.toLowerCase();
    }) : [];
  }

  function formatClock(sec) {
    var s = Math.max(0, Math.ceil(sec));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function cloudVoiceBoost(v) {
    if (!v) return 0;
    if (v.localService === false) return 62;
    if (v.localService === true) return -14;
    return 0;
  }

  function naturalVoiceRank(name) {
    var n = String(name || "").toLowerCase();
    var r = 0;
    if (/neural|natural|premium|enhanced|generative|humanlike|wave(?:net)?|\bonline\b/i.test(n))
      r += 45;
    if (/microsoft .*english.*network/i.test(n)) r += 38;
    if (/\(natural\)|\(neural\)|\(humanlike\)/i.test(n)) r += 35;
    if (/google ui english|google translate english/i.test(n)) r += 28;
    if (/microsoft .*english/i.test(n)) r += 14;
    if (/google /.test(n)) r += 12;
    if (/espeak|robotic|speech unit/i.test(n)) r -= 90;
    return r;
  }

  function voiceToken(v) {
    if (!v) return "";
    return v.voiceURI && String(v.voiceURI).length
      ? String(v.voiceURI)
      : "__nm|" + encodeURIComponent(v.name || "") + "|" + encodeURIComponent(v.lang || "");
  }

  function findVoiceByToken(synth, token) {
    if (!synth || !token) return null;
    var voices = synth.getVoices();
    var i;
    for (i = 0; i < voices.length; i++) {
      if (voiceToken(voices[i]) === token) return voices[i];
    }
    return null;
  }

  function pickBestVoice(synth, lang) {
    if (!synth) return null;
    var voices = synth.getVoices().filter(function (v) {
      return String(v.lang || "").toLowerCase().indexOf(String(lang || TTS_LANG).slice(0, 2)) === 0;
    });
    voices.sort(function (a, b) {
      var ra =
        naturalVoiceRank(a.name) + cloudVoiceBoost(a) + (a.default ? 8 : 0);
      var rb =
        naturalVoiceRank(b.name) + cloudVoiceBoost(b) + (b.default ? 8 : 0);
      return rb - ra;
    });
    return voices[0] || null;
  }

  function mount() {
    var pack = W.__EGE_SPEAKING_READ_DATA__;
    var units = pack && Array.isArray(pack.units) ? pack.units : [];
    if (!units.length) return;

    var unitSelect = D.getElementById("readUnitSelect");
    var titleEl = D.getElementById("readTitle");
    var leadEl = D.getElementById("readLead");
    var phaseBadge = D.getElementById("readPhaseBadge");
    var timerEl = D.getElementById("readTimer");
    var timerLabel = D.getElementById("readTimerLabel");
    var passageEl = D.getElementById("readPassage");
    var trickyEl = D.getElementById("readTrickyList");
    var statusEl = D.getElementById("readStatus");
    var micReportEl = D.getElementById("readMicReport");
    var selfCheckEl = D.getElementById("readSelfCheck");
    var btnStart = D.getElementById("readBtnStart");
    var btnSkipPrepare = D.getElementById("readBtnSkipPrepare");
    var btnListen = D.getElementById("readBtnListen");
    var btnListenPara = D.getElementById("readBtnListenPara");
    var btnRestart = D.getElementById("readBtnRestart");
    var voiceSelect = D.getElementById("readVoiceSelect");
    var micToggle = D.getElementById("readMicToggle");
    var donePanel = D.getElementById("readDonePanel");

    if (!unitSelect || !passageEl || !btnStart) return;

    var unit = units[0];
    /** @type {'idle'|'prepare'|'read'|'done'} */
    var phase = "idle";
    var tickId = 0;
    var remainingSec = 0;
    var micRec = null;
    var micActive = false;
    var micShouldRun = false;
    var speechSamples = 0;
    var readStartedAt = 0;
    var readEndedAt = 0;
    var heardText = "";
    var longSilenceCount = 0;
    var lastSpeechAt = 0;
    var silenceWatchId = 0;
    var lastMicWordCov = 0;
    var lastMicActivePct = 0;
    var statsBarEl = D.getElementById("es-read-stats-bar");

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
      if (pref && units.some(function (u) {
        return u.id === pref;
      })) {
        unitSelect.value = pref;
      }
    }

    function fullText(u) {
      return (u.paragraphs || []).join("\n\n");
    }

    function renderPassage(highlightId) {
      var paras = unit.paragraphs || [];
      var html = "";
      var pi;
      for (pi = 0; pi < paras.length; pi++) {
        html +=
          '<p class="es-read-para" data-para="' +
          pi +
          '">' +
          esc(paras[pi]) +
          "</p>";
      }
      passageEl.innerHTML = html;
      if (highlightId) highlightTrickyInPassage(highlightId);
    }

    function highlightTrickyInPassage(spotId) {
      var spot = (unit.trickySpots || []).find(function (s) {
        return s.id === spotId;
      });
      if (!spot) return;
      var needles = spot.match && spot.match.length ? spot.match : [spot.label];
      var html = passageEl.innerHTML;
      var ni;
      for (ni = 0; ni < needles.length; ni++) {
        var re = new RegExp("(" + needles[ni].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
        html = html.replace(re, '<mark class="es-read-mark">$1</mark>');
      }
      passageEl.innerHTML = html;
    }

    function renderTricky() {
      var spots = unit.trickySpots || [];
      if (!spots.length) {
        trickyEl.innerHTML =
          '<p class="es-read-muted">Для этого текста tricky spots пока не заданы.</p>';
        return;
      }
      var html = "";
      var i;
      for (i = 0; i < spots.length; i++) {
        html +=
          '<button type="button" class="es-read-tricky" data-spot="' +
          esc(spots[i].id) +
          '"><span class="es-read-tricky-word">' +
          esc(spots[i].label) +
          '</span><span class="es-read-tricky-hint">' +
          esc(spots[i].hint || "") +
          "</span></button>";
      }
      trickyEl.innerHTML = html;
      trickyEl.querySelectorAll(".es-read-tricky").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var id = btn.getAttribute("data-spot");
          trickyEl.querySelectorAll(".es-read-tricky").forEach(function (b) {
            b.classList.toggle("is-active", b === btn);
          });
          renderPassage(id);
          speakSpot(id);
        });
      });
    }

    function renderSelfCheck() {
      var rows = unit.selfCheck || [];
      if (!rows.length) {
        selfCheckEl.innerHTML = "";
        return;
      }
      var html = "";
      var i;
      for (i = 0; i < rows.length; i++) {
        html +=
          '<label class="es-read-check"><input type="checkbox" /> <span>' +
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

    function renderMeta() {
      titleEl.textContent = unit.title || "Read aloud";
      leadEl.textContent = unit.lead || "";
      var wc = wordTokens(fullText(unit)).length;
      var meta = D.getElementById("readWordMeta");
      if (meta) {
        meta.textContent =
          wc +
          " words · prepare " +
          (unit.prepareSeconds || DEFAULT_PREPARE) +
          "s · read " +
          (unit.readSeconds || DEFAULT_READ) +
          "s";
      }
    }

    function setPhase(next) {
      phase = next;
      passageEl.classList.toggle("es-read-passage--dim", phase === "done");
      if (donePanel) donePanel.hidden = phase !== "done";
      btnStart.hidden = phase !== "idle";
      if (btnSkipPrepare) btnSkipPrepare.hidden = phase !== "prepare";
      btnRestart.hidden = phase !== "done";

      if (phase === "idle") {
        phaseBadge.textContent = "Ready";
        phaseBadge.className = "es-read-phase es-read-phase--idle";
        timerLabel.textContent = "Exam mode";
        timerEl.textContent = formatClock(unit.prepareSeconds || DEFAULT_PREPARE);
        statusEl.textContent =
          "Нажмите «Start exam mode»: 1,5 мин подготовки, затем 1,5 мин чтения вслух.";
        if (micReportEl) micReportEl.hidden = true;
      } else if (phase === "prepare") {
        phaseBadge.textContent = "Prepare";
        phaseBadge.className = "es-read-phase es-read-phase--prepare";
        timerLabel.textContent = "Preparation time";
        statusEl.textContent =
          "Подготовьтесь: отметьте tricky spots, прослушайте образец. Затем начнётся чтение.";
      } else if (phase === "read") {
        phaseBadge.textContent = "Read aloud";
        phaseBadge.className = "es-read-phase es-read-phase--read";
        timerLabel.textContent = "Reading time";
        statusEl.textContent = "Читайте текст вслух чётко и с выражением. Текст можно не скрывать — как на экзамене.";
      } else if (phase === "done") {
        phaseBadge.textContent = "Done";
        phaseBadge.className = "es-read-phase es-read-phase--done";
        timerLabel.textContent = "Finished";
        timerEl.textContent = "0:00";
        statusEl.textContent =
          "Время вышло. Отметьте self-check и при необходимости прослушайте образец ещё раз.";
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
      micActive = false;
      if (silenceWatchId) {
        clearInterval(silenceWatchId);
        silenceWatchId = 0;
      }
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

    function startMicIfEnabled() {
      if (!micToggle || !micToggle.checked) return;
      var SR = W.SpeechRecognition || W.webkitSpeechRecognition;
      if (!SR) {
        if (micReportEl) {
          micReportEl.hidden = false;
          micReportEl.textContent =
            "Микрофон недоступен в этом браузере — режим без отслеживания речи.";
        }
        return;
      }
      stopMic();
      micRec = new SR();
      micRec.lang = TTS_LANG;
      micRec.continuous = true;
      micRec.interimResults = true;
      micShouldRun = true;
      speechSamples = 0;
      heardText = "";
      longSilenceCount = 0;
      lastSpeechAt = Date.now();
      readStartedAt = Date.now();

      micRec.onresult = function (ev) {
        var i;
        var chunk = "";
        for (i = ev.resultIndex; i < ev.results.length; i++) {
          chunk += ev.results[i][0].transcript;
        }
        if (chunk) {
          speechSamples += 1;
          lastSpeechAt = Date.now();
          heardText += " " + chunk;
        }
      };

      micRec.onend = function () {
        if (micShouldRun && phase === "read") {
          try {
            micRec.start();
          } catch (e) {}
        }
      };

      micRec.onerror = function () {
        micShouldRun = false;
      };

      try {
        micRec.start();
        micActive = true;
      } catch (eStart) {
        micActive = false;
      }

      silenceWatchId = setInterval(function () {
        if (phase !== "read") return;
        if (Date.now() - lastSpeechAt > 4000) {
          longSilenceCount += 1;
          lastSpeechAt = Date.now();
        }
      }, 1000);
    }

    function micCoverageReport() {
      if (!micToggle || !micToggle.checked || !micReportEl) return;
      readEndedAt = Date.now();
      var durationMs = Math.max(1, readEndedAt - readStartedAt);
      var activePct = Math.min(
        100,
        Math.round(((speechSamples * 900) / durationMs) * 100)
      );
      var sourceWords = wordTokens(fullText(unit));
      var heardWords = wordTokens(heardText);
      var heardSet = {};
      var hit = 0;
      var i;
      for (i = 0; i < heardWords.length; i++) heardSet[heardWords[i]] = true;
      for (i = 0; i < sourceWords.length; i++) {
        if (heardSet[sourceWords[i]]) hit += 1;
      }
      var cov = sourceWords.length
        ? Math.round((hit / sourceWords.length) * 100)
        : 0;
      lastMicWordCov = cov;
      lastMicActivePct = activePct;
      micReportEl.hidden = false;
      micReportEl.innerHTML =
        "<strong>Микрофон (подсказка, не оценка ЕГЭ):</strong> активность речи ~" +
        activePct +
        "% · распознано ~" +
        cov +
        "% слов из текста" +
        (longSilenceCount
          ? " · долгих пауз: " + longSilenceCount
          : "") +
        ". Это только ориентир — на экзамене вас слушает эксперт.";
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

    function computeSessionScore() {
      var base = 50;
      var selfPart = Math.round(selfCheckRatio() * 40);
      var micPart = 0;
      if (micToggle && micToggle.checked) {
        micPart = Math.min(
          10,
          Math.round(lastMicWordCov * 0.07 + lastMicActivePct * 0.04)
        );
      }
      return Math.max(0, Math.min(100, base + selfPart + micPart));
    }

    function renderStatsBar() {
      if (!statsBarEl) return;
      var br = W.__egeSpeakingPhoneticFlowStats;
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
            '<span class="ege-reading-stats-main">Пока нет записей — пройдите exam mode до конца (1:30 + 1:30).</span>' +
            html;
        }
      } else {
        html =
          '<span class="ege-reading-stats-main">Сохранение статистики не подключено.</span>' +
          html;
      }
      statsBarEl.innerHTML = html;
    }

    function saveStatsAttempt() {
      var br = W.__egeSpeakingPhoneticFlowStats;
      if (!br || typeof br.recordAttempt !== "function") return;
      var score = computeSessionScore();
      br.recordAttempt(unit.id, score);
      renderStatsBar();
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

    function beginPrepare() {
      setPhase("prepare");
      runTimer(unit.prepareSeconds || DEFAULT_PREPARE, beginRead);
    }

    function beginRead() {
      setPhase("read");
      startMicIfEnabled();
      runTimer(unit.readSeconds || DEFAULT_READ, finishRead);
    }

    function finishRead() {
      stopMic();
      micCoverageReport();
      setPhase("done");
      saveStatsAttempt();
    }

    function resetRound() {
      clearTick();
      stopMic();
      cancelTts();
      setPhase("idle");
      renderPassage("");
      if (selfCheckEl) {
        selfCheckEl.querySelectorAll("input[type=checkbox]").forEach(function (cb) {
          cb.checked = false;
        });
      }
    }

    function cancelTts() {
      try {
        if (W.speechSynthesis) W.speechSynthesis.cancel();
      } catch (e) {}
    }

    function selectedVoice() {
      var synth = W.speechSynthesis;
      if (!synth) return null;
      if (voiceSelect && voiceSelect.value) {
        return findVoiceByToken(synth, voiceSelect.value);
      }
      return pickBestVoice(synth, TTS_LANG);
    }

    function speakText(text) {
      cancelTts();
      var synth = W.speechSynthesis;
      if (!synth || !text) return;
      var u = new SpeechSynthesisUtterance(text);
      u.lang = TTS_LANG;
      u.rate = 0.92;
      var v = selectedVoice();
      if (v) u.voice = v;
      synth.speak(u);
    }

    function speakSpot(spotId) {
      var spot = (unit.trickySpots || []).find(function (s) {
        return s.id === spotId;
      });
      if (!spot) return;
      var sample = spot.label;
      if (/^\d/.test(sample)) {
        speakText(sample.replace(/,/g, ""));
        return;
      }
      speakText(sample);
    }

    function fillVoiceSelect() {
      if (!voiceSelect) return;
      var synth = W.speechSynthesis;
      if (!synth) return;
      function build() {
        var voices = synth.getVoices().filter(function (v) {
          return String(v.lang || "")
            .toLowerCase()
            .indexOf("en") === 0;
        });
        voices.sort(function (a, b) {
          return (
            naturalVoiceRank(b.name) +
            cloudVoiceBoost(b) -
            (naturalVoiceRank(a.name) + cloudVoiceBoost(a))
          );
        });
        var html = "";
        var i;
        for (i = 0; i < voices.length; i++) {
          var v = voices[i];
          html +=
            '<option value="' +
            esc(voiceToken(v)) +
            '">' +
            esc(v.name) +
            (v.localService === false ? " ☁" : "") +
            "</option>";
        }
        voiceSelect.innerHTML = html || '<option value="">Default voice</option>';
      }
      build();
      if (typeof synth.onvoiceschanged !== "undefined") {
        synth.onvoiceschanged = build;
      } else {
        setTimeout(build, 250);
      }
    }

    function loadUnit(id) {
      unit = getUnitById(id);
      saveUnitPref(unit.id);
      resetRound();
      renderMeta();
      renderPassage("");
      renderTricky();
      renderSelfCheck();
      renderStatsBar();
    }

    populateUnitSelect();
    loadUnit(unitSelect.value);
    fillVoiceSelect();
    setPhase("idle");

    unitSelect.addEventListener("change", function () {
      loadUnit(unitSelect.value);
    });

    btnStart.addEventListener("click", function () {
      cancelTts();
      beginPrepare();
    });

    if (btnSkipPrepare) {
      btnSkipPrepare.addEventListener("click", function () {
        clearTick();
        beginRead();
      });
    }

    if (btnListen) {
      btnListen.addEventListener("click", function () {
        speakText(fullText(unit));
      });
    }

    if (btnListenPara) {
      btnListenPara.addEventListener("click", function () {
        var paras = unit.paragraphs || [];
        if (paras[0]) speakText(paras[0]);
      });
    }

    if (btnRestart) {
      btnRestart.addEventListener("click", resetRound);
    }
  }

  W.__EGE_SPEAKING_READ_ALOUD__ = { mount: mount };
})(typeof window !== "undefined" ? window : this, document);
