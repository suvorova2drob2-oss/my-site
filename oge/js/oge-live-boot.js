/**
 * OGE — mount Live classroom FAB if the exam app did not mount yet.
 * Deck prefix: __examLiveDeckOverride → data-oge-live-deck → URL oge-*.html stem.
 */
(function (w) {
  "use strict";

  function deckPrefix() {
    if (w.__examLiveDeckOverride) return String(w.__examLiveDeckOverride);
    var body = document.body;
    if (body) {
      var attr = body.getAttribute("data-oge-live-deck");
      if (attr) return String(attr);
      var def = body.getAttribute("data-oge-live-deck-default");
      if (def && w.__examTrackBridge && typeof w.__examTrackBridge.liveDeckPrefix === "function") {
        return w.__examTrackBridge.liveDeckPrefix(def);
      }
    }
    try {
      var path = String(w.location.pathname || "");
      var m = path.match(/\/(oge-[a-z0-9-]+)\.html$/i);
      if (m) return m[1];
    } catch (eP) {}
    return "";
  }

  function getUnitId() {
    var body = document.body;
    if (body) {
      var u = body.getAttribute("data-oge-live-unit");
      if (u) return String(u);
    }
    try {
      return String(new URLSearchParams(w.location.search).get("unit") || "");
    } catch (eU) {
      return "";
    }
  }

  function onRestart() {
    var sel =
      document.querySelector("[data-oge-reset]") ||
      document.querySelector(".part2-btn-reset") ||
      document.getElementById("ege-lm-reset") ||
      document.getElementById("clearEssay");
    if (sel) sel.click();
  }

  function boot() {
    if (document.getElementById("ege-live-root")) return;
    if (!w.EgeLiveRoom || typeof w.EgeLiveRoom.mount !== "function") return;
    var prefix = deckPrefix();
    if (!prefix) return;
    w.EgeLiveRoom.mount({
      deckPrefix: prefix,
      getUnitId: getUnitId,
      onRestart: onRestart
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
  w.addEventListener("load", boot);
})(typeof window !== "undefined" ? window : this);
