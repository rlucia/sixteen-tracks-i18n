/* A YAML-flow subset, written here rather than pulled in: the session files use
   scalars, [a, b] arrays, { k: v } objects (nested), block lists of "- item", and
   " # comments". Nothing else, and the build refuses anything else loudly. */

function stripComment(s) {
  const i = s.search(/(^|\s)#/);
  return (i === -1 ? s : s.slice(0, i)).trim();
}
function scalar(raw) {
  const s = raw.trim();
  if (s === '' || s === 'null' || s === '~') return null;
  if (s === 'true') return true;
  if (s === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  return s;
}

/* A top-level value opens a flow collection only when its FIRST bracket also
   closes the LAST thing in the string (ignoring brackets inside quotes): once
   depth returns to zero, everything after must be blank. "[TRIG 2] plays the
   snare; [TRIG 1] still plays the kick." closes its first bracket at index 8
   and then keeps going, so it is prose, brackets and all — not an array. A
   collection that never closes (depth never returns to zero) is still treated
   as an attempted collection, so it reaches the parser below and throws
   "unterminated" instead of silently becoming a scalar. */
function looksLikeCollection(src) {
  if (!/^[[{]/.test(src)) return false;
  let depth = 0;
  let inQuote = null;
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (inQuote) { if (ch === inQuote) inQuote = null; continue; }
    if (ch === '"' || ch === "'") { inQuote = ch; continue; }
    if (ch === '[' || ch === '{') depth++;
    else if (ch === ']' || ch === '}') {
      depth--;
      if (depth === 0) return /^\s*$/.test(src.slice(i + 1));
    }
  }
  return true; // depth never returned to zero: an unterminated collection attempt
}

/** Parse one flow value: scalar, [ ... ] or { ... }. */
export function parseValue(text) {
  const src = stripComment(text);
  /* A top-level value that is not a closed collection or a quoted string is the
     WHOLE line: "goal: Power up, put one sound on track 1" keeps its commas,
     and "hear: [TRIG 2] plays the snare; [TRIG 1] still plays the kick." keeps
     its brackets. Only inside a closed [ ] or { } does a comma separate values. */
  if (src[0] !== '"' && src[0] !== "'" && !looksLikeCollection(src)) return scalar(src);
  let i = 0;
  const err = m => { throw new Error(`front matter: ${m} at "${src.slice(0, i)}▸${src.slice(i)}"`); };
  const ws = () => { while (i < src.length && /\s/.test(src[i])) i++; };
  const quoted = () => {
    const q = src[i++]; let out = '';
    while (i < src.length && src[i] !== q) out += src[i++];
    if (src[i] !== q) err('unterminated string');
    i++; return out;
  };
  const plain = (stops) => { let out = ''; while (i < src.length && !stops.includes(src[i])) out += src[i++]; return out; };
  const value = () => {
    ws();
    if (src[i] === '[') {
      i++; const out = []; ws();
      if (src[i] === ']') { i++; return out; }
      for (;;) {
        out.push(value()); ws();
        if (src[i] === ',') { i++; continue; }
        if (src[i] === ']') { i++; return out; }
        err('unterminated array');
      }
    }
    if (src[i] === '{') {
      i++; const out = {}; ws();
      if (src[i] === '}') { i++; return out; }
      for (;;) {
        ws();
        const key = (src[i] === '"' || src[i] === "'") ? quoted() : plain(':,}').trim();
        ws();
        if (src[i] !== ':') err("expected ':'");
        i++;
        out[key] = value(); ws();
        if (src[i] === ',') { i++; continue; }
        if (src[i] === '}') { i++; return out; }
        err('unterminated object');
      }
    }
    if (src[i] === '"' || src[i] === "'") return quoted();
    return scalar(plain(',]}'));
  };
  const v = value(); ws();
  if (i < src.length) err('trailing text');
  return v;
}

/** "key: value" lines, with "- item" block lists under a key that has no value. */
export function parseKeyLines(lines) {
  const out = {};
  let listKey = null;
  for (const raw of lines) {
    const line = stripComment(raw);
    if (!line) continue;
    const item = raw.match(/^\s+-\s+(.*)$/);
    if (item && listKey) { out[listKey].push(parseValue(item[1])); continue; }
    const m = line.match(/^([\w][\w .#/+-]*?)\s*:\s*(.*)$/);
    if (!m) throw new Error(`front matter: cannot read line "${raw}"`);
    const [, key, rest] = m;
    if (rest === '') { out[key] = []; listKey = key; continue; }
    listKey = null;
    out[key] = parseValue(rest);
  }
  return out;
}

/** Split "---\n...\n---" off the top of a file. */
export function parseFrontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) throw new Error('front matter: file does not start with ---');
  const bodyLine = (m[0].match(/\n/g) || []).length + 1;
  return { data: parseKeyLines(m[1].split(/\r?\n/)), body: text.slice(m[0].length), bodyLine };
}
