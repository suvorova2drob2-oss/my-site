/**
 * OGE Reading · Unit 15 · Task 12 · Coffee.
 * Трубанёва 2026 · Вариант 15. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-variant15-reading-match",
    unitOrder: 15,
    title: "Unit 15 · Coffee",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Coffee is one of the world's most popular drinks. According to scientific studies, coffee can be really useful for an adult person. Because of the caffeine, that coffee contains, the drink increases energy levels and helps people feel less tired. Caffeine may also improve mood and brain activity. It protects against heart disease. Being a great source of antioxidants, coffee can lower skin cancer risk. To realize the most health benefits, adults should drink 3–4 cups of coffee a day."
      },
      {
        letter: "B",
        text:
          "Gradually there were more and more coffee fans around the globe. The drink became popular not only in the Old World but in the New World too. In 1776 the thirteen American colonies adopted coffee as their national drink instead of tea. When the British tried to raise the tax on tea, Americans refused to buy it and switched to coffee. In fact, by drinking coffee Americans demonstrated their political views and their dislike for the British — the famous tea-lovers."
      },
      {
        letter: "C",
        text:
          "Coffee is a popular drink all over the world but it was not always like that. People have found it relatively recently and by chance. A popular legend says that one day a man called Kaldi was watching his goats eating grass and leaves. He noticed that after eating berries from a certain bush the goats became very active. Curious, Kaldi tried the berries himself. He found that these berries gave him additional energy. The story quickly spread throughout the region."
      },
      {
        letter: "D",
        text:
          "Coffee is a fruit and it grows on trees. On average, the coffee tree lives between 25 and 30 years. Its height can reach up to 15 meters. However, it is usually cut to 3 meters to make it easier to harvest. The ideal conditions for growing coffee are moisture and heat. The land along the equator where most coffee plantations are located is often called the 'coffee belt of the earth'. About 70 countries in Central and South America, Africa, Asia and Oceania cultivate coffee."
      },
      {
        letter: "E",
        text:
          "After a while, people started experimenting with coffee by adding milk, chocolate and other flavors. The Italians drink their espresso with sugar, the Germans and Swiss add an equal part of hot chocolate, the Mexicans prefer it with cinnamon, and the Belgians — with chocolate. Coffee drinkers in the Middle East usually add cardamom and spices. The Egyptians, on the other hand, are extremely fond of pure, strong coffee. Most Americans have their coffee without milk."
      },
      {
        letter: "F",
        text:
          "Coffee was first found in Eastern Africa in the area we know today as Ethiopia. Then the coffee berries were transported from Ethiopia to Arabian countries and later they were cultivated in Yemen. From there, coffee travelled to Turkey where coffee beans were roasted for the first time over open fires. The roasted beans were crushed and then boiled in water, creating the drink we enjoy today. Finally, in the seventeenth century coffee arrived in France, Britain and Italy."
      }
    ],

    headlines: [
      { num: 1, text: "Why did people get interested in coffee as a product?" },
      { num: 2, text: "How did coffee beans appear in Europe?" },
      { num: 3, text: "What helped coffee conquer the United States?" },
      { num: 4, text: "Where is coffee grown nowadays?" },
      { num: 5, text: "What country is the main producer of coffee in the world?" },
      { num: 6, text: "How do people make coffee in different countries?" },
      { num: 7, text: "Is drinking coffee a healthy habit?" }
    ],

    key: { A: 7, B: 3, C: 1, D: 4, E: 6, F: 2 },
    extraHeadlineNum: 5,

    explanationsRu: {
      A: "Польза кофе для здоровья → вопрос 7.",
      B: "Налог на чай и переход колоний на кофе → вопрос 3.",
      C: "Легенда о Калди и ягодах → вопрос 1.",
      D: "Где растёт кофе, «кофейный пояс» → вопрос 4.",
      E: "Как пьют кофе в разных странах → вопрос 6.",
      F: "Путь зёрен из Эфиопии в Европу → вопрос 2."
    },

    extraExplainRu:
      "Лишний вопрос <strong>5</strong> (главная страна-производитель) — названы около 70 стран, но не лидер."
  });
})(typeof window !== "undefined" ? window : this);
