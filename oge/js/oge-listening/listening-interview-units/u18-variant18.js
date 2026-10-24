/**
 * OGE Listening · Unit 18 · Tasks 6–11 · Mechanic interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-variant18-listening-interview",
    unitOrder: 18,
    title: "Unit 18 · Interview · mechanic",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Mechanic · China · fish",
    tableGapMode: true,
    audioSrc: "audio/u18/listening-18.mp3",
    instructionHtml:
      "Прослушайте интервью и занесите данные в таблицу. <strong>Не более одного слова</strong> (без артиклей). Числа — <strong>буквами</strong>.",
    items: [
      {
        examNum: 6,
        paragraph: 1,
        before: "Favourite drink: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["coffee"],
        keyShow: "coffee"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["mechanic"],
        keyShow: "mechanic"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Age of the respondent: ",
        afterInline: "",
        afterTail: " years old",
        cue: "—",
        answers: ["fifty"],
        keyShow: "fifty"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Country of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["china"],
        keyShow: "China"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Hobby: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["gardening"],
        keyShow: "gardening"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Pet: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["fish", "fishes"],
        keyShow: "fish / fishes"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
