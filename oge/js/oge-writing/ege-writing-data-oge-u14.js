/**
 * OGE Writing · Unit 14 · Task 35 · Personal letter to Teddy.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u14",
    unitLabel: "Unit 14",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 14 · Вариант 14: личное письмо Teddy (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Teddy:",
    promptMeta: {
      from: "Teddy@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Learning languages"
    },
    promptRu:
      "...I'm doing a class project on learning foreign languages. Please answer the following questions from the questionnaire to help me with my difficult task...\n" +
      "...When did you start learning English? What other languages would you like to learn, why? What is the most effective way to learn foreign languages, in your view?..",
    instructions: [
      "Write a message to Teddy and answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Teddy. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Teddy, …)",
      "Ответ: когда начал(а) учить English",
      "Ответ: какие ещё языки хочешь учить и почему",
      "Ответ: самый эффективный способ учить иностранные языки",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Teddy",
      "Ответил(а) на 3 вопроса Teddy",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "start learning English",
      "other languages why",
      "effective way foreign languages"
    ]
  });
})(typeof window !== "undefined" ? window : this);
