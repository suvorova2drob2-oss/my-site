/**
 * ЕГЭ Lexis Exam · Unit 1 · Gwen (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-gwen",
    unitOrder: 1,
    title: "Unit 1 · Gwen",
    examSection: "§30–36",
    headerTitle: "Gwen",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Gwen opened one eye and saw through the window the white wonderland she woke up to for most of the winter in her native town. What she saw [[30]] her of Christmas postcards. The town was small, almost two hours north of Chicago, with a population of ten thousand. The house she lived in had been her mother's, and she owned it with her sister Molly. They agreed that if they ever sold it, they'd split the proceeds equally. But for now, [[31]], Molly didn't need the money. Her husband owned a busy plumbing company, and the house was a good investment and likely to [[32]] in value, so she'd never asked Gwen to sell it.\n\nGwen had once escaped her native town to [[33]] the University of Chicago, and had loved it for the three years she'd been there. She had big dreams then, and wanted to work in publishing in Washington after she [[34]] from the University. But then her mother got sick at the end of senior year and Gwen had to leave to look [[35]] her. They'd always been close, particularly after Molly moved out when Gwen was ten. Gwen had her mother to herself from then on, and their time together was precious. Her mother had shared with her a passion for books, the delight of her favourite books, biographies of famous people, history, and current novels. Gwen took the first semester of senior year off to be with her and never [[36]] it.",
    items: [
      {
        options: ["resembled", "remembered", "reminded", "remained"],
        correctIndex: 2,
        skillRu: "Глагол + предлог: <em>remind … of</em> (ассоциация, «напоминать о»).",
        explainCorrect:
          "После <em>what she saw</em> нужен глагол «напоминать о чём-то»: <strong>remind her of Christmas postcards</strong> — «увиденное ассоциировалось с открытками».",
        trapRu:
          "Часто путают <em>remember</em> (сам вспоминаешь) и <em>remind</em> (что-то вызывает ассоциацию).",
        explainIfChosen: {
          "0": "<em>Resemble</em> = «быть похожим на» (<em>A resembles B</em>). Здесь нужна связка <em>remind … of</em>, а не «быть похожим».",
          "1": "<em>Remember</em> — ты сам вспоминаешь. А в тексте «то, что она увидела, … её о …» — это не «вспоминать», а «напоминать о».",
          "3": "<em>Remain</em> = «оставаться». После «what she saw» по смыслу нужна ассоциация, не «осталась»."
        }
      },
      {
        options: ["at times", "at least", "at first", "at ease"],
        correctIndex: 1,
        skillRu: "Устойчивое выражение: <em>for now, at least</em> — «пока что, по крайней мере».",
        explainCorrect:
          "Перед «Molly didn't need the money» логично «пока что, по крайней мере»: <strong>But for now, at least, …</strong> — смягчает утверждение.",
        trapRu:
          "Все варианты начинаются на <em>at …</em> — ловушка в том, что нужно увидеть связку с <em>for now</em> в том же предложении.",
        explainIfChosen: {
          "0": "<em>At times</em> = «иногда». Не стыкуется с <em>for now</em> («пока что»).",
          "2": "<em>At first</em> = «сначала, в начале». Здесь речь не о первом этапе, а о текущем положении.",
          "3": "<em>At ease</em> = «спокойно, не напряжённо» — не про деньги и не про «пока что»."
        }
      },
      {
        options: ["extend", "expand", "develop", "increase"],
        correctIndex: 3,
        skillRu: "Коллокация: <em>increase in value</em> — «расти в цене» (о недвижимости).",
        explainCorrect:
          "О доме как инвестиции говорят так: <strong>likely to increase in value</strong> — «скорее всего подорожает / вырастет в цене».",
        trapRu:
          "Слова <em>extend / expand / develop</em> по смыслу «близки», но с <em>value</em> в ЕГЭ почти всегда <em>increase</em>.",
        explainIfChosen: {
          "0": "<em>Extend</em> — продлить срок, расширить здание. С «value» так не говорят.",
          "1": "<em>Expand</em> чаще про рынок или бизнес, не про цену дома.",
          "2": "<em>Develop in value</em> возможно, но слабее и реже, чем <em>increase in value</em>."
        }
      },
      {
        options: ["attend", "admit", "accept", "assist"],
        correctIndex: 0,
        skillRu: "Глагол «учиться в вузе»: <em>attend the University</em>.",
        explainCorrect:
          "Уехала учиться: <strong>escaped … to attend the University of Chicago</strong> — «поступила / училась в университете».",
        trapRu:
          "<em>Admit</em> и <em>accept</em> тоже «про поступление», но строятся иначе: <em>be admitted to</em>, <em>accept an offer</em>.",
        explainIfChosen: {
          "1": "<em>Admit</em> в активном залоге так не ставят: говорят <em>be admitted to a university</em>, не <em>escape to admit</em>.",
          "2": "<em>Accept</em> нужен объект «предложение / место» (<em>accept a place</em>), а не университет напрямую.",
          "3": "<em>Assist</em> = «помогать» — не про учёбу в вузе."
        }
      },
      {
        options: ["finished", "graduated", "completed", "fulfilled"],
        correctIndex: 1,
        skillRu: "Завершить вуз: <em>graduate from the University</em>.",
        explainCorrect:
          "После учёбы — <strong>after she graduated from the University</strong> — «после того как окончила университет».",
        trapRu:
          "<em>Finish</em> — закончить курс или год; <em>graduate from</em> — получить диплом, закончить вуз (устойчивее в этом контексте).",
        explainIfChosen: {
          "0": "<em>Finish</em> год/курс — да; <em>finish from the university</em> — нет. Нужно <em>graduate from</em>.",
          "2": "<em>Complete a degree</em> возможно, но с «University» естественнее <em>graduate from</em>.",
          "3": "<em>Fulfil</em> — выполнить обещание, долг; к университету не подходит."
        }
      },
      {
        options: ["over", "into", "after", "upon"],
        correctIndex: 2,
        skillRu: "Фразовый глагол: <em>look after</em> = «присматривать, заботиться».",
        explainCorrect:
          "Уехала, чтобы <strong>look after her</strong> (mother) — «ухаживать за мамой, присматривать за ней».",
        trapRu:
          "После <em>look</em> часто ставят предлог «наугад». Нужен именно <em>after</em>, не <em>over / into</em>.",
        explainIfChosen: {
          "0": "<em>Look over</em> = «просмотреть, проверить» — не «заботиться».",
          "1": "<em>Look into</em> = «разобраться, расследовать».",
          "3": "<em>Look upon</em> = «смотреть на кого-то как на …» — другой смысл."
        }
      },
      {
        options: ["disappointed", "dissatisfied", "regretted", "revealed"],
        correctIndex: 2,
        skillRu: "Глагол + it: <em>never regretted it</em> — «не пожалела об этом».",
        explainCorrect:
          "Осталась с мамой и <strong>never regretted it</strong> — «никогда не пожалела об этом решении».",
        trapRu:
          "<em>Disappointed / dissatisfied</em> — прилагательные; после <em>never</em> нужен глагол (<em>regretted</em>).",
        explainIfChosen: {
          "0": "<em>Disappointed</em> — «разочарована»; говорят <em>be disappointed with/by</em>, не <em>never disappointed it</em>.",
          "1": "<em>Dissatisfied</em> — тоже прилагательное; грамматика не сходится.",
          "3": "<em>Revealed it</em> = «раскрыла / сообщила это» — другой смысл."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
