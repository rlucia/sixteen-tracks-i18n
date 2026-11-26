---
number: 8
chapter: sound
slug: modulation
title: Modulation
goal: "Hold one chord for four bars on track 4 and make it move with modulators alone: a filter that sweeps with the pattern, a new place between left and right at every pass, a bend into each chord, and a reverb that drifts on a clock of its own."
needs: [The project from session 7, Headphones connected, "About sixteen minutes"]
teaches: [lfo, lfo-speed, lfo-modes, play-mode, mod-envelope, fx-lfo, modulation-destinations, mod-overview]
simulator: modulation
ends: { keys16: { 1: red } }
---

## Step: Where you are
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

Session 7 left A01 routed: the kit squeezed on bus 1, the chords breathing on bus 2 and into the
reverb on track 15, the bass straight to the mixer, and bus 1 the active track. If the sequencer
is stopped, press [PLAY]. Hold [FUNC] and press [SETTINGS] before track 4 gets a sound: one chord
goes onto it in this session and never changes again. Everything that moves after that is a
modulator.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: The piece as session 7 left it: the drums tight on their bus, the chords dipping on every beat with a room behind them, the bassline under both.
recover: Starting here without session 7? That session routes the piece, and it takes about sixteen minutes; any pattern with chords on track 3 and nothing on track 4 works as well, as long as track 15 still holds the reverb a fresh pattern has there.
:::

