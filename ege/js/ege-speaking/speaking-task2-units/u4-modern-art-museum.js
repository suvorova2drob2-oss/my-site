(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u4-modern-art-museum",
    unitLabel: "Unit 4",
    title: "Museum of modern art",
    lead:
      "Task 2 · 4 direct questions про музей современного искусства. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Museum of modern art",
    imageSrc: "",
    imageAlt: "Modern art museum building",
    scenario:
      "You are going to visit a museum of modern art with your friends and you'd like to have more information about this museum.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "transport",
        label: "transport to the museum",
        keywords: [
          "transport",
          "get",
          "reach",
          "bus",
          "metro",
          "subway",
          "train",
          "how",
          "travel"
        ],
        frame: "How can I get to the museum?",
        grammarTip: "How can I get…? / What transport goes…? — не *The transport is…*"
      },
      {
        id: "excursion",
        label: "excursion time",
        keywords: [
          "excursion",
          "time",
          "long",
          "duration",
          "last",
          "minutes",
          "hours",
          "hour"
        ],
        frame: "How long does the excursion last?",
        grammarTip: "How long…? / What is the excursion time…? — глагол в вопросительной форме."
      },
      {
        id: "admission",
        label: "admission fee",
        keywords: [
          "admission",
          "fee",
          "price",
          "cost",
          "much",
          "pay",
          "ticket",
          "tickets"
        ],
        frame: "What is the admission fee?",
        grammarTip: "What is the admission fee…? / How much is the admission fee…? — не *The fee is…*"
      },
      {
        id: "exhibitions",
        label: "special exhibitions",
        keywords: [
          "special",
          "exhibitions",
          "exhibition",
          "exhibit",
          "show",
          "current",
          "any"
        ],
        frame: "Are there any special exhibitions?",
        grammarTip: "Are there…? / What special exhibitions…? — не *There are special exhibitions.*"
      }
    ],
    modelQuestions: [
      "How can I get to the museum?",
      "How long does the excursion last?",
      "What is the admission fee?",
      "Are there any special exhibitions?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы transport / excursion time / admission fee / exhibitions раскрыты",
      "Порядок слов: How can… / How long… / What is… / Are there…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
