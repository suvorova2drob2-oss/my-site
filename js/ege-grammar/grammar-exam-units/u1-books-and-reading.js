/**
 * ЕГЭ Grammar Exam · Unit 1 · Books and reading (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-books-reading",
    unitOrder: 1,
    title: "Unit 1 · Books and reading",
    examSection: "§19–24",
    headerTitle: "Books and reading",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Do you think that e-books will one day replace paper books? I don't think so. However, they might become even ",
        afterInline: " than they currently are.",
        afterTail:
          "E-books clearly possess great value and as technology advances, I believe they will become increasingly common, but I think that printed books will continue to have a place.",
        cue: "POPULAR",
        answers: ["more popular"],
        keyShow: "more popular",
        grammarTag: "Сравнение: more + слово",
        plainRu:
          "По-русски: «станут ещё <strong>более популярными</strong>». Слово POPULAR само по себе не вставляй — нужно <em>more popular</em>, потому что дальше идёт <em>than</em> («чем»).",
        explainRu:
          "В английском сравнение часто выглядит так: <em>more + длинное прилагательное + than</em>. Рядом подсказки: <em>even</em> («ещё») и <em>than they currently are</em> («чем сейчас»).",
        explainOkRu:
          "Ты попал в смысл: электронные книги не просто popular, а <strong>ещё популярнее</strong>, чем в данный момент.",
        explainWrongRu:
          "Если написать только <em>popular</em>, получится «они popular, чем сейчас» — грамматика ломается. Нужна ступень «популярнее».",
        examplesRu: [
          "✓ This phone is <em>more popular</em> than that one. — «Этот телефон популярнее того.»",
          "✓ She is <em>even more tired</em> than yesterday. — после <em>even</em> тоже часто <em>more</em>.",
          "✗ They are popular than now. — так не говорят; нужно <em>more popular than</em>."
        ],
        wrongIf: [
          {
            includes: "popular",
            hintRu:
              "POPULAR ты использовал, но забыл главное: перед <em>than</em> нужно <em>more</em> → <em>more popular</em>."
          },
          {
            includes: "popularly",
            hintRu:
              "<em>Popularly</em> = «популярно, широко» (наречие). Здесь нужно прилагательное: <em>more popular</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before:
          "They might change form a little, but people generally prefer them, and so I cannot see them ",
        afterInline: " obsolete in the near future.",
        afterTail:
          "I think libraries will also exist, though they will become less common.",
        cue: "BECOME",
        answers: ["becoming", "become"],
        keyShow: "becoming",
        grammarTag: "После see + them",
        plainRu:
          "Смысл: «я не представляю, что они <strong>станут</strong> ненужными». От BECOME нужен глагол (become / becoming), не существительное.",
        explainRu:
          "После <em>I can't see them …</em> идёт, что с «ними» произойдёт: <em>become obsolete</em> или <em>becoming obsolete</em>. Слово <em>obsolete</em> («устаревшими») уже стоит после пропуска.",
        explainOkRu:
          "Ты вставил форму от BECOME — «становиться», а не другое слово.",
        explainWrongRu:
          "В ячейку — только BECOME в нужной форме. Не пиши <em>obsolete</em> ещё раз: оно уже в тексте.",
        examplesRu: [
          "✓ I can't see him <em>becoming</em> a doctor. — «Не вижу, чтобы он стал врачом.»",
          "✓ I can't see them <em>become</em> enemies. — после <em>see them</em> часто глагол без to.",
          "✗ I can't see them obsolete. — не хватает глагола «стать» → <em>becoming / become</em>."
        ],
        wrongIf: [
          {
            includes: "became",
            hintRu:
              "<em>Became</em> — это «стали» в прошлом. Автор говорит о будущем (<em>in the near future</em>), не о прошлом."
          },
          {
            includes: "becoming obsolete",
            hintRu:
              "Слово <em>obsolete</em> уже написано <strong>после</strong> пропуска. В ячейку — только <em>becoming</em> или <em>become</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 2,
        before:
          "How can children be encouraged to read? In my opinion, it's important that reading is not a chore for ",
        afterInline: ".",
        afterTail: "",
        cue: "THEY",
        answers: ["them"],
        keyShow: "them",
        grammarTag: "После for — them",
        plainRu:
          "По-русски: «чтение не должно быть обузой <strong>для них</strong>». После <em>for</em> нельзя they — нужно <em>them</em>.",
        explainRu:
          "Как в русском «для меня / для него», в английском после предлога <em>for</em> ставят особую форму: I → me, they → <strong>them</strong>.",
        explainOkRu:
          "Верно: <em>for them</em> = «для них».",
        explainWrongRu:
          "<em>They</em> — это «они» в начале фразы. После <em>for</em> так не ставят.",
        examplesRu: [
          "✓ This gift is for <em>them</em>. — «Этот подарок для них.»",
          "✓ It's hard for <em>me</em>. — не <em>I</em>, а <em>me</em> после for.",
          "✗ It's a chore for <em>they</em>. — ошибка; нужно <em>them</em>."
        ],
        wrongIf: [
          {
            includes: "they",
            hintRu:
              "<em>They</em> = «они» (кто делает). Здесь «для кого» → <em>them</em>, как «for us», не «for we»."
          },
          {
            includes: "their",
            hintRu:
              "<em>Their</em> = «их» (чья?). Нужно «для них» → <em>them</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before: "If children ",
        afterInline:
          " that they have to read certain books, they will view it as an unpleasant task.",
        afterTail: "",
        cue: "TELL",
        answers: ["are told", "were told"],
        keyShow: "are told",
        grammarTag: "Им говорят — are told",
        plainRu:
          "По-русски: «если детям <strong>говорят</strong>, что они должны читать…». Дети не сами «tell» — <strong>им tell</strong> → пассив <em>are told</em>.",
        explainRu:
          "Пассив = «кому-то что-то говорят»: <em>Children are told</em> = «Детям говорят». От TELL получается <em>are told</em>, не просто <em>tell</em>.",
        explainOkRu:
          "Ты правильно понял: речь не о том, что дети кому-то рассказывают, а что <strong>им говорят</strong>.",
        explainWrongRu:
          "<em>Tell / tells / told</em> без <em>are</em> = дети сами «рассказывают». По смыслу наоборот.",
        examplesRu: [
          "✓ Students <em>are told</em> to be quiet. — «Студентам говорят помолчать.»",
          "✓ I <em>was told</em> to wait. — «Мне сказали подождать.»",
          "✗ If children <em>tell</em> that… — «если дети рассказывают…» — не тот смысл."
        ],
        wrongIf: [
          {
            includes: "tell",
            hintRu:
              "<em>Tell</em> = дети сами говорят. Нужно «им говорят» → <em>are told</em>."
          },
          {
            includes: "told",
            hintRu:
              "Одного <em>told</em> мало. Обычный ключ: <em>are told</em> (Present) или <em>were told</em>."
          },
          {
            includes: "tells",
            hintRu:
              "<em>Tells</em> — «он/она говорит». Подлежащее <em>children</em> (много) + смысл «им говорят»."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "They will expect some reward — the things they prefer, such as video games — for ",
        afterInline: " that task.",
        afterTail:
          "However, this means that they won't read unless they are forced to.",
        cue: "FINISH",
        answers: ["finishing"],
        keyShow: "finishing",
        grammarTag: "for + -ing",
        plainRu:
          "По-русски: «в награду <strong>за то, что сделали</strong> задание». После <em>for</em> часто идёт глагол с <strong>-ing</strong>: <em>for finishing</em>.",
        explainRu:
          "Конструкция «награда за что-то»: <em>reward for doing</em>. FINISH → <em>finishing</em> (не <em>finish</em> и не <em>to finish</em>).",
        explainOkRu:
          "Верно: <em>for finishing that task</em> = «за выполнение этого задания».",
        explainWrongRu:
          "После предлога <em>for</em> в такой фразе обычно <em>-ing</em>, а не голый глагол.",
        examplesRu: [
          "✓ Thank you for <em>helping</em> me. — «Спасибо за помощь.»",
          "✓ He got a prize for <em>winning</em> the game. — «приз за победу».",
          "✗ a reward for <em>finish</em> the task. — нужно <em>finishing</em>."
        ],
        wrongIf: [
          {
            includes: "finish",
            hintRu:
              "После <em>for</em> здесь не <em>finish</em>, а <em>finishing</em> — как «thanks for helping»."
          },
          {
            includes: "finished",
            hintRu:
              "<em>Finished</em> тут не подходит. Шаблон: <em>for + V-ing</em>."
          },
          {
            includes: "to finish",
            hintRu:
              "<em>For to finish</em> не ставят. Нужно <em>for finishing</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 3,
        before:
          "I think the best way is having parents read to children when they are young, like my parents ",
        afterInline: ".",
        afterTail: "That way, I gained positive associations and love for reading.",
        cue: "DO",
        answers: ["did"],
        keyShow: "did",
        grammarTag: "did = «тоже читали»",
        plainRu:
          "По-русски: «как это делали мои родители» — то есть <strong>читали мне</strong>. Слово <em>read</em> уже было выше; чтобы не повторять, ставят <em>did</em> (прошлое время от DO).",
        explainRu:
          "<em>Like my parents did</em> = «как (читали) мои родители». DO здесь не «делать», а замена глагола <em>read</em> в прошлом.",
        explainOkRu:
          "Ты уловил: <em>did</em> = «(читали) так же», про детство, в прошлом.",
        explainWrongRu:
          "<em>Do / does</em> — настоящее время. Речь о том, что родители <strong>делали тогда</strong>, когда автор был маленьким.",
        examplesRu: [
          "✓ She runs fast, like her brother <em>did</em>. — «брат тоже (бегал) быстро».",
          "✓ I enjoyed the film, as you <em>did</em>. — «как и ты».",
          "✗ like my parents <em>do</em>. — настоящее; нужно прошлое → <em>did</em>."
        ],
        wrongIf: [
          {
            includes: "do",
            hintRu:
              "<em>Do</em> — «делают сейчас». История про детство → <em>did</em>."
          },
          {
            includes: "done",
            hintRu:
              "<em>Done</em> = «сделано». Здесь нужна замена «читали» → <em>did</em>."
          },
          {
            includes: "does",
            hintRu:
              "<em>Does</em> — для he/she. И <em>parents</em> — множественное + прошлое."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Запомни просто:</strong> жёлтое слово справа — только для <strong>этого</strong> номера. И почти никогда не вставляй его «как в задании» — его нужно <strong>изменить</strong>.</p>" +
      "<p><strong>Три частых сигнала:</strong> <em>than</em> → often <em>more</em>; <em>for</em> → often <em>me/them</em> or <em>-ing</em>; «им говорят» → <em>are told</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
