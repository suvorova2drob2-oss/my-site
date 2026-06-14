/**
 * Reading Part 7 — Contemporary art: phrase tasks, passages, speaking, freer prompts.
 * Loaded before the main index bundle; uses globals from index (lexExpand, SPEAKING_ROUNDS) afterward.
 */
(function (W) {
    "use strict";

    W.U9_CONTEMP_READING_LABELS = [
        "A Myth: 'Contemporary' is new",
        "B Myth: be impressed by all",
        "C Myth: no beautiful art left",
        "D Myth: vs Western tradition",
        "E Myth: toys for the rich"
    ];

    /** Treasure hunt: paraphrase → exact span (order matches data-id in HTML). */
    W.U9_CONTEMP_A_TASKS = [
        { syn: "Every period has reused the same label for its own art", id: "1" },
        { syn: "Shocking ideas from the past that history now treats as normal", id: "2" },
        { syn: "A dazzling mix of media on offer in a serious gallery today", id: "3" },
        { syn: "The gilded-frame clich\u00e9 no longer holds up today", id: "4" },
        { syn: "If all you want is still images, use a device\u2014not gallery walls", id: "5" },
        { syn: "Calling the tag \u2018new\u2019 is either obvious, crude, or self-serving", id: "6" }
    ];

    W.U9_CONTEMP_B_TASKS = [
        { syn: "You failed to notice what the work was really asking of you", id: "1" },
        { syn: "A visceral reaction matters more than \u2018getting\u2019 an interpretation", id: "2" },
        { syn: "The text says failure is part of the deal\u2014and that has to be accepted", id: "3" },
        { syn: "The maker may not grasp every reading either", id: "4" },
        { syn: "History will thin the crowd; most names will not last", id: "5" },
        { syn: "Not every piece in a museum looks like an old master\u2019s masterpiece", id: "6" },
        { syn: "A brilliant studio idea can still look clumsy on the gallery wall", id: "7" }
    ];

    W.U9_CONTEMP_C_TASKS = [
        { syn: "A lazy stereotype of what \u2018now\u2019 art looks like", id: "1" },
        { syn: "Figurative painting has made a strong comeback in sales and criticism", id: "2" },
        { syn: "You cannot claim the human figure has vanished from serious shows", id: "3" },
        { syn: "Painted bodies back in the spotlight with unusual force", id: "4" },
        { syn: "Warhol\u2019s screen-icon works are still part of the landscape", id: "5" }
    ];

    W.U9_CONTEMP_D_TASKS = [
        { syn: "You blame Western decline for what you dislike in art", id: "1" },
        { syn: "Museums rush to programme work from beyond Europe and North America", id: "2" },
        { syn: "Cynical labels\u2014or plain pragmatism", id: "3" },
        { syn: "The field is far wider than a closed elite", id: "4" },
        { syn: "Exciting names from Nigeria and Latin America get real attention", id: "5" }
    ];

    W.U9_CONTEMP_E_TASKS = [
        { syn: "Moaning about art and money now is locking the door after the escape", id: "1" },
        { syn: "Art has long been a measure of who holds power", id: "2" },
        { syn: "Even a daft trophy buy props up artists, galleries, and a wider scene", id: "3" },
        { syn: "Ordinary visitors are not asked to pay millions to see the same works", id: "4" },
        { syn: "We are morbidly hooked on money talk, not on the objects themselves", id: "5" }
    ];

    /**
     * Typed-gap trainer: [before, after, ans] — ans is the exact chunk to type.
     */
    W.U9_CONTEMP_A_TRIPLES = [
        [
            "Every era has called its own art '",
            "', from the early impressionists to Picasso's experiments with Cubism, and the story of modern art is ",
            "contemporary"
        ],
        [
            "from the early impressionists to Picasso's experiments with Cubism, and the story of modern art is ",
            " that once felt scandalous. To say that the label is a novelty is either screamingly obvious, or crass, or opportunistic. Walk into a serious gallery now and you meet a ",
            "littered with innovations and provocations that once felt scandalous"
        ],
        [
            "Walk into a serious gallery now and you meet a ",
            " of photographs, paintings, sculptures, installation and video; the idea that 'art' is still a framed picture in a gilded frame, meanwhile, is hard to sustain when anyone can post still images in an instant. If you only want a feed of static pictures, you can scroll a screen, not a wall.",
            "dizzying smorgasbord"
        ],
        [
            "Walk into a serious gallery now and you meet a dizzying smorgasbord of photographs, paintings, sculptures, installation and video; the idea that 'art' is still a framed picture in a gilded frame, meanwhile, is ",
            " when anyone can post still images in an instant. If you only want a feed of static pictures, you can scroll a screen, not a wall.",
            "hard to sustain"
        ],
        [
            "If you only want a feed of static pictures, you can ",
            ".",
            "scroll a screen, not a wall"
        ],
        [
            "To say that the label is a novelty is either screamingly obvious, or crass, or ",
            " Walk into a serious gallery now and you meet a dizzying smorgasbord of photographs, paintings, sculptures, installation and video",
            "opportunistic"
        ]
    ];

    W.U9_CONTEMP_B_TRIPLES = [
        [
            "One of the worst things someone can say at an art gallery is, 'My child could do that!' That's not because it's insulting to the artist. It's because ",
            ". Get your child to do it, then!",
            "you've missed a trick"
        ],
        [
            "Sometimes, with art, there isn't much to get \u2013 it's just whether it touches you at a more instinctive, ",
            ". Other times, there is so much to get",
            "gut level"
        ],
        [
            "Other times, there is so much to get, so many potential readings, that you couldn't possibly get all of them anyway. ",
            ", and must be forgiven. Chances are, the artist hasn't either. Not every work that is created and shown is a",
            "Failure is a prerequisite"
        ],
        [
            "Failure is a prerequisite, and must be forgiven. ",
            " Not every work that is created and shown is a",
            "Chances are, the artist hasn't either"
        ],
        [
            "Yet the ",
            ". Remember: no artist sets out to be minor.",
            "sieving process of history will deem that most of them are"
        ],
        [
            "Not every work that is created and shown is a ",
            ". Not every idea that seemed dazzling in the studio",
            "Raphael"
        ],
        [
            "Not every idea that seemed dazzling in the studio comes across as particularly ",
            " in a museum.",
            "deft"
        ]
    ];

    W.U9_CONTEMP_C_TRIPLES = [
        [
            "The clich\u00e9 of contemporary work as so many piles of bricks and 'clouds of wasps' is a ",
            ". In practice we have Gerhard Richter's mysterious blurry paintings",
            "lazy caricature"
        ],
        [
            "In practice we have Gerhard Richter's mysterious blurry paintings, Warhol's multiple Marilyns, and a noticeable ",
            " in auction salerooms and in critical recognition.",
            "return of serious figurative painting"
        ],
        [
            "It is a strange time to claim that the human figure has been ",
            ", when a major show at the Whitechapel Gallery",
            "banished"
        ],
        [
            "can put painted bodies back at the centre of the conversation with an intensity that ",
            ".",
            "has not been seen for a generation"
        ],
        [
            "Warhol's multiple ",
            ", and a noticeable return of serious figurative painting",
            "Marilyns"
        ]
    ];

    W.U9_CONTEMP_D_TRIPLES = [
        [
            "Okay, so ",
            " Fine. But note that contemporary art has very much opened itself up to other continents;",
            "you think that Western art is declining and decadent because the West is decadent and in decline."
        ],
        [
            "these days, no self-respecting museum isn't ",
            " from Africa, Asia or South America.",
            "scrambling to host work"
        ],
        [
            "You could call it tokenism, you could call it ",
            ", but you could also call it common sense.",
            "vampirism"
        ],
        [
            "remind us that the art world isn't necessarily a closed circle; it is ",
            ".",
            "much, much larger than you think"
        ],
        [
            "Fervid interest in the likes of the Nigerian ",
            ", or the Argentine-Swiss Vivian Suter",
            "Njideka Akunyili Crosby"
        ]
    ];

    W.U9_CONTEMP_E_TRIPLES = [
        [
            "To grumble about the relations between art and money is really to try to ",
            ". Everyone kvetches about how much modern art costs",
            "close the stable door once the horse has bolted"
        ],
        [
            "Art has always been a ",
            ". It was like this when the Medici were covering Florence",
            "yardstick of power"
        ],
        [
            "If a billionaire chooses to spend millions on a pile of bricks and rubber, at least they are supporting an artist and a gallery, indeed ",
            " in which other, smaller artists can thrive.",
            "a whole ecosystem"
        ],
        [
            "The general public, meanwhile, ",
            " to enjoy the same stuff, thankfully.",
            "isn't asked to spend millions"
        ],
        [
            "but this is more to do with our grim fascination with money rather than ",
            ".",
            "any specific interest in the works"
        ]
    ];

    /** Inner HTML for #u9v-reading … #u9kik-reading (must match task ids). */
    W.U9_CONTEMP_READING_INNER = {
        u9v:
            '<b style="color:var(--error);font-size:22px;">A Myth: \u2018Contemporary\u2019 is new</b><br><br>' +
            "Every era has called its own art <span class=\"u9v-click\" data-id=\"1\">'contemporary'</span>, from the early impressionists to Picasso's experiments with Cubism, and the story of modern art is <span class=\"u9v-click\" data-id=\"2\">littered with innovations and provocations that once felt scandalous</span>. To say that the label is a novelty is either screamingly obvious, or crass, or <span class=\"u9v-click\" data-id=\"6\">opportunistic</span>. Walk into a serious gallery now and you meet a <span class=\"u9v-click\" data-id=\"3\">dizzying smorgasbord of photographs, paintings, sculptures, installation and video</span>; the idea that 'art' is still a framed picture in a gilded frame, meanwhile, is <span class=\"u9v-click\" data-id=\"4\">hard to sustain</span> when anyone can post still images in an instant. If you only want a feed of static pictures, you can <span class=\"u9v-click\" data-id=\"5\">scroll a screen, not a wall</span>.",
        u9val:
            '<b style="color:var(--error);font-size:22px;">B Myth: be impressed by all</b><br><br>' +
            "One of the worst things someone can say at an art gallery is, 'My child could do that!' That's not because it's insulting to the artist. It's because <span class=\"u9val-click\" data-id=\"1\">you've missed a trick</span>. Get your child to do it, then! It would at the very least pay for their future astronomical student fees. If you will persist in viewing the art world as a joke, just be sure that it isn't at your expense. It's okay to dislike some contemporary art. You're not meant to like everything, or indeed 'get' it. Because that is the big fear: 'Do I get it?' This is, however, looking through the wrong end of the telescope. Sometimes, with art, there isn't much to get \u2013 it's just whether it touches you at a more instinctive, <span class=\"u9val-click\" data-id=\"2\">gut level</span>. Other times, there is so much to get, so many potential readings, that you couldn't possibly get all of them anyway. <span class=\"u9val-click\" data-id=\"3\">Failure is a prerequisite</span>, and must be forgiven. <span class=\"u9val-click\" data-id=\"4\">Chances are, the artist hasn't either</span>. Not every work that is created and shown is a <span class=\"u9val-click\" data-id=\"6\">Raphael</span>. Not every idea that seemed dazzling in the studio comes across as particularly <span class=\"u9val-click\" data-id=\"7\">deft</span> in a museum. Remember: no artist sets out to be minor. Yet <span class=\"u9val-click\" data-id=\"5\">the sieving process of history will deem that most of them are</span>.",
        u9pho:
            '<b style="color:#eab308;font-size:22px;">C Myth: no beautiful art left</b><br><br>' +
            "The clich\u00e9 of contemporary work as so many piles of bricks and 'clouds of wasps' is a <span class=\"u9pho-click\" data-id=\"1\">lazy caricature</span>. In practice we have Gerhard Richter's mysterious blurry paintings, <span class=\"u9pho-click\" data-id=\"5\">Warhol's multiple Marilyns</span>, and a <span class=\"u9pho-click\" data-id=\"2\">noticeable return of serious figurative painting</span> in auction salerooms and in critical recognition. It is a strange time to claim that the human figure has been <span class=\"u9pho-click\" data-id=\"3\">banished</span>, when a major show at the Whitechapel Gallery, Radical Figures, can put painted bodies back at the centre of the conversation with an intensity that <span class=\"u9pho-click\" data-id=\"4\">has not been seen for a generation</span>.",
        u9ric:
            '<b style="color:#a78bfa;font-size:22px;">D Myth: vs Western tradition</b><br><br>' +
            "Okay, so <span class=\"u9ric-click\" data-id=\"1\">you think that Western art is declining and decadent because the West is decadent and in decline</span>. Fine. But note that contemporary art has very much opened itself up to other continents; these days, no self-respecting museum isn't <span class=\"u9ric-click\" data-id=\"2\">scrambling to host work from Africa, Asia or South America</span>. <span class=\"u9ric-click\" data-id=\"3\">You could call it tokenism, you could call it vampirism, but you could also call it common sense</span>. Fervid interest in the likes of the Nigerian <span class=\"u9ric-click\" data-id=\"5\">Njideka Akunyili Crosby</span>, or the Argentine-Swiss Vivian Suter (both contributors to London's Art on the Underground scheme) remind us that the art world isn't necessarily a closed circle; it is <span class=\"u9ric-click\" data-id=\"4\">much, much larger than you think</span>.",
        u9kik:
            '<b style="color:#f87171;font-size:22px;">E Myth: toys for the rich</b><br><br>' +
            "Art has always been a <span class=\"u9kik-click\" data-id=\"2\">yardstick of power</span>. It was like this when the Medici were covering Florence with their self-aggrandising commissions, and it's like this now when a billionaire funds a brand new wing at Tate Modern and gets their name plastered on it. <span class=\"u9kik-click\" data-id=\"1\">To grumble about the relations between art and money is really to try to close the stable door once the horse has bolted</span>. Everyone kvetches about how much modern art costs, but <span class=\"u9kik-click\" data-id=\"5\">this is more to do with our grim fascination with money rather than any specific interest in the works</span>. If a billionaire chooses to spend millions on a pile of bricks and rubber, at least they are supporting an artist and a gallery, indeed <span class=\"u9kik-click\" data-id=\"3\">a whole ecosystem in which other, smaller artists can thrive</span>. <span class=\"u9kik-click\" data-id=\"4\">The general public, meanwhile, isn't asked to spend millions to enjoy the same stuff</span>, thankfully."
    };

    var plainA = W.U9_CONTEMP_READING_INNER.u9v
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    var plainB = W.U9_CONTEMP_READING_INNER.u9val
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    var plainC = W.U9_CONTEMP_READING_INNER.u9pho
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    var plainD = W.U9_CONTEMP_READING_INNER.u9ric
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    var plainE = W.U9_CONTEMP_READING_INNER.u9kik
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    W.U9_CONTEMP_FALL_SPEAKER = "Reading: Contemporary art (Part 7)";

    W.U9_CONTEMP_FALL = [
        { plain: plainA, speaker: W.U9_CONTEMP_FALL_SPEAKER, tasks: W.U9_CONTEMP_A_TASKS },
        { plain: plainB, speaker: W.U9_CONTEMP_FALL_SPEAKER, tasks: W.U9_CONTEMP_B_TASKS },
        { plain: plainC, speaker: W.U9_CONTEMP_FALL_SPEAKER, tasks: W.U9_CONTEMP_C_TASKS },
        { plain: plainD, speaker: W.U9_CONTEMP_FALL_SPEAKER, tasks: W.U9_CONTEMP_D_TASKS },
        { plain: plainE, speaker: W.U9_CONTEMP_FALL_SPEAKER, tasks: W.U9_CONTEMP_E_TASKS }
    ];

    W.U9_SPEAK_FREER_CONTEMPORARY = [
        "The passage says the label \u2018contemporary\u2019 was never a one-off invention. Is there a word or label people overuse in your field today?",
        "One myth is that you are supposed to admire every work. Do you feel pressure to \u2018get\u2019 culture (film, art, music) even when it does nothing for you?",
        "A speaker argues the \u2018no beautiful art left\u2019 idea is a caricature. Can you name a recent show or trend that brought figurative or classical skill back into focus?",
        "Museums are scrambling for work from more continents. Do you see that as real openness, box-ticking, or a bit of both?",
        "The text compares mega-buyers to Medici power. In your view, do billionaires in the arts do more good than harm for smaller creators?",
        "Is it too late to separate art from big money, or was that relationship always there?",
        "The article says the public is not asked to pay millions. What \u2018elitist\u2019 art experience would you still queue for, if any?"
    ];

    W.U9_CONTEMP_SPEAKING_ROUNDS = [
        {
            title: "A Myth: 'Contemporary' is new",
            accent: "#f43f5e",
            contempReadPack: true,
            fullText: plainA,
            phrases: [
                "Every era has called its own art 'contemporary'",
                "littered with innovations and provocations that once felt scandalous",
                "dizzying smorgasbord of photographs, paintings, sculptures, installation and video",
                "hard to sustain",
                "scroll a screen, not a wall",
                "opportunistic"
            ]
        },
        {
            title: "B Myth: be impressed by all",
            accent: "#f43f5e",
            contempReadPack: true,
            fullText: plainB,
            phrases: [
                "you've missed a trick",
                "gut level",
                "Failure is a prerequisite",
                "the sieving process of history will deem that most of them are",
                "Chances are, the artist hasn't either",
                "Raphael",
                "deft"
            ]
        },
        {
            title: "C Myth: no beautiful art left",
            accent: "#eab308",
            contempReadPack: true,
            fullText: plainC,
            phrases: [
                "lazy caricature",
                "noticeable return of serious figurative painting",
                "banished",
                "has not been seen for a generation",
                "Warhol's multiple Marilyns"
            ]
        },
        {
            title: "D Myth: vs Western tradition",
            accent: "#a78bfa",
            contempReadPack: true,
            fullText: plainD,
            phrases: [
                "you think that Western art is declining and decadent because the West is decadent and in decline",
                "scrambling to host work from Africa, Asia or South America",
                "You could call it tokenism, you could call it vampirism, but you could also call it common sense",
                "much, much larger than you think",
                "Njideka Akunyili Crosby"
            ]
        },
        {
            title: "E Myth: toys for the rich",
            accent: "#f87171",
            contempReadPack: true,
            fullText: plainE,
            phrases: [
                "close the stable door once the horse has bolted",
                "yardstick of power",
                "a whole ecosystem in which other, smaller artists can thrive",
                "isn't asked to spend millions to enjoy the same stuff",
                "our grim fascination with money"
            ]
        }
    ];
})(typeof window !== "undefined" ? window : this);
