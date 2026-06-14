/**
 * ЕГЭ Lexis Exam · Unit 17 · Kate (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-kate",
    unitOrder: 17,
    title: "Unit 17 · Kate",
    examSection: "§30–36",
    headerTitle: "Kate",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Kate was at a loss. Her parents were [[30]] that their daughter had real talent, but what do parents know when you're their only child? Especially when one of them was a music teacher and the other an accountant who were the first to [[31]] that they didn't know much about art, but they knew what they like. Still, they seemed quite willing to support her for another year. Kate was painfully aware that, [[32]] her parents were fairly comfortably off, another year in which she produced no income could only be a burden for them. After much soul-searching, she told them, \"One year only. After that, if the paintings aren't good enough, or if no one shows any interest in exhibiting them, I'll be realistic and look [[33]] a proper job.\"\n\nFor the next six months Kate worked hours that she hadn't realised existed when she'd been a student. During that time, she produced a dozen canvases. She allowed no one to see them for fear that her parents and friends would not be frank with her. She was determined to finish her portfolio and then listen only to the toughest [[34]] possible, those of the professional gallery owners, tougher still, those of the buying public.\n\nBy the eleventh month, Kate had [[35]] twenty-seven works, but she still wasn't sure whether they displayed any real talent. Nevertheless, she felt the time had finally come to allow others to pass [[36]] on them.",
    items: [
      {
        options: ["persuaded", "influenced", "encouraged", "convinced"],
        correctIndex: 3,
        skillRu: "Прилагательное от глагола: <em>be convinced that …</em> — «быть уверенным, что …».",
        explainCorrect:
          "Her parents were <strong>convinced that</strong> their daughter had real talent — «были уверены, что у дочери настоящий талант».",
        trapRu:
          "<em>Persuaded / encouraged that</em> — так не говорят; <em>influenced that</em> — «повлияли, что» — не та конструкция.",
        explainIfChosen: {
          "0": "<em>Were persuaded that</em> — «их убедили, что» — пассив другого смысла; здесь их собственная уверенность.",
          "1": "<em>Were influenced that</em> — «были под влиянием, что» — не говорят.",
          "2": "<em>Were encouraged that</em> — <em>encourage someone to do</em>, не <em>encouraged that</em>."
        }
      },
      {
        options: ["admit", "affirm", "adopt", "assert"],
        correctIndex: 0,
        skillRu: "Глагол + <em>that‑clause</em>: <em>admit that …</em> — «признать, что …».",
        explainCorrect:
          "The first to <strong>admit that</strong> they didn't know much about art — «первыми признали, что мало понимают в искусстве».",
        trapRu:
          "<em>Assert that they didn't know</em> — «утверждали, что не знают» — слишком уверенно; нужно «признать» → <em>admit</em>.",
        explainIfChosen: {
          "1": "<em>Affirm that they didn't know</em> — «подтверждали, что не знают» — не «признание незнания».",
          "2": "<em>Adopt that they didn't know</em> — «приняли, что не знают» — nonsense.",
          "3": "<em>Assert that they didn't know</em> — «заявляли» — противоположно скромному тону."
        }
      },
      {
        options: ["despite", "whereas", "although", "otherwise"],
        correctIndex: 2,
        skillRu: "Уступительный союз + придаточное: <em>although her parents were …</em>.",
        explainCorrect:
          "<strong>Although</strong> her parents were fairly comfortably off, another year without income… — «хотя родители были обеспечены, ещё один год…».",
        trapRu:
          "<em>Despite</em> + существительное/gerund (<em>despite being rich</em>), не <em>despite they were</em>; <em>whereas</em> — контраст двух фактов.",
        explainIfChosen: {
          "0": "<em>Despite her parents were</em> — после <em>despite</em> нужен существительный оборот, не полное предложение.",
          "1": "<em>Whereas her parents were …, another year</em> — сравнивает два параллельных факта; здесь уступка.",
          "3": "<em>Otherwise her parents were off</em> — «иначе родители были обеспечены» — nonsense."
        }
      },
      {
        options: ["for", "into", "after", "around"],
        correctIndex: 0,
        skillRu: "Фразовый глагол: <em>look for a job</em> — «искать работу».",
        explainCorrect:
          "Look <strong>for</strong> a proper job — «искать нормальную работу» (<em>look for</em>).",
        trapRu:
          "<em>Look into</em> — «разобраться»; <em>look after</em> — «присматривать»; <em>look around</em> — «осмотреться».",
        explainIfChosen: {
          "1": "<em>Look into a proper job</em> — «изучить работу» — не «найти себе».",
          "2": "<em>Look after a proper job</em> — «присматривать за работой» — nonsense.",
          "3": "<em>Look around a proper job</em> — «оглядеться вокруг работы» — не то."
        }
      },
      {
        options: ["beliefs", "opinions", "outlooks", "attitudes"],
        correctIndex: 1,
        skillRu: "Коллокация: <em>listen to the toughest opinions</em> — «мнения / отзывы».",
        explainCorrect:
          "Listen only to the toughest <strong>opinions</strong> — «слушать только самые жёсткие мнения» (галеристов, потом публики).",
        trapRu:
          "<em>Beliefs / outlooks / attitudes</em> — «убеждения / взгляды / отношение» — слабее для «оценки картин».",
        explainIfChosen: {
          "0": "<em>Toughest beliefs</em> — «самые жёсткие убеждения» — не про рецензию работ.",
          "2": "<em>Toughest outlooks</em> — «мировоззрения» — не коллокация с <em>toughest</em>.",
          "3": "<em>Toughest attitudes</em> — «отношения» — ближе, но <em>opinions of gallery owners</em> точнее."
        }
      },
      {
        options: ["fulfilled", "completed", "concluded", "accomplished"],
        correctIndex: 1,
        skillRu: "Глагол + объект: <em>complete works / paintings</em> — «завершить работы».",
        explainCorrect:
          "Kate had <strong>completed</strong> twenty-seven works — «завершила двадцать семь работ» (к концу одиннадцатого месяца).",
        trapRu:
          "<em>Fulfilled / concluded works</em> — не «доделать картины»; <em>accomplished</em> возможно, но <em>complete</em> типичнее для произведений.",
        explainIfChosen: {
          "0": "<em>Fulfilled twenty-seven works</em> — «исполнила работы» — не про живопись.",
          "2": "<em>Concluded twenty-seven works</em> — «заключила работы» — nonsense.",
          "3": "<em>Accomplished twenty-seven works</em> — «достигла в двадцати семи работах» — возможно, но <em>completed</em> естественнее."
        }
      },
      {
        options: ["assessment", "evaluation", "judgement", "estimation"],
        correctIndex: 2,
        skillRu: "Устойчивое: <em>pass judgement on something</em> — «выносить суждение / оценку».",
        explainCorrect:
          "Allow others to pass <strong>judgement</strong> on them — «позволить другим судить / оценивать их» (картины).",
        trapRu:
          "<em>Pass assessment / evaluation / estimation on</em> — не так говорят; только <em>pass judgement on</em>.",
        explainIfChosen: {
          "0": "<em>Pass assessment on them</em> — «передать оценку на них» — не устойчиво.",
          "1": "<em>Pass evaluation on them</em> — «передать оценивание» — не идиома.",
          "3": "<em>Pass estimation on them</em> — «передать прикидку» — nonsense."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
