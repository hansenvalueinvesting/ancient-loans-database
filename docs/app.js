// The Ancient Loans Database — frontend.
// Loads the loans table from Supabase's REST API once, then filters in the browser.

const { SUPABASE_URL, SUPABASE_KEY } = window.ALD_CONFIG;
const PAGE = 1000; // Supabase returns at most 1000 rows per request

const $ = (id) => document.getElementById(id);
const state = { loans: [], sortKey: 'id', sortDir: 1, shown: [] };

// ---------- data ----------

async function fetchLoans() {
  const rows = [];
  for (let offset = 0; ; offset += PAGE) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/loans?select=*&order=id&limit=${PAGE}&offset=${offset}`, {
      headers: { apikey: SUPABASE_KEY },
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
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
    state.loans = await fetchLoans();
    fillSelect('f-place', state.loans.map((l) => l.place));
    fillSelect('f-currency', state.loans.map((l) => l.currency));
    render();
  } catch (err) {
    setStatus(`Could not load data. ${err.message}`);
  }
}

// ---------- formatting ----------

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const fmtNum = (n) => (n == null ? '' : Number(n).toLocaleString());

// Year integer → display: -100 → '100 BCE', 57 → '57 CE'.
const fmtYear = (y) => (y == null ? '' : y < 0 ? `${-y} BCE` : `${y} CE`);

const fmtSource = (l) => (l.source_url
  ? `<a href="${esc(l.source_url)}" target="_blank" rel="noopener">${esc(l.source)}</a>`
  : esc(l.source));

function setStatus(msg) {
  $('status').textContent = msg;
}

function fillSelect(id, values) {
  const sel = $(id);
  [...new Set(values.filter((v) => v != null && v !== ''))].sort().forEach((v) => sel.add(new Option(v, v)));
}

// ---------- filtering & table ----------

function filtered() {
  const q = $('f-search').value.trim().toLowerCase();
  const place = $('f-place').value, currency = $('f-currency').value;
  const from = $('f-from').value === '' ? null : Number($('f-from').value);
  const to = $('f-to').value === '' ? null : Number($('f-to').value);

  return state.loans.filter((l) => {
    if (place && l.place !== place) return false;
    if (currency && l.currency !== currency) return false;
    if (from != null && (l.year == null || l.year < from)) return false;
    if (to != null && (l.year == null || l.year > to)) return false;
    if (q) {
      const hay = [l.id, fmtYear(l.year), l.place, l.currency, l.borrower, l.lender, l.interest, l.duration, l.source]
        .join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function sortRows(rows) {
  const { sortKey: k, sortDir: d } = state;
  const numeric = k === 'year' || k === 'amount';
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
    <tr>
      <td>${esc(l.id)}</td>
      <td>${esc(fmtYear(l.year))}</td>
      <td>${esc(l.place)}</td>
      <td>${fmtNum(l.amount)}</td>
      <td>${esc(l.currency)}</td>
      <td>${esc(l.borrower)}</td>
      <td>${esc(l.lender)}</td>
      <td>${esc(l.interest)}</td>
      <td>${esc(l.duration)}</td>
      <td>${fmtSource(l)}</td>
    </tr>`).join('');

  document.querySelectorAll('th[data-sort]').forEach((th) => {
    th.dataset.label ||= th.textContent;
    th.textContent = th.dataset.label + (th.dataset.sort === state.sortKey ? (state.sortDir === 1 ? ' ▲' : ' ▼') : '');
  });
  setStatus(`${state.shown.length.toLocaleString()} of ${state.loans.length.toLocaleString()} loans`);
}

// ---------- CSV export ----------

function downloadCsv() {
  const cols = ['id', 'year', 'place', 'amount', 'currency', 'borrower', 'lender', 'interest', 'duration', 'source', 'source_url'];
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

const FILTERS = ['f-search', 'f-place', 'f-currency', 'f-from', 'f-to'];
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

load();
