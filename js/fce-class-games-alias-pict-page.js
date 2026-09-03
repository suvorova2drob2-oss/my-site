/**
 * Boot Alias · Pictionary — ?unit=N&mode=alias|pict&pack=
 */
(function (W) {
  "use strict";

  var PACK_DEFS = [
    { id: "all", label: "All" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "clothes", label: "Clothes" },
    { id: "get", label: "Get" },
    { id: "run", label: "Run" }
  ];

  var TOPIC_LIST = [
    { id: "lifestyle", label: "Lifestyle" },
    { id: "clothes", label: "Clothes" },
    { id: "get", label: "Get" },
    { id: "run", label: "Run" }
  ];

  function el(id) {
    return W.document.getElementById(id);
  }

  function readPack() {
    var p = new URLSearchParams(W.location.search || "").get("pack");
    return p && /^[a-z]+$/i.test(p) ? p.toLowerCase() : "all";
  }

  function writePack(packId) {
    var u = new URL(W.location.href);
    if (!packId || packId === "all") u.searchParams.delete("pack");
    else u.searchParams.set("pack", packId);
    W.history.replaceState(null, "", u.pathname + u.search + u.hash);
  }

  function readMode() {
    var m = new URLSearchParams(W.location.search || "").get("mode");
    return m === "pict" ? "pict" : "alias";
  }

  function writeMode(mode) {
    var u = new URL(W.location.href);
    if (!mode || mode === "alias") u.searchParams.delete("mode");
    else u.searchParams.set("mode", mode);
    W.history.replaceState(null, "", u.pathname + u.search + u.hash);
  }

  function loadScripts(urls, cb) {
    var i = 0;
    function next() {
      if (i >= urls.length) return cb();
      var s = W.document.createElement("script");
      s.src = urls[i];
      s.onload = function () {
        i += 1;
        next();
      };
      s.onerror = function () {
        i += 1;
        next();
      };
      W.document.head.appendChild(s);
    }
    next();
  }

  function unitDataScripts(unit) {
    if (unit === 1) {
      return [
        "../js/unit1-lifestyle-lexis.js",
        "../js/unit1-clothes-lexis.js",
        "../js/unit1-get-lexis.js",
        "../js/unit1-run-lexis.js",
        "../js/unit1-alias-phrases.js?v=1",
        "../js/unit1-class-games-boards.js?v=3"
      ];
    }
    if (unit === 3) return ["../unit3-digital-detox/data/u3-games-content.js"];
    return ["../js/unit" + unit + "-class-games-boards.js"];
  }

  function syncHiddenPacks(packId, checksId) {
    var wrap = el(checksId);
    if (!wrap) return;
    var inputs = wrap.querySelectorAll('input[type="checkbox"]');
    var i;
    for (i = 0; i < inputs.length; i++) {
      if (packId === "all") inputs[i].checked = true;
      else inputs[i].checked = inputs[i].value === packId;
      inputs[i].dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  function paintShell(unit, meta, placeholder) {
    el("apTag").textContent = meta.tag;
    el("apLead").innerHTML = meta.aliasLead || meta.glassLead || "";
    var nav = el("apNav");
    if (nav) {
      nav.innerHTML =
        '<a class="back" href="' +
        meta.hub +
        '">&larr; Class games</a> · <a href="' +
        meta.unitHome +
        '">Unit ' +
        unit +
        "</a>";
    }
    var banner = el("apPlaceholderBanner");
    if (banner) {
      banner.hidden = !placeholder;
      if (placeholder) {
        banner.textContent =
          "Placeholder phrases for Unit " +
          unit +
          " — add rows to js/unit" +
          unit +
          "-class-games-boards.js (U" +
          unit +
          "_ALIAS_PHRASES).";
      }
    }
    W.document.title = "Alias · Pictionary · Unit " + unit;
  }

  function paintPackTabs(selectedPack, onPick, allPhrases, placeholder) {
    var nav = el("apPackTabs");
    if (!nav) return;
    if (placeholder || !allPhrases.length) {
      nav.hidden = true;
      return;
    }
    nav.hidden = false;
    nav.innerHTML = "";
    PACK_DEFS.forEach(function (def) {
      var n =
        def.id === "all"
          ? allPhrases.length
          : allPhrases.filter(function (p) {
              return p.pack === def.id || p.topicId === def.id;
            }).length;
      if (def.id !== "all" && n === 0) return;
      var btn = W.document.createElement("button");
      btn.type = "button";
      btn.className = "ap-pack-tab" + (def.id === selectedPack ? " is-active" : "");
      btn.setAttribute("data-pack", def.id);
      btn.textContent = def.label + (def.id === "all" ? " (" + n + ")" : " · " + n);
      btn.addEventListener("click", function () {
        onPick(def.id);
      });
      nav.appendChild(btn);
    });
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
        pickPacksHint: "Use pack tabs above.",
      },
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
        ovFok: el("aOvFok"),
      },
    });
    W.setTimeout(function () {
      syncHiddenPacks(selectedPack, "aTopicChecks");
    }, 0);
  }

  function mountPict(selectedPack) {
    if (W.FceClassPictLive && typeof W.FceClassPictLive.mount === "function") {
      W.FceClassPictLive.mount({
        deckPrefix: "fce-u1-pict",
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
      return;
    }
    if (!W.PREP_PICTORY || typeof W.PREP_PICTORY.mount !== "function") return;
    W.PREP_PICTORY.mount({
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
      turnSeconds: 90,
      copy: {
        deckMeta: "Deck · ",
        pickPacksHint: "Use pack tabs above.",
      },
      els: {
        topicChecks: el("pTopicChecks"),
        packBox: el("pPackBox"),
        topicHint: el("pTopicHint"),
        deckMeta: el("pDeckMeta"),
        optTimer: el("pOptTimer"),
        namesIn: el("pNamesIn"),
        err: el("pErr"),
        btnGo: el("pBtnGo"),
        game: el("pGame"),
        setup: el("pSetup"),
        curName: el("pCurName"),
        rn: el("pRn"),
        leftN: el("pLeftN"),
        timer: el("pTimer"),
        hostPick: el("pHostPick"),
        choiceGrid: el("pChoiceGrid"),
        hostMsg: el("pHostMsg"),
        promptText: el("pPromptText"),
        hidePrompt: el("pHidePrompt"),
        penColor: el("pPenColor"),
        penSize: el("pPenSize"),
        sizeLab: el("pSizeLab"),
        canvasWrap: el("pCanvasWrap"),
        draw: el("pDraw"),
        btnClearCanvas: el("pBtnClearCanvas"),
        btnPass: el("pBtnPass"),
        btnEndTurn: el("pBtnEndTurn"),
        btnNextRound: el("pBtnNextRound"),
        lbList: el("pLbList"),
        btnFinal: el("pBtnFinal"),
        btnReset: el("pBtnReset"),
        ovR: el("pOvR"),
        ovRok: el("pOvRok"),
        ovF: el("pOvF"),
        ovFList: el("pOvFList"),
        ovFok: el("pOvFok"),
      },
    });
    W.setTimeout(function () {
      syncHiddenPacks(selectedPack, "pTopicChecks");
    }, 0);
  }

  var allPhrases = [];
  var selectedPack = "all";
  var selectedMode = "alias";

  function applyMode(mode) {
    selectedMode = mode;
    writeMode(mode);
    var aliasPane = el("apAliasPane");
    var pictPane = el("apPictPane");
    if (aliasPane) aliasPane.hidden = mode !== "alias";
    if (pictPane) pictPane.hidden = mode !== "pict";
    W.document.querySelectorAll(".ap-mode-tab").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-mode") === mode);
    });
  }

  function applyPack(packId) {
    selectedPack = packId;
    writePack(packId);
    paintPackTabs(selectedPack, applyPack, allPhrases, placeholder);
    syncHiddenPacks(selectedPack, "aTopicChecks");
    syncHiddenPacks(selectedPack, "pTopicChecks");
    if (selectedMode === "pict" && W.FceClassPictLive) {
      mountPict(selectedPack);
    }
  }

  var placeholder = true;

  function boot() {
    if (!W.FCE_CLASS_GAMES_BOARDS) return;
    var unit = W.FCE_CLASS_GAMES_BOARDS.parseUnitFromQuery();
    var meta = W.FCE_CLASS_GAMES_BOARDS.metaFor(unit);
    selectedPack = readPack();
    selectedMode = readMode();

    loadScripts(unitDataScripts(unit), function () {
      var pack = W.FCE_CLASS_GAMES_BOARDS.pickAlias(unit);
      allPhrases = pack.phrases || [];
      placeholder = pack.placeholder;
      paintShell(unit, meta, placeholder);
      paintPackTabs(selectedPack, applyPack, allPhrases, placeholder);

      mountAlias(selectedPack);
      mountPict(selectedPack);
      applyMode(selectedMode);
      applyPack(selectedPack);

      el("apModeTabs").addEventListener("click", function (e) {
        var btn = e.target.closest(".ap-mode-tab");
        if (!btn) return;
        applyMode(btn.getAttribute("data-mode"));
      });
    });
  }

  if (W.document.readyState === "loading") {
    W.document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
