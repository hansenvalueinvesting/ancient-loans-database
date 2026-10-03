// The Ancient Loans Database — frontend.
// Loads the tables from Supabase's REST API once, then filters in the browser.

const { SUPABASE_URL, SUPABASE_KEY } = window.ALD_CONFIG;
const PAGE = 1000; // Supabase returns at most 1000 rows per request

// Table → sort order (needed for stable paging).
const TABLES = {
  loans: 'id',
  loan_principals: 'id',
  loan_documents: 'loan_id,document_id,role',
  loan_parties: 'loan_id,party_id,role',
  securities: 'id',
  loan_events: 'id',
  documents: 'id',
  document_references: 'id',
  parties: 'id',
  places: 'id',
  units: 'id',
};

const $ = (id) => document.getElementById(id);
const state = { loans: [], sortKey: 'id', sortDir: 1, shown: [] };

// ---------- data ----------

async function fetchTable(table) {
  const rows = [];
  for (let offset = 0; ; offset += PAGE) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=*&order=${TABLES[table]}&limit=${PAGE}&offset=${offset}`, {
      headers: { apikey: SUPABASE_KEY },
    });
    if (!res.ok) throw new Error(`${table}: ${res.status} ${await res.text()}`);
    const page = await res.json();
    rows.push(...page);
    if (page.length < PAGE) return rows;
  }
}

const byId = (rows) => Object.fromEntries(rows.map((r) => [r.id, r]));
function groupBy(rows, key) {
  const out = {};
  rows.forEach((r) => (out[r[key]] ||= []).push(r));
  return out;
}

async function load() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return setStatus('Database not configured: set SUPABASE_URL and SUPABASE_KEY in docs/config.js.');
  }
  try {
    const names = Object.keys(TABLES);
    const fetched = await Promise.all(names.map(fetchTable));
    const t = Object.fromEntries(names.map((n, i) => [n, fetched[i]]));

    const places = byId(t.places), units = byId(t.units), parties = byId(t.parties);
    const refsByDoc = groupBy(t.document_references, 'document_id');
    const documents = Object.fromEntries(t.documents.map((d) => {
      const refs = refsByDoc[d.id] || [];
      const main = refs.find((r) => r.reference_type === 'principal_edition') || refs[0];
      return [d.id, {
        ...d, refs,
        label: main ? main.citation : d.id,
        written: places[d.written_place_id],
        found: places[d.found_place_id],
      }];
    }));

    const principals = groupBy(t.loan_principals, 'loan_id');
    const loanDocs = groupBy(t.loan_documents, 'loan_id');
    const loanParties = groupBy(t.loan_parties, 'loan_id');
    const securities = groupBy(t.securities, 'loan_id');
    const events = groupBy(t.loan_events, 'loan_id');

    state.loans = t.loans.map((l) => {
      const docs = (loanDocs[l.id] || []).map((ld) => ({ ...ld, doc: documents[ld.document_id] }));
      const main = (docs.find((d) => d.role === 'founding_contract') || docs[0])?.doc;
      const prins = (principals[l.id] || []).map((p) => ({ ...p, unit: units[p.unit_id] }));
      const ps = (loanParties[l.id] || []).map((lp) => ({ ...lp, party: parties[lp.party_id] }));
      const names = (role) => ps.filter((p) => p.role === role).map((p) => partyName(p.party)).join('; ');
      const place = main?.written;
      return {
        ...l,
        docs, main, prins, parties: ps,
        securities: securities[l.id] || [],
        events: (events[l.id] || []).map((e) => ({ ...e, unit: units[e.unit_id], doc: documents[e.document_id] })),
        year: l.year_not_before ?? l.year_not_after,
        yearEnd: l.year_not_after ?? l.year_not_before,
        place: place?.name || '',
        region: place?.region || '',
        amount: prins.map((p) => fmtNum(p.amount)).filter(Boolean).join('; '),
        amountSort: prins[0]?.amount ?? null,
        unitNames: prins.map((p) => p.unit?.name).filter(Boolean).join('; '),
        commodity: prins.map((p) => p.unit?.commodity).filter(Boolean).join('; '),
        lender: names('lender'),
        borrower: names('borrower'),
        document: main?.label || '',
      };
    });

    fillSelect('f-region', state.loans.map((l) => l.region));
    fillSelect('f-unit', state.loans.flatMap((l) => l.prins.map((p) => p.unit?.name)));
    fillSelect('f-interest', state.loans.map((l) => l.interest_type), label);
    fillSelect('f-purpose', state.loans.map((l) => l.purpose_category), label);
    fillSelect('f-status', state.loans.map((l) => l.verification_status), label);
    render();
    openFromHash();
  } catch (err) {
    setStatus(`Could not load data. ${err.message}`);
  }
}

// ---------- formatting ----------

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Controlled-vocabulary value → readable text: 'founding_contract' → 'founding contract'.
const label = (v) => (v == null ? '' : String(v).replace(/_/g, ' '));

const fmtNum = (n) => (n == null ? '' : Number(n).toLocaleString());

// Year integer → display: -100 → '100 BCE', 57 → '57 CE'.
const fmtYear = (y) => (y == null ? '' : y < 0 ? `${-y} BCE` : `${y} CE`);

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Date from year range + Julian month/day (month/day shown only for a single year).
function fmtDate(r) {
  const a = r.year_not_before, b = r.year_not_after;
  if (a == null && b == null) return '';
  if (a != null && b != null && a !== b) return `${fmtYear(a)} – ${fmtYear(b)}`;
  const y = fmtYear(a ?? b);
  const md = [r.day, r.month ? MONTHS[r.month - 1] : null].filter((x) => x != null).join(' ');
  return md ? `${md} ${y}` : y;
}

// Uncertainty note; 'certain' is left unmarked.
const cert = (c) => (c && c !== 'certain' ? ` <i>(${esc(c)})</i>` : '');

function fmtInterest(l) {
  if (l.interest_type !== 'stated') return esc(label(l.interest_type));
  if (l.interest_rate == null) return 'stated';
  const per = { month: 'per month', year: 'per year', term: 'for the term' }[l.interest_period] || '';
  return esc(`${fmtNum(l.interest_rate)}% ${per}`.trim());
}

const fmtRate = (r) => (r == null ? '' : `${fmtNum(r)}%`);

const partyName = (p) => (p ? p.name_normalized || p.name_as_written : '');

function setStatus(msg) {
  $('status').textContent = msg;
}

function fillSelect(id, values, text = (v) => v) {
  const sel = $(id);
  [...new Set(values.filter((v) => v != null && v !== ''))].sort().forEach((v) => sel.add(new Option(text(v), v)));
}

// ---------- filtering & table ----------

function filtered() {
  const q = $('f-search').value.trim().toLowerCase();
  const region = $('f-region').value, unit = $('f-unit').value, interest = $('f-interest').value;
  const purpose = $('f-purpose').value, status = $('f-status').value;
  const from = $('f-from').value === '' ? null : Number($('f-from').value);
  const to = $('f-to').value === '' ? null : Number($('f-to').value);

  return state.loans.filter((l) => {
    if (region && l.region !== region) return false;
    if (unit && !l.prins.some((p) => p.unit?.name === unit)) return false;
    if (interest && l.interest_type !== interest) return false;
    if (purpose && l.purpose_category !== purpose) return false;
    if (status && l.verification_status !== status) return false;
    // Keep loans whose date range overlaps the requested range.
    if (from != null && (l.year == null || l.yearEnd < from)) return false;
    if (to != null && (l.year == null || l.year > to)) return false;
    if (q) {
      const hay = [l.id, l.place, l.notes, l.date_as_written, l.purpose_as_written,
        ...l.docs.flatMap((d) => [d.document_id, ...(d.doc?.refs || []).map((r) => r.citation)]),
        ...l.parties.map((p) => `${p.party?.name_as_written} ${p.party?.name_normalized ?? ''}`)].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function sortRows(rows) {
  const { sortKey: k, sortDir: d } = state;
  const numeric = ['year', 'amountSort', 'interest_rate_annual'].includes(k);
  return rows.sort((a, b) => {
    const x = a[k], y = b[k];
    if (x == null || x === '') return 1;
    if (y == null || y === '') return -1;
    return (numeric ? Number(x) - Number(y) : String(x).localeCompare(String(y))) * d;
  });
}

function render() {
  state.shown = sortRows(filtered());
  $('loans').querySelector('tbody').innerHTML = state.shown.map((l) => `
    <tr data-id="${esc(l.id)}">
      <td>${esc(l.id)}</td>
      <td>${esc(fmtDate(l))}${cert(l.date_certainty)}</td>
      <td>${esc(l.place)}</td>
      <td>${esc(l.amount)}</td>
      <td>${esc(l.unitNames)}</td>
      <td>${esc(l.commodity)}</td>
      <td>${fmtInterest(l)}${cert(l.rate_certainty)}</td>
      <td>${fmtRate(l.interest_rate_annual)}</td>
      <td>${esc(l.lender)}</td>
      <td>${esc(l.borrower)}</td>
      <td>${esc(l.document)}</td>
      <td>${esc(label(l.verification_status))}</td>
    </tr>`).join('');

  document.querySelectorAll('th[data-sort]').forEach((th) => {
    th.dataset.label ||= th.textContent;
    th.textContent = th.dataset.label + (th.dataset.sort === state.sortKey ? (state.sortDir === 1 ? ' ▲' : ' ▼') : '');
  });
  setStatus(`${state.shown.length.toLocaleString()} of ${state.loans.length.toLocaleString()} loans`);
}

// ---------- detail view ----------

const link = (url, text) => (url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(text)}</a>` : '');

