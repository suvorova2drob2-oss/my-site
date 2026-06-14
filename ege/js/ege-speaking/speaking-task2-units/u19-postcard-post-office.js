(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u19-postcard-post-office",
    unitLabel: "Unit 19",
    title: "Postcard · post office",
    lead:
      "Task 2 · 4 direct questions в местное отделение почты про открытку. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Post office",
    imageSrc: "",
    imageAlt: "Local post office counter",
    scenario:
      "You are considering sending a postcard to your friend and now you'd like to get more information from your local post office.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "hours",
        label: "working hours",
        keywords: [
          "working",
          "hours",
          "hour",
          "open",
          "close",
          "when",
          "time",
          "schedule"
        ],
        frame: "What are the working hours?",
        grammarTip: "What are the working hours…? / When is the post office open…? — не *The working hours are…*"
      },
      {
        id: "stamps",
        label: "prices of stamps",
        keywords: [
          "prices",
          "price",
          "stamps",
          "stamp",
          "cost",
          "much",
          "pay",
          "how"
        ],
        frame: "What are the prices of stamps?",
        grammarTip: "What are the prices…? / How much do stamps cost…? — не *The prices are…*"
      },
      {
        id: "postboxes",
        label: "postboxes nearby",
        keywords: [
          "postboxes",
          "postbox",
          "mailbox",
          "mailboxes",
          "nearby",
          "near",
          "close",
          "any"
        ],
        frame: "Are there any postboxes nearby?",
        grammarTip: "Are there…? / Where are the nearest postboxes…? — не *There are postboxes nearby.*"
      },
      {
        id: "delivery",
        label: "average time of delivery",
        keywords: [
          "average",
          "time",
          "delivery",
          "deliver",
          "long",
          "days",
          "day",
          "how"
        ],
        frame: "What is the average time of delivery?",
        grammarTip: "What is the average time…? / How long does delivery take…? — не *The average time is…*"
      }
    ],
    modelQuestions: [
      "What are the working hours?",
      "What are the prices of stamps?",
      "Are there any postboxes nearby?",
      "What is the average time of delivery?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы hours / stamps / postboxes / delivery раскрыты",
      "Порядок слов: What are… / Are there… / What is…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
