/**
 * ЕГЭ Lexis Exam · Unit 7 · The house near the lake (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-house-near-lake",
    unitOrder: 7,
    title: "Unit 7 · The house near the lake",
    examSection: "§30–36",
    headerTitle: "The house near the lake",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "In spring Sofia decided to rent a house. The house that Sofia rented at Lake Bala was even better than she [[30]] from when she drove up to see it, along with several others. It was a big beautiful old home. Obviously, it was well looked [[31]]. It belonged to a family whose children had [[32]] up and now had children of their own, according to the realtor. They still used it in August, but had decided to rent it in July for the first time.\n\nThe house was big and comfortable. There were six cozy bedrooms, a bunk room on the top floor, enough bathrooms for everyone, a huge living room and dining room downstairs on the main floor with fireplaces tall enough to stand in, wooden beams and panelling throughout the house. What Sofia liked very much was a big, old-fashioned kitchen where you could [[33]] prepare meals for an army. And down the slope at the edge of the lake, there was a boathouse with two speedboats in it, a sleek modern one and an old wooden dock that had been impeccably cared [[34]].\n\nThe whole property was ringed with beautiful old trees, and there was a tennis court behind the house that had been built fairly recently for teenaged grandchildren. Sophie's granddaughter was [[35]] when she saw the house, and ran from room to room trying to decide which one to sleep in. Sophie was happy that she could [[36]] renting this house.",
    items: [
      {
        options: ["revised", "reviewed", "remembered", "reminded"],
        correctIndex: 2,
        skillRu: "Глагол «помнить / представлять»: <em>better than she remembered</em>.",
        explainCorrect:
          "Дом оказался лучше, чем она <strong>remembered from when she drove up</strong> — «лучше, чем она помнила / представляла после первого просмотра».",
        trapRu:
          "Снова пара <em>remember / remind</em>: здесь Sofia сама сравнивает с тем, что <em>помнила</em>.",
        explainIfChosen: {
          "0": "<em>Revised from when</em> — «пересмотрела» не про память о первом визите.",
          "1": "<em>Reviewed from when</em> — «просмотрела заново» — не то.",
          "3": "<em>Reminded from when</em> — «напомнила»; нужен субъект «кто напомнил», не <em>she reminded</em>."
        }
      },
      {
        options: ["before", "after", "for", "over"],
        correctIndex: 1,
        skillRu: "Фразовый глагол: <em>look after</em> — «ухаживать, содержать в порядке».",
        explainCorrect:
          "It was well <strong>looked after</strong> — «за домом хорошо ухаживали» (содержали в отличном виде).",
        trapRu:
          "После <em>looked</em> четыре предлога — только <em>after</em> даёт «ухаживали за домом».",
        explainIfChosen: {
          "0": "<em>Looked before</em> — не говорят в этом значении.",
          "2": "<em>Looked for</em> = «искали» — дом не «искали».",
          "3": "<em>Looked over</em> = «осмотрели» — не «содержали»."
        }
      },
      {
        options: ["grown", "raised", "brought", "risen"],
        correctIndex: 0,
        skillRu: "Идиома: <em>grow up</em> — «вырасти, повзрослеть».",
        explainCorrect:
          "Children had <strong>grown up</strong> — «дети выросли» и теперь сами с детьми.",
        trapRu:
          "<em>Raised up / brought up</em> возможны, но в тексте коротко <em>had … up</em> — классика <em>grown up</em>.",
        explainIfChosen: {
          "1": "<em>Raised up</em> — чаще <em>raised</em> без <em>up</em> или <em>brought up</em>.",
          "2": "<em>Brought up</em> = «воспитали» — возможно, но <em>grown up</em> естественнее для «повзрослели».",
          "3": "<em>Risen up</em> — «поднялись» — не про возраст."
        }
      },
      {
        options: ["really", "merely", "hardly", "rarely"],
        correctIndex: 0,
        skillRu: "Наречие усиления: <em>could really prepare meals for an army</em>.",
        explainCorrect:
          "Огромная кухня: <strong>you could really prepare meals for an army</strong> — «можно было по‑настоящему готовить на целую армию».",
        trapRu:
          "<em>Hardly prepare</em> = «едва готовить» — против огромной кухни; нужно усиление <em>really</em>.",
        explainIfChosen: {
          "1": "<em>Merely prepare</em> — «просто готовить» — слабо для восторга Sofia.",
          "2": "<em>Hardly prepare</em> — «почти не могли готовить» — против смысла.",
          "3": "<em>Rarely prepare</em> — «редко готовить» — не про размер кухни."
        }
      },
      {
        options: ["after", "of", "off", "for"],
        correctIndex: 3,
        skillRu: "Фразовый глагол: <em>care for</em> — «ухаживать за, содержать».",
        explainCorrect:
          "Dock had been impeccably <strong>cared for</strong> — «за причалом безупречно ухаживали».",
        trapRu:
          "Как <em>looked after</em> выше — пара <em>care + for</em>, не <em>care of</em>.",
        explainIfChosen: {
          "0": "<em>Cared after</em> — не говорят; правильно <em>looked after</em> или <em>cared for</em>.",
          "1": "<em>Cared of</em> — неверно.",
          "2": "<em>Cared off</em> — не существует."
        }
      },
      {
        options: ["enjoyed", "thrilled", "adored", "preferred"],
        correctIndex: 1,
        skillRu: "Прилагательное после <em>be</em>: <em>be thrilled</em> — «быть в восторге».",
        explainCorrect:
          "Внучка <strong>was thrilled when she saw the house</strong> — «была в восторге» и бегала по комнатам.",
        trapRu:
          "<em>Enjoyed</em> нужен объект (<em>enjoyed the house</em>), не <em>was enjoyed when</em>.",
        explainIfChosen: {
          "0": "<em>Was enjoyed when</em> — пассив «ей наслаждались» — nonsense.",
          "2": "<em>Was adored when</em> — грамматически слабо; <em>adore</em> обычно <em>adored the house</em>.",
          "3": "<em>Was preferred when</em> — «была предпочитаема» — не про эмоцию."
        }
      },
      {
        options: ["allow", "achieve", "approve", "afford"],
        correctIndex: 3,
        skillRu: "Глагол + gerund: <em>can afford renting / afford to rent</em> — «позволить себе».",
        explainCorrect:
          "Sophie was happy she could <strong>afford renting this house</strong> — «могла позволить себе аренду».",
        trapRu:
          "После <em>could</em> нужен «позволить себе по деньгам» — <em>afford</em>, не <em>approve</em>.",
        explainIfChosen: {
          "0": "<em>Allow renting</em> — «разрешить аренду»; не про деньги Sofia.",
          "1": "<em>Achieve renting</em> — «достичь аренды» — не говорят.",
          "2": "<em>Approve renting</em> — «одобрить аренду»; Sofia рада, что <em>по карману</em>."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
