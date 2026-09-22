/* The crop window: which part of the panel a step's picture shows. Pure; used by
   the build (to cut every step's crop) and by check.mjs (to prove the cut
   matches the step's keys). Rule: the bounding box of the named keys, padded a
   control's height above and below and 40 units either side, clamped to the
   panel; at least 300 x 120; the whole panel when nothing is named or the box
   is taller than 70% of the panel.

   A window wider than HALF the panel (w > 500) is `wide`, and one wider than
   three quarters (w > 750) is `xwide` too. Drawn in a side column that is too
   narrow for it, a crop that wide is a close-up SMALLER than the map above it —
   a negative. So session.css reads `data-wide` / `data-xwide` and lets the crop
   leave the side column and span the step only when the column really is too
   narrow for that tier (container queries on .steps); on a wide screen every
   crop sits beside its text, at up to 1:1. The whole panel is both by
   definition. Keys, clip and spotlight are unaffected: the tiers are about
   where the picture is placed, not what it shows. */
import { GROUPS, KEY_IDS, CONTROLS, controlById } from './panel-geometry.js';

export const PANEL = { w: 1000, h: 620 };
const MIN = { w: 300, h: 120 };
const PAD_X = 40;
/* wider than half the panel and the crop stops being a close-up; wider than
   three quarters and only a column near the panel's own width can hold it */
const WIDE = PANEL.w / 2;
const XWIDE = PANEL.w * 0.75;

/* Group expansion, in ONE place. `TRIG 1-16` is sixteen keys; a list that names
   it means all sixteen, in order, without repeats. The parser, the renderer and
   check.mjs all had to agree about that, and for a while the parser had its own
   copy — two implementations of one rule, either free to drift. This is the
   copy; scripts/lib/session-parser.mjs re-exports it. */
export const expandKeys = (ids, groups = GROUPS) => {
  const out = [];
  for (const id of ids) for (const k of (groups[id] || [id])) if (!out.includes(k)) out.push(k);
  return out;
};

/* the cap alone: the window is computed from these */
export function keyRects(ids) {
  return expandKeys(ids).map(id => {
    if (!KEY_IDS.has(id)) throw new Error(`crop: unknown key "${id}"`);
    const c = controlById(id);
    if (c.r != null) return { id, x: c.x - c.r, y: c.y - c.r, w: c.r * 2, h: c.r * 2 };
    return { id, x: c.x - c.w / 2, y: c.y - c.h / 2, w: c.w, h: c.h };
  });
}

/* The whole control: the cap AND its printed name (and the mint secondary
   label under it), as panel-art.js lays them out — the label sits under the
   cap, 11px mono (13px bold on a trig key), the secondary 8.5px. This is what a
   crop LIGHTS, and — for a key to press — what it rings: a key without its
   name is a lit thing with nothing to call it. Text width is estimated from the character count at the font's advance; a
   few units over is harmless, under would clip a letter. */
const ADV = { capText: 7, trigText: 8.2, capSec: 5.4 };
export function controlRects(ids) {
  return keyRects(ids).map(r => {
    const c = controlById(r.id);
    const trig = c.kind === 'trig';
    const nameW = c.label.length * (trig ? ADV.trigText : ADV.capText);
    const secW = c.sec ? c.sec.length * ADV.capSec : 0;
    const w = Math.max(r.w, nameW, secW);
    let bottom;
    if (c.kind === 'knob') bottom = c.y + c.r + 13 + 3;
    else if (c.kind === 'fnkey') bottom = c.y + c.r + (c.sec ? 21 : 11) + 3;
    else bottom = r.y + r.h + 12 + (c.sec ? 10 : 0) + 3;
    return { id: r.id, x: c.x - w / 2, y: r.y, w, h: bottom - r.y };
  });
}

