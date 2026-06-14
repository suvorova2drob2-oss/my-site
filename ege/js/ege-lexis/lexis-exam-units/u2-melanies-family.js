/**
 * ЕГЭ Lexis Exam · Unit 2 · Melanie's family (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-melanies-family",
    unitOrder: 2,
    title: "Unit 2 · Melanie's family",
    examSection: "§30–36",
    headerTitle: "Melanie's family",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Melanie loved her family very much. She adored her nephews. Now they were fourteen and seventeen. They were good kids, who had no ambition to leave their native town. Their father expected that both of them would [[30]] him at his plumbing company someday. Neither of them [[31]]. They already helped out there after school. The company was a good moneymaker, and neither boy was planning to go to college, since their parents hadn't. Melanie's three years at the University of Chicago as an English major with a creative writing minor, were [[32]] an exception for her family. She'd gone to college before her nephews were even born, so she wasn't an [[33]] they could relate to, and she had done nothing special with her life.\n\nMelanie kept herself busy with the things she loved to do. She still read a lot, and she was first on the list at the library for every bestseller that came out. Her mother had been a volunteer at the town library at the weekends and [[34]] her to read books. When her mother had gotten too sick to continue working, Melanie had taken [[35]] one of her favourite duties. She read stories to children every Saturday morning. Her mother had been \"The Story Lady\" to the local children, and Melanie happily stepped into her shoes. Her sister said that Melanie had a gift with the children, like their mother had, [[36]] Melanie didn't think so.",
    items: [
      {
        options: ["unite", "link", "join", "add"],
        correctIndex: 2,
        skillRu: "Глагол + компания: <em>join someone at a company</em> — «пойти работать к кому-то».",
        explainCorrect:
          "Отец ждал, что племянники когда‑нибудь <strong>join him at his plumbing company</strong> — «пойдут работать к нему в фирму».",
        trapRu:
          "Все глаголы про «соединение», но с человеком и местом работы нужен именно <em>join</em>, не <em>link</em> или <em>unite</em>.",
        explainIfChosen: {
          "0": "<em>Unite</em> = «объединять» — не «пойти работать к отцу».",
          "1": "<em>Link</em> + <em>him</em> без предлога здесь не звучит: не «связать его с компанией».",
          "3": "<em>Add</em> = «добавить» — не про работу в семейном бизнесе."
        }
      },
      {
        options: ["objected", "opposed", "denied", "rejected"],
        correctIndex: 0,
        skillRu: "Устойчивая фраза: <em>Neither of them objected</em> — «ни один не возражал».",
        explainCorrect:
          "После «отец ждал, что они будут работать у него» логично: <strong>Neither of them objected</strong> — «ни один не возражал» (уже помогают после школы).",
        trapRu:
          "Слова <em>deny / reject / oppose</em> тоже «отрицают», но только <em>object</em> идёт без дополнения: <em>Neither objected</em>.",
        explainIfChosen: {
          "1": "<em>Opposed</em> обычно требует объект (<em>opposed the plan</em>) — одно слово «opposed» без «чему» звучит обрывисто.",
          "2": "<em>Denied</em> = «отрицал факт / отказал в чём‑то» — не «не возражал против плана».",
          "3": "<em>Rejected</em> = «отверг предложение» — грамматика и смысл не те."
        }
      },
      {
        options: ["regarded", "considered", "concerned", "confirmed"],
        correctIndex: 1,
        skillRu: "Пассив + <em>an exception</em>: <em>be considered an exception</em> — «считаться исключением».",
        explainCorrect:
          "Три года в Чикагском университете <strong>were considered an exception</strong> для семьи — «считались исключением» (остальные не учились).",
        trapRu:
          "<em>Regarded</em> почти всегда с <em>as</em> (<em>regarded as</em>), а в тексте после пропуска сразу <em>an exception</em> — подходит <em>considered</em>.",
        explainIfChosen: {
          "0": "<em>Regarded an exception</em> без <em>as</em> грамматически слабо; типично <em>regarded as an exception</em>.",
          "2": "<em>Concerned</em> = «обеспокоенный» или <em>concerned with</em> — не «считался исключением».",
          "3": "<em>Confirmed</em> = «подтвердил» — не про оценку семьи."
        }
      },
      {
        options: ["exception", "exchange", "excellence", "example"],
        correctIndex: 3,
        skillRu: "Существительное + <em>relate to</em>: <em>an example they could relate to</em> — «пример, с которым могли себя сравнить».",
        explainCorrect:
          "Она не была <strong>an example they could relate to</strong> — «таким примером / образцом, с которым племянники могли бы себя отождествить» (училась до их рождения).",
        trapRu:
          "<em>Exception</em> уже было в предыдущем предложении — ловушка повторить то же слово; здесь нужен «пример для подражания».",
        explainIfChosen: {
          "0": "<em>Exception</em> = «исключение» — не «пример, на которого равняются»; плюс слово только что было выше.",
          "1": "<em>Exchange</em> = «обмен» — не подходит по смыслу.",
          "2": "<em>Excellence</em> = «превосходство» — не сочетается с <em>relate to</em> в этом смысле."
        }
      },
      {
        options: ["impressed", "influenced", "inspired", "inclined"],
        correctIndex: 2,
        skillRu: "Глагол + to‑infinitive: <em>inspire someone to do</em> — «вдохновить / приохотить к чему‑то».",
        explainCorrect:
          "Мама‑волонтёр в библиотеке <strong>inspired her to read books</strong> — «приохотила / вдохновила её читать».",
        trapRu:
          "<em>Impressed</em> не ставят с <em>to read</em> (*impressed her to read); нужен глагол типа <em>inspire / encourage</em>.",
        explainIfChosen: {
          "0": "<em>Impressed</em> + <em>to read</em> — неверная конструкция; говорят <em>impressed her with</em> или <em>impressed by</em>.",
          "1": "<em>Influenced her to read</em> возможно, но <em>inspire to read</em> естественнее в контексте любви к книгам.",
          "3": "<em>Inclined her to read</em> — редко и книжно; не лучший вариант для этого текста."
        }
      },
      {
        options: ["after", "into", "upon", "over"],
        correctIndex: 3,
        skillRu: "Фразовый глагол: <em>take over</em> — «взять на себя (обязанности)».",
        explainCorrect:
          "Melanie <strong>took over one of her favourite duties</strong> — «взяла на себя одну из любимых обязанностей мамы» (читать детям по субботам).",
        trapRu:
          "После <em>taken</em> часто ищут предлог «наугад» — нужен именно <em>over</em> в значении «заменить / принять эстафету».",
        explainIfChosen: {
          "0": "<em>Take after</em> = «быть похожим на родственника» — другой смысл.",
          "1": "<em>Take into</em> — не про обязанности.",
          "2": "<em>Take upon</em> — устаревшее/редкое; стандартно <em>take over</em>."
        }
      },
      {
        options: ["therefore", "although", "otherwise", "moreover"],
        correctIndex: 1,
        skillRu: "Союз уступки: <em>…, although …</em> — «хотя / несмотря на то что».",
        explainCorrect:
          "Сестра говорит, что у Melanie талант, <strong>although Melanie didn't think so</strong> — «хотя сама Melanie так не считала».",
        trapRu:
          "<em>However</em> и <em>although</em> близки, но после запятой в середине предложения здесь классически <em>although + clause</em>.",
        explainIfChosen: {
          "0": "<em>Therefore</em> = «поэтому» — логика наоборот (не следствие, а контраст).",
          "2": "<em>Otherwise</em> = «иначе / в противном случае» — не уступка.",
          "3": "<em>Moreover</em> = «более того» — добавляет, а не спорит с мнением Melanie."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
