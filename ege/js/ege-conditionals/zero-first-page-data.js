/**
 * Контент страницы «Zero & first conditionals» (Grammar Gym).
 * Логика — в ege-grammar-gym-conditionals-zero-first.html; здесь только данные упражнений.
 *
 * Слой данных один на страницу: проще кэш, один запрос, правки контента не трогают разметку.
 */
(function (w) {
  var D = (w.__EGE_CONDITIONALS_ZERO_FIRST__ = w.__EGE_CONDITIONALS_ZERO_FIRST__ || {});

  D.ex1FlipCards = [
    {
      prompt: "If you trust someone, …",
      back:
        "If you trust someone, you <strong>believe</strong> that they <strong>won&rsquo;t let</strong> you <strong>down</strong>.",
    },
    {
      prompt: "If you bully someone, …",
      back:
        "If you <strong>bully</strong> someone, you <strong>are mean</strong> to them and <strong>want</strong> to <strong>hurt</strong> them.",
      backAlt:
        "If you bully someone, you <strong>use</strong> your <strong>power</strong> to <strong>scare</strong> others.",
    },
    {
      prompt: "If you accuse someone, …",
      back:
        "If you <strong>accuse</strong> someone, you <strong>say</strong> they <strong>have done</strong> something bad.",
    },
    {
      prompt: "If you are a liar, …",
      back:
        "If you <strong>are</strong> a <strong>liar</strong>, you <strong>don&rsquo;t tell</strong> the <strong>truth</strong>.",
    },
    {
      prompt: "If you are rich, …",
      back:
        "If you <strong>are rich</strong>, you <strong>have</strong> a lot of money and <strong>assets</strong>.",
    },
    {
      prompt: "If you are lucky, …",
      back:
        "If you <strong>are lucky</strong>, good things <strong>happen</strong> to you <strong>by chance</strong>.",
    },
    {
      prompt: "If you are lazy, …",
      back:
        "If you <strong>are lazy</strong>, you <strong>don&rsquo;t want</strong> to <strong>work</strong> or <strong>make</strong> an <strong>effort</strong>.",
    },
    {
      prompt: "If you look up to someone, …",
      promptRu:
        "Перевод смысла: восхищаться кем-то; равняться на кого-то (видеть в человеке образец).",
      back:
        "If you <strong>look up to</strong> someone, you <strong>admire</strong> and <strong>respect</strong> them.",
    },
    {
      prompt: "If you look down on someone, …",
      promptRu:
        "Перевод смысла: смотреть на кого-то свысока; считать себя лучше другого.",
      back:
        "If you <strong>look down on</strong> someone, you <strong>think</strong> you <strong>are better</strong> than they are.",
    },
  ];

  D.ex2WordBank = [
    "be",
    "call",
    "find",
    "forget",
    "get",
    "leave",
    "see",
    "take",
    "want",
    "work",
  ];

  D.ex2GapRows = [
    {
      before: "If she ",
      after: " at five o'clock, she'll be there by half past seven.",
      display: "leaves",
      answers: ["leaves"],
      explain:
        "First conditional: если речь о будущей реальной возможности, в if-части обычно Present Simple (не will). Для she нужна форма leaves.",
    },
    {
      before: "We ",
      after: " you if we have any problems.",
      display: "will call",
      answers: ["will call", "'ll call", "we'll call", "we will call", "ll call"],
      explain:
        "В главном предложении результата — will + глагол: мы «позвоним», если возникнут проблемы.",
    },
    {
      before: "It might not be a good idea to go out tonight if you ",
      after: " an important test in the morning.",
      display: "are taking",
      answers: ["are taking", "have"],
      explain:
        "Подходит Present Continuous (are taking), когда тест — запланированное событие; иногда вариант have в учебниках тоже допустим.",
    },
    {
      before: "If you ",
      after: " ill all day, you shouldn't come to the club tonight.",
      display: "have been",
      answers: ["have been", "'ve been", "ve been"],
      explain:
        "Состояние «болеешь весь день» до настоящего момента — Present Perfect: have been.",
    },
    {
      before: "If you should ",
      after: " my wallet, call me on my mobile immediately!",
      display: "find",
      answers: ["find"],
      explain:
        "После if you should используется инфинитив без to: should find → в пропуске find.",
    },
    {
      before: "Let's get a different album if you ",
      after: " that one already.",
      display: "have seen",
      answers: ["have seen", "'ve seen", "ve seen"],
      explain:
        "Already указывает на опыт к настоящему моменту — Present Perfect: have seen.",
    },
    {
      before: "If Sean ",
      after: " so hard lately, he'll welcome the chance to have a few days off.",
      display: "has been working",
      answers: ["has been working", "'s been working", "s been working"],
      explain:
        "Lately + длительность до сейчас + he/she — Present Perfect Continuous: has been working.",
    },
    {
      before: "If you're going into town, ",
      after: " a video for tonight while you're there!",
      display: "get",
      answers: ["get"],
      explain:
        "После условия здесь повелительное наклонение (инструкция): Get… без to и без you в начале.",
    },
    {
      before: "If you see Carol tonight, ",
      after: " to say hello from me!",
      display: "don't forget",
      answers: ["don't forget", "do not forget"],
      explain: "Напоминание — отрицательное побуждение: don't forget + to V.",
    },
    {
      before: "Don't feel you have to come if you ",
      after: " to.",
      display: "don't want",
      answers: ["don't want", "do not want"],
      explain: "Здесь обычное настоящее: факт предпочтения — don't want.",
    },
  ];

  D.ex3McqRows = [
    {
      before: "Six months from now I'll be at university",
      opt0: "unless",
      opt1: "if",
      after: "I decide to take a year off first.",
      correct: 0,
      explain:
        "**Unless** ≈ «если только не / кроме случая, когда»: я по плану буду в университете, **если не** решу взять год перерыва. **If** здесь перепутал бы условия.",
    },
    {
      before: "We'd better leave early tomorrow",
      opt0: "unless",
      opt1: "in case",
      after: "there's a lot of traffic when we get to Rye.",
      correct: 1,
      explain:
        "**In case** — «на случай если»: выезжаем заранее, потому что **может** быть пробка. **Unless** с пробкой в такой логике не подходит.",
    },
    {
      before: "You can watch the film",
      opt0: "as long as",
      opt1: "in case",
      after: "you promise to go straight to bed when it ends.",
      correct: 0,
      explain:
        "**As long as** = при условии, что ты пообещаешь… **In case** здесь не вписывается — это не «на случай если», а сделка-условие.",
    },
    {
      before: "Let's go to Mirabella's tonight",
      opt0: "unless",
      opt1: "if",
      after: "you haven't been there before.",
      correct: 1,
      explain:
        "**If** — пойдём, **если** ты там ещё не был (первая попытка). **Unless** с отметанием тут смысл ломает.",
    },
    {
      topOnly: true,
      opt0: "Unless",
      opt1: "So long as",
      after: "I've still got my health, I don't mind how poor I am!",
      correct: 1,
      explain:
        "**So long as** (= as long as) — «пока / если только у меня есть здоровье…». **Unless** с этой мыслью не склеить.",
    },
    {
      before: "You'd better take a sweater with you now",
      opt0: "if",
      opt1: "in case",
      after: "it gets cold tonight.",
      correct: 1,
      explain:
        "**In case** — возьми **на случай если** похолодает. Так советуют «про запас». Чистое **if** хуже ловит эту идею.",
    },
    {
      before: "Do what you like",
      opt0: "provided",
      opt1: "unless",
      after: "you don't make any noise.",
      correct: 0,
      explain:
        "**Provided (that)** = при условии, что не шумишь. **Unless** + отрицание даёт корявую конструкцию.",
    },
    {
      before: "I'm not going to worry",
      opt0: "unless",
      opt1: "as long as",
      after: "she hasn't called by midnight.",
      correct: 0,
      explain:
        "**Unless** здесь задаёт момент, когда тревога включается (типа «если к полуночи так и не будет звонка»). **As long as** с *hasn't called* для этой фразы обычно не ставят.",
    },
  ];
})(typeof window !== "undefined" ? window : this);
