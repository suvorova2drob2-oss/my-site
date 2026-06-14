(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u6",
      unitLabel: "Unit 6",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 6: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Wendy:",
      promptMeta: {
        from: "Wendy@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "End-of-the-year dance party..."
      },
      promptRu:
        "I am graduating from school this year and we are going to organise a big dance party at the end. What kind of a graduation party are you going to have? Is it held at school? Do parents attend these parties, why or why not?\nAlso, I can't wait to celebrate my graduation with my family...",
      instructions: [
        "Write an email to Wendy.",
        "In your message: answer her questions;",
        "ask 3 questions about celebrating her graduation with the family.",
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
        "Обращение (Dear Wendy, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: what kind of graduation party",
        "Ответ: is it held at school",
        "Ответ: do parents attend + why / why not",
        "3 вопроса к Wendy про celebrating graduation with family",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Wendy,`",
        "Я ответил(а) на вопросы Wendy про graduation party",
        "Я задал(а) 3 вопроса back про celebrating graduation with family",
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
          label: "What kind of a graduation party are you going to have?",
          keywords: [
            "graduation party",
            "kind of",
            "going to have",
            "dance party",
            "formal",
            "celebration",
            "we are going to",
            "we will have"
          ]
        },
        {
          id: "q2",
          label: "Is it held at school?",
          keywords: [
            "held at school",
            "at school",
            "in school",
            "school hall",
            "gym",
            "outside school",
            "not at school",
            "restaurant",
            "venue"
          ]
        },
        {
          id: "q3",
          label: "Do parents attend these parties, why or why not?",
          keywords: [
            "parents",
            "attend",
            "these parties",
            "why",
            "because",
            "do not",
            "don't",
            "usually",
            "sometimes",
            "invite"
          ]
        }
      ],
      questionBackHint: "celebrating her graduation with the family",
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
        "Will"
      ],
      requiredBlocks: {
        greeting: ["dear wendy"],
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
          "Dear Wendy,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "We are going to have a graduation party with music and dancing.",
          "It is usually held at school in the assembly hall.",
          "Parents sometimes attend because they want to congratulate us, but not all students invite them."
        ],
        questions: [
          "How are you going to celebrate your graduation with your family?",
          "Where will you go with them?",
          "Who else will be there?"
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
            "1. Dear Wendy,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Wendy про graduation party.",
            "4. 3 вопроса о celebrating graduation with family.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Wendy",
          title: "Что нужно раскрыть",
          lines: [
            "Опишите, какой graduation party вы планируете (dance party, formal dinner и т.д.).",
            "Скажите, проходит ли вечеринка at school или в другом месте.",
            "Ответьте, приходят ли parents и объясните why / why not.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Wendy",
          lines: [
            "Нужно задать ровно 3 вопроса про celebrating graduation with family.",
            "Примеры: Where will you go? Who will be there? What will you do together?",
            "Вопросы должны быть именно про family celebration, не про dance party at school."
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
        "graduation",
        "party",
        "dance",
        "school",
        "parents",
        "family",
        "celebrate",
        "wendy",
        "end of the year"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear wendy\\b(?!,)",
          flags: "i",
          msg: "После `Dear Wendy` нужна запятая."
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
          pattern: "\\bparents attends\\b",
          flags: "i",
          msg: "С `parents` нужен глагол без `-s`: `parents attend`."
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
        "Dear Wendy,\n\nThanks for your email. It was great to hear from you. I'm glad you're organising a big dance party for your graduation!\n\nWe are going to have a graduation party with music and dancing too. It is usually held at school in the assembly hall. Parents sometimes attend these parties because they want to congratulate us, but not everyone invites them.\n\nBy the way, how are you going to celebrate your graduation with your family? Where will you go together? Who else will be there?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u6-parttime",
      unitLabel: "Unit 6",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 6: essay-project on why teenagers have part-time jobs. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on why teenagers in Zetland have part-time jobs. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "Why do you have a part-time job?",
      promptTable: {
        headers: ["Reasons", "Number of teenagers (%)"],
        rows: [
          ["Getting work experience", "33"],
          ["Gaining extra money", "30"],
          ["Developing some skills", "21"],
          ["Meeting new people", "9"],
          ["Boosting confidence", "7"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with having a part-time job for teenagers and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the advantages of working part-time for teenagers."
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
        "A problem connected with having a part-time job",
        "A logical solution",
        "Your opinion on advantages of working part-time",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with having a part-time job",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о advantages of working part-time for teenagers",
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
        "part-time",
        "part time",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "33% have a part-time job to get work experience",
          keywords: ["33", "work experience", "getting work experience", "experience"]
        },
        {
          label: "30% have a part-time job to gain extra money",
          keywords: ["30", "extra money", "gaining extra money", "money"]
        },
        {
          label: "21% have a part-time job to develop skills",
          keywords: ["21", "developing some skills", "develop skills", "skills"]
        },
        {
          label: "9% have a part-time job to meet new people",
          keywords: ["9", "meeting new people", "meet new people", "people"]
        },
        {
          label: "7% have a part-time job to boost confidence",
          keywords: ["7", "boosting confidence", "confidence"]
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
        "tired",
        "no time",
        "homework",
        "stress",
        "exhaust",
        "sleep",
        "balance",
        "study",
        "school",
        "hours",
        "overwork"
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
        "limit",
        "schedule",
        "plan",
        "fewer hours",
        "balance"
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
        "benefit",
        "useful"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about why teenagers in Zetland have part-time jobs.",
          "The project is about reasons for working while still at school."
        ],
        facts: [
          "According to the table, 33% of teenagers ...",
          "Another 30% work part-time to ...",
          "Only 7% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Getting work experience is more popular than boosting confidence."
        ],
        problem: [
          "One problem that can arise with having a part-time job is lack of time for homework and sleep.",
          "Teenagers may feel tired and stressed if they work too many hours."
        ],
        solution: [
          "This problem can be solved by limiting working hours and planning study time in advance.",
          "They should also talk to parents or teachers if work starts to affect their grades."
        ],
        opinion: [
          "In my opinion, working part-time has several advantages for teenagers.",
          "I believe it helps them become more responsible and learn how to manage money."
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
            "4. A problem connected with part-time work + a solution.",
            "5. Your opinion on advantages of working part-time.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 33%, 30% и 21% / 9%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте причины: 33% is higher than 30%.",
            "Можно сравнить work experience с boosting confidence (7%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: no time, tired, stress, homework, too many hours.",
            "Предложите solution: limit hours, plan schedule, ask for advice.",
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
        "part-time",
        "job",
        "work",
        "experience",
        "money",
        "skills",
        "confidence",
        "teenagers",
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
        "The table shows the results of a survey about why teenagers in Zetland have part-time jobs. The project is important because many students start working while they are still at school.\n\nAccording to the table, 33% of teenagers work part-time to get work experience, which makes this the most common reason. Another 30% choose a job to gain extra money, while 21% want to develop some skills. By contrast, only 9% work to meet new people and just 7% hope to boost their confidence.\n\nIt is clear that getting work experience is slightly more popular than gaining extra money. The figure for developing skills is also noticeably higher than the percentage for boosting confidence.\n\nOne problem that can arise with having a part-time job is lack of time for homework and sleep. Teenagers may feel tired and stressed if they work too many hours after school. This problem can be solved by limiting working hours and planning study time in advance.\n\nIn my opinion, working part-time has several advantages for teenagers. I believe it helps them become more responsible, learn how to manage money and prepare for adult life."
    },
    {
      id: "ege-project-task38-u6-hobbies",
      unitLabel: "Unit 6",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 6: essay-project on new hobbies Zetlanders would like to try. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the new hobbies Zetlanders would mostly like to try. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What new hobby would you like to try?",
      promptChart: [
        ["Photography", "31"],
        ["Dancing", "26"],
        ["Gardening", "24"],
        ["Drawing", "13"],
        ["Pottery", "6"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with starting a new hobby and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the role of hobbies in our lives."
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
        "A problem connected with starting a new hobby",
        "A practical solution",
        "Your opinion on the role of hobbies in our lives",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with starting a new hobby",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о role of hobbies in our lives",
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
        "new hobbies",
        "zetland",
        "hobbies"
      ],
      reportFactItems: [
        {
          label: "31% would like to try photography",
          keywords: ["31", "photography", "photo"]
        },
        {
          label: "26% would like to try dancing",
          keywords: ["26", "dancing", "dance"]
        },
        {
          label: "24% would like to try gardening",
          keywords: ["24", "gardening", "garden"]
        },
        {
          label: "13% would like to try drawing",
          keywords: ["13", "drawing", "draw"]
        },
        {
          label: "6% would like to try pottery",
          keywords: ["6", "pottery"]
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
        "expensive",
        "equipment",
        "no time",
        "difficult",
        "give up",
        "quit",
        "motivation",
        "classes",
        "cost",
        "money"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "people should",
        "teenagers should",
        "it can be solved",
        "one way to solve it",
        "start with",
        "borrow",
        "free",
        "online",
        "course",
        "practice"
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
        "hobbies",
        "role",
        "lives"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about new hobbies Zetlanders would like to try.",
          "The project is about how people want to spend their free time in a creative way."
        ],
        facts: [
          "According to the chart, 31% of respondents ...",
          "Another 26% would like to try ...",
          "Only 6% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Photography is far more popular than pottery."
        ],
        problem: [
          "One problem that can arise with starting a new hobby is the cost of equipment and classes.",
          "People may also lose motivation if they do not see quick results."
        ],
        solution: [
          "This problem can be solved by starting with free online tutorials and borrowing basic equipment.",
          "They should also set small goals and practice regularly for a short time each week."
        ],
        opinion: [
          "In my opinion, hobbies play an important role in our lives.",
          "I believe they help us relax, express ourselves and learn something new outside work or school."
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
            "4. A problem connected with starting a hobby + a solution.",
            "5. Your opinion on the role of hobbies in our lives.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 31%, 26% и 24% / 13%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: cost, equipment, no time, lack of motivation.",
            "Предложите solution: free tutorials, borrow equipment, small goals, practice regularly.",
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
        "hobbies",
        "photography",
        "dancing",
        "gardening",
        "drawing",
        "pottery",
        "survey",
        "chart",
        "zetland"
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
          pattern: "\\bhobby are\\b",
          flags: "i",
          msg: "Единственное число: `a hobby is`, множественное: `hobbies are`."
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
        "The pie chart shows the results of a survey about new hobbies Zetlanders would like to try. The project is important because hobbies can help people relax and develop new skills in their free time.\n\nAccording to the chart, 31% of respondents would like to try photography, which makes it the most popular choice. Another 26% choose dancing, while 24% prefer gardening. By contrast, only 13% want to try drawing and just 6% choose pottery.\n\nIt is clear that photography is slightly more popular than dancing. The figure for gardening is also noticeably higher than the percentage for pottery.\n\nOne problem that can arise with starting a new hobby is the cost of equipment and classes. People may also lose motivation if they do not see quick results. This problem can be solved by starting with free online tutorials and borrowing basic equipment from friends or family.\n\nIn my opinion, hobbies play an important role in our lives. I believe they help us relax, express ourselves creatively and learn something useful outside work or school."
    }
  );
})(typeof window !== "undefined" ? window : this);
