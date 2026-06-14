/**
 * ЕГЭ Reading — Multiple Choice, юнит 19 · Preschool education.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-preschool-education",
    unitOrder: 19,
    title: "Unit 19 · Preschool education",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "The overwhelming need for preschool teachers in America is a result of a preschool teacher's pay which is comparatively low. In the country nearly 15 million children are living in poverty, whose mothers and fathers are wrestling with low wages and low socio-economic status. They are trying to make a way for their children to have the opportunity to succeed in the school system, and a large role in the success of a child's future is the promise of preschool.",
        evidence: {
          support: [
            "nearly 15 million children are living in poverty",
            "a large role in the success of a child's future is the promise of preschool"
          ],
          distract: [
            "preschool teacher's pay which is comparatively low",
            "trying to make a way for their children to have the opportunity to succeed"
          ]
        }
      },
      {
        n: 2,
        text:
          "But with preschool teachers still deemed as nothing more than babysitters, the undervaluing of proper education is profound. About half of the children under the age of five are living below the poverty line and need preschool to pull them from the cycle of poverty and prepare them for a life of possibility.",
        evidence: {
          support: [
            "deemed as nothing more than babysitters",
            "About half of the children under the age of five are living below the poverty line",
            "need preschool to pull them from the cycle of poverty"
          ],
          distract: ["undervaluing of proper education is profound"]
        }
      },
      {
        n: 3,
        text:
          "From birth to the age of five, people's brains develop more than they will at any other time in their lives. And the way the minds are molded during these first five years affects the way children will navigate their further education, and then their lives. The countless experiences encountered by children during these first five years of life — regardless of whether they are positive or negative — shape developing brains. And by the time a child enters kindergarten, 90% of their brains have developed.",
        evidence: {
          support: [
            "brains develop more than they will at any other time",
            "shape developing brains",
            "90% of their brains have developed"
          ],
          distract: ["positive or negative — shape developing brains"]
        }
      },
      {
        n: 4,
        text:
          "Preschool teachers are the hands shaping millions of minds during the most influential and delicate period of a person's life. And therefore, preschool teachers are much more than babysitters and deserve to be treated as such by society and paid decent salaries.",
        evidence: {
          support: [
            "the hands shaping millions of minds",
            "the most influential and delicate period",
            "much more than babysitters"
          ],
          distract: ["paid decent salaries"]
        }
      },
      {
        n: 5,
        text:
          "In those first five years of life, our brains develop so intricately and intensely. According to First Things First, what allows the brain to develop, think, communicate, and grow is the connections our brain cells make during those first few years. These connections are cultivated over the course of those years, and every experience is documented by our developing brains. So when children are entering into preschool, they are being profoundly shaped into the kind of person they will be for the rest of their life, because of the messages and connections in their brains.",
        evidence: {
          support: [
            "connections our brain cells make during those first few years",
            "when children are entering into preschool, they are being profoundly shaped",
            "messages and connections in their brains"
          ],
          distract: ["every experience is documented by our developing brains"]
        }
      },
      {
        n: 6,
        text:
          "The fragility of children's lives is astounding, and preschool teachers instill patience in their lessons as they introduce children to reading, writing, storytelling, social studies, creative arts, vocabulary expansion, math, and science for the first time. All the while, they allow children room to grow, ask questions, and discover.",
        evidence: {
          support: [
            "introduce children to reading, writing",
            "allow children room to grow, ask questions, and discover"
          ],
          distract: ["The fragility of children's lives is astounding"]
        }
      },
      {
        n: 7,
        text:
          "Children without preschool enter the education system heavily unprepared and definitely disadvantaged, lacking in areas such as social and cognitive development. Children without preschool are less likely to graduate, and if they do graduate, they are less likely to go to college, according to a 2015 study from the U.S. Department of Education. Children who attend preschool are less likely to repeat a grade and are more likely to succeed in the path they choose, including school and later career.",
        evidence: {
          support: [
            "Children without preschool enter the education system heavily unprepared",
            "Children who attend preschool are less likely to repeat a grade",
            "more likely to succeed in the path they choose, including school and later career"
          ],
          distract: [
            "2015 study from the U.S. Department of Education"
          ]
        }
      },
      {
        n: 8,
        text:
          "Preschool teachers give children a platform for a successful start in life. Because when they are paid so little and are surviving on the brink of the poverty line, it is overwhelmingly difficult to continue pursuing a career as preschool teachers. America needs preschool. And preschool teachers need adequate and fair pay.",
        evidence: {
          support: [
            "give children a platform for a successful start in life",
            "preschool teachers need adequate and fair pay",
            "America needs preschool"
          ],
          distract: ["surviving on the brink of the poverty line"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "According to the article, poor children in the USA …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "never succeed in the school system."
          },
          {
            num: 2,
            text: "need preschool more than others."
          },
          {
            num: 3,
            text: "value every opportunity to learn."
          },
          {
            num: 4,
            text: "have babysitters because their parents work."
          }
        ],
        explainRu:
          "Подчёркнута связь бедности и дошколки: <strong>half… under five… below the poverty line and need preschool</strong> чтобы вырваться из <strong>cycle of poverty</strong>. Родители как раз хотят шанса на успех в системе — не «никогда не преуспеют»; про нянь из-за работы родителей в такой формулировке нет."
      },
      {
        examNum: 13,
        prompt: "The author thinks that preschool teachers are …",
        key: 3,
        choices: [
          { num: 1, text: "properly treated." },
          { num: 2, text: "much respected." },
          { num: 3, text: "underestimated." },
          { num: 4, text: "well-prepared." }
        ],
        explainRu:
          "Прямо: их до сих пор считают <strong>nothing more than babysitters</strong>, это <strong>undervaluing</strong> — т.е. профессия <strong>недооценена</strong>, а не «уважаема» или «нормально оплачивается/с ней хорошо обращаются»."
      },
      {
        examNum: 14,
        prompt: "It is implied that children in the first five years …",
        key: 1,
        choices: [
          {
            num: 1,
            text: "undergo crucial mental processes."
          },
          {
            num: 2,
            text: "develop slower than at other times."
          },
          {
            num: 3,
            text: "are more sensitive to bad things."
          },
          {
            num: 4,
            text: "are easily taught various things."
          }
        ],
        explainRu:
          "Мозг в эти годы растёт <strong>больше, чем когда-либо</strong>, связи <strong>клеток</strong>, 90% к детсаду — это как раз <strong>ключевые нейро-когнитивные процессы</strong>. Не «медленнее, чем в другие годы», и акцент сильнее на фундаментальности развития, чем на «легко всему научить»."
      },
      {
        examNum: 15,
        prompt:
          "The author thinks that preschool teachers influence a child …",
        key: 2,
        choices: [
          { num: 1, text: "slightly." },
          { num: 2, text: "strongly." },
          { num: 3, text: "doubtfully." },
          { num: 4, text: "gently." }
        ],
        explainRu:
          "<strong>most influential and delicate period</strong>, <strong>shaping millions of minds</strong>, дети <strong>profoundly shaped</strong> — влияние оценивается как <strong>сильное</strong>; «мягко» не передаёт главную силу воздействия."
      },
      {
        examNum: 16,
        prompt:
          "The word <strong>they</strong> in &ldquo;they are being profoundly shaped&rdquo; (paragraph 5) most probably refers to …",
        key: 4,
        choices: [
          { num: 1, text: "lives." },
          { num: 2, text: "links." },
          { num: 3, text: "minds." },
          { num: 4, text: "kids." }
        ],
        explainRu:
          "Структура предложения: <strong>when children are entering into preschool, they are being profoundly shaped</strong> — подлежащее <strong>they</strong> ядро = <strong>children / kids</strong>, а не «жизни», «связи» или «мысли» как грамматический референт."
      },
      {
        examNum: 17,
        prompt: "Children who attend preschool …",
        key: 4,
        choices: [
          {
            num: 1,
            text: "have problems entering college."
          },
          {
            num: 2,
            text: "always graduate from school."
          },
          {
            num: 3,
            text: "require better social skills."
          },
          {
            num: 4,
            text: "are more likely to succeed in a career."
          }
        ],
        explainRu:
          "По тексту у посещавших дошколку <strong>меньше шансов повторить класс</strong> и <strong>больше шансов преуспеть в выбранном пути, включая школу и дальнейшую карьеру</strong>. Без дошколы хуже с колледжем — значит (1) относится скорее к другой группе. <strong>Always graduate</strong> — слишком категорично."
      },
      {
        examNum: 18,
        prompt: "What is the author's message?",
        key: 1,
        choices: [
          {
            num: 1,
            text: "Preschool teachers must have bigger salaries."
          },
          {
            num: 2,
            text:
              "More students should train to be preschool teachers."
          },
          {
            num: 3,
            text:
              "Better training is necessary for preschool teachers."
          },
          {
            num: 4,
            text:
              "Eliminating poverty will improve education."
          }
        ],
        explainRu:
          "Финал задаёт тезис: <strong>America needs preschool</strong> и прямое требование <strong>adequate and fair pay</strong>; остальное (массовый набор студентов, переподготовка, ликвидация бедности как главный тезис) не сформулировано как центральный призыв."
      }
    ],

    quickPhrases: [
      { en: "socio-economic status", ru: "социально-экономический статус" },
      { en: "the poverty line", ru: "черта бедности" },
      { en: "cycle of poverty", ru: "порочный круг бедности" },
      { en: "deem", ru: "считать (кем-то)" },
      { en: "undervalue", ru: "недооценивать" },
      { en: "navigate (education)", ru: "проходить, ориентироваться (в учёбе)" },
      { en: "delicate period", ru: "хрупкий, уязвимый период" },
      { en: "adequate and fair pay", ru: "достойная и справедливая оплата" },
      { en: "on the brink of", ru: "на грани" }
    ],

    tapPhrases: [
      { en: "the promise of preschool", ru: "надежда/роль дошкольного образования" },
      { en: "nothing more than babysitters", ru: "не больше чем няни (стереотип)" },
      { en: "need preschool to pull them from the cycle of poverty", ru: "нужна дошкола, чтобы выбраться из бедности" },
      {
        en: "brains develop more than they will at any other time in their lives",
        ru: "мозг растёт быстрее всего именно тогда"
      },
      { en: "90% of their brains have developed", ru: "90% мозга уже сформированы" },
      { en: "the hands shaping millions of minds", ru: "«руки», лепящие миллионы умов" },
      { en: "connections our brain cells make", ru: "связи между нейронами" },
      { en: "they are being profoundly shaped", ru: "их глубоко формируют (в личность)" },
      { en: "heavily unprepared and definitely disadvantaged", ru: "сильно неготовы и в проигрыше" },
      {
        en: "less likely to repeat a grade and are more likely to succeed",
        ru: "реже остаются на второй год и чаще преуспевают"
      },
      { en: "adequate and fair pay", ru: "адекватная и честная зарплата" },
      { en: "America needs preschool", ru: "Америке нужна дошкола" }
    ],

    tapLexicon: [
      { en: "cognitive", ru: "когнитивный" },
      { en: "disadvantaged", ru: "в неравном положении" },
      { en: "instill", ru: "прививать (терпение и т.д.)" },
      { en: "fragility", ru: "хрупкость" },
      { en: "platform", ru: "платформа, стартовая площадка" },
      { en: "pursuing a career", ru: "строить карьеру" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
