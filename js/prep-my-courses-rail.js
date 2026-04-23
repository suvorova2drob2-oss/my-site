/**
 * Legacy stub: the "My courses" side rail was removed (heavy during name entry / login).
 * Exposes PrepMyCoursesRail.sync as a no-op so older cached HTML or callers do not throw.
 */
(function (g) {
    g.PrepMyCoursesRail = {
        sync: function () {}
    };
})(typeof window !== "undefined" ? window : this);
