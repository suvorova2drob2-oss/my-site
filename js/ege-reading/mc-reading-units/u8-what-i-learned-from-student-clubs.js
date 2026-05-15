/**
 * ЕГЭ Reading — Multiple Choice, юнит 8 · What I learned from student clubs.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-what-i-learned-from-student-clubs",
    unitOrder: 8,
    title: "Unit 8 · What I learned from student clubs",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "At the end of last semester, I was elected president of the Asian Studies Club at my university. It's a pretty cool deal: the school gives us a lot of support to host fun events, like foreign movie nights, happy hours, and special receptions, and we also sponsor speakers to give talks on Asia-related topics.",
        evidence: {
          support: [
            "Asian Studies Club",
            "talks on Asia-related topics"
          ],
          distract: ["foreign movie nights"]
        }
      },
      {
        n: 2,
        text:
          "It goes without saying that becoming a leader or an officer in a student club will help you develop leadership skills that will be invaluable in all areas of life. Being in different roles, I realized that it requires a combination of leadership, advocacy, and community. I also learned that managing people is not easy—especially students.",
        evidence: {
          support: [
            "develop leadership skills",
            "managing people is not easy—especially students"
          ],
          distract: ["leadership, advocacy, and community"]
        }
      },
      {
        n: 3,
        text:
          "This lesson is probably pretty obvious, but it's something that I didn't fully understand until I experienced it myself. Taking on leadership positions is one of the most intimidating things I've ever done. However, it's also one of the most rewarding experiences, because I learned a lot about the nuances of managing teams, people, and expectations.",
        evidence: {
          support: [
            "until I experienced it myself",
            "most intimidating things … most rewarding experiences"
          ],
          distract: ["the nuances of managing teams"]
        }
      },
      {
        n: 4,
        text:
          "When adopting a leadership role, I struggled to find the right balance between being \"one of the team\" and being taken seriously. I always avoided becoming an overly authoritative figure and tried to be super friendly with the people I worked with. As a result, people stopped taking my deadlines and requests seriously. I used to be scared of imposing real consequences, and I thought I could get things done just by being best friends with my team. I learned the hard way that this does not always work: it is important to set expectations on the very first day of a project and to have tough conversations once in a while.",
        evidence: {
          support: [
            "avoided becoming an overly authoritative figure",
            "set expectations on the very first day"
          ],
          distract: ["being best friends with my team"]
        }
      },
      {
        n: 5,
        text:
          "Additionally, I cannot emphasize how much I came to value the importance of communication. I realized that I am usually the most frustrated when I'm working on projects where communication is lacking. This is when people don't respond to group messages (or when they do, it's very minimal), don't share their concerns or challenges, don't participate in discussions, or are generally just disengaged.",
        evidence: {
          support: [
            "most frustrated when … communication is lacking",
            "generally just disengaged"
          ],
          distract: ["don't respond to group messages"]
        }
      },
      {
        n: 6,
        text:
          "This happens a lot in student clubs (or even class projects). One of the unique challenges of working with students is that they have tons of other things going on, and it's hard to know if the thing you're working together on is even in their priority list. If you've ever worked in student groups, you are probably familiar with people saying something similar to: \"Oh, I'm so sorry—I had a midterm and another homework assignment going on, so I couldn't finish it. Can I do it by next week?\"",
        evidence: {
          support: [
            "tons of other things going on",
            "even in their priority list"
          ],
          distract: ["I couldn't finish it"]
        }
      },
      {
        n: 7,
        text:
          "I realized that I don't really mind when my team moves deadlines to fit their schedule—but this requires communication. I've come to appreciate when people tell me that they have other things they have to prioritize, and we work out alternatives together. This experience made me very conscious of my own communication skills when I have to work with others. I try to hold myself accountable and stay on top of communicating my priorities, expectations, and especially challenges to my managers and teammates.",
        evidence: {
          support: [
            "moves deadlines to fit their schedule",
            "work out alternatives together"
          ],
          distract: ["conscious of my own communication skills"]
        }
      },
      {
        n: 8,
        text:
          "Overall, leading student clubs taught me the importance of setting expectations and communication—and that students are probably the hardest group of people to manage. Nevertheless, I enjoyed identifying people's strengths on an executive board of students who are truly passionate about change and community. Serving as a leader of a student club gave me a visible platform to help people bring their best selves to the table and think outside their comfort zone, as college is a time to discover who you are and what intrigues you.",
        evidence: {
          support: [
            "bring their best selves to the table",
            "hardest group of people to manage"
          ],
          distract: ["passionate about change and community"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt:
          "The author's club organised activities connected with …",
        key: 1,
        choices: [
          { num: 1, text: "specific topics of one region." },
          { num: 2, text: "different foreign languages." },
          { num: 3, text: "public speaking skills." },
          { num: 4, text: "entertaining Asian students." }
        ],
        explainRu:
          "Клуб <strong>Asian Studies</strong>, события и спикеры на <strong>Asia-related topics</strong> — это содержательно про один крупный регион, а не про «все языки мира», тренинг ораторского мастерства или развлечение именно «азиатских студентов»."
      },
      {
        examNum: 13,
        prompt: "The author evaluates his leadership experience as …",
        key: 3,
        choices: [
          { num: 1, text: "one of the most difficult." },
          { num: 2, text: "better than he expected." },
          {
            num: 3,
            text: "both scary and worthwhile."
          },
          { num: 4, text: "both practical and tiring." }
        ],
        explainRu:
          "Пара периодов: <strong>most intimidating</strong> и одновременно <strong>most rewarding</strong> — страшно/напряжённо, но окупается опытом. Про «лучше, чем ожидал» и про «утомительно и практично» так прямо не балансирует."
      },
      {
        examNum: 14,
        prompt:
          "<strong>It</strong> in &ldquo;until I experienced <strong>it</strong> myself&rdquo; (paragraph 3) most probably refers to …",
        key: 4,
        choices: [
          { num: 1, text: "trying different roles." },
          { num: 2, text: "combining studies and clubs." },
          { num: 3, text: "understanding fellow students." },
          { num: 4, text: "organising and controlling people." }
        ],
        explainRu:
          "Перед этим в предыдущем абзаце ключевая мысль: <strong>managing people</strong> нелегко. Непонятое «something» — как раз практика управления людьми/ожиданиями, а не абстрактно «роли» или «совмещение учёбы»."
      },
      {
        examNum: 15,
        prompt:
          "Which did the author try <strong>NOT</strong> to do when being a leader?",
        key: 1,
        choices: [
          {
            num: 1,
            text: "Setting strict deadlines at the start."
          },
          {
            num: 2,
            text: "Showing expectations to be obeyed."
          },
          {
            num: 3,
            text: "Taking the work of the club seriously."
          },
          {
            num: 4,
            text: "Sharing difficulties with the team."
          }
        ],
        explainRu:
          "Автор признаётся, что пытался быть «своим» и не нажимать; в итоге к срокам относились слабо. Вывод он формулирует как урок: важно <strong>set expectations on the very first day</strong> — то есть как раз чётко задать рамки и сроки <strong>с самого начала</strong>, чего он поначалу фактически избегал."
      },
      {
        examNum: 16,
        prompt:
          "What upset the author the most in being a leader of a student club?",
        key: 2,
        choices: [
          { num: 1, text: "Working on difficult projects." },
          { num: 2, text: "Lack of involvement in work." },
          { num: 3, text: "Lack of time to answer messages." },
          { num: 4, text: "When the team is not big enough." }
        ],
        explainRu:
          "Явно: максимально раздражает, когда <strong>communication is lacking</strong> и люди <strong>disengaged</strong>, молчат, почти не отвечают — то есть слабая вовлечённость, а не «сложность темы» или «маленькая команда»."
      },
      {
        examNum: 17,
        prompt:
          "How does the author characterise the students he worked with?",
        key: 4,
        choices: [
          { num: 1, text: "Devoted to the project." },
          { num: 2, text: "Unable to set priorities." },
          { num: 3, text: "Sometimes irresponsible." },
          { num: 4, text: "Having too much work." }
        ],
        explainRu:
          "Отдельно подчёркнуто: у студентов <strong>tons of other things going on</strong>, неясно, стоит ли клуб в списке приоритетов — базовая характеристика перегруженности. «Невозможно расставить приоритеты» (2) сильнее, чем в тексте; «иногда безответственны» (3) ближе к следствию, чем к прямой формулировке."
      },
      {
        examNum: 18,
        prompt:
          "What conclusion does the author come to in the last paragraph?",
        key: 3,
        choices: [
          {
            num: 1,
            text:
              "A leader should support the team and set objectives clearly."
          },
          {
            num: 2,
            text:
              "Being a leader enables you to make your community better."
          },
          {
            num: 3,
            text:
              "A true leader should work hard to bring out the best in others."
          },
          {
            num: 4,
            text:
              "Leaders of students' organisations should be the best students."
          }
        ],
        explainRu:
          "Финал: платформа, чтобы помочь людям <strong>bring their best selves to the table</strong> и выйти из зоны комфорта — это про раскрытие потенциала других, а не тезис «лидер = лучший ученик» или только «улучшить общину» в общих словах."
      }
    ],

    quickPhrases: [
      { en: "Asian Studies Club", ru: "клуб азиатоведения" },
      { en: "leadership / officer role", ru: "лидерство, должность в совете" },
      { en: "invaluable", ru: "бесценный" },
      { en: "advocacy", ru: "защита интересов, публичная поддержка" },
      { en: "nuances", ru: "нюансы" },
      { en: "intimidating vs rewarding", ru: "пугающий опыт vs награда" },
      { en: "authoritative figure", ru: "властная фигура" },
      { en: "imposing consequences", ru: "навязывать последствия, санкции" },
      { en: "set expectations", ru: "проговаривать ожидания" },
      { en: "tough conversations", ru: "сложные разговоры" },
      { en: "communication is lacking", ru: "коммуникации не хватает" },
      { en: "disengaged", ru: "не вовлечённые" },
      { en: "priority list", ru: "список приоритетов" },
      { en: "work out alternatives", ru: "найти компромисс, варианты" },
      { en: "hold yourself accountable", ru: "держать ответственность за себя" },
      { en: "executive board", ru: "исполком, правление клуба" },
      { en: "visible platform", ru: "видимая площадка (влияния)" },
      { en: "comfort zone", ru: "зона комфорта" }
    ],

    tapPhrases: [
      { en: "we also sponsor speakers to give talks on Asia-related topics", ru: "приглашаем спикеров на темы Азии" },
      { en: "develop leadership skills that will be invaluable in all areas of life", ru: "развиваешь лидерство — пригодится везде" },
      { en: "managing people is not easy—especially students", ru: "людьми руководить нелегко — студентами тем более" },
      { en: "until I experienced it myself", ru: "пока сама не прочувствовала" },
      { en: "one of the most intimidating things I've ever done", ru: "из самых пугающих вещей в жизни" },
      { en: "one of the most rewarding experiences", ru: "один из самых богатых опытом моментов" },
      { en: "the nuances of managing teams, people, and expectations", ru: "нюансы работы с командами и ожиданиями" },
      { en: "being \"one of the team\" and being taken seriously", ru: "быть «своей» и при этом уважаемой" },
      { en: "avoided becoming an overly authoritative figure", ru: "избегала быть слишком начальственной" },
      { en: "people stopped taking my deadlines and requests seriously", ru: "перестали воспринимать сроки всерьёз" },
      { en: "set expectations on the very first day of a project", ru: "договориться об ожиданиях в день старта" },
      { en: "I am usually the most frustrated when I'm working on projects where communication is lacking", ru: "бесит, когда нет нормальной коммуникации" },
      { en: "are generally just disengaged", ru: "в целом просто не в теме" },
      { en: "tons of other things going on", ru: "куча других дел" },
      { en: "even in their priority list", ru: "хотя бы в списке приоритетов" },
      { en: "moves deadlines to fit their schedule", ru: "переносят сроки под свой график" },
      { en: "work out alternatives together", ru: "вместе ищем выход" },
      { en: "stay on top of communicating my priorities, expectations, and especially challenges", ru: "самой вовремя сообщать о приоритетах и трудностях" },
      { en: "students are probably the hardest group of people to manage", ru: "студенты — самые сложные «подчинённые»" },
      { en: "bring their best selves to the table", ru: "раскрыть лучшее в людях" },
      { en: "think outside their comfort zone", ru: "выйти из зоны комфорта" }
    ],

    tapLexicon: [
      { en: "semester", ru: "семестр" },
      { en: "receptions", ru: "приёмы" },
      { en: "invaluable", ru: "бесценный" },
      { en: "obvious", ru: "очевидный" },
      { en: "authoritative", ru: "властный" },
      { en: "consequences", ru: "последствия" },
      { en: "frustrated", ru: "раздражённая" },
      { en: "minimal", ru: "минимальный" },
      { en: "midterm", ru: "зачёт / промежуточный экзамен" },
      { en: "alternatives", ru: "альтернативы" },
      { en: "accountable", ru: "ответственная за результат" },
      { en: "teammates", ru: "товарищи по команде" },
      { en: "passionate", ru: "увлечённые" },
      { en: "intrigues", ru: "увлекает, интересует" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
