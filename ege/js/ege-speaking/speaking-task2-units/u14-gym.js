(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u14-gym",
    unitLabel: "Unit 14",
    title: "Gym",
    lead:
      "Task 2 · 4 direct questions про спортзал. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Gym",
    imageSrc: "",
    imageAlt: "People exercising in a gym",
    scenario:
      "You are considering joining a gym and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "equipment",
        label: "equipment available",
        keywords: [
          "equipment",
          "available",
          "machines",
          "weights",
          "what",
          "which",
          "have",
          "any"
        ],
        frame: "What equipment is available?",
        grammarTip: "What equipment…? / Is there any equipment available…? — не *Equipment is available.*"
      },
      {
        id: "clothes",
        label: "special clothes needed",
        keywords: [
          "clothes",
          "clothing",
          "special",
          "need",
          "needed",
          "wear",
          "uniform",
          "any"
        ],
        frame: "Do I need any special clothes?",
        grammarTip: "Do I need…? / Are any special clothes needed…? — Do + subject + verb."
      },
      {
        id: "transport",
        label: "public transport to get there",
        keywords: [
          "public",
          "transport",
          "bus",
          "metro",
          "subway",
          "get",
          "reach",
          "how"
        ],
        frame: "How can I get there by public transport?",
        grammarTip: "How can I get…? / Is there public transport to get there…? — не *Public transport goes there.*"
      },
      {
        id: "membership",
        label: "membership fee",
        keywords: [
          "membership",
          "fee",
          "price",
          "cost",
          "much",
          "pay",
          "month",
          "monthly"
        ],
        frame: "How much is the membership fee?",
        grammarTip: "How much…? / What is the membership fee…? — не statement: *The fee is…*"
      }
    ],
    modelQuestions: [
      "What equipment is available?",
      "Do I need any special clothes?",
      "How can I get there by public transport?",
      "How much is the membership fee?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы equipment / clothes / transport / membership раскрыты",
      "Порядок слов: What… / Do I… / How can… / How much…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
