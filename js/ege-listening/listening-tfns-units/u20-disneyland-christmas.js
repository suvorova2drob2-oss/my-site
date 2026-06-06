/**
 * ЕГЭ Listening TFNS · Unit 20 · Disneyland at Christmas (Dave & Mary).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-disneyland-christmas",
    unitOrder: 20,
    title: "Unit 20 · Disneyland at Christmas",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Dave & Mary · Disneyland at Christmas",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/20/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2020_%5Bcut_174sec%5D%20-%202.mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Disneyland:</strong> 1971 opening, Jim's chemistry project, best season to go, parade and fireworks, weather worries, ponchos.</p>",
    statements: [
      { letter: "A", text: "Orlando Disneyland was opened in 1981." },
      { letter: "B", text: "Jim was busy with his chemistry project." },
      {
        letter: "C",
        text: "Mary and Dave want to visit Disneyland on Christmas Eve."
      },
      { letter: "D", text: "On Christmas Santa Claus greets people at the entrance." },
      {
        letter: "E",
        text: "According to her Dad, Lesley will love a special Christmas parade."
      },
      { letter: "F", text: "Mary is afraid of being caught in stormy weather." },
      { letter: "G", text: "Raincoats are sold at the hotel." }
    ],
    key: {
      A: "f",
      B: "t",
      C: "f",
      D: "ns",
      E: "ns",
      F: "t",
      G: "ns"
    },
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Dave",
            text:
              "Mary, darling, what do you think of going to Disneyland this Christmas?"
          },
          {
            speaker: "Mary",
            text:
              "Our kids would be more than happy, Dave. But we need to decide which one we'd like to visit, where to stay, how to get there and much more."
          },
          {
            speaker: "Dave",
            text:
              "You're right. I've made a search on the Net and found out that Walt Disney World, in Orlando Florida, is the only \"World\" in a set of \"Disneylands\" around the globe. Its territory is enormous with many theme parks and shopping/entertainment zones."
          },
          {
            speaker: "Mary",
            text:
              "I've heard of it. It's the one which was built over decades, starting with The Magic Kingdom which opened in 1971. Right?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Dave",
            text:
              "Amazing, how do you know?"
          },
          {
            speaker: "Mary",
            text:
              "Jim did a project on it last month. He was so busy with his chemistry project that he didn't have time for this one. So, I decided to help and did a little research for him. And, as you know, I have a wonderful memory of facts and figures. Anyway, do you want to visit Disneyland on Christmas Eve?"
          },
          {
            speaker: "Dave",
            text:
              "Well, it might be better to go there between Thanksgiving and Christmas, as it's a top time to visit Disney World. The parks will be decorated for Christmas, but they won't be crowded. But, Lesley might be a bit disappointed because at this period the Magic Kingdom closes early some nights, and the weather may be too cool for the water parks."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "We'll deal with Lesley when we're there. She's a bit eccentric but I know what to do. I think she'll be happy to know that some parks will probably be open until midnight, and there is a lot of fun after dark. I'm sure she'll enjoy a special bright parade, fireworks, and shows that only happen when the park is open late."
          },
          {
            speaker: "Dave",
            text:
              "Darling, you know more than me!"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "Oh, thank you! The only thing I'm not sure about is the weather. As you said it may be too cool for water rides, but won't it be too cold in general? Or too rainy? Could there be thunderstorms or hurricanes?"
          },
          {
            speaker: "Dave",
            text:
              "Mary, calm down. Hurricanes are rarely a problem, because Orlando is inland. As for the rain, we can bring plastic ponchos, or buy Mickey ponchos on the spot. We can also stay in the hotel just by the park and leave the park whenever we want and return when the weather gets better."
          },
          {
            speaker: "Mary",
            text:
              "Ok, Dave. You're right as ever!"
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "The Magic Kingdom opened in 1971, not 1981.",
        explainRu: "В дате в утверждении ошибка.",
        evidencePromptRu: "<strong>A.</strong> Найдите opened in 1971.",
        segments: [
          { kind: "hit", sol: "e", text: "opened in 1971" }
        ]
      },
      {
        letter: "B",
        key: "t",
        paragraphIndex: 1,
        keyLineRu: "Jim was busy with his chemistry project.",
        explainRu: "Это сказано буквально.",
        evidencePromptRu: "<strong>B.</strong> Найдите busy with his chemistry project.",
        segments: [
          { kind: "hit", sol: "e", text: "busy with his chemistry project" }
        ]
      },
      {
        letter: "C",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "Dave prefers going between Thanksgiving and Christmas, not on Christmas Eve.",
        explainRu: "Точная дата из утверждения не совпадает с планом.",
        evidencePromptRu: "<strong>C.</strong> Найдите between Thanksgiving and Christmas.",
        segments: [
          { kind: "hit", sol: "e", text: "between Thanksgiving and Christmas" }
        ]
      },
      {
        letter: "D",
        key: "ns",
        paragraphIndex: 2,
        keyLineRu: "The text mentions parade, fireworks and shows, but nothing about Santa at the entrance.",
        nsExplainRu: "О Christmas activities говорится, но Santa greeting people at the entrance не упоминается.",
        evidencePromptRu: "<strong>D.</strong> Здесь важно увидеть отсутствие упоминания Santa.",
        segments: []
      },
      {
        letter: "E",
        key: "ns",
        paragraphIndex: 2,
        keyLineRu: "Mary herself says Lesley will enjoy the parade; her Dad is not mentioned.",
        nsExplainRu: "Возможно, Lesley и правда понравится parade, но ничего не сказано about her Dad's opinion.",
        evidencePromptRu: "<strong>E.</strong> Здесь проверьте, кто именно это говорит.",
        segments: []
      },
      {
        letter: "F",
        key: "t",
        paragraphIndex: 3,
        keyLineRu: "Mary worries about cold, rain, thunderstorms and hurricanes.",
        explainRu: "Это и есть concern about stormy weather.",
        evidencePromptRu: "<strong>F.</strong> Найдите too rainy / thunderstorms or hurricanes.",
        segments: [
          { kind: "hit", sol: "e", text: "Or too rainy?" },
          { kind: "hit", sol: "e", text: "Could there be thunderstorms or hurricanes?" }
        ]
      },
      {
        letter: "G",
        key: "ns",
        paragraphIndex: 3,
        keyLineRu: "Ponchos can be bought on the spot, but the hotel is not named as the place of sale.",
        nsExplainRu: "Есть hotel near the park and buying ponchos on the spot, but no direct statement that they are sold at the hotel.",
        evidencePromptRu: "<strong>G.</strong> Здесь проверьте where exactly ponchos are sold.",
        segments: []
      }
    ],
    shadowSpeakers: [
      {
        id: "Dave",
        label: "Dave",
        fullText:
          "Mary, darling, what do you think of going to Disneyland this Christmas? You're right. I've made a search on the Net and found out that Walt Disney World, in Orlando Florida, is the only \"World\" in a set of \"Disneylands\" around the globe. Its territory is enormous with many theme parks and shopping/entertainment zones. Amazing, how do you know? Well, it might be better to go there between Thanksgiving and Christmas, as it's a top time to visit Disney World. The parks will be decorated for Christmas, but they won't be crowded. But, Lesley might be a bit disappointed because at this period the Magic Kingdom closes early some nights, and the weather may be too cool for the water parks. Darling, you know more than me! Mary, calm down. Hurricanes are rarely a problem, because Orlando is inland. As for the rain, we can bring plastic ponchos, or buy Mickey ponchos on the spot. We can also stay in the hotel just by the park and leave the park whenever we want and return when the weather gets better.",
        phrases: [
          { en: "Walt Disney World", ru: "Walt Disney World" },
          { en: 'the only "World"', ru: "единственный \"World\"" },
          { en: "theme parks", ru: "тематические парки" },
          { en: "shopping/entertainment zones", ru: "зоны шопинга и развлечений" },
          { en: "between Thanksgiving and Christmas", ru: "между Thanksgiving и Christmas", tip: "C" },
          { en: "top time to visit", ru: "отличное время для посещения" },
          { en: "won't be crowded", ru: "не будет многолюдно" },
          { en: "too cool for the water parks", ru: "слишком прохладно для аквапарков" },
          { en: "Orlando is inland", ru: "Орландо находится в глубине материка" },
          { en: "plastic ponchos", ru: "пластиковые пончо" },
          { en: "Mickey ponchos on the spot", ru: "пончо с Микки на месте", tip: "G" },
          { en: "the weather gets better", ru: "погода улучшится" }
        ],
        chunks: []
      },
      {
        id: "Mary",
        label: "Mary",
        fullText:
          "Our kids would be more than happy, Dave. But we need to decide which one we'd like to visit, where to stay, how to get there and much more. I've heard of it. It's the one which was built over decades, starting with The Magic Kingdom which opened in 1971. Right? Jim did a project on it last month. He was so busy with his chemistry project that he didn't have time for this one. So, I decided to help and did a little research for him. And, as you know, I have a wonderful memory of facts and figures. Anyway, do you want to visit Disneyland on Christmas Eve? We'll deal with Lesley when we're there. She's a bit eccentric but I know what to do. I think she'll be happy to know that some parks will probably be open until midnight, and there is a lot of fun after dark. I'm sure she'll enjoy a special bright parade, fireworks, and shows that only happen when the park is open late. Oh, thank you! The only thing I'm not sure about is the weather. As you said it may be too cool for water rides, but won't it be too cold in general? Or too rainy? Could there be thunderstorms or hurricanes? Ok, Dave. You're right as ever!",
        phrases: [
          { en: "our kids would be more than happy", ru: "наши дети были бы очень счастливы" },
          { en: "opened in 1971", ru: "открылся в 1971 году", tip: "A" },
          { en: "chemistry project", ru: "проект по химии", tip: "B" },
          { en: "did a little research", ru: "провела небольшое исследование" },
          { en: "memory of facts and figures", ru: "память на факты и цифры" },
          { en: "on Christmas Eve", ru: "в канун Рождества" },
          { en: "open until midnight", ru: "открыты до полуночи" },
          { en: "fun after dark", ru: "развлечения после наступления темноты" },
          { en: "special bright parade", ru: "особый яркий парад", tip: "E" },
          { en: "fireworks", ru: "фейерверки" },
          { en: "too rainy", ru: "слишком дождливо", tip: "F" },
          { en: "thunderstorms or hurricanes", ru: "грозы или ураганы", tip: "F" }
        ],
        chunks: []
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
