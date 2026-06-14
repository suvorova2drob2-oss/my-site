(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u17-gift-for-friend",
    unitLabel: "Unit 17",
    title: "Gift for a friend",
    lead:
      "Task 2 · 4 direct questions про покупку подарка другу. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Gift shop",
    imageSrc: "",
    imageAlt: "Gift shop with presents on display",
    scenario:
      "You are considering buying a gift for your friend and now you'd like to get more information.",
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
        grammarTip: "What are the opening hours…? / When is the shop open…? — не *The opening hours are…*"
      },
      {
        id: "gifts",
        label: "kinds of gifts",
        keywords: [
          "kinds",
          "kind",
          "gifts",
          "gift",
          "types",
          "what",
          "which",
          "sell"
        ],
        frame: "What kinds of gifts do you sell?",
        grammarTip: "What kinds of gifts…? / What types of gifts…? — не *We sell different gifts.*"
      },
      {
        id: "payment",
        label: "payment methods",
        keywords: [
          "payment",
          "methods",
          "method",
          "pay",
          "card",
          "cash",
          "how",
          "accept"
        ],
        frame: "What payment methods do you accept?",
        grammarTip: "What payment methods…? / How can I pay…? — не *We accept cards.*"
      },
      {
        id: "offers",
        label: "special offers",
        keywords: [
          "special",
          "offers",
          "offer",
          "discounts",
          "discount",
          "deals",
          "any",
          "promotions"
        ],
        frame: "Are there any special offers?",
        grammarTip: "Are there…? / Do you have any special offers…? — не *There are special offers.*"
      }
    ],
    modelQuestions: [
      "What are the opening hours?",
      "What kinds of gifts do you sell?",
      "What payment methods do you accept?",
      "Are there any special offers?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы hours / gifts / payment / offers раскрыты",
      "Порядок слов: What are… / What kinds… / What payment… / Are there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
