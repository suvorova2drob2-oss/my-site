/**
 * Unit 3 My digital detox — Lexical games engine (mechanics aligned with main app Unit 9).
 */
(function () {
  "use strict";
  var LG = window.U3_LG;
  if (!LG || !LG.items || !LG.items.length) {
    if (window.document && document.getElementById("u3lg-root")) {
      document.getElementById("u3lg-root").innerHTML =
        "<p style=\"color:#f87171;padding:2rem;\">Data missing. Check scripts: u3-digital-detox-lexis, memory-pairs, passage-plain, u3-lex-games-data.</p>";
    }
    return;
  }
  var ROUND = LG.roundSize || 10;
  var CLEAR_CAP = LG.clearCap || 10;
  var D = LG;
  var STOR_KEY = "u3-digital-detox-lexical-v1";
  var exT = null;
  var prTimer = 0;
  var hpRoundN = 0;
  var norm = function (s) {
    return String(s || "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\u2019/g, "'")
      .replace(/[\u2018\u201B]/g, "'");
  };
  var lexMatch = function (a, b) {
    if (norm(a) === norm(b)) return true;
    return norm(a).replace(/[!?.]+$/g, "") === norm(b).replace(/[!?.]+$/g, "");
  };
  var itemKey = function (x) {
    return String((x && x.speaker) || "") + "|" + norm((x && x.ans) || "");
  };
  var shuf = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  };
  var dedupe = function (pool) {
    var se = {},
      o = [];
    for (var i = 0; i < pool.length; i++) {
      var it = pool[i];
      if (!it || !it.ans) continue;
      var k = itemKey(it);
      if (se[k]) continue;
      se[k] = true;
      o.push(it);
    }
    return o;
  };
  var loadSt = function () {
    try {
      return JSON.parse(localStorage.getItem(STOR_KEY) || "{}") || {};
    } catch (e) {
      return {};
    }
  };
  var saveSt = function (d) {
    try {
      localStorage.setItem(STOR_KEY, JSON.stringify(d));
    } catch (e) {}
  };
  var st = loadSt();
  if (!st.wb) st.wb = {};
  if (!st.lexClears) st.lexClears = { fall: 0, mcq: 0, hear: 0, hearPar: 0, match: 0 };
  function save() {
    saveSt(st);
  }
  var bump = function (id) {
    st.lexClears[id] = Math.min(CLEAR_CAP, (Number(st.lexClears[id]) || 0) + 1);
    save();
    hubTicks();
  };
  function $id(id) {
    return document.getElementById(id);
  }
  function progL(idl, idf, d, t) {
    t = Math.max(0, t | 0);
    d = Math.max(0, Math.min(t, d | 0));
    var l = $id(idl);
    var f = $id(idf);
    if (l) l.textContent = t ? d + " / " + t + (idl.indexOf("tr") < 0 ? " in this round" : "") : "";
    if (f) f.style.width = t ? Math.round((100 * d) / t) + "%" : "0%";
  }
  function setScr(name) {
    var all = document.querySelectorAll(".u3lg-screen");
    for (var i = 0; i < all.length; i++) {
      all[i].classList.remove("is-active");
    }
    var el = $id("u3lg-screen-" + name);
    if (el) el.classList.add("is-active");
    if (name === "fall") {
      if (el) el.classList.remove("playing");
    }
  }
  function goHub() {
    if (window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    fallStop();
    fallInitUi();
    if (exT) {
      try {
        clearInterval(exT);
      } catch (e) {}
      exT = null;
    }
    if (prTimer) {
      try {
        clearInterval(prTimer);
      } catch (e) {}
      prTimer = 0;
    }
    setScr("hub");
  }
  function hubTicks() {
    var g = ["fall", "mcq", "hear", "hearPar", "match"];
    for (var i = 0; i < g.length; i++) {
      var n = Math.min(CLEAR_CAP, Number(st.lexClears[g[i]]) || 0);
      var e = $id("u3lg-tick-" + g[i]);
      if (e) {
        e.textContent = n ? "\u2713".repeat(n) : "";
        e.title = n ? "Cleared " + n + " full rounds" : "Clear a full round to earn a check";
      }
    }
  }
  var pool = function () {
    return dedupe(D.items);
  };
  var sampleR = function () {
    return shuf(pool()).slice(0, Math.min(ROUND, pool().length));
  };
  var wbRender = function () {
    $id("u3lg-wb-tag").textContent = D.speaker + " · " + D.items.length + " phrases";
    var q = ($id("u3lg-wb-search").value || "").toLowerCase();
    var li = D.items.filter(function (x) {
      if (!q) return true;
      return (x.ans + " " + x.syn).toLowerCase().indexOf(q) >= 0;
    });
    var k = 0;
    var l = 0;
    for (var i = 0; i < li.length; i++) {
      if (st.wb[li[i].id] === "know") k++;
      else if (st.wb[li[i].id] === "learn") l++;
    }
    $id("u3lg-wb-stats").textContent = "Found: " + li.length + " · Know: " + k + " · Learning: " + l;
    $id("u3lg-wb-list").innerHTML = li
      .map(function (x) {
        return (
          '<li class="wb-item" data-id="' +
          x.id +
          '"><div class="phrase">' +
          esc(x.ans) +
          '</div><div class="hint">' +
          esc(x.syn) +
          '</div><div class="act"><button type="button" class="wb-mark-btn know" data-m="know">Know</button> <button type="button" class="wb-mark-btn learn" data-m="learn">Learning</button> <button type="button" class="wb-mark-btn reset" data-m="">Reset</button></div></li>'
        );
      })
      .join("");
  };
  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  document.getElementById("u3lg-root").addEventListener("click", function (e) {
    var f = e.target.closest(".folder");
    if (f && f.getAttribute("data-u3lg-go")) {
      e.preventDefault();
      var g = f.getAttribute("data-u3lg-go");
      if (g === "wb") {
        setScr("wb");
        wbRender();
      } else if (g === "trainer") {
        trStart();
      } else if (g === "flip") {
        setScr("flip");
      } else if (g === "fall") {
        setScr("fall");
        fallInitUi();
      } else if (g === "mcq") {
        setScr("mcq");
        mcqReset();
      } else if (g === "express") {
        setScr("express");
      } else if (g === "hear") {
        setScr("hear");
        hearReset();
      } else if (g === "hearpar") {
        setScr("hearpar");
        hpReset();
      } else if (g === "match") {
        setScr("match");
      } else if (g === "sticky") {
        setScr("sticky");
      } else if (g === "prep") {
        setScr("prep");
      } else {
        setScr(g);
      }
      return;
    }
    var hb = e.target.closest(".hub-back");
    if (hb) {
      if (hb.getAttribute("data-u3lg-nav") === "backhub") {
        window.location.href = "index.html";
        return;
      }
      e.preventDefault();
      goHub();
    }
  });
  document.getElementById("u3lg-wb-search") &&
    document.getElementById("u3lg-wb-search").addEventListener("input", wbRender);
  document.getElementById("u3lg-wb-list") &&
    document.getElementById("u3lg-wb-list").addEventListener("click", function (e) {
      var b = e.target.closest(".wb-mark-btn");
      if (!b) return;
      var li = e.target.closest(".wb-item");
      if (!li) return;
      var id = li.getAttribute("data-id");
      st.wb[id] = b.getAttribute("data-m");
      save();
      wbRender();
    });
  var trQ = [],
    trI = 0,
    trL = 3;
  function trStart() {
    trQ = shuf(
      D.items.filter(function (x) {
        return (x.fallText || "").indexOf("____") >= 0;
      })
    ).slice(0, Math.min(ROUND, 30));
    trI = 0;
    trL = 3;
    if (!trQ.length) {
      alert("No gap lines.");
      return;
    }
    setScr("trainer");
    $id("u3lg-tr-label").textContent = D.speaker;
    trShow();
  }
  function trShow() {
    if (trI >= trQ.length) {
      $id("u3lg-tr-fb").textContent = "Done.";
      $id("u3lg-tr-line").textContent = "";
      return;
    }
    var t = trQ[trI];
    $id("u3lg-tr-line").innerHTML = esc(t.before) + " <b>____</b> " + esc(t.after);
    $id("u3lg-tr-hint").textContent = "Hint: " + t.syn;
    $id("u3lg-tr-inp").value = "";
    $id("u3lg-tr-fb").textContent = trL + " tr" + (trL === 1 ? "y" : "ies") + " left";
    progL("u3lg-tr-prog-l", "u3lg-tr-prog-f", trI, trQ.length);
  }
  $id("u3lg-tr-check") &&
    $id("u3lg-tr-check").addEventListener("click", function () {
      if (trI >= trQ.length) return;
      var t = trQ[trI];
      if (lexMatch($id("u3lg-tr-inp").value, t.ans)) {
        $id("u3lg-tr-fb").textContent = "Yes!";
        trI++;
        trL = 3;
        trShow();
      } else {
        trL--;
        $id("u3lg-tr-fb").textContent = (trL <= 0 ? "Answer: " + t.ans : "No — " + trL + " left.");
        if (trL <= 0) {
          trI++;
          trL = 3;
          trShow();
        }
      }
    });
  var flDeck = [],
    flIx = 0,
    flFlip = false;
  function flShowC() {
    if (!flDeck.length) return;
    var c = flDeck[flIx];
    $id("u3lg-flip-def").textContent = c.syn;
    $id("u3lg-flip-ans").textContent = c.ans;
    $id("u3lg-flip-ctx").textContent = c.context || "";
    $id("u3lg-flip-card").classList.toggle("flipped", flFlip);
    $id("u3lg-flip-hud").textContent = flIx + 1 + " / " + flDeck.length;
  }
  $id("u3lg-flip-open") &&
    $id("u3lg-flip-open").addEventListener("click", function () {
      flDeck = shuf(dedupe(D.items).slice(0, Math.max(1, D.items.length)));
      flIx = 0;
      flFlip = false;
      $id("u3lg-flip-sum").textContent = "";
      $id("u3lg-flip-intro").style.display = "none";
      $id("u3lg-flip-play").style.display = "block";
      flShowC();
    });
  $id("u3lg-flip-scene") &&
    $id("u3lg-flip-scene").addEventListener("click", function () {
      flFlip = !flFlip;
      flShowC();
    });
  $id("u3lg-flip-scene") &&
    $id("u3lg-flip-scene").addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        flFlip = !flFlip;
        flShowC();
      }
    });
  $id("u3lg-flip-prev") &&
    $id("u3lg-flip-prev").addEventListener("click", function () {
      if (flIx > 0) {
        flIx--;
        flFlip = false;
        flShowC();
      }
    });
  $id("u3lg-flip-next") &&
    $id("u3lg-flip-next").addEventListener("click", function () {
      if (flIx < flDeck.length - 1) {
        flIx++;
        flFlip = false;
        flShowC();
      }
    });
  $id("u3lg-flip-know") &&
    $id("u3lg-flip-know").addEventListener("click", function () {
      if (flDeck[flIx]) st.wb[flDeck[flIx].id] = "know";
      save();
    });
  $id("u3lg-flip-learn") &&
    $id("u3lg-flip-learn").addEventListener("click", function () {
      if (flDeck[flIx]) st.wb[flDeck[flIx].id] = "learn";
      save();
    });
  $id("u3lg-flip-reshuf") &&
    $id("u3lg-flip-reshuf").addEventListener("click", function () {
      $id("u3lg-flip-open").click();
    });
  var fallRaf = 0,
    fallPlay = false,
    fallChip = null,
    fallLives = 3,
    fallQ = [],
    fallGoal = 0,
    fallDone = 0,
    fallRnd = 0,
    fallPoolU = [],
    fallBack = [],
    fallM = {},
    fallSessN = 0,
    fallLastT = 0;
  function fallSpeed(lvl) {
    return 16 + (Math.max(1, lvl) - 1) * 9;
  }
  function fallTier() {
    if (fallRnd <= 0) {
      return 1;
    }
    if (fallRnd <= 4) {
      return 1;
    }
    return Math.min(10, 1 + (fallRnd - 4));
  }
  function fallStop() {
    fallPlay = false;
    if (fallRaf) {
      cancelAnimationFrame(fallRaf);
      fallRaf = 0;
    }
    fallChip = null;
  }
  function fallInitUi() {
    fallStop();
    $id("u3lg-fall-play").style.display = "none";
    $id("u3lg-fall-intro").style.display = "block";
    $id("u3lg-screen-fall").classList.remove("playing");
    $id("u3lg-fall-answrap").classList.remove("on");
  }
  function fallBtnStart() {
    var p = pool();
    if (!p.length) {
      alert("No items.");
      return;
    }
    fallSessN = p.length;
    fallPoolU = shuf(p.slice());
    fallM = {};
    fallBack = [];
    fallRnd = 1;
    fallRndStart();
  }
  function fallRndStart() {
    var seen = {},
      q = [];
    for (var j = 0; j < fallBack.length && q.length < Math.min(ROUND, fallSessN); j++) {
      var b = fallBack[j];
      var kb = itemKey(b);
      if (seen[kb]) continue;
      seen[kb] = true;
      q.push(b);
    }
    fallBack = [];
    var cand = shuf(fallPoolU.slice());
    for (var i = 0; i < cand.length && q.length < Math.min(ROUND, fallSessN); i++) {
      var c = cand[i];
      var kc = itemKey(c);
      if (seen[kc]) continue;
      seen[kc] = true;
      q.push(c);
    }
    fallQ = shuf(q);
    if (!fallQ.length) {
      modal("All phrases mastered.", "OK", goHub, "", null);
      return;
    }
    fallGoal = Math.min(ROUND, fallQ.length);
    fallDone = 0;
    $id("u3lg-fall-intro").style.display = "none";
    $id("u3lg-fall-play").style.display = "block";
    $id("u3lg-screen-fall").classList.add("playing");
    $id("u3lg-fall-answrap").classList.remove("on");
    fallLives = 3;
    fallPlay = true;
    fallLastT = 0;
    fallSpawn();
    fallRaf = requestAnimationFrame(fallTick);
  }
  function fallTick(ts) {
    if (!fallPlay) {
      return;
    }
    if (!fallLastT) {
      fallLastT = ts;
    }
    var dt = Math.min(0.05, (ts - fallLastT) / 1000);
    fallLastT = ts;
    if (fallChip) {
      var stg = $id("u3lg-fall-stage");
      var y = (fallChip.y || -8) + fallChip.vy * dt;
      var nh = stg
        ? Math.max(32, stg.clientHeight - (fallChip.el && fallChip.el.offsetHeight ? fallChip.el.offsetHeight : 48) - 8)
        : 300;
      fallChip.y = y;
      fallChip.maxY = nh;
      if (fallChip.el) {
        fallChip.el.style.top = y + "px";
      }
      if (y >= nh) {
        fallMiss();
        return;
      }
    }
    fallRaf = requestAnimationFrame(fallTick);
  }
  function fallSpawn() {
    if (!fallPlay) {
      return;
    }
    while (fallQ.length === 0 && fallBack.length && fallDone < fallGoal) {
      fallQ.push(fallBack.shift());
    }
    while (fallQ.length === 0 && fallPoolU.length && fallDone < fallGoal) {
      fallQ.push(fallPoolU.pop());
    }
    var item = fallQ[0];
    if (!item) {
      fallPlay = false;
      if (fallDone >= fallGoal) {
        if (Object.keys(fallM).length >= fallSessN) {
          bump("fall");
        }
        modal("Round " + fallRnd + " complete — " + fallDone + " correct.", "Next round", function () { fallRnd++; fallRndStart(); }, "Hub", goHub);
      } else {
        modal("No more phrases in queue this round.", "Hub", goHub, "", null);
      }
      return;
    }
    var stg2 = $id("u3lg-fall-stage");
    stg2.innerHTML = "";
    $id("u3lg-fall-syn").textContent = item.syn;
    $id("u3lg-fall-answrap").classList.remove("on");
    $id("u3lg-fall-fb").textContent = "";
    $id("u3lg-fall-inp").value = "";
    $id("u3lg-fall-inp").focus();
    var ft = item.fallText || item.ans;
    var div = document.createElement("div");
    div.className = "u3lg-fall-chip";
    div.textContent = ft;
    stg2.appendChild(div);
    var eff = fallSpeed(fallTier());
    fallChip = { el: div, ans: item.ans, item: item, y: -8, vy: eff, maxY: 300, syn: item.syn, fallText: ft };
    var w = stg2.clientWidth;
    div.style.maxWidth = Math.min(w - 16, 0.98 * w) + "px";
    fallLastT = 0;
    progL("u3lg-fall-prog-l", "u3lg-fall-prog-f", fallDone, fallGoal);
    $id("u3lg-fall-hud").textContent = "Lives: " + fallLives;
  }
  function fallMiss() {
    if (!fallChip) {
      return;
    }
    $id("u3lg-fall-ansbig").textContent = fallChip.ans;
    $id("u3lg-fall-answrap").classList.add("on");
    var bad = fallQ.length ? fallQ.shift() : null;
    if (bad) {
      fallBack.push(bad);
    }
    if (fallChip.el && fallChip.el.parentNode) {
      fallChip.el.parentNode.removeChild(fallChip.el);
    }
    fallChip = null;
    fallLives--;
    if (fallLives <= 0) {
      fallPlay = false;
      modal("Out of lives.", "Restart", function () {
        $id("u3lg-modal").classList.remove("on");
        fallRndStart();
      }, "Back", goHub);
      return;
    }
    setTimeout(fallSpawn, 700);
  }
  function fallTry() {
    if (!fallPlay || !fallChip) {
      return;
    }
    var raw = $id("u3lg-fall-inp").value;
    if (lexMatch(raw, fallChip.ans)) {
      var curIt = fallChip.item;
      fallM[itemKey(curIt)] = 1;
      fallPoolU = fallPoolU.filter(function (x) { return itemKey(x) !== itemKey(curIt); });
      if (fallQ.length) {
        fallQ.shift();
      }
      if (fallChip.el && fallChip.el.parentNode) {
        fallChip.el.parentNode.removeChild(fallChip.el);
      }
      fallChip = null;
      fallDone++;
      if (fallDone >= fallGoal) {
        fallPlay = false;
        if (Object.keys(fallM).length >= fallSessN) { bump("fall"); }
        modal("Round " + fallRnd + " cleared — " + fallGoal + " correct.", "Next", function () { fallRnd++; fallRndStart(); }, "Hub", goHub);
        return;
      }
      setTimeout(fallSpawn, 200);
    } else {
      $id("u3lg-fall-ansbig").textContent = fallChip.ans;
      $id("u3lg-fall-answrap").classList.add("on");
      var bad2 = fallQ.shift();
      if (bad2) {
        fallBack.push(bad2);
      }
      if (fallChip && fallChip.el && fallChip.el.parentNode) {
        fallChip.el.parentNode.removeChild(fallChip.el);
      }
      fallChip = null;
      setTimeout(fallSpawn, 800);
    }
  }
  $id("u3lg-fall-start") && $id("u3lg-fall-start").addEventListener("click", fallBtnStart);
  $id("u3lg-fall-check") && $id("u3lg-fall-check").addEventListener("click", fallTry);
  $id("u3lg-fall-inp") &&
    $id("u3lg-fall-inp").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        fallTry();
      }
    });
  function modal(t, p1, c1, p2, c2) {
    $id("u3lg-modal-t").innerHTML = t;
    var b1 = $id("u3lg-modal-p1");
    var b2 = $id("u3lg-modal-p2");
    b1.textContent = p1;
    b1.style.display = "inline-block";
    b1.onclick = function () {
      $id("u3lg-modal").classList.remove("on");
      if (c1) c1();
    };
    if (p2) {
      b2.textContent = p2;
      b2.style.display = "block";
      b2.onclick = function () {
        $id("u3lg-modal").classList.remove("on");
        if (c2) c2();
      };
    } else {
      b2.style.display = "none";
    }
    $id("u3lg-modal").classList.add("on");
  }
  var mcD = [],
    mcT = 0,
    mcBus = false;
  function mcqReset() {
    $id("u3lg-mcq-intro").style.display = "block";
    $id("u3lg-mcq-play").style.display = "none";
    $id("u3lg-mcq-sum").textContent = "Press Start round.";
  }
  function mcqStart() {
    mcD = sampleR();
    if (!mcD.length) {
      return;
    }
    mcT = mcD.length;
    $id("u3lg-mcq-intro").style.display = "none";
    $id("u3lg-mcq-play").style.display = "block";
    mcShow();
  }
  function pickWrong(correct, p, need) {
    var a = shuf(p),
      o = [],
      s = {},
      s2 = norm(correct);
    s[s2] = 1;
    for (var i = 0; i < a.length && o.length < need; i++) {
      if (!a[i] || !a[i].ans) {
        continue;
      }
      var n = norm(a[i].ans);
      if (s[n]) {
        continue;
      }
      s[n] = 1;
      o.push(a[i].ans);
    }
    while (o.length < need) {
      o.push("(other chunk)");
    }
    return o;
  }
  function mcShow() {
    if (!mcD.length) {
      bump("mcq");
      $id("u3lg-mcq-intro").style.display = "block";
      $id("u3lg-mcq-play").style.display = "none";
      $id("u3lg-mcq-sum").textContent = "Round cleared! Checkmark saved (up to " + CLEAR_CAP + ").";
      progL("u3lg-mcq-prog-l", "u3lg-mcq-prog-f", mcT, mcT);
      return;
    }
    var it = mcD[0];
    $id("u3lg-mcq-syn").textContent = it.syn;
    $id("u3lg-mcq-prog").textContent = "To go: " + mcD.length + " / " + mcT;
    var wr = pickWrong(it.ans, pool(), 3);
    var o = shuf([it.ans].concat(wr));
    var h = $id("u3lg-mcq-opts");
    h.innerHTML = "";
    mcBus = false;
    o.forEach(function (ch) {
      var b = document.createElement("button");
      b.className = "btn u3lg-mcq-opt";
      b.textContent = ch;
      b.type = "button";
      b.onclick = function () {
        if (mcBus) {
          return;
        }
        mcBus = true;
        var ok = lexMatch(ch, it.ans);
        if (ok) {
          mcD.shift();
          $id("u3lg-mcq-fb").textContent = "Right.";
          setTimeout(function () {
            mcBus = false;
            mcShow();
          }, 400);
        } else {
          var rot = mcD.shift();
          if (rot) {
            mcD.push(rot);
          }
          $id("u3lg-mcq-fb").textContent = "Answer from text: " + it.ans;
          setTimeout(function () {
            mcBus = false;
            mcShow();
          }, 800);
        }
        progL("u3lg-mcq-prog-l", "u3lg-mcq-prog-f", mcT - mcD.length, mcT);
      };
      h.appendChild(b);
    });
  }
  $id("u3lg-mcq-start") && $id("u3lg-mcq-start").addEventListener("click", mcqStart);
  var exD = [];
  function exCard() {
    if (!exD.length) {
      return;
    }
    var r = exD[0];
    if (r.k === "d") {
      $id("u3lg-expr-p").textContent = r.syn;
      $id("u3lg-expr-a").textContent = r.ans;
      $id("u3lg-expr-mode").textContent = "Mode: paraphrase → say the phrase from the text";
    } else {
      $id("u3lg-expr-p").textContent = r.t;
      $id("u3lg-expr-a").textContent = r.ans;
      $id("u3lg-expr-mode").textContent = "Mode: line with a gap";
    }
    $id("u3lg-expr-a").style.display = "none";
  }
  $id("u3lg-expr-go") &&
    $id("u3lg-expr-go").addEventListener("click", function () {
      exD = [];
      shuf(pool().slice(0, 20)).forEach(function (x) {
        exD.push({ k: "d", syn: x.syn, ans: x.ans });
        if (x.fallText && x.fallText.indexOf("____") >= 0) {
          exD.push({ k: "g", t: x.fallText, ans: x.ans });
        }
      });
      exD = shuf(exD);
      if (!exD.length) {
        return;
      }
      $id("u3lg-expr-intro").style.display = "none";
      $id("u3lg-expr-run").style.display = "block";
      $id("u3lg-expr-end").style.display = "none";
      var t = 60;
      $id("u3lg-expr-t").textContent = t;
      $id("u3lg-expr-n").textContent = "0";
      exCard();
      exT = setInterval(function () {
        t--;
        $id("u3lg-expr-t").textContent = t;
        if (t <= 0) {
          clearInterval(exT);
          exT = null;
          $id("u3lg-expr-run").style.display = "none";
          $id("u3lg-expr-end").style.display = "block";
          $id("u3lg-expr-res").textContent = "I knew it: " + $id("u3lg-expr-n").textContent;
        }
      }, 1000);
    });
  $id("u3lg-expr-skip") &&
    $id("u3lg-expr-skip").addEventListener("click", function () {
      exD.shift();
      if (exD.length) {
        exCard();
      }
    });
  $id("u3lg-expr-knew") &&
    $id("u3lg-expr-knew").addEventListener("click", function () {
      exD.shift();
      var n = 1 + parseInt($id("u3lg-expr-n").textContent, 10) || 0;
      $id("u3lg-expr-n").textContent = n;
      if (exD.length) {
        exCard();
      }
    });
  $id("u3lg-expr-show") &&
    $id("u3lg-expr-show").addEventListener("click", function () {
      $id("u3lg-expr-a").style.display = "block";
    });
  $id("u3lg-expr-again") &&
    $id("u3lg-expr-again").addEventListener("click", function () {
      $id("u3lg-expr-end").style.display = "none";
      $id("u3lg-expr-intro").style.display = "block";
    });
  var hQ = [],
    hC = null,
    hB = false,
    hN = 0;
  function speak(s) {
    if (!("speechSynthesis" in window)) {
      return false;
    }
    try {
      var u = new SpeechSynthesisUtterance(s);
      u.lang = "en-GB";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) {
      return false;
    }
  }
  function hReset() {
    hQ = [];
    hC = null;
    hB = false;
  }
  function hearReset() {
    hReset();
    $id("u3lg-hear-sum").textContent = "";
  }
  function hearPr() {
    if (!hQ.length && !hC) {
      return;
    }
    var cur = hC || hQ[0];
    if (cur) {
      speak(cur.ans);
    }
  }
  function hearShow() {
    if (!hQ.length) {
      bump("hear");
      $id("u3lg-hear-run").style.display = "none";
      $id("u3lg-hear-intro").style.display = "block";
      $id("u3lg-hear-sum").textContent = "All clear — checkmark saved.";
      return;
    }
    hC = hQ[0];
    hN = hN || hQ.length;
    $id("u3lg-hear-prog").textContent = "To go: " + hQ.length;
    $id("u3lg-hear-inp").value = "";
    $id("u3lg-hear-fb").textContent = "";
    $id("u3lg-hear-next").style.display = "none";
    $id("u3lg-hear-ansb").style.display = "none";
    hB = false;
    speak(hC.ans);
    progL("u3lg-hear-prog-l", "u3lg-hear-prog-f", hN - hQ.length, hN);
  }
  $id("u3lg-hear-go") &&
    $id("u3lg-hear-go").addEventListener("click", function () {
      hN = 0;
      hQ = sampleR();
      if (!hQ.length) {
        return;
      }
      hN = hQ.length;
      $id("u3lg-hear-sum").textContent = "";
      $id("u3lg-hear-intro").style.display = "none";
      $id("u3lg-hear-run").style.display = "block";
      hearShow();
    });
  $id("u3lg-hear-play") && $id("u3lg-hear-play").addEventListener("click", hearPr);
  $id("u3lg-hear-chk") &&
    $id("u3lg-hear-chk").addEventListener("click", function () {
      if (!hC) {
        return;
      }
      if (lexMatch($id("u3lg-hear-inp").value, hC.ans)) {
        hQ.shift();
        hC = null;
        hearShow();
      } else {
        var x = hQ.shift();
        if (x) {
          hQ.push(x);
        }
        $id("u3lg-hear-fb").textContent = "Try again; phrase goes to the end of the line.";
        hearShow();
      }
    });
  $id("u3lg-hear-ansb") &&
    $id("u3lg-hear-ansb").addEventListener("click", function () {
      if (hC) {
        $id("u3lg-hear-fb").textContent = hC.ans;
        $id("u3lg-hear-next").style.display = "inline";
      }
    });
  $id("u3lg-hear-next") &&
    $id("u3lg-hear-next").addEventListener("click", function () {
      hB = true;
      var x2 = hQ.shift();
      if (x2) {
        hQ.push(x2);
      }
      hC = null;
      hearShow();
    });
  var hpQ = [],
    hpC = null;
  function hpReset() {
    hpQ = [];
    hpC = null;
  }
  function hpShow() {
    if (!hpQ.length) {
      bump("hearPar");
      $id("u3lg-hp-run").style.display = "none";
      $id("u3lg-hp-intro").style.display = "block";
      $id("u3lg-hp-sum").textContent = "Round cleared — checkmark.";
      return;
    }
    hpC = hpQ[0];
    $id("u3lg-hp-inp").value = "";
    $id("u3lg-hp-fb").textContent = "";
    $id("u3lg-hp-next").style.display = "none";
    speak(hpC.syn);
    var tot = hpRoundN || hpQ.length;
    progL("u3lg-hp-prog-l", "u3lg-hp-prog-f", tot - hpQ.length, tot);
  }
  $id("u3lg-hp-go") &&
    $id("u3lg-hp-go").addEventListener("click", function () {
      hpQ = shuf(
        D.items.filter(function (x) {
          return (x.syn || "").length > 3;
        })
      ).slice(0, Math.min(ROUND, 15));
      if (!hpQ.length) {
        return;
      }
      hpRoundN = hpQ.length;
      $id("u3lg-hp-sum").textContent = "";
      $id("u3lg-hp-intro").style.display = "none";
      $id("u3lg-hp-run").style.display = "block";
      hpShow();
    });
  $id("u3lg-hp-play") && $id("u3lg-hp-play").addEventListener("click", function () { if (hpC) { speak(hpC.syn); } });
  $id("u3lg-hp-chk") &&
    $id("u3lg-hp-chk").addEventListener("click", function () {
      if (!hpC) { return; }
      if (lexMatch($id("u3lg-hp-inp").value, hpC.ans)) {
        hpQ.shift();
        hpC = null;
        hpShow();
      } else {
        var t = hpQ.shift();
        if (t) { hpQ.push(t); }
        $id("u3lg-hp-fb").textContent = "Nope. Line moved back.";
        hpShow();
      }
    });
  $id("u3lg-hp-ansb") && $id("u3lg-hp-ansb").addEventListener("click", function () { if (hpC) { $id("u3lg-hp-fb").textContent = hpC.ans; } $id("u3lg-hp-next").style.display = "inline"; });
  $id("u3lg-hp-next") && $id("u3lg-hp-next").addEventListener("click", function () { var t2 = hpQ.shift(); if (t2) { hpQ.push(t2); } hpC = null; hpShow(); });
  var mCards = [],
    mP = [],
    mSel = null,
    mT0 = 0;
  function mGo() {
    var rawM = window.U3_MEMORY_PAIR_ROWS || [];
    mP = shuf(rawM.slice()).slice(0, 6);
    if (mP.length < 2) {
      mP = [];
      for (var i2 = 0; i2 < 6; i2++) {
        mP.push({ phrase: D.items[i2].ans, gloss: D.items[i2].syn });
      }
    }
    mP = mP.slice(0, 6);
    mCards = [];
    mP.forEach(function (r, j) {
      mCards.push({ k: "p" + j, t: r.phrase, side: "p" });
      mCards.push({ k: "p" + j, t: r.gloss, side: "g" });
    });
    mCards = shuf(mCards);
    mSel = null;
    mT0 = performance.now();
    var g2 = $id("u3lg-match-grid");
    g2.innerHTML = "";
    mCards.forEach(function (c, i) {
      var d2 = document.createElement("div");
      d2.className = "u3lg-match-card";
      d2.textContent = c.t;
      d2.dataset["i"] = i;
      d2.onclick = function () {
        mPick(i);
      };
      g2.appendChild(d2);
    });
    $id("u3lg-match-hud").textContent = "Tap pairs. Timer runs.";
  }
  function mPick(i) {
    var c = mCards[i];
    if (!c || c.m) {
      return;
    }
    var n = $id("u3lg-match-grid").querySelectorAll(".u3lg-match-card")[i];
    if (mSel === null) {
      mSel = i;
      n.classList.add("selected");
    } else {
      if (i === mSel) {
        n.classList.remove("selected");
        mSel = null;
        return;
      }
      var a = mCards[mSel];
      var b2 = mCards[i];
      var p1 = $id("u3lg-match-grid").querySelectorAll(".u3lg-match-card")[mSel];
      p1.classList.remove("selected");
      if (a.k === b2.k && a.side !== b2.side) {
        a.m = b2.m = true;
        p1.classList.add("matched");
        n.classList.add("matched");
        var al = 0;
        mCards.forEach(function (r) { if (r.m) { al++; } });
        if (al === mCards.length) {
          bump("match");
          var s = (performance.now() - mT0) / 1000;
          $id("u3lg-match-hud").textContent = s.toFixed(1) + " s — grid clear!";
        }
      } else {
        p1.classList.add("wrong");
        n.classList.add("wrong");
        setTimeout(function () {
          p1.classList.remove("wrong");
          n.classList.remove("wrong");
        }, 500);
      }
      mSel = null;
    }
  }
  $id("u3lg-match-go") && $id("u3lg-match-go").addEventListener("click", mGo);
  function stGo() {
    var arr = shuf(
      pool().filter(function (x) {
        return (x.before && x.before.length) || (x.after && x.after.length);
      })
    ).slice(0, 9);
    if (arr.length < 3) {
      return;
    }
    $id("u3lg-sticky-board").innerHTML = "";
    arr.forEach(function (p, n) {
      var d3 = document.createElement("div");
      d3.className = "u3lg-sticky-note u3lg-note-yellow";
      d3.innerHTML = "<b>#" + (n + 1) + "</b> " + esc(p.before) + " <input class=\"game-input\" data-a=\"" + esc(p.ans) + "\" /> " + esc(p.after);
      $id("u3lg-sticky-board").appendChild(d3);
    });
  }
  $id("u3lg-sticky-go") && $id("u3lg-sticky-go").addEventListener("click", stGo);
  var prepR = 0,
    prTimer = 0;
  var prepRows = [];
  function prepNew() {
    prepR = 180;
    if (prTimer) {
      clearInterval(prTimer);
    }
    prTimer = 0;
    prTimer = setInterval(function () {
      prepR--;
      $id("u3lg-prep-timer").textContent = Math.floor(prepR / 60) + ":" + (prepR % 60 < 10 ? "0" : "") + (prepR % 60);
      if (prepR <= 0) {
        clearInterval(prTimer);
        prTimer = 0;
        alert("System lockout");
      }
    }, 1000);
    $id("u3lg-prep-timer").textContent = "3:00";
    prepR = 180;
    var six = shuf(pool()).slice(0, 6);
    if (six.length < 2) { return; }
    prepRows = six.map(function (p) { return { item: p, h: 0, r: 0, done: 0, inp: null }; });
    var c = $id("u3lg-prep-tasks");
    c.innerHTML = prepRows
      .map(function (p, n) {
        return (
          "<div class=\"prep-escape-card\" data-pp=\"" + n + "\">#" +
          (n + 1) +
          " <p class=\"prep-escape-gap\">" +
          esc(p.item.before) +
          " <span class=\"u3lgph\">____</span> " +
          esc(p.item.after) +
          "</p><p><input class=\"game-input pini\" data-pp=\"" + n + '" /></p><p><button class="btn btn-secondary pth" data-pp="' +
          n + '">Hint (−20s)</button> <button class="btn btn-secondary pid" data-pp="' + n + '">I don\'t know</button></p><p class="pfb" style="font-size:0.9rem"></p></div>'
        );
      })
      .join("");
    c.querySelectorAll(".pth").forEach(function (b) { b.addEventListener("click", function () { prepR = Math.max(0, prepR - 20); var w = c.querySelector('input.pini[data-pp="' + b.getAttribute("data-pp") + '"]'); if (w && prepRows[b.getAttribute("data-pp") | 0]) { w.value = (prepRows[b.getAttribute("data-pp") | 0].item.ans).charAt(0) + "…"; } }); });
    c.querySelectorAll(".pid").forEach(function (b) { b.addEventListener("click", function () { prepR = Math.max(0, prepR - 20); var ri = b.getAttribute("data-pp") | 0; if (prepRows[ri]) { c.querySelectorAll(".pfb")[ri].textContent = prepRows[ri].item.ans; } }); });
    c.querySelectorAll("input.pini").forEach(function (w) { w.addEventListener("change", function () { var ri2 = w.getAttribute("data-pp") | 0; if (lexMatch(w.value, prepRows[ri2].item.ans)) { c.querySelectorAll(".prep-escape-card")[ri2].classList.add("done"); prepRows[ri2].done = 1; if (prepRows.filter(function (x) { return x.done; }).length === 6) { if (prTimer) { clearInterval(prTimer); } prTimer = 0; alert("Vault disengaged — all six channels match."); } } }); });
  }
  $id("u3lg-prep-new") && $id("u3lg-prep-new").addEventListener("click", prepNew);
  hubTicks();
})();