function rows(pairs) {
  const kept = pairs.filter(([, v]) => v !== '' && v != null);
  return kept.length ? `<dl>${kept.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>` : '';
}

const list = (items, empty) => (items.length ? `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>` : `<p>${empty}</p>`);

function fmtPlace(p) {
  if (!p) return '';
  const extra = [p.district, p.region].filter(Boolean).map(esc).join(', ');
  return [esc(p.name) + (extra ? ` (${extra})` : ''),
    p.pleiades_id && link(`https://pleiades.stoa.org/places/${p.pleiades_id}`, 'Pleiades'),
    p.tm_geo_id && link(`https://www.trismegistos.org/place/${p.tm_geo_id}`, 'TM Geo')].filter(Boolean).join(' · ');
}

function fmtDocument(ld) {
  const d = ld.doc;
  if (!d) return `<p>${esc(ld.document_id)}</p>`;
  return `<p><strong>${esc(d.label)}</strong> (${esc(d.id)}, ${esc(label(ld.role))})</p>
    ${rows([
      ['Type', esc(label(d.document_type))],
      ['Legal form', esc(d.legal_form)],
      ['Language', esc(d.language)],
      ['Material', esc(label(d.material))],
      ['Written at', fmtPlace(d.written)],
      ['Found at', fmtPlace(d.found)],
      ['Archive', esc(d.archive)],
      ['Registration office', esc(d.registration_office)],
      ['Date (as written)', esc(d.date_as_written)],
      ['Date', fmtDate(d) && `${esc(fmtDate(d))}${cert(d.date_certainty)}`],
      ['Preservation', esc(d.preservation)],
      ['Key clauses', esc(d.key_clauses_text)],
      ['Links', [d.tm_id && link(`https://www.trismegistos.org/text/${d.tm_id}`, `TM ${d.tm_id}`),
        d.ddb_id && link(`https://papyri.info/ddbdp/${d.ddb_id}`, 'papyri.info')].filter(Boolean).join(' · ')],
      ['Notes', esc(d.notes)],
    ])}
    ${d.refs.length ? `<p>References:</p>${list(d.refs.map((r) =>
      `${esc(r.citation)}${r.lines ? `, ll. ${esc(r.lines)}` : ''} <i>(${esc(label(r.reference_type))})</i> ${link(r.url, 'link')}`), '')}` : ''}`;
}

function showDetail(id) {
  const l = state.loans.find((x) => x.id === id);
  if (!l) return;

  $('detail-body').innerHTML = `
    <h2 id="detail-title">${esc(l.id)}</h2>
    <p>${esc(l.document)}</p>

    <h3>Loan</h3>
    ${rows([
      ['Date (as written)', esc(l.date_as_written)],
      ['Date', fmtDate(l) && `${esc(fmtDate(l))}${cert(l.date_certainty)}`],
      ['Place', esc(l.place)],
      ['Interest', `${fmtInterest(l)}${cert(l.rate_certainty)}`],
      ['Interest p.a.', fmtRate(l.interest_rate_annual)],
      ['Term (as written)', esc(l.term_as_written)],
      ['Term', l.term_days != null ? `${fmtNum(l.term_days)} days` : ''],
      ['Installments', l.installments == null ? '' : l.installments ? 'yes' : 'no'],
      ['Penalty', [label(l.penalty_type), l.penalty_description].filter(Boolean).map(esc).join(': ')],
      ['Purpose (as written)', esc(l.purpose_as_written)],
      ['Purpose', esc(label(l.purpose_category))],
      ['Classification disputed', l.classification_disputed ? 'yes' : ''],
      ['Verification', esc(label(l.verification_status))],
      ['Notes', esc(l.notes)],
    ])}

    <h3>Principal</h3>
    ${list(l.prins.map((p) => [
      fmtNum(p.amount) && `${esc(fmtNum(p.amount))}${cert(p.amount_certainty)}`,
      p.unit && esc(p.unit.name + (p.unit.commodity ? ` (${p.unit.commodity})` : '') + (p.unit.standard ? `, ${p.unit.standard}` : '')),
      p.amount_as_written && `— as written: ${esc(p.amount_as_written)}`,
    ].filter(Boolean).join(' ')), 'None recorded.')}

    <h3>Parties</h3>
    ${list(l.parties.map((p) => {
      const pt = p.party || {};
      return [
        `<strong>${esc(label(p.role))}</strong>: ${esc(partyName(pt))}`,
        pt.name_normalized && pt.name_as_written !== pt.name_normalized ? `(as written: ${esc(pt.name_as_written)})` : '',
        pt.patronymic ? `patronymic: ${esc(pt.patronymic)}` : '',
        pt.is_institution ? '(institution)' : '',
        [p.occupation, p.legal_status, p.age_stated != null ? `age ${p.age_stated}` : null].filter(Boolean).map(esc).join(', '),
        pt.tm_per_id ? link(`https://www.trismegistos.org/person/${pt.tm_per_id}`, 'TM Per') : '',
      ].filter(Boolean).join(' ');
    }), 'None recorded.')}

    <h3>Security</h3>
    ${list(l.securities.map((s) => [label(s.security_type), s.description].filter(Boolean).map(esc).join(': ')), 'None recorded.')}

    ${l.events.length ? `<h3>Later events</h3>${list(l.events.map((e) => [
      `<strong>${esc(label(e.event_type))}</strong>`,
      esc(fmtDate(e)),
      e.amount != null ? esc(`${fmtNum(e.amount)} ${e.unit?.name ?? ''}`.trim()) : '',
      e.doc ? esc(e.doc.label) : '',
      esc(e.notes),
    ].filter(Boolean).join(' · ')), '')}` : ''}

    <h3>Documents</h3>
    ${l.docs.length ? l.docs.map(fmtDocument).join('') : '<p>None recorded.</p>'}
  `;
  if (!$('detail').open) $('detail').showModal();
  history.replaceState(null, '', `#${id}`);
}

function openFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (id) showDetail(id);
}

// ---------- CSV export ----------

function downloadCsv() {
  const cols = {
    id: (l) => l.id,
    document: (l) => l.document,
    document_id: (l) => l.main?.id,
    date_as_written: (l) => l.date_as_written,
    year_not_before: (l) => l.year_not_before,
    year_not_after: (l) => l.year_not_after,
    month: (l) => l.month,
    day: (l) => l.day,
    date_certainty: (l) => l.date_certainty,
    place: (l) => l.place,
    region: (l) => l.region,
    amount: (l) => l.prins.map((p) => p.amount).join('; '),
    unit: (l) => l.unitNames,
    commodity: (l) => l.commodity,
    interest_type: (l) => l.interest_type,
    interest_rate: (l) => l.interest_rate,
    interest_period: (l) => l.interest_period,
    interest_rate_annual: (l) => l.interest_rate_annual,
    rate_certainty: (l) => l.rate_certainty,
    term_days: (l) => l.term_days,
    penalty_type: (l) => l.penalty_type,
    purpose_category: (l) => l.purpose_category,
    lender: (l) => l.lender,
    borrower: (l) => l.borrower,
    verification_status: (l) => l.verification_status,
    notes: (l) => l.notes,
  };
  const cell = (v) => (v == null ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  const csv = [Object.keys(cols).join(','),
    ...state.shown.map((l) => Object.values(cols).map((f) => cell(f(l))).join(','))].join('\n');
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([csv], { type: 'text/csv' })),
    download: 'ald-loans.csv',
  });
  a.click();
  URL.revokeObjectURL(a.href);
}

// ---------- wiring ----------

const FILTERS = ['f-search', 'f-region', 'f-unit', 'f-interest', 'f-purpose', 'f-status', 'f-from', 'f-to'];
FILTERS.forEach((id) => $(id).addEventListener('input', render));
$('btn-reset').addEventListener('click', () => {
  FILTERS.forEach((id) => { $(id).value = ''; });
  render();
});
$('btn-csv').addEventListener('click', downloadCsv);
document.querySelectorAll('th[data-sort]').forEach((th) => th.addEventListener('click', () => {
  state.sortDir = state.sortKey === th.dataset.sort ? -state.sortDir : 1;
  state.sortKey = th.dataset.sort;
  render();
}));
$('loans').querySelector('tbody').addEventListener('click', (e) => {
  const tr = e.target.closest('tr[data-id]');
  if (tr) showDetail(tr.dataset.id);
});
$('detail').addEventListener('close', () => history.replaceState(null, '', location.pathname));
window.addEventListener('hashchange', openFromHash);

load();
