/**
 * OGE Listening MC · Unit 14 · Вариант 14 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-variant14-listening-mc",
    unitOrder: 14,
    title: "Unit 14 · Station and the weekend",
    examSection: "Tasks 1–4",
    headerTitle: "Entrance 1 · Ken · Cathy · Chris",
    audioSrc: "audio/u14/listening-14.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear passengers! To avoid crowds in the train station, a new streaming system has been adopted. If you want to board a local train, please use Entrance 1. For an international trip, proceed through Entrance 2. Entrance 3 is closed at the moment due to construction work, which is why all passengers with electronic tickets, regardless of their destination, are welcome to use Entrance 1. Thank you for understanding."
      },
      {
        label: "B",
        body:
          "Hi, Harry! It's Ken. You aren't answering your phone, so you are probably on your camping trip and the mobile connection is not stable. Anyway, we are having a great time! My cousins invited me to their countryside home and it's really awesome here. There's a lake nearby and a horse-riding base, and an eco-farm. In the evening, my uncle makes the tastiest barbecue I've ever tried. To me, it's cooler than lying on the beach in some overcrowded sea resort. I'll call again to tell you more."
      },
      {
        label: "C",
        body:
          "Brad: Cathy, here you are at last! I've been waiting for you for half an hour.\nCathy: I'm so sorry, Brad! I don't know how it happened but...\nBrad: You simply forgot about our meeting, didn't you?\nCathy: Yes. To tell the truth, I only remembered about it when my mum asked whether I was going to go to the cinema with you today or not.\nBrad: It's OK, I understand. I've had a very busy week too. We've had four tests in one week! I nearly forgot about our weekend plans too.\nCathy: Anyway, I believe we are late for the film, aren't we?\nBrad: I think so. You know, there's an entertainment park nearby. How about a rollercoaster ride?"
      },
      {
        label: "D",
        body:
          "Lucy: Hi, Chris! I've heard you are going camping in the mountains this weekend?\nChris: Not any more. The weather forecast says it'll be windy and cold there. A storm is possible.\nLucy: Yeah, it's not a great time to hike in the mountains. What would you say to watching a film with us? We're going to the new cinema on Saturday, at 4. A good film and popcorn are safe in any weather.\nChris: Sorry, Lucy, I've already promised a friend to go on a bus excursion this Saturday. She's interested in history and would like to learn more about our city. We've already reserved seats on the bus.\nLucy: Pity. Some other time then."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "The passengers with electronic tickets should go to entrance...",
        key: 1,
        choices: [
          { num: 1, text: "number 1." },
          { num: 2, text: "number 2." },
          { num: 3, text: "number 3." }
        ],
        explainRu: "С электронными билетами идут на вход номер 1."
      },
      {
        examNum: 2,
        prompt: "Ken is spending his weekend...",
        key: 3,
        choices: [
          { num: 1, text: "in a camping tent." },
          { num: 2, text: "at a seaside hotel." },
          { num: 3, text: "at his relatives' house." }
        ],
        explainRu: "Кен гостит у двоюродных родственников в деревне."
      },
      {
        examNum: 3,
        prompt: "Cathy is late because...",
        key: 1,
        choices: [
          { num: 1, text: "she forgot about the appointment." },
          { num: 2, text: "she had to help her mum." },
          { num: 3, text: "she was busy getting ready for a test." }
        ],
        explainRu: "Кэти просто забыла о встрече."
      },
      {
        examNum: 4,
        prompt: "At the weekend, Chris is going...",
        key: 2,
        choices: [
          { num: 1, text: "on a camping trip." },
          { num: 2, text: "on a bus excursion." },
          { num: 3, text: "to the cinema." }
        ],
        explainRu: "Крис уже обещал другу автобусную экскурсию."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
