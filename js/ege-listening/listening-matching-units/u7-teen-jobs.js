/**
 * ЕГЭ Listening Matching · Unit 7 · Teen jobs (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-teen-jobs",
    unitOrder: 7,
    title: "Unit 7 · Teen jobs",
    examSection: "§1 · Задание 1",
    headerTitle: "Teenagers and jobs",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/7/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%207%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A-F</strong> и утверждениями <strong>1-7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> - school + job = слишком большая нагрузка, не просто «родители плохие».</li>" +
      "<li><strong>B</strong> - взрослую жизнь можно встретить готовым и без работы в школе: volunteer activities + college.</li>" +
      "<li><strong>C</strong> - хотел работать, но родители отговорили, пока могли помогать деньгами.</li>" +
      "<li><strong>E</strong> - contrast: morning hairdresser's useful, night burger van hard. Важны часы работы.</li>" +
      "<li><strong>6</strong> лишнее: никто не говорит как главную мысль, что надо обсуждать с родителями необходимость работы.</li>" +
      "</ul>",
    statements: [
      { num: 1, text: "I really wanted to work but my parents talked me out of it." },
      { num: 2, text: "Having a weekend job is useful in several ways." },
      { num: 3, text: "Combining work and studies is too much for teenagers." },
      { num: 4, text: "Working hours influence your attitude to a job." },
      { num: 5, text: "It's parents' duty to provide for their children's needs." },
      { num: 6, text: "Teenagers should discuss with parents if they need a job." },
      { num: 7, text: "You can get ready for adult life even without work." }
    ],
    extraStatementNum: 6,
    /** A→3, B→7, C→1, D→2, E→4, F→5; лишнее — 6 */
    key: [3, 7, 1, 2, 4, 5],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "forcing teenagers to get a job", ru: "заставлять подростков устраиваться на работу" },
      { en: "right after school", ru: "сразу после школы" },
      { en: "school always came first", ru: "школа всегда была на первом месте" },
      { en: "get ready for college", ru: "готовиться к колледжу / вузу" },
      { en: "super eager to get a job", ru: "очень хотел устроиться на работу" },
      { en: "talked me out of it", ru: "отговорили меня от этого" },
      { en: "weekend job in high school", ru: "работа по выходным в старшей школе" },
      { en: "some financial freedom", ru: "немного финансовой свободы" },
      { en: "worked at a hairdresser's", ru: "работала в парикмахерской" },
      { en: "night job at the burger van", ru: "ночная работа в фургончике с бургерами" },
      { en: "having my own money", ru: "иметь собственные деньги" },
      { en: "financial support is part of their responsibility", ru: "финансовая поддержка - часть ответственности родителей" }
    ],
    tapPhrases: [
      { en: "Combining work and studies", ru: "совмещать работу и учёбу" },
      { en: "the struggles of school", ru: "трудности школы" },
      { en: "school always came first", ru: "школа всегда была важнее" },
      { en: "prepared for adulthood just fine", ru: "нормально подготовлен к взрослой жизни" },
      { en: "talked me out of it", ru: "отговорил меня" },
      { en: "until you retire", ru: "пока не уйдёшь на пенсию" },
      { en: "weekend job", ru: "работа по выходным" },
      { en: "financial freedom", ru: "финансовая свобода" },
      { en: "the first experience", ru: "первый опыт" },
      { en: "miss out on much", ru: "многое пропустить" },
      { en: "pocket money", ru: "карманные деньги" },
      { en: "Financial support", ru: "финансовая поддержка" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          { en: "forcing teenagers to get a job", ru: "заставлять подростков устраиваться на работу", tip: "№3" },
          { en: "is just terrible", ru: "это просто ужасно" },
          { en: "High school hours", ru: "часы занятий в старшей школе" },
          { en: "mostly from 6 to 3", ru: "обычно с 6 до 3" },
          { en: "from 7 to 4", ru: "с 7 до 4" },
          { en: "somewhere in that range", ru: "примерно в этом диапазоне" },
          { en: "varies throughout the world", ru: "различается по всему миру" },
          { en: "go to work for 5-10 hours", ru: "идти работать на 5-10 часов" },
          { en: "right after school", ru: "сразу после школы", tip: "№3" },
          { en: "poor parenting", ru: "плохой подход к воспитанию" },
          { en: "the struggles of school", ru: "школьные трудности" },
          { en: "the weight that comes with it", ru: "нагрузка, которая с этим связана" },
          { en: "whether it is the workload", ru: "будь то учебная нагрузка" },
          { en: "the tests", ru: "контрольные и экзамены" },
          { en: "depression from it all", ru: "подавленность от всего этого" },
          { en: "already enough", ru: "уже достаточно", tip: "№3" },
          { en: "Combining work and studies", ru: "совмещать работу и учёбу", tip: "парафраз №3" },
          { en: "too much for teenagers", ru: "слишком много для подростков", tip: "№3" },
          { en: "trying to tell your child", ru: "пытаться сказать ребёнку" },
          { en: "parents are forcing", ru: "родители заставляют" }
        ],
        fullText:
          "I think that the situation when parents are forcing teenagers to get a job is just terrible. High school hours are mostly from 6 to 3, or from 7 to 4, or somewhere in that range — it varies throughout the world. And you're trying to tell your child to go to work for 5-10 hours right after school? That is poor parenting. The struggles of school and the weight that comes with it — whether it is the workload, the tests, or depression from it all — are already enough.",
        chunks: [
          {
            text:
              "I think that the situation when parents are forcing teenagers to get a job is just terrible.",
            showText: true
          },
          {
            text:
              "High school hours are mostly from 6 to 3, or from 7 to 4, or somewhere in that range — it varies throughout the world.",
            showText: true
          },
          {
            text: "And you're trying to tell your child to go to work for 5-10 hours right after school?",
            showText: true
          },
          {
            text:
              "That is poor parenting. The struggles of school and the weight that comes with it — whether it is the workload, the tests, or depression from it all — are already enough.",
            showText: false
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "My parents had a rule", ru: "у моих родителей было правило" },
          { en: "school always came first", ru: "школа всегда была на первом месте" },
          { en: "No job", ru: "никакой работы" },
          { en: "because school was my job", ru: "потому что школа и была моей работой" },
          { en: "In the summers", ru: "летом" },
          { en: "had to do something though", ru: "нужно было чем-то заниматься" },
          { en: "some type of volunteer activities", ru: "какая-то волонтёрская деятельность" },
          { en: "didn't have a job until", ru: "не имел работы до" },
          { en: "third year university summer", ru: "лета после третьего курса университета" },
          { en: "felt prepared for adulthood just fine", ru: "чувствовал себя вполне готовым к взрослой жизни", tip: "№7" },
          { en: "parents do it to prepare for adulthood", ru: "родители делают это ради подготовки к взрослой жизни" },
          { en: "let your children enjoy", ru: "дать детям насладиться" },
          { en: "their final years of childhood", ru: "последними годами детства" },
          { en: "get ready for college", ru: "готовиться к колледжу / вузу" },
          { en: "if they're going", ru: "если они туда поступают" },
          { en: "no good applying extra stress", ru: "не стоит добавлять лишний стресс" },
          { en: "extra stress onto them", ru: "дополнительный стресс на них" },
          { en: "adult life even without work", ru: "взрослая жизнь даже без работы", tip: "парафраз №7" },
          { en: "school came first", ru: "школа была важнее" },
          { en: "volunteer activities", ru: "волонтёрские занятия" }
        ],
        fullText:
          "My parents had a rule that school always came first. No job — because school was my job. In the summers I had to do something though. It was either more school, or some type of volunteer activities. I didn't have a job until my third year university summer, and felt prepared for adulthood just fine. I know parents do it to prepare for adulthood, but let your children enjoy their final years of childhood while they get ready for college (if they're going). It's no good applying extra stress onto them.",
        chunks: [
          {
            text: "My parents had a rule that school always came first. No job — because school was my job.",
            showText: true
          },
          {
            text:
              "In the summers I had to do something though. It was either more school, or some type of volunteer activities.",
            showText: true
          },
          {
            text:
              "I didn't have a job until my third year university summer, and felt prepared for adulthood just fine.",
            showText: true
          },
          {
            text:
              "I know parents do it to prepare for adulthood, but let your children enjoy their final years of childhood while they get ready for college (if they're going).",
            showText: false
          },
          { text: "It's no good applying extra stress onto them.", showText: false }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          { en: "When I was in high school", ru: "когда я учился в старшей школе" },
          { en: "needed money for college", ru: "нужны были деньги на колледж" },
          { en: "we didn't have a lot of money", ru: "денег у нас было немного" },
          { en: "I was super eager to get a job", ru: "я очень хотел устроиться на работу", tip: "№1" },
          { en: "my dad actually said to me", ru: "папа тогда сказал мне" },
          { en: "as long as you can before getting a job", ru: "как можно дольше до первой работы" },
          { en: "Once you start working", ru: "когда начинаешь работать" },
          { en: "you don't stop until you retire", ru: "не останавливаешься до пенсии" },
          { en: "All my friends started getting jobs", ru: "все мои друзья начали работать" },
          { en: "at 14 or 16", ru: "в 14 или 16 лет" },
          { en: "first real job", ru: "первая настоящая работа" },
          { en: "I also worked for my mom's store", ru: "я также работал в магазине мамы" },
          { en: "my dad's business", ru: "бизнес отца" },
          { en: "summer jobs", ru: "летние подработки" },
          { en: "talked me out of it", ru: "отговорил меня от этого", tip: "парафраз №1" },
          { en: "wanted to work", ru: "хотел работать", tip: "№1" },
          { en: "could afford telling him to wait", ru: "мог позволить себе сказать ему подождать" },
          { en: "I can't thank him enough", ru: "я ему бесконечно благодарен" },
          { en: "telling me it was okay", ru: "за то, что сказал: всё нормально" },
          { en: "before getting a job", ru: "до того как устроиться на работу" }
        ],
        fullText:
          "When I was in high school, I needed money for college and we didn't have a lot of money to go around. I was super eager to get a job, but my dad actually said to me, \"Wait as long as you can before getting a job. Once you start working, you don't stop until you retire.\" All my friends started getting jobs at 14 or 16. I was 18 when I got my first real job (granted, I also worked for my mom's store and my dad's business and had summer jobs). I can't thank him enough for telling me it was okay.",
        chunks: [
          {
            text:
              "When I was in high school, I needed money for college and we didn't have a lot of money to go around.",
            showText: true
          },
          {
            text:
              "I was super eager to get a job, but my dad actually said to me, \"Wait as long as you can before getting a job.",
            showText: true
          },
          {
            text:
              "Once you start working, you don't stop until you retire.\" All my friends started getting jobs at 14 or 16.",
            showText: true
          },
          {
            text:
              "I was 18 when I got my first real job (granted, I also worked for my mom's store and my dad's business and had summer jobs).",
            showText: true
          },
          { text: "I can't thank him enough for telling me it was okay.", showText: false }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          { en: "making your children work", ru: "заставлять детей работать" },
          { en: "from the time they get out of class", ru: "с момента, когда заканчиваются уроки" },
          { en: "until the end of the day", ru: "до конца дня" },
          { en: "a little too much", ru: "это уже перебор" },
          { en: "no problem with a weekend job", ru: "ничего плохого в работе по выходным", tip: "№2" },
          { en: "give some good experience", ru: "даёт хороший опыт", tip: "№2" },
          { en: "in the work world", ru: "в мире работы" },
          { en: "give kids some financial freedom", ru: "дать детям немного финансовой свободы", tip: "№2" },
          { en: "weekend job in high school", ru: "подработка по выходным в старшей школе" },
          { en: "amazing not to have to ask", ru: "здорово было не просить" },
          { en: "to use her card", ru: "воспользоваться её картой" },
          { en: "whenever my friends wanted", ru: "когда друзья хотели" },
          { en: "get something to eat", ru: "что-нибудь поесть" },
          { en: "needed a new oil change", ru: "нужно было поменять масло" },
          { en: "for my car", ru: "для моей машины" },
          { en: "I could just do it", ru: "я мог просто сделать это" },
          { en: "useful in several ways", ru: "полезно по нескольким причинам", tip: "парафраз №2" },
          { en: "work experience", ru: "опыт работы", tip: "№2" },
          { en: "financial freedom", ru: "финансовая свобода", tip: "№2" },
          { en: "I agree that", ru: "я согласен, что" }
        ],
        fullText:
          "I agree that making your children work from the time they get out of class until the end of the day is a little too much. I see no problem with a weekend job though. It does give some good experience in the work world, as well as giving kids some financial freedom. I had a weekend job in high school. So it felt amazing not to have to ask my mom to use her card whenever my friends wanted to get something to eat or whenever I needed a new oil change for my car. I could just do it.",
        chunks: [
          {
            text:
              "I agree that making your children work from the time they get out of class until the end of the day is a little too much.",
            showText: true
          },
          {
            text:
              "I see no problem with a weekend job though. It does give some good experience in the work world, as well as giving kids some financial freedom.",
            showText: true
          },
          {
            text:
              "I had a weekend job in high school. So it felt amazing not to have to ask my mom to use her card whenever my friends wanted to get something to eat or whenever I needed a new oil change for my car.",
            showText: true
          },
          { text: "I could just do it.", showText: false }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          { en: "worked at a hairdresser's", ru: "работала в парикмахерской" },
          { en: "in a burger van", ru: "в фургончике с бургерами" },
          { en: "in high school", ru: "в старшей школе" },
          { en: "the first experience", ru: "первый опыт" },
          { en: "at the hairdresser's", ru: "в парикмахерской" },
          { en: "in the mornings", ru: "по утрам", tip: "№4" },
          { en: "in the summer", ru: "летом" },
          { en: "was useful", ru: "был полезным" },
          { en: "get experience", ru: "получить опыт" },
          { en: "get me up in the mornings", ru: "заставляла меня вставать утром" },
          { en: "summer afternoons and evenings", ru: "летние дни и вечера" },
          { en: "hang out with my friends", ru: "гулять с друзьями" },
          { en: "enjoy life", ru: "наслаждаться жизнью" },
          { en: "during that time", ru: "в этот период" },
          { en: "didn't miss out on much", ru: "не много упустила" },
          { en: "burger van was quite hard", ru: "работа в бургерном фургончике была тяжёлой" },
          { en: "my friends would be sleeping", ru: "друзья спали" },
          { en: "while I was at work", ru: "пока я была на работе" },
          { en: "Working hours influence", ru: "рабочие часы влияют", tip: "парафраз №4" },
          { en: "attitude to a job", ru: "отношение к работе", tip: "№4" }
        ],
        fullText:
          "I worked at a hairdresser's and in a burger van in high school. The first experience at the hairdresser's in the mornings and in the summer was useful, I would say, to get experience and get me up in the mornings. I still had my summer afternoons and evenings to hang out with my friends and enjoy life. So during that time, I didn't miss out on much because my friends would be sleeping in while I was at work. But the night job at the burger van was quite hard.",
        chunks: [
          {
            text: "I worked at a hairdresser's and in a burger van in high school.",
            showText: true
          },
          {
            text:
              "The first experience at the hairdresser's in the mornings and in the summer was useful, I would say, to get experience and get me up in the mornings.",
            showText: true
          },
          {
            text:
              "I still had my summer afternoons and evenings to hang out with my friends and enjoy life.",
            showText: true
          },
          {
            text:
              "So during that time, I didn't miss out on much because my friends would be sleeping in while I was at work.",
            showText: false
          },
          { text: "But the night job at the burger van was quite hard.", showText: false }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          { en: "worked at high school", ru: "работал в старшей школе" },
          { en: "was used to having my own money", ru: "привык иметь собственные деньги" },
          { en: "all my friends got pocket money", ru: "все мои друзья получали карманные деньги" },
          { en: "without a job", ru: "без работы" },
          { en: "miss out on the cinema", ru: "пропустить кино" },
          { en: "ice skating", ru: "катание на коньках" },
          { en: "fast food", ru: "фастфуд" },
          { en: "bowling", ru: "боулинг" },
          { en: "and so on", ru: "и так далее" },
          { en: "because I had to go to work", ru: "потому что нужно было идти на работу" },
          { en: "missed out on loads anyway", ru: "всё равно многое пропускал" },
          { en: "Looking back", ru: "оглядываясь назад" },
          { en: "jobs I did in school paid very little", ru: "школьные подработки оплачивались очень плохо" },
          { en: "in an ideal world", ru: "в идеальном мире" },
          { en: "teens should only do some jobs for experience", ru: "подростки должны работать только ради опыта", tip: "№5 context" },
          { en: "parents should give them pocket money", ru: "родители должны давать им карманные деньги", tip: "№5" },
          { en: "Financial support", ru: "финансовая поддержка" },
          { en: "part of their responsibility as parents", ru: "часть их родительской ответственности", tip: "№5" },
          { en: "provide for their children's needs", ru: "обеспечивать нужды детей", tip: "парафраз №5" },
          { en: "having my own money", ru: "иметь собственные деньги" }
        ],
        fullText:
          "I worked at high school and was used to having my own money, while all my friends got pocket money. So without a job, I'd miss out on the cinema, ice skating, fast food, bowling, and so on. But because I had to go to work, I missed out on loads anyway. Looking back, all the jobs I did in school paid very little. So, in an ideal world, teens should only do some jobs for experience, and their parents should give them pocket money. Financial support is part of their responsibility as parents.",
        chunks: [
          {
            text:
              "I worked at high school and was used to having my own money, while all my friends got pocket money.",
            showText: true
          },
          {
            text:
              "So without a job, I'd miss out on the cinema, ice skating, fast food, bowling, and so on.",
            showText: true
          },
          {
            text:
              "But because I had to go to work, I missed out on loads anyway. Looking back, all the jobs I did in school paid very little.",
            showText: true
          },
          {
            text:
              "So, in an ideal world, teens should only do some jobs for experience, and their parents should give them pocket money.",
            showText: false
          },
          {
            text: "Financial support is part of their responsibility as parents.",
            showText: false
          }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 3,
        trapNums: [5],
        keyLineRu:
          "A говорит, что после школы работа на 5-10 часов - слишком большая нагрузка.",
        evidencePromptRu:
          "<strong>Speaker A.</strong> Зелёным - work right after school / workload / already enough.",
        distractorPromptRu:
          "<strong>Speaker A.</strong> Красным - poor parenting: это эмоция, но ключ про нагрузку school + work.",
        promptRu:
          "<strong>Speaker A.</strong> Зелёным - too much for teenagers. Красным - parent blame as a trap.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "go to work for 5-10 hours right after school",
            explainRu: "Работа сразу после школы - опора к <strong>№3</strong>."
          },
          { kind: "glue", html: "? That is " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 5,
            text: "poor parenting",
            explainRu: "Ловушка <strong>№5</strong>: речь не про деньги родителей, а про перегруз."
          },
          { kind: "glue", html: ". The struggles of school and the weight that comes with it — whether it is " },
          {
            kind: "hit",
            sol: "e",
            text: "the workload, the tests, or depression from it all",
            explainRu: "Школьная нагрузка уже тяжёлая → <strong>№3</strong>."
          },
          { kind: "glue", html: " — are " },
          {
            kind: "hit",
            sol: "e",
            text: "already enough",
            explainRu: "Уже достаточно нагрузки → <strong>№3</strong>."
          },
          { kind: "glue", html: "." }
        ]
      },
      {
        speaker: "B",
        keyNum: 7,
        trapNums: [3],
        keyLineRu:
          "B не работал до университета, но был готов к взрослой жизни.",
        evidencePromptRu:
          "<strong>Speaker B.</strong> Зелёным - no job until university + prepared for adulthood.",
        distractorPromptRu:
          "<strong>Speaker B.</strong> Красным - extra stress: похоже на №3, но главный ключ - готовность без работы.",
        promptRu:
          "<strong>Speaker B.</strong> Зелёным - adult life without work. Красным - stress trap.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "school always came first",
            explainRu: "Школа важнее работы."
          },
          { kind: "glue", html: ". No job — because school was my job. In the summers I had to do something though. It was either more school, or some type of volunteer activities. " },
          {
            kind: "hit",
            sol: "e",
            text: "I didn't have a job until my third year university summer",
            explainRu: "Без работы в школе → часть <strong>№7</strong>."
          },
          { kind: "glue", html: ", and " },
          {
            kind: "hit",
            sol: "e",
            text: "felt prepared for adulthood just fine",
            explainRu: "Прямой парафраз <strong>№7</strong>."
          },
          { kind: "glue", html: ". I know parents do it to prepare for adulthood, but let your children enjoy their final years of childhood while they get ready for college (if they're going). It's " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "no good applying extra stress onto them",
            explainRu: "Ловушка <strong>№3</strong>: stress есть, но ключ B - готовность без работы."
          },
          { kind: "glue", html: "." }
        ]
      },
      {
        speaker: "C",
        keyNum: 1,
        trapNums: [6],
        keyLineRu:
          "C хотел работать, но отец убедил его подождать.",
        evidencePromptRu:
          "<strong>Speaker C.</strong> Зелёным - eager to get a job + dad said wait.",
        distractorPromptRu:
          "<strong>Speaker C.</strong> Красным - money for college: причина, не ключ.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным - wanted to work but was talked out of it.",
        segments: [
          { kind: "glue", html: "When I was in high school, I needed money for college and we didn't have a lot of money to go around. I was " },
          {
            kind: "hit",
            sol: "e",
            text: "super eager to get a job",
            explainRu: "Really wanted to work → <strong>№1</strong>."
          },
          { kind: "glue", html: ", but " },
          {
            kind: "hit",
            sol: "e",
            text: "my dad actually said to me",
            explainRu: "Родитель вмешивается."
          },
          { kind: "glue", html: ", &quot;Wait as long as you can before getting a job. Once you start working, you don't stop until you retire.&quot; All my friends started getting jobs at 14 or 16. I was 18 when I got my first real job (granted, I also worked for my mom's store and my dad's business and had summer jobs). I can't thank him enough for " },
          {
            kind: "hit",
            sol: "e",
            text: "telling me it was okay",
            explainRu: "Отец разрешил не работать сразу → <strong>№1</strong>."
          },
          { kind: "glue", html: "." }
        ]
      },
      {
        speaker: "D",
        keyNum: 2,
        trapNums: [3],
        keyLineRu:
          "D говорит именно о weekend job: опыт + финансовая свобода.",
        evidencePromptRu:
          "<strong>Speaker D.</strong> Зелёным - weekend job + experience + financial freedom.",
        distractorPromptRu:
          "<strong>Speaker D.</strong> Красным - all day work too much: не главный ответ D.",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным - useful in several ways. Красным - all-day work trap.",
        segments: [
          { kind: "glue", html: "I agree that making your children work from the time they get out of class until the end of the day is " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "a little too much",
            explainRu: "Похоже на <strong>№3</strong>, но D дальше хвалит weekend job."
          },
          { kind: "glue", html: ". I see no problem with a " },
          {
            kind: "hit",
            sol: "e",
            text: "weekend job",
            explainRu: "Ключевой тип работы → <strong>№2</strong>."
          },
          { kind: "glue", html: " though. It does " },
          {
            kind: "hit",
            sol: "e",
            text: "give some good experience in the work world",
            explainRu: "Польза №1: опыт."
          },
          { kind: "glue", html: ", as well as giving kids " },
          {
            kind: "hit",
            sol: "e",
            text: "some financial freedom",
            explainRu: "Польза №2: деньги / свобода."
          },
          { kind: "glue", html: ". I had a weekend job in high school. So it felt amazing not to have to ask my mom to use her card whenever my friends wanted to get something to eat or whenever I needed a new oil change for my car. I could just do it." }
        ]
      },
      {
        speaker: "E",
        keyNum: 4,
        trapNums: [2],
        keyLineRu:
          "E сравнивает утреннюю работу и ночную работу: часы влияют на отношение.",
        evidencePromptRu:
          "<strong>Speaker E.</strong> Зелёным - mornings useful vs night job hard.",
        distractorPromptRu:
          "<strong>Speaker E.</strong> Красным - experience: есть, но не вся мысль.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным - working hours influence attitude.",
        segments: [
          { kind: "glue", html: "The first experience at the hairdresser's " },
          {
            kind: "hit",
            sol: "e",
            text: "in the mornings and in the summer was useful",
            explainRu: "Утренние/летние часы воспринимались хорошо."
          },
          { kind: "glue", html: ", I would say, to " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 2,
            text: "get experience",
            explainRu: "Опыт есть, но ключ E - влияние часов работы."
          },
          { kind: "glue", html: " and get me up in the mornings. I still had my summer afternoons and evenings to hang out with my friends and enjoy life. So during that time, I didn't miss out on much because my friends would be sleeping in while I was at work. But the " },
          {
            kind: "hit",
            sol: "e",
            text: "night job at the burger van was quite hard",
            explainRu: "Ночная смена была тяжёлой → <strong>№4</strong>."
          },
          { kind: "glue", html: "." }
        ]
      },
      {
        speaker: "F",
        keyNum: 5,
        trapNums: [2],
        keyLineRu:
          "F говорит, что родители должны давать pocket money; financial support - их responsibility.",
        evidencePromptRu:
          "<strong>Speaker F.</strong> Зелёным - parents should give pocket money / financial support.",
        distractorPromptRu:
          "<strong>Speaker F.</strong> Красным - jobs for experience: не главный ответ.",
        promptRu:
          "<strong>Speaker F.</strong> Зелёным - parents provide needs. Красным - job experience.",
        segments: [
          { kind: "glue", html: "I worked at high school and was used to having my own money, while all my friends got pocket money. So without a job, I'd miss out on the cinema, ice skating, fast food, bowling, and so on. But because I had to go to work, I missed out on loads anyway. Looking back, all the jobs I did in school paid very little. So, in an ideal world, teens should only do " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 2,
            text: "some jobs for experience",
            explainRu: "Опыт упомянут, но главный вывод F - деньги должны давать родители."
          },
          { kind: "glue", html: ", and their " },
          {
            kind: "hit",
            sol: "e",
            text: "parents should give them pocket money",
            explainRu: "Парафраз <strong>№5</strong>."
          },
          { kind: "glue", html: ". " },
          {
            kind: "hit",
            sol: "e",
            text: "Financial support is part of their responsibility as parents",
            explainRu: "Прямой ключ к <strong>№5</strong>."
          },
          { kind: "glue", html: "." }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
