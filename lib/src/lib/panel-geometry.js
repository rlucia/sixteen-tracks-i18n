/* The Tonverk front panel as data. Read off the manual's §3.1 figure (numbered
   1–29) and its text; scaled 1.6x into a 1000x620 box. Where the figure and the
   owner's unit disagree, the unit wins and the colophon records it. Imported by
   the build (to refuse a step naming a key that does not exist) and by the
   browser (to draw). No DOM here. */
export const VIEWBOX = '0 0 1000 620';
/* Every <use> of the panel symbol names this viewport — width/height/x/y — or
   a <use> of a <symbol> with none takes a 100%x100% viewport of the REFERRING
   svg's own viewBox instead, scaling the whole panel into it rather than
   drawing it 1:1. One definition so the map, the crops and the hero cannot
   drift apart on it. */
export const PANEL_USE = 'x="0" y="0" width="1000" height="620"';
export const SCREEN = { x: 360, y: 96, w: 240, h: 120 };
/* The hub's live screen sits inside the drawn screen's bezel: the SCREEN box
   inset 6 units. Read by the build (the first frame, in the hero partial) and
   by src/pages/index.js (every frame after it), so the two agree by construction. */
export const HERO_SCREEN = { x: SCREEN.x + 6, y: SCREEN.y + 6, w: SCREEN.w - 12, h: SCREEN.h - 12 };

const knob = (id, x, y, r, label) => ({ id, kind: 'knob', x, y, r, label });
const fn = (id, x, y, label, sec) => ({ id, kind: 'fnkey', x, y, r: 12, label, sec });
const key = (id, x, y, label, sec, w = 42, h = 26) => ({ id, kind: 'key', x, y, w, h, label, sec });
const top = (id, x, label, sec) => ({ id, kind: 'kbd-top', x, y: 381, w: 34, h: 34, label, sec });
const bot = (id, x, label) => ({ id, kind: 'kbd-bottom', x, y: 461, w: 40, h: 36, label });
const trig = n => ({ id: `TRIG ${n}`, kind: 'trig', n, x: 69 + 56.5 * (n - 1), y: 549, w: 42, h: 44, label: String(n) });

export const CONTROLS = [
  knob('MAIN VOLUME', 56, 112, 26, 'Volume'),
  knob('LEVEL/DATA', 56, 197, 26, 'Level/Data'),
  fn('PRESET', 125, 125, 'PRESET', 'File'),
  fn('SETTINGS', 182, 125, 'SETTINGS', 'Save Proj'),
  fn('SAMPLING', 240, 125, 'SAMPLING', 'Samples'),
  fn('TEMPO', 298, 125, 'TEMPO', 'Tap Tempo'),
  fn('ARP', 125, 186, 'ARP', 'On/Off'),
  fn('CHORD', 182, 186, 'CHORD', 'On/Off'),
  fn('SONG', 240, 186, 'SONG', 'On/Off'),
  ...['A', 'B', 'C', 'D'].map((l, i) => knob(l, 656 + 91 * i, 115, 22, l)),
  ...['E', 'F', 'G', 'H'].map((l, i) => knob(l, 656 + 91 * i, 200, 22, l)),
  key('FUNC', 69, 299, 'FUNC', 'Perform'),
  key('TRK', 141, 299, 'TRK', ''),
  key('PTN', 213, 299, 'PTN', 'Transition'),
  key('MUTE', 285, 299, 'MUTE', 'Routing'),
  key('RECORD', 405, 299, '●', 'Copy'),
  key('PLAY', 477, 299, '▶', 'Clear'),
  key('STOP', 549, 299, '■', 'Paste'),
  key('TRIG', 656, 299, 'TRIG', 'Setup', 40, 24),
  key('SRC', 709, 299, 'SRC', 'Setup', 40, 24),
  key('FLTR', 765, 299, 'FLTR', 'Setup', 40, 24),
  key('AMP', 819, 299, 'AMP', 'Setup', 40, 24),
  key('FX', 875, 299, 'FX', 'Setup', 40, 24),
  key('MOD', 931, 299, 'MOD', 'Setup', 40, 24),
  top('KEYBOARD C#1', 99, 'C#1', 'Reload'),
  top('KEYBOARD D#1', 155, 'D#1', 'Save'),
  top('KEYBOARD F#1', 267, 'F#1', 'Metronome'),
  top('KEYBOARD G#1', 323, 'G#1', 'Quantize'),
  top('KEYBOARD A#1', 379, 'A#1', 'Scale'),
  key('STEP EDIT', 464, 381, 'STEP EDIT', '', 46, 30),
  key('+', 536, 381, '+', 'Transpose', 30, 30),
  key('YES', 659, 397, 'YES', 'Redo', 34, 28),
  key('UP', 776, 397, '∧', 'Sequence Lane', 34, 28),
  key('FILL', 915, 397, 'FILL', 'Fill Edit', 40, 28),
  key('NO', 659, 451, 'NO', 'Undo', 34, 28),
  key('LEFT', 715, 451, '<', 'µTime−', 34, 28),
  key('DOWN', 776, 451, '∨', 'Trig Mode', 34, 28),
  key('RIGHT', 837, 451, '>', 'µTime+', 34, 28),
  key('PAGE', 915, 451, 'PAGE', 'Page Setup', 40, 28),
  ...['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2'].map((l, i) => bot(`KEYBOARD ${l}`, 72 + 56 * i, l)),
  key('-', 536, 461, '−', 'Transform', 30, 30),
  ...Array.from({ length: 16 }, (_, i) => trig(i + 1)),
];

