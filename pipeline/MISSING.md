# ALD: find loan transactions not yet recorded

Goal (Hansen): record every single loan transaction, missing nothing and repeating nothing.

For each document in your batch you get the rows ALREADY RECORDED from it (with their notes,
which describe the document) and the path of its Greek text (read it). Find every DISTINCT loan
transaction documented in that document that has NO row yet. Add a row for each:
1. Commodity parts: if one contract lends money AND grain/seed/another commodity (or two
   commodities), each part gets its own row (e.g. the 15 artabas of wheat lent with 200 drachmas).
   Only for parts that are themselves lent (a loan), NOT the price of goods sold on credit
   ("the price of 2 artabas" = sale on credit, skip) and NOT interest or penalties.
2. Other loans mentioned: earlier or other loans between the same or other parties that the
   text explicitly presents as loans (δάνειον, χρῆσις, ἐδάνεισεν, δεδάνεισμαι, a loan
   synchoresis/cheirographon "of loan"), including earlier loans the document annuls or replaces.
   Add them even if the amount is lost (amount null). Do NOT add debts the text does not call a
   loan (e.g. "other sums owed under other securities", rents, prices), and do not add a loan
   that already has a row (same parties + same amount/date), from this or another document listed
   with the same source.
3. Do not touch or repeat existing rows.

Fields for each new row (same formats as existing rows): year ("AD n" / "n BC" ONLY if the
year of THAT loan is certain from the text, else null), place (as the document's row unless the
text says otherwise), amount (number or null), currency ("drachma", "artaba (wheat)", etc.),
borrower, lender ("X son of Y"), interest (formula + %, or null), duration (as stated or null),
source (same as the document's source).

## Output
JSON file (path in your task): list of {"hgv": "<id>", "new_rows": [ {year, place, amount,
currency, borrower, lender, interest, duration, source, reason} ]} — include ONLY documents with
new rows; "reason" = one short sentence on what the text says (for the reviewer, not published).
Then reply with counts and anything doubtful.
