/**
 * Unit 1 · SB 1.2 — meme scene briefs (same role as lifestyle/clothes webp art).
 * window.U1_SB12_MEME_SCENE_IMAGES
 */
(function (W) {
  "use strict";

  var STYLE =
    "High-quality 3D animated illustration, Pixar-style, bright cinematic daylight, soft shadows, " +
    "same visual tier as FCE Unit 1 Lifestyle vocabulary meme cards (expressive adults, rich environment). " +
    "Square 1:1 composition. Absolutely NO text, NO words, NO letters, NO numbers, NO speech bubbles on the image. Family-friendly humour.";

  var BRIEFS = {
    "sp1-easy":
      "Woman on a sunny street gesturing at a row of four luxury houses; one relaxed guy with sunglasses in doorway — life looks easy for some.",
    "sp1-fed-up":
      "Exhausted man sitting on stacked moving boxes, half-packed room, cardboard everywhere — fed up with moving again.",
    "sp1-got-rid":
      "Colourful yard sale on a suburban street: sofa, lamps, boxes; seller imagining a sunny Spanish beach and palm trees in the distance — sell up and move abroad.",
    "sp1-said-do":
      "Two friends at a café table outdoors, one shrugging with raised eyebrows, the other leaning in skeptically — did he really promise that?",
    "sp1-not-like-him":
      "Quiet man with zipped lips gesture, calendar and map pinned but no details shared — keeps plans private.",
    "sp2-stressed":
      "Stressed person at messy desk, leaky roof drip, work laptop and bills — work plus house problems.",
    "sp2-wondering":
      "Person politely asking friend who holds yoga mat after class — wondering what the class was like.",
    "sp2-firsthand":
      "Split scene: glowing laptop search results vs two people chatting over tea — online vs real experience.",
    "sp3-get-by":
      "Couple at kitchen table counting few coins in jar, tight budget mood — just getting by.",
    "sp3-applications":
      "Person at laptop surrounded by towering stack of job application envelopes — no luck yet.",
    "sp3-borrowing":
      "Young adult hesitating between parents offering cash and proud folded arms — uncomfortable borrowing.",
    "sp3-sell-car":
      "Small car with FOR SALE sign in driveway, reluctant owner — last option sell the car.",
    "sp5-gained":
      "Student with backpack and passport stamps, collage of abroad memories — gained from two years away.",
    "sp5-finding-work":
      "Graduates confident with CVs, city skyline, handshake icon — easy to find work (optimistic).",
    "sp5-benefits-person":
      "Person growing like plant while CV paper fades to background — personal growth not résumé.",
    "sp5-tolerant":
      "Diverse group in friendly circle, warm colours — more tolerant and accepting difference.",
    "sp5-employable":
      "Two grads looking capable and open-minded, briefcases, lightbulb — employable individuals.",
    "sp5-optimism":
      "Sunny friend gesturing up, other smiling skeptically but kindly — admire your optimism.",
    "sp5-value-home":
      "Travel souvenirs on shelf, person hugging mug looking at photo of home — value life at home.",
    "sp8-strange-dishes":
      "Traveler at table with colourful unfamiliar dishes, curious not disgusted — strange dishes abroad.",
    "sp8-slow-pace":
      "Hot country terrace, fan, hammock, clock moving slowly, relaxed worker — slow pace of life.",
    "sp8-dressing":
      "Traveler surprised by locals in bold elegant outfits — unexpected way of dressing.",
    "sp8-scruffy":
      "Traveler in plain T-shirt beside sharply dressed locals, comic contrast — scruffy by comparison."
  };

  W.U1_SB12_MEME_SCENE_IMAGES = {
    style: STYLE,
    briefs: BRIEFS,
    promptFor: function (id) {
      return STYLE + " Scene: " + (BRIEFS[id] || "Listening SB 1.2 extract.");
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
