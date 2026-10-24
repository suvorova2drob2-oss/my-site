/**
 * OGE Listening · Unit 15 · Tasks 6–11 · Student interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-variant15-listening-interview",
    unitOrder: 15,
    title: "Unit 15 · Interview · student",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "German · basketball · Australia",
    tableGapMode: true,
    audioSrc: "audio/u15/listening-15.mp3",
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
        answers: ["sixteen"],
        keyShow: "sixteen"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "The most difficult school subject: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["german"],
        keyShow: "German"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["basketball"],
        keyShow: "basketball"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["chips"],
        keyShow: "chips"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "The country he/she wants to visit: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["australia"],
        keyShow: "Australia"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Favourite means of transport: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["car"],
        keyShow: "car"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
