/**
 * Timed Retell chain drill — UI controller only.
 *
 * Modules:
 *   prep-retell-chain-kit.js           — escHtml, lexical chips from transcript
 *   prep-retell-chain-speech-match.js  — normalize + fuzzy phrase vs transcript
 *   prep-retell-chain-timed-copy.js    — default RU strings (override via opts.copy)
 *
 * Content (per unit): *-retell-chain-sources.js exporting SOURCES + getSegments factories.
 *
 * @param {{
 *   kit?: typeof PREP_RETELL_CHAIN_KIT,
 *   speech?: typeof PREP_RETELL_CHAIN_SPEECH,
 *   getSegments: () => Array<{ key: string, sumTitle?: string, transcript?: string, chipRows?: object[], maxChips?: number }>,
 *   els: Record<string, HTMLElement | null>,
 *   copy?: Partial<typeof PREP_RETELL_CHAIN_TIMED_DEFAULT_COPY>,
 *   speechLang?: string
 * }} opts
 */
(function (W) {
  "use strict";

  function mergeTimedCopy(base, extra) {
    var out = {};
    var k;
    for (k in base) {
      if (Object.prototype.hasOwnProperty.call(base, k)) out[k] = base[k];
    }
    for (k in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, k)) out[k] = extra[k];
    }
    return out;
  }

  /**
   * @param {{
   *   kit?: typeof PREP_RETELL_CHAIN_KIT,
   *   speech?: typeof PREP_RETELL_CHAIN_SPEECH,
   *   getSegments: () => Array<{ key: string, sumTitle?: string, transcript?: string, chipRows?: object[], maxChips?: number }>,
   *   els: Record<string, HTMLElement | null>,
   *   copy?: Partial<typeof PREP_RETELL_CHAIN_TIMED_DEFAULT_COPY>,
   *   speechLang?: string
   * }} opts
   */
  function mount(opts) {
    var kit = opts.kit || W.PREP_RETELL_CHAIN_KIT;
    var speech = opts.speech || W.PREP_RETELL_CHAIN_SPEECH;
    var getSegments = opts.getSegments;
    var els = opts.els || {};
    var speechLang = opts.speechLang || "en-GB";

    if (!kit || typeof getSegments !== "function") return;
    if (!speech || typeof speech.buildHaystack !== "function") {
      console.error(
        "PREP_RETELL_CHAIN_TIMED: load prep-retell-chain-speech-match.js before prep-retell-chain-timed-engine.js"
      );
      return;
    }

    var copy = mergeTimedCopy(
      W.PREP_RETELL_CHAIN_TIMED_DEFAULT_COPY || {},
      opts.copy || {}
    );

    var backdrop = els.backdrop;
    var openBtn = els.openBtn;
    if (!backdrop || !openBtn) return;

    var configView = els.configView;
    var runView = els.runView;
    var congratsView = els.congratsView;
    var selRead = els.selRead;
    var selPhrase = els.selPhrase;
    var selRetell = els.selRetell;
    var chainCheck = els.chainCheck;
    var btnStart = els.btnStart;
    var btnResetCfg = els.btnResetCfg;
    var btnExit = els.btnExit;
    var btnSkip = els.btnSkip;
    var btnCongratsClose = els.btnCongratsClose;

    var stageTitle = els.stageTitle;
    var stageTimer = els.stageTimer;
    var stageHint = els.stageHint;
    var segmentBadge = els.segmentBadge;
    var paneFull = els.paneFull;
    var panePhrases = els.panePhrases;
    var paneRetell = els.paneRetell;
    var selMarkMode = els.selMarkMode;
    var phraseProgress = els.phraseProgress;
    var micHintEl = els.micHint;

    if (micHintEl && copy.micHintHtml != null) {
      micHintEl.innerHTML = copy.micHintHtml;
    }

    var tickId = 0;
    var segments = [];
    var segIndex = 0;
    /** @type {'read'|'phrases'|'retell'} */
    var phase = "read";
    var phaseEndsAt = 0;
    /** @type {'manual'|'mic'} */
    var markMode = "manual";
    var micRec = null;
    var micShouldRun = false;
    var micBuffer = "";
    var micInterimLive = "";
    /** @type {string[]} */
    var retellPhraseList = [];

    function fillSelect(sel, values, defVal) {
      if (!sel) return;
      var suf = copy.secOptionSuffix != null ? String(copy.secOptionSuffix) : " с";
      var html = "";
      var i;
      for (i = 0; i < values.length; i++) {
        var v = values[i];
        var selAttr = v === defVal ? " selected" : "";
        html +=
          '<option value="' +
          v +
          '"' +
          selAttr +
          ">" +
          esc(String(v) + suf) +
          "</option>";
      }
      sel.innerHTML = html;
    }

    fillSelect(selRead, [30, 45, 60, 90, 120], 60);
    fillSelect(selPhrase, [10, 15, 20, 30, 45, 60], 20);
    fillSelect(selRetell, [45, 60, 90, 120, 180], 90);

    if (chainCheck) chainCheck.checked = true;

    if (selMarkMode && micHintEl) {
      function syncMicHint() {
        micHintEl.hidden = selMarkMode.value !== "mic";
      }
      selMarkMode.addEventListener("change", syncMicHint);
      syncMicHint();
    }

    function esc(s) {
      return kit.escHtml(s);
    }

    function stopPhraseMic() {
      micShouldRun = false;
      if (micRec) {
        try {
          micRec.stop();
        } catch (e0) {}
        micRec = null;
      }
      micBuffer = "";
      micInterimLive = "";
    }

    function matchMicToChips() {
      if (!paneRetell || phase !== "retell" || markMode !== "mic") return;
      var hay = speech.buildHaystack(micBuffer, micInterimLive);
      if (!hay) return;
      var i;
      for (i = 0; i < retellPhraseList.length; i++) {
        var ph = retellPhraseList[i];
        if (!speech.phraseHeardInHaystack(ph, hay)) continue;
        var chip = paneRetell.querySelector('[data-phrase-idx="' + i + '"]');
        if (chip) {
          chip.classList.add("retell-lex-chip--heard");
          chip.setAttribute("aria-pressed", "true");
        }
      }
      updatePhraseProgress();
    }

    function startPhraseMic() {
      stopPhraseMic();
      if (markMode !== "mic" || phase !== "retell") return;
      var SR = W.SpeechRecognition || W.webkitSpeechRecognition;
      if (!SR) {
        updatePhraseProgress();
        return;
      }
      micShouldRun = true;
      micRec = new SR();
      micRec.continuous = true;
      micRec.interimResults = true;
      micRec.lang = speechLang;

      micRec.onresult = function (ev) {
        if (!micShouldRun || phase !== "retell" || markMode !== "mic") return;
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
        matchMicToChips();
      };

      micRec.onerror = function (ev) {
        if (!micShouldRun) return;
        if (ev.error === "no-speech" || ev.error === "aborted") return;
        if (phraseProgress && phase === "retell" && typeof copy.fmtMicError === "function") {
          phraseProgress.textContent = copy.fmtMicError(ev.error);
        }
      };

      micRec.onend = function () {
        if (!micShouldRun || phase !== "retell" || markMode !== "mic" || backdrop.hidden) return;
        try {
          micRec.start();
        } catch (eR) {}
      };

      try {
        micRec.start();
      } catch (eS) {
        updatePhraseProgress();
      }
    }

    function updatePhraseProgress() {
      if (!phraseProgress || !paneRetell) return;
      if (phase !== "retell") {
        phraseProgress.hidden = true;
        return;
      }
      var chips = paneRetell.querySelectorAll(".retell-lex-chip");
      if (!chips.length) {
        phraseProgress.hidden = true;
        return;
      }
      phraseProgress.hidden = false;
      var heard = paneRetell.querySelectorAll(".retell-lex-chip--heard").length;
      var total = chips.length;
      var SRok = !!(W.SpeechRecognition || W.webkitSpeechRecognition);
      var variant = markMode === "mic" && !SRok ? "noSr" : markMode === "mic" ? "mic" : "manual";
      if (typeof copy.fmtPhraseProgressLine === "function") {
        phraseProgress.textContent = copy.fmtPhraseProgressLine({
          heard: heard,
          total: total,
          variant: variant
        });
      }
    }

    function showBackdrop(show) {
      backdrop.hidden = !show;
      backdrop.setAttribute("aria-hidden", show ? "false" : "true");
      if (show) openBtn.setAttribute("aria-expanded", "true");
      else openBtn.setAttribute("aria-expanded", "false");
    }

    function showOnlyView(which) {
      if (configView) configView.hidden = which !== "config";
      if (runView) runView.hidden = which !== "run";
      if (congratsView) congratsView.hidden = which !== "congrats";
    }

    function keywordsForSegment(seg) {
      var rows = seg.chipRows || [];
      return kit.allChipsFromParagraph(seg.transcript || "", rows);
    }

    function hintMapForSegment(seg) {
      var map = {};
      var rows = seg.chipRows || [];
      var transcript = seg.transcript || "";
      var ri;
      for (ri = 0; ri < rows.length; ri++) {
        var ans = String(rows[ri].ans != null ? rows[ri].ans : "").trim();
        var hint = String(rows[ri].hint != null ? rows[ri].hint : "").trim();
        if (!ans || transcript.indexOf(ans) === -1) continue;
        if (map[ans] == null) map[ans] = hint || ans;
      }
      return map;
    }

    function tipAttrFromHint(hint, phrase) {
      var pref = copy.glossaryTipPrefix != null ? copy.glossaryTipPrefix : "EN: ";
      var h = String(hint || "").trim();
      var gloss = h || phrase || "";
      return pref + gloss;
    }

    function buildReadableTranscriptHtml(transcript, chipRows) {
      var rows = chipRows || [];
      var candidates = [];
      var ri;
      var t = transcript || "";
      for (ri = 0; ri < rows.length; ri++) {
        var ans = String(rows[ri].ans != null ? rows[ri].ans : "").trim();
        var hint = String(rows[ri].hint != null ? rows[ri].hint : "").trim();
        if (!ans || t.indexOf(ans) === -1) continue;
        candidates.push({ ans: ans, hint: hint || ans, len: ans.length });
      }
      candidates.sort(function (a, b) {
        return b.len - a.len;
      });

      var pos = 0;
      var html = "";

      function flushPlain(start, end) {
        if (start >= end) return;
        var chunk = t.slice(start, end);
        var lines = chunk.split("\n");
        var li;
        for (li = 0; li < lines.length; li++) {
          if (li) html += "<br />";
          html += esc(lines[li]);
        }
      }

      while (pos < t.length) {
        var best = null;
        var ci;
        for (ci = 0; ci < candidates.length; ci++) {
          var c = candidates[ci];
          if (pos + c.len > t.length) continue;
          if (t.slice(pos, pos + c.len) !== c.ans) continue;
          if (!best || c.len > best.len) best = c;
        }
        if (best) {
          var tip = tipAttrFromHint(best.hint, best.ans);
          html +=
            '<button type="button" class="retell-lex-w" tabindex="0" data-tip="' +
            kit.escAttr(tip) +
            '">' +
            esc(best.ans) +
            "</button>";
          pos += best.len;
        } else {
          flushPlain(pos, pos + 1);
          pos++;
        }
      }
      return html;
    }

    function renderPhraseChips(container, seg, footerKind) {
      if (!container) return;
      var phrases = keywordsForSegment(seg);
      var hintMap = hintMapForSegment(seg);
      var fk = footerKind || "scan";
      if (!phrases.length) {
        retellPhraseList = [];
        container.innerHTML =
          copy.emptyPhraseBankHtml ||
          '<p class="retell-timed-muted"></p>';
        return;
      }
      if (fk === "retell") {
        retellPhraseList = phrases.slice();
      } else {
        retellPhraseList = [];
      }
      var html = '<div class="retell-timed-chips">';
      var i;
      for (i = 0; i < phrases.length; i++) {
        var ph = phrases[i];
        var tip = tipAttrFromHint(hintMap[ph], ph);
        html +=
          '<button type="button" class="retell-lex-chip" tabindex="0" data-phrase-idx="' +
          i +
          '" aria-pressed="false" data-tip="' +
          kit.escAttr(tip) +
          '">' +
          esc(ph) +
          "</button>";
      }
      html += "</div>";
      if (fk === "retell") {
        html += copy.footerPhraseRetell || "";
      } else {
        html += copy.footerPhraseScan || "";
      }
      container.innerHTML = html;
    }

    function bindLexToggle(root) {
      if (!root || root.dataset.retellLexBound === "1") return;
      root.dataset.retellLexBound = "1";
      root.addEventListener("click", function (ev) {
        var chipRetell = ev.target.closest(".retell-lex-chip");
        if (
          chipRetell &&
          paneRetell &&
          paneRetell.contains(chipRetell) &&
          phase === "retell"
        ) {
          if (ev.altKey) {
            ev.preventDefault();
            ev.stopPropagation();
            var wasTip = chipRetell.classList.contains("is-tip-open");
            root
              .querySelectorAll(".retell-lex-chip.is-tip-open")
              .forEach(function (n) {
                n.classList.remove("is-tip-open");
              });
            if (!wasTip) chipRetell.classList.add("is-tip-open");
            return;
          }
          ev.preventDefault();
          ev.stopPropagation();
          chipRetell.classList.toggle("retell-lex-chip--heard");
          chipRetell.setAttribute(
            "aria-pressed",
            chipRetell.classList.contains("retell-lex-chip--heard") ? "true" : "false"
          );
          root
            .querySelectorAll(".retell-lex-chip.is-tip-open")
            .forEach(function (n) {
              n.classList.remove("is-tip-open");
            });
          updatePhraseProgress();
          return;
        }

        var btn = ev.target.closest(".retell-lex-w, .retell-lex-chip");
        if (!btn || !root.contains(btn)) return;
        ev.preventDefault();
        ev.stopPropagation();
        var was = btn.classList.contains("is-tip-open");
        root
          .querySelectorAll(".retell-lex-w.is-tip-open, .retell-lex-chip.is-tip-open")
          .forEach(function (n) {
            n.classList.remove("is-tip-open");
          });
        if (!was) btn.classList.add("is-tip-open");
      });
    }

    function clearTimer() {
      if (tickId) {
        W.clearInterval(tickId);
        tickId = 0;
      }
    }

    function secsRemaining() {
      return Math.max(0, Math.ceil((phaseEndsAt - Date.now()) / 1000));
    }

    function updateTimerDisplay() {
      if (stageTimer) stageTimer.textContent = String(secsRemaining());
    }

    function applyPhaseVisibility() {
      if (paneFull) paneFull.classList.toggle("is-active", phase === "read");
      if (panePhrases) panePhrases.classList.toggle("is-active", phase === "phrases");
      if (paneRetell) paneRetell.classList.toggle("is-active", phase === "retell");
    }

    function setPhaseTexts() {
      if (phase === "read") {
        if (stageTitle) stageTitle.textContent = copy.stageTitleRead || "";
        if (stageHint) stageHint.textContent = copy.stageHintRead || "";
      } else if (phase === "phrases") {
        if (stageTitle) stageTitle.textContent = copy.stageTitlePhrases || "";
        if (stageHint) stageHint.textContent = copy.stageHintPhrases || "";
      } else {
        if (stageTitle) stageTitle.textContent = copy.stageTitleRetell || "";
        if (stageHint) stageHint.textContent = copy.stageHintRetell || "";
      }
    }

    function startTimerPhase(durationSec) {
      clearTimer();
      phaseEndsAt = Date.now() + durationSec * 1000;
      updateTimerDisplay();
      tickId = W.setInterval(function () {
        updateTimerDisplay();
        if (Date.now() >= phaseEndsAt) {
          clearTimer();
          advancePhaseOrSegment();
        }
      }, 200);
    }

    function advancePhaseOrSegment() {
      var seg = segments[segIndex];
      if (!seg) {
        finishAll();
        return;
      }

      var readSec = selRead ? parseInt(selRead.value, 10) || 60 : 60;
      var phraseSec = selPhrase ? parseInt(selPhrase.value, 10) || 20 : 20;
      var retellSec = selRetell ? parseInt(selRetell.value, 10) || 90 : 90;

      if (phase === "read") {
        phase = "phrases";
        clearOpenTips();
        setPhaseTexts();
        applyPhaseVisibility();
        updatePhraseProgress();
        renderPhraseChips(panePhrases, seg);
        startTimerPhase(phraseSec);
        return;
      }
      if (phase === "phrases") {
        phase = "retell";
        markMode = selMarkMode && selMarkMode.value === "mic" ? "mic" : "manual";
        clearOpenTips();
        setPhaseTexts();
        applyPhaseVisibility();
        renderPhraseChips(paneRetell, seg, "retell");
        startTimerPhase(retellSec);
        startPhraseMic();
        updatePhraseProgress();
        return;
      }

      if (phase !== "retell") {
        return;
      }

      stopPhraseMic();

      var chain = chainCheck && chainCheck.checked;
      if (chain && segIndex + 1 < segments.length) {
        segIndex++;
        phase = "read";
        var inner = els.runInner;
        if (inner) {
          inner.classList.add("retell-timed-dim");
          W.setTimeout(function () {
            enterSegment();
            inner.classList.remove("retell-timed-dim");
          }, 340);
        } else {
          enterSegment();
        }
        return;
      }

      finishAll();
    }

    function enterSegment() {
      stopPhraseMic();
      var seg = segments[segIndex];
      if (!seg) {
        finishAll();
        return;
      }
      if (segmentBadge && typeof copy.fmtSegmentBadge === "function") {
        segmentBadge.textContent = copy.fmtSegmentBadge(segIndex + 1, segments.length, seg.sumTitle || "");
      }
      if (paneFull) {
        paneFull.innerHTML =
          '<div class="retell-timed-fulltext">' +
          buildReadableTranscriptHtml(seg.transcript || "", seg.chipRows || []) +
          "</div>";
      }
      phase = "read";
      setPhaseTexts();
      applyPhaseVisibility();
      updatePhraseProgress();
      if (panePhrases) panePhrases.innerHTML = "";
      if (paneRetell) paneRetell.innerHTML = "";

      var readSec = selRead ? parseInt(selRead.value, 10) || 60 : 60;
      startTimerPhase(readSec);
    }

    function finishAll() {
      stopPhraseMic();
      clearTimer();
      showOnlyView("congrats");
    }

    function resetRunUi() {
      stopPhraseMic();
      clearTimer();
      phase = "read";
      segIndex = 0;
      segments = [];
    }

    function openConfig() {
      resetRunUi();
      clearOpenTips();
      showBackdrop(true);
      showOnlyView("config");
    }

    function closeAll() {
      resetRunUi();
      clearOpenTips();
      showBackdrop(false);
      showOnlyView("config");
    }

    function startDrill() {
      segments = getSegments() || [];
      if (!segments.length) {
        W.alert(copy.alertNoSegments || "");
        return;
      }
      segIndex = 0;
      phase = "read";
      showOnlyView("run");
      enterSegment();
    }

    function clearOpenTips() {
      if (!backdrop) return;
      backdrop.querySelectorAll(".retell-lex-w.is-tip-open, .retell-lex-chip.is-tip-open").forEach(function (n) {
        n.classList.remove("is-tip-open");
      });
    }

    bindLexToggle(els.runInner || backdrop);

    openBtn.addEventListener("click", openConfig);
    if (btnStart) btnStart.addEventListener("click", startDrill);
    if (btnResetCfg) {
      btnResetCfg.addEventListener("click", function () {
        fillSelect(selRead, [30, 45, 60, 90, 120], 60);
        fillSelect(selPhrase, [10, 15, 20, 30, 45, 60], 20);
        fillSelect(selRetell, [45, 60, 90, 120, 180], 90);
        if (chainCheck) chainCheck.checked = true;
        if (selMarkMode) {
          selMarkMode.value = "manual";
          selMarkMode.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
    }
    if (btnExit) btnExit.addEventListener("click", closeAll);
    if (btnCongratsClose) btnCongratsClose.addEventListener("click", closeAll);
    if (btnSkip) {
      btnSkip.addEventListener("click", function () {
        clearTimer();
        advancePhaseOrSegment();
      });
    }

    backdrop.addEventListener("click", function (ev) {
      if (ev.target !== backdrop) return;
      if (runView && !runView.hidden) return;
      closeAll();
    });

    W.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape") return;
      if (!backdrop || backdrop.hidden) return;
      closeAll();
    });
  }

  W.PREP_RETELL_CHAIN_TIMED = {
    mount: mount,
    mergeTimedCopy: mergeTimedCopy
  };
})(typeof window !== "undefined" ? window : globalThis);
