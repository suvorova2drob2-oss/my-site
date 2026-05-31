/**
 * ЕГЭ Grammar Exam · Unit 5 · Battle of Hastings (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-battle-of-hastings",
    unitOrder: 5,
    title: "Unit 5 · Battle of Hastings",
    examSection: "§19–24",
    headerTitle: "What happened at the battle of Hastings?",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "In the early morning of 14 October 1066, two great armies prepared to fight for the throne of England. On a hilltop 7 miles from Hastings were the forces of Harold, who ",
        afterInline: " king nine months before.",
        afterTail: "",
        cue: "CROWN",
        answers: [
          "had been crowned",
          "was crowned",
          "'d been crowned",
          "d been crowned"
        ],
        keyShow: "had been crowned",
        grammarTag: "Past Perfect · пассив",
        explainRu:
          "«Кого <strong>короновали</strong> королём девять месяцев раньше» → пассив; точка отсчёта — октябрь 1066 → <em>had been crowned</em> (Past Perfect).",
        explainOkRu:
          "<em>Had been crowned</em> от <strong>CROWN</strong>: Гарольд — объект коронации; <em>nine months before</em> — более раннее прошлое.",
        explainWrongRu:
          "Нужен пассив от <strong>CROWN</strong> («быть коронованным»), а не актив или существительное <em>crown</em>.",
        wrongIf: [
          {
            includes: "crowned",
            hintRu:
              "Одного <em>crowned</em> без <em>had been</em> часто мало для «девять месяцев <strong>до</strong> этой даты»."
          },
          {
            includes: "crowns",
            hintRu:
              "<em>Crowns</em> — «коронует»; Гарольд не сам себя короновал — нужен пассив."
          },
          {
            includes: "crown",
            hintRu:
              "Существительное «корона» не заполняет пропуск: нужна глагольная форма от <strong>CROWN</strong>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "",
        afterInline:
          " them on the far side of the valley below were the troops of Duke William of Normandy, who believed he was the rightful king.",
        afterTail: "",
        cue: "FACE",
        answers: ["facing", "faced"],
        keyShow: "Facing",
        grammarTag: "Participle I / II",
        explainRu:
          "Обратный порядок слов: «<em>Напротив них</em> … стояли войска» → причастие от <strong>FACE</strong>: <em>Facing them</em> (лицом к ним / напротив).",
        explainOkRu:
          "<em>Facing them</em> — форма от <strong>FACE</strong> в начале предложения; дальше <em>were the troops</em>.",
        explainWrongRu:
          "Нужна форма «напротив / лицом к», а не существительное <em>face</em> или Present Simple.",
        wrongIf: [
          {
            includes: "face",
            hintRu:
              "Голый <em>face</em> не открывает такую конструкцию → <em>Facing them … were the troops</em>."
          },
          {
            includes: "faces",
            hintRu:
              "<em>Faces</em> — «лица / смотрит»; здесь обстоятельство «напротив» → <em>facing</em>."
          },
          {
            includes: "faced",
            hintRu:
              "<em>Faced them</em> иногда возможно, но в учебных ключах чаще <em>Facing them on the far side…</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "By the end of the day, thousands ",
        afterInline:
          " dead on the battlefield, and the victorious William was one step nearer to seizing the throne.",
        afterTail: "",
        cue: "LIE",
        answers: ["lay", "were lying"],
        keyShow: "lay",
        grammarTag: "Past Simple · lie",
        explainRu:
          "«Тысячи <strong>лежали</strong> мёртвыми» → Past Simple от <strong>LIE</strong> (лежать): неправильная форма <em>lay</em> (не <em>lie</em> и не <em>lay</em> «класть»).",
        explainOkRu:
          "<em>Lay dead</em> — устойчиво; <em>lay</em> — прошедшее от «лежать»; время текста — Past (1066).",
        explainWrongRu:
          "Базовое слово <strong>LIE</strong> (лежать), не <em>lay</em> (класть); нужна форма прошедшего времени.",
        wrongIf: [
          {
            includes: "lie",
            hintRu:
              "Present <em>lie</em> не подходит: события 1066 года → Past."
          },
          {
            includes: "lain",
            hintRu:
              "<em>Lain</em> — Participle III; здесь нужно сказуемое Past Simple <em>lay</em>."
          },
          {
            includes: "laid",
            hintRu:
              "<em>Laid</em> — от глагола «класть», не от <strong>LIE</strong> «лежать»."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "On the eve of the battle. There are a number of sources giving us detailed information about the battle. We know that by the evening of 13 October, the English and Norman armies were encamped within sight of each other at the place now ",
        afterInline: " simply as Battle.",
        afterTail: "",
        cue: "KNOW",
        answers: ["known"],
        keyShow: "known",
        grammarTag: "Participle II · пассив",
        explainRu:
          "«Место, <strong>известное</strong> сегодня как Battle» → Past Participle от <strong>KNOW</strong>: <em>known as</em>.",
        explainOkRu:
          "<em>Known simply as Battle</em> — пассивное прилагательное; место «знают / называют» так сейчас.",
        explainWrongRu:
          "Нужна форма «известный», а не <em>know / knew / knowing</em> в активе.",
        wrongIf: [
          {
            includes: "know",
            hintRu:
              "Голый <em>know</em> не стоит между <em>now</em> и <em>as Battle</em> → <em>known as</em>."
          },
          {
            includes: "knew",
            hintRu:
              "Past Simple «знали» — не описывает название места в настоящем (<em>now</em>)."
          },
          {
            includes: "knowing",
            hintRu:
              "<em>Knowing</em> — актив; место <strong>называют</strong>, не «место, которое знает»."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "Duke William of Normandy had had plenty of time to prepare his forces since landing at Pevensey over two weeks ",
        afterInline: ".",
        afterTail: "",
        cue: "EARLY",
        answers: ["earlier", "before"],
        keyShow: "earlier",
        grammarTag: "Сравнительная · время",
        explainRu:
          "«Более чем за две недели <strong>до этого</strong>» → сравнительная от <strong>EARLY</strong>: <em>earlier</em> (или <em>before</em>).",
        explainOkRu:
          "<em>Over two weeks earlier</em> = «ранее, более двух недель назад» от момента высадки / битвы.",
        explainWrongRu:
          "Нужна форма «раньше», а не прилагательное <em>early</em> без сравнения.",
        wrongIf: [
          {
            includes: "early",
            hintRu:
              "<em>Two weeks early</em> — другой смысл; здесь «<strong>ранее</strong>» → <em>earlier</em>."
          },
          {
            includes: "earliest",
            hintRu:
              "Превосходная степень здесь не нужна — речь о сроке «более двух недель назад»."
          },
          {
            includes: "later",
            hintRu:
              "По смыслу высадка была <strong>раньше</strong> битвы, не «позже»."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "Harold, by contrast, had just won a hard-fought battle at Stamford Bridge, near York, where he had defeated another claimant to the English throne, Harald Hardrada, King of Norway. When the news of William's landing reached Harold, he rushed his battle-weary army back south, ",
        afterInline: " only briefly in London to gather extra forces.",
        afterTail: "",
        cue: "STOP",
        answers: ["stopping", "stopped"],
        keyShow: "stopping",
        grammarTag: "Participle I · обстоятельство",
        explainRu:
          "«Поспешил на юг, <strong>остановившись</strong> лишь ненадолго в Лондоне» → <em>stopping</em> (деепричастный оборот от <strong>STOP</strong>).",
        explainOkRu:
          "<em>Stopping only briefly in London</em> поясняет, как он двигался армией; <em>only briefly</em> уже в тексте.",
        explainWrongRu:
          "Нужна форма, показывающая краткую остановку по пути, а не существительное <em>stop</em>.",
        wrongIf: [
          {
            includes: "stop",
            hintRu:
              "Голый инфинитив / команда <em>stop</em> не связывает два действия → <em>stopping</em>."
          },
          {
            includes: "stops",
            hintRu:
              "<em>Stops</em> — Present; основное сказуемое уже <em>rushed</em> (Past)."
          },
          {
            includes: "to stop",
            hintRu:
              "Инфинитив возможен реже; типичный ключ — причастие <em>stopping only briefly</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> исторический текст → чаще <strong>Past / Past Perfect</strong> и пассивные причастия (<em>known, crowned</em>).</p>" +
      "<p><strong>Лайфхак:</strong> <strong>LIE</strong> (лежать) в Past = <em>lay</em>; не путать с <em>lay</em> (класть) → <em>laid</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
