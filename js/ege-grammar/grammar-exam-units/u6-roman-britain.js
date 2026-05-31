/**
 * ЕГЭ Grammar Exam · Unit 6 · Roman Britain (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-roman-britain",
    unitOrder: 6,
    title: "Unit 6 · Roman Britain",
    examSection: "§19–24",
    headerTitle: "Roman Britain",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Do you know that Britain was part of the Roman Empire for over three and a half centuries? From the invasion in AD 43 until rule from Rome ended in the 5th century, the province of Britannia was part of a political union that covered ",
        afterInline: " of Europe.",
        afterTail: "",
        cue: "MUCH",
        answers: ["much"],
        keyShow: "much",
        grammarTag: "Количество · much of",
        explainRu:
          "Устойчиво: <em>much of Europe</em> — «большая часть Европы»; здесь не сравнительная, а исходная форма от <strong>MUCH</strong>.",
        explainOkRu:
          "<em>Much of</em> + существительное = «многое / большая часть из»; союз покрывал <em>much of Europe</em>.",
        explainWrongRu:
          "После <em>covered</em> нужна конструкция <em>much of</em>, а не <em>more/most</em> без опоры в тексте.",
        wrongIf: [
          {
            includes: "more",
            hintRu:
              "Сравнительная <em>more</em> здесь не нужна — нет «чем»; типично <em>much of Europe</em>."
          },
          {
            includes: "most",
            hintRu:
              "<em>Most of</em> возможно в речи, но ключ к заданию — форма от <strong>MUCH</strong>: <em>much of</em>."
          },
          {
            includes: "many",
            hintRu:
              "<em>Europe</em> здесь как целое → <em>much of</em>, не <em>many of</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "This period ",
        afterInline: " by several key events, both military and civilian.",
        afterTail: "",
        cue: "MARK",
        answers: ["was marked", "is marked"],
        keyShow: "was marked",
        grammarTag: "Past Simple · пассив",
        explainRu:
          "«Этот период <strong>отмечен</strong> событиями» → пассив Past Simple от <strong>MARK</strong>: <em>was marked by</em>.",
        explainOkRu:
          "<em>Was marked by</em> — период не сам «маркировал», а <strong>им</strong> отмечен ключевыми событиями.",
        explainWrongRu:
          "Нужен пассив, а не актив «this period marked …» без <em>was</em>.",
        wrongIf: [
          {
            includes: "marked",
            hintRu:
              "Без <em>was</em> получается актив «период отметил» — нужен пассив <em>was marked by</em>."
          },
          {
            includes: "marks",
            hintRu:
              "Present не подходит: речь об историческом периоде в прошлом."
          },
          {
            includes: "marking",
            hintRu:
              "<em>Marking</em> не образует пассив «отмечен событиями» → <em>was marked</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before:
          "By the early 5th century, the Roman Empire could no longer defend ",
        afterInline:
          " against either internal rebellion or the external threat posed by Germanic tribes expanding in Western Europe.",
        afterTail: "The last of the Roman troops left Britain.",
        cue: "IT",
        answers: ["itself"],
        keyShow: "itself",
        grammarTag: "Возвратное местоимение",
        explainRu:
          "«Империя не могла защитить <strong>себя</strong>» → возвратное от <strong>IT</strong>: <em>itself</em> (the Roman Empire).",
        explainOkRu:
          "<em>Defend itself</em> — объект = то же, что подлежащее; <em>it → itself</em>.",
        explainWrongRu:
          "После <em>defend</em> нужно местоимение-объект «себя», не <em>it</em> или <em>its</em>.",
        wrongIf: [
          {
            includes: "it",
            hintRu:
              "<em>Defend it</em> — «защитить <strong>его</strong> (другой объект)»; здесь «<strong>себя</strong>» → <em>itself</em>."
          },
          {
            includes: "its",
            hintRu:
              "<em>Its</em> — притяжательное; нужно возвратное <em>itself</em>."
          },
          {
            includes: "them",
            hintRu:
              "Подлежащее — <em>the Roman Empire</em> (ед. ч.) → <em>itself</em>, не <em>themselves</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "History of Hadrian's Wall. Hadrian's Wall was the north-west frontier of the Roman empire for nearly 300 years. It was built by the Roman army on the orders of the emperor Hadrian ",
        afterInline: " his visit to Britain in AD 122.",
        afterTail: "",
        cue: "FOLLOW",
        answers: ["following"],
        keyShow: "following",
        grammarTag: "Participle I · время",
        explainRu:
          "«По приказу Адриана <strong>после</strong> его визита» → <em>following his visit</em> (причастие от <strong>FOLLOW</strong>).",
        explainOkRu:
          "<em>Following his visit</em> = «последовав за визитом / после визита»; стена построена после AD 122.",
        explainWrongRu:
          "Нужна форма «после / вслед за», а не существительное <em>follow</em> или Past Simple.",
        wrongIf: [
          {
            includes: "followed",
            hintRu:
              "Past Simple <em>followed</em> не стыкуется с <em>on the orders … his visit</em> → <em>following</em>."
          },
          {
            includes: "follow",
            hintRu:
              "Голый <em>follow</em> не показывает «после визита» → <em>following his visit</em>."
          },
          {
            includes: "follows",
            hintRu:
              "<em>Follows</em> — Present; события прошлого (AD 122)."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before: "By about AD 100 there were many Roman forts in the north of Britain. The forts here ",
        afterInline: " by a road, now known as the Stanegate, between Corbridge and Carlisle.",
        afterTail: "",
        cue: "LINK",
        answers: ["were linked", "are linked", "had been linked"],
        keyShow: "were linked",
        grammarTag: "Past Simple · пассив",
        explainRu:
          "«Форты <strong>были связаны</strong> дорогой» → пассив от <strong>LINK</strong>: <em>were linked by</em>.",
        explainOkRu:
          "<em>Were linked by a road</em> — форты не сами «линковали», их соединяла дорога.",
        explainWrongRu:
          "После подлежащего <em>forts</em> и перед <em>by a road</em> нужен пассив, не актив.",
        wrongIf: [
          {
            includes: "linked",
            hintRu:
              "Без <em>were</em> — актив или причастие без вспомогательного; нужно <em>were linked</em>."
          },
          {
            includes: "link",
            hintRu:
              "<em>Forts link</em> — «форты связывают»; по смыслу их <strong>связывала</strong> дорога → пассив."
          },
          {
            includes: "linking",
            hintRu:
              "<em>Linking</em> не даёт пассива «были связаны» → <em>were linked by</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "Hadrian came to Britain in AD 122 and, according to a biography ",
        afterInline:
          " 200 years later, 'put many things to right and was the first to build a wall 80 miles long from sea to sea to separate the barbarians from the Romans'.",
        afterTail: "",
        cue: "WRITE",
        answers: ["written"],
        keyShow: "written",
        grammarTag: "Participle II · пассив",
        explainRu:
          "«Согласно биографии, <strong>написанной</strong> спустя 200 лет» → Past Participle от <strong>WRITE</strong>: <em>written</em>.",
        explainOkRu:
          "<em>A biography written 200 years later</em> — биография не «писала», её <strong>написали</strong> позже.",
        explainWrongRu:
          "Нужно причастие «написанная», а не <em>wrote / writing / write</em>.",
        wrongIf: [
          {
            includes: "wrote",
            hintRu:
              "Past Simple «написала» не описывает биографию как определение → <em>written</em>."
          },
          {
            includes: "writing",
            hintRu:
              "<em>Writing</em> — актив «которая пишет»; биография <strong>написана</strong> → <em>written</em>."
          },
          {
            includes: "write",
            hintRu:
              "Инфинитив / команда не стоят после <em>a biography</em> → <em>written 200 years later</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> если после пропуска <strong>by</strong> — часто <strong>пассив</strong> (<em>was marked, were linked</em>).</p>" +
      "<p><strong>Лайфхак:</strong> <strong>IT</strong> после <em>defend / protect / help</em> → проверь, не нужно ли <em>itself / themselves</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
