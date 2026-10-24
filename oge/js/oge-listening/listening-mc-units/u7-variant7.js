/**
 * OGE Listening MC · Unit 7 · Вариант 7 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-variant7-listening-mc",
    unitOrder: 7,
    title: "Unit 7 · Club, party and zoo",
    examSection: "Tasks 1–4",
    headerTitle: "Computer club · Angela · Kate · Nora",
    audioSrc: "audio/u7/listening-7.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear friends! Our Computer club welcomes you after the renovation and we hope you enjoy the new interior. Please note that our working hours have changed and now we work on Mondays too. Our day off has been shifted to Wednesday and on Wednesday we are only available online. On Fridays, we work till 10 p.m., as well as on Saturdays and Sundays. Of course, all the information about our working hours and coming events is displayed on our website."
      },
      {
        label: "B",
        body:
          "Hi, Jacky! It's Angela. I need to talk to you. It's about your birthday party and about the people you are going to invite. It's important and I don't want anybody to hear us. That's why I'll be waiting for you in the park, on a bench near the court, after your tennis lesson today. Is that OK with you? The weather is going to be fine so we can walk and talk. And now I need to rush to my lesson, the bell has already gone. See you soon and don't tell anybody about my call!"
      },
      {
        label: "C",
        body:
          "Kate: It was so nice of you to see me off to the airport, Jack.\nJack: Oh, it's all right, Kate. I know that you are in Australia for the first time. I want you to have a good impression of my country and its people. By the way we have a great chance to get to know each other. I still don't know very much about you. What do you do?\nKate: I work for a large construction company.\nJack: Are you an engineer or a manager?\nKate: Neither. I design and plan buildings. I work as an architect.\nJack: Wow! You are the first architect I've ever met!\nKate: And you?\nJack: I'm a vet. I work at Sydney Zoo.\nKate: Really? Working at the zoo is my nephew's dream."
      },
      {
        label: "D",
        body:
          "Nora: Hi, Tom!\nTom: Hi, Nora! I'm just calling to ask how you are. I've just seen your mum. She said you're feeling unwell and are going to the doctor's instead of school.\nNora: That's mostly true, but not completely.\nTom: Yeah?\nNora: I really feel a bit unwell. It must be a cold. We went skating yesterday.\nTom: You're crazy! It was freezing yesterday.\nNora: Yes, it was. I told my mum I would go to see the doctor.\nTom: But you won't, will you?\nNora: No, I won't. I have to be in class today at all costs. We are writing a test which I can't miss. It's very important for my final grades.\nTom: Have I already told you how crazy you are?\nNora: Yes."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "If you want to spend an evening in the Computer club, you should avoid coming on...",
        key: 1,
        choices: [
          { num: 1, text: "Wednesdays." },
          { num: 2, text: "Fridays." },
          { num: 3, text: "Saturdays." }
        ],
        explainRu: "В среду клуб работает только онлайн."
      },
      {
        examNum: 2,
        prompt: "Angela suggests meeting up...",
        key: 3,
        choices: [
          { num: 1, text: "at school." },
          { num: 2, text: "at a party." },
          { num: 3, text: "in the park." }
        ],
        explainRu: "Анджела будет ждать в парке у корта."
      },
      {
        examNum: 3,
        prompt: "What does Kate do? — She is...",
        key: 2,
        choices: [
          { num: 1, text: "a manager." },
          { num: 2, text: "an architect." },
          { num: 3, text: "a vet." }
        ],
        explainRu: "Кейт проектирует здания и работает архитектором."
      },
      {
        examNum: 4,
        prompt: "Where is Nora about to go?",
        key: 2,
        choices: [
          { num: 1, text: "To the skating rink." },
          { num: 2, text: "To the classroom." },
          { num: 3, text: "To the doctor's." }
        ],
        explainRu: "Нора идёт на контрольную в класс."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
