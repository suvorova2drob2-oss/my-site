/**
 * OGE Grammar · Unit 2 · Tasks 20–28 · Jack & Mark · recycling bins.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-variant2-grammar",
    unitOrder: 2,
    title: "Unit 2 · Jack & Mark · recycling",
    examSection: "Tasks 20–28",
    headerTitle: "Three trash bins in the backyard",
    instructionHtml:
      "Преобразуйте слова, <strong>напечатанные заглавными буквами</strong>, так, чтобы они грамматически соответствовали тексту (задания <strong>20–28</strong>).",
    items: [
      {
        examNum: 20,
        paragraph: 1,
        before: '"Do you keep it here till all of ',
        afterInline: " are full?\"",
        afterTail: "",
        cue: "THEY",
        answers: ["them"],
        keyShow: "them"
      },
      {
        examNum: 21,
        paragraph: 1,
        before: '"This one ',
        afterInline: " for glass only. The second one is for paper.\"",
        afterTail: "",
        cue: "USE",
        answers: ["is used"],
        keyShow: "is used"
      },
      {
        examNum: 22,
        paragraph: 1,
        before: '"And the ',
        afterInline: " one is for plastic, isn't it?\"",
        afterTail: "",
        cue: "THREE",
        answers: ["third"],
        keyShow: "third"
      },
      {
        examNum: 23,
        paragraph: 1,
        before: '"Let\'s go inside. Mum ',
        afterInline: " my favourite pizza and wants us to try it right now.\"",
        afterTail: "",
        cue: "MAKE",
        answers: ["has made", "'s made"],
        keyShow: "has made / 's made"
      },
      {
        examNum: 24,
        paragraph: 1,
        before: '"I\'m sure you ',
        afterInline: ' it."',
        afterTail: "",
        cue: "LIKE",
        answers: ["will like", "'ll like"],
        keyShow: "will like / 'll like"
      },
      {
        examNum: 25,
        paragraph: 1,
        before: '"I bet!" Jack ',
        afterInline: ".",
        afterTail: "",
        cue: "SMILE",
        answers: ["smiled"],
        keyShow: "smiled"
      },
      {
        examNum: 26,
        paragraph: 1,
        before: '"I wish we ',
        afterInline: " pizza every day at home. But my mum is a doctor.\"",
        afterTail: "",
        cue: "HAVE",
        answers: ["had"],
        keyShow: "had"
      },
      {
        examNum: 27,
        paragraph: 1,
        before: '"And she insists on all that healthy stuff like broccoli, cucumbers and ',
        afterInline: '."',
        afterTail: "",
        cue: "TOMATO",
        answers: ["tomatoes"],
        keyShow: "tomatoes"
      },
      {
        examNum: 28,
        paragraph: 1,
        before: '"I ',
        afterInline: " argue with her,\"",
        afterTail: "",
        cue: "NOT CAN",
        answers: ["cannot", "can't"],
        keyShow: "cannot / can't"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
