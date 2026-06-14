/**
 * Shadowing Star: shadowing drill — play class audio, learner speaks along.
 * Continuous mic activity keeps the «runner» boosted; long silence → stumble (Subway-style feedback).
 *
 * No phrase scoring — activity-only (Web Speech interim/final counts as «speaking»).
 * «Flow» heuristic: many SR updates in a short window ≈ steady speech along the track;
 * combo tiers speed up stripe animation (honest UX + intonation coaching in copy).
 */
(function (W) {
  "use strict";

  function mergeCopy(base, extra) {
    var o = {};
    var k;
    for (k in base) if (Object.prototype.hasOwnProperty.call(base, k)) o[k] = base[k];
    if (extra) {
      for (k in extra) if (Object.prototype.hasOwnProperty.call(extra, k)) o[k] = extra[k];
    }
    return o;
  }

  /**
   * @param {{
   *   els: {
   *     audio: HTMLAudioElement,
   *     trackSelect?: HTMLSelectElement | null,
   *     trackSwitchWrap?: HTMLElement | null,
   *     rail: HTMLElement,
   *     vehicle: HTMLElement,
   *     stars: HTMLElement,
   *     combo?: HTMLElement | null,
   *     status?: HTMLElement | null,
   *     hint?: HTMLElement | null,
   *     modeSelect?: HTMLSelectElement | null,
   *     ghostDot?: HTMLElement | null,
   *     echoDot?: HTMLElement | null,
   *     btnStart: HTMLElement,
   *     btnStop: HTMLElement
   *   },
   *   tracks: { id: string, label: string, src: string }[],
   *   speechLang?: string,
   *   silenceMs?: number,
   *   stumbleCooldownMs?: number,
   *   starSecondsPerStar?: number,
   *   graceMs?: number,
   *   copy?: Record<string, string>
   * }} opts
   */
  function mount(opts) {
    var doc = W.document;
    var els = opts.els || {};
    var audio = els.audio;
    var trackSelect = els.trackSelect || null;
    var trackSwitchWrap = els.trackSwitchWrap || null;
    var rail = els.rail;
    var vehicle = els.vehicle;
    var starsEl = els.stars;
    var comboEl = els.combo || null;
    var statusEl = els.status || null;
    var hintEl = els.hint || null;
    var modeSelect = els.modeSelect || null;
    var ghostDot = els.ghostDot || null;
    var echoDot = els.echoDot || null;
    var btnStart = els.btnStart;
    var btnStop = els.btnStop;
    var tracks = opts.tracks || [];
    var speechLang = opts.speechLang || "en-GB";
    var SILENCE_MS = opts.silenceMs != null ? opts.silenceMs : 2800;
    var STUMBLE_COOLDOWN_MS =
      opts.stumbleCooldownMs != null ? opts.stumbleCooldownMs : 1400;
    var STAR_SECONDS =
      opts.starSecondsPerStar != null ? opts.starSecondsPerStar : 2.8;
    var GRACE_MS = opts.graceMs != null ? opts.graceMs : 3800;
    var DEFAULT_GHOST_BEAT_SEC =
      opts.ghostBeatSec != null ? opts.ghostBeatSec : 0.62;

    if (
      !audio ||
      !rail ||
      !vehicle ||
      !starsEl ||
      !btnStart ||
      !btnStop ||
      !tracks.length
    )
      return;

    var copy = mergeCopy(
      {
        idleStatus:
          "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u0421\u0442\u0430\u0440\u0442\u00bb. \u0422\u044f\u043d\u0438\u0442\u0435\u0441\u044c \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043c\u043f \u0438 \u0438\u043d\u0442\u043e\u043d\u0430\u0446\u0438\u044e \u0434\u0438\u043a\u0442\u043e\u0440\u0430 \u2014 \u0442\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u043e\u0441\u0430 \u00ab\u0436\u0438\u0432\u0451\u0442\u00bb.",
        runningStatus:
          "\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u0441\u043b\u0443\u0448\u0430\u0435\u0442 \u2014 \u043f\u0440\u043e\u0438\u0437\u043d\u043e\u0441\u0438\u0442\u0435 \u0432\u0441\u043b\u0443\u0445, \u043a\u0430\u043a \u0434\u0438\u043a\u0442\u043e\u0440 (\u0438\u043d\u0442\u043e\u043d\u0430\u0446\u0438\u044f \u0438 \u043f\u0430\u0443\u0437\u044b).",
        runningFlow:
          "\u041f\u043e\u0442\u043e\u043a \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u2014 \u0434\u043e\u0440\u043e\u0433\u0430 \u0435\u0449\u0451 \u0431\u044b\u0441\u0442\u0440\u0435\u0435!",
        runningGood:
          "\u041a\u043e\u043c\u0431\u043e \u0440\u0430\u0441\u0442\u0451\u0442 \u2014 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f.",
        runningHot:
          "\u041e\u0433\u043e\u043d\u044c! \u0422\u044f\u043d\u0438\u0442\u0435\u0441\u044c \u0437\u0430 \u0442\u0435\u043c\u043f\u043e\u043c \u0438 \u043c\u0435\u043b\u043e\u0434\u0438\u043a\u043e\u0439 \u0434\u0438\u043a\u0442\u043e\u0440\u0430.",
        silentWarn:
          "\u0414\u043e\u043b\u0433\u043e \u0442\u0438\u0448\u0438\u043d\u0430 \u2014 \u0441\u0442\u0440\u0430\u0439\u043a \u043a\u0430\u043a \u0432 runner!",
        endedStatus:
          "\u0424\u0438\u043d\u0438\u0448! \u0417\u0432\u0451\u0437\u0434\u044b \u2014 \u0437\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u0443\u044e \u0442\u0435\u043d\u044c.",
        ghostIdleStatus:
          "\u0420\u0435\u0436\u0438\u043c Ghost Rhythm: \u0441\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0442\u043e\u043d\u043a\u043e\u0439 \u044d\u0442\u0430\u043b\u043e\u043d-\u0434\u043e\u0440\u043e\u0436\u043a\u043e\u0439 \u0438 \u0432\u0445\u043e\u0434\u0438\u0442\u0435 \u0432 \u0442\u0435\u043c\u043f.",
        ghostRunningStatus:
          "Ghost Rhythm \u0430\u043a\u0442\u0438\u0432\u0435\u043d: \u0433\u043e\u043b\u0443\u0431\u043e\u0439 \u043c\u0430\u0440\u043a\u0435\u0440 \u0434\u0438\u043a\u0442\u043e\u0440\u0430, \u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u2014 \u0432\u0430\u0448 \u043e\u0442\u043a\u043b\u0438\u043a.",
        ghostGuideStatus:
          "\u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u0440\u0438\u0442\u043c: \u043f\u043e\u043f\u0430\u0434\u0430\u0439\u0442\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u043c \u0432 \u0442\u0435\u043c\u043f \u0431\u0435\u0433\u0443\u0449\u0435\u0439 \u0434\u043e\u0440\u043e\u0436\u043a\u0438.",
        ghostEndedStatus:
          "Ghost Rhythm \u0444\u0438\u043d\u0438\u0448: \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u0440\u043e\u0432\u043d\u0435\u0435 \u0442\u0435\u043c\u043f.",
        ghostHitPerfect:
          "\u0412\u0435\u0440\u043d\u043e +3",
        ghostHitGood:
          "\u0425\u043e\u0440\u043e\u0448\u043e +2",
        ghostHitOk:
          "\u041f\u043e\u0447\u0442\u0438 +1",
        ghostHitMiss:
          "\u041c\u0438\u043c\u043e 0",
        noSr:
          "\u041d\u0435\u0442 Web Speech \u2014 Chrome / Edge, \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d.",
        hint:
          "\u041c\u044b \u043d\u0435 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u043c \u0432\u044b\u0441\u043e\u0442\u0443 \u0437\u0432\u0443\u043a\u0430, \u043d\u043e \u0447\u0435\u043c \u0431\u043b\u0438\u0436\u0435 \u0432\u044b \u043a \u0438\u043d\u0442\u043e\u043d\u0430\u0446\u0438\u0438 \u0438 \u0440\u0438\u0442\u043c\u0443 \u0434\u0438\u043a\u0442\u043e\u0440\u0430, \u0442\u0435\u043c \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0435\u0435 \u043f\u043e\u0442\u043e\u043a \u0440\u0435\u0447\u0438 \u0438 \u0442\u0435\u043c \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0438 \u044f\u0440\u0447\u0435 \u0431\u0435\u0436\u0438\u0442 \u00ab\u0440\u0435\u043b\u044c\u0441\u044b\u00bb. \u0420\u043e\u0441\u0442\u0435\u0442 \u043a\u043e\u043c\u0431\u043e \u2014 \u0435\u0449\u0451 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043f\u043e\u043b\u043e\u0441\u0430." +
          "\n\n\u0422\u0438\u0448\u0438\u043d\u0430 ~" +
          Math.round(SILENCE_MS / 1000) +
          "\u00a0\u0441 \u043f\u0440\u0438 \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u043e\u043c \u0437\u0432\u0443\u043a\u0435 \u2014 \u0441\u0442\u0440\u0430\u0439\u043a: \u043a\u043e\u043c\u0431\u043e \u0440\u0435\u0436\u0435\u0442\u0441\u044f."
          ,
        ghostHint:
          "Ghost Rhythm = тренировка именно темпа.\n\nГолубой маркер — эталонный ритм диктора. Золотая вспышка — ваш голос в этот момент. Цель: чтобы отклики шли рядом с голубым маркером чаще и ровнее." +
          "\n\nОчки: Правильно +3, Хороший ритм +2, Почти +1, Мимо +0." +
          "\nЭто про тайминг и ритм, не про точную высоту голоса."
      },
      opts.copy || {}
    );

    var micRec = null;
    var micShouldRun = false;
    var playing = false;
    var lastSpeechAt = 0;
    var lastStumbleAt = 0;
    var combo = 1;
    var stars = 0;
    var speechAccumSec = 0;
    var rafId = 0;
    var lastFrameTs = 0;
    var runStartTs = 0;
    var echoHideTimer = 0;
    var mode = modeSelect && modeSelect.value === "ghost" ? "ghost" : "classic";
    var ghostScore = 0;
    var ghostTotal = 0;
    var ghostPerfect = 0;
    var ghostGood = 0;
    var ghostOk = 0;
    var ghostMiss = 0;
    var ghostLastLabel = "\u2014";
    /** Timestamps of SR callbacks — density ≈ steady shadowing */
    var speechHitTs = [];
    var FLOW_WINDOW_MS = 2200;
    var FLOW_MIN_HITS = 5;

    function selectedTrack() {
      var idx = 0;
      if (trackSelect && trackSelect.value) {
        var i;
        for (i = 0; i < tracks.length; i++) {
          if (tracks[i].id === trackSelect.value) {
            idx = i;
            break;
          }
        }
      }
      return tracks[idx];
    }

    function ghostBeatSec() {
      var tr = selectedTrack();
      if (tr && tr.ghostBeatSec && tr.ghostBeatSec > 0) return tr.ghostBeatSec;
      return DEFAULT_GHOST_BEAT_SEC;
    }

    function isGhostMode() {
      return mode === "ghost";
    }

    function ghostPhase() {
      var b = ghostBeatSec();
      if (!b || b <= 0) return 0;
      var t = audio && !isNaN(audio.currentTime) ? audio.currentTime : 0;
      return ((t % b) + b) % b / b;
    }

    function laneLeftFromPhase(phase) {
      var p = Math.max(0, Math.min(1, phase));
      return 8 + p * 84;
    }

    function paintGhostDot() {
      if (!ghostDot || !isGhostMode()) return;
      ghostDot.style.left = laneLeftFromPhase(ghostPhase()) + "%";
    }

    function pulseEchoDot() {
      if (!echoDot || !isGhostMode()) return;
      echoDot.style.left = laneLeftFromPhase(ghostPhase()) + "%";
      echoDot.classList.add("show");
      if (echoHideTimer) W.clearTimeout(echoHideTimer);
      echoHideTimer = W.setTimeout(function () {
        echoDot.classList.remove("show");
        echoHideTimer = 0;
      }, 220);
    }

    function ghostAccuracyPct() {
      if (!ghostTotal) return 0;
      var weighted = ghostPerfect + ghostGood * 0.7 + ghostOk * 0.4;
      return Math.round((weighted / ghostTotal) * 100);
    }

    function assessGhostHit() {
      if (!isGhostMode()) return;
      var ph = ghostPhase();
      var dist = Math.min(ph, 1 - ph);
      ghostTotal++;
      if (dist <= 0.11) {
        ghostScore += 3;
        ghostPerfect++;
        ghostLastLabel = copy.ghostHitPerfect;
      } else if (dist <= 0.19) {
        ghostScore += 2;
        ghostGood++;
        ghostLastLabel = copy.ghostHitGood;
      } else if (dist <= 0.29) {
        ghostScore += 1;
        ghostOk++;
        ghostLastLabel = copy.ghostHitOk;
      } else {
        ghostMiss++;
        ghostLastLabel = copy.ghostHitMiss;
      }
      updateHud();
    }

    function applyModeUi() {
      rail.classList.toggle("ss-ghost-mode", isGhostMode());
      if (comboEl) comboEl.textContent = isGhostMode() ? "ghost" : "\u00d71";
      if (starsEl) starsEl.textContent = isGhostMode() ? "\u266a" : "\u2605 0";
      if (statusEl && !playing) {
        statusEl.textContent = isGhostMode() ? copy.ghostIdleStatus : copy.idleStatus;
      }
      if (hintEl) {
        hintEl.textContent = isGhostMode() ? copy.ghostHint : copy.hint;
      }
      if (!isGhostMode() && echoDot) echoDot.classList.remove("show");
      paintGhostDot();
    }

    function fillTrackSelect() {
      if (!trackSelect) return;
      trackSelect.innerHTML = "";
      var i;
      for (i = 0; i < tracks.length; i++) {
        var t = tracks[i];
        var o = doc.createElement("option");
        o.value = t.id;
        o.textContent = t.label;
        trackSelect.appendChild(o);
      }
      if (trackSwitchWrap) {
        trackSwitchWrap.style.display = tracks.length > 1 ? "" : "none";
      }
    }

    function stopMic() {
      micShouldRun = false;
      if (micRec) {
        try {
          micRec.abort();
        } catch (e0) {
          try {
            micRec.stop();
          } catch (e1) {}
        }
        micRec = null;
      }
    }

    function updateHud() {
      if (isGhostMode()) {
        starsEl.textContent = "\u266a " + ghostScore;
        if (comboEl) comboEl.textContent = ghostLastLabel;
        return;
      }
      starsEl.textContent = "\u2605 " + stars;
      if (comboEl)
        comboEl.textContent =
          "\u00d7" + Math.max(1, Math.floor(combo * 10) / 10);
    }

    function pruneSpeechHits(ts) {
      while (speechHitTs.length && speechHitTs[0] < ts - FLOW_WINDOW_MS) {
        speechHitTs.shift();
      }
    }

    function speechInFlow(ts) {
      pruneSpeechHits(ts);
      return speechHitTs.length >= FLOW_MIN_HITS;
    }

    /** Visual stripe speed: faster when boosted + high combo + steady SR stream */
    function updateStripeSpeed(boosted, silentPhase, comboVal, inFlow) {
      var dur;
      if (silentPhase) {
        dur = 2.55;
      } else if (!boosted) {
        dur = 1.22;
      } else {
        dur = 0.58;
        if (comboVal >= 8) dur *= 0.68;
        else if (comboVal >= 4) dur *= 0.82;
        if (inFlow) dur *= 0.78;
      }
      rail.style.setProperty("--ss-stripe-dur", dur + "s");
    }

    function applyStumble() {
      rail.classList.remove("ss-hit");
      void rail.offsetWidth;
      rail.classList.add("ss-hit");
      W.setTimeout(function () {
        rail.classList.remove("ss-hit");
      }, 420);
      combo = Math.max(1, Math.floor(combo * 0.5));
      speechHitTs.length = 0;
      if (statusEl) statusEl.textContent = copy.silentWarn;
      updateHud();
    }

    function bumpSpeech() {
      lastSpeechAt = W.performance.now();
      pulseEchoDot();
      assessGhostHit();
    }

    function startMic() {
      stopMic();
      var SR = W.SpeechRecognition || W.webkitSpeechRecognition;
      if (!SR) {
        if (statusEl) statusEl.textContent = copy.noSr;
        return;
      }
      micShouldRun = true;
      micRec = new SR();
      micRec.continuous = true;
      micRec.interimResults = true;
      micRec.lang = speechLang;
      bumpSpeech();

      micRec.onresult = function () {
        if (!micShouldRun || !playing) return;
        bumpSpeech();
        speechHitTs.push(W.performance.now());
      };

      micRec.onerror = function (ev) {
        if (!micShouldRun) return;
        if (ev.error === "no-speech" || ev.error === "aborted") return;
      };

      micRec.onend = function () {
        if (!micShouldRun || !playing) return;
        try {
          micRec.start();
        } catch (eR) {}
      };

      try {
        micRec.start();
      } catch (eS) {
        if (statusEl) statusEl.textContent = copy.noSr;
      }
    }

    function tick(now) {
      if (!playing) return;
      var ts = now || W.performance.now();
      if (!lastFrameTs) lastFrameTs = ts;
      var dt = (ts - lastFrameTs) / 1000;
      lastFrameTs = ts;

      var silent =
        ts - lastSpeechAt > SILENCE_MS && ts - runStartTs > GRACE_MS;
      var srOk = !!(micRec && micShouldRun);

      if (!audio.paused && audio.duration && !isNaN(audio.duration)) {
        var pct = Math.min(
          92,
          Math.max(6, (audio.currentTime / audio.duration) * 82 + 6)
        );
        vehicle.style.left = pct + "%";
      }

      var boosted = !silent && srOk;
      var silentPhase = silent && srOk && !audio.paused;
      var inFlow = speechInFlow(ts);
      paintGhostDot();

      rail.classList.toggle("ss-boost", boosted);
      rail.classList.toggle("ss-silent", silentPhase);
      rail.classList.toggle("ss-flow", boosted && inFlow);

      updateStripeSpeed(boosted, silentPhase, combo, inFlow);

      if (isGhostMode()) {
        rail.classList.remove("ss-silent");
        if (statusEl && !audio.paused) statusEl.textContent = copy.ghostGuideStatus;
        if (audio.ended) {
          endRun(false);
          return;
        }
        rafId = W.requestAnimationFrame(tick);
        return;
      }

      if (silent && srOk && !audio.paused) {
        if (ts - lastStumbleAt > STUMBLE_COOLDOWN_MS) {
          applyStumble();
          lastStumbleAt = ts;
        }
      } else if (!silent && srOk && !audio.paused && dt > 0) {
        speechAccumSec += dt;
        var flowMul = inFlow ? 1.42 : 1;
        var tierMul = combo >= 8 ? 1.22 : combo >= 4 ? 1.1 : 1;
        combo += dt * 0.22 * flowMul * tierMul;
        while (speechAccumSec >= STAR_SECONDS) {
          speechAccumSec -= STAR_SECONDS;
          stars++;
        }
        if (statusEl) {
          if (inFlow) statusEl.textContent = copy.runningFlow;
          else if (combo >= 8) statusEl.textContent = copy.runningHot;
          else if (combo >= 4) statusEl.textContent = copy.runningGood;
          else statusEl.textContent = copy.runningStatus;
        }
        updateHud();
      }

      if (audio.ended) {
        endRun(false);
        return;
      }

      rafId = W.requestAnimationFrame(tick);
    }

    function endRun(fromButton) {
      playing = false;
      lastFrameTs = 0;
      if (rafId) {
        W.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      stopMic();
      try {
        audio.pause();
      } catch (eP) {}
      rail.classList.remove("ss-boost", "ss-silent", "ss-flow");
      rail.classList.toggle("ss-ghost-mode", isGhostMode());
      rail.style.setProperty("--ss-stripe-dur", "1.15s");
      speechHitTs.length = 0;
      btnStart.disabled = false;
      btnStop.disabled = true;
      if (modeSelect) modeSelect.disabled = false;
      if (statusEl && !fromButton) {
        if (isGhostMode()) {
          statusEl.textContent =
            copy.ghostEndedStatus +
            " · score " +
            ghostScore +
            " · rhythm " +
            ghostAccuracyPct() +
            "%";
        } else {
          statusEl.textContent = copy.endedStatus;
        }
      }
      if (statusEl && fromButton) {
        statusEl.textContent = isGhostMode() ? copy.ghostIdleStatus : copy.idleStatus;
      }
      if (echoHideTimer) {
        W.clearTimeout(echoHideTimer);
        echoHideTimer = 0;
      }
      if (echoDot) echoDot.classList.remove("show");
      updateHud();
    }

    function beginRun() {
      var tr = selectedTrack();
      if (!tr || !tr.src) return;
      audio.src = tr.src;
      combo = 1;
      stars = 0;
      speechAccumSec = 0;
      ghostScore = 0;
      ghostTotal = 0;
      ghostPerfect = 0;
      ghostGood = 0;
      ghostOk = 0;
      ghostMiss = 0;
      ghostLastLabel = "\u2014";
      speechHitTs.length = 0;
      lastSpeechAt = W.performance.now();
      lastStumbleAt = 0;
      runStartTs = lastSpeechAt;
      updateHud();

      playing = true;
      btnStart.disabled = true;
      btnStop.disabled = false;
      if (modeSelect) modeSelect.disabled = true;
      if (statusEl) {
        statusEl.textContent = isGhostMode()
          ? copy.ghostRunningStatus
          : copy.runningStatus;
      }

      startMic();

      var p = audio.play();
      if (p && typeof p.catch === "function") {
        p.catch(function () {
          if (statusEl) statusEl.textContent = copy.noSr;
          endRun(true);
        });
      }

      lastFrameTs = 0;
      rafId = W.requestAnimationFrame(tick);

      audio.onended = function () {
        endRun(false);
      };
    }

    fillTrackSelect();
    if (hintEl) {
      hintEl.style.whiteSpace = "pre-line";
      hintEl.textContent = isGhostMode() ? copy.ghostHint : copy.hint;
    }
    if (statusEl) statusEl.textContent = isGhostMode() ? copy.ghostIdleStatus : copy.idleStatus;
    btnStop.disabled = true;
    applyModeUi();
    updateHud();

    btnStart.addEventListener("click", function () {
      if (playing) return;
      beginRun();
    });

    btnStop.addEventListener("click", function () {
      if (!playing) return;
      endRun(true);
    });

    if (modeSelect) {
      modeSelect.addEventListener("change", function () {
        if (playing) return;
        mode = modeSelect.value === "ghost" ? "ghost" : "classic";
        applyModeUi();
      });
    }
  }

  W.PREP_SHADOWING_STAR = {
    mount: mount
  };
})(typeof window !== "undefined" ? window : globalThis);
