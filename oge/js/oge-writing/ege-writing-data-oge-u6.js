/**
 * OGE Writing · Unit 6 · Task 35 · Personal letter to Duncan.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u6",
    unitLabel: "Unit 6",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 6 · Вариант 6: личное письмо Duncan (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Duncan:",
    promptMeta: {
      from: "Duncan@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Free time"
    },
    promptRu:
      "...Recently I've read an article about how to spend free time effectively. It's important to organise our free time wisely...\n" +
      "...Do you have enough free time, why? What do you usually do in your free time? What other activity would you like to try one day?..",
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
      "Ответ: хватает ли свободного времени и почему",
      "Ответ: чем обычно занимаешься в свободное время",
      "Ответ: какое ещё занятие хочешь попробовать однажды",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Duncan",
      "Ответил(а) на 3 вопроса Duncan",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "enough free time why",
      "usually do free time",
      "other activity try one day"
    ]
  });
})(typeof window !== "undefined" ? window : this);
