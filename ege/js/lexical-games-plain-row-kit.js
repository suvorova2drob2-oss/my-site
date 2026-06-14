/**
 * Общая сборка строк «hint + ans», якорящихся в plain-тексте (reading / listening script / статья).
 * Используется из index.html вместе с u9FallFindAnsSpan + u9FallBuildGapLine.
 *
 * Новый материал того же типа: добавь запись в lexical-games-source-manifest.js и вызови эти методы из сборщика пула / Word Bank.
 */
(function (W) {
    "use strict";

    /**
     * @param {object} opts
     * @param {string} opts.plain
     * @param {Array<object>} opts.rows
     * @param {string} opts.speaker
     * @param {function(string,string):object|null} opts.findAnsSpan
     * @param {function(string,string,string):string} opts.buildGapLine
     * @param {string} [opts.hintKey]
     * @param {string} [opts.ansKey]
     */
    function hintAnsRowsToFallItems(opts) {
        var plain = opts.plain;
        var rows = opts.rows || [];
        var speaker = opts.speaker || "";
        var findAnsSpan = opts.findAnsSpan;
        var buildGapLine = opts.buildGapLine;
        var hintKey = opts.hintKey || "hint";
        var ansKey = opts.ansKey || "ans";
        if (!plain || typeof findAnsSpan !== "function" || typeof buildGapLine !== "function" || !rows.length) {
            return [];
        }
        var out = [];
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (!row || row[ansKey] == null || row[ansKey] === "") continue;
            var anchor = String(row[ansKey]).trim();
            var headword =
                row.headword != null && String(row.headword).trim() !== ""
                    ? String(row.headword).trim()
                    : "";
            var learn = headword || anchor;
            if (!anchor || findAnsSpan(plain, anchor) == null) continue;
            var hint = String(row[hintKey] != null ? row[hintKey] : "").trim();
            out.push({
                syn: hint,
                flipDef: hint,
                ans: learn,
                anchor: anchor !== learn ? anchor : "",
                speaker: speaker,
                fallText: buildGapLine(plain, anchor, speaker)
            });
        }
        return out;
    }

    /**
     * Те же строки для Word Bank (id стабильны по индексу и phrase).
     * @param {object} opts
     * @param {string} opts.plain
     * @param {Array<object>} opts.rows
     * @param {string} opts.speaker
     * @param {string} opts.idPrefix
     * @param {function(string,string):object|null} opts.findAnsSpan
     * @param {string} [opts.hintKey]
     * @param {string} [opts.ansKey]
     */
    function hintAnsRowsToWbItems(opts) {
        var plain = opts.plain;
        var rows = opts.rows || [];
        var speaker = opts.speaker || "";
        var idPrefix = opts.idPrefix || "lexwb";
        var findAnsSpan = opts.findAnsSpan;
        var hintKey = opts.hintKey || "hint";
        var ansKey = opts.ansKey || "ans";
        if (!plain || typeof findAnsSpan !== "function" || !rows.length) {
            return [];
        }
        var out = [];
        for (var wi = 0; wi < rows.length; wi++) {
            var row = rows[wi];
            if (!row || row[ansKey] == null || row[ansKey] === "") continue;
            var anchor = String(row[ansKey]).trim();
            var headword =
                row.headword != null && String(row.headword).trim() !== ""
                    ? String(row.headword).trim()
                    : "";
            var phrase = headword || anchor;
            if (!anchor || findAnsSpan(plain, anchor) == null) continue;
            out.push({
                id: idPrefix + "::" + wi + "::" + phrase,
                phrase: phrase,
                hint: String(row[hintKey] != null ? row[hintKey] : "").trim(),
                speaker: speaker,
                group: row.group ? String(row.group).trim() : "",
                anchor: anchor !== phrase ? anchor : ""
            });
        }
        return out;
    }

    W.LexicalGamesPlainRowKit = {
        hintAnsRowsToFallItems: hintAnsRowsToFallItems,
        hintAnsRowsToWbItems: hintAnsRowsToWbItems
    };
})(typeof window !== "undefined" ? window : globalThis);
