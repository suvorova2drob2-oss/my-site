/**
 * OGE Listening MC · Unit 11 · Вариант 11 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-variant11-listening-mc",
    unitOrder: 11,
    title: "Unit 11 · Library and school",
    examSection: "Tasks 1–4",
    headerTitle: "Library · Ted · Jim · Rob",
    audioSrc: "audio/u11/listening-11.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "We are happy to greet you in our new library and hope you'll be frequent guests here. The library is supplied with books in more than 50 languages. If you need a book in a Romance language — like French, Italian or Spanish — they are on the 1st and the 2nd floors. The Slavic languages, like Russian, Bulgarian, Croatian, are on the second floor too, in the right wing of the building. If you go upstairs to the 3rd floor, you'll find the Arabic and Chinese literature."
      },
      {
        label: "B",
        body:
          "Hi, Bob. It's Ted. I'm sorry but it looks like I won't be able to go to the stadium with you tomorrow. I'm going to be busy at the time of the football match — there'll be a public lecture about black holes in the University at exactly the same time. Yes, I know that you consider me crazy to miss such a game and would tell me I should see a doctor, but the lecture is being delivered by one of the leading space researchers. He's a celebrity in that sphere and I can't miss it. See you later!"
      },
      {
        label: "C",
        body:
          "Ann: Hi Jim! What are you doing here, at the Medical centre?\nJim: Hi Ann! I've hurt my leg and I want to see the doctor.\nAnn: Let me see. Looks terrible. It might be broken I'm afraid.\nJim: I hope not. But it really hurts.\nAnn: Poor you! Did you have an accident?\nJim: Yes... sort of...\nAnn: Mountain biking?\nJim: No, I gave up mountain biking a year ago.\nAnn: I'm glad to hear it. It's too dangerous. Football, then?\nJim: No, I don't like playing team games. I go roller skating now. There's a skate park not far from my house and I spend all my free time there.\nAnn: Why can't you find something... safer?\nJim: I'll try. I promise. Sorry I have to go."
      },
      {
        label: "D",
        body:
          "Rob: Hi, Mia! Are you busy tonight? I've got to talk to you and it's important.\nMia: Sorry, Rob, but I need to be in the swimming pool by seven. It's my regular session and I can't skip it. Let's talk tomorrow, at school. In the midday break?\nRob: Right, but I could meet you after your swimming class. I'll see you home and we'll talk on the way.\nMia: No, it's not an option. It'll be too late. And my mum will pick me up from the pool anyway, to drive me home. Can it really not wait till tomorrow?\nRob: It can, of course. Ok. I'll be waiting for you in the school lobby then, near the canteen, in the midday break.\nMia: Fine.\nRob: Don't be late!"
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "To borrow a book in the Russian language, you should ask for it...",
        key: 2,
        choices: [
          { num: 1, text: "on the first floor." },
          { num: 2, text: "on the second floor." },
          { num: 3, text: "on the third floor." }
        ],
        explainRu: "Русские книги лежат на втором этаже."
      },
      {
        examNum: 2,
        prompt: "Ted is going to visit an event related to...",
        key: 2,
        choices: [
          { num: 1, text: "medicine." },
          { num: 2, text: "astrophysics." },
          { num: 3, text: "sports." }
        ],
        explainRu: "Он идёт на лекцию про чёрные дыры."
      },
      {
        examNum: 3,
        prompt: "What sport does Jim do now?",
        key: 3,
        choices: [
          { num: 1, text: "Mountain biking." },
          { num: 2, text: "Football." },
          { num: 3, text: "Roller skating." }
        ],
        explainRu: "Сейчас он катается на роликах."
      },
      {
        examNum: 4,
        prompt: "Rob and Mia are going to see each other...",
        key: 1,
        choices: [
          { num: 1, text: "in school." },
          { num: 2, text: "at the bus stop." },
          { num: 3, text: "in the swimming pool." }
        ],
        explainRu: "Они встретятся в школе на большой перемене."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
