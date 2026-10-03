# ALD Codebook

Field definitions for the Ancient Loans Database. The structure is defined in `schema.sql`.

## General rules

- **One row per loan.** A loan is one credit transaction. If a source records several loans, each gets its own row.
- **Stable IDs.** IDs (`ALD-00001`, `ALD-00002`, ...) are assigned automatically, never changed and never reused. Gaps in the sequence are normal.
- **Empty means unknown.** Leave a field empty when the source does not say. Never guess.
- **Record what the source says.** Do not convert or interpret values beyond what each field asks for.

## loans

| Field | Definition | Example |
|---|---|---|
| `id` | Assigned automatically | `ALD-00001` |
| `date` | Date of the loan in modern form, as given by the edition | `29 March 57 CE`, `c. 100 BCE` |
| `year` | The year as a number, for sorting and filtering. Negative = BCE; there is no year 0 (1 BCE is followed by 1 CE). For a date range, use the earliest year | `57`, `-100` |
| `place` | Where the loan was made | `Oxyrhynchus` |
| `amount` | Amount lent, as a number | `100` |
| `currency` | Currency or unit of `amount`, singular. For loans in kind, add the commodity in brackets | `drachma`, `artaba (wheat)` |
| `borrower` | Name(s) of the borrower(s); separate several with `;` | `Tryphon` |
| `lender` | Name(s) of the lender(s); separate several with `;` | `Thaisous` |
| `interest` | Interest as stated in the source | `1% per month`, `interest-free` |
| `duration` | Term of the loan as stated | `6 months`, `until the harvest` |
| `source` | Citation of the primary source, in standard form (papyri: *Checklist of Editions of Greek, Latin, Demotic and Coptic Papyri, Ostraca and Tablets*). Required | `P.Oxy. 3 506` |
| `source_url` | Link to the source online, if available | `https://papyri.info/...` |
