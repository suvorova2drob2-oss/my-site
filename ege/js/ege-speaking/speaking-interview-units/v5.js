(function (w) {
  var pack = w.__EGE_SPEAKING_INTERVIEW_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "v5-interview",
    unitLabel: "Unit 5",
    title: "Interview · Music",
    topic: "music",
    lead: "Task 3 · Teenagers Round the World · music. 5 answers × 40 sec.",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/interview/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%205%20(1).mp3",
    answerSeconds: 40,
    examIntro:
      "You are going to give an interview. You have to answer five questions. Give full answers to the questions (2–3 sentences). Remember that you have 40 seconds to answer each question.",
    channelIntro:
      "Hello everybody! It's Teenagers Round the World Channel. Our guest today is a teenager from Russia and we are going to discuss music. We'd like to know our guest's point of view on this issue. Please answer five questions. So, let's get started.",
    questions: [
      "What kind of music do you listen to the most? Why do you like it?",
      "Are there any bands or singers from your country that you're really into?",
      "Do you listen to different music when you're studying or relaxing? Why?",
      "Do you play any musical instruments? If so, which ones?",
      "If you could meet any singer or musician in the world, who would it be, and why?"
    ],
    questionCues: [],
    modelAnswers: [],
    selfCheck: [
      "На каждый вопрос — развёрнутый ответ (2–3 предложения)",
      "Ответил(а) на все части compound-вопросов (why / if so…)",
      "Уложился(ась) примерно в 40 секунд на вопрос",
      "Речь связная, без длинных пауз в начале",
      "Тема music раскрыта во всех 5 ответах"
    ]
  });
})(typeof window !== "undefined" ? window : this);
