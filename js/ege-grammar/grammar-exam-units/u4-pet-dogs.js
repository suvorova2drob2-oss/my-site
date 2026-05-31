/**
 * ЕГЭ Grammar Exam · Unit 4 · What we can learn from our pet dogs (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-pet-dogs",
    unitOrder: 4,
    title: "Unit 4 · What we can learn from our pet dogs",
    examSection: "§19–24",
    headerTitle: "What we can learn from our pet dogs",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "People try to teach their dogs different tricks, and so did I. However, I realize that my dog, Spot, ",
        afterInline: " me a few important things already.",
        afterTail: "Forgiveness is one of them.",
        cue: "TEACH",
        answers: ["has taught", "'s taught", "s taught"],
        keyShow: "has taught",
        grammarTag: "Present Perfect",
        explainRu:
          "Маркер <strong>already</strong> → Present Perfect: <em>has taught</em> («Spot уже многому научил меня»).",
        explainOkRu:
          "<em>Has taught</em> — форма от <strong>TEACH</strong>; подлежащее <em>Spot</em> (he) → <em>has</em>.",
        explainWrongRu:
          "С <strong>already</strong> нужен perfect, а не просто Past Simple или Present.",
        wrongIf: [
          {
            includes: "taught",
            hintRu:
              "Одного <em>taught</em> без <em>has</em> мало: <strong>already</strong> → <em>has taught</em>."
          },
          {
            includes: "teaches",
            hintRu:
              "<em>Teaches</em> — «учит сейчас»; <em>already</em> указывает на результат к настоящему моменту."
          },
          {
            includes: "teach",
            hintRu:
              "Голый <em>teach</em> не сочетается с <em>already</em> в этом смысле."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "No matter how many times I ",
        afterInline: " to take Spot for a walk, he's never held a grudge.",
        afterTail:
          "We should also learn to forgive our friends and not dwell on their mistakes.",
        cue: "FORGET",
        answers: [
          "have forgotten",
          "'ve forgotten",
          "ve forgotten",
          "forget"
        ],
        keyShow: "have forgotten",
        grammarTag: "Present Perfect",
        explainRu:
          "«Сколько бы раз я <strong>ни забыл</strong>» — опыт к настоящему → Present Perfect: <em>have forgotten to take</em> (ключ ФИПИ).",
        explainOkRu:
          "<em>Have forgotten</em> от <strong>FORGET</strong>; после <em>I</em> → <em>have forgotten to take</em>.",
        explainWrongRu:
          "Нужна глагольная форма от <strong>FORGET</strong>, не существительное или причастие без <em>have</em>.",
        wrongIf: [
          {
            includes: "forgot",
            hintRu:
              "Одного <em>forgot</em> мало: в ключе ФИПИ — <em>have forgotten</em>."
          },
          {
            includes: "forgetting",
            hintRu:
              "После <em>I</em> нужна личная форма (<em>have forgotten</em> / <em>forget</em>), не голый герундий."
          },
          {
            includes: "forgotten",
            hintRu:
              "Participle без <em>have</em> не образует сказуемое: нужно <em>have forgotten</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 2,
        before:
          "Spot also teaches me to treat my loved ones better. Spot's adoration reminds me to be a better person for my loved ones. Just like Spot sees the good in me, I see the good in friends and treat ",
        afterInline: " with love and respect.",
        afterTail: "",
        cue: "THEY",
        answers: ["them"],
        keyShow: "them",
        grammarTag: "Местоимение · объект",
        explainRu:
          "После <strong>treat</strong> нужен объект: <em>they → them</em> («относиться к <strong>ним</strong> с любовью»).",
        explainOkRu:
          "<em>Them</em> — объектная форма от <strong>THEY</strong>; конструкция <em>treat somebody with …</em>.",
        explainWrongRu:
          "После <em>treat</em> нельзя <em>they</em> или <em>their</em> — нужен объектный падеж.",
        wrongIf: [
          {
            includes: "they",
            hintRu:
              "<em>They</em> — подлежащее; после <em>treat</em> → <em>them</em>."
          },
          {
            includes: "their",
            hintRu:
              "<em>Their</em> — «их» (притяжательное); здесь «относиться <strong>к ним</strong>»."
          },
          {
            includes: "themselves",
            hintRu:
              "Возвратное «сами к себе» не подходит: речь о <em>friends</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 3,
        before:
          "Dogs set a great example to help us humans become better friends and partners. They teach us to be selfless, loyal, and true to ",
        afterInline: ".",
        afterTail: "",
        cue: "WE",
        answers: ["ourselves"],
        keyShow: "ourselves",
        grammarTag: "Возвратное местоимение",
        explainRu:
          "<em>Teach us to be true to ourselves</em> — «учат <strong>нас</strong> быть верными <strong>себе</strong>»; <em>we → ourselves</em> (ключ ФИПИ).",
        explainOkRu:
          "<em>Ourselves</em> — возвратное от <strong>WE</strong>; пара <em>teach us … to ourselves</em>.",
        explainWrongRu:
          "Нужно возвратное от <strong>WE</strong> — <em>ourselves</em>, не местоимение от <em>they</em> или обобщённое <em>oneself</em>.",
        wrongIf: [
          {
            includes: "themselves",
            hintRu:
              "<em>Themselves</em> — «сами (они)»; собаки учат <strong>нас</strong> → <em>ourselves</em>."
          },
          {
            includes: "oneself",
            hintRu:
              "<em>True to oneself</em> — другая конструкция; здесь <em>teach us</em> → <em>ourselves</em> (ФИПИ)."
          },
          {
            includes: "yourself",
            hintRu:
              "<em>Yourself</em> — «ты сам»; в тексте <em>us</em> → <em>ourselves</em>."
          },
          {
            includes: "myself",
            hintRu:
              "Речь о <em>us</em> (нас, людей) → <em>ourselves</em>, не <em>myself</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 3,
        before:
          "They teach us that love and care is a two-way street. Take care of the ones you love, including your pets, and they will reciprocate with even ",
        afterInline: " care.",
        afterTail: "",
        cue: "MUCH",
        answers: ["more"],
        keyShow: "more",
        grammarTag: "Сравнительная степень",
        explainRu:
          "Перед <em>even</em> и существительным <em>care</em> — сравнительная от <strong>MUCH</strong>: <em>more care</em> («ещё больше заботы»).",
        explainOkRu:
          "<em>More</em> — сравнительная от <em>much</em>; параллель с <em>more love</em> в конце текста (§24).",
        explainWrongRu:
          "После <strong>even</strong> нужна сравнительная форма, а не <em>much</em> в начальной степени.",
        wrongIf: [
          {
            includes: "much",
            hintRu:
              "<em>Much</em> без сравнения; с <strong>even</strong> → <em>more care</em>."
          },
          {
            includes: "most",
            hintRu:
              "<em>Most</em> — превосходная; здесь «<em>ещё больше</em>», не «самая большая»."
          },
          {
            includes: "many",
            hintRu:
              "<em>Care</em> здесь неисчисляемое → <em>much → more</em>, не <em>many</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 4,
        before:
          "Remember, just like dogs, we can learn to offer fulfilling relationships to our partners, with ",
        afterInline: " complaints and more love.",
        afterTail: "",
        cue: "FEW",
        answers: ["fewer"],
        keyShow: "fewer",
        grammarTag: "Сравнительная · few",
        explainRu:
          "Пара <em>fewer … / more …</em>: сравнительная от <strong>FEW</strong> → <em>fewer complaints</em> (исчисляемое мн. ч.).",
        explainOkRu:
          "<em>Fewer</em> стоит рядом с <em>more love</em> — контраст «меньше жалоб, больше любви».",
        explainWrongRu:
          "Перед исчисляемым <em>complaints</em> нужно <em>fewer</em>, не <em>few / less</em>.",
        wrongIf: [
          {
            includes: "few",
            hintRu:
              "С <em>more love</em> в паре нужна сравнительная: <em>few → fewer</em>."
          },
          {
            includes: "less",
            hintRu:
              "<em>Less</em> — для неисчисляемых; <em>complaints</em> → <em>fewer</em>."
          },
          {
            includes: "little",
            hintRu:
              "<em>Little</em> не сочетается с мн. ч. <em>complaints</em> так же, как <em>fewer</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> <em>even</em> часто тянет <strong>сравнительную</strong> (<em>more / fewer</em>); <em>already</em> — <strong>Present Perfect</strong>.</p>" +
      "<p><strong>Лайфхак:</strong> ищите пары в тексте: <em>fewer … and more …</em> — обе формы должны быть «степенями».</p>"
  });
})(typeof window !== "undefined" ? window : this);
