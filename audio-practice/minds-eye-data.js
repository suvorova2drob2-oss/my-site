/**
 * Unit 9 CPE — Listening Part 2 · "Painting with the mind's eye" (Workbook Track 10, RF C2)
 * Transcript: workbook 9 By Design, sentence-completion audio.
 */
(function () {
  var AUDIO_SRC =
    "https://storage.yandexcloud.net/cpeaudio/RF_C2_WB_Track%2010.mp3";

  var PARAGRAPHS = [
    "As I'm an artist, I'd like to start by showing you my paintings. This first one shows a cityscape by night. This next one is a forest scene, painted on a glorious spring morning.",
    "I should add at this point that I'm totally blind, so these paintings have been created using only my mind's eye, so to speak. To be clear, I don't expect special dispensation as an artist just because I can't see. I'd like you to judge them on their own merit. I believe my lack of vision actually allows me to perceive the world in an unconventional, yet aesthetically pleasing, way, with any luck!",
    "Most people who are classed as blind actually have some ability to see, albeit severely constrained. For example, they may be able to perceive light, colour and some movement. Many blind artists fall into this category, and their ability to transform the limited input from their eyes into paintings blows my mind.",
    "In addition, many artists were formerly able to see normally, before an accident or illness rendered them blind, so they often paint from memory. If they were already an accomplished artist before losing their sight, they may also use a certain degree of muscle memory, so their hands can paint familiar objects without deliberate control from the brain.",
    "A third type of blind artist uses touch to build 3-D mental models of objects or people, then sculpts either a literal representation of what they have perceived or else a more abstract interpretation, with some features distorted or exaggerated, to striking effect.",
    "As for me, I fall into a very small category of 2-D artists who have been totally blind since birth. So you may be wondering how on earth I do it. The key is that I've had an immensely supportive and patient family who have taken the time to painstakingly describe every aspect of the world around me, year after year. My parents used to take me for long walks through forests and describe everything in powerfully evocative language – not just the objects they could see, but also the nuances of light and shade, the subtle differences in colour, and so on. This non-stop narration allowed me to construct a 3-D model of the world inside my mind, such that soon, I genuinely felt that I could see the forest in some way.",
    "I began drawing initially by etching marks in wooden surfaces, which I could feel with my fingers. Crucially, my parents gave me detailed feedback on my etching – where I was going wrong in my shading, for example – which enabled me to nail that particular skill after a while. As I progressed to drawing with coloured pencils, it took a great deal of trial and error to get it right.",
    "Coloured pencils are terrific up to a point, but you can't feel their texture on the page. Water colours never worked for me at all, because they just feel wet to the touch, which is meaningless to me. I experimented a few times with oil paints, which have a lovely 3D texture once they set, but I always ended up covered in sticky paint! Eventually, I stumbled across acrylic paints, which share that wonderful texture while drying a lot more quickly. So now I paint by building up layers of colours, which allows me to perceive my paintings while they're in progress – although I still sometimes end up covered in paint!",
    "Coming back to the paintings I showed at the beginning, they are created inside my imagination, but they're composites of thousands of views that have been explained to me over the years. Inevitably, I perceive the world differently, which some critics may see as a disadvantage, but fortunately the people who buy my work see it as a plus. While it's wonderful for my work to be appreciated by my respected peers and discerning clients, I still paint mainly because I feel a powerful urge to make sense of the world around me, and to capture that in my art. If others like what I do too, then all the better."
  ];

  function splitIntoSentences(paragraph) {
    var chunks = paragraph.split(". ");
    var out = [];
    for (var i = 0; i < chunks.length; i++) {
      var s = chunks[i].trim();
      if (!s) {
        continue;
      }
      if (i < chunks.length - 1) {
        s += ".";
      }
      out.push(s);
    }
    return out;
  }

  var sentences = [];
  for (var p = 0; p < PARAGRAPHS.length; p++) {
    var segs = splitIntoSentences(PARAGRAPHS[p]);
    for (var j = 0; j < segs.length; j++) {
      sentences.push(segs[j]);
    }
  }

  var KEYWORDS = [
    "artist",
    "cityscape",
    "forest",
    "totally",
    "blind",
    "mind's",
    "dispensation",
    "judge",
    "merit",
    "unconventional",
    "aesthetically",
    "pleasing",
    "classed",
    "severely",
    "constrained",
    "perceive",
    "transform",
    "limited",
    "rendered",
    "memory",
    "accomplished",
    "muscle",
    "touch",
    "models",
    "abstract",
    "interpretation",
    "exaggerated",
    "category",
    "supportive",
    "patient",
    "painstakingly",
    "forests",
    "evocative",
    "narration",
    "etching",
    "wooden",
    "shading",
    "pencils",
    "texture",
    "Water",
    "colours",
    "acrylic",
    "layers",
    "imagination",
    "composites",
    "Inevitably",
    "differently",
    "discerning",
    "powerful",
    "capture"
  ];

  window.CPE_MINDS_EYE = {
    title: "PAINTING WITH THE MIND'S EYE",
    audioSrc: AUDIO_SRC,
    paragraphs: PARAGRAPHS,
    sentences: sentences,
    keywords: KEYWORDS
  };
})();
