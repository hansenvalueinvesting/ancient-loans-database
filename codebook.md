# ALD Codebook

Field definitions for the Ancient Loans Database. The structure is defined in `schema.sql`.

## General rules

- **What counts.** Loan contracts (in money or in kind), and loans of money mentioned in petitions or letters, unless the same loan is already recorded from its contract. Nothing else for now.
- **One row per loan.** A loan is one credit transaction. If a source records several loans, each gets its own row.
- **Stable IDs.** IDs are sequential (`ALD-000001`, `ALD-000002`, ...), assigned automatically in order of entry, never changed and never reused. The number carries no meaning; year, place and source are in their own fields. Gaps in the sequence are normal.
- **Empty means unknown.** Leave a field empty when the source does not say. Never guess.
- **Record what the source says.** Do not convert or interpret values beyond what each field asks for.

## loans

| Field | Definition | Example |
|---|---|---|
| `id` | Assigned automatically | `ALD-000001` |
| `year` | Year of the loan, written `AD n` or `n BC` (AD before the number, BC after). There is no year 0: 1 BC is followed by AD 1. If the source gives a range, use the earliest year | `AD 57`, `100 BC` |
| `place` | Where the loan was made | `Oxyrhynchus` |
| `amount` | Amount lent, as a number | `100` |
| `currency` | Currency or unit of `amount`, singular. For loans in kind, add the commodity in brackets | `drachma`, `artaba (wheat)` |
| `borrower` | Name(s) of the borrower(s); separate several with `;` | `Tryphon` |
| `lender` | Name(s) of the lender(s); separate several with `;` | `Thaisous` |
| `interest` | Interest as stated in the source | `1% per month`, `interest-free` |
| `duration` | Term of the loan as stated | `6 months`, `until the harvest` |
| `source` | Citation of the primary source, in standard form (papyri: *Checklist of Editions of Greek, Latin, Demotic and Coptic Papyri, Ostraca and Tablets*). Required | `P.Oxy. 3 506` |
| `source_url` | Link to the source online, if available | `https://papyri.info/...` |
| `notes` | Any additional comments. Shown only on the loan's own page, not in the main table | |
| `year_sort` | Filled automatically from `year`, for sorting (`100 BC` = `-100`, `AD 57` = `57`). Never entered by hand | `-100` |
