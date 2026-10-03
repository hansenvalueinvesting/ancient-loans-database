// The Ancient Loans Database — frontend.
// Loads all tables from Supabase's REST API once, then filters in the browser.

const { SUPABASE_URL, SUPABASE_KEY } = window.ALD_CONFIG;
const PAGE = 1000; // Supabase returns at most 1000 rows per request

const $ = (id) => document.getElementById(id);
const state = { loans: [], sortKey: 'id', sortDir: 1, shown: [] };

// ---------- data ----------

async function fetchTable(table) {
  const rows = [];
  const order = table === 'loan_parties' ? 'loan_id,party_id,role' : 'id';
  for (let offset = 0; ; offset += PAGE) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=*&order=${order}&limit=${PAGE}&offset=${offset}`, {
      headers: { apikey: SUPABASE_KEY },
    });
    if (!res.ok) throw new Error(`${table}: ${res.status} ${await res.text()}`);
    const page = await res.json();
    rows.push(...page);
    if (page.length < PAGE) return rows;
  }
}

async function load() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return setStatus('Database not configured: set SUPABASE_URL and SUPABASE_KEY in docs/config.js.');
  }
  try {
    const [loans, documents, editions, parties, loanParties] = await Promise.all(
      ['loans', 'documents', 'editions', 'parties', 'loan_parties'].map(fetchTable));

    const docById = Object.fromEntries(documents.map((d) => [d.id, { ...d, editions: [] }]));
    editions.forEach((e) => docById[e.document_id]?.editions.push(e));
    const partyById = Object.fromEntries(parties.map((p) => [p.id, p]));

    const partiesByLoan = {};
    loanParties.forEach((lp) => {
      (partiesByLoan[lp.loan_id] ||= []).push({ ...lp, party: partyById[lp.party_id] });
    });

    state.loans = loans.map((l) => {
      const ps = partiesByLoan[l.id] || [];
      const names = (role) => ps.filter((p) => p.role === role).map((p) => p.party?.name).join('; ');
      const doc = docById[l.document_id];
      return {
        ...l,
        doc,
        parties: ps,
        region: doc?.region || '',
        document: doc?.title || '',
        lender: names('lender'),
        borrower: names('borrower'),
        year: l.date_start_year,
        yearEnd: l.date_end_year ?? l.date_start_year,
      };
    });

    fillSelect('f-region', state.loans.map((l) => l.region));
    fillSelect('f-type', state.loans.map((l) => l.loan_type));
    fillSelect('f-unit', state.loans.map((l) => l.principal_unit));
    render();
    openFromHash();
  } catch (err) {
    setStatus(`Could not load data. ${err.message}`);
  }
}

// ---------- formatting ----------

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Historical year (no year 0) → display: -100 → '100 BC', 57 → 'AD 57'.
const fmtYear = (y) => (y == null ? '' : y > 0 ? `AD ${y}` : `${-y} BC`);

function fmtRange(start, end) {
  if (start == null) return '';
  return end != null && end !== start ? `${fmtYear(start)} – ${fmtYear(end)}` : fmtYear(start);
}

const badge = (certainty) => (certainty && certainty !== 'certain' ? ` <i>(${esc(certainty)})</i>` : '');

const fmtNum = (n) => (n == null ? '' : Number(n).toLocaleString());

const fmtRate = (r) => (r == null ? '' : `${Number(r).toLocaleString()}%`);

function setStatus(msg) {
  $('status').textContent = msg;
}

function fillSelect(id, values) {
  const sel = $(id);
  [...new Set(values.filter(Boolean))].sort().forEach((v) => sel.add(new Option(v, v)));
}

// ---------- filtering & table ----------

function filtered() {
  const q = $('f-search').value.trim().toLowerCase();
  const region = $('f-region').value, type = $('f-type').value, unit = $('f-unit').value;
  const from = $('f-from').value === '' ? null : Number($('f-from').value);
  const to = $('f-to').value === '' ? null : Number($('f-to').value);

  return state.loans.filter((l) => {
    if (region && l.region !== region) return false;
    if (type && l.loan_type !== type) return false;
    if (unit && l.principal_unit !== unit) return false;
    // Keep loans whose date range overlaps the requested range.
    if (from != null && (l.year == null || l.yearEnd < from)) return false;
    if (to != null && (l.year == null || l.year > to)) return false;
    if (q) {
      const hay = [l.id, l.document, l.place, l.doc?.place, l.notes, l.date_text, l.security,
        ...l.parties.map((p) => `${p.party?.name} ${p.party?.name_original ?? ''}`)].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function sortRows(rows) {
  const { sortKey: k, sortDir: d } = state;
  return rows.sort((a, b) => {
    const x = a[k], y = b[k];
    if (x == null || x === '') return 1;
    if (y == null || y === '') return -1;
    return (typeof x === 'number' || k === 'principal_amount' || k === 'interest_rate_annual'
      ? Number(x) - Number(y) : String(x).localeCompare(String(y))) * d;
  });
}

function render() {
  state.shown = sortRows(filtered());
  $('loans').querySelector('tbody').innerHTML = state.shown.map((l) => `
    <tr data-id="${esc(l.id)}">
      <td>${esc(l.id)}</td>
      <td>${esc(fmtRange(l.date_start_year, l.date_end_year))}${badge(l.date_certainty)}</td>
      <td>${esc(l.place)}</td>
      <td>${esc(l.loan_type)}</td>
      <td>${fmtNum(l.principal_amount)}${badge(l.principal_certainty)}</td>
      <td>${esc(l.principal_unit)}</td>
      <td>${esc(l.principal_commodity)}</td>
      <td>${fmtRate(l.interest_rate_annual)}${badge(l.interest_certainty)}</td>
      <td>${esc(l.lender)}</td>
      <td>${esc(l.borrower)}</td>
      <td>${esc(l.document)}</td>
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
  return `<dl>${pairs.filter(([, v]) => v !== '' && v != null)
    .map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
}

function showDetail(id) {
  const l = state.loans.find((x) => x.id === id);
  if (!l) return;
  const d = l.doc || {};

  $('detail-body').innerHTML = `
    <h2 id="detail-title">${esc(l.id)}</h2>
    <p>${esc(d.title)}</p>

    <h3>Loan</h3>
    ${rows([
      ['Type', esc(l.loan_type)],
      ['Date', esc(l.date_text) && `${esc(l.date_text)}${badge(l.date_certainty)}`],
      ['Year', esc(fmtRange(l.date_start_year, l.date_end_year))],
      ['Calendar', esc(l.calendar)],
      ['Place', l.place && `${esc(l.place)} ${l.pleiades_id ? link(`https://pleiades.stoa.org/places/${l.pleiades_id}`, '(Pleiades)') : ''}`],
      ['Principal', fmtNum(l.principal_amount) && `${fmtNum(l.principal_amount)}${badge(l.principal_certainty)}`],
      ['Unit', esc(l.principal_unit)],
      ['Commodity', esc(l.principal_commodity)],
      ['Currency', esc(l.currency)],
      ['Interest (as stated)', esc(l.interest_text) && `${esc(l.interest_text)}${badge(l.interest_certainty)}`],
      ['Interest p.a.', fmtRate(l.interest_rate_annual)],
      ['Term', esc(l.term_text || (l.term_months != null ? `${l.term_months} months` : ''))],
      ['Security', esc(l.security)],
      ['Penalty', esc(l.penalty)],
      ['Notes', esc(l.notes)],
    ])}

    <h3>Parties</h3>
    ${l.parties.length ? `<ul>${l.parties.map((p) => `
      <li><strong>${esc(p.role)}</strong>: ${esc(p.party?.name)}${p.party?.party_type === 'institution' ? ' (institution)' : ''}
        ${p.party?.name_original ? `(${esc(p.party.name_original)})` : ''}
        ${[p.party?.occupation, p.party?.origin].filter(Boolean).map(esc).join(', ')}
        ${badge(p.certainty)}
        ${p.party?.tm_per_id ? link(`https://www.trismegistos.org/person/${p.party.tm_per_id}`, 'TM') : ''}
      </li>`).join('')}</ul>` : '<p>None recorded.</p>'}

    <h3>Document</h3>
    ${rows([
      ['ID', esc(d.id)],
      ['Title', esc(d.title)],
      ['Material', esc(d.material)],
      ['Language', esc(d.language)],
      ['Region', esc(d.region)],
      ['Provenance', d.place && `${esc(d.place)} ${d.pleiades_id ? link(`https://pleiades.stoa.org/places/${d.pleiades_id}`, '(Pleiades)') : ''}`],
      ['Date', esc(d.date_text || fmtRange(d.date_start_year, d.date_end_year))],
      ['Links', [d.tm_id && link(`https://www.trismegistos.org/text/${d.tm_id}`, `TM ${d.tm_id}`),
        link(d.papyri_info_url, 'papyri.info')].filter(Boolean).join(' · ')],
      ['Notes', esc(d.notes)],
    ])}

    ${d.editions?.length ? `<h3>Editions</h3><ul>${d.editions.map((e) => `
      <li>${esc(e.citation)}${e.is_reference ? ' <i>(reference edition)</i>' : ''} ${link(e.url, 'link')}</li>`).join('')}</ul>` : ''}
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
  const cols = ['id', 'document_id', 'document', 'region', 'loan_type', 'date_text', 'date_start_year', 'date_end_year', 'calendar',
    'date_certainty', 'place', 'pleiades_id', 'principal_amount', 'principal_unit', 'principal_commodity', 'currency',
    'principal_certainty', 'interest_text', 'interest_rate_annual', 'interest_certainty', 'term_text', 'term_months',
    'security', 'penalty', 'lender', 'borrower', 'notes'];
  const cell = (v) => (v == null ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  const csv = [cols.join(','), ...state.shown.map((l) => cols.map((c) => cell(l[c])).join(','))].join('\n');
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([csv], { type: 'text/csv' })),
    download: 'ald-loans.csv',
  });
  a.click();
  URL.revokeObjectURL(a.href);
}

// ---------- wiring ----------

['f-search', 'f-region', 'f-type', 'f-unit', 'f-from', 'f-to'].forEach((id) => $(id).addEventListener('input', render));
$('btn-reset').addEventListener('click', () => {
  ['f-search', 'f-region', 'f-type', 'f-unit', 'f-from', 'f-to'].forEach((id) => { $(id).value = ''; });
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
