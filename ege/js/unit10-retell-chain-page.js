/**
 * Unit 10 — Retell chain page bootstrap (pack rail, accordion, timed overlay mount).
 * Requires: lexical packs, prep-retell-chain-kit.js, speech-match, timed-copy, timed-engine,
 *            unit10-retell-chain-sources.js (window.U10_RETELL_CHAIN_SOURCES).
 */
(function () {
  "use strict";

  var CONTENT_FAILED_MSG =
    "Content failed to load — check that lexical packs are linked before unit10-retell-chain-sources.js.";

  var hub = document.getElementById("navBack");
  var pg = document.getElementById("navPlayground");
  if (window.PREP_U10_PG_CPE) {
    if (hub) hub.href = "index.html?course=cpe";
    if (pg) pg.href = "index.html?course=cpe";
  }

  var kit = window.PREP_RETELL_CHAIN_KIT;
  var SOURCES = window.U10_RETELL_CHAIN_SOURCES || [];
  var packRail = document.getElementById("retellPackRail");
  var focusRail = document.getElementById("retellFocusRail");
  var host = document.getElementById("stage2RetellTexts");
  var audioStrip = document.getElementById("audioStrip");
  var audioEl = document.getElementById("mainAudio");
  var audioSrcEl = document.getElementById("mainAudioSource");
  var audioCaption = document.getElementById("audioCaption");
  var subEn = document.getElementById("retellSubEn");
  var subRu = document.getElementById("retellSubRu");
  var sectionLead = document.getElementById("sectionLead");
  var sectionHead = document.getElementById("sectionHead");
  var pageTitle = document.getElementById("retellPageTitle");
  var trainerWrap = document.getElementById("trainerPathWrap");

  if (!kit || !SOURCES.length || !packRail || !focusRail || !host) return;

  var currentPackId = SOURCES[0].id;
  var currentFocus = "all";

  function packById(id) {
    var i;
    for (i = 0; i < SOURCES.length; i++) {
      if (SOURCES[i].id === id) return SOURCES[i];
    }
    return SOURCES[0];
  }

  function bindFocusRail(pack) {
    kit.renderRadioRail(focusRail, {
      name: "retellFocus",
      selected: currentFocus,
      items: pack.focusModes || [],
      onChange: function (v) {
        currentFocus = v;
        kit.applySegmentFocus(host, currentFocus);
      }
    });
  }

  function applyAudio(pack) {
    if (!audioStrip || !audioEl || !audioSrcEl) return;
    var a = pack.audio;
    if (a && a.src) {
      audioStrip.hidden = false;
      if (audioCaption) audioCaption.textContent = a.caption || "Class audio";
      audioSrcEl.src = a.src;
      audioEl.load();
    } else {
      audioStrip.hidden = true;
      audioSrcEl.removeAttribute("src");
      audioEl.removeAttribute("src");
      audioEl.load();
    }
  }

  function refreshPack() {
    var pack = packById(currentPackId);
    currentFocus = "all";

    if (pageTitle) {
      pageTitle.textContent = "Stage 2 — Chained retell (" + pack.title + ")";
    }
    if (subEn) subEn.textContent = pack.explainerEn || "";
    if (subRu) subRu.textContent = pack.explainerRu || "";
    if (sectionLead) sectionLead.textContent = pack.sectionLead || "";
    if (sectionHead) {
      sectionHead.textContent = pack.accordionScriptsHeading || "Script blocks";
    }
    if (trainerWrap) trainerWrap.hidden = pack.id !== "listening-p4";

    applyAudio(pack);
    bindFocusRail(pack);

    var segments = typeof pack.getSegments === "function" ? pack.getSegments() : [];
    kit.renderAccordion(host, segments);
    kit.applySegmentFocus(host, currentFocus);
    if (!segments.length && host) {
      host.innerHTML = '<p class="lead">' + kit.escHtml(CONTENT_FAILED_MSG) + "</p>";
    }
  }

  kit.renderRadioRail(packRail, {
    name: "retellPack",
    selected: currentPackId,
    items: SOURCES.map(function (p) {
      return {
        value: p.id,
        title: p.title,
        tagline: p.tagline || "",
        icon: p.icon || ""
      };
    }),
    onChange: function (v) {
      currentPackId = v;
      refreshPack();
    }
  });

  refreshPack();

  function getActiveSegments() {
    var pack = packById(currentPackId);
    var all = typeof pack.getSegments === "function" ? pack.getSegments() : [];
    if (!all.length) return [];
    if (currentFocus === "all") return all.slice();
    return all.filter(function (s) {
      return String(s.key) === String(currentFocus);
    });
  }

  if (window.PREP_RETELL_CHAIN_TIMED && typeof window.PREP_RETELL_CHAIN_TIMED.mount === "function") {
    window.PREP_RETELL_CHAIN_TIMED.mount({
      kit: kit,
      getSegments: getActiveSegments,
      els: {
        backdrop: document.getElementById("retellTimedBackdrop"),
        openBtn: document.getElementById("retellTimedOpenBtn"),
        configView: document.getElementById("retellTimedConfigView"),
        runView: document.getElementById("retellTimedRunView"),
        congratsView: document.getElementById("retellTimedCongratsView"),
        selRead: document.getElementById("retellTimedReadSec"),
        selPhrase: document.getElementById("retellTimedPhraseSec"),
        selRetell: document.getElementById("retellTimedRetellSec"),
        selMarkMode: document.getElementById("retellTimedMarkMode"),
        micHint: document.getElementById("retellTimedMicHint"),
        chainCheck: document.getElementById("retellTimedChain"),
        btnStart: document.getElementById("retellTimedStart"),
        btnResetCfg: document.getElementById("retellTimedResetCfg"),
        btnExit: document.getElementById("retellTimedExit"),
        btnSkip: document.getElementById("retellTimedSkip"),
        btnCongratsClose: document.getElementById("retellTimedCongratsClose"),
        stageTitle: document.getElementById("retellTimedStageTitle"),
        stageTimer: document.getElementById("retellTimedTimer"),
        stageHint: document.getElementById("retellTimedStageHint"),
        phraseProgress: document.getElementById("retellTimedPhraseProgress"),
        segmentBadge: document.getElementById("retellTimedSegmentBadge"),
        paneFull: document.getElementById("retellTimedPaneFull"),
        panePhrases: document.getElementById("retellTimedPanePhrases"),
        paneRetell: document.getElementById("retellTimedPaneRetell"),
        runInner: document.getElementById("retellTimedRunInner")
      }
    });
  }
})();
