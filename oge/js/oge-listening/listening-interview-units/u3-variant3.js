/**
 * OGE Listening · Unit 3 · Tasks 6–11 · Real estate manager.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-variant3-listening-interview",
    unitOrder: 3,
    title: "Unit 3 · Interview · manager",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Survey · respondent profile",
    tableGapMode: true,
    audioSrc: "audio/u3/listening-3.mp3",
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
        answers: ["sixty-five", "sixty five"],
        keyShow: "sixty-five"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Current job: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["manager"],
        keyShow: "manager"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Country of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["france"],
        keyShow: "France"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Favourite dish: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["duck"],
        keyShow: "duck"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Hobby: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["gardening", "plants"],
        keyShow: "gardening / plants"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["yoga"],
        keyShow: "yoga"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
