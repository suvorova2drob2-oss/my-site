/**
 * ЕГЭ Reading — Multiple Choice, юнит 3 · Changes in work culture (Generation Z).
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-changes-in-work-culture",
    unitOrder: 3,
    title: "Unit 3 · Changes in work culture",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          'Work culture is changing thanks to Generation Z, defined as "the youngest generation with adult members (born 1997 to 2013)". The misconceptions created by older generations should change, too. The stereotype that the younger generation is lazy is not only untrue, but ignores the necessary changes they are bringing to work culture.',
        evidence: {
          support: [
            "The stereotype that the younger generation is lazy is not only untrue"
          ],
          distract: [
            "The misconceptions created by older generations should change"
          ]
        }
      },
      {
        n: 2,
        text:
          'Older generations have labeled Gen Z as lazy, selfish, and uncaring. One reason older generations stereotype the younger one as lazy is because of the notion that young people don\'t want to work. This on its own is a myth and outrageously wrong. The priorities of Generation Z are just different from other generations\' priorities.',
        evidence: {
          support: [
            "The priorities of Generation Z are just different from other generations' priorities."
          ],
          distract: [
            "Older generations have labeled Gen Z as lazy, selfish, and uncaring."
          ]
        }
      },
      {
        n: 3,
        text:
          "These stereotypes are born out of the fact that work culture is changing, but it's for the better. This low work ethic concept is mistaken because much of Generation Z doesn't want to settle for traditional 9 a.m. to 5 p.m. office jobs. Older generations have their own set of norms of what work culture should look like, but what these older generations overlook is that just because a job isn't central doesn't mean it is not hard work.",
        evidence: {
          support: [
            "doesn't want to settle for traditional 9 a.m. to 5 p.m. office jobs"
          ],
          distract: [
            "This low work ethic concept is mistaken"
          ]
        }
      },
      {
        n: 4,
        text:
          'According to some statistics, members of Generation Z are an "intensely entrepreneurial generation, with almost two-thirds, 62 percent, either having started or wanting to start their own businesses". They prioritize a work-life balance that has never been "business as usual" for other generations. What is misunderstood by older generations is that because Generation Z doesn\'t want to work traditional 9 a.m. to 5 p.m. jobs, they just don\'t want to work at all. That is simply not true.',
        evidence: {
          support: [
            "62 percent, either having started or wanting to start their own businesses"
          ],
          distract: [
            "they just don't want to work at all"
          ]
        }
      },
      {
        n: 5,
        text:
          'Katie Milliams is the chief executive and founder of a company helping organizations unlock performance and engagement by reimagining how, when and where work is done. She said when younger workers talk about balance, they are saying they will work hard but also need a life. "What they are saying is, \'I will work hard for you, but I also need a life,\'" Milliams said in the interview. "Unfortunately, what leaders hear is, \'I want to work less.\'"',
        evidence: {
          support: [
            "Unfortunately, what leaders hear is, 'I want to work less.'"
          ],
          distract: [
            "I will work hard for you, but I also need a life"
          ]
        }
      },
      {
        n: 6,
        text:
          "Remote or hybrid jobs are much more common than they used to be before the COVID-19 pandemic. These positions may seem less intense for other generations, but Generation Z works smarter, not harder, and that might be too difficult for some to fathom. If you can get your job done at home, where you feel most comfortable, on your own time, while still having an outside life, why wouldn't you?",
        evidence: {
          support: [
            "Generation Z works smarter, not harder",
            "If you can get your job done at home"
          ],
          distract: [
            "may seem less intense for other generations"
          ]
        }
      },
      {
        n: 7,
        text:
          'Generation Z has been falsely blamed for redefining what a job can look like: business casual attire, remote workplaces, and even flexible schedules where they set their own hours. It is even argued that they are actually saving everyone from the grind of office life.\n\nAccording to an interview with Eva Delio, the executive vice president of global recruiting at a famous cloud-based software company, Generation Z has "proven the model that you don\'t need to be in the office nine to five to be efficient. This generation is single-handedly paving the way for the entire workforce to do their jobs remotely."',
        evidence: {
          support: [
            "you don't need to be in the office nine to five to be efficient",
            "falsely blamed for redefining what a job can look like"
          ],
          distract: [
            "business casual attire, remote workplaces"
          ]
        }
      },
      {
        n: 8,
        text:
          "Generation Z has watched previous generations struggle with work-life balance, time off, and being overworked. Demanding change may seem as if they are avoiding work, but surveys show older generations secretly want more flexibility, too.",
        evidence: {
          support: [
            "older generations secretly want more flexibility, too"
          ],
          distract: [
            "Demanding change may seem as if they are avoiding work"
          ]
        }
      },
      {
        n: 9,
        text:
          "There is nothing wrong with change, especially when this type of change is good for everyone. For way too long, work has been people's largest obsession. People spend so much time and energy, but it shouldn't have to be that way. Life is not about work, and flexibility in the workplace is the key to a healthy balance.",
        evidence: {
          support: [
            "flexibility in the workplace is the key to a healthy balance",
            "Life is not about work"
          ],
          distract: [
            "work has been people's largest obsession"
          ]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "The author thinks that generation Z is…",
        key: 4,
        choices: [
          { num: 1, text: "better than the older generation." },
          { num: 2, text: "unfairly treated by others." },
          { num: 3, text: "adjusting to work culture well." },
          { num: 4, text: "mistakenly defined by many." }
        ],
        explainRu:
          "Акцент на <strong>misconceptions</strong>, ложном стереотипе <strong>lazy</strong> и на том, что поколение <strong>falsely blamed</strong> — их неверно описывают/определяют, а не то, что автор прямо сравнивает «лучше/хуже старших» или говорит только про «несправедливое обращение» без темы определений."
      },
      {
        examNum: 13,
        prompt:
          "Which is <strong>NOT</strong> true about the attitude to work, according to the text?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "Different generations consider different things important."
          },
          {
            num: 2,
            text:
              "Younger people seem less hard-working to the older generation."
          },
          {
            num: 3,
            text:
              "Older generations think work should be the most important."
          },
          {
            num: 4,
            text:
              "Generation Z avoids hard work because they are selfish."
          }
        ],
        explainRu:
          "П. 2 признаёт разницу <strong>priorities</strong> (1 верно), п. 3 — что образ «ленивых» ошибочен, но старшие так могут казаться (2 по смыслу). Формулировка «Gen Z избегает тяжёлой работы, потому что эгоистичны» — это как раз токсичный стереотип, который текст опровергает; как факт о позиции к работе это <strong>не</strong> соответствует тексту → вариант <strong>4</strong>."
      },
      {
        examNum: 14,
        prompt:
          "The phrasal verb <strong>settle for</strong> in &ldquo;…doesn't want to settle for traditional 9 a.m. to 5 p.m. office jobs&rdquo; (paragraph 3) is closest in meaning to…",
        key: 4,
        choices: [
          { num: 1, text: "change." },
          { num: 2, text: "welcome." },
          { num: 3, text: "attempt." },
          { num: 4, text: "accept." }
        ],
        explainRu:
          "<strong>Settle for</strong> — «соглашаться на меньшее / мириться с чем-то условно подходящим». Здесь: не хотят <strong>смиряться</strong> с классикой 9–5 в офисе, если можно иначе → ближе всего <strong>accept</strong> в значении согласиться с таким форматом."
      },
      {
        examNum: 15,
        prompt:
          "The statistics given in the text proves that compared to older generations, people from Generation Z…",
        key: 1,
        choices: [
          { num: 1, text: "start businesses on their own." },
          { num: 2, text: "are more likely to take risks." },
          { num: 3, text: "avoid having difficult jobs." },
          { num: 4, text: "take business more seriously." }
        ],
        explainRu:
          "Цифра <strong>62%</strong> про тех, кто <strong>already started or wants to start their own businesses</strong> — прямое совпадение с вариантом про собственный бизнес. Текст не доказывает «больше склонны к риску» вообще и не утверждает, что Z «избегают сложных работ»."
      },
      {
        examNum: 16,
        prompt:
          "The quote by the chief executive Katie Milliams is given to…",
        key: 3,
        choices: [
          {
            num: 1,
            text: "show that some young people misuse their work time."
          },
          {
            num: 2,
            text: "prove that work-life balance is very important for all."
          },
          {
            num: 3,
            text:
              "emphasize the gap between Generation Z and their chiefs."
          },
          {
            num: 4,
            text:
              "describe what stereotypes exist about the younger generation."
          }
        ],
        explainRu:
          "Цитата строится на контрасте: молодые говорят <strong>hard + need a life</strong>, а <strong>leaders hear</strong> «хочу работать меньше» — это разрыв восприятия между сотрудниками и руководством → <strong>3</strong>."
      },
      {
        examNum: 17,
        prompt:
          "What is the author's position on remote work expressed in paragraphs 6 and 7 of the article?",
        key: 2,
        choices: [
          {
            num: 1,
            text: "It is difficult for some people to work from home."
          },
          {
            num: 2,
            text:
              "It provides more flexibility and can be equally effective."
          },
          {
            num: 3,
            text: "It is more productive than working in an office."
          },
          {
            num: 4,
            text:
              "Flexible hours are suitable only for the younger generation."
          }
        ],
        explainRu:
          "В п. 6–7 подчёркиваются удалёнка/гибкость, «работать умнее», задача выполнена не обязательно из офиса; цитата Delio — <strong>don't need to be in the office nine to five to be efficient</strong>. Автор не заявляет, что дома <em>всегда продуктивнее</em> офиса (нет строгого сравнения «больше чем»), и не пишет, что гибкий график <em>только</em> для молодёжи."
      },
      {
        examNum: 18,
        prompt: "What is the main idea of the text?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "Flexibility at work is more important than promotion."
          },
          {
            num: 2,
            text: "Working too long hours is harmful for young people."
          },
          {
            num: 3,
            text:
              "The younger generation is changing our attitude to work."
          },
          {
            num: 4,
            text: "Changes are really necessary at the workplace."
          }
        ],
        explainRu:
          "Текст через стереотипы, статистику и remote/hybrid показывает, как <strong>Gen Z</strong> меняет нормы и восприятие труда. Вариант про «необходимость изменений» (4) слишком общий; про «важнее промоушена» и «вред длинного дня для молодых» как главная мысль нет опоры."
      }
    ],

    quickPhrases: [
      { en: "work culture", ru: "культура труда, рабочая культура" },
      { en: "Generation Z / Gen Z", ru: "поколение Z" },
      { en: "misconception", ru: "заблуждение, неверное представление" },
      { en: "stereotype", ru: "стереотип" },
      { en: "work ethic", ru: "трудовая этика" },
      { en: "settle for", ru: "соглашаться на…, мириться с…" },
      { en: "work-life balance", ru: "баланс работы и личной жизни" },
      { en: "business as usual", ru: "«как всегда», привычный уклад" },
      { en: "entrepreneurial", ru: "предпринимательский" },
      { en: "remote / hybrid jobs", ru: "удалённая / гибридная работа" },
      { en: "work smarter, not harder", ru: "работать умнее, а не усерднее" },
      { en: "the grind of office life", ru: "рутина офисной жизни" },
      { en: "flexibility in the workplace", ru: "гибкость на рабочем месте" },
      { en: "chief executive", ru: "исполнительный директор, CEO" }
    ],

    tapPhrases: [
      { en: "Work culture is changing", ru: "Меняется культура труда" },
      { en: "born 1997 to 2013", ru: "рожд. –2013 (определение Gen Z в тексте)" },
      {
        en: "The stereotype that the younger generation is lazy is not only untrue",
        ru: "Стереотип про лень молодёжи не только неверен"
      },
      { en: "outrageously wrong", ru: "до смешного / возмутительно неверно" },
      {
        en: "doesn't want to settle for traditional 9 a.m. to 5 p.m. office jobs",
        ru: "не хочет мириться с классическим офисом 9–17"
      },
      { en: "a job isn't central doesn't mean it is not hard work", ru: "не центральный офис ≠ лёгкая работа" },
      { en: "62 percent, either having started or wanting to start their own businesses", ru: "62% открыли или хотят свой бизнес" },
      { en: "What is misunderstood by older generations", ru: "Что старшее поколение понимает неверно" },
      {
        en: "Unfortunately, what leaders hear is, 'I want to work less.'",
        ru: "Руководители слышат: «хочу работать меньше»"
      },
      { en: "Generation Z works smarter, not harder", ru: "Gen Z работает умнее, не усерднее" },
      { en: "If you can get your job done at home", ru: "Если можно выполнить работу из дома" },
      { en: "falsely blamed for redefining what a job can look like", ru: "Несправедливо обвиняют в пересборке образа работы" },
      { en: "you don't need to be in the office nine to five to be efficient", ru: "Не обязательно быть в офисе 9–5, чтобы быть эффективным" },
      { en: "paving the way for the entire workforce", ru: "прокладывают путь всем работникам" },
      { en: "older generations secretly want more flexibility, too", ru: "и старшим тайно хочется гибкости" },
      { en: "flexibility in the workplace is the key to a healthy balance", ru: "гибкость — ключ к здоровому балансу" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
