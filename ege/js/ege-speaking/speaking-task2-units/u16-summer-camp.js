(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u16-summer-camp",
    unitLabel: "Unit 16",
    title: "Summer camp",
    lead:
      "Task 2 · 4 direct questions про летний лагерь. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Summer camp",
    imageSrc: "",
    imageAlt: "Children at a summer camp",
    scenario:
      "You are considering going to a summer camp and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "location",
        label: "camp's location",
        keywords: [
          "camp",
          "location",
          "where",
          "located",
          "address",
          "place",
          "find"
        ],
        frame: "Where is the camp located?",
        grammarTip: "Where…? / What is the camp's location…? — не *The camp's location is…*"
      },
      {
        id: "dates",
        label: "dates of camp sessions",
        keywords: [
          "dates",
          "date",
          "sessions",
          "session",
          "when",
          "start",
          "begin",
          "camp"
        ],
        frame: "What are the dates of camp sessions?",
        grammarTip: "What are the dates…? / When do camp sessions start…? — не *The dates are…*"
      },
      {
        id: "accommodation",
        label: "accommodation",
        keywords: [
          "accommodation",
          "stay",
          "room",
          "rooms",
          "dorm",
          "cabins",
          "where",
          "sleep"
        ],
        frame: "What accommodation is provided?",
        grammarTip: "What accommodation…? / What kind of accommodation…? — не *Accommodation is provided.*"
      },
      {
        id: "languages",
        label: "languages spoken",
        keywords: [
          "languages",
          "language",
          "spoken",
          "speak",
          "english",
          "russian",
          "which",
          "what"
        ],
        frame: "What languages are spoken?",
        grammarTip: "What languages…? / Which languages are spoken…? — не *Languages are spoken.*"
      }
    ],
    modelQuestions: [
      "Where is the camp located?",
      "What are the dates of camp sessions?",
      "What accommodation is provided?",
      "What languages are spoken?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы location / dates / accommodation / languages раскрыты",
      "Порядок слов: Where… / What are… / What…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
