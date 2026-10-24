/**
 * Going vegan Part 7 · Maya (C) — meme phrase cards.
 * window.UNIT12_VEGAN_MAYA_MEME_CARDS
 */
(function (global) {
  "use strict";

  var MAYA =
    "My sister decided to go vegan to see if a plant-based diet would help her feel better while managing a long-term health condition. I decided to support her by going vegan as well. My sister has kept at it faithfully for over five years and shown amazing willpower. I just wish I could say the same for myself. There were too many types of food I missed, and I threw in the towel after a few months. On the plus side, I learnt a surprising amount about nutrition and the health benefits of certain foods. I still eat loads of fruit, nuts, pulses and vegetables, and feel much healthier than I used to.";

  var BASE =
    "../unit12-12-1-restaurants-listening/reading-going-vegan/memes/maya/";

  function card(id, headword, highlight) {
    return {
      id: id,
      img: BASE + id + ".jpg",
      hints: [],
      headword: headword,
      sentence: MAYA,
      example: MAYA,
      highlight: highlight || headword
    };
  }

  global.UNIT12_VEGAN_MAYA_MEME_CARDS = [
    card(
      "maya-kept-faithfully",
      "kept at it faithfully",
      "kept at it faithfully for over five years and shown amazing willpower"
    ),
    card(
      "maya-threw-towel",
      "threw in the towel",
      "I threw in the towel after a few months"
    ),
    card(
      "maya-on-plus-side",
      "On the plus side",
      "On the plus side, I learnt a surprising amount about nutrition and the health benefits of certain foods"
    )
  ];
})(typeof window !== "undefined" ? window : globalThis);
