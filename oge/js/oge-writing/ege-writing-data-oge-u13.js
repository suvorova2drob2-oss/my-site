/**
 * OGE Writing · Unit 13 · Task 35 · Personal letter to Ben.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u13",
    unitLabel: "Unit 13",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 13 · Вариант 13: личное письмо Ben (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Ben:",
    promptMeta: {
      from: "Ben@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Friendship"
    },
    promptRu:
      "...Yesterday I saw a wonderful film about two friends and their adventures. It reminded me again how good it is to have true friends...\n" +
      "...How long have you known your best friend? What does your friend look like? What activities do you both enjoy?..",
    instructions: [
      "Write a message to Ben and answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Ben. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Ben, …)",
      "Ответ: как давно знаешь лучшего друга",
      "Ответ: как выглядит друг",
      "Ответ: какие занятия нравятся вам обоим",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Ben",
      "Ответил(а) на 3 вопроса Ben",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "how long known friend",
      "friend look like",
      "activities both enjoy"
    ]
  });
})(typeof window !== "undefined" ? window : this);
