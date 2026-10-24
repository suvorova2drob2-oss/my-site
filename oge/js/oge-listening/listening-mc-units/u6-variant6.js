/**
 * OGE Listening MC · Unit 6 · Вариант 6 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-variant6-listening-mc",
    unitOrder: 6,
    title: "Unit 6 · Picnic and Italy",
    examSection: "Tasks 1–4",
    headerTitle: "Picnic · Nancy · Amy · Emma",
    audioSrc: "audio/u6/listening-6.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Hi, everyone! I'd like to remind you about our picnic on Saturday. We are getting together on the bank of the lake. All the food, water and everything necessary for the games will be delivered by the organisers — please, don't worry about that. All you need to have with you is some anti-mosquito spray and a coat in case the weather changes. Do not forget the spray as, due to the wet and warm weather we've been having, there may be lots of mosquitoes there."
      },
      {
        label: "B",
        body:
          "Hi, Mum! I'm calling to ask you a favour. My friend, Nancy, is coming to get her computer back. She only bought it yesterday and I helped her to install all the necessary apps. And now she needs it urgently. Could you give her the computer, please? I'm afraid I won't be home in time for her visit. It must be on the shelf above my writing desk. Yes, I know there's a mess there, and it's impossible to find anything in my room, but please! I'll tidy up the room when I'm back. I promise! See you!"
      },
      {
        label: "C",
        body:
          "Tom: Hi Amy! You look so worried. Is everything alright?\nAmy: Oh, Tom, hi! Yes, everything's better than alright! We are going to the mountains tomorrow.\nTom: To the mountains? For a skiing holiday?\nAmy: Yes! Are you jealous?\nTom: It looks like I have a good reason to feel envious. I've never been to a ski resort.\nAmy: Neither have I.\nTom: So, you are leaving tomorrow... By plane or by train?\nAmy: In fact, my mum and I prefer trains. But it would take too long and the holidays are short. To save time, we are travelling by air.\nTom: Right. We usually enjoy travelling by car but it's definitely not an option for you.\nAmy: No, it's not."
      },
      {
        label: "D",
        body:
          "Emma: Hi, Paul! I never would have expected to come across an old classmate like this... in the centre of Rome.\nPaul: Emma! Is that you? I haven't seen you since our farewell school party. What are you doing here? Working? Learning? Or are you just a tourist?\nEmma: Actually, I wanted to find a job here. A friend of mine told me they've got a vacancy for a columnist at their journal. But it didn't work out.\nPaul: What? Why?\nEmma: I was too slow. They've already given the job to another person.\nPaul: Pity.\nEmma: Never mind. And you? What are you doing here?\nPaul: Teaching English. I work with young learners. They are amazing.\nEmma: Really?"
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "The people who take part in the picnic should bring some...",
        key: 2,
        choices: [
          { num: 1, text: "food and drinks." },
          { num: 2, text: "anti-mosquito lotion." },
          { num: 3, text: "board games." }
        ],
        explainRu: "С собой нужно средство от комаров."
      },
      {
        examNum: 2,
        prompt: "The girl asks her mother...",
        key: 3,
        choices: [
          { num: 1, text: "to buy her a new computer." },
          { num: 2, text: "to help her tidy up the room." },
          { num: 3, text: "to give something to her friend." }
        ],
        explainRu: "Просит отдать компьютер подруге Нэнси."
      },
      {
        examNum: 3,
        prompt: "What means of transport is Amy going to use to get to the destination?",
        key: 1,
        choices: [
          { num: 1, text: "Plane." },
          { num: 2, text: "Train." },
          { num: 3, text: "Car." }
        ],
        explainRu: "Чтобы сэкономить время, летят самолётом."
      },
      {
        examNum: 4,
        prompt: "Emma has come to Italy...",
        key: 3,
        choices: [
          { num: 1, text: "to learn the language." },
          { num: 2, text: "to visit some friends." },
          { num: 3, text: "to look for a job." }
        ],
        explainRu: "Эмма хотела найти в Риме работу."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
