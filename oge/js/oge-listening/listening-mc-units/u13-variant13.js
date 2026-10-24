/**
 * OGE Listening MC · Unit 13 · Вариант 13 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-variant13-listening-mc",
    unitOrder: 13,
    title: "Unit 13 · Languages, library and tickets",
    examSection: "Tasks 1–4",
    headerTitle: "Italian · Kevin · Steve",
    audioSrc: "audio/u13/listening-13.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear colleagues! According to the results of the survey, the students of our school are interested in learning more than one foreign language. About 70 % of the respondents said the second foreign language they'd like to learn is Italian. 10 % would be glad to have Arabic as part of their school curriculum and the same amount of the students would choose Chinese. The remaining 10 % don't have any definite opinion on the point. So, Italian is undoubtedly the most popular choice."
      },
      {
        label: "B",
        body:
          "Hi, Dad! The film is over and I'm heading to school now. I need to borrow a few books and look for information for my project, which may take me a while. Mum promised to pick me up from the library but she isn't answering her phone. She must be at the sports centre at the moment and the connection is not very good there. Anyway, don't worry — I'll be sitting tight in the library till one of you calls back and picks me up. Love you!"
      },
      {
        label: "C",
        body:
          "Kevin: Hi, Mum! Why are you still at home? No patients today?\nMother: Morning, Kevin! No. New equipment is being installed in the clinic and it's closed to the patients.\nKevin: Your new dental equipment?\nMother: Yes. It's expensive but our accountant says we'll cover all the expenses pretty soon. We'll be able to take more patients and the image of the clinic will improve too.\nKevin: So you'll be home the whole day today?\nMother: What are you driving at, Kevin?\nKevin: A chicken pie for dinner. You cook it so seldom and I like it so much.\nMother: Ok. A chicken pie is a good idea actually. Alice is coming to tea tonight."
      },
      {
        label: "D",
        body:
          "Manager: Can I help you?\nSteve: I'd like to buy some tickets for today's performance. Could you tell me when it starts?\nManager: Which one? We have two performances today — at 2 p.m. and at 7 p.m.\nSteve: Well, I really don't know. I want to take my niece with me. She's seven but she loves theatrical shows. Can children attend the evening performances?\nManager: Yes, they can when they are accompanied by an adult.\nSteve: At 7 p.m. then.\nManager: Ok. How many tickets would you like?\nSteve: Three, please. It's for me, my wife and my niece.\nManager: Then it's going to be two tickets for regular price and one ticket with a discount."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "The language most students at the school would like to learn is...",
        key: 2,
        choices: [
          { num: 1, text: "Arabic." },
          { num: 2, text: "Italian." },
          { num: 3, text: "Chinese." }
        ],
        explainRu: "Большинство хочет учить итальянский."
      },
      {
        examNum: 2,
        prompt: "The girl is waiting for her parents...",
        key: 3,
        choices: [
          { num: 1, text: "near the cinema." },
          { num: 2, text: "in the sports centre." },
          { num: 3, text: "in the library." }
        ],
        explainRu: "Она будет ждать родителей в библиотеке."
      },
      {
        examNum: 3,
        prompt: "Kevin's mother works as...",
        key: 3,
        choices: [
          { num: 1, text: "a chef." },
          { num: 2, text: "an accountant." },
          { num: 3, text: "a dentist." }
        ],
        explainRu: "В клинике ставят новое стоматологическое оборудование."
      },
      {
        examNum: 4,
        prompt: "How many tickets did Steve buy?",
        key: 1,
        choices: [
          { num: 1, text: "Three." },
          { num: 2, text: "Two." },
          { num: 3, text: "One." }
        ],
        explainRu: "Стив просит три билета: себе, жене и племяннице."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
