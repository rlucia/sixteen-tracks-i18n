import { parseFrontMatter, parseKeyLines, parseValue } from './frontmatter.mjs';
import { expandKeys } from '../../src/lib/crop.js';
import { KEY_TOKEN } from '../../src/lib/key-token.js';

/* A section is numbered (§10.10.4) or lettered (§A.2.3): the appendices are the
   manual's account of the machines, and a step that teaches Subtracks has
   nowhere else to point. The § is not optional — "manual A.2.3" is refused,
   because the mark is a citation and not a sentence. */
export const SOURCE_RE = /^(manual §(?:\d+|[A-Z])(?:\.\d+)*(, §(?:\d+|[A-Z])(?:\.\d+)*)*|community https?:\/\/\S+)$/;
export const SIMULATORS = ['conditions', 'routing', 'containers', 'length'];
export const MODES = ['any', 'playback', 'grid-recording', 'live-recording', 'step-edit'];
export const LED_COLOURS = ['red', 'yellow', 'white', 'green', 'magenta', 'cyan', 'off'];
const SECTIONS = { 'What you now have': 'now', 'Explore further': 'explore', 'Next': 'next' };
export const RANGE_PHRASE = 'from [TRIG {a}] to [TRIG {b}]';
/* "von [TRIG {a}] bis [TRIG {b}]" -> /von \[TRIG (\d+)\] bis \[TRIG (\d+)\]/g */
export const rangeRegex = phrase => new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace('\\{a\\}', '(\\d+)').replace('\\{b\\}', '(\\d+)'), 'g');

/* One implementation of group expansion, and it lives with the geometry that
   defines the groups. render-session.mjs already imports src/lib/crop.js from
   here, so the direction is settled; re-exported so every caller keeps its
   `expandKeys(list, groups)` spelling and there is nothing to drift. A bare
   `export { x } from` would NOT bind the name in this module's own scope, and
   validateSession below calls it. */
export { expandKeys };

