-- Per-school application tracking: status, deadline, decision, portal link
-- This is the core value prop — turns a school list into an application tracker

alter table public.schools
  add column if not exists deadline        date,
  add column if not exists app_status      text not null default 'not_started'
    check (app_status in ('not_started', 'in_progress', 'submitted', 'decision_received')),
  add column if not exists decision        text
    check (decision in ('accepted', 'rejected', 'waitlisted', 'deferred') or decision is null),
  add column if not exists portal_url      text not null default '',
  add column if not exists app_type        text not null default 'rd'
    check (app_type in ('ea', 'ed', 'rea', 'scea', 'rd'));

-- Index for sorting by deadline
create index if not exists schools_user_deadline_idx on public.schools (user_id, deadline asc nulls last);
