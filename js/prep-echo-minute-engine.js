/**
 * Echo Minute («Минута на слух»): 60s sprint — definitions read aloud (TTS),
 * answer text hidden until you speak it or say «I don't know» / skip.
 *
 * Depends on: prep-retell-chain-speech-match.js
 * (phraseMatchesVoiceBingo, typedMatchesPhrase, buildHaystack, voiceBlitzSkipHeard)
 */
(function (W) {
  "use strict";

  /** Prefer cloud / neural voices over legacy robotic engines */
  function naturalVoiceRank(name) {
    var n = String(name || "").toLowerCase();
    var r = 0;
    if (/neural|natural|premium|enhanced|generative|humanlike|wave(?:net)?|\bonline\b/i.test(n)) r += 45;
    if (/microsoft .*english.*network/i.test(n)) r += 38;
    if (/\(natural\)|\(neural\)|\(humanlike\)/i.test(n)) r += 35;
    if (/google ui english|google translate english/i.test(n)) r += 28;
    if (/microsoft .*english/i.test(n)) r += 14;
    if (/google /.test(n)) r += 12;
    if (/apple /.test(n)) r += 14;
    if (/amazon /.test(n)) r += 10;
    if (/espeak|robotic|speech unit/i.test(n)) r -= 90;
    return r;
  }

  /** Remote/cloud voices (Chromium) — usually far less robotic */
  function cloudVoiceBoost(v) {
    if (!v) return 0;
    if (v.localService === false) return 62;
    if (v.localService === true) return -14;
    return 0;
  }

  function voiceOptionToken(v) {
    if (!v) return "";
    var uri = v.voiceURI;
    if (uri && String(uri).length) return String(uri);
    return (
      "__nm|" +
      encodeURIComponent(v.name || "") +
      "|" +
      encodeURIComponent(v.lang || "")
    );
  }

  /**
   * @param {SpeechSynthesis | null | undefined} synth
   * @param {string} token from voiceOptionToken / select value
   */
  function findVoiceByPickerToken(synth, token) {
    if (!synth || !token || !String(token).length) return null;
    var voices = typeof synth.getVoices === "function" ? synth.getVoices() : [];
    var vi;
    for (vi = 0; vi < voices.length; vi++) {
      if (voiceOptionToken(voices[vi]) === token) return voices[vi];
    }
    return null;
  }

  /** Best-effort gender guess — Web Speech API has no standard gender field */
  function guessVoiceGender(name) {
    var n = String(name || "").toLowerCase();
    if (/\bfemale\b|\bwoman\b|microsoft .*female|google .*female/i.test(n)) return "female";
    if (/\bmale\b|microsoft .*male|google .*male/i.test(n)) return "male";
    if (
      /\b(zira|jenny|aria|sonia|libby|emma|amy|hazel|susan|samantha|karen|victoria|linda|sarah|catherine|serena|tessa|fiona|martha|natalie|michelle|nancy)\b/.test(
        n
      )
    )
      return "female";
    if (
      /\b(david|mark|daniel|george|thomas|ryan|guy|james|christopher|andrew|oliver|jason|william|tony|benjamin|charles|malcolm|arthur|brian|fred)\b/.test(
        n
      )
    )
      return "male";
    return null;
  }

  function localeBoost(voiceLang, wantedLang) {
    var V = String(voiceLang || "").toLowerCase().replace(/_/g, "-");
    var WW = String(wantedLang || "").toLowerCase().replace(/_/g, "-");
    if (!V || !WW) return 0;
    if (V === WW) return 32;
    var vm = V.split("-")[0];
    var wm = WW.split("-")[0];
    if (vm !== wm) return -999;
    var score = 12;
    if (WW.indexOf("-gb") !== -1 && V.indexOf("-gb") !== -1) score += 18;
    if (WW.indexOf("-us") !== -1 && V.indexOf("-us") !== -1) score += 18;
    return score;
  }

  /**
   * @param {SpeechSynthesis | null | undefined} synth
   * @param {string} wantedLang e.g. en-GB
   * @param {"female"|"male"} genderWant
   * @returns {SpeechSynthesisVoice | null}
   */
  function pickEchoMinuteVoice(synth, wantedLang, genderWant) {
    var voices =
      synth && typeof synth.getVoices === "function" ? synth.getVoices() : [];
    var vi;
    var best = null;
    var bestScore = -1e9;
    for (vi = 0; vi < voices.length; vi++) {
      var v = voices[vi];
      var loc = localeBoost(v.lang, wantedLang);
      if (loc < -99) continue;
      var rank = naturalVoiceRank(v.name) + loc + cloudVoiceBoost(v);
      var g = guessVoiceGender(v.name);
      if (genderWant === "female") {
        if (g === "female") rank += 120;
        else if (g === "male") rank -= 55;
      } else {
        if (g === "male") rank += 120;
        else if (g === "female") rank -= 55;
      }
      if (rank > bestScore) {
        bestScore = rank;
        best = v;
      }
    }
    return best;
  }

  function shuffleInPlace(arr) {
    var i;
    for (i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

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
   *     stageMain: HTMLElement,
   *     stageSub?: HTMLElement | null,
   *     timer: HTMLElement,
   *     scoreLive: HTMLElement,
   *     summary?: HTMLElement | null,
   *     status?: HTMLElement | null,
   *     transcript?: HTMLElement | null,
   *     typeInput?: HTMLInputElement | null,
   *     btnCheck?: HTMLElement | null,
   *     btnStart: HTMLElement,
   *     btnReplay?: HTMLElement | null,
   *     btnSkip?: HTMLElement | null,
   *     voicePickSelect?: HTMLSelectElement | null
   *   },
   *   getLexRows: (themeId: string) => { ans: string, hint: string }[],
   *   themeDefinitions?: { id: string }[],
   *   radioName?: string,
   *   speech?: typeof PREP_RETELL_CHAIN_SPEECH,
   *   speechLang?: string,
   *   ttsLang?: string,
   *   ttsRate?: number,
   *   ttsPitchFemale?: number,
   *   ttsPitchMale?: number,
   *   roundSeconds?: number,
   *   minDeck?: number,
   *   revealAnswerMs?: number,
   *   voiceGenderRadioName?: string,
   *   voicePickStorageKey?: string,
   *   copy?: Record<string, string>
   * }} opts
   */
  function mount(opts) {
    var speech = opts.speech || W.PREP_RETELL_CHAIN_SPEECH;
    if (
      !speech ||
      typeof speech.phraseMatchesVoiceBingo !== "function" ||
      typeof speech.typedMatchesPhrase !== "function" ||
      typeof speech.buildHaystack !== "function" ||
      typeof speech.voiceBlitzSkipHeard !== "function"
    ) {
      console.error(
        "PREP_ECHO_MINUTE: load prep-retell-chain-speech-match.js (updated) before this file."
      );
      return;
    }

    var doc = W.document;
    var els = opts.els || {};
    var stageMain = els.stageMain;
    var stageSub = els.stageSub || null;
    var timerEl = els.timer;
    var scoreLiveEl = els.scoreLive;
    var summaryEl = els.summary || null;
    var statusEl = els.status || null;
    var transcriptEl = els.transcript || null;
    var typeInput = els.typeInput || null;
    var btnCheck = els.btnCheck || null;
    var btnStart = els.btnStart;
    var btnReplay = els.btnReplay || null;
    var btnSkip = els.btnSkip || null;
    var voicePickSelect = els.voicePickSelect || null;
    var voicePickStorageKey =
      opts.voicePickStorageKey || "prepEchoMinuteVoiceUri";
    var voiceGenderRadioName = opts.voiceGenderRadioName || "echoMinuteVoiceGender";
    var speechLang = opts.speechLang || "en-GB";
    var ttsLang = opts.ttsLang || speechLang;
    var ttsRateBase = opts.ttsRate != null ? opts.ttsRate : 0.97;
    var ttsPitchFemale = opts.ttsPitchFemale != null ? opts.ttsPitchFemale : 1.06;
    var ttsPitchMale = opts.ttsPitchMale != null ? opts.ttsPitchMale : 0.94;
    var ROUND_MS = Math.max(15000, Math.round((opts.roundSeconds || 60) * 1000));
    var MIN_DECK = Math.max(3, opts.minDeck | 0 || 5);
    var REVEAL_MS = Math.max(700, opts.revealAnswerMs | 0 || 1400);
    var radioName = opts.radioName || "echoMinuteTheme";
    var getLexRows = opts.getLexRows;
    var themeDefinitions = opts.themeDefinitions || [];

    if (!stageMain || !timerEl || !scoreLiveEl || !btnStart || typeof getLexRows !== "function") return;

    var copy = mergeCopy(
      {
        idleMain:
          "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u0421\u0442\u0430\u0440\u0442\u00bb \u2014 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0437\u0432\u0443\u0447\u0438\u0442\u0441\u044f, \u0442\u0435\u043a\u0441\u0442 \u0441\u043a\u0440\u044b\u0442.",
        idleSub:
          "\u041d\u0430\u0437\u043e\u0432\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u043b\u0443\u0445 (\u0438\u043b\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435). \u00abI don't know\u00bb / skip \u2014 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0438 \u0434\u0430\u043b\u044c\u0448\u0435.",
        listenCue: "\ud83c\udfaf \u0421\u043b\u0443\u0448\u0430\u0439\u0442\u0435\u2026",
        listenSub:
          "\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u0443\u0445 \u2014 \u043d\u0435 \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u044d\u043a\u0440\u0430\u043d.",
        roundLiveSub:
          "\u0423\u0441\u043f\u0435\u0439\u0442\u0435 \u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0442\u0438 \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0444\u0440\u0430\u0437.",
        correctLine:
          "\u0412\u0435\u0440\u043d\u043e!",
        skipLine:
          "\u041e\u0442\u043a\u0440\u044b\u0442\u043e",
        timeUpMain:
          "\u0412\u0440\u0435\u043c\u044f!",
        summaryTpl:
          "\u0417\u0430 \u0440\u0430\u0443\u043d\u0434: \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0439 \u2014 {score}.",
        listening:
          "\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u2026 \u0442\u0440\u0430\u043d\u0441\u043a\u0440\u0438\u043f\u0442 \u0441\u043a\u0440\u044b\u0442.",
        noSr:
          "\u041d\u0435\u0442 Web Speech \u2014 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u0438\u043b\u0438 Skip.",
        noSrUi:
          "\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d.",
        noTts:
          "\u0421\u0438\u043d\u0442\u0435\u0437 \u0440\u0435\u0447\u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u2014 \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432 Chrome / Edge.",
        transcriptPrivacy:
          "\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0432 \u0444\u043e\u043d\u0435 (\u0442\u0435\u043a\u0441\u0442 \u0441\u043a\u0440\u044b\u0442).",
        transcriptIdle: "\u2014",
        typeWrong:
          "\u041d\u0435 \u0442\u043e \u2014 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0451 \u0440\u0430\u0437.",
        needCards:
          "\u0412 \u0442\u0435\u043c\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u2014 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u044e.",
        btnReplayHint:
          "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435",
        voicePickAuto:
          "\u0410\u0432\u0442\u043e (\u043b\u0443\u0447\u0448\u0438\u0439 \u043f\u043e \u043f\u043e\u043b\u044e \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0443)",
        voicePickHint:
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u043b\u043e\u0441 \u0441\u00ab\u2601\u00bb \u2014 \u044d\u0442\u043e \u043e\u0431\u043b\u0430\u0447\u043d\u044b\u0439 (Natural / Online), \u043e\u043d \u0447\u0430\u0449\u0435 \u0437\u0432\u0443\u0447\u0438\u0442 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e."
      },
      opts.copy || {}
    );

    var micRec = null;
    var micShouldRun = false;
    var micBuffer = "";
    var micInterimLive = "";
    var speechCooldownUntil = 0;

    /** @type {{ ans: string, hint: string }[]} */
    var deck = [];
    var cardIndex = 0;
    var score = 0;
    var roundActive = false;
    /** SR allowed only while true */
    var listeningAllowed = false;

    var clockInterval = null;
    var remainingMs = ROUND_MS;
    var clockPaused = true;
    var lastClockSample = 0;

    var synthGlobal = W.speechSynthesis;

    function selectedTtsGender() {
      var sel = doc.querySelector(
        'input[name="' + voiceGenderRadioName + '"]:checked'
      );
      return sel && sel.value === "male" ? "male" : "female";
    }

    function refreshVoicePickUi() {
      if (!voicePickSelect || !synthGlobal) return;
      var saved = "";
      try {
        if (W.sessionStorage) {
          saved = W.sessionStorage.getItem(voicePickStorageKey) || "";
        }
      } catch (eSt) {}
      var voices =
        typeof synthGlobal.getVoices === "function"
          ? synthGlobal.getVoices().slice()
          : [];
      voices.sort(function (a, b) {
        var la = localeBoost(a.lang, ttsLang);
        var lb = localeBoost(b.lang, ttsLang);
        if (la < -99) return 1;
        if (lb < -99) return -1;
        var sa =
          naturalVoiceRank(a.name) + Math.max(0, la) + cloudVoiceBoost(a);
        var sb =
          naturalVoiceRank(b.name) + Math.max(0, lb) + cloudVoiceBoost(b);
        return sb - sa;
      });
      voicePickSelect.innerHTML = "";
      var optA = doc.createElement("option");
      optA.value = "";
      optA.textContent = copy.voicePickAuto || "\u0410\u0432\u0442\u043e";
      voicePickSelect.appendChild(optA);
      var vi;
      for (vi = 0; vi < voices.length; vi++) {
        var vv = voices[vi];
        if (localeBoost(vv.lang, ttsLang) < -99) continue;
        var o = doc.createElement("option");
        o.value = voiceOptionToken(vv);
        var cloudMark = vv.localService === false ? " \u2601" : "";
        o.textContent = vv.name + cloudMark + " (" + vv.lang + ")";
        voicePickSelect.appendChild(o);
      }
      var restored = false;
      if (saved) {
        for (vi = 0; vi < voicePickSelect.options.length; vi++) {
          if (voicePickSelect.options[vi].value === saved) {
            voicePickSelect.selectedIndex = vi;
            restored = true;
            break;
          }
        }
      }
      if (!restored) voicePickSelect.selectedIndex = 0;
    }

    function applyVoiceToUtterance(u) {
      var want = selectedTtsGender();
      var manual =
        voicePickSelect && voicePickSelect.value
          ? String(voicePickSelect.value)
          : "";
      var voice = manual
        ? findVoiceByPickerToken(synthGlobal, manual)
        : null;
      if (!voice) {
        voice = pickEchoMinuteVoice(synthGlobal, ttsLang, want);
      }
      if (voice) {
        u.voice = voice;
        u.lang = voice.lang || ttsLang;
      } else {
        u.lang = ttsLang;
      }
      var looksNeural =
        voice &&
        (naturalVoiceRank(voice.name) >= 32 ||
          cloudVoiceBoost(voice) >= 50);
      u.rate = looksNeural ? Math.min(1.06, ttsRateBase + 0.05) : ttsRateBase;
      if (manual && voice) {
        u.pitch = 1;
      } else {
        u.pitch = want === "female" ? ttsPitchFemale : ttsPitchMale;
      }
    }

    if (synthGlobal && synthGlobal.addEventListener) {
      synthGlobal.addEventListener("voiceschanged", refreshVoicePickUi);
    }
    if (synthGlobal && synthGlobal.getVoices && synthGlobal.getVoices().length === 0) {
      W.setTimeout(function () {
        try {
          synthGlobal.getVoices();
        } catch (eV) {}
        refreshVoicePickUi();
      }, 400);
      W.setTimeout(function () {
        refreshVoicePickUi();
      }, 1200);
    }
    function selectedThemeId() {
      var sel = doc.querySelector('input[name="' + radioName + '"]:checked');
      if (sel && sel.value) return sel.value;
      return themeDefinitions[0] ? themeDefinitions[0].id : "";
    }

    function pauseMicListening() {
      listeningAllowed = false;
      micBuffer = "";
      micInterimLive = "";
      micShouldRun = false;
      if (micRec) {
        try {
          micRec.abort();
        } catch (eab) {
          try {
            micRec.stop();
          } catch (est) {}
        }
      }
      updateTranscript();
    }

    /** Full teardown — между карточками не вызывать (иначе новый запрос микрофона). */
    function stopMic() {
      micShouldRun = false;
      listeningAllowed = false;
      micBuffer = "";
      micInterimLive = "";
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
      updateTranscript();
    }

    function cancelTts() {
      try {
        if (W.speechSynthesis) W.speechSynthesis.cancel();
      } catch (eC) {}
    }

    function updateTranscript() {
      if (!transcriptEl) return;
      if (!roundActive) {
        transcriptEl.textContent = copy.transcriptIdle || "\u2014";
        return;
      }
      var SR = !!(W.SpeechRecognition || W.webkitSpeechRecognition);
      if (!SR) {
        transcriptEl.textContent = copy.noSrUi || copy.noSr;
        return;
      }
      transcriptEl.textContent =
        micShouldRun && micRec && listeningAllowed
          ? copy.transcriptPrivacy || ""
          : copy.transcriptIdle || "";
    }

    function escPhrase(s) {
      var d = doc.createElement("div");
      d.textContent = s == null ? "" : String(s);
      return d.innerHTML;
    }

    function flushClockDelta() {
      if (!roundActive || clockPaused) return;
      var now = Date.now();
      remainingMs -= now - lastClockSample;
      lastClockSample = now;
    }

    function pauseClock() {
      flushClockDelta();
      clockPaused = true;
    }

    function resumeClock() {
      if (!roundActive) return;
      clockPaused = false;
      lastClockSample = Date.now();
    }

    function tickClock() {
      if (!roundActive) return;
      if (!clockPaused) {
        flushClockDelta();
        if (remainingMs <= 0) {
          remainingMs = 0;
          renderTimer();
          endRound(true);
        } else {
          renderTimer();
        }
      }
    }

    function renderTimer() {
      var sec = Math.max(0, Math.ceil(remainingMs / 1000));
      timerEl.textContent = String(sec);
    }

    function startClock() {
      clearInterval(clockInterval);
      remainingMs = ROUND_MS;
      clockPaused = false;
      lastClockSample = Date.now();
      clockInterval = setInterval(tickClock, 200);
      renderTimer();
    }

    function stopClock() {
      clearInterval(clockInterval);
      clockInterval = null;
      clockPaused = true;
    }

    function updateScoreLive() {
      scoreLiveEl.textContent = String(score);
    }

    function tryMatchSpeech() {
      if (!roundActive || !listeningAllowed || Date.now() < speechCooldownUntil) return;
      if (cardIndex < 0 || cardIndex >= deck.length) return;
      var hay = speech.buildHaystack(micBuffer, micInterimLive);
      if (!hay) return;
      if (speech.voiceBlitzSkipHeard(hay)) {
        speechCooldownUntil = Date.now() + 380;
        micBuffer = "";
        micInterimLive = "";
        skipCard();
        return;
      }
      if (speech.phraseMatchesVoiceBingo(deck[cardIndex].ans, hay)) {
        speechCooldownUntil = Date.now() + 400;
        micBuffer = "";
        micInterimLive = "";
        advanceCorrect();
      }
    }

    function advanceCorrect() {
      score++;
      updateScoreLive();
      revealThenNext(copy.correctLine);
    }

    function skipCard() {
      revealThenNext(copy.skipLine);
    }

    function revealThenNext(subLine) {
      pauseClock();
      pauseMicListening();
      var ans = deck[cardIndex].ans;
      stageMain.innerHTML =
        '<span class="em-answer">' + escPhrase(ans) + "</span>";
      if (stageSub) stageSub.textContent = subLine;

      W.setTimeout(function () {
        if (!roundActive) return;
        cardIndex++;
        if (cardIndex >= deck.length) refillDeck();
        if (!roundActive) return;
        if (cardIndex >= deck.length) {
          endRound(false);
          return;
        }
        resumeClock();
        speakCurrentHint();
      }, REVEAL_MS);
    }

    function refillDeck() {
      var rows = getLexRows(selectedThemeId()) || [];
      if (rows.length < MIN_DECK) {
        deck = [];
        endRound(false);
        return;
      }
      var pool = rows.slice();
      shuffleInPlace(pool);
      deck = pool;
      cardIndex = 0;
    }

    function speakCurrentHint() {
      if (!roundActive || cardIndex >= deck.length) return;
      pauseClock();
      pauseMicListening();
      cancelTts();

      stageMain.innerHTML =
        '<span class="em-listen-cue">' + escPhrase(copy.listenCue) + "</span>";
      if (stageSub) stageSub.textContent = copy.listenSub;

      var hint = deck[cardIndex].hint;
      var synth = W.speechSynthesis;
      if (!synth) {
        if (statusEl) statusEl.textContent = copy.noTts;
        resumeClock();
        listeningAllowed = true;
        startMic();
        return;
      }

      var u = new SpeechSynthesisUtterance(hint);
      applyVoiceToUtterance(u);
      u.onend = function () {
        if (!roundActive) return;
        resumeClock();
        listeningAllowed = true;
        startMic();
      };
      u.onerror = function () {
        if (!roundActive) return;
        resumeClock();
        listeningAllowed = true;
        startMic();
      };

      try {
        synth.speak(u);
      } catch (eSp) {
        resumeClock();
        listeningAllowed = true;
        startMic();
      }
      updateTranscript();
    }

    function bindMicHandlers(rec) {
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = speechLang;
      rec.onresult = function (ev) {
        if (!micShouldRun || !roundActive || !listeningAllowed) return;
        var ri;
        var newFinals = "";
        for (ri = ev.resultIndex; ri < ev.results.length; ri++) {
          if (ev.results[ri].isFinal) {
            newFinals += ev.results[ri][0].transcript + " ";
          }
        }
        micBuffer += newFinals;
        var interimSnap = "";
        for (ri = 0; ri < ev.results.length; ri++) {
          if (!ev.results[ri].isFinal) {
            interimSnap += ev.results[ri][0].transcript + " ";
          }
        }
        micInterimLive = interimSnap;
        if (micBuffer.length > 12000) micBuffer = micBuffer.slice(-7000);
        tryMatchSpeech();
      };
      rec.onerror = function (ev) {
        if (!micShouldRun) return;
        if (ev.error === "no-speech" || ev.error === "aborted") return;
        if (statusEl) statusEl.textContent = copy.noSr + " (" + String(ev.error || "?") + ")";
      };
      rec.onend = function () {
        if (!micShouldRun || !roundActive || !listeningAllowed) return;
        try {
          rec.start();
        } catch (eR) {}
      };
    }

    function startMic() {
      if (!roundActive || !listeningAllowed) return;
      var SR = W.SpeechRecognition || W.webkitSpeechRecognition;
      if (!SR) {
        if (statusEl) statusEl.textContent = copy.noSr;
        updateTranscript();
        return;
      }
      micShouldRun = true;
      if (statusEl) statusEl.textContent = copy.listening;

      if (!micRec) {
        micRec = new SR();
        bindMicHandlers(micRec);
      }

      try {
        micRec.start();
      } catch (eS) {
        try {
          if (micRec) micRec.abort();
        } catch (ea) {}
        micRec = null;
        try {
          micRec = new SR();
          bindMicHandlers(micRec);
          micRec.start();
        } catch (eRec) {
          micRec = null;
          if (statusEl) statusEl.textContent = copy.noSr;
        }
      }
      updateTranscript();
    }

    function idleUi() {
      stageMain.innerHTML =
        '<span class="em-idle">' + escPhrase(copy.idleMain) + "</span>";
      if (stageSub) stageSub.textContent = copy.idleSub;
      timerEl.textContent = String(Math.round(ROUND_MS / 1000));
      scoreLiveEl.textContent = "0";
      if (summaryEl) {
        summaryEl.textContent = "";
        summaryEl.hidden = true;
      }
      if (statusEl) statusEl.textContent = "";
      btnStart.disabled = false;
      updateTranscript();
    }

    function endRound(fromTimer) {
      if (!roundActive && !fromTimer) return;
      roundActive = false;
      listeningAllowed = false;
      stopClock();
      stopMic();
      cancelTts();
      speechCooldownUntil = 0;

      stageMain.innerHTML =
        '<span class="em-over">' + escPhrase(copy.timeUpMain) + "</span>";
      if (stageSub) stageSub.textContent = "";

      if (summaryEl) {
        summaryEl.hidden = false;
        summaryEl.textContent = copy.summaryTpl.replace("{score}", String(score));
      }
      if (statusEl && fromTimer) statusEl.textContent = "";

      btnStart.disabled = false;
      updateTranscript();
    }

    function beginRound() {
      var rows = getLexRows(selectedThemeId()) || [];
      if (rows.length < MIN_DECK) {
        W.alert(copy.needCards);
        return;
      }

      cancelTts();
      stopMic();
      stopClock();

      score = 0;
      speechCooldownUntil = 0;
      updateScoreLive();

      var pool = rows.slice();
      shuffleInPlace(pool);
      deck = pool;
      cardIndex = 0;

      roundActive = true;
      btnStart.disabled = true;
      if (summaryEl) summaryEl.hidden = true;

      if (stageSub) stageSub.textContent = copy.roundLiveSub;

      startClock();
      speakCurrentHint();
    }

    function tryTypedAnswer() {
      if (!roundActive || !listeningAllowed || !typeInput) return;
      if (cardIndex < 0 || cardIndex >= deck.length) return;
      var raw = typeInput.value;
      if (!String(raw || "").trim()) return;
      if (speech.voiceBlitzSkipHeard(raw)) {
        typeInput.value = "";
        if (statusEl) statusEl.textContent = "";
        skipCard();
        return;
      }
      if (speech.typedMatchesPhrase(raw, deck[cardIndex].ans)) {
        typeInput.value = "";
        if (statusEl) statusEl.textContent = "";
        advanceCorrect();
      } else if (statusEl) {
        statusEl.textContent = copy.typeWrong;
      }
    }

    function replayHint() {
      if (!roundActive || cardIndex >= deck.length || !listeningAllowed) return;
      speechCooldownUntil = Date.now() + 200;
      micBuffer = "";
      micInterimLive = "";
      speakCurrentHint();
    }

    btnStart.addEventListener("click", function () {
      if (roundActive) return;
      beginRound();
    });

    if (btnReplay) {
      btnReplay.addEventListener("click", function () {
        replayHint();
      });
    }

    if (btnSkip) {
      btnSkip.addEventListener("click", function () {
        if (!roundActive || !listeningAllowed) return;
        skipCard();
      });
    }

    if (btnCheck) {
      btnCheck.addEventListener("click", tryTypedAnswer);
    }
    if (typeInput) {
      typeInput.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") {
          ev.preventDefault();
          tryTypedAnswer();
        }
      });
    }

    if (voicePickSelect) {
      voicePickSelect.addEventListener("change", function () {
        try {
          if (W.sessionStorage) {
            W.sessionStorage.setItem(
              voicePickStorageKey,
              voicePickSelect.value || ""
            );
          }
        } catch (eCh) {}
      });
    }

    idleUi();
    refreshVoicePickUi();
    W.setTimeout(refreshVoicePickUi, 300);
  }

  W.PREP_ECHO_MINUTE = {
    mount: mount,
    shuffleInPlace: shuffleInPlace,
    /** Pick best English voice for Echo Minute heuristics (gender + neural). */
    pickVoiceForLangGender: function (synth, lang, gender) {
      return pickEchoMinuteVoice(synth, lang || "en-GB", gender === "male" ? "male" : "female");
    },
    voiceOptionToken: voiceOptionToken,
    findVoiceByPickerToken: findVoiceByPickerToken
  };
})(typeof window !== "undefined" ? window : globalThis);
