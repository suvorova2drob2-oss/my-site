/**
 * ЕГЭ Grammar Exam · Unit 9 · Pushkin · History of Moscow (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-pushkin-moscow-history",
    unitOrder: 9,
    title: "Unit 9 · Pushkin · History of Moscow",
    examSection: "§19–24",
    headerTitle: "Alexander Pushkin",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Alexander Pushkin was a 19th-century Russian poet, novelist, dramatist, and short-story writer. He ",
        afterInline:
          " as the founder of modern Russian literature, and his works have been adapted into operas by several Russian composers.",
        afterTail: "",
        cue: "REMEMBER",
        answers: ["is remembered", "was remembered"],
        keyShow: "is remembered",
        grammarTag: "Present Simple · пассив",
        explainRu:
          "«Его <strong>помнят / он считается</strong> основателем» → пассив от <strong>REMEMBER</strong>: <em>is remembered as</em>.",
        explainOkRu:
          "<em>Is remembered as</em> — устойчиво «его помнят как…»; Пушкин — объект, не субъект «remember».",
        explainWrongRu:
          "Нужен пассив «его помнят», а не актив <em>he remembers</em>.",
        wrongIf: [
          {
            includes: "remember",
            hintRu:
              "Актив «он помнит» — не тот смысл → <em>is remembered as the founder</em>."
          },
          {
            includes: "remembers",
            hintRu:
              "<em>He remembers as</em> грамматически и по смыслу неверно."
          },
          {
            includes: "remembered",
            hintRu:
              "Одного <em>remembered</em> без <em>is/was</em> мало для полного пассива."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before:
          "Raised in a neglected environment, Pushkin began his literary pursuits at an early age. However, he eventually became rebellious in his compositions. His works began infuriating the ",
        afterInline:
          " government. As a result, Pushkin was sent into exile.",
        afterTail:
          "After almost 6 years of exile, Pushkin was finally released from deportation, but the tsar applied censorship to his writings.",
        cue: "RULE",
        answers: ["ruling"],
        keyShow: "ruling",
        grammarTag: "Participle I · прилагательное",
        explainRu:
          "«<strong>Правящее</strong> правительство» → причастие от <strong>RULE</strong>: <em>the ruling government</em>.",
        explainOkRu:
          "<em>Ruling</em> — не глагол «rule», а определение к <em>government</em> (кто правит).",
        explainWrongRu:
          "Нужно прилагательное перед <em>government</em>, не <em>rule / rules</em>.",
        wrongIf: [
          {
            includes: "rule",
            hintRu:
              "Существительное «правило» или глагол не стоят перед <em>government</em> → <em>ruling</em>."
          },
          {
            includes: "rules",
            hintRu:
              "<em>Rules government</em> — бессмыслица; нужно «правящее» → <em>ruling</em>."
          },
          {
            includes: "ruled",
            hintRu:
              "Past Participle <em>ruled government</em> — «правительство, которым правили», не то."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 2,
        before:
          "The history of Moscow. What do you know about the history of Moscow? The first documentary reference to Moscow ",
        afterInline:
          " many years ago in the early monastic chronicles under the year 1147, when on April 4 Yuri Vladimirovich Dolgorukiy, prince of Suzdal, was host at a 'great banquet' for his ally the prince of Novgorod-Seversky 'in Moscow'.",
        afterTail: "",
        cue: "FIND",
        answers: ["was found", "is found"],
        keyShow: "was found",
        grammarTag: "Past Simple · пассив",
        explainRu:
          "«Первое упоминание <strong>было найдено</strong> в летописях» → пассив Past Simple от <strong>FIND</strong>: <em>was found</em>.",
        explainOkRu:
          "<em>Reference was found</em> — упоминание не «находит» само, его <strong>обнаружили</strong> в тексте.",
        explainWrongRu:
          "Нужен пассив, не актив «reference found Moscow».",
        wrongIf: [
          {
            includes: "found",
            hintRu:
              "Без <em>was</em> часто неполный пассив → <em>was found many years ago</em>."
          },
          {
            includes: "find",
            hintRu:
              "Present <em>find</em> не сочетается с <em>many years ago</em>."
          },
          {
            includes: "finds",
            hintRu:
              "Упоминание не «находит» — его <strong>нашли</strong> в летописи → пассив."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "This is the traditional date of Moscow's founding, although archaeological evidence showed that a settlement ",
        afterInline: " on the site since Neolithic times.",
        afterTail: "",
        cue: "EXIST",
        answers: [
          "had existed",
          "has existed",
          "'d existed",
          "d existed"
        ],
        keyShow: "had existed",
        grammarTag: "Past Perfect",
        explainRu:
          "«Поселение <strong>существовало</strong> с неолита» — более раннее прошлое относительно <em>showed</em> → <em>had existed</em> + <em>since</em>.",
        explainOkRu:
          "<em>Had existed on the site since Neolithic times</em> — форма от <strong>EXIST</strong> в Past Perfect.",
        explainWrongRu:
          "С <em>since Neolithic times</em> и главным <em>showed</em> (Past) часто нужен Perfect в придаточном.",
        wrongIf: [
          {
            includes: "exist",
            hintRu:
              "Голый <em>exist</em> не передаёт длительность «с неолита» → <em>had existed</em>."
          },
          {
            includes: "existed",
            hintRu:
              "Past Simple возможен в речи, но после <em>showed that</em> и <em>since</em> типичнее <em>had existed</em>."
          },
          {
            includes: "existing",
            hintRu:
              "<em>Settlement existing</em> — не полное сказуемое в <em>that</em>-clause."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "Archaeological work has also revealed the remains of roads and evidence of iron and leather working ",
        afterInline: " from the 11th century.",
        afterTail: "",
        cue: "DATE",
        answers: ["dating"],
        keyShow: "dating",
        grammarTag: "Participle I · определение",
        explainRu:
          "«Свидетельства, <strong>датируемые</strong> XI веком» → <em>dating from the 11th century</em> от <strong>DATE</strong>.",
        explainOkRu:
          "<em>Evidence dating from…</em> — причастный оборот; <em>from</em> уже в тексте после пропуска.",
        explainWrongRu:
          "Нужно причастие «датирующийся / относящийся к», не глагол в Past.",
        wrongIf: [
          {
            includes: "date",
            hintRu:
              "Глагол <em>date</em> после <em>evidence</em> без -ing не строит определение → <em>dating from</em>."
          },
          {
            includes: "dated",
            hintRu:
              "<em>Dated from</em> иногда возможно, но в ключах чаще <em>dating from the 11th century</em>."
          },
          {
            includes: "dates",
            hintRu:
              "<em>Evidence dates from</em> — другая конструкция (два сказуемых); здесь определение к <em>evidence</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "Defense was essential to protect the growing settlement, and in 1156 the first fortifications were built on the relatively high spit of land between the Moscow River and a small tributary, the Neglinnaya. The Neglinnaya now flows through an underground conduit, but part of its course ",
        afterInline: " by a street of the same name.",
        afterTail: "",
        cue: "TRACE",
        answers: ["is traced", "can be traced", "was traced"],
        keyShow: "is traced",
        grammarTag: "Present Simple · пассив",
        explainRu:
          "«Часть русла <strong>прослеживается / обозначена</strong> улицей» → пассив от <strong>TRACE</strong>: <em>is traced by</em>.",
        explainOkRu:
          "<em>Part of its course is traced by a street</em> — улица «повторяет» трассу реки; <em>now</em> в абзаце → Present.",
        explainWrongRu:
          "Нужен пассив «прослеживается», не актив <em>trace / traces</em>.",
        wrongIf: [
          {
            includes: "trace",
            hintRu:
              "Инфинитив/команда не подходит → <em>is traced by a street</em>."
          },
          {
            includes: "traces",
            hintRu:
              "«Улица traces» — актив; курс реки <strong>прослеживают</strong> по улице → пассив."
          },
          {
            includes: "tracing",
            hintRu:
              "<em>Course tracing</em> — не сказуемое; нужен <em>is traced</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> <em>is remembered as</em>, <em>is traced by</em> — типичный <strong>пассив</strong> в энциклопедическом тексте.</p>" +
      "<p><strong>Лайфхак:</strong> перед существительным (<em>… government</em>) часто -ing как прилагательное: <em>ruling</em>, не <em>rule</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
