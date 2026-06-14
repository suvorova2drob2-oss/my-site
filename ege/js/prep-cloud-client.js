/**
 * Единый облачный слой для Prep: курс (папки/активности) + опубликованные Part 1 по contextId.
 * Чтение — REST + публичный ключ. Запись — HTTP/edge + write-секрет (не service role в браузере).
 *
 * Конфиг (в live-supabase-local.js, не в git; имя файла историческое):
 *   window.__LIVE_SUPABASE_URL__, window.__LIVE_SUPABASE_KEY__
 *   window.__PREP_CLOUD_WRITE_SECRET__ — согласован с бэкендом публикации.
 */
(function (global) {
  function baseUrl() {
    return String(global.__LIVE_SUPABASE_URL__ || "").replace(/\/$/, "");
  }

  function anonKey() {
    return String(global.__LIVE_SUPABASE_KEY__ || "").trim();
  }

  function writeSecret() {
    return String(global.__PREP_CLOUD_WRITE_SECRET__ || "").trim();
  }

  function isReadConfigured() {
    return !!baseUrl() && !!anonKey();
  }

  function isWriteConfigured() {
    return isReadConfigured() && !!writeSecret();
  }

  function fnUrl() {
    return baseUrl() + "/functions/v1/prep-cloud";
  }

  function restHeaders() {
    var k = anonKey();
    return {
      "Content-Type": "application/json",
      apikey: k,
      Authorization: "Bearer " + k,
      Accept: "application/json"
    };
  }

  function pullCourseSnapshot(courseId) {
    if (!isReadConfigured()) return Promise.resolve(null);
    var id = encodeURIComponent(String(courseId || "cpe"));
    var url = baseUrl() + "/rest/v1/prep_course_snapshots?course_id=eq." + id + "&select=data,updated_at";
    return fetch(url, { headers: restHeaders(), cache: "no-store" })
      .then(function (r) {
        if (!r.ok) return null;
        return r.json();
      })
      .then(function (rows) {
        if (!rows || !rows.length || rows[0].data == null) return null;
        return { data: rows[0].data, updated_at: rows[0].updated_at };
      });
  }

  function pullExercise(contextId) {
    if (!isReadConfigured()) return Promise.resolve(null);
    var id = encodeURIComponent(String(contextId || "default"));
    var url = baseUrl() + "/rest/v1/prep_exercise_published?context_id=eq." + id + "&select=data,updated_at";
    return fetch(url, { headers: restHeaders(), cache: "no-store" })
      .then(function (r) {
        if (!r.ok) return null;
        return r.json();
      })
      .then(function (rows) {
        if (!rows || !rows.length || rows[0].data == null) return null;
        return { data: rows[0].data, updated_at: rows[0].updated_at };
      });
  }

  function pushToEdge(body) {
    if (!isWriteConfigured()) return Promise.resolve({ skipped: true });
    var k = anonKey();
    return fetch(fnUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: k,
        Authorization: "Bearer " + writeSecret()
      },
      body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().then(function (j) {
        if (!r.ok || (j && j.ok === false)) {
          throw new Error((j && j.error) || r.statusText || "prep-cloud error");
        }
        return j;
      });
    });
  }

  function pushCourseSnapshot(courseId, data) {
    return pushToEdge({
      op: "upsert_course",
      course_id: String(courseId || "cpe"),
      data: data
    });
  }

  function pushExercise(contextId, data) {
    return pushToEdge({
      op: "upsert_exercise",
      context_id: String(contextId || "default"),
      data: data
    });
  }

  global.PrepCloudClient = {
    isReadConfigured: isReadConfigured,
    isWriteConfigured: isWriteConfigured,
    pullCourseSnapshot: pullCourseSnapshot,
    pullExercise: pullExercise,
    pushCourseSnapshot: pushCourseSnapshot,
    pushExercise: pushExercise
  };
})(typeof window !== "undefined" ? window : this);
