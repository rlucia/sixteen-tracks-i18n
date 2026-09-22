/* The [KEY] token, the manual's convention, in one place: keycaps.js draws it,
   session-parser.mjs validates it, build-content.mjs collects combos from it,
   and the linter — exported into the i18n repository — refuses a token the
   panel does not have. Uppercase only, so a Markdown link's [text] is prose. */
export const KEY_TOKEN = /\[([A-Z][A-Z0-9#/ +.\-]*|\+|-)\]/g;
export const COMBO = /\[(?:[A-Z][A-Z0-9#/ +.\-]*|\+|-)\](?:\s*\+\s*\[(?:[A-Z][A-Z0-9#/ +.\-]*|\+|-)\])+/g;
