/**
 * OGE Listening · Unit 11 · Tasks 6–11 · Dentist interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-variant11-listening-interview",
    unitOrder: 11,
    title: "Unit 11 · Interview · dentist",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Poland · dentist · tortoise",
    tableGapMode: true,
    audioSrc: "audio/u11/listening-11.mp3",
    instructionHtml:
      "Прослушайте интервью и занесите данные в таблицу. <strong>Не более одного слова</strong> (без артиклей). Числа — <strong>буквами</strong>.",
    items: [
      {
        examNum: 6,
        paragraph: 1,
        before: "Country of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["poland"],
        keyShow: "Poland"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Number of visited countries: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["thirteen"],
        keyShow: "thirteen"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["dentist", "doctor"],
        keyShow: "dentist / doctor"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["cheese"],
        keyShow: "cheese"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Pet: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["tortoise"],
        keyShow: "tortoise"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "The musical instrument he/she plays: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["guitar"],
        keyShow: "guitar"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
