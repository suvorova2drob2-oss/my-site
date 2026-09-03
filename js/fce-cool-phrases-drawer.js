/**
 * Generic Cool Words / Phrases FAB + right drawer (Unit 1 lifestyle & clothes).
 * window.FCE_COOL_PHRASES_DRAWER.mount(opts) · unmount(id)
 */
(function (W) {
  "use strict";

  var mounted = Object.create(null);

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function listHtml(spk) {
    var rows = (spk && spk.phrases) || [];
    if (!rows.length) return '<p class="fce-u1-ph-empty">No phrases.</p>';
    var html = '<ul class="fce-u1-ph-list">';
    var i;
    for (i = 0; i < rows.length; i++) {
      var p = rows[i];
      html +=
        '<li class="fce-u1-ph-item">' +
        '<p class="fce-u1-ph-en">' +
        esc(p.en) +
        "</p>";
      if (p.context) {
        html +=
          '<p class="fce-u1-ph-ctx"><span class="fce-u1-ph-k">In the text</span> ' +
          esc(p.context) +
          "</p>";
      }
      if (p.tip) {
        html +=
          '<p class="fce-u1-ph-tip"><span class="fce-u1-ph-k">Sense</span> ' +
          esc(p.tip) +
          "</p>";
      }
      html += "</li>";
    }
    html += "</ul>";
    return html;
  }

  function unmount(id) {
    var st = mounted[id];
    if (!st) return;
    document.body.classList.remove(st.bodyOpenClass);
    if (st.onKey) document.removeEventListener("keydown", st.onKey);
    if (st.mount && st.mount.parentNode) st.mount.parentNode.removeChild(st.mount);
    delete mounted[id];
  }

  function mount(opts) {
    opts = opts || {};
    var id = opts.id || "default";
    unmount(id);

    var speakers = opts.speakers || [];
    if (!speakers.length) return null;

    var spkIx = 0;
    var bodyOpenClass = opts.bodyOpenClass || "fce-u1-phrases--open";
    var spkLabel = opts.speakerSelectLabel || "Speaker";

    var optsHtml = "";
    var i;
    for (i = 0; i < speakers.length; i++) {
      optsHtml +=
        '<option value="' + i + '">' + esc(speakers[i].label) + "</option>";
    }

    var mountEl = document.createElement("div");
    mountEl.id = "fce-ph-mount-" + id;
    mountEl.innerHTML =
      '<button type="button" class="fce-u1-ph-fab" id="fce-ph-fab-' +
      id +
      '" aria-expanded="false" aria-controls="fce-ph-drawer-' +
      id +
      '" title="' +
      esc(opts.fabTitle || "Phrases") +
      '">' +
      '<span class="fce-u1-ph-fab-text">' +
      '<span class="fce-u1-ph-fab-line">' +
      esc(opts.fabLine1 || "Phrases") +
      "</span>" +
      '<span class="fce-u1-ph-fab-line fce-u1-ph-fab-sub">' +
      esc(opts.fabLine2 || "") +
      "</span></span></button>" +
      '<div class="fce-u1-ph-backdrop" id="fce-ph-backdrop-' +
      id +
      '" hidden></div>' +
      '<aside class="fce-u1-ph-drawer" id="fce-ph-drawer-' +
      id +
      '" aria-label="' +
      esc(opts.drawerAria || "Cool Words") +
      '">' +
      '<div class="fce-u1-ph-drawer-head"><span>' +
      esc(opts.drawerTitle || "Phrases") +
      '</span><button type="button" class="fce-u1-ph-drawer-x" id="fce-ph-close-' +
      id +
      '" aria-label="Close">×</button></div>' +
      '<div class="fce-u1-ph-drawer-body">' +
      '<label class="fce-u1-ph-spk-lab">' +
      esc(spkLabel) +
      ' <select id="fce-ph-spk-' +
      id +
      '" class="fce-u1-ph-spk">' +
      optsHtml +
      '</select></label><div id="fce-ph-list-' +
      id +
      '"></div></div></aside>';

    document.body.appendChild(mountEl);

    var listEl = document.getElementById("fce-ph-list-" + id);
    var sel = document.getElementById("fce-ph-spk-" + id);
    var fab = document.getElementById("fce-ph-fab-" + id);
    var backdrop = document.getElementById("fce-ph-backdrop-" + id);
    var drawer = document.getElementById("fce-ph-drawer-" + id);
    var closeBtn = document.getElementById("fce-ph-close-" + id);

    function refresh() {
      var spk = speakers[spkIx] || speakers[0];
      if (listEl) listEl.innerHTML = listHtml(spk);
      if (sel) sel.value = String(spkIx);
    }

    function open() {
      document.body.classList.add(bodyOpenClass);
      if (backdrop) backdrop.hidden = false;
      if (drawer) drawer.classList.add("is-visible");
      if (fab) fab.setAttribute("aria-expanded", "true");
    }

    function close() {
      document.body.classList.remove(bodyOpenClass);
      if (backdrop) backdrop.hidden = true;
      if (drawer) drawer.classList.remove("is-visible");
      if (fab) fab.setAttribute("aria-expanded", "false");
    }

    function toggle() {
      if (drawer && drawer.classList.contains("is-visible")) close();
      else open();
    }

    fab.addEventListener("click", toggle);
    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    sel.addEventListener("change", function (e) {
      spkIx = Number(e.target.value) || 0;
      refresh();
    });

    var onKey = function (e) {
      if (e.key === "Escape" && document.body.classList.contains(bodyOpenClass)) {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKey);

    refresh();

    mounted[id] = {
      mount: mountEl,
      bodyOpenClass: bodyOpenClass,
      close: close,
      onKey: onKey,
      setSpeakers: function (next) {
        speakers = next || [];
        spkIx = 0;
        refresh();
      },
      show: function () {
        mountEl.style.display = "";
      },
      hide: function () {
        close();
        mountEl.style.display = "none";
      }
    };

    return mounted[id];
  }

  function show(id) {
    var st = mounted[id];
    if (st) st.show();
  }

  function hide(id) {
    var st = mounted[id];
    if (st) st.hide();
  }

  function close(id) {
    var st = mounted[id];
    if (st) st.close();
  }

  W.FCE_COOL_PHRASES_DRAWER = {
    mount: mount,
    unmount: unmount,
    show: show,
    hide: hide,
    close: close
  };
})(typeof window !== "undefined" ? window : globalThis);
