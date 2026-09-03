/**
 * Microphone device picker — enumerate inputs after getUserMedia permission.
 * window.PREP_MIC_DEVICE_PICKER.create({ select, btnAllow, statusEl, storageKey })
 */
(function (W) {
  "use strict";

  function protocolHint() {
    if (W.location && W.location.protocol === "file:") {
      return (
        "Microphone works on localhost only — run npm run dev, then open http://127.0.0.1:5173/ (not double-click)."
      );
    }
    if (W.isSecureContext === false) {
      return "Microphone needs https or localhost.";
    }
    return "";
  }

  function create(opts) {
    opts = opts || {};
    var select = opts.select || null;
    var btnAllow = opts.btnAllow || null;
    var statusEl = opts.statusEl || null;
    var storageKey = opts.storageKey || "prepMicDeviceId";
    var stream = null;

    function setStatus(msg) {
      if (statusEl && msg) statusEl.textContent = msg;
    }

    async function refresh() {
      var hint = protocolHint();
      if (hint) {
        setStatus(hint);
        return false;
      }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setStatus("Браузер не поддерживает выбор микрофона.");
        return false;
      }
      try {
        var warm = await navigator.mediaDevices.getUserMedia({ audio: true });
        warm.getTracks().forEach(function (t) {
          t.stop();
        });
      } catch (e) {
        setStatus("Разрешите доступ к микрофону в окне браузера.");
        return false;
      }
      var list = await navigator.mediaDevices.enumerateDevices();
      var mics = list.filter(function (d) {
        return d.kind === "audioinput";
      });
      if (select) {
        select.innerHTML = "";
        var saved = "";
        try {
          saved = W.sessionStorage.getItem(storageKey) || "";
        } catch (eSt) {}
        var i;
        for (i = 0; i < mics.length; i++) {
          var o = W.document.createElement("option");
          o.value = mics[i].deviceId;
          o.textContent = mics[i].label || "Microphone " + (i + 1);
          select.appendChild(o);
        }
        select.disabled = !mics.length;
        if (saved && select.options.length) {
          for (i = 0; i < select.options.length; i++) {
            if (select.options[i].value === saved) {
              select.selectedIndex = i;
              break;
            }
          }
        }
      }
      if (!mics.length) {
        setStatus("Микрофоны не найдены.");
        return false;
      }
      setStatus("Микрофон готов — нажмите Start.");
      return true;
    }

    async function prime() {
      var hint = protocolHint();
      if (hint) {
        setStatus(hint);
        return false;
      }
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        return true;
      }
      var deviceId = select && select.value ? String(select.value) : "";
      var constraints = deviceId
        ? { audio: { deviceId: { exact: deviceId } } }
        : { audio: true };
      try {
        if (stream) {
          stream.getTracks().forEach(function (t) {
            t.stop();
          });
          stream = null;
        }
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (deviceId) {
          try {
            W.sessionStorage.setItem(storageKey, deviceId);
          } catch (eSave) {}
        }
        return true;
      } catch (e) {
        setStatus("Не удалось включить выбранный микрофон — попробуйте другой.");
        return false;
      }
    }

    function release() {
      if (stream) {
        stream.getTracks().forEach(function (t) {
          t.stop();
        });
        stream = null;
      }
    }

    if (btnAllow) {
      btnAllow.addEventListener("click", function () {
        refresh();
      });
    }
    if (select) {
      select.addEventListener("change", function () {
        try {
          W.sessionStorage.setItem(storageKey, select.value || "");
        } catch (eCh) {}
        prime();
      });
    }

    return { refresh: refresh, prime: prime, release: release, protocolHint: protocolHint };
  }

  W.PREP_MIC_DEVICE_PICKER = { create: create, protocolHint: protocolHint };
})(typeof window !== "undefined" ? window : globalThis);
