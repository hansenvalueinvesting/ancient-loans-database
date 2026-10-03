# The Ancient Loans Database (ALD)

A systematic, standardized record of every documented loan in the ancient world, built so scholars can search, compare, and analyze ancient credit. It begins with loan contracts from Roman Egypt (papyri), and its schema extends to every region (Mesopotamia, Greece, Rome, ...).

Created and maintained by Hansen Zheng.

## How it works

| Part | Role |
|---|---|
| **Supabase (Postgres)** | Holds all data. The only data store. |
| **`docs/`** | Public website (GitHub Pages). Reads the database through its read-only public API. |
| **GitHub Releases** | Versioned CSV exports of the database (v0.1, v0.2, ...). |

This repository contains no data, only the website, the schema, and the documentation.

| File | Contents |
|---|---|
| `schema.sql` | Database structure |
| `codebook.md` | Field definitions and coding rules |
| `docs/` | Website |
| `.github/workflows/release.yml` | Builds a data release when a version tag is pushed |

## One-time setup

1. **Create the database.** Create a Supabase project. Open *SQL Editor*, paste in `schema.sql`, and run it.
2. **Connect the website.** In Supabase, open *Project Settings → API* and copy the Project URL and the publishable (anon) key into `docs/config.js`. Both are public by design: visitors can only read.
3. **Publish the website.** In GitHub, open *Settings → Pages* and set the source to *Deploy from a branch*, branch `main`, folder `/docs`.
4. **Enable releases.** In Supabase, click *Connect* and copy the *Session pooler* connection string, with your database password filled in. In GitHub, open *Settings → Secrets and variables → Actions* and add it as the secret `SUPABASE_DB_URL`.

## Releasing a data version

Push a tag, e.g. `git tag v0.1 && git push origin v0.1`. A GitHub Action exports every table as CSV and publishes `ald-v0.1.zip` (CSVs + schema + codebook) as a Release.

## Citation & license

Data: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code: MIT. See `LICENSE`.
