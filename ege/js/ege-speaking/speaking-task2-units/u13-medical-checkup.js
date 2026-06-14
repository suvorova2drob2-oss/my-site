(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u13-medical-checkup",
    unitLabel: "Unit 13",
    title: "Medical check-up",
    lead:
      "Task 2 · 4 direct questions про медицинский check-up. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Medical check-up",
    imageSrc: "",
    imageAlt: "Medical clinic reception",
    scenario:
      "You are considering doing a medical check-up and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "specialists",
        label: "specialists available",
        keywords: [
          "specialists",
          "specialist",
          "available",
          "doctors",
          "doctor",
          "which",
          "what",
          "any"
        ],
        frame: "What specialists are available?",
        grammarTip: "What specialists…? / Are there any specialists available…? — не *Specialists are available.*"
      },
      {
        id: "waiting",
        label: "waiting time for medical tests",
        keywords: [
          "waiting",
          "time",
          "tests",
          "test",
          "medical",
          "long",
          "wait",
          "how"
        ],
        frame: "How long is the waiting time for medical tests?",
        grammarTip: "How long…? / What is the waiting time…? — не *The waiting time is…*"
      },
      {
        id: "appointment",
        label: "making an appointment online",
        keywords: [
          "appointment",
          "online",
          "book",
          "booking",
          "make",
          "internet",
          "website",
          "can"
        ],
        frame: "Can I make an appointment online?",
        grammarTip: "Can I…? / Is it possible to make an appointment online…? — не *You can make an appointment online.*"
      },
      {
        id: "price",
        label: "full check-up price",
        keywords: [
          "full",
          "check-up",
          "checkup",
          "price",
          "cost",
          "much",
          "pay",
          "fee"
        ],
        frame: "How much is the full check-up price?",
        grammarTip: "How much…? / What is the full check-up price…? — не statement: *The price is…*"
      }
    ],
    modelQuestions: [
      "What specialists are available?",
      "How long is the waiting time for medical tests?",
      "Can I make an appointment online?",
      "How much is the full check-up price?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы specialists / waiting time / appointment / price раскрыты",
      "Порядок слов: What… / How long… / Can I… / How much…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
