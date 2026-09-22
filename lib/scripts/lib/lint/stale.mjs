/* Stale is a git question: a translation is stale when the English file differs
   between its stamp and now (the working tree, so an uncommitted export counts).
   For a session, the diff's hunks are mapped to the step headings they fall in. */
import { spawnSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const git = (root, args) => { const r = spawnSync('git', ['-C', root, ...args], { encoding: 'utf8' }); return r.status === 0 ? r.stdout.trim() : null; };
export const gitHead = root => { const h = git(root, ['rev-parse', 'HEAD']); return h && /^[0-9a-f]{40}$/.test(h) ? h : null; };
export const enDirty = root => (git(root, ['status', '--porcelain', '--', 'en/']) || '') !== '';

/* new-side line ranges of `git diff -U0 <stamp> -- file` */
function hunksOf(root, stamp, enRel) {
  const out = git(root, ['diff', '-U0', stamp, '--', enRel]);
  if (out === null) return null;                                   // an unknown stamp: git says so
  return [...out.matchAll(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/gm)].map(m => ({ start: Number(m[1]), count: m[2] === undefined ? 1 : Number(m[2]) }));
}
export function stepsTouched(enText, hunks) {
  const lines = enText.split('\n');
  const marks = [];                                                 // [line, label]
  let body = false, n = 0;
  lines.forEach((l, i) => {
    if (i === 0) { marks.push([1, 'front matter']); return; }
    if (!body && l === '---') { body = true; return; }
    const st = l.match(/^## Step:\s*(.+)$/); const sec = l.match(/^## (.+)$/);
    if (st) marks.push([i + 1, ++n]);
    else if (sec) marks.push([i + 1, sec[1].trim()]);
  });
  const labelAt = line => { let cur = marks[0][1]; for (const [at, label] of marks) if (at <= line) cur = label; return cur; };
  const touched = new Set();
  for (const h of hunks) for (let l = h.start; l < h.start + Math.max(1, h.count); l++) touched.add(labelAt(l));
  /* step numbers first, ascending; then the named parts in the order they appear in the file */
  const order = x => typeof x === 'number' ? x : 1000 + marks.findIndex(m => m[1] === x);
  return [...touched].sort((a, b) => order(a) - order(b));
}
export function staleReport({ root, lang, files, stamps }) {
  const stale = [], unstamped = [];
  for (const f of files) {
    const file = `${lang}/${f.tr}`;
    const stamp = stamps[f.tr];
    if (!stamp) { unstamped.push(file); continue; }
    const hunks = hunksOf(root, stamp, f.en);
    if (hunks === null) { stale.push({ file, since: `unknown commit ${stamp.slice(0, 7)} — re-stamp`, steps: [] }); continue; }
    if (!hunks.length) continue;
    /* deletion is a normal diff hunk, so the guard above never catches it — an
       English file gone from disk is reported like any other stale label, not thrown */
    if (f.kind === 'session' && !existsSync(join(root, f.en))) {
      stale.push({ file, since: new Date().toISOString().slice(0, 10), steps: ['English file removed'] });
      continue;
    }
    const committed = git(root, ['log', '-1', '--format=%cs', `${stamp}..HEAD`, '--', f.en]);
    const since = committed || new Date().toISOString().slice(0, 10);
    const steps = f.kind === 'session' ? stepsTouched(readFileSync(join(root, f.en), 'utf8'), hunks) : [];
    const entry = { file, since, steps };
    if (!committed) entry.uncommitted = true;    // English change is only in the working tree — the page still carries a real date
    stale.push(entry);
  }
  return { stale, unstamped };
}
