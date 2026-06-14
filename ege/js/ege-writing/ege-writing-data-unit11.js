(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u11",
      unitLabel: "Unit 11",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 11: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Molly:",
      promptMeta: {
        from: "Molly@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Presents"
      },
      promptRu:
        "...It is nearly Christmas and I am going shopping for presents. What do Russian teenagers buy as presents? What are the advantages of shopping right before holidays? Do you prefer to get practical or decorative presents, and why?\nMy parents went on holiday last week...",
      instructions: [
        "Write an email to Molly.",
        "In your message: answer her questions;",
        "ask 3 questions about the place her parents went to.",
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
        "Обращение (Dear Molly, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: what Russian teenagers buy as presents",
        "Ответ: advantages of shopping before holidays",
        "Ответ: practical or decorative presents + why",
        "3 вопроса к Molly про the place her parents went to",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Molly,`",
        "Я ответил(а) на вопросы Molly про presents",
        "Я задал(а) 3 вопроса back про the place her parents went to",
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
          label: "What do Russian teenagers buy as presents?",
          keywords: [
            "russian teenagers",
            "buy as presents",
            "presents",
            "books",
            "clothes",
            "toys",
            "sweets",
            "chocolate",
            "games",
            "gadgets"
          ]
        },
        {
          id: "q2",
          label: "What are the advantages of shopping right before holidays?",
          keywords: [
            "advantages",
            "shopping",
            "right before holidays",
            "before holidays",
            "sales",
            "discounts",
            "festive",
            "atmosphere",
            "because"
          ]
        },
        {
          id: "q3",
          label:
            "Do you prefer to get practical or decorative presents, and why?",
          keywords: [
            "prefer",
            "practical",
            "decorative",
            "presents",
            "why",
            "because",
            "useful",
            "beautiful"
          ]
        }
      ],
      questionBackHint: "the place her parents went to",
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
        "Have",
        "Has"
      ],
      requiredBlocks: {
        greeting: ["dear molly"],
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
          "Dear Molly,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "Russian teenagers often buy books, sweets and small gadgets as presents.",
          "One advantage of shopping right before holidays is that shops have sales and a festive atmosphere.",
          "I prefer to get practical presents because I can use them every day."
        ],
        questions: [
          "Where did your parents go on holiday?",
          "What was the weather like there?",
          "Did they enjoy the trip?"
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
            "1. Dear Molly,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Molly про presents.",
            "4. 3 вопроса о the place her parents went to.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Molly",
          title: "Что нужно раскрыть",
          lines: [
            "Перечислите, что Russian teenagers обычно покупают as presents.",
            "Назовите advantages shopping right before holidays.",
            "Скажите, prefer ли вы practical or decorative presents, и объясните why.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Molly",
          lines: [
            "Нужно задать ровно 3 вопроса про the place her parents went to.",
            "Примеры: Where did they go? What did they see? Was it warm?",
            "Вопросы должны быть именно про holiday place, не про Christmas shopping."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как реально набираются баллы",
          lines: [
            "Максимум за Task 37 - 6 первичных баллов.",
            "РКЗ - до 2 баллов: ответы на 3 вопроса + 3 questions back.",
            "Организация текста - до 2 баллов: формат email, логика, абзацы, обращение и подпись.",
            "Языковое оформление - до 2 баллов: лексика, грамматика, орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "presents",
        "christmas",
        "shopping",
        "holidays",
        "practical",
        "decorative",
        "molly",
        "parents",
        "teenagers"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear molly\\b(?!,)",
          flags: "i",
          msg: "После `Dear Molly` нужна запятая."
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
          pattern: "\\bgo to shopping\\b",
          flags: "i",
          msg: "Нужно `go shopping`, а не `go to shopping`."
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
        "Dear Molly,\n\nThanks for your email. It was great to hear from you. I hope you find nice presents for Christmas!\n\nRussian teenagers often buy books, sweets and small gadgets as presents. One advantage of shopping right before holidays is that shops have sales and a festive atmosphere. I prefer to get practical presents because I can use them every day.\n\nBy the way, where did your parents go on holiday? What was the weather like there? Did they enjoy the trip?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u11-small-towns",
      unitLabel: "Unit 11",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 11: essay-project on moving to small towns. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on why people in Zetland move to small towns. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "Why have you moved to a small town?",
      promptTable: {
        headers: ["Reasons", "Number of respondents (%)"],
        rows: [
          ["A sense of community", "37"],
          ["Better ecology", "28"],
          ["Good childcare facilities", "15"],
          ["No traffic jams", "12"],
          ["Big houses", "8"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with moving to a small town and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the advantages of living in small towns."
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
        "A problem connected with moving to a small town",
        "A logical solution",
        "Your opinion on the advantages of living in small towns",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with moving to a small town",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о advantages of living in small towns",
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
        "zetland",
        "small towns",
        "small town",
        "move"
      ],
      reportFactItems: [
        {
          label: "37% moved for a sense of community",
          keywords: ["37", "sense of community", "community"]
        },
        {
          label: "28% moved for better ecology",
          keywords: ["28", "better ecology", "ecology", "environment"]
        },
        {
          label: "15% moved for good childcare facilities",
          keywords: ["15", "childcare", "childcare facilities"]
        },
        {
          label: "12% moved because of no traffic jams",
          keywords: ["12", "traffic jams", "no traffic", "traffic"]
        },
        {
          label: "8% moved for big houses",
          keywords: ["8", "big houses", "house", "houses"]
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
        "slightly higher",
        "far more popular"
      ],
      reportProblemKeywords: [
        "problem",
        "issue",
        "job",
        "jobs",
        "work",
        "entertainment",
        "boring",
        "transport",
        "services",
        "hospital",
        "school",
        "isolated",
        "fewer"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "people should",
        "it can be solved",
        "one way to solve it",
        "remote work",
        "internet",
        "travel",
        "plan",
        "visit",
        "online"
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
        "advantages",
        "small towns",
        "small town",
        "living"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about why people in Zetland move to small towns.",
          "The project is about reasons for choosing a quieter place to live."
        ],
        facts: [
          "According to the table, 37% of respondents ...",
          "Another 28% moved because of ...",
          "Only 8% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "A sense of community is far more important than big houses."
        ],
        problem: [
          "One problem that can arise with moving to a small town is fewer job opportunities and entertainment.",
          "People may also find it difficult to get good medical or educational services."
        ],
        solution: [
          "This problem can be solved by working remotely and travelling to the city when necessary.",
          "They should also use the internet to stay in touch with friends and find local activities."
        ],
        opinion: [
          "In my opinion, living in small towns has several advantages.",
          "I believe people there enjoy cleaner air, less stress and a stronger sense of community."
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
            "4. A problem connected with moving to a small town + a solution.",
            "5. Your opinion on the advantages of living in small towns.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 37%, 28% и 15% / 12%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте причины: 37% is higher than 28%.",
            "Можно сравнить community с big houses (8%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: fewer jobs, boredom, transport, services.",
            "Предложите solution: remote work, travel to city, online activities.",
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
        "small towns",
        "community",
        "ecology",
        "childcare",
        "traffic",
        "houses",
        "move",
        "living",
        "survey",
        "table"
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
        "The table shows the results of a survey about why people in Zetland move to small towns. The project is important because more and more families are thinking about where it is better to live.\n\nAccording to the table, 37% of respondents moved for a sense of community, which makes this the most common reason. Another 28% chose a small town because of better ecology, while 15% were attracted by good childcare facilities. By contrast, only 12% mention no traffic jams and just 8% want big houses.\n\nIt is clear that a sense of community is much more important than big houses. The figure for better ecology is also noticeably higher than the percentage for no traffic jams.\n\nOne problem that can arise with moving to a small town is fewer job opportunities and entertainment. People may also find it difficult to get good medical or educational services. This problem can be solved by working remotely and travelling to the city when necessary.\n\nIn my opinion, living in small towns has several advantages. I believe people there enjoy cleaner air, less stress and a stronger sense of community than in big cities."
    },
    {
      id: "ege-project-task38-u11-film-genres",
      unitLabel: "Unit 11",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 11: essay-project on film genres. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most popular film genres among teenagers in Zetland. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What is your favourite film genre?",
      promptChart: [
        ["Fantasy", "41"],
        ["Thriller", "28"],
        ["Adventure", "18"],
        ["Comedy", "10"],
        ["Melodrama", "3"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with selecting a film to watch and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the most interesting film genre for you."
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
        "A problem connected with selecting a film to watch",
        "A practical solution",
        "Your opinion on the most interesting film genre for you",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with selecting a film to watch",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the most interesting film genre for me",
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
        "film genres",
        "films",
        "movies",
        "zetland",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "41% choose fantasy as their favourite genre",
          keywords: ["41", "fantasy"]
        },
        {
          label: "28% choose thriller as their favourite genre",
          keywords: ["28", "thriller", "thrillers"]
        },
        {
          label: "18% choose adventure as their favourite genre",
          keywords: ["18", "adventure"]
        },
        {
          label: "10% choose comedy as their favourite genre",
          keywords: ["10", "comedy", "comedies"]
        },
        {
          label: "3% choose melodrama as their favourite genre",
          keywords: ["3", "melodrama", "melodramas"]
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
        "slightly higher",
        "far more popular"
      ],
      reportProblemKeywords: [
        "problem",
        "issue",
        "choose",
        "select",
        "disagree",
        "different tastes",
        "too many",
        "boring",
        "long",
        "reviews",
        "argument",
        "friends"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "people should",
        "it can be solved",
        "one way to solve it",
        "discuss",
        "vote",
        "reviews",
        "trailer",
        "take turns",
        "compromise"
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
        "most interesting",
        "film genre",
        "genre",
        "favourite"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about the most popular film genres among teenagers in Zetland.",
          "The project is about teenagers' favourite types of films."
        ],
        facts: [
          "According to the chart, 41% of respondents ...",
          "Another 28% prefer ...",
          "Only 3% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Fantasy is far more popular than melodrama."
        ],
        problem: [
          "One problem that can arise with selecting a film to watch is disagreement between friends with different tastes.",
          "People may also spend too much time reading reviews and still cannot decide."
        ],
        solution: [
          "This problem can be solved by watching trailers together and taking turns to choose a film.",
          "They should also read short reviews and vote for the most interesting option."
        ],
        opinion: [
          "In my opinion, adventure is the most interesting film genre for me.",
          "I believe adventure films are exciting and help me relax after a busy day at school."
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
            "4. A problem connected with selecting a film + a solution.",
            "5. Your opinion on the most interesting film genre for you.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 41%, 28% и 18% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему выбора фильма: different tastes, too many options, cannot decide.",
            "Предложите solution: trailers, vote, take turns, read reviews.",
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
        "film",
        "films",
        "genre",
        "genres",
        "fantasy",
        "thriller",
        "adventure",
        "comedy",
        "melodrama",
        "teenagers",
        "survey"
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
          pattern: "\\bfilm genre are\\b",
          flags: "i",
          msg: "Единственное число: `a film genre is`."
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
        "The pie chart shows the results of a survey about the most popular film genres among teenagers in Zetland. The project is important because films are one of the most popular forms of entertainment for young people.\n\nAccording to the chart, 41% of teenagers choose fantasy as their favourite genre, which makes it the most popular choice. Another 28% prefer thrillers, while 18% enjoy adventure films. By contrast, only 10% like comedies and just 3% choose melodramas.\n\nIt is clear that fantasy is much more popular than melodrama. The figure for thrillers is also noticeably higher than the percentage for comedy.\n\nOne problem that can arise with selecting a film to watch is disagreement between friends with different tastes. People may also spend too much time reading reviews and still cannot decide. This problem can be solved by watching trailers together and taking turns to choose a film.\n\nIn my opinion, adventure is the most interesting film genre for me. I believe adventure films are exciting and help me relax after a busy day at school."
    }
  );
})(typeof window !== "undefined" ? window : this);
