(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u7-botanical-garden",
    unitLabel: "Unit 7",
    title: "Botanical garden",
    lead:
      "Task 2 · 4 direct questions про ботанический сад. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Botanical garden",
    imageSrc: "",
    imageAlt: "Botanical garden with flowers and paths",
    scenario:
      "You are considering visiting the botanical garden and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "hours",
        label: "opening hours",
        keywords: [
          "opening",
          "hours",
          "hour",
          "open",
          "close",
          "when",
          "time",
          "schedule"
        ],
        frame: "What are the opening hours?",
        grammarTip: "What are the opening hours…? / When is the garden open…? — не *The opening hours are…*"
      },
      {
        id: "season",
        label: "the best time of year to visit it",
        keywords: [
          "best",
          "time",
          "year",
          "visit",
          "season",
          "when",
          "month",
          "months"
        ],
        frame: "What is the best time of year to visit it?",
        grammarTip: "What is the best time…? / When is the best time to visit…? — не *The best time is…*"
      },
      {
        id: "admission",
        label: "admission fee",
        keywords: [
          "admission",
          "fee",
          "price",
          "cost",
          "much",
          "pay",
          "ticket",
          "tickets"
        ],
        frame: "What is the admission fee?",
        grammarTip: "What is the admission fee…? / How much is the admission fee…? — не *The fee is…*"
      },
      {
        id: "discounts",
        label: "group discounts",
        keywords: [
          "group",
          "discounts",
          "discount",
          "groups",
          "offer",
          "available",
          "any"
        ],
        frame: "Are there any group discounts?",
        grammarTip: "Are there…? / Do you offer group discounts…? — не *There are group discounts.*"
      }
    ],
    modelQuestions: [
      "What are the opening hours of the botanical garden?",
      "What is the best time of year to visit it?",
      "What is the admission fee?",
      "Are there any group discounts?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы hours / best time / admission / discounts раскрыты",
      "Порядок слов: What are… / What is… / Are there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
