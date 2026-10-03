# ALD Codebook

Field definitions and coding rules for the Ancient Loans Database. The structure is defined in `schema.sql`.

## General rules

- **A loan is not a document.** A document is a physical source; a loan is one credit transaction. One document may record several loans; each gets its own `loans` row.
- **Stable IDs.** IDs are assigned once, in sequence, and never changed or reused. Formats:
  `ALD-00001` (loan), `DOC-00001` (document), `ED-00001` (edition), `PTY-00001` (party).
- **Verified data only.** Enter only what the source and its edition support.
- **Empty means unknown.** Leave a field empty (null) when the source does not say. Never guess.
- **As stated + standardized.** Where a value needs interpretation, record the source wording in a `*_text` field and the standardized value in its numeric field.
- **Years** are integers in historical numbering, with no year 0: AD 57 = `57`, 1 BC = `-1`, 100 BC = `-100`. For a range, use `*_start_year` and `*_end_year`; for a single year, set only `*_start_year`.
- **Uncertainty.** Every `*_certainty` field takes one of the values below (based on Leiden conventions):

| Value | Meaning |
|---|---|
| `certain` | Clearly legible in the source |
| `damaged` | Partly legible; reading doubtful (Leiden: dotted letters) |
| `restored` | Lost text supplied by the editor (Leiden: [square brackets]) |
| `inferred` | Not stated; deduced from context |

## documents

| Field | Definition |
|---|---|
| `id` | `DOC-00001` |
| `title` | Standard designation. Papyri, ostraca and tablets follow the *Checklist of Editions of Greek, Latin, Demotic and Coptic Papyri, Ostraca and Tablets*, e.g. `P.Oxy. 2 269` |
| `material` | Writing material: `papyrus`, `ostracon` (potsherd or limestone flake), `clay`, `wax`, `wood`, `parchment`, `leather`, `stone`, `metal`, `other` |
| `language` | Language of the text, e.g. `Greek`, `Demotic`, `Latin`, `Akkadian` |
| `region` | Broad region, e.g. `Egypt`, `Mesopotamia`, `Greece` |
| `place` | Provenance |
| `pleiades_id` | Pleiades place ID for `place` |
| `date_text` | Date of the document as given in the edition |
| `date_start_year`, `date_end_year` | Document date range |
| `tm_id` | Trismegistos text number (TM) |
| `papyri_info_url` | Full papyri.info URL |
| `notes` | Free text |

## editions

| Field | Definition |
|---|---|
| `id` | `ED-00001` |
| `document_id` | The document edited |
| `citation` | Full bibliographic citation |
| `year` | Publication year |
| `url` | Online edition, if any |
| `is_reference` | `true` for the edition whose text the ALD record follows (one per document) |

## parties

| Field | Definition |
|---|---|
| `id` | `PTY-00001`. One row per distinct individual or institution; reuse the ID when the same party recurs |
| `party_type` | `individual` or `institution` (e.g. a temple, a bank) |
| `name` | Standardized Latin-script transliteration |
| `name_original` | Name in the source script |
| `gender` | Individuals only: `male`, `female`, `unknown` |
| `occupation` | As stated |
| `origin` | Stated origin, ethnic designation, or residence |
| `tm_per_id` | Trismegistos People ID (TM Per) |
| `notes` | Free text, e.g. patronymic |

## loans

| Field | Definition |
|---|---|
| `id` | `ALD-00001` |
| `document_id` | Source document |
| `loan_type` | `money`, `in kind` (grain, oil, wine, ...), `mixed`, `unknown` |
| `date_text` | Date of the loan as stated |
| `date_start_year`, `date_end_year` | Loan date range |
| `calendar` | Calendar of `date_text`, e.g. `Egyptian`, `Alexandrian`, `Macedonian`, `Julian`, `Babylonian` |
| `date_certainty` | Uncertainty of the date |
| `place` | Where the loan was made |
| `pleiades_id` | Pleiades place ID for `place` |
| `principal_amount` | Numeric amount, in `principal_unit` |
| `principal_unit` | Unit, singular, e.g. `drachma`, `talent`, `artaba`, `shekel` |
| `principal_commodity` | Goods lent in kind, e.g. `wheat`, `barley`; empty for money |
| `currency` | Monetary standard where stated, e.g. `silver`, `bronze` |
| `principal_certainty` | Uncertainty of the principal |
| `interest_text` | Interest as stated, e.g. `1 drachma per mina per month` |
| `interest_rate_annual` | Simple rate, percent per year (1 drachma per mina per month = `12`, since 1 mina = 100 drachmas). Empty when the interest is not convertible, e.g. a flat charge for the whole term |
| `interest_certainty` | Uncertainty of the interest |
| `term_text` | Repayment term or due date as stated |
| `term_months` | Term in months, where calculable |
| `security` | Collateral, pledge, or guarantee |
| `penalty` | Default clause, e.g. `hemiolion` (repayment of 1.5 times the principal) |
| `notes` | Free text |

## loan_parties

| Field | Definition |
|---|---|
| `loan_id` | The loan |
| `party_id` | The party |
| `role` | `lender`, `borrower`, `guarantor`, `witness`, `scribe`, `agent`, `other` |
| `certainty` | Uncertainty of this party's identification or role |
