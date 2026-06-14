(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u12-music-festival",
    unitLabel: "Unit 12",
    title: "Music festival",
    lead:
      "Task 2 · 4 direct questions про музыкальный фестиваль. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Music festival",
    imageSrc: "",
    imageAlt: "Outdoor music festival with a crowd",
    scenario:
      "You are considering going to a music festival and now you'd like to get more information.",
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
          "find",
          "held"
        ],
        frame: "Where is the music festival located?",
        grammarTip: "Where…? / What is the location…? — не *The location is…*"
      },
      {
        id: "transport",
        label: "transport available",
        keywords: [
          "transport",
          "available",
          "bus",
          "shuttle",
          "get",
          "reach",
          "travel",
          "how"
        ],
        frame: "What transport is available?",
        grammarTip: "What transport…? / Is there any transport available…? — не *Transport is available.*"
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
          "any"
        ],
        frame: "Are there any group discounts?",
        grammarTip: "Are there…? / Do you offer group discounts…? — не *There are group discounts.*"
      },
      {
        id: "accommodation",
        label: "accommodation nearby",
        keywords: [
          "accommodation",
          "nearby",
          "hotel",
          "hotels",
          "stay",
          "near",
          "close",
          "lodging"
        ],
        frame: "Is there any accommodation nearby?",
        grammarTip: "Is there…? / What accommodation is nearby…? — не *There is accommodation nearby.*"
      }
    ],
    modelQuestions: [
      "Where is the music festival located?",
      "What transport is available?",
      "Are there any group discounts?",
      "Is there any accommodation nearby?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы location / transport / discounts / accommodation раскрыты",
      "Порядок слов: Where… / What… / Are there… / Is there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
