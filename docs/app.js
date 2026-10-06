// The Ancient Loans Database — frontend for index.html (catalogue and loan lists) and loan.html (one loan).
// Reads the loans table from Supabase's REST API.

const { SUPABASE_URL, SUPABASE_KEY } = window.ALD_CONFIG;
const PAGE = 1000; // Supabase returns at most 1000 rows per request

const $ = (id) => document.getElementById(id);
const state = { loans: [], sortKey: 'id', sortDir: 1, shown: [] };

// ---------- data ----------

// Table columns; notes (the long original text) is loaded only on a loan's own page and for CSV.
const LIST_COLS = 'id,period,year,year_sort,place,amount,currency,borrower,lender,interest,duration,source,source_url';

async function get(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, { headers: { apikey: SUPABASE_KEY } });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

// All rows of `table` matching the PostgREST filter string `where`, in pages.
async function fetchAll(table, cols, where) {
  const rows = [];
  for (let offset = 0; ; offset += PAGE) {
    const page = await get(`${table}?select=${cols}${where}&order=id&limit=${PAGE}&offset=${offset}`);
    rows.push(...page);
    if (page.length < PAGE) return rows;
  }
}

const fetchLoan = async (id) => (await get(`loans?select=*&id=eq.${encodeURIComponent(id)}`))[0];

// ---------- catalogue ----------

const ordinal = (n) => n + (n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] || 'th');
const centuryLabel = (c) => (c < 0 ? `${ordinal(-c)} century BC` : `${ordinal(c)} century AD`);
const q = encodeURIComponent;
const pgq = (v) => `"${String(v).replace(/"/g, '\\"')}"`; // value quoted for PostgREST or=()

// Selection (from the URL hash) → title and PostgREST filter.
// '#all'; '#era=Roman/Egypt' (a catalogue node; empty = period unknown); '&c=1' adds a century
// (1 = AD 1-100, -1 = 100-1 BC; empty = year unknown).
function selection() {
  const h = location.hash.slice(1);
  if (!h) return null;
  if (h === 'all') return { title: 'All loans', where: '' };
  const prm = new URLSearchParams(h);
  if (!prm.has('era')) return null;
  const v = prm.get('era');
  const list = eraPaths.get(v) || [v];
  let title = v ? (list.length === 1 ? list[0] : v.split('/').join(' ')) : 'Period unknown';
  let where = v ? `&period=in.${q(`(${list.map(pgq).join(',')})`)}` : '&period=is.null';
  if (prm.has('c')) {
    const c = prm.get('c');
    if (!c) { title += ', year unknown'; where += '&year_sort=is.null'; } else {
      const n = Number(c);
      const [lo, hi] = n > 0 ? [(n - 1) * 100 + 1, n * 100] : [n * 100, (n + 1) * 100 - 1];
      title += `, ${centuryLabel(n)}`; where += `&year_sort=gte.${lo}&year_sort=lte.${hi}`;
    }
  }
  return { title, where };
}

const node = (href, label, n) => `<a href="#${href}">${esc(label)}</a> (${n.toLocaleString()})`;

// Historical period → its layers: ruling power, region, period.
// 'Early Roman Egypt' → ['Roman', 'Egypt', 'Early Roman Egypt']; 'Ptolemaic Egypt' → ['Ptolemaic', 'Egypt', ...];
// a period without a region ('Parthian Empire', 'India') is a layer of its own.
function eraPath(p) {
  const m = p.match(/^(?:(Early|Late) )?(Ptolemaic|Seleucid|Roman|Nabataean) (.+)$/);
  return m ? [m[2], m[3], p] : [p];
}
let eraPaths = new Map(); // catalogue path ('Roman/Egypt') → the periods under it, set by loadCatalogue

// Catalogue: one tree, earliest first at each level:
// ruling power > region > period (only where a region has several) > century.
async function loadCatalogue() {
  const rows = await get('loan_catalogue?select=*');
  $('cat-total').textContent = `(${rows.reduce((t, r) => t + r.loans, 0).toLocaleString()})`;

  const perRegion = new Map();
  rows.forEach((r) => {
    if (r.period == null) return;
    const s = eraPath(r.period);
    if (s.length === 3) perRegion.set(s[0] + '/' + s[1], new Set([...(perRegion.get(s[0] + '/' + s[1]) || []), r.period]));
  });
  const pathOf = (p) => {
    if (p == null) return ['Period unknown'];
    const s = eraPath(p);
    return s.length === 3 && perRegion.get(s[0] + '/' + s[1]).size === 1 ? s.slice(0, 2) : s;
  };

  const tree = { children: new Map() };
  eraPaths = new Map();
  const add = (parent, seg, key, href, label, r, first) => {
    if (!parent.children.has(seg)) parent.children.set(seg, { href, label, n: 0, first: Infinity, children: new Map() });
    const nd = parent.children.get(seg);
    nd.n += r.loans;
    nd.first = Math.min(nd.first, first);
    return nd;
  };
  rows.forEach((r) => {
    const segs = pathOf(r.period);
    let nd = tree, key = '';
    segs.forEach((seg, i) => {
      key = r.period == null ? '' : segs.slice(0, i + 1).join('/');
      if (r.period != null) eraPaths.set(key, [...new Set([...(eraPaths.get(key) || []), r.period])]);
      nd = add(nd, seg, key, `era=${q(key)}`, seg, r, r.period == null ? Infinity : r.first_year ?? Infinity);
    });
    const c = r.century;
    add(nd, `c${c}`, key, `era=${q(key)}&c=${c ?? ''}`, c == null ? 'Year unknown' : centuryLabel(c), r, c ?? Infinity);
  });
  const branch = (nd) => [...nd.children.values()].sort((a, b) => a.first - b.first).map((c) => `<li>${c.children.size
    ? `<details><summary>${node(c.href, c.label, c.n)}</summary><ul>${branch(c)}</ul></details>`
    : node(c.href, c.label, c.n)}</li>`).join('');
  $('cat-tree').innerHTML = branch(tree);
}

