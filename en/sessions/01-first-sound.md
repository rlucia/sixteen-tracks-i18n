---
number: 1
chapter: rhythm
slug: first-sound
title: First sound
goal: Power up, put one sound on track 1, play it from the keyboard, set the tempo, and save a project you can come back to.
needs: [The Tonverk and its power supply, Headphones with a 1/4" plug (or a mixer on OUT A/B), The factory SD card in its slot, "About sixteen minutes"]
teaches: [power, volume, new-project, track-select, load-preset, keyboard, octave, tempo, metronome, name-project, save-project]
simulator: null
ends: { keys16: { 1: white } }
---

## Step: Power on
keys: []
source: manual §3.2, §3.3, §5.2.1
checked: yes
mode: any

Plug the supplied adapter into a wall socket and its USB cable into either USB port on the
back; both ports can power the machine, and the little screw beside the port is there to
stop the cable working loose. Press POWER on the rear panel. The screen lights and shows
the project the Tonverk was last using — there is no first-run wizard, and nothing here
needs a decision from you.

:::checkpoint
hear: Nothing yet. The machine is on and quiet, showing a project you did not choose.
recover: Nothing lights? The cable belongs in USB 1 or USB 2, and the manual's recommended supply is the Elektron PSU-5 that came in the box (§3.2, §20). A laptop port or a phone charger may not be enough.
:::

:::note
To switch off later: press POWER, then [YES] — or press POWER twice. Wait for every LED and
the screen backlight to go dark before you pull the cable. If the machine ever stops
responding, holding POWER down forces it off, and anything unsaved goes with it.
:::

## Step: Headphones and the two volume knobs
keys: [MAIN VOLUME, LEVEL/DATA]
source: manual §3.1, §6.1
checked: yes
mode: any

Plug your headphones into OUT E/F (HEADPHONES) on the rear. Turn [MAIN VOLUME] to about a
quarter. There are two large knobs on the left of this panel and only this one is the
*output* level: [LEVEL/DATA] is the level of whichever track is active, and it also scrolls
lists and sets values everywhere else in the machine. Leave it alone for now.

:::note
Turning [LEVEL/DATA] down to quieten your headphones pulls one track's level down and
leaves it there; turn [MAIN VOLUME] back up later and that track is still quiet, with
nothing on screen to say why.
[A walkthrough that keeps the two apart](https://www.youtube.com/watch?v=lrcaoGwYL00).
:::

## Step: A fresh project
keys: [FUNC, PRESET, UP, DOWN, YES, NO]
source: manual §9.1, §9.1.1
checked: yes
mode: menu:FILE

Hold [FUNC] and press [PRESET]: the FILE menu opens. Go to PROJECT with [UP]/[DOWN] and
[YES], then NEW and [YES]. If you are asked to save the project that was open, press [NO] —
the factory project is already on the card and you have changed nothing in it.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
hear: Nothing. An empty project, pattern A01, no sounds loaded.
recover: If a list of projects opened instead, you are in LOAD rather than NEW. Press [NO] once and pick NEW.
:::

:::note
A new project loads nothing, but the preset browser in the next steps still lists the whole
factory library. That is the card's library, which is shared by every project, not your
project's contents — the distinction that
[this thread](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)
exists to explain. Nothing you do in here can hurt the factory material.
:::

## Step: Select track 1
keys: [TRK, TRIG 1]
leds: { TRIG 1: white }
source: manual §5.3.7
checked: yes
mode: any

Hold [TRK] and press [TRIG 1]. Track 1 is now the active track: the one the screen
describes, the one [LEVEL/DATA] controls, the one the keyboard will play. Holding [TRK]
matters — a bare [TRIG 1] selects the track *and* fires it, which is a note you did not ask
for every time you change track.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
keys16: { 1: white }
hear: Nothing yet; there is no sound on the track.
recover: The screen's bottom-left corner is the readout to trust: it says T1. A bare press of [TRIG 1] selects track 1 too — and fires it, which is the whole difference.
:::

:::note
Three parts of the manual spell this key three ways — [TRK] in §5.3.7, TRACK in §10.3, and
§9.1.4's own preset procedure asks for [FUNC] and a trig key instead. The panel in front of
you prints TRK, so that is what this course says.
[Owners settle it the same way](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
[TRK] and a trig key is the silent select.
:::

## Step: Load a kick
keys: [PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §7.1, §9.1.4
checked: yes
mode: menu:LOAD PRESET

Press [PRESET]. The LOAD PRESET menu opens on the active track. [LEFT]/[RIGHT] move between
the preset categories, DRUMS and KEYS; stay in DRUMS. Scroll with [UP]/[DOWN] or
[LEVEL/DATA] until you find a kick drum — any preset named as one will do. The worked piece
uses the first kick in the list; pick one you like. Press [YES] to load it to track 1.

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 0 }
hear: Press [TRIG 1] once. The kick plays.
recover: Silence: [MAIN VOLUME] up a little, and the headphone plug all the way in. If [TRIG 1] makes no sound at all, the preset went somewhere else — hold [TRK], press [TRIG 1], and load it again.
:::

:::note
There is no preview here. The only way to hear a preset is to load it, and loading replaces
whatever the track was holding.
[Reviewers call it the flow killer](https://www.soundonsound.com/reviews/elektron-tonverk).
Nor is [FUNC] + [NO] a way back: undo is for pastes and clears (§10.10.5), and loading a
preset over another is neither of those.
:::

:::note
Loading a preset copies it into the pattern (§9). From now on a knob you turn changes *this
pattern's copy*, never the file on the card. That is the first of the five container rules;
the map on [Before you start](/before-you-start/) shows the rest.
:::

## Step: Play it from the keyboard
keys: [KEYBOARD]
leds: { TRIG 1: white }
source: manual §7.3, §8.5
checked: yes
mode: any

Press the bottom-row [KEYBOARD] keys, C1 to C2, then the black keys above them. It is the
same kick every time, played at a different pitch: the keyboard is chromatic and the preset
follows it. A drum preset played two octaves down is a different instrument, which is worth
five seconds of your time.

:::checkpoint
hear: The preset plays at a different pitch on each key.
recover: If the keyboard plays something that is not your kick, the active track moved. [TRK] + [TRIG 1] brings it back.
:::

:::note
The keyboard does not always follow the track you just chose. Select anything from track 9
to 16 while an audio track was active and the [KEYBOARD] stays on that earlier
audio track (§5.3.7, §8.5), so you can play through a bus while you tweak it. To a newcomer
it reads as a selection that did not work.
[It is intended](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
select an audio track, 1 to 8, to bring the keyboard back.
:::

## Step: Octaves
keys: [+, -]
source: manual §8.5
checked: yes
mode: any

Press [+]: the keyboard window moves up an octave, and the KEYBOARD OCTAVE LEDs beside the
key show where you are. [-] moves down. Press [+] + [-] together to come back to 0.

:::checkpoint
hear: The same key, an octave higher after [+]; back where it was after [+] + [-].
recover: Five octaves each way is the limit, so a press that does nothing means you are at the end. Read the KEYBOARD OCTAVE LEDs beside [+] to see where you have got to, and keep the reset combination handy.
:::

## Step: Set the tempo
keys: [TEMPO, A, NO]
source: manual §7.5.1
checked: yes
mode: menu:TEMPO

Press [TEMPO]. DATA ENTRY knob [A] is the BPM; push it in while you turn and it moves eight
at a time. The worked piece runs at 92. If you have a tempo in mind, use that — anything
from 80 to 100 keeps the later sessions comfortable. [NO] shuts the menu again.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Nothing changes yet; the tempo shows top-right on the main screen.
recover: If the BPM refuses to move, the Tonverk is following an external clock. §7.5.1 says the screen shows "MIDI" above the BPM; §6 describes a lock icon beside it. Either mark means the same thing — unplug the MIDI or USB clock source for now.
:::

## Step: Hear the tempo
keys: [FUNC, KEYBOARD F#1, PLAY, STOP]
source: manual §7.5.2
checked: yes
mode: playback

Hold [FUNC] and press [KEYBOARD F#1] — its mint legend says Metronome. Press [PLAY]: a
click at your tempo. Play the kick against it from the keyboard for a minute; that is the
exercise, and it is the whole reason the tempo came before the beat. Press [STOP], then
[FUNC] + [KEYBOARD F#1] again to silence the click.

:::checkpoint
hear: A click at your tempo, four to the bar, and your kick over it.
recover: No click: open [TEMPO] and look at knobs E to H — METRO turns it on and GAIN sets how loud it is. The metronome has no menu of its own; it lives on the right-hand half of the tempo menu.
:::

## Step: Name the project
keys: [FUNC, PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §9.1.1, §6.7
checked: yes
mode: menu:NAMING

Hold [FUNC] and press [PRESET] for the FILE menu again, then PROJECT and SAVE AS. A NAMING
screen opens: [LEFT]/[RIGHT] move between characters, [LEVEL/DATA] or [UP]/[DOWN] choose
one, and holding [FUNC] down brings up every letter, digit and symbol at once so you can
pick with the arrows. Name it SIXTEEN, or anything you will recognise, and press [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Nothing changes. The project, its pattern and your kick are now on the card under a name you chose.
recover: If you land somewhere with no NAMING screen you chose SAVE rather than SAVE AS. [NO] backs out; SAVE AS is the one that asks for a name and takes a new slot. On the naming screen itself, [FUNC] + [NO] erases a letter and [FUNC] + [YES] inserts a space.
:::

## Step: The save habit
keys: [FUNC, SETTINGS, NO]
source: community https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370
checked: yes
mode: any

Hold [FUNC] and press [SETTINGS] — the mint legend reads Save Proj. Nothing asks you
anything. No name, no confirmation, no list: the project goes straight back to its own slot
under the name you just gave it, and you are on the main screen again. Do it now, so the
first time you see that silence is a time you expected it.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Nothing at all. That silence is the step: the project is on the card, under the name you gave it.
recover: If a menu of settings opened instead, you pressed [SETTINGS] without [FUNC]. Press [NO], hold [FUNC] first, then press [SETTINGS]. If you are not sure the save happened, open the FILE menu, PROJECT, LOAD: your name is in the list.
:::

:::note
The absence of a prompt is the trap. Owners press [FUNC] + [SETTINGS], see no naming screen,
and conclude that nothing was saved —
[the thread this step is drawn from](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)
is owners working that out. §9.1.1 gives the combination a single job — it writes whatever
you are working on back to the slot it came from — and naming is SAVE AS, which you have
already done. You may see a short banner while the card is written; owners on this OS
[have asked for it to go](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824),
though §9.1.1 never mentions one, so take it as something that may flicker past rather than
something to wait for. Your unit will settle that.
:::

:::note
There is no pattern save on this machine, and no quick-save button for one. A pattern lives
inside the project and reaches the card only when the project is saved. Nothing else counts:
PERFORM mode is not a save, the temporary memorise is a scratch restore point that dies at
power-off (§10.10.6), and a chain is never saved at all. [FUNC] + [SETTINGS] is the one
habit; make it now.
:::

## What you now have

A project called SIXTEEN with one pattern, A01, one sound — a kick on track 1 — and a tempo
of 92. It is saved, so you can switch off here: the next session starts from this state. If
you kept your own name or your own tempo, the next session works the same.

## Explore further

### Tap the tempo
Hold [FUNC] and tap [TEMPO] four times in time. The average becomes the BPM from the fourth
tap on, and keeps updating while you keep tapping.

### Nudge
With the sequencer running, hold [LEFT] or [RIGHT] on the main screen: the tempo dips or
rises ten per cent until you let go. This is for lining up with a record or another machine,
not for composing, and you do not need the tempo menu open to do it.

### Filter the preset list
Open [PRESET] and press [LEFT] again, past the categories: a SORTING menu opens with
CATEGORY, TAGS and a text SEARCH, and the three stack rather than replace one another
([FUNC] + [NO] clears a search). This was
[added in OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes) and it
is the difference between a browser and a scroll.

### The other category
Browse KEYS, load something, play the keyboard, then load your kick back. Loading replaces
the track both times — only the pattern's copy ever changes, and the card still holds both
presets exactly as they were.

### The level knob
[LEVEL/DATA] sets the active track's level, and the screen shows it at the bottom right
while you turn it. Now you know what it does, it stops being the knob that mysteriously
quietens things.

## Next

Session 2 puts three more drum sounds on tracks 2 to 4 and writes the one-bar beat that the
whole piece stands on. Before that, ten minutes on
[Before you start](/before-you-start/) explains the five containers a save touches and the
four kinds of track: it is the page every later session leans on.
