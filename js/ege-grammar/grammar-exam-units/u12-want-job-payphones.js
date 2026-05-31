/**
 * ЕГЭ Grammar Exam · Unit 12 · I want a job! · No more public phones (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-want-job-payphones",
    unitOrder: 12,
    title: "Unit 12 · I want a job! · Public phones",
    examSection: "§19–24",
    headerTitle: "I want a job! · Public phones",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "A French man tried a new way to get a job. He ",
        afterInline: " his résumé on a billboard next to a busy road.",
        afterTail:
          " It showed the man wearing a Santa Claus hat with a message: \"Trilingual operations manager seeks position in tourism and leisure.\"",
        cue: "PUT",
        answers: ["put"],
        keyShow: "put",
        grammarTag: "Past Simple · PUT",
        plainRu:
          "«Он <strong>разместил</strong> резюме на билборде» — действие в прошлом. У PUT прошедшее тоже <em>put</em> (не меняется).",
        explainRu:
          "В начале текста <em>tried</em> — Past. Дальше: <em>He put his résumé</em> от <strong>PUT</strong>.",
        explainOkRu:
          "<em>Put</em> — прошедшая форма совпадает с основой, но это именно Past Simple.",
        explainWrongRu:
          "Не пиши <em>puts</em> или <em>putting</em> — нужно «разместил» в прошлом.",
        examplesRu: [
          "✓ He <em>put</em> the book on the table. — «положил / поставил».",
          "✓ She <em>put</em> her CV online yesterday. — Past у PUT = put.",
          "✗ He <em>puts</em> his résumé… — Present не сочетается с историей в Past."
        ],
        wrongIf: [
          {
            includes: "puts",
            hintRu:
              "Present <em>puts</em> не подходит после <em>tried</em> → <em>put</em>."
          },
          {
            includes: "putted",
            hintRu:
              "Формы <em>putted</em> не существует → <em>put</em>."
          },
          {
            includes: "putting",
            hintRu:
              "Нужно завершённое действие в прошлом → <em>put</em>, не <em>putting</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "The man ",
        afterInline: " to pay.",
        afterTail:
          " He saved 2,000 euros because the company that owns the billboard decided to give the space for free.",
        cue: "NOT HAVE",
        answers: [
          "did not have",
          "didn't have",
          "didnt have"
        ],
        keyShow: "didn't have",
        grammarTag: "Past Simple · отрицание",
        plainRu:
          "«Ему <strong>не пришлось</strong> платить» → <em>did not have to pay</em>. База NOT HAVE + Past.",
        explainRu:
          "Конструкция «не нужно было» = <em>didn't have to</em>. Оба слова из задания: <strong>NOT</strong> + <strong>HAVE</strong> в Past.",
        explainOkRu:
          "<em>Didn't have to pay</em> — платить не потребовалось; место дали бесплатно.",
        explainWrongRu:
          "Голое <em>not have</em> без <em>did</em> неполное; Present тоже не подходит.",
        examplesRu: [
          "✓ I <em>didn't have to</em> wait long. — «мне не пришлось долго ждать».",
          "✓ She <em>did not have to</em> pay. — отрицание в Past.",
          "✗ He <em>not have</em> to pay. — без <em>did</em> ошибка."
        ],
        wrongIf: [
          {
            includes: "not have",
            hintRu:
              "Без <em>did</em> отрицание неполное → <em>didn't have</em>."
          },
          {
            includes: "has not",
            hintRu:
              "Present не подходит: история про прошлое (<em>saved</em>)."
          },
          {
            includes: "had",
            hintRu:
              "Одного <em>had</em> без <em>not</em> — «пришлось платить», а нужно наоборот."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before:
          "About 70,000 people a day could see the CV from their car. This idea worked. A holiday resort gave ",
        afterInline: " a job.",
        afterTail:
          " He started it ten days after putting his résumé on the billboard.",
        cue: "HE",
        answers: ["him"],
        keyShow: "him",
        grammarTag: "Местоимение · объект",
        plainRu:
          "«Курорт дал <strong>ему</strong> работу». После <em>gave</em> нужен объект — <em>him</em>, не <em>he</em>.",
        explainRu:
          "Как «дали <strong>мне</strong>» = gave me, здесь «дали <strong>ему</strong>» = gave him от <strong>HE</strong>.",
        explainOkRu:
          "<em>Gave him a job</em> — правильный порядок: кому (him) + что (a job).",
        explainWrongRu:
          "<em>He</em> — «он» как подлежащее; после <em>gave</em> так не ставят.",
        examplesRu: [
          "✓ They gave <em>him</em> a chance. — «дали ему шанс».",
          "✓ She told <em>me</em> the news. — не <em>I</em>, а <em>me</em>.",
          "✗ The resort gave <em>he</em> a job. — ошибка → <em>him</em>."
        ],
        wrongIf: [
          {
            includes: "he",
            hintRu:
              "<em>He</em> = «он» в начале фразы; после <em>gave</em> → <em>him</em>."
          },
          {
            includes: "his",
            hintRu:
              "<em>His</em> = «его» (принадлежность); нужно «ему» → <em>him</em>."
          },
          {
            includes: "himself",
            hintRu:
              "«Себе» (<em>himself</em>) здесь лишнее → просто <em>him</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "The end is coming for New York's public payphones. New York City officials said workers ",
        afterInline: " all public payphones from the city's streets soon.",
        afterTail:
          " Payphones used to be everywhere in the city — on every street corner and in every park and public place.",
        cue: "REMOVE",
        answers: ["would remove", "will remove"],
        keyShow: "would remove",
        grammarTag: "Reported Speech · Future",
        plainRu:
          "«Чиновники сказали, что рабочие <strong>уберут</strong>…» — после <em>said</em> будущее → <em>would remove</em>.",
        explainRu:
          "После <em>officials said</em> будущее часто сдвигается: <em>will remove</em> → <em>would remove</em> от <strong>REMOVE</strong>.",
        explainOkRu:
          "<em>Would remove</em> = «убрали бы / уберут» в косвенной речи; <em>soon</em> — скоро.",
        explainWrongRu:
          "Голый <em>remove</em> или Present не передают «сказали о будущем».",
        examplesRu: [
          "✓ They said they <em>would remove</em> the phones. — will → would.",
          "✓ Officials said workers <em>would remove</em>… — типичная конструкция.",
          "✗ …said workers <em>remove</em> soon. — не хватает формы будущего."
        ],
        wrongIf: [
          {
            includes: "remove",
            hintRu:
              "Одного <em>remove</em> мало → <em>would remove</em> / <em>will remove</em>."
          },
          {
            includes: "removed",
            hintRu:
              "Past <em>removed</em> = «уже убрали»; речь о <em>soon</em> (скоро)."
          },
          {
            includes: "removes",
            hintRu:
              "Present после <em>said workers</em> не передаёт будущее."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "Many New Yorkers probably won't even notice the phones are going. Most younger people ",
        afterInline: " one since birth.",
        afterTail: " They may even have to read the instructions to use a phone.",
        cue: "NOT SEE",
        answers: [
          "have not seen",
          "haven't seen",
          "havent seen"
        ],
        keyShow: "haven't seen",
        grammarTag: "Present Perfect · отрицание",
        plainRu:
          "«С рождения <strong>не видели</strong> ни одного» → <em>have not seen</em>. NOT + SEE в Perfect.",
        explainRu:
          "<em>Since birth</em> («с рождения») тянет Perfect: <em>have not seen one</em> — ни одного таксофона.",
        explainOkRu:
          "Perfect показывает: не видели с самого начала и по сей день.",
        explainWrongRu:
          "Past Simple или голое <em>not see</em> не передают «с рождения до сейчас».",
        examplesRu: [
          "✓ I <em>haven't seen</em> him since Monday. — «не видел с понедельника».",
          "✓ They <em>have not seen</em> snow before. — опыт «никогда».",
          "✗ …people <em>did not see</em> one since birth. — <em>since</em> → Perfect."
        ],
        wrongIf: [
          {
            includes: "not see",
            hintRu:
              "Без <em>have</em> отрицание неполное → <em>haven't seen</em>."
          },
          {
            includes: "did not see",
            hintRu:
              "Past + <em>since birth</em> обычно не то → Perfect <em>haven't seen</em>."
          },
          {
            includes: "don't see",
            hintRu:
              "Present не передаёт «с рождения и до сих пор»."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "Modern technology means the public phones aren't needed. Additionally, they take up sidewalk space that could ",
        afterInline:
          " serve people with disabilities and families with children in strollers.",
        afterTail: "",
        cue: "GOOD",
        answers: ["better"],
        keyShow: "better",
        grammarTag: "Сравнительная степень",
        plainRu:
          "«Могло бы <strong>лучше</strong> служить людям» → сравнительная от GOOD: <em>better</em> перед <em>serve</em>.",
        explainRu:
          "После <em>could</em> нужно наречие «лучше»: <em>could better serve</em> — место использовалось бы эффективнее.",
        explainOkRu:
          "<em>Better</em> — не «good serve», а «<strong>лучше</strong> обслуживать».",
        explainWrongRu:
          "GOOD само по себе перед глаголом не ставят — нужна форма <em>better</em>.",
        examplesRu: [
          "✓ This space could <em>better serve</em> the community. — «лучше служить».",
          "✓ She is <em>better</em> at maths than me. — сравнительная от good.",
          "✗ …could <em>good</em> serve people. — прилагательное не подходит перед глаголом."
        ],
        wrongIf: [
          {
            includes: "good",
            hintRu:
              "GOOD → сравнительная <em>better</em> перед <em>serve</em>."
          },
          {
            includes: "best",
            hintRu:
              "<em>Best</em> — превосходная; здесь «лучше обслуживать» → <em>better</em>."
          },
          {
            includes: "well",
            hintRu:
              "<em>Well</em> возможно в речи, но от GOOD в ключе → <em>better</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Текст 1:</strong> Past <em>put</em>; <em>didn't have to</em>; <em>gave him</em>.</p>" +
      "<p><strong>Текст 2:</strong> после <em>said</em> → <em>would remove</em>; <em>since birth</em> → Perfect; <em>could better serve</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
