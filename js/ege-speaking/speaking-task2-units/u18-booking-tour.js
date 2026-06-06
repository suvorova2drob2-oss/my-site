(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u18-booking-tour",
    unitLabel: "Unit 18",
    title: "Booking a tour",
    lead:
      "Task 2 · 4 direct questions про бронирование тура с друзьями. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Tour booking",
    imageSrc: "",
    imageAlt: "Friends planning a tour together",
    scenario:
      "You are considering booking a tour with your friends and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "dates",
        label: "possible dates",
        keywords: [
          "dates",
          "date",
          "possible",
          "when",
          "available",
          "start",
          "begin",
          "tour"
        ],
        frame: "What are the possible dates?",
        grammarTip: "What are the possible dates…? / When is the tour available…? — не *The dates are…*"
      },
      {
        id: "duration",
        label: "duration",
        keywords: [
          "duration",
          "long",
          "last",
          "days",
          "day",
          "hours",
          "hour",
          "how"
        ],
        frame: "How long is the tour?",
        grammarTip: "How long…? / What is the duration…? — глагол в вопросительной форме."
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
        id: "discounts",
        label: "group discounts",
        keywords: [
          "group",
          "discounts",
          "discount",
          "groups",
          "offer",
          "available",
          "any",
          "friends"
        ],
        frame: "Are there any group discounts?",
        grammarTip: "Are there…? / Do you offer group discounts…? — не *There are group discounts.*"
      }
    ],
    modelQuestions: [
      "What are the possible dates?",
      "How long is the tour?",
      "What payment options are available?",
      "Are there any group discounts?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы dates / duration / payment / discounts раскрыты",
      "Порядок слов: What are… / How long… / What payment… / Are there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
