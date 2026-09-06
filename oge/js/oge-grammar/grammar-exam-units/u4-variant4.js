/**
 * OGE Grammar · Unit 4 · Tasks 20–28 · Bob the cat.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-variant4-grammar",
    unitOrder: 4,
    title: "Unit 4 · Bob the cat",
    examSection: "Tasks 20–28",
    headerTitle: "Bob and the mice in the basement",
    instructionHtml:
      "Преобразуйте слова, <strong>напечатанные заглавными буквами</strong>, так, чтобы они грамматически соответствовали тексту (задания <strong>20–28</strong>).",
    items: [
      {
        examNum: 20,
        paragraph: 1,
        before: '"There he is. Can\'t you see him? He ',
        afterInline: " on the sofa. Do you really need to wake up the poor cat?\"",
        afterTail: "",
        cue: "SLEEP",
        answers: ["is sleeping", "'s sleeping"],
        keyShow: "is sleeping / 's sleeping"
      },
      {
        examNum: 21,
        paragraph: 1,
        before: '"I\'ve got a job for him,\" declared Jack, \"I\'ve just seen two fat ',
        afterInline: " in the basement.",
        afterTail: "",
        cue: "MOUSE",
        answers: ["mice"],
        keyShow: "mice"
      },
      {
        examNum: 22,
        paragraph: 1,
        before: "Bob has to catch ",
        afterInline: " as soon as possible.\"",
        afterTail: "",
        cue: "THEY",
        answers: ["them"],
        keyShow: "them"
      },
      {
        examNum: 23,
        paragraph: 1,
        before: '"He ',
        afterInline: " a mouse in all his life!\"",
        afterTail: "",
        cue: "NOT CATCH",
        answers: ["has not caught", "hasn't caught"],
        keyShow: "has not caught / hasn't caught"
      },
      {
        examNum: 24,
        paragraph: 1,
        before: '"And I think if he sees a mouse, he ',
        afterInline: " a heart attack.\"",
        afterTail: "",
        cue: "HAVE",
        answers: ["will have", "'ll have"],
        keyShow: "will have / 'll have"
      },
      {
        examNum: 25,
        paragraph: 1,
        before: '"I wish we ',
        afterInline: " a braver cat,\" Jack couldn't hide his disappointment.",
        afterTail: "",
        cue: "HAVE",
        answers: ["had"],
        keyShow: "had"
      },
      {
        examNum: 26,
        paragraph: 1,
        before: '"Everyone ',
        afterInline: " that it's a cat's job to protect the house from those small grey beasts.",
        afterTail: "",
        cue: "KNOW",
        answers: ["knows"],
        keyShow: "knows"
      },
      {
        examNum: 27,
        paragraph: 1,
        before: "Otherwise, cats are the ",
        afterInline: " creatures of all domestic animals.\"",
        afterTail: "",
        cue: "USELESS",
        answers: ["most useless"],
        keyShow: "most useless"
      },
      {
        examNum: 28,
        paragraph: 1,
        before: '"They ',
        afterInline: " in the house to make it nicer and cosier.\"",
        afterTail: "",
        cue: "KEEP",
        answers: ["are kept", "'re kept"],
        keyShow: "are kept / 're kept"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
