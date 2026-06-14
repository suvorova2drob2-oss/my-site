/**
 * ЕГЭ Listening Matching · Unit 4 · Great teachers (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-great-teachers",
    unitOrder: 4,
    title: "Unit 4 · Great teachers",
    examSection: "§1 · Задание 1",
    headerTitle: "Great teachers",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/4/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%204%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть, пока слушаешь:</strong></p>" +
      "<ul>" +
      "<li><strong>Главная мысль</strong> — не слово <em>teacher</em>, а <em>что именно</em> запомнилось спикеру.</li>" +
      "<li>ЕГЭ часто даёт <strong>перефраз</strong>: «belief in myself has improved» → «I grew and developed» (№6).</li>" +
      "<li>Ловушка <strong>№3</strong> (never stop learning) — близко к «improve and grow», но у Speaker C главное — <em>lots of qualities</em> (№1).</li>" +
      "<li>«Helped everyone understand» (№7) ≠ «attentive to students» (№2) — разные спикеры B и E.</li>" +
      "</ul>",
    statements: [
      {
        num: 1,
        text: "Lots of qualities make a teacher good."
      },
      {
        num: 2,
        text: "Being attentive to students is the key."
      },
      {
        num: 3,
        text: "Best teachers never stop learning themselves."
      },
      {
        num: 4,
        text: "Classroom management was her superpower."
      },
      {
        num: 5,
        text: "Her way of teaching drew me to the lessons."
      },
      {
        num: 6,
        text: "I grew and developed, thanks to my teacher."
      },
      {
        num: 7,
        text: "The teacher helped everyone understand the subject."
      }
    ],
    extraStatementNum: 3,
    /** A→5, B→7, C→1, D→4, E→2, F→6; лишнее — 3 */
    key: [5, 7, 1, 4, 2, 6],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "fun and diverse activities", ru: "весёлые и разнообразные занятия" },
      { en: "voice our opinions without feeling ashamed", ru: "высказывать мнение без стыда" },
      { en: "stared at the clock waiting for her class", ru: "смотрел на часы в ожидании урока" },
      { en: "everybody could catch the topic", ru: "каждый мог понять тему" },
      { en: "read the chapter over until everyone caught on", ru: "перечитывали главу, пока все не поймут" },
      { en: "passion for teaching", ru: "страсть к преподаванию" },
      { en: "Patience and empathy", ru: "терпение и эмпатия" },
      { en: "raise your hand when you want to talk", ru: "поднимать руку, когда хочешь говорить" },
      { en: "knew how to discipline her pupils", ru: "умела дисциплинировать учеников" },
      { en: "helped shy students to overcome their shyness", ru: "помогала застенчивым преодолеть стеснение" },
      { en: "my belief in myself has improved", ru: "поверил в себя сильнее" },
      { en: "teach me at lunchtime", ru: "занималась со мной в обед" }
    ],
    tapPhrases: [
      { en: "fun and diverse activities to engage us", ru: "разнообразные занятия, чтобы вовлечь нас" },
      { en: "stared at the clock every day, waiting for her class to start", ru: "каждый день ждал её урок, глядя на часы" },
      { en: "everybody could catch the topic of discussion", ru: "каждый мог понять тему обсуждения" },
      { en: "read the chapter over until everyone caught on", ru: "перечитывали главу, пока все не поймут" },
      { en: "passion for teaching and a genuine interest in helping students learn", ru: "страсть к преподаванию и желание помочь учиться" },
      { en: "When I say 'Jump!' you better ask me, 'How high?'", ru: "«Прыгай!» — «Насколько высоко?»" },
      { en: "If ever something was troubling me, my teacher knew about it", ru: "если что-то беспокоило — учительница знала" },
      { en: "my belief in myself has improved", ru: "я стал больше верить в себя" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          { en: "really boring subjects at school", ru: "скучные школьные предметы" },
          { en: "how they were taught", ru: "как их преподавали" },
          { en: "English lessons were completely unlike other subjects", ru: "уроки английского не похожи на другие предметы" },
          {
            en: "fun and diverse activities to engage us",
            ru: "весёлые разнообразные занятия",
            tip: "парафраз №5 · drew me to lessons"
          },
          { en: "voice our opinions without feeling ashamed", ru: "высказывать мнение без стыда" },
          { en: "a great sense of humour", ru: "отличное чувство юмора" },
          {
            en: "stared at the clock every day, waiting for her class to start",
            ru: "ждал урок, глядя на часы",
            tip: "парафраз №5"
          }
        ],
        fullText:
          "I am sure you all had a couple of really boring subjects at school, and most of the time it was because of how they were taught. Thanks to my teacher, my English lessons were completely unlike other subjects. She often arranged fun and diverse activities to engage us and allow us to voice our opinions without feeling ashamed. The best part was that she had a great sense of humour! This is why I stared at the clock every day, waiting for her class to start.",
        chunks: [
          {
            text:
              "I am sure you all had a couple of really boring subjects at school, and most of the time it was because of how they were taught.",
            showText: true
          },
          {
            text:
              "Thanks to my teacher, my English lessons were completely unlike other subjects.",
            showText: true
          },
          {
            text:
              "She often arranged fun and diverse activities to engage us and allow us to voice our opinions without feeling ashamed.",
            showText: true
          },
          {
            text:
              "The best part was that she had a great sense of humour! This is why I stared at the clock every day, waiting for her class to start.",
            showText: false
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "many teachers that supported me", ru: "много учителей, которые поддерживали" },
          { en: "Mr. Birm, my history teacher", ru: "Mr. Birm — учитель истории" },
          { en: "the greatest influence on me", ru: "самое большое влияние на меня" },
          {
            en: "taught the class at a level where everybody could catch the topic",
            ru: "вёл урок так, что все понимали тему",
            tip: "парафраз №7"
          },
          { en: "If the ship is hit, everyone on board goes down", ru: "если корабль подбили — падают все" },
          { en: "go back to items to help some unfortunate students catch on", ru: "возвращался к теме, чтобы помочь отстающим" },
          {
            en: "read the chapter over until everyone caught on",
            ru: "перечитывали главу, пока все не поймут",
            tip: "парафраз №7 · everyone understand"
          }
        ],
        fullText:
          "There have been many teachers that supported me along the way. However, Mr. Birm, my history teacher, was the greatest influence on me because he taught the class at a level where everybody could catch the topic of discussion. He went by the motto, 'If the ship is hit, everyone on board goes down.' Mr. Birm would go back to items to help some unfortunate students catch on. If that didn't work, we would read the chapter over until everyone caught on.",
        chunks: [
          {
            text:
              "There have been many teachers that supported me along the way. However, Mr. Birm, my history teacher, was the greatest influence on me because he taught the class at a level where everybody could catch the topic of discussion.",
            showText: true
          },
          {
            text:
              "He went by the motto, 'If the ship is hit, everyone on board goes down.'",
            showText: true
          },
          {
            text:
              "Mr. Birm would go back to items to help some unfortunate students catch on.",
            showText: true
          },
          {
            text:
              "If that didn't work, we would read the chapter over until everyone caught on.",
            showText: false
          }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          { en: "become a great teacher", ru: "стать отличным учителем" },
          { en: "passion for teaching", ru: "страсть к преподаванию", tip: "№1 · qualities" },
          { en: "a genuine interest in helping students learn", ru: "искренний интерес помогать учиться" },
          { en: "Patience and empathy are also key personality traits", ru: "терпение и эмпатия — ключевые черты", tip: "№1" },
          { en: "Building strong relationships with students", ru: "крепкие отношения с учениками" },
          { en: "a positive learning environment", ru: "позитивная среда обучения" },
          { en: "promoting a love of learning", ru: "пробуждать любовь к учёбе" },
          { en: "being adaptable and open to feedback", ru: "гибкость и открытость к обратной связи" },
          {
            en: "continuously improve and grow as a teacher",
            ru: "постоянно совершенствоваться как учитель",
            tip: "ловушка №3 · never stop learning"
          }
        ],
        fullText:
          "I think that to become a great teacher, it is important to have a passion for teaching and a genuine interest in helping students learn. Patience and empathy are also key personality traits. Building strong relationships with students and creating a positive learning environment are essential for promoting a love of learning. Lastly, being adaptable and open to feedback both from students and colleagues can help you continuously improve and grow as a teacher.",
        chunks: [
          {
            text:
              "I think that to become a great teacher, it is important to have a passion for teaching and a genuine interest in helping students learn.",
            showText: true
          },
          {
            text: "Patience and empathy are also key personality traits.",
            showText: true
          },
          {
            text:
              "Building strong relationships with students and creating a positive learning environment are essential for promoting a love of learning.",
            showText: true
          },
          {
            text:
              "Lastly, being adaptable and open to feedback both from students and colleagues can help you continuously improve and grow as a teacher.",
            showText: false
          }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          { en: "my best teacher was at primary school", ru: "лучший учитель — в начальной школе" },
          { en: "Her name was Ms. Johnson", ru: "её звали Ms. Johnson" },
          { en: "one of the most important speeches I have ever listened to", ru: "одна из важнейших речей в моей жизни" },
          { en: "Hello, my name is Ms. Johnson", ru: "меня зовут Ms. Johnson" },
          { en: "You raise your hand when you want to talk", ru: "поднимай руку, если хочешь говорить", tip: "№4 · classroom management" },
          { en: "ask me if you want to move", ru: "спроси, если хочешь встать / двигаться" },
          {
            en: "When I say 'Jump!' you better ask me, 'How high?'",
            ru: "«Прыгай!» — «Насколько высоко?»",
            tip: "№4 · discipline"
          },
          {
            en: "She surely knew how to discipline her pupils",
            ru: "она точно умела дисциплинировать учеников",
            tip: "парафраз №4 · superpower"
          }
        ],
        fullText:
          "I believe my best teacher was at primary school. Her name was Ms. Johnson. After checking attendance, she gave one of the most important speeches I have ever listened to in my life. 'Hello, my name is Ms. Johnson — not 'Miss', not 'Johnson', 'teacher', 'John', or 'son', — but Ms. Johnson. You raise your hand when you want to talk and ask me if you want to move, and when I say 'Jump!' you better ask me, 'How high?'' She surely knew how to discipline her pupils.",
        chunks: [
          {
            text:
              "I believe my best teacher was at primary school. Her name was Ms. Johnson.",
            showText: true
          },
          {
            text:
              "After checking attendance, she gave one of the most important speeches I have ever listened to in my life.",
            showText: true
          },
          {
            text:
              "'Hello, my name is Ms. Johnson — not 'Miss', not 'Johnson', 'teacher', 'John', or 'son', — but Ms. Johnson.",
            showText: true
          },
          {
            text:
              "You raise your hand when you want to talk and ask me if you want to move, and when I say 'Jump!' you better ask me, 'How high?''",
            showText: false
          },
          {
            text: "She surely knew how to discipline her pupils.",
            showText: true
          }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          {
            en: "If ever something was troubling me, my teacher knew about it and tried to help",
            ru: "если что-то беспокоило — учительница знала и помогала",
            tip: "парафраз №2 · attentive"
          },
          { en: "repeated my words to my parents", ru: "передавала мои слова родителям" },
          {
            en: "helped shy students to overcome their shyness and find friends",
            ru: "помогала застенчивым найти друзей",
            tip: "№2 · attentive to students"
          },
          { en: "whenever it was a student's birthday", ru: "когда у кого-то день рождения" },
          { en: "have the class create a book about them", ru: "класс делал книгу об имениннике" },
          { en: "full of drawings and well-wishes", ru: "с рисунками и пожеланиями" },
          { en: "I still keep one of these books", ru: "я до сих пор храню одну из таких книг" }
        ],
        fullText:
          "If ever something was troubling me, my teacher knew about it and tried to help. When I talked about what I wanted for Christmas, she repeated my words to my parents. She helped shy students to overcome their shyness and find friends. Whenever it was a student's birthday, she'd have the class create a book about them, full of drawings and well-wishes. I still keep one of these books, and I remember the poem my classmates wrote for me.",
        chunks: [
          {
            text:
              "If ever something was troubling me, my teacher knew about it and tried to help.",
            showText: true
          },
          {
            text:
              "When I talked about what I wanted for Christmas, she repeated my words to my parents.",
            showText: true
          },
          {
            text:
              "She helped shy students to overcome their shyness and find friends.",
            showText: true
          },
          {
            text:
              "Whenever it was a student's birthday, she'd have the class create a book about them, full of drawings and well-wishes.",
            showText: false
          },
          {
            text:
              "I still keep one of these books, and I remember the poem my classmates wrote for me.",
            showText: true
          }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          { en: "my English was very bad", ru: "мой английский был очень слабым" },
          { en: "get low marks in every test", ru: "получал низкие баллы на каждом тесте" },
          { en: "She never blamed me for low marks", ru: "никогда не винила за плохие оценки" },
          { en: "teach me at lunchtime", ru: "занималась со мной в обеденный перерыв" },
          { en: "advised me to read more English books", ru: "советовала читать больше книг" },
          { en: "encouraged me to talk about things that made me feel bad", ru: "поощряла говорить о том, что расстраивало" },
          { en: "help me to overcome these difficulties", ru: "помогала преодолевать трудности" },
          { en: "It was like we were best friends", ru: "мы были как лучшие друзья" },
          {
            en: "not only my English, but also my belief in myself has improved",
            ru: "улучился не только английский, но и вера в себя",
            tip: "парафраз №6 · grew and developed"
          }
        ],
        fullText:
          "When I started primary school, my English was very bad. I would get low marks in every test. Fortunately, I met a good English teacher. She never blamed me for low marks. She would teach me at lunchtime, and advised me to read more English books. She also encouraged me to talk about things that made me feel bad, and she would help me to overcome these difficulties. It was like we were best friends. Because of her, not only my English, but also my belief in myself has improved.",
        chunks: [
          {
            text:
              "When I started primary school, my English was very bad. I would get low marks in every test.",
            showText: true
          },
          {
            text:
              "Fortunately, I met a good English teacher. She never blamed me for low marks.",
            showText: true
          },
          {
            text:
              "She would teach me at lunchtime, and advised me to read more English books.",
            showText: true
          },
          {
            text:
              "She also encouraged me to talk about things that made me feel bad, and she would help me to overcome these difficulties.",
            showText: false
          },
          {
            text:
              "It was like we were best friends. Because of her, not only my English, but also my belief in myself has improved.",
            showText: true
          }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 5,
        trapNums: [1],
        keyLineRu:
          "Утверждение 5 — её способ преподавания затягивал на уроки.",
        evidencePromptRu:
          "<strong>Speaker A · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — fun activities, humour, ждал урок → <strong>№5</strong>.",
        distractorPromptRu:
          "<strong>Speaker A · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «unlike boring subjects» → ловушка <strong>№1</strong> (qualities), не №5.",
        promptRu:
          "<strong>Speaker A.</strong> Зелёным — drew me to lessons. Красным — good teacher qualities list (№1).",
        segments: [
          {
            kind: "glue",
            html:
              "Thanks to my teacher, my English lessons were completely unlike other subjects. She often arranged "
          },
          {
            kind: "hit",
            sol: "e",
            text: "fun and diverse activities to engage us",
            explainRu:
              "Парафраз <strong>№5</strong>: способ teaching притягивал к урокам."
          },
          {
            kind: "glue",
            html: " and allow us to voice our opinions without feeling ashamed. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "she had a great sense of humour",
            explainRu:
              "Часть <strong>№5</strong>: manner of teaching — engaging and fun."
          },
          {
            kind: "glue",
            html: "! This is why "
          },
          {
            kind: "hit",
            sol: "e",
            text: "I stared at the clock every day, waiting for her class to start",
            explainRu:
              "Прямая опора <strong>№5</strong>: drawn to her lessons."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 7,
        trapNums: [1],
        keyLineRu:
          "Утверждение 7 — учитель помогал всем понять предмет.",
        evidencePromptRu:
          "<strong>Speaker B · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — everybody catch on → <strong>№7</strong>.",
        distractorPromptRu:
          "<strong>Speaker B · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «greatest influence» → <strong>№1</strong>, не №7.",
        promptRu:
          "<strong>Speaker B.</strong> Зелёным — everyone understand. Красным — influence/qualities.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 1,
            text: "was the greatest influence on me",
            explainRu:
              "Ловушка <strong>№1</strong> (good teacher): influence — не «helped everyone understand» (№7)."
          },
          {
            kind: "glue",
            html: " because he "
          },
          {
            kind: "hit",
            sol: "e",
            text: "taught the class at a level where everybody could catch the topic of discussion",
            explainRu:
              "Парафраз <strong>№7</strong>: everyone could understand."
          },
          {
            kind: "glue",
            html:
              ". He went by the motto, 'If the ship is hit, everyone on board goes down.' Mr. Birm would go back to items to help some unfortunate students catch on. If that didn't work, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "we would read the chapter over until everyone caught on",
            explainRu:
              "Прямая опора <strong>№7</strong>: no one left behind."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 1,
        trapNums: [3],
        keyLineRu:
          "Утверждение 1 — много качеств делают учителя хорошим.",
        evidencePromptRu:
          "<strong>Speaker C · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — passion, patience, empathy, relationships → <strong>№1</strong>.",
        distractorPromptRu:
          "<strong>Speaker C · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — improve and grow → ловушка <strong>№3</strong>, не №1.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным — list of qualities. Красным — never stop learning (№3).",
        segments: [
          {
            kind: "glue",
            html: "I think that to become a great teacher, it is important to have "
          },
          {
            kind: "hit",
            sol: "e",
            text: "a passion for teaching and a genuine interest in helping students learn",
            explainRu:
              "Качество 1 из списка → <strong>№1</strong>."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "Patience and empathy are also key personality traits",
            explainRu:
              "Ещё качества → <strong>№1</strong>."
          },
          {
            kind: "glue",
            html:
              ". Building strong relationships with students and creating a positive learning environment are essential for promoting a love of learning. Lastly, being adaptable and open to feedback both from students and colleagues can help you "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "continuously improve and grow as a teacher",
            explainRu:
              "Ловушка <strong>№3</strong> (never stop learning): близко, но главная мысль C — <em>lots of qualities</em> (№1)."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 4,
        trapNums: [2],
        keyLineRu:
          "Утверждение 4 — classroom management была её сильной стороной.",
        evidencePromptRu:
          "<strong>Speaker D · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — rules, discipline → <strong>№4</strong>.",
        distractorPromptRu:
          "<strong>Speaker D · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «important speech» → <strong>№2</strong> (attentive), не №4.",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным — discipline / rules. Красным — attentive (№2).",
        segments: [
          {
            kind: "glue",
            html:
              "After checking attendance, she gave one of the most important speeches I have ever listened to in my life. 'Hello, my name is Ms. Johnson — not 'Miss', not 'Johnson', 'teacher', 'John', or 'son', — but Ms. Johnson. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "You raise your hand when you want to talk and ask me if you want to move",
            explainRu:
              "Правила класса → <strong>№4</strong> classroom management."
          },
          {
            kind: "glue",
            html: ", and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "when I say 'Jump!' you better ask me, 'How high?'",
            explainRu:
              "Строгая дисциплина → <strong>№4</strong> superpower."
          },
          {
            kind: "glue",
            html: "' "
          },
          {
            kind: "hit",
            sol: "e",
            text: "She surely knew how to discipline her pupils",
            explainRu:
              "Прямой парафраз <strong>№4</strong>: classroom management."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 2,
        trapNums: [6],
        keyLineRu:
          "Утверждение 2 — внимание к ученикам — главное.",
        evidencePromptRu:
          "<strong>Speaker E · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — knew troubles, helped shy kids → <strong>№2</strong>.",
        distractorPromptRu:
          "<strong>Speaker E · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — birthday book / poem → <strong>№6</strong> (grew), не №2.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным — attentive. Красным — personal growth (№6).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "If ever something was troubling me, my teacher knew about it and tried to help",
            explainRu:
              "Парафраз <strong>№2</strong>: attentive to students."
          },
          {
            kind: "glue",
            html:
              ". When I talked about what I wanted for Christmas, she repeated my words to my parents. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "She helped shy students to overcome their shyness and find friends",
            explainRu:
              "Внимание к каждому → <strong>№2</strong>."
          },
          {
            kind: "glue",
            html:
              ". Whenever it was a student's birthday, she'd have the class create a book about them, full of drawings and well-wishes. "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 6,
            text: "I still keep one of these books, and I remember the poem my classmates wrote for me",
            explainRu:
              "Ловушка <strong>№6</strong> (grew/developed): warm memory — не про личный рост спикера (№6 = F)."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 6,
        trapNums: [5],
        keyLineRu:
          "Утверждение 6 — благодаря учительнице я вырос и развился.",
        evidencePromptRu:
          "<strong>Speaker F · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — English + belief in myself improved → <strong>№6</strong>.",
        distractorPromptRu:
          "<strong>Speaker F · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — good English teacher / read books → <strong>№5</strong>, не №6.",
        promptRu:
          "<strong>Speaker F.</strong> Зелёным — grew/developed. Красным — teaching style (№5).",
        segments: [
          {
            kind: "glue",
            html:
              "When I started primary school, my English was very bad. I would get low marks in every test. Fortunately, I met a good English teacher. She never blamed me for low marks. She would teach me at lunchtime, and advised me to read more English books. She also encouraged me to talk about things that made me feel bad, and she would help me to overcome these difficulties. It was like we were best friends. Because of her, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "not only my English, but also my belief in myself has improved",
            explainRu:
              "Прямой парафраз <strong>№6</strong>: I grew and developed."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
