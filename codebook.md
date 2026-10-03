# ALD Codebook

Field definitions and coding rules for the Ancient Loans Database. The structure is defined in `schema.sql`.

## General rules

- **A loan is not a document.** A document is a physical source; a loan is one credit transaction. One document may record several loans; each gets its own `loans` row.
- **Stable IDs.** IDs are assigned once, in sequence, and never changed or reused. Formats:
  `ALD-00001` (loan), `DOC-00001` (document), `ED-00001` (edition), `PTY-00001` (party).
- **Verified data only.** Enter only what the source and its edition support.
- **Empty means unknown.** Leave a field empty (null) when the source does not say. Never guess.
- **As stated + standardized.** Where a value needs interpretation, record the source wording in a `*_text` field and the standardized value in its numeric field.
- **Years** are astronomical integers: AD 57 = `57`, 1 BC = `0`, 100 BC = `-99`. For a range, use `*_start_year` and `*_end_year`; for an exact year, set only `*_start_year` (or both equal).
- **Uncertainty.** Every `*_certainty` field takes one of:

| Value | Meaning |
|---|---|
| `certain` | Clearly legible in the source |
| `damaged` | Partly legible; reading doubtful |
| `restored` | Supplied by the editor (in [brackets]) |
| `inferred` | Not stated; deduced from context |

## documents

| Field | Definition |
|---|---|
| `id` | `DOC-00001` |
| `title` | Standard designation, e.g. `P.Oxy. 2 269` (papyri: Checklist abbreviations) |
| `material` | `papyrus`, `ostracon`, `tablet`, `inscription`, `parchment`, `wood`, `other` |
| `language` | Language of the text, e.g. `Greek`, `Demotic`, `Akkadian`, `Latin` |
| `region` | Broad region, e.g. `Egypt`, `Mesopotamia`, `Greece` |
| `place` | Provenance / find spot |
| `pleiades_id` | Pleiades place ID for `place` |
| `date_text` | Date of the document as given by the edition |
| `date_start_year`, `date_end_year` | Document date range (astronomical years) |
| `tm_id` | Trismegistos text number |
| `papyri_info_url` | Full papyri.info URL |
| `notes` | Free text |

## editions

| Field | Definition |
|---|---|
| `id` | `ED-00001` |
| `document_id` | The document edited |
| `citation` | Full citation |
| `year` | Publication year |
| `url` | Online edition, if any |
| `is_principal` | `true` for the edition the ALD record follows |

## parties

| Field | Definition |
|---|---|
| `id` | `PTY-00001`. One row per distinct individual; reuse the ID when the same person recurs |
| `name` | Standardized Latin-script transliteration |
| `name_original` | Name in the source script |
| `gender` | `male`, `female`, `institution`, `unknown` |
| `occupation` | As stated |
| `origin` | Stated origin, ethnic, or residence |
| `tm_per_id` | Trismegistos People ID |
| `notes` | Free text, e.g. patronymic |

## loans

| Field | Definition |
|---|---|
| `id` | `ALD-00001` |
| `document_id` | Source document |
| `loan_type` | `money`, `commodity` (grain, oil, ...), `mixed`, `unknown` |
| `date_text` | Date of the loan as stated |
| `date_start_year`, `date_end_year` | Loan date range (astronomical years) |
| `calendar` | Calendar of `date_text`, e.g. `Egyptian`, `Macedonian`, `Julian`, `Babylonian` |
| `date_certainty` | Uncertainty of the date |
| `place` | Where the loan was made |
| `pleiades_id` | Pleiades place ID for `place` |
| `principal_amount` | Numeric amount, in `principal_unit` |
| `principal_unit` | Unit as a singular noun, e.g. `drachma`, `talent`, `artaba`, `shekel` |
| `principal_commodity` | Commodity lent, e.g. `wheat`, `silver`; empty for coined money |
| `currency` | Monetary standard where relevant, e.g. `Roman silver`, `Ptolemaic bronze` |
| `principal_certainty` | Uncertainty of the principal |
| `interest_text` | Interest as stated, e.g. `1 drachma per mina per month` |
| `interest_rate_annual` | Standardized simple rate, percent per year (e.g. 1 dr./mina/month = `12`) |
| `interest_certainty` | Uncertainty of the interest |
| `term_text` | Repayment term or due date as stated |
| `term_months` | Term in months, where calculable |
| `security` | Collateral, pledge, or guarantee |
| `penalty` | Default clause, e.g. `hemiolion` (repay 1.5×) |
| `notes` | Free text |

## loan_parties

| Field | Definition |
|---|---|
| `loan_id` | The loan |
| `party_id` | The party |
| `role` | `lender`, `borrower`, `guarantor`, `witness`, `scribe`, `agent`, `other` |
| `certainty` | Uncertainty of this party's identification or role |
