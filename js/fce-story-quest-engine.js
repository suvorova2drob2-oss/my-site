/**
 * Story quest — intro, timeline, pick or type gaps.
 * window.FCE_STORY_QUEST.mount({ rootId, pack })
 */
(function (W) {
  "use strict";

  var MODE_KEY = "fce-sq-mode";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[\u2019\u2018`´]/g, "'")
      .replace(/\s+/g, " ");
  }

  function matchesAny(input, answers) {
    var n = norm(input);
    if (!n) return false;
    var i;
    for (i = 0; i < (answers || []).length; i++) {
      if (norm(answers[i]) === n) return true;
    }
    return false;
  }

  function shuffle(arr) {
    var a = arr.slice();
    var i = a.length;
    while (i) {
      var j = Math.floor(Math.random() * i--);
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function buildPickOptions(sc, pool, gapMode) {
    var answers = sc.answers || [];
    var correct = answers[0];
    if (!correct) return [];

    var exclude = Object.create(null);
    var i;
    for (i = 0; i < answers.length; i++) {
      exclude[norm(answers[i])] = true;
    }

    var distractors = [];
    var shuffled = shuffle(pool);
    for (i = 0; i < shuffled.length && distractors.length < 3; i++) {
      var k = norm(shuffled[i]);
      if (exclude[k]) continue;
      exclude[k] = true;
      distractors.push(String(shuffled[i]).trim());
    }

    var merged = shuffle([String(correct).trim()].concat(distractors));
    var seen = Object.create(null);
    var unique = [];
    for (i = 0; i < merged.length; i++) {
      var nk = norm(merged[i]);
      if (seen[nk]) continue;
      seen[nk] = true;
      unique.push(merged[i]);
    }
    return unique;
  }

  function mount(opts) {
    opts = opts || {};
    var root = W.document.getElementById(opts.rootId || "sq-root");
    var pack = opts.pack || W.U1_CINDERELLA_QUEST;
    if (!root || !pack || !pack.scenes || !pack.scenes.length) return;

    function resolveNav(mountOpts, packData) {
      var n = mountOpts.nav || packData.nav || {};
      return {
        classGames: n.classGames || "../../unit1-class-games.html",
        classGamesLabel: n.classGamesLabel || "← Class games",
        storyHub: n.storyHub || "",
        storyHubLabel: n.storyHubLabel || "← Story quest"
      };
    }

    var nav = resolveNav(opts, pack);

    function navHtml(optsNav) {
      optsNav = optsNav || {};
      var introBtn = optsNav.introBtn
        ? '<button type="button" class="sq-nav-btn" id="sqBackIntro">' +
          esc(optsNav.introBtn) +
          "</button>"
        : "";
      var hub =
        nav.storyHub
          ? '<a class="sq-nav-btn sq-nav-link" href="' +
            esc(nav.storyHub) +
            '">' +
            esc(nav.storyHubLabel) +
            "</a>"
          : "";
      var cg =
        '<a class="sq-nav-btn sq-nav-link" href="' +
        esc(nav.classGames) +
        '">' +
        esc(nav.classGamesLabel) +
        "</a>";
      return (
        '<nav class="sq-top-nav" aria-label="Navigation">' +
        introBtn +
        hub +
        cg +
        "</nav>"
      );
    }

    function setPlayLayout(on) {
      W.document.body.classList.toggle("sq-body--play", !!on);
      W.document.documentElement.classList.toggle("sq-html--play", !!on);
    }

    function exitToIntro() {
      state.screen = "intro";
      setPlayLayout(false);
      var amb = W.FCE_STORY_QUEST_AMBIENCE;
      var audioEl = W.document.getElementById("sqAmbience");
      if (amb && amb.pauseAll) amb.pauseAll(audioEl);
      else if (audioEl) audioEl.pause();
      render();
    }

    function wireIntroBack() {
      var btn = root.querySelector("#sqBackIntro");
      if (btn) {
        btn.addEventListener("click", exitToIntro);
      }
    }

    var scenes = pack.scenes.slice();
    var total = scenes.length;
    var state = {
      screen: "intro",
      index: 0,
      mode: W.localStorage.getItem(MODE_KEY) || "pick",
      done: Object.create(null),
      wrongCount: 0
    };

    var pool = pack.allAnswersFlat ? pack.allAnswersFlat() : [];
    var gapMode = pack.gapMode || "phrase";

    function actOf(id) {
      var i;
      for (i = 0; i < (pack.acts || []).length; i++) {
        if (pack.acts[i].id === id) return pack.acts[i];
      }
      return null;
    }

    function render() {
      if (state.screen === "intro") renderIntro();
      else if (state.screen === "play") renderPlay();
      else if (state.screen === "win") renderWin();
    }

    function renderIntro() {
      var intro = pack.intro || {};
      root.innerHTML =
        navHtml() +
        '<div class="sq-shell sq-intro">' +
        '<button type="button" class="sq-audio-btn" id="sqAudioBtn" title="Music" aria-label="Music">' +
        "🔊</button>" +
        '<div class="sq-intro-layout">' +
        '<div class="sq-intro-visual">' +
        '<div class="sq-intro-cover">' +
        '<img src="' +
        esc(pack.coverImg || "") +
        '" alt="" class="sq-intro-img" />' +
        "</div></div>" +
        '<div class="sq-intro-main">' +
        '<p class="sq-intro-meta">' +
        esc(intro.meta || "") +
        "</p>" +
        "<h1 class=\"sq-intro-title\">" +
        esc(intro.headline || pack.title) +
        "</h1>" +
        '<p class="sq-intro-blurb">' +
        esc(intro.blurb || "") +
        "</p>" +
        '<p class="sq-intro-rules">' +
        esc(intro.rules || "") +
        "</p>" +
        '<div class="sq-mode-pick" role="radiogroup" aria-label="Mode">' +
        '<label class="sq-mode-opt"><input type="radio" name="sqMode" value="pick"' +
        (state.mode === "pick" ? " checked" : "") +
        ' /><span>Pick · 4 options</span></label>' +
        '<label class="sq-mode-opt"><input type="radio" name="sqMode" value="type"' +
        (state.mode === "type" ? " checked" : "") +
        ' /><span>Type · write the phrase</span></label>' +
        "</div>" +
        '<button type="button" class="sq-cta" id="sqStart">' +
        esc(intro.cta || "Start →") +
        "</button>" +
        "</div></div></div></div>";

      root.querySelector("#sqStart").addEventListener("click", startGame);
      root.querySelectorAll('input[name="sqMode"]').forEach(function (inp) {
        inp.addEventListener("change", function () {
          if (inp.checked) {
            state.mode = inp.value;
            try {
              W.localStorage.setItem(MODE_KEY, state.mode);
            } catch (e) {}
          }
        });
      });
      wireAudioBtn(root.querySelector("#sqAudioBtn"));
    }

    function sceneImgSrc(sc) {
      var url = sc.img || pack.coverImg || "";
      if (!url) return "";
      return url + (url.indexOf("?") >= 0 ? "&" : "?") + "lv=" + sc.id;
    }

    function wireSceneImg(imgEl, sc) {
      if (!imgEl || !sc) return;
      imgEl.classList.add("sq-scene-bg--fresh");
      imgEl.onerror = function () {
        if (sc.imgFallback && imgEl.src.indexOf("sq-cover") < 0) {
          imgEl.onerror = null;
          imgEl.src =
            sc.imgFallback +
            (sc.imgFallback.indexOf("?") >= 0 ? "&" : "?") +
            "lv=" +
            sc.id;
        }
      };
      imgEl.src = sceneImgSrc(sc);
      W.setTimeout(function () {
        imgEl.classList.remove("sq-scene-bg--fresh");
      }, 400);
    }

    function startGame() {
      state.screen = "play";
      state.index = 0;
      state.done = Object.create(null);
      state.wrongCount = 0;
      setPlayLayout(true);
      render();
      try {
        W.localStorage.setItem("sq-audio-on", "1");
      } catch (e) {}
      var amb = W.FCE_STORY_QUEST_AMBIENCE;
      var audioEl = W.document.getElementById("sqAmbience");
      if (amb && amb.tryMp3ThenSynth) amb.tryMp3ThenSynth(audioEl);
      else if (audioEl) audioEl.play().catch(function () {});
    }

    function timelineHtml() {
      var sc = scenes[state.index];
      var act = actOf(sc.act);
      var pct = Math.round(((state.index + 1) / total) * 100);
      var start = Math.max(0, state.index - 2);
      var end = Math.min(total, start + 7);
      if (end - start < 7) start = Math.max(0, end - 7);
      var dots = "";
      var i;
      for (i = start; i < end; i++) {
        var s = scenes[i];
        var done = state.done[s.id];
        var here = i === state.index;
        dots +=
          '<button type="button" class="sq-tl-dot' +
          (done ? " is-done" : "") +
          (here ? " is-here" : "") +
          '" data-idx="' +
          i +
          '" title="' +
          esc(s.kicker || "") +
          '">' +
          (done ? "✓" : s.id) +
          "</button>";
      }
      return (
        '<div class="sq-timeline">' +
        '<div class="sq-tl-top">' +
        '<span class="sq-tl-act">' +
        esc(act ? act.label : "") +
        "</span>" +
        '<span class="sq-tl-count">' +
        (state.index + 1) +
        " / " +
        total +
        "</span></div>" +
        '<div class="sq-tl-bar" aria-hidden="true"><span style="width:' +
        pct +
        '%"></span></div>' +
        '<div class="sq-tl-row">' +
        dots +
        "</div>" +
        '<div class="sq-tl-next">' +
        esc(sc.kicker || "") +
        "</div></div>"
      );
    }

    function renderPlay() {
      var sc = scenes[state.index];
      if (!sc) {
        state.screen = "win";
        setPlayLayout(false);
        render();
        return;
      }
      root.innerHTML =
        '<div class="sq-shell sq-play">' +
        '<div class="sq-play-toolbar">' +
        navHtml({ introBtn: "← Intro" }) +
        '<span class="sq-play-count">' +
        (state.index + 1) +
        " / " +
        total +
        "</span>" +
        '<button type="button" class="sq-audio-btn sq-audio-btn--inline" id="sqAudioBtn" aria-label="Music">🔇</button>' +
        "</div>" +
        timelineHtml() +
        '<div class="sq-play-body">' +
        '<figure class="sq-scene-fig">' +
        '<img src="" alt="" class="sq-scene-bg" id="sqSceneBg" />' +
        '<figcaption class="sq-scene-cap">' +
        esc(sc.kicker || "") +
        "</figcaption></figure>" +
        '<div class="sq-task-panel">' +
        '<div class="sq-task-col">' +
        (sc.flavorTag
          ? '<p class="sq-task-flavor-tag">' + esc(sc.flavorTag) + "</p>"
          : "") +
        (sc.flavor
          ? '<p class="sq-task-flavor">' + esc(sc.flavor) + "</p>"
          : "") +
        '<p class="sq-sentence" id="sqSentence"></p>' +
        '<div id="sqInputArea"></div>' +
        '<div class="sq-actions" id="sqActions"></div>' +
        '<div class="sq-mode-bar">' +
        '<span class="sq-mode-label">Mode</span>' +
        '<button type="button" class="sq-mode-switch" data-mode="pick">Pick</button>' +
        '<button type="button" class="sq-mode-switch" data-mode="type">Type</button>' +
        "</div></div></div></div>" +
        "</div>" +
        '<div class="sq-modal" id="sqWrongModal" hidden>' +
        '<div class="sq-modal-card">' +
        '<p class="sq-modal-kicker">Midnight clock · try again</p>' +
        '<p class="sq-modal-ans" id="sqModalAns"></p>' +
        '<p class="sq-modal-tip" id="sqModalTip"></p>' +
        '<button type="button" class="sq-cta sq-cta--sm" id="sqModalNext">Continue →</button>' +
        "</div></div>";

      var bgEl = root.querySelector("#sqSceneBg");
      wireSceneImg(bgEl, sc);

      paintSentence(sc);
      paintInput(sc);
      paintActions(sc);

      root.querySelectorAll(".sq-mode-switch").forEach(function (btn) {
        btn.classList.toggle("is-on", btn.getAttribute("data-mode") === state.mode);
        btn.addEventListener("click", function () {
          state.mode = btn.getAttribute("data-mode") || "pick";
          try {
            W.localStorage.setItem(MODE_KEY, state.mode);
          } catch (e) {}
          renderPlay();
        });
      });

      root.querySelectorAll(".sq-tl-dot").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var idx = Number(btn.getAttribute("data-idx"));
          if (idx >= 0 && idx < total && (state.done[scenes[idx].id] || idx === state.index)) {
            state.index = idx;
            refreshPlayScene();
          }
        });
      });

      wireIntroBack();
      wireAudioBtn(root.querySelector("#sqAudioBtn"));
    }

    function refreshPlayScene() {
      var sc = scenes[state.index];
      if (!sc) {
        state.screen = "win";
        setPlayLayout(false);
        render();
        return;
      }

      var topNav = root.querySelector(".sq-top-nav");
      if (!topNav) {
        var toolbar = root.querySelector(".sq-play-toolbar");
        if (toolbar) {
          toolbar.insertAdjacentHTML(
            "afterbegin",
            navHtml({ introBtn: "← Intro" })
          );
          wireIntroBack();
        }
      }

      var flavorTagEl = root.querySelector(".sq-task-flavor-tag");
      if (flavorTagEl) {
        if (sc.flavorTag) {
          flavorTagEl.textContent = sc.flavorTag;
          flavorTagEl.hidden = false;
        } else {
          flavorTagEl.hidden = true;
        }
      } else if (sc.flavorTag) {
        var flavorEl0 = root.querySelector(".sq-task-flavor");
        if (flavorEl0) {
          flavorEl0.insertAdjacentHTML(
            "beforebegin",
            '<p class="sq-task-flavor-tag">' + esc(sc.flavorTag) + "</p>"
          );
        }
      }

      var flavorEl = root.querySelector(".sq-task-flavor");
      if (flavorEl) {
        if (sc.flavor) flavorEl.textContent = sc.flavor;
        else flavorEl.remove();
      }

      var countEl = root.querySelector(".sq-play-count");
      if (countEl) countEl.textContent = state.index + 1 + " / " + total;

      var cap = root.querySelector(".sq-scene-cap");
      if (cap) cap.textContent = sc.kicker || "";

      wireSceneImg(root.querySelector("#sqSceneBg"), sc);

      var tl = root.querySelector(".sq-timeline");
      if (tl) tl.outerHTML = timelineHtml();

      paintSentence(sc);
      paintInput(sc);
      paintActions(sc);

      root.querySelectorAll(".sq-mode-switch").forEach(function (btn) {
        btn.classList.toggle("is-on", btn.getAttribute("data-mode") === state.mode);
      });

      root.querySelectorAll(".sq-tl-dot").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var idx = Number(btn.getAttribute("data-idx"));
          if (idx >= 0 && idx < total && (state.done[scenes[idx].id] || idx === state.index)) {
            state.index = idx;
            refreshPlayScene();
          }
        });
      });
    }

    function paintSentence(sc) {
      var el = root.querySelector("#sqSentence");
      if (!el) return;
      var gapLabel =
        gapMode === "word" ? "Type the missing word" : "Type the Cool Word phrase";
      var gapCls =
        "sq-gap" +
        (state.mode === "pick" ? " sq-gap--pick" : "") +
        (gapMode === "phrase" ? " sq-gap--phrase" : "");
      var gap =
        state.mode === "pick"
          ? '<span class="' + gapCls + '">___</span>'
          : '<span class="' +
            gapCls +
            '"><input type="text" class="sq-type-input" id="sqTypeInput" autocomplete="off" spellcheck="false" aria-label="' +
            esc(gapLabel) +
            '" /></span>';
      el.innerHTML = esc(sc.before || "") + gap + esc(sc.after || "");
    }

    function paintInput(sc) {
      var area = root.querySelector("#sqInputArea");
      if (!area) return;
      if (state.mode !== "pick") {
        area.innerHTML = "";
        var inp = root.querySelector("#sqTypeInput");
        if (inp) {
          setTimeout(function () {
            inp.focus();
          }, 40);
          inp.addEventListener("keydown", function (ev) {
            if (ev.key === "Enter") tryCheck(sc);
          });
        }
        return;
      }
      var correct = (sc.answers || [])[0];
      var opts = buildPickOptions(sc, pool, gapMode);
      area.innerHTML =
        '<div class="sq-pick-grid" role="group">' +
        opts
          .map(function (o) {
            return (
              '<button type="button" class="sq-pick-btn" data-val="' +
              esc(o) +
              '">' +
              esc(o) +
              "</button>"
            );
          })
          .join("") +
        "</div>";
      area.querySelectorAll(".sq-pick-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (btn.disabled) return;
          var val = btn.getAttribute("data-val");
          var ok = matchesAny(val, sc.answers);
          btn.parentElement.querySelectorAll(".sq-pick-btn").forEach(function (b) {
            b.disabled = true;
            if (matchesAny(b.getAttribute("data-val"), sc.answers)) {
              b.classList.add("is-ok");
            } else if (b === btn && !ok) {
              b.classList.add("is-bad");
            }
          });
          if (ok) advance(sc);
          else showWrong(sc);
        });
      });
    }

    function paintActions(sc) {
      var actions = root.querySelector("#sqActions");
      if (!actions) return;
      if (state.mode === "pick") {
        actions.innerHTML =
          '<p class="sq-pick-hint">' +
          (gapMode === "word"
            ? "Tap the missing word from the Cool Word phrase."
            : "Tap the correct Cool Word phrase.") +
          "</p>";
        return;
      }
      actions.innerHTML =
        '<button type="button" class="sq-cta" id="sqCheck">Check →</button>';
      actions.querySelector("#sqCheck").addEventListener("click", function () {
        tryCheck(sc);
      });
    }

    function tryCheck(sc) {
      var inp = root.querySelector("#sqTypeInput");
      var val = inp ? inp.value : "";
      if (matchesAny(val, sc.answers)) advance(sc);
      else showWrong(sc);
    }

    function showWrong(sc) {
      state.wrongCount += 1;
      var modal = root.querySelector("#sqWrongModal");
      var ansEl = root.querySelector("#sqModalAns");
      var tipEl = root.querySelector("#sqModalTip");
      if (ansEl) {
        var full = sc.phraseFull || (sc.answers || [])[0];
        ansEl.innerHTML =
          "Full phrase: <strong>" +
          esc(full) +
          "</strong>" +
          (gapMode === "word" && (sc.answers || [])[0]
            ? " · missing word: <strong>" + esc(sc.answers[0]) + "</strong>"
            : "");
      }
      if (tipEl) {
        tipEl.textContent = sc.phraseFull
          ? "Cool Word: " + sc.phraseFull
          : "";
      }
      if (modal) modal.hidden = false;
      root.querySelector("#sqModalNext").onclick = function () {
        if (modal) modal.hidden = true;
        advance(sc);
      };
    }

    function advance(sc) {
      state.done[sc.id] = true;
      if (state.index >= total - 1) {
        state.screen = "win";
        setPlayLayout(false);
        render();
        return;
      }
      state.index += 1;
      refreshPlayScene();
    }

    function renderWin() {
      root.innerHTML =
        navHtml() +
        '<div class="sq-shell sq-win">' +
        '<div class="sq-win-layout">' +
        '<div class="sq-win-visual">' +
        '<div class="sq-win-cover">' +
        '<img src="' +
        esc(pack.winImg || pack.coverImg) +
        '" alt="" class="sq-intro-img" />' +
        "</div></div>" +
        '<div class="sq-win-main">' +
        "<h1 class=\"sq-win-title\">Happy ever after ✓</h1>" +
        '<p class="sq-win-msg">' +
        esc(
          pack.completeMsg ||
            "All " +
              total +
              " phrases — timeline complete." +
              (state.wrongCount
                ? " (" + state.wrongCount + " hints along the way.)"
                : " Perfect run.")
        ) +
        "</p>" +
        '<button type="button" class="sq-cta" id="sqReplay">Play again →</button>' +
        "</div></div></div></div>";
      root.querySelector("#sqReplay").addEventListener("click", startGame);
    }

    function wireAudioBtn(btn) {
      if (!btn) return;
      var amb = W.FCE_STORY_QUEST_AMBIENCE;
      var audioEl = W.document.getElementById("sqAmbience");

      function isOn() {
        return (
          (amb && amb.isPlaying && amb.isPlaying()) ||
          (audioEl && !audioEl.paused && !audioEl.ended)
        );
      }

      function syncIcon() {
        btn.textContent = isOn() ? "🔊" : "🔇";
        btn.classList.toggle("is-on", isOn());
      }

      btn.addEventListener("click", function () {
        if (isOn()) {
          if (amb && amb.pauseAll) amb.pauseAll(audioEl);
          else if (audioEl) audioEl.pause();
          try {
            W.localStorage.setItem("sq-audio-on", "0");
          } catch (e) {}
        } else {
          if (amb && amb.tryMp3ThenSynth) amb.tryMp3ThenSynth(audioEl);
          else if (audioEl) audioEl.play().catch(function () {});
          try {
            W.localStorage.setItem("sq-audio-on", "1");
          } catch (e) {}
        }
        W.setTimeout(syncIcon, 80);
      });
      syncIcon();
    }

    render();
  }

  W.FCE_STORY_QUEST = { mount: mount, norm: norm, matchesAny: matchesAny };
})(typeof window !== "undefined" ? window : globalThis);
