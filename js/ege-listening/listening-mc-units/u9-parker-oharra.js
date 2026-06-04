/**
 * ЕГЭ Listening MC · Unit 9 · Parker O'Harra · musical theatre auditions.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-parker-oharra",
    unitOrder: 9,
    title: "Unit 9 · Parker O'Harra",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Mary & Parker O'Harra · musical theatre auditions",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/9/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%209%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Ловушки варианта 9:</strong></p>" +
      "<ul>" +
      "<li><strong>3:</strong> intro говорит про adults, children и teens; в контексте current show features <strong>teens and kids</strong>.</li>" +
      "<li><strong>4:</strong> 18th of August = дата; 5th anniversary = программе; friendship = sandbox some <strong>30 years</strong>.</li>" +
      "<li><strong>5:</strong> Parker ищет willing to grow, не fame/play games.</li>" +
      "<li><strong>6:</strong> must: popular musicals + sing/play well; <em>crazy about musicals</em> сказано о theatre community, не о participants.</li>" +
      "<li><strong>7:</strong> before auditions нужно know/find vocal range.</li>" +
      "<li><strong>8:</strong> treble is similar to adult mezzo-soprano → подходит по тембру.</li>" +
      "<li><strong>9:</strong> trying to guess what board wants = game over; be a surprise → impress the casting board.</li>" +
      "</ul>",
    questions: [
      {
        examNum: 3,
        prompt: "Which group of people does the program target?",
        key: 3,
        choices: [
          { num: 1, text: "Young adults." },
          { num: 2, text: "Children." },
          { num: 3, text: "Teenagers." }
        ],
        explainRu:
          "В начале перечислены разные возрастные группы, но Parker затем уточняет, что show features <em>teens and kids</em>; из вариантов лучший фокус — teenagers.",
        distractorWrongRu: {
          1: "Young adults упоминаются как те, кто still like to play on stage, но не основной casting focus.",
          2: "Kids тоже названы, но в вариантах ЕГЭ ключевой фокус связан с teens / teenage voices."
        }
      },
      {
        examNum: 4,
        prompt: "Parker O'Harra has been friends with Mary for...",
        key: 3,
        choices: [
          { num: 1, text: "5 years." },
          { num: 2, text: "18 years." },
          { num: 3, text: "30 years." }
        ],
        explainRu:
          "Parker вспоминает: <em>playing in the sandbox some thirty years ago</em>. 18th of August — дата, 5th anniversary — годовщина программы.",
        distractorWrongRu: {
          1: "5th anniversary относится к программе, не к дружбе.",
          2: "18th of August — дата интервью."
        }
      },
      {
        examNum: 5,
        prompt: "As a casting director, Parker is looking for someone who wishes to...",
        key: 1,
        choices: [
          { num: 1, text: "develop." },
          { num: 2, text: "play games." },
          { num: 3, text: "be famous." }
        ],
        explainRu:
          "Parker: <em>participants who have layers and are willing to grow. That's the ultimate goal</em> → develop.",
        distractorWrongRu: {
          2: "Play games — это пример неправильной мотивации.",
          3: "Only goal is to become famous — таких отсеивают."
        }
      },
      {
        examNum: 6,
        prompt: "Which of the following is NOT mentioned by Parker as a must for show participants?",
        key: 1,
        choices: [
          { num: 1, text: "Being crazy about musicals." },
          { num: 2, text: "Being good at performing on stage." },
          { num: 3, text: "Being aware of different musicals." }
        ],
        explainRu:
          "Parker говорит, что theatre community is crazy about musicals, но не что participants must be crazy. Must: know popular musicals + sing/play well.",
        distractorWrongRu: {
          2: "Should be able to sing and play and do both things really well.",
          3: "Should know about the most popular musicals."
        }
      },
      {
        examNum: 7,
        prompt: "What should participants do before auditions?",
        key: 2,
        choices: [
          { num: 1, text: "Listen to specific songs." },
          { num: 2, text: "Find their vocal range." },
          { num: 3, text: "Master a virtual piano." }
        ],
        explainRu:
          "Parker: <em>If you don't know your vocal range, it's time to find out what it is</em>. Keyboard/virtual piano — инструмент, чтобы это сделать.",
        distractorWrongRu: {
          1: "На сайте есть list of audition songs, но формулировка listen to specific songs не является главным действием.",
          3: "Virtual piano нужен для проверки диапазона, не как skill to master."
        }
      },
      {
        examNum: 8,
        prompt: "Why should teenagers audition with mezzo-soprano songs?",
        key: 2,
        choices: [
          { num: 1, text: "They have adult voices." },
          { num: 2, text: "They fit their singing timbre." },
          { num: 3, text: "This is what is expected of them." }
        ],
        explainRu:
          "Treble is similar to the adult mezzo-soprano, so for teenagers who have overgrown child-friendly pieces this repertoire fits their voice type.",
        distractorWrongRu: {
          1: "Parker says before their voice transforms into adult voice.",
          3: "He advises checking repertoire, not because it is formally expected."
        }
      },
      {
        examNum: 9,
        prompt: "During the auditions participants should...",
        key: 3,
        choices: [
          { num: 1, text: "sing their hearts out." },
          { num: 2, text: "prove they are talented." },
          { num: 3, text: "impress the casting board." }
        ],
        explainRu:
          "Advice: <em>If you're trying to guess what we want, it's game over. Be a surprise!</em> → нужно впечатлить, а не угадывать.",
        distractorWrongRu: {
          1: "Sing their hearts out — про места, где Parker ищет новых людей, не совет на auditions.",
          2: "Talent is general, but direct advice is be a surprise."
        }
      }
    ],
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Hello, hello, my dear listeners! I know that many of you who are now about forty or fifty wished to become actors back when you were kids. And some of you who are in your twenties would still like to play on stage one day. And if you are around ten — well, the world is your oyster and your parents are the ones who can help you right now. So we are here today to do our part, aren't we, Parker?"
          },
          { speaker: "Parker O'Harra", text: "Indeed, we are, Mary." },
          {
            speaker: "Presenter",
            text:
              "Parker O'Harra is a founder of a theatre company, a producer, a casting director seeking a cast for his new show, and a friend of mine. Parker, I can't even express how delighted I am to see you here today, the 18th of August — the 5th anniversary of our program."
          },
          {
            speaker: "Parker O'Harra",
            text:
              "Mary, the pleasure is mine. Remember when we were playing in the sandbox some thirty years ago, and I told you that we'd be famous one day and you didn't believe me? Well, here we are (laughs)."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Yes, here we are! But let's quit reminiscing and focus on the issue at hand. Tell me, Parker, how do you determine who is the right fit for your show?"
          },
          {
            speaker: "Parker O'Harra",
            text:
              "First of all, what's really important to me as a show runner is authenticity. It's the key. We want to weed out anyone whose only goal is to become famous. If someone comes on the show to get a check on a social net, or to play games, this is not our person. We take it very seriously, and we want participants who have layers and are willing to grow. That's the ultimate goal of the show."
          }
        ]
      },
      {
        turns: [
          { speaker: "Presenter", text: "So, just that? No knowledge, no skills?" },
          {
            speaker: "Parker O'Harra",
            text:
              "Both are important, but authenticity is the key. Right now, when the theatre community is crazy about musicals, the show features teens and kids making their first steps into the wonderful world of musical theatre. And yes, answering your questions, our participants should know about the most popular musicals and should be able to sing and play and do both things really well."
          },
          {
            speaker: "Presenter",
            text:
              "What should participants or their parents do to make their kids ready for auditions?"
          },
          {
            speaker: "Parker O'Harra",
            text:
              "Well, first they should check our website for the list of audition songs that are specific to the show. We are looking for participants of various vocal ranges, so, there is no need to learn songs outside your vocal range. If you don't know your vocal range, it's time to find out what it is. Knowing and understanding it is an important part of moving forward in your musical journey. And it's very simple! All you need is a keyboard or a virtual piano, a few spare minutes, and no one around so that you will have no self-consciousness when you are belting out the notes."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Is that also true for younger kids who haven't reached their vocal maturity yet?"
          },
          {
            speaker: "Parker O'Harra",
            text:
              "Oh, trebles! This is what we call the voice type that teens often fall into before their voice transforms into their adult voice. Treble is similar to the adult mezzo-soprano. So, if you are a teenager who has overgrown child-friendly pieces, check out the adult mezzo-soprano repertoire. And please, don't hold onto an idea like, \"I know, I'm definitely a soprano\", which could cause you to sing songs that are absolutely wrong for you. You could have been one when you were five, but your voice changes and so does your repertoire. So I'd suggest you read audition details carefully, as they might specify the type of song we would like to hear. It might be a ballad, or something up-tempo, for example."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Do you choose participants only through auditions, or is there a chance to skip the queue?"
          },
          {
            speaker: "Parker O'Harra",
            text:
              "The majority of our participants come through official auditions, yet we are ready to go the extra mile and turn over every rock to find every talent that lies below all those places you wouldn't ordinarily look. We are out looking for new faces constantly. We find some of them by going to places where people act and sing their hearts out and get coins tossed at them. With kids, we attend school plays and drama-class rehearsals, we stop by playgrounds and tune in when hearing a mom and a daughter singing cheerfully while shopping."
          },
          {
            speaker: "Presenter",
            text:
              "What would you advise those auditioning for your show?"
          },
          {
            speaker: "Parker O'Harra",
            text:
              "If you're trying to guess what we want, it's game over. Be a surprise!"
          }
        ]
      }
    ],
    huntLabs: [
      {
        examNum: 3,
        key: 3,
        paragraphIndex: 2,
        keyLineRu: "The show features teens and kids.",
        explainRu: "Из вариантов ближе всего teenagers.",
        evidencePromptRu: "Найди, кого features the show.",
        segments: [
          { kind: "hit", sol: "e", text: "the show features teens and kids making their first steps" }
        ]
      },
      {
        examNum: 4,
        key: 3,
        paragraphIndex: 0,
        keyLineRu: "Playing in the sandbox some thirty years ago.",
        explainRu: "Дружат около 30 лет.",
        evidencePromptRu: "Найди фразу про sandbox.",
        segments: [
          { kind: "hit", sol: "e", text: "playing in the sandbox some thirty years ago" }
        ]
      },
      {
        examNum: 5,
        key: 1,
        paragraphIndex: 1,
        keyLineRu: "Participants who have layers and are willing to grow.",
        explainRu: "Willing to grow = wishes to develop.",
        evidencePromptRu: "Найди ultimate goal of the show.",
        segments: [
          { kind: "hit", sol: "e", text: "willing to grow" },
          { kind: "hit", sol: "d", text: "only goal is to become famous", wrongOption: 3, distractExplainRu: "Fame — то, что Parker отсеивает." },
          { kind: "hit", sol: "d", text: "to play games", wrongOption: 2, distractExplainRu: "Play games — неправильная мотивация." }
        ]
      },
      {
        examNum: 6,
        key: 1,
        paragraphIndex: 2,
        keyLineRu: "Crazy about musicals is said about theatre community, not participants.",
        explainRu: "Participants must know musicals and sing/play well; being crazy is not a must.",
        evidencePromptRu: "Сравни theatre community и requirements for participants.",
        segments: [
          { kind: "hit", sol: "d", text: "the theatre community is crazy about musicals", wrongOption: 1, distractExplainRu: "Это не требование к участникам." },
          { kind: "hit", sol: "e", text: "participants should know about the most popular musicals" },
          { kind: "hit", sol: "e", text: "should be able to sing and play and do both things really well" }
        ]
      },
      {
        examNum: 7,
        key: 2,
        paragraphIndex: 2,
        keyLineRu: "If you don't know your vocal range, it's time to find out.",
        explainRu: "Перед auditions нужно определить vocal range.",
        evidencePromptRu: "Найди прямой совет про vocal range.",
        segments: [
          { kind: "hit", sol: "e", text: "it's time to find out what it is" },
          { kind: "hit", sol: "d", text: "keyboard or a virtual piano", wrongOption: 3, distractExplainRu: "Это инструмент, а не цель." }
        ]
      },
      {
        examNum: 8,
        key: 2,
        paragraphIndex: 3,
        keyLineRu: "Treble is similar to the adult mezzo-soprano.",
        explainRu: "Mezzo-soprano repertoire подходит по voice type / timbre.",
        evidencePromptRu: "Найди связь treble и mezzo-soprano.",
        segments: [
          { kind: "hit", sol: "e", text: "Treble is similar to the adult mezzo-soprano" },
          { kind: "hit", sol: "d", text: "before their voice transforms into their adult voice", wrongOption: 1, distractExplainRu: "У них ещё не adult voices." }
        ]
      },
      {
        examNum: 9,
        key: 3,
        paragraphIndex: 4,
        keyLineRu: "If you're trying to guess what we want, it's game over. Be a surprise!",
        explainRu: "Нужно удивить / впечатлить casting board.",
        evidencePromptRu: "Найди финальный совет Parker.",
        segments: [
          { kind: "hit", sol: "e", text: "Be a surprise" },
          { kind: "hit", sol: "d", text: "sing their hearts out", wrongOption: 1, distractExplainRu: "Это про места, где Parker ищет talents, не про auditions." }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Mary)",
        fullText:
          "Hello, hello, my dear listeners! I know that many of you who are now about forty or fifty wished to become actors back when you were kids. And some of you who are in your twenties would still like to play on stage one day. And if you are around ten — well, the world is your oyster and your parents are the ones who can help you right now. So we are here today to do our part, aren't we, Parker? Parker O'Harra is a founder of a theatre company, a producer, a casting director seeking a cast for his new show, and a friend of mine. Parker, I can't even express how delighted I am to see you here today, the 18th of August — the 5th anniversary of our program. Yes, here we are! But let's quit reminiscing and focus on the issue at hand. Tell me, Parker, how do you determine who is the right fit for your show? So, just that? No knowledge, no skills? What should participants or their parents do to make their kids ready for auditions? Is that also true for younger kids who haven't reached their vocal maturity yet? Do you choose participants only through auditions, or is there a chance to skip the queue? What would you advise those auditioning for your show?",
        phrases: [
          { en: "wished to become actors", ru: "мечтали стать актёрами" },
          { en: "play on stage one day", ru: "когда-нибудь выступать на сцене" },
          { en: "the world is your oyster", ru: "мир у ваших ног" },
          { en: "do our part", ru: "внести свой вклад" },
          { en: "founder of a theatre company", ru: "основатель театральной компании" },
          { en: "casting director", ru: "кастинг-директор" },
          { en: "seeking a cast", ru: "ищет актёрский состав" },
          { en: "the 18th of August", ru: "18 августа", tip: "4 · trap" },
          { en: "5th anniversary of our program", ru: "пятая годовщина программы", tip: "4 · trap" },
          { en: "quit reminiscing", ru: "хватит вспоминать прошлое" },
          { en: "the issue at hand", ru: "текущий вопрос" },
          { en: "right fit for your show", ru: "подходящий человек для шоу" },
          { en: "ready for auditions", ru: "готовыми к прослушиваниям" },
          { en: "reached their vocal maturity", ru: "достигли вокальной зрелости" },
          { en: "skip the queue", ru: "обойти очередь" },
          { en: "auditioning for your show", ru: "идущим на прослушивание в ваше шоу" }
        ],
        chunks: [
          { text: "Hello, hello, my dear listeners! I know that many of you who are now about forty or fifty wished to become actors back when you were kids. And some of you who are in your twenties would still like to play on stage one day.", showText: true },
          { text: "And if you are around ten — well, the world is your oyster and your parents are the ones who can help you right now. So we are here today to do our part, aren't we, Parker?", showText: true },
          { text: "Parker O'Harra is a founder of a theatre company, a producer, a casting director seeking a cast for his new show, and a friend of mine.", showText: true },
          { text: "Parker, I can't even express how delighted I am to see you here today, the 18th of August — the 5th anniversary of our program.", showText: true },
          { text: "Yes, here we are! But let's quit reminiscing and focus on the issue at hand. Tell me, Parker, how do you determine who is the right fit for your show?", showText: true },
          { text: "So, just that? No knowledge, no skills? What should participants or their parents do to make their kids ready for auditions?", showText: true },
          { text: "Is that also true for younger kids who haven't reached their vocal maturity yet? Do you choose participants only through auditions, or is there a chance to skip the queue? What would you advise those auditioning for your show?", showText: false }
        ]
      },
      {
        id: "Parker O'Harra",
        label: "Parker O'Harra",
        fullText:
          "Indeed, we are, Mary. Mary, the pleasure is mine. Remember when we were playing in the sandbox some thirty years ago, and I told you that we'd be famous one day and you didn't believe me? Well, here we are. First of all, what's really important to me as a show runner is authenticity. It's the key. We want to weed out anyone whose only goal is to become famous. If someone comes on the show to get a check on a social net, or to play games, this is not our person. We take it very seriously, and we want participants who have layers and are willing to grow. That's the ultimate goal of the show. Both are important, but authenticity is the key. Right now, when the theatre community is crazy about musicals, the show features teens and kids making their first steps into the wonderful world of musical theatre. And yes, answering your questions, our participants should know about the most popular musicals and should be able to sing and play and do both things really well. Well, first they should check our website for the list of audition songs that are specific to the show. We are looking for participants of various vocal ranges, so, there is no need to learn songs outside your vocal range. If you don't know your vocal range, it's time to find out what it is. Knowing and understanding it is an important part of moving forward in your musical journey. And it's very simple! All you need is a keyboard or a virtual piano, a few spare minutes, and no one around so that you will have no self-consciousness when you are belting out the notes. Oh, trebles! This is what we call the voice type that teens often fall into before their voice transforms into their adult voice. Treble is similar to the adult mezzo-soprano. So, if you are a teenager who has overgrown child-friendly pieces, check out the adult mezzo-soprano repertoire. And please, don't hold onto an idea like, \"I know, I'm definitely a soprano\", which could cause you to sing songs that are absolutely wrong for you. You could have been one when you were five, but your voice changes and so does your repertoire. So I'd suggest you read audition details carefully, as they might specify the type of song we would like to hear. It might be a ballad, or something up-tempo, for example. The majority of our participants come through official auditions, yet we are ready to go the extra mile and turn over every rock to find every talent that lies below all those places you wouldn't ordinarily look. We are out looking for new faces constantly. We find some of them by going to places where people act and sing their hearts out and get coins tossed at them. With kids, we attend school plays and drama-class rehearsals, we stop by playgrounds and tune in when hearing a mom and a daughter singing cheerfully while shopping. If you're trying to guess what we want, it's game over. Be a surprise!",
        phrases: [
          { en: "playing in the sandbox some thirty years ago", ru: "играли в песочнице около тридцати лет назад", tip: "4 · key" },
          { en: "show runner", ru: "организатор шоу" },
          { en: "authenticity is the key", ru: "аутентичность — ключ" },
          { en: "weed out anyone", ru: "отсеять любого" },
          { en: "only goal is to become famous", ru: "единственная цель — стать знаменитым", tip: "5 · trap" },
          { en: "get a check on a social net", ru: "получить галочку/отметку в соцсети" },
          { en: "participants who have layers", ru: "участники с глубиной" },
          { en: "willing to grow", ru: "готовые расти", tip: "5 · key" },
          { en: "the ultimate goal of the show", ru: "главная цель шоу" },
          { en: "theatre community is crazy about musicals", ru: "театральное сообщество помешано на мюзиклах", tip: "6 · trap" },
          { en: "teens and kids", ru: "подростки и дети", tip: "3" },
          { en: "popular musicals", ru: "популярные мюзиклы", tip: "6" },
          { en: "sing and play", ru: "петь и играть", tip: "6" },
          { en: "audition songs", ru: "песни для прослушивания" },
          { en: "various vocal ranges", ru: "разные вокальные диапазоны" },
          { en: "find out what it is", ru: "выяснить, какой он", tip: "7" },
          { en: "keyboard or a virtual piano", ru: "клавиатура или виртуальное пианино" },
          { en: "no self-consciousness", ru: "не будет стеснения" },
          { en: "belting out the notes", ru: "выводя ноты во весь голос" },
          { en: "voice type", ru: "тип голоса" },
          { en: "before their voice transforms", ru: "до того, как голос изменится" },
          { en: "adult mezzo-soprano", ru: "взрослое меццо-сопрано", tip: "8" },
          { en: "overgrown child-friendly pieces", ru: "выросли из детских произведений" },
          { en: "your voice changes and so does your repertoire", ru: "голос меняется, и репертуар тоже" },
          { en: "audition details", ru: "детали прослушивания" },
          { en: "go the extra mile", ru: "приложить дополнительные усилия" },
          { en: "turn over every rock", ru: "перевернуть каждый камень / искать везде" },
          { en: "places you wouldn't ordinarily look", ru: "места, где обычно не ищут" },
          { en: "sing their hearts out", ru: "поют от всей души", tip: "9 · trap" },
          { en: "Be a surprise", ru: "удивите / будьте сюрпризом", tip: "9 · key" }
        ],
        chunks: [
          { text: "Indeed, we are, Mary. Mary, the pleasure is mine. Remember when we were playing in the sandbox some thirty years ago, and I told you that we'd be famous one day and you didn't believe me? Well, here we are.", showText: true },
          { text: "First of all, what's really important to me as a show runner is authenticity. It's the key. We want to weed out anyone whose only goal is to become famous.", showText: true },
          { text: "If someone comes on the show to get a check on a social net, or to play games, this is not our person. We take it very seriously, and we want participants who have layers and are willing to grow. That's the ultimate goal of the show.", showText: true },
          { text: "Both are important, but authenticity is the key. Right now, when the theatre community is crazy about musicals, the show features teens and kids making their first steps into the wonderful world of musical theatre.", showText: true },
          { text: "And yes, answering your questions, our participants should know about the most popular musicals and should be able to sing and play and do both things really well.", showText: true },
          { text: "Well, first they should check our website for the list of audition songs that are specific to the show. We are looking for participants of various vocal ranges, so, there is no need to learn songs outside your vocal range.", showText: true },
          { text: "If you don't know your vocal range, it's time to find out what it is. Knowing and understanding it is an important part of moving forward in your musical journey.", showText: true },
          { text: "And it's very simple! All you need is a keyboard or a virtual piano, a few spare minutes, and no one around so that you will have no self-consciousness when you are belting out the notes.", showText: true },
          { text: "Oh, trebles! This is what we call the voice type that teens often fall into before their voice transforms into their adult voice. Treble is similar to the adult mezzo-soprano.", showText: true },
          { text: "So, if you are a teenager who has overgrown child-friendly pieces, check out the adult mezzo-soprano repertoire. And please, don't hold onto an idea like, \"I know, I'm definitely a soprano\", which could cause you to sing songs that are absolutely wrong for you.", showText: true },
          { text: "You could have been one when you were five, but your voice changes and so does your repertoire. So I'd suggest you read audition details carefully, as they might specify the type of song we would like to hear. It might be a ballad, or something up-tempo, for example.", showText: true },
          { text: "The majority of our participants come through official auditions, yet we are ready to go the extra mile and turn over every rock to find every talent that lies below all those places you wouldn't ordinarily look.", showText: true },
          { text: "We are out looking for new faces constantly. We find some of them by going to places where people act and sing their hearts out and get coins tossed at them.", showText: true },
          { text: "With kids, we attend school plays and drama-class rehearsals, we stop by playgrounds and tune in when hearing a mom and a daughter singing cheerfully while shopping. If you're trying to guess what we want, it's game over. Be a surprise!", showText: false }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
