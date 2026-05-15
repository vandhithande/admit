create table profiles (
  id             uuid        primary key default gen_random_uuid(),
  user_id        uuid        not null unique references auth.users(id) on delete cascade,
  grade          int,
  intended_major text        not null default '',
  interests      text        not null default '',
  gpa            text        not null default '',
  state          text        not null default '',
  updated_at     timestamptz not null default now()
);

alter table profiles enable row level security;

create policy "users select own" on profiles for select using (auth.uid() = user_id);
create policy "users insert own" on profiles for insert with check (auth.uid() = user_id);
create policy "users update own" on profiles for update using (auth.uid() = user_id);
