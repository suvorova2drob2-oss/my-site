/** Unit 3 Writing — Essay education (Ex. 3–5 checks) */
(function (W) {
  "use strict";

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function splitList(s) {
    return String(s || "")
      .split(/[;,/\n]+/)
      .map(norm)
      .filter(Boolean);
  }

  function hasPhrase(list, phrase) {
    var p = norm(phrase);
    return list.some(function (item) {
      return item === p || item.indexOf(p) !== -1 || p.indexOf(item) !== -1;
    });
  }

  var COLUMN_MUST = {
    and: ["additionally", "moreover"],
    but: ["however", "on the other hand"],
    so: ["for that reason"],
  };

  var COLUMN_EXTRA = {
    and: ["in addition", "furthermore"],
    but: ["although", "on the one hand"],
    so: ["therefore", "as a result", "consequently"],
  };

  var GAP5 = [
    {
      id: "g1",
      accept: ["therefore", "consequently", "as a result", "for that reason", "so"],
    },
    {
      id: "g2",
      accept: ["on the other hand", "however"],
    },
    { id: "g3", accept: ["although", "though"] },
    {
      id: "g4",
      accept: ["therefore", "consequently", "as a result", "for that reason", "so"],
    },
    {
      id: "g5",
      accept: ["furthermore", "in addition", "moreover", "additionally", "also"],
    },
    {
      id: "g6",
      accept: ["consequently", "as a result", "therefore", "for that reason"],
    },
    { id: "g7", accept: ["however", "on the other hand"] },
    {
      id: "g8",
      accept: ["furthermore", "in addition", "moreover", "additionally", "also"],
    },
    {
      id: "g9",
      accept: ["furthermore", "in addition", "moreover", "additionally", "also"],
    },
  ];

  function scoreColumns() {
    var ok = 0;
    var total = 0;
    ["and", "but", "so"].forEach(function (col) {
      var inp = document.getElementById("col-" + col);
      if (!inp) return;
      var list = splitList(inp.value);
      (COLUMN_MUST[col] || []).concat(COLUMN_EXTRA[col] || []).forEach(function (req) {
        total++;
        var good = hasPhrase(list, req);
        if (good) ok++;
      });
      var mustOk = (COLUMN_MUST[col] || []).every(function (m) {
        return hasPhrase(list, m);
      });
      inp.classList.toggle("ok", mustOk && list.length >= (COLUMN_MUST[col] || []).length);
      inp.classList.toggle("bad", list.length > 0 && !mustOk);
    });
    return { ok: ok, total: total, mustOnly: scoreColumnsMust() };
  }

  function scoreColumnsMust() {
    var ok = 0;
    var total = 0;
    ["and", "but", "so"].forEach(function (col) {
      var inp = document.getElementById("col-" + col);
      if (!inp) return;
      var list = splitList(inp.value);
      (COLUMN_MUST[col] || []).forEach(function (req) {
        total++;
        if (hasPhrase(list, req)) ok++;
      });
    });
    return { ok: ok, total: total };
  }

  function scoreGap5() {
    var ok = 0;
    GAP5.forEach(function (g) {
      var inp = document.getElementById(g.id);
      if (!inp) return;
      var got = norm(inp.value);
      var good =
        got &&
        g.accept.some(function (a) {
          return norm(a) === got;
        });
      inp.classList.toggle("ok", good);
      inp.classList.toggle("bad", got && !good);
      if (good) ok++;
    });
    return { ok: ok, total: GAP5.length };
  }

  function mount(cfg) {
    cfg = cfg || {};
    var fbTable = document.getElementById(cfg.fbTable || "fb-table");
    var fbGap = document.getElementById(cfg.fbGap || "fb-gap");
    var fbAll = document.getElementById(cfg.fbAll || "fb-all");

    var btnTable = document.getElementById("btn-check-table");
    var btnGap = document.getElementById("btn-check-gap5");
    var btnAll = document.getElementById("btn-check-all");

    if (btnTable) {
      btnTable.addEventListener("click", function () {
        var must = scoreColumnsMust();
        scoreColumns();
        if (fbTable) {
          fbTable.textContent =
            must.ok === must.total
              ? "Ex. 3 linkers found in the table (" +
                must.ok +
                "/" +
                must.total +
                "). Add Ex. 4 linkers too, then check all."
              : "Ex. 3: " +
                must.ok +
                "/" +
                must.total +
                " model linkers in the right columns (And / But / So).";
        }
      });
    }

    if (btnGap) {
      btnGap.addEventListener("click", function () {
        var s = scoreGap5();
        if (fbGap) {
          fbGap.textContent = s.ok + " / " + s.total + " correct.";
        }
      });
    }

    if (btnAll) {
      btnAll.addEventListener("click", function () {
        var cols = scoreColumns();
        var gaps = scoreGap5();
        var ok = cols.ok + gaps.ok;
        var total = cols.total + gaps.total;
        if (fbAll) {
          fbAll.textContent =
            ok +
            " / " +
            total +
            " (linker table " +
            cols.ok +
            "/" +
            cols.total +
            ", sentences " +
            gaps.ok +
            "/" +
            gaps.total +
            ").";
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, total);
        }
      });
    }

    var ta = document.getElementById("wep-essay-edu");
    var wc = document.getElementById("wep-wc-edu");
    if (ta && wc) {
      function renderWc() {
        var t = norm(ta.value);
        var n = t ? t.split(" ").filter(Boolean).length : 0;
        wc.innerHTML = "Words: <strong>" + n + "</strong> (target 140&ndash;190)";
        wc.classList.toggle("is-ok", n >= 140 && n <= 190);
        wc.classList.toggle("is-warn", n > 0 && (n < 140 || n > 190));
      }
      ta.addEventListener("input", renderWc);
      renderWc();
    }
  }

  W.U3_WRITING_ESSAY_EDU = {
    mount: mount,
    COLUMN_MUST: COLUMN_MUST,
    GAP5: GAP5,
  };
})(window);
