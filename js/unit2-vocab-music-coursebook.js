/** Unit 2 Vocabulary — Music (High Energy coursebook Ex. 1–3) */
(function (W) {
  "use strict";

  var BANK = [
    "guitarist",
    "in",
    "instrument",
    "live",
    "on",
    "play",
    "playlist",
    "song",
  ];

  var EX1 = [
    { n: 0, example: true, html: 'a <span class="music-colloc-example-word">rock</span> band / a <span class="music-colloc-example-word">rock</span> musician / a <span class="music-colloc-example-word">rock</span> star' },
    { n: 1, answer: "guitarist", html: "a lead ___ / a session ___ / a bass ___" },
    { n: 2, answer: "instrument", html: "a percussion ___ / a wind ___ / a stringed ___" },
    { n: 3, answer: "song", html: "download a ___ / perform a ___ / mime a ___" },
    { n: 4, answer: "on", html: "___ tour / ___ stage / ___ the radio" },
    { n: 5, answer: "play", html: "___ a track / ___ a tune / ___ a chord" },
    { n: 6, answer: "live", html: "___ album / a ___ performance / a ___ music venue" },
    { n: 7, answer: "in", html: "___ the charts / ___ concert / ___ tune" },
    { n: 8, answer: "playlist", html: "create a ___ / shuffle a ___ / delete a ___" },
  ];

  var EX2 = [
    {
      n: 0,
      example: true,
      html: 'Have you been to see a singer or a band perform in <span class="music-colloc-example-word">a live music venue</span>?',
    },
    {
      n: 1,
      answer: ["on stage"],
      html: "Who would you most like to see perform live ___?",
    },
    {
      n: 2,
      answer: ["on stage"],
      html: "Have you ever performed or spoken ___ in front of an audience?",
    },
    {
      n: 3,
      answer: ["play a tune", "play a chord", "play a track"],
      html: "Can you ___ on any instrument?",
    },
    {
      n: 4,
      answer: ["in tune"],
      html: "Can you sing ___ or do people cover their ears when they hear you?",
    },
    {
      n: 5,
      answer: ["in the charts", "on the charts"],
      html: "Do you listen to songs that are ___ or do you prefer less commercial music?",
    },
    {
      n: 6,
      answer: ["create a playlist"],
      html: "When you ___, how do you decide which songs to include on it?",
    },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function mount() {
    var groupsHost = document.getElementById("music-ex1-groups");
    var bankHost = document.getElementById("music-word-bank");
    var ex2Host = document.getElementById("music-ex2-sents");
    if (!groupsHost || !bankHost || !ex2Host) return;

    var ex1State = {};
    var ex1Focus = null;
    var fb1 = document.getElementById("fb-ex1");
    var fb2 = document.getElementById("fb-ex2");

    function renderBank() {
      bankHost.innerHTML = "<strong>Word box</strong>";
      BANK.forEach(function (word) {
        var used = Object.keys(ex1State).some(function (k) {
          return ex1State[k] === word;
        });
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "bank-chip" + (used ? " is-used" : "");
        btn.textContent = word;
        btn.dataset.word = word;
        if (!used) {
          btn.addEventListener("click", function () {
            if (!ex1Focus) return;
            Object.keys(ex1State).forEach(function (k) {
              if (parseInt(k, 10) !== ex1Focus && ex1State[k] === word) {
                delete ex1State[k];
                updateEx1Slot(parseInt(k, 10));
              }
            });
            ex1State[ex1Focus] = word;
            updateEx1Slot(ex1Focus);
            renderBank();
            clearEx1Marks();
          });
        }
        bankHost.appendChild(btn);
      });
      var rock = document.createElement("span");
      rock.className = "bank-chip is-used";
      rock.textContent = "rock";
      rock.title = "Example (0)";
      bankHost.appendChild(rock);
    }

    function gapBtn(n) {
      return (
        '<button type="button" class="music-colloc-gap is-empty" data-n="' +
        n +
        '" aria-label="Gap ' +
        n +
        '">\u2014</button>'
      );
    }

    function fillTriple(html, n) {
      return html.replace(/___/g, function () {
        return gapBtn(n);
      });
    }

    groupsHost.innerHTML = EX1.map(function (row) {
      var cls = "music-colloc-row" + (row.example ? " is-example" : "");
      var body = row.example ? row.html : fillTriple(row.html, row.n);
      return (
        '<div class="' +
        cls +
        '"><span class="music-colloc-num">' +
        row.n +
        ".</span> " +
        body +
        "</div>"
      );
    }).join("");

    groupsHost.querySelectorAll(".music-colloc-gap").forEach(function (btn) {
      btn.addEventListener("click", function () {
        ex1Focus = parseInt(btn.getAttribute("data-n"), 10);
        groupsHost.querySelectorAll(".music-colloc-gap").forEach(function (b) {
          b.classList.toggle("is-focused", b === btn);
        });
        clearEx1Marks();
      });
    });

    function updateEx1Slot(n) {
      var word = ex1State[n] || "";
      groupsHost.querySelectorAll('.music-colloc-gap[data-n="' + n + '"]').forEach(function (slot) {
        slot.textContent = word || "\u2014";
        slot.classList.toggle("is-empty", !word);
      });
    }

    function clearEx1Marks() {
      EX1.forEach(function (row) {
        if (row.example) return;
        groupsHost.querySelectorAll('.music-colloc-gap[data-n="' + row.n + '"]').forEach(function (slot) {
          slot.classList.remove("is-ok", "is-bad");
        });
      });
      if (fb1) {
        fb1.textContent = "";
        fb1.className = "vocab-feedback";
      }
    }

    ex2Host.innerHTML = EX2.map(function (row) {
      if (row.example) {
        return '<p class="gap-sent"><span class="gap-num">' + row.n + ".</span> " + row.html + "</p>";
      }
      var parts = row.html.split("___");
      return (
        '<p class="gap-sent"><span class="gap-num">' +
        row.n +
        ".</span> " +
        parts[0] +
        '<input type="text" class="music-ex2-input" id="mc-ex2-' +
        row.n +
        '" autocomplete="off" spellcheck="false" aria-label="Gap ' +
        row.n +
        '" />' +
        (parts[1] || "") +
        "</p>"
      );
    }).join("");

    renderBank();

    function checkEx1() {
      var ok = 0;
      var total = 0;
      var missing = false;
      EX1.forEach(function (row) {
        if (row.example) return;
        total++;
        if (!ex1State[row.n]) missing = true;
      });
      if (missing) {
        if (fb1) {
          fb1.textContent = "Fill every group (1\u20138), then check again.";
          fb1.className = "vocab-feedback is-bad";
        }
        return;
      }
      EX1.forEach(function (row) {
        if (row.example) return;
        var good = norm(ex1State[row.n]) === norm(row.answer);
        groupsHost.querySelectorAll('.music-colloc-gap[data-n="' + row.n + '"]').forEach(function (slot) {
          slot.classList.toggle("is-ok", good);
          slot.classList.toggle("is-bad", !good);
        });
        if (good) ok++;
      });
      if (fb1) {
        fb1.textContent =
          ok === total
            ? "All " + total + " groups correct."
            : "Score: " + ok + " / " + total + ".";
        fb1.className = "vocab-feedback " + (ok === total ? "is-ok" : "is-bad");
      }
      return ok === total;
    }

    function checkEx2() {
      var ok = 0;
      var total = 0;
      EX2.forEach(function (row) {
        if (row.example) return;
        total++;
        var inp = document.getElementById("mc-ex2-" + row.n);
        var val = norm(inp && inp.value);
        var good = row.answer.some(function (a) {
          return norm(a) === val;
        });
        if (inp) {
          inp.classList.toggle("is-ok", good && !!val);
          inp.classList.toggle("is-bad", !good && !!val);
        }
        if (good) ok++;
      });
      if (fb2) {
        fb2.textContent =
          ok === total
            ? "All " + total + " correct."
            : "Score: " + ok + " / " + total + ".";
        fb2.className = "vocab-feedback " + (ok === total ? "is-ok" : "is-bad");
      }
      return ok === total;
    }

    var btn1 = document.getElementById("btn-check-ex1");
    var btn2 = document.getElementById("btn-check-ex2");
    var rst1 = document.getElementById("btn-reset-ex1");
    var rst2 = document.getElementById("btn-reset-ex2");

    if (btn1) {
      btn1.addEventListener("click", function () {
        var all = checkEx1();
        if (all && W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(8, 8);
        }
      });
    }
    if (btn2) {
      btn2.addEventListener("click", function () {
        var all = checkEx2();
        if (all && W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(6, 6);
        }
      });
    }
    if (rst1) {
      rst1.addEventListener("click", function () {
        ex1State = {};
        ex1Focus = null;
        EX1.forEach(function (row) {
          if (!row.example) updateEx1Slot(row.n);
        });
        groupsHost.querySelectorAll(".music-colloc-gap").forEach(function (b) {
          b.classList.remove("is-focused");
        });
        renderBank();
        clearEx1Marks();
      });
    }
    if (rst2) {
      rst2.addEventListener("click", function () {
        EX2.forEach(function (row) {
          if (row.example) return;
          var inp = document.getElementById("mc-ex2-" + row.n);
          if (inp) {
            inp.value = "";
            inp.classList.remove("is-ok", "is-bad");
          }
        });
        if (fb2) {
          fb2.textContent = "";
          fb2.className = "vocab-feedback";
        }
      });
    }
  }

  W.U2_VOCAB_MUSIC_CB = { mount: mount, EX1: EX1, EX2: EX2, BANK: BANK };
})(window);
