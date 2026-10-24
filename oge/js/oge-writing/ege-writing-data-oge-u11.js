/**
 * OGE Writing · Unit 11 · Task 35 · Personal letter to Julia.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u11",
    unitLabel: "Unit 11",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 11 · Вариант 11: личное письмо Julia (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Julia:",
    promptMeta: {
      from: "Julia@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "About fashion"
    },
    promptRu:
      "...My sister, Linda, is a nice person but she is mad about fashion. She spends all her free time reading fashion magazines and wandering around shopping centres...\n" +
      "...Do you think school uniform is necessary or not, why? What clothes do you prefer to wear at weekends? What colours do you avoid wearing?..",
    instructions: [
      "Write a message to Julia and answer her 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Julia. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Julia, …)",
      "Ответ: нужна ли школьная форма и почему",
      "Ответ: какую одежду предпочитаешь на выходных",
      "Ответ: каких цветов избегаешь",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Julia",
      "Ответил(а) на 3 вопроса Julia",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "school uniform necessary",
      "clothes weekends",
      "colours avoid"
    ]
  });
})(typeof window !== "undefined" ? window : this);
