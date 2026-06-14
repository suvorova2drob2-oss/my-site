/**
 * ЕГЭ Reading — Multiple Choice, юнит 5 · Understanding the media.
 */
(function (w) {
  var pack = w.__EGE_READING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-understanding-the-media",
    unitOrder: 5,
    title: "Unit 5 · Understanding the media",
    examSection: "Reading MC",
    instructionHtml:
      "<strong>Раздел 2. Чтение.</strong> Прочитайте текст и выберите один верный вариант ответа к каждому заданию. Занесите ответ в бланк.",

    paragraphs: [
      {
        n: 1,
        text:
          'There was an unspoken agreement in previous generations that the news media shared "the whole truth and nothing but the truth". Information was often shared by word of mouth and was sourced from a handful of generally reliable newspapers, news broadcasts, and radio programmes.',
        evidence: {
          support: ["shared by word of mouth", "handful of generally reliable newspapers"],
          distract: ['"the whole truth and nothing but the truth"']
        }
      },
      {
        n: 2,
        text:
          "It's not so simple today. Young people are coming of age in a time of technical sophistication. The news cycle runs 24 hours a day across multiple modes of media, available in nearly every teen's pocket. Anyone with a computer and modest technical skills can create fake videos or alter images, and everyone with a social media account can author content and share posts to millions of viewers.",
        evidence: {
          support: [
            "technical sophistication",
            "false videos or alter images"
          ],
          distract: ["The news cycle runs 24 hours a day"]
        }
      },
      {
        n: 3,
        text:
          "On social media, false information has been found to spread further and faster than accurate information. Sometimes, inaccurate or false information can be shared without bad intent: posters may not recognise the information is false, they may be sharing it to alert others to a hoax, or they may be sharing what they recognise is a joke (but others may not). Other times, people are spreading misinformation purposefully: to cause harm, to gain social media followers, to cause confusion about an issue, or for their own power gain. Young people seem to understand the importance of combating misinformation, and are aware of how it relates to their own habits online and on social media. A lot of youth are checking their sources too: a special study on kids and news found that 70% of respondents \"often\" or \"sometimes\" try to validate a suspicious piece of news. Nevertheless, it's important for parents and teachers to guide youth in acquiring media literacy.",
        evidence: {
          support: [
            "spread further and faster than accurate information",
            "70% of respondents \"often\" or \"sometimes\" try to validate"
          ],
          distract: [
            "guide youth in acquiring media literacy"
          ]
        }
      },
      {
        n: 4,
        text:
          "Young children may not always understand what they are seeing or hearing, even if it looks like they are. To help them, you can explore one type of media at a time, identify what is happening, and encourage a child to ask questions about what they are seeing or hearing. It's also a good idea to explore how media are made: make a video together, take apart an old device, or watch a video about the making of a TV show.",
        evidence: {
          support: [
            "make a video together",
            "identify what is happening"
          ],
          distract: ["explore how media are made"]
        }
      },
      {
        n: 5,
        text:
          "For primary school children, a great media literacy activity is to play a game of detectives: trying to figure out who created a piece of information (such as a video, a news article, or a photo), when they created it, where, and why. Think creatively together about what that creator may have wanted you to think and feel when you consume it.",
        evidence: {
          support: [
            "who created",
            "when they created it, where, and why"
          ],
          distract: ["play a game of detectives"]
        }
      },
      {
        n: 6,
        text:
          "Another great activity is to choose a single news story and look it up on multiple outlets and media types (for instance, look up stories about a topic of interest on local and national news sites, international news sites, video sites, and social media). Discuss what is presented in each, and what carries through across all sources. When an advertisement comes on, you can ask a child what they think the ad is trying to get them to do, who they think created it, and what is attractive about it.",
        evidence: {
          support: [
            "look it up on multiple outlets",
            "ask a child what they think the ad is trying to get them to do"
          ],
          distract: ["international news sites, video sites, and social media"]
        }
      },
      {
        n: 7,
        text:
          "When dealing with teenagers, ask them to show you some of the influencers they follow on social media. Discuss what they like about each and what they think that person is trying to get them to think or do. Try starting a conversation with a teenager using yourself as a real-life example of how you were exposed to misinformation. Then ask them if this has ever happened to them.",
        evidence: {
          support: [
            "using yourself as a real-life example",
            "how you were exposed to misinformation"
          ],
          distract: ["influencers they follow on social media"]
        }
      },
      {
        n: 8,
        text:
          "It's easy to forget that not long ago, none of us walked around with internet access in our pockets. But today, it's common for a 10-year-old to possess a computer or a smartphone that has the ability to instantly access the good, the bad, and everything in between that's available online. So media literacy skills are now almost as important as the ability to read and write.",
        evidence: {
          support: [
            "media literacy skills are now almost as important as the ability to read and write"
          ],
          distract: ["the good, the bad, and everything in between"]
        }
      }
    ],

    questions: [
      {
        examNum: 12,
        prompt: "According to the text, in the past, news was …",
        key: 2,
        choices: [
          { num: 1, text: "less trustworthy than now." },
          { num: 2, text: "spread mostly by people." },
          { num: 3, text: "acquired only through TV." },
          { num: 4, text: "checked mainly by printed media." }
        ],
        explainRu:
          "В первом абзаце прямо: информация <strong>часто передавалась из уст в уста</strong> (<strong>by word of mouth</strong>) и шла из ограниченного числа источников (газеты, эфир, радио), а не «только ТВ» или «главным образом печать»."
      },
      {
        examNum: 13,
        prompt:
          "The word <strong>sophistication</strong> in &ldquo;…in a time of technical sophistication&rdquo; (paragraph 2) is closest in meaning to …",
        key: 1,
        choices: [
          { num: 1, text: "complexity." },
          { num: 2, text: "control." },
          { num: 3, text: "availability." },
          { num: 4, text: "reliability." }
        ],
        explainRu:
          "<strong>Technical sophistication</strong> здесь — о развитой, «навороченной» технико-цифровой среде; по смыслу это ближе всего к <strong>сложности / высокой развитости технологий</strong>, а не к «контролю» или «надёжности»."
      },
      {
        examNum: 14,
        prompt: "It is implied that fake content is …",
        key: 4,
        choices: [
          { num: 1, text: "spread by mistake more often." },
          { num: 2, text: "created by technical specialists." },
          { num: 3, text: "created on purpose to earn money." },
          { num: 4, text: "spread more quickly than the truth." }
        ],
        explainRu:
          "В тексте исследование формулирует вывод напрямую: ложь в соцсетях <strong>распространяется дальше и быстрее</strong>, чем правдивая информация. Про «чаще по ошибке», «только специалисты» или «ради денег» так однозначно не сказано (есть разные мотивы, создать подделку могут и с «скромными» навыками)."
      },
      {
        examNum: 15,
        prompt:
          "Which is <strong>NOT</strong> mentioned in the text as a way to develop media literacy?",
        key: 4,
        choices: [
          { num: 1, text: "Creating your own media content." },
          { num: 2, text: "Analysing images and sound used." },
          { num: 3, text: "Thinking about the reasons for the media." },
          { num: 4, text: "Asking the author direct questions." }
        ],
        explainRu:
          "Есть создание медиа (<strong>make a video together</strong>), разбор того, что ребёнок видит и слышит, игра-детектив про причины и цели автора. Про <strong>написать автору и спросить напрямую</strong> в тексте <strong>нет</strong>."
      },
      {
        examNum: 16,
        prompt: "According to the text, the majority of young people try to …",
        key: 3,
        choices: [
          { num: 1, text: "learn media literacy skills." },
          { num: 2, text: "talk to adults about the media." },
          { num: 3, text: "confirm the source of news." },
          { num: 4, text: "follow someone on social media." }
        ],
        explainRu:
          "Около <strong>70%</strong> отвечают, что <strong>часто или иногда проверяют подозрительную новость</strong> (<strong>validate</strong>) — это как раз сверка источника / фактов, а не формулировка про «учатся грамотности» или «разговаривают со взрослыми»."
      },
      {
        examNum: 17,
        prompt:
          "What way does the author recommend in dealing with teenage <strong>children</strong>?",
        key: 3,
        choices: [
          { num: 1, text: "Playing an investigation game." },
          { num: 2, text: "Subscribing to popular accounts." },
          { num: 3, text: "Sharing your life experience." },
          { num: 4, text: "Guiding them in content creation." }
        ],
        explainRu:
          "Для подростков отдельно: начать разговор, приведя <strong>собственный реальный пример</strong> (<strong>real-life example</strong>), как вы столкнулись с дезинформацией. Игра-следствие относится к младшим школьникам; подписки на аккаунты текст не рекомендует как метод."
      },
      {
        examNum: 18,
        prompt: "The main purpose of the author is to …",
        key: 2,
        choices: [
          { num: 1, text: "compare the ways of getting news." },
          { num: 2, text: "attract attention to media literacy skills." },
          {
            num: 3,
            text: "analyse the reasons for fake information."
          },
          {
            num: 4,
            text: "educate parents about misinformation."
          }
        ],
        explainRu:
          "Текст связывает эпоху фейков с тем, что <strong>нужно направлять молодёжь</strong>, даёт практические шаги для разных возрастов и в конце делает вывод: <strong>грамотность в медиа почти как чтение и письмо</strong>. Это шире, чем только «разбор причин фейков» или узко «только для родителей про дезинформацию»."
      }
    ],

    quickPhrases: [
      { en: "word of mouth", ru: "из уст в уста" },
      { en: "news media", ru: "новостные СМИ" },
      { en: "social media", ru: "соцсети" },
      { en: "misinformation / false information", ru: "дезинформация / ложные сведения" },
      { en: "hoax", ru: "розыгрыш, фейк, миф" },
      { en: "media literacy", ru: "медиаграмотность" },
      { en: "validate / verify sources", ru: "проверять, сверять источники" },
      { en: "respondents", ru: "респонденты опроса" },
      { en: "technical sophistication", ru: "развитая техника; высокая сложность технологий" },
      { en: "news cycle", ru: "новостной цикл" },
      { en: "alter images", ru: "подделывать/менять изображения" },
      { en: "influencer", ru: "инфлюенсер" },
      { en: "outlet / news site", ru: "издание, новостной сайт" },
      { en: "power gain", ru: "рост влияния, власти" },
      { en: "acquiring skills", ru: "приобретение навыков" },
      { en: "real-life example", ru: "пример из реальной жизни" }
    ],

    tapPhrases: [
      {
        en: "an unspoken agreement in previous generations",
        ru: "молчаливое соглашение у прошлых поколений"
      },
      {
        en: "Information was often shared by word of mouth",
        ru: "Информацию часто передавали из уст в уста."
      },
      {
        en: "Young people are coming of age in a time of technical sophistication",
        ru: "Молодёжь взрослеет в эпоху сложных технологий."
      },
      {
        en: "The news cycle runs 24 hours a day across multiple modes of media",
        ru: "Новости идут круглосуточно во всех форматах."
      },
      {
        en: "create fake videos or alter images",
        ru: "делать поддельное видео и менять фото"
      },
      {
        en: "false information has been found to spread further and faster than accurate information",
        ru: "ложь распространяется дальше и быстрее правды"
      },
      {
        en: "without bad intent",
        ru: "без злого умысла"
      },
      {
        en: "alert others to a hoax",
        ru: "предупредить других о фейке"
      },
      {
        en: "spreading misinformation purposefully",
        ru: "намеренно распространять дезинформацию"
      },
      {
        en: "gain social media followers",
        ru: "набирать подписчиков"
      },
      {
        en: "the importance of combating misinformation",
        ru: "важность борьбы с дезинформацией"
      },
      {
        en: "70% of respondents \"often\" or \"sometimes\" try to validate a suspicious piece of news",
        ru: "70% «часто» или «иногда» проверяют подозрительную новость"
      },
      {
        en: "parents and teachers to guide youth in acquiring media literacy",
        ru: "родителям и учителям вести детей к медиаграмотности"
      },
      {
        en: "explore how media are made",
        ru: "разобраться, как создают медиа"
      },
      {
        en: "make a video together",
        ru: "вместе снять видео"
      },
      {
        en: "play a game of detectives",
        ru: "играть в детективов"
      },
      {
        en: "look it up on multiple outlets and media types",
        ru: "сверить тему по разным источникам и типам медиа"
      },
      {
        en: "what carries through across all sources",
        ru: "что повторяется во всех источниках"
      },
      {
        en: "using yourself as a real-life example of how you were exposed to misinformation",
        ru: "рассказать свой пример столкновения с фейком"
      },
      {
        en: "media literacy skills are now almost as important as the ability to read and write",
        ru: "медиаграмотность почти как чтение и письмо"
      }
    ],

    tapLexicon: [
      { en: "generations", ru: "поколения" },
      { en: "broadcasts", ru: "трансляции, эфир" },
      { en: "sophistication", ru: "сложность, развитость" },
      { en: "modest", ru: "скромные (навыки)" },
      { en: "inaccurate", ru: "неточный" },
      { en: "purposefully", ru: "намеренно" },
      { en: "confusion", ru: "путаницу" },
      { en: "habits", ru: "привычки" },
      { en: "nevertheless", ru: "тем не менее" },
      { en: "literacy", ru: "грамотность" },
      { en: "primary", ru: "начальная школа; младший школьный возраст" },
      { en: "detectives", ru: "детективов" },
      { en: "consume", ru: "потреблять (контент)" },
      { en: "advertisement", ru: "реклама" },
      { en: "attractive", ru: "привлекательное" },
      { en: "teenagers", ru: "подростков" },
      { en: "pockets", ru: "карманы (об телефоне)" },
      { en: "instantly", ru: "мгновенно" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
