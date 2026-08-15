/**
 * FCE / Mastering B2 — sentence halves matching.
 * Two columns: beginnings left, endings right (always seated).
 * Click 1, then click f → f swaps into the seat opposite 1.
 * Drag also swaps (optional).
 *
 * Markup:
 *   .shm-pair[data-line="1"]
 *     .shm-begin …
 *     .shm-slot  (holds one .shm-ending)
 *   Endings may start in #endings-bank; mount seats them into slots.
 *
 * Global: window.FCE_SENTENCE_HALVES_MATCH.mount(options)
 */
(function (global) {
  "use strict";

  function qs(el, sel) {
    return el ? el.querySelector(sel) : null;
  }

  function qsa(el, sel) {
    return el ? Array.prototype.slice.call(el.querySelectorAll(sel)) : [];
  }

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function shuffleInPlace(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  /**
   * @param {object} opts
   * @param {string|Element} opts.pairsRoot
   * @param {string|Element} [opts.bankRoot]
   * @param {boolean} [opts.shuffle=true]
   * @param {string[]} [opts.initialOrder]
   * @param {string|Element} [opts.hintEl]
   * @param {function(Record<string,string>):void} [opts.onChange]
   * @param {function():void} [opts.onInteract]
   * @param {object} [opts.copy]
   */
  function mount(opts) {
    opts = opts || {};
    var pairsRoot =
      typeof opts.pairsRoot === "string"
        ? document.querySelector(opts.pairsRoot)
        : opts.pairsRoot;
    var bankRoot =
      typeof opts.bankRoot === "string"
        ? document.querySelector(opts.bankRoot)
        : opts.bankRoot || null;

    if (!pairsRoot) {
      console.warn("[FCE_SENTENCE_HALVES_MATCH] missing pairsRoot");
      return null;
    }

    var pairSel = opts.pairSelector || ".shm-pair, .shm-row";
    var slotSel = opts.slotSelector || ".shm-slot";
    var endSel = opts.endingSelector || ".shm-ending";
    var beginSel = opts.beginSelector || ".shm-begin";
    var lineAttr = opts.lineAttr || "data-line";
    var letterAttr = opts.letterAttr || "data-letter";
    var doShuffle = opts.shuffle !== false;
    var hintEl =
      typeof opts.hintEl === "string"
        ? document.querySelector(opts.hintEl)
        : opts.hintEl || null;

    var copy = opts.copy || {};
    var hintIdle =
      copy.idle ||
      "Click a beginning, then an ending — it moves opposite that line. (Or drag to swap.)";
    var hintNeedEnding =
      copy.needEnding ||
      "Beginning <strong>{n}</strong> selected — now click the ending that goes with it.";
    var hintNeedBegin =
      copy.needBegin ||
      "Ending <strong>{letter}</strong> selected — now click the beginning.";

    var dragLetter = null;
    var pickLine = null;
    var pickLetter = null;
    var initialLetters = [];

    function pairs() {
      return qsa(pairsRoot, pairSel).filter(function (p) {
        return p.getAttribute(lineAttr);
      });
    }

    /** Never append [attr] to a comma selector — `.shm-pair, .shm-row[data-line=2]` matches the first .shm-pair. */
    function pairByLine(n) {
      var want = String(n);
      var list = pairs();
      for (var i = 0; i < list.length; i++) {
        if (norm(list[i].getAttribute(lineAttr)) === want) return list[i];
      }
      return null;
    }

    function slots() {
      return pairs()
        .map(function (p) {
          return qs(p, slotSel);
        })
        .filter(Boolean);
    }

    function endings() {
      return qsa(pairsRoot, endSel);
    }

    function endingByLetter(letter) {
      letter = norm(letter);
      var list = endings();
      for (var i = 0; i < list.length; i++) {
        if (norm(list[i].getAttribute(letterAttr)) === letter) return list[i];
      }
      return null;
    }

    function letterInSlot(slot) {
      var btn = qs(slot, endSel);
      return btn ? norm(btn.getAttribute(letterAttr)) : "";
    }

    function getLinked() {
      var out = Object.create(null);
      pairs().forEach(function (pair) {
        var ln = norm(pair.getAttribute(lineAttr));
        var slot = qs(pair, slotSel);
        var letter = slot ? letterInSlot(slot) : "";
        if (ln && letter) out[ln] = letter;
      });
      return out;
    }

    function renderHint() {
      if (!hintEl) return;
      if (pickLine != null) {
        hintEl.innerHTML = hintNeedEnding.replace("{n}", String(pickLine));
        return;
      }
      if (pickLetter != null) {
        hintEl.innerHTML = hintNeedBegin.replace(
          "{letter}",
          String(pickLetter)
        );
        return;
      }
      hintEl.innerHTML = hintIdle;
    }

    function clearPicks() {
      pickLine = null;
      pickLetter = null;
      pairs().forEach(function (el) {
        el.classList.remove("is-pick", "is-drag-over");
        var begin = qs(el, beginSel);
        if (begin) begin.classList.remove("is-pick");
      });
      endings().forEach(function (el) {
        el.classList.remove("is-pick", "is-dragging");
      });
      renderHint();
    }

    function clearDragOver() {
      pairs().forEach(function (el) {
        el.classList.remove("is-drag-over");
      });
      endings().forEach(function (el) {
        el.classList.remove("is-dragging");
      });
    }

    function emitChange() {
      if (typeof opts.onChange === "function") opts.onChange(getLinked());
    }

    function interact() {
      if (typeof opts.onInteract === "function") opts.onInteract();
    }

    function syncFilled() {
      slots().forEach(function (slot) {
        var has = !!qs(slot, endSel);
        slot.classList.toggle("is-filled", has);
        slot.classList.toggle("is-empty", !has);
      });
    }

    /** Move ending letter onto target line (swap with whatever is there). */
    function swapOntoLine(letter, targetLine) {
      letter = norm(letter);
      targetLine = String(targetLine);
      var btn = endingByLetter(letter);
      var targetPair = pairByLine(targetLine);
      var targetSlot = targetPair ? qs(targetPair, slotSel) : null;
      if (!btn || !targetSlot) return false;

      var fromSlot = btn.closest(slotSel);
      if (!fromSlot) return false;
      if (fromSlot === targetSlot) {
        clearPicks();
        return false;
      }

      var other = qs(targetSlot, endSel);
      targetSlot.appendChild(btn);
      if (other) fromSlot.appendChild(other);

      syncFilled();
      interact();
      emitChange();
      clearPicks();
      return true;
    }

    function collectEndingButtons() {
      var found = [];
      if (bankRoot) found = qsa(bankRoot, endSel);
      if (!found.length) found = endings();
      return found.slice();
    }

    function seatAll(orderLetters) {
      var btns = collectEndingButtons();
      if (!btns.length) btns = endings();

      var byLetter = Object.create(null);
      btns.forEach(function (b) {
        byLetter[norm(b.getAttribute(letterAttr))] = b;
      });
      // include already-seated
      endings().forEach(function (b) {
        byLetter[norm(b.getAttribute(letterAttr))] = b;
      });

      var letters =
        orderLetters && orderLetters.length
          ? orderLetters.slice()
          : Object.keys(byLetter);

      if (!initialLetters.length) initialLetters = letters.slice();

      var slotList = slots();
      var n = Math.min(slotList.length, letters.length);
      for (var i = 0; i < n; i++) {
        var L = norm(letters[i]);
        var btn = byLetter[L];
        if (btn && slotList[i]) {
          slotList[i].appendChild(btn);
          btn.classList.add("is-seated");
          btn.setAttribute("draggable", "true");
        }
      }
      syncFilled();
      emitChange();
    }

    function distributeInitial() {
      var btns = collectEndingButtons();
      if (!btns.length) btns = endings().slice();
      var letters = btns.map(function (b) {
        return norm(b.getAttribute(letterAttr));
      });
      if (opts.initialOrder && opts.initialOrder.length) {
        letters = opts.initialOrder.map(norm);
      } else if (doShuffle) {
        shuffleInPlace(letters);
      }
      initialLetters = letters.slice();
      seatAll(letters);
    }

    /* ——— Click: 1 then f ——— */

    function selectLine(n) {
      pickLine = n;
      pickLetter = null;
      pairs().forEach(function (el) {
        el.classList.remove("is-pick");
        var begin = qs(el, beginSel);
        if (begin) begin.classList.remove("is-pick");
      });
      endings().forEach(function (el) {
        el.classList.remove("is-pick");
      });
      var pair = pairByLine(n);
      if (pair) {
        pair.classList.add("is-pick");
        var begin = qs(pair, beginSel);
        if (begin) begin.classList.add("is-pick");
      }
      renderHint();
    }

    function selectLetter(letter) {
      pickLetter = letter;
      pickLine = null;
      pairs().forEach(function (el) {
        el.classList.remove("is-pick");
        var begin = qs(el, beginSel);
        if (begin) begin.classList.remove("is-pick");
      });
      endings().forEach(function (el) {
        el.classList.toggle(
          "is-pick",
          norm(el.getAttribute(letterAttr)) === letter
        );
      });
      renderHint();
    }

    function onBeginClick(pair) {
      var n = parseInt(pair.getAttribute(lineAttr), 10);
      if (!n) return;

      if (pickLetter != null) {
        swapOntoLine(pickLetter, n);
        return;
      }

      if (pickLine === n) {
        clearPicks();
        return;
      }

      selectLine(n);
    }

    function onEndingClick(btn) {
      var letter = norm(btn.getAttribute(letterAttr));
      if (!letter) return;

      if (pickLine != null) {
        swapOntoLine(letter, pickLine);
        return;
      }

      if (pickLetter === letter) {
        clearPicks();
        return;
      }

      selectLetter(letter);
    }

    /* ——— Drag (optional) ——— */

    function letterFromDrag(ev) {
      var raw = "";
      try {
        raw = ev.dataTransfer.getData("text/plain");
      } catch (e) {
        raw = "";
      }
      return norm(raw || dragLetter || "");
    }

    function bindEnding(btn) {
      if (btn.__shmBound) return;
      btn.__shmBound = true;
      btn.setAttribute("draggable", "true");
      btn.classList.add("is-seated");

      btn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        onEndingClick(btn);
      });

      btn.addEventListener("dragstart", function (ev) {
        clearPicks();
        dragLetter = norm(btn.getAttribute(letterAttr));
        btn.classList.add("is-dragging");
        try {
          ev.dataTransfer.setData("text/plain", dragLetter);
          ev.dataTransfer.effectAllowed = "move";
        } catch (e) {
          /* ignore */
        }
      });

      btn.addEventListener("dragend", function () {
        btn.classList.remove("is-dragging");
        dragLetter = null;
        clearDragOver();
      });
    }

    function bindPair(pair) {
      if (pair.__shmBound) return;
      pair.__shmBound = true;

      pair.addEventListener("click", function (ev) {
        if (ev.target.closest(endSel)) return;
        if (ev.target.closest("input, textarea, select, a")) return;
        if (ev.target.matches("input, textarea, select")) return;
        onBeginClick(pair);
      });

      pair.addEventListener("dragover", function (ev) {
        if (!dragLetter && !letterFromDrag(ev)) return;
        ev.preventDefault();
        try {
          ev.dataTransfer.dropEffect = "move";
        } catch (e) {
          /* ignore */
        }
        pair.classList.add("is-drag-over");
      });

      pair.addEventListener("dragleave", function (ev) {
        if (!pair.contains(ev.relatedTarget)) {
          pair.classList.remove("is-drag-over");
        }
      });

      pair.addEventListener("drop", function (ev) {
        ev.preventDefault();
        pair.classList.remove("is-drag-over");
        var letter = letterFromDrag(ev);
        var n = parseInt(pair.getAttribute(lineAttr), 10);
        if (!letter || !n) return;
        swapOntoLine(letter, n);
        dragLetter = null;
      });
    }

    pairs().forEach(bindPair);

    var observer = null;
    if (typeof MutationObserver !== "undefined") {
      observer = new MutationObserver(function () {
        endings().forEach(bindEnding);
      });
      observer.observe(pairsRoot, { childList: true, subtree: true });
      if (bankRoot) {
        observer.observe(bankRoot, { childList: true, subtree: true });
      }
    }

    var bootstrap = [];
    if (bankRoot) bootstrap = qsa(bankRoot, endSel);
    if (!bootstrap.length) bootstrap = endings();
    bootstrap.forEach(bindEnding);

    distributeInitial();
    endings().forEach(bindEnding);

    if (bankRoot) {
      bankRoot.hidden = true;
      bankRoot.setAttribute("aria-hidden", "true");
      var bankWrap = bankRoot.closest(".shm-bank");
      if (bankWrap) bankWrap.hidden = true;
    }

    renderHint();

    return {
      getLinked: getLinked,
      getLetter: function (lineNum) {
        return getLinked()[String(lineNum)] || "";
      },
      reset: function () {
        var order = initialLetters.length
          ? initialLetters.slice()
          : endings().map(function (b) {
              return norm(b.getAttribute(letterAttr));
            });
        if (doShuffle && !opts.initialOrder) shuffleInPlace(order);
        seatAll(order);
        clearPicks();
      },
      clearPicks: clearPicks,
      destroy: function () {
        if (observer) observer.disconnect();
      }
    };
  }

  global.FCE_SENTENCE_HALVES_MATCH = {
    mount: mount,
    norm: norm,
    shuffleInPlace: shuffleInPlace
  };
})(typeof window !== "undefined" ? window : globalThis);
