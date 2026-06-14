/**
 * ЕГЭ Reading — Multiple Choice, юнит 13 · Educational technology.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-educational-technology",
    unitOrder: 13,
    title: "Unit 13 · Educational technology",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "The COVID outbreak showed all of us that education online is possible. Moreover, it can be even effective if we learn to implement educational technology available today.",
        evidence: {
          support: [
            "education online is possible",
            "implement educational technology"
          ],
          distract: ["even effective"]
        }
      },
      {
        n: 2,
        text:
          "Educational technology is the use of tools in the classroom to develop an engaging and personalized learning experience. Beyond the use of computers, students and teachers can use interactive platforms, devices, and even analytical software to better gauge students' progress using data in real time. Learning has never been a one-size-fits-all endeavour, and with educational technology, teachers can better serve students' individualized needs.",
        evidence: {
          support: [
            "personalized learning experience",
            "individualized needs"
          ],
          distract: ["data in real time"]
        }
      },
      {
        n: 3,
        text:
          "The benefits of technology in education are far-reaching and growing with each day. Let's take a look at some of the upsides of how technology impacts education positively.",
        evidence: {
          support: ["far-reaching and growing"],
          distract: ["impacts education positively"]
        }
      },
      {
        n: 4,
        text:
          "The first thing that comes to mind is 24/7 availability and accessibility. Technology like the internet and the ability to record lectures, upload learning resources to a platform, and host discussion forums make it possible to expand one's access and availability to learn. For example, at many universities around the world students can earn their degrees entirely online through the use of an online learning system. Students used to have to be physically located inside a classroom to obtain their education. These days, online learning (by choice or by circumstance) has led to a revolution in education that makes it accessible to anyone, anywhere.",
        evidence: {
          support: [
            "24/7 availability and accessibility",
            "accessible to anyone, anywhere"
          ],
          distract: ["physically located inside a classroom"]
        }
      },
      {
        n: 5,
        text:
          "Furthermore, technology offers great metrics for tracking progress. With technological platforms, students and teachers can report and review progress based on each individual's performance. Through the use of analytics, teachers can easily visualize how a student is growing or being thwarted. This can help teachers spot inefficiencies or areas that are ripe for improvement or attention.",
        evidence: {
          support: [
            "visualize how a student is growing or being thwarted",
            "spot inefficiencies"
          ],
          distract: ["metrics for tracking progress"]
        }
      },
      {
        n: 6,
        text:
          "Follow-up activities in online education are more diverse. Once a student leaves their designated class time, homework is a standard follow-up. However, when handing out paperwork, there may be missed opportunities. With education and technology, teachers can design personalized follow-up activities and grant each student the ability to learn at their own pace, even when they are outside of the classroom. For example, teachers can host a variety of options online for follow-up activities, and students, based on their level of understanding, can choose their course of action.",
        evidence: {
          support: [
            "personalized follow-up activities",
            "learn at their own pace"
          ],
          distract: ["homework is a standard follow-up"]
        }
      },
      {
        n: 7,
        text:
          "What the opponents of online education usually say is that you lack communication. But I think using technology actually means increased collaboration. Classroom management tools make it easier than ever for students, parents, and teachers to collaborate. For example, it's not always easy to get students to work together in groups. But with online portals and discussion forums, students can contribute in their own space and time and work with other students. Additionally, teachers can communicate and collaborate with parents in an organized manner for feedback and the sharing of ideas, thoughts, and concerns.",
        evidence: {
          support: [
            "increased collaboration",
            "online portals and discussion forums"
          ],
          distract: ["lack communication"]
        }
      },
      {
        n: 8,
        text:
          "Lastly, just because schools or institutions use educational technology, it doesn't mean that the need for a teacher is removed. Teachers are necessary to implement the technology properly, devise creative lesson plans, and support students' needs, among other things.",
        evidence: {
          support: [
            "doesn't mean that the need for a teacher is removed",
            "Teachers are necessary"
          ],
          distract: ["implement the technology properly"]
        }
      },
      {
        n: 9,
        text:
          "To conclude, technology in education has led to more accessibility, lower costs, and personalized learning experiences. From education data platforms to online schools and everything in between, it's easy to see how technology has affected education, and continues to do so with each innovation.",
        evidence: {
          support: [
            "more accessibility, lower costs, and personalized learning experiences"
          ],
          distract: ["continues to do so with each innovation"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt:
          "According to the article, technology is used to make the educational process more …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "adaptable to individual requirements."
          },
          {
            num: 2,
            text: "accurately measured by individuals."
          },
          {
            num: 3,
            text: "manageable and enjoyable for teachers."
          },
          {
            num: 4,
            text: "analytically challenging."
          }
        ],
        explainRu:
          "Прямо: <strong>personalized</strong> опыт и <strong>individualized needs</strong>, учителя <strong>better serve</strong> эти нужды — т.е. процесс <strong>подстраивается под личные требования</strong>. Остальное или вторично (аналитика — средство), или не формулировка «главного эффекта»."
      },
      {
        examNum: 13,
        prompt:
          "Which is <strong>NOT</strong> mentioned by the author as an example of &lsquo;accessibility&rsquo; in education?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "Using technology to get information."
          },
          {
            num: 2,
            text: "Listening to lectures from any place."
          },
          {
            num: 3,
            text: "Physical access to a classroom."
          },
          {
            num: 4,
            text: "Taking courses remotely."
          }
        ],
        explainRu:
          "Доступность дают интернет, записи, <strong>entirely online</strong> степени, обучение <strong>anywhere</strong>. Напротив, необходимость <strong>be physically located inside a classroom</strong> описана как <strong>used to</strong> — старая модель, а не пример новой доступности."
      },
      {
        examNum: 14,
        prompt:
          "The expression <strong>being thwarted</strong> in &ldquo;how a student is growing or being thwarted&rdquo; (paragraph 5) is closest in meaning to being …",
        key: 4,
        choices: [
          { num: 1, text: "persuaded." },
          { num: 2, text: "motivated." },
          { num: 3, text: "defeated." },
          { num: 4, text: "frustrated." }
        ],
        explainRu:
          "<strong>Thwarted</strong> — помешанный, застопоренный в прогрессе; в паре с <strong>growing … or …</strong> это контраст «растёт / ему мешают». Ближе к состоянию <strong>frustrated</strong> (срыв, торможение), чем к <strong>motivated</strong> / <strong>persuaded</strong>. В пробнике иногда ставят вариант (3) — пришли официальный ключ при расхождении."
      },
      {
        examNum: 15,
        prompt: "What is the author's view of homework?",
        key: 2,
        choices: [
          {
            num: 1,
            text: "It should be quite standardized."
          },
          {
            num: 2,
            text: "Various activities are a better option."
          },
          {
            num: 3,
            text: "Homework is a boring procedure."
          },
          {
            num: 4,
            text: "Writing papers is still rather effective."
          }
        ],
        explainRu:
          "Базовое домашнее задание упомянуто, но автор подчёркивает <strong>missed opportunities</strong> у «бумажек», зато с технологиями — <strong>personalized follow-up</strong>, <strong>variety of options</strong>, выбор задания по уровню. Это как раз <strong>разнообразие активностей лучше одного шаблона</strong>."
      },
      {
        examNum: 16,
        prompt:
          "What is the author's response to the opponents of online education?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "Lack of communication is just a minor problem."
          },
          {
            num: 2,
            text: "Communication with parents online is more difficult."
          },
          {
            num: 3,
            text: "Online discussion forums are better for communication."
          },
          {
            num: 4,
            text: "Technology actually encourages working together."
          }
        ],
        explainRu:
          "Прямая реплика: противники говорят про нехватку общения, автор — <strong>using technology actually means increased collaboration</strong>; дальше примеры порталов и форумов как про <strong>working together</strong>, не как «форумы лучше всех каналов» (3 слишко узко)."
      },
      {
        examNum: 17,
        prompt: "It is implied that the role of a teacher in education …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "has become less important."
          },
          {
            num: 2,
            text: "is as important as it used to be."
          },
          {
            num: 3,
            text: "will change with technology."
          },
          {
            num: 4,
            text: "has increased with technology."
          }
        ],
        explainRu:
          "Явный тезис: технология <strong>не убирает</strong> учителя; <strong>Teachers are necessary</strong> для внедрения, уроков, поддержки. Это про сохранение ключевой роли (не «стал менее важен»). Вариант (3) отчасти верен по содержанию практики, но в логике задания «не заменён технологией» ближе (2); при официальном (3) можно заменить ключ."
      },
      {
        examNum: 18,
        prompt:
          "What is the author's overall view on using technology in education?",
        key: 2,
        choices: [
          {
            num: 1,
            text: "The teacher plays the most important role in education."
          },
          {
            num: 2,
            text:
              "Technology helps adapt learning process to students' needs."
          },
          {
            num: 3,
            text: "Online learning will gain more popularity in the future."
          },
          {
            num: 4,
            text: "The benefits of technology in education are limited."
          }
        ],
        explainRu:
          "Через весь текст нить — персонализация, индивидуальные траектории, доступность и метрики; заключение фиксирует <strong>personalized learning experiences</strong>. Это не «роль учителя главнее всего» как <strong>главный тезис статьи</strong>, не «польза ограничена» и не узкий прогноз про рост популярности онлайн (3)."
      }
    ],

    quickPhrases: [
      { en: "educational technology / EdTech", ru: "образовательные технологии" },
      { en: "personalized / individualized learning", ru: "персонализированное обучение" },
      { en: "one-size-fits-all", ru: "«один размер для всех» — универсальный шаблон" },
      { en: "real-time data / analytics", ru: "данные в реальном времени; аналитика" },
      { en: "24/7 availability and accessibility", ru: "круглосуточная доступность" },
      { en: "discussion forums", ru: "форумы обсуждений" },
      { en: "gauge progress", ru: "измерять / оценивать прогресс" },
      { en: "follow-up activities", ru: "закрепляющие занятия после урока" },
      { en: "learn at their own pace", ru: "учиться в своём темпе" },
      { en: "increased collaboration", ru: "больше совместной работы" },
      { en: "classroom management tools", ru: "системы управления классом" },
      { en: "implement (technology)", ru: "внедрять, осваивать в работе" },
      { en: "far-reaching benefits", ru: "широкие последствия, долгий эффект" }
    ],

    tapPhrases: [
      {
        en: "develop an engaging and personalized learning experience",
        ru: "создать вовлекающий и личный опыт обучения"
      },
      {
        en: "better serve students' individualized needs",
        ru: "лучше закрывать индивидуальные потребности"
      },
      {
        en: "Technology like the internet and the ability to record lectures",
        ru: "интернет и записи лекций"
      },
      {
        en: "earn their degrees entirely online",
        ru: "получить степень полностью онлайн"
      },
      {
        en: "accessible to anyone, anywhere",
        ru: "доступно любому и из любой точки"
      },
      {
        en: "teachers can easily visualize how a student is growing or being thwarted",
        ru: "видно: учится или «спотыкается»"
      },
      {
        en: "spot inefficiencies or areas that are ripe for improvement",
        ru: "находить слабые места для улучшения"
      },
      {
        en: "when handing out paperwork, there may be missed opportunities",
        ru: "у «бумажной» схемы теряются возможности"
      },
      {
        en: "design personalized follow-up activities",
        ru: "проектировать личные задания на потом"
      },
      {
        en: "using technology actually means increased collaboration",
        ru: "техника даёт больше кооперации"
      },
      {
        en: "contribute in their own space and time",
        ru: "вкладываться в удобное время и месте"
      },
      {
        en: "it doesn't mean that the need for a teacher is removed",
        ru: "это не значит, что учитель не нужен"
      },
      {
        en: "Teachers are necessary to implement the technology properly",
        ru: "учителя нужны, чтобы освоить технику как следует"
      },
      {
        en: "more accessibility, lower costs, and personalized learning experiences",
        ru: "доступнее, дешевле, персональнее"
      }
    ],

    tapLexicon: [
      { en: "endeavour", ru: "начинание, задача (брит.)" },
      { en: "platforms", ru: "платформы" },
      { en: "metrics", ru: "показатели, метрики" },
      { en: "review", ru: "просматривать, разбирать" },
      { en: "thwarted", ru: "помешано, сорвано (прогресс)" },
      { en: "designated", ru: "назначенный (слот времени)" },
      { en: "diverse", ru: "разнообразный" },
      { en: "opponents", ru: "противники (идеи)" },
      { en: "portals", ru: "порталы" },
      { en: "feedback", ru: "обратная связь" },
      { en: "institutions", ru: "учреждения" },
      { en: "devise", ru: "придумывать (планы)" },
      { en: "innovation", ru: "инновация" },
      { en: "circumstance", ru: "обстоятельство" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
