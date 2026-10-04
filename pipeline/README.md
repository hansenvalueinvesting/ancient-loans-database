# ALD data pipeline

How loans get from the papyri into the database. Code and instructions only; no data is kept in
the repository (working files live in a scratch folder and are rebuilt).

## Source
papyri.info's open data, github.com/papyri/idp.data (CC BY 3.0): DDbDP Greek texts
(`DDbDP/<TM//1000>/<TM>.xml`), HGV metadata (`HGV_meta_EpiDoc/HGV<n>/<id>.xml`), translations.
Clone it sparsely into the working folder as `idp.data` (papyri.info itself has a bot check).

## Steps
1. Candidates: `cands.py` selects HGV records (period, keywords) -> `cands.json`. For a full-text
   search, select by Greek loan vocabulary in the DDbDP texts instead. Drop every document
   already listed in `../reviewed.md`.
2. Extraction: agents follow `EXTRACT.md` on batches of ~25 candidates (metadata + Greek rendered
   by `render.py`) and return include/exclude decisions with loan rows.
3. Completeness: `MISSING.md`, a second pass for loans the first pass missed (goods lent with
   money, earlier loans named as loans).
4. Original text + translation: `tbuild.py` builds translation batches; agents follow
   `TRANSLATE.md`; `tcheck.py` verifies every Greek line against the source and builds the notes.
5. Audit: `AUDIT.md`, every field checked against the Greek before insertion.
6. Insert via the Supabase connector (plain SQL INSERT), then verify notes byte-for-byte (md5).
7. Add every reviewed document to `../reviewed.md` (included with ALD IDs, or excluded with
   reason) and update its Coverage table.

Formats and rules: `../codebook.md` (fields) and `EXTRACT.md` (inclusion and field formats).
