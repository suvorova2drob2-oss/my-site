/**
 * OGE Word Formation · Unit 2 · Tasks 29–34 · Anna Pavlova dessert.
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-variant2-word-formation",
    unitOrder: 2,
    title: "Unit 2 · Anna Pavlova dessert",
    examSection: "Tasks 29–34",
    headerTitle: "Anna Pavlova dessert",
    instructionHtml:
      "Образуйте однокоренные слова от слов <strong>CAPS</strong> (задания <strong>29–34</strong>) — грамматически и лексически.",
    items: [
      {
        examNum: 29,
        paragraph: 1,
        before: "There were lots of ",
        afterInline: " berries on the top.",
        afterTail: "",
        cue: "WONDER",
        answers: ["wonderful"],
        keyShow: "wonderful"
      },
      {
        examNum: 30,
        paragraph: 1,
        before: "My friend ",
        afterInline: " explained that the airy dessert was called Anna Pavlova.",
        afterTail: "",
        cue: "PROUD",
        answers: ["proudly"],
        keyShow: "proudly"
      },
      {
        examNum: 31,
        paragraph: 1,
        before: "She mentioned that it was a ",
        afterInline: " Australian dessert.",
        afterTail: "",
        cue: "TRADITION",
        answers: ["traditional"],
        keyShow: "traditional"
      },
      {
        examNum: 32,
        paragraph: 1,
        before: "Though I didn't want to sound ",
        afterInline: " to the hostess, I had to disagree.",
        afterTail: "",
        cue: "POLITE",
        answers: ["impolite"],
        keyShow: "impolite"
      },
      {
        examNum: 33,
        paragraph: 1,
        before: "Everyone knows that Anna Pavlova was a Russian ballet ",
        afterInline: ", not an Australian one.",
        afterTail: "",
        cue: "DANCE",
        answers: ["dancer"],
        keyShow: "dancer"
      },
      {
        examNum: 34,
        paragraph: 1,
        before:
          "And when the Russian ballet troupe was in Australia, the people found the ",
        afterInline: " so exciting that a special dessert was created in Anna's honour.",
        afterTail: "",
        cue: "PERFORM",
        answers: ["performance"],
        keyShow: "performance"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
