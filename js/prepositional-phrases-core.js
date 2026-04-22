/**
 * Prepositional phrases — canonical items for disk tasks (extend `tasks` as you add more).
 * Task 1: gaps filled with exactly one of: "by" | "in" | "out of".
 * Task 2: match sentences 1–8 with definitions A–H (answerKey maps sentence id → definition id).
 * After load, Exercise 5 passage also feeds retelling (index.html) and `prepTreasureHuntRounds` (disk Treasure Hunt).
 */
(function (global) {
  'use strict';

  /**
   * Canonical label for focus line with two variants (slash).
   * @param {string} fp
   * @returns {string}
   */
  function prepFocusCanonical(fp) {
    var s = String(fp).trim();
    var idx = s.indexOf('/');
    if (idx === -1) return s;
    return s.slice(idx + 1).trim();
  }

  /**
   * Normalised phrase key for paraphrase lookup (lexical games / flip front).
   * @param {string} ans
   * @returns {string}
   */
  function prepLexHintKey(ans) {
    return String(ans || '')
      .toLowerCase()
      .replace(/\u2019|\u2018/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Short learner gloss for flip / MCQ / drop hint — not meta labels like "From Task 1".
   * Keys match {@link prepLexHintKey}.
   */
  var PREP_LEX_PARAPHRASE_BY_KEY = {
    'by any standard': 'Impressive when judged against any serious benchmark, not just good enough locally.',
    'in its infancy': 'Still at a very early stage — the genre or technology has only just begun.',
    'out of the question': 'Completely ruled out — the request is impossible to grant.',
    'out of touch': 'No longer following what is current in a scene, topic, or audience.',
    'by whatever means necessary': 'Using any method that works, however messy, to get the result.',
    'by all means': 'Of course — go ahead; you are welcome to.',
    'out of the ordinary': 'Not routine — something unusual or surprising.',
    "in your mind's eye": 'As you picture or imagine a scene in your head (memory or mental image).',
    'in essence': 'Fundamentally — the most important aspect of something, in substance.',
    'by invitation only': 'Only selected guests can attend — not open to everyone.',
    'by any means necessary': 'Doing whatever it takes to meet a deadline or reach a goal.',
    'in good taste': 'Appropriate and restrained for the situation — not crude or offensive.',
    'out of place': 'Incongruous — it does not suit the setting or looks wrong there.'
  };

  /**
   * @param {string} ans
   * @returns {string}
   */
  function prepLexParaphraseForAns(ans) {
    return PREP_LEX_PARAPHRASE_BY_KEY[prepLexHintKey(ans)] || '';
  }

  /**
   * Word Bank rows + freer/micro speaking items — derived only from `tasks` (no duplicate phrase lists elsewhere).
   * @param {{ tasks: object[] }} core
   * @returns {{ lexPrepPhraseData: { hint: string, before: string, after: string, ans: string }[], speakPrepItems: { sec: string, label: string, q: string }[] }}
   */
  function prepBuildAppLists(core) {
    var tasks = core.tasks || [];
    var t1 = tasks.filter(function (x) {
      return x.id === 'task-01-by-in-out-of';
    })[0];
    var t2 = tasks.filter(function (x) {
      return x.id === 'task-02-match-sentences-defs';
    })[0];
    var t3 = tasks.filter(function (x) {
      return x.id === 'task-03-fill-from-ex2';
    })[0];
    var t4 = tasks.filter(function (x) {
      return x.id === 'task-04-crypto-dialogues';
    })[0];

    function defHintForSentence(sid) {
      if (!t2 || !t2.answerKey || !t2.definitions) return '';
      var lid = t2.answerKey[sid];
      for (var di = 0; di < t2.definitions.length; di++) {
        if (t2.definitions[di].id === lid) return t2.definitions[di].text;
      }
      return '';
    }

    function splitAround(full, needle) {
      var f = String(full);
      var n = String(needle);
      var i = f.toLowerCase().indexOf(n.toLowerCase());
      if (i === -1) return null;
      return { before: f.slice(0, i), after: f.slice(i + n.length) };
    }

    function lexFromTask3() {
      var out = [];
      if (!t3 || !t3.items) return out;
      for (var i = 0; i < t3.items.length; i++) {
        var it = t3.items[i];
        var teach = it.teach;
        var hint = '';
        if (t2 && t2.sentences) {
          for (var si = 0; si < t2.sentences.length; si++) {
            var sent = t2.sentences[si];
            if (String(sent.text).toLowerCase().indexOf(String(teach).toLowerCase()) !== -1) {
              hint = defHintForSentence(sent.id);
              break;
            }
          }
        }
        out.push({
          hint:
            hint ||
            prepLexParaphraseForAns(teach) ||
            'Recall the exact prepositional phrase that completes the line naturally.',
          before: it.before,
          after: it.after,
          ans: teach
        });
      }
      return out;
    }

    function lexTask1Row(coll) {
      if (!t1 || !t1.items) return null;
      var needle = String(coll);
      for (var i = 0; i < t1.items.length; i++) {
        var it = t1.items[i];
        if (!it.collocations || it.collocations.indexOf(coll) === -1) continue;
        var parts = it.parts || [];
        var full = '';
        for (var p = 0; p < parts.length; p++) {
          if (typeof parts[p] === 'string') full += parts[p];
          else if (parts[p] && parts[p].gap) full += String(parts[p].answer || '');
        }
        var sp = splitAround(full, needle);
        if (!sp) continue;
        return {
          hint:
            prepLexParaphraseForAns(needle) ||
            'Recall the exact multi-word chunk (by / in / out of) from the Task 1 line.',
          before: sp.before,
          after: sp.after,
          ans: needle
        };
      }
      return null;
    }

    function lexFromTask2Phrase(label) {
      if (!t2 || !t2.sentences) return null;
      for (var si = 0; si < t2.sentences.length; si++) {
        var sent = t2.sentences[si];
        var sp = splitAround(sent.text, label);
        if (sp) {
          return {
            hint:
              defHintForSentence(sent.id) ||
              prepLexParaphraseForAns(label) ||
              'Match the definition idea to the fixed phrase from Exercise 2.',
            before: sp.before,
            after: sp.after,
            ans: label
          };
        }
      }
      return null;
    }

    function lexFromTask4Teach(teach) {
      if (!t4 || !t4.items) return null;
      var needle = String(teach);
      for (var i = 0; i < t4.items.length; i++) {
        var it = t4.items[i];
        if (String(it.teach).toLowerCase() !== needle.toLowerCase()) continue;
        var parts = it.segments || [];
        var full = '';
        for (var p = 0; p < parts.length; p++) {
          var seg = parts[p];
          if (seg && typeof seg.text === 'string') full += seg.text;
          else if (seg && seg.gap && seg.answer) full += seg.answer;
        }
        var sp = splitAround(full, needle);
        if (sp) {
          return {
            hint:
              prepLexParaphraseForAns(String(it.teach)) ||
              'Recall the exact wording from the short dialogue (Exercise 4).',
            before: sp.before,
            after: sp.after,
            ans: String(it.teach)
          };
        }
      }
      return null;
    }

    var lexPrepPhraseData = [];
    var speakPrepItems = [];
    var seenLex = Object.create(null);
    var seenSpeak = Object.create(null);

    function pushLex(row) {
      if (!row || !row.ans) return;
      var k = String(row.ans).toLowerCase().replace(/\s+/g, ' ');
      if (seenLex[k]) return;
      seenLex[k] = true;
      lexPrepPhraseData.push(row);
    }

    function pushSpeak(sec, label, q) {
      if (!label) return;
      var k = String(label).toLowerCase().replace(/\s+/g, ' ');
      if (seenSpeak[k]) return;
      seenSpeak[k] = true;
      speakPrepItems.push({ sec: sec, label: label, q: q });
    }

    var sec = 'Prepositional phrases';

    var t3lex = lexFromTask3();
    for (var t = 0; t < t3lex.length; t++) pushLex(t3lex[t]);

    if (t2 && t2.focusPhrases) {
      for (var f = 0; f < t2.focusPhrases.length; f++) {
        var lab = prepFocusCanonical(t2.focusPhrases[f]);
        var row = lexFromTask2Phrase(lab);
        if (row) pushLex(row);
        if (lab === 'by all means')
          pushSpeak(sec, lab, 'What would you tell a friend who is shy to ask for help — by all means ask?');
        else if (lab.indexOf('mind') !== -1)
          pushSpeak(
            sec,
            "in your mind's eye",
            "Describe a childhood place you can still picture in your mind's eye."
          );
        else if (lab === 'out of the ordinary')
          pushSpeak(
            sec,
            lab,
            'What was the last week when something out of the ordinary happened in your routine?'
          );
        else if (lab === 'in essence')
          pushSpeak(sec, lab, 'In essence, what is one skill that exams actually measure well?');
        else if (lab === 'by invitation only')
          pushSpeak(sec, lab, 'Have you ever wanted to attend something that was by invitation only?');
        else if (lab === 'by any means necessary')
          pushSpeak(
            sec,
            lab,
            'Tell about a deadline or goal you had to reach by any means necessary (within reason).'
          );
        else if (lab === 'in good taste')
          pushSpeak(
            sec,
            lab,
            'Give an example of a joke or story that stays in good taste at a formal event.'
          );
        else if (lab === 'out of place')
          pushSpeak(sec, lab, 'Describe a time you felt out of place in a new group or venue.');
      }
    }

    if (t1 && t1.items) {
      for (var a = 0; a < t1.items.length; a++) {
        var cols = t1.items[a].collocations || [];
        for (var c = 0; c < cols.length; c++) {
          var col = cols[c];
          var lr = lexTask1Row(col);
          if (lr) pushLex(lr);
          if (col === 'by any standard')
            pushSpeak(
              sec,
              col,
              'When have you seen work or a performance that was impressive by any standard, not just good enough for the context?'
            );
          else if (col === 'in its infancy')
            pushSpeak(
              sec,
              col,
              'Describe a field, genre, or tool that was still in its infancy when you first encountered it.'
            );
          else if (col === 'out of the question')
            pushSpeak(
              sec,
              col,
              'What would be out of the question for you this month, even if you would like to say yes?'
            );
          else if (col === 'out of touch')
            pushSpeak(
              sec,
              col,
              'Talk about a time you felt out of touch with news, fashion, or a scene you used to follow.'
            );
        }
      }
    }

    if (t4 && t4.items) {
      for (var e = 0; e < t4.items.length; e++) {
        var ex = t4.items[e];
        var teach4 = String(ex.teach || '');
        var lr4 = lexFromTask4Teach(teach4);
        if (lr4) pushLex(lr4);
        var low = teach4.toLowerCase();
        if (low === 'by whatever means necessary') {
          pushSpeak(
            sec,
            'by whatever means necessary',
            'When might you try to solve a problem by whatever means necessary, even if the approach is messy?'
          );
        }
      }
    }

    return {
      lexPrepPhraseData: lexPrepPhraseData,
      speakPrepItems: speakPrepItems
    };
  }

  var prepAppListsCache = null;

  global.PREP_PHRASES_CORE = {
    version: 13,
    tasks: [
      {
        id: 'task-01-by-in-out-of',
        title: 'Task 1 · by / in / out of',
        pointsFirstPass: 6,
        instruction:
          'Complete each sentence with <strong>by</strong>, <strong>in</strong>, or <strong>out of</strong>. One sentence at a time; then open Task 2.',
        choices: ['by', 'in', 'out of'],
        items: [
          {
            id: 't1-s1',
            collocations: ['by any standard'],
            parts: [
              'You have to hand it to the programmers writing the algorithms and training the AI – the creations are simply incredible ',
              { gap: true, answer: 'by' },
              ' any standard.'
            ]
          },
          {
            id: 't1-s2',
            collocations: ['in its infancy'],
            parts: [
              'Something should be done about this while the genre is still ',
              { gap: true, answer: 'in' },
              ' its infancy, otherwise I imagine we can expect further issues down the line.'
            ]
          },
          {
            id: 't1-s3',
            collocations: ['out of the question', 'out of touch'],
            parts: [
              'That kind of lifestyle is ',
              { gap: true, answer: 'out of', key: 'a' },
              ' the question these days and artists can\'t risk being ',
              { gap: true, answer: 'out of', key: 'b' },
              ' touch with what clients and society want from artists as we\'re expected to be diverse in what we produce.'
            ]
          }
        ]
      },
      {
        id: 'task-02-match-sentences-defs',
        title: 'Task 2 · Match sentences with definitions',
        pointsFirstPass: 10,
        instruction:
          'Tap a <strong>sentence (1–8)</strong>, then tap a <strong>definition (A–H)</strong> to link them. Each letter is used once. Use <strong>Shuffle definitions</strong> to change only the order of the right column (letters stay A–H). When all eight are paired, press <strong>Check</strong>.',
        /** Highlight phrases worth anchoring in memory for this theme */
        focusPhrases: [
          'by all means',
          "in one's mind's eye / in your mind's eye",
          'out of the ordinary',
          'in essence',
          'by invitation only',
          'by any means necessary',
          'in good taste',
          'out of place'
        ],
        sentences: [
          {
            id: 1,
            text:
              'By all means make a suggestion as to how my plan could be improved. I need all the help I can get!'
          },
          {
            id: 2,
            text:
              'Did you have a clear vision of the artwork in your mind\'s eye before you started or were you inspired during the creative process?'
          },
          {
            id: 3,
            text: 'It was a fairly uneventful day at work; nothing out of the ordinary happened.'
          },
          {
            id: 4,
            text: 'In essence the painting reflects the artistic style of its era more than anything else.'
          },
          {
            id: 5,
            text:
              "I'm afraid I can't take you to the opening night of fashion week. It's by invitation only and there's no plus one."
          },
          {
            id: 6,
            text:
              "I don't care how we do it, but we're going to need to meet the deadline by any means necessary."
          },
          {
            id: 7,
            text:
              'Only jokes that are in good taste should be incorporated into your speech – I don\'t want anything controversial.'
          },
          {
            id: 8,
            text:
              'That horrible 1960s style office looks out of place compared to all the stylish modern ones surrounding it.'
          }
        ],
        definitions: [
          { id: 'A', text: 'something strange or unusual' },
          { id: 'B', text: 'only specific people can attend' },
          { id: 'C', text: 'not suitable, uncomfortable in a situation' },
          { id: 'D', text: 'of course / certainly' },
          { id: 'E', text: 'doing whatever it takes' },
          { id: 'F', text: 'the most important aspect of something' },
          { id: 'G', text: "in someone's memory or imagination" },
          { id: 'H', text: 'appropriate for a situation' }
        ],
        /** sentence id (number) as key → definition id */
        answerKey: { 1: 'D', 2: 'G', 3: 'A', 4: 'F', 5: 'B', 6: 'E', 7: 'H', 8: 'C' }
      },
      {
        id: 'task-03-fill-from-ex2',
        title: 'Exercise 3 · Fill-in-the-blanks',
        instruction:
          'Complete each question with a <strong>prepositional phrase from Exercise 2</strong> (the same chunks you matched in Task 2). Type your answer; spelling is checked loosely (apostrophes / spaces).',
        usesPhrasesFromTaskId: 'task-02-match-sentences-defs',
        pointsFirstPass: 8,
        items: [
          {
            id: 'ex3-1',
            before: 'Have you ever been to an exclusive event which was ',
            after: '?',
            teach: 'by invitation only',
            acceptable: ['by invitation only']
          },
          {
            id: 'ex3-2',
            before: 'When you think back to your childhood, what images do you see ',
            after: '?',
            teach: "in your mind's eye",
            acceptable: ["in your mind's eye", 'in your minds eye']
          },
          {
            id: 'ex3-3',
            before: 'Has anything ',
            after: ' happened recently which surprised you?',
            teach: 'out of the ordinary',
            acceptable: ['out of the ordinary']
          },
          {
            id: 'ex3-4',
            before: 'Name a situation recently where you felt uncomfortable and ',
            after: '?',
            teach: 'out of place',
            acceptable: ['out of place']
          },
          {
            id: 'ex3-5',
            before: 'Has anything ever been so important to you that you had to do it ',
            after: '?',
            teach: 'by any means necessary',
            acceptable: ['by any means necessary', 'by any means']
          }
        ]
      },
      {
        id: 'task-04-crypto-dialogues',
        title: 'Exercise 4 · Conversations (letter hints)',
        instruction:
          'Complete each conversation. Type the <strong>missing word(s)</strong> where the skeleton shows first/last letters. Same area as Exercise 2: <em>out of</em>, <em>by</em>, <em>in</em> chunks.',
        pointsFirstPass: 12,
        items: [
          {
            id: 'ex4-1',
            teach: 'in its infancy',
            segments: [
              {
                text:
                  '\u2018How long has this technology existed?\u2019 \u2018Not long at all. It\u2019s still very much in its '
              },
              { gap: true, hint: 'i _ _ _ _ _ y', answer: 'infancy', acceptable: ['infancy'] },
              { text: '.\u2019' }
            ]
          },
          {
            id: 'ex4-2',
            teach: 'out of the question',
            segments: [
              { text: '\u2018Can I leave early?\u2019 \u2018I\u2019m afraid that\u2019s totally out of the ' },
              { gap: true, hint: 'q _ _ _ _ _ _ n', answer: 'question', acceptable: ['question'] },
              { text: '.\u2019' }
            ]
          },
          {
            id: 'ex4-3',
            teach: 'by whatever means necessary',
            segments: [
              {
                text:
                  '\u2018How am I supposed to get tickets when they\u2019ve sold out?\u2019 \u2018By '
              },
              { gap: true, hint: '_ _ _ t _ _ _ _', answer: 'whatever', acceptable: ['whatever'] },
              { text: ' means ' },
              {
                gap: true,
                hint: 'n _ _ _ _ _ _ y',
                answer: 'necessary',
                acceptable: ['necessary']
              },
              { text: '. I won\u2019t take no for an answer!\u2019' }
            ]
          },
          {
            id: 'ex4-4',
            teach: 'out of touch',
            segments: [
              { text: '\u2018Do you follow the arts scene?\u2019 \u2018I did, but I\u2019m totally out of ' },
              { gap: true, hint: 't _ _ _ h', answer: 'touch', acceptable: ['touch'] },
              { text: ' with it now.\u2019' }
            ]
          },
          {
            id: 'ex4-5',
            teach: 'by all means',
            segments: [
              { text: '\u2018Is it OK if I sit here?\u2019 \u2018By all ' },
              { gap: true, hint: 'm _ _ _ s', answer: 'means', acceptable: ['means'] },
              { text: '. Make yourself at home.\u2019' }
            ]
          },
          {
            id: 'ex4-6',
            teach: 'out of the ordinary',
            segments: [
              { text: '\u2018How was the concert?\u2019 \u2018Fine, but nothing out of the ' },
              { gap: true, hint: 'o _ _ _ _ _ y', answer: 'ordinary', acceptable: ['ordinary'] },
              { text: '.\u2019' }
            ]
          }
        ]
      },
      {
        id: 'task-05-gallery-by-in-out-of',
        title: 'Exercise 5 · Gallery description',
        instruction:
          '<strong>What you type.</strong> In each gap, write one <strong>full prepositional phrase</strong> &mdash; always <strong>by</strong>, <strong>in</strong> or <strong>out of</strong> <em>plus</em> the matching words from the box below (the box shows only the <strong>second part</strong>; you supply the preposition). Example: box has <em>invitation only</em> &rarr; you type <em>by invitation only</em>.<br><br><strong>Rules.</strong> There are <strong>six gaps</strong> and <strong>six endings</strong> in the box; use <strong>each ending exactly once</strong>. Type the whole phrase in one go. Apostrophes / spaces are checked loosely.',
        boxCaption:
          'Box &mdash; second half only (add <strong>by</strong>, <strong>in</strong> or <strong>out of</strong> in front to make the full phrase). Use each line once:',
        boxPieces: [
          'any standard',
          'essence',
          'invitation only',
          "my mind's eye",
          'place',
          'surprisingly good taste'
        ],
        pointsFirstPass: 8,
        items: [
          {
            id: 'ex5-1',
            gapLabel: '(1)',
            before:
              'The exhibition at the Central Gallery, by an anonymous up-and-coming artist, was so eagerly awaited that attendance at the opening event was ',
            after: '. While the themes of the exhibition are many and complex, ',
            teach: 'by invitation only',
            acceptable: ['by invitation only']
          },
          {
            id: 'ex5-2',
            gapLabel: '(2)',
            before: 'While the themes of the exhibition are many and complex, ',
            after: ' they all centre on the futility of modern life. The majority of the artworks are ',
            teach: 'in essence',
            acceptable: ['in essence', 'in essence,', 'in essence ,']
          },
          {
            id: 'ex5-3',
            gapLabel: '(3)',
            before: 'The majority of the artworks are ',
            after: ", at least compared to the artist's earlier unsettling works, but one piece was so shocking that it felt rather ",
            teach: 'in surprisingly good taste',
            acceptable: [
              'in surprisingly good taste',
              'in surprisingly good taste,',
              'in good taste',
              'in good taste,'
            ]
          },
          {
            id: 'ex5-4',
            gapLabel: '(4)',
            before: 'it felt rather ',
            after: ': a huge portrait of a sinister cat whose eyes followed me around the room, at least ',
            teach: 'out of place',
            acceptable: ['out of place', 'out of place,']
          },
          {
            id: 'ex5-5',
            gapLabel: '(5)',
            before: 'around the room, at least ',
            after: '. ',
            teach: "in my mind's eye",
            acceptable: ["in my mind's eye", 'in my minds eye', "in your mind's eye", 'in your minds eye']
          },
          {
            id: 'ex5-6',
            gapLabel: '(6)',
            before: '',
            after: ', the anonymous exhibitor has proved themself to be a provocative and innovative artist, whose latest exhibition I highly recommend.',
            teach: 'by any standard',
            acceptable: ['by any standard', 'by any standard,', 'by any standard ,']
          }
        ]
      }
    ],

    /** @returns {{ lexPrepPhraseData: object[], speakPrepItems: object[] }} */
    buildAppLists: function () {
      if (!prepAppListsCache || prepAppListsCache.v !== this.version) {
        var b = prepBuildAppLists(this);
        prepAppListsCache = {
          v: this.version,
          lexPrepPhraseData: b.lexPrepPhraseData,
          speakPrepItems: b.speakPrepItems
        };
      }
      return {
        lexPrepPhraseData: prepAppListsCache.lexPrepPhraseData,
        speakPrepItems: prepAppListsCache.speakPrepItems
      };
    }
  };

  /**
   * Concatenate Exercise 5 gap items into one passage (shared by retelling + Treasure Hunt).
   * @param {{ before?: string, teach?: string, after?: string }[]} items
   * @returns {string}
   */
  function prepGalleryPassageFromItems(items) {
    var full = '';
    for (var j = 0; j < items.length; j++) {
      var it = items[j];
      var b = it.before || '';
      var teach = it.teach || '';
      var a = it.after || '';
      if (j === 0) {
        full = b + teach + a;
        continue;
      }
      if (!b) {
        full += teach + a;
        continue;
      }
      if (full.length >= b.length && full.slice(-b.length) === b) {
        full += teach + a;
        continue;
      }
      var ft = full.replace(/\s+$/, '');
      if (ft.length >= b.length && ft.slice(-b.length) === b) {
        full = ft + teach + a;
        continue;
      }
      full += b + teach + a;
    }
    return full;
  }

  (function prepAttachGalleryRetellAndTreasure() {
    var core = global.PREP_PHRASES_CORE;
    if (!core || !core.tasks) return;
    for (var i = 0; i < core.tasks.length; i++) {
      if (core.tasks[i].id !== 'task-05-gallery-by-in-out-of') continue;
      var t = core.tasks[i];
      var items = t.items || [];
      var full = prepGalleryPassageFromItems(items);
      t.retellFullText = full;
      t.retellTitle = 'Exercise 5 · Gallery description';
      t.retellAccent = '#38bdf8';
      t.retellPhrases = items.map(function (x) {
        return x.teach;
      });

      var rawTh = [
        {
          phrase: 'eagerly awaited',
          paraphrase:
            'Strong anticipation before the opening — people could hardly wait to see the show.'
        },
        {
          phrase: 'by invitation only',
          paraphrase:
            'Not open to everyone: only selected guests could attend the opening event.'
        },
        {
          phrase: 'in essence',
          paraphrase: 'Fundamentally / in substance — what the many themes boil down to.'
        },
        {
          phrase: 'the futility of modern life',
          paraphrase: 'The idea that contemporary existence is pointless or hollow (central theme).'
        },
        {
          phrase: 'in surprisingly good taste',
          paraphrase: 'More restrained or decorous than expected — not crude or offensive.'
        },
        {
          phrase: 'unsettling works',
          paraphrase: "The artist's earlier pieces that disturbed the viewer or felt disquieting."
        },
        {
          phrase: 'out of place',
          paraphrase: 'Incongruous — it did not fit the tone of the rest of the show.'
        },
        {
          phrase: 'sinister cat',
          paraphrase: 'The menacing-looking cat in the huge portrait (key image).'
        },
        {
          phrase: "in my mind's eye",
          paraphrase: 'As you picture or imagine the scene in your head.'
        },
        {
          phrase: 'by any standard',
          paraphrase: 'Judged against any serious benchmark — not just good enough locally.'
        }
      ];
      var thItems = [];
      for (var k = 0; k < rawTh.length; k++) {
        if (full.indexOf(rawTh[k].phrase) !== -1) thItems.push(rawTh[k]);
      }
      thItems.sort(function (a, b) {
        return full.indexOf(a.phrase) - full.indexOf(b.phrase);
      });
      core.prepTreasureHuntRounds = [
        {
          id: 'prep-th-gallery-ex5',
          short: 'Gallery',
          title: 'Exercise 5 · Gallery description',
          passage: full,
          items: thItems
        }
      ];
      break;
    }
  })();
})(typeof window !== 'undefined' ? window : globalThis);
