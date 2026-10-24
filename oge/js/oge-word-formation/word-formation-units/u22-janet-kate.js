/**
 * OGE Word Formation · extra practice · Janet & Kate (workbook p. 15, Ex. I).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u22-janet-kate-word-formation",
    unitOrder: 22,
    title: "Practice · Janet & Kate",
    examSection: "Practice · 8 gaps",
    headerTitle: "Janet · Kate · birthday",
    instructionHtml:
      "Раскройте скобки, преобразуя выделенные слова так, чтобы они грамматически и лексически соответствовали смыслу предложений.",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "Janet: Hi, Kate. Do you want to come with me? It's my mother's birthday next week and I want to buy her a present. There's a shop with very ",
        afterInline: " shop assistants there.",
        afterTail: "",
        cue: "FRIEND",
        answers: ["friendly"],
        keyShow: "friendly"
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "Kate: Okay. I'll ",
        afterInline: " come with you. What do you want to get for your mum?",
        afterTail: "",
        cue: "HAPPY",
        answers: ["happily"],
        keyShow: "happily"
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "Janet: Well, I'm thinking about something ",
        afterInline: ", like a scarf or a T-shirt.",
        afterTail: "",
        cue: "PERSON",
        answers: ["personal"],
        keyShow: "personal"
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "Kate: Mmm... right. And your mum has ",
        afterInline: " good taste in clothes. Let's go, I'm sure we'll find something nice for her.",
        afterTail: "",
        cue: "REAL",
        answers: ["really"],
        keyShow: "really"
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "Janet: I have some homework to do first. I must write a ",
        afterInline: " of my best friend for my English lesson.",
        afterTail: "",
        cue: "DESCRIBE",
        answers: ["description"],
        keyShow: "description"
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "Kate: Well, I can help you to write about our ",
        afterInline: " together. It's easy, don't worry!",
        afterTail: "",
        cue: "FRIEND",
        answers: ["friendship"],
        keyShow: "friendship"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Janet: Great! I need some help. I am ",
        afterInline: " with my marks from last month.",
        afterTail: "",
        cue: "HAPPY",
        answers: ["unhappy"],
        keyShow: "unhappy"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Kate: Hmm... and I need help with my project. Let's make an ",
        afterInline: ". We can go shopping first, and then we can do our homework together. Janet: Thanks, Kate. Let's go!",
        afterTail: "",
        cue: "AGREE",
        answers: ["agreement"],
        keyShow: "agreement"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
