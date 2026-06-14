/**
 * ЕГЭ Reading — Multiple Choice, юнит 17 · Cycling to work.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-cycling-to-work",
    unitOrder: 17,
    title: "Unit 17 · Cycling to work",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "In larger cities, walking and transit get a much larger share of total commutes, but biking is still the laggard. Car commuting remains the overwhelming favorite, making up more than three-quarters of all trips even in major metro areas with long commute times.",
        evidence: {
          support: [
            "walking and transit get a much larger share",
            "biking is still the laggard",
            "more than three-quarters of all trips"
          ],
          distract: ["major metro areas with long commute times"]
        }
      },
      {
        n: 2,
        text:
          "As an enthusiastic cyclist and proponent of eco- (and wallet-) friendly transit alternatives, I find these numbers disappointing. However, I'm also a realist. Due to low population density and dispersed employment in the exurban belts around major cities, commuting by bike just isn't a viable option for millions of workers. The good news is that it is also possible for quite a lot. For many who make the switch to bike commuting, health is a big reason why. Even if you ride at a leisurely pace, you get more exercise than you would by sitting behind the wheel of your car. An 80-kg person riding at about 24 km per hour — a brisk but not aggressive pace — burns more than 400 calories in a 30-minute ride. For someone of the same weight, a more leisurely 18-km per hour pace burns 245 calories in 30 minutes. By contrast, according to a Harvard study, an 84-kg person burns about 45 calories during 30 minutes of driving.",
        evidence: {
          support: [
            "enthusiastic cyclist and proponent",
            "more exercise than you would by sitting behind the wheel",
            "burns more than 400 calories in a 30-minute ride",
            "about 45 calories during 30 minutes of driving"
          ],
          distract: [
            "isn't a viable option for millions of workers",
            "health is a big reason why"
          ]
        }
      },
      {
        n: 3,
        text:
          "Office work is even less energy-intensive. Per the same Harvard study, sitting at your desk or in a meeting burns roughly 70 calories per hour. If you weigh more, the caloric benefits are actually greater, as heavier people tend to burn calories faster.",
        evidence: {
          support: [
            "sitting at your desk or in a meeting burns roughly 70 calories per hour",
            "heavier people tend to burn calories faster"
          ],
          distract: ["even less energy-intensive"]
        }
      },
      {
        n: 4,
        text:
          "You may have heard that \"sitting is the new smoking.\" There's still debate about just how unhealthy it is to sit for long periods, but few experts argue that it's good for you. Studies have linked prolonged sitting as in a typical day at the office to increased risk for certain cancers, blood clots, obesity, cardiovascular disease, and other conditions. If you're an office drone, starting and ending your workday on a bike and not in a car can cut out a significant amount of daily sitting time.",
        evidence: {
          support: [
            "sitting is the new smoking",
            "linked prolonged sitting to increased risk",
            "starting and ending your workday on a bike"
          ],
          distract: ["few experts argue that it's good for you"]
        }
      },
      {
        n: 5,
        text:
          "It's important to note that biking to and from work isn't a cure-all. Studies suggest that exercise alone may not completely counteract the negative health effects of sitting. If you're really worried about what all that time in an office chair is doing to you, you should stand up periodically (five minutes of standing per half-hour of sitting may help) or invest in a standing desk.",
        evidence: {
          support: [
            "isn't a cure-all",
            "exercise alone may not completely counteract",
            "standing desk"
          ],
          distract: ["five minutes of standing per half-hour"]
        }
      },
      {
        n: 6,
        text:
          "If you plan to regularly commute by bike, certain equipment and clothing can help make your experience easier and more tolerable. Depending on your current biking habits, you may already have some of this stuff. In many cases, the bike itself is the largest part of the investment. Even if helmets aren't required by law in your area, wearing one is still for your safety. Location is everything. If you live somewhere with a wet, four-season climate, you need more equipment and clothing compared to riders in drier, milder places.",
        evidence: {
          support: [
            "equipment and clothing can help",
            "Location is everything",
            "wet, four-season climate, you need more equipment and clothing"
          ],
          distract: ["helmets aren't required by law"]
        }
      },
      {
        n: 7,
        text:
          "Biking isn't just for kids anymore. For growing numbers of workers, it's a viable alternative to driving to work or taking public transit. Of course, it's not right for everyone. If you live in a far-flung exurb or rural area, you probably have no choice but to drive unless you have the ability to work from home. But in more densely populated areas, commuting by bike may be easier and less costly than you imagined. With a few tweaks to your schedule, you could soon trade the nerve-grating cacophony of cars and engines with the exhilarating rush of the wind in your hair.",
        evidence: {
          support: [
            "a viable alternative to driving to work or taking public transit",
            "it's not right for everyone",
            "easier and less costly than you imagined"
          ],
          distract: ["far-flung exurb or rural area"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "According to the article, commuting by bike is …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "more popular than walking."
          },
          {
            num: 2,
            text: "the most common choice in major cities."
          },
          {
            num: 3,
            text:
              "less popular than walking and public transport in large cities."
          },
          {
            num: 4,
            text: "about to replace car commuting."
          }
        ],
        explainRu:
          "В начале: у пеших и общественного транспорта <strong>much larger share</strong>, велосипед — <strong>still the laggard</strong>, а машина — <strong>more than three-quarters</strong>. Значит, в городе велопоездки <strong>менее массовы</strong>, чем эти способы, а не «популярнее ходьбы» или «скоро вытеснит авто»."
      },
      {
        examNum: 13,
        prompt: "What is the author's attitude to using bikes?",
        key: 1,
        choices: [
          { num: 1, text: "Supportive." },
          { num: 2, text: "Skeptical." },
          { num: 3, text: "Neutral." },
          { num: 4, text: "Pessimistic." }
        ],
        explainRu:
          "Прямо: <strong>enthusiastic cyclist and proponent</strong> экологичного и недорогого транспорта; разочарование — лишь статистикой, дальше автор фактически продвигает велокоммьют как полезный выбор, но остаётся <strong>realist</strong> (это не скепсис к велу, а учёт условий)."
      },
      {
        examNum: 14,
        prompt:
          "Which is <strong>NOT</strong> true about physical exercise, according to the article?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "Heavier people burn more calories while cycling."
          },
          {
            num: 2,
            text: "Cycling speed influences how many calories you burn."
          },
          {
            num: 3,
            text: "You can burn 800 calories daily commuting by bike."
          },
          {
            num: 4,
            text: "Sitting at a desk burns more calories than driving."
          }
        ],
        explainRu:
          "По данным: <strong>~45 калорий за 30 минут вождения</strong> против <strong>~70 калорий в час</strong> за сиденьем за столом → за 30 минут сидячей работы выходит <strong>меньше</strong>, чем за 30 минут за рулём; значит формулировка «сиденье съедает больше калорий, чем вождение» <strong>неверна</strong>. Скорость езды меняет расход (24 vs 18 км/ч); тяжелее люди <strong>tend to burn calories faster</strong> (в логике текста); две поездки по 30 мин в оживлённом темпе могут суммарно дать порядка 800 ккал — это согласуется с «more than 400» за полчаса."
      },
      {
        examNum: 15,
        prompt: "Why does the author mention that \"sitting is the new smoking\"?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "You get addicted to sitting rather quickly."
          },
          {
            num: 2,
            text: "People sit and smoke on a typical office day."
          },
          {
            num: 3,
            text: "Sitting time is compared to smoking time."
          },
          {
            num: 4,
            text: "Both can do harm to your well-being."
          }
        ],
        explainRu:
          "Цитата задаёт рамку: долгое сидение связывают с <strong>рисками для здоровья</strong>, как и курение в публичном дискурсе — параллель про <strong>вред</strong>, а не про «зависимость», «одинаковую длительность» или буквальное совмещение с курением в офисе."
      },
      {
        examNum: 16,
        prompt:
          "The expression <strong>an office drone</strong> in &ldquo;If you're an office drone&rdquo; (paragraph 4) is closest in meaning to a person who …",
        key: 4,
        choices: [
          { num: 1, text: "hates office work." },
          { num: 2, text: "enjoys fixed hours." },
          { num: 3, text: "has an office job." },
          { num: 4, text: "has a boring job." }
        ],
        explainRu:
          "<strong>Office drone</strong> — разговорно о человеке с <strong>рутинной, малоинтересной офисной работой</strong> (образ «робота»); в тексте это те, кто много сидит в кресле, без акценса «ненавидит офис» или «любит график». Вариант «просто имеет офисную работу» ближе по охвату, но идиоматически <strong>drone</strong> несёт оттенок <strong>однообразия</strong> — поэтому (4) точнее как «closest meaning»."
      },
      {
        examNum: 17,
        prompt: "The author thinks that biking clothing and equipment …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "can hardly change your experience."
          },
          {
            num: 2,
            text: "depend a lot on where you live."
          },
          {
            num: 3,
            text: "discourage many people from cycling."
          },
          {
            num: 4,
            text: "should be new and reliable."
          }
        ],
        explainRu:
          "Ключевая мысль: <strong>Location is everything</strong> — в климатах <strong>wet, four-season</strong> нужно <strong>больше</strong> экипировки, чем в сухих мягких; это прямая зависимость от места жизни. Противоположность — «едва меняют опыт»; про «отпугивают» или обязательность «нового и надёжного» как главный тезис автор не заявляет."
      },
      {
        examNum: 18,
        prompt: "What's the main idea of the article?",
        key: 2,
        choices: [
          {
            num: 1,
            text: "Riding a bike is unsuitable for lots of people."
          },
          {
            num: 2,
            text: "Commuting by bike can be a good option."
          },
          {
            num: 3,
            text: "Cycling can cure diseases caused by sitting."
          },
          {
            num: 4,
            text: "There are no disadvantages to cycling to work."
          }
        ],
        explainRu:
          "Текст балансирует: не для всех (эксурбаны, низкая плотность), но для многих — <strong>здоровье</strong>, выгода, реализуемость в плотных зонах; вело — <strong>viable alternative</strong>. Велосипед не <strong>cure-all</strong>, значит (3) и (4) неверны как главная мысль; (1) — лишь ограничение, не центральный посыл."
      }
    ],

    quickPhrases: [
      { en: "the laggard", ru: "отстающий способ / аутсайдер" },
      { en: "commute", ru: "ежедневная поездка на работу и обратно" },
      { en: "proponent", ru: "сторонник, поборник" },
      { en: "wallet-friendly", ru: "бережный для кошелька" },
      { en: "sitting is the new smoking", ru: "сидячий образ жизни — как новое курение" },
      { en: "office drone", ru: "офисный «рутинный» работник (разг.)" },
      { en: "cure-all", ru: "панацея" },
      { en: "standing desk", ru: "стол для работы стоя" },
      { en: "nerve-grating cacophony", ru: "нервный гул и шум" },
      { en: "exhilarating rush", ru: "приподнимающий порыв (ветра и т.п.)" }
    ],

    tapPhrases: [
      { en: "biking is still the laggard", ru: "велосипед остаётся отстающим в статистике" },
      { en: "more than three-quarters of all trips", ru: "больше трёх четвертей поездок" },
      { en: "enthusiastic cyclist and proponent", ru: "увлечённый велосипедист и сторонник" },
      { en: "commuting by bike just isn't a viable option for millions of workers", ru: "для миллионов велокоммьют нереален" },
      { en: "burns more than 400 calories in a 30-minute ride", ru: "свыше 400 ккал за полчаса езды" },
      { en: "about 45 calories during 30 minutes of driving", ru: "около 45 ккал за полчаса за рулём" },
      { en: "sitting at your desk burns roughly 70 calories per hour", ru: "сидение за столом — около 70 ккал в час" },
      { en: "heavier people tend to burn calories faster", ru: "у тяжелее людей быстрее расход калорий" },
      { en: "linked prolonged sitting to increased risk", ru: "связали долгое сидение с ростом рисков" },
      { en: "cut out a significant amount of daily sitting time", ru: "срезать заметную долю сидения в дне" },
      { en: "exercise alone may not completely counteract", ru: "одних тренировок может не хватить, чтобы нивелировать сидение" },
      { en: "Location is everything", ru: "география/климат решают многое" },
      { en: "wet, four-season climate", ru: "мокрый климат четырёх сезонов" },
      { en: "a viable alternative to driving to work", ru: "реальная альтернатива машине до работы" },
      { en: "easier and less costly than you imagined", ru: "проще и дешевле, чем кажется" },
      {
        en: "nerve-grating cacophony of cars and engines",
        ru: "нервный шум машин и моторов"
      }
    ],

    tapLexicon: [
      { en: "transit", ru: "общественный транспорт" },
      { en: "exurban", ru: "пригород на окраине агломерации" },
      { en: "leisurely", ru: "неторопливый" },
      { en: "brisk", ru: "оживлённый (о темпе)" },
      { en: "cardiovascular", ru: "сердечно-сосудистый" },
      { en: "tolerable", ru: "терпимый, приемлемый" },
      { en: "investment", ru: "вложение (в смысле покупки вело)" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
