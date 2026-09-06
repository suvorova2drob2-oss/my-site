/**
 * OGE Listening · Unit 4 · Tasks 6–11 · Gardener interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-variant4-listening-interview",
    unitOrder: 4,
    title: "Unit 4 · Interview · gardener",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Survey · respondent profile",
    tableGapMode: true,
    audioSrc: "audio/u4/listening-4.mp3",
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
        answers: ["forty"],
        keyShow: "forty"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["gardener"],
        keyShow: "gardener"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Hobby: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["reading"],
        keyShow: "reading"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "The foreign language he/she speaks: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["japanese"],
        keyShow: "Japanese"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["skiing"],
        keyShow: "skiing"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Favourite season: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["autumn"],
        keyShow: "autumn"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
