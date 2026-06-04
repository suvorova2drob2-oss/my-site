/**
 * ЕГЭ Listening Matching · Unit 14 · Animal intelligence (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "As it turns out, a lot of animals are a lot smarter than most humans think. If we had a clear way to communicate with them, it would probably be astonishing to find out what's going on in their cute little minds. There's a long list of really smart animals on Earth. From chimpanzees to whales, ants and even sheep, there's a lot more to the animal kingdom than meets the eye. When studies were conducted, it was found out that most animals are rather intelligent creatures."
    },
    {
      id: "B",
      text:
        "I think pigs are some of the smartest animals in the world. Some scientists say they're smarter than chimps. The reason is simple: they've seen pigs play video games more successfully than chimps. It's hard to argue with that logic, right? Their object-location memory is phenomenal. Once they find food in a location, they'll go back to the same area next time, expecting food to be there. Even more impressive is that pigs can find their way home, from a long distance away."
    },
    {
      id: "C",
      text:
        "A cat's excellent hunting ability certainly doesn't come from luck. It comes from their supreme sensory abilities and intelligence. Although it's true that cats aren't as trainable as dogs, it doesn't mean they aren't as smart. I've read cats have twice as many neurons in their brains as dogs have. This extensive brain power leads to rational thought and the ability to solve problems and make smart decisions. Plus, cats can recognize if objects change places."
    },
    {
      id: "D",
      text:
        "Many people think horses are just good farmworkers, but that's not their only merit. They're sensitive by nature, and they often respond to human emotions in appealing ways. Also, horses have learnt how to communicate with us in a sort of sign language. An experiment showed that they learnt to tell humans whether or not they wanted to wear a rug. When it was sunny, they didn't want one, but when it was cold or wet, they did. Perfectly logical, right?"
    },
    {
      id: "E",
      text:
        "People often think of sheep as lacking intelligence — some call them downright stupid. That's why people call those who follow someone mindlessly \"sheep\". However, we've got sheep all wrong, because they are actually pretty smart. Their memories are outstanding as well as their ability to recognize faces. One study found that sheep could figure out how to get out of a difficult maze, and the ones who did it the fastest waited at the exit to help the others get out too."
    },
    {
      id: "F",
      text:
        "Did you ever imagine that bees might be able to tell the difference between a Picasso and a Monet painting? This is thanks to their excellent visual processing skills. Other bee skills include learning and performing tasks to get a reward. I've heard that bees can communicate with each other by dancing, jostling and head-butting. Their group decision-making skills are on point as well. Even crazier, they choose the new hive location together through a vote. Cool, right?"
    }
  ];

  var speakerPhrases = {
    A: [
      { en: "smarter than most humans think", ru: "умнее, чем думает большинство людей", tip: "№2" },
      { en: "cute little minds", ru: "милые маленькие умы" },
      { en: "a lot smarter than most humans think", ru: "намного умнее, чем думает большинство людей", tip: "№2" },
      { en: "a clear way to communicate", ru: "ясный способ общаться" },
      { en: "it would probably be astonishing", ru: "это, вероятно, было бы поразительно" },
      { en: "what's going on", ru: "что происходит" },
      { en: "a long list of really smart animals", ru: "длинный список действительно умных животных" },
      { en: "from chimpanzees to whales, ants and even sheep", ru: "от шимпанзе до китов, муравьёв и даже овец" },
      { en: "more to the animal kingdom than meets the eye", ru: "в животном мире больше, чем кажется" },
      { en: "studies were conducted", ru: "проводились исследования" },
      { en: "rather intelligent creatures", ru: "довольно умные существа" }
    ],
    B: [
      { en: "object-location memory", ru: "память на расположение объектов", tip: "№6" },
      { en: "find their way home", ru: "найти дорогу домой", tip: "№6" },
      { en: "some of the smartest animals in the world", ru: "одни из самых умных животных в мире" },
      { en: "smarter than chimps", ru: "умнее шимпанзе" },
      { en: "video games more successfully than chimps", ru: "играть в видеоигры успешнее, чем шимпанзе" },
      { en: "It's hard to argue with that logic", ru: "с такой логикой трудно спорить" },
      { en: "phenomenal", ru: "феноменальный" },
      { en: "find food in a location", ru: "находить еду в определённом месте" },
      { en: "go back to the same area", ru: "возвращаться в то же место" },
      { en: "expecting food to be there", ru: "ожидая, что еда будет там" },
      { en: "from a long distance away", ru: "с большого расстояния" }
    ],
    C: [
      { en: "excellent hunting ability", ru: "отличная способность охотиться", tip: "№5" },
      { en: "solve problems", ru: "решать проблемы", tip: "№5" },
      { en: "supreme sensory abilities", ru: "выдающиеся сенсорные способности" },
      { en: "doesn't come from luck", ru: "не берётся из удачи" },
      { en: "intelligence", ru: "интеллект" },
      { en: "aren't as trainable as dogs", ru: "не так хорошо поддаются дрессировке, как собаки" },
      { en: "doesn't mean they aren't as smart", ru: "это не значит, что они не такие умные" },
      { en: "twice as many neurons", ru: "вдвое больше нейронов" },
      { en: "extensive brain power", ru: "большая мощность мозга" },
      { en: "rational thought", ru: "рациональное мышление" },
      { en: "make smart decisions", ru: "принимать умные решения" },
      { en: "recognize if objects change places", ru: "замечать, если предметы поменяли место" }
    ],
    D: [
      { en: "tell humans whether or not they wanted", ru: "сообщать людям, хотят они этого или нет", tip: "№3" },
      { en: "good farmworkers", ru: "хорошие сельскохозяйственные работники" },
      { en: "not their only merit", ru: "не единственное их достоинство" },
      { en: "sensitive by nature", ru: "чуткие по природе" },
      { en: "respond to human emotions", ru: "реагировать на человеческие эмоции" },
      { en: "in appealing ways", ru: "привлекательным / приятным образом" },
      { en: "communicate with us in a sort of sign language", ru: "общаться с нами своего рода языком жестов" },
      { en: "An experiment showed", ru: "эксперимент показал" },
      { en: "wear a rug", ru: "носить попону" },
      { en: "when it was cold or wet", ru: "когда было холодно или сыро" },
      { en: "Perfectly logical", ru: "совершенно логично" }
    ],
    E: [
      { en: "we've got sheep all wrong", ru: "мы неправильно думаем об овцах", tip: "№7" },
      { en: "lacking intelligence", ru: "лишённые ума" },
      { en: "downright stupid", ru: "совсем глупые" },
      { en: "follow someone mindlessly", ru: "бездумно следовать за кем-то" },
      { en: "actually pretty smart", ru: "на самом деле довольно умные" },
      { en: "Their memories are outstanding", ru: "их память выдающаяся" },
      { en: "recognize faces", ru: "узнавать лица" },
      { en: "get out of a difficult maze", ru: "выбраться из сложного лабиринта" },
      { en: "waited at the exit", ru: "ждали у выхода" },
      { en: "help the others get out too", ru: "помогать другим тоже выбраться" }
    ],
    F: [
      { en: "group decision-making skills", ru: "навыки группового принятия решений", tip: "№1" },
      { en: "tell the difference between a Picasso and a Monet painting", ru: "отличать картину Пикассо от картины Моне" },
      { en: "visual processing skills", ru: "навыки визуальной обработки" },
      { en: "learning and performing tasks", ru: "учиться и выполнять задания" },
      { en: "to get a reward", ru: "чтобы получить награду" },
      { en: "communicate with each other by dancing", ru: "общаться друг с другом с помощью танца" },
      { en: "jostling and head-butting", ru: "подталкивания и толчков головой" },
      { en: "on point", ru: "на высоте / очень сильные" },
      { en: "choose the new hive location together", ru: "вместе выбирать место для нового улья" },
      { en: "through a vote", ru: "путём голосования" }
    ]
  };

  pack.units.push({
    id: "u14-animal-intelligence",
    unitOrder: 14,
    title: "Unit 14 · Animal intelligence",
    examSection: "§1 · Задание 1",
    headerTitle: "Animal intelligence",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/14/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2014%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Animal intelligence:</strong> A — intelligence underestimated, B — pigs' memory, C — cats, D — horses communicate wishes, E — sheep reputation false, F — bees team decision-making.</p>",
    statements: [
      { num: 1, text: "Their good team-building skills are to be respected." },
      { num: 2, text: "Animals' intelligence is often not recognised." },
      { num: 3, text: "These animals are smart enough to tell what they want." },
      { num: 4, text: "A man's best friend is trained to understand emotions." },
      { num: 5, text: "These popular pets and good hunters are truly smart." },
      { num: 6, text: "Good memory helps them to find home, food and fun." },
      { num: 7, text: "The reputation of being not clever appears to be false." }
    ],
    extraStatementNum: 4,
    key: [2, 6, 5, 3, 7, 1],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "smarter than most humans think", ru: "умнее, чем думает большинство людей", tip: "A · №2" },
      { en: "object-location memory", ru: "память на расположение объектов", tip: "B · №6" },
      { en: "find their way home", ru: "найти дорогу домой", tip: "B · №6" },
      { en: "excellent hunting ability", ru: "отличная способность охотиться", tip: "C · №5" },
      { en: "solve problems", ru: "решать проблемы", tip: "C · №5" },
      { en: "tell humans whether or not they wanted", ru: "сообщать людям, хотят они или нет", tip: "D · №3" },
      { en: "we've got sheep all wrong", ru: "мы неправильно думаем об овцах", tip: "E · №7" },
      { en: "group decision-making skills", ru: "навыки группового принятия решений", tip: "F · №1" }
    ],
    tapPhrases: [
      { en: "cute little minds", ru: "милые маленькие умы" },
      { en: "more to the animal kingdom than meets the eye", ru: "в животном мире больше, чем кажется" },
      { en: "video games more successfully than chimps", ru: "видеоигры успешнее, чем шимпанзе" },
      { en: "supreme sensory abilities", ru: "выдающиеся сенсорные способности" },
      { en: "rational thought", ru: "рациональное мышление" },
      { en: "sensitive by nature", ru: "чуткие по природе" },
      { en: "downright stupid", ru: "совершенно глупые" },
      { en: "visual processing skills", ru: "навыки визуальной обработки" }
    ],
    shadowSpeakers: speakers.map(function (sp) {
      return {
        id: sp.id,
        label: "Speaker " + sp.id,
        fullText: sp.text,
        phrases: speakerPhrases[sp.id] || [],
        chunks: [{ text: sp.text, showText: true }]
      };
    }),
    huntLabs: [
      { speaker: "A", keyNum: 2, trapNums: [4], keyLineRu: "Animals are smarter than humans think.", evidencePromptRu: "<strong>A.</strong> Найдите underestimated intelligence.", segments: [{ kind: "hit", sol: "e", text: "a lot of animals are a lot smarter than most humans think" }, { kind: "hit", sol: "e", text: "most animals are rather intelligent creatures" }] },
      { speaker: "B", keyNum: 6, trapNums: [], keyLineRu: "Pigs' memory helps them find food, home and play games.", evidencePromptRu: "<strong>B.</strong> Найдите memory + home/food.", segments: [{ kind: "hit", sol: "e", text: "object-location memory is phenomenal" }, { kind: "hit", sol: "e", text: "find food in a location" }, { kind: "hit", sol: "e", text: "find their way home" }] },
      { speaker: "C", keyNum: 5, trapNums: [4], keyLineRu: "Cats are popular pets/good hunters and smart.", evidencePromptRu: "<strong>C.</strong> Найдите hunting + smart.", segments: [{ kind: "hit", sol: "e", text: "cat's excellent hunting ability" }, { kind: "hit", sol: "e", text: "doesn't mean they aren't as smart" }] },
      { speaker: "D", keyNum: 3, trapNums: [4], keyLineRu: "Horses learnt to tell humans what they wanted.", evidencePromptRu: "<strong>D.</strong> Найдите tell humans whether wanted a rug.", segments: [{ kind: "hit", sol: "e", text: "learnt to tell humans whether or not they wanted to wear a rug" }] },
      { speaker: "E", keyNum: 7, trapNums: [2], keyLineRu: "The sheep reputation is false.", evidencePromptRu: "<strong>E.</strong> Найдите sheep reputation.", segments: [{ kind: "hit", sol: "e", text: "think of sheep as lacking intelligence" }, { kind: "hit", sol: "e", text: "we've got sheep all wrong" }] },
      { speaker: "F", keyNum: 1, trapNums: [], keyLineRu: "Bees make group decisions and vote.", evidencePromptRu: "<strong>F.</strong> Найдите group decision-making.", segments: [{ kind: "hit", sol: "e", text: "group decision-making skills are on point" }, { kind: "hit", sol: "e", text: "choose the new hive location together through a vote" }] }
    ]
  });
})(typeof window !== "undefined" ? window : this);
