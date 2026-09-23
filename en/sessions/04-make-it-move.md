---
number: 4
chapter: rhythm
slug: make-it-move
title: Make it move
goal: Give the beat ghost notes, a filter lock, a snare roll and a part you play in, then quantise it.
needs: [The project from session 3, Headphones connected, "About sixteen minutes"]
teaches: [parameter-locks, trig-preview, retrigs, micro-timing, live-recording, quantize, sequence-lanes]
simulator: null
ends: { keys16: { 5: red, 13: red } }
---

## Step: Where you are
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 3 left you in GRID RECORDING on track 1 with subtrack 6, the closed hat, on the
sixteen keys. If the sequencer is not running, press [PLAY] and leave it running: every step
here is written over the loop. Then hold [FUNC] and press [SETTINGS] — this session writes
locks all through the kit, and that save is the state you can come back to.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: The whole beat from track 1 — kick, snare, closed hat and your sound in the clap's place — looping from A01.
recover: A dark strip means [RECORD] is not lit: press it for GRID RECORDING, then hold [TRK] and press [KEYBOARD A1], the sixth SUBTRACKS key, to get back to the closed hat. Starting here without session 3? That session builds the kit this one moves, and it takes about sixteen minutes.
:::

## Step: Ghost notes
keys: [TRIG 3, TRIG 7, TRIG 11, TRIG 15, TRIG, B]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §10.10.1, §12.2
mode: grid-recording

Hold [TRIG 3], [TRIG 7], [TRIG 11] and [TRIG 15] down together — the four hats that fall
between the beats — and, still holding them, press [TRIG], the TRIG PARAMETERS key, the one
to the left of [SRC]. TRIG PAGE 1 opens; still holding the four, turn DATA ENTRY knob [B],
VEL, down to around 60.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [1] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: The hats on the beat stand where they were and the four between them sit back behind them. VEL is the one box on the page drawn inverted, and the four keys you held are blinking red while the other four hold steady.
recover: If all eight hats went quiet, nothing was held and the turn moved the whole subtrack's VEL: turn it back up, hold the four keys, then turn again. Expect NOTE to read as a dash — §12.2 says only that it is not available on a Subtracks track — and expect the other seven readings to differ from the drawing, which is made from that section rather than off a unit.
:::

:::note
A lock you place here belongs to the subtrack you are on and to nothing else: each subtrack
keeps its own SRC, FLTR, AMP and MOD settings (§A.2.3), so this turn leaves the kick and the
snare exactly as they were. The FX pages and the send levels are the exception — those eight
share them through the supertrack, which is why an owner live-recording a delay send found
[it land on every subtrack at once](https://www.elektronauts.com/t/tonverk-bug-reports/238306/1676)
and why there is
[no filter on the supertrack to reach for](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2263).
:::

## Step: Hear one step
keys: [TRIG 1, TRIG 3, YES]
source: manual §10.3
mode: grid-recording

Hold [TRIG 3] and press [YES]: that one step plays, with its new VEL baked in. Hold [TRIG 1]
and press [YES] for the hat on the beat beside it.

:::checkpoint
hear: Two hats, one after the other, at the two volumes you just set, over the loop that keeps running underneath.
recover: If the two sound identical, the lock never landed — go back a step, hold the four keys and watch VEL turn inverted as you turn the knob. Whether this preview sounds the held trig's own subtrack or the subtrack you have selected is not settled anywhere we could find; your unit will settle that.
:::

## Step: A filter lock
keys: [FLTR, TRIG 9, E]
leds: { TRIG 9: red }
source: manual §10.10.1, §12.5
mode: grid-recording

Press [FLTR] for FLTR PAGE 1. Hold [TRIG 9] — the hat on beat three — and turn DATA ENTRY
knob [E], FREQ, down until that one hat goes dull.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [ATK, DEC, SUS, REL, FREQ 42, RESO, TYPE, ENV], invert: [4] }
hear: Seven hats as they were, and one on beat three with the top taken off it. Step 9 is blinking now, alongside the four ghost notes.
recover: If every hat dulled at once, [TRIG 9] was not down when you turned: hold it first. Your unit fills all eight boxes on this page with readings; the drawing gives one only to the box you changed.
:::

## Step: Take a lock off
keys: [TRIG 9, E]
source: manual §10.10.1
mode: grid-recording

Hold [TRIG 9] again and press DATA ENTRY knob [E] — press it, do not turn it. The FREQ lock
comes off and the trig stays where it is. Now hold [TRIG 9] and turn [E] down again: the
worked piece keeps this one.

:::checkpoint
hear: The hat on beat three comes back bright, and goes dull again when you put the lock back.
recover: If the hat disappeared altogether, that was a quick press rather than a hold, which removes the trig — press [TRIG 9] once more to write it back, and know that every lock it carried went with it (§10.10.1), so this step is worth doing twice.
:::

