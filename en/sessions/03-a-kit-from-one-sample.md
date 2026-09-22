---
number: 3
chapter: rhythm
slug: a-kit-from-one-sample
title: A kit from one sample
goal: Put the whole beat on one track with a Subtracks kit, free the other three, and swap one of its sounds for one you choose from the card.
needs: ["The project from session 2 (SIXTEEN, or your own name)", Headphones connected, The factory SD card in its slot, "About sixteen minutes"]
teaches: [subtracks, supertrack, machine-select, sample-browser, pool, track-clear, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Where you are
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

If SIXTEEN is not the project on the screen, load it: [FUNC] + [PRESET] opens the FILE menu,
then [UP]/[DOWN] through PROJECT, LOAD and your project, [YES]. Press [PLAY] and leave the
beat running — this session rebuilds it underneath you while it plays.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Session 2's beat looping from A01: kick, snare, hats and a fourth voice, across four tracks.
recover: If you have been playing since and want the saved state back, highlight your project in the LOAD list, press [RIGHT] for PROJECT ACTIONS and choose RELOAD. Starting here without session 2? That session writes the beat this one takes apart, and it takes about sixteen minutes.
:::

## Step: Three lives of a trig key
keys: [TRK, PTN, RECORD]
leds: { TRIG 1: white, RECORD: red }
source: manual §5.3.7, §10.1.1, §10.2.1
mode: playback

With the beat running, hold [TRK]: the sixteen keys are the sixteen tracks, and the white one
is the track you are on (§5.3.7). Hold [PTN] instead and the same keys are pattern slots —
white where a pattern lives, red for the one playing, which is A01 with your A02 copy beside
it (§10.1.1). If [RECORD] is already lit from session 2, press it once to put it out first.
Press [RECORD] and they are the sixteen steps of one bar on the active track, red where a note
trig sits (§10.2.1); press it again to come back out. Three jobs, one row of
keys, and the colour is the only thing that says which: the
[key colours page](/key-colours/) keeps the whole list.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: The beat runs through all three. Nothing you pressed changed a sound.
recover: If your first press of [RECORD] put its light out rather than on, session 2 left GRID RECORDING on; press it once more. The strip above is the third life — track 1's kick, on the four beats you wrote in session 2.
:::

## Step: Save first
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Hold [FUNC] and press [SETTINGS]. Nothing asks you anything and nothing on screen says it
happened; the card now holds A01's four-track beat and A02's copy of it. Everything from the
next step on rewrites track 1, and this is the state you can come back to.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Nothing — the beat keeps running. A save on this machine is silent, and it does not interrupt the sequencer.
recover: If a menu of settings opened, [FUNC] was not down first. Press [NO], hold [FUNC], then press [SETTINGS].
:::

## Step: A Subtracks machine on track 1
keys: [TRK, TRIG 1, FUNC, SRC, UP, DOWN, KEYBOARD, YES]
source: community https://www.youtube.com/watch?v=QHRGueJ8FsI
mode: menu:MACHINE

Hold [TRK] and press [TRIG 1]. Hold [FUNC] and press [SRC]: the MACHINE menu opens on the
machines track 1 can take. [UP]/[DOWN] to SUBTRACKS and [YES] — and a second list asks which
instrument to load, an empty kit at one end and the factory kits beside it. Play the
[KEYBOARD] to hear the highlighted one before you commit, then press [YES] on a factory drum
kit whose eight sounds you like.

:::checkpoint
screen: { menu: "MACHINE", items: [SINGLE PLAYER, MULTI PLAYER, SUBTRACKS, GRAINER, WAVEFINDER, MIDI], sel: 2 }
hear: Track 1 still fires on all four beats, but what it fires is the new kit: session 1's kick went with the machine.
recover: A list of machines rather than instruments means [YES] has not landed on SUBTRACKS yet. Loaded a kit you do not like? [FUNC] + [SRC], SUBTRACKS again, and choose another — that is the manual's own way back (§5.3.1).
:::

:::note
"Empty" is a choice, not silence: the empty instrument gives you eight subtracks waiting for
samples, one at a time through the sample browser, and nothing fills eight slots from one
folder in a single pass —
[owners have asked for that](https://www.elektronauts.com/t/subtracks-use-cases/239235). A
factory kit arrives full, which is why this session starts with one and swaps a single sound
in step 10. The kick goes either way: a preset is the settings on the SRC, FLTR, AMP, FX and
MOD pages (§5.3.2), and a new SRC machine rewrites them.
:::

## Step: Play the kit
keys: [SUBTRACKS]
source: manual §3.1, §A.2.3
mode: any

Press the eight [SUBTRACKS] keys one at a time: eight sounds, one per key, and that is the
kit. They are not a new row of controls — they are the bottom row of the keyboard, printed
with both names, doing a fourth job now that a Subtracks machine is on the track.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Eight different samples, one per key, over the beat that is still running.
recover: A key that makes no sound is an empty subtrack in the kit you chose, which is no obstacle: this session uses four of the eight. The machine readout is drawn here as SUBTRACKS; if your unit prints it some other way, the unit is right. Your unit will settle that.
:::

## Step: Clear track 1's old trigs
keys: [STEP EDIT, FUNC, PLAY]
source: manual §10.10.4, §10.3.1
mode: step-edit

Press [STEP EDIT]. STEP EDIT is part of GRID RECORDING (§10.3.1), so expect [RECORD] to be
lit. Hold [FUNC] and press [PLAY]: that clears every trig across all eight
subtracks and the supertrack in one press, which is the only clear that reaches the whole kit
(§10.10.4). Press [STEP EDIT] again to leave.

:::checkpoint
keys16: { }
hear: The kit goes quiet and the loop comes round empty; tracks 2, 3 and 4 play on.
recover: A trig still lit belongs to a subtrack the clear did not reach: select it with [TRK] + [SUBTRACKS], press [RECORD] for GRID RECORDING, and clear that one with [FUNC] + [PLAY]. In plain GRID RECORDING that combination takes the selected subtrack alone, which is [what owners find when they expect a whole-track wipe](https://www.elektronauts.com/t/tonverk-user-thread/238631/2436).
:::

:::note
This clear is undoable: [FUNC] + [NO] puts the trigs back (§10.10.5), and undo reaches pastes
and clears at every level the sequencer keeps one. The clear with no undo is a track preset's,
and that one is [TRK] + [PLAY] — Explore further, below.
:::

## Step: The kick on subtrack 1
keys: [RECORD, TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Press [RECORD] for GRID RECORDING. Hold [TRK] and press [KEYBOARD C1], the first SUBTRACKS
key: that selects subtrack 1 without sounding it. Now press [TRIG 1], [TRIG 5], [TRIG 9] and
[TRIG 13] — the kick, on the same four beats as session 2, on a subtrack instead of a track.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: A kick on every beat again, and this time the whole of it comes from track 1.
recover: If the subtrack sounded as you selected it, [TRK] was not held down. If subtrack 1 of your kit is not a kick, press the [SUBTRACKS] keys until you find the one that is and use that subtrack here instead; the rest of the session only cares that you know which sound sits where.
:::

## Step: Snare, closed hat, open hat
keys: [TRK, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

[TRK] + [KEYBOARD D1], the second SUBTRACKS key, takes you to subtrack 2, and the snare goes
on [TRIG 5] and [TRIG 13]. The third key, [TRK] + [KEYBOARD E1], is subtrack 3, the closed
hat: every odd step, from [TRIG 1] to [TRIG 15]. The fourth, [TRK] + [KEYBOARD F1], is
subtrack 4, the open hat, on [TRIG 7] and [TRIG 15] — then [TRK] + [KEYBOARD E1] once more,
so the closed hat's row is the one on the keys.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Session 2's beat, complete, from one track. The strip is subtrack 3: the closed hat on every odd step.
recover: A row that already has trigs you did not write is the subtrack you just left — hold [TRK], do not tap it, and press the subtrack's key again. These three do not have to be a snare and two hats: put the kit's best voices on these steps.
:::

## Step: Free tracks 2 to 4
keys: [TRK, TRIG 2, TRIG 3, TRIG 4, FUNC, PLAY]
source: manual §10.10.4
mode: grid-recording

Still in GRID RECORDING: hold [TRK] and press [TRIG 2], then hold [FUNC] and press [PLAY].
The snare's trigs are gone. Do the same on [TRIG 3] and on [TRIG 4] — three ordinary tracks,
three clears, and the whole beat is coming from track 1.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, type: "AUDIO" }
hear: The same beat as a minute ago with nothing doubling it: tracks 2, 3 and 4 are silent.
recover: Cleared one too many? [FUNC] + [NO] puts the last one back (§10.10.5). If a row you cleared is still lit, the clear landed on the track you were on before — hold [TRK] while you choose.
:::

:::note
The presets stay where they are. This clear takes trigs, not sounds: tracks 2 to 4 still hold
session 2's snare and hats, and session 6 loads a bass and chords over them. A02 still holds
the four-track version of the beat, and nothing overwrites it before session 9.
:::

## Step: Swap one sample
keys: [TRK, TRIG 1, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Hold [TRK] and press [TRIG 1] to come back to the kit, then [TRK] + [KEYBOARD F1], the fourth
SUBTRACKS key, so the open hat is the subtrack you are on. [FUNC] + [KEYBOARD F1] opens the
Sample browser on the SD card, aimed at that one subtrack: [UP]/[DOWN] scrolls the card, [YES]
opens a folder and [YES] on a sample loads it into the project's sample pool and onto the
subtrack (§5.2.6), and [NO] steps back up a level. Pick a sound you like for the open hat — of
the four voices, it is the one the piece is least fussy about — then [FUNC] + [NO] to leave the
browser (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Your own sample on steps 7 and 15, in place of the kit's open hat, with the rest of the beat unchanged.
recover: If one [YES] adds the sample but the subtrack will not play it, the browser wants its OPERATIONS menu: press [RIGHT], choose LOAD SAMPLES and press [YES] (§6.13.1). Whether this route needs one press or two is a question for the unit — the manual describes both, on different pages.
:::

:::note
There is no screen called the sample pool. The pool is the manual's name for what the project
has loaded into RAM, and you look at it through SAMPLE BANKS in this same browser (§6.13.2);
the browser shows what it has cost, in megabytes and as a percentage of the RAM
(§6.13). Ask the forum for "the sample pool" and
[you get redirected](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/965).
:::

## Step: The supertrack, seen once
keys: [TRK, TRIG 1, KEYBOARD C1]
source: manual §A.2.3
mode: any

Hold [TRK] and press [TRIG 1] twice: once selects track 1, again selects its supertrack, and
three small white rectangles appear above the track number. The supertrack is not a
ninth sound — it is where the eight subtracks' shared settings live: the FX pages, the two FX
LFOs and, owners find, the send levels with them. Hold [TRK] and press [KEYBOARD C1], the first SUBTRACKS key,
to come back out.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", super: true }
hear: Nothing new. The supertrack has no voice of its own, and the beat runs on underneath it.
recover: No rectangles above the track number means the second press chose a different track — hold [TRK] down and press [TRIG 1] twice without letting go.
:::

:::note
A lock placed here moves all eight subtracks at once, which suits
[tonal or textural material more than a drum kit](https://www.youtube.com/watch?v=QHRGueJ8FsI);
[send levels are shared here too](https://www.elektronauts.com/t/tonverk-subtrack-drum-strategies/243084),
rather than set per subtrack, which is why mixing a kit voice by voice goes through the
supertrack. Elektron's presenter in that video
calls the screen mark three dots rather than three rectangles, so what it looks like is worth a
second glance on your own unit.
:::

## Step: Save
keys: [FUNC, SETTINGS, TRK, KEYBOARD E1]
source: manual §9.1.1
mode: grid-recording

Hold [FUNC] and press [SETTINGS]: saved, in silence, the way every save here goes. Then hold
[TRK] and press [KEYBOARD E1], the third SUBTRACKS key, and look at the closed hat one last
time — every odd step red. That picture is this session's masthead.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: The whole beat from track 1 alone, saved.
recover: A dark strip means [RECORD] is not lit: press it for GRID RECORDING and look again. The save shows nothing and asks nothing; if you want proof, your project's name is in the FILE menu's PROJECT, LOAD list.
:::

## What you now have

A01 plays the whole beat from track 1: a Subtracks kit with a kick on subtrack 1, a snare on
2, a closed hat on 3 and, on 4, an open hat you chose off the card yourself. Tracks 2, 3 and 4
still hold session 2's presets but no trigs — free for the bass, the chords and the pad of
sessions 6 and 8 — and A02 keeps the four-track version of the beat until session 9 needs the
slot. All of it is saved.

## Explore further

### STEP EDIT, one step at a time
In playback, press [STEP EDIT] and then a trig key: it turns green, and the keyboard adds and
removes notes on that one step (§10.3.1). On a Subtracks track that is how you look at a
single step across the kit rather than one subtrack across the bar.

### Copy all eight subtracks at once
In STEP EDIT, [FUNC] + [RECORD] copies every trig on the eight subtracks and the supertrack
together, and [FUNC] + [STOP] pastes them onto another track running a Subtracks machine
(§10.10.4). The same two keys in plain GRID RECORDING move one subtrack.

### The clear with no undo
[TRK] + [PLAY] resets a track's preset parameters, which is a different thing from clearing
its trigs — and it is the one operation the sequencer's undo does not reach (§10.10.5).
[FUNC] + [NO] will not bring a preset back, so try it on a track you are willing to lose.

### The pool, seen whole
[FUNC] + [SAMPLING] opens the same Sample browser from the top. Choose SAMPLE BANKS for every
sample this project has loaded, with SELECT UNUSED and UNLOAD to clear out the ones no pattern
plays (§6.13.2).

## Next

Session 4 keeps this kit and makes it move: ghost notes, a filter lock on one hat, a snare
roll, and a part played in live and then quantised. Nothing new is loaded — all of it comes
out of the eight sounds you already have.
