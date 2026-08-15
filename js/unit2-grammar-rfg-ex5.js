/** Unit 2 Grammar — Ready for Grammar Ex. 5 · would rather / would prefer */
(function (W) {
  "use strict";

  var TASKS = [
    {
      first: "We'd prefer to come back later rather than wait here.",
      before: "We'd rather ",
      after: " here.",
      accept: ["come back later than wait"],
      revealGap: "come back later than wait",
      fullSecond: "We'd rather come back later than wait here.",
    },
    {
      first: "I think it's better to pay by cash than use a credit card.",
      before: "I prefer ",
      after: " a credit card.",
      accept: ["paying by cash to using"],
      revealGap: "paying by cash to using",
      fullSecond: "I prefer paying by cash to using a credit card.",
    },
    {
      first: "I'd rather phone him than send an email.",
      before: "I'd prefer ",
      after: " an email.",
      accept: ["to phone him rather than send"],
      revealGap: "to phone him rather than send",
      fullSecond: "I'd prefer to phone him rather than send an email.",
    },
    {
      first: "She wants to stay in bed longer.",
      before: "She'd rather ",
      after: " up until later.",
      accept: ["not get"],
      revealGap: "not get",
      fullSecond: "She'd rather not get up until later.",
    },
  ];

  function mount() {
    if (!W.U2_GR_RFG_EX4 || !W.U2_GR_RFG_EX4.mount) return;
    W.U2_GR_RFG_EX4.mount({
      tasks: TASKS,
      showKeyword: false,
      placeholder: "up to 5 words",
    });
  }

  W.U2_GR_RFG_EX5 = { mount: mount, TASKS: TASKS };
})(window);
