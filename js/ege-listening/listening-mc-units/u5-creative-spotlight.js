/**
 * ЕГЭ Listening MC · Unit 5 · The Creative Spotlight · Anna Grant.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-creative-spotlight",
    unitOrder: 5,
    title: "Unit 5 · The Creative Spotlight",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Anna Grant · film director",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/5/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%205%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью с режиссёром</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> один верный смысл из трёх формулировок — часто это парафраз.</p>" +
      "<ul>" +
      "<li><strong>Ловушка №1:</strong> <em>started TV shows at 22</em> ≠ graduated at 22 (вопрос 3).</li>" +
      "<li><strong>Ловушка №2:</strong> three-day pass ≠ сколько всего провела в studio (вопрос 5).</li>" +
      "<li><strong>Ловушка №3:</strong> <em>discover and create</em> — после старта; <em>at first</em> → start small (вопрос 9).</li>" +
      "</ul>",

    questions: [
      {
        examNum: 3,
        prompt: "What do we learn about the speaker at the beginning of the interview?",
        key: 3,
        choices: [
          { num: 1, text: "She graduated at age 22." },
          { num: 2, text: "She earned multiple awards." },
          { num: 3, text: "She has over 20 years of experience." }
        ],
        explainRu:
          "<em>Started making TV shows at 22 … has been in the film making business ever since</em> — длинный стаж; не graduated at 22 и не multiple awards (только first prize at 25).",
        distractorWrongRu: {
          1: "22 — возраст начала TV shows, не graduation.",
          2: "Назван один first prize at 25, не «multiple awards»."
        }
      },
      {
        examNum: 4,
        prompt: "How did the speaker get into the studio?",
        key: 2,
        choices: [
          { num: 1, text: "She was hired by it." },
          { num: 2, text: "She went there on a tour." },
          { num: 3, text: "She got lost on her way home." }
        ],
        explainRu:
          "Family holiday → <em>I took a tour of the studio</em>, спряталась в bathroom. Hired — позже.",
        distractorWrongRu: {
          1: "That was long before they hired me — наоборот.",
          3: "Got lost — не звучит."
        }
      },
      {
        examNum: 5,
        prompt: "How much time did the speaker spend at the studio?",
        key: 3,
        choices: [
          { num: 1, text: "Three days." },
          { num: 2, text: "One week." },
          { num: 3, text: "2 months." }
        ],
        explainRu:
          "Three-day pass — только пропуск; всего — <em>the rest of my holidays, two months</em>, five days a week.",
        distractorWrongRu: {
          1: "Three days — длительность pass, не всего пребывания.",
          2: "One week — в записи нет."
        }
      },
      {
        examNum: 6,
        prompt: "What inspired the speaker to go into film-making?",
        key: 3,
        choices: [
          { num: 1, text: "She has always dreamed of it." },
          { num: 2, text: "She wanted to make a difference." },
          { num: 3, text: "The holidays she spent at the studio." }
        ],
        explainRu:
          "Вся история про capital holiday и два месяца в studio — её вход в кино; <em>Certainly not</em> про director тогда ≠ «always dreamed».",
        distractorWrongRu: {
          1: "Certainly not — never really considered what I could do with movies.",
          2: "Make a difference — про роль documentaries в society, не старт карьеры."
        }
      },
      {
        examNum: 7,
        prompt: "What is NOT mentioned as part of a great documentary?",
        key: 1,
        choices: [
          { num: 1, text: "Simple facts and figures." },
          { num: 2, text: "The director's enthusiasm." },
          { num: 3, text: "Emotional connection." }
        ],
        explainRu:
          "Passion / fired up → enthusiasm; emotional level → connection. Dates and figures — то, чего <em>avoid</em>, не «часть» great doc.",
        distractorWrongRu: {
          2: "Passion / genuinely interested — упомянуто.",
          3: "Connect on an emotional level — упомянуто."
        }
      },
      {
        examNum: 8,
        prompt: "According to the speaker, what role do documentaries play in our society?",
        key: 1,
        choices: [
          { num: 1, text: "They inspire change." },
          { num: 2, text: "They connect people." },
          { num: 3, text: "They solve problems." }
        ],
        explainRu:
          "<em>Bring about transformation</em> + sparked conservation initiatives — inspire change.",
        distractorWrongRu: {
          2: "Connect people — не сформулировано так.",
          3: "Solve problems — слишком сильно; expose issues ≠ solve."
        }
      },
      {
        examNum: 9,
        prompt: "What does the speaker advise young people to do at first?",
        key: 1,
        choices: [
          { num: 1, text: "Start small." },
          { num: 2, text: "Ask for help." },
          { num: 3, text: "Discover and create." }
        ],
        explainRu:
          "<em>Write a short script, gather some friends, and just start filming</em> — start small. Discover and create — <em>once you are there</em>.",
        distractorWrongRu: {
          2: "Ask for help — не советует.",
          3: "Never stop discovering and creating — после того как уже начали."
        }
      }
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Good evening, everyone, and welcome back to \"The Creative Spotlight\", your weekly dose of inspiration on Radio City 88.8 FM! Today, we're thrilled to have with us an award-winning director, Anna Grant. Anna is a graduate of the prestigious State University film programme and a regular speaker at international film conferences. She started making TV shows when she was 22, got her first prize at the age of 25, and has been in the film making business ever since. Hello, Anna!"
          },
          { speaker: "Anna", text: "Hi everyone, thanks for having me!" },
          {
            speaker: "Presenter",
            text:
              "There is a popular myth that you got your start in the film industry by secretly getting into the film studio. Is that true?"
          },
          {
            speaker: "Anna",
            text:
              "No, that was long before they hired me. I was a high school student back then. With my family, I went on holiday to the capital, and I took a tour of the studio. You know, one of those where they show you around and then give everybody a bathroom break before heading home. Well, I took my chance and hid in the bathroom. I waited for about an hour until everybody had left and I was free."
          }
        ]
      },
      {
        turns: [
          { speaker: "Presenter", text: "What did you do?" },
          { speaker: "Anna", text: "I walked around." },
          { speaker: "Presenter", text: "Nobody stopped you?" },
          {
            speaker: "Anna",
            text:
              "No one. I met one of the makeup artists, we talked, and she thought I was very ambitious. So, she gave me a three-day pass in her own name. On the fourth day, I walked to the studio and waved at the guard, hoping that he would recognise me. And, oh miracle, he waved back! So I spent the rest of my holidays, two months, at the studio — five days a week until school began, and I had to go back."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text: "Did you know then that you wanted to be a director?"
          },
          {
            speaker: "Anna",
            text:
              "Certainly not. I never really considered what I could do with movies in those days."
          },
          {
            speaker: "Presenter",
            text:
              "And yet your latest documentary, \"Hidden Treasures\", has received positive reviews for its unique storytelling approach. What sparked this interest for you, if not your holidays at the studio?"
          },
          {
            speaker: "Anna",
            text:
              "Well, stories have always been a window into different worlds for me, but for a while, it felt like I was constantly seeing the same kinds of stories on screen. I dreamed about something new. You know, storytelling is not just about the story itself, but also about who's telling it and how."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text: "That's a great point. What do you think makes a great documentary?"
          },
          {
            speaker: "Anna",
            text:
              "Well, for me, it's all about passion. You have to be truly fired up about the subject matter, because people can sense when you're genuinely interested in the story you're telling."
          },
          {
            speaker: "Presenter",
            text:
              "But there must be more to it than just passion, right? How do you balance the factual side of documentaries with creating a fascinating story to tell?"
          },
          {
            speaker: "Anna",
            text:
              "It's a delicate balance, for sure. You have a responsibility to present the facts accurately, but you also want to avoid just giving dates and figures. The key is to find the human element in the story. Focus on the people involved, their experiences, their struggles, and their triumphs. When you connect with the audience on an emotional level, the facts become much more memorable."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "I can see how that would work. Speaking of connecting with people, what role do you think documentaries play in today's society?"
          },
          {
            speaker: "Anna",
            text:
              "I believe documentaries are incredibly powerful tools. They can expose important issues, give a voice to the unheard, and even bring about transformation. For instance, \"Hidden Treasures\" explored the difficulties faced by endangered species. The positive response it received sparked some new conservation initiatives."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "That's fantastic! Anna, what advice would you give to a young person who's passionate about film-making?"
          },
          {
            speaker: "Anna",
            text:
              "Don't be afraid! Remember, everyone starts somewhere. Write a short script, gather some friends, and just start filming. And once you are there, never stop discovering and creating."
          }
        ]
      }
    ],

    huntLabs: [
      {
        examNum: 3,
        key: 3,
        paragraphIndex: 0,
        keyLineRu: "Started at 22 · ever since — long experience.",
        explainRu: "Не graduated at 22; один first prize, не multiple.",
        evidencePromptRu: "Найди биографию Anna в начале.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "She started making TV shows when she was 22"
          },
          {
            kind: "hit",
            sol: "e",
            text: "has been in the film making business ever since"
          },
          {
            kind: "hit",
            sol: "d",
            text: "She started making TV shows when she was 22",
            wrongOption: 1,
            distractExplainRu: "Started TV at 22 ≠ graduated at 22 (вар. 1)."
          },
          {
            kind: "hit",
            sol: "d",
            text: "got her first prize at the age of 25",
            wrongOption: 2,
            distractExplainRu: "First prize — не multiple awards (вар. 2)."
          }
        ]
      },
      {
        examNum: 4,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "I took a tour of the studio.",
        explainRu: "Tour + hid in bathroom; hired — позже.",
        evidencePromptRu: "Найди, как Anna попала в studio.",
        segments: [
          { kind: "hit", sol: "e", text: "I took a tour of the studio" },
          {
            kind: "hit",
            sol: "d",
            text: "that was long before they hired me",
            wrongOption: 1,
            distractExplainRu: "Hired — потом, не способ входа (вар. 1)."
          }
        ]
      },
      {
        examNum: 5,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "Two months · five days a week.",
        explainRu: "Three-day pass — только начало.",
        evidencePromptRu: "Найди, сколько времени Anna провела в studio.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I spent the rest of my holidays, two months, at the studio"
          },
          {
            kind: "hit",
            sol: "d",
            text: "she gave me a three-day pass in her own name",
            wrongOption: 1,
            distractExplainRu: "Three days — pass, не весь срок (вар. 1)."
          }
        ]
      },
      {
        examNum: 6,
        key: 3,
        paragraphIndex: 0,
        keyLineRu: "Holiday to the capital · two months at the studio.",
        explainRu: "Studio holidays — её путь в кино.",
        evidencePromptRu: "Найди историю про holidays и studio.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "With my family, I went on holiday to the capital"
          },
          {
            kind: "hit",
            sol: "e",
            text: "I spent the rest of my holidays, two months, at the studio"
          },
          {
            kind: "hit",
            sol: "d",
            text: "Certainly not. I never really considered what I could do with movies",
            wrongOption: 1,
            distractExplainRu: "Not always dreamed (вар. 1)."
          }
        ]
      },
      {
        examNum: 7,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "Avoid just giving dates and figures.",
        explainRu: "Passion + emotional level — да; simple facts as ingredient — нет.",
        evidencePromptRu: "Сравни passion, human element и dates/figures.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "it's all about passion"
          },
          {
            kind: "hit",
            sol: "e",
            text: "connect with the audience on an emotional level"
          },
          {
            kind: "hit",
            sol: "d",
            text: "avoid just giving dates and figures",
            wrongOption: 1,
            distractExplainRu: "Dates/figures — то, чего избегать, не «часть» great doc (вар. 1 = NOT)."
          }
        ]
      },
      {
        examNum: 8,
        key: 1,
        paragraphIndex: 4,
        keyLineRu: "Bring about transformation · sparked conservation initiatives.",
        explainRu: "Inspire change — парафраз.",
        evidencePromptRu: "Найди роль documentaries в society.",
        segments: [
          { kind: "hit", sol: "e", text: "even bring about transformation" },
          {
            kind: "hit",
            sol: "e",
            text: "sparked some new conservation initiatives"
          }
        ]
      },
      {
        examNum: 9,
        key: 1,
        paragraphIndex: 5,
        keyLineRu: "Short script · gather friends · start filming.",
        explainRu: "Start small; discover and create — once you are there.",
        evidencePromptRu: "Найди совет Anna молодым.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Write a short script, gather some friends, and just start filming"
          },
          {
            kind: "hit",
            sol: "d",
            text: "never stop discovering and creating",
            wrongOption: 3,
            distractExplainRu: "Discover and create — после старта (вар. 3)."
          }
        ]
      }
    ],

    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter",
        fullText:
          "Good evening, everyone, and welcome back to \"The Creative Spotlight\", your weekly dose of inspiration on Radio City 88.8 FM! Today, we're thrilled to have with us an award-winning director, Anna Grant. Anna is a graduate of the prestigious State University film programme and a regular speaker at international film conferences. She started making TV shows when she was 22, got her first prize at the age of 25, and has been in the film making business ever since. Hello, Anna! There is a popular myth that you got your start in the film industry by secretly getting into the film studio. Is that true? What did you do? Nobody stopped you? Did you know then that you wanted to be a director? And yet your latest documentary, \"Hidden Treasures\", has received positive reviews for its unique storytelling approach. What sparked this interest for you, if not your holidays at the studio? That's a great point. What do you think makes a great documentary? But there must be more to it than just passion, right? How do you balance the factual side of documentaries with creating a fascinating story to tell? I can see how that would work. Speaking of connecting with people, what role do you think documentaries play in today's society? That's fantastic! Anna, what advice would you give to a young person who's passionate about film-making?",
        phrases: [
          { en: "The Creative Spotlight", ru: "передача «The Creative Spotlight»" },
          { en: "Radio City 88.8 FM", ru: "радио Radio City 88.8 FM" },
          { en: "award-winning director, Anna Grant", ru: "отмеченная наградами режиссёр Anna Grant" },
          {
            en: "started making TV shows when she was 22",
            ru: "начала снимать телешоу в 22 года",
            tip: "3 · not graduated at 22"
          },
          {
            en: "got her first prize at the age of 25",
            ru: "получила первую награду в 25 лет",
            tip: "3 · not multiple awards"
          },
          {
            en: "has been in the film making business ever since",
            ru: "с тех пор всё время в киноиндустрии",
            tip: "3 · long experience"
          },
          { en: "secretly getting into the film studio", ru: "тайно проникла на киностудию" },
          { en: "Did you know then that you wanted to be a director?", ru: "тогда ты уже знала, что хочешь быть режиссёром?" },
          { en: "Hidden Treasures", ru: "документальный фильм «Hidden Treasures»" },
          { en: "unique storytelling approach", ru: "необычный подход к повествованию" },
          {
            en: "if not your holidays at the studio",
            ru: "если не каникулы на студии",
            tip: "6 · studio story"
          },
          { en: "what role do documentaries play", ru: "какую роль играют документальные фильмы" },
          { en: "passionate about film-making", ru: "увлечён кинематографом" }
        ],
        chunks: [
          {
            text:
              "Good evening, everyone … Is that true?",
            showText: true
          },
          {
            text: "What did you do? … and I had to go back.",
            showText: true
          },
          {
            text:
              "Did you know then … but also about who's telling it and how.",
            showText: true
          },
          {
            text:
              "That's a great point … the facts become much more memorable.",
            showText: true
          },
          {
            text:
              "I can see how that would work … passionate about film-making?",
            showText: true
          }
        ]
      },
      {
        id: "Anna",
        label: "Anna Grant",
        fullText:
          "Hi everyone, thanks for having me! No, that was long before they hired me. I was a high school student back then. With my family, I went on holiday to the capital, and I took a tour of the studio. You know, one of those where they show you around and then give everybody a bathroom break before heading home. Well, I took my chance and hid in the bathroom. I waited for about an hour until everybody had left and I was free. I walked around. No one. I met one of the makeup artists, we talked, and she thought I was very ambitious. So, she gave me a three-day pass in her own name. On the fourth day, I walked to the studio and waved at the guard, hoping that he would recognise me. And, oh miracle, he waved back! So I spent the rest of my holidays, two months, at the studio — five days a week until school began, and I had to go back. Certainly not. I never really considered what I could do with movies in those days. Well, stories have always been a window into different worlds for me, but for a while, it felt like I was constantly seeing the same kinds of stories on screen. I dreamed about something new. You know, storytelling is not just about the story itself, but also about who's telling it and how. Well, for me, it's all about passion. You have to be truly fired up about the subject matter, because people can sense when you're genuinely interested in the story you're telling. It's a delicate balance, for sure. You have a responsibility to present the facts accurately, but you also want to avoid just giving dates and figures. The key is to find the human element in the story. Focus on the people involved, their experiences, their struggles, and their triumphs. When you connect with the audience on an emotional level, the facts become much more memorable. I believe documentaries are incredibly powerful tools. They can expose important issues, give a voice to the unheard, and even bring about transformation. For instance, \"Hidden Treasures\" explored the difficulties faced by endangered species. The positive response it received sparked some new conservation initiatives. Don't be afraid! Remember, everyone starts somewhere. Write a short script, gather some friends, and just start filming. And once you are there, never stop discovering and creating.",
        phrases: [
          { en: "long before they hired me", ru: "это было задолго до того, как меня наняли", tip: "4 · not hired to enter" },
          { en: "I took a tour of the studio", ru: "я пошла на экскурсию по студии", tip: "4 · ключ" },
          { en: "hid in the bathroom", ru: "спряталась в туалете" },
          { en: "she gave me a three-day pass", ru: "дала мне трёхдневный пропуск", tip: "5 · not total time" },
          {
            en: "two months, at the studio — five days a week",
            ru: "два месяца на студии — пять дней в неделю",
            tip: "5 · ключ"
          },
          {
            en: "Certainly not. I never really considered what I could do with movies",
            ru: "конечно нет — тогда я и не думала, чем могу заняться в кино",
            tip: "6 · not always dreamed"
          },
          { en: "I dreamed about something new", ru: "мечтала о чём-то новом" },
          { en: "it's all about passion", ru: "главное — страсть к делу", tip: "7 · enthusiasm" },
          { en: "truly fired up about the subject matter", ru: "по-настоящему горишь темой" },
          {
            en: "avoid just giving dates and figures",
            ru: "не ограничиваться датами и цифрами",
            tip: "7 · NOT simple facts"
          },
          { en: "find the human element in the story", ru: "найти «человеческое» в истории" },
          {
            en: "connect with the audience on an emotional level",
            ru: "соприкоснуться со зрителем на эмоциональном уровне",
            tip: "7 · mentioned"
          },
          {
            en: "bring about transformation",
            ru: "приносить перемены / менять что-то к лучшему",
            tip: "8 · inspire change"
          },
          { en: "give a voice to the unheard", ru: "дать голос тем, кого не слышат" },
          { en: "sparked some new conservation initiatives", ru: "подтолкнула к новым программам по охране природы", tip: "8 · ключ" },
          {
            en: "Write a short script, gather some friends, and just start filming",
            ru: "напиши короткий сценарий, собери друзей и просто снимай",
            tip: "9 · start small"
          },
          {
            en: "never stop discovering and creating",
            ru: "не переставай открывать и творить",
            tip: "9 · after start · var 3"
          }
        ],
        chunks: [
          {
            text:
              "Hi everyone, thanks for having me! … until everybody had left and I was free.",
            showText: true
          },
          {
            text:
              "I walked around. … and I had to go back.",
            showText: true
          },
          {
            text:
              "Certainly not. … but also about who's telling it and how.",
            showText: true
          },
          {
            text:
              "Well, for me, it's all about passion … the facts become much more memorable.",
            showText: true
          },
          {
            text:
              "I believe documentaries are incredibly powerful tools … never stop discovering and creating.",
            showText: true
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
