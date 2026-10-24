/**
 * OGE Listening · Unit 8 · Tasks 6–11 · Pilot interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-variant8-listening-interview",
    unitOrder: 8,
    title: "Unit 8 · Interview · pilot",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Pilot · Japanese · fish",
    tableGapMode: true,
    audioSrc: "audio/u8/listening-8.mp3",
    instructionHtml:
      "Прослушайте интервью и занесите данные в таблицу. <strong>Не более одного слова</strong> (без артиклей). Числа — <strong>буквами</strong>.",
    items: [
      {
        examNum: 6,
        paragraph: 1,
        before: "Age of the respondent: ",
        afterInline: "",
        afterTail: " years old",
        cue: "—",
        answers: ["nineteen"],
        keyShow: "nineteen"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "The job he/she would like to have: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["pilot"],
        keyShow: "pilot"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "The foreign language he/she speaks: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["japanese"],
        keyShow: "Japanese"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["athletics"],
        keyShow: "athletics"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Hobby: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["gardening"],
        keyShow: "gardening"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["fish"],
        keyShow: "fish"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
