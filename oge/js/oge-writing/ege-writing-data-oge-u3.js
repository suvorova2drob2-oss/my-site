/**
 * OGE Writing · Unit 3 · Task 35 · Personal letter to Alice.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u3",
    unitLabel: "Unit 3",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 3 · Вариант 3: личное письмо Alice (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Alice:",
    promptMeta: {
      from: "Alice@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Reading books"
    },
    promptRu:
      "...On December 31st, I wrote New Year's Resolutions for the coming year. One of them was to read one book a month...\n" +
      "...What kind of books do you enjoy reading? Where do you and your friends get the books to read? Do you prefer printed books or e-books, why?..",
    instructions: [
      "Write a message to Alice.",
      "Answer her 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Alice. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Alice, …)",
      "Ответ: какие книги любишь читать",
      "Ответ: где берёте книги с друзьями",
      "Ответ: printed или e-books и почему",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Alice",
      "Ответил(а) на 3 вопроса Alice",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "kind of books enjoy",
      "where get books",
      "printed or e-books"
    ]
  });
})(typeof window !== "undefined" ? window : this);
