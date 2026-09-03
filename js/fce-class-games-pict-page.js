/**
 * Boot Pictionary Live — class-games/pictionary.html
 */
(function (W) {
  "use strict";

  var C = W.FCE_CLASS_GAMES_BOARD_COMMON;
  if (!C) return;

  var el = C.el;
  var allPhrases = [];
  var selectedPack = "all";
  var placeholder = true;

  function hideAllPictCovers() {
    ["pCover", "pCoverMode", "pCoverLive"].forEach(function (id) {
      var node = el(id);
      if (node) node.hidden = true;
    });
    W.document.body.classList.remove("ap-pict-cover-open", "ap-setup--live");
    var fab = el("fpFab");
    if (fab) fab.classList.remove("fp-fab--pulse");
  }

  function showPictTitleCover() {
    hideAllPictCovers();
    var cover = el("pCover");
    if (!cover) return;
    cover.hidden = false;
    W.document.body.classList.add("ap-pict-cover-open");
  }

  function showPictModeCover() {
    hideAllPictCovers();
    var mode = el("pCoverMode");
    if (!mode) return;
    mode.hidden = false;
    W.document.body.classList.add("ap-pict-cover-open");
  }

  function showPictLiveCover() {
    hideAllPictCovers();
    var live = el("pCoverLive");
    if (!live) return;
    live.hidden = false;
    W.document.body.classList.add("ap-pict-cover-open");
  }

  function showPictSetup(mode) {
    hideAllPictCovers();
    var tip = el("pLiveSetupTip");
    if (tip) tip.hidden = mode !== "live";
    if (mode === "live") {
      W.setTimeout(function () {
        var fab = el("fpFab");
        if (fab) {
          fab.classList.add("fp-fab--pulse");
          try {
            fab.scrollIntoView({ behavior: "smooth", block: "nearest" });
          } catch (e) {}
        }
      }, 400);
    }
  }

  function wirePictCovers(unit, meta) {
    if (C.isStudentJoin()) return;
    var tag = el("pCoverUnitTag");
    if (tag && meta && meta.tag) tag.textContent = meta.tag;
    var coverGo = el("pCoverGo");
    if (coverGo) coverGo.addEventListener("click", showPictModeCover);
    var pickManual = el("pPickManual");
    if (pickManual) {
      pickManual.addEventListener("click", function () {
        showPictSetup("manual");
      });
    }
    var pickLive = el("pPickLive");
    if (pickLive) pickLive.addEventListener("click", showPictLiveCover);
    var modeBack = el("pCoverModeBack");
    if (modeBack) modeBack.addEventListener("click", showPictTitleCover);
    var liveGo = el("pCoverLiveGo");
    if (liveGo) {
      liveGo.addEventListener("click", function () {
        showPictSetup("live");
      });
    }
    var liveBack = el("pCoverLiveBack");
    if (liveBack) liveBack.addEventListener("click", showPictModeCover);
    showPictTitleCover();
  }

  function mountPict(selectedPack) {
    if (!W.FceClassPictLive || typeof W.FceClassPictLive.mount !== "function") return;
    W.FceClassPictLive.mount({
      deckPrefix: "fce-u" + (W.FCE_CLASS_GAMES_BOARDS.parseUnitFromQuery() || 1) + "-pict",
      getPhrases: function () {
        if (selectedPack === "all") return allPhrases.slice();
        return allPhrases.filter(function (p) {
          return p && (p.pack === selectedPack || p.topicId === selectedPack);
        });
      },
      getPack: function () {
        return selectedPack;
      }
    });
  }

  function applyPack(packId) {
    selectedPack = packId;
    C.writePack(packId);
    C.paintPackTabs(selectedPack, applyPack, allPhrases, placeholder);
    mountPict(selectedPack);
  }

  function paintShell(unit, meta, ph) {
    el("apTag").textContent = meta.tag;
    el("apLead").innerHTML = meta.pictLead || meta.aliasLead || "";
    C.paintNav(unit, meta);
    C.paintPlaceholderBanner(unit, ph);
    W.document.title = "Pictionary · Unit " + unit;
  }

  function boot() {
    if (!W.FCE_CLASS_GAMES_BOARDS) return;
    var unit = W.FCE_CLASS_GAMES_BOARDS.parseUnitFromQuery();
    var meta = W.FCE_CLASS_GAMES_BOARDS.metaFor(unit);
    selectedPack = C.readPack();

    C.loadScripts(C.unitDataScripts(unit), function () {
      var pack = W.FCE_CLASS_GAMES_BOARDS.pickAlias(unit);
      allPhrases = pack.phrases || [];
      placeholder = pack.placeholder;
      paintShell(unit, meta, placeholder);
      C.paintPackTabs(selectedPack, applyPack, allPhrases, placeholder);
      wirePictCovers(unit, meta);
      applyPack(selectedPack);
    });
  }

  if (W.document.readyState === "loading") {
    W.document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
