/**
 * Inside Out · phrase → meme cards (cool-words tape 🃏).
 */
(function (global) {
  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[\u2018\u2019\u02bc\u0060]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  var ROWS = [
    { keys: ["isn't that great"], img: "memes/io-meme-isnt-that-great.png", gloss: "«Разве это не здорово?» — радость или сарказм?" },
    { keys: ["things couldn't be better"], img: "memes/io-meme-things-couldnt-be-better.png", gloss: "Всё лучше некуда — правда или маска?" },
    { keys: ["i'll show you my attitude", "show you my attitude"], img: "memes/io-meme-show-attitude.png", gloss: "«Я тебе покажу!» — вызов и attitude." },
    { keys: ["caution, caution", "dangerous smell"], img: "memes/io-meme-caution-smell.png", gloss: "Тревога Disgust: «опасный запах!»" },
    { keys: ["i'm gonna be sick", "gonna be sick"], img: "memes/io-meme-gonna-be-sick.png", gloss: "Меня сейчас стошнит — gross!" },
    { keys: ["look out! sharp turn", "look out"], img: "memes/io-meme-look-out-sharp-turn.png", gloss: "Fear: «Осторожно! Резкий поворот!»" },
    { keys: ["doesn't love us anymore", "he doesn't love us"], img: "memes/io-meme-doesnt-love-us.png", gloss: "Sadness: «он нас больше не любит» — ловушка мысли." },
    { keys: ["you're overreacting", "guys, you're overreacting"], img: "memes/io-meme-overreacting.png", gloss: "«Вы преувеличиваете» — Joy успокаивает." },
    { keys: ["get out of the street", "move it"], img: "memes/io-meme-move-it.png", gloss: "Anger: «Убирайся с дороги! Двигайся!»" },
    { keys: ["step on it, daddy", "step on it"], img: "memes/io-meme-step-on-it.png", gloss: "«Жми на газ!» — опаздываем." },
    { keys: ["can you die from moving"], img: "memes/io-meme-die-from-moving.png", gloss: "«Можно умереть от переезда?» — Fear." },
    { keys: ["live in this smelly car", "why don't we just live"], img: "memes/io-meme-smelly-car.png", gloss: "«Давайте жить в этой вонючей машине»" },
    { keys: ["something died in here", "smells like something died"], img: "memes/io-meme-something-died.png", gloss: "«Пахнет, будто тут что-то сдохло»" },
    { keys: ["butterfly curtains"], img: "memes/io-meme-butterfly-curtains.png", gloss: "«Ничего, что не исправят шторы с бабочками»" },
    { keys: ["empty room is an opportunity"], img: "memes/io-meme-empty-room.png", gloss: "«Пустая комната — это возможность»" },
    { keys: ["get off me", "rubber ball"], img: "memes/io-meme-rubber-ball.png", gloss: "«Отстань! Доставай мяч!» — нужно пространство." },
    { keys: ["solitary confinement"], img: "memes/io-meme-solitary.png", gloss: "«Одиночное заключение» — застряли." },
    { keys: ["going to get rabies", "get rabies"], img: "memes/io-meme-rabies.png", gloss: "«Мы подхватим бешенство!» — Fear раздувает." },
    { keys: ["envy the dead mouse"], img: "memes/io-meme-envy-mouse.png", gloss: "«Завидую мёртвой мыши» — настолько плохо." },
    { keys: ["riley can't live here", "can't live here"], img: "memes/io-meme-cant-live-here.png", gloss: "«Здесь нельзя жить» — не чувствую дом." },
    { keys: ["maybe we could try that", "pizza place down the street"], img: "memes/io-meme-try-that.png", gloss: "Мягкое предложение: «Может, попробуем?»" },
    { keys: ["pizza sounds delicious"], img: "memes/io-meme-pizza-delicious.png", gloss: "«Пицца звучит восхитительно»" },
    { keys: ["who puts broccoli on pizza", "what the heck is that"], img: "memes/io-meme-broccoli-pizza.png", gloss: "«Кто кладёт брокколи на пиццу?!»" },
    { keys: ["you ruined pizza", "congratulations"], img: "memes/io-meme-ruined-pizza.png", gloss: "Сарказм: «Поздравляю, вы испортили пиццу»" },
    { keys: ["san francisco thing", "san fransisco"], img: "memes/io-meme-sf-thing.png", gloss: "«Наверное, это местная фишка»" },
    { keys: ["steel stomach"], img: "memes/io-meme-steel-stomach.png", gloss: "«Стальной желудок» — ест что угодно." },
    { keys: ["what was your favourite part"], img: "memes/io-meme-favourite-part.png", gloss: "«Что тебе больше всего понравилось?»" },
    { keys: ["spitting out of the car window"], img: "memes/io-meme-spitting-window.png", gloss: "«Плевать из окна машины» — лучший момент?" },
    { keys: ["wearing a seat belt"], img: "memes/io-meme-seat-belt.png", gloss: "«Надевать ремень» — безопасность." },
    { keys: ["definitely not when dad was singing", "dad was singing"], img: "memes/io-meme-dad-singing.png", gloss: "«Точно не когда папа пел» — cringe." },
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
          return { img: row.img, gloss: row.gloss || "", phrase: phrase };
        }
      }
    }
    return null;
  }

  var SESSION_COVERS = {
    s01e01: {
      img: "img/inside-out-cover.png",
      label: "Emotions in Action",
      gloss: "Lesson 1 · tap 🃏 on the tape",
    },
  };

  var SESSION_SLIDE_IMGS = {
    s01e01: ROWS.map(function (r) {
      return r.img;
    }),
  };

  function rowByImg(img) {
    for (var i = 0; i < ROWS.length; i++) {
      if (ROWS[i].img === img) return ROWS[i];
    }
    return null;
  }

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

  global.INSIDEOUT_PHRASE_MEMES = {
    resolve: resolve,
    buildCarousel: buildCarousel,
    rows: ROWS,
  };
})(typeof window !== "undefined" ? window : globalThis);
