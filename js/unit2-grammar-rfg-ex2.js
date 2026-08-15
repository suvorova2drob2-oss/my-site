/** Unit 2 Grammar — Ready for Grammar Ex. 2 · LOW ENERGY social post */
(function (W) {
  "use strict";

  var LOW_ENERGY_ITEMS = [
    {
      n: 1,
      before: "So as some of you know, I&rsquo;ve been trying ",
      options: [
        { id: "to lose", label: "to lose" },
        { id: "losing", label: "losing" },
      ],
      after: " some weight, but it&rsquo;s not easy. I&rsquo;ve stopped ",
      correct: ["to lose"],
      hint:
        "<strong>try</strong> + <em>to + infinitive</em> = attempt: <em>trying to lose weight</em>.",
    },
    {
      n: 2,
      before: "",
      options: [
        { id: "to buy", label: "to buy" },
        { id: "buying", label: "buying" },
      ],
      after:
        " things like fizzy drinks and chocolate, but I know I need ",
      correct: ["buying"],
      hint:
        "<strong>stop</strong> + <em>-ing</em> = quit a habit: <em>stopped buying</em> fizzy drinks.",
    },
    {
      n: 3,
      before: "",
      options: [
        { id: "to do", label: "to do" },
        { id: "doing", label: "doing" },
      ],
      after: " a lot more. The problem is, losing weight means ",
      correct: ["to do"],
      hint: "<strong>need</strong> + <em>to + infinitive</em>: <em>need to do</em> a lot more.",
    },
    {
      n: 4,
      before: "",
      options: [
        { id: "to be", label: "to be" },
        { id: "being", label: "being" },
      ],
      after: " self-disciplined and I&rsquo;m not very good at that. I really ought to start ",
      correct: ["being"],
      hint:
        "<strong>mean</strong> (= involve) + <em>-ing</em>: <em>means being self-disciplined</em>.",
    },
    {
      n: 5,
      before: "",
      options: [
        { id: "to go", label: "to go" },
        { id: "going", label: "going" },
      ],
      after: " to a gym as well. I know it&rsquo;ll help me ",
      correct: ["to go", "going"],
      hint:
        "After <strong>start</strong>, both <em>to + infinitive</em> and <em>-ing</em> are often possible.",
    },
    {
      n: 6,
      before: "",
      options: [
        { id: "to get", label: "to get" },
        { id: "get", label: "get" },
      ],
      after: " fit and I&rsquo;ve been meaning ",
      correct: ["to get", "get"],
      hint:
        "After <strong>help</strong>, bare infinitive or <em>to + infinitive</em> — both fit here.",
    },
    {
      n: 7,
      before: "",
      options: [
        { id: "to join", label: "to join" },
        { id: "joining", label: "joining" },
      ],
      after: " one for ages, but I always forget ",
      correct: ["to join"],
      hint:
        "<strong>mean</strong> (= intend) + <em>to + infinitive</em>: <em>meaning to join</em> a gym.",
    },
    {
      n: 8,
      before: "",
      options: [
        { id: "to do", label: "to do" },
        { id: "doing", label: "doing" },
      ],
      after: " anything about it. The truth is, though, I don&rsquo;t really like ",
      correct: ["to do"],
      hint:
        "<strong>forget</strong> + <em>to + infinitive</em> = fail to do something: <em>forget to do</em> anything about it.",
    },
    {
      n: 9,
      before: "",
      options: [
        { id: "to do", label: "to do" },
        { id: "doing", label: "doing" },
      ],
      after: " a lot of physical exercise; I much prefer ",
      correct: ["to do", "doing"],
      hint:
        "After <strong>like</strong>, both <em>to + infinitive</em> and <em>-ing</em> are possible for general preferences.",
    },
    {
      n: 10,
      before: "",
      options: [
        { id: "to watch", label: "to watch" },
        { id: "watching", label: "watching" },
      ],
      after: " others do it. So, I&rsquo;ll probably just continue ",
      correct: ["watching"],
      hint:
        "<strong>prefer</strong> + <em>-ing</em>: <em>prefer watching</em> others do it.",
    },
    {
      n: 11,
      before: "",
      options: [
        { id: "to live", label: "to live" },
        { id: "living", label: "living" },
      ],
      after:
        " life the same unhealthy way I&rsquo;ve always done. In fact, there&rsquo;s a match on telly tonight; I must remember ",
      correct: ["to live", "living"],
      hint:
        "After <strong>continue</strong>, both <em>to + infinitive</em> and <em>-ing</em> are often possible.",
    },
    {
      n: 12,
      before: "",
      options: [
        { id: "to order", label: "to order" },
        { id: "ordering", label: "ordering" },
      ],
      after: " a pizza for 8 o&rsquo;clock.",
      correct: ["to order"],
      hint:
        "<strong>remember</strong> + <em>to + infinitive</em> = don&rsquo;t forget a future task: <em>remember to order</em> a pizza.",
    },
  ];

  function mount(cfg) {
    cfg = cfg || {};
    if (!W.U2_GR_GERUNDS_EX1 || !W.U2_GR_GERUNDS_EX1.mount) return;
    W.U2_GR_GERUNDS_EX1.mount({
      hostId: cfg.hostId || "low-energy-post",
      items: LOW_ENERGY_ITEMS,
      inline: true,
      checkPrompt: "Choose an option at every gap (1\u201312), then check again.",
    });
  }

  W.U2_GR_RFG_EX2 = { mount: mount, ITEMS: LOW_ENERGY_ITEMS };
})(window);
