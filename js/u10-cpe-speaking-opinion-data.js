(function (W) {
  "use strict";

  W.U10_CPE_SPEAKING_OPINION_DATA = {
    words: ["come", "mind", "perspective", "put", "reflection", "thoughts", "way", "words"],
    ex1: [
      { key: "A", pre: "On second", ans: "thoughts", post: "" },
      { key: "B", pre: "In other", ans: "words", post: "" },
      { key: "C", pre: "From my", ans: "perspective", post: "" },
      { key: "D", pre: "On", ans: "reflection", post: "" },
      { key: "E", pre: "Let me put that another", ans: "way", post: "" },
      { key: "F", pre: "To my", ans: "mind", post: "" },
      { key: "G", pre: "", ans: "come", post: "to think of it" },
      { key: "H", pre: "To", ans: "put", post: "it differently" }
    ],
    phrases: [
      { id: "p1", text: "from my perspective", cat: "express", extra: false },
      { id: "p2", text: "to my mind", cat: "express", extra: false },
      { id: "p3", text: "in other words", cat: "rephrase", extra: false },
      { id: "p4", text: "to put it differently", cat: "rephrase", extra: false },
      { id: "p5", text: "let me put that another way", cat: "rephrase", extra: false },
      { id: "p6", text: "on second thoughts", cat: "change", extra: false },
      { id: "p7", text: "come to think of it", cat: "change", extra: false },
      { id: "p8", text: "on reflection", cat: "change", extra: false },
      { id: "p9", text: "as I see it", cat: "express", extra: true },
      { id: "p10", text: "I'm a firm believer in/that", cat: "express", extra: true },
      { id: "p11", text: "what I meant to say was", cat: "rephrase", extra: true },
      { id: "p12", text: "now you mention it...", cat: "change", extra: true }
    ],
    informal: [
      "on reflection",
      "come to think of it",
      "on second thoughts",
      "now you mention it..."
    ],
    informalCorrect: {
      "come to think of it": true,
      "now you mention it...": true
    }
  };
})(window);
