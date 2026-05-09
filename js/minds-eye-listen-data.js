/**
 * Unit 9 — Listening Part 2 · Painting with the mind's eye (Workbook Track 10, RF C2).
 * Aligned with audio-practice/minds-eye-data.js and the disk exam task.
 */
(function (W) {
  var P = (W.MINDS_EYE_PARAS = [
    "As I'm an artist, I'd like to start by showing you my paintings. This first one shows a cityscape by night. This next one is a forest scene, painted on a glorious spring morning.",
    "I should add at this point that I'm totally blind, so these paintings have been created using only my mind's eye, so to speak. To be clear, I don't expect special dispensation as an artist just because I can't see. I'd like you to judge them on their own merit. I believe my lack of vision actually allows me to perceive the world in an unconventional, yet aesthetically pleasing, way, with any luck!",
    "Most people who are classed as blind actually have some ability to see, albeit severely constrained. For example, they may be able to perceive light, colour and some movement. Many blind artists fall into this category, and their ability to transform the limited input from their eyes into paintings blows my mind.",
    "In addition, many artists were formerly able to see normally, before an accident or illness rendered them blind, so they often paint from memory. If they were already an accomplished artist before losing their sight, they may also use a certain degree of muscle memory, so their hands can paint familiar objects without deliberate control from the brain.",
    "A third type of blind artist uses touch to build 3-D mental models of objects or people, then sculpts either a literal representation of what they have perceived or else a more abstract interpretation, with some features distorted or exaggerated, to striking effect.",
    "As for me, I fall into a very small category of 2-D artists who have been totally blind since birth. So you may be wondering how on earth I do it. The key is that I've had an immensely supportive and patient family who have taken the time to painstakingly describe every aspect of the world around me, year after year. My parents used to take me for long walks through forests and describe everything in powerfully evocative language – not just the objects they could see, but also the nuances of light and shade, the subtle differences in colour, and so on. This non-stop narration allowed me to construct a 3-D model of the world inside my mind, such that soon, I genuinely felt that I could see the forest in some way.",
    "I began drawing initially by etching marks in wooden surfaces, which I could feel with my fingers. Crucially, my parents gave me detailed feedback on my etching – where I was going wrong in my shading, for example – which enabled me to nail that particular skill after a while. As I progressed to drawing with coloured pencils, it took a great deal of trial and error to get it right.",
    "Coloured pencils are terrific up to a point, but you can't feel their texture on the page. Water colours never worked for me at all, because they just feel wet to the touch, which is meaningless to me. I experimented a few times with oil paints, which have a lovely 3D texture once they set, but I always ended up covered in sticky paint! Eventually, I stumbled across acrylic paints, which share that wonderful texture while drying a lot more quickly. So now I paint by building up layers of colours, which allows me to perceive my paintings while they're in progress – although I still sometimes end up covered in paint!",
    "Coming back to the paintings I showed at the beginning, they are created inside my imagination, but they're composites of thousands of views that have been explained to me over the years. Inevitably, I perceive the world differently, which some critics may see as a disadvantage, but fortunately the people who buy my work see it as a plus. While it's wonderful for my work to be appreciated by my respected peers and discerning clients, I still paint mainly because I feel a powerful urge to make sense of the world around me, and to capture that in my art. If others like what I do too, then all the better."
  ]);

  W.U9_MINDS_EYE_TRANSCRIPT_PARAS = P;

  /**
   * Treasure Hunt: paraphrase hints and exact transcript chunks (in order of first occurrence).
   */
  W.LEX_MINDS_EYE_DATA = [
    { hint: "A night view of a city; two nouns, last one 'night'", before: "", after: "", ans: "a cityscape by night" },
    { hint: "A beautiful morning in spring (fixed phrase in the first paragraph)", before: "", after: "", ans: "a glorious spring morning" },
    { hint: "Completely without sight: two words", before: "", after: "", ans: "totally blind" },
    { hint: "Imagination, not the physical eyes (three-word set phrase with apostrophe)", before: "", after: "", ans: "my mind's eye" },
    { hint: "Favouritism or easier rules just because of disability", before: "", after: "", ans: "special dispensation" },
    { hint: "Judge the work for itself, not for who made it (fixed phrase with 'own')", before: "", after: "", ans: "on their own merit" },
    { hint: "Not the usual, conventional, or mainstream; adjective in the first long paragraph", before: "", after: "", ans: "unconventional" },
    { hint: "Pleasing to the senses / looks; two-word adjective + participle", before: "", after: "", ans: "aesthetically pleasing" },
    { hint: "Strict limits on what can be seen: adverb + adjective (two words)", before: "", after: "", ans: "severely constrained" },
    { hint: "The body 'remembers' a movement: two-word compound (two words, second is 'memory')", before: "", after: "", ans: "muscle memory" },
    { hint: "A non-literal, conceptual reading of form: two-word collocation, second word 'interpretation'", before: "", after: "", ans: "abstract interpretation" },
    { hint: "Describe the world in patient, very detailed, step-by-step language: adverb + verb (two words)", before: "", after: "", ans: "painstakingly describe" },
    { hint: "Language that brings images to life; two words, first 'evocative'", before: "", after: "", ans: "evocative language" },
    { hint: "Water-based plastic medium: two words, 'acrylic' + material", before: "", after: "", ans: "acrylic paints" },
    { hint: "The selling point: she experiences reality unlike others: four words, verb + object + adverb", before: "", after: "", ans: "perceive the world differently" }
  ];

  W.U9_MINDS_EYE_TH_TASKS = W.LEX_MINDS_EYE_DATA.map(function (d, i) {
    return { syn: d.hint, id: String(i + 1) };
  });

  /**
   * Minds eye **Word Bank (Memrise-style)** + flip / drop / micro / Sticky: paraphrase (EN) + optional glossRu + exact phrase.
   * Treasure Hunt still uses the full `LEX_MINDS_EYE_DATA` order for on-page taps; author extra rows only here and listed packs.
   */
  W.u9MindsEyeWbDedupKey = function (ans) {
    var t = String(ans || '')
      .toLowerCase()
      .replace(/\u2019|\u2018/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
    if (t === "mind's eye" || t === 'minds eye') return "my mind's eye";
    if (t === 'acrylics') return 'acrylic paints';
    return t;
  };

  W.U9_MINDS_EYE_WB_LEAD = [
    {
      phrase: 'nail that particular skill',
      paraphrase:
        "Her parents said what was wrong with her etching; after a while she could get that part of the technique right.",
      glossRu: 'отточить навык до совершенства'
    },
    {
      phrase: 'on their own merit',
      paraphrase:
        'She wants the pictures judged on their intrinsic quality alone, not favoured because the artist is blind.',
      glossRu: 'по их собственным достоинствам, за самих себя, а не по снисхождению'
    },
    {
      phrase: 'a powerful urge',
      paraphrase:
        "She still paints because she feels a very strong, almost irresistible need to make sense of the world in her work.",
      glossRu: 'сильное, непреодолимое желание'
    },
    {
      phrase: 'powerfully evocative',
      paraphrase:
        'In the forest walks, their descriptions used language that brought strong images and feelings to mind, not just names of things.',
      glossRu: 'вызывающий сильные эмоции и образы'
    },
    {
      phrase: 'discerning clients',
      paraphrase:
        'People who buy her work include respected peers and buyers with taste and judgment, not only casual viewers.',
      glossRu: 'взыскательные, знающие толк клиенты'
    },
    {
      phrase: 'a cityscape by night',
      paraphrase:
        'In the first painting, her opening scene is a nocturnal view over a city, two headwords, the last one is a synonym of evening darkness in context.',
      glossRu: 'городской пейзаж ночью'
    },
    {
      phrase: 'a glorious spring morning',
      paraphrase:
        'The next canvas is a wood painted on a beautiful, bright day in the spring, as a set phrase in the opening monologue.',
      glossRu: 'прекрасное/славное весеннее утро (устойчивый образ)'
    },
    {
      phrase: 'totally blind',
      paraphrase:
        "She is completely without physical sight, two short words, first one an intensifier meaning 'altogether/categorically' (common exam stack).",
      glossRu: 'совершенно, полностью слепой (не `absolute`)'
    },
    {
      phrase: "my mind's eye",
      paraphrase:
        "The pictures are 'seen' in imagination only; a three-word set phrase with an apostrophe, the middle word is the organ of seeing.",
      glossRu: 'мой «внутренний взгляд», воображение, не сетчатка'
    },
    {
      phrase: 'special dispensation',
      paraphrase:
        'She is clear that she should not be given an easier set of rules or a blind pass in judging, just because she has no sight.',
      glossRu: 'особая поблажка, снисхождение, отмена норм'
    },
    {
      phrase: 'unconventional',
      paraphrase:
        'Her take on the world is not the usual, mainstream, or middle-of-the-road; one strong adjective in the same sentence as a positive aesthetic judgement.',
      glossRu: 'нетрадиционный, нешаблонный'
    },
    {
      phrase: 'aesthetically pleasing',
      paraphrase:
        'She hopes others find the work good on the eye and satisfying to the senses, two word-types in an evaluative collocation, second part is a participle of the verb to please (like in music).',
      glossRu: 'эстетически приятный, благоприятный для взгляда (регистр/стиль/эссе и CAE/Prof)'
    },
    {
      phrase: 'severely constrained',
      paraphrase:
        "Most so-called 'blind' people still have some light or movement, but the input from their eyes is in very hard limits, adverb + adjective, second word = limited/shut in.",
      glossRu: 'сильно ограничен (зрение); жёстче, чем limited/restricted'
    },
    {
      phrase: 'muscle memory',
      paraphrase:
        'A trained hand can still paint familiar shapes with almost no conscious control from the brain, two-word body-memory collocation, second is what you store facts in.',
      glossRu: 'моторная/мышечная память, автоматизм движений'
    },
    {
      phrase: 'abstract interpretation',
      paraphrase:
        'A sculpture may copy reality or be a more conceptual, non-literal read of a form, two content words, last one is the noun for how you read a piece.',
      glossRu: 'абстрактная интерпретация (нелитеральное прочтение формы)'
    },
    {
      phrase: 'painstakingly describe',
      paraphrase:
        "Her family would walk with her in woods and, year after year, go through the world in very patient, minute detail, adverb + bare verb, first word like 'laborious effort'.",
      glossRu: 'тщательно, с большим трудом описывать'
    },
    {
      phrase: 'evocative language',
      paraphrase:
        'The wording did not just list objects: it was rich enough to make pictures and feeling spring to mind, two-word pair, adjective/derived collocation, first = related to *evoke*.',
      glossRu: 'образный, ёмкий язык; вызывающий в памяти образы/настроения'
    },
    {
      phrase: 'acrylic paints',
      paraphrase:
        "She moved from oils, which stick to her hands, to this water-based, fast-drying medium that still has a touchable 3D surface when dry, two word chunk, adjective in everyday nail polish too.",
      glossRu: 'акриловые краски (не масло/не гуашь)'
    },
    {
      phrase: 'perceive the world differently',
      paraphrase:
        "Her experience of events is not the same as other people's, four-word verb phrase, often cited as a plus when selling her work, last word = not in the same way as others",
      glossRu: 'воспринимать/видеть мир иначе (сильный четырёхсловник для эссе)'
    }
  ];

  /**
   * Sentence-completion keys (same as disk exam) — one primary ans per line for app pipelines.
   */
  W.U9_MINDS_EYE_SC_DATA = [
    {
      hint: "Mental image / imagination: a fixed three-word chunk (with apostrophe).",
      before: "The artist uses images from her ",
      after: " to create her paintings.",
      ans: "mind's eye"
    },
    {
      hint: "Two-word evaluative collocation: how something looks. US spelling of the adverb also possible.",
      before: "Although she admits her paintings are unusual, she hopes people find them ",
      after: ".",
      ans: "aesthetically pleasing"
    },
    {
      hint: "Two words: a strong adverb + past-participle adjective; limitation on seeing.",
      before: "She is captivated by the talent of artists whose eyesight is ",
      after: ".",
      ans: "severely constrained"
    },
    {
      hint: "A two-word compound: the body 'remembers' a movement without thinking.",
      before: "Some artists use ",
      after: " to paint almost subconsciously.",
      ans: "muscle memory"
    },
    {
      hint: "Noun + noun: a non-literal way of reading form.",
      before: "The shape of certain objects may be altered to create a kind of ",
      after: " of them.",
      ans: "abstract interpretation"
    },
    {
      hint: "A two- or three-word phrase about language that evokes images (with or without optional adverb 'powerfully').",
      before: "The artist learnt to understand the world around her by listening to the ",
      after: " used by her parents.",
      ans: "evocative language"
    },
    {
      hint: "A single art-technique noun: light and dark on a surface.",
      before: "She mastered the art of ",
      after: " by creating wood etchings.",
      ans: "shading"
    },
    {
      hint: "The medium: short plural or two-word name with the same adjective.",
      before: "The artist expresses a strong preference for using ",
      after: " in her work.",
      ans: "acrylics"
    },
    {
      hint: "A four-word verb phrase: how she experiences reality vs others.",
      before: "As the artist sees it, other artists and art collectors see her ability to ",
      after: " as a selling point.",
      ans: "perceive the world differently"
    }
  ];

  W.U9_SPEAK_FREER_LISTEN_MINDS = [
    "The speaker is totally blind and paints from a mental image. How could you describe a place to someone who has never seen it so they can almost 'see' it?",
    "She does not want 'special dispensation' as an artist. When should a disadvantage lead to a different standard, and when should the rules be the same for everyone?",
    "The talk contrasts artists whose vision is 'severely constrained' with other categories. How important is a little sight compared to no sight in everyday life tasks?",
    "Some artists use 'muscle memory' to paint. What is something you can do on autopilot without looking?",
    "Sculpting can be a literal copy or a more 'abstract interpretation'. When do you prefer abstract art to realistic art?",
    "Her family used 'evocative language' to describe the world. Who helped you see something clearly through words as a child?",
    "She links 'shading' to etching in wood. How would you teach light and dark to someone who feels but cannot see a drawing?",
    "She prefers 'acrylics' to water colours. What material do you like to work with, and what puts you off?",
    "The listener must complete 'perceive the world differently' as a positive selling point. Can a way of seeing that critics dislike still be a strength in art or in life?"
  ];
})(typeof window !== "undefined" ? window : this);
