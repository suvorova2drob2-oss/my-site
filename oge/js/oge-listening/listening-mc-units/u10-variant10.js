/**
 * OGE Listening MC · Unit 10 · Вариант 10 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-variant10-listening-mc",
    unitOrder: 10,
    title: "Unit 10 · Pets, party and Russian",
    examSection: "Tasks 1–4",
    headerTitle: "Airline · Kate · Rabbit · Max",
    audioSrc: "audio/u10/listening-10.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear passengers! If you are travelling with our airline, you can take your pets with you on board the plane if their weight does not exceed 5 kg. Please mind that we cannot accept more than 5 animals for one flight, regardless of their size. That is why we ask you to request permission for your pet to travel with you at least three days prior to the flight. All the veterinarian documents should be collected and sent to us electronically. The originals must be presented before the flight."
      },
      {
        label: "B",
        body:
          "Hi, Vicky! It's Kate calling. I'm afraid I can't come to your party. My luck as usual! I was heading for your party and stopped by the shopping centre to buy you a present when a car emerged just out of the blue! I jumped aside, but slipped on the wet road and fell over, right in a large muddy pool. My dress is ruined and I'm looking like a disaster in torn dirty tights. My bag was on the road and was nearly run over by a cyclist! Fortunately, my phone wasn't damaged and I'm able to call you now."
      },
      {
        label: "C",
        body:
          "Jim: Hi, Ann. Are you looking for another pet here?\nAnn: Oh, hi, Jim! No, I just want to buy some food for my kitten. And why are you here?\nJim: Looking for a pet for my brother. I'm leaving for college next month and he may feel lonely without me.\nAnn: He certainly will.\nJim: I'll be missing him too.\nAnn: I think he would be glad to get this rabbit as a present. Look, it's so cute!\nJim: Yeah. In fact, I had in mind something like a tortoise.\nAnn: No. A tortoise is not fun. He can't play with a tortoise.\nJim: Yes, you are probably right. The rabbit looks like a fluffy soft toy. It'll be comforting to hold it. Ok, thanks for your help."
      },
      {
        label: "D",
        body:
          "Max: Hello, Nina!\nNina: Hi...\nMax: You don't seem to recognize my voice. It's Max. We went to school together.\nNina: Oh, Max. I certainly remember you.\nMax: You're probably wondering why I'm calling.\nNina: Yes. I'm a bit surprised by your call.\nMax: I want to ask you a favour. I'm at college now and the Russian language is one of my majors.\nNina: Is it? But we learnt French at school.\nMax: Right. At college I had to choose between Russian and Spanish. And I chose Russian.\nNina: Why? It's a difficult language to learn.\nMax: That was my reason. I wanted a challenge. Now I need your help. You once told me that you've got Russian roots."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "Passengers with cats and small dogs should...",
        key: 3,
        choices: [
          { num: 1, text: "check them in together with the luggage." },
          { num: 2, text: "fly with an alternative airline." },
          { num: 3, text: "get the veterinarian documents ready." }
        ],
        explainRu: "Ветеринарные документы нужно собрать и прислать заранее."
      },
      {
        examNum: 2,
        prompt: "Kate complains that...",
        key: 1,
        choices: [
          { num: 1, text: "her clothes got damaged." },
          { num: 2, text: "she was not invited to the party." },
          { num: 3, text: "her telephone was broken." }
        ],
        explainRu: "Платье испорчено, колготки порваны, телефон цел."
      },
      {
        examNum: 3,
        prompt: "What animal has Jim decided to buy for his brother?",
        key: 3,
        choices: [
          { num: 1, text: "A tortoise." },
          { num: 2, text: "A kitten." },
          { num: 3, text: "A rabbit." }
        ],
        explainRu: "Джим соглашается купить кролика."
      },
      {
        examNum: 4,
        prompt: "What language is Max learning at college?",
        key: 2,
        choices: [
          { num: 1, text: "French." },
          { num: 2, text: "Russian." },
          { num: 3, text: "Spanish." }
        ],
        explainRu: "В колледже Макс выбрал русский."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
