/**
 * Fleabag Workshop — phrase → social meme cards (S2E1 + S2E2).
 * Used by fleabag-lesson.js cool-words tape (click phrase → meme).
 */
(function (global) {
  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[\u2018\u2019\u02bc\u0060]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  /** Longer / more specific keys first */
  var ROWS = [
    {
      keys: [
        "go off the sauce",
        "off the sauce",
      ],
      img: "memes/01-go-off-the-sauce-meme.png",
      gloss: "завязать с алкоголем (сленг — не про кетчуп)",
    },
    {
      keys: [
        "ghastly without help, i imagine",
        "ghastly without help",
      ],
      img: "memes/02-ghastly-without-help-meme-v2.png",
      gloss: "без помощи — это, наверное, кошмар (сухо по-британски)",
    },
    {
      keys: ["prudish people"],
      img: "memes/03-prudish-people-meme.png",
      gloss: "слишком чопорные / легко шокируются",
    },
    {
      keys: [
        "do you have a spare one",
        "fellow smoker",
      ],
      img: "memes/04-fellow-smoker-spare-one-meme.png",
      gloss: "ледокол: «не закурить?» — повод завести разговор",
    },
    {
      keys: ["we just hit it off"],
      img: "memes/05-we-just-hit-it-off-meme.png",
      gloss: "сразу нашли общий язык (как идеальный мэтч)",
    },
    {
      keys: ["cause quite a stir"],
      img: "memes/06-cause-quite-a-stir-meme.png",
      gloss: "вызвать большой переполох / разогреть ленту",
    },
    {
      keys: ["slug it over"],
      img: "memes/07-slug-it-over-meme.png",
      gloss: "вкалывать над деталями, пока не станет как работа",
    },
    {
      keys: ["a chunk of change", "chunk of change"],
      img: "memes/08-chunk-of-change-meme.png",
      gloss: "приличная сумма денег (informal)",
    },
    {
      keys: ["jump ship"],
      img: "memes/09-jump-ship-meme.png",
      gloss: "срочно свалить с проекта / работы / чата",
    },
    {
      keys: ["sturdy hand towels"],
      img: "memes/10-sturdy-hand-towels-meme.png",
      gloss: "толстые полотенца vs неловкое недопонимание",
    },
    {
      keys: ["she got her spotlight"],
      img: "memes/11-she-got-her-spotlight-meme.png",
      gloss: "её звёздный момент — весь свет на ней",
    },
    /* —— S2E2 · Counselling —— */
    {
      keys: ["gives me some edge"],
      img: "memes/12-gives-me-some-edge-meme.png",
      gloss: "добавляет перчинку / дерзости (vibe — не «острый нож»)",
    },
    {
      keys: [
        "pay him back in instalments",
        "pay in instalments",
      ],
      img: "memes/13-pay-in-instalments-meme.png",
      gloss: "платить частями / в рассрочку (BrE: instalments)",
    },
    {
      keys: ["sorry about all the tat"],
      img: "memes/14-sorry-about-all-the-tat-meme.png",
      gloss: "извини за весь этот хлам / безвкусицу (tat = junk)",
    },
    {
      keys: ["feel rotten"],
      img: "memes/15-feel-rotten-meme.png",
      gloss: "чувствовать себя отвратительно / паршиво",
    },
    {
      keys: ["spit guilty"],
      img: "memes/16-spit-guilty-meme.png",
      gloss: "фраза из сцены (≈ plead guilty — признать вину)",
    },
    {
      keys: [
        "want to be ahead of the game",
        "ahead of the game",
      ],
      img: "memes/17-ahead-of-the-game-meme.png",
      gloss: "быть на шаг впереди / подготовиться заранее",
    },
    {
      keys: ["talk him down"],
      img: "memes/18-talk-him-down-meme.png",
      gloss: "успокоить / уговорить отступить (de-escalate)",
    },
    {
      keys: ["blow hot and cold"],
      img: "memes/19-blow-hot-and-cold-meme.png",
      gloss: "метаться — то тепло, то холодно (mixed signals)",
    },
    {
      keys: [
        "the birth took its toll",
        "it took its toll",
      ],
      img: "memes/20-it-took-its-toll-meme.png",
      gloss: "сказалось / забрало силы (Harry twist)",
    },
    {
      keys: ["insidious"],
      img: "memes/21-insidious-meme.png",
      gloss: "коварный / подлый — медленно и незаметно",
    },
    {
      keys: ["pawing"],
      img: "memes/22-pawing-meme.png",
      gloss: "лапать / залезать руками (creepy touch)",
    },
    {
      keys: [
        "you are a weaky at your very core",
        "weaky at your very core",
      ],
      img: "memes/23-weaky-at-your-core-meme.png",
      gloss: "внутри ты слабак — weaky/strongy из серии (не опечатка)",
    },
  ];

  function resolve(phrase) {
    var key = norm(phrase);
    if (!key) return null;
    for (var i = 0; i < ROWS.length; i++) {
      var row = ROWS[i];
      for (var j = 0; j < row.keys.length; j++) {
        var k = norm(row.keys[j]);
        if (!k) continue;
        if (key === k || key.indexOf(k) !== -1 || k.indexOf(key) !== -1) {
          return {
            img: row.img,
            gloss: row.gloss || "",
            phrase: phrase,
          };
        }
      }
    }
    return null;
  }

  function rowByImg(img) {
    for (var i = 0; i < ROWS.length; i++) {
      if (ROWS[i].img === img) return ROWS[i];
    }
    return null;
  }

  var SESSION_COVERS = {
    s02e01: {
      img: "memes/00-cover-esc-sunday-30aug.png",
      label: "We already say these out loud",
      gloss: "Fleabag S2E1 · swipe → meme cards",
    },
    s02e02: {
      img: "memes/00-cover-s02e02-counselling.png",
      label: "Uncomfortable truths · cool phrases",
      gloss: "Counselling confessions · Fleabag S2E2 · swipe →",
    },
  };

  var SESSION_SLIDE_IMGS = {
    s02e01: [
      "memes/01-go-off-the-sauce-meme.png",
      "memes/02-ghastly-without-help-meme-v2.png",
      "memes/03-prudish-people-meme.png",
      "memes/04-fellow-smoker-spare-one-meme.png",
      "memes/05-we-just-hit-it-off-meme.png",
      "memes/06-cause-quite-a-stir-meme.png",
      "memes/07-slug-it-over-meme.png",
      "memes/08-chunk-of-change-meme.png",
      "memes/09-jump-ship-meme.png",
      "memes/10-sturdy-hand-towels-meme.png",
      "memes/11-she-got-her-spotlight-meme.png",
    ],
    s02e02: [
      "memes/12-gives-me-some-edge-meme.png",
      "memes/13-pay-in-instalments-meme.png",
      "memes/14-sorry-about-all-the-tat-meme.png",
      "memes/15-feel-rotten-meme.png",
      "memes/16-spit-guilty-meme.png",
      "memes/17-ahead-of-the-game-meme.png",
      "memes/18-talk-him-down-meme.png",
      "memes/19-blow-hot-and-cold-meme.png",
      "memes/20-it-took-its-toll-meme.png",
      "memes/21-insidious-meme.png",
      "memes/22-pawing-meme.png",
      "memes/23-weaky-at-your-core-meme.png",
    ],
  };

  /** Cover + phrase cards in carousel order (improv · pics swipe). */
  function buildCarousel(sessionId) {
    var sid = String(sessionId || "").trim();
    var cover = SESSION_COVERS[sid];
    var slides = SESSION_SLIDE_IMGS[sid] || [];
    if (!cover && !slides.length) return [];
    var deck = [];
    if (cover) {
      deck.push({
        img: cover.img,
        label: cover.label || "Cover",
        gloss: cover.gloss || "",
        kind: "cover",
      });
    }
    slides.forEach(function (img) {
      var row = rowByImg(img);
      deck.push({
        img: img,
        label: row ? row.keys[0] : "",
        gloss: row ? row.gloss || "" : "",
        kind: "phrase",
      });
    });
    return deck;
  }

  global.FLEABAG_PHRASE_MEMES = {
    resolve: resolve,
    buildCarousel: buildCarousel,
    rows: ROWS,
  };
})(typeof window !== "undefined" ? window : globalThis);
