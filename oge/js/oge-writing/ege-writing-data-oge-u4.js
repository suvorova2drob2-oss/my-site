/**
 * OGE Writing · Unit 4 · Task 35 · Personal letter to Mark.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u4",
    unitLabel: "Unit 4",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 4 · Вариант 4: личное письмо Mark (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Mark:",
    promptMeta: {
      from: "Mark@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Summer holidays"
    },
    promptRu:
      "...Summer is my favourite season. I don't go to school and have more time for sports and hobbies...\n" +
      "...What season do you prefer, why? What are your plans for the coming summer? What new hobby or activity would you like to try this summer?..",
    instructions: [
      "Write a message to Mark.",
      "Answer his 3 questions.",
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
      "Ответ: какое время года предпочитаешь и почему",
      "Ответ: планы на лето",
      "Ответ: новое хобби / activity этим летом",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Mark",
      "Ответил(а) на 3 вопроса Mark",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "season prefer why",
      "plans coming summer",
      "new hobby activity summer"
    ]
  });
})(typeof window !== "undefined" ? window : this);
