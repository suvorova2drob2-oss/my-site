/**
 * Going vegan Part 7 · Sarah (B) — meme phrase cards.
 * window.UNIT12_VEGAN_SARAH_MEME_CARDS
 */
(function (global) {
  "use strict";

  var SARAH =
    "I went vegan when I left home and went away to university. My parents were worried I was missing out on essential nutrients and that this could have serious consequences for me. My dad had the biggest problem with it, and he kept sending me articles warning of the pitfalls of a plant-based diet. I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly. Over time, though, they've both gradually come to accept my change to veganism, and that's really important to me, because it's a major part of who I am. My dad even cooks some of the vegan recipes I send him.";

  var BASE =
    "../unit12-12-1-restaurants-listening/reading-going-vegan/memes/sarah/";

  function card(id, headword, highlight) {
    return {
      id: id,
      img: BASE + id + ".jpg",
      hints: [],
      headword: headword,
      sentence: SARAH,
      example: SARAH,
      highlight: highlight || headword
    };
  }

  global.UNIT12_VEGAN_SARAH_MEME_CARDS = [
    card(
      "sarah-missing-nutrients",
      "missing out on essential nutrients",
      "missing out on essential nutrients"
    ),
    card(
      "sarah-warning-pitfalls",
      "warning of the pitfalls",
      "warning of the pitfalls of a plant-based diet"
    ),
    card(
      "sarah-put-mind-at-rest",
      "put his mind at rest",
      "to put his mind at rest"
    ),
    card(
      "sarah-taking-supplements",
      "I was taking supplements",
      "I was taking supplements"
    ),
    card(
      "sarah-reinforce-idea",
      "reinforce his idea",
      "to reinforce his idea that I wasn't eating properly"
    ),
    card(
      "sarah-gradually-accept",
      "they've both gradually come to accept",
      "they've both gradually come to accept my change to veganism"
    )
  ];
})(typeof window !== "undefined" ? window : globalThis);
