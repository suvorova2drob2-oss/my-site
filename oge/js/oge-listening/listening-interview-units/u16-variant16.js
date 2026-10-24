/**
 * OGE Listening · Unit 16 · Tasks 6–11 · Journalist interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-variant16-listening-interview",
    unitOrder: 16,
    title: "Unit 16 · Interview · journalist",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Journalist · Canada · volleyball",
    tableGapMode: true,
    audioSrc: "audio/u16/listening-16.mp3",
    instructionHtml:
      "Прослушайте интервью и занесите данные в таблицу. <strong>Не более одного слова</strong> (без артиклей). Числа — <strong>буквами</strong>.",
    items: [
      {
        examNum: 6,
        paragraph: 1,
        before: "Current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["journalist"],
        keyShow: "journalist"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Age of the respondent: ",
        afterInline: "",
        afterTail: " years old",
        cue: "—",
        answers: ["thirty"],
        keyShow: "thirty"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Country of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["canada"],
        keyShow: "Canada"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Favourite means of transport: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["plane"],
        keyShow: "plane"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Favourite school subject: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["french"],
        keyShow: "French"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["volleyball"],
        keyShow: "volleyball"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
