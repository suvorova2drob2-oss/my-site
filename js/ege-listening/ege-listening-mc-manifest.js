/**
 * ЕГЭ Listening MC — манифест для агентов.
 * window.__EGE_LISTENING_MC_MANIFEST__
 */
(function (w) {
  w.__EGE_LISTENING_MC_MANIFEST__ = {
    version: 1,
    locked: true,
    track: "ege",
    trackOnly: true,
    notForTracks: ["cpe", "fce"],
    learnerHome: "ege.html",
    deployTrack: "ege",
    taskLabel: "ЕГЭ Listening · задание 3 · Multiple Choice · вопросы 3–9",
    siblingEngines: {
      matching: "js/ege-listening/ege-listening-matching-manifest.js",
      tfns: "js/ege-listening/ege-listening-tfns-manifest.js"
    },
    trackIndexRule: ".cursor/rules/ege-listening-three-engines.mdc",
    goldenUnit: "js/ege-listening/listening-mc-units/u1-maya-artist.js",
    agentRule: ".cursor/rules/ege-listening-mc.mdc",
    pageShell: "ege-listening-mc.html",
    css: ["css/ege-listening-mc.css", "css/ege-listening-matching.css"],
    dataBootstrap: "js/ege-listening/ege-listening-mc-data.js",
    unitsDir: "js/ege-listening/listening-mc-units/",
    appFile: "js/ege-listening/ege-listening-mc-app.js",
    huntFile: "js/ege-listening/ege-listening-mc-hunt.js",
    statsBridge: "js/ege-listening/ege-listening-mc-stats-bridge.js",
    statsKey: "ege_listening_mc_scores",
    skillName: "Listening: Multiple Choice",
    shadowEngine: "js/ege/ege-listening-shadowing-engine.js",
    dictEngine: "js/ege/ege-quick-dictionary-drawer.js",
    huntEngine: "js/ege-listening/ege-listening-mc-hunt.js",
    cheerContext: "listening-mc",
    scriptOrder: [
      "js/ege-listening/ege-listening-mc-data.js",
      "js/ege-listening/listening-mc-units/uN-….js",
      "js/ege/ege-exam-cheer-rail.js",
      "js/ege-listening/ege-listening-mc-stats-bridge.js",
      "js/ege/ege-quick-dictionary-drawer.js",
      "js/ege/ege-listening-shadowing-engine.js",
      "js/ege-listening/ege-listening-mc-hunt.js",
      "js/ege-listening/ege-listening-mc-manifest.js",
      "js/ege-listening/ege-listening-mc-app.js"
    ],
    rolloutChecklist: [
      "Copy u1-maya-artist.js → uN-….js",
      "Fill audio, questions 3–9 (key 1|2|3, explainRu, distractorWrongRu)",
      "huntLabs: sol:e evidence + sol:d only with distractExplainRu + wrongOption",
      "dialogueParagraphs + shadowSpeakers (20–30+ phrases per speaker)",
      "Add script tag in ege-listening-mc.html after bootstrap",
      "Do not fork app/hunt/CSS unless UX change requested"
    ],
    huntContract: {
      sidebarOrder: ["correctOption", "wrongOptionsThink", "paraphraseTask"],
      wrongOptionPattern: "Можно подумать → В записи → Но это другое",
      distractorSegmentRequires: ["distractExplainRu"],
      optionalDistractorFields: ["wrongOption"],
      redBrushHiddenWhen: "no explained sol:d segments"
    }
  };
})(typeof window !== "undefined" ? window : this);
