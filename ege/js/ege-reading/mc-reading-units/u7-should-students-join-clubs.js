/**
 * ЕГЭ Reading — Multiple Choice, юнит 7 · Should students join clubs on campus?
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-should-students-join-clubs",
    unitOrder: 7,
    title: "Unit 7 · Should students join clubs on campus?",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          "Student clubs are an important part of the social and emotional development of young adults. Engagement in student organizations and activities can further develop self-awareness, self-management, and foster empathetic connections with others.",
        evidence: {
          support: [
            "social and emotional development",
            "self-awareness, self-management"
          ],
          distract: ["empathetic connections with others"]
        }
      },
      {
        n: 2,
        text:
          "I recognize a few downsides to the number of student organizations on my campus, especially in how resume-building opportunities appear to drive these numbers more often than a personal desire to help your community. But that doesn't outweigh the positive impact such memberships can have on social and emotional development for college students and on boosting their soft skills. Soft skills are \"people skills\" that allow us to effectively interact with others, like communication and work ethic.",
        evidence: {
          support: [
            "resume-building opportunities appear to drive these numbers",
            "doesn't outweigh the positive impact"
          ],
          distract: ["Soft skills are \"people skills\""]
        }
      },
      {
        n: 3,
        text:
          "Campus clubs are spaces where students are encouraged to be themselves, make potential mistakes, miss deadlines, and use their experiences to grow in a supportive environment. Joining a student organization presents many opportunities to learn more about yourself, your goals and your strengths. You can learn from how others handle certain situations and test your current knowledge. You can also find out what you're good at, whether that's multitasking, staying organised, generating ideas, or serving others. This self-awareness will be beneficial in your future career.",
        evidence: {
          support: [
            "make potential mistakes",
            "beneficial in your future career"
          ],
          distract: ["multitasking, staying organised"]
        }
      },
      {
        n: 4,
        text:
          "Some of my peers have mentioned the issue of over-committing when they're pressured to be involved. When classroom work increases and time feels like it's running out, it may feel like there is no other option than to drop a commitment or two. In my experience, many student clubs welcome conversations about needing some time. In spaces run by others who may be struggling with work–life balance, I have never had a club tell me that stepping back isn't an option or that there won't be space for me when I feel ready to return. From sports- and wellness-focused organizations to cultural or creative groups, there is space for everyone in a student club on my campus if students choose to seek out those opportunities.",
        evidence: {
          support: [
            "welcome conversations about needing some time",
            "when I feel ready to return"
          ],
          distract: ["over-committing"]
        }
      },
      {
        n: 5,
        text:
          "On the other hand, student clubs don't really foster one single community: they divide the student base. While student clubs can bring a sense of community to students, oftentimes this creates a problem for students with social anxiety who struggle to feel that they fit in with the crowd. When there are a lot of different student groups, it can become overwhelming to attempt to fit in with the rest of the crowd.",
        evidence: {
          support: [
            "bring a sense of community",
            "creates a problem for students with social anxiety"
          ],
          distract: ["divide the student base"]
        }
      },
      {
        n: 6,
        text:
          "Many student clubs also require funding in some part from students, or at least an investment of money from students to fully participate in their group, which becomes a barrier that leaves those who cannot afford the costs on the outside.",
        evidence: {
          support: [
            "require funding",
            "leaves those who cannot afford the costs on the outside"
          ],
          distract: ["fully participate in their group"]
        }
      },
      {
        n: 7,
        text:
          "Some student clubs promote themselves as good job experience for the real world. But resources to help students succeed in life should be available to students from outside the club system as well. Additionally, student clubs require a time investment to reach the opportunities they advertise. That encourages the attitude that you earn an advantageous position in society mainly by knowing the right person. Thus, the problem of networking goes beyond how many people someone can know around campus. Should success be valued for the effort someone makes, and not for the luck of knowing someone of reputation?",
        evidence: {
          support: [
            "resources … should be available … from outside the club system",
            "knowing the right person"
          ],
          distract: ["good job experience for the real world"]
        }
      },
      {
        n: 8,
        text:
          "If you want to assist the community, seek ways outside your usual social circle to find people who can benefit from your resources—both formal and informal ways to contribute. Student clubs can be part of that path, but only if they create an inclusive environment. Student clubs are a great way to grow when they live up to that standard.",
        evidence: {
          support: [
            "outside your usual social circle",
            "only if they create an inclusive environment"
          ],
          distract: ["formal and informal ways to contribute"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt:
          "What does the author say about the <strong>disadvantages</strong> of student clubs?",
        key: 2,
        choices: [
          {
            num: 1,
            text:
              "Attending student clubs is not enough for building a good resume."
          },
          {
            num: 2,
            text:
              "Students join clubs to improve their resume rather than to satisfy their interest."
          },
          {
            num: 3,
            text:
              "There are more disadvantages than advantages of joining a student club."
          },
          {
            num: 4,
            text:
              "There are some minuses if you choose the wrong student organisation."
          }
        ],
        explainRu:
          "Автор прямо пишет, что рост числа объединений, похоже, чаще движим <strong>возможностями для резюме</strong>, чем <strong>личным желанием помочь обществу</strong>. При этом подчёркивает, что минусы <strong>не перевешивают</strong> плюсы — вариант (3) противоречит тексту."
      },
      {
        examNum: 13,
        prompt:
          "Student clubs are characterised in the text as a place where students …",
        key: 4,
        choices: [
          { num: 1, text: "learn multitasking." },
          { num: 2, text: "fail to make mistakes." },
          { num: 3, text: "follow others' examples." },
          { num: 4, text: "develop their skills." }
        ],
        explainRu:
          "Это среда поддержки, самопознания и <strong>soft skills</strong>; мультитаскинг — лишь один из возможных сильных сторон. Ошибки как раз <strong>допускаются</strong>, а не «не получается совершить» (вариант 2 ложный по смыслу)."
      },
      {
        examNum: 14,
        prompt: "What is the author's advice if you are short of time?",
        key: 2,
        choices: [

          {

            num: 1,

            text: "Seek a club that requires less time."

          },

          { num: 2, text: "Tell the club members that you lack time." },

          {

            num: 3,

            text: "Choose a sport or wellness organisation."

          },

          {

            num: 4,

            text: "Learn to say 'no' to more commitments."

          }

        ],
        explainRu:
          "Клубы, по опыту автора, <strong>нормально воспринимают разговор о том, что нужно время</strong> (<strong>welcome conversations about needing some time</strong>), и отступление возможно."
      },
      {
        examNum: 15,
        prompt:
          "<strong>This</strong> in &ldquo;oftentimes <strong>this</strong> creates a problem for students&rdquo; (paragraph 5) most probably refers to …",
        key: 1,
        choices: [
          { num: 1, text: "a sense of belonging." },
          { num: 2, text: "feeling worried." },
          { num: 3, text: "the diversity of groups." },
          { num: 4, text: "a lack of community spirit." }
        ],
        explainRu:
          "Сразу перед <strong>this</strong> идёт мысль, что клубы дают <strong>sense of community</strong> — то есть принадлежность/свою «группу»; именно эта ситуация для части студентов становится проблемой. Следующее предложение про множество групп — уже отдельная мысль."
      },
      {
        examNum: 16,
        prompt: "It is implied that student clubs that require funding …",
        key: 3,
        choices: [
          {
            num: 1,
            text: "become too demanding for some members."
          },
          {
            num: 2,
            text: "should be sponsored by the university."
          },
          {
            num: 3,
            text: "make it impossible for some to join them."
          },
          {
            num: 4,
            text: "are difficult to manage logistically."
          }
        ],
        explainRu:
          "Есть плата/вложения для полноценного участия — и те, кто не может платить, оказываются <strong>вне</strong> процесса (<strong>on the outside</strong>); по смыслу это барьер для вступления."
      },
      {
        examNum: 17,
        prompt:
          "What is the author's attitude to clubs that promote themselves as &ldquo;good job experience for the real world&rdquo;?",
        key: 3,
        choices: [
          {
            num: 1,
            text: "They provide good resources for success."
          },
          {
            num: 2,
            text: "They are great for making connections."
          },
          {
            num: 3,
            text: "They create the wrong idea of success."
          },
          {
            num: 4,
            text: "They trick students into investing time."
          }
        ],
        explainRu:
          "Автор согласен, что навыки важны, но подчёркивает: ресурсы успеха должны быть и <strong>вне клубов</strong>, а связка «время + правильные люди = успех» порождает вопрос — не сводится ли всё к удаче знакомства. Это критика идеи успеха, не похвала «ресурсов» или «обмана» ради времени."
      },
      {
        examNum: 18,
        prompt: "What is the main idea of the article?",
        key: 2,
        choices: [
          {
            num: 1,
            text: "Joining student organisations is a must for every student."
          },
          {
            num: 2,
            text:
              "Joining the right club can benefit your future career."
          },
          {
            num: 3,
            text:
              "Student clubs should serve the whole campus community."
          },
          {
            num: 4,
            text:
              "Student clubs should use university resources wisely."
          }
        ],
        explainRu:
          "Текст в целом за пользу участия (<strong>self-awareness … beneficial in your future career</strong>, soft skills), признаёт минусы и условие инклюзивности, но не утверждает «обязательно всем» и не фокусируется на бухгалтерии ресурсов университета. Узкий тезис про «служить всему кампусу» ближе к финалу, но главная линия — личный рост и карьерная польза при осознанном выборе."
      }
    ],

    quickPhrases: [
      { en: "student organizations / clubs", ru: "студенческие объединения, клубы" },
      { en: "resume-building", ru: "украшение резюме, «пункты в CV»" },
      { en: "soft skills", ru: "гибкие навыки, коммуникация" },
      { en: "self-awareness", ru: "самопознание" },
      { en: "peer pressure / over-committing", ru: "давление сверстников / перегруз обязательствами" },
      { en: "work–life balance", ru: "баланс нагрузок" },
      { en: "social anxiety", ru: "социальная тревожность" },
      { en: "sense of community / belonging", ru: "чувство общности / принадлежности" },
      { en: "funding / investment of money", ru: "взносы, финансовое участие" },
      { en: "networking / knowing the right person", ru: "нетворкинг, «свой человек»" },
      { en: "merit vs luck", ru: "заслуги против удачи" },
      { en: "inclusive environment", ru: "инклюзивная среда" },
      { en: "social circle", ru: "круг общения" },
      { en: "community service", ru: "помощь сообществу, волонтёрство" }
    ],

    tapPhrases: [
      { en: "social and emotional development", ru: "социальное и эмоциональное развитие" },
      { en: "resume-building opportunities appear to drive these numbers", ru: "резюме словно раздувает число клубов" },
      { en: "doesn't outweigh the positive impact", ru: "не перевешивает плюсы" },
      { en: "Soft skills are \"people skills\"", ru: "Soft skills — навыки работы с людьми" },
      { en: "make potential mistakes, miss deadlines, and use their experiences to grow in a supportive environment", ru: "ошибаться, просрачивать сроки и расти в поддержке" },
      { en: "beneficial in your future career", ru: "полезно для будущей карьеры" },
      { en: "whether that's multitasking, staying organised, generating ideas, or serving others", ru: "мультитаск, порядок, идеи или помощь другим" },
      { en: "the issue of over-committing when they're pressured to be involved", ru: "перегруз, когда давят «включись»" },
      { en: "many student clubs welcome conversations about needing some time", ru: "клубы нормально обсуждают нехватку времени" },
      { en: "stepping back isn't an option", ru: "«нельзя отступить» — так автору не говорили" },
      { en: "when I feel ready to return", ru: "когда снова готова вернуться" },
      { en: "sports- and wellness-focused organizations", ru: "спорт и wellness-организации" },
      { en: "student clubs don't really foster one single community: they divide the student base", ru: "клубы дробят студентов, а не собирают всех" },
      { en: "bring a sense of community to students", ru: "дают чувство своей «тусовки»" },
      { en: "creates a problem for students with social anxiety who struggle to feel that they fit in with the crowd", ru: "тревожным тяжело влиться в толпу" },
      { en: "leaves those who cannot afford the costs on the outside", ru: "без денег остаются снаружи" },
      { en: "good job experience for the real world", ru: "«как на настоящей работе»" },
      { en: "resources to help students succeed in life should be available to students from outside the club system as well", ru: "ресурсы успеха должны быть и вне клубов" },
      { en: "earn an advantageous position in society mainly by knowing the right person", ru: "успех якобы через нужные связи" },
      { en: "Should success be valued for the effort someone makes", ru: "Считать ли успехом именно усилие?" },
      { en: "only if they create an inclusive environment", ru: "только если среда инклюзивна" }
    ],

    tapLexicon: [
      { en: "empathetic", ru: "эмпатичный" },
      { en: "advocacy", ru: "защита интересов, адвокация" },
      { en: "memberships", ru: "членство" },
      { en: "ethic", ru: "этика (work ethic — трудовая этика)" },
      { en: "deadlines", ru: "дедлайны, сроки" },
      { en: "multitasking", ru: "многозадачность" },
      { en: "organised", ru: "организованный (брит.)" },
      { en: "overwhelming", ru: "подавляюще, слишком много" },
      { en: "barrier", ru: "барьер" },
      { en: "advertise", ru: "рекламировать (возможности)" },
      { en: "advantageous", ru: "выгодный" },
      { en: "reputation", ru: "репутация" },
      { en: "formal", ru: "официальный" },
      { en: "informal", ru: "неформальный" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
