/** Unit 2 Word formation — Affixes blog (High Energy WB Ex. 3)

 *  Find → click mistake in blog → type fix in rail → Check + review key

 */

(function (W) {

  "use strict";



  var EXAMPLE = { n: 0, wrong: "sociable", answer: "unsociable" };



  var MISTAKES = [

    { n: 1, wrong: "dispolite", answers: ["impolite"] },

    { n: 2, wrong: "spectater", answers: ["spectator"] },

    { n: 3, wrong: "organisor", answers: ["organiser", "organizer"] },

    { n: 4, wrong: "unexperienced", answers: ["inexperienced"] },

    { n: 5, wrong: "unlikeable", answers: ["unlikely"] },

    { n: 6, wrong: "regular", answers: ["regularly"] },

    { n: 7, wrong: "insure", answers: ["unsure"] },

    { n: 8, wrong: "trainists", answers: ["trainees"] },

  ];



  function norm(s) {

    return String(s || "")

      .trim()

      .toLowerCase()

      .replace(/\s+/g, " ");

  }



  function tapSpan(n, word) {

    return (

      '<button type="button" class="wf-tap" data-n="' +

      n +

      '" aria-label="Possible mistake ' +

      n +

      '">' +

      word +

      "</button>"

    );

  }



  function renderBlog(container) {

    container.innerHTML =

      "<p>My husband, Luca, used to be a really " +

      '<span class="wf-example-wrong">sociable</span> ' +

      '<span class="wf-example-tag">(0)</span> ' +

      '<span class="wf-example-fix">unsociable</span> person. He didn&rsquo;t like talking to people he didn&rsquo;t know and people thought he was being ' +

      tapSpan(1, "dispolite") +

      ". Then, one day, he was a " +

      tapSpan(2, "spectater") +

      " at a hockey match that an ex-colleague had invited him to. One of their players had overslept, so they needed a player and the " +

      tapSpan(3, "organisor") +

      " asked him to step in. Luca explained that he was " +

      tapSpan(4, "unexperienced") +

      ", but she said that wasn&rsquo;t a problem and handed him a stick. Luca had been a bit dishonest because he had actually played hockey when he was at school, but he hated it. At that time, he thought it was " +

      tapSpan(5, "unlikeable") +

      " that he&rsquo;d ever play again.</p>" +

      "<p>Anyway, fast forward two years and he plays " +

      tapSpan(6, "regular") +

      " in the team. He&rsquo;s still a bit " +

      tapSpan(7, "insure") +

      " of himself, but it has given him so much confidence. He&rsquo;s an engineer and it&rsquo;s even helped him at work. Now, he doesn&rsquo;t stress each time he has to teach a new group of " +

      tapSpan(8, "trainists") +

      ". I would recommend joining a team if you are shy. It helped my husband and can help you too!</p>";

  }



  function renderForm(host) {

    host.innerHTML = "";

    MISTAKES.forEach(function (m) {

      var row = document.createElement("div");

      row.className = "wf-err-row is-locked";

      row.dataset.n = String(m.n);

      row.innerHTML =

        "<label for=\"fix-" +

        m.n +

        '">' +

        m.n +

        ".</label>" +

        '<span class="wf-err-prompt">Click the mistake in the blog</span>' +

        '<span class="wf-err-wrong" hidden>' +

        m.wrong +

        "</span>" +

        '<input type="text" class="gap" id="fix-' +

        m.n +

        '" disabled autocomplete="off" spellcheck="false" aria-label="Correction ' +

        m.n +

        '" placeholder="correct form" />';

      host.appendChild(row);

    });

  }



  function mount() {

    var blog = document.getElementById("blog-text");

    var form = document.getElementById("wf-err-form");

    var fb = document.getElementById("wf-fb");

    var review = document.getElementById("wf-review");

    var foundCountEl = document.getElementById("wf-found-count");

    if (!blog || !form) return;



    var found = {};

    var checked = false;



    renderBlog(blog);

    renderForm(form);



    function rowFor(n) {

      return form.querySelector('.wf-err-row[data-n="' + n + '"]');

    }



    function tapFor(n) {

      return blog.querySelector('.wf-tap[data-n="' + n + '"]');

    }



    function inputFor(n) {

      return document.getElementById("fix-" + n);

    }



    function updateFoundCount() {

      var c = Object.keys(found).length;

      if (foundCountEl) {

        foundCountEl.textContent = "Found: " + c + " / " + MISTAKES.length;

      }

    }



    function unlockRow(n) {

      var row = rowFor(n);

      var inp = inputFor(n);

      var tap = tapFor(n);

      if (!row || !inp) return;

      row.classList.remove("is-locked");

      row.classList.add("is-found");

      var prompt = row.querySelector(".wf-err-prompt");

      var wrong = row.querySelector(".wf-err-wrong");

      if (prompt) prompt.hidden = true;

      if (wrong) wrong.hidden = false;

      inp.disabled = false;

      if (tap) tap.classList.add("is-found");

      inp.focus();

    }



    function onTapClick(ev) {

      if (checked) return;

      var btn = ev.currentTarget;

      var n = Number(btn.getAttribute("data-n"));

      found[n] = true;

      unlockRow(n);

      updateFoundCount();

      clearCheckMarks(false);

    }



    blog.querySelectorAll(".wf-tap").forEach(function (btn) {

      btn.addEventListener("click", onTapClick);

    });



    form.querySelectorAll(".gap").forEach(function (inp) {

      inp.addEventListener("input", function () {

        if (!checked) clearCheckMarks(false);

      });

    });



    function clearCheckMarks(clearFound) {

      form.querySelectorAll(".wf-err-row").forEach(function (row) {

        row.classList.remove("is-ok", "is-bad");

      });

      form.querySelectorAll(".gap").forEach(function (inp) {

        inp.classList.remove("ok", "bad");

      });

      blog.querySelectorAll(".wf-tap").forEach(function (t) {

        t.classList.remove("is-ok", "is-bad", "is-missed");

      });

      if (fb) {

        fb.textContent = "";

        fb.className = "part2-feedback";

      }

      if (review) {

        review.hidden = true;

        review.innerHTML = "";

      }

      checked = false;

      if (clearFound) {

        found = {};

        MISTAKES.forEach(function (m) {

          var row = rowFor(m.n);

          var inp = inputFor(m.n);

          var tap = tapFor(m.n);

          if (row) {

            row.classList.add("is-locked");

            row.classList.remove("is-found");

            var prompt = row.querySelector(".wf-err-prompt");

            var wrong = row.querySelector(".wf-err-wrong");

            if (prompt) prompt.hidden = false;

            if (wrong) wrong.hidden = true;

          }

          if (inp) {

            inp.value = "";

            inp.disabled = true;

          }

          if (tap) tap.classList.remove("is-found");

        });

        updateFoundCount();

      }

    }



    function buildReview(scoreFind, scoreFix) {

      if (!review) return;

      var html =

        '<div class="uoe-blog-review-head">Review — all eight affix mistakes</div>' +

        "<p class=\"uoe-blog-review-meta\">You found <strong>" +

        scoreFind +

        "</strong> / " +

        MISTAKES.length +

        " and wrote <strong>" +

        scoreFix +

        "</strong> correct forms.</p><ol class=\"uoe-blog-review-list\">";

      MISTAKES.forEach(function (m) {

        var wasFound = !!found[m.n];

        var inp = inputFor(m.n);

        var val = norm(inp && inp.value);

        var good = m.answers.some(function (a) {

          return norm(a) === val;

        });

        var key = m.answers[0];

        html +=

          '<li class="uoe-blog-review-item' +

          (good ? " is-ok" : " is-bad") +

          '">' +

          "<strong>" +

          m.n +

          ".</strong> " +

          '<span class="uoe-blog-review-wrong">' +

          m.wrong +

          "</span>" +

          " &rarr; " +

          '<span class="uoe-blog-review-key">' +

          key +

          "</span>";

        if (!wasFound) {

          html += ' <span class="uoe-blog-review-note">(not found in text)</span>';

        } else if (!good) {

          html +=

            ' <span class="uoe-blog-review-note">(your answer: ' +

            (inp && inp.value ? inp.value : "—") +

            ")</span>";

        }

        html += "</li>";

      });

      html += "</ol>";

      review.innerHTML = html;

      review.hidden = false;

    }



    var btnCheck = document.getElementById("btn-check");

    var btnReset = document.getElementById("btn-reset");



    if (btnCheck) {

      btnCheck.addEventListener("click", function () {

        var foundN = Object.keys(found).length;

        if (foundN < MISTAKES.length) {

          if (fb) {

            fb.textContent =

              "Find all eight mistakes in the blog first (click each one). Found: " +

              foundN +

              " / " +

              MISTAKES.length +

              ".";

            fb.className = "part2-feedback show";

          }

          return;

        }



        var missingFix = MISTAKES.some(function (m) {

          return !norm(inputFor(m.n) && inputFor(m.n).value);

        });

        if (missingFix) {

          if (fb) {

            fb.textContent = "Write a correction for every mistake you found (1\u20138), then check again.";

            fb.className = "part2-feedback show";

          }

          return;

        }



        checked = true;

        var okFix = 0;

        MISTAKES.forEach(function (m) {

          var el = inputFor(m.n);

          var tap = tapFor(m.n);

          var val = norm(el.value);

          var good = m.answers.some(function (a) {

            return norm(a) === val;

          });

          var row = rowFor(m.n);

          if (row) {

            row.classList.toggle("is-ok", good);

            row.classList.toggle("is-bad", !good);

          }

          if (el) {

            el.classList.toggle("ok", good);

            el.classList.toggle("bad", !good);

          }

          if (tap) {

            tap.classList.toggle("is-ok", good);

            tap.classList.toggle("is-bad", !good);

            if (!found[m.n]) tap.classList.add("is-missed");

          }

          if (good) okFix++;

        });



        buildReview(foundN, okFix);



        if (fb) {

          fb.textContent =

            okFix === MISTAKES.length

              ? "All " + MISTAKES.length + " corrections correct. See review below."

              : "Score: " + okFix + " / " + MISTAKES.length + ". See review below.";

          fb.className = "part2-feedback show";

        }



        if (W.MasteringB2Progress) {

          W.MasteringB2Progress.recordCheckFromDom(okFix, MISTAKES.length);

        }

      });

    }



    if (btnReset) {

      btnReset.addEventListener("click", function () {

        clearCheckMarks(true);

      });

    }



    updateFoundCount();

  }



  W.U2_WF_AFFIXES_BLOG = {

    mount: mount,

    MISTAKES: MISTAKES,

    EXAMPLE: EXAMPLE,

  };

})(window);

