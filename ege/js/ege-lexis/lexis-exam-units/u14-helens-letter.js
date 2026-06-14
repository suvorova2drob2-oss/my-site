/**
 * ЕГЭ Lexis Exam · Unit 14 · Helen's letter (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-helens-letter",
    unitOrder: 14,
    title: "Unit 14 · Helen's letter",
    examSection: "§30–36",
    headerTitle: "Helen's letter",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "When I opened the letter, I confess I didn't immediately recall who Helen Smith was. But then I [[30]] that there had been an extremely bright, rather plump pupil by that name who always seemed to have an endless supply of cream cakes. The only thing I gave her in return was an art book that had been a Christmas present from my aunt in Scotland. In [[31]], by the time I had reached the upper sixth, the precocious little blighter was already in the lower sixth, despite there being a good two years difference in our age.\n\nHaving read her letter a second time, I couldn't imagine why the girl should want to see me. I [[32]] that the only way I was likely to find out was to invite her round to tea at my little place in High Street. When I first saw Helen again, I [[33]] recognized her. Not only had she lost a couple of stone, but she would have made an ideal model for a lot of advertisements that one saw displayed on the front of every bus — you know, a fresh-faced girl showing off a gleaming set of perfect teeth. I had to [[34]] I was quite envious. Helen explained to me that all she needed was a room in Oxford while she was up at the university. I was only too happy to oblige. After all, my mum made it clear on several [[35]] how much she disapproved of my being in the flat on my own. I couldn't wait to [[36]] Ma, for that matter, the news that I had found myself an appropriate companion.",
    items: [
      {
        options: ["reminded", "revised", "remembered", "revealed"],
        correctIndex: 2,
        skillRu: "Глагол + <em>that‑clause</em>: <em>remember that …</em> — «вспомнить, что …».",
        explainCorrect:
          "But then I <strong>remembered that</strong> there had been a pupil by that name — «вспомнил, что был такой ученик».",
        trapRu:
          "<em>Reminded that</em> — «напомнил, что» — нужен объект; письмо «напомнило» → сам вспоминаю → <em>remembered</em>.",
        explainIfChosen: {
          "0": "<em>Reminded that there had been</em> — без объекта (<em>it reminded me that</em>) не говорят.",
          "1": "<em>Revised that</em> — «пересмотрел, что» — не про память.",
          "3": "<em>Revealed that</em> — «раскрыл, что» — не «вспомнил»."
        }
      },
      {
        options: ["case", "sense", "point", "fact"],
        correctIndex: 3,
        skillRu: "Устойчивое выражение: <em>in fact</em> — «более того / на самом деле».",
        explainCorrect:
          "In <strong>fact</strong>, by the time I reached the upper sixth… — «более того, к тому времени как я…» (дополнительная деталь).",
        trapRu:
          "<em>In case</em> — «на случай если»; <em>in sense / in point</em> — не такие связки.",
        explainIfChosen: {
          "0": "<em>In case, by the time</em> — «на случай, если к тому времени» — nonsense.",
          "1": "<em>In sense, by the time</em> — «в смысле» — не связка для добавления факта.",
          "2": "<em>In point, by the time</em> — не устойчивое <em>in point</em> здесь."
        }
      },
      {
        options: ["concluded", "included", "involved", "completed"],
        correctIndex: 0,
        skillRu: "Глагол мышления + <em>that</em>: <em>conclude that …</em>.",
        explainCorrect:
          "I <strong>concluded that</strong> the only way to find out was to invite her — «пришёл к выводу, что единственный способ узнать — пригласить».",
        trapRu:
          "<em>Included / involved / completed that</em> — не «сделал вывод».",
        explainIfChosen: {
          "1": "<em>Included that the only way</em> — «включало, что единственный способ» — nonsense.",
          "2": "<em>Involved that</em> — «предполагало, что» — редко и не то.",
          "3": "<em>Completed that</em> — «завершил, что» — не про вывод."
        }
      },
      {
        options: ["nearly", "hardly", "rarely", "really"],
        correctIndex: 1,
        skillRu: "Наречие степени: <em>hardly recognize</em> — «едва узнать».",
        explainCorrect:
          "I <strong>hardly recognized</strong> her — «едва её узнал» (сильно изменилась: похудела, другой вид).",
        trapRu:
          "<em>Really recognized</em> — «действительно узнал» — противоположный смысл; после описания перемен нужно «едва».",
        explainIfChosen: {
          "0": "<em>Nearly recognized</em> — «почти узнал» — близко, но <em>hardly recognized</em> типичнее для «не узнал из‑за изменений».",
          "2": "<em>Rarely recognized</em> — «редко узнавал» — про привычку, не про первую встречу.",
          "3": "<em>Really recognized</em> — «отчётливо узнал» — противоречит «потеряла два stone»."
        }
      },
      {
        options: ["assure", "adapt", "admit", "adopt"],
        correctIndex: 2,
        skillRu: "Глагол + <em>that‑clause</em>: <em>admit (that) …</em> — «признать, что …».",
        explainCorrect:
          "I had to <strong>admit</strong> I was quite envious — «пришлось признать, что я завидовал».",
        trapRu:
          "<em>Assure that</em> — «заверить»; <em>adapt / adopt that</em> — не «признать чувство».",
        explainIfChosen: {
          "0": "<em>Assure I was envious</em> — «заверил, что завидую» — не то (assure = успокоить/заверить другого).",
          "1": "<em>Adapt I was envious</em> — «адаптировал, что завидую» — nonsense.",
          "3": "<em>Adopt I was envious</em> — «принял, что завидую» — не та коллокация."
        }
      },
      {
        options: ["situations", "incidents", "accidents", "occasions"],
        correctIndex: 3,
        skillRu: "Коллокация: <em>on several occasions</em> — «неоднократно / несколько раз».",
        explainCorrect:
          "She made it clear on several <strong>occasions</strong> — «не раз давала понять» (повторяющиеся случаи).",
        trapRu:
          "<em>On several situations / incidents / accidents</em> — не говорят; только <em>on several occasions</em>.",
        explainIfChosen: {
          "0": "<em>On several situations</em> — «в нескольких ситуациях» — не устойчиво.",
          "1": "<em>On several incidents</em> — «при нескольких инцидентах» — слишком «про происшествия».",
          "2": "<em>On several accidents</em> — «при нескольких авариях» — nonsense."
        }
      },
      {
        options: ["tell", "say", "speak", "talk"],
        correctIndex: 0,
        skillRu: "Глагол + двойной объект: <em>tell someone (the) news</em>.",
        explainCorrect:
          "I couldn't wait to <strong>tell</strong> Ma the news — «не мог дождаться, чтобы рассказать маме новость».",
        trapRu:
          "<em>Say Ma the news</em> — неверно (<em>say something to someone</em>); <em>speak / talk Ma</em> — без «the news» так.",
        explainIfChosen: {
          "1": "<em>Say Ma the news</em> — <em>say</em> не ставит человека прямым объектом (<em>say to Ma</em>).",
          "2": "<em>Speak Ma the news</em> — <em>speak to Ma about</em>, не <em>speak someone news</em>.",
          "3": "<em>Talk Ma the news</em> — <em>talk to Ma</em>, не <em>talk someone something</em>."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
