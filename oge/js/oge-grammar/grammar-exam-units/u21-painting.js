/**
 * Grammar practice · describing the painting (items 27–34).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u21-painting-grammar",
    unitOrder: 21,
    title: "Practice · The painting",
    examSection: "Practice · 27–34",
    headerTitle: "Zinaida Serebriakova",
    instructionHtml:
      "Раскройте скобки: для действий на картине — <strong>Present Continuous</strong>, для состояний — <strong>Present Simple</strong>.",
    items: [
      {
        examNum: 27,
        paragraph: 1,
        before: "The painting At the Dressing-Table is by Zinaida Serebriakova. The woman in the picture ",
        afterInline: " long, dark hair.",
        afterTail: "",
        cue: "HAVE",
        answers: ["has"],
        keyShow: "has"
      },
      {
        examNum: 28,
        paragraph: 1,
        before: "In the painting, she ",
        afterInline: " in the mirror.",
        afterTail: "",
        cue: "LOOK",
        answers: ["is looking", "'s looking"],
        keyShow: "is looking"
      },
      {
        examNum: 29,
        paragraph: 1,
        before: "She looks happy and she ",
        afterInline: ".",
        afterTail: "",
        cue: "SMILE",
        answers: ["is smiling", "'s smiling"],
        keyShow: "is smiling"
      },
      {
        examNum: 30,
        paragraph: 1,
        before: "There ",
        afterInline: " some things on the table in front of her.",
        afterTail: "",
        cue: "BE",
        answers: ["are"],
        keyShow: "are"
      },
      {
        examNum: 31,
        paragraph: 1,
        before: "She ",
        afterInline: " a beautiful white dress.",
        afterTail: "",
        cue: "WEAR",
        answers: ["is wearing", "'s wearing"],
        keyShow: "is wearing"
      },
      {
        examNum: 32,
        paragraph: 1,
        before: "She ",
        afterInline: " her long, dark hair.",
        afterTail: "",
        cue: "BRUSH",
        answers: ["is brushing", "'s brushing"],
        keyShow: "is brushing"
      },
      {
        examNum: 33,
        paragraph: 1,
        before: "There ",
        afterInline: " any other people in the room with her.",
        afterTail: "",
        cue: "NOT BE",
        answers: ["aren't", "are not"],
        keyShow: "aren't"
      },
      {
        examNum: 34,
        paragraph: 1,
        before: "My sister ",
        afterInline: " this painting.",
        afterTail: "",
        cue: "LOVE",
        answers: ["loves"],
        keyShow: "loves"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
