# my-site — учебная платформа (CPE / FCE / ЕГЭ)

Один репозиторий для **трёх отдельных сайтов**. Ученик на ЕГЭ не должен видеть CPE/FCE — и наоборот. Это не три папки «наугад», а три **деploy-трека**.

---

## Быстрый старт

```bash
git clone https://github.com/suvorova2drob2-oss/my-site.git
cd my-site
npm install
npm run dev
```

Открой в браузере (Vite подскажет URL, обычно `http://localhost:5173`):

| Трек | С чего начать смотреть |
|------|------------------------|
| **CPE Prep** | `index.html` |
| **FCE (Mastering B2)** | `fce.html` |
| **ЕГЭ** | `ege.html` |

Перед коммитом / деплоем:

```bash
npm run check:all
```

Сборка под выкладку:

```bash
npm run build:cpe   # → publish-cpe/
npm run build:fce   # → publish-fce/
npm run build:ege   # → publish-ege/
```

На Netlify выкладывается **не весь репозиторий**, а содержимое **`publish-*`** после сборки. Подробнее: `docs/track-workflow.md`.

---

## Главное правило для нового разработчика

**Не смешивать треки.**

- Свой «домой»: CPE → `index.html`, FCE → `fce.html`, ЕГЭ → `ege.html`.
- Свои ключи progress/stats (префикс `ege_` на ЕГЭ и т.д.).
- Механику можно **копировать** из другого трека, но страницы, hub и storage — **отдельно**.

Правила для Cursor-агентов: `.cursor/rules/`  
Конституция треков: `docs/track-workflow.md`

---

## ЕГЭ — что уже есть

Точка входа: **`ege.html`**.

### Listening (три **отдельных** движка)

Hub: **`ege-listening.html`**

| Задание | Страница | Данные (новый юнит = новый файл) |
|---------|----------|----------------------------------|
| 1 Matching | `ege-listening-matching.html` | `js/ege-listening/listening-matching-units/uN-….js` |
| 2 TFNS | `ege-listening-tfns.html` | `js/ege-listening/listening-tfns-units/uN-….js` |
| 3 Multiple Choice | `ege-listening-mc.html` | `js/ege-listening/listening-mc-units/uN-….js` |

**Не** сливать три задания в один app. Новый юнит = **только data-файл + `<script>` в HTML**, без форка движка.

Правила:

- индекс трека: `.cursor/rules/ege-listening-three-engines.mdc`
- задание 3 MC: `.cursor/rules/ege-listening-mc.mdc`
- манифест MC: `js/ege-listening/ege-listening-mc-manifest.js`

Золотые юниты (образец данных):

- Matching: `listening-matching-units/u1-physical-activity.js`
- TFNS: `listening-tfns-units/u1-summer-volunteer.js`
- MC: `listening-mc-units/u1-maya-artist.js`

Общие модули (этап «суфлирование + словарь»):

- `js/ege/ege-listening-shadowing-engine.js`
- `js/ege/ege-quick-dictionary-drawer.js`

### Другие разделы ЕГЭ

| Раздел | Страница | Движок / данные |
|--------|----------|-----------------|
| Grammar exam | `ege-grammar-exam.html` | `js/ege-grammar/` |
| Lexis exam | `ege-lexis-exam.html` | `js/ege-lexis/` |
| Word formation | `ege-word-formation-exam.html` | `js/ege-word-formation/` |
| Reading | `ege-reading-*.html` | `js/ege-reading/` |
| Grammar Gym | `ege-grammar-gym-*.html` | страницы + overlay-паттерны в правилах `ege-grammar-gym-*.mdc` |

Статистика ученика: `ege-statistics.html`

---

## CPE — кратко

- Большой hub: **`index.html`** (Levels, Prep, редакторы).
- **Не** раздувать `index.html` новыми фичами — новое в отдельных страницах / `src/` (см. `.cursor/rules/performance-scale-architecture.mdc`).
- Use of English: движки `js/part1-mc-cloze-core.js`, `js/part2-open-cloze-core.js` + JSON.
- Роутинг Levels hub: `docs/ENGINEERING-HANDOFF.md` (на англ., про `index.html`).

---

## FCE — кратко

- Home: **`fce.html`**
- Юниты: `unit1.html` … `unit12.html` (на FCE-deploy «назад» уходит на `fce.html` через stub `index.html`).
- Unit 10 vocabulary: **`unit10-vocabulary/fce/`** (не путать с **`unit10-vocabulary/cpe/`**).

---

## Как добавлять контент (типовой сценарий)

1. Найти **эталонный юнит** того же типа задания (см. таблицы выше).
2. Скопировать data-файл → `uN-название.js`, заполнить контент.
3. Подключить `<script src="…/uN-….js">` на **свою** HTML-страницу **после** bootstrap (`*-data.js`).
4. **Не** форкать app/hunt/CSS, если не меняется UX.
5. `npm run check:all` → локально проверить → commit.

---

## Структура папок (ориентир)

```
my-site/
├── index.html          # CPE home
├── fce.html            # FCE home
├── ege.html            # ЕГЭ home
├── ege-listening*.html # ЕГЭ listening (3 задания)
├── js/
│   ├── ege-listening/  # listening engines + units
│   ├── ege-grammar/    # ЕГЭ grammar exam
│   ├── ege-lexis/      # ЕГЭ lexis exam
│   ├── ege-reading/    # ЕГЭ reading
│   └── ege/            # общие ЕГЭ-модули (shadow, dict, cheer)
├── css/
├── docs/               # track-workflow, чеклисты
├── .cursor/rules/      # правила для агентов / себя
├── scripts/            # build-netlify-track.mjs, check:tracks
└── publish-{cpe,fce,ege}/  # после сборки (не коммитить без нужды)
```

---

## Куда смотреть дальше

| Вопрос | Файл |
|--------|------|
| Треки и deploy | `docs/track-workflow.md` |
| Роутинг CPE hub | `docs/ENGINEERING-HANDOFF.md` |
| Чеклист перед релизом | `docs/CHANGE-CHECKLIST.md` |
| ЕГЭ listening MC | `.cursor/rules/ege-listening-mc.mdc` |
| Разделение CPE/FCE/ЕГЭ | `.cursor/rules/course-tracks-hub-separation.mdc` |

---

## Контакты / вопросы

Репозиторий: `https://github.com/suvorova2drob2-oss/my-site`

Если что-то непонятно — начни с `docs/track-workflow.md` и открой **`ege.html`** или **`index.html`** в `npm run dev`: так быстрее всего понять, «где чей» сайт.
