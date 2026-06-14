/**
 * ЕГЭ Reading — Multiple Choice, юнит 15 · Online learning.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-online-learning",
    unitOrder: 15,
    title: "Unit 15 · Online learning",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "I graduated with academic honours without ever meeting my professors, embarking on an all-nighter with classmates and, technically, never having gone to a class at all. I was an online-only student, and as online degree programmes grow in popularity, my past three years of study were a crash-course in the unique challenges of learning online, as well as a glimpse into what the future of higher education might look like.",
        evidence: {
          support: [
            "graduated with academic honours",
            "online-only student",
            "future of higher education might look like"
          ],
          distract: [
            "technically, never having gone to a class",
            "unique challenges of learning online"
          ]
        }
      },
      {
        n: 2,
        text:
          "My school day looked very different than most: rather than loading up my backpack and heading to class, I would wake up, eat breakfast while doing my first round of schoolwork for the day, and spend a few hours finishing assignments. Then, I'd head off to work, maybe tucking in a study session during lunch before wrapping up homework or preparing for exams in the evening. Saturday and Sunday became two of my busiest school days and I became an expert at working everywhere from my desk to the car.",
        evidence: {
          support: [
            "tucking in a study session during lunch",
            "head off to work",
            "Saturday and Sunday became two of my busiest school days"
          ],
          distract: [
            "expert at working everywhere from my desk to the car"
          ]
        }
      },
      {
        n: 3,
        text:
          "Some of my most vivid undergraduate memories were of completing a term paper on the floor backstage at the ballet performance I was managing, and stumbling home after a full day of work to begin school that evening. Just like traditional universities, I had papers, exams, and grades — only there were no office hours and no such thing as sick days.",
        evidence: {
          support: [
            "most vivid undergraduate memories",
            "full day of work to begin school that evening",
            "ballet performance I was managing"
          ],
          distract: ["papers, exams, and grades"]
        }
      },
      {
        n: 4,
        text:
          "Enrolment in online learning programmes has grown over the past few years, with more than a quarter of students enrolled in at least one online course. But too many misconceptions still persist around the experience of being an online-only student — for example, that an online degree doesn't carry the same level of prestige as a traditional one. By contrast, online learning enabled me to hone skills such as self-motivation and time management that ultimately made me a better student, and later, a more prepared young adult.",
        evidence: {
          support: [
            "more than a quarter of students enrolled in at least one online course",
            "doesn't carry the same level of prestige as a traditional one",
            "hone skills such as self-motivation and time management"
          ],
          distract: ["misconceptions still persist"]
        }
      },
      {
        n: 5,
        text:
          "There are differences between traditional university time management, and the commitment required to study online. You attend an in-person class for a select period of time in which you are entirely focused on that subject. In an online programme, you must be able to self-motivate and manage multiple courses in the limited time that you are able to provide for yourself. Although online study may eliminate the social aspect of in-person education, it can counter that loss through the ability to increase personal productivity.",
        evidence: {
          support: [
            "eliminate the social aspect of in-person education",
            "counter that loss through the ability to increase personal productivity",
            "manage multiple courses"
          ],
          distract: ["self-motivate"]
        }
      },
      {
        n: 6,
        text:
          "With no set class hours, an online student defines their own schedule, a significant reason why so many working students are drawn to online degree programmes. Given that many students work while attending school and that students in the USA and the UK want more flexibility than ever from their education, gone are the days of a \"typical\" university experience. In terms of academic tradition, it is important to point out that distance learning is hardly new, although developments in technology are recent. The concept of higher learning through \"correspondence courses\" is more than 170 years old, and with the addition of modern technology and desire for increased flexibility, is an inarguable part of the future of universities.",
        evidence: {
          support: [
            "defines their own schedule",
            "want more flexibility than ever",
            "inarguable part of the future of universities"
          ],
          distract: [
            "correspondence courses",
            "distance learning is hardly new"
          ]
        }
      },
      {
        n: 7,
        text:
          "I may not have spent afternoons sprawled out on the campus quad, but my online experience added more things to my education than it subtracted. As the world changes rapidly and the workforce evolves with it, options like online learning offer ridiculous opportunities for students to take charge of what their learning and life will look like. What more can we ask from education, really?",
        evidence: {
          support: [
            "added more things to my education than it subtracted",
            "ridiculous opportunities for students to take charge",
            "What more can we ask from education, really?"
          ],
          distract: ["campus quad"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "Which is true about the author's study course?",
        key: 3,
        choices: [
          { num: 1, text: "He studied technical subjects." },
          { num: 2, text: "He had a unique programme." },
          { num: 3, text: "He got mostly excellent marks." },
          { num: 4, text: "He spent little time studying." }
        ],
        explainRu:
          "В начале текста прямо: <strong>graduated with academic honours</strong> — это и есть отличные итоговые оценки/«почётный» выпуск. «Technical» — игра слов в <strong>technically, never having gone to a class</strong>, не предметы. Уникальный опыт ≠ «уникальная программа» как вариант (2). Времени на учёбу у автора было много (выходные, вечера после работы)."
      },
      {
        examNum: 13,
        prompt:
          "The verb <strong>tucking in</strong> in &ldquo;maybe tucking in a study session during lunch&rdquo; (paragraph 2) is closest in meaning to …",
        key: 2,
        choices: [
          { num: 1, text: "missing." },
          { num: 2, text: "squeezing." },
          { num: 3, text: "attending." },
          { num: 4, text: "arranging." }
        ],
        explainRu:
          "<strong>Tuck in</strong> здесь — «воткнуть», <strong>впихнуть короткую сессию</strong> в перерыв на ланч между работой и учёбой; по смыслу ближе всего <strong>squeezing (in)</strong> — «угнать по времени», чем формальное attending или общее arranging."
      },
      {
        examNum: 14,
        prompt: "What does the author remember most about his studies?",
        key: 1,
        choices: [
          { num: 1, text: "He combined work and studies." },
          { num: 2, text: "He attended some interesting events." },
          { num: 3, text: "He had more exams than others." },
          { num: 4, text: "He was never ill during his studies." }
        ],
        explainRu:
          "Яркие воспоминания — <strong>backstage… ballet performance I was managing</strong> и <strong>after a full day of work to begin school that evening</strong>: постоянное <strong>совмещение работы и учёбы</strong>. Про «больше экзаменов» и «никогда не болел» как главный посыл нет; «мероприятия» — лишь фон к связке работа+учёба."
      },
      {
        examNum: 15,
        prompt: "According to the article, online learning programmes …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "have reduced the number of courses to one at a time."
          },
          {
            num: 2,
            text: "are perceived as less valuable than traditional ones."
          },
          {
            num: 3,
            text: "are chosen by less than 25% of students."
          },
          {
            num: 4,
            text: "suit those who study management and motivation."
          }
        ],
        explainRu:
          "Есть устойчивое <strong>misconception</strong>, что онлайн-степень <strong>doesn't carry the same level of prestige</strong> — воспринимается как менее «весомая». При этом <strong>more than a quarter</strong> берут хотя бы один онлайн-курс (значит не «меньше 25%»). Онлайн требует самомотивации, но не «учат предмету management» в смысле варианта (4)."
      },
      {
        examNum: 16,
        prompt:
          "The phrase <strong>that loss</strong> in &ldquo;it can counter that loss though&rdquo; (paragraph 5) most probably refers to …",
        key: 4,
        choices: [
          { num: 1, text: "self-motivation skills." },
          { num: 2, text: "managing many courses." },
          { num: 3, text: "educational efficiency." },
          { num: 4, text: "face-to-face interaction." }
        ],
        explainRu:
          "Сразу перед этим: онлайн может <strong>eliminate the social aspect of in-person education</strong> — потеря живого общения формата очного обучения; <strong>that loss</strong> отсылает к этому, а компенсация — через рост личной продуктивности."
      },
      {
        examNum: 17,
        prompt: "What is the author's opinion of online education?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "It is suitable only for students who work."
          },
          {
            num: 2,
            text: "It needs to become more flexible."
          },
          {
            num: 3,
            text: "It is typical in the USA and the UK."
          },
          {
            num: 4,
            text: "It will develop further in the future."
          }
        ],
        explainRu:
          "Автор связывает онлайн с <strong>future of higher education</strong>, <strong>inarguable part of the future of universities</strong> и «ridiculous opportunities» — то есть укрепление роли и развитие, а не «только для работающих», не жалоба на недостаток гибкости и не тезис «типично в США/UK» как главная оценка."
      },
      {
        examNum: 18,
        prompt:
          "The author asks a question at the end of the article to show that …",
        key: 4,
        choices: [
          {
            num: 1,
            text: "online education has a number of disadvantages."
          },
          {
            num: 2,
            text: "his online degree programme was better than others."
          },
          {
            num: 3,
            text: "he missed the time traditional students spent on campus."
          },
          {
            num: 4,
            text: "online education is suitable for the modern reality."
          }
        ],
        explainRu:
          "Перед вопросом — быстрые изменения мира и профессий и <strong>ridiculous opportunities</strong> взять управление учёбой в свои руки. Риторический <strong>What more can we ask…</strong> подводит к выводу о том, что формат укладывается в <strong>современные реалии</strong>, а не перечисляет минусы или сравнивает «мою программу» с чужими."
      }
    ],

    quickPhrases: [
      { en: "academic honours", ru: "учёная степень с отличием / honours" },
      { en: "online-only student", ru: "учишься только онлайн" },
      { en: "tuck in a study session", ru: "угнать по времени занятие" },
      { en: "vivid memories", ru: "яркие воспоминания" },
      { en: "misconception", ru: "ложное представление" },
      { en: "prestige", ru: "престиж, весомость" },
      { en: "self-motivation", ru: "самомотивация" },
      { en: "social aspect of in-person education", ru: "социальная сторона очного обучения" },
      { en: "personal productivity", ru: "личная продуктивность" },
      { en: "working students", ru: "совмещающие учёбу и работу" },
      { en: "distance learning", ru: "дистанционное обучение" },
      { en: "correspondence courses", ru: "заочные курсы по переписке" },
      { en: "take charge of", ru: "взять под контроль, распоряжаться" },
      { en: "What more can we ask from education?", ru: "что ещё можно желать от образования?" }
    ],

    tapPhrases: [
      { en: "graduated with academic honours", ru: "выпустился с отличием (honours)" },
      { en: "never having gone to a class at all", ru: "ни разу не ходил на пары очно" },
      {
        en: "crash-course in the unique challenges",
        ru: "интенсивное погружение в особые трудности"
      },
      { en: "eat breakfast while doing my first round of schoolwork", ru: "завтрак и первая порция учебы" },
      { en: "maybe tucking in a study session during lunch", ru: "впихнуть учёбу в обеденный перерыв" },
      { en: "two of my busiest school days", ru: "два самых загруженных учебных дня (выходные)" },
      { en: "working everywhere from my desk to the car", ru: "работать где угодно — от стола до машины" },
      { en: "on the floor backstage at the ballet performance I was managing", ru: "на полу за кулисами балета, где я был менеджером" },
      { en: "stumbling home after a full day of work to begin school that evening", ru: "после полного рабочего дня — домой и снова за учёбу вечером" },
      { en: "no office hours and no such thing as sick days", ru: "нет консультаций и «больничных» как в очнике" },
      { en: "more than a quarter of students enrolled in at least one online course", ru: "больше четверти — хотя бы один онлайн-курс" },
      { en: "doesn't carry the same level of prestige as a traditional one", ru: "кажется менее престижным, чем очная степень" },
      { en: "hone skills such as self-motivation and time management", ru: "оттачивать самомотивацию и тайм-менеджмент" },
      { en: "eliminate the social aspect of in-person education", ru: "убрать социальную составляющую очного формата" },
      { en: "counter that loss through the ability to increase personal productivity", ru: "компенсировать потерю за счёт продуктивности" },
      { en: "defines their own schedule", ru: "сам задаёт расписание" },
      { en: "want more flexibility than ever from their education", ru: "хотят от учёбы больше гибкости, чем раньше" },
      { en: "distance learning is hardly new", ru: "дистанционка — не новинка" },
      { en: "more than 170 years old", ru: "более 170 лет истории" },
      { en: "inarguable part of the future of universities", ru: "неоспоримая часть будущего вузов" },
      { en: "added more things to my education than it subtracted", ru: "онлайн добавил учёбе больше, чем убрал" },
      { en: "ridiculous opportunities for students to take charge", ru: "огромные возможности взять учёбу в свои руки" }
    ],

    tapLexicon: [
      { en: "honours", ru: "honours — с отличием (система UK/US)" },
      { en: "prestige", ru: "престиж" },
      { en: "enrolment", ru: "зачисление, охват (курсов)" },
      { en: "misconception", ru: "заблуждение" },
      { en: "backstage", ru: "за кулисами" },
      { en: "stumble", ru: "брести, еле дойти (уставший)" },
      { en: "flexibility", ru: "гибкость" },
      { en: "productivity", ru: "продуктивность" },
      { en: "workforce", ru: "рынок труда, сотрудники" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
