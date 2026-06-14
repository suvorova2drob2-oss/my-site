/**
 * ЕГЭ Reading — Multiple Choice, юнит 12 · The dangers of microplastics.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-the-dangers-of-microplastics",
    unitOrder: 12,
    title: "Unit 12 · The dangers of microplastics",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "With recent research, it appears that retiring plastic from our lives should be an expedited process. About a month ago it was reported that microplastics had been found in human blood.",
        evidence: {
          support: ["microplastics had been found in human blood"],
          distract: ["retiring plastic from our lives should be an expedited process"]
        }
      },
      {
        n: 2,
        text:
          "The finding was supported in a study co-authored by Professor Vethaak, who asked whether the particles were retained in the body or transported to certain organs. These are questions that scientific research has yet to answer, showing the dubious knowledge we have on the effect of such an invasive material on our bodies and our culture.",
        evidence: {
          support: [
            "retained in the body or transported to certain organs",
            "scientific research has yet to answer"
          ],
          distract: ["such an invasive material"]
        }
      },
      {
        n: 3,
        text:
          "We have learned to shake hands with this devilish commodity, holding its hand while we carry groceries, and unknowingly consuming it in the food we eat. Even worse, infants are the most vulnerable to it. Babies often play and interact with plastic items from birth. From chewing on plastic teething rings to playing with plastic tub toys, children have a lot of exposure to plastic and its additives. According to a study released in September 2021, that exposure may be cause for concern.",
        evidence: {
          support: [
            "shake hands with this devilish commodity",
            "infants are the most vulnerable"
          ],
          distract: ["plastic teething rings"]
        }
      },
      {
        n: 4,
        text:
          "We need to urge our local governments to support bills that limit our usage of single-use plastics that are very often dumped into our environments, whether that is holding businesses and manufacturers accountable through taxes or even making environmentally-friendly packaging more accessible.",
        evidence: {
          support: [
            "support bills that limit our usage of single-use plastics",
            "holding businesses and manufacturers accountable through taxes"
          ],
          distract: [
            "environmentally-friendly packaging more accessible"
          ]
        }
      },
      {
        n: 5,
        text:
          "One of these types of plastics that can be found in our blood is polyethylene, the kind used in carrying bags and food containers. This type of plastic has the highest propensity to be dangerous because plastic bags are an extremely common occurrence in our trash. Due to winds and careless littering, they have also been a plague on the natural world.",
        evidence: {
          support: [
            "polyethylene",
            "an extremely common occurrence in our trash"
          ],
          distract: ["a plague on the natural world"]
        }
      },
      {
        n: 6,
        text:
          "Plastic can be found in our solid and liquid waste. It can damage human cells and be found in placentas, the essential organ that babies live off until birth. It can be deduced from this that there is a potential for cancer risks and for us to be born with these invasive plastics in us. Truly chilling.",
        evidence: {
          support: [
            "damage human cells",
            "found in placentas"
          ],
          distract: ["potential for cancer risks"]
        }
      },
      {
        n: 7,
        text:
          "We have an opportunity to ban these bags. The risk of future generations having embedded plastics in their diet and bodies should veto any argument for convenience.",
        evidence: {
          support: [
            "We have an opportunity to ban these bags",
            "veto any argument for convenience"
          ],
          distract: ["embedded plastics in their diet and bodies"]
        }
      },
      {
        n: 8,
        text:
          "It isn't just the potential for invasive plastics to ruin our health that's terrifying, but the fact that our hubris as a factory-fuelled civilization has led to this point—that for those who take part in its norms comes the risk of having an infamously irremovable unnatural material within them.",
        evidence: {
          support: [
            "hubris as a factory-fuelled civilization",
            "irremovable unnatural material"
          ],
          distract: ["ruin our health"]
        }
      },
      {
        n: 9,
        text:
          "Plastic is just as bad as lead, a material also commonly used for a long time—if not worse. It was a material widely used in paint, car fuel, and toys; research, though, helped scientists establish the psychological and physical tolls of lead, and now we use it far less openly. At least paint companies no longer advertise lead paint to children.",
        evidence: {
          support: [
            "Plastic is just as bad as lead",
            "now we use it far less openly"
          ],
          distract: ["psychological and physical tolls of lead"]
        }
      },
      {
        n: 10,
        text:
          "As animals and agricultural goods are exposed to these plastics—even trace amounts—they permanently become a part of the ecosystems we feed ourselves from today. It can get into our salt, our water from leaching plastic bottles we drink from, or from pollution that even filters cannot remove completely—and it is unfortunate that much research sits behind a paywall.",
        evidence: {
          support: [
            "trace amounts",
            "become a part of the ecosystems"
          ],
          distract: ["behind a paywall"]
        }
      },
      {
        n: 11,
        text:
          "It is important that we take measures into our own hands and support banning plastic bags on a mass-market scale, urging our lawmakers that short-term inconveniences are no excuse for long-term detriments the likes of which we have not even researched enough to understand—with one thing being certain: the material we have normalised will prove malicious.",
        evidence: {
          support: [
            "support banning plastic bags",
            "short-term inconveniences are no excuse for long-term detriments"
          ],
          distract: ["take measures into our own hands"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt:
          "The scientific research the author refers to at the beginning of the text has shown that …",
        key: 3,
        choices: [
          {
            num: 1,
            text:
              "microplastics are more harmful for humans than for animals."
          },
          {
            num: 2,
            text: "people in developed countries overuse plastic items."
          },
          {
            num: 3,
            text: "plastic particles can get into human blood."
          },
          {
            num: 4,
            text: "plastics can be transported to parts of human body."
          }
        ],
        explainRu:
          "В первых строках фиксируют факт: <strong>microplastics had been found in human blood</strong>. Про «доставку в органы» — это уже вопросы исследования (<strong>yet to answer</strong>), а не подтверждённый на старте вывод."
      },
      {
        examNum: 13,
        prompt:
          "The phrase <strong>this devilish commodity</strong> in &ldquo;We have learned to shake hands with this devilish commodity&rdquo; (paragraph 3) most probably refers to …",
        key: 4,
        choices: [
          { num: 1, text: "grocery bags." },
          { num: 2, text: "food additives." },
          { num: 3, text: "baby toys." },
          { num: 4, text: "plastic objects." }
        ],
        explainRu:
          "Дальше перечисляется носить продукты, есть с пластиком в еде, детские кольца и игрушки — общий предмет: <strong>пластик</strong>, а не только пакет или только добавки."
      },
      {
        examNum: 14,
        prompt: "What does the author think local governments should do?",
        key: 4,
        choices: [
          { num: 1, text: "Prohibit all plastic items." },
          { num: 2, text: "Provide free packaging." },
          {
            num: 3,
            text: "Raise taxes for big companies."
          },
          {
            num: 4,
            text: "Make laws to reduce plastic use."
          }
        ],
        explainRu:
          "Ядро призыва — <strong>support bills that limit … single-use plastics</strong> (то есть законодательно сократить использование). Налоги — один из возможных рычагов ответственности бизнеса, но не единственная и не буквальная «бесплатная упаковка»; запрет «всего пластика» формулировкой не покрыт."
      },
      {
        examNum: 15,
        prompt:
          "According to the text, plastic used in bags and food containers can be dangerous because …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "it is very different from elements in the nature."
          },
          {
            num: 2,
            text:
              "people have direct contact with it while eating."
          },
          {
            num: 3,
            text:
              "it is the most wide-spread type of plastic waste."
          },
          {
            num: 4,
            text: "winds can often destroy it into small parts."
          }
        ],
        explainRu:
          "Полиэтилен опасен с высокой склонностью к вреду, потому что пакеты <strong>extremely common occurrence in our trash</strong> — массовый, распространённый пластик в отходах; не акцент на «ветер дробит» как главный довод абзаца."
      },
      {
        examNum: 16,
        prompt: "What is the author's position on plastic bags?",
        key: 1,
        choices: [
          {
            num: 1,
            text: "They must be prohibited without delay."
          },
          {
            num: 2,
            text: "They are convenient for many people."
          },
          {
            num: 3,
            text: "It is important to find a compromise."
          },
          {
            num: 4,
            text: "There are more minuses than pluses."
          }
        ],
        explainRu:
          "Прямые формулировки: <strong>opportunity to ban these bags</strong>, риск для потомков <strong>should veto any argument for convenience</strong>, в финале — <strong>support banning plastic bags</strong> на масштабе рынка; это сильнее, чем общий «больше минусов»."
      },
      {
        examNum: 17,
        prompt: "The author compares plastic to lead in order to …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "explain how it is used in everyday things."
          },
          {
            num: 2,
            text: "give an example of how science can help."
          },
          {
            num: 3,
            text: "illustrate why plastic is harmful."
          },
          {
            num: 4,
            text: "show what can be done with plastic."
          }
        ],
        explainRu:
          "Связка <strong>just as bad as lead</strong> переносит на пластик уровень опасности «как у исторически ядовитого свинца»; дальше про свинец — контекст массового применения и вреда. Вариант про «как наука помогла» вторичен по сравнению с целью показать <strong>вредность</strong> через узнаваемый пример."
      },
      {
        examNum: 18,
        prompt: "What is the main aim of the article?",
        key: 1,
        choices: [
          {
            num: 1,
            text: "To persuade people to stop using plastic."
          },
          {
            num: 2,
            text: "To discuss the recent research about plastic."
          },
          {
            num: 3,
            text: "To inform the reader about eco-friendly choices."
          },
          {
            num: 4,
            text: "To analyze the future options for using plastic."
          }
        ],
        explainRu:
          "Текст строится как призыв: срочность, кровь, плацента, запрет пакетов, давление на власти и законы — это <strong>убеждение сократить/убрать пластик</strong>, а не нейтральный обзор одного исследования или разбор «вариантов будущего использования»."
      }
    ],

    quickPhrases: [
      { en: "microplastics", ru: "микропластик" },
      { en: "expedited process", ru: "ускоренный процесс, безотлагательность" },
      { en: "invasive material", ru: "«вторгаться»: чужеродный материал в организме" },
      { en: "single-use plastics", ru: "одноразовый пластик" },
      { en: "polyethylene", ru: "полиэтилен" },
      { en: "propensity", ru: "склонность, вероятность (опасности)" },
      { en: "placenta", ru: "плацента" },
      { en: "embedded plastics", ru: "«встроенный» пластик в организме/рационе" },
      { en: "hubris", ru: "гордыня, самонадеянность" },
      { en: "irremovable", ru: "неудалимый" },
      { en: "leaching", ru: "выщелачивание, утечка веществ" },
      { en: "trace amounts", ru: "следовые количества" },
      { en: "paywall", ru: "платный доступ (к исследованиям)" },
      { en: "detriment", ru: "вред, ущерб" },
      { en: "mass-market scale", ru: "масштаб массового рынка" }
    ],

    tapPhrases: [
      {
        en: "microplastics had been found in human blood",
        ru: "микропластик нашли в крови людей"
      },
      {
        en: "scientific research has yet to answer",
        ru: "наука ещё не ответила на вопросы"
      },
      {
        en: "shake hands with this devilish commodity",
        ru: "подружились с дьявольским «товаром» (пластиком)"
      },
      {
        en: "infants are the most vulnerable to it",
        ru: "младенцы наиболее уязвимы"
      },
      {
        en: "support bills that limit our usage of single-use plastics",
        ru: "поддержать законопроекты об одноразовом пластике"
      },
      {
        en: "holding businesses and manufacturers accountable through taxes",
        ru: "привлечь бизнес к ответственности через налоги"
      },
      {
        en: "making environmentally-friendly packaging more accessible",
        ru: "сделать экологичную упаковку доступнее"
      },
      {
        en: "an extremely common occurrence in our trash",
        ru: "крайне часто в нашем мусоре"
      },
      {
        en: "a plague on the natural world",
        ru: "бедствие для природы"
      },
      {
        en: "damage human cells",
        ru: "повреждают клетки человека"
      },
      {
        en: "potential for cancer risks",
        ru: "риски рака (потенциально)"
      },
      {
        en: "We have an opportunity to ban these bags.",
        ru: "Есть шанс запретить эти пакеты."
      },
      {
        en: "veto any argument for convenience",
        ru: "отсечь доводы про «удобство»"
      },
      {
        en: "Plastic is just as bad as lead",
        ru: "Пластик не лучше свинца"
      },
      {
        en: "we use it far less openly",
        ru: "теперь используем гораздо осторожнее / реже"
      },
      {
        en: "permanently become a part of the ecosystems",
        ru: "навсегда входят в экосистемы"
      },
      {
        en: "support banning plastic bags on a mass-market scale",
        ru: "за запрет пакетов в массовой торговле"
      },
      {
        en: "short-term inconveniences are no excuse for long-term detriments",
        ru: "краткосрочные неудобства не оправдывают долгосрочный вред"
      },
      {
        en: "the material we have normalised will prove malicious",
        ru: "привычный материал окажется злом"
      }
    ],

    tapLexicon: [
      { en: "retiring", ru: "уход / отказ (от пластика)" },
      { en: "commodity", ru: "товар, предмет массового потребления" },
      { en: "additives", ru: "добавки" },
      { en: "accountable", ru: "ответственность (подотчётность)" },
      { en: "littering", ru: "мусорить, сорить" },
      { en: "deduced", ru: "логически следует" },
      { en: "chilling", ru: "леденящий, жуткий" },
      { en: "fuelled", ru: "разгоняемый (фабриками)" },
      { en: "norms", ru: "нормы (потребления)" },
      { en: "tolls", ru: "потери, цена (вреда)" },
      { en: "agricultural", ru: "сельскохозяйственный" },
      { en: "pollution", ru: "загрязнение" },
      { en: "lawmakers", ru: "законодатели" },
      { en: "malicious", ru: "злой, вредный" },
      { en: "dubious", ru: "сомнительный" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
