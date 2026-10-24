/**
 * OGE Writing · Unit 17 · Task 35 · Personal letter to Julia.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u17",
    unitLabel: "Unit 17",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 17 · Вариант 17: личное письмо Julia (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Julia:",
    promptMeta: {
      from: "Julia@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Learning languages"
    },
    promptRu:
      "...Next month my class is going to take a trip to Paris. I'm looking forward to it but my French is not very good yet. I have to improve it as soon as possible...\n" +
      "...When did you start learning English? How many English lessons do you have a week? What other language would you like to learn, and why?..",
    instructions: [
      "Write a message to Julia and answer her 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Julia. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Julia, …)",
      "Ответ: когда начал(а) учить English",
      "Ответ: сколько уроков English в неделю",
      "Ответ: какой ещё язык хочешь учить и почему",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Julia",
      "Ответил(а) на 3 вопроса Julia",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "start learning English",
      "English lessons a week",
      "other language why"
    ]
  });
})(typeof window !== "undefined" ? window : this);
