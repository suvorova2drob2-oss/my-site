/** Unit 4 Grammar — So / such (slash-pick engine via U2_GR_GERUNDS_EX1) */
(function (W) {
  "use strict";

  var SO_SUCH_OPTS = [
    { id: "such", label: "such" },
    { id: "so", label: "so" },
  ];

  var ITEMS = [
    {
      n: 0,
      example: true,
      before: "It was ",
      after: " a stupid thing to say to his friend.",
      options: SO_SUCH_OPTS,
      correct: ["such"],
      hint: "",
    },
    {
      n: 1,
      before: "The food was ",
      after: " terrible that we left the restaurant.",
      options: SO_SUCH_OPTS,
      correct: ["so"],
      hint: "<strong>so</strong> + adjective: <em>so terrible that &hellip;</em>",
    },
    {
      n: 2,
      before: "I&rsquo;d never met ",
      after: " a lovely person before in my life.",
      options: SO_SUCH_OPTS,
      correct: ["such"],
      hint: "<strong>such</strong> + <em>a/an</em> + adjective + noun: <em>such a lovely person</em>.",
    },
    {
      n: 3,
      before: "There were ",
      after: " many people at the party I didn&rsquo;t know.",
      options: SO_SUCH_OPTS,
      correct: ["so"],
      hint: "<strong>so</strong> + <em>many / much / few / little</em>: <em>so many people</em>.",
    },
    {
      n: 4,
      before: "We had ",
      after: " delicious coffee in Brazil.",
      options: SO_SUCH_OPTS,
      correct: ["such"],
      hint: "<strong>such</strong> + adjective + uncountable noun: <em>such delicious coffee</em>.",
    },
    {
      n: 5,
      before: "Mum is ",
      after: " busy at the moment. She needs a holiday.",
      options: SO_SUCH_OPTS,
      correct: ["so"],
      hint: "<strong>so</strong> + adjective (no noun): <em>so busy</em>.",
    },
    {
      n: 6,
      before: "It was ",
      after: " a shocking story, I had to sit down.",
      options: SO_SUCH_OPTS,
      correct: ["such"],
      hint: "<strong>such</strong> + <em>a</em> + adjective + noun: <em>such a shocking story</em>.",
    },
    {
      n: 7,
      before: "He came home ",
      after: " quietly I didn&rsquo;t wake up.",
      options: SO_SUCH_OPTS,
      correct: ["so"],
      hint: "<strong>so</strong> + adverb: <em>so quietly (that) &hellip;</em>",
    },
    {
      n: 8,
      before: "My dentist says I shouldn&rsquo;t eat ",
      after: " many sweets.",
      options: SO_SUCH_OPTS,
      correct: ["so"],
      hint: "<strong>so</strong> + <em>many</em>: <em>so many sweets</em>.",
    },
  ];

  function mount(cfg) {
    cfg = cfg || {};
    if (!W.U2_GR_GERUNDS_EX1 || !W.U2_GR_GERUNDS_EX1.mount) return;
    W.U2_GR_GERUNDS_EX1.mount(
      Object.assign(
        {
          items: ITEMS,
          listId: "gram-rows",
          feedbackId: "gram-fb",
          checkId: "btn-check",
          resetId: "btn-reset",
          checkPrompt: "Choose an option in every sentence (1\u20138), then check again.",
        },
        cfg
      )
    );
  }

  W.U4_GRAMMAR_SO_SUCH = { mount: mount, ITEMS: ITEMS };
})(window);
