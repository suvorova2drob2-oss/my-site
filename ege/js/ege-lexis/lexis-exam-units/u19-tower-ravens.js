/**
 * ЕГЭ Lexis Exam · Unit 19 · The Tower Ravens (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-tower-ravens",
    unitOrder: 19,
    title: "Unit 19 · The Tower Ravens",
    examSection: "§30–36",
    headerTitle: "The Tower Ravens",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "The ravens are the unique guardians of the Tower of London. They have patrolled the Tower [[30]] over 900 years. A well-known legend [[31]] that should the ravens ever leave, the White Tower would collapse and a great disaster would happen to England. Fortunately, these respected residents have been protected by a royal decree. They are kept at the Tower at the [[32]] of the British government.\n\nRavens live up to an average of 25 years, but have been known to live up to the age of 45. These magnificent birds respond only to the Ravenmaster, a yeoman warder who [[33]] care of their feeding and well-being.\n\nDuring World War II, the number of the Tower ravens decreased dramatically, it [[34]] its lowest point soon after the war finished. With the disturbances of the bombing only one raven was left to patrol the Tower. New birds were soon on their way, some were drawn from the wild, some — from animal shelters. Finally, the Tower had its full complement of birds. Thanks to the generosity of visitors the Tower has [[35]] money to start its own breeding programme.\n\nNow there is a complement of six birds plus reserves. They control four different territories within the Tower. In recent years, the Tower has proudly witnessed the birth of a new generation of ravens. The ravens are now a national icon for the British and [[36]] many tourists make a special effort to see them.",
    items: [
      {
        options: ["since", "for", "in", "until"],
        correctIndex: 1,
        skillRu: "Present Perfect + период: <em>for over 900 years</em>.",
        explainCorrect:
          "They have patrolled the Tower <strong>for</strong> over 900 years — «на протяжении более 900 лет» (<em>for</em> + длительность).",
        trapRu:
          "<em>Since</em> — точка начала (<em>since 1080</em>); <em>in / until over 900 years</em> — не с длительностью так.",
        explainIfChosen: {
          "0": "<em>Since over 900 years</em> — после <em>since</em> нужна дата/момент, не «900 лет».",
          "2": "<em>In over 900 years</em> — «за 900 лет» (будущее/итог) — не «уже 900 лет».",
          "3": "<em>Until over 900 years</em> — «до 900 лет» — nonsense."
        }
      },
      {
        options: ["talks", "tells", "speaks", "says"],
        correctIndex: 3,
        skillRu: "Легенда + <em>that‑clause</em>: <em>a legend says that …</em>.",
        explainCorrect:
          "A well-known legend <strong>says that</strong> should the ravens ever leave… — «легенда гласит, что…».",
        trapRu:
          "<em>Legend tells that</em> — реже без объекта; <em>talks / speaks that</em> — не так.",
        explainIfChosen: {
          "0": "<em>Legend talks that</em> — «легенда разговаривает, что» — не говорят.",
          "1": "<em>Legend tells that</em> — обычно <em>tells us that</em> или <em>tells of</em>.",
          "2": "<em>Legend speaks that</em> — «легенда говорит, что» — нестандартно с <em>that</em>."
        }
      },
      {
        options: ["expense", "account", "payment", "price"],
        correctIndex: 0,
        skillRu: "Идиома: <em>at the expense of someone</em> — «за счёт кого‑то».",
        explainCorrect:
          "Kept at the Tower at the <strong>expense of</strong> the British government — «за счёт британского правительства».",
        trapRu:
          "<em>At the account / payment / price of</em> — не устойчивые связки для «за счёт государства».",
        explainIfChosen: {
          "1": "<em>At the account of the government</em> — «на счёту правительства» — не «за их счёт».",
          "2": "<em>At the payment of</em> — «при оплате» — не то.",
          "3": "<em>At the price of</em> — «ценой (чего‑то)» — про жертву, не про финансирование."
        }
      },
      {
        options: ["gives", "helps", "takes", "holds"],
        correctIndex: 2,
        skillRu: "Фразовый глагол: <em>take care of</em> — «заботиться о».",
        explainCorrect:
          "A yeoman warder who <strong>takes care of</strong> their feeding — «заботится об их кормлении».",
        trapRu:
          "<em>Gives / helps / holds care of</em> — только <em>take care of</em> устойчиво.",
        explainIfChosen: {
          "0": "<em>Gives care of</em> — «даёт заботу о» — не коллокация.",
          "1": "<em>Helps care of</em> — «помогает заботу о» — нужно <em>helps take care of</em>.",
          "3": "<em>Holds care of</em> — «держит заботу о» — nonsense."
        }
      },
      {
        options: ["reached", "achieved", "arrived", "entered"],
        correctIndex: 0,
        skillRu: "Коллокация: <em>reach a low / lowest point</em>.",
        explainCorrect:
          "The number decreased — it <strong>reached</strong> its lowest point — «достигло минимума».",
        trapRu:
          "<em>Arrived at a point</em> — возможно, но <em>reach its lowest point</em> — стандарт; <em>achieved / entered</em> — слабее.",
        explainIfChosen: {
          "1": "<em>Achieved its lowest point</em> — «достигло минимума» — возможно, но <em>reached</em> типичнее для «точки».",
          "2": "<em>Arrived its lowest point</em> — нужно <em>arrived at</em>.",
          "3": "<em>Entered its lowest point</em> — «вошло в минимум» — не говорят."
        }
      },
      {
        options: ["earned", "kept", "taken", "raised"],
        correctIndex: 3,
        skillRu: "Коллокация: <em>raise money</em> — «собрать / привлечь деньги».",
        explainCorrect:
          "Thanks to visitors the Tower has <strong>raised</strong> money — «собрало деньги» (на breeding programme).",
        trapRu:
          "<em>Earned</em> — «заработало» (своим трудом); здесь пожертвования посетителей → <em>raised</em>.",
        explainIfChosen: {
          "0": "<em>Earned money</em> — «заработало» — скорее доход от бизнеса, не donations.",
          "1": "<em>Kept money</em> — «держало деньги» — не «собрало на программу».",
          "2": "<em>Taken money</em> — «взяло деньги» — не «собрало средства»."
        }
      },
      {
        options: ["nevertheless", "however", "therefore", "although"],
        correctIndex: 2,
        skillRu: "Связка-следствие: <em>… and therefore many tourists …</em>.",
        explainCorrect:
          "A national icon, and <strong>therefore</strong> many tourists make an effort to see them — «поэтому многие туристы…».",
        trapRu:
          "<em>Nevertheless / however</em> — контраст; <em>although</em> — уступка, нужна другая часть.",
        explainIfChosen: {
          "0": "<em>Nevertheless, many tourists</em> — «тем не менее туристы» — нет противоречия с «icon».",
          "1": "<em>However, many tourists</em> — «однако туристы» — тоже контраст без основания.",
          "3": "<em>Although many tourists</em> — после <em>although</em> нужна придаточная с противопоставлением."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
