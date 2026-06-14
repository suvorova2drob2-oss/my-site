(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u2",
      unitLabel: "Unit 2",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 2: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Thomas:",
      promptMeta: {
        from: "Thomas@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Chocolate..."
      },
      promptRu:
        "I went to a chocolate factory last week. I loved seeing how they produced chocolate! What is your favourite kind of chocolate? Is chocolate a popular gift in Russia? Why, or why not? Have you ever received or given a box of chocolates as a birthday gift?\nMy cousin got a pet dog yesterday...",
      instructions: [
        "Write an email to Thomas.",
        "In your message: answer Thomas's questions;",
        "ask 3 questions about his cousin's pet.",
        "Write 100-140 words.",
        "Remember the rules of email writing."
      ],
      fieldNote:
        "Сюда ученик вставляет или пишет свой email. Пример ниже открывается отдельно и это поле не заполняет.",
      wordLimits: {
        targetMin: 100,
        targetMax: 140,
        hardMin: 90,
        hardMax: 154
      },
      structurePanelTitle: "Структура email",
      structureChecklist: [
        "Обращение (Dear Thomas, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: favourite kind of chocolate",
        "Ответ: chocolate as a gift in Russia + why / why not",
        "Ответ: box of chocolates as a birthday gift",
        "3 вопроса к Thomas про cousin's pet dog",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Thomas,`",
        "Я ответил(а) на вопросы Thomas про шоколад",
        "Я задал(а) 3 вопроса back про `cousin's pet`",
        "Я добавил(а) closing phrase и подпись",
        "Я проверил(а), что объём около `100-140` слов",
        "Я перечитал(а) текст на grammar / spelling / punctuation"
      ],
      detectLegend: [
        { role: "greeting", label: "Обращение" },
        { role: "opening", label: "Opening" },
        { role: "answer", label: "Ответы" },
        { role: "question", label: "Questions back" },
        { role: "closing", label: "Closing" },
        { role: "signoff", label: "Подпись" }
      ],
      promptQuestions: [
        {
          id: "q1",
          label: "What is your favourite kind of chocolate?",
          keywords: [
            "favourite kind",
            "favorite kind",
            "favourite chocolate",
            "favorite chocolate",
            "dark chocolate",
            "milk chocolate",
            "white chocolate",
            "i like",
            "i love"
          ]
        },
        {
          id: "q2",
          label: "Is chocolate a popular gift in Russia?",
          keywords: [
            "popular gift",
            "gift in russia",
            "in russia",
            "russians",
            "people in russia",
            "very popular",
            "quite popular",
            "not very popular"
          ]
        },
        {
          id: "q3",
          label: "Why, or why not?",
          keywords: [
            "because",
            "that's why",
            "the reason",
            "so people",
            "as a result",
            "since"
          ]
        },
        {
          id: "q4",
          label: "Have you ever received or given a box of chocolates as a birthday gift?",
          keywords: [
            "box of chocolates",
            "birthday gift",
            "birthday present",
            "received",
            "given",
            "gave",
            "got",
            "never",
            "once",
            "last year"
          ]
        }
      ],
      questionBackHint: "his cousin's pet",
      questionBackKeywords: [
        "What",
        "Why",
        "When",
        "Where",
        "Who",
        "How",
        "Did",
        "Does",
        "Do",
        "Is",
        "Was",
        "Were",
        "Have"
      ],
      requiredBlocks: {
        greeting: ["dear thomas"],
        thanks: [
          "thanks for your email",
          "thank you for your email",
          "thanks for writing",
          "it was great to hear from you"
        ],
        closing: [
          "write back soon",
          "hope to hear from you soon",
          "best wishes",
          "all the best",
          "take care"
        ],
        signoff: ["best wishes", "all the best", "yours", "take care"]
      },
      usefulPhrases: {
        opening: [
          "Dear Thomas,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "My favourite kind of chocolate is ...",
          "In Russia, chocolate is a popular gift because ...",
          "Yes, I have received a box of chocolates as a birthday gift.",
          "No, I have never given chocolates as a birthday present."
        ],
        questions: [
          "What kind of dog did your cousin get?",
          "What is the dog's name?",
          "How old is the puppy?"
        ],
        closing: [
          "Anyway, I have to go now.",
          "Write back soon.",
          "Best wishes,",
          "Your Russian friend"
        ]
      },
      helpCards: [
        {
          id: "structure",
          label: "Структура",
          title: "Что должно быть в письме",
          lines: [
            "1. Dear Thomas,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на вопросы Thomas про шоколад.",
            "4. 3 вопроса о pet dog у его cousin.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Thomas",
          title: "Что нужно раскрыть",
          lines: [
            "Назовите любимый вид шоколада (dark / milk / white и т.д.).",
            "Скажите, популярен ли шоколад как подарок в России, и объясните почему.",
            "Ответьте, дарили или получали ли вы коробку конфет на день рождения.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Thomas",
          lines: [
            "Нужно задать ровно 3 вопроса про pet dog у cousin.",
            "Примеры: What kind of dog is it? What's its name? How old is it?",
            "Вопросы должны быть именно к pet, не к chocolate factory."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как реально набираются баллы",
          lines: [
            "Максимум за Task 37 - 6 первичных баллов.",
            "РКЗ - до 2 баллов: ответы на вопросы + 3 questions back.",
            "Организация текста - до 2 баллов: формат email, логика, абзацы, обращение и подпись.",
            "Языковое оформление - до 2 баллов: лексика, грамматика, орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "chocolate",
        "factory",
        "gift",
        "russia",
        "birthday",
        "box of chocolates",
        "cousin",
        "pet",
        "dog",
        "thomas"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear thomas\\b(?!,)",
          flags: "i",
          msg: "После `Dear Thomas` нужна запятая."
        },
        {
          pattern: "\\bthanks for your letter\\b",
          flags: "i",
          msg: "В задании email, поэтому естественнее `Thanks for your email`."
        },
        {
          pattern: "\\bi very like\\b",
          flags: "i",
          msg: "Лучше `I like ... very much`, а не `I very like`."
        },
        {
          pattern: "\\bfavourite kind of chocolate is dark chocolate\\b",
          flags: "i",
          msg: "Можно короче: `My favourite chocolate is dark chocolate`."
        },
        {
          pattern: "\\bchocolates is\\b",
          flags: "i",
          msg: "`Chocolate` как массовое существительное: `chocolate is`, не `chocolates is`."
        }
      ],
      criteria: [
        { id: "rkz", label: "РКЗ · Решение коммуникативной задачи", max: 2 },
        { id: "org", label: "Организация текста", max: 2 },
        { id: "lang", label: "Языковое оформление", max: 2 }
      ],
      aiResponseSchema: {
        formalCompliance: {
          wordCountStatus: "below|target|above|critical",
          answeredPromptQuestions: 0,
          questionBackCount: 0,
          structureMissing: ["string"]
        },
        criteria: {
          RKZ: { score: 0, max: 2, comment: "..." },
          Organization: { score: 0, max: 2, comment: "..." },
          Language: { score: 0, max: 2, comment: "..." }
        },
        total: 0
      },
      sampleEssay:
        "Dear Thomas,\n\nThanks for your email. It was great to hear from you. Your visit to the chocolate factory sounds amazing!\n\nMy favourite kind of chocolate is dark chocolate with nuts. In Russia, chocolate is quite a popular gift, especially on holidays, because it is easy to buy and most people enjoy it. Yes, I have received a box of chocolates as a birthday gift from my aunt last year.\n\nBy the way, what kind of dog did your cousin get? What is its name? How old is the puppy?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u2-graduation",
      unitLabel: "Unit 2",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 2: essay-project on high school graduation celebrations. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on how Zetland teenagers would like to celebrate high school graduation. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "How would you like to celebrate high school graduation?",
      promptTable: {
        headers: ["Ways of celebrating", "Number of respondents (%)"],
        rows: [
          ["A class trip to a famous city", "35"],
          ["A party in a café with dances and a DJ", "34"],
          ["Having a picnic", "17"],
          ["Just getting my certificate and celebrating with my family", "9"],
          ["Attending a festival or a concert", "5"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with celebrating high school graduation and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the best way to celebrate high school graduation."
      ],
      fieldNote:
        "Сюда ученик пишет essay-project по таблице. Пример ниже открывается отдельно и это поле не заполняет.",
      wordLimits: {
        targetMin: 200,
        targetMax: 250,
        hardMin: 180,
        hardMax: 275
      },
      structurePanelTitle: "План essay-project",
      structureChecklist: [
        "Opening statement about the project topic",
        "2-3 facts from the table",
        "1-2 comparisons with comment",
        "A problem connected with celebrating high school graduation",
        "A logical solution",
        "Your opinion on the best way to celebrate graduation",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную с celebrating graduation",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о best way to celebrate graduation",
        "Я разделил(а) текст ровно на 5 абзацев",
        "Я проверил(а), что объём около `200-250` слов"
      ],
      detectLegend: [
        { role: "opening", label: "Opening" },
        { role: "answer", label: "Facts" },
        { role: "question", label: "Comparisons" },
        { role: "closing", label: "Problem" },
        { role: "solution", label: "Solution" },
        { role: "signoff", label: "Opinion" }
      ],
      reportOpeningKeywords: [
        "the table shows",
        "the survey shows",
        "the survey question",
        "the data show",
        "the table presents",
        "the project is about",
        "zetland teenagers",
        "high school graduation",
        "celebrate graduation",
        "graduation"
      ],
      reportFactItems: [
        {
          label: "35% choose a class trip to a famous city",
          keywords: ["35", "class trip", "famous city", "trip to a famous city"]
        },
        {
          label: "34% prefer a party in a café with dances and a DJ",
          keywords: ["34", "party in a café", "party in a cafe", "dances", "dj"]
        },
        {
          label: "17% choose having a picnic",
          keywords: ["17", "having a picnic", "picnic"]
        },
        {
          label: "9% want just getting their certificate and celebrating with family",
          keywords: ["9", "certificate", "celebrating with my family", "with my family"]
        },
        {
          label: "5% would like to attend a festival or a concert",
          keywords: ["5", "festival", "concert", "attending a festival"]
        }
      ],
      reportComparisonKeywords: [
        "more than",
        "less than",
        "while",
        "whereas",
        "compared with",
        "in comparison",
        "higher than",
        "lower than",
        "twice as",
        "almost equally",
        "slightly higher",
        "far more popular"
      ],
      reportProblemKeywords: [
        "problem",
        "issue",
        "overspend",
        "too expensive",
        "disagreement",
        "conflict",
        "stress",
        "arguments",
        "expectations",
        "disappointed",
        "unsafe",
        "drunk"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "students should",
        "it can be solved",
        "one way to solve it",
        "discuss",
        "vote",
        "budget",
        "share the costs"
      ],
      reportNeedSolution: true,
      reportOpinionKeywords: [
        "in my opinion",
        "i think",
        "i believe",
        "to my mind",
        "as for me",
        "personally",
        "to sum up",
        "in conclusion",
        "the best way"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about how Zetland teenagers would like to celebrate high school graduation.",
          "The project is about graduation celebrations among teenagers."
        ],
        facts: [
          "According to the table, 35% of respondents ...",
          "Another 34% prefer ...",
          "Only 5% would like to ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "A class trip and a café party are almost equally popular."
        ],
        problem: [
          "One problem that can arise with celebrating graduation is overspending and disagreement within the class.",
          "As a result, some students may feel disappointed or left out."
        ],
        solution: [
          "This problem can be solved if students discuss the budget in advance and vote on the best option.",
          "They should also share the costs fairly and listen to everyone's opinion."
        ],
        opinion: [
          "In my opinion, the best way to celebrate high school graduation is a class trip.",
          "I believe it gives teenagers a chance to create lasting memories together."
        ]
      },
      helpCards: [
        {
          id: "structure",
          label: "План",
          title: "Что должно быть в essay-project",
          lines: [
            "1. Opening statement about the project topic.",
            "2. 2-3 facts from the table with percentages.",
            "3. 1-2 comparisons plus your short comment.",
            "4. A problem connected with celebrating graduation + a solution.",
            "5. Your opinion on the best way to celebrate graduation.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 35%, 34% и 17% / 9%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте варианты: 35% is slightly higher than 34%.",
            "Можно сравнить class trip / café party с picnic или family celebration.",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Нужно назвать проблему, связанную именно с celebrating graduation.",
            "Например: overspending, disagreement, stress, disappointment.",
            "Без solution можно потерять балл по K1."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как оценивается Task 38",
          lines: [
            "Максимум за Task 38 - 14 первичных баллов.",
            "K1 - решение коммуникативной задачи.",
            "K2 - организация текста.",
            "K3 - лексика.",
            "K4 - грамматика.",
            "K5 - орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "graduation",
        "high school",
        "celebrate",
        "teenagers",
        "survey",
        "table",
        "class trip",
        "party",
        "picnic",
        "certificate",
        "festival",
        "concert"
      ],
      commonMistakes: [
        {
          pattern: "\\bi think that in my opinion\\b",
          flags: "i",
          msg: "Не дублируйте opinion markers: достаточно одного `In my opinion`."
        },
        {
          pattern: "\\baccording to me\\b",
          flags: "i",
          msg: "Лучше `In my opinion`, а не `According to me`."
        },
        {
          pattern: "\\bthe table say\\b",
          flags: "i",
          msg: "Нужно `the table shows` / `the data show`."
        }
      ],
      criteria: [
        { id: "k1", label: "K1 · Решение коммуникативной задачи", max: 3 },
        { id: "k2", label: "K2 · Организация текста", max: 3 },
        { id: "k3", label: "K3 · Лексика", max: 3 },
        { id: "k4", label: "K4 · Грамматика", max: 3 },
        { id: "k5", label: "K5 · Орфография и пунктуация", max: 2 }
      ],
      aiResponseSchema: {
        formalCompliance: {
          wordCountStatus: "below|target|above|critical",
          factsUsed: 0,
          comparisons: 0,
          problemPresent: true,
          solutionPresent: true,
          opinionPresent: true
        },
        criteria: {
          K1: { score: 0, max: 3, comment: "..." },
          K2: { score: 0, max: 3, comment: "..." },
          K3: { score: 0, max: 3, comment: "..." },
          K4: { score: 0, max: 3, comment: "..." },
          K5: { score: 0, max: 2, comment: "..." }
        },
        total: 0
      },
      sampleEssay:
        "The table shows the results of a survey about how Zetland teenagers would like to celebrate high school graduation. The project is important because graduation is a major event in teenagers' lives and their choice of celebration may reflect their values and priorities.\n\nAccording to the table, 35% of respondents would like to celebrate with a class trip to a famous city, which is the most popular option. Another 34% prefer a party in a café with dances and a DJ, while 17% choose having a picnic. By contrast, only 9% want just getting their certificate and celebrating with their family, and just 5% would like to attend a festival or a concert.\n\nIt is clear that a class trip and a café party are almost equally popular, and both figures are much higher than the percentage for a family celebration at home. The picnic option is also noticeably more popular than attending a festival or a concert.\n\nOne problem that can arise with celebrating high school graduation is overspending and disagreement within the class about how much money to spend and what to choose. This problem can be solved if students discuss the budget in advance, vote on the best option and share the costs fairly.\n\nIn my opinion, the best way to celebrate high school graduation is a class trip to a famous city. I believe it gives teenagers a chance to spend time together, create memories and mark the end of school in a special way."
    },
    {
      id: "ege-project-task38-u2-winter-outdoor",
      unitLabel: "Unit 2",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 2: essay-project on outdoor winter activities. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what outdoor winter activities Zetland children like the most. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What outdoor winter activity do you like the most?",
      promptChart: [
        ["Ice-skating", "37"],
        ["Playing snowballs", "33"],
        ["Making a snowman", "15"],
        ["Tobogganing", "10"],
        ["Skiing", "5"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with children spending time outdoors in the winter and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on how much time children should spend outdoors in different seasons."
      ],
      fieldNote:
        "Сюда ученик пишет essay-project по диаграмме. Пример ниже открывается отдельно и это поле не заполняет.",
      wordLimits: {
        targetMin: 200,
        targetMax: 250,
        hardMin: 180,
        hardMax: 275
      },
      structurePanelTitle: "План essay-project",
      structureChecklist: [
        "Opening statement about the project topic",
        "2-3 facts from the chart",
        "1-2 comparisons with comment",
        "A problem connected with children outdoors in winter",
        "A practical solution",
        "Your opinion on outdoor time in different seasons",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную с children outdoors in winter",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о том, сколько времени дети должны проводить на улице в разные сезоны",
        "Я разделил(а) текст ровно на 5 абзацев",
        "Я проверил(а), что объём около `200-250` слов"
      ],
      detectLegend: [
        { role: "opening", label: "Opening" },
        { role: "answer", label: "Facts" },
        { role: "question", label: "Comparisons" },
        { role: "closing", label: "Problem" },
        { role: "solution", label: "Solution" },
        { role: "signoff", label: "Opinion" }
      ],
      reportNeedSolution: true,
      reportOpeningKeywords: [
        "the pie chart shows",
        "the chart shows",
        "the survey shows",
        "the project is about",
        "outdoor winter activities",
        "zetland children",
        "like the most",
        "winter"
      ],
      reportFactItems: [
        {
          label: "37% prefer ice-skating",
          keywords: ["37", "ice-skating", "ice skating", "skating"]
        },
        {
          label: "33% enjoy playing snowballs",
          keywords: ["33", "playing snowballs", "snowballs", "snowball"]
        },
        {
          label: "15% like making a snowman",
          keywords: ["15", "making a snowman", "snowman"]
        },
        {
          label: "10% choose tobogganing",
          keywords: ["10", "tobogganing", "toboggan"]
        },
        {
          label: "5% prefer skiing",
          keywords: ["5", "skiing", "ski"]
        }
      ],
      reportComparisonKeywords: [
        "more than",
        "less than",
        "while",
        "whereas",
        "compared with",
        "in comparison",
        "higher than",
        "lower than",
        "twice as",
        "almost twice",
        "slightly more",
        "far more popular"
      ],
      reportProblemKeywords: [
        "problem",
        "issue",
        "hypothermia",
        "frostbite",
        "cold",
        "too cold",
        "slip",
        "fall",
        "icy",
        "ice",
        "injury",
        "hurt",
        "unwell",
        "sick",
        "unsafe"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "children should",
        "parents should",
        "it can be solved",
        "one way to solve it",
        "warm clothes",
        "hat",
        "gloves",
        "jacket",
        "take breaks",
        "supervision"
      ],
      reportOpinionKeywords: [
        "in my opinion",
        "i think",
        "i believe",
        "to my mind",
        "as for me",
        "personally",
        "to sum up",
        "in conclusion",
        "different seasons",
        "in summer",
        "in winter"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about what outdoor winter activities Zetland children like the most.",
          "The project is about children's favourite winter activities."
        ],
        facts: [
          "According to the chart, 37% of respondents ...",
          "Another 33% enjoy ...",
          "Only 5% prefer ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Ice-skating is far more popular than skiing."
        ],
        problem: [
          "One problem that can arise is hypothermia or injury on icy surfaces.",
          "Children may feel unwell if they stay outside too long without warm clothes."
        ],
        solution: [
          "This problem can be solved if children wear warm hats, gloves and jackets.",
          "They should also take regular breaks indoors and play under adult supervision."
        ],
        opinion: [
          "In my opinion, children should spend enough time outdoors in every season.",
          "I believe they can play outside more often in summer, while in winter shorter sessions are safer."
        ]
      },
      helpCards: [
        {
          id: "structure",
          label: "План",
          title: "Что должно быть в essay-project",
          lines: [
            "1. Opening statement about the project topic.",
            "2. 2-3 facts from the chart with percentages.",
            "3. 1-2 comparisons plus your short comment.",
            "4. A problem connected with children outdoors in winter + a solution.",
            "5. Your opinion on outdoor time in different seasons.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 37%, 33% и 15% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите реальную проблему: cold, hypothermia, slipping on ice, injury.",
            "Потом предложите solution: warm clothes, breaks indoors, supervision.",
            "Без solution можно потерять балл по K1."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как оценивается Task 38",
          lines: [
            "Максимум за Task 38 - 14 первичных баллов.",
            "K1 - решение коммуникативной задачи.",
            "K2 - организация текста.",
            "K3 - лексика.",
            "K4 - грамматика.",
            "K5 - орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "winter",
        "outdoor",
        "children",
        "ice-skating",
        "snowballs",
        "snowman",
        "tobogganing",
        "skiing",
        "survey",
        "chart",
        "seasons",
        "summer"
      ],
      commonMistakes: [
        {
          pattern: "\\baccording to me\\b",
          flags: "i",
          msg: "Лучше `In my opinion`, а не `According to me`."
        },
        {
          pattern: "\\bthe chart say\\b",
          flags: "i",
          msg: "Нужно `the chart shows`."
        },
        {
          pattern: "\\bchildren likes\\b",
          flags: "i",
          msg: "С `children` нужен глагол без `-s`: `children like`."
        }
      ],
      criteria: [
        { id: "k1", label: "K1 · Решение коммуникативной задачи", max: 3 },
        { id: "k2", label: "K2 · Организация текста", max: 3 },
        { id: "k3", label: "K3 · Лексика", max: 3 },
        { id: "k4", label: "K4 · Грамматика", max: 3 },
        { id: "k5", label: "K5 · Орфография и пунктуация", max: 2 }
      ],
      aiResponseSchema: {
        formalCompliance: {
          wordCountStatus: "below|target|above|critical",
          factsUsed: 0,
          comparisons: 0,
          problemPresent: true,
          solutionPresent: true,
          opinionPresent: true
        },
        criteria: {
          K1: { score: 0, max: 3, comment: "..." },
          K2: { score: 0, max: 3, comment: "..." },
          K3: { score: 0, max: 3, comment: "..." },
          K4: { score: 0, max: 3, comment: "..." },
          K5: { score: 0, max: 2, comment: "..." }
        },
        total: 0
      },
      sampleEssay:
        "The pie chart shows the results of a survey about what outdoor winter activities Zetland children like the most. The project is important because winter activities can influence children's health, mood and lifestyle.\n\nAccording to the chart, 37% of respondents prefer ice-skating, which makes it the most popular activity. Another 33% enjoy playing snowballs, while 15% like making a snowman. By contrast, only 10% choose tobogganing and just 5% prefer skiing.\n\nIt is clear that ice-skating is slightly more popular than playing snowballs, and both figures are much higher than the percentage for skiing. Making a snowman is also noticeably more popular than tobogganing.\n\nOne problem that can arise with children spending time outdoors in the winter is hypothermia or injury on icy surfaces. As a result, children may feel unwell or even get hurt if they stay outside too long without proper clothes. This problem can be solved if parents make sure children wear warm hats, gloves and jackets and take regular breaks indoors.\n\nIn my opinion, children should spend enough time outdoors in every season, but the amount should depend on the weather. I believe they can play outside more often in summer, while in winter shorter but regular outdoor sessions are the safest and the most enjoyable."
    }
  );
})(typeof window !== "undefined" ? window : this);
