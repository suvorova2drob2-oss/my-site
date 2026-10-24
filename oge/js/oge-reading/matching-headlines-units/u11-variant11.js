/**
 * OGE Reading · Unit 11 · Task 12 · Teenagers and careers.
 * Трубанёва 2026 · Вариант 11. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-variant11-reading-match",
    unitOrder: 11,
    title: "Unit 11 · Teenagers and careers",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "It's not easy for teenagers to decide what they want to do as a career. Some people put off the decision till the latest possible moment. Meanwhile, those who are able to make their career choice early are very lucky. They do not have any problem choosing a college or university. They know what subjects they should focus on at school and as a result, their grades in those subjects are much higher."
      },
      {
        letter: "B",
        text:
          "To make an informed career decision people need life experience. They have to be able to analyze their own interests and adequately assess themselves. Adults find these issues very challenging, and for teenagers, the mission may feel utterly impossible. In addition to that, pressure and despair may cause nervous breakdowns and depression. Psychologists call it an early profession crisis."
      },
      {
        letter: "C",
        text:
          "Of course, no one knows for sure what professions will be needed and how the job requirements may change in a few years. To feel safe one should follow the news and analyse trends. It will give job seekers enough time to learn new skills and even acquire a new profession. Not everyone, however, knows how to work with the information properly, and it is another skill which young people have to learn."
      },
      {
        letter: "D",
        text:
          "The job market is constantly changing. Some jobs disappear and new ones replace them. The jobs valued by the grandparents raise little excitement in their grandchildren. Young people look for new trends and technology. That is why programming for mobile apps and games attracts them a lot. Marketing and advertising come next. Another reason is that these jobs are well-paid."
      },
      {
        letter: "E",
        text:
          "Scientists predict that many people may become unemployed in the next 20 years. Lots of jobs will go to robots, which will change the job market dramatically. For example, transport can become unmanned; sales, banking and accountancy almost certainly will be done by artificial intelligence (AI). Even the creative jobs of artists and writers are at risk due to AI,"
      },
      {
        letter: "F",
        text:
          "When leaving school, teenagers face a career choice challenge. Some of them take their parents' advice and follow in their footsteps. Others surf the Internet for prestigious universities and read graduates' comments. There are career centres where consultants analyze young people's interests and provide recommendations. Another possible way is to study the job market for career prospects."
      }
    ],

    headlines: [
      { num: 1, text: "What jobs are currently popular with teenagers?" },
      { num: 2, text: "Is it good to choose a future profession at an early age?" },
      { num: 3, text: "Why is it hard for teenagers to choose their future career?" },
      { num: 4, text: "How do teenagers choose their future career?" },
      { num: 5, text: "What jobs may disappear in the future?" },
      { num: 6, text: "What new jobs will appear in the coming years?" },
      { num: 7, text: "Why is it important to monitor the job market?" }
    ],

    key: { A: 2, B: 3, C: 7, D: 1, E: 5, F: 4 },
    extraHeadlineNum: 6,

    explanationsRu: {
      A: "Ранний выбор профессии — удача → вопрос 2.",
      B: "Подросткам не хватает опыта, отсюда кризис → вопрос 3.",
      C: "Следить за новостями и трендами, чтобы успеть переучиться → вопрос 7.",
      D: "Подросткам интересны программирование, маркетинг и реклама → вопрос 1.",
      E: "Рабочие места, которые могут занять роботы и ИИ → вопрос 5.",
      F: "Советы родителей, отзывы выпускников, карьерные центры → вопрос 4."
    },

    extraExplainRu:
      "Лишний вопрос <strong>6</strong> (какие новые профессии появятся) — тексты говорят об исчезающих и уже популярных работах, но не называют новые профессии будущего."
  });
})(typeof window !== "undefined" ? window : this);
