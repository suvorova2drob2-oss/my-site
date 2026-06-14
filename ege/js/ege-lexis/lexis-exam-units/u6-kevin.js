/**
 * ЕГЭ Lexis Exam · Unit 6 · Kevin (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-kevin",
    unitOrder: 6,
    title: "Unit 6 · Kevin",
    examSection: "§30–36",
    headerTitle: "Kevin",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Kevin Mason had risen early, excited by the prospect of his first day as deputy chairman of the new company. His first meeting that day was scheduled for twelve o'clock, when Lucas would [[30]] him about his progress with a new novel. Kevin planned to publish the book in April, and was delighted that he [[31]] to persuade Lucas to go on tour to promote the book. After a light breakfast Kevin read the article in the Times for a second time. He was pleased to see his new partner repeating something he'd said to Kevin many times: \"I am proud to be joining a publishing house with such a fine literary tradition.\"\n\nAs it was a clear, crisp morning, Kevin decided to work and savour the thought of starting life anew. He [[32]] how long it would be before his father understood the situation. He wanted his father to [[33]] that Kevin had made the right decision if the company were to play in the major leagues. He crossed the road, his smile broadening with each [[34]] he took. As he walked towards the familiar building, he noticed two smartly dressed doormen standing at the entrance. Not an expense his father would have [[35]] of. One of the men stepped forward and saluted.\n\n\"Good morning, Mr Mason.\" Kevin was [[36]] that they knew his name. \"We have been instructed, sir, not to allow you to enter the building.\" Kevin was struck dumb.",
    items: [
      {
        options: ["say", "tell", "speak", "talk"],
        correctIndex: 1,
        skillRu: "Глагол + кому + о чём: <em>tell someone about something</em>.",
        explainCorrect:
          "Lucas <strong>would tell him about his progress</strong> — «расскажет ему о прогрессе с романом».",
        trapRu:
          "Четыре глагола «говорить», но только <em>tell + person + about</em> подходит к «him about his progress».",
        explainIfChosen: {
          "0": "<em>Say him about</em> — неверно; <em>say something to someone</em>, не <em>say someone about</em>.",
          "2": "<em>Speak him about</em> — не говорят; <em>speak to someone about</em>.",
          "3": "<em>Talk him about</em> — нужно <em>talk to him about</em>."
        }
      },
      {
        options: ["achieved", "fulfilled", "succeeded", "managed"],
        correctIndex: 3,
        skillRu: "Устойчивое: <em>manage to do</em> — «удаться / суметь сделать».",
        explainCorrect:
          "<strong>He managed to persuade Lucas</strong> — «ему удалось уговорить Lucas».",
        trapRu:
          "<em>Succeed to</em> не говорят — только <em>succeed in</em>; с инфинитивом нужен <em>manage to</em>.",
        explainIfChosen: {
          "0": "<em>Achieved to persuade</em> — неверно; <em>achieve</em> + существительное, не + to do.",
          "1": "<em>Fulfilled to persuade</em> — <em>fulfil a duty</em>, не «fulfil to persuade».",
          "2": "<em>Succeeded to persuade</em> — правильно <em>succeeded in persuading</em>."
        }
      },
      {
        options: ["wondered", "wandered", "warned", "wasted"],
        correctIndex: 0,
        skillRu: "Глагол + <em>how long</em>: <em>wonder how long …</em> — «задумываться, как долго …».",
        explainCorrect:
          "He <strong>wondered how long it would be</strong> before his father understood — «думал, сколько ещё пройдёт времени».",
        trapRu:
          "Ловушка <em>wonder / wander</em> — одна буква, разный смысл: «думал» vs «бродил».",
        explainIfChosen: {
          "1": "<em>Wandered how long</em> — «бродил, как долго» — бессмысленно.",
          "2": "<em>Warned how long</em> — «предупреждал, как долго» — не про размышление.",
          "3": "<em>Wasted how long</em> — не сочетается."
        }
      },
      {
        options: ["adapt", "admit", "adopt", "assume"],
        correctIndex: 1,
        skillRu: "Глагол + <em>that‑clause</em>: <em>admit that …</em> — «признать / согласиться, что …».",
        explainCorrect:
          "He wanted his father to <strong>admit that Kevin had made the right decision</strong> — «признал, что Kevin поступил правильно».",
        trapRu:
          "<em>Assume</em> = «полагать» без признания; здесь отец должен <em>admit</em> — сознаться / согласиться.",
        explainIfChosen: {
          "0": "<em>Adapt that</em> — <em>adapt to</em>, не <em>adapt that</em>.",
          "2": "<em>Adopt that</em> — «усыновить / принять (правило)», не «признать решение».",
          "3": "<em>Assume that</em> — «предполагать»; Kevin хочет, чтобы отец <em>признал</em>, а не просто думал."
        }
      },
      {
        options: ["move", "pace", "step", "walk"],
        correctIndex: 2,
        skillRu: "Идиома: <em>with each step (he took)</em> — «с каждым шагом».",
        explainCorrect:
          "<strong>His smile broadening with each step he took</strong> — «улыбка становилась шире с каждым шагом».",
        trapRu:
          "Все про движение, но устойчиво именно <em>each step he took</em>, не <em>each walk he took</em>.",
        explainIfChosen: {
          "0": "<em>Each move he took</em> — реже; <em>move</em> = «ход / манёвр», не «шаг при ходьбе».",
          "1": "<em>Each pace</em> возможно, но <em>step</em> чаще в такой фразе.",
          "3": "<em>Each walk he took</em> — «каждая прогулка» — не про шаги к зданию."
        }
      },
      {
        options: ["supported", "admired", "appreciated", "approved"],
        correctIndex: 3,
        skillRu: "Идиома: <em>approve of something</em> — «одобрять (расход / решение)».",
        explainCorrect:
          "Дорогостоящие швейцары — «Not an expense his father would have <strong>approved of</strong>» — «отец бы не одобрил такой траты».",
        trapRu:
          "После пропуска <em>of</em> — нужен глагол с <em>of</em>: <em>approve of</em>, не <em>admired of</em>.",
        explainIfChosen: {
          "0": "<em>Supported of</em> — <em>support</em> без <em>of</em> или <em>support the idea</em>.",
          "1": "<em>Admired of</em> — <em>admire</em> + объект напрямую, не <em>admired of</em>.",
          "2": "<em>Appreciated of</em> — то же; <em>appreciate</em> не берёт <em>of</em> так."
        }
      },
      {
        options: ["improved", "influenced", "impressed", "interested"],
        correctIndex: 2,
        skillRu: "Прилагательное + <em>that‑clause</em>: <em>be impressed that …</em> — «быть приятно удивлённым».",
        explainCorrect:
          "<strong>Kevin was impressed that they knew his name</strong> — «был приятно удивлён, что знают его по имени».",
        trapRu:
          "Швейцары уже salute — логичнее «впечатлило», не просто «заинтересовало».",
        explainIfChosen: {
          "0": "<em>Improved that</em> — «улучшился, что …» — бессмысленно.",
          "1": "<em>Influenced that</em> — «был под влиянием того, что …» — слабо.",
          "3": "<em>Interested that</em> — возможно, но <em>impressed</em> точнее для wow-момента."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
