/**
 * Deck id → Cool Words drawer config (Unit 1).
 * window.FCE_U1_COOL_PHRASES.sync(deckId)
 */
(function (W) {
  "use strict";

  var REGISTRY = {
    lifestyle: function () {
      var api = W.FCE_U1_LIFESTYLE_LEXIS;
      if (!api || typeof api.drawerSpeakers !== "function") return null;
      return {
        id: "lifestyle",
        speakers: api.drawerSpeakers(),
        fabLine1: "Phrases",
        fabLine2: "Lifestyle",
        fabTitle: "Lifestyle phrases",
        drawerTitle: "Phrases · Lifestyle",
        drawerAria: "Lifestyle Cool Words",
        speakerSelectLabel: "Person"
      };
    },
    clothes: function () {
      var api = W.FCE_U1_CLOTHES_LEXIS;
      if (!api || typeof api.drawerSpeakers !== "function") return null;
      return {
        id: "clothes",
        speakers: api.drawerSpeakers(),
        fabLine1: "Phrases",
        fabLine2: "Clothes",
        fabTitle: "Clothes phrases",
        drawerTitle: "Phrases · Clothes",
        drawerAria: "Clothes Cool Words",
        speakerSelectLabel: "Speaker"
      };
    }
  };

  var activeId = null;

  function sync(deckId) {
    if (!W.FCE_COOL_PHRASES_DRAWER) return;
    if (!deckId || !REGISTRY[deckId]) {
      if (activeId) {
        W.FCE_COOL_PHRASES_DRAWER.hide(activeId);
        activeId = null;
      }
      return;
    }
    var cfg = REGISTRY[deckId]();
    if (!cfg) return;
    if (activeId && activeId !== cfg.id) {
      W.FCE_COOL_PHRASES_DRAWER.unmount(activeId);
    }
    if (!activeId || activeId !== cfg.id) {
      W.FCE_COOL_PHRASES_DRAWER.mount(cfg);
      activeId = cfg.id;
    }
    W.FCE_COOL_PHRASES_DRAWER.show(cfg.id);
  }

  function clear() {
    if (activeId && W.FCE_COOL_PHRASES_DRAWER) {
      W.FCE_COOL_PHRASES_DRAWER.hide(activeId);
    }
    activeId = null;
  }

  W.FCE_U1_COOL_PHRASES = { sync: sync, clear: clear };
})(typeof window !== "undefined" ? window : globalThis);
