/**
 * ЕГЭ Listening TFNS · Unit 6 · Warsaw trip (Peter & Mary).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-warsaw-trip",
    unitOrder: 6,
    title: "Unit 6 · Warsaw trip",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Peter & Mary · holidays in Warsaw",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/6/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%206%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>разговор двух друзей</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> — про <em>Peter</em> и <em>his</em> holidays: в диалоге только каникулы <strong>Mary</strong> → <strong>?</strong></li>" +
      "<li><strong>B</strong> — прямой поезд? «through <strong>Berlin</strong>» → <strong>−</strong></li>" +
      "<li><strong>C</strong> — «<em>spotless</em>» → чисто → <strong>+</strong></li>" +
      "<li><strong>G</strong> — одно блюдо «на всех»? делили на <strong>троих</strong>, Astrid vegetarian → <strong>−</strong></li>" +
      "<li><strong>F</strong> — много времени в ресторанах? ели Schnitzel, но «restaurants and cafés» не сказано → <strong>?</strong></li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Peter enjoyed his holidays." },
      { letter: "B", text: "Mary took a direct train to Warsaw." },
      { letter: "C", text: "The hotel room was clean." },
      { letter: "D", text: "Mary did not pay a lot for the hotel." },
      { letter: "E", text: "The weather was supposed to be good." },
      { letter: "F", text: "Mary spent a lot of time in restaurants and cafés." },
      { letter: "G", text: "Mary and her friends had one dish for them all." }
    ],
    key: {
      A: "ns",
      B: "f",
      C: "t",
      D: "t",
      E: "t",
      F: "ns",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Peter", text: "Hi, Mary! How were your holidays?" },
          {
            speaker: "Mary",
            text: "Hello, Peter! Hmm, let's say they could have been better."
          },
          { speaker: "Peter", text: "Really? How come?" },
          {
            speaker: "Mary",
            text:
              "Everything started when I was late for my train to Warsaw. I spent hours in a traffic jam, and then a few more standing in queues at the check-in barriers at the station."
          },
          { speaker: "Peter", text: "Wait, were you carrying anything illegal?" }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "I sure wasn't. The terminal was so jammed that I could barely breathe, and it was located at the far end of the platform... Anyway, if you want to know if I made it — I didn't. The train departed and I was left standing at the platform. I had to pay twice as much to get a top bunk on the next one going to Warsaw through Berlin."
          },
          { speaker: "Peter", text: "I hope that was the end of your troubles." }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "Are you kidding? That was just the beginning. I was going to meet my friends there, and they were responsible for our sleeping arrangements. The luxurious hotel they booked was not at all as grand as we expected. Our beds were not comfy, the paint was peeling off the ceiling now and then, and the bathroom was somewhat claustrophobic. Yet, shabby as it was, everything was spotless."
          },
          {
            speaker: "Peter",
            text:
              "I suppose, you didn't spend a fortune on it, so you could have just grinned and borne it. I mean it's Warsaw after all! Did you at least go sightseeing?"
          },
          {
            speaker: "Mary",
            text:
              "We did, and that was the best part of the trip. We visited all the most touristic places: the historic Old Town, the Royal Castle and many others."
          },
          { speaker: "Peter", text: "That sounds fun! Did you spend a lot of time outdoors?" }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "We didn't. The forecast wasn't that grim and we enjoyed the first couple of days, but then the weather deteriorated and stayed that way for the rest of the trip."
          },
          { speaker: "Peter", text: "Oh, come on!" },
          {
            speaker: "Mary",
            text: "Rain was pouring down every time we were heading somewhere."
          },
          {
            speaker: "Peter",
            text:
              "Such a pity. But it means that you spent a great deal of time indoors. Have you tried out some local delicacies?"
          }
        ]
      },
      {
        turns: [
          { speaker: "Mary", text: "Have you heard of Schnitzel?" },
          {
            speaker: "Peter",
            text:
              "Is it a kind of a pork chop, coated in egg and breadcrumbs, and fried in hot oil with onion?"
          },
          {
            speaker: "Mary",
            text:
              "It is. And it is often served with grated beetroot and mashed potatoes. It was undeniably delicious. And the portions were huge! We used to take one and share it between the three of us!"
          },
          { speaker: "Peter", text: "I thought there were four of you." },
          {
            speaker: "Mary",
            text: "There were. But Astrid is vegetarian, so no pork for her."
          },
          { speaker: "Peter", text: "I see. Well, at least you liked something!" }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "ns",
        paragraphIndex: 0,
        keyLineRu: "Not stated — Peter спрашивает про каникулы Mary, не про свои.",
        nsExplainRu:
          "Peter: <em>How were your holidays?</em> — речь о поездке Mary. Про то, как Peter провёл <em>свои</em> каникулы, в тексте ничего нет.",
        evidencePromptRu: "Прочитай начало — про каникулы Peter не сказано.",
        segments: []
      },
      {
        letter: "B",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "False — поезд в Warsaw через Berlin, не прямой.",
        explainRu:
          "Mary ехала на следующем поезде <em>going to Warsaw through Berlin</em> — это не direct train.",
        evidencePromptRu: "Найди, как Mary добралась до Warsaw.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "the next one going to Warsaw through Berlin"
          }
        ]
      },
      {
        letter: "C",
        key: "t",
        paragraphIndex: 2,
        keyLineRu: "True — everything was spotless.",
        explainRu:
          "Номер shabby, но <em>everything was spotless</em> → hotel room was clean.",
        evidencePromptRu: "Найди фразу про чистоту в отеле.",
        segments: [
          { kind: "hit", sol: "e", text: "everything was spotless" }
        ]
      },
      {
        letter: "D",
        key: "t",
        paragraphIndex: 2,
        keyLineRu: "True — didn't spend a fortune on it.",
        explainRu:
          "Peter: <em>you didn't spend a fortune on it</em> — Mary не возражает; друзья бронировали, не роскошь по цене.",
        evidencePromptRu: "Найди реплику Peter про деньги за отель.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "you didn't spend a fortune on it"
          }
        ]
      },
      {
        letter: "E",
        key: "t",
        paragraphIndex: 3,
        keyLineRu: "True — forecast wasn't that grim.",
        explainRu:
          "Прогноз не был мрачным → погоду <em>ожидали</em> нормальной; первые дни понравились.",
        evidencePromptRu: "Найди фразу Mary про forecast.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "The forecast wasn't that grim and we enjoyed the first couple of days"
          }
        ]
      },
      {
        letter: "F",
        key: "ns",
        paragraphIndex: 3,
        keyLineRu: "Not stated — indoors и delicacies, но не «a lot of time in restaurants».",
        nsExplainRu:
          "Peter: <em>great deal of time indoors</em> и <em>tried local delicacies</em> — но про много времени именно в <em>restaurants and cafés</em> не сказано.",
        evidencePromptRu: "Прочитай блок про дождь и еду — отмечать нечего про cafés.",
        segments: []
      },
      {
        letter: "G",
        key: "f",
        paragraphIndex: 4,
        keyLineRu: "False — one dish shared between three, not all four.",
        explainRu:
          "«Share it between the <em>three of us</em>» — Astrid vegetarian, четверо друзей, но одно блюдо на троих, не «for them all».",
        evidencePromptRu: "Найди, как делили Schnitzel.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "take one and share it between the three of us"
          },
          {
            kind: "hit",
            sol: "e",
            text: "Astrid is vegetarian, so no pork for her"
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Peter",
        label: "Peter",
        fullText:
          "Hi, Mary! How were your holidays? Really? How come? Wait, were you carrying anything illegal? I hope that was the end of your troubles. I suppose, you didn't spend a fortune on it, so you could have just grinned and borne it. I mean it's Warsaw after all! Did you at least go sightseeing? That sounds fun! Did you spend a lot of time outdoors? Oh, come on! Such a pity. But it means that you spent a great deal of time indoors. Have you tried out some local delicacies? Is it a kind of a pork chop, coated in egg and breadcrumbs, and fried in hot oil with onion? I thought there were four of you. I see. Well, at least you liked something!",
        phrases: [
          { en: "How were your holidays?", ru: "как прошли каникулы?", tip: "A · NS · про Mary" },
          { en: "were you carrying anything illegal", ru: "ты везла что-то незаконное?" },
          { en: "I hope that was the end of your troubles", ru: "надеюсь, на этом неприятности кончились" },
          {
            en: "you didn't spend a fortune on it",
            ru: "ты не потратила на это целое состояние",
            tip: "D · True"
          },
          { en: "grinned and borne it", ru: "стерпела бы с улыбкой (grin and bear it)" },
          { en: "Did you at least go sightseeing?", ru: "ты хотя бы осматривала достопримечательности?" },
          { en: "Did you spend a lot of time outdoors?", ru: "много времени проводила на улице?" },
          { en: "Oh, come on!", ru: "да ладно!" },
          { en: "Such a pity", ru: "как жаль" },
          {
            en: "spent a great deal of time indoors",
            ru: "провела много времени в помещении",
            tip: "F · NS · not restaurants"
          },
          {
            en: "Have you tried out some local delicacies?",
            ru: "пробовала местные деликатесы?",
            tip: "F · NS"
          },
          { en: "pork chop, coated in egg and breadcrumbs", ru: "свиная отбивная в яичной панировке с сухарями" },
          { en: "fried in hot oil with onion", ru: "жарят в масле с луком" },
          { en: "I thought there were four of you", ru: "я думал, вас четверо", tip: "G · False" },
          { en: "at least you liked something", ru: "хоть что-то тебе понравилось" }
        ],
        chunks: [
          { text: "Hi, Mary! How were your holidays? Really? How come?", showText: true },
          { text: "Wait, were you carrying anything illegal?", showText: true },
          { text: "I hope that was the end of your troubles.", showText: true },
          {
            text:
              "I suppose, you didn't spend a fortune on it … Did you at least go sightseeing?",
            showText: true
          },
          {
            text: "That sounds fun! Did you spend a lot of time outdoors? Oh, come on!",
            showText: true
          },
          {
            text:
              "Such a pity. But it means … Have you tried out some local delicacies?",
            showText: true
          },
          {
            text:
              "Is it a kind of a pork chop … I see. Well, at least you liked something!",
            showText: false
          }
        ]
      },
      {
        id: "Mary",
        label: "Mary",
        fullText:
          "Hello, Peter! Hmm, let's say they could have been better. Everything started when I was late for my train to Warsaw. I spent hours in a traffic jam, and then a few more standing in queues at the check-in barriers at the station. I sure wasn't. The terminal was so jammed that I could barely breathe, and it was located at the far end of the platform... Anyway, if you want to know if I made it — I didn't. The train departed and I was left standing at the platform. I had to pay twice as much to get a top bunk on the next one going to Warsaw through Berlin. Are you kidding? That was just the beginning. I was going to meet my friends there, and they were responsible for our sleeping arrangements. The luxurious hotel they booked was not at all as grand as we expected. Our beds were not comfy, the paint was peeling off the ceiling now and then, and the bathroom was somewhat claustrophobic. Yet, shabby as it was, everything was spotless. We did, and that was the best part of the trip. We visited all the most touristic places: the historic Old Town, the Royal Castle and many others. We didn't. The forecast wasn't that grim and we enjoyed the first couple of days, but then the weather deteriorated and stayed that way for the rest of the trip. Rain was pouring down every time we were heading somewhere. Have you heard of Schnitzel? It is. And it is often served with grated beetroot and mashed potatoes. It was undeniably delicious. And the portions were huge! We used to take one and share it between the three of us! There were. But Astrid is vegetarian, so no pork for her.",
        phrases: [
          { en: "they could have been better", ru: "могли бы быть и лучше" },
          { en: "late for my train to Warsaw", ru: "опоздала на поезд в Варшаву" },
          { en: "spent hours in a traffic jam", ru: "провела часы в пробке" },
          { en: "standing in queues at the check-in barriers", ru: "стояла в очередях у турникетов" },
          { en: "terminal was so jammed", ru: "терминал был так переполнен" },
          { en: "could barely breathe", ru: "едва могла дышать" },
          { en: "far end of the platform", ru: "дальний конец платформы" },
          { en: "left standing at the platform", ru: "осталась стоять на платформе" },
          {
            en: "pay twice as much to get a top bunk",
            ru: "заплатить вдвое больше за верхнюю полку",
            tip: "B · False · through Berlin"
          },
          {
            en: "going to Warsaw through Berlin",
            ru: "в Варшаву через Берлин",
            tip: "B · False · not direct"
          },
          { en: "responsible for our sleeping arrangements", ru: "отвечали за жильё" },
          { en: "luxurious hotel they booked", ru: "роскошный отель, который они забронировали" },
          { en: "not at all as grand as we expected", ru: "совсем не такой, как мы ожидали" },
          { en: "paint was peeling off the ceiling", ru: "краска осыпалась с потолка" },
          { en: "somewhat claustrophobic", ru: "вызывал клаустрофобию (тесный)" },
          {
            en: "everything was spotless",
            ru: "всё было безупречно чистым",
            tip: "C · True"
          },
          { en: "the best part of the trip", ru: "лучшая часть поездки" },
          { en: "historic Old Town", ru: "исторический Старый город" },
          { en: "Royal Castle", ru: "Королевский замок" },
          {
            en: "The forecast wasn't that grim",
            ru: "прогноз был не таким уж мрачным",
            tip: "E · True"
          },
          { en: "the weather deteriorated", ru: "погода испортилась" },
          { en: "Rain was pouring down", ru: "лил проливной дождь" },
          { en: "heading somewhere", ru: "куда-то направлялись" },
          { en: "grated beetroot and mashed potatoes", ru: "тёртая свёкла и картофельное пюре" },
          { en: "undeniably delicious", ru: "несомненно вкусно" },
          { en: "portions were huge", ru: "порции были огромными" },
          {
            en: "take one and share it between the three of us",
            ru: "брали одно блюдо и делили на троих",
            tip: "G · False"
          },
          {
            en: "Astrid is vegetarian, so no pork for her",
            ru: "Astrid вегетарианка — ей свинину нельзя",
            tip: "G · False"
          }
        ],
        chunks: [
          {
            text:
              "Hello, Peter! … at the check-in barriers at the station.",
            showText: true
          },
          {
            text:
              "I sure wasn't. … going to Warsaw through Berlin.",
            showText: true
          },
          {
            text:
              "Are you kidding? … everything was spotless.",
            showText: true
          },
          {
            text:
              "We did, and that was the best part … Royal Castle and many others.",
            showText: true
          },
          {
            text:
              "We didn't. The forecast wasn't that grim … heading somewhere.",
            showText: true
          },
          {
            text:
              "Have you heard of Schnitzel? … so no pork for her.",
            showText: false
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
