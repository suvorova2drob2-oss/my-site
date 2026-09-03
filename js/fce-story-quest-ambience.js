/**
 * Cheerful loop when MP3 missing — Web Audio waltz-ish major pattern.
 * window.FCE_STORY_QUEST_AMBIENCE
 */
(function (W) {
  "use strict";

  var ctx = null;
  var master = null;
  var timer = null;
  var playing = false;
  var step = 0;
  /* C major — bouncy fairy-tale feel */
  var MELODY = [523.25, 659.25, 783.99, 1046.5, 783.99, 659.25, 587.33, 659.25];
  var BASS = [130.81, 130.81, 164.81, 196.0, 164.81, 130.81, 146.83, 164.81];

  function ensureCtx() {
    if (ctx) return ctx;
    var AC = W.AudioContext || W.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.11;
    master.connect(ctx.destination);
    return ctx;
  }

  function blip(freq, t, dur, vol, type) {
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = type || "triangle";
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(master);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  function tick() {
    if (!ctx || !master) return;
    var i = step % MELODY.length;
    step += 1;
    var t = ctx.currentTime;
    blip(MELODY[i], t, 0.26, 0.42, "triangle");
    if (i % 2 === 0) {
      blip(BASS[i], t, 0.34, 0.28, "sine");
    }
  }

  function start() {
    if (playing) return true;
    if (!ensureCtx()) return false;
    if (ctx.state === "suspended") {
      ctx.resume().catch(function () {});
    }
    playing = true;
    tick();
    timer = W.setInterval(tick, 280);
    return true;
  }

  function stop() {
    playing = false;
    if (timer) {
      W.clearInterval(timer);
      timer = null;
    }
  }

  function isPlaying() {
    return playing;
  }

  function tryMp3ThenSynth(audioEl) {
    if (!audioEl) return start();
    audioEl.volume = 0.38;
    audioEl.loop = true;
    return audioEl
      .play()
      .then(function () {
        return true;
      })
      .catch(function () {
        return start();
      });
  }

  function pauseAll(audioEl) {
    stop();
    if (audioEl) {
      try {
        audioEl.pause();
      } catch (e) {}
    }
  }

  W.FCE_STORY_QUEST_AMBIENCE = {
    start: start,
    stop: stop,
    isPlaying: isPlaying,
    tryMp3ThenSynth: tryMp3ThenSynth,
    pauseAll: pauseAll
  };
})(typeof window !== "undefined" ? window : globalThis);
