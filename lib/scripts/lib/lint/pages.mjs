/* Layer 4: a translated page is the English page with different text nodes.
   The sequence of tags, attributes and Handlebars expressions must be equal;
   only text — and the attributes that ARE text — may differ. */
import { issue } from './kit.mjs';
export const TRANSLATABLE_ATTRS = new Set(['content', 'aria-label', 'title', 'alt', 'placeholder', 'label']);
const HB = /\{\{([\s\S]*?)\}\}/g;
const norm = s => s.replace(/\s+/g, ' ').trim();

export function tokenize(html) {
  const out = []; let i = 0, line = 1, col = 1;
  const pos = () => ({ line, col });
  const advance = n => { for (let k = 0; k < n; k++) { if (html[i + k] === '\n') { line++; col = 1; } else col++; } i += n; };
  while (i < html.length) {
    if (html.startsWith('<!--', i)) { const e = html.indexOf('-->', i); advance((e === -1 ? html.length : e + 3) - i); continue; }
    if (html.startsWith('{{', i)) {                                   // {{ x }} and {{{ x }}} alike: the token keeps the inner braces
      const triple = html.startsWith('{{{', i); const close = triple ? '}}}' : '}}';
      const e = html.indexOf(close, i + close.length); const end = e === -1 ? html.length : e + close.length;
      out.push({ t: 'hb', v: (triple ? '{' : '') + norm(html.slice(i + close.length, end - close.length)) + (triple ? '}' : ''), ...pos() }); advance(end - i); continue;
    }
    if (html[i] === '<' && /[a-zA-Z/!]/.test(html[i + 1] || '')) {
      const e = html.indexOf('>', i); const raw = html.slice(i + 1, e === -1 ? html.length : e); const p = pos(); advance((e === -1 ? html.length : e + 1) - i);
      if (raw[0] === '/') { out.push({ t: 'close', v: raw.slice(1).trim().toLowerCase(), ...p }); continue; }
      if (raw[0] === '!') { out.push({ t: 'decl', v: norm(raw.toLowerCase()), ...p }); continue; }
      const name = (raw.match(/^[a-zA-Z][\w-]*/) || [''])[0].toLowerCase();
      const attrs = [];
      for (const m of raw.slice(name.length).matchAll(/([^\s=\/"'>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) attrs.push([m[1].toLowerCase(), m[2] ?? m[3] ?? m[4] ?? '']);
      attrs.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
      out.push({ t: 'open', v: name, attrs, ...p });
      for (const [k, val] of attrs) if (TRANSLATABLE_ATTRS.has(k)) for (const m of val.matchAll(HB)) out.push({ t: 'hb', v: norm(m[1]), ...p });
      if (name === 'script' || name === 'style') { const close = html.indexOf(`</${name}`, i); const body = html.slice(i, close === -1 ? html.length : close); out.push({ t: 'body', v: body.trim(), ...pos() }); advance(body.length); }
      continue;
    }
    advance(1);
  }
  return out;
}
const show = x => x.t === 'open' ? `<${x.v}${x.attrs.map(([k, v]) => ` ${k}="${v}"`).join('')}>` : x.t === 'close' ? `</${x.v}>` : x.t === 'hb' ? `{{${x.v}}}` : x.t === 'decl' ? `<!${x.v}>` : `the ${x.v.length}-character script/style body`;
const names = a => a.attrs.map(x => x[0]).join(', ') || 'none';

export function comparePages(en, tr, file) {
  const a = tokenize(en), b = tokenize(tr);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const x = a[i], y = b[i];
    if (!y) return [issue(file, b.at(-1)?.line ?? 1, 1, `ends early: English continues with ${show(x)}`)];
    if (!x) return [issue(file, y.line, y.col, `${show(y)} has no counterpart in the English page`)];
    const bad = m => [issue(file, y.line, y.col, m)];
    if (x.t !== y.t || (x.t !== 'open' && x.v !== y.v)) return bad(`expected ${show(x)}, found ${show(y)}${x.t === 'hb' ? ' — Handlebars expressions stay exactly as in English' : ''}`);
    if (x.t === 'open') {
      if (x.v !== y.v) return bad(`expected ${show(x)}, found ${show(y)}`);
      if (names(x) !== names(y)) return bad(`<${x.v}> has attributes ${names(y)}; English has ${names(x)}`);
      for (let k = 0; k < x.attrs.length; k++) {
        const [name, v1] = x.attrs[k], v2 = y.attrs[k][1];
        if (TRANSLATABLE_ATTRS.has(name) || (x.v === 'html' && name === 'lang')) continue;
        if (v1 !== v2) return bad(`<${x.v} ${name}="${v2}"> differs from English ${name}="${v1}" — links and attributes stay as in English; the build points them at your language`);
      }
    }
  }
  return [];
}
