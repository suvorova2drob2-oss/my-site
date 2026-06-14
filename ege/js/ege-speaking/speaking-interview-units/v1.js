(function (w) {
  var pack = w.__EGE_SPEAKING_INTERVIEW_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "v1-interview",
    unitLabel: "Unit 1",
    title: "Interview · Pets",
    topic: "pets",
    lead: "Task 3 · Teenagers Round the World · pets. 5 answers × 40 sec.",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/interview/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%201%20(1).mp3",
    answerSeconds: 40,
    examIntro:
      "You are going to give an interview. You have to answer five questions. Give full answers to the questions (2–3 sentences). Remember that you have 40 seconds to answer each question.",
    channelIntro:
      "Hello everybody! It's Teenagers Round the World Channel. Our guest today is a teenager from Russia and we are going to discuss pets. Please answer five questions. So, let's get started.",
    questions: [
      "Do you have a pet? What is it? If not, why not?",
      "What are some of the most popular pets in Russia?",
      "Who usually takes care of pets in a family?",
      "What do you think should be done to solve the problem of homeless animals?",
      "Do you think children will benefit from communication with pets? Why, or why not?"
    ],
    questionCues: [],
    modelAnswers: [],
    selfCheck: [
      "На каждый вопрос — развёрнутый ответ (2–3 предложения)",
      "Ответил(а) на все части compound-вопросов (why / if not…)",
      "Уложился(ась) примерно в 40 секунд на вопрос",
      "Речь связная, без длинных пауз в начале",
      "Тема pets раскрыта во всех 5 ответах"
    ]
  });
})(typeof window !== "undefined" ? window : this);
