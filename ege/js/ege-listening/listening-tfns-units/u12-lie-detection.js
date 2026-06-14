/**
 * ЕГЭ Listening TFNS · Unit 12 · Lie detection (Katie & William).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-lie-detection",
    unitOrder: 12,
    title: "Unit 12 · Lie detection",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Katie & William · detecting lies",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/12/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2012%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p><ul>" +
      "<li><strong>A</strong> — birthday party was Katie's, not William's → False.</li>" +
      "<li><strong>B</strong> — William is angry/annoyed because David did not show up and was not honest → True.</li>" +
      "<li><strong>C</strong> — body language is mentioned, but 'mostly interested' is not proved → Not Stated.</li>" +
      "<li><strong>D</strong> — Katie took a course on lies; not now taking → False.</li>" +
      "<li><strong>E</strong> — Nickie goes on the offensive, but 'good at hiding emotions' is not directly stated → Not Stated.</li>" +
      "<li><strong>F</strong> — David did not change the subject; William did → False.</li>" +
      "<li><strong>G</strong> — William says he does not know whether David is still his best friend → True.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "William had his birthday last week." },
      { letter: "B", text: "William is annoyed at his friend's behaviour." },
      { letter: "C", text: "Researchers are mostly interested in body language." },
      { letter: "D", text: "Katie is now taking a course on lies at the university." },
      { letter: "E", text: "Nickie is good at hiding her emotions." },
      { letter: "F", text: "David changed the subject of the conversation." },
      { letter: "G", text: "William doubts that David is still his best friend." }
    ],
    key: {
      A: "f",
      B: "t",
      C: "ns",
      D: "f",
      E: "ns",
      F: "f",
      G: "t"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Katie", text: "Will? I'm home! Are you in there?" },
          { speaker: "William", text: "I'm in the kitchen." },
          { speaker: "Katie", text: "Oh, hi! What are you doing here with the laptop?" },
          { speaker: "William", text: "Hi, Katie. Remember my birthday party last week?" },
          { speaker: "Katie", text: "The one that you decided to have a month after the actual date? Yeah, sure. Why?" }
        ]
      },
      {
        turns: [
          {
            speaker: "William",
            text:
              "I was talking to David the other day about why he hadn't shown up and I think he was not honest with me. It drives me crazy. So, I decided to search for some tips about how to detect if a person is lying in the future. I've been poring over a range of Internet resources the whole day."
          },
          { speaker: "Katie", text: "Any results?" },
          {
            speaker: "William",
            text:
              "Well, it seems that this topic is of high interest to people all over the world. There are articles on deception in general, the reasons people lie, some statistics, and whatnot. There are tons of comments on body language, statement analysis, micro expressions and even forensic psychology."
          }
        ]
      },
      {
        turns: [
          { speaker: "Katie", text: "Anything handy? Or have you got snowed under all this information?" },
          {
            speaker: "William",
            text:
              "Indeed, it seems too much. Can you help? I know you took a course on lies as part of your university curriculum."
          },
          {
            speaker: "Katie",
            text:
              "I did. And I made a mental list of what I should pay attention to while talking to people. Yet, I'm not an expert on lie detection."
          },
          { speaker: "William", text: "Do tell me." }
        ]
      },
      {
        turns: [
          {
            speaker: "Katie",
            text:
              "First of all, I reckon that eye direction and lying have nothing in common. You cannot say if a person is being untruthful by noting their eyes moving to your left."
          },
          { speaker: "William", text: "Ok. So, no eye tracking." },
          {
            speaker: "Katie",
            text:
              "Exactly. Second, a guilty person will not necessarily get defensive and turn their head or body away. Think of Nicky, our sister, who typically goes on the offensive and nearly takes your head off if being accused of lying. And in most cases, she is not as innocent as she wants to be."
          },
          { speaker: "William", text: "That's what David did. He went ape on me when I asked him why he wasn't there." },
          { speaker: "Katie", text: "Did he try to change the subject?" },
          {
            speaker: "William",
            text:
              "He didn't, I did. I didn't want to listen to him shouting at me, so abruptly moved to another issue."
          }
        ]
      },
      {
        turns: [
          { speaker: "Katie", text: "And?" },
          {
            speaker: "William",
            text:
              "And it seemed that he wanted the subject changed. He became more relaxed, started smiling. His whole face got involved and gestures seemed to be more natural."
          },
          {
            speaker: "Katie",
            text:
              "So, he was probably untruthful with you. But, even so, does it change anything? He is still your best friend, isn't he?"
          },
          { speaker: "William", text: "I don't know, Katie. I don't like when people lie to my face." },
          { speaker: "Katie", text: "Neither do I." }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        answer: "f",
        keyLineRu: "Birthday party was Katie's reference to William's party after the actual date; not last week birthday.",
        evidencePromptRu: "<strong>A.</strong> Найдите birthday party / actual date.",
        segments: [
          { kind: "hit", sol: "e", text: "my birthday party last week" },
          { kind: "hit", sol: "e", text: "a month after the actual date", explainRu: "Праздник был не в день рождения → False." }
        ]
      },
      {
        letter: "B",
        answer: "t",
        keyLineRu: "William is annoyed because David was not honest.",
        evidencePromptRu: "<strong>B.</strong> Найдите William's emotion about David.",
        segments: [
          { kind: "hit", sol: "e", text: "he was not honest with me" },
          { kind: "hit", sol: "e", text: "It drives me crazy", explainRu: "Annoyed → True." }
        ]
      },
      {
        letter: "C",
        answer: "ns",
        keyLineRu: "Body language is mentioned, but mostly is not proved.",
        evidencePromptRu: "<strong>C.</strong> Проверьте слово mostly.",
        segments: [
          { kind: "hit", sol: "e", text: "There are tons of comments on body language" },
          { kind: "hit", sol: "e", text: "statement analysis, micro expressions and even forensic psychology", explainRu: "Много направлений; mostly не сказано → NS." }
        ]
      },
      {
        letter: "D",
        answer: "f",
        keyLineRu: "Katie took the course; she is not now taking it.",
        evidencePromptRu: "<strong>D.</strong> Найдите tense.",
        segments: [
          { kind: "hit", sol: "e", text: "you took a course on lies" },
          { kind: "hit", sol: "e", text: "I did", explainRu: "Past course → False." }
        ]
      },
      {
        letter: "E",
        answer: "ns",
        keyLineRu: "Nickie goes on the offensive; hiding emotions is not stated.",
        evidencePromptRu: "<strong>E.</strong> Проверьте, сказано ли good at hiding emotions.",
        segments: [
          { kind: "hit", sol: "e", text: "typically goes on the offensive" },
          { kind: "hit", sol: "e", text: "not as innocent as she wants to be", explainRu: "Есть поведение, но good at hiding emotions не сказано → NS." }
        ]
      },
      {
        letter: "F",
        answer: "f",
        keyLineRu: "David didn't change the subject; William did.",
        evidencePromptRu: "<strong>F.</strong> Найдите who changed the subject.",
        segments: [
          { kind: "hit", sol: "e", text: "He didn't, I did", explainRu: "David didn't, William did → False." }
        ]
      },
      {
        letter: "G",
        answer: "t",
        keyLineRu: "William says he doesn't know if David is still his best friend.",
        evidencePromptRu: "<strong>G.</strong> Найдите финальный doubt.",
        segments: [
          { kind: "hit", sol: "e", text: "He is still your best friend, isn't he?" },
          { kind: "hit", sol: "e", text: "I don't know, Katie", explainRu: "William doubts → True." }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Katie",
        label: "Katie",
        fullText:
          "Will? I'm home! Are you in there? Oh, hi! What are you doing here with the laptop? The one that you decided to have a month after the actual date? Yeah, sure. Why? Any results? Anything handy? Or have you got snowed under all this information? I did. And I made a mental list of what I should pay attention to while talking to people. Yet, I'm not an expert on lie detection. First of all, I reckon that eye direction and lying have nothing in common. You cannot say if a person is being untruthful by noting their eyes moving to your left. Exactly. Second, a guilty person will not necessarily get defensive and turn their head or body away. Think of Nicky, our sister, who typically goes on the offensive and nearly takes your head off if being accused of lying. And in most cases, she is not as innocent as she wants to be. Did he try to change the subject? And? So, he was probably untruthful with you. But, even so, does it change anything? He is still your best friend, isn't he? Neither do I.",
        phrases: [
          { en: "actual date", ru: "настоящая дата", tip: "A" },
          { en: "snowed under", ru: "завален информацией" },
          { en: "made a mental list", ru: "составила мысленный список" },
          { en: "pay attention to", ru: "обращать внимание на" },
          { en: "not an expert on lie detection", ru: "не эксперт по выявлению лжи" },
          { en: "eye direction and lying", ru: "направление взгляда и ложь" },
          { en: "nothing in common", ru: "ничего общего" },
          { en: "being untruthful", ru: "лжёт / говорит неправду" },
          { en: "get defensive", ru: "защищаться" },
          { en: "goes on the offensive", ru: "переходит в нападение", tip: "E" },
          { en: "change the subject", ru: "сменить тему", tip: "F" },
          { en: "probably untruthful", ru: "вероятно, был неискренен" },
          { en: "still your best friend", ru: "всё ещё твой лучший друг", tip: "G" }
        ],
        chunks: [
          { text: "Will? I'm home! Are you in there? Oh, hi! What are you doing here with the laptop?", showText: true },
          { text: "The one that you decided to have a month after the actual date? Yeah, sure. Why? Any results?", showText: true },
          { text: "Anything handy? Or have you got snowed under all this information? I did. And I made a mental list of what I should pay attention to while talking to people.", showText: true },
          { text: "Yet, I'm not an expert on lie detection. First of all, I reckon that eye direction and lying have nothing in common.", showText: true },
          { text: "You cannot say if a person is being untruthful by noting their eyes moving to your left. Exactly. Second, a guilty person will not necessarily get defensive and turn their head or body away.", showText: true },
          { text: "Think of Nicky, our sister, who typically goes on the offensive and nearly takes your head off if being accused of lying. And in most cases, she is not as innocent as she wants to be.", showText: true },
          { text: "Did he try to change the subject? And? So, he was probably untruthful with you. But, even so, does it change anything? He is still your best friend, isn't he? Neither do I.", showText: false }
        ]
      },
      {
        id: "William",
        label: "William",
        fullText:
          "I'm in the kitchen. Hi, Katie. Remember my birthday party last week? I was talking to David the other day about why he hadn't shown up and I think he was not honest with me. It drives me crazy. So, I decided to search for some tips about how to detect if a person is lying in the future. I've been poring over a range of Internet resources the whole day. Well, it seems that this topic is of high interest to people all over the world. There are articles on deception in general, the reasons people lie, some statistics, and whatnot. There are tons of comments on body language, statement analysis, micro expressions and even forensic psychology. Indeed, it seems too much. Can you help? I know you took a course on lies as part of your university curriculum. Do tell me. Ok. So, no eye tracking. That's what David did. He went ape on me when I asked him why he wasn't there. He didn't, I did. I didn't want to listen to him shouting at me, so abruptly moved to another issue. And it seemed that he wanted the subject changed. He became more relaxed, started smiling. His whole face got involved and gestures seemed to be more natural. I don't know, Katie. I don't like when people lie to my face.",
        phrases: [
          { en: "hadn't shown up", ru: "не пришёл" },
          { en: "not honest with me", ru: "был со мной нечестен", tip: "B" },
          { en: "drives me crazy", ru: "выводит меня из себя", tip: "B" },
          { en: "detect if a person is lying", ru: "определить, лжёт ли человек" },
          { en: "poring over", ru: "изучал / просматривал" },
          { en: "high interest", ru: "высокий интерес" },
          { en: "deception in general", ru: "обман в целом" },
          { en: "body language", ru: "язык тела", tip: "C" },
          { en: "micro expressions", ru: "микровыражения" },
          { en: "forensic psychology", ru: "судебная психология" },
          { en: "university curriculum", ru: "университетская программа", tip: "D" },
          { en: "went ape on me", ru: "набросился на меня / взбесился" },
          { en: "He didn't, I did", ru: "не он, а я", tip: "F" },
          { en: "abruptly moved to another issue", ru: "резко перешёл к другой теме", tip: "F" },
          { en: "lie to my face", ru: "лгут мне в лицо", tip: "G" }
        ],
        chunks: [
          { text: "I'm in the kitchen. Hi, Katie. Remember my birthday party last week?", showText: true },
          { text: "I was talking to David the other day about why he hadn't shown up and I think he was not honest with me. It drives me crazy.", showText: true },
          { text: "So, I decided to search for some tips about how to detect if a person is lying in the future. I've been poring over a range of Internet resources the whole day.", showText: true },
          { text: "Well, it seems that this topic is of high interest to people all over the world. There are articles on deception in general, the reasons people lie, some statistics, and whatnot.", showText: true },
          { text: "There are tons of comments on body language, statement analysis, micro expressions and even forensic psychology. Indeed, it seems too much. Can you help? I know you took a course on lies as part of your university curriculum.", showText: true },
          { text: "That's what David did. He went ape on me when I asked him why he wasn't there.", showText: true },
          { text: "He didn't, I did. I didn't want to listen to him shouting at me, so abruptly moved to another issue.", showText: true },
          { text: "And it seemed that he wanted the subject changed. He became more relaxed, started smiling. His whole face got involved and gestures seemed to be more natural. I don't know, Katie. I don't like when people lie to my face.", showText: false }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
