/**
 * Unit 11 — Reading: Confronting issues (texts A–D).
 * Memorable phrases from the articles: vivid enough to explain in Alias and take into
 * long-term memory (images, problems, mechanisms) — not bare names or opaque one-word labels.
 * Wording follows the texts / dotted glossary where possible.
 * @see unit11-reading-confronting-issues/alias-confronting-issues.html
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  G.U11_MUST_KNOW_SPEAKER = "Confronting issues";

  /** @type {string[]} */
  G.U11_CONFRONTING_MUST_KNOW = [
    "reclaim it from the sea",
    "put enormous pressure on the environment",
    "fish stocks",
    "water scarcity",
    "cloud seeding",
    "increase precipitation",
    "open to debate",
    "increasing amount of press attention",
    "something out of a science fiction novel",
    "Nemo's Garden",
    "very much a reality",
    "come up with the concept",
    "started off growing basil",
    "no pests can wander in",
    "sea water evaporates and condenses",
    "drips back down as fresh water",
    "a sustainable form of agriculture",
    "a streetlamp powered by dog waste",
    "dog walkers",
    "pick up their pet's mess",
    "turn a handle",
    "biodigester",
    "methane which fuels the light"
  ];

  /** For "What is missing?": same phrases minus strings that are mostly names / brands. */
  G.U11_WHAT_MISSING_DECK = G.U11_CONFRONTING_MUST_KNOW.filter(function (p) {
    return !/Nemo|Noli|Nanhui|Riviera|Harper|Brian|Garden/i.test(p);
  });

  /**
   * Curated 15 “key” lines for the What is missing? bank (all shown on screen; play uses one at a time).
   * @type {string[]}
   */
  G.U11_KEY_PHRASES_MISSING = [
    "reclaim it from the sea",
    "put enormous pressure on the environment",
    "fish stocks",
    "water scarcity",
    "cloud seeding",
    "increase precipitation",
    "open to debate",
    "increasing amount of press attention",
    "something out of a science fiction novel",
    "very much a reality",
    "come up with the concept",
    "sea water evaporates and condenses",
    "a sustainable form of agriculture",
    "a streetlamp powered by dog waste",
    "drips back down as fresh water"
  ];
})(typeof globalThis !== "undefined" ? globalThis : this);
