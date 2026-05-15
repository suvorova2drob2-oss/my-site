/**
 * ЕГЭ Reading — Multiple Choice, юнит 4 · Cleaner energy (solar vs wind).
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-cleaner-energy",
    unitOrder: 4,
    title: "Unit 4 · Cleaner energy",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          'Faster than many thought possible, and despite long doubt about renewable energy\'s practicality, a momentous transformation is now well underway. We are moving from an economy fuelled primarily by climate-warming fossil fuels, to one in which we will cleanly pluck most of our energy out of water, wind, and the fire in the sky. Let\'s try to figure out which type can better suit your needs.',
        evidence: {
          support: [
            "figure out which type can better suit your needs"
          ],
          distract: [
            "moving from an economy fuelled primarily by climate-warming fossil fuels"
          ]
        }
      },
      {
        n: 2,
        text:
          "For suburban settings and applications, solar power is usually the best choice. As solar panels can be installed on the rooftops of houses, schools, and businesses, they are more practical for suburban or urban regions. Transparent solar panels are coming to retrofit roofs and windows. A solar power system has no moving parts and is less space-consuming. It has better reliability and a 25-year warranty. Moreover, solar is totally silent in operation. Solar power is also less susceptible to lightning and high wind damage. Solar requires less monitoring and less maintenance, and provides a more predictable energy output. It allows for quicker installation with minimal cables.",
        evidence: {
          support: [
            "It allows for quicker installation with minimal cables.",
            "less susceptible to lightning"
          ],
          distract: [
            "solar is totally silent in operation"
          ]
        }
      },
      {
        n: 3,
        text:
          "On the other hand, a wind turbine is comfortable in rural areas. Most of the local government authorities are against erecting wind turbines in townships, as it creates noise and might raise complaints from the neighbours. While wind turbines are not suitable for urban areas, they are ideal for rural regions, far from cities, that are most in need of power. A wind turbine can generate the same amount of electricity as about 48,704 solar panels. It can be built on existing farms or ranches. It doesn't affect the farmers working in that land, as it uses only a fraction of the land. They will also receive the rent paid by wind power plant owners for using their land.",
        evidence: {
          support: [
            "they are ideal for rural regions, far from cities",
            "not suitable for urban areas"
          ],
          distract: [
            "local government authorities are against erecting wind turbines in townships"
          ]
        }
      },
      {
        n: 4,
        text:
          "The main concerns of wind turbines are the noise from moving parts and visual impacts to the landscape. Wind turbines affect local wildlife, as birds and bats get killed by the spinning of turbine blades. The downside of wind energy is that it is not always strong enough to turn a turbine. And sometimes it is too strong and can damage it. And finally, wind turbines need regular maintenance because of their moving parts.",
        evidence: {
          support: [
            "visual impacts to the landscape",
            "wind turbines need regular maintenance"
          ],
          distract: [
            "birds and bats get killed by the spinning of turbine blades"
          ]
        }
      },
      {
        n: 5,
        text:
          "The efficiency of solar panels and wind turbines is dependent on how well they can convert sunlight or wind into usable electricity. Even the most efficient solar panels convert only about 22% of energy harnessed from sunlight into actual electrical energy. Wind turbines can convert up to 60% of the energy they harness from the wind into usable electric energy. Wind power is more efficient, but it is not easy to capitalise on wind power, whereas utilising solar power is much easier.",
        evidence: {
          support: [
            "Wind turbines can convert up to 60%",
            "convert only about 22% of energy harnessed from sunlight"
          ],
          distract: [
            "Wind power is more efficient"
          ]
        }
      },
      {
        n: 6,
        text:
          "Based on the daily usage of electricity, the average amount of sunshine received, and the individual output of panels, one would need around 24 solar panels to meet the energy demands of an average household of six. On average, solar panel costs will range between $11,000 and $15,000, not including installation costs. Annual average wind speed of an area and the size and energy needs of a house determine whether wind turbine can power a house. Based on the size and height of the turbine and the equipment used, an average wind turbine installation will cost somewhere between $50,000 and $70,000.",
        evidence: {
          support: [
            "solar panel costs will range between $11,000 and $15,000",
            "between $50,000 and $70,000"
          ],
          distract: [
            "around 24 solar panels to meet the energy demands"
          ]
        }
      },
      {
        n: 7,
        text:
          "That all may sound very expensive now, but in the last decade, solar power capacity has increased by 20 times. Solar cost is predicted to decline tenfold in 30 years, and wind costs by thirtyfold in 40 years.",
        evidence: {
          support: [
            "solar power capacity has increased by 20 times"
          ],
          distract: [
            "That all may sound very expensive now"
          ]
        }
      },
      {
        n: 8,
        text:
          "All in all, there can never be one clear winner in such things, as it is not a race in which all the industries are competing. The path to low-carbon future is not just solar energy or just wind energy, but the two technologies working in tandem.",
        evidence: {
          support: [
            "the two technologies working in tandem"
          ],
          distract: [
            "there can never be one clear winner"
          ]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt:
          "As stated in the first paragraph, the author's main aim in the article is to…",
        key: 2,
        choices: [
          {
            num: 1,
            text: "debate the practical value of renewable energy."
          },
          { num: 2, text: "compare different kinds of energy." },
          {
            num: 3,
            text: "explain how clean energy will transform our world."
          },
          {
            num: 4,
            text: "warn against the use of traditional energy."
          }
        ],
        explainRu:
          "В конце первого абзаца прямо: <strong>figure out which type can better suit your needs</strong> — свести типы энергии к выбору для читателя, т.е. <strong>сравнить</strong> варианты. Фон про трансформацию экономики есть, но <strong>цель статьи</strong> в этом абзаце сформулирована как подбор под задачи читателя."
      },
      {
        examNum: 13,
        prompt:
          "Which is <strong>FALSE</strong> about solar power, according to the text?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "Solar panels can be installed even on windows."
          },
          {
            num: 2,
            text: "It helps to avoid creating noise pollution."
          },
          {
            num: 3,
            text: "It is possible to calculate how much energy you will get."
          },
          {
            num: 4,
            text: "Solar panels can be easily destroyed by lightning."
          }
        ],
        explainRu:
          "В тексте солнечная энергия <strong>less susceptible to lightning</strong> — значит утверждение, что их «легко уничтожает молния», <strong>неверно</strong>. Окна/прозрачные панели, тишина и предсказуемость выхода соответствуют тексту."
      },
      {
        examNum: 14,
        prompt:
          "<strong>It</strong> in &ldquo;It allows for quicker installation&rdquo; (paragraph 2) most probably refers to…",
        key: 2,
        choices: [
          { num: 1, text: "energy output." },
          { num: 2, text: "solar energy." },
          { num: 3, text: "monitoring." },
          { num: 4, text: "maintenance." }
        ],
        explainRu:
          "Перед этим идёт описание именно <strong>solar power</strong> / системы без силовой части; <strong>It allows for quicker installation</strong> логически продолжает тему солнечной установки, а не «выхода энергии» или «мониторинга»."
      },
      {
        examNum: 15,
        prompt: "Compared to solar energy, wind turbines are…",
        key: 1,
        choices: [
          { num: 1, text: "better for remote locations." },
          { num: 2, text: "producing less energy." },
          { num: 3, text: "dangerous for farm lands." },
          { num: 4, text: "supported by the government." }
        ],
        explainRu:
          "Идеально для <strong>rural regions, far from cities</strong>; в городах власти часто против. По одной турбине — огромный выход энергии (не «меньше»). Землю фермы почти не забирают — не «опасны для полей». Про всеобщую поддержку властей текст не утверждает."
      },
      {
        examNum: 16,
        prompt:
          "Which is <strong>NOT</strong> mentioned in the text as a disadvantage of wind turbines?",
        key: 4,
        choices: [
          { num: 1, text: "Spoiling the scenery." },
          { num: 2, text: "Requiring a lot of care." },
          {
            num: 3,
            text: "A possibility of being damaged."
          },
          {
            num: 4,
            text: "Destroying animals' homes."
          }
        ],
        explainRu:
          "Есть <strong>visual impacts</strong> (пейзаж), <strong>regular maintenance</strong>, риск <strong>damage</strong> при слишком сильном ветре. Упоминается гибель птиц и летучих из-за лопастей, но не формулировка про «разрушение жилищ животных» как отдельный минус."
      },
      {
        examNum: 17,
        prompt: "It can be inferred from the article that…",
        key: 3,
        choices: [
          {
            num: 1,
            text: "solar panels are more efficient than wind turbines."
          },
          {
            num: 2,
            text: "solar energy is more expensive than wind energy."
          },
          {
            num: 3,
            text:
              "solar panel initial costs are lower than those for wind turbines."
          },
          {
            num: 4,
            text:
              "wind power cost is decreasing faster than solar power cost."
          }
        ],
        explainRu:
          "Средние <strong>$11,000–$15,000</strong> для солнечных панелей против <strong>$50,000–$70,000</strong> для ветроустановки (до монтажа) — вывод о более низких стартовых затратах на солнечный вариант. По КПД ветер выше, чем солнце, а про скорость падения цен однозначного сравнения «быстрее/медленнее» текст не даёт в одной цифре."
      },
      {
        examNum: 18,
        prompt:
          "What conclusion does the author come to at the end of the article?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "Solar energy is developing faster than wind energy."
          },
          {
            num: 2,
            text:
              "It is up to industries to choose which type works best."
          },
          {
            num: 3,
            text:
              "The combination of wind and solar energy is the best choice."
          },
          {
            num: 4,
            text:
              "It doesn't matter which type is used as long as it is renewable."
          }
        ],
        explainRu:
          "Заключительный абзац: не соревнование отраслей и однозначного «победителя» нет; путь — <strong>not just solar … or just wind … but … in tandem</strong>. Это именно тандем двух технологий, а не общая фраза «любая возобновляемая пойдёт»."
      }
    ],

    quickPhrases: [
      { en: "renewable energy", ru: "возобновляемая энергия" },
      { en: "fossil fuels", ru: "ископаемое топливо" },
      { en: "climate-warming", ru: "разогревающие климат (выбросы)" },
      { en: "solar panels / solar power", ru: "солнечные панели / солнечная энергия" },
      { en: "wind turbine", ru: "ветряная турбина" },
      { en: "suburban / urban / rural", ru: "пригород / город / сельская местность" },
      { en: "retrofit", ru: "модернизировать, оснастить постфактум" },
      { en: "warranty", ru: "гарантия" },
      { en: "maintenance", ru: "обслуживание, техобслуживание" },
      { en: "susceptible to", ru: "уязвимый к, подверженный" },
      { en: "local government authorities", ru: "местные власти" },
      { en: "erecting", ru: "установка, возведение" },
      { en: "townships", ru: "малые города / городские посёлки" },
      { en: "visual impacts", ru: "влияние на вид (ландшафт)" },
      { en: "harness", ru: "собирать, использовать (энергию)" },
      { en: "capitalise on / capitalize on", ru: "извлекать выгоду, нажиться на…" },
      { en: "utilising / utilizing", ru: "использование" },
      { en: "household", ru: "домохозяйство, семья" },
      { en: "installation", ru: "установка, монтаж" },
      { en: "tenfold / thirtyfold", ru: "в 10 / в 30 раз" },
      { en: "work in tandem", ru: "работать в связке, совместно" },
      { en: "low-carbon future", ru: "низкоуглеродное будущее" }
    ],

    tapPhrases: [
      { en: "momentous transformation is now well underway", ru: "грандиозный перелом уже идёт" },
      { en: "long doubt about renewable energy's practicality", ru: "давние сомнения в практичности ВИЭ" },
      { en: "fire in the sky", ru: "«небо в огне» — образ солнца как источника" },
      { en: "figure out which type can better suit your needs", ru: "выяснить, какой тип лучше тебе подходит" },
      { en: "more practical for suburban or urban regions", ru: "практичнее для города и пригорода" },
      { en: "Transparent solar panels are coming to retrofit roofs and windows.", ru: "Прозрачные панели — на крыши и окна." },
      { en: "has no moving parts", ru: "нет движущихся частей (тише, проще)" },
      { en: "less space-consuming", ru: "меньше занимает места" },
      { en: "totally silent in operation", ru: "полностью бесшумны в работе" },
      { en: "less susceptible to lightning", ru: "меньше страдают от молний" },
      { en: "more predictable energy output", ru: "более предсказуемая выработка" },
      { en: "It allows for quicker installation with minimal cables.", ru: "Быстрее ставится, мало кабеля." },
      { en: "a wind turbine is comfortable in rural areas", ru: "ветроустановке комфортно в селе" },
      { en: "raise complaints from the neighbours", ru: "вызвать жалобы соседей" },
      { en: "they are ideal for rural regions, far from cities", ru: "идеальны вдали от городов" },
      { en: "most in need of power", ru: "больше всего нуждаются в энергии" },
      { en: "generate the same amount of electricity as about 48,704 solar panels", ru: "столько же электричества, как ~48 704 панелей" },
      { en: "only a fraction of the land", ru: "лишь доля земли" },
      { en: "visual impacts to the landscape", ru: "портят вид / ландшафт" },
      { en: "birds and bats get killed by the spinning of turbine blades", ru: "птицы и летучие гибнут от лопастей" },
      { en: "not always strong enough to turn a turbine", ru: "ветер не всегда достаточен" },
      { en: "wind turbines need regular maintenance", ru: "нужен регулярный сервис" },
      { en: "convert sunlight or wind into usable electricity", ru: "превращать солнце/ветер в электричество" },
      { en: "convert only about 22% of energy harnessed from sunlight", ru: "лишь ~22% пойманного солнца" },
      { en: "Wind turbines can convert up to 60%", ru: "у ветра до ~60% преобразования" },
      { en: "Wind power is more efficient", ru: "ветер эффективнее по КПД" },
      { en: "it is not easy to capitalise on wind power", ru: "сложно нажить на ветре / использовать ветер" },
      { en: "utilising solar power is much easier", ru: "с солнцем проще" },
      { en: "meet the energy demands of an average household", ru: "покрыть потребности «средней» семьи" },
      { en: "solar panel costs will range between $11,000 and $15,000", ru: "панели ~11–15 тыс. долл." },
      { en: "between $50,000 and $70,000", ru: "50–70 тыс. долл. (турбина)" },
      { en: "solar power capacity has increased by 20 times", ru: "мощность солнца выросла в 20 раз" },
      { en: "decline tenfold in 30 years", ru: "подешевеет в 10 раз за 30 лет" },
      { en: "there can never be one clear winner", ru: "одного «победителя» не бывает" },
      { en: "the two technologies working in tandem", ru: "две технологии вместе" }
    ],

    tapLexicon: [
      { en: "momentous", ru: "грандиозный, исторически важный" },
      { en: "practicality", ru: "практичность" },
      { en: "fuelled", ru: "питаемый (топливом)" },
      { en: "pluck", ru: "достать (образно «снять» ресурс)" },
      { en: "suburban", ru: "пригородный" },
      { en: "rooftops", ru: "крыши" },
      { en: "warranty", ru: "гарантия" },
      { en: "reliability", ru: "надёжность" },
      { en: "susceptible", ru: "уязвимый, подверженный" },
      { en: "monitoring", ru: "контроль, надзор" },
      { en: "maintenance", ru: "обслуживание" },
      { en: "predictable", ru: "предсказуемый" },
      { en: "townships", ru: "небольшие города, посёлки" },
      { en: "complaints", ru: "жалобы" },
      { en: "neighbours", ru: "соседи" },
      { en: "ranch", ru: "ранчо" },
      { en: "wildlife", ru: "дикая природа" },
      { en: "blades", ru: "лопасти" },
      { en: "landscape", ru: "ландшафт, вид" },
      { en: "harnessed", ru: "собранный, уловленный (об энергии)" },
      { en: "efficient", ru: "эффективный" },
      { en: "household", ru: "домохозяйство" },
      { en: "installation", ru: "установка" },
      { en: "capacity", ru: "мощность, объём" },
      { en: "competing", ru: "соревнуются" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
