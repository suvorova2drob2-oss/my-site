/**
 * OGE Listening MC · Unit 12 · Вариант 12 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-variant12-listening-mc",
    unitOrder: 12,
    title: "Unit 12 · Contest, test and a present",
    examSection: "Tasks 1–4",
    headerTitle: "Flower contest · Mary · Tina",
    audioSrc: "audio/u12/listening-12.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "...And a few words about our Flower Contest. This year, the contest is scheduled for May instead of June as it used to be. This is necessary to meet the needs of our new international participants as the contest is arranged as an international event and we expect three times more participants than usual. Note that the registration time has changed too. The participation requests will be accepted up to the end of February, which means up to February 29th due to the leap year."
      },
      {
        label: "B",
        body:
          "Hi, Mum! I'm calling to remind you about the costume you promised to fix for our drama show. The show is tomorrow, so today is the last opportunity to make my costume of a medieval prince look more or less royal. It needs to be cleaned, at least. Our teacher says the costumes are important as the jury nominates a prize for the best costume. Sorry, I'm going to be late today as we are going to the library after school to prepare for our literature test. It won't take us long. See you later!"
      },
      {
        label: "C",
        body:
          "Father: Why aren't you at school, Mary? As far as I know, your classes are over at 2 p.m. today.\nMary: Right, Dad. It's only 12 now.\nFather: What's up then? Is your teacher ill and did they let you leave earlier?\nMary: Dad, let me explain!\nFather: Go ahead.\nMary: Everything's alright. Nobody's sick. I'm here with our PE teacher. Me and our athletics team. We're waiting for a school bus to take us to the stadium.\nFather: Where are the other students from your class?\nMary: In the classroom, of course. Only the athletes were allowed to skip the classes. Because we are competing today. I told you all about it yesterday, remember?"
      },
      {
        label: "D",
        body:
          "Ted: Hi, Tina!\nTina: Hi, Ted! What are you shopping for?\nTed: I wish I knew. I've been invited to a birthday party and I have no idea what to get as a present.\nTina: A boy or a girl?\nTed: A girl — that's the problem. I don't think a basketball or a T-shirt will make her happy.\nTina: No, forget about a basketball. And I wouldn't recommend a T-shirt either. You need to find something like... I think these headphones will do.\nTed: Headphones?\nTina: Yes. Look, the colour is very nice, they are not very expensive and all girls lose small things like headphones. It means they always need new ones.\nTed: Sounds convincing. Thanks for your help."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "People who want to take part in the contest should apply in...",
        key: 1,
        choices: [
          { num: 1, text: "February." },
          { num: 2, text: "April." },
          { num: 3, text: "May." }
        ],
        explainRu: "Заявки принимают до конца февраля."
      },
      {
        examNum: 2,
        prompt: "The boy is going to come home later than usual because...",
        key: 2,
        choices: [
          { num: 1, text: "he wants to see a drama show." },
          { num: 2, text: "he has to get ready for a test." },
          { num: 3, text: "he is taking part in a competition." }
        ],
        explainRu: "После школы он идёт в библиотеку готовиться к тесту."
      },
      {
        examNum: 3,
        prompt: "Mary is NOT at school because...",
        key: 3,
        choices: [
          { num: 1, text: "she is feeling unwell." },
          { num: 2, text: "today's classes are over." },
          { num: 3, text: "she is involved in another activity." }
        ],
        explainRu: "Она с командой едет на соревнования."
      },
      {
        examNum: 4,
        prompt: "Tina recommends buying...",
        key: 1,
        choices: [
          { num: 1, text: "headphones." },
          { num: 2, text: "a T-shirt." },
          { num: 3, text: "a basketball." }
        ],
        explainRu: "Тина советует купить наушники."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
