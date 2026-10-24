/**
 * OGE Reading · Unit 18 · Task 12 · Volcanoes.
 * Трубанёва 2026 · Вариант 18. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-variant18-reading-match",
    unitOrder: 18,
    title: "Unit 18 · Volcanoes",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "In the context of volcanic activities, the unique continent of Australia, as usual, stands apart from the others. It is primarily flat and covered with deserts and grassland. Though, from a spaceship, the mountains are well-seen in the east of the country, there are no volcanoes there. Australia is located on the ancient tectonic plate, which makes earthquakes impossible though people may feel slight aftershocks coming from distant islands in the ocean."
      },
      {
        letter: "B",
        text:
          "The Earth is rich in volcanoes. However, it is not the only place with unstable geology in the Solar System. The record belongs to Venus with 1600 volcanoes on its surface. Spaceships launched to Venus saw unusual peaks that looked as flat as pancakes. The volcanoes are supposed to be inactive, but this statement still needs additional proof and evidence."
      },
      {
        letter: "C",
        text:
          "The word 'volcano' comes from the name of the Roman god of fire, Vulcan. According to legend, when the god gets angry, the volcano starts being deathly dangerous for everything around. As a volcano, in simple words a mountain with a hole at the top, erupts, lava, ash and smoke come out of the crater. It is a stunning and terrifying sight which reminds us of the powerful and furious gods of nature."
      },
      {
        letter: "D",
        text:
          "Indeed, underwater volcanic activities make up 80 per cent of all registered! To detect such a volcano, scientists need powerful equipment placed on a ship. The results of the monitoring suggest that the most numerous group of volcanoes, which consists of more than 450 items, is in the Pacific Ocean. That large territory of 40,000 km long is called 'The Ring of Fire'. The movements of the tectonic plates formed it."
      },
      {
        letter: "E",
        text:
          "Approximately 1,900 volcanoes on the Earth are active and likely to erupt. However, many people choose to settle near volcanoes. Lava and ash provide valuable nutrients, making the soil fertile and very good for farming. Because of this, people often choose to farm on the land at the foot of volcanoes. Along with that, the heat of a volcano provides the local industries and homes with cheap energy."
      },
      {
        letter: "F",
        text:
          "Scientists say that when the Earth was younger, there were lots of volcanoes on the planet and they were erupting constantly. Now there are much fewer of them and most of them are not considered to be active. A volcano is active when it is still possible or even likely to erupt. And it is called extinct if it hasn't erupted for thousands of years. Along with the volcanoes we know, there are lots which are still hidden from a man's eye — underwater volcanoes."
      }
    ],

    headlines: [
      { num: 1, text: "What is a volcano?" },
      { num: 2, text: "What kinds of volcanoes exist?" },
      { num: 3, text: "What is the most volcanically active zone in the world?" },
      { num: 4, text: "How much time is needed to predict a volcano eruption?" },
      { num: 5, text: "Is there any place on the Earth free of volcanoes?" },
      { num: 6, text: "Can we find volcanoes on the other planets?" },
      { num: 7, text: "Why do people live near volcanoes?" }
    ],

    key: { A: 5, B: 6, C: 1, D: 3, E: 7, F: 2 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A: "В Австралии вулканов нет → вопрос 5.",
      B: "1600 вулканов на Венере → вопрос 6.",
      C: "Что такое вулкан и откуда слово → вопрос 1.",
      D: "Тихоокеанское огненное кольцо → вопрос 3.",
      E: "Плодородная почва и дешёвая энергия → вопрос 7.",
      F: "Действующие, потухшие и подводные → вопрос 2."
    },

    extraExplainRu:
      "Лишний вопрос <strong>4</strong> (сколько времени нужно, чтобы предсказать извержение) — сроков в текстах нет."
  });
})(typeof window !== "undefined" ? window : this);
