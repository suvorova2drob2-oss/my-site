/**
 * ЕГЭ Reading — Multiple Choice, юнит 18 · Leadership in college.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-leadership-in-college",
    unitOrder: 18,
    title: "Unit 18 · Leadership in college",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "Everyone says it's important to get involved in college. Joining organizations and clubs helps college students feel more connected to their schools, build résumés, learn important life skills that may not be gleaned in lecture halls, and potentially meet some of their best friends. The minute I walked on campus to begin my freshman year, I knew I had to get involved in as many organizations as I could. In January, I began my position as a sisterhood director, which entailed planning events for my chapter, whether that is at our own chapter or out in the city community. I've hosted events such as essential-oil DIY parties, yoga classes, movie nights and senior send-off celebrations for our chapter members. I was very excited about the opportunity, and I knew that my previous leadership experiences would help me out. However, my perspective on what it means to be a leader among my peers has definitely changed after a semester of holding the position.",
        evidence: {
          support: [
            "feel more connected to their schools",
            "learn important life skills",
            "very excited about the opportunity",
            "previous leadership experiences would help me out"
          ],
          distract: [
            "get involved in as many organizations as I could",
            "my perspective on what it means to be a leader has definitely changed"
          ]
        }
      },
      {
        n: 2,
        text:
          "There are three main components that I have learned through leadership: communication, organization, and delegation. I've learned that no matter how many times or in how many different ways you communicate a message, it will not get across to everyone, and that is OK. People value transparency and sometimes need to be told exactly what you expect of them. Some people are so on top of schedules that they could tell you what's going on six months from now, but some people need constant reminders and do not keep track of their schedules. There is a gap in communication between these two types of people that can lead to frustration and disorganization on both ends.",
        evidence: {
          support: [
            "it will not get across to everyone, and that is OK",
            "People value transparency",
            "gap in communication between these two types of people"
          ],
          distract: ["constant reminders and do not keep track of their schedules"]
        }
      },
      {
        n: 3,
        text:
          "This past semester I have worked to bridge that gap between types of communicators, and that is one of the most valuable things I have learned from my position.",
        evidence: {
          support: [
            "bridge that gap between types of communicators",
            "one of the most valuable things I have learned from my position"
          ],
          distract: []
        }
      },
      {
        n: 4,
        text:
          "It's important to appreciate the time it takes for every aspect of an event to plan and to take place; some tasks can take months to put together, and those should not involve procrastination. But some are OK to sort out the day of. Some of my best work was done with hours to spare, and if that's when you work best, why avoid it? Procrastination, when paired with an organized plan, can turn out to be successful.",
        evidence: {
          support: [
            "some tasks can take months to put together",
            "Some of my best work was done with hours to spare",
            "if that's when you work best, why avoid it?"
          ],
          distract: [
            "Procrastination, when paired with an organized plan, can turn out to be successful"
          ]
        }
      },
      {
        n: 5,
        text:
          "One of the strongest qualities a good leader can have is the ability to delegate. It's a misconception that as a leader, you must do and be a part of every step of a project. Delegating tasks to members of a committee, in my case, was a lifesaver and what made the job so worthwhile. I got to work with so many different temperaments and talents, and this way, they feel as if they're contributing in a way that is specific to their talents.",
        evidence: {
          support: [
            "the ability to delegate",
            "It's a misconception that as a leader, you must do and be a part of every step",
            "was a lifesaver and what made the job so worthwhile"
          ],
          distract: ["specific to their talents"]
        }
      },
      {
        n: 6,
        text:
          "What I've learned through mistakes and successes in my position has led me to become more knowledgeable, not only about planning events and about the members of my chapter but also about communicating, organizing, modeling roles, and involving the campus community. I feel so grateful to be in a position that has encouraged me to learn more about myself and the skills that I've had to acquire. I feel so fortunate to have had this position so far, and it has made me reflect on the kind of leader I hope to be in my future career. Having a leadership position in college is vital to be able to discover how you communicate with others and what skills you have and lack before you go off to the real world.",
        evidence: {
          support: [
            "led me to become more knowledgeable",
            "learn more about myself and the skills that I've had to acquire",
            "what skills you have and lack before you go off to the real world",
            "I feel so grateful"
          ],
          distract: ["mistakes and successes"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "According to the author, taking an active part in college life …",
        key: 4,
        choices: [
          { num: 1, text: "has a good effect on studies." },
          { num: 2, text: "is the only way to make friends." },
          { num: 3, text: "is useless for a future career." },
          { num: 4, text: "creates a sense of belonging." }
        ],
        explainRu:
          "В первом абзаце прямо: вовлечённость помогает <strong>feel more connected to their schools</strong> — это и есть <strong>принадлежность к сообществу</strong>. Про дружбу сказано <strong>potentially</strong>, не «единственный способ»; речь не сводится к оценкам в учёбе; про карьеру — наоборот <strong>build résumés</strong> и навыки, а не «бесполезно»."
      },
      {
        examNum: 13,
        prompt: "It is implied that the author …",
        key: 2,
        choices: [
          {
            num: 1,
            text: "lacked leadership experience before college."
          },
          { num: 2, text: "welcomed an opportunity to be a leader." },
          {
            num: 3,
            text: "got tired of being a director for a semester."
          },
          {
            num: 4,
            text: "joined too many organizations on campus."
          }
        ],
        explainRu:
          "<strong>Very excited about the opportunity</strong> и осознанный выбор роли; при этом <strong>previous leadership experiences</strong> — опыт уже был, значит не «не хватало опыта до колледжа». Тон финала благодарный, не «устала»; про «слишком много» организаций автор не выражает сожаления."
      },
      {
        examNum: 14,
        prompt:
          "What did the author learn about communication while being a leader?",
        key: 1,
        choices: [
          {
            num: 1,
            text: "It is impossible to get everybody to understand the task."
          },
          {
            num: 2,
            text: "Different ways of communication increase understanding."
          },
          {
            num: 3,
            text: "It is easier to deal with people who follow the schedule."
          },
          {
            num: 4,
            text:
              "Disorganized people often get upset about the schedule."
          }
        ],
        explainRu:
          "Ключевая мысль: <strong>no matter how many times or in how many different ways you communicate</strong>, сообщение <strong>will not get across to everyone</strong> — то есть до всех «добить» нельзя, и с этим надо смириться (<strong>that is OK</strong>). Это не тезис «разные способы всегда повышают понимание»."
      },
      {
        examNum: 15,
        prompt: "The author thinks the most useful thing she has learned is …",
        key: 4,
        choices: [
          { num: 1, text: "relying on a schedule." },
          { num: 2, text: "being organized." },
          { num: 3, text: "valuing your time." },
          { num: 4, text: "uniting different people." }
        ],
        explainRu:
          "Явная формулировка: <strong>bridge that gap between types of communicators</strong> — <strong>one of the most valuable things I have learned</strong>; это как раз <strong>свести вместе разные типы людей (коммуникаторов)</strong>, а не общий тезис «будь организованным» или «цени время» без этого фокуса."
      },
      {
        examNum: 16,
        prompt:
          "The word <strong>it</strong> in \"why avoid it?\" (paragraph 4) most probably refers to …",
        key: 3,
        choices: [
          { num: 1, text: "doing work." },
          { num: 2, text: "an organized plan." },
          { num: 3, text: "delaying work." },
          { num: 4, text: "free time." }
        ],
        explainRu:
          "Перед этим: лучшие результаты <strong>with hours to spare</strong>, и <strong>if that's when you work best</strong> — отсылка к работе в сжатые сроки / откладыванию до последнего; <strong>why avoid it?</strong> — зачем избегать <strong>этого стиля (запаздывания с выполнением)</strong>, если он тебе подходит; дальше автор как раз легитимирует <strong>procrastination</strong> при плане."
      },
      {
        examNum: 17,
        prompt: "According to the author, delegating tasks …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "prevents you from being part of the project."
          },
          {
            num: 2,
            text: "makes a leader's work more specific."
          },
          {
            num: 3,
            text: "is necessary and useful for a leader."
          },
          {
            num: 4,
            text: "is a common myth leaders should accept."
          }
        ],
        explainRu:
          "Делегирование — <strong>lifesaver</strong>, разрушает <strong>misconception</strong> «лидер должен быть на каждом шагу»; значит это <strong>нужный и полезный</strong> инструмент, а не «миф, который надо принять» и не «выкидывает лидера из проекта»."
      },
      {
        examNum: 18,
        prompt:
          "What is the author's overall attitude to her leadership experience?",
        key: 1,
        choices: [
          {
            num: 1,
            text:
              "It enables you to learn about your strengths and weaknesses."
          },
          {
            num: 2,
            text:
              "She finds her leadership experience rather challenging."
          },
          {
            num: 3,
            text:
              "She was lucky to find people easy to communicate with."
          },
          {
            num: 4,
            text:
              "It is better to learn to communicate before a leadership position."
          }
        ],
        explainRu:
          "Финал про <strong>learn more about myself</strong>, <strong>skills you have and lack</strong>, благодарность и удачу позиции; главный итог — <strong>самопознание сильных/слабых сторон через практику</strong>, а не акцент «очень тяжело» или «надо сначала научиться общаться в вакууме»."
      }
    ],

    quickPhrases: [
      { en: "get involved", ru: "вовлекаться, участвовать" },
      { en: "feel more connected", ru: "чувствовать связь (с институтом)" },
      { en: "glean", ru: "подчерпнуть, собрать (знания)" },
      { en: "sisterhood director", ru: "директор по сестринству (роль в женской организации)" },
      { en: "transparency", ru: "прозрачность, честность в коммуникации" },
      { en: "bridge the gap", ru: "свести разрыв, «построить мост»" },
      { en: "delegate", ru: "делегировать" },
      { en: "lifesaver", ru: "спасение, то что очень помогло" },
      { en: "the real world", ru: "большая жизнь после учёбы" },
      { en: "procrastination", ru: "прокрастинация, откладывание" }
    ],

    tapPhrases: [
      { en: "feel more connected to their schools", ru: "сильнее чувствовать связь со школой/кампусом" },
      { en: "build résumés", ru: "укреплять резюме" },
      { en: "life skills that may not be gleaned in lecture halls", ru: "навыки жизни вне аудиторий" },
      { en: "my previous leadership experiences would help me out", ru: "прошлый лидерский опыт должен помочь" },
      { en: "it will not get across to everyone, and that is OK", ru: "не все поймут — и с этим ок" },
      { en: "People value transparency", ru: "людям важна прозрачность" },
      { en: "gap in communication between these two types of people", ru: "разрыв в общении между двумя типами" },
      { en: "bridge that gap between types of communicators", ru: "свести разрыв между типами коммуникаторов" },
      { en: "one of the most valuable things I have learned", ru: "одно из самых ценных, чему научилась" },
      { en: "if that's when you work best, why avoid it?", ru: "если так ты работаешь лучше — зачем избегать этого" },
      { en: "Procrastination, when paired with an organized plan", ru: "прокрастинация вместе с планом" },
      { en: "Delegating tasks … was a lifesaver", ru: "делегирование спасло ситуацию" },
      {
        en: "It's a misconception that as a leader, you must do and be a part of every step",
        ru: "ошибка думать, что лидер на каждом шагу обязан быть сам"
      },
      { en: "what skills you have and lack", ru: "какие навыки есть и чего не хватает" },
      { en: "before you go off to the real world", ru: "прежде чем выйти в «большую жизнь»" }
    ],

    tapLexicon: [
      { en: "chapter", ru: "местное отделение (организации)" },
      { en: "entailed", ru: "включало в себя, предполагало" },
      { en: "delegation", ru: "делегирование" },
      { en: "disorganization", ru: "неорганизованность" },
      { en: "temperaments", ru: "темпераменты, типы людей" },
      { en: "worthwhile", ru: "стоящий того, ценный" },
      { en: "vital", ru: "крайне важный" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
