/**
 * Unit 9 CPE — Listening Part 3 · Art restoration (Track 9.4)
 * Dialogue transcript aligned with exam / Treasure Hunt pack.
 */
(function () {
  var AUDIO_SRC =
    "https://storage.yandexcloud.net/cpeaudio/RF_C2_SB_Track%209.4.mp3";

  var PARAGRAPHS = [
    "O: So, the working life of a reproduction artist must be quite rewarding? I mean, having a studio chock full of masterpieces from throughout the ages – is it like being immersed in the sum of all western art day in day out?\n\nE: At times you could say so, and while I know it does sound fantastically creative and a bit risqué, it's driven by the tastes of my clients who mostly tend to commission typically populist things, which essentially can be quite dull. You know, those paintings which despite having been lauded by critics over the years are actually not that difficult to do – between you and me I can knock out a Klimt or a Monet in no time, but I'd far rather be presented with something that I could get my teeth into a bit more, something very technically demanding that needs some real thought put into it.",
    "O: Yes, I can totally see where you're coming from. Essentially, it's like when people ask me to stick a vase back together that's just some old family heirloom with only sentimental value. It's hardly a ringing endorsement of my finely honed technical skills. What I really want is to have someone bring me something which entails getting out my microscope and chemical testing kit, not a tube of super glue.\n\nE: For me, the bottom line is people just want to look at a painted version of their favourite painting, because of the kudos of having an actual piece of art in the house, even if there were no way it could be an original. The whole technical prowess part of my job doesn't interest the average buyer either. Then it all becomes more of a chore than a pleasure since, like you, I don't feel like I'm being stretched — it's more like a paint by numbers gig and now and again I feel like telling them to get a print offline.",
    "O: I can imagine! My situation is slightly different in that I'm more embedded within large organisations. They can be pedantic in their requirements, but a technical challenge is almost always there. Especially when working with pigments that have a complex, historical and lengthy production process or certain types of canvas.\n\nE: And how do you go about the research for something like that? How much leeway are you given in terms of time allocated and where do you even start?\n\nO: Well, often I'm part of a team working on a collection and at the outset there'll be at least one art historian and a chemist or forensic art expert tasked with working this out. Sometimes we work to deadlines, but more often than not it's contingent on the problems we uncover as we go along. Working out how to cope with something we hadn't foreseen can mean the deadline goes out the window. For large museums and country houses or palaces, getting it right is paramount so actually they're usually quite generous. The objects restored have to be historically accurate before they are allowed to go on display to the public.",
    "E: Mmm. I see. I'm not sure I'd be any good at heading up that kind of project, I wouldn't like to be constantly juggling so many bits and pieces, but the team aspect sounds nice. As it stands my job can be a bit solitary — you know, isolated up in the studio for hours on end, not that I'm complaining. I'm not sure I want someone around all the time, but I'd often quite like to be able to get someone to cast an eye over what I'm doing when I'm painting something like a Rembrandt. You have to painstakingly layer on the colours and gradually build it up — it's quite time-consuming and tiring and you can lose focus if you're not careful. Obviously, you have the option of going back and correcting what you've done but I find that disrupts my flow.\n\nO: Yes, I see what you mean. With what I do, there's quite a lot of stop start since we're working on small parts of a painting rather than the whole thing at once. It's vital to regularly step away from the microscope to check what we're doing fits in with the work, and we haven't accidentally made a section look out of place.",
    "O: Anyway, going back to the time issue, what about your clients — do they have reasonable expectations as to what is achievable in their timeframe? How do you go about managing this?\n\nE: I have a fairly reliable approach actually, which always works, which is to meet with the customer and talk through timescales and prices, but I have an ace up my sleeve! I show them three examples of the same painting — one which took a couple of days to complete and the others which took a couple of weeks and a month respectively. They soon get the picture so to speak."
  ];

  function splitIntoSentences(paragraph) {
    var chunks = paragraph.split(". ");
    var out = [];
    for (var i = 0; i < chunks.length; i++) {
      var s = chunks[i].trim();
      if (!s) continue;
      if (i < chunks.length - 1) s += ".";
      out.push(s);
    }
    return out;
  }

  var sentences = [];
  for (var p = 0; p < PARAGRAPHS.length; p++) {
    var segs = splitIntoSentences(PARAGRAPHS[p]);
    for (var j = 0; j < segs.length; j++) sentences.push(segs[j]);
  }

  var KEYWORDS = [
    "reproduction",
    "chock",
    "masterpieces",
    "immersed",
    "risqué",
    "risque",
    "populist",
    "lauded",
    "Klimt",
    "Monet",
    "technically",
    "heirloom",
    "endorsement",
    "honed",
    "microscope",
    "chemical",
    "super",
    "glue",
    "kudos",
    "original",
    "prowess",
    "stretched",
    "embedded",
    "organisations",
    "pedantic",
    "pigments",
    "historian",
    "chemist",
    "forensic",
    "contingent",
    "foreseen",
    "deadline",
    "paramount",
    "historically",
    "solitary",
    "isolated",
    "Rembrandt",
    "painstakingly",
    "microscope",
    "reliable",
    "timescales",
    "examples",
    "bottom",
    "outset",
    "picture",
    "stretched"
  ];

  window.CPE_ART_RESTORATION = {
    title: "ART RESTORATION",
    audioSrc: AUDIO_SRC,
    paragraphs: PARAGRAPHS,
    sentences: sentences,
    keywords: KEYWORDS
  };
})();
