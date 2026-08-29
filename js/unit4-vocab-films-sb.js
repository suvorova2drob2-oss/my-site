/** Unit 4 SB Vocabulary Films — keys from Teacher's Book */
(function (W) {
  "use strict";

  var POSTERS = [
    { id: "a", title: "Gone Girl", key: "thriller" },
    { id: "b", title: "La La Land", key: "musical" },
    { id: "c", title: "Get Out", key: "horror film" },
    { id: "d", title: "The Favourite", key: "historical drama" },
    { id: "e", title: "Casablanca", key: "romance" },
    { id: "f", title: "Avengers: Endgame", key: "action film" },
    { id: "g", title: "Maleficent: Mistress of Evil", key: "fantasy" },
    { id: "h", title: "Django Unchained", key: "western" },
    { id: "i", title: "Star Wars", key: "science fiction film" },
    { id: "j", title: "Zoolander", key: "comedy" },
  ];
  var GENRES = [
    "action film",
    "comedy",
    "fantasy",
    "historical drama",
    "horror film",
    "musical",
    "romance",
    "science fiction film",
    "thriller",
    "western",
  ];

  function norm(s) {
    return W.MB2_CLICK_WORD_BANK && W.MB2_CLICK_WORD_BANK.norm
      ? W.MB2_CLICK_WORD_BANK.norm(s)
      : String(s || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function checkBank(ctrl, keys, alts) {
    var vals = ctrl.getValues();
    var ok = 0;
    keys.forEach(function (k, i) {
      var accept = (alts && alts[i]) || [k];
      var good = accept.some(function (a) {
        return norm(vals[i]) === norm(a);
      });
      ctrl.mark(i, good, good ? null : k);
      if (good) ok += 1;
    });
    return ok;
  }

  function mount() {
    var pick = "";
    var assigned = {};
    var bank = document.getElementById("genre-bank");
    var rows = document.getElementById("poster-rows");
    if (!bank || !rows) return;

    bank.innerHTML = GENRES.map(function (g) {
      return '<button type="button" class="genre-chip" data-g="' + g + '">' + g + "</button>";
    }).join("");
    rows.innerHTML = POSTERS.map(function (p) {
      return (
        '<div class="poster-row" data-id="' +
        p.id +
        '"><span class="poster-let">' +
        p.id +
        '</span><span class="poster-title">' +
        p.title +
        '</span><button type="button" class="poster-slot is-empty" data-id="' +
        p.id +
        '">— genre —</button></div>'
      );
    }).join("");

    bank.addEventListener("click", function (e) {
      var b = e.target.closest(".genre-chip");
      if (!b) return;
      pick = b.getAttribute("data-g");
      bank.querySelectorAll(".genre-chip").forEach(function (c) {
        c.classList.toggle("is-on", c === b);
      });
    });
    rows.addEventListener("click", function (e) {
      var slot = e.target.closest(".poster-slot");
      if (!slot || !pick) return;
      var id = slot.getAttribute("data-id");
      assigned[id] = pick;
      slot.textContent = pick;
      slot.classList.remove("is-empty", "is-ok", "is-bad");
    });

    document.getElementById("chk-posters").addEventListener("click", function () {
      var ok = 0;
      POSTERS.forEach(function (p) {
        var slot = rows.querySelector('.poster-slot[data-id="' + p.id + '"]');
        var good = norm(assigned[p.id]) === norm(p.key);
        slot.classList.toggle("is-ok", good);
        slot.classList.toggle("is-bad", !good);
        if (!good) slot.textContent = p.key;
        if (good) ok += 1;
      });
      document.getElementById("fb-posters").textContent =
        ok + " / 10. Wrong slots show the Teacher’s Book genre.";
    });

    var CW = W.MB2_CLICK_WORD_BANK;
    if (!CW) return;

    CW.fillBank(document.getElementById("bank-a"), ["terrible", "terrific", "terrifying"]);
    CW.fillBank(document.getElementById("bank-b"), ["critic", "criticism", "review"]);
    CW.fillBank(document.getElementById("bank-br"), [
      "set",
      "soundtrack",
      "cast",
      "sequel",
      "stars",
      "role",
      "plot",
      "scene",
      "scenes",
    ]);

    var bankA = CW.wire({
      bankEl: document.getElementById("bank-a"),
      slots: document.querySelectorAll(".w-a"),
      unique: true,
    });
    var bankB = CW.wire({
      bankEl: document.getElementById("bank-b"),
      slots: document.querySelectorAll(".w-b"),
      unique: true,
    });
    var bankBr = CW.wire({
      bankEl: document.getElementById("bank-br"),
      slots: document.querySelectorAll(".w-br"),
      unique: true,
    });

    document.getElementById("chk-words").addEventListener("click", function () {
      var keysA = ["terrific", "terrifying", "terrible"];
      var keysB = ["review", "critic", "criticism"];
      var a = checkBank(bankA, keysA, null);
      var b = checkBank(bankB, keysB, null);
      document.getElementById("fb-words").textContent =
        a +
        b +
        " / 6 correct. Keys — A: " +
        keysA.join(" · ") +
        "  |  B: " +
        keysB.join(" · ") +
        "  (green → next to a gap = the answer)";
      bankA.refreshUsed();
      bankB.refreshUsed();
    });

    document.getElementById("chk-br").addEventListener("click", function () {
      var keys = ["set", "soundtrack", "cast", "sequel", "stars", "role", "plot"];
      var ok = checkBank(bankBr, keys, { 1: ["soundtrack", "soundtracks"] });
      document.getElementById("fb-br").textContent =
        ok + " / 7 correct. Keys: " + keys.join(" · ") + "  (green → = answer)";
      bankBr.refreshUsed();
    });
  }

  W.U4_VOCAB_FILMS_SB = { mount: mount };
})(window);
