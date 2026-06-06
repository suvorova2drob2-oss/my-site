(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u3-bus-city-tour",
    unitLabel: "Unit 3",
    title: "Bus city tour",
    lead:
      "Task 2 · 4 direct questions про автобусную экскурсию по городу. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Bus city tour",
    imageSrc: "",
    imageAlt: "Sightseeing bus in a city",
    scenario:
      "You are going on a bus city tour and you'd like to have more information about it.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "starting",
        label: "starting point",
        keywords: [
          "start",
          "starting",
          "point",
          "begin",
          "depart",
          "departure",
          "where",
          "leave"
        ],
        frame: "Where is the starting point?",
        grammarTip: "Where…? / What is the starting point…? — не *The starting point is…*"
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
        grammarTip: "How much…? / What is the price for one person…? — не statement: *The price is…*"
      },
      {
        id: "stops",
        label: "number of stops",
        keywords: [
          "stops",
          "stop",
          "many",
          "number",
          "how",
          "places",
          "visit"
        ],
        frame: "How many stops are there on the tour?",
        grammarTip: "How many…? / What is the number of stops…? — глагол в вопросительной форме."
      },
      {
        id: "booking",
        label: "booking by phone",
        keywords: [
          "book",
          "booking",
          "phone",
          "call",
          "telephone",
          "reserve",
          "reservation"
        ],
        frame: "Can I book by phone?",
        grammarTip: "Can I…? / Is it possible to book by phone…? — не *You can book by phone.*"
      }
    ],
    modelQuestions: [
      "Where is the starting point of the bus city tour?",
      "How much is the price for one?",
      "How many stops are there on the tour?",
      "Can I book the tour by phone?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы starting point / price / stops / booking раскрыты",
      "Порядок слов: Where… / How much… / How many… / Can I…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
