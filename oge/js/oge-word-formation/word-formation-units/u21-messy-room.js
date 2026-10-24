/**
 * OGE Word Formation · extra practice · messy room (workbook p. 15, top).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u21-messy-room-word-formation",
    unitOrder: 21,
    title: "Practice · Messy room",
    examSection: "Practice · 8 gaps",
    headerTitle: "Online · messy room",
    instructionHtml:
      "Образуйте однокоренные слова от слов <strong>CAPS</strong> так, чтобы они грамматически и лексически подходили по смыслу.",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "Sometimes, my parents and I ",
        afterInline: " about how much time I spent online.",
        afterTail: "",
        cue: "AGREE",
        answers: ["disagree"],
        keyShow: "disagree"
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "They don't ",
        afterInline: " that it's an easy way for me to chat with my friends.",
        afterTail: "",
        cue: "REAL",
        answers: ["realise", "realize"],
        keyShow: "realise"
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "They say that my room is ",
        afterInline: " and I must tidy it first, and then I can chat with my friends.",
        afterTail: "",
        cue: "MESS",
        answers: ["messy"],
        keyShow: "messy"
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "The truth is that today my room is very ",
        afterInline: " and I can't find my clothes or my books, so I'm trying to clean it a bit.",
        afterTail: "",
        cue: "TIDY",
        answers: ["untidy"],
        keyShow: "untidy"
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "I really ",
        afterInline: " this job! In fact, I hate it!",
        afterTail: "",
        cue: "LIKE",
        answers: ["dislike"],
        keyShow: "dislike"
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "And my little brother isn't very ",
        afterInline: " either! He's just watching me and laughing!",
        afterTail: "",
        cue: "HELP",
        answers: ["helpful"],
        keyShow: "helpful"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "",
        afterInline: ", I think little brothers must help their big sisters, but he doesn't agree,",
        afterTail: "",
        cue: "PERSON",
        answers: ["personally"],
        keyShow: "Personally"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "So, I need to have a ",
        afterInline: " with him to explain the rules.",
        afterTail: "",
        cue: "DISCUSS",
        answers: ["discussion"],
        keyShow: "discussion"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
