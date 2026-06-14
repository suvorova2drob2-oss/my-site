/**
 * ЕГЭ Listening TFNS · Unit 17 · Luxor summer plans (Jerry & Kate).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-luxor-summer",
    unitOrder: 17,
    title: "Unit 17 · Luxor summer plans",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Jerry & Kate · Luxor summer plans",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/17/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2017%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Luxor:</strong> crowded vs peaceful places, Paris last year, sights in Luxor, pool vs sea, booking in advance, hotel details.</p>",
    statements: [
      {
        letter: "A",
        text: "Jerry does not want to travel to a crowded place this summer."
      },
      {
        letter: "B",
        text: "Jerry thinks that his last year journey to Paris was perfect."
      },
      {
        letter: "C",
        text: "Kate would prefer to go to a popular European tourist resort."
      },
      {
        letter: "D",
        text: "Jerry is going to swim in the sea in Egypt."
      },
      {
        letter: "E",
        text: "Jerry will take part in several archaeological excavations held in Luxor."
      },
      {
        letter: "F",
        text: "Kate thinks that booking in advance is important."
      },
      {
        letter: "G",
        text: "Jerry has discovered that prices at the chosen five-star hotel are high."
      }
    ],
    key: {
      A: "t",
      B: "f",
      C: "ns",
      D: "f",
      E: "f",
      F: "t",
      G: "ns"
    },
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "Hi, Jerry. The school year is almost over. Do you have any plans for the summer holiday?"
          },
          {
            speaker: "Jerry",
            text:
              "I'm planning on sleeping all day, every day! Yeah, I'm just pulling your leg. Actually, I'm going to travel to Luxor in Egypt."
          },
          {
            speaker: "Kate",
            text:
              "Really? Why would you go to Luxor but not to the Red Sea resorts? They're much more popular tourist sites."
          },
          {
            speaker: "Jerry",
            text:
              "Exactly! They are very popular, so they'll be too crowded. What I need is peace and comfort. I enjoyed my last year trip to Paris to see the Eiffel Tower, but there were so many tourists there. I think it spoiled the atmosphere a bit."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "I'm sure Luxor won't be so crowded. But won't it be too hot in the summer?"
          },
          {
            speaker: "Jerry",
            text:
              "I'll bear anything for the sake of the views of this ancient Egyptian city and I rely on air conditioning inside — the hotel promises it works perfectly there."
          },
          {
            speaker: "Kate",
            text:
              "Well, that sounds good. I wouldn't mind going there myself then. Still, I wonder ... is there anything worth seeing in Luxor?"
          },
          {
            speaker: "Jerry",
            text:
              "Sure! For one thing, there's the unique scenery of the city built directly on the Nile. I'm sure you've heard of Luxor Temple. There are also the Egyptian Pyramids which are said to be spectacular. They are a major tourist attraction — and rightly so."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "Of course, I have heard of the Pyramids, but won't you get bored just looking at them?"
          },
          {
            speaker: "Jerry",
            text:
              "Come on, Kate, there're lots of things to do. I can take a river cruise on the Nile, and I will visit some excavation sites at Luxor as it is a very historical city with many ancient remains that are still amazing."
          },
          {
            speaker: "Kate",
            text:
              "Well, when you describe it like that, it sounds really interesting!"
          },
          {
            speaker: "Jerry",
            text:
              "And that's not all. I'll be able to eat local spicy food and enjoy swimming and sunbathing as they have a huge open-air swimming pool in the hotel."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "I'm sure you'll have fun, Jerry, but let me ask you — have you already reserved a room at the hotel you want? I find last minute bookings very disappointing."
          },
          {
            speaker: "Jerry",
            text:
              "Don't worry, I'm very lucky. I've reserved a room at the Pyramid Luxor Hotel, the best five-star resort in the area. I've seen some pictures on the Internet, it's really nice!"
          },
          {
            speaker: "Kate",
            text:
              "That's great, Jerry. I'm looking forward to seeing your photos when you get back."
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "Jerry avoids crowded places and wants peace and comfort.",
        explainRu: "Он прямо объясняет выбор Luxor тем, что популярные места слишком crowded.",
        evidencePromptRu: "<strong>A.</strong> Найдите too crowded / peace and comfort.",
        segments: [
          { kind: "hit", sol: "e", text: "they'll be too crowded" },
          { kind: "hit", sol: "e", text: "What I need is peace and comfort" }
        ]
      },
      {
        letter: "B",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "Paris was not perfect: too many tourists spoiled the atmosphere a bit.",
        explainRu: "Он говорит о положительном впечатлении, но не считает поездку идеальной.",
        evidencePromptRu: "<strong>B.</strong> Найдите spoiled the atmosphere a bit.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I enjoyed my last year trip to Paris"
          },
          {
            kind: "hit",
            sol: "e",
            text: "it spoiled the atmosphere a bit"
          }
        ]
      },
      {
        letter: "C",
        key: "ns",
        paragraphIndex: 1,
        keyLineRu: "Kate does not say she prefers a popular European resort.",
        nsExplainRu: "Она лишь задаёт вопросы и позже говорит, что сама бы не отказалась поехать в Luxor. Про European resort preference данных нет.",
        evidencePromptRu: "<strong>C.</strong> Здесь проверьте, что именно НЕ сказано о предпочтениях Kate.",
        segments: []
      },
      {
        letter: "D",
        key: "f",
        paragraphIndex: 2,
        keyLineRu: "Jerry will swim in the hotel pool, not in the sea.",
        explainRu: "В записи есть swimming, но речь о бассейне в отеле.",
        evidencePromptRu: "<strong>D.</strong> Найдите open-air swimming pool.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "a huge open-air swimming pool in the hotel"
          }
        ]
      },
      {
        letter: "E",
        key: "f",
        paragraphIndex: 2,
        keyLineRu: "Jerry will visit excavation sites, not participate in excavations.",
        explainRu: "Подмена действия: visit sites ≠ take part in excavations.",
        evidencePromptRu: "<strong>E.</strong> Проверьте visit some excavation sites.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I will visit some excavation sites at Luxor"
          }
        ]
      },
      {
        letter: "F",
        key: "t",
        paragraphIndex: 3,
        keyLineRu: "Kate believes booking at the last minute is disappointing.",
        explainRu: "Это прямой намёк на важность бронирования заранее.",
        evidencePromptRu: "<strong>F.</strong> Найдите last minute bookings very disappointing.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I find last minute bookings very disappointing"
          }
        ]
      },
      {
        letter: "G",
        key: "ns",
        paragraphIndex: 3,
        keyLineRu: "Jerry says the hotel looks nice, but says nothing about high prices.",
        nsExplainRu: "Есть информация про five-star hotel и photos on the Internet, но про high prices ничего не сказано.",
        evidencePromptRu: "<strong>G.</strong> Здесь важно заметить отсутствие информации о цене.",
        segments: []
      }
    ],
    shadowSpeakers: [
      {
        id: "Jerry",
        label: "Jerry",
        fullText:
          "I'm planning on sleeping all day, every day! Yeah, I'm just pulling your leg. Actually, I'm going to travel to Luxor in Egypt. Exactly! They are very popular, so they'll be too crowded. What I need is peace and comfort. I enjoyed my last year trip to Paris to see the Eiffel Tower, but there were so many tourists there. I think it spoiled the atmosphere a bit. I'll bear anything for the sake of the views of this ancient Egyptian city and I rely on air conditioning inside — the hotel promises it works perfectly there. Sure! For one thing, there's the unique scenery of the city built directly on the Nile. I'm sure you've heard of Luxor Temple. There are also the Egyptian Pyramids which are said to be spectacular. They are a major tourist attraction — and rightly so. Come on, Kate, there're lots of things to do. I can take a river cruise on the Nile, and I will visit some excavation sites at Luxor as it is a very historical city with many ancient remains that are still amazing. And that's not all. I'll be able to eat local spicy food and enjoy swimming and sunbathing as they have a huge open-air swimming pool in the hotel. Don't worry, I'm very lucky. I've reserved a room at the Pyramid Luxor Hotel, the best five-star resort in the area. I've seen some pictures on the Internet, it's really nice!",
        phrases: [
          { en: "pulling your leg", ru: "подшучивать" },
          { en: "travel to Luxor", ru: "поехать в Luxor" },
          { en: "too crowded", ru: "слишком людно", tip: "A" },
          { en: "peace and comfort", ru: "спокойствие и комфорт", tip: "A" },
          { en: "trip to Paris", ru: "поездка в Париж", tip: "B" },
          { en: "spoiled the atmosphere a bit", ru: "немного испортило атмосферу", tip: "B" },
          { en: "air conditioning", ru: "кондиционер" },
          { en: "works perfectly", ru: "работает отлично" },
          { en: "unique scenery", ru: "уникальные виды" },
          { en: "built directly on the Nile", ru: "построенный прямо на Ниле" },
          { en: "Luxor Temple", ru: "Храм в Луксоре" },
          { en: "Egyptian Pyramids", ru: "египетские пирамиды" },
          { en: "river cruise on the Nile", ru: "речной круиз по Нилу" },
          { en: "visit some excavation sites", ru: "посетить места раскопок", tip: "E" },
          { en: "historical city", ru: "исторический город" },
          { en: "ancient remains", ru: "древние останки / руины" },
          { en: "local spicy food", ru: "местная острая еда" },
          { en: "open-air swimming pool", ru: "открытый бассейн", tip: "D" },
          { en: "reserved a room", ru: "забронировал комнату", tip: "F" },
          { en: "five-star resort", ru: "пятизвёздочный отель" },
          { en: "seen some pictures on the Internet", ru: "видел фотографии в интернете" }
        ],
        chunks: []
      },
      {
        id: "Kate",
        label: "Kate",
        fullText:
          "Hi, Jerry. The school year is almost over. Do you have any plans for the summer holiday? Really? Why would you go to Luxor but not to the Red Sea resorts? They're much more popular tourist sites. I'm sure Luxor won't be so crowded. But won't it be too hot in the summer? Well, that sounds good. I wouldn't mind going there myself then. Still, I wonder ... is there anything worth seeing in Luxor? Of course, I have heard of the Pyramids, but won't you get bored just looking at them? Well, when you describe it like that, it sounds really interesting! I'm sure you'll have fun, Jerry, but let me ask you — have you already reserved a room at the hotel you want? I find last minute bookings very disappointing. That's great, Jerry. I'm looking forward to seeing your photos when you get back.",
        phrases: [
          { en: "summer holiday", ru: "летние каникулы" },
          { en: "Red Sea resorts", ru: "курорты Красного моря" },
          { en: "popular tourist sites", ru: "популярные туристические места" },
          { en: "won't be so crowded", ru: "не будет так людно" },
          { en: "too hot in the summer", ru: "слишком жарко летом" },
          { en: "I wouldn't mind going there myself", ru: "я бы и сама не отказалась туда поехать" },
          { en: "anything worth seeing", ru: "что-то стоящее для осмотра" },
          { en: "won't you get bored", ru: "тебе не станет скучно?" },
          { en: "sounds really interesting", ru: "звучит очень интересно" },
          { en: "reserved a room", ru: "забронировал номер", tip: "F" },
          { en: "last minute bookings", ru: "бронирования в последний момент", tip: "F" },
          { en: "very disappointing", ru: "очень разочаровывают", tip: "F" },
          { en: "looking forward to", ru: "с нетерпением ждать" },
          { en: "when you get back", ru: "когда ты вернёшься" }
        ],
        chunks: []
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
