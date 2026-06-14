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
      typeof speech.phraseMatchesVoiceBingo !== "function" ||
      typeof speech.typedMatchesPhrase !== "function"
    ) {
      console.error(
        "PREP_VOICE_BINGO: load prep-retell-chain-speech-match.js (updated) before this file."
      );
      return;
    }

    var doc = W.document;
    var els = opts.els || {};
    var grid = els.grid;
    var clueEl = els.clue;
    var progressEl = els.progress || null;
    var statusEl = els.status || null;
    var transcriptEl = els.transcript || null;
    var typeInput = els.typeInput || null;
    var btnCheck = els.btnCheck || null;
    var btnDontKnow = els.btnDontKnow || null;
    var btnNew = els.btnNew;
    var winBanner = els.winBanner || null;
    var speechLang = opts.speechLang || "en-GB";
    var radioName = opts.radioName || "bingoTheme";
    var getLexRows = opts.getLexRows;
    var themeDefinitions = opts.themeDefinitions || [];

    if (!grid || !clueEl || !btnNew || typeof getLexRows !== "function") return;

    var copy = mergeCopy(
      {
        needNine:
          "\u0412 \u044d\u0442\u043e\u0439 \u0442\u0435\u043c\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 9 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u0440\u0430\u0437 \u2014 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044e \u0442\u0435\u043c\u0443 \u0438\u043b\u0438 \u00abAll word banks\u00bb.",
        pickThemeStart:
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 Word Bank \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430\u00bb. \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u0435\u0440\u0445\u0443 \u2014 \u043f\u0440\u043e\u0438\u0437\u043d\u0435\u0441\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 (\u043d\u0435\u0441\u0442\u0440\u043e\u0433\u043e) \u0438\u043b\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0451 \u0441\u043d\u0438\u0437\u0443.",
        listening:
          "\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u0432\u043a\u043b\u044e\u0447\u0451\u043d (Chrome / Edge, EN). \u0422\u0440\u0430\u043d\u0441\u043a\u0440\u0438\u043f\u0442 \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f.",
        noSr:
          "\u041d\u0435\u0442 Web Speech \u2014 \u043f\u0438\u0448\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u0432 \u043f\u043e\u043b\u0435 \u0438\u043b\u0438 I don't know.",
        noSrUi:
          "\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u2014 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043d\u0438\u0436\u0435.",
        clueDone:
          "\u0412\u0441\u0435 9 \u0444\u0440\u0430\u0437 \u043e\u0442\u043a\u0440\u044b\u0442\u044b. \u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430 \u2014 \u00ab\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430\u00bb.",
        winLine:
          "\u0413\u043e\u0442\u043e\u0432\u043e! \u0412\u0441\u0435 \u0440\u0443\u0431\u0430\u0448\u043a\u0438 \u0441\u043d\u044f\u0442\u044b.",
        transcriptPrivacy:
          "\u0422\u0440\u0430\u043d\u0441\u043a\u0440\u0438\u043f\u0442 \u0441\u043a\u0440\u044b\u0442 \u2014 \u043f\u0440\u043e\u0438\u0437\u043d\u043e\u0441\u0438\u0442\u0435 \u0444\u0440\u0430\u0437\u0443 \u043f\u043e-\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438; \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0432 \u0444\u043e\u043d\u0435.",
        transcriptPrivacyIdle:
          "\u041f\u043e\u0441\u043b\u0435 \u00ab\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430\u00bb \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u0441\u043b\u0443\u0448\u0430\u0435\u0442 \u0431\u0435\u0437 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430.",
        transcriptPrivacyWin:
          "\u2014",
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

    var score = 0;

    /** @type {{ ans: string, hint: string, revealed: boolean }[] | null} */
    var board = null;
    /** @type {number[] | null} */
    var askOrder = null;
    var askStep = 0;

    function selectedThemeId() {
      var sel = doc.querySelector('input[name="' + radioName + '"]:checked');
      if (sel && sel.value) return sel.value;
      return themeDefinitions[0] ? themeDefinitions[0].id : "";
    }

    function stopMic() {
      micShouldRun = false;
      micBuffer = "";
      micInterimLive = "";
      if (micRec) {
        try {
          micRec.stop();
        } catch (e0) {}
        micRec = null;
      }
      updateTranscript();
    }

    function updateTranscript() {
      if (!transcriptEl) return;
      if (!board || askStep >= GRID) {
        transcriptEl.textContent =
          board && askStep >= GRID
            ? copy.transcriptPrivacyWin || "\u2014"
            : copy.transcriptPrivacyIdle || "\u2014";
        return;
      }
      var SR = !!(W.SpeechRecognition || W.webkitSpeechRecognition);
      if (!SR) {
        transcriptEl.textContent = copy.noSrUi || copy.noSr;
        return;
      }
      transcriptEl.textContent =
        micShouldRun && micRec
          ? copy.transcriptPrivacy || ""
          : copy.transcriptPrivacyIdle || "";
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

    function tryMatchSpeech() {
      if (Date.now() < speechCooldownUntil) return;
      var ai = activeCellIndex();
      if (ai < 0 || !board) return;
      var cell = board[ai];
      if (!cell || cell.revealed) return;
      var hay = speech.buildHaystack(micBuffer, micInterimLive);
      if (!hay) return;
      if (speech.phraseMatchesVoiceBingo(cell.ans, hay)) {
        revealActiveCell(true, true);
      }
    }

    /**
     * @param {boolean} earnPoint voice / typed success; false = I don't know
     * @param {boolean} [fromSpeech] brief cooldown ignores duplicate SR callbacks after a voice hit
     */
    function revealActiveCell(earnPoint, fromSpeech) {
      var ai = activeCellIndex();
      if (ai < 0 || !board || board[ai].revealed) return;
      board[ai].revealed = true;
      if (earnPoint) score++;
      micBuffer = "";
      micInterimLive = "";
      if (typeInput) typeInput.value = "";
      updateTranscript();
      askStep++;
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
        speechCooldownUntil = Date.now() + 400;
      }
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
          el.innerHTML =
            '<span class="vb-cell-phrase">' + escPhrase(item.ans) + "</span>";
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
      if (!board || !askOrder) {
        clueEl.textContent = "\u2014";
        if (progressEl) progressEl.textContent = "";
        if (winBanner) winBanner.hidden = true;
        updateTranscript();
        return;
      }
      if (askStep >= GRID) {
        clueEl.textContent = copy.clueDone;
        if (progressEl) {
          progressEl.textContent =
            GRID +
            " / " +
            GRID +
            " \u00b7 \u041e\u0447\u043a\u0438: " +
            score +
            " / " +
            GRID;
        }
        updateTranscript();
        return;
      }
      var ai = askOrder[askStep];
      clueEl.textContent = board[ai].hint;
      if (progressEl) {
        progressEl.textContent =
          revealedCount() +
          " / " +
          GRID +
          " \u00b7 \u041e\u0447\u043a\u0438: " +
          score +
          " / " +
          GRID;
      }
      if (winBanner) winBanner.hidden = true;
      updateTranscript();
    }

    function tryTypedAnswer() {
      if (!typeInput || !board || askStep >= GRID) return;
      var ai = activeCellIndex();
      if (ai < 0) return;
      var raw = typeInput.value;
      if (!String(raw || "").trim()) return;
      if (speech.typedMatchesPhrase(raw, board[ai].ans)) {
        if (statusEl) statusEl.textContent = "";
        revealActiveCell(true, false);
      } else if (statusEl) {
        statusEl.textContent = copy.typeWrong;
      }
    }

    function startMic() {
      stopMic();
      if (!board || askStep >= GRID) return;
      var SR = W.SpeechRecognition || W.webkitSpeechRecognition;
      if (!SR) {
        if (statusEl) statusEl.textContent = copy.noSr;
        updateTranscript();
        return;
      }
      if (statusEl) statusEl.textContent = copy.listening;
      micShouldRun = true;
      micRec = new SR();
      micRec.continuous = true;
      micRec.interimResults = true;
      micRec.lang = speechLang;

      micRec.onresult = function (ev) {
        if (!micShouldRun || !board || askStep >= GRID) return;
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

      micRec.onerror = function (ev) {
        if (!micShouldRun) return;
        if (ev.error === "no-speech" || ev.error === "aborted") return;
        if (statusEl) statusEl.textContent = copy.noSr + " (" + String(ev.error || "?") + ")";
      };

      micRec.onend = function () {
        if (!micShouldRun || !board || askStep >= GRID) return;
        try {
          micRec.start();
        } catch (eR) {}
      };

      try {
        micRec.start();
      } catch (eS) {
        if (statusEl) statusEl.textContent = copy.noSr;
      }
      updateTranscript();
    }

    function newGame() {
      stopMic();
      speechCooldownUntil = 0;
      score = 0;
      if (statusEl) statusEl.textContent = "";
      if (typeInput) typeInput.value = "";
      if (winBanner) winBanner.hidden = true;

      var rows = getLexRows(selectedThemeId()) || [];
      if (rows.length < GRID) {
        W.alert(copy.needNine);
        return;
      }
      var pool = rows.slice();
      shuffleInPlace(pool);
      var pick = pool.slice(0, GRID);
      shuffleInPlace(pick);
      board = [];
      var pi;
      for (pi = 0; pi < pick.length; pi++) {
        board.push({
          ans: pick[pi].ans,
          hint: pick[pi].hint,
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

    clueEl.textContent = copy.pickThemeStart;
    renderGrid();
    updateTranscript();

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
  }

  W.PREP_VOICE_BINGO = {
    mount: mount,
    shuffleInPlace: shuffleInPlace
  };
})(typeof window !== "undefined" ? window : globalThis);
