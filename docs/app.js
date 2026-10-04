// The Ancient Loans Database — frontend for index.html (all loans) and loan.html (one loan).
// Reads the loans table from Supabase's REST API.

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

async function fetchLoan(id) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/loans?select=*&id=eq.${encodeURIComponent(id)}`, {
    headers: { apikey: SUPABASE_KEY },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return (await res.json())[0];
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

// Amounts are text: a whole number or a fraction, e.g. '100', '12 1/6', '2/3'.
function amountValue(s) {
  const m = String(s).match(/^(?:(\d+)(?: (\d+)\/(\d+))?|(\d+)\/(\d+))$/);
  if (!m) return NaN;
  return m[4] ? m[4] / m[5] : Number(m[1]) + (m[2] ? m[2] / m[3] : 0);
}
const fmtAmount = (s) => (s == null ? '' : String(s).replace(/^\d+/, (w) => Number(w).toLocaleString()));

// Year filter input → sortable number: '100 BC' → -100, 'AD 57' / '57 AD' / '57' → 57.
// Returns null for empty input, NaN for input that is not a year.
function parseYear(s) {
  s = s.trim().toUpperCase();
  if (!s) return null;
  const m = s.match(/^(?:(\d+)\s*(BC|AD)?|(AD|BC)\s*(\d+))$/);
  if (!m) return NaN;
  const n = Number(m[1] ?? m[4]), era = m[2] ?? m[3];
  if (n === 0) return NaN;
  return era === 'BC' ? -n : n;
}

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
  const from = parseYear($('f-from').value), to = parseYear($('f-to').value);

  return state.loans.filter((l) => {
    if (place && l.place !== place) return false;
    if (currency && l.currency !== currency) return false;
    if (from != null && (l.year_sort == null || l.year_sort < from)) return false;
    if (to != null && (l.year_sort == null || l.year_sort > to)) return false;
    if (q) {
      const hay = [l.id, l.year, l.place, l.currency, l.borrower, l.lender, l.interest, l.duration, l.source]
        .join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function sortRows(rows) {
  const { sortKey: k, sortDir: d } = state;
  const numeric = k === 'year_sort' || k === 'amount';
  return rows.sort((a, b) => {
    const x = a[k], y = b[k];
    if (x == null || x === '') return 1;
    if (y == null || y === '') return -1;
    const num = (v) => (k === 'amount' ? amountValue(v) : Number(v));
    return (numeric ? num(x) - num(y) : String(x).localeCompare(String(y))) * d;
  });
}

function render() {
  state.shown = sortRows(filtered());
  $('loans').querySelector('tbody').innerHTML = state.shown.map((l) => `
    <tr>
      <td><a href="loan.html?id=${encodeURIComponent(l.id)}">${esc(l.id)}</a></td>
      <td>${esc(l.year)}</td>
      <td>${esc(l.place)}</td>
      <td>${fmtAmount(l.amount)}</td>
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
  const bad = ['f-from', 'f-to'].filter((id) => Number.isNaN(parseYear($(id).value)));
  setStatus(bad.length
    ? 'Year filter not understood: enter a year like 100 BC or AD 57.'
    : `${state.shown.length.toLocaleString()} of ${state.loans.length.toLocaleString()} loans`);
}

// ---------- CSV export ----------

function downloadCsv() {
  const cols = ['id', 'year', 'year_sort', 'place', 'amount', 'currency', 'borrower', 'lender', 'interest', 'duration', 'source', 'source_url', 'notes'];
  const cell = (v) => (v == null ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  const csv = [cols.join(','), ...state.shown.map((l) => cols.map((c) => cell(l[c])).join(','))].join('\n');
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([csv], { type: 'text/csv' })),
    download: 'ald-loans.csv',
  });
  a.click();
  URL.revokeObjectURL(a.href);
}

// ---------- loan page ----------

async function loadLoan() {
  const id = new URLSearchParams(location.search).get('id');
  if (!id) return setStatus('No loan ID given.');
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return setStatus('Database not configured: set SUPABASE_URL and SUPABASE_KEY in docs/config.js.');
  }
  try {
    const l = await fetchLoan(id);
    if (!l) return setStatus(`Loan ${id} not found.`);
    document.title = `${l.id} | Ancient Loans Database`;
    $('loan-id').textContent = l.id;
    const fields = [
      ['Year', esc(l.year)],
      ['Place', esc(l.place)],
      ['Amount', fmtAmount(l.amount)],
      ['Currency', esc(l.currency)],
      ['Borrower', esc(l.borrower)],
      ['Lender', esc(l.lender)],
      ['Interest', esc(l.interest)],
      ['Duration', esc(l.duration)],
      ['Source', fmtSource(l)],
      ['Notes', esc(l.notes).replace(/\n/g, '<br>')],
    ];
    $('loan').innerHTML = fields.map(([k, v]) => `<tr><th align="left">${k}</th><td>${v}</td></tr>`).join('');
    setStatus('');
  } catch (err) {
    setStatus(`Could not load data. ${err.message}`);
  }
}

// ---------- wiring ----------

if ($('loan')) {
  loadLoan();
} else {
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
}
