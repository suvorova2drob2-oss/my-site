/**
 * ЕГЭ Listening · этап 3 — аудиосуфлирование (переиспользуемый движок).
 * window.__EGE_LISTENING_SHADOWING__
 *
 * mount({ rootId, prefix, audioSrc, speakers, dialogueParagraphs?, repeatMode })
 * speakers[]: { id, label, fullText, phrases[], chunks[] }
 * dialogueParagraphs[]: { turns: [{ speaker, text }] } — режим «диалог по абзацам»
 * Словарь: js/ege/ege-quick-dictionary-drawer.js
 */
(function (w) {
  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function mount(opts) {
    if (!opts || !opts.speakers || !opts.speakers.length) return;
    var root = document.getElementById(opts.rootId || "ege-lm-shadow-root");
    if (!root) return;

    var prefix = opts.prefix || "ege-lm-sh";
    var speakers = opts.speakers;
    var dialogueParagraphs = opts.dialogueParagraphs || null;
    var useDialogue = !!(dialogueParagraphs && dialogueParagraphs.length);
    var spkIx = 0;
    var chunkIx = 0;
    var hideChunkText = false;
    var dictApi = null;
    var openDictFn = null;

    function speakerSlug(name) {
      return String(name || "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "") || "spk";
    }

    function phrasesForSpeaker(name) {
      var i;
      for (i = 0; i < speakers.length; i++) {
        if (speakers[i].id === name || speakers[i].label === name) {
          return speakerPhrases(speakers[i]);
        }
      }
      return [];
    }

    function wrapTapForSpeaker(text, speakerName) {
      if (dictApi) return dictApi.wrapTapHTML(text, phrasesForSpeaker(speakerName));
      return esc(text);
    }

    function currentSpeaker() {
      return speakers[spkIx];
    }

    function speakerPhrases(sp) {
      if (sp && sp.phrases && sp.phrases.length) return sp.phrases;
      return [];
    }

    function wrapTap(text) {
      if (dictApi) return dictApi.wrapTapHTML(text, speakerPhrases(currentSpeaker()));
      return esc(text);
    }

    function currentChunks() {
      if (useDialogue) {
        return dialogueParagraphs.map(function (para) {
          var text = (para.turns || [])
            .map(function (t) {
              return t.text || "";
            })
            .join(" ");
          return { text: text, showText: true, paragraph: para };
        });
      }
      var sp = currentSpeaker();
      return sp.chunks && sp.chunks.length
        ? sp.chunks
        : [{ text: sp.fullText, showText: true }];
    }

    function stepLabel() {
      return useDialogue ? "абзац" : "фраза";
    }

    function getAudioEl() {
      return document.getElementById(prefix + "-audio");
    }

    function audioProgressPct() {
      var audio = getAudioEl();
      if (!audio || !audio.duration || !isFinite(audio.duration) || audio.duration <= 0) {
        return 0;
      }
      if (audio.ended) return 100;
      return Math.min(100, Math.round((audio.currentTime / audio.duration) * 100));
    }

    function updateVoiceBar() {
      if (useDialogue) return;
      var fill = document.getElementById(prefix + "-voice-fill");
      var status = document.getElementById(prefix + "-voice-status");
      var pctEl = document.getElementById(prefix + "-voice-pct");
      var audio = getAudioEl();
      var chunks = currentChunks();
      var pct = audioProgressPct();
      var done = pct >= 100 || !!(audio && audio.ended);
      var playing = !!(audio && !audio.paused && !audio.ended);
      if (fill) {
        fill.style.width = pct + "%";
        fill.classList.remove("is-speaking", "is-silent", "is-neutral", "is-done");
        if (done) fill.classList.add("is-done");
        else if (playing) fill.classList.add("is-speaking");
        else fill.classList.add("is-neutral");
      }
      if (pctEl) pctEl.textContent = pct + "%";
      if (status) {
        if (done) {
          status.textContent = "Молодец — 100%! Запись прослушана до конца.";
        } else if (!playing) {
          status.textContent =
            "Нажми ▶ — полоска по аудиo (0→100%) · " +
            stepLabel() +
            " «Дальше» " +
            (chunkIx >= chunks.length ? chunks.length : chunkIx + 1) +
            "/" +
            chunks.length;
        } else {
          status.textContent =
            "Аудио играет · " +
            pct +
            "% · " +
            stepLabel() +
            " " +
            (chunkIx >= chunks.length ? chunks.length : chunkIx + 1) +
            " / " +
            chunks.length;
        }
      }
    }

    function advance() {
      var chunks = currentChunks();
      if (chunkIx < chunks.length - 1) {
        chunkIx += 1;
        renderAll();
      } else {
        chunkIx = chunks.length;
        renderAll();
      }
    }

    function dialogueNamesHtml() {
      return speakers
        .map(function (s) {
          return esc(s.label || s.id);
        })
        .join(" & ");
    }

    function renderMeta() {
      var el = document.getElementById(prefix + "-meta");
      if (!el) return;
      var chunks = currentChunks();
      if (useDialogue) {
        el.textContent =
          chunkIx >= chunks.length
            ? "Диалог · все абзацы пройдены"
            : "Диалог · абзац " + (chunkIx + 1) + " из " + chunks.length;
        return;
      }
      var sp = currentSpeaker();
      el.textContent =
        chunkIx >= chunks.length
          ? (sp.label || sp.id) + " · все фразы пройдены"
          : (sp.label || sp.id) +
            " · фраза " +
            (chunkIx + 1) +
            " из " +
            chunks.length;
    }

    function renderProgress() {
      var el = document.getElementById(prefix + "-progress");
      if (!el) return;
      if (useDialogue) {
        el.innerHTML = "";
        el.hidden = true;
        return;
      }
      el.hidden = false;
      var chunks = currentChunks();
      var html = "";
      var i;
      for (i = 0; i < chunks.length; i++) {
        html +=
          '<span class="' +
          prefix +
          "-dot" +
          (i < chunkIx ? " is-done" : "") +
          (i === chunkIx ? " is-current" : "") +
          '"></span>';
      }
      el.innerHTML = html;
    }

    function highlightCurrentInFull(fullText, chunks) {
      if (chunkIx >= chunks.length) return wrapTap(fullText);
      var cur = chunks[chunkIx].text;
      var idx = fullText.indexOf(cur);
      if (idx < 0) return wrapTap(fullText);
      return (
        wrapTap(fullText.slice(0, idx)) +
        '<span class="' +
        prefix +
        '-full-chunk is-current">' +
        wrapTap(cur) +
        "</span>" +
        wrapTap(fullText.slice(idx + cur.length))
      );
    }

    function renderDialogueScript() {
      var body = document.getElementById(prefix + "-full-body");
      var lab = document.getElementById(prefix + "-full-label");
      if (!body) return;
      var total = dialogueParagraphs.length;
      if (chunkIx >= total) {
        if (lab) lab.textContent = "Диалог · готово";
        body.innerHTML =
          '<p class="' +
          prefix +
          '-dialogue-done">✓ Все ' +
          total +
          " абзацев пройдены. Можно переслушать аудиo или нажать «С начала диалога».</p>";
        return;
      }
      var para = dialogueParagraphs[chunkIx];
      if (lab) lab.textContent = "Абзац " + (chunkIx + 1) + " из " + total;
      var html =
        '<div class="' + prefix + '-dialogue-script ' + prefix + '-dialogue-script--single">';
      html += '<div class="' + prefix + '-dialogue-block is-current is-single">';
      (para.turns || []).forEach(function (turn) {
        var slug = speakerSlug(turn.speaker);
        html += '<div class="' + prefix + "-turn " + prefix + "-turn--" + slug + '">';
        html += '<span class="' + prefix + '-turn-name">' + esc(turn.speaker) + "</span>";
        html +=
          '<div class="' +
          prefix +
          '-turn-bubble">' +
          wrapTapForSpeaker(turn.text, turn.speaker) +
          "</div></div>";
      });
      html += "</div></div>";
      body.innerHTML = html;
    }

    function renderNextButton() {
      var btn = document.getElementById(prefix + "-next");
      if (!btn || !useDialogue) return;
      var total = dialogueParagraphs.length;
      if (chunkIx >= total) {
        btn.textContent = "Все абзацы пройдены";
        btn.disabled = true;
        return;
      }
      btn.disabled = false;
      btn.textContent =
        chunkIx >= total - 1
          ? "Проговорил → финиш"
          : "Проговорил → следующий абзац";
    }

    function renderFullText() {
      var body = document.getElementById(prefix + "-full-body");
      var lab = document.getElementById(prefix + "-full-label");
      var panel = document.getElementById(prefix + "-full-panel");
      if (panel) panel.hidden = hideChunkText;
      if (hideChunkText) {
        if (body) body.innerHTML = "";
        return;
      }
      if (!body) return;
      if (useDialogue) {
        renderDialogueScript();
        return;
      }
      var sp = currentSpeaker();
      var chunks = currentChunks();
      if (lab) lab.textContent = "Полный текст · " + (sp.label || sp.id);
      if (chunkIx >= chunks.length) {
        body.innerHTML = '<p class="' + prefix + '-full-done">' + wrapTap(sp.fullText) + "</p>";
        return;
      }
      body.innerHTML =
        '<p class="' + prefix + '-full-done">' + highlightCurrentInFull(sp.fullText, chunks) + "</p>";
    }

    function renderChunk() {
      var focusLab = document.getElementById(prefix + "-focus-lab");
      if (!focusLab) return;
      var chunks = currentChunks();
      if (chunkIx >= chunks.length) {
        focusLab.textContent = useDialogue
          ? "✓ Диалог пройден — все абзацы отработаны."
          : "✓ " + (currentSpeaker().label || "") + " — все фрагменты пройдены.";
      } else if (hideChunkText) {
        focusLab.textContent =
          "«На слух» — без текста · проговаривай вслух · " +
          stepLabel() +
          " " +
          (chunkIx + 1) +
          " из " +
          chunks.length;
      } else if (useDialogue) {
        focusLab.textContent =
          hideChunkText
            ? "«На слух» — проговаривай абзац вслух · " + (chunkIx + 1) + " / " + chunks.length
            : "Один абзац на экране · спикеры по очереди · затем «следующий абзац»";
      } else {
        focusLab.textContent =
          "Жёлтым — фрагмент для проговаривания · " +
          stepLabel() +
          " " +
          (chunkIx + 1) +
          " из " +
          chunks.length;
      }
    }

    function renderTabsActive() {
      if (useDialogue) return;
      var tabs = document.querySelectorAll("." + prefix + "-tab");
      tabs.forEach(function (t, i) {
        t.classList.toggle("is-active", i === spkIx);
      });
    }

    function renderAll() {
      renderTabsActive();
      renderMeta();
      renderProgress();
      renderChunk();
      renderFullText();
      renderNextButton();
      updateVoiceBar();
    }

    function onSpeakerTab(ix) {
      spkIx = ix;
      chunkIx = 0;
      if (dictApi) dictApi.setSpeakerIndex(ix);
      renderAll();
    }

    var repeatBanner = opts.repeatMode
      ? '<p class="' +
        prefix +
        '-repeat-note">Повторное занятие — тренируй <strong>аудиосуфлирование</strong> и <strong>фразы</strong>.</p>'
      : "";

    var leadText = useDialogue
      ? "Диалог <strong>" +
        dialogueNamesHtml() +
        "</strong> · на экране <strong>один абзац</strong>. Проговорил — жми <strong>«следующий абзац»</strong>. Аудиo — сверху."
      : 'Speaker A–F · <strong>«С текстом»</strong> или <strong>«На слух»</strong> (без текста). Полоска — прогресс <strong>аудиo 0→100%</strong>. Фразы — кнопка «Дальше».';

    var restartLabel = useDialogue ? "С начала диалога" : "С начала спикера";
    var wrapMod = useDialogue ? " " + prefix + "-wrap--dialogue" : "";

    root.innerHTML =
      '<div class="' +
      prefix +
      '-wrap' +
      wrapMod +
      '">' +
      repeatBanner +
      '<div class="' +
      prefix +
      '-head-row">' +
      '<h3 class="' +
      prefix +
      '-title">Этап 3 · Аудиосуфлирование</h3>' +
      '<button type="button" class="' +
      prefix +
      '-dict-btn" id="' +
      prefix +
      '-dict-fab" aria-expanded="false">Быстрый словарь</button>' +
      "</div>" +
      '<p class="' +
      prefix +
      '-lead">' +
      leadText +
      '</p>' +
      '<audio id="' +
      prefix +
      '-audio" class="' +
      prefix +
      '-audio" controls preload="metadata"></audio>' +
      '<div class="' +
      prefix +
      '-modes">' +
      '<button type="button" class="' +
      prefix +
      '-mode is-active" data-mode="text">С текстом</button>' +
      '<button type="button" class="' +
      prefix +
      '-mode" data-mode="ear">На слух</button>' +
      "</div>" +
      '<div class="' +
      prefix +
      '-voice">' +
      '<div class="' +
      prefix +
      '-voice-head">' +
      '<span id="' +
      prefix +
      '-voice-status">Нажми ▶ — полоска по аудиo</span>' +
      '<span id="' +
      prefix +
      '-voice-pct">0%</span></div>' +
      '<div class="' +
      prefix +
      '-voice-track"><div class="' +
      prefix +
      '-voice-fill is-neutral" id="' +
      prefix +
      '-voice-fill"></div></div>' +
      "</div>" +
      '<div class="' +
      prefix +
      '-tabs" id="' +
      prefix +
      '-tabs"></div>' +
      '<p class="' +
      prefix +
      '-meta" id="' +
      prefix +
      '-meta"></p>' +
      '<div class="' +
      prefix +
      '-full-panel" id="' +
      prefix +
      '-full-panel">' +
      '<p class="' +
      prefix +
      '-full-label" id="' +
      prefix +
      '-full-label"></p>' +
      '<div class="' +
      prefix +
      '-full-body" id="' +
      prefix +
      '-full-body"></div>' +
      "</div>" +
      '<p class="' +
      prefix +
      '-focus-lab" id="' +
      prefix +
      '-focus-lab"></p>' +
      '<div class="' +
      prefix +
      '-progress" id="' +
      prefix +
      '-progress"></div>' +
      '<div class="' +
      prefix +
      '-actions">' +
      '<button type="button" class="ege-lm-btn ege-lm-btn--check" id="' +
      prefix +
      '-next">Проговорил → дальше</button>' +
      '<button type="button" class="ege-lm-btn ege-lm-btn--reset" id="' +
      prefix +
      '-restart">' +
      restartLabel +
      '</button>' +
      "</div>" +
      '<div id="' +
      prefix +
      '-dict-mount"></div>' +
      '<div id="' +
      prefix +
      '-wtip" class="' +
      prefix +
      '-wtip" hidden></div>' +
      "</div>";

    var audio = getAudioEl();
    if (audio && opts.audioSrc) audio.src = opts.audioSrc;
    if (audio) {
      audio.addEventListener("play", updateVoiceBar);
      audio.addEventListener("pause", updateVoiceBar);
      audio.addEventListener("timeupdate", updateVoiceBar);
      audio.addEventListener("ended", updateVoiceBar);
    }

    var tabs = document.getElementById(prefix + "-tabs");
    if (useDialogue) {
      tabs.hidden = true;
      tabs.style.display = "none";
    } else {
      speakers.forEach(function (sp, i) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = prefix + "-tab" + (i === 0 ? " is-active" : "");
        btn.textContent = sp.label || "Speaker " + sp.id;
        btn.addEventListener("click", function () {
          onSpeakerTab(i);
        });
        tabs.appendChild(btn);
      });
    }

    document.querySelectorAll("." + prefix + "-mode").forEach(function (b) {
      b.addEventListener("click", function () {
        hideChunkText = b.getAttribute("data-mode") === "ear";
        document.querySelectorAll("." + prefix + "-mode").forEach(function (x) {
          x.classList.toggle("is-active", x === b);
        });
        renderChunk();
        renderFullText();
      });
    });

    document.getElementById(prefix + "-next").addEventListener("click", advance);
    document.getElementById(prefix + "-restart").addEventListener("click", function () {
      chunkIx = 0;
      renderAll();
    });

    var qd = w.__EGE_QUICK_DICTIONARY__;
    if (qd && typeof qd.mount === "function") {
      dictApi = qd.mount({
        prefix: prefix + "-dict",
        mountId: prefix + "-dict-mount",
        speakers: speakers,
        triggerBtnId: prefix + "-dict-fab",
        wtipHostId: prefix + "-wtip",
        bodyOpenClass: "ege-lm-sh--dict-open",
        onSpeakerChange: function (ix) {
          if (ix !== spkIx) onSpeakerTab(ix);
        }
      });
      if (dictApi) {
        dictApi.bindTapOnRoot(root);
        dictApi.bindEscape();
        openDictFn = dictApi.open;
      }
    }

    document.addEventListener("keydown", function (e) {
      if (e.key !== " " || e.repeat) return;
      if (
        e.target &&
        (e.target.tagName === "INPUT" ||
          e.target.tagName === "TEXTAREA" ||
          e.target.tagName === "SELECT" ||
          e.target.isContentEditable)
      ) {
        return;
      }
      if (!root.querySelector("." + prefix + "-wrap")) return;
      var rect = root.getBoundingClientRect();
      if (rect.bottom < 80 || rect.top > window.innerHeight - 40) return;
      e.preventDefault();
      advance();
    });

    renderAll();
    w.__EGE_LISTENING_SHADOWING__.openDict = openDictFn || function () {};
  }

  w.__EGE_LISTENING_SHADOWING__ = { mount: mount, openDict: null };
})(typeof window !== "undefined" ? window : this);
