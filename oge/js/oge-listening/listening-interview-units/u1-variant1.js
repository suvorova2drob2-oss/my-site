/**
 * OGE Listening · Unit 1 · Tasks 6–11 · Interview table (grammar exam engine).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-variant1-listening-interview",
    unitOrder: 1,
    title: "Unit 1 · Interview · Mark",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "School survey · respondent profile",
    tableGapMode: true,
    audioSrc: "audio/u1/listening-1.mp3",
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
        answers: ["fifteen"],
        keyShow: "fifteen"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Current occupation: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["student"],
        keyShow: "student"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "The most important school subject: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["chemistry"],
        keyShow: "Chemistry"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Favourite music genre: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["pop"],
        keyShow: "pop"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Favourite sport: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["football"],
        keyShow: "football"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Foreign language spoken: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["spanish"],
        keyShow: "Spanish"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
