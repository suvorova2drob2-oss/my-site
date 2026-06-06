(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u10-roller-skating",
    unitLabel: "Unit 10",
    title: "Roller-skating",
    lead:
      "Task 2 · 4 direct questions про роликовый спорт. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Roller-skating",
    imageSrc: "",
    imageAlt: "People roller-skating in a park",
    scenario:
      "You are considering trying roller-skating and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "skills",
        label: "skills needed",
        keywords: [
          "skills",
          "skill",
          "need",
          "needed",
          "experience",
          "able",
          "can",
          "any"
        ],
        frame: "What skills are needed?",
        grammarTip: "What skills…? / Are there any skills needed…? — не *Skills are needed.*"
      },
      {
        id: "equipment",
        label: "equipment rental",
        keywords: [
          "equipment",
          "rental",
          "rent",
          "hire",
          "skates",
          "provide",
          "available",
          "borrow"
        ],
        frame: "Can I rent equipment?",
        grammarTip: "Can I…? / Is equipment rental available…? — не *Equipment rental is available.*"
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
          "per",
          "fee",
          "rate"
        ],
        frame: "How much is the price per hour?",
        grammarTip: "How much…? / What is the price per hour…? — не statement: *The price is…*"
      },
      {
        id: "instructor",
        label: "instructor's help",
        keywords: [
          "instructor",
          "help",
          "coach",
          "teacher",
          "assist",
          "support",
          "guidance",
          "lesson"
        ],
        frame: "Can I get the instructor's help?",
        grammarTip: "Can I…? / Is the instructor's help available…? — не *The instructor helps.*"
      }
    ],
    modelQuestions: [
      "What skills are needed?",
      "Can I rent equipment?",
      "How much is the price per hour?",
      "Can I get the instructor's help?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы skills / equipment / price / instructor раскрыты",
      "Порядок слов: What… / Can I… / How much…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
