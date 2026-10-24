/**
 * OGE Listening · Unit 9 · Tasks 6–11 · Actor interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-variant9-listening-interview",
    unitOrder: 9,
    title: "Unit 9 · Interview · actor",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Actor · Greek · hamster",
    tableGapMode: true,
    audioSrc: "audio/u9/listening-9.mp3",
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
        answers: ["actor"],
        keyShow: "actor"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Number of years in the current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["fifteen"],
        keyShow: "fifteen"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "The foreign language he/she speaks: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["greek"],
        keyShow: "Greek"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Day off: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["wednesday"],
        keyShow: "Wednesday"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["tennis"],
        keyShow: "tennis"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Pet: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["hamster"],
        keyShow: "hamster"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
