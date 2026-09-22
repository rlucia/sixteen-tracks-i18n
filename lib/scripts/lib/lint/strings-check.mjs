/* Layer 5: every English key, no extra key, every placeholder kept, no markup;
   a value identical to the English is a warning ("still English?"). */
import { issue } from './kit.mjs';
import { PLACEHOLDER } from '../../../src/lib/strings.js';
const holders = v => [...String(v).matchAll(PLACEHOLDER)].map(m => m[1]).sort();

export function compareStrings(en, tr, file) {
  const out = [], same = [];
  if (!tr || typeof tr !== 'object' || Array.isArray(tr)) return [issue(file, 1, 1, 'must be one flat object of strings, like the English')];
  for (const [k, v] of Object.entries(en)) {
    if (!(k in tr)) { out.push(issue(file, 1, 1, `missing key "${k}" (English: "${v}")`)); continue; }
    const t = tr[k];
    if (typeof t !== 'string') { out.push(issue(file, 1, 1, `"${k}" is not a string`)); continue; }
    if (t.trim() === '') { out.push(issue(file, 1, 1, `"${k}" is empty — every string has a value`)); continue; }
    if (/[<>"]/.test(t)) { out.push(issue(file, 1, 1, `"${k}" contains markup or a double quote (<, > or "), which a string never does`)); continue; }
    const lost = holders(v).filter(h => !holders(t).includes(h));
    if (lost.length) { out.push(issue(file, 1, 1, `"${k}" lost its placeholder ${lost.map(h => `{${h}}`).join(', ')} — keep every {placeholder} the English value has`)); continue; }
    if (t === v && v.trim().length > 3) same.push(k);
  }
  for (const k of Object.keys(tr)) if (!(k in en)) out.push(issue(file, 1, 1, `extra key "${k}" — not in the English strings`));
  /* One line, not one per key: a translated file legitimately keeps a dozen machine
     words (Pattern, Preset, Play, magenta), and a dozen lines on every build and every
     lint run taught the reader to skip warnings — including the one that mattered. */
  if (same.length) out.push(issue(file, 1, 1, `${same.length} value(s) identical to the English — still English? ${same.join(', ')}`, 'warning'));
  return out;
}
