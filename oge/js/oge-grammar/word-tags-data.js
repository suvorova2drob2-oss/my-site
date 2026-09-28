/**
 * OGE Grammar Gym · Word Tags (Understanding parts of speech) — standalone pack.
 */
(function (w) {
  "use strict";

  var WORD_BANK = [
    "actually",
    "amazing",
    "apologise",
    "artist",
    "cloudy",
    "disconnect",
    "entertainment",
    "friendship",
    "helpless",
    "quickly",
    "really",
    "recently",
    "reconsider",
    "suddenly",
    "tired"
  ];

  var POS = ["noun", "verb", "adjective", "adverb"];

  function posItem(id, prompt, answer) {
    return {
      id: id,
      prompt: prompt,
      choices: POS.slice(),
      answer: answer
    };
  }

  function wordItem(id, parts, word, extra) {
    var answers = [word];
    if (extra) answers = answers.concat(extra);
    return {
      id: id,
      parts: parts,
      gaps: [{ answers: answers, expected: word }]
    };
  }

  w.OGE_WORD_TAGS = {
    id: "word-tags",
    label: "Word Tags",
    blurb: "Tag noun / verb / adjective / adverb — then drop all 15 words into the right gaps.",
    rules: [
      "Exercise 1 · what part of speech fits the gap?",
      "Exercise 2 · one word box, 15 sentences — use each word once",
      "Hint: an + noun · very + adjective · verb after Don't / Please"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1 · A",
        title: "Part of speech",
        instruction:
          "Decide what part of speech (noun, verb, adjective or adverb) probably fills each gap.",
        kind: "choice",
        items: [
          posItem("1", "My uncle is an ______.", "noun"),
          posItem("2", "My uncle is an ______ person.", "adjective"),
          posItem("3", "My uncle's a ______ amazing person.", "adverb"),
          posItem("4", "Adam ran ______ down the stairs.", "adverb"),
          posItem("5", "It's very ______ today.", "adjective")
        ]
      },
      {
        id: "2",
        kicker: "Exercise 1 · B",
        title: "Part of speech",
        instruction:
          "Decide what part of speech (noun, verb, adjective or adverb) probably fills each gap.",
        kind: "choice",
        items: [
          posItem("6", "Without ______, life can be very lonely.", "noun"),
          posItem("7", "Don't ______ the external hard drive from the computer yet.", "verb"),
          posItem("8", "I've ______ started going to a gym.", "adverb"),
          posItem("9", "There's going to be some great ______ at the party.", "noun"),
          posItem("10", "______ to Harry for being rude to him.", "verb")
        ]
      },
      {
        id: "3",
        kicker: "Exercise 1 · C",
        title: "Part of speech",
        instruction:
          "Decide what part of speech (noun, verb, adjective or adverb) probably fills each gap.",
        kind: "choice",
        items: [
          posItem("11", "Please ______!", "verb"),
          posItem("12", "The door opened ______ and in walked Brian.", "adverb"),
          posItem("13", "I felt ______ and had no idea what to do.", "adjective"),
          posItem("14", "She seemed ______ when I saw her yesterday.", "adjective"),
          posItem("15", "It's ______ much easier than I thought it was.", "adverb")
        ]
      },
      {
        id: "4",
        kicker: "Exercise 2 · A",
        title: "Words from the box",
        instruction: "Write a word from the box in each gap in Exercise 1. Use all the words.",
        kind: "bank",
        bank: WORD_BANK.slice(),
        items: [
          wordItem("1", ["My uncle is an ", "."], "artist"),
          wordItem("2", ["My uncle is an ", " person."], "amazing"),
          wordItem("3", ["My uncle's a ", " amazing person."], "really"),
          wordItem("4", ["Adam ran ", " down the stairs."], "quickly"),
          wordItem("5", ["It's very ", " today."], "cloudy")
        ]
      },
      {
        id: "5",
        kicker: "Exercise 2 · B",
        title: "Words from the box",
        instruction: "Write a word from the box in each gap in Exercise 1. Use all the words.",
        kind: "bank",
        bank: WORD_BANK.slice(),
        items: [
          wordItem("6", ["Without ", ", life can be very lonely."], "friendship"),
          wordItem("7", ["Don't ", " the external hard drive from the computer yet."], "disconnect"),
          wordItem("8", ["I've ", " started going to a gym."], "recently"),
          wordItem("9", ["There's going to be some great ", " at the party."], "entertainment"),
          wordItem("10", ["", " to Harry for being rude to him."], "Apologise", ["apologise"])
        ]
      },
      {
        id: "6",
        kicker: "Exercise 2 · C",
        title: "Words from the box",
        instruction: "Write a word from the box in each gap in Exercise 1. Use all the words.",
        kind: "bank",
        bank: WORD_BANK.slice(),
        items: [
          wordItem("11", ["Please ", "!"], "reconsider"),
          wordItem("12", ["The door opened ", " and in walked Brian."], "suddenly"),
          wordItem("13", ["I felt ", " and had no idea what to do."], "helpless"),
          wordItem("14", ["She seemed ", " when I saw her yesterday."], "tired"),
          wordItem("15", ["It's ", " much easier than I thought it was."], "actually")
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
