/**
 * SB 1.1 Clothes — evidence / distractor hunt labs (verbatim transcript chunks).
 */
(function (W) {
  "use strict";

  W.U1_SB11_CLOTHES_HUNT = {
    headlines: {
      A: "I tend to wear the same clothes all the time.",
      B: "I don't really care what clothes I wear.",
      C: "I refuse to wear designer clothes.",
      D: "I'm careful to check the origin of the clothes I buy.",
      E: "I generally wear second-hand clothes.",
      F: "I only throw clothes away when absolutely necessary.",
      G: "I buy quality clothes that are guaranteed to last.",
      H: "I wear clothes that give me self-confidence."
    },
    labs: [
      {
        speaker: 1,
        keyLetter: "E",
        keyLine: "I generally wear second-hand clothes.",
        prompt:
          "<strong>Speaker 1.</strong> Mark <strong style=\"color:#86efac\">green</strong> for phrases that paraphrase <strong>E</strong> (second-hand / charity). Mark <strong style=\"color:#fca5a5\">red</strong> for lines that tempt you toward a <em>different</em> A&ndash;H option.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Rarely buys new \u2014 sets up second-hand habit (E).",
            text: "It\u2019s unusual for me to buy brand new clothes."
          },
          {
            kind: "glue",
            html: " "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Charity shops = second-hand source (E).",
            text: "I get most of what I wear from charity shops."
          },
          {
            kind: "glue",
            html:
              ". Some people think that anyone who buys things that have already been worn by someone else can\u2019t really care much about clothes. But that\u2019s not true \u2013 you can find some pretty decent stuff in these places, "
          },
          {
            kind: "hit",
            sol: "d",
            tempts: "C",
            temptsNote:
              "\u2717 Not C: they mention designer pieces in charity shops \u2014 they don\u2019t refuse designer labels.",
            keyReject: "\u2717 Not E: designer name-drop alone isn\u2019t the headline.",
            text: "even quite tasteful designer clothes that people, for whatever reason, have decided they don\u2019t want anymore"
          },
          {
            kind: "glue",
            html: ". And they only sell clothes that are in good condition, "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Worn once or twice \u2014 classic second-hand detail (E).",
            text: "often things that have only ever been worn once or twice."
          },
          {
            kind: "glue",
            html:
              " You get to support good causes, too, of course, because the money you spend goes to charity."
          }
        ]
      },
      {
        speaker: 2,
        keyLetter: "B",
        keyLine: "I don't really care what clothes I wear.",
        prompt:
          "<strong>Speaker 2.</strong> <strong style=\"color:#86efac\">Green</strong> = not fussy about outfits. <strong style=\"color:#fca5a5\">Red</strong> = bait toward confidence (H) or always the same shirt (A).",
        segments: [
          {
            kind: "glue",
            html: "Apparently, "
          },
          {
            kind: "hit",
            sol: "d",
            tempts: "H",
            temptsNote:
              "\u2717 Not H: smart dress boosting confidence is mentioned only to reject it.",
            keyReject: "\u2717 Not B: setup line \u2014 B is the shrug that follows.",
            text:
              "dressing smartly is supposed to increase your self-confidence, but I\u2019ve never felt any different in a jacket and tie"
          },
          {
            kind: "glue",
            html: ". And anyway, "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Doesn\u2019t worry about morning outfit \u2014 core of B.",
            text:
              "I\u2019m not the kind of person who spends time worrying about what to put on in the morning."
          },
          {
            kind: "glue",
            html:
              " Some people take ages, umming and ahhing over what to wear, but "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Grabs first thing in wardrobe \u2014 doesn\u2019t care (B).",
            text:
              "I just throw on the first thing I find in my wardrobe and that\u2019s it."
          },
          {
            kind: "glue",
            html: " Job done. To be honest, "
          },
          {
            kind: "hit",
            sol: "d",
            tempts: "A",
            temptsNote:
              "\u2717 Not A: same T-shirts sounds like A, but the speaker\u2019s point is indifference (B), not a deliberate uniform.",
            keyReject: "\u2717 Not proof of B alone \u2014 pair with the green lines above.",
            text:
              "I\u2019d be happy just wearing the same two or three T-shirts all the time."
          },
          {
            kind: "glue",
            html:
              " The trouble is, I only have time to do my washing once a week, so that wouldn\u2019t work. I may not be fashionable, but I\u2019m not dirty."
          }
        ]
      },
      {
        speaker: 3,
        keyLetter: "D",
        keyLine: "I'm careful to check the origin of the clothes I buy.",
        prompt:
          "<strong>Speaker 3.</strong> <strong style=\"color:#86efac\">Green</strong> = ethical origin / who made the clothes. <strong style=\"color:#fca5a5\">Red</strong> = quality or price traps (G).",
        segments: [
          {
            kind: "glue",
            html:
              "I get suspicious when I go into a clothes shop and see that everything is incredibly cheap. If the prices are so low, then how much are the people who made them getting paid? And what are their working conditions like? "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Checks ethical production \u2014 paraphrase of D.",
            html:
              "I only buy from companies that sell ethical clothing, made by people who earn a decent salary and work in a safe environment."
          },
          {
            kind: "glue",
            html: " "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Researches origin online \u2014 supports D.",
            text:
              "I usually get that kind of information online \u2013 it\u2019s easy enough to find."
          },
          {
            kind: "glue",
            html: " The clothes may not be as cheap and "
          },
          {
            kind: "hit",
            sol: "d",
            tempts: "G",
            temptsNote:
              "\u2717 Not G: denies a quality guarantee \u2014 opposite of \u00abguaranteed to last\u00bb.",
            keyReject: "\u2717 Not D: about price/quality trade-off, not origin.",
            text: "there\u2019s not necessarily any more guarantee of quality"
          },
          {
            kind: "glue",
            html:
              ", but at least I can be confident that no one is being exploited."
          }
        ]
      },
      {
        speaker: 4,
        keyLetter: "H",
        keyLine: "I wear clothes that give me self-confidence.",
        prompt:
          "<strong>Speaker 4.</strong> <strong style=\"color:#86efac\">Green</strong> = feeling good / confidence from clothes. <strong style=\"color:#fca5a5\">Red</strong> = designer refusal (C) or never repeating outfits (A).",
        segments: [
          {
            kind: "glue",
            html:
              "I spend a lot of money on clothes. I don\u2019t really care what they cost. They don\u2019t have to be "
          },
          {
            kind: "hit",
            sol: "d",
            tempts: "C",
            temptsNote:
              "\u2717 Not C: says clothes don\u2019t have to be designer \u2014 not refusing designer labels.",
            keyReject: "\u2717 Not H: contrast word only.",
            text: "designer clothes"
          },
          {
            kind: "glue",
            html: ", but "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Must make speaker feel good \u2014 confidence headline (H).",
            text: "they do have to make me feel good about myself."
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Insecurity disappears when dressed \u2014 confidence (H).",
            text:
              "any feelings of insecurity I have will just disappear as soon as I put it on."
          },
          {
            kind: "glue",
            html:
              " Then when I get to work and someone says, \u2018Hey, that shirt really suits you\u2019, it gives me a big lift. And "
          },
          {
            kind: "hit",
            sol: "d",
            tempts: "A",
            temptsNote:
              "\u2717 Not A: never repeats within a month \u2014 sounds like \u00abalways different\u00bb, not H.",
            keyReject: "\u2717 Not H: habit detail, not the confidence headline.",
            text:
              "I never wear the same thing more than once in the same month."
          },
          {
            kind: "glue",
            html:
              " My colleagues have got used to seeing me in something different every day."
          }
        ]
      },
      {
        speaker: 5,
        keyLetter: "F",
        keyLine: "I only throw clothes away when absolutely necessary.",
        prompt:
          "<strong>Speaker 5.</strong> <strong style=\"color:#86efac\">Green</strong> = only discarding when truly unusable. <strong style=\"color:#fca5a5\">Red</strong> = second-hand / charity angle (E) or quality (G).",
        segments: [
          {
            kind: "glue",
            html: "If I want to go out and get a new T-shirt, for "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Must discard an old one first \u2014 careful disposal (F).",
            text: "example, then I always have to get rid of an old one first."
          },
          {
            kind: "glue",
            html: " And I only do that when "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Only when impossible to keep \u2014 headline F.",
            text:
              "I can\u2019t justify hanging on to it anymore \u2013 either because it\u2019s so scruffy I\u2019m too embarrassed to wear it, or it\u2019s literally falling apart at the seams."
          },
          {
            kind: "glue",
            html: " That\u2019s why "
          },
          {
            kind: "hit",
            sol: "d",
            tempts: "E",
            temptsNote:
              "\u2717 Not E: clothes never reach a charity shop \u2014 opposite of wearing second-hand.",
            keyReject: "\u2717 Not F: explains why not donated, not the discard rule.",
            text: "none of my clothes ever end up in a second-hand shop."
          },
          {
            kind: "glue",
            html: " "
          },
          {
            kind: "hit",
            sol: "e",
            evidenceNote: "Replaces only when useless to anyone \u2014 supports F.",
            text:
              "I replace them, precisely because they\u2019re no use to anyone \u2013 not just me."
          },
          {
            kind: "glue",
            html:
              " I\u2019ve been doing this for some time now, and I\u2019ve noticed that clothes used to last a lot longer; "
          },
          {
            kind: "hit",
            sol: "d",
            tempts: "G",
            temptsNote:
              "\u2717 Not G: complains quality got worse \u2014 not buying guaranteed-to-last items.",
            keyReject: "\u2717 Not F: background on fast fashion, not the discard rule.",
            text:
              "the quality\u2019s got gradually worse and I have to replace things far more often than before."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
