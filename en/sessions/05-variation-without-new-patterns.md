---
number: 5
chapter: rhythm
slug: variation-without-new-patterns
title: Variation without new patterns
goal: Make one pattern change every loop with conditions, chance and a fill, and learn the two safety nets before you gamble with it.
needs: [The project from session 4, Headphones connected, "About sixteen minutes"]
teaches: [trig-conditions, chance, fill, transform, memorise-recall, perform]
simulator: conditions
ends: { keys16: { 5: red, 13: red, 14: red, 15: red, 16: red } }
---

## Step: Where you are
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 4 left you in GRID RECORDING on track 1 with subtrack 2, the snare, on the sixteen
keys. If the sequencer is not running, press [PLAY] and leave it running — everything here is
judged loop by loop, so a stopped pattern shows you none of it. Then hold [FUNC] and press
[SETTINGS]: this session gambles with the pattern twice, and that save is the floor under
both.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: The kit from session 4 going round: the ghost notes behind the hats, the dull hat on beat three, the roll into the next bar and the part you played in. Two keys lit on the strip — the snare on 5 and 13, with 13 blinking for the retrig on it.
recover: A dark strip means [RECORD] is not lit: press it for GRID RECORDING. A strip with eight keys on it is the closed hat rather than the snare — hold [TRK] and press [KEYBOARD D1], the second SUBTRACKS key. Starting here without session 4? That session writes the locks this one varies, and it takes about sixteen minutes.
:::

## Step: A kick that comes every other loop
keys: [TRK, KEYBOARD C1, TRIG 15, TRIG, H]
leds: { TRIG 15: red }
source: manual §10.10.2, §12.2
mode: grid-recording

Hold [TRK] and press [KEYBOARD C1], the first SUBTRACKS key, for the kick, then press
[TRIG 15] to put a kick where the subtrack had none — a pickup into the top of the bar. Hold
[TRIG 15] down, press [TRIG] for TRIG PAGE 1, and turn DATA ENTRY knob [H], COND, until it
reads 1:2.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND 1:2], invert: [7] }
keys16: { 1: red, 5: red, 9: red, 13: red, 15: red }
hear: The pickup arrives, sits out the next time round, and comes back on the one after — A:B counts how many times the pattern has played, not where you are in the bar (§10.10.2). Step 15 blinks against the four steady kicks, the way any trig carrying a lock does, and COND is the one inverted box on the page.
recover: If the pickup comes every loop, COND is still on the dash: hold [TRIG 15] down and watch that reading change as you turn [H], rather than watching the keys. If it never comes at all, you have gone past 1:2 — the conditions are one list on one knob, and its neighbour 2:2 plays on exactly the loops 1:2 sits out, though §10.10.2 gives those two only as examples and not as an order to count on. The other seven readings on the drawing come from §12.2, not from a unit.
:::

## Step: Chance on the ghosts
keys: [TRK, KEYBOARD E1, TRIG 3, TRIG 7, TRIG 11, TRIG 15, D]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §12.2
mode: grid-recording

Hold [TRK] and press [KEYBOARD E1], the third SUBTRACKS key, for the closed hat — TRIG PAGE 1
stays in front of you. Hold [TRIG 3], [TRIG 7], [TRIG 11] and [TRIG 15], session 4's four
ghost notes, and turn knob [D], PROB, down to 50%.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 50%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [3] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: About half the ghosts turn up on any one loop, and a different half on the next: the coin is thrown again every time a step comes round (§12.2). Steps 3, 7, 11 and 15 blink now for the lock they carry, and 1, 5, 9 and 13 hold steady — the four hats on the beat are untouched, so the bar keeps its shape while it stops repeating itself.
recover: If the four hats on the beat start dropping out too, PROB landed on the subtrack instead of on the four trigs: with nothing held, take it back to 100%, then hold [TRIG 3], [TRIG 7], [TRIG 11] and [TRIG 15] and turn [D] again. If the ghosts sound identical loop after loop, watch the reading: 50% is the number here, and anything above about 90% will pass for certainty over a handful of bars.
:::

## Step: An answer that needs its question
keys: [TRIG 16, H]
leds: { TRIG 16: red }
source: manual §10.10.2
mode: grid-recording

Press [TRIG 16] once: a hat on the last step of the bar, where this subtrack had none. Hold it
and turn [H] round to PRE: the trig sounds only if the one the sequencer weighed before it
sounded too (§10.10.2).

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red, 16: red }
hear: The last two steps of the bar arrive as a pair or not at all — when the ghost on 15 wins its coin flip, 16 answers it; when 15 sits out, 16 sits out with it. Both keys blink, 15 for its chance and 16 for its condition.
recover: If 16 plays on every loop, COND is still on the dash: hold [TRIG 16] and turn [H] a click at a time, past the FILL pair, until PRE is the reading. And if you are tempted to stack a second PRE on top of this one, it would still be asking about 15 — a PRE trig is skipped when a later PRE looks back (§10.10.2). One thing §10.10.2 settles for a track and not for a kit: whether the trig 16 looks back to is the one before it on this subtrack or the one before it anywhere on track 1. Your unit will settle that; this pair is written for the first reading.
:::

