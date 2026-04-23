/**
 * Student-facing CPE/EGE/FCE: content tools off by default.
 * Teachers: open prep-content-admin/ and enable "Edit in CPE hub" for this browser session
 * (sessionStorage prep_content_tools_session).
 *
 * Course CMS (course-cms/) is off by default: hub folder tiles open the in-app folder workspace.
 * To turn the CMS back on for this tab: open any page with ?prep_enable_cms=1 (sets sessionStorage prep_course_cms_session).
 */
(function (g) {
    if (g.__PREP_CONTENT_TOOLS_ENABLED__ === true) {
        /* allow pre-injection */
    } else {
        try {
            if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("prep_content_tools_session") === "1") {
                g.__PREP_CONTENT_TOOLS_ENABLED__ = true;
            } else {
                g.__PREP_CONTENT_TOOLS_ENABLED__ = false;
            }
        } catch (e) {
            g.__PREP_CONTENT_TOOLS_ENABLED__ = false;
        }
    }

    g.__PREP_COURSE_CMS_AVAILABLE__ = false;
    try {
        if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("prep_course_cms_session") === "1") {
            g.__PREP_COURSE_CMS_AVAILABLE__ = true;
        }
    } catch (e2) {}
    try {
        if (typeof location !== "undefined" && /(?:[?&])prep_enable_cms=1(?:&|$)/.test(location.search || "")) {
            if (typeof sessionStorage !== "undefined") {
                sessionStorage.setItem("prep_course_cms_session", "1");
            }
            g.__PREP_COURSE_CMS_AVAILABLE__ = true;
        }
    } catch (e3) {}

    g.prepCourseCmsAvailable = function () {
        try {
            return g.__PREP_COURSE_CMS_AVAILABLE__ === true;
        } catch (e4) {
            return false;
        }
    };
})(typeof window !== "undefined" ? window : this);
