alter table profiles
  add column if not exists sat_score   text not null default '',
  add column if not exists act_score   text not null default '',
  add column if not exists extra_context text not null default '';
