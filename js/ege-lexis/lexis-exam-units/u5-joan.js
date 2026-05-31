/**
 * ЕГЭ Lexis Exam · Unit 5 · Joan (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-joan",
    unitOrder: 5,
    title: "Unit 5 · Joan",
    examSection: "§30–36",
    headerTitle: "Joan",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "By the next day, in her usual competent way, Joan had everything organized. Her bags were packed, her passport was in her purse, and her bills were paid. Nothing could [[30]] her from leaving. She had put her favourite DVDs in her suitcase, [[31]] she wasn't sure why, and took a copy of a new bestseller to read on the way. She was taking mostly jeans, long-sleeves, hiking boots, and a pair of sneakers. She [[32]] casual clothes, but still put into her bag one nice dress she was sure she'd never use — just in [[33]]. She was going to wear a coat, since the weather in Norway was still chilly. Joan had everything she needed, and she felt ready to go. In her mind, she had already left when she went to her sister for dinner that night, and afterwards said goodbye to her and her nephews.\n\n\"Take care of yourself, Joan. I love you,\" her sister said, smiling at her. Joan nodded, with tears in her eyes, and then made a dash for her car. She knew that if she stayed a minute longer, she'd be sobbing in her sister's arms. Joan was already [[34]] her.\n\nShe was due to arrive in Oslo at 3.00 p.m. She had booked two nights at a hotel in Oslo she'd found on the Internet — the Wessel Hotel. She was going to spend two days [[35]] the Oslo sights she had read about for years and never seen. She had an open-return ticket, since she didn't want to limit her stay in Norway. She wanted to be there for as long as she was happy, or [[36]] her money ran out.",
    items: [
      {
        options: ["precede", "promote", "present", "prevent"],
        correctIndex: 3,
        skillRu: "Глагол + <em>from</em>: <em>prevent someone from doing</em> — «мешать / не дать сделать».",
        explainCorrect:
          "Всё готово к отъезду: <strong>Nothing could prevent her from leaving</strong> — «ничто не могло помешать ей уехать».",
        trapRu:
          "Слова похожи по «официальности», но только <em>prevent … from</em> — устойчивая пара с «from leaving».",
        explainIfChosen: {
          "0": "<em>Precede her from leaving</em> — «предшествовать отъезду» — бессмысленно.",
          "1": "<em>Promote her from leaving</em> — «способствовать отъезду» — против «nothing could» (мешало бы).",
          "2": "<em>Present her from leaving</em> — не существует в таком значении."
        }
      },
      {
        options: ["although", "therefore", "otherwise", "moreover"],
        correctIndex: 0,
        skillRu: "Союз уступки: <em>although</em> — «хотя».",
        explainCorrect:
          "Положила DVD, <strong>although she wasn't sure why</strong> — «хотя сама не понимала зачем».",
        trapRu:
          "<em>Therefore / moreover</em> добавляют, а не противоречат; нужен контраст «положила, но не знаю зачем».",
        explainIfChosen: {
          "1": "<em>Therefore</em> = «поэтому» — не объясняет парадокс «положила, но не знаю зачем».",
          "2": "<em>Otherwise</em> = «иначе / в противном случае» — не уступка.",
          "3": "<em>Moreover</em> = «более того» — усиливает, а не противоречит."
        }
      },
      {
        options: ["pleased", "preferred", "satisfied", "delighted"],
        correctIndex: 1,
        skillRu: "Глагол предпочтения: <em>prefer casual clothes</em> — «предпочитала casual».",
        explainCorrect:
          "<strong>She preferred casual clothes</strong> — «она предпочитала повседневную одежду» (jeans, boots…).",
        trapRu:
          "<em>Pleased / satisfied / delighted</em> обычно <em>with</em> чем‑то, не «pleased casual clothes» напрямую.",
        explainIfChosen: {
          "0": "<em>Pleased casual clothes</em> — нужно <em>pleased with</em> или <em>pleased to wear</em>.",
          "2": "<em>Satisfied casual clothes</em> — то же; не «была довольна джинсами» как предпочтение.",
          "3": "<em>Delighted casual clothes</em> — грамматически не сходится."
        }
      },
      {
        options: ["fact", "case", "time", "point"],
        correctIndex: 1,
        skillRu: "Идиома: <em>just in case</em> — «на всякий случай».",
        explainCorrect:
          "Платье, которым не воспользуется, — <strong>just in case</strong> — «на всякий случай».",
        trapRu:
          "Четыре существительных после <em>in</em>, но только <em>in case</em> — готовая фраза.",
        explainIfChosen: {
          "0": "<em>Just in fact</em> — не говорят.",
          "2": "<em>Just in time</em> = «как раз вовремя» — другой смысл.",
          "3": "<em>Just in point</em> — не идиома; иногда <em>in point of fact</em>, но не здесь."
        }
      },
      {
        options: ["failing", "lacking", "missing", "losing"],
        correctIndex: 2,
        skillRu: "Глагол чувства: <em>miss someone</em> — «скучать по кому‑то».",
        explainCorrect:
          "Прощание с сестрой: <strong>Joan was already missing her</strong> — «уже скучала по ней» (ещё до отъезда).",
        trapRu:
          "<em>Losing her</em> = «терять»; <em>failing / lacking</em> — не про тоску по сестре.",
        explainIfChosen: {
          "0": "<em>Failing her</em> = «подводить / не оправдывать ожидания» — не про прощание.",
          "1": "<em>Lacking her</em> — не говорят «скучать»; <em>lack</em> = «не хватать чего‑то».",
          "3": "<em>Losing her</em> = «терять» — драматично и не про скуку."
        }
      },
      {
        options: ["exploring", "investigating", "travelling", "wondering"],
        correctIndex: 0,
        skillRu: "Герундий: <em>spend two days exploring sights</em> — «провести дни, осматривая …».",
        explainCorrect:
          "Два дня в Осло: <strong>spend two days exploring the Oslo sights</strong> — «осматривая / исследуя достопримечательности».",
        trapRu:
          "<em>Investigating sights</em> — «расследовать»; <em>travelling sights</em> — без предлога не сходится.",
        explainIfChosen: {
          "1": "<em>Investigating sights</em> — как детектив; не про туризм.",
          "2": "<em>Travelling the sights</em> — неестественно; говорят <em>travel to</em> или <em>explore sights</em>.",
          "3": "<em>Wondering the sights</em> — <em>wonder about</em>, не «wondering sights»."
        }
      },
      {
        options: ["despite", "unlike", "until", "except"],
        correctIndex: 2,
        skillRu: "Союз времени: <em>until her money ran out</em> — «пока не кончатся деньги».",
        explainCorrect:
          "Хотела остаться, пока счастлива, <strong>or until her money ran out</strong> — «или пока не кончатся деньги».",
        trapRu:
          "После <em>or</em> нужна граница времени — <em>until</em>, не <em>despite</em> (+ существительное).",
        explainIfChosen: {
          "0": "<em>Despite her money ran out</em> — <em>despite</em> не с clause; нужно <em>despite running out of money</em>.",
          "1": "<em>Unlike her money ran out</em> — «в отличие от того, что деньги кончились» — бессмысленно.",
          "3": "<em>Except her money ran out</em> — «кроме того, что деньги кончились» — не про срок пребывания."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
