/**
 * ЕГЭ Listening MC · Unit 7 · Geoffrey Caedmon · arts education.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-geoffrey-caedmon",
    unitOrder: 7,
    title: "Unit 7 · Geoffrey Caedmon",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Sandy Briar & Geoffrey Caedmon · theatre and arts education",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/7/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%207%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью об arts education</strong>. В заданиях <strong>3-9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Ловушки варианта 7:</strong></p>" +
      "<ul>" +
      "<li><strong>3:</strong> Monday after a weekend break + Tuesday/Thursday/Friday plan = программа идёт <strong>по будням</strong>, не every day.</li>" +
      "<li><strong>6:</strong> literature knowledge и broader world названы прямо; <em>inner world</em> как benefit не формулируется.</li>" +
      "<li><strong>7:</strong> 79% относится к <em>Romeo's friends</em>, а для Chatsky after reading the book — <strong>65%</strong>.</li>" +
      "<li><strong>9:</strong> Geoffrey говорит о long-run effect on <em>every subject</em>, то есть влияние шире arts itself.</li>" +
      "</ul>",

    questions: [
      {
        examNum: 3,
        prompt: "How often does the program run?",
        key: 2,
        choices: [
          { num: 1, text: "Every day." },
          { num: 2, text: "On weekdays." },
          { num: 3, text: "On weekends." }
        ],
        explainRu:
          "Sandy: <em>We came back on Monday, after our usual break for weekends</em>; потом перечисляет Tuesday, Wednesday, Thursday, Friday. Значит, программа идёт по будням.",
        distractorWrongRu: {
          1: "Есть usual break for weekends, значит не every day.",
          3: "Наоборот: weekends — это перерыв."
        }
      },
      {
        examNum: 4,
        prompt: "What do we learn about Geoffrey Caedmon at the beginning of the interview?",
        key: 1,
        choices: [
          { num: 1, text: "He is a researcher." },
          { num: 2, text: "He is a famous actor." },
          { num: 3, text: "He is a film director." }
        ],
        explainRu:
          "<em>I work for the University doing research</em> — Geoffrey researcher, not actor/director.",
        distractorWrongRu: {
          2: "Presenter прямо говорит: Geoffrey neither a film director, nor an actor.",
          3: "Film director тоже прямо отрицается."
        }
      },
      {
        examNum: 5,
        prompt: "Geoffrey believes that cancelling trips to the theatre...",
        key: 3,
        choices: [
          { num: 1, text: "helps to see it fully." },
          { num: 2, text: "is beneficial for students." },
          { num: 3, text: "has negative consequences." }
        ],
        explainRu:
          "He says it is <em>a step in the wrong direction</em>; schools lose important educational benefits — clearly negative consequences.",
        distractorWrongRu: {
          1: "Про «see it fully» ничего нет.",
          2: "Наоборот: отмена theatre trips вредна."
        }
      },
      {
        examNum: 6,
        prompt: "Which of the following is NOT mentioned as a benefit of seeing live theatre?",
        key: 2,
        choices: [
          { num: 1, text: "Increased literary knowledge." },
          { num: 2, text: "Ability to recognize their inner world." },
          { num: 3, text: "Higher understanding of the world around them." }
        ],
        explainRu:
          "Mentioned: <em>improves students' knowledge of literature</em> and theatre opens <em>a window to a broader world</em>. Про ability to recognize their inner world так не говорится.",
        distractorWrongRu: {
          1: "Knowledge of literature сказано прямо.",
          3: "Broader world / different perspectives — сказано прямо."
        }
      },
      {
        examNum: 7,
        prompt: "How many students could justify the actions of Chatsky after reading the book?",
        key: 1,
        choices: [
          { num: 1, text: "65%" },
          { num: 2, text: "79%" },
          { num: 3, text: "83%" }
        ],
        explainRu:
          "For <em>Woe from Wit</em>, <em>83%</em> could justify actions after seeing the play, compared to <em>65%</em> who read the book.",
        distractorWrongRu: {
          2: "79% относится к Romeo's friends, not Chatsky.",
          3: "83% — after theatre performance, not after reading."
        }
      },
      {
        examNum: 8,
        prompt: "People react differently to movies and live plays because...",
        key: 1,
        choices: [
          { num: 1, text: "in-person experience makes emotions stronger." },
          { num: 2, text: "actors perform differently on stage and on a screen." },
          { num: 3, text: "emotions are developed through personal connections." }
        ],
        explainRu:
          "Geoffrey: <em>being present in person can lead to stronger emotional connections</em> — that is the reason.",
        distractorWrongRu: {
          2: "Про разницу в acting style stage/screen он так не говорит.",
          3: "Personal connections are the result, not the stated cause."
        }
      },
      {
        examNum: 9,
        prompt: "According to Geoffrey, what is the long-lasting effect of arts education on students?",
        key: 3,
        choices: [
          { num: 1, text: "It inspires them to study more arts." },
          { num: 2, text: "It develops their logical thinking." },
          { num: 3, text: "It improves their academic results." }
        ],
        explainRu:
          "He says arts education develops creative thinking and, <em>in the long run, impacts every subject students are involved in</em>. Из вариантов это ближе всего к улучшению результатов в учёбе в целом.",
        distractorWrongRu: {
          1: "Речь шире, чем только more arts.",
          2: "Он говорит о creative thinking, not logical thinking."
        }
      }
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Hello, everybody! My name is Sandy Briar. Welcome to our regular program about arts and literature. We came back on Monday, after our usual break for weekends, to talk about what should be done if you wish to be an orchestra conductor. On Tuesday, we discussed the release of the Dolly the Beast book. Thursday and Friday will be devoted to museums and art galleries, but today, Wednesday, March 19th, we dive into theatre with our expert, Geoffrey Caedmon. Hello, Geoffrey."
          },
          {
            speaker: "Geoffrey Caedmon",
            text: "Hi, Sandy. I'm pleased to be here today."
          },
          {
            speaker: "Presenter",
            text:
              "The pleasure is mine, Geoffrey. I should admit that Geoffrey is neither a film director, nor an actor. You might wonder then what he is doing in the studio today. Well, let's ask Geoffrey. So, Geoffrey, who are you?"
          },
          {
            speaker: "Geoffrey Caedmon",
            text:
              "You're right, I'm none of those, even though I used to play on stage at school. I work for the University doing research on various issues connected with education and arts."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "While preparing for the interview, I found out that schools nowadays are reducing their arts budgets and cancelling trips to theatres. Does this have a positive or negative influence on students?"
          },
          {
            speaker: "Geoffrey Caedmon",
            text:
              "Sandy, before going into details, I wanted to remind those of our listeners who didn't have a chance to go to the theatre with their school class, that it used to be a traditional school practice some 10 years ago. Not only was it a chance to take a break from school and have some fun, but it also had many additional educational benefits. So, I'd say that this is indeed a step in the wrong direction, as investing time into the arts has demonstrated its importance in developing well-rounded learners."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text: "So, what are the benefits of taking students to the theatre?"
          },
          {
            speaker: "Geoffrey Caedmon",
            text:
              "Research suggests that it improves students' knowledge of literature, increases tolerance and empathy, and develops students' emotional intelligence. Theatre acts as a window to a broader world by showing them different perspectives and experiences."
          },
          {
            speaker: "Presenter",
            text: "But isn't watching a movie the same?"
          },
          {
            speaker: "Geoffrey Caedmon",
            text:
              "It may be easier and more cost effective to have students watch the movie version of a play - however it does not have the same effects. It turned out that reading and watching movies of Romeo and Juliet by Shakespeare, and Woe from Wit by Griboyedov, did not trigger the same increase in knowledge experienced by students who attended live performances of the same plays. Of those who saw the live play, 79% could identify which characters were Romeo's friends, compared to only 38% of those students who watched the movie. As for Woe from Wit, 83% of students who watched the play at the theatre could easily justify the actions of both Chatsky and Sophia, compared to 65% who read the book."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text: "Why is that so?"
          },
          {
            speaker: "Geoffrey Caedmon",
            text:
              "The way we respond to people performing a story on stage is different from how we react to seeing the same performance on a screen. This could be because being present in person can lead to stronger emotional connections. That is why watching movies does not have the same impact on our emotional intelligence as live theatre."
          },
          {
            speaker: "Presenter",
            text:
              "Am I right in assuming that arts education should become part and parcel of school curricula?"
          },
          {
            speaker: "Geoffrey Caedmon",
            text:
              "Arts education is essential for developing creative thinking skills. Students who are involved in the arts tend to explore all possible solutions to come up with creative ideas. Arts education helps them develop into autonomous and resourceful learners by encouraging them to think outside the box. This, in the long run, impacts every subject students are involved in. So, answering your question, yes, integrated arts education is essential and should once again be given a higher priority."
          },
          {
            speaker: "Presenter",
            text:
              "Thank you, Geoffrey, for your inspirational answers. I hope more students will get a chance to visit theatres with their schools, and learn to see beyond their own horizons."
          }
        ]
      }
    ],

    huntLabs: [
      {
        examNum: 3,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "Monday after weekend break · Tue / Wed / Thu / Fri.",
        explainRu: "Regular program runs on weekdays, not every day and not weekends.",
        evidencePromptRu: "Найди, как Sandy описывает сетку передачи.",
        segments: [
          { kind: "hit", sol: "e", text: "our usual break for weekends" },
          {
            kind: "hit",
            sol: "e",
            text: "On Tuesday"
          },
          {
            kind: "hit",
            sol: "e",
            text: "Thursday and Friday will be devoted"
          }
        ]
      },
      {
        examNum: 4,
        key: 1,
        paragraphIndex: 0,
        keyLineRu: "I work for the University doing research.",
        explainRu: "Geoffrey is a researcher, not a director or actor.",
        evidencePromptRu: "Найди самопредставление Geoffrey.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "neither a film director, nor an actor",
            wrongOption: 2,
            distractExplainRu: "Presenter сразу снимает варианты actor / director."
          },
          {
            kind: "hit",
            sol: "e",
            text: "I work for the University doing research"
          }
        ]
      },
      {
        examNum: 5,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "A step in the wrong direction.",
        explainRu: "Cancelling trips harms students by removing educational benefits.",
        evidencePromptRu: "Найди оценку Geoffrey про cancelling trips.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "a step in the wrong direction"
          },
          {
            kind: "hit",
            sol: "e",
            text: "many additional educational benefits"
          }
        ]
      },
      {
        examNum: 6,
        key: 2,
        paragraphIndex: 2,
        keyLineRu: "Knowledge of literature · broader world. No 'inner world'.",
        explainRu: "Inner world is not named as a benefit.",
        evidencePromptRu: "Сравни список benefits of theatre.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "improves students' knowledge of literature"
          },
          {
            kind: "hit",
            sol: "e",
            text: "acts as a window to a broader world"
          },
          {
            kind: "hit",
            sol: "d",
            text: "develops students' emotional intelligence",
            wrongOption: 2,
            distractExplainRu: "Emotional intelligence mentioned, but not 'recognize their inner world'."
          }
        ]
      },
      {
        examNum: 7,
        key: 1,
        paragraphIndex: 2,
        keyLineRu: "65% after reading the book; 83% after the play.",
        explainRu: "Question asks specifically about Chatsky after reading the book.",
        evidencePromptRu: "Найди проценты по Woe from Wit.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "83% of students who watched the play at the theatre",
            wrongOption: 3,
            distractExplainRu: "83% refers to theatre version, not reading."
          },
          {
            kind: "hit",
            sol: "e",
            text: "compared to 65% who read the book"
          }
        ]
      },
      {
        examNum: 8,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "Being present in person can lead to stronger emotional connections.",
        explainRu: "That is the reason for different reactions to live theatre and screen.",
        evidencePromptRu: "Найди объяснение Geoffrey.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "being present in person can lead to stronger emotional connections"
          }
        ]
      },
      {
        examNum: 9,
        key: 3,
        paragraphIndex: 3,
        keyLineRu: "In the long run, impacts every subject students are involved in.",
        explainRu: "Long-run effect spreads across study in general, not only arts.",
        evidencePromptRu: "Найди long-run effect of arts education.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "in the long run, impacts every subject students are involved in"
          },
          {
            kind: "hit",
            sol: "d",
            text: "developing creative thinking skills",
            wrongOption: 2,
            distractExplainRu: "Creative thinking is mentioned, not logical thinking."
          }
        ]
      }
    ],

    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Sandy Briar)",
        fullText:
          "Hello, everybody! My name is Sandy Briar. Welcome to our regular program about arts and literature. We came back on Monday, after our usual break for weekends, to talk about what should be done if you wish to be an orchestra conductor. On Tuesday, we discussed the release of the Dolly the Beast book. Thursday and Friday will be devoted to museums and art galleries, but today, Wednesday, March 19th, we dive into theatre with our expert, Geoffrey Caedmon. Hello, Geoffrey. The pleasure is mine, Geoffrey. I should admit that Geoffrey is neither a film director, nor an actor. You might wonder then what he is doing in the studio today. Well, let's ask Geoffrey. So, Geoffrey, who are you? While preparing for the interview, I found out that schools nowadays are reducing their arts budgets and cancelling trips to theatres. Does this have a positive or negative influence on students? So, what are the benefits of taking students to the theatre? But isn't watching a movie the same? Why is that so? Am I right in assuming that arts education should become part and parcel of school curricula? Thank you, Geoffrey, for your inspirational answers. I hope more students will get a chance to visit theatres with their schools, and learn to see beyond their own horizons.",
        phrases: [
          { en: "our usual break for weekends", ru: "наш обычный перерыв на выходные", tip: "3 · weekdays" },
          { en: "On Tuesday", ru: "во вторник", tip: "3" },
          { en: "Thursday and Friday will be devoted", ru: "четверг и пятница будут посвящены", tip: "3" },
          { en: "today, Wednesday, March 19th", ru: "сегодня, в среду, 19 марта" },
          { en: "our regular program about arts and literature", ru: "наша регулярная программа об искусстве и литературе" },
          { en: "neither a film director, nor an actor", ru: "не режиссёр и не актёр", tip: "4" },
          { en: "who are you", ru: "кто же вы?" },
          { en: "reducing their arts budgets", ru: "сокращают бюджеты на искусство" },
          { en: "cancelling trips to theatres", ru: "отменяют поездки в театр", tip: "5" },
          { en: "positive or negative influence", ru: "положительное или отрицательное влияние" },
          { en: "benefits of taking students to the theatre", ru: "польза походов в театр для учеников", tip: "6" },
          { en: "watching a movie the same", ru: "то же самое, что смотреть фильм?" },
          { en: "Why is that so", ru: "почему так?" },
          { en: "part and parcel of school curricula", ru: "неотъемлемая часть школьной программы", tip: "9" },
          { en: "see beyond their own horizons", ru: "смотреть шире собственных горизонтов" }
        ],
        chunks: [
          {
            text:
              "Hello, everybody! My name is Sandy Briar. Welcome to our regular program about arts and literature. We came back on Monday, after our usual break for weekends, to talk about what should be done if you wish to be an orchestra conductor. On Tuesday, we discussed the release of the Dolly the Beast book. Thursday and Friday will be devoted to museums and art galleries, but today, Wednesday, March 19th, we dive into theatre with our expert, Geoffrey Caedmon. Hello, Geoffrey.",
            showText: true
          },
          {
            text:
              "The pleasure is mine, Geoffrey. I should admit that Geoffrey is neither a film director, nor an actor. You might wonder then what he is doing in the studio today. Well, let's ask Geoffrey. So, Geoffrey, who are you?",
            showText: true
          },
          {
            text:
              "While preparing for the interview, I found out that schools nowadays are reducing their arts budgets and cancelling trips to theatres. Does this have a positive or negative influence on students?",
            showText: true
          },
          {
            text:
              "So, what are the benefits of taking students to the theatre? But isn't watching a movie the same? Why is that so?",
            showText: true
          },
          {
            text:
              "Am I right in assuming that arts education should become part and parcel of school curricula? Thank you, Geoffrey, for your inspirational answers. I hope more students will get a chance to visit theatres with their schools, and learn to see beyond their own horizons.",
            showText: false
          }
        ]
      },
      {
        id: "Geoffrey Caedmon",
        label: "Geoffrey Caedmon",
        fullText:
          "Hi, Sandy. I'm pleased to be here today. You're right, I'm none of those, even though I used to play on stage at school. I work for the University doing research on various issues connected with education and arts. Sandy, before going into details, I wanted to remind those of our listeners who didn't have a chance to go to the theatre with their school class, that it used to be a traditional school practice some 10 years ago. Not only was it a chance to take a break from school and have some fun, but it also had many additional educational benefits. So, I'd say that this is indeed a step in the wrong direction, as investing time into the arts has demonstrated its importance in developing well-rounded learners. Research suggests that it improves students' knowledge of literature, increases tolerance and empathy, and develops students' emotional intelligence. Theatre acts as a window to a broader world by showing them different perspectives and experiences. It may be easier and more cost effective to have students watch the movie version of a play - however it does not have the same effects. It turned out that reading and watching movies of Romeo and Juliet by Shakespeare, and Woe from Wit by Griboyedov, did not trigger the same increase in knowledge experienced by students who attended live performances of the same plays. Of those who saw the live play, 79% could identify which characters were Romeo's friends, compared to only 38% of those students who watched the movie. As for Woe from Wit, 83% of students who watched the play at the theatre could easily justify the actions of both Chatsky and Sophia, compared to 65% who read the book. The way we respond to people performing a story on stage is different from how we react to seeing the same performance on a screen. This could be because being present in person can lead to stronger emotional connections. That is why watching movies does not have the same impact on our emotional intelligence as live theatre. Arts education is essential for developing creative thinking skills. Students who are involved in the arts tend to explore all possible solutions to come up with creative ideas. Arts education helps them develop into autonomous and resourceful learners by encouraging them to think outside the box. This, in the long run, impacts every subject students are involved in. So, answering your question, yes, integrated arts education is essential and should once again be given a higher priority.",
        phrases: [
          { en: "I work for the University doing research", ru: "я работаю в университете и занимаюсь исследованиями", tip: "4 · researcher" },
          { en: "connected with education and arts", ru: "связанными с образованием и искусством" },
          { en: "traditional school practice", ru: "традиционная школьная практика" },
          { en: "some 10 years ago", ru: "ещё каких-то 10 лет назад" },
          { en: "take a break from school and have some fun", ru: "отвлечься от школы и приятно провести время" },
          { en: "many additional educational benefits", ru: "много дополнительных образовательных преимуществ", tip: "5" },
          { en: "a step in the wrong direction", ru: "шаг в неверном направлении", tip: "5 · negative" },
          { en: "well-rounded learners", ru: "всесторонне развитые ученики" },
          { en: "improves students' knowledge of literature", ru: "улучшает знание литературы у учеников", tip: "6" },
          { en: "increases tolerance and empathy", ru: "повышает терпимость и эмпатию" },
          { en: "develops students' emotional intelligence", ru: "развивает эмоциональный интеллект учеников" },
          { en: "a window to a broader world", ru: "окно в более широкий мир", tip: "6" },
          { en: "different perspectives and experiences", ru: "разные точки зрения и опыт" },
          { en: "more cost effective", ru: "более экономично" },
          { en: "does not have the same effects", ru: "не даёт того же эффекта" },
          { en: "Romeo and Juliet", ru: "«Ромео и Джульетта»" },
          { en: "Woe from Wit", ru: "«Горе от ума»" },
          { en: "79% could identify", ru: "79% смогли определить", tip: "7 · trap" },
          { en: "83% of students who watched the play", ru: "83% студентов, посмотревших спектакль", tip: "7 · trap" },
          { en: "65% who read the book", ru: "65% тех, кто читал книгу", tip: "7 · key" },
          { en: "being present in person", ru: "присутствие лично, вживую", tip: "8" },
          { en: "stronger emotional connections", ru: "более сильные эмоциональные связи", tip: "8" },
          { en: "creative thinking skills", ru: "навыки творческого мышления" },
          { en: "autonomous and resourceful learners", ru: "самостоятельные и находчивые ученики" },
          { en: "think outside the box", ru: "мыслить нестандартно" },
          { en: "in the long run", ru: "в долгосрочной перспективе", tip: "9" },
          { en: "impacts every subject students are involved in", ru: "влияет на каждый предмет, которым занимаются ученики", tip: "9 · long-lasting effect" },
          { en: "integrated arts education is essential", ru: "интегрированное arts education необходимо" },
          { en: "given a higher priority", ru: "снова должно получить более высокий приоритет" }
        ],
        chunks: [
          {
            text:
              "Hi, Sandy. I'm pleased to be here today. You're right, I'm none of those, even though I used to play on stage at school. I work for the University doing research on various issues connected with education and arts.",
            showText: true
          },
          {
            text:
              "Sandy, before going into details, I wanted to remind those of our listeners who didn't have a chance to go to the theatre with their school class, that it used to be a traditional school practice some 10 years ago. Not only was it a chance to take a break from school and have some fun, but it also had many additional educational benefits. So, I'd say that this is indeed a step in the wrong direction, as investing time into the arts has demonstrated its importance in developing well-rounded learners.",
            showText: true
          },
          {
            text:
              "Research suggests that it improves students' knowledge of literature, increases tolerance and empathy, and develops students' emotional intelligence. Theatre acts as a window to a broader world by showing them different perspectives and experiences.",
            showText: true
          },
          {
            text:
              "It may be easier and more cost effective to have students watch the movie version of a play - however it does not have the same effects. It turned out that reading and watching movies of Romeo and Juliet by Shakespeare, and Woe from Wit by Griboyedov, did not trigger the same increase in knowledge experienced by students who attended live performances of the same plays. Of those who saw the live play, 79% could identify which characters were Romeo's friends, compared to only 38% of those students who watched the movie. As for Woe from Wit, 83% of students who watched the play at the theatre could easily justify the actions of both Chatsky and Sophia, compared to 65% who read the book.",
            showText: true
          },
          {
            text:
              "The way we respond to people performing a story on stage is different from how we react to seeing the same performance on a screen. This could be because being present in person can lead to stronger emotional connections. That is why watching movies does not have the same impact on our emotional intelligence as live theatre.",
            showText: true
          },
          {
            text:
              "Arts education is essential for developing creative thinking skills. Students who are involved in the arts tend to explore all possible solutions to come up with creative ideas. Arts education helps them develop into autonomous and resourceful learners by encouraging them to think outside the box. This, in the long run, impacts every subject students are involved in. So, answering your question, yes, integrated arts education is essential and should once again be given a higher priority.",
            showText: false
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
