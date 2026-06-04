/**
 * ЕГЭ Listening Matching · Unit 10 · Exams (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-exams",
    unitOrder: 10,
    title: "Unit 10 · Exams",
    examSection: "§1 · Задание 1",
    headerTitle: "Exams",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/10/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2010%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> — exams suit me personally, but not everyone → №4.</li>" +
      "<li><strong>B</strong> — single test stress + memorisation, not real learning → №5.</li>" +
      "<li><strong>C</strong> — larger number of smaller tests through the year → №1.</li>" +
      "<li><strong>D</strong> — memory is useful, medicine, applying knowledge → №7.</li>" +
      "<li><strong>E</strong> — exams are the same for everyone, avoid teacher bias → №2.</li>" +
      "<li><strong>F</strong> — exams prepare for difficult situations but younger kids should not take many → №6.</li>" +
      "<li><strong>№3</strong> лишнее: никто не предлагает fully replace exams by other things.</li>" +
      "</ul>",
    statements: [
      { num: 1, text: "Exams should be taken more often throughout the school year." },
      { num: 2, text: "Exams make assessment of your knowledge fairer." },
      { num: 3, text: "Exams are stressful and should be replaced by other things." },
      { num: 4, text: "Exams suit me quite well but they are not for everyone." },
      { num: 5, text: "Exams stimulate memorisation without much thought." },
      { num: 6, text: "Exams make you ready for life but they should be limited." },
      { num: 7, text: "Exams can develop your memory in a good way." }
    ],
    extraStatementNum: 3,
    /** A→4, B→5, C→1, D→7, E→2, F→6; лишнее — 3 */
    key: [4, 5, 1, 7, 2, 6],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "really good for me personally", ru: "лично мне очень подходят", tip: "A · №4" },
      { en: "they're not for everyone", ru: "они подходят не всем", tip: "A · №4" },
      { en: "single test", ru: "один единственный тест", tip: "B · №5" },
      { en: "rote memorisation of facts", ru: "механическое заучивание фактов", tip: "B · №5" },
      { en: "a larger number of smaller tests", ru: "больше небольших тестов", tip: "C · №1" },
      { en: "instead of 2 exams of terror", ru: "вместо двух экзаменов ужаса", tip: "C · №1" },
      { en: "memory is extremely useful", ru: "память чрезвычайно полезна", tip: "D · №7" },
      { en: "apply your knowledge", ru: "применять знания", tip: "D · №7" },
      { en: "Exams are the same for everyone", ru: "экзамены одинаковы для всех", tip: "E · №2" },
      { en: "avoid a lot of the bias", ru: "избежать сильной предвзятости", tip: "E · №2" },
      { en: "prepare yourself correctly for difficult situations", ru: "правильно готовиться к трудным ситуациям", tip: "F · №6" },
      { en: "kids below the age of 12", ru: "дети младше 12 лет", tip: "F · limitation" }
    ],
    tapPhrases: [
      { en: "learning style", ru: "стиль обучения" },
      { en: "academic interests", ru: "академические интересы" },
      { en: "contribute to your final grade", ru: "влияют на итоговую оценку" },
      { en: "negative connotations", ru: "негативные ассоциации" },
      { en: "question 'Will this be on the test?'", ru: "вопрос «Это будет на тесте?»" },
      { en: "better understanding and retention", ru: "лучшее понимание и запоминание" },
      { en: "concepts need to be taught better", ru: "какие темы нужно объяснить лучше" },
      { en: "brain dumping", ru: "механическое «вываливание» знаний" },
      { en: "bias", ru: "предвзятость" },
      { en: "build a schedule", ru: "составить расписание" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        fullText:
          "My learning style and my academic interests make exams really good for me personally. I enjoy taking them, and have done well for a variety of reasons. But they're not for everyone, just like major studies in general aren't for everyone. Plus, exams themselves aren't bad. It's the pressure they put on you to study and do well because they'll contribute to your final grade. And that pressure contributes to the negative connotations associated with exams.",
        phrases: [
          { en: "learning style and academic interests", ru: "стиль обучения и академические интересы" },
          { en: "really good for me personally", ru: "лично мне очень подходят", tip: "№4" },
          { en: "not for everyone", ru: "не для всех", tip: "№4" },
          { en: "pressure they put on you", ru: "давление, которое они создают" },
          { en: "contribute to your final grade", ru: "влияют на итоговую оценку" },
          { en: "negative connotations", ru: "негативные ассоциации" }
        ],
        chunks: [
          { text: "My learning style and my academic interests make exams really good for me personally. I enjoy taking them, and have done well for a variety of reasons.", showText: true },
          { text: "But they're not for everyone, just like major studies in general aren't for everyone.", showText: true },
          { text: "Plus, exams themselves aren't bad. It's the pressure they put on you to study and do well because they'll contribute to your final grade.", showText: true },
          { text: "And that pressure contributes to the negative connotations associated with exams.", showText: false }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        fullText:
          "Obviously, exams can be very stressful, especially if most of your grade depends on a single test. And I think that is where exams have the most negative effect. Most classes set up in that manner will have the question \"Will this be on the test?\" asked a lot. Everything for which the answer is \"no\" will be immediately forgotten, and the rest will be memorised, because it will be on the test. For sure, that doesn't encourage learning the material, but simply rote memorisation of facts.",
        phrases: [
          { en: "very stressful", ru: "очень стрессовые" },
          { en: "single test", ru: "один тест", tip: "№5" },
          { en: "negative effect", ru: "негативный эффект" },
          { en: "Will this be on the test?", ru: "Это будет на тесте?" },
          { en: "immediately forgotten", ru: "сразу забывается" },
          { en: "simply rote memorisation of facts", ru: "просто механическое заучивание фактов", tip: "№5" }
        ],
        chunks: [
          { text: "Obviously, exams can be very stressful, especially if most of your grade depends on a single test. And I think that is where exams have the most negative effect.", showText: true },
          { text: "Most classes set up in that manner will have the question \"Will this be on the test?\" asked a lot.", showText: true },
          { text: "Everything for which the answer is \"no\" will be immediately forgotten, and the rest will be memorised, because it will be on the test.", showText: true },
          { text: "For sure, that doesn't encourage learning the material, but simply rote memorisation of facts.", showText: false }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        fullText:
          "If you have exams that encourage learning the application of what is taught to problems at hand, there will probably be better understanding and retention of the material. This works better with a larger number of smaller tests to check a student's skills, instead of 2 exams of terror. In this manner, the exams provide a benefit, as the teacher finds out what concepts need to be taught better, and students are really forced to spend time understanding the material before the test.",
        phrases: [
          { en: "application of what is taught", ru: "применение изученного" },
          { en: "problems at hand", ru: "конкретные задачи" },
          { en: "better understanding and retention", ru: "лучшее понимание и запоминание" },
          { en: "larger number of smaller tests", ru: "большее число небольших тестов", tip: "№1" },
          { en: "check a student's skills", ru: "проверять навыки ученика" },
          { en: "instead of 2 exams of terror", ru: "вместо двух экзаменов ужаса", tip: "№1" },
          { en: "teacher finds out", ru: "учитель выясняет" },
          { en: "spend time understanding", ru: "тратить время на понимание" }
        ],
        chunks: [
          { text: "If you have exams that encourage learning the application of what is taught to problems at hand, there will probably be better understanding and retention of the material.", showText: true },
          { text: "This works better with a larger number of smaller tests to check a student's skills, instead of 2 exams of terror.", showText: true },
          { text: "In this manner, the exams provide a benefit, as the teacher finds out what concepts need to be taught better, and students are really forced to spend time understanding the material before the test.", showText: false }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        fullText:
          "Those who are against exams say that exams only require a lot of memorising. First of all, memory is extremely useful for a lot of applications, and in fields such as medicine the ability to remember lots of information is key. Secondly, you have to apply your knowledge in a lot of exams — it's not just brain dumping. For example in Math, to truly be able to solve the trickier questions you have to actually understand the mathematics behind them in the first place.",
        phrases: [
          { en: "against exams", ru: "против экзаменов" },
          { en: "only require a lot of memorising", ru: "требуют только много заучивания" },
          { en: "memory is extremely useful", ru: "память чрезвычайно полезна", tip: "№7" },
          { en: "ability to remember lots of information", ru: "способность запоминать много информации", tip: "№7" },
          { en: "apply your knowledge", ru: "применять знания" },
          { en: "not just brain dumping", ru: "не просто механическое «вываливание» знаний" },
          { en: "trickier questions", ru: "более сложные вопросы" },
          { en: "understand the mathematics behind them", ru: "понимать стоящую за ними математику" }
        ],
        chunks: [
          { text: "Those who are against exams say that exams only require a lot of memorising.", showText: true },
          { text: "First of all, memory is extremely useful for a lot of applications, and in fields such as medicine the ability to remember lots of information is key.", showText: true },
          { text: "Secondly, you have to apply your knowledge in a lot of exams — it's not just brain dumping.", showText: true },
          { text: "For example in Math, to truly be able to solve the trickier questions you have to actually understand the mathematics behind them in the first place.", showText: false }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        fullText:
          "The main reason that I think exams are better than, say, a teacher just saying how good they think you are is bias. In my school, I know many kids who teachers would praise and tell them how gifted they are. But they weren't really that smart. Exams are the same for everyone who takes them. In some exams, like English, you're going to have to write something, and exams allow you to show what you know. In subjects like Math, exams help avoid a lot of the bias that teachers have for certain students.",
        phrases: [
          { en: "teacher just saying how good", ru: "учитель просто говорит, насколько ты хорош" },
          { en: "bias", ru: "предвзятость", tip: "№2" },
          { en: "teachers would praise", ru: "учителя хвалили" },
          { en: "they weren't really that smart", ru: "они не были такими уж умными" },
          { en: "same for everyone", ru: "одинаковые для всех", tip: "№2" },
          { en: "show what you know", ru: "показать, что ты знаешь" },
          { en: "avoid a lot of the bias", ru: "избежать сильной предвзятости", tip: "№2" }
        ],
        chunks: [
          { text: "The main reason that I think exams are better than, say, a teacher just saying how good they think you are is bias.", showText: true },
          { text: "In my school, I know many kids who teachers would praise and tell them how gifted they are. But they weren't really that smart.", showText: true },
          { text: "Exams are the same for everyone who takes them.", showText: true },
          { text: "In some exams, like English, you're going to have to write something, and exams allow you to show what you know. In subjects like Math, exams help avoid a lot of the bias that teachers have for certain students.", showText: false }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        fullText:
          "Many think that exams are too stressful for kids at a younger age. I do agree with this to an extent, as I think that preparing for exams is stressful, however, lots of things in life are stressful. Preparing for a job interview? That's stressful. Exams teach you how to build a schedule to prepare yourself correctly for difficult situations, which is useful. Yet, I don't believe kids below the age of 12 should be taking many exams, as I think it is a little too stressful for them.",
        phrases: [
          { en: "too stressful for kids", ru: "слишком стрессовые для детей" },
          { en: "agree with this to an extent", ru: "частично с этим согласен" },
          { en: "lots of things in life are stressful", ru: "многое в жизни стрессово" },
          { en: "job interview", ru: "собеседование" },
          { en: "build a schedule", ru: "составить расписание", tip: "№6" },
          { en: "prepare yourself correctly", ru: "правильно подготовиться", tip: "№6" },
          { en: "difficult situations", ru: "трудные ситуации", tip: "№6" },
          { en: "kids below the age of 12", ru: "дети младше 12", tip: "limited" }
        ],
        chunks: [
          { text: "Many think that exams are too stressful for kids at a younger age.", showText: true },
          { text: "I do agree with this to an extent, as I think that preparing for exams is stressful, however, lots of things in life are stressful. Preparing for a job interview? That's stressful.", showText: true },
          { text: "Exams teach you how to build a schedule to prepare yourself correctly for difficult situations, which is useful.", showText: true },
          { text: "Yet, I don't believe kids below the age of 12 should be taking many exams, as I think it is a little too stressful for them.", showText: false }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 4,
        trapNums: [3],
        keyLineRu: "Exams suit A personally, but not everyone.",
        evidencePromptRu: "<strong>A.</strong> Найдите personally + not for everyone.",
        promptRu: "<strong>A.</strong> Зелёным — личная совместимость с exams.",
        segments: [
          { kind: "hit", sol: "e", text: "really good for me personally", explainRu: "Подходит мне → №4." },
          { kind: "hit", sol: "e", text: "they're not for everyone", explainRu: "Но не для всех → №4." }
        ]
      },
      {
        speaker: "B",
        keyNum: 5,
        trapNums: [3],
        keyLineRu: "Single test leads to rote memorisation, not real learning.",
        evidencePromptRu: "<strong>B.</strong> Найдите memorisation without thought.",
        promptRu: "<strong>B.</strong> Зелёным — memorisation.",
        segments: [
          { kind: "hit", sol: "e", text: "the rest will be memorised", explainRu: "Заучивание." },
          { kind: "hit", sol: "e", text: "simply rote memorisation of facts", explainRu: "Механическое заучивание → №5." }
        ]
      },
      {
        speaker: "C",
        keyNum: 1,
        trapNums: [3],
        keyLineRu: "A larger number of smaller tests works better.",
        evidencePromptRu: "<strong>C.</strong> Найдите more often through the year.",
        promptRu: "<strong>C.</strong> Зелёным — smaller tests.",
        segments: [
          { kind: "hit", sol: "e", text: "a larger number of smaller tests", explainRu: "Больше небольших тестов → №1." },
          { kind: "hit", sol: "e", text: "instead of 2 exams of terror", explainRu: "Не два больших экзамена → №1." }
        ]
      },
      {
        speaker: "D",
        keyNum: 7,
        trapNums: [5],
        keyLineRu: "Memory is useful and knowledge is applied.",
        evidencePromptRu: "<strong>D.</strong> Найдите positive view of memory.",
        promptRu: "<strong>D.</strong> Зелёным — memory useful.",
        segments: [
          { kind: "hit", sol: "e", text: "memory is extremely useful", explainRu: "Память полезна → №7." },
          { kind: "hit", sol: "e", text: "ability to remember lots of information is key", explainRu: "Память как ключевой навык → №7." },
          { kind: "hit", sol: "d", text: "not just brain dumping", trapNum: 5, explainRu: "Наоборот: не просто заучивание." }
        ]
      },
      {
        speaker: "E",
        keyNum: 2,
        trapNums: [],
        keyLineRu: "Same for everyone; helps avoid bias.",
        evidencePromptRu: "<strong>E.</strong> Найдите fairness / bias.",
        promptRu: "<strong>E.</strong> Зелёным — fairness.",
        segments: [
          { kind: "hit", sol: "e", text: "Exams are the same for everyone", explainRu: "Одинаково для всех → fairer → №2." },
          { kind: "hit", sol: "e", text: "avoid a lot of the bias", explainRu: "Меньше предвзятости → №2." }
        ]
      },
      {
        speaker: "F",
        keyNum: 6,
        trapNums: [3],
        keyLineRu: "Exams prepare for difficult situations, but should be limited for kids.",
        evidencePromptRu: "<strong>F.</strong> Найдите benefit + limitation.",
        promptRu: "<strong>F.</strong> Зелёным — prepare for life + limited.",
        segments: [
          { kind: "hit", sol: "e", text: "prepare yourself correctly for difficult situations", explainRu: "Готовят к жизни → №6." },
          { kind: "hit", sol: "e", text: "kids below the age of 12 should be taking many exams", explainRu: "Нужно ограничивать для младших → №6." }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
