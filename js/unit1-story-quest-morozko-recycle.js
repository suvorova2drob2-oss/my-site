/**
 * Morozko story quest — recycle clauses (Get, Run, Lifestyle) woven into narrative.
 * window.U1_MOROZKO_RECYCLE_CLAUSES
 */
(function (W) {
  "use strict";

  /** Morozko-flavoured clauses — one per Get, Run, Lifestyle line (book phrases in story). */
  var CLAUSES = [
    /* Get · 7 */
    "If she didn't return, someone would get in touch with every house on the lane. ",
    "She had to finish getting ready in her thin old shawl. ",
    "She didn't get paid enough for all that housework at home. ",
    "On the path her boots got stuck in the snow once. ",
    "She could get by without new clothes for a while. ",
    "By the river she got the chance to sit on a fallen tree. ",
    "She got over her shyness when Morozko spoke softly to her. ",
    /* Run · 8 */
    "The stepmother ran a tight ship — every chore had its time. ",
    "Hard winters run in the family, the neighbors said. ",
    "By midday the stepdaughter was running on empty. ",
    "Morozko asked if she would mind running her eye over the snowy path behind her. ",
    "The village headman was running for office that winter. ",
    "When the wind howled, she wanted to make a run for it back home. ",
    "She was running the risk of freezing if she sat down in the snow. ",
    "The long winter day had to run its course before she could sleep. ",
    /* Lifestyle · Lucas · 10 */
    "Walking through the forest wasn't really her idea of fun. ",
    "She wasn't a fitness fan, but she realised it was important to keep moving. ",
    "In the cottage, old rags were lying all over the place. ",
    "The kitchen was a bit of a mess, she was ashamed to say. ",
    "She sometimes lost track of time when she fed the fire. ",
    "She was passionate about the stories her mother used to tell. ",
    "She once turned up late at the well after a long walk. ",
    "After the forest she wanted to spend a few hours unwinding by the stove. ",
    "On cold nights her bedtime was often after midnight. ",
    "At last she was out like a light as soon as her head hit the pillow. ",
    /* Lifestyle · Maja · 11 */
    "Wherever she walked, she loved the fact that the pines were so quiet. ",
    "The frozen river was only a short walk from the village. ",
    "The lazy stepsister got up reasonably late every morning. ",
    "At dawn the good girl was already setting off for work in the woods. ",
    "The old healer was fully qualified to read the weather signs. ",
    "Hard winters tend to get colder every year in this region. ",
    "On rare free days she could catch up on her sleep. ",
    "She wasn't sure she could carry on doing this much longer. ",
    "It might be time to settle down, she thought by the fire. ",
    "She dreamed of a steady and secure life one day. ",
    "She hadn't made up her mind about forgiving her stepmother yet. ",
    /* Lifestyle · Reo · 7 */
    "The stepdaughter was out all day in the cold forest. ",
    "She didn't get as much exercise as she'd like in deep winter. ",
    "She loved the forest, especially the variety of birds and trees. ",
    "It's not all cuddly lambs in the woods — winter is hard. ",
    "The cold might put some people off walking alone at night. ",
    "She didn't have loads of free time to rest on the way. ",
    "She couldn't see how she would fit marriage into this hard life. ",
    /* Lifestyle · Ben · 6 */
    "Near the ravine you might see her crossing on a rope bridge. ",
    "Her father had to make a living and pay for their small cottage. ",
    "Kind neighbors sometimes provide funding for poor families. ",
    "It was a fairly unconventional way of life, but she kept going. ",
    "The quiet forest works for me, Morozko said with a smile. ",
    "The cold morning air makes me feel alive, the girl thought. "
  ];

  function pool() {
    return CLAUSES.slice();
  }

  function forScene(sceneIndex, sceneCount) {
    var p = pool();
    var a = p[sceneIndex % p.length] || "";
    var b = p[(sceneIndex + sceneCount) % p.length] || "";
    return a + b;
  }

  W.U1_MOROZKO_RECYCLE_CLAUSES = {
    pool: pool,
    forScene: forScene,
    count: CLAUSES.length
  };
})(typeof window !== "undefined" ? window : globalThis);
