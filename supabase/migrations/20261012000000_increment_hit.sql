-- Atomically increments (or creates) a hit counter row.
create or replace function public.increment_hit(hit_slug text)
returns setof public.hits
language sql
set search_path = ''
as $$
  insert into public.hits (id, count, date)
  values (hit_slug, 1, now())
  on conflict (id) do update
    set count = public.hits.count + 1,
        date = now()
  returning *;
$$;

-- Only the server (service_role) may call this; otherwise anyone with the anon key
-- could bypass the slug validation in /api/hits via supabase.rpc().
revoke execute on function public.increment_hit(text) from public, anon, authenticated;
grant execute on function public.increment_hit(text) to service_role;
