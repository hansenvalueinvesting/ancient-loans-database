// The Ancient Loans Database — frontend for index.html (filters and loan table) and loan.html (one loan).
// Reads ald.csv from the repository (CSV_URL in config.js).

const { CSV_URL } = window.ALD_CONFIG;

const $ = (id) => document.getElementById(id);
const state = { all: [], picked: {}, sortKey: 'id', sortDir: 1, shown: [] };

// CSV columns (in order) and the columns shown in the table.
const COLS = ['id', 'period', 'year', 'place', 'amount', 'currency', 'borrower', 'lender', 'interest', 'duration', 'source', 'source_url', 'notes'];
const LIST_COLS = ['id', 'period', 'year', 'place', 'amount', 'currency', 'borrower', 'lender', 'interest', 'duration', 'source'];

// ---------- data ----------

// CSV text → array of rows (arrays of strings); handles quoted fields, "" escapes, CRLF.
function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') quoted = false; else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(cell); cell = ''; } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.some((v) => v !== ''));
}

// Year field → first and last year it may fall in (BC negative); null if blank.
// 'AD 57' → 57, 57; '100 BC' → -100, -100; 'AD 101-200' → 101, 200; '24-23 BC' → -24, -23; '30 BC-AD 14' → -30, 14.
function yearRange(y) {
  let m = y.match(/^AD (\d+)(?:-(\d+))?$/);
  if (m) return [Number(m[1]), Number(m[2] || m[1])];
  m = y.match(/^(\d+)(?:-(\d+))? BC$/);
  if (m) return [-Number(m[1]), -Number(m[2] || m[1])];
  m = y.match(/^(\d+) BC-AD (\d+)$/);
  if (m) return [-Number(m[1]), Number(m[2])];
  return [null, null];
}

