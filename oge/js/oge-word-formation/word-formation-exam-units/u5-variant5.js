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
    sectionKicker: "Word Formation",
    examSection: "Tasks 29–34",
    headerTitle: "Emperor penguins",
    instructionHtml:
      "Образуйте от слов в скобках однокоренные слова так, чтобы они грамматически и лексически соответствовали содержанию текста.",
    items: [
      {
        examNum: 29,
        before: "Penguins are ",
        root: "AMAZE",
        after: " birds that live in cold regions.",
        answers: ["amazing"],
        keyShow: "amazing"
      },
      {
        examNum: 30,
        before: "The emperor penguin is the largest ",
        root: "SWIM",
        after: " among all penguin species.",
        answers: ["swimmer"],
        keyShow: "swimmer"
      },
      {
        examNum: 31,
        before: "Both parents are very ",
        root: "CARE",
        after: " and take turns keeping the egg warm.",
        answers: ["caring"],
        keyShow: "caring"
      },
      {
        examNum: 32,
        before: "Climate change makes their habitat more ",
        root: "DANGER",
        after: " every year.",
        answers: ["dangerous"],
        keyShow: "dangerous"
      },
      {
        examNum: 33,
        before: "Penguins can dive deep and move ",
        root: "EASY",
        after: " underwater.",
        answers: ["easily"],
        keyShow: "easily"
      },
      {
        examNum: 34,
        before: "Scientists study penguins to learn more about ",
        root: "COMMUNICATE",
        after: " in the animal world.",
        answers: ["communication"],
        keyShow: "communication"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
