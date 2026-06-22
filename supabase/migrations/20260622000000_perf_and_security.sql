-- Add acceptance_rate column to schools if not present
alter table public.schools
  add column if not exists acceptance_rate numeric;

-- Index acceptance_rate for potential future sorting
create index if not exists schools_acceptance_rate_idx
  on public.schools (acceptance_rate);

-- Ensure profiles RLS policy covers service-role upsert (service role bypasses RLS by design)
-- Add delete policy for profiles so users can delete their own account data
create policy "users_delete_own_profile"
  on public.profiles for delete
  to authenticated
  using (auth.uid() = user_id);

-- Soft cap: limit chat_messages fetch performance with an additional composite index
create index if not exists chat_messages_session_created
  on public.chat_messages (session_id, created_at asc);

-- Index for querying schools by user + category (used in counselor context)
create index if not exists schools_user_category_idx
  on public.schools (user_id, category);
