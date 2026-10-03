-- =====================================================================
-- The Ancient Loans Database (ALD) — schema v0.2
-- Created and maintained by Hansen Zheng
-- Plain PostgreSQL. Field definitions: codebook.md.
-- =====================================================================

create sequence loan_seq;

create table loans (
  id          text primary key default 'ALD-' || lpad(nextval('loan_seq')::text, 5, '0'),
  year        text check (year ~ '^(AD [1-9][0-9]*|[1-9][0-9]* BC)$'),  -- e.g. 'AD 57', '100 BC'
  place       text,                          -- where the loan was made
  amount      numeric,
  currency    text,                          -- currency or unit, e.g. 'drachma', 'artaba (wheat)'
  borrower    text,
  lender      text,
  interest    text,                          -- as stated, e.g. '1% per month'
  duration    text,                          -- e.g. '6 months'
  source      text not null,                 -- citation to the primary source, e.g. 'P.Oxy. 3 506'
  source_url  text,                          -- link to the source, if available
  notes       text,                          -- additional comments; shown on the loan's own page only
  year_sort   int generated always as (      -- automatic, for sorting: '100 BC' = -100, 'AD 57' = 57
                case when year ~ '^[1-9][0-9]* BC$' then -split_part(year, ' ', 1)::int
                     when year ~ '^AD [1-9][0-9]*$' then split_part(year, ' ', 2)::int end) stored
);

-- Public access: read-only.
alter table loans enable row level security;
create policy "public read" on loans for select using (true);
do $$
begin
  if exists (select 1 from pg_roles where rolname = 'anon') then
    revoke all on loans from anon, authenticated;
    grant select on loans to anon, authenticated;
  end if;
end $$;
