/**
 * OGE Writing · Unit 20 · Task 35 · Personal letter to Duncan.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u20",
    unitLabel: "Unit 20",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 20 · Вариант 20: личное письмо Duncan (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Duncan:",
    promptMeta: {
      from: "Duncan@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Holiday time"
    },
    promptRu:
      "...I think the summer holidays are a good time for trying new things. Last summer I started windsurfing...\n" +
      "...Do you prefer the summer or winter holidays, and why? Where do you usually spend your summer holidays? What sport would you like to try one day?..",
    instructions: [
      "Write a message to Duncan and answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Duncan. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Duncan, …)",
      "Ответ: летние или зимние каникулы и почему",
      "Ответ: где обычно проводишь летние каникулы",
      "Ответ: какой спорт хочешь попробовать однажды",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Duncan",
      "Ответил(а) на 3 вопроса Duncan",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "summer or winter holidays",
      "where spend summer holidays",
      "sport try one day"
    ]
  });
})(typeof window !== "undefined" ? window : this);
