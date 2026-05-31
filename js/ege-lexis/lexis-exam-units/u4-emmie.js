/**
 * ЕГЭ Lexis Exam · Unit 4 · Emmie (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-emmie",
    unitOrder: 4,
    title: "Unit 4 · Emmie",
    examSection: "§30–36",
    headerTitle: "Emmie",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Emmie thought she had nothing to do this night. Then she [[30]] about her sister's present — the DVDs. She looked at the boxes when she took them out of her purse. Each season had eight episodes that were each an hour long. Emmie got the first disc out, and put it in the DVD-player attached to the TV in her room. She could [[31]] wait for the film to start.\n\nThe screen sprang to life with the first season of Bedford Castle. She hopped into bed, pulled up the covers, and turned [[32]] the light as the first episode began. She liked to watch films in the dark. She was [[33]] by the beautiful costumes — all historically accurate — and the incredible décor inside the castle, with enormous paintings and elegant antiques. It had a superb feel to it, with a fleet of servants, and a family [[34]] of all the important actors on the show. Three of them were famous actresses. Several of the men looked familiar to her, even though it was a French production, but she had seen them in movies. It was everything that [[35]] to her in French books and movies. The performance was flawless, and the dialogue brilliantly written. The story was engaging, the characters perfectly defined in their roles as good or bad people. It was a wonderful show. She was in love with the characters, and [[36]] by the castle and the staff. She felt as though she had been pulled into a different world, where her own life ceased to matter; only theirs did.",
    items: [
      {
        options: ["reminded", "resembled", "remembered", "reviewed"],
        correctIndex: 2,
        skillRu: "Глагол «вспомнить»: <em>remember about something</em> — «вспомнила о …».",
        explainCorrect:
          "Ей было нечего делать — и тогда она <strong>remembered about her sister's present</strong> — «вспомнила о подарке сестры (DVD)».",
        trapRu:
          "Часто путают <em>remember</em> (сам вспоминаешь) и <em>remind</em> (кто‑то напоминает тебе).",
        explainIfChosen: {
          "0": "<em>Reminded</em> — «напомнила»; нужен объект «кому»: <em>reminded her of</em>, не <em>she reminded about</em>.",
          "1": "<em>Resembled</em> = «была похожа на» — не про память.",
          "3": "<em>Reviewed</em> = «просмотрела / пересмотрела заново» — не «вспомнила вдруг»."
        }
      },
      {
        options: ["rarely", "really", "merely", "hardly"],
        correctIndex: 3,
        skillRu: "Устойчивое выражение: <em>can hardly wait</em> — «едва могу дождаться».",
        explainCorrect:
          "<strong>She could hardly wait</strong> for the film to start — «едва могла дождаться начала» (очень хотела смотреть).",
        trapRu:
          "Все наречия на <em>‑ly</em>, но только <em>hardly</em> даёт смысл «почти не могу ждать = очень хочу».",
        explainIfChosen: {
          "0": "<em>Could rarely wait</em> — «редко могла ждать» — против смысла (ей как раз не терпится).",
          "1": "<em>Really wait</em> — просто «действительно ждала», без оттенка нетерпения.",
          "2": "<em>Merely wait</em> = «просто / только ждала» — слабо и не idiomatic."
        }
      },
      {
        options: ["off", "on", "at", "in"],
        correctIndex: 0,
        skillRu: "Фразовый глагол: <em>turn off the light</em> — «выключить свет».",
        explainCorrect:
          "Перед просмотром в темноте: <strong>turned off the light</strong> — «выключила свет».",
        trapRu:
          "После <em>turned</em> часто ставят предлог наугад — здесь «смотреть в темноте» → свет <em>off</em>.",
        explainIfChosen: {
          "1": "<em>Turn on</em> — «включить»; дальше: <em>She liked to watch films in the dark</em>.",
          "2": "<em>Turn at the light</em> — не говорят.",
          "3": "<em>Turn in the light</em> — бессмысленно."
        }
      },
      {
        options: ["improved", "impressed", "influenced", "interested"],
        correctIndex: 1,
        skillRu: "Пассив + <em>by</em>: <em>be impressed by</em> — «быть под впечатлением от».",
        explainCorrect:
          "Костюмы и декор: <strong>She was impressed by the beautiful costumes</strong> — «была поражена / под большим впечатлением».",
        trapRu:
          "<em>Interested by</em> слабее; после «historically accurate costumes» логичнее сильное <em>impressed</em>.",
        explainIfChosen: {
          "0": "<em>Improved by</em> = «улучшена (кем‑то)» — костюмы не «улучшили её».",
          "2": "<em>Influenced by</em> — «под влиянием»; возможно, но <em>impressed</em> точнее для wow-эффекта.",
          "3": "<em>Interested by</em> возможно, но <em>impressed by</em> естественнее для «поразили красотой»."
        }
      },
      {
        options: ["containing", "consisting", "involving", "including"],
        correctIndex: 1,
        skillRu: "Устойчивое: <em>consist of</em> — «состоять из» (family consisting of actors).",
        explainCorrect:
          "Семья в сериале <strong>consisting of all the important actors</strong> — «состоящая из всех главных актёров».",
        trapRu:
          "<em>Containing / including</em> близки, но для «состав = перечень людей» чаще <em>consisting of</em>.",
        explainIfChosen: {
          "0": "<em>Containing of</em> — не говорят; <em>containing</em> без <em>of</em> или <em>made up of</em>.",
          "2": "<em>Involving</em> = «вовлекающая / связанная с» — не «состояла из актёров».",
          "3": "<em>Including</em> ближе, но типичнее <em>consisting of</em> для полного состава."
        }
      },
      {
        options: ["amused", "attracted", "amazed", "appealed"],
        correctIndex: 3,
        skillRu: "Глагол + <em>to her</em>: <em>appeal to someone</em> — «быть близким / нравиться».",
        explainCorrect:
          "Всё, что ей нравится во французских книгах и фильмах: <strong>everything that appealed to her</strong> — «всё, что ей так нравилось / было близко».",
        trapRu:
          "После пропуска <em>to her</em> — нужен <em>appeal to</em>, не <em>amuse to</em> или <em>attract to</em> в такой форме.",
        explainIfChosen: {
          "0": "<em>Amused to her</em> — неверная конструкция.",
          "1": "<em>Attracted to her</em> — «привлекло её» возможно, но <em>appealed to her</em> — про «совпадало с её вкусом».",
          "2": "<em>Amazed to her</em> — грамматически неверно."
        }
      },
      {
        options: ["fascinating", "interested", "fascinated", "interesting"],
        correctIndex: 2,
        skillRu: "Пассив: <em>be fascinated by</em> — «быть очарованной / захваченной».",
        explainCorrect:
          "<strong>She was fascinated by the castle and the staff</strong> — «была очарована замком и персоналом» (как персонажами).",
        trapRu:
          "<em>Fascinating</em> и <em>interesting</em> описывают объект («замок fascinating»), а Emmie — <em>fascinated</em> (испытывает чувство).",
        explainIfChosen: {
          "0": "<em>Fascinating by</em> — «замок был fascinating», не «она была fascinating by».",
          "1": "<em>Interested by</em> слабее; после «in love with the characters» логичнее <em>fascinated</em>.",
          "3": "<em>Interesting by</em> — грамматически неверно; <em>interesting</em> = «интересный» (про объект)."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
