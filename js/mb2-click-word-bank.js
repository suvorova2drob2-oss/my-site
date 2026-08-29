/** Closed word banks: click chip → click gap slot (no typing). */
(function (W) {
  "use strict";

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function slotValue(s) {
    var v = (s.getAttribute("data-val") || "").trim();
    if (v) return v;
    v = (s.textContent || "").replace(/\s+/g, " ").trim();
    if (!v || v === "—" || v === "-" || v.indexOf("— ") === 0) return "";
    return v;
  }

  function ensureHint(slot) {
    var h = slot.nextElementSibling;
    if (!h || !h.classList.contains("mb2-key-hint")) {
      h = document.createElement("span");
      h.className = "mb2-key-hint";
      slot.insertAdjacentElement("afterend", h);
    }
    return h;
  }

  /**
   * @param {{
   *   bankEl: Element,
   *   slots: Element[]|NodeList,
   *   unique?: boolean,
   * }} opts
   */
  function wire(opts) {
    var bank = opts.bankEl;
    var slots = Array.prototype.slice.call(opts.slots || []);
    var unique = opts.unique !== false;
    var pick = "";

    function refreshUsed() {
      if (!unique || !bank) return;
      var used = {};
      slots.forEach(function (s) {
        var v = slotValue(s);
        if (v) used[norm(v)] = true;
      });
      bank.querySelectorAll(".mb2-word-chip").forEach(function (c) {
        var w = norm(c.getAttribute("data-w"));
        var on = !!used[w];
        c.classList.toggle("is-used", on);
        if (on && c.classList.contains("is-on")) {
          c.classList.remove("is-on");
          pick = "";
        }
      });
    }

    if (bank) {
      bank.addEventListener("click", function (e) {
        var chip = e.target.closest(".mb2-word-chip");
        if (!chip || chip.classList.contains("is-used")) return;
        pick = chip.getAttribute("data-w") || "";
        bank.querySelectorAll(".mb2-word-chip").forEach(function (c) {
          c.classList.toggle("is-on", c === chip);
        });
      });
    }

    slots.forEach(function (slot) {
      slot.addEventListener("click", function () {
        /* Second click on a filled slot with no new pick → clear, so learner can redo */
        if (!pick) {
          if (slotValue(slot)) {
            slot.setAttribute("data-val", "");
            slot.textContent = "—";
            slot.classList.add("is-empty");
            slot.classList.remove("is-ok", "is-bad");
            var h0 = slot.nextElementSibling;
            if (h0 && h0.classList.contains("mb2-key-hint")) {
              h0.textContent = "";
              h0.classList.remove("is-show");
            }
            refreshUsed();
          }
          return;
        }
        slot.setAttribute("data-val", pick);
        slot.textContent = pick;
        slot.classList.remove("is-empty", "is-ok", "is-bad");
        var h = slot.nextElementSibling;
        if (h && h.classList.contains("mb2-key-hint")) {
          h.textContent = "";
          h.classList.remove("is-show");
        }
        pick = "";
        if (bank) {
          bank.querySelectorAll(".mb2-word-chip").forEach(function (c) {
            c.classList.remove("is-on");
          });
        }
        refreshUsed();
      });
    });

    refreshUsed();
    return {
      getValues: function () {
        return slots.map(slotValue);
      },
      clearMarks: function () {
        slots.forEach(function (s) {
          s.classList.remove("is-ok", "is-bad");
          var h = s.nextElementSibling;
          if (h && h.classList.contains("mb2-key-hint")) {
            h.textContent = "";
            h.classList.remove("is-show");
          }
        });
      },
      /**
       * @param {number} i
       * @param {boolean} good
       * @param {string|null} reveal  correct answer to show when wrong
       */
      mark: function (i, good, reveal) {
        var s = slots[i];
        if (!s) return;
        s.classList.toggle("is-ok", !!good);
        s.classList.toggle("is-bad", !good);
        var hint = ensureHint(s);
        if (good) {
          hint.textContent = "";
          hint.classList.remove("is-show");
          return;
        }
        if (reveal) {
          /* Keep learner answer in the slot; put the key in a green → hint */
          if (!slotValue(s)) {
            s.textContent = "—";
            s.classList.add("is-empty");
          }
          hint.textContent = reveal;
          hint.classList.add("is-show");
        }
      },
      refreshUsed: refreshUsed,
      slotValue: slotValue,
    };
  }

  function fillBank(el, words) {
    if (!el) return;
    el.innerHTML = words
      .map(function (w) {
        return (
          '<button type="button" class="mb2-word-chip" data-w="' +
          String(w).replace(/"/g, "&quot;") +
          '">' +
          w +
          "</button>"
        );
      })
      .join("");
  }

  W.MB2_CLICK_WORD_BANK = {
    wire: wire,
    fillBank: fillBank,
    norm: norm,
    slotValue: slotValue,
  };
})(window);
