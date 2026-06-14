/**
 * Deep Talks — step-by-step session wizard (shell only).
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var themeId = params.get("theme") || "";
  var theme = typeof DEEP_TALKS_getTheme === "function" ? DEEP_TALKS_getTheme(themeId) : null;
  var steps = window.DEEP_TALKS_STEPS || [];

  var stepIndex = 0;
  var maxVisited = 0;

  var elRoot = document.getElementById("lesson-root");
  var elStepper = document.getElementById("lesson-stepper");
  var elStage = document.getElementById("lesson-stage");
  var elPrev = document.getElementById("btn-prev");
  var elNext = document.getElementById("btn-next");
  var elProgress = document.getElementById("lesson-progress");

  if (!theme || !elRoot) {
    if (elRoot) {
      elRoot.innerHTML =
        '<div class="int-error"><p>Theme not found. <a class="int-back" href="index.html">Back to series</a></p></div>';
    }
    return;
  }

  document.title = theme.title + " · Deep Talks";

  var headIcon = document.getElementById("lesson-icon");
  var headTitle = document.getElementById("lesson-title");
  var headTag = document.getElementById("lesson-tag");
  var headLenses = document.getElementById("lesson-lenses");
  if (headIcon) headIcon.textContent = theme.icon;
  if (headTitle) headTitle.textContent = "Session " + theme.num + " · " + theme.title;
  if (headTag) headTag.textContent = theme.tagline;
  if (headLenses && theme.lenses && theme.lenses.length) {
    headLenses.innerHTML =
      "<strong>Go deep:</strong> " +
      theme.lenses.map(function (l) {
        return escapeHtml(l);
      }).join(" · ");
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderStepper() {
    if (!elStepper) return;
    elStepper.innerHTML = steps
      .map(function (step, i) {
        var cls = "int-step";
        if (i === stepIndex) cls += " is-active";
        else if (i < stepIndex) cls += " is-done";
        return (
          '<div class="' +
          cls +
          '" data-step="' +
          i +
          '">' +
          '<button type="button" class="int-step-btn" aria-current="' +
          (i === stepIndex ? "step" : "false") +
          '">' +
          '<span class="int-step-dot">' +
          (i < stepIndex ? "✓" : String(i + 1)) +
          "</span>" +
          '<span class="int-step-label">' +
          escapeHtml(step.label) +
          "</span>" +
          "</button></div>"
        );
      })
      .join("");

    elStepper.querySelectorAll(".int-step-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wrap = btn.closest(".int-step");
        if (!wrap) return;
        var idx = parseInt(wrap.getAttribute("data-step"), 10);
        if (idx <= maxVisited) goTo(idx);
      });
    });
  }

  function renderStage() {
    var step = steps[stepIndex];
    if (!step || !elStage) return;

    var teacherExtra = "";
    if (step.id === "big-idea" && theme.blinkHint) {
      teacherExtra =
        '<p class="dt-blink-hint"><strong>Blink pick:</strong> ' + escapeHtml(theme.blinkHint) + "</p>";
    }

    var slotsHtml = (step.slots || [])
      .map(function (slot) {
        return (
          '<article class="int-slot" data-slot="' +
          escapeHtml(slot.id) +
          '">' +
          '<div class="int-slot-head">' +
          '<span class="int-slot-title">' +
          escapeHtml(slot.title) +
          "</span>" +
          '<span class="int-slot-hint">' +
          escapeHtml(slot.hint) +
          "</span></div>" +
          '<div class="int-slot-empty">Content slot — to be filled</div></article>'
        );
      })
      .join("");

    elStage.innerHTML =
      '<div class="int-stage">' +
      '<header class="int-stage-head">' +
      '<div class="int-stage-row">' +
      "<div>" +
      '<div class="int-stage-kicker">Step ' +
      (stepIndex + 1) +
      " of " +
      steps.length +
      " · " +
      escapeHtml(step.short) +
      "</div>" +
      '<h2 class="int-stage-title">' +
      escapeHtml(step.label) +
      "</h2></div>" +
      '<span class="int-stage-time">' +
      escapeHtml(step.time) +
      "</span></div>" +
      '<details class="int-teacher-panel">' +
      "<summary>For you · teacher note</summary>" +
      "<p>" +
      escapeHtml(step.teacher) +
      "</p>" +
      teacherExtra +
      "</details></header>" +
      '<div class="int-stage-body"><div class="int-slots">' +
      slotsHtml +
      "</div></div></div>";

    elStage.classList.remove("int-stage--enter");
    void elStage.offsetWidth;
    elStage.classList.add("int-stage--enter");
  }

  function updateNav() {
    if (elPrev) elPrev.disabled = stepIndex === 0;
    if (elNext) {
      elNext.textContent = stepIndex === steps.length - 1 ? "Finish session" : "Next step →";
    }
    if (elProgress) {
      elProgress.textContent = "Step " + (stepIndex + 1) + " / " + steps.length;
    }
  }

  function goTo(idx) {
    if (idx < 0 || idx >= steps.length) return;
    stepIndex = idx;
    if (stepIndex > maxVisited) maxVisited = stepIndex;
    renderStepper();
    renderStage();
    updateNav();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (elPrev) {
    elPrev.addEventListener("click", function () {
      goTo(stepIndex - 1);
    });
  }

  if (elNext) {
    elNext.addEventListener("click", function () {
      if (stepIndex < steps.length - 1) goTo(stepIndex + 1);
      else window.location.href = "index.html";
    });
  }

  renderStepper();
  renderStage();
  updateNav();
})();
