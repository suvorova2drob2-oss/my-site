/**
 * OGE Listening · Unit 2 · Tasks 6–11 · Babysitter interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-variant2-listening-interview",
    unitOrder: 2,
    title: "Unit 2 · Interview · babysitter",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Park survey · respondent profile",
    tableGapMode: true,
    audioSrc: "audio/u2/listening-2.mp3",
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
        before: "Current occupation: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["babysitter"],
        keyShow: "babysitter"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "The profession he/she would like to do in the future: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["vet"],
        keyShow: "vet"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["cycling"],
        keyShow: "cycling"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["pasta"],
        keyShow: "pasta"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Hobby: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["photography"],
        keyShow: "photography"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
