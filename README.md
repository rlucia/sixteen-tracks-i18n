# Sixteen Tracks — translations

[Sixteen Tracks](https://www.iscanet.com/music/sixteen-tracks/) is a hands-on course for the Elektron Tonverk, OS 1.4.0: eleven sessions that build one piece, each step with a drawing of the panel it uses. It is written in English. This repository is where it becomes other languages, one pull request at a time.

The site is live in five: English, Deutsch, Italiano, Español and Svenska. The four translations are **first drafts**, written with an AI and read once by a reviewer, not yet by a native speaker of that language — so the most useful thing you can do today is not to start a language from nothing but to correct one. See "If your language already has a draft" below.

## What is here

- `en/` — the English, exported from the site. **Never edit it.** If the English is wrong, open an issue; the site's owner fixes it in the site and re-exports.
- `de/`, `it/`, `es/`, `sv/` — one folder per language, the translations. Each has the same shape as `en/`; a folder holding only `TRANSLATORS` is a language waiting for its first file. An empty `TRANSLATORS` means the opposite of neglect: the draft is there, and no person has put their name to it yet.
- `lint.mjs` — the linter. It checks a translation the way the site's own build does, and prints what is wrong with a file name and a line number.
- `lib/` — the code the linter runs, exported from the site. Never edit it.

## What to translate

In `<lang>/`:

- `sessions/NN-slug.md` — the sessions. Translate the prose of every step, the step titles after `## Step:`, the `title:`, `goal:` and `needs:` in the front matter, the `hear:` and `recover:` lines of a checkpoint, the `:::note` blocks, and the three closing sections. Keep the file name, `number:`, `slug:`, `chapter:`, `teaches:`, `ends:`, `keys:`, `leds:`, `source:`, `checked:`, `mode:`, `new:`, `simulator:`, `screen:` and `keys16:` — and the place of the `:::simulator` marker — exactly as in English: they are the machine's, and the linter refuses a difference. The three closing headings `## What you now have`, `## Explore further` and `## Next` stay in English too — they are markers, and the page prints your language's own headings from `strings.json`.
- `chapters.json` — the chapter titles, and the titles and one-line gains of the planned sessions. Ids, numbers, slugs and order stay.
- `key-colours.json` — the `meaning` of each row. Everything else stays.
- `strings.json` — every sentence the site's code prints: buttons, captions, labels, the simulators' words. Every key of `en/strings.json`, translated; keep every `{placeholder}` the English value has; never put `<`, `>` or `"` in a value, and never leave one empty — the linter refuses all four, because a page prints these straight into its markup.
- `pages/*.html` — the five hand-written pages. Translate the text; keep every tag, attribute and `{{ expression }}` exactly as in English (the linter compares them). An expression like `{{{ S.sim.caption }}}` is the page printing a sentence from your `strings.json`, so it stays exactly as it is — the sentence is translated there, once. Links stay as in English: the build points them at your language.
- `TRANSLATORS` — your name, one per line. It is printed on your language's colophon.

## What never changes

Key names in square brackets — `[RECORD]`, `[FUNC] + [SETTINGS]`, `[TRIG 1]` — are what is printed on the unit, and Elektron's manual, which every step cites (`manual §10.3`), exists in English. A German step reads "Drücke [RECORD]". A `[TOKEN]` that is not a key the panel has is refused. Mode and menu names (`GRID RECORDING`, `FILL EDIT`) and what a screen prints stay English for the same reason.

The producer's own words stay English too, because the readers do: kick, snare, hi-hat, clap, tom, pickup, fill, roll, loop, pattern, preset, sample, kit, trig, lock, velocity, mute, bus, send, sweep, ghost note. This is the vocabulary a young producer meets in tutorials, forums and the machine's own sample names, and translating it — "cassa" for kick, "anacrusi" for pickup — makes the page sound like a conservatory, not a studio. Translate the grammar of music (track, step, bar, downbeat, upbeat) into your language's everyday words; leave the trend words as they are, in your language's spelling habits (`il kick`, `los samples`). When in doubt, ask what a producer in your language would type in a forum post.

The one phrase that names a run of keys, "from [TRIG 1] to [TRIG 15]", is written in your language's `strings.json` as `range.phrase` (`von [TRIG {a}] bis [TRIG {b}]`) so you can write it naturally and the linter still counts the keys between.

## If your language already has a draft

Every sentence is there and the structure is correct — what a draft cannot be sure of is idiom.
Read it as a musician of your language, not as a proofreader, and look first at:

- **Words that mean something else.** The Swedish draft used `tappa` for "tap", which in Swedish
  is *drop*, in eight places — and two of them were the sentences teaching hold versus tap. The
  Italian said `cassa` and `anacrusi`, conservatory words for `kick` and `pickup`.
- **The glossary.** Each language picked one word, one gender and one inflection per term and held
  it across every session. If you change one, change it everywhere: the linter checks structure,
  never consistency of vocabulary.
- **The `recover:` lines.** They are the hardest sentences in the course — what to do when the
  machine did something else — and the first place a translation goes stiff.
- **The privacy page.** It is a legal notice; its terms should be the ones your country's
  authority uses.

A correction is as welcome as a new language, and smaller: `fix(de): …`, one sentence in the body
saying what it said before. When you have read a whole language through, put your name in its
`TRANSLATORS` — that is what the file is for.

## Running the linter

Node 24 or newer, nothing to install:

    node lint.mjs de

Each problem is one line, `de/sessions/03-a-kit-from-one-sample.md:41:1: step 7: keys differ — …`, which your editor can jump to. Warnings (`still English?`, `stale since …`, `not stamped`) do not stop anything. When it passes, it prints every session's title and step titles in your language, so you can read back what you wrote. `node lint.mjs --all` lints every language folder.

## Stamps, and what "stale" means

    node lint.mjs de --stamp

records, in `de/stamps.json`, which English each of your files was translated from. You never type a hash. When the English changes later, the linter says so — `de/sessions/03-…md:1:1: warning: stale since 2026-09-28, English changed in step 4, step 10` — and the site still publishes your translation with a note that the English moved on. Revise those steps, then `node lint.mjs de --stamp de/sessions/03-a-kit-from-one-sample.md` to say it is current again (an English typo fix that needs no change in your language is re-stamped the same way, without edits). While the linter reports an error, `--stamp` writes nothing; naming a file that does not pass writes nothing either.

## Sending it

Fork, translate, run the linter until it is clean, open a pull request. The same linter runs on every pull request here (`npm run lint`, every language that has begun); a pull request that touches `en/`, `lib/`, `lint.mjs` or `package.json` fails on purpose — those four are exported from the site, and a correction to them is an issue, not a commit. The site's owner merges and the site is rebuilt with your language. A session is published when its file passes; until then its place on your language's hub says "(English)" and links the English page, so a language can go live one session at a time.

Your translation is published under the same licence as the course's writing, CC BY 4.0, with your name on the colophon.

## Commits

This repository follows [Conventional Commits](https://www.conventionalcommits.org/): every commit subject is `type(scope): what the change does`, in the imperative, lowercase, no trailing period, at most 72 characters. The scope is your language code. The types you will need:

- `feat(de): translate session 3` — a session, a page or a strings file arrives or is completed.
- `fix(de): step 7 of session 3 named the wrong key` — something already published was wrong.
- `chore(de): re-stamp after the English change of 2026-09-28` — housekeeping such as stamps.

Say more in the body if the subject cannot hold it. A pull request may carry several commits; each one keeps this shape, and the one that touches `TRANSLATORS` is `docs(de): add <name> to TRANSLATORS`.