## Step: The snare roll
keys: [TRK, KEYBOARD D1, TRIG 13, TRIG, E, F, G]
leds: { TRIG 5: red, TRIG 13: red }
source: manual §10.7, §12.2
mode: grid-recording

Hold [TRK] and press [KEYBOARD D1], the second SUBTRACKS key, for the snare. Hold [TRIG 13]
and press [TRIG] for TRIG PAGE 1, and keep it held: turn [E] to switch RTRG on, [F] to set
RTIM to 1/32, and [G] to take RVEL up towards 1, so the repeats grow rather than fall away.
Those are a starting point and not the only answer.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG ON, RTIM 1/32, RVEL 0.5, COND —], invert: [4, 5, 6] }
keys16: { 5: red, 13: red }
hear: The snare on beat four comes as a short roll: the repeats run for the trig's own LEN and stop inside step 13, a pickup into the next bar rather than a fill across it. The snare on 5 is untouched, and on the page — drawn here, not read off a unit — the three you turned are the inverted ones. Step 13 is blinking now, 5 is steady.
recover: A roll you cannot hear is usually RTRG still off — hold [TRIG 13] and watch that readout change before you go near RTIM. If both snares roll, [TRIG 13] was let go before you turned and the setting went on the whole subtrack instead of that one trig: turn RTRG back off with nothing held, then start again holding the key. Too busy? [F] back to 1/16 gives one repeat per step, 1/12 gives triplets. Nobody has published numbers for this; your unit will settle the tidiest ones.
:::

:::note
Two things on this page catch people. There is no RLEN: the fourth of the retrig parameters
is COND, a trig condition, which is session 5's subject — what shapes a roll is RVEL, and it
works against the trig's own VEL. And the manual is of two minds about which knob switches
RTRG on: §6.3's rule is that a parameter answers to the knob it sits above, which puts RTRG
on [E], while §12.2's own sentence names knob [A]. Turn the knob under the parameter, and if
your unit says otherwise, your unit is right.
:::

## Step: Push the clap late
keys: [TRK, KEYBOARD F1, TRIG 7, RIGHT, UP, DOWN]
source: community https://www.youtube.com/watch?v=7lFFSUOsXsA
mode: grid-recording

Hold [TRK] and press [KEYBOARD F1], the fourth SUBTRACKS key, for the clap — your own sound since session 3. Hold
[TRIG 7] and press [RIGHT]: the MICRO TIMING pop-up opens and reads that step's offset as a
percentage (§10.5). Keep the key down — [RIGHT] again pushes it further in big jumps, [UP]
and [DOWN] move it a little at a time — and release [TRIG 7] to leave.

:::checkpoint
screen: { menu: "MICRO TIMING", items: [+25%] }
hear: The clap on 7 lands a shade after the step it sits on, and the bar leans harder into the next one. The reading is drawn here pushed late; how far one press takes it is the unit's to tell you.
recover: Nothing opened? The pop-up wants the trig key held first and the arrow second, and a step with no trig on it has nothing to time. Pushed too far: [LEFT] walks it back, and the offset is stored with the pattern, so it survives the save at the end (§10.5).
:::

