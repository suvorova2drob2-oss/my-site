/**
 * Unit 5 — Reading & Use of English Part 7 (B2 First style).
 * Four people A–D · 10 statements.
 * Engine: js/fce-reading-part7-matching-engine.js
 */
(function () {
  if (!window.FCE_READING_PART7) return;

  FCE_READING_PART7.mountPage({
    pack: {
      letters: ["A", "B", "C", "D"],
      names: {
        A: "Simon",
        B: "Jenny",
        C: "Lucy",
        D: "Andrew"
      },
      examId: "unit5SchoolRulesPart7",
      examLabel: "Reading: School rules \u2014 Part 7 multiple matching",
      key: {
        1: "C",
        2: "A",
        3: "D",
        4: "B",
        5: "C",
        6: "B",
        7: "A",
        8: "D",
        9: "C",
        10: "C"
      },
      explanations: {
        1: {
          letter: "C",
          quote:
            "I can\u2019t see why \u2013 they\u2019re no more dangerous than carrying a sharpened pencil in your pocket"
        },
        2: {
          letter: "A",
          quote:
            "they weren\u2019t allowed to drink water in class\u2026 his daughter\u2026 is expected to bring a refillable bottle for water"
        },
        3: {
          letter: "D",
          quote:
            "all rules, whatever they are, help to maintain order and get children ready for the real world"
        },
        4: {
          letter: "B",
          quote:
            "It\u2019s very confusing \u2013 it would be much simpler just to ban them altogether."
        },
        5: {
          letter: "C",
          quote:
            "It seems I agreed to all this when I signed the school rules document\u2026 but I honestly wasn\u2019t aware of any ban"
        },
        6: {
          letter: "B",
          quote: "Everything was black and white in those days, just like our school tie."
        },
        7: {
          letter: "A",
          quote:
            "far too much emphasis was placed on what we could and couldn\u2019t do, and sometimes this got in the way of learning"
        },
        8: {
          letter: "D",
          quote:
            "Discipline there has gone downhill in the last few years and the kids seem to do what they want."
        },
        9: {
          letter: "C",
          quote:
            "they humiliated her in front of her classmates and there\u2019s no excuse for that"
        },
        10: {
          letter: "C",
          quote:
            "We were given a couple of warnings, but I was still furious when they made her take the stud out"
        }
      },
      statements: [
        { id: 1, text: "I fail to understand the reason for a rule at my child's school." },
        {
          id: 2,
          text: "Something which was forbidden at the school before is actively encouraged now."
        },
        {
          id: 3,
          text: "School rules serve to prepare young people for the future."
        },
        {
          id: 4,
          text: "I disagree with the element of choice offered to my child."
        },
        {
          id: 5,
          text: "I did not realise that I had accepted a rule at my child's school."
        },
        {
          id: 6,
          text: "School rules were clearer and easier to understand when I was at school."
        },
        {
          id: 7,
          text: "Some school rules affected my ability to study."
        },
        {
          id: 8,
          text: "There has been a decline in standards of behaviour at my child's school."
        },
        {
          id: 9,
          text: "I was angry at the way my child was made to feel."
        },
        {
          id: 10,
          text: "I was discouraged from voicing my opinion on a rule at my child's school."
        }
      ],
      passages: [
        {
          letter: "A",
          short: "Simon",
          name: "Simon",
          body:
            "<p>When I was at school \u2013 more years ago than I care to remember \u2013 far too much emphasis was placed on what we could and couldn\u2019t do, and sometimes this got in the way of learning. We had to wear our jacket and tie at all times, no matter what the temperature, and I remember sitting there in the height of summer, sweating profusely as I battled with algebra or struggled with French verb forms.</p>" +
            "<p>Simon recalls that they weren\u2019t allowed to drink water in class, which would be unacceptable today. In contrast, his daughter, attending the same school, is expected to bring a refillable bottle for water, as it\u2019s recognized that it improves concentration.</p>"
        },
        {
          letter: "B",
          short: "Jenny",
          name: "Jenny",
          body:
            "<p>At my son David\u2019s school, rule number one of their two-page Mobile Phone Policy states that \u2018pupils are strongly advised not to bring mobile phones to school\u2019; then there are sixteen more rules describing situations in which they can and cannot be used. It\u2019s very confusing \u2013 it would be much simpler just to ban them altogether. That\u2019s what my old school would have done if mobile phones had been around then. Everything was black and white in those days, just like our school tie.</p>"
        },
        {
          letter: "C",
          short: "Lucy",
          name: "Lucy",
          body:
            "<p>My sixteen-year-old daughter isn\u2019t allowed to wear a nose stud to school on health and safety grounds. Can you believe it? According to the headteacher, in a busy school piercings present \u2018a very real risk of accidents\u2019. I can\u2019t see why \u2013 they\u2019re no more dangerous than carrying a sharpened pencil in your pocket, and there\u2019s no rule against that, as far as I know. I used to wear earrings to school and never had any problems.</p>" +
            "<p>It seems I agreed to all this when I signed the school rules document at the beginning of last term, but I honestly wasn\u2019t aware of any ban on tiny metal objects in the nose. We were given a couple of warnings, but I was still furious when they made her take the stud out and sent her home for the day: they humiliated her in front of her classmates and there\u2019s no excuse for that.</p>"
        },
        {
          letter: "D",
          short: "Andrew",
          name: "Andrew",
          body:
            "<p>It\u2019s gone from one extreme to the other. When I was a lad, we weren\u2019t allowed to have shoulder-length hair at school. The headteacher cut it off in his office if we did, without so much as a phone call home. Now my boy mustn\u2019t have his hair cut too short, otherwise he\u2019ll be suspended until it grows back to \u2018a suitable length\u2019. He thinks it\u2019s unfair, but ultimately all rules, whatever they are, help to maintain order and get children ready for the real world. As a lawyer, I don\u2019t need to be convinced of their importance \u2013 they\u2019re part of my daily life. If anything, they should tighten the rules up a bit more at my son\u2019s place. Discipline there has gone downhill in the last few years and the kids seem to do what they want.</p>"
        }
      ]
    }
  });
})();
