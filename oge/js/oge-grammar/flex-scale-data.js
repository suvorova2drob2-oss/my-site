/**
 * OGE Grammar Gym · Flex Scale (Understanding comparatives and superlatives) — standalone pack.
 */
(function (w) {
  "use strict";

  w.OGE_FLEX_SCALE = {
    id: "flex-scale",
    label: "Flex Scale",
    blurb: "Comparative and superlative forms — regular patterns and irregular better, worst, less, farther.",
    rules: [
      "than → comparative · the … → superlative",
      "short adjective: -er / -est (younger, youngest)",
      "irregular: good → better → best · bad → worse → worst"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1",
        title: "Comparative + superlative",
        instruction: "Write a form of the word in capitals in each gap.",
        kind: "bank",
        items: [
          {
            id: "1",
            cue: "YOUNG",
            parts: [
              "Rod's eleven years old. Simon's ten, so he's ",
              " than Rod. Graham's the ",
              " of the three brothers. He's only eight."
            ],
            gaps: [
              { answers: ["younger"], expected: "younger" },
              { answers: ["youngest"], expected: "youngest" }
            ]
          },
          {
            id: "2",
            cue: "OLD",
            parts: [
              "Carol's eleven years old. Dawn is twelve, so she's ",
              " than Carol. Lizzie's the ",
              " of the three sisters. She's sixteen."
            ],
            gaps: [
              { answers: ["older"], expected: "older" },
              { answers: ["oldest"], expected: "oldest" }
            ]
          },
          {
            id: "3",
            cue: "BIG",
            parts: [
              "Phil's dog is quite big. Susan's dog is ",
              " than Phil's. But Ed has the ",
              " dog I've ever seen!"
            ],
            gaps: [
              { answers: ["bigger"], expected: "bigger" },
              { answers: ["biggest"], expected: "biggest" }
            ]
          },
          {
            id: "4",
            cue: "HAPPY",
            parts: [
              "I got 70% in the exam, so I was happy. Jenny got 80%, so she was ",
              " than me. Fiona got 98%, so she was the ",
              " person in the class."
            ],
            gaps: [
              { answers: ["happier"], expected: "happier" },
              { answers: ["happiest"], expected: "happiest" }
            ]
          },
          {
            id: "5",
            cue: "DIFFICULT",
            parts: [
              "My geography homework was difficult but my history homework was even ",
              ". And my physics homework was the ",
              " homework I've ever done."
            ],
            gaps: [
              { answers: ["more difficult"], expected: "more difficult" },
              { answers: ["most difficult"], expected: "most difficult" }
            ]
          }
        ]
      },
      {
        id: "2",
        kicker: "Exercise 2",
        title: "Irregular forms",
        instruction:
          "Write a form of the word in capitals in each gap. Be careful! All of these are irregular comparatives and superlatives.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "This is the",
            after: "smartphone in the shop.",
            cue: "GOOD",
            answers: ["best"],
            expected: "best"
          },
          {
            id: "2",
            before: "I did",
            after: "in the test than I expected.",
            cue: "BAD",
            answers: ["worse"],
            expected: "worse"
          },
          {
            id: "3",
            before: "She arrived",
            after: "than we thought she would.",
            cue: "EARLY",
            answers: ["earlier"],
            expected: "earlier"
          },
          {
            id: "4",
            before: "Why do you think this one is",
            after: "than that one?",
            cue: "GOOD",
            answers: ["better"],
            expected: "better"
          },
          {
            id: "5",
            before: "This is the",
            after: "pizza I've ever eaten!",
            cue: "BAD",
            answers: ["worst"],
            expected: "worst"
          },
          {
            id: "6",
            before: "I've got",
            after: "money than I thought I had.",
            cue: "LITTLE",
            answers: ["less"],
            expected: "less"
          },
          {
            id: "7",
            before: "This is the",
            after: "I've ever been away from home.",
            cue: "FAR",
            answers: ["farthest", "furthest"],
            expected: "farthest"
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
