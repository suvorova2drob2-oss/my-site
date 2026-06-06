/**
 * ЕГЭ Listening MC · Unit 19 · Danish supermarkets.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-danish-supermarkets",
    unitOrder: 19,
    title: "Unit 19 · Danish supermarkets",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Danish supermarkets",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/19/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2019_%5Bcut_242sec%5D%20-%203.mp3",
    instructionHtml:
      "Вы услышите <strong>интервью</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Denmark and stores:</strong> narrator grew up in the USA, dislikes Danish supermarket selection and culture, prices, cooking convenience, bagging, but still likes Denmark.</p>",
    questions: [
      {
        examNum: 3,
        prompt: "The narrator was brought up mainly in...",
        key: 3,
        choices: [
          { num: 1, text: "Denmark." },
          { num: 2, text: "England." },
          { num: 3, text: "the USA." }
        ],
        explainRu:
          "В конце он поясняет, что после раннего детства в Denmark жил most of my life in America.",
        distractorWrongRu: {
          1: "Born in Denmark is not the same as brought up mainly there.",
          2: "England упоминается only as another country in Europe, not his main upbringing place."
        }
      },
      {
        examNum: 4,
        prompt: "The narrator is not happy about Danish grocery stores because of...",
        key: 3,
        choices: [
          { num: 1, text: "the quality of the products." },
          { num: 2, text: "their size." },
          { num: 3, text: "the poor choice of foods." }
        ],
        explainRu:
          "Основная жалоба — boring selection и very few fruits and vegetables.",
        distractorWrongRu: {
          1: "He actually says Danish food is great and healthier.",
          2: "Store size itself is not the issue; the problem is selection."
        }
      },
      {
        examNum: 5,
        prompt: "The narrator criticizes...",
        key: 2,
        choices: [
          { num: 1, text: "the lifestyle in Denmark." },
          { num: 2, text: "Danish supermarkets." },
          { num: 3, text: "the Danish diet." }
        ],
        explainRu:
          "Он repeatedly attacks supermarket culture, while praising Danish food quality.",
        distractorWrongRu: {
          1: "He says he loves the country and is not attacking life in Denmark overall.",
          3: "He explicitly appreciates Danish food as healthy and free of artificial additives."
        }
      },
      {
        examNum: 6,
        prompt: "The prices in the Danish stores are quite high because...",
        key: 3,
        choices: [
          { num: 1, text: "the level of service is very high." },
          { num: 2, text: "everything is imported from abroad." },
          { num: 3, text: "there are no artificial foods." }
        ],
        explainRu:
          "Он прямо связывает высокую цену с organic and healthy food, free of synthetic or fast-related products.",
        distractorWrongRu: {
          1: "On the contrary, he complains that service is not high at all.",
          2: "Importing is not named as the reason."
        }
      },
      {
        examNum: 7,
        prompt: 'When the narrator says, "I do miss American convenience" it means that he...',
        key: 3,
        choices: [
          { num: 1, text: "wants ready-made dinners to be delivered to his place." },
          { num: 2, text: "wants to rent a flat near a big supermarket." },
          { num: 3, text: "doesn't like to spend much time cooking his meals." }
        ],
        explainRu:
          "Дальше он поясняет convenience through time: expensive ingredients and two hours in the kitchen.",
        distractorWrongRu: {
          1: "Delivery is not mentioned.",
          2: "The issue is not distance to a store."
        }
      },
      {
        examNum: 8,
        prompt: "According to the unwritten rules of Danish supermarket culture...",
        key: 1,
        choices: [
          { num: 1, text: "you pack all the food you buy on your own, without any help." },
          { num: 2, text: "shop assistants are always ready to pack your food for you." },
          { num: 3, text: "there are clerks whose duty is to help you with your bagging." }
        ],
        explainRu:
          "Он прямо says no one will do it for you and you should expect stress while bagging.",
        distractorWrongRu: {
          2: "Это противоположно тексту.",
          3: "Никаких clerks to help are mentioned."
        }
      },
      {
        examNum: 9,
        prompt: "Having lived in Denmark for a few years as a student, the narrator...",
        key: 2,
        choices: [
          { num: 1, text: "feels nostalgic about the USA." },
          { num: 2, text: "believes it to be a good place for him." },
          { num: 3, text: "pities Danish people." }
        ],
        explainRu:
          "Финал explicitly says he loves the country and is not someone who should move back to the States.",
        distractorWrongRu: {
          1: "He misses some American convenience, but this does not equal wanting to return.",
          3: "He even says most Danes look healthy and fit."
        }
      }
    ],
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "I've lived in Denmark now for nearly four years, and I've changed a lot within this time. I've become more fashionable, more cosmopolitan-minded, more ... Danish — if I'm allowed to say that."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "But one thing hasn't changed about me. And that is my inability to cooperate with Danish supermarket culture. As someone who was raised predominantly in the United States, I've always been used to grocery stores with a selection of food choices so huge that it's almost perverted. That and a high level of service. In an American grocery store, one can find a kind of product with a thousand different brandings and types. For example, let's take the flakes varieties: whole grain frosted flakes, or fat-free frosted flakes. Do I want my cream cheese with low, medium, or full fat? Seedless watermelons or watermelons with seeds? That being said, when I walk into a Danish grocery store I want to burst into tears because I'm so bored with the selection. The variety of cereals consists of Cherrios, Honey-nut Cherrios, and Wheaties. Coco-puffs if I'm lucky. There're few fruits and vegetables, most rotten. I'm telling you, everything is so boring and plain and demanding of hard kitchen labour that you just wish some American food companies could establish factories here and import some ready made dinners."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "I know I should be ashamed of saying this, but I do miss American convenience. In Denmark, making a homemade meal requires at least 30 dollars spent at the grocery store and 2 hours in the kitchen. For instance, at my local grocery store, nothing is allowed to be under 4 dollars. That's right, it's called organic and healthy food, free of anything synthetic or \"fast\"-related. But I do miss synthetic food."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "Oh yes, the whole Danish, \"do-it-yourself\" attitude prevails! Expect to stress while bagging all of your food, as no one will do it for you."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "The only way to really understand what I mean is to imagine that if you've come from America and you're used to certain things with service and product selection and then you move here — it truly is different in Denmark. And I've lived elsewhere in Europe (Iceland, England, Spain) and I still find the grocery stores much better and with more selection in those countries."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "However, how could anyone take me serious when I say, \"I miss synthetic food\"? That is purely attempting to be sarcastic, and I see that it is wrong and disgusting that American food is pumped up with so much crap. I really appreciate that in Denmark the food is free of everything artificial and it shows on Danes — most of them look healthy and fit here. But once in a while I miss the vastness of an American grocery store!"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "I want to add that I am Danish, was born in Denmark, lived here for 3 years as a child and then moved to America where I lived most of my life. I moved back here a few years ago and I love the country. I speak Danish. I'm not an immigrant in Denmark who is unsatisfied with the way of life here and who should move back to the States. I'm a student and of course it takes 2 hours to make a meal on my own."
          }
        ]
      }
    ],
    huntLabs: [
      {
        examNum: 3,
        key: 3,
        paragraphIndex: 6,
        keyLineRu: "He lived most of his life in America.",
        explainRu: "Это прямой ответ на place of upbringing.",
        evidencePromptRu: "Найди moved to America where I lived most of my life.",
        segments: [
          { kind: "hit", sol: "e", text: "moved to America where I lived most of my life" },
          {
            kind: "hit",
            sol: "d",
            text: "was born in Denmark",
            wrongOption: 1,
            distractExplainRu:
              "Born in Denmark does not mean brought up mainly there."
          }
        ]
      },
      {
        examNum: 4,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "He dislikes the limited and boring food selection in Danish stores.",
        explainRu: "The selection is the core complaint.",
        evidencePromptRu: "Найди bored with the selection / few fruits and vegetables.",
        segments: [
          { kind: "hit", sol: "e", text: "I'm so bored with the selection" },
          { kind: "hit", sol: "e", text: "There're few fruits and vegetables" },
          {
            kind: "hit",
            sol: "d",
            text: "high level of service",
            wrongOption: 1,
            distractExplainRu:
              "High service is what he associates with American stores, not what he criticizes in Denmark."
          }
        ]
      },
      {
        examNum: 5,
        key: 2,
        paragraphIndex: 1,
        keyLineRu: "The criticism is directed at Danish supermarket culture and stores.",
        explainRu: "He even says Danish food itself is healthy later on.",
        evidencePromptRu: "Найди inability to cooperate with Danish supermarket culture.",
        segments: [
          { kind: "hit", sol: "e", text: "my inability to cooperate with Danish supermarket culture" },
          {
            kind: "hit",
            sol: "d",
            text: "the food is free of everything artificial",
            wrongOption: 3,
            distractExplainRu:
              "This is actually praise for Danish food, not criticism of the diet."
          }
        ]
      },
      {
        examNum: 6,
        key: 3,
        paragraphIndex: 2,
        keyLineRu: "High prices are linked to organic, healthy, non-synthetic food.",
        explainRu: "Он сам поясняет ценник этой food philosophy.",
        evidencePromptRu: "Найди organic and healthy food, free of anything synthetic.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "it's called organic and healthy food, free of anything synthetic"
          },
          {
            kind: "hit",
            sol: "d",
            text: "2 hours in the kitchen",
            wrongOption: 1,
            distractExplainRu:
              "This explains inconvenience, not high service."
          }
        ]
      },
      {
        examNum: 7,
        key: 3,
        paragraphIndex: 2,
        keyLineRu: "American convenience means not spending so much time cooking.",
        explainRu: "This is clear from the contrast with 2 hours in the kitchen.",
        evidencePromptRu: "Найди 2 hours in the kitchen.",
        segments: [
          { kind: "hit", sol: "e", text: "2 hours in the kitchen" },
          {
            kind: "hit",
            sol: "d",
            text: "ready made dinners",
            wrongOption: 1,
            distractExplainRu:
              "Ready-made dinners are mentioned as a wish, but delivery to his place is never mentioned."
          }
        ]
      },
      {
        examNum: 8,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "You bag everything yourself; nobody helps you.",
        explainRu: "Это прямая формулировка supermarket rule.",
        evidencePromptRu: "Найди no one will do it for you.",
        segments: [
          { kind: "hit", sol: "e", text: "no one will do it for you" }
        ]
      },
      {
        examNum: 9,
        key: 2,
        paragraphIndex: 6,
        keyLineRu: "He loves the country and does not think he should move back to the States.",
        explainRu: "Финал показывает, что Denmark remains a good place for him.",
        evidencePromptRu: "Найди I love the country / should move back to the States.",
        segments: [
          { kind: "hit", sol: "e", text: "I love the country" },
          {
            kind: "hit",
            sol: "e",
            text: "who should move back to the States"
          },
          {
            kind: "hit",
            sol: "d",
            text: "I do miss American convenience",
            wrongOption: 1,
            distractExplainRu:
              "Missing some convenience does not equal wanting to go back to the USA."
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Narrator",
        label: "Narrator",
        fullText:
          "I've lived in Denmark now for nearly four years, and I've changed a lot within this time. I've become more fashionable, more cosmopolitan-minded, more Danish - if I'm allowed to say that. But one thing hasn't changed about me. And that is my inability to cooperate with Danish supermarket culture. As someone who was raised predominantly in the United States, I've always been used to grocery stores with a selection of food choices so huge that it's almost perverted. That and a high level of service. In an American grocery store, one can find a kind of product with a thousand different brandings and types. For example, let's take the flakes varieties: whole grain frosted flakes, or fat-free frosted flakes. Do I want my cream cheese with low, medium, or full fat? Seedless watermelons or watermelons with seeds? That being said, when I walk into a Danish grocery store I want to burst into tears because I'm so bored with the selection. The variety of cereals consists of Cherrios, Honey-nut Cherrios, and Wheaties. Coco-puffs if I'm lucky. There're few fruits and vegetables, most rotten. I'm telling you, everything is so boring and plain and demanding of hard kitchen labour that you just wish some American food companies could establish factories here and import some ready made dinners. I know I should be ashamed of saying this, but I do miss American convenience. In Denmark, making a homemade meal requires at least 30 dollars spent at the grocery store and 2 hours in the kitchen. For instance, at my local grocery store, nothing is allowed to be under 4 dollars. That's right, it's called organic and healthy food, free of anything synthetic or \"fast\"-related. But I do miss synthetic food. Oh yes, the whole Danish, \"do-it-yourself\" attitude prevails! Expect to stress while bagging all of your food, as no one will do it for you. The only way to really understand what I mean is to imagine that if you've come from America and you're used to certain things with service and product selection and then you move here - it truly is different in Denmark. And I've lived elsewhere in Europe (Iceland, England, Spain) and I still find the grocery stores much better and with more selection in those countries. However, how could anyone take me serious when I say, \"I miss synthetic food\"? That is purely attempting to be sarcastic, and I see that it is wrong and disgusting that American food is pumped up with so much crap. I really appreciate that in Denmark the food is free of everything artificial and it shows on Danes - most of them look healthy and fit here. But once in a while I miss the vastness of an American grocery store! I want to add that I am Danish, was born in Denmark, lived here for 3 years as a child and then moved to America where I lived most of my life. I moved back here a few years ago and I love the country. I speak Danish. I'm not an immigrant in Denmark who is unsatisfied with the way of life here and who should move back to the States. I'm a student and of course it takes 2 hours to make a meal on my own.",
        phrases: [
          { en: "raised predominantly in the United States", ru: "в основном вырос в США", tip: "3" },
          { en: "Danish supermarket culture", ru: "датская культура супермаркетов", tip: "5" },
          { en: "selection of food choices", ru: "выбор продуктов", tip: "4" },
          { en: "high level of service", ru: "высокий уровень обслуживания" },
          { en: "a thousand different brandings and types", ru: "тысяча разных брендов и видов" },
          { en: "bored with the selection", ru: "скучаю от такого выбора", tip: "4" },
          { en: "few fruits and vegetables", ru: "мало фруктов и овощей", tip: "4" },
          { en: "ready made dinners", ru: "готовые ужины", tip: "7" },
          { en: "miss American convenience", ru: "скучаю по американскому удобству", tip: "7" },
          { en: "30 dollars spent at the grocery store", ru: "30 долларов в магазине" },
          { en: "2 hours in the kitchen", ru: "2 часа на кухне", tip: "7" },
          { en: "organic and healthy food", ru: "органическая и здоровая еда", tip: "6" },
          { en: "free of anything synthetic", ru: "без всего синтетического", tip: "6" },
          { en: "do-it-yourself attitude", ru: "подход \"делай сам\"" },
          { en: "bagging all of your food", ru: "самому упаковывать все продукты", tip: "8" },
          { en: "no one will do it for you", ru: "никто не сделает это за тебя", tip: "8" },
          { en: "much better and with more selection", ru: "намного лучше и с большим выбором" },
          { en: "food is free of everything artificial", ru: "еда без всего искусственного" },
          { en: "look healthy and fit", ru: "выглядят здоровыми и подтянутыми" },
          { en: "born in Denmark", ru: "родился в Дании" },
          { en: "lived most of my life", ru: "прожил большую часть жизни", tip: "3" },
          { en: "I love the country", ru: "я люблю эту страну", tip: "9" },
          { en: "move back to the States", ru: "вернуться в Штаты", tip: "9" }
        ],
        chunks: []
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
