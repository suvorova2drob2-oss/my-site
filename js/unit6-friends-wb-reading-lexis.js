/**
 * Unit 6 · WB Reading — Friends Like These · phrase list for FAB drawer.
 * window.FCE_U6_FRIENDS_WB_LEXIS
 */
(function (W) {
  "use strict";

  var PHRASES = [
    {
      en: "lose one\u2019s appeal",
      ru: "\u0442\u0435\u0440\u044f\u0442\u044c \u0441\u0432\u043e\u044e \u043f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c / \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",
      context:
        "Friends, the TV series which follows six 20-somethings living in New York, doesn\u2019t seem to have lost its appeal even though the doors to Central Perk finally closed in 2004."
    },
    {
      en: "be ahead of its time",
      ru: "\u043e\u043f\u0435\u0440\u0435\u0436\u0430\u0442\u044c \u0441\u0432\u043e\u0451 \u0432\u0440\u0435\u043c\u044f",
      context: "I realised then that it was ahead of its time."
    },
    {
      en: "There is no denying that\u2026",
      ru: "\u043d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u044c, \u0447\u0442\u043e\u2026",
      context:
        "There is no denying that certain aspects of the show give the game away regarding when it was made."
    },
    {
      en: "give the game away",
      ru: "\u0432\u044b\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0435\u043a\u0440\u0435\u0442 / \u0432\u044b\u0434\u0430\u0432\u0430\u0442\u044c \u0441 \u0433\u043e\u043b\u043e\u0432\u043e\u0439",
      context:
        "There is no denying that certain aspects of the show give the game away regarding when it was made.",
      tip: "Here: clothes, hairstyles and technology show which era the series belongs to."
    },
    {
      en: "stand the test of time",
      ru: "\u0432\u044b\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c",
      context:
        "Not many series could stand the test of time over 25 years since it was first aired."
    },
    {
      en: "Regardless of\u2026",
      ru: "\u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442\u2026",
      context:
        "Regardless of certain aspects of the show that date it, there is a lot to be positive about."
    },
    {
      en: "at the bottom of the career ladder",
      ru: "\u043d\u0430 \u0441\u0430\u043c\u043e\u0439 \u043d\u0438\u0436\u043d\u0435\u0439 \u0441\u0442\u0443\u043f\u0435\u043d\u0438 \u043a\u0430\u0440\u044c\u0435\u0440\u043d\u043e\u0439 \u043b\u0435\u0441\u0442\u043d\u0438\u0446\u044b",
      context:
        "Then, there\u2019s entering the world of work when you\u2019re at the bottom of the career ladder."
    },
    {
      en: "throw oneself into the part",
      ru: "\u0441 \u0433\u043e\u043b\u043e\u0432\u043e\u0439 \u043f\u043e\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f \u0432 \u0440\u043e\u043b\u044c / \u0434\u0435\u043b\u043e, \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0435\u0431\u044f \u0446\u0435\u043b\u0438\u043a\u043e\u043c",
      context:
        "This is due to the quality of the writing as well as the actors themselves, who quite literally throw themselves into the part."
    },
    {
      en: "far from\u2026",
      ru: "\u0434\u0430\u043b\u0435\u043a\u043e \u043d\u0435\u2026 / \u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u2026",
      context:
        "So, when I find my kids watching the whole series for the third time, it\u2019s far from the annoyance of other rubbish they watch."
    },
    {
      en: "get on with some jobs",
      ru: "\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0442\u044c \u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0435\u043b\u0430 / \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0437\u0430 \u0440\u0430\u0431\u043e\u0442\u0443",
      context:
        "As I find a comfortable place on the sofa, there\u2019s a little guilt as I know I should be getting on with some jobs."
    }
  ];

  function drawerSpeakers() {
    return [
      {
        id: "friends-wb",
        letter: "W",
        label: "Friends Like These · workbook",
        phrases: PHRASES.map(function (p) {
          return {
            en: p.en,
            ru: p.ru,
            context: p.context,
            tip: p.tip
          };
        })
      }
    ];
  }

  W.FCE_U6_FRIENDS_WB_LEXIS = {
    phrases: PHRASES,
    drawerSpeakers: drawerSpeakers,
    id: "u6-friends-wb",
    label: "Friends Like These"
  };
})(typeof window !== "undefined" ? window : globalThis);
