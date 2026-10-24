/**
 * OGE Listening · Unit 6 · Tasks 6–11 · Interview table.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-variant6-listening-interview",
    unitOrder: 6,
    title: "Unit 6 · Interview · surgeon",
    sectionKicker: "Listening",
    examSection: "Tasks 6–11",
    headerTitle: "Chemistry · jogging · Canada",
    tableGapMode: true,
    audioSrc: "audio/u6/listening-6.mp3",
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
        answers: ["fifteen"],
        keyShow: "fifteen"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "The most difficult school subject: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["chemistry"],
        keyShow: "Chemistry"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "The job he/she would like to do in the future: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["surgeon", "doctor"],
        keyShow: "surgeon / doctor"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "Hobby: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["painting"],
        keyShow: "painting"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "Regular sports activity: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["jogging"],
        keyShow: "jogging"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "Country of birth: ",
        afterInline: "",
        afterTail: "",
        cue: "—",
        answers: ["canada"],
        keyShow: "Canada"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
