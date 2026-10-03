-- =====================================================================
-- The Ancient Loans Database (ALD) — schema v0.1
-- Created and maintained by Hansen Zheng
-- Postgres (Supabase). Plain SQL only; no Supabase-specific features.
-- Dates: years as integers (negative = BCE); month/day in Julian calendar.
-- Rates: percent per period (e.g., 1 per month = 1.0).
-- =====================================================================

-- ---------- Controlled vocabularies ----------
create type certainty           as enum ('certain','restored','inferred','unknown');
create type verification_status as enum ('unverified','verified','peer_reviewed');
create type interest_type       as enum ('stated','included_in_principal','interest_free','antichretic','unknown');
create type interest_period     as enum ('month','year','term','unknown');
create type penalty_type        as enum ('hemiolia','double','fixed_fine','other','none','unknown');
create type purpose_category    as enum ('agricultural','tax','commercial','consumption','other','unknown');
create type document_type       as enum ('contract','repayment_receipt','cancellation','petition','account','letter','other');
create type material_type       as enum ('papyrus','ostracon','wax_tablet','wooden_tablet','clay_tablet','stone','parchment','other');
create type preservation        as enum ('complete','partial','fragmentary');
create type loan_document_role  as enum ('founding_contract','repayment','cancellation','reference');
create type party_role          as enum ('lender','borrower','guarantor','guardian','bank','agent');
create type gender_type         as enum ('male','female','unknown');
create type relationship_type   as enum ('parent_of','sibling_of','spouse_of','patron_of','other_kin','other');
create type security_type       as enum ('land','house','movables','enslaved_person','general_hypothec','none','unknown');
create type event_type          as enum ('repayment','partial_repayment','extension','default','transfer','cancellation','enforcement');
create type reference_type      as enum ('principal_edition','reedition','correction','secondary');
create type unit_category       as enum ('currency','measure');

-- ---------- ID sequences ----------
create sequence loan_seq;  create sequence document_seq; create sequence party_seq;
create sequence place_seq; create sequence unit_seq;

-- ---------- Lookups ----------
create table places (
  id            text primary key default 'ALD-PL-' || lpad(nextval('place_seq')::text, 6, '0'),
  name          text not null,
  pleiades_id   text,
  tm_geo_id     text,
  region        text,
  district      text,              -- e.g., nome or province
  lat           numeric(9,6),
  lon           numeric(9,6)
);

create table units (
  id            text primary key default 'ALD-U-' || lpad(nextval('unit_seq')::text, 6, '0'),
  name          text not null,     -- e.g., drachma, artaba, denarius, shekel
  category      unit_category not null,
  commodity     text,              -- e.g., silver, copper, wheat
  standard      text,              -- e.g., silver standard vs copper standard
  region        text,
  notes         text
);

create table unit_conversions (
  id               bigint generated always as identity primary key,
  unit_id          text not null references units(id),
  equivalent_value numeric not null,
  equivalent_unit  text not null,  -- e.g., g_silver
  year_from        int,
  year_to          int,
  source           text not null   -- scholarly source for the conversion
);

-- ---------- Documents ----------
create table documents (
  id                  text primary key default 'ALD-D-' || lpad(nextval('document_seq')::text, 6, '0'),
  tm_id               text unique,   -- Trismegistos
  ddb_id              text,          -- papyri.info
  document_type       document_type not null,
  legal_form          text,          -- defined in codebook (e.g., cheirographon, synchoresis)
  language            text,          -- ISO 639-3 (grc, lat, egy, akk)
  material            material_type,
  written_place_id    text references places(id),
  found_place_id      text references places(id),
  archive             text,
  registration_office text,
  date_as_written     text,
  year_not_before     int,
  year_not_after      int,
  month               smallint check (month between 1 and 12),
  day                 smallint check (day between 1 and 31),
  date_certainty      certainty default 'unknown',
  preservation        preservation,
  key_clauses_text    text,          -- original-language text of key terms
  notes               text
);

create table document_references (
  id              bigint generated always as identity primary key,
  document_id     text not null references documents(id),
  reference_type  reference_type not null,
  citation        text not null,     -- standard siglum, e.g., P.Oxy. 3 506
  lines           text,
  url             text
);

