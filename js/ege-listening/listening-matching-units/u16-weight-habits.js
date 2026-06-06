/**
 * ЕГЭ Listening Matching · Unit 16 · Weight & eating habits.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "I'm trying to get back on track again with healthy food. I've been really bad this couple of months, resulting in a horrible weight gain. I still go to the gym 3-4 times a week, but I eat a lot of unhealthy snacks between meals. I somehow thought it's my reward for going to the gym, but it certainly made me gain more weight rather than lose it. I figure if I can replace my dinner with fruits, I will achieve weight loss easily and in a healthy way. But the problem is, after the gym when I feel really hungry the first thing I look for is something savoury."
    },
    {
      id: "B",
      text:
        "My name is Jenna and I'm 17 years old. I'd never had weight issues until last year. I had some problems that made me very depressed, so I ate all the time and watched TV because I didn't want to leave the house. I know that's not an excuse for eating so unhealthily, but I was in my own little world, you could say. I'm a very athletic person and I still have all my muscle, but I've just gained weight. I've decided to start my diet on Wednesday and work out Mondays, Wednesdays and Fridays with one of my friends."
    },
    {
      id: "C",
      text:
        "I am utterly frustrated at the moment. My weight is not moving in the right direction. Which is not surprising since I just can't resist food, especially unhealthy food. Like yesterday, I went to the supermarket and bought strawberries and grapes and apples only to go back 20 minutes later to get a marble cake. I only ate two slices of it and it was all I had for dinner but still it makes me angry. Sometimes I feel it has to be either all or nothing. I just know that eating nothing is not the right thing to do and that it won't help in the long run."
    },
    {
      id: "D",
      text:
        "I'm doing really well. I thought that when I came home from school I would balloon up, because my mom is an awesome cook and when I'm home I work two jobs and I am always too tired to exercise. Plus, at school the gym is free and at home it most certainly is not. However, I've managed to stay at the same weight and am at my lowest weight on my mom's scale! I eat around 1200-1400 calories a day so that my parents don't suspect anything, but I know they're impressed with my weight loss. I am too!"
    },
    {
      id: "E",
      text:
        "My name is Bobbi. I'm a sophomore in college and live in the dorm. This is the first time I've experienced living on my own. So I can go to any grocery shop and get whatever I want or go out to eat whenever I want. I stopped being active after the swim season was over in my senior year of high school. My weight has steadily increased since then because of my eating and exercise habits alone, I think. So I have asked my doctor recently to work out a special combination of diet and sport activities. I hope it will help."
    },
    {
      id: "F",
      text:
        "I wish I could just kick the pounds away but alas, no way. I cannot starve myself, and also, I don't want to. Still, I want to lose weight, as fast as possible, of course. I thought I'd try to eat healthy food and exercise a lot but it's just so hard to come home and not plunder the fridge. It's so difficult to change one's lifestyle. I need some support and encouragement from somebody who understands how difficult it is to solve my problem."
    }
  ];

  pack.units.push({
    id: "u16-weight-habits",
    unitOrder: 16,
    title: "Unit 16 · Weight & eating habits",
    examSection: "§1 · Задание 1",
    headerTitle: "Weight & eating habits",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/16/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2016%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Weight & eating:</strong> emotional eating, exercise + junk food, weight after lifestyle changes, difficult habit change, frustration about food control.</p>",
    statements: [
      { num: 1, text: "I eat a lot trying to forget my problems." },
      {
        num: 2,
        text: "I cannot lose weight as I combine exercising and eating unhealthy food."
      },
      { num: 3, text: "I have gained weight after changing my habits." },
      {
        num: 4,
        text: "I would like to lose weight without changing my habits radically."
      },
      {
        num: 5,
        text: "I feel very unhappy because I cannot help eating unhealthy food."
      },
      { num: 6, text: "I expected to gain weight but in fact I haven't." },
      {
        num: 7,
        text: "I don't have any weight problems in spite of eating whatever I want."
      }
    ],
    extraStatementNum: 7,
    // A→2, B→1, C→5, D→6, E→3, F→4; extra 7
    key: [2, 1, 5, 6, 3, 4],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "go to the gym 3-4 times a week", ru: "ходить в зал 3-4 раза в неделю", tip: "A · №2" },
      { en: "eat a lot of unhealthy snacks between meals", ru: "есть много вредных перекусов между приемами пищи", tip: "A · №2" },
      { en: "made me gain more weight rather than lose it", ru: "это заставило набирать вес вместо похудения", tip: "A · №2" },
      { en: "problems that made me very depressed", ru: "проблемы, которые сильно подавили", tip: "B · №1" },
      { en: "I ate all the time", ru: "я ел(а) все время", tip: "B · №1" },
      { en: "I just can't resist food", ru: "я просто не могу устоять перед едой", tip: "C · №5" },
      { en: "it makes me angry", ru: "это меня злит", tip: "C · №5" },
      { en: "I thought ... I would balloon up", ru: "я думал(а), что сильно располнею", tip: "D · №6" },
      { en: "I've managed to stay at the same weight", ru: "мне удалось остаться в том же весе", tip: "D · №6" },
      { en: "My weight has steadily increased since then", ru: "мой вес с тех пор стабильно рос", tip: "E · №3" },
      { en: "hard to come home and not plunder the fridge", ru: "трудно прийти домой и не опустошить холодильник", tip: "F · №4" },
      { en: "It's so difficult to change one's lifestyle", ru: "так трудно изменить образ жизни", tip: "F · №4" }
    ],
    tapPhrases: [
      { en: "a horrible weight gain", ru: "ужасный набор веса" },
      { en: "my reward for going to the gym", ru: "награда за поход в зал" },
      { en: "in my own little world", ru: "в своем маленьком мире" },
      { en: "utterly frustrated", ru: "полностью разочарован(а)" },
      { en: "either all or nothing", ru: "либо все, либо ничего" },
      { en: "at my lowest weight", ru: "на минимальном весе" },
      { en: "living on my own", ru: "жить самостоятельно" },
      { en: "special combination of diet and sport activities", ru: "специальное сочетание диеты и спорта" },
      { en: "kick the pounds away", ru: "избавиться от лишних килограммов" },
      { en: "support and encouragement", ru: "поддержка и ободрение" }
    ],
    shadowSpeakers: speakers.map(function (sp) {
      var phrasesMap = {
        A: [
          { en: "get back on track", ru: "вернуться в нормальный режим" },
          { en: "unhealthy snacks between meals", ru: "вредные перекусы между едой" },
          { en: "reward for going to the gym", ru: "награда за зал" },
          { en: "gain more weight rather than lose it", ru: "набирать, а не терять вес" },
          { en: "replace my dinner with fruits", ru: "заменить ужин фруктами" },
          { en: "the first thing I look for is something savoury", ru: "первым делом ищу что-то соленое" }
        ],
        B: [
          { en: "weight issues", ru: "проблемы с весом" },
          { en: "made me very depressed", ru: "очень подавили" },
          { en: "I ate all the time", ru: "ел(а) все время" },
          { en: "not an excuse", ru: "это не оправдание" },
          { en: "I'm a very athletic person", ru: "я очень спортивный человек" },
          { en: "start my diet", ru: "начать диету" }
        ],
        C: [
          { en: "utterly frustrated", ru: "совсем разочарован(а)" },
          { en: "can't resist food", ru: "не могу устоять перед едой" },
          { en: "especially unhealthy food", ru: "особенно перед вредной едой" },
          { en: "it makes me angry", ru: "это меня злит" },
          { en: "either all or nothing", ru: "либо все, либо ничего" },
          { en: "won't help in the long run", ru: "в долгосрочной перспективе не поможет" }
        ],
        D: [
          { en: "I would balloon up", ru: "я сильно располнею" },
          { en: "too tired to exercise", ru: "слишком уставший(ая), чтобы тренироваться" },
          { en: "I've managed to stay at the same weight", ru: "мне удалось удержать вес" },
          { en: "at my lowest weight", ru: "на своем минимальном весе" },
          { en: "1200-1400 calories a day", ru: "1200-1400 калорий в день" },
          { en: "impressed with my weight loss", ru: "впечатлены моим похудением" }
        ],
        E: [
          { en: "live in the dorm", ru: "жить в общежитии" },
          { en: "living on my own", ru: "самостоятельная жизнь" },
          { en: "go out to eat whenever I want", ru: "ходить есть где угодно и когда угодно" },
          { en: "stopped being active", ru: "перестал(а) быть активным(ой)" },
          { en: "weight has steadily increased", ru: "вес стабильно рос" },
          { en: "special combination of diet and sport", ru: "специальное сочетание диеты и спорта" }
        ],
        F: [
          { en: "kick the pounds away", ru: "просто скинуть килограммы" },
          { en: "I cannot starve myself", ru: "я не могу морить себя голодом" },
          { en: "lose weight as fast as possible", ru: "похудеть как можно быстрее" },
          { en: "not plunder the fridge", ru: "не опустошать холодильник" },
          { en: "difficult to change one's lifestyle", ru: "трудно изменить образ жизни" },
          { en: "support and encouragement", ru: "поддержка и ободрение" }
        ]
      };
      return {
        id: sp.id,
        label: "Speaker " + sp.id,
        fullText: sp.text,
        phrases: phrasesMap[sp.id] || [],
        chunks: [{ text: sp.text, showText: true }]
      };
    }),
    huntLabs: [
      {
        speaker: "A",
        keyNum: 2,
        trapNums: [4],
        keyLineRu: "A: despite regular gym, unhealthy snacks lead to weight gain.",
        evidencePromptRu: "<strong>A.</strong> Найдите связку gym + unhealthy snacks + gain weight.",
        segments: [
          { kind: "glue", text: "I'm trying to get back on track again with healthy food. I've been really bad this couple of months, resulting in a horrible weight gain. I still " },
          { kind: "hit", sol: "e", text: "go to the gym 3-4 times a week" },
          { kind: "glue", text: ", but I " },
          { kind: "hit", sol: "e", text: "eat a lot of unhealthy snacks between meals" },
          { kind: "glue", text: ". I somehow thought it's my reward for going to the gym, but it certainly " },
          { kind: "hit", sol: "e", text: "made me gain more weight rather than lose it" },
          { kind: "glue", text: ". I figure if I can replace my dinner with fruits, I will achieve weight loss easily and in a healthy way." },
          {
            kind: "hit",
            sol: "d",
            text: "replace my dinner with fruits",
            trapNum: 4,
            explainRu: "Это похоже на желание мягко худеть, но ключевая мысль спикера — сочетание тренировки и вредных перекусов."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 1,
        trapNums: [3],
        keyLineRu: "B: she ate all the time because of depression and personal problems.",
        evidencePromptRu: "<strong>B.</strong> Найдите эмоциональную причину переедания.",
        segments: [
          { kind: "glue", text: "My name is Jenna and I'm 17 years old. I'd never had weight issues until last year. I had some " },
          { kind: "hit", sol: "e", text: "problems that made me very depressed" },
          { kind: "glue", text: ", so " },
          { kind: "hit", sol: "e", text: "I ate all the time" },
          { kind: "glue", text: " and watched TV because I didn't want to leave the house. ... but I've just gained weight." },
          {
            kind: "hit",
            sol: "d",
            text: "I've just gained weight",
            trapNum: 3,
            explainRu: "Набор веса упомянут, но причина в этом монологе — эмоциональное переедание из-за проблем."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 5,
        trapNums: [4],
        keyLineRu: "C: she is frustrated because she cannot resist unhealthy food.",
        evidencePromptRu: "<strong>C.</strong> Найдите can't resist + эмоциональную реакцию.",
        segments: [
          { kind: "glue", text: "I am " },
          { kind: "hit", sol: "e", text: "utterly frustrated at the moment" },
          { kind: "glue", text: ". My weight is not moving in the right direction. ... " },
          { kind: "hit", sol: "e", text: "I just can't resist food, especially unhealthy food" },
          { kind: "glue", text: ". ... but still " },
          { kind: "hit", sol: "e", text: "it makes me angry" },
          { kind: "glue", text: ". Sometimes I feel it has to be either all or nothing." },
          {
            kind: "hit",
            sol: "d",
            text: "either all or nothing",
            trapNum: 4,
            explainRu: "Фраза похожа на тему изменения привычек, но ключ — эмоциональная беспомощность перед вредной едой."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 6,
        trapNums: [7],
        keyLineRu: "D: she expected to gain weight at home, but stayed the same or lower.",
        evidencePromptRu: "<strong>D.</strong> Найдите expected gain vs stayed at same weight.",
        segments: [
          { kind: "glue", text: "I'm doing really well. " },
          { kind: "hit", sol: "e", text: "I thought that when I came home from school I would balloon up" },
          { kind: "glue", text: ". ... However, " },
          { kind: "hit", sol: "e", text: "I've managed to stay at the same weight" },
          { kind: "glue", text: " and am at my lowest weight on my mom's scale!" },
          {
            kind: "hit",
            sol: "d",
            text: "I am at my lowest weight",
            trapNum: 7,
            explainRu: "Это не «ем что хочу и не толстею»; спикер контролирует питание и калории."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 3,
        trapNums: [2],
        keyLineRu: "E: after lifestyle changes (college + less activity), weight increased.",
        evidencePromptRu: "<strong>E.</strong> Найдите stopped being active + steadily increased.",
        segments: [
          { kind: "glue", text: "My name is Bobbi. ... " },
          { kind: "hit", sol: "e", text: "I stopped being active after the swim season was over" },
          { kind: "glue", text: ". " },
          { kind: "hit", sol: "e", text: "My weight has steadily increased since then" },
          { kind: "glue", text: " because of my eating and exercise habits alone, I think." },
          {
            kind: "hit",
            sol: "d",
            text: "combination of diet and sport activities",
            trapNum: 2,
            explainRu: "Про комбинацию диеты и спорта говорит как о будущем решении, а не о причине текущего набора веса."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 4,
        trapNums: [2, 5],
        keyLineRu: "F: wants to lose weight quickly but finds lifestyle change very hard.",
        evidencePromptRu: "<strong>F.</strong> Найдите want to lose + hard to change lifestyle.",
        segments: [
          { kind: "glue", text: "I wish I could just kick the pounds away but alas, no way. I cannot starve myself, and also, I don't want to. Still, " },
          { kind: "hit", sol: "e", text: "I want to lose weight, as fast as possible" },
          { kind: "glue", text: ". I thought I'd try to eat healthy food and exercise a lot but it's just so hard to come home and not plunder the fridge. " },
          { kind: "hit", sol: "e", text: "It's so difficult to change one's lifestyle" },
          { kind: "glue", text: "." },
          {
            kind: "hit",
            sol: "d",
            text: "eat healthy food and exercise a lot",
            trapNum: 2,
            explainRu: "Это план, но реализация срывается; ключевая мысль про трудность изменения привычек."
          },
          {
            kind: "hit",
            sol: "d",
            text: "not plunder the fridge",
            trapNum: 5,
            explainRu: "Есть эмоциональный компонент, но основной фокус — желание похудеть без радикального перестроения жизни."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
