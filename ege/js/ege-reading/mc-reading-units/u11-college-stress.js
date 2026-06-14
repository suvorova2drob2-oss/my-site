/**
 * ЕГЭ Reading — Multiple Choice, юнит 11 · College stress.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-college-stress",
    unitOrder: 11,
    title: "Unit 11 · College stress",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "The first time we leave home and start preparing for adult life, college presents intense pressure to achieve high grades and shape successful careers. Students tend to push themselves to the limit both in their academic performance and in their recreational outlets. Yes, being a student can be tough. With the transition to adult life, making new friends, and busy schedules for studying, college stress is commonplace for most students.",
        evidence: {
          support: [
            "college stress is commonplace for most students"
          ],
          distract: [
            "push themselves to the limit"
          ]
        }
      },
      {
        n: 2,
        text:
          "Stress is your body's response to uncomfortable or unfamiliar situations and can surface through a range of physical, emotional, or mental symptoms. The situations that lead to stress can be either negative or positive. Yes, even a high exam score can cause stress among college students, piling on the pressure to maintain the high average!",
        evidence: {
          support: [
            "either negative or positive",
            "even a high exam score can cause stress"
          ],
          distract: [
            "physical, emotional, or mental symptoms"
          ]
        }
      },
      {
        n: 3,
        text:
          "The important thing to remember about stress is that it should only be temporary; otherwise, it can lead to burnout, or physical and emotional exhaustion. If you find yourself stressed for long periods, first of all, take some time off and do something to distract from the pressure. Here are some other tips on how to reduce it.",
        evidence: {
          support: [
            "it can lead to burnout",
            "take some time off"
          ],
          distract: [
            "physical and emotional exhaustion"
          ]
        }
      },
      {
        n: 4,
        text:
          "One of the most important lessons you can learn during college is to ask for and accept help. Whether from a friend or a professor, being surrounded by a strong support system will help ease the transition into some of the best years of your life.",
        evidence: {
          support: [
            "ask for and accept help",
            "strong support system"
          ],
          distract: [
            "some of the best years of your life"
          ]
        }
      },
      {
        n: 5,
        text:
          "Admitting what you don't know and studying with a friend could be the difference between a 60% and 80% on your next exam. Asking your professor for an extension on your next paper might give you the time you need to write that last page. Try not to put so much weight on every situation and remind yourself that college is a time for clarification and exploration and should be enjoyed.",
        evidence: {
          support: [
            "studying with a friend",
            "asking your professor for an extension"
          ],
          distract: [
            "clarification and exploration"
          ]
        }
      },
      {
        n: 6,
        text:
          "The next vital tip is to manage your health. Eating healthy food can make a huge impact on alleviating stress and positive thinking. Make sure you avoid fast food and energy drinks as the fix will be temporary and will cause you to crash. Instead, eat lots of stress-busting food. Green leafy vegetables like spinach contain folate that produces dopamine, a pleasure-inducing brain chemical that will help you feel calm. Protein foods like eggs and meat help produce serotonin that regulates hunger and feelings of happiness and well-being. Omega-3 foods such as salmon have anti-inflammatory properties that help counteract the effects of stress hormones.",
        evidence: {
          support: [
            "avoid fast food and energy drinks",
            "will cause you to crash"
          ],
          distract: [
            "dopamine",
            "serotonin"
          ]
        }
      },
      {
        n: 7,
        text:
          "Other foods such as blueberries, seeds, dark chocolate, avocado, nuts, yogurt, and oatmeal also help counter stress.",
        evidence: {
          support: [
            "blueberries, seeds, dark chocolate"
          ],
          distract: [
            "oatmeal"
          ]
        }
      },
      {
        n: 8,
        text:
          "Many daily strategies also can help you keep stress at bay. Try relaxation activities, such as meditation, yoga, tai chi, breathing exercises, and muscle relaxation. Programs are available online, in smartphone apps, and at many gyms and community centers.",
        evidence: {
          support: [
            "meditation, yoga, tai chi",
            "keep stress at bay"
          ],
          distract: [
            "smartphone apps"
          ]
        }
      },
      {
        n: 9,
        text:
          "Stay positive and practice gratitude, acknowledging the good parts of your day or life. Accept that you can't control everything. Find ways to let go of worry about situations you cannot change. Learn to say \"no\" to additional responsibilities when you are too busy or stressed.",
        evidence: {
          support: [
            "practice gratitude",
            "Learn to say \"no\""
          ],
          distract: [
            "you can't control everything"
          ]
        }
      },
      {
        n: 10,
        text:
          "Finally, stay connected with people who keep you calm and happy, provide emotional support, and help you with practical things. A friend, family member, or neighbour can become a good listener or share responsibilities so that it doesn't become overwhelming.",
        evidence: {
          support: [
            "stay connected",
            "emotional support"
          ],
          distract: [
            "share responsibilities"
          ]
        }
      },
      {
        n: 11,
        text:
          "Yes, college can be a scary and overwhelming time in a person's life, but it can also be one of the most rewarding. Stress that college students feel can often affect their academic achievements as well as their personal life. However, everything is manageable if you tackle it wisely.",
        evidence: {
          support: [
            "everything is manageable if you tackle it wisely"
          ],
          distract: [
            "affect their academic achievements"
          ]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "According to the text, for most students college stress is …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "an unusual reaction to moving away from home."
          },
          {
            num: 2,
            text: "mostly caused by poor grades alone."
          },
          {
            num: 3,
            text: "a normal part of the college experience."
          },
          {
            num: 4,
            text: "easy to avoid once they find close friends."
          }
        ],
        explainRu:
          "В первом абзаце прямо: <strong>college stress is commonplace for most students</strong> — типично / нормальная часть опыта, а не «редкость» или только «из‑за плохих оценок», и текст не обещает, что друзья «автоматически снимают» стресс."
      },
      {
        examNum: 13,
        prompt:
          "The situations that lead to stress, according to the author, can be …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "only unpleasant or frightening."
          },
          {
            num: 2,
            text: "both negative and positive."
          },
          {
            num: 3,
            text: "limited to physical overwork."
          },
          {
            num: 4,
            text: "caused mainly by social media."
          }
        ],
        explainRu:
          "Явно: ситуации <strong>either negative or positive</strong>; пример «хорошего» стресса — даже <strong>high exam score</strong> и давление держать средний балл."
      },
      {
        examNum: 14,
        prompt:
          "The author warns that if stress is not temporary it may result in …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "stronger motivation to study."
          },
          { num: 2, text: "burnout and exhaustion." },
          {
            num: 3,
            text: "higher scores on exams."
          },
          {
            num: 4,
            text: "better eating habits."
          }
        ],
        explainRu:
          "Иначе чем кратковременный стресс грозит <strong>burnout</strong> и <strong>physical and emotional exhaustion</strong>."
      },
      {
        examNum: 15,
        prompt:
          "The <strong>first</strong> major piece of advice in the section on reducing stress (after the idea of taking a break) is to …",
        key: 2,
        choices: [
          { num: 1, text: "plan a strict healthy diet." },
          {
            num: 2,
            text: "ask for help and accept support from others."
          },
          {
            num: 3,
            text: "sign up for yoga and tai chi classes."
          },
          {
            num: 4,
            text: "refuse all requests from professors."
          }
        ],
        explainRu:
          "После общего «сделай перерыв» первый развёрнутый совет — <strong>ask for and accept help</strong> и опора на <strong>support system</strong>; питание и релаксация идут следующими блоками."
      },
      {
        examNum: 16,
        prompt:
          "Stress-busting foods are recommended in the text mainly because they …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "are cheaper than campus meals."
          },
          {
            num: 2,
            text:
              "influence brain chemicals linked to mood and calm."
          },
          {
            num: 3,
            text: "replace the need for sleep."
          },
          {
            num: 4,
            text: "work faster than energy drinks."
          }
        ],
        explainRu:
          "Связка шпинат → <strong>folate</strong> → <strong>dopamine</strong>, белок → <strong>serotonin</strong>, рыба → <strong>Omega-3</strong> и противовоспалительный эффект — всё про нейромедиаторы и самочувствие, а не про цену или «вместо сна»."
      },
      {
        examNum: 17,
        prompt:
          "In the context of fast food and energy drinks, <strong>crash</strong> refers to …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "failing a course suddenly."
          },
          {
            num: 2,
            text: "a sharp drop in energy after a short lift."
          },
          {
            num: 3,
            text: "sleeping through lectures."
          },
          {
            num: 4,
            text: "arguing with roommates."
          }
        ],
        explainRu:
          "«Починка» <strong>temporary</strong>, потом <strong>crash</strong> — короткий подъём энергии и резкий спад (типично для сахара и энергетиков), не про провал экзамена или сон."
      },
      {
        examNum: 18,
        prompt: "The author’s overall conclusion is that …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "college stress is impossible to control."
          },
          {
            num: 2,
            text: "students should focus on grades before emotions."
          },
          {
            num: 3,
            text:
              "stress can be handled with sensible strategies."
          },
          {
            num: 4,
            text: "a stressful college life is always harmful."
          }
        ],
        explainRu:
          "Финал: стресс бьёт по учёбе и личной жизни, но <strong>everything is manageable if you tackle it wisely</strong> — управляемо при мудром подходе, не бессмысленное «невозможно» или «только оценки»."
      }
    ],

    quickPhrases: [
      { en: "commonplace", ru: "распространённое явление; «норма»" },
      { en: "push yourself to the limit", ru: "выжимать максимум из себя" },
      { en: "burnout", ru: "выгорание" },
      { en: "exhaustion", ru: "истощение" },
      { en: "support system", ru: "круг поддержки" },
      { en: "ask for an extension", ru: "продлить дедлайн у сдачи" },
      { en: "alleviate stress", ru: "смягчать стресс" },
      { en: "stress-busting food", ru: "еда «против» стресса" },
      { en: "dopamine / serotonin", ru: "дофамин / серотонин (медиаторы настроения)" },
      { en: "Omega-3 / anti-inflammatory", ru: "омега-3 / противовоспалительный эффект" },
      { en: "keep stress at bay", ru: "держать стресс на расстоянии" },
      { en: "practice gratitude", ru: "практика благодарности" },
      { en: "let go of worry", ru: "отпустить тревогу" },
      { en: "overwhelming", ru: "подавляющий, слишком много" },
      { en: "tackle wisely", ru: "разумно справляться (с проблемой)" }
    ],

    tapPhrases: [
      {
        en: "intense pressure to achieve high grades and shape successful careers",
        ru: "жёсткое давление: оценки и карьера"
      },
      {
        en: "college stress is commonplace for most students",
        ru: "стресс студента — обычное дело"
      },
      {
        en: "Stress is your body's response to uncomfortable or unfamiliar situations",
        ru: "Стресс — реакция организма на дискомфорт и новизну"
      },
      {
        en: "The situations that lead to stress can be either negative or positive.",
        ru: "Поводы могут быть и плохие, и хорошие."
      },
      {
        en: "even a high exam score can cause stress among college students",
        ru: "даже высокий балл может стрессовать"
      },
      {
        en: "it can lead to burnout, or physical and emotional exhaustion",
        ru: "до выгорания и истощения"
      },
      {
        en: "take some time off and do something to distract from the pressure",
        ru: "отвлечься и отдохнуть от давления"
      },
      {
        en: "ask for and accept help",
        ru: "просить о помощи и принимать её"
      },
      {
        en: "being surrounded by a strong support system will help ease the transition",
        ru: "опора облегчает переходный период"
      },
      {
        en: "Asking your professor for an extension on your next paper",
        ru: "попросить отсрочку у преподавателя"
      },
      {
        en: "college is a time for clarification and exploration and should be enjoyed",
        ru: "колледж — время прояснять и пробовать новое"
      },
      {
        en: "Eating healthy food can make a huge impact on alleviating stress and positive thinking",
        ru: "еда сильно влияет на стресс и настроение"
      },
      {
        en: "avoid fast food and energy drinks as the fix will be temporary and will cause you to crash",
        ru: "фастфуд и энергетики — краткий «заплатка», потом спад"
      },
      {
        en: "stress-busting food",
        ru: "антистрессовые продукты"
      },
      {
        en: "a pleasure-inducing brain chemical that will help you feel calm",
        ru: "вещество в мозге, дающее спокойствие и удовольствие"
      },
      {
        en: "Omega-3 foods such as salmon have anti-inflammatory properties",
        ru: "омега-3 (лосось) снижает воспаление"
      },
      {
        en: "Many daily strategies also can help you keep stress at bay.",
        ru: "ежедневные приёмы сдерживают стресс"
      },
      {
        en: "meditation, yoga, tai chi, breathing exercises, and muscle relaxation",
        ru: "медитация, йога, тай-чи, дыхание, релаксация мышц"
      },
      {
        en: "Stay positive and practice gratitude",
        ru: "Мысли позитивно и благодарность"
      },
      {
        en: "Learn to say \"no\" to additional responsibilities when you are too busy or stressed.",
        ru: "Учись отказываться от лишних обязанностей"
      },
      {
        en: "everything is manageable if you tackle it wisely",
        ru: "всё под силу, если действовать с умом"
      }
    ],

    tapLexicon: [
      { en: "recreational", ru: "досуговый" },
      { en: "unfamiliar", ru: "незнакомый" },
      { en: "symptoms", ru: "симптомы" },
      { en: "temporary", ru: "временный" },
      { en: "alleviating", ru: "облегчающий" },
      { en: "folate", ru: "фолат (витамин группы B)" },
      { en: "serotonin", ru: "серотонин" },
      { en: "hormones", ru: "гормоны" },
      { en: "counteract", ru: "нейтрализовать, противодействовать" },
      { en: "avocado", ru: "авокадо" },
      { en: "gratitude", ru: "благодарность" },
      { en: "acknowledging", ru: "признавая, отмечая" },
      { en: "responsibilities", ru: "обязанности" },
      { en: "neighbour", ru: "сосед (брит. написание)" },
      { en: "rewarding", ru: "дающее удовлетворение" },
      { en: "achievements", ru: "достижения" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
