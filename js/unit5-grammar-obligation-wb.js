/** Unit 5 Grammar WB — Obligation / permission (library rules + SHM data helpers) */
(function (W) {
  "use strict";

  var ITEMS = [
    {
      n: 0,
      example: true,
      before: "Welcome to Southmoor University Library. Please read the rules below and if you have any questions, you ",
      after: " ask a member of staff.",
      options: [
        { id: "should", label: "should" },
        { id: "ought", label: "ought" },
      ],
      correct: ["should"],
      hint: "",
    },
    {
      n: 1,
      before: "Books ",
      after: " taken off the premises without a valid library card.",
      options: [
        { id: "must be not", label: "must be not" },
        { id: "must not be", label: "must not be" },
      ],
      correct: ["must not be"],
      hint: "",
    },
    {
      n: 2,
      before: "Library card holders ",
      after: " take up to ten books out at a time for a period of two weeks.",
      options: [
        { id: "must", label: "must" },
        { id: "are allowed to", label: "are allowed to" },
      ],
      correct: ["are allowed to"],
      hint: "",
    },
    {
      n: 3,
      before: "… but if they are returned late, you will be ",
      after: " pay a fine.",
      options: [
        { id: "made", label: "made" },
        { id: "have to", label: "have to" },
      ],
      correct: ["made"],
      hint: "",
    },
    {
      n: 4,
      before: "If another user requests a book in your possession, this ",
      after: " be returned within seven days.",
      options: [
        { id: "must", label: "must" },
        { id: "has", label: "has" },
      ],
      correct: ["must"],
      hint: "",
    },
    {
      n: 5,
      before: "Children can enter the library but ",
      after: " to be accompanied by an adult.",
      options: [
        { id: "need", label: "need" },
        { id: "should", label: "should" },
      ],
      correct: ["need"],
      hint: "",
    },
    {
      n: 6,
      before: "Libraries ",
      after: " places where people can quietly read. Anyone making excess noise will be politely asked to leave.",
      options: [
        { id: "are supposed to be", label: "are supposed to be" },
        { id: "had better be", label: "had better be" },
      ],
      correct: ["are supposed to be"],
      hint: "",
    },
    {
      n: 7,
      before: "Users can bring in drinks, but you ",
      after: " bring them in open cups, just containers with lids.",
      options: [
        { id: "don't have to", label: "don't have to" },
        { id: "are not allowed to", label: "are not allowed to" },
      ],
      correct: ["are not allowed to"],
      hint: "",
    },
    {
      n: 8,
      before: "Finally, users ",
      after: " become members, but we would recommend you do as you’ll be able to enjoy the many benefits the library has to offer.",
      options: [
        { id: "no need to", label: "no need to" },
        { id: "don't have to", label: "don't have to" },
      ],
      correct: ["don't have to"],
      hint: "",
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
          checkPrompt: "Choose an option in every sentence (1–8), then check again.",
        },
        cfg
      )
    );
  }

  W.U5_GRAMMAR_OBLIGATION_WB = { mount: mount, ITEMS: ITEMS };
})(window);
