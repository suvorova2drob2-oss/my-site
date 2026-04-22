/**
 * Student-facing CPE/EGE/FCE: content tools off by default.
 * Teachers: open prep-content-admin/ and enable "Edit in CPE hub" for this browser session
 * (sessionStorage prep_content_tools_session), or use course-cms/ for folders & activities.
 */
(function (g) {
    if (g.__PREP_CONTENT_TOOLS_ENABLED__ === true) return;
    try {
        if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("prep_content_tools_session") === "1") {
            g.__PREP_CONTENT_TOOLS_ENABLED__ = true;
            return;
        }
    } catch (e) {}
    g.__PREP_CONTENT_TOOLS_ENABLED__ = false;
})(typeof window !== "undefined" ? window : this);
