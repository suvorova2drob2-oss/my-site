/**
 * Reading / workbook: match numbered statements to option letters (countries, headings, etc.).
 * Reuses FCE Listening Part 3 select styling — letters may repeat across rows (unlike Part 3 speakers).
 * Global: FCE_READING_STATEMENT_MATCH.mount({ root, instruction, options, rows, answerKey })
 *
 * options: [{ letter: "A", text: "South Korea" }, …]
 * rows: [{ n: 1, text: "…", picks: 1 }, { n: 5, text: "…", picks: 2 }]
 * answerKey: { "1": ["C"], "5": ["A", "E"] } — order within picks: 2 does not matter
 */
(function (global) {
  "use strict";

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normLetter(v) {
    return String(v || "")
      .trim()
      .toUpperCase();
  }

  function setsEqual(a, b) {
    if (a.length !== b.length) return false;
    var sa = a.slice().sort().join(",");
    var sb = b.slice().sort().join(",");
    return sa === sb;
  }

  function mount(opts) {
    var root =
      typeof opts.root === "string"
        ? document.querySelector(opts.root)
        : opts.root;
    if (!root) {
      console.warn("[FCE_READING_STATEMENT_MATCH] missing root");
      return null;
    }
    var options = opts.options || [];
    var rows = opts.rows || [];
    var answerKey = opts.answerKey || {};
    var instruction = opts.instruction || "";

    var optionLetters = options.map(function (o) {
      return normLetter(o.letter);
    });

    root.innerHTML =
      (instruction
        ? '<p class="fce-rsm-instr">' + esc(instruction) + "</p>"
        : "") +
      '<div class="fce-p3-split fce-p3-split--labels-right fce-rsm-split">' +
      '<div class="fce-p3-panel fce-rsm-statements">' +
      '<h3>Statements</h3>' +
      '<div class="fce-rsm-rows" data-fce-rsm-rows></div>' +
      "</div>" +
      '<div class="fce-p3-panel fce-rsm-bank">' +
      '<h3>Countries</h3>' +
      '<div data-fce-rsm-options></div>' +
      "</div>" +
      "</div>" +
      '<p class="fce-rsm-feedback" data-fce-rsm-feedback hidden></p>';

    var optHost = root.querySelector("[data-fce-rsm-options]");
    optHost.innerHTML = options
      .map(function (o) {
        return (
          '<div class="fce-p3-opt"><span class="letter">' +
          esc(normLetter(o.letter)) +
          "</span><span>" +
          esc(o.text || "") +
          "</span></div>"
        );
      })
      .join("");

    var rowsHost = root.querySelector("[data-fce-rsm-rows]");
    var rowState = [];

    rows.forEach(function (row) {
      var picks = Math.max(1, row.picks || 1);
      var wrap = document.createElement("div");
      wrap.className =
        "fce-rsm-row" + (picks > 1 ? " fce-rsm-row--multi" : "");
      wrap.setAttribute("data-num", String(row.n));

      var lab = document.createElement("div");
      lab.className = "fce-rsm-row-text";
      lab.innerHTML =
        "<strong>" +
        esc(String(row.n)) +
        ".</strong> " +
        esc(row.text || "");
      wrap.appendChild(lab);

      var selWrap = document.createElement("div");
      selWrap.className = "fce-rsm-sels";
      var selects = [];
      for (var p = 0; p < picks; p++) {
        var sel = document.createElement("select");
        sel.className = "fce-rsm-sel";
        sel.setAttribute("aria-label", "Country for statement " + row.n);
        var opt0 = document.createElement("option");
        opt0.value = "";
        opt0.textContent = "—";
        sel.appendChild(opt0);
        options.forEach(function (o) {
          var opt = document.createElement("option");
          opt.value = normLetter(o.letter);
          opt.textContent = normLetter(o.letter);
          sel.appendChild(opt);
        });
        selWrap.appendChild(sel);
        selects.push(sel);
      }
      wrap.appendChild(selWrap);

      var keyEl = document.createElement("span");
      keyEl.className = "gap-key";
      keyEl.setAttribute("aria-live", "polite");
      wrap.appendChild(keyEl);

      rowsHost.appendChild(wrap);
      rowState.push({ n: row.n, selects: selects, keyEl: keyEl, picks: picks });
    });

    function clearMarks() {
      rowState.forEach(function (st) {
        st.selects.forEach(function (s) {
          s.classList.remove("correct", "wrong");
        });
        st.keyEl.classList.remove("show");
        st.keyEl.textContent = "";
      });
      var fb = root.querySelector("[data-fce-rsm-feedback]");
      if (fb) fb.hidden = true;
    }

    rowState.forEach(function (st) {
      st.selects.forEach(function (sel) {
        sel.addEventListener("change", clearMarks);
      });
    });

    function getUserForRow(st) {
      var out = [];
      st.selects.forEach(function (sel) {
        var v = normLetter(sel.value);
        if (v) out.push(v);
      });
      return out;
    }

    function check() {
      var fb = root.querySelector("[data-fce-rsm-feedback]");
      var total = rowState.length;
      var okRows = 0;
      var missing = false;

      rowState.forEach(function (st) {
        var user = getUserForRow(st);
        if (user.length < st.picks) missing = true;
      });

      if (missing) {
        if (fb) {
          fb.hidden = false;
          fb.textContent =
            "Choose a country letter for every statement before checking.";
          fb.classList.remove("is-all-ok");
        }
        return { ok: 0, total: total, incomplete: true };
      }

      rowState.forEach(function (st) {
        var user = getUserForRow(st);
        var keyRaw = answerKey[String(st.n)] || answerKey[st.n] || [];
        var key = keyRaw.map(normLetter).filter(Boolean);
        var rowOk = setsEqual(user, key);
        if (rowOk) okRows++;

        st.selects.forEach(function (sel, idx) {
          sel.classList.remove("correct", "wrong");
          var v = normLetter(sel.value);
          if (!v) return;
          if (rowOk) sel.classList.add("correct");
          else sel.classList.add("wrong");
        });

        st.keyEl.classList.remove("show");
        st.keyEl.textContent = "";
        if (!rowOk && key.length) {
          st.keyEl.textContent = key.join(" + ");
          st.keyEl.classList.add("show");
        }
      });

      if (fb) {
        fb.hidden = false;
        fb.classList.toggle("is-all-ok", okRows === total);
        if (okRows === total) {
          fb.textContent = "All correct ✓";
        } else {
          fb.textContent =
            okRows +
            " / " +
            total +
            " correct · red = check again · green key shows answer";
        }
      }
      return { ok: okRows, total: total, incomplete: false };
    }

    function reset() {
      rowState.forEach(function (st) {
        st.selects.forEach(function (sel) {
          sel.value = "";
        });
      });
      clearMarks();
    }

    return { check: check, reset: reset, optionLetters: optionLetters };
  }

  global.FCE_READING_STATEMENT_MATCH = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
