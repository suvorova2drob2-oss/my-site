-- Prep Cloud: один источник правды для курса и для опубликованных Part 1.
-- Выполни в Supabase → SQL Editor один раз.

create table if not exists prep_course_snapshots (
  course_id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists prep_exercise_published (
  context_id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table prep_course_snapshots enable row level security;
alter table prep_exercise_published enable row level security;

drop policy if exists prep_course_read on prep_course_snapshots;
create policy prep_course_read on prep_course_snapshots for select using (true);

drop policy if exists prep_exercise_read on prep_exercise_published;
create policy prep_exercise_read on prep_exercise_published for select using (true);

-- Запись только через Edge Function (service role), не через anon.
