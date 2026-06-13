create extension if not exists pgcrypto;

create table if not exists public.owner_submissions (
  id uuid primary key default gen_random_uuid(),
  restaurant_name text not null,
  contact_email text not null,
  address text not null,
  change_notes text not null,
  newsletter_opt_in boolean not null default false,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'jupeater-web',
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.restaurant_reviews (
  id uuid primary key default gen_random_uuid(),
  restaurant_slug text not null,
  reviewer_name text not null,
  reviewer_email text not null,
  rating int not null check (rating between 1 and 5),
  comment text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.owner_submissions enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.restaurant_reviews enable row level security;

drop policy if exists "Anyone can create owner submissions" on public.owner_submissions;
create policy "Anyone can create owner submissions"
on public.owner_submissions
for insert
to anon, authenticated
with check (true);

drop policy if exists "Anyone can upsert newsletter subscribers" on public.newsletter_subscribers;
create policy "Anyone can upsert newsletter subscribers"
on public.newsletter_subscribers
for insert
to anon, authenticated
with check (true);

drop policy if exists "Anyone can submit reviews" on public.restaurant_reviews;
create policy "Anyone can submit reviews"
on public.restaurant_reviews
for insert
to anon, authenticated
with check (true);

drop policy if exists "Anyone can read approved reviews" on public.restaurant_reviews;
create policy "Anyone can read approved reviews"
on public.restaurant_reviews
for select
to anon, authenticated
using (status = 'approved');