/**
 * Fleabag Workshop — phrase → social meme cards (S2E1 set).
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

  global.FLEABAG_PHRASE_MEMES = {
    resolve: resolve,
    rows: ROWS,
  };
})(typeof window !== "undefined" ? window : globalThis);