:::note
A ghost that loses its coin flip counts, as far as 16 is concerned, as a ghost that was never
there. That is worth saying out loud because it has not always been so: Elektron's own release
notes list [a PROB lock left out of the PRE and NEI
reckoning](https://www.elektron.se/release-notes/tonverk-os-release-notes) among the bugs OS
1.4.0 fixed, and 1.4.0 is the version this course is written against. On an older OS the pair
comes apart.
:::

## Step: Why did step 16 not play?
keys: []
source: community https://www.elektronauts.com/t/nei-and-pre-trig-conditions/51959
mode: any

Two rules now decide those last two steps, and they resolve in that order: the chance on 15
first, then 16's PRE on top of whatever chance left behind. The simulator below starts on the
kit you have just built — the kick with its 1:2 pickup, the hats with their 50% ghosts and PRE
on 16 — and gives every step a reason rather than a sound.

:::simulator

:::checkpoint
hear: Press Next loop four or five times and the log's rows show the pair on 15 and 16 arriving together and missing together. Click step 16 on the hats row and the line under the editor gives that step's fate for the loop you are on — the trig it looked back to, and whether that one played; the discs in the log carry the same sentence under the pointer. Set 15's chance to 100 and 16 stops missing.
recover: Nothing here is a hearing test — the simulator draws the rule, not the kit, and its one sound is a click. One thing it has to take a side on: whether a plain trig, with no condition and no chance on it, is the trig PRE looks back to. It reads §10.10.2's sentence literally and looks back at the last trig it evaluated, while owner threads on other Elektron boxes running this same rule say a bare trig is never evaluated at all. Your unit will settle that.
:::

## Step: A fill bar
keys: [TRK, KEYBOARD D1, TRIG 14, TRIG 15, TRIG 16, H, FUNC, FILL, UP, DOWN, YES]
leds: { TRIG 14: red, TRIG 15: red, TRIG 16: red }
source: manual §10.10.3, §10.10.2
mode: menu:FILL EDIT

Hold [TRK] and press [KEYBOARD D1], the second SUBTRACKS key, for the snare, and press
[TRIG 14], [TRIG 15] and [TRIG 16] — three snares crowding the end of the bar. TRIG PAGE 1 is
still the page in front of you: hold all three down and turn [H] to FILL, so they play only
while FILL mode is on. Then hold [FUNC] and press
[FILL] for the FILL EDIT menu, [UP]/[DOWN] until MOMENTARY is the chosen option, [YES] to
close it, and hold [FILL] down through the last beat of the bar.

:::checkpoint
screen: { menu: "FILL EDIT", items: [MOMENTARY, LATCHING], sel: 0 }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: With [FILL] held, the bar ends in a run of three snares into the next one; let go and those three steps are silent again, loop after loop, while 5 and 13 carry on as they always did. Five keys on the strip now, the three new ones blinking for the condition on them.
recover: If the run plays with nothing held, either the three trigs are still on the dash instead of FILL, or LATCHING is the chosen option and an earlier tap left FILL mode switched on — press [FILL] once and listen again. Whether the [FILL] key itself lights while it is held, and in what colour, is not in the manual and nowhere we could find; your unit will settle that.
:::

## Step: A restore point, then a risk
keys: [FUNC, KEYBOARD D#1, -, UP, DOWN, YES, NO, KEYBOARD C#1]
source: manual §10.10.6, §10.6
mode: menu:TRANSFORM

Hold [FUNC] and press [KEYBOARD D#1]: the pattern as it stands is put aside somewhere
temporary (§10.10.6). Now hold [FUNC] and press [-] for the TRANSFORM menu, walk [UP]/[DOWN] to
VELOCITY RANDOMIZE and press [YES]; [NO] closes the menu. Listen for a loop or two, then hold
[FUNC] and press [KEYBOARD C#1] to recall what you memorised.

:::checkpoint
screen: { menu: "TRANSFORM", items: [VELOCITY UNLOCK, VELOCITY RANDOMIZE, VELOCITY RAMP UP, VELOCITY RAMP DOWN, PLACEMENT RANDOMIZE, PLACEMENT REVERSE], sel: 1 }
hear: Every velocity on the track lands somewhere new at once — hats loud where they were quiet, ghosts that are no longer ghosts, the snare roll's fade rebuilt — and after the recall the velocities are back where session 4 left them, the four ghosts sitting behind the beat again. What recall puts back is the pattern you memorised a moment ago — conditions, chance and fill trigs included — not session 4's.
recover: If nothing changed, the [YES] did not land on the highlighted line: open the menu again and watch which action is picked out before you press. Whether recall puts the old velocities back exactly or merely close to them is the one part of this nobody has written down; your unit will settle that, and until it does, the save from step 1 is the real floor.
:::

:::note
A transform does not stay on the subtrack you are looking at. §10.6 draws its boundary at the
track, and on a Subtracks track that reads as the whole kit in one pass: the pickup kick gets a
new velocity along with the hats, and so does every snare. Velocity and nothing else — VELOCITY
RANDOMIZE writes VEL locks, so the pickup keeps its 1:2 and the three new snares keep their
FILL. That the eight subtracks really do go together is owners' reporting rather than the
manual's: they have asked for a way to aim a transform at one subtrack and
[there is none yet](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2057), and
another report has PLACEMENT RANDOMIZE
[moving lock trigs that play nothing](https://www.elektronauts.com/t/tonverk-feature-requests/238027/1559)
along with the notes — your unit will settle it. Either way the memorise comes first, and
VELOCITY UNLOCK is a heavier hammer than its name suggests: it takes every VEL lock off the
track, session 4's four included.
:::

## Step: PERFORM mode
keys: [FUNC, SETTINGS, TRK, FLTR, E]
leds: { TRK: green }
source: manual §10.12, §A.2.3
mode: grid-recording

Hold [FUNC] and press [SETTINGS] first; the save matters more here than anywhere else in this
session. Now hold [FUNC] and press [TRK]: PERFORM mode is on, and [TRK] turns green while it is
(§10.12). Press [FLTR] and turn knob [E], FREQ, well down while the loop runs, then hold
[FUNC] and press [TRK] again to leave.

:::checkpoint
hear: The snare goes dull under your hand — the filter belongs to the subtrack you are on (§A.2.3), so the kick and the hats ring on as they were — and it stays dull for as long as PERFORM mode is on. The moment you leave, the snare is bright again and the green light is out: the tweak is gone, and saving while you were in there would not have kept it either (§10.12).
recover: If the snare stayed dull after you left, [FUNC] was not down for the second press; the green light is the thing to watch. If nothing changed at all as you turned, [FLTR] is showing some other subtrack's page — hold [TRK] and press [KEYBOARD D1] for the snare and try again. The step saves first on purpose: §10.12 promises the pattern comes back to a saved state and says no more, and what happens to edits made after the last save and before PERFORM mode was entered is written down nowhere. Your unit will settle that; saving first makes the question moot.
:::

## Step: Save
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: grid-recording

Hold [FUNC] and press [SETTINGS] one last time. The sixteen keys are still the snare's: two
that play on every loop and three that wait for your thumb.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: The same bar you started the session with, and no two loops of it alike — a pickup kick every other time round, half the ghosts, an answering hat that comes only when its question did, and a fill under your thumb. That strip of five keys is this session's masthead.
recover: Five keys, and 14, 15 and 16 blinking. If those three are dark, the fill trigs went onto another subtrack: hold [TRK] and press [KEYBOARD D1] and look again — and if they are missing there too, step 6 is three presses and one knob from the top.
:::

## What you now have

A01 is the bar session 4 saved, and it no longer repeats. A fifth kick arrives on every other
loop, the four ghost notes each throw for their place, a hat on the last step answers the
ghost before it or stays quiet with it, and three snares at the end of the bar belong to
[FILL] alone. Nothing was loaded and no second pattern was written: all of it is one parameter
on one page, set on trigs you already had. You also have the two ways back — the memorise you
can recall, and the save that PERFORM mode returns you to — which is what makes the rest of it
worth risking.

## Explore further

### The fill that clears the way
Give the snare on 13 the opposite of a FILL condition — the one printed with a line over it,
¬FILL here and in the simulator — and it steps aside whenever [FILL] is held (§10.10.2). The
three new snares replace the old one instead of crowding it, which is what a drum fill usually
does.

### LATCHING, for when your hands are busy
[FUNC] + [FILL] again, [DOWN] to LATCHING, [YES]: now [FILL] toggles the mode on and off with
a tap rather than a hold (§10.10.3). Handy the moment your other hand is on a knob, and easy
to leave switched on by mistake.

### 1ST, an intro that happens once
1ST fires a trig the first time round the pattern and never again; the same condition with a
line over it sits out that first pass and plays on all the rest (§10.10.2). One open hat on
step 1 with 1ST, and the pattern announces itself and then gets on with it.

### NEI, in the simulator rather than on the kit
NEI looks sideways: it asks how the last condition turned out on the track next door — the
one numbered before the one you are on — and plays, or does not, on that answer (§10.10.2). The simulator's two tracks are exactly that
pair, which is why NEI belongs there: what a Subtracks subtrack's own NEI reads is not stated
anywhere we could find, and only your unit can say.

### PROB with nothing held
Turn [D] with no trig key down and PROB becomes the subtrack's own setting rather than one
trig's (§12.2). Every hat on the subtrack then throws for its place, which is a different, more
nervous kind of bar than four ghosts throwing on their own.

### PERFORM mode on two patterns
Only one pattern at a time can be in PERFORM mode. Leave it for another pattern and come
back, and your tweaks are waiting; switch PERFORM mode on over there instead, and the first
pattern's are gone (§10.12).

## Next

Session 6 leaves the drums alone and starts the second chapter: a bass on track 2 and a chord
part on track 3, played from the keyboard in A minor, on the tracks session 3 freed. The
rhythm is finished — from here the piece gains notes.
