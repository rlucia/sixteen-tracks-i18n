/* `node lint.mjs de [--all] [--stamp [file…]]`: the linter at the translator's desk
   and in the Action. Lines are file:line:col: message, the shape editors show inline. */
import { readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { kitOf, hasBegun } from './kit.mjs';
import { lintLanguage } from './lint-language.mjs';
import { readStamps, writeStamps } from './stamps.mjs';
import { gitHead, enDirty } from './stale.mjs';

const line = i => `${i.file}:${i.line}:${i.col}: ${i.level === 'warning' ? 'warning: ' : ''}${i.message}`;

export async function main(argv, { root, enKit, ctx, log = console.log, error = console.error }) {
  const flags = argv.filter(a => a.startsWith('--')), rest = argv.filter(a => !a.startsWith('--'));
  const stamp = flags.includes('--stamp');
  let langs = rest.filter(a => /^[a-z]{2}$/.test(a));
  const files = rest.filter(a => !/^[a-z]{2}$/.test(a));
  if (flags.includes('--all')) {
    if (!existsSync(root)) { error(`${root}: no such directory`); return 1; }
    langs = readdirSync(root).filter(d => /^[a-z]{2}$/.test(d) && d !== 'en' && statSync(join(root, d)).isDirectory());
    /* a folder that has not begun (TRANSLATORS alone) is skipped, as the build
       skips it: the Action must not go red on a language that has no file yet */
    for (const l of langs.filter(l => !hasBegun(kitOf(join(root, l))))) log(`${l}: nothing yet — not linted`);
    langs = langs.filter(l => hasBegun(kitOf(join(root, l))));
    if (!langs.length) return 0;
  }
  if (!langs.length) { error('usage: node lint.mjs <lang> [<lang>…] [--all] [--stamp [file…]]'); return 2; }
  let code = 0;
  for (const lang of langs) {
    const dir = join(root, lang);
    if (!existsSync(dir)) { error(`${lang}: no such language directory (${dir})`); code = 1; continue; }
    const tr = kitOf(dir);
    const r = await lintLanguage({ lang, en: enKit, tr, ctx, root });
    for (const e of r.errors) error(line(e));
    for (const w of r.warnings) log(line(w));
    for (const s of r.stale) log(`${s.file}:1:1: warning: stale since ${s.since}${s.uncommitted ? ' (uncommitted)' : ''}${s.steps.length ? `, English changed in ${s.steps.map(x => typeof x === 'number' ? `step ${x}` : x).join(', ')}` : ''}`);
    for (const f of r.unstamped) log(`${f}:1:1: warning: not stamped — run node lint.mjs ${lang} --stamp`);
    if (r.errors.length) { error(`${lang}: ${r.errors.length} error(s)`); code = 1; continue; }
    if (stamp) {
      const head = gitHead(root);
      if (!head) { error(`${lang}: --stamp needs a git repository at ${root}`); code = 1; continue; }
      if (enDirty(root)) { error(`${lang}: en/ has uncommitted changes — commit the English kit before stamping`); code = 1; continue; }
      const stamps = readStamps(tr);
      const all = [...[...r.sessions.values()].map(s => `sessions/${String(s.meta.number).padStart(2, '0')}-${s.meta.slug}.md`), ...[...r.pages.keys()].map(p => `pages/${p}.html`), ...(r.chapters ? ['chapters.json'] : []), ...(r.keyColours ? ['key-colours.json'] : []), ...(r.strings ? ['strings.json'] : [])];
      const chosen = files.length ? files.map(f => f.replace(new RegExp(`^${lang}/`), '')) : all.filter(f => !stamps[f]);
      const bad = chosen.filter(f => !all.includes(f));
      if (bad.length) { for (const f of bad) error(`${lang}: ${f} is not a passing file of this language`); code = 1; continue; }
      for (const f of chosen) stamps[f] = head;
      writeStamps(tr, stamps);
      log(`${lang}: stamped ${chosen.length} file(s) at ${head.slice(0, 7)}`);
    }
    for (const l of r.summary) log(l);
    log(`${lang}: ok — ${r.sessions.size} session(s), ${r.pages.size} page(s)${r.warnings.length + r.stale.length + r.unstamped.length ? `, ${r.warnings.length + r.stale.length + r.unstamped.length} warning(s)` : ''}`);
  }
  return code;
}
