/** Unit 3 — Expressions with as … as (coursebook MCQ + matching) */
(function (W) {
  "use strict";

  var MCQ = [
    {
      id: 1,
      key: "soon",
      opts: ["well", "soon"],
      tail: "I heard the phone, I got out of the bath.",
    },
    {
      id: 2,
      key: "many",
      opts: ["many", "long"],
      tail: "5,000 students enrolled last year.",
    },
    {
      id: 3,
      key: "well",
      opts: ["much", "well"],
      tail: "being an accomplished musician, he has a great voice.",
    },
    {
      id: 4,
      key: "long",
      opts: ["far", "long"],
      embedded: true,
      before: "You can go to the party as ",
      after: " as you\u2019ve finished the majority of your work.",
    },
    {
      id: 5,
      key: "far",
      opts: ["far", "much"],
      embedded: true,
      before: "She\u2019s the best woman for the position as ",
      after: " as I\u2019m concerned.",
    },
  ];

  var MATCH = [
    { line: 1, key: "d" },
    { line: 2, key: "c" },
    { line: 3, key: "b" },
    { line: 4, key: "e" },
    { line: 5, key: "a" },
  ];

  var MEANINGS = {
    a: "in addition to",
    b: "immediately",
    c: "in my opinion",
    d: "provided",
    e: "a surprisingly large number of",
  };

  var EXPRESSIONS = {
    1: "as long as",
    2: "as far as I\u2019m concerned",
    3: "as soon as",
    4: "as many as",
    5: "as well as",
  };

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function mountMcq(rootId) {
    var root = document.getElementById(rootId || "mcq-root");
    if (!root) return;

    MCQ.forEach(function (q) {
      var row = document.createElement("div");
      row.className = "mcq-row";
      row.dataset.id = String(q.id);
      var p = document.createElement("p");
      p.className = "mcq-prompt";
      if (q.embedded) {
        p.innerHTML = "<strong>" + q.id + ".</strong> " + q.before;
      } else {
        p.innerHTML = "<strong>" + q.id + ".</strong> As ";
      }
      q.opts.forEach(function (opt, i) {
        if (i) p.appendChild(document.createTextNode(" / "));
        var lab = document.createElement("label");
        lab.className = "mcq-opt";
        var inp = document.createElement("input");
        inp.type = "radio";
        inp.name = "mcq-" + q.id;
        inp.value = opt;
        lab.appendChild(inp);
        lab.appendChild(document.createTextNode(" " + opt));
        p.appendChild(lab);
      });
      if (q.embedded) {
        p.appendChild(document.createTextNode(q.after));
      } else {
        p.appendChild(document.createTextNode(" as " + q.tail));
      }
      row.appendChild(p);
      root.appendChild(row);
    });
  }

  function scoreMcq() {
    var ok = 0;
    MCQ.forEach(function (q) {
      var picked = document.querySelector('input[name="mcq-' + q.id + '"]:checked');
      var row = document.querySelector('.mcq-row[data-id="' + q.id + '"]');
      var good = picked && norm(picked.value) === norm(q.key);
      if (row) {
        row.classList.toggle("is-ok", !!good);
        row.classList.toggle("is-bad", picked && !good);
      }
      if (good) ok++;
    });
    return ok;
  }

  function mountMatch(rootId) {
    var root = document.getElementById(rootId || "match-root");
    if (!root) return;

    var letters = ["a", "b", "c", "d", "e"];
    var html =
      '<div class="match-grid">' +
      '<div class="match-col"><strong>Expressions 1&ndash;5</strong><ol class="match-list">';
    MATCH.forEach(function (m) {
      html +=
        '<li><span class="match-expr">' +
        m.line +
        ". " +
        EXPRESSIONS[m.line] +
        "</span></li>";
    });
    html += '</ol></div><div class="match-col"><strong>Your answers</strong>';
    MATCH.forEach(function (m) {
      html +=
        '<div class="match-ans-row">' +
        '<label for="match-' +
        m.line +
        '">' +
        m.line +
        ".</label>" +
        '<select id="match-' +
        m.line +
        '" data-line="' +
        m.line +
        '">' +
        '<option value="">— choose —</option>';
      letters.forEach(function (L) {
        html +=
          '<option value="' +
          L +
          '">' +
          L +
          ") " +
          MEANINGS[L] +
          "</option>";
      });
      html += "</select></div>";
    });
    html += "</div></div>";
    root.innerHTML = html;
  }

  function scoreMatch() {
    var ok = 0;
    MATCH.forEach(function (m) {
      var sel = document.getElementById("match-" + m.line);
      if (!sel) return;
      var good = norm(sel.value) === norm(m.key);
      sel.classList.toggle("is-ok", good && sel.value);
      sel.classList.toggle("is-bad", sel.value && !good);
      if (good) ok++;
    });
    return ok;
  }

  function mount(cfg) {
    cfg = cfg || {};
    mountMcq(cfg.mcqId || "mcq-root");
    mountMatch(cfg.matchId || "match-root");

    var fbMcq = document.getElementById("fb-mcq");
    var fbMatch = document.getElementById("fb-match");
    var fbAll = document.getElementById("fb-all");

    var btnMcq = document.getElementById("btn-check-mcq");
    var btnMatch = document.getElementById("btn-check-match");
    var btnAll = document.getElementById("btn-check-all");

    if (btnMcq) {
      btnMcq.addEventListener("click", function () {
        var ok = scoreMcq();
        if (fbMcq) {
          fbMcq.textContent = ok + " / " + MCQ.length + " correct.";
          fbMcq.className = "voc-feedback show " + (ok === MCQ.length ? "is-ok" : "is-bad");
        }
      });
    }

    if (btnMatch) {
      btnMatch.addEventListener("click", function () {
        var ok = scoreMatch();
        if (fbMatch) {
          fbMatch.textContent = ok + " / " + MATCH.length + " correct.";
          fbMatch.className = "voc-feedback show " + (ok === MATCH.length ? "is-ok" : "is-bad");
        }
      });
    }

    if (btnAll) {
      btnAll.addEventListener("click", function () {
        var okM = scoreMcq();
        var okT = scoreMatch();
        var ok = okM + okT;
        var total = MCQ.length + MATCH.length;
        if (fbAll) {
          fbAll.textContent =
            ok +
            " / " +
            total +
            " correct (MCQ " +
            okM +
            "/" +
            MCQ.length +
            ", match " +
            okT +
            "/" +
            MATCH.length +
            ").";
          fbAll.className = "voc-feedback show " + (ok === total ? "is-ok" : "is-bad");
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, total);
        }
      });
    }
  }

  W.U3_AS_AS_COURSEBOOK = {
    mount: mount,
    MCQ: MCQ,
    MATCH: MATCH,
    MEANINGS: MEANINGS,
  };
})(window);
