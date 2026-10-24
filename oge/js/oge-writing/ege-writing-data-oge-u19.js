/**
 * OGE Writing · Unit 19 · Task 35 · Personal letter to Ben.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u19",
    unitLabel: "Unit 19",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 19 · Вариант 19: личное письмо Ben (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Ben:",
    promptMeta: {
      from: "Ben@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Career choice"
    },
    promptRu:
      "...My friend says that he wants to be a vet. I was surprised at his decision — he has never had any pets at home...\n" +
      "...What job would you like to do when you are older? Why have you made this career choice? What school subjects do you find the most useful for your future career?..",
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
      "Ответ: кем хочешь работать, когда станешь старше",
      "Ответ: почему сделал(а) такой выбор профессии",
      "Ответ: какие школьные предметы полезнее для будущей карьеры",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Ben",
      "Ответил(а) на 3 вопроса Ben",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "job when older",
      "career choice why",
      "school subjects future career"
    ]
  });
})(typeof window !== "undefined" ? window : this);
