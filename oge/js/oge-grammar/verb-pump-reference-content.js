/**
 * Grammar reference · The Verb Pump (Present simple / continuous + stative verbs).
 * Wording aligned with the unit sheets the maintainer supplied.
 */
(function (w) {
  "use strict";

  w.OGE_VERB_PUMP_REF = {
    title: "Grammar reference",
    subtitle: "Present simple · Present continuous · Stative verbs",
    blocks: [
      {
        id: "ps-form",
        title: "Present simple — форма",
        rows: [
          ["Утверждение", "I / you / we / they + V", "I play …"],
          ["", "he / she / it + V-s", "He plays …"],
          ["Отрицание", "do not (don't) + V", "They don't play …"],
          ["", "does not (doesn't) + V", "She doesn't play …"],
          ["Вопрос", "Do + I/you/we/they + V?", "Do you play …?"],
          ["", "Does + he/she/it + V?", "Does he play …?"]
        ]
      },
      {
        id: "ps-use",
        title: "Present simple — когда",
        bullets: [
          {
            ru: "повторяющиеся действия в настоящем",
            en: "Marsha goes to dance lessons every Saturday."
          },
          {
            ru: "типичные ситуации",
            en: "Does Dan work at the cinema?"
          },
          {
            ru: "чувства, мысли, состояния",
            en: "I like the new James Bond film."
          },
          {
            ru: "общеизвестные факты",
            en: "You play chess with 32 pieces."
          }
        ]
      },
      {
        id: "ps-hints",
        title: "Present simple — маркеры и наречия",
        html:
          "<p><strong>Часто:</strong> every Monday / week … · each Monday … · once / twice a week · three times a month …</p>" +
          "<p><strong>Наречия частоты:</strong> always, usually, often, sometimes, rarely, never</p>" +
          "<p><strong>Порядок слов:</strong> наречие обычно <em>перед</em> смысловым глаголом, но <em>после</em> <code>to be</code>.</p>" +
          "<p><em>I often play</em> football with my friends.</p>" +
          "<p><em>I am often late</em> for my piano lessons.</p>"
      },
      {
        id: "pc-form",
        title: "Present continuous — форма",
        rows: [
          ["Утверждение", "I am ('m) + V-ing", "I'm playing …"],
          ["", "he/she/it is ('s) + V-ing", "She's playing …"],
          ["Отрицание", "am/is/are + not + V-ing", "He isn't playing …"],
          ["Вопрос", "Am/Are + … + V-ing?", "Are you playing …?"],
          ["", "Is + he/she/it + V-ing?", "Is she playing …?"]
        ]
      },
      {
        id: "pc-use",
        title: "Present continuous — когда",
        bullets: [
          {
            ru: "действие в момент речи",
            en: "Jan is watching a DVD upstairs."
          },
          {
            ru: "действие в ограниченный период",
            en: "She is working at the museum until the end of the month."
          },
          {
            ru: "раздражение (часто + always)",
            en: "My brother is always borrowing my CDs without asking!"
          }
        ]
      },
      {
        id: "pc-hints",
        title: "Present continuous — маркеры",
        html:
          "<p><strong>Маркеры:</strong> now, right now, at the moment, today, this week / month …</p>"
      },
      {
        id: "stative",
        title: "Stative verbs (state verbs)",
        html:
          "<p>Глаголы состояния (чувства, мысли) обычно <strong>не</strong> ставят в continuous:</p>" +
          "<p class=\"vp-ref-ok\"><em>I like</em> reading books.</p>" +
          "<p class=\"vp-ref-bad\"><s><em>I am liking</em> reading books.</s></p>" +
          "<p><strong>Частые stative:</strong> appear, be, believe, belong to, hate, have, include, know, like, love, need, prefer, see, seem, taste, think, understand, want</p>" +
          "<p><strong>Но:</strong> <code>think</code> / <code>have</code> / <code>be</code> могут быть continuous, если это <em>процесс</em>, а не мнение или владение:</p>" +
          "<p><em>What do you think …?</em> (мнение) · <em>I'm thinking about …</em> (размышляю)</p>"
      },
      {
        id: "compare",
        title: "Simple или continuous?",
        html:
          "<p><strong>Simple</strong> — привычка, расписание, факт, состояние.</p>" +
          "<p><strong>Continuous</strong> — сейчас, временно, «в процессе».</p>" +
          "<p><em>I read</em> a newspaper once a week. · <em>I'm reading</em> your email now.</p>"
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
