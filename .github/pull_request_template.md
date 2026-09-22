<!--
Thank you. A correction to a draft is worth as much here as a whole new language,
and takes an afternoon instead of a month.

Write this description in English or in the language you are translating into,
whichever comes easier. Both get read.

The linter runs on this pull request by itself, so what follows is not a list of
what a machine can check. It is the part only you can.
-->

## Language

<!-- The folder this touches: de, it, es, sv, or a new code. One language per pull
     request, please: each one is merged, and its pages rebuilt, on its own. -->


## What this changes

<!-- A correction: what the line said before, and why that was wrong. One sentence does
     it — "tappa is Swedish for *drop*, and two of the eight places were the sentences
     teaching hold versus tap" is everything the owner needs in order to merge.

     A translation arriving: which sessions or pages, and any call you had to make that
     the next person should know about. -->


## The part only you can check

- [ ] I read it as a musician of my language, not as a proofreader — out loud, where a step is spoken.
- [ ] The producer's words are still English (kick, snare, pickup, loop, lock…), carrying my language's articles and spelling habits.
- [ ] A term I changed, I changed everywhere: the linter checks structure, never the consistency of a vocabulary.
- [ ] Key names, mode names, menu items and what the screen prints are untouched.

## The part the linter checks

- [ ] `node lint.mjs <lang>` is clean. (It runs here too; running it first only saves you the wait.)
- [ ] `node lint.mjs <lang> --stamp` for whatever this pull request finishes.
- [ ] Nothing under `en/`, `lib/`, `lint.mjs` or `package.json` — those four are exported from the site, so a correction to them is an issue, not a commit.

---

Read a whole language through? Add your name to `<lang>/TRANSLATORS` in this same pull request; it is printed on that language's colophon. Opening this pull request publishes your translation under CC BY 4.0, the licence the course's writing carries.
