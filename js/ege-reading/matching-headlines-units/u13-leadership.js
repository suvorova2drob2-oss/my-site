/**
 * ЕГЭ Reading — Matching Headlines, юнит 13 (качества лидера в бизнесе).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-leadership",
    unitOrder: 13,
    title: "Unit 13 · Leadership",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "As you know not everything goes as planned in business, and somewhere along the line, someone might interfere with your work. Competitors change their tactics, the government makes new laws and regulations, suppliers run into their own issues and even natural disasters play their role in stopping the march of progress. A truly great leader is able to quickly adapt to these new situations and find a way around them, rather than give up or keep on going with the plan anyway.",
        evidence: {
          support: [
            "A truly great leader is able to quickly adapt to these new situations",
            "rather than give up or keep on going with the plan anyway.",
            "Competitors change their tactics, the government makes new laws and regulations,"
          ],
          distract: [
            "even natural disasters play their role in stopping the march of progress."
          ]
        }
      },
      {
        letter: "B",
        text:
          "Being able to communicate effectively with people from different countries in various contexts is an important skill for anyone who wants to succeed in business. But communication isn't always about saying the right thing. It also means that you are able to understand the feelings of your often multinational team, and keep the promises you make in those inspiring speeches. Letting your strengths shine through and showing confidence in the way you communicate is one of the most powerful tools a leader can use.",
        evidence: {
          support: [
            "But communication isn't always about saying the right thing.",
            "understand the feelings of your often multinational team,",
            "keep the promises you make in those inspiring speeches."
          ],
          distract: [
            "Being able to communicate effectively with people from different countries in various contexts"
          ]
        }
      },
      {
        letter: "C",
        text:
          "Being responsible means being able to raise your hand and admit when you've done something wrong. It is never easy. When there is blame to be accepted for a business error, the leader must do it. But responsibility also means being able to reward and congratulate your employees. Spreading recognition and appreciation where appropriate can go a long way. When a business owner is able to accept blame and pass on congratulations to those who truly deserve it, a leader is born.",
        evidence: {
          support: [
            "When there is blame to be accepted for a business error, the leader must do it.",
            "But responsibility also means being able to reward and congratulate your employees.",
            "accept blame and pass on congratulations to those who truly deserve it,"
          ],
          distract: [
            "Being responsible means being able to raise your hand and admit when you've done something wrong."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Being a true leader can be tough. There's a balance between creating a successful strategy and supporting and making sure that others follow it. The politics and pressures associated with being in a leadership position can be wearing on a good day, and unbearable on a bad day. If you want to be an effective leader you should focus on the big picture and delegate smaller tasks to your team. Coping with difficult tasks helps a team to build confidence and enjoy working for you.",
        evidence: {
          support: [
            "If you want to be an effective leader you should focus on the big picture and delegate smaller tasks to your team.",
            "Coping with difficult tasks helps a team to build confidence and enjoy working for you.",
            "There's a balance between creating a successful strategy and supporting and making sure that others follow it."
          ],
          distract: [
            "The politics and pressures associated with being in a leadership position can be wearing on a good day, and unbearable on a bad day."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Courage is a changing thing, but incredibly important in a great leader. A leader needs to be able to stand alone and stand up for what they believe in. Having the courage to do what you believe will work is sometimes one of the hardest things to do. However, courage is not the only thing that matters. With courage also comes determination and patience. Together they make it possible for leaders to keep going along a difficult road and keep their head held high, no matter what the outcome is.",
        evidence: {
          support: [
            "Together they make it possible for leaders to keep going along a difficult road",
            "keep their head held high, no matter what the outcome is.",
            "With courage also comes determination and patience."
          ],
          distract: [
            "Courage is a changing thing, but incredibly important in a great leader."
          ]
        }
      },
      {
        letter: "F",
        text:
          "A good leader will often easily command the attention of an entire room, sometimes without even speaking. This level of presence is not something innate, something you just possess from birth. It's a quality that needs to be earned through the respect of your employees, working hard and being honest at every step of the journey. Acting distant or superior to employees is likely to cause dislike. Instead, a good leader can listen to their employees, talk on their level and gain their trust.",
        evidence: {
          support: [
            "It's a quality that needs to be earned through the respect of your employees,",
            "Acting distant or superior to employees is likely to cause dislike.",
            "listen to their employees, talk on their level and gain their trust."
          ],
          distract: [
            "A good leader will often easily command the attention of an entire room, sometimes without even speaking."
          ]
        }
      },
      {
        letter: "G",
        text:
          "Leaders need to be able to influence other people through authentic and transparent communication. Apart from that leaders should continuously encourage others to live by the main company values and agree with business goals. And when it comes to real leaders, they exemplify the behaviours and characteristics that they encourage in their followers. They walk the walk and talk the talk. As a result, group members admire these leaders and work to emulate these behaviours.",
        evidence: {
          support: [
            "they exemplify the behaviours and characteristics that they encourage in their followers.",
            "They walk the walk and talk the talk.",
            "group members admire these leaders and work to emulate these behaviours."
          ],
          distract: [
            "Leaders need to be able to influence other people through authentic and transparent communication."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Becoming a role-model" },
      { num: 2, text: "Behaviour that matters" },
      { num: 3, text: "Ready whatever happens" },
      { num: 4, text: "Importance of flexibility" },
      { num: 5, text: "Think big and share challenges" },
      { num: 6, text: "More than words" },
      { num: 7, text: "A difficult job" },
      { num: 8, text: "Two sides of the coin" }
    ],

    key: { A: 4, B: 6, C: 8, D: 5, E: 3, F: 2, G: 1 },
    extraHeadlineNum: 7,

    explanationsRu: {
      A:
        "Смена условий, законы, конкуренты — нужно <strong>гибко подстраиваться</strong> (<strong>4</strong>).",
      B:
        "Коммуникация — не только «сказать правильно», но и эмпатия и <strong>сдержать обещание</strong> (<strong>6</strong>).",
      C:
        "И <strong>вина</strong> лидера, и <strong>похвала</strong> подчинённым — две стороны ответственности (<strong>8</strong>).",
      D:
        "Стратегия плюс делегирование: <strong>общая картина</strong> и передача задач команде — «поделиться вызовами» (<strong>5</strong>). Вступление про трудность — отвлекающий акцент; если в ключе сборника <strong>7</strong>, сравните с пособием.",
      E:
        "<strong>Любой исход</strong>, трудный путь, терпение — готовность к тому, что будет (<strong>3</strong>).",
      F:
        "Не «звезда», а уважение, честность, <strong>как ведёшь себя</strong> с людьми (<strong>2</strong>).",
      G:
        "<strong>Сам образец</strong> ценностей, «walk the walk», подражание сотрудников (<strong>1</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>7 — A difficult job</strong>: трудность и давление звучат во вступлении к <strong>D</strong>, но идея абзаца <strong>D</strong> дальше смещена к <strong>общей картине и делегированию</strong> (<strong>5</strong>). Если в вашем варианте для <strong>D</strong> дан ключ <strong>7</strong>, замените в данных тренажёра пару D и вынесите <strong>5</strong> как лишний.",

    quickPhrases: [
      {
        en: "quickly adapt to these new situations",
        ru: "быстро подстраиваться под новые обстоятельства"
      },
      { en: "Competitors change their tactics", ru: "конкуренты меняют тактику" },
      {
        en: "the government makes new laws and regulations",
        ru: "государство вводит новые законы и нормы"
      },
      {
        en: "understand the feelings of your often multinational team",
        ru: "понимать чувства часто многонациональной команды"
      },
      {
        en: "keep the promises you make in those inspiring speeches",
        ru: "выполнять обещания из воодушевляющих речей"
      },
      {
        en: "focus on the big picture and delegate smaller tasks to your team",
        ru: "держать общую картину и делегировать команде мелкие задачи"
      },
      {
        en: "keep their head held high, no matter what the outcome is",
        ru: "держать голову высоко при любом исходе"
      },
      {
        en: "listen to their employees, talk on their level and gain their trust",
        ru: "слушать сотрудников, говорить на их языке и заслужить доверие"
      },
      {
        en: "They walk the walk and talk the talk.",
        ru: "сами живут так, как призывают других (идиома)"
      },
      {
        en: "authentic and transparent communication",
        ru: "искренняя и прозрачная коммуникация"
      },
      {
        en: "accept blame and pass on congratulations to those who truly deserve it",
        ru: "принять вину и передать похвалу тем, кто заслужил"
      },
      {
        en: "Spreading recognition and appreciation where appropriate",
        ru: "раздавать признание и благодарность там, где уместно"
      },
      {
        en: "This level of presence is not something innate",
        ru: "такое присутствие в комнате не дано от рождения"
      },
      {
        en: "earned through the respect of your employees",
        ru: "зарабатывается уважением сотрудников"
      },
      {
        en: "politics and pressures associated with being in a leadership position",
        ru: "политика и давление, связанные с лидерской ролью"
      },
      {
        en: "can be wearing on a good day, and unbearable on a bad day",
        ru: "может изматывать даже в удачный день — и быть невыносимым в плохой"
      },
      {
        en: "raise your hand and admit when you've done something wrong",
        ru: "поднять руку и признать свою ошибку"
      },
      {
        en: "stand alone and stand up for what they believe in",
        ru: "остаться с собой и отстаивать свои убеждения"
      },
      {
        en: "exemplify the behaviours and characteristics that they encourage in their followers",
        ru: "быть образцом того поведения, которое проповедуют последователям"
      },
      {
        en: "Coping with difficult tasks helps a team to build confidence",
        ru: "справляться со сложными задачами помогает команде обрести уверенность"
      },
      {
        en: "Letting your strengths shine through",
        ru: "даёт возможность лучшим качествам проявиться"
      },
      {
        en: "Rather than give up or keep on going with the plan anyway",
        ru: "вместо того чтобы сдаться или упрямо идти по старому плану"
      },
      {
        en: "reward and congratulate your employees",
        ru: "награждать и поздравлять сотрудников"
      },
      {
        en: "Acting distant or superior to employees is likely to cause dislike",
        ru: "отстранённость и чувство превосходства вызывают недоброжелательность"
      },
      {
        en: "live by the main company values",
        ru: "жить по главным ценностям компании"
      },
      {
        en: "natural disasters play their role in stopping the march of progress",
        ru: "стихийные бедствия тоже тормозят прогресс"
      }
    ],

    tapPhrases: [
      {
        en: "A truly great leader is able to quickly adapt to these new situations",
        ru: "сильный лидер быстро подстраивается под новые обстоятельства"
      },
      {
        en: "But communication isn't always about saying the right thing.",
        ru: "общение — не только в правильных словах"
      },
      {
        en: "accept blame and pass on congratulations to those who truly deserve it,",
        ru: "принять вину и передать похвалу тем, кто заслужил"
      },
      {
        en: "If you want to be an effective leader you should focus on the big picture and delegate smaller tasks to your team.",
        ru: "эффективный лидер держит общую картину и делегирует мелкие задачи команде"
      },
      {
        en: "keep their head held high, no matter what the outcome is.",
        ru: "держать голову высоко при любом исходе"
      },
      {
        en: "listen to their employees, talk on their level and gain their trust.",
        ru: "слушать сотрудников, говорить на их языке и заслужить доверие"
      },
      {
        en: "They walk the walk and talk the talk.",
        ru: "сами живут так, как призывают других (идиома)"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
