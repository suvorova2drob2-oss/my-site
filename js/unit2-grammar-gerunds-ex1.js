/** Unit 2 Grammar — Gerunds and infinitives · Ex. 1 (High Energy) */
(function (W) {
  "use strict";

  var ITEMS = [
    {
      n: 0,
      example: true,
      before: "I regret ",
      after: " my appointment. Now I have to wait ages for the next one!",
      options: [
        { id: "miss", label: "miss" },
        { id: "missing", label: "missing" },
        { id: "to miss", label: "to miss" },
      ],
      correct: ["missing"],
      hint: "",
    },
    {
      n: 1,
      before: "Our teacher always makes us ",
      after: " two hours of homework every night!",
      options: [
        { id: "do", label: "do" },
        { id: "doing", label: "doing" },
        { id: "to do", label: "to do" },
      ],
      correct: ["do"],
      hint:
        "After <strong>make</strong> + object, use the bare infinitive: <em>make us do</em>.",
    },
    {
      n: 2,
      before: "Tim and Lisa would hate ",
      after: " in the middle of nowhere.",
      options: [
        { id: "live", label: "live" },
        { id: "living", label: "living" },
        { id: "to live", label: "to live" },
      ],
      correct: ["living", "to live"],
      hint:
        "After <strong>would hate</strong>, both <em>-ing</em> and <em>to + infinitive</em> are possible here.",
    },
    {
      n: 3,
      before: "Why did the man deny ",
      after: " the crime? He was clearly guilty.",
      options: [
        { id: "commit", label: "commit" },
        { id: "committing", label: "committing" },
        { id: "to commit", label: "to commit" },
      ],
      correct: ["committing"],
      hint:
        "<strong>deny</strong> is followed by a gerund: <em>deny committing</em>.",
    },
    {
      n: 4,
      before: "We&rsquo;re having trouble ",
      after: " volunteers for the charity event.",
      options: [
        { id: "find", label: "find" },
        { id: "finding", label: "finding" },
        { id: "to find", label: "to find" },
      ],
      correct: ["finding"],
      hint:
        "<strong>have trouble</strong> + <em>-ing</em>: <em>having trouble finding</em>.",
    },
    {
      n: 5,
      before: "If you have the opportunity ",
      after: " something new, go for it!",
      options: [
        { id: "try", label: "try" },
        { id: "trying", label: "trying" },
        { id: "to try", label: "to try" },
      ],
      correct: ["to try"],
      hint:
        "<strong>opportunity</strong> + <em>to + infinitive</em>: <em>opportunity to try</em>.",
    },
    {
      n: 6,
      before: "You mustn&rsquo;t ",
      after: " any electronic devices during the exam.",
      options: [
        { id: "use", label: "use" },
        { id: "using", label: "using" },
        { id: "to use", label: "to use" },
      ],
      correct: ["use"],
      hint:
        "Modal <strong>mustn&rsquo;t</strong> + bare infinitive: <em>mustn&rsquo;t use</em>.",
    },
    {
      n: 7,
      before: "Adam would prefer ",
      after: " with family rather than friends.",
      options: [
        { id: "travel", label: "travel" },
        { id: "travelling", label: "travelling" },
        { id: "to travel", label: "to travel" },
      ],
      correct: ["travelling", "to travel"],
      hint:
        "<strong>would prefer</strong> + <em>-ing</em> or <em>to + infinitive</em> — both fit here.",
    },
    {
      n: 8,
      before: "Can you persuade your dad ",
      after: " us a lift home after the party?",
      options: [
        { id: "give", label: "give" },
        { id: "giving", label: "giving" },
        { id: "to give", label: "to give" },
      ],
      correct: ["to give"],
      hint:
        "<strong>persuade</strong> + object + <em>to + infinitive</em>: <em>persuade your dad to give</em>.",
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
    var items = cfg.items || ITEMS;
    var host = document.getElementById(cfg.listId || cfg.hostId || "gram-rows");
    if (!host) return;

    var inline = !!cfg.inline;
    var picks = {};
    var fb = document.getElementById(cfg.feedbackId || "gram-fb");
    var btnCheck = document.getElementById(cfg.checkId || "btn-check");
    var btnReset = document.getElementById(cfg.resetId || "btn-reset");
    var checkPrompt =
      cfg.checkPrompt ||
      "Choose an option in every sentence (1\u20138), then check again.";

    function scoredItems() {
      return items.filter(function (it) {
        return !it.example;
      });
    }

    function bindOptionClicks(root) {
      root.querySelectorAll(".gram-opt[data-n]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var n = btn.getAttribute("data-n");
          var id = btn.getAttribute("data-id");
          picks[n] = id;
          root.querySelectorAll('.gram-opt[data-n="' + n + '"]').forEach(function (b) {
            b.classList.toggle("is-pick", b === btn);
          });
          var mark = inline
            ? root.querySelector('.gram-inline-gap[data-n="' + n + '"]')
            : root.querySelector('.gram-row[data-n="' + n + '"]');
          if (mark) {
            mark.classList.remove("is-ok", "is-bad");
            var hint = mark.querySelector ? mark.querySelector(".gram-hint") : null;
            if (hint) hint.style.display = "";
          }
          if (fb) {
            fb.textContent = "";
            fb.className = "gram-feedback";
          }
        });
      });
    }

    function renderRows() {
      host.innerHTML = "";
      host.className = cfg.listClass || "gram-rows";
      items.forEach(function (it) {
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
            html +=
              '<span class="' +
              cls +
              '" aria-hidden="true">' +
              esc(opt.label) +
              "</span>";
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
          "</span>" +
          '<span class="gram-tail">' +
          it.after +
          "</span></span>";

        if (it.hint) {
          html += '<p class="gram-hint">' + it.hint + "</p>";
        }

        row.innerHTML = html;
        host.appendChild(row);
      });
      bindOptionClicks(host);
    }

    function renderInline() {
      host.className = cfg.listClass || "gram-inline-host";
      var html = '<p class="gram-inline-post">';
      items.forEach(function (it) {
        html += it.before || "";
        if (it.example) {
          html += '<span class="gram-inline-gap is-example" data-n="' + it.n + '">';
          html += '<span class="gram-gap-num">(' + it.n + ")</span><span class=\"gram-opts\">";
          it.options.forEach(function (opt, oi) {
            if (oi) html += '<span class="gram-sep">/</span>';
            var cls =
              it.correct.indexOf(opt.id) >= 0 ? "gram-opt is-key" : "gram-opt";
            html += '<span class="' + cls + '" aria-hidden="true">' + esc(opt.label) + "</span>";
          });
          html += "</span></span>";
        } else {
          html += '<span class="gram-inline-gap" data-n="' + it.n + '">';
          html += '<span class="gram-gap-num">(' + it.n + ")</span><span class=\"gram-opts\">";
          it.options.forEach(function (opt, oi) {
            if (oi) html += '<span class="gram-sep">/</span>';
            html +=
              '<button type="button" class="gram-opt" data-n="' +
              it.n +
              '" data-id="' +
              esc(opt.id) +
              '">' +
              esc(opt.label) +
              "</button>";
          });
          html += "</span>";
          if (it.hint) {
            html += '<span class="gram-hint">' + it.hint + "</span>";
          }
          html += "</span>";
        }
        html += it.after || "";
      });
      html += "</p>";
      host.innerHTML = html;
      bindOptionClicks(host);
    }

    function clearMarks() {
      if (inline) {
        host.querySelectorAll(".gram-inline-gap:not(.is-example)").forEach(function (gap) {
          gap.classList.remove("is-ok", "is-bad");
        });
      } else {
        host.querySelectorAll(".gram-row:not(.is-example)").forEach(function (row) {
          row.classList.remove("is-ok", "is-bad");
        });
      }
      if (fb) {
        fb.textContent = "";
        fb.className = "gram-feedback";
      }
    }

    function check() {
      var scored = scoredItems();
      var missing = scored.some(function (it) {
        return !picks[String(it.n)];
      });
      if (missing) {
        if (fb) {
          fb.textContent = checkPrompt;
          fb.className = "gram-feedback is-bad";
        }
        return;
      }

      var ok = 0;
      scored.forEach(function (it) {
        var pick = picks[String(it.n)];
        var good = it.correct.indexOf(pick) >= 0;
        var mark = inline
          ? host.querySelector('.gram-inline-gap[data-n="' + it.n + '"]')
          : host.querySelector('.gram-row[data-n="' + it.n + '"]');
        if (mark) {
          mark.classList.toggle("is-ok", good);
          mark.classList.toggle("is-bad", !good);
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

    if (inline) renderInline();
    else renderRows();

    if (btnCheck) btnCheck.addEventListener("click", check);
    if (btnReset) btnReset.addEventListener("click", reset);
  }

  W.U2_GR_GERUNDS_EX1 = { mount: mount, ITEMS: ITEMS };
})(window);
