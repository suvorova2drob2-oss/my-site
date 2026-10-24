/**
 * Unit 12 · SB 12.1 Listening — Cool phrases FAB.
 */
(function (W) {
  "use strict";

  function boot() {
    var api = W.FCE_U12_SB121_LEXIS;
    if (!api || !W.FCE_COOL_PHRASES_DRAWER || typeof api.drawerSpeakers !== "function") {
      return;
    }

    W.FCE_COOL_PHRASES_DRAWER.mount({
      id: "u12-sb121",
      speakers: api.drawerSpeakers(),
      trackAudioSrc: api.trackAudio || "",
      fabLine1: "Cool",
      fabLine2: "phrases",
      fabTitle: "Cool phrases",
      drawerTitle: "Cool phrases",
      drawerAria: "SB 12.1 Cool phrases",
      speakerSelectLabel: "Speaker"
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
