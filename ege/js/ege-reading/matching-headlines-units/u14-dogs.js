/**
 * ЕГЭ Reading — Matching Headlines, юнит 14 (собаки: чутье, породы, дикие родичи, агрессия).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-dogs",
    unitOrder: 14,
    title: "Unit 14 · Dogs",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "The strongest sense for dogs is smell. In comparison to humans, dogs have almost 25% more scent receptors. As a result, dogs have an excellent sense of smell. Just as many humans rely on their sense of sight to navigate, dogs rely on their sense of smell to understand and explore their surroundings. Dogs can smell scents about 100,000 times more acutely than humans, which is surprising indeed. Because of their acute and accurate sense of smell, some breeds of dog are unique indeed.",
        evidence: {
          support: [
            "The strongest sense for dogs is smell.",
            "In comparison to humans, dogs have almost 25% more scent receptors.",
            "As a result, dogs have an excellent sense of smell.",
            "Dogs can smell scents about 100,000 times more acutely than humans,",
            "dogs rely on their sense of smell to understand and explore their surroundings."
          ],
          distract: [
            "Just as many humans rely on their sense of sight to navigate,",
            "Because of their acute and accurate sense of smell, some breeds of dog are unique indeed.",
            "which is surprising indeed."
          ]
        }
      },
      {
        letter: "B",
        text:
          "The word \"dog\" refers to a species of animals within the canine family. Dogs typically live within households and are owned by people as pets or as working dogs, which makes them domestic for the most part. There are some very friendly dogs that are great for families with children of all ages. Since dogs can pick up scents that humans cannot detect, they are also valuable additions to law enforcement teams, where they perform activities like smelling for drugs and weapons.",
        evidence: {
          support: [
            "Since dogs can pick up scents that humans cannot detect,",
            "they are also valuable additions to law enforcement teams,",
            "where they perform activities like smelling for drugs and weapons.",
            "There are some very friendly dogs that are great for families with children of all ages."
          ],
          distract: [
            "The word \"dog\" refers to a species of animals within the canine family.",
            "Dogs typically live within households and are owned by people as pets or as working dogs, which makes them domestic for the most part."
          ]
        }
      },
      {
        letter: "C",
        text:
          "While most dogs, by today's standards, would be considered to be of the domestic variety, there are many different species of canines that live in the wild and are feral. Some examples of feral dogs are coyotes, wolves, jackals and dingoes. These feral species can be found throughout the world in some parts of North America, Africa, Asia and Europe. In some cases, these dogs are dangerous to humans. Canines like wolves and coyotes are often a nuisance to farmers and livestock.",
        evidence: {
          support: [
            "While most dogs, by today's standards, would be considered to be of the domestic variety,",
            "there are many different species of canines that live in the wild and are feral.",
            "Some examples of feral dogs are coyotes, wolves, jackals and dingoes.",
            "These feral species can be found throughout the world in some parts of North America, Africa, Asia and Europe."
          ],
          distract: [
            "In some cases, these dogs are dangerous to humans.",
            "Canines like wolves and coyotes are often a nuisance to farmers and livestock."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Although pit bulls, German shepherds and rottweilers are often considered the most aggressive breeds of dog, any dog of any breed can be aggressive. Research shows that training and socialization are more important than breed in predicting aggression. According to the Smithsonian Institution, most researchers report that any puppy can grow into an aggressive dog in future. Dominance-based training methods are very often linked to increased aggressive behaviours.",
        evidence: {
          support: [
            "Research shows that training and socialization are more important than breed in predicting aggression.",
            "any dog of any breed can be aggressive.",
            "Dominance-based training methods are very often linked to increased aggressive behaviours."
          ],
          distract: [
            "Although pit bulls, German shepherds and rottweilers are often considered the most aggressive breeds of dog,",
            "According to the Smithsonian Institution, most researchers report that any puppy can grow into an aggressive dog in future."
          ]
        }
      },
      {
        letter: "E",
        text:
          "While any dog breed or mix can be affectionate, some breeds, such as retrievers, have a reputation for being extra friendly. Other dogs like huskies require a little more interaction and attention in order to earn their affection, which gives them a less-affectionate reputation. All dogs require attention and the proper training and care. German shepherds, for example, are so caring and affectionate of their owners that they experience separation anxiety when left alone for too long.",
        evidence: {
          support: [
            "some breeds, such as retrievers, have a reputation for being extra friendly.",
            "Other dogs like huskies require a little more interaction and attention in order to earn their affection, which gives them a less-affectionate reputation.",
            "German shepherds, for example, are so caring and affectionate of their owners that they experience separation anxiety when left alone for too long."
          ],
          distract: [
            "While any dog breed or mix can be affectionate,",
            "All dogs require attention and the proper training and care."
          ]
        }
      },
      {
        letter: "F",
        text:
          "Those who prefer small dogs often choose breeds, such as Spitz, Maltese and toy poodle, which all typically weigh less than 5 pounds. Many of these breeds are referred to as 'toy' versions of a particular breed. Breeders selectively breed small or toy-sized dogs to create even smaller dogs that they classify as teacup size. The Yorkshire dogs, commonly known as Yorkies, were bred to be rat hunters. Even with their small stature, Yorkies may try to pick fights with larger dogs.",
        evidence: {
          support: [
            "Those who prefer small dogs often choose breeds, such as Spitz, Maltese and toy poodle,",
            "which all typically weigh less than 5 pounds.",
            "Many of these breeds are referred to as 'toy' versions of a particular breed.",
            "they classify as teacup size.",
            "Even with their small stature, Yorkies may try to pick fights with larger dogs."
          ],
          distract: [
            "The Yorkshire dogs, commonly known as Yorkies, were bred to be rat hunters.",
            "Breeders selectively breed small or toy-sized dogs to create even smaller dogs"
          ]
        }
      },
      {
        letter: "G",
        text:
          "The most common criterion for measuring intelligence in dogs is how easy the dog is to train. Researchers look at how quickly the dog can figure out what the trainer is asking for, how likely the dog is to repeat the action, how many commands the dog can learn and how long it can retain a learned command without reinforcement. However, these results can be skewed by the different ways some breeds interact with people. The most intelligent breeds of dog are working breeds.",
        evidence: {
          support: [
            "The most common criterion for measuring intelligence in dogs is how easy the dog is to train.",
            "Researchers look at how quickly the dog can figure out what the trainer is asking for, how likely the dog is to repeat the action, how many commands the dog can learn and how long it can retain a learned command without reinforcement.",
            "The most intelligent breeds of dog are working breeds."
          ],
          distract: [
            "However, these results can be skewed by the different ways some breeds interact with people."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Helpful indeed" },
      { num: 2, text: "Most loving ones" },
      { num: 3, text: "Outdoing humans" },
      { num: 4, text: "Little but not the least" },
      { num: 5, text: "Testing IQ" },
      { num: 6, text: "A true friend" },
      { num: 7, text: "Distant relatives" },
      { num: 8, text: "Becoming dangerous" }
    ],

    key: { A: 3, B: 1, C: 7, D: 8, E: 2, F: 4, G: 5 },
    extraHeadlineNum: 6,

    explanationsRu: {
      A:
        "Обоняние в десятки тысяч раз острее, чем у людей — собаки <strong>превосходят человека</strong> по этому чувству (<strong>3</strong>).",
      B:
        "Семьи, дети, полиция, поиск — собака как <strong>помощник</strong> в быту и службе (<strong>1</strong>).",
      C:
        "Волки, шакалы, койоты — <strong>дикие «родичи»</strong> домашней собаки (<strong>7</strong>). Опасность в тексте — отвлекающий акцент.",
      D:
        "Любая порода может стать агрессивной, роль воспитания — речь об <strong>опасном поведении</strong> (<strong>8</strong>).",
      E:
        "Степень ласковости, «сердце на рукаве» vs сдержанность — <strong>самые любящие / нежные</strong> типы (<strong>2</strong>).",
      F:
        "Карлики, «teacup», мелкие, но дерутся с крупными — <strong>малыши, но не последние</strong> (<strong>4</strong>).",
      G:
        "Дрессировка, команды, рабочие породы — измерение <strong>ума</strong> (<strong>5</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>6 — A true friend</strong>: тёплые отношения с семьёй в <strong>B</strong> есть, но заголовок абзаца <strong>B</strong> шире — <strong>польза и помощь</strong> (семья + правоохранители) под <strong>1 Helpful indeed</strong>. Если в вашем сборнике для <strong>B</strong> стоит <strong>6</strong>, пришлите ключ — подстроим.",

    quickPhrases: [
      { en: "The strongest sense for dogs is smell", ru: "главное чувство собак — обоняние" },
      {
        en: "dogs have almost 25% more scent receptors",
        ru: "у собак почти на четверть больше обонятельных рецепторов"
      },
      {
        en: "dogs rely on their sense of smell to understand and explore their surroundings",
        ru: "собаки полагаются на нюх, чтобы понимать и исследовать среду"
      },
      {
        en: "smell scents about 100,000 times more acutely than humans",
        ru: "улавливают запахи примерно в 100 000 раз острее человека"
      },
      {
        en: "acute and accurate sense of smell",
        ru: "острое и точное обоняние"
      },
      {
        en: "species of animals within the canine family",
        ru: "вид животных из семейства псовых"
      },
      {
        en: "live within households and are owned by people as pets or as working dogs",
        ru: "живут в домах как питомцы или служебные собаки"
      },
      {
        en: "pick up scents that humans cannot detect",
        ru: "ловят запахи, которые человек не чувствует"
      },
      {
        en: "valuable additions to law enforcement teams",
        ru: "ценное подспорье в правоохранительных подразделениях"
      },
      {
        en: "smelling for drugs and weapons",
        ru: "поиск наркотиков и оружия по запаху"
      },
      {
        en: "great for families with children of all ages",
        ru: "подходят семьям с детьми любого возраста"
      },
      {
        en: "species of canines that live in the wild and are feral",
        ru: "виды псовых, живущих в дикой природе"
      },
      {
        en: "often a nuisance to farmers and livestock",
        ru: "часто мешают фермерам и домашнему скоту"
      },
      {
        en: "training and socialization are more important than breed in predicting aggression",
        ru: "воспитание и социализация важнее породы для прогноза агрессии"
      },
      {
        en: "Dominance-based training methods are very often linked to increased aggressive behaviours",
        ru: "дрессировка «через доминирование» связана с ростом агрессии"
      },
      {
        en: "have a reputation for being extra friendly",
        ru: "слывут особенно дружелюбными"
      },
      {
        en: "earn their affection",
        ru: "«заслужить» их нежность"
      },
      {
        en: "less-affectionate reputation",
        ru: "репутация менее ласковых собак"
      },
      {
        en: "experience separation anxiety when left alone for too long",
        ru: "страдают тревогой разлуки, если долго одни"
      },
      {
        en: "typically weigh less than 5 pounds",
        ru: "обычно весят меньше 5 фунтов"
      },
      {
        en: "referred to as 'toy' versions of a particular breed",
        ru: "называют «игрушечными» версиями породы"
      },
      {
        en: "selectively breed small or toy-sized dogs",
        ru: "селекционно выводят мини-породы"
      },
      {
        en: "bred to be rat hunters",
        ru: "выведены как крысоловы"
      },
      {
        en: "pick fights with larger dogs",
        ru: "рискуют залезть в драку с собаками побольше"
      },
      {
        en: "how easy the dog is to train",
        ru: "насколько собака легко обучается"
      },
      {
        en: "retain a learned command without reinforcement",
        ru: "удерживать выученную команду без подкрепления"
      },
      {
        en: "results can be skewed by the different ways some breeds interact with people",
        ru: "результаты искажаются тем, как породы общаются с людьми"
      },
      {
        en: "The most intelligent breeds of dog are working breeds",
        ru: "самые сообразительные — рабочие породы"
      },
      {
        en: "rely on their sense of sight to navigate",
        ru: "ориентируются по зрению (про людей)"
      },
      {
        en: "pit bulls, German shepherds and rottweilers",
        ru: "питбули, немецкие овчарки и ротвейлеры"
      },
      {
        en: "any dog of any breed can be aggressive",
        ru: "любая собака любой породы может быть агрессивной"
      },
      {
        en: "Coyotes, wolves, jackals and dingoes",
        ru: "койоты, волки, шакалы и динго"
      }
    ],

    tapPhrases: [
      {
        en: "The strongest sense for dogs is smell.",
        ru: "главное чувство собак — обоняние"
      },
      {
        en: "dogs have almost 25% more scent receptors",
        ru: "у собак почти на четверть больше обонятельных рецепторов"
      },
      {
        en: "Dogs can smell scents about 100,000 times more acutely than humans,",
        ru: "собаки улавливают запахи примерно в 100 000 раз острее, чем люди"
      },
      {
        en: "pick up scents that humans cannot detect",
        ru: "чувствуют запахи, которые люди не улавливают"
      },
      {
        en: "they are also valuable additions to law enforcement teams,",
        ru: "их ценят в составе полицейских / поисковых команд"
      },
      {
        en: "many different species of canines that live in the wild and are feral",
        ru: "много видов псовых, живущих в дикой природе"
      },
      {
        en: "Some examples of feral dogs are coyotes, wolves, jackals and dingoes.",
        ru: "примеры диких псовых — койоты, волки, шакалы, динго"
      },
      {
        en: "training and socialization are more important than breed in predicting aggression",
        ru: "воспитание и социализация важнее породы для прогноза агрессии"
      },
      {
        en: "Dominance-based training methods are very often linked to increased aggressive behaviours.",
        ru: "дрессировка через «доминирование» часто связана с ростом агрессии"
      },
      {
        en: "have a reputation for being extra friendly",
        ru: "слывут особенно дружелюбными"
      },
      {
        en: "less-affectionate reputation",
        ru: "репутация менее ласковых"
      },
      {
        en: "German shepherds, for example, are so caring and affectionate of their owners that they experience separation anxiety",
        ru: "немецкие овчарки так привязаны к хозяевам, что боятся оставаться одни"
      },
      {
        en: "referred to as 'toy' versions of a particular breed",
        ru: "называют «игрушечными» версиями породы"
      },
      {
        en: "Even with their small stature, Yorkies may try to pick fights with larger dogs.",
        ru: "несмотря на малый рост, йорки могут полезть драться с собаками побольше"
      },
      {
        en: "measuring intelligence in dogs is how easy the dog is to train",
        ru: "интеллект собак меряют по лёгкости дрессировки"
      },
      {
        en: "retain a learned command without reinforcement",
        ru: "удерживать выученную команду без подкрепления"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
