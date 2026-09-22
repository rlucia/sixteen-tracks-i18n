#!/usr/bin/env node
/* The Sixteen Tracks translation linter. `node lint.mjs de` checks de/ against en/;
   `node lint.mjs de --stamp` records which English the translation was made from.
   lib/ and en/ are exported from the site and never edited here. */
import { join } from 'node:path';
import { main } from './lib/scripts/lib/lint/cli.mjs';
import { kitOf } from './lib/scripts/lib/lint/kit.mjs';
import { KEY_IDS, GROUPS } from './lib/src/lib/panel-geometry.js';
const root = import.meta.dirname;
process.exit(await main(process.argv.slice(2), { root, enKit: kitOf(join(root, 'en')), ctx: { keyIds: KEY_IDS, groups: GROUPS } }));
