/**
 * Voice bingo: 3×3 grid; definition shown; phrase hidden until matched.
 * Voice (lenient fuzzy match), typed answer, or "I don't know" (reveal without score).
 *
 * Depends on: prep-retell-chain-speech-match.js (phraseMatchesVoiceBingo, typedMatchesPhrase)
 */
(function (W) {
  "use strict";

  var GRID = 9;

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

  function phraseSizeClass(text) {
    var len = String(text || "").replace(/\s+/g, " ").trim().length;
    if (len > 58) return " vb-cell-phrase--xs";
    if (len > 38) return " vb-cell-phrase--sm";
    if (len > 22) return " vb-cell-phrase--md";
    return "";
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
   *     grid: HTMLElement,
   *     clue: HTMLElement,
   *     progress?: HTMLElement | null,
   *     status?: HTMLElement | null,
   *     transcript?: HTMLElement | null,
   *     typeInput?: HTMLInputElement | null,
   *     btnCheck?: HTMLElement | null,
   *     btnDontKnow?: HTMLElement | null,
   *     btnNew: HTMLElement,
   *     winBanner?: HTMLElement | null
   *   },
   *   getLexRows: (themeId: string) => { ans: string, hint: string }[],
   *   themeDefinitions?: { id: string }[],
   *   radioName?: string,
   *   speech?: typeof PREP_RETELL_CHAIN_SPEECH,
   *   speechLang?: string,
   *   copy?: Record<string, string>
   * }} opts
   */
  function mount(opts) {
    var speech = opts.speech || W.PREP_RETELL_CHAIN_SPEECH;
    if (
      !speech ||
      typeof speech.phraseMatchesVoiceBingoPool !== "function" ||
      typeof speech.typedMatchesPhrase !== "function"
    ) {
      console.error(
        "PREP_VOICE_BINGO: load prep-retell-chain-speech-match.js (updated) before this file."
      );
      return null;
    }

    var doc = W.document;
    var els = opts.els || {};
    var grid = els.grid;
    var clueEl = els.clue;
    var progressEl = els.progress || null;
    var statusEl = els.status || null;
    var listeningEl = els.listening || null;
    var fileHintEl = els.fileHint || null;
    var transcriptEl = els.transcript || null;
    var typeInput = els.typeInput || null;
    var btnCheck = els.btnCheck || null;
    var btnDontKnow = els.btnDontKnow || null;
    var btnNew = els.btnNew;
    var winBanner = els.winBanner || null;
    var memeImgEl = els.memeImg || null;
    var memePhEl = els.memePlaceholder || null;
    var memeStripEl = els.memeStrip || null;
    var memeAsideEl =
      els.memeAside ||
      (memeStripEl && memeStripEl.closest(".vb-split-memes")) ||
      null;
    var layoutRoot =
      els.layoutRoot ||
      (memeAsideEl && memeAsideEl.closest(".vb-split")) ||
      (grid && grid.closest(".vb-split")) ||
      null;
    var fsRoot =
      els.fsRoot ||
      (grid && grid.closest(".lex-sb-fs-overlay")) ||
      null;
    var clueLabelEl = els.clueLabel || null;
    var speechLang = opts.speechLang || "en-GB";
    var radioName = opts.radioName || "bingoTheme";
    var bingoModeRadio = opts.bingoModeRadio || "bingoMode";
    var getLexRows = opts.getLexRows;
    var themeDefinitions = opts.themeDefinitions || [];

    if (!grid || !clueEl || !btnNew || typeof getLexRows !== "function") return null;

    var copy = mergeCopy(
      {
        needNine:
          "\u0412 \u044d\u0442\u043e\u0439 \u0442\u0435\u043c\u0435 \u043d\u0435\u0442 \u0444\u0440\u0430\u0437 \u2014 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044e \u0442\u0435\u043c\u0443 \u0438\u043b\u0438 \u00abAll word banks\u00bb.",
        pickThemeStart:
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 Word Bank \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430\u00bb. \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u0435\u0440\u0445\u0443 \u2014 \u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 (\u043d\u0435\u0441\u0442\u0440\u043e\u0433\u043e) \u0438\u043b\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0451 \u0441\u043d\u0438\u0437\u0443.",
        pickThemeStartMeme:
          "\u0420\u0435\u0436\u0438\u043c Meme line: \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0441\u043f\u0440\u0430\u0432\u0430 \u2192 \u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043c\u0435\u043c\u0430 \u0442\u043e\u0447\u044c-\u0432-\u0442\u043e\u0447\u044c (\u043a\u0430\u043a \u043d\u0430 \u043e\u0431\u0440\u0430\u0442\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438).",
        clueLabelParaphrase: "Definition",
        clueLabelMeme: "Meme",
        memeOnlyHint:
          "\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u2192 \u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043c\u0435\u043c\u0430 \u0442\u043e\u0447\u044c-\u0432-\u0442\u043e\u0447\u044c.",
        listening:
          "\u0421\u043b\u0443\u0448\u0430\u044e \u2026 \u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f (\u043d\u0435\u0441\u0442\u0440\u043e\u0433\u043e).",
        listeningMeme:
          "\u0421\u043b\u0443\u0448\u0430\u044e \u2026 \u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043c\u0435\u043c\u0430 \u0442\u043e\u0447\u044c-\u0432-\u0442\u043e\u0447\u044c.",
        heardOk: "Good job!",
        heardChecking:
          "\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u044e \u0444\u0440\u0430\u0437\u0443 \u2026",
        noSr:
          "\u041d\u0435\u0442 Web Speech \u2014 \u043f\u0438\u0448\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u0432 \u043f\u043e\u043b\u0435 \u0438\u043b\u0438 I don't know.",
        noSrUi:
          "\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u2014 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043d\u0438\u0436\u0435.",
        clueDone:
          "\u0412\u0441\u0435 9 \u0444\u0440\u0430\u0437 \u043e\u0442\u043a\u0440\u044b\u0442\u044b. \u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430 \u2014 \u00ab\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430\u00bb.",
        winLine:
          "\u0413\u043e\u0442\u043e\u0432\u043e! \u0412\u0441\u0435 \u0440\u0443\u0431\u0430\u0448\u043a\u0438 \u0441\u043d\u044f\u0442\u044b.",
        transcriptPrivacy: "",
        transcriptPrivacyIdle: "",
        transcriptPrivacyWin: "",
        typeWrong:
          "\u041d\u0435 \u0441\u043e\u0432\u043f\u0430\u043b\u043e \u2014 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438\u043b\u0438 \u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435."
      },
      opts.copy || {}
    );

    var micRec = null;
    var micShouldRun = false;
    var micBuffer = "";
    var micInterimLive = "";
    /** Ignore SR callbacks briefly after a voice hit — avoids double-match on same utterance */
    var speechCooldownUntil = 0;
    var speechSettleTimer = null;
    var micPausedForFeedback = false;
    var SPEECH_SETTLE_MS = 820;
    var GOOD_JOB_PAUSE_MS = 380;

    var score = 0;

    /** @type {{ ans: string, hint: string, revealed: boolean }[] | null} */
    var board = null;
    /** @type {number[] | null} */
    var askOrder = null;
    var askStep = 0;

    function setPlaying(active) {
      if (fsRoot) fsRoot.classList.toggle("lex-sb-fs--playing", !!active);
    }

    function syncFileHint() {
      if (!fileHintEl) return;
      var hint = protocolHint();
      if (!hint) {
        fileHintEl.hidden = true;
        return;
      }
      try {
        if (W.sessionStorage.getItem("prepVbFileHintDismissed") === "1") {
          fileHintEl.hidden = true;
          return;
        }
      } catch (eDismiss) {}
      var textNode =
        fileHintEl.querySelector(".vb-protocol-chip__text") || fileHintEl;
      textNode.textContent = hint;
      fileHintEl.hidden = false;
    }

    function hideFileHint() {
      if (fileHintEl) fileHintEl.hidden = true;
    }

    function themePreviewRows() {
      var rows = rowsForTheme(selectedThemeId()) || [];
      return rows.filter(function (r) {
        return (
          r &&
          r.img &&
          r.ans &&
          !/^PLACEHOLDER/i.test(String(r.ans))
        );
      });
    }

    function syncModeLayout() {
      syncClueLabel();
      var memeMode = isMemeMode();
      if (layoutRoot) {
        layoutRoot.classList.toggle("vb-mode-meme", memeMode);
        layoutRoot.classList.toggle("vb-mode-paraphrase", !memeMode);
      }
      if (memeAsideEl) {
        memeAsideEl.hidden = !memeMode;
        memeAsideEl.setAttribute("aria-hidden", memeMode ? "false" : "true");
      }
      if (clueLabelEl) clueLabelEl.hidden = memeMode;
      if (clueEl) clueEl.hidden = memeMode;
    }

    function pickNineRows(base) {
      var pool = base.slice();
      shuffleInPlace(pool);
      var pick = [];
      var seenAns = Object.create(null);
      var seenImg = Object.create(null);
      var pi;
      for (pi = 0; pi < pool.length && pick.length < GRID; pi++) {
        var row = pool[pi];
        var ans = String(row.ans || "").trim();
        var img = String(row.img || "").trim();
        if (!ans || seenAns[ans]) continue;
        if (img && seenImg[img]) continue;
        seenAns[ans] = true;
        if (img) seenImg[img] = true;
        pick.push(row);
      }
      for (pi = 0; pi < pool.length && pick.length < GRID; pi++) {
        var row2 = pool[pi];
        var ans2 = String(row2.ans || "").trim();
        if (!ans2 || seenAns[ans2]) continue;
        seenAns[ans2] = true;
        pick.push(row2);
      }
      /* Fewer than 9 unique phrases — duplicate random picks to fill 3×3 */
      if (pick.length && pick.length < GRID) {
        var dupSource = pick.slice();
        shuffleInPlace(dupSource);
        var dupIdx = 0;
        while (pick.length < GRID) {
          pick.push(dupSource[dupIdx % dupSource.length]);
          dupIdx++;
        }
      }
      shuffleInPlace(pick);
      return pick;
    }

    function updateMemeRail() {
      if (!isMemeMode()) {
        if (memeImgEl) memeImgEl.hidden = true;
        if (memeStripEl) memeStripEl.innerHTML = "";
        return;
      }
      if (memeStripEl) memeStripEl.innerHTML = "";
      if (!board) {
        if (memeImgEl) memeImgEl.hidden = true;
        if (memePhEl) {
          memePhEl.hidden = false;
          memePhEl.classList.add("vb-meme-hero-empty--show");
          var emptyIdle = memePhEl.querySelector(".vb-meme-hero-empty-text");
          if (emptyIdle) {
            emptyIdle.textContent = themePreviewRows().length
              ? "Нажмите «Новая игра» — по одному мему, вразброс."
              : "No meme images for this theme yet.";
          }
        }
        return;
      }
      var ai = activeCellIndex();
      showMemeForIndex(ai >= 0 ? ai : 0);
    }

    function showMemeForIndex(ix) {
      if (!board || ix < 0 || ix >= board.length) return;
      var cell = board[ix];
      if (cell && cell.img && memeImgEl) {
        memeImgEl.src = cell.img;
        memeImgEl.alt = cell.ans || "Meme hint";
        memeImgEl.hidden = false;
        if (memePhEl) {
          memePhEl.hidden = true;
          memePhEl.classList.remove("vb-meme-hero-empty--show");
        }
      } else {
        if (memeImgEl) memeImgEl.hidden = true;
        if (memePhEl) {
          memePhEl.hidden = false;
          memePhEl.classList.add("vb-meme-hero-empty--show");
          var emptyText = memePhEl.querySelector(".vb-meme-hero-empty-text");
          if (emptyText) {
            emptyText.textContent = cell
              ? "No meme image for this phrase yet."
              : "Meme hint";
          } else {
            memePhEl.textContent = cell
              ? "No meme image for this phrase yet."
              : "Meme hint";
          }
        }
      }
      if (memeStripEl) {
        memeStripEl.querySelectorAll(".vb-meme-thumb").forEach(function (btn) {
          btn.classList.toggle(
            "is-active",
            Number(btn.getAttribute("data-ix")) === ix
          );
        });
      }
    }

    function selectedThemeId() {
      var sel = doc.querySelector('input[name="' + radioName + '"]:checked');
      if (sel && sel.value) return sel.value;
      return themeDefinitions[0] ? themeDefinitions[0].id : "";
    }

    function selectedBingoMode() {
      var sel = doc.querySelector('input[name="' + bingoModeRadio + '"]:checked');
      return sel && sel.value === "meme" ? "meme" : "paraphrase";
    }

    function isMemeMode() {
      return selectedBingoMode() === "meme";
    }

    function rowsForTheme(themeId) {
      return getLexRows(themeId, selectedBingoMode()) || getLexRows(themeId) || [];
    }

    function syncClueLabel() {
      if (!clueLabelEl) return;
      clueLabelEl.textContent = isMemeMode()
        ? copy.clueLabelMeme || "Meme"
        : copy.clueLabelParaphrase || "Definition";
    }

    function resetIdleBoard() {
      stopMic();
      board = null;
      askOrder = null;
      askStep = 0;
      score = 0;
      if (winBanner) winBanner.hidden = true;
      if (statusEl) statusEl.textContent = "";
      syncListeningPill();
      if (typeInput) typeInput.value = "";
      syncModeLayout();
      clueEl.textContent = isMemeMode()
        ? copy.pickThemeStartMeme || copy.pickThemeStart
        : copy.pickThemeStart;
      renderGrid();
      updatePanel();
      updateMemeRail();
    }

    function clearSpeechSettleTimer() {
      if (speechSettleTimer) {
        clearTimeout(speechSettleTimer);
        speechSettleTimer = null;
      }
    }

    function playGoodJob(done) {
      done = done || function () {};
      var line = copy.heardOk || "Good job!";
      if (!W.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
        if (statusEl) statusEl.textContent = line;
        setTimeout(done, GOOD_JOB_PAUSE_MS + 400);
        return;
      }
      try {
        W.speechSynthesis.cancel();
      } catch (_eCancel) {}
      var u = new SpeechSynthesisUtterance(line);
      u.lang = speechLang;
      u.rate = 0.94;
      u.pitch = 1.05;
      var finished = false;
      function finish() {
        if (finished) return;
        finished = true;
        setTimeout(done, GOOD_JOB_PAUSE_MS);
      }
      u.onend = finish;
      u.onerror = finish;
      if (statusEl) statusEl.textContent = line;
      try {
        W.speechSynthesis.speak(u);
      } catch (_eSpeak) {
        finish();
      }
      setTimeout(finish, 2800);
    }

    function stopMic(keepFeedbackLock) {
      micShouldRun = false;
      micBuffer = "";
      micInterimLive = "";
      clearSpeechSettleTimer();
      if (!keepFeedbackLock) micPausedForFeedback = false;
      if (micRec) {
        try {
          micRec.stop();
        } catch (e0) {}
        micRec = null;
      }
      syncListeningPill();
      updateTranscript();
    }

    function syncListeningPill() {
      var line = isMemeMode() ? copy.listeningMeme : copy.listening;
      var active =
        !!(board && askStep < GRID && micShouldRun && micRec);
      if (listeningEl) {
        if (!active) {
          listeningEl.hidden = true;
          listeningEl.textContent = "";
        } else {
          listeningEl.hidden = false;
          listeningEl.textContent = line;
        }
        return;
      }
      if (statusEl && active) statusEl.textContent = line;
    }

    function updateTranscript() {
      if (!transcriptEl) return;
      transcriptEl.classList.remove("vb-transcript--live");
      if (!board || askStep >= GRID) {
        transcriptEl.textContent = "";
        transcriptEl.hidden = true;
        return;
      }
      var SR = !!(W.SpeechRecognition || W.webkitSpeechRecognition);
      if (!SR) {
        transcriptEl.textContent = copy.noSrUi || copy.noSr;
        transcriptEl.hidden = false;
        return;
      }
      /* Never mirror live SR text — match stays in micBuffer only (privacy). */
      transcriptEl.textContent = micShouldRun && micRec ? copy.transcriptPrivacy || "" : "";
      transcriptEl.hidden = true;
      syncListeningPill();
    }

    function activeCellMatchesHay(hay, forVoice) {
      if (!board) return false;
      var ai = activeCellIndex();
      if (ai < 0 || !board[ai] || board[ai].revealed) return false;
      var targets = cellMatchTargets(board[ai]);
      var ti;
      for (ti = 0; ti < targets.length; ti++) {
        if (forVoice) {
          if (speech.phraseMatchesVoiceBingo(targets[ti], hay)) return true;
        } else if (speech.phraseMatchesVoiceBingoPool(targets[ti], hay)) {
          return true;
        }
      }
      return false;
    }

    function scheduleSpeechMatch() {
      clearSpeechSettleTimer();
      speechSettleTimer = setTimeout(function () {
        speechSettleTimer = null;
        tryMatchSpeechFinal();
      }, SPEECH_SETTLE_MS);
    }

    function tryMatchSpeechFinal() {
      if (Date.now() < speechCooldownUntil) return;
      if (micPausedForFeedback || !micShouldRun) return;
      if (!board || askStep >= GRID) return;
      var hay = speech.normalizeSpeech
        ? speech.normalizeSpeech(micBuffer)
        : String(micBuffer || "").toLowerCase();
      if (!hay || hay.length < 3) return;
      if (statusEl) statusEl.textContent = copy.heardChecking || "";
      if (!activeCellMatchesHay(hay, true)) {
        if (statusEl) statusEl.textContent = "";
        micBuffer = "";
        syncListeningPill();
        return;
      }
      var ai = activeCellIndex();
      if (ai < 0) return;
      acceptVoiceHit(ai);
    }

    function bindMicHandlers(rec) {
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = speechLang;

      rec.onresult = function (ev) {
        if (!micShouldRun || micPausedForFeedback || !board || askStep >= GRID) return;
        if (Date.now() < speechCooldownUntil) return;
        var ri;
        var newFinals = "";
        for (ri = ev.resultIndex; ri < ev.results.length; ri++) {
          if (ev.results[ri].isFinal) {
            newFinals += ev.results[ri][0].transcript + " ";
          }
        }
        var interimSnap = "";
        for (ri = 0; ri < ev.results.length; ri++) {
          if (!ev.results[ri].isFinal) {
            interimSnap += ev.results[ri][0].transcript + " ";
          }
        }
        micInterimLive = interimSnap;
        if (newFinals) {
          micBuffer += newFinals;
          if (micBuffer.length > 12000) micBuffer = micBuffer.slice(-7000);
          scheduleSpeechMatch();
        }
      };

      rec.onerror = function (ev) {
        if (!micShouldRun) return;
        if (ev.error === "no-speech" || ev.error === "aborted") return;
        if (statusEl) statusEl.textContent = copy.noSr + " (" + String(ev.error || "?") + ")";
      };

      rec.onend = function () {
        if (!micShouldRun || !board || askStep >= GRID) return;
        try {
          rec.start();
        } catch (eR) {}
      };
    }

    function protocolHint() {
      return W.PREP_MIC_DEVICE_PICKER && typeof W.PREP_MIC_DEVICE_PICKER.protocolHint === "function"
        ? W.PREP_MIC_DEVICE_PICKER.protocolHint()
        : W.location && W.location.protocol === "file:"
          ? "Микрофон при открытии файла двойным щелчком (file://) браузер спрашивает каждый раз. Запустите OPEN-FCE.bat или npm run dev и откройте http://localhost:5173/…"
          : "";
    }

    function acceptVoiceHit(bi) {
      if (micPausedForFeedback || bi < 0 || !board || !board[bi] || board[bi].revealed) {
        return;
      }
      micPausedForFeedback = true;
      clearSpeechSettleTimer();
      speechCooldownUntil = Date.now() + 3200;
      micBuffer = "";
      micInterimLive = "";
      updateTranscript();
      playGoodJob(function () {
        revealCellAt(bi, true, true);
        micPausedForFeedback = false;
        if (statusEl && board && askStep < GRID) statusEl.textContent = "";
        syncListeningPill();
        updateTranscript();
      });
    }

    function escPhrase(s) {
      var d = doc.createElement("div");
      d.textContent = s == null ? "" : String(s);
      return d.innerHTML;
    }

    function activeCellIndex() {
      if (!board || !askOrder || askStep >= askOrder.length) return -1;
      return askOrder[askStep];
    }

    function cellMatchTargets(cell) {
      var out = [];
      var m = String((cell && cell.match) || "").trim();
      var a = String((cell && cell.ans) || "").trim();
      if (m) out.push(m);
      if (a && a !== m) out.push(a);
      return out;
    }

    function cellMatchesInput(rawOrHay, cell, forVoice) {
      var targets = cellMatchTargets(cell);
      var ti;
      for (ti = 0; ti < targets.length; ti++) {
        if (forVoice) {
          if (speech.phraseMatchesVoiceBingo(targets[ti], rawOrHay)) return true;
        } else if (speech.phraseMatchesVoiceBingoPool(targets[ti], rawOrHay)) {
          return true;
        }
      }
      return false;
    }

    function findMatchingCellIndex(rawOrHay, activeOnly) {
      if (!board) return -1;
      if (activeOnly !== false) {
        var ai = activeCellIndex();
        if (ai < 0 || !board[ai] || board[ai].revealed) return -1;
        return cellMatchesInput(rawOrHay, board[ai], false) ? ai : -1;
      }
      var order = [];
      var i;
      var ai2 = activeCellIndex();
      if (ai2 >= 0) order.push(ai2);
      for (i = 0; i < board.length; i++) {
        if (i !== ai2) order.push(i);
      }
      for (i = 0; i < order.length; i++) {
        var bi = order[i];
        if (!board[bi] || board[bi].revealed) continue;
        if (cellMatchesInput(rawOrHay, board[bi], false)) return bi;
      }
      return -1;
    }

    /**
     * @param {boolean} earnPoint voice / typed success; false = I don't know
     * @param {boolean} [fromSpeech] brief cooldown ignores duplicate SR callbacks after a voice hit
     */
    function revealCellAt(bi, earnPoint, fromSpeech) {
      if (bi < 0 || !board || !board[bi] || board[bi].revealed) return;
      var wasActive = bi === activeCellIndex();
      board[bi].revealed = true;
      if (earnPoint) score++;
      micBuffer = "";
      micInterimLive = "";
      if (typeInput) typeInput.value = "";
      updateTranscript();
      if (wasActive) askStep++;
      renderGrid();
      updatePanel();
      if (statusEl && earnPoint) statusEl.textContent = "";
      if (askStep >= GRID) {
        stopMic();
        if (winBanner) {
          winBanner.hidden = false;
          winBanner.textContent =
            copy.winLine +
            " \u041e\u0447\u043a\u0438: " +
            score +
            " / " +
            GRID +
            ".";
        }
      } else if (earnPoint && fromSpeech) {
        speechCooldownUntil = Date.now() + 500;
      }
    }

    function revealActiveCell(earnPoint, fromSpeech) {
      revealCellAt(activeCellIndex(), earnPoint, fromSpeech);
    }

    function renderGrid() {
      grid.innerHTML = "";
      var i;
      if (!board) {
        for (i = 0; i < GRID; i++) {
          var idle = doc.createElement("div");
          idle.className = "vb-cell vb-cell--back vb-cell--idle";
          idle.innerHTML = '<span class="vb-cell-back" aria-hidden="true">\u2753</span>';
          grid.appendChild(idle);
        }
        return;
      }
      for (i = 0; i < GRID; i++) {
        var item = board[i];
        var el = doc.createElement("div");
        el.className =
          "vb-cell" + (item.revealed ? " vb-cell--open" : " vb-cell--back");
        el.setAttribute("role", "presentation");
        if (item.revealed) {
          var phraseCls =
            "vb-cell-phrase" +
            phraseSizeClass(item.ans) +
            (item.bingoMode === "meme" ? " vb-cell-phrase--line" : "");
          el.innerHTML =
            '<span class="' + phraseCls + '">' + escPhrase(item.ans) + "</span>";
        } else {
          el.innerHTML =
            '<span class="vb-cell-back" aria-hidden="true">\u2753</span>';
        }
        grid.appendChild(el);
      }
    }

    function revealedCount() {
      if (!board) return 0;
      var n = 0;
      var i;
      for (i = 0; i < board.length; i++) {
        if (board[i].revealed) n++;
      }
      return n;
    }

    function updatePanel() {
      syncModeLayout();
      if (!board || !askOrder) {
        if (progressEl) progressEl.textContent = "";
        if (winBanner) winBanner.hidden = true;
        updateTranscript();
        updateMemeRail();
        return;
      }
      if (askStep >= GRID) {
        if (!isMemeMode()) clueEl.textContent = copy.clueDone;
        if (progressEl) {
          progressEl.textContent =
            GRID + " / " + GRID + " · Score " + score + " / " + GRID;
        }
        updateTranscript();
        updateMemeRail();
        return;
      }
      var ai = askOrder[askStep];
      if (!isMemeMode()) {
        clueEl.textContent = board[ai].hint;
      }
      if (progressEl) {
        progressEl.textContent =
          revealedCount() + " / " + GRID + " · Score " + score + " / " + GRID;
      }
      if (winBanner) winBanner.hidden = true;
      updateTranscript();
      updateMemeRail();
    }

    function tryTypedAnswer() {
      if (!typeInput || !board || askStep >= GRID) return;
      var raw = typeInput.value;
      if (!String(raw || "").trim()) return;
      var ai = activeCellIndex();
      if (ai < 0 || !board[ai] || board[ai].revealed) return;
      var targets = cellMatchTargets(board[ai]);
      var ti;
      for (ti = 0; ti < targets.length; ti++) {
        if (speech.typedMatchesPhrase(raw, targets[ti])) {
          if (statusEl) statusEl.textContent = "";
          revealCellAt(ai, true, false);
          return;
        }
      }
      if (statusEl) statusEl.textContent = copy.typeWrong;
    }

    function startMicInner() {
      if (!board || askStep >= GRID) return;
      var SR = W.SpeechRecognition || W.webkitSpeechRecognition;
      if (!SR) {
        if (statusEl) statusEl.textContent = copy.noSr;
        updateTranscript();
        return;
      }
      micShouldRun = true;
      if (!micRec) {
        micRec = new SR();
        bindMicHandlers(micRec);
      }
      if (statusEl) statusEl.textContent = "";
      syncListeningPill();
      try {
        micRec.start();
      } catch (eS) {
        try {
          if (micRec) micRec.abort();
        } catch (eAbort) {}
        micRec = null;
        try {
          micRec = new SR();
          bindMicHandlers(micRec);
          micRec.start();
        } catch (eRetry) {
          micRec = null;
          if (statusEl) statusEl.textContent = copy.noSr;
        }
      }
      updateTranscript();
    }

    function startMic() {
      if (!board || askStep >= GRID) return;
      startMicInner();
    }

    function newGame() {
      stopMic();
      hideFileHint();
      setPlaying(true);
      speechCooldownUntil = 0;
      micPausedForFeedback = false;
      clearSpeechSettleTimer();
      score = 0;
      if (statusEl) statusEl.textContent = "";
      if (typeInput) typeInput.value = "";
      if (winBanner) winBanner.hidden = true;

      var rows = rowsForTheme(selectedThemeId()) || [];
      var base = rows.filter(function (r) {
        return r.ans && !/^PLACEHOLDER/i.test(String(r.ans));
      });
      if (!base.length) {
        W.alert(copy.needNine);
        return;
      }
      var pick = pickNineRows(base);
      if (!pick.length || pick.length < GRID) {
        W.alert(copy.needNine);
        return;
      }
      board = [];
      var pi;
      for (pi = 0; pi < pick.length; pi++) {
        board.push({
          ans: pick[pi].ans,
          match: pick[pi].match || pick[pi].ans,
          hint: pick[pi].hint,
          headword: pick[pi].headword || "",
          img: String(pick[pi].img || "").trim(),
          bingoMode: pick[pi].bingoMode || selectedBingoMode(),
          revealed: false
        });
      }
      askOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      shuffleInPlace(askOrder);
      askStep = 0;
      renderGrid();
      updatePanel();
      startMic();
    }

    syncModeLayout();
    clueEl.textContent = copy.pickThemeStart;
    renderGrid();
    updateTranscript();
    updateMemeRail();
    syncFileHint();
    setPlaying(false);

    btnNew.addEventListener("click", newGame);

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
    if (btnDontKnow) {
      btnDontKnow.addEventListener("click", function () {
        if (!board || askStep >= GRID) return;
        revealActiveCell(false, false);
        if (statusEl) statusEl.textContent = "";
      });
    }

    doc.querySelectorAll('input[name="' + radioName + '"]').forEach(function (inp) {
      inp.addEventListener("change", function () {
        if (!board) updateMemeRail();
        else resetIdleBoard();
        if (typeof opts.onThemeOrModeChange === "function") {
          opts.onThemeOrModeChange();
        }
      });
    });

    doc.querySelectorAll('input[name="' + bingoModeRadio + '"]').forEach(function (inp) {
      inp.addEventListener("change", function () {
        syncModeLayout();
        resetIdleBoard();
        if (typeof opts.onThemeOrModeChange === "function") {
          opts.onThemeOrModeChange();
        }
      });
    });

    return { stop: stopMic };
  }

  W.PREP_VOICE_BINGO = {
    mount: mount,
    shuffleInPlace: shuffleInPlace
  };
})(typeof window !== "undefined" ? window : globalThis);
