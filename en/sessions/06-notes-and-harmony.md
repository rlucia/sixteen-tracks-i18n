---
number: 6
chapter: sound
slug: notes-and-harmony
title: Notes and harmony
goal: Put a bassline and four chords under the beat by playing four keys twice, and let the arpeggiator and chord mode do the rest.
needs: [The project from session 5, Headphones connected, "About sixteen minutes"]
teaches: [track-select, load-preset, play-mode, octave, page-setup-per-track, chord-scale, live-recording, arpeggiator, chord-mode, pattern-transpose]
simulator: null
ends: { keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green } }
---

## Step: Where you are
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 5 left A01 changing from loop to loop on track 1, in GRID RECORDING on the snare's
subtrack. If the sequencer is stopped, press [PLAY]. Hold [FUNC] and press [SETTINGS] before
anything new goes in: tracks 2 and 3 fill up in this session, and the save is the floor under
both.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: The beat from session 5 going round: the pickup on every other loop, the ghost notes throwing for their place. Five keys lit on the strip — the snare on 5 and 13 and the three fill snares after it.
recover: Starting here without session 5? That session writes the pattern this one plays over, and it takes about sixteen minutes; any pattern with a beat on track 1 and nothing on tracks 2 and 3 works as well.
:::

## Step: A bass on track 2
keys: [TRK, TRIG 2, PRESET, RIGHT, UP, DOWN, YES]
leds: { TRIG 2: white }
source: manual §5.3.7, §9.1.4, §7.3
mode: menu:LOAD PRESET

Hold [TRK] and press [TRIG 2]: track 2 is the active track. Press [PRESET], [RIGHT] to KEYS,
[UP]/[DOWN] to ⟨bass preset⟩, and [YES] to load it — or any KEYS preset whose lowest notes are
round and short. Then play the bottom row. On track 1 those keys were the kit's eight sounds;
here each one plays the same sound at another pitch, and the top row, silent on the kit, plays
the notes in between (§7.3).

