/**
 * Unit 1 · CPE UoE Part 6 — Super-recognisers (no answer key in pack).
 */
(function (W) {
  "use strict";

  var boot = W.__CPE_UOE_PART6_GT__;
  if (!boot || !Array.isArray(boot.units)) return;

  boot.units.push({
    id: "u1_uoe_p6_super_recognisers",
    title: "Super-recognisers",
    instructionHtml:
      "You are going to read a magazine article about people who can never forget a face. " +
      "Seven paragraphs have been removed from the article. Choose from the paragraphs <strong>A&ndash;H</strong> " +
      "the one which fits each gap (<strong>1&ndash;7</strong>). There is one extra paragraph which you do not need to use.",
    passageHead:
      "Police employ them and scientists study them, but what is life like for the rare few who can never forget a face?",
    blocks: [
      {
        html:
          "As a child, Yenny Seo often surprised her mother by pointing out a stranger in the grocery store, remarking it was the same person they passed on the street a few weeks earlier. Likewise, when they watched a movie together, Seo would often recognise &lsquo;extras&rsquo; who&rsquo;d appeared fleetingly in other films. Her mother never thought this was &lsquo;anything special&rsquo;, Seo says, and simply assumed she had a particularly observant daughter.",
      },
      { gap: 1 },
      {
        html:
          "It was only as she started using social media that Seo became self-conscious of her skill. &lsquo;I would start a new class in uni or I would meet people through social gatherings and I would remember visually what kind of photos I&rsquo;d seen them in. I&rsquo;d already be so familiar with them and I&rsquo;d know in my head: &ldquo;Oh, you are that person&rsquo;s sibling, or you used to date so-and-so,&rdquo;&rsquo; she says. &lsquo;But I also knew it&rsquo;d be really creepy if I said that out loud, so I&rsquo;d keep it on the down low and just say: &ldquo;Oh, nice to meet you.&rdquo;&rsquo;",
      },
      { gap: 2 },
      {
        html:
          "Until the early 2000s, little scientific attention was paid to whether all humans possess the same ability to recognise faces. According to Dr David White, now a lead investigator at the Face Research Lab at the University of New South Wales (UNSW), &lsquo;I think intuitively people believe that the way they see the world is the same as others. And I think that scientists had that intuition as well.&rsquo;",
      },
      { gap: 3 },
      {
        html:
          "It may be, he says, that our brains are organised to perform different tasks, &lsquo;like an app on your smartphone.&rsquo; Along with other researchers, White started examining people without impairments, discovering there is &lsquo;tremendous variation&rsquo; in facial recognition ability. From their research, experts have concluded that facial recognition ability lies along a bell curve, like IQ and other human capacities.",
      },
      { gap: 4 },
      {
        html:
          "The underlying cause is still not entirely clear &ndash; it&rsquo;s a new field, with only around 20 scientific papers studying super-recognisers. However, it is suspected that genetics plays a role because identical twins show similar performance, and it has been shown that cortical thickness &ndash; the number of neurons &ndash; in the part of the brain that supports face recognition is a predictor of superior ability. So it appears that certain people like Seo are born with a superpower, as if they were a character in a comic book. But how exactly does this superpower work?",
      },
      { gap: 5 },
      {
        html:
          "Because this is such a rare phenomenon, in 2017 White and his colleagues at UNSW designed a publicly available online screening tool to try to unearth the world&rsquo;s best super-recognisers. When Seo &ndash; then in her mid-20s, gave it a go &ndash; her score was so high that White invited her to come to Sydney for more testing. With more than 100,000 people now tested, Seo still ranks in the top 50.",
      },
      { gap: 6 },
      {
        html:
          "For her part, Seo is perfectly happy with her job as a technician at a pathology lab. However, the diagnosis from White did help her see her abilities in a new light. &lsquo;It made me realise: oh yeah, it&rsquo;s not crazy &ndash; I must have been right the whole time. It&rsquo;s not that I&rsquo;m creepy, but my brain is just wired that way.&rsquo;",
      },
      { gap: 7 },
      {
        html:
          "If so, Dr White and his colleagues at the Face Research Lab at UNSW would be delighted to hear from you.",
      },
    ],
    sourceLine: "Adapted from <em>The Guardian</em>",
    fragments: [
      {
        letter: "A",
        text:
          "Once though, while working at a part-time job at a clothing store, Seo had good cause to deploy her special ability. Staff were shown grainy, hard-to-decipher CCTV footage of a habitual shoplifter; the next time this person entered the shop, Seo instantly recognised them and alerted the security guard.",
      },
      {
        letter: "B",
        text:
          "A recent experiment, which used eye-tracking technology, may shed some light on the matter. White observed that super-recognisers spread their &lsquo;gaze more around the face, which suggests they might be painting a more elaborate picture of the face in their mind&rsquo;s eye.&rsquo;",
      },
      {
        letter: "C",
        text:
          "In fact, most of us are quite adept at recognising the faces of people we know well, no matter how pixelated or grainy a picture may be. Matching unfamiliar faces, though, can be surprisingly challenging even under optimal conditions, and this is problematic because many important tasks depend on this very skill &ndash; matching a traveller to their passport or a CCTV image to a police mugshot.",
      },
      {
        letter: "D",
        text:
          "Seo was unaware that others didn&rsquo;t share her love of the private game she played, where she&rsquo;d spot a person on a bus or the street and then flick through the vast catalogue of faces she kept in her head, trying to place where she&rsquo;d seen them before. &lsquo;Especially as a child, I remember just really enjoying looking at different faces.&rsquo;",
      },
      {
        letter: "E",
        text:
          "So, what about you? Have you also questioned your sanity after recognising a stranger whom you passed on the street years before? Perhaps you easily rattle off a list of movies where you&rsquo;ve seen a particular extra, only to be met by blank stares.",
      },
      {
        letter: "F",
        text:
          "He began to question this while studying a rare condition called prosopagnosia &ndash; when a brain injury leaves someone unable to recognise faces. He was intrigued that while people with this condition couldn&rsquo;t recognise the face of a loved one, they could still recognise other objects.",
      },
      {
        letter: "G",
        text:
          "Perhaps unsurprisingly, the existence of super-recognisers has not gone unnoticed by law enforcement agencies, which have started to actively recruit people with superior facial recognition capabilities. London&rsquo;s metropolitan police, for example, has a special team who examine CCTV footage from crime scenes, and several years ago Queensland police started identifying super-recognisers in its ranks.",
      },
      {
        letter: "H",
        text:
          "Most people fall somewhere in the middle, but a few possess either an exceptionally good or weak ability to identify faces. The 1&ndash;2% of the population at the very top are &lsquo;super-recognisers&rsquo; &ndash; people who only need the briefest glimpse to memorise a face, and who can then store that information for months, years, or even the rest of their lives.",
      },
    ],
  });
})(typeof window !== "undefined" ? window : globalThis);
