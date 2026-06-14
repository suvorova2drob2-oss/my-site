/**
 * ЕГЭ Listening TFNS · Unit 15 · Vintage inns (Jack & Mary).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-vintage-inns",
    unitOrder: 15,
    title: "Unit 15 · Vintage inns",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Jack & Mary · vintage inns",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/15/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2015%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Vintage inns:</strong> father likes Robin Hood, vintage inns are not average pubs, not cheap, close to sights, excellent service, Mary has a map.</p>",
    statements: [
      { letter: "A", text: "Mary's mother is not interested in Robin Hood." },
      { letter: "B", text: "A vintage inn is an average countryside pub." },
      { letter: "C", text: "Food prices in a vintage inn are rather high." },
      { letter: "D", text: "Vintage inns offer only traditional British cuisine." },
      { letter: "E", text: "Vintage inns are often close to local sights." },
      { letter: "F", text: "The level of service can vary in different vintage inns." },
      { letter: "G", text: "Mary has a map of vintage inns." }
    ],
    key: {
      A: "ns",
      B: "f",
      C: "t",
      D: "f",
      E: "t",
      F: "f",
      G: "t"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Jack", text: "Hello, Mary! You look great and you have a wonderful tan! What did you do at the weekend?" },
          { speaker: "Mary", text: "Hello, Jack. Well, my parents and I had a long drive to the countryside to Sherwood Forest. My father is very much interested in Robin Hood, you know. Then we had lunch in a vintage inn in the summer garden. It was fantastic!" },
          { speaker: "Jack", text: "A vintage inn? What is that? Is it a kind of a countryside pub?" },
          { speaker: "Mary", text: "Not really. Actually, there are a lot of them, close to many major sights in Great Britain. They may look village-like, but the standards of service are very high and the food is very tasty." }
        ]
      },
      {
        turns: [
          { speaker: "Jack", text: "I don't find such places amusing. Besides, the prices there are usually huge." },
          { speaker: "Mary", text: "It's not cheap, I agree. At the same time, a lunch in London can be even more expensive indeed. Where else can you try a traditional pudding or delicious Cheddar Mash after lunch?" },
          { speaker: "Jack", text: "Still, I do not see any point in driving miles from London just to have a light lunch. What will you do there except gazing out of the window across a village green or a natural pond if you are lucky?" },
          { speaker: "Mary", text: "I cannot agree with you here, I am afraid. Vintage inns are generally located in places worth visiting like stately homes or historic villages or any other tourist attractions and many are close to enchanting walks. It is not only about a meal! As for staying indoors, as I said, most vintage inns have their own gardens and they are ideal to have lunch in fine weather. That is where I got my tan anyway." }
        ]
      },
      {
        turns: [
          { speaker: "Jack", text: "Well, you seem to have managed to persuade me. Next weekend I am going to Cardiff. Is there a vintage inn close?" },
          { speaker: "Mary", text: "There must be one. If you take a look at this map, you will certainly discover the closest vintage inn." },
          { speaker: "Jack", text: "It may turn out not as good as the one you visited last weekend, though." },
          { speaker: "Mary", text: "According to the travel brochure, every vintage inn is different, but they are all the same. They may have different designs or menus, but all landlords and landladies share the same passion for good food and excellent service, believe me!" },
          { speaker: "Jack", text: "Ok, can you lend me the map? I am sure you took one in the inn you visited." },
          { speaker: "Mary", text: "You know me well enough! I will bring it tomorrow, I promise." },
          { speaker: "Jack", text: "Thanks." }
        ]
      }
    ],
    huntLabs: [
      { letter: "A", answer: "ns", keyLineRu: "Father is interested in Robin Hood; mother is not discussed.", evidencePromptRu: "<strong>A.</strong> Проверьте mother/father.", segments: [{ kind: "hit", sol: "e", text: "My father is very much interested in Robin Hood" }] },
      { letter: "B", answer: "f", keyLineRu: "Vintage inn is not just an average countryside pub.", evidencePromptRu: "<strong>B.</strong> Найдите Not really.", segments: [{ kind: "hit", sol: "e", text: "Not really" }, { kind: "hit", sol: "e", text: "standards of service are very high" }] },
      { letter: "C", answer: "t", keyLineRu: "Mary agrees it is not cheap.", evidencePromptRu: "<strong>C.</strong> Найдите not cheap.", segments: [{ kind: "hit", sol: "e", text: "It's not cheap, I agree" }] },
      { letter: "D", answer: "f", keyLineRu: "Traditional dishes are examples, not only cuisine.", evidencePromptRu: "<strong>D.</strong> Проверьте only.", segments: [{ kind: "hit", sol: "e", text: "traditional pudding or delicious Cheddar Mash" }] },
      { letter: "E", answer: "t", keyLineRu: "Vintage inns are generally close to tourist sights and walks.", evidencePromptRu: "<strong>E.</strong> Найдите major sights / tourist attractions.", segments: [{ kind: "hit", sol: "e", text: "close to many major sights" }, { kind: "hit", sol: "e", text: "located in places worth visiting" }] },
      { letter: "F", answer: "f", keyLineRu: "They differ in design/menu, but all share excellent service.", evidencePromptRu: "<strong>F.</strong> Найдите excellent service.", segments: [{ kind: "hit", sol: "e", text: "different designs or menus" }, { kind: "hit", sol: "e", text: "excellent service" }] },
      { letter: "G", answer: "t", keyLineRu: "Mary has a map and will bring it tomorrow.", evidencePromptRu: "<strong>G.</strong> Найдите map.", segments: [{ kind: "hit", sol: "e", text: "this map" }, { kind: "hit", sol: "e", text: "I will bring it tomorrow" }] }
    ],
    shadowSpeakers: [
      {
        id: "Jack",
        label: "Jack",
        fullText:
          "Hello, Mary! You look great and you have a wonderful tan! What did you do at the weekend? A vintage inn? What is that? Is it a kind of a countryside pub? I don't find such places amusing. Besides, the prices there are usually huge. Still, I do not see any point in driving miles from London just to have a light lunch. What will you do there except gazing out of the window across a village green or a natural pond if you are lucky? Well, you seem to have managed to persuade me. Next weekend I am going to Cardiff. Is there a vintage inn close? It may turn out not as good as the one you visited last weekend, though. Ok, can you lend me the map? I am sure you took one in the inn you visited. Thanks.",
        phrases: [
          { en: "wonderful tan", ru: "прекрасный загар" },
          { en: "countryside pub", ru: "сельский паб", tip: "B" },
          { en: "prices are usually huge", ru: "цены обычно огромные", tip: "C" },
          { en: "no point in driving miles", ru: "нет смысла ехать много миль" },
          { en: "village green", ru: "деревенская лужайка" },
          { en: "managed to persuade me", ru: "сумела меня убедить" },
          { en: "lend me the map", ru: "одолжи мне карту", tip: "G" }
        ],
        chunks: [{ text: "A vintage inn? What is that? Is it a kind of a countryside pub? I don't find such places amusing. Besides, the prices there are usually huge.", showText: true }, { text: "Still, I do not see any point in driving miles from London just to have a light lunch. What will you do there except gazing out of the window across a village green or a natural pond if you are lucky?", showText: true }, { text: "Well, you seem to have managed to persuade me. Next weekend I am going to Cardiff. Is there a vintage inn close? It may turn out not as good as the one you visited last weekend, though. Ok, can you lend me the map?", showText: false }]
      },
      {
        id: "Mary",
        label: "Mary",
        fullText:
          "Hello, Jack. Well, my parents and I had a long drive to the countryside to Sherwood Forest. My father is very much interested in Robin Hood, you know. Then we had lunch in a vintage inn in the summer garden. It was fantastic! Not really. Actually, there are a lot of them, close to many major sights in Great Britain. They may look village-like, but the standards of service are very high and the food is very tasty. It's not cheap, I agree. At the same time, a lunch in London can be even more expensive indeed. Where else can you try a traditional pudding or delicious Cheddar Mash after lunch? I cannot agree with you here, I am afraid. Vintage inns are generally located in places worth visiting like stately homes or historic villages or any other tourist attractions and many are close to enchanting walks. It is not only about a meal! As for staying indoors, as I said, most vintage inns have their own gardens and they are ideal to have lunch in fine weather. That is where I got my tan anyway. There must be one. If you take a look at this map, you will certainly discover the closest vintage inn. According to the travel brochure, every vintage inn is different, but they are all the same. They may have different designs or menus, but all landlords and landladies share the same passion for good food and excellent service, believe me! You know me well enough! I will bring it tomorrow, I promise.",
        phrases: [
          { en: "Sherwood Forest", ru: "Шервудский лес" },
          { en: "Robin Hood", ru: "Robin Hood", tip: "A" },
          { en: "vintage inn", ru: "старинный inn / трактир" },
          { en: "close to many major sights", ru: "рядом со многими достопримечательностями", tip: "E" },
          { en: "standards of service are very high", ru: "стандарты сервиса очень высокие", tip: "B/F" },
          { en: "It's not cheap", ru: "это недёшево", tip: "C" },
          { en: "traditional pudding", ru: "традиционный пудинг", tip: "D" },
          { en: "stately homes", ru: "величественные усадьбы" },
          { en: "historic villages", ru: "исторические деревни" },
          { en: "enchanting walks", ru: "очаровательные прогулочные маршруты" },
          { en: "this map", ru: "эта карта", tip: "G" },
          { en: "different designs or menus", ru: "разный дизайн или меню", tip: "F" },
          { en: "excellent service", ru: "отличный сервис", tip: "F" }
        ],
        chunks: [{ text: "My parents and I had a long drive to the countryside to Sherwood Forest. My father is very much interested in Robin Hood, you know. Then we had lunch in a vintage inn in the summer garden.", showText: true }, { text: "Actually, there are a lot of them, close to many major sights in Great Britain. They may look village-like, but the standards of service are very high and the food is very tasty.", showText: true }, { text: "It's not cheap, I agree. At the same time, a lunch in London can be even more expensive indeed. Where else can you try a traditional pudding or delicious Cheddar Mash after lunch?", showText: true }, { text: "Vintage inns are generally located in places worth visiting like stately homes or historic villages or any other tourist attractions and many are close to enchanting walks.", showText: true }, { text: "According to the travel brochure, every vintage inn is different, but they are all the same. They may have different designs or menus, but all landlords and landladies share the same passion for good food and excellent service, believe me!", showText: false }]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
