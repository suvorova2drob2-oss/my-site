/**
 * Fleabag Phrase vault — Memrise-style SRS (def → recall English).
 * Batches of up to 10. localStorage: fleabag_phrase_srs_v1
 */
(function (global) {
  var STORAGE_KEY = "fleabag_phrase_srs_v1";
  var BATCH = 10;
  /** Hours until next review after a successful “I remember” at that new level (1..). */
  var INTERVALS_H = [4, 24, 72, 168, 336, 720, 1440];

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cardId(phrase) {
    return String(phrase || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function loadStore() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { cards: {} };
      var o = JSON.parse(raw);
      return { cards: (o && o.cards) || {} };
    } catch (e) {
      return { cards: {} };
    }
  }

  function saveStore(store) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {}
  }

  function getMeta(store, id) {
    var m = store.cards[id];
    if (!m) {
      return { level: 0, due: 0, seen: 0, ok: 0 };
    }
    return {
      level: Number(m.level) || 0,
      due: Number(m.due) || 0,
      seen: Number(m.seen) || 0,
      ok: Number(m.ok) || 0,
    };
  }

  function setMeta(store, id, meta) {
    store.cards[id] = {
      level: meta.level,
      due: meta.due,
      seen: meta.seen,
      ok: meta.ok,
    };
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  /** Build dictionary rows from session finale stickers or beat phrases + meanings. */
  function collectDeck(session) {
    var out = [];
    var seen = {};
    function push(phrase, def, ctx, use) {
      var p = String(phrase || "").trim();
      var d = String(def || "").trim();
      if (!p || !d) return;
      var id = cardId(p);
      if (seen[id]) return;
      seen[id] = 1;
      out.push({
        id: id,
        phrase: p,
        def: d,
        ctx: String(ctx || "").trim(),
        use: String(use || "").trim(),
      });
    }

    var stickers =
      session && session.finale && session.finale.stickers
        ? session.finale.stickers
        : [];
    stickers.forEach(function (s) {
      push(
        s.phrase || s.text,
        s.def || s.definition,
        s.ctx || s.context,
        s.use || s.example
      );
    });

    if (out.length) return out;

    ((session && session.beats) || []).forEach(function (b) {
      var meanings = (b.context && b.context.meanings) || [];
      (b.phrases || []).forEach(function (ph, i) {
        var def = "";
        var low = String(ph).toLowerCase();
        for (var m = 0; m < meanings.length; m++) {
          var line = String(meanings[m]);
          if (line.toLowerCase().indexOf(low.slice(0, Math.min(12, low.length))) !== -1) {
            def = line.replace(/^[^=]+=\s*/, "").trim() || line;
            break;
          }
        }
        if (!def && meanings[0]) {
          def = String(meanings[Math.min(i, meanings.length - 1)])
            .replace(/^[^=]+=\s*/, "")
            .trim();
        }
        if (!def) def = "Cool phrase from this episode — say it aloud.";
        push(ph, def, b.label || "", "");
      });
    });

    return out;
  }

  function pickBatch(deck) {
    var store = loadStore();
    var now = Date.now();
    var due = [];
    var fresh = [];
    deck.forEach(function (c) {
      var meta = getMeta(store, c.id);
      if (meta.level === 0 && meta.seen === 0) fresh.push(c);
      else if (meta.due <= now) due.push(c);
    });
    var batch = shuffle(due).concat(shuffle(fresh));
    return batch.slice(0, BATCH).map(function (c) {
      return Object.assign({}, c, { meta: getMeta(store, c.id) });
    });
  }

  function mark(card, remembered) {
    var store = loadStore();
    var meta = getMeta(store, card.id);
    meta.seen += 1;
    var now = Date.now();
    if (remembered) {
      meta.ok += 1;
      meta.level = Math.min(INTERVALS_H.length, meta.level + 1);
      var hours = INTERVALS_H[Math.max(0, meta.level - 1)] || 1440;
      meta.due = now + hours * 3600 * 1000;
    } else {
      meta.level = Math.max(0, meta.level - 1);
      meta.due = now + 10 * 60 * 1000;
    }
    setMeta(store, card.id, meta);
    saveStore(store);
    return meta;
  }

  function statsForDeck(deck) {
    var store = loadStore();
    var now = Date.now();
    var due = 0;
    var learned = 0;
    var newN = 0;
    deck.forEach(function (c) {
      var m = getMeta(store, c.id);
      if (m.level === 0 && m.seen === 0) newN += 1;
      else if (m.due <= now) due += 1;
      if (m.level >= 3) learned += 1;
    });
    return {
      total: deck.length,
      due: due,
      fresh: newN,
      planted: learned,
    };
  }

  function launchBtnHtml(deck) {
    if (!deck || !deck.length) return "";
    var st = statsForDeck(deck);
    return (
      '<button type="button" class="fb-fyp-launch fb-fyp-launch--vault" id="btn-vault-launch">' +
      '<span class="fb-fyp-launch-kicker">Home game · SRS</span>' +
      '<span class="fb-fyp-launch-title">Phrase vault</span>' +
      '<span class="fb-fyp-launch-sub">Def → English · 10 cards · ' +
      st.total +
      " in dictionary · " +
      st.due +
      " due</span></button>"
    );
  }

  function open(opts) {
    opts = opts || {};
    var deck = opts.deck || [];
    if (!deck.length) {
      window.alert("No dictionary phrases with definitions for this episode yet.");
      return;
    }

    var existing = document.getElementById("fb-vault");
    if (existing) existing.remove();

    var batch = pickBatch(deck);
    if (!batch.length) {
      batch = shuffle(deck).slice(0, Math.min(BATCH, deck.length));
    }

    var idx = 0;
    var revealed = false;
    var roundOk = 0;
    var roundFail = 0;

    var layer = document.createElement("div");
    layer.id = "fb-vault";
    layer.className = "fb-vault";
    layer.setAttribute("role", "dialog");
    layer.setAttribute("aria-modal", "true");
    document.body.appendChild(layer);
    document.body.classList.add("fb-vault-open");

    function close() {
      document.body.classList.remove("fb-vault-open");
      layer.remove();
    }

    function render() {
      if (idx >= batch.length) {
        var st = statsForDeck(deck);
        layer.innerHTML =
          '<div class="fb-vault-panel">' +
          '<header class="fb-vault-head">' +
          '<p class="fb-vault-kicker">Phrase vault</p>' +
          "<h2>Round done</h2>" +
          '<button type="button" class="fb-vault-x" data-fb-vault-close aria-label="Close">×</button>' +
          "</header>" +
          '<div class="fb-vault-summary">' +
          "<p><strong>" +
          roundOk +
          "</strong> remembered · <strong>" +
          roundFail +
          "</strong> still learning</p>" +
          "<p class=\"fb-vault-summary-sub\">Forgetting curve saved on this device. Due soon: " +
          st.due +
          " · Planted (lvl 3+): " +
          st.planted +
          " / " +
          st.total +
          "</p>" +
          '<div class="fb-vault-actions">' +
          '<button type="button" class="fb-vault-btn fb-vault-btn--ghost" data-fb-vault-close>Close</button>' +
          '<button type="button" class="fb-vault-btn fb-vault-btn--go" data-fb-vault-again>Another 10</button>' +
          "</div></div></div>";
        layer.querySelectorAll("[data-fb-vault-close]").forEach(function (b) {
          b.addEventListener("click", close);
        });
        layer.querySelector("[data-fb-vault-again]").addEventListener("click", function () {
          close();
          open(opts);
        });
        return;
      }

      var card = batch[idx];
      revealed = false;
      layer.innerHTML =
        '<div class="fb-vault-panel">' +
        '<header class="fb-vault-head">' +
        '<div><p class="fb-vault-kicker">Phrase vault · Memrise-style</p>' +
        "<h2>Recall the English</h2>" +
        '<p class="fb-vault-progress">' +
        (idx + 1) +
        " / " +
        batch.length +
        " · lvl " +
        (card.meta.level || 0) +
        "</p></div>" +
        '<button type="button" class="fb-vault-x" data-fb-vault-close aria-label="Close">×</button>' +
        "</header>" +
        '<div class="fb-vault-card" data-fb-vault-flip>' +
        '<p class="fb-vault-face-label">Definition</p>' +
        '<p class="fb-vault-def">' +
        escapeHtml(card.def) +
        "</p>" +
        (card.ctx
          ? '<p class="fb-vault-ctx">' + escapeHtml(card.ctx) + "</p>"
          : "") +
        '<div class="fb-vault-answer" hidden data-fb-vault-answer>' +
        '<p class="fb-vault-face-label">English</p>' +
        '<p class="fb-vault-phrase">' +
        escapeHtml(card.phrase) +
        "</p>" +
        (card.use
          ? '<p class="fb-vault-use">“' + escapeHtml(card.use) + "”</p>"
          : "") +
        "</div></div>" +
        '<div class="fb-vault-actions" data-fb-vault-actions>' +
        '<button type="button" class="fb-vault-btn fb-vault-btn--go" data-fb-vault-show>Show phrase</button>' +
        "</div>" +
        '<p class="fb-vault-tip">Think of the line first — then reveal. “I remember” pushes it further on the forgetting curve.</p>' +
        "</div>";

      layer.querySelector("[data-fb-vault-close]").addEventListener("click", close);

      var ans = layer.querySelector("[data-fb-vault-answer]");
      var actions = layer.querySelector("[data-fb-vault-actions]");

      function showGrade() {
        revealed = true;
        if (ans) ans.hidden = false;
        actions.innerHTML =
          '<button type="button" class="fb-vault-btn fb-vault-btn--ghost" data-fb-vault-fail>Still learning</button>' +
          '<button type="button" class="fb-vault-btn fb-vault-btn--ok" data-fb-vault-ok>I remember</button>';
        actions.querySelector("[data-fb-vault-fail]").addEventListener("click", function () {
          mark(card, false);
          roundFail += 1;
          idx += 1;
          render();
        });
        actions.querySelector("[data-fb-vault-ok]").addEventListener("click", function () {
          mark(card, true);
          roundOk += 1;
          idx += 1;
          render();
        });
      }

      var showBtn = layer.querySelector("[data-fb-vault-show]");
      if (showBtn) showBtn.addEventListener("click", showGrade);
      var flip = layer.querySelector("[data-fb-vault-flip]");
      if (flip) {
        flip.addEventListener("click", function () {
          if (!revealed) showGrade();
        });
      }
    }

    render();
    layer.addEventListener("click", function (e) {
      if (e.target === layer) close();
    });
  }

  global.FLEABAG_PHRASE_VAULT = {
    collectDeck: collectDeck,
    pickBatch: pickBatch,
    statsForDeck: statsForDeck,
    launchBtnHtml: launchBtnHtml,
    open: open,
  };
})(typeof window !== "undefined" ? window : globalThis);
