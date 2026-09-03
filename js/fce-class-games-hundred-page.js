/**
 * Boot 100 to 1 page — reads ?unit=N&pack=, loads unit data, mounts engine + deck tabs.
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

  function el(id) {
    return W.document.getElementById(id);
  }

  function packFromTopic(topic) {
    var t = String(topic || "");
    if (/^Lifestyle/i.test(t)) return "lifestyle";
    if (/^Clothes/i.test(t)) return "clothes";
    if (/^Get/i.test(t)) return "get";
    if (/^Run/i.test(t)) return "run";
    return "";
  }

  function roundPack(r) {
    return r.pack || packFromTopic(r.topic) || "";
  }

  function filterRounds(all, packId) {
    if (!packId || packId === "all") return all.slice();
    return all.filter(function (r) {
      return roundPack(r) === packId;
    });
  }

  function countByPack(all, packId) {
    if (packId === "all") return all.length;
    return filterRounds(all, packId).length;
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
    el("h1Tag").textContent = meta.tag;
    el("h1Lead").innerHTML = meta.hundredLead;
    var nav = el("h1Nav");
    if (nav) {
      nav.innerHTML =
        '<a class="back" href="' + meta.hub + '">&larr; Class games</a>' +
        '<a href="glass-bridge.html?unit=' + unit + '">Glass bridge</a>';
    }
    var banner = el("h1PlaceholderBanner");
    if (banner) {
      banner.hidden = !placeholder;
      if (placeholder) {
        banner.textContent =
          "Placeholder deck for Unit " +
          unit +
          ". Add real rounds in js/unit" +
          unit +
          "-class-games-boards.js (see Unit 1 or Unit 3 for examples).";
      }
    }
    W.document.title = "100 to 1 · Unit " + unit;
  }

  function paintDeckMeta(packId, count, placeholder) {
    var meta = el("h1DeckMeta");
    if (!meta) return;
    if (placeholder) {
      meta.hidden = true;
      return;
    }
    meta.hidden = false;
    var label = packLabel(packId);
    meta.textContent =
      packId === "all"
        ? count + " rounds · all decks"
        : label + " · " + count + " round" + (count === 1 ? "" : "s");
  }

  function paintPackTabs(allRounds, selectedPack, onPick, placeholder) {
    var nav = el("h1PackTabs");
    if (!nav) return;
    if (placeholder || !allRounds.length) {
      nav.hidden = true;
      return;
    }

    var hasPackField = allRounds.some(function (r) {
      return !!roundPack(r);
    });
    if (!hasPackField) {
      nav.hidden = true;
      return;
    }

    nav.hidden = false;
    nav.innerHTML = "";
    PACK_DEFS.forEach(function (def) {
      var n = countByPack(allRounds, def.id);
      if (def.id !== "all" && n === 0) return;

      var btn = W.document.createElement("button");
      btn.type = "button";
      btn.className =
        "h1-pack-tab" + (def.id === selectedPack ? " is-active" : "");
      btn.setAttribute("data-pack", def.id);
      btn.textContent = def.label;
      if (def.id !== "all") {
        btn.setAttribute("aria-label", def.label + " · " + n + " rounds");
      }
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
    if (!W.FCE_CLASS_GAMES_BOARDS || !W.FCE_HUNDRED_TO_ONE) return;
    var unit = W.FCE_CLASS_GAMES_BOARDS.parseUnitFromQuery();
    var meta = W.FCE_CLASS_GAMES_BOARDS.metaFor(unit);

    loadScripts(unitDataScripts(unit), function () {
      var pack = W.FCE_CLASS_GAMES_BOARDS.pickHundred(unit);
      var allRounds = pack.rounds || [];
      var selectedPack = readPackFromQuery();
      if (selectedPack !== "all" && !countByPack(allRounds, selectedPack)) {
        selectedPack = "all";
        writePackToQuery("all");
      }

      paintShell(unit, meta, pack.placeholder);

      var game = null;

      function applyPack(packId) {
        selectedPack = packId;
        writePackToQuery(packId);
        var filtered = filterRounds(allRounds, selectedPack);
        paintPackTabs(allRounds, selectedPack, applyPack, pack.placeholder);
        paintDeckMeta(selectedPack, filtered.length, pack.placeholder);
        if (game && game.refresh) game.refresh();
      }

      paintPackTabs(allRounds, selectedPack, applyPack, pack.placeholder);
      paintDeckMeta(
        selectedPack,
        filterRounds(allRounds, selectedPack).length,
        pack.placeholder
      );

      game = W.FCE_HUNDRED_TO_ONE.mount({
        getRounds: function () {
          return filterRounds(allRounds, selectedPack);
        }
      });
    });
  }

  if (W.document.readyState === "loading") {
    W.document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
