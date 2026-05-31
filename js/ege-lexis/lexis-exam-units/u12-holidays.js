/**
 * ЕГЭ Lexis Exam · Unit 12 · Holidays (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-holidays",
    unitOrder: 12,
    title: "Unit 12 · Holidays",
    examSection: "§30–36",
    headerTitle: "Holidays",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Ronald and Brenda left for Wales to spend their holidays in Templeton Castle, the ancestral home of Lord and Lady Usher, Brenda's late grandparents. The castle brought back many happy memories — they [[30]] how they'd spent a holiday there just before Ronald went up to Cambridge. They roamed the hills together during the day, rarely returning to the castle before the sun had [[31]] behind the highest mountain. They [[32]] delicious food and after supper they sat by a roaring log fire reading novels and short stories.\n\nAfter a fortnight, during which time they encountered more cattle than human beings, they reluctantly set out on the long journey back to London. They [[33]] at the Russell House looking forward to a life of domestic tranquility. [[34]], it was not to be.\n\nRonald's mother-in-law confessed that she could [[35]] wait to get Billy off her hands. Tears before bedtime had occurred once too often, she told them as her cat leapt up on to her mistress's lap and promptly fell asleep. \"Frankly, you haven't returned a moment too soon,\" she added. \"I haven't [[36]] to complete *The Sun* crossword once in the past fortnight.\" Ronald thanked his mother-in-law for her understanding, and he and Brenda took their hyperactive five-year-old son back to the Russell House.",
    items: [
      {
        options: ["reminded", "reviewed", "remembered", "lacked"],
        correctIndex: 2,
        skillRu: "Глагол + <em>how‑clause</em>: <em>remember how …</em> — «вспоминать, как …».",
        explainCorrect:
          "The castle brought back memories — they <strong>remembered how</strong> they'd spent a holiday there — «вспомнили, как провели отпуск».",
        trapRu:
          "<em>Reminded how</em> — «напомнили, как» — нужен объект (<em>reminded them</em>); здесь сами вспоминают → <em>remembered</em>.",
        explainIfChosen: {
          "0": "<em>Reminded how</em> — «напомнили, как» — без объекта не говорят; замок «напоминает», люди <em>remember</em>.",
          "1": "<em>Reviewed how</em> — «пересмотрели, как» — не про воспоминания.",
          "3": "<em>Lacked how</em> — «не хватало, как» — бессмысленно."
        }
      },
      {
        options: ["disappeared", "departed", "digressed", "distracted"],
        correctIndex: 0,
        skillRu: "Коллокация: <em>the sun disappeared behind the mountain</em>.",
        explainCorrect:
          "Before the sun had <strong>disappeared behind</strong> the highest mountain — «пока солнце не скрылось за горой».",
        trapRu:
          "<em>Departed behind</em> — «отбыл за» — про людей/транспорт; солнце <em>disappears</em> или <em>sets</em>.",
        explainIfChosen: {
          "1": "<em>Departed behind the mountain</em> — «отбыл за гору» — не про солнце.",
          "2": "<em>Digressed behind</em> — «отступил от темы за гору» — nonsense.",
          "3": "<em>Distracted behind</em> — «отвлёкся за гору» — не сочетается."
        }
      },
      {
        options: ["enjoyed", "pleased", "satisfied", "delighted"],
        correctIndex: 0,
        skillRu: "Транзитивный глагол + объект: <em>enjoy food</em>.",
        explainCorrect:
          "They <strong>enjoyed delicious food</strong> — «наслаждались вкусной едой» (прямой объект).",
        trapRu:
          "<em>Pleased / satisfied / delighted food</em> — эти глаголы не ставят еду прямым объектом так.",
        explainIfChosen: {
          "1": "<em>Pleased delicious food</em> — <em>please</em> = «радовать кого‑то», не «есть с удовольствием».",
          "2": "<em>Satisfied delicious food</em> — «удовлетворяли еду» — не говорят.",
          "3": "<em>Delighted delicious food</em> — обычно <em>be delighted with</em>, не <em>delighted food</em>."
        }
      },
      {
        options: ["achieved", "reached", "completed", "arrived"],
        correctIndex: 3,
        skillRu: "Предлог <em>at</em>: <em>arrive at the Russell House</em>.",
        explainCorrect:
          "They <strong>arrived at</strong> the Russell House — «прибыли в дом Расселлов» (<em>arrive at + place</em>).",
        trapRu:
          "После <em>at the Russell House</em> — только <em>arrived</em>; <em>reached</em> без <em>at</em> (<em>reached London</em>).",
        explainIfChosen: {
          "0": "<em>Achieved at the Russell House</em> — «достигли в доме» — не «прибыли».",
          "1": "<em>Reached at the Russell House</em> — <em>reach</em> не берёт <em>at</em> перед названием.",
          "2": "<em>Completed at the Russell House</em> — «завершили в доме» — не про приезд."
        }
      },
      {
        options: ["Therefore", "However", "Although", "Despite"],
        correctIndex: 1,
        skillRu: "Связка‑конtrast: <em>However, it was not to be</em>.",
        explainCorrect:
          "They looked forward to tranquility. <strong>However</strong>, it was not to be — «однако так не вышло» (контраст).",
        trapRu:
          "<em>Therefore</em> — вывод «поэтому»; <em>Although / Despite</em> — нужно продолжение, не одно предложение.",
        explainIfChosen: {
          "0": "<em>Therefore, it was not to be</em> — «поэтому так не вышло» — логика наоборот.",
          "2": "<em>Although, it was not to be</em> — после <em>Although</em> нужна придаточная часть.",
          "3": "<em>Despite, it was not to be</em> — после <em>Despite</em> нужно существительное/герундий."
        }
      },
      {
        options: ["merely", "nearly", "rarely", "hardly"],
        correctIndex: 3,
        skillRu: "Идиома: <em>can hardly wait</em> = «едва могу дождаться».",
        explainCorrect:
          "She could <strong>hardly wait</strong> to get Billy off her hands — «едва дождалась, когда избавится от Билли».",
        trapRu:
          "<em>Can hardly wait</em> — устойчивое «не могу дождаться»; <em>merely / nearly / rarely wait</em> — другой смысл.",
        explainIfChosen: {
          "0": "<em>Could merely wait</em> — «могла лишь ждать» — противоположный смысл.",
          "1": "<em>Could nearly wait</em> — «почти могла ждать» — не идиома.",
          "2": "<em>Could rarely wait</em> — «редко могла ждать» — не «не терпится»."
        }
      },
      {
        options: ["succeeded", "managed", "resulted", "fulfilled"],
        correctIndex: 1,
        skillRu: "Конструкция: <em>manage to do</em> — «удаться / суметь сделать».",
        explainCorrect:
          "I haven't <strong>managed to complete</strong> the crossword once — «ни разу не сумела доделать кроссворд».",
        trapRu:
          "<em>Succeeded to</em> — неверно (<em>succeeded in doing</em>); <em>resulted / fulfilled to</em> — не с <em>to + infinitive</em> так.",
        explainIfChosen: {
          "0": "<em>Haven't succeeded to complete</em> — правильно <em>succeeded in completing</em>.",
          "2": "<em>Haven't resulted to complete</em> — «не привело к завершению» — не та конструкция.",
          "3": "<em>Haven't fulfilled to complete</em> — <em>fulfil</em> не с <em>to + infinitive</em> здесь."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
