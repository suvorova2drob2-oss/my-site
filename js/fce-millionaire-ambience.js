/**
 * Millionaire show ambience — synth bed + stingers (no copyrighted TV audio).
 * window.FCE_MILLIONAIRE_AMBIENCE
 */
(function (W) {
  "use strict";

  var ctx = null;
  var master = null;
  var bedOsc = null;
  var bedGain = null;
  var lfo = null;
  var playing = false;
  var timer = null;
  var step = 0;

  /* Suspense minor pattern — reminiscent of quiz-show tension */
  var MELODY = [220.0, 261.63, 329.63, 392.0, 329.63, 293.66, 261.63, 246.94];
  var PAD = [110.0, 110.0, 130.81, 146.83, 130.81, 110.0, 98.0, 110.0];

  function ensureCtx() {
    if (ctx) return ctx;
    var AC = W.AudioContext || W.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.14;
    master.connect(ctx.destination);
    return ctx;
  }

  function resume() {
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume().catch(function () {});
    }
  }

  function blip(freq, t, dur, vol, type) {
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(master);
    osc.start(t);
    osc.stop(t + dur + 0.03);
  }

  function startBedOsc() {
    if (bedOsc || !ctx) return;
    bedOsc = ctx.createOscillator();
    bedGain = ctx.createGain();
    lfo = ctx.createOscillator();
    var lfoG = ctx.createGain();
    bedOsc.type = "triangle";
    bedOsc.frequency.value = 55;
    bedGain.gain.value = 0.04;
    lfo.frequency.value = 0.12;
    lfoG.gain.value = 0.025;
    lfo.connect(lfoG);
    lfoG.connect(bedGain.gain);
    bedOsc.connect(bedGain);
    bedGain.connect(master);
    bedOsc.start();
    lfo.start();
  }

  function stopBedOsc() {
    if (bedOsc) {
      try {
        bedOsc.stop();
        lfo.stop();
      } catch (e) {}
      bedOsc = null;
      lfo = null;
      bedGain = null;
    }
  }

  function tick() {
    if (!ctx || !master) return;
    var i = step % MELODY.length;
    step += 1;
    var t = ctx.currentTime;
    blip(MELODY[i], t, 0.55, 0.35, "triangle");
    if (i % 2 === 0) {
      blip(PAD[i], t, 0.7, 0.22, "sine");
    }
  }

  function start() {
    if (playing) return true;
    if (!ensureCtx()) return false;
    resume();
    playing = true;
    startBedOsc();
    tick();
    timer = W.setInterval(tick, 520);
    return true;
  }

  function stop() {
    playing = false;
    if (timer) {
      W.clearInterval(timer);
      timer = null;
    }
    stopBedOsc();
  }

  function isPlaying() {
    return playing;
  }

  function stingerCorrect() {
    if (!ensureCtx()) return;
    resume();
    var t = ctx.currentTime;
    blip(523.25, t, 0.12, 0.45, "sine");
    blip(659.25, t + 0.1, 0.14, 0.4, "sine");
    blip(783.99, t + 0.22, 0.22, 0.38, "triangle");
  }

  function stingerWrong() {
    if (!ensureCtx()) return;
    resume();
    var t = ctx.currentTime;
    blip(196.0, t, 0.35, 0.5, "sawtooth");
    blip(155.56, t + 0.18, 0.45, 0.42, "sawtooth");
  }

  function stingerWin() {
    if (!ensureCtx()) return;
    resume();
    var t = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
      blip(f, t + i * 0.12, 0.28, 0.42, "triangle");
    });
  }

  function wireFab(fabEl) {
    if (!fabEl) return;
    function paint() {
      fabEl.classList.toggle("is-on", playing);
      fabEl.setAttribute("aria-pressed", playing ? "true" : "false");
      fabEl.title = playing ? "Turn music off" : "Turn show music on";
    }
    fabEl.addEventListener("click", function () {
      if (playing) stop();
      else start();
      paint();
    });
    paint();
  }

  W.FCE_MILLIONAIRE_AMBIENCE = {
    start: start,
    stop: stop,
    isPlaying: isPlaying,
    stingerCorrect: stingerCorrect,
    stingerWrong: stingerWrong,
    stingerWin: stingerWin,
    wireFab: wireFab
  };
})(typeof window !== "undefined" ? window : globalThis);
