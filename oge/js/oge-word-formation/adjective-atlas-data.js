/**
 * OGE Word Formation Gym · Adjective Atlas (Understanding adjectives) — standalone pack.
 */
(function (w) {
  "use strict";

  function adj(id, before, after, cue, word, extra) {
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

  function defItem(id, gloss, letter, word, extra) {
    return adj(id, gloss, "", letter + "…", word, extra);
  }

  w.OGE_ADJECTIVE_ATLAS = {
    id: "adjective-atlas",
    label: "Adjective Atlas",
    blurb: "Build adjectives for phrases, match definitions, and negative forms (un-, im-, -less …).",
    rules: [
      "Suffixes: -y, -ic, -ful, -al, -ous, -ive, -able …",
      "Definitions · first letter given in Exercise 2",
      "-less = without · un-/im- for negatives"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1 · A",
        title: "Phrases",
        instruction: "Write a form of the word in capitals in each gap to complete the phrases.",
        kind: "type",
        items: [
          adj("1", "a", "experience", "FRIGHTEN", "frightening"),
          adj("2", "a", "day", "CLOUD", "cloudy"),
          adj("3", "", "music", "CLASS", "classical"),
          adj("4", "a", "puppy", "PLAY", "playful"),
          adj("5", "a", "musician", "FAME", "famous"),
          adj("6", "a", "conversation", "LIVE", "lively")
        ]
      },
      {
        id: "2",
        kicker: "Exercise 1 · B",
        title: "Phrases",
        instruction: "Write a form of the word in capitals in each gap to complete the phrases.",
        kind: "type",
        items: [
          adj("7", "completely", "", "DIFFER", "different"),
          adj("8", "not", "", "ACCEPT", "acceptable"),
          adj("9", "an", "teacher", "ENTHUSIASM", "enthusiastic"),
          adj("10", "a", "author", "RUSSIA", "Russian"),
          adj("11", "an", "idea", "IMAGINE", "imaginative"),
          adj("12", "a", "snake", "DEAD", "deadly")
        ]
      },
      {
        id: "3",
        kicker: "Exercise 2",
        title: "Definitions",
        instruction: "Write an adjective next to each definition. The first letter has been given to help you.",
        kind: "type",
        items: [
          defItem("1", "smiling, happy, friendly:", "c", "cheerful"),
          defItem("2", "very strange:", "m", "mysterious"),
          defItem("3", "wearing the latest trendy clothes:", "f", "fashionable"),
          defItem("4", "costing lots of money:", "e", "expensive"),
          defItem("5", "concerning more than one country:", "i", "international"),
          defItem("6", "by mistake:", "a", "accidental"),
          defItem("7", "really scary:", "t", "terrifying"),
          defItem("8", "a fun experience:", "e", "entertaining")
        ]
      },
      {
        id: "4",
        kicker: "Exercise 3 · A",
        title: "Negative adjectives",
        instruction: "Write a negative form of the word in capitals in each gap.",
        kind: "type",
        items: [
          adj("1", "I felt", "and had no idea what to do.", "HELP", "helpless"),
          adj(
            "2",
            "That shop assistant was really",
            ". I might complain to the manager.",
            "HELP",
            "unhelpful"
          ),
          adj(
            "3",
            "It's",
            "to predict what the world will be like in a thousand years.",
            "POSSIBLE",
            "impossible"
          ),
          adj(
            "4",
            "I felt really",
            "wearing a suit, so was glad to change back into casual clothes.",
            "COMFORT",
            "uncomfortable"
          )
        ]
      },
      {
        id: "5",
        kicker: "Exercise 3 · B",
        title: "Negative adjectives",
        instruction: "Write a negative form of the word in capitals in each gap. (-less = without.)",
        kind: "type",
        items: [
          adj("5", "That snake's", ". It doesn't bite.", "HARM", "harmless"),
          adj("6", "Don't be so", ". Just wait a bit.", "PATIENCE", "impatient"),
          adj("7", "I was", "when I heard what Ted had said to Jo.", "SPEECH", "speechless"),
          adj(
            "8",
            "Candidates who are",
            "will be informed by 24th September.",
            "SUCCEED",
            "unsuccessful"
          )
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
