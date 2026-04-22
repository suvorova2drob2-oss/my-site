/**
 * Preview / Edit pill for EGE & FCE hub pages. Uses same localStorage key as CPE hub.
 */
(function () {
  var HUB_VIEW_MODE_KEY = "prep-hub-view-mode-v1";

  function getHubViewMode() {
    try {
      return localStorage.getItem(HUB_VIEW_MODE_KEY) === "preview" ? "preview" : "edit";
    } catch (e) {
      return "edit";
    }
  }

  function setHubViewMode(mode) {
    try {
      localStorage.setItem(HUB_VIEW_MODE_KEY, mode === "preview" ? "preview" : "edit");
    } catch (e2) {}
    try {
      window.dispatchEvent(new CustomEvent("prep-hub-view-mode-changed"));
    } catch (e3) {}
    syncUiFromStorage();
    rewriteAllLinks();
  }

  function syncUiFromStorage() {
    var edit = getHubViewMode() === "edit";
    var prevBtn = document.getElementById("prep-track-vm-preview");
    var editBtn = document.getElementById("prep-track-vm-edit");
    if (prevBtn && editBtn) {
      prevBtn.classList.toggle("active", !edit);
      editBtn.classList.toggle("active", edit);
    }
  }

  function shouldSkipHref(raw) {
    if (!raw || raw.indexOf("javascript:") === 0 || raw.indexOf("mailto:") === 0 || raw.indexOf("tel:") === 0) {
      return true;
    }
    if (raw === "#") return true;
    if (raw.charAt(0) === "#" && raw.indexOf("/") === -1) return true;
    return false;
  }

  function isExternalHttp(raw) {
    if (!/^https?:\/\//i.test(raw)) return false;
    try {
      return new URL(raw).origin !== window.location.origin;
    } catch (e) {
      return true;
    }
  }

  function canonicalBase(href) {
    var hashIdx = href.indexOf("#");
    var hash = hashIdx >= 0 ? href.slice(hashIdx) : "";
    var wo = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
    var qi = wo.indexOf("?");
    var path = qi >= 0 ? wo.slice(0, qi) : wo;
    var sp = new URLSearchParams(qi >= 0 ? wo.slice(qi + 1) : "");
    sp.delete("prepView");
    sp.delete("admin");
    sp.delete("mode");
    var q = sp.toString();
    return path + (q ? "?" + q : "") + hash;
  }

  function augmentFromCanonical(canonical, editMode) {
    var hashIdx = canonical.indexOf("#");
    var hash = hashIdx >= 0 ? canonical.slice(hashIdx) : "";
    var wo = hashIdx >= 0 ? canonical.slice(0, hashIdx) : canonical;
    var qi = wo.indexOf("?");
    var path = qi >= 0 ? wo.slice(0, qi) : wo;
    var sp = new URLSearchParams(qi >= 0 ? wo.slice(qi + 1) : "");
    var lowerPath = path.toLowerCase();
    var isCms = lowerPath.indexOf("course-cms") >= 0;
    var isUoe = lowerPath.indexOf("use-of-english") >= 0;

    if (editMode) {
      sp.set("prepView", "edit");
      if (isCms) {
        sp.set("mode", "admin");
      } else {
        sp.delete("mode");
      }
      if (isUoe) {
        sp.set("admin", "1");
      } else if (!isCms) {
        sp.delete("admin");
      }
    } else {
      sp.delete("prepView");
      if (isCms) {
        sp.set("mode", "student");
      } else {
        sp.delete("mode");
      }
      sp.delete("admin");
    }

    var q = sp.toString();
    return path + (q ? "?" + q : "") + hash;
  }

  function rewriteAllLinks() {
    var editMode = getHubViewMode() === "edit";
    var list = document.querySelectorAll("a[href]");
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      if (a.closest("#prep-track-view-toggle-root")) continue;
      var raw = a.getAttribute("href");
      if (shouldSkipHref(raw) || isExternalHttp(raw)) continue;
      if (!a.getAttribute("data-prep-track-canonical")) {
        a.setAttribute("data-prep-track-canonical", canonicalBase(raw));
      }
      var base = a.getAttribute("data-prep-track-canonical");
      a.setAttribute("href", augmentFromCanonical(base, editMode));
    }
  }

  function injectOnce() {
    if (document.getElementById("prep-track-view-toggle-root")) {
      syncUiFromStorage();
      return;
    }
    var style = document.createElement("style");
    style.setAttribute("data-prep-track-view-toggle", "1");
    style.textContent =
      ".prep-track-view-vm{position:fixed;top:max(8px,env(safe-area-inset-top,0px));right:max(8px,env(safe-area-inset-right,0px));left:auto;z-index:9995;-webkit-tap-highlight-color:transparent}" +
      ".prep-track-view-vm .hub-view-toggle{display:inline-flex;align-items:center;gap:0;border-radius:999px;border:1px solid rgba(51,65,85,.85);overflow:hidden;background:#0f172a;box-shadow:0 4px 14px rgba(0,0,0,.35)}" +
      ".prep-track-view-vm .hub-vm-btn + .hub-vm-btn{border-left:1px solid rgba(51,65,85,.55)}" +
      ".prep-track-view-vm .hub-vm-btn{border:none;background:transparent;color:#94a3b8;font-weight:700;font-size:.78rem;padding:10px 16px;cursor:pointer;min-height:44px;font-family:inherit}" +
      ".prep-track-view-vm .hub-vm-btn.active{background:#2563eb;color:#fff;font-weight:800}";
    document.head.appendChild(style);

    var root = document.createElement("div");
    root.id = "prep-track-view-toggle-root";
    root.className = "prep-track-view-vm";
    root.innerHTML =
      '<div class="hub-view-toggle" title="Preview — как у студента; Edit — ссылки с prepView=edit и админкой где нужно">' +
      '<button type="button" class="hub-vm-btn" id="prep-track-vm-preview">Preview</button>' +
      '<button type="button" class="hub-vm-btn" id="prep-track-vm-edit">Edit</button>' +
      "</div>";
    document.body.appendChild(root);

    document.getElementById("prep-track-vm-preview").addEventListener("click", function () {
      setHubViewMode("preview");
    });
    document.getElementById("prep-track-vm-edit").addEventListener("click", function () {
      setHubViewMode("edit");
    });
    syncUiFromStorage();
  }

  function wireGlobalListeners() {
    if (window.__prepTrackViewToggleWired) return;
    window.__prepTrackViewToggleWired = true;
    window.addEventListener("prep-hub-view-mode-changed", function () {
      syncUiFromStorage();
      rewriteAllLinks();
    });
    window.addEventListener("storage", function (ev) {
      if (ev.key === HUB_VIEW_MODE_KEY) {
        syncUiFromStorage();
        rewriteAllLinks();
      }
    });
  }

  function boot() {
    injectOnce();
    wireGlobalListeners();
    rewriteAllLinks();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
