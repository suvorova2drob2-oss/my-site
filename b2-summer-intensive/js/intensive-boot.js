/**
 * Fast lesson boot: core + only the requested theme, then lesson engine.
 *
 * FCE deep links (?src=fce / ?from=…): Speaking Intensive only —
 * do NOT load Fleabag CSS/JS or Speak Club (files stay in the repo for hub).
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var themeId = params.get("theme") || params.get("unit") || "lifestyle";
  var fromFce =
    params.get("src") === "fce" ||
    params.get("course") === "fce" ||
    !!params.get("from") ||
    (window.WorkshopGate &&
      typeof WorkshopGate.isFceEntry === "function" &&
      WorkshopGate.isFceEntry());

  if (fromFce) {
    document.body.classList.add("intensive-body--fce-lite");
    try {
      sessionStorage.setItem("b2int_fce_lock", "1");
      var fromStore = params.get("from") || "";
      if (fromStore) sessionStorage.setItem("b2int_fce_from", fromStore);
    } catch (_eLockEarly) {}
  }

  var base = "";
  try {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].src || "";
      var m = src.match(/^(.*\/)js\/intensive-boot\.js(?:\?|#|$)/i);
      if (m) {
        base = m[1];
        break;
      }
    }
  } catch (_e) {}
  if (!base) {
    try {
      base = new URL("./", window.location.href).href;
    } catch (_e2) {
      base = "";
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error("Failed to load " + src));
      };
      document.head.appendChild(s);
    });
  }

  function loadCss(href) {
    return new Promise(function (resolve) {
      var l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      l.onload = function () {
        resolve();
      };
      l.onerror = function () {
        resolve();
      };
      document.head.appendChild(l);
    });
  }

  function whenIdle(fn) {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(fn, { timeout: 2500 });
    } else {
      setTimeout(fn, 400);
    }
  }

  function showBootError(msg) {
    var root = document.getElementById("lesson-root");
    if (root) {
      var backHref = fromFce ? "../fce.html" : "index.html";
      try {
        if (fromFce) {
          var fromQ = params.get("from") || "";
          if (fromQ && !/^(https?:|javascript:|data:)/i.test(fromQ)) {
            backHref = decodeURIComponent(fromQ);
          } else {
            backHref =
              sessionStorage.getItem("b2int_fce_from") || backHref;
          }
        }
      } catch (_e) {}
      var backLabel = fromFce ? "Back to FCE" : "Back to hub";
      root.innerHTML =
        '<div class="int-error"><p>' +
        String(msg || "Could not load lesson.") +
        ' <a class="int-back" href="' +
        backHref +
        '">' +
        backLabel +
        "</a></p></div>";
    }
  }

  var beatId = params.get("beat") || params.get("step") || "";
  var themeSrc;
  if (themeId === "mystery" && beatId === "ghost-walk-guide") {
    themeSrc = base + "js/themes/mystery-ghost-walk.js?v=1";
  } else if (themeId === "mystery") {
    themeSrc = base + "js/themes/mystery.js?v=1";
  } else if (themeId === "clothes") {
    themeSrc = base + "js/themes/clothes.js?v=2";
  } else {
    themeSrc = base + "js/intensive-themes.js?v=slim-1";
  }

  var themeChain;
  if (themeId === "clothes") {
    themeChain = loadScript(base + "js/intensive-core.js?v=1")
      .then(function () {
        return loadScript(base + "../js/unit1-clothes-lexis.js?v=1");
      })
      .then(function () {
        return loadScript(base + "js/themes/clothes.js?v=2");
      });
  } else {
    themeChain = loadScript(base + "js/intensive-core.js?v=1").then(function () {
      return loadScript(themeSrc);
    });
  }

  themeChain
    .then(function () {
      if (typeof window.B2_INTENSIVE_buildFlow !== "function") {
        return loadScript(base + "js/intensive-themes.js?v=slim-1");
      }
    })
    .then(function () {
      return loadScript(base + "js/intensive-lesson.js?v=clothes-hl-1");
    })
    .then(function () {
      /* Hub / full intensive: Fleabag + font + Speak Club later. FCE path: skip. */
      if (fromFce) return;
      whenIdle(function () {
        loadCss(
          "https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;0,7..72,700;1,7..72,400;1,7..72,600&display=swap"
        );
        loadCss(base + "../workshops/fleabag/css/fleabag-workshop.css");
        loadScript(base + "../workshops/js/speak-club.js")
          .then(function () {
            return Promise.all([
              loadScript(
                base + "../workshops/fleabag/js/fleabag-phrase-srs.js"
              ),
              loadScript(
                base + "../workshops/fleabag/js/fleabag-sticker-fyp.js"
              ),
              loadScript(
                base + "../workshops/fleabag/js/fleabag-sticker-swipe.js"
              ),
            ]);
          })
          .catch(function () {});
      });
    })
    .catch(function (err) {
      console.error(err);
      showBootError("Lesson failed to load. Check the network and try again.");
    });
})();
