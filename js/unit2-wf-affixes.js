/** Unit 2 Word formation — Affixes (High Energy WB) */

(function (W) {

  "use strict";



  var GROUPS = [

    {

      n: 1,

      adjectives: ["unsociable", "unsure", "unresponsible", "unknown"],

      wrong: "unresponsible",

      answer: "irresponsible",

      hint: "<em>unresponsible</em> &rarr; <strong>irresponsible</strong> (r-spelling after ir-).",

    },

    {

      n: 2,

      adjectives: ["irregular", "irreliable", "irrational", "irrelevant"],

      wrong: "irreliable",

      answer: "unreliable",

      hint: "<em>irreliable</em> &rarr; <strong>unreliable</strong> (un-, not ir-).",

    },

    {

      n: 3,

      adjectives: ["intolerant", "incompetent", "inaccurate", "inusual"],

      wrong: "inusual",

      answer: "unusual",

      hint: "<em>inusual</em> &rarr; <strong>unusual</strong> (un-, not in-).",

    },

    {

      n: 4,

      adjectives: ["dishonest", "dissatisfied", "disabled", "disexperienced"],

      wrong: "disexperienced",

      answer: "inexperienced",

      hint: "<em>disexperienced</em> &rarr; <strong>inexperienced</strong> (in-, not dis-).",

    },

    {

      n: 5,

      adjectives: ["impatient", "impolite", "impleasant", "improbable"],

      wrong: "impleasant",

      answer: "unpleasant",

      hint: "<em>impleasant</em> &rarr; <strong>unpleasant</strong> (un-, not im-).",

    },

    {

      n: 6,

      adjectives: ["illimited", "illegal", "illiterate", "illogical"],

      wrong: "illimited",

      answer: "unlimited",

      hint: "<em>illimited</em> &rarr; <strong>unlimited</strong> (un-, not il-).",

    },

  ];



  var SENTS = [

    {

      n: 1,

      before: "She&rsquo;s a superstar in her own country but still relatively ",

      after: " outside of it.",

      answer: "unknown",

      hint: "Group 1: <strong>unknown</strong> (not well known abroad).",

    },

    {

      n: 2,

      before: "His illness resulted in ",

      after: " attendance at school and he failed all his exams.",

      answer: "irregular",

      hint: "Group 2: <strong>irregular</strong> attendance.",

    },

    {

      n: 3,

      before: "Lara&rsquo;s always punctual, so it&rsquo;s ",

      after: " for her to be late; maybe she&rsquo;s overslept.",

      answer: "unusual",

      hint: "Group 3: <strong>unusual</strong> for her.",

    },

    {

      n: 4,

      before: "The manager was ",

      after: " with his team&rsquo;s performance, despite the two-nil win.",

      answer: "dissatisfied",

      hint: "Group 4: <strong>dissatisfied</strong> with the performance.",

    },

    {

      n: 5,

      before: "Her arm is still injured, so it&rsquo;s highly ",

      after: " that she&rsquo;ll play in the tournament.",

      answer: "improbable",

      hint: "Group 5: <strong>improbable</strong> (very unlikely).",

    },

    {

      n: 6,

      before: "For ten euros a month, you get ",

      after: " access to a huge database of movies.",

      answer: "unlimited",

      hint: "Group 6: <strong>unlimited</strong> access.",

    },

  ];



  function norm(s) {

    return String(s || "")

      .trim()

      .toLowerCase()

      .replace(/\s+/g, " ");

  }



  function mount() {

    var groupsHost = document.getElementById("wf-groups");

    var sentsHost = document.getElementById("wf-sents");

    var fb = document.getElementById("wf-fb");

    if (!groupsHost || !sentsHost) return;



    GROUPS.forEach(function (g) {

      var row = document.createElement("div");

      row.className = "uoe-prefix-group";

      row.dataset.n = String(g.n);

      var adjHtml = g.adjectives

        .map(function (a) {

          return '<span class="uoe-prefix-adj">' + a + "</span>";

        })

        .join("");

      row.innerHTML =

        '<div class="uoe-prefix-num">' +

        g.n +

        ".</div>" +

        '<div class="uoe-prefix-adj-grid">' +

        adjHtml +

        "</div>" +

        '<div class="uoe-prefix-fix"><span>Correct form:</span>' +

        '<input type="text" class="gap uoe-prefix-gap" id="gfix-' +

        g.n +

        '" autocomplete="off" spellcheck="false" aria-label="Group ' +

        g.n +

        ' correct negative form" /></div>' +

        '<p class="uoe-prefix-hint" hidden data-hint="' +

        g.n +

        '">' +

        g.hint +

        "</p>";

      groupsHost.appendChild(row);

    });



    SENTS.forEach(function (s) {

      var p = document.createElement("p");

      p.dataset.n = String(s.n);

      p.innerHTML =

        "<strong>" +

        s.n +

        ".</strong> " +

        s.before +

        '<input type="text" class="gap" id="gsent-' +

        s.n +

        '" autocomplete="off" spellcheck="false" aria-label="Sentence ' +

        s.n +

        '" />' +

        s.after +

        '<span class="p2-inline-key uoe-sent-hint" hidden data-hint="' +

        s.n +

        '">' +

        s.hint +

        "</span>";

      sentsHost.appendChild(p);

    });



    function clearMarks() {

      document.querySelectorAll(".uoe-prefix-group").forEach(function (el) {

        el.classList.remove("is-ok", "is-bad");

      });

      document.querySelectorAll(".uoe-prefix-hint, .uoe-sent-hint").forEach(function (h) {

        h.hidden = true;

      });

      document.querySelectorAll(".gap").forEach(function (inp) {

        inp.classList.remove("ok", "bad");

      });

      if (fb) {

        fb.textContent = "";

        fb.className = "part2-feedback";

      }

    }



    document.querySelectorAll(".gap").forEach(function (inp) {

      inp.addEventListener("input", clearMarks);

    });



    var btnCheck = document.getElementById("btn-check");

    var btnReset = document.getElementById("btn-reset");



    if (btnCheck) {

      btnCheck.addEventListener("click", function () {

        var ok = 0;

        var total = GROUPS.length + SENTS.length;

        var missing = false;



        GROUPS.forEach(function (g) {

          var el = document.getElementById("gfix-" + g.n);

          if (!norm(el && el.value)) missing = true;

        });

        SENTS.forEach(function (s) {

          var el = document.getElementById("gsent-" + s.n);

          if (!norm(el && el.value)) missing = true;

        });



        if (missing) {

          if (fb) {

            fb.textContent = "Fill every box (Ex. 1 and Ex. 2), then check again.";

            fb.className = "part2-feedback show";

          }

          return;

        }



        GROUPS.forEach(function (g) {

          var el = document.getElementById("gfix-" + g.n);

          var good = norm(el.value) === norm(g.answer);

          var row = document.querySelector('.uoe-prefix-group[data-n="' + g.n + '"]');

          if (row) {

            row.classList.toggle("is-ok", good);

            row.classList.toggle("is-bad", !good);

            var hintEl = row.querySelector(".uoe-prefix-hint[data-hint]");

            if (hintEl) hintEl.hidden = good;

          }

          el.classList.toggle("ok", good);

          el.classList.toggle("bad", !good);

          if (good) ok++;

        });



        SENTS.forEach(function (s) {

          var el = document.getElementById("gsent-" + s.n);

          var good = norm(el.value) === norm(s.answer);

          var hint = document.querySelector(

            '.uoe-sent-hint[data-hint="' + s.n + '"]'

          );

          if (hint) hint.hidden = good;

          el.classList.toggle("ok", good);

          el.classList.toggle("bad", !good);

          if (good) ok++;

        });



        if (fb) {

          fb.textContent =

            ok === total

              ? "All " + total + " correct."

              : "Score: " + ok + " / " + total + ".";

          fb.className = "part2-feedback show";

        }



        if (W.MasteringB2Progress) {

          W.MasteringB2Progress.recordCheckFromDom(ok, total);

        }

      });

    }



    if (btnReset) {

      btnReset.addEventListener("click", function () {

        document.querySelectorAll(".gap").forEach(function (inp) {

          inp.value = "";

        });

        clearMarks();

      });

    }

  }



  W.U2_WF_AFFIXES = { mount: mount, GROUPS: GROUPS, SENTS: SENTS };

})(window);