## Step: A pad on track 4
keys: [TRK, TRIG 4, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 4: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Hold [TRK] and press [TRIG 4]. Press [PRESET], [RIGHT] to KEYS, [UP]/[DOWN] to 063 OXY GEN, and
[YES] — or any KEYS sound that holds for as long as its key is down and stands still while it
does. Then hold [FUNC], press [PAGE], hold [FUNC] and turn [E] to LENGTH 64 for track 4, and
press [NO]. The menu is still PER TRACK, so the kit keeps its one bar (§10.9.2). Hold one key of
the bottom row for four bars and listen to it.

:::note
A preset that already moves carries modulation of its own. A parameter page's key held with
[PLAY] puts that page back to its defaults (§12.1): press [MOD] to step through the five MOD
pages, and [MOD] + [PLAY] on each one leaves the sound still.
:::

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: With the key held, one note lasts the four bars and nothing in it moves; the beat, the bassline and the chords go on under it.
recover: The note fades before the four bars are over: this preset does not hold — choose another. LENGTH already read 64 when the menu opened: that is another track's — [TRK] + [TRIG 4], then [FUNC] + [PAGE] again.
:::

## Step: One chord, four bars
keys: [+, RECORD, TRIG 1, KEYBOARD E1, KEYBOARD A1, TRIG, C]
leds: { RECORD: red }
source: manual §8.5, §10.3, §10.3.1, §12.2
mode: grid-recording

Press [+] until the lit dot beside [+] and [-] is on 0. Session 6 put the keyboard on −1 and the
chords were played there, so the keys now sound an octave above them (§8.5). Press [RECORD] for
GRID RECORDING and press [TRIG 1]: one trig. Hold [TRIG 1] and press [KEYBOARD E1] and
[KEYBOARD A1]: the two notes take the place of the trig's own (§10.3.1). Press [TRIG] for the
TRIG page, hold [TRIG 1] again and turn [C], LEN, up to 64 steps (§12.2): the chord now lasts
the whole pattern. A note can be as long as 128 steps
([owners on it](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/147)). Press [RECORD]
to leave GRID RECORDING.

:::checkpoint
keys16: { 1: red }
hear: E and A together from the first beat of bar 1 until the loop comes round, above all four chords and in tune with each of them.
recover: The pad growls under the chords, or rubs against the second one: it is an octave low — [+] until the dot is on 0, then [RECORD], hold [TRIG 1] and press the two keys again. One note instead of two: the keys went in without [TRIG 1] held. The other way in, from playback: [STEP EDIT], then [TRIG 1], which turns green; there a dark key adds its note and a lit one takes it away, so press until only [KEYBOARD E1] and [KEYBOARD A1] are lit, then [STEP EDIT] again (§10.3.1). A chord one step long although LEN reads 64: an owner met that on 1.4.1 ([the report](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2588)) — turn LEN down and back up to 64.
:::

## Step: LFO 1, by ear
keys: [FLTR, MOD, E, H, D, YES]
source: manual §12.12
mode: playback

Press [FLTR] and turn FREQ, with the knob under it, to about half-way: an LFO adds its depth
around the parameter's own value, so the filter needs room both ways. Press [MOD] until the page
is LFO 1's (§12.12). Turn [E], WAVE, to TRI, the triangle, and [H], DEP, to about 40. Then turn
[D], DEST: a list opens over the page, and each line is heard for as long as it is highlighted.
Go down it slowly and listen to what the LFO does to each parameter. Stop on FLTR:Frequency and
press [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST FLTR FREQ", "WAVE TRI", SPH, MODE, "DEP 40"], invert: [3, 4] }
hear: The pad brightens and darkens by itself, at a rate that has nothing to do with the bars.
recover: Half of every sweep does nothing: FREQ is parked at one end — [FLTR], and FREQ half-way. Nothing moves: DEP is at 0, or the list was closed with [NO], which keeps the destination it had.
:::

## Step: Four bars long
keys: [A, B]
source: manual §12.12, §12.16
mode: playback

Turn [A], SPD, to 8 and [B], MULT, to BPM 4. One cycle of an LFO lasts 2048 ÷ (SPD × MULT) steps
of its track (the table after §12.16): 2048 ÷ 32 is 64, the pattern's four bars. In MODE FREE an
LFO follows the tempo and takes no notice of [PLAY] or [STOP]: it goes on running while the
sequencer stands still
([a tester on it](https://www.elektronauts.com/t/experiencing-some-massive-lfo-confusion/256117/9)).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 8", "MULT BPM 4", FADE, "DEST FLTR FREQ", "WAVE TRI", SPH, "MODE FREE", "DEP 40"], invert: [0, 1] }
hear: One rise and one fall now last the four chords, and the sweep starts somewhere else at every [PLAY].
recover: A sweep about twice as long as the four bars: on 1.4.1 a multiplier set for the first time can run slow until the pattern is left and entered again ([the report](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2636)) — hold [PTN] and press [TRIG 2], wait until A02 plays, then hold [PTN] and press [TRIG 1]. The sweep already starts at the same point every time: MODE is not on FREE, and step 6 sets it.
:::

## Step: From the top
keys: [G, FUNC, TRIG, LEFT, RIGHT, NO, STOP, PLAY]
source: manual §12.12, §11.1.1
mode: menu:TRACK SETUP

Turn [G], MODE, to TRIG: every note trig now restarts the LFO, and the pad has one, on step 1
(§12.12). Hold [FUNC] and press [TRIG]: TRACK SETUP, with PLAY MODE as its first line. Set it to
POLY M.LFO with [LEFT]/[RIGHT] and press [NO]. In POLY each of the two notes runs an LFO of its
own; in POLY M.LFO they share one (§11.1.1). Press [STOP], then [PLAY]: the sweep begins with
bar 1.

The simulator below starts on these settings, with the modulators of steps 7 to 9 already in
place. Set its note trigs to one in every bar: LFO 1 restarts sixteen steps into each sweep and
never finishes one. A single trig four bars long is what lets the sweep run to its end. Then
press its [STOP], then [PLAY]: LFO 1 starts where it did; FX LFO 1, which step 9 leaves in FREE,
does not, and LFO 2 is dealt new values.

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE POLY M.LFO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: The sweep begins with bar 1 on every pass, and again after every [STOP] and [PLAY].
recover: A sweep that starts anywhere: MODE is still FREE. The two notes sweep apart, one bright while the other is dark: PLAY MODE is still POLY.
:::

:::simulator

## Step: A new place every pass
keys: [MOD, E, G, D, YES, H]
source: manual §12.13
mode: playback

Press [MOD] until the page is LFO 2's: the same eight knobs (§12.13). Turn [E], WAVE, to RND and
[G], MODE, to HOLD: the random wave runs unseen, and each note trig holds the value it has at
that moment until the next one (§12.12). Turn [D], DEST, to AMP:Pan and press [YES], then [H],
DEP, to about 40.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST AMP PAN", "WAVE RND", SLEW, "MODE HOLD", "DEP 40"], invert: [3, 4, 6] }
hear: Every four bars the pad is somewhere else between left and right, and stays there until the chord starts again.
recover: The pad wanders left and right without rest: MODE is not on HOLD. The two notes land in two places: PLAY MODE is POLY (step 6). Always dead centre: DEP is at 0.
:::

## Step: A bend into each chord
keys: [MOD, G, YES, H, A, B, C]
source: manual §12.14
mode: playback

Press [MOD] again: the mod envelope's page (§12.14). Turn [G], DEST, to SRC:Tune and press
[YES]. Set [A], ATK, to 0, [B], DEC, short, and [C], SUS, to 0, then turn [H], DEP, a little
below zero. The envelope fires once at each note trig and then it is over: it has a beginning
and an end, where an LFO goes round.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["ATK 0", DEC, "SUS 0", REL, RSET, "", "DEST SRC TUNE", DEP], invert: [6] }
hear: Each time the chord starts it comes in a shade flat and settles, once.
recover: The pad stays flat for the whole chord: SUS is above 0. It comes in sharp: DEP is above zero. No bend at all: the list was closed without [YES], or DEP is at 0.
:::

## Step: The room on its own clock
keys: [FX, MOD, D, YES, E, A, B, H]
source: manual §12.8, §12.15
mode: playback

Press [FX] for FX page 1 and turn SND3 up to about half with the knob under it, as on the chords
in session 7 (§12.8): the pad reaches the reverb on track 15. Press [MOD] until the page is FX
LFO 1's (§12.15). Turn [D], DEST, to Send 3 Amount and press [YES]: an FX LFO reaches the
track's effects and its sends, not the voice (the manual's Appendix B lists them). Turn [E],
WAVE, to TRI, [A], SPD, to 6, [B], MULT, to BPM 4 and [H], DEP, to about 30, and check that MODE
reads FREE. One cycle is 2048 ÷ 24 = 85⅓ steps: longer than the pattern, and nothing restarts
it.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 6", "MULT BPM 4", FADE, DEST, "WAVE TRI", SPH, "MODE FREE", "DEP 30"], invert: [0, 1, 4, 7] }
hear: The pad drifts back into the room and out of it again, slower than the filter and never in step with it.
recover: No Send 3 Amount in the list: the page is LFO 1's, LFO 2's or the envelope's, and those reach the voice only — [MOD] until FX LFO 1. No room at all: SND3 went up on another track ([TRK] + [TRIG 4] first), or track 15 holds something else in this pattern. The room takes about twice as long to come round: the multiplier fault of step 5, with the same way out.
:::

## Step: Sixteen bars, hands off
keys: [FUNC, MOD, NO]
source: manual §11.6
mode: playback

Hold [FUNC] and press [MOD]: a picture of what reaches what on this track, the two LFOs and the
envelope into SRC, FLTR and AMP, the FX LFOs into the effects. Nothing on it can be set; the MOD
pages do that (§11.6). Press [NO]. Then take your hands off the machine for four passes of the
pattern, sixteen bars.

:::checkpoint
hear: The filter makes the same journey on every pass. The pan is dealt again at each one. The bend marks each start. The room meets the filter again only after sixteen bars.
recover: The room and the filter rise and fall together: FX LFO 1's SPD is 8 as well — [MOD] until FX LFO 1, and [A] to 6.
:::

## Step: Save
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Hold [FUNC] and press [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4 }
hear: The piece with its pad: one chord that never changes, and four modulators moving it.
recover: No screen said the project was written: [FUNC] was not down when [SETTINGS] went in. Press them together again.
:::

## What you now have

Track 4 holds one trig: E and A, four bars long. Four modulators move it. LFO 1 sweeps the
filter once per pass and starts with bar 1. LFO 2 deals the pad a new place between left and
right at every pass. The mod envelope bends the start of each chord. FX LFO 1 moves the reverb
send on a clock of 85⅓ steps, which meets the filter's 64 every sixteen bars. It is saved with
the piece.

## Explore further

### A modulator on a modulator
On LFO 2's page turn DEST on from AMP:Pan, past the AMP lines, to LFO 1's depth, and press
[YES]: LFO 2 and the envelope can reach LFO 1's own settings (the manual's Appendix B). Each
pass now sweeps the filter by a different amount.

### Velocity moves four knobs
[FUNC] + [TRIG], down to VELOCITY MOD, and [YES]: [A] to [D] choose up to four parameters,
[YES] confirms them, and [E] to [H] set how far each one moves (§11.1.10). The VEL of the
chord's trig is then one hand on all four. Set VELOCITY TO VOL to OFF first, in [FUNC] + [AMP]
(§11.4.1), or a soft chord is also a quiet one
([owners on it](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/616)). [FUNC] + [PLAY]
clears the page (§11.1).

### A pad that knows its register
In the same menu, KEY TRACKING takes up to four parameters as well (§11.1.9). Give it
FLTR:Frequency with a positive depth and play the bottom row from left to right: each key is
brighter than the one before it.

### Dice on a page
Save first. On LFO 2's page, [MOD] + [YES] gives every knob on the page a new value, a different
one at each press, and [MOD] + [PLAY] puts the page back to its defaults (§12.1). Step 7 sets it
again.

### Another second clock
Set FX LFO 1's SPD to 8: the room moves with the filter, pass after pass. Set it to 5: the two
meet every 32 bars. The simulator in step 6 gives the count for any pair of settings.

## Next

Session 9 samples the piece itself: a one-bar loop of the mix, put on track 5.
