/**
 * ЕГЭ Reading — Multiple Choice, юнит 14 · Time management.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-time-management",
    unitOrder: 14,
    title: "Unit 14 · Time management",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "Everyone has the same number of hours in the day. As a student, it never really seems like there's enough time to do the things you want to do, let alone the things you have to do, right? What are the best time management tips for students that can help with this?",
        evidence: {
          support: [
            "the same number of hours in the day",
            "never really seems like there's enough time"
          ],
          distract: ["time management tips for students"]
        }
      },
      {
        n: 2,
        text:
          "My first tip is to set a schedule. As they used to say, \"Pencil it in.\" Sure, we've come a long way from relying on agenda books, but schedulers and agendas (digital or print) can play a huge role in how we manage time daily. You can either be really serious about scheduling by breaking your time into 15-30-minute blocks and outlining what you'll be doing, or a little more lenient by roughly planning your days in advance. But make sure you put in time for family, jobs, and, most importantly, leisure. If you are under pressure, ask for help from your friends and family with your other chores. You may be surprised just how happy they are to help so you can succeed.",
        evidence: {
          support: [
            "put in time for family, jobs, and, most importantly, leisure",
            "ask for help from your friends and family with your other chores"
          ],
          distract: ["15-30-minute blocks"]
        }
      },
      {
        n: 3,
        text:
          "It is important to set realistic goals. Our society tells us to aim high and \"shoot for the stars, and if you fall, you land on the clouds.\" But sometimes, it makes more sense to set realistic and smaller goals so that you can pass those hurdles and gain momentum to accomplish bigger goals. In my opinion, slow progress is better than no progress, and by being able to complete the small steps, you're making collective moves to accomplish your long-term goals. This method also works to manage time because you can't see so far into the future. By setting up your goals day in and day out, you're creating good habits that are within your control that accumulate over time to cause big changes. For example, if you want to run a marathon, you're going to start training daily with just a few miles and build up from there. In that same manner, you can train your brain and mind to grow stamina for studying. If you want to learn a new language, you can do daily lessons, and over time, you'll realize how much you've learned as all the short lessons accumulate.",
        evidence: {
          support: [
            "set realistic and smaller goals",
            "slow progress is better than no progress"
          ],
          distract: [
            "run a marathon",
            "learn a new language"
          ]
        }
      },
      {
        n: 4,
        text:
          "It may sound too simple, but it really works: wake up early. Begin by going to bed at the usual time, then wake up at 5:30 a.m. You may struggle the first morning, but make sure you get up. Go to sleep early that night, and again wake up at 5:30 a.m. the next day. After that, your body clock will reset, and your new wake-up time will be easy. By setting that alarm clock for the early hours of the morning, you're setting up your day to maximize your time.",
        evidence: {
          support: [
            "wake up early",
            "your body clock will reset"
          ],
          distract: ["maximize your time"]
        }
      },
      {
        n: 5,
        text:
          "When you're up early, you rush less, and in turn, stress less. Since the body and mind are getting up from a fresh night's sleep, it's the best time to get all your complex tasks out of the way so that you can be productive and set the tone for your day.",
        evidence: {
          support: [
            "you rush less, and in turn, stress less",
            "get all your complex tasks out of the way"
          ],
          distract: ["set the tone for your day"]
        }
      },
      {
        n: 6,
        text:
          "Waking up early has a lot of other benefits, too. For one, you're up before most other people, so it automatically helps to eliminate distractions. It also gives you the time to exercise and get some \"me time\" before all your other commitments take centre stage.",
        evidence: {
          support: [
            "eliminate distractions",
            "time to exercise",
            "me time"
          ],
          distract: ["take centre stage"]
        }
      },
      {
        n: 7,
        text:
          "Distractions are everywhere, especially the digital kinds. There are many apps that can help lock you out of the internet if you can't help but check your apps while trying to work or study. And if you are not ready to install another app or software, try leaving your phone in a different room and create a dedicated space where you will only work. This isn't just a good idea when you're busy working—it's good practice when you're with friends and family because you can truly be present with them.",
        evidence: {
          support: [
            "lock you out of the internet",
            "leaving your phone in a different room"
          ],
          distract: ["truly be present with them"]
        }
      },
      {
        n: 8,
        text:
          "Time management matters, especially when you are trying to fit a lot into your busy life. Even learning a few basics is valuable: time is precious, so don't waste it on tasks that add no value. As a student juggling many responsibilities, small habits can do wonders—make every minute count toward something that matters to you.",
        evidence: {
          support: [
            "time is precious",
            "make every minute count"
          ],
          distract: ["small habits can do wonders"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "What advice does the author give about preparing a schedule?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "Ask your friends to look through it."
          },
          {
            num: 2,
            text: "Always break your time into small periods."
          },
          {
            num: 3,
            text: "Use electronic devices for scheduling."
          },
          {
            num: 4,
            text: "Plan time for enjoyable activities."
          }
        ],
        explainRu:
          "Явно: закладывай время на семью, работы и <strong>leisure</strong> — т.е. и на отдых/приятное. Друзьям поручают <strong>chores</strong>, а не «проверить расписание»; блоки по 15–30 минут — <strong>лишь один из</strong> стилей («either … or more lenient»); планер может быть и бумажным, не только «электроника» как обязательство."
      },
      {
        examNum: 13,
        prompt:
          "The word <strong>lenient</strong> in &ldquo;or a little more lenient by roughly planning&rdquo; (paragraph 2) is closest in meaning to …",
        key: 3,
        choices: [
          { num: 1, text: "positive." },
          { num: 2, text: "truthful." },
          { num: 3, text: "relaxed." },
          { num: 4, text: "modest." }
        ],
        explainRu:
          "Противопоставление: либо жёсткая сетка по минутам, либо <strong>примерное</strong> планирование — это более <strong>свободный, мягкий</strong> режим → <strong>relaxed</strong>."
      },
      {
        examNum: 14,
        prompt:
          "The author uses the quote &ldquo;shoot for the stars, and if you fall, you land on the clouds&rdquo; in paragraph 3 to …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "oppose setting unrealistic big goals."
          },
          {
            num: 2,
            text: "show that planning is the key to success."
          },
          {
            num: 3,
            text: "inspire the reader to set better goals."
          },
          {
            num: 4,
            text: "share tips how to achieve success."
          }
        ],
        explainRu:
          "Цитата от общества про «целься в звёзды», сразу контраст <strong>But sometimes … realistic and smaller goals</strong> — автор не отменяет мечты, но вводит оговорку против одной лишь гигантомании без реалистичных шагов."
      },
      {
        examNum: 15,
        prompt:
          "The author compares running a marathon with learning a new language because …",
        key: 4,
        choices: [
          {
            num: 1,
            text:
              "many people want to accomplish one of these things."
          },
          {
            num: 2,
            text:
              "you need to train your brain for both types of activities."
          },
          {
            num: 3,
            text:
              "people who do any of these are good at time management."
          },
          {
            num: 4,
            text:
              "they both need an ability to work hard over a long period of time."
          }
        ],
        explainRu:
          "Оба примера — ежедневные короткие шаги, <strong>build up</strong> / <strong>accumulate over time</strong>; это именно <strong>дистанция и постоянство</strong>, а не «все хотят марафон» или «оба только про мозг»."
      },
      {
        examNum: 16,
        prompt:
          "Which advantage of getting up early is <strong>NOT</strong> mentioned in the text?",
        key: 2,
        choices: [
          { num: 1, text: "Doing sport." },
          { num: 2, text: "Avoiding rush hour." },
          { num: 3, text: "Enjoying yourself." },
          { num: 4, text: "Using time effectively." }
        ],
        explainRu:
          "Есть <strong>exercise</strong>, <strong>me time</strong>, меньше суеты и больше «максимума» времени; формулировки про «час пик / пробки» как отдельный плюс <strong>нет</strong> (есть <strong>rush less</strong> — не то же самое, что rush hour)."
      },
      {
        examNum: 17,
        prompt:
          "According to the text, one way to deal with distractions is to …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "avoid keeping your phone close by."
          },
          {
            num: 2,
            text: "work in a separate room with no internet."
          },
          {
            num: 3,
            text: "separate family time and working time."
          },
          {
            num: 4,
            text: "uninstall distracting applications."
          }
        ],
        explainRu:
          "Прямой совет: <strong>leaving your phone in a different room</strong>. Про «отдельную комнату без интернета» текст не утверждает; вариант (4) перекручивает идею приложений-блокировщиков (не обязательно удаление)."
      },
      {
        examNum: 18,
        prompt: "The main goal of the article is to …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "find the most effective time management rule."
          },
          {
            num: 2,
            text: "educate students about time management."
          },
          {
            num: 3,
            text:
              "share the author's experience of time management."
          },
          {
            num: 4,
            text:
              "analyse the reasons why students lack time."
          }
        ],
        explainRu:
          "Набор универсальных советов (расписание, цели, ранний подъём, фокус), а не поиск одного «самого эффективного правила», не автобиография и не разбор причин нехватки времени как главная линия."
      }
    ],

    quickPhrases: [
      { en: "time management", ru: "управление временем" },
      { en: "let alone", ru: "не говоря уж о…" },
      { en: "Pencil it in.", ru: "«Запиши карандашом» — зафиксируй время" },
      { en: "lenient schedule", ru: "более свободное планирование" },
      { en: "leisure", ru: "досуг, отдых" },
      { en: "realistic goals", ru: "реалистичные цели" },
      { en: "gain momentum", ru: "набрать инерцию, разгон" },
      { en: "body clock", ru: "биоритмы, «внутренние часы»" },
      { en: "set the tone for your day", ru: "задать тон дню" },
      { en: "take centre stage", ru: "выйти на первый план (о делах)" },
      { en: "eliminate distractions", ru: "убрать отвлечения" },
      { en: "dedicated space", ru: "отдельное место только для работы" },
      { en: "be present with someone", ru: "быть по-настоящему с человеком (не в телефоне)" }
    ],

    tapPhrases: [
      { en: "let alone the things you have to do", ru: "не говоря о том, что нужно сделать" },
      { en: "schedulers and agendas (digital or print)", ru: "планеры в любом формате" },
      { en: "breaking your time into 15-30-minute blocks", ru: "дробить день на короткие блоки" },
      { en: "a little more lenient by roughly planning your days in advance", ru: "мягче — примерно наперёд" },
      { en: "most importantly, leisure", ru: "важнее всего — досуг" },
      { en: "ask for help from your friends and family with your other chores", ru: "попросить близких помочь по дому" },
      { en: "set realistic and smaller goals", ru: "ставить реалистичные малые цели" },
      { en: "slow progress is better than no progress", ru: "медленно, но лучше, чем никак" },
      { en: "good habits that are within your control", ru: "привычки под твоим контролем" },
      { en: "short lessons accumulate", ru: "короткие уроки накапливаются" },
      { en: "your body clock will reset", ru: "биоритмы перестроятся" },
      { en: "maximize your time", ru: "выжать больше из времени" },
      { en: "you rush less, and in turn, stress less", ru: "меньше суеты — меньше стресса" },
      { en: "get all your complex tasks out of the way", ru: "сразу взять сложные задачи" },
      { en: "time to exercise and get some \"me time\"", ru: "время на спорт и на себя" },
      { en: "lock you out of the internet", ru: "блокируют доступ в сеть" },
      { en: "leaving your phone in a different room", ru: "оставить телефон в другой комнате" },
      { en: "make every minute count", ru: "пусть каждая минута работает на тебя" }
    ],

    tapLexicon: [
      { en: "schedule", ru: "расписание" },
      { en: "pressure", ru: "давление, нагрузка" },
      { en: "chores", ru: "домашние дела" },
      { en: "hurdles", ru: "препятствия, рубежи" },
      { en: "stamina", ru: "выносливость" },
      { en: "productive", ru: "продуктивный" },
      { en: "commitments", ru: "обязательства" },
      { en: "digital", ru: "цифровой" },
      { en: "dedicated", ru: "специально выделенный" },
      { en: "juggling", ru: "жонглируя (делами)" },
      { en: "valuable", ru: "ценный" },
      { en: "precious", ru: "драгоценный (о времени)" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
