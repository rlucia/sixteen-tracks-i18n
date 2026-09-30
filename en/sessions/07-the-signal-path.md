---
number: 7
chapter: sound
slug: the-signal-path
title: The signal path
goal: Send the drums through a bus that squeezes them, make the chords breathe on a bus of their own, give them a room, and punch an effect in from a key.
needs: [The project from session 6, Headphones connected, "About sixteen minutes"]
teaches: [routing, bus, compressor, shape-envelope, send-fx, parameter-locks, trig-preview, effect-scenes]
simulator: routing
ends: { keys16: { 15: red, 16: red } }
---

## Step: Where you are
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

Session 6 left A01 with the kit on track 1, the bassline on track 2 and four chords on track 3,
every one of them going straight to the mixer. If the sequencer is stopped, press [PLAY]. Hold
[FUNC] and press [SETTINGS] before the routing changes: everything in this session changes where
the sound goes, not what the tracks play.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: The piece as session 6 left it: the beat, the bassline moving under it, a chord a bar.
recover: Starting here without session 6? That session writes the bass and the chords, and it takes about sixteen minutes; any pattern with drums on track 1 and chords on track 3 works as well.
:::

## Step: Where the sound goes
keys: [FUNC, MUTE, UP, DOWN]
source: manual §4.4.1
mode: menu:ROUTING

Hold [FUNC] and press [MUTE]: the ROUTING menu (§4.4.1). [UP] and [DOWN] switch between its two
groups, the audio tracks 1–8 and the buses and send tracks. On the tracks, every line reads MIX
AB: each track goes to the mixer, through the main FX, to outputs A/B and the headphones. That is
where every track of a fresh pattern starts.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 MIX AB", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: Nothing changes: the menu only shows the roads.
recover: A list of buses and send tracks instead of TRK1 to TRK8: the other group — [UP] or [DOWN] back to the tracks.
:::

## Step: Drums to bus 1
keys: [TRIG 1, TRIG 9]
source: manual §4.4.1, §A.2.3
mode: menu:ROUTING

With ROUTING open, hold [TRIG 1] and press [TRIG 9]. Track 1 now goes to BUS 1, which is track 9,
and the line reads TRK1 BUS 1. The kit moves as one: its eight sounds share the one route of
track 1 (§A.2.3). The bus passes the drums on to the mixer unchanged until an effect goes on it.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: The drums exactly as before: a bus with no effect on it passes the audio through.
recover: Track 9 came up for editing, or the drums changed while the line still reads TRK1 MIX AB: the keys were pressed with the menu closed. Only the ROUTING menu, or ROUT on track 1's FX page 1, routes a track (§12.8) — [FUNC] + [MUTE] and the gesture again.
:::

:::simulator

## Step: Squeeze them
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO]
source: manual §11.5, §13.5, §A.3.4
mode: menu:TRACK SETUP

Hold [TRK] and press [TRIG 9]: bus 1 is the active track. Hold [FUNC] and press [FX]: TRACK
SETUP opens on the bus's first insert, FX1. [UP]/[DOWN] to COMPRESSOR and [YES] puts it in the
slot; [NO] closes the menu. Press [FX] until FX page 2, the compressor's page (§13.5). Lower THR
until the kick and snare start to push the level down, set RAT to 4.00, and raise MUP until the
drums are as loud as before (§A.3.4).

:::checkpoint
screen: { menu: "FX 1", items: ["BYPASS", "CHRONO PITCH", "COMB ± FILTER", "COMPRESSOR"], sel: 3 }
hear: The kick and snare closer in level to the hats, the whole kit denser and more even, at the loudness it had.
recover: The drums quieter than before: MUP is still low — raise it. No change at all: track 1 is not on BUS 1 (step 3), or the compressor went onto another track — [TRK] + [TRIG 9] and [FUNC] + [FX] again.
:::

## Step: Chords to bus 2
keys: [FUNC, MUTE, TRIG 3, TRIG 10, NO]
source: manual §4.4.1
mode: menu:ROUTING

Hold [FUNC] and press [MUTE] again. Hold [TRIG 3] and press [TRIG 10]: the chords go to BUS 2,
track 10. Press [NO] to close the menu.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 BUS 2", "TRK4 MIX AB"], sel: 2 }
hear: The chords unchanged, the drums still squeezed on bus 1.
recover: TRK3 still reads MIX AB: [TRIG 10] went in without [TRIG 3] held — hold it first, then press. TRK3 reads BUS 1: [TRIG 9] instead of [TRIG 10].
:::

## Step: The bus breathes
keys: [TRK, TRIG 10, RECORD, TRIG 1, TRIG 5, TRIG 9, TRIG 13, AMP]
leds: { RECORD: red }
source: manual §13.2, §A.2.6
mode: grid-recording

Hold [TRK] and press [TRIG 10]: bus 2 is the active track. Press [RECORD] for GRID RECORDING and
press [TRIG 1], [TRIG 5], [TRIG 9] and [TRIG 13]: four trigs on bus 2's own sequencer. A bus
trig plays no sound; it fires the bus's Shape envelope (§A.2.6). Press [AMP] for its page: ATK
short, DEC long enough to reach the next beat, and ENV turned well away from 0. The chords now
dip and swell again with each of the four.