const whole = () => ({ x: 0, y: 0, w: PANEL.w, h: PANEL.h, whole: true, wide: true, xwide: true });
export function cropWindow(ids) {
  const rects = keyRects(ids);
  if (!rects.length) return whole();
  const x1 = Math.min(...rects.map(r => r.x)), y1 = Math.min(...rects.map(r => r.y));
  const x2 = Math.max(...rects.map(r => r.x + r.w)), y2 = Math.max(...rects.map(r => r.y + r.h));
  const padY = Math.max(...rects.map(r => r.h));
  if (y2 - y1 > PANEL.h * 0.7) return whole();
  let x = x1 - PAD_X, y = y1 - padY, w = x2 - x1 + PAD_X * 2, h = y2 - y1 + padY * 2;
  if (w < MIN.w) { x -= (MIN.w - w) / 2; w = MIN.w; }
  if (h < MIN.h) { y -= (MIN.h - h) / 2; h = MIN.h; }
  x = Math.max(0, Math.min(x, PANEL.w - w)); y = Math.max(0, Math.min(y, PANEL.h - h));
  w = Math.min(w, PANEL.w - x); h = Math.min(h, PANEL.h - y);
  const W = Math.round(w);
  return { x: Math.round(x), y: Math.round(y), w: W, h: Math.round(h), whole: false, wide: W > WIDE, xwide: W > XWIDE };
}

const ROW_BANDS = [[0, 250], [250, 330], [330, 500], [500, 620]];
/* English defaults, for the tests and for callers with no strings; the build
   passes the language's own words (render-session.mjs regionNamesFrom) */
export const REGION_NAMES = {
  rows: ['the function keys and knobs', 'the FUNC, transport and parameter-page row', 'the keyboard rows', 'the trig row'],
  whole: 'the whole panel', comma: ', ', and: ' and ',
};
export function regionName(win, names = REGION_NAMES) {
  if (win.whole) return names.whole;
  /* a row counts when a named control's centre could sit in it: the window's
     own padding must not pull in the row above or below. A margin of 20 still
     let a single-row window (e.g. RECORD, padded to the 120-unit minimum
     height) reach 19 units into the next row band and falsely add it; 40 —
     matching PAD_X, the horizontal pad — shrinks back far enough to exclude a
     row the padding alone pulled in, while a window that truly spans two rows
     (e.g. TRK + TRIG 1) still spans every row between them, padding or not. */
  const inner = { y1: win.y + 40, y2: win.y + win.h - 40 };
  const found = ROW_BANDS.map(([a, b], i) => (inner.y1 < b && inner.y2 > a) ? names.rows[i] : null).filter(Boolean);
  return found.length <= 1 ? found[0] || names.whole
    : found.slice(0, -1).join(names.comma) + names.and + found.at(-1);
}

/* The lit TILES of a crop: one rounded rectangle per named control — or per
   GROUP of named controls that sit together — the caps and their names inside,
   which the clip lights and, for keys to press, the ring borders. Padded 10
   round a control they would overlap: the panel is tight, a secondary label
   ends two units above the next row's cap and the keyboard's caps sit 15
   apart. So the tiles are laid out, not just padded:
   1. a tile retreats from every OTHER control's cap it would cover, on the axis
      that costs it least, so a lit tile never spills onto an unnamed neighbour;
   2. named tiles that would touch MERGE into one tile — the arrows, a keyboard
      row, TRIG 1-8 are one lit group, not a mosaic — unless the merged box
      would cover an unnamed cap, in which case they stay apart;
   3. two tiles left apart split the room between them, each giving up half
      and the free one taking what the other cannot give, so GAP stays between
      them; and a tile never gives up its own caps.
   Order of ids is the order of the tiles, so the result is the same on every
   build (check.mjs cannot recompute the clip; a test proves the rule on the
   tight groups). A merged tile's id is its keys joined with `|`. */
