/**
 * OGE Listening · Unit 7 · Tasks 6–11 · Chef interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-variant7-listening-interview",
    unitOrder: 7,
    title: "Unit 7 · Interview · chef",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Chef · Rome · rat",
    tableGapMode: true,
    audioSrc: "audio/u7/listening-7.mp3",
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
        answers: ["chef"],
        keyShow: "chef"
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
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["spaghetti", "pasta"],
        keyShow: "spaghetti / pasta"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "City of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["rome"],
        keyShow: "Rome"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Pet: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["rat"],
        keyShow: "rat"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["cycling"],
        keyShow: "cycling"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
