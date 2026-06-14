/**
 * ЕГЭ Grammar Exam · Unit 7 · War and Peace / Moscow (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-war-and-peace-moscow",
    unitOrder: 7,
    title: "Unit 7 · War and Peace · Moscow",
    examSection: "§19–24",
    headerTitle: "War and Peace",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "War and Peace, a novel by Leo Tolstoy, is a picture of Russian life set against a background of Napoleon's invasion. It is one of the ",
        afterInline: " novels of world literature.",
        afterTail: "",
        cue: "GREAT",
        answers: ["greatest"],
        keyShow: "greatest",
        grammarTag: "Превосходная степень",
        explainRu:
          "После <strong>one of the</strong> нужна <strong>превосходная</strong> степень: <em>great → greatest</em> («один из величайших романов»).",
        explainOkRu:
          "<em>Greatest</em> — форма от <strong>GREAT</strong> в супerlatives; конструкция <em>one of the + superlative + plural noun</em>.",
        explainWrongRu:
          "Нельзя оставить <em>great</em> без степени после <em>one of the</em>.",
        wrongIf: [
          {
            includes: "great",
            hintRu:
              "Слово <strong>GREAT</strong> есть, но нужна превосходная: <em>one of the greatest novels</em>."
          },
          {
            includes: "greater",
            hintRu:
              "<em>Greater</em> — сравнительная; после <em>one of the</em> → <em>greatest</em>."
          },
          {
            includes: "greatly",
            hintRu:
              "<em>Greatly</em> — наречие; перед <em>novels</em> нужно прилагательное."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "Considerable parts of the book ",
        afterInline: " to Tolstoy's theory of history.",
        afterTail: "",
        cue: "DEVOTE",
        answers: ["are devoted", "were devoted"],
        keyShow: "are devoted",
        grammarTag: "Present Simple · пассив",
        explainRu:
          "«Части книги <strong>посвящены</strong> теории» → пассив от <strong>DEVOTE</strong>: <em>are devoted to</em>.",
        explainOkRu:
          "<em>Are devoted to</em> — части не «devote» сами, а <strong>им</strong> посвящены разделы; устойчиво <em>devoted to</em>.",
        explainWrongRu:
          "Нужен пассив + предлог <em>to</em>, а не актив <em>devote parts</em>.",
        wrongIf: [
          {
            includes: "devote",
            hintRu:
              "Актив «parts devote» не подходит → <em>are devoted to</em>."
          },
          {
            includes: "devoted",
            hintRu:
              "Одного <em>devoted</em> без <em>are</em> мало для сказуемого с <em>parts</em>."
          },
          {
            includes: "devoting",
            hintRu:
              "<em>Devoting</em> не даёт пассива «посвящены теории»."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "However, the greatness of War and Peace ",
        afterInline:
          " in its philosophy or in any contribution to the facts or theory of history.",
        afterTail:
          "It depends on the building of a vast panorama of the whole society out of innumerable minute realistic details.",
        cue: "NOT LIE",
        answers: [
          "does not lie",
          "doesn't lie",
          "doesnt lie",
          "do not lie",
          "don't lie"
        ],
        keyShow: "does not lie",
        grammarTag: "Отрицание · Present Simple",
        explainRu:
          "Базовые слова <strong>NOT LIE</strong> → отрицание Present: <em>does not lie in</em> («не заключается в»). Подлежащее <em>greatness</em> → <em>does</em>.",
        explainOkRu:
          "<em>Does not lie in</em> — устойчиво «с greatness не в …»; оба слова из задания: <em>not</em> + <em>lie</em>.",
        explainWrongRu:
          "Нужно отрицание «<strong>не</strong> заключается», а не утверждение <em>lies</em>.",
        wrongIf: [
          {
            includes: "lie",
            hintRu:
              "Без <strong>NOT</strong> — «заключается в философии», а по тексту наоборот."
          },
          {
            includes: "not lie",
            hintRu:
              "Нужен вспомогательный: <em>does not lie</em>, не голое <em>not lie</em>."
          },
          {
            includes: "don't lie",
            hintRu:
              "<em>Greatness</em> — ед. ч. → <em>does not / doesn't lie</em>, не <em>don't</em>."
          },
          {
            includes: "lies",
            hintRu:
              "Утвердительное <em>lies in</em> противоречит <strong>NOT</strong> в задании."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "Moscow. What do you know about Moscow? It ",
        afterInline:
          " the capital of Russia for a long time.",
        afterTail:
          "However, when it was first mentioned in historical records around 1147, it was nothing more than a tiny town of little importance.",
        cue: "BE",
        answers: [
          "has been",
          "'s been",
          "s been",
          "had been"
        ],
        keyShow: "has been",
        grammarTag: "Present Perfect",
        explainRu:
          "«<strong>Уже долго</strong> является столицей» → Present Perfect от <strong>BE</strong>: <em>has been</em> + <em>for a long time</em>.",
        explainOkRu:
          "<em>Has been the capital</em> — Москва и сейчас столица; период тянется до настоящего.",
        explainWrongRu:
          "С <em>for a long time</em> о действии до «сейчас» нужен Perfect, не просто <em>is/was</em>.",
        wrongIf: [
          {
            includes: "is",
            hintRu:
              "Present <em>is</em> без perfect слабо передаёт «уже долгое время» → <em>has been</em>."
          },
          {
            includes: "was",
            hintRu:
              "Past <em>was</em> — «была (и перестала)»; Москва <strong>до сих пор</strong> столица."
          },
          {
            includes: "be",
            hintRu:
              "Голая форма <em>be</em> не стоит после <em>It</em> как сказуемое."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "Muscovites today consider Prince Yuri Dolgorukiy their city's founding father, but it was only recorded that he dined with friends in the town of 'Moskov,' ",
        afterInline: " after the local Moscow River.",
        afterTail: "",
        cue: "NAME",
        answers: ["named"],
        keyShow: "named",
        grammarTag: "Participle II · пассив",
        explainRu:
          "«Город, <strong>названный</strong> по реке» → Past Participle от <strong>NAME</strong>: <em>named after</em>.",
        explainOkRu:
          "<em>Named after the Moscow River</em> — устойчивая конструкция; <em>after</em> уже в тексте.",
        explainWrongRu:
          "Нужно «названный», а не <em>name / names / naming</em> в активе.",
        wrongIf: [
          {
            includes: "name",
            hintRu:
              "Существительное или инфинитив <em>name</em> не стыкуется с <em>after the river</em> → <em>named after</em>."
          },
          {
            includes: "names",
            hintRu:
              "<em>Names after</em> — «называет в честь»; город <strong>назвали</strong> → <em>named</em>."
          },
          {
            includes: "naming",
            hintRu:
              "<em>Naming</em> — актив; нужен пассивный смысл «назван в честь»."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "It remains unclear exactly when this town was established. A small fortress was built on Borovitsky Hill by Dolgorukiy's son, Prince Andrei Bogolyubsky; it was the first in a long succession of structures that eventually became the Moscow Kremlin. Moscow remained a small town while the nearby city of Vladimir ",
        afterInline: " in prominence and overtook Kiev, the old capital, in importance.",
        afterTail: "",
        cue: "RISE",
        answers: ["rose", "was rising"],
        keyShow: "rose",
        grammarTag: "Past Simple",
        explainRu:
          "Пара с <em>remained</em> и <em>overtook</em> — прошлое → Past Simple от <strong>RISE</strong>: <em>rose in prominence</em> (неправильный глагол).",
        explainOkRu:
          "<em>Rose</em> — прошедшее от «расти / усиливаться»; Владимир <strong>возрос</strong> в значении и обошёл Киев.",
        explainWrongRu:
          "Нужна форма прошедшего времени, не инфинитив <em>rise</em> или Present.",
        wrongIf: [
          {
            includes: "rise",
            hintRu:
              "Инфинитив / настоящее <em>rise</em> не сочетается с <em>remained … overtook</em> → <em>rose</em>."
          },
          {
            includes: "risen",
            hintRu:
              "Participle III без вспомогательного не образует Past; нужно <em>rose</em> или <em>was rising</em>."
          },
          {
            includes: "rises",
            hintRu:
              "Present не подходит: параллель с <em>remained</em> и <em>overtook</em> в прошлом."
          },
          {
            includes: "raised",
            hintRu:
              "<em>Raised</em> — «поднимать (что-то)»; от <strong>RISE</strong> «расти» → <em>rose</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> <em>one of the …</em> → почти всегда <strong>superlative</strong>; <em>for a long time</em> → часто <strong>has been</strong>.</p>" +
      "<p><strong>Лайфхак:</strong> два слова (<em>NOT LIE</em>) → одно отрицание в сказуемом: <em>does not lie</em>, не «not» отдельно.</p>"
  });
})(typeof window !== "undefined" ? window : this);
