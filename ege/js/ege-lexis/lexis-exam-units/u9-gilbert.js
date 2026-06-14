/**
 * ЕГЭ Lexis Exam · Unit 9 · Gilbert (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-gilbert",
    unitOrder: 9,
    title: "Unit 9 · Gilbert",
    examSection: "§30–36",
    headerTitle: "Gilbert",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Gilbert Coleman had edited the fourth draft of Mr Taylor's remarkable memoirs. Now all he wanted to do was take the first available flight to London and hand the manuscript to his publisher. But there was something even more important that [[30]] him from leaving. An [[31]] he had no intention of missing, under any circumstances. His mother's seventieth birthday party.\n\nSusan, his mother, had lived in a cottage on the estate since her second husband's death three years before. She [[32]] actively involved with several local charities, and [[33]] she shortened her jogging distance, she continued to jog every day. Gilbert would never forget the personal sacrifices his mother had made to [[34]] he won a scholarship to Hartford, and with it the chance to compete with anyone, whatever their background, [[35]] his oldest friend Dave Dowson.\n\nGilbert and Dave had first met at the church over forty years ago, and seemed an unlikely pair to end up as best friends. One born in the back streets of the docks, the other in a private ward of the London Royal Infirmary. One a scholar, the other a sportsman. And certainly no one would have [[36]] that Gilbert would fall in love with Dave's sister, except Alice herself, who claimed she had planned the whole thing after they first met at Dave's twelfth birthday party.",
    items: [
      {
        options: ["pretended", "prevented", "presented", "preserved"],
        correctIndex: 1,
        skillRu: "Глагол + <em>from</em>: <em>prevent someone from doing</em>.",
        explainCorrect:
          "День рождения мамы важнее рейса: <strong>prevented him from leaving</strong> — «мешало / не давало уехать».",
        trapRu:
          "Похожие <em>‑ent</em>-глаголы; только <em>prevent … from</em> с «from leaving».",
        explainIfChosen: {
          "0": "<em>Pretended him from leaving</em> — «притворялся» — не та конструкция.",
          "2": "<em>Presented him from leaving</em> — не говорят.",
          "3": "<em>Preserved him from leaving</em> — «сохраняло его от отъезда» — нестандартно."
        }
      },
      {
        options: ["event", "accident", "incident", "occurrence"],
        correctIndex: 0,
        skillRu: "Существительное: <em>an event you can't miss</em> — «событие».",
        explainCorrect:
          "Юбилей мамы — <strong>an event he had no intention of missing</strong> — «событие, которое он не мог пропустить».",
        trapRu:
          "День рождения — planned <em>event</em>, не <em>accident</em> или <em>incident</em>.",
        explainIfChosen: {
          "1": "<em>Accident</em> = «несчастный случай» — не про праздник.",
          "2": "<em>Incident</em> — «инцидент» — нейтрально/негативно, не «праздник».",
          "3": "<em>Occurrence</em> — «случай, происшествие» — слабее для birthday party."
        }
      },
      {
        options: ["remained", "resolved", "removed", "retained"],
        correctIndex: 0,
        skillRu: "Глагол состояния: <em>remain involved</em> — «оставаться вовлечённой».",
        explainCorrect:
          "She <strong>remained actively involved</strong> with charities — «по‑прежнему активно участвовала».",
        trapRu:
          "<em>Resolved / removed / retained involved</em> — не сочетаются так с <em>actively involved</em>.",
        explainIfChosen: {
          "1": "<em>Resolved actively involved</em> — «решила быть вовлечённой» — странно.",
          "2": "<em>Removed actively involved</em> — «перестала быть вовлечённой» — против смысла.",
          "3": "<em>Retained involved</em> — грамматически криво; говорят <em>retained her involvement</em>."
        }
      },
      {
        options: ["despite", "although", "however", "moreover"],
        correctIndex: 1,
        skillRu: "Союз уступки + clause: <em>although she shortened …, she continued …</em>.",
        explainCorrect:
          "<strong>Although she shortened her jogging distance</strong>, she continued to jog — «хотя сократила дистанцию, бегала каждый день».",
        trapRu:
          "<em>Despite</em> + существительное (<em>despite shortening</em>), не <em>despite she shortened</em>.",
        explainIfChosen: {
          "0": "<em>Despite she shortened</em> — нужно <em>Despite shortening</em> или <em>Although she shortened</em>.",
          "2": "<em>However she shortened</em> — не соединяет два clause так.",
          "3": "<em>Moreover</em> = «более того» — добавляет, а не уступает."
        }
      },
      {
        options: ["confirm", "support", "provide", "ensure"],
        correctIndex: 3,
        skillRu: "Глагол + <em>that‑clause</em>: <em>ensure (that) he won …</em> — «обеспечить, чтобы …».",
        explainCorrect:
          "Жертвы мамы, чтобы <strong>ensure he won a scholarship</strong> — «чтобы он получил стипендию в Hartford».",
        trapRu:
          "После <em>to</em> нужен глагол «добиться результата» — <em>ensure</em>, не <em>provide he won</em>.",
        explainIfChosen: {
          "0": "<em>Confirm he won</em> — «подтвердить, что он выиграл» — не про жертвы ради стипендии.",
          "1": "<em>Support he won</em> — «поддержать, что он выиграл» — грамматика не та.",
          "2": "<em>Provide he won</em> — <em>provide</em> + объект, не <em>provide he won</em>."
        }
      },
      {
        options: ["containing", "consisting", "including", "adding"],
        correctIndex: 2,
        skillRu: "Предлог через gerund: <em>compete with anyone, including …</em> — «включая …».",
        explainCorrect:
          "Chance to compete with anyone, <strong>including his oldest friend Dave</strong> — «с кем угодно, <em>в том числе</em> с лучшим другом».",
        trapRu:
          "Не «family consisting of Dave» — Dave не «состав» списка, а один из людей «including».",
        explainIfChosen: {
          "0": "<em>Containing Dave</em> — «список, содержащий Dave» — не про соревнование.",
          "1": "<em>Consisting of Dave</em> — «состоящий из Dave» — бессмысленно.",
          "3": "<em>Adding Dave</em> — «добавляя Dave» — не то."
        }
      },
      {
        options: ["predicted", "preferred", "preceded", "prepared"],
        correctIndex: 0,
        skillRu: "Глагол + <em>that‑clause</em>: <em>predict that … would …</em> — «предсказать».",
        explainCorrect:
          "No one would have <strong>predicted that Gilbert would fall in love</strong> — «никто не мог бы предсказать».",
        trapRu:
          "<em>Preferred / prepared that</em> — не с <em>that-clause</em> в этом смысле; классика — <em>predict</em>.",
        explainIfChosen: {
          "1": "<em>Preferred that Gilbert would fall in love</em> — «предпочитали, чтобы влюбился» — не то.",
          "2": "<em>Preceded that</em> — «предшествовало тому, что» — бессмысленно.",
          "3": "<em>Prepared that</em> — не говорят; <em>prepare for</em> или <em>prepare to</em>."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
