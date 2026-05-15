/**
 * ЕГЭ Reading — Matching Headlines, юнит 6 (кенгуру).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-kangaroos",
    unitOrder: 6,
    title: "Unit 6 · Kangaroos",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Most kangaroos live on the continent of Australia, though each species has its own favourite place for living. For example, the musky rat-kangaroo likes to nestle down in little nests on the floor of the rainforests in northeastern Queensland. Gray kangaroos like the forests of Tasmania. The antilopine kangaroo can be found in the eucalyptus woodlands of extreme northern Australia. Small tree-kangaroos live in the upper branches of trees in the rainforests of Queensland, as well as on the island of New Guinea.",
        evidence: {
          support: [
            "each species has its own favourite place for living.",
            "the musky rat-kangaroo likes to nestle down in little nests on the floor of the rainforests in northeastern Queensland.",
            "Small tree-kangaroos live in the upper branches of trees in the rainforests of Queensland, as well as on the island of New Guinea."
          ],
          distract: [
            "Most kangaroos live on the continent of Australia,"
          ]
        }
      },
      {
        letter: "B",
        text:
          "Kangaroos are the only large animals that hop to move around. Their springy hind legs and feet are much stronger and larger than their arms. Kangaroos can cover 7 metres in a single hop, and can hop as fast as 48 km/h. When feeding, kangaroos use a slower, walking movement, and for that they use their muscular tail, pushing off the ground as they move along. Kangaroos are social animals. They live in groups called a mob, a herd or a troop. Kangaroos in a mob will groom each other and protect each other from danger.",
        evidence: {
          support: [
            "Kangaroos are the only large animals that hop to move around.",
            "Kangaroos can cover 7 metres in a single hop, and can hop as fast as 48 km/h.",
            "Kangaroos in a mob will groom each other and protect each other from danger."
          ],
          distract: ["Kangaroos are social animals."]
        }
      },
      {
        letter: "C",
        text:
          "Probably the best-known fact about kangaroos is that they carry their young in a pouch. A female kangaroo can give birth to up to four offspring at one time, though this is unusual. At birth, the baby, called a joey, can be as small as a grain of rice. When the joey is born, it is guided safely into the comfy pouch, where it develops for another 4 to 15 months. Inside the pouch, the joey is protected and fed with milk. Joeys grow quickly, and at 14 to 20 months for females, or 2 to 4 years for males, they will be fully matured.",
        evidence: {
          support: [
            "they carry their young in a pouch.",
            "it is guided safely into the comfy pouch, where it develops for another 4 to 15 months.",
            "Inside the pouch, the joey is protected and fed with milk."
          ],
          distract: [
            "A female kangaroo can give birth to up to four offspring at one time, though this is unusual."
          ]
        }
      },
      {
        letter: "D",
        text:
          "According to the Red List of Threatened Species, 16 species of tree-kangaroos and rat-kangaroos are listed as either near-threatened, threatened, vulnerable, endangered or critically endangered. The desert rat-kangaroo and the short-nosed rat-kangaroo are considered completely extinct. Current studies show that global warming could also kill off the world's smallest kangaroo. However, the four species of great kangaroos — the species that are much larger than other kangaroos — are not endangered.",
        evidence: {
          support: [
            "are listed as either near-threatened, threatened, vulnerable, endangered or critically endangered.",
            "are considered completely extinct.",
            "global warming could also kill off the world's smallest kangaroo."
          ],
          distract: [
            "the four species of great kangaroos — the species that are much larger than other kangaroos — are not endangered."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Kangaroos are large marsupials that are found only in Australia. They are identified by their muscular tails, strong back legs, large feet, short fur and long, pointed ears. Like all marsupials — a sub-type of mammal — females have pouches where their young live until they are old enough to emerge. According to National Geographic, the largest kangaroo, as well as the largest marsupial, is the red kangaroo. The smallest kangaroo is the musky rat-kangaroo. It is only 15 to 20 cm long, and weighs 340 grams.",
        evidence: {
          support: [
            "They are identified by their muscular tails, strong back legs, large feet, short fur and long, pointed ears.",
            "Like all marsupials — a sub-type of mammal — females have pouches where their young live until they are old enough to emerge.",
            "the largest kangaroo, as well as the largest marsupial, is the red kangaroo."
          ],
          distract: ["Kangaroos are large marsupials that are found only in Australia."]
        }
      },
      {
        letter: "F",
        text:
          "Kangaroos are mainly herbivores. They eat grasses, flowers, leaves, ferns, moss, and even insects. Like cows, kangaroos bring their swallowed food up again to the mouth and re-chew it before it is ready to be totally digested. Great kangaroos mainly roam forests in search of food, though they do go to open grasslands for grazing. Small species, like rat-kangaroos, eat worms, roots, and palm berries. The animal sits on its haunches while eating and finds food by digging. They are solitary, but have been seen feeding together.",
        evidence: {
          support: [
            "Kangaroos are mainly herbivores.",
            "They eat grasses, flowers, leaves, ferns, moss, and even insects.",
            "Small species, like rat-kangaroos, eat worms, roots, and palm berries."
          ],
          distract: [
            "They are solitary, but have been seen feeding together."
          ]
        }
      },
      {
        letter: "G",
        text:
          "Large male kangaroos are powerfully built. Like many species in the wild, male kangaroos sometimes fight over potential mates. They often lean back on their sturdy tail and kick each other with their strong hind legs. Kangaroos can also bite and wield sharp claws, which they may do in battle with an enemy, such as a dingo. If a kangaroo suspects that there is some danger in the area, it will stomp its foot on the ground to alert others. If it comes to blows, a kangaroo will skillfully box and kick its opponent.",
        evidence: {
          support: [
            "male kangaroos sometimes fight over potential mates.",
            "kick each other with their strong hind legs.",
            "a kangaroo will skillfully box and kick its opponent."
          ],
          distract: [
            "it will stomp its foot on the ground to alert others."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Fighting without rules" },
      { num: 2, text: "A natural hunter" },
      { num: 3, text: "Home, sweet home" },
      { num: 4, text: "What's on the menu?" },
      { num: 5, text: "Unique habits" },
      { num: 6, text: "Most caring mothers" },
      { num: 7, text: "Asking for protection?" },
      { num: 8, text: "What's a kangaroo like?" }
    ],

    key: { A: 3, B: 5, C: 6, D: 7, E: 8, F: 4, G: 1 },
    extraHeadlineNum: 2,

    explanationsRu: {
      A:
        "У каждого вида свой <strong>любимый ареал</strong>: леса, саванны, кроны, остров — <strong>3 — Home, sweet home</strong>.",
      B:
        "Единственные крупные животные, что <strong>прыгают</strong>, скорость и дистанция, хвост, стая — <strong>необычные привычки и образ жизни</strong> (<strong>5</strong>).",
      C:
        "<strong>Сумка</strong>, джоуи, молоко, безопасное развитие — про <strong>материнскую заботу</strong> (<strong>6</strong>).",
      D:
        "Красная книга, <strong>исчезновение</strong>, климат — нужна ли им <strong>охрана</strong> (<strong>7</strong>).",
      E:
        "Внешний вид, сумчатые, крупнейший и мельчайший вид — <strong>что это за зверь</strong> (<strong>8</strong>).",
      F:
        "<strong>Трава, листья, жуки, черви</strong>, пережёвывание как у коров — <strong>меню</strong> (<strong>4</strong>).",
      G:
        "Драки самцов, <strong>удары ногами</strong>, укусы, когти, <strong>бокс</strong> — <strong>бой без правил</strong> (<strong>1</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся заголовок <strong>2 — A natural hunter</strong>: кенгуру в основном <strong>травоядны</strong> и не описываются как охотники-плотоядные; разовое поедание насекомых или червей в §F не делает текст про «прирождённого охотника».",

    quickPhrases: [
      { en: "favourite place for living", ru: "любимое место обитания" },
      { en: "nestle down", ru: "устраиваются, уютно сворачиваются (в гнёздышке)" },
      { en: "eucalyptus woodlands", ru: "эвкалиптовые редколесья" },
      { en: "springy hind legs", ru: "пружинистые задние ноги" },
      { en: "a mob, a herd or a troop", ru: "стада (названия группы кенгуру)" },
      { en: "groom each other", ru: "водят социальный / гигиенический уход друг за другом" },
      { en: "joey", ru: "детёныш кенгуру (джоуи)" },
      { en: "comfy pouch", ru: "удобная сумка" },
      { en: "Threatened Species", ru: "находящиеся под угрозой (Red List)" },
      { en: "critically endangered", ru: "на грани полного исчезновения" },
      { en: "global warming", ru: "глобальное потепление" },
      { en: "marsupials", ru: "сумчатые" },
      { en: "herbivores", ru: "травоядные" },
      { en: "re-chew", ru: "пережёвывать снова (жвачка, как у жвачных)" },
      { en: "grazing", ru: "выпас, поедание травы на открытых лугах" },
      { en: "dingo", ru: "динго" },
      { en: "wield sharp claws", ru: "размахивать / применять острые когти" }
    ],

    tapPhrases: [
      {
        en: "each species has its own favourite place for living.",
        ru: "у каждого вида своё излюбленное место жизни"
      },
      {
        en: "Kangaroos are the only large animals that hop to move around.",
        ru: "кенгуру — единственные крупные животные, которые передвигаются прыжками"
      },
      {
        en: "When the joey is born, it is guided safely into the comfy pouch, where it develops for another 4 to 15 months.",
        ru: "новорождённого направляют в сумку, где он дорастает ещё 4–15 месяцев"
      },
      {
        en: "16 species of tree-kangaroos and rat-kangaroos are listed as either near-threatened, threatened, vulnerable, endangered or critically endangered.",
        ru: "16 видов древесных и крысиных кенгуру в списках от «почти под угрозой» до «на грани исчезания»"
      },
      {
        en: "They are identified by their muscular tails, strong back legs, large feet, short fur and long, pointed ears.",
        ru: "узнают по мускулистому хвосту, сильным задним ногам, большим ступням, короткой шерсти и длинным заострённым ушам"
      },
      {
        en: "Like cows, kangaroos bring their swallowed food up again to the mouth and re-chew it before it is ready to be totally digested.",
        ru: "как коровы, возвращают съеденное в рот и пережёвывают, пока пища не переварится"
      },
      {
        en: "male kangaroos sometimes fight over potential mates.",
        ru: "самцы иногда дерутся из-за самок"
      },
      {
        en: "If it comes to blows, a kangaroo will skillfully box and kick its opponent.",
        ru: "если дошло до силовой схватки, кенгуру умело бьёт и пинает соперника"
      }
    ],

    tapLexicon: [
      { en: "pouch", ru: "сумка (у сумчатых)" },
      { en: "marsupial", ru: "сумчатое (животное)" },
      { en: "herbivore", ru: "травоядное" },
      { en: "extinct", ru: "вымерший" },
      { en: "joey", ru: "джоуи (детёныш)" },
      { en: "haunches", ru: "зад (ягодицы), сидит на задних)" },
      { en: "ferns", ru: "папоротники" },
      { en: "moss", ru: "мох" },
      { en: "troops", ru: "здесь: troop = группа; не «войска»" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
