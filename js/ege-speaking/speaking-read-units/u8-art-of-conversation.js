(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u8-art-of-conversation",
    unitLabel: "Unit 8",
    title: "The art of conversation",
    lead:
      "Задание 1 · чтение вслух. Текстинг vs разговор — один абзац.",
    paragraphs: [
      "With the rise in recent technology we seem to be rapidly losing the art of conversation. Talking on the phone used to be the means of communication for most people, but over the last 20 years texting or instant messaging has developed into one of the most popular ways of keeping in touch with friends and family. Recent studies have shown that people are more likely to text than actually talk. Texting is great for quick short messages and meaningless banter. But it is very difficult to have a deep and meaningful text conversation. Firstly, you cannot hear the intonation when someone is texting you. Secondly, texting lacks eye contact and body language, which are crucial facets of face-to-face communication. So, whatever is happening in your world, put that mobile phone down and talk to someone before you forget how."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "rapidly",
        label: "rapidly losing",
        match: ["rapidly"],
        hint: "RAP-id-ly — rapidly losing the art of conversation."
      },
      {
        id: "instant",
        label: "instant messaging",
        match: ["instant messaging"],
        hint: "IN-stant MESS-aging — texting or instant messaging."
      },
      {
        id: "keeping-in-touch",
        label: "keeping in touch",
        match: ["keeping in touch"],
        hint: "KEEP-ing in TOUCH — устойчивое выражение."
      },
      {
        id: "banter",
        label: "meaningless banter",
        match: ["banter"],
        hint: "BAN-ter — light, meaningless chat."
      },
      {
        id: "firstly",
        label: "Firstly / Secondly",
        match: ["firstly", "secondly"],
        hint: "FIRST-ly / SECOND-ly — пауза между аргументами."
      },
      {
        id: "intonation",
        label: "intonation",
        match: ["intonation"],
        hint: "in-to-NAY-shun — you cannot hear the intonation."
      },
      {
        id: "body-language",
        label: "body language",
        match: ["body language"],
        hint: "BODY LAN-guage — lacks eye contact and body language."
      },
      {
        id: "facets",
        label: "crucial facets",
        match: ["facets"],
        hint: "FAS-ets — aspects of face-to-face communication."
      },
      {
        id: "face-to-face",
        label: "face-to-face communication",
        match: ["face-to-face", "face to face"],
        hint: "FACE-to-FACE — три слога, связно."
      },
      {
        id: "forget-how",
        label: "before you forget how",
        match: ["forget how"],
        hint: "Финал — falling intonation; talk before you forget how."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Firstly и Secondly выделены паузой",
      "instant messaging, face-to-face — без запинки",
      "Финал before you forget how — чётко и с falling intonation",
      "Темп ровный, не слишком быстро на длинных предложениях"
    ]
  });
})(typeof window !== "undefined" ? window : this);
