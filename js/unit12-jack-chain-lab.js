(function (W) {
  "use strict";
  var started = false;

  var PATTERN_LAB = {
    "couldn't face": {
      title: "couldn't face + -ing",
      note: "Same grammar · different life contexts (food is only one).",
      items: [
        {
          tag: "Food · Jack",
          line: "She couldn't face cooking special meals for me every night.",
          hi: "couldn't face"
        },
        {
          tag: "Food · guests",
          line: "I couldn't face telling the guests the main course was vegan.",
          hi: "couldn't face"
        },
        {
          tag: "School",
          line: "He couldn't face apologising to the teacher in front of the class.",
          hi: "couldn't face"
        },
        {
          tag: "Work",
          line: "She couldn't face starting another difficult project so soon.",
          hi: "couldn't face"
        },
        {
          tag: "Health",
          line: "I couldn't face getting up at five for the gym again.",
          hi: "couldn't face"
        }
      ]
    },
    "I totally get that": {
      title: "I totally get that · don't hold it against / bear a grudge",
      note: "Fixed phrases · change who you forgive.",
      items: [
        {
          tag: "Jack · text",
          line: "I totally get that, and I don't hold it against her.",
          hi: "I totally get that"
        },
        {
          tag: "Friend",
          line: "I totally get that you were stressed — I don't hold it against you.",
          hi: "I totally get that"
        },
        {
          tag: "Grudge",
          line: "I totally get that. I won't bear a grudge.",
          hi: "bear a grudge"
        },
        {
          tag: "Parents",
          line: "I get why they said no; I don't hold it against them.",
          hi: "hold it against"
        }
      ]
    },
    "invariably amazed at": {
      title: "invariably amazed at",
      note: "Surprise + pattern · food or not.",
      items: [
        {
          tag: "Jack · dessert",
          line: "The guests are invariably amazed at how delicious it is.",
          hi: "invariably amazed at"
        },
        {
          tag: "Food",
          line: "People are invariably amazed at how easy the recipe was.",
          hi: "invariably amazed at"
        },
        {
          tag: "Skill",
          line: "I'm invariably amazed at how fast she learnt to cook.",
          hi: "invariably amazed at"
        },
        {
          tag: "Travel",
          line: "Visitors are invariably amazed at how quiet the city is at night.",
          hi: "invariably amazed at"
        }
      ]
    },
    "better informed about": {
      title: "better informed about",
      note: "Wait until you know more — any topic.",
      items: [
        {
          tag: "Jack",
          line: "Wait until you're better informed about what being vegan meant.",
          hi: "better informed about"
        },
        {
          tag: "Uni",
          line: "Get better informed about the course before you apply.",
          hi: "better informed about"
        },
        {
          tag: "Money",
          line: "I'd rather be better informed about the risks first.",
          hi: "better informed about"
        }
      ]
    }
  };

  var BLOCKS = [
    {
      id: 1,
      chunk: "go vegan",
      label: "go vegan",
      slots: 3,
      jack:
        "I first wanted to go vegan a few years ago, when I was about thirteen, and learnt about the effects of the meat industry on the environment.",
      patternKey: null,
      swaps: [],
      segments: [
        { key: "who", options: ["I", "My friend", "My cousin"] },
        {
          key: "when",
          options: [
            "when I was about thirteen",
            "when I saw a film",
            "when I watched a documentary",
            "last year"
          ]
        },
        {
          key: "about",
          options: ["the meat industry", "animals", "health", "the environment"]
        }
      ],
      build: function (p) {
        var w = p.when.indexOf("when") === 0 ? p.when : "when " + p.when;
        return (
          p.who +
          " first wanted to go vegan " +
          w +
          ", and learnt about " +
          p.about +
          "."
        );
      },
      hi: "go vegan"
    },
    {
      id: 2,
      chunk: "better informed about",
      label: "informed",
      slots: 2,
      jack:
        "But my mum told me to wait until I was older and better informed about what being vegan meant.",
      patternKey: "better informed about",
      swaps: [],
      segments: [
        { key: "parent", options: ["mum", "dad", "parents"] },
        {
          key: "about",
          options: [
            "what being vegan meant",
            "nutrition",
            "protein and B12",
            "what I could eat"
          ]
        }
      ],
      build: function (p) {
        return (
          "My " +
          p.parent +
          " told me to wait until I was older and better informed about " +
          p.about +
          "."
        );
      },
      hi: "better informed about"
    },
    {
      id: 3,
      chunk: "sound advice",
      label: "advice",
      slots: 1,
      jack: "It was probably sound advice, though I now know it was partly because she couldn't face cooking special meals for me.",
      patternKey: null,
      swaps: [],
      segments: [
        {
          key: "because",
          options: [
            "I was too young",
            "I didn't know enough",
            "she was worried",
            "nutrition is complicated"
          ]
        }
      ],
      build: function (p) {
        return "It was probably sound advice, because " + p.because + ".";
      },
      hi: "sound advice"
    },
    {
      id: 4,
      chunk: "couldn't face",
      label: "couldn't face",
      slots: 1,
      jack: "…partly because she couldn't face cooking special meals for me.",
      patternKey: "couldn't face",
      swaps: [],
      segments: [{ key: "for", options: ["me", "him", "her", "us"] }],
      build: function (p) {
        return (
          "Partly because Mum couldn't face cooking special meals for " + p.for + "."
        );
      },
      hi: "couldn't face"
    },
    {
      id: 5,
      chunk: "I totally get that",
      label: "get that",
      slots: 1,
      jack: "I totally get that, though, and don't hold it against her.",
      patternKey: "I totally get that",
      swaps: [],
      segments: [
        { key: "lead", options: ["I totally get that", "I can totally get that"] },
        {
          key: "tail",
          options: [
            "and I don't hold it against her",
            "and I don't hold it against him",
            "and I don't hold it against you",
            "and I don't hold it against them",
            "I won't bear a grudge"
          ]
        }
      ],
      build: function (p) {
        if (p.tail === "I won't bear a grudge") {
          return "I totally get that. I won't bear a grudge.";
        }
        if (p.tail === "and I don't hold it against them") {
          return "I get why they said no; I don't hold it against them.";
        }
        if (p.lead === "I can totally get that" && p.tail === "and I don't hold it against you") {
          return "I can totally get that — I don't hold it against you.";
        }
        return p.lead + ", " + p.tail + ".";
      },
      hi: "I totally get that"
    },
    {
      id: 6,
      chunk: "I'm very much aware of",
      label: "aware of",
      slots: 2,
      jack:
        "Now that I am a vegan, I'm very much aware of the extra effort involved for non-vegans who invite me round for a meal.",
      patternKey: null,
      swaps: [],
      segments: [
        { key: "now", options: ["I am a vegan", "I'm plant-based", "I've changed my diet"] },
        {
          key: "for",
          options: ["non-vegans who invite me", "friends who cook", "hosts", "my family"]
        }
      ],
      build: function (p) {
        return (
          "Now that " +
          p.now +
          ", I'm very much aware of the extra effort for " +
          p.for +
          "."
        );
      },
      hi: "very much aware of"
    },
    {
      id: 7,
      chunk: "invariably amazed at",
      label: "amazed",
      slots: 2,
      jack:
        "I always offer to take a dessert, and the other dinner guests are invariably amazed at how delicious it is.",
      patternKey: "invariably amazed at",
      swaps: [],
      segments: [
        { key: "who", options: ["the guests", "my friends", "everyone"] },
        { key: "how", options: ["delicious it is", "good it tastes", "easy it was"] }
      ],
      build: function (p) {
        return (
          "I offer dessert, and " +
          p.who +
          " are invariably amazed at how " +
          p.how +
          "."
        );
      },
      hi: "invariably amazed at"
    }
  ];

  var active = 0;
  var activeSegKey = null;
  var picks = [];
  var lines = [];

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

  function blockSegments(b) {
    if (b.segments && b.segments.length) return b.segments;
    return (b.swaps || []).map(function (sw) {
      return { key: sw.key, options: sw.options };
    });
  }

  function defaultPick(b) {
    var p = {};
    blockSegments(b).forEach(function (seg) {
      p[seg.key] = seg.options[0];
    });
    return p;
  }

  function defaultLine(b) {
    return b.build(defaultPick(b));
  }

  function segBtn(key, text, activeSeg) {
    return (
      '<button type="button" class="line-seg' +
      (activeSeg === key ? " is-active" : "") +
      '" data-seg="' +
      esc(key) +
      '">' +
      esc(text) +
      "</button>"
    );
  }

  function renderInteractiveLine(b, p, activeSeg) {
    var id = b.id;
    if (id === 1) {
      var w = p.when.indexOf("when") === 0 ? p.when : "when " + p.when;
      return (
        segBtn("who", p.who, activeSeg) +
        ' first wanted to <span class="line-core">go vegan</span> ' +
        segBtn("when", w, activeSeg) +
        ", and learnt about " +
        segBtn("about", p.about, activeSeg) +
        "."
      );
    }
    if (id === 2) {
      return (
        "My " +
        segBtn("parent", p.parent, activeSeg) +
        " told me to wait until I was older and " +
        '<span class="line-core">better informed about</span> ' +
        segBtn("about", p.about, activeSeg) +
        "."
      );
    }
    if (id === 3) {
      return (
        "It was probably " +
        '<span class="line-core">sound advice</span>, because ' +
        segBtn("because", p.because, activeSeg) +
        "."
      );
    }
    if (id === 4) {
      return (
        "Partly because Mum " +
        '<span class="line-core">couldn\'t face</span> cooking special meals for ' +
        segBtn("for", p.for, activeSeg) +
        "."
      );
    }
    if (id === 5) {
      if (p.tail === "I won't bear a grudge") {
        return (
          segBtn("lead", "I totally get that", activeSeg) +
          ". " +
          segBtn("tail", "I won't bear a grudge", activeSeg) +
          "."
        );
      }
      if (p.tail === "and I don't hold it against them") {
        return (
          "I get why they said no; " +
          segBtn("tail", "I don't hold it against them", activeSeg) +
          "."
        );
      }
      if (p.lead === "I can totally get that" && p.tail === "and I don't hold it against you") {
        return (
          segBtn("lead", p.lead, activeSeg) +
          " — " +
          segBtn("tail", "I don't hold it against you", activeSeg) +
          "."
        );
      }
      return (
        segBtn("lead", p.lead, activeSeg) +
        ", " +
        segBtn("tail", p.tail, activeSeg) +
        "."
      );
    }
    if (id === 6) {
      return (
        "Now that " +
        segBtn("now", p.now, activeSeg) +
        ", <span class=\"line-core\">I'm very much aware of</span> the extra effort for " +
        segBtn("for", p.for, activeSeg) +
        "."
      );
    }
    if (id === 7) {
      return (
        "I offer dessert, and " +
        segBtn("who", p.who, activeSeg) +
        " are " +
        '<span class="line-core">invariably amazed at</span> how ' +
        segBtn("how", p.how, activeSeg) +
        "."
      );
    }
    return esc(b.build(p));
  }

  function segOptions(b, key) {
    var segs = blockSegments(b);
    for (var i = 0; i < segs.length; i++) {
      if (segs[i].key === key) return segs[i].options;
    }
    return [];
  }

  function init() {
    picks = BLOCKS.map(defaultPick);
    lines = BLOCKS.map(function (b) {
      return defaultLine(b);
    });
  }

  function paintRail() {
    var rail = document.getElementById("chainRail");
    var html = "";
    BLOCKS.forEach(function (b, i) {
      if (i) html += '<span class="chain-arrow">→</span>';
      html +=
        '<button type="button" class="chain-pill' +
        (i === active ? " is-on" : "") +
        (lines[i] ? " is-filled" : "") +
        '" data-i="' +
        i +
        '">[' +
        (i + 1) +
        " " +
        esc(b.label) +
        "]</button>";
    });
    rail.innerHTML = html;
    rail.querySelectorAll(".chain-pill").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openBlock(Number(btn.getAttribute("data-i")));
      });
    });
    document.getElementById("slotsLine").textContent =
      "↓ slots · " +
      BLOCKS.map(function (b, i) {
        return i + 1 + ":" + b.slots;
      }).join(" · ");
  }

  function paintChain() {
    var ol = document.getElementById("storyChain");
    ol.innerHTML = BLOCKS.map(function (b, i) {
      var text = lines[i] || b.build(picks[i]);
      return (
        '<li><button type="button" class="story-row' +
        (i === active ? " is-on" : "") +
        '" data-i="' +
        i +
        '"><div class="story-row-head"><span class="story-num">' +
        (i + 1) +
        '</span><span class="story-chunk">' +
        esc(b.chunk) +
        '</span></div><p class="story-line">' +
        hi(text, b.hi) +
        "</p></button></li>"
      );
    }).join("");
    ol.querySelectorAll(".story-row").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openBlock(Number(btn.getAttribute("data-i")));
      });
    });
  }

  function paintDock() {
    var b = BLOCKS[active];
    document.getElementById("dockTitle").textContent =
      "Block " + b.id + " · " + b.chunk;
    var segHint = "";
    if (activeSegKey && p[activeSegKey]) {
      segHint = " Changing: «" + p[activeSegKey] + "» → pick another.";
    }
    document.getElementById("dockMeta").textContent =
      "Gold = key phrase (learn it). Underline = tap to swap." + segHint;

    var grid = document.getElementById("dockGrid");
    var html = "";
    var p = picks[active];
    var segs = blockSegments(b);
    if (!activeSegKey && segs.length) activeSegKey = segs[0].key;

    html += '<div class="dock-row-main">';

    html +=
      '<details class="dock-jack" open><summary>Jack · text</summary><p class="text-example">' +
      esc(b.jack) +
      "</p></details>";

    if (segs.length) {
      html +=
        '<div class="dock-card dock-card--line"><h3>Your line</h3><p class="interactive-line">' +
        renderInteractiveLine(b, p, activeSegKey) +
        "</p></div>";
      html +=
        '<div class="dock-card dock-card--opts"><h3>Change</h3><div class="swap-line swap-line--plain">';
      segOptions(b, activeSegKey).forEach(function (opt) {
        html +=
          '<button type="button" class="opt' +
          (p[activeSegKey] === opt ? " is-on" : "") +
          '" data-key="' +
          esc(activeSegKey) +
          '" data-val="' +
          esc(opt) +
          '">' +
          esc(opt) +
          "</button>";
      });
      html += "</div></div>";
    }

    html += "</div>";

    if (b.patternKey && PATTERN_LAB[b.patternKey]) {
      var lab = PATTERN_LAB[b.patternKey];
      html +=
        '<details class="dock-pattern"><summary>More contexts · ' +
        esc(lab.title) +
        " (" +
        lab.items.length +
        ')</summary><p class="text-example" style="margin:6px 0;">' +
        esc(lab.note) +
        '</p><ul class="ctx-list">';
      lab.items.forEach(function (it) {
        html +=
          "<li><span class=\"ctx-tag\">" +
          esc(it.tag) +
          "</span> " +
          hi(it.line, it.hi) +
          "</li>";
      });
      html += "</ul></details>";
    }

    grid.className = "dock-grid";
    grid.innerHTML = html;

    grid.querySelectorAll(".line-seg").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeSegKey = btn.getAttribute("data-seg");
        paintDock();
      });
    });
    grid.querySelectorAll(".opt[data-key]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        picks[active][btn.getAttribute("data-key")] = btn.getAttribute("data-val");
        lines[active] = b.build(picks[active]);
        paintChain();
        paintRail();
        paintDock();
      });
    });
  }

  function openBlock(i) {
    active = i;
    activeSegKey = null;
    paintRail();
    paintChain();
    paintDock();
    var dock = document.getElementById("dock");
    dock.classList.add("is-open");
    dock.setAttribute("aria-hidden", "false");
    document.body.classList.add("dock-open");
  }

  function closeDock() {
    document.getElementById("dock").classList.remove("is-open");
    document.getElementById("dock").setAttribute("aria-hidden", "true");
    document.body.classList.remove("dock-open");
  }

  function resetBlockToJack() {
    var b = BLOCKS[active];
    picks[active] = defaultPick(b);
    lines[active] = defaultLine(b);
    activeSegKey = segsFirstKey(b);
    paintChain();
    paintRail();
    paintDock();
  }

  function segsFirstKey(b) {
    var segs = blockSegments(b);
    return segs.length ? segs[0].key : null;
  }
  function boot() {
    if (started || !document.getElementById("chainRail")) return;
    started = true;
    init();
    paintRail();
    paintChain();
    var dock = document.getElementById("dock");
    if (dock && !dock.dataset.backdropWired) {
      dock.dataset.backdropWired = "1";
      dock.addEventListener("click", function (e) {
        if (e.target === dock) closeDock();
      });
      var inner = dock.querySelector(".dock-inner");
      if (inner) {
        inner.addEventListener("click", function (e) {
          e.stopPropagation();
        });
      }
    }
    var btnClose = document.getElementById("btnCloseDock");
    var btnApply = document.getElementById("btnApply");
    var btnReset = document.getElementById("btnResetJack");
    if (btnClose) btnClose.addEventListener("click", closeDock);
    if (btnReset) btnReset.addEventListener("click", resetBlockToJack);
    if (btnApply) {
      btnApply.addEventListener("click", function () {
        lines[active] = BLOCKS[active].build(picks[active]);
        paintChain();
        paintRail();
        closeDock();
      });
    }
    if (!document.body.dataset.chainLabKeys) {
      document.body.dataset.chainLabKeys = "1";
      document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        var dock = document.getElementById("dock");
        if (dock && dock.classList.contains("is-open")) closeDock();
      });
    }
  }
  W.U12_JACK_CHAIN_LAB = { boot: boot, closeDock: closeDock };
})(typeof window !== "undefined" ? window : this);
