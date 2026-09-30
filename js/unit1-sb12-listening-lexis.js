/**
 * Unit 1 · Listening SB 1.2 (Part 1) — Cool Words for speakers 1, 2, 3, 5, 8.
 * window.FCE_U1_SB12_LEXIS
 */
(function (W) {
  "use strict";

  /**
   * Maintainer list — speakers 1, 2, 3, 5, 8 only.
   * `hint` = paraphrase for pick / trainer / flip front: plain sense only —
   * no words from the target Cool Word (e.g. avoid "only just" for "just about get by").
   */
  var SPEAKERS = [
    {
      id: "sp1",
      letter: "1",
      label: "Speaker 1",
      speaking: {
        groups: [
          {
            title: "О друзьях, домах и планах",
            kicker: "Extract 1 · Mike",
            questions: [
              "Do you know anyone for whom life seems easy — lots of homes or travel? Would you say «Easy for some, isn't it?» about them?",
              "Do you ever get the impression a friend is fed up with their routine or possessions?",
              "Would you be surprised if someone got rid of everything at home and moved abroad permanently?",
              "Is it like you to talk much about your plans, or do you keep future decisions private?"
            ]
          }
        ]
      },
      lines: [
        {
          coolWord: "Easy for some, isn't it?",
          phrase: "Easy for some, isn't it?",
          hint: "Some people's lives look easy when they own several homes.",
          contextSentence: "Hmm. Easy for some, isn't it?"
        },
        {
          coolWord: "I get the impression he's fed up with it all",
          phrase: "I get the impression he's fed up with it all",
          hint: "She feels Mike is exhausted by always moving house.",
          contextSentence:
            "I don't know. I get the impression he's fed up with it all – always moving around."
        },
        {
          coolWord: "I wouldn't be surprised if he got rid of everything over here",
          phrase:
            "I wouldn't be surprised if he got rid of everything over here and lived in Spain permanently",
          hint: "She could imagine him selling everything here and staying abroad.",
          contextSentence:
            "I wouldn't be surprised if he got rid of everything over here and lived in Spain permanently."
        },
        {
          coolWord: "Is that what he's said he'll do?",
          phrase: "Is that what he's said he'll do?",
          hint: "She asks if he has really said he will do that.",
          contextSentence: "Is that what he's said he'll do?"
        },
        {
          coolWord: "It's not like him to talk much about his plans",
          phrase: "It's not like him to talk much about his plans",
          hint: "He rarely discusses what he plans to do next.",
          contextSentence:
            "Well, you know Mike. It's not like him to talk much about his plans."
        }
      ]
    },
    {
      id: "sp2",
      letter: "2",
      label: "Speaker 2",
      speaking: {
        groups: [
          {
            title: "О стрессе и отдыхе",
            kicker: "Extract 2 · Pilates / yoga",
            questions: [
              "When you're stressed out, to be honest, what with work or home — what helps you switch off?",
              "If you were choosing a relaxation class, would you ask a friend what it was like first?",
              "Do you agree it's always better to talk to someone with firsthand experience than to rely on a quick look online?",
              "Would pilates on Tuesdays and Thursdays suit your week better than a class on a day you already play sport?"
            ]
          }
        ]
      },
      lines: [
        {
          coolWord: "I'm stressed out, to be honest",
          phrase: "I'm stressed out, to be honest",
          hint: "Work and the house are wearing him down badly.",
          contextSentence:
            "I'm stressed out, to be honest, what with work and all the problems with the house."
        },
        {
          coolWord: "I was wondering if you could tell me",
          phrase: "I was wondering if you could tell me what it was like",
          hint: "She politely asks what the class was like for him.",
          contextSentence:
            "And actually, I was wondering if you could tell me what it was like, what sort of things you did."
        },
        {
          coolWord:
            "I had a quick look online, but it's always better to talk to someone with firsthand experience",
          phrase:
            "I had a quick look online, but it's always better to talk to someone with firsthand experience",
          hint: "Reading online helps, but talking to someone who went is better.",
          contextSentence:
            "I had a quick look online, but it's always better to talk to someone with firsthand experience."
        }
      ]
    },
    {
      id: "sp3",
      letter: "3",
      label: "Speaker 3",
      speaking: {
        groups: [
          {
            title: "О деньгах и семье",
            kicker: "Extract 3 · Family finances",
            questions: [
              "Do you just about get by, or is money a bit of a struggle at the moment?",
              "If someone in your family lost their job, would they have sent off loads of applications before finding something?",
              "If your parents could help out, would borrowing from them seem right — or would you want them to enjoy their money in retirement?",
              "If there was nothing for it but to sell something valuable (like a car), would you put it on the market?"
            ]
          }
        ]
      },
      lines: [
        {
          coolWord: "We just about get by, but it's a bit of a struggle",
          phrase: "We just about get by, but it's a bit of a struggle",
          hint: "They can pay their way, but money is always tight.",
          contextSentence: "We just about get by, but it's a bit of a struggle."
        },
        {
          coolWord: "He's sent off loads of applications, but no luck so far",
          phrase: "He's sent off loads of applications, but no luck so far",
          hint: "He has applied for many jobs without getting one yet.",
          contextSentence: "He's sent off loads of applications, but no luck so far."
        },
        {
          coolWord:
            "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them",
          phrase:
            "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them",
          hint: "Her parents could lend money, but borrowing from them feels wrong.",
          contextSentence:
            "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them."
        },
        {
          coolWord:
            "There's nothing for it but to put my car on the market and see if I can get a decent price for it",
          phrase:
            "There's nothing for it but to put my car on the market and see if I can get a decent price for it",
          hint: "She may have to sell her car because there is no other choice.",
          contextSentence:
            "There's nothing for it but to put my car on the market and see if I can get a decent price for it."
        }
      ]
    },
    {
      id: "sp5",
      letter: "5",
      label: "Speaker 5",
      speaking: {
        groups: [
          {
            title: "О жизни за границей",
            kicker: "Extract 5 · Living abroad",
            questions: [
              "Have you gained much from time living abroad — or would you like to?",
              "Do you reckon you'll have no trouble finding work when you finish studying, or are you less sure?",
              "Do you care more about employability or about the benefits to you as a person?",
              "Since you've been in new places, have you become more tolerant and willing to accept difference?",
              "Do you think you've grown as an individual — more open-minded and independent?",
              "Do you admire someone's optimism about the future, or do you miss being where you are now?",
              "Has time away ever made you value life at home more?"
            ]
          }
        ]
      },
      lines: [
        {
          coolWord: "I've gained so much from these two years living abroad",
          phrase: "I've gained so much from these two years living abroad",
          hint: "Living abroad for two years taught her a great deal.",
          contextSentence: "I've gained so much from these two years living abroad."
        },
        {
          coolWord: "I reckon we'll have no trouble finding work",
          phrase: "I reckon we'll have no trouble finding work when we get back home",
          hint: "He believes finding jobs at home will be straightforward.",
          contextSentence:
            "Yeah, me, too. I reckon we'll have no trouble finding work when we get back home."
        },
        {
          coolWord: "I was thinking more about the benefits to me as a person",
          phrase: "I was thinking more about the benefits to me as a person",
          hint: "She cares more about personal growth than about CV lines.",
          contextSentence:
            "I'm not sure that's true. But anyway, I was thinking more about the benefits to me as a person."
        },
        {
          coolWord:
            "I've become much more tolerant since I've been here, more willing to accept difference",
          phrase:
            "I've become much more tolerant since I've been here, more willing to accept difference",
          hint: "Time abroad made her more accepting of other ways of living.",
          contextSentence:
            "I've become much more tolerant since I've been here, more willing to accept difference."
        },
        {
          coolWord:
            "We've grown as individuals, we're more open-minded and independent, so that makes us more employable",
          phrase:
            "We've grown as individuals, we're more open-minded and independent, so that makes us more employable",
          hint: "They are more open-minded now, which should help them get jobs.",
          contextSentence:
            "That's what I mean. We've grown as individuals, we're more open-minded and independent, so that makes us more employable."
        },
        {
          coolWord: "I admire your optimism",
          phrase: "I admire your optimism",
          hint: "She compliments his cheerful belief that things will work out.",
          contextSentence: "Well, I admire your optimism."
        },
        {
          coolWord: "The whole thing has made me value life at home more",
          phrase: "the whole thing has made me value life at home more",
          hint: "Time away made him appreciate home more than before.",
          contextSentence:
            "It's alright, but the whole thing has made me value life at home more."
        }
      ]
    },
    {
      id: "sp8",
      letter: "8",
      label: "Speaker 8",
      speaking: {
        groups: [
          {
            title: "О другой культуре",
            kicker: "Extract 8 · Abroad again",
            questions: [
              "Have you had to get used to eating all kinds of strange dishes when travelling?",
              "In a hot country, would a slow pace of life and relaxed approach to work be only to be expected for you?",
              "What about another culture might you not have anticipated — for example their way of dressing?",
              "Have you ever felt quite scruffy by comparison with people who care a lot about colour, style and fashion?"
            ]
          }
        ]
      },
      lines: [
        {
          coolWord: "I've had to get used to eating all kinds of strange dishes",
          phrase: "I've had to get used to eating all kinds of strange dishes",
          hint: "He learned to eat unfamiliar food on his travels.",
          contextSentence:
            "On my travels I've had to get used to eating all kinds of strange dishes, so I was prepared for their rather unusual cuisine."
        },
        {
          coolWord:
            "The slow pace of life and relaxed approach to work were only to be expected",
          phrase:
            "the slow pace of life and relaxed approach to work were only to be expected",
          hint: "Slow living and relaxed work habits fit a hot climate.",
          contextSentence:
            "And it's a hot country, so the slow pace of life and relaxed approach to work were only to be expected."
        },
        {
          coolWord: "What I hadn't anticipated was their way of dressing",
          phrase: "What I hadn't anticipated was their way of dressing",
          hint: "What surprised him was how people there dressed.",
          contextSentence: "What I hadn't anticipated was their way of dressing."
        },
        {
          coolWord: "I felt quite scruffy by comparison",
          phrase: "I felt quite scruffy by comparison",
          hint: "Compared with them, he felt his clothes looked messy.",
          contextSentence:
            "I'm not used to being with people who take so much care over what they wear and I felt quite scruffy by comparison."
        }
      ]
    }
  ];

  function stickyFromContext(ctx, gap) {
    var c = String(ctx || "").trim();
    var g = String(gap || "").trim();
    if (!c) {
      return { stickyBefore: "", stickyAnswer: g || "…", stickyAfter: "" };
    }
    if (!g) {
      var parts = c.replace(/[.!?]+$/, "").split(/\s+/);
      g = parts.slice(Math.max(0, parts.length - 2)).join(" ");
    }
    var ix = c.toLowerCase().indexOf(g.toLowerCase());
    if (ix >= 0) {
      return {
        stickyBefore: c.slice(0, ix),
        stickyAnswer: c.slice(ix, ix + g.length),
        stickyAfter: c.slice(ix + g.length)
      };
    }
    if (/\s/.test(g)) {
      var words = g.split(/\s+/).filter(Boolean);
      var wi;
      for (wi = words.length - 1; wi >= 0; wi -= 1) {
        var word = words[wi].replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
        if (word.length < 3) continue;
        ix = c.toLowerCase().indexOf(word.toLowerCase());
        if (ix >= 0) {
          return {
            stickyBefore: c.slice(0, ix),
            stickyAnswer: c.slice(ix, ix + word.length),
            stickyAfter: c.slice(ix + word.length)
          };
        }
      }
    }
    return { stickyBefore: c + " ", stickyAnswer: g.split(/\s+/)[0] || g, stickyAfter: "" };
  }

  function stickyOneWordGap(line, gl) {
    var pick =
      W.FCE_UNIT_LEX_STUBS && W.FCE_UNIT_LEX_STUBS.pickStickyKeyword
        ? W.FCE_UNIT_LEX_STUBS.pickStickyKeyword
        : null;
    var ctx = String(gl.contextSentence || "").trim();
    var gap = String(line.stickyAnswer || "").trim();
    if (!gap || /\s/.test(gap)) {
      gap = pick
        ? pick(line.coolWord || line.phrase || gl.stickyAnswer || "")
        : String(gl.stickyAnswer || "")
            .trim()
            .split(/\s+/)[0];
    }
    if (!gap) gap = pick ? pick(line.phrase || "") : "…";
    var carved = stickyFromContext(ctx, gap);
    return {
      phrase: gl.phrase,
      coolWord: gl.coolWord,
      hint: gl.hint,
      contextSentence: ctx,
      stickyBefore: carved.stickyBefore,
      stickyAnswer: carved.stickyAnswer,
      stickyAfter: carved.stickyAfter
    };
  }

  function toGameLine(line) {
    var pick =
      W.FCE_UNIT_LEX_STUBS && W.FCE_UNIT_LEX_STUBS.pickStickyKeyword
        ? W.FCE_UNIT_LEX_STUBS.pickStickyKeyword
        : null;
    var phrase = String(line.phrase || line.coolWord || "").trim();
    var hint = String(line.hint || "").trim();
    var ctx = String(line.contextSentence || phrase).trim();
    var gap = String(line.stickyAnswer || "").trim();
    if (!gap || /\s/.test(gap)) {
      gap = pick
        ? pick(line.coolWord || phrase)
        : String(line.coolWord || phrase)
            .trim()
            .split(/\s+/)[0];
    }
    var st = stickyFromContext(ctx, gap);
    return {
      phrase: phrase,
      coolWord: line.coolWord || phrase,
      hint: hint,
      contextSentence: ctx,
      stickyBefore: st.stickyBefore,
      stickyAnswer: st.stickyAnswer,
      stickyAfter: st.stickyAfter
    };
  }

  function sb12Theme() {
    var blocks = SPEAKERS.map(function (sp) {
      return {
        name: sp.label,
        lines: sp.lines.map(toGameLine)
      };
    });
    var dropLines = [];
    var seen = Object.create(null);
    SPEAKERS.forEach(function (sp) {
      sp.lines.forEach(function (line) {
        var c = String(line.contextSentence || "").trim();
        if (c && !seen[c]) {
          seen[c] = true;
          dropLines.push(c);
        }
      });
    });
    return {
      id: "sb12",
      label: "8 short extracts · SB 1.2",
      short: "8 short extracts",
      blurb:
        " Cool Words from Track 1.2 (Speakers 1, 2, 3, 5, 8) — Word Bank + trainers use full script lines.",
      blocks: W.FCE_UNIT_LEX_STUBS
        ? W.FCE_UNIT_LEX_STUBS.packBlocks(blocks)
        : blocks.map(function (b) {
            return { name: b.name, items: b.lines };
          }),
      dropLines: dropLines
    };
  }

  /** Raw blocks for unit1-sticky-packs.js (same shape as L() rows). */
  function stickyRawBlocks() {
    return SPEAKERS.map(function (sp) {
      return {
        name: sp.label,
        lines: sp.lines.map(function (line) {
          var gl = toGameLine(line);
          var row = stickyOneWordGap(line, gl);
          return {
            hint: String(line.hint || line.coolWord || "").trim(),
            stickyBefore: row.stickyBefore,
            stickyAnswer: row.stickyAnswer,
            stickyAfter: row.stickyAfter,
            contextSentence: row.contextSentence,
            phrase: row.stickyBefore + row.stickyAnswer + row.stickyAfter
          };
        })
      };
    });
  }

  function drawerSpeakers() {
    return SPEAKERS.map(function (sp) {
      return {
        id: sp.id,
        letter: sp.letter,
        label: sp.label,
        phrases: sp.lines.map(function (line) {
          return {
            en: line.coolWord || line.phrase,
            game: line.phrase,
            tip: line.hint,
            context: line.contextSentence
          };
        }),
        speaking: sp.speaking
      };
    });
  }

  W.FCE_U1_SB12_LEXIS = {
    speakers: SPEAKERS,
    people: SPEAKERS.map(function (sp) {
      return {
        id: sp.id,
        letter: sp.letter,
        label: sp.label,
        lines: sp.lines.map(toGameLine)
      };
    }),
    drawerSpeakers: drawerSpeakers,
    toGameLine: toGameLine,
    sb12Theme: sb12Theme,
    stickyRawBlocks: stickyRawBlocks,
    id: "sb12",
    label: "8 short extracts"
  };
})(typeof window !== "undefined" ? window : globalThis);
