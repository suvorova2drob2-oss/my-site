/**
 * OGE Listening MC · Unit 15 · Вариант 15 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-variant15-listening-mc",
    unitOrder: 15,
    title: "Unit 15 · Clubs, train and the excursion",
    examSection: "Tasks 1–4",
    headerTitle: "Language school · Anna · Ron",
    audioSrc: "audio/u15/listening-15.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear students! We are glad to greet you in our language school and hope your stay here will be not only useful but amusing too. Apart from the language classes, you can attend our after-school clubs. Right now you can sign up for our Drama club and Historical club, where you'll develop your acting skills and learn lots of fascinating facts about the history of our town. Films and Animation club, lots of you asked about, will be accessible only next season."
      },
      {
        label: "B",
        body:
          "Hi, Mum! Please, don't worry, I'm absolutely fine and everything is alright. I've just missed the 4 o'clock train and have to wait for another one. Mary suggested taking a coach to get to the city, but it doesn't look very convenient because it means dragging my suitcase to the coach stop. I'd rather wait here, in the railway station café. Mary is with me, keeping me company. She promises to wait till I'm safely on my train and then she'll take a taxi home."
      },
      {
        label: "C",
        body:
          "Tom: Hi, Anna! What are you doing here?\nAnna: Hi, Tom! I'm waiting for my sister. She's on a course in the vocational training centre over there.\nTom: Is she going to be a shop assistant or a hairdresser?\nAnna: A hairdresser. In fact, it was her second choice. She's always dreamed of being a flight attendant, but the doctors say it's not for her, for health reasons.\nTom: Yeah, for me, even one flight is a great challenge. To be a flight attendant you need to have very good health. But it looks like you win here! When your sister is a hairdresser, you can experiment with your hairstyle a lot.\nAnna: Exactly."
      },
      {
        label: "D",
        body:
          "Liz: Hi, Ron! Remember about our excursion? Our group needs to be at the bus station at 7.\nRon: Sorry, Liz, it looks like I'm not going with you tomorrow.\nLiz: Why? Don't you want to see the old castle? It's going to be interesting!\nRon: I know. I wish I could go with you. I've read about the place — it's really worth seeing.\nLiz: Then what?\nRon: I'm getting ill I'm afraid. I've got a sore throat and a slight fever.\nLiz: Oh, you need to go straight home now and lay in bed. Remember that you are taking part in a maths contest next week — you need to be perfectly well by that time.\nRon: I will. It's just a cold, I'll be OK in a couple of days."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "At the moment, students at the language school CANNOT join...",
        key: 3,
        choices: [
          { num: 1, text: "Drama Club." },
          { num: 2, text: "Historical Club." },
          { num: 3, text: "Films and Animation Club." }
        ],
        explainRu: "Клуб кино и анимации откроется только в следующем сезоне."
      },
      {
        examNum: 2,
        prompt: "What means of transport is the girl going to use to get home?",
        key: 2,
        choices: [
          { num: 1, text: "A coach." },
          { num: 2, text: "A train." },
          { num: 3, text: "A taxi." }
        ],
        explainRu: "Она дождётся следующего поезда."
      },
      {
        examNum: 3,
        prompt: "Anna's sister is going to be...",
        key: 1,
        choices: [
          { num: 1, text: "a hairdresser." },
          { num: 2, text: "a flight attendant." },
          { num: 3, text: "a shop assistant." }
        ],
        explainRu: "Сестра Анны будет парикмахером."
      },
      {
        examNum: 4,
        prompt: "Ron is NOT going on an excursion because...",
        key: 2,
        choices: [
          { num: 1, text: "he is taking part in a maths contest." },
          { num: 2, text: "he is feeling unwell." },
          { num: 3, text: "he is not interested in the topic." }
        ],
        explainRu: "У Рона болит горло и есть температура."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
