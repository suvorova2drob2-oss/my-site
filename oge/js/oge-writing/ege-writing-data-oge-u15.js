/**
 * OGE Writing · Unit 15 · Task 35 · Personal letter to Peter.
 */
(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack) return;
  if (!Array.isArray(pack.tasks)) pack.tasks = [];

  pack.tasks.push({
    id: "oge-letter-task35-u15",
    unitLabel: "Unit 15",
    switchLabel: "Task 35",
    mode: "email",
    title: "Writing · Personal letter",
    typeLabel: "Task 35 · personal letter",
    lead: "Unit 15 · Вариант 15: личное письмо Peter (100–120 слов).",
    promptLead: "You have received an email message from your English-speaking pen-friend Peter:",
    promptMeta: {
      from: "Peter@mail.uk",
      to: "Russian_friend@oge.ru",
      subject: "Electronic devices in our lives"
    },
    promptRu:
      "...You know, I've found out that I use a few electronic devices every day. My life seems to be impossible without the Internet...\n" +
      "...How much time a day do you spend online? What do you use the Internet for? Do you find school IT lessons useful for you or not, why?..",
    instructions: [
      "Write a message to Peter and answer his 3 questions.",
      "Write 100–120 words.",
      "Remember the rules of email writing."
    ],
    fieldNote: "Напишите письмо Peter. Пример — отдельно, поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 120,
      hardMin: 90,
      hardMax: 130
    },
    structurePanelTitle: "Структура письма",
    structureChecklist: [
      "Обращение (Dear Peter, …)",
      "Ответ: сколько времени в день проводишь онлайн",
      "Ответ: для чего используешь Internet",
      "Ответ: полезны ли школьные уроки IT и почему",
      "Завершающая фраза и подпись"
    ],
    precheckItems: [
      "Есть обращение Dear Peter",
      "Ответил(а) на 3 вопроса Peter",
      "Объём около 100–120 слов",
      "Есть closing и подпись"
    ],
    requiredQuestionChecks: [
      "time a day online",
      "use the Internet",
      "school IT lessons"
    ]
  });
})(typeof window !== "undefined" ? window : this);
