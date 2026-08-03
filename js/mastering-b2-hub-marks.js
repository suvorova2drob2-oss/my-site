/**
 * Mastering B2 — paint ✓ / progress marks on hub cards & unit tiles.
 */
(function (W) {
  "use strict";

  if (W.__MB2_HUB_MARKS__) return;
  W.__MB2_HUB_MARKS__ = true;

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function waitProg(cb, tries) {
    tries = tries == null ? 40 : tries;
    if (W.MasteringB2Progress) return cb(W.MasteringB2Progress);
    if (tries <= 0) return;
    setTimeout(function () {
      waitProg(cb, tries - 1);
    }, 50);
  }

  function absPath(href) {
    try {
      return new URL(href, location.href).pathname;
    } catch (e) {
      return String(href || "").split("?")[0];
    }
  }

  function unitFromPage() {
    var m = (location.pathname || "").match(/unit(\d+)/i);
    return m ? parseInt(m[1], 10) : 0;
  }

  function ensureBadge(el) {
    var b = el.querySelector(".mb2-done-badge");
    if (b) return b;
    b = document.createElement("span");
    b.className = "mb2-done-badge";
    b.setAttribute("aria-hidden", "true");
    el.appendChild(b);
    return b;
  }

  function paint(el, status) {
    el.classList.remove("is-mb2-done", "is-mb2-progress", "is-mb2-idle");
    var badge = ensureBadge(el);
    var pct = status.percent;
    // Done only at 80–100% (same as MasteringB2Progress.PASS_THRESHOLD)
    var good =
      status.good === true ||
      (status.status === "passed" && pct != null && pct >= 80);
    if (good && pct != null && pct >= 80) {
      el.classList.add("is-mb2-done");
      badge.textContent = "✓";
      badge.title = "Done · " + pct + "%";
      return;
    }
    if (status.status === "in_progress" || (pct != null && pct > 0)) {
      el.classList.add("is-mb2-progress");
      badge.textContent = pct != null ? pct + "%" : "…";
      badge.title = pct != null && pct < 80 ? "In progress · need 80%+" : "In progress";
      return;
    }
    el.classList.add("is-mb2-idle");
    badge.textContent = "";
    badge.removeAttribute("title");
  }

  function cardMeta(Prog, el) {
    var unit = parseInt(el.getAttribute("data-mb2-unit") || "", 10) || unitFromPage();
    var skill = el.getAttribute("data-mb2-skill") || "";
    var ex = el.getAttribute("data-mb2-ex") || "";
    var hubKind = el.getAttribute("data-mb2-hub") || "";
    var href = el.getAttribute("href") || "";
    if ((!unit || !skill) && href) {
      var inferred = Prog.inferMetaFromPath(absPath(href));
      if (!unit) unit = inferred.unit;
      if (!skill) skill = inferred.skill;
      if (!ex) ex = inferred.exerciseId;
      if (!hubKind) hubKind = inferred.hubKind || "";
    }
    // Skill folders: unit1-vocabulary/index.html
    if (!hubKind && href) {
      var p = absPath(href).replace(/\/index\.html$/i, "");
      if (/unit\d+-(speaking|vocabulary|reading|listening|grammar)$/i.test(p)) hubKind = "skill";
      if (/\/Grammar\/unit\d+/i.test(p) && !/\.html$/i.test(href.replace(/\/index\.html$/i, "")))
        hubKind = "skill";
    }
    return { unit: unit, skill: skill, exerciseId: ex, hubKind: hubKind };
  }

  function paintHubs(Prog) {
    var nodes = document.querySelectorAll(
      "a.card-link, a.card, a.tile, a.task-card, a.unit"
    );
    nodes.forEach(function (el) {
      var href = el.getAttribute("href") || "";
      if (!href || href === "#" || /^javascript:/i.test(href)) return;
      var meta = cardMeta(Prog, el);
      if (!meta.unit) return;
      var status = Prog.resolveCardStatus(meta);
      paint(el, status);
    });
  }

  ready(function () {
    waitProg(function (Prog) {
      paintHubs(Prog);
    });
  });
})(window);
