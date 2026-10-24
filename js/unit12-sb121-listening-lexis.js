/**
 * Unit 12 · SB 12.1 Listening — Restaurants · Cool phrases by speaker.
 * window.FCE_U12_SB121_LEXIS
 */
(function (W) {
  "use strict";

  var TRACK_AUDIO = "RfB2First_SB_Track%2012.1.mp3";

  var SPEAKERS = [
    {
      id: "sp1",
      letter: "1",
      label: "Speaker 1",
      phrases: [
        {
          en: "fairly inexpensive restaurant",
          ru: "довольно недорогой ресторан",
          context:
            "It was a fairly inexpensive restaurant on the edge of the city, but low prices are no excuse for poor hygiene."
        },
        {
          en: "no excuse for poor hygiene",
          ru: "низкие цены — не оправдание плохой гигиены",
          context:
            "It was a fairly inexpensive restaurant on the edge of the city, but low prices are no excuse for poor hygiene."
        },
        {
          en: "tourist restaurants charge tourist prices",
          ru: "туристические рестораны берут туристические цены",
          context:
            "We'd decided to get away from all the people and noise in the centre, where tourist restaurants charge tourist prices, and try something more local, more authentic."
        },
        {
          en: "try something more authentic",
          ru: "попробовать что-то более настоящее",
          context:
            "We'd decided to get away from all the people and noise in the centre, where tourist restaurants charge tourist prices, and try something more local, more authentic."
        },
        {
          en: "genuine home-cooked food",
          ru: "настоящая домашняя еда",
          context:
            "The reviews we'd read spoke about the genuine home-cooked food and the size of the portions, with only one or two negative comments about having to wait a little too long for the food to arrive."
        },
        {
          en: "sticky tables that hadn't been wiped",
          ru: "липкие столы, которые так и не вытерли",
          context:
            "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor."
        },
        {
          en: "the stained cutlery",
          ru: "приборы в пятнах",
          context:
            "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor."
        },
        {
          en: "filthy floor",
          ru: "очень грязный пол",
          context:
            "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor."
        }
      ]
    },
    {
      id: "sp2",
      letter: "2",
      label: "Speaker 2",
      phrases: [
        {
          en: "surprisingly tasty",
          ru: "неожиданно вкусно",
          context:
            "We weren't expecting very much from the food, but everything we ordered was surprisingly tasty."
        },
        {
          en: "massive amount of variety on the menu",
          ru: "огромный выбор блюд в меню",
          context:
            "There wasn't a massive amount of variety on the menu but, to be honest, I'd rather have just a few decent things to choose from than a huge number of dishes, some of which might not be particularly well cooked."
        },
        {
          en: "What spoilt it, though",
          ru: "но вот что всё испортило",
          context:
            "What spoilt it, though, was the large group of people on the table next to ours, all talking at the tops of their voices."
        },
        {
          en: "talking at the tops of their voices",
          ru: "говорили во весь голос",
          context:
            "What spoilt it, though, was the large group of people on the table next to ours, all talking at the tops of their voices."
        }
      ]
    },
    {
      id: "sp3",
      letter: "3",
      label: "Speaker 3",
      phrases: [
        {
          en: "the meat in my stew was chewy",
          ru: "мясо в моём рагу было жёстким",
          context:
            "I told the waiter the meat in my stew was chewy, and should have been left in the oven longer."
        },
        {
          en: "kick up a fuss",
          ru: "поднять шум, устроить скандал",
          context:
            "Her attitude is, if something's not right, then kick up a fuss, make a noise about it, otherwise nothing will get changed."
        },
        {
          en: "wouldn't charge for my dessert",
          ru: "не возьмёт деньги за десерт",
          context:
            "As it was, the waiter said he couldn't change it, but he wouldn't charge for my dessert."
        }
      ]
    },
    {
      id: "sp4",
      letter: "4",
      label: "Speaker 4",
      phrases: [
        {
          en: "we treated ourselves to dinner",
          ru: "мы позволили себе поужинать",
          context:
            "Recently, we treated ourselves to dinner in a five-star seafood restaurant."
        },
        {
          en: "you didn't get much on your plate",
          ru: "на тарелке было мало",
          context:
            "We'd heard several negative things about the place before we went: the food was overpriced, the waiters were too formal, you didn't get much on your plate …"
        },
        {
          en: "we're not big eaters",
          ru: "мы немного едим",
          context:
            "But we're not big eaters and we felt like spoiling ourselves, so we ignored the warnings and booked."
        },
        {
          en: "we felt like spoiling ourselves",
          ru: "захотелось себя побаловать",
          context:
            "But we're not big eaters and we felt like spoiling ourselves, so we ignored the warnings and booked."
        },
        {
          en: "the food was to die for",
          ru: "еда была невероятно вкусной",
          context:
            "Well, the food was to die for: the crab, the mussels, the seabass – absolutely delicious."
        },
        {
          en: "they weren't in any hurry",
          ru: "они совсем не торопились",
          context:
            "They certainly weren't in any hurry, and we'd run out of things to say to each other by the time the main course arrived."
        },
        {
          en: "we'd run out of things to say to each other",
          ru: "нам стало не о чем разговаривать",
          context:
            "They certainly weren't in any hurry, and we'd run out of things to say to each other by the time the main course arrived."
        }
      ]
    },
    {
      id: "sp5",
      letter: "5",
      label: "Speaker 5",
      phrases: [
        {
          en: "quite fussy eaters",
          ru: "довольно привередливы в еде",
          context:
            "My wife and I are both quite fussy eaters, so if we eat out, there have to be plenty of dishes to choose from."
        },
        {
          en: "the service was second to none",
          ru: "обслуживание было лучше некуда",
          context:
            "We had no complaints about the food we actually ordered, and the service was second to none."
        },
        {
          en: "come across as antisocial",
          ru: "показаться нелюдимыми",
          context:
            "We might have come across as antisocial, but we preferred to eat in some of the other restaurants in the area."
        }
      ]
    }
  ];

  function drawerSpeakers() {
    return SPEAKERS.map(function (sp) {
      return {
        id: sp.id,
        letter: sp.letter,
        label: sp.label,
        phrases: sp.phrases.map(function (p) {
          return { en: p.en, ru: p.ru, context: p.context };
        })
      };
    });
  }

  W.FCE_U12_SB121_LEXIS = {
    speakers: SPEAKERS,
    drawerSpeakers: drawerSpeakers,
    trackAudio: TRACK_AUDIO,
    id: "u12-sb121",
    label: "SB 12.1 · Restaurants"
  };
})(typeof window !== "undefined" ? window : globalThis);
