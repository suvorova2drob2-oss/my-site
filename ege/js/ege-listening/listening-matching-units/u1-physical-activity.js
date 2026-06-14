/**
 * ЕГЭ Listening Matching · Unit 1 · Physical activity (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-physical-activity",
    unitOrder: 1,
    title: "Unit 1 · Physical activity",
    examSection: "§1 · Задание 1",
    headerTitle: "Physical activity",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%201%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть, пока слушаешь:</strong></p>" +
      "<ul>" +
      "<li><strong>Главная мысль</strong> спикера — не отдельное слово (<em>walking</em>, <em>swimming</em>), а <em>зачем</em> / <em>почему</em> он это выбрал.</li>" +
      "<li>ЕГЭ часто даёт <strong>перефраз</strong>: в аудио «put my mind at rest», в буклете — «keep fit and calm down».</li>" +
      "<li>Ловушки: «можно где угодно / каждому по вкусу» (№4) — когда правильный ответ про <em>стресс</em>, <em>здоровье</em>, <em>команду</em> и т.д.</li>" +
      "<li>После проверки — <strong>разбор в тексте</strong> и <strong>аудиосуфлирование</strong> по каждому спикеру.</li>" +
      "</ul>",
    statements: [
      {
        num: 1,
        text: "It strengthens both your muscles and your character."
      },
      {
        num: 2,
        text: "It's an easy way to keep fit and calm down."
      },
      {
        num: 3,
        text: "Technology sets my workout and keeps me active."
      },
      {
        num: 4,
        text: "Everyone can find something to their own liking."
      },
      {
        num: 5,
        text: "That is what suits me well due to some health issues."
      },
      {
        num: 6,
        text: "This sport teaches you to collaborate successfully."
      },
      {
        num: 7,
        text: "You can easily integrate it into your daily routine."
      }
    ],
    extraStatementNum: 4,
    /** A→2, B→5, C→1, D→7, E→6, F→3; лишнее — 4 */
    key: [2, 5, 1, 7, 6, 3],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "put my mind at rest", ru: "успокоиться, снять стресс" },
      { en: "can actually be relaxing", ru: "может действительно расслаблять" },
      { en: "work on endurance", ru: "работать над выносливостью" },
      { en: "easy on the joints", ru: "щадит суставы" },
      { en: "had problems with my knees", ru: "были проблемы с коленями" },
      { en: "becoming a better person", ru: "становиться лучше как личность" },
      { en: "work hard for what you want", ru: "упорно работать ради цели" },
      { en: "completing other important tasks", ru: "совмещать с другими делами" },
      { en: "teamwork is incredibly important", ru: "командная работа очень важна" },
      { en: "cooperate with each other", ru: "сотрудничать друг с другом" },
      { en: "Cooperation is the key", ru: "сотрудничество — ключ к успеху" },
      { en: "exercise routines based on settings", ru: "программа тренировок по настройкам" },
      { en: "use an app for exercising", ru: "использовать приложение для тренировок" }
    ],
    tapPhrases: [
      { en: "put my mind at rest", ru: "успокоиться, снять стресс" },
      { en: "work on endurance", ru: "работать над выносливостью" },
      { en: "easy on the joints", ru: "щадит суставы" },
      { en: "becoming a better person", ru: "становиться лучше как личность" },
      { en: "work hard for what you want", ru: "упорно работать ради цели" },
      { en: "completing other important tasks", ru: "совмещать с другими делами" },
      { en: "teamwork is incredibly important", ru: "командная работа очень важна" },
      { en: "cooperate with each other", ru: "сотрудничать друг с другом" },
      { en: "Cooperation is the key to a good game", ru: "сотрудничество — ключ к хорошей игре" },
      { en: "exercise routines based on settings that I choose", ru: "программа по выбранным настройкам" },
      { en: "use an app for exercising", ru: "использовать приложение для тренировок" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          { en: "My favourite type of physical activity is walking", ru: "мой любимый вид активности — ходьба" },
          { en: "Walking isn't hard", ru: "ходить несложно" },
          { en: "can actually be relaxing", ru: "может действительно расслаблять", tip: "парафраз №2 · calm down" },
          { en: "go for a walk anywhere", ru: "можно гулять почти где угодно", tip: "ловушка к №4, не к №2" },
          { en: "you don't need a designated place to be at", ru: "не нужно специальное место" },
          { en: "places not good for walking", ru: "места, где нельзя гулять" },
          { en: "private property", ru: "частная собственность" },
          { en: "busy roads with no sidewalks", ru: "оживлённые дороги без тротуаров" },
          { en: "go on walks in parks", ru: "гулять в парках" },
          { en: "go sightseeing while exercising", ru: "совмещать прогулку с осмотром достопримечательностей" },
          { en: "especially stressed out", ru: "особенно в стрессе" },
          { en: "put my mind at rest", ru: "успокоиться, снять стресс", tip: "парафраз №2 · calm down" }
        ],
        fullText:
          "My favourite type of physical activity is walking. Walking isn't hard and can actually be relaxing. You can pretty much go for a walk anywhere and you don't need a designated place to be at. Obviously, there are places not good for walking — like private property, highways, or busy roads with no sidewalks. You can go on walks in parks, or go sightseeing while exercising. On days when I'm especially stressed out, it helps me to put my mind at rest.",
        chunks: [
          {
            text:
              "My favourite type of physical activity is walking. Walking isn't hard and can actually be relaxing.",
            showText: true
          },
          {
            text:
              "You can pretty much go for a walk anywhere and you don't need a designated place to be at.",
            showText: true
          },
          {
            text:
              "Obviously, there are places not good for walking — like private property, highways, or busy roads with no sidewalks.",
            showText: true
          },
          {
            text:
              "You can go on walks in parks, or go sightseeing while exercising.",
            showText: false
          },
          {
            text:
              "On days when I'm especially stressed out, it helps me to put my mind at rest.",
            showText: true
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "I love swimming", ru: "я люблю плавание" },
          { en: "use different techniques", ru: "использовать разные техники" },
          { en: "a bit overweight", ru: "немного с лишним весом" },
          { en: "work on endurance", ru: "работать над выносливостью" },
          { en: "exercises performed in water", ru: "упражнения в воде" },
          { en: "safer for heavy people", ru: "безопаснее для людей с лишним весом", tip: "парафраз №5 · health issues" },
          { en: "take part in", ru: "принимать участие" },
          { en: "had problems with my knees", ru: "были проблемы с коленями", tip: "парафраз №5" },
          { en: "total body workout", ru: "тренировка всего тела" },
          { en: "easy on the joints", ru: "щадит суставы" },
          { en: "doesn't do me any harm", ru: "не навредит мне" },
          { en: "swimming seems to be ideal", ru: "плавание кажется идеальным" }
        ],
        fullText:
          "I love swimming, and now I can use different techniques. It was hard to start because I am a bit overweight and I need to work on endurance. The biggest plus of swimming is that exercises performed in water are much safer for heavy people to take part in. Swimming also works for me because I had problems with my knees, and it offers a total body workout that's easy on the joints. So, I need to make sure exercise doesn't do me any harm, and that's why swimming seems to be ideal.",
        chunks: [
          {
            text: "I love swimming, and now I can use different techniques.",
            showText: true
          },
          {
            text:
              "It was hard to start because I am a bit overweight and I need to work on endurance.",
            showText: true
          },
          {
            text:
              "The biggest plus of swimming is that exercises performed in water are much safer for heavy people to take part in.",
            showText: true
          },
          {
            text:
              "Swimming also works for me because I had problems with my knees, and it offers a total body workout that's easy on the joints.",
            showText: true
          },
          {
            text:
              "So, I need to make sure exercise doesn't do me any harm, and that's why swimming seems to be ideal.",
            showText: false
          }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          { en: "prefer weight lifting", ru: "предпочитаю поднятие тяжестей" },
          { en: "proper technique and regular exercise", ru: "правильная техника и регулярные занятия" },
          { en: "gains come a bit easier", ru: "результаты даются чуть легче" },
          { en: "lift weights and accomplish your goals", ru: "поднимать тяжести и достигать целей" },
          { en: "makes you feel good", ru: "приятное чувство от успеха" },
          { en: "being healthy", ru: "быть здоровым" },
          { en: "getting stronger", ru: "становиться сильнее", tip: "парафраз №1 · muscles" },
          { en: "achieving personal goals", ru: "достигать личных целей" },
          { en: "becoming a better person", ru: "становиться лучше как личность", tip: "парафраз №1 · character" },
          { en: "physically and mentally", ru: "и физически, и морально" },
          { en: "achieve no matter what", ru: "достигать цели несмотря ни на что" },
          { en: "work hard for what you want", ru: "упорно работать ради цели", tip: "парафраз №1 · character" }
        ],
        fullText:
          "I prefer weight lifting. With proper technique and regular exercise, gains come a bit easier. When you lift weights and accomplish your goals, it makes you feel good. Health benefits of lifting include being healthy, getting stronger, achieving personal goals, and becoming a better person — physically and mentally. Personal benefits include goals that you try to achieve no matter what. In the end, it's fun and it teaches you work hard for what you want.",
        chunks: [
          {
            text:
              "I prefer weight lifting. With proper technique and regular exercise, gains come a bit easier.",
            showText: true
          },
          {
            text:
              "When you lift weights and accomplish your goals, it makes you feel good.",
            showText: true
          },
          {
            text:
              "Health benefits of lifting include being healthy, getting stronger, achieving personal goals, and becoming a better person — physically and mentally.",
            showText: true
          },
          {
            text:
              "Personal benefits include goals that you try to achieve no matter what.",
            showText: false
          },
          {
            text:
              "In the end, it's fun and it teaches you work hard for what you want.",
            showText: true
          }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          { en: "short exercises", ru: "короткие упражнения" },
          { en: "prefer dancing and walking", ru: "предпочитаю танцы и ходьбу" },
          { en: "don't take much from you", ru: "не отнимают много времени и сил", tip: "парафраз №7 · daily routine" },
          { en: "prepare specific clothes or routes", ru: "готовить особую одежду или маршруты" },
          { en: "completing other important tasks", ru: "совмещать с другими делами", tip: "парафраз №7" },
          { en: "dance while preparing breakfast", ru: "танцевать, пока готовлю завтрак" },
          { en: "choosing clothes for work", ru: "выбирать одежду на работу" },
          { en: "walk to work as much as possible", ru: "по возможности ходить на работу пешком", tip: "парафраз №7" }
        ],
        fullText:
          "For short exercises, I prefer dancing and walking. Both of them don't take much from you. What I mean is that you don't have to prepare specific clothes or routes, and you can do them while actually completing other important tasks. I usually dance while preparing breakfast, or when choosing clothes for work. As for walking, I just walk to work as much as possible.",
        chunks: [
          {
            text: "For short exercises, I prefer dancing and walking.",
            showText: true
          },
          {
            text: "Both of them don't take much from you.",
            showText: true
          },
          {
            text:
              "What I mean is that you don't have to prepare specific clothes or routes, and you can do them while actually completing other important tasks.",
            showText: true
          },
          {
            text:
              "I usually dance while preparing breakfast, or when choosing clothes for work.",
            showText: true
          },
          {
            text: "As for walking, I just walk to work as much as possible.",
            showText: false
          }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          { en: "love playing volleyball", ru: "люблю играть в волейбол" },
          { en: "it's fast", ru: "это быстрая игра" },
          { en: "mentally and physically in shape", ru: "быть в форме и морально, и физически" },
          { en: "teamwork is incredibly important", ru: "командная работа очень важна", tip: "парафраз №6 · collaborate" },
          { en: "moving almost constantly", ru: "почти постоянно двигаться" },
          { en: "learning how to work with others", ru: "учиться работать с другими" },
          { en: "play with friends quite often", ru: "часто играю с друзьями" },
          { en: "work closely on the court", ru: "тесно работать на площадке" },
          { en: "cooperate with each other", ru: "сотрудничать друг с другом", tip: "парафраз №6" },
          { en: "Cooperation is the key to a good game", ru: "сотрудничество — ключ к хорошей игре", tip: "парафраз №6" }
        ],
        fullText:
          "I love playing volleyball because it's fast. Moreover, you have to be mentally and physically in shape, and teamwork is incredibly important for volleyball games. In this game you'd be moving almost constantly. Additionally, you're learning how to work with others. I play with friends quite often. Volleyball players work closely on the court. The result of any volleyball game depends on how players cooperate with each other. Cooperation is the key to a good game.",
        chunks: [
          {
            text: "I love playing volleyball because it's fast.",
            showText: true
          },
          {
            text:
              "Moreover, you have to be mentally and physically in shape, and teamwork is incredibly important for volleyball games.",
            showText: true
          },
          {
            text:
              "In this game you'd be moving almost constantly. Additionally, you're learning how to work with others.",
            showText: true
          },
          {
            text:
              "I play with friends quite often. Volleyball players work closely on the court.",
            showText: false
          },
          {
            text:
              "The result of any volleyball game depends on how players cooperate with each other. Cooperation is the key to a good game.",
            showText: true
          }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          { en: "use an app for exercising", ru: "использовать приложение для тренировок", tip: "парафраз №3 · Technology" },
          {
            en: "exercise routines based on settings that I choose",
            ru: "программа тренировок по выбранным настройкам",
            tip: "парафраз №3"
          },
          { en: "workout intensity", ru: "интенсивность тренировки" },
          { en: "frequency", ru: "частота (занятий)" },
          { en: "weight goals", ru: "цели по весу" },
          { en: "use weights occasionally", ru: "иногда использую гантели" },
          { en: "integrate them into my workout", ru: "включить их в тренировку" },
          {
            en: "sticking to planks, bridges, squats, push-ups, sit-ups",
            ru: "пока ограничиваюсь планками, мостиками, приседаниями, отжиманиями, скручиваниями"
          },
          { en: "walk 1-2 miles at a slow pace", ru: "проходить 1–2 мили в медленном темпе" },
          { en: "lunch break at work", ru: "обеденный перерыв на работе" },
          { en: "keeps me moving", ru: "помогает оставаться в движении", tip: "парафраз №3 · keeps me active" },
          { en: "gives me a break from the office", ru: "даёт передышку от офиса" }
        ],
        fullText:
          "I use an app for exercising. It gives me exercise routines based on settings that I choose, like workout intensity, frequency, and even weight goals. I use weights occasionally, but very rarely. Eventually I'll integrate them into my workout, but for now I'm sticking to planks, bridges, squats, push-ups, sit-ups — things like that. I also walk 1-2 miles at a slow pace on my lunch break at work. It keeps me moving and gives me a break from the office, which is really useful.",
        chunks: [
          {
            text:
              "I use an app for exercising. It gives me exercise routines based on settings that I choose, like workout intensity, frequency, and even weight goals.",
            showText: true
          },
          {
            text: "I use weights occasionally, but very rarely.",
            showText: true
          },
          {
            text:
              "Eventually I'll integrate them into my workout, but for now I'm sticking to planks, bridges, squats, push-ups, sit-ups — things like that.",
            showText: true
          },
          {
            text:
              "I also walk 1-2 miles at a slow pace on my lunch break at work.",
            showText: false
          },
          {
            text:
              "It keeps me moving and gives me a break from the office, which is really useful.",
            showText: true
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
          "Утверждение 2 — лёгкий способ держать форму и успокоиться.",
        evidencePromptRu:
          "<strong>Speaker A · шаг 1.</strong> Отметь <strong style=\"color:#86efac\">зелёным</strong> все фразы-парафразы к утверждению <strong>2</strong> (<em>keep fit and calm down</em>).",
        distractorPromptRu:
          "<strong>Speaker A · шаг 2.</strong> Отметь <strong style=\"color:#fca5a5\">красным</strong> ловушки — фразы, которые тянут к <strong>№4</strong> («everyone can find something»), а не к №2.",
        promptRu:
          "<strong>Speaker A.</strong> Отметь <strong style=\"color:#86efac\">зелёным</strong> фразы про <em>расслабление / снятие стресса</em>. <strong style=\"color:#fca5a5\">Красным</strong> — «можно где угодно / не сложно» (ловушка к №4 «everyone can find something», не к №2).",
        segments: [
          {
            kind: "glue",
            html: "My favourite type of physical activity is walking. "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "Walking isn't hard",
            explainRu:
              "«Isn't hard» — ловушка к <strong>№4</strong> («to their liking»), не к №2 (calm down)."
          },
          {
            kind: "glue",
            html: " and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "can actually be relaxing",
            explainRu:
              "Парафраз <strong>№2</strong>: <em>relaxing</em> → calm down."
          },
          {
            kind: "glue",
            html: ". You can pretty much "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "go for a walk anywhere",
            explainRu:
              "Ловушка к <strong>№4</strong>: «где угодно» — про выбор, не calm down (№2)."
          },
          {
            kind: "glue",
            html: " and "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "you don't need a designated place to be at",
            explainRu:
              "Ловушка к <strong>№4</strong>: не нужно special place — не <em>calm down</em> (№2)."
          },
          {
            kind: "glue",
            html:
              ". Obviously, there are places not good for walking — like private property, highways, or busy roads with no sidewalks. You can go on walks in parks, or go sightseeing while exercising. On days when I'm especially stressed out, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "it helps me to put my mind at rest",
            explainRu:
              "Парафраз <strong>№2</strong>: <em>put my mind at rest</em> = calm down."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 5,
        trapNums: [2],
        keyLineRu:
          "Утверждение 5 — подходит из‑за проблем со здоровьем.",
        evidencePromptRu:
          "<strong>Speaker B · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — безопасность для тяжёлых людей, колени, суставы (health issues → №5).",
        distractorPromptRu:
          "<strong>Speaker B · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «выносливость / keep fit» (№2), когда правильный ответ про <em>health issues</em>.",
        promptRu:
          "<strong>Speaker B.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — безопасность для тяжёлых людей, колени, суставы. <strong style=\"color:#fca5a5\">Красным</strong> — «нужно поработать над выносливостью» (форма, не «health issues»).",
        segments: [
          {
            kind: "glue",
            html:
              "I love swimming, and now I can use different techniques. It was hard to start because I am a bit overweight and "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 2,
            text: "I need to work on endurance",
            explainRu:
              "Ловушка к <strong>№2</strong> («keep fit»): про выносливость и форму, а правильный ответ — <strong>№5</strong> (health issues)."
          },
          {
            kind: "glue",
            html: ". The biggest plus of swimming is that "
          },
          {
            kind: "hit",
            sol: "e",
            text:
              "exercises performed in water are much safer for heavy people to take part in",
            explainRu:
              "Опора: плавание <strong>безопаснее</strong> для людей с лишним весом."
          },
          {
            kind: "glue",
            html: ". Swimming also works for me because "
          },
          {
            kind: "hit",
            sol: "e",
            text: "I had problems with my knees",
            explainRu:
              "Проблемы со <strong>здоровьем</strong> (колени) → почему выбрал плавание."
          },
          {
            kind: "glue",
            html: ", and it offers a total body workout that's "
          },
          {
            kind: "hit",
            sol: "e",
            text: "easy on the joints",
            explainRu:
              "«Easy on the joints» — щадит суставы → утверждение 5."
          },
          {
            kind: "glue",
            html:
              ". So, I need to make sure exercise doesn't do me any harm, and that's why swimming seems to be ideal."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 1,
        trapNums: [2, 4],
        keyLineRu:
          "Утверждение 1 — укрепляет мышцы и характер (muscles and character).",
        evidencePromptRu:
          "<strong>Speaker C · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — «better person», «work hard» → парафраз к <strong>№1</strong> (muscles <em>and</em> character).",
        distractorPromptRu:
          "<strong>Speaker C · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — фразы, которые тянут к <strong>№2</strong> (keep fit) или <strong>№4</strong> (personal liking), <em>не</em> к №1.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным — character / better person. Красным — keep fit или «мне нравится» без character.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "I prefer weight lifting",
            explainRu:
              "Ловушка к <strong>№4</strong> («to their liking»): «я предпочитаю…» — личный выбор, не muscles + character."
          },
          {
            kind: "glue",
            html:
              ". With proper technique and regular exercise, gains come a bit easier. When you lift weights and accomplish your goals, it makes you feel good. Health benefits of lifting include "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 2,
            text: "being healthy, getting stronger",
            explainRu:
              "Ловушка к <strong>№2</strong> («keep fit»): только форма/здоровье — без <em>character</em> из №1."
          },
          {
            kind: "glue",
            html: ", achieving personal goals, and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "becoming a better person — physically and mentally",
            explainRu:
              "Парафраз <strong>№1</strong>: <em>better person</em> = character + физическая сила."
          },
          {
            kind: "glue",
            html:
              ". Personal benefits include goals that you try to achieve no matter what. In the end, "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "it's fun",
            explainRu:
              "Ловушка к <strong>№4</strong>: «это fun» — про вкус/уд pleasure, не про character."
          },
          {
            kind: "glue",
            html: " and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "it teaches you work hard for what you want",
            explainRu:
              "Парафраз <strong>№1</strong>: дисциплина и характер (<em>character</em>), не просто keep fit."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 7,
        trapNums: [4],
        keyLineRu:
          "Утверждение 7 — легко встроить в повседневную рутину.",
        evidencePromptRu:
          "<strong>Speaker D · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — спорт <em>во время</em> других дел → №7 (daily routine).",
        distractorPromptRu:
          "<strong>Speaker D · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «мне нравится / не нужна подготовка» → <strong>№4</strong>, не №7 (routine).",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным — во время других дел. Красным — personal liking / удобство, не routine.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "For short exercises, I prefer dancing and walking",
            explainRu:
              "Ловушка к <strong>№4</strong> («to their liking»): «prefer» — личный выбор, не встроенная рутина."
          },
          {
            kind: "glue",
            html: ". Both of them don't take much from you. What I mean is that "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "you don't have to prepare specific clothes or routes",
            explainRu:
              "Ловушка к <strong>№4</strong>: «не нужна подготовка» — про удобство/вкус, не daily routine (№7)."
          },
          {
            kind: "glue",
            html: ", and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "you can do them while actually completing other important tasks",
            explainRu:
              "Главная опора: спорт <strong>одновременно с другими делами</strong>."
          },
          {
            kind: "glue",
            html: ". I usually "
          },
          {
            kind: "hit",
            sol: "e",
            text: "dance while preparing breakfast",
            explainRu:
              "Пример: танцы <strong>во время завтрака</strong>."
          },
          {
            kind: "glue",
            html: ", or when choosing clothes for work. As for walking, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "I just walk to work as much as possible",
            explainRu:
              "Ходьба <strong>по пути на работу</strong> — часть рутины."
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
        trapNums: [2, 4],
        keyLineRu:
          "Утверждение 6 — учит успешно сотрудничать (collaborate).",
        evidencePromptRu:
          "<strong>Speaker E · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — teamwork, cooperate, work with others → <strong>№6</strong>.",
        distractorPromptRu:
          "<strong>Speaker E · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «люблю волейбол / быть в форме» → <strong>№4</strong> или <strong>№2</strong>, не №6.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным — cooperation. Красным — personal liking или keep fit.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "I love playing volleyball",
            explainRu:
              "Ловушка к <strong>№4</strong> («to their liking»): «love playing» — личный выбор, не collaborate."
          },
          {
            kind: "glue",
            html: " because it's fast. Moreover, "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 2,
            text: "you have to be mentally and physically in shape",
            explainRu:
              "Ловушка к <strong>№2</strong> («keep fit»): быть в форме — не то же самое, что учиться <em>collaborate</em> (№6)."
          },
          {
            kind: "glue",
            html: ", and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "teamwork is incredibly important for volleyball games",
            explainRu:
              "Парафраз <strong>№6</strong>: <em>teamwork</em> = collaborate."
          },
          {
            kind: "glue",
            html: ". In this game you'd be moving almost constantly. Additionally, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "you're learning how to work with others",
            explainRu:
              "Парафраз <strong>№6</strong>: <em>work with others</em>."
          },
          {
            kind: "glue",
            html:
              ". I play with friends quite often. Volleyball players work closely on the court. The result of any volleyball game depends on "
          },
          {
            kind: "hit",
            sol: "e",
            text: "how players cooperate with each other",
            explainRu:
              "Парафраз <strong>№6</strong>: <em>cooperate with each other</em>."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "Cooperation is the key to a good game",
            explainRu:
              "Парафраз <strong>№6</strong>: <em>Cooperation</em> = collaborate successfully."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 3,
        trapNums: [7],
        keyLineRu:
          "Утверждение 3 — технология задаёт тренировку и держит активным.",
        evidencePromptRu:
          "<strong>Speaker F · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — app, routines, settings → №3 (Technology).",
        distractorPromptRu:
          "<strong>Speaker F · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — прогулка в обед → ловушка к №7 (daily routine), не №3.",
        promptRu:
          "<strong>Speaker F.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — app, routines, settings. <strong style=\"color:#fca5a5\">Красным</strong> — прогулка в обед (рутина, не «technology»).",
        segments: [
          {
            kind: "glue",
            html: "I "
          },
          {
            kind: "hit",
            sol: "e",
            text: "use an app for exercising",
            explainRu:
              "Прямая опора: <strong>mobile app</strong> для тренировок."
          },
          {
            kind: "glue",
            html: ". It gives me "
          },
          {
            kind: "hit",
            sol: "e",
            text: "exercise routines based on settings that I choose",
            explainRu:
              "Приложение строит <strong>программу по настройкам</strong>."
          },
          {
            kind: "glue",
            html:
              ", like workout intensity, frequency, and even weight goals. I use weights occasionally, but very rarely. Eventually I'll integrate them into my workout, but for now I'm sticking to planks, bridges, squats, push-ups, sit-ups — things like that. "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 7,
            text: "I also walk 1-2 miles at a slow pace on my lunch break at work",
            explainRu:
              "Ловушка к <strong>№7</strong> (daily routine): прогулка в обед — не <em>Technology</em> (№3)."
          },
          {
            kind: "glue",
            html:
              ". It keeps me moving and gives me a break from the office, which is really useful."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
