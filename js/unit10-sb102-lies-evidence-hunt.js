/**
 * SB 10.2 — Telling lies (FCE B2 First). Interactive evidence (green) / distractor (red) hunt.
 * Clickable spans only; glue text is not clickable. Optional "Check markings" vs tutor key.
 */
(function () {
  var LABS = [
    {
      speaker: 1,
      keyLetter: "D",
      keyLine: "I exaggerated the extent of a problem.",
      prompt:
        "<strong>Speaker 1.</strong> Decide which A&ndash;H line fits upstairs, then mark <strong style=\"color:#86efac\">green</strong> for phrases that <em>support that headline</em> (inventing / stretching the story). Mark <strong style=\"color:#fca5a5\">red</strong> for bits that tempt you toward a <em>different</em> line.",
      segments: [
        {
          kind: "glue",
          html:
            "The neighbours had some kind of party last Thursday night, and the noise was terrible. I had to <strong class=\"phv\">go round</strong> at two in the morning to complain. I told them my wife and I couldn&rsquo;t get to sleep, and "
        },
        { kind: "hit", sol: "d", text: "their music had woken up our two teenage daughters, who both had an exam in the morning" },
        { kind: "glue", html: ". " },
        { kind: "hit", sol: "e", html: "I <strong class=\"phv\">made up</strong> that bit about my girls &ndash; they&rsquo;ll sleep through anything" },
        { kind: "glue", html: ". " },
        { kind: "hit", sol: "e", text: "Plus it was the last week of school, so there was no way they had any exams" },
        {
          kind: "glue",
          html:
            ". But it did the trick; they were quiet after that, and "
        },
        { kind: "hit", sol: "d", text: "the next day they put a card through the door apologising for the disturbance" },
        { kind: "glue", html: "." }
      ]
    },
    {
      speaker: 2,
      keyLetter: "E",
      keyLine: "I was surprised at someone's reaction.",
      prompt:
        "<strong>Speaker 2.</strong> <strong style=\"color:#86efac\">Green</strong> = how someone <em>reacted</em> and why that surprised the speaker. <strong style=\"color:#fca5a5\">Red</strong> = lines that sound like a different headline (e.g. the cover story or confessing).",
      segments: [
        {
          kind: "glue",
          html:
            "In the days before online booking, I once queued up overnight to get a ticket for a David Bowie concert. I was only fifteen, and because I didn&rsquo;t want my parents to worry, "
        },
        { kind: "hit", sol: "d", text: "I told them I was going to a sleepover at my friend\u2019s house" },
        {
          kind: "glue",
          html:
            ". When I got the ticket, though, I was so excited I showed it to my mum, and "
        },
        {
          kind: "hit",
          sol: "d",
          html:
            "<strong class=\"phv\">owned up to</strong> lying about the sleepover &ndash; told her the whole truth"
        },
        { kind: "glue", html: ". Funnily enough, " },
        {
          kind: "hit",
          sol: "e",
          text:
            "she said she was sorry I\u2019d felt I\u2019d had to lie to her and told me she\u2019d have let me stay out all night if I\u2019d just asked her"
        },
        { kind: "glue", html: ". " },
        {
          kind: "hit",
          sol: "e",
          text: "I hadn\u2019t expected that \u2013 I thought she\u2019d be really angry"
        },
        { kind: "glue", html: "." }
      ]
    },
    {
      speaker: 3,
      keyLetter: "A",
      keyLine: "I lied to protect a friend.",
      prompt:
        "<strong>Speaker 3.</strong> <strong style=\"color:#86efac\">Green</strong> = you <em>protecting / covering for</em> someone else. <strong style=\"color:#fca5a5\">Red</strong> = what the friend says or other bait (innocence, damage) that is <em>not</em> your main claim.",
      segments: [
        {
          kind: "glue",
          html: "A mate of mine was always getting into trouble at school, and they\u2019d told him that if he put another foot wrong, he\u2019d be expelled. So of course, "
        },
        {
          kind: "hit",
          sol: "d",
          text:
            "when someone reported him for smashing a light in the toilets at breaktime, he insisted he was innocent \u2013 said he hadn\u2019t been anywhere near the toilets"
        },
        { kind: "glue", html: ". " },
        {
          kind: "hit",
          sol: "e",
          html:
            "I didn\u2019t want him to get <strong class=\"phv\">kicked out</strong>, so I <strong class=\"phv\">backed up</strong> his story, and said that he\u2019d been with me, in the library"
        },
        {
          kind: "glue",
          html:
            ". Trouble was, the idiot had left his mobile on one of the sinks, so they knew it was him. He got expelled and I got suspended for a week."
        }
      ]
    },
    {
      speaker: 4,
      keyLetter: "G",
      keyLine: "I lied to someone who had not treated me well.",
      prompt:
        "<strong>Speaker 4.</strong> <strong style=\"color:#86efac\">Green</strong> = past treatment + the lie you told. <strong style=\"color:#fca5a5\">Red</strong> = sympathetic context or directions that mimic another headline.",
      segments: [
        { kind: "glue", html: "My neighbour <strong class=\"phv\">came over</strong> a few weeks ago. She said she\u2019d <strong class=\"phv\">run out of</strong> flour and asked if she could borrow some. " },
        {
          kind: "hit",
          sol: "d",
          text:
            "It was a Sunday afternoon and the shop on the corner was closed and she wanted to bake a sponge cake for her kids"
        },
        {
          kind: "glue",
          html:
            ". Well, I did have some, and under normal circumstances, I\u2019d have been more than happy to lend it to a neighbour in need. "
        },
        {
          kind: "hit",
          sol: "e",
          text:
            "But she\u2019d never done me any favours; in fact, she\u2019d been positively unfriendly to me on occasions"
        },
        { kind: "glue", html: ". " },
        { kind: "hit", sol: "e", text: "So I said I was sorry, but no, I didn\u2019t have any flour" },
        { kind: "glue", html: ", and " },
        {
          kind: "hit",
          sol: "d",
          text: "if she hurried, she might catch the shop down in the town before it closed"
        },
        { kind: "glue", html: "." }
      ]
    },
    {
      speaker: 5,
      keyLetter: "B",
      keyLine: "I insisted on my innocence.",
      prompt:
        "<strong>Speaker 5.</strong> <strong style=\"color:#86efac\">Green</strong> = how they <em>denied</em> the haircut. <strong style=\"color:#fca5a5\">Red</strong> = motive or hindsight, not the lie-in-action.",
      segments: [
        {
          kind: "glue",
          html:
            "When I was about five or six, I took a pair of scissors out of a kitchen drawer and cut off a big chunk of my hair in front of my friends. I\u2019m not sure why \u2013 "
        },
        {
          kind: "hit",
          sol: "d",
          html: "maybe I was just <strong class=\"phv\">showing off</strong>, trying to make myself look big"
        },
        {
          kind: "glue",
          html:
            ". I kept being asked the same question: \u2018Have you cut some of your hair off?\u2019 My mum, my dad, the hairdresser &hellip; "
        },
        {
          kind: "hit",
          sol: "e",
          text: "And I kept saying \u2018no\u2019. I said it so many times I almost believed it in the end"
        },
        { kind: "glue", html: ". " },
        {
          kind: "hit",
          sol: "d",
          html: "I thought I\u2019d <strong class=\"phv\">got away with</strong> it, but my mum told me recently she\u2019d always known what had happened"
        },
        { kind: "glue", html: "." }
      ]
    }
  ];

  var host = document.getElementById("u10lies-huntPassage");
  var elPrompt = document.getElementById("u10lies-huntPrompt");
  var elMeta = document.getElementById("u10lies-huntMeta");
  var elFb = document.getElementById("u10lies-huntFb");
  var elToast = document.getElementById("u10lies-huntToast");
  var btnVerify = document.getElementById("u10lies-huntVerify");
  var btnResetHunt = document.getElementById("u10lies-huntReset");
  var brushBtns = document.querySelectorAll(".u10lies-brush");
  var tabs = document.querySelectorAll(".u10lies-tab");
  if (!host || !LABS.length) return;

  var spkIx = 0;
  var brush = "green";

  function showToast(msg) {
    if (!elToast) return;
    elToast.textContent = msg;
    elToast.classList.add("is-visible");
    setTimeout(function () {
      elToast.classList.remove("is-visible");
      elToast.textContent = "";
    }, 2600);
  }

  function setBrush(next) {
    brush = next;
    brushBtns.forEach(function (b) {
      var on = b.getAttribute("data-brush") === brush;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function clearVerifyStyles() {
    host.querySelectorAll(".lies-hit").forEach(function (el) {
      el.classList.remove("lies-bad");
    });
    if (elFb) {
      elFb.textContent = "";
      elFb.className = "u10lies-hunt-fb";
    }
  }

  function clearStaleMarksOnly() {
    host.querySelectorAll(".lies-hit.lies-bad").forEach(function (el) {
      el.classList.remove("lies-bad");
    });
    if (elFb) {
      elFb.textContent = "";
      elFb.className = "u10lies-hunt-fb";
    }
  }

  function hits() {
    return host.querySelectorAll(".lies-hit");
  }

  function renderPassage() {
    var lab = LABS[spkIx];
    host.innerHTML = "";
    host.className = "u10lies-passage";

    lab.segments.forEach(function (seg) {
      if (seg.kind === "glue") {
        var g = document.createElement("span");
        g.className = "lies-glue";
        g.innerHTML = seg.html;
        host.appendChild(g);
      } else {
        var h = document.createElement("span");
        h.className = "lies-hit";
        h.setAttribute("role", "button");
        h.setAttribute("tabindex", "0");
        h.setAttribute("data-sol", seg.sol === "e" ? "evidence" : "distractor");
        if (seg.html != null) {
          h.innerHTML = seg.html;
        } else {
          h.textContent = seg.text;
        }
        host.appendChild(h);
      }
    });

    if (elPrompt) elPrompt.innerHTML = lab.prompt;
    if (elMeta) {
      elMeta.textContent =
        "Speaker " + lab.speaker + " of 5 — dashed snippets are interactive; book phrasals stay yellow.";
    }

    tabs.forEach(function (tab, i) {
      tab.classList.toggle("is-active", i === spkIx);
      tab.setAttribute("aria-selected", i === spkIx ? "true" : "false");
    });

    clearVerifyStyles();
  }

  function escapeHtmlLite(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;");
  }

  function onHitClick(ev) {
    var el = ev.target.closest(".lies-hit");
    if (!el || !host.contains(el)) return;
    clearStaleMarksOnly();
    if (brush === "erase") {
      el.classList.remove("is-green", "is-red");
      return;
    }
    if (brush === "green") {
      el.classList.remove("is-red");
      el.classList.add("is-green");
      return;
    }
    if (brush === "red") {
      el.classList.remove("is-green");
      el.classList.add("is-red");
    }
  }

  function onHitKey(ev) {
    if (ev.key !== "Enter" && ev.key !== " ") return;
    var el = ev.target.closest(".lies-hit");
    if (!el) return;
    ev.preventDefault();
    onHitClick({ target: el });
  }

  function verify() {
    clearVerifyStyles();
    var lab = LABS[spkIx];
    var ok = true;
    var missE = 0;
    var missD = 0;
    var wrongFlip = 0;

    hits().forEach(function (el) {
      var sol = el.getAttribute("data-sol");
      var g = el.classList.contains("is-green");
      var r = el.classList.contains("is-red");

      if (sol === "evidence") {
        if (!g) {
          ok = false;
          if (!r) missE += 1;
          else {
            wrongFlip += 1;
            el.classList.add("lies-bad");
          }
        }
      } else if (sol === "distractor") {
        if (!r) {
          ok = false;
          if (!g) missD += 1;
          else {
            wrongFlip += 1;
            el.classList.add("lies-bad");
          }
        }
      }
    });

    var parts = [];
    if (ok) {
      parts.push("All tutor targets match: evidence in green, distractors in red.");
    } else {
      if (missE) parts.push(missE + " evidence snippet(s) still unmarked or not green.");
      if (missD) parts.push(missD + " distractor snippet(s) still unmarked or not red.");
      if (wrongFlip) parts.push(wrongFlip + " snippet(s) have the colours flipped (shown with a dashed outline).");
    }

    if (elFb) {
      var msg = parts.join(" ");
      if (ok) {
        msg +=
          "<br /><span style=\"opacity: 0.95;\">Answer key pairing: <strong>" +
          escapeHtmlLite(lab.keyLetter) +
          "</strong> &mdash; " +
          escapeHtmlLite(lab.keyLine) +
          "</span>";
      }
      elFb.innerHTML = msg;
      elFb.className = "u10lies-hunt-fb " + (ok ? "ok" : "partial");
    }
    if (ok) showToast("Nice — markings match the tutor slice.");
    else showToast("Adjust colours, then check again.");
  }

  function resetRound() {
    hits().forEach(function (el) {
      el.classList.remove("is-green", "is-red", "lies-bad");
    });
    clearVerifyStyles();
  }

  brushBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      clearVerifyStyles();
      setBrush(b.getAttribute("data-brush"));
    });
  });

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () {
      spkIx = i;
      renderPassage();
    });
  });

  host.addEventListener("click", onHitClick);
  host.addEventListener("keydown", onHitKey);
  if (btnVerify) btnVerify.addEventListener("click", verify);
  if (btnResetHunt) btnResetHunt.addEventListener("click", resetRound);

  renderPassage();
})();
