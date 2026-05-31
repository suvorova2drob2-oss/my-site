/**
 * ЕГЭ Lexis Exam · Unit 20 · Picasso (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-picasso",
    unitOrder: 20,
    title: "Unit 20 · Picasso",
    examSection: "§30–36",
    headerTitle: "Picasso",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "One day, a famous art collector was having a party. He had many famous paintings on his walls. He [[30]] one man studying his favourite painting, which was above his fireplace. He said to the man, \"This is a real Picasso.\" However, the man [[31]] his head. He said, \"I am an art expert. This definitely isn't a real Picasso. It is a fake.\"\n\nThe art collector was caught unawares. He [[32]] up his agent and asked to have a personal appointment with Picasso. The meeting was arranged and he flew to Paris. He went directly to Picasso's studio and [[33]] climbing the stairs, knocked on the door. Picasso shouted, \"Come in!\" Picasso was busy painting a large painting. He quickly looked [[34]] his shoulder and asked, \"What is it? I'm busy.\" The art collector said, \"Mr Picasso, I only have one quick question. Can you, please, look at this painting and tell me if it is a fake?\" Picasso did it and quickly snapped, \"It is a fake\". The collector thanked Picasso and left.\n\nOne year later, the collector returned to Picasso's studio. He walked up the stairs and knocked on the door. Picasso was busy painting and he angrily asked, \"What is it?!\" The art collector said, \"Picasso, I [[35]] for interrupting but I have just one question. Can you look at this painting and tell me if it is a fake?\" Picasso looked and quickly replied, \"It is a fake!\" The man nearly jumped out of his skin, he said, \"It can't be! I was here last year and saw you, yourself, painting this [[36]] painting!\" Picasso turned around and said, \"Sometimes I paint fakes.\"",
    items: [
      {
        options: ["looked", "glanced", "stared", "saw"],
        correctIndex: 3,
        skillRu: "Глагол восприятия + объект + <em>-ing</em>: <em>see someone doing</em>.",
        explainCorrect:
          "He <strong>saw</strong> one man studying his favourite painting — «увидел человека, разглядывающего картину».",
        trapRu:
          "<em>Looked / glanced / stared</em> + человек без <em>at</em> — неверно; нужен <em>see someone doing</em>.",
        explainIfChosen: {
          "0": "<em>Looked one man studying</em> — нужно <em>looked at a man who was studying</em>.",
          "1": "<em>Glanced one man</em> — нужно <em>glanced at</em>.",
          "2": "<em>Stared one man</em> — нужно <em>stared at</em>."
        }
      },
      {
        options: ["raised", "turned", "shook", "took"],
        correctIndex: 2,
        skillRu: "Устойчивое: <em>shake one's head</em> — «качать головой» (несогласие).",
        explainCorrect:
          "The man <strong>shook</strong> his head — «покачал головой» (не согласен: картина — подделка).",
        trapRu:
          "<em>Raised his head</em> — «поднял голову»; <em>turned his head</em> — «повернул» — не жест «нет».",
        explainIfChosen: {
          "0": "<em>Raised his head</em> — «поднял голову» — не «не согласен».",
          "1": "<em>Turned his head</em> — «повернул голову» — не идиома несогласия.",
          "3": "<em>Took his head</em> — «взял голову» — nonsense."
        }
      },
      {
        options: ["called", "brought", "came", "turned"],
        correctIndex: 0,
        skillRu: "Фразовый глагол: <em>call up</em> — «позвонить».",
        explainCorrect:
          "He <strong>called</strong> up his agent — «позвонил агенту» (<em>call someone up</em>).",
        trapRu:
          "<em>Brought up / came up / turned up</em> his agent — не «позвонил».",
        explainIfChosen: {
          "1": "<em>Brought up his agent</em> — «поднял тему агента / привёл агента» — не звонок.",
          "2": "<em>Came up his agent</em> — nonsense.",
          "3": "<em>Turned up his agent</em> — «агент появился» — не «он позвонил»."
        }
      },
      {
        options: ["after", "before", "during", "meanwhile"],
        correctIndex: 0,
        skillRu: "Порядок действий: <em>after climbing the stairs, knocked</em>.",
        explainCorrect:
          "<strong>After</strong> climbing the stairs, knocked on the door — «после того как поднялся по лестнице, постучал».",
        trapRu:
          "<em>Before climbing …, knocked</em> — сначала стучит, потом поднимается — бессмыслица.",
        explainIfChosen: {
          "1": "<em>Before climbing the stairs, knocked</em> — «до подъёма постучал» — порядок неверный.",
          "2": "<em>During climbing the stairs, knocked</em> — «во время подъёма постучал» — маловероятно.",
          "3": "<em>Meanwhile climbing</em> — «тем временем поднимаясь» — не связывает с <em>knocked</em>."
        }
      },
      {
        options: ["above", "over", "behind", "below"],
        correctIndex: 1,
        skillRu: "Устойчивое: <em>look over one's shoulder</em> — «оглянуться через плечо».",
        explainCorrect:
          "He quickly looked <strong>over</strong> his shoulder — «быстро оглянулся через плечо» (не отрываясь от холста).",
        trapRu:
          "<em>Look above / below / behind his shoulder</em> — не идиома; стандартно <em>over one's shoulder</em>.",
        explainIfChosen: {
          "0": "<em>Looked above his shoulder</em> — «над плечом» — не «оглянуться».",
          "2": "<em>Looked behind his shoulder</em> — близко, но типичнее <em>over one's shoulder</em>.",
          "3": "<em>Looked below his shoulder</em> — «под плечом» — nonsense."
        }
      },
      {
        options: ["forgive", "apologize", "excuse", "sorry"],
        correctIndex: 1,
        skillRu: "Конструкция: <em>I apologize for interrupting</em>.",
        explainCorrect:
          "Picasso, I <strong>apologize for</strong> interrupting — «извините / прошу прощения, что прерываю».",
        trapRu:
          "<em>I forgive for</em> — «прощаю за» — не то; <em>I sorry for</em> — нужно <em>I'm sorry</em>; <em>I excuse for</em> — нужно <em>excuse myself</em>.",
        explainIfChosen: {
          "0": "<em>I forgive for interrupting</em> — «прощаю за прерывание» — коллекционер не прощает Пикассо.",
          "2": "<em>I excuse for interrupting</em> — правильнее <em>excuse me for</em> или <em>excuse myself for</em>.",
          "3": "<em>I sorry for interrupting</em> — грамматически <em>I'm sorry for</em>."
        }
      },
      {
        options: ["own", "same", "quite", "very"],
        correctIndex: 1,
        skillRu: "Прилагательное: <em>this same painting</em> — «та самая картина».",
        explainCorrect:
          "Saw you yourself painting this <strong>same</strong> painting — «ту самую картину» (которую видел год назад).",
        trapRu:
          "<em>This own painting</em> — порядок слов неверный (<em>his own painting</em>); <em>quite / very painting</em> — не «та же».",
        explainIfChosen: {
          "0": "<em>This own painting</em> — правильно <em>his own painting</em> или <em>this painting of his own</em>.",
          "2": "<em>This quite painting</em> — <em>quite</em> не перед существительным так.",
          "3": "<em>This very painting</em> — «именно эту» — возможно, но <em>same</em> связывает с прошлым визитом точнее."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