/* the <KEYBOARD OCTAVE> LEDs beside [+], +3 … −3 */
export const OCTAVE_LEDS = [3, 2, 1, 0, -1, -2, -3].map((n, i) => ({ x: 584, y: 356 + i * 14, label: n > 0 ? `+${n}` : String(n) }));

export const GROUPS = {
  'TRIG 1-16': CONTROLS.filter(c => c.kind === 'trig').map(c => c.id),
  'TRIG 1-8': CONTROLS.filter(c => c.kind === 'trig' && c.n <= 8).map(c => c.id),
  'TRIG 1-12': CONTROLS.filter(c => c.kind === 'trig' && c.n <= 12).map(c => c.id),
  'TRIG 9-16': CONTROLS.filter(c => c.kind === 'trig' && c.n >= 9).map(c => c.id),
  'KEYBOARD': CONTROLS.filter(c => c.kind.startsWith('kbd')).map(c => c.id),
  'KEYBOARD TOP': CONTROLS.filter(c => c.kind === 'kbd-top').map(c => c.id),
  'KEYBOARD BOTTOM': CONTROLS.filter(c => c.kind === 'kbd-bottom').map(c => c.id),
  'SUBTRACKS': CONTROLS.filter(c => c.kind === 'kbd-bottom').map(c => c.id),
  'DATA ENTRY': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  'ARROWS': ['UP', 'DOWN', 'LEFT', 'RIGHT'],
  'PARAMETER PAGE': ['TRIG', 'SRC', 'FLTR', 'AMP', 'FX', 'MOD'],
};
/* labels under the trig row, as printed: Tracks 1–8, Buses 9–12, Sends 13–15, Mix 16 */
export const TRIG_ROW_LABELS = [
  { from: 1, to: 8, label: 'Tracks' }, { from: 9, to: 12, label: 'Buses' },
  { from: 13, to: 15, label: 'Sends' }, { from: 16, to: 16, label: 'Mix' },
];
/* Where a control's LED sits, and how big it is, in panel coordinates. The
   drawing (panel-art.js) paints it unlit; a step's crop paints the same spot in
   the hardware colour the step names. One definition so the two cannot drift —
   they were two literals, and a crop's disc that misses its cap by three units
   is a picture that lies about which key lights. A knob has no LED. */
export const LED_R = 2.6;
export function ledPos(c) {
  if (!c || c.kind === 'knob') return null;
  return c.kind === 'fnkey' ? { cx: c.x, cy: c.y - c.r + 3 } : { cx: c.x, cy: c.y - c.h / 2 + 5 };
}

export const KEY_IDS = new Set(CONTROLS.map(c => c.id));
const byId = new Map(CONTROLS.map(c => [c.id, c]));
export const controlById = id => byId.get(id);
