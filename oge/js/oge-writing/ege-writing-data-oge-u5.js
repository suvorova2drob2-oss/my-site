/**
 * OGE Writing · Unit 5 · Task 35 · Personal letter to Liza.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u5",
    unitLabel: "Unit 5",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 5 · Вариант 5: личное письмо Liza (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Liza:",
    promptMeta: {
      from: "Liza@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Watching films"
    },
    promptRu:
      "...There is a tradition in my family. Once a month, we watch a film together. Sometimes we go to the cinema, sometimes we watch it online...\n" +
      "...What kind of films do you like? Do you prefer watching films alone or with your family and friends, why? How many films, on average, do you see a month?..",
    instructions: [
      "Write a message to Liza.",
      "Answer her 3 questions.",
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
      "Ответ: какие фильмы нравятся",
      "Ответ: один или с семьёй/друзьями — и почему",
      "Ответ: сколько фильмов в месяц в среднем",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Liza",
      "Ответил(а) на 3 вопроса Liza",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "films like",
      "alone or family friends why",
      "films per month average"
    ]
  });
})(typeof window !== "undefined" ? window : this);
