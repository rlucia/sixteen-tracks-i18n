/* translated-from, per language, in one file the linter owns: stamps.json maps
   a file inside the kit (sessions/03-….md, pages/index.html, strings.json) to
   the i18n commit whose en/ it was translated from. Written by `lint.mjs <lang>
   --stamp`; a translator never types a hash. One file rather than a comment in
   each: a first-line comment makes a JSON file invalid in every editor. */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

export function readStamps(kit) {
  if (!existsSync(kit.stampsFile)) return {};
  try { return JSON.parse(readFileSync(kit.stampsFile, 'utf8')); }
  catch (e) { throw new Error(`${kit.stampsFile}: not valid JSON — ${e.message}`); }
}
export function writeStamps(kit, stamps) {
  const sorted = Object.fromEntries(Object.keys(stamps).sort().map(k => [k, stamps[k]]));
  writeFileSync(kit.stampsFile, JSON.stringify(sorted, null, 2) + '\n');
}
