/**
 * OGE Writing · Unit 8 · Task 35 · Personal letter to John.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u8",
    unitLabel: "Unit 8",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 8 · Вариант 8: личное письмо John (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend John:",
    promptMeta: {
      from: "John@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Playing sports"
    },
    promptRu:
      "...I feel upset as we've lost a basketball game. Though we lost, my brother said it was a great game anyway. He likes basketball, just like me...\n" +
      "...And what sports are popular with teenagers in Russia? What sports facilities does your school have? Do you enjoy your PE lessons or not, why?..",
    instructions: [
      "Write a message to John and answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо John. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear John, …)",
      "Ответ: какие виды спорта популярны у подростков в России",
      "Ответ: какие sports facilities есть в школе",
      "Ответ: нравятся ли уроки PE или нет и почему",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear John",
      "Ответил(а) на 3 вопроса John",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "sports popular teenagers Russia",
      "sports facilities school",
      "PE lessons or not why"
    ]
  });
})(typeof window !== "undefined" ? window : this);
