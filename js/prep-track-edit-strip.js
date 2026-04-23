/**
 * EGE / FCE (+ FCE unit pages): "Add to this level" strip (folder + activities by skill), Edit mode only.
 * Activity skills: listening, reading, use-of-english (part1-mc-cloze player), speaking.
 * Uses PrepSiteContent with prepPageKey prep-track:<leaf> or linkedUnit for unitN.html.
 */
(function () {
  if (window.__PREP_CONTENT_TOOLS_ENABLED__ !== true) {
    try {
      if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("prep_content_tools_session") === "1") {
        window.__PREP_CONTENT_TOOLS_ENABLED__ = true;
      }
    } catch (e0) {}
  }
  if (window.__PREP_CONTENT_TOOLS_ENABLED__ !== true) return;

  function prepCourseCmsSessionOn() {
    try {
      if (typeof window.prepCourseCmsAvailable === "function") return window.prepCourseCmsAvailable();
      return typeof sessionStorage !== "undefined" && sessionStorage.getItem("prep_course_cms_session") === "1";
    } catch (eCms) {
      return false;
    }
  }

  var HUB_VM_KEY = "prep-hub-view-mode-v1";
  var HOST_ID = "prep-track-edit-host";
  var SKILL_LABELS = {
    listening: "Listening",
    reading: "Reading",
    "use-of-english": "Use of English",
    speaking: "Speaking"
  };

  function getViewMode() {
    try {
      return localStorage.getItem(HUB_VM_KEY) === "preview" ? "preview" : "edit";
    } catch (e) {
      return "edit";
    }
  }

  function pageLeaf() {
    var p = String(location.pathname || "").replace(/\\/g, "/");
    var leaf = (p.split("/").pop() || "").toLowerCase();
    if (!leaf || leaf.indexOf(".") === -1) return "index.html";
    return leaf;
  }

  function labelForLeaf(leaf) {
    if (leaf === "ege.html") return "ЕГЭ hub";
    if (leaf === "fce.html") return "FCE hub";
    return leaf.replace(/\.html$/i, "");
  }

  function detectContext(doc) {
    var o = doc.documentElement.getAttribute("data-prep-track-page");
    var leaf = String(o || pageLeaf()).toLowerCase().trim();
    if (leaf && !/\.html$/i.test(leaf)) leaf += ".html";
    var um = leaf.match(/^unit(\d+)\.html$/i);
    if (um) {
      var n = Number(um[1]);
      if (n >= 1)
        return { kind: "fce-unit", unitNum: n, prepPageKey: null, label: "Unit " + n, leaf: leaf };
    }
    if (/^(ege|fce)\.html$/i.test(leaf) || /^ege-/i.test(leaf)) {
      return {
        kind: "track-page",
        prepPageKey: "prep-track:" + leaf,
        label: labelForLeaf(leaf),
        leaf: leaf
      };
    }
    return null;
  }

  function isActivityHubKey(pk) {
    return /^u\d+-activity-/i.test(String(pk || ""));
  }

  function folderMatchesCtx(f, ctx) {
    if (!f || f.parentFolderId) return false;
    if (isActivityHubKey(f.prepPageKey)) return false;
    if (ctx.kind === "fce-unit") {
      return Number(f.linkedUnit) === ctx.unitNum;
    }
    if (ctx.kind === "track-page") {
      return String(f.prepPageKey || "") === ctx.prepPageKey;
    }
    return false;
  }

  function collectFolders(ctx) {
    if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load) return [];
    var all = PrepSiteContent.load().folders || [];
    return all.filter(function (x) {
      return folderMatchesCtx(x, ctx);
    });
  }

  function cmsBackParams() {
    return {
      back: encodeURIComponent(location.pathname + (location.search || "")),
      label: encodeURIComponent(document.title || "Back")
    };
  }

  function openFolderInCms(f) {
    var p = cmsBackParams();
    if (!prepCourseCmsSessionOn()) {
      location.href =
        "index.html?prep_stay=1&prep_open_folder=" + encodeURIComponent(f.id);
      return;
    }
    var mode = getViewMode() === "preview" ? "student" : "admin";
    location.href =
      "course-cms/index.html?mode=" +
      mode +
      "&folder=" +
      encodeURIComponent(f.id) +
      "&back=" +
      p.back +
      "&backLabel=" +
      p.label;
  }

  function activityPlayable(f) {
    return !!(f && f.type === "activity" && f.uoeEngine === "part1-mc-cloze");
  }

  function activitySkillKey(f) {
    if (!f || f.type !== "activity") return "";
    if (f.prepActivitySkill) return String(f.prepActivitySkill);
    if (f.uoeEngine === "part1-mc-cloze") return "use-of-english";
    return "";
  }

  function openActivity(f) {
    if (!activityPlayable(f)) {
      var lab = SKILL_LABELS[activitySkillKey(f)] || activitySkillKey(f) || "Activity";
      try {
        window.alert(lab + ": player is not wired yet. (Use of English — Multiple choice cloze is ready.)");
      } catch (eA) {}
      return;
    }
    var p = cmsBackParams();
    var q =
      "?context=" +
      encodeURIComponent("prep-hub-" + f.id) +
      "&back=" +
      p.back +
      "&backLabel=" +
      p.label;
    if (getViewMode() === "edit") q += "&prepView=edit&admin=1";
    var actTitle = (f && (f.title || f.name || f.label || "")).trim();
    if (actTitle) q += "&activityTitle=" + encodeURIComponent(actTitle);
    location.href = "use-of-english/part1-mc-cloze/index.html" + q;
  }

  function genFoldId() {
    return "fold_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
  }

  function genActId() {
    return "act_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
  }

  function injectStyles() {
    if (document.getElementById("prep-track-edit-strip-styles")) return;
    var st = document.createElement("style");
    st.id = "prep-track-edit-strip-styles";
    st.textContent =
      "#" +
      HOST_ID +
      "{margin:0 0 20px}" +
      "#" +
      HOST_ID +
      ".is-hidden{display:none!important}" +
      ".prep-track-add-section.is-hidden{display:none!important}" +
      ".prep-track-add-hint{font-size:0.72rem;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin:0 0 10px}" +
      ".prep-track-add-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px}" +
      ".prep-track-add-card{border-radius:14px;border:1px solid rgba(51,65,85,.85);background:rgba(15,23,42,.65);padding:14px 16px;cursor:pointer;transition:border-color .15s,box-shadow .15s}" +
      ".prep-track-add-card:hover{border-color:rgba(56,189,248,.45);box-shadow:0 0 0 1px rgba(56,189,248,.1)}" +
      ".prep-track-add-card strong{display:block;font-size:1rem;color:#f1f5f9;margin-bottom:6px}" +
      ".prep-track-add-card .prep-track-add-desc{font-size:12px;color:#94a3b8;line-height:1.45;margin-bottom:6px}" +
      ".prep-track-add-card .prep-track-add-go{font-size:11px;color:#38bdf8;font-weight:700}" +
      ".prep-track-dyn-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-top:4px}" +
      ".prep-track-dyn-tile{border-radius:12px;border:1px solid rgba(51,65,85,.75);background:rgba(30,41,59,.55);padding:12px 14px;cursor:pointer;text-align:left;color:inherit;font:inherit}" +
      ".prep-track-dyn-tile:hover{border-color:rgba(56,189,248,.4)}" +
      ".prep-track-dyn-tile .t{font-weight:800;font-size:0.95rem;color:#e8f0ff;margin-bottom:4px}" +
      ".prep-track-dyn-tile .s{font-size:12px;color:#94a3b8;line-height:1.35}" +
      ".prep-track-modal{position:fixed;inset:0;z-index:10020;display:flex;align-items:center;justify-content:center;padding:16px}" +
      ".prep-track-modal[hidden]{display:none!important}" +
      ".prep-track-modal-back{position:absolute;inset:0;background:rgba(0,0,0,.55)}" +
      ".prep-track-modal-card{position:relative;z-index:1;width:min(420px,100%);background:#0f172a;border:1px solid #334155;border-radius:14px;padding:18px;box-shadow:0 16px 40px rgba(0,0,0,.45);color:#e2e8f0}" +
      ".prep-track-modal-card h3{margin:0 0 14px;font-size:1.05rem}" +
      ".prep-track-fld-label{display:block;font-size:11px;font-weight:700;color:#94a3b8;margin:10px 0 5px}" +
      ".prep-track-fld{width:100%;box-sizing:border-box;border-radius:8px;border:1px solid #334155;background:#1e293b;color:#f1f5f9;padding:10px 11px;font:inherit;font-size:14px}" +
      ".prep-track-modal-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:16px}" +
      ".prep-track-btn{border:none;border-radius:8px;padding:10px 16px;font:inherit;font-weight:700;cursor:pointer}" +
      ".prep-track-btn--ghost{background:#1e293b;color:#e2e8f0;border:1px solid #334155}" +
      ".prep-track-btn--primary{background:#2563eb;color:#fff}";
    document.head.appendChild(st);
  }

  function ensureModals(ctx) {
    if (document.getElementById("prep-track-modal-folder")) return;
    var wrap = document.createElement("div");
    wrap.innerHTML =
      '<div id="prep-track-modal-folder" class="prep-track-modal" hidden>' +
      '<div class="prep-track-modal-back" data-close="1"></div>' +
      '<div class="prep-track-modal-card" role="dialog" aria-modal="true">' +
      "<h3>New folder</h3>" +
      '<label class="prep-track-fld-label" for="prep-track-ff-title">Title *</label>' +
      '<input id="prep-track-ff-title" class="prep-track-fld" autocomplete="off" />' +
      '<label class="prep-track-fld-label" for="prep-track-ff-sub">Subtitle</label>' +
      '<input id="prep-track-ff-sub" class="prep-track-fld" autocomplete="off" />' +
      '<label class="prep-track-fld-label" for="prep-track-ff-goal">Description</label>' +
      '<textarea id="prep-track-ff-goal" class="prep-track-fld" rows="3"></textarea>' +
      '<p id="prep-track-ff-err" class="prep-track-add-desc" style="color:#f87171;margin-top:8px" hidden></p>' +
      '<div class="prep-track-modal-actions">' +
      '<button type="button" class="prep-track-btn prep-track-btn--ghost" data-close="1">Cancel</button>' +
      '<button type="button" class="prep-track-btn prep-track-btn--primary" id="prep-track-ff-save">Save</button>' +
      "</div></div></div>" +
      '<div id="prep-track-modal-act" class="prep-track-modal" hidden>' +
      '<div class="prep-track-modal-back" data-close="1"></div>' +
      '<div class="prep-track-modal-card" role="dialog" aria-modal="true">' +
      "<h3>Add activity</h3>" +
      '<label class="prep-track-fld-label" for="prep-track-at-skill">Skill</label>' +
      '<select id="prep-track-at-skill" class="prep-track-fld">' +
      '<option value="listening">Listening</option>' +
      '<option value="reading">Reading</option>' +
      '<option value="use-of-english" selected>Use of English — Multiple choice cloze (Part 1)</option>' +
      '<option value="speaking">Speaking</option>' +
      "</select>" +
      '<label class="prep-track-fld-label" for="prep-track-at-title">Title *</label>' +
      '<input id="prep-track-at-title" class="prep-track-fld" autocomplete="off" />' +
      '<p id="prep-track-at-err" class="prep-track-add-desc" style="color:#f87171;margin-top:8px" hidden></p>' +
      '<div class="prep-track-modal-actions">' +
      '<button type="button" class="prep-track-btn prep-track-btn--ghost" data-close="1">Cancel</button>' +
      '<button type="button" class="prep-track-btn prep-track-btn--primary" id="prep-track-at-save">Save</button>' +
      "</div></div></div>";
    while (wrap.firstChild) {
      document.body.appendChild(wrap.firstChild);
    }

    function wireClose(root) {
      root.addEventListener("click", function (ev) {
        if (ev.target.getAttribute("data-close") === "1") root.hidden = true;
      });
    }
    wireClose(document.getElementById("prep-track-modal-folder"));
    wireClose(document.getElementById("prep-track-modal-act"));

    document.getElementById("prep-track-ff-save").addEventListener("click", function () {
      saveNewFolder(ctx);
    });
    document.getElementById("prep-track-at-save").addEventListener("click", function () {
      saveNewActivity(ctx);
    });
  }

  function showFolderModal() {
    var m = document.getElementById("prep-track-modal-folder");
    var err = document.getElementById("prep-track-ff-err");
    var t = document.getElementById("prep-track-ff-title");
    if (err) {
      err.hidden = true;
      err.textContent = "";
    }
    if (t) t.value = "";
    var s = document.getElementById("prep-track-ff-sub");
    var g = document.getElementById("prep-track-ff-goal");
    if (s) s.value = "";
    if (g) g.value = "";
    m.hidden = false;
    if (t) t.focus();
  }

  function showActModal() {
    var m = document.getElementById("prep-track-modal-act");
    var err = document.getElementById("prep-track-at-err");
    var t = document.getElementById("prep-track-at-title");
    if (err) {
      err.hidden = true;
      err.textContent = "";
    }
    if (t) t.value = "";
    var sk = document.getElementById("prep-track-at-skill");
    if (sk) sk.value = "use-of-english";
    m.hidden = false;
    if (t) t.focus();
  }

  function saveNewFolder(ctx) {
    var err = document.getElementById("prep-track-ff-err");
    var title = (document.getElementById("prep-track-ff-title") || {}).value || "";
    title = String(title).trim();
    if (!title) {
      if (err) {
        err.textContent = "Enter a title.";
        err.hidden = false;
      }
      return;
    }
    if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
    var d = PrepSiteContent.load();
    d.folders = d.folders || [];
    var rec = {
      id: genFoldId(),
      type: "folder",
      title: title,
      subtitle: String((document.getElementById("prep-track-ff-sub") || {}).value || "").trim(),
      goal: String((document.getElementById("prep-track-ff-goal") || {}).value || "").trim(),
      sections: [],
      tasks: []
    };
    if (ctx.kind === "fce-unit") {
      rec.linkedUnit = ctx.unitNum;
    } else {
      rec.prepPageKey = ctx.prepPageKey;
      rec.linkedUnit = -1;
    }
    d.folders.push(rec);
    PrepSiteContent.save(d);
    document.getElementById("prep-track-modal-folder").hidden = true;
    renderAll(ctx);
  }

  function saveNewActivity(ctx) {
    var err = document.getElementById("prep-track-at-err");
    var title = (document.getElementById("prep-track-at-title") || {}).value || "";
    title = String(title).trim();
    if (!title) {
      if (err) {
        err.textContent = "Enter a title.";
        err.hidden = false;
      }
      return;
    }
    if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
    var skillEl = document.getElementById("prep-track-at-skill");
    var skill = skillEl && skillEl.value ? String(skillEl.value) : "use-of-english";
    if (!SKILL_LABELS[skill]) skill = "use-of-english";

    var d = PrepSiteContent.load();
    d.folders = d.folders || [];
    var rec = {
      id: genActId(),
      type: "activity",
      prepActivitySkill: skill,
      title: title,
      sections: [],
      tasks: []
    };
    if (skill === "use-of-english") {
      rec.uoeEngine = "part1-mc-cloze";
      rec.subtitle = "Multiple choice cloze (Part 1)";
    } else {
      rec.subtitle = SKILL_LABELS[skill] + " — player coming soon";
    }
    if (ctx.kind === "fce-unit") {
      rec.linkedUnit = ctx.unitNum;
    } else {
      rec.prepPageKey = ctx.prepPageKey;
      rec.linkedUnit = -1;
    }
    d.folders.push(rec);
    PrepSiteContent.save(d);
    document.getElementById("prep-track-modal-act").hidden = true;
    renderAll(ctx);
  }

  function headSub(f) {
    if (f.type === "activity") {
      var sk = activitySkillKey(f);
      var playable = activityPlayable(f);
      var head = (f.title || "").trim() || SKILL_LABELS[sk] || "Activity";
      var sub = (f.subtitle || "").trim();
      if (!sub && sk) sub = playable ? "Multiple choice cloze (Part 1)" : SKILL_LABELS[sk] + " — soon";
      return { head: head, sub: sub, isAct: true, playable: playable };
    }
    var t = (f.title || "").trim();
    var st = (f.subtitle || "").trim();
    return { head: t || st || "Course", sub: t && st ? st : "", isAct: false, playable: false };
  }

  function renderDynamic(ctx, host) {
    var gridId = "prep-track-dyn-folders";
    var grid = host.querySelector("#" + gridId);
    if (!grid) {
      grid = document.createElement("div");
      grid.id = gridId;
      grid.className = "prep-track-dyn-grid";
      host.appendChild(grid);
    }
    grid.innerHTML = "";
    var list = collectFolders(ctx);
    for (var i = 0; i < list.length; i++) {
      (function (f) {
        var L = headSub(f);
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "prep-track-dyn-tile";
        btn.innerHTML =
          '<div class="t"></div><div class="s"></div>';
        btn.querySelector(".t").textContent = L.head;
        btn.querySelector(".s").textContent =
          L.sub || (L.isAct ? (L.playable ? "Multiple choice cloze (Part 1)" : "Player coming soon") : "Open in CMS →");
        btn.addEventListener("click", function () {
          if (L.isAct) openActivity(f);
          else openFolderInCms(f);
        });
        grid.appendChild(btn);
      })(list[i]);
    }
  }

  function renderAll(ctx) {
    var host = document.getElementById(HOST_ID);
    if (!host) return;
    var edit = getViewMode() === "edit";
    var addSec = host.querySelector(".prep-track-add-section");
    if (addSec) addSec.classList.toggle("is-hidden", !edit);
    renderDynamic(ctx, host);
    var hasTiles = collectFolders(ctx).length > 0;
    if (!edit && !hasTiles) host.classList.add("is-hidden");
    else host.classList.remove("is-hidden");
  }

  function buildHost(ctx) {
    injectStyles();
    var host = document.createElement("div");
    host.id = HOST_ID;

    var addSection = document.createElement("div");
    addSection.className = "prep-track-add-section";

    var hint = document.createElement("p");
    hint.className = "prep-track-add-hint";
    hint.textContent = "Add to this level (Edit mode)";
    addSection.appendChild(hint);

    var grid = document.createElement("div");
    grid.className = "prep-track-add-grid";

    var folderDesc =
      "Course folder in CMS, shown only under " + ctx.label + ".";
    var actDesc =
      "Listening, Reading, Use of English (multiple choice cloze), Speaking — choose a skill; UoE player is live, others next.";

    function card(title, desc, onActivate) {
      var c = document.createElement("div");
      c.className = "prep-track-add-card";
      c.setAttribute("role", "button");
      c.tabIndex = 0;
      c.innerHTML =
        "<strong>" +
        title +
        '</strong><div class="prep-track-add-desc">' +
        desc +
        '</div><div class="prep-track-add-go">Create →</div>';
      c.addEventListener("click", onActivate);
      c.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") onActivate();
      });
      return c;
    }

    grid.appendChild(card("+ Folder", folderDesc, showFolderModal));
    grid.appendChild(card("+ Activity", actDesc, showActModal));
    addSection.appendChild(grid);
    host.appendChild(addSection);

    return host;
  }

  function insertHost(host) {
    var main = document.querySelector("main.app, main.page, main");
    if (main) {
      var hdr = main.querySelector("header");
      if (hdr && hdr.nextSibling) main.insertBefore(host, hdr.nextSibling);
      else if (hdr) main.appendChild(host);
      else main.insertBefore(host, main.firstChild);
      return;
    }
    var shell = document.querySelector(".shell");
    if (shell) {
      var stack = shell.querySelector(".stack");
      if (stack) shell.insertBefore(host, stack);
      else shell.insertBefore(host, shell.firstChild);
      return;
    }
    document.body.insertBefore(host, document.body.firstChild);
  }

  function boot() {
    if (window.__prepTrackEditStripBooted) return;
    var ctx = detectContext(document);
    if (!ctx) return;
    window.__prepTrackEditStripBooted = true;

    injectStyles();
    ensureModals(ctx);
    if (document.getElementById(HOST_ID)) return;
    var host = buildHost(ctx);
    insertHost(host);

    renderAll(ctx);

    window.addEventListener("prep-hub-view-mode-changed", function () {
      renderAll(ctx);
    });
    window.addEventListener("storage", function (ev) {
      if (ev.key === HUB_VM_KEY) renderAll(ctx);
    });
    if (typeof PrepSiteContent !== "undefined" && PrepSiteContent.onSync) {
      PrepSiteContent.onSync(function () {
        renderAll(ctx);
      });
    }

    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape") return;
      var a = document.getElementById("prep-track-modal-folder");
      var b = document.getElementById("prep-track-modal-act");
      if (a && !a.hidden) a.hidden = true;
      if (b && !b.hidden) b.hidden = true;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
