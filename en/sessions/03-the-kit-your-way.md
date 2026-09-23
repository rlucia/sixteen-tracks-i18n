---
number: 3
chapter: rhythm
slug: the-kit-your-way
title: The kit, your way
goal: See one step across the whole kit, retune one sound, swap another for a sample from the card, and meet the supertrack.
needs: ["The project from session 2 (SIXTEEN, or your own name)", Headphones connected, The factory SD card in its slot, "About sixteen minutes"]
teaches: [step-edit, per-subtrack-sound, sample-browser, pool, supertrack, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Where you are
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

If SIXTEEN is not the project on the screen, load it: [FUNC] + [PRESET] opens the FILE menu,
then [UP]/[DOWN] through PROJECT, LOAD and your project, [YES]. Press [PLAY] and leave the
beat running — everything in this session happens while it plays.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Session 2's beat looping from A01: kick, snare, closed hat and clap, all from the kit on track 1.
recover: If you have been playing since and want the saved state back, highlight your project in the LOAD list, press [RIGHT] for PROJECT ACTIONS and choose RELOAD. If [TRIG 2], [TRIG 3] or [TRIG 4] play sounds of their own, your beat is spread over four tracks: session 2 builds it on one, and its first step clears the old one. Starting here without session 2? That session writes the beat this one works on, and it takes about sixteen minutes.
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
happened; the card now holds A01's beat and A02's copy of it. Everything from the next step
on changes the kit, and this is the state you can come back to.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Nothing — the beat keeps running. A save on this machine is silent, and it does not interrupt the sequencer.
recover: If a menu of settings opened, [FUNC] was not down first. Press [NO], hold [FUNC], then press [SETTINGS].
:::

## Step: One step, the whole kit
keys: [STEP EDIT, TRIG 1, TRIG 7, KEYBOARD F1]
leds: { TRIG 1: green }
source: manual §10.3.1
mode: step-edit

Press [STEP EDIT], then [TRIG 1]. The key turns green, and the bottom row now shows the
sounds that play on step 1: the kick and the closed hat. Press [TRIG 7] and the row shows the
closed hat and the clap. Session 2 wrote the beat one sound across the bar; this is the other
way round, one step across the kit. Press [KEYBOARD F1] while step 7 is green and the clap
leaves that step; press it again and it is back. Press [STEP EDIT] again to leave.

:::checkpoint
hear: The beat as it was, once you have put back what you took out.
recover: STEP EDIT is part of GRID RECORDING (§10.3.1), so [RECORD] lights with it. A dim key on the bottom row is the sound you have selected, not one that plays on the step — [owners are warned about it in Elektron's own tutorial](https://www.youtube.com/watch?v=ijPa_vgY8QA).
:::

## Step: Tune one sound
keys: [TRK, KEYBOARD D1, SRC, A]
source: manual §A.2.3
mode: any

Hold [TRK] and press [KEYBOARD D1]: the snare is the chosen sound. Press [SRC] for its
source page and turn DATA ENTRY knob [A], TUNE, down a few steps; pressed in while you turn,
it moves a semitone at a time. Only the snare moves. Each of the eight sounds keeps its own
SRC, FLTR, AMP and MOD pages, and what they share is the kit's effects, which the supertrack
holds — two steps on.

:::checkpoint
hear: A lower snare in the same beat; the kick, the hats and the clap as they were.
recover: If another sound moved, the red key was elsewhere when you turned: hold [TRK], press [KEYBOARD D1], and turn again. To go back, read TUNE before you turn and return it to that value.
:::

## Step: Swap one sample
keys: [TRK, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Hold [TRK] and press [KEYBOARD F1], the fourth
SUBTRACKS key, so the clap is the sound you are on. [FUNC] + [KEYBOARD F1] opens the
Sample browser on the SD card, aimed at that one subtrack: [UP]/[DOWN] scrolls the card, [YES]
opens a folder and [YES] on a sample loads it into the project's sample pool and onto the
subtrack (§5.2.6), and [NO] steps back up a level. Pick a short sound you like in the clap's place —
of the four voices, it is the one the piece is least fussy about — then [FUNC] + [NO] to leave
the browser (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Your own sample on steps 7 and 15, in place of the kit's clap, with the rest of the beat unchanged.
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
keys: [FUNC, SETTINGS, RECORD, TRK, KEYBOARD A1]
source: manual §9.1.1
mode: grid-recording

Hold [FUNC] and press [SETTINGS]: saved, in silence, the way every save here goes. Then press
[RECORD] if it is dark, hold [TRK] and press [KEYBOARD A1], the closed hat's key, and look at
it one last time — every odd step red. That picture is this session's masthead.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: The whole beat from track 1, with a lower snare and your own sound in the clap's place, saved.
recover: A dark strip means [RECORD] is not lit: press it for GRID RECORDING and look again. The save shows nothing and asks nothing; if you want proof, your project's name is in the FILE menu's PROJECT, LOAD list.
:::

## What you now have

A01 plays the beat from track 1 on HELLO KIT: the kick on [KEYBOARD C1], a snare on
[KEYBOARD D1] tuned lower than the kit's, the closed hat on [KEYBOARD A1] and, on
[KEYBOARD F1], a sound you chose off the card yourself. Tracks 2, 3 and 4 are empty, free for
the bass, the chords and the pad of sessions 6 and 8, and A02 keeps session 2's copy of the
beat until session 9 needs the slot. All of it is saved.

## Explore further

### Start from an empty kit
Hold [TRK] and press [TRIG 2], then [FUNC] + [SRC]: the MACHINE menu. Choose SUBTRACKS and a
second list asks which instrument to load — an empty kit at one end, the factory instrument
sets beside it, and here the [KEYBOARD] previews the highlighted one before you commit. The
empty kit is eight subtracks waiting for samples, filled one at a time through the sample
browser, and nothing fills eight slots from one folder in a single pass —
[owners have asked for that](https://www.elektronauts.com/t/subtracks-use-cases/239235).
Do this on track 2, not on your beat: a new machine rewrites the track's settings (§5.3.2).

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
