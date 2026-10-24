/**
 * Unit 12 FCE · "On" idioms (word box) — meme flip cards.
 * Images: unit12-vocabulary/on-idioms-gap-fill/memes/img/*.jpg
 * window.UNIT12_ON_IDIOMS_MEME_CARDS
 */
(function (global) {
  "use strict";

  function card(id, headword, sentence, highlight) {
    return {
      id: id,
      img: "img/" + id + ".jpg",
      hints: [],
      headword: headword,
      sentence: sentence,
      example: sentence,
      highlight: highlight || headword
    };
  }

  global.UNIT12_ON_IDIOMS_MEME_CARDS = [
    card(
      "on-wrong-foot",
      "get off on the wrong foot",
      "Henry and Mark really got off on the wrong foot, but they are the best of friends now.",
      "got off on the wrong foot"
    ),
    card(
      "on-last-legs",
      "on its last legs",
      "I think our TV is on its last legs — it keeps turning itself off.",
      "on its last legs"
    ),
    card(
      "on-second-thoughts",
      "on second thoughts",
      "I was going to drive the car, but on second thoughts, I'll walk as it's such a nice day.",
      "on second thoughts"
    ),
    card(
      "on-the-fence",
      "on the fence",
      "I'm really on the fence about moving to the countryside or not.",
      "on the fence"
    ),
    card(
      "on-icing-cake",
      "the icing on the cake",
      "I found out I passed my driving test, but the icing on the cake was finding out my parents bought me a car!",
      "the icing on the cake"
    ),
    card(
      "on-think-feet",
      "think on one's feet",
      "Mary had to really think on her feet when she was asked to make a speech.",
      "think on her feet"
    ),
    card(
      "on-deaf-ears",
      "fall on deaf ears",
      "I told him to tidy his room, but it fell on deaf ears.",
      "fell on deaf ears"
    )
  ];
})(typeof window !== "undefined" ? window : globalThis);
