(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u15-summer-music-festival",
    unitLabel: "Unit 15",
    title: "Summer music festival",
    lead:
      "Task 2 · 4 direct questions про летний музыкальный фестиваль. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Summer music festival",
    imageSrc: "",
    imageAlt: "Summer outdoor music festival",
    scenario:
      "You are considering visiting a summer music festival and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "bands",
        label: "bands performing",
        keywords: [
          "bands",
          "band",
          "performing",
          "perform",
          "artists",
          "singers",
          "which",
          "what"
        ],
        frame: "Which bands are performing?",
        grammarTip: "Which bands…? / What bands are performing…? — не *Bands are performing.*"
      },
      {
        id: "dates",
        label: "dates of the festival",
        keywords: [
          "dates",
          "date",
          "festival",
          "when",
          "start",
          "begin",
          "end",
          "days"
        ],
        frame: "What are the dates of the festival?",
        grammarTip: "What are the dates…? / When does the festival take place…? — не *The dates are…*"
      },
      {
        id: "price",
        label: "price for one person",
        keywords: [
          "price",
          "person",
          "cost",
          "much",
          "pay",
          "one",
          "ticket",
          "fee"
        ],
        frame: "How much is the price for one person?",
        grammarTip: "How much…? / What is the price for one person…? — не statement: *The price is…*"
      },
      {
        id: "safety",
        label: "safety measures",
        keywords: [
          "safety",
          "measures",
          "measure",
          "secure",
          "security",
          "safe",
          "what",
          "any"
        ],
        frame: "What safety measures are there?",
        grammarTip: "What safety measures…? / Are there any safety measures…? — не *Safety measures are there.*"
      }
    ],
    modelQuestions: [
      "Which bands are performing?",
      "What are the dates of the festival?",
      "How much is the price for one person?",
      "What safety measures are there?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы bands / dates / price / safety раскрыты",
      "Порядок слов: Which… / What are… / How much… / What…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
