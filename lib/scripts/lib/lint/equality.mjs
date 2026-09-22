/* Layer 3 of the linter: a translation is held to the English file field by
   field. Every message names the step (and its line) and the field. */
import { issue } from './kit.mjs';
const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
const show = v => JSON.stringify(v ?? null);

export function compareSessions(en, tr, file, lang = 'tr') {
  const out = []; const at = (line, message) => out.push(issue(file, line, 1, message));
  for (const k of ['number', 'slug', 'chapter', 'simulator']) if (!same(en.meta[k], tr.meta[k])) at(1, `${k} is ${show(tr.meta[k])}; English has ${show(en.meta[k])}`);
  if (!same(en.meta.ends, tr.meta.ends)) at(1, `ends differs from the English — the fingerprint is the machine's; copy it as it is`);
  if ((en.meta.needs?.length ?? 0) !== (tr.meta.needs?.length ?? 0)) at(1, `needs has ${tr.meta.needs?.length ?? 0} items; English has ${en.meta.needs?.length ?? 0}`);
  if (!same(en.meta.teaches, tr.meta.teaches)) at(1, `teaches differs from the English — these are ids, not words`);
  if (en.steps.length !== tr.steps.length) { at(tr.steps.at(-1)?.line ?? 1, `${tr.steps.length} steps; English has ${en.steps.length}`); return out; }
  en.steps.forEach((a, i) => {
    const b = tr.steps[i], L = b.line, n = i + 1;
    if (!same(a.keys, b.keys)) at(L, `step ${n}: keys differ — English [${a.keys.join(', ')}], ${lang} [${b.keys.join(', ')}]`);
    if (!same(a.leds, b.leds)) at(L, `step ${n}: leds differ — English ${show(a.leds)}, ${lang} ${show(b.leds)}`);
    for (const k of ['source', 'checked', 'mode', 'new']) if (!same(a[k], b[k])) at(L, `step ${n}: ${k} is "${b[k]}"; English has "${a[k]}"`);
    if (!!a.checkpoint !== !!b.checkpoint) at(L, `step ${n}: ${b.checkpoint ? 'has a checkpoint the English step lacks' : "lacks the English step's checkpoint"}`);
    else if (a.checkpoint) {
      if (!same(a.checkpoint.screen, b.checkpoint.screen)) at(L, `step ${n}: checkpoint screen differs — screens are the machine's; copy it as it is`);
      if (!same(a.checkpoint.keys16, b.checkpoint.keys16)) at(L, `step ${n}: checkpoint keys16 differs — copy it as it is`);
      for (const k of ['hear', 'recover']) if (!!a.checkpoint[k] !== !!b.checkpoint[k]) at(L, `step ${n}: ${b.checkpoint[k] ? `has a ${k} line the English step lacks` : `lacks the English step's ${k} line`}`);
    }
    if (a.notes.length !== b.notes.length) at(L, `step ${n}: ${b.notes.length} notes; English has ${a.notes.length}`);
    if (a.simulatorHere !== b.simulatorHere) at(L, `step ${n}: the :::simulator marker ${b.simulatorHere ? 'is here, but English has it' : 'is missing; English has it'} on step ${en.steps.findIndex(s => s.simulatorHere) + 1}`);
  });
  return out;
}
export function compareChapters(en, tr, file) {
  const out = []; const at = m => out.push(issue(file, 1, 1, m));
  if (!Array.isArray(tr?.chapters) || !Array.isArray(tr?.planned)) { at('needs "chapters" and "planned" lists, like the English'); return out; }
  if (en.chapters.length !== tr.chapters.length) at(`${tr.chapters.length} chapters; English has ${en.chapters.length}`);
  else en.chapters.forEach((a, i) => { for (const k of ['id', 'order']) if (!same(a[k], tr.chapters[i][k])) at(`chapters[${i}]: ${k} is ${show(tr.chapters[i][k])}; English has ${show(a[k])}`); });
  if (en.planned.length !== tr.planned.length) at(`${tr.planned.length} planned sessions; English has ${en.planned.length}`);
  else en.planned.forEach((a, i) => { for (const k of ['number', 'slug', 'chapter']) if (!same(a[k], tr.planned[i][k])) at(`planned[${i}]: ${k} is ${show(tr.planned[i][k])}; English has ${show(a[k])}`); });
  return out;
}
export function compareKeyColours(en, tr, file) {
  const out = []; const at = m => out.push(issue(file, 1, 1, m));
  if (!Array.isArray(tr)) { at('not a list'); return out; }
  if (en.length !== tr.length) { at(`${tr.length} rows; English has ${en.length}`); return out; }
  en.forEach((a, i) => { for (const k of Object.keys(a)) if (k !== 'meaning' && !same(a[k], tr[i][k])) at(`row ${i + 1}: ${k} is ${show(tr[i][k])}; English has ${show(a[k])}`); });
  return out;
}
