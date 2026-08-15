/** Unit 2 Vocabulary — Sport collocations (High Energy WB) */
(function (W) {
  "use strict";

  var ITEMS = [
    {
      n: 0,
      example: true,
      before: "The hockey player ",
      after: " the ball to her teammate.",
      options: [
        { id: "passed", label: "passed" },
        { id: "took", label: "took" },
      ],
      correct: ["passed"],
    },
    {
      n: 1,
      before: "The footballer ",
      after: " the ball over the goal.",
      options: [
        { id: "kicked", label: "kicked" },
        { id: "won", label: "won" },
      ],
      correct: ["kicked"],
      hint: "<strong>Kick</strong> the ball &mdash; not <em>win</em> the ball.",
    },
    {
      n: 2,
      before: "The athletics ",
      after: " was held on a Friday evening.",
      options: [
        { id: "meeting", label: "meeting" },
        { id: "lane", label: "lane" },
      ],
      correct: ["meeting"],
      hint: "An <strong>athletics meeting</strong> is a sports event.",
    },
    {
      n: 3,
      before: "Neither competitor wanted to ",
      after: " part in the controversial game.",
      options: [
        { id: "take", label: "take" },
        { id: "be", label: "be" },
      ],
      correct: ["take"],
      hint: "Fixed phrase: <strong>take part in</strong> something.",
    },
    {
      n: 4,
      before: "The tennis player threw his ",
      after: " after his terrible backhand.",
      options: [
        { id: "stick", label: "stick" },
        { id: "racket", label: "racket" },
      ],
      correct: ["racket"],
      hint: "Tennis players use a <strong>racket</strong>.",
    },
    {
      n: 5,
      before: "The company bosses met on the golf ",
      after: ".",
      options: [
        { id: "green", label: "green" },
        { id: "pitch", label: "pitch" },
      ],
      correct: ["green"],
      hint: "Golf is played on the <strong>green</strong>; a <em>pitch</em> is for football etc.",
    },
    {
      n: 6,
      before: "The 100m race ",
      after: " place at the city&rsquo;s new stadium.",
      options: [
        { id: "had", label: "had" },
        { id: "took", label: "took" },
      ],
      correct: ["took"],
      hint: "Fixed phrase: the race <strong>took place</strong>.",
    },
    {
      n: 7,
      before: "The child was so happy to receive a medal for ",
      after: " the competition.",
      options: [
        { id: "winning", label: "winning" },
        { id: "passing", label: "passing" },
      ],
      correct: ["winning"],
      hint: "You <strong>win</strong> a competition; <em>pass</em> does not collocate here.",
    },
    {
      n: 8,
      before: "It was a shame for the supporters that the teams ",
      after: " one-one.",
      options: [
        { id: "matched", label: "matched" },
        { id: "drew", label: "drew" },
      ],
      correct: ["drew"],
      hint: "When the score is equal, the teams <strong>drew</strong> (a draw).",
    },
  ];

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function mount(cfg) {
    cfg = cfg || {};
    var host = document.getElementById(cfg.listId || "gram-rows");
    if (!host) return;

    var picks = {};
    var fb = document.getElementById("gram-fb");
    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");

    function render() {
      host.innerHTML = "";
      ITEMS.forEach(function (it) {
        var row = document.createElement("div");
        row.className = "gram-row" + (it.example ? " is-example" : "");
        row.dataset.n = String(it.n);

        var html =
          '<span class="gram-num">' +
          it.n +
          ".</span>" +
          '<span class="gram-line">' +
          it.before +
          '<span class="gram-opts">';

        it.options.forEach(function (opt, oi) {
          if (oi) html += '<span class="gram-sep">/</span>';
          if (it.example) {
            var cls =
              it.correct.indexOf(opt.id) >= 0 ? "gram-opt is-key" : "gram-opt";
            html += '<span class="' + cls + '">' + esc(opt.label) + "</span>";
          } else {
            html +=
              '<button type="button" class="gram-opt" data-n="' +
              it.n +
              '" data-id="' +
              esc(opt.id) +
              '">' +
              esc(opt.label) +
              "</button>";
          }
        });

        html +=
          "</span><span class=\"gram-tail\">" +
          it.after +
          "</span></span>";

        if (it.hint) {
          html += '<p class="gram-hint">' + it.hint + "</p>";
        }

        row.innerHTML = html;
        host.appendChild(row);
      });

      host.querySelectorAll(".gram-opt[data-n]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var n = btn.getAttribute("data-n");
          picks[n] = btn.getAttribute("data-id");
          host.querySelectorAll('.gram-opt[data-n="' + n + '"]').forEach(function (b) {
            b.classList.toggle("is-pick", b === btn);
          });
          var row = host.querySelector('.gram-row[data-n="' + n + '"]');
          if (row) row.classList.remove("is-ok", "is-bad");
          if (fb) {
            fb.textContent = "";
            fb.className = "gram-feedback";
          }
        });
      });
    }

    function clearMarks() {
      host.querySelectorAll(".gram-row:not(.is-example)").forEach(function (row) {
        row.classList.remove("is-ok", "is-bad");
      });
      if (fb) {
        fb.textContent = "";
        fb.className = "gram-feedback";
      }
    }

    function check() {
      var scored = ITEMS.filter(function (it) {
        return !it.example;
      });
      if (scored.some(function (it) {
        return !picks[String(it.n)];
      })) {
        if (fb) {
          fb.textContent = "Choose an option in every sentence (1\u20138), then check again.";
          fb.className = "gram-feedback is-bad";
        }
        return;
      }

      var ok = 0;
      scored.forEach(function (it) {
        var pick = picks[String(it.n)];
        var good = it.correct.indexOf(pick) >= 0;
        var row = host.querySelector('.gram-row[data-n="' + it.n + '"]');
        if (row) {
          row.classList.toggle("is-ok", good);
          row.classList.toggle("is-bad", !good);
        }
        if (good) ok++;
      });

      if (fb) {
        fb.textContent =
          ok === scored.length
            ? "All " + scored.length + " correct."
            : "Score: " + ok + " / " + scored.length + ".";
        fb.className =
          "gram-feedback " + (ok === scored.length ? "is-ok" : "is-bad");
      }

      if (W.MasteringB2Progress) {
        W.MasteringB2Progress.recordCheckFromDom(ok, scored.length);
      }
    }

    function reset() {
      picks = {};
      host.querySelectorAll(".gram-opt.is-pick").forEach(function (b) {
        b.classList.remove("is-pick");
      });
      clearMarks();
    }

    render();
    if (btnCheck) btnCheck.addEventListener("click", check);
    if (btnReset) btnReset.addEventListener("click", reset);
  }

  W.U2_VOCAB_SPORT = { mount: mount, ITEMS: ITEMS };
})(window);
