/**
 * OGE Grammar · Unit 10 · Tasks 20–28 · Kevin's birthday.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-variant10-grammar",
    unitOrder: 10,
    title: "Unit 10 · Kevin's birthday",
    examSection: "Tasks 20–28",
    headerTitle: "Forgot · Kevin's birthday",
    instructionHtml:
      "Преобразуйте слова, <strong>напечатанные заглавными буквами</strong>, так, чтобы они грамматически соответствовали тексту (задания <strong>20–28</strong>).",
    items: [
      {
        examNum: 20,
        paragraph: 1,
        before: "Kevin is my best friend. He ",
        afterInline: " to the same school as I do and we live in the same block.",
        afterTail: "",
        cue: "GO",
        answers: ["goes"],
        keyShow: "goes"
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "We ",
        afterInline: " each other since primary school.",
        afterTail: "",
        cue: "KNOW",
        answers: ["have known", "'ve known"],
        keyShow: "have known / 've known"
      },
      {
        examNum: 22,
        paragraph: 1,
        before: "It was Kevin's birthday yesterday but I ",
        afterInline: " him to say Happy Birthday.",
        afterTail: "",
        cue: "NOT CALL",
        answers: ["did not call", "didn't call"],
        keyShow: "did not call / didn't call"
      },
      {
        examNum: 23,
        paragraph: 1,
        before: "You may ask ",
        afterInline: " what happened and why I ignored him.",
        afterTail: "",
        cue: "I",
        answers: ["me"],
        keyShow: "me"
      },
      {
        examNum: 24,
        paragraph: 1,
        before: "The answer is just stupid — I forgot about my best friend's birthday because yesterday I ",
        afterInline: " with all sorts of jobs and chores.",
        afterTail: "",
        cue: "OCCUPY",
        answers: ["was occupied"],
        keyShow: "was occupied"
      },
      {
        examNum: 25,
        paragraph: 1,
        before: "It was Sunday but I woke up much ",
        afterInline: " than usual. First, I walked my dog. Then I went to the stadium as I had to practise tennis there.",
        afterTail: "",
        cue: "EARLY",
        answers: ["earlier"],
        keyShow: "earlier"
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "On my way back I ",
        afterInline: " some food from the supermarket. When I came back home, I had lunch and started doing my homework.",
        afterTail: "",
        cue: "BUY",
        answers: ["bought"],
        keyShow: "bought"
      },
      {
        examNum: 27,
        paragraph: 1,
        before: "There ",
        afterInline: " a few very difficult assignments, so it took ages! When I got tired, I went straight to bed.",
        afterTail: "",
        cue: "BE",
        answers: ["were"],
        keyShow: "were"
      },
      {
        examNum: 28,
        paragraph: 1,
        before: "I know how stupid my excuses sound but... Do you think Kevin ",
        afterInline: " me if I explain all this to him tomorrow?",
        afterTail: "",
        cue: "FORGIVE",
        answers: ["will forgive"],
        keyShow: "will forgive"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
