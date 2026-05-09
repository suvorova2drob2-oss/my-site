/**
 * Timed full-text read → keyword chips from .lex-tip → timed oral retell.
 * Optional chain: data-retell-next on #retell-root opens the next text with the same timers.
 * Expects .r-shell with .r-sheet containing paragraphs and .lex-tip spans.
 */
(function () {
  var sheet = document.querySelector(".r-shell .r-sheet");
  if (!sheet || !sheet.querySelector(".lex-tip")) return;

  var root = document.getElementById("retell-root");
  if (!root) return;

  var STORAGE_KEY = "u11-retell-chain-v1";

  var state = "idle";
  var tickId = null;
  var chipsBuilt = false;

  root.innerHTML =
    '<div class="retell-panel">' +
    "<h2>Пересказ по ключевым словам</h2>" +
    '<p class="retell-lead">Сначала читайте полный текст на время, затем останутся только выделенные фразы — перескажите вслух на время (без подглядывания в полный текст).</p>' +
    '<div class="retell-row">' +
    '<label>Чтение полного текста <select id="retell-read-sec">' +
    "<option value=\"45\">45 с</option>" +
    "<option value=\"60\" selected>60 с</option>" +
    "<option value=\"90\">90 с</option>" +
    "<option value=\"120\">120 с</option>" +
    "<option value=\"180\">180 с</option>" +
    "</select></label>" +
    '<label>Просмотр фраз <select id="retell-skim-sec">' +
    "<option value=\"0\">вручную → кнопка</option>" +
    "<option value=\"20\" selected>20 с</option>" +
    "<option value=\"45\">45 с</option>" +
    "<option value=\"60\">60 с</option>" +
    "</select></label>" +
    '<label>Пересказ вслух <select id="retell-speak-sec">' +
    "<option value=\"60\">60 с</option>" +
    "<option value=\"90\" selected>90 с</option>" +
    "<option value=\"120\">120 с</option>" +
    "<option value=\"180\">180 с</option>" +
    "</select></label>" +
    "</div>" +
    '<label class="retell-chain-label" id="retell-chain-wrap">' +
    '<input type="checkbox" id="retell-chain-cb" checked />' +
    "<span>После пересказа автоматически открыть следующий текст и продолжить те же этапы (чтение → фразы → пересказ).</span>" +
    "</label>" +
    '<div class="retell-actions">' +
    '<button type="button" id="retell-btn-start">Начать</button>' +
    '<button type="button" id="retell-btn-next" style="display:none">Начать пересказ (таймер)</button>' +
    '<button type="button" id="retell-btn-reset" disabled>Сброс</button>' +
    "</div></div>";

  var bar = document.createElement("div");
  bar.className = "retell-bar";
  bar.id = "retell-bar";
  bar.innerHTML =
    '<span class="retell-bar-phase" id="retell-bar-phase"></span>' +
    '<span class="retell-bar-count" id="retell-bar-count" aria-live="polite"></span>' +
    '<span class="retell-bar-hint" id="retell-bar-hint"></span>';
  document.body.appendChild(bar);

  var elPhase = document.getElementById("retell-bar-phase");
  var elCount = document.getElementById("retell-bar-count");
  var elHint = document.getElementById("retell-bar-hint");
  var btnStart = document.getElementById("retell-btn-start");
  var btnNext = document.getElementById("retell-btn-next");
  var btnReset = document.getElementById("retell-btn-reset");
  var selRead = document.getElementById("retell-read-sec");
  var selSkim = document.getElementById("retell-skim-sec");
  var selSpeak = document.getElementById("retell-speak-sec");
  var chainWrap = document.getElementById("retell-chain-wrap");
  var chkChain = document.getElementById("retell-chain-cb");

  var nextHrefAttr = (root.getAttribute("data-retell-next") || "").trim();
  if (chainWrap) chainWrap.style.display = nextHrefAttr ? "flex" : "none";

  function isSafeRetellNext(href) {
    if (!href || href.indexOf("..") !== -1) return false;
    if (/^\s*javascript:/i.test(href)) return false;
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return false;
    return /^[\w./-]+\.html$/i.test(href);
  }

  function clearTick() {
    if (tickId != null) {
      clearInterval(tickId);
      tickId = null;
    }
  }

  function showBar(on) {
    bar.classList.toggle("retell-bar--visible", !!on);
  }

  function setBar(phaseText, n, hint) {
    elPhase.textContent = phaseText;
    elCount.textContent = n != null ? String(n) : "";
    elHint.textContent = hint || "";
  }

  function restoreSheet() {
    sheet.classList.remove("retell-drill--hide-main");
    var host = document.getElementById("retell-keyword-chips");
    if (host) host.remove();
    sheet.querySelectorAll("p").forEach(function (p) {
      p.style.display = "";
    });
    chipsBuilt = false;
  }

  function buildChips() {
    if (chipsBuilt) return;
    var old = document.getElementById("retell-keyword-chips");
    if (old) old.remove();
    var host = document.createElement("div");
    host.id = "retell-keyword-chips";
    host.className = "retell-keyword-chips";
    var h2 = sheet.querySelector("h2");
    var paras = sheet.querySelectorAll("p");
    paras.forEach(function (p) {
      var tips = p.querySelectorAll(".lex-tip");
      if (!tips.length) return;
      var row = document.createElement("div");
      row.className = "retell-keyword-row";
      tips.forEach(function (tip) {
        var chip = document.createElement("span");
        chip.className = "retell-chip";
        chip.textContent = tip.textContent.trim();
        row.appendChild(chip);
      });
      host.appendChild(row);
    });
    if (h2 && h2.nextSibling) sheet.insertBefore(host, h2.nextSibling);
    else sheet.appendChild(host);
    sheet.classList.add("retell-drill--hide-main");
    chipsBuilt = true;
  }

  function runCountdown(seconds, onTick, onEnd) {
    clearTick();
    var left = seconds;
    onTick(left);
    tickId = setInterval(function () {
      left--;
      if (left <= 0) {
        clearTick();
        onEnd();
      } else onTick(left);
    }, 1000);
  }

  function finishDrill() {
    state = "done";
    clearTick();
    document.body.classList.remove("retell-drill-busy");
    showBar(false);
    btnStart.disabled = false;
    btnNext.style.display = "none";
    btnReset.disabled = false;
  }

  function saveChainAndGo(next) {
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          autoStart: true,
          chain: chkChain ? chkChain.checked : false,
          read: selRead.value,
          skim: selSkim.value,
          speak: selSpeak.value
        })
      );
    } catch (e) {}
    window.location.href = next;
  }

  function onSpeakTimerEnd() {
    var next = nextHrefAttr;
    var useChain = chkChain && chkChain.checked && next && isSafeRetellNext(next);
    if (useChain) {
      clearTick();
      document.body.classList.remove("retell-drill-busy");
      showBar(false);
      btnStart.disabled = true;
      btnNext.style.display = "none";
      btnReset.disabled = true;
      setBar("Следующий текст", "…", "Загружается следующий фрагмент — цепочка продолжится автоматически.");
      saveChainAndGo(next);
      return;
    }
    setBar("Готово", "0", "Таймер закончился. Оцените пересказ или нажмите «Сброс».");
    finishDrill();
  }

  function startSkimOrManual(skimSec) {
    if (skimSec > 0) {
      state = "skim";
      setBar("Этап 2 — только ключевые фразы", skimSec, "Можно пробежать глазами; затем начнётся время пересказа.");
      runCountdown(
        skimSec,
        function (n) {
          setBar("Этап 2 — только ключевые фразы", n, "Далее автоматически начнётся время для устного пересказа.");
        },
        startSpeak
      );
    } else {
      state = "keywords";
      btnNext.style.display = "inline-block";
      setBar("Этап 2 — только ключевые фразы", "—", "Когда готовы, нажмите «Начать пересказ» в панели выше.");
      elCount.textContent = "";
    }
  }

  function startSpeak() {
    state = "speak";
    btnNext.style.display = "none";
    var sec = parseInt(selSpeak.value, 10) || 90;
    setBar("Этап 3 — пересказ вслух", sec, "Говорите по памяти. Подсказки — только чипы на странице.");
    runCountdown(
      sec,
      function (n) {
        setBar("Этап 3 — пересказ вслух", n, "Осталось секунд — закончите мысль.");
      },
      onSpeakTimerEnd
    );
  }

  function beginDrill() {
    if (state !== "idle" && state !== "done") return;
    restoreSheet();
    state = "read";
    document.body.classList.add("retell-drill-busy");
    btnStart.disabled = true;
    btnReset.disabled = false;
    btnNext.style.display = "none";
    showBar(true);
    var sec = parseInt(selRead.value, 10) || 60;
    setBar("Этап 1 — читайте полный текст", sec, "Все абзацы видны; когда время выйдет, останутся только ключевые фразы.");
    runCountdown(
      sec,
      function (n) {
        setBar("Этап 1 — читайте полный текст", n, "Читайте внимательно — потом полный текст скроется.");
      },
      function () {
        buildChips();
        var skim = parseInt(selSkim.value, 10);
        startSkimOrManual(skim);
      }
    );
  }

  btnStart.addEventListener("click", beginDrill);

  btnNext.addEventListener("click", function () {
    if (state !== "keywords") return;
    clearTick();
    startSpeak();
  });

  btnReset.addEventListener("click", function () {
    clearTick();
    state = "idle";
    document.body.classList.remove("retell-drill-busy");
    restoreSheet();
    showBar(false);
    btnStart.disabled = false;
    btnNext.style.display = "none";
    btnReset.disabled = true;
  });

  btnReset.disabled = true;

  try {
    var raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      var payload = JSON.parse(raw);
      sessionStorage.removeItem(STORAGE_KEY);
      if (payload && payload.autoStart) {
        if (payload.read) selRead.value = payload.read;
        if (payload.skim != null && payload.skim !== "") selSkim.value = String(payload.skim);
        if (payload.speak) selSpeak.value = payload.speak;
        if (chkChain) chkChain.checked = payload.chain !== false;
        setTimeout(beginDrill, 380);
      }
    }
  } catch (e) {}
})();