async function load() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return setStatus('Database not configured: set SUPABASE_URL and SUPABASE_KEY in docs/config.js.');
  }
  try {
    await loadCatalogue();
    await showSelection();
  } catch (err) {
    setStatus(`Could not load data. ${err.message}`);
  }
}

// Load and show the loans of the selected catalogue node.
async function showSelection() {
  const sel = selection();
  ['sel-title', 'controls', 'loans'].forEach((id) => { $(id).hidden = !sel; });
  if (!sel) { state.loans = []; return setStatus('Choose a category above.'); }
  $('sel-title').textContent = sel.title;
  setStatus('Loading…');
  try {
    state.loans = await fetchAll('loans', LIST_COLS, sel.where);
  } catch (err) {
    return setStatus(`Could not load data. ${err.message}`);
  }
  ['f-period', 'f-place', 'f-currency'].forEach((id) => { $(id).length = 1; });
  ['f-search', 'f-from', 'f-to'].forEach((id) => { $(id).value = ''; });
  fillSelect('f-period', state.loans.map((l) => l.period));
  fillSelect('f-place', state.loans.map((l) => l.place));
  fillSelect('f-currency', state.loans.map((l) => l.currency));
  setYearPlaceholders();
  render();
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
const fmtAmount = (s) => (s == null ? '' : String(s).replace(/(^| )(\d+)(?=$| [^\d])/g, (m, sp, w) => sp + Number(w).toLocaleString()));

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

// year_sort → '100 BC' / 'AD 57'.
const fmtYear = (n) => (n < 0 ? `${-n} BC` : `AD ${n}`);

// Year filter hints: earliest and latest year_sort on record.
function setYearPlaceholders() {
  const ys = state.loans.map((l) => l.year_sort).filter((y) => y != null);
  if (!ys.length) return;
  $('f-from').placeholder = fmtYear(Math.min(...ys));
  $('f-to').placeholder = fmtYear(Math.max(...ys));
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
  const period = $('f-period').value, place = $('f-place').value, currency = $('f-currency').value;
  const from = parseYear($('f-from').value), to = parseYear($('f-to').value);

  return state.loans.filter((l) => {
    if (period && l.period !== period) return false;
    if (place && l.place !== place) return false;
    if (currency && l.currency !== currency) return false;
    if (from != null && (l.year_sort == null || l.year_sort < from)) return false;
    if (to != null && (l.year_sort == null || l.year_sort > to)) return false;
    if (q) {
      const hay = [l.id, l.period, l.year, l.place, l.currency, l.borrower, l.lender, l.interest, l.duration, l.source]
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
    const num = (v) => (k === 'amount' ? amountValue(v) : Number(v));
    const blank = (v) => v == null || v === '' || (numeric && Number.isNaN(num(v)));
    const x = a[k], y = b[k];
    if (blank(x)) return blank(y) ? 0 : 1;
    if (blank(y)) return -1;
    return (numeric ? num(x) - num(y) : String(x).localeCompare(String(y))) * d;
  });
}

function render() {
  state.shown = sortRows(filtered());
  $('loans').querySelector('tbody').innerHTML = state.shown.map((l) => `
    <tr>
      <td><a href="loan.html?id=${encodeURIComponent(l.id)}">${esc(l.id)}</a></td>
      <td>${esc(l.period)}</td>
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

async function downloadCsv() {
  setStatus('Preparing CSV…');
  const notes = new Map((await fetchAll('loans', 'id,notes', selection().where)).map((r) => [r.id, r.notes]));
  const rows = state.shown.map((l) => ({ ...l, notes: notes.get(l.id) }));
  render();
  const cols = ['id', 'period', 'year', 'year_sort', 'place', 'amount', 'currency', 'borrower', 'lender', 'interest', 'duration', 'source', 'source_url', 'notes'];
  const cell = (v) => (v == null ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  const csv = [cols.join(','), ...rows.map((l) => cols.map((c) => cell(l[c])).join(','))].join('\n');
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
      ['Period', esc(l.period)],
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
  const FILTERS = ['f-search', 'f-period', 'f-place', 'f-currency', 'f-from', 'f-to'];
  FILTERS.forEach((id) => $(id).addEventListener('input', render));
  $('btn-reset').addEventListener('click', () => {
    FILTERS.forEach((id) => { $(id).value = ''; });
    render();
  });
  $('btn-csv').addEventListener('click', () => downloadCsv().catch((err) => setStatus(`Could not prepare CSV. ${err.message}`)));
  window.addEventListener('hashchange', showSelection);
  document.querySelectorAll('th[data-sort]').forEach((th) => th.addEventListener('click', () => {
    state.sortDir = state.sortKey === th.dataset.sort ? -state.sortDir : 1;
    state.sortKey = th.dataset.sort;
    render();
  }));
  load();
}
