/**
 * ЕГЭ Listening Matching · Unit 13 · Camping (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "When the sun comes out, the snow melts, and wildlife returns, many of my friends are eager to kick off a camping season. Whether to escape the stresses of city life or take a pandemic-safe holiday, more families and individuals now are turning to the great outdoors. But it also raises a few pain points, especially for first-time campers or less experienced nature lovers. After all, camping isn't all bonfires and lying in the shade — it requires extensive planning and research."
    },
    {
      id: "B",
      text:
        "I think the best part of any camping trip is sitting down to enjoy a hearty meal together. If your camping trip lasts more than a weekend and hunting or trapping animals isn't on the itinerary, I'd recommend non-perishable food options. Oatmeal and granola are excellent sources of fiber and protein. Dehydrated meats and pasta, or beans will also keep fresh without the need for cold storage. For snacking, I often pack up some popcorn, nuts, dried fruit, crackers, or even chocolate."
    },
    {
      id: "C",
      text:
        "When I go camping, I always take a compass. For me, it's an essential camping tool. Compasses are both compact and dependable when it comes to navigating the woods, namely because they don't rely on batteries. They're all about know how. The orienteering compass is most commonly used outdoors. The needle always points north and is almost always red. Magnetic north will allow you to orient yourself and identify the cardinal points."
    },
    {
      id: "D",
      text:
        "When I go camping, I always put a compass in my pocket, grab a pair of binoculars and take my phone with a field-guide app for identifying plants, birds and other forms of wildlife. Actually, I think learning how to identify what's around you is very useful. And it's never been easier. It can happen there's no Internet around in the wild. But you have the huge database of a field-guide app. So, neither Wi-Fi nor cell service is needed for you. It's really great."
    },
    {
      id: "E",
      text:
        "In my opinion, fire is an absolute necessity for staying warm and cooking. Our camping checklist always includes matches, a lighter, kindling and firewood. There're a few types of campfires and methods of building them, but the most common is the cone formation. Of course, it's important to keep in mind that the cone setup will burn through wood quickly. So, the log cabin arrangement may be the best option if you're using the campfire for cooking."
    },
    {
      id: "F",
      text:
        "Getting ready for camping, I first think about the weather. It's really important to consider the season, local climate and weather forecast when packing a suitcase. To save space, I tightly roll, rather than fold, each clothing piece and stack it inside my suitcase. I usually have at least two changes of clothes for each day of my trip. Camping trips typically expose travellers to more dirt, sweat and messy foods. It's greatly different from life at home!"
    }
  ];

  pack.units.push({
    id: "u13-camping",
    unitOrder: 13,
    title: "Unit 13 · Camping",
    examSection: "§1 · Задание 1",
    headerTitle: "Camping",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/13/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2013%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Camping:</strong> A — planning, B — food, C — compass, D — wildlife app, E — fire, F — clothes/weather.</p>",
    statements: [
      { num: 1, text: "It is a really helpful device for camping." },
      { num: 2, text: "Much preparation is needed to enjoy camping." },
      { num: 3, text: "This is what we need if we are hungry or cold." },
      { num: 4, text: "You should decide beforehand what to wear." },
      { num: 5, text: "Camping is a good way to stay healthy and fit." },
      { num: 6, text: "Technology simplifies watching the wildlife." },
      { num: 7, text: "A lot can be taken on a trip not to feel hungry." }
    ],
    extraStatementNum: 5,
    key: [2, 7, 1, 6, 3, 4],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "extensive planning and research", ru: "серьёзное планирование и изучение", tip: "A · №2" },
      { en: "non-perishable food options", ru: "продукты, которые долго не портятся", tip: "B · №7" },
      { en: "an essential camping tool", ru: "важный инструмент для camping", tip: "C · №1" },
      { en: "field-guide app", ru: "приложение-полевой справочник", tip: "D · №6" },
      { en: "staying warm and cooking", ru: "согреться и готовить", tip: "E · №3" },
      { en: "weather forecast when packing", ru: "прогноз погоды при сборе вещей", tip: "F · №4" }
    ],
    tapPhrases: [
      { en: "kick off a camping season", ru: "начать сезон camping" },
      { en: "first-time campers", ru: "те, кто впервые идёт в camping" },
      { en: "hearty meal", ru: "сытная еда" },
      { en: "cold storage", ru: "хранение в холодильнике" },
      { en: "cardinal points", ru: "стороны света" },
      { en: "cell service", ru: "мобильная связь" },
      { en: "camping checklist", ru: "список для camping" },
      { en: "two changes of clothes", ru: "две смены одежды" }
    ],
    shadowSpeakers: speakers.map(function (sp) {
      return {
        id: sp.id,
        label: "Speaker " + sp.id,
        fullText: sp.text,
        phrases: [],
        chunks: [{ text: sp.text, showText: true }]
      };
    }),
    huntLabs: [
      {
        speaker: "A",
        keyNum: 2,
        trapNums: [5],
        keyLineRu: "Camping requires extensive planning and research.",
        evidencePromptRu: "<strong>A.</strong> Найдите planning / research.",
        segments: [{ kind: "hit", sol: "e", text: "requires extensive planning and research" }]
      },
      {
        speaker: "B",
        keyNum: 7,
        trapNums: [3],
        keyLineRu: "Speaker B lists many foods to take.",
        evidencePromptRu: "<strong>B.</strong> Найдите food list.",
        segments: [
          { kind: "hit", sol: "e", text: "non-perishable food options" },
          { kind: "hit", sol: "e", text: "popcorn, nuts, dried fruit, crackers, or even chocolate" }
        ]
      },
      {
        speaker: "C",
        keyNum: 1,
        trapNums: [6],
        keyLineRu: "Compass is an essential camping tool.",
        evidencePromptRu: "<strong>C.</strong> Найдите essential tool.",
        segments: [{ kind: "hit", sol: "e", text: "it's an essential camping tool" }]
      },
      {
        speaker: "D",
        keyNum: 6,
        trapNums: [1],
        keyLineRu: "A field-guide app helps identify wildlife without Internet.",
        evidencePromptRu: "<strong>D.</strong> Найдите app / wildlife.",
        segments: [
          { kind: "hit", sol: "e", text: "field-guide app for identifying plants, birds and other forms of wildlife" },
          { kind: "hit", sol: "e", text: "neither Wi-Fi nor cell service is needed" }
        ]
      },
      {
        speaker: "E",
        keyNum: 3,
        trapNums: [],
        keyLineRu: "Fire is needed for warmth and cooking.",
        evidencePromptRu: "<strong>E.</strong> Найдите warm and cooking.",
        segments: [{ kind: "hit", sol: "e", text: "fire is an absolute necessity for staying warm and cooking" }]
      },
      {
        speaker: "F",
        keyNum: 4,
        trapNums: [],
        keyLineRu: "Think about weather when packing clothes.",
        evidencePromptRu: "<strong>F.</strong> Найдите weather + clothes.",
        segments: [
          { kind: "hit", sol: "e", text: "consider the season, local climate and weather forecast when packing" },
          { kind: "hit", sol: "e", text: "two changes of clothes for each day" }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
