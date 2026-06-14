/**
 * ЕГЭ Reading — Matching Headlines, юнит 9 (подводные / океанические леса, водоросли).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-ocean-forests",
    unitOrder: 9,
    title: "Unit 9 · Ocean forests",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Amazon, Borneo, Congo and Daintree: everyone knows the names of many of the world's largest or most famous rainforests. And many of us know about the world's largest span of forests — the boreal forests stretching from Russia to Canada. But how many of us could name an underwater forest? Underwater forests are huge kelp and seaweed forests, stretching much further than it was previously realised. Few of them are even named. But their wonderful canopies are home to large numbers of marine species.",
        evidence: {
          support: [
            "Underwater forests are huge kelp and seaweed forests,",
            "stretching much further than it was previously realised.",
            "Few of them are even named."
          ],
          distract: [
            "the world's largest span of forests — the boreal forests stretching from Russia to Canada."
          ]
        }
      },
      {
        letter: "B",
        text:
          "Underwater forests are mainly formed by seaweeds, which are types of algae. Like other plants on land, seaweeds grow by capturing solar energy and carbon dioxide through photosynthesis. Seaweeds have long been known to be among the fastest growing plants on the planet. The largest species of seaweeds grow tens of metres deep, forming forest canopies that sway in a never-ending dance as waves move through them. To swim through one is to see patterns of light and shadow, and to get a sense of constant movement.",
        evidence: {
          support: [
            "Underwater forests are mainly formed by seaweeds, which are types of algae.",
            "Like other plants on land, seaweeds grow by capturing solar energy and carbon dioxide through photosynthesis.",
            "forming forest canopies that sway in a never-ending dance"
          ],
          distract: [
            "To swim through one is to see patterns of light and shadow,"
          ]
        }
      },
      {
        letter: "C",
        text:
          "Seaweed forests face threats from marine heatwaves and climate change. Almost all of the extra heat trapped by greenhouse gases that people have emitted so far has gone into the oceans. This means ocean forests are facing very difficult conditions. Large expanses of ocean forests have recently disappeared off western Australia, eastern Canada and California — resulting in the loss of habitat and carbon storing potential. Unfortunately, the majority of the world's underwater forests are unrecognized and unexplored.",
        evidence: {
          support: [
            "Seaweed forests face threats from marine heatwaves and climate change.",
            "ocean forests are facing very difficult conditions.",
            "Large expanses of ocean forests have recently disappeared off western Australia, eastern Canada and California"
          ],
          distract: [
            "the majority of the world's underwater forests are unrecognized and unexplored."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Off the coastline of southern Africa lies the Great African Seaforest, while Australia boasts the Great Southern Reef around its southern reaches. There are many more vast, but unnamed, underwater forests all over the world. So far, it has been very challenging to estimate how large an area ocean forests cover. On land, scientists can easily measure forests by satellite. Underwater, it becomes much more complicated. Most satellites cannot take measurements at the depths where underwater forests are found.",
        evidence: {
          support: [
            "it has been very challenging to estimate how large an area ocean forests cover.",
            "On land, scientists can easily measure forests by satellite.",
            "Most satellites cannot take measurements at the depths where underwater forests are found."
          ],
          distract: [
            "There are many more vast, but unnamed, underwater forests all over the world."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Scientists have found that ocean forests are even more productive than many intensely farmed crops such as wheat, rice and corn. Productivity was highest in temperate regions, which are usually washed by cool, nutrient-rich water. Every year, on average, ocean forests in these regions produce 2 to 11 times more biomass per area than land crops. These findings are encouraging. Such large productivity can be used to help meet the world's future food security. Seaweed farms can supplement food production on land.",
        evidence: {
          support: [
            "ocean forests are even more productive than many intensely farmed crops such as wheat, rice and corn.",
            "produce 2 to 11 times more biomass per area than land crops.",
            "help meet the world's future food security."
          ],
          distract: [
            "Productivity was highest in temperate regions, which are usually washed by cool, nutrient-rich water."
          ]
        }
      },
      {
        letter: "F",
        text:
          "Seaweeds are very fast-growing plants. Their fast growth rates mean that seaweeds are hungry for carbon dioxide. As they grow, they pull large quantities of carbon from seawater and the atmosphere. Globally, ocean forests may take up as much carbon as the Amazon. This suggests that underwater forests could play a big role in decreasing the negative effects of climate change. It is not known exactly how much seaweed carbon ends up stored and kept safe naturally. This will be an area of intense research in the future.",
        evidence: {
          support: [
            "they pull large quantities of carbon from seawater and the atmosphere.",
            "ocean forests may take up as much carbon as the Amazon.",
            "decreasing the negative effects of climate change."
          ],
          distract: [
            "This will be an area of intense research in the future."
          ]
        }
      },
      {
        letter: "G",
        text:
          "Underwater seaweeds offer habitat, food and shelter to a wide variety of marine organisms. They are all unique and different. Large species such as sea-bamboo and giant kelp have gas-filled structures that work like little balloons and help them create vast floating canopies. Other species rely on strong stems to stay upright and support their photosynthetic blades. Some other plants that grow in the sea, like golden kelp on the Great Southern Reef in Australia, cover the seafloor, creating an underwater carpet.",
        evidence: {
          support: [
            "habitat, food and shelter to a wide variety of marine organisms.",
            "They are all unique and different.",
            "creating an underwater carpet."
          ],
          distract: [
            "like golden kelp on the Great Southern Reef in Australia, cover the seafloor,"
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Hard times" },
      { num: 2, text: "Plants like trees" },
      { num: 3, text: "A great discovery" },
      { num: 4, text: "Unique small world" },
      { num: 5, text: "Hidden treasure" },
      { num: 6, text: "A difficult task" },
      { num: 7, text: "Unseen life diversity" },
      { num: 8, text: "Against global warming" }
    ],

    key: { A: 3, B: 2, C: 1, D: 6, E: 5, F: 8, G: 7 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A:
        "Контраст с известными <strong>наземными</strong> лесами → внезапный поворот к подводным «лесам»; масштаб <strong>сильно недооценивали</strong> — <strong>важное открытие</strong> (<strong>3</strong>).",
      B:
        "Водоросли как <strong>растения</strong>: фотосинтез, быстрый рост, <strong>кроны-полог</strong>, как у леса — <strong>Plants like trees</strong> (<strong>2</strong>).",
      C:
        "Тепловые волны, смена климата, исчезновение лесов у берегов — <strong>трудные времена</strong> для экосистемы (<strong>1</strong>).",
      D:
        "Назвать площадь сложно: со спутника на суше легко, <strong>под водой</strong> — нет — <strong>A difficult task</strong> (<strong>6</strong>).",
      E:
        "Продуктивность выше полей, <strong>2–11×</strong> биомассы, перспектива для <strong>продовольственной безопасности</strong> — ценный ресурс (<strong>5 Hidden treasure</strong>).",
      F:
        "Много CO₂, масштаб как у Amazon, смягчение последствий <strong>климатических изменений</strong> — <strong>Against global warming</strong> (<strong>8</strong>).",
      G:
        "Среда для <strong>множества</strong> организмов, разные формы и строения — акцент на <strong>разнообразии жизни</strong> (<strong>7</strong>), а не на «маленьком мире»."
    },

    extraExplainRu:
      "Лишним остаётся <strong>4 — Unique small world</strong>: формулировка про «узкий уникальный микромир» ближе к отвлечённой метафоре; абзацы дают либо <strong>масштаб</strong> открытий и угроз, либо явное <strong>разнообразие видов / обитателей</strong> (для G точнее <strong>7</strong>). При проверке сверяйтесь с ключом вашего сборника.",

    quickPhrases: [
      { en: "kelp", ru: "ламинария, бурые водоросли (kelp)" },
      { en: "seaweed", ru: "морские водоросли" },
      { en: "photosynthesis", ru: "фотосинтез" },
      { en: "marine heatwaves", ru: "морские волны жары" },
      { en: "greenhouse gases", ru: "парниковые газы" },
      { en: "biomass", ru: "биомасса (сухая масса органики)" },
      { en: "food security", ru: "продовольственная безопасность" },
      { en: "carbon dioxide", ru: "углекислый газ" },
      { en: "climate change", ru: "изменение климата" },
      { en: "photosynthetic blades", ru: "фотосинтезирующие «листья» (пластины)" },
      { en: "seafloor", ru: "морское дно" },
      { en: "canopy", ru: "полог (кроны)" },
      { en: "nutrient-rich water", ru: "воды, богатые питательными веществами" },
      { en: "habitat", ru: "среда обитания" },
      { en: "estimate", ru: "оценивать, высчитывать" }
    ],

    tapPhrases: [
      {
        en: "stretching much further than it was previously realised.",
        ru: "простираются гораздо дальше, чем считали раньше"
      },
      {
        en: "Like other plants on land, seaweeds grow by capturing solar energy and carbon dioxide through photosynthesis.",
        ru: "как наземные растения, водоросли растут за счёт солнца и CO₂ — фотосинтез"
      },
      {
        en: "Large expanses of ocean forests have recently disappeared off western Australia, eastern Canada and California",
        ru: "большие массивы подводных лесов недавно исчезли у берегов Австралии, Канады и Калифорнии"
      },
      {
        en: "it has been very challenging to estimate how large an area ocean forests cover.",
        ru: "пока трудно оценить, какую площадь занимают океанические леса"
      },
      {
        en: "produce 2 to 11 times more biomass per area than land crops.",
        ru: "дают в 2–11 раз больше биомассы на единицу площади, чем полевые культуры"
      },
      {
        en: "underwater forests could play a big role in decreasing the negative effects of climate change.",
        ru: "подводные леса могут сильно помочь смягчить последствия изменения климата"
      },
      {
        en: "habitat, food and shelter to a wide variety of marine organisms.",
        ru: "жильё, пища и укрытие для самых разных морских организмов"
      }
    ],

    tapLexicon: [
      { en: "realised", ru: "осознали, выяснилось (брит. написание)" },
      { en: "unrecognized", ru: "непризнанные, малоизвестные" },
      { en: "supplement", ru: "дополнять, усиливать (производство)" },
      { en: "temperate regions", ru: "умеренные широты" },
      { en: "gas-filled structures", ru: "газонаполнённые структуры (плавучесть)" },
      { en: "floating canopies", ru: "плавающие пологи крон" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