:::note
The same list opened from the FILE menu, [FUNC] + [PRESET], stays open after each load, which
makes trying several presets quicker ([an owner's route](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/606)).
:::

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 1 }
hear: The beat goes on under you. Each key of the bottom row plays one low note of the bass, higher from left to right.
recover: The kit's sounds under the keys mean track 1 is still the active one — hold [TRK], press [TRIG 2], and load again. A list with nothing but kits in it is DRUMS: [RIGHT] once more.
:::

## Step: One voice, an octave down
keys: [FUNC, TRIG, UP, DOWN, LEFT, RIGHT, NO, -]
source: manual §11, §11.1.1, §8.5
mode: menu:TRACK SETUP

Hold [FUNC] and press [TRIG]: TRACK SETUP opens on its TRIG page (§11). [UP] and [DOWN] walk
its lines; PLAY MODE is the first. Set it to MONO with [LEFT]/[RIGHT] and press [NO]: a new note
now cuts the one before, one note at a time (§11.1.1). Then press [-] once. The keyboard drops an
octave, and the lit dot beside [+] and [-] moves from 0 to −1 (§8.5).

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE MONO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: Hold one key and press another: the first stops. Every key sounds an octave lower than before.
recover: Two notes at once: PLAY MODE is still POLY — [FUNC] + [TRIG] again. No drop in pitch: [-] went to a menu that was still open; press it with the main screen showing.
:::

## Step: Four bars for the bass
keys: [FUNC, PAGE, YES, E, NO]
source: manual §10.9, §10.9.1, §10.9.2
mode: menu:PAGE SETUP

Hold [FUNC] and press [PAGE]. PAGE SETUP opens in PER PATTERN, where every track shares one
length (§10.9.1). Hold [FUNC] and press [YES] for PER TRACK, where LENGTH belongs to the active
track alone (§10.9.2). Hold [FUNC] and turn [E]: LENGTH moves sixteen steps at a time — stop at
64, four bars. [NO] closes the menu. Track 1 keeps its 16, so the kit goes round every bar while
track 2 has four to fill.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Nothing new yet: the length only makes room. On the main screen, four small squares for track 2's four pages.
recover: If the kit has four squares as well, the menu was still PER PATTERN when LENGTH moved: [FUNC] + [PAGE], [FUNC] + [YES] for PER TRACK, then with track 1 active ([TRK] + [TRIG 1]) turn LENGTH back to 16. LENGTH creeping one step at a time means [FUNC] is not held while [E] turns.
:::

## Step: Give the pattern a key
keys: [CHORD, NO]
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Press [CHORD]: CHORD/SCALE SETUP, a picture of what the keyboard plays (§8.5.1). With the knob
under each setting, set ROOT to A, SCALE to AEOLIAN (MINOR) and GUIDE to LIGHT, then press [NO].
The setting belongs to the pattern, not to one track. On track 2 the keys in A minor now light:
the whole bottom row, and none of the top — A minor is the white keys.

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD OFF"] }
hear: Nothing changes in the sound. The bottom row lit, the top row dark.
recover: No keys lit: GUIDE is still OFF. A key that plays another note than the one pressed: GUIDE is on SNAP, which moves a key outside the scale to the nearest one inside it — LIGHT only shows.
:::

## Step: Four roots, played in
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Press [STOP]. Hold [RECORD] and press [PLAY]: every track starts from its first step, and LIVE
RECORDING is on, [RECORD] flashing red (§10.4). Hold [KEYBOARD A1] straight away, for one bar —
a count of four — then [KEYBOARD F1] for the second bar, [KEYBOARD C1] for the third and
[KEYBOARD G1] for the fourth. Press [STOP] as the fourth bar ends, then [PLAY] to hear it.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 2 }
hear: Under the beat, four long low notes, one a bar: A, F, C, G, and round again.
recover: A note that stops before its bar is over was let go early. A note played in keeps the length it was held for, and turning LEN on its trig does not change it ([owners found](https://www.elektronauts.com/t/trig-len-not-working/249623/8)): hold [FUNC], press [NO] to undo, and play the four again. The first note belongs with the [PLAY] press, not a beat after it.
:::

## Step: The arp writes the line
keys: [ARP, H, LEFT, RIGHT, E, DOWN, FUNC, NO]
leds: { ARP: cyan }
source: manual §9.4, §9.4.5, §9.4.6
mode: menu:ARPEGGIATOR

Press [ARP] with track 2 active: the ARPEGGIATOR menu (§9.4). Turn [H] to ARP LENGTH 8
(§9.4.6). [LEFT] and [RIGHT] choose one of the eight steps and [E] sets its offset, in semitones
from the note on the trig (§9.4.5): step 1 stays at 0, then +12, +7, step 4 muted with [DOWN], 0,
+7, step 7 muted, +12. Hold [FUNC] and press [ARP] to switch the arpeggiator on. [NO] leaves the
menu; outside it, [ARP] stays lit cyan while track 2 is active.

:::note
The offsets count from each trig's own note, so one figure starts from A in the first bar, F in
the second, then C and G. 0, +2, +7 and +12 stay in A minor over all four roots; +3 fits A but
not F, C or G.
:::

:::checkpoint
screen: { menu: "ARPEGGIATOR", items: ["MODE", "SPEED", "N.LEN", "OFFSET", "ARP LENGTH 8"] }
keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green }
hear: The four long notes become a moving line, eight short steps and round again, jumping to the new root at every bar. In the menu, six trig keys lit green and two dark: the muted steps.
recover: Still one long note: the arpeggiator is off — MODE reads OFF, or [ARP] is dark outside the menu: [FUNC] + [ARP]. The line stops before the bar ends: the note under it is short, and the arp plays only while its trig's note lasts (step 6). One sour note: an offset other than 0, +2, +7 or +12.
:::

## Step: Chords on track 3
keys: [TRK, TRIG 3, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 3: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Hold [TRK] and press [TRIG 3]. Press [PRESET], [RIGHT] to KEYS, [UP]/[DOWN] to ⟨chord preset⟩,
and [YES] — or any KEYS sound that holds its note for as long as the key is down. Then hold
[FUNC], press [PAGE], hold [FUNC] and turn [E] to LENGTH 64 for track 3, and press [NO]. The menu
is still PER TRACK, and each track keeps its own length.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: A bottom-row key holds one note of the new sound for as long as it is held; the bassline and the beat go on.
recover: LENGTH reads 16 after [NO]: track 2 was still active when the menu opened — [TRK] + [TRIG 3], then [FUNC] + [PAGE] again.
:::

## Step: One key, one chord
keys: [CHORD, NO, FUNC, KEYBOARD A1]
leds: { CHORD: cyan }
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Press [CHORD], set SHAPE to 1-3-5 with the knob under it, and press [NO]. Hold [FUNC] and press
[CHORD]: chord mode is on, [CHORD] lit cyan. Press [KEYBOARD A1]: three notes at once, A minor.
Each key plays the chord of A minor that starts on it — [KEYBOARD F1] F major, [KEYBOARD C1] C
major, [KEYBOARD G1] G major (§8.5.1).

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD ON", "SHAPE 1-3-5"], sel: 4 }
hear: One key, three notes: A minor, then F, C and G major from the other three keys.
recover: One note from each key: chord mode is off, [CHORD] dark. F sounds minor: SCALE is on CHROMATIC, where one chord type is stamped on every key — set it back to AEOLIAN (MINOR).
:::

## Step: Four chords, played in
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red, CHORD: cyan }
source: manual §10.4, §8.5.1
mode: live-recording

The gesture of step 6, on track 3: press [STOP], hold [RECORD] and press [PLAY], then hold
[KEYBOARD A1], [KEYBOARD F1], [KEYBOARD C1] and [KEYBOARD G1], a bar each from the first beat.
[STOP] as the fourth bar ends, then [PLAY].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: A minor, F, C, G, a chord a bar, over the bassline.
recover: A chord cut short was let go early; as in step 6, hold [FUNC] and press [NO] to undo, and play the four again — each chord lasts as long as its key was held. Its notes are written on the trig as plain notes, so what you hear is what is kept.
:::

## Step: Chord mode off
keys: [FUNC, CHORD, TRK, TRIG 1, KEYBOARD C1]
source: community https://www.elektronauts.com/t/tonverk-tips-tricks/238162/334
mode: playback

Hold [FUNC] and press [CHORD]: [CHORD] goes dark. Chord mode is one switch for the whole
pattern, the kit included — left on, one key of the kit fires several of its sounds at once. The
four chords stay: they are notes on the trigs now. Hold [TRK], press [TRIG 1], and press
[KEYBOARD C1].

:::checkpoint
hear: The kick alone from [KEYBOARD C1], and the chords still playing on track 3.
recover: The kick comes with other drums: [CHORD] is still lit — hold [FUNC] and press [CHORD].
:::

## Step: Another key, and back
keys: [PTN, +, -]
source: manual §10.10.8
mode: playback

Hold [PTN], press [+] three times, and let go of [PTN]: the bassline and the chords move three
semitones up, to C minor, and the kit stays where it was (§10.10.8). Listen for a few bars. Then
hold [PTN], press [-] three times and let go: home, in A minor. The notes on the trigs never
changed; the transpose sits on top of them.

:::note
Owners tested it on OS 1.4.0: a track on the Subtracks machine is not transposed
([the test](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824/107)).
:::

:::checkpoint
hear: The harmony higher and brighter, the drums unchanged; then the piece as it was.
recover: The drums moved too: track 1 is not on the Subtracks machine. Still higher after three presses of [-]: count what you hear against A — three semitones down from C is A.
:::

## Step: Save
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Hold [FUNC] and press [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: A01 as it now stands: the beat, the bassline, four chords.
recover: No screen said the project was written: [FUNC] was not down when [SETTINGS] went in. Press them together again.
:::

## What you now have

Track 2 plays a bassline that was never written note by note: four roots, one a bar, and an
eight-step figure the arpeggiator builds on each. Track 3 plays A minor, F, C and G, four chords
from four keys. The kit still goes round every bar under four bars of harmony, the pattern is in
A minor again, and all of it is saved.

## Explore further

### A bass that glides
In the same TRACK SETUP page, set PLAY MODE to MONO LEG and switch PORTAMENTO on (§11.1.1,
§11.1.5); its time is on TRIG PAGE 2 (§12.3). Two notes glide into each other when the first
lasts past the start of the second; notes with a gap between them still start clean.

### Dice for the arp
Memorise the pattern first: hold [FUNC] and press [KEYBOARD D#1] (§10.10.6). In the ARPEGGIATOR
menu, [ARP] + [YES] rolls every setting at once, and pressing [E] with [YES] rolls only the
offsets (§9.4). Keep a roll you like, or hold [FUNC] and press [KEYBOARD C#1] to go back.

### A strummed chord
In STEP EDIT each note of a chord keeps its own micro timing: move the upper notes a little later
than the lowest, and the chord rolls in from the bottom instead of landing as a block
([shown here](https://www.youtube.com/watch?v=lrcaoGwYL00&t=2400)).

### Another voicing
Chord mode plays every chord from its root upward. [STEP EDIT] on a chord's trig shows its notes
on the keyboard: a lit key taken off removes that note, an unlit one pressed adds it, and [+] and
[-] reach the octave above or below (§10.3.1).

### The kit with chord mode on
Switch chord mode back on, select track 1 and press a key of the kit: several of its sounds fire
from the one key. [FUNC] + [CHORD] again before saving.

## Next

Session 7 follows the sound out of the tracks: the drums through a bus with a compressor, the
chords into a reverb, and the ROUTING menu that joins them.
