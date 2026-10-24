/**
 * OGE Listening · Unit 12 · Tasks 6–11 · Businessman interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-variant12-listening-interview",
    unitOrder: 12,
    title: "Unit 12 · Interview · businessman",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Economics · Australia · skiing",
    tableGapMode: true,
    audioSrc: "audio/u12/listening-12.mp3",
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
        answers: ["fifty"],
        keyShow: "fifty"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["businessman"],
        keyShow: "businessman"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Favourite school subject: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["economics"],
        keyShow: "Economics"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Country of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["australia"],
        keyShow: "Australia"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["pancakes", "pancake"],
        keyShow: "pancakes / pancake"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Favourite sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["skiing"],
        keyShow: "skiing"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
