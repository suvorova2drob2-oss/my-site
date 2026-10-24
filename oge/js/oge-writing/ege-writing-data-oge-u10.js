/**
 * OGE Writing · Unit 10 · Task 35 · Personal letter to Liza.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u10",
    unitLabel: "Unit 10",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 10 · Вариант 10: личное письмо Liza (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Liza:",
    promptMeta: {
      from: "Liza@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Asking for advice"
    },
    promptRu:
      "...I don't have any idea for a birthday present for my best friend...\n" +
      "...When is your birthday? How do you usually celebrate your birthday? What birthday present would you recommend for a 14-year-old girl?..",
    instructions: [
      "Write a message to Liza and answer her 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Liza. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Liza, …)",
      "Ответ: когда день рождения",
      "Ответ: как обычно отмечаешь день рождения",
      "Ответ: какой подарок посоветуешь 14-летней девочке",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Liza",
      "Ответил(а) на 3 вопроса Liza",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "when birthday",
      "celebrate birthday",
      "present 14-year-old girl"
    ]
  });
})(typeof window !== "undefined" ? window : this);
