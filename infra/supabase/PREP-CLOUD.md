# Prep Cloud (Supabase) — один сценарий: нажали «Сохранить» → данные в облаке → все по ссылке видят то же

## 1. SQL

В проекте: `infra/supabase/prep-cloud-schema.sql` — выполни **целиком** в Supabase → **SQL Editor** → Run.

## 2. Секрет записи

Сгенерируй длинную случайную строку (например 40+ символов). Её нужно в двух местах:

- **Supabase Dashboard** → **Edge Functions** → **Secrets** (или Project Settings → Edge Functions): имя `PREP_CLOUD_WRITE_SECRET`, значение — та же строка.
- Локально в **`live-supabase-local.js`** (копия с `live-supabase-local.example.js`):  
  `window.__PREP_CLOUD_WRITE_SECRET__ = "…та же строка…";`  
  Этот файл **не коммить** (уже в `.gitignore`).

## 3. Задеплой функцию `prep-cloud`

В корне репозитория (где папка `supabase/`):

```bash
npx supabase login
npx supabase link --project-ref ТВОЙ_REF
npx supabase functions deploy prep-cloud
```

В репозитории уже есть `supabase/config.toml` с `verify_jwt = false` для этой функции. Если в Dashboard всё ещё требуется JWT — отключи **Enforce JWT** для **prep-cloud**.

После деплоя URL вызова:  
`https://<PROJECT_REF>.supabase.co/functions/v1/prep-cloud`

## 4. URL и anon key

В том же `live-supabase-local.js` уже должны быть:

- `window.__LIVE_SUPABASE_URL__`
- `window.__LIVE_SUPABASE_KEY__` (только **anon** / publishable, не `service_role`)

## 5. Страницы

На **index.html**, **course-cms**, **part1-mc-cloze** подключены `live-supabase-local.js` и `js/prep-cloud-client.js`. На проде положи тот же локальный файл на хост **или** подставь значения через свой безопасный механизм (anon key публичный по задумке Supabase; **секрет записи** — только у тех, кто редактирует).

## Поведение

- **Save course** / любой `PrepSiteContent.save` → upsert строки `prep_course_snapshots` для текущего `course_id`.
- **Сохранить** в Part 1 → upsert `prep_exercise_published` для `contextId`.
- При открытии сайта / CMS / Part 1 сначала читается облако (если заданы URL+anon), затем локальный кеш и файлы.

Без настроенного облака всё работает по-прежнему (localStorage + `published.json`).
