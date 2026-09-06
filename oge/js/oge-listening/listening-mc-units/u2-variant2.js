/**
 * OGE Listening MC · Unit 2 · Вариант 2 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-variant2-listening-mc",
    unitOrder: 2,
    title: "Unit 2 · Short texts A–D",
    examSection: "Tasks 1–4",
    headerTitle: "Marathon · Mia · Victor · Jane's concert",
    audioSrc: "audio/u2/listening-2.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услышите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "As you know, our school marathon has been cancelled due to the rainy weather. We've rescheduled it for next Sunday, providing the weather is suitable. All the students who want to take part in the marathon have to register again at the campus sports centre. The last day for registration is next Friday. The list of participants will be displayed on the College site on Saturday afternoon. On Sunday, we expect all the athletes at the Central Park gate at 9.30 a.m. The marathon starts at 10 a.m."
      },
      {
        label: "B",
        body:
          "Hi, Jennie! It's Mia. Thanks for the card! It's so nice you always remember my birthday! Look, I'm going to celebrate this Saturday, with my closest friends, which means you too! At first, I thought about a picnic in the park, but it might be windy and rainy, so I don't want us to take a risk. So, let it be the cinema. There's a good film on; about a girl who runs a pet-friendly cafe, and all their adventures. Call or text me to confirm, and I'll buy the tickets. See you there!"
      },
      {
        label: "C",
        body:
          "Victor: Judy, hi! Are you going to the stadium?\nJudy: Oh, Victor... no, not exactly. To the swimming pool. I've got a swimming class there.\nVictor: I see. I like swimming too. My granddad taught me. And now he says that I can swim like a fish.\nJudy: Lucky you. To me, swimming feels scary. It's like... it's almost like speaking in front of a lot of people. I wish I had chosen some other sport... something less demanding. Like playing golf, for example.\nVictor: Are you afraid of the public? Yeah, I can understand that. As for golf, it's not an easy game, by the way. There are lots of rules. But my granddad promised to explain them to me.\nJudy: Did he? When are you going to start practising?\nVictor: This summer. I'll be staying with my grandparents for two weeks in August, quite enough time to learn to play a new sport."
      },
      {
        label: "D",
        body:
          "Jane: Are you coming to my concert, Dad?\nDad: Of course, Jane, I am. Is it tomorrow?\nJane: No. Tomorrow is Wednesday, and the concert is on Thursday, at 6 pm.\nDad: Ok. I've got it. Is it in the City Hall?\nJane: Yes, that's right. We are going there tomorrow for the final rehearsal.\nDad: What time is the rehearsal? I work till 5.30 tomorrow, and I won't be able to drive you there, I'm afraid.\nJane: The rehearsal is at 3 pm, but don't worry, there's no need to drive me there. We are going in our school bus right after the lessons.\nDad: Will your teacher be with you?\nJane: Of course, she will. Don't worry. And don't be late for the concert. Remember: at 6 o'clock sharp."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "To take part in the marathon, the students need to register on…",
        key: 1,
        choices: [
          { num: 1, text: "Friday." },
          { num: 2, text: "Saturday." },
          { num: 3, text: "Sunday." }
        ],
        explainRu: "Last day for registration — next Friday."
      },
      {
        examNum: 2,
        prompt: "Where is Mia going to celebrate her birthday?",
        key: 3,
        choices: [
          { num: 1, text: "In an adventure park." },
          { num: 2, text: "In a new café." },
          { num: 3, text: "In the cinema." }
        ],
        explainRu: "Picnic отменён — let it be the cinema."
      },
      {
        examNum: 3,
        prompt: "In the summer, Victor is going to learn to…",
        key: 2,
        choices: [
          { num: 1, text: "swim." },
          { num: 2, text: "play golf." },
          { num: 3, text: "speak in public." }
        ],
        explainRu: "Granddad promised to teach golf in August."
      },
      {
        examNum: 4,
        prompt: "Jane's concert starts at…",
        key: 3,
        choices: [
          { num: 1, text: "3.00 pm." },
          { num: 2, text: "5.30 pm." },
          { num: 3, text: "6.00 pm." }
        ],
        explainRu: "Concert on Thursday at 6 pm."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
