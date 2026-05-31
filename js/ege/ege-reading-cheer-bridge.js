/**
 * ЕГЭ Reading — подключение cheer-rail (§10 / §11 / MC).
 * window.__EGE_READING_CHEER__
 */
(function (w) {
  function baseState(extra) {
    var st = { context: "reading" };
    var k;
    extra = extra || {};
    for (k in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, k)) st[k] = extra[k];
    }
    return st;
  }

  function insertCheer(host, el, insertAfter) {
    if (!host || !el) return;
    var anchor = null;
    if (insertAfter) {
      anchor = host.querySelector(insertAfter);
    }
    if (!anchor) {
      anchor = host.querySelector(".ege-reading-stats-bar");
    }
    if (!anchor) {
      anchor = host.querySelector(".ege-mcr-toolbar");
    }
    if (!anchor) {
      anchor = host.querySelector(".ege-gt-toolbar");
    }
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(el, anchor.nextSibling);
    } else {
      host.insertBefore(el, host.firstChild);
    }
  }

  function mount(host, opts) {
    opts = opts || {};
    var ch = w.__EGE_EXAM_CHEER__;
    if (!ch || !host) return null;
    var old = host.querySelector("#ege-gx-cheer");
    if (old) old.remove();
    var el = document.createElement("aside");
    el.className = "ege-gx-cheer";
    el.id = "ege-gx-cheer";
    el.setAttribute("aria-live", "polite");
    el.setAttribute("aria-label", "Подбадривание");
    el.innerHTML =
      '<div class="ege-gx-cheer-inner">' +
      '<span class="ege-gx-cheer-spark" aria-hidden="true">✦</span>' +
      '<p class="ege-gx-cheer-text" id="ege-gx-cheer-text"></p>' +
      '<span class="ege-gx-cheer-tag" id="ege-gx-cheer-tag"></span>' +
      "</div>";
    insertCheer(host, el, opts.insertAfter);
    ch.update(
      el,
      baseState({ phase: "welcome", filled: 0, total: opts.total || 0 }),
      { force: true }
    );
    return el;
  }

  function refresh(el, opts, force) {
    var ch = w.__EGE_EXAM_CHEER__;
    if (!ch || !el) return;
    ch.update(el, baseState(opts || {}), { force: !!force });
  }

  w.__EGE_READING_CHEER__ = { mount: mount, refresh: refresh };
})(typeof window !== "undefined" ? window : this);
