/**
 * Unit 3 — My digital detox: FCE/CAE-style Reading Part 5 (6× multiple choice, A–D).
 * Distractor notes + evidence for teaching.
 * @see unit3-digital-detox/exam-mode-reading-p5.html
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;

  G.U3_P5_EXAM = {
    title: "My digital detox",
    blurb: "For questions 1–6, choose the answer (A, B, C or D) which you think fits best according to the text.",
    /**
     * Plain article (no glossary tooltips) for the exam view.
     */
    passage: [
      { part: 1, html: "<p>According to a recent survey by Ofcom, people in the UK spend an average of two and a half hours each day on their smartphones, which they check every twelve minutes. Journalist Steven Rice reveals the steps he took to combat his own obsession.</p><p>Some weeks ago, I downloaded a screen time tracking app onto my phone, just one of a series of measures I adopted to tackle my growing, and potentially unhealthy addiction to the device. Looking back, I had been in obvious denial about how it was affecting my ability to concentrate, and the impact this was having on my work. But I could not ignore my wife&rsquo;s increasingly loud tutting at my frequent scrolling, nor the fact that even my digitally native, generation-Z daughters were rolling their eyes whenever they caught me chuckling at memes or watching cat videos on YouTube.</p><p>It was clearly time for a change; time for a detox.</p>" },
      { part: 2, html: "<p>My newly installed app told me that I was picking up my phone over forty times each day and spending more than four hours online; not as much as some people, perhaps, but this was no consolation. It was still above the national average and no less cause for concern. We shouldn&rsquo;t, of course, go all out to demonise phones; they have become indispensable items, and our online life is often closely intertwined with our offline one. My phone enables me to deal with work-related issues, arrange to meet up with friends, book concert tickets and holidays, and yes, even buy books to read.</p>" },
      { part: 3, html: "<p>But as we all know, there is another, darker side to it all. Our phone addiction, we are told, is making us more anxious and depressed.</p><p>Social media can cause young people, in particular, to feel less confident, as they continually compare themselves to their peers; so-and-so looks better, wears trendier clothes, has more expensive holidays, leads a more interesting life.</p><p>And we are constantly bombarded with information, challenging our ability to focus, causing us to skim briefly rather than pause to reflect on what we read. Our minds have become like butterflies flitting from one subject to another, hindering our ability to apply ourselves for any length of time to one task.</p>" },
      { part: 4, html: "<p>In planning my detox, I took what I considered to be the most useful ideas from a number of books and websites I consulted, with names like <em>How to break up with your phone</em> and <em>Time to Log Off</em>. Despite the titles, none advocated anything as final as a permanent break-up or logging-off. The phone itself is not the problem, but how you use it, so the route to a healthier relationship with technology is to learn moderation and good habits.</p><p>And since this can be quite daunting, it&rsquo;s better to ease yourself into it with a step-by-step rather than an all-at-once approach. My first step was to switch off notifications for all social media apps on my phone.</p>" },
      { part: 5, html: "<p>The result was disappointing. Having my phone on my desk when I worked at home was still a distraction; I kept looking at it, wondering if I was missing out on anything, and sometimes, I&rsquo;m afraid to say, secretly giving in to temptation. &lsquo;Out of sight, out of mind,&rsquo; I thought, and promptly moved it to the kitchen. If I wanted to check for messages, I&rsquo;d have to get up and go to the other end of my flat. As predicted, I soon stopped thinking about the phone and was able to give all my attention to my work.</p><p>Likewise, I banned the device from my bedroom; no more late-night screen time before I turn the light out, or early-morning scrolling as soon as I wake up. I sometimes take a book to bed instead &mdash; though I often nod off after just a page or two.</p>" },
      { part: 6, html: "<p>By the end of the first week, I began switching off my phone completely for a whole morning or afternoon, and now I occasionally leave it at home if I go out in the evening. And what are the benefits? For one thing, I can concentrate on living my own life rather than worrying about what others are doing with theirs. The less time I spend on my phone, the more time I have to myself. My imagination wanders more freely, ideas for articles come more easily and assignments are completed more quickly.</p><p>Oh, and yesterday, only nine pick-ups and forty-three minutes online. Can&rsquo;t be bad.</p>" }
    ],
    /**
     * @type {{ id: number, prompt: string, options: [string, string, string, string], correct: 0|1|2|3, part: string, why: { A: string, B: string, C: string, D: string } }[]}
     */
    questions: [
      {
        id: 1,
        part: "1",
        prompt: "What encouraged the writer to begin a digital detox?",
        options: [
          "the negative effect his phone use was having on his work",
          "the disapproving gestures of his family at his phone use",
          "the realisation that his phone use was harming his health",
          "the results of an app he installed to help limit his phone use"
        ],
        correct: 1,
        why: {
          A: "Distractor: the writer <em>admits</em> denial about work and concentration, but the paragraph presents this <em>alongside</em> his wife&rsquo;s and daughters&rsquo; visible disapproval, which the text frames as what he <strong>could not ignore</strong> (final push in the list before &ldquo;It was clearly time&rdquo;).",
          B: "<strong>Best fit.</strong> &ldquo;I could not ignore my wife&rsquo;s increasingly loud tutting&rdquo; and &ldquo;my&hellip; daughters were rolling their eyes&rdquo; = clear family disapproval that tips him into a detox.",
          C: "Distractor: health is not the focus; nothing here says a medical &ldquo;realisation&rdquo; from a doctor, only awareness of work impact and then family pressure.",
          D: "Distractor: the app already belongs to a <em>package of measures</em> he chose; the exam line asks what <strong>encouraged</strong> him to <strong>begin</strong> the process &mdash; the app is a tool, not the emotional trigger the paragraph stresses last."
        }
      },
      {
        id: 2,
        part: "2",
        prompt: "What feeling does the writer express in the second paragraph?",
        options: [
          "He is annoyed at the influence internet has on our daily lives.",
          "He is pleased that others have worse phone habits than him.",
          "He is convinced of the fact that the phone is a useful tool.",
          "He is worried about how other people might judge him."
        ],
        correct: 2,
        why: {
          A: "Distractor: he does not claim annoyance with &ldquo;the internet&rdquo; in general; the tone is reasoned, not a rant at daily life online.",
          B: "Distractor: &ldquo;not as much as some people&rdquo; is offset by &ldquo;this was no consolation&rdquo; &mdash; he is <em>not</em> smugly pleased.",
          C: "<strong>Best fit.</strong> The paragraph rebalance: don&rsquo;t demonise; phones are &ldquo;indispensable&rdquo;, online life &ldquo;intertwined&rdquo;, and his phone &ldquo;enables&rdquo; work and life tasks &mdash; a measured conviction that the device is <strong>useful</strong> even while his usage is worrying.",
          D: "Distractor: others&rsquo; judgment appears in the <strong>first</strong> part of the text; the second paragraph is not about that fear."
        }
      },
      {
        id: 3,
        part: "3",
        prompt: "The writer compares our minds to butterflies in order to highlight",
        options: [
          "the speed with which we are able to process information.",
          "the attractiveness of our ability to multitask.",
          "the delicate and fragile nature of our brains.",
          "the difficulty we have in concentrating."
        ],
        correct: 3,
        why: {
          A: "Distractor: &ldquo;Speed&rdquo; sounds like flitting, but the writer stresses being unable to <strong>stay on one thing</strong>, not &ldquo;fast processing&rdquo; as a talent.",
          B: "Distractor: multitasking is not presented as &ldquo;attractive&rdquo;; the tone is about overload and skimming, not a compliment to the reader.",
          C: "Distractor: &ldquo;Butterfly&rdquo; here is a metaphor for <strong>restless movement</strong> between ideas, not fragility of the brain in a medical sense.",
          D: "<strong>Best fit.</strong> Butterflies are &ldquo;flitting from one subject to another&rdquo; and the sentence ends with <strong>hindering our ability to apply ourselves&hellip; to one task</strong> = focus difficulty."
        }
      },
      {
        id: 4,
        part: "4",
        prompt: "What advice does the writer give for reducing phone use in the fourth paragraph?",
        options: [
          "Obtain help from a variety of sources.",
          "Switch off the phone regularly.",
          "Introduce changes gradually.",
          "Stop using social media."
        ],
        correct: 2,
        why: {
          A: "Distractor: he mentions books/websites as where he <em>got</em> ideas, but the question asks for the <strong>advice</strong> (how to act), and the key contrast is <strong>step-by-step</strong> vs <strong>all-at-once</strong>.",
          B: "Distractor: he switches off <strong>notifications</strong> for social apps as a <em>first</em> step, not the general advice to power off the whole phone on a regular schedule (too broad for the text).",
          C: "<strong>Best fit.</strong> &ldquo;It&rsquo;s better to ease yourself into it with a step-by-step rather than an all-at-once approach&rdquo; = <strong>gradual</strong> change.",
          D: "Distractor: he does not call for total abstinence; notification-off is a partial measure, and moderation is the theme, not a ban on all social media."
        }
      },
      {
        id: 5,
        part: "5",
        prompt: "The writer uses the expression &lsquo;Out of sight, out of mind&rsquo; to indicate that",
        options: [
          "he could not see enough progress, so he considered giving up the detox.",
          "he could check his messages because he knew nobody could see him.",
          "he felt frustrated at not being able to see the messages on his phone.",
          "he believed he would forget about his phone if he could not see it."
        ],
        correct: 3,
        why: {
          A: "Distractor: nothing links the quotation to &ldquo;giving up&rdquo; the detox; the move to the kitchen is a <strong>strategy that works</strong> (&ldquo;As predicted&hellip; stopped thinking about the phone&rdquo;).",
          B: "Distractor: the point is the opposite: moving the phone away makes it <strong>harder</strong> to check casually, not easier or secret.",
          C: "Distractor: frustration at &ldquo;not seeing messages&rdquo; is the wrong emotion; the writer chose physical distance to <strong>reduce</strong> checking.",
          D: "<strong>Best fit.</strong> The clich&eacute; is applied literally: the phone is moved to another room so it is <strong>out of sight</strong> and he <strong>stops thinking</strong> about it."
        }
      },
      {
        id: 6,
        part: "6",
        prompt: "What improvement to his life does the writer mention?",
        options: [
          "He has become more creative.",
          "He socialises more than before.",
          "He sleeps more deeply at night.",
          "He reads much more than he used to."
        ],
        correct: 0,
        why: {
          A: "<strong>Best fit.</strong> The benefits section lists: &ldquo;My <strong>imagination wanders more freely</strong>, ideas for articles come more easily&rdquo; &mdash; the closest exam option = more <strong>creative</strong> thinking, even though the text does not use that exact adjective.",
          B: "Distractor: he focuses on <em>own time</em> and less focus on &ldquo;what others are doing&rdquo;, not on going out to socialise more.",
          C: "Distractor: sleep depth is not claimed; a book in bed and nodding off is mentioned in part 5, not as a measured &ldquo;improvement&rdquo; in the benefits list in part 6.",
          D: "Distractor: a book in bed in part 5 is occasional; the explicit &ldquo;improvement&rdquo; list in the final part is about imagination, work ideas, and speed of assignments, not &ldquo;much more reading&rdquo; in general."
        }
      }
    ]
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
