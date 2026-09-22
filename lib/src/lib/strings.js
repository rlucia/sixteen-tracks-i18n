/* The strings a page prints, by key. Shared by the build (Node) and the
   browser: the generators call fmt() at build time; the page scripts read the
   page's own inlined subset (#strings) and call the same fmt(). No literal
   English sentence lives in either — tests/strings.test.mjs holds the list of
   the ones that used to. */
export const PLACEHOLDER = /\{([a-zA-Z][a-zA-Z0-9]*)\}/g;

export function fmt(S, key, params = {}) {
  const v = S[key];
  if (typeof v !== 'string') throw new Error(`strings: no key "${key}"`);
  return v.replace(PLACEHOLDER, (m, name) => {
    if (!(name in params)) throw new Error(`strings: "${key}" needs {${name}}`);
    return String(params[name]);
  });
}

/* {"foot.trademark": x} -> {foot: {trademark: x}} for Handlebars ({{{ S.foot.trademark }}}) */
export function nest(S) {
  const out = {};
  for (const [key, value] of Object.entries(S)) {
    const parts = key.split('.');
    let cur = out;
    parts.forEach((p, i) => {
      if (i === parts.length - 1) {
        if (cur[p] !== undefined && typeof cur[p] !== 'string') throw new Error(`strings: "${key}" is both a string and a prefix`);
        cur[p] = value;
      } else {
        if (typeof cur[p] === 'string') throw new Error(`strings: "${parts.slice(0, i + 1).join('.')}" is both a string and a prefix`);
        cur = cur[p] ??= {};
      }
    });
  }
  return out;
}

/* what a page inlines: the simulators' strings and the hub's continue link */
export const BROWSER_PREFIXES = ['sim.', 'hub.continue'];
export const browserStrings = S => Object.fromEntries(Object.entries(S).filter(([k]) => BROWSER_PREFIXES.some(p => k.startsWith(p))));

export function readStrings(doc) {
  const el = doc.getElementById('strings');
  if (!el) throw new Error('strings: no #strings on the page — head.html did not inline them');
  return JSON.parse(el.textContent);
}
