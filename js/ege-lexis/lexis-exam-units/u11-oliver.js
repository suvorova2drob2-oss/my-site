/**
 * ЕГЭ Lexis Exam · Unit 11 · Oliver (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-oliver",
    unitOrder: 11,
    title: "Unit 11 · Oliver",
    examSection: "§30–36",
    headerTitle: "Oliver",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "The second term started. During it, Oliver never once [[30]] a lesson at school. When he returned home each evening, he went straight up to the bedroom he shared with his elder brother, where, with the aid of a torch, he studied for hours. There were even [[31]] when his mother found Oliver sound asleep on the floor, open books scattered around him.\n\nEvery day he continued to visit his uncle, who seemed to know a great deal about different countries, and continued to teach Oliver about so many other things, [[32]] as if he knew where his teachers had left off. His brother was [[33]], because Oliver no longer accompanied him to the cinema to watch new films on Saturday night, but returned to school where his teacher of mathematics, Mr Daley, gave him extra lessons. It would be years before Oliver [[34]] that Mr Daley never gave so much attention to his classmates. Oliver was his favourite student because he worked hard and was [[35]] on mathematics.\n\nThis morning Oliver was very early at school. He was going to take part in a maths competition. He followed the teacher down a long corridor that was lined with photographs of old school teams and display cabinets filled with silver cups, to [[36]] the next generation of past glories. When they reached the Headmaster's office, the teacher said, \"You can sit anywhere you like, Oliver. Just make sure to stop talking the moment the Headmaster enters.\"",
    items: [
      {
        options: ["failed", "missed", "lost", "lacked"],
        correctIndex: 1,
        skillRu: "Коллокация: <em>miss a lesson</em> — «пропустить урок».",
        explainCorrect:
          "Oliver never once <strong>missed a lesson</strong> — «ни разу не пропустил урок» (учился усердно).",
        trapRu:
          "<em>Failed a lesson</em> — «провалил урок»; <em>lost/lacked a lesson</em> — не говорят.",
        explainIfChosen: {
          "0": "<em>Failed a lesson</em> — «провалил занятие» — не «пропустил».",
          "2": "<em>Lost a lesson</em> — не коллокация.",
          "3": "<em>Lacked a lesson</em> — «не хватало урока» — бессмысленно."
        }
      },
      {
        options: ["circumstances", "affairs", "accidents", "occasions"],
        correctIndex: 3,
        skillRu: "Идиома: <em>on occasions</em> / <em>there were occasions when …</em>.",
        explainCorrect:
          "There were even <strong>occasions when</strong> his mother found him asleep — «бывали случаи, когда …».",
        trapRu:
          "<em>Accidents when</em> — «несчастные случаи»; здесь просто «иногда / бывало» → <em>occasions</em>.",
        explainIfChosen: {
          "0": "<em>Circumstances when</em> — «обстоятельства, когда» — тяжеловато; <em>occasions</em> естественнее.",
          "1": "<em>Affairs when</em> — «дела, когда» — не то.",
          "2": "<em>Accidents when</em> — «аварии, когда» — не про сон с книгами."
        }
      },
      {
        options: ["almost", "although", "already", "altogether"],
        correctIndex: 0,
        skillRu: "Наречие: <em>almost as if</em> — «почти как будто».",
        explainCorrect:
          "Uncle taught him <strong>almost as if</strong> he knew where teachers had left off — «почти как будто знал, на чём остановились учителя».",
        trapRu:
          "<em>Although as if</em> — союз + as if не сочетаются; нужно <em>almost as if</em>.",
        explainIfChosen: {
          "1": "<em>Although as if</em> — грамматически неверно.",
          "2": "<em>Already as if</em> — «уже как будто» — слабее нужного оттенка.",
          "3": "<em>Altogether as if</em> — «вполне как будто» — возможно, но <em>almost as if</em> типичнее."
        }
      },
      {
        options: ["disregarded", "disappointed", "disillusioned", "disapproved"],
        correctIndex: 1,
        skillRu: "Прилагательное: <em>be disappointed</em> — «быть разочарованным».",
        explainCorrect:
          "His brother was <strong>disappointed</strong> — «брат был разочарован», что Oliver больше не ходил в кино.",
        trapRu:
          "<em>Disapproved</em> нужен <em>of</em>; <em>disillusioned</em> — «разочарован в иллюзиях» — слишком сильно.",
        explainIfChosen: {
          "0": "<em>Disregarded</em> = «игнорировал» — не «был разочарован».",
          "2": "<em>Disillusioned</em> — «разочарован в чём‑то серьёзном» — сильнее, чем про кино.",
          "3": "<em>Disapproved</em> — «не одобрял»; нужно <em>disapproved of</em>."
        }
      },
      {
        options: ["received", "required", "realised", "revised"],
        correctIndex: 2,
        skillRu: "Глагол + <em>that‑clause</em>: <em>It would be years before he realised that …</em>.",
        explainCorrect:
          "It would be years before Oliver <strong>realised that</strong> Mr Daley favoured him — «понял лишь через годы, что …».",
        trapRu:
          "<em>Received / required / revised that</em> — не «осознал, что».",
        explainIfChosen: {
          "0": "<em>Received that</em> — «получил, что» — nonsense.",
          "1": "<em>Required that</em> — «потребовал, чтобы» — не то.",
          "3": "<em>Revised that</em> — «пересмотрел, что» — не про осознание."
        }
      },
      {
        options: ["fond", "eager", "sharp", "keen"],
        correctIndex: 3,
        skillRu: "Прилагательное + <em>on</em>: <em>be keen on mathematics</em>.",
        explainCorrect:
          "He worked hard and was <strong>keen on mathematics</strong> — «увлекался математикой».",
        trapRu:
          "<em>Fond on</em> — нужно <em>fond of</em>; после <em>on</em> — <em>keen on</em>.",
        explainIfChosen: {
          "0": "<em>Fond on mathematics</em> — правильно <em>fond of mathematics</em>.",
          "1": "<em>Eager on</em> — обычно <em>eager to learn</em> или <em>eager for</em>.",
          "2": "<em>Sharp on mathematics</em> — «острый на математику» — нестандартно."
        }
      },
      {
        options: ["review", "remember", "remind", "remain"],
        correctIndex: 2,
        skillRu: "Глагол + объект: <em>remind the next generation of past glories</em>.",
        explainCorrect:
          "Cups and photos <strong>remind the next generation of past glories</strong> — «напоминают новому поколению о прошлых победах».",
        trapRu:
          "Снова <em>remember / remind</em>: кубки <em>remind</em> людей, люди <em>remember</em>.",
        explainIfChosen: {
          "0": "<em>Review the next generation</em> — «пересматривать поколение» — не то.",
          "1": "<em>Remember the next generation</em> — «помнить поколение» — не про кубки.",
          "3": "<em>Remain the next generation</em> — «оставаться поколением» — бессмысленно."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
