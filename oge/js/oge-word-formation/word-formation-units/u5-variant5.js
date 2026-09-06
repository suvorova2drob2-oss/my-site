/**
 * OGE Word Formation · Unit 5 · Tasks 29–34 · Penguins.
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-variant5-word-formation",
    unitOrder: 5,
    title: "Unit 5 · Penguins",
    examSection: "Tasks 29–34",
    headerTitle: "Penguins",
    instructionHtml:
      "Образуйте однокоренные слова от слов <strong>CAPS</strong> (задания <strong>29–34</strong>) — грамматически и лексически.",
    items: [
      {
        examNum: 29,
        paragraph: 1,
        before: "What is the most unusual bird in the world? There's no definite answer to this question — many birds are ",
        afterInline: " and can surprise us with their appearance, intelligence and behaviour.",
        afterTail: "",
        cue: "AMAZE",
        answers: ["amazing"],
        keyShow: "amazing"
      },
      {
        examNum: 30,
        paragraph: 1,
        before: "A penguin is certainly one of them. Though a penguin cannot fly, it is a fantastic ",
        afterInline: ". The bird uses its wings as flippers to swim underwater.",
        afterTail: "",
        cue: "SWIM",
        answers: ["swimmer"],
        keyShow: "swimmer"
      },
      {
        examNum: 31,
        paragraph: 1,
        before: "Penguins live on the ice and their babies hatch when the temperature is freezing. Penguins are ",
        afterInline: " parents — they never leave their chicks unattended.",
        afterTail: "",
        cue: "CARE",
        answers: ["caring"],
        keyShow: "caring"
      },
      {
        examNum: 32,
        paragraph: 1,
        before: "They protect them in any ",
        afterInline: " situation.",
        afterTail: "",
        cue: "DANGER",
        answers: ["dangerous"],
        keyShow: "dangerous"
      },
      {
        examNum: 33,
        paragraph: 1,
        before: "The parents can ",
        afterInline: " identify their chick by its voice.",
        afterTail: "",
        cue: "EASY",
        answers: ["easily"],
        keyShow: "easily"
      },
      {
        examNum: 34,
        paragraph: 1,
        before: "They take turns feeding and teaching it, and their ",
        afterInline: " is quite complicated.",
        afterTail: "",
        cue: "COMMUNICATE",
        answers: ["communication"],
        keyShow: "communication"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
