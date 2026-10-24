/**
 * OGE Listening · Unit 20 · Tasks 6–11 · Fisherman interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-variant20-listening-interview",
    unitOrder: 20,
    title: "Unit 20 · Interview · fisherman",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Fisherman · Austria · autumn",
    tableGapMode: true,
    audioSrc: "audio/u20/listening-20.mp3",
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
        answers: ["fisherman"],
        keyShow: "fisherman"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Number of years in the current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["thirteen"],
        keyShow: "thirteen"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["sausage", "sausages"],
        keyShow: "sausage / sausages"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Country of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["austria"],
        keyShow: "Austria"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["football"],
        keyShow: "football"
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
