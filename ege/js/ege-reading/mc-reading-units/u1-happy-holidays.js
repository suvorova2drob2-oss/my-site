/**
 * ЕГЭ Reading — Multiple Choice, юнит 1 · Thanksgiving / loneliness (редакция текста).
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-happy-holidays",
    unitOrder: 1,
    title: "Unit 1 · Happy holidays?",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа (A–D) к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        lead: "",
        text:
          "Happy holidays? Thanksgiving is approaching and most Americans have solidified their family plans for the holiday. Whether you're hosting a big meal or heading to a relative's house, the holidays are often a chance to reconnect with loved ones. However, Thanksgiving Day isn't always a family-oriented occasion.",
        evidence: {
          support: [
            "heading to a relative's house",
            "reconnect with loved ones",
            "solidified their family plans"
          ],
          distract: [
            "hosting a big meal"
          ]
        }
      },
      {
        n: 2,
        lead: "",
        text:
          "Over the years, several studies have found that the seemingly joyous holiday season isn't always easy for everyone. In one survey, 31 per cent of respondents said they felt lonely during the holidays throughout the last five years. Meanwhile, 41 per cent of participants were concerned about a family member or a friend feeling lonely around the holidays. Another survey also found that 70 per cent of respondents struggled with different types of loneliness before Thanksgiving and Christmas, partly due to the effects of the Covid-19 pandemic.",
        evidence: {
          support: [
            "partly due to the effects of the Covid-19 pandemic"
          ],
          distract: [
            "31 per cent of respondents said they felt lonely"
          ]
        }
      },
      {
        n: 3,
        lead: "",
        text:
          "While socially-distanced holiday parties have mostly become a thing of the past since then, there are still many reasons why some people spend the season by themselves. Some have family members living on the opposite side of the country, or world, while others may not have a close relationship with their relatives at all."
      },
      {
        n: 4,
        lead: "",
        text:
          "There's no one concrete way to spend the holidays, and everyone has their own reasons why they choose not to see certain people on a festive day. A therapist, Lilia Magon, acknowledged that when we spend the holidays alone, our feelings of loneliness can be heightened. While everyone experiences loneliness in a different way, Magon believes that the feeling could be tied to how Thanksgiving has been portrayed over the years."
      },
      {
        n: 5,
        lead: "",
        text:
          "\"I think a lot of the anxieties and concerns that come up have to do with unmet expectations of what you think a holiday is supposed to look like, and what you think your relationship with your family or your friends is supposed to look like,\" she said. \"I think that's where a lot of people themselves feel a little bit of a stressful state. Just maybe feeling a little let down by the expectations they have for themselves, after watching other people experience the holidays differently than them.\"",
        evidence: {
          support: [
            "unmet expectations of what you think a holiday is supposed to look like",
            "expectations they have for themselves"
          ],
          distract: [
            "feel a little bit of a stressful state"
          ]
        }
      },
      {
        n: 6,
        lead: "",
        text:
          "The holidays are often referred to as the most wonderful time of the year, but that doesn't ring true for everyone. In some cases, the winter months can be quite a triggering time, and potentially a reminder to people of how they've been hurt by those closest to them. According to Magon, the best way to manage those feelings of animosity is by creating own perspective about the holidays and new ways to celebrate.",
        evidence: {
          support: [
            "feelings of animosity",
            "doesn't ring true for everyone"
          ],
          distract: [
            "the most wonderful time of the year"
          ]
        }
      },
      {
        n: 7,
        lead: "",
        text:
          "\"I think you should allow yourself to reframe it as: 'Okay, how do I want the holidays to look for me? Who are the people that I do want in my life? Who are the people that I don't want in my life?'\" she advised. \"Don't try to make something happen that shouldn't happen. Instead, recreate your own memories and your own traditions, and give yourself space and permission to do so. But also, if you know that it's going to be a hard time for you, create your own support system, by reaching out to a therapist or to close friend.\"",
        evidence: {
          support: [
            "reaching out to a therapist or to close friend",
            "allow yourself to reframe it",
            "it's going to be a hard time for you"
          ],
          distract: [
            "recreate your own memories and your own traditions"
          ]
        }
      },
      {
        n: 8,
        lead: "",
        text:
          "For those who do have a close support system, it can make skipping out on Thanksgiving dinner a little easier. On the other hand, your cousins may miss sitting next to you at the dinner table. Still, Magon believes we shouldn't try to convince our family members to attend an event in which they've already opted out.\n\n\"If someone decides they don't want to be with you over the holidays, respect that choice for them,\" she explained. \"Don't make them feel bad for prioritising themselves and their needs. It will potentially, you know, make things worse longterm. I just honour that everyone needs to do what's best for them, whether financially, emotionally, or physically.\"",
        evidence: {
          support: [
            "respect that choice for them",
            "don't want to be with you over the holidays"
          ],
          distract: [
            "skipping out on Thanksgiving dinner a little easier"
          ]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt:
          "According to the text, the majority of people in the USA plan to … on Thanksgiving.",
        key: 2,
        choices: [
          { num: 1, text: "visit their friends" },
          { num: 2, text: "spend time with relatives" },
          { num: 3, text: "attend a social event" },
          { num: 4, text: "cook a big dinner" }
        ],
        explainRu:
          "В начале текста: планы на праздник и поход к <strong>relative's house</strong>, возможность <strong>reconnect with loved ones</strong> — не «только друзья», не абстрактное social event и не обязательно готовить самим («hosting» — лишь один из вариантов)."
      },
      {
        examNum: 13,
        prompt:
          "The statistics mentioned in paragraph 2 prove that…",
        key: 3,
        choices: [
          {
            num: 1,
            text:
              "more than a half of respondents felt lonely in the last five years."
          },
          {
            num: 2,
            text:
              "more people actually worry about their friends than family."
          },
          {
            num: 3,
            text: "loneliness increased partially because of the pandemic."
          },
          {
            num: 4,
            text:
              "feeling loneliness is directly connected to the holiday season."
          }
        ],
        explainRu:
          "Явная формулировка <strong>partly due to the effects of the Covid-19 pandemic</strong>. 31% — это не больше половины; про «больше за друзей, чем за семью» текст не сравнивает таким образом."
      },
      {
        examNum: 14,
        prompt:
          "How does the therapist Lilia Magon explain feeling lonely at Thanksgiving?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "The traditional image of the holiday is family-related."
          },
          {
            num: 2,
            text:
              "Family relationships may become worse during the holidays."
          },
          {
            num: 3,
            text:
              "People expect too much from their relatives and friends."
          },
          {
            num: 4,
            text:
              "The holiday season is often a very stressful time for many."
          }
        ],
        explainRu:
          "Ключ — <strong>unmet expectations</strong> и образ праздника/отношений «как должно быть»; это ближе к «ожидают слишком многого», чем к общему «сезон стрессовый» без фокуса на ожиданиях."
      },
      {
        examNum: 15,
        prompt:
          "Which is <strong>NOT</strong> mentioned in paragraphs 6–7 as a way to fight loneliness during the holiday season?",
        key: 2,
        choices: [
          { num: 1, text: "Seeking professional help." },
          { num: 2, text: "Following family traditions." },
          { num: 3, text: "Talking to a close friend." },
          { num: 4, text: "Rethinking the image of a holiday." }
        ],
        explainRu:
          "Есть <strong>reframe</strong>, <strong>therapist</strong>, <strong>close friend</strong>, свои традиции (<strong>your own traditions</strong>) — но не «следовать семейным традициям» как отдельный совет."
      },
      {
        examNum: 16,
        prompt:
          "The word <strong>animosity</strong> in &ldquo;the best way to manage those feelings of <strong>animosity</strong>&rdquo; (paragraph 6) is closest in meaning to…",
        key: 2,
        choices: [
          { num: 1, text: "individualism." },
          { num: 2, text: "unfriendliness." },
          { num: 3, text: "bad memories." },
          { num: 4, text: "high expectations." }
        ],
        explainRu:
          "<strong>Animosity</strong> — неприязнь, враждебность; контекст «обидели близкие» + управлять чувствами поддерживает <strong>unfriendliness</strong>, а не «индивидуализм» или просто «память»."
      },
      {
        examNum: 17,
        prompt:
          "<strong>It</strong> in &ldquo;that it&rsquo;s going to be a hard time for you&rdquo; (paragraph 7) most probably refers to…",
        key: 3,
        choices: [
          { num: 1, text: "memory." },
          { num: 2, text: "permission." },
          { num: 3, text: "holiday." },
          { num: 4, text: "support." }
        ],
        explainRu:
          "<strong>It</strong> в <strong>it's going to be a hard time</strong> — о ситуации/периоде праздников, не о «памяти» или «разрешении»."
      },
      {
        examNum: 18,
        prompt:
          "What is the main idea of the text?",
        key: 4,
        choices: [
          {
            num: 1,
            text:
              "The holiday season is the best time to reconnect with your family."
          },
          {
            num: 2,
            text:
              "Loneliness has become a major problem for humanity nowadays."
          },
          {
            num: 3,
            text:
              "Everyone should have someone to care for them during holidays."
          },
          {
            num: 4,
            text:
              "There should be no pressure to celebrate holidays in specific ways."
          }
        ],
        explainRu:
          "Текст спорит с «идеальной картинкой» праздника: ожидания, право отказаться, уважение к чужому выбору и свой сценарий — это ближе к отсутствию давления «отмечать правильно», а не к тезису «лучшее время для семьи»."
      }
    ],

    quickPhrases: [
      { en: "solidify family plans", ru: "утвердить / чётко спланировать семейные планы" },
      { en: "reconnect with loved ones", ru: "восстановить контакт с близкими" },
      { en: "a family-oriented occasion", ru: "семейный (ориентированный на семью) праздник" },
      { en: "respondents", ru: "респонденты, участники опроса" },
      { en: "partly due to", ru: "отчасти из-за" },
      { en: "spend the season by themselves", ru: "провести сезон наедине с собой" },
      { en: "feelings … can be heightened", ru: "чувства могут обостряться / усиливаться" },
      { en: "unmet expectations", ru: "несбывшиеся / неоправданные ожидания" },
      { en: "ring true for everyone", ru: "быть правдой для каждого; в тексте: не для всех так" },
      { en: "a triggering time", ru: "«триггерный» период (вызов болезненных переживаний)" },
      { en: "animosity", ru: "неприязнь, враждебность" },
      { en: "reframe", ru: "переформулировать, сменить ракурс / интерпретацию" },
      { en: "create your own support system", ru: "создать свою систему поддержки" },
      { en: "opt out", ru: "отказаться от участия, выйти из ситуации" },
      { en: "respect that choice", ru: "уважать этот выбор" },
      { en: "prioritise themselves", ru: "ставить себя на первое место" }
    ],

    tapPhrases: [
      { en: "solidified their family plans", ru: "утвердили семейные планы" },
      { en: "reconnect with loved ones", ru: "снова сойтись с близкими, наладить отношения" },
      { en: "family-oriented occasion", ru: "семейный праздник" },
      { en: "partly due to the effects of the Covid-19 pandemic", ru: "отчасти из-за последствий пандемии COVID-19" },
      { en: "spend the season by themselves", ru: "провести сезон в одиночестве" },
      { en: "unmet expectations", ru: "неоправданные ожидания" },
      { en: "portrayed over the years", ru: "как изображали / показывали на протяжении лет" },
      { en: "doesn't ring true for everyone", ru: "не для всех это соответствует правде" },
      { en: "feelings of animosity", ru: "чувства неприязни / враждебности" },
      { en: "creating own perspective", ru: "создание своего взгляда (на праздник)" },
      { en: "allow yourself to reframe it", ru: "позволить себе переосмыслить это" },
      { en: "recreate your own memories and your own traditions", ru: "создать свои воспоминания и традиции" },
      { en: "create your own support system", ru: "создать свою опору / круг поддержки" },
      { en: "reaching out to a therapist", ru: "обратиться к терапевту" },
      { en: "it's going to be a hard time for you", ru: "тебе будет тяжёлое время" },
      { en: "respect that choice for them", ru: "уважай их выбор" },
      { en: "opted out", ru: "уже отказались (от участия)" },
      { en: "don't want to be with you over the holidays", ru: "не хотят быть с тобой в праздники" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