:::note
Which way ENV has to turn for a dip is not settled: Red Means Recording turns it below zero
([the video](https://www.youtube.com/watch?v=Ku3u0uUJoSE&t=977)), umonox turns it up with a
short decay ([the video](https://www.youtube.com/watch?v=bN-HX1n-0cQ&t=147)). Turn it until the
chords dip on the beat.
:::

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: The chords pulse four times a bar, ducking on each beat and rising back before the next.
recover: The trigs lit but the chords steady: ENV is at 0. The chords breathe for one bar and hold still for three: bus 2 runs 64 steps — with bus 2 active, [FUNC] + [PAGE], [FUNC] and [E] to LENGTH 16, [NO]. Trigs lit, ENV set, still nothing: owners report that on 1.4.1 bus trigs can stop firing the envelope until the machine is restarted ([the report](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2569)) — save, switch off and on.
:::

## Step: A room for the chords
keys: [TRK, TRIG 3, FX]
source: manual §12.8, §5.3.4
mode: playback

Hold [TRK] and press [TRIG 3]. Press [FX] for FX page 1, where the track's routing and its three
sends are (§12.8). Turn SND3 up with the knob under it, to about half: the chords go on to bus 2
as before, and a copy of them goes to track 15, the send track that holds the reverb in a fresh
pattern (§5.3.4).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3, params: [SND1 0, SND2 0, SND3 64, "ROUT BUS2"], invert: [2] }
hear: A tail after each chord, the room behind them; the drums and the bass dry.
recover: A wavering, doubled sound instead of a tail: SND1 went up — track 13 holds a chorus; set it back to 0 and raise SND3. No tail: track 15 holds something else in this pattern ([TRK] + [TRIG 15] shows it), or SND3 went up on the bass — [TRK] + [TRIG 3] first.
:::

## Step: A scene on a key
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO, RECORD, TRIG 15, TRIG 16, TRIG, D]
leds: { RECORD: red }
source: manual §10.3, §13.2, §13.6, §A.3.12
mode: grid-recording

Hold [TRK] and press [TRIG 9]. Hold [FUNC] and press [FX], press [FX] again for the second slot,
FX2, and [UP]/[DOWN] to LOW-PASS FILTER, [YES], [NO]. On FX page 3, the filter's page (§13.6),
turn FREQ all the way up. Press [RECORD] for GRID RECORDING and press [TRIG 15] and [TRIG 16]:
two trigs on bus 1. Press [TRIG] for the TRIG page, hold [TRIG 15] and turn [D], PROB, to 0 %,
then the same holding [TRIG 16]: neither will ever play by itself (§13.2). Back on FX page 3,
hold [TRIG 15] and turn FREQ nearly shut; hold [TRIG 16] and turn FREQ down and back up to the
top, so that trig carries the filter open. Now press [TRIG 15] + [YES], the trig key first: the
drums go behind a wall and stay there. [TRIG 16] + [YES]: they come back (§10.3).

:::checkpoint
keys16: { 15: red, 16: red }
hear: With [TRIG 15] + [YES] the drums dull and distant under the bass and chords, bar after bar; with [TRIG 16] + [YES] bright again.
recover: The wall never leaves on its own: that is how a lock on a bus works — it holds until another trig changes it ([owners on it](https://www.elektronauts.com/t/tonverk-user-thread/238631/998)); [TRIG 16] + [YES] brings the filter back open. The drums go dull once every bar by themselves: PROB on step 15 is not 0 % — hold [TRIG 15] on the TRIG page and turn [D] down. Nothing at all happens: the lock went onto FX page 2, the compressor — FREQ is on FX page 3.
:::

## Step: Save
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Hold [FUNC] and press [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: The piece routed: the drums squeezed, the chords breathing into their room, the bass straight to the mixer.
recover: No screen said the project was written: [FUNC] was not down when [SETTINGS] went in. Press them together again.
:::

## What you now have

The kit goes through bus 1, where a compressor holds it together and a low-pass filter waits for
[TRIG 15] + [YES] to close and [TRIG 16] + [YES] to open. The chords go through bus 2, whose own
four trigs make them breathe on every beat, and send a copy of themselves into the reverb on
track 15. The bass goes straight to the mixer. The routing belongs to A01, and it is saved.

## Explore further

### Re-route while it plays
In ROUTING, [DOWN] to the buses, hold [TRIG 10] and press [KEYBOARD A1]: bus 2 goes to OUT CD,
straight to outputs C/D, and the chords leave the headphones and outputs A/B. With nothing
plugged into C/D, they are gone. [TRIG 10] and LEVEL/DATA set it back to MIX AB (§4.4.1).

### Order by ear
On bus 1, [FUNC] + [FX] and [FX] twice more reach the third subpage: highlight SWAP FX1/FX2 and
press [YES] (§11.5.4). The filter now comes before the compressor. Punch the scene in both ways
and keep the order you prefer.

### Stop the breathing with a key
Give bus 2's four trigs the condition ¬FILL (§10.10.2): the chords breathe as long as [FILL] is
up and hold still while it is held.

### Mute the bus
[MUTE] + [TRIG 10] mutes bus 2. Its trigs stop and the chords hold still, but they still sound:
muting a bus stops its sequencer, not the audio passing through it
([owners on it](https://www.elektronauts.com/t/buses-mute-question/244694/1)).

### The voice's own order
Every audio track runs its sound through an overdrive and two filters, in an order you choose:
[FUNC] + [FLTR] on track 3, then [LEFT]/[RIGHT] (§11.3.1), and listen to the chords in each
order.

## Next

Session 8 adds a pad on track 4 that moves by itself: LFOs and a modulation envelope on the
sound, and nothing played by hand.
