(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u2-deep-breathing-kids",
    unitLabel: "Unit 2",
    title: "Deep-breathing exercises for kids",
    lead:
      "Задание 1 · чтение вслух. Упражнения для дыхания детей — один абзац, три named exercises.",
    paragraphs: [
      "When it comes to deep-breathing exercises for kids, the key is to make these exercises fun and easy to remember. The following breathing exercises use imagery that appeals to children, and language they will have no trouble understanding. The first one is called \u201cBlow out the candles\u201d. Have a child blow out the candles on a make-believe birthday cake, drawing a deep breath in through the mouth, and blowing it out strongly through the mouth as well. Another effective exercise is snake breath. Tell a child to pretend he or she is a snake and hiss, inhaling deeply through the nose, and blowing out through the mouth with a soft and low hissing sound. Finally, you can try hot-air balloon breath. Have a child sit comfortably and cup their hands around their mouth. Have them inhale deeply, and on the exhale, prompt them to expand their hands outward, as if they are blowing up a giant hot-air balloon."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "deep-breathing",
        label: "deep-breathing",
        match: ["deep-breathing", "deep breathing"],
        hint: "DEEP-BREATH-ing — составное слово в начале текста."
      },
      {
        id: "imagery",
        label: "imagery",
        match: ["imagery"],
        hint: "IM-aj-ree — use imagery that appeals to children."
      },
      {
        id: "candles",
        label: "\u201cBlow out the candles\u201d",
        match: ["blow out the candles"],
        hint: "Название упражнения — пауза до и после, чётко и выразительно."
      },
      {
        id: "make-believe",
        label: "make-believe",
        match: ["make-believe"],
        hint: "MAKE-be-lieve birthday cake — «воображаемый»."
      },
      {
        id: "drawing",
        label: "drawing a deep breath",
        match: ["drawing a deep breath"],
        hint: "DRAW-ing — не «рисовать», а «делая вдох»."
      },
      {
        id: "snake",
        label: "snake breath",
        match: ["snake breath"],
        hint: "Snake breath — второе упражнение; hiss with a soft, low sound."
      },
      {
        id: "inhaling",
        label: "inhaling deeply",
        match: ["inhaling deeply", "inhaling"],
        hint: "in-HAY-ling — through the nose."
      },
      {
        id: "hissing",
        label: "hissing sound",
        match: ["hissing"],
        hint: "HISS-ing — soft and low, не слишком громко."
      },
      {
        id: "hot-air",
        label: "hot-air balloon breath",
        match: ["hot-air balloon breath", "hot-air balloon"],
        hint: "HOT-air balloon — третье упражнение; не теряйте слова hot-air."
      },
      {
        id: "comfortably",
        label: "comfortably",
        match: ["comfortably"],
        hint: "COMF-tuh-bly — sit comfortably."
      },
      {
        id: "exhale",
        label: "on the exhale",
        match: ["exhale"],
        hint: "ex-HALE — противоположность inhale; пауза перед on the exhale."
      },
      {
        id: "prompt",
        label: "prompt them",
        match: ["prompt them", "prompt"],
        hint: "PROMPT — «попросите / подскажите», не prompt как «быстро»."
      },
      {
        id: "outward",
        label: "expand their hands outward",
        match: ["outward"],
        hint: "OUT-ward — руки расширяются наружу, как balloon."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Три упражнения названы чётко: candles, snake breath, hot-air balloon breath",
      "Паузы между описаниями каждого упражнения",
      "Слова inhaling / exhale / hissing прочитаны без запинки",
      "Интонация в конце предложений — falling, не «вопросительная»"
    ]
  });
})(typeof window !== "undefined" ? window : this);
