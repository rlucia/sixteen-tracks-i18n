/* The six layers, one report. Runs the same here, in the site's build, and —
   exported verbatim — in the i18n repository. Nothing here renders a page. */
import { readKit, issue, PAGES } from './kit.mjs';
import { validateSession, RANGE_PHRASE } from '../session-parser.mjs';
import { compareSessions, compareChapters, compareKeyColours } from './equality.mjs';
import { comparePages } from './pages.mjs';
import { compareStrings } from './strings-check.mjs';
import { readStamps } from './stamps.mjs';
import { staleReport } from './stale.mjs';

/* validateSession's messages carry `step N "title"` where they can; the line
   is the step's header, or 1 for a front-matter message */
const lineOf = (parsed, message) => { const m = message.match(/ step (\d+) "/); return m ? parsed.steps[Number(m[1]) - 1]?.line ?? 1 : 1; };
const stripFile = (rel, message) => message.startsWith(rel) ? message.slice(rel.length).replace(/^[: ]+/, '') : message;

export async function lintLanguage({ lang, en, tr, ctx, root }) {
  const E = await readKit(en), T = await readKit(tr);
  const errors = [...T.errors], warnings = [];
  const fail = (file, line, message) => errors.push(issue(file, line, 1, message));
  /* 5. strings first: everything else prints through them */
  const stringsRel = `${lang}/strings.json`;
  let strings = null;
  if (T.strings === null && !T.errors.some(e => e.file === stringsRel)) fail(stringsRel, 1, 'missing — a language needs its strings.json (copy en/strings.json and translate the values)');
  else if (T.strings !== null) {
    const issues = compareStrings(E.strings, T.strings, stringsRel);
    for (const i of issues) (i.level === 'error' ? errors : warnings).push(i);
    if (!issues.some(i => i.level === 'error')) strings = T.strings;
  }
  const rangePhrase = strings?.['range.phrase'] ?? RANGE_PHRASE;
  const vctx = { ...ctx, chapters: new Set((E.chapters?.chapters || []).map(c => c.id)), rangePhrase };
  /* 1 + 2 + 3. sessions */
  const sessions = new Map();
  for (const [n, s] of T.sessions) {
    if (!s.parsed) continue;
    const before = errors.length;
    const enS = E.sessions.get(n);
    if (!enS?.parsed) { fail(s.rel, 1, `no English session ${n} to translate — a translation follows the English, it never leads it`); continue; }
    for (const m of validateSession(s.parsed, vctx)) fail(s.rel, lineOf(s.parsed, m), stripFile(s.rel, m));
    errors.push(...compareSessions(enS.parsed, s.parsed, s.rel, lang));
    if (errors.length === before) sessions.set(n, s.parsed);
  }
  /* 3. chapters and key colours */
  let chapters = null, keyColours = null;
  if (T.chapters) { const i = compareChapters(E.chapters, T.chapters, `${lang}/chapters.json`); errors.push(...i); if (!i.length) chapters = T.chapters; }
  if (T.keyColours) { const i = compareKeyColours(E.keyColours, T.keyColours, `${lang}/key-colours.json`); errors.push(...i); if (!i.length) keyColours = T.keyColours; }
  /* 4. pages */
  const pages = new Map();
  for (const [name, text] of T.pages) {
    const file = `${lang}/pages/${name}.html`;
    const enText = E.pages.get(name);
    if (enText === undefined) { fail(file, 1, `no English page ${name}.html to translate`); continue; }
    const i = comparePages(enText, text, file); errors.push(...i); if (!i.length) pages.set(name, text);
  }
  const missingPages = PAGES.filter(p => !T.pages.has(p) && E.pages.has(p));
  if (missingPages.length) warnings.push(issue(`${lang}/pages`, 1, 1, `no ${missingPages.map(p => p + '.html').join(', ')} yet — those pages fall back to English`, 'warning'));
  /* stale */
  const files = [
    ...[...T.sessions.values()].map(s => ({ tr: s.rel.slice(lang.length + 1), en: `en/${s.rel.slice(lang.length + 1)}`, kind: 'session' })),
    ...[...T.pages.keys()].map(p => ({ tr: `pages/${p}.html`, en: `en/pages/${p}.html`, kind: 'page' })),
    ...['chapters.json', 'key-colours.json', 'strings.json'].filter(f => (f === 'chapters.json' ? T.chapters : f === 'key-colours.json' ? T.keyColours : T.strings) !== null).map(f => ({ tr: f, en: `en/${f}`, kind: 'json' })),
  ];
  let stamps = {};
  try { stamps = readStamps(tr); } catch (e) { fail(`${lang}/stamps.json`, 1, e.message.replace(/^.*?: /, '')); }
  const { stale, unstamped } = root ? staleReport({ root, lang, files, stamps }) : { stale: [], unstamped: [] };
  /* 6. the summary */
  const summary = [];
  for (const [n, s] of [...sessions].sort((a, b) => a[0] - b[0])) { summary.push(`Session ${n}: ${s.meta.title}`); s.steps.forEach(st => summary.push(`  ${st.n}. ${st.title}`)); }
  return { lang, errors, warnings, strings, chapters, keyColours, sessions, pages, stale, unstamped, translators: T.translators, summary };
}
