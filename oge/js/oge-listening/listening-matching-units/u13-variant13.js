/**
 * OGE Listening Matching · Unit 13 · Task 5 · School.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-variant13-listening-match",
    unitOrder: 13,
    title: "Unit 13 · School life",
    examSection: "Task 5",
    headerTitle: "School",
    audioSrc: "audio/u13/listening-13.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "After-school activities" },
      { num: 2, text: "Homework issues" },
      { num: 3, text: "School building" },
      { num: 4, text: "Dress code" },
      { num: 5, text: "School subjects" },
      { num: 6, text: "School of the future" }
    ],
    extraStatementNum: 5,
    key: [3, 6, 2, 4, 1],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "Unlike in most modern schools, the classrooms in my school are not very spacious, and they are light and quite cozy. Most of all I enjoy studying in the Maths class, which is on the third floor. From there, there's a nice view of the park. All the furniture is made of light wood and there are pots with plants on the windowsills. There are two boards — one smartboard, and the other is a traditional blackboard on which we can write with chalk. I find it old-fashioned but very cute..."
      },
      {
        id: "B",
        text:
          "I don't like the way my school looks. It's located in a gloomy grey building. And I hope soon there won't be schools like mine any more. All schools should be built in light colours and equipped with safe materials. The classrooms should be spacious, equipped with all sorts of gadgets the teacher and the students may need during the lesson. The teacher will have a robot assistant. And, probably, there won't be subjects... but I don't know how it will work yet."
      },
      {
        id: "C",
        text:
          "I live close to school and it takes me about seven minutes to get there. The walk to school and back is the only time I spend outdoors. I have classes till 3 p.m. and after that I write essays, solve maths problems, make presentations, write all sorts of projects and so on and so forth. I don't have time for sports or for friends. I'm looking forward to the time when I'm grown up and I don't have to do loads of assignments for the next morning after my working day."
      },
      {
        id: "D",
        text:
          "I recently found out that discussion about school uniform started as long ago as the 16th century. Parents and teachers have been discussing whether or not wearing uniforms has a positive effect on students. Unlike most of my mates, I believe that wearing a uniform has more advantages than disadvantages. For example, you don't have to think about what to wear every morning and match clothes. It saves time! And it also helps me feel more focused and businesslike."
      },
      {
        id: "E",
        text:
          "We spend a lot of time at school. Some people complain, but I believe it's OK because school is not only about learning. My school, for example, provides all sorts of opportunities to those who enjoy an active lifestyle. There's a sports ground where we play basketball and football. There's also a swimming pool inside and all the students can use it not only for PE classes but also after school. I personally don't go there very often however... because I can't swim well."
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions about school and school life. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
