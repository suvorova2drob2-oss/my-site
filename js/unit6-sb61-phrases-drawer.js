/**
 * Unit 6 · SB 6.1 Listening — Phrases FAB (by speaker).
 */
(function (W) {
  "use strict";

  function boot() {
    var api = W.FCE_U6_SB61_LEXIS;
    if (!api || !W.FCE_COOL_PHRASES_DRAWER || typeof api.drawerSpeakers !== "function") {
      return;
    }

    W.FCE_COOL_PHRASES_DRAWER.mount({
      id: "u6-sb61",
      speakers: api.drawerSpeakers(),
      trackAudioSrc: api.trackAudio || "",
      fabLine1: "Phrases",
      fabLine2: "SB 6.1",
      fabTitle: "Phrases · Relationship problems",
      drawerTitle: "Phrases · SB 6.1",
      drawerAria: "SB 6.1 listening phrases by speaker",
      speakerSelectLabel: "Speaker"
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
