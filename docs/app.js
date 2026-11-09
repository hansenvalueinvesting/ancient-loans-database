// The Ancient Loans Database — frontend for index.html (filters and loan table) and loan.html (one loan).
// Reads ald.csv from the repository (CSV_URL in config.js).

const { CSV_URL } = window.ALD_CONFIG;

const $ = (id) => document.getElementById(id);
const state = { all: [], picked: {}, sortKey: 'id', sortDir: 1, shown: [] };

// CSV columns (in order) and the columns shown in the table.
const COLS = ['id', 'place', 'date', 'duration (years)', 'borrower', 'lender', 'volume', 'currency', 'interest (%)', 'notes'];  // order set by Hansen (Nov 2026)
const LIST_COLS = COLS.slice(0, -1);

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

// Date field → first and last year it may fall in (BC negative); null if blank.
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
    [l.yearStart, l.yearEnd] = yearRange(l.date);
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
const MULTI = ['place'];
const BLANK = { place: '(location unknown)' };
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
// #from=100 BC&to=AD 100&place=Oxyrhynchus|Tebtunis (Arsinoite nome)&q=Sarapion

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

// Volumes are numbers, e.g. '100', '12 1/6', '2/3', or one number per unit '2; 4800' (units in currency).
// Sorts by the leading number; a sum starting with a lost part sorts last.
function volumeValue(s) {
  const m = String(s).match(/^(?:(\d+)(?: (\d+)\/(\d+))?|(\d+)\/(\d+))(?=[ ;]|$)/);
  if (!m) return NaN;
  return m[4] ? m[4] / m[5] : Number(m[1]) + (m[2] ? m[2] / m[3] : 0);
}
// Notes: line breaks kept; the first line 'Source: <citation> (<link>)' shows the citation as a link.
function fmtNotes(s) {
  return esc(s).replace(/^Source: (.+?) \((https?:\/\/[^\s)]+)\)$/m,
    (m, cite, url) => `Source: <a href="${url}" target="_blank" rel="noopener">${cite}</a>`).replace(/\n/g, '<br>');
}
const fmtVolume = (s) => String(s).replace(/(^| )(\d+)(?=$| [^\d])/g, (m, sp, w) => sp + Number(w).toLocaleString());

// One field of a loan as HTML.
function cellHtml(l, c) {
  if (c === 'volume') return fmtVolume(l.volume);
  if (c === 'notes') return fmtNotes(l.notes);
  return esc(l[c]);
}

// Column name as shown on the site: 'interest (%)' -> 'Interest (%)'; the place column is shown as 'Location'.
const colLabel = (c) => (c === 'place' ? 'Location' : c[0].toUpperCase() + c.slice(1));

function setStatus(msg) {
  $('status').textContent = msg;
}

// ---------- map and chart (index page) ----------

// Place -> [latitude, longitude, Pleiades ID]. A new place in ald.csv needs a line here (coordinates from
// its Pleiades record, reprPoint, which is [longitude, latitude]).
const PLACES = {
  'Oxyrhynchus': [28.542574, 30.65172, 736983],
  'Palosis': [28.675965, 30.798219, 736988],
  'Sinary': [28.77959, 30.771891, 737047],
  'Alexandria': [31.201435, 29.909773, 727070],
  'Constantinople': [41.006593, 28.965635, 520998],
  'Memphis': [29.849491, 31.255061, 736963],
  'Crocodilopolis': [29.314964, 30.839957, 736948],
  'Philadelphia': [29.453786, 31.08033, 737008],
  'Tebtunis': [29.107137, 30.762032, 737072],
  'Karanis': [29.518241, 30.903426, 736932],
  'Theadelphia': [29.348065, 30.49696, 737081],
  'Antinoopolis': [27.810563, 30.881003, 756518],
};

const viz = { map: null, layer: null, chart: null, rows: [] };

// Short description of one loan for tooltips.
const loanTip = (l) => [l.id, l.date, [fmtVolume(l.volume), l.currency].filter(Boolean).join(' '),
  [l.borrower && `borrower: ${l.borrower}`, l.lender && `lender: ${l.lender}`].filter(Boolean).join('; ')].filter(Boolean);
const openLoan = (l) => { location.href = `loan.html?id=${encodeURIComponent(l.id)}`; };

