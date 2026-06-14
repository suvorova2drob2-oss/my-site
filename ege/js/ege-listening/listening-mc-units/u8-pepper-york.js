/**
 * ЕГЭ Listening MC · Unit 8 · Pepper York · youth career guidance.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-pepper-york",
    unitOrder: 8,
    title: "Unit 8 · Pepper York",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Jack & Pepper York · Youth Community Radio",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/8/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%208%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью о выборе пути и карьере художника</strong>. В заданиях <strong>3-9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Ловушки варианта 8:</strong></p>" +
      "<ul>" +
      "<li><strong>3:</strong> 5 o'clock + sun still rising = <strong>утро</strong>, не afternoon/evening.</li>" +
      "<li><strong>4:</strong> upcoming psychologist + kids 13-19 — не famous и не «родилась в столице» (home town ≠ capital).</li>" +
      "<li><strong>5:</strong> Simon — пример общей темы (struggles to find what they are meant to be), не «первый вопрос».</li>" +
      "<li><strong>8:</strong> college: classes + jobs/degrees сказаны; <em>internship</em> в записи нет.</li>" +
      "</ul>",

    questions: [
      {
        examNum: 3,
        prompt: "When does the program run?",
        key: 1,
        choices: [
          { num: 1, text: "In the morning." },
          { num: 2, text: "In the afternoon." },
          { num: 3, text: "In the evening." }
        ],
        explainRu:
          "Jack: <em>It's 5 o'clock, the sun is still rising</em> — эфир утром, не днём и не вечером.",
        distractorWrongRu: {
          2: "В записи нет afternoon / дневного эфира.",
          3: "Вечерний эфир не упоминается."
        }
      },
      {
        examNum: 4,
        prompt: "What do we learn about Pepper York at the beginning of the interview?",
        key: 3,
        choices: [
          { num: 1, text: "She is a famous psychologist." },
          { num: 2, text: "She was born in the capital." },
          { num: 3, text: "She works with teenagers." }
        ],
        explainRu:
          "Pepper — <em>upcoming psychologist</em>, <em>helping kids from 13 to 19</em> — работает с подростками; famous и born in the capital не сказаны.",
        distractorWrongRu: {
          1: "Upcoming psychologist — начинающая, не famous.",
          2: "Back in my home town — родной город, не утверждение, что родилась в столице."
        }
      },
      {
        examNum: 5,
        prompt: "The presenter mentions Simon to...",
        key: 2,
        choices: [
          { num: 1, text: "introduce the first question." },
          { num: 2, text: "give an example of the general trend." },
          { num: 3, text: "show that teenagers can talk to radio staff." }
        ],
        explainRu:
          "Сначала Jack говорит о комментариях слушателей о <em>struggles to find what they are meant to be</em>; Simon — конкретный пример этой общей темы.",
        distractorWrongRu: {
          1: "Simon вводит кейс, а не «первый вопрос» интервью.",
          3: "Про общение подростков с редакцией напрямую не сказано."
        }
      },
      {
        examNum: 6,
        prompt: "Pepper encourages Simon to...",
        key: 2,
        choices: [
          { num: 1, text: "make his dream come true." },
          { num: 2, text: "be ready for the unknown." },
          { num: 3, text: "to consider possible hardships." }
        ],
        explainRu:
          "Pepper: <em>prepare yourself to deal with uncertainties all along the way</em> — быть готовым к неизвестности, а не просто «осуществить мечту».",
        distractorWrongRu: {
          1: "Она говорит не отказываться от art, но акцент на uncertainties, не на «dream come true».",
          3: "Hardships как отдельный совет не формулируются так."
        }
      },
      {
        examNum: 7,
        prompt: "Why should teenagers ask themselves many questions?",
        key: 3,
        choices: [
          { num: 1, text: "They help to set the career path." },
          { num: 2, text: "The answers remain the same." },
          { num: 3, text: "They give a hint of what life is." }
        ],
        explainRu:
          "Pepper: вопросы <em>provide insight into the nature of existence</em> — дают понимание жизни, а не фиксируют карьеру или стабильные ответы.",
        distractorWrongRu: {
          1: "Про career path как цель вопросов так не сказано.",
          2: "Наоборот: <em>none of the answers will remain reliable for very long</em>."
        }
      },
      {
        examNum: 8,
        prompt: "What does Pepper NOT mention as a benefit of studying at college?",
        key: 2,
        choices: [
          { num: 1, text: "The classes are useful." },
          { num: 2, text: "You can get an internship." },
          { num: 3, text: "It helps you with your career." }
        ],
        explainRu:
          "Упомянуты: <em>few classes which made it all worth it</em>, <em>access to certain jobs and advanced degrees</em>. Про internship ничего нет.",
        distractorWrongRu: {
          1: "Useful classes сказаны прямо.",
          3: "Jobs and advanced degrees — про карьеру/работу сказано."
        }
      },
      {
        examNum: 9,
        prompt: "What does Pepper say about good artists?",
        key: 1,
        choices: [
          { num: 1, text: "They have other interests apart from art." },
          { num: 2, text: "They are not afraid of asking questions." },
          { num: 3, text: "They studied philosophy and social science." }
        ],
        explainRu:
          "Pepper: <em>Anyone who tells you that artists don't have other interests or do other things knows only bad artists</em> — у хороших художников есть и другие интересы.",
        distractorWrongRu: {
          2: "Ask dumb questions — совет Simon'у, не определение good artists.",
          3: "Focus on philosophy — совет Simon'у, не требование для всех художников."
        }
      }
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Hello, everyone! You're listening to Youth Community Radio. It was overcast yesterday during the day and showering at night, yet right now there isn't a cloud in the sky. It's 5 o'clock, the sun is still rising, and I have a steaming mug of coffee right in front of me. We are waiting to be joined by Pepper York, an upcoming psychologist, who's been helping kids from 13 to 19 in the capital, but is now with us. Welcome, Pepper!"
          },
          {
            speaker: "Pepper York",
            text: "Hi, Jack. Thank you for having me today. It's great to be back in my home town. It's been a while."
          },
          {
            speaker: "Presenter",
            text:
              "It's great to finally have you on Youth Community Radio. We receive many comments from our listeners — both in our social nets, by post, by phone, you name it — mentioning their struggles to find what they are meant to be. Simon, an 18-year-old boy, posted a comment to our feed saying that he was very passionate about philosophy and social sciences, but he was in love with art for as long as he could remember."
          },
          {
            speaker: "Pepper York",
            text:
              "Well, I could assume that — like many others — he is approaching a turn in the road, and is uncertain about everything that comes next. This is a common place to be at eighteen. Am I right in saying that he believes that he doesn't know whether to pursue an artistic career, or one in cognitive science?"
          },
          {
            speaker: "Presenter",
            text:
              "Yes, he feels pressured to pick the right thing to study at the university, and wonders how necessary university is in order to succeed as a visual artist."
          },
          {
            speaker: "Pepper York",
            text:
              "First of all, this is what I'd like to say to him, \"Simon, you're too young to give up on the relatively practical and doable dream of pursuing art. But what you should really think about is that the hardest thing about being an artist is that there isn't really a set way of doing it. So if you are really into it, you should prepare yourself to deal with uncertainties all along the way, and not just at the very beginning.\""
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text: "How so?"
          },
          {
            speaker: "Pepper York",
            text:
              "If it was a one-to-one session, I'd make him think about such questions as: What kind of art should he make? How will he make money? Who will his art be for? How will he structure his days? What will his community be? What steps will he take toward his goals? And many others."
          },
          {
            speaker: "Presenter",
            text: "Will they help?"
          },
          {
            speaker: "Pepper York",
            text:
              "Well, these questions are not easy to answer, and none of the answers will remain reliable for very long. But they will provide insight into the nature of existence. People don't build their lives in one day. The process is endless, constant, and often with no help from others."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text: "Could you please elaborate more on that?"
          },
          {
            speaker: "Pepper York",
            text:
              "There are lots of ways to make it as an artist, and really no definite line between making it and not making it. You can make art your career by showing it in galleries and selling your work, or you can be a professor. You can work as a graphic designer or tattoo artist. You can make money by winning grants. You can have a day job to pay the bills, and also create your art. For some of the professions I mentioned, like a professor or an artist showing in galleries, it's helpful to have a master's degree."
          },
          {
            speaker: "Presenter",
            text:
              "Then maybe that's a good reason to study art in college? Did that help you to become who you are?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Pepper York",
            text:
              "I have complicated feelings about college. I wasn't particularly happy there. And besides the few classes which made it all worth it, I don't know if I learned much. But I'm glad I went. College can give you a bunch of things, besides giving you access to certain jobs and advanced degrees down the road. It gives you time to decide what you want, and access to people who can offer useful advice."
          },
          {
            speaker: "Presenter",
            text: "Do you think making a life as an artist is easy?"
          },
          {
            speaker: "Pepper York",
            text: "I wouldn't say so, but it's not necessarily harder than other ways of life."
          },
          {
            speaker: "Presenter",
            text: "What would you suggest that Simon should do?"
          },
          {
            speaker: "Pepper York",
            text:
              "Simon, work hard, look for people who can help guide you, and do not be afraid to ask dumb questions. As time passes, you'll get better at sifting out the right answers from the wrong ones. And, by all means, focus also on philosophy, social science, and other stuff that interests you. Anyone who tells you that artists don't have other interests or do other things knows only bad artists."
          }
        ]
      }
    ],

    huntLabs: [
      {
        examNum: 3,
        key: 1,
        paragraphIndex: 0,
        keyLineRu: "5 o'clock · sun still rising · morning coffee.",
        explainRu: "Early hour and rising sun point to a morning broadcast.",
        evidencePromptRu: "Найди, когда идёт программа.",
        segments: [
          { kind: "hit", sol: "e", text: "It's 5 o'clock" },
          { kind: "hit", sol: "e", text: "the sun is still rising" },
          { kind: "hit", sol: "e", text: "a steaming mug of coffee" }
        ]
      },
      {
        examNum: 4,
        key: 3,
        paragraphIndex: 0,
        keyLineRu: "Upcoming psychologist · kids from 13 to 19.",
        explainRu: "She works with teenagers; she is not famous and birth in the capital is not stated.",
        evidencePromptRu: "Найди, что говорят о Pepper в начале.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "an upcoming psychologist",
            wrongOption: 1,
            distractExplainRu: "Upcoming — начинающая, не famous psychologist."
          },
          {
            kind: "hit",
            sol: "e",
            text: "helping kids from 13 to 19"
          },
          {
            kind: "hit",
            sol: "d",
            text: "back in my home town",
            wrongOption: 2,
            distractExplainRu: "Home town — не то же самое, что «родилась в столице»."
          }
        ]
      },
      {
        examNum: 5,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "Struggles to find what they are meant to be · Simon as example.",
        explainRu: "Simon illustrates the general listener trend, not the first question or talking to staff.",
        evidencePromptRu: "Найди, зачем Jack упоминает Simon.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "struggles to find what they are meant to be"
          },
          {
            kind: "hit",
            sol: "e",
            text: "Simon, an 18-year-old boy, posted a comment"
          }
        ]
      },
      {
        examNum: 6,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "Deal with uncertainties all along the way.",
        explainRu: "Pepper tells Simon to prepare for ongoing uncertainty, not just hardships or a simple dream.",
        evidencePromptRu: "Найди совет Pepper для Simon.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "deal with uncertainties all along the way"
          },
          {
            kind: "hit",
            sol: "d",
            text: "too young to give up on the relatively practical and doable dream",
            wrongOption: 1,
            distractExplainRu: "Она не отказывает от мечты, но акцент на uncertainties."
          }
        ]
      },
      {
        examNum: 7,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "Insight into the nature of existence.",
        explainRu: "Questions give a hint of what life is; answers do not stay the same.",
        evidencePromptRu: "Найди, зачем задавать себе много вопросов.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "provide insight into the nature of existence"
          },
          {
            kind: "hit",
            sol: "d",
            text: "none of the answers will remain reliable for very long",
            wrongOption: 2,
            distractExplainRu: "Ответы как раз не остаются надёжными надолго."
          }
        ]
      },
      {
        examNum: 8,
        key: 2,
        paragraphIndex: 3,
        keyLineRu: "Classes useful · jobs/degrees — yes; internship — no.",
        explainRu: "Internship is not mentioned among college benefits.",
        evidencePromptRu: "Сравни, что Pepper говорит о college.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "few classes which made it all worth it"
          },
          {
            kind: "hit",
            sol: "e",
            text: "access to certain jobs and advanced degrees"
          },
          {
            kind: "hit",
            sol: "d",
            text: "access to people who can offer useful advice",
            wrongOption: 3,
            distractExplainRu: "Jobs, degrees и советы — про карьеру/путь; internship не назван."
          }
        ]
      },
      {
        examNum: 9,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "Artists don't have other interests — only bad artists.",
        explainRu: "Good artists have other interests and activities besides art.",
        evidencePromptRu: "Найди, что Pepper говорит о хороших художниках.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "artists don't have other interests or do other things knows only bad artists"
          },
          {
            kind: "hit",
            sol: "d",
            text: "do not be afraid to ask dumb questions",
            wrongOption: 2,
            distractExplainRu: "Вопросы — совет Simon'у, не определение good artists."
          }
        ]
      }
    ],

    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Jack)",
        fullText:
          "Hello, everyone! You're listening to Youth Community Radio. It was overcast yesterday during the day and showering at night, yet right now there isn't a cloud in the sky. It's 5 o'clock, the sun is still rising, and I have a steaming mug of coffee right in front of me. We are waiting to be joined by Pepper York, an upcoming psychologist, who's been helping kids from 13 to 19 in the capital, but is now with us. Welcome, Pepper! It's great to finally have you on Youth Community Radio. We receive many comments from our listeners — both in our social nets, by post, by phone, you name it — mentioning their struggles to find what they are meant to be. Simon, an 18-year-old boy, posted a comment to our feed saying that he was very passionate about philosophy and social sciences, but he was in love with art for as long as he could remember. Yes, he feels pressured to pick the right thing to study at the university, and wonders how necessary university is in order to succeed as a visual artist. How so? Will they help? Could you please elaborate more on that? Then maybe that's a good reason to study art in college? Did that help you to become who you are? Do you think making a life as an artist is easy? What would you suggest that Simon should do?",
        phrases: [
          { en: "You're listening to Youth Community Radio", ru: "вы слушаете Youth Community Radio" },
          { en: "It's 5 o'clock", ru: "сейчас 5 часов", tip: "3 · morning" },
          { en: "the sun is still rising", ru: "солнце ещё всходит", tip: "3" },
          { en: "a steaming mug of coffee", ru: "дымящаяся кружка кофе", tip: "3" },
          { en: "an upcoming psychologist", ru: "начинающий психолог", tip: "4 · not famous" },
          { en: "helping kids from 13 to 19", ru: "помогал детям от 13 до 19", tip: "4 · teenagers" },
          { en: "in the capital", ru: "в столице" },
          { en: "Welcome, Pepper", ru: "добро пожаловать, Pepper" },
          { en: "struggles to find what they are meant to be", ru: "трудно понять своё предназначение", tip: "5 · general trend" },
          { en: "Simon, an 18-year-old boy", ru: "Simon, восемнадцатилетний парень", tip: "5 · example" },
          { en: "passionate about philosophy and social sciences", ru: "увлечён философией и социальными науками" },
          { en: "in love with art", ru: "влюблён в искусство" },
          { en: "feels pressured to pick the right thing", ru: "чувствует давление выбрать правильное", tip: "Simon · university" },
          { en: "how necessary university is", ru: "насколько нужен университет" },
          { en: "succeed as a visual artist", ru: "преуспеть как художник" },
          { en: "How so", ru: "как так?" },
          { en: "Will they help", ru: "это поможет?" },
          { en: "elaborate more on that", ru: "подробнее это объяснить" },
          { en: "study art in college", ru: "учиться на art в колледже", tip: "8" },
          { en: "Did that help you to become who you are", ru: "это помогло тебе стать тем, кем ты стала" },
          { en: "making a life as an artist is easy", ru: "построить жизнь художника легко" },
          { en: "What would you suggest that Simon should do", ru: "что бы ты посоветовала Simon" }
        ],
        chunks: [
          {
            text:
              "Hello, everyone! You're listening to Youth Community Radio. It was overcast yesterday during the day and showering at night, yet right now there isn't a cloud in the sky. It's 5 o'clock, the sun is still rising, and I have a steaming mug of coffee right in front of me. We are waiting to be joined by Pepper York, an upcoming psychologist, who's been helping kids from 13 to 19 in the capital, but is now with us. Welcome, Pepper!",
            showText: true
          },
          {
            text:
              "It's great to finally have you on Youth Community Radio. We receive many comments from our listeners — both in our social nets, by post, by phone, you name it — mentioning their struggles to find what they are meant to be. Simon, an 18-year-old boy, posted a comment to our feed saying that he was very passionate about philosophy and social sciences, but he was in love with art for as long as he could remember.",
            showText: true
          },
          {
            text:
              "Yes, he feels pressured to pick the right thing to study at the university, and wonders how necessary university is in order to succeed as a visual artist.",
            showText: true
          },
          {
            text: "How so? Will they help? Could you please elaborate more on that?",
            showText: true
          },
          {
            text:
              "Then maybe that's a good reason to study art in college? Did that help you to become who you are? Do you think making a life as an artist is easy? What would you suggest that Simon should do?",
            showText: false
          }
        ]
      },
      {
        id: "Pepper York",
        label: "Pepper York",
        fullText:
          "Hi, Jack. Thank you for having me today. It's great to be back in my home town. It's been a while. Well, I could assume that — like many others — he is approaching a turn in the road, and is uncertain about everything that comes next. This is a common place to be at eighteen. Am I right in saying that he believes that he doesn't know whether to pursue an artistic career, or one in cognitive science? First of all, this is what I'd like to say to him, \"Simon, you're too young to give up on the relatively practical and doable dream of pursuing art. But what you should really think about is that the hardest thing about being an artist is that there isn't really a set way of doing it. So if you are really into it, you should prepare yourself to deal with uncertainties all along the way, and not just at the very beginning.\" If it was a one-to-one session, I'd make him think about such questions as: What kind of art should he make? How will he make money? Who will his art be for? How will he structure his days? What will his community be? What steps will he take toward his goals? And many others. Well, these questions are not easy to answer, and none of the answers will remain reliable for very long. But they will provide insight into the nature of existence. People don't build their lives in one day. The process is endless, constant, and often with no help from others. There are lots of ways to make it as an artist, and really no definite line between making it and not making it. You can make art your career by showing it in galleries and selling your work, or you can be a professor. You can work as a graphic designer or tattoo artist. You can make money by winning grants. You can have a day job to pay the bills, and also create your art. For some of the professions I mentioned, like a professor or an artist showing in galleries, it's helpful to have a master's degree. I have complicated feelings about college. I wasn't particularly happy there. And besides the few classes which made it all worth it, I don't know if I learned much. But I'm glad I went. College can give you a bunch of things, besides giving you access to certain jobs and advanced degrees down the road. It gives you time to decide what you want, and access to people who can offer useful advice. I wouldn't say so, but it's not necessarily harder than other ways of life. Simon, work hard, look for people who can help guide you, and do not be afraid to ask dumb questions. As time passes, you'll get better at sifting out the right answers from the wrong ones. And, by all means, focus also on philosophy, social science, and other stuff that interests you. Anyone who tells you that artists don't have other interests or do other things knows only bad artists.",
        phrases: [
          { en: "back in my home town", ru: "снова в родном городе", tip: "4 · not born in capital" },
          { en: "a turn in the road", ru: "поворот на жизненном пути" },
          { en: "uncertain about everything that comes next", ru: "не уверен во всём, что будет дальше" },
          { en: "a common place to be at eighteen", ru: "в восемнадцать это обычное состояние" },
          { en: "artistic career, or one in cognitive science", ru: "художественная карьера или когнитивные науки" },
          { en: "too young to give up on", ru: "слишком молод, чтобы отказываться от", tip: "6" },
          { en: "there isn't really a set way of doing it", ru: "нет одного правильного способа это делать" },
          { en: "deal with uncertainties all along the way", ru: "справляться с неопределённостью на всём пути", tip: "6 · key" },
          { en: "not just at the very beginning", ru: "а не только в самом начале" },
          { en: "one-to-one session", ru: "индивидуальная сессия" },
          { en: "What kind of art should he make", ru: "какое искусство создавать" },
          { en: "How will he make money", ru: "как зарабатывать" },
          { en: "none of the answers will remain reliable", ru: "ни один ответ надолго не останется надёжным", tip: "7 · trap" },
          { en: "insight into the nature of existence", ru: "понимание природы бытия", tip: "7 · key" },
          { en: "People don't build their lives in one day", ru: "люди не строят жизнь за один день" },
          { en: "lots of ways to make it as an artist", ru: "много способов преуспеть как художник" },
          { en: "no definite line between making it and not making it", ru: "нет чёткой границы между успехом и неуспехом" },
          { en: "showing it in galleries and selling your work", ru: "выставлять в галереях и продавать работы" },
          { en: "graphic designer or tattoo artist", ru: "графический дизайнер или тату-мастер" },
          { en: "winning grants", ru: "гранты" },
          { en: "a day job to pay the bills", ru: "работа на стороне, чтобы платить по счетам" },
          { en: "master's degree", ru: "магистерская степень" },
          { en: "complicated feelings about college", ru: "смешанные чувства по поводу колледжа", tip: "8" },
          { en: "few classes which made it all worth it", ru: "несколько курсов, которые оправдали всё", tip: "8 · mentioned" },
          { en: "access to certain jobs and advanced degrees", ru: "доступ к работам и степеням", tip: "8 · career" },
          { en: "time to decide what you want", ru: "время понять, чего ты хочешь" },
          { en: "people who can offer useful advice", ru: "люди, которые могут дать полезный совет" },
          { en: "not necessarily harder than other ways of life", ru: "не обязательно труднее других жизненных путей" },
          { en: "do not be afraid to ask dumb questions", ru: "не бойся задавать «глупые» вопросы" },
          { en: "sifting out the right answers from the wrong ones", ru: "отделять верные ответы от неверных" },
          { en: "focus also on philosophy, social science", ru: "уделяй внимание философии и социальным наукам" },
          { en: "artists don't have other interests or do other things", ru: "у художников нет других интересов", tip: "9 · inverted" },
          { en: "knows only bad artists", ru: "знает только плохих художников", tip: "9 · key" }
        ],
        chunks: [
          {
            text: "Hi, Jack. Thank you for having me today. It's great to be back in my home town. It's been a while.",
            showText: true
          },
          {
            text:
              "Well, I could assume that — like many others — he is approaching a turn in the road, and is uncertain about everything that comes next. This is a common place to be at eighteen. Am I right in saying that he believes that he doesn't know whether to pursue an artistic career, or one in cognitive science?",
            showText: true
          },
          {
            text:
              "First of all, this is what I'd like to say to him, \"Simon, you're too young to give up on the relatively practical and doable dream of pursuing art. But what you should really think about is that the hardest thing about being an artist is that there isn't really a set way of doing it. So if you are really into it, you should prepare yourself to deal with uncertainties all along the way, and not just at the very beginning.\"",
            showText: true
          },
          {
            text:
              "If it was a one-to-one session, I'd make him think about such questions as: What kind of art should he make? How will he make money? Who will his art be for? How will he structure his days? What will his community be? What steps will he take toward his goals? And many others.",
            showText: true
          },
          {
            text:
              "Well, these questions are not easy to answer, and none of the answers will remain reliable for very long. But they will provide insight into the nature of existence. People don't build their lives in one day. The process is endless, constant, and often with no help from others.",
            showText: true
          },
          {
            text:
              "There are lots of ways to make it as an artist, and really no definite line between making it and not making it. You can make art your career by showing it in galleries and selling your work, or you can be a professor. You can work as a graphic designer or tattoo artist. You can make money by winning grants. You can have a day job to pay the bills, and also create your art. For some of the professions I mentioned, like a professor or an artist showing in galleries, it's helpful to have a master's degree.",
            showText: true
          },
          {
            text:
              "I have complicated feelings about college. I wasn't particularly happy there. And besides the few classes which made it all worth it, I don't know if I learned much. But I'm glad I went. College can give you a bunch of things, besides giving you access to certain jobs and advanced degrees down the road. It gives you time to decide what you want, and access to people who can offer useful advice.",
            showText: true
          },
          {
            text: "I wouldn't say so, but it's not necessarily harder than other ways of life.",
            showText: true
          },
          {
            text:
              "Simon, work hard, look for people who can help guide you, and do not be afraid to ask dumb questions. As time passes, you'll get better at sifting out the right answers from the wrong ones. And, by all means, focus also on philosophy, social science, and other stuff that interests you. Anyone who tells you that artists don't have other interests or do other things knows only bad artists.",
            showText: false
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
