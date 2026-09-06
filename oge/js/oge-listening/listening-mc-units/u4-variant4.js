/**
 * OGE Listening MC · Unit 4 · Вариант 4 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-variant4-listening-mc",
    unitOrder: 4,
    title: "Unit 4 · Short texts A–D",
    examSection: "Tasks 1–4",
    headerTitle: "Hotel · Claire · triathlon · Tim",
    audioSrc: "audio/u4/listening-4.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услышите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "And some information for our guests. While staying in our hotel, you can use all sorts of discounts on trips, excursions and activities in the city. All you need to do is to come to the reception and get your guest card. With our guest card, you can use the city public transport absolutely for free. Some city museums will offer you a 50 % discount. You can get a 10 % discount in the theme park and in the zoo. Check the list of options at the reception. If you have any questions, we'll be happy to help you."
      },
      {
        label: "B",
        body:
          "Hi, there! It's Claire! Sorry for calling so late last night. Everything is fine, I've found it! I really thought I had left that notebook in your flat, and got mad with you and with myself as I wouldn't be able to get ready for my exam without it. That notebook contains the whole material on the subject! And guess where I found it! It was in the bag I went shopping with on Friday. You remember you bought a new hat then. Anyway, sorry for having bothered you again. See you!"
      },
      {
        label: "C",
        body:
          "Mum: I've heard you're going to take part in the triathlon this year, Sam.\nSam: That's right, Mum. I'm competing for our school. Together with two of my classmates.\nMum: I see. And you will be doing the cycling part, right? You are good at it.\nSam: No, I'll be doing swimming, not cycling. It turned out that the other two cannot swim at all, so I have to save my team.\nMum: I understand. So, I need to prepare a swim cap and a swimsuit for you, not a cyclist's helmet. And who's doing the running?\nSam: Alan. He's the fastest in the class, and he's been doing athletics for a few years.\nMum: Right. We will all come to cheer you on!"
      },
      {
        label: "D",
        body:
          "Kate: Tim! Is this you? I haven't seen you for months! What have you been up to?\nTim: Nice to see you again, Kate. Nothing special, actually. I wanted to start my own business, but my plan didn't work, so I dropped it.\nKate: Sorry to hear that.\nTim: It's ok. No one in my family has ever been a business person. Me neither. I'm planning to enter college this year. Engineering. I've already submitted my application and I am waiting for their reply.\nKate: Oh, they'll accept you. You've always been very good at Maths and Science. And guess where I'm going next month!\nTim: Where to?\nKate: Australia! We were invited to take part in the regatta in Australia. It's not a round-the-world trip, of course, but I'm so excited about it!\nTim: Congrats! You've always been the most adventurous out of all of us."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "If you have the hotel guest card, you do not have to pay when you…",
        key: 1,
        choices: [
          { num: 1, text: "go by the city bus." },
          { num: 2, text: "enter a museum in the city." },
          { num: 3, text: "visit the local zoo." }
        ],
        explainRu: "Public transport — absolutely for free."
      },
      {
        examNum: 2,
        prompt: "Claire sounds happy because she…",
        key: 3,
        choices: [
          { num: 1, text: "has bought a new hat." },
          { num: 2, text: "has passed her exam." },
          { num: 3, text: "has found her notebook." }
        ],
        explainRu: "Everything is fine, I've found it!"
      },
      {
        examNum: 3,
        prompt: "What sport is Sam responsible for in the city triathlon?",
        key: 2,
        choices: [
          { num: 1, text: "Running." },
          { num: 2, text: "Swimming." },
          { num: 3, text: "Cycling." }
        ],
        explainRu: "I'll be doing swimming, not cycling."
      },
      {
        examNum: 4,
        prompt: "What are Tim's plans for the near future? — He wants to…",
        key: 1,
        choices: [
          { num: 1, text: "continue his education." },
          { num: 2, text: "start his own business." },
          { num: 3, text: "travel around the world." }
        ],
        explainRu: "Planning to enter college — Engineering."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
