/**
 * ЕГЭ Listening TFNS · Unit 14 · OP and RP (John & Penelope).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-op-rp",
    unitOrder: 14,
    title: "Unit 14 · OP and RP",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "John & Penelope · Shakespearean pronunciation",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/14/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2014%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>OP/RP:</strong> text message ≠ email, little brother = relatives, love/prove used to rhyme, film taste differs, Penelope confuses genre.</p>",
    statements: [
      { letter: "A", text: "Penelope sent John an email." },
      { letter: "B", text: "John is a student of linguistics." },
      { letter: "C", text: "John and Penelope are relatives." },
      { letter: "D", text: "Penelope loves reading Shakespeare." },
      { letter: "E", text: "Shakespeare rhymed 'love' with 'prove'." },
      { letter: "F", text: "John doesn't share Penelope's taste in films." },
      { letter: "G", text: "Penelope is good at understanding different genres." }
    ],
    key: {
      A: "f",
      B: "ns",
      C: "t",
      D: "f",
      E: "t",
      F: "t",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "John", text: "Penelope, hi! I was in the middle of an email to my scientific advisor. Anyway, I got here as soon as I read your text message. Has anything happened?" },
          { speaker: "Penelope", text: "Yes and no. It's definitely not a life-and-death situation, yet it does make me miserable." },
          { speaker: "John", text: "Tell me." },
          { speaker: "Penelope", text: "I know that you have your own agenda, John, so, to make a long story short, I failed my English history exam, little brother." },
          { speaker: "John", text: "And how can I be of any help to you? I haven't even started this course yet." },
          { speaker: "Penelope", text: "Even though you haven't, you know more than I do. You're keen on accents and dialects and for me it's all Greek." },
          { speaker: "John", text: "Wow, not everything is as black as you paint it if you quote Shakespeare." },
          { speaker: "Penelope", text: "Whatever. Will you help me or not?" },
          { speaker: "John", text: "Sure, I will." }
        ]
      },
      {
        turns: [
          { speaker: "Penelope", text: "Before we start, tell me, honestly, why should I even care about the way words were pronounced centuries ago?" },
          { speaker: "John", text: "Well, surprising as it may sound, it is useful to know how they would have been pronounced as it changes your appreciation of the texts. Apart from that, it helps to understand why English spellings and pronunciations are so inconsistent today. For instance, for Shakespeare 'love' and 'prove' would have rhymed perfectly well; for us it doesn't work, as we pronounce them differently." },
          { speaker: "Penelope", text: "So weird. This doesn't sound posh at all." },
          { speaker: "John", text: "That's another mystery which I don't get myself. Shakespearean English is associated with high status and education, but when he was writing his works, it was everyday speech. Nothing special. Even Elizabeth I, who was the queen then, didn't pronounce words in a way we'd see as upper-crust today." }
        ]
      },
      {
        turns: [
          { speaker: "Penelope", text: "I see. John, you mentioned the correlation between pronunciation and spelling. I'd love to hear more on that, if you don't mind?" },
          { speaker: "John", text: "It's quite simple. As at the time there were no rules and standards on how to write words, texts were written phonetically. So, in Queen Elizabeth I's letters the word 'together' is written as 'togither' — t-o-g-i-t-h-e-r, and 'servant' as 'sarvant' with two a's." },
          { speaker: "Penelope", text: "So, she had a very down-to-earth manner of speaking in contrast to the one she is portrayed with in a recent movie." },
          { speaker: "John", text: "That super silly historic fiction you are so fond of, you mean?" },
          { speaker: "Penelope", text: "The documentary." },
          { speaker: "John", text: "Then a biographical period drama film, to be precise." },
          { speaker: "Penelope", text: "Oh, it's so confusing. Whatever the genre, I love that movie. Anyway, could you please tell me about the difference between OP and RP?" }
        ]
      }
    ],
    huntLabs: [
      { letter: "A", answer: "f", keyLineRu: "Penelope sent a text message, not an email.", evidencePromptRu: "<strong>A.</strong> Найдите text message.", segments: [{ kind: "hit", sol: "e", text: "I was in the middle of an email" }, { kind: "hit", sol: "e", text: "your text message" }] },
      { letter: "B", answer: "ns", keyLineRu: "John knows accents and dialects, but linguistics student is not stated.", evidencePromptRu: "<strong>B.</strong> Проверьте student of linguistics.", segments: [{ kind: "hit", sol: "e", text: "You're keen on accents and dialects", explainRu: "Interest is stated; student of linguistics is not." }] },
      { letter: "C", answer: "t", keyLineRu: "Penelope calls John little brother.", evidencePromptRu: "<strong>C.</strong> Найдите little brother.", segments: [{ kind: "hit", sol: "e", text: "little brother" }] },
      { letter: "D", answer: "f", keyLineRu: "She quotes Shakespeare accidentally and loves a movie, not reading Shakespeare.", evidencePromptRu: "<strong>D.</strong> Найдите quote Shakespeare / movie.", segments: [{ kind: "hit", sol: "e", text: "if you quote Shakespeare" }, { kind: "hit", sol: "e", text: "I love that movie" }] },
      { letter: "E", answer: "t", keyLineRu: "For Shakespeare love and prove rhymed.", evidencePromptRu: "<strong>E.</strong> Найдите love/prove.", segments: [{ kind: "hit", sol: "e", text: "for Shakespeare 'love' and 'prove' would have rhymed perfectly well" }] },
      { letter: "F", answer: "t", keyLineRu: "John calls her favourite movie super silly historic fiction.", evidencePromptRu: "<strong>F.</strong> Найдите John’s attitude to the film.", segments: [{ kind: "hit", sol: "e", text: "That super silly historic fiction you are so fond of" }] },
      { letter: "G", answer: "f", keyLineRu: "Penelope is confused about the genre.", evidencePromptRu: "<strong>G.</strong> Найдите genre confusion.", segments: [{ kind: "hit", sol: "e", text: "The documentary" }, { kind: "hit", sol: "e", text: "a biographical period drama film" }, { kind: "hit", sol: "e", text: "it's so confusing" }] }
    ],
    shadowSpeakers: [
      {
        id: "John",
        label: "John",
        fullText:
          "Penelope, hi! I was in the middle of an email to my scientific advisor. Anyway, I got here as soon as I read your text message. Has anything happened? Tell me. And how can I be of any help to you? I haven't even started this course yet. Wow, not everything is as black as you paint it if you quote Shakespeare. Sure, I will. Well, surprising as it may sound, it is useful to know how they would have been pronounced as it changes your appreciation of the texts. Apart from that, it helps to understand why English spellings and pronunciations are so inconsistent today. For instance, for Shakespeare 'love' and 'prove' would have rhymed perfectly well; for us it doesn't work, as we pronounce them differently. That's another mystery which I don't get myself. Shakespearean English is associated with high status and education, but when he was writing his works, it was everyday speech. Nothing special. Even Elizabeth I, who was the queen then, didn't pronounce words in a way we'd see as upper-crust today. It's quite simple. As at the time there were no rules and standards on how to write words, texts were written phonetically. So, in Queen Elizabeth I's letters the word 'together' is written as 'togither' — t-o-g-i-t-h-e-r, and 'servant' as 'sarvant' with two a's. That super silly historic fiction you are so fond of, you mean? Then a biographical period drama film, to be precise.",
        phrases: [
          { en: "scientific advisor", ru: "научный руководитель" },
          { en: "text message", ru: "сообщение", tip: "A" },
          { en: "quote Shakespeare", ru: "цитировать Shakespeare" },
          { en: "pronounced centuries ago", ru: "произносились столетия назад" },
          { en: "appreciation of the texts", ru: "восприятие текстов" },
          { en: "spellings and pronunciations", ru: "написание и произношение" },
          { en: "love and prove", ru: "love и prove", tip: "E" },
          { en: "rhymed perfectly well", ru: "прекрасно рифмовались", tip: "E" },
          { en: "everyday speech", ru: "повседневная речь" },
          { en: "upper-crust", ru: "аристократический" },
          { en: "written phonetically", ru: "писались фонетически" },
          { en: "super silly historic fiction", ru: "глупая историческая выдумка", tip: "F" },
          { en: "biographical period drama film", ru: "биографическая историческая драма", tip: "G" }
        ],
        chunks: [{ text: "Penelope, hi! I was in the middle of an email to my scientific advisor. Anyway, I got here as soon as I read your text message.", showText: true }, { text: "I haven't even started this course yet. Wow, not everything is as black as you paint it if you quote Shakespeare.", showText: true }, { text: "For Shakespeare 'love' and 'prove' would have rhymed perfectly well; for us it doesn't work, as we pronounce them differently.", showText: true }, { text: "Shakespearean English is associated with high status and education, but when he was writing his works, it was everyday speech. Nothing special.", showText: true }, { text: "As at the time there were no rules and standards on how to write words, texts were written phonetically.", showText: true }, { text: "That super silly historic fiction you are so fond of, you mean? Then a biographical period drama film, to be precise.", showText: false }]
      },
      {
        id: "Penelope",
        label: "Penelope",
        fullText:
          "Yes and no. It's definitely not a life-and-death situation, yet it does make me miserable. I know that you have your own agenda, John, so, to make a long story short, I failed my English history exam, little brother. Even though you haven't, you know more than I do. You're keen on accents and dialects and for me it's all Greek. Whatever. Will you help me or not? Before we start, tell me, honestly, why should I even care about the way words were pronounced centuries ago? So weird. This doesn't sound posh at all. I see. John, you mentioned the correlation between pronunciation and spelling. I'd love to hear more on that, if you don't mind? So, she had a very down-to-earth manner of speaking in contrast to the one she is portrayed with in a recent movie. The documentary. Oh, it's so confusing. Whatever the genre, I love that movie. Anyway, could you please tell me about the difference between OP and RP?",
        phrases: [
          { en: "life-and-death situation", ru: "вопрос жизни и смерти" },
          { en: "miserable", ru: "несчастная / расстроенная" },
          { en: "to make a long story short", ru: "короче говоря" },
          { en: "little brother", ru: "младший брат", tip: "C" },
          { en: "accents and dialects", ru: "акценты и диалекты", tip: "B" },
          { en: "it's all Greek", ru: "для меня это тёмный лес" },
          { en: "doesn't sound posh", ru: "не звучит аристократично" },
          { en: "correlation between pronunciation and spelling", ru: "связь между произношением и написанием" },
          { en: "down-to-earth manner of speaking", ru: "приземлённая манера речи" },
          { en: "Whatever the genre", ru: "какой бы ни был жанр", tip: "G" },
          { en: "difference between OP and RP", ru: "разница между OP и RP" }
        ],
        chunks: [{ text: "I failed my English history exam, little brother. Even though you haven't, you know more than I do. You're keen on accents and dialects and for me it's all Greek.", showText: true }, { text: "Before we start, tell me, honestly, why should I even care about the way words were pronounced centuries ago?", showText: true }, { text: "I see. John, you mentioned the correlation between pronunciation and spelling. I'd love to hear more on that, if you don't mind?", showText: true }, { text: "So, she had a very down-to-earth manner of speaking in contrast to the one she is portrayed with in a recent movie. The documentary. Oh, it's so confusing. Whatever the genre, I love that movie.", showText: false }]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
