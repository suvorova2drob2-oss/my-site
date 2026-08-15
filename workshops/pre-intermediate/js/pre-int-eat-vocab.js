/**
 * Pre-intermediate · Eat · Beat 1 Vocabulary
 * Coursebook: Complete the sentences with these pairs of words.
 */
(function (global) {
  "use strict";

  var EAT_VOCAB_PAIRS = {
    title: "1 Complete the sentences with these pairs of words.",
    instr: "Each pair is used once. Click a gap, then a pair on the right.",
    pairs: [
      { a: "busy", b: "seat" },
      { a: "choice", b: "options" },
      { a: "disgusting", b: "rude" },
      { a: "dishes", b: "choose" },
      { a: "had", b: "delicious" },
      { a: "place", b: "does" },
      { a: "service", b: "staff" },
      { a: "terrace", b: "view" },
      { a: "value", b: "portions" },
    ],
    items: [
      {
        parts: [
          "There’s a little Japanese",
          "near my office, which",
          "great sushi!",
        ],
        answers: ["place", "does"],
      },
      {
        parts: [
          "It often gets really",
          ", so you sometimes have to wait for a while to get a",
          ".",
        ],
        answers: ["busy", "seat"],
      },
      {
        parts: [
          "We often go to a small Spanish place near here. The",
          "is great. The",
          "are always really friendly.",
        ],
        answers: ["service", "staff"],
      },
      {
        parts: [
          "They have a big selection of vegetarian",
          ", so you’ll have plenty to",
          "from.",
        ],
        answers: ["dishes", "choose"],
      },
      {
        parts: [
          "The first time I went there, it was really good",
          ", but I went there again recently and it was quite expensive and the",
          "were much smaller!",
        ],
        answers: ["value", "portions"],
      },
      {
        parts: [
          "I went there once, and I had this dish which tasted",
          ", but when I complained about it, the waiter was quite",
          ".",
        ],
        answers: ["disgusting", "rude"],
      },
      {
        parts: [
          "They have a fixed menu, and there isn’t much",
          ". There are usually just two or three",
          "for each course.",
        ],
        answers: ["choice", "options"],
      },
      {
        parts: [
          "It’s great. You can sit outside on the",
          "there and get an incredible",
          "over the city.",
        ],
        answers: ["terrace", "view"],
      },
      {
        parts: [
          "I really want to go there again. I",
          "this amazing seafood dish when I went there. In fact it was all really",
          ", but it’s also really expensive.",
        ],
        answers: ["had", "delicious"],
      },
    ],
  };

  global.PRE_INT_EAT_VOCAB_PAIRS = EAT_VOCAB_PAIRS;
})(typeof window !== "undefined" ? window : globalThis);
