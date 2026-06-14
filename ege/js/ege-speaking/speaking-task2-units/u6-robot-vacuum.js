(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u6-robot-vacuum",
    unitLabel: "Unit 6",
    title: "Robot vacuum cleaner",
    lead:
      "Task 2 · 4 direct questions про робот-пылесос. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Robot vacuum cleaner",
    imageSrc: "",
    imageAlt: "Robot vacuum cleaner on the floor",
    scenario:
      "You are considering buying a robot vacuum cleaner and now you'd like to get more information about it.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "colour",
        label: "colour options",
        keywords: [
          "colour",
          "color",
          "colours",
          "colors",
          "options",
          "available",
          "choose"
        ],
        frame: "What colour options are available?",
        grammarTip: "What colour options…? / What colours…? — не *The colours are…*"
      },
      {
        id: "features",
        label: "number of features",
        keywords: [
          "features",
          "feature",
          "many",
          "number",
          "how",
          "functions",
          "modes"
        ],
        frame: "How many features does it have?",
        grammarTip: "How many…? / What is the number of features…? — глагол в вопросительной форме."
      },
      {
        id: "working-time",
        label: "maximum working time",
        keywords: [
          "maximum",
          "working",
          "time",
          "long",
          "last",
          "hours",
          "hour",
          "minutes",
          "charge",
          "battery"
        ],
        frame: "What is the maximum working time?",
        grammarTip: "What is the maximum working time…? / How long can it work…? — не *The working time is…*"
      },
      {
        id: "delivery",
        label: "cost of delivery",
        keywords: [
          "delivery",
          "cost",
          "much",
          "pay",
          "shipping",
          "deliver",
          "price",
          "fee"
        ],
        frame: "How much does the delivery cost?",
        grammarTip: "How much…? / What is the cost of delivery…? — не statement: *The delivery costs…*"
      }
    ],
    modelQuestions: [
      "What colour options are available?",
      "How many features does it have?",
      "What is the maximum working time?",
      "How much does the delivery cost?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы colour / features / working time / delivery раскрыты",
      "Порядок слов: What… / How many… / What is… / How much…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
