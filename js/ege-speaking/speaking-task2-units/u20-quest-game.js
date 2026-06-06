(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u20-quest-game",
    unitLabel: "Unit 20",
    title: "Quest game",
    lead:
      "Task 2 · 4 direct questions про quest game с друзьями. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Quest game",
    imageSrc: "",
    imageAlt: "Friends playing a quest escape game",
    scenario:
      "You are considering playing a quest game with your friends and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "programmes",
        label: "programmes available",
        keywords: [
          "programmes",
          "programme",
          "programs",
          "program",
          "available",
          "which",
          "what",
          "any"
        ],
        frame: "What programmes are available?",
        grammarTip: "What programmes…? / Which programmes are available…? — не *Programmes are available.*"
      },
      {
        id: "payment",
        label: "payment options",
        keywords: [
          "payment",
          "options",
          "option",
          "pay",
          "methods",
          "method",
          "card",
          "cash"
        ],
        frame: "What payment options are available?",
        grammarTip: "What payment options…? / How can we pay…? — не *Payment options are available.*"
      },
      {
        id: "food",
        label: "possibility to bring food",
        keywords: [
          "food",
          "bring",
          "possibility",
          "allowed",
          "allow",
          "can",
          "take",
          "snacks"
        ],
        frame: "Is it possible to bring food?",
        grammarTip: "Is it possible…? / Can we bring food…? — не *You can bring food.*"
      },
      {
        id: "birthday",
        label: "discounts for a birthday person",
        keywords: [
          "discounts",
          "discount",
          "birthday",
          "person",
          "celebration",
          "special",
          "offer",
          "any"
        ],
        frame: "Are there any discounts for a birthday person?",
        grammarTip: "Are there…? / Do you offer discounts for a birthday person…? — не *There are discounts.*"
      }
    ],
    modelQuestions: [
      "What programmes are available?",
      "What payment options are available?",
      "Is it possible to bring food?",
      "Are there any discounts for a birthday person?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы programmes / payment / food / birthday discounts раскрыты",
      "Порядок слов: What… / Is it possible… / Are there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
