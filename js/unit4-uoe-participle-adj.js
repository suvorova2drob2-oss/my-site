/** Unit 4 UoE — Participle adjectives (-ing / -ed) · THE SILVER SCREEN */
(function (W) {
  "use strict";

  var ITEMS = [
    {
      n: 0,
      example: true,
      before: "I remember going to the cinema as a kid. I didn&rsquo;t feel very ",
      options: [
        { id: "relaxing", label: "relaxing" },
        { id: "relaxed", label: "relaxed" },
      ],
      correct: ["relaxed"],
      hint: "",
    },
    {
      n: 1,
      before: "",
      options: [
        { id: "worrying", label: "worrying" },
        { id: "worried", label: "worried" },
      ],
      correct: ["worrying"],
      hint: "The situation <strong>causes</strong> worry &mdash; use <em>-ing</em> (<em>which was worrying</em>).",
    },
    {
      n: 2,
      before: "",
      options: [
        { id: "annoying", label: "annoying" },
        { id: "annoyed", label: "annoyed" },
      ],
      correct: ["annoyed"],
      hint: "How <strong>you</strong> felt &mdash; <em>get annoyed</em> (-ed).",
    },
    {
      n: 3,
      before: "",
      options: [
        { id: "tiring", label: "tiring" },
        { id: "tired", label: "tired" },
      ],
      correct: ["tired"],
      hint: "Your mum <strong>was</strong> tired (-ed) &mdash; she felt sleepy.",
    },
    {
      n: 4,
      before: "",
      options: [
        { id: "embarrassing", label: "embarrassing" },
        { id: "embarrassed", label: "embarrassed" },
      ],
      correct: ["embarrassed"],
      hint: "How <strong>you</strong> felt &mdash; <em>feel embarrassed</em> (-ed).",
    },
    {
      n: 5,
      before: "",
      options: [
        { id: "boring", label: "boring" },
        { id: "bored", label: "bored" },
      ],
      correct: ["boring"],
      hint: "The <strong>film</strong> causes boredom &mdash; <em>boring</em> (-ing).",
    },
    {
      n: 6,
      before: "",
      options: [
        { id: "fascinating", label: "fascinating" },
        { id: "fascinated", label: "fascinated" },
      ],
      correct: ["fascinated"],
      hint: "<em>something that fascinated me</em> &mdash; past form of the verb here.",
    },
    {
      n: 7,
      before: "",
      options: [
        { id: "surprising", label: "surprising" },
        { id: "surprised", label: "surprised" },
      ],
      correct: ["surprised"],
      hint: "How <strong>you</strong> felt &mdash; <em>I was surprised</em> (-ed).",
    },
    {
      n: 8,
      before: "",
      options: [
        { id: "exciting", label: "exciting" },
        { id: "excited", label: "excited" },
      ],
      correct: ["exciting"],
      hint: "The experience <strong>is</strong> exciting (-ing) &mdash; it excites you.",
    },
  ];

  /** Bridge text between gaps (book order). */
  var BRIDGE = [
    ". First of all, my mum would take in sweets from the supermarket, which was ",
    " because it felt like we were doing something wrong. Then, I would get ",
    " with my little brother. He never understood the story and kept asking me what was happening. On top of that, my mum was always ",
    " and would start sleeping, often snoring! I couldn&rsquo;t help but feel ",
    "! If the film was ",
    ", I&rsquo;d just sit there unable to escape. But if it was something that ",
    " me, the distractions from my family were awful. When I got older, I was actually ",
    " that going to the cinema could be an enjoyable experience. When I go now, it&rsquo;s ",
    ". I just have to remember not to invite my mum or brother!",
  ];

  function buildPassageItems() {
    return ITEMS.map(function (it, idx) {
      var copy = {};
      var k;
      for (k in it) {
        if (Object.prototype.hasOwnProperty.call(it, k)) copy[k] = it[k];
      }
      if (idx > 0) copy.before = "";
      copy.after = BRIDGE[idx] || "";
      return copy;
    });
  }

  function mount(cfg) {
    cfg = cfg || {};
    if (!W.U2_GR_GERUNDS_EX1 || !W.U2_GR_GERUNDS_EX1.mount) return;
    W.U2_GR_GERUNDS_EX1.mount(
      Object.assign(
        {
          inline: true,
          items: buildPassageItems(),
          hostId: "silver-passage",
          feedbackId: "silver-fb",
          checkId: "silver-check",
          resetId: "silver-reset",
          checkPrompt: "Choose an option in every gap (1\u20138), then check again.",
        },
        cfg
      )
    );
  }

  W.U4_UOE_PARTICIPLE_ADJ = { mount: mount, ITEMS: ITEMS };
})(window);
