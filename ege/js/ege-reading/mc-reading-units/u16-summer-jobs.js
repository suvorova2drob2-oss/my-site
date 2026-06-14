/**
 * ЕГЭ Reading — Multiple Choice, юнит 16 · Summer jobs.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-summer-jobs",
    unitOrder: 16,
    title: "Unit 16 · Summer jobs",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "As a high schooler, you may feel as though you lack the necessary experience to land a prime gig. However, there are plenty of jobs you are qualified for that pay rather well. Both part-time and full-time jobs are available for people of all abilities.",
        evidence: {
          support: [
            "plenty of jobs you are qualified for that pay rather well",
            "Both part-time and full-time jobs are available"
          ],
          distract: [
            "you may feel as though you lack the necessary experience"
          ]
        }
      },
      {
        n: 2,
        text:
          "While it may be difficult to know exactly what career you want to pursue when you graduate from high school, summer jobs can offer the perfect opportunity to test a job you think you may like. If you do a great job and are still interested in the line of work once summer is over, you will have some much-needed experience. This can lead to more work next summer, and perhaps a part-time job while you attend school. The pay may not be great (internships are often unpaid) but the experience can be priceless. To find an internship you would like, you could ask a counselor at school for assistance, call up businesses you find interesting and ask whether they are hiring interns, and check out websites which focus solely on interning.",
        evidence: {
          support: [
            "perfect opportunity to test a job you think you may like",
            "internships are often unpaid",
            "experience can be priceless"
          ],
          distract: [
            "ask a counselor at school for assistance",
            "websites which focus solely on interning"
          ]
        }
      },
      {
        n: 3,
        text:
          "If you want to earn some money, a babysitting job is a great choice. Friends of mine with two young children pay their babysitter $15 per hour — that's not a bad pay rate for a part-time summer job. Ask any parent, and you will find that good babysitters are hard to come by. Do a great job taking care of the kids, and you could find yourself gainfully employed, earning great income and setting your own hours all summer long. Get your certification to further boost your credentials as a prospective nanny. While networking in your neighborhood will probably provide you with plenty of leads, you can also check out some websites to find more.",
        evidence: {
          support: [
            "Get your certification to further boost your credentials",
            "good babysitters are hard to come by",
            "setting your own hours"
          ],
          distract: [
            "$15 per hour",
            "networking in your neighborhood"
          ]
        }
      },
      {
        n: 4,
        text:
          "If you enjoy being outdoors, going camping and hiking, and playing sports, then working as a camp counselor is the perfect job for you — that is, if you don't mind watching over groups of kids away from their parents for weeks at a time! There are summer camps all over the country designated for almost any activity you could imagine, so you can likely find a perfect match for your interests. Camp counselor salaries vary greatly, especially for employees only working during summer months. However, year-round counselors earn an annual average salary around $23,000, so you could be making some serious money in the few short months of summer.",
        evidence: {
          support: [
            "enjoy being outdoors, going camping and hiking, and playing sports",
            "perfect match for your interests",
            "watching over groups of kids"
          ],
          distract: [
            "salaries vary greatly",
            "serious money in the few short months"
          ]
        }
      },
      {
        n: 5,
        text:
          "Summer is usually spent on vacation, but many students use their summer break to continue or enhance their education. If you are strong in any particular subjects, you could put up notices on bulletin boards around town to offer your services as a tutor. Those just starting out can charge around $15 per hour, while those holding advanced degrees and years of experience can charge up to $50 per hour. Along with making good money you will gain great experience to add to your college applications, and you can set your own hours, leaving you plenty of time to hang out with friends.",
        evidence: {
          support: [
            "charge around $15 per hour",
            "charge up to $50 per hour",
            "add to your college applications",
            "plenty of time to hang out with friends"
          ],
          distract: [
            "bulletin boards around town",
            "enhance their education"
          ]
        }
      },
      {
        n: 6,
        text:
          "Summer is a vacation season, so many people hit the road to their favorite destination during those months. But what about their pets? That's where you come in, taking care of the animals that have to stay home while the family goes on vacation. Pet-sitting is a very important job, and you would be entrusted to watch over the animals as if they were your own. Experience with dogs, cats, and other domestic animals is vital, along with any references you can get from family and friends.",
        evidence: {
          support: [
            "hit the road to their favorite destination",
            "taking care of the animals that have to stay home",
            "references you can get from family and friends"
          ],
          distract: [
            "entrusted to watch over the animals as if they were your own"
          ]
        }
      },
      {
        n: 7,
        text:
          "So why not get some experience and earn money while you have a summer vacation? Who knows, maybe one of your summers will define your future career.",
        evidence: {
          support: [
            "get some experience and earn money while you have a summer vacation",
            "define your future career"
          ],
          distract: ["Who knows"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "The author thinks that most high schoolers …",
        key: 4,
        choices: [
          {
            num: 1,
            text: "are qualified to get a low-paid job."
          },
          {
            num: 2,
            text: "can find only a part-time job."
          },
          {
            num: 3,
            text: "lack the necessary experience."
          },
          {
            num: 4,
            text: "can find a job with a good salary."
          }
        ],
        explainRu:
          "Автор признаёт, что школьникам <strong>может казаться</strong>, будто опыта мало, но контраст в <strong>However</strong>: «много работ, на которые вы <strong>already qualified</strong> и которые <strong>pay rather well</strong>» — то есть реальная позиция автора ближе к варианту про <strong>достойную оплату</strong>, а не «только подработка», «только низкая зарплата» или тезис «у всех нет опыта» как мнение автора."
      },
      {
        examNum: 13,
        prompt: "According to the article, internships …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "can help you pick a career."
          },
          {
            num: 2,
            text: "are jobs that are well-paid."
          },
          {
            num: 3,
            text: "should be found only on the internet."
          },
          {
            num: 4,
            text: "should be done several times."
          }
        ],
        explainRu:
          "Стажировки дают <strong>perfect opportunity to test a job</strong> и понять, подходит ли сфера; при этом <strong>The pay may not be great</strong> и <strong>often unpaid</strong> — про «хорошо оплачиваемые» это не так. Источники поиска разные (консультант, звонки, сайты), не «только интернет»; про обязательное «несколько раз» текст не говорит."
      },
      {
        examNum: 14,
        prompt:
          "What can increase your chances of getting a job as a babysitter according to the article?",
        key: 1,
        choices: [
          {
            num: 1,
            text: "Additional training you take."
          },
          {
            num: 2,
            text: "Defining your work hours."
          },
          {
            num: 3,
            text: "Having your own children."
          },
          {
            num: 4,
            text: "Reference letters from neighbors."
          }
        ],
        explainRu:
          "Прямая связка: <strong>Get your certification to further boost your credentials</strong> — дополнительная подготовка/сертификат. Само <strong>setting your own hours</strong> описано уже как плод хорошей работы, не как «как повысить шанс устроиться». Про письма от соседей и своих детей — нет."
      },
      {
        examNum: 15,
        prompt:
          "It is implied that working as a camp counselor suits those who …",
        key: 2,
        choices: [
          { num: 1, text: "are professional athletes." },
          { num: 2, text: "like spending time outside." },
          { num: 3, text: "want to earn big salaries." },
          { num: 4, text: "work only during summer." }
        ],
        explainRu:
          "Ввод абзаца: <strong>enjoy being outdoors, camping and hiking, playing sports</strong> — ядро смысла «любить проводить время на природе / активно на свежем воздухе», а не обязательно быть <strong>professional athlete</strong>. Зарплаты «разбросаны», и лето не единственный формат для всех (есть цикл про year-round)."
      },
      {
        examNum: 16,
        prompt: "Which is <strong>NOT</strong> true about working as a tutor?",
        key: 4,
        choices: [
          {
            num: 1,
            text: "The salary is based on your qualification."
          },
          {
            num: 2,
            text: "This job can help you enter a university."
          },
          {
            num: 3,
            text: "You can have a flexible schedule."
          },
          {
            num: 4,
            text: "You will be too busy to socialise."
          }
        ],
        explainRu:
          "По тексту гибкий график и <strong>plenty of time to hang out with friends</strong> — опровергает идею «некогда общаться». Ставки <strong>$15</strong> vs <strong>advanced degrees … $50</strong> подтверждают связь с квалификацией; опыт для <strong>college applications</strong> — плюс к поступлению; <strong>set your own hours</strong> — гибкость."
      },
      {
        examNum: 17,
        prompt:
          "The expression <strong>hit the road</strong> in &ldquo;so many people hit the road to&rdquo; (paragraph 6) is closest in meaning to …",
        key: 2,
        choices: [
          { num: 1, text: "have problems." },
          { num: 2, text: "start a journey." },
          { num: 3, text: "plan a vacation." },
          { num: 4, text: "search a helper." }
        ],
        explainRu:
          "<strong>Hit the road</strong> — разг. «отправиться в дорогу», начать поездку к пункту назначения; ближе к <strong>start a journey</strong>, чем абстрактное «планировать отпуск» без движения."
      },
      {
        examNum: 18,
        prompt: "What does the author advise to do at the end of the article?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "Think carefully about your future."
          },
          {
            num: 2,
            text: "Put experience before money."
          },
          {
            num: 3,
            text: "Get a job during a summer break."
          },
          {
            num: 4,
            text: "Work to earn as much as possible."
          }
        ],
        explainRu:
          "Финал — приглашение: <strong>get some experience and earn money while you have a summer vacation</strong>, т.е. использовать каникулы для работы; это не максимизация заработка любой ценой и не отдельный тезис «опыт важнее денег»."
      }
    ],

    quickPhrases: [
      { en: "land a prime gig", ru: "получить классную подработку" },
      { en: "pay rather well", ru: "платят неплохо" },
      { en: "line of work", ru: "сфера деятельности" },
      { en: "hard to come by", ru: "в дефиците, редкость" },
      { en: "boost your credentials", ru: "укрепить досье/credentials" },
      { en: "camp counselor", ru: "вожатый в лагере" },
      { en: "hit the road", ru: "отправиться в дорогу" },
      { en: "pet-sitting", ru: "передержка питомцев" },
      { en: "bulletin boards", ru: "доски объявлений" },
      { en: "internship", ru: "стажировка" }
    ],

    tapPhrases: [
      { en: "lack the necessary experience to land a prime gig", ru: "не хватает опыта для «топовой» работы" },
      { en: "jobs you are qualified for that pay rather well", ru: "подходящие работы с нормальной оплатой" },
      { en: "perfect opportunity to test a job you think you may like", ru: "шанс «примерить» профессию" },
      { en: "internships are often unpaid", ru: "стажировки часто без оплаты" },
      { en: "experience can be priceless", ru: "опыт бесценен" },
      { en: "good babysitters are hard to come by", ru: "хороших нянь мало" },
      { en: "Get your certification to further boost your credentials", ru: "сертификат усилит твои credentials" },
      { en: "gainfully employed, earning great income and setting your own hours", ru: "официально работать, хорошо зарабатывать, самому ставить часы" },
      { en: "enjoy being outdoors, going camping and hiking", ru: "любить улицу, походы и кемпинг" },
      {
        en: "watching over groups of kids away from their parents",
        ru: "присматривать за группой детей без родителей"
      },
      { en: "use their summer break to continue or enhance their education", ru: "летом подтянуть / углубить учёбу" },
      { en: "charge up to $50 per hour", ru: "брать до 50 долларов в час" },
      { en: "plenty of time to hang out with friends", ru: "хватит времени на друзей" },
      { en: "hit the road to their favorite destination", ru: "выехать к любимому месту отдыха" },
      { en: "watch over the animals as if they were your own", ru: "ухаживать за животными как за своими" },
      { en: "get some experience and earn money while you have a summer vacation", ru: "совмещать опыт и деньги на каникулах" },
      { en: "define your future career", ru: "определит будущую профессию" }
    ],

    tapLexicon: [
      { en: "gig", ru: "подработка, «гиг»" },
      { en: "credentials", ru: "репутация и документы о подготовке" },
      { en: "designation", ru: "назначение, профиль (лагеря)" },
      { en: "entrusted", ru: "доверяют (ответственность)" },
      { en: "domestic animals", ru: "домашние животные" },
      { en: "tutor", ru: "репетитор" },
      { en: "enhance", ru: "усилить, углубить" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