-- ---------- Loans ----------
create table loans (
  id                      text primary key default 'ALD-L-' || lpad(nextval('loan_seq')::text, 6, '0'),
  interest_type           interest_type not null default 'unknown',
  interest_rate           numeric,
  interest_period         interest_period default 'unknown',
  interest_rate_annual    numeric generated always as (
                            case interest_period
                              when 'month' then interest_rate * 12
                              when 'year'  then interest_rate
                            end) stored,
  rate_certainty          certainty default 'unknown',
  date_as_written         text,
  year_not_before         int,
  year_not_after          int,
  month                   smallint check (month between 1 and 12),
  day                     smallint check (day between 1 and 31),
  date_certainty          certainty default 'unknown',
  term_as_written         text,
  term_days               int,
  installments            boolean,
  penalty_type            penalty_type default 'unknown',
  penalty_description     text,
  purpose_as_written      text,
  purpose_category        purpose_category default 'unknown',
  classification_disputed boolean not null default false,
  verification_status     verification_status not null default 'unverified',
  notes                   text
);

create table loan_principals (
  id                bigint generated always as identity primary key,
  loan_id           text not null references loans(id),
  amount_as_written text,
  amount            numeric,
  unit_id           text references units(id),
  amount_certainty  certainty default 'unknown'
);

create table loan_documents (
  loan_id      text not null references loans(id),
  document_id  text not null references documents(id),
  role         loan_document_role not null,
  primary key (loan_id, document_id, role)
);

create table securities (
  id             bigint generated always as identity primary key,
  loan_id        text not null references loans(id),
  security_type  security_type not null,
  description    text
);

create table loan_events (
  id               bigint generated always as identity primary key,
  loan_id          text not null references loans(id),
  event_type       event_type not null,
  year_not_before  int,
  year_not_after   int,
  month            smallint check (month between 1 and 12),
  day              smallint check (day between 1 and 31),
  amount           numeric,
  unit_id          text references units(id),
  document_id      text references documents(id),
  notes            text
);

-- ---------- Parties ----------
create table parties (
  id               text primary key default 'ALD-P-' || lpad(nextval('party_seq')::text, 6, '0'),
  tm_per_id        text,             -- Trismegistos People
  name_as_written  text not null,
  name_normalized  text,
  patronymic       text,
  gender           gender_type not null default 'unknown',
  is_institution   boolean not null default false,
  origin_place_id  text references places(id),
  notes            text
);

create table loan_parties (
  loan_id       text not null references loans(id),
  party_id      text not null references parties(id),
  role          party_role not null,
  legal_status  text,                -- as described in this document; defined in codebook
  occupation    text,                -- as described in this document
  age_stated    smallint,
  primary key (loan_id, party_id, role)
);

create table party_relationships (
  party_id            text not null references parties(id),
  related_party_id    text not null references parties(id),
  relationship        relationship_type not null,
  source_document_id  text references documents(id),
  primary key (party_id, related_party_id, relationship)
);

-- ---------- Audit trail ----------
create table record_log (
  id          bigint generated always as identity primary key,
  table_name  text not null,
  record_id   text not null,
  action      text not null,         -- insert / update / delete / verify
  changed_by  text not null,
  changed_at  timestamptz not null default now(),
  reason      text
);

-- ---------- Indexes ----------
create index on loan_principals (loan_id);
create index on loan_documents (document_id);
create index on loan_parties (party_id);
create index on loan_events (loan_id);
create index on securities (loan_id);
create index on document_references (document_id);
create index on loans (year_not_before, year_not_after);
create index on documents (year_not_before, year_not_after);

-- ---------- Public read-only access ----------
do $$
declare t text;
begin
  foreach t in array array[
    'places','units','unit_conversions','documents','document_references',
    'loans','loan_principals','loan_documents','securities','loan_events',
    'parties','loan_parties','party_relationships','record_log'
  ] loop
    execute format('alter table %I enable row level security', t);
    execute format('create policy "public read" on %I for select using (true)', t);
  end loop;
end $$;
