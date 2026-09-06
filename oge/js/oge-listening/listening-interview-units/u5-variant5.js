/**
 * OGE Listening · Unit 5 · Tasks 6–11 · Chef interview.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-variant5-listening-interview",
    unitOrder: 5,
    title: "Unit 5 · Interview · chef",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Chef · blog · Snowflake the parrot",
    tableGapMode: true,
    audioSrc: "audio/u5/listening-5.mp3",
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
        before: "Number of followers on social media: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["thousand"],
        keyShow: "thousand"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Hobby: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["fishing"],
        keyShow: "fishing"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Pet: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["parrot", "bird"],
        keyShow: "parrot / bird"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Favourite music: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["classical"],
        keyShow: "classical"
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
