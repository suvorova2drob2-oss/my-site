/**
 * ЕГЭ Listening Matching · Unit 2 · Hiking (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-hiking",
    unitOrder: 2,
    title: "Unit 2 · Hiking",
    examSection: "§1 · Задание 1",
    headerTitle: "Hiking",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/2/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%202%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть, пока слушаешь:</strong></p>" +
      "<ul>" +
      "<li><strong>Главная мысль</strong> — не слово <em>hiking</em>, а <em>зачем</em> / <em>о чём предупреждает</em> спикер.</li>" +
      "<li>ЕГЭ часто даёт <strong>перефраз</strong>: в аудио «stressful daily life», в буклете — «get rid of your daily pressure».</li>" +
      "<li>Ловушки: «семья / дети» (№4) — когда правильный ответ про <em>подготовку</em> (№5) или наоборот.</li>" +
      "<li>«Природа / мусор» — не путать №7 (мелочи вредят) с №6 (опасность на тропе).</li>" +
      "<li>После проверки — <strong>разбор в тексте</strong> и <strong>аудиосуфлирование</strong> по каждому спикеру.</li>" +
      "</ul>",
    statements: [
      {
        num: 1,
        text: "It's an affordable way to spend leisure time."
      },
      {
        num: 2,
        text: "It's good to get rid of your daily pressure."
      },
      {
        num: 3,
        text: "It can be a hobby or a professional sport."
      },
      {
        num: 4,
        text: "It's good to share love for nature with children."
      },
      {
        num: 5,
        text: "It takes some preparation to make it interesting."
      },
      {
        num: 6,
        text: "Safety can sometimes be a real problem."
      },
      {
        num: 7,
        text: "Even small things can do harm to nature."
      }
    ],
    extraStatementNum: 3,
    /** A→2, B→6, C→4, D→5, E→7, F→1; лишнее — 3 */
    key: [2, 6, 4, 5, 7, 1],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "relax from your stressful daily life", ru: "отдохнуть от стрессовой повседневности" },
      { en: "your stress level will drop significantly", ru: "уровень стресса заметно снизится" },
      { en: "your mind can have some rest", ru: "разум может отдохнуть" },
      { en: "it might be dangerous", ru: "это может быть опасно" },
      { en: "prevent you from falling down", ru: "предотвратить падение" },
      { en: "minimize the risks related to hiking", ru: "свести к минимуму риски похода" },
      { en: "quite a nice family activity", ru: "хорошее семейное занятие" },
      { en: "not too interested in nature anymore", ru: "уже не слишком интересуются природой" },
      { en: "keep young hikers interested", ru: "удерживать интерес маленьких туристов" },
      { en: "read some adventure books about hiking", ru: "прочитать приключенческие книги о походах" },
      { en: "even one piece of rubbish on the ground", ru: "даже один кусок мусора на земле" },
      { en: "incite other people to drop more", ru: "подталкивать других выбрасывать ещё" },
      { en: "those trails are even free", ru: "тропы даже бесплатные" },
      { en: "a rather cheap hobby", ru: "довольно дешёвое хобби" }
    ],
    tapPhrases: [
      { en: "relax from your stressful daily life", ru: "отдохнуть от стрессовой повседневности" },
      { en: "your stress level will drop significantly", ru: "уровень стресса заметно снизится" },
      { en: "your mind can have some rest", ru: "разум может отдохнуть" },
      { en: "it might be dangerous", ru: "это может быть опасно" },
      { en: "falling down many hundred feet", ru: "упасть с большой высоты" },
      { en: "minimize the risks related to hiking", ru: "свести к минимуму риски похода" },
      { en: "go on a hike with your family", ru: "отправиться в поход с семьёй" },
      { en: "excited and want to do this on a regular basis", ru: "в восторге и хотят ходить регулярно" },
      { en: "read some adventure books about hiking to get them excited", ru: "читать книги о походах, чтобы заинтересовать" },
      { en: "choose a picnic spot", ru: "выбрать место для пикника" },
      { en: "even one piece of rubbish on the ground may incite other people to drop more", ru: "один мусор подталкивает других" },
      { en: "those trails are even free", ru: "тропы даже бесплатные" },
      { en: "a rather cheap hobby", ru: "довольно дешёвое хобби" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          { en: "An important advantage of hiking", ru: "важное преимущество походов" },
          {
            en: "relax from your stressful daily life",
            ru: "отдохнуть от стрессовой повседневности",
            tip: "парафраз №2 · get rid of daily pressure"
          },
          { en: "quiet atmosphere in the middle of nature", ru: "тихая атмосфера посреди природы", tip: "ловушка к №4, не к №2" },
          {
            en: "your stress level will drop significantly",
            ru: "уровень стресса заметно снизится",
            tip: "парафраз №2"
          },
          { en: "turn off your smartphone", ru: "выключить смартфон" },
          { en: "disconnect from your surroundings", ru: "отключиться от окружения" },
          { en: "Slow down and enjoy nature", ru: "замедлиться и насладиться природой" },
          {
            en: "your mind can have some rest",
            ru: "разум может отдохнуть",
            tip: "парафраз №2 · daily pressure"
          },
          { en: "get ready for the next important tasks", ru: "подготовиться к следующим задачам" }
        ],
        fullText:
          "An important advantage of hiking is that it allows you to relax from your stressful daily life. You will enjoy the quiet atmosphere in the middle of nature, and your stress level will drop significantly. You could even turn off your smartphone and disconnect from your surroundings for a while. Slow down and enjoy nature. In this way, your mind can have some rest and get ready for the next important tasks that will come sooner or later.",
        chunks: [
          {
            text:
              "An important advantage of hiking is that it allows you to relax from your stressful daily life.",
            showText: true
          },
          {
            text:
              "You will enjoy the quiet atmosphere in the middle of nature, and your stress level will drop significantly.",
            showText: true
          },
          {
            text:
              "You could even turn off your smartphone and disconnect from your surroundings for a while.",
            showText: true
          },
          {
            text: "Slow down and enjoy nature.",
            showText: false
          },
          {
            text:
              "In this way, your mind can have some rest and get ready for the next important tasks that will come sooner or later.",
            showText: true
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "One disadvantage of hiking", ru: "один недостаток походов" },
          { en: "it might be dangerous", ru: "это может быть опасно", tip: "парафраз №6 · Safety" },
          { en: "walk on narrow paths", ru: "идти по узким тропам" },
          {
            en: "no measures that prevent you from falling down many hundred feet",
            ru: "нет мер, которые не дадут упасть с большой высоты",
            tip: "парафраз №6"
          },
          { en: "going hiking in the mountains", ru: "ходить в горы" },
          { en: "it was rather freaky", ru: "было довольно жутко" },
          { en: "before you go on a hike", ru: "перед походом", tip: "ловушка к №5 · preparation" },
          { en: "make sure that it is not dangerous", ru: "убедиться, что не опасно" },
          {
            en: "minimize the risks related to hiking",
            ru: "свести к минимуму риски похода",
            tip: "парафраз №6 · safety problem"
          }
        ],
        fullText:
          "One disadvantage of hiking is that it might be dangerous. Depending on the hike you choose, you may have to walk on narrow paths and sometimes, there will be no measures that prevent you from falling down many hundred feet. I remember going hiking in the mountains as a student with a big group, and it was exactly like that. I admit it was rather freaky! Thus, before you go on a hike, make sure that it is not dangerous in order to minimize the risks related to hiking.",
        chunks: [
          {
            text: "One disadvantage of hiking is that it might be dangerous.",
            showText: true
          },
          {
            text:
              "Depending on the hike you choose, you may have to walk on narrow paths and sometimes, there will be no measures that prevent you from falling down many hundred feet.",
            showText: true
          },
          {
            text:
              "I remember going hiking in the mountains as a student with a big group, and it was exactly like that. I admit it was rather freaky!",
            showText: true
          },
          {
            text:
              "Thus, before you go on a hike, make sure that it is not dangerous in order to minimize the risks related to hiking.",
            showText: false
          }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          { en: "If you have kids", ru: "если у вас есть дети" },
          {
            en: "quite a nice family activity for you",
            ru: "хорошее семейное занятие",
            tip: "парафраз №4 · share love for nature with children"
          },
          {
            en: "not too interested in nature anymore",
            ru: "уже не слишком интересуются природой",
            tip: "контекст №4"
          },
          {
            en: "once they go on a hike, they are often quite excited",
            ru: "после похода часто в восторге",
            tip: "парафраз №4"
          },
          { en: "want to do this on a regular basis", ru: "хотят ходить регулярно" },
          {
            en: "go on a hike with your family",
            ru: "отправиться в поход с семьёй",
            tip: "парафраз №4"
          },
          { en: "favourite weekend activities", ru: "любимые выходные", tip: "ловушка к №3 · hobby" },
          { en: "frying marshmallows on a campfire is a lot of fun", ru: "жарить зефир на костре — весело", tip: "ловушка к №1 · leisure" }
        ],
        fullText:
          "If you have kids, hiking might also be quite a nice family activity for you. Many kids in our today's society are not too interested in nature anymore. However, once they go on a hike, they are often quite excited and want to do this on a regular basis. Therefore, you should give it a try and go on a hike with your family. Who knows, maybe it will become one of your favourite weekend activities in the future. After all, frying marshmallows on a campfire is a lot of fun.",
        chunks: [
          {
            text:
              "If you have kids, hiking might also be quite a nice family activity for you.",
            showText: true
          },
          {
            text:
              "Many kids in our today's society are not too interested in nature anymore.",
            showText: true
          },
          {
            text:
              "However, once they go on a hike, they are often quite excited and want to do this on a regular basis.",
            showText: true
          },
          {
            text:
              "Therefore, you should give it a try and go on a hike with your family.",
            showText: true
          },
          {
            text:
              "Who knows, maybe it will become one of your favourite weekend activities in the future. After all, frying marshmallows on a campfire is a lot of fun.",
            showText: false
          }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          { en: "hiking can be a nice family activity", ru: "поход может быть семейным", tip: "ловушка к №4" },
          { en: "not suitable for quite young children", ru: "не подходит для совсем маленьких" },
          { en: "simply be too exhausting", ru: "может быть слишком утомительным" },
          { en: "Going for a short walk may be a better alternative", ru: "короткая прогулка — лучшая альтернатива" },
          {
            en: "keep young hikers interested in the journey",
            ru: "удерживать интерес маленьких туристов",
            tip: "парафраз №5 · preparation"
          },
          { en: "on and off the trail", ru: "на тропе и вне её" },
          { en: "Bring their favourite nibbles", ru: "взять любимые закуски", tip: "парафраз №5" },
          { en: "ask them to choose a picnic spot", ru: "попросить выбрать место для пикника", tip: "парафраз №5" },
          {
            en: "read some adventure books about hiking to get them excited",
            ru: "прочитать приключенческие книги о походах",
            tip: "парафраз №5 · make it interesting"
          }
        ],
        fullText:
          "Even though hiking can be a nice family activity, it might not be suitable for quite young children since it may simply be too exhausting. Going for a short walk may be a better alternative if you have small kids, instead of going for an intensive hike. If you still choose to go, think of ways to keep young hikers interested in the journey, on and off the trail. Bring their favourite nibbles and ask them to choose a picnic spot. Before you go, read some adventure books about hiking to get them excited.",
        chunks: [
          {
            text:
              "Even though hiking can be a nice family activity, it might not be suitable for quite young children since it may simply be too exhausting.",
            showText: true
          },
          {
            text:
              "Going for a short walk may be a better alternative if you have small kids, instead of going for an intensive hike.",
            showText: true
          },
          {
            text:
              "If you still choose to go, think of ways to keep young hikers interested in the journey, on and off the trail.",
            showText: true
          },
          {
            text:
              "Bring their favourite nibbles and ask them to choose a picnic spot.",
            showText: true
          },
          {
            text:
              "Before you go, read some adventure books about hiking to get them excited.",
            showText: false
          }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          { en: "not to care about our environment at all", ru: "совсем не заботиться об окружающей среде" },
          { en: "dispose of all sorts of trash", ru: "выбрасывать всякий мусор" },
          { en: "forests on hiking trails actually even look like garbage dumps", ru: "леса на тропах похожи на свалки" },
          {
            en: "It starts with a tissue that might have fallen out of a hiker's pocket",
            ru: "начинается с салфетки из кармана",
            tip: "парафраз №7 · small things"
          },
          { en: "attracts a single trail mix packet", ru: "притягивает пакетик ореховой смеси" },
          { en: "an empty water bottle, a protein bar wrapper, and an apple core", ru: "бутылка, обёртка, сердцевина яблока" },
          {
            en: "even one piece of rubbish on the ground may incite other people to drop more",
            ru: "один мусор подталкивает других выбрасывать ещё",
            tip: "парафраз №7 · do harm to nature"
          },
          { en: "The bottom line is that", ru: "суть в том, что" }
        ],
        fullText:
          "Many people seem not to care about our environment at all and just dispose of all sorts of trash in the nearby forests. Some forests on hiking trails actually even look like garbage dumps. It starts with a tissue that might have fallen out of a hiker's pocket. That attracts a single trail mix packet. Before you know it, that's been joined by an empty water bottle, a protein bar wrapper, and an apple core. The bottom line is that even one piece of rubbish on the ground may incite other people to drop more.",
        chunks: [
          {
            text:
              "Many people seem not to care about our environment at all and just dispose of all sorts of trash in the nearby forests.",
            showText: true
          },
          {
            text:
              "Some forests on hiking trails actually even look like garbage dumps.",
            showText: true
          },
          {
            text:
              "It starts with a tissue that might have fallen out of a hiker's pocket. That attracts a single trail mix packet.",
            showText: true
          },
          {
            text:
              "Before you know it, that's been joined by an empty water bottle, a protein bar wrapper, and an apple core.",
            showText: false
          },
          {
            text:
              "The bottom line is that even one piece of rubbish on the ground may incite other people to drop more.",
            showText: true
          }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          { en: "quite cheap to use hiking trails", ru: "довольно дёшево пользоваться тропами", tip: "парафраз №1 · affordable" },
          {
            en: "those trails are even free",
            ru: "тропы даже бесплатные",
            tip: "парафраз №1"
          },
          { en: "you do not have to pay any money", ru: "не нужно платить деньги", tip: "парафраз №1" },
          {
            en: "a rather cheap hobby",
            ru: "довольно дешёвое хобби",
            tip: "парафраз №1 · affordable leisure"
          },
          { en: "suitable for the majority of people", ru: "подходит большинству людей" },
          { en: "hiking shoes, water, sunscreen, and snacks", ru: "обувь, вода, крем, перекус", tip: "ловушка к №5 · preparation" },
          { en: "I'm good to go", ru: "можно идти" },
          { en: "don't get into hi-tech expensive gear", ru: "не покупаю дорогую hi-tech экипировку", tip: "парафраз №1" },
          { en: "unless I'm camping or staying overnight", ru: "если только не ночёвка в палатке" }
        ],
        fullText:
          "It is often quite cheap to use hiking trails. In many cases, those trails are even free and you do not have to pay any money to be able to use them. So, hiking can be a rather cheap hobby and will therefore be suitable for the majority of people. I feel I just need a little money, hiking shoes, water, sunscreen, and snacks — and I'm good to go. I don't get into hi-tech expensive gear or feel I really need too much, unless I'm camping or staying overnight.",
        chunks: [
          {
            text:
              "It is often quite cheap to use hiking trails. In many cases, those trails are even free and you do not have to pay any money to be able to use them.",
            showText: true
          },
          {
            text:
              "So, hiking can be a rather cheap hobby and will therefore be suitable for the majority of people.",
            showText: true
          },
          {
            text:
              "I feel I just need a little money, hiking shoes, water, sunscreen, and snacks — and I'm good to go.",
            showText: true
          },
          {
            text:
              "I don't get into hi-tech expensive gear or feel I really need too much, unless I'm camping or staying overnight.",
            showText: false
          }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 2,
        trapNums: [4],
        keyLineRu:
          "Утверждение 2 — хорошо избавиться от ежедневного давления (daily pressure).",
        evidencePromptRu:
          "<strong>Speaker A · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — стресс, отдых разума → <strong>№2</strong> (get rid of daily pressure).",
        distractorPromptRu:
          "<strong>Speaker A · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «тихая атмосфера / насладиться природой» → ловушка к <strong>№4</strong>, не к №2.",
        promptRu:
          "<strong>Speaker A.</strong> Зелёным — stress / mind at rest. Красным — nature atmosphere (ловушка к №4).",
        segments: [
          {
            kind: "glue",
            html: "An important advantage of hiking is that it allows you to "
          },
          {
            kind: "hit",
            sol: "e",
            text: "relax from your stressful daily life",
            explainRu:
              "Парафраз <strong>№2</strong>: <em>stressful daily life</em> → daily pressure."
          },
          {
            kind: "glue",
            html: ". You will enjoy the "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "quiet atmosphere in the middle of nature",
            explainRu:
              "Ловушка к <strong>№4</strong> (love for nature with children): природа есть, но главная мысль — <em>стресс</em> (№2)."
          },
          {
            kind: "glue",
            html: ", and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "your stress level will drop significantly",
            explainRu:
              "Парафраз <strong>№2</strong>: снижение стресса = get rid of pressure."
          },
          {
            kind: "glue",
            html:
              ". You could even turn off your smartphone and disconnect from your surroundings for a while. Slow down and enjoy nature. In this way, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "your mind can have some rest",
            explainRu:
              "Парафраз <strong>№2</strong>: отдых разума после давления будней."
          },
          {
            kind: "glue",
            html: " and get ready for the next important tasks that will come sooner or later."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 6,
        trapNums: [5],
        keyLineRu:
          "Утверждение 6 — безопасность иногда становится реальной проблемой.",
        evidencePromptRu:
          "<strong>Speaker B · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — опасность, падение, риски → <strong>№6</strong> (Safety).",
        distractorPromptRu:
          "<strong>Speaker B · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «перед походом убедись…» → ловушка к <strong>№5</strong> (preparation), не №6.",
        promptRu:
          "<strong>Speaker B.</strong> Зелёным — dangerous / falling. Красным — before you go (preparation, не safety problem).",
        segments: [
          {
            kind: "glue",
            html: "One disadvantage of hiking is that "
          },
          {
            kind: "hit",
            sol: "e",
            text: "it might be dangerous",
            explainRu:
              "Прямая опора <strong>№6</strong>: <em>Safety can be a real problem</em>."
          },
          {
            kind: "glue",
            html:
              ". Depending on the hike you choose, you may have to walk on narrow paths and sometimes, there will be "
          },
          {
            kind: "hit",
            sol: "e",
            text: "no measures that prevent you from falling down many hundred feet",
            explainRu:
              "Конкретная опасность — падение с высоты → <strong>№6</strong>."
          },
          {
            kind: "glue",
            html:
              ". I remember going hiking in the mountains as a student with a big group, and it was exactly like that. I admit it was rather freaky! Thus, "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 5,
            text: "before you go on a hike, make sure that it is not dangerous",
            explainRu:
              "Ловушка к <strong>№5</strong> (preparation): «убедись заранее» — не то же самое, что «safety is a problem» (№6)."
          },
          {
            kind: "glue",
            html: " in order to "
          },
          {
            kind: "hit",
            sol: "e",
            text: "minimize the risks related to hiking",
            explainRu:
              "Парафраз <strong>№6</strong>: риски похода — тема безопасности."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 4,
        trapNums: [1, 3],
        keyLineRu:
          "Утверждение 4 — хорошо делиться любовью к природе с детьми.",
        evidencePromptRu:
          "<strong>Speaker C · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — дети, семья, интерес к природе → <strong>№4</strong>.",
        distractorPromptRu:
          "<strong>Speaker C · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «любимое хобби / весело у костра» → <strong>№3</strong> или <strong>№1</strong>, не №4.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным — kids + nature. Красным — hobby / fun leisure.",
        segments: [
          {
            kind: "glue",
            html: "If you have kids, hiking might also be "
          },
          {
            kind: "hit",
            sol: "e",
            text: "quite a nice family activity for you",
            explainRu:
              "Семейный поход с детьми → <strong>№4</strong> (share love for nature)."
          },
          {
            kind: "glue",
            html: ". Many kids in our today's society are "
          },
          {
            kind: "hit",
            sol: "e",
            text: "not too interested in nature anymore",
            explainRu:
              "Контекст: вернуть детям интерес к <strong>природе</strong> (№4)."
          },
          {
            kind: "glue",
            html: ". However, once they go on a hike, they are often "
          },
          {
            kind: "hit",
            sol: "e",
            text: "quite excited and want to do this on a regular basis",
            explainRu:
              "Дети увлекаются природой через поход → <strong>№4</strong>."
          },
          {
            kind: "glue",
            html: ". Therefore, you should give it a try and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "go on a hike with your family",
            explainRu:
              "Парафраз <strong>№4</strong>: делиться любовью к природе с детьми."
          },
          {
            kind: "glue",
            html: ". Who knows, maybe it will become one of your "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "favourite weekend activities",
            explainRu:
              "Ловушка к <strong>№3</strong> (hobby): «любимое занятие» — не главная мысль про детей и природу."
          },
          {
            kind: "glue",
            html: " in the future. After all, "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 1,
            text: "frying marshmallows on a campfire is a lot of fun",
            explainRu:
              "Ловушка к <strong>№1</strong> (affordable leisure): «весело» — про досуг, не про детей + nature."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 5,
        trapNums: [4],
        keyLineRu:
          "Утверждение 5 — нужна подготовка, чтобы поход был интересным.",
        evidencePromptRu:
          "<strong>Speaker D · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — закуски, книги, удержать интерес → <strong>№5</strong> (preparation).",
        distractorPromptRu:
          "<strong>Speaker D · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «семейное занятие / маленькие дети» → <strong>№4</strong>, не №5.",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным — nibbles, books, keep interested. Красным — family activity (№4).",
        segments: [
          {
            kind: "glue",
            html: "Even though "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "hiking can be a nice family activity",
            explainRu:
              "Ловушка к <strong>№4</strong>: «family» есть, но спикер про <em>подготовку</em> для маленьких (№5)."
          },
          {
            kind: "glue",
            html:
              ", it might not be suitable for quite young children since it may simply be too exhausting. Going for a short walk may be a better alternative if you have small kids, instead of going for an intensive hike. If you still choose to go, think of ways to "
          },
          {
            kind: "hit",
            sol: "e",
            text: "keep young hikers interested in the journey, on and off the trail",
            explainRu:
              "Подготовка, чтобы поход был <strong>interesting</strong> → №5."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "Bring their favourite nibbles and ask them to choose a picnic spot",
            explainRu:
              "Конкретная <strong>подготовка</strong> → №5."
          },
          {
            kind: "glue",
            html: ". Before you go, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "read some adventure books about hiking to get them excited",
            explainRu:
              "Парафраз <strong>№5</strong>: preparation to make it interesting."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 7,
        trapNums: [6],
        keyLineRu:
          "Утверждение 7 — даже мелочи могут навредить природе.",
        evidencePromptRu:
          "<strong>Speaker E · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — один мусор → цепная реакция → <strong>№7</strong>.",
        distractorPromptRu:
          "<strong>Speaker E · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — общая «свалка / мусор» без акцента на <em>small things</em> → не путать с №6.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным — one piece of rubbish. Красным — общий trash без «small things».",
        segments: [
          {
            kind: "glue",
            html:
              "Many people seem not to care about our environment at all and just dispose of all sorts of trash in the nearby forests. Some forests on hiking trails actually even look like "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 6,
            text: "garbage dumps",
            explainRu:
              "Общая картина загрязнения — не акцент <strong>№7</strong> (even <em>small</em> things)."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "It starts with a tissue that might have fallen out of a hiker's pocket",
            explainRu:
              "Начинается с <strong>мелочи</strong> → №7."
          },
          {
            kind: "glue",
            html: ". That attracts a single trail mix packet. Before you know it, that's been joined by an empty water bottle, a protein bar wrapper, and an apple core. The bottom line is that "
          },
          {
            kind: "hit",
            sol: "e",
            text: "even one piece of rubbish on the ground may incite other people to drop more",
            explainRu:
              "Прямой парафраз <strong>№7</strong>: even small things do harm."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 1,
        trapNums: [5],
        keyLineRu:
          "Утверждение 1 — доступный способ провести досуг.",
        evidencePromptRu:
          "<strong>Speaker F · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — cheap / free / little money → <strong>№1</strong> (affordable leisure).",
        distractorPromptRu:
          "<strong>Speaker F · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — список вещей (обувь, вода…) → ловушка к <strong>№5</strong> (preparation).",
        promptRu:
          "<strong>Speaker F.</strong> Зелёным — cheap / free. Красным — gear list (preparation).",
        segments: [
          {
            kind: "glue",
            html: "It is often "
          },
          {
            kind: "hit",
            sol: "e",
            text: "quite cheap to use hiking trails",
            explainRu:
              "Парафраз <strong>№1</strong>: <em>affordable</em> leisure."
          },
          {
            kind: "glue",
            html: ". In many cases, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "those trails are even free",
            explainRu:
              "Бесплатные тропы → <strong>№1</strong> (affordable)."
          },
          {
            kind: "glue",
            html: " and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "you do not have to pay any money to be able to use them",
            explainRu:
              "Не нужно платить → <strong>№1</strong>."
          },
          {
            kind: "glue",
            html: ". So, hiking can be "
          },
          {
            kind: "hit",
            sol: "e",
            text: "a rather cheap hobby",
            explainRu:
              "Дешёвое хобби → <strong>№1</strong> (affordable way to spend leisure time)."
          },
          {
            kind: "glue",
            html:
              " and will therefore be suitable for the majority of people. I feel I just need a little money, "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 5,
            text: "hiking shoes, water, sunscreen, and snacks",
            explainRu:
              "Ловушка к <strong>№5</strong> (preparation): список вещей — не главная мысль про <em>affordable</em> (№1)."
          },
          {
            kind: "glue",
            html: " — and I'm good to go. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "I don't get into hi-tech expensive gear",
            explainRu:
              "Не нужна дорогая экипировка → опора <strong>№1</strong>."
          },
          {
            kind: "glue",
            html: " or feel I really need too much, unless I'm camping or staying overnight."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
