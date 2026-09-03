/**
 * Boot Glass bridge — ?unit=N&pack=, deck tabs.
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

  /** Phrase rows for All deck → 10 bridge steps (pairs) */
  var ALL_QUOTAS = { lifestyle: 8, clothes: 4, get: 4, run: 4 };
  var MAX_PHRASES = 20;

  function el(id) {
    return W.document.getElementById(id);
  }

  function stepPack(step) {
    if (step.pack) return step.pack;
    var t = String(step.text || "");
    if (/^Clothes/i.test(t)) return "clothes";
    return "lifestyle";
  }

  function bridgeCount(flat, mode) {
    if (!W.FCE_GLASS_BRIDGE) return 0;
    if (mode === "pick" && W.FCE_GLASS_BRIDGE.stepCountForMode) {
      return W.FCE_GLASS_BRIDGE.stepCountForMode(flat, "pick");
    }
    if (W.FCE_GLASS_BRIDGE.buildBridgeSteps) {
      return W.FCE_GLASS_BRIDGE.buildBridgeSteps(flat).length;
    }
    return 0;
  }

  function readModeFromQuery() {
    var m = new URLSearchParams(W.location.search || "").get("mode");
    return m === "type" ? "type" : "pick";
  }

  function writeModeToQuery(mode) {
    var u = new URL(W.location.href);
    if (!mode || mode === "pick") u.searchParams.delete("mode");
    else u.searchParams.set("mode", mode);
    W.history.replaceState(null, "", u.pathname + u.search + u.hash);
  }

  function filterSteps(all, packId) {
    if (!packId || packId === "all") return buildAllDeck(all);
    return all.filter(function (s) {
      return stepPack(s) === packId;
    });
  }

  function buildAllDeck(all) {
    var byPack = { lifestyle: [], clothes: [], get: [], run: [] };
    all.forEach(function (s) {
      var p = stepPack(s);
      if (byPack[p]) byPack[p].push(s);
    });
    var out = [];
    ["lifestyle", "clothes", "get", "run"].forEach(function (p) {
      out = out.concat(byPack[p].slice(0, ALL_QUOTAS[p] || 0));
    });
    if (out.length < MAX_PHRASES) {
      all.forEach(function (s) {
        if (out.length >= MAX_PHRASES) return;
        if (out.indexOf(s) === -1) out.push(s);
      });
    }
    return out.slice(0, MAX_PHRASES);
  }

  function countByPack(all, packId, mode) {
    return bridgeCount(filterSteps(all, packId), mode);
  }

  function packLabel(id) {
    for (var i = 0; i < PACK_DEFS.length; i++) {
      if (PACK_DEFS[i].id === id) return PACK_DEFS[i].label;
    }
    return id;
  }

  function readPackFromQuery() {
    var p = new URLSearchParams(W.location.search || "").get("pack");
    return p && /^[a-z]+$/i.test(p) ? p.toLowerCase() : "all";
  }

  function writePackToQuery(packId) {
    var u = new URL(W.location.href);
    if (!packId || packId === "all") u.searchParams.delete("pack");
    else u.searchParams.set("pack", packId);
    W.history.replaceState(null, "", u.pathname + u.search + u.hash);
  }

  function paintShell(unit, meta, placeholder) {
    el("gbTag").textContent = meta.tag;
    el("gbLead").innerHTML = meta.glassLead;
    var nav = el("gbNav");
    if (nav) {
      nav.innerHTML =
        '<a class="back" href="' + meta.hub + '">&larr; Class games</a>' +
        ' · <a href="hundred-to-one.html?unit=' + unit + '">100 to 1</a>' +
        ' · <a href="' + meta.unitHome + '">Unit ' + unit + "</a>";
    }
    var winP = el("gbWinText");
    if (winP && meta.winText) winP.textContent = meta.winText;
    var banner = el("gbPlaceholderBanner");
    if (banner) {
      banner.hidden = !placeholder;
      if (placeholder) {
        banner.textContent =
          "Placeholder steps for Unit " +
          unit +
          ". Add good/bad pairs in js/unit" +
          unit +
          "-class-games-boards.js.";
      }
    }
    W.document.title = "Glass bridge · Unit " + unit;
  }

  function paintDeckMeta(packId, count, placeholder) {
    var meta = el("gbDeckMeta");
    if (!meta) return;
    if (placeholder || !count) {
      meta.hidden = true;
      return;
    }
    meta.hidden = false;
    var label = packLabel(packId);
    meta.textContent =
      packId === "all"
        ? count + " steps · mixed decks"
        : label + " · " + count + " step" + (count === 1 ? "" : "s");
  }

  function paintPackTabs(allSteps, selectedPack, selectedMode, onPick, placeholder) {
    var nav = el("gbPackTabs");
    if (!nav) return;
    if (placeholder || !allSteps.length) {
      nav.hidden = true;
      return;
    }

    var hasPackField = allSteps.some(function (s) {
      return s && s.pack;
    });
    if (!hasPackField) {
      nav.hidden = true;
      return;
    }

    nav.hidden = false;
    nav.innerHTML = "";
    PACK_DEFS.forEach(function (def) {
      var n = countByPack(allSteps, def.id, selectedMode || "pick");
      if (def.id !== "all" && n === 0) return;
      var btn = W.document.createElement("button");
      btn.type = "button";
      btn.className = "gb-pack-tab" + (def.id === selectedPack ? " is-active" : "");
      btn.setAttribute("data-pack", def.id);
      btn.textContent = def.label + (def.id === "all" ? "" : " (" + n + ")");
      btn.addEventListener("click", function () {
        onPick(def.id);
      });
      nav.appendChild(btn);
    });
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
    if (unit === 1) return ["../js/unit1-class-games-boards.js"];
    if (unit === 3) return ["../unit3-digital-detox/data/u3-games-content.js"];
    return ["../js/unit" + unit + "-class-games-boards.js"];
  }

  function boot() {
    if (!W.FCE_CLASS_GAMES_BOARDS || !W.FCE_GLASS_BRIDGE) return;
    var unit = W.FCE_CLASS_GAMES_BOARDS.parseUnitFromQuery();
    var meta = W.FCE_CLASS_GAMES_BOARDS.metaFor(unit);
    var selectedPack = readPackFromQuery();
    var selectedMode = readModeFromQuery();
    var engineApi = null;
    var allSteps = [];
    var placeholder = true;

    loadScripts(unitDataScripts(unit), function () {
      var pack = W.FCE_CLASS_GAMES_BOARDS.pickGlass(unit);
      allSteps = pack.steps || [];
      placeholder = pack.placeholder;
      paintShell(unit, meta, placeholder);

      function stepsForDeck() {
        return filterSteps(allSteps, selectedPack);
      }

      function applyPack(packId) {
        selectedPack = packId;
        writePackToQuery(packId);
        var deck = stepsForDeck();
        paintPackTabs(allSteps, selectedPack, selectedMode, applyPack, placeholder);
        paintDeckMeta(selectedPack, bridgeCount(deck, selectedMode), placeholder);
        if (engineApi) engineApi.refresh();
      }

      function onModeChange(mode) {
        selectedMode = mode;
        writeModeToQuery(mode);
        paintPackTabs(allSteps, selectedPack, selectedMode, applyPack, placeholder);
        paintDeckMeta(selectedPack, bridgeCount(stepsForDeck(), selectedMode), placeholder);
      }

      engineApi = W.FCE_GLASS_BRIDGE.mount({
        getSteps: stepsForDeck,
        initialMode: selectedMode,
        onModeChange: onModeChange,
        rulesText:
          "Pick glass: one sentence above, safe vs trap chunks on the panels — tap the safe phrase. " +
          "Type answer: blank glass — tap left or right for a different task, then type the chunk. " +
          "Wrong step → restart from step 1 (same tasks)."
      });

      paintPackTabs(allSteps, selectedPack, selectedMode, applyPack, placeholder);
      paintDeckMeta(selectedPack, bridgeCount(stepsForDeck(), selectedMode), placeholder);
      applyPack(selectedPack);
    });
  }

  if (W.document.readyState === "loading") {
    W.document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
