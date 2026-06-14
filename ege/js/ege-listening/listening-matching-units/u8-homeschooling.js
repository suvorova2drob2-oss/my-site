/**
 * ЕГЭ Listening Matching · Unit 8 · Homeschooling (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-homeschooling",
    unitOrder: 8,
    title: "Unit 8 · Homeschooling",
    examSection: "§1 · Задание 1",
    headerTitle: "Homeschooling",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/8/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%208%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> — плюс: 4–5 часов «школы»; минус: <strong>одиночество</strong> → №3.</li>" +
      "<li><strong>B</strong> — группа семей, раз в неделю вместе, экскурсии → <strong>сообщество</strong> (№7), не «кружки» (№2).</li>" +
      "<li><strong>C</strong> — магистратура, карьера: «не был бы там, где я сейчас» → №4.</li>" +
      "<li><strong>D</strong> — разбивает <strong>стереотипы</strong> («ничего не делают», «только учителя») → №6.</li>" +
      "<li><strong>E</strong> — брату подошло, ей нет → №1 «не для всех»; ловушка №3 (no one again).</li>" +
      "<li><strong>F</strong> — нужны ресурсы и сообщество <strong>в вашем районе</strong> → №5.</li>" +
      "<li><strong>№2</strong> лишнее: никто не говорит про extracurricular clubs как главную мысль.</li>" +
      "</ul>",
    statements: [
      { num: 1, text: "Homeschooling is not for everyone." },
      { num: 2, text: "Extracurricular clubs are a vital part of homeschooling." },
      { num: 3, text: "I felt like I lacked communication." },
      { num: 4, text: "I have achieved a lot thanks to homeschooling." },
      { num: 5, text: "It depends on the facilities available where you live." },
      { num: 6, text: "Some stereotypes about homeschooling are not true." },
      { num: 7, text: "We had a great community to help with homeschooling." }
    ],
    extraStatementNum: 2,
    /** A→3, B→7, C→4, D→6, E→1, F→5; лишнее — 2 */
    key: [3, 7, 4, 6, 1, 5],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "home-schooled", ru: "учился(ась) на домашнем обучении" },
      { en: "entirely self-taught", ru: "полностью учился(ась) сам(а)" },
      { en: "being alone a lot", ru: "часто быть одному" },
      { en: "home-schooled families", ru: "семьи на домашнем обучении" },
      { en: "field trips", ru: "учебные экскурсии" },
      { en: "missed out on any socialisation", ru: "упустил(а) общение / социализацию" },
      { en: "graduate school for counselling", ru: "магистратура по консультированию" },
      { en: "popular misconception", ru: "распространённое заблуждение" },
      { en: "certified teacher", ru: "сертифицированный учитель" },
      { en: "worked really well for him", ru: "ему очень подошло" },
      { en: "it was awful for me", ru: "мне это было ужасно" },
      { en: "active home-schooling community", ru: "активное сообщество домашнего обучения" }
    ],
    tapPhrases: [
      { en: "being alone a lot", ru: "часто быть одному" },
      { en: "only had a couple of friends", ru: "было всего пара друзей" },
      { en: "group of home-schooled families", ru: "группа семей на домашнем обучении" },
      { en: "get together", ru: "собираться вместе" },
      { en: "graduate school", ru: "магистратура / аспирантура" },
      { en: "where I am now", ru: "там, где я сейчас" },
      { en: "doing nothing", ru: "«ничего не делать»" },
      { en: "professional teachers", ru: "профессиональные учителя" },
      { en: "not at the same time", ru: "не одновременно" },
      { en: "suddenly I had no one again", ru: "внезапно снова не с кем было общаться" },
      { en: "no resources", ru: "нет ресурсов / поддержки" },
      { en: "in your area", ru: "в вашем районе / месте" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          { en: "home-schooled in the 7th and 8th grades", ru: "учился на домашнем обучении в 7–8 классах" },
          { en: "The biggest pro", ru: "самый большой плюс" },
          { en: "the amount of time I was in school", ru: "сколько времени я проводил «в школе»" },
          { en: "around 4–5 hours a day", ru: "примерно 4–5 часов в день" },
          { en: "Both of my parents worked", ru: "оба моих родителя работали" },
          { en: "they'd leave me assignments", ru: "они оставляли мне задания" },
          { en: "pretty much entirely self-taught", ru: "практически полностью учился сам", tip: "контекст, не ключ" },
          { en: "based on the assignments", ru: "опираясь на задания" },
          { en: "The downside was being alone a lot", ru: "минус — часто быть одному", tip: "№3" },
          { en: "I was alone all day", ru: "я был один весь день", tip: "№3" },
          { en: "until my sisters came home from school", ru: "пока сёстры не возвращались из школы" },
          { en: "only had a couple of friends", ru: "было всего пара друзей", tip: "№3" },
          { en: "in my age group", ru: "своего возраста" },
          { en: "might see on weekends", ru: "мог видеть по выходным" },
          { en: "lacked communication", ru: "не хватало общения", tip: "парафраз №3" },
          { en: "self-taught", ru: "самоучка" },
          { en: "assignments", ru: "задания" },
          { en: "came home from school", ru: "возвращались из школы" },
          { en: "The downside", ru: "минус / обратная сторона" },
          { en: "being alone", ru: "быть одному", tip: "№3" }
        ],
        fullText:
          "I was home-schooled in the 7th and 8th grades. The biggest pro was absolutely that the amount of time I was in \"school\" was around 4–5 hours a day. Both of my parents worked, so they'd leave me assignments. I was pretty much entirely self-taught based on the assignments. The downside was being alone a lot. I was alone all day until my sisters came home from school, and I only had a couple of friends in my age group that I might see on weekends.",
        chunks: [
          {
            text:
              "I was home-schooled in the 7th and 8th grades. The biggest pro was absolutely that the amount of time I was in \"school\" was around 4–5 hours a day.",
            showText: true
          },
          {
            text:
              "Both of my parents worked, so they'd leave me assignments. I was pretty much entirely self-taught based on the assignments.",
            showText: true
          },
          {
            text: "The downside was being alone a lot. I was alone all day until my sisters came home from school,",
            showText: true
          },
          {
            text:
              "and I only had a couple of friends in my age group that I might see on weekends.",
            showText: false
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "home-schooled from the 2nd grade through high school", ru: "учился на домашнем обучении со 2 класса до выпуска" },
          { en: "I enjoyed it", ru: "мне это нравилось" },
          { en: "wouldn't have done as well in a public-school setting", ru: "не добился бы таких успехов в обычной школе" },
          { en: "We had a group of home-schooled families", ru: "У нас была группа семей на домашнем обучении", tip: "№7" },
          { en: "one day a week we would all get together", ru: "раз в неделю мы все собирались", tip: "№7" },
          { en: "the parents would share the things they knew", ru: "родители делились тем, что знали" },
          { en: "in different classes", ru: "на разных «уроках»" },
          { en: "go on field trips", ru: "ходить на учебные экскурсии", tip: "ловушка №2" },
          { en: "science centres", ru: "научные центры" },
          { en: "sometimes farms", ru: "иногда на фермы" },
          { en: "where the things we use every day come from", ru: "откуда берутся вещи, которыми мы пользуемся каждый день" },
          { en: "great community", ru: "отличное сообщество", tip: "парафраз №7" },
          { en: "public-school setting", ru: "обычная государственная школа" },
          { en: "get together", ru: "собираться вместе", tip: "№7" },
          { en: "share the things they knew", ru: "делиться знаниями" },
          { en: "field trips", ru: "учебные экскурсии" },
          { en: "home-schooled families", ru: "семьи на домашнем обучении", tip: "№7" },
          { en: "through high school", ru: "до выпуска из школы" },
          { en: "enjoyed it", ru: "мне это нравилось" },
          { en: "help with homeschooling", ru: "помощь в домашнем обучении", tip: "парафраз №7" }
        ],
        fullText:
          "I was home-schooled from the 2nd grade through high school. I enjoyed it, and I don't think I would have done as well in a public-school setting. We had a group of home-schooled families, and one day a week we would all get together and the parents would share the things they knew in different \"classes\". We would also all go on \"field trips\" to science centres, and sometimes farms, to learn about where the things we use every day come from.",
        chunks: [
          {
            text:
              "I was home-schooled from the 2nd grade through high school. I enjoyed it, and I don't think I would have done as well in a public-school setting.",
            showText: true
          },
          {
            text:
              "We had a group of home-schooled families, and one day a week we would all get together and the parents would share the things they knew in different \"classes\".",
            showText: true
          },
          {
            text:
              "We would also all go on \"field trips\" to science centres, and sometimes farms, to learn about where the things we use every day come from.",
            showText: true
          }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          { en: "many friends from home-schooled families", ru: "много друзей из семей на домашнем обучении" },
          { en: "friends who went to public schools", ru: "друзья, которые ходили в обычную школу" },
          { en: "don't feel like I missed out on any socialisation", ru: "не чувствую, что упустил общение", tip: "ловушка №3" },
          { en: "I'm now 27", ru: "мне сейчас 27" },
          { en: "in graduate school for counselling", ru: "учусь в магистратуре по консультированию", tip: "№4" },
          { en: "wouldn't be where I am now if I were not home-schooled", ru: "не был(а) бы там, где я сейчас, без домашнего обучения", tip: "№4" },
          { en: "having that option is a really good idea", ru: "такая возможность — очень хорошая идея" },
          { en: "gives your kids some control over their education", ru: "даёт детям контроль над своим образованием" },
          { en: "what home-schooling is about at its core", ru: "в чём суть домашнего обучения" },
          { en: "achieved a lot", ru: "много достиг(ла)", tip: "парафраз №4" },
          { en: "graduate school", ru: "магистратура / аспирантура", tip: "№4" },
          { en: "counselling", ru: "консультирование / психологическое консультирование" },
          { en: "control over their education", ru: "контроль над своим образованием" },
          { en: "at its core", ru: "по сути / в основе" },
          { en: "public schools", ru: "обычные школы" },
          { en: "socialisation", ru: "социализация / общение" },
          { en: "where I am now", ru: "там, где я сейчас", tip: "№4" },
          { en: "home-schooled", ru: "домашнее обучение" },
          { en: "thanks to homeschooling", ru: "благодаря домашнему обучению", tip: "парафраз №4" },
          { en: "really good idea", ru: "очень хорошая идея" }
        ],
        fullText:
          "I had many friends from home-schooled families, and friends who went to public schools, so I don't feel like I missed out on any socialisation. I'm now 27 and in graduate school for counselling. I don't think I would be where I am now if I were not home-schooled. I think having that option is a really good idea if you're going to do it, as it gives your kids some control over their education. And I believe that is what home-schooling is about at its core.",
        chunks: [
          {
            text:
              "I had many friends from home-schooled families, and friends who went to public schools, so I don't feel like I missed out on any socialisation.",
            showText: true
          },
          {
            text:
              "I'm now 27 and in graduate school for counselling. I don't think I would be where I am now if I were not home-schooled.",
            showText: true
          },
          {
            text:
              "I think having that option is a really good idea if you're going to do it, as it gives your kids some control over their education.",
            showText: true
          },
          {
            text: "And I believe that is what home-schooling is about at its core.",
            showText: false
          }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          { en: "Some people think that home-schooling is doing nothing", ru: "некоторые думают, что домашнее обучение — это «ничего не делать»", tip: "№6" },
          { en: "home-schooling is a lot of work", ru: "домашнее обучение — это большая работа" },
          { en: "most of that work is on your parents' shoulders", ru: "большая часть этой работы ложится на родителей" },
          { en: "Another popular misconception", ru: "Ещё одно распространённое заблуждение", tip: "№6" },
          { en: "only parents who are professional teachers can teach", ru: "только профессиональные учителя могут учить дома", tip: "№6" },
          { en: "you don't have to be a certified teacher", ru: "не обязательно быть сертифицированным учителем", tip: "№6" },
          { en: "By the time your kids reach subjects", ru: "к тому времени, как дети доходят до предметов" },
          { en: "you don't have a Master's in", ru: "в которых у вас нет магистерской степени" },
          { en: "high-school age", ru: "возраст старшей школы" },
          { en: "they can teach themselves just fine", ru: "они могут учиться сами без проблем" },
          { en: "using their textbooks", ru: "по учебникам" },
          { en: "stereotypes about homeschooling", ru: "стереотипы о домашнем обучении", tip: "парафраз №6" },
          { en: "doing nothing", ru: "«ничего не делать»", tip: "№6" },
          { en: "professional teachers", ru: "профессиональные учителя", tip: "№6" },
          { en: "certified teacher", ru: "сертифицированный учитель", tip: "№6" },
          { en: "misconception", ru: "заблуждение", tip: "№6" },
          { en: "parents' shoulders", ru: "на плечах родителей" },
          { en: "teach themselves", ru: "учиться самостоятельно" },
          { en: "textbooks", ru: "учебники" },
          { en: "not true", ru: "неправда", tip: "парафраз №6" }
        ],
        fullText:
          "Some people think that home-schooling is doing nothing. But, in fact, home-schooling is a lot of work. Yet, most of that work is on your parents' shoulders. Another popular misconception is that only parents who are professional teachers can teach their kids at home. Well, you don't have to be a certified teacher. By the time your kids reach subjects that you don't have a Master's in (which is high-school age), they can teach themselves just fine — using their textbooks.",
        chunks: [
          {
            text:
              "Some people think that home-schooling is doing nothing. But, in fact, home-schooling is a lot of work.",
            showText: true
          },
          {
            text: "Yet, most of that work is on your parents' shoulders.",
            showText: true
          },
          {
            text:
              "Another popular misconception is that only parents who are professional teachers can teach their kids at home. Well, you don't have to be a certified teacher.",
            showText: true
          },
          {
            text:
              "By the time your kids reach subjects that you don't have a Master's in (which is high-school age), they can teach themselves just fine — using their textbooks.",
            showText: false
          }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          { en: "Both my brother and I were home-schooled for a while", ru: "и я, и брат некоторое время учились дома" },
          { en: "but not at the same time", ru: "но не одновременно" },
          { en: "it worked really well for him", ru: "ему это очень подошло", tip: "№1" },
          { en: "but it was awful for me", ru: "но мне это было ужасно", tip: "№1" },
          { en: "the entire reason I was pulled out of school", ru: "единственная причина, по которой меня забрали из школы" },
          { en: "I got a B+ in 7th-grade algebra", ru: "я получил(а) B+ по алгебре в 7 классе" },
          { en: "pretty bitter about leaving school", ru: "очень обиделся(ась) из-за ухода из школы" },
          { en: "I had finally made friends", ru: "я наконец-то завёл(а) друзей" },
          { en: "suddenly I had no one again", ru: "внезапно снова не с кем было общаться", tip: "ловушка №3" },
          { en: "went back to public school for high school", ru: "вернулся(лась) в обычную школу на старшие классы" },
          { en: "extremely awkward", ru: "был(а) крайне неловким(ой)" },
          { en: "no better at maths", ru: "не стал(а) лучше в математике" },
          { en: "not for everyone", ru: "подходит не всем", tip: "парафраз №1" },
          { en: "worked really well", ru: "очень хорошо сработало" },
          { en: "awful for me", ru: "мне было ужасно", tip: "№1" },
          { en: "pulled out of school", ru: "забрали из школы" },
          { en: "made friends", ru: "завёл(а) друзей" },
          { en: "public school", ru: "обычная школа" },
          { en: "surprise", ru: "сюрприз / иронично" },
          { en: "7th-grade algebra", ru: "алгебра в 7 классе" }
        ],
        fullText:
          "Both my brother and I were home-schooled for a while, but not at the same time. I think it worked really well for him, but it was awful for me. Why? Because the entire reason I was pulled out of school was because I got a B+ in 7th-grade algebra. I was pretty bitter about leaving school, since I had finally made friends and suddenly I had no one again. When I went back to public school for high school, I was extremely awkward and — surprise! — no better at maths.",
        chunks: [
          {
            text:
              "Both my brother and I were home-schooled for a while, but not at the same time. I think it worked really well for him, but it was awful for me.",
            showText: true
          },
          {
            text:
              "Why? Because the entire reason I was pulled out of school was because I got a B+ in 7th-grade algebra.",
            showText: true
          },
          {
            text:
              "I was pretty bitter about leaving school, since I had finally made friends and suddenly I had no one again.",
            showText: true
          },
          {
            text:
              "When I went back to public school for high school, I was extremely awkward and — surprise! — no better at maths.",
            showText: false
          }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          { en: "You need to have an active home-schooling community in your area", ru: "нужно активное сообщество домашнего обучения в вашем районе", tip: "№5" },
          { en: "If you live somewhere with no resources", ru: "если вы живёте там, где нет ресурсов", tip: "№5" },
          { en: "no other families, support, or groups", ru: "нет других семей, поддержки или групп" },
          { en: "take your kids to for socialisation", ru: "куда можно водить детей для общения" },
          { en: "you're going to have a much harder time", ru: "будет гораздо труднее", tip: "№5" },
          { en: "I don't say it's impossible", ru: "не скажу, что это невозможно" },
          { en: "definitely not ideal", ru: "определённо не идеально" },
          { en: "take even more work to be successful", ru: "потребуется ещё больше усилий для успеха" },
          { en: "some parent-kid combos just aren't successful", ru: "некоторые пары «родитель–ребёнок» просто не справляются", tip: "ловушка №1" },
          { en: "because of conflicts or a specific teaching style", ru: "из-за конфликтов или особого стиля преподавания" },
          { en: "can have negative effects", ru: "может иметь негативные последствия" },
          { en: "facilities available where you live", ru: "условия / ресурсы там, где вы живёте", tip: "парафраз №5" },
          { en: "in your area", ru: "в вашем районе", tip: "№5" },
          { en: "no resources", ru: "нет ресурсов / поддержки", tip: "№5" },
          { en: "active home-schooling community", ru: "активное сообщество домашнего обучения", tip: "№5" },
          { en: "much harder time", ru: "гораздо труднее", tip: "№5" },
          { en: "not ideal", ru: "не идеально" },
          { en: "parent-kid combos", ru: "сочетания «родитель–ребёнок»" },
          { en: "teaching style", ru: "стиль преподавания" },
          { en: "negative effects", ru: "негативные последствия" }
        ],
        fullText:
          "You need to have an active home-schooling community in your area. If you live somewhere with no resources — no other families, support, or groups to take your kids to for socialisation — then you're going to have a much harder time. I don't say it's impossible, but it's definitely not ideal and it's going to take even more work to be successful. And some parent-kid combos just aren't successful because of conflicts or a specific teaching style — which can have negative effects.",
        chunks: [
          {
            text:
              "You need to have an active home-schooling community in your area. If you live somewhere with no resources — no other families, support, or groups to take your kids to for socialisation — then you're going to have a much harder time.",
            showText: true
          },
          {
            text:
              "I don't say it's impossible, but it's definitely not ideal and it's going to take even more work to be successful.",
            showText: true
          },
          {
            text:
              "And some parent-kid combos just aren't successful because of conflicts or a specific teaching style — which can have negative effects.",
            showText: false
          }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 3,
        trapNums: [4],
        keyLineRu:
          "Утверждение 3 — одиночество, мало друзей, не хватало общения.",
        evidencePromptRu:
          "<strong>Speaker A · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — alone all day / couple of friends → <strong>№3</strong>.",
        distractorPromptRu:
          "<strong>Speaker A · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — 4–5 hours / self-taught → ловушка «достижения», не №3.",
        promptRu:
          "<strong>Speaker A.</strong> Зелёным — lacked communication. Красным — short school day (не №4).",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "around 4–5 hours a day",
            explainRu:
              "Ловушка <strong>№4</strong> (achieved): короткий день — плюс, не про успехи."
          },
          { kind: "glue", html: ". Both of my parents worked, so they'd leave me assignments. I was pretty much entirely self-taught based on the assignments. The downside was " },
          {
            kind: "hit",
            sol: "e",
            text: "being alone a lot",
            explainRu:
              "Прямой парафраз <strong>№3</strong>: lacked communication."
          },
          { kind: "glue", html: ". I was " },
          {
            kind: "hit",
            sol: "e",
            text: "alone all day until my sisters came home from school",
            explainRu:
              "Одиночество весь день → <strong>№3</strong>."
          },
          { kind: "glue", html: ", and I " },
          {
            kind: "hit",
            sol: "e",
            text: "only had a couple of friends in my age group that I might see on weekends",
            explainRu:
              "Мало общения → <strong>№3</strong>."
          },
          { kind: "glue", html: "." }
        ]
      },
      {
        speaker: "B",
        keyNum: 7,
        trapNums: [2],
        keyLineRu:
          "Утверждение 7 — группа семей, еженедельные встречи, сообщество.",
        evidencePromptRu:
          "<strong>Speaker B · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — group of families / get together → <strong>№7</strong>.",
        distractorPromptRu:
          "<strong>Speaker B · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — field trips → ловушка <strong>№2</strong> (clubs), не №7.",
        promptRu:
          "<strong>Speaker B.</strong> Зелёным — great community. Красным — field trips (№2).",
        segments: [
          { kind: "glue", html: "I was home-schooled from the 2nd grade through high school. I enjoyed it, and I don't think I would have done as well in a public-school setting. We had " },
          {
            kind: "hit",
            sol: "e",
            text: "a group of home-schooled families",
            explainRu:
              "Сообщество семей → <strong>№7</strong>."
          },
          { kind: "glue", html: ", and " },
          {
            kind: "hit",
            sol: "e",
            text: "one day a week we would all get together and the parents would share the things they knew",
            explainRu:
              "Еженедельная помощь родителей → <strong>№7</strong>."
          },
          { kind: "glue", html: " in different \"classes\". We would also all " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 2,
            text: "go on \"field trips\" to science centres, and sometimes farms",
            explainRu:
              "Ловушка <strong>№2</strong> (extracurricular clubs): экскурсии ≠ кружки."
          },
          { kind: "glue", html: ", to learn about where the things we use every day come from." }
        ]
      },
      {
        speaker: "C",
        keyNum: 4,
        trapNums: [3],
        keyLineRu:
          "Утверждение 4 — магистратура, карьера: «не был(а) бы там, где я сейчас».",
        evidencePromptRu:
          "<strong>Speaker C · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — graduate school / where I am now → <strong>№4</strong>.",
        distractorPromptRu:
          "<strong>Speaker C · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — didn't miss socialisation → ловушка <strong>№3</strong>.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным — achieved a lot. Красным — socialisation (№3).",
        segments: [
          { kind: "glue", html: "I had many friends from home-schooled families, and friends who went to public schools, so I " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "don't feel like I missed out on any socialisation",
            explainRu:
              "Ловушка <strong>№3</strong>: наоборот — общения хватало."
          },
          { kind: "glue", html: ". I'm now 27 and " },
          {
            kind: "hit",
            sol: "e",
            text: "in graduate school for counselling",
            explainRu:
              "Успех в карьере → <strong>№4</strong>."
          },
          { kind: "glue", html: ". I don't think I " },
          {
            kind: "hit",
            sol: "e",
            text: "would be where I am now if I were not home-schooled",
            explainRu:
              "Прямой парафраз <strong>№4</strong>: achieved a lot thanks to homeschooling."
          },
          { kind: "glue", html: ". I think having that option is a really good idea if you're going to do it, as it gives your kids some control over their education. And I believe that is what home-schooling is about at its core." }
        ]
      },
      {
        speaker: "D",
        keyNum: 6,
        trapNums: [1],
        keyLineRu:
          "Утверждение 6 — разбивает стереотипы: «ничего не делают», «только учителя».",
        evidencePromptRu:
          "<strong>Speaker D · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — doing nothing / professional teachers myths → <strong>№6</strong>.",
        distractorPromptRu:
          "<strong>Speaker D · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — a lot of work on parents → не «не для всех» (№1).",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным — stereotypes not true. Красным — hard work (не №1).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Some people think that home-schooling is doing nothing",
            explainRu:
              "Миф №1 → опровергается → <strong>№6</strong>."
          },
          { kind: "glue", html: ". But, in fact, home-schooling is a lot of work. Yet, most of that work is on your parents' shoulders. " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 1,
            text: "most of that work is on your parents' shoulders",
            explainRu:
              "Ловушка <strong>№1</strong>: трудно, но D про мифы, не «не для всех»."
          },
          { kind: "glue", html: "Another popular misconception is that " },
          {
            kind: "hit",
            sol: "e",
            text: "only parents who are professional teachers can teach their kids at home",
            explainRu:
              "Миф №2 → <strong>№6</strong>."
          },
          { kind: "glue", html: ". Well, " },
          {
            kind: "hit",
            sol: "e",
            text: "you don't have to be a certified teacher",
            explainRu:
              "Опровержение стереотипа → <strong>№6</strong>."
          },
          { kind: "glue", html: ". By the time your kids reach subjects that you don't have a Master's in (which is high-school age), they can teach themselves just fine — using their textbooks." }
        ]
      },
      {
        speaker: "E",
        keyNum: 1,
        trapNums: [3],
        keyLineRu:
          "Утверждение 1 — брату подошло, ей нет: homeschooling not for everyone.",
        evidencePromptRu:
          "<strong>Speaker E · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — worked for him / awful for me → <strong>№1</strong>.",
        distractorPromptRu:
          "<strong>Speaker E · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — no one again → ловушка <strong>№3</strong>.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным — not for everyone. Красным — no one (№3).",
        segments: [
          { kind: "glue", html: "Both my brother and I were home-schooled for a while, but not at the same time. I think " },
          {
            kind: "hit",
            sol: "e",
            text: "it worked really well for him, but it was awful for me",
            explainRu:
              "Прямой парафраз <strong>№1</strong>: not for everyone."
          },
          { kind: "glue", html: ". Why? Because the entire reason I was pulled out of school was because I got a B+ in 7th-grade algebra. I was pretty bitter about leaving school, since I had finally made friends and " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "suddenly I had no one again",
            explainRu:
              "Ловушка <strong>№3</strong>: одиночество есть, но главная мысль E — «не для всех»."
          },
          { kind: "glue", html: ". When I went back to public school for high school, I was extremely awkward and — surprise! — no better at maths." }
        ]
      },
      {
        speaker: "F",
        keyNum: 5,
        trapNums: [1, 7],
        keyLineRu:
          "Утверждение 5 — успех зависит от ресурсов и сообщества в вашем районе.",
        evidencePromptRu:
          "<strong>Speaker F · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — community in your area / no resources → <strong>№5</strong>.",
        distractorPromptRu:
          "<strong>Speaker F · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — parent-kid combos → ловушка <strong>№1</strong>.",
        promptRu:
          "<strong>Speaker F.</strong> Зелёным — facilities where you live. Красным — not for everyone (№1).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "You need to have an active home-schooling community in your area",
            explainRu:
              "Зависит от места → <strong>№5</strong>."
          },
          { kind: "glue", html: ". If you live somewhere with " },
          {
            kind: "hit",
            sol: "e",
            text: "no resources — no other families, support, or groups to take your kids to for socialisation",
            explainRu:
              "Нет условий в районе → <strong>№5</strong>."
          },
          { kind: "glue", html: " — then you're going to have a much harder time. I don't say it's impossible, but it's definitely not ideal and it's going to take even more work to be successful. And " },
          {
            kind: "hit",
            sol: "d",
            trapNum: 1,
            text: "some parent-kid combos just aren't successful",
            explainRu:
              "Ловушка <strong>№1</strong> (not for everyone): похоже, но ключ F — ресурсы района."
          },
          { kind: "glue", html: " because of conflicts or a specific teaching style — which can have negative effects." }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
