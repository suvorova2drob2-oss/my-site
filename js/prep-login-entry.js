/**
 * CPE hub login (index.html) — name only, no password.
 * Loaded right after prep-course-profile + prep-sync-hub-track so Continue always works.
 */
(function (global) {
  function prepSaveDisplayName(n) {
    var name = String(n || "").trim().slice(0, 60);
    if (!name) return false;
    try {
      var raw = global.localStorage.getItem("english_mastery_perfect");
      var p = {};
      if (raw) {
        try {
          p = JSON.parse(raw);
        } catch (eParse) {
          p = {};
        }
      }
      if (!p || typeof p !== "object") p = {};
      p.name = name;
      global.localStorage.setItem("english_mastery_perfect", JSON.stringify(p));
    } catch (eBlob) {}
    try {
      global.localStorage.setItem("prep-player-display-name-v1", name);
    } catch (e1) {}
    try {
      global.localStorage.setItem("masteringB2PlayerName", name);
    } catch (e2) {}
    try {
      global.document.cookie =
        "prep_player_display=" +
        encodeURIComponent(name) +
        ";path=/;max-age=" +
        60 * 60 * 24 * 400 +
        ";SameSite=Lax";
    } catch (e3) {}
    return true;
  }

  function prepForceCpeProfile() {
    try {
      var p = global.prepCourseProfile;
      if (!p || typeof p.load !== "function" || typeof p.save !== "function") return;
      var cur = p.load();
      if (cur.courseTrack === "creator") return;
      p.save({
        courseTrack: "cpe",
        courseId: "cpe",
        wizardCompleted: cur.wizardCompleted !== false,
      });
      if (typeof p.applyDom === "function") p.applyDom();
    } catch (e) {}
  }

  function prepOpenHubAfterLogin() {
    prepForceCpeProfile();
    if (typeof global.showHub === "function") {
      global.showHub();
      return;
    }
    var login = global.document.getElementById("screen-login");
    var hub = global.document.getElementById("screen-hub");
    if (login) login.classList.remove("active");
    if (hub) hub.classList.add("active");
    try {
      if (typeof global.ensureHubBuilt === "function") global.ensureHubBuilt();
    } catch (e1) {}
    try {
      if (typeof global.refreshUserBar === "function") global.refreshUserBar();
    } catch (e2) {}
    try {
      if (typeof global.refreshHubMeta === "function") global.refreshHubMeta();
    } catch (e3) {}
  }

  function registerUser() {
    var ni = global.document.getElementById("name-input");
    var n = ni ? String(ni.value || "").trim() : "";
    if (!n) {
      global.alert("Please enter a name to continue.");
      if (ni) ni.focus();
      return;
    }
    if (!prepSaveDisplayName(n)) {
      global.alert(
        "Could not save to browser storage (private mode or blocked site data). Allow storage or use a normal window."
      );
      return;
    }
    try {
      if (typeof global.userData === "object" && global.userData) {
        global.userData.name = n.slice(0, 60);
      }
    } catch (eUd) {}
    try {
      if (typeof global.saveData === "function") global.saveData();
    } catch (eSave) {}
    prepOpenHubAfterLogin();
  }

  global.registerUser = registerUser;
  global.prepLoginEntrySaveName = prepSaveDisplayName;
  global.prepLoginEntryForceCpe = prepForceCpeProfile;

  function wireEnterOnLogin() {
    var ni = global.document.getElementById("name-input");
    if (!ni || ni.__prepLoginEnterWired) return;
    ni.__prepLoginEnterWired = true;
    ni.addEventListener("keydown", function (ev) {
      if (ev.key !== "Enter") return;
      ev.preventDefault();
      registerUser();
    });
  }

  if (global.document.readyState === "loading") {
    global.document.addEventListener("DOMContentLoaded", wireEnterOnLogin);
  } else {
    wireEnterOnLogin();
  }
})(typeof window !== "undefined" ? window : this);
