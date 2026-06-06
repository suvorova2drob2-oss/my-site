(function (w) {
  var pack = w.__EGE_SPEAKING_TASK2_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u8-volunteers",
    unitLabel: "Unit 8",
    title: "Group of volunteers",
    lead:
      "Task 2 · 4 direct questions про группу волонтёров. Prepare 1:30, затем 4×20 сек.",
    taskLead: "Task 2. Study the advertisement.",
    slogan: "",
    adPlaceholder: "Volunteers",
    imageSrc: "",
    imageAlt: "People volunteering together",
    scenario:
      "You are considering joining the group of volunteers and now you'd like to get more information.",
    examInstruction:
      "In 1.5 minutes you are to ask four direct questions to find out about the following:",
    perQuestionNote: "You have 20 seconds to ask each question.",
    prepareSeconds: 90,
    questionSeconds: 20,
    prompts: [
      {
        id: "age",
        label: "age limitations",
        keywords: [
          "age",
          "limitations",
          "limit",
          "limits",
          "old",
          "young",
          "minimum",
          "maximum",
          "any"
        ],
        frame: "Are there any age limitations?",
        grammarTip: "Are there…? / What are the age limitations…? — не *There are age limitations.*"
      },
      {
        id: "schedule",
        label: "schedule of work",
        keywords: [
          "schedule",
          "work",
          "hours",
          "hour",
          "time",
          "when",
          "days",
          "shift"
        ],
        frame: "What is the schedule of work?",
        grammarTip: "What is the schedule…? / When do volunteers work…? — не *The schedule is…*"
      },
      {
        id: "tasks",
        label: "tasks to do",
        keywords: [
          "tasks",
          "task",
          "do",
          "work",
          "duties",
          "responsibilities",
          "what"
        ],
        frame: "What tasks will I have to do?",
        grammarTip: "What tasks…? / What are the tasks to do…? — не *The tasks are…*"
      },
      {
        id: "skills",
        label: "skills needed",
        keywords: [
          "skills",
          "skill",
          "need",
          "needed",
          "require",
          "required",
          "experience",
          "any"
        ],
        frame: "What skills are needed?",
        grammarTip: "What skills…? / Are there any specific skills needed…? — не *Skills are needed.*"
      }
    ],
    modelQuestions: [
      "Are there any age limitations?",
      "What is the schedule of work?",
      "What tasks will I have to do?",
      "What skills are needed?"
    ],
    selfCheck: [
      "Все 4 вопроса — direct questions (не утверждения)",
      "В каждом вопросе есть ? в конце",
      "Темы age / schedule / tasks / skills раскрыты",
      "Порядок слов: Are there… / What is… / What tasks… / What skills…",
      "Я уложился(ась) примерно в 20 секунд на вопрос"
    ]
  });
})(typeof window !== "undefined" ? window : this);
