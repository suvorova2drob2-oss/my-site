/** Unit 3 Word formation — Nouns 1 Ex. 2 (Conversation clubs news story) */
(function (W) {
  "use strict";

  var GAPS = [
    { n: 1, accept: ["loneliness"] },
    { n: 2, accept: ["government"] },
    { n: 3, accept: ["existence"] },
    { n: 4, accept: ["carelessness"] },
    { n: 5, accept: ["generosity"] },
    { n: 6, accept: ["similarities", "similarity"] },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function gapInput(n) {
    return (
      '<span class="gap-wrap"><span class="gap-num">' +
      n +
      '</span><input type="text" class="gap wf-story-gap" id="gap-' +
      n +
      '" maxlength="48" autocomplete="off" spellcheck="false" aria-label="Gap ' +
      n +
      '" /></span>'
    );
  }

  function mount() {
    var host = document.getElementById("story-body");
    if (!host) return;

    host.innerHTML =
      "<p>More and more, we read reports warning that " +
      gapInput(1) +
      " is increasing not just among older generations but also for young people. The " +
      gapInput(2) +
      " does not seem to be addressing the issue, so some people have taken matters into their own hands and started conversation clubs &mdash; meet-ups in local caf&eacute;s where strangers can come for a coffee and a chat.</p>" +
      "<p>One of the founders, Kerry Smith, spoke to us about the clubs: &lsquo;A few years ago, I realised that I was leading an increasingly lonely " +
      gapInput(3) +
      " almost through " +
      gapInput(4) +
      " I suppose &mdash; losing touch with friends, not socialising after work &hellip; then I had the idea to set up the club. Through the " +
      gapInput(5) +
      " of local businesses &mdash; who helped with advertising and group discounts &mdash; it was surprisingly easy to set up. The biggest takeaway for me, though, has been discovering the huge number of " +
      gapInput(6) +
      " between myself and someone I would otherwise never have met.&rsquo;</p>";

    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");
    var fb = document.getElementById("wf-fb");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        GAPS.forEach(function (g) {
          var inp = document.getElementById("gap-" + g.n);
          if (!inp) return;
          var got = norm(inp.value);
          var good =
            got &&
            (g.accept || []).some(function (a) {
              return norm(a) === got;
            });
          inp.classList.toggle("ok", good);
          inp.classList.toggle("bad", got && !good);
          if (good) ok++;
        });
        if (fb) {
          fb.textContent =
            ok === GAPS.length
              ? "All " + GAPS.length + " correct."
              : "Score: " + ok + " / " + GAPS.length + ".";
          fb.className = "part2-feedback show " + (ok === GAPS.length ? "ok" : "bad");
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, GAPS.length);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        GAPS.forEach(function (g) {
          var inp = document.getElementById("gap-" + g.n);
          if (!inp) return;
          inp.value = "";
          inp.classList.remove("ok", "bad");
        });
        if (fb) {
          fb.textContent = "";
          fb.className = "part2-feedback";
        }
      });
    }
  }

  W.U3_WF_NOUNS1_STORY = { mount: mount, GAPS: GAPS };
})(window);
