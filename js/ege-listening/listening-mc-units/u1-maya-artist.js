/**
 * ЕГЭ Listening MC · Unit 1 · Maya Swan · Afternoon Art Show.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-maya-artist",
    unitOrder: 1,
    title: "Unit 1 · Afternoon Art Show",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Presenter & Maya Swan · art & frustration",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%201%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью с художником</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> один верный смысл из трёх формулировок — часто это парафраз, не дословная цитата.</p>" +
      "<ul>" +
      "<li><strong>Ловушка №1:</strong> слово из записи в <em>другом</em> контексте (*Morning Star* ≠ утро, *approval* ≈ moral support).</li>" +
      "<li><strong>Ловушка №2:</strong> противопоставление (*unlike running… track progress*) — это <em>различие</em>, не сходство.</li>" +
      "<li><strong>Ловушка №3:</strong> «похоже по смыслу» ≠ «сказано в записи» (*look horrible* ≠ objectively terrible).</li>" +
      "<li>Второе прослушивание — для спорных номеров 5–8.</li>" +
      "</ul>",

    questions: [
      {
        examNum: 3,
        prompt: "When does the show run?",
        key: 2,
        choices: [
          { num: 1, text: "In the morning." },
          { num: 2, text: "In the afternoon." },
          { num: 3, text: "In the evening." }
        ],
        explainRu:
          "Ведущий приглашает Maya на «Afternoon Art Show» — шоу днём, после обеда.",
        distractorWrongRu: {
          1: "Morning Star — название награды, не время эфира.",
          3: "В записи нет evening / вечернего шоу."
        }
      },
      {
        examNum: 4,
        prompt:
          "According to Maya, the biggest challenge for beginners is that their drawings",
        key: 3,
        choices: [
          { num: 1, text: "do not look realistic." },
          { num: 2, text: "objectively look terrible." },
          { num: 3, text: "differ from what they expected." }
        ],
        explainRu:
          "Maya: drawings «don't quite look the way you imagined them» — не совпадают с ожиданием, а не «нереалистичны» или «ужасны».",
        distractorWrongRu: {
          1: "Про realistic / реализм в записи не сказано.",
          2: "looks horrible — её риторический вопрос, не «objectively terrible»."
        }
      },
      {
        examNum: 5,
        prompt: "Maya uses the image of an iceberg to highlight…",
        key: 1,
        choices: [
          { num: 1, text: "time spent on practice." },
          { num: 2, text: "forthcoming results." },
          { num: 3, text: "necessary artistic skills." }
        ],
        explainRu:
          "Айсberg = видимая вершина vs «countless hours of practice» под водой — про скрытый объём работы.",
        distractorWrongRu: {
          2: "Речь о прошлой практике, не о будущих результатах.",
          3: "Skills упоминаются, но метафора про часы практики, не про набор навыков."
        }
      },
      {
        examNum: 6,
        prompt: "On social media, artists tend to share their…",
        key: 1,
        choices: [
          { num: 1, text: "finished works." },
          { num: 2, text: "failed attempts." },
          { num: 3, text: "creative process." }
        ],
        explainRu:
          "Presenter: people see «final results» / «snapshots», but never «unsuccessful attempts» or the whole process.",
        distractorWrongRu: {
          2: "Failed attempts как раз не показывают.",
          3: "Whole learning process тоже не видно — только финальные кадры."
        }
      },
      {
        examNum: 7,
        prompt: "Running is similar to art in that…",
        key: 3,
        choices: [
          { num: 1, text: "it takes years to master it." },
          { num: 2, text: "it is easy to track your progress." },
          { num: 3, text: "it is a gradual process." }
        ],
        explainRu:
          "Марафон после дивана — нельзя ждать мгновенного результата; art тоже постепенный путь (не сразу).",
        distractorWrongRu: {
          1: "Years упоминаются у других художников, но сходство — в постепенности, не в «years to master».",
          2: "Track progress — у бега да, но Presenter говорит unlike running — это различие, не сходство."
        }
      },
      {
        examNum: 8,
        prompt: "Artists turn to social media to get…",
        key: 3,
        choices: [
          { num: 1, text: "inspiration." },
          { num: 2, text: "new skills." },
          { num: 3, text: "moral support." }
        ],
        explainRu:
          "Maya: «some kind of approval» when they feel stuck — одобрение / поддержка, не inspiration или skills.",
        distractorWrongRu: {
          1: "Inspiration в этой реплике не звучит.",
          2: "New skills не упоминаются — только approval."
        }
      },
      {
        examNum: 9,
        prompt: "Why does Maya describe improvement in art as a bumpy road?",
        key: 2,
        choices: [
          { num: 1, text: "It's not visible to others." },
          { num: 2, text: "It's not a smooth process." },
          { num: 3, text: "It's not appreciated by the public." }
        ],
        explainRu:
          "«Bumpy road with dips and plateaus» — не ровный подъём; improvement не always a straightforward climb.",
        distractorWrongRu: {
          1: "Про видимость для others не сказано.",
          3: "Public appreciation не обсуждается — речь о форме прогресса."
        }
      }
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Welcome back to our radio show! Today, we're joined by Maya Swan, a talented artist who graduated from the prestigious Central College of Art and Design. Maya's work has been recognised with several awards, including the Morning Star at the Art Gallery, and the Young Artist Award at the National Gallery last year. Maya, thanks for joining us at our Afternoon Art Show!"
          },
          { speaker: "Maya", text: "Hi everyone. Thanks for having me!" }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Absolutely! So, Maya, let's dive right in. We all hear it constantly — practice makes perfect. But sometimes, especially when you're starting, drawing can feel... well, frustrating. How to deal with that initial discouragement?"
          },
          {
            speaker: "Maya",
            text:
              "That feeling is definitely easy to understand! You put in all this effort, but your drawings just don't quite look the way you imagined them. It's easy to get discouraged and wonder, \"How am I supposed to have fun if everything I draw looks horrible?\""
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Exactly! And it can be even worse if you feel like you're not improving, even after all that hard work."
          },
          {
            speaker: "Maya",
            text:
              "Been there, done that! Here's the thing: getting frustrated with your art is more common than you think. It happens to beginners and even seasoned artists. You spend hours on a piece, and it just doesn't come together. It's natural to feel upset about that. I think part of the problem is that people don't quite understand the commitment it takes to develop artistic skills."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Maya",
            text:
              "They see these amazing final products, these polished paintings or time-lapse videos, and they don't realise the countless hours of practice that went into getting there. It's like comparing the tip of the iceberg to the whole thing hidden beneath the surface."
          },
          {
            speaker: "Presenter",
            text:
              "I guess social media doesn't help either, does it? People see these final results, these snapshots of an artist's journey, but never unsuccessful attempts or even the whole learning process."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Maya",
            text:
              "Exactly! And that can be discouraging, especially when you're comparing yourself to artists who've been at it for years. It's like trying to run a marathon after just getting off the couch! You wouldn't expect immediate results, would you?"
          },
          {
            speaker: "Presenter",
            text:
              "Well, I did, once. But unlike running, where you can track your speed or distance, improvement in art can take more work to measure."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Maya",
            text:
              "That's true. It's easy to get caught up in this loop of wanting to see constant improvement, and when you don't, it feels like you're failing. That's why so many artists go to social media for some kind of approval, especially when they feel stuck."
          },
          {
            speaker: "Presenter",
            text:
              "Do you mean when they feel like they've hit a wall and their skills aren't developing?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Maya",
            text:
              "Yes. Plateaus — when you reach a particular level and then stay the same — are a natural part of the learning process. You make initial progress, feel motivated, and then — bam! You hit a wall. It's essential to accept that these plateaus will happen. Improvement isn't always a straightforward climb. It can be a bumpy road with dips and plateaus, but the overall trend is still positive."
          },
          {
            speaker: "Presenter",
            text:
              "So, if focusing on results and improvement can be frustrating, what should artists focus on instead?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Maya",
            text:
              "This might sound strange, but try focusing on the process. Enjoy the act of creating, the exploration, and the journey of discovery on that blank canvas. When I first started, I used to be terrified of starting a new piece. What if it turned out wrong? All that worry took the joy out of creating. But then I started thinking of each drawing as an adventure. The possibilities are endless! I might have a vague idea in mind, but I won't know exactly how it will turn out once I start putting pen to paper. The process of discovery becomes the fun part."
          }
        ]
      }
    ],

    huntLabs: [
      {
        examNum: 3,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "Afternoon Art Show — шоу во второй половине дня.",
        explainRu: "Название программы прямо содержит Afternoon.",
        evidencePromptRu: "Найди название шоу — там время эфира.",
        segments: [
          { kind: "hit", sol: "e", text: "Afternoon Art Show" },
          {
            kind: "hit",
            sol: "d",
            text: "Morning Star",
            wrongOption: 1,
            distractExplainRu:
              "Morning Star — название награды, не время эфира. Ловушка варианта 1 (morning)."
          }
        ]
      },
      {
        examNum: 4,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "don't look the way you imagined them.",
        explainRu: "Ключ — расхождение с ожиданием, не realistic / objectively terrible.",
        evidencePromptRu: "Найди фразу Maya про ожидания vs результат.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "don't quite look the way you imagined them"
          },
          {
            kind: "hit",
            sol: "d",
            text: "everything I draw looks horrible",
            wrongOption: 2,
            distractExplainRu:
              "looks horrible — эмоция Maya в вопросе, не «objectively terrible» (вариант 2)."
          }
        ]
      },
      {
        examNum: 5,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "countless hours of practice · tip of the iceberg.",
        explainRu: "Айсberg скрывает объём практики под «вершиной».",
        evidencePromptRu: "Найди метафору айсберга и часы практики.",
        segments: [
          { kind: "hit", sol: "e", text: "countless hours of practice" },
          {
            kind: "hit",
            sol: "e",
            text: "tip of the iceberg to the whole thing hidden beneath the surface"
          },
          {
            kind: "hit",
            sol: "d",
            text: "amazing final products",
            wrongOption: 2,
            distractExplainRu:
              "final products — уже готовый результат, не «forthcoming results» / будущие итоги (вариант 2)."
          }
        ]
      },
      {
        examNum: 6,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "final results / snapshots — not unsuccessful attempts.",
        explainRu: "В соцсетях видят готовое, а не провалы.",
        evidencePromptRu: "Найди контраст final results vs unsuccessful attempts.",
        segments: [
          { kind: "hit", sol: "e", text: "final results" },
          {
            kind: "hit",
            sol: "d",
            text: "snapshots of an artist's journey",
            wrongOption: 3,
            distractExplainRu:
              "snapshots — отдельные кадры, не полный creative process (вариант 3)."
          }
        ]
      },
      {
        examNum: 7,
        key: 3,
        paragraphIndex: 4,
        keyLineRu: "marathon after getting off the couch — no immediate results.",
        explainRu: "Сходство с art: постепенность, не мгновенный прогресс.",
        evidencePromptRu: "Найди метафору марафона и unlike running про track progress.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "run a marathon after just getting off the couch"
          },
          {
            kind: "hit",
            sol: "d",
            text: "track your speed or distance",
            wrongOption: 2,
            distractExplainRu:
              "Presenter сравнивает с бегом наоборот: там progress легко measure — это ловушка варианта 2, не сходство."
          }
        ]
      },
      {
        examNum: 8,
        key: 3,
        paragraphIndex: 5,
        keyLineRu: "some kind of approval when they feel stuck.",
        explainRu: "Approval ≈ moral support, не inspiration.",
        evidencePromptRu: "Найди, зачем художники идут в social media.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "go to social media for some kind of approval"
          },
          {
            kind: "hit",
            sol: "d",
            text: "constant improvement",
            wrongOption: 1,
            distractExplainRu:
              "constant improvement — про застревание и провал, не inspiration (вариант 1)."
          }
        ]
      },
      {
        examNum: 9,
        key: 2,
        paragraphIndex: 6,
        keyLineRu: "bumpy road with dips and plateaus — not a straightforward climb.",
        explainRu: "Bumpy road = процесс не гладкий.",
        evidencePromptRu: "Найди bumpy road и straightforward climb.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "bumpy road with dips and plateaus"
          },
          {
            kind: "hit",
            sol: "e",
            text: "isn't always a straightforward climb"
          },
          {
            kind: "hit",
            sol: "d",
            text: "the overall trend is still positive",
            wrongOption: 1,
            distractExplainRu:
              "positive trend — общий итог хороший, но вопрос про bumpy road = not smooth process (вар. 2), не «не видно другим»."
          }
        ]
      }
    ],

    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter",
        fullText:
          "Welcome back to our radio show! Today, we're joined by Maya Swan, a talented artist who graduated from the prestigious Central College of Art and Design. Maya's work has been recognised with several awards, including the Morning Star at the Art Gallery, and the Young Artist Award at the National Gallery last year. Maya, thanks for joining us at our Afternoon Art Show! Absolutely! So, Maya, let's dive right in. We all hear it constantly — practice makes perfect. But sometimes, especially when you're starting, drawing can feel... well, frustrating. How to deal with that initial discouragement? Exactly! And it can be even worse if you feel like you're not improving, even after all that hard work. I guess social media doesn't help either, does it? People see these final results, these snapshots of an artist's journey, but never unsuccessful attempts or even the whole learning process. Well, I did, once. But unlike running, where you can track your speed or distance, improvement in art can take more work to measure. Do you mean when they feel like they've hit a wall and their skills aren't developing? So, if focusing on results and improvement can be frustrating, what should artists focus on instead?",
        phrases: [
          { en: "Welcome back to our radio show", ru: "снова добро пожаловать в нашу радиопередачу" },
          { en: "joined by Maya Swan", ru: "к нам присоединилась Maya Swan" },
          { en: "talented artist", ru: "талантливая художница" },
          {
            en: "graduated from the prestigious Central College of Art and Design",
            ru: "окончила престижный Central College of Art and Design"
          },
          { en: "recognised with several awards", ru: "удостоена нескольких наград" },
          { en: "Morning Star at the Art Gallery", ru: "Morning Star в Art Gallery", tip: "3 · не morning эфир" },
          { en: "Young Artist Award", ru: "премия Young Artist Award" },
          { en: "National Gallery last year", ru: "National Gallery в прошлом году" },
          {
            en: "Afternoon Art Show",
            ru: "передача Afternoon Art Show (дневное шоу)",
            tip: "3 · ключ"
          },
          { en: "Thanks for having me", ru: "спасибо, что пригласили" },
          { en: "let's dive right in", ru: "давайте сразу к делу" },
          { en: "practice makes perfect", ru: "практика ведёт к совершенству" },
          { en: "initial discouragement", ru: "первоначальное разочарование / уныние" },
          { en: "feel like you're not improving", ru: "кажется, что не прогрессируешь" },
          { en: "after all that hard work", ru: "после всей этой тяжёлой работы" },
          { en: "social media doesn't help either", ru: "соцсети тоже не помогают" },
          { en: "final results", ru: "готовые / финальные работы", tip: "6 · ключ" },
          { en: "snapshots of an artist's journey", ru: "отрывки / снимки пути художника" },
          {
            en: "never unsuccessful attempts",
            ru: "никогда не неудачные попытки (их не показывают)",
            tip: "6 · ловушка 2"
          },
          { en: "the whole learning process", ru: "весь процесс обучения" },
          {
            en: "unlike running, where you can track your speed or distance",
            ru: "в отличие от бега, где можно отслеживать скорость или дистанцию",
            tip: "7 · contrast, не similarity"
          },
          {
            en: "improvement in art can take more work to measure",
            ru: "прогресс в искусстве сложнее измерить"
          },
          { en: "hit a wall", ru: "упереться в стену / застрять" },
          { en: "skills aren't developing", ru: "навыки не развиваются" },
          {
            en: "what should artists focus on instead",
            ru: "на чём художникам лучше сосредоточиться вместо этого"
          }
        ],
        chunks: [
          {
            text:
              "Welcome back … Afternoon Art Show! Hi everyone. Thanks for having me!",
            showText: true
          },
          {
            text:
              "Absolutely! So, Maya, let's dive right in … initial discouragement?",
            showText: true
          },
          {
            text:
              "Exactly! And it can be even worse if you feel like you're not improving …",
            showText: true
          },
          {
            text:
              "I guess social media doesn't help either … whole learning process.",
            showText: true
          },
          {
            text:
              "Well, I did, once. But unlike running … more work to measure.",
            showText: true
          },
          {
            text:
              "Do you mean when they feel like they've hit a wall … developing?",
            showText: true
          },
          {
            text:
              "So, if focusing on results … focus on instead?",
            showText: true
          }
        ]
      },
      {
        id: "Maya",
        label: "Maya",
        fullText:
          "Hi everyone. Thanks for having me! That feeling is definitely easy to understand! You put in all this effort, but your drawings just don't quite look the way you imagined them. It's easy to get discouraged and wonder, \"How am I supposed to have fun if everything I draw looks horrible?\" Been there, done that! Here's the thing: getting frustrated with your art is more common than you think. It happens to beginners and even seasoned artists. You spend hours on a piece, and it just doesn't come together. It's natural to feel upset about that. I think part of the problem is that people don't quite understand the commitment it takes to develop artistic skills. They see these amazing final products, these polished paintings or time-lapse videos, and they don't realise the countless hours of practice that went into getting there. It's like comparing the tip of the iceberg to the whole thing hidden beneath the surface. Exactly! And that can be discouraging, especially when you're comparing yourself to artists who've been at it for years. It's like trying to run a marathon after just getting off the couch! You wouldn't expect immediate results, would you? That's true. It's easy to get caught up in this loop of wanting to see constant improvement, and when you don't, it feels like you're failing. That's why so many artists go to social media for some kind of approval, especially when they feel stuck. Yes. Plateaus — when you reach a particular level and then stay the same — are a natural part of the learning process. You make initial progress, feel motivated, and then — bam! You hit a wall. It's essential to accept that these plateaus will happen. Improvement isn't always a straightforward climb. It can be a bumpy road with dips and plateaus, but the overall trend is still positive. This might sound strange, but try focusing on the process. Enjoy the act of creating, the exploration, and the journey of discovery on that blank canvas. When I first started, I used to be terrified of starting a new piece. What if it turned out wrong? All that worry took the joy out of creating. But then I started thinking of each drawing as an adventure. The possibilities are endless! I might have a vague idea in mind, but I won't know exactly how it will turn out once I start putting pen to paper. The process of discovery becomes the fun part.",
        phrases: [
          { en: "That feeling is definitely easy to understand", ru: "это чувство действительно легко понять" },
          { en: "put in all this effort", ru: "вложить столько усилий" },
          {
            en: "don't quite look the way you imagined them",
            ru: "не выглядят так, как вы их себе представляли",
            tip: "4 · ключ"
          },
          { en: "get discouraged", ru: "терять мотивацию / унывать" },
          { en: "everything I draw looks horrible", ru: "всё, что рисую, выглядит ужасно", tip: "4 · ловушка 2" },
          { en: "Been there, done that", ru: "была там, проходила это" },
          { en: "getting frustrated with your art", ru: "разочаровываться в своём искусстве" },
          { en: "more common than you think", ru: "часто встречается, чем кажется" },
          { en: "seasoned artists", ru: "опытные / закалённые художники" },
          { en: "doesn't come together", ru: "не складывается (работа)" },
          { en: "feel upset about that", ru: "расстраиваться из-за этого" },
          {
            en: "commitment it takes to develop artistic skills",
            ru: "преданность делу, нужная для развития навыков"
          },
          { en: "amazing final products", ru: "потрясающие готовые работы" },
          { en: "polished paintings", ru: "отполированные / законченные картины" },
          { en: "time-lapse videos", ru: "видео в ускоренной съёмке" },
          {
            en: "countless hours of practice",
            ru: "бесчисленные часы практики",
            tip: "5 · ключ"
          },
          {
            en: "tip of the iceberg",
            ru: "вершина айсберга (малая видимая часть)",
            tip: "5 · метафора"
          },
          { en: "hidden beneath the surface", ru: "скрытое под поверхностью" },
          { en: "comparing yourself to artists", ru: "сравнивать себя с художниками" },
          { en: "been at it for years", ru: "занимаются этим годами" },
          {
            en: "run a marathon after just getting off the couch",
            ru: "бежать марафон, только что встав с дивана",
            tip: "7 · gradual process"
          },
          { en: "wouldn't expect immediate results", ru: "не ждал бы мгновенных результатов" },
          { en: "get caught up in this loop", ru: "застрять в этом цикле" },
          { en: "constant improvement", ru: "постоянное улучшение" },
          { en: "feels like you're failing", ru: "кажется, что ты проваливаешься" },
          {
            en: "some kind of approval",
            ru: "какое-то одобрение / поддержка",
            tip: "8 · moral support"
          },
          { en: "especially when they feel stuck", ru: "особенно когда застряли" },
          { en: "Plateaus", ru: "плато (период без роста)" },
          { en: "natural part of the learning process", ru: "естественная часть обучения" },
          { en: "You hit a wall", ru: "упираешься в стену" },
          { en: "straightforward climb", ru: "прямой / ровный подъём" },
          {
            en: "bumpy road with dips and plateaus",
            ru: "неровная дорога с провалами и плато",
            tip: "9 · ключ"
          },
          { en: "the overall trend is still positive", ru: "общий тренд всё равно положительный" },
          { en: "focus on the process", ru: "сосредоточиться на процессе" },
          { en: "the act of creating", ru: "сам процесс творчества" },
          { en: "journey of discovery", ru: "путь открытий" },
          { en: "blank canvas", ru: "чистый холст" },
          { en: "terrified of starting a new piece", ru: "боялась начинать новую работу" },
          { en: "took the joy out of creating", ru: "отбирало радость творчества" },
          { en: "each drawing as an adventure", ru: "каждый рисунок как приключение" },
          { en: "The possibilities are endless", ru: "возможности безграничны" },
          { en: "a vague idea in mind", ru: "смутная идея в голове" },
          { en: "putting pen to paper", ru: "прикладывать перо к бумаге / начать рисовать" },
          { en: "process of discovery becomes the fun part", ru: "процесс открытия становится самым интересным" }
        ],
        chunks: [
          {
            text:
              "That feeling is definitely easy to understand … looks horrible?",
            showText: true
          },
          {
            text:
              "Been there, done that! … develop artistic skills.",
            showText: true
          },
          {
            text:
              "They see these amazing final products … beneath the surface.",
            showText: true
          },
          {
            text:
              "Exactly! And that can be discouraging … immediate results, would you?",
            showText: true
          },
          {
            text:
              "That's true. It's easy to get caught up … especially when they feel stuck.",
            showText: true
          },
          {
            text:
              "Yes. Plateaus … overall trend is still positive.",
            showText: true
          },
          {
            text:
              "This might sound strange … discovery becomes the fun part.",
            showText: true
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
