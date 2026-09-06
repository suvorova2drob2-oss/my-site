/**
 * OGE Grammar · Unit 5 · Tasks 20–28 · Julia & languages.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-variant5-grammar",
    unitOrder: 5,
    title: "Unit 5 · Julia & languages",
    examSection: "Tasks 20–28",
    headerTitle: "Julia · Italian · German · Spanish",
    instructionHtml:
      "Преобразуйте слова, <strong>напечатанные заглавными буквами</strong>, так, чтобы они грамматически соответствовали тексту (задания <strong>20–28</strong>).",
    items: [
      {
        examNum: 20,
        paragraph: 1,
        before: '"How many foreign languages do you speak?" Julia asked. "French. A bit," I replied proudly. Julia ',
        afterInline: " attention to my answer and went on.",
        afterTail: "",
        cue: "NOT PAY",
        answers: ["didn't pay", "did not pay"],
        keyShow: "didn't pay / did not pay"
      },
      {
        examNum: 21,
        paragraph: 1,
        before: '"As for me, I speak Italian and German, and I ',
        afterInline: " Spanish at the moment."",
        afterTail: "",
        cue: "LEARN",
        answers: ["am learning", "'m learning"],
        keyShow: "am learning / 'm learning"
      },
      {
        examNum: 22,
        paragraph: 1,
        before: '"Are you?" I ',
        afterInline: " a bit surprised.",
        afterTail: "",
        cue: "FEEL",
        answers: ["felt"],
        keyShow: "felt"
      },
      {
        examNum: 23,
        paragraph: 1,
        before: '"Why? You ',
        afterInline: " to Spain yet."",
        afterTail: "",
        cue: "NOT BE",
        answers: ["haven't been", "have not been"],
        keyShow: "haven't been / have not been"
      },
      {
        examNum: 24,
        paragraph: 1,
        before: '"Right. Not yet. But my parents promised to take ',
        afterInline: " there in the summer if I'm able to speak some Spanish.",
        afterTail: "",
        cue: "I",
        answers: ["me"],
        keyShow: "me"
      },
      {
        examNum: 25,
        paragraph: 1,
        before: "In fact, Spanish is much ",
        afterInline: " than French.",
        afterTail: "",
        cue: "IMPORTANT",
        answers: ["more important"],
        keyShow: "more important"
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "It ",
        afterInline: " by 600 million people."",
        afterTail: "",
        cue: "SPEAK",
        answers: ["is spoken", "'s spoken"],
        keyShow: "is spoken / 's spoken"
      },
      {
        examNum: 27,
        paragraph: 1,
        before: '"Oh, yes! It\'s an official language in 20 ',
        afterInline: "!"",
        afterTail: "",
        cue: "COUNTRY",
        answers: ["countries"],
        keyShow: "countries"
      },
      {
        examNum: 28,
        paragraph: 1,
        before: "I envied Julia for her ability to learn languages quickly and effortlessly. I wish I ",
        afterInline: " memorise new words as fast as she did.",
        afterTail: "",
        cue: "CAN",
        answers: ["could"],
        keyShow: "could"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
