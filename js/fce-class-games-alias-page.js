/**
 * Boot Alias class game — class-games/alias.html
 */
(function (W) {
  "use strict";

  var C = W.FCE_CLASS_GAMES_BOARD_COMMON;
  if (!C) return;

  var el = C.el;
  var TOPIC_LIST = C.TOPIC_LIST;

  var aliasRosterMode = "manual";
  var ALIAS_NAMES_PLACEHOLDER = "Anna\nBen\nChris";
  var allPhrases = [];
  var selectedPack = "all";
  var placeholder = true;

  function hideAllAliasSetupCovers() {
    ["aCover", "aCoverMode", "aCoverLive"].forEach(function (id) {
      var node = el(id);
      if (node) node.hidden = true;
    });
    W.document.body.classList.remove("ap-alias-cover-open", "ap-setup--live");
    var fab = el("fpFab");
    if (fab) fab.classList.remove("fp-fab--pulse");
  }

  function hideAliasTitleCover() {
    hideAllAliasSetupCovers();
  }

  function showAliasTitleCover() {
    var game = el("aGame");
    if (game && game.classList.contains("on")) return;
    hideAllAliasSetupCovers();
    var cover = el("aCover");
    if (!cover) return;
    cover.hidden = false;
    W.document.body.classList.add("ap-alias-cover-open");
  }

  function showAliasModeCover() {
    var game = el("aGame");
    if (game && game.classList.contains("on")) return;
    hideAllAliasSetupCovers();
    var mode = el("aCoverMode");
    if (!mode) return;
    mode.hidden = false;
    W.document.body.classList.add("ap-alias-cover-open");
  }

  function showAliasLiveCover() {
    hideAllAliasSetupCovers();
    var live = el("aCoverLive");
    if (!live) return;
    live.hidden = false;
    W.document.body.classList.add("ap-alias-cover-open");
  }

  function showAliasSetup(mode) {
    aliasRosterMode = mode || "manual";
    hideAllAliasSetupCovers();
    var tip = el("aLiveSetupTip");
    var names = el("aNamesIn");
    if (tip) tip.hidden = aliasRosterMode !== "live";
    if (names) {
      names.placeholder =
        aliasRosterMode === "live"
          ? "Optional — or wait for Live roster…"
          : ALIAS_NAMES_PLACEHOLDER;
    }
    if (aliasRosterMode === "live") {
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

  function hideAliasTurnCover() {
    var tc = el("aTurnCover");
    if (tc) tc.hidden = true;
    W.document.body.classList.remove("ap-alias-turn-cover-open");
  }

  function showAliasTurnCover(info, proceed) {
    var tc = el("aTurnCover");
    if (!tc) {
      proceed();
      return;
    }
    hideAliasTitleCover();
    el("aCoverName").textContent = info.name || "—";
    el("aCoverRn").textContent = String(info.round || 1);
    el("aCoverTimer").textContent = C.formatTimer(info.timerSec || 60);
    tc.hidden = false;
    W.document.body.classList.add("ap-alias-turn-cover-open");
    var go = el("aCoverStartTurn");
    function done() {
      hideAliasTurnCover();
      proceed();
    }
    if (go) {
      go.onclick = done;
      go.focus();
    }
    tc.onkeydown = function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        done();
      }
    };
  }

  function wireAliasCovers(unit, meta) {
    var tag = el("aCoverUnitTag");
    if (tag && meta && meta.tag) tag.textContent = meta.tag;
    var coverGo = el("aCoverGo");
    if (coverGo) coverGo.addEventListener("click", showAliasModeCover);
    var pickManual = el("aPickManual");
    if (pickManual) {
      pickManual.addEventListener("click", function () {
        showAliasSetup("manual");
      });
    }
    var pickLive = el("aPickLive");
    if (pickLive) pickLive.addEventListener("click", showAliasLiveCover);
    var modeBack = el("aCoverModeBack");
    if (modeBack) modeBack.addEventListener("click", showAliasTitleCover);
    var liveGo = el("aCoverLiveGo");
    if (liveGo) {
      liveGo.addEventListener("click", function () {
        showAliasSetup("live");
      });
    }
    var liveBack = el("aCoverLiveBack");
    if (liveBack) liveBack.addEventListener("click", showAliasModeCover);
    var reset = el("aBtnReset");
    if (reset) reset.addEventListener("click", hideAliasTurnCover);
    showAliasTitleCover();
  }

  function mountAlias(selectedPack) {
    if (!W.PREP_ALIAS || typeof W.PREP_ALIAS.mount !== "function") return;
    W.PREP_ALIAS.mount({
      loadDeckEntries: function () {
        return allPhrases.map(function (p) {
          return {
            phrase: p.phrase,
            topicId: p.topicId || p.pack || "lifestyle"
          };
        });
      },
      getTopicList: function () {
        return TOPIC_LIST;
      },
      copy: {
        deckMeta: "Deck · ",
        pickPacksHint: "Use pack tabs above."
      },
      onGameStart: hideAliasTitleCover,
      onTurnCover: showAliasTurnCover,
      els: {
        topicChecks: el("aTopicChecks"),
        packBox: el("aPackBox"),
        topicHint: el("aTopicHint"),
        deckMeta: el("aDeckMeta"),
        optBlock: el("aOptBlock"),
        optRounds: el("aOptRounds"),
        optTimer: el("aOptTimer"),
        namesIn: el("aNamesIn"),
        err: el("aErr"),
        btnGo: el("aBtnGo"),
        game: el("aGame"),
        setup: el("aSetup"),
        curName: el("aCurName"),
        rn: el("aRn"),
        rnMax: el("aRnMax"),
        timer: el("aTimer"),
        blockNum: el("aBlockNum"),
        blockLeft: el("aBlockLeft"),
        queueMeta: el("aQueueMeta"),
        grid: el("aGrid"),
        btnNextBlock: el("aBtnNextBlock"),
        btnEndTurn: el("aBtnEndTurn"),
        lbList: el("aLbList"),
        btnFinal: el("aBtnFinal"),
        btnReset: el("aBtnReset"),
        ovR: el("aOvR"),
        ovRMsg: el("aOvRMsg"),
        ovRok: el("aOvRok"),
        ovF: el("aOvF"),
        ovFList: el("aOvFList"),
        ovFok: el("aOvFok")
      }
    });
    W.setTimeout(function () {
      C.syncHiddenPacks(selectedPack, "aTopicChecks");
    }, 0);
  }

  function applyPack(packId) {
    selectedPack = packId;
    C.writePack(packId);
    C.paintPackTabs(selectedPack, applyPack, allPhrases, placeholder);
    C.syncHiddenPacks(selectedPack, "aTopicChecks");
  }

  function paintShell(unit, meta, ph) {
    el("apTag").textContent = meta.tag;
    el("apLead").innerHTML = meta.aliasLead || meta.glassLead || "";
    C.paintNav(unit, meta);
    C.paintPlaceholderBanner(unit, ph);
    W.document.title = "Alias · Unit " + unit;
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
      mountAlias(selectedPack);
      wireAliasCovers(unit, meta);
      applyPack(selectedPack);
    });
  }

  if (W.document.readyState === "loading") {
    W.document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
