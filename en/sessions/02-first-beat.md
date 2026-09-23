---
number: 2
chapter: rhythm
slug: first-beat
title: First beat
goal: Write a one-bar beat on the kit's sounds in GRID RECORDING, mute one sound, copy the pattern, and save.
needs: [The SIXTEEN project from session 1 (or any project with a drum kit on track 1 — step 1 says how), Headphones connected, "About sixteen minutes"]
teaches: [grid-recording, subtrack-select, page-length, mute, copy-paste-clear, undo, pattern-select]
simulator: null
ends: { keys16: { 1: red, 5: red, 9: red, 13: red } }
---

## Step: Where you are
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES]
source: manual §9.1.1
mode: menu:FILE

If SIXTEEN is not the project on the screen, load it: [FUNC] + [PRESET] opens the FILE menu,
then [UP]/[DOWN] through PROJECT, LOAD and your project, [YES]. Starting here without session 1? You need a project
you can edit with a drum kit on track 1 — session 1, steps 3 to 6, takes five minutes.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Press [TRIG 1]: the kick from session 1.
recover: If you experimented since and want the saved state back, highlight your project in the LOAD list and press [RIGHT] for PROJECT ACTIONS, then RELOAD. That is the last save.
:::

:::note
Loading a project replaces the one you are in (§9.1.1). If the machine has been on since
session 1 and you have been playing, save before you load anything — the working state you
are about to abandon is not written back to your project on its own.
:::

## Step: Choose a sound in silence
keys: [TRK, KEYBOARD D1, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1]
leds: { KEYBOARD C1: red }
source: manual §A.2.3
mode: any

Hold [TRK] and press [KEYBOARD D1]. The snare is now the chosen sound and nothing played:
the same silent select that [TRK] gives the trig keys for tracks, here for the sounds of one
kit. The number on the screen says 2 and D1 is the red key. Do the same with [KEYBOARD A1],
the closed hat, and [KEYBOARD F1], the clap, then finish on [KEYBOARD C1], the kick. These
four are the beat.

:::checkpoint
hear: Nothing while [TRK] is held. Each sound plays only when you press its key on its own.
recover: A sound that played means [TRK] was not down first — hold it, then press. With another kit, the snare, the closed hat and the fourth voice are wherever your ear found them in session 1; use those keys wherever this session names D1, A1 and F1.
:::

## Step: Enter GRID RECORDING
keys: [RECORD]
leds: { RECORD: red }
source: manual §10.3
mode: playback

Press [RECORD]. The key lights red, and that red is GRID RECORDING. The sixteen trig keys
have stopped standing for tracks. They now stand for the sixteen steps of one bar, for the
chosen sound of the active track.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", page: { n: 1, of: 1 } }
hear: Nothing yet; the sequencer is not running.
recover: If the trig keys show pattern slots instead, you are in pattern select. Press [PTN] or [NO] to leave it, then press [RECORD].
:::

:::note
Entering GRID RECORDING does not start anything. [PLAY] starts the sequencer, and you can
write trigs while it runs or while it is stopped — whichever you find easier.
:::