const PAD = 10, GAP = 4;
const capOf = c => c.r != null ? { x: c.x - c.r, y: c.y - c.r, w: c.r * 2, h: c.r * 2 } : { x: c.x - c.w / 2, y: c.y - c.h / 2, w: c.w, h: c.h };
const covers = (t, o) => t.x < o.x + o.w && o.x < t.x + t.w && t.y < o.y + o.h && o.y < t.y + t.h;
/* how far t must retreat on x and on y for a gap of g from o (≤ 0: none needed) */
const need = (t, o, g) => ({
  x: Math.min(t.x + t.w, o.x + o.w) - Math.max(t.x, o.x) + g,
  y: Math.min(t.y + t.h, o.y + o.h) - Math.max(t.y, o.y) + g,
});
const union = (a, b) => { const x = Math.min(a.x, b.x), y = Math.min(a.y, b.y); return { x, y, w: Math.max(a.x + a.w, b.x + b.w) - x, h: Math.max(a.y + a.h, b.y + b.h) - y }; };
/* pull t's edge that faces o back by d on the given axis, never past t's own
   caps; returns how far it actually moved */
function retreat(t, o, axis, d) {
  const c = t.caps.reduce(union);
  if (axis === 'x') {
    if (o.x + o.w / 2 > t.x + t.w / 2) { const w = Math.max(c.x + c.w - t.x + 1, t.w - d); const m = t.w - w; t.w = w; return m; }
    const nx = Math.min(c.x - 1, t.x + d); const m = nx - t.x; t.w -= m; t.x = nx; return m;
  }
  if (o.y + o.h / 2 > t.y + t.h / 2) { const h = Math.max(c.y + c.h - t.y + 1, t.h - d); const m = t.h - h; t.h = h; return m; }
  const ny = Math.min(c.y - 1, t.y + d); const m = ny - t.y; t.h -= m; t.y = ny; return m;
}
export function tiles(ids) {
  const named = expandKeys(ids);
  const isNamed = new Set(named);
  const others = CONTROLS.filter(c => !isNamed.has(c.id)).map(capOf);
  let out = controlRects(named).map(r => ({ keys: [r.id], x: r.x - PAD, y: r.y - PAD, w: r.w + PAD * 2, h: r.h + PAD * 2, caps: [capOf(controlById(r.id))] }));
  /* 1. off every unnamed cap */
  for (const t of out) for (const o of others) {
    const n = need(t, o, GAP);
    if (n.x <= 0 || n.y <= 0) continue;
    retreat(t, o, n.x <= n.y ? 'x' : 'y', n.x <= n.y ? n.x : n.y);
  }
  /* 2. neighbours become one tile, unless the box would take in a stranger */
  for (let merged = true; merged;) {
    merged = false;
    for (let i = 0; i < out.length && !merged; i++) for (let j = i + 1; j < out.length && !merged; j++) {
      const a = out[i], b = out[j], n = need(a, b, GAP);
      if (n.x <= 0 || n.y <= 0) continue;
      const u = union(a, b);
      if (others.some(o => covers(u, o))) continue;
      out.splice(j, 1); out.splice(i, 1, { keys: [...a.keys, ...b.keys], ...u, caps: [...a.caps, ...b.caps] });
      merged = true;
    }
  }
  /* 3. what is still apart keeps its gap */
  for (let pass = 0; pass < 3; pass++) for (let i = 0; i < out.length; i++) for (let j = i + 1; j < out.length; j++) {
    const a = out[i], b = out[j], n = need(a, b, GAP);
    if (n.x <= 0 || n.y <= 0) continue;
    const axis = n.x <= n.y ? 'x' : 'y', d = axis === 'x' ? n.x : n.y;
    const ma = retreat(a, b, axis, d / 2);
    const mb = retreat(b, a, axis, d - ma);
    if (ma + mb < d) retreat(a, b, axis, d - ma - mb);
  }
  return out.map(({ keys, x, y, w, h }) => ({ id: keys.join('|'), keys, x: +x.toFixed(1), y: +y.toFixed(1), w: +w.toFixed(1), h: +h.toFixed(1) }));
}
