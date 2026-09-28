/**
 * OGE Grammar Gym · Rank Up (Understanding numbers — ordinals) — standalone pack.
 */
(function (w) {
  "use strict";

  w.OGE_RANK_UP = {
    id: "rank-up",
    label: "Rank Up",
    blurb: "Spell ordinals and use them in sentences — 1st, 2nd, 3rd … twentieth.",
    rules: [
      "Ordinal = position: first, second, third …",
      "Watch spelling: fifth, eighth, ninth, twelfth",
      "In sentences: the tenth of January · the twentieth century"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1",
        title: "Words for numbers",
        instruction: "Write the words for these numbers.",
        kind: "type",
        items: [
          { id: "1", before: "2nd →", after: "", cue: "word", answers: ["second"], expected: "second" },
          { id: "2", before: "3rd →", after: "", cue: "word", answers: ["third"], expected: "third" },
          { id: "3", before: "1st →", after: "", cue: "word", answers: ["first"], expected: "first" },
          { id: "4", before: "4th →", after: "", cue: "word", answers: ["fourth"], expected: "fourth" },
          { id: "5", before: "6th →", after: "", cue: "word", answers: ["sixth"], expected: "sixth" },
          { id: "6", before: "5th →", after: "", cue: "word", answers: ["fifth"], expected: "fifth" },
          { id: "7", before: "8th →", after: "", cue: "word", answers: ["eighth"], expected: "eighth" },
          { id: "8", before: "10th →", after: "", cue: "word", answers: ["tenth"], expected: "tenth" },
          { id: "9", before: "9th →", after: "", cue: "word", answers: ["ninth"], expected: "ninth" },
          { id: "10", before: "11th →", after: "", cue: "word", answers: ["eleventh"], expected: "eleventh" },
          { id: "11", before: "12th →", after: "", cue: "word", answers: ["twelfth"], expected: "twelfth" },
          { id: "12", before: "20th →", after: "", cue: "word", answers: ["twentieth"], expected: "twentieth" }
        ]
      },
      {
        id: "2",
        kicker: "Exercise 2",
        title: "In a sentence",
        instruction: "Transform the word in capitals to complete each sentence.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "Dan didn't win the race but he came",
            after: ".",
            cue: "TWO",
            answers: ["second"],
            expected: "second"
          },
          {
            id: "2",
            before: "It's the",
            after: "time I've ever been to a funfair.",
            cue: "ONE",
            answers: ["first"],
            expected: "first"
          },
          {
            id: "3",
            before: "There were two world wars in the",
            after: "century.",
            cue: "TWENTY",
            answers: ["twentieth"],
            expected: "twentieth"
          },
          {
            id: "4",
            before: "My birthday's on the",
            after: "of January.",
            cue: "TEN",
            answers: ["tenth"],
            expected: "tenth"
          },
          {
            id: "5",
            before: "My sister's having her",
            after: "driving lesson today.",
            cue: "THREE",
            answers: ["third"],
            expected: "third"
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
