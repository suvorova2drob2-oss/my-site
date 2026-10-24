/**
 * OGE Grammar · Unit 20 · Tasks 20–28 · Miss Marple.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-variant20-grammar",
    unitOrder: 20,
    title: "Unit 20 · Miss Marple",
    examSection: "Tasks 20–28",
    headerTitle: "Miss Marple · detective · village",
    instructionHtml:
      "Преобразуйте слова, <strong>напечатанные заглавными буквами</strong>, так, чтобы они грамматически соответствовали тексту (задания <strong>20–28</strong>).",
    items: [
      {
        examNum: 20,
        paragraph: 1,
        before: "I love detective stories. I ",
        afterInline: " all the classic novels about Sherlock Holmes, Hercule Poirot, Miss Marple, and others.",
        afterTail: "",
        cue: "READ",
        answers: ["have read", "'ve read"],
        keyShow: "have read / 've read"
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "My favourite detective is Miss Marple. In Agatha Christie's books, she ",
        afterInline: " as a delicate, elderly woman.",
        afterTail: "",
        cue: "DESCRIBE",
        answers: ["was described", "is described"],
        keyShow: "was described / is described"
      },
      {
        examNum: 22,
        paragraph: 1,
        before: "Miss Marple loved growing roses and often invited other village ",
        afterInline: " to tea in her house.",
        afterTail: "",
        cue: "LADY",
        answers: ["ladies"],
        keyShow: "ladies"
      },
      {
        examNum: 23,
        paragraph: 1,
        before: "She ",
        afterInline: " different from the other neighbours.",
        afterTail: "",
        cue: "NOT LOOK",
        answers: ["did not look", "didn't look"],
        keyShow: "did not look / didn't look"
      },
      {
        examNum: 24,
        paragraph: 1,
        before: "However, when a crime occurred, she was often ",
        afterInline: " than the police. The police officers respected her analytical mind and attention to detail.",
        afterTail: "",
        cue: "EFFECTIVE",
        answers: ["more effective"],
        keyShow: "more effective"
      },
      {
        examNum: 25,
        paragraph: 1,
        before: "They always ",
        afterInline: " the old lady's advice helpful.",
        afterTail: "",
        cue: "FIND",
        answers: ["found"],
        keyShow: "found"
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "Miss Marple herself believed that it was her life experience that helped ",
        afterInline: " solve the crimes.",
        afterTail: "",
        cue: "SHE",
        answers: ["her"],
        keyShow: "her"
      },
      {
        examNum: 27,
        paragraph: 1,
        before: "She often said she ",
        afterInline: " all her life in a small village. Watching the villagers' lives, she had learnt to understand people's behaviour and the ways they tend to act in different situations.",
        afterTail: "",
        cue: "LIVE",
        answers: ["had lived"],
        keyShow: "had lived"
      },
      {
        examNum: 28,
        paragraph: 1,
        before: "I believe that, if Miss Marple lived in our time, her knowledge of human nature ",
        afterInline: " very useful too!",
        afterTail: "",
        cue: "BE",
        answers: ["would be"],
        keyShow: "would be"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
