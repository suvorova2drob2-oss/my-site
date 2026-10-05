/**
 * Unit 6 · Petrosillo sisters reading — Phrases FAB.
 */
(function (W) {
  "use strict";

  function boot() {
    var api = W.FCE_U6_PETROSILLO_LEXIS;
    if (!api || !W.FCE_COOL_PHRASES_DRAWER || typeof api.drawerSpeakers !== "function") {
      return;
    }

    W.FCE_COOL_PHRASES_DRAWER.mount({
      id: "u6-petrosillo",
      speakers: api.drawerSpeakers(),
      fabLine1: "Phrases",
      fabLine2: "Two sisters",
      fabTitle: "Phrases · Clara and Silvia Petrosillo",
      drawerTitle: "Phrases · Two sisters",
      drawerAria: "Petrosillo sisters reading phrases",
      speakerSelectLabel: "Text"
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