// Map: one dot per loan. Loans at the same place are laid out around it in a sunflower pattern (fixed spacing
// in screen pixels, redone on zoom), so every loan stays visible. Zoomed out, when the dots of a place would
// spread more than SPREAD_KM from it, they merge into one blob sized by the number of loans (relative to the largest place, capped at BLOB_MAX); clicking the blob
// zooms in until its loans show as dots. Click a dot = open the loan.
const SPREAD_KM = 2;
const DOT_GAP = 7, DOT_R = 3.5;                         // pixels
const BLOB_MIN = 5, BLOB_MAX = 21;                      // blob radius in pixels: the largest place gets BLOB_MAX, the rest scale by area
const spreadPx = (n) => DOT_GAP * Math.sqrt(Math.max(n - 1, 0)) + DOT_R;
const kmPerPx = (lat, z) => (40075.016686 * Math.cos(lat * Math.PI / 180)) / (256 * 2 ** z);
// A Leaflet map in el on the Digital Atlas of the Roman Empire (ancient place names).
function baseMap(el) {
  el.style.height = '420px';
  const m = L.map(el);
  L.tileLayer('https://dh.gu.se/tiles/imperium/{z}/{x}/{y}.png', {
    maxNativeZoom: 11, maxZoom: 15, attribution: '<a href="https://imperium.ahlfeldt.se/">Digital Atlas of the Roman Empire</a> (CC BY 4.0)',
  }).addTo(m);
  return m;
}
function drawMap(rows) {
  if (!window.L) return;
  if (!viz.map) {
    viz.map = baseMap($('map')).setView([29.5, 31], 6);
    viz.layer = L.layerGroup().addTo(viz.map);
    viz.map.on('zoomend', () => drawMap(viz.rows));
  }
  viz.rows = rows;
  viz.layer.clearLayers();
  const byPlace = new Map();
  rows.forEach((l) => { if (!byPlace.has(l.place)) byPlace.set(l.place, []); byPlace.get(l.place).push(l); });
  const nMax = Math.max(1, ...[...byPlace.values()].map((v) => v.length));
  let off = 0;
  byPlace.forEach((loans, place) => {
    const p = PLACES[place];
    if (!p) { off += loans.length; return; }
    const z = viz.map.getZoom();
    if (spreadPx(loans.length) * kmPerPx(p[0], z) > SPREAD_KM) {
      const n = loans.length;
      L.circleMarker([p[0], p[1]], { radius: BLOB_MIN + (BLOB_MAX - BLOB_MIN) * Math.sqrt(n / nMax), weight: 1, color: '#123', fillColor: '#3388ff', fillOpacity: 0.7 })
        .bindTooltip(`${esc(place)}: ${n.toLocaleString()} loan${n === 1 ? '' : 's'} (click to zoom in)`)
        .on('click', () => {
          let zz = z;
          while (zz < viz.map.getMaxZoom() && spreadPx(n) * kmPerPx(p[0], zz) > SPREAD_KM) zz++;
          viz.map.setView([p[0], p[1]], zz);
        })
        .addTo(viz.layer);
      return;
    }
    const c = viz.map.latLngToLayerPoint([p[0], p[1]]);
    loans.forEach((l, i) => {
      const r = DOT_GAP * Math.sqrt(i), a = i * 2.39996;   // golden angle
      const pos = viz.map.layerPointToLatLng(L.point(c.x + r * Math.cos(a), c.y + r * Math.sin(a)));
      L.circleMarker(pos, { radius: DOT_R, weight: 1, color: '#123', fillColor: '#3388ff', fillOpacity: 0.9 })
        .bindTooltip([esc(place), ...loanTip(l).map(esc)].join('<br>'))
        .on('click', () => openLoan(l))
        .addTo(viz.layer);
    });
  });
  $('map-note').textContent = off ? `${off.toLocaleString()} loan${off === 1 ? '' : 's'} not on the map (location unknown or not yet located).` : '';
}

