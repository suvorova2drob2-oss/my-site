/**
 * OGE Listening MC · Unit 18 · Вариант 18 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-variant18-listening-mc",
    unitOrder: 18,
    title: "Unit 18 · Hotel, project, trainers, basketball",
    examSection: "Tasks 1–4",
    headerTitle: "Hotel desk · Mum · Jim · Ken",
    audioSrc: "audio/u18/listening-18.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear guests! We are happy to greet you in our hotel. To make your stay with us nice and trouble free, we invite you to use our electronic assistant which will immediately inform the receptionist about your problem. So, if any electric device in your room, like the kettle, hairdryer or TV set, does not work, please press figure 1 on the information table near your entrance door. If you do not feel well and need a consultation with a doctor, please press 2. In case of any other problems, press 3."
      },
      {
        label: "B",
        body:
          "Hi, Mum, it's me! Look, I can't get through, your phone is always busy, but it's urgent. I forgot my project at home and we need to present them today when our classes are over. Could you please drop by school on your way to the office and bring it to me? It's on the writing desk in my room — you'll see it at once, in a red file. I know I'm causing a problem, but please! I promise to help you make dinner tonight, and tomorrow too! Please, text when you are able to come!"
      },
      {
        label: "C",
        body:
          "Jim: Excuse me, where can I find the Footwear Department?\nManager: It's over there, on the third floor. You can use the staircase or the elevator. But if you need babies' and children's shoes, they're here, on the first floor.\nJim: No, thanks, I'm looking for a pair of trainers for myself.\nManager: The third floor then. Next to the fast food café.\nJim: Thank you.\nManager: And I also recommend you visit our sports equipment shop on the second floor. You can find all sorts of treadmills, bicycles, roller skates and skateboards.\nJim: No, thank you. A pair of trainers is everything I need. Have a nice day.\nManager: You too!"
      },
      {
        label: "D",
        body:
          "Ken: Hi, Ann! It's Sunday and you are already going somewhere.\nAnn: Ken... Hi!\nKen: Are you going to the swimming pool?\nAnn: Yes, I am. And what are you doing at the bus stop so early?\nKen: I'm going to pick up my bike from the repair shop. I've damaged the wheel.\nAnn: I didn't know you were fond of cycling.\nKen: I'm not fond of it. The bike is only a means of transport — to go to school or to the sports centre.\nAnn: I see. At the sports centre you do some other sport, do you?\nKen: Yes, I joined the basketball team there and I've been doing quite well. I've participated in most of the competitions we've had.\nAnn: Impressive. Here's our bus at last."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "Which number should you press if you want to order some food to your room?",
        key: 3,
        choices: [
          { num: 1, text: "One." },
          { num: 2, text: "Two." },
          { num: 3, text: "Three." }
        ],
        explainRu: "Еда в списке не названа, значит любая другая проблема — цифра 3."
      },
      {
        examNum: 2,
        prompt: "The girl wants her mother to...",
        key: 1,
        choices: [
          { num: 1, text: "bring her something from home." },
          { num: 2, text: "pick her up when the lessons are over." },
          { num: 3, text: "cook her favourite food." }
        ],
        explainRu: "Нужно привезти забытый проект из дома."
      },
      {
        examNum: 3,
        prompt: "Where can Jim buy a pair of trainers?",
        key: 3,
        choices: [
          { num: 1, text: "On the first floor." },
          { num: 2, text: "On the second floor." },
          { num: 3, text: "On the third floor." }
        ],
        explainRu: "Кроссовки для себя — отдел обуви на третьем этаже."
      },
      {
        examNum: 4,
        prompt: "What sport does Ken do regularly?",
        key: 2,
        choices: [
          { num: 1, text: "Cycling." },
          { num: 2, text: "Basketball." },
          { num: 3, text: "Swimming." }
        ],
        explainRu: "Велосипед только чтобы доехать, а в команде он играет в баскетбол."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
