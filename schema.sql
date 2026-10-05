-- =====================================================================
-- The Ancient Loans Database (ALD) — schema v0.3
-- Created and maintained by Hansen Zheng
-- Plain PostgreSQL. Field definitions: codebook.md.
-- =====================================================================

create sequence loan_seq;

create table loans (
  id          text primary key default 'ALD-' || lpad(nextval('loan_seq')::text, 6, '0')
              constraint loans_id_format check (id ~ '^ALD-[0-9]{6}$'),  -- sequential: ALD-000001, ...
  year        text constraint loans_year_format
              check (year ~ '^(AD [1-9][0-9]*(-[1-9][0-9]*)?|[1-9][0-9]*(-[1-9][0-9]*)? BC|[1-9][0-9]* BC-AD [1-9][0-9]*)$'),
                                             -- e.g. 'AD 57', '100 BC', 'AD 101-200', '30 BC-AD 14'
  place       text,                          -- where the loan was made
  amount      text constraint loans_amount_format   -- as written: '100', '12 1/6', '2/3', several units '2 talents 4800 drachmas', more lost '1 [...]'
              check (amount ~ '^(([1-9][0-9]*|[1-9][0-9]* [1-9][0-9]*/[1-9][0-9]*|[1-9][0-9]*/[1-9][0-9]*)|([1-9][0-9]*|[1-9][0-9]* [1-9][0-9]*/[1-9][0-9]*|[1-9][0-9]*/[1-9][0-9]*) [a-z]+( ([1-9][0-9]*|[1-9][0-9]* [1-9][0-9]*/[1-9][0-9]*|[1-9][0-9]*/[1-9][0-9]*) [a-z]+)+)( \[\.\.\.\])?$'),
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
                     when year ~ '^[0-9]' then -substring(year from '^([0-9]+)')::int end) stored
);

-- Catalogue counts for the site's catalogue tree (century, region, place, currency).
-- century: 1 = AD 1-100, -1 = 100-1 BC; region: the part of place after the last comma.
create view loan_catalogue with (security_invoker = true) as
select case when year_sort > 0 then (year_sort + 99) / 100
            when year_sort < 0 then -((-year_sort + 99) / 100) end as century,
       coalesce(substring(place from ', ([^,]+)$'), place) as region,
       place,
       currency,
       count(*) as loans
from loans
group by 1, 2, 3, 4;

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
