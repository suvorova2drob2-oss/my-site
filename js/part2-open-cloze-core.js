/**
 * Part 2 — Open Cloze (shared).
 * Boot: window.PART2_OPEN_BOOT = { contextId, dataSrc, backHref, backLabel, pageTitle, documentTitle, embeddedScriptId }
 * URL: ?context=slug&src=relative/published.json&back=...&backLabel=...
 *
 * Data JSON:
 *   title, subtitle,
 *   passage: string with [[1]]…[[N]] markers (one word per gap). Example (0) stays plain in the passage text.
 *   exampleHighlight: optional "(0) REACHED" — wrapped in <span class="p2-example"> for workbook-style example.
 *   answers: { "1": ["at"], "2": ["foo","bar"], … } — compare after normalize (trim, lower case).
 *   explanations: optional { "1": "why this word fits", … } — shown in the reveal modal after Submit (always when present), including when all gaps are correct.
 */
(function () {
  var boot = window.PART2_OPEN_BOOT || {};
  var sp = new URLSearchParams(window.location.search);
  var contextId = String(boot.contextId || sp.get("context") || "default").trim() || "default";
  var dataSrc = String(boot.dataSrc || sp.get("src") || "").trim();
  var backHref = String(boot.backHref || sp.get("back") || "").trim();
  var backLabel = String(
    boot.backLabel || (sp.get("backLabel") ? decodeURIComponent(sp.get("backLabel")) : "") || "Back"
  ).trim();
  var pageTitle = String(boot.pageTitle || "Part 2 — Open Cloze").trim();
  var docTitle = String(boot.documentTitle || pageTitle).trim();

  function resolveBackHref() {
    var raw = String(backHref || "").trim();
    if (!raw) {
      try {
        return new URL("../../index.html", window.location.href).href;
      } catch (e) {
        return "../../index.html";
      }
    }
    try {
      return new URL(raw, window.location.href).href;
    } catch (e2) {
      return raw;
    }
  }

  function wireBackNav() {
    var back = document.getElementById("part2OpenBack");
    if (!back) return;
    back.setAttribute("href", resolveBackHref());
    var lb = String(backLabel || "Back").trim() || "Back";
    if (lb.indexOf("\u2190") !== 0) {
      lb = "\u2190 " + lb;
    }
    back.textContent = lb;
    back.addEventListener("click", function (e) {
      if (window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    });
  }

  function resolveChainNextHref(raw) {
    var s = String(raw || "").trim();
    if (!s) return "";
    try {
      if (/^https?:\/\//i.test(s)) return s;
      var pathPart = s.split(/[?#]/)[0] || "";
      // Hub passes site-root paths without a leading "/" (e.g. use-of-english/…). Resolving
      // against the current file would nest under part2-open-cloze/ and break (http + file).
      if (/^use-of-english\//.test(pathPart)) {
        var proto = window.location.protocol;
        if (proto === "http:" || proto === "https:") {
          return new URL("/" + s.replace(/^\//, ""), window.location.origin).href;
        }
        if (proto === "file:") {
          var cur = window.location.href.split(/[?#]/)[0].replace(/\\/g, "/");
          var key = "/use-of-english/";
          var pos = cur.toLowerCase().indexOf(key);
          if (pos !== -1) {
            var baseDir = cur.slice(0, pos).replace(/\/?$/, "") + "/";
            return new URL(s, baseDir).href;
          }
        }
      }
      return new URL(s, window.location.href).href;
    } catch (e) {
      return s;
    }
  }

  function wirePart2ChainNext() {
    var rawNext = sp.get("next");
    if (!rawNext) return;
    var strip = document.getElementById("part2OpenNextStrip");
    var link = document.getElementById("part2OpenNextLink");
    if (!strip || !link) return;
    var nextLabelDecoded = sp.get("nextLabel")
      ? decodeURIComponent(sp.get("nextLabel"))
      : "Next task";
    link.setAttribute("href", resolveChainNextHref(String(rawNext).trim()));
    link.textContent = "\u2192 " + nextLabelDecoded;
    strip.removeAttribute("hidden");
  }

  var bundledUnit9Upcycled =
    String(contextId) === "unit9-p2-upcycled" ||
    /published-unit9-p2-upcycled\.json\s*$/i.test(dataSrc);
  var bundledUnit9Sounds =
    String(contextId) === "unit9-p2-sounds" ||
    /published-unit9-p2-sounds-about-right\.json\s*$/i.test(dataSrc);

  function publishedFetchUrl() {
    if (dataSrc) {
      try {
        return new URL(dataSrc, window.location.href).href;
      } catch (e) {
        return new URL("published.json", window.location.href).href;
      }
    }
    return new URL("published.json", window.location.href).href;
  }

  function readEmbeddedPayload() {
    var bid = boot.embeddedScriptId;
    if (bid) {
      var el = document.getElementById(String(bid));
      if (el) {
        try {
          return JSON.parse(el.textContent.trim());
        } catch (e) {
          return null;
        }
      }
    }
    if (bundledUnit9Upcycled) {
      var elU9 = document.getElementById("part2-open-bundled-unit9-upcycled");
      if (elU9) {
        try {
          return JSON.parse(elU9.textContent.trim());
        } catch (e2) {
          return null;
        }
      }
    }
    if (bundledUnit9Sounds) {
      var elSo = document.getElementById("part2-open-bundled-unit9-sounds");
      if (elSo) {
        try {
          return JSON.parse(elSo.textContent.trim());
        } catch (e3) {
          return null;
        }
      }
    }
    return null;
  }

  function parseDefaultJson() {
    var el = document.getElementById("part2-open-default-data");
    if (!el) return null;
    try {
      return JSON.parse(el.textContent.trim());
    } catch (e) {
      return null;
    }
  }

  function loadData() {
    var emb = readEmbeddedPayload();
    if (emb) return Promise.resolve(emb);
    var url = publishedFetchUrl();
    return fetch(url, { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("fetch");
        return r.json();
      })
      .catch(function () {
        var def = parseDefaultJson();
        if (def) return def;
        throw new Error("no data");
      });
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizeAnswer(v) {
    return String(v || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function gapNumsFromPassage(passage) {
    var re = /\[\[(\d+)\]\]/g;
    var m;
    var seen = [];
    var set = {};
    while ((m = re.exec(String(passage || ""))) !== null) {
      var n = parseInt(m[1], 10);
      if (!isFinite(n) || n <= 0) continue;
      if (set[n]) continue;
      set[n] = true;
      seen.push(n);
    }
    return seen;
  }

  function applyExampleHighlight(htmlChunk, exampleHighlight) {
    var find = String(exampleHighlight || "").trim();
    if (!find) return htmlChunk;
    var safe = esc(find);
    if (htmlChunk.indexOf(safe) === -1) return htmlChunk;
    return htmlChunk.split(safe).join('<span class="p2-example">' + safe + "</span>");
  }

  function buildTaskHtml(passage, exampleHighlight) {
    var paras = String(passage || "").split(/\n\n+/);
    return paras
      .map(function (para) {
        var t = para.trim();
        if (!t) return "";
        var parts = t.split(/(\[\[\d+\]\])/g);
        var inner = parts
          .map(function (chunk) {
            var mm = chunk.match(/^\[\[(\d+)\]\]$/);
            if (mm) {
              var n = mm[1];
              return (
                '<input type="text" class="gap" data-gap="' +
                esc(n) +
                '" inputmode="text" autocomplete="off" aria-label="Gap ' +
                esc(n) +
                '" />'
              );
            }
            var escChunk = esc(chunk).replace(/\r\n/g, "\n").replace(/\n/g, "<br/>");
            return applyExampleHighlight(escChunk, exampleHighlight);
          })
          .join("");
        return "<p>" + inner + "</p>";
      })
      .filter(Boolean)
      .join("");
  }

  function answersToRevealLines(data) {
    var nums = gapNumsFromPassage(data.passage);
    var ans = data.answers || {};
    var lines = [];
    for (var i = 0; i < nums.length; i++) {
      var k = String(nums[i]);
      var arr = ans[k];
      if (!arr) arr = ans[nums[i]];
      var opts = Array.isArray(arr) ? arr : arr != null ? [arr] : [];
      var pretty = opts
        .map(function (x) {
          return String(x || "").trim();
        })
        .filter(Boolean)
        .join(" / ");
      lines.push(k + " — " + (pretty || "—"));
    }
    return lines.join("\n");
  }

  function buildRevealInnerHtml(data, gapResults) {
    var keyText = answersToRevealLines(data);
    var keyBlock =
      '<div class="reveal-key-block">' +
      esc(keyText).replace(/\r\n/g, "\n").replace(/\n/g, "<br/>") +
      "</div>";
    var expl = data.explanations || {};
    var nums = gapNumsFromPassage(data.passage);
    var map = {};
    gapResults.forEach(function (g) {
      map[String(g.num)] = g;
    });
    var explainBlocks = [];
    var genericWrong =
      "The accepted word in the key is the standard form for this gap — check grammar or a fixed phrase in context.";

    for (var j = 0; j < nums.length; j++) {
      var kn = String(nums[j]);
      var note2 =
        expl[kn] != null
          ? String(expl[kn]).trim()
          : expl[nums[j]] != null
            ? String(expl[nums[j]]).trim()
            : "";
      var gr = map[kn];
      if (gr && gr.ok && !note2) continue;

      var chunks = [];
      if (gr && !gr.ok && gr.userDisplay) {
        chunks.push(
          '<p class="reveal-explain-line reveal-explain-line--yours"><span class="reveal-tag reveal-tag--bad">Your answer</span> ' +
            esc(gr.userDisplay) +
            "</p>"
        );
      }
      if (note2) {
        chunks.push(
          '<p class="reveal-explain-line"><span class="reveal-tag reveal-tag--ok">Why it fits</span> ' +
            esc(note2) +
            "</p>"
        );
      } else if (gr && !gr.ok) {
        chunks.push(
          '<p class="reveal-explain-line"><span class="reveal-tag reveal-tag--note">Note</span> ' +
            esc(genericWrong) +
            "</p>"
        );
      }

      if (!chunks.length) continue;
      explainBlocks.push(
        '<div class="reveal-explain-block"><div class="reveal-explain-gap">Gap ' +
          esc(kn) +
          "</div>" +
          chunks.join("") +
          "</div>"
      );
    }

    if (!explainBlocks.length) return keyBlock;
    return (
      keyBlock +
      '<div class="reveal-explain-wrap"><h3 class="reveal-explain-h3">Explanations</h3>' +
      explainBlocks.join("") +
      "</div>"
    );
  }

  function validateData(data) {
    if (!data || !String(data.passage || "").trim()) return "Missing passage.";
    var nums = gapNumsFromPassage(data.passage);
    if (!nums.length) return "Passage needs [[1]], [[2]], … markers.";
    var max = nums[nums.length - 1];
    for (var j = 1; j <= max; j++) {
      if (nums.indexOf(j) === -1) return "Gaps must be consecutive from 1 to " + max + " (missing " + j + ").";
    }
    var ans = data.answers || {};
    for (var i = 0; i < nums.length; i++) {
      var key = String(nums[i]);
      var a = ans[key] != null ? ans[key] : ans[nums[i]];
      var list = Array.isArray(a) ? a : a != null ? [a] : [];
      var ok = false;
      for (var u = 0; u < list.length; u++) {
        if (String(list[u] || "").trim()) {
          ok = true;
          break;
        }
      }
      if (!ok) return "No answer key for gap " + key + ".";
    }
    return null;
  }

  document.body.classList.add("part2-open-body");
  document.title = docTitle;

  wireBackNav();
  wirePart2ChainNext();

  var elH1 = document.getElementById("part2OpenH1");
  var elSub = document.getElementById("part2OpenSubtitle");
  var elTask = document.getElementById("part2OpenTask");
  var btnCheck = document.getElementById("part2BtnCheck");
  var btnReset = document.getElementById("part2BtnReset");
  var feedback = document.getElementById("part2Feedback");
  var layer = document.getElementById("part2AnswerReveal");
  var bodyReveal = document.getElementById("part2AnswerRevealBody");
  var btnRevealClose = document.getElementById("part2AnswerRevealBtn");

  if (elH1) elH1.textContent = pageTitle;

  loadData()
    .then(function (data) {
      var err = validateData(data);
      if (err) {
        if (elTask) elTask.innerHTML = "<p>" + esc(err) + "</p>";
        return;
      }
      if (elSub) elSub.textContent = data.subtitle || "";
      if (elH1 && data.title) elH1.textContent = data.title;
      if (data.title) document.title = String(data.title);

      if (elTask) elTask.innerHTML = buildTaskHtml(data.passage, data.exampleHighlight);

      var gaps = Array.prototype.slice.call(document.querySelectorAll(".gap"));

      function openReveal(html) {
        if (bodyReveal) bodyReveal.innerHTML = html;
        if (layer) {
          layer.classList.add("is-open");
          layer.style.display = "flex";
          layer.setAttribute("aria-hidden", "false");
        }
        if (btnRevealClose) btnRevealClose.focus();
      }

      function closeReveal() {
        if (layer) {
          layer.classList.remove("is-open");
          layer.style.display = "none";
          layer.setAttribute("aria-hidden", "true");
        }
      }

      var afterReveal = null;

      if (btnRevealClose) {
        btnRevealClose.addEventListener("click", function () {
          closeReveal();
          if (typeof afterReveal === "function") {
            var fn = afterReveal;
            afterReveal = null;
            fn();
          }
        });
      }

      if (btnCheck) {
        btnCheck.addEventListener("click", function () {
          var ans = data.answers || {};
          var score = 0;
          var gapResults = [];
          gaps.forEach(function (input) {
            var idx = input.getAttribute("data-gap");
            var user = normalizeAnswer(input.value);
            var raw = ans[idx] != null ? ans[idx] : ans[parseInt(idx, 10)];
            var list = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
            var ok = false;
            for (var t = 0; t < list.length; t++) {
              if (normalizeAnswer(list[t]) === user) {
                ok = true;
                break;
              }
            }
            input.classList.remove("ok", "bad");
            input.classList.add(ok ? "ok" : "bad");
            gapResults.push({
              num: idx,
              userDisplay: String(input.value).trim(),
              ok: ok
            });
            if (ok) score++;
          });

          var revealHtml = buildRevealInnerHtml(data, gapResults);

          if (score === gaps.length) {
            if (feedback) {
              feedback.className = "part2-feedback";
              feedback.textContent = "";
            }
            afterReveal = function () {
              if (feedback) {
                feedback.className = "part2-feedback show";
                feedback.innerHTML =
                  "Excellent! All <strong>" + gaps.length + "</strong> gaps are correct.";
              }
            };
            openReveal(revealHtml);
            return;
          }

          var wrong = gaps.length - score;
          if (feedback) {
            feedback.className = "part2-feedback";
            feedback.textContent = "";
          }
          afterReveal = function () {
            if (feedback) {
              feedback.className = "part2-feedback show";
              feedback.innerHTML =
                "Correct: <strong>" +
                score +
                "</strong>, incorrect: <strong>" +
                wrong +
                "</strong>. Fix the red gaps or use Reset.";
            }
          };
          openReveal(revealHtml);
        });
      }

      if (btnReset) {
        btnReset.addEventListener("click", function () {
          afterReveal = null;
          gaps.forEach(function (input) {
            input.value = "";
            input.classList.remove("ok", "bad");
          });
          if (feedback) {
            feedback.className = "part2-feedback";
            feedback.textContent = "";
          }
          closeReveal();
        });
      }

      gaps.forEach(function (input) {
        input.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault();
            if (btnCheck) btnCheck.click();
          }
        });
      });
    })
    .catch(function () {
      if (elTask) elTask.innerHTML = "<p>Could not load exercise data.</p>";
    });
})();
