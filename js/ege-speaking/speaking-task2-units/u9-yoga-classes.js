(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u9-yoga-classes",
    unitLabel: "Unit 9",
    title: "Yoga classes",
    lead:
      "Task 2 · 4 direct questions про занятия йогой. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Yoga studio",
    imageSrc: "",
    imageAlt: "People doing yoga in a studio",
    scenario:
      "You are considering taking yoga classes and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "fee",
        label: "tuition fee",
        keywords: ["fee", "fees", "cost", "price", "pay", "much", "expensive", "tuition"],
        frame: "How much is the tuition fee?",
        grammarTip: "How much…? / What is the tuition fee…? — не statement: *The fee is…*"
      },
      {
        id: "duration",
        label: "duration of one class",
        keywords: [
          "long",
          "duration",
          "last",
          "minutes",
          "minute",
          "hours",
          "hour",
          "class"
        ],
        frame: "How long does one class last?",
        grammarTip: "How long…? / What is the duration of one class…? — глагол в вопросительной форме."
      },
      {
        id: "clothes",
        label: "special clothes",
        keywords: [
          "clothes",
          "clothing",
          "wear",
          "uniform",
          "need",
          "special",
          "dress"
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
          "schedule",
          "classes"
        ],
        frame: "Are there any evening classes?",
        grammarTip: "Are there…? / Do you have evening classes…? — не *There are evening classes.*"
      }
    ],
    modelQuestions: [
      "How much is the tuition fee?",
      "How long does one class last?",
      "Do I need any special clothes?",
      "Are there any evening classes?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы fee / duration / clothes / evening раскрыты",
      "Порядок слов: How much… / How long… / Do I… / Are there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
