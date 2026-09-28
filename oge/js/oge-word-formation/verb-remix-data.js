/**
 * OGE Word Formation Gym · Verb Remix (Understanding verbs · Ex. 1) — standalone pack.
 */
(function (w) {
  "use strict";

  w.OGE_VERB_REMIX = {
    id: "verb-remix",
    label: "Verb Remix",
    blurb: "Prefixes re- · dis- · mis- and suffix -ise/-ize — what they mean and when they appear.",
    rules: [
      "mis- → wrong / badly · dis- → not / stop · re- → again",
      "British -ise · American -ize — many verbs allow both",
      "You rarely form verbs in OGE 29–34, but it can happen"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1",
        title: "Complete the statements",
        instruction: "Look at the table in your book and complete the statements.",
        kind: "choice",
        items: [
          {
            id: "1",
            prompt: "…… usually means ‘do something wrong’ or ‘do something badly’.",
            choices: ["re-", "dis-", "mis-"],
            answer: "mis-"
          },
          {
            id: "2",
            prompt: "…… usually means ‘not’ or ‘stop’.",
            choices: ["re-", "dis-", "mis-"],
            answer: "dis-"
          },
          {
            id: "3",
            prompt: "…… usually means ‘again’.",
            choices: ["re-", "dis-", "mis-"],
            answer: "re-"
          },
          {
            id: "4",
            prompt: "…… verbs ending in -ise can also be written with -ize.",
            choices: ["All", "Most"],
            answer: "Most"
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
