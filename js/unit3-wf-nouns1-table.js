/** Unit 3 Word formation — Nouns 1 table (verb/adj → noun) */
(function (W) {
  "use strict";

  var ROWS = [
    { n: 1, base: "similar", accept: ["similarity"] },
    { n: 2, base: "appear", accept: ["appearance"] },
    { n: 3, base: "generous", accept: ["generosity"] },
    { n: 4, base: "explain", accept: ["explanation"] },
    { n: 5, base: "lonely", accept: ["loneliness"] },
    { n: 6, base: "object", accept: ["objection"] },
    { n: 7, base: "exist", accept: ["existence"] },
    { n: 8, base: "govern", accept: ["government"] },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function mount() {
    var tbody = document.getElementById("wf-table-body");
    if (!tbody) return;

    ROWS.forEach(function (row) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        '<td class="wf-num">' +
        row.n +
        '</td><td class="wf-base">' +
        row.base +
        '</td><td><input type="text" class="wf-gap" id="wf-' +
        row.n +
        '" maxlength="48" autocomplete="off" spellcheck="false" aria-label="Noun for ' +
        row.base +
        '" /></td>';
      tbody.appendChild(tr);
    });

    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");
    var fb = document.getElementById("wf-fb");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        ROWS.forEach(function (row) {
          var inp = document.getElementById("wf-" + row.n);
          if (!inp) return;
          var got = norm(inp.value);
          var good =
            got &&
            (row.accept || []).some(function (a) {
              return norm(a) === got;
            });
          inp.classList.toggle("ok", good);
          inp.classList.toggle("bad", got && !good);
          if (good) ok++;
        });
        if (fb) {
          fb.textContent =
            ok === ROWS.length
              ? "All " + ROWS.length + " correct."
              : "Score: " + ok + " / " + ROWS.length + ".";
          fb.className = "part2-feedback show " + (ok === ROWS.length ? "ok" : "bad");
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, ROWS.length);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        ROWS.forEach(function (row) {
          var inp = document.getElementById("wf-" + row.n);
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

  W.U3_WF_NOUNS1_TABLE = { mount: mount, ROWS: ROWS };
})(window);
