create table activities (
  id             uuid        primary key default gen_random_uuid(),
  user_id        uuid        not null references auth.users(id) on delete cascade,
  name           text        not null,
  role           text        not null default '',
  description    text        not null default '',
  category       text        not null default 'other',
  hours_per_week int,
  weeks_per_year int,
  created_at     timestamptz not null default now()
);

alter table activities enable row level security;

create policy "users select own"  on activities for select using (auth.uid() = user_id);
create policy "users insert own"  on activities for insert with check (auth.uid() = user_id);
create policy "users update own"  on activities for update using (auth.uid() = user_id);
create policy "users delete own"  on activities for delete using (auth.uid() = user_id);

create index activities_user_created on activities (user_id, created_at desc);
