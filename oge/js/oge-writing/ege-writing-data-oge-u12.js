/**
 * OGE Writing · Unit 12 · Task 35 · Personal letter to Emma.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u12",
    unitLabel: "Unit 12",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 12 · Вариант 12: личное письмо Emma (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Emma:",
    promptMeta: {
      from: "Emma@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Exam fever"
    },
    promptRu:
      "...I have lots of school friends and I enjoy studying but I hate the days when we have tests. I always get very nervous before tests and exams. And it doesn't matter whether I am well-prepared for them or not...\n" +
      "...What do you do to calm down before tests and exams? Why have you chosen English for your exam? How do you prepare for your tests and exams in English?..",
    instructions: [
      "Write a message to Emma and answer her 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Emma. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Emma, …)",
      "Ответ: как успокаиваешься перед тестами и экзаменами",
      "Ответ: почему выбрал(а) English на экзамен",
      "Ответ: как готовишься к тестам и экзаменам по English",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Emma",
      "Ответил(а) на 3 вопроса Emma",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "calm down tests exams",
      "chosen English exam",
      "prepare tests exams English"
    ]
  });
})(typeof window !== "undefined" ? window : this);
