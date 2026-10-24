/**
 * OGE Listening MC · Unit 19 · Вариант 19 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-variant19-listening-mc",
    unitOrder: 19,
    title: "Unit 19 · Park, gloves, scarf, summer camp",
    examSection: "Tasks 1–4",
    headerTitle: "Park rules · Kate · Jess · Jeff",
    audioSrc: "audio/u19/listening-19.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear visitors! Please, listen to some brief information on our park rules. The park is open to visitors from 6 a.m. till 11 p.m. If you rent a bike or a boat to sail around the lake, please make sure to return all the equipment before 9 p.m. Dogs are allowed in the park but the owners should walk them on a lead and clean up after them. The cafés on the territory of the park work till 10 p.m. We hope you'll appreciate our summer menu with a wide choice of fruit and vegetable dishes."
      },
      {
        label: "B",
        body:
          "Hi, Tony! It's Kate. It looks like I forgot my gloves somewhere in the café where we celebrated your friend's birthday yesterday. Could you drop in and ask the people there whether they've found a pair of brown knitted gloves? Yes, they were brown, with an image of an owl on the palms. They were a present from my mother and that's why I want to get them back at all costs. I would go there myself, of course, but I have to babysit my younger brother. I promised that to mum."
      },
      {
        label: "C",
        body:
          "Mark: Look, it's a beautiful vase. I think Kate will like it, don't you?\nJess: No, I don't. I think a birthday present should be more original and practical. A vase is not a very exciting present.\nMark: Fine. What about this lamp?\nJess: The same. It won't do. And it doesn't go with Kate's interior. It's not her style at all.\nMark: OK, I give up. You criticise all my ideas. Suggest something yourself. Go on, go on!\nJess: I believe this scarf is wonderful! And it's a very practical present. She will be wearing it in cold seasons!\nMark: As you say. Let it be a scarf. I'm not going to argue and you know better about presents for girls."
      },
      {
        label: "D",
        body:
          "Kate: Jeff, are you planning to take part in the French exchange project in the summer?\nJeff: No. The situation has changed. Now I want to do a volunteer job in Greece in a summer camp for kids.\nKate: Any details?\nJeff: Well, it's an international camp for children from all over Europe and the USA. Volunteers are supposed to arrange educational and sports activities for them. Of course, we'll be supervised by the teachers. Would you like to go too?\nKate: Yes, I could try it. Why not go to Greece?\nJeff: Just complete the application form on the website. I've been accepted, why not you?\nKate: OK. Give the address."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "The visitors can use the bike rent service till...",
        key: 1,
        choices: [
          { num: 1, text: "9 p.m." },
          { num: 2, text: "10 p.m." },
          { num: 3, text: "11 p.m." }
        ],
        explainRu: "Велосипед и лодку нужно вернуть до 9 вечера."
      },
      {
        examNum: 2,
        prompt: "Kate asks Tony to...",
        key: 2,
        choices: [
          { num: 1, text: "help her buy a present for her mother." },
          { num: 2, text: "look for her lost gloves." },
          { num: 3, text: "look after her younger brother." }
        ],
        explainRu: "Кейт просит спросить в кафе про потерянные перчатки."
      },
      {
        examNum: 3,
        prompt: "What did Jess and Mark decide to give Kate for her birthday?",
        key: 3,
        choices: [
          { num: 1, text: "A vase." },
          { num: 2, text: "A lamp." },
          { num: 3, text: "A scarf." }
        ],
        explainRu: "Останавливаются на шарфе."
      },
      {
        examNum: 4,
        prompt: "In the summer Jeff wants to go to...",
        key: 2,
        choices: [
          { num: 1, text: "France." },
          { num: 2, text: "Greece." },
          { num: 3, text: "the United States." }
        ],
        explainRu: "Джефф едет волонтёром в летний лагерь в Греции."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