/** Parse one session file into meta, steps and closing sections. Throws on shape errors. */
export function parseSession(text, file) {
  let meta, body, bodyLine;
  try {
    ({ data: meta, body, bodyLine } = parseFrontMatter(text));
  } catch (err) {
    throw new Error(`${file}: ${err.message}`);
  }
  const lines = body.split(/\r?\n/);
  const steps = [];
  const sections = { now: '', explore: '', next: '' };
  const sectionLines = {};
  let cur = null;            // current step
  let section = null;        // current closing section key
  let block = null;          // { kind, lines }
  const flushBlock = () => {
    if (!block) return;
    if (!cur) throw new Error(`${file}: :::${block.kind} outside a step`);
    if (block.kind === 'checkpoint') {
      let kv;
      try {
        kv = parseKeyLines(block.lines);
      } catch (err) {
        throw new Error(`${file} step ${cur.n} "${cur.title}": ${err.message}`);
      }
      cur.checkpoints.push({ screen: kv.screen ?? null, keys16: kv.keys16 ?? null, hear: kv.hear ?? null, recover: kv.recover ?? null });
    } else if (block.kind === 'note') {
      cur.notes.push(block.lines.join('\n').trim());
    }
    block = null;
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const step = line.match(/^## Step:\s*(.+)$/);
    const sec = line.match(/^## (.+)$/);
    if (block) {
      if (/^:::\s*$/.test(line)) { flushBlock(); continue; }
      block.lines.push(line); continue;
    }
    if (step) {
      cur = { n: steps.length + 1, title: step[1].trim(), header: [], prose: [], checkpoints: [], notes: [], simulatorHere: false, headerDone: false, line: bodyLine + i };
      steps.push(cur); section = null; continue;
    }
    if (sec) {
      const key = SECTIONS[sec[1].trim()];
      if (!key) throw new Error(`${file}: unknown section "## ${sec[1]}" (steps are "## Step: …")`);
      section = key; cur = null; sectionLines[key] = bodyLine + i; continue;
    }
    if (section) { sections[section] += line + '\n'; continue; }
    if (!cur) { if (line.trim()) throw new Error(`${file}: text before the first step: "${line}"`); continue; }
    if (!cur.headerDone) {
      if (line.trim() === '') { cur.headerDone = true; continue; }
      cur.header.push(line); continue;
    }
    const open = line.match(/^:::(checkpoint|note|simulator)\s*$/);
    if (open) {
      if (open[1] === 'simulator') { cur.simulatorHere = true; continue; }
      block = { kind: open[1], lines: [] }; continue;
    }
    cur.prose.push(line);
  }
  if (block) throw new Error(`${file}: unterminated :::${block.kind}`);
  const out = steps.map(s => {
    let h;
    try {
      h = parseKeyLines(s.header);
    } catch (err) {
      throw new Error(`${file} step ${s.n} "${s.title}": ${err.message}`);
    }
    const keys = h.keys == null ? [] : Array.isArray(h.keys) ? h.keys : [h.keys];
    return {
      n: s.n, title: s.title, keys: keys.map(String), leds: h.leds ?? {},
      source: h.source == null ? '' : String(h.source), mode: h.mode == null ? 'any' : String(h.mode),
      new: h.new == null ? null : String(h.new), checked: h.checked == null ? null : String(h.checked),
      prose: s.prose.join('\n').trim(),
      checkpoint: s.checkpoints[0] ?? null, checkpoints: s.checkpoints, notes: s.notes, simulatorHere: s.simulatorHere,
      line: s.line,
    };
  });
  for (const k of Object.keys(sections)) sections[k] = sections[k].trim();
  return { file, meta, steps: out, sections, sectionLines };
}

/** Every rule the build refuses (§9.1 and this plan). Returns [] when valid. */
export function validateSession(s, ctx) {
  const e = [];
  const f = s.file;
  const m = s.meta;
  for (const k of ['number', 'chapter', 'slug', 'title', 'goal', 'needs', 'teaches', 'ends']) if (m[k] == null) e.push(`${f}: front matter lacks "${k}"`);
  if (!Number.isInteger(m.number)) e.push(`${f}: number must be an integer`);
  if (!ctx.chapters.has(m.chapter)) e.push(`${f}: chapter "${m.chapter}" is not in content/chapters.json`);
  if (!/^[a-z0-9-]+$/.test(String(m.slug))) e.push(`${f}: slug "${m.slug}" must be lowercase-with-dashes`);
  if (!Array.isArray(m.needs) || !m.needs.length) e.push(`${f}: needs must be a non-empty list`);
  if (!Array.isArray(m.teaches)) e.push(`${f}: teaches must be a list`);
  if (m.simulator != null && !SIMULATORS.includes(m.simulator)) e.push(`${f}: simulator "${m.simulator}" is not one of ${SIMULATORS.join(', ')} or null`);
  if (!m.ends?.keys16 || typeof m.ends.keys16 !== 'object') e.push(`${f}: ends.keys16 is required (the session fingerprint)`);
  else checkKeys16(m.ends.keys16, `${f}: ends.keys16`, e);
  if (!s.steps.length) e.push(`${f}: no steps`);
  const markers = s.steps.filter(st => st.simulatorHere).length;
  if (m.simulator && markers !== 1) e.push(`${f}: simulator "${m.simulator}" is set but there is ${markers === 0 ? 'no' : 'more than one'} :::simulator marker`);
  if (!m.simulator && markers) e.push(`${f}: a :::simulator marker but simulator is null`);
  const tokenRule = (text, where) => {
    for (const mm of String(text ?? '').matchAll(KEY_TOKEN))
      if (!ctx.keyIds.has(mm[1]) && !ctx.groups[mm[1]]) e.push(`${where}: [${mm[1]}] is not a key the panel has — key names stay as printed on the unit`);
  };
  tokenRule(m.goal, `${f} front matter`);
  for (const n of (Array.isArray(m.needs) ? m.needs : [])) tokenRule(n, `${f} front matter`);
  for (const st of s.steps) tokenRule([st.prose, ...st.notes, st.checkpoint?.hear, st.checkpoint?.recover].join('\n'), `${f} step ${st.n} "${st.title}"`);
  for (const [k, label] of Object.entries({ now: 'What you now have', explore: 'Explore further', next: 'Next' })) tokenRule(s.sections[k], `${f} section "${label}"`);
  for (const st of s.steps) {
    const at = `${f} step ${st.n} "${st.title}"`;
    for (const k of expandKeys(st.keys, ctx.groups)) if (!ctx.keyIds.has(k)) e.push(`${at}: unknown key "${k}"`);
    for (const [k, c] of Object.entries(st.leds)) {
      if (!ctx.keyIds.has(k)) e.push(`${at}: led on unknown key "${k}"`);
      if (!LED_COLOURS.includes(c)) e.push(`${at}: led colour "${c}" is not one of ${LED_COLOURS.join(', ')}`);
    }
    if (!SOURCE_RE.test(st.source)) e.push(`${at}: source "${st.source}" must be "manual §n.n" or "community <url>"`);
    if (!(MODES.includes(st.mode) || /^menu:[A-Z][A-Z /]+$/.test(st.mode))) e.push(`${at}: mode "${st.mode}" is not one of ${MODES.join(', ')} or menu:<NAME>`);
    if (st.new != null && st.new !== '1.4.0') e.push(`${at}: new: ${st.new} — only 1.4.0 is a release this site describes`);
    /* `checked` is the second axis: `source` says where the words come from and
       stays, `checked` says a person has done the step on a unit. A step carries
       both, so a reader of a checked step can still open the manual at the
       section it was written from. */
    if (st.checked != null && st.checked !== 'yes') e.push(`${at}: checked: ${st.checked} — the only value is "yes", and it means someone has done this step on a unit`);
    if (st.checkpoints.length > 1) e.push(`${at}: more than one checkpoint`);
    if (!st.prose) e.push(`${at}: no instruction text`);
    if (st.checkpoint?.keys16) checkKeys16(st.checkpoint.keys16, at + ' checkpoint.keys16', e);
    /* The crop rings every key in `keys:`; the reader is told what to press by
       the sentence. The two must agree, or the picture rings a key the words
       never mention — session 2 step 3 ringed UP and DOWN for "Then PRESET, a
       closed hi-hat, YES", and the owner asked why. A key counts as named when
       the step's text (prose, notes, the checkpoint's hear/recover) carries it
       as a [KEY] token, or a group that expands to it, or lies inside a range
       written "from [TRIG a] to [TRIG b]". */
    const text = [st.prose, ...(st.notes || []), st.checkpoint?.hear || '', st.checkpoint?.recover || ''].join(' ');
    const named = new Set([...text.matchAll(/\[([^\]\n]+)\]/g)].flatMap(mm => expandKeys([mm[1]], ctx.groups)));
    /* whitespace-normalised: a range phrase wrapped across two lines of prose still counts */
    for (const mm of text.replace(/\s+/g, ' ').matchAll(rangeRegex(ctx.rangePhrase ?? RANGE_PHRASE)))
      for (let i = +mm[1]; i <= +mm[2]; i++) named.add(`TRIG ${i}`);
    const unnamed = expandKeys(st.keys, ctx.groups).filter(k => ctx.keyIds.has(k) && !named.has(k));
    if (unnamed.length) e.push(`${at}: keys: lists ${unnamed.join(', ')} but the step's text never names ${unnamed.length > 1 ? 'them' : 'it'} — the crop would ring a key the sentence does not mention`);
  }
  for (const [k, label] of Object.entries({ now: 'What you now have', explore: 'Explore further', next: 'Next' }))
    if (!s.sections[k]) e.push(`${f}: missing section "${label}"`);
  return e;
}
function checkKeys16(obj, at, e) {
  for (const [k, c] of Object.entries(obj)) {
    if (!/^([1-9]|1[0-6])$/.test(k)) e.push(`${at}: key "${k}" is not 1–16`);
    if (!LED_COLOURS.includes(c)) e.push(`${at}: colour "${c}" is not one of ${LED_COLOURS.join(', ')}`);
  }
}
