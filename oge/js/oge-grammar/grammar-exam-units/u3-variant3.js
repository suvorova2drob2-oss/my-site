/**
 * OGE Grammar · Unit 3 · Tasks 20–28 · Jane & Nora · skating tickets.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-variant3-grammar",
    unitOrder: 3,
    title: "Unit 3 · Jane & Nora · skating show",
    examSection: "Tasks 20–28",
    headerTitle: "Missed calls and skating tickets",
    instructionHtml:
      "Преобразуйте слова, <strong>напечатанные заглавными буквами</strong>, так, чтобы они грамматически соответствовали тексту (задания <strong>20–28</strong>).",
    items: [
      {
        examNum: 20,
        paragraph: 1,
        before: '"I called you three times yesterday! You ',
        afterInline: " me back.\"",
        afterTail: "",
        cue: "NOT CALL",
        answers: ["did not call", "didn't call"],
        keyShow: "did not call / didn't call"
      },
      {
        examNum: 21,
        paragraph: 1,
        before: '"Were you busy or were you just ignoring ',
        afterInline: "?\" Nora sounded irritated.",
        afterTail: "",
        cue: "I",
        answers: ["me"],
        keyShow: "me"
      },
      {
        examNum: 22,
        paragraph: 1,
        before: "Jane ",
        afterInline: " to calm her down but Nora didn't want to listen to her excuses.",
        afterTail: "",
        cue: "TRY",
        answers: ["tried"],
        keyShow: "tried"
      },
      {
        examNum: 23,
        paragraph: 1,
        before:
          '"I had two tickets for the skating show and wanted to offer you one but your phone kept saying that you ',
        afterInline: " unavailable!\"",
        afterTail: "",
        cue: "BE",
        answers: ["were"],
        keyShow: "were"
      },
      {
        examNum: 24,
        paragraph: 1,
        before:
          'Having heard about the tickets Jane felt upset. "Oh, I\'m so sorry! You know how much I like skating shows but I ',
        afterInline: " answer my phone yesterday.",
        afterTail: "",
        cue: "NOT CAN",
        answers: ["could not", "couldn't"],
        keyShow: "could not / couldn't"
      },
      {
        examNum: 25,
        paragraph: 1,
        before: "I ",
        afterInline: " a driving test when you called.\"",
        afterTail: "",
        cue: "TAKE",
        answers: ["was taking"],
        keyShow: "was taking"
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "Nora was silent for a moment and then her voice sounded much ",
        afterInline: ". \"Now it's my turn to say sorry.",
        afterTail: "",
        cue: "SOFT",
        answers: ["softer"],
        keyShow: "softer"
      },
      {
        examNum: 27,
        paragraph: 1,
        before: '"Actually, you didn\'t. The show ',
        afterInline: " yesterday.\"",
        afterTail: "",
        cue: "CANCEL",
        answers: ["was cancelled", "was canceled"],
        keyShow: "was cancelled"
      },
      {
        examNum: 28,
        paragraph: 1,
        before: '"The tickets are valid today and if we take a taxi, we ',
        afterInline: ' in time."',
        afterTail: "",
        cue: "ARRIVE",
        answers: ["shall arrive", "will arrive", "'ll arrive"],
        keyShow: "shall arrive / will arrive / 'll arrive"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
