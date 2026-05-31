/**
 * ЕГЭ Listening · TFNS задание 2 — эталонный движок (для агентов).
 * window.__EGE_LISTENING_TFNS_MANIFEST__
 *
 * Новый юнит = только listening-tfns-units/uN-*.js + script в HTML.
 * Золотой образец: u1-summer-volunteer.js
 * Правило: .cursor/rules/ege-listening-tfns.mdc
 */
(function (w) {
  w.__EGE_LISTENING_TFNS_MANIFEST__ = {
    version: 2,
    track: "ege",
    trackOnly: true,
    notForTracks: ["cpe", "fce"],
    learnerHome: "ege.html",
    deployTrack: "ege",
    agentRule: ".cursor/rules/ege-listening-tfns.mdc",
    trackIndexRule: ".cursor/rules/ege-listening-three-engines.mdc",
    goldenUnit: "js/ege-listening/listening-tfns-units/u1-summer-volunteer.js",
    pageShell: "ege-listening-tfns.html",
    hubLink: "ege-listening.html",
    css: ["css/ege-listening-tfns.css", "css/ege-listening-matching.css"],
    dataBootstrap: "js/ege-listening/ege-listening-tfns-data.js",
    unitsDir: "js/ege-listening/listening-tfns-units/",
    appFile: "js/ege-listening/ege-listening-tfns-app.js",
    huntFile: "js/ege-listening/ege-listening-tfns-hunt.js",
    statsBridge: "js/ege-listening/ege-listening-tfns-stats-bridge.js",
    statsKey: "ege_listening_tfns_scores",
    statsSkill: "Listening: True / False / Not Stated",
    quickDictionaryEngine: "js/ege/ege-quick-dictionary-drawer.js",
    shadowingEngine: "js/ege/ege-listening-shadowing-engine.js",
    shadowPrefix: "ege-lm-sh",
    shadowDialogueMode: true,
    huntEngine: "js/ege-listening/ege-listening-tfns-hunt.js",
    cheerContext: "listening-tfns",
    stages: [
      {
        id: "tfns",
        title: "Этап 1 · True / False / Not Stated A–G",
        ui: "+ / − / ? buttons; check feedback 3-part; compact summary"
      },
      {
        id: "hunt",
        title: "Этап 2 · Разбор в тексте",
        engine: "js/ege-listening/ege-listening-tfns-hunt.js",
        ui: "dialogueParagraphs + paragraphIndex; green brush; NS read-only"
      },
      {
        id: "shadowing",
        title: "Этап 3 · Аудиосуфлирование",
        engine: "js/ege/ege-listening-shadowing-engine.js",
        dictionary: "js/ege/ege-quick-dictionary-drawer.js",
        ui: "one paragraph per screen; next button; no progress slider in dialogue mode"
      }
    ],
    checkFeedback: {
      correct: ["Твой вариант", "Потому что"],
      wrong: ["Твой вариант", "Правильный вариант + потому что", "Почему твой неверный (button confusion only)"],
      summary: "compact letter + answers only, no long text"
    },
    scriptOrder: [
      "js/ege-listening/ege-listening-tfns-data.js",
      "js/ege-listening/listening-tfns-units/uN-….js",
      "js/ege/ege-exam-cheer-rail.js",
      "js/ege-listening/ege-listening-tfns-stats-bridge.js",
      "js/ege/ege-quick-dictionary-drawer.js",
      "js/ege/ege-listening-shadowing-engine.js",
      "js/ege-listening/ege-listening-tfns-hunt.js",
      "js/ege-listening/ege-listening-tfns-manifest.js",
      "js/ege-listening/ege-listening-tfns-app.js"
    ],
    newUnitSteps: [
      "Copy u1-summer-volunteer.js → uN-slug.js",
      "Fill statements (7), key, dialogueParagraphs, huntLabs (7), shadowSpeakers + phrases (20–30+ each)",
      "Add script tag in ege-listening-tfns.html after bootstrap",
      "Do not fork app/hunt/shadow/CSS"
    ],
    unitFields: {
      required: [
        "id",
        "title",
        "audioSrc",
        "statements",
        "key",
        "dialogueParagraphs",
        "huntLabs",
        "shadowSpeakers"
      ],
      statements: "{ letter: 'A'..'G', text }",
      key: "{ A: 't'|'f'|'ns', … }",
      dialogueParagraphs:
        "{ turns: [{ speaker: string, text: string }] }[] — shared by hunt + shadow",
      huntLab:
        "{ letter, key, paragraphIndex, keyLineRu, explainRu?, nsExplainRu?, evidencePromptRu?, segments: hit[] }",
      shadowSpeaker:
        "{ id, label, fullText, phrases: [{ en, ru, tip? }] (20–30+), chunks? (legacy per-speaker mode) }",
      phrasesPolicy: "ege-quick-dictionary-phrases-policy.mdc"
    }
  };
})(typeof window !== "undefined" ? window : this);
