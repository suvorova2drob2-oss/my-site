/**
 * OGE Writing · Unit 16 · Task 35 · Personal letter to Mark.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u16",
    unitLabel: "Unit 16",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 16 · Вариант 16: личное письмо Mark (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Mark:",
    promptMeta: {
      from: "Mark@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Busy day"
    },
    promptRu:
      "...Yesterday I had a busy day. I felt really exhausted. I had two difficult tests — in Maths and Science. After school I had to do a project...\n" +
      "...What weekday is the most difficult for you, why? How much time does it take you to do your homework? What is your favourite pastime?..",
    instructions: [
      "Write a message to Mark and answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Mark. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Mark, …)",
      "Ответ: какой день недели самый трудный и почему",
      "Ответ: сколько времени уходит на домашнюю работу",
      "Ответ: какое любимое занятие",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Mark",
      "Ответил(а) на 3 вопроса Mark",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "weekday most difficult",
      "time homework",
      "favourite pastime"
    ]
  });
})(typeof window !== "undefined" ? window : this);
