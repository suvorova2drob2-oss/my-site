(function (W) {
  "use strict";

  var D = W.U2_WRITING_ARTICLE;
  if (!D) return;

  function mount() {
    var step = 0;
    var panels = [0, 1, 2, 3, 4, 5].map(function (i) {
      return document.getElementById("panel-" + i);
    });
    var stepBtns = document.querySelectorAll(".wls-step");

    function showStep(n) {
      step = Math.max(0, Math.min(5, n));
      panels.forEach(function (p, i) {
        if (p) p.classList.toggle("is-active", i === step);
      });
      stepBtns.forEach(function (b) {
        b.classList.toggle("is-active", Number(b.getAttribute("data-step")) === step);
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    stepBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        showStep(Number(b.getAttribute("data-step")));
      });
    });
    document.querySelectorAll("[data-next]").forEach(function (b) {
      b.addEventListener("click", function () {
        showStep(step + 1);
      });
    });
    document.querySelectorAll("[data-prev]").forEach(function (b) {
      b.addEventListener("click", function () {
        showStep(step - 1);
      });
    });

    /* Model paragraphs */
    var titleH = document.getElementById("model-title-h");
    if (titleH) titleH.textContent = D.title;

    var parasHost = document.getElementById("model-paras");
    if (parasHost) {
      parasHost.innerHTML = [1, 2, 3, 4]
        .map(function (n) {
          return (
            '<div class="para-card"><b>' +
            n +
            ".</b> " +
            D.paras[n] +
            "</div>"
          );
        })
        .join("");
    }

    /* Ex 2 — summary match */
    var summaryRows = document.getElementById("summary-rows");
    var summaryBank = document.getElementById("summary-bank");
    if (summaryRows && summaryBank) {
      summaryRows.innerHTML = [1, 2, 3, 4]
        .map(function (n) {
          return (
            '<div class="shm-pair" data-line="' +
            n +
            '">' +
            '<div class="shm-begin"><span class="num">' +
            n +
            '.</span> <span class="begin">' +
            D.paras[n] +
            "</span></div>" +
            '<div class="shm-slot" aria-label="Summary opposite paragraph ' +
            n +
            '"></div></div>'
          );
        })
        .join("");

      summaryBank.innerHTML = ["a", "b", "c", "d"]
        .map(function (L) {
          return (
            '<button type="button" class="shm-ending" data-letter="' +
            L +
            '"><span class="end-key">' +
            L +
            "</span> " +
            D.summaries[L] +
            "</button>"
          );
        })
        .join("");
    }

    function clearSummaryBad() {
      if (summaryRows) {
        summaryRows.querySelectorAll(".shm-pair").forEach(function (row) {
          row.classList.remove("is-bad-line");
        });
      }
      var fb = document.getElementById("summary-fb");
      if (fb) {
        fb.textContent = "";
        fb.className = "wls-feedback";
      }
    }

    var summaryApi =
      W.FCE_SENTENCE_HALVES_MATCH &&
      FCE_SENTENCE_HALVES_MATCH.mount({
        pairsRoot: "#summary-rows",
        bankRoot: "#summary-bank",
        hintEl: "#summary-hint .match-hint-inner",
        onInteract: clearSummaryBad,
      });

    var summaryCheck = document.getElementById("summary-check");
    if (summaryCheck) {
      summaryCheck.addEventListener("click", function () {
        if (summaryApi) summaryApi.clearPicks();
        var linked = summaryApi ? summaryApi.getLinked() : {};
        var ok = 0;
        for (var n = 1; n <= 4; n++) {
          var got = linked[String(n)] || "";
          var good = got === D.summaryKey[n];
          var row = summaryRows.querySelector('.shm-pair[data-line="' + n + '"]');
          if (row) row.classList.toggle("is-bad-line", !!got && !good);
          if (good) ok++;
        }
        var fb = document.getElementById("summary-fb");
        if (fb) {
          fb.textContent = ok + " / 4 correct";
          fb.className = "wls-feedback " + (ok === 4 ? "is-ok" : "is-bad");
        }
        save(ok === 4 ? 35 : Math.round((ok / 4) * 30));
      });
    }

    var summaryReset = document.getElementById("summary-reset");
    if (summaryReset) {
      summaryReset.addEventListener("click", function () {
        if (summaryApi) summaryApi.reset();
        clearSummaryBad();
      });
    }

    /* Ex 3 — MCQ */
    function renderMcq(hostId, block, keyName) {
      var host = document.getElementById(hostId);
      if (!host) return;
      var letters = Object.keys(block.opts);
      var opts = letters
        .map(function (L) {
          var id = hostId + "-" + L;
          return (
            '<li class="opt-line" data-k="' +
            L +
            '"><input type="radio" name="' +
            hostId +
            '" id="' +
            id +
            '" value="' +
            L +
            '" /><span class="letter">' +
            L +
            "</span><label for=\"" +
            id +
            '">' +
            block.opts[L] +
            "</label></li>"
          );
        })
        .join("");
      host.innerHTML =
        '<p class="mcq-stem"><strong>' +
        block.stem +
        "</strong></p><ul class=\"mcq-opts\">" +
        opts +
        "</ul>";
      host.dataset.key = D[keyName];
    }

    renderMcq("reader-mcq", D.readerMcq, "readerKey");
    renderMcq("style-mcq", D.styleMcq, "styleKey");

    function clearMcqMarks() {
      document.querySelectorAll(".mcq-opts li").forEach(function (li) {
        li.classList.remove("ok", "bad-pick");
      });
      var fb = document.getElementById("reader-fb");
      if (fb) {
        fb.textContent = "";
        fb.className = "wls-feedback";
      }
    }

    document.querySelectorAll(".mcq-opts input").forEach(function (inp) {
      inp.addEventListener("change", clearMcqMarks);
    });

    var readerCheck = document.getElementById("reader-check");
    if (readerCheck) {
      readerCheck.addEventListener("click", function () {
        clearMcqMarks();
        var ok = 0;
        var total = 2;
        [["reader-mcq", "readerKey"], ["style-mcq", "styleKey"]].forEach(function (pair) {
          var host = document.getElementById(pair[0]);
          var key = D[pair[1]];
          var checked = host.querySelector('input[name="' + pair[0] + '"]:checked');
          if (!checked) return;
          var pick = checked.value;
          var good = pick === key;
          if (good) ok++;
          var pickLi = host.querySelector('.opt-line[data-k="' + pick + '"]');
          if (pickLi) pickLi.classList.add(good ? "ok" : "bad-pick");
          if (!good) {
            var okLi = host.querySelector('.opt-line[data-k="' + key + '"]');
            if (okLi) okLi.classList.add("ok");
          }
        });
        var fb = document.getElementById("reader-fb");
        if (fb) {
          fb.textContent =
            ok === total
              ? "Both correct: magazine readers · informal style."
              : ok + " / " + total + " correct.";
          fb.className = "wls-feedback " + (ok === total ? "is-ok" : "is-bad");
        }
        save(ok === total ? 50 : 40);
      });
    }

    var readerReset = document.getElementById("reader-reset");
    if (readerReset) {
      readerReset.addEventListener("click", function () {
        document.querySelectorAll(".mcq-opts input").forEach(function (inp) {
          inp.checked = false;
        });
        clearMcqMarks();
      });
    }

    /* Ex 4 — language hunt */
    var langGrid = document.getElementById("lang-grid");
    var langKeys = ["a", "b", "c", "d"];
    if (langGrid) {
      langGrid.innerHTML = langKeys
        .map(function (k) {
          var item = D.langExamples[k];
          return (
            '<div class="lang-row" data-k="' +
            k +
            '">' +
            '<label><input type="checkbox" id="lang-' +
            k +
            '" /> <span><strong>' +
            k +
            ".</strong> " +
            item.label +
            "</span></label>" +
            '<p class="lang-examples" hidden id="lang-ex-' +
            k +
            '">' +
            item.examples +
            "</p></div>"
          );
        })
        .join("");
    }

    function clearLang() {
      langKeys.forEach(function (k) {
        var row = document.querySelector('.lang-row[data-k="' + k + '"]');
        if (row) row.classList.remove("is-ok", "is-bad");
        var ex = document.getElementById("lang-ex-" + k);
        if (ex) ex.hidden = true;
      });
      var fb = document.getElementById("lang-fb");
      if (fb) {
        fb.textContent = "";
        fb.className = "wls-feedback";
      }
    }

    langKeys.forEach(function (k) {
      var cb = document.getElementById("lang-" + k);
      if (cb) cb.addEventListener("change", clearLang);
    });

    var langCheck = document.getElementById("lang-check");
    if (langCheck) {
      langCheck.addEventListener("click", function () {
        var ticked = 0;
        langKeys.forEach(function (k) {
          var cb = document.getElementById("lang-" + k);
          var row = document.querySelector('.lang-row[data-k="' + k + '"]');
          var ex = document.getElementById("lang-ex-" + k);
          var on = cb && cb.checked;
          if (on) ticked++;
          if (row) {
            row.classList.toggle("is-ok", on);
            row.classList.toggle("is-bad", !on);
          }
          if (ex) ex.hidden = !on;
        });
        var fb = document.getElementById("lang-fb");
        if (fb) {
          fb.textContent =
            ticked === 4
              ? "All four categories ticked — model examples shown below each row."
              : "Tick all four rows when you have found examples, then check again (" +
                ticked +
                " / 4 ticked).";
          fb.className = "wls-feedback " + (ticked === 4 ? "is-ok" : "is-bad");
        }
        if (ticked === 4) save(65);
      });
    }

    var langReset = document.getElementById("lang-reset");
    if (langReset) {
      langReset.addEventListener("click", function () {
        langKeys.forEach(function (k) {
          var cb = document.getElementById("lang-" + k);
          if (cb) cb.checked = false;
        });
        clearLang();
      });
    }

    /* Ex 5 — features */
    var featureRows = document.getElementById("feature-rows");
    var featureBank = document.getElementById("feature-bank");
    if (featureRows && featureBank) {
      featureRows.innerHTML = [1, 2, 3]
        .map(function (n) {
          return (
            '<div class="shm-pair" data-line="' +
            n +
            '">' +
            '<div class="shm-begin"><span class="num">' +
            n +
            ".</span> <span class=\"begin\">" +
            D.features[n] +
            "</span></div>" +
            '<div class="shm-slot" aria-label="Purpose opposite feature ' +
            n +
            '"></div></div>'
          );
        })
        .join("");

      featureBank.innerHTML = ["a", "b", "c"]
        .map(function (L) {
          return (
            '<button type="button" class="shm-ending" data-letter="' +
            L +
            '"><span class="end-key">' +
            L +
            "</span> " +
            D.featurePurposes[L] +
            "</button>"
          );
        })
        .join("");
    }

    function clearFeatureBad() {
      if (featureRows) {
        featureRows.querySelectorAll(".shm-pair").forEach(function (row) {
          row.classList.remove("is-bad-line");
        });
      }
      var fb = document.getElementById("feature-fb");
      if (fb) {
        fb.textContent = "";
        fb.className = "wls-feedback";
      }
    }

    var featureApi =
      W.FCE_SENTENCE_HALVES_MATCH &&
      FCE_SENTENCE_HALVES_MATCH.mount({
        pairsRoot: "#feature-rows",
        bankRoot: "#feature-bank",
        onInteract: clearFeatureBad,
      });

    var featureCheck = document.getElementById("feature-check");
    if (featureCheck) {
      featureCheck.addEventListener("click", function () {
        if (featureApi) featureApi.clearPicks();
        var linked = featureApi ? featureApi.getLinked() : {};
        var ok = 0;
        for (var n = 1; n <= 3; n++) {
          var got = linked[String(n)] || "";
          var good = got === D.featureKey[n];
          var row = featureRows.querySelector('.shm-pair[data-line="' + n + '"]');
          if (row) row.classList.toggle("is-bad-line", !!got && !good);
          if (good) ok++;
        }
        var fb = document.getElementById("feature-fb");
        if (fb) {
          fb.textContent = ok + " / 3 correct";
          fb.className = "wls-feedback " + (ok === 3 ? "is-ok" : "is-bad");
        }
        save(ok === 3 ? 80 : 70);
      });
    }

    var featureReset = document.getElementById("feature-reset");
    if (featureReset) {
      featureReset.addEventListener("click", function () {
        if (featureApi) featureApi.reset();
        clearFeatureBad();
      });
    }

    /* Ex 6 — write */
    var ta = document.getElementById("art-ta");
    var wc = document.getElementById("art-wc");
    function updateWc() {
      if (!ta || !wc) return;
      var words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      var inRange = words >= 140 && words <= 190;
      wc.innerHTML =
        "<span" +
        (inRange ? ' class="in-range"' : "") +
        ">" +
        words +
        " words</span><span>Target 140&ndash;190</span>";
      if (words >= 120) save(words >= 140 ? 100 : 92);
    }
    if (ta) ta.addEventListener("input", updateWc);
    updateWc();

    function save(pct) {
      if (W.MasteringB2Progress) {
        W.MasteringB2Progress.record({
          unit: 2,
          skill: "writing",
          exerciseId: "article-sport",
          percent: pct,
        });
      }
    }

    showStep(0);
  }

  W.U2_WRITING_ARTICLE_APP = { mount: mount };
})(window);
