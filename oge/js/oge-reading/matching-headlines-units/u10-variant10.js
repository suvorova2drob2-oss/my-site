/**
 * OGE Reading · Unit 10 · Task 12 · The Nobel Prize.
 * Трубанёва 2026 · Вариант 10. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-variant10-reading-match",
    unitOrder: 10,
    title: "Unit 10 · The Nobel Prize",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Alfred Nobel died in 1896 and left a will that astonished his relatives. They learned that Alfred had left much of his great fortune for the establishment of a prize for scientists. Alfred Nobel was an outstanding Swedish chemist and engineer. His contribution to science was impressive and, fortunately, well-paid. His relatives took the will to court but lost. The first awards were distributed in 1901, on the fifth anniversary of Nobel's death."
      },
      {
        letter: "B",
        text:
          "Almost all of the prizes are awarded in Stockholm, Sweden. Alfred Nobel chose most of the nominations himself. However, some of the prizes were established after Alfred Nobel's death. In 1968 the Bank of Sweden, the world's oldest central bank, set the Nobel Prize in economics. Economics laureates receive their diploma and gold medal with the other Nobel winners. This happens at the award ceremony on 10th December, after which all the laureates are invited to the Nobel Banquet."
      },
      {
        letter: "C",
        text:
          "The prizes are awarded at a ceremony held annually on 10th December, the date that Alfred Nobel died. Each prize constitutes a gold medal, a diploma and a sum of money which is quite large, slightly more than one million euros. This was originally intended to allow the winners to continue their work and not think about money problems. The thing is that lots of promising projects had to stop only because the scientists could not find the money to finance them."
      },
      {
        letter: "D",
        text:
          "The Nobel Prize is awarded in different nominations. According to Nobel's will, the Swedish Academy of Science was to award a yearly prize in physics and chemistry. The Caroline Institute in Stockholm would award the prize for medicine or physiology. The Academy of Stockholm would determine the award for literature. Five members appointed by the Norwegian government select the receiver of the annual Peace Prize."
      },
      {
        letter: "E",
        text:
          "The Nobel Prizes are awarded annually in peace, literature, physics, chemistry, physiology or medicine, and economic science. The formal award ceremony is followed by a magnificent party. The preparations are great. Hundreds of cooks and waiters ensure that everything runs according to plan. Each Nobel Banquet has a particular theme. This is reflected in the decorations and the entertainment for the evening. The menu is kept secret until the actual day of the banquet."
      },
      {
        letter: "F",
        text:
          "The Nobel Museum was founded in 2001, which was the same year that the Nobel Prize celebrated its 100th year! There you can learn everything about the Nobel Prize and the people who have won the prizes over the years. Of course, a big part of the exhibition is about Alfred Nobel, the founder of the Nobel Prize. The museum's restaurant is a place where visitors can enjoy a cup of coffee and Nobel ice cream, a dessert previously served at the Nobel Prize Banquets."
      }
    ],

    headlines: [
      { num: 1, text: "What was the Nobel Prize set for?" },
      { num: 2, text: "Who was the founder of the Nobel Prize?" },
      { num: 3, text: "What institutions are responsible for choosing and awarding the winner?" },
      { num: 4, text: "Has the list of awards ever changed?" },
      { num: 5, text: "How many scientists have won the Nobel Prize several times?" },
      { num: 6, text: "How do the winners celebrate getting the prestigious prize?" },
      { num: 7, text: "Where can we get information about the Nobel Prize winners?" }
    ],

    key: { A: 2, B: 4, C: 1, D: 3, E: 6, F: 7 },
    extraHeadlineNum: 5,

    explanationsRu: {
      A: "Альфред Нобель оставил состояние на премию → вопрос 2.",
      B: "Премия по экономике добавлена в 1968 → вопрос 4.",
      C: "Деньги, чтобы учёные продолжали работу → вопрос 1.",
      D: "Академии и институт, которые выбирают лауреатов → вопрос 3.",
      E: "Банкет после церемонии → вопрос 6.",
      F: "Нобелевский музей → вопрос 7."
    },

    extraExplainRu:
      "Лишний вопрос <strong>5</strong> (сколько учёных получали премию несколько раз) — в текстах этого числа нет."
  });
})(typeof window !== "undefined" ? window : this);
