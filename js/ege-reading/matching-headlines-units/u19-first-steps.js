/**
 * ЕГЭ Reading — Matching Headlines, юнит 19 (первые шаги: школа, вуз, работа, выбор специализации,
 * разочарование, поддержка рядом, стремительное время).
 * Исправления исходника: убран мусор «ne » в D; в E точка перед «It»; в F which вместо whier.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-first-steps",
    unitOrder: 19,
    title: "Unit 19 · First steps",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "I was very excited about my first teaching job. I didn't plan it but I was given an opportunity to teach at an exclusive university. I was greatly challenged by my students then. They were great English speakers way ahead of me as I was not so confident, articulate, and fluent. But whew, I survived! In fact, it was a great learning experience for me. I had to do a lot of practice like talking to myself in front of the mirror or taking notes of the jokes. It was funny but it helped a lot to improve my language skills.",
        evidence: {
          support: [
            "In fact, it was a great learning experience for me.",
            "I had to do a lot of practice like talking to myself in front of the mirror or taking notes of the jokes.",
            "it helped a lot to improve my language skills.",
            "They were great English speakers way ahead of me"
          ],
          distract: [
            "I was very excited about my first teaching job.",
            "But whew, I survived!"
          ]
        }
      },
      {
        letter: "B",
        text:
          "Although I could have chosen different specializations when I got my first degree in Engineering, I decided to get my Master's in Marketing. I did not know if I was prepared for that. I was only 21 when I started it up but my teachers believed that I had some natural skills. Even though I had some doubts at the beginning, choosing to do a Master's degree in this field was one of the most important decisions in my life. It shaped me the way I am now: a gleaming professor trying to contribute to the development of society.",
        evidence: {
          support: [
            "choosing to do a Master's degree in this field was one of the most important decisions in my life.",
            "Even though I had some doubts at the beginning,",
            "It shaped me the way I am now: a gleaming professor trying to contribute to the development of society.",
            "I decided to get my Master's in Marketing."
          ],
          distract: [
            "Although I could have chosen different specializations when I got my first degree in Engineering,",
            "my teachers believed that I had some natural skills."
          ]
        }
      },
      {
        letter: "C",
        text:
          "I remember my first day at school; it was my mother who took me there. I had to wear a school uniform: a white polo shirt, black trousers, and black leather shoes. I had a small backpack with an exercise book, a pencil box, a bottle of water, and my lunch box inside. I was happy and very excited to see other students. That day I met my future friends and teachers. Throughout the years I learnt many subjects like English, Maths, Science, Religion, PE, Art, and Social Studies. Now my first week is over, but I still remember it.",
        evidence: {
          support: [
            "I was happy and very excited to see other students.",
            "That day I met my future friends and teachers.",
            "Now my first week is over, but I still remember it.",
            "it was my mother who took me there."
          ],
          distract: [
            "Throughout the years I learnt many subjects like English, Maths, Science, Religion, PE, Art, and Social Studies.",
            "I had to wear a school uniform:"
          ]
        }
      },
      {
        letter: "D",
        text:
          "33 hours a week. A dollar an hour. My first teaching job at an upcoming college in my home province showed me the realities of work life. I was a fresh graduate from university and I wanted to get a job soon enough. I accepted the offer because I felt it was somewhat prestigious to teach at a college. But it was exhausting to teach 11 classes in one week with an average of 25 students per class. The hour daily commute to work and back added to the exhaustion. It wasn't as prestigious a job as I imagined.",
        evidence: {
          support: [
            "But it was exhausting to teach 11 classes in one week with an average of 25 students per class.",
            "It wasn't as prestigious a job as I imagined.",
            "The hour daily commute to work and back added to the exhaustion.",
            "showed me the realities of work life."
          ],
          distract: [
            "I accepted the offer because I felt it was somewhat prestigious to teach at a college.",
            "33 hours a week. A dollar an hour."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Throughout the years I had many jobs but the first one was unforgettable. I loved what I did. I loved teaching English and Public Speaking classes. It was wonderful to meet new colleagues who soon became friends. The fellowship among teachers was genuine and warm. The best part for me was being in the classroom teaching real students. It was fulfilling to see them learn and grow. It's been more than 20 years since I first entered the classroom, and I'm still teaching. I guess I'll stay in the vocation for a little bit more.",
        evidence: {
          support: [
            "the first one was unforgettable. I loved what I did.",
            "I loved teaching English and Public Speaking classes.",
            "It's been more than 20 years since I first entered the classroom, and I'm still teaching.",
            "I'll stay in the vocation for a little bit more."
          ],
          distract: [
            "The fellowship among teachers was genuine and warm.",
            "It was fulfilling to see them learn and grow."
          ]
        }
      },
      {
        letter: "F",
        text:
          "I think it's a good idea for parents to come and stay for a night in a hotel nearby for your first day of uni. I, unfortunately, was on my own on move-in day and it was a massive hassle! It was difficult trying to carry all the stuff on my own and I ended up having to ask a stranger outside my accommodation if they could help me carry my shopping up to my room, which was super embarrassing. It's also nice to have someone there for you, all of my flatmates' parents helped them move in so it was a bit lonely for me the first couple of days while they were with their family.",
        evidence: {
          support: [
            "I, unfortunately, was on my own on move-in day and it was a massive hassle!",
            "It's also nice to have someone there for you,",
            "it was a bit lonely for me the first couple of days while they were with their family.",
            "all of my flatmates' parents helped them move in"
          ],
          distract: [
            "I think it's a good idea for parents to come and stay for a night in a hotel nearby for your first day of uni.",
            "which was super embarrassing."
          ]
        }
      },
      {
        letter: "G",
        text:
          "My first day at university was very nerve-wracking, as I completely forgot what I actually meant to do when I finally got there. It was embarrassing at first when my mom roamed around the room making my bed and asking where to put my teddies. But once she left I propped the door open with a chair and made friends with each and every flatmate popping in and saying hi. I got my university ID card and went out with my friends. I tried to make the most of every second as they flew by. The next thing I knew, I was graduating!",
        evidence: {
          support: [
            "I tried to make the most of every second as they flew by.",
            "The next thing I knew, I was graduating!",
            "My first day at university was very nerve-wracking,",
            "I got my university ID card and went out with my friends."
          ],
          distract: [
            "I completely forgot what I actually meant to do when I finally got there.",
            "made friends with each and every flatmate popping in and saying hi."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "A bright start" },
      { num: 2, text: "The first disappointment" },
      { num: 3, text: "Orientate yourself" },
      { num: 4, text: "Learning while teaching" },
      { num: 5, text: "The right choice" },
      { num: 6, text: "In one breath" },
      { num: 7, text: "Love at first sight" },
      { num: 8, text: "Having someone near" }
    ],

    key: { A: 4, B: 5, C: 1, D: 2, E: 7, F: 8, G: 6 },
    extraHeadlineNum: 3,

    explanationsRu: {
      A:
        "Студенты сильнее преподавателя — автор <strong>учится на ходу</strong>, пока ведёт занятия (<strong>4 — Learning while teaching</strong>).",
      B:
        "Сомнения в начале, но решение о магистратуре по маркетингу меняет жизнь — <strong>правильный выбор</strong> (<strong>5</strong>).",
      C:
        "Радость, форма, новые друзья и учителя — <strong>светлое начало</strong> школы (<strong>1</strong>).",
      D:
        "Усталость, мало оплаты, не тот престиж — <strong>первое разочарование</strong> (<strong>2</strong>).",
      E:
        "Не мог забыть первую работу, любил преподавание и до сих пор в профессии — образно <strong>любовь с первого взгляда</strong> к призванию (<strong>7</strong>).",
      F:
        "Один на заселении, совет иметь кого-то рядом — <strong>важно, чтобы кто-то был рядом</strong> (<strong>8</strong>).",
      G:
        "Неловкий старт сменяется общением и студенческими делами; финал про то, как секунды «пролетели» до выпуска — о теме <strong>стремительного времени</strong> (<strong>6 — In one breath</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>3 — Orientate yourself</strong>: заголовок про постепенную ориентацию на новом месте; в <strong>G</strong> конфуз в начале вторичен по сравнению с идеей, что годы пронеслись незаметно (<strong>6</strong>).",

    quickPhrases: [
      { en: "my first teaching job", ru: "моя первая работа преподавателем" },
      {
        en: "given an opportunity to teach at an exclusive university",
        ru: "предложили возможность преподать в элитном университете"
      },
      { en: "greatly challenged by my students", ru: "студенты сильно меня «прокачали» / ставили вызов" },
      {
        en: "great English speakers way ahead of me",
        ru: "отлично говорили по-английски и были далеко впереди меня"
      },
      {
        en: "not so confident, articulate, and fluent",
        ru: "не так уверенно, связно и бегло (о речи)"
      },
      { en: "a great learning experience for me", ru: "для меня это был ценный учебный опыт" },
      { en: "talking to myself in front of the mirror", ru: "говорить самому с собой перед зеркалом" },
      { en: "taking notes of the jokes", ru: "записывать шутки (чтобы потом использовать)" },
      { en: "improve my language skills", ru: "улучшить языковые навыки" },
      {
        en: "chosen different specializations when I got my first degree in Engineering",
        ru: "мог выбрать другие специализации после первого диплома по инженерии"
      },
      { en: "get my Master's in Marketing", ru: "поступить на магистратуру по маркетингу" },
      { en: "prepared for that", ru: "готов(а) ли я к этому" },
      { en: "started it up", ru: "начал(а) это (учёбу / программу)" },
      { en: "had some natural skills", ru: "есть природные способности" },
      { en: "doubts at the beginning", ru: "сомнения в начале" },
      {
        en: "choosing to do a Master's degree in this field was one of the most important decisions in my life",
        ru: "выбор магистратуры в этой сфере — одно из главных решений в жизни"
      },
      { en: "shaped me the way I am now", ru: "сформировало меня таким(ой), какой я сейчас" },
      {
        en: "a gleaming professor trying to contribute to the development of society",
        ru: "блестящий профессор, стремящийся внести вклад в развитие общества"
      },
      { en: "my first day at school", ru: "мой первый школьный день" },
      { en: "it was my mother who took me there", ru: "меня отвела мама (эмфаза: именно она)" },
      {
        en: "wear a school uniform: a white polo shirt, black trousers, and black leather shoes",
        ru: "носить форму: белое поло, чёрные брюки и чёрные кожаные туфли"
      },
      {
        en: "a small backpack with an exercise book, a pencil box, a bottle of water, and my lunch box inside",
        ru: "небольшой рюкзак: тетрадь, пенал, вода и ланчбокс"
      },
      { en: "happy and very excited to see other students", ru: "радость и возбуждение при виде одноклассников" },
      { en: "met my future friends and teachers", ru: "познакомился(ась) с будущими друзьями и учителями" },
      {
        en: "learnt many subjects like English, Maths, Science, Religion, PE, Art, and Social Studies",
        ru: "изучал(а) много предметов: английский, математика, естествознание, религия, физкультура, искусство, обществознание"
      },
      { en: "my first week is over", ru: "первая неделя закончилась" },
      {
        en: "My first teaching job at an upcoming college in my home province showed me the realities of work life",
        ru: "первая работа в новом колледже домашней провинции показала реальность рабочей жизни"
      },
      { en: "a fresh graduate from university", ru: "недавний выпускник университета" },
      { en: "get a job soon enough", ru: "поскорее устроиться на работу" },
      {
        en: "felt it was somewhat prestigious to teach at a college",
        ru: "казалось, преподавать в колледже — престижно"
      },
      {
        en: "exhausting to teach 11 classes in one week with an average of 25 students per class",
        ru: "изматывающе вести 11 пар в неделю при ~25 студентах в группе"
      },
      {
        en: "The hour daily commute to work and back added to the exhaustion",
        ru: "час дороги туда-обратно каждый день усиливал усталость"
      },
      { en: "not as prestigious a job as I imagined", ru: "работа не такая престижная, как я представлял(а)" },
      { en: "the first one was unforgettable", ru: "первую (работу) не забыть" },
      { en: "teaching English and Public Speaking classes", ru: "преподавание английского и ораторского мастерства" },
      {
        en: "The fellowship among teachers was genuine and warm",
        ru: "товарищество среди учителей было искренним и тёплым"
      },
      {
        en: "being in the classroom teaching real students",
        ru: "быть в аудитории с настоящими студентами"
      },
      { en: "fulfilling to see them learn and grow", ru: "приятно видеть, как они учатся и растут" },
      {
        en: "entered the classroom, and I'm still teaching",
        ru: "вошёл(ла) в класс — и всё ещё преподаю"
      },
      { en: "stay in the vocation for a little bit more", ru: "ещё немного останусь в этом призвании / профессии" },
      {
        en: "stay for a night in a hotel nearby for your first day of uni",
        ru: "переночевать в отеле рядом на первый день университета"
      },
      { en: "on my own on move-in day", ru: "один(одна) в день заселения в общежитие" },
      { en: "a massive hassle", ru: "настоящая головная боль / морока" },
      { en: "carry my shopping up to my room", ru: "затащить покупки к себе в комнату" },
      { en: "nice to have someone there for you", ru: "приятно, когда рядом есть свой человек" },
      { en: "flatmates' parents helped them move in", ru: "родители соседей помогали им переезжать" },
      { en: "first couple of days while they were with their family", ru: "первые дни, пока они были с семьёй" },
      { en: "My first day at university was very nerve-wracking", ru: "первый день в универе — очень нервный" },
      {
        en: "forgot what I actually meant to do when I finally got there",
        ru: "забыл(а), что вообще должен(на) был(а) делать по приезде"
      },
      { en: "propped the door open with a chair", ru: "придерживал(а) дверь стулом (оставил(а) приоткрытой)" },
      {
        en: "made friends with each and every flatmate popping in and saying hi",
        ru: "подружился(ась) с каждым соседом, который заглядывал поздороваться"
      },
      { en: "got my university ID card", ru: "получил(а) студенческий пропуск" },
      { en: "make the most of every second as they flew by", ru: "выжать максимум из каждой секунды — время летело" },
      { en: "The next thing I knew, I was graduating", ru: "не успел(а) оглянуться — уже выпуск" }
    ],

    tapPhrases: [
      { en: "I was very excited about my first teaching job.", ru: "сильно волновался(ась) из‑за первой работы преподавателем" },
      {
        en: "I didn't plan it but I was given an opportunity to teach at an exclusive university.",
        ru: "не планировал(а), но дали шанс преподать в элитном вузе"
      },
      { en: "I was greatly challenged by my students then.", ru: "студенты тогда сильно меня «прокачивали»" },
      {
        en: "They were great English speakers way ahead of me as I was not so confident, articulate, and fluent.",
        ru: "они свободнее говорили по-английски; я был(а) менее уверен(на), связен(на) и бегл(а)"
      },
      { en: "But whew, I survived!", ru: "фух, выдержал(а)!" },
      { en: "In fact, it was a great learning experience for me.", ru: "на самом деле для меня это был отличный учебный опыт" },
      {
        en: "I had to do a lot of practice like talking to myself in front of the mirror or taking notes of the jokes.",
        ru: "много репетировал(а): разговор с собой в зеркале и записи шуток"
      },
      { en: "It was funny but it helped a lot to improve my language skills.", ru: "смешно, но сильно помогло подтянуть язык" },

      {
        en: "Although I could have chosen different specializations when I got my first degree in Engineering, I decided to get my Master's in Marketing.",
        ru: "после инженерного бакалавриата мог выбрать другую специализацию, но пошёл(ла) на магистратуру по маркетингу"
      },
      { en: "I did not know if I was prepared for that.", ru: "не знал(а), готов(а) ли к этому" },
      {
        en: "I was only 21 when I started it up but my teachers believed that I had some natural skills.",
        ru: "всего 21, когда начал(а); преподаватели верили в мои природные способности"
      },
      {
        en: "Even though I had some doubts at the beginning, choosing to do a Master's degree in this field was one of the most important decisions in my life.",
        ru: "несмотря на сомнения в начале, выбор этой магистратуры — одно из главных решений в жизни"
      },
      {
        en: "It shaped me the way I am now: a gleaming professor trying to contribute to the development of society.",
        ru: "это сформировало меня; теперь я профессор и хочу помогать обществу расти"
      },

      { en: "I remember my first day at school; it was my mother who took me there.", ru: "помню первый день в школе — меня отвела мама" },
      {
        en: "I had to wear a school uniform: a white polo shirt, black trousers, and black leather shoes.",
        ru: "надел(а) форму: белое поло, чёрные брюки и туфли"
      },
      {
        en: "I had a small backpack with an exercise book, a pencil box, a bottle of water, and my lunch box inside.",
        ru: "в рюкзаке — тетрадь, пенал, вода и ланчбокс"
      },
      { en: "I was happy and very excited to see other students.", ru: "радость и волнение при виде других учеников" },
      { en: "That day I met my future friends and teachers.", ru: "в тот день познакомился(ась) с будущими друзьями и учителями" },
      {
        en: "Throughout the years I learnt many subjects like English, Maths, Science, Religion, PE, Art, and Social Studies.",
        ru: "за годы изучал(а) много предметов — от английского до обществознания"
      },
      { en: "Now my first week is over, but I still remember it.", ru: "первая неделя прошла, но помню её до сих пор" },

      { en: "33 hours a week.", ru: "33 часа в неделю" },
      { en: "A dollar an hour.", ru: "доллар в час" },
      {
        en: "My first teaching job at an upcoming college in my home province showed me the realities of work life.",
        ru: "работа в новом провинциальном колледже показала реальность трудовой жизни"
      },
      {
        en: "I was a fresh graduate from university and I wanted to get a job soon enough.",
        ru: "свежий выпускник и хотел(а) поскорее устроиться"
      },
      {
        en: "I accepted the offer because I felt it was somewhat prestigious to teach at a college.",
        ru: "согласился(ась), потому что казалось престижным преподавать в колледже"
      },
      {
        en: "But it was exhausting to teach 11 classes in one week with an average of 25 students per class.",
        ru: "но изматывающе — 11 занятий в неделю по ~25 человек"
      },
      {
        en: "The hour daily commute to work and back added to the exhaustion.",
        ru: "час дороги каждый день добавлял усталости"
      },
      { en: "It wasn't as prestigious a job as I imagined.", ru: "работа оказалась не такой престижной, как я думал(а)" },

      {
        en: "Throughout the years I had many jobs but the first one was unforgettable.",
        ru: "работ было много, но первую не забыть"
      },
      { en: "I loved what I did.", ru: "обожал(а) своё дело" },
      { en: "I loved teaching English and Public Speaking classes.", ru: "любил(а) вести английский и ораторский курс" },
      {
        en: "It was wonderful to meet new colleagues who soon became friends.",
        ru: "здорово познакомиться с коллегами, которые стали друзьями"
      },
      {
        en: "The fellowship among teachers was genuine and warm.",
        ru: "между учителями было искреннее, тёплое товарищество"
      },
      {
        en: "The best part for me was being in the classroom teaching real students.",
        ru: "лучшее — быть в классе с живыми студентами"
      },
      { en: "It was fulfilling to see them learn and grow.", ru: "приятно было видеть их прогресс" },
      {
        en: "It's been more than 20 years since I first entered the classroom, and I'm still teaching.",
        ru: "больше 20 лет с первого урока — всё ещё преподаю"
      },
      { en: "I guess I'll stay in the vocation for a little bit more.", ru: "думаю, ещё немного останусь в профессии" },

      {
        en: "I think it's a good idea for parents to come and stay for a night in a hotel nearby for your first day of uni.",
        ru: "родителям неплохо переночевать рядом на ваш первый универский день"
      },
      { en: "I, unfortunately, was on my own on move-in day and it was a massive hassle!", ru: "я один(одна) в день заселения — сплошная морока" },
      {
        en: "It was difficult trying to carry all the stuff on my own and I ended up having to ask a stranger outside my accommodation if they could help me carry my shopping up to my room,",
        ru: "тяжело тащить всё самому(ой); пришлось просить незнакомца у общаги помочь занести покупки"
      },
      { en: " which was super embarrassing.", ru: "очень неловко вышло" },
      {
        en: "It's also nice to have someone there for you, all of my flatmates' parents helped them move in so it was a bit lonely for me the first couple of days while they were with their family.",
        ru: "хорошо, когда рядом свой человек; у соседей помогали родители — мне было одиноко первые дни"
      },

      {
        en: "My first day at university was very nerve-wracking, as I completely forgot what I actually meant to do when I finally got there.",
        ru: "первый день в универе нервный — забыл(а), что должен(на) делать по приезде"
      },
      {
        en: "It was embarrassing at first when my mom roamed around the room making my bed and asking where to put my teddies.",
        ru: "сначала неловко: мама расставляла постель и спрашивала, куда мягкие игрушки"
      },
      {
        en: "But once she left I propped the door open with a chair and made friends with each and every flatmate popping in and saying hi.",
        ru: "когда уехала — приоткрыл(а) дверь стулом и поздоровался(ась) с каждым соседом"
      },
      { en: "I got my university ID card and went out with my friends.", ru: "получил(а) студбилет и пошёл(ла) гулять с друзьями" },
      { en: "I tried to make the most of every second as they flew by.", ru: "пытался(ась) не упускать ни секунды — время летело" },
      { en: "The next thing I knew, I was graduating!", ru: "не успел(а) оглянуться — уже выпуск!" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