## Step: Play something in
keys: [RECORD, PLAY, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Hold [RECORD] down and press [PLAY] once: [RECORD] starts flashing red and LIVE RECORDING is
on with the pattern still looping. Let both go, then tap [KEYBOARD G1], the fifth SUBTRACKS
key, in time with the beat for a bar or two. Press [PLAY] on its own to come back out.

:::checkpoint
hear: A fifth voice from the kit where your fingers put it, over the four you wrote by hand, and the loop never stops.
recover: If [RECORD] lit steady instead of flashing, [PLAY] went down before [RECORD] did and you are in GRID RECORDING: press [RECORD] to put it out and start again. A fifth key that makes no sound is an empty subtrack in your kit — play one that does sound and use that subtrack instead.
:::

:::note
[PLAY] means two different things around this step. Pressed a second time while [RECORD] is
still held, it turns automatic quantisation on and off for what you are about to record
(§10.4); leave it off, because the next step does that job by hand and there is nothing to
pull if the machine has already pulled it. Pressed once [RECORD] is released, it leaves live
recording and the pattern keeps running.
:::

## Step: Quantise what you played
keys: [FUNC, KEYBOARD G#1, TRIG 1, TRIG, E, F, NO]
source: manual §10.8
mode: menu:QUANTIZE

Hold [FUNC] and press [KEYBOARD G#1] for the QUANTIZE menu, and press [TRIG 1] to aim it at
track 1. Turn DATA ENTRY knob [E], TRK, up a little at a time and stop the moment the part
you played sits tight: part way up is where you want it, and your ear picks the spot.
Knob [F], PATTERN, would do the same to every track in the pattern at once, and this session
leaves it alone; [NO] closes the menu.

:::checkpoint
screen: { menu: "QUANTIZE", items: [TRK 0, PATTERN 0] }
hear: Both settings start at zero. The kick and the snare do not move, because they were written on the grid and are on it already. What TRK pulls is everything that is not: the part you played by hand, and the clap you pushed late two steps ago (§10.8) — which is why you stop climbing as soon as the take is tight.
recover: Menu did not open? Try [FUNC] + [TRIG] instead, the combination §10.4 gives for this same menu where §10.8 gives [FUNC] + [KEYBOARD G#1]; your unit will settle which of the two it takes. Gone all the way and lost the late clap? Go back to the clap's subtrack, hold [TRIG 7] and press [RIGHT] to push it out again (§10.5); quantising rounds to the nearest step, and for a micro-timed trig that need not be the step it was written on (§10.8). And if the take still does not sound like what you played, you are not imagining it: [one owner reports the same](https://www.elektronauts.com/t/tonverk-user-thread/238631/1812), with no answer in the thread.
:::

## Step: See the locks alone
keys: [TRK, KEYBOARD A1, RECORD, FUNC, UP, DOWN, NO]
leds: { RECORD: red }
source: manual §10.3.2
mode: grid-recording

Hold [TRK] and press [KEYBOARD A1], the sixth SUBTRACKS key, to come back to the closed hat,
then press [RECORD] for GRID RECORDING. Hold [FUNC] and press [UP] for the SEQUENCE LANE
menu, and press [UP]/[DOWN] until P-LOCKS is the one chosen. Put it back on NOTES + P-LOCKS
before you leave, then press [NO].

:::checkpoint
screen: { bank: "A01", name: "P-LOCKS", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Nothing in the sound changes. The lane's name prints across the top of the screen beside the pattern pages, and every hat goes faint red — all eight, 1, 5 and 13 plain and 3, 7, 9, 11 and 15 carrying their locks. Nothing blinks: §10.3.2 sorts this lane by the type of trig, not by what is locked on it, and a note trig carrying a lock is still a note trig (§10.2.1), so all eight are the same kind of trig here. If 3, 7, 9, 11 and 15 blink instead, your unit reads a locked note as both kinds — one for the colophon, and nothing is broken either way.
recover: [UP] and [DOWN] walk the three lanes as one list, so whichever you press, keep going until P-LOCKS is the one chosen and leave it on NOTES + P-LOCKS afterwards. If the hats are full red rather than faint, you are still on NOTES, where note trigs are red and lock trigs faint yellow (§10.3.2) — keep walking the list. Elektron's own presenter found a lock trig seemingly removable from NOTES mode, [which the manual says cannot happen](https://www.youtube.com/watch?v=7lFFSUOsXsA); your unit will settle that too.
:::

## Step: Save
keys: [FUNC, SETTINGS, TRK, KEYBOARD D1]
source: manual §9.1.1
mode: grid-recording

Hold [FUNC] and press [SETTINGS]: saved, in silence, the way every save here goes. Then hold
[TRK] and press [KEYBOARD D1], the second SUBTRACKS key, and look at the snare one last time
— 5 and 13, with 13 blinking for the roll on it. That picture is this session's masthead.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: The beat with everything you put into it, saved: the ghosts, the dull hat, the roll and the part you played.
recover: Two keys and no more is right — the snare has always had two trigs, and the roll lives inside one of them rather than on steps of its own.
:::

## What you now have

A01 is the same kit and the same four voices, moving. On the closed hat, four ghost notes sit
behind the four on the beat and one step on beat three is filtered dull; the snare on 13 is a
short roll, a pickup into the next bar; the clap on 7 sits a shade late if you left TRK
short of the top, and dead on the step if you did not; and a fifth subtrack carries a part
you played with your hands and then pulled onto the grid. All of it is parameter locks and
timing on trigs you already had, all of it is saved, and A02 still holds session 2's copy
of the beat.

## Explore further

### Randomise the velocities, then take it back
[FUNC] + [-] opens the TRANSFORM menu, which acts on every trig of the track you are on
(§10.6). VELOCITY RANDOMIZE writes a VEL lock on all of them; VELOCITY UNLOCK removes every
VEL lock there is — including the four ghost notes — so try it on the clap's subtrack
rather than the closed hat's, and keep your save in reach.

### A lock with no note under it
In GRID RECORDING, [FUNC] + [TRIG 8] on an empty step writes a lock trig: yellow instead of
red, carrying parameter changes but triggering nothing (§10.2.1). Put one on step 8 of the
closed hat, lock FREQ on it, and hear the next hat come out of a filter that moved while
nothing played.

### PROB, two boxes along from VEL
PROB is on TRIG PAGE 1 beside the parameters you have been turning, on knob [D], and it sets
how likely a trig is to play at all — 100% by default, re-decided every time the step comes round (§12.2).
Lock it to 50% on one ghost note and listen to the bar stop repeating itself. Session 5 is
built on that idea.

## Next

Session 5 stops the pattern repeating: trig conditions on the kit you have, a kick that
arrives every other loop, chance on these same ghost notes, and a fill bar you hold down —
all of it inside A01, with nothing new loaded. The simulator on that page answers the one
question conditions always raise, which is why a trig did not play.
