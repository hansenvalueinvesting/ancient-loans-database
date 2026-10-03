-- The Ancient Loans Database (ALD) — schema
-- Plain PostgreSQL. Run once on an empty database (Supabase: SQL Editor).
-- The data lives only in the database; later schema changes are applied as
-- ALTER statements and recorded here. Field definitions: codebook.md.

-- Uncertainty vocabulary used by every *_certainty column.
--   certain  : clearly legible in the source
--   damaged  : partly legible; reading is doubtful
--   restored : supplied by the editor (in [brackets])
--   inferred : not stated; deduced from context

-- A physical source (papyrus, ostracon, tablet, inscription, ...).
create table documents (
    id               text primary key check (id ~ '^DOC-[0-9]{5}$'),
    title            text not null,                 -- standard designation, e.g. 'P.Oxy. 2 269'
    material         text check (material in ('papyrus','ostracon','tablet','inscription','parchment','wood','other')),
    language         text,                          -- e.g. 'Greek', 'Demotic', 'Akkadian'
    region           text,                          -- e.g. 'Egypt', 'Mesopotamia'
    place            text,                          -- find spot / provenance
    pleiades_id      integer,
    date_text        text,                          -- date as given, e.g. 'AD 57, Pharmouthi 3'
    date_start_year  integer,                       -- astronomical: 1 BC = 0, 2 BC = -1
    date_end_year    integer,
    tm_id            integer,                       -- Trismegistos TM number
    papyri_info_url  text,
    notes            text,
    check (date_end_year is null or date_start_year is null or date_end_year >= date_start_year)
);

-- A published edition of a document.
create table editions (
    id            text primary key check (id ~ '^ED-[0-9]{5}$'),
    document_id   text not null references documents(id),
    citation      text not null,                    -- e.g. 'P.Oxy. II 269 (Grenfell & Hunt 1899)'
    year          integer,
    url           text,
    is_principal  boolean not null default false
);

-- A person or institution appearing in loans.
create table parties (
    id           text primary key check (id ~ '^PTY-[0-9]{5}$'),
    name         text not null,                     -- standardized transliteration
    name_original text,                             -- as written in the source script
    gender       text check (gender in ('male','female','institution','unknown')),
    occupation   text,
    origin       text,
    tm_per_id    integer,                           -- Trismegistos People ID
    notes        text
);

-- A credit transaction. One document may record several loans.
create table loans (
    id                   text primary key check (id ~ '^ALD-[0-9]{5}$'),
    document_id          text not null references documents(id),
    loan_type            text not null check (loan_type in ('money','commodity','mixed','unknown')),
    date_text            text,
    date_start_year      integer,
    date_end_year        integer,
    calendar             text,                      -- e.g. 'Egyptian', 'Macedonian', 'Julian', 'Babylonian'
    date_certainty       text check (date_certainty in ('certain','damaged','restored','inferred')),
    place                text,                      -- where the loan was made
    pleiades_id          integer,
    principal_amount     numeric,
    principal_unit       text,                      -- e.g. 'drachma', 'talent', 'artaba', 'shekel'
    principal_commodity  text,                      -- e.g. 'silver', 'wheat'; null for coined money
    currency             text,                      -- e.g. 'Ptolemaic bronze', 'Roman silver'
    principal_certainty  text check (principal_certainty in ('certain','damaged','restored','inferred')),
    interest_text        text,                      -- as stated, e.g. '1 drachma per mina per month'
    interest_rate_annual numeric,                   -- standardized, percent per year
    interest_certainty   text check (interest_certainty in ('certain','damaged','restored','inferred')),
    term_text            text,
    term_months          numeric,
    security             text,                      -- collateral / pledge / guarantee
    penalty              text,                      -- default clause
    notes                text,
    check (date_end_year is null or date_start_year is null or date_end_year >= date_start_year)
);

-- Who took part in a loan, and in what role.
create table loan_parties (
    loan_id    text not null references loans(id),
    party_id   text not null references parties(id),
    role       text not null check (role in ('lender','borrower','guarantor','witness','scribe','agent','other')),
    certainty  text check (certainty in ('certain','damaged','restored','inferred')),
    primary key (loan_id, party_id, role)
);

create index on editions(document_id);
create index on loans(document_id);
create index on loan_parties(party_id);

-- Public access: read-only for everyone.
do $$
declare t text;
begin
    foreach t in array array['documents','editions','parties','loans','loan_parties'] loop
        execute format('alter table %I enable row level security', t);
        execute format('create policy public_read on %I for select using (true)', t);
        if exists (select 1 from pg_roles where rolname = 'anon') then
            execute format('revoke all on %I from anon, authenticated', t);
            execute format('grant select on %I to anon, authenticated', t);
        end if;
    end loop;
end $$;
