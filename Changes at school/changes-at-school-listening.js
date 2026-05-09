/**
 * Listening Part 3 — multiple matching check (Speakers 1–5 ↔ A–H).
 * Порядок сравнения ключа: поле на странице → U3_CHANGES_AT_SCHOOL_KEY (key.js) → встроенный ключ SB.
 */
(function () {
  /** Встроенный ключ Track 3.2 (Student's Book); переопределяется полем или key.js. */
  var BUILTIN_KEY = "EDHCA";

  var selects = [
    document.getElementById("s1"),
    document.getElementById("s2"),
    document.getElementById("s3"),
    document.getElementById("s4"),
    document.getElementById("s5")
  ];

  function normKey(k) {
    return String(k || "")
      .replace(/\s+/g, "")
      .toUpperCase()
      .replace(/[^A-H]/g, "");
  }

  function parseKey(str) {
    var s = normKey(str);
    if (s.length !== 5) return null;
    return s.split("");
  }

  function check() {
    var inlineEl = document.getElementById("keyInline");
    var parsed =
      parseKey(inlineEl && inlineEl.value ? inlineEl.value : "") ||
      parseKey(window.U3_CHANGES_AT_SCHOOL_KEY || "") ||
      parseKey(BUILTIN_KEY);
    var note = document.getElementById("keyNote");
    var scoreLine = document.getElementById("scoreLine");

    selects.forEach(function (el) {
      if (el) el.classList.remove("ok", "bad", "pending", "match", "dup-letter");
    });

    if (!parsed) {
      var dupW0 = document.getElementById("dupWarn");
      if (dupW0) dupW0.hidden = true;
      if (note) note.hidden = false;
      if (scoreLine) scoreLine.hidden = true;
      alert("Введите в свёрнутом блоке ровно пять букв A–H или проверьте key.js.");
      return;
    }

    var vals = selects.map(function (el) { return el ? el.value || "" : ""; });
    if (vals.some(function (v) { return !v; })) {
      var dw = document.getElementById("dupWarn");
      if (dw) dw.hidden = true;
      if (scoreLine) scoreLine.hidden = true;
      alert("Выберите букву A–H для каждого спикера.");
      return;
    }

    var countByLetter = {};
    vals.forEach(function (v) {
      countByLetter[v] = (countByLetter[v] || 0) + 1;
    });
    var hasDuplicateLetters = vals.some(function (v) {
      return countByLetter[v] > 1;
    });

    var ok = 0;
    selects.forEach(function (el, i) {
      if (!el) return;
      var v = vals[i];
      var want = parsed[i];
      if (v === want) {
        el.classList.add("ok");
        ok++;
      } else {
        el.classList.add("bad");
      }
      if (countByLetter[v] > 1) el.classList.add("dup-letter");
    });

    var wrong = 5 - ok;
    var elNum = document.getElementById("scoreNum");
    var elWrong = document.getElementById("scoreWrong");
    if (elNum) elNum.textContent = String(ok);
    if (elWrong) elWrong.textContent = String(wrong);
    if (scoreLine) scoreLine.hidden = false;
    var dupEl = document.getElementById("dupWarn");
    if (dupEl) dupEl.hidden = !hasDuplicateLetters;
    if (note) note.hidden = true;
  }

  var btn = document.getElementById("btnCheck");
  if (btn) btn.addEventListener("click", check);

  (function initKeyField() {
    var k = window.U3_CHANGES_AT_SCHOOL_KEY;
    var el = document.getElementById("keyInline");
    if (!el || !k) return;
    var p = parseKey(k);
    if (p) el.value = p.join(" ");
  })();
})();
