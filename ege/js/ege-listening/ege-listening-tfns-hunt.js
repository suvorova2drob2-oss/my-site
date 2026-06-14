/**
 * ЕГЭ Listening · TFNS — этап 2: разбор по утверждениям A–G.
 * window.__EGE_LISTENING_TFNS_HUNT__
 */
(function (w) {
  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function keyLabel(key) {
    if (key === "t") return "True (+)";
    if (key === "f") return "False (−)";
    return "Not stated (?)";
  }

  function speakerSlug(name) {
    return String(name || "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "") || "spk";
  }

  function hitsFromLab(lab) {
    var out = [];
    var segs = lab.segments || [];
    var i;
    for (i = 0; i < segs.length; i++) {
      if (segs[i].kind === "hit") out.push(segs[i]);
    }
    if (lab.hits) {
      lab.hits.forEach(function (h) {
        out.push({
          kind: "hit",
          text: h.text || h,
          sol: h.sol || "e"
        });
      });
    }
    return out;
  }

  function textWithHits(raw, hits) {
    if (!raw) return "";
    var applied = [];
    var hi;
    for (hi = 0; hi < hits.length; hi++) {
      var needle = hits[hi].text || "";
      if (!needle || raw.indexOf(needle) < 0 || applied.indexOf(needle) >= 0) continue;
      applied.push(needle);
    }
    if (!applied.length) return esc(raw);
    applied.sort(function (a, b) {
      return b.length - a.length;
    });
    var parts = [{ text: raw, hit: null }];
    applied.forEach(function (needle) {
      var next = [];
      parts.forEach(function (part) {
        if (part.hit || part.text.indexOf(needle) < 0) {
          next.push(part);
          return;
        }
        var idx = part.text.indexOf(needle);
        if (idx > 0) next.push({ text: part.text.slice(0, idx), hit: null });
        next.push({ text: needle, hit: needle });
        if (idx + needle.length < part.text.length) {
          next.push({ text: part.text.slice(idx + needle.length), hit: null });
        }
      });
      parts = next;
    });
    var html = "";
    var pi;
    for (pi = 0; pi < parts.length; pi++) {
      if (parts[pi].hit) {
        html +=
          '<span class="lies-hit tfns-hit" data-sol="evidence" tabindex="0" role="button">' +
          esc(parts[pi].text) +
          "</span>";
      } else {
        html += esc(parts[pi].text);
      }
    }
    return html;
  }

  function renderDialogueParagraph(para, lab) {
    var hits = hitsFromLab(lab);
    var html = '<div class="ege-tfns-dialogue-passage">';
    (para.turns || []).forEach(function (turn) {
      var slug = speakerSlug(turn.speaker);
      html +=
        '<div class="ege-tfns-dialogue-line ege-tfns-dialogue-line--' +
        slug +
        '">';
      html +=
        '<span class="ege-tfns-dialogue-name">' + esc(turn.speaker) + "</span>";
      html +=
        '<div class="ege-tfns-dialogue-bubble">' +
        textWithHits(turn.text, hits) +
        "</div></div>";
    });
    html += "</div>";
    return html;
  }

  function mount(opts) {
    if (!opts || !opts.labs || !opts.labs.length) return;
    var prefix = opts.prefix || "ege-tfns";
    var labs = opts.labs;
    var dialogueParagraphs = opts.dialogueParagraphs || [];
    var tabIx = 0;
    var brush = "green";

    var host = document.getElementById(opts.passageId || prefix + "-hunt-passage");
    var elMeta = document.getElementById(opts.metaId || prefix + "-hunt-meta");
    var elFb = document.getElementById(opts.fbId || prefix + "-hunt-fb");
    var elTarget = document.getElementById(opts.targetId || prefix + "-hunt-target");
    var elPrompt = document.getElementById(opts.promptId || prefix + "-hunt-prompt");
    var btnVerify = document.getElementById(opts.verifyId || prefix + "-hunt-verify");
    var btnReset = document.getElementById(opts.resetId || prefix + "-hunt-reset");
    var tabs = document.querySelectorAll("." + prefix + "-hunt-tab");
    var brushBtns = document.querySelectorAll("." + prefix + "-hunt-brush");

    if (!host) return;

    function currentLab() {
      return labs[tabIx] || labs[0];
    }

    function stmtText(letter) {
      var list = opts.statements || [];
      var i;
      for (i = 0; i < list.length; i++) {
        if (String(list[i].letter) === String(letter)) return list[i].text || "";
      }
      return "";
    }

    function hits() {
      return host.querySelectorAll(".lies-hit");
    }

    function evidenceHits() {
      return host.querySelectorAll('.lies-hit[data-sol="evidence"]');
    }

    function renderPassage() {
      var lab = currentLab();
      if (dialogueParagraphs.length && lab.paragraphIndex != null) {
        var para = dialogueParagraphs[lab.paragraphIndex];
        if (para) {
          host.innerHTML = renderDialogueParagraph(para, lab);
          host.classList.toggle("tfns-passage--ns", lab.key === "ns");
          return;
        }
      }
      var html = "";
      var segs = lab.segments || [];
      var si;
      for (si = 0; si < segs.length; si++) {
        if (segs[si].kind === "glue") {
          html += segs[si].html || esc(segs[si].text || "");
        } else if (segs[si].kind === "hit") {
          var sol = segs[si].sol === "d" ? "distractor" : "evidence";
          html +=
            '<span class="lies-hit tfns-hit" data-sol="' +
            sol +
            '" tabindex="0" role="button">' +
            (segs[si].html || esc(segs[si].text || "")) +
            "</span>";
        }
      }
      host.innerHTML = html;
      host.classList.toggle("tfns-passage--ns", lab.key === "ns");
    }

    function renderTarget() {
      if (!elTarget) return;
      var lab = currentLab();
      elTarget.innerHTML =
        '<p class="' +
        prefix +
        '-hunt-stmt-target-kicker">Утверждение ' +
        esc(lab.letter) +
        " · ключ: " +
        keyLabel(lab.key) +
        "</p>" +
        '<p class="' +
        prefix +
        '-hunt-stmt-target-text">' +
        esc(stmtText(lab.letter)) +
        "</p>";
    }

    function updateMeta() {
      if (!elMeta) return;
      var lab = currentLab();
      if (lab.key === "ns") {
        elMeta.textContent =
          "Not stated — в диалоге нет данных ни за True, ни за False. Прочитай пояснение.";
      } else if (lab.key === "f") {
        elMeta.textContent = "False — найди фразу, где сказано наоборот (зелёная кисть).";
      } else {
        elMeta.textContent = "True — найди фразу-подтверждение (зелёная кисть).";
      }
    }

    function updatePrompt() {
      if (!elPrompt) return;
      var lab = currentLab();
      elPrompt.textContent =
        lab.evidencePromptRu ||
        (lab.key === "ns"
          ? "Это утверждение нельзя подтвердить или опровергнуть по диалогу."
          : "Отметь в тексте опорную фразу.");
    }

    function setBrush(b) {
      brush = b;
      brushBtns.forEach(function (btn) {
        var on = btn.getAttribute("data-brush") === b;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }

    function clearFb() {
      if (elFb) {
        elFb.className = prefix + "-hunt-fb";
        elFb.innerHTML = "";
        elFb.style.display = "none";
      }
    }

    function renderAll() {
      renderTarget();
      renderPassage();
      updateMeta();
      updatePrompt();
      clearFb();
      tabs.forEach(function (t, i) {
        t.classList.toggle("is-active", i === tabIx);
        t.setAttribute("aria-selected", i === tabIx ? "true" : "false");
      });
    }

    function onHitClick(el) {
      var lab = currentLab();
      if (lab.key === "ns") return;
      if (brush === "erase") {
        el.classList.remove("is-green", "is-red", "lies-bad");
        return;
      }
      if (brush === "green") {
        el.classList.remove("is-red", "lies-bad");
        el.classList.toggle("is-green");
      }
      if (brush === "red") {
        el.classList.remove("is-green", "lies-bad");
        el.classList.toggle("is-red");
      }
      clearFb();
    }

    host.addEventListener("click", function (e) {
      var hit = e.target.closest(".lies-hit");
      if (!hit || !host.contains(hit)) return;
      e.preventDefault();
      onHitClick(hit);
    });

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        tabIx = i;
        renderAll();
      });
    });

    brushBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setBrush(btn.getAttribute("data-brush"));
      });
    });

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        hits().forEach(function (h) {
          h.classList.remove("is-green", "is-red", "lies-bad");
        });
        clearFb();
      });
    }

    if (btnVerify) {
      btnVerify.addEventListener("click", function () {
        var lab = currentLab();
        var fb = elFb;
        if (!fb) return;
        if (lab.key === "ns") {
          fb.style.display = "block";
          fb.className = prefix + "-hunt-fb ok";
          fb.innerHTML =
            "<strong>Not stated (?)</strong> · " +
            esc(lab.keyLineRu || "") +
            (lab.nsExplainRu
              ? '<p class="' + prefix + "-hunt-ns-note\">" + esc(lab.nsExplainRu) + "</p>"
              : "");
          return;
        }
        var ok = 0;
        var bad = 0;
        var miss = 0;
        evidenceHits().forEach(function (h) {
          if (h.classList.contains("is-green")) ok++;
          else if (h.classList.contains("is-red")) bad++;
          else miss++;
        });
        var total = evidenceHits().length;
        var perfect = total > 0 && ok === total && bad === 0;
        fb.style.display = "block";
        if (perfect) {
          fb.className = prefix + "-hunt-fb ok";
          fb.innerHTML =
            "<strong>" +
            keyLabel(lab.key) +
            "</strong> · " +
            esc(lab.keyLineRu || "") +
            (lab.explainRu ? "<p>" + esc(lab.explainRu) + "</p>" : "");
        } else {
          fb.className = prefix + "-hunt-fb partial";
          fb.innerHTML =
            "Отмечено " +
            ok +
            " из " +
            total +
            " опор" +
            (miss ? " · пропуски: " + miss : "") +
            (bad ? " · не те цвета: " + bad : "") +
            ".<br><strong>Ключ:</strong> " +
            esc(lab.keyLineRu || "");
        }
      });
    }

    setBrush("green");
    renderAll();
  }

  w.__EGE_LISTENING_TFNS_HUNT__ = { mount: mount };
})(typeof window !== "undefined" ? window : this);
