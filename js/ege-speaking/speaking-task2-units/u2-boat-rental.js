(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u2-boat-rental",
    unitLabel: "Unit 2",
    title: "Boat rental",
    lead:
      "Task 2 · 4 direct questions про аренду лодки для рыбалки. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Boat rental",
    imageSrc: "",
    imageAlt: "Boat for fishing on a lake",
    scenario:
      "You are considering renting a boat to enjoy fishing and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "location",
        label: "location of rentals",
        keywords: [
          "location",
          "where",
          "rent",
          "rental",
          "rentals",
          "address",
          "place",
          "find",
          "office"
        ],
        frame: "Where is the location of the rentals?",
        grammarTip: "Where…? / What is the location…? — не *The location is…*"
      },
      {
        id: "price",
        label: "price per hour",
        keywords: [
          "price",
          "hour",
          "cost",
          "much",
          "pay",
          "fee",
          "rate",
          "per"
        ],
        frame: "How much is the price per hour?",
        grammarTip: "How much…? / What is the price per hour…? — не statement: *The price is…*"
      },
      {
        id: "documents",
        label: "documents needed",
        keywords: [
          "documents",
          "document",
          "need",
          "bring",
          "license",
          "licence",
          "passport",
          "id"
        ],
        frame: "What documents do I need?",
        grammarTip: "What documents…? / Do I need any documents…? — Do + subject + verb."
      },
      {
        id: "equipment",
        label: "fishing equipment available",
        keywords: [
          "fishing",
          "equipment",
          "gear",
          "available",
          "provide",
          "rod",
          "rods",
          "tackle",
          "have"
        ],
        frame: "Is fishing equipment available?",
        grammarTip: "Is … available? / Do you provide fishing equipment…? — не *Fishing equipment is available.*"
      }
    ],
    modelQuestions: [
      "Where is the location of the boat rentals?",
      "How much is the price per hour?",
      "What documents do I need to rent a boat?",
      "Is fishing equipment available?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы location / price / documents / equipment раскрыты",
      "Порядок слов: Where… / How much… / What… / Is…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
