(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u11-art-workshop",
    unitLabel: "Unit 11",
    title: "Art workshop",
    lead:
      "Task 2 · 4 direct questions про художественный мастер-класс. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Art workshop",
    imageSrc: "",
    imageAlt: "People painting in an art workshop",
    scenario:
      "You are considering joining an art workshop and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "location",
        label: "location",
        keywords: [
          "location",
          "where",
          "located",
          "address",
          "place",
          "find"
        ],
        frame: "Where is the art workshop located?",
        grammarTip: "Where…? / What is the location…? — не *The location is…*"
      },
      {
        id: "price",
        label: "price for one",
        keywords: [
          "price",
          "cost",
          "much",
          "pay",
          "one",
          "person",
          "ticket",
          "fee"
        ],
        frame: "How much is the price for one?",
        grammarTip: "How much…? / What is the price for one…? — не statement: *The price is…*"
      },
      {
        id: "skills",
        label: "skills needed",
        keywords: [
          "skills",
          "skill",
          "need",
          "needed",
          "experience",
          "draw",
          "paint",
          "any"
        ],
        frame: "What skills are needed?",
        grammarTip: "What skills…? / Are there any skills needed…? — не *Skills are needed.*"
      },
      {
        id: "age",
        label: "age limitations",
        keywords: [
          "age",
          "limitations",
          "limit",
          "limits",
          "old",
          "young",
          "minimum",
          "maximum",
          "any"
        ],
        frame: "Are there any age limitations?",
        grammarTip: "Are there…? / What are the age limitations…? — не *There are age limitations.*"
      }
    ],
    modelQuestions: [
      "Where is the art workshop located?",
      "How much is the price for one?",
      "What skills are needed?",
      "Are there any age limitations?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы location / price / skills / age раскрыты",
      "Порядок слов: Where… / How much… / What… / Are there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
