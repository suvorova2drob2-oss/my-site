/**
 * Placeholder 100:1 + Glass bridge packs for units without bespoke content yet.
 * window.FCE_BOARDS_FALLBACK
 */
(function (W) {
  "use strict";

  function genericHundred(unit) {
    return [
      {
        topic: "Unit " + unit + " · placeholder round 1",
        q: "Name things learners should remember from this unit's reading / listening (teacher fills real answers in <code>js/unit" + unit + "-class-games-boards.js</code>).",
        hintTitle: "Placeholder",
        hintPassage: "Add unit-specific rounds to js/unit" + unit + "-class-games-boards.js — copy the shape from js/unit1-class-games-boards.js or unit3-digital-detox/data/u3-games-content.js.",
        board: [
          { t: "Key phrase 1 from the unit text", pts: 100 },
          { t: "Key phrase 2 from the unit text", pts: 80 },
          { t: "Key phrase 3 from the unit text", pts: 60 },
          { t: "Key phrase 4 from the unit text", pts: 40 },
          { t: "Key phrase 5 from the unit text", pts: 20 }
        ],
        decoys: [
          "Random phrase from another unit (decoy)",
          "Opposite meaning of the text (decoy)",
          "Made-up joke line — not in the book (decoy)",
          "Swapped names / numbers (decoy)"
        ]
      },
      {
        topic: "Unit " + unit + " · placeholder round 2",
        q: "Second round — another chunk of the same unit (replace with real topic + board).",
        hintTitle: "Placeholder",
        hintPassage: "This is a playable stub so the engine works on every unit hub. Replace with verbatim phrases from the coursebook.",
        board: [
          { t: "Collocation or cool word A", pts: 100 },
          { t: "Collocation or cool word B", pts: 80 },
          { t: "Collocation or cool word C", pts: 60 },
          { t: "Collocation or cool word D", pts: 40 },
          { t: "Collocation or cool word E", pts: 20 }
        ],
        decoys: [
          "Distractor that sounds plausible (decoy)",
          "Line from a different speaker (decoy)",
          "Humorous nonsense (decoy)",
          "Exam trap — similar spelling (decoy)"
        ]
      }
    ];
  }

  function genericGlass(unit) {
    var steps = [];
    var pairs = [
      { text: "Step 1: pick the real collocation from this unit.", good: "on track", bad: "on tractor" },
      { text: "Step 2: pick the phrase that matches the listening script.", good: "make a living", bad: "make a leaving" },
      { text: "Step 3: pick the cool word — not the near-miss.", good: "settle down", bad: "settle up" },
      { text: "Step 4: pick the line that appears in the text.", good: "out like a light", bad: "out like a kite" },
      { text: "Step 5: pick the ethical / clothes collocation.", good: "ethical clothing", bad: "ethereal clothing" },
      { text: "Step 6: pick the lifestyle phrase.", good: "lose track of time", bad: "lose track of thyme" },
      { text: "Step 7: pick the vet / job phrase.", good: "put some people off", bad: "put some people on" },
      { text: "Step 8: pick the charity-shop idea.", good: "charity shops", bad: "charity stops" },
      { text: "Step 9: final step — pick the correct chunk.", good: "catch up on my sleep", bad: "catch up on my sheep" }
    ];
    for (var i = 0; i < pairs.length; i++) {
      steps.push({
        text: pairs[i].text + " (Unit " + unit + " stub — replace in data file.)",
        good: pairs[i].good,
        bad: pairs[i].bad,
        hintTitle: "Unit " + unit + " placeholder",
        hintPassage: "Replace js/unit" + unit + "-class-games-boards.js with real good/bad pairs from the unit."
      });
    }
    return steps;
  }

  function genericAlias(unit) {
    var steps = genericGlass(unit);
    var packs = ["lifestyle", "lifestyle", "lifestyle", "clothes", "clothes", "get", "get", "run", "run"];
    return steps.map(function (s, i) {
      return {
        phrase: s.good,
        pack: packs[i] || "lifestyle",
        topicId: packs[i] || "lifestyle",
        hint: s.hintTitle || "Unit " + unit + " placeholder"
      };
    });
  }

  W.FCE_BOARDS_FALLBACK = {
    isPlaceholder: true,
    getHundred: genericHundred,
    getGlass: genericGlass,
    getAlias: genericAlias
  };
})(typeof window !== "undefined" ? window : globalThis);