## Step: The kick on the beat
keys: [TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3, §10.2.1
mode: grid-recording

Hold [TRK] and press [KEYBOARD C1] to make the kick the sound you are writing. Then press
[TRIG 1], [TRIG 5], [TRIG 9] and [TRIG 13]: one kick on every beat. Each of the four lights
red — red is a note trig.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Nothing yet.
recover: A key that went dark when you pressed it already held a trig and you removed it — a quick press is the delete (§10.3). Press it again.
:::

## Step: Play
keys: [PLAY, MAIN VOLUME]
leds: { RECORD: red }
source: manual §10.1.2
mode: grid-recording

Press [PLAY]. Four kicks to the bar at your tempo, and a light running along the sixteen
keys. Leave it running: everything after this is written while it plays.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: A kick on every beat, looping.
recover: Silence while the light still runs is usually one of two things: [MAIN VOLUME] too low, or the headphone plug not pushed home. If the light is not moving at all, you pressed [PLAY] twice — the second press pauses (§10.1.2). Press it once more.
:::

## Step: The snare on two and four
keys: [TRK, KEYBOARD D1, TRIG 5, TRIG 13]
leds: { RECORD: red, TRIG 5: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Hold [TRK] and press [KEYBOARD D1]. The sixteen keys empty out: they are showing the
snare's steps now, and the snare has none yet. Press [TRIG 5] and [TRIG 13].

:::checkpoint
keys16: { 5: red, 13: red }
hear: Kick, snare, kick, snare.
recover: If the kick's four keys are still lit you never left the kick. Hold [TRK] — hold, not tap — and press [KEYBOARD D1] again.
:::

## Step: Hats every other step
keys: [TRK, KEYBOARD A1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Hold [TRK] and press [KEYBOARD A1], the closed hat. Now press every odd key from [TRIG 1] to [TRIG 15]: eight
hats, one every eighth note. Prefer one on every step? Press them all — the worked piece
keeps eight, and the checkpoints from here on do not care which you chose.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: The beat has a pulse running between the drums.
recover: Too busy: press the keys you want dark. Quick press removes; a held press keeps the trig and prepares it for editing instead (§10.3).
:::

## Step: The fourth voice, off the beat
keys: [TRK, KEYBOARD F1, TRIG 7, TRIG 15]
leds: { RECORD: red, TRIG 7: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Hold [TRK] and press [KEYBOARD F1], the clap. Put it on [TRIG 7] and [TRIG 15]: the "and"
before beats three and one, where it pushes the bar forward. Anywhere off the snare is fine,
and so is another short sound of the kit in the clap's place.

:::checkpoint
keys16: { 7: red, 15: red }
hear: The bar leans into the next one.
recover: If it lands on top of the snare and blurs it, move it: press the key to remove, press another to add.
:::

## Step: Fix one hit
keys: [TRIG 7, YES, LEFT, RIGHT]
leds: { RECORD: red }
source: manual §10.3, §19
mode: grid-recording

Choose a hit you are not sure about — we use the clap on step 7. Hold [TRIG 7] and press
[YES]: that one trig sounds, alone, with whatever is set on it. A quick press of [TRIG 7]
removes it; press again to put it back.

:::checkpoint
hear: The single hit on its own, while you hold the key and press [YES].
recover: A held trig is opened for editing, not deleted, so holding one costs you nothing. If a MICRO TIMING menu appeared, you brushed [LEFT] or [RIGHT] while holding (§10.5); release the key and press [NO].
:::

## Step: One page, sixteen steps
keys: [FUNC, PAGE, E, NO]
leds: { RECORD: red }
source: manual §10.9, §10.9.1
mode: menu:PAGE SETUP

Hold [FUNC] and press [PAGE]. LENGTH, on DATA ENTRY knob [E], reads 16 — one page, one bar,
which is what this session wants. The small squares at the top of the main screen count the
pattern's pages; there is one. [NO] backs out again, leaving everything as it was.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER PATTERN, "LENGTH 16", "SPEED 1"] }
hear: Unchanged.
recover: If you moved LENGTH by accident, turn knob [E] back to 16 before [NO]. A longer pattern is not empty bars — the steps you already have are copied forward into the new pages (§10.9.1).
:::

:::note
Two things here bite later. This menu sets one length for *every* track until you press
[FUNC] + [YES], which switches it to per-track lengths. And the manual cannot decide what
this menu is called — §10.9's heading and the panel
legend say PAGE SETUP, §10.9's own text says SCALE. They are the same menu.
:::

## Step: Mute one sound
keys: [MUTE, KEYBOARD D1, UP, DOWN]
leds: { KEYBOARD C1: green, KEYBOARD E1: green, KEYBOARD F1: green, KEYBOARD G1: green, KEYBOARD A1: green, KEYBOARD B1: green, KEYBOARD C2: green }
source: manual §8.6
mode: playback

Press [MUTE] with track 1 still the active track — the kit's sounds are offered only for the
track you were on. The bottom-row keys light for them: lit ones play, dark ones are
silenced. Press [KEYBOARD D1] and the snare drops out; press it again and it returns. Press
[MUTE] to leave. Green is GLOBAL mute, which follows you into every pattern and is stored
with the project; [MUTE] + [DOWN] switches to PATTERN mute, magenta, which belongs to this
pattern alone. [MUTE] + [UP] goes back to global.

:::checkpoint
hear: The beat without its snare, then with it again.
recover: Left something muted? [MUTE] itself glows dimly, green or magenta, whenever anything is — and the colour tells you which mode to go looking in. Press it and find the dark key. In this mode the trig keys are whole tracks: a trig key would silence the kit, every sound at once.
:::

:::note
Go by §8.6 for these colours, not the quick start. §7.4 gives one rule — dark is muted, green
is audible — and never mentions that green is specific to global mode, so a reader who
learns it there has half a rule.
[Owners work the two modes out by analogy with other Elektron boxes](https://www.elektronauts.com/t/global-mute-mode/242420),
which is what happens when a manual answers the same question twice.
:::

## Step: Copy the pattern to A02
keys: [RECORD, FUNC, PTN, TRIG 2, STOP]
leds: { TRIG 1: white, TRIG 2: red }
source: manual §6.6, §10.10.4, §10.1.1
mode: playback

Press [RECORD] to leave GRID RECORDING — a pattern copy will not run while it is on. Hold
[FUNC] and press [RECORD], whose mint legend reads Copy. Hold [PTN] and press [TRIG 2]: A02
is chosen, and it starts when A01 reaches its end. In pattern select a white key is a slot
with something in it and the red key is the one playing. Now hold [FUNC] and press [STOP],
mint legend Paste. A02 is your beat, kept safe against the changes coming in session 3.

:::checkpoint
screen: { bank: "A02", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: white, 2: red }
hear: The same beat, now playing from A02.
recover: If A02 comes round silent, the paste happened before the switch did. Wait for A02's number to stop flashing at the top left — that flashing is the pattern queued, not the machine ignoring you — then [FUNC] + [STOP] again.
:::

:::note
Staying inside bank A is this session's choice, not a wall. To reach another bank you press
[PTN], pick the bank on the bottom [KEYBOARD] row, then press a trig key for the pattern
(§10.1.1). That row answers to three names in this manual — bottom [KEYBOARD] row, the
[SUBTRACKS] keys, the key marked [KEYBOARD C1] for bank A — and §3.1's panel list, item 21,
prints two of them on one line, because they are one row of keys. Inside the bank you are already in,
[PTN] and a trig key is the whole gesture, which is all today needs.
:::

## Step: Clear, and undo
keys: [FUNC, PLAY, YES, NO]
leds: { TRIG 2: red }
source: manual §6.6, §10.10.4, §10.10.5
mode: playback

Hold [FUNC] and press [PLAY] — mint legend Clear — then [YES] at the prompt. Every trig in
A02 is gone and the next loop is silence. Now hold [FUNC] and press [NO], mint legend Undo.
The beat is back. Do this on purpose once.

:::checkpoint
hear: A bar of silence, then the beat again.
recover: If undo does nothing, paste again — the copy is still in the clipboard. Undo reaches a paste or a clear at every level the sequencer keeps one: a whole pattern, one track's sequence, a single page, a page of parameters, a track's sound. It stops at exactly one thing, and §10.10.5 says so outright: clear a track preset and it is gone.
:::

## Step: Back to A01, and save
keys: [PTN, TRIG 1, FUNC, SETTINGS, RECORD, TRK, KEYBOARD C1]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.1.1, §9.1.1
mode: playback

Hold [PTN] and press [TRIG 1] to return to A01. Hold [FUNC] and press [SETTINGS]: saved,
both patterns, no prompt. Then press [RECORD] once more, hold [TRK] and press
[KEYBOARD C1], and look at the kick one last time — steps 1, 5, 9 and 13, red. That picture is this session's masthead.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Your beat, from A01.
recover: The save says nothing and shows no naming screen; that is what a save looks like here. If you want to be certain, the FILE menu's PROJECT, LOAD list has your name in it.
:::

## What you now have

SIXTEEN has a one-bar beat on A01 — kick, snare, closed hat and clap, all from the kit on
track 1 — and A02 holds a copy of it. Tracks 2 to 4 are still empty. Both patterns are
saved. Stop here, or keep playing: everything you
change from now on is unsaved until the next [FUNC] + [SETTINGS].

## Explore further

### A second page
[FUNC] + [PAGE], then turn LENGTH up to 32. The pattern is two pages and the second is a
copy of the first, not blank bars (§10.9.1). In GRID RECORDING, [PAGE] flips between them,
so you can change a hit on page two only. Put LENGTH back to 16 before session 3, or keep it
and know that session 3's checkpoints describe one page.

### Copy one sound's trigs
In GRID RECORDING — this one wants it *on* — [FUNC] + [RECORD] lifts the trigs off the sound
you are on; choose another sound with [TRK] and its bottom-row key and [FUNC] + [STOP] drops
them in (§10.10.4). Put the closed hat's pattern on the tom, [KEYBOARD B1], and hear what it
does to the bar; [FUNC] + [NO] takes it back. The same two keys, with grid recording off,
move a whole pattern: the mode decides what they act on.

### Quick mute
[MUTE] + [TRIG 1] mutes the whole kit without entering mute mode at all, and does it again
to unmute (§8.6). This is the one to learn if you ever play this live.

### Swing
In the [TEMPO] menu, knob [D] sets SWING between 50 and 80 per cent, and 50 is dead even
(§7.5.1). Try 58 with the hats running. Set it back to 50 before you save if you want the
worked piece's feel.

### Copy a pattern without leaving this one
Press [PTN], then hold a trig key and press [RECORD] to copy that pattern, [STOP] to paste
into it, [PLAY] to clear it — all without moving off the pattern you are playing. This is
[new in OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes) and it is
a different family from the [FUNC] combinations above, which always act on where you are.

## Next

Session 3 makes the kit yours: one step seen across all eight sounds, a sound retuned, a
sample of your own in place of the clap. Your A02 copy stays exactly as it is. The key-colour
lesson — trig keys as tracks, as steps, as pattern slots, and the bottom row as the kit's
sounds — is the thing to carry forward.
