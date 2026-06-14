/**
 * ЕГЭ Lexis Exam · Unit 8 · Joyce (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-joyce",
    unitOrder: 8,
    title: "Unit 8 · Joyce",
    examSection: "§30–36",
    headerTitle: "Joyce",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Joyce had always hated everything about Hollywood. She wanted nothing to [[30]] with a life like her parents' and grandparents'. It was their mother's dream, and Joyce's youngest sister Leslie had finally [[31]] her mother's dream for her. Julia, their mother, was [[32]] now that Joyce didn't have her talent. However, Julia was sure that Leslie was talented. She controlled every aspect of Leslie's career, just as her father had run her own. Julia had never decided what to have for breakfast, let [[33]] what parts to take, without him. He made all her decisions for her. Just like Julia was now making Leslie's: The only difference was that Leslie was a child. Julia wasn't, when her father was making her decisions for her. He was running her career and her life.\n\nJulia's main interest was in Leslie's acting, not her general education. Julia thought Leslie could always catch [[34]] on school later, though she'd actually never fallen behind. Joyce was conscientious about Leslie's education, and everyone on the set [[35]] her. She had an occasional battle with Julia, who didn't want Leslie to [[36]] her work with her drama coach, or voice lessons, but Leslie always managed to do all. What she didn't get to do was hanging out with kids of her own age, or play, except with adults.",
    items: [
      {
        options: ["get", "make", "keep", "do"],
        correctIndex: 3,
        skillRu: "Идиома: <em>have nothing to do with</em> — «не иметь отношения к …».",
        explainCorrect:
          "<strong>wanted nothing to do with</strong> a life like her parents' — «не хотела жизни, как у родителей в Голливуде».",
        trapRu:
          "Четыре коротких глагола после <em>nothing to</em>, но устойчиво только <em>do with</em>.",
        explainIfChosen: {
          "0": "<em>Nothing to get with</em> — не говорят.",
          "1": "<em>Nothing to make with</em> — не идиома.",
          "2": "<em>Nothing to keep with</em> — не существует."
        }
      },
      {
        options: ["fulfilled", "managed", "completed", "performed"],
        correctIndex: 0,
        skillRu: "Коллокация: <em>fulfil / fulfill someone's dream</em> — «осуществить чью‑то мечту».",
        explainCorrect:
          "Leslie <strong>fulfilled her mother's dream for her</strong> — «осуществила мамину мечту (стала актрисой)».",
        trapRu:
          "<em>Managed / completed / performed a dream</em> — не говорят; мечту <em>fulfil</em>.",
        explainIfChosen: {
          "1": "<em>Managed her mother's dream</em> — «справилась с мечтой» — не то.",
          "2": "<em>Completed a dream</em> — «завершила мечту» — не коллокация.",
          "3": "<em>Performed a dream</em> — «исполнила мечту» на сцене? — не то значение."
        }
      },
      {
        options: ["confirmed", "considered", "convinced", "concerned"],
        correctIndex: 2,
        skillRu: "Прилагательное + <em>that‑clause</em>: <em>be convinced that …</em> — «быть уверенной, что …».",
        explainCorrect:
          "Julia <strong>was convinced that Joyce didn't have her talent</strong> — «была уверена, что у Joyce нет актёрского таланта» (в отличие от Leslie).",
        trapRu:
          "<em>Concerned</em> = «обеспокоена» — возможно, но рядом «Julia was <em>sure</em> that Leslie was talented» — пара «уверена / convinced».",
        explainIfChosen: {
          "0": "<em>Confirmed that</em> — «подтвердила, что»; Julia не «подтверждала», а была уверена.",
          "1": "<em>Considered that</em> — редко; обычно <em>considered Joyce untalented</em>.",
          "3": "<em>Concerned that Joyce didn't have talent</em> — «переживала»; слабее, чем «уверена в отсутствии таланта»."
        }
      },
      {
        options: ["only", "alone", "lonely", "simply"],
        correctIndex: 1,
        skillRu: "Идиома: <em>let alone</em> — «не говоря уже о …».",
        explainCorrect:
          "Never decided breakfast, <strong>let alone what parts to take</strong> — «не то что роли — даже завтрак не решала сама».",
        trapRu:
          "<em>Let only / let simply</em> — не идиомы; классика ЕГЭ — <em>let alone</em>.",
        explainIfChosen: {
          "0": "<em>Let only</em> — не говорят в этом значении.",
          "2": "<em>Let lonely</em> — бессмысленно.",
          "3": "<em>Let simply</em> — не идиома."
        }
      },
      {
        options: ["up", "over", "with", "off"],
        correctIndex: 0,
        skillRu: "Фразовый глагол: <em>catch up on school</em> — «наверстать учёбу».",
        explainCorrect:
          "Leslie could <strong>catch up on school later</strong> — «наверстает школьную программу потом» (по мнению Julia).",
        trapRu:
          "После <em>catch</em> нужен правильный предлог: <em>up on</em>, не <em>catch with school</em>.",
        explainIfChosen: {
          "1": "<em>Catch over on school</em> — не говорят.",
          "2": "<em>Catch with on school</em> — неверно.",
          "3": "<em>Catch off on school</em> — не существует."
        }
      },
      {
        options: ["resembled", "respected", "regained", "remained"],
        correctIndex: 1,
        skillRu: "Глагол + объект: <em>everyone respected her</em> — «все уважали её».",
        explainCorrect:
          "Joyce заботилась об учёбе Leslie — <strong>everyone on the set respected her</strong> — «на съёмках все её уважали».",
        trapRu:
          "<em>Resembled her</em> = «были похожи на неё» — не про отношение к Joyce.",
        explainIfChosen: {
          "0": "<em>Resembled her</em> — «напоминали её / были похожи» — не про уважение.",
          "2": "<em>Regained her</em> — «вернули её» — бессмысленно.",
          "3": "<em>Remained her</em> — не говорят."
        }
      },
      {
        options: ["miss", "fail", "lack", "lose"],
        correctIndex: 0,
        skillRu: "Глагол + объект: <em>miss work / miss lessons</em> — «пропустить занятия».",
        explainCorrect:
          "Julia не хотела, чтобы Leslie <strong>missed her work with her drama coach</strong> — «пропускала репетиции и уроки вокала» ради школы.",
        trapRu:
          "Julia за acting, не за школу — боится, что Leslie <em>пропустит</em> drama coach, не «fail/lack».",
        explainIfChosen: {
          "1": "<em>Fail her work</em> — «провалить работу» — не «пропустить».",
          "2": "<em>Lack her work</em> — «не хватало работы» — грамматика не сходится.",
          "3": "<em>Lose her work</em> — «потерять работу» — другой смысл."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
