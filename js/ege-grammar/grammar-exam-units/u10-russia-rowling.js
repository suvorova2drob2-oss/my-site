/**
 * ЕГЭ Grammar Exam · Unit 10 · Russia · J. K. Rowling (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-russia-rowling",
    unitOrder: 10,
    title: "Unit 10 · Russia · J. K. Rowling",
    examSection: "§19–24",
    headerTitle: "Russia",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Russia is one of the countries with the largest numbers of ethnic groups in Europe. 185 ethnic groups or nationalities have varied population from millions of people to just ten thousand ",
        afterInline: " the smallest group.",
        afterTail: "",
        cue: "FORM",
        answers: ["forming", "who form", "that form"],
        keyShow: "forming",
        grammarTag: "Participle I · определение",
        explainRu:
          "«Всего около десяти тысяч (людей), <strong>образующих</strong> самую маленькую группу» → <em>forming the smallest group</em> от <strong>FORM</strong>.",
        explainOkRu:
          "<em>Forming</em> поясняет, какую роль играют эти «ten thousand» — они <strong>составляют</strong> наименьшую группу.",
        explainWrongRu:
          "Нужна форма «составляющие / образующие», а не существительное <em>form</em>.",
        wrongIf: [
          {
            includes: "form",
            hintRu:
              "Голый <em>form</em> (глагол/сущ.) не связывает «ten thousand» с «the smallest group» → <em>forming</em>."
          },
          {
            includes: "formed",
            hintRu:
              "Past Participle «сформированные» — другой оттенок; здесь «которые составляют» → <em>forming</em>."
          },
          {
            includes: "forms",
            hintRu:
              "<em>Ten thousand forms</em> — «десять тысяч формирует»; число и смысл не сходятся."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "In Russia, there are more than 100 languages ",
        afterInline:
          " with Russian being the official state language. Some of the largest ethnic groups in Russia include Russians, Tatars, Ukrainians, and Bashkirs.",
        afterTail: "",
        cue: "SPEAK",
        answers: ["spoken", "are spoken", "being spoken"],
        keyShow: "spoken",
        grammarTag: "Participle II · пассив",
        explainRu:
          "«Более 100 языков <strong>на которых говорят</strong>» → Past Participle от <strong>SPEAK</strong>: <em>languages spoken</em>.",
        explainOkRu:
          "<em>Spoken</em> — пассивный смысл; языки «говорят», а не «языки speak» сами.",
        explainWrongRu:
          "Нужен пассив «на которых говорят», не актив <em>speak / speaking</em>.",
        wrongIf: [
          {
            includes: "speak",
            hintRu:
              "«Languages speak» — языки не «говорят» сами → <em>spoken</em> / <em>are spoken</em>."
          },
          {
            includes: "speaking",
            hintRu:
              "<em>Speaking languages</em> — «говорящие языки»; нужен пассив <em>spoken</em>."
          },
          {
            includes: "spoke",
            hintRu:
              "Past Active не описывает «языки, на которых говорят» в общем факте."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 2,
        before:
          "J. K. Rowling. J.K. Rowling is the pen name she uses as a writer. The J is for Joanne, her real first name, but she prefers ",
        afterInline: " Jo.",
        afterTail:
          "Apparently, people only call her Joanne when they're angry with her.",
        cue: "CALL",
        answers: ["to be called", "being called"],
        keyShow: "to be called",
        grammarTag: "Infinitive · пассив",
        explainRu:
          "«Она предпочитает, <strong>чтобы её называли</strong> Jo» → <em>prefers to be called</em> от <strong>CALL</strong>.",
        explainOkRu:
          "<em>To be called Jo</em> — пассив: её называют, она не «calls Jo» сама.",
        explainWrongRu:
          "После <em>prefers</em> нужен пассив «называть её», не <em>to call</em>.",
        wrongIf: [
          {
            includes: "to call",
            hintRu:
              "<em>Prefers to call Jo</em> — «предпочитает звать Jo»; нужно «<strong>её</strong> называют» → <em>to be called</em>."
          },
          {
            includes: "called",
            hintRu:
              "Одного <em>called</em> без <em>to be</em> после <em>prefers</em> не хватает."
          },
          {
            includes: "calls",
            hintRu:
              "Present <em>calls</em> не стоит после <em>she prefers</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "The K is made up. Her publisher asked her to write using a name with two initials, but she ",
        afterInline: " a middle name.",
        afterTail: "",
        cue: "NOT HAVE",
        answers: [
          "did not have",
          "didn't have",
          "didnt have"
        ],
        keyShow: "didn't have",
        grammarTag: "Отрицание · Past Simple",
        explainRu:
          "Базовые слова <strong>NOT HAVE</strong> → Past Simple отрицание: <em>did not have a middle name</em>.",
        explainOkRu:
          "<em>Didn't have</em> — у неё не было второго имени для инициала K; оба слова из задания использованы.",
        explainWrongRu:
          "Нужно «<strong>не имела</strong>» в прошлом, не Present или голое <em>not have</em>.",
        wrongIf: [
          {
            includes: "not have",
            hintRu:
              "Без <em>did</em> отрицание неполное → <em>didn't have</em>."
          },
          {
            includes: "has not",
            hintRu:
              "Present не подходит: история про издателя в прошлом."
          },
          {
            includes: "have not",
            hintRu:
              "Нужен Past: <em>did not have</em>, не <em>have not</em>."
          },
          {
            includes: "had",
            hintRu:
              "Одного <em>had</em> без <em>not</em> — утверждение «имела», а нужно отрицание."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "Jo did a few different things before she struck upon the idea of writing books for children. For some time, she worked as a teacher of English in Portugal. The idea for the Harry Potter novels came from nowhere while she ",
        afterInline:
          " on a train to London. She said, 'The characters and situations came flooding into my head.'",
        afterTail: "",
        cue: "GO",
        answers: ["was going", "went"],
        keyShow: "was going",
        grammarTag: "Past Continuous",
        explainRu:
          "«Пока она <strong>ехала</strong> в поезде» → Past Continuous от <strong>GO</strong>: <em>was going on a train</em>.",
        explainOkRu:
          "<em>While she was going</em> — длительное действие в момент «идея пришла»; <em>on a train</em> уже в тексте.",
        explainWrongRu:
          "После <em>while</em> часто длительное прошлое; одного <em>go</em> мало.",
        wrongIf: [
          {
            includes: "go",
            hintRu:
              "Present/инфинитив после <em>while she</em> → <em>was going</em>."
          },
          {
            includes: "goes",
            hintRu:
              "Present не сочетается с историей в Past (<em>worked</em>, <em>came</em>)."
          },
          {
            includes: "gone",
            hintRu:
              "Participle III без <em>had/has</em> не сказуемое здесь."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "Seven Potter novels later Rowling became one of the richest women in the world. In fact, her last four books broke records for the ",
        afterInline: " sellers in literary history.",
        afterTail: "",
        cue: "FAST",
        answers: ["fastest"],
        keyShow: "fastest",
        grammarTag: "Превосходная степень",
        explainRu:
          "«Рекорды <strong>самых быстрых</strong> продаж» → превосходная от <strong>FAST</strong>: <em>the fastest sellers</em>.",
        explainOkRu:
          "<em>Fastest</em> перед <em>sellers</em> с <em>the</em> — «самые быстро продаваемые».",
        explainWrongRu:
          "После <em>the</em> и перед существительным нужна превосходная степень.",
        wrongIf: [
          {
            includes: "fast",
            hintRu:
              "Без -est после <em>the … sellers</em> → <em>fastest</em>."
          },
          {
            includes: "faster",
            hintRu:
              "<em>Faster</em> — сравнительная; здесь «рекорды <strong>самых</strong>…» → <em>fastest</em>."
          },
          {
            includes: "fastly",
            hintRu:
              "Неверное наречие; нужно прилагательное <em>fastest</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> <em>prefers / asked</em> + пассив → <strong>to be called</strong>; <em>while</em> + Past → <strong>was doing</strong>.</p>" +
      "<p><strong>Лайфхак:</strong> <em>languages spoken</em> и <em>the fastest sellers</em> — частые «склеенные» конструкции в ключах.</p>"
  });
})(typeof window !== "undefined" ? window : this);
