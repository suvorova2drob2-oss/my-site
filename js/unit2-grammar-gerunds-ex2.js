/** Unit 2 Grammar — Gerunds and infinitives · Ex. 2 Pedal Power (High Energy WB) */
(function (W) {
  "use strict";

  var GAPS = [
    {
      n: 1,
      answers: ["working"],
      keyShow: "working",
    },
    {
      n: 2,
      answers: ["chatting"],
      keyShow: "chatting",
    },
    {
      n: 3,
      answers: ["to give up", "giving up"],
      keyShow: "to give up",
    },
    {
      n: 4,
      answers: ["to carry on", "carrying on"],
      keyShow: "to carry on",
    },
    {
      n: 5,
      answers: ["replacing"],
      keyShow: "replacing",
    },
    {
      n: 6,
      answers: ["to save", "saving"],
      keyShow: "to save",
    },
    {
      n: 7,
      answers: ["to count", "counting"],
      keyShow: "to count",
    },
    {
      n: 8,
      answers: ["giving up"],
      keyShow: "giving up",
    },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function gapInput(n) {
    return (
      '<label class="blog-gap-wrap">' +
      '<span class="blog-gap-num">(' +
      n +
      ")</span>" +
      '<input type="text" class="blog-gap gap-input" id="g' +
      n +
      '" data-gap="' +
      n +
      '" autocomplete="off" spellcheck="false" aria-label="Gap ' +
      n +
      '" />' +
      "</label>"
    );
  }

  function renderText(container) {
    container.innerHTML =
      "<p>I had tried many times " +
      '<span class="blog-ex-gap">(0) <strong>to be</strong></span> healthier. The main problem was work. When I was stressed one day, I stopped ' +
      gapInput(1) +
      " and went for a walk just for a change of scene. This did me the world of good. I remember " +
      gapInput(2) +
      " to my friend who had told me to try " +
      gapInput(3) +
      " my bad habit of working all hours. So, despite the mountain of stuff I had to do, I decided not " +
      gapInput(4) +
      " at 5 pm, and went home instead. And I started cycling, but it soon became apparent that my bike needed " +
      gapInput(5) +
      ". So this would be my motivation; every time I went home on time, I would put money in a jar for a new bike.</p>" +
      "<p>I must say if you&rsquo;re trying " +
      gapInput(6) +
      " for something, this is a great method! The first few days, I was terribly anxious, but it gradually got easier and I actually found that I was more productive in the office. I forgot " +
      gapInput(7) +
      " the money in my jar until one day I saw that it was full. I went straight out and bought a new bike. If breaking a habit means " +
      gapInput(8) +
      " something you like or think you need to do, it&rsquo;s worth it &mdash; I&rsquo;ve never looked back.</p>";
  }

  function mount(cfg) {
    cfg = cfg || {};
    var container = document.getElementById(cfg.textId || "blog-text");
    if (!container) return;

    renderText(container);

    var fb = document.getElementById("fb");
    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");

    function clearMarks() {
      GAPS.forEach(function (g) {
        var el = document.getElementById("g" + g.n);
        if (el) el.classList.remove("is-ok", "is-bad");
      });
      if (fb) {
        fb.textContent = "";
        fb.className = "vocab-feedback";
      }
    }

    GAPS.forEach(function (g) {
      var el = document.getElementById("g" + g.n);
      if (el) el.addEventListener("input", clearMarks);
    });

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        var missing = false;
        GAPS.forEach(function (g) {
          var el = document.getElementById("g" + g.n);
          if (!norm(el ? el.value : "")) missing = true;
        });
        if (missing) {
          if (fb) {
            fb.textContent = "Fill every gap (1\u20138), then check again.";
            fb.className = "vocab-feedback is-bad";
          }
          return;
        }

        GAPS.forEach(function (g) {
          var el = document.getElementById("g" + g.n);
          var val = norm(el.value);
          var good = g.answers.some(function (a) {
            return norm(a) === val;
          });
          el.classList.toggle("is-ok", good);
          el.classList.toggle("is-bad", !good);
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
        GAPS.forEach(function (g) {
          var el = document.getElementById("g" + g.n);
          if (el) el.value = "";
        });
        clearMarks();
      });
    }
  }

  W.U2_GR_GERUNDS_EX2 = { mount: mount, GAPS: GAPS };
})(window);
