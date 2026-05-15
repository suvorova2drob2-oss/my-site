/**
 * ЕГЭ Reading — Multiple Choice, юнит 20 · A great ESL teacher.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-great-esl-teacher",
    unitOrder: 20,
    title: "Unit 20 · A great ESL teacher",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "Being an ESL student — English as a second language — can be a painful experience. Many of us who have been ESL students know what it's like to get pulled out of class in front of everyone, so you can learn to master the verbs and retrain your tongue to twist differently from what your parents taught you. What you need is a great teacher who lets you make mistakes.",
        evidence: {
          support: [
            "get pulled out of class in front of everyone",
            "a great teacher who lets you make mistakes"
          ],
          distract: ["master the verbs", "retrain your tongue"]
        }
      },
      {
        n: 2,
        text:
          "\"It takes a lot for any student,\" Whaley explains, \"especially for a student who is learning English as their new language, to feel confident enough to say, 'I don't know, but I want to know.'\"",
        evidence: {
          support: [
            "feel confident enough to say",
            "I don't know, but I want to know"
          ],
          distract: ["learning English as their new language"]
        }
      },
      {
        n: 3,
        text:
          "Impeccably dressed, with a gravelly Long Island accent that turns one vowel into many, Whaley does not look like the kind of guy that dabbles in magic markers. Before he was a second-grade teacher, he worked at a public relations company in New York City. He says he started thinking about doing something else while riding to and from work on the Long Island Rail Road. \"I would talk with people on the train at 6 a.m. and 8 p.m. on the way home,\" he recalls. \"They were people who had a complete disconnect from the young people of the world. They were all so focused on adults and the rat race. And I realised that this was not for me.\" That was 16 years ago. He has been teaching ever since. In addition, Whaley has found time to write a novel called Leaving Montana, and he's starting to write children's books. Last year, he won the New York State teacher-of-the-year award.",
        evidence: {
          support: [
            "Impeccably dressed",
            "gravelly Long Island accent that turns one vowel into many",
            "worked at a public relations company",
            "focused on adults and the rat race",
            "won the New York State teacher-of-the-year award"
          ],
          distract: ["second-grade teacher"]
        }
      },
      {
        n: 4,
        text:
          "This second-grade presidential campaign is an example of why. He tells me he got the idea when he asked the children one day to raise their hands if they thought they could never be a U.S. president. The answer broke his heart. \"Almost every single child who is an English-language learner believed that they couldn't be,\" Whaley recalls. Whaley says the presidential speech project is about more than just learning to read and speak in public. He wants these kids to learn to boast about themselves. \"Bragging about yourself, and your best qualities,\" Whaley says, \"is very difficult for a child who came into the classroom not feeling any confidence whatsoever to read three or four words.\"",
        evidence: {
          support: [
            "presidential speech project",
            "learning to read and speak in public",
            "learn to boast about themselves",
            "not feeling any confidence whatsoever"
          ],
          distract: ["English-language learner believed that they couldn't be"]
        }
      },
      {
        n: 5,
        text:
          "It's not an easy job, juggling native speakers' needs with those of the ESL students. There are a lot of late afternoons and coming in early. On one Tuesday morning, I drive through Long Island before the traffic gets bad. The school is quiet, except for Whaley's class. Many of the parents have dropped their kids off early, and Whaley is here with them.",
        evidence: {
          support: [
            "juggling native speakers' needs with those of the ESL students",
            "a lot of late afternoons and coming in early"
          ],
          distract: ["dropped their kids off early"]
        }
      },
      {
        n: 6,
        text:
          "\"A tall metal lady stands on Liberty Island in New York Harbor,\" he reads, voice booming into the empty hallway. Today his students are learning about a big idea they are now a part of. \"Last but not least — 'immigrants,'\" says Whaley. \"Now this is a very important word, because we've been learning about our ancestors.\"",
        evidence: {
          support: [
            "Liberty Island in New York Harbor",
            "this is a very important word",
            "we've been learning about our ancestors"
          ],
          distract: ["immigrants"]
        }
      },
      {
        n: 7,
        text:
          "Whaley himself is the grandchild of Italian immigrants who settled on Long Island. He tells me he often finds himself wishing they'd taught him to speak Italian, so he could be bilingual, like many of his students.",
        evidence: {
          support: [
            "grandchild of Italian immigrants who settled on Long Island",
            "be bilingual, like many of his students"
          ],
          distract: []
        }
      },
      {
        n: 8,
        text:
          "\"Did all of our ancestors always live in the United States of America?\" he asks. There's a collective \"No.\" \"My mom and my dad were born in Ecuador,\" chimes in one girl. \"There you go,\" Whaley says. \"So a lot of your ancestors are from Ecuador. They were all linked by this word: immigrant. Immigrants. Someone who comes from a different country, to a new country...\" \"To live a better life,\" the little girl interrupts. \"To live a better life.\" Whaley smiles. \"You're absolutely right.\"",
        evidence: {
          support: [
            "Did all of our ancestors always live in the United States of America?",
            "linked by this word: immigrant",
            "Someone who comes from a different country",
            "To live a better life"
          ],
          distract: ["born in Ecuador"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "According to the author, a great ESL teacher …",
        key: 4,
        choices: [
          {
            num: 1,
            text: "pays attention to grammar and pronunciation."
          },
          {
            num: 2,
            text: "coordinates his methods with students' parents."
          },
          {
            num: 3,
            text: "corrects and explains students' mistakes in class."
          },
          {
            num: 4,
            text: "encourages students to learn through failure."
          }
        ],
        explainRu:
          "Автор контрастирует стыд и вытаскивание из класса с тем, что нужен учитель, который <strong>lets you make mistakes</strong> — т.е. даёт учиться через ошибку/не наказывает за неё; это ближе к <strong>learn through failure</strong>, чем акцент только на грамматике или публичных поправках."
      },
      {
        examNum: 13,
        prompt: "What is <strong>NOT</strong> characteristic of Whaley?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "He started his career in business."
          },
          { num: 2, text: "His clothes fit perfectly." },
          {
            num: 3,
            text: "His speech is standard."
          },
          {
            num: 4,
            text: "He teaches elementary students."
          }
        ],
        explainRu:
          "У него <strong>gravelly Long Island accent that turns one vowel into many</strong> — это не «нейтральный стандартный» английский. PR-офис и <strong>impeccably dressed</strong> поддерживают (1) и (2); <strong>second-grade</strong> — начальная школа (4)."
      },
      {
        examNum: 14,
        prompt: "Whaley started teaching because he …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "applied for a prestigious award."
          },
          {
            num: 2,
            text: "had problems with his colleagues."
          },
          {
            num: 3,
            text: "became tired of his office work."
          },
          {
            num: 4,
            text: "wanted to write children's stories."
          }
        ],
        explainRu:
          "Перелом: люди в поезде сфокусированы на взрослых целях и <strong>rat race</strong>, «это не для меня» — усталость от офисной карьеры/ценностей, а не коллеги, гонка за наградой заранее или детские книги (они пришли позже)."
      },
      {
        examNum: 15,
        prompt:
          "The expression <strong>the rat race</strong> in &ldquo;They were all so focused on adults and the rat race.&rdquo; (paragraph 3) refers to …",
        key: 1,
        choices: [
          { num: 1, text: "the world of business." },
          { num: 2, text: "young people." },
          { num: 3, text: "teaching career." },
          { num: 4, text: "commuting to work." }
        ],
        explainRu:
          "Контекст: коллеги по утренним поездам из мира взрослых и карьерной суеты <strong>public relations</strong>; <strong>rat race</strong> — ярлык безжизненной <strong>корпоративной гонки</strong>, а не про детей, преподавание само по себе или только проезд."
      },
      {
        examNum: 16,
        prompt:
          "Whaley introduced the presidential speech project to improve children's …",
        key: 2,
        choices: [
          { num: 1, text: "public speaking." },
          { num: 2, text: "confidence." },
          { num: 3, text: "reading." },
          { num: 4, text: "motivation." }
        ],
        explainRu:
          "Чтение и публичное выступление — часть проекта, но сердце в том, чтобы дети научились <strong>boast about themselves</strong>, у тех, кто <strong>not feeling any confidence whatsoever</strong>; главный смысл — <strong>уверенность в себе</strong>."
      },
      {
        examNum: 17,
        prompt: "Whaley's job is difficult because he …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "has native and non-native students."
          },
          {
            num: 2,
            text: "arrives at school early in the morning."
          },
          {
            num: 3,
            text: "teaches a variety of subjects."
          },
          {
            num: 4,
            text: "has many immigrant families in his class."
          }
        ],
        explainRu:
          "Прямо: <strong>not an easy job, juggling native speakers' needs with those of the ESL students</strong>. Ранние приходы — следствие/деталь нагрузки, но причина «сложности роли» сформулирована именно как баланс двух групп."
      },
      {
        examNum: 18,
        prompt:
          "What is the lesson described at the end of the article mainly about?",
        key: 2,
        choices: [
          { num: 1, text: "The history of Ecuador." },
          {
            num: 2,
            text: "Immigrants in US history."
          },
          { num: 3, text: "The immigration process." },
          { num: 4, text: "The Statue of Liberty." }
        ],
        explainRu:
          "Статуя — ввод к разговору, но урок крутится вокруг слова <strong>immigrants</strong>, предков и жизни в США как страны иммигрантов; Эквадор — пример семей, а не тема занятия; процедуры въезда не разбирают; фокус — <strong>понятие иммигранта и связь с историей/происхождением</strong>."
      }
    ],

    quickPhrases: [
      { en: "ESL (English as a second language)", ru: "английский как второй язык" },
      { en: "let someone make mistakes", ru: "позволять ошибаться (чтобы учиться)" },
      { en: "the rat race", ru: "карьерная гонка, «бег по кругу»" },
      { en: "English-language learner", ru: "учащийся с английским как новым языком" },
      { en: "juggle (needs)", ru: "совмещать, балансировать запросы" },
      { en: "ancestor", ru: "предок" },
      { en: "immigrant", ru: "иммигрант" },
      { en: "bilingual", ru: "двуязычный" },
      { en: "boast about yourself", ru: "хвастаться собой (в позитивном смысле уверенности)" }
    ],

    tapPhrases: [
      { en: "a great teacher who lets you make mistakes", ru: "учитель, который позволяет ошибаться" },
      { en: "I don't know, but I want to know", ru: "не знаю, но хочу узнать" },
      { en: "gravelly Long Island accent", ru: "хриплый акцент Лонг-Айленда" },
      { en: "focused on adults and the rat race", ru: "фокус на взрослых и карьерной гонке" },
      { en: "this was not for me", ru: "это не про меня" },
      {
        en: "Almost every single child who is an English-language learner believed that they couldn't be",
        ru: "почти все ESL-дети думали, что не смогут стать президентом"
      },
      { en: "learn to boast about themselves", ru: "научиться говорить о своих сильных сторонах" },
      { en: "juggling native speakers' needs with those of the ESL students", ru: "совмещать задачи носителей и ESL" },
      { en: "we've been learning about our ancestors", ru: "мы учились про предков" },
      { en: "linked by this word: immigrant", ru: "связаны все словом immigrant" },
      { en: "Someone who comes from a different country", ru: "тот, кто приезжает из другой страны" },
      { en: "You're absolutely right.", ru: "ты абсолютно права" }
    ],

    tapLexicon: [
      { en: "impeccably", ru: "безупречно" },
      { en: "dabble", ru: "увлекаться понемногу (ирон.: маркеры)" },
      { en: "disconnect", ru: "разрыв, отрыв (от мира детей)" },
      { en: "recall", ru: "вспоминать" },
      { en: "presidential", ru: "президентский" },
      { en: "harbor", ru: "гавань" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
