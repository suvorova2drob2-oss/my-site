/**
 * Soft preview lock for workshop tracks (except Fleabag).
 * Client-side only — hides from casual visitors, not real security.
 *
 * Unlock lives in sessionStorage for this browser tab.
 * To lock again: close the tab, or in console:
 *   sessionStorage.removeItem("prep_workshop_gate_v1")
 */
(function (global) {
  var STORAGE_KEY = "prep_workshop_gate_v1";
  var PASS = "LaNtern!8";

  function isUnlocked() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function unlock() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {}
  }

  function lockAgain() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function injectStyles() {
    if (document.getElementById("workshop-gate-css")) return;
    var style = document.createElement("style");
    style.id = "workshop-gate-css";
    style.textContent =
      "html.wg-blocked body > *:not(#workshop-gate){visibility:hidden!important;pointer-events:none!important;}" +
      "#workshop-gate{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(2,6,14,.94);backdrop-filter:blur(10px);font-family:Segoe UI,system-ui,sans-serif;visibility:visible!important;pointer-events:auto!important;}" +
      ".wg-panel{width:min(400px,100%);padding:28px 24px;border-radius:18px;border:1px solid rgba(56,189,248,.35);background:linear-gradient(165deg,#0f1a2e,#0a1220);box-shadow:0 24px 64px rgba(0,0,0,.5);color:#e0f2fe;}" +
      ".wg-kicker{margin:0 0 8px;font-size:.7rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#38bdf8;}" +
      ".wg-panel h1{margin:0 0 8px;font-size:1.35rem;color:#f0f9ff;}" +
      ".wg-sub{margin:0 0 18px;color:#94b8d9;line-height:1.45;font-size:.92rem;}" +
      ".wg-label{display:grid;gap:6px;font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#7dd3fc;margin-bottom:10px;}" +
      ".wg-input{padding:12px 14px;border-radius:12px;border:1px solid rgba(56,189,248,.35);background:rgba(8,18,32,.95);color:#f0f9ff;font:inherit;font-size:1rem;text-transform:none;letter-spacing:normal;}" +
      ".wg-err{margin:0 0 10px;color:#fecaca;font-size:.88rem;font-weight:600;}" +
      ".wg-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;}" +
      ".wg-btn{appearance:none;border-radius:999px;padding:12px 18px;font:inherit;font-weight:800;text-decoration:none;cursor:pointer;display:inline-block;text-align:center;}" +
      ".wg-btn--primary{border:0;background:linear-gradient(135deg,#38bdf8,#0284c7);color:#f0f9ff;}" +
      ".wg-btn--ghost{border:1px solid rgba(56,189,248,.35);background:transparent;color:#e0f2fe;}" +
      ".int-track-card[data-workshop-lock] .wg-lock-badge{position:absolute;top:12px;right:12px;z-index:2;font-size:1rem;line-height:1;filter:drop-shadow(0 2px 6px rgba(0,0,0,.5));}";
    document.head.appendChild(style);
  }

  function showGateModal(opts) {
    opts = opts || {};
    injectStyles();
    document.documentElement.classList.add("wg-blocked");

    var existing = document.getElementById("workshop-gate");
    if (existing) existing.remove();

    var home = opts.homeHref || "../../b2-intensive.html";
    var overlay = document.createElement("div");
    overlay.id = "workshop-gate";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML =
      '<div class="wg-panel">' +
      '<p class="wg-kicker">Preview lock</p>' +
      "<h1>Раздел пока закрыт</h1>" +
      "<p class=\"wg-sub\">Fleabag открыт для всех. Остальное — по паролю.</p>" +
      '<label class="wg-label">Пароль' +
      '<input type="password" class="wg-input" autocomplete="current-password" /></label>' +
      '<p class="wg-err" hidden>Неверный пароль</p>' +
      '<div class="wg-actions">' +
      '<button type="button" class="wg-btn wg-btn--primary" data-wg-go>Открыть</button>' +
      (opts.hideHome
        ? ""
        : '<a class="wg-btn wg-btn--ghost" href="' +
          String(home).replace(/"/g, "&quot;") +
          '">← К хабу</a>') +
      "</div></div>";

    function tryUnlock() {
      var input = overlay.querySelector(".wg-input");
      var err = overlay.querySelector(".wg-err");
      if (String(input.value) === PASS) {
        unlock();
        document.documentElement.classList.remove("wg-blocked");
        overlay.remove();
        if (typeof opts.onUnlock === "function") opts.onUnlock();
        return true;
      }
      err.hidden = false;
      input.focus();
      input.select();
      return false;
    }

    function mount() {
      (document.body || document.documentElement).appendChild(overlay);
      var input = overlay.querySelector(".wg-input");
      overlay.querySelector("[data-wg-go]").onclick = tryUnlock;
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") tryUnlock();
      });
      setTimeout(function () {
        input.focus();
      }, 30);
    }

    if (document.body) mount();
    else document.addEventListener("DOMContentLoaded", mount);

    return { tryUnlock: tryUnlock };
  }

  function ensureUnlocked(opts) {
    if (isUnlocked()) return Promise.resolve(true);
    return new Promise(function (resolve) {
      showGateModal({
        homeHref: opts && opts.homeHref,
        hideHome: opts && opts.hideHome,
        onUnlock: function () {
          resolve(true);
        },
      });
    });
  }

  /** Full-page gate for locked workshop pages */
  function guardPage(opts) {
    injectStyles();
    if (isUnlocked()) {
      document.documentElement.classList.remove("wg-blocked");
      return;
    }
    showGateModal(opts || {});
  }

  /** Hub: lock cards with data-workshop-lock */
  function wireHubLocks() {
    injectStyles();
    document.querySelectorAll("a[data-workshop-lock]").forEach(function (a) {
      a.classList.add("is-workshop-locked");
      if (!a.querySelector(".wg-lock-badge")) {
        var b = document.createElement("span");
        b.className = "wg-lock-badge";
        b.setAttribute("aria-hidden", "true");
        b.textContent = "🔒";
        a.appendChild(b);
      }
      a.addEventListener(
        "click",
        function (e) {
          if (isUnlocked()) return;
          e.preventDefault();
          e.stopPropagation();
          showGateModal({
            homeHref: "b2-intensive.html",
            hideHome: true,
            onUnlock: function () {
              global.location.href = a.getAttribute("href");
            },
          });
        },
        true
      );
    });
  }

  global.WorkshopGate = {
    isUnlocked: isUnlocked,
    ensureUnlocked: ensureUnlocked,
    guardPage: guardPage,
    wireHubLocks: wireHubLocks,
    lockAgain: lockAgain,
  };
})(typeof window !== "undefined" ? window : globalThis);
