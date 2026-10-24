/**
 * OGE Listening MC · Unit 16 · Вариант 16 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-variant16-listening-mc",
    unitOrder: 16,
    title: "Unit 16 · Exhibition, timetable, laptop, fair",
    examSection: "Tasks 1–4",
    headerTitle: "Halls · Rob · Alice · Simon",
    audioSrc: "audio/u16/listening-16.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Hello, everyone! We are happy to see you at our exhibition of art and crafts. I'll explain how to navigate our exhibition area. In Hall 1, which is to the right of the main entrance, there are works devoted to sea voyages, marine animals and exploration of the ocean. Right opposite, there's Hall 2, where you'll see art works on space flights and far-away worlds. Hall 3 will be particularly interesting to people who love gardening and landscape design."
      },
      {
        label: "B",
        body:
          "Hi, Rob, it's Angela. You weren't at school today and I'm just calling to inform you about the change in our timetable. Tomorrow, instead of PE, we are going to have an additional lesson in Maths. I think it's because of the Maths competition next week, and Ms. Green wants us to get ready for it. Ms. Green came to us today and said that tomorrow she will bring us some textbooks with samples of the competition tasks and we will practice solving them. See you tomorrow."
      },
      {
        label: "C",
        body:
          "Alice: Tom, can I ask you a favour?\nTom: Have a try, my dear sister. But I want to remind you it's your turn, Alice, to take the dog for a walk this evening. I can't do it instead of you because I'm invited to John's birthday party and I'm determined to go.\nAlice: Don't worry! I'll walk the dog myself. I just want to borrow your laptop. Mine has got a virus. I can't use it but I have to make a presentation.\nTom: No problem. You can take it. I don't need it tonight anyway. What kind of presentation do you have to prepare?\nAlice: It's for my science lesson.\nTom: Do you need any help with the presentation?\nAlice: Oh, no! I'm full of ideas."
      },
      {
        label: "D",
        body:
          "Simon: Look there're lots of people. It's the first time we've ever had an event like this in our town.\nCathy: Yeah. Except for the food fair last autumn.\nSimon: I've heard some experts and IT engineers are here to make presentations. They are going to talk about new gadgets and advanced transport, medical, communication, and recycling technology.\nCathy: Recycling?\nSimon: Yes. You can't even imagine how much litter we produce — starting from ice-cream packaging and disposable cups, right through to old furniture.\nCathy: Where can we buy the entrance tickets?\nSimon: Let's see what's going on over there."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "People who are interested in space exploration should see...",
        key: 2,
        choices: [
          { num: 1, text: "Hall 1." },
          { num: 2, text: "Hall 2." },
          { num: 3, text: "Hall 3." }
        ],
        explainRu: "Космос показывают в зале 2, напротив входа."
      },
      {
        examNum: 2,
        prompt: "Tomorrow Rob is going to...",
        key: 3,
        choices: [
          { num: 1, text: "take part in a sports competition." },
          { num: 2, text: "look for a textbook in the library." },
          { num: 3, text: "have one more lesson in Maths." }
        ],
        explainRu: "Завтра вместо физкультуры ещё один урок математики."
      },
      {
        examNum: 3,
        prompt: "Alice asked Tom to...",
        key: 3,
        choices: [
          { num: 1, text: "walk their dog." },
          { num: 2, text: "make a presentation." },
          { num: 3, text: "lend her his laptop." }
        ],
        explainRu: "Элис просит ноутбук, собаку она выгуляет сама."
      },
      {
        examNum: 4,
        prompt: "Where are Simon and Cathy talking?",
        key: 1,
        choices: [
          { num: 1, text: "At a technical exhibition." },
          { num: 2, text: "At a street food fair." },
          { num: 3, text: "At a recycling centre." }
        ],
        explainRu: "Здесь презентации про гаджеты и новые технологии."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
