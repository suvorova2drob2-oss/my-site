/**
 * OGE Writing · Unit 7 · Task 35 · Personal letter to Ben.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u7",
    unitLabel: "Unit 7",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 7 · Вариант 7: личное письмо Ben (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Ben:",
    promptMeta: {
      from: "Ben@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Help needed"
    },
    promptRu:
      "...Now I am very busy with a school project. It is called 'Different places to live in'. To complete the project, I have to interview different people about their hometowns...\n" +
      "...What do you like most about your hometown? Would you like to stay in your hometown or to leave it after finishing school, why? Where would you prefer to live if you could choose any place?..",
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
      "Ответ: что больше всего нравится в родном городе",
      "Ответ: остаться после школы или уехать — и почему",
      "Ответ: где хотел(а) бы жить, если можно выбрать любое место",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Ben",
      "Ответил(а) на 3 вопроса Ben",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "like most hometown",
      "stay or leave after school",
      "prefer live any place"
    ]
  });
})(typeof window !== "undefined" ? window : this);
