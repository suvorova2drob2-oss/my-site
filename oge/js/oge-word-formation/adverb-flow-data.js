/**
 * OGE Word Formation Gym · Adverb Flow (Understanding adverbs) — standalone pack.
 */
(function (w) {
  "use strict";

  function adv(id, before, after, cue, word, extra) {
    var answers = [word];
    if (extra) answers = answers.concat(extra);
    return {
      id: id,
      before: before,
      after: after,
      cue: cue,
      answers: answers,
      expected: word
    };
  }

  w.OGE_ADVERB_FLOW = {
    id: "adverb-flow",
    label: "Adverb Flow",
    blurb: "Adjective + -ly · happy → happily — ten sentences from the book.",
    rules: [
      "Most adverbs = adjective + -ly",
      "Adjective in -y → -ily (happy → happily)",
      "Irregular: good → well, bad → badly"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1 · A",
        title: "Write the adverb",
        instruction: "Write the correct form of the word in capitals in each gap.",
        kind: "type",
        items: [
          adv("1", "I", "do my homework in my bedroom.", "USUAL", "usually"),
          adv("2", "Gwen did quite", "in her maths test.", "BAD", "badly"),
          adv("3", "You'll", "pass the exam.", "EASY", "easily"),
          adv("4", "He's", "struggling with his coursework.", "CLEAR", "clearly"),
          adv("5", "I've", "finished the essay.", "FINAL", "finally")
        ]
      },
      {
        id: "2",
        kicker: "Exercise 1 · B",
        title: "Write the adverb",
        instruction: "Write the correct form of the word in capitals in each gap.",
        kind: "type",
        items: [
          adv("6", "They have been", "married for 50 years.", "HAPPY", "happily"),
          adv("7", "I", "knew something was wrong.", "IMMEDIATE", "immediately"),
          adv(
            "8",
            "I know she seems shy, but she's",
            "very funny when you get to know her.",
            "ACTUAL",
            "actually"
          ),
          adv("9", "Have you had a holiday", "?", "RECENT", "recently"),
          adv("10", "We", "go abroad for a couple of weeks in the summer.", "NORMAL", "normally")
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
