/**
 * ЕГЭ Listening Matching · Unit 15 · Office work (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "I think there is too much competition at work nowadays. Everybody is longing for promotion and often trying to move on to a better position in another company. On the contrary, teamwork aims at a company's accomplishments. When employees understand they can get ahead with their own company, they cooperate with colleagues and work more effectively to get better common and personal results."
    },
    {
      id: "B",
      text:
        "It's very important to understand people around you. If you are a manager, you'd better take time and listen to your colleagues, employees, face to face, if possible. Pay attention to non-verbal ways of communication, as appropriate gestures and eye contact can do more than even words of praise or criticism. The same piece of advice goes to employees. Explain to your management your decisions in detail and you'll get a reputation as a well-balanced person and better career prospects."
    },
    {
      id: "C",
      text:
        "I think it is difficult for men and women to work in the same space. Women are more creative and emotional whereas men are more logical and better organized. Women want to feel, men want to think. Any department, if it considers these differences, will be much better off with men and women working separately, without distracting each other, causing conflicts and misunderstandings."
    },
    {
      id: "D",
      text:
        "What I dislike about some offices is that there is too much gossip there. It does not depend on who dominates there — men or women. Actually, men are sometimes even worse! It gets on my nerves when people begin to discuss their manager, the latest teambuilding activity or their domestic affairs. It distracts me and is simply unpleasant. To create some personal space and work effectively, I listen to music instead."
    },
    {
      id: "E",
      text:
        "I think there should be a law for people not to go to work if they are ill or upset. To work effectively is simply impossible if someone is coughing or wants to scream at you instead of listening to your requests or suggestions. Any manager must ensure that the office environment is calm and appropriate for work. To introduce some relaxation techniques might be a good idea as well."
    },
    {
      id: "F",
      text:
        "What is important in any office is that you get a clear explanation of what exactly to do from your management. There should not be any room for confusion or misinterpretation. If instructions can be understood as suggestions, there will not be any result. Instructions in the written form are simply perfect. If you are provided with details of a desirable result, this will be a key to completing the task successfully, I think."
    }
  ];

  pack.units.push({
    id: "u15-office-work",
    unitOrder: 15,
    title: "Unit 15 · Office work",
    examSection: "§1 · Задание 1",
    headerTitle: "Office work",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/15/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2015%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Office work:</strong> A — teamwork, B — communication, C — gender differences, D — gossip distracts, E — health/calm environment, F — clear instructions.</p>",
    statements: [
      { num: 1, text: "Clear instructions at work are very important." },
      { num: 2, text: "Personal discussions in the office can distract from work." },
      { num: 3, text: "It is important to think about gender differences in office work." },
      { num: 4, text: "Employees' health must be the top priority for office managers." },
      { num: 5, text: "A positive atmosphere is important at work." },
      { num: 6, text: "Effective communication is important both for employers and employees." },
      { num: 7, text: "Team spirit is the key to success for both the office and its employees." }
    ],
    extraStatementNum: 5,
    key: [7, 6, 3, 2, 4, 1],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "teamwork aims at a company's accomplishments", ru: "командная работа нацелена на достижения компании", tip: "A · №7" },
      { en: "cooperate with colleagues", ru: "сотрудничать с коллегами", tip: "A · №7" },
      { en: "listen to your colleagues", ru: "слушать коллег", tip: "B · №6" },
      { en: "non-verbal ways of communication", ru: "невербальные способы общения", tip: "B · №6" },
      { en: "men and women working separately", ru: "мужчины и женщины работают отдельно", tip: "C · №3" },
      { en: "too much gossip", ru: "слишком много сплетен", tip: "D · №2" },
      { en: "distracts me", ru: "отвлекает меня", tip: "D · №2" },
      { en: "not to go to work if they are ill or upset", ru: "не ходить на работу больными или расстроенными", tip: "E · №4" },
      { en: "clear explanation", ru: "чёткое объяснение", tip: "F · №1" },
      { en: "written form", ru: "письменная форма", tip: "F · №1" }
    ],
    tapPhrases: [
      { en: "longing for promotion", ru: "стремятся к повышению" },
      { en: "career prospects", ru: "карьерные перспективы" },
      { en: "conflicts and misunderstandings", ru: "конфликты и недопонимание" },
      { en: "gets on my nerves", ru: "действует мне на нервы" },
      { en: "domestic affairs", ru: "домашние дела" },
      { en: "personal space", ru: "личное пространство" },
      { en: "relaxation techniques", ru: "техники расслабления" },
      { en: "room for confusion", ru: "пространство для путаницы" }
    ],
    shadowSpeakers: speakers.map(function (sp) {
      return {
        id: sp.id,
        label: "Speaker " + sp.id,
        fullText: sp.text,
        phrases: [],
        chunks: [{ text: sp.text, showText: true }]
      };
    }),
    huntLabs: [
      { speaker: "A", keyNum: 7, trapNums: [5], keyLineRu: "Teamwork brings common and personal results.", evidencePromptRu: "<strong>A.</strong> Найдите teamwork / cooperate.", segments: [{ kind: "hit", sol: "e", text: "teamwork aims at a company's accomplishments" }, { kind: "hit", sol: "e", text: "cooperate with colleagues" }] },
      { speaker: "B", keyNum: 6, trapNums: [], keyLineRu: "Managers and employees need effective communication.", evidencePromptRu: "<strong>B.</strong> Найдите listen / explain.", segments: [{ kind: "hit", sol: "e", text: "listen to your colleagues, employees, face to face" }, { kind: "hit", sol: "e", text: "The same piece of advice goes to employees" }] },
      { speaker: "C", keyNum: 3, trapNums: [], keyLineRu: "The speaker focuses on gender differences.", evidencePromptRu: "<strong>C.</strong> Найдите men/women differences.", segments: [{ kind: "hit", sol: "e", text: "men and women to work in the same space" }, { kind: "hit", sol: "e", text: "considers these differences" }] },
      { speaker: "D", keyNum: 2, trapNums: [5], keyLineRu: "Gossip and personal discussions distract from work.", evidencePromptRu: "<strong>D.</strong> Найдите gossip / distracts.", segments: [{ kind: "hit", sol: "e", text: "too much gossip" }, { kind: "hit", sol: "e", text: "It distracts me" }] },
      { speaker: "E", keyNum: 4, trapNums: [5], keyLineRu: "Ill or upset people should not go to work; calm environment.", evidencePromptRu: "<strong>E.</strong> Найдите health/calm office.", segments: [{ kind: "hit", sol: "e", text: "not to go to work if they are ill or upset" }, { kind: "hit", sol: "e", text: "office environment is calm and appropriate for work" }] },
      { speaker: "F", keyNum: 1, trapNums: [], keyLineRu: "Clear written instructions are important.", evidencePromptRu: "<strong>F.</strong> Найдите clear explanation / written instructions.", segments: [{ kind: "hit", sol: "e", text: "clear explanation of what exactly to do" }, { kind: "hit", sol: "e", text: "Instructions in the written form are simply perfect" }] }
    ]
  });
})(typeof window !== "undefined" ? window : this);
