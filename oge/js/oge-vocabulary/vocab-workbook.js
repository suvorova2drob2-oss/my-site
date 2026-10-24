/**
 * OGE Vocabulary · workbook phrases, word formation, and the mixed review.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.folderHref = "oge-vocabulary.html";
  pack.folderLabel = "Другие задания Vocabulary";

  function gap(num, before, after, cue, answers, keyShow) {
    return {
      examNum: num,
      paragraph: 1,
      before: before,
      afterInline: after,
      afterTail: "",
      cue: cue,
      answers: answers,
      keyShow: keyShow
    };
  }

  function neg(verb) {
    return ["didn't " + verb, "did not " + verb, "didnt " + verb];
  }

  function choose(word, letter) {
    return [word, letter];
  }

  function abc(a, b, c) {
    return [
      { letter: "A", text: a },
      { letter: "B", text: b },
      { letter: "C", text: c }
    ];
  }

  function pair(a, b) {
    return [
      { letter: "A", text: a },
      { letter: "B", text: b }
    ];
  }

  function pick(num, before, after, choices, answers, keyShow) {
    var row = gap(num, before, after, "", answers, keyShow);
    row.choices = choices;
    return row;
  }

  pack.units.push({
    id: "vocab-phrases-sports",
    unitOrder: 1,
    title: "Phrases · sports",
    examSection: "E · 1–6",
    sectionKicker: "Vocabulary",
    headerTitle: "Phrases",
    instructionHtml: "Выберите правильный вариант ответа.",
    items: [
      pick(1, "I am ", " at sports because I practice a lot.", abc("look", "improve", "good"), choose("good", "c"), "C good"),
      pick(2, "Do you ", " to a sports club?", abc("laze", "belong", "enjoy"), choose("belong", "b"), "B belong"),
      pick(3, "I really ", " myself when I was on holiday.", abc("enjoyed", "listened", "visited"), choose("enjoyed", "a"), "A enjoyed"),
      pick(4, "When we ", " horse-riding, I had the biggest horse.", abc("watched", "rode", "went"), choose("went", "c"), "C went"),
      pick(5, "How often do you go ", " the cinema?", abc("in", "for", "to"), choose("to", "c"), "C to"),
      pick(6, "I don't keep a diary, but I do write a ", " sometimes.", abc("bike", "blog", "skateboard"), choose("blog", "b"), "B blog")
    ]
  });

  pack.units.push({
    id: "vocab-wf-circle",
    unitOrder: 2,
    title: "Word formation · circle",
    examSection: "H · 1–9",
    sectionKicker: "Vocabulary",
    headerTitle: "Word formation",
    instructionHtml: "Обведите правильный вариант ответа.",
    items: [
      pick(1, "Every time my friend enters a ", ", I hope she wins.", pair("competition", "competitive"), ["competition"], "competition"),
      pick(2, "That was a very ", " programme.", pair("entertainment", "entertaining"), ["entertaining"], "entertaining"),
      pick(3, "He decided to study ", " at university.", pair("photograph", "photography"), ["photography"], "photography"),
      pick(4, "Thomas loves horse-riding but his sister isn't ", " at all.", pair("interested", "interesting"), ["interested"], "interested"),
      pick(5, "Some people like ", " things, but some think it's boring.", pair("collection", "collecting"), ["collecting"], "collecting"),
      pick(6, "There were lots of families staying on the ", ".", pair("campsite", "camping"), ["campsite"], "campsite"),
      pick(7, "She wants to be a great ", " one day.", pair("dancer", "dance"), ["dancer"], "dancer"),
      pick(8, "I like the song, but the ", " isn't very good.", pair("sing", "singer"), ["singer"], "singer"),
      pick(9, "The ", " won a prize for her brilliant performance as Cleopatra.", pair("actor", "actress"), ["actress"], "actress")
    ]
  });

  pack.units.push({
    id: "vocab-wf-gaps",
    unitOrder: 3,
    title: "Word formation · gaps",
    examSection: "I · 1–8",
    sectionKicker: "Vocabulary",
    headerTitle: "Word formation",
    instructionHtml: "Заполните пропуски, преобразуя слова так, чтобы предложения имели смысл.",
    items: [
      gap(1, "The ", " dropped his camera and it broke before he could take a picture.", "PHOTOGRAPH", ["photographer"], "photographer"),
      gap(2, "Galina is taking ", " lessons because she wants to perform in a ballet.", "DANCE", ["dance"], "dance"),
      gap(3, "Leon is a book ", " and he has hundreds of them at home.", "COLLECT", ["collector"], "collector"),
      gap(4, "An ", " must be creative and hard-working.", "ART", ["artist"], "artist"),
      gap(5, "I can sing and dance a bit, but my ", " is awful.", "ACT", ["acting"], "acting"),
      gap(6, "When it rains all day and all night, ", " isn't much fun.", "CAMP", ["camping"], "camping"),
      gap(7, "He makes a lot of money because he is a popular ", ".", "ENTERTAIN", ["entertainer"], "entertainer"),
      gap(8, "This simple ", " of some fruit is worth millions of euros.", "DRAW", ["drawing"], "drawing")
    ]
  });

  pack.units.push({
    id: "vocab-past-brackets",
    unitOrder: 4,
    title: "Past simple · brackets",
    examSection: "A · 1–8",
    sectionKicker: "Vocabulary",
    headerTitle: "Past simple",
    instructionHtml: "Раскройте скобки, используя соответствующие формы глаголов.",
    items: [
      gap(1, "I ", " to play until the game was nearly over.", "NOT BEGIN", neg("begin"), "didn't begin"),
      gap(2, "Daniel ", " three sandwiches during the game.", "EAT", ["ate"], "ate"),
      gap(3, "The player ", " the ball.", "CATCH", ["caught"], "caught"),
      gap(4, "She ", " past us on her new bicycle.", "GO", ["went"], "went"),
      gap(5, "Charlie ", " his chess pieces so we could play together.", "BRING", ["brought"], "brought"),
      gap(6, "Nobody ", " to the coach after the match.", "SPEAK", ["spoke"], "spoke"),
      gap(7, "The athlete ", " if he could run any faster.", "NOT KNOW", neg("know"), "didn't know"),
      gap(8, "How much ", " for his shoes?", "CARL / PAY", ["did carl pay"], "Did Carl pay")
    ]
  });

  pack.units.push({
    id: "vocab-past-circle",
    unitOrder: 5,
    title: "Past simple · circle",
    examSection: "B · 9–20",
    sectionKicker: "Vocabulary",
    headerTitle: "Past simple",
    instructionHtml: "Обведите правильный вариант ответа.",
    items: [
      pick(9, "I missed the bus because I ", " up late.", pair("waked", "woke"), ["woke"], "woke"),
      pick(10, "I couldn't remember the answer, but Caroline ", " it.", pair("knew", "knowed"), ["knew"], "knew"),
      pick(11, "Barney ", " his best trousers to the dance.", pair("wore", "weared"), ["wore"], "wore"),
      pick(12, "I stayed awake and ", " the end of the book.", pair("read", "readed"), ["read"], "read"),
      pick(13, "The cat nearly ", " out of the tree!", pair("felt", "fell"), ["fell"], "fell"),
      pick(14, "The wind ", " so hard against the windows I thought they would break.", pair("blowed", "blew"), ["blew"], "blew"),
      pick(15, "The dog ", " all the water in his bowl.", pair("drunk", "drank"), ["drank"], "drank"),
      pick(16, "My best friend ", " me a book for my birthday.", pair("gave", "gaved"), ["gave"], "gave"),
      pick(17, "Is this the person you ", " to yesterday?", pair("speaked", "spoke"), ["spoke"], "spoke"),
      pick(18, "Do you remember when they ", " the cup?", pair("won", "win"), ["won"], "won"),
      pick(19, "She was in the mall yesterday when she ", " her cousin.", pair("meet", "met"), ["met"], "met"),
      pick(20, "I ", " all the way to the station.", pair("run", "ran"), ["ran"], "ran")
    ]
  });

  pack.units.push({
    id: "vocab-choose-21",
    unitOrder: 6,
    title: "Vocabulary · choose",
    examSection: "C · 21–27",
    sectionKicker: "Vocabulary",
    headerTitle: "Choose the answer",
    instructionHtml: "Выберите правильный вариант ответа.",
    items: [
      pick(21, "I was a bit disappointed when the ", " was cancelled at the last minute.", abc("concert", "member", "camera"), choose("concert", "a"), "A concert"),
      pick(22, "The art of ", " is not easy to learn.", abc("actress", "actor", "acting"), choose("acting", "c"), "C acting"),
      pick(23, "Shelley had a fancy dress party and everyone had to ", ".", abc("laze around", "go out", "dress up"), choose("dress up", "c"), "C dress up"),
      pick(24, "When did you last ", " the theatre?", abc("play", "visit", "act"), choose("visit", "b"), "B visit"),
      pick(25, "It's not healthy to stay ", " on such a lovely summer day!", abc("recently", "indoors", "great"), choose("indoors", "b"), "B indoors"),
      pick(26, "Spoons is a new ", " magazine for people interested in cooking.", abc("weekly", "classical", "competitive"), choose("weekly", "a"), "A weekly"),
      pick(27, "Now this is what I call real ", "!", abc("dancer", "interest", "entertainment"), choose("entertainment", "c"), "C entertainment")
    ]
  });

  pack.units.push({
    id: "vocab-verb-box",
    unitOrder: 7,
    title: "Verbs · word box",
    examSection: "D · 28–35",
    sectionKicker: "Vocabulary",
    headerTitle: "Word box",
    instructionHtml: "Заполните пропуски, используя глаголы, данные в рамке. <strong>be · fix · go · hang · ride · sing · take · write</strong>",
    items: [
      gap(28, "The children decided to ", " three songs at the school concert.", "BOX", ["sing"], "sing"),
      gap(29, "'What a terrible day,' he began to ", " in his blog. 'It all started in the morning …'.", "BOX", ["write"], "write"),
      gap(30, "How often do you ", " out with your friends?", "BOX", ["hang"], "hang"),
      gap(31, "Lots of teenagers ", " around at the mall at weekends.", "BOX", ["go"], "go"),
      gap(32, "Samantha wants to ", " very good at cooking but her food always tastes awful.", "BOX", ["be"], "be"),
      gap(33, "Did your dad ", " your skateboard when it broke?", "BOX", ["fix"], "fix"),
      gap(34, "My teacher encouraged me to ", " up a new hobby.", "BOX", ["take"], "take"),
      gap(35, "Jonathan likes to ", " his bike all the way to the shops and back again.", "BOX", ["ride"], "ride")
    ]
  });

  pack.units.push({
    id: "vocab-match-halves",
    unitOrder: 8,
    title: "Match · sentence halves",
    examSection: "E · 36–42",
    sectionKicker: "Vocabulary",
    headerTitle: "Match",
    instructionHtml:
      "Соедините две части предложения. Впишите букву. <strong>a</strong> to the chess club. <strong>b</strong> in a film? <strong>c</strong> to the coach. <strong>d</strong> at the list. <strong>e</strong> to the cinema. <strong>f</strong> at tennis. <strong>g</strong> at the swimming pool today?",
    items: [
      gap(36, "He practised all summer, and now he is really good ", "", "A–G", ["f", "at tennis", "at tennis."], "f at tennis"),
      gap(37, "Frank belongs ", "", "A–G", ["a", "to the chess club", "to the chess club."], "a to the chess club"),
      gap(38, "Tonight, everyone is going ", "", "A–G", ["e", "to the cinema", "to the cinema."], "e to the cinema"),
      gap(39, "Have you ever acted ", "", "A–G", ["b", "in a film", "in a film?"], "b in a film?"),
      gap(40, "I couldn't see my name when I looked ", "", "A–G", ["d", "at the list", "at the list."], "d at the list"),
      gap(41, "The whole team listened carefully ", "", "A–G", ["c", "to the coach", "to the coach."], "c to the coach"),
      gap(42, "Did you have a good time ", "", "A–G", ["g", "at the swimming pool today", "at the swimming pool today?"], "g at the swimming pool today?")
    ]
  });

  pack.units.push({
    id: "vocab-butlins",
    unitOrder: 9,
    title: "Butlins · word formation",
    examSection: "43–50",
    sectionKicker: "Vocabulary",
    headerTitle: "Holiday camps",
    instructionHtml: "Заполните пропуски, преобразуя слово справа.",
    items: [
      gap(43, "In the 1950s and 1960s, many British people went on holiday to holiday camps like Butlins. They were called 'camps' but people didn't go ", " there, they stayed in small rooms called 'chalets'.", "CAMP", ["camping"], "camping"),
      gap(44, "The people who worked at Butlins were called 'Redcoats' and it was their job to make your holiday as ", " as possible.", "INTEREST", ["interesting"], "interesting"),
      gap(45, "There were a lot of different types of ", " to keep all the family amused.", "ENTERTAIN", ["entertainment"], "entertainment"),
      gap(46, "Every morning, the Redcoats would sing the Butlins ", " at breakfast with all the campers, and that was just the start of the fun!", "SING", ["song"], "song"),
      gap(47, "You could enter a sports ", ", like swimming or running.", "COMPETE", ["competition"], "competition"),
      gap(48, "For the artists among the campers, there was also a weekly prize for the best ", " of life in the camp.", "DRAW", ["drawing"], "drawing"),
      gap(49, "For people who liked ", ", there was a dance held every night in the big hall.", "DANCE", ["dancing"], "dancing"),
      gap(50, "The camp ", " would take your picture so you would never forget your holiday.", "PHOTOGRAPH", ["photographer"], "photographer")
    ]
  });
})(typeof window !== "undefined" ? window : this);
