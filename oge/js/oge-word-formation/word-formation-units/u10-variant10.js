/**
 * OGE Word Formation · Unit 10 · Tasks 29–34 · Edinburgh Castle.
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-variant10-word-formation",
    unitOrder: 10,
    title: "Unit 10 · Edinburgh Castle",
    examSection: "Tasks 29–34",
    headerTitle: "Edinburgh Castle",
    instructionHtml:
      "Образуйте однокоренные слова от слов <strong>CAPS</strong> (задания <strong>29–34</strong>) — грамматически и лексически.",
    items: [
      {
        examNum: 29,
        paragraph: 1,
        before: "Scotland is a popular tourist destination. To me, the main ",
        afterInline: " of Scotland is its castles.",
        afterTail: "",
        cue: "ATTRACT",
        answers: ["attraction"],
        keyShow: "attraction"
      },
      {
        examNum: 30,
        paragraph: 1,
        before: "The landscape in Scotland is more dramatic than in England and the castles look very ",
        afterInline: " there.",
        afterTail: "",
        cue: "IMPRESS",
        answers: ["impressive"],
        keyShow: "impressive"
      },
      {
        examNum: 31,
        paragraph: 1,
        before: "One doesn't need to be a poet or an ",
        afterInline: " to see their beauty.",
        afterTail: "",
        cue: "ART",
        answers: ["artist"],
        keyShow: "artist"
      },
      {
        examNum: 32,
        paragraph: 1,
        before: "Visiting Edinburgh Castle was an ",
        afterInline: " experience. Its location is remarkable — it was built on top of a volcanic rock. Luckily, the volcano has never disturbed the castle.",
        afterTail: "",
        cue: "FORGETTABLE",
        answers: ["unforgettable"],
        keyShow: "unforgettable"
      },
      {
        examNum: 33,
        paragraph: 1,
        before: "But it has been ",
        afterInline: " damaged by people. Like most ancient castles, Edinburgh Castle was built as a fortress. It has been involved in many military conflicts, ruined and restored several times. The oldest part of the castle dates from the 12th century. The other parts were constructed and reconstructed later.",
        afterTail: "",
        cue: "SERIOUS",
        answers: ["seriously"],
        keyShow: "seriously"
      },
      {
        examNum: 34,
        paragraph: 1,
        before: "Now the castle houses several museums, including the ",
        afterInline: " War Museum.",
        afterTail: "",
        cue: "NATION",
        answers: ["national"],
        keyShow: "National"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
