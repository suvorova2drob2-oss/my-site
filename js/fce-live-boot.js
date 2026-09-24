/**
 * FCE — same Live classroom FAB as EGE / OGE (bottom-right).
 * Loads the shared room bar and mounts it on Mastering B2 pages.
 * Local: http://127.0.0.1:8787/… (not file://).
 */
(function (w) {
  "use strict";

  var TAG = "/js/fce-live-boot.js?v=1";

  function pathName() {
    try {
      return decodeURIComponent(String(w.location.pathname || ""));
    } catch (e) {
      return String(w.location.pathname || "");
    }
  }

  function isFceSurface() {
    if (document.getElementById("ege-live-root")) return false;
    if (document.querySelector("script[src*='fce-class-live-ttt'], script[src*='fce-class-pict-live']")) {
      return false;
    }
    var body = document.body;
    if (body && body.hasAttribute("data-no-fce-live")) return false;

    var low = pathName().toLowerCase();
    if (/^\/(ege|oge)(\/|$)/.test(low)) return false;
    if (low.indexOf("/cpe/") >= 0) return false;

    var deploy = w.__PREP_DEPLOY_TRACK__;
    var page = w.__PREP_PAGE_TRACK__;
    if (deploy === "cpe" || deploy === "ege" || deploy === "oge") return false;
    if (page === "cpe" || page === "ege" || page === "oge") return false;
    if (deploy === "fce" || page === "fce") return true;

    if (/\/fce\.html$/i.test(low)) return true;
    if (/\/unit\d+\.html$/i.test(low)) return true;
    if (/(^|\/)(grammar|use-of-english|listening|class-games)\//i.test(low)) return true;
    if (/\/unit\d+-/i.test(low)) return true;
    if (/\/changes at school\//i.test(low)) return true;
    if (/\/(retell-check|exam-numbered-gaps)\.html$/i.test(low)) return true;
    if (document.body && document.body.hasAttribute("data-mb2-unit")) return true;
    return false;
  }

  function deckPrefix() {
    var body = document.body;
    if (body) {
      var attr = body.getAttribute("data-fce-live-deck");
      if (attr) return String(attr).slice(0, 80);
    }
    var p = pathName().replace(/^\//, "").replace(/\.html$/i, "");
    p = p.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
    if (!p) p = "page";
    var id = "fce-" + p;
    return id.slice(0, 80);
  }

  function onRestart() {
    var sel =
      document.querySelector("[data-fce-reset]") ||
      document.querySelector(".part2-btn-reset") ||
      document.querySelector("[data-reset]") ||
      document.getElementById("reset");
    if (sel && typeof sel.click === "function") sel.click();
  }

  function scrapeScore() {
    var text = "";
    try {
      text = document.body ? document.body.innerText || "" : "";
    } catch (e) {
      return;
    }
    var m = text.match(/Score:\s*(\d+)\s*\/\s*(\d+)/i);
    if (!m) return;
    var ok = Number(m[1]);
    var total = Number(m[2]);
    if (!total || !w.EgeLiveRoom) return;
    w.EgeLiveRoom.notifyProgress({
      correct: ok,
      total: total,
      score: Math.round((ok / total) * 100)
    });
  }

  function watchChecks() {
    document.addEventListener(
      "click",
      function (ev) {
        var t = ev.target;
        if (!t || !t.closest) return;
        var btn = t.closest("button, .part2-btn-check, [data-check]");
        if (!btn) return;
        var label = (btn.textContent || "").toLowerCase();
        if (label.indexOf("check") < 0 && !btn.classList.contains("part2-btn-check")) return;
        w.setTimeout(scrapeScore, 350);
      },
      true
    );
  }

  function siteRoot() {
    var nodes = document.querySelectorAll("script[src*='fce-live-boot.js']");
    var src = nodes.length ? nodes[nodes.length - 1].src : "";
    if (src) return src.replace(/js\/fce-live-boot\.js.*$/i, "");
    try {
      return String(w.location.origin || "") + "/";
    } catch (e) {
      return "/";
    }
  }

  function asset(path) {
    return siteRoot() + String(path || "").replace(/^\//, "");
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.setAttribute("vite-ignore", "");
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error(src));
      };
      document.body.appendChild(s);
    });
  }

  function ensureCss() {
    if (document.querySelector("link[href*='ege-live-room-bar.css']")) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = asset("ege/css/ege-live-room-bar.css?v=20");
    document.head.appendChild(link);
  }

  function mount() {
    if (!w.EgeLiveRoom || typeof w.EgeLiveRoom.mount !== "function") return;
    if (document.getElementById("ege-live-root")) return;
    w.EgeLiveRoom.mount({
      deckPrefix: deckPrefix(),
      getUnitId: function () {
        return "";
      },
      onRestart: onRestart
    });
    var gate = document.getElementById("ege-live-student-gate");
    var kick = gate && gate.querySelector(".ege-live-gate-kicker");
    if (kick) kick.textContent = "FCE Live";
    watchChecks();
  }

  function boot() {
    if (w.__FCE_LIVE_BOOT_STARTED__) return;
    if (!isFceSurface()) return;
    w.__FCE_LIVE_BOOT_STARTED__ = true;
    ensureCss();
    var pin = document.createElement("style");
    pin.textContent =
      "#ege-live-fab{position:fixed!important;right:16px!important;bottom:20px!important;z-index:2147483000!important;}";
    document.head.appendChild(pin);
    if (w.EgeLiveRoom && typeof w.EgeLiveRoom.mount === "function") {
      mount();
      return;
    }
    loadScript(asset("js/live-game-api.js"))
      .then(function () {
        return loadScript(asset("js/live-game-api-http.js?v=17"));
      })
      .then(function () {
        return loadScript(asset("ege/js/ege-live-config.js?v=8"));
      })
      .then(function () {
        return loadScript(asset("ege/js/ege-player-name.js"));
      })
      .then(function () {
        return loadScript(asset("ege/js/ege-live-room-bar.js?v=21"));
      })
      .then(mount)
      .catch(function (err) {
        w.__FCE_LIVE_BOOT_STARTED__ = false;
        try {
          console.warn("[fce-live-boot]", err && err.message ? err.message : err);
        } catch (eLog) {}
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  w.__FCE_LIVE_BOOT_TAG__ = TAG;
})(typeof window !== "undefined" ? window : this);
