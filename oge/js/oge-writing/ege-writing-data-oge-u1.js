/**
 * OGE Writing · Unit 1 · Task 35 · Personal letter to Duncan.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u1",
    unitLabel: "Unit 1",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 1 · Вариант 1: личное письмо Duncan (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking friend Duncan:",
    promptMeta: {
      from: "Duncan@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Learning English"
    },
    promptRu:
      "...Some of my classmates think that we don't need to learn foreign languages anymore because there are lots of apps which can translate anything...\n" +
      "...Do you think it is necessary to speak a foreign language, why? At what age do Russian students start learning English at school? What do you do outside the classroom to improve your English?..",
    instructions: [
      "Write a personal letter to Duncan.",
      "Answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of letter writing."
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
      "Ответ: нужен ли иностранный язык и почему",
      "Ответ: с какого возраста учат English в школе",
      "Ответ: что делаешь вне класса для English",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Duncan",
      "Ответил(а) на 3 вопроса Duncan",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "foreign language necessary",
      "age start English",
      "outside classroom English"
    ]
  });
})(typeof window !== "undefined" ? window : this);
