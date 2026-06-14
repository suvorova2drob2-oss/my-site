/**
 * Глушит облако, пока не подгрузится live-supabase-local.js с URL и публичным ключом.
 * Имя ученика и очки по-прежнему только в браузере — в облако сами по себе не пишутся.
 *
 * Порядок в index.html: этот файл → live-supabase-local.js (опционально, в .gitignore; имя файла — историческое).
 * Если второго файла нет на сервере (404), Live и Prep Cloud просто выключены.
 */
(function (w) {
    if (!w) return;
    w.__LIVE_SUPABASE_URL__ = "";
    w.__LIVE_SUPABASE_KEY__ = "";
    w.__PREP_CLOUD_WRITE_SECRET__ = "";
})(typeof window !== "undefined" ? window : null);
