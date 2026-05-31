/**
 * ЕГЭ Listening · Matching задание 1 — карта движков (для агентов).
 * window.__EGE_LISTENING_MATCHING_MANIFEST__
 */
(function (w) {
  w.__EGE_LISTENING_MATCHING_MANIFEST__ = {
    version: 1,
    pageShell: "ege-listening-matching.html",
    css: "css/ege-listening-matching.css",
    dataBootstrap: "js/ege-listening/ege-listening-matching-data.js",
    unitsDir: "js/ege-listening/listening-matching-units/",
    appFile: "js/ege-listening/ege-listening-matching-app.js",
    statsBridge: "js/ege-listening/ege-listening-matching-stats-bridge.js",
    quickDictionaryEngine: "js/ege/ege-quick-dictionary-drawer.js",
    shadowingEngine: "js/ege/ege-listening-shadowing-engine.js",
    huntEngine: "js/ege/ege-guided-transcript-hunt.js",
    stages: [
      { id: "matching", title: "Этап 1 · Matching A–F ↔ 1–7" },
      { id: "hunt", title: "Этап 2 · Разбор парафраз", engine: "js/ege/ege-guided-transcript-hunt.js" },
      {
        id: "shadowing",
        title: "Этап 3 · Аудиосуфлирование",
        engine: "js/ege/ege-listening-shadowing-engine.js",
        dictionary: "js/ege/ege-quick-dictionary-drawer.js"
      }
    ],
    scriptOrder: [
      "js/ege-listening/ege-listening-matching-data.js",
      "js/ege-listening/listening-matching-units/uN-….js",
      "js/ege/ege-exam-cheer-rail.js",
      "js/ege-listening/ege-listening-matching-stats-bridge.js",
      "js/ege/ege-guided-transcript-hunt.js",
      "js/ege/ege-quick-dictionary-drawer.js",
      "js/ege/ege-listening-shadowing-engine.js",
      "js/ege-listening/ege-listening-matching-evidence-hunt.js",
      "js/ege-listening/ege-listening-matching-app.js"
    ],
    unitFields: {
      shadowSpeaker:
        "{ id, label, fullText, phrases: [{ en, ru, tip? }], chunks: [{ text }] }"
    }
  };
})(typeof window !== "undefined" ? window : this);
