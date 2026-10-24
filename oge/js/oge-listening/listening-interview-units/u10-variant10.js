/**
 * OGE Listening · Unit 10 · Tasks 6–11 · Photographer interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-variant10-listening-interview",
    unitOrder: 10,
    title: "Unit 10 · Interview · photographer",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Photographer · Paris · cabbage",
    tableGapMode: true,
    audioSrc: "audio/u10/listening-10.mp3",
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
        answers: ["seventy"],
        keyShow: "seventy"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["photographer"],
        keyShow: "photographer"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Favourite means of transport: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["train"],
        keyShow: "train"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "City of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["paris"],
        keyShow: "Paris"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["swimming"],
        keyShow: "swimming"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["cabbage"],
        keyShow: "cabbage"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
