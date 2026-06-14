/**
 * ЕГЭ Reading — Multiple Choice, юнит 6 · Slow down climate change.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-slow-down-climate-change",
    unitOrder: 6,
    title: "Unit 6 · Slow down climate change",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "Rising sea levels. Raging storms. Searing heat. Ferocious fires. Severe drought. Punishing floods. The effects of climate change are already threatening our health, our communities, our economy, and our children's future.",
        evidence: {
          support: ["The effects of climate change are already threatening"],
          distract: ["Punishing floods"]
        }
      },
      {
        n: 2,
        text:
          'What can you do? A whole lot, as it turns out. Americans, on average, produce 21 tons of carbon a year, about four times the global average. Personal action is, of course, no substitute for meaningful government policies. We still must limit carbon pollution and move away from dirty fossil fuels and toward cleaner power. But it\'s important to remember the equally vital contributions that can be made by private citizens—which is to say, by you. "Change only happens when individuals take action," says clean energy advocate Emily Dain. "There\'s no other way, if it doesn\'t start with people." Here are some easy, effective ways each one of us can make a difference.',
        evidence: {
          support: [
            "four times the global average",
            "equally vital contributions"
          ],
          distract: ["no substitute for meaningful government policies"]
        }
      },
      {
        n: 3,
        text:
          "First, weatherize. Building heating and cooling are among the biggest uses of energy. Indeed, heating and air-conditioning account for almost half of home energy use. You can make your space more energy efficient by sealing drafts and ensuring it's adequately insulated. In the USA it is possible to claim federal tax credits for many energy-efficiency home improvements.",
        evidence: {
          support: [
            "sealing drafts and ensuring it's adequately insulated",
            "almost half of home energy use"
          ],
          distract: ["claim federal tax credits"]
        }
      },
      {
        n: 4,
        text:
          "Next, invest in energy-efficient appliances. Since they were first implemented in 1987, efficiency standards for dozens of appliances and products have kept 2.3 billion tons of carbon dioxide out of the air. That's about the same amount as the annual carbon pollution coughed up by nearly 440 million cars. Energy efficiency is the lowest-cost way to reduce emissions. When shopping for refrigerators, washing machines, water heaters, and other appliances, look for the Energy Star label. It will tell you which ones are the most efficient.",
        evidence: {
          support: [
            "look for the Energy Star label",
            "lowest-cost way to reduce emissions"
          ],
          distract: ["2.3 billion tons of carbon dioxide"]
        }
      },
      {
        n: 5,
        text:
          "And when you're ready to swap out your old machines, don't just put them on the curb. Recycling an old refrigerator through a special appliance disposal program can prevent an additional 10,000 pounds of carbon pollution because the global-warming pollutants in the refrigerants and foam would be properly captured, rather than vented to the air.",
        evidence: {
          support: [
            "10,000 pounds of carbon pollution",
            "properly captured, rather than vented"
          ],
          distract: ["Recycling an old refrigerator"]
        }
      },
      {
        n: 6,
        text:
          "Reduce water waste. Saving water reduces carbon pollution, too. That's because it takes a lot of energy to pump, heat, and treat your water. So take shorter showers, turn off the tap while brushing your teeth, and switch to water-efficient appliances. It is estimated that if just one out of every 100 homes were upgraded with water-efficient fixtures, 100 million kilowatt-hours of electricity per year would be saved.",
        evidence: {
          support: [
            "Saving water reduces carbon pollution",
            "pump, heat, and treat your water"
          ],
          distract: ["100 million kilowatt-hours"]
        }
      },
      {
        n: 7,
        text:
          "As for other spheres, eat the food you buy and compost what you can. Approximately 10 percent of energy use goes into growing, processing, packaging, and shipping food—about 40 percent of which winds up in a landfill. If you're wasting less food, you're likely cutting down on energy consumption. As for the scraps you can't use or the leftovers you don't get to, collect them in a compost bin instead of sending them to a landfill where they release methane. Recycling food and other organic waste through compost provides a range of environmental benefits, including improving soil health, decreasing greenhouse gas emissions, recycling nutrients, and mitigating the impact of droughts.",
        evidence: {
          support: [
            "decreasing greenhouse gas emissions",
            "improving soil health"
          ],
          distract: ["about 40 percent of which winds up in a landfill"]
        }
      },
      {
        n: 8,
        text:
          "We need to make urgent changes to address the climate crisis—both to limit the damage we can no longer avoid and to prevent the worst-of-the-worst from happening. And while the urgency surrounding climate action should inspire us all into action, we can also draw hope from the progress we're already making.",
        evidence: {
          support: [
            "make urgent changes to address the climate crisis",
            "progress we're already making"
          ],
          distract: ["prevent the worst-of-the-worst"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "According to the text, carbon emissions in the USA …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "are about the same as in other developed countries."
          },
          {
            num: 2,
            text: "have risen four times in the last few years."
          },
          {
            num: 3,
            text: "are generally higher than in other countries."
          },
          {
            num: 4,
            text: "have been controlled by government policies."
          }
        ],
        explainRu:
          "Среднестатистический американец выбрасывает <strong>около в четыре раза больше углерода</strong>, чем средний показатель по миру (<strong>four times the global average</strong>) — то есть уровень <strong>выше «в среднем по планете»</strong>. Про «только что выросло в четыре раза» и про «уже сдержано политикой» текст так не утверждает."
      },
      {
        examNum: 13,
        prompt:
          "The author thinks that the role of individuals in fighting climate change is …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "as important as that of the governments."
          },
          {
            num: 2,
            text: "more necessary now than it used to be."
          },
          {
            num: 3,
            text: "vital in limiting carbon pollution."
          },
          {
            num: 4,
            text: "more essential than government policies."
          }
        ],
        explainRu:
          "Личные действия <strong>не замена</strong> государственной политике, но вклад граждан назван <strong>equally vital</strong> — то есть <strong>столь же важным, как и политика</strong>. Вариант «важнее государства» отпадает; формулировка про «vital in limiting» ближе к общей роли системы, а не к попарному сравнению с властью."
      },
      {
        examNum: 14,
        prompt:
          "What is the author's advice about reducing the <strong>weather</strong> effects on energy use?",
        key: 2,
        choices: [
          { num: 1, text: "Turn down heating and cooling systems." },
          {
            num: 2,
            text: "Improve your home to use less energy."
          },
          {
            num: 3,
            text:
              "Ask for federal tax credits to compensate for the costs."
          },
          {
            num: 4,
            text: "Adjust heating and air-conditioning to the weather."
          }
        ],
        explainRu:
          "Первый блок совета — <strong>weatherize</strong>: устранение сквозняков и утепление, чтобы дому требовалось <strong>меньше энергии</strong> на отопление/охлаждование. Налоговые лишь как дополнение (кредиты), а не главный совет; про «просто убавить батареи/кондиционер» текст в таком виде не говорит."
      },
      {
        examNum: 15,
        prompt:
          "<strong>It</strong> in &ldquo;It will tell you which are the most efficient&rdquo; (paragraph 4) most probably refers to …",
        key: 3,
        choices: [
          { num: 1, text: "emissions." },
          { num: 2, text: "special signs." },
          { num: 3, text: "electric devices." },
          { num: 4, text: "standards." }
        ],
        explainRu:
          "Перед этим перечислены <strong>холодильники, стиралки, бойлеры</strong> и т. п.; на ярлык смотрят, чтобы понять, какие из <strong>приборов</strong> эффективнее. Речь не про «выбросы» или абстрактные «стандарты» как субъект фразы <strong>It will tell you</strong>."
      },
      {
        examNum: 16,
        prompt: "It is implied that reducing water use …",
        key: 4,
        choices: [
          {
            num: 1,
            text: "saves more water for areas with lack of rain."
          },
          {
            num: 2,
            text: "is connected with energy-efficient equipment."
          },
          {
            num: 3,
            text: "is beneficial only if many people do it."
          },
          {
            num: 4,
            text: "results in fewer harmful gasses in the atmosphere."
          }
        ],
        explainRu:
          "Прямая связь: меньше воды → меньше энергии на подкачку/нагрев/очистку → <strong>Saving water reduces carbon pollution</strong>. Это вывод о меньшем <strong>вреде для атмосферы</strong> (углерод / парниковый эффект). Про «только если все делают» и про «воду для засушливых регионов» так не следует."
      },
      {
        examNum: 17,
        prompt:
          "Which benefit of composting food is <strong>NOT</strong> mentioned in the text?",
        key: 1,
        choices: [
          { num: 1, text: "Decreasing landfill waste." },
          { num: 2, text: "Reducing harmful gasses." },
          { num: 3, text: "Making the land better." },
          { num: 4, text: "Lessening the harm." }
        ],
        explainRu:
          "В финальном перечне плюсов компоста перечислены <strong>почва</strong> (<strong>soil health</strong>), <strong>парниковые газы</strong>, <strong>питательные вещества</strong> и <strong>засухи</strong>. Отдельной строкой про <strong>уменьшение объёма отходов на свалке</strong> там <strong>нет</strong> (хотя выше сказано не отправлять остатки на landfill — это мотивация, а не пункт списка выгод)."
      },
      {
        examNum: 18,
        prompt: "What is the main aim of the article?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "Tell the reader how to adapt to climate change."
          },
          {
            num: 2,
            text: "Inspire climate activists to act urgently."
          },
          {
            num: 3,
            text: "Explain to the officials how to change policies."
          },
          {
            num: 4,
            text: "Call individuals for action to reduce energy use."
          }
        ],
        explainRu:
          "Начало связывает угрозы климата с вопросом <strong>What can you do?</strong>, дальше — конкретные бытовые шаги (дом, техника, вода, еда) для читателя. Про инструкции чиновникам и «только про адаптацию» текст не строится; призыв к срочности есть, но ядро — <strong>личные действия и энергия/выбросы</strong>."
      }
    ],

    quickPhrases: [
      { en: "climate change / climate crisis", ru: "изменение климата / кризис" },
      { en: "carbon pollution", ru: "выбросы углерода / углеродное загрязнение" },
      { en: "fossil fuels", ru: "ископаемое топливо" },
      { en: "government policies", ru: "государственная политика" },
      { en: "private citizens", ru: "рядовые граждане" },
      { en: "weatherize", ru: "подготовить жильё (утепление, герметичность)" },
      { en: "insulated / insulation", ru: "утеплённый / утепление" },
      { en: "federal tax credits", ru: "федеральные налоговые льготы" },
      { en: "energy-efficient appliances", ru: "энергоэффективная техника" },
      { en: "Energy Star", ru: "ярлык Energy Star (США)" },
      { en: "refrigerants", ru: "хладагенты, фреоновые смеси" },
      { en: "compost", ru: "компост, компостирование" },
      { en: "landfill", ru: "свалка, полигон" },
      { en: "greenhouse gas emissions", ru: "выбросы парниковых газов" },
      { en: "mitigate droughts", ru: "смягчать последствия засух" },
      { en: "soil health", ru: "здоровье почвы" },
      { en: "kilowatt-hours", ru: "киловатт-часы (учёт электроэнергии)" }
    ],

    tapPhrases: [
      { en: "The effects of climate change are already threatening", ru: "Последствия климата уже угрожают" },
      { en: "about four times the global average", ru: "в ~4 раза выше мирового среднего" },
      { en: "no substitute for meaningful government policies", ru: "не замена серьёзной политике" },
      { en: "move away from dirty fossil fuels", ru: "уход от «грязного» ископаемого топлива" },
      { en: "equally vital contributions", ru: "столь же важный вклад" },
      { en: "Change only happens when individuals take action", ru: "Перемены начинаются с людей." },
      { en: "Building heating and cooling are among the biggest uses of energy", ru: "Отопление и охлаждение — главный расход энергии" },
      { en: "almost half of home energy use", ru: "почти половина энергии дома" },
      { en: "sealing drafts and ensuring it's adequately insulated", ru: "заделать щели и утеплить" },
      { en: "claim federal tax credits for many energy-efficiency home improvements", ru: "получить налоговые льготы на улучшения" },
      { en: "efficiency standards for dozens of appliances", ru: "стандарты эффективности для десятков приборов" },
      { en: "2.3 billion tons of carbon dioxide out of the air", ru: "2,3 млрд т CO₂ не попало в воздух" },
      { en: "Energy efficiency is the lowest-cost way to reduce emissions.", ru: "Энергоэффективность — дешёвый способ снизить выбросы." },
      { en: "look for the Energy Star label", ru: "искать ярлык Energy Star" },
      { en: "Recycling an old refrigerator through a special appliance disposal program", ru: "сдать холодильник через программу утилизации" },
      { en: "10,000 pounds of carbon pollution", ru: "10 000 фунтов выбросов углерода" },
      { en: "properly captured, rather than vented to the air", ru: "утилизировать, а не выпускать в воздух" },
      { en: "Saving water reduces carbon pollution, too.", ru: "Экономия воды тоже режет выбросы." },
      { en: "pump, heat, and treat your water", ru: "качать, греть и очищать воду" },
      { en: "water-efficient fixtures", ru: "водосберегающая арматура" },
      { en: "100 million kilowatt-hours of electricity per year would be saved", ru: "сэкономят 100 млн кВт·ч в год" },
      { en: "winds up in a landfill", ru: "оказывается на свалке" },
      { en: "Recycling food and other organic waste through compost provides a range of environmental benefits", ru: "компост органики даёт ряд экоплюсов" },
      { en: "mitigating the impact of droughts", ru: "смягчение засух" },
      { en: "make urgent changes to address the climate crisis", ru: "срочно менять ситуацию в кризисе климата" },
      { en: "draw hope from the progress we're already making", ru: "надеяться на уже достигнутый прогресс" },
      {
        en: "collect them in a compost bin instead of sending them to a landfill",
        ru: "компост вместо отправки на свалку"
      },
      {
        en: "Solar cost is predicted to decline tenfold in 30 years, and wind costs by thirtyfold in 40 years.",
        ru: "Солнце подешевеет в 10 раз за 30 лет, ветер — в 30 раз за 40."
      },
      {
        en: "solar power capacity has increased by 20 times",
        ru: "мощность солнечной выросла в 20 раз"
      }
    ],

    tapLexicon: [
      { en: "threatening", ru: "угрожают" },
      { en: "substitute", ru: "замена" },
      { en: "advocate", ru: "адвокат идеи, активист" },
      { en: "weatherize", ru: "утеплять дом, герметизировать" },
      { en: "drafts", ru: "сквозняки, щели" },
      { en: "implemented", ru: "введены (стандарты)" },
      { en: "dozens", ru: "десятки" },
      { en: "vented", ru: "выпущен (в атмосферу)" },
      { en: "fixtures", ru: "смесители, водосберегающие приборы" },
      { en: "scraps", ru: "обрезки, отходы" },
      { en: "leftovers", ru: "остатки еды" },
      { en: "methane", ru: "метан" },
      { en: "nutrients", ru: "питательные вещества" },
      { en: "urgent", ru: "срочные" },
      { en: "tenfold", ru: "в 10 раз" },
      { en: "thirtyfold", ru: "в 30 раз" },
      { en: "capacity", ru: "мощность, ёмкость" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
