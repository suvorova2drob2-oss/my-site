/**
 * Grammar practice · brackets, Present Simple / Continuous (items 3–10).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u23-right-now-grammar",
    unitOrder: 23,
    title: "Practice · Right now",
    examSection: "Practice · 3–10",
    headerTitle: "Simple · continuous",
    instructionHtml:
      "Раскройте скобки: <strong>Present Simple</strong> или <strong>Present Continuous</strong>.",
    items: [
      {
        examNum: 3,
        paragraph: 1,
        before: "Rachel can't talk to you now. She ",
        afterInline: " a shower.",
        afterTail: "",
        cue: "HAVE",
        answers: ["is having", "'s having"],
        keyShow: "is having"
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "Mmm! This soup ",
        afterInline: " fantastic!",
        afterTail: "",
        cue: "SMELL",
        answers: ["smells"],
        keyShow: "smells"
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "I ",
        afterInline: " that's a good idea.",
        afterTail: "",
        cue: "NOT THINK",
        answers: ["don't think", "do not think"],
        keyShow: "don't think"
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "Don't speak so fast. Yuri ",
        afterInline: " you.",
        afterTail: "",
        cue: "NOT UNDERSTAND",
        answers: ["doesn't understand", "does not understand"],
        keyShow: "doesn't understand"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Where ",
        afterInline: "? Can I go with them?",
        afterTail: "",
        cue: "MY BROTHERS / GO",
        answers: ["are my brothers going"],
        keyShow: "are my brothers going"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Liam ",
        afterInline: " in ghosts.",
        afterTail: "",
        cue: "BELIEVE",
        answers: ["doesn't believe", "does not believe"],
        keyShow: "doesn't believe"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "What languages ",
        afterInline: "?",
        afterTail: "",
        cue: "YOU / SPEAK",
        answers: ["do you speak"],
        keyShow: "do you speak"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Janina and Kim ",
        afterInline: " their homework right now.",
        afterTail: "",
        cue: "NOT DO",
        answers: ["aren't doing", "are not doing"],
        keyShow: "aren't doing"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
