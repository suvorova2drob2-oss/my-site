/**
 * ЕГЭ Lexis Exam · Unit 15 · At the hospital (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-at-the-hospital",
    unitOrder: 15,
    title: "Unit 15 · At the hospital",
    examSection: "§30–36",
    headerTitle: "At the hospital",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "I was in the hospital for four nights. Mark stayed with me almost the whole time, bringing me sodas when I asked for them, and a razor and a toothbrush, and a pair of his own pajamas. He also brought me pencils and paper, for which I had little use but which I [[30]] he would have been lost without, and a great many books, half of which were in languages I couldn't read and the other half of which might as well have been. One night — head aching from Hegel — I asked him to bring me a magazine. He [[31]] rather startled, and when he came back it was with a trade journal (Pharmacology) he had found in the lounge. We talked [[32]] at all. Most of the time he read, with a concentration that astonished me; six hours at a stretch, scarcely glancing up. He [[33]] me almost no attention.\n\nBut he was with me on the bad nights, when I had a hard time breathing and my lungs hurt so I couldn't sleep. Once, when the nurse on duty was three hours late with my medicine, he followed her into the hall and there delivered a tense and eloquent reprimand. After that the nurse was much gentler in her handling of me. The emergency room doctor [[34]] me that Mark had saved my life. This was a dramatic and gratifying thing to hear — and the one which I [[35]] to a number of people — but secretly I thought it was an exaggeration. In subsequent years, [[36]], I've come to feel that he might well have been right.",
    items: [
      {
        options: ["submit", "supply", "suppose", "suggest"],
        correctIndex: 2,
        skillRu: "Глагол мнения + <em>that‑clause</em>: <em>I suppose (that) …</em>.",
        explainCorrect:
          "Paper I had little use for, but which I <strong>suppose</strong> he would have been lost without — «полагаю, без них он бы пропал».",
        trapRu:
          "<em>Submit / supply that</em> — не «думаю, что»; <em>suggest that</em> — «предполагаю/намекаю», здесь личное мнение → <em>suppose</em>.",
        explainIfChosen: {
          "0": "<em>Submit he would have been lost</em> — «подал, что он пропал бы» — nonsense.",
          "1": "<em>Supply he would have been lost</em> — «поставлял, что…» — не то.",
          "3": "<em>Suggest he would have been lost</em> — «намекал, что» — возможно, но <em>suppose</em> = «я думаю» естественнее."
        }
      },
      {
        options: ["looked", "saw", "viewed", "watched"],
        correctIndex: 0,
        skillRu: "Связка глагол + прилагательное: <em>look startled / surprised</em>.",
        explainCorrect:
          "He <strong>looked</strong> rather startled — «выглядел довольно озадаченным» (реакция на просьбу о журнале).",
        trapRu:
          "<em>Look + adjective</em> = «выглядеть»; <em>saw / viewed / watched startled</em> — не так говорят.",
        explainIfChosen: {
          "1": "<em>Saw rather startled</em> — «увидел довольно озадаченным» — нужен объект (<em>saw him look startled</em>).",
          "2": "<em>Viewed rather startled</em> — «рассматривал озадаченным» — не про внешний вид.",
          "3": "<em>Watched rather startled</em> — «наблюдал озадаченным» — nonsense."
        }
      },
      {
        options: ["rarely", "nearly", "merely", "hardly"],
        correctIndex: 3,
        skillRu: "Устойчивое: <em>hardly … at all</em> — «почти совсем не …».",
        explainCorrect:
          "We talked <strong>hardly at all</strong> — «почти совсем не разговаривали» (Mark mostly read).",
        trapRu:
          "Только <em>hardly at all</em> — фиксированная связка; <em>rarely at all</em> реже и слабее.",
        explainIfChosen: {
          "0": "<em>Rarely at all</em> — «редко вообще» — возможно, но <em>hardly at all</em> типичнее.",
          "1": "<em>Nearly at all</em> — «почти вообще» — не сочетается так.",
          "2": "<em>Merely at all</em> — «лишь вообще» — nonsense."
        }
      },
      {
        options: ["paid", "put", "kept", "held"],
        correctIndex: 0,
        skillRu: "Коллокация: <em>pay attention to someone</em> → <em>pay someone attention</em>.",
        explainCorrect:
          "He <strong>paid</strong> me almost no attention — «почти не обращал на меня внимания».",
        trapRu:
          "<em>Put / kept / held someone attention</em> — не говорят; только <em>pay attention</em>.",
        explainIfChosen: {
          "1": "<em>Put me almost no attention</em> — не коллокация.",
          "2": "<em>Kept me almost no attention</em> — «держал мне внимание» — nonsense.",
          "3": "<em>Held me almost no attention</em> — «удерживал внимание» — не то."
        }
      },
      {
        options: ["said", "told", "talked", "spoke"],
        correctIndex: 1,
        skillRu: "Глагол + человек + <em>that‑clause</em>: <em>tell someone that …</em>.",
        explainCorrect:
          "The doctor <strong>told me that</strong> Mark had saved my life — «сказал мне, что Марк спас мне жизнь».",
        trapRu:
          "<em>Said me that</em> — неверно; <em>talked / spoke me that</em> — тоже.",
        explainIfChosen: {
          "0": "<em>Said me that</em> — правильно <em>said to me that</em> или <em>told me that</em>.",
          "2": "<em>Talked me that</em> — <em>talk to someone</em>, не <em>talk someone that</em>.",
          "3": "<em>Spoke me that</em> — <em>spoke to me</em>, не с <em>that‑clause</em> так."
        }
      },
      {
        options: ["reviewed", "repeated", "recited", "recalled"],
        correctIndex: 1,
        skillRu: "Глагол + <em>to someone</em>: <em>repeat something to people</em>.",
        explainCorrect:
          "The one which I <strong>repeated to</strong> a number of people — «то, что я пересказывал многим».",
        trapRu:
          "<em>Reviewed / recited to people</em> — «пересматривал / декламировал» — не «рассказывал историю».",
        explainIfChosen: {
          "0": "<em>Reviewed to a number of people</em> — «пересмотрел для людей» — не «рассказал».",
          "2": "<em>Recited to a number of people</em> — «продекламировал» — слишком формально для разговора.",
          "3": "<em>Recalled to a number of people</em> — «вспомнил для людей» — не «передал слухам»."
        }
      },
      {
        options: ["although", "otherwise", "therefore", "however"],
        correctIndex: 3,
        skillRu: "Связка‑конtrast между предложениями: <em>however</em>.",
        explainCorrect:
          "I thought it was an exaggeration. In subsequent years, <strong>however</strong>, I've come to feel he might have been right — «однако со временем я понял…».",
        trapRu:
          "<em>Although</em> — нужна придаточная; <em>therefore</em> — «поэтому» (логика наоборот); <em>otherwise</em> — «иначе».",
        explainIfChosen: {
          "0": "<em>Although, I've come to feel</em> — после <em>Although</em> нужна другая часть предложения.",
          "1": "<em>Otherwise, I've come to feel</em> — «иначе я бы понял» — не контраст с прошлым мнением.",
          "2": "<em>Therefore, I've come to feel</em> — «поэтому я понял» — не следствие из «это преувеличение»."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
