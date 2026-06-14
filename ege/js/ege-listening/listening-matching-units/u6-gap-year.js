/**
 * ЕГЭ Listening Matching · Unit 6 · Gap year (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-gap-year",
    unitOrder: 6,
    title: "Unit 6 · Gap year",
    examSection: "§1 · Задание 1",
    headerTitle: "Gap year",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/6/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%206%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть, пока слушаешь:</strong></p>" +
      "<ul>" +
      "<li><strong>Главная мысль</strong> — зачем человек брал gap year, а не отдельные слова <em>college</em> или <em>travel</em>.</li>" +
      "<li>ЕГЭ часто даёт <strong>перефраз</strong>: «defer enrollment» → get your place at college before (№6).</li>" +
      "<li>№5 (wide choice of opportunities) — <strong>лишнее</strong>: никто не говорит «сейчас огромный выбор программ» как главную мысль.</li>" +
      "<li>Ловушки: у C есть «travel» — но ключ <strong>№1</strong> (лучший абитуриент); у B «abroad» — но ключ <strong>№2</strong> (отдых от учёбы).</li>" +
      "</ul>",
    statements: [
      { num: 1, text: "A gap year makes you a better college applicant." },
      { num: 2, text: "I took a gap year to have some rest." },
      { num: 3, text: "International experience during a gap year improved my skills." },
      { num: 4, text: "It's a good chance to prepare for further education." },
      { num: 5, text: "There is a wide choice of gap year opportunities nowadays." },
      { num: 6, text: "It's better to get your place at college before taking a gap year." },
      { num: 7, text: "My gap year really helped me to define my interests." }
    ],
    extraStatementNum: 5,
    /** A→4, B→2, C→1, D→3, E→6, F→7; лишнее — 5 */
    key: [4, 2, 1, 3, 6, 7],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "study-free zone", ru: "полностью «без учёбы»" },
      { en: "pursue an international Master's degree", ru: "поступать на зарубежную магистратуру" },
      { en: "English proficiency test", ru: "тест на знание английского" },
      { en: "sick to death with classrooms", ru: "до тошноты надоело сидеть в классах" },
      { en: "going with your gut feeling", ru: "слушать интуицию" },
      { en: "perform better", ru: "учиться лучше" },
      { en: "diverse perspective", ru: "более широкий взгляд на мир" },
      { en: "exchange programme", ru: "программа обмена" },
      { en: "host family", ru: "принимающая семья" },
      { en: "deferring your enrollment", ru: "отложить зачисление в вуз" },
      { en: "holds your spot", ru: "сохраняет за вами место" },
      { en: "truly passionate about", ru: "искренне увлечён чем-то" }
    ],
    tapPhrases: [
      { en: "invest some time in preparation", ru: "вложить время в подготовку" },
      { en: "English proficiency test", ru: "тест на знание английского" },
      { en: "sick to death with classrooms", ru: "до тошноты надоело сидеть в классах" },
      { en: "took two years away", ru: "взял два года перерыва" },
      { en: "perform better", ru: "учатся лучше" },
      { en: "better college applicant", ru: "более сильный абитуриент" },
      { en: "exchange programme based in Germany", ru: "программа обмена в Германии" },
      { en: "boosted my social and adaptation skills", ru: "улучшил социальные навыки и адаптацию" },
      { en: "deferring your enrollment", ru: "отложить зачисление" },
      { en: "holds your spot", ru: "сохраняет место" },
      { en: "switch what I wanted to major in", ru: "сменить специальность" },
      { en: "define my interests", ru: "определиться с интересами" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          {
            en: "does not have to be an entirely study-free zone",
            ru: "не обязан быть полностью «без учёбы»",
            tip: "№4 · подготовка, не отдых"
          },
          {
            en: "decided to pursue an international Master's degree",
            ru: "решил поступать на зарубежную магистратуру",
            tip: "№4 · further education"
          },
          {
            en: "invest some time in preparation",
            ru: "вложить время в подготовку",
            tip: "парафраз №4"
          },
          {
            en: "programmes taught in English",
            ru: "программы на английском языке"
          },
          {
            en: "submit an English proficiency test",
            ru: "сдать тест на знание английского",
            tip: "№4"
          },
          {
            en: "do not have to sit any of these exams",
            ru: "не обязательно сдавать эти экзамены"
          },
          {
            en: "compiling your Master's application",
            ru: "собирать документы на магистратуру",
            tip: "№4"
          },
          {
            en: "take up a considerable portion of your free time",
            ru: "занять большую часть свободного времени",
            tip: "№4"
          },
          {
            en: "factor in these points",
            ru: "учесть эти моменты при планировании"
          },
          {
            en: "planning your gap year",
            ru: "планировать академический отпуск"
          },
          {
            en: "applicants are usually required",
            ru: "от абитуриентов обычно требуют"
          },
          {
            en: "a good chance to prepare",
            ru: "хороший шанс подготовиться",
            tip: "парафраз №4"
          },
          { en: "For programmes taught in English", ru: "для программ на английском" },
          { en: "required to submit", ru: "нужно предоставить / сдать" },
          { en: "these exams", ru: "эти экзамены" },
          { en: "your free time", ru: "ваше свободное время" },
          { en: "Make sure to factor in", ru: "обязательно учитывайте" },
          { en: "international Master's degree", ru: "зарубежная магистратура", tip: "№4" },
          { en: "gap year", ru: "академический отпуск (год между школой и вузом)" },
          { en: "further education", ru: "дальнейшее обучение", tip: "парафраз №4" }
        ],
        fullText:
          "A gap year does not have to be an entirely study-free zone. I, for example, have decided to pursue an international Master's degree, so I need to invest some time in preparation. For programmes taught in English, applicants are usually required to submit an English proficiency test. Still, even if you do not have to sit any of these exams, compiling your Master's application alone may take up a considerable portion of your free time. Make sure to factor in these points when planning your gap year.",
        chunks: [
          {
            text:
              "A gap year does not have to be an entirely study-free zone. I, for example, have decided to pursue an international Master's degree, so I need to invest some time in preparation.",
            showText: true
          },
          {
            text:
              "For programmes taught in English, applicants are usually required to submit an English proficiency test.",
            showText: true
          },
          {
            text:
              "Still, even if you do not have to sit any of these exams, compiling your Master's application alone may take up a considerable portion of your free time.",
            showText: true
          },
          {
            text: "Make sure to factor in these points when planning your gap year.",
            showText: false
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "There isn't a hard and fast rule", ru: "нет единого жёсткого правила" },
          { en: "it's different for everyone", ru: "у каждого по-своему" },
          {
            en: "sick to death with classrooms, homework assignments, and education",
            ru: "до тошноты надоело: классы, домашка и учёба",
            tip: "парафраз №2 · rest"
          },
          { en: "I needed to get out", ru: "мне нужно было вырваться", tip: "№2" },
          {
            en: "took two years away and lived abroad",
            ru: "взял два года перерыва и жил за границей",
            tip: "№2 · gap year для отдыха"
          },
          { en: "It was the best thing for me", ru: "для меня это было лучшим решением" },
          { en: "When I got back to university", ru: "когда вернулся в университет" },
          { en: "I was rejuvenated", ru: "я снова «ожил»" },
          { en: "I felt fresh", ru: "чувствовал себя обновлённым" },
          {
            en: "a lot more motivation to concentrate on education",
            ru: "гораздо больше мотивации учиться",
            tip: "после отдыха — не №2 напрямую, но контекст"
          },
          {
            en: "concentrate on education, and not on social life",
            ru: "сосредоточиться на учёбе, а не на социальной жизни"
          },
          {
            en: "going with your gut feeling usually works out best",
            ru: "слушать интуицию обычно срабатывает лучше всего"
          },
          { en: "have some rest", ru: "отдохнуть", tip: "парафраз №2" },
          { en: "For me", ru: "в моём случае" },
          { en: "lived abroad", ru: "жил за границей", tip: "ловушка №3" },
          { en: "got back to university", ru: "вернулся в университет" },
          { en: "not on social life", ru: "а не на светскую жизнь" },
          { en: "hard and fast rule", ru: "жёсткое универсальное правило" },
          { en: "homework assignments", ru: "домашние задания" },
          { en: "the best thing for me", ru: "лучшее для меня решение" },
          { en: "I find that", ru: "я считаю, что" }
        ],
        fullText:
          "There isn't a hard and fast rule; it's different for everyone. For me, I was sick to death with classrooms, homework assignments, and education. I needed to get out. So, I took two years away and lived abroad. It was the best thing for me. When I got back to university, I was rejuvenated. I felt fresh and had a lot more motivation to concentrate on education, and not on social life. I find that going with your gut feeling usually works out best.",
        chunks: [
          {
            text:
              "There isn't a hard and fast rule; it's different for everyone. For me, I was sick to death with classrooms, homework assignments, and education.",
            showText: true
          },
          {
            text: "I needed to get out. So, I took two years away and lived abroad. It was the best thing for me.",
            showText: true
          },
          {
            text:
              "When I got back to university, I was rejuvenated. I felt fresh and had a lot more motivation to concentrate on education, and not on social life.",
            showText: true
          },
          {
            text: "I find that going with your gut feeling usually works out best.",
            showText: false
          }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          {
            en: "colleges actually like when their students take a gap year",
            ru: "вузам нравится, когда студенты берут gap year",
            tip: "№1 · better applicant"
          },
          {
            en: "They usually perform better",
            ru: "они обычно учатся лучше",
            tip: "№1"
          },
          { en: "more involved in school", ru: "активнее в учёбе", tip: "№1" },
          { en: "more mature", ru: "более зрелые", tip: "№1" },
          {
            en: "a better idea of what they want to do",
            ru: "лучше понимают, чего хотят",
            tip: "ловушка к №7, но ключ №1"
          },
          {
            en: "show schools that you are intentional",
            ru: "показать вузам, что вы действуете осознанно",
            tip: "№1"
          },
          { en: "value the diversity of students", ru: "ценят разнообразие студентов" },
          {
            en: "Taking a gap year and travelling",
            ru: "взять gap year и путешествовать",
            tip: "ловушка №5 (wide choice), не главная мысль"
          },
          {
            en: "a much more diverse perspective",
            ru: "гораздо более широкий взгляд на мир",
            tip: "не №5 · opportunities"
          },
          {
            en: "lived domestically their whole lives",
            ru: "всю жизнь жили только в своей стране"
          },
          {
            en: "makes you a better college applicant",
            ru: "делает вас более сильным абитуриентом",
            tip: "парафраз №1"
          },
          { en: "better college applicant", ru: "более сильный абитуриент", tip: "№1" },
          { en: "A lot of colleges", ru: "многие колледжи / вузы" },
          { en: "take a gap year", ru: "взять академический отпуск" },
          { en: "what they want to do", ru: "чем они хотят заниматься" },
          { en: "you are intentional", ru: "вы действуете осознанно" },
          { en: "the diversity of students", ru: "разнообразие студентов" },
          { en: "travelling", ru: "путешествия", tip: "ловушка №5" },
          { en: "other students", ru: "другие студенты" },
          { en: "their whole lives", ru: "всю жизнь" }
        ],
        fullText:
          "A lot of colleges actually like when their students take a gap year. They usually perform better, are more involved in school, and are more mature. They also have a better idea of what they want to do. It can show schools that you are intentional. Colleges also value the diversity of students. Taking a gap year and travelling can give you a much more diverse perspective than other students who have lived domestically their whole lives.",
        chunks: [
          {
            text:
              "A lot of colleges actually like when their students take a gap year. They usually perform better, are more involved in school, and are more mature.",
            showText: true
          },
          {
            text:
              "They also have a better idea of what they want to do. It can show schools that you are intentional.",
            showText: true
          },
          {
            text:
              "Colleges also value the diversity of students. Taking a gap year and travelling can give you a much more diverse perspective than other students who have lived domestically their whole lives.",
            showText: false
          }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          {
            en: "really benefited from taking a gap year",
            ru: "gap year принёс мне большую пользу",
            tip: "№3 · skills"
          },
          {
            en: "During my senior year of high school",
            ru: "на последнем курсе школы"
          },
          {
            en: "apply for an exchange programme based in Germany",
            ru: "подал заявку на программу обмена в Германии",
            tip: "№3 · international"
          },
          { en: "After being accepted", ru: "после зачисления" },
          {
            en: "put into a German high school",
            ru: "зачислили в немецкую школу",
            tip: "№3"
          },
          {
            en: "lived with a host family",
            ru: "жил в принимающей семье",
            tip: "№3"
          },
          {
            en: "My time abroad not only helped me learn German",
            ru: "время за границей помогло выучить немецкий",
            tip: "№3"
          },
          {
            en: "boosted my social and adaptation skills",
            ru: "улучил мои социальные навыки и умение адаптироваться",
            tip: "парафраз №3 · improved my skills"
          },
          {
            en: "gave me a new perspective",
            ru: "дал новый взгляд на жизнь"
          },
          {
            en: "how I wanted to treat myself and those around me",
            ru: "как относиться к себе и к окружающим"
          },
          {
            en: "International experience during a gap year",
            ru: "международный опыт во время gap year",
            tip: "парафраз №3"
          },
          { en: "improved my skills", ru: "улучил мои навыки", tip: "№3" },
          { en: "Personally", ru: "лично для меня" },
          { en: "senior year of high school", ru: "последний курс школы" },
          { en: "decided to apply", ru: "решил подать заявку" },
          { en: "based in Germany", ru: "с базой в Германии" },
          { en: "learn German", ru: "выучить немецкий" },
          { en: "social and adaptation skills", ru: "социальные навыки и умение адаптироваться", tip: "№3" },
          { en: "Overall", ru: "в целом" },
          { en: "those around me", ru: "окружающие" }
        ],
        fullText:
          "Personally, I really benefited from taking a gap year. During my senior year of high school, I decided to apply for an exchange programme based in Germany. After being accepted, I was put into a German high school and lived with a host family. My time abroad not only helped me learn German, but also boosted my social and adaptation skills. Overall, it gave me a new perspective on how I wanted to treat myself and those around me.",
        chunks: [
          {
            text:
              "Personally, I really benefited from taking a gap year. During my senior year of high school, I decided to apply for an exchange programme based in Germany.",
            showText: true
          },
          {
            text:
              "After being accepted, I was put into a German high school and lived with a host family.",
            showText: true
          },
          {
            text:
              "My time abroad not only helped me learn German, but also boosted my social and adaptation skills.",
            showText: true
          },
          {
            text:
              "Overall, it gave me a new perspective on how I wanted to treat myself and those around me.",
            showText: false
          }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          {
            en: "apply to schools, get your scholarship information",
            ru: "подать документы в вузы и узнать про стипендии",
            tip: "№6 · до gap year"
          },
          {
            en: "talk to them about deferring your enrollment",
            ru: "договориться об отложенном зачислении",
            tip: "парафраз №6"
          },
          {
            en: "This holds your spot, and your scholarships",
            ru: "так сохраняется место и стипендии",
            tip: "№6 · get place before"
          },
          {
            en: "takes the pain away from having to apply to schools during your gap year",
            ru: "избавляет от необходимости подавать документы уже во время gap year",
            tip: "№6"
          },
          {
            en: "something you can come back to",
            ru: "есть к чему вернуться",
            tip: "№6"
          },
          {
            en: "makes the gap year a little more freeing",
            ru: "gap year становится спокойнее"
          },
          {
            en: "whether or not a gap year is right for you",
            ru: "подходит ли вам gap year"
          },
          {
            en: "when it comes to what schools think",
            ru: "что касается мнения вузов"
          },
          {
            en: "you don't have to worry",
            ru: "можно не переживать"
          },
          {
            en: "get your place at college before",
            ru: "закрепить место в вузе заранее",
            tip: "парафраз №6"
          },
          {
            en: "before taking a gap year",
            ru: "до того как взять gap year",
            tip: "№6"
          },
          { en: "deferring your enrollment", ru: "отложить зачисление", tip: "№6" },
          { en: "I think it's a good idea", ru: "думаю, это хорошая идея" },
          { en: "your scholarships", ru: "ваши стипендии" },
          { en: "during your gap year", ru: "во время gap year" },
          { en: "you can come back to", ru: "к чему можно вернуться" },
          { en: "a little more freeing", ru: "чуть более свободным" },
          { en: "Overall", ru: "в целом" },
          { en: "what schools think", ru: "что думают вузы" },
          { en: "scholarship information", ru: "информация о стипендиях", tip: "№6" }
        ],
        fullText:
          "I think it's a good idea to apply to schools, get your scholarship information, and then talk to them about deferring your enrollment. This holds your spot, and your scholarships. It also takes the pain away from having to apply to schools during your gap year. And you always know if you have something you can come back to, which makes the gap year a little more freeing. Overall, it depends on whether or not a gap year is right for you. But when it comes to what schools think, you don't have to worry.",
        chunks: [
          {
            text:
              "I think it's a good idea to apply to schools, get your scholarship information, and then talk to them about deferring your enrollment.",
            showText: true
          },
          {
            text:
              "This holds your spot, and your scholarships. It also takes the pain away from having to apply to schools during your gap year.",
            showText: true
          },
          {
            text:
              "And you always know if you have something you can come back to, which makes the gap year a little more freeing.",
            showText: true
          },
          {
            text:
              "Overall, it depends on whether or not a gap year is right for you. But when it comes to what schools think, you don't have to worry.",
            showText: false
          }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          {
            en: "influenced my university choice",
            ru: "повлиял на выбор университета",
            tip: "№7 · define interests"
          },
          {
            en: "didn't like the American style of teaching",
            ru: "не понравился американский стиль преподавания",
            tip: "№7"
          },
          {
            en: "decided to switch what I wanted to major in",
            ru: "решил сменить специальность",
            tip: "парафраз №7"
          },
          {
            en: "finding a topic I was truly passionate about",
            ru: "найти тему, которая меня по-настоящему увлекла",
            tip: "№7"
          },
          {
            en: "took the opportunity of taking a gap year",
            ru: "воспользовался возможностью взять gap year"
          },
          {
            en: "more motivated than I ever was in school",
            ru: "мотивирован сильнее, чем когда-либо в школе",
            tip: "№7"
          },
          {
            en: "a major I'm excited to study",
            ru: "специальность, которую хочется изучать",
            tip: "№7"
          },
          {
            en: "Without a gap year, I would've never made these decisions",
            ru: "без gap year я бы никогда не принял эти решения",
            tip: "№7"
          },
          {
            en: "helped me to define my interests",
            ru: "помог определиться с интересами",
            tip: "парафраз №7"
          },
          { en: "define my interests", ru: "определиться с интересами", tip: "№7" },
          {
            en: "discovered I didn't like",
            ru: "понял, что мне не нравится",
            tip: "№7"
          },
          { en: "My gap year", ru: "мой академический отпуск" },
          { en: "university choice", ru: "выбор университета", tip: "ловушка №1" },
          { en: "style of teaching", ru: "стиль преподавания" },
          { en: "major in university", ru: "специальность в университете", tip: "№7" },
          { en: "studying at university", ru: "учиться в университете" },
          { en: "extremely happy", ru: "очень рад" },
          { en: "I feel more motivated", ru: "я более мотивирован", tip: "№7" },
          { en: "made these decisions", ru: "принял эти решения", tip: "№7" }
        ],
        fullText:
          "My gap year influenced my university choice, as I discovered I didn't like the American style of teaching. I also decided to switch what I wanted to major in university after finding a topic I was truly passionate about. I've only been studying at university for 2 years, but I'm extremely happy I took the opportunity of taking a gap year. I feel more motivated than I ever was in school, as now I have a major I'm excited to study. Without a gap year, I would've never made these decisions.",
        chunks: [
          {
            text:
              "My gap year influenced my university choice, as I discovered I didn't like the American style of teaching.",
            showText: true
          },
          {
            text:
              "I also decided to switch what I wanted to major in university after finding a topic I was truly passionate about.",
            showText: true
          },
          {
            text:
              "I've only been studying at university for 2 years, but I'm extremely happy I took the opportunity of taking a gap year.",
            showText: true
          },
          {
            text:
              "I feel more motivated than I ever was in school, as now I have a major I'm excited to study. Without a gap year, I would've never made these decisions.",
            showText: false
          }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 4,
        trapNums: [1],
        keyLineRu:
          "Утверждение 4 — gap year для подготовки к магистратуре (Master's, exams, application).",
        evidencePromptRu:
          "<strong>Speaker A · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — Master's / preparation / application → <strong>№4</strong>.",
        distractorPromptRu:
          "<strong>Speaker A · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — study-free zone → ловушка «отдых», не №4.",
        promptRu:
          "<strong>Speaker A.</strong> Зелёным — prepare for further education. Красным — not study-free (не отдых).",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 1,
            text: "does not have to be an entirely study-free zone",
            explainRu:
              "Ловушка <strong>№1</strong> (applicant): A учится в gap year, не «лучший абитуриент»."
          },
          {
            kind: "glue",
            html: ". I, for example, have "
          },
          {
            kind: "hit",
            sol: "e",
            text: "decided to pursue an international Master's degree",
            explainRu:
              "Прямая опора <strong>№4</strong>: further education."
          },
          {
            kind: "glue",
            html: ", so I need to "
          },
          {
            kind: "hit",
            sol: "e",
            text: "invest some time in preparation",
            explainRu:
              "Парафраз <strong>№4</strong>: prepare for further education."
          },
          {
            kind: "glue",
            html:
              ". For programmes taught in English, applicants are usually required to submit an English proficiency test. Still, even if you do not have to sit any of these exams, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "compiling your Master's application alone may take up a considerable portion of your free time",
            explainRu:
              "Подготовка документов → <strong>№4</strong>."
          },
          {
            kind: "glue",
            html: ". Make sure to factor in these points when planning your gap year."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 2,
        trapNums: [3],
        keyLineRu:
          "Утверждение 2 — устал от учёбы, нужен отдых (sick to death, get out).",
        evidencePromptRu:
          "<strong>Speaker B · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — sick to death / get out → <strong>№2</strong>.",
        distractorPromptRu:
          "<strong>Speaker B · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — lived abroad → ловушка <strong>№3</strong> (skills), не №2.",
        promptRu:
          "<strong>Speaker B.</strong> Зелёным — rest from education. Красным — abroad (№3).",
        segments: [
          {
            kind: "glue",
            html: "There isn't a hard and fast rule; it's different for everyone. For me, I was "
          },
          {
            kind: "hit",
            sol: "e",
            text: "sick to death with classrooms, homework assignments, and education",
            explainRu:
              "Парафраз <strong>№2</strong>: have some rest."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "I needed to get out",
            explainRu:
              "Нужен перерыв → <strong>№2</strong>."
          },
          {
            kind: "glue",
            html: ". So, I "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "took two years away and lived abroad",
            explainRu:
              "Ловушка <strong>№3</strong> (international skills): abroad есть, но ключ — отдых (№2)."
          },
          {
            kind: "glue",
            html:
              ". It was the best thing for me. When I got back to university, I was rejuvenated. I felt fresh and had a lot more motivation to concentrate on education, and not on social life. I find that going with your gut feeling usually works out best."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 1,
        trapNums: [5, 7],
        keyLineRu:
          "Утверждение 1 — вузам нравятся gap year студенты (perform better, mature).",
        evidencePromptRu:
          "<strong>Speaker C · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — colleges like / perform better → <strong>№1</strong>.",
        distractorPromptRu:
          "<strong>Speaker C · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — travelling / diverse → <strong>№5</strong> или <strong>№7</strong>, не №1.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным — better applicant. Красным — travel (№5) / interests (№7).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "colleges actually like when their students take a gap year",
            explainRu:
              "Вузы ценят gap year → <strong>№1</strong> better applicant."
          },
          {
            kind: "glue",
            html: ". They usually "
          },
          {
            kind: "hit",
            sol: "e",
            text: "perform better, are more involved in school, and are more mature",
            explainRu:
              "Сильнее как студенты → <strong>№1</strong>."
          },
          {
            kind: "glue",
            html:
              ". They also have a better idea of what they want to do. It can show schools that you are intentional. Colleges also value the diversity of students. "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 5,
            text: "Taking a gap year and travelling",
            explainRu:
              "Ловушка <strong>№5</strong> (wide choice): travel ≠ «много возможностей»."
          },
          {
            kind: "glue",
            html: " can give you a much more diverse perspective than other students who have lived domestically their whole lives."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 3,
        trapNums: [7],
        keyLineRu:
          "Утверждение 3 — обмен в Германии улучшил навыки (social, adaptation).",
        evidencePromptRu:
          "<strong>Speaker D · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — exchange / boosted skills → <strong>№3</strong>.",
        distractorPromptRu:
          "<strong>Speaker D · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — new perspective / treat myself → <strong>№7</strong>, не №3.",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным — improved skills. Красным — perspective (№7).",
        segments: [
          {
            kind: "glue",
            html: "Personally, I really benefited from taking a gap year. During my senior year of high school, I decided to "
          },
          {
            kind: "hit",
            sol: "e",
            text: "apply for an exchange programme based in Germany",
            explainRu:
              "Международный опыт → <strong>№3</strong>."
          },
          {
            kind: "glue",
            html:
              ". After being accepted, I was put into a German high school and lived with a host family. My time abroad not only helped me learn German, but also "
          },
          {
            kind: "hit",
            sol: "e",
            text: "boosted my social and adaptation skills",
            explainRu:
              "Прямой парафраз <strong>№3</strong>: improved my skills."
          },
          {
            kind: "glue",
            html: ". Overall, it "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 7,
            text: "gave me a new perspective on how I wanted to treat myself and those around me",
            explainRu:
              "Ловушка <strong>№7</strong> (define interests): perspective ≠ выбор специальности."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 6,
        trapNums: [4],
        keyLineRu:
          "Утверждение 6 — сначала поступить, потом defer (holds your spot).",
        evidencePromptRu:
          "<strong>Speaker E · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — apply first / defer / holds spot → <strong>№6</strong>.",
        distractorPromptRu:
          "<strong>Speaker E · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — gap year is right for you → общее, не №6.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным — place before gap year. Красным — general advice.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "apply to schools, get your scholarship information, and then talk to them about deferring your enrollment",
            explainRu:
              "Прямой парафраз <strong>№6</strong>: get place before gap year."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "This holds your spot, and your scholarships",
            explainRu:
              "Место сохранено → <strong>№6</strong>."
          },
          {
            kind: "glue",
            html:
              ". It also takes the pain away from having to apply to schools during your gap year. And you always know if you have something you can come back to, which makes the gap year a little more freeing. Overall, it depends on "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "whether or not a gap year is right for you",
            explainRu:
              "Ловушка <strong>№4</strong> (prepare): общий совет, не про defer."
          },
          {
            kind: "glue",
            html: ". But when it comes to what schools think, you don't have to worry."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 7,
        trapNums: [1],
        keyLineRu:
          "Утверждение 7 — gap year помог выбрать специальность и интересы.",
        evidencePromptRu:
          "<strong>Speaker F · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — switch major / passionate → <strong>№7</strong>.",
        distractorPromptRu:
          "<strong>Speaker F · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — university choice / motivated → <strong>№1</strong>, не №7.",
        promptRu:
          "<strong>Speaker F.</strong> Зелёным — define interests. Красным — university choice (№1).",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 1,
            text: "influenced my university choice",
            explainRu:
              "Ловушка <strong>№1</strong> (applicant): выбор вуза ≠ «лучший абитуриент»."
          },
          {
            kind: "glue",
            html: ", as I discovered I didn't like the American style of teaching. I also "
          },
          {
            kind: "hit",
            sol: "e",
            text: "decided to switch what I wanted to major in university",
            explainRu:
              "Смена специальности → <strong>№7</strong> define interests."
          },
          {
            kind: "glue",
            html: " after "
          },
          {
            kind: "hit",
            sol: "e",
            text: "finding a topic I was truly passionate about",
            explainRu:
              "Нашёл, чем увлечён → <strong>№7</strong>."
          },
          {
            kind: "glue",
            html:
              ". I've only been studying at university for 2 years, but I'm extremely happy I took the opportunity of taking a gap year. I feel more motivated than I ever was in school, as now I have a major I'm excited to study. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "Without a gap year, I would've never made these decisions",
            explainRu:
              "Без gap year не определился бы → <strong>№7</strong>."
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
