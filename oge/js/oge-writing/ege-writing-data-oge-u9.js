/**
 * OGE Writing · Unit 9 · Task 35 · Personal letter to Mark.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u9",
    unitLabel: "Unit 9",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 9 · Вариант 9: личное письмо Mark (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Mark:",
    promptMeta: {
      from: "Mark@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Protecting the environment"
    },
    promptRu:
      "...The students of our town are going to have a 'Walk to school week'. We believe that it can help reduce pollution in the town...\n" +
      "...What ecological problem is the most serious in your region from your point of view? Are you concerned about protecting the environment, why? What can you and your friends do to improve the local environment?..",
    instructions: [
      "Write a message to Mark and answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Mark. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Mark, …)",
      "Ответ: какая экологическая проблема в регионе самая серьёзная",
      "Ответ: беспокоит ли защита окружающей среды и почему",
      "Ответ: что ты и друзья можете сделать для местной среды",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Mark",
      "Ответил(а) на 3 вопроса Mark",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "ecological problem region",
      "concerned protecting environment",
      "improve local environment"
    ]
  });
})(typeof window !== "undefined" ? window : this);
