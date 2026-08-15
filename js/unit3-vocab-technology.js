/** Unit 3 Vocabulary — Technology collocations (coursebook word box) */
(function (W) {
  "use strict";

  var BANK = [
    "access",
    "call",
    "comment",
    "communicate",
    "share",
    "take",
    "use",
  ];

  var GAPS = [
    { n: 1, insert: "access", accept: ["access", "accesses", "accessing"] },
    { n: 2, insert: "commented", accept: ["comment", "comments", "commented", "commenting"] },
    { n: 3, insert: "use", accept: ["use", "uses", "used", "using"] },
    { n: 4, insert: "communicate", accept: ["communicate", "communicates", "communicated", "communicating"] },
    { n: 5, insert: "sharing", accept: ["share", "shares", "shared", "sharing"] },
    { n: 6, insert: "take", accept: ["take", "takes", "took", "taken", "taking"] },
    { n: 7, insert: "call", accept: ["call", "calls", "called", "calling"] },
    { n: 8, insert: "using", accept: ["use", "uses", "used", "using"] },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function accepts(gap, value) {
    var got = norm(value);
    if (!got) return false;
    return (gap.accept || []).some(function (a) {
      return norm(a) === got;
    });
  }

  function mount(cfg) {
    cfg = cfg || {};
    var host = document.getElementById(cfg.hostId || "sentences");
    var bankHost = document.getElementById(cfg.bankId || "word-bank");
    if (!host || !bankHost) return;

    var state = {};
    var focused = null;
    var fb = document.getElementById("fb");
    var hint = document.getElementById("wb-hint");

    function renderBank() {
      bankHost.innerHTML = "<strong>Verbs</strong>";
      BANK.forEach(function (word) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "bank-chip";
        btn.textContent = word;
        btn.dataset.word = word;
        btn.addEventListener("click", function () {
          if (!focused) {
            if (hint) hint.textContent = "First click a gap (1\u20138), then click a verb.";
            return;
          }
          var gap = GAPS.filter(function (g) {
            return g.n === focused;
          })[0];
          state[focused] = gap && gap.insert ? gap.insert : word;
          updateSlot(focused);
          if (hint) hint.textContent = "Gap " + focused + " \u2014 edit in the box or pick another verb.";
          clearMarks();
        });
        bankHost.appendChild(btn);
      });
    }

    function updateSlot(n) {
      var slot = document.getElementById("slot-" + n);
      var word = state[n] || "";
      if (!slot) return;
      slot.value = word;
      slot.classList.toggle("is-empty", !word);
    }

    function clearMarks() {
      GAPS.forEach(function (g) {
        var slot = document.getElementById("slot-" + g.n);
        if (slot) slot.classList.remove("is-ok", "is-bad");
      });
      if (fb) {
        fb.textContent = "";
        fb.className = "vocab-feedback";
      }
    }

    function slotInput(n, width) {
      return (
        '<input type="text" class="wb-slot gap-verb" id="slot-' +
        n +
        '" data-n="' +
        n +
        '" maxlength="32" autocomplete="off" spellcheck="false" aria-label="Gap ' +
        n +
        '" style="width:' +
        (width || "7rem") +
        ';" />'
      );
    }

    host.innerHTML =
      '<p class="gap-sent"><span class="gap-num">0.</span> Whenever I <span class="gap-example-word">use</span> <strong>predictive text</strong>, I end up sending people absolute nonsense.</p>' +
      '<p class="gap-sent"><span class="gap-num">1.</span> Nowadays, because of smartphones, you can ' +
      slotInput(1) +
      ' <strong>the internet</strong> anytime, anywhere.</p>' +
      '<p class="gap-sent"><span class="gap-num">2.</span> Have you ever ' +
      slotInput(2, "8rem") +
      ' <strong>on a blog, online article or video</strong>?</p>' +
      '<p class="gap-sent"><span class="gap-num">3.</span> I wish Tom would ' +
      slotInput(3) +
      ' <strong>a headset</strong> when gaming &ndash; it&rsquo;s so loud!</p>' +
      '<p class="gap-sent"><span class="gap-num">4.</span> Most people stay in touch and ' +
      slotInput(4, "8.5rem") +
      ' <strong>with people</strong> via social media.</p>' +
      '<p class="gap-sent"><span class="gap-num">5.</span> Sandra is always ' +
      slotInput(5, "8rem") +
      ' <strong>funny gifs</strong> on our group chat.</p>' +
      '<p class="gap-sent"><span class="gap-num">6.</span> Unless you want to be a photographer, it&rsquo;s fine to ' +
      slotInput(6) +
      ' <strong>photos</strong> with your phone.</p>' +
      '<p class="gap-sent"><span class="gap-num">7.</span> My aunt still prefers to ' +
      slotInput(7) +
      ' <strong>me</strong> using a landline.</p>' +
      '<p class="gap-sent"><span class="gap-num">8.</span> Can you please stop ' +
      slotInput(8, "8rem") +
      ' <strong>abbreviations</strong> in your messages.</p>';

    host.querySelectorAll(".wb-slot").forEach(function (slot) {
      slot.addEventListener("focus", function () {
        focused = parseInt(slot.getAttribute("data-n"), 10);
        host.querySelectorAll(".wb-slot").forEach(function (s) {
          s.classList.toggle("is-focused", s === slot);
        });
        if (hint) hint.textContent = "Gap " + focused + " selected \u2014 type or click a verb on the right.";
        clearMarks();
      });
      slot.addEventListener("input", function () {
        var n = parseInt(slot.getAttribute("data-n"), 10);
        state[n] = slot.value;
        slot.classList.toggle("is-empty", !norm(slot.value));
        clearMarks();
      });
    });

    renderBank();

    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        GAPS.forEach(function (g) {
          var slot = document.getElementById("slot-" + g.n);
          var val = slot ? slot.value : state[g.n] || "";
          var good = accepts(g, val);
          if (slot) {
            slot.classList.toggle("is-ok", good && norm(val));
            slot.classList.toggle("is-bad", !good || !norm(val));
          }
          if (good) ok++;
        });

        if (fb) {
          fb.textContent =
            ok === GAPS.length
              ? "All " + GAPS.length + " correct."
              : "Score: " + ok + " / " + GAPS.length + ".";
          fb.className =
            "vocab-feedback " + (ok === GAPS.length ? "is-ok" : "is-bad");
        }

        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, GAPS.length);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        state = {};
        focused = null;
        GAPS.forEach(function (g) {
          var slot = document.getElementById("slot-" + g.n);
          if (slot) {
            slot.value = "";
            slot.classList.remove("is-focused", "is-ok", "is-bad", "is-empty");
          }
        });
        clearMarks();
        if (hint) {
          hint.textContent =
            "Click a gap (1\u20138), then click a verb or type the correct form. You may use a verb more than once.";
        }
      });
    }
  }

  W.U3_VOCAB_TECHNOLOGY = { mount: mount, GAPS: GAPS, BANK: BANK };
})(window);
