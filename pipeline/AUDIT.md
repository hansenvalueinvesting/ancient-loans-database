# ALD audit: make every row match the Greek

Hansen: "if it doesn't match the greek, correct it." For each document in your batch you get its
recorded ROWS (key: field values), the GREEK text (DDbDP edition, Leiden notation) and a draft
ENGLISH translation (an aid; the Greek decides). Check every field of every row against the Greek:
- borrower / lender: names as the Greek gives them, Latinized English (Dioscorus, Sarapion,
  Aurelius Theon), "X son of Y" / "X daughter of Y", "alias" for ὁ καί; several people separated
  by "; ". Wrong person, wrong father, wrong spelling of the name (e.g. Cheos vs Teos), wrong role
  (lender/borrower swapped) = correct it. A name restored by the editor in [ ] counts as given.
  Lost = null. Don't change a correct name just for style.
- amount: the number lent in the Greek (principal, not interest/penalty). Fractions: give the exact
  value as written, as a fraction string, e.g. "12 1/6", "1 1/2 1/5" written as its sum "1 7/10",
  "2/3". Use the form "<whole> <num>/<den>" (lowest terms) or "<num>/<den>".
  ALWAYS report "amount_exact" for every row whose amount is not a whole number (or should not be),
  even if otherwise correct. Whole numbers: number. Lost = null.
- currency: unit lent ("drachma", "artaba (wheat)", "denarius", "talent", "metron (wine)"...).
- interest: as stated, formula + % ("1 drachma per mina per month (1% per month)",
  "interest-bearing (rate not stated)", "one-half (50%)"); null if the Greek states none.
- duration: the term as stated ("until Payni, year 21 of Antoninus"); null if none survives.
- place: where the loan was made per the Greek (village (nome), Egypt / city, Egypt); keep format.
Do NOT change year, source or notes. Only correct real mismatches with the Greek; when the Greek is
too damaged to decide, leave the field as is.

## Output
JSON list (path in your task) of {"key": "<row key>", "hgv": "<id>", "field": "<field>",
"old": <old value>, "new": <new value>, "reason": "<short: what the Greek says, line ref>"}.
Fields: borrower, lender, amount, amount_exact, currency, interest, duration, place.
Include only changes (and every amount_exact). Valid JSON. Then reply with counts and doubtful cases.
