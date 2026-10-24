/**
 * Going vegan Part 7 · Jack (A) — meme phrase cards for Reading Part 7 tab.
 * window.UNIT12_VEGAN_JACK_MEME_CARDS
 */
(function (global) {
  "use strict";

  var JACK =
    "I first wanted to go vegan a few years ago, when I was about thirteen, and learnt about the effects of the meat industry on the environment. But my mum told me to wait until I was older and better informed about what being vegan meant. It was probably sound advice, though I now know it was partly because she couldn't face cooking special meals for me. I totally get that, though, and don't hold it against her. Now that I am a vegan, I'm very much aware of the extra effort involved for non-vegans who invite me round for a meal. I always offer to take a dessert, and the other dinner guests are invariably amazed at how delicious it is.";

  var BASE =
    "../unit12-12-1-restaurants-listening/reading-going-vegan/memes/jack/";

  function card(id, headword, highlight) {
    return {
      id: id,
      img: BASE + id + ".jpg",
      hints: [],
      headword: headword,
      sentence: JACK,
      example: JACK,
      highlight: highlight || headword
    };
  }

  global.UNIT12_VEGAN_JACK_MEME_CARDS = [
    card("jack-go-vegan", "go vegan", "go vegan"),
    card("jack-better-informed", "better informed about", "better informed about what being vegan meant"),
    card("jack-sound-advice", "sound advice", "sound advice"),
    card(
      "jack-couldnt-face-cooking",
      "couldn't face cooking special meals for me",
      "couldn't face cooking special meals for me"
    ),
    card("jack-totally-get-that", "I totally get that", "I totally get that"),
    card("jack-hold-it-against", "don't hold it against her", "don't hold it against her"),
    card("jack-bear-grudge", "don't bear a grudge", "don't hold it against her"),
    card(
      "jack-aware-extra-effort",
      "very much aware of the extra effort",
      "I'm very much aware of the extra effort involved for non-vegans who invite me round for a meal"
    ),
    card(
      "jack-invariably-amazed",
      "invariably amazed at",
      "invariably amazed at how delicious it is"
    )
  ];
})(typeof window !== "undefined" ? window : globalThis);
