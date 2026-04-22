-- Run in Supabase SQL Editor after live_rooms / live_players + create_live_room / join_live_room exist.
-- Exposes read + score + host controls via SECURITY DEFINER (anon cannot SELECT tables directly under RLS).

create or replace function public.get_live_room_snapshot(p_room_code text)
returns jsonb
language plpgsql
security definer
set search_path = public
stable
as $$
begin
  -- No SELECT ... INTO (Supabase/SQL editor can mis-parse INTO targets as new table names).
  -- Scalar subquery in RETURN: no row -> NULL; one row -> jsonb snapshot.
  return (
    select jsonb_build_object(
      'roomCode', lr.room_code,
      'deckId', lr.deck_id,
      'phase', lr.phase,
      'cardIndex', lr.card_index,
      'players', coalesce((
        select jsonb_agg(
          jsonb_build_object('id', p.id, 'displayName', p.display_name, 'score', p.score)
        )
        from live_players p
        where p.room_code = lr.room_code
      ), '[]'::jsonb)
    )
    from live_rooms lr
    where lr.room_code = upper(trim(p_room_code))
    limit 1
  );
end;
$$;

grant execute on function public.get_live_room_snapshot(text) to anon, authenticated;

create or replace function public.add_live_player_score(p_player_id uuid, p_delta int)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update live_players
  set score = score + coalesce(p_delta, 0)
  where id = p_player_id;
end;
$$;

grant execute on function public.add_live_player_score(uuid, int) to anon, authenticated;

create or replace function public.host_set_live_phase(p_room_code text, p_host_token text, p_phase text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  n int;
begin
  update live_rooms
  set phase = p_phase
  where room_code = upper(trim(p_room_code))
    and host_token = p_host_token;
  get diagnostics n = row_count;
  if n = 0 then
    raise exception 'Room not found or invalid host token';
  end if;
end;
$$;

grant execute on function public.host_set_live_phase(text, text, text) to anon, authenticated;

create or replace function public.host_advance_live_card(p_room_code text, p_host_token text, p_card_index int)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  n int;
begin
  update live_rooms
  set card_index = greatest(0, coalesce(p_card_index, 0))
  where room_code = upper(trim(p_room_code))
    and host_token = p_host_token;
  get diagnostics n = row_count;
  if n = 0 then
    raise exception 'Room not found or invalid host token';
  end if;
end;
$$;

grant execute on function public.host_advance_live_card(text, text, int) to anon, authenticated;
