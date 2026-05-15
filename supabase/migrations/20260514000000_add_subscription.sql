alter table profiles
  add column if not exists stripe_customer_id    text,
  add column if not exists stripe_subscription_id text,
  add column if not exists subscription_status   text not null default 'incomplete',
  add column if not exists trial_ends_at         timestamptz,
  add column if not exists current_period_end    timestamptz;

create index if not exists profiles_stripe_customer on profiles (stripe_customer_id);
create index if not exists profiles_stripe_sub on profiles (stripe_subscription_id);
