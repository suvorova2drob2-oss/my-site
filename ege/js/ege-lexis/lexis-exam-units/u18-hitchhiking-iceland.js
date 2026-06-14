/**
 * ЕГЭ Lexis Exam · Unit 18 · Hitchhiking in Iceland (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-hitchhiking-iceland",
    unitOrder: 18,
    title: "Unit 18 · Hitchhiking in Iceland",
    examSection: "§30–36",
    headerTitle: "Hitchhiking in Iceland",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "The wind was rushing in off the ocean and the purple flowers swayed. Small white clouds floated across the bright blue sky, which made the day seem warmer than it was. I shivered, breathing in the clean air and the scent of the ocean as I wandered the path over to the lighthouse. My phone rang. \"Hello?\" \"Hi, sweetie, I was just calling to see how you were doing?\" my mom [[30]], pretending not to be worried. \"Where are you?\" I hesitated. \"Um, just on the side of the [[31]].\" She laughed nervously. \"I hope you're not hitchhiking!\"\n\nThat was exactly what I was doing — hitchhiking in Iceland. I had two weeks off, nine days of which were set aside to [[32]] my way around the Ring Road, starting and ending in Reykjavik.\n\nOver five days I rode in twelve different vehicles, with twenty different people to thank for not leaving me on the side of the road in the cold and wet. The longest I had to wait for a ride was maybe an hour and a half, and even then I had the company of a hitchhiker trying to [[33]] a ride in the opposite direction. People picked me [[34]] and gave me snapshots of their lives, why they were there, what they had loved most.\n\nWhen I finally [[35]] at Reykjavik, I called my mom again to let her know that I had made it safely. \"I'm so glad,\" she said, so clearly [[36]]. \"I never want you to do that again.\" My mother had hoped I wouldn't hitchhike, but I never wished I hadn't. Iceland is beautiful, with its lava fields and hot springs, but there is more to it than that. There are the kindness and openness of the local people and those who wander there.",
    items: [
      {
        options: ["said", "spoke", "talked", "told"],
        correctIndex: 0,
        skillRu: "Глагол речи + прямая речь: <em>my mom said, pretending …</em>.",
        explainCorrect:
          "My mom <strong>said</strong>, pretending not to be worried — «сказала» (вводит прямую речь после запятой).",
        trapRu:
          "<em>Spoke / talked</em> — нужен <em>to someone</em>; <em>told</em> — нужен объект (<em>told me</em>).",
        explainIfChosen: {
          "1": "<em>Spoke, pretending</em> — <em>spoke to me</em>, не просто <em>spoke, pretending</em>.",
          "2": "<em>Talked, pretending</em> — <em>talked to me</em>, не вводит реплику так.",
          "3": "<em>Told, pretending</em> — <em>told me / told her</em> — нужен объект."
        }
      },
      {
        options: ["way", "road", "path", "track"],
        correctIndex: 1,
        skillRu: "Устойчивое: <em>on the side of the road</em> — «на обочине».",
        explainCorrect:
          "On the side of the <strong>road</strong> — «на обочине дороги» (типично для автостопа).",
        trapRu:
          "<em>Side of the way / path / track</em> — реже; для попутки стандартно <em>side of the road</em>.",
        explainIfChosen: {
          "0": "<em>Side of the way</em> — «на стороне пути» — нестандартно для hitchhiking.",
          "2": "<em>Side of the path</em> — «тропинка» — не про автодорогу Ring Road.",
          "3": "<em>Side of the track</em> — «у рельсов / не по теме» — не то."
        }
      },
      {
        options: ["search", "ask", "lose", "make"],
        correctIndex: 3,
        skillRu: "Фразовый глагол: <em>make one's way</em> — «продвигаться / добираться».",
        explainCorrect:
          "Set aside to <strong>make</strong> my way around the Ring Road — «добираться по Ring Road» (<em>make one's way</em>).",
        trapRu:
          "<em>Search / ask / lose my way</em> — другие значения; здесь «пройти маршрут» → <em>make my way</em>.",
        explainIfChosen: {
          "0": "<em>Search my way</em> — «искать путь» — не «двигаться по маршруту».",
          "1": "<em>Ask my way</em> — «спрашивать дорогу» — не то.",
          "2": "<em>Lose my way</em> — «заблудиться» — противоположный смысл."
        }
      },
      {
        options: ["give", "hold", "catch", "book"],
        correctIndex: 2,
        skillRu: "Коллокация: <em>catch a ride</em> — «поймать попутку».",
        explainCorrect:
          "A hitchhiker trying to <strong>catch a ride</strong> — «поймать попутку» (в другую сторону).",
        trapRu:
          "<em>Give a ride</em> — «подвезти» (водитель); автостопщик <em>catches</em> ride, не <em>gives</em>.",
        explainIfChosen: {
          "0": "<em>Give a ride</em> — «дать попутку» — это делает водитель, не hitchhiker.",
          "1": "<em>Hold a ride</em> — «удерживать поездку» — nonsense.",
          "3": "<em>Book a ride</em> — «забронировать» — не про автостоп."
        }
      },
      {
        options: ["on", "up", "at", "out"],
        correctIndex: 1,
        skillRu: "Фразовый глагол: <em>pick someone up</em> — «подобрать / подвезти».",
        explainCorrect:
          "People picked me <strong>up</strong> — «подбирали меня» (<em>pick up</em> = подвезти).",
        trapRu:
          "<em>Pick me on / at / out</em> — не «подвезти»; только <em>pick up</em>.",
        explainIfChosen: {
          "0": "<em>Picked me on</em> — не фразовый глагол.",
          "2": "<em>Picked me at</em> — «выбрали меня в» — не «подвезли».",
          "3": "<em>Picked me out</em> — «выбрали из» — другое значение."
        }
      },
      {
        options: ["reached", "achieved", "arrived", "entered"],
        correctIndex: 2,
        skillRu: "Предлог <em>at</em>: <em>arrive at Reykjavik</em>.",
        explainCorrect:
          "When I finally <strong>arrived at</strong> Reykjavik — «когда наконец прибыла в Reykjavik».",
        trapRu:
          "<em>Reached</em> без <em>at</em> (<em>reached Reykjavik</em>); после <em>at</em> — <em>arrived</em>.",
        explainIfChosen: {
          "0": "<em>Reached at Reykjavik</em> — <em>reach</em> не берёт <em>at</em> перед названием.",
          "1": "<em>Achieved at Reykjavik</em> — «достигла в Reykjavik» — не «приехала».",
          "3": "<em>Entered at Reykjavik</em> — «вошла в» — не про прибытие в город."
        }
      },
      {
        options: ["amazed", "annoyed", "frustrated", "relieved"],
        correctIndex: 3,
        skillRu: "Прилагательное после «I'm so glad»: <em>clearly relieved</em>.",
        explainCorrect:
          "She said, so clearly <strong>relieved</strong> — «явно с облегчением» (дочь в безопасности).",
        trapRu:
          "<em>Amazed / annoyed / frustrated</em> — не «облегчение» после «I'm so glad you're safe».",
        explainIfChosen: {
          "0": "<em>Clearly amazed</em> — «поражённая» — не про облегчение.",
          "1": "<em>Clearly annoyed</em> — «раздражённая» — противоречит «I'm so glad».",
          "2": "<em>Clearly frustrated</em> — «расстроенная / в frustration» — не «с облегчением»."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
