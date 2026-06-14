/**
 * Sequential classic-script loader for lazy Prep bundles (deduped promises).
 */
(function (W) {
    "use strict";

    var loaded = Object.create(null);
    var loading = Object.create(null);

    W.prepLoadScript = function (src) {
        var url = String(src || "").trim();
        if (!url) return Promise.resolve();
        if (loaded[url]) return Promise.resolve();
        if (loading[url]) return loading[url];
        loading[url] = new Promise(function (resolve, reject) {
            var s = document.createElement("script");
            s.src = url;
            s.async = false;
            s.onload = function () {
                loaded[url] = true;
                resolve();
            };
            s.onerror = function () {
                reject(new Error("prepLoadScript failed: " + url));
            };
            document.head.appendChild(s);
        });
        return loading[url];
    };

    W.prepLoadScriptChain = function (list) {
        var chain = Array.isArray(list) ? list : [];
        var p = Promise.resolve();
        for (var i = 0; i < chain.length; i++) {
            (function (src) {
                p = p.then(function () {
                    return W.prepLoadScript(src);
                });
            })(chain[i]);
        }
        return p;
    };
})(typeof window !== "undefined" ? window : globalThis);
