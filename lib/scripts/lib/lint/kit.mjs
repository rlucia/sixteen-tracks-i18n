/* A kit is one language's files. The English kit is content/ + src/ (the site)
   or en/ (the i18n repository); every other language is <lang>/ in either. */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { parseSession } from '../session-parser.mjs';

export const PAGES = ['index', 'before-you-start', 'colophon', 'privacy', '404'];

export function kitOf(dir, { pagesDir = join(dir, 'pages'), stringsFile = join(dir, 'strings.json') } = {}) {
  return {
    dir, sessionsDir: join(dir, 'sessions'), chaptersFile: join(dir, 'chapters.json'),
    keyColoursFile: join(dir, 'key-colours.json'), stringsFile, pagesDir,
    translatorsFile: join(dir, 'TRANSLATORS'), stampsFile: join(dir, 'stamps.json'),
  };
}
export const issue = (file, line, col, message, level = 'error') => ({ file, line, col, message, level });
/* A language that has begun: sessions/, pages/ or a strings.json. A folder
   holding only TRANSLATORS (de/ on the day the repository opened) is not an
   error anywhere — the build skips it and so does `--all`; naming that language
   on the command line still says what its first file must be. One predicate,
   so the build and the Action cannot disagree about which folders count. */
export const hasBegun = kit => existsSync(kit.sessionsDir) || existsSync(kit.pagesDir) || existsSync(kit.stringsFile);

/* the site's English: content/ for the sessions and data, content/strings/en.json, src/ for the pages */
export const siteEnglishKit = root => kitOf(join(root, 'content'), { pagesDir: join(root, 'src'), stringsFile: join(root, 'content', 'strings', 'en.json') });

/* Everything a kit has, parsed where it parses, with an Issue for each file that
   does not. `rel` names files the way the linter prints them: relative to the
   kit's parent directory (de/sessions/02-first-beat.md). */
export async function readKit(kit) {
  const parent = dirname(kit.dir);
  const rel = p => relative(parent, p).split('\\').join('/');
  const errors = [];
  /* The parser's step-header errors read "step N \"title\": …" once the file
     name is off the front — find the Nth "## Step:" line so the Issue points
     at the header, not line 1. */
  const stepLine = (text, n) => {
    const lines = text.split(/\r?\n/);
    let seen = 0;
    for (let i = 0; i < lines.length; i++) if (/^## Step:/.test(lines[i]) && ++seen === n) return i + 1;
    return 1;
  };
  const json = async (file) => {
    if (!existsSync(file)) return null;
    try { return JSON.parse(await readFile(file, 'utf8')); }
    catch (e) { errors.push(issue(rel(file), 1, 1, `not valid JSON — ${e.message}`)); return null; }
  };
  const sessions = new Map();
  if (existsSync(kit.sessionsDir)) for (const f of (await readdir(kit.sessionsDir)).filter(f => /^\d\d-.+\.md$/.test(f)).sort()) {
    const file = join(kit.sessionsDir, f), text = await readFile(file, 'utf8');
    const n = Number(f.slice(0, 2));
    try { sessions.set(n, { rel: rel(file), text, parsed: parseSession(text, rel(file)), error: null }); }
    catch (e) {
      const r = rel(file);
      const msg = e.message.startsWith(r) ? e.message.slice(r.length).replace(/^:\s*/, '').trim() : e.message;
      const step = msg.match(/^step (\d+) "/);
      errors.push(issue(r, step ? stepLine(text, Number(step[1])) : 1, 1, msg));
      sessions.set(n, { rel: r, text, parsed: null, error: e.message });
    }
  }
  const pages = new Map();
  for (const name of PAGES) { const file = join(kit.pagesDir, `${name}.html`); if (existsSync(file)) pages.set(name, await readFile(file, 'utf8')); }
  const translators = existsSync(kit.translatorsFile) ? (await readFile(kit.translatorsFile, 'utf8')).split('\n').map(s => s.trim()).filter(Boolean) : [];
  return { sessions, chapters: await json(kit.chaptersFile), keyColours: await json(kit.keyColoursFile), strings: await json(kit.stringsFile), pages, translators, errors };
}
