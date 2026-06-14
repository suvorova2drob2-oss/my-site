/**
 * ЕГЭ Reading — Multiple Choice, юнит 10 · Seeing the big picture.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-seeing-the-big-picture",
    unitOrder: 10,
    title: "Unit 10 · Seeing the big picture",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "In my very first experiences of interning or doing part-time work, I usually got placed at the very bottom of the food chain. One summer I was an administrative assistant, and now I hold a part-time job as an accounts receivable clerk. Since I mostly came in inexperienced, I would have to get trained and mentored by the employees there. Most of the time, I got paired with an employee who introduced me to their daily tasks. After a few rounds of this, and being an outsider who was given a glimpse of the inner workings of a company, I've started to notice something that companies have in common. Most of us are missing the big picture.",
        evidence: {
          support: [
            "something that companies have in common",
            "missing the big picture"
          ],
          distract: ["trained and mentored by the employees"]
        }
      },
      {
        n: 2,
        text:
          "As an employee starting a career in a specific company, in a non-decision-making position, we are often given a set of instructions for our daily tasks. These are the things that need to be done (by us) in order for the organization to run well. It could be creating clippings of real estate advertisements from the newspaper. It might be processing a payment by following a detailed set of instructions. It could be very tedious stuff that might lead you to start to think: \"Why am I doing this?\"",
        evidence: {
          support: [
            "a set of instructions for our daily tasks",
            "very tedious stuff"
          ],
          distract: ["Why am I doing this?"]
        }
      },
      {
        n: 3,
        text:
          "I completely understand that sometimes there just isn't enough time or resources to explain everything to everyone on the team. But here is why I think understanding the big picture is great for everyone in the organization.",
        evidence: {
          support: [
            "understanding the big picture is great for everyone"
          ],
          distract: ["isn't enough time or resources"]
        }
      },
      {
        n: 4,
        text:
          "First and foremost, not understanding the significance of what you are doing kills motivation. When you are stuck repeatedly doing the same things, for weeks and months… no matter how good an employee you are, you will get bored—especially if you don't understand the contributions that you are making as you work. When you lose motivation, the quality of your work will automatically decrease. This is bad not just for you, but for the entire company as well, because now you are inefficient.",
        evidence: {
          support: [
            "kills motivation",
            "bad … for the entire company"
          ],
          distract: ["stuck repeatedly doing the same things"]
        }
      },
      {
        n: 5,
        text:
          "On the other hand, if you understand the reasoning behind your tasks—why something has to be done—you will feel that you are important to the organization you belong to, and that what you do matters. Most of the time, the quality of your work improves if you are motivated.",
        evidence: {
          support: [
            "understand the reasoning behind your tasks",
            "the quality of your work improves"
          ],
          distract: ["what you do matters"]
        }
      },
      {
        n: 6,
        text:
          "For example, every day I have to input the page numbers for the ads in our school paper. It's tedious work. At first, I didn't know why I was doing it, and I was getting frustrated with having to do it every day. After a while, however, I realised that this was important because it was the only way to make sure that the ads were there, and we could always use the page numbers that we'd entered to track an advertisement from weeks or months ago when needed (for example, when a client requests a screenshot of the ad as proof.) After realising this, I started to take this daily task more seriously. I didn't become super passionate about it, but I see the importance.",
        evidence: {
          support: [
            "After realising this, I started to take this daily task more seriously",
            "I didn't know why I was doing it"
          ],
          distract: ["when a client requests a screenshot"]
        }
      },
      {
        n: 7,
        text:
          "I feel that entrusting this knowledge to interns, admin-level employees, newbies in a club, or people in similar positions is beneficial for both the organization and the individual. By doing this, you are educating them about the bigger things going on at work, and also reminding them that their efforts matter. You are encouraging them to become problem solvers, and to look at things the way you would look at things.",
        evidence: {
          support: [
            "beneficial for both the organization and the individual",
            "their efforts matter"
          ],
          distract: ["become problem solvers"]
        }
      },
      {
        n: 8,
        text:
          "I've seen a lot of people complain every day, saying things like, \"I don't understand why they can't just do it properly! It's not that hard!\" If that's the case, maybe take a step back. You might know how to do it perfectly because you know the big picture. Maybe they don't know how to do the tasks properly because they're only seeing a small part of the picture, and that's not enough.",
        evidence: {
          support: [
            "you know the big picture",
            "only seeing a small part of the picture"
          ],
          distract: ["take a step back"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt:
          "The jobs the author got as an intern allowed her to …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "find similar features in these organisations."
          },
          {
            num: 2,
            text: "see the big picture of the companies' structures."
          },
          {
            num: 3,
            text:
              "get to know good mentors and establish connections."
          },
          {
            num: 4,
            text: "share the responsibilities with other employees."
          }
        ],
        explainRu:
          "После череды стажировок она формулирует общее наблюдение: у компаний есть что-то <strong>общее</strong> (<strong>have in common</strong>) — люди теряют целостную картину. Это не про «уже вижу всю структуру» (наоборот, это проблема рядовых), не про наставников как цель и не про делёж обязанностей."
      },
      {
        examNum: 13,
        prompt:
          "The expression <strong>tedious stuff</strong> in &ldquo;It could be very tedious stuff&rdquo; (paragraph 2) most probably refers to …",
        key: 2,
        choices: [
          { num: 1, text: "detailed instructions." },
          { num: 2, text: "boring responsibilities." },
          { num: 3, text: "doing your job well." },
          { num: 4, text: "important questions." }
        ],
        explainRu:
          "<strong>Tedious</strong> — скучная, однообразная, утомительная работа; это не «инструкция как документ», не «качество исполнения» и не «важные вопросы»."
      },
      {
        examNum: 14,
        prompt:
          "Which is <strong>NOT</strong> mentioned as a result of lacking &ldquo;understanding the big picture&rdquo; in an organisation?",
        key: 4,
        choices: [
          { num: 1, text: "Employees will be unproductive." },
          {
            num: 2,
            text: "It will affect the whole company."
          },
          {
            num: 3,
            text: "Staff will be less interested in work."
          },
          {
            num: 4,
            text: "You will have to repeat the same tasks."
          }
        ],
        explainRu:
          "Без понимания смысла падает <strong>мотивация</strong>, страдает <strong>качество</strong>, человек <strong>inefficient</strong>, это бьёт по <strong>компании</strong>. Повторяемость задач описана как исходная рутина, а не как <strong>следствие именно отсутствия big picture</strong>."
      },
      {
        examNum: 15,
        prompt:
          "The author uses the example with page numbers (paragraph 6) to …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "show how to stop doing boring work."
          },
          {
            num: 2,
            text: "prove the benefit of knowing your goals."
          },
          {
            num: 3,
            text: "explain how the advertising process works."
          },
          {
            num: 4,
            text: "encourage the reader to take work more seriously."
          }
        ],
        explainRu:
          "История иллюстрирует тезис: узнав <strong>зачем</strong> рутина нужна (<strong>importance / why</strong>), автор начинает относиться иначе. Формулировка ближе к «знать цель/смысл», чем к инструкции «как уволиться от скучного» или обзору всей рекламной цепочки; призыв всем подряд — побочный эффект, не главная функция примера."
      },
      {
        examNum: 16,
        prompt:
          "<strong>This</strong> in paragraph 6 (&ldquo;After realising <strong>this</strong>, I started…&rdquo;) most probably refers to …",
        key: 3,
        choices: [
          { num: 1, text: "reasons for being upset." },
          { num: 2, text: "a client's request." },
          { num: 3, text: "the value of the task." },
          { num: 4, text: "inputting page numbers." }
        ],
        explainRu:
          "Перед этим целый абзац о том, <strong>почему</strong> нумерация важна для контроля и архива объявлений; <strong>this</strong> — осознание этой <strong>ценности</strong>, а не сам факт набора цифр или один частный запрос клиента."
      },
      {
        examNum: 17,
        prompt:
          "It is implied that if employees understand the <strong>reasoning</strong> behind their tasks they will …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "understand their employers better."
          },
          {
            num: 2,
            text: "change their position faster."
          },
          {
            num: 3,
            text: "stay in the company longer."
          },
          {
            num: 4,
            text: "continue their education."
          }
        ],
        explainRu:
          "Понимая <strong>reasoning</strong>, сотрудник видит связь своей части работы с задачами <strong>организации</strong> и чувствует, что <strong>важен для организации</strong> — это выравнивание с логикой работодателя/компании сильнее, чем обещания смены должности, срока найма или учёбы (этого текст не связывает с выводом)."
      },
      {
        examNum: 18,
        prompt: "What is the main idea of the last paragraph?",
        key: 2,
        choices: [
          {
            num: 1,
            text:
              "People often like to complain without trying to change things."
          },
          {
            num: 2,
            text:
              "Only those who see the big picture can do their tasks perfectly."
          },
          {
            num: 3,
            text:
              "It is not enough just to know how to do things properly."
          },
          {
            num: 4,
            text:
              "Explaining the importance of tasks to staff improves their work."
          }
        ],
        explainRu:
          "Финал: у кого есть целая картина, тот понимает, как сделать правильно; у кого лишь фрагмент — ошибки понятнее. Это не главный тезис про «любят жаловаться» (1), не общая максима «мало уметь» без контекста картины (3) и не повтор совета «объясняйте смысл» из предыдущего абзаца (4)."
      }
    ],

    quickPhrases: [
      { en: "the big picture", ru: "целостная картина происходящего" },
      { en: "food chain (bottom of)", ru: "«дно пищевой цепи» — самый младший уровень" },
      { en: "intern / part-time", ru: "стажёр / подработка" },
      { en: "accounts receivable clerk", ru: "клерк по дебиторской задолженности" },
      { en: "mentored", ru: "наставляемый" },
      { en: "inner workings", ru: "внутренняя кухня компании" },
      { en: "non-decision-making position", ru: "без полномочий решений" },
      { en: "a set of instructions", ru: "набор инструкций" },
      { en: "tedious", ru: "утомительный, скучный" },
      { en: "significance", ru: "значимость" },
      { en: "contributions you are making", ru: "вклад, который вносишь" },
      { en: "inefficient", ru: "неэффективный" },
      { en: "reasoning behind your tasks", ru: "логика/причина поручения" },
      { en: "belong to (organization)", ru: "принадлежать (организации)" },
      { en: "entrust knowledge", ru: "передавать знания (доверять контекст)" },
      { en: "problem solvers", ru: "люди, решающие проблемы сами" },
      { en: "take a step back", ru: "сделать шаг назад и оценить" },
      { en: "screenshot as proof", ru: "скриншот как доказательство" }
    ],

    tapPhrases: [
      { en: "the very bottom of the food chain", ru: "совсем внизу иерархии" },
      { en: "accounts receivable clerk", ru: "клерк по дебиторке" },
      { en: "given a glimpse of the inner workings of a company", ru: "на секунду заглянула «на кухню» компании" },
      { en: "something that companies have in common", ru: "общее у компаний" },
      { en: "Most of us are missing the big picture.", ru: "Большинство теряет целостную картину." },
      { en: "non-decision-making position", ru: "роль без принятия решений" },
      { en: "a set of instructions for our daily tasks", ru: "инструкция к ежедневным задачам" },
      { en: "very tedious stuff", ru: "очень скучная рутина" },
      { en: "understanding the big picture is great for everyone in the organization", ru: "понимать контекст полезно всем" },
      { en: "not understanding the significance of what you are doing kills motivation", ru: "не видеть смысла — убивает мотивацию" },
      { en: "you will get bored", ru: "в конце концов наскучит" },
      { en: "the quality of your work will automatically decrease", ru: "качество работы само просядет" },
      { en: "because now you are inefficient", ru: "потому что работаешь неэффективно" },
      { en: "understand the reasoning behind your tasks—why something has to be done", ru: "понять, зачем задачу делают" },
      { en: "what you do matters", ru: "то, что ты делаешь, имеет значение" },
      { en: "the quality of your work improves if you are motivated", ru: "мотивация улучшает качество" },
      { en: "I realised that this was important because it was the only way to make sure that the ads were there", ru: "поняла: так мы контролируем, что реклама на месте" },
      { en: "take this daily task more seriously", ru: "стала относиться к задаче серьёзнее" },
      { en: "beneficial for both the organization and the individual", ru: "полезно и фирме, и человеку" },
      { en: "their efforts matter", ru: "их усилия важны" },
      { en: "You might know how to do it perfectly because you know the big picture.", ru: "Тебе легко — ты видишь целиком." },
      { en: "they're only seeing a small part of the picture, and that's not enough.", ru: "У других лишь кусок картины — мало." }
    ],

    tapLexicon: [
      { en: "inexperienced", ru: "без опыта" },
      { en: "paired", ru: "спарили с наставником" },
      { en: "glimpse", ru: "мимолётный взгляд, «глянуть»" },
      { en: "outsider", ru: "чужая, со стороны" },
      { en: "resources", ru: "ресурсы, время людей" },
      { en: "clippings", ru: "вырезки из газет" },
      { en: "estate", ru: "недвижимость" },
      { en: "significance", ru: "важность" },
      { en: "contributions", ru: "вклад" },
      { en: "reasoning", ru: "обоснование" },
      { en: "motivated", ru: "мотивирован" },
      { en: "tedious", ru: "нудный, рутинный" },
      { en: "frustrated", ru: "раздражена" },
      { en: "advertisement", ru: "рекламное объявление" },
      { en: "proof", ru: "доказательство" },
      { en: "entrusting", ru: "доверяя, передавая" },
      { en: "newbies", ru: "новички" },
      { en: "complain", ru: "жалуются" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