// Chart: a timeline with one dot per loan at its exact date (a date range at its middle). Only loans with the
// same date (same year or same range) are stacked, so none hide each other. Click a dot = open the loan.
const BIN = 25;   // the full timeline starts and ends on a multiple of 25 years
function drawChart(rows) {
  if (!window.Chart) return;
  const dated = rows.filter((l) => l.yearStart != null)
    .map((l) => ({ l, mid: (l.yearStart + l.yearEnd) / 2 })).sort((a, b) => a.mid - b.mid);
  const undated = rows.length - dated.length;
  const stack = new Map();
  const points = dated.map(({ l, mid }) => {
    stack.set(l.date, (stack.get(l.date) || 0) + 1);
    return { x: mid, y: stack.get(l.date), loan: l };
  });
  // Axis in years, BC negative; ticks every 25 years (0 marks the turn from BC to AD).
  const yearLabel = (y) => (y < 0 ? `${-y} BC` : y === 0 ? 'BC | AD' : `AD ${y}`);
  const xs = points.map((p) => p.x);
  const ymax = Math.max(3, ...points.map((p) => p.y)) + 1;
  const xmin = xs.length ? Math.floor(Math.min(...xs) / BIN) * BIN : 0, xmax = xs.length ? Math.ceil(Math.max(...xs) / BIN) * BIN : BIN;
  if (!viz.chart) {
    $('chart-box').style.height = '420px';   // same height as the map beside it
    $('chart-box').style.position = 'relative';
    viz.chart = new Chart($('chart-time'), {
      type: 'scatter',
      data: { datasets: [{ data: points, pointRadius: 4, pointHoverRadius: 6, backgroundColor: '#3388ff' }] },
      options: {
        maintainAspectRatio: false, animation: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => loanTip(ctx.raw.loan) } },
          // Zoom along the timeline: mouse wheel or pinch; drag to pan; not beyond the full range of the data.
          zoom: {
            zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'x' },
            pan: { enabled: true, mode: 'x' },
            limits: { x: { min: 'original', max: 'original', minRange: 2 } },
          },
        },
        onClick: (e, els) => { if (els.length) openLoan(els[0].element.$context.raw.loan); },
        scales: {
          x: { min: xmin, max: xmax, ticks: { maxTicksLimit: 25, callback: (v) => (Number.isInteger(v) ? yearLabel(v) : '') },
               title: { display: true, text: 'Timeline' } },
          y: { min: 0, max: ymax, ticks: { stepSize: 1, precision: 0 }, title: { display: true, text: '# of loans' } },
        },
      },
    });
  } else {
    viz.chart.data.datasets[0].data = points;
    Object.assign(viz.chart.options.scales.x, { min: xmin, max: xmax });
    viz.chart.options.scales.y.max = ymax;
    viz.chart.update();
    if (viz.chart.resetZoom) viz.chart.resetZoom('none');
  }
  $('chart-note').textContent = undated ? `${undated.toLocaleString()} undated loan${undated === 1 ? '' : 's'} not shown.` : '';
}

// ---------- filtering & table ----------

// A loan matches when it is in any picked value of each multi-select filter, its year range
// overlaps the year filter, and it matches the search (see groups below).
function filtered() {
  // Search: ',' narrows (a loan must contain every term of a group), ';' adds (a loan may match any group).
  // 'X,y' = loans with both X and y; 'X;y' = loans with X plus loans with y.
  const groups = $('f-search').value.toLowerCase().split(';')
    .map((g) => g.split(',').map((x) => x.trim()).filter(Boolean)).filter((g) => g.length);
  const from = parseYear($('f-from').value), to = parseYear($('f-to').value);
  return state.all.filter((l) => {
    if (MULTI.some((col) => state.picked[col].size && !state.picked[col].has(l[col]))) return false;
    if (from != null && (l.yearEnd == null || l.yearEnd < from)) return false;
    if (to != null && (l.yearStart == null || l.yearStart > to)) return false;
    if (groups.length) {
      const text = LIST_COLS.map((c) => l[c]).join(' ').toLowerCase();
      if (!groups.some((g) => g.every((x) => text.includes(x)))) return false;
    }
    return true;
  });
}

function sortRows(rows) {
  const { sortKey: k, sortDir: d } = state;
  const numeric = k === 'date' || k === 'volume';
  const num = (l) => (k === 'date' ? (l.yearStart ?? NaN) : volumeValue(l.volume));
  return rows.sort((a, b) => {
    const x = numeric ? num(a) : a[k], y = numeric ? num(b) : b[k];
    const blank = (v) => v === '' || Number.isNaN(v);
    if (blank(x)) return blank(y) ? 0 : 1;
    if (blank(y)) return -1;
    return (numeric ? x - y : String(x).localeCompare(String(y), undefined, { numeric: true })) * d;
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
  drawMap(state.shown);
  drawChart(state.shown);
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
  const ye = state.all.map((l) => l.yearEnd).filter((y) => y != null);
  if (ys.length) $('f-from').placeholder = fmtYear(Math.min(...ys));
  if (ye.length) $('f-to').placeholder = fmtYear(Math.max(...ye));
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
    $('loan').innerHTML = COLS.slice(1).map((c) =>
      `<tr><th align="left">${colLabel(c)}</th><td>${cellHtml(l, c)}${c === 'place' ? '<div id="loan-map"></div>' : ''}</td></tr>`).join('');
    // Under the location: a map with the place marked (if its coordinates are known).
    const p = PLACES[l.place];
    if (p && window.L) {
      const m = baseMap($('loan-map')).setView([p[0], p[1]], 9);
      L.circleMarker([p[0], p[1]], { radius: 7, weight: 1, color: '#123', fillColor: '#3388ff', fillOpacity: 0.9 })
        .bindTooltip(esc(l.place)).addTo(m);
    }
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
  $('btn-zoom').addEventListener('click', () => { if (viz.chart && viz.chart.resetZoom) viz.chart.resetZoom(); });
  document.querySelectorAll('th[data-sort]').forEach((th) => th.addEventListener('click', () => {
    state.sortDir = state.sortKey === th.dataset.sort ? -state.sortDir : 1;
    state.sortKey = th.dataset.sort;
    render();
  }));
  load();
}
