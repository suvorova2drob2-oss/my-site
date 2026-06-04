/**
 * ЕГЭ Listening TFNS · Unit 2 · Sarah's birthday (Sinthia & Ted).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-sarah-birthday",
    unitOrder: 2,
    title: "Unit 2 · Sarah's birthday",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Sinthia & Ted · surprise party",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/2/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%202%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>разговор двух друзей</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> три решения — не угадывай «по смыслу».</p>" +
      "<ul>" +
      "<li><strong>True (+)</strong> — в диалоге <em>прямо сказано</em> (*She's so picky* → B).</li>" +
      "<li><strong>False (−)</strong> — в тексте <em>наоборот</em> (день рождения у <em>Sarah</em>, не Sinthia → A).</li>" +
      "<li><strong>Not stated (?)</strong> — тема <em>не звучит</em> (торт на вечеринке ≠ Sinthia умеет печь → D).</li>" +
      "<li>Ловушка: перепутать <strong>False</strong> и <strong>Not stated</strong>; не подставлять имя из утверждения, если в аудио другое.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Sinthia celebrates her birthday next week." },
      { letter: "B", text: "Sarah is not an easy person to choose a gift for." },
      { letter: "C", text: "Ted thinks the original scarf is a good present for Sarah." },
      { letter: "D", text: "Sinthia is good at baking cakes." },
      { letter: "E", text: "Ted suggests writing jokes on a postcard." },
      { letter: "F", text: "They have less than a week to plan the party." },
      { letter: "G", text: "Sinthia and Ted will meet after classes the next day." }
    ],
    key: {
      A: "f",
      B: "t",
      C: "f",
      D: "ns",
      E: "t",
      F: "f",
      G: "t"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Sinthia", text: "Hi Ted! Haven't seen you around lately." },
          {
            speaker: "Ted",
            text:
              "Sinthia, hi! Was busy with school. Can you believe Sarah's birthday is next week already? Time flies!"
          },
          {
            speaker: "Sinthia",
            text:
              "Yeah, totally! I still haven't figured out what to get her. Ted, what about you?"
          },
          {
            speaker: "Ted",
            text:
              "Me neither. She's so picky, it's hard to find something she'll actually like."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Sinthia",
            text: "True. Maybe we could brainstorm some ideas together?"
          },
          { speaker: "Ted", text: "Sure, fire away!" },
          {
            speaker: "Sinthia",
            text:
              "Well, remember that scarf she was obsessed with that was sold out everywhere?"
          },
          {
            speaker: "Ted",
            text:
              "The one with the little foxes? Yeah, I remember her mentioning it a couple of times, but it didn't sound as if she was really into it."
          },
          {
            speaker: "Sinthia",
            text:
              "Believe me, she was. It inspired her project on patterns used in scarves. Maybe we could find her a similar one online?"
          },
          {
            speaker: "Ted",
            text:
              "Hmm, could be an option. Though, it wouldn't be much of a surprise then, would it?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Sinthia",
            text:
              "You're right. We could try to track down the original one, but that seems like a long shot."
          },
          { speaker: "Ted", text: "Wait a minute! I have an idea!" },
          { speaker: "Sinthia", text: "Spill it!" },
          {
            speaker: "Ted",
            text:
              "How about a surprise party? We could invite everyone from her class, decorate her place..."
          },
          {
            speaker: "Sinthia",
            text:
              "...and bring her a giant cake! That's actually a brilliant idea, Ted!"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Ted",
            text:
              "Right? And imagine the look on her face when she opens the door and sees everyone there! Priceless!"
          },
          {
            speaker: "Sinthia",
            text:
              "Absolutely! But wouldn't it be weird to have a party without a present?"
          },
          {
            speaker: "Ted",
            text:
              "Hmmm, good point. We could still get her a smaller gift, as well. Something personal, like a card with her favourite memes or funny inside jokes written on it."
          },
          {
            speaker: "Sinthia",
            text:
              "I love that! It would be a nice addition to the surprise party excitement."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Ted",
            text:
              "See? We're making progress! Okay, so a party it is. First things first, we need to make a list of people to invite."
          },
          {
            speaker: "Sinthia",
            text:
              "Definitely. And we'll need decorations — streamers, balloons, maybe some fairy lights..."
          },
          {
            speaker: "Ted",
            text:
              "Sinthia, this is going to be fantastic! Sarah will never forget this birthday."
          },
          { speaker: "Sinthia", text: "She might, but we won't let her." }
        ]
      },
      {
        turns: [
          { speaker: "Ted", text: "Exactly. Now, let's get planning!" },
          {
            speaker: "Ted",
            text:
              "It's Wednesday today, her birthday is on Friday, so we have a bit more than a week."
          },
          {
            speaker: "Sinthia",
            text:
              "I'm all for it, but can we sleep on it first? It's getting late, and I need to get home for dinner."
          },
          {
            speaker: "Ted",
            text: "No worries, me too. Let's meet up tomorrow after school and finalise the plan."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Sinthia",
            text:
              "Sounds like a plan! See you tomorrow, Ted. And remember, this is a top-secret mission!"
          },
          { speaker: "Ted", text: "My lips are sealed. See you, Sinthia!" }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "False — день рождения у Sarah, не у Sinthia.",
        explainRu:
          "Ted говорит про <em>Sarah's birthday</em> next week — не про Sinthia.",
        evidencePromptRu: "Найди фразу, где назван именинник.",
        segments: [
          { kind: "hit", sol: "e", text: "Sarah's birthday is next week already" }
        ]
      },
      {
        letter: "B",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "True — She's so picky, it's hard to find something she'll actually like.",
        explainRu:
          "Sarah «привередлива» — подарок выбрать непросто.",
        evidencePromptRu: "Найди фразу про то, что Sarah — picky.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "She's so picky, it's hard to find something she'll actually like"
          }
        ]
      },
      {
        letter: "C",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "False — Ted: it didn't sound as if she was really into it.",
        explainRu:
          "Ted не считает, что Sarah была по-настоящему увлечена шарфом — не «good present».",
        evidencePromptRu: "Найди, что Ted думает о шарфе с лисичками.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "it didn't sound as if she was really into it"
          }
        ]
      },
      {
        letter: "D",
        key: "ns",
        paragraphIndex: 2,
        keyLineRu: "Not stated — про умение Sinthia печь торты не сказано.",
        nsExplainRu:
          "Sinthia предлагает <em>bring her a giant cake</em> на вечеринку — но нигде нет, что она <em>good at baking</em>.",
        evidencePromptRu: "Прочитай абзац — отмечать в тексте нечего.",
        segments: []
      },
      {
        letter: "E",
        key: "t",
        paragraphIndex: 3,
        keyLineRu: "True — card with … funny inside jokes written on it.",
        explainRu:
          "Ted предлагает открытку с мемами и inside jokes — парафраз «writing jokes on a postcard».",
        evidencePromptRu: "Найди предложение Ted про card и jokes.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "a card with her favourite memes or funny inside jokes written on it"
          }
        ]
      },
      {
        letter: "F",
        key: "f",
        paragraphIndex: 5,
        keyLineRu: "False — Ted: we have a bit more than a week.",
        explainRu:
          "В диалоге Ted говорит, что времени <em>больше недели</em> — не «less than a week».",
        evidencePromptRu: "Найди фразу Ted про срок до дня рождения.",
        segments: [
          { kind: "hit", sol: "e", text: "we have a bit more than a week" }
        ]
      },
      {
        letter: "G",
        key: "t",
        paragraphIndex: 5,
        keyLineRu: "True — Let's meet up tomorrow after school.",
        explainRu:
          "Договорились встретиться завтра после занятий.",
        evidencePromptRu: "Найди договорённость о встрече на завтра.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Let's meet up tomorrow after school and finalise the plan"
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Sinthia",
        label: "Sinthia",
        fullText:
          "Hi Ted! Haven't seen you around lately. Yeah, totally! I still haven't figured out what to get her. Ted, what about you? True. Maybe we could brainstorm some ideas together? Well, remember that scarf she was obsessed with that was sold out everywhere? Believe me, she was. It inspired her project on patterns used in scarves. Maybe we could find her a similar one online? You're right. We could try to track down the original one, but that seems like a long shot. Spill it! ...and bring her a giant cake! That's actually a brilliant idea, Ted! Absolutely! But wouldn't it be weird to have a party without a present? I love that! It would be a nice addition to the surprise party excitement. Definitely. And we'll need decorations — streamers, balloons, maybe some fairy lights... She might, but we won't let her. I'm all for it, but can we sleep on it first? It's getting late, and I need to get home for dinner. Sounds like a plan! See you tomorrow, Ted. And remember, this is a top-secret mission!",
        phrases: [
          { en: "Haven't seen you around lately", ru: "давно тебя не видела" },
          { en: "figured out what to get her", ru: "придумала, что ей подарить" },
          { en: "brainstorm some ideas together", ru: "вместе накидать идей" },
          { en: "scarf she was obsessed with", ru: "шарф, которым она была одержима" },
          { en: "sold out everywhere", ru: "был распродан везде" },
          { en: "Believe me, she was", ru: "поверь, она была (увлечена)" },
          { en: "inspired her project on patterns", ru: "вдохновил её проект о узорах" },
          { en: "patterns used in scarves", ru: "узоры на шарфах" },
          { en: "find her a similar one online", ru: "найти похожий в интернете" },
          { en: "track down the original one", ru: "разыскать оригинал" },
          { en: "seems like a long shot", ru: "кажется маловероятным" },
          { en: "Spill it!", ru: "давай, выкладывай!" },
          {
            en: "bring her a giant cake",
            ru: "принести ей огромный торт",
            tip: "D · NS — не про baking skills"
          },
          { en: "That's actually a brilliant idea", ru: "это правда блестящая идея" },
          { en: "a party without a present", ru: "вечеринка без подарка" },
          { en: "nice addition to the surprise party excitement", ru: "хорошее дополнение к сюрпризу" },
          { en: "streamers, balloons", ru: "гирлянды, шарики" },
          { en: "maybe some fairy lights", ru: "может, гирлянды-огоньки" },
          { en: "She might, but we won't let her", ru: "может и забудет, но мы не дадим" },
          { en: "sleep on it first", ru: "переспать с этим / подумать до утра" },
          { en: "It's getting late", ru: "уже поздно" },
          { en: "get home for dinner", ru: "уехать домой на ужин" },
          { en: "Sounds like a plan", ru: "договорились / звучит как план" },
          { en: "See you tomorrow", ru: "увидимся завтра", tip: "G · True" },
          { en: "top-secret mission", ru: "секретная миссия" }
        ],
        chunks: [
          {
            text:
              "Hi Ted! Haven't seen you around lately. … She's so picky …",
            showText: true
          },
          {
            text:
              "True. Maybe we could brainstorm … find her a similar one online?",
            showText: true
          },
          {
            text:
              "You're right. We could try to track down … bring her a giant cake!",
            showText: true
          },
          {
            text:
              "Absolutely! But wouldn't it be weird … surprise party excitement.",
            showText: true
          },
          {
            text:
              "Definitely. And we'll need decorations … She might, but we won't let her.",
            showText: true
          },
          {
            text:
              "I'm all for it, but can we sleep on it … top-secret mission!",
            showText: true
          }
        ]
      },
      {
        id: "Ted",
        label: "Ted",
        fullText:
          "Sinthia, hi! Was busy with school. Can you believe Sarah's birthday is next week already? Time flies! Me neither. She's so picky, it's hard to find something she'll actually like. Sure, fire away! The one with the little foxes? Yeah, I remember her mentioning it a couple of times, but it didn't sound as if she was really into it. Hmm, could be an option. Though, it wouldn't be much of a surprise then, would it? Wait a minute! I have an idea! How about a surprise party? We could invite everyone from her class, decorate her place... Right? And imagine the look on her face when she opens the door and sees everyone there! Priceless! Hmmm, good point. We could still get her a smaller gift, as well. Something personal, like a card with her favourite memes or funny inside jokes written on it. See? We're making progress! Okay, so a party it is. First things first, we need to make a list of people to invite. Sinthia, this is going to be fantastic! Sarah will never forget this birthday. Exactly. Now, let's get planning! It's Wednesday today, her birthday is on Friday, so we have a bit more than a week. No worries, me too. Let's meet up tomorrow after school and finalise the plan. My lips are sealed. See you, Sinthia!",
        phrases: [
          { en: "Was busy with school", ru: "был занят учёбой" },
          {
            en: "Sarah's birthday is next week already",
            ru: "день рождения Sarah уже на следующей неделе",
            tip: "A · False — не Sinthia"
          },
          { en: "Time flies", ru: "время летит" },
          { en: "Me neither", ru: "я тоже (не придумал)" },
          {
            en: "She's so picky",
            ru: "она такая привередливая",
            tip: "B · True"
          },
          {
            en: "hard to find something she'll actually like",
            ru: "трудно найти то, что ей понравится",
            tip: "B · True"
          },
          { en: "Sure, fire away!", ru: "конечно, давай!" },
          { en: "The one with the little foxes", ru: "тот с маленькими лисичками" },
          {
            en: "it didn't sound as if she was really into it",
            ru: "не похоже, что ей это правда нравилось",
            tip: "C · False"
          },
          { en: "wouldn't be much of a surprise", ru: "не будет большим сюрпризом" },
          { en: "Wait a minute! I have an idea!", ru: "погоди! у меня идея!" },
          { en: "How about a surprise party?", ru: "как насчёт сюрприз-вечеринки?" },
          { en: "invite everyone from her class", ru: "пригласить всех из её класса" },
          { en: "decorate her place", ru: "украсить её дом / комнату" },
          { en: "imagine the look on her face", ru: "представь выражение её лица" },
          { en: "opens the door and sees everyone there", ru: "откроет дверь и увидит всех" },
          { en: "Priceless!", ru: "бесценно!" },
          { en: "get her a smaller gift, as well", ru: "ещё и небольшой подарок" },
          {
            en: "a card with her favourite memes or funny inside jokes written on it",
            ru: "открытка с любимыми мемами или вашими шутками",
            tip: "E · True"
          },
          { en: "funny inside jokes", ru: "смешные «свои» шутки" },
          { en: "We're making progress", ru: "мы продвигаемся" },
          { en: "make a list of people to invite", ru: "составить список гостей" },
          { en: "Sarah will never forget this birthday", ru: "Sarah никогда не забудет этот день рождения" },
          { en: "It's Wednesday today", ru: "сегодня среда" },
          { en: "her birthday is on Friday", ru: "её день рождения в пятницу" },
          {
            en: "we have a bit more than a week",
            ru: "у нас чуть больше недели",
            tip: "F · False — не less than a week"
          },
          { en: "No worries, me too", ru: "ничего, я тоже" },
          {
            en: "Let's meet up tomorrow after school",
            ru: "встретимся завтра после школы",
            tip: "G · True"
          },
          { en: "finalise the plan", ru: "утвердить / доработать план" },
          { en: "My lips are sealed", ru: "губы на замке / не проболтаюсь" }
        ],
        chunks: [
          {
            text:
              "Sinthia, hi! Was busy with school. … hard to find something she'll actually like.",
            showText: true
          },
          {
            text:
              "Sure, fire away! … it wouldn't be much of a surprise then, would it?",
            showText: true
          },
          {
            text:
              "Wait a minute! I have an idea! … Priceless!",
            showText: true
          },
          {
            text:
              "Hmmm, good point. … funny inside jokes written on it.",
            showText: true
          },
          {
            text:
              "See? We're making progress! … Sarah will never forget this birthday.",
            showText: true
          },
          {
            text:
              "Exactly. Now, let's get planning! … See you, Sinthia!",
            showText: true
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
