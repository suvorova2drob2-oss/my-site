/**
 * Unit 6 · WB Friends Like These — Phrases FAB.
 */
(function (W) {
  "use strict";

  function boot() {
    var api = W.FCE_U6_FRIENDS_WB_LEXIS;
    if (!api || !W.FCE_COOL_PHRASES_DRAWER || typeof api.drawerSpeakers !== "function") {
      return;
    }

    W.FCE_COOL_PHRASES_DRAWER.mount({
      id: "u6-friends-wb",
      speakers: api.drawerSpeakers(),
      fabLine1: "Phrases",
      fabLine2: "Friends",
      fabTitle: "Phrases · Friends Like These",
      drawerTitle: "Phrases · Workbook reading",
      drawerAria: "Friends Like These workbook phrases",
      speakerSelectLabel: "Text"
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
