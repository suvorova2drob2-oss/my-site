/**
 * Jack · substitution drill — one anchor phrase, 3–4 continuations (mixed contexts).
 */
(function (W) {
  "use strict";

  var DRILLS = [
    {
      id: "aware",
      label: "aware of",
      anchor: "I'm very much aware of",
      note: "Jack · effort for hosts — then life outside food.",
      items: [
        {
          tag: "Jack · dinner",
          completion: "the extra effort for non-vegans who invite me round for a meal",
          full:
            "Now that I am a vegan, I'm very much aware of the extra effort for non-vegans who invite me round for a meal."
        },
        {
          tag: "Family",
          completion: "how much work it is for my mum when I change my diet",
          full:
            "I'm very much aware of how much work it is for my mum when I change my diet."
        },
        {
          tag: "Work",
          completion: "the pressure my team is under this month",
          full: "I'm very much aware of the pressure my team is under this month."
        },
        {
          tag: "Money",
          completion: "the risks before you invest your savings",
          full: "I'm very much aware of the risks before you invest your savings."
        }
      ]
    },
    {
      id: "face",
      label: "couldn't face",
      anchor: "couldn't face",
      pattern: "+ -ing",
      note: "Same pattern · food, school, health, work.",
      items: [
        {
          tag: "Jack · meals",
          completion: "cooking special meals for me every night",
          full: "She couldn't face cooking special meals for me every night."
        },
        {
          tag: "Guests",
          completion: "telling the guests the main course was vegan",
          full: "I couldn't face telling the guests the main course was vegan."
        },
        {
          tag: "School",
          completion: "apologising to the teacher in front of the class",
          full: "He couldn't face apologising to the teacher in front of the class."
        },
        {
          tag: "Health",
          completion: "getting up at five for the gym again",
          full: "I couldn't face getting up at five for the gym again."
        }
      ]
    },
    {
      id: "informed",
      label: "informed about",
      anchor: "better informed about",
      note: "Wait until you know more — vegan or any topic.",
      items: [
        {
          tag: "Jack",
          completion: "what being vegan really meant",
          full:
            "My mum told me to wait until I was older and better informed about what being vegan really meant."
        },
        {
          tag: "Health",
          completion: "nutrition before you cut out whole food groups",
          full:
            "You should be better informed about nutrition before you cut out whole food groups."
        },
        {
          tag: "Uni",
          completion: "the course before you apply",
          full: "Get better informed about the course before you apply."
        },
        {
          tag: "Money",
          completion: "the small print before you sign",
          full: "I'd like to be better informed about the small print before you sign."
        }
      ]
    },
    {
      id: "getthat",
      label: "get that",
      anchor: "I totally get that",
      note: "React + forgive — natural pairs.",
      items: [
        {
          tag: "Jack · her",
          completion: "and I don't hold it against her",
          full: "I totally get that, and I don't hold it against her."
        },
        {
          tag: "Friend",
          completion: "and I don't hold it against you",
          full: "I totally get that you were stressed, and I don't hold it against you."
        },
        {
          tag: "Soft",
          completion: "— I don't hold it against you",
          full: "I can totally get that — I don't hold it against you."
        },
        {
          tag: "Grudge",
          completion: "so I won't bear a grudge",
          full: "I totally get that, so I won't bear a grudge."
        }
      ]
    },
    {
      id: "amazed",
      label: "amazed at",
      anchor: "invariably amazed at",
      note: "Surprise · food or not.",
      items: [
        {
          tag: "Jack · dessert",
          completion: "how delicious it is",
          full: "The guests are invariably amazed at how delicious it is."
        },
        {
          tag: "Cooking",
          completion: "how easy the recipe was",
          full: "People are invariably amazed at how easy the recipe was."
        },
        {
          tag: "Skill",
          completion: "how fast she learnt to cook",
          full: "I'm invariably amazed at how fast she learnt to cook."
        },
        {
          tag: "Travel",
          completion: "how quiet the city is at night",
          full: "Visitors are invariably amazed at how quiet the city is at night."
        }
      ]
    },
    {
      id: "advice",
      label: "sound advice",
      anchor: "sound advice",
      note: "Worth listening to — Jack and everyday situations.",
      items: [
        {
          tag: "Jack",
          completion: "to wait until I knew more about veganism",
          full: "It was probably sound advice to wait until I knew more about veganism."
        },
        {
          tag: "Health",
          completion: "to talk to a doctor before a strict diet",
          full: "It was sound advice to talk to a doctor before a strict diet."
        },
        {
          tag: "Rest",
          completion: "to take a week off before the exam period",
          full: "My teacher said it was sound advice to take a week off before the exam period."
        },
        {
          tag: "Money",
          completion: "not to lend more than you can afford to lose",
          full: "That's sound advice: don't lend more than you can afford to lose."
        }
      ]
    },
    {
      id: "vegan",
      label: "go vegan",
      anchor: "go vegan",
      note: "When + why — short story slots.",
      items: [
        {
          tag: "Jack",
          completion: "when I was about thirteen, because of the meat industry",
          full:
            "I first wanted to go vegan when I was about thirteen, and learnt about the meat industry."
        },
        {
          tag: "Film",
          completion: "after I saw a film about animals",
          full: "I wanted to go vegan after I saw a film about animals."
        },
        {
          tag: "Documentary",
          completion: "when I watched a documentary on the environment",
          full:
            "I wanted to go vegan when I watched a documentary on the environment."
        },
        {
          tag: "Friend",
          completion: "when my friend did and I read about health",
          full:
            "I wanted to go vegan when my friend did and I read about health."
        }
      ]
    }
  ];

  var phraseIx = 0;
  var pickIx = null;
  var mounted = false;

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function hi(text, phrase) {
    var s = esc(text);
    if (!phrase) return s;
    var re = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    return s.replace(re, function (m) {
      return "<mark>" + m + "</mark>";
    });
  }

  function paint() {
    var root = document.getElementById("substDrillRoot");
    if (!root) return;
    var d = DRILLS[phraseIx];

    var pills = DRILLS.map(function (ph, i) {
      return (
        '<button type="button" class="subst-pill' +
        (i === phraseIx ? " is-on" : "") +
        '" data-i="' +
        i +
        '">' +
        esc(ph.label) +
        "</button>"
      );
    }).join("");

    var opts = d.items
      .map(function (it, i) {
        return (
          '<button type="button" class="subst-opt' +
          (pickIx === i ? " is-on" : "") +
          '" data-i="' +
          i +
          '"><span class="subst-opt-tag">' +
          esc(it.tag) +
          "</span><span class=\"subst-opt-text\">" +
          esc(it.completion) +
          "</span></button>"
        );
      })
      .join("");

    var result = "";
    if (pickIx !== null && d.items[pickIx]) {
      var it = d.items[pickIx];
      result =
        '<div class="subst-result"><p class="subst-result-kicker">Full line · say it</p><p class="subst-result-line">' +
        hi(it.full, d.anchor) +
        "</p></div>";
    }

    root.innerHTML =
      '<div class="subst-rail">' +
      pills +
      '</div><div class="subst-panel"><div class="subst-head"><p class="subst-anchor">' +
      esc(d.anchor) +
      (d.pattern ? ' <span class="subst-pattern">' + esc(d.pattern) + "</span>" : "") +
      '</p><p class="subst-note">' +
      esc(d.note) +
      '</p></div><p class="subst-prompt">Pick a continuation (3–4 contexts):</p><div class="subst-opts">' +
      opts +
      "</div>" +
      result +
      '<div class="subst-nav"><button type="button" class="btn btn-ghost subst-prev" ' +
      (phraseIx === 0 ? "disabled" : "") +
      '>← Prev phrase</button><button type="button" class="btn btn-gold subst-next" ' +
      (phraseIx >= DRILLS.length - 1 ? "disabled" : "") +
      ">Next phrase →</button></div></div>";

    root.querySelectorAll(".subst-pill").forEach(function (btn) {
      btn.addEventListener("click", function () {
        phraseIx = Number(btn.getAttribute("data-i"));
        pickIx = null;
        paint();
      });
    });
    root.querySelectorAll(".subst-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        pickIx = Number(btn.getAttribute("data-i"));
        paint();
      });
    });
    var prev = root.querySelector(".subst-prev");
    var next = root.querySelector(".subst-next");
    if (prev) {
      prev.addEventListener("click", function () {
        if (phraseIx > 0) {
          phraseIx--;
          pickIx = null;
          paint();
        }
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        if (phraseIx < DRILLS.length - 1) {
          phraseIx++;
          pickIx = null;
          paint();
        }
      });
    }
  }

  function boot() {
    if (!document.getElementById("substDrillRoot")) return;
    if (!mounted) mounted = true;
    paint();
  }

  W.U12_JACK_SUBST_DRILL = { boot: boot, drills: DRILLS };
})(typeof window !== "undefined" ? window : this);
