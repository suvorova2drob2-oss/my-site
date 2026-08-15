/** Unit 2 WB — get phrasal verbs (High Energy Ex. 2)

 *  Etalon: unit1-vocabulary/get/meeting-my-hero.html — chip → gap, learner types correct form

 */

(function (W) {

  "use strict";



  var BANK = [

    "get at",

    "get away with",

    "get into",

    "get onto",

    "get over",

    "get round to",

    "get through",

    "get together with",

  ];



  var GAPS = [

    { n: 1, base: "get together with", alts: ["got together with", "gotten together with"] },

    { n: 2, base: "get onto", alts: ["got onto", "gotten onto"] },

    { n: 3, base: "get into", alts: ["getting into", "get into"] },

    { n: 4, base: "get round to", alts: ["get round to", "get around to"] },

    { n: 5, base: "get over", alts: ["getting over", "get over"] },

    { n: 6, base: "get away with", alts: ["got away with", "gotten away with"] },

    { n: 7, base: "get at", alts: ["getting at", "get at"] },

    { n: 8, base: "get through", alts: ["got through", "gotten through"] },

  ];



  function norm(s) {

    return String(s || "")

      .trim()

      .toLowerCase()

      .replace(/\u2019/g, "'")

      .replace(/\s+/g, " ");

  }



  function escAttr(s) {

    return String(s || "")

      .replace(/&/g, "&amp;")

      .replace(/"/g, "&quot;")

      .replace(/</g, "&lt;");

  }



  function mount(cfg) {

    cfg = cfg || {};

    var storyEl = document.getElementById(cfg.storyId || "story-text");

    var bankEl = document.getElementById(cfg.bankId || "phrase-bank");

    if (!storyEl || !bankEl) return;



    var assignments = {};

    var selected = null;

    var fb = document.getElementById("fb");



    function inputEl(n) {

      return storyEl.querySelector('.vocab-story-gap[data-n="' + n + '"]');

    }



    function usedBases() {

      var u = {};

      Object.keys(assignments).forEach(function (k) {

        if (assignments[k]) u[assignments[k]] = true;

      });

      return u;

    }



    function syncBank() {

      var used = usedBases();

      bankEl.querySelectorAll(".vocab-story-chip").forEach(function (chip) {

        var w = chip.getAttribute("data-w");

        chip.classList.toggle("is-used", !!used[w]);

        chip.classList.toggle("is-selected", selected === w);

        chip.disabled = !!used[w];

      });

    }



    function clearAssignmentForBase(base) {

      Object.keys(assignments).forEach(function (k) {

        if (assignments[k] === base) delete assignments[k];

      });

    }



    function gapInputHtml(n, values) {

      var val = values[n] || "";

      return (

        '<input type="text" class="vocab-story-gap' +

        (val ? " is-filled" : "") +

        '" data-n="' +

        n +

        '" value="' +

        escAttr(val) +

        '" placeholder="(' +

        n +

        ')" aria-label="Gap ' +

        n +

        '" autocomplete="off" spellcheck="false" />' +

        '<span class="vocab-story-gap-hint" data-hint="' +

        n +

        '"></span>'

      );

    }



    function renderStory(clearValues) {

      var values = {};

      if (!clearValues) {

        GAPS.forEach(function (g) {

          var el = inputEl(g.n);

          values[g.n] = el ? el.value : "";

        });

      }



      storyEl.innerHTML =

        "<h3>Keeping fit</h3>" +

        "<p>Last month, when I " +

        gapInputHtml(1, values) +

        " my friends for a catch up, we " +

        gapInputHtml(2, values) +

        " the subject of keeping fit. Dana had recently started attending a dance class at the local leisure centre and was really " +

        gapInputHtml(3, values) +

        " it. She tried to get everyone to give it a try, but they said they were too busy to " +

        gapInputHtml(4, values) +

        " going. I told her I was still " +

        gapInputHtml(5, values) +

        " a bad cold. When she didn&rsquo;t press me, I thought I had " +

        gapInputHtml(6, values) +

        " it. But as the week continued, she kept " +

        gapInputHtml(7, values) +

        " me to do more exercise until she finally " +

        gapInputHtml(8, values) +

        " to me and I gave in. To be fair, it&rsquo;s been a lot of fun!</p>";



      storyEl.querySelectorAll(".vocab-story-gap").forEach(function (inp) {

        inp.addEventListener("focus", onGapFocus);

        inp.addEventListener("input", onGapInput);

      });

    }



    function onGapFocus(ev) {

      var inp = ev.currentTarget;

      var n = Number(inp.getAttribute("data-n"));

      clearMarks();

      if (!selected) return;

      var word = selected;

      clearAssignmentForBase(word);

      Object.keys(assignments).forEach(function (k) {

        if (Number(k) === n) delete assignments[k];

      });

      assignments[n] = word;

      inp.value = word;

      inp.classList.add("is-filled");

      selected = null;

      syncBank();

    }



    function onGapInput(ev) {

      var inp = ev.currentTarget;

      var n = Number(inp.getAttribute("data-n"));

      inp.classList.toggle("is-filled", !!norm(inp.value));

      if (!norm(inp.value)) delete assignments[n];

      syncBank();

      clearMarks();

    }



    function buildBank() {

      bankEl.innerHTML = "<strong>Phrases</strong>";

      BANK.forEach(function (w) {

        var chip = document.createElement("button");

        chip.type = "button";

        chip.className = "vocab-story-chip";

        chip.setAttribute("data-w", w);

        chip.textContent = w;

        chip.addEventListener("click", function () {

          if (usedBases()[w]) return;

          selected = selected === w ? null : w;

          syncBank();

          clearMarks();

        });

        bankEl.appendChild(chip);

      });

    }



    function clearMarks() {

      storyEl.querySelectorAll(".vocab-story-gap").forEach(function (g) {

        g.classList.remove("is-ok", "is-bad");

      });

      storyEl.querySelectorAll(".vocab-story-gap-hint").forEach(function (h) {

        h.textContent = "";

        h.classList.remove("is-show");

      });

      if (fb) {

        fb.textContent = "";

        fb.className = "vocab-story-feedback";

      }

    }



    function check() {

      var missing = GAPS.some(function (g) {

        var el = inputEl(g.n);

        return !norm(el && el.value);

      });

      if (missing) {

        if (fb) {

          fb.textContent = "Fill all 8 gaps with the correct form, then check again.";

          fb.className = "vocab-story-feedback is-bad";

        }

        return;

      }



      var ok = 0;

      GAPS.forEach(function (g) {

        var el = inputEl(g.n);

        var val = norm(el.value);

        var good = g.alts.some(function (a) {

          return norm(a) === val;

        });

        if (el) {

          el.classList.toggle("is-ok", good);

          el.classList.toggle("is-bad", !good);

        }

        var hintEl = storyEl.querySelector('.vocab-story-gap-hint[data-hint="' + g.n + '"]');

        if (hintEl) {

          hintEl.textContent = good ? "" : g.alts[0];

          hintEl.classList.toggle("is-show", !good);

        }

        if (good) ok++;

      });



      if (fb) {

        fb.textContent =

          ok === GAPS.length

            ? "All " + GAPS.length + " correct."

            : "Score: " + ok + " / " + GAPS.length + ".";

        fb.className = "vocab-story-feedback " + (ok === GAPS.length ? "is-ok" : "is-bad");

      }



      if (W.MasteringB2Progress) {

        W.MasteringB2Progress.recordCheckFromDom(ok, GAPS.length);

      }

    }



    function reset() {

      assignments = {};

      selected = null;

      renderStory(true);

      syncBank();

      clearMarks();

    }



    buildBank();

    renderStory(false);

    syncBank();



    var btnCheck = document.getElementById("btn-check");

    var btnReset = document.getElementById("btn-reset");

    if (btnCheck) btnCheck.addEventListener("click", check);

    if (btnReset) btnReset.addEventListener("click", reset);



    return { GAPS: GAPS, BANK: BANK };

  }



  W.U2_GET_PHRASAL = { mount: mount, GAPS: GAPS, BANK: BANK };

})(window);