async function fetchLoans() {
  const res = await fetch(CSV_URL, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const [head, ...body] = parseCsv(await res.text());
  return body.map((r) => {
    const l = Object.fromEntries(head.map((h, i) => [h, r[i] ?? '']));
    [l.yearStart, l.yearEnd] = yearRange(l.year);
    return l;
  });
}

// ---------- years ----------

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

const fmtYear = (n) => (n < 0 ? `${-n} BC` : `AD ${n}`);

// ---------- multi-select filters (type to search, pick several) ----------

// Columns with a multi-select filter. A blank value is offered as BLANK[col].
const MULTI = ['period', 'place', 'currency'];
const BLANK = { period: '(period unknown)', place: '(place unknown)', currency: '(currency unknown)' };
const shownValue = (col, v) => (v === '' ? BLANK[col] : v);

// Fill each filter's suggestion list with the values not yet picked, with their number of loans.
function fillOptions() {
  MULTI.forEach((col) => {
    const counts = new Map();
    state.all.forEach((l) => counts.set(l[col], (counts.get(l[col]) || 0) + 1));
    $(`dl-${col}`).innerHTML = [...counts].filter(([v]) => !state.picked[col].has(v))
      .sort((a, b) => shownValue(col, a[0]).localeCompare(shownValue(col, b[0])))
      .map(([v, n]) => `<option value="${esc(shownValue(col, v))}">${n.toLocaleString()} loans</option>`).join('');
  });
}

// Picked values, shown as buttons; clicking one removes it.
function showPicked() {
  MULTI.forEach((col) => {
    $(`picked-${col}`).innerHTML = [...state.picked[col]].map((v) =>
      `<button type="button" data-col="${col}" data-value="${esc(v)}" title="Remove">${esc(shownValue(col, v))} ×</button>`).join(' ');
  });
}

// Typed text → the value it names (exact, else the only or first value containing it); null if none.
function matchValue(col, text) {
  const t = text.trim().toLowerCase();
  if (!t) return null;
  const vals = [...new Set(state.all.map((l) => l[col]))].filter((v) => !state.picked[col].has(v));
  return vals.find((v) => shownValue(col, v).toLowerCase() === t)
    ?? vals.filter((v) => shownValue(col, v).toLowerCase().includes(t)).sort()[0] ?? null;
}

function pick(col, v) {
  state.picked[col].add(v);
  $(`f-${col}`).value = '';
  update();
}

// ---------- filters in the URL (shareable links) ----------
// #from=100 BC&to=AD 100&period=Early Roman Egypt&place=Oxyrhynchus|Tebtunis (Arsinoite nome)&currency=drachma&q=Sarapion

function writeHash() {
  const prm = new URLSearchParams();
  if ($('f-from').value.trim()) prm.set('from', $('f-from').value.trim());
  if ($('f-to').value.trim()) prm.set('to', $('f-to').value.trim());
  MULTI.forEach((col) => { if (state.picked[col].size) prm.set(col, [...state.picked[col]].join('|')); });
  if ($('f-search').value.trim()) prm.set('q', $('f-search').value.trim());
  const h = prm.toString();
  history.replaceState(null, '', h ? `#${h}` : location.pathname + location.search);
}

function readHash() {
  const prm = new URLSearchParams(location.hash.slice(1));
  $('f-from').value = prm.get('from') || '';
  $('f-to').value = prm.get('to') || '';
  $('f-search').value = prm.get('q') || '';
  MULTI.forEach((col) => { state.picked[col] = new Set(prm.has(col) ? prm.get(col).split('|') : []); });
}

// ---------- formatting ----------

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Amounts are text: a whole number or a fraction, e.g. '100', '12 1/6', '2/3', or a sum in several
// units as the document writes it, e.g. '2 talents 4800 drachmas' (no numeric value; sorts last).
function amountValue(s) {
  const m = String(s).match(/^(?:(\d+)(?: (\d+)\/(\d+))?|(\d+)\/(\d+))$/);
  if (!m) return NaN;
  return m[4] ? m[4] / m[5] : Number(m[1]) + (m[2] ? m[2] / m[3] : 0);
}
const fmtAmount = (s) => String(s).replace(/(^| )(\d+)(?=$| [^\d])/g, (m, sp, w) => sp + Number(w).toLocaleString());

const fmtSource = (l) => (l.source_url
  ? `<a href="${esc(l.source_url)}" target="_blank" rel="noopener">${esc(l.source)}</a>`
  : esc(l.source));

// One field of a loan as HTML.
function cellHtml(l, c) {
  if (c === 'amount') return fmtAmount(l.amount);
  if (c === 'source') return fmtSource(l);
  if (c === 'notes') return esc(l.notes).replace(/\n/g, '<br>');
  return esc(l[c]);
}

function setStatus(msg) {
  $('status').textContent = msg;
}

// ---------- filtering & table ----------

// A loan matches when it is in any picked value of each multi-select filter, its year range
// overlaps the year filter, and it contains the search text.
function filtered() {
  const s = $('f-search').value.trim().toLowerCase();
  const from = parseYear($('f-from').value), to = parseYear($('f-to').value);
  return state.all.filter((l) => {
    if (MULTI.some((col) => state.picked[col].size && !state.picked[col].has(l[col]))) return false;
    if (from != null && (l.yearEnd == null || l.yearEnd < from)) return false;
    if (to != null && (l.yearStart == null || l.yearStart > to)) return false;
    if (s && !LIST_COLS.map((c) => l[c]).join(' ').toLowerCase().includes(s)) return false;
    return true;
  });
}

function sortRows(rows) {
  const { sortKey: k, sortDir: d } = state;
  const numeric = k === 'year' || k === 'amount';
  const num = (l) => (k === 'year' ? (l.yearStart ?? NaN) : amountValue(l.amount));
  return rows.sort((a, b) => {
    const x = numeric ? num(a) : a[k], y = numeric ? num(b) : b[k];
    const blank = (v) => v === '' || Number.isNaN(v);
    if (blank(x)) return blank(y) ? 0 : 1;
    if (blank(y)) return -1;
    return (numeric ? x - y : String(x).localeCompare(String(y))) * d;
  });
}

function render() {
  state.shown = sortRows(filtered());
  $('loans').querySelector('tbody').innerHTML = state.shown.map((l) => `
    <tr><td><a href="loan.html?id=${encodeURIComponent(l.id)}">${esc(l.id)}</a></td>${
      LIST_COLS.slice(1).map((c) => `<td>${cellHtml(l, c)}</td>`).join('')}</tr>`).join('');

  document.querySelectorAll('th[data-sort]').forEach((th) => {
    th.dataset.label ||= th.textContent;
    th.textContent = th.dataset.label + (th.dataset.sort === state.sortKey ? (state.sortDir === 1 ? ' ▲' : ' ▼') : '');
  });
  const bad = ['f-from', 'f-to'].filter((id) => Number.isNaN(parseYear($(id).value)));
  setStatus(bad.length
    ? 'Year not understood: enter a year like 100 BC or AD 57.'
    : `${state.shown.length.toLocaleString()} of ${state.all.length.toLocaleString()} loans`);
}

// Filters changed: refresh picked values, suggestions, table and URL.
function update() {
  showPicked();
  fillOptions();
  render();
  writeHash();
}

async function load() {
  try {
    state.all = await fetchLoans();
  } catch (err) {
    return setStatus(`Could not load data. ${err.message}`);
  }
  const ys = state.all.map((l) => l.yearStart).filter((y) => y != null);
  $('f-from').placeholder = fmtYear(Math.min(...ys));
  $('f-to').placeholder = fmtYear(Math.max(...state.all.map((l) => l.yearEnd).filter((y) => y != null)));
  readHash();
  update();
}

// ---------- CSV export ----------

function downloadCsv() {
  const cell = (v) => (/[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  const csv = [COLS.join(','), ...state.shown.map((l) => COLS.map((c) => cell(l[c])).join(','))].join('\n') + '\n';
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([csv], { type: 'text/csv' })),
    download: 'ald.csv',
  });
  a.click();
  URL.revokeObjectURL(a.href);
}

