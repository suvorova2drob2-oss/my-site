/** Unit 4 Vocabulary — Films (complete the words) */
(function (W) {
  "use strict";

  var ITEMS = [
    { n: 1, first: "p", accept: ["lot"], len: 3 },
    { n: 2, first: "r", accept: ["omantic comedy", "omanticcomedy"], len: 14 },
    { n: 3, first: "s", accept: ["equel"], len: 5 },
    { n: 4, first: "c", accept: ["ritic"], len: 5 },
    { n: 5, first: "c", accept: ["ast"], len: 3 },
    { n: 6, first: "w", accept: ["estern"], len: 6 },
    { n: 7, first: "s", accept: ["oundtrack"], len: 9 },
    { n: 8, first: "c", accept: ["rew"], len: 3 },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function keyFull(item) {
    return item.first + item.accept[0];
  }

  function matches(item, rest) {
    var full = norm(item.first + rest);
    return item.accept.some(function (a) {
      return full === norm(item.first + a);
    });
  }

  function removeKey(inp) {
    if (!inp) return;
    var next = inp.nextElementSibling;
    if (next && next.classList.contains("film-key")) {
      next.parentNode.removeChild(next);
    }
  }

  function showKey(inp, item) {
    removeKey(inp);
    var span = document.createElement("span");
    span.className = "film-key";
    span.textContent = "\u2192 " + keyFull(item);
    inp.insertAdjacentElement("afterend", span);
  }

  function clearRowMarks(item, root) {
    var inp = document.getElementById("film-" + item.n);
    var row = root.querySelector('[data-n="' + item.n + '"]');
    if (inp) {
      inp.classList.remove("ok", "bad");
      removeKey(inp);
    }
    if (row) row.classList.remove("is-ok", "is-bad");
  }

  function mount() {
    var root = document.getElementById("films-root");
    if (!root) return;

    root.innerHTML =
      '<div class="film-row film-row--ex">' +
      '<span class="film-num">0.</span>' +
      '<span class="film-first">m</span>' +
      '<span class="film-rest film-rest--done">usical</span>' +
      '<span class="film-def">&mdash; a film which has a lot of songs</span>' +
      "</div>";

    ITEMS.forEach(function (item) {
      var row = document.createElement("div");
      row.className = "film-row";
      row.dataset.n = String(item.n);
      row.innerHTML =
        '<span class="film-num">' +
        item.n +
        ".</span>" +
        '<span class="film-first">' +
        item.first +
        "</span>" +
        '<input type="text" class="film-rest" id="film-' +
        item.n +
        '" maxlength="' +
        Math.max(item.len + 4, 18) +
        '" autocomplete="off" spellcheck="false" aria-label="Word ' +
        item.n +
        '" />' +
        '<span class="film-def">&mdash; ' +
        item.def +
        "</span>";
      root.appendChild(row);
    });

    var defs = {
      1: "the main story of a film",
      2: "a film which features a love story",
      3: "the film which continues the story of a previous film",
      4: "the person who writes about a film",
      5: "the people who work in front of the camera",
      6: "a film which has cowboys set in America",
      7: "the music which goes with a film",
      8: "the people who work behind the camera",
    };
    ITEMS.forEach(function (item) {
      var row = root.querySelector('[data-n="' + item.n + '"]');
      if (row) {
        var defEl = row.querySelector(".film-def");
        if (defEl) defEl.textContent = "\u2014 " + defs[item.n];
      }
    });

    ITEMS.forEach(function (item) {
      var inp = document.getElementById("film-" + item.n);
      if (inp) {
        inp.addEventListener("input", function () {
          clearRowMarks(item, root);
          if (fb) {
            fb.textContent = "";
            fb.className = "vocab-feedback";
          }
        });
      }
    });

    var btn = document.getElementById("films-check");
    var btnReset = document.getElementById("films-reset");
    var fb = document.getElementById("films-fb");

    if (btn) {
      btn.addEventListener("click", function () {
        var ok = 0;
        ITEMS.forEach(function (item) {
          var inp = document.getElementById("film-" + item.n);
          var row = root.querySelector('[data-n="' + item.n + '"]');
          if (!inp) return;
          var good = norm(inp.value) && matches(item, inp.value);
          inp.classList.toggle("ok", good);
          inp.classList.toggle("bad", !good);
          if (row) {
            row.classList.toggle("is-ok", good);
            row.classList.toggle("is-bad", !good);
          }
          removeKey(inp);
          if (!good) showKey(inp, item);
          if (good) ok++;
        });
        if (fb) {
          fb.textContent =
            ok === ITEMS.length
              ? "All " + ITEMS.length + " correct."
              : "Score: " +
                ok +
                " / " +
                ITEMS.length +
                ". Wrong or empty gaps show the key (\u2192).";
          fb.className =
            "vocab-feedback " + (ok === ITEMS.length ? "is-ok" : "is-bad");
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, ITEMS.length);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        ITEMS.forEach(function (item) {
          var inp = document.getElementById("film-" + item.n);
          if (inp) {
            inp.value = "";
            inp.classList.remove("ok", "bad");
            removeKey(inp);
          }
          var row = root.querySelector('[data-n="' + item.n + '"]');
          if (row) row.classList.remove("is-ok", "is-bad");
        });
        if (fb) {
          fb.textContent = "";
          fb.className = "vocab-feedback";
        }
      });
    }
  }

  W.U4_VOCAB_FILMS = { mount: mount, ITEMS: ITEMS };
})(window);
