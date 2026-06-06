(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u5-birthday-club",
    unitLabel: "Unit 5",
    title: "Birthday in a club",
    lead:
      "Task 2 · 4 direct questions про празднование дня рождения в клубе. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Birthday club",
    imageSrc: "",
    imageAlt: "Night club interior",
    scenario:
      "You are considering celebrating your birthday in a club and now you'd like to get more information.",
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
        frame: "Where is the club located?",
        grammarTip: "Where…? / What is the location…? — не *The location is…*"
      },
      {
        id: "music",
        label: "music choice",
        keywords: [
          "music",
          "choice",
          "play",
          "played",
          "kind",
          "type",
          "dj",
          "genre"
        ],
        frame: "What is the music choice?",
        grammarTip: "What kind of music…? / What is the music choice…? — не *The music is…*"
      },
      {
        id: "catering",
        label: "catering service",
        keywords: [
          "catering",
          "service",
          "food",
          "provide",
          "available",
          "menu",
          "drinks"
        ],
        frame: "Do you provide a catering service?",
        grammarTip: "Do you provide…? / Is there a catering service…? — Do + subject + verb."
      },
      {
        id: "price",
        label: "price per person",
        keywords: [
          "price",
          "person",
          "cost",
          "much",
          "pay",
          "per",
          "fee",
          "guest"
        ],
        frame: "What is the price per person?",
        grammarTip: "What is the price…? / How much does it cost per person…? — не *The price is…*"
      }
    ],
    modelQuestions: [
      "Where is the club located?",
      "What is the music choice?",
      "Do you provide a catering service?",
      "What is the price per person?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы location / music / catering / price раскрыты",
      "Порядок слов: Where… / What… / Do you… / What is…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
