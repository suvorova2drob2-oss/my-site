/** Unit 2 Vocabulary — Sport (High Energy coursebook Ex. 1–3) */
(function (W) {
  "use strict";

  var EX1_BANK = [
    "gymnastics",
    "skiing",
    "cycling",
    "swimming",
    "volleyball",
    "tennis",
    "basketball",
    "handball",
    "football",
    "golf",
  ];

  var EX1_SLOTS = [
    { id: 1, verb: "do", accept: ["gymnastics"] },
    { id: 2, verb: "go", accept: ["skiing"] },
    { id: 3, verb: "go", accept: ["cycling"] },
    { id: 4, verb: "go", accept: ["swimming"] },
    { id: 5, verb: "play", accept: ["volleyball"] },
    { id: 6, verb: "play", accept: ["tennis"] },
    { id: 7, verb: "play", accept: ["basketball", "handball"] },
    { id: 8, verb: "play", accept: ["football"] },
    { id: 9, verb: "play", accept: ["golf"] },
  ];

  var EX2 = [
    {
      n: 0,
      example: true,
      nouns: "court, net, racket, backhand",
      answer: "tennis",
    },
    {
      n: 1,
      nouns: "pitch, referee, corner, foul",
      accept: ["football", "hockey"],
    },
    { n: 2, nouns: "course, green, clubs, hole", accept: ["golf"] },
    { n: 3, nouns: "slope, sticks, run, goggles", accept: ["skiing"] },
    { n: 4, nouns: "track, field event, lane, meeting", accept: ["athletics"] },
    { n: 5, nouns: "saddle, helmet, pedals, peloton", accept: ["cycling"] },
  ];

  var EX3 = [
    { noun: "fairway", accept: ["golf"], group: 2 },
    { noun: "gears", accept: ["cycling"], group: 5 },
    { noun: "lift", accept: ["skiing"], group: 3 },
    { noun: "red card", accept: ["football", "hockey"], group: 1 },
    { noun: "service", accept: ["tennis"], group: 0 },
    { noun: "triple jump", accept: ["athletics"], group: 4 },
  ];

  var EX4_VERBS = [
    "beat",
    "draw",
    "hit",
    "kick",
    "pass",
    "take",
    "take",
    "win",
  ];

  var EX4 = [
    {
      n: 1,
      before: "Which sports ",
      after: " place on an ice rink?",
      accept: ["take"],
    },
    {
      n: 2,
      before: "Which country&rsquo;s football team ",
      after: " Croatia to win the 2018 World Cup Final?",
      accept: ["beat"],
    },
    {
      n: 3,
      before: "Which medal does a runner-up ",
      after: "?",
      accept: ["win"],
    },
    {
      n: 4,
      before: "In which sports do you ",
      after: " the ball with a racket?",
      accept: ["hit"],
    },
    {
      n: 5,
      before: "How many players from each team can ",
      after: " part at one time in a game of basketball?",
      accept: ["take"],
    },
    {
      n: 6,
      before: "If two hockey teams ",
      after: " nil-nil, how many goals are scored?",
      accept: ["draw"],
    },
    {
      n: 7,
      before: "In football, if you ",
      after: " the ball back to your own goalkeeper using your chest, can they pick it up?",
      accept: ["pass"],
    },
    {
      n: 8,
      before: "In which international team sport can you score points if you either ",
      after:
        " the ball with your feet over one post and between two others, or touch it down over the opponents&rsquo; line using your hands?",
      accept: ["kick"],
    },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function accepted(list, val) {
    return (list || []).some(function (a) {
      return norm(a) === norm(val);
    });
  }

  function mount() {
    var ex1Root = document.getElementById("sport-ex1-root");
    var bankHost = document.getElementById("sport-ex1-bank");
    var ex2Host = document.getElementById("sport-ex2-groups");
    var ex3Targets = document.getElementById("sport-ex3-targets");
    var ex3Nouns = document.getElementById("sport-ex3-nouns");
    var ex4Host = document.getElementById("sport-ex4-sents");
    var ex4Bank = document.getElementById("sport-ex4-bank");
    if (!ex1Root || !bankHost || !ex2Host || !ex3Targets || !ex3Nouns || !ex4Host || !ex4Bank) return;

    var ex1State = {};
    var ex1Focus = null;
    var ex3Pick = null;
    var ex3State = {};
    var ex4State = {};
    var ex4Focus = null;
    var ex4Used = {};

    var fb1 = document.getElementById("fb-ex1");
    var fb2 = document.getElementById("fb-ex2");
    var fb3 = document.getElementById("fb-ex3");
    var fb4 = document.getElementById("fb-ex4");

    function slotBtn(id) {
      return (
        '<button type="button" class="music-colloc-gap is-empty sport-slot" data-id="' +
        id +
        '" aria-label="Sport slot ' +
        id +
        '">\u2014</button>'
      );
    }

    function renderEx1() {
      var byVerb = { do: [], go: [], play: [] };
      EX1_SLOTS.forEach(function (s) {
        byVerb[s.verb].push(s);
      });

      ex1Root.innerHTML =
        '<div class="sport-dgp-cols">' +
        ["do", "go", "play"]
          .map(function (verb) {
            var slots = byVerb[verb]
              .map(function (s) {
                return slotBtn(s.id);
              })
              .join("");
            var ex =
              verb === "do"
                ? '<span class="sport-dgp-ex">athletics</span>'
                : "";
            return (
              '<div class="sport-dgp-col"><h3>' +
              verb +
              '</h3>' +
              ex +
              '<div class="sport-dgp-slots">' +
              slots +
              "</div></div>"
            );
          })
          .join("") +
        "</div>";

      ex1Root.querySelectorAll(".sport-slot").forEach(function (btn) {
        btn.addEventListener("click", function () {
          ex1Focus = parseInt(btn.getAttribute("data-id"), 10);
          ex1Root.querySelectorAll(".sport-slot").forEach(function (b) {
            b.classList.toggle("is-focused", b === btn);
          });
          clearEx1Marks();
        });
      });
    }

    function renderBank() {
      bankHost.innerHTML = "<strong>Sports</strong>";
      EX1_BANK.forEach(function (word) {
        var used = Object.keys(ex1State).some(function (k) {
          return ex1State[k] === word;
        });
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "bank-chip" + (used ? " is-used" : "");
        btn.textContent = word;
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
    }

    function updateEx1Slot(id) {
      var word = ex1State[id] || "";
      ex1Root.querySelectorAll('.sport-slot[data-id="' + id + '"]').forEach(function (slot) {
        slot.textContent = word || "\u2014";
        slot.classList.toggle("is-empty", !word);
      });
    }

    function clearEx1Marks() {
      EX1_SLOTS.forEach(function (s) {
        ex1Root.querySelectorAll('.sport-slot[data-id="' + s.id + '"]').forEach(function (slot) {
          slot.classList.remove("is-ok", "is-bad");
        });
      });
      if (fb1) {
        fb1.textContent = "";
        fb1.className = "vocab-feedback";
      }
    }

    function checkEx1() {
      var ok = 0;
      var missing = EX1_SLOTS.some(function (s) {
        return !ex1State[s.id];
      });
      if (missing) {
        if (fb1) {
          fb1.textContent = "Place every sport in a slot (do / go / play), then check again.";
          fb1.className = "vocab-feedback is-bad";
        }
        return false;
      }
      EX1_SLOTS.forEach(function (s) {
        var val = ex1State[s.id];
        var good = accepted(s.accept, val);
        ex1Root.querySelectorAll('.sport-slot[data-id="' + s.id + '"]').forEach(function (slot) {
          slot.classList.toggle("is-ok", good);
          slot.classList.toggle("is-bad", !good);
        });
        if (good) ok++;
      });
      if (fb1) {
        fb1.textContent =
          ok === EX1_SLOTS.length
            ? "Ex. 1 — all " + EX1_SLOTS.length + " correct."
            : "Ex. 1 — score: " + ok + " / " + EX1_SLOTS.length + ".";
        fb1.className =
          "vocab-feedback " + (ok === EX1_SLOTS.length ? "is-ok" : "is-bad");
      }
      return ok === EX1_SLOTS.length;
    }

    function renderEx2() {
      ex2Host.innerHTML = EX2.map(function (row) {
        var cls = "sport-ex2-row" + (row.example ? " is-example" : "");
        if (row.example) {
          return (
            '<div class="' +
            cls +
            '"><span class="sport-ex2-num">' +
            row.n +
            ".</span> <strong><em>" +
            row.answer +
            "</em></strong><span class=\"sport-ex2-nouns\">" +
            row.nouns +
            "</span></div>"
          );
        }
        return (
          '<div class="' +
          cls +
          '"><span class="sport-ex2-num">' +
          row.n +
          '.</span> <input type="text" class="sport-ex2-input" id="sp-ex2-' +
          row.n +
          '" autocomplete="off" spellcheck="false" aria-label="Sport for group ' +
          row.n +
          '" /><span class="sport-ex2-nouns">' +
          row.nouns +
          "</span></div>"
        );
      }).join("");

      EX2.forEach(function (row) {
        if (row.example) return;
        var inp = document.getElementById("sp-ex2-" + row.n);
        if (inp) inp.addEventListener("input", clearEx2Marks);
      });
    }

    function clearEx2Marks() {
      EX2.forEach(function (row) {
        if (row.example) return;
        var inp = document.getElementById("sp-ex2-" + row.n);
        if (inp) inp.classList.remove("is-ok", "is-bad");
      });
      if (fb2) {
        fb2.textContent = "";
        fb2.className = "vocab-feedback";
      }
    }

    function checkEx2() {
      var ok = 0;
      var scored = EX2.filter(function (r) {
        return !r.example;
      });
      var missing = scored.some(function (row) {
        return !norm(document.getElementById("sp-ex2-" + row.n).value);
      });
      if (missing) {
        if (fb2) {
          fb2.textContent = "Name the sport for every group (1\u20135), then check again.";
          fb2.className = "vocab-feedback is-bad";
        }
        return false;
      }
      scored.forEach(function (row) {
        var inp = document.getElementById("sp-ex2-" + row.n);
        var good = accepted(row.accept, inp.value);
        inp.classList.toggle("is-ok", good);
        inp.classList.toggle("is-bad", !good);
        if (good) ok++;
      });
      if (fb2) {
        fb2.textContent =
          ok === scored.length
            ? "Ex. 2 — all " + scored.length + " correct."
            : "Ex. 2 — score: " + ok + " / " + scored.length + ".";
        fb2.className =
          "vocab-feedback " + (ok === scored.length ? "is-ok" : "is-bad");
      }
      return ok === scored.length;
    }

    function renderEx3() {
      ex3Targets.innerHTML = EX2.map(function (row, i) {
        return (
          '<button type="button" class="sport-ex3-target" data-group="' +
          i +
          '"><strong>' +
          (row.example ? row.answer : "Group " + row.n) +
          "</strong><br><span>" +
          row.nouns +
          '</span><span class="sport-ex3-assigned" id="sp-ex3-a-' +
          i +
          '"></span></button>'
        );
      }).join("");

      ex3Nouns.innerHTML = EX3.map(function (item) {
        return (
          '<button type="button" class="sport-ex3-noun" data-noun="' +
          item.noun +
          '">' +
          item.noun +
          "</button>"
        );
      }).join("");

      ex3Targets.querySelectorAll(".sport-ex3-target").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var g = btn.getAttribute("data-group");
          if (ex3Pick) {
            ex3State[ex3Pick] = g;
            updateEx3Assigned();
            ex3Pick = null;
            ex3Nouns.querySelectorAll(".sport-ex3-noun").forEach(function (n) {
              n.classList.remove("is-pick");
            });
            clearEx3Marks();
            return;
          }
          ex3Targets.querySelectorAll(".sport-ex3-target").forEach(function (b) {
            b.classList.toggle("is-focused", b === btn);
          });
        });
      });

      ex3Nouns.querySelectorAll(".sport-ex3-noun").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (btn.classList.contains("is-used")) return;
          ex3Pick = btn.getAttribute("data-noun");
          ex3Nouns.querySelectorAll(".sport-ex3-noun").forEach(function (n) {
            n.classList.toggle("is-pick", n === btn);
          });
          ex3Targets.querySelectorAll(".sport-ex3-target").forEach(function (b) {
            b.classList.remove("is-focused");
          });
          clearEx3Marks();
        });
      });
    }

    function updateEx3Assigned() {
      EX2.forEach(function (_, i) {
        var el = document.getElementById("sp-ex3-a-" + i);
        if (!el) return;
        var nouns = Object.keys(ex3State).filter(function (noun) {
          return ex3State[noun] === String(i);
        });
        el.textContent = nouns.length ? "+ " + nouns.join(", ") : "";
      });
      ex3Nouns.querySelectorAll(".sport-ex3-noun").forEach(function (btn) {
        var noun = btn.getAttribute("data-noun");
        var placed = !!ex3State[noun];
        btn.classList.toggle("is-used", placed);
      });
    }

    function clearEx3Marks() {
      ex3Targets.querySelectorAll(".sport-ex3-target").forEach(function (t) {
        t.classList.remove("is-ok", "is-bad");
      });
      if (fb3) {
        fb3.textContent = "";
        fb3.className = "vocab-feedback";
      }
    }

    function checkEx3() {
      var ok = 0;
      var missing = EX3.some(function (item) {
        return ex3State[item.noun] === undefined;
      });
      if (missing) {
        if (fb3) {
          fb3.textContent =
            "Click a noun, then the sport group it belongs to (all 6 nouns).";
          fb3.className = "vocab-feedback is-bad";
        }
        return false;
      }
      EX3.forEach(function (item) {
        var chosen = parseInt(ex3State[item.noun], 10);
        var good = chosen === item.group;
        var target = ex3Targets.querySelector(
          '.sport-ex3-target[data-group="' + item.group + '"]'
        );
        if (target && good) target.classList.add("is-ok");
        if (!good) {
          var wrongTarget = ex3Targets.querySelector(
            '.sport-ex3-target[data-group="' + chosen + '"]'
          );
          if (wrongTarget) wrongTarget.classList.add("is-bad");
        }
        if (good) ok++;
      });
      if (fb3) {
        fb3.textContent =
          ok === EX3.length
            ? "Ex. 3 — all " + EX3.length + " correct."
            : "Ex. 3 — score: " + ok + " / " + EX3.length + ".";
        fb3.className =
          "vocab-feedback " + (ok === EX3.length ? "is-ok" : "is-bad");
      }
      return ok === EX3.length;
    }

    function ex4Gap(n) {
      return (
        '<button type="button" class="music-colloc-gap is-empty sport-ex4-gap" data-n="' +
        n +
        '" aria-label="Verb gap ' +
        n +
        '">\u2014</button>'
      );
    }

    function renderEx4Bank() {
      ex4Bank.innerHTML = "<strong>Verbs</strong>";
      EX4_VERBS.forEach(function (word, i) {
        var chipId = "ex4v-" + i;
        var used = !!ex4Used[chipId];
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "bank-chip" + (used ? " is-used" : "");
        btn.textContent = word;
        btn.dataset.chipId = chipId;
        btn.dataset.word = word;
        if (!used) {
          btn.addEventListener("click", function () {
            if (!ex4Focus) return;
            Object.keys(ex4State).forEach(function (k) {
              if (parseInt(k, 10) !== ex4Focus && ex4State[k] && ex4State[k].chipId === chipId) {
                delete ex4Used[chipId];
                delete ex4State[k];
                updateEx4Gap(parseInt(k, 10));
              }
            });
            if (ex4State[ex4Focus] && ex4State[ex4Focus].chipId) {
              delete ex4Used[ex4State[ex4Focus].chipId];
            }
            ex4State[ex4Focus] = { word: word, chipId: chipId };
            ex4Used[chipId] = true;
            updateEx4Gap(ex4Focus);
            renderEx4Bank();
            clearEx4Marks();
          });
        }
        ex4Bank.appendChild(btn);
      });
    }

    function renderEx4() {
      ex4Host.innerHTML = EX4.map(function (row) {
        return (
          '<p class="sport-ex4-sent"><span class="sport-ex2-num">' +
          row.n +
          ".</span> " +
          row.before +
          ex4Gap(row.n) +
          row.after +
          "</p>"
        );
      }).join("");

      ex4Host.querySelectorAll(".sport-ex4-gap").forEach(function (btn) {
        btn.addEventListener("click", function () {
          ex4Focus = parseInt(btn.getAttribute("data-n"), 10);
          ex4Host.querySelectorAll(".sport-ex4-gap").forEach(function (b) {
            b.classList.toggle("is-focused", b === btn);
          });
          clearEx4Marks();
        });
      });
      renderEx4Bank();
    }

    function updateEx4Gap(n) {
      var entry = ex4State[n];
      var word = entry ? entry.word : "";
      ex4Host.querySelectorAll('.sport-ex4-gap[data-n="' + n + '"]').forEach(function (slot) {
        slot.textContent = word || "\u2014";
        slot.classList.toggle("is-empty", !word);
      });
    }

    function clearEx4Marks() {
      EX4.forEach(function (row) {
        ex4Host.querySelectorAll('.sport-ex4-gap[data-n="' + row.n + '"]').forEach(function (slot) {
          slot.classList.remove("is-ok", "is-bad");
        });
      });
      if (fb4) {
        fb4.textContent = "";
        fb4.className = "vocab-feedback";
      }
    }

    function checkEx4() {
      var ok = 0;
      var missing = EX4.some(function (row) {
        return !ex4State[row.n];
      });
      if (missing) {
        if (fb4) {
          fb4.textContent = "Place a verb in every gap (1\u20138), then check again.";
          fb4.className = "vocab-feedback is-bad";
        }
        return false;
      }
      EX4.forEach(function (row) {
        var val = ex4State[row.n].word;
        var good = accepted(row.accept, val);
        ex4Host.querySelectorAll('.sport-ex4-gap[data-n="' + row.n + '"]').forEach(function (slot) {
          slot.classList.toggle("is-ok", good);
          slot.classList.toggle("is-bad", !good);
        });
        if (good) ok++;
      });
      if (fb4) {
        fb4.textContent =
          ok === EX4.length
            ? "Ex. 4 — all " + EX4.length + " correct."
            : "Ex. 4 — score: " + ok + " / " + EX4.length + ".";
        fb4.className =
          "vocab-feedback " + (ok === EX4.length ? "is-ok" : "is-bad");
      }
      return ok === EX4.length;
    }

    renderEx1();
    renderBank();
    renderEx2();
    renderEx3();
    renderEx4();

    var chk1 = document.getElementById("btn-check-ex1");
    var rst1 = document.getElementById("btn-reset-ex1");
    var chk2 = document.getElementById("btn-check-ex2");
    var rst2 = document.getElementById("btn-reset-ex2");
    var chk3 = document.getElementById("btn-check-ex3");
    var rst3 = document.getElementById("btn-reset-ex3");
    var chk4 = document.getElementById("btn-check-ex4");
    var rst4 = document.getElementById("btn-reset-ex4");

    if (chk1) {
      chk1.addEventListener("click", function () {
        checkEx1();
      });
    }
    if (rst1) {
      rst1.addEventListener("click", function () {
        ex1State = {};
        ex1Focus = null;
        EX1_SLOTS.forEach(function (s) {
          updateEx1Slot(s.id);
        });
        renderBank();
        clearEx1Marks();
      });
    }
    if (chk2) {
      chk2.addEventListener("click", function () {
        var all = checkEx2();
        if (all && W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(5, 5);
        }
      });
    }
    if (rst2) {
      rst2.addEventListener("click", function () {
        EX2.forEach(function (row) {
          if (row.example) return;
          var inp = document.getElementById("sp-ex2-" + row.n);
          if (inp) {
            inp.value = "";
            inp.classList.remove("is-ok", "is-bad");
          }
        });
        clearEx2Marks();
      });
    }
    if (chk3) {
      chk3.addEventListener("click", function () {
        checkEx3();
      });
    }
    if (rst3) {
      rst3.addEventListener("click", function () {
        ex3State = {};
        ex3Pick = null;
        updateEx3Assigned();
        ex3Nouns.querySelectorAll(".sport-ex3-noun").forEach(function (n) {
          n.classList.remove("is-pick");
        });
        clearEx3Marks();
      });
    }
    if (chk4) {
      chk4.addEventListener("click", function () {
        var all = checkEx4();
        if (all && W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(8, 8);
        }
      });
    }
    if (rst4) {
      rst4.addEventListener("click", function () {
        ex4State = {};
        ex4Focus = null;
        ex4Used = {};
        EX4.forEach(function (row) {
          updateEx4Gap(row.n);
        });
        ex4Host.querySelectorAll(".sport-ex4-gap").forEach(function (b) {
          b.classList.remove("is-focused");
        });
        renderEx4Bank();
        clearEx4Marks();
      });
    }

  }

  W.U2_VOCAB_SPORT_CB = {
    mount: mount,
    EX1_SLOTS: EX1_SLOTS,
    EX2: EX2,
    EX3: EX3,
    EX4: EX4,
  };
})(window);
