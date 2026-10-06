-- =====================================================================
-- The Ancient Loans Database (ALD) — schema v0.3
-- Created and maintained by Hansen Zheng
-- Plain PostgreSQL. Field definitions: codebook.md (this folder).
-- =====================================================================

create sequence loan_seq;

create or replace function loan_period(year text, place text) returns text
language plpgsql immutable as $$
declare
  region text := coalesce(substring(place from ', ([^,]+)$'), place);
  lo int; hi int;
begin
  if year is null or region is null then return null; end if;
  if year ~ '^AD ' then
    lo := substring(year from '^AD ([0-9]+)')::int;
    hi := coalesce(substring(year from '^AD [0-9]+-([0-9]+)$')::int, lo);
  elsif year ~ ' BC-AD ' then
    lo := -substring(year from '^([0-9]+)')::int;
    hi := substring(year from 'AD ([0-9]+)$')::int;
  else
    lo := -substring(year from '^([0-9]+)')::int;
    hi := -coalesce(substring(year from '^[0-9]+-([0-9]+) BC$')::int, -lo);
  end if;
  if region = 'Egypt' then
    if hi <= 284 and lo > -30 or (lo = -30 and hi > -30) then return 'Roman Egypt';
    elsif hi < -30 and lo >= -332 then return 'Ptolemaic Egypt';
    elsif lo >= -332 and hi <= 284 then return 'Ptolemaic or Roman Egypt';
    elsif lo > 284 then return 'Late Roman Egypt';
    elsif lo > -30 and lo <= 284 and hi > 284 then return 'Roman or Late Roman Egypt';
    end if;
    return null;
  elsif region = 'Arabia' then
    if lo >= 106 then return 'Roman Arabia';
    elsif hi < 106 then return 'Nabataean Arabia';
    else return 'Nabataean or Roman Arabia'; end if;
  elsif region = 'Parthian Empire' then return 'Parthian Empire';
  elsif region = 'India' then return 'India';
  elsif region in ('Italy','Judaea','Syria Coele','Achaea','Germania Superior') then return 'Roman ' || region;
  end if;
  return null;
end $$;

create table loans (
  id          text primary key default 'ALD-' || lpad(nextval('loan_seq')::text, 6, '0')
              constraint loans_id_format check (id ~ '^ALD-[0-9]{6}$'),  -- sequential: ALD-000001, ...
  year        text constraint loans_year_format
              check (year ~ '^(AD [1-9][0-9]*(-[1-9][0-9]*)?|[1-9][0-9]*(-[1-9][0-9]*)? BC|[1-9][0-9]* BC-AD [1-9][0-9]*)$'),
                                             -- e.g. 'AD 57', '100 BC', 'AD 101-200', '30 BC-AD 14'
  place       text,                          -- where the loan was made
  amount      text constraint loans_amount_format   -- as written: '100', '12 1/6', several units '2 talents 4800 drachmas', lost parts '[...] 45'
              check (amount ~ '^(([1-9][0-9]*|[1-9][0-9]* [1-9][0-9]*/[1-9][0-9]*|[1-9][0-9]*/[1-9][0-9]*)|\[\.\.\.\])( (([1-9][0-9]*|[1-9][0-9]* [1-9][0-9]*/[1-9][0-9]*|[1-9][0-9]*/[1-9][0-9]*)|\[\.\.\.\]|[a-z]+))*$' and amount ~ '[0-9]'),
  currency    text,                          -- currency or unit, e.g. 'drachma', 'artaba (wheat)'
  borrower    text,
  lender      text,
  interest    text,                          -- as stated, e.g. '1% per month'
  duration    text,                          -- e.g. '6 months'
  source      text not null,                 -- citation to the primary source, e.g. 'P.Oxy. 3 506'
  source_url  text,                          -- link to the source, if available
  notes       text,                          -- additional comments; shown on the loan's own page only
  year_sort   int generated always as (      -- automatic, for sorting: '100 BC' = -100, 'AD 57' = 57 (range: first year)
                case when year ~ '^AD ' then substring(year from '^AD ([0-9]+)')::int
                     when year ~ '^[0-9]' then -substring(year from '^([0-9]+)')::int end) stored,
  period      text generated always as (loan_period(year, place)) stored  -- automatic: historical period (who ruled the place at the time)
);

-- Catalogue counts for the site's catalogue tree (period, century, region, place, currency).
-- century: 1 = AD 1-100, -1 = 100-1 BC; region: the part of place after the last comma.
create view loan_catalogue with (security_invoker = true) as
select case when year_sort > 0 then (year_sort + 99) / 100
            when year_sort < 0 then -((-year_sort + 99) / 100) end as century,
       coalesce(substring(place from ', ([^,]+)$'), place) as region,
       place,
       currency,
       count(*) as loans,
       period,
       min(year_sort) as first_year
from loans
group by 1, 2, 3, 4, 6;

-- Public access: read-only.
alter table loans enable row level security;
create policy "public read" on loans for select using (true);
do $$
begin
  if exists (select 1 from pg_roles where rolname = 'anon') then
    revoke all on loans from anon, authenticated;
    grant select on loans, loan_catalogue to anon, authenticated;
  end if;
end $$;
