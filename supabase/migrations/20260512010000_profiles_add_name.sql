alter table profiles
  add column if not exists name text not null default '';
