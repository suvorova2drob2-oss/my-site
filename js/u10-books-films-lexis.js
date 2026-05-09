/**
 * Unit 10 — Describing books & films (same pool as unit10-vocabulary/describing-books-films + meanings).
 * Used only in Unit 10 Lexical games (with Part 4 listen) — not mixed into Level 9 pools when filtered.
 */
(function (W) {
  W.LEX_U10_BOOKS_FILMS_SPEAKER_LABEL = "Unit 10 · Describing books & films";

  var PARAS = [
    "Set in 1930s Liverpool, this emotional story of a young orphan is a real tearjerker that will have you reaching for the tissues on more than one occasion. It's a sorrowful, heart-wrenching tale of a child's quest to belong but the author's writing style, just as much as the story, is what makes it such a page-turner; you just can't put down.",
    "It's an odd and fairly far-fetched story that challenges the viewer's credibility; a black comedy that focuses on the friendship of 20-year-old Harold and Maude, who is 79. It is, however, without a doubt a cult classic, its passionate aficionados defending it to the hilt at any and every criticism. Interestingly, it wasn't that well received initially, but on its second release it became a box office hit.",
    "Where are the Children Now is the long-awaited follow-up novel to Where are the Children by Mary Higgins Clark, published in 1975. In keeping with her usual material, the story is a spine-tingling thriller with twists and turns in the narrative, which are bound to keep you on the edge of your seat. The book explores motherhood, what it means to lose a child and be wrongfully convicted of a crime and is a hard-hitting exploration of the failures of the justice system. While, not for the faint hearted, it is highly recommended.",
    "Featuring a remarkable star-studded cast of some of Hollywood's finest, the new film from director Christopher Nolan is nothing short of a masterpiece, with critically acclaimed performances from its main protagonists, some of whom are hotly tipped to be amongst this year's Oscar nominees. In particular, Cillian Murphy's portrayal of a physicist grappling with the devastating effects of science on the world is so utterly spellbinding that you'll be mesmerised throughout."
  ];

  W.U10_BOOKS_FILMS_LEXIS_PLAIN = PARAS.join(" ")
    .replace(/\r\n/g, "\n")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  /** Same twelve headwords as `unit10-vocabulary/describing-books-films` + Exercise 2 (sticky / games use this for full coverage). */
  W.U10_BOOKS_FILMS_EXERCISE_BANK = [
    "box office hit",
    "critically acclaimed",
    "cult classic",
    "far-fetched",
    "hard-hitting",
    "heart-wrenching",
    "long-awaited",
    "page-turner",
    "spellbinding",
    "spine-tingling",
    "star-studded",
    "tearjerker"
  ];

  /** Meaning-style hints (Exercise 2) — English only; fronts must not quote the target phrase. */
  W.U10_BOOKS_FILMS_LEXIS_GAME_ROWS = [
    { hint: "A film that is very successful and earns a lot of money.", ans: "box office hit" },
    { hint: "Something that captures your attention completely — you cannot look away.", ans: "spellbinding" },
    { hint: "A story or film clearly designed to make people cry.", ans: "tearjerker" },
    { hint: "Exciting or frightening in a way audiences enjoy — tension you can feel.", ans: "spine-tingling" },
    { hint: "Hoped for or expected for quite a while before it finally appears.", ans: "long-awaited" },
    { hint: "Makes you feel deeply emotional or very sad while you read or watch.", ans: "heart-wrenching" },
    { hint: "Packed with famous names in the cast list.", ans: "star-studded" },
    { hint: "Hard to believe because the plot or events feel unlikely or unrealistic.", ans: "far-fetched" },
    { hint: "So gripping you keep turning pages — a book you cannot put down.", ans: "page-turner" },
    {
      hint: "Takes on a topic with blunt force and serious impact — not soft or vague criticism.",
      ans: "hard-hitting"
    },
    { hint: "A film with a small but fiercely loyal following — not quite mainstream.", ans: "cult classic" },
    { hint: "Reviewers have praised it very highly — strong critical reception.", ans: "critically acclaimed" }
  ];
})(typeof window !== "undefined" ? window : globalThis);
