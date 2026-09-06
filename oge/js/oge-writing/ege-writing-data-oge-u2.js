/**
 * OGE Writing · Unit 2 · Task 35 · Personal letter to Ben.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u2",
    unitLabel: "Unit 2",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 2 · Вариант 2: личное письмо Ben (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Ben:",
    promptMeta: {
      from: "Ben@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "School"
    },
    promptRu:
      "...Our family moved to another city in the summer because of my dad's work. So my sister and I will start a new school in September. We are feeling a bit nervous...\n" +
      "...How many days a week do you go to school? What is your school uniform like? Have you joined any of your school clubs yet, why?..",
    instructions: [
      "Write a message to Ben.",
      "Answer his 3 questions.",
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
      "Ответ: сколько дней в неделю ходишь в школу",
      "Ответ: как выглядит школьная форма",
      "Ответ: в какие клубы записался(ась) и почему",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Ben",
      "Ответил(а) на 3 вопроса Ben",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "days a week school",
      "school uniform",
      "school clubs joined"
    ]
  });
})(typeof window !== "undefined" ? window : this);
