(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u1-dancing-classes",
    unitLabel: "Unit 1",
    title: "Dancing classes",
    lead:
      "Task 2 · 4 direct questions по объявлению о танцах. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "Where dreams come true!",
    imageSrc: "",
    imageAlt: "People dancing in a studio",
    scenario:
      "You are considering taking dancing classes and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "fee",
        label: "tuition fee",
        keywords: ["fee", "fees", "cost", "price", "pay", "much", "expensive"],
        frame: "How much is the tuition fee?",
        grammarTip: "How much…? / What is the cost…? — не statement: *The fee is…*"
      },
      {
        id: "duration",
        label: "duration of the class",
        keywords: [
          "long",
          "duration",
          "last",
          "minutes",
          "minute",
          "hours",
          "hour"
        ],
        frame: "How long does each class last?",
        grammarTip: "How long…? / What is the duration…? — глагол в вопросительной форме."
      },
      {
        id: "clothes",
        label: "special clothes",
        keywords: [
          "clothes",
          "clothing",
          "wear",
          "uniform",
          "shoes",
          "dress",
          "need"
        ],
        frame: "Do I need any special clothes?",
        grammarTip: "Do I need…? / What clothes should I wear…? — Do/Does + subject + verb."
      },
      {
        id: "evening",
        label: "evening classes",
        keywords: [
          "evening",
          "night",
          "afternoon",
          "morning",
          "time",
          "schedule"
        ],
        frame: "Are there any evening classes?",
        grammarTip: "Are there…? / Do you have evening classes…? — не *There are evening classes.*"
      }
    ],
    modelQuestions: [
      "How much is the tuition fee for the dancing classes?",
      "How long does each class last?",
      "Do I need any special clothes for the classes?",
      "Are there any evening classes?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы fee / duration / clothes / evening раскрыты",
      "Порядок слов: Do you… / How much… / Are there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
