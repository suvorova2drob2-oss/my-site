/**
 * Vocabulary · pairs of words → two gaps per sentence.
 * Click a gap, then a pair chip (fills both blanks in that sentence).
 * Global: PREP_VOCAB_PAIR_BOX.mount({ root, pack })
 */
(function (global) {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
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

  /**
   * @param {object} opts
   * @param {HTMLElement|string} opts.root
   * @param {object} opts.pack
   * @param {string} [opts.pack.title]
   * @param {string} [opts.pack.instr]
   * @param {{a:string,b:string}[]} opts.pack.pairs
   * @param {{parts:string[], answers:[string,string]}[]} opts.pack.items
   *   parts: text segments around two gaps — length 3: before, mid, after
   */
  function mount(opts) {
    opts = opts || {};
    var root =
      typeof opts.root === "string"
        ? document.querySelector(opts.root)
        : opts.root;
    var pack = opts.pack;
    if (!root || !pack || !pack.items || !pack.pairs) return null;

    var focusItem = null;
    var focusSlot = 0;
    var filled = {};
    var pairOrder = shuffle(pack.pairs.map(function (p, i) {
      return i;
    }));

    function pairKey(p) {
      return norm(p.a) + "|" + norm(p.b);
    }

    function usedPairKeys() {
      var used = {};
      Object.keys(filled).forEach(function (ik) {
        var row = filled[ik];
        if (row && row[0] && row[1]) {
          used[norm(row[0]) + "|" + norm(row[1])] = 1;
        }
      });
      return used;
    }

    function paint() {
      var used = usedPairKeys();
      var bankHtml =
        '<aside class="vocab-bank-rail si-pair-rail" aria-label="Word pairs">' +
        '<div class="vocab-bank" id="si-pair-bank"><strong>Pairs</strong>' +
        pairOrder
          .map(function (pi) {
            var p = pack.pairs[pi];
            var key = pairKey(p);
            var gone = !!used[key];
            if (gone) {
              return (
                '<span class="bank-chip is-used">' +
                esc(p.a) +
                " + " +
                esc(p.b) +
                "</span>"
              );
            }
            return (
              '<button type="button" class="bank-chip" data-pair-i="' +
              pi +
              '">' +
              esc(p.a) +
              " + " +
              esc(p.b) +
              "</button>"
            );
          })
          .join("") +
        "</div></aside>";

      var listHtml = pack.items
        .map(function (item, i) {
          var ans = filled[i] || ["", ""];
          var parts = item.parts || ["", "", ""];
          var active = focusItem === i;
          function slot(si) {
            var val = ans[si] || "";
            return (
              '<button type="button" class="si-pair-slot gap-word' +
              (val ? "" : " is-empty") +
              (active && focusSlot === si ? " is-active" : "") +
              '" data-item="' +
              i +
              '" data-slot="' +
              si +
              '">' +
              (val ? esc(val) : "\u2014") +
              "</button>"
            );
          }
          return (
            '<p class="si-pair-sent' +
            (active ? " is-focus" : "") +
            '" data-item="' +
            i +
            '"><span class="si-pair-n">' +
            (i + 1) +
            "</span> " +
            esc(parts[0]) +
            " " +
            slot(0) +
            " " +
            esc(parts[1]) +
            " " +
            slot(1) +
            " " +
            esc(parts[2]) +
            "</p>"
          );
        })
        .join("");

      root.innerHTML =
        '<div class="si-vocab-task vocab-wordbox-page">' +
        (pack.title
          ? '<h3 class="si-vocab-title">' + esc(pack.title) + "</h3>"
          : "") +
        (pack.instr
          ? '<p class="vocab-instr">' + esc(pack.instr) + "</p>"
          : "") +
        '<p class="vocab-wordbox-hint" id="si-pair-hint">Click a gap, then a pair on the right — both blanks fill.</p>' +
        '<div class="vocab-bank-workspace">' +
        '<div class="vocab-bank-main" id="si-pair-sents">' +
        listHtml +
        "</div>" +
        bankHtml +
        "</div>" +
        '<div class="vocab-btn-row">' +
        '<button type="button" class="btn-check" data-si-pair="check">Check answers</button>' +
        '<button type="button" class="btn-reset" data-si-pair="reset">Clear</button>' +
        "</div>" +
        '<p class="vocab-feedback" id="si-pair-fb" role="status" aria-live="polite"></p>' +
        "</div>";

      bind();
    }

    function clearMarks() {
      root.querySelectorAll(".si-pair-slot").forEach(function (el) {
        el.classList.remove("is-ok", "is-bad");
      });
      var fb = root.querySelector("#si-pair-fb");
      if (fb) {
        fb.textContent = "";
        fb.className = "vocab-feedback";
      }
    }

    function applyPair(pi) {
      var p = pack.pairs[pi];
      if (!p) return;
      var target = focusItem;
      if (target == null) {
        for (var i = 0; i < pack.items.length; i++) {
          var row = filled[i];
          if (!row || !row[0] || !row[1]) {
            target = i;
            break;
          }
        }
      }
      if (target == null) return;

      Object.keys(filled).forEach(function (ik) {
        var row = filled[ik];
        if (
          row &&
          norm(row[0]) === norm(p.a) &&
          norm(row[1]) === norm(p.b) &&
          String(ik) !== String(target)
        ) {
          delete filled[ik];
        }
      });

      filled[target] = [p.a, p.b];
      focusItem = target;
      focusSlot = 0;
      clearMarks();
      paint();
    }

    function bind() {
      root.querySelectorAll(".si-pair-slot").forEach(function (btn) {
        btn.addEventListener("click", function () {
          focusItem = parseInt(btn.getAttribute("data-item"), 10);
          focusSlot = parseInt(btn.getAttribute("data-slot"), 10);
          clearMarks();
          paint();
        });
      });
      root.querySelectorAll("[data-pair-i]").forEach(function (chip) {
        chip.addEventListener("click", function () {
          applyPair(parseInt(chip.getAttribute("data-pair-i"), 10));
        });
      });
      var checkBtn = root.querySelector('[data-si-pair="check"]');
      var resetBtn = root.querySelector('[data-si-pair="reset"]');
      if (checkBtn) {
        checkBtn.addEventListener("click", function () {
          var ok = 0;
          var total = pack.items.length;
          pack.items.forEach(function (item, i) {
            var got = filled[i] || ["", ""];
            var want = item.answers || [];
            var good =
              norm(got[0]) === norm(want[0]) &&
              norm(got[1]) === norm(want[1]);
            if (good) ok++;
            root.querySelectorAll('.si-pair-slot[data-item="' + i + '"]').forEach(
              function (el) {
                el.classList.toggle("is-ok", good && !!got[0]);
                el.classList.toggle("is-bad", !good && (!!got[0] || !!got[1]));
              }
            );
          });
          var fb = root.querySelector("#si-pair-fb");
          if (fb) {
            fb.className =
              "vocab-feedback show " + (ok === total ? "is-ok" : "is-bad");
            fb.textContent =
              ok === total
                ? "All " + total + " pairs correct."
                : ok + " / " + total + " pairs correct — try again.";
          }
        });
      }
      if (resetBtn) {
        resetBtn.addEventListener("click", function () {
          filled = {};
          focusItem = null;
          focusSlot = 0;
          pairOrder = shuffle(pack.pairs.map(function (_p, i) {
            return i;
          }));
          paint();
        });
      }
    }

    paint();
    return { remount: paint };
  }

  global.PREP_VOCAB_PAIR_BOX = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
