/**
 * ЕГЭ Listening Matching · Unit 5 · Sports & fitness tips (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-sports-fitness",
    unitOrder: 5,
    title: "Unit 5 · Sports & fitness",
    examSection: "§1 · Задание 1",
    headerTitle: "Sports & fitness tips",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/5/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%205%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть, пока слушаешь:</strong></p>" +
      "<ul>" +
      "<li><strong>Главная мысль</strong> — один совет на спикера, не отдельное слово <em>run</em> или <em>gym</em>.</li>" +
      "<li>ЕГЭ часто даёт <strong>перефраз</strong>: «star chart» → picture showing progress (№1).</li>" +
      "<li>Ловушка <strong>№7</strong> (less is better) — у A и B; у A ключ — <em>physical condition</em> (№3).</li>" +
      "<li>№5 (what works for one…) — лишнее: никто не говорит «у каждого свой путь» как главную мысль.</li>" +
      "</ul>",
    statements: [
      {
        num: 1,
        text: "A picture showing my progress is important for me."
      },
      {
        num: 2,
        text: "Online media inspire me to keep on moving."
      },
      {
        num: 3,
        text: "Keep your physical condition in mind."
      },
      {
        num: 4,
        text: "Making exercise a habit works for me."
      },
      {
        num: 5,
        text: "What works for one doesn't work for another."
      },
      {
        num: 6,
        text: "A little trick can encourage your morning sport."
      },
      {
        num: 7,
        text: "Sometimes, the less you do, the better it is."
      }
    ],
    extraStatementNum: 5,
    /** A→3, B→7, C→2, D→1, E→4, F→6; лишнее — 5 */
    key: [3, 7, 2, 1, 4, 6],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "be sensible", ru: "быть разумным / не переусердствовать" },
      { en: "trust your instincts", ru: "доверять инстинктам" },
      { en: "make them shorter, or do fewer", ru: "сократить занятия или делать реже" },
      { en: "doesn't mean I should", ru: "не значит, что нужно" },
      { en: "fitness podcasts and online communities", ru: "подкасты о фитнесе и онлайн-сообщества" },
      { en: "gold star on days that I exercise", ru: "золотая звезда в дни тренировок" },
      { en: "visual motivator", ru: "визуальный мотиватор" },
      { en: "rest for more than four days between sessions", ru: "не отдыхать больше четырёх дней между занятиями" },
      { en: "doing things regularly", ru: "делать что-то регулярно" },
      { en: "move your alarm clock away from your bed", ru: "отодвинуть будильник от кровати" }
    ],
    tapPhrases: [
      { en: "If you're unwell, you can't do sports in the same way", ru: "если плохо себя чувствуешь — не тренируйся как обычно" },
      { en: "trust your instincts", ru: "доверяй инстинктам" },
      { en: "Running two or three times a week for 20-30 minutes", ru: "бег 2–3 раза по 20–30 минут" },
      { en: "doesn't mean I should", ru: "не значит, что надо" },
      { en: "fitness podcasts", ru: "подкасты о фитнесе" },
      { en: "star chart on my calendar", ru: "таблица звёзд в календаре" },
      { en: "gold star on days that I exercise", ru: "золотая звезда в дни тренировок" },
      { en: "not allow myself to rest for more than four days", ru: "не пропускать больше четырёх дней" },
      { en: "We get used to doing things regularly", ru: "привыкаем делать это регулярно" },
      { en: "put it next to your training kit", ru: "положить рядом с формой" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          { en: "The key thing with sports is to be sensible", ru: "главное в спорте — быть разумным", tip: "№3 · physical condition" },
          { en: "If you're unwell, you can't do sports in the same way", ru: "если плохо — нельзя заниматься как обычно", tip: "№3" },
          { en: "try to do things a bit slower", ru: "делать упражнения медленнее" },
          { en: "just moving can make you feel better", ru: "просто движение может помочь" },
          { en: "After recovering from an illness, trust your instincts", ru: "после болезни — доверяй инстинктам", tip: "№3" },
          { en: "don't go straight back into training four times a week", ru: "не возвращаться сразу к 4 тренировкам в неделю" },
          { en: "make them shorter, or do fewer", ru: "сократить или делать реже", tip: "ловушка №7" }
        ],
        fullText:
          "The key thing with sports is to be sensible. If you're unwell, you can't do sports in the same way. If you were planning on doing a high-intensity workout, you should try to do things a bit slower, but sometimes just moving can make you feel better. After recovering from an illness, trust your instincts. You don't want to go straight back into training four times a week. You might want to do the same number of sessions but make them shorter, or do fewer.",
        chunks: [
          {
            text:
              "The key thing with sports is to be sensible. If you're unwell, you can't do sports in the same way.",
            showText: true
          },
          {
            text:
              "If you were planning on doing a high-intensity workout, you should try to do things a bit slower, but sometimes just moving can make you feel better.",
            showText: true
          },
          {
            text:
              "After recovering from an illness, trust your instincts. You don't want to go straight back into training four times a week.",
            showText: true
          },
          {
            text:
              "You might want to do the same number of sessions but make them shorter, or do fewer.",
            showText: false
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "set a consistent running routine", ru: "выработать регулярный бег" },
          { en: "I kept pushing myself too hard", ru: "слишком сильно давил на себя" },
          {
            en: "Just because I can run for an hour doesn't mean I should",
            ru: "могу бежать час — не значит, что надо",
            tip: "парафраз №7 · less is better"
          },
          {
            en: "Running two or three times a week for 20-30 minutes",
            ru: "бег 2–3 раза по 20–30 минут",
            tip: "№7 · ключ"
          },
          { en: "improved my fitness hugely", ru: "сильно улучил форму" },
          { en: "a large bag of my favourite candies in my car", ru: "пакет конфет в машине" },
          { en: "allowing myself a handful before a workout", ru: "горсть конфет перед тренировкой" }
        ],
        fullText:
          "I've tried and failed a few times to set a consistent running routine, but that was because I kept pushing myself too hard. Just because I can run for an hour doesn't mean I should. Running two or three times a week for 20-30 minutes each time has improved my fitness hugely and made it easier to fit in. Also, I keep a large bag of my favourite candies in my car to motivate myself to get to the gym, allowing myself a handful before a workout.",
        chunks: [
          {
            text:
              "I've tried and failed a few times to set a consistent running routine, but that was because I kept pushing myself too hard.",
            showText: true
          },
          {
            text:
              "Just because I can run for an hour doesn't mean I should. Running two or three times a week for 20-30 minutes each time has improved my fitness hugely and made it easier to fit in.",
            showText: true
          },
          {
            text:
              "Also, I keep a large bag of my favourite candies in my car to motivate myself to get to the gym, allowing myself a handful before a workout.",
            showText: false
          }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          {
            en: "the vast network of fitness podcasts and online communities",
            ru: "мир подкастов о фитнесе и онлайн-сообществ",
            tip: "парафраз №2 · online media"
          },
          { en: "On days I lacked motivation", ru: "в дни без мотивации" },
          { en: "listen to a fitness podcast", ru: "слушала подкаст о фитнесе", tip: "№2" },
          { en: "absolutely determined to make the right choices", ru: "твёрдо решил выбрать правильное" },
          { en: "Your brain responds very well to repetition", ru: "мозг хорошо реагирует на повторение" },
          { en: "once you have made the difficult first change", ru: "после первого трудного изменения" },
          { en: "try some podcasts to stay tuned in", ru: "попробуйте подкасты, чтобы не сбиваться", tip: "№2" }
        ],
        fullText:
          "I opened up for myself the vast network of fitness podcasts and online communities. On days I lacked motivation, I would listen to a fitness podcast, and by the time I got home, I would be absolutely determined to make the right choices. In fact, I would be excited by it. Your brain responds very well to repetition, so once you have made the difficult first change, it becomes much easier over time. So I advise you to try some podcasts to stay tuned in.",
        chunks: [
          {
            text:
              "I opened up for myself the vast network of fitness podcasts and online communities.",
            showText: true
          },
          {
            text:
              "On days I lacked motivation, I would listen to a fitness podcast, and by the time I got home, I would be absolutely determined to make the right choices.",
            showText: true
          },
          {
            text:
              "In fact, I would be excited by it. Your brain responds very well to repetition, so once you have made the difficult first change, it becomes much easier over time.",
            showText: true
          },
          {
            text: "So I advise you to try some podcasts to stay tuned in.",
            showText: false
          }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          { en: "kept a 'star chart' on my calendar", ru: "вела «таблицу звёзд» в календаре", tip: "№1 · picture of progress" },
          { en: "after three years of being chronically unfit", ru: "после трёх лет плохой формы" },
          {
            en: "put a gold star on days that I exercise",
            ru: "золотая звезда в дни тренировок",
            tip: "парафраз №1"
          },
          { en: "a good visual motivator", ru: "хороший визуальный мотиватор", tip: "№1" },
          { en: "when I am feeling slug-like", ru: "когда чувствую себя «слишком ленивым»" },
          { en: "home cross trainer", ru: "домашний эллиптический тренажёр" },
          { en: "a ski fitness programme from an app", ru: "программу лыжной подготовки из приложения" },
          { en: "such simple things as a star chart could make a difference", ru: "что простая «таблица звёзд» может помочь", tip: "№1" }
        ],
        fullText:
          "I have kept a 'star chart' on my calendar for the past two years, after three years of being chronically unfit. I put a gold star on days that I exercise, and it's a good visual motivator for when I am feeling slug-like. I run, use our home cross trainer, and do a ski fitness programme from an app. My improved body strength has helped my running. I'd never thought such simple things as a star chart could make a difference.",
        chunks: [
          {
            text:
              "I have kept a 'star chart' on my calendar for the past two years, after three years of being chronically unfit.",
            showText: true
          },
          {
            text:
              "I put a gold star on days that I exercise, and it's a good visual motivator for when I am feeling slug-like.",
            showText: true
          },
          {
            text:
              "I run, use our home cross trainer, and do a ski fitness programme from an app.",
            showText: true
          },
          {
            text:
              "My improved body strength has helped my running. I'd never thought such simple things as a star chart could make a difference.",
            showText: false
          }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          { en: "one simple rule which could apply to any fitness activity", ru: "одно простое правило для любого спорта" },
          {
            en: "not allow myself to rest for more than four days between sessions",
            ru: "не пропускать больше 4 дней между занятиями",
            tip: "№4 · habit"
          },
          { en: "make sure I run before them", ru: "пробегусь заранее" },
          { en: "have 'saved' my four days", ru: "«сохранил» свои четыре дня" },
          { en: "illness, injury, or family emergencies", ru: "болезнь, травма или семейные форс-мажоры" },
          { en: "I have used this rule for 10 years", ru: "пользуюсь правилом 10 лет" },
          {
            en: "We get used to doing things regularly",
            ru: "привыкаем делать это регулярно",
            tip: "парафраз №4 · habit"
          },
          { en: "then it becomes difficult to stop", ru: "потом трудно остановиться" },
          { en: "That's the trick", ru: "в этом и секрет", tip: "№4" }
        ],
        fullText:
          "I have one simple rule which could apply to any fitness activity — I do not allow myself to rest for more than four days between sessions. So, if I know I have a busy couple of days coming up, I make sure I run before them so that I have 'saved' my four days. With the exception of illness, injury, or family emergencies, I have used this rule for 10 years. We get used to doing things regularly, and then it becomes difficult to stop. That's the trick.",
        chunks: [
          {
            text:
              "I have one simple rule which could apply to any fitness activity — I do not allow myself to rest for more than four days between sessions.",
            showText: true
          },
          {
            text:
              "So, if I know I have a busy couple of days coming up, I make sure I run before them so that I have 'saved' my four days.",
            showText: true
          },
          {
            text:
              "With the exception of illness, injury, or family emergencies, I have used this rule for 10 years.",
            showText: true
          },
          {
            text:
              "We get used to doing things regularly, and then it becomes difficult to stop. That's the trick.",
            showText: false
          }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          {
            en: "stick with a workout or exercise programme at the start of your day",
            ru: "придерживаться программы в начале дня",
            tip: "№6 · morning sport"
          },
          { en: "distracted by other responsibilities", ru: "отвлекает другими делами" },
          { en: "come up with excuses to skip your fitness session", ru: "найти отговорки пропустить тренировку" },
          { en: "get up early to exercise", ru: "рано вставать ради тренировки" },
          {
            en: "move your alarm clock away from your bed",
            ru: "отодвинуть будильник от кровати",
            tip: "парафраз №6 · little trick"
          },
          {
            en: "put it next to your training kit",
            ru: "положить рядом с формой",
            tip: "№6 · trick"
          },
          { en: "Once you have got up to turn it off, you might as well keep going", ru: "встал выключить — можно продолжать", tip: "№6" }
        ],
        fullText:
          "Surveys show that you're more likely to stick with a workout or exercise programme at the start of your day than some time later in the day, when you're more likely to be distracted by other responsibilities or have time to come up with excuses to skip your fitness session. If, like me, you need to get up early to exercise and you don't really like it, move your alarm clock away from your bed. Even better, put it next to your training kit. Once you have got up to turn it off, you might as well keep going!",
        chunks: [
          {
            text:
              "Surveys show that you're more likely to stick with a workout or exercise programme at the start of your day than some time later in the day, when you're more likely to be distracted by other responsibilities or have time to come up with excuses to skip your fitness session.",
            showText: true
          },
          {
            text:
              "If, like me, you need to get up early to exercise and you don't really like it, move your alarm clock away from your bed.",
            showText: true
          },
          {
            text:
              "Even better, put it next to your training kit. Once you have got up to turn it off, you might as well keep going!",
            showText: false
          }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 3,
        trapNums: [7],
        keyLineRu:
          "Утверждение 3 — учитывай физическое состояние (unwell, after illness).",
        evidencePromptRu:
          "<strong>Speaker A · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — sensible / unwell / trust instincts → <strong>№3</strong>.",
        distractorPromptRu:
          "<strong>Speaker A · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — shorter / fewer → ловушка <strong>№7</strong>, не главная мысль A.",
        promptRu:
          "<strong>Speaker A.</strong> Зелёным — physical condition. Красным — do less (№7).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "The key thing with sports is to be sensible",
            explainRu:
              "Парафраз <strong>№3</strong>: keep physical condition in mind."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "If you're unwell, you can't do sports in the same way",
            explainRu:
              "Прямая опора <strong>№3</strong>: состояние здоровья."
          },
          {
            kind: "glue",
            html:
              ". If you were planning on doing a high-intensity workout, you should try to do things a bit slower, but sometimes just moving can make you feel better. After recovering from an illness, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "trust your instincts",
            explainRu:
              "Слушай тело после болезни → <strong>№3</strong>."
          },
          {
            kind: "glue",
            html:
              ". You don't want to go straight back into training four times a week. You might want to do the same number of sessions but "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 7,
            text: "make them shorter, or do fewer",
            explainRu:
              "Ловушка <strong>№7</strong> (less is better): есть, но ключ A — condition (№3)."
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
        trapNums: [4],
        keyLineRu:
          "Утверждение 7 — меньше бега дало лучший результат.",
        evidencePromptRu:
          "<strong>Speaker B · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — doesn't mean I should · 20–30 min → <strong>№7</strong>.",
        distractorPromptRu:
          "<strong>Speaker B · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — consistent routine → <strong>№4</strong> (habit), не №7.",
        promptRu:
          "<strong>Speaker B.</strong> Зелёным — less duration. Красным — routine/habit (№4).",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "set a consistent running routine",
            explainRu:
              "Ловушка <strong>№4</strong> (habit): routine есть, но ключ — меньше нагрузки (№7)."
          },
          {
            kind: "glue",
            html: ", but that was because I kept pushing myself too hard. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "Just because I can run for an hour doesn't mean I should",
            explainRu:
              "Парафраз <strong>№7</strong>: the less you do, the better."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "Running two or three times a week for 20-30 minutes each time has improved my fitness hugely",
            explainRu:
              "Меньше времени — лучший результат → <strong>№7</strong>."
          },
          {
            kind: "glue",
            html:
              " and made it easier to fit in. Also, I keep a large bag of my favourite candies in my car to motivate myself to get to the gym, allowing myself a handful before a workout."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 2,
        trapNums: [4],
        keyLineRu:
          "Утверждение 2 — podcasts / online communities вдохновляют двигаться.",
        evidencePromptRu:
          "<strong>Speaker C · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — podcasts / online → <strong>№2</strong>.",
        distractorPromptRu:
          "<strong>Speaker C · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — repetition / habit → <strong>№4</strong>, не №2.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным — online media. Красным — repetition (№4).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "fitness podcasts and online communities",
            explainRu:
              "Прямой парафраз <strong>№2</strong>: online media inspire."
          },
          {
            kind: "glue",
            html: ". On days I lacked motivation, I would "
          },
          {
            kind: "hit",
            sol: "e",
            text: "listen to a fitness podcast",
            explainRu:
              "Подкаст мотивирует keep on moving → <strong>№2</strong>."
          },
          {
            kind: "glue",
            html:
              ", and by the time I got home, I would be absolutely determined to make the right choices. In fact, I would be excited by it. "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "Your brain responds very well to repetition",
            explainRu:
              "Ловушка <strong>№4</strong> (habit): repetition — не online media (№2)."
          },
          {
            kind: "glue",
            html:
              ", so once you have made the difficult first change, it becomes much easier over time. So I advise you to try some podcasts to stay tuned in."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 1,
        trapNums: [4],
        keyLineRu:
          "Утверждение 1 — star chart как картина прогресса.",
        evidencePromptRu:
          "<strong>Speaker D · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — star chart / visual motivator → <strong>№1</strong>.",
        distractorPromptRu:
          "<strong>Speaker D · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — two years / regularly → <strong>№4</strong>, не №1.",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным — visual progress. Красным — habit (№4).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "kept a 'star chart' on my calendar",
            explainRu:
              "Визуальный прогресс → <strong>№1</strong> picture showing progress."
          },
          {
            kind: "glue",
            html: " for the past two years, after three years of being chronically unfit. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "put a gold star on days that I exercise",
            explainRu:
              "Отметки прогресса на календаре → <strong>№1</strong>."
          },
          {
            kind: "glue",
            html: ", and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "it's a good visual motivator",
            explainRu:
              "Visual = picture of progress → <strong>№1</strong>."
          },
          {
            kind: "glue",
            html:
              " for when I am feeling slug-like. I run, use our home cross trainer, and do a ski fitness programme from an app. My improved body strength has helped my running. I'd never thought "
          },
          {
            kind: "hit",
            sol: "e",
            text: "such simple things as a star chart could make a difference",
            explainRu:
              "Подтверждение <strong>№1</strong>: progress chart matters."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 4,
        trapNums: [3],
        keyLineRu:
          "Утверждение 4 — регулярность / привычка (10 years, regularly).",
        evidencePromptRu:
          "<strong>Speaker E · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — regularly / difficult to stop → <strong>№4</strong>.",
        distractorPromptRu:
          "<strong>Speaker E · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — illness, injury → <strong>№3</strong>, не №4.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным — habit. Красным — illness exception (№3).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I do not allow myself to rest for more than four days between sessions",
            explainRu:
              "Правило регулярности → <strong>№4</strong> habit."
          },
          {
            kind: "glue",
            html:
              ". So, if I know I have a busy couple of days coming up, I make sure I run before them so that I have 'saved' my four days. With the exception of "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "illness, injury, or family emergencies",
            explainRu:
              "Ловушка <strong>№3</strong> (physical condition): исключение, не главная мысль (№4)."
          },
          {
            kind: "glue",
            html: ", I have used this rule for 10 years. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "We get used to doing things regularly",
            explainRu:
              "Прямой парафраз <strong>№4</strong>: making exercise a habit."
          },
          {
            kind: "glue",
            html: ", and then it becomes difficult to stop. "
          },
          {
            kind: "hit",
            sol: "e",
            text: "That's the trick",
            explainRu:
              "Секрет — привычка → <strong>№4</strong>."
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
        trapNums: [2],
        keyLineRu:
          "Утверждение 6 — trick с будильником для утреннего спорта.",
        evidencePromptRu:
          "<strong>Speaker F · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — alarm / training kit → <strong>№6</strong>.",
        distractorPromptRu:
          "<strong>Speaker F · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — Surveys show → общее, не trick (№6).",
        promptRu:
          "<strong>Speaker F.</strong> Зелёным — alarm trick. Красным — start of day only.",
        segments: [
          {
            kind: "glue",
            html:
              "Surveys show that you're more likely to stick with a workout or exercise programme at the start of your day than some time later in the day, when you're more likely to be distracted by other responsibilities or have time to come up with excuses to skip your fitness session. If, like me, you need to get up early to exercise and you don't really like it, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "move your alarm clock away from your bed",
            explainRu:
              "Little trick → <strong>№6</strong> morning sport."
          },
          {
            kind: "glue",
            html: ". Even better, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "put it next to your training kit",
            explainRu:
              "Часть trick → <strong>№6</strong>."
          },
          {
            kind: "glue",
            html: ". "
          },
          {
            kind: "hit",
            sol: "e",
            text: "Once you have got up to turn it off, you might as well keep going",
            explainRu:
              "Смысл trick: подтолкнуть к утренней тренировке → <strong>№6</strong>."
          },
          {
            kind: "glue",
            html: "!"
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
