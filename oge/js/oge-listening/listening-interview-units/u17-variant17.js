/**
 * OGE Listening · Unit 17 · Tasks 6–11 · Actress interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-variant17-listening-interview",
    unitOrder: 17,
    title: "Unit 17 · Interview · actress",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Actress · Germany · aerobics",
    tableGapMode: true,
    audioSrc: "audio/u17/listening-17.mp3",
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
        answers: ["actress"],
        keyShow: "actress"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Age of the respondent: ",
        afterInline: "",
        afterTail: " years old",
        cue: "—",
        answers: ["forty"],
        keyShow: "forty"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Favourite food: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["vegetables"],
        keyShow: "vegetables"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Country of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["germany"],
        keyShow: "Germany"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Favourite means of transport: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["train"],
        keyShow: "train"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["aerobics"],
        keyShow: "aerobics"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
