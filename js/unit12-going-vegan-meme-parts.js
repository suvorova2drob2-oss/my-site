/**
 * Unit 12 · Going vegan (Reading Part 7) — meme flip cards by speaker.
 * Back of card = one context sentence only (not the full monologue).
 * window.UNIT12_GOING_VEGAN_MEME_PARTS
 */
(function (global) {
  "use strict";

  function card(folder, id, headword, contextLine, highlight) {
    var line = String(contextLine || "").trim();
    return {
      id: id,
      img: folder + "/" + id + ".jpg",
      hints: [],
      headword: headword,
      sentence: line,
      example: line,
      highlight: highlight || headword
    };
  }

  global.UNIT12_GOING_VEGAN_MEME_PARTS = [
    {
      part: 1,
      label: "A · Jack",
      cards: [
        card(
          "jack",
          "jack-go-vegan",
          "go vegan",
          "I first wanted to go vegan a few years ago, when I was about thirteen, and learnt about the effects of the meat industry on the environment.",
          "go vegan"
        ),
        card(
          "jack",
          "jack-better-informed",
          "better informed about",
          "But my mum told me to wait until I was older and better informed about what being vegan meant.",
          "better informed about what being vegan meant"
        ),
        card(
          "jack",
          "jack-sound-advice",
          "sound advice",
          "It was probably sound advice, though I now know it was partly because she couldn't face cooking special meals for me.",
          "sound advice"
        ),
        card(
          "jack",
          "jack-couldnt-face-cooking",
          "couldn't face cooking special meals for me",
          "It was probably sound advice, though I now know it was partly because she couldn't face cooking special meals for me.",
          "couldn't face cooking special meals for me"
        ),
        card(
          "jack",
          "jack-totally-get-that",
          "I totally get that",
          "I totally get that, though, and don't hold it against her.",
          "I totally get that"
        ),
        card(
          "jack",
          "jack-hold-it-against",
          "don't hold it against her",
          "I totally get that, though, and don't hold it against her.",
          "don't hold it against her"
        ),
        card(
          "jack",
          "jack-bear-grudge",
          "don't bear a grudge",
          "I totally get that, though, and don't hold it against her.",
          "don't hold it against her"
        ),
        card(
          "jack",
          "jack-aware-extra-effort",
          "very much aware of the extra effort",
          "Now that I am a vegan, I'm very much aware of the extra effort involved for non-vegans who invite me round for a meal.",
          "I'm very much aware of the extra effort involved for non-vegans who invite me round for a meal"
        ),
        card(
          "jack",
          "jack-invariably-amazed",
          "invariably amazed at",
          "I always offer to take a dessert, and the other dinner guests are invariably amazed at how delicious it is.",
          "invariably amazed at how delicious it is"
        )
      ]
    },
    {
      part: 2,
      label: "B · Sarah",
      cards: [
        card(
          "sarah",
          "sarah-missing-nutrients",
          "missing out on essential nutrients",
          "My parents were worried I was missing out on essential nutrients and that this could have serious consequences for me.",
          "missing out on essential nutrients"
        ),
        card(
          "sarah",
          "sarah-warning-pitfalls",
          "warning of the pitfalls",
          "My dad had the biggest problem with it, and he kept sending me articles warning of the pitfalls of a plant-based diet.",
          "warning of the pitfalls of a plant-based diet"
        ),
        card(
          "sarah",
          "sarah-put-mind-at-rest",
          "put his mind at rest",
          "I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly.",
          "to put his mind at rest"
        ),
        card(
          "sarah",
          "sarah-taking-supplements",
          "I was taking supplements",
          "I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly.",
          "I was taking supplements"
        ),
        card(
          "sarah",
          "sarah-reinforce-idea",
          "reinforce his idea",
          "I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly.",
          "to reinforce his idea that I wasn't eating properly"
        ),
        card(
          "sarah",
          "sarah-gradually-accept",
          "they've both gradually come to accept",
          "Over time, though, they've both gradually come to accept my change to veganism, and that's really important to me, because it's a major part of who I am.",
          "they've both gradually come to accept my change to veganism"
        )
      ]
    },
    {
      part: 3,
      label: "C · Maya",
      cards: [
        card(
          "maya",
          "maya-kept-faithfully",
          "kept at it faithfully",
          "My sister has kept at it faithfully for over five years and shown amazing willpower.",
          "kept at it faithfully for over five years and shown amazing willpower"
        ),
        card(
          "maya",
          "maya-threw-towel",
          "threw in the towel",
          "There were too many types of food I missed, and I threw in the towel after a few months.",
          "I threw in the towel after a few months"
        ),
        card(
          "maya",
          "maya-on-plus-side",
          "On the plus side",
          "On the plus side, I learnt a surprising amount about nutrition and the health benefits of certain foods.",
          "On the plus side, I learnt a surprising amount about nutrition and the health benefits of certain foods"
        )
      ]
    },
    {
      part: 4,
      label: "D · Justin",
      cards: [
        card(
          "justin",
          "justin-switch-overnight",
          "make the switch overnight",
          "Many people try to make the switch overnight and it can prove too much, so they give up and go back to their vegetarian or meat-based diet.",
          "make the switch overnight"
        ),
        card(
          "justin",
          "justin-do-stages",
          "do it in stages",
          "The key is to do it in stages.",
          "do it in stages"
        ),
        card(
          "justin",
          "justin-reassure-parents",
          "reassure my parents",
          "If I had any questions or concerns, like which health supplements to take, how to reassure my parents I knew what I was doing, or where to buy vegan products, there was always someone who could give me the benefit of their knowledge and experience.",
          "reassure my parents I knew what I was doing"
        ),
        card(
          "justin",
          "justin-benefit-knowledge",
          "the benefit of their knowledge and experience",
          "If I had any questions or concerns, like which health supplements to take, how to reassure my parents I knew what I was doing, or where to buy vegan products, there was always someone who could give me the benefit of their knowledge and experience.",
          "give me the benefit of their knowledge and experience"
        )
      ]
    },
    {
      part: 5,
      label: "E · Rhona",
      cards: [
        card(
          "rhona",
          "rhona-done-ages-ago",
          "I wish I'd done it ages ago",
          "I've only recently changed to a plant-based diet. I wish I'd done it ages ago.",
          "I wish I'd done it ages ago"
        ),
        card(
          "rhona",
          "rhona-took-stand",
          "high time I took a stand against",
          "I'd become increasingly aware of the suffering we cause to animals by what we eat, and I felt it was high time I took a stand against the way we treat them.",
          "I felt it was high time I took a stand against the way we treat them"
        ),
        card(
          "rhona",
          "rhona-let-alone-cook",
          "let alone cook it",
          "My friends only ever want to meet up in burger restaurants, and my parents seem determined not to try vegan food, let alone cook it, which is disappointing — it's not asking much for them to show a little interest.",
          "let alone cook it"
        ),
        card(
          "rhona",
          "rhona-little-interest",
          "not asking much to show a little interest",
          "My friends only ever want to meet up in burger restaurants, and my parents seem determined not to try vegan food, let alone cook it, which is disappointing — it's not asking much for them to show a little interest.",
          "it's not asking much for them to show a little interest"
        ),
        card(
          "rhona",
          "rhona-getting-hang",
          "gradually getting the hang of it",
          "So, anyway, I just cook all my meals for myself now. I'm gradually getting the hang of it, and I like the independence it brings.",
          "I'm gradually getting the hang of it"
        )
      ]
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
