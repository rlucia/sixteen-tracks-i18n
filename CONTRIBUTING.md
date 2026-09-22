# Contributing

The [README](README.md) is the manual: what to translate, what never changes, how to run the
linter, what a stamp is. Read it once before you start — it is also in
[Deutsch](README.de.md), [Italiano](README.it.md), [Español](README.es.md) and
[Svenska](README.sv.md).

This page is the door: which of the four doors is yours, and what happens after you knock.

## Start by correcting a draft, not by starting a language

Deutsch, Italiano, Español and Svenska are first drafts — written with an AI, read once by a
reviewer, never yet by a native speaker. Every sentence is there and the linter passes on all
four. What a draft cannot be sure of is idiom.

So fixing one word is not a nitpick, it is the work: the Swedish draft used `tappa` for "tap",
which in Swedish means *drop*, and two of the eight places were the sentences teaching hold
versus tap. The Italian said `cassa` for `kick` and `anacrusi` for `pickup` — conservatory
words in a studio. The README's section *If your language already has a draft* says where such
things hide.

## The four kinds of contribution

1. **A correction to a draft** — a pull request. Small, and the most useful thing here.
   `fix(sv): tap is not tappa in the hold-versus-tap steps`

2. **A session or a page still in English** — a pull request.
   `feat(de): translate session 4`
   Five sessions exist today, eleven when the course is finished, and five hand-written pages.
   A language goes live one session at a time: until a session's file passes the linter, its
   place on that language's hub says "(English)" and links the English page.

3. **A language that is not here yet** — open an issue naming it, before you translate
   anything. A language is one line in the site's configuration plus a folder here; the owner
   adds both, and you start from a folder holding an empty `TRANSLATORS`.

4. **The English itself is wrong** — an issue, never a pull request. `en/` is exported from the
   site; a pull request touching `en/`, `lib/`, `lint.mjs` or `package.json` fails on purpose.
   The owner fixes it in the site and re-exports.

## Before you open a pull request

- Node 24 or newer, nothing to install: `node lint.mjs de` — and again until it is clean.
- One language per pull request. Each is merged and published on its own.
- [Conventional Commits](https://www.conventionalcommits.org/), with your language code as the
  scope. The README's *Commits* section has the three types you will need.
- Fork, branch, open the pull request against `main`. The linter runs here too, in seconds.

## When two natives disagree

They will, about a word — it is the most interesting part and it needs a way to end. What
settles it here, in order:

- **The glossary already in the folder wins over a better isolated word.** One term, one
  gender, one inflection, held across every session, is worth more to a reader than the best
  word in one step. Change it everywhere, or leave it.
- **A native's reading beats the draft.** The drafts have no standing; they are scaffolding, and
  the whole point of this repository is to take them down.
- **The producer's words stay English.** Which ones, and why, is in the README under *What never
  changes*. It is a decision about who reads the course, not about language.
- **What is still open, the owner decides**, and writes the reason in the commit body — so the
  next person inherits the reasoning instead of the argument.

## After you open it

The linter runs automatically. The owner reads the pull request; he does not speak every
language here, so the more your description says about *why*, the faster it merges. On merge the
site is rebuilt and your sessions appear in your language.

Your translation is published under CC BY 4.0, the licence the course's writing carries, with
your name on that language's colophon — put it in `<lang>/TRANSLATORS` when you have read a
whole language through. That file being empty means no person has yet put their name to that
language, which is exactly the gap you are here to close.

One last thing: the readers are people learning a machine, and you are people learning each
other's languages. Disagree about words, never about the person who chose them.
