/**
 * SB 10.2 — Telling lies (FCE B2 First). Interactive evidence (green) / distractor (red) hunt.
 * Clickable spans only; glue text is not clickable. Optional "Check markings" vs tutor key.
 */
(function () {
  /** A–H headlines (same as matching task upstairs). */
  var HEADLINES = {
    A: "I lied to protect a friend.",
    B: "I insisted on my innocence.",
    C: "I apologised for telling a lie.",
    D: "I exaggerated the extent of a problem.",
    E: "I was surprised at someone's reaction.",
    F: "I accused someone of causing damage.",
    G: "I lied to someone who had not treated me well.",
    H: "I intentionally sent someone to the wrong place."
  };

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
        { kind: "hit", sol: "d", tempts: "F", temptsNote: "\u2717 Not F: you never accused the neighbours of causing damage \u2014 you padded the complaint with invented details.", keyReject: "\u2717 Not proof of D alone: sounds factual until you mark the made-up lines green.", text: "their music had woken up our two teenage daughters, who both had an exam in the morning" },
        { kind: "glue", html: ". " },
        { kind: "hit", sol: "e", evidenceNote: "Admits you invented the daughters / exam detail \u2014 core of D (exaggerating the problem).", html: "I <strong class=\"phv\">made up</strong> that bit about my girls &ndash; they&rsquo;ll sleep through anything" },
        { kind: "glue", html: ". " },
        { kind: "hit", sol: "e", evidenceNote: "Shows the exam story could not be true \u2014 more proof you stretched the complaint (D).", text: "Plus it was the last week of school, so there was no way they had any exams" },
        {
          kind: "glue",
          html:
            ". But it did the trick; they were quiet after that, and "
        },
        { kind: "hit", sol: "d", tempts: "C", temptsNote: "\u2717 Not C: the neighbours apologised for the noise \u2014 you did not apologise for telling a lie.", keyReject: "\u2717 Not D: someone else&rsquo;s sorry card is not your headline.", text: "the next day they put a card through the door apologising for the disturbance" },
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
        { kind: "hit", sol: "d", tempts: "G", temptsNote: "\u2717 Not G: a white lie to worried parents \u2014 not «lied to someone who had treated you badly».", keyReject: "\u2717 Not E: backstory before the surprise; mark mum&rsquo;s reaction green.", text: "I told them I was going to a sleepover at my friend\u2019s house" },
        {
          kind: "glue",
          html:
            ". When I got the ticket, though, I was so excited I showed it to my mum, and "
        },
        {
          kind: "hit",
          sol: "d",
          tempts: "C",
          temptsNote: "\u2717 Not C: you owned up / told the truth \u2014 you did not apologise for lying as your headline.",
          keyReject: "\u2717 Not E: confessing is not the surprise; E = how she reacted (green below).",
          html:
            "<strong class=\"phv\">owned up to</strong> lying about the sleepover &ndash; told her the whole truth"
        },
        { kind: "glue", html: ". Funnily enough, " },
        {
          kind: "hit",
          sol: "e",
          evidenceNote: "Her forgiving reaction \u2014 part of what surprised you (E).",
          text:
            "she said she was sorry I\u2019d felt I\u2019d had to lie to her and told me she\u2019d have let me stay out all night if I\u2019d just asked her"
        },
        { kind: "glue", html: ". " },
        {
          kind: "hit",
          sol: "e",
          evidenceNote: "States the surprise directly \u2014 you expected anger, not this (E).",
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
          html: "A mate of mine was always getting into trouble at school, and they\u2019d told him that if he put another foot wrong, he\u2019d be expelled. So of course, when someone reported him for "
        },
        {
          kind: "hit",
          sol: "d",
          tempts: "F",
          temptsNote: "\u2717 Not F: the school reported damage \u2014 you did not accuse anyone.",
          keyReject: "\u2717 Not A: context only; A = you covering for him (green).",
          text: "smashing a light in the toilets at breaktime"
        },
        { kind: "glue", html: ", he " },
        {
          kind: "hit",
          sol: "d",
          tempts: "B",
          temptsNote: "\u2717 Not B: your friend insisted he was innocent \u2014 B would be you denying.",
          keyReject: "\u2717 Not A: his denial is not your lie to protect him.",
          text: "insisted he was innocent \u2013 said he hadn\u2019t been anywhere near the toilets"
        },
        { kind: "glue", html: ". " },
        {
          kind: "hit",
          sol: "e",
          evidenceNote: "You lied to protect your friend \u2014 the headline A.",
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
          tempts: "C",
          temptsNote: "\u2717 Not C: neighbourly sympathy / baking \u2014 not «I apologised for telling a lie».",
          keyReject: "\u2717 Not G evidence: friendly set-up is not the bad treatment (green: unfriendly).",
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
          evidenceNote: "Bad treatment that explains why you lied (G).",
          text:
            "But she\u2019d never done me any favours; in fact, she\u2019d been positively unfriendly to me on occasions"
        },
        { kind: "glue", html: ". " },
        { kind: "hit", sol: "e", evidenceNote: "The lie itself \u2014 saying no flour (G).", text: "So I said I was sorry, but no, I didn\u2019t have any flour" },
        { kind: "glue", html: ", and " },
        {
          kind: "hit",
          sol: "d",
          tempts: "H",
          temptsNote: "\u2717 Not H: a real shop tip \u2014 not «sent someone to the wrong place».",
          keyReject: "\u2717 Not G on its own: the fake direction is part of the lie, but G = bad treatment \u2192 lie (green).",
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
          tempts: "D",
          temptsNote: "\u2717 Not D: «trying to look big» is showing off \u2014 there is no problem here to exaggerate.",
          keyReject: "\u2717 Not B: explains why you cut your hair \u2014 B = denying when asked (green below).",
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
          evidenceNote: "Insisting «no» when asked \u2014 the headline B.",
          text: "And I kept saying \u2018no\u2019. I said it so many times I almost believed it in the end"
        },
        { kind: "glue", html: ". " },
        {
          kind: "hit",
          sol: "d",
          tempts: "E",
          temptsNote: "\u2717 Not E: mum already knew \u2014 no reaction, no surprise is described.",
          keyReject: "\u2717 Not B: later hindsight \u2014 B = the denials in the moment (green above).",
          html: "I thought I\u2019d <strong class=\"phv\">got away with</strong> it, but my mum told me recently she\u2019d always known what had happened"
        },
        { kind: "glue", html: "." }
      ]
    }
  ];

  var host = document.getElementById("u10lies-huntPassage");
  var elPrompt = document.getElementById("u10lies-huntPrompt");
  var elMeta = document.getElementById("u10lies-huntMeta");
  var elKey = document.getElementById("u10lies-huntKey");
  var elHuntOptions = document.getElementById("u10lies-huntOptions");
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

  function distractorLabelHtml(seg) {
    var parts = [];
    if (seg.tempts && HEADLINES[seg.tempts]) {
      parts.push(
        '<span class="lies-tempts-misread">' +
          '<span class="lies-tempts-prefix">Might suggest</span> ' +
          '<span class="lies-tempts-letter">' +
          escapeHtmlLite(seg.tempts) +
          "</span> " +
          '<span class="lies-tempts-line">' +
          escapeHtmlLite(HEADLINES[seg.tempts]) +
          "</span></span>"
      );
    }
    if (seg.temptsNote) {
      parts.push('<span class="lies-tempts-note">' + escapeHtmlLite(seg.temptsNote) + "</span>");
    }
    if (seg.keyReject) {
      parts.push('<span class="lies-key-reject">' + escapeHtmlLite(seg.keyReject) + "</span>");
    }
    return parts.join("");
  }

  function evidenceLabelHtml(seg, keyLetter) {
    var parts = [
      '<span class="lies-evidence-prefix">\u2192 supports ' + escapeHtmlLite(keyLetter) + "</span> ",
      '<span class="lies-evidence-line">' + escapeHtmlLite(HEADLINES[keyLetter]) + "</span>"
    ];
    if (seg.evidenceNote) {
      parts.push('<span class="lies-evidence-note">' + escapeHtmlLite(seg.evidenceNote) + "</span>");
    }
    return parts.join("");
  }

  function renderHuntOptions(keyLetter) {
    if (!elHuntOptions) return;
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    elHuntOptions.innerHTML =
      '<p class="u10lies-hunt-options-title">Options A&ndash;H (same as matching task above)</p>' +
      letters
        .map(function (L) {
          var isKey = L === keyLetter;
          return (
            '<div class="u10lies-opt-row' +
            (isKey ? " is-key" : "") +
            '"><span class="u10lies-opt-letter">' +
            L +
            '</span><span class="u10lies-opt-text">' +
            escapeHtmlLite(HEADLINES[L]) +
            (isKey ? ' <span class="u10lies-opt-key-badge">this speaker</span>' : "") +
            "</span></div>"
          );
        })
        .join("");
  }

  function syncFeedbackTag(wrap) {
    if (!wrap) return;
    var hit = wrap.querySelector(".lies-hit");
    if (!hit) return;
    var temptsTag = wrap.querySelector(".lies-tempts-tag");
    var evidenceTag = wrap.querySelector(".lies-evidence-tag");
    if (temptsTag) temptsTag.hidden = !hit.classList.contains("is-red");
    if (evidenceTag) evidenceTag.hidden = !hit.classList.contains("is-green");
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
        var wrap = document.createElement("span");
        wrap.className = "lies-hit-wrap";
        var h = document.createElement("span");
        h.className = "lies-hit";
        h.setAttribute("role", "button");
        h.setAttribute("tabindex", "0");
        h.setAttribute("data-sol", seg.sol === "e" ? "evidence" : "distractor");
        if (seg.tempts) h.setAttribute("data-tempts", seg.tempts);
        if (seg.html != null) {
          h.innerHTML = seg.html;
        } else {
          h.textContent = seg.text;
        }
        wrap.appendChild(h);
        if (seg.sol === "d" && (seg.tempts || seg.temptsNote || seg.keyReject)) {
          var dTag = document.createElement("span");
          dTag.className = "lies-tempts-tag";
          dTag.hidden = true;
          dTag.innerHTML = distractorLabelHtml(seg);
          wrap.appendChild(dTag);
        }
        if (seg.sol === "e") {
          var eTag = document.createElement("span");
          eTag.className = "lies-evidence-tag";
          eTag.hidden = true;
          eTag.innerHTML = evidenceLabelHtml(seg, lab.keyLetter);
          wrap.appendChild(eTag);
        }
        host.appendChild(wrap);
      }
    });

    if (elPrompt) elPrompt.innerHTML = lab.prompt;
    if (elMeta) {
      elMeta.textContent =
        "Speaker " + lab.speaker + " of 5 — dashed snippets are interactive; book phrasals stay yellow.";
    }
    if (elKey) {
      elKey.innerHTML =
        '<span class="u10lies-hunt-key-label">Target headline (A&ndash;H) for this speaker</span>' +
        '<strong class="u10lies-hunt-key-letter">' +
        escapeHtmlLite(lab.keyLetter) +
        "</strong> " +
        '<span class="u10lies-hunt-key-line">&mdash; ' +
        escapeHtmlLite(lab.keyLine) +
        "</span>";
    }
    renderHuntOptions(lab.keyLetter);

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
    var wrap = el.closest(".lies-hit-wrap");
    clearStaleMarksOnly();
    if (brush === "erase") {
      el.classList.remove("is-green", "is-red");
      syncFeedbackTag(wrap);
      return;
    }
    if (brush === "green") {
      el.classList.remove("is-red");
      el.classList.add("is-green");
      syncFeedbackTag(wrap);
      return;
    }
    if (brush === "red") {
      el.classList.remove("is-green");
      el.classList.add("is-red");
      syncFeedbackTag(wrap);
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
      syncFeedbackTag(el.closest(".lies-hit-wrap"));
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
