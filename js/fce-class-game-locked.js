/**
 * Shared lock screen for retired Class Games formats.
 * Include as first script in body on locked game pages.
 */
(function () {
  "use strict";
  var name =
    (document.body && document.body.getAttribute("data-locked-game")) ||
    document.title ||
    "This game";
  document.documentElement.classList.add("cg-game-locked");
  var overlay = document.createElement("div");
  overlay.className = "cg-lock-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-labelledby", "cg-lock-title");
  overlay.innerHTML =
    '<div class="cg-lock-card">' +
    '<p class="cg-lock-kicker">🔒 Coming soon</p>' +
    '<h1 id="cg-lock-title">' +
    String(name).replace(/</g, "&lt;") +
    "</h1>" +
    "<p>Этот формат временно закрыт во всех юнитах. Выберите другую игру в хабе.</p>" +
    '<p class="cg-lock-actions"><a class="cg-lock-back" href="index.html">&larr; Class Games hub</a></p>' +
    "</div>";
  var style = document.createElement("style");
  style.textContent =
    "html.cg-game-locked,html.cg-game-locked body{overflow:hidden!important;}" +
    "html.cg-game-locked body>*:not(.cg-lock-overlay){visibility:hidden!important;pointer-events:none!important;}" +
    ".cg-lock-overlay{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;" +
    "padding:24px;background:linear-gradient(180deg,#09122a 0%,#101d3c 100%);visibility:visible!important;pointer-events:auto!important;}" +
    ".cg-lock-card{max-width:420px;width:100%;padding:28px 24px;border-radius:16px;border:1px solid #324a71;" +
    "background:#1d2b4a;color:#e8f0ff;font-family:Manrope,Segoe UI,sans-serif;text-align:center;}" +
    ".cg-lock-kicker{color:#86efac;font-weight:800;letter-spacing:.04em;margin:0 0 10px;}" +
    ".cg-lock-card h1{font-size:1.15rem;line-height:1.35;margin:0 0 12px;}" +
    ".cg-lock-card p{color:#9bb0d3;font-size:.92rem;line-height:1.45;margin:0;}" +
    ".cg-lock-actions{margin-top:18px!important;}" +
    ".cg-lock-back{display:inline-block;color:#56ccf2;font-weight:700;text-decoration:none;" +
    "padding:8px 12px;border-radius:999px;border:1px solid rgba(94,200,240,.28);background:rgba(10,20,38,.45);}" +
    ".cg-lock-back:hover{background:rgba(94,200,240,.1);}";
  document.head.appendChild(style);
  function mount() {
    if (!document.body) return;
    document.body.appendChild(overlay);
  }
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
