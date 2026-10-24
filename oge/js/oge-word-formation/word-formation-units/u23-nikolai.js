/**
 * OGE Word Formation · extra practice · Nikolai.
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u23-nikolai-word-formation",
    unitOrder: 23,
    title: "Practice · Nikolai",
    examSection: "Practice · 8 gaps",
    headerTitle: "Nikolai",
    instructionHtml:
      "Образуйте однокоренные слова от слов <strong>CAPS</strong> так, чтобы они грамматически и лексически подходили по смыслу.",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "Nikolai is fun to be with. He's very ",
        afterInline: " and clever.",
        afterTail: "",
        cue: "FRIEND",
        answers: ["friendly"],
        keyShow: "friendly"
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "He likes smiling and he's never ",
        afterInline: ".",
        afterTail: "",
        cue: "HAPPY",
        answers: ["unhappy"],
        keyShow: "unhappy"
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "He enjoys sports, but he ",
        afterInline: " dancing. He hates it!",
        afterTail: "",
        cue: "LIKE",
        answers: ["dislikes"],
        keyShow: "dislikes"
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "He ",
        afterInline: " plays tennis and basketball with his friends.",
        afterTail: "",
        cue: "REGULAR",
        answers: ["regularly"],
        keyShow: "regularly"
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "He's also very ",
        afterInline: " when his friends have problems with their homework.",
        afterTail: "",
        cue: "HELP",
        answers: ["helpful"],
        keyShow: "helpful"
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "I think he has a great ",
        afterInline: " and he's a true friend.",
        afterTail: "",
        cue: "PERSON",
        answers: ["personality"],
        keyShow: "personality"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "But sometimes his parents are angry about his room. His bedroom is always ",
        afterInline: ".",
        afterTail: "",
        cue: "MESS",
        answers: ["messy"],
        keyShow: "messy"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "He realises that and he is ",
        afterInline: " trying to change.",
        afterTail: "",
        cue: "REAL",
        answers: ["really"],
        keyShow: "really"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
