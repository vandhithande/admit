-- Schools list per authenticated user
create table public.schools (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  category text not null check (category in ('reach', 'target', 'safety')),
  location text not null default '',
  notes text not null default '',
  created_at timestamptz not null default now()
);

create index schools_user_id_created_at_idx on public.schools (user_id, created_at desc);

alter table public.schools enable row level security;

create policy "schools_select_own"
  on public.schools for select
  to authenticated
  using (auth.uid() = user_id);

create policy "schools_insert_own"
  on public.schools for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "schools_update_own"
  on public.schools for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "schools_delete_own"
  on public.schools for delete
  to authenticated
  using (auth.uid() = user_id);
