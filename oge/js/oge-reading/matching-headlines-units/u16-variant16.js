/**
 * OGE Reading · Unit 16 · Task 12 · Gibraltar.
 * Трубанёва 2026 · Вариант 16. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-variant16-reading-match",
    unitOrder: 16,
    title: "Unit 16 · Gibraltar",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Due to its geographical position, Gibraltar is a place of great strategic importance. At the beginning of the 18th century, it was taken from Spain by an Anglo-Dutch fleet and was declared a British territory. Spain, which borders Gibraltar, was not happy about that and still isn't. Till now, Spain has been claiming Gibraltar to be a Spanish territory and has continued attempts to win it back. The situation is not easy and causes diplomatic problems."
      },
      {
        letter: "B",
        text:
          "Nowadays, the people of Gibraltar are British citizens. Gibraltar became a British territory in 1713. The people of the tiny country adopted a lot of the culture, law and lifestyle of the United Kingdom. The official language of Gibraltar is English, of course. But as it has strong historical connections with Spain, which it is bordered by, so the people of Gibraltar are naturally bilingual in English and Spanish."
      },
      {
        letter: "C",
        text:
          "Due to the small size and dense population, Gibraltar cannot boast a very diverse wildlife. However, tourists and locals can often see dolphins and whales playing in the warm waters of the bay. As for the land animals, Gibraltar is most famous for its tailless monkeys! Legend states that, if the monkeys disappear, Great Britain will lose Gibraltar. The monkeys are considered to be Gibraltar's talisman, and they are not afraid of people, who treat them very carefully."
      },
      {
        letter: "D",
        text:
          "The citizens of Gibraltar value good education. There are secondary schools, most of which are state schools, and also colleges and one university. Gibraltar generally follows the English educational model where physical development of the students has always been paid attention to. Traditionally, the most popular game in Gibraltar is football. The people also often enjoy cricket and darts. The popularity of rugby has been growing fast in recent years."
      },
      {
        letter: "E",
        text:
          "The population of Gibraltar is only 32,000 people but, due to its small territory, it is densely populated. The environment does not provide good opportunities for growing crops or manufacturing — the only goods produced in Gibraltar are ambulance cars. At the same time, the financial services are at a high level — some British and international banks are based in Gibraltar. The other significant sector of economy is tourism — Gibraltar is popular with cruise ships."
      },
      {
        letter: "F",
        text:
          "Gibraltar, colloquially known as The Rock, or simply Gib, is a small peninsula and it is an overseas territory of the United Kingdom. There are no rivers or streams in Gibraltar, but there are rocks rising from the sea. The very small country is less than 7 square kilometers and it is not very easy to spot it on the world's map. Gibraltar lies between Europe and Africa, at the entrance of the Mediterranean Sea, right where the Mediterranean joins the Atlantic Ocean."
      }
    ],

    headlines: [
      { num: 1, text: "Where is Gibraltar located?" },
      { num: 2, text: "What languages do people speak in Gibraltar?" },
      { num: 3, text: "What are the main industries in Gibraltar?" },
      { num: 4, text: "What is the climate of Gibraltar?" },
      { num: 5, text: "What is Gibraltar's relationship with other countries?" },
      { num: 6, text: "What is the symbol of Gibraltar?" },
      { num: 7, text: "What sports do people play in Gibraltar?" }
    ],

    key: { A: 5, B: 2, C: 6, D: 7, E: 3, F: 1 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A: "Спор Испании и Британии за Гибралтар → вопрос 5.",
      B: "Английский и испанский → вопрос 2.",
      C: "Бесхвостые обезьяны — талисман → вопрос 6.",
      D: "Футбол, крикет, дартс и регби → вопрос 7.",
      E: "Банки, туризм и машины скорой помощи → вопрос 3.",
      F: "Полуостров между Европой и Африкой → вопрос 1."
    },

    extraExplainRu:
      "Лишний вопрос <strong>4</strong> (климат) — про погоду в текстах ничего нет."
  });
})(typeof window !== "undefined" ? window : this);
