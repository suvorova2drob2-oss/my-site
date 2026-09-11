/**
 * Pre-intermediate · Eat · Beat 1 · contextual drilling cards
 * One large copy-paste sheet per card (1–5) + question topic cards
 */
(function (global) {
  "use strict";

  var BUSY =
    "It gets really busy. You have to wait for a while to get a seat.";

  var KEYWORDS_2 = [
    "The service is\u2026",
    "The staff are always\u2026",
    "They have a big selection of\u2026",
    "plenty to choose from.",
  ];

  var KEYWORDS_3 = [
    "The first time I went to\u2026",
    "really good value",
    "went there again recently",
    "quite expensive",
    "portions were much smaller!",
  ];

  var KEYWORDS_4 = [
    "I went to\u2026 once\u2026",
    "had this\u2026 which tasted disgusting\u2026",
    "when I complained about it\u2026",
    "the waiter was quite rude.",
  ];

  var KEYWORDS_5 = [
    "You can sit outside on the terrace\u2026",
    "get an incredible view over\u2026",
    "I had this amazing\u2026 when I went there.",
    "In fact, it was all really delicious\u2026",
    "but it\u2019s also really expensive.",
  ];

  global.PRE_INT_EAT_DRILL_CARDS = [
    { place: "Italian place", food: "great pizza / pasta" },
    { place: "Georgian place", food: "great khachapuri / khinkali" },
    { place: "Mexican place", food: "great tacos / burritos" },
    { place: "American place", food: "great burgers / steaks" },
    { place: "French bakery", food: "great croissants / eclairs" },
    { place: "Chinese place", food: "great noodles / dumplings" },
    { place: "Thai place", food: "great Tom Yum / Pad Thai" },
    { place: "Turkish place", food: "great kebab / baklava" },
    { place: "Vietnamese place", food: "great Pho Bo" },
    {
      place: "Local coffee place",
      food: "great cappuccino / cheesecakes",
    },
  ];

  global.PRE_INT_EAT_DRILL_CARDS_2 = [
    "meat dishes",
    "seafood options",
    "healthy food",
    "spicy dishes",
    "homemade desserts",
    "fast food",
    "traditional meals",
    "soups and salads",
    "street food",
    "breakfast options",
    "drinks and cocktails",
    "children\u2019s meals",
  ];

  global.PRE_INT_EAT_DRILL_CARDS_3 = [
    { to: "that burger place", smaller: "the burgers were much smaller!" },
    { to: "that sushi bar", smaller: "the sushi rolls were much smaller!" },
    { to: "that coffee shop", smaller: "the cups of coffee were much smaller!" },
    { to: "that steakhouse", smaller: "the steaks were much smaller!" },
    { to: "that bakery", smaller: "the croissants were much smaller!" },
    { to: "that pizza place", smaller: "the pizzas were much smaller!" },
    { to: "that pancake house", smaller: "the pancakes were much smaller!" },
    {
      to: "that seafood restaurant",
      smaller: "the shrimps were much smaller!",
    },
    { to: "that local cafe", smaller: "the slices of cake were much smaller!" },
    { to: "that noodle bar", smaller: "the bowls of ramen were much smaller!" },
    { to: "that pub", smaller: "the snacks were much smaller!" },
    {
      to: "that ice cream parlor",
      smaller: "the scoops of ice cream were much smaller!",
    },
  ];

  global.PRE_INT_EAT_DRILL_CARDS_4 = [
    { to: "the Mexican place", dish: "this burrito which tasted" },
    { to: "the sushi bar", dish: "this salmon roll which tasted" },
    { to: "the burger joint", dish: "this cheeseburger which tasted" },
    { to: "the pizzeria", dish: "this mushroom pizza which tasted" },
    {
      to: "the seafood restaurant",
      dish: "this fish dish which tasted",
    },
    { to: "the local bakery", dish: "this apple pie which tasted" },
    { to: "the steakhouse", dish: "this ribeye steak which tasted" },
    { to: "the noodle bar", dish: "this bowl of ramen which tasted" },
    { to: "the coffee shop", dish: "this iced latte which tasted" },
    { to: "the French cafe", dish: "this onion soup which tasted" },
    { to: "the pasta place", dish: "this carbonara which tasted" },
    {
      to: "the hotel restaurant",
      dish: "this chicken salad which tasted",
    },
  ];

  global.PRE_INT_EAT_DRILL_CARDS_5 = [
    {
      at: "the rooftop bar",
      line: "I had this amazing signature cocktail when I went there.",
    },
    {
      at: "the riverside cafe",
      line: "I had this amazing grilled fish when I went there.",
    },
    {
      at: "the beach restaurant",
      line: "I had this amazing pasta when I went there.",
    },
    {
      at: "the mountain cafe",
      line: "I had this amazing hot chocolate when I went there.",
    },
    {
      at: "the park bistro",
      line: "I had this amazing strawberry dessert when I went there.",
    },
    {
      at: "the lakehouse restaurant",
      line: "I had this amazing duck dish when I went there.",
    },
    {
      at: "the hotel lounge",
      line: "I had this amazing club sandwich when I went there.",
    },
    {
      at: "the garden terrace",
      line: "I had this amazing herbal tea when I went there.",
    },
    {
      at: "the seaside grill",
      line: "I had this amazing lobster when I went there.",
    },
    {
      at: "the palace restaurant",
      line: "I had this amazing beef steak when I went there.",
    },
    {
      at: "the harbor cafe",
      line: "I had this amazing seafood soup when I went there.",
    },
    {
      at: "the skyline lounge",
      line: "I had this amazing cheesecake when I went there.",
    },
  ];

  global.PRE_INT_EAT_ROLEPLAY_CARDS = [
    {
      tone: "optimist",
      badge: "\uD83D\uDFE2",
      num: "CARD 1",
      title: "The Asian Optimist",
      goal: "Push for the Japanese restaurant.",
      keywords: [
        "little Japanese place near \u2026",
        "does great sushi!",
        "gets really busy",
        "wait for a while to get a seat.",
      ],
    },
    {
      tone: "optimist",
      badge: "\uD83D\uDFE2",
      num: "CARD 2",
      title: "The Friendly Optimist",
      goal: "Praise the service and options in the Spanish place.",
      keywords: [
        "service is great",
        "staff are always really friendly.",
        "big selection of vegetarian dishes",
        "plenty to choose from.",
      ],
    },
    {
      tone: "pessimist",
      badge: "\uD83D\uDD34",
      num: "CARD 3",
      title: "The Price/Portion Pessimist",
      goal: "Attack the Spanish place using prices and size.",
      keywords: [
        "The first time \u2026 really good value",
        "again recently \u2026 quite expensive!",
        "portions were much smaller!",
      ],
    },
    {
      tone: "pessimist",
      badge: "\uD83D\uDD34",
      num: "CARD 4",
      title: "The Rude Waiter Pessimist",
      goal: "Attack the food quality and staff.",
      keywords: [
        "went there once",
        "dish which tasted disgusting",
        "complained about it",
        "waiter was quite rude.",
      ],
    },
    {
      tone: "pessimist",
      badge: "\uD83D\uDD34",
      num: "CARD 5",
      title: "The Bored Pessimist",
      goal: "Attack the choice and menu structure.",
      keywords: [
        "have a fixed menu",
        "isn\u2019t much choice.",
        "two or three options for each course.",
      ],
    },
    {
      tone: "bonus",
      badge: "\uD83D\uDFE2",
      num: "BONUS CARD",
      title: "The Luxury Optimist",
      goal: "Suggest a cool terrace, even if it is expensive.",
      keywords: [
        "sit outside on the terrace",
        "incredible view over the city.",
        "amazing seafood dish",
        "really delicious \u2026 really expensive.",
      ],
    },
  ];

  global.PRE_INT_EAT_QUESTION_CARDS = [
    {
      icon: "\uD83D\uDD52",
      title: "Topic 1: Queues and Waiting",
      titleRu: "\u041e\u0447\u0435\u0440\u0435\u0434\u0438 \u0438 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435",
      questions: [
        "How long are you ready to wait for a while to get a seat in a very popular restaurant?",
        "Are there any places in our city that often get really busy, but the food is so good that it\u2019s worth the wait?",
      ],
    },
    {
      icon: "\uD83E\uDD66",
      title: "Topic 2: Service and Menu Choices",
      titleRu: "\u0421\u0435\u0440\u0432\u0438\u0441 \u0438 \u0432\u044b\u0431\u043e\u0440 \u0432 \u043c\u0435\u043d\u044e",
      questions: [
        "When you go out, what is more important to you: that the service is great and the staff are friendly, or just the taste of the food?",
        "Do you prefer restaurants that have a fixed menu with just two or three options, or places with a big selection of dishes? Why?",
      ],
    },
    {
      icon: "\uD83D\uDCB8",
      title: "Topic 3: Value for Money and Portions",
      titleRu: "\u0426\u0435\u043d\u044b \u0438 \u043f\u043e\u0440\u0446\u0438\u0438",
      questions: [
        "Have you ever been to a place that used to be really good value, but then became quite expensive?",
        "What is your biggest restaurant nightmare: when the prices are too high, or when the portions are much smaller than you expected?",
      ],
    },
    {
      icon: "\uD83E\uDD2C",
      title: "Topic 4: Bad Experiences and Complaints",
      titleRu: "\u041f\u043b\u043e\u0445\u043e\u0439 \u043e\u043f\u044b\u0442 \u0438 \u0436\u0430\u043b\u043e\u0431\u044b",
      questions: [
        "Think about a time you had a dish that tasted disgusting. Did you complain about it, or did you just pay and leave?",
        "How do you usually react when a waiter is quite rude? Do you still leave a tip?",
      ],
    },
    {
      icon: "\uD83C\uDF07",
      title: "Topic 5: Terraces and Atmosphere",
      titleRu: "\u0410\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430 \u0438 \u0432\u0435\u0440\u0430\u043d\u0434\u044b",
      questions: [
        "Do you agree that if a restaurant has a terrace with an incredible view over the city, the food is always really expensive?",
        "What was the most amazing dish you\u2019ve ever had in a restaurant? Was it really delicious or just overpriced?",
      ],
    },
  ];

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function deck1CopyAll(cards) {
    return (
      cards
        .map(function (c) {
          return c.place + " \u2192 " + c.food;
        })
        .join("\n") +
      "\n\n" +
      BUSY
    );
  }

  function deck2CopyAll(selections) {
    return (
      "\uD83D\uDD11 Keywords:\n" +
      KEYWORDS_2.join("\n") +
      "\n\n" +
      selections
        .map(function (sel) {
          return "a big selection of " + sel;
        })
        .join("\n") +
      "\n\nplenty to choose from."
    );
  }

  function deck3CopyAll(items) {
    return (
      "\uD83D\uDD11 Keywords:\n" +
      KEYWORDS_3.join("\n") +
      "\n\n" +
      items
        .map(function (item) {
          return "to " + item.to + " / and " + item.smaller;
        })
        .join("\n")
    );
  }

  function deck4CopyAll(items) {
    return (
      "\uD83D\uDD11 Keywords:\n" +
      KEYWORDS_4.join("\n") +
      "\n\n" +
      items
        .map(function (item) {
          return (
            "to " + item.to + " / and I had " + item.dish + " disgusting\u2026"
          );
        })
        .join("\n")
    );
  }

  function deck5CopyAll(items) {
    return (
      "\uD83D\uDD11 Keywords:\n" +
      KEYWORDS_5.join("\n") +
      "\n\n" +
      items
        .map(function (item) {
          return "at " + item.at + " / " + item.line;
        })
        .join("\n")
    );
  }

  function questionCopyText(topic) {
    if (!topic) return "";
    return (
      topic.icon +
      " " +
      topic.title +
      " (" +
      topic.titleRu +
      ")\n\n1) " +
      (topic.questions[0] || "") +
      "\n\n2) " +
      (topic.questions[1] || "")
    );
  }

  function allQuestionsCopyText(topics) {
    return topics.map(questionCopyText).join("\n\n---\n\n");
  }

  function roleplayCopyText(card) {
    if (!card) return "";
    return (
      card.badge +
      " " +
      card.num +
      ": " +
      card.title +
      "\n\nYour Goal: " +
      card.goal +
      "\n\nKeywords:\n" +
      card.keywords.map(function (k) {
        return "\u2026 " + k;
      }).join("\n")
    );
  }

  function allRoleplayCopyText(cards) {
    return cards.map(roleplayCopyText).join("\n\n---\n\n");
  }

  function copyText(text, btn) {
    function done(ok) {
      if (!btn) return;
      var prev = btn.textContent;
      btn.textContent = ok ? "Copied!" : "Copy";
      btn.disabled = !ok;
      setTimeout(function () {
        btn.textContent = prev;
        btn.disabled = false;
      }, 1400);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          done(true);
        },
        function () {
          done(false);
        }
      );
      return;
    }
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      done(ok);
    } catch (_e) {
      done(false);
    }
  }

  function bindCopy(root, selector, getText) {
    root.querySelectorAll(selector).forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        copyText(getText(btn), btn);
      });
    });
  }

  function renderKeywords(keywords) {
    return (
      '<div class="pi-drill-keywords pi-drill-keywords--compact" aria-label="Keywords">' +
      '<span class="pi-drill-keywords-label">\uD83D\uDD11 Keywords</span>' +
      '<ul class="pi-drill-kw-grid">' +
      keywords
        .map(function (k) {
          return "<li>" + esc(k) + "</li>";
        })
        .join("") +
      "</ul></div>"
    );
  }

  function renderSheet(deckId, numLabel, innerHtml) {
    return (
      '<section class="pi-drill-deck" aria-label="' +
      esc(numLabel) +
      '">' +
      '<article class="pi-drill-card pi-drill-card--sheet" tabindex="0">' +
      '<div class="pi-drill-card-head">' +
      '<span class="pi-drill-card-num">' +
      esc(numLabel) +
      "</span>" +
      '<button type="button" class="pi-drill-copy" data-deck="' +
      deckId +
      '">Copy</button>' +
      "</div>" +
      '<div class="pi-drill-sheet-body">' +
      innerHtml +
      "</div></article></section>"
    );
  }

  function renderDeck1(cards) {
    var lines =
      '<ul class="pi-drill-sheet-list pi-drill-sheet-list--3col">' +
      cards
        .map(function (c) {
          return (
            "<li>" +
            esc(c.place) +
            ' <span class="pi-drill-arrow" aria-hidden="true">\u2192</span> ' +
            esc(c.food) +
            "</li>"
          );
        })
        .join("") +
      "</ul>" +
      '<p class="pi-drill-sheet-model">' +
      esc(BUSY) +
      "</p>";
    return renderSheet("1", "Card 1 · place \u2192 food", lines);
  }

  function renderDeck2(selections) {
    var lines =
      renderKeywords(KEYWORDS_2) +
      '<ul class="pi-drill-sheet-list pi-drill-sheet-list--3col">' +
      selections
        .map(function (sel) {
          return "<li>a big selection of " + esc(sel) + "</li>";
        })
        .join("") +
      "</ul>" +
      '<p class="pi-drill-sheet-model">' +
      esc("plenty to choose from.") +
      "</p>";
    return renderSheet("2", "Card 2 · a big selection of\u2026", lines);
  }

  function renderDeck3(items) {
    var lines =
      renderKeywords(KEYWORDS_3) +
      '<ul class="pi-drill-sheet-list pi-drill-sheet-list--3col">' +
      items
        .map(function (item) {
          return (
            "<li>to " +
            esc(item.to) +
            ' <span class="pi-drill-slash">/</span> and ' +
            esc(item.smaller) +
            "</li>"
          );
        })
        .join("") +
      "</ul>";
    return renderSheet("3", "Card 3 · options for substitution", lines);
  }

  function renderDeck4(items) {
    var lines =
      renderKeywords(KEYWORDS_4) +
      '<ul class="pi-drill-sheet-list pi-drill-sheet-list--3col">' +
      items
        .map(function (item) {
          return (
            "<li>to " +
            esc(item.to) +
            ' <span class="pi-drill-slash">/</span> and I had ' +
            esc(item.dish) +
            "\u2026</li>"
          );
        })
        .join("") +
      "</ul>";
    return renderSheet("4", "Card 4 · complaint &amp; rude waiter", lines);
  }

  function renderDeck5(items) {
    var lines =
      renderKeywords(KEYWORDS_5) +
      '<ul class="pi-drill-sheet-list pi-drill-sheet-list--3col">' +
      items
        .map(function (item) {
          return (
            "<li>at " +
            esc(item.at) +
            ' <span class="pi-drill-slash">/</span> ' +
            esc(item.line) +
            "</li>"
          );
        })
        .join("") +
      "</ul>";
    return renderSheet("5", "Card 5 · terrace &amp; amazing dish", lines);
  }

  function renderRoleplayCards(cards) {
    return (
      '<section class="pi-drill-deck pi-drill-deck--rp" aria-label="Role play cards">' +
      '<article class="pi-drill-card pi-drill-card--sheet pi-drill-rp-wrap" tabindex="0">' +
      '<div class="pi-drill-card-head">' +
      '<span class="pi-drill-card-num">Role play cards</span>' +
      '<button type="button" class="pi-drill-copy" data-deck="rp-all">Copy all</button>' +
      "</div>" +
      '<div class="pi-rp-grid" role="list">' +
      cards
        .map(function (card, i) {
          return (
            '<article class="pi-rp-card pi-rp-card--' +
            esc(card.tone) +
            '" role="listitem">' +
            '<div class="pi-rp-card-head">' +
            '<span class="pi-rp-badge" aria-hidden="true">' +
            card.badge +
            "</span>" +
            '<div class="pi-rp-titles">' +
            '<span class="pi-rp-num">' +
            esc(card.num) +
            ": " +
            esc(card.title) +
            "</span></div>" +
            '<button type="button" class="pi-drill-copy pi-drill-copy--sm" data-deck="rp" data-rp-idx="' +
            i +
            '">Copy</button>' +
            "</div>" +
            '<p class="pi-rp-goal"><strong>Your Goal:</strong> ' +
            esc(card.goal) +
            "</p>" +
            '<div class="pi-drill-keywords pi-drill-keywords--compact pi-drill-keywords--rp">' +
            '<span class="pi-drill-keywords-label">\uD83D\uDD11 Keywords</span>' +
            '<ul class="pi-drill-kw-grid pi-drill-kw-grid--1col">' +
            card.keywords
              .map(function (k) {
                return "<li>\u2026 " + esc(k) + "</li>";
              })
              .join("") +
            "</ul></div></article>"
          );
        })
        .join("") +
      "</div></article></section>"
    );
  }

  function renderQuestionCards(topics) {
    return (
      '<section class="pi-drill-deck pi-drill-deck--q" aria-label="Question cards">' +
      '<article class="pi-drill-card pi-drill-card--sheet pi-drill-card--q" tabindex="0">' +
      '<div class="pi-drill-card-head">' +
      '<span class="pi-drill-card-num">Question cards · partner talk</span>' +
      '<button type="button" class="pi-drill-copy" data-deck="q">Copy all</button>' +
      "</div>" +
      '<div class="pi-drill-sheet-body">' +
      topics
        .map(function (topic, ti) {
          var qs = topic.questions || [];
          return (
            '<div class="pi-drill-q-block">' +
            '<header class="pi-drill-q-topic-head">' +
            '<span class="pi-drill-q-icon" aria-hidden="true">' +
            topic.icon +
            "</span>" +
            '<div class="pi-drill-q-topic-titles">' +
            '<h4 class="pi-drill-q-topic-en">' +
            esc(topic.title) +
            "</h4>" +
            '<p class="pi-drill-q-topic-ru">' +
            esc(topic.titleRu) +
            "</p></div></header>" +
            qs
              .map(function (q, qi) {
                return (
                  '<p class="pi-drill-q-text">' +
                  '<span class="pi-drill-q-n">Q' +
                  (ti * 2 + qi + 1) +
                  ".</span> " +
                  esc(q) +
                  "</p>"
                );
              })
              .join("") +
            "</div>"
          );
        })
        .join("") +
      "</div></article></section>"
    );
  }

  function mount(opts) {
    var root = opts && opts.root;
    var cards1 =
      (opts && opts.cards) || global.PRE_INT_EAT_DRILL_CARDS || [];
    var cards2 = global.PRE_INT_EAT_DRILL_CARDS_2 || [];
    var cards3 = global.PRE_INT_EAT_DRILL_CARDS_3 || [];
    var cards4 = global.PRE_INT_EAT_DRILL_CARDS_4 || [];
    var cards5 = global.PRE_INT_EAT_DRILL_CARDS_5 || [];
    var questionTopics = global.PRE_INT_EAT_QUESTION_CARDS || [];
    var roleplayCards = global.PRE_INT_EAT_ROLEPLAY_CARDS || [];
    if (
      !root ||
      (!cards1.length &&
        !cards2.length &&
        !cards3.length &&
        !cards4.length &&
        !cards5.length &&
        !questionTopics.length &&
        !roleplayCards.length)
    ) {
      return;
    }

    root.innerHTML =
      renderDeck1(cards1) +
      renderDeck2(cards2) +
      renderDeck3(cards3) +
      renderDeck4(cards4) +
      renderDeck5(cards5) +
      (roleplayCards.length ? renderRoleplayCards(roleplayCards) : "") +
      (questionTopics.length ? renderQuestionCards(questionTopics) : "") +
      '<div id="pi-bingo-host"></div>';

    bindCopy(root, '.pi-drill-copy[data-deck="1"]', function () {
      return deck1CopyAll(cards1);
    });
    bindCopy(root, '.pi-drill-copy[data-deck="2"]', function () {
      return deck2CopyAll(cards2);
    });
    bindCopy(root, '.pi-drill-copy[data-deck="3"]', function () {
      return deck3CopyAll(cards3);
    });
    bindCopy(root, '.pi-drill-copy[data-deck="4"]', function () {
      return deck4CopyAll(cards4);
    });
    bindCopy(root, '.pi-drill-copy[data-deck="5"]', function () {
      return deck5CopyAll(cards5);
    });
    bindCopy(root, '.pi-drill-copy[data-deck="q"]', function () {
      return allQuestionsCopyText(questionTopics);
    });
    bindCopy(root, '.pi-drill-copy[data-deck="rp-all"]', function () {
      return allRoleplayCopyText(roleplayCards);
    });
    bindCopy(root, '.pi-drill-copy[data-deck="rp"]', function (btn) {
      var idx = parseInt(btn.getAttribute("data-rp-idx"), 10);
      return roleplayCopyText(roleplayCards[idx]);
    });

    var bingoHost = root.querySelector("#pi-bingo-host");
    if (bingoHost && global.PRE_INT_EAT_KEYWORD_BINGO) {
      PRE_INT_EAT_KEYWORD_BINGO.mount({ root: bingoHost });
    }
  }

  global.PRE_INT_EAT_DRILL_CARDS_ENGINE = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
