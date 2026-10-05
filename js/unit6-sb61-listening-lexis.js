/**
 * Unit 6 · SB 6.1 Listening — Relationship problems · phrases by speaker.
 * window.FCE_U6_SB61_LEXIS
 */
(function (W) {
  "use strict";

  var TRACK_AUDIO =
    "https://storage.yandexcloud.net/cpeaudio/fce/RfB2First_SB_Track%206.1.mp3";

  var SPEAKERS = [
    {
      id: "sp1",
      letter: "1",
      label: "Speaker 1",
      phrases: [
        {
          en: "it completely wore us out",
          ru: "\u044d\u0442\u043e \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0437\u043c\u043e\u0442\u0430\u043b\u043e / \u0443\u0442\u043e\u043c\u0438\u043b\u043e \u043d\u0430\u0441",
          context:
            "We only had to look after him for four hours each day, but it completely wore us out."
        },
        {
          en: "tell us off for letting him watch too much television",
          ru: "\u0440\u0443\u0433\u0430\u043b\u0430 / \u043e\u0442\u0447\u0438\u0442\u044b\u0432\u0430\u043b\u0430 \u043d\u0430\u0441 \u0437\u0430 \u0442\u043e, \u0447\u0442\u043e \u043c\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u043b\u0438 \u0435\u043c\u0443 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440",
          context:
            "His mother would tell us off for letting him watch too much television \u2013 she said Paul needed to work his energy off in the park or on long walks."
        },
        {
          en: "work his energy off in the park",
          ru: "\u0432\u044b\u043f\u043b\u0435\u0441\u043d\u0443\u0442\u044c / \u0432\u044b\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u044d\u043d\u0435\u0440\u0433\u0438\u044e \u0432 \u043f\u0430\u0440\u043a\u0435",
          context:
            "His mother would tell us off for letting him watch too much television \u2013 she said Paul needed to work his energy off in the park or on long walks."
        },
        {
          en: "Easy for her to say, but we weren\u2019t getting any younger",
          ru: "\u0435\u0439 \u043b\u0435\u0433\u043a\u043e \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c, \u043d\u043e \u043c\u044b-\u0442\u043e \u043d\u0435 \u043c\u043e\u043b\u043e\u0434\u0435\u043b\u0438",
          context:
            "Easy for her to say, but we weren\u2019t getting any younger and watching television was a useful survival strategy."
        },
        {
          en: "arguing with Lynda on more than one occasion about this",
          ru: "\u0441\u043f\u043e\u0440\u0438\u043b \u0441 \u041b\u0438\u043d\u0434\u043e\u0439 \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0432\u043e\u0434\u0443 \u043d\u0435\u043e\u0434\u043d\u043e\u043a\u0440\u0430\u0442\u043d\u043e / \u043d\u0435 \u0440\u0430\u0437",
          context: "I remember arguing with Lynda on more than one occasion about this."
        }
      ]
    },
    {
      id: "sp2",
      letter: "2",
      label: "Speaker 2",
      phrases: [
        {
          en: "We got on fine at the beginning",
          ru: "\u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u0445\u043e\u0440\u043e\u0448\u043e \u043b\u0430\u0434\u0438\u043b\u0438",
          context:
            "We got on fine at the beginning, probably because we hardly ever saw each other \u2013 he had an evening job in a bar and I worked during the day in a supermarket."
        },
        {
          en: "his way and his way alone",
          ru: "\u0432\u0441\u0451 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e-\u0435\u0433\u043e \u0438 \u043d\u0438\u043a\u0430\u043a \u0438\u043d\u0430\u0447\u0435",
          context: "Things had to be done his way and his way alone."
        },
        {
          en: "obsessive about tidiness",
          ru: "\u0431\u044b\u043b \u043f\u043e\u043c\u0435\u0448\u0430\u043d \u043d\u0430 \u0447\u0438\u0441\u0442\u043e\u0442\u0435 \u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u0435",
          context: "He was obsessive about tidiness and he couldn\u2019t bear it if I left anything lying on the floor."
        },
        {
          en: "couldn\u2019t bear it if I left anything lying on the floor",
          ru: "\u0442\u0435\u0440\u043f\u0435\u0442\u044c \u043d\u0435 \u043c\u043e\u0433 / \u043d\u0435 \u043c\u043e\u0433 \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u044c, \u0435\u0441\u043b\u0438 \u044f \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u043b \u0447\u0442\u043e-\u0442\u043e \u043b\u0435\u0436\u0430\u0442\u044c \u043d\u0430 \u043f\u043e\u043b\u0443",
          context: "He was obsessive about tidiness and he couldn\u2019t bear it if I left anything lying on the floor."
        },
        {
          en: "I had to move out in the end. I couldn\u2019t stand it.",
          ru: "\u0432 \u0438\u0442\u043e\u0433\u0435 \u043c\u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0441\u044a\u0435\u0445\u0430\u0442\u044c. \u042f \u043d\u0435 \u043c\u043e\u0433 \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u0442\u0435\u0440\u043f\u0435\u0442\u044c.",
          context: "I had to move out in the end. I couldn\u2019t stand it."
        }
      ]
    },
    {
      id: "sp3",
      letter: "3",
      label: "Speaker 3",
      phrases: [
        {
          en: "looked up to her and admired her self-belief",
          ru: "\u0443\u0432\u0430\u0436\u0430\u043b \u0435\u0451 / \u0431\u0440\u0430\u043b \u0441 \u043d\u0435\u0451 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438 \u0432\u043e\u0441\u0445\u0438\u0449\u0430\u043b\u0441\u044f \u0435\u0451 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e \u0432 \u0441\u0435\u0431\u0435",
          context:
            "I looked up to her and admired her self-belief and quiet determination."
        },
        {
          en: "It came as no surprise when she was promoted to senior manager",
          ru: "\u043d\u0435 \u0441\u0442\u0430\u043b\u043e \u0441\u044e\u0440\u043f\u0440\u0438\u0437\u0430, \u043a\u043e\u0433\u0434\u0430 \u0435\u0451 \u043f\u043e\u0432\u044b\u0441\u0438\u043b\u0438 \u0434\u043e \u0441\u0442\u0430\u0440\u0448\u0435\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430",
          context: "It came as no surprise when she was promoted to senior manager and I wasn\u2019t."
        },
        {
          en: "disappointed, but I got over it quickly enough",
          ru: "\u0431\u044b\u043b \u0440\u0430\u0437\u043e\u0447\u0430\u0440\u043e\u0432\u0430\u043d, \u043d\u043e \u043f\u0435\u0440\u0435\u0436\u0438\u043b \u044d\u0442\u043e / \u0441\u043c\u0438\u0440\u0438\u043b\u0441\u044f \u0441 \u044d\u0442\u0438\u043c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e",
          context: "Of course I was disappointed, but I got over it quickly enough."
        },
        {
          en: "To her credit, she realised she wasn\u2019t suited to the job",
          ru: "\u043a \u0435\u0451 \u0447\u0435\u0441\u0442\u0438 / \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0434\u0430\u0442\u044c \u0435\u0439 \u0434\u043e\u043b\u0436\u043d\u043e\u0435, \u043e\u043d\u0430 \u043f\u043e\u043d\u044f\u043b\u0430, \u0447\u0442\u043e \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b",
          context:
            "To her credit, she realised she wasn\u2019t suited to the job and she asked for a transfer."
        }
      ]
    },
    {
      id: "sp4",
      letter: "4",
      label: "Speaker 4",
      phrases: [
        {
          en: "always used to get on very well",
          ru: "\u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0440\u043e\u0448\u043e \u043b\u0430\u0434\u0438\u043b\u0438",
          context:
            "My brother, Phil, and I always used to get on very well, despite having very different ideas and opinions about things."
        },
        {
          en: "something\u2019s come between us",
          ru: "\u0447\u0442\u043e-\u0442\u043e \u0432\u0441\u0442\u0430\u043b\u043e \u043c\u0435\u0436\u0434\u0443 \u043d\u0430\u043c\u0438 / \u0438\u0441\u043f\u043e\u0440\u0442\u0438\u043b\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u0438 \u0432\u0441\u0451 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e",
          context:
            "Recently, though, something\u2019s come between us that\u2019s changed all that."
        },
        {
          en: "feels hard done by",
          ru: "\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0435\u0431\u044f \u043e\u0431\u0438\u0436\u0435\u043d\u043d\u044b\u043c / \u043e\u0431\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c",
          context:
            "Understandably, I suppose, Phil thinks it\u2019s a bit unfair and feels hard done by."
        },
        {
          en: "haven\u2019t exactly fallen out with each other, but there\u2019s certainly a tension between us",
          ru: "\u043c\u044b \u043d\u0435 \u0442\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u044f\u043c\u043e \u043f\u043e\u0441\u0441\u043e\u0440\u0438\u043b\u0438\u0441\u044c, \u043d\u043e \u043c\u0435\u0436\u0434\u0443 \u043d\u0430\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e \u0435\u0441\u0442\u044c \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435",
          context:
            "We haven\u2019t exactly fallen out with each other, but there\u2019s certainly a tension between us that wasn\u2019t there before."
        }
      ]
    },
    {
      id: "sp5",
      letter: "5",
      label: "Speaker 5",
      phrases: [
        {
          en: "split up around about this time last year",
          ru: "\u0440\u0430\u0441\u0441\u0442\u0430\u043b\u0438\u0441\u044c / \u0440\u0430\u0437\u043e\u0448\u043b\u0438\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0432 \u044d\u0442\u043e \u0436\u0435 \u0432\u0440\u0435\u043c\u044f \u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u0433\u043e\u0434\u0443",
          context: "We split up around about this time last year, just before he went off to India."
        },
        {
          en: "put up with the situation for as long as I could",
          ru: "\u043c\u0438\u0440\u0438\u043b\u0441\u044f \u0441 \u044d\u0442\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0435\u0439 / \u0442\u0435\u0440\u043f\u0435\u043b \u044d\u0442\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e \u0442\u0430\u043a \u0434\u043e\u043b\u0433\u043e, \u043a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0433",
          context:
            "I knew how much John\u2019s work meant to him and I\u2019d put up with the situation for as long as I could."
        },
        {
          en: "Not being able to make any plans for the future inevitably caused friction",
          ru: "\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043b\u0430\u043d\u044b \u043d\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043d\u0435\u0438\u0437\u0431\u0435\u0436\u043d\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u043b\u0430 \u0442\u0440\u0435\u043d\u0438\u044f / \u0440\u0430\u0437\u043d\u043e\u0433\u043b\u0430\u0441\u0438\u044f",
          context:
            "Not being able to make any plans for the future inevitably caused friction, so we decided to end it."
        },
        {
          en: "see each other from time to time",
          ru: "\u0432\u0438\u0434\u0438\u043c\u0441\u044f \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u0432\u0440\u0435\u043c\u044f \u043e\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 / \u0438\u0437\u0440\u0435\u0434\u043a\u0430",
          context:
            "We still see each other from time to time, and it\u2019s good because there\u2019s not the same tension between us that there used to be."
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

  W.FCE_U6_SB61_LEXIS = {
    speakers: SPEAKERS,
    drawerSpeakers: drawerSpeakers,
    trackAudio: TRACK_AUDIO,
    id: "u6-sb61",
    label: "SB 6.1 · Relationship problems"
  };
})(typeof window !== "undefined" ? window : globalThis);
