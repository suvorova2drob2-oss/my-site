/**
 * Unit 1 Reading Part 7 — Phrases FAB + drawer (Lifestyle Cool Words).
 * Depends on: js/unit1-lifestyle-lexis.js → FCE_U1_LIFESTYLE_LEXIS
 */
(function () {
  "use strict";
  var API = window.FCE_U1_LIFESTYLE_LEXIS;
  if (!API || typeof API.drawerSpeakers !== "function") return;

  var speakers = API.drawerSpeakers();
  var spkIx = 0;
  var bodyOpenClass = "fce-u1-phrases--open";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function listHtml(spk) {
    var rows = (spk && spk.phrases) || [];
    if (!rows.length) return "<p class=\"fce-u1-ph-empty\">No phrases.</p>";
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

  function refresh() {
    var listEl = document.getElementById("fce-u1-ph-list");
    var sel = document.getElementById("fce-u1-ph-spk");
    var spk = speakers[spkIx] || speakers[0];
    if (listEl) listEl.innerHTML = listHtml(spk);
    if (sel) sel.value = String(spkIx);
  }

  function open() {
    document.body.classList.add(bodyOpenClass);
    var b = document.getElementById("fce-u1-ph-backdrop");
    var d = document.getElementById("fce-u1-ph-drawer");
    var f = document.getElementById("fce-u1-ph-fab");
    if (b) b.hidden = false;
    if (d) d.classList.add("is-visible");
    if (f) f.setAttribute("aria-expanded", "true");
  }

  function close() {
    document.body.classList.remove(bodyOpenClass);
    var b = document.getElementById("fce-u1-ph-backdrop");
    var d = document.getElementById("fce-u1-ph-drawer");
    var f = document.getElementById("fce-u1-ph-fab");
    if (b) b.hidden = true;
    if (d) d.classList.remove("is-visible");
    if (f) f.setAttribute("aria-expanded", "false");
  }

  function toggle() {
    var d = document.getElementById("fce-u1-ph-drawer");
    if (d && d.classList.contains("is-visible")) close();
    else open();
  }

  var opts = "";
  var i;
  for (i = 0; i < speakers.length; i++) {
    opts +=
      '<option value="' +
      i +
      '">' +
      esc(speakers[i].label) +
      "</option>";
  }

  var mount = document.createElement("div");
  mount.id = "fce-u1-ph-mount";
  mount.innerHTML =
    '<button type="button" class="fce-u1-ph-fab" id="fce-u1-ph-fab" aria-expanded="false" aria-controls="fce-u1-ph-drawer" title="Lifestyle phrases">' +
    '<span class="fce-u1-ph-fab-text">' +
    '<span class="fce-u1-ph-fab-line">Phrases</span>' +
    '<span class="fce-u1-ph-fab-line fce-u1-ph-fab-sub">Lifestyle</span>' +
    "</span></button>" +
    '<div class="fce-u1-ph-backdrop" id="fce-u1-ph-backdrop" hidden></div>' +
    '<aside class="fce-u1-ph-drawer" id="fce-u1-ph-drawer" aria-label="Lifestyle Cool Words">' +
    '<div class="fce-u1-ph-drawer-head"><span>Phrases · Lifestyle</span>' +
    '<button type="button" class="fce-u1-ph-drawer-x" id="fce-u1-ph-close" aria-label="Close">×</button></div>' +
    '<div class="fce-u1-ph-drawer-body">' +
    '<label class="fce-u1-ph-spk-lab">Person ' +
    '<select id="fce-u1-ph-spk" class="fce-u1-ph-spk">' +
    opts +
    "</select></label>" +
    '<div id="fce-u1-ph-list"></div></div></aside>';

  document.body.appendChild(mount);
  refresh();

  document.getElementById("fce-u1-ph-fab").addEventListener("click", toggle);
  document.getElementById("fce-u1-ph-close").addEventListener("click", close);
  document.getElementById("fce-u1-ph-backdrop").addEventListener("click", close);
  document.getElementById("fce-u1-ph-spk").addEventListener("change", function (e) {
    spkIx = Number(e.target.value) || 0;
    refresh();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains(bodyOpenClass)) {
      e.preventDefault();
      close();
    }
  });
})();