// ---------- loan page ----------

async function loadLoan() {
  const id = new URLSearchParams(location.search).get('id');
  if (!id) return setStatus('No loan ID given.');
  try {
    const l = (await fetchLoans()).find((r) => r.id === id);
    if (!l) return setStatus(`Loan ${id} not found.`);
    document.title = `${l.id} | Ancient Loans Database`;
    $('loan-id').textContent = l.id;
    const label = (c) => c[0].toUpperCase() + c.slice(1);
    $('loan').innerHTML = COLS.slice(1).filter((c) => c !== 'source_url').map((c) =>
      `<tr><th align="left">${label(c)}</th><td>${cellHtml(l, c)}</td></tr>`).join('');
    setStatus('');
  } catch (err) {
    setStatus(`Could not load data. ${err.message}`);
  }
}

// ---------- wiring ----------

if ($('loan')) {
  loadLoan();
} else {
  MULTI.forEach((col) => {
    const input = $(`f-${col}`);
    // A value chosen from the suggestion list is picked at once; Enter picks the best match of the typed text.
    input.addEventListener('input', () => {
      const v = matchValue(col, input.value);
      if (v != null && shownValue(col, v).toLowerCase() === input.value.trim().toLowerCase()) pick(col, v);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      const v = matchValue(col, input.value);
      if (v != null) pick(col, v);
    });
    $(`picked-${col}`).addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      state.picked[col].delete(b.dataset.value);
      update();
    });
  });
  ['f-from', 'f-to', 'f-search'].forEach((id) => $(id).addEventListener('input', () => { render(); writeHash(); }));
  $('btn-reset').addEventListener('click', () => {
    ['f-from', 'f-to', 'f-search', ...MULTI.map((c) => `f-${c}`)].forEach((id) => { $(id).value = ''; });
    MULTI.forEach((col) => state.picked[col].clear());
    update();
  });
  $('btn-csv').addEventListener('click', downloadCsv);
  document.querySelectorAll('th[data-sort]').forEach((th) => th.addEventListener('click', () => {
    state.sortDir = state.sortKey === th.dataset.sort ? -state.sortDir : 1;
    state.sortKey = th.dataset.sort;
    render();
  }));
  load();
}
