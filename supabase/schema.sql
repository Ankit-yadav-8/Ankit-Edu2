-- ============================================================
--  RGPL — Supabase schema + Row Level Security
--  HOW TO RUN: Supabase Dashboard → SQL Editor → New query →
--  paste this whole file → Run.  Safe to run more than once.
-- ============================================================

-- gen_random_uuid() lives in pgcrypto
create extension if not exists pgcrypto;

-- ---------- app_users : website accounts ----------
create table if not exists public.app_users (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null unique,
  company       text not null default '',
  password_hash text not null,               -- bcrypt hash, never the raw password
  role          text not null default 'user' check (role in ('user','admin')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index if not exists app_users_email_idx on public.app_users (lower(email));

-- ---------- contacts : enquiries / smart intake ----------
create table if not exists public.contacts (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  phone        text not null default '',
  subject      text not null default '',
  sector       text not null default '',
  location     text not null default '',
  project_type text not null default '',
  message      text not null,
  status       text not null default 'new' check (status in ('new','reviewed','closed')),
  created_at   timestamptz not null default now()
);
create index if not exists contacts_created_idx on public.contacts (created_at desc);

-- ============================================================
--  ROW LEVEL SECURITY (the "full security" layer)
--
--  The Express backend connects with the SERVICE ROLE key, which
--  BYPASSES RLS. We turn RLS ON and add NO permissive policies for
--  the public "anon" / "authenticated" roles. Result: even if the
--  public/anon key is ever exposed in the browser, it grants ZERO
--  direct access to these tables. Every read/write must go through
--  the trusted server, which enforces auth, validation and rate limits.
-- ============================================================
alter table public.app_users enable row level security;
alter table public.contacts  enable row level security;

-- Defence in depth: strip table privileges from the public API roles too.
revoke all on public.app_users from anon, authenticated;
revoke all on public.contacts  from anon, authenticated;

-- ---------- keep updated_at fresh ----------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists app_users_set_updated_at on public.app_users;
create trigger app_users_set_updated_at
  before update on public.app_users
  for each row execute function public.set_updated_at();

-- ============================================================
--  MAKE YOURSELF AN ADMIN
--  1) Sign up once on the website with your email.
--  2) Then edit + run just the line below (remove the -- ).
--  Admins can view contact enquiries via GET /api/contact.
-- ============================================================
-- update public.app_users set role = 'admin' where email = 'you@example.com';
