create table chat_sessions (
  id         uuid        primary key default gen_random_uuid(),
  user_id    uuid        not null references auth.users(id) on delete cascade,
  title      text        not null default 'New conversation',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table chat_messages (
  id         uuid        primary key default gen_random_uuid(),
  session_id uuid        not null references chat_sessions(id) on delete cascade,
  role       text        not null check (role in ('user', 'assistant')),
  content    text        not null,
  created_at timestamptz not null default now()
);

alter table chat_sessions enable row level security;
alter table chat_messages  enable row level security;

create policy "users select own sessions" on chat_sessions for select using (auth.uid() = user_id);
create policy "users insert own sessions" on chat_sessions for insert with check (auth.uid() = user_id);
create policy "users update own sessions" on chat_sessions for update using (auth.uid() = user_id);
create policy "users delete own sessions" on chat_sessions for delete using (auth.uid() = user_id);

create policy "users select own messages" on chat_messages for select
  using (exists (select 1 from chat_sessions s where s.id = session_id and s.user_id = auth.uid()));
create policy "users insert own messages" on chat_messages for insert
  with check (exists (select 1 from chat_sessions s where s.id = session_id and s.user_id = auth.uid()));
create policy "users delete own messages" on chat_messages for delete
  using (exists (select 1 from chat_sessions s where s.id = session_id and s.user_id = auth.uid()));

create index chat_sessions_user on chat_sessions (user_id, updated_at desc);
create index chat_messages_session on chat_messages (session_id, created_at asc);
