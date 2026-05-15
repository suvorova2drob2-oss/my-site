/**
 * ЕГЭ Reading — Multiple Choice, юнит 9 · Why I write my journal.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-why-i-write-my-journal",
    unitOrder: 9,
    title: "Unit 9 · Why I write my journal",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          'Before I started writing my bullet journal, I kept asking: "Is it a to-do list, a planner, or a diary?" This was my main question, and I was very annoyed when they told me it was all of these things. But it is all of these things!',
        evidence: {
          support: [
            "Is it a to-do list, a planner, or a diary?",
            "all of these things"
          ],
          distract: ["I was very annoyed"]
        }
      },
      {
        n: 2,
        text:
          "I like bullet journaling because it's a great way to track my day-to-day activities, as well as my long-term goals. Planners and to-do lists typically only focus on what you're doing in the future, and diaries typically focus on what you did that day. But all of these things give us a complete picture of who we are. Before I started bullet journaling, the idea of keeping my diary, my personal to-do list, and my work tasks in the same place seemed absurd. But now I understand both how to organise that, and also why it makes sense.",
        evidence: {
          support: [
            "seemed absurd",
            "why it makes sense"
          ],
          distract: ["a complete picture of who we are"]
        }
      },
      {
        n: 3,
        text:
          "I'm amazed at how many things I left out of my old diaries: I basically just wrote about boys I had crushes on and nothing else. I didn't write nearly enough about my friends, cool things I was reading, or simply what my daily routine was like. Bullet journaling helps you record all of the things that are going on in your life, and makes it easy to keep track of the things you want to do in the future.",
        evidence: {
          support: [
            "boys I had crushes on",
            "what my daily routine was like"
          ],
          distract: ["record all of the things that are going on"]
        }
      },
      {
        n: 4,
        text:
          "It also gives me a space to literally record anything else that doesn't fall into those categories. I have used my journals to take notes in class when I forgot my subject notebook, in meetings, and in info sessions. I've used it to plan essays and presentations. I even used it as an art journal, where I would draw or just stick random things onto the pages.",
        evidence: {
          support: [
            "take notes in class",
            "plan essays and presentations",
            "art journal"
          ],
          distract: ["stick random things onto the pages"]
        }
      },
      {
        n: 5,
        text:
          "However, many might think that journaling is too time-consuming. \"How do you keep up with it?\" is the question that I get every time I show someone my journals. Yes, it can be time-consuming if you make it so. Like many others, I realised quickly that setting up the planner layout at the beginning of every month was too time-consuming, and I started resorting to using the journal to record all of my random thoughts and ideas before they float away into nothingness. I used it as a combination of a diary, planner, and to-do lists—where I could write whatever's on my mind and whatever's necessary. Pay attention to the key word: necessary. Don't feel pressured to keep up with a structure and to set aside time to journal when you don't actually have the time. The journal is yours and it's meant to help you!",
        evidence: {
          support: [
            "journaling is too time-consuming",
            "setting up the planner layout … was too time-consuming"
          ],
          distract: ["The journal is yours"]
        }
      },
      {
        n: 6,
        text:
          "The only reason why I've kept up with it for so long is that I've forgotten how to function as well as I do now without one. I honestly need it to sort out all the projects I'm involved in, and to keep myself sane. It's a productivity tool as well as therapy. But I don't always \"keep up\" with my journal. If I've set aside a page to track my spending, and suddenly I don't feel like that's useful anymore, I'll just abandon it. It's your journal, your rules.",
        evidence: {
          support: [
            "productivity tool as well as therapy",
            "sort out all the projects I'm involved in"
          ],
          distract: ["I'll just abandon it"]
        }
      },
      {
        n: 7,
        text:
          "Personally, I write literally everything. I've shamelessly recommended journaling to many people over the past year, and many have told me that they are too scared to write. Some mention that they don't know how to make their pages look pretty. I always say the same thing: it really doesn't need to be pretty for it to be useful. I try to make mine nice to look at because I wanted to be creative with it. It was one of my goals when I started a journal. But if you aren't into aesthetics, feel free to use a pen and a blank journal.",
        evidence: {
          support: [
            "doesn't need to be pretty for it to be useful",
            "a pen and a blank journal"
          ],
          distract: ["too scared to write"]
        }
      },
      {
        n: 8,
        text:
          "You also don't have to write that much. Why force yourself to write pages and pages if you have nothing to say? Just write down things that you find interesting, and things that you need to write down—like a grocery list, or the framework problems given in class. And if you make a mistake, just turn over to a new page and start over. After all, that's the beauty of a blank journal.",
        evidence: {
          support: [
            "don't have to write that much",
            "the beauty of a blank journal"
          ],
          distract: ["grocery list"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt:
          "Before the author started bullet journaling she thought it was …",
        key: 4,
        choices: [
          { num: 1, text: "annoying." },
          { num: 2, text: "uninteresting." },
          { num: 3, text: "sensible." },
          { num: 4, text: "unreasonable." }
        ],
        explainRu:
          "Идея держать дневник, личный to-do и рабочие задачи <strong>в одном месте</strong> казалась ей <strong>absurd</strong> — то есть <strong>неразумной/абсурдной</strong>. Раздражение в первом абзаце относится к чужим ответам «это всё сразу», а не к оценке самого метода."
      },
      {
        examNum: 13,
        prompt:
          "It is implied that the author mainly used her diaries to write about her …",
        key: 2,
        choices: [
          { num: 1, text: "school friends." },
          { num: 2, text: "unreturned love." },
          { num: 3, text: "future plans." },
          { num: 4, text: "daily activities." }
        ],
        explainRu:
          "Почти только <strong>boys I had crushes on</strong> — это про влюблённости / crush, т.е. ближе к варианту про <strong>«безответную любовь»</strong> в формулировке теста, чем про друзей, планы или распорядок дня (которые как раз <strong>недописаны</strong>)."
      },
      {
        examNum: 14,
        prompt:
          "Which is <strong>NOT</strong> mentioned in the text as a good use of a journal?",
        key: 1,
        choices: [
          { num: 1, text: "Presenting in meetings." },
          { num: 2, text: "Creating pictures." },
          { num: 3, text: "Preparing for classes." },
          { num: 4, text: "Writing things down in class." }
        ],
        explainRu:
          "Есть конспект на парах, план эссе и презентаций (подготовка), арт-журнал с рисунками. Встречи упомянуты в связи с <strong>заметками</strong> (<strong>take notes … in meetings</strong>), а не с <strong>выступлением на собрании</strong>."
      },
      {
        examNum: 15,
        prompt:
          "<strong>It</strong> in &ldquo;Yes, it can be time-consuming&rdquo; (paragraph 5) most probably refers to …",
        key: 4,
        choices: [
          { num: 1, text: "showing your journal." },
          { num: 2, text: "recording your thoughts." },
          { num: 3, text: "setting up a planner." },
          { num: 4, text: "keeping a journal." }
        ],
        explainRu:
          "Перед этим вопрос <strong>How do you keep up with it?</strong> про ведение дневника в целом; <strong>it can be time-consuming</strong> отвечает на опасение, что <strong>сам процесс журналинга</strong> затратит время, если сама так задашь режим. Отдельно потом автор уточняет про тяжёлый <strong>monthly layout</strong> — это уже следующее предложение."
      },
      {
        examNum: 16,
        prompt: "Why did the author write her journal for so long?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "It is a habit, though not always useful."
          },
          {
            num: 2,
            text: "It is advice from her therapist."
          },
          {
            num: 3,
            text: "It increases her efficiency."
          },
          {
            num: 4,
            text: "It helps her to limit her spending."
          }
        ],
        explainRu:
          "Она связывает длительность с тем, что без блокнота хуже «функционирует», нужен для проектов и описывает инструмент как <strong>productivity</strong> (плюс терапевтический эффект, но не «совет психотерапевта»). Учёт трат может бросить; это не причина многолетней практики."
      },
      {
        examNum: 17,
        prompt:
          "Which advice does the author give to those people who are afraid of starting a journal?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "Write your goals at the start."
          },
          { num: 2, text: "Be creative with your journal." },
          {
            num: 3,
            text: "Make it functional rather than pretty."
          },
          {
            num: 4,
            text: "Use a nice-looking journal."
          }
        ],
        explainRu:
          "Прямой месседж боящимся «красивых страниц»: <strong>doesn't need to be pretty for it to be useful</strong>; можно ручка и пустой блокнот. Креативность у автора личная цель, а не универсальный совет всем."
      },
      {
        examNum: 18,
        prompt: "What is the main idea of the article?",
        key: 2,
        choices: [
          {
            num: 1,
            text: "Bullet journals are better than to-do lists."
          },
          {
            num: 2,
            text: "You can make your journal in your own way."
          },
          {
            num: 3,
            text: "Journaling suits some people better than others."
          },
          {
            num: 4,
            text:
              "It benefits those who keep their journals every day."
          }
        ],
        explainRu:
          "Текст постоянно возвращается к гибкости: <strong>your journal, your rules</strong>, не обязательна структура и красота, можно бросать разделы, писать мало. Это не тезис «буллет лучше списков» и не «только если ведёшь каждый день» — автор сам признаёт, что не всегда «keep up»."
      }
    ],

    quickPhrases: [
      { en: "bullet journal / bullet journaling", ru: "bullet journal — метод вести планер в блокноте" },
      { en: "to-do list / planner / diary", ru: "список дел / планер / дневник" },
      { en: "day-to-day vs long-term", ru: "повседневность против долгосрочных целей" },
      { en: "a complete picture of who we are", ru: "целостный образ себя" },
      { en: "absurd", ru: "абсурдно, нелепо" },
      { en: "make sense", ru: "иметь смысл, логично" },
      { en: "crushes on", ru: "влюблённости в…" },
      { en: "daily routine", ru: "ежедневный распорядок" },
      { en: "time-consuming", ru: "занимает много времени" },
      { en: "planner layout", ru: "разметка планера по страницам" },
      { en: "float away into nothingness", ru: "«уплыть» из памяти, пропасть" },
      { en: "feel pressured", ru: "чувствовать давление" },
      { en: "productivity tool", ru: "инструмент продуктивности" },
      { en: "therapy (informal)", ru: "терапевтический эффект (не врач!)" },
      { en: "abandon (a page)", ru: "бросить, не вести раздел" },
      { en: "aesthetics", ru: "эстетика, красота оформления" },
      { en: "grocery list", ru: "список покупок" },
      { en: "framework problems", ru: "задачи по методичке/курсу" }
    ],

    tapPhrases: [
      { en: "it was all of these things", ru: "это всё сразу и есть" },
      { en: "track my day-to-day activities, as well as my long-term goals", ru: "вести будни и долгие цели" },
      { en: "Planners and to-do lists typically only focus on what you're doing in the future", ru: "Планеры смотрят в будущее" },
      { en: "diaries typically focus on what you did that day", ru: "дневники — про прошедший день" },
      { en: "give us a complete picture of who we are", ru: "дают целостный портрет нас" },
      { en: "seemed absurd", ru: "казалось нелепым" },
      { en: "why it makes sense", ru: "почему это логично" },
      { en: "boys I had crushes on", ru: "юноши, в которых была влюблена" },
      { en: "Bullet journaling helps you record all of the things that are going on in your life", ru: "Буллет помогает записывать всё, что происходит" },
      { en: "take notes in class when I forgot my subject notebook, in meetings, and in info sessions", ru: "конспект, если забыл тетрадь, плюс встречи" },
      { en: "plan essays and presentations", ru: "планировать эссе и презентации" },
      { en: "I even used it as an art journal", ru: "даже как арт-журнал" },
      { en: "stick random things onto the pages", ru: "приклеивать что попало на страницы" },
      { en: "journaling is too time-consuming", ru: "ведение дневника «съедает время»" },
      { en: "How do you keep up with it?", ru: "Как ты успеваешь его вести?" },
      { en: "setting up the planner layout at the beginning of every month was too time-consuming", ru: "разметка на каждый месяц отнимала слишком много времени" },
      { en: "before they float away into nothingness", ru: "пока мысль не испарилась" },
      { en: "Pay attention to the key word: necessary.", ru: "Ключевое слово: необходимое." },
      { en: "It's your journal, your rules.", ru: "Твой блокнот — твои правила." },
      { en: "I've forgotten how to function as well as I do now without one", ru: "забыла, как жила без него так продуктивно" },
      { en: "productivity tool as well as therapy", ru: "и про работу, и как «психотерапия»" },
      { en: "it really doesn't need to be pretty for it to be useful", ru: "не обязано быть красивым, чтобы помогало" },
      { en: "use a pen and a blank journal", ru: "хватит ручки и пустого блокнота" },
      { en: "the beauty of a blank journal", ru: "прелесть чистого блокнота" }
    ],

    tapLexicon: [
      { en: "annoyed", ru: "раздражена" },
      { en: "typically", ru: "обычно" },
      { en: "routine", ru: "рутина" },
      { en: "literally", ru: "буквально" },
      { en: "categories", ru: "категории" },
      { en: "sessions", ru: "сессии, встречи" },
      { en: "random", ru: "случайный" },
      { en: "resorting", ru: "прибегая к" },
      { en: "structure", ru: "структура, шаблон" },
      { en: "sane", ru: "в здравом уме" },
      { en: "abandon", ru: "бросить" },
      { en: "shamelessly", ru: "без стеснения" },
      { en: "creative", ru: "творчески" },
      { en: "interesting", ru: "интересное" },
      { en: "mistake", ru: "ошибка" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
