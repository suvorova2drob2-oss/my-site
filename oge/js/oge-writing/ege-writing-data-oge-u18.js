/**
 * OGE Writing · Unit 18 · Task 35 · Personal letter to Alex.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u18",
    unitLabel: "Unit 18",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 18 · Вариант 18: личное письмо Alex (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Alex:",
    promptMeta: {
      from: "Alex@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Keeping pets"
    },
    promptRu:
      "...A few days ago my friend bought a little crocodile somewhere. He wants to keep the crocodile as a pet. I think it is crazy...\n" +
      "...What pets are popular in your country? What exotic pets do some people keep? Do you approve of keeping exotic pets or not, and why?..",
    instructions: [
      "Write a message to Alex and answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Alex. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Alex, …)",
      "Ответ: какие питомцы популярны в твоей стране",
      "Ответ: каких экзотических питомцев держат люди",
      "Ответ: одобряешь ли экзотических питомцев и почему",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Alex",
      "Ответил(а) на 3 вопроса Alex",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "pets popular country",
      "exotic pets keep",
      "approve exotic pets"
    ]
  });
})(typeof window !== "undefined" ? window : this);
