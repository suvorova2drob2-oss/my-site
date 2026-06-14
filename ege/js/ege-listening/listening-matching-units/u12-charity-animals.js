/**
 * ЕГЭ Listening Matching · Unit 12 · Charity & animals (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-charity-animals",
    unitOrder: 12,
    title: "Unit 12 · Charity & animals",
    examSection: "§1 · Задание 1",
    headerTitle: "Charity & animals",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/12/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2012%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> — финансовая поддержка организаций, спасающих животных → №4.</li>" +
      "<li><strong>B</strong> — не все фонды надёжны, ищите reputable/local → №6.</li>" +
      "<li><strong>C</strong> — нельзя помочь всем; фокус на типах животных / регионах → №7.</li>" +
      "<li><strong>D</strong> — много типов приютов под разные интересы → №3.</li>" +
      "<li><strong>E</strong> — компания, имидж, общественность заметит → №5.</li>" +
      "<li><strong>F</strong> — не обязан жертвовать на каждую просьбу → №1.</li>" +
      "<li><strong>№2</strong> лишнее: никто не говорит, что волонтёрство обязательно.</li>" +
      "</ul>",
    statements: [
      { num: 1, text: "There is no obligation to donate to every charity." },
      { num: 2, text: "Volunteering for charity organizations is necessary." },
      { num: 3, text: "Charities are different to meet everyone's wishes." },
      { num: 4, text: "Charity is a good way to show love and support to animals." },
      { num: 5, text: "Supporting charity organizations is beneficial for a business." },
      { num: 6, text: "The choice of a reliable charity organization is important." },
      { num: 7, text: "Focusing donations on one kind of charity is more effective." }
    ],
    extraStatementNum: 2,
    /** A→4, B→6, C→7, D→3, E→5, F→1; лишнее — 2 */
    key: [4, 6, 7, 3, 5, 1],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "financial support", ru: "финансовая поддержка" },
      { en: "furry and feathered friends", ru: "пушистые и пернатые друзья" },
      { en: "not all charities are as trustworthy", ru: "не все благотворительные организации одинаково надёжны" },
      { en: "reputable charities", ru: "проверенные / надёжные фонды" },
      { en: "can't help every animal on Earth", ru: "нельзя помочь каждому животному на Земле" },
      { en: "focus on certain types of animals", ru: "сосредоточиться на определённых видах животных" },
      { en: "satisfy all needs", ru: "удовлетворить любые потребности" },
      { en: "endangered animal charities", ru: "фонды для исчезающих видов" },
      { en: "your company should make charitable donations", ru: "компании стоит делать благотворительные пожертвования" },
      { en: "company's image and work culture", ru: "имидж компании и корпоративная культура" },
      { en: "every charitable cause", ru: "каждая благотворительная просьба" },
      { en: "no plans to donate", ru: "нет намерения жертвовать" }
    ],
    tapPhrases: [
      { en: "save animals' lives", ru: "спасать жизни животных" },
      { en: "living conditions", ru: "условия содержания" },
      { en: "trustworthy", ru: "надёжный / заслуживающий доверия" },
      { en: "monitor your local community", ru: "присмотреться к местному сообществу" },
      { en: "narrowing down your goals", ru: "сузить круг целей" },
      { en: "limited resources", ru: "ограниченные ресурсы" },
      { en: "nonprofit organizations", ru: "некоммерческие организации" },
      { en: "specific breeds", ru: "конкретные породы" },
      { en: "dramatic impact", ru: "сильное влияние" },
      { en: "decline donation requests", ru: "отказывать от просьб о пожертвовании" },
      { en: "honest, direct and polite", ru: "честно, прямо и вежливо" },
      { en: "volunteering", ru: "волонтёрство" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          { en: "cats and dogs to bunnies and iguanas", ru: "от кошек и собак до кроликов и игуан" },
          { en: "among our very best friends", ru: "среди наших лучших друзей" },
          { en: "enrich our lives", ru: "обогащают нашу жизнь" },
          { en: "complete our families", ru: "дополняют нашу семью" },
          { en: "creatures we don't share our homes with", ru: "создания, с которыми мы не живём дома" },
          { en: "deserve our respect and care", ru: "заслуживают уважения и заботы" },
          { en: "Providing financial support", ru: "финансовая поддержка", tip: "№4" },
          { en: "save animals' lives", ru: "спасать жизни животных", tip: "№4" },
          { en: "improve their living conditions", ru: "улучшать условия их содержания", tip: "№4" },
          { en: "furry and feathered friends", ru: "пушистые и пернатые друзья", tip: "№4" },
          { en: "get necessary care", ru: "получить необходимую помощь", tip: "№4" },
          { en: "love and support to animals", ru: "любовь и поддержка животным", tip: "парафраз №4" },
          { en: "financial support to organizations", ru: "финансовая поддержка организаций", tip: "№4" },
          { en: "work to save animals", ru: "работают, чтобы спасать животных", tip: "№4" },
          { en: "great way", ru: "отличный способ" },
          { en: "respect and care", ru: "уважение и забота" },
          { en: "very best friends", ru: "самые лучшие друзья" },
          { en: "share our homes with", ru: "жить с нами под одной крышей" },
          { en: "ensure", ru: "обеспечить / гарантировать" },
          { en: "necessary care", ru: "необходимая помощь", tip: "№4" }
        ],
        fullText:
          "From cats and dogs to bunnies and iguanas, many of us count one or more of these animals among our very best friends. They enrich our lives and complete our families — but even the creatures we don't share our homes with deserve our respect and care. Providing financial support to organizations that work to save animals' lives and improve their living conditions is a great way to ensure our furry and feathered friends get necessary care.",
        chunks: [
          {
            text:
              "From cats and dogs to bunnies and iguanas, many of us count one or more of these animals among our very best friends.",
            showText: true
          },
          {
            text:
              "They enrich our lives and complete our families — but even the creatures we don't share our homes with deserve our respect and care.",
            showText: true
          },
          {
            text:
              "Providing financial support to organizations that work to save animals' lives and improve their living conditions is a great way to ensure our furry and feathered friends get necessary care.",
            showText: true
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "supporting the animals you can't welcome into your home", ru: "помочь животным, которых не можете взять домой" },
          { en: "donating to an animal rescue charity", ru: "пожертвование в приют для животных", tip: "ловушка №4" },
          { en: "a great way to give back", ru: "хороший способ отдать долг" },
          { en: "not all charities are as trustworthy as others", ru: "не все благотворительные организации одинаково надёжны", tip: "№6" },
          { en: "your donations are being used in the best possible way", ru: "ваши пожертвования используются как можно лучше", tip: "№6" },
          { en: "monitor your local community", ru: "присмотреться к местному сообществу", tip: "№6" },
          { en: "find the best charities", ru: "найти лучшие фонды", tip: "№6" },
          { en: "local reputable charities", ru: "проверенные местные фонды", tip: "№6" },
          { en: "reliable charity organization", ru: "надёжная благотворительная организация", tip: "парафраз №6" },
          { en: "animal rescue charity", ru: "приют / организация спасения животных" },
          { en: "trustworthy", ru: "заслуживающий доверия", tip: "№6" },
          { en: "give back", ru: "отдать долг / помочь в ответ" },
          { en: "welcome into your home", ru: "взять к себе домой" },
          { en: "vital to know", ru: "важно знать" },
          { en: "get you started", ru: "с чего можно начать" },
          { en: "for animals", ru: "для животных" },
          { en: "remember that", ru: "помнить, что" },
          { en: "best possible way", ru: "наилучшим образом", tip: "№6" },
          { en: "local community", ru: "местное сообщество", tip: "№6" },
          { en: "reputable", ru: "проверенный / уважаемый", tip: "№6" }
        ],
        fullText:
          "If you're interested in supporting the animals you can't welcome into your home, donating to an animal rescue charity is a great way to give back. But it's important to remember that not all charities are as trustworthy as others — and it's vital to know your donations are being used in the best possible way. That's why you'd better monitor your local community to find the best charities. Surely, there're some local reputable charities for animals to get you started.",
        chunks: [
          {
            text:
              "If you're interested in supporting the animals you can't welcome into your home, donating to an animal rescue charity is a great way to give back.",
            showText: true
          },
          {
            text:
              "But it's important to remember that not all charities are as trustworthy as others — and it's vital to know your donations are being used in the best possible way.",
            showText: true
          },
          {
            text:
              "That's why you'd better monitor your local community to find the best charities. Surely, there're some local reputable charities for animals to get you started.",
            showText: false
          }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          { en: "so many organizations out there to choose from", ru: "так много организаций на выбор", tip: "ловушка №3" },
          { en: "find the best animal rescue charity to support", ru: "найти лучший приют для поддержки", tip: "ловушка №6" },
          { en: "narrowing down your goals", ru: "сузить круг целей" },
          { en: "you can't help every animal on Earth", ru: "нельзя помочь каждому животному на Земле", tip: "№7" },
          { en: "save every animal that needs our help", ru: "спасти каждое нуждающееся животное", tip: "ловушка №3" },
          { en: "focus on certain types of animals", ru: "сосредоточиться на определённых видах животных", tip: "№7" },
          { en: "different geographic areas", ru: "разные географические регионы", tip: "№7" },
          { en: "limited resources they have available", ru: "ограниченные ресурсы, которые у них есть", tip: "№7" },
          { en: "accomplish the most", ru: "сделать максимум", tip: "№7" },
          { en: "Focusing donations on one kind", ru: "сосредоточить пожертвования на одном направлении", tip: "парафраз №7" },
          { en: "more effective", ru: "эффективнее", tip: "парафраз №7" },
          { en: "animal rescue charity", ru: "приют для животных" },
          { en: "narrowing down", ru: "сужение / уточнение" },
          { en: "on Earth", ru: "на Земле" },
          { en: "charity organizations", ru: "благотворительные организации" },
          { en: "certain types", ru: "определённые виды", tip: "№7" },
          { en: "geographic areas", ru: "географические регионы", tip: "№7" },
          { en: "limited resources", ru: "ограниченные ресурсы", tip: "№7" },
          { en: "needs our help", ru: "нуждается в нашей помощи" },
          { en: "to support", ru: "поддержать" }
        ],
        fullText:
          "With so many organizations out there to choose from, how do you find the best animal rescue charity to support? First, you should start by narrowing down your goals. Then, keep in mind that you can't help every animal on Earth. While many of us wish we could save every animal that needs our help, most charity organizations focus on certain types of animals or different geographic areas to accomplish the most with the limited resources they have available.",
        chunks: [
          {
            text:
              "With so many organizations out there to choose from, how do you find the best animal rescue charity to support?",
            showText: true
          },
          {
            text: "First, you should start by narrowing down your goals.",
            showText: true
          },
          {
            text: "Then, keep in mind that you can't help every animal on Earth.",
            showText: true
          },
          {
            text:
              "While many of us wish we could save every animal that needs our help, most charity organizations focus on certain types of animals or different geographic areas to accomplish the most with the limited resources they have available.",
            showText: false
          }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          { en: "many types of animal rescue nonprofit organizations", ru: "много типов некоммерческих организаций по спасению животных", tip: "№3" },
          { en: "to satisfy all needs", ru: "удовлетворить любые потребности", tip: "№3" },
          { en: "endangered animal charities", ru: "фонды для исчезающих видов" },
          { en: "a fan of wildlife", ru: "любитель дикой природы" },
          { en: "prefer to focus on dogs, cats", ru: "предпочитать сосредоточиться на собаках и кошках", tip: "ловушка №7" },
          { en: "furry pals close to home", ru: "пушистые друзья рядом с домом" },
          { en: "local animal charities", ru: "местные приюты для животных" },
          { en: "specific breeds of dogs and cats", ru: "конкретные породы собак и кошек", tip: "№3" },
          { en: "all types of charities would welcome your donation", ru: "любой тип фондов будет рад вашему пожертвованию", tip: "№3" },
          { en: "Charities are different", ru: "благотворительные организации разные", tip: "парафраз №3" },
          { en: "meet everyone's wishes", ru: "удовлетворить желания каждого", tip: "парафраз №3" },
          { en: "animal welfare charities", ru: "организации защиты животных" },
          { en: "nonprofit organizations", ru: "некоммерческие организации" },
          { en: "wildlife", ru: "дикая природа" },
          { en: "appeal to you", ru: "вам подойдут / привлекут вас" },
          { en: "close to home", ru: "рядом с домом" },
          { en: "would love your help", ru: "будут рады вашей помощи" },
          { en: "dedicated to helping", ru: "посвящены помощи" },
          { en: "welcome your donation", ru: "будут рады пожертвованию", tip: "№3" },
          { en: "different types", ru: "разные типы", tip: "№3" }
        ],
        fullText:
          "I know there're many types of animal rescue nonprofit organizations to satisfy all needs. If you're a fan of wildlife, maybe endangered animal charities appeal to you. If you prefer to focus on dogs, cats and other furry pals close to home, plenty of local animal charities would love your help. These days, there're even animal welfare charities dedicated to helping specific breeds of dogs and cats. Surely, all types of charities would welcome your donation.",
        chunks: [
          {
            text:
              "I know there're many types of animal rescue nonprofit organizations to satisfy all needs.",
            showText: true
          },
          {
            text:
              "If you're a fan of wildlife, maybe endangered animal charities appeal to you.",
            showText: true
          },
          {
            text:
              "If you prefer to focus on dogs, cats and other furry pals close to home, plenty of local animal charities would love your help.",
            showText: true
          },
          {
            text:
              "These days, there're even animal welfare charities dedicated to helping specific breeds of dogs and cats. Surely, all types of charities would welcome your donation.",
            showText: false
          }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          { en: "your company should make charitable donations", ru: "вашей компании стоит делать благотворительные пожертвования", tip: "№5" },
          { en: "change your company's image", ru: "изменить имидж компании", tip: "№5" },
          { en: "work culture", ru: "корпоративная культура", tip: "№5" },
          { en: "dramatic impact on others", ru: "сильное влияние на других" },
          { en: "better your community", ru: "улучшить ваше сообщество" },
          { en: "the public will notice", ru: "общественность заметит", tip: "№5" },
          { en: "making a real effort to improve its surroundings", ru: "реально старается улучшить окружение", tip: "№5" },
          { en: "beneficial for a business", ru: "полезно для бизнеса", tip: "парафраз №5" },
          { en: "improve schools or parks", ru: "улучшить школы или парки" },
          { en: "safe places to learn and play", ru: "безопасные места для учёбы и игр" },
          { en: "charitable donations", ru: "благотворительные пожертвования", tip: "№5" },
          { en: "company's donations", ru: "пожертвования компании", tip: "№5" },
          { en: "many reasons", ru: "много причин" },
          { en: "Donating to charities", ru: "пожертвования в благотворительные фонды", tip: "№5" },
          { en: "image", ru: "имидж", tip: "№5" },
          { en: "public", ru: "общественность", tip: "№5" },
          { en: "surroundings", ru: "окружение" },
          { en: "giving children", ru: "давая детям" },
          { en: "supporting charity organizations", ru: "поддержка благотворительных организаций", tip: "парафраз №5" },
          { en: "real effort", ru: "реальные усилия", tip: "№5" }
        ],
        fullText:
          "I can name many reasons why your company should make charitable donations. Donating to charities can help change your company's image and work culture. It can also have a dramatic impact on others. Charitable donations help better your community, and the public will notice if a company is making a real effort to improve its surroundings. Your company's donations can help improve schools or parks, giving children safe places to learn and play.",
        chunks: [
          {
            text: "I can name many reasons why your company should make charitable donations.",
            showText: true
          },
          {
            text:
              "Donating to charities can help change your company's image and work culture.",
            showText: true
          },
          {
            text:
              "It can also have a dramatic impact on others. Charitable donations help better your community, and the public will notice if a company is making a real effort to improve its surroundings.",
            showText: true
          },
          {
            text:
              "Your company's donations can help improve schools or parks, giving children safe places to learn and play.",
            showText: false
          }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          { en: "a great person with a big heart", ru: "замечательный человек с большим сердцем" },
          { en: "willing and able to contribute to every charitable cause", ru: "готов и может поддержать каждую благотворительную просьбу", tip: "№1" },
          { en: "comes your way", ru: "к вам обращается" },
          { en: "decline donation requests", ru: "отказывать от просьб о пожертвовании" },
          { en: "no plans to donate", ru: "нет намерения жертвовать", tip: "№1" },
          { en: "several strategies to consider", ru: "несколько стратегий на выбор" },
          { en: "honest, direct and polite", ru: "честно, прямо и вежливо" },
          { en: "no obligation to donate", ru: "нет обязанности жертвовать", tip: "парафраз №1" },
          { en: "every charity", ru: "каждый благотворительный фонд", tip: "парафраз №1" },
          { en: "turn down a request", ru: "отказать в просьбе" },
          { en: "frustrating", ru: "раздражающий / неприятный" },
          { en: "charitable cause", ru: "благотворительная просьба / дело", tip: "№1" },
          { en: "contribute", ru: "вносить вклад / жертвовать", tip: "№1" },
          { en: "donation requests", ru: "просьбы о пожертвовании" },
          { en: "big heart", ru: "большое сердце", tip: "ловушка №4" },
          { en: "not always easy", ru: "не всегда легко" },
          { en: "strategies", ru: "стратегии" },
          { en: "centre on", ru: "сводиться к" },
          { en: "direct and polite", ru: "прямо и вежливо" },
          { en: "Volunteering", ru: "волонтёрство", tip: "лишнее №2" }
        ],
        fullText:
          "You're a great person with a big heart, but that doesn't mean you're willing and able to contribute to every charitable cause that comes your way. Of course, it's not always easy to decline donation requests, which can be frustrating. If you find yourself in a situation where you feel you can't simply turn down a request — but still have no plans to donate — there're several strategies to consider. All of them centre on being honest, direct and polite.",
        chunks: [
          {
            text:
              "You're a great person with a big heart, but that doesn't mean you're willing and able to contribute to every charitable cause that comes your way.",
            showText: true
          },
          {
            text:
              "Of course, it's not always easy to decline donation requests, which can be frustrating.",
            showText: true
          },
          {
            text:
              "If you find yourself in a situation where you feel you can't simply turn down a request — but still have no plans to donate — there're several strategies to consider.",
            showText: true
          },
          {
            text: "All of them centre on being honest, direct and polite.",
            showText: false
          }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 4,
        trapNums: [3],
        keyLineRu:
          "Утверждение 4 — финансовая поддержка организаций, спасающих животных.",
        evidencePromptRu:
          "<strong>Speaker A · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — financial support / save animals' lives → <strong>№4</strong>.",
        distractorPromptRu:
          "<strong>Speaker A · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — cats, dogs, bunnies (разнообразие) → ловушка <strong>№3</strong>, не №4.",
        promptRu:
          "<strong>Speaker A.</strong> Зелёным — love and support to animals. Красным — variety of pets (№3).",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "From cats and dogs to bunnies and iguanas, many of us count one or more of these animals among our very best friends",
            explainRu:
              "Ловушка <strong>№3</strong> (different charities): много видов животных ≠ главная мысль A."
          },
          { kind: "glue", html: ". They enrich our lives and complete our families — but even the creatures we don't share our homes with deserve our respect and care. " },
          {
            kind: "hit",
            sol: "e",
            text: "Providing financial support to organizations that work to save animals' lives and improve their living conditions",
            explainRu:
              "Прямой парафраз <strong>№4</strong>: charity to show love and support to animals."
          },
          { kind: "glue", html: " is a great way to " },
          {
            kind: "hit",
            sol: "e",
            text: "ensure our furry and feathered friends get necessary care",
            explainRu:
              "Забота о животных → <strong>№4</strong>."
          },
          { kind: "glue", html: "." }
        ]
      },
      {
        speaker: "B",
        keyNum: 6,
        trapNums: [4],
        keyLineRu:
          "Утверждение 6 — выбирайте надёжный фонд: trustworthy, reputable, local.",
        evidencePromptRu:
          "<strong>Speaker B · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — not trustworthy / reputable → <strong>№6</strong>.",
        distractorPromptRu:
          "<strong>Speaker B · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — animal rescue charity → ловушка <strong>№4</strong>.",
        promptRu:
          "<strong>Speaker B.</strong> Зелёным — reliable charity. Красным — donate to rescue (№4).",
        segments: [
          { kind: "glue", html: "If you're interested in supporting the animals you can't welcome into your home, " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "donating to an animal rescue charity is a great way to give back",
            explainRu:
              "Ловушка <strong>№4</strong>: про животных, но ключ B — надёжность фонда."
          },
          { kind: "glue", html: ". But it's important to remember that " },
          {
            kind: "hit",
            sol: "e",
            text: "not all charities are as trustworthy as others",
            explainRu:
              "Прямой парафраз <strong>№6</strong>: reliable charity organization."
          },
          { kind: "glue", html: " — and it's vital to know your donations are being used in the best possible way. That's why you'd better " },
          {
            kind: "hit",
            sol: "e",
            text: "monitor your local community to find the best charities",
            explainRu:
              "Выбор лучшего фонда → <strong>№6</strong>."
          },
          { kind: "glue", html: ". Surely, there're some " },
          {
            kind: "hit",
            sol: "e",
            text: "local reputable charities for animals to get you started",
            explainRu:
              "Reputable charities → <strong>№6</strong>."
          },
          { kind: "glue", html: "." }
        ]
      },
      {
        speaker: "C",
        keyNum: 7,
        trapNums: [3, 6],
        keyLineRu:
          "Утверждение 7 — нельзя помочь всем; фокус на одном виде / регионе эффективнее.",
        evidencePromptRu:
          "<strong>Speaker C · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — can't help every animal / focus on types → <strong>№7</strong>.",
        distractorPromptRu:
          "<strong>Speaker C · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — many organizations / best charity → ловушки <strong>№3</strong>, <strong>№6</strong>.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным — one kind more effective. Красным — many orgs (№3), best charity (№6).",
        segments: [
          { kind: "glue", html: "With " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "so many organizations out there to choose from",
            explainRu:
              "Ловушка <strong>№3</strong>: много организаций ≠ фокус на одном направлении."
          },
          { kind: "glue", html: ", how do you find the " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 6,
            text: "best animal rescue charity to support",
            explainRu:
              "Ловушка <strong>№6</strong> (reliable choice): «лучший» есть, но ключ C — эффективность фокуса."
          },
          { kind: "glue", html: "? First, you should start by narrowing down your goals. Then, keep in mind that " },
          {
            kind: "hit",
            sol: "e",
            text: "you can't help every animal on Earth",
            explainRu:
              "Нельзя спасти всех → <strong>№7</strong> (focus on one kind)."
          },
          { kind: "glue", html: ". While many of us wish we could save every animal that needs our help, " },
          {
            kind: "hit",
            sol: "e",
            text: "most charity organizations focus on certain types of animals or different geographic areas",
            explainRu:
              "Фокус на одном виде/регионе → <strong>№7</strong>."
          },
          { kind: "glue", html: " to accomplish the most with the limited resources they have available." }
        ]
      },
      {
        speaker: "D",
        keyNum: 3,
        trapNums: [7],
        keyLineRu:
          "Утверждение 3 — разные типы фондов под разные интересы и желания.",
        evidencePromptRu:
          "<strong>Speaker D · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — many types / satisfy all needs → <strong>№3</strong>.",
        distractorPromptRu:
          "<strong>Speaker D · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — prefer to focus on dogs, cats → ловушка <strong>№7</strong>.",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным — different charities for wishes. Красным — focus on one kind (№7).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "many types of animal rescue nonprofit organizations to satisfy all needs",
            explainRu:
              "Прямой парафраз <strong>№3</strong>: charities different to meet wishes."
          },
          { kind: "glue", html: ". If you're a fan of wildlife, maybe endangered animal charities appeal to you. If you " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 7,
            text: "prefer to focus on dogs, cats and other furry pals close to home",
            explainRu:
              "Ловушка <strong>№7</strong>: «focus» звучит как №7, но D про разнообразие выбора."
          },
          { kind: "glue", html: ", plenty of local animal charities would love your help. These days, there're even animal welfare charities dedicated to helping specific breeds of dogs and cats. Surely, " },
          {
            kind: "hit",
            sol: "e",
            text: "all types of charities would welcome your donation",
            explainRu:
              "Много типов на любой вкус → <strong>№3</strong>."
          },
          { kind: "glue", html: "." }
        ]
      },
      {
        speaker: "E",
        keyNum: 5,
        trapNums: [3],
        keyLineRu:
          "Утверждение 5 — пожертвования полезны компании: имидж, внимание общественности.",
        evidencePromptRu:
          "<strong>Speaker E · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — company / image / public notice → <strong>№5</strong>.",
        distractorPromptRu:
          "<strong>Speaker E · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — better your community → ловушка <strong>№3</strong> (разные нужды), не №5.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным — beneficial for business. Красным — community (№3).",
        segments: [
          { kind: "glue", html: "I can name many reasons why " },
          {
            kind: "hit",
            sol: "e",
            text: "your company should make charitable donations",
            explainRu:
              "Компания и пожертвования → <strong>№5</strong>."
          },
          { kind: "glue", html: ". Donating to charities can help change " },
          {
            kind: "hit",
            sol: "e",
            text: "your company's image and work culture",
            explainRu:
              "Выгода для бизнеса → <strong>№5</strong>."
          },
          { kind: "glue", html: ". It can also have a dramatic impact on others. Charitable donations " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "help better your community",
            explainRu:
              "Ловушка <strong>№3</strong>: сообщество ≠ главная мысль E (бизнес)."
          },
          { kind: "glue", html: ", and " },
          {
            kind: "hit",
            sol: "e",
            text: "the public will notice if a company is making a real effort to improve its surroundings",
            explainRu:
              "Общественность и компания → <strong>№5</strong>."
          },
          { kind: "glue", html: ". Your company's donations can help improve schools or parks, giving children safe places to learn and play." }
        ]
      },
      {
        speaker: "F",
        keyNum: 1,
        trapNums: [4],
        keyLineRu:
          "Утверждение 1 — не обязан жертвовать на каждую благотворительную просьбу.",
        evidencePromptRu:
          "<strong>Speaker F · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — not every charitable cause / no plans to donate → <strong>№1</strong>.",
        distractorPromptRu:
          "<strong>Speaker F · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — big heart → ловушка <strong>№4</strong> (animals/charity).",
        promptRu:
          "<strong>Speaker F.</strong> Зелёным — no obligation. Красным — big heart (№4). №2 лишнее.",
        segments: [
          { kind: "glue", html: "You're " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "a great person with a big heart",
            explainRu:
              "Ловушка <strong>№4</strong>: «большое сердце» ≠ обязанность жертвовать везде."
          },
          { kind: "glue", html: ", but that doesn't mean you're willing and able to " },
          {
            kind: "hit",
            sol: "e",
            text: "contribute to every charitable cause that comes your way",
            explainRu:
              "Прямой парафраз <strong>№1</strong>: no obligation to every charity."
          },
          { kind: "glue", html: ". Of course, it's not always easy to decline donation requests, which can be frustrating. If you find yourself in a situation where you feel you can't simply turn down a request — but still have " },
          {
            kind: "hit",
            sol: "e",
            text: "no plans to donate",
            explainRu:
              "Нет обязанности жертвовать → <strong>№1</strong>."
          },
          { kind: "glue", html: " — there're several strategies to consider. All of them centre on being honest, direct and polite." }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
