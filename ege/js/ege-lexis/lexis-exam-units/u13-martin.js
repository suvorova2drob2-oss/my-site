/**
 * ЕГЭ Lexis Exam · Unit 13 · Martin (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-martin",
    unitOrder: 13,
    title: "Unit 13 · Martin",
    examSection: "§30–36",
    headerTitle: "Martin",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Gilbert was determined that his son Martin was not going to end up working on the shop-floor of a car factory for the rest of his life. He put in hours of overtime to earn enough money to [[30]] that the boy could have extra tuition in maths, general science and English. He felt well [[31]] when the boy passed his eleven-plus exam and won a place at Manchester Grammar school. That pride didn't falter when Martin went on to pass five O-levels and, [[32]], two years later added two A-levels. Gilbert tried not to show his disappointment when the boy informed him that he didn't want to go to university.\n\n\"What kind of career are you hoping to take up then, lad?\" Gilbert enquired. \"I have filled an application form to join you on the shop-floor just as soon as I leave school. The point is, Dad, I can't be [[33]] to spend my life doing a job I don't enjoy just to satisfy one of your fantasies.\"\n\nGilbert promised that the application would be turned down in the morning. He [[34]] uttered another word to the boy before leaving for the factory. For over a week father and son didn't speak to each other. It was Martin's mother who was left to come up with the compromise. She [[35]] that Martin should go to work to the hotel. He confided that he thought hotel management seemed the least unattractive proposition he had considered so far. He reluctantly [[36]] to this solution.",
    items: [
      {
        options: ["ensure", "confirm", "assure", "convince"],
        correctIndex: 0,
        skillRu: "Глагол + <em>that‑clause</em>: <em>ensure that …</em> — «гарантировать / обеспечить, что …».",
        explainCorrect:
          "Overtime was to <strong>ensure that</strong> the boy could have extra tuition — «чтобы обеспечить репетиторство».",
        trapRu:
          "<em>Assure that</em> — «заверить, что» (обычно <em>assure someone that</em>); <em>confirm / convince that</em> — другой смысл.",
        explainIfChosen: {
          "1": "<em>Confirm that the boy could have tuition</em> — «подтвердить, что мальчик мог…» — не «обеспечить возможность».",
          "2": "<em>Assure that</em> — «заверить, что»; нужен объект (<em>assure the boy</em>).",
          "3": "<em>Convince that</em> — «убедить, что»; нужен объект (<em>convince someone that</em>)."
        }
      },
      {
        options: ["repaid", "reclaimed", "regained", "rewarded"],
        correctIndex: 3,
        skillRu: "Причастие как прилагательное: <em>feel well rewarded</em> — «чувствовать, что усилия окупились».",
        explainCorrect:
          "He felt well <strong>rewarded</strong> when the boy passed — «чувствовал, что его старания вознаграждены» (гордость за результат).",
        trapRu:
          "<em>Reclaimed / regained</em> — «вернул / восстановил» — не про чувство удовлетворения; <em>repaid</em> ближе, но типичнее <em>rewarded</em> после «well».",
        explainIfChosen: {
          "0": "<em>Felt well repaid</em> — возможно в другом контексте; здесь эмоциональное «вознаграждён» → <em>rewarded</em>.",
          "1": "<em>Felt well reclaimed</em> — «восстановленный» — nonsense.",
          "2": "<em>Felt well regained</em> — «вновь обретённый» — не сочетается."
        }
      },
      {
        options: ["however", "moreover", "nevertheless", "therefore"],
        correctIndex: 1,
        skillRu: "Связка добавления: <em>moreover</em> — «более того / к тому же».",
        explainCorrect:
          "Five O-levels and, <strong>moreover</strong>, two A-levels two years later — «более того, через два года сдал ещё и A-levels».",
        trapRu:
          "<em>However / nevertheless</em> — контраст; <em>therefore</em> — вывод «поэтому» — здесь просто добавляют успех.",
        explainIfChosen: {
          "0": "<em>However, two years later added</em> — «однако добавил» — нет противоречия.",
          "2": "<em>Nevertheless, added two A-levels</em> — «тем не менее» — тоже контраст, не нужен.",
          "3": "<em>Therefore, added two A-levels</em> — «поэтому добавил» — не логическое следствие."
        }
      },
      {
        options: ["insisted", "expected", "persisted", "promised"],
        correctIndex: 1,
        skillRu: "Пассив + <em>to‑infinitive</em>: <em>can't be expected to do</em>.",
        explainCorrect:
          "I can't be <strong>expected to spend</strong> my life… — «от меня нельзя ожидать, что я проведу жизнь…».",
        trapRu:
          "<em>Can't be insisted / persisted / promised to</em> — так не говорят; только <em>expected to</em> устойчиво.",
        explainIfChosen: {
          "0": "<em>Can't be insisted to spend</em> — «настаивали, чтобы тратил» — неверная конструкция.",
          "2": "<em>Can't be persisted to spend</em> — <em>persist in doing</em>, не <em>persisted to</em>.",
          "3": "<em>Can't be promised to spend</em> — «обещали, что буду тратить» — nonsense."
        }
      },
      {
        options: ["rarely", "merely", "hardly", "nearly"],
        correctIndex: 2,
        skillRu: "Наречие + <em>utter a word</em>: <em>hardly utter another word</em>.",
        explainCorrect:
          "He <strong>hardly uttered another word</strong> — «почти не произнёс больше ни слова» (молчал).",
        trapRu:
          "<em>Rarely uttered</em> — «редко говорил» (привычка); здесь один эпизод → <em>hardly</em>.",
        explainIfChosen: {
          "0": "<em>Rarely uttered another word</em> — «редко произносил слово» — про привычку, не про этот вечер.",
          "1": "<em>Merely uttered another word</em> — «лишь произнёс слово» — противоположный смысл.",
          "3": "<em>Nearly uttered another word</em> — «почти произнёс» — значит всё же заговорил; нужно «едва» = почти не."
        }
      },
      {
        options: ["submitted", "offered", "advocated", "suggested"],
        correctIndex: 3,
        skillRu: "Глагол + <em>that‑clause</em>: <em>suggest that someone should …</em>.",
        explainCorrect:
          "She <strong>suggested that</strong> Martin should go to work at the hotel — «предложила компромисс».",
        trapRu:
          "<em>Submitted / offered that</em> — не с <em>that + should</em> так; <em>advocated</em> тяжеловато для семейного разговора.",
        explainIfChosen: {
          "0": "<em>Submitted that Martin should</em> — <em>submit</em> = «подать документ», не «предложить идею».",
          "1": "<em>Offered that Martin should</em> — <em>offer</em> + <em>that‑clause</em> редко; обычно <em>offer to do</em>.",
          "2": "<em>Advocated that</em> — «отстаивала, что» — слишком формально для матери дома."
        }
      },
      {
        options: ["agreed", "accepted", "adopted", "admitted"],
        correctIndex: 0,
        skillRu: "Коллокация: <em>agree to a solution / proposal</em>.",
        explainCorrect:
          "He reluctantly <strong>agreed to this solution</strong> — «неохотно согласился на этот компромисс».",
        trapRu:
          "<em>Accepted to</em> — неверно (<em>accepted the solution</em>); <em>adopted to / admitted to</em> — другие значения.",
        explainIfChosen: {
          "1": "<em>Accepted to this solution</em> — правильно <em>accepted this solution</em> (без <em>to</em>).",
          "2": "<em>Adopted to this solution</em> — <em>adopt a solution</em> без <em>to</em>; «принял (метод)» — реже здесь.",
          "3": "<em>Admitted to this solution</em> — «признался в решении» — не «согласился»."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
