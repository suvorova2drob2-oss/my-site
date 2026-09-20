/**
 * Fleabag Workshop — phrase → social meme cards (S2E1 + S2E2 + S2E3).
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
    /* —— S2E3 · Claire’s work —— */
    {
      keys: ["over the top"],
      img: "memes/24-over-the-top-meme.png",
      gloss: "слишком, через край, вычурно (corporate excess)",
    },
    {
      keys: ["she will loathe that"],
      img: "memes/34-she-will-loathe-that-meme.png",
      gloss: "ей это будет глубоко противно (подарок / тон / вкус)",
    },
    {
      keys: [
        "it's attention-grabbing",
        "attention-grabbing",
        "you're sweating so much",
      ],
      img: "memes/26-attention-grabbing-meme.png",
      gloss: "бросается в глаза — тут пот на corporate night",
    },
    {
      keys: ["treat them appallingly"],
      img: "memes/25-treat-them-appallingly-meme.png",
      gloss: "обращаться ужасно — а всё равно «растёт» (courgette line)",
    },
    {
      keys: [
        "i ate a sausage there thinking it was a prune",
        "thinking it was a prune",
        "a prune",
      ],
      img: "memes/36-sausage-prune-meme.png",
      gloss: "кейтеринг-катастрофа: думала prune — оказалась sausage",
    },
    {
      keys: ["off the wagon"],
      img: "memes/27-off-the-wagon-meme.png",
      gloss: "снова пью / сорвалась (после «off the sauce»)",
    },
    {
      keys: ["bit on the nose", "a bit on the nose"],
      img: "memes/28-bit-on-the-nose-meme.png",
      gloss: "слишком в лоб + статуэтка буквально без носа",
    },
    {
      keys: ["you are a tonic"],
      img: "memes/29-you-are-a-tonic-meme.png",
      gloss: "ты — глоток свежести / спасение после фарса",
    },
    {
      keys: ["subsection of success"],
      img: "memes/30-subsection-of-success-meme.png",
      gloss: "«детский стол» наград — не главная лига успеха",
    },
    {
      keys: ["not strictly"],
      img: "memes/35-not-strictly-meme.png",
      gloss: "не строго / не на 100% — с оговоркой, «ну, в каком-то смысле»",
    },
    {
      keys: ["i can't be arsed", "can't be arsed"],
      img: "memes/31-cant-be-arsed-meme.png",
      gloss: "мне лень — BrE can't be bothered",
    },
    {
      keys: [
        "i thought you were snogging finland",
        "snogging finland",
      ],
      img: "memes/32-snogging-finland-meme.png",
      gloss: "целовалась с «Финляндией» — шутка про Klare",
    },
    {
      keys: ["sound tyrant"],
      img: "memes/33-sound-tyrant-meme.png",
      gloss: "тиран тишины — Pam в доме у церкви",
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
    s02e03: {
      img: "memes/00-cover-s02e03-claires-work.png",
      label: "Corporate chaos · sisters · garden",
      gloss: "Claire’s work night · Fleabag S2E3 · swipe → memes",
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
    s02e03: [
      "memes/24-over-the-top-meme.png",
      "memes/34-she-will-loathe-that-meme.png",
      "memes/26-attention-grabbing-meme.png",
      "memes/25-treat-them-appallingly-meme.png",
      "memes/36-sausage-prune-meme.png",
      "memes/27-off-the-wagon-meme.png",
      "memes/28-bit-on-the-nose-meme.png",
      "memes/29-you-are-a-tonic-meme.png",
      "memes/30-subsection-of-success-meme.png",
      "memes/35-not-strictly-meme.png",
      "memes/31-cant-be-arsed-meme.png",
      "memes/32-snogging-finland-meme.png",
      "memes/33-sound-tyrant-meme.png",
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
