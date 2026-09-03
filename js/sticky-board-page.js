/**
 * Sticky board page mount — shared UI (Going vegan etalon).
 * window.STICKY_BOARD_PAGE.mount({ pack, allPacks, vocabGamesHref, root, embedded })
 *
 * pack: { id, title, subtitle, backHref, backLabel, blocks, contextTag }
 */
(function (W) {
  "use strict";

  var EMBED_LABELS = {
    lifestyle: "Lifestyle",
    clothes: "Clothes",
    get: "Get",
    run: "Run"
  };

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

  function colorClass(i) {
    return "c" + String(i % 5);
  }

  function fullPhraseFromItem(it) {
    if (it.stickyBefore != null && it.stickyAnswer != null) {
      return (
        String(it.stickyBefore || "") +
        String(it.stickyAnswer || "") +
        String(it.stickyAfter || "")
      ).trim();
    }
    return String(it.phrase || it.hint || "").trim();
  }

  function cardsFromBlocks(blocks, pack) {
    var out = [];
    var tag = pack.contextTag || pack.title || "Unit 1";
    (blocks || []).forEach(function (block) {
      var sp = String(block.name || "Item");
      (block.items || []).forEach(function (it) {
        var expected = W.stickyBoardExpectedAnswer(it);
        var sentence = String(it.contextSentence || "").trim();
        var ctx =
          sp +
          " — " +
          tag +
          "\n\nPractice sentence:\n" +
          sentence +
          "\n\nKey phrase: " +
          fullPhraseFromItem(it) +
          "\n\nHint: " +
          String(it.hint || "");
        out.push({
          speaker: sp,
          clue: W.stickyBoardClueFromItem(it),
          answer: expected,
          ctx: ctx
        });
      });
    });
    return out;
  }

  function embedLabel(pack) {
    return EMBED_LABELS[pack.id] || pack.jumpLabel || pack.id;
  }

  function mount(opts) {
    opts = opts || {};
    var pack = opts.pack;
    if (!pack || !pack.blocks) return;

    var root = opts.root || document.getElementById("sticky-board-root");
    if (!root) return;

    var hideDeckNav = !!opts.hideDeckNav;
    var embedded = !!opts.embedded;
    var allPacks = opts.allPacks || [pack];
    var vocabHref = opts.vocabGamesHref || "../../unit1-lexical-games.html";
    var getPackFn = opts.getPack;

    function resolvePack(id) {
      if (typeof getPackFn === "function") return getPackFn(id);
      for (var i = 0; i < allPacks.length; i++) {
        if (allPacks[i].id === id) return allPacks[i];
      }
      return pack;
    }

    function jumpInner(activeId) {
      var inner = allPacks
        .map(function (p) {
          if (embedded) {
            var cls = "sbp-tab sbp-pack-btn" + (p.id === activeId ? " here" : "");
            return (
              '<button type="button" class="' +
              cls +
              '" role="tab"' +
              (p.id === activeId ? ' aria-selected="true"' : ' aria-selected="false"') +
              ' data-pack-id="' +
              p.id +
              '">' +
              embedLabel(p) +
              "</button>"
            );
          }
          if (p.id === activeId) {
            return (
              '<span class="sbp-tab here" role="tab" aria-selected="true" title="You are here">' +
              embedLabel(p) +
              "</span>"
            );
          }
          return (
            '<a class="sbp-tab" role="tab" aria-selected="false" href="index.html?pack=' +
            encodeURIComponent(p.id) +
            '">' +
            embedLabel(p) +
            "</a>"
          );
        })
        .join("");
      if (!embedded) {
        inner +=
          '<a class="sbp-tab sbp-tab--hub" href="' +
          vocabHref +
          '">Vocabulary Games</a>';
      }
      return inner;
    }

    root.innerHTML =
      '<div class="sbp-page' +
      (embedded ? " sbp-page--embedded" : "") +
      '">' +
      (embedded
        ? ""
        : '<header class="sbp-top">' +
          "<div>" +
          '<h1 id="sbpTitle"></h1>' +
          '<p class="sbp-sub" id="sbpSub"></p>' +
          "</div>" +
          '<a class="back sbp-back" id="sbpBack" href="#">← Back</a>' +
          "</header>") +
      (hideDeckNav
        ? ""
        : '<nav class="sbp-jump sbp-deck-tabs" id="sbpJumpNav" aria-label="Sticky board decks" role="tablist">' +
          jumpInner(pack.id) +
          "</nav>") +
      '<div class="sbp-hud">' +
      '<span class="sbp-hud-score">Done <strong id="sbpDone">0</strong>/<span id="sbpTotal">0</span></span>' +
      '<button type="button" class="sbp-btn-reset" id="sbpShuffle">Shuffle board</button>' +
      "</div>" +
      '<div class="sbp-board" id="sbpBoard" aria-label="Sticky notes"></div>' +
      "</div>";

    var titleEl = document.getElementById("sbpTitle");
    var subEl = document.getElementById("sbpSub");
    var back = document.getElementById("sbpBack");

    function paintMeta(activePack) {
      if (titleEl) titleEl.textContent = activePack.title;
      if (subEl) subEl.innerHTML = activePack.subtitleHtml || activePack.subtitle || "";
      if (back) {
        back.href = activePack.backHref || vocabHref;
        back.textContent = "← " + (activePack.backLabel || "Vocabulary Games");
      }
      if (!embedded) document.title = activePack.title;
    }

    paintMeta(pack);

    var activePack = pack;
    var CARDS = cardsFromBlocks(pack.blocks, pack);
    var deck = [];
    var typeHint = W.STICKY_BOARD_TYPE_HINT || "";

    if (typeof W.stickyBoardAuditSingleWordStickies === "function") {
      W.stickyBoardAuditSingleWordStickies(pack.blocks, pack.id || "u1-sticky");
    }

    function wirePackButtons() {
      var nav = document.getElementById("sbpJumpNav");
      if (!nav || !embedded || hideDeckNav) return;
      nav.querySelectorAll(".sbp-pack-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var id = btn.getAttribute("data-pack-id");
          var next = resolvePack(id);
          if (!next || next.id === activePack.id) return;
          switchPack(next);
        });
      });
    }

    function refreshJumpNav() {
      if (hideDeckNav) return;
      var nav = document.getElementById("sbpJumpNav");
      if (!nav) return;
      nav.innerHTML = jumpInner(activePack.id);
      wirePackButtons();
    }

    function updateHud() {
      var done = 0;
      for (var i = 0; i < deck.length; i++) {
        if (deck[i].ok) done++;
      }
      document.getElementById("sbpDone").textContent = String(done);
      document.getElementById("sbpTotal").textContent = String(deck.length);
    }

    function check(idx, inp, fb, note) {
      var item = deck[idx];
      if (!item || item.ok) return;
      if (W.stickyBoardMatchAns(inp.value, item.answer)) {
        item.ok = true;
        note.classList.add("done");
        inp.disabled = true;
        inp.value = item.answer;
        fb.textContent = "Correct";
        fb.style.color = "var(--success)";
      } else {
        fb.textContent = "Try again";
        fb.style.color = "var(--bad)";
      }
      updateHud();
    }

    function showAns(idx, inp, fb) {
      var item = deck[idx];
      if (!item) return;
      inp.value = item.answer;
      fb.textContent = "Answer shown";
      fb.style.color = "#6b7280";
    }

    function toggleCtx(idx) {
      var el = document.getElementById("sbp-ctx-" + idx);
      if (el) el.classList.toggle("on");
    }

    function render() {
      var board = document.getElementById("sbpBoard");
      board.innerHTML = "";
      for (var i = 0; i < deck.length; i++) {
        (function (idx) {
          var item = deck[idx];
          var note = document.createElement("div");
          note.className = "sbp-note " + colorClass(idx);
          if (item.ok) note.classList.add("done");
          note.style.transform = "rotate(" + (Math.random() * 10 - 5).toFixed(1) + "deg)";

          var tag = document.createElement("div");
          tag.className = "tag";
          tag.textContent = item.speaker;

          var gapEl = document.createElement("div");
          gapEl.className = "sbp-gap-line";
          gapEl.textContent = item.clue;

          var hintEl = document.createElement("div");
          hintEl.className = "sbp-type-hint";
          hintEl.textContent = typeHint;

          var inp = document.createElement("input");
          inp.type = "text";
          inp.className = "sbp-inp";
          inp.placeholder = "one word for ____";
          inp.autocomplete = "off";
          inp.disabled = !!item.ok;
          if (item.ok) inp.value = item.answer;

          var fb = document.createElement("div");
          fb.className = "sbp-fb";
          fb.id = "sbp-fb-" + idx;

          var ctrl = document.createElement("div");
          ctrl.className = "sbp-ctrl";
          ["Check", "Show answer", "Context"].forEach(function (label) {
            var b = document.createElement("button");
            b.type = "button";
            b.className = "sbp-sbtn";
            b.textContent = label;
            b.addEventListener("click", function () {
              if (label === "Check") check(idx, inp, fb, note);
              if (label === "Show answer") showAns(idx, inp, fb);
              if (label === "Context") toggleCtx(idx);
            });
            ctrl.appendChild(b);
          });

          var ctx = document.createElement("div");
          ctx.className = "sbp-ctx";
          ctx.id = "sbp-ctx-" + idx;
          ctx.textContent = item.ctx;

          note.appendChild(tag);
          note.appendChild(gapEl);
          note.appendChild(hintEl);
          note.appendChild(inp);
          note.appendChild(ctrl);
          note.appendChild(fb);
          note.appendChild(ctx);
          board.appendChild(note);

          inp.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
              e.preventDefault();
              check(idx, inp, fb, note);
            }
          });
        })(i);
      }
      updateHud();
    }

    function rebuild() {
      deck = shuffle(
        CARDS.map(function (c) {
          return {
            speaker: c.speaker,
            clue: c.clue,
            answer: c.answer,
            ctx: c.ctx,
            ok: false
          };
        })
      );
      render();
    }

    function switchPack(nextPack) {
      activePack = nextPack;
      if (typeof W.stickyBoardAuditSingleWordStickies === "function") {
        W.stickyBoardAuditSingleWordStickies(nextPack.blocks, nextPack.id || "u1-sticky");
      }
      CARDS = cardsFromBlocks(nextPack.blocks, nextPack);
      paintMeta(nextPack);
      refreshJumpNav();
      rebuild();
    }

    document.getElementById("sbpShuffle").addEventListener("click", rebuild);
    wirePackButtons();
    rebuild();
  }

  W.STICKY_BOARD_PAGE = { mount: mount, cardsFromBlocks: cardsFromBlocks };
})(typeof window !== "undefined" ? window : globalThis);
