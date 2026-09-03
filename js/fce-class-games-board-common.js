/**
 * Shared boot helpers — Class games Alias / Pictionary pages.
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

  function paintNav(unit, meta) {
    var nav = el("apNav");
    if (!nav) return;
    nav.innerHTML =
      '<a class="back" href="' +
      meta.hub +
      '">&larr; Class games</a> · <a href="' +
      meta.unitHome +
      '">Unit ' +
      unit +
      "</a>";
  }

  function paintPlaceholderBanner(unit, placeholder) {
    var banner = el("apPlaceholderBanner");
    if (!banner) return;
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

  function formatTimer(sec) {
    var s = Math.max(0, Math.floor(Number(sec) || 0));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function isStudentJoin() {
    return new URLSearchParams(W.location.search || "").get("as") === "student";
  }

  W.FCE_CLASS_GAMES_BOARD_COMMON = {
    PACK_DEFS: PACK_DEFS,
    TOPIC_LIST: TOPIC_LIST,
    el: el,
    readPack: readPack,
    writePack: writePack,
    loadScripts: loadScripts,
    unitDataScripts: unitDataScripts,
    syncHiddenPacks: syncHiddenPacks,
    paintNav: paintNav,
    paintPlaceholderBanner: paintPlaceholderBanner,
    paintPackTabs: paintPackTabs,
    formatTimer: formatTimer,
    isStudentJoin: isStudentJoin
  };
})(typeof window !== "undefined" ? window : globalThis);
