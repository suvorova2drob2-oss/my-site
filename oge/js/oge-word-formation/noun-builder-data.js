/**
 * OGE Word Formation Gym · Noun Builder (Understanding nouns) — standalone pack.
 */
(function (w) {
  "use strict";

  var EX1_STEMS = [
    ["act", "o"],
    ["bak", "e"],
    ["calculat", "o"],
    ["collect", "o"],
    ["comput", "e"],
    ["conduct", "o"],
    ["cook", "e"],
    ["creat", "o"],
    ["digg", "e"],
    ["direct", "o"],
    ["doct", "o"],
    ["driv", "e"],
    ["edit", "o"],
    ["employ", "e"],
    ["farm", "e"],
    ["invent", "o"],
    ["lead", "e"],
    ["manag", "e"],
    ["mix", "e"],
    ["photograph", "e"],
    ["play", "e"],
    ["print", "e"],
    ["read", "e"],
    ["report", "e"],
    ["sail", "o"],
    ["speak", "e"],
    ["spectat", "o"],
    ["teach", "e"],
    ["visit", "o"],
    ["wait", "e"],
    ["walk", "e"],
    ["writ", "e"]
  ];

  function ex1Items(from, to) {
    var out = [];
    var i;
    for (i = from; i < to && i < EX1_STEMS.length; i++) {
      out.push({
        id: String(i + 1),
        before: EX1_STEMS[i][0],
        after: "r",
        cue: "o / e",
        answers: [EX1_STEMS[i][1]],
        expected: EX1_STEMS[i][1]
      });
    }
    return out;
  }

  function wfType(id, before, after, cue, word, extra) {
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

  function wfFrom(id, base, noun, extra) {
    return wfType(id, base + " →", "", "noun", noun, extra);
  }

  var EX4 = [
    ["author", "authorship"],
    ["aware", "awareness"],
    ["blind", "blindness"],
    ["clever", "cleverness"],
    ["cold", "coldness"],
    ["empty", "emptiness"],
    ["friend", "friendship"],
    ["friendly", "friendliness"],
    ["gentle", "gentleness"],
    ["good", "goodness"],
    ["happy", "happiness"],
    ["ill", "illness"],
    ["kind", "kindness"],
    ["leader", "leadership"],
    ["lonely", "loneliness"],
    ["lovely", "loveliness"],
    ["mad", "madness"],
    ["member", "membership"],
    ["owner", "ownership"],
    ["partner", "partnership"],
    ["relation", "relationship"],
    ["rude", "rudeness"],
    ["sad", "sadness"],
    ["sick", "sickness"],
    ["weak", "weakness"]
  ];

  function ex4Items(from, to) {
    var out = [];
    var i;
    for (i = from; i < to && i < EX4.length; i++) {
      out.push(wfFrom(String(i + 1), EX4[i][0].toUpperCase(), EX4[i][1]));
    }
    return out;
  }

  w.OGE_NOUN_BUILDER = {
    id: "noun-builder",
    label: "Noun Builder",
    blurb:
      "Understanding nouns — -er/-or, -ist, -ness/-ship, -ment, -ion/-ity/-ance and exam-style gaps.",
    rules: [
      "Suffixes: -er/-or · -ist · -ness · -ship · -ment · -ion · -ity · -ance",
      "Watch spelling: happy → happiness · move → movement (drop -e)",
      "Negative prefixes un- / im- / in- (see reference)"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1 · A",
        title: "-er or -or?",
        instruction: "Write o or e in each gap to complete the word.",
        kind: "type",
        items: ex1Items(0, 8)
      },
      {
        id: "2",
        kicker: "Exercise 1 · B",
        title: "-er or -or?",
        instruction: "Write o or e in each gap to complete the word.",
        kind: "type",
        items: ex1Items(8, 16)
      },
      {
        id: "3",
        kicker: "Exercise 1 · C",
        title: "-er or -or?",
        instruction: "Write o or e in each gap to complete the word.",
        kind: "type",
        items: ex1Items(16, 24)
      },
      {
        id: "4",
        kicker: "Exercise 1 · D",
        title: "-er or -or?",
        instruction: "Write o or e in each gap to complete the word.",
        kind: "type",
        items: ex1Items(24, 32)
      },
      {
        id: "5",
        kicker: "Exercise 2",
        title: "People, things, both",
        instruction: "Use your Exercise 1 list. Pick the best answer.",
        kind: "choice",
        items: [
          {
            id: "1",
            prompt: "Which word is a thing, NOT a person?",
            choices: ["calculator", "teacher", "doctor", "farmer"],
            answer: "calculator"
          },
          {
            id: "2",
            prompt: "Which word is a thing, NOT a person?",
            choices: ["baker", "computer", "writer", "visitor"],
            answer: "computer"
          },
          {
            id: "3",
            prompt: "Which word is a thing, NOT a person?",
            choices: ["reporter", "cooker", "manager", "actor"],
            answer: "cooker"
          },
          {
            id: "4",
            prompt: "Which word is a thing, NOT a person?",
            choices: ["driver", "mixer", "sailor", "leader"],
            answer: "mixer"
          },
          {
            id: "5",
            prompt: "Which word is a thing, NOT a person?",
            choices: ["printer", "speaker", "player", "waiter"],
            answer: "printer"
          },
          {
            id: "6",
            prompt: "Which can mean a person OR a piece of equipment?",
            choices: ["player", "teacher", "farmer", "doctor"],
            answer: "player"
          },
          {
            id: "7",
            prompt: "Which can mean a person OR a piece of equipment?",
            choices: ["speaker", "writer", "actor", "baker"],
            answer: "speaker"
          },
          {
            id: "8",
            prompt: "Which can mean a person OR equipment (e.g. card reader)?",
            choices: ["reader", "visitor", "sailor", "inventor"],
            answer: "reader"
          }
        ]
      },
      {
        id: "6",
        kicker: "Exercise 3 · A",
        title: "-ist nouns",
        instruction: "Form a person noun ending in -ist. Be careful with spelling.",
        kind: "type",
        items: [
          wfFrom("1", "ART", "artist"),
          wfFrom("2", "BIOLOGY", "biologist"),
          wfFrom("3", "CARTOON", "cartoonist"),
          wfFrom("4", "CHEMISTRY", "chemist"),
          wfFrom("5", "CYCLING", "cyclist"),
          wfFrom("6", "ECONOMICS", "economist"),
          wfFrom("7", "GUITAR", "guitarist")
        ]
      },
      {
        id: "7",
        kicker: "Exercise 3 · B",
        title: "-ist nouns",
        instruction: "Form a person noun ending in -ist. Be careful with spelling.",
        kind: "type",
        items: [
          wfFrom("8", "NOVEL", "novelist"),
          wfFrom("9", "PHYSICS", "physicist"),
          wfFrom("10", "PIANO", "pianist"),
          wfFrom("11", "SOLO", "soloist"),
          wfFrom("12", "SPECIALISE", "specialist", ["specialize"]),
          wfFrom("13", "VIOLIN", "violinist")
        ]
      },
      {
        id: "8",
        kicker: "Exercise 4 · A",
        title: "-ness or -ship",
        instruction: "Form a noun ending in -ness or -ship.",
        kind: "type",
        items: ex4Items(0, 9)
      },
      {
        id: "9",
        kicker: "Exercise 4 · B",
        title: "-ness or -ship",
        instruction: "Form a noun ending in -ness or -ship. (-y → -i- before -ness.)",
        kind: "type",
        items: ex4Items(9, 18)
      },
      {
        id: "10",
        kicker: "Exercise 4 · C",
        title: "-ness or -ship",
        instruction: "Form a noun ending in -ness or -ship.",
        kind: "type",
        items: ex4Items(18, 25)
      },
      {
        id: "11",
        kicker: "Exercise 5",
        title: "-ment spelling",
        instruction:
          "All these verbs form nouns with -ment. One verb drops -e first. Which verb is it?",
        kind: "choice",
        items: [
          {
            id: "1",
            prompt: "Which verb drops -e before -ment?",
            choices: ["move", "agree", "improve", "manage"],
            answer: "move"
          }
        ]
      },
      {
        id: "12",
        kicker: "Exercise 6",
        title: "-ment in context",
        instruction: "Write a noun ending in -ment from Exercise 5 in each gap.",
        kind: "type",
        items: [
          wfType(
            "1",
            "Let's give the runners some",
            "as they run past.",
            "-ment noun",
            "encouragement"
          ),
          wfType(
            "2",
            "Tim couldn't hide his",
            "as he looked at the birthday presents.",
            "-ment noun",
            "amazement"
          ),
          wfType(
            "3",
            "I had a/an",
            "with Maria last night but we've sorted out our differences.",
            "-ment noun",
            "argument"
          ),
          wfType(
            "4",
            "Everyone was in",
            "so they voted to carry out the plan.",
            "-ment noun",
            "agreement"
          ),
          wfType(
            "5",
            "Passing all your exams was an incredible",
            ". Very well done!",
            "-ment noun",
            "achievement"
          )
        ]
      },
      {
        id: "13",
        kicker: "Exercise 7",
        title: "Suffix rules",
        instruction: "Look at the table in your book and complete each statement.",
        kind: "choice",
        items: [
          {
            id: "1",
            prompt: "1. Nouns ending in -ion are often formed from …",
            choices: ["adjectives", "verbs"],
            answer: "verbs"
          },
          {
            id: "2",
            prompt: "2. If a word ends in -e, you … the -e to form a noun ending in -ion.",
            choices: ["keep", "remove"],
            answer: "remove"
          },
          {
            id: "3",
            prompt: "3. Nouns ending in -ment are often formed from …",
            choices: ["adjectives", "verbs"],
            answer: "verbs"
          },
          {
            id: "4",
            prompt: "4. If a word ends in -p, you … the -p to form a noun ending in -ment.",
            choices: ["double", "don't double"],
            answer: "don't double"
          },
          {
            id: "5",
            prompt: "5. Nouns ending in -ity are often formed from …",
            choices: ["adjectives", "verbs"],
            answer: "adjectives"
          },
          {
            id: "6",
            prompt: "6. If a word ends in -e, you usually … the -e to form a noun ending in -ity.",
            choices: ["keep", "remove"],
            answer: "remove"
          },
          {
            id: "7",
            prompt: "7. Nouns ending in -ance/-ence are often formed from …",
            choices: ["adjectives", "verbs"],
            answer: "adjectives"
          },
          {
            id: "8",
            prompt: "8. If a word ends in -e, you usually … the -e to form a noun ending in -ance.",
            choices: ["keep", "remove"],
            answer: "remove"
          }
        ]
      },
      {
        id: "14",
        kicker: "Exercise 8 · A",
        title: "Word formation gaps",
        instruction: "Write a form of the word in capitals in each gap. Be careful with the spelling!",
        kind: "type",
        items: [
          wfType("1", "In", ", pollution can harm wildlife.", "ADD", "addition"),
          wfType("2", "In", ", I believe that everyone can help to protect the environment.", "CONCLUDE", "conclusion"),
          wfType("3", "Tony's", "sometimes gets him into trouble.", "CURIOUS", "curiosity"),
          wfType("4", "Have you made a", "yet?", "DECIDE", "decision")
        ]
      },
      {
        id: "15",
        kicker: "Exercise 8 · B",
        title: "Word formation gaps",
        instruction: "Write a form of the word in capitals in each gap. Be careful with the spelling!",
        kind: "type",
        items: [
          wfType("5", "I can't find the", "to the building!", "ENTER", "entrance"),
          wfType("6", "I hope you've got a good", "why you didn't do your homework.", "EXPLAIN", "explanation"),
          wfType(
            "7",
            "Thanks to your",
            ", we have bought new sports equipment for the club.",
            "GENEROUS",
            "generosity"
          ),
          wfType("8", "I was amazed by its", ".", "SIMPLE", "simplicity")
        ]
      },
      {
        id: "16",
        kicker: "Exercise 9",
        title: "Noun → negative noun",
        instruction:
          "First form nouns from these words and then make the nouns negative by adding un-, im- or in-.",
        kind: "bank",
        items: [
          {
            id: "1",
            cue: "certain",
            parts: ["Noun: ", " · Negative noun: ", ""],
            gaps: [
              { answers: ["certainty"], expected: "certainty" },
              { answers: ["uncertainty"], expected: "uncertainty" }
            ]
          },
          {
            id: "2",
            cue: "depend",
            parts: ["Noun: ", " · Negative noun: ", ""],
            gaps: [
              { answers: ["dependence"], expected: "dependence" },
              { answers: ["independence"], expected: "independence" }
            ]
          },
          {
            id: "3",
            cue: "fair",
            parts: ["Noun: ", " · Negative noun: ", ""],
            gaps: [
              { answers: ["fairness"], expected: "fairness" },
              { answers: ["unfairness"], expected: "unfairness" }
            ]
          },
          {
            id: "4",
            cue: "happy",
            parts: ["Noun: ", " · Negative noun: ", ""],
            gaps: [
              { answers: ["happiness"], expected: "happiness" },
              { answers: ["unhappiness"], expected: "unhappiness" }
            ]
          },
          {
            id: "5",
            cue: "possible",
            parts: ["Noun: ", " · Negative noun: ", ""],
            gaps: [
              { answers: ["possibility"], expected: "possibility" },
              { answers: ["impossibility"], expected: "impossibility" }
            ]
          },
          {
            id: "6",
            cue: "tidy",
            parts: ["Noun: ", " · Negative noun: ", ""],
            gaps: [
              { answers: ["tidiness"], expected: "tidiness" },
              { answers: ["untidiness"], expected: "untidiness" }
            ]
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
