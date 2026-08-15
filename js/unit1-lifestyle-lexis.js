/**
 * Unit 1 · Lifestyle pack — Cool Words from This is your life (A–D).
 *
 * Games keep full cool-word stems in `phrase`.
 * Lexical trainer gaps = Cool Word chunk only (stealable stem).
 * Passage details (history, slopes, clock times…) stay in the sentence around the gap —
 * learners do not type them unless they are part of the cool word itself.
 *
 * window.FCE_U1_LIFESTYLE_LEXIS
 */
(function (W) {
  "use strict";

  /** @type {{id:string,letter:string,label:string,lines:object[]}[]} */
  var PEOPLE = [
    {
      id: "lucas",
      letter: "A",
      label: "Lucas · actor",
      lines: [
        {
          coolWord:
            "Normally I get out of bed around… though it's not really my idea of fun",
          phrase:
            "Normally I get out of bed around midday — though it's not really my idea of fun",
          hint: "I often wake late — and I do a run even though I don't enjoy it.",
          contextSentence:
            "I'll sometimes go for a run after I get up, though it's not really my idea of fun.",
          stickyAnswer: "not really my idea of fun"
        },
        {
          coolWord: "but I realise it's important",
          phrase: "but I realise it's important",
          hint: "I know fitness matters, even if I'm not a fan.",
          contextSentence: "I'm not a fitness fan, but I realise it's important.",
          stickyAnswer: "realise it's important"
        },
        {
          coolWord:
            "my afternoons generally involve… scripts lying all over the place",
          phrase:
            "afternoons generally involve reading scripts or learning lines — scripts lying all over the place",
          hint: "A usual afternoon means scripts and lines — and they're everywhere at home.",
          contextSentence:
            "My flatmates are also actors, so at home there are usually scripts lying all over the place.",
          stickyAnswer: "scripts lying all over the place"
        },
        {
          coolWord: "It's a bit of a mess I'm ashamed to say",
          phrase: "It's a bit of a mess, I'm ashamed to say",
          hint: "The place is untidy — and I admit I'm embarrassed.",
          contextSentence: "It's a bit of a mess, I'm ashamed to say.",
          stickyAnswer: "a bit of a mess"
        },
        {
          coolWord: "I sometimes lose track of time",
          phrase: "I sometimes lose track of time",
          hint: "I forget how late it has become.",
          contextSentence:
            "I sometimes lose track of time, and I once turned up late for a play I was in.",
          stickyAnswer: "lose track of time"
        },
        {
          coolWord: "I'm passionate about",
          phrase: "I'm passionate about",
          hint: "I care a lot about something — here, the past / museums when away.",
          contextSentence:
            "I'm passionate about history, and if I'm working away from home, I'll often spend the afternoon in a museum or historic building.",
          stickyAnswer: "passionate about"
        },
        {
          coolWord: "I once turned up late for",
          phrase: "I once turned up late for",
          hint: "I arrived late to something that mattered.",
          contextSentence:
            "I sometimes lose track of time, and I once turned up late for a play I was in.",
          stickyAnswer: "turned up late"
        },
        {
          coolWord: "I spend a few hours unwinding",
          phrase: "I spend a few hours unwinding",
          hint: "After the show I take time to relax.",
          contextSentence:
            "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning.",
          stickyAnswer: "spend a few hours unwinding"
        },
        {
          coolWord: "my bedtime is",
          phrase: "my bedtime is",
          hint: "The time I usually go to sleep (often very late).",
          contextSentence:
            "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning.",
          stickyAnswer: "bedtime is"
        },
        {
          coolWord:
            "I'm normally out like a light as soon as my head hits the pillow",
          phrase:
            "I'm normally out like a light as soon as my head hits the pillow",
          hint: "I fall asleep the moment I lie down.",
          contextSentence:
            "I'm normally out like a light as soon as my head hits the pillow.",
          stickyAnswer: "out like a light as soon as my head hits the pillow"
        }
      ]
    },
    {
      id: "maja",
      letter: "B",
      label: "Maja · ski instructor",
      lines: [
        {
          coolWord: "wherever I am, I love the fact",
          phrase: "wherever I am, I love the fact",
          hint: "No matter the country, this part of my setup stays true.",
          contextSentence:
            "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.",
          stickyAnswer: "Wherever I am, I love the fact"
        },
        {
          coolWord: "I usually live just a short walk from",
          phrase: "I usually live just a short walk from",
          hint: "Home is very close to the slopes / work.",
          contextSentence:
            "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.",
          stickyAnswer: "a short walk from"
        },
        {
          coolWord: "I can get up reasonably late",
          phrase: "I can get up reasonably late",
          hint: "I don't need a very early start.",
          contextSentence:
            "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.",
          stickyAnswer: "get up reasonably late"
        },
        {
          coolWord:
            "I still have time for a decent breakfast, set off for work",
          phrase:
            "still have time for a decent breakfast, before setting off for work",
          hint: "There's still time for a proper meal, then I leave for work.",
          contextSentence:
            "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.",
          stickyAnswer: "setting off for work"
        },
        {
          coolWord: "I'm fully qualified",
          phrase: "I'm fully qualified",
          hint: "I have the complete training for the job.",
          contextSentence:
            "Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting.",
          stickyAnswer: "fully qualified"
        },
        {
          coolWord: "I tend to",
          phrase: "I tend to",
          hint: "I usually / I'm more likely to…",
          contextSentence:
            "Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting.",
          stickyAnswer: "tend to"
        },
        {
          coolWord: "I can catch up on my sleep",
          phrase: "catch up on my sleep",
          hint: "On days off I sleep extra to make up for lost rest.",
          contextSentence:
            "We get plenty of days off and when I'm not working, I go skiing by myself, or catch up on my sleep – I have no problem spending the morning in bed!",
          stickyAnswer: "catch up on my sleep"
        },
        {
          coolWord: "I'm not sure I can carry on doing this much longer",
          phrase: "I'm not sure I can carry on doing this much longer",
          hint: "I doubt I can continue this lifestyle for long.",
          contextSentence:
            "I love the lifestyle, but I'm not sure I can carry on doing this much longer.",
          stickyAnswer: "carry on doing this"
        },
        {
          coolWord: "it might be time to settle down",
          phrase: "it might be time to settle down",
          hint: "Perhaps I should start a more stable life.",
          contextSentence:
            "It might be time to settle down and get a more normal job, something steady and secure.",
          stickyAnswer: "settle down"
        },
        {
          coolWord: "get a more normal job, something steady and secure",
          phrase: "get a more normal job, something steady and secure",
          hint: "A conventional job that feels stable and safe.",
          contextSentence:
            "It might be time to settle down and get a more normal job, something steady and secure.",
          stickyAnswer: "steady and secure"
        },
        {
          coolWord: "I haven't made up my mind yet, though",
          phrase: "I haven't made up my mind yet, though",
          hint: "I still haven't decided.",
          contextSentence: "I haven't made up my mind yet, though.",
          stickyAnswer: "made up my mind"
        }
      ]
    },
    {
      id: "reo",
      letter: "C",
      label: "Reo · farm vet",
      lines: [
        {
          coolWord: "I tend to be out all day",
          phrase: "I tend to be out all day",
          hint: "My typical day keeps me away from home (farms).",
          contextSentence:
            "I tend to be out all day, visiting farms, and it wasn't fair to leave him alone.",
          stickyAnswer: "out all day"
        },
        {
          coolWord: "So now I don't get as much exercise as I'd like to",
          phrase: "So now I don't get as much exercise as I'd like to",
          hint: "I get less exercise than I want.",
          contextSentence:
            "So now I don't get as much exercise as I'd like to.",
          stickyAnswer: "as much exercise as I'd like"
        },
        {
          coolWord: "I love my job, especially the variety",
          phrase: "I love my job, especially the variety",
          hint: "What I love most is that every day is different.",
          contextSentence:
            "I love my job, especially the variety and not knowing what you'll be doing from one day to the next.",
          stickyAnswer: "especially the variety"
        },
        {
          coolWord: "It's not all cuddly",
          phrase: "It's not all cuddly",
          hint: "The cute image is incomplete — the job has hard parts.",
          contextSentence:
            "It's not all cuddly lambs and cute little calves.",
          stickyAnswer: "not all cuddly"
        },
        {
          coolWord:
            "things which might put some people off working with animals for life",
          phrase:
            "things which might put some people off working with animals for life",
          hint: "Unpleasant parts of the job that could put someone off forever.",
          contextSentence:
            "We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life.",
          stickyAnswer: "put some people off"
        },
        {
          coolWord: "I have loads of free time to go looking",
          phrase: "it's not as if I have loads of free time to go looking",
          hint: "I don't really have lots of spare time to search for a partner.",
          contextSentence:
            "My mum wants to know when I'm going to find someone to settle down with, but it's not as if I have loads of free time to go looking.",
          stickyAnswer: "loads of free time"
        },
        {
          coolWord:
            "There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in",
          phrase:
            "There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in",
          hint: "My life is too full even for a dog — let alone marriage.",
          contextSentence:
            "There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in.",
          stickyAnswer: "fit marriage in"
        }
      ]
    },
    {
      id: "ben",
      letter: "D",
      label: "Ben · mountaineer",
      lines: [
        {
          coolWord: "you might come across me hanging on a rope",
          phrase: "you might come across me hanging on a rope",
          hint: "Off the mountain, you might see me on a rope at a wind turbine.",
          contextSentence:
            "And when I'm not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres.",
          stickyAnswer: "hanging on a rope"
        },
        {
          coolWord: "That's how I make a living and pay for",
          phrase: "That's how I make a living and pay for",
          hint: "This job funds my climbing trips.",
          contextSentence:
            "That's how I make a living and pay for my climbing trips.",
          stickyAnswer: "make a living and pay for"
        },
        {
          coolWord: "provide funding and maybe food and equipment",
          phrase: "provide funding and maybe food and equipment",
          hint: "Sponsors give money and sometimes food and gear.",
          contextSentence:
            "I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment.",
          stickyAnswer: "provide funding and maybe food and equipment"
        },
        {
          coolWord: "It's a fairly unconventional way of life",
          phrase: "It's a fairly unconventional way of life",
          hint: "An unusual lifestyle.",
          contextSentence:
            "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me.",
          stickyAnswer: "unconventional way of life"
        },
        {
          coolWord:
            "I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me",
          phrase:
            "not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me",
          hint: "I wouldn't recommend this path to others — real risk — but it suits me.",
          contextSentence:
            "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me.",
          stickyAnswer: "it works for me"
        },
        {
          coolWord:
            "It's precisely that sense of danger that makes me feel alive",
          phrase:
            "It's precisely that sense of danger that makes me feel alive",
          hint: "The danger itself is what gives me that alive feeling.",
          contextSentence:
            "It's precisely that sense of danger that makes me feel alive.",
          stickyAnswer: "makes me feel alive"
        }
      ]
    }
  ];

  /** Gap must be a substring of the reading sentence (case-insensitive). */
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
    if (ix < 0) {
      return {
        stickyBefore: c + " ",
        stickyAnswer: g,
        stickyAfter: ""
      };
    }
    return {
      stickyBefore: c.slice(0, ix),
      stickyAnswer: c.slice(ix, ix + g.length),
      stickyAfter: c.slice(ix + g.length)
    };
  }

  function toGameLine(line) {
    var phrase = String(line.phrase || line.coolWord || "").trim();
    var hint = String(line.hint || "").trim();
    var ctx = String(line.contextSentence || phrase).trim();
    var st = stickyFromContext(ctx, line.stickyAnswer);
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

  function lifestyleTheme() {
    var blocks = PEOPLE.map(function (person) {
      return {
        name: person.letter + " · " + person.label,
        lines: person.lines.map(toGameLine)
      };
    });
    var dropLines = [];
    var seen = Object.create(null);
    PEOPLE.forEach(function (person) {
      person.lines.forEach(function (line) {
        var c = String(line.contextSentence || "").trim();
        if (c && !seen[c]) {
          seen[c] = true;
          dropLines.push(c);
        }
      });
    });
    return {
      id: "lifestyle",
      label: "Lifestyle · This is your life",
      short: "Lifestyle",
      blurb:
        " Cool Words A–D — trainer gaps from the reading sentence; Word Bank keeps full stems.",
      blocks: W.FCE_UNIT_LEX_STUBS
        ? W.FCE_UNIT_LEX_STUBS.packBlocks(blocks)
        : blocks.map(function (b) {
            return { name: b.name, items: b.lines };
          }),
      dropLines: dropLines
    };
  }

  function drawerSpeakers() {
    return PEOPLE.map(function (person) {
      return {
        id: person.id,
        letter: person.letter,
        label: person.letter + " · " + person.label,
        phrases: person.lines.map(function (line) {
          return {
            en: line.coolWord || line.phrase,
            game: line.phrase,
            tip: line.hint,
            context: line.contextSentence
          };
        })
      };
    });
  }

  function allGameLines() {
    var out = [];
    PEOPLE.forEach(function (person) {
      person.lines.forEach(function (line) {
        out.push(toGameLine(line));
      });
    });
    return out;
  }

  W.FCE_U1_LIFESTYLE_LEXIS = {
    people: PEOPLE,
    lifestyleTheme: lifestyleTheme,
    drawerSpeakers: drawerSpeakers,
    allGameLines: allGameLines,
    id: "lifestyle",
    label: "Lifestyle"
  };
})(typeof window !== "undefined" ? window : globalThis);
