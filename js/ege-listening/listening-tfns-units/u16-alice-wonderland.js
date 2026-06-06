/**
 * ЕГЭ Listening TFNS · Unit 16 · Alice in Wonderland (Sally & Susan).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-alice-wonderland",
    unitOrder: 16,
    title: "Unit 16 · Alice in Wonderland",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Sally & Susan · Alice in Wonderland",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/16/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2016%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Alice in Wonderland:</strong> understanding now vs childhood reading, favourite characters, undertones, film adaptations, Disney changes.</p>",
    statements: [
      {
        letter: "A",
        text: 'Sally likes "Alice in Wonderland" more now, as she understands it better.'
      },
      {
        letter: "B",
        text: 'Sally\'s father loved "Alice in Wonderland" when he was a kid.'
      },
      {
        letter: "C",
        text: "The Mad Hatter's character makes Sally think of her own personality."
      },
      {
        letter: "D",
        text: '"Alice in Wonderland" did not make a good impression upon Susan.'
      },
      {
        letter: "E",
        text: "Sally is sure that not everything is openly expressed in the book."
      },
      {
        letter: "F",
        text: 'Susan has seen all the film adaptations of "Alice in Wonderland".'
      },
      {
        letter: "G",
        text: "Sally respects Disney for not changing anything in the story."
      }
    ],
    key: {
      A: "t",
      B: "f",
      C: "t",
      D: "f",
      E: "t",
      F: "f",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Susan", text: 'Sally, have you read "Alice\'s Adventures in Wonderland"?' },
          {
            speaker: "Sally",
            text:
              "Yes. My mother read and loved it when she was younger and I have her copy. I loved it when I was younger, and even more now that I understand the metaphors and the irony."
          },
          {
            speaker: "Susan",
            text:
              "Personally, I have a great love for the Caterpillar. And who is your favourite character from the book?"
          },
          {
            speaker: "Sally",
            text:
              "I think it is the Mad Hatter. His madness and playfulness helps me understand who I am or at least try to be as a person. What is your favourite passage from the book?"
          },
          {
            speaker: "Susan",
            text:
              "I love when the queen says \"Sometimes I've believed in as many as six impossible things before breakfast.\""
          },
          {
            speaker: "Sally",
            text:
              "My favourite passage is Alice's conversation with herself as she falls down the rabbit hole. It was in that moment that I really fell in love with this quaint little girl named Alice."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Susan",
            text:
              "Do you think that the book has any undertones, or do you merely love it as it is, a book written in an eccentric and witty style, full of twisted adventures?"
          },
          {
            speaker: "Sally",
            text:
              "I would say there are many witty, eccentric and cleverly twisted books out there. Of course I think there are undertones. There are so many undertones in fact that I'm afraid the Alice book may become too outdated and cryptic for today's children."
          },
          {
            speaker: "Susan",
            text:
              "Oh, no! I think of it as a contemporary book that can be enjoyed for years to come. I hope my children will read the same cherished copy I read and my mother read before me."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Sally",
            text: "By the way, what is your favourite film adaptation of the Alice book?"
          },
          {
            speaker: "Susan",
            text:
              "I am not as familiar with the film adaptations as I am with the novel and musical interpretations. I quite like a music video that a friend of mine has done to the song \"White Rabbit\", but I suppose my favourite Alice film is the Disney version."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Sally",
            text:
              "Yes. I highly respect Walt Disney and his work, and I think the movie is well done. Though I much prefer the book itself, Disney was not afraid to add a little bit of himself to the film, which I respect him for."
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "Sally says she loves the book even more now because she understands metaphors and irony.",
        explainRu: "Она прямо сравнивает прошлое и настоящее восприятие книги.",
        evidencePromptRu: "<strong>A.</strong> Найдите even more now + understand the metaphors and the irony.",
        segments: [
          { kind: "hit", sol: "e", text: "I loved it when I was younger, and even more now" },
          { kind: "hit", sol: "e", text: "I understand the metaphors and the irony" }
        ]
      },
      {
        letter: "B",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "Sally mentions her mother, not her father.",
        explainRu: "В утверждении подменен член семьи.",
        evidencePromptRu: "<strong>B.</strong> Проверьте father/mother.",
        segments: [{ kind: "hit", sol: "e", text: "My mother read and loved it when she was younger" }]
      },
      {
        letter: "C",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "Mad Hatter helps Sally understand who she is (her personality).",
        explainRu: "Салли связывает персонажа с пониманием себя.",
        evidencePromptRu: "<strong>C.</strong> Найдите helps me understand who I am.",
        segments: [
          { kind: "hit", sol: "e", text: "His madness and playfulness helps me understand who I am" }
        ]
      },
      {
        letter: "D",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "Susan says she loves parts of the book, so the impression is positive.",
        explainRu: "Она прямо говорит о любви к персонажу и любимой цитате.",
        evidencePromptRu: "<strong>D.</strong> Найдите Susan's positive reaction.",
        segments: [
          { kind: "hit", sol: "e", text: "Personally, I have a great love for the Caterpillar" },
          {
            kind: "hit",
            sol: "e",
            text: "I love when the queen says \"Sometimes I've believed in as many as six impossible things before breakfast.\""
          }
        ]
      },
      {
        letter: "E",
        key: "t",
        paragraphIndex: 1,
        keyLineRu: "Sally believes the book has many undertones, not everything is explicit.",
        explainRu: "Фраза there are so many undertones прямо подтверждает идею скрытого смысла.",
        evidencePromptRu: "<strong>E.</strong> Найдите undertones.",
        segments: [
          { kind: "hit", sol: "e", text: "Of course I think there are undertones" },
          { kind: "hit", sol: "e", text: "There are so many undertones" }
        ]
      },
      {
        letter: "F",
        key: "f",
        paragraphIndex: 2,
        keyLineRu: "Susan says she is not familiar with all film adaptations.",
        explainRu: "Она прямо отрицает глубокое знакомство с экранизациями.",
        evidencePromptRu: "<strong>F.</strong> Найдите not as familiar.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I am not as familiar with the film adaptations as I am with the novel and musical interpretations"
          }
        ]
      },
      {
        letter: "G",
        key: "f",
        paragraphIndex: 3,
        keyLineRu: "Sally respects Disney precisely because he added something of himself.",
        explainRu: "В утверждении искажение: сказано opposite of the text.",
        evidencePromptRu: "<strong>G.</strong> Найдите add a little bit of himself.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Disney was not afraid to add a little bit of himself to the film"
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Sally",
        label: "Sally",
        fullText:
          "Yes. My mother read and loved it when she was younger and I have her copy. I loved it when I was younger, and even more now that I understand the metaphors and the irony. I think it is the Mad Hatter. His madness and playfulness helps me understand who I am or at least try to be as a person. What is your favourite passage from the book? My favourite passage is Alice's conversation with herself as she falls down the rabbit hole. It was in that moment that I really fell in love with this quaint little girl named Alice. I would say there are many witty, eccentric and cleverly twisted books out there. Of course I think there are undertones. There are so many undertones in fact that I'm afraid the Alice book may become too outdated and cryptic for today's children. By the way, what is your favourite film adaptation of the Alice book? Yes. I highly respect Walt Disney and his work, and I think the movie is well done. Though I much prefer the book itself, Disney was not afraid to add a little bit of himself to the film, which I respect him for.",
        phrases: [
          { en: "I have her copy", ru: "у меня ее экземпляр" },
          { en: "even more now", ru: "сейчас даже больше" },
          { en: "metaphors and irony", ru: "метафоры и ирония", tip: "A" },
          { en: "Mad Hatter", ru: "Безумный Шляпник", tip: "C" },
          { en: "madness and playfulness", ru: "безумие и игривость" },
          { en: "helps me understand who I am", ru: "помогает понять, кто я", tip: "C" },
          { en: "my favourite passage", ru: "мой любимый отрывок" },
          { en: "falls down the rabbit hole", ru: "падает в кроличью нору" },
          { en: "fell in love with", ru: "по-настоящему полюбила" },
          { en: "witty, eccentric and cleverly twisted", ru: "остроумные, эксцентричные и хитро закрученные" },
          { en: "there are undertones", ru: "есть скрытые смыслы", tip: "E" },
          { en: "too outdated and cryptic", ru: "слишком устаревшей и загадочной" },
          { en: "favourite film adaptation", ru: "любимая экранизация" },
          { en: "highly respect Walt Disney", ru: "очень уважаю Уолта Диснея" },
          { en: "much prefer the book itself", ru: "гораздо больше предпочитаю книгу" },
          { en: "add a little bit of himself", ru: "добавить немного себя", tip: "G" }
        ],
        chunks: []
      },
      {
        id: "Susan",
        label: "Susan",
        fullText:
          "Sally, have you read \"Alice's Adventures in Wonderland\"? Personally, I have a great love for the Caterpillar. And who is your favourite character from the book? I love when the queen says \"Sometimes I've believed in as many as six impossible things before breakfast.\" Do you think that the book has any undertones, or do you merely love it as it is, a book written in an eccentric and witty style, full of twisted adventures? Oh, no! I think of it as a contemporary book that can be enjoyed for years to come. I hope my children will read the same cherished copy I read and my mother read before me. I am not as familiar with the film adaptations as I am with the novel and musical interpretations. I quite like a music video that a friend of mine has done to the song \"White Rabbit\", but I suppose my favourite Alice film is the Disney version.",
        phrases: [
          { en: "Alice's Adventures in Wonderland", ru: "«Приключения Алисы в Стране чудес»" },
          { en: "a great love for the Caterpillar", ru: "большая любовь к Гусенице", tip: "D" },
          { en: "favourite character", ru: "любимый персонаж" },
          { en: "as many as six impossible things", ru: "целых шесть невозможных вещей" },
          { en: "before breakfast", ru: "до завтрака" },
          { en: "book written in an eccentric and witty style", ru: "книга, написанная в эксцентричном и остроумном стиле" },
          { en: "full of twisted adventures", ru: "полная запутанных приключений" },
          { en: "a contemporary book", ru: "современная книга" },
          { en: "enjoyed for years to come", ru: "которой будут наслаждаться еще много лет" },
          { en: "the same cherished copy", ru: "тот же дорогой сердцу экземпляр" },
          { en: "my mother read before me", ru: "который до меня читала моя мама" },
          { en: "not as familiar with the film adaptations", ru: "не настолько знакома с экранизациями", tip: "F" },
          { en: "novel and musical interpretations", ru: "роман и музыкальные интерпретации" },
          { en: "music video", ru: "музыкальное видео" },
          { en: "White Rabbit", ru: "White Rabbit" },
          { en: "Disney version", ru: "версия Disney" }
        ],
        chunks: []
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
