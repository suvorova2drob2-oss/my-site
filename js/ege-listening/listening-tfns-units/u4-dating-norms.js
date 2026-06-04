/**
 * ЕГЭ Listening TFNS · Unit 4 · Dating norms (Alice & Ben).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-dating-norms",
    unitOrder: 4,
    title: "Unit 4 · Dating norms",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Alice & Ben · who pays on a date",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/4/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%204%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>разговор двух друзей</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> три решения — не угадывай «по смыслу».</p>" +
      "<ul>" +
      "<li><strong>True (+)</strong> — в диалоге <em>прямо сказано</em> (*happily pay for my date* → E).</li>" +
      "<li><strong>False (−)</strong> — в тексте <em>наоборот</em> (Ben <em>missed</em> the article → A; sister <em>older</em>, не younger → D).</li>" +
      "<li><strong>Not stated (?)</strong> — «maybe treat you to coffee» ≠ «will probably buy» (G).</li>" +
      "<li>Не путать мнение Alice (old-fashioned) с мнением Ben про chivalry (B).</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Ben is listening to Alice reading an article." },
      { letter: "B", text: "Ben thinks the idea of chivalry is outdated." },
      { letter: "C", text: "In Russia, men are expected to pay on first dates." },
      { letter: "D", text: "Alice has a sister who is ten years younger." },
      { letter: "E", text: "Ben is comfortable paying for his date." },
      { letter: "F", text: "Alice has changed Ben's view on dating norms." },
      { letter: "G", text: "Ben will probably buy Alice a coffee on a future date." }
    ],
    key: {
      A: "f",
      B: "f",
      C: "t",
      D: "f",
      E: "t",
      F: "t",
      G: "ns"
    },
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Alice",
            text:
              "Hey Ben, did you catch that article about dating norms in the news this morning?"
          },
          {
            speaker: "Ben",
            text: "Alice, hi! No, I must have missed it. What was it about?"
          },
          {
            speaker: "Alice",
            text:
              "It was talking about this weird thing where even though young people are all about equality these days, when it comes to dates, guys are still expected to pay!"
          },
          {
            speaker: "Ben",
            text:
              "I always figured things would be more split these days. But what's wrong with a guy paying for a girl if he wants to? In Russian culture, there's this whole idea of chivalry, you know?"
          }
        ]
      },
      {
        turns: [
          { speaker: "Alice", text: "Chivalry?" },
          {
            speaker: "Ben",
            text:
              "Yeah, like with knights in the Middle Ages, when courage, honour, and kindness were valued. And today, it's like the guy is supposed to make the grand gesture."
          },
          {
            speaker: "Alice",
            text:
              "Oh, I see. The question is whether it's mutual. I sometimes feel pressured to let the guy pay even when I don't want him to. It feels a little old-fashioned, you know? Like I can't take care of myself."
          },
          {
            speaker: "Ben",
            text:
              "Yeah, I can see that being awkward. I guess some guys might feel weird if a girl offered to pay, you know? Like it goes against some unspoken rule. In some countries, there can be this weird expectation that the guy should take charge, especially on a first date."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Alice",
            text:
              "That's what my sister, who was born a decade before us, says. She thinks that if a guy takes a girl on a date, he is the one to pay. But I believe that this whole \"men pay\" thing reinforces old ideas about gender roles. Maybe things are changing, though, especially with younger people."
          },
          {
            speaker: "Ben",
            text:
              "Wow, I hadn't really thought about it that way. I mean, I would happily pay for my date. And I do when I have the money. And if I don't, I refrain from asking a girl out. I guess, I am not ready to have an open conversation about it yet."
          },
          {
            speaker: "Alice",
            text:
              "You shouldn't feel pressured. Maybe whoever suggests the date could just say something like, \"Hey, how about we split the bill this time?\""
          },
          {
            speaker: "Ben",
            text:
              "Yeah, but it should be done upfront, to avoid any misunderstandings. Although I must admit, I do like paying when I can. It feels like a nice gesture. It feels right."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Alice",
            text:
              "Yeah, I see what you mean. Maybe it could just depend on the situation. Like, if it's a fancy restaurant date, maybe you could pay, but if it's just grabbing coffee, you could split it."
          },
          {
            speaker: "Ben",
            text:
              "Yeah, that makes sense. Hey, thanks for sharing your viewpoint, Alice. It gave me some things to think about."
          },
          {
            speaker: "Alice",
            text:
              "No problem, Ben! Maybe we can try that whole \"splitting the bill\" thing next time we grab lunch?"
          },
          {
            speaker: "Ben",
            text:
              "Sounds good to me! And hey, if things go well, maybe I can treat you to coffee sometime!"
          },
          { speaker: "Alice", text: "We'll see how it goes!" }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "False — Ben missed the article; Alice only tells him about it.",
        explainRu:
          "Ben не слушал Alice <em>reading</em> an article — он пропустил статью в новостях.",
        evidencePromptRu: "Найди, видел ли Ben статью.",
        segments: [
          { kind: "hit", sol: "e", text: "No, I must have missed it" }
        ]
      },
      {
        letter: "B",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "False — Ben защищает chivalry, не называет её outdated.",
        explainRu:
          "Ben объясняет рыцарскую культуру положительно; outdated говорит Alice про «men pay».",
        evidencePromptRu: "Найди, что Ben думает о chivalry.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "In Russian culture, there's this whole idea of chivalry"
          },
          {
            kind: "hit",
            sol: "e",
            text: "the guy is supposed to make the grand gesture"
          }
        ]
      },
      {
        letter: "C",
        key: "t",
        paragraphIndex: 1,
        keyLineRu: "True — Russian chivalry + expectation on a first date.",
        explainRu:
          "Ben про Russian culture и жест оплаты; контекст — guy should take charge on a first date.",
        evidencePromptRu: "Найди Russian culture и first date.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "In Russian culture, there's this whole idea of chivalry"
          },
          {
            kind: "hit",
            sol: "e",
            text: "the guy should take charge, especially on a first date"
          }
        ]
      },
      {
        letter: "D",
        key: "f",
        paragraphIndex: 2,
        keyLineRu: "False — sister was born a decade before us (старше).",
        explainRu:
          "Сестра на десять лет <em>старше</em>, не younger.",
        evidencePromptRu: "Найди фразу про sister и decade.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "my sister, who was born a decade before us"
          }
        ]
      },
      {
        letter: "E",
        key: "t",
        paragraphIndex: 2,
        keyLineRu: "True — happily pay; feels right.",
        explainRu:
          "Ben comfortable paying when he has money — прямо в тексте.",
        evidencePromptRu: "Найди, как Ben относится к оплате свидания.",
        segments: [
          { kind: "hit", sol: "e", text: "I would happily pay for my date" },
          { kind: "hit", sol: "e", text: "I do like paying when I can. It feels like a nice gesture. It feels right" }
        ]
      },
      {
        letter: "F",
        key: "t",
        paragraphIndex: 3,
        keyLineRu: "True — hadn't thought about it; gave me things to think about.",
        explainRu:
          "Ben признаёт новый взгляд Alice и соглашается, что splitting makes sense.",
        evidencePromptRu: "Найди реакцию Ben на viewpoint Alice.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Wow, I hadn't really thought about it that way"
          },
          {
            kind: "hit",
            sol: "e",
            text: "It gave me some things to think about"
          },
          { kind: "hit", sol: "e", text: "Yeah, that makes sense" }
        ]
      },
      {
        letter: "G",
        key: "ns",
        paragraphIndex: 3,
        keyLineRu: "Not stated — maybe treat ≠ will probably buy.",
        nsExplainRu:
          "Ben: «maybe I can treat you to coffee» — возможность, не «probably will»; Alice: «We'll see».",
        evidencePromptRu: "Прочитай финал — отмечать нечего.",
        segments: []
      }
    ],
    shadowSpeakers: [
      {
        id: "Alice",
        label: "Alice",
        fullText:
          "Hey Ben, did you catch that article about dating norms in the news this morning? It was talking about this weird thing where even though young people are all about equality these days, when it comes to dates, guys are still expected to pay! Chivalry? Oh, I see. The question is whether it's mutual. I sometimes feel pressured to let the guy pay even when I don't want him to. It feels a little old-fashioned, you know? Like I can't take care of myself. That's what my sister, who was born a decade before us, says. She thinks that if a guy takes a girl on a date, he is the one to pay. But I believe that this whole \"men pay\" thing reinforces old ideas about gender roles. Maybe things are changing, though, especially with younger people. You shouldn't feel pressured. Maybe whoever suggests the date could just say something like, \"Hey, how about we split the bill this time?\" Yeah, I see what you mean. Maybe it could just depend on the situation. Like, if it's a fancy restaurant date, maybe you could pay, but if it's just grabbing coffee, you could split it. No problem, Ben! Maybe we can try that whole \"splitting the bill\" thing next time we grab lunch? We'll see how it goes!",
        phrases: [
          { en: "article about dating norms", ru: "статья о нормах свиданий" },
          { en: "young people are all about equality", ru: "молодёжь за равенство" },
          { en: "guys are still expected to pay", ru: "от парней всё ещё ждут, что он платит" },
          { en: "feel pressured to let the guy pay", ru: "давление согласиться, что платит он" },
          { en: "feels a little old-fashioned", ru: "кажется старомодным", tip: "B · не Ben про chivalry" },
          { en: "Like I can't take care of myself", ru: "как будто я не могу о себе позаботиться" },
          { en: "born a decade before us", ru: "родилась на десять лет раньше нас", tip: "D · False · older" },
          { en: "reinforces old ideas about gender roles", ru: "укрепляет старые гендерные роли" },
          { en: "split the bill this time", ru: "разделить счёт на этот раз" },
          { en: "depend on the situation", ru: "зависит от ситуации" },
          { en: "fancy restaurant date", ru: "свидание в дорогом ресторане" },
          { en: "just grabbing coffee", ru: "просто выпить кофе" },
          { en: "splitting the bill", ru: "делить счёт" },
          { en: "We'll see how it goes", ru: "посмотрим, как пойдёт", tip: "G · NS" }
        ],
        chunks: [
          {
            text:
              "Hey Ben, did you catch … guys are still expected to pay!",
            showText: true
          },
          {
            text:
              "Chivalry? … Like I can't take care of myself.",
            showText: true
          },
          {
            text:
              "That's what my sister … especially with younger people.",
            showText: true
          },
          {
            text:
              "You shouldn't feel pressured … split it.",
            showText: true
          },
          {
            text:
              "No problem, Ben! … We'll see how it goes!",
            showText: true
          }
        ]
      },
      {
        id: "Ben",
        label: "Ben",
        fullText:
          "Alice, hi! No, I must have missed it. What was it about? I always figured things would be more split these days. But what's wrong with a guy paying for a girl if he wants to? In Russian culture, there's this whole idea of chivalry, you know? Yeah, like with knights in the Middle Ages, when courage, honour, and kindness were valued. And today, it's like the guy is supposed to make the grand gesture. Yeah, I can see that being awkward. I guess some guys might feel weird if a girl offered to pay, you know? Like it goes against some unspoken rule. In some countries, there can be this weird expectation that the guy should take charge, especially on a first date. Wow, I hadn't really thought about it that way. I mean, I would happily pay for my date. And I do when I have the money. And if I don't, I refrain from asking a girl out. I guess, I am not ready to have an open conversation about it yet. Yeah, but it should be done upfront, to avoid any misunderstandings. Although I must admit, I do like paying when I can. It feels like a nice gesture. It feels right. Yeah, that makes sense. Hey, thanks for sharing your viewpoint, Alice. It gave me some things to think about. Sounds good to me! And hey, if things go well, maybe I can treat you to coffee sometime!",
        phrases: [
          { en: "No, I must have missed it", ru: "нет, наверное, пропустил", tip: "A · False" },
          { en: "things would be more split these days", ru: "сейчас чаще делят счёт" },
          {
            en: "In Russian culture, there's this whole idea of chivalry",
            ru: "в русской культуре есть идея рыцарской галантности",
            tip: "C · True · B · not outdated"
          },
          { en: "courage, honour, and kindness", ru: "мужество, честь и доброта" },
          { en: "make the grand gesture", ru: "сделать благородный жест" },
          { en: "goes against some unspoken rule", ru: "против какого-то негласного правила" },
          {
            en: "the guy should take charge, especially on a first date",
            ru: "парень должен взять инициативу, особенно на первом свидании",
            tip: "C · True"
          },
          {
            en: "Wow, I hadn't really thought about it that way",
            ru: "я так об этом не думал",
            tip: "F · True"
          },
          {
            en: "I would happily pay for my date",
            ru: "я с радостью плачу на свидании",
            tip: "E · True"
          },
          { en: "I do when I have the money", ru: "плачу, когда есть деньги" },
          { en: "refrain from asking a girl out", ru: "не зову на свидание, если нет денег" },
          { en: "done upfront, to avoid any misunderstandings", ru: "обговорить заранее, чтобы не было недопонимания" },
          { en: "It feels right", ru: "это кажется правильным", tip: "E · True" },
          {
            en: "It gave me some things to think about",
            ru: "есть над чем подумать",
            tip: "F · True"
          },
          { en: "Sounds good to me", ru: "мне подходит" },
          {
            en: "maybe I can treat you to coffee sometime",
            ru: "может, угощу кофе как-нибудь",
            tip: "G · NS · maybe ≠ probably"
          }
        ],
        chunks: [
          {
            text:
              "Alice, hi! … idea of chivalry, you know?",
            showText: true
          },
          {
            text:
              "Yeah, like with knights … especially on a first date.",
            showText: true
          },
          {
            text:
              "Wow, I hadn't really thought … It feels right.",
            showText: true
          },
          {
            text:
              "Yeah, that makes sense … treat you to coffee sometime!",
            showText: true
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
