/**
 * FCE — Live classroom FAB + instant draft progress for teachers.
 * Local: http://127.0.0.1:8787/… (not file://).
 *
 * Pages may register window.__FCE_LIVE_BUILD_ITEMS__() for keyed scoring;
 * otherwise the boot script scrapes radios, gap inputs, and selects.
 */
(function (w) {
  "use strict";

  var TAG = "/js/fce-live-boot.js?v=5";
  var liveDraftTimer = null;

  function pathName() {
    try {
      return decodeURIComponent(String(w.location.pathname || ""));
    } catch (e) {
      return String(w.location.pathname || "");
    }
  }

  function isFceSurface() {
    if (document.getElementById("ege-live-root")) return false;
    if (document.querySelector("script[src*='fce-class-live-ttt'], script[src*='fce-class-pict-live']")) {
      return false;
    }
    var body = document.body;
    if (body && body.hasAttribute("data-no-fce-live")) return false;

    var low = pathName().toLowerCase();
    if (/^\/(ege|oge)(\/|$)/.test(low)) return false;
    if (low.indexOf("/cpe/") >= 0) return false;

    var deploy = w.__PREP_DEPLOY_TRACK__;
    var page = w.__PREP_PAGE_TRACK__;
    if (deploy === "cpe" || deploy === "ege" || deploy === "oge") return false;
    if (page === "cpe" || page === "ege" || page === "oge") return false;
    if (deploy === "fce" || page === "fce") return true;

    if (/\/fce\.html$/i.test(low)) return true;
    if (/\/unit\d+\.html$/i.test(low)) return true;
    if (/(^|\/)(grammar|use-of-english|listening|class-games)\//i.test(low)) return true;
    if (/\/unit\d+-/i.test(low)) return true;
    if (/\/changes at school\//i.test(low)) return true;
    if (/\/(retell-check|exam-numbered-gaps)\.html$/i.test(low)) return true;
    if (document.body && document.body.hasAttribute("data-mb2-unit")) return true;
    return false;
  }

  function deckPrefix() {
    var body = document.body;
    if (body) {
      var attr = body.getAttribute("data-fce-live-deck");
      if (attr) return String(attr).slice(0, 80);
    }
    var p = pathName().replace(/^\//, "").replace(/\.html$/i, "");
    p = p.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
    if (!p) p = "page";
    return ("fce-" + p).slice(0, 80);
  }

  function onRestart() {
    var sel =
      document.querySelector("[data-fce-reset]") ||
      document.querySelector(".part2-btn-reset") ||
      document.querySelector("[data-reset]") ||
      document.getElementById("reset");
    if (sel && typeof sel.click === "function") sel.click();
  }

  function isLiveStudent() {
    return (
      w.EgeLiveRoom &&
      typeof w.EgeLiveRoom.isLiveStudent === "function" &&
      w.EgeLiveRoom.isLiveStudent()
    );
  }

  function trimText(s, max) {
    var t = String(s || "")
      .replace(/\s+/g, " ")
      .trim();
    if (max && t.length > max) return t.slice(0, max - 1) + "…";
    return t;
  }

  function isLiveScrapeRoot(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.closest("[hidden], .admin, .adm-panel, #admin, .ege-live-host-fs")) return false;
    return true;
  }

  function radioSortKey(name) {
    var m = String(name || "").match(/(\d+)/);
    return m ? parseInt(m[1], 10) : 9999;
  }

  function scrapeRadioMcq() {
    var names = {};
    document.querySelectorAll('input[type="radio"][name]').forEach(function (r) {
      if (!isLiveScrapeRoot(r)) return;
      var nm = r.name;
      if (!nm || nm.indexOf("adm-gap-correct") === 0) return;
      names[nm] = true;
    });

    var sorted = Object.keys(names).sort(function (a, b) {
      var d = radioSortKey(a) - radioSortKey(b);
      return d !== 0 ? d : a.localeCompare(b);
    });

    return sorted.map(function (name, idx) {
      var checked = document.querySelector('input[type="radio"][name="' + name + '"]:checked');
      var val = checked ? String(checked.value || "").trim() : "";
      var anchor =
        (checked && checked.closest(".q, article, .gap-block, .p1-gap, [data-q]")) ||
        document.querySelector('input[type="radio"][name="' + name + '"]');
      var prompt = "";
      if (anchor) {
        var stem = anchor.querySelector(".stem, .gap-num, .q-text, [data-q]");
        if (stem) prompt = trimText(stem.textContent, 700);
        else {
          var par = anchor.closest(".q, article");
          if (par) {
            var st2 = par.querySelector(".stem, p");
            if (st2) prompt = trimText(st2.textContent, 700);
          }
        }
      }
      var answerText = "—";
      if (checked) {
        var lab = checked.id ? document.querySelector('label[for="' + checked.id + '"]') : null;
        if (lab) answerText = trimText(lab.textContent, 600);
        else {
          var line = checked.closest(".opt-line, label, .choices");
          if (line) answerText = trimText(line.textContent, 600);
        }
      }
      var id = String(idx + 1);
      var numFromPrompt = prompt.match(/^(\d+)\./);
      if (numFromPrompt) id = numFromPrompt[1];
      var dataQ = anchor && anchor.getAttribute ? anchor.getAttribute("data-q") : "";
      if (dataQ) id = String(dataQ);

      return {
        id: id,
        label: "Q " + id,
        prompt: prompt,
        answer: val,
        expected: "",
        answerText: answerText,
        expectedText: "",
        correct: !!(checked && checked.closest && checked.closest(".is-ok, .ok")),
        filled: !!val
      };
    });
  }

  function scrapeTextGaps() {
    var inputs = [];
    document.querySelectorAll(
      '#gaps-root input[type="text"], .gaps input[type="text"], .part2-open-task input.gap, input.gap[type="text"], input[id^="g"][type="text"]'
    ).forEach(function (inp) {
      if (!isLiveScrapeRoot(inp)) return;
      if (inp.type !== "text") return;
      inputs.push(inp);
    });

    return inputs.map(function (inp, idx) {
      var id = inp.id ? inp.id.replace(/^g/i, "") : String(idx + 1);
      if (!/^\d+$/.test(id)) id = String(idx + 1);
      var prompt = "";
      var host = inp.closest(".sent, .gap-block, .part2-open-task, p, li");
      if (host) {
        prompt = trimText(host.textContent, 700);
      }
      var ans = String(inp.value || "").trim();
      return {
        id: id,
        label: "Q " + id,
        prompt: prompt,
        answer: ans,
        expected: "",
        answerText: ans || "—",
        expectedText: "",
        correct: inp.classList.contains("is-ok"),
        filled: !!ans
      };
    });
  }

  function optionTextForLetter(letter) {
    if (!letter) return "";
    var nodes = document.querySelectorAll(".fce-p3-opt, .fce-r6-bank-item, .fce-p7-opt");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var L = node.querySelector(".letter, .fce-r6-bank-L, .fce-p7-letter");
      var txt =
        L && L.textContent && String(L.textContent).trim().toUpperCase() === String(letter).toUpperCase()
          ? trimText(node.textContent, 600)
          : "";
      if (txt) return txt;
    }
    return letter;
  }

  function scrapeSelectAnswers() {
    var items = [];
    document
      .querySelectorAll(".fce-r6-gap-row select, .fce-p3-row select, select[data-gap]")
      .forEach(function (sel) {
        if (!isLiveScrapeRoot(sel)) return;
        var val = String(sel.value || "").trim();
        var gap = sel.dataset.gap || sel.getAttribute("data-gap") || "";
        var id = gap;
        var label = "";
        var row = sel.closest(".fce-p3-row, .fce-r6-gap-row");
        if (row) {
          var spk = row.querySelector(".fce-p3-spk, .fce-p3-row-num, label");
          if (spk) label = trimText(spk.textContent, 120);
        }
        if (!id) {
          var aria = sel.getAttribute("aria-label") || "";
          var m = aria.match(/(\d+)/);
          id = m ? m[1] : String(items.length + 1);
        }
        var prompt = label || sel.getAttribute("aria-label") || "Gap " + id;
        var markedOk =
          sel.classList.contains("is-ok") ||
          sel.classList.contains("correct") ||
          sel.classList.contains("is-correct");
        var markedBad =
          sel.classList.contains("is-bad") ||
          sel.classList.contains("wrong") ||
          sel.classList.contains("is-wrong");
        var expected = "";
        if (markedOk && val) expected = val;
        else if (markedBad && row) {
          var keyEl = row.querySelector(".gap-key, .mb2-key-hint");
          var keyRaw = keyEl ? String(keyEl.textContent || "") : "";
          var km = keyRaw.match(/[A-H]/i);
          if (km) expected = km[0].toUpperCase();
        }
        var answerText = val ? val + ") " + trimText(optionTextForLetter(val), 500) : "—";
        var expectedText = expected ? expected + ") " + trimText(optionTextForLetter(expected), 500) : "";
        items.push({
          id: String(id),
          label: label || "Q " + id,
          prompt: prompt,
          answer: val,
          expected: expected,
          answerText: answerText,
          expectedText: expectedText,
          correct: markedOk,
          filled: !!val
        });
      });
    return items;
  }

  function mergeItemLists(lists) {
    var out = [];
    var seen = {};
    lists.forEach(function (list) {
      (list || []).forEach(function (it) {
        var key = String(it.id || it.label || out.length);
        if (seen[key]) return;
        seen[key] = true;
        out.push(it);
      });
    });
    return out;
  }

  function buildLivePack() {
    if (typeof w.__FCE_LIVE_BUILD_ITEMS__ === "function") {
      try {
        return w.__FCE_LIVE_BUILD_ITEMS__();
      } catch (eHook) {
        /* fall through to scrape */
      }
    }
    var radios = scrapeRadioMcq();
    var gaps = scrapeTextGaps();
    var selects = scrapeSelectAnswers();
    var items = mergeItemLists([radios, gaps, selects]);
    var filled = 0;
    var correct = 0;
    items.forEach(function (it) {
      if (it.filled) filled += 1;
      if (it.correct) correct += 1;
    });
    var total = items.length;
    return {
      items: items,
      filled: filled,
      correct: correct,
      total: total,
      score: total ? Math.round((correct / total) * 100) : 0
    };
  }

  function pushLiveProgress(draft) {
    if (!isLiveStudent()) return;
    if (!w.EgeLiveRoom || typeof w.EgeLiveRoom.notifyProgress !== "function") return;
    var pack = buildLivePack();
    if (!pack.items.length) return;
    w.EgeLiveRoom.notifyProgress({
      draft: draft !== false,
      score: pack.score,
      correct: pack.correct,
      total: pack.total,
      items: pack.items
    });
  }

  function scheduleLivePush(draft) {
    if (liveDraftTimer) clearTimeout(liveDraftTimer);
    liveDraftTimer = w.setTimeout(function () {
      pushLiveProgress(draft);
    }, draft === false ? 120 : 220);
  }

  function watchLiveInputs() {
    document.addEventListener(
      "change",
      function (ev) {
        var t = ev.target;
        if (!t || !t.matches) return;
        if (t.matches('input[type="radio"], select, input[type="text"], textarea')) {
          scheduleLivePush(true);
        }
      },
      true
    );
    document.addEventListener(
      "input",
      function (ev) {
        var t = ev.target;
        if (!t || !t.matches) return;
        if (t.matches('input[type="text"], textarea, input.gap')) {
          scheduleLivePush(true);
        }
      },
      true
    );
  }

  function watchChecks() {
    document.addEventListener(
      "click",
      function (ev) {
        var t = ev.target;
        if (!t || !t.closest) return;
        var btn = t.closest("button, .part2-btn-check, [data-check]");
        if (!btn) return;
        var label = (btn.textContent || "").toLowerCase();
        if (label.indexOf("check") < 0 && !btn.classList.contains("part2-btn-check")) return;
        scheduleLivePush(false);
      },
      true
    );
  }

  function siteRoot() {
    var nodes = document.querySelectorAll("script[src*='fce-live-boot.js']");
    var src = nodes.length ? nodes[nodes.length - 1].src : "";
    if (src) return src.replace(/js\/fce-live-boot\.js.*$/i, "");
    try {
      return String(w.location.origin || "") + "/";
    } catch (e) {
      return "/";
    }
  }

  function asset(path) {
    return siteRoot() + String(path || "").replace(/^\//, "");
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.setAttribute("vite-ignore", "");
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error(src));
      };
      document.body.appendChild(s);
    });
  }

  function ensureCss() {
    if (document.querySelector("link[href*='ege-live-room-bar.css']")) return;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = asset("ege/css/ege-live-room-bar.css?v=20");
    document.head.appendChild(link);
  }

  function mount() {
    if (!w.EgeLiveRoom || typeof w.EgeLiveRoom.mount !== "function") return;
    if (document.getElementById("ege-live-root")) return;
    w.EgeLiveRoom.mount({
      deckPrefix: deckPrefix(),
      getUnitId: function () {
        return "";
      },
      onRestart: onRestart
    });
    var gate = document.getElementById("ege-live-student-gate");
    var kick = gate && gate.querySelector(".ege-live-gate-kicker");
    if (kick) kick.textContent = "FCE Live";
    watchChecks();
    watchLiveInputs();
  }

  function boot() {
    if (w.__FCE_LIVE_BOOT_STARTED__) return;
    if (!isFceSurface()) return;
    w.__FCE_LIVE_BOOT_STARTED__ = true;
    ensureCss();
    var pin = document.createElement("style");
    pin.textContent =
      "#ege-live-fab{position:fixed!important;right:16px!important;bottom:20px!important;z-index:2147483000!important;}";
    document.head.appendChild(pin);
    if (w.EgeLiveRoom && typeof w.EgeLiveRoom.mount === "function") {
      mount();
      return;
    }
    loadScript(asset("js/live-game-api.js"))
      .then(function () {
        return loadScript(asset("js/live-game-api-http.js?v=17"));
      })
      .then(function () {
        return loadScript(asset("ege/js/ege-live-config.js?v=8"));
      })
      .then(function () {
        return loadScript(asset("ege/js/ege-player-name.js"));
      })
      .then(function () {
        return loadScript(asset("ege/js/ege-live-room-bar.js?v=23"));
      })
      .then(mount)
      .catch(function (err) {
        w.__FCE_LIVE_BOOT_STARTED__ = false;
        try {
          console.warn("[fce-live-boot]", err && err.message ? err.message : err);
        } catch (eLog) {}
      });
  }

  w.FceLiveBoot = {
    buildLivePack: buildLivePack,
    pushLiveProgress: pushLiveProgress
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  w.__FCE_LIVE_BOOT_TAG__ = TAG;
})(typeof window !== "undefined" ? window : this);
