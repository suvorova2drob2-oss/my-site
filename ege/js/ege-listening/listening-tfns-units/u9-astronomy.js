/**
 * ЕГЭ Listening TFNS · Unit 9 · Astronomy (Rose & Jack).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-astronomy",
    unitOrder: 9,
    title: "Unit 9 · Astronomy",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Rose & Jack · astronomy",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/9/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%209%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> — usually two classes on Mondays and Wednesdays → два раза в неделю.</li>" +
      "<li><strong>B</strong> — Rose: <em>Of course I know that</em> → знает, что Sun is a star.</li>" +
      "<li><strong>C</strong> — про book у Rose не сказано; black holes Jack изучал today at school.</li>" +
      "<li><strong>D</strong> — constellations taught by dad относится к Rose, не Jack.</li>" +
      "<li><strong>E</strong> — Jack говорит <em>my brother</em>, но older/elder не сказано.</li>" +
      "<li><strong>F</strong> — Rose: <em>I wish we could see one</em> → не видела falling/shooting star.</li>" +
      "<li><strong>G</strong> — Rose не говорит, что жизни нет; наоборот, ей было бы amazing if we found life.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Jack has astronomy classes twice a week." },
      { letter: "B", text: "Rose doesn't know that the Sun is a star." },
      { letter: "C", text: "Rose read about black holes in a book." },
      { letter: "D", text: "Jack learnt about constellations from his dad." },
      { letter: "E", text: "Jack has an elder brother." },
      { letter: "F", text: "Rose has seen a falling star." },
      { letter: "G", text: "Rose believes that there is no life on other planets." }
    ],
    key: {
      A: "t",
      B: "f",
      C: "ns",
      D: "f",
      E: "ns",
      F: "f",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Rose", text: "Hey, Jack! How are you today?" },
          {
            speaker: "Jack",
            text:
              "Hi, Rosa! A bit overwhelmed, as we had four classes of astronomy today instead of the usual two."
          },
          { speaker: "Rose", text: "How so?" },
          {
            speaker: "Jack",
            text:
              "We usually have two classes on Mondays and Wednesdays, but our teacher went to a conference on Monday and rescheduled all the classes for today."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Rose",
            text:
              "Lucky you. We don't have astronomy yet — only physics and maths. But I love stars! Have you ever looked at the stars and wondered about the universe?"
          },
          {
            speaker: "Jack",
            text: "Yeah, all the time. It's amazing how vast and mysterious it is. Did you know that the sun is actually a star?"
          },
          {
            speaker: "Rose",
            text: "Are you kidding? Of course I know that. It's the closest star to Earth, and is only 93 million miles away from us."
          },
          { speaker: "Jack", text: "You are right! And did you know that the universe is still expanding today?" },
          { speaker: "Rose", text: "Yeah, and scientists believe that there are billions of galaxies out there." }
        ]
      },
      {
        turns: [
          { speaker: "Jack", text: "That's crazy, isn't it? And have you heard of the Big Bang theory?" },
          { speaker: "Rose", text: "I have, but I don't remember any facts. Can you remind me?" },
          {
            speaker: "Jack",
            text:
              "Sure. It's the idea that the universe started from a massive explosion about 13.8 billion years ago. And today at school we talked about black holes. These are regions in space where the gravitational pull is so strong that nothing can escape from them, not even light."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Rose",
            text:
              "Whoa, that's crazy! Have you studied stars today as well? By the way, what do you call a group of stars that forms a shape in the sky and has a name?"
          },
          {
            speaker: "Jack",
            text:
              "Oh, we call them constellations. No, we haven't studied constellations today, but my dad used to take me to the mountains and we would spend nights looking at them. He was the one who taught me about them. There's Orion, the Big Dipper, the Little Dipper, and many others. Can you find any of them in the sky?"
          },
          { speaker: "Rose", text: "I think I can find the Big Dipper. It looks like a giant spoon." },
          { speaker: "Jack", text: "Yeah, and it's part of the constellation Ursa Major, which means \"Big Bear\" in Latin." }
        ]
      },
      {
        turns: [
          { speaker: "Rose", text: "Cool! Have you ever seen a shooting star?" },
          {
            speaker: "Jack",
            text:
              "I haven't, but my brother has. He says it's amazing. But it's not really a star. It's actually a meteoroid that enters Earth's atmosphere and burns up, creating a bright streak of light."
          },
          { speaker: "Rose", text: "That's so cool! I wish we could see one. Do you think there's life on other planets?" },
          { speaker: "Jack", text: "It's possible. Scientists are always searching for signs of life on other planets or moons in our solar system." },
          { speaker: "Rose", text: "That would be amazing if we found life out there. I wonder what they would look like." },
          { speaker: "Jack", text: "Yeah, it's hard to say. But it's exciting to think about the possibilities." },
          { speaker: "Rose", text: "Definitely! I'd love to learn more about astronomy. It's so fascinating." },
          { speaker: "Jack", text: "Me too. It's a never-ending journey of discovery and wonder." }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        answer: "t",
        keyLineRu: "Jack usually has astronomy on Mondays and Wednesdays, so twice a week.",
        evidencePromptRu: "<strong>A.</strong> Найдите расписание обычных astronomy classes.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "We usually have two classes on Mondays and Wednesdays",
            explainRu: "Два урока в неделю → True."
          }
        ]
      },
      {
        letter: "B",
        answer: "f",
        keyLineRu: "Rose says: Of course I know that.",
        evidencePromptRu: "<strong>B.</strong> Найдите реакцию Rose на Sun is a star.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Of course I know that",
            explainRu: "Она знает → False."
          }
        ]
      },
      {
        letter: "C",
        answer: "ns",
        keyLineRu: "Про book у Rose не сказано.",
        evidencePromptRu: "<strong>C.</strong> Проверьте, есть ли book + Rose + black holes.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "today at school we talked about black holes",
            explainRu: "Black holes обсуждал Jack at school; про книгу Rose информации нет → Not Stated."
          }
        ]
      },
      {
        letter: "D",
        answer: "f",
        keyLineRu: "Dad taught Rose, not Jack.",
        evidencePromptRu: "<strong>D.</strong> Найдите, чей dad taught constellations.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "my dad used to take me to the mountains",
            explainRu: "Это говорит Rose → не Jack → False."
          }
        ]
      },
      {
        letter: "E",
        answer: "ns",
        keyLineRu: "Jack says my brother, but not elder brother.",
        evidencePromptRu: "<strong>E.</strong> Проверьте, сказан ли возраст/старшинство брата.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "my brother has",
            explainRu: "Брат есть, но elder не сказано → Not Stated."
          }
        ]
      },
      {
        letter: "F",
        answer: "f",
        keyLineRu: "Rose says: I wish we could see one.",
        evidencePromptRu: "<strong>F.</strong> Найдите, видела ли Rose shooting star.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I wish we could see one",
            explainRu: "Она хотела бы увидеть, значит утверждение has seen — False."
          }
        ]
      },
      {
        letter: "G",
        answer: "f",
        keyLineRu: "Rose says it would be amazing if life were found.",
        evidencePromptRu: "<strong>G.</strong> Найдите отношение Rose к life on other planets.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "That would be amazing if we found life out there",
            explainRu: "Она не утверждает, что жизни нет → False."
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Rose",
        label: "Rose",
        fullText:
          "Hey, Jack! How are you today? How so? Lucky you. We don't have astronomy yet — only physics and maths. But I love stars! Have you ever looked at the stars and wondered about the universe? Are you kidding? Of course I know that. It's the closest star to Earth, and is only 93 million miles away from us. Yeah, and scientists believe that there are billions of galaxies out there. I have, but I don't remember any facts. Can you remind me? Whoa, that's crazy! Have you studied stars today as well? By the way, what do you call a group of stars that forms a shape in the sky and has a name? I think I can find the Big Dipper. It looks like a giant spoon. Cool! Have you ever seen a shooting star? That's so cool! I wish we could see one. Do you think there's life on other planets? That would be amazing if we found life out there. I wonder what they would look like. Definitely! I'd love to learn more about astronomy. It's so fascinating.",
        phrases: [
          { en: "We don't have astronomy yet", ru: "у нас ещё нет астрономии", tip: "B · False" },
          { en: "only physics and maths", ru: "только физика и математика" },
          { en: "wondered about the universe", ru: "задумывался о вселенной" },
          { en: "Of course I know that", ru: "конечно, я это знаю", tip: "B · False" },
          { en: "closest star to Earth", ru: "ближайшая к Земле звезда" },
          { en: "billions of galaxies", ru: "миллиарды галактик" },
          { en: "don't remember any facts", ru: "не помню фактов" },
          { en: "a group of stars that forms a shape", ru: "группа звёзд, образующая фигуру" },
          { en: "Big Dipper", ru: "Большая Медведица / ковш" },
          { en: "shooting star", ru: "падающая звезда", tip: "F" },
          { en: "I wish we could see one", ru: "хотелось бы нам увидеть одну", tip: "F · False" },
          { en: "life on other planets", ru: "жизнь на других планетах", tip: "G" }
        ],
        chunks: [
          { text: "Hey, Jack! How are you today? How so?", showText: true },
          { text: "Lucky you. We don't have astronomy yet — only physics and maths. But I love stars! Have you ever looked at the stars and wondered about the universe?", showText: true },
          { text: "Are you kidding? Of course I know that. It's the closest star to Earth, and is only 93 million miles away from us.", showText: true },
          { text: "Yeah, and scientists believe that there are billions of galaxies out there. I have, but I don't remember any facts. Can you remind me?", showText: true },
          { text: "Whoa, that's crazy! Have you studied stars today as well? By the way, what do you call a group of stars that forms a shape in the sky and has a name?", showText: true },
          { text: "I think I can find the Big Dipper. It looks like a giant spoon. Cool! Have you ever seen a shooting star?", showText: true },
          { text: "That's so cool! I wish we could see one. Do you think there's life on other planets? That would be amazing if we found life out there. I wonder what they would look like. Definitely! I'd love to learn more about astronomy. It's so fascinating.", showText: false }
        ]
      },
      {
        id: "Jack",
        label: "Jack",
        fullText:
          "Hi, Rosa! A bit overwhelmed, as we had four classes of astronomy today instead of the usual two. We usually have two classes on Mondays and Wednesdays, but our teacher went to a conference on Monday and rescheduled all the classes for today. Yeah, all the time. It's amazing how vast and mysterious it is. Did you know that the sun is actually a star? You are right! And did you know that the universe is still expanding today? That's crazy, isn't it? And have you heard of the Big Bang theory? Sure. It's the idea that the universe started from a massive explosion about 13.8 billion years ago. And today at school we talked about black holes. These are regions in space where the gravitational pull is so strong that nothing can escape from them, not even light. Oh, we call them constellations. No, we haven't studied constellations today, but my dad used to take me to the mountains and we would spend nights looking at them. He was the one who taught me about them. There's Orion, the Big Dipper, the Little Dipper, and many others. Can you find any of them in the sky? Yeah, and it's part of the constellation Ursa Major, which means \"Big Bear\" in Latin. I haven't, but my brother has. He says it's amazing. But it's not really a star. It's actually a meteoroid that enters Earth's atmosphere and burns up, creating a bright streak of light. It's possible. Scientists are always searching for signs of life on other planets or moons in our solar system. Yeah, it's hard to say. But it's exciting to think about the possibilities. Me too. It's a never-ending journey of discovery and wonder.",
        phrases: [
          { en: "four classes of astronomy today", ru: "четыре урока астрономии сегодня" },
          { en: "usual two", ru: "обычные два", tip: "A" },
          { en: "Mondays and Wednesdays", ru: "по понедельникам и средам", tip: "A · True" },
          { en: "rescheduled all the classes", ru: "перенёс все уроки" },
          { en: "vast and mysterious", ru: "огромная и загадочная" },
          { en: "universe is still expanding", ru: "вселенная всё ещё расширяется" },
          { en: "Big Bang theory", ru: "теория Большого взрыва" },
          { en: "massive explosion", ru: "мощный взрыв" },
          { en: "black holes", ru: "чёрные дыры", tip: "C" },
          { en: "gravitational pull", ru: "гравитационное притяжение" },
          { en: "nothing can escape", ru: "ничто не может вырваться" },
          { en: "we call them constellations", ru: "мы называем их созвездиями", tip: "D" },
          { en: "my dad used to take me", ru: "мой папа раньше водил меня", tip: "D · Rose/Jack trap" },
          { en: "my brother has", ru: "мой брат видел", tip: "E · NS" },
          { en: "meteoroid that enters Earth's atmosphere", ru: "метеороид, который входит в атмосферу Земли" },
          { en: "searching for signs of life", ru: "ищут признаки жизни", tip: "G" }
        ],
        chunks: [
          { text: "Hi, Rosa! A bit overwhelmed, as we had four classes of astronomy today instead of the usual two. We usually have two classes on Mondays and Wednesdays, but our teacher went to a conference on Monday and rescheduled all the classes for today.", showText: true },
          { text: "Yeah, all the time. It's amazing how vast and mysterious it is. Did you know that the sun is actually a star? You are right! And did you know that the universe is still expanding today?", showText: true },
          { text: "That's crazy, isn't it? And have you heard of the Big Bang theory? Sure. It's the idea that the universe started from a massive explosion about 13.8 billion years ago. And today at school we talked about black holes.", showText: true },
          { text: "These are regions in space where the gravitational pull is so strong that nothing can escape from them, not even light.", showText: true },
          { text: "Oh, we call them constellations. No, we haven't studied constellations today, but my dad used to take me to the mountains and we would spend nights looking at them. He was the one who taught me about them.", showText: true },
          { text: "There's Orion, the Big Dipper, the Little Dipper, and many others. Can you find any of them in the sky? Yeah, and it's part of the constellation Ursa Major, which means \"Big Bear\" in Latin.", showText: true },
          { text: "I haven't, but my brother has. He says it's amazing. But it's not really a star. It's actually a meteoroid that enters Earth's atmosphere and burns up, creating a bright streak of light.", showText: true },
          { text: "It's possible. Scientists are always searching for signs of life on other planets or moons in our solar system. Yeah, it's hard to say. But it's exciting to think about the possibilities. Me too. It's a never-ending journey of discovery and wonder.", showText: false }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
