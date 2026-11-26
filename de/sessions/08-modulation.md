---
number: 8
chapter: sound
slug: modulation
title: Modulation
goal: "Halte auf Spur 4 einen Akkord vier Takte lang und bring ihn allein mit Modulatoren in Bewegung: ein Filter, der mit dem Pattern auf- und zugeht, bei jedem Durchlauf ein neuer Platz zwischen links und rechts, eine Biegung in jeden Akkord hinein, und ein Hall, der auf einer eigenen Uhr treibt."
needs: [Das Projekt aus Session 7, Angeschlossene Kopfhörer, "Etwa sechzehn Minuten"]
teaches: [lfo, lfo-speed, lfo-modes, play-mode, mod-envelope, fx-lfo, modulation-destinations, mod-overview]
simulator: modulation
ends: { keys16: { 1: red } }
---

## Step: Wo du stehst
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

Session 7 hat A01 geroutet hinterlassen: das Kit verdichtet auf Bus 1, die Akkorde atmend auf Bus
2 und im Hall auf Spur 15, der Bass direkt zum Mixer, und Bus 1 als aktive Spur. Steht der
Sequencer, drücke [PLAY]. Halte [FUNC] gedrückt und drücke [SETTINGS], bevor Spur 4 einen Sound
bekommt: In dieser Session kommt ein Akkord darauf, und er ändert sich nie wieder. Alles, was sich
danach bewegt, ist ein Modulator.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: Das Stück, wie Session 7 es hinterlassen hat: die Drums dicht auf ihrem Bus, die Akkorde, die auf jeder Zählzeit abtauchen, mit einem Raum dahinter, die Bassline unter beidem.
recover: Du fängst hier ohne Session 7 an? Diese Session routet das Stück, und sie dauert etwa sechzehn Minuten; jedes Pattern mit Akkorden auf Spur 3 und nichts auf Spur 4 geht genauso, solange Spur 15 noch den Hall hat, den ein frisches Pattern dort hat.
:::

## Step: Ein Pad auf Spur 4
keys: [TRK, TRIG 4, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 4: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Halte [TRK] gedrückt und drücke [TRIG 4]. Drücke [PRESET], mit [RIGHT] zu KEYS, mit [UP]/[DOWN] zu
063 OXY GEN, und [YES] — oder jeder KEYS-Sound, der hält, solange seine Taste unten ist, und dabei
stillsteht. Dann halte [FUNC], drücke [PAGE], halte [FUNC] und dreh [E] auf LENGTH 64 für Spur 4,
und drücke [NO]. Das Menü steht noch auf PER TRACK, also behält das Kit seinen einen Takt
(§10.9.2). Halte eine Taste der unteren Reihe vier Takte lang und hör ihr zu.

:::note
Ein Preset, das sich schon bewegt, bringt eigene Modulation mit. Die Taste einer Parameterseite,
zusammen mit [PLAY] gehalten, stellt diese Seite auf ihre Grundwerte zurück (§12.1): [MOD] geht
durch die fünf MOD-Seiten, und [MOD] + [PLAY] auf jeder davon lässt den Sound stillstehen.
:::

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Bei gehaltener Taste dauert ein Ton die vier Takte, und nichts darin bewegt sich; Beat, Bassline und Akkorde laufen darunter weiter.
recover: Der Ton verklingt, bevor die vier Takte um sind: Dieses Preset hält nicht — nimm ein anderes. LENGTH zeigte schon 64, als das Menü aufging: Das ist die einer anderen Spur — [TRK] + [TRIG 4], dann noch einmal [FUNC] + [PAGE].
:::

## Step: Ein Akkord, vier Takte
keys: [+, RECORD, TRIG 1, KEYBOARD E1, KEYBOARD A1, TRIG, C]
leds: { RECORD: red }
source: manual §8.5, §10.3, §10.3.1, §12.2
mode: grid-recording

Drücke [+], bis der leuchtende Punkt neben [+] und [-] auf 0 steht. Session 6 hat die Tastatur auf
−1 gestellt, und dort wurden die Akkorde gespielt; die Tasten klingen jetzt also eine Oktave
darüber (§8.5). Drücke [RECORD] für GRID RECORDING und drücke [TRIG 1]: ein Trig. Halte [TRIG 1]
gedrückt und drücke [KEYBOARD E1] und [KEYBOARD A1]: Die beiden Töne treten an die Stelle des
eigenen Tons des Trigs (§10.3.1). Drücke [TRIG] für die TRIG-Seite, halte [TRIG 1] wieder gedrückt
und dreh [C], LEN, bis auf 64 Schritte (§12.2): Der Akkord dauert jetzt das ganze Pattern. Ein Ton
kann bis zu 128 Schritte lang sein
([Besitzer dazu](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/147)). Drücke [RECORD],
um GRID RECORDING zu verlassen.

:::checkpoint
keys16: { 1: red }
hear: E und A zusammen, von der ersten Zählzeit von Takt 1, bis der Loop herum ist, über allen vier Akkorden und zu jedem von ihnen stimmig.
recover: Das Pad brummt unter den Akkorden oder reibt sich am zweiten: Es liegt eine Oktave zu tief — [+], bis der Punkt auf 0 steht, dann [RECORD], [TRIG 1] halten und die beiden Tasten noch einmal drücken. Ein Ton statt zwei: Die Tasten kamen, ohne dass [TRIG 1] gehalten war. Der andere Weg hinein, aus der Wiedergabe: [STEP EDIT], dann [TRIG 1], das grün wird; dort fügt eine dunkle Taste ihren Ton hinzu, und eine leuchtende nimmt ihn weg, also drücke, bis nur [KEYBOARD E1] und [KEYBOARD A1] leuchten, dann wieder [STEP EDIT] (§10.3.1). Ein Akkord, der nur einen Schritt dauert, obwohl LEN 64 zeigt: Das ist einem Besitzer auf 1.4.1 begegnet ([der Bericht](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2588)) — dreh LEN herunter und wieder auf 64.
:::

## Step: LFO 1, nach Gehör
keys: [FLTR, MOD, E, H, D, YES]
source: manual §12.12
mode: playback

Drücke [FLTR] und dreh FREQ mit dem Regler darunter etwa auf die Hälfte: Ein LFO legt seine Tiefe
um den eigenen Wert des Parameters, also braucht der Filter Platz nach beiden Seiten. Drücke
[MOD], bis die Seite die von LFO 1 ist (§12.12). Dreh [E], WAVE, auf TRI, das Dreieck, und [H],
DEP, auf etwa 40. Dann dreh [D], DEST: Über der Seite öffnet sich eine Liste, und jede Zeile ist
zu hören, solange sie markiert ist. Geh sie langsam hinunter und hör, was der LFO mit jedem
Parameter macht. Bleib auf FLTR:Frequency stehen und drücke [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST FLTR FREQ", "WAVE TRI", SPH, MODE, "DEP 40"], invert: [3, 4] }
hear: Das Pad wird von selbst heller und dunkler, in einem Tempo, das mit den Takten nichts zu tun hat.
recover: Die Hälfte jedes Sweeps tut nichts: FREQ steht an einem Ende — [FLTR], und FREQ auf die Hälfte. Nichts bewegt sich: DEP steht auf 0, oder die Liste wurde mit [NO] geschlossen, und dann bleibt das Ziel, das vorher da war.
:::

## Step: Vier Takte lang
keys: [A, B]
source: manual §12.12, §12.16
mode: playback

Dreh [A], SPD, auf 8 und [B], MULT, auf BPM 4. Ein Zyklus eines LFOs dauert 2048 ÷ (SPD × MULT)
Schritte seiner Spur (die Tabelle nach §12.16): 2048 ÷ 32 ist 64, die vier Takte des Patterns. In
MODE FREE folgt ein LFO dem Tempo und kümmert sich nicht um [PLAY] oder [STOP]: Er läuft weiter,
während der Sequencer steht
([ein Tester dazu](https://www.elektronauts.com/t/experiencing-some-massive-lfo-confusion/256117/9)).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 8", "MULT BPM 4", FADE, "DEST FLTR FREQ", "WAVE TRI", SPH, "MODE FREE", "DEP 40"], invert: [0, 1] }
hear: Ein Anstieg und ein Abfall dauern jetzt die vier Akkorde, und der Sweep beginnt bei jedem [PLAY] woanders.
recover: Ein Sweep, der etwa doppelt so lang ist wie die vier Takte: Auf 1.4.1 kann ein Multiplikator, der zum ersten Mal gesetzt wird, zu langsam laufen, bis das Pattern verlassen und wieder betreten wird ([der Bericht](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2636)) — halte [PTN] und drücke [TRIG 2], warte, bis A02 spielt, dann halte [PTN] und drücke [TRIG 1]. Der Sweep beginnt schon jedes Mal an derselben Stelle: MODE steht nicht auf FREE, und Schritt 6 stellt es ein.
:::

## Step: Von vorn
keys: [G, FUNC, TRIG, LEFT, RIGHT, NO, STOP, PLAY]
source: manual §12.12, §11.1.1
mode: menu:TRACK SETUP

Dreh [G], MODE, auf TRIG: Jeder Noten-Trig startet den LFO jetzt neu, und das Pad hat einen, auf
Schritt 1 (§12.12). Halte [FUNC] gedrückt und drücke [TRIG]: TRACK SETUP, mit PLAY MODE als erster
Zeile. Stell sie mit [LEFT]/[RIGHT] auf POLY M.LFO und drücke [NO]. In POLY läuft für jeden der
beiden Töne ein eigener LFO; in POLY M.LFO teilen sie sich einen (§11.1.1). Drücke [STOP], dann
[PLAY]: Der Sweep beginnt mit Takt 1.

Der Simulator darunter beginnt mit diesen Einstellungen, und die Modulatoren der Schritte 7 bis 9
sind schon an ihrem Platz. Stell seine Noten-Trigs auf einen in jedem Takt: LFO 1 startet sechzehn
Schritte nach Beginn jedes Sweeps neu und bringt keinen zu Ende. Ein einzelner Trig, vier Takte
lang, ist es, der den Sweep bis zum Ende laufen lässt. Drücke dann sein [STOP], dann [PLAY]: LFO 1
beginnt, wo er begonnen hat; FX LFO 1, den Schritt 9 in FREE lässt, tut das nicht, und LFO 2
bekommt neue Werte.

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE POLY M.LFO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: Der Sweep beginnt bei jedem Durchlauf mit Takt 1, und nach jedem [STOP] und [PLAY] wieder.
recover: Ein Sweep, der irgendwo beginnt: MODE steht noch auf FREE. Die beiden Töne laufen auseinander, einer hell, während der andere dunkel ist: PLAY MODE steht noch auf POLY.
:::

:::simulator

## Step: Bei jedem Durchlauf ein neuer Platz
keys: [MOD, E, G, D, YES, H]
source: manual §12.13
mode: playback

Drücke [MOD], bis die Seite die von LFO 2 ist: dieselben acht Regler (§12.13). Dreh [E], WAVE, auf
RND und [G], MODE, auf HOLD: Die Zufallswelle läuft ungesehen, und jeder Noten-Trig hält den Wert
fest, den sie in dem Moment hat, bis zum nächsten (§12.12). Dreh [D], DEST, auf AMP:Pan und drücke
[YES], dann [H], DEP, auf etwa 40.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST AMP PAN", "WAVE RND", SLEW, "MODE HOLD", "DEP 40"], invert: [3, 4, 6] }
hear: Alle vier Takte ist das Pad woanders zwischen links und rechts und bleibt dort, bis der Akkord wieder beginnt.
recover: Das Pad wandert ohne Ruhe nach links und rechts: MODE steht nicht auf HOLD. Die beiden Töne landen an zwei Stellen: PLAY MODE steht auf POLY (Schritt 6). Immer genau in der Mitte: DEP steht auf 0.
:::

## Step: Eine Biegung in jeden Akkord
keys: [MOD, G, YES, H, A, B, C]
source: manual §12.14
mode: playback

Drücke noch einmal [MOD]: die Seite der Mod-Hüllkurve (§12.14). Dreh [G], DEST, auf SRC:Tune und
drücke [YES]. Stell [A], ATK, auf 0, [B], DEC, kurz und [C], SUS, auf 0, dann dreh [H], DEP, ein
wenig unter null. Die Hüllkurve löst bei jedem Noten-Trig einmal aus, und dann ist sie vorbei: Sie
hat einen Anfang und ein Ende, wo ein LFO im Kreis läuft.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["ATK 0", DEC, "SUS 0", REL, RSET, "", "DEST SRC TUNE", DEP], invert: [6] }
hear: Jedes Mal, wenn der Akkord beginnt, kommt er eine Spur zu tief herein und setzt sich, einmal.
recover: Das Pad bleibt den ganzen Akkord lang zu tief: SUS steht über 0. Es kommt zu hoch herein: DEP steht über null. Gar keine Biegung: Die Liste wurde ohne [YES] geschlossen, oder DEP steht auf 0.
:::

## Step: Der Raum auf eigener Uhr
keys: [FX, MOD, D, YES, E, A, B, H]
source: manual §12.8, §12.15
mode: playback

Drücke [FX] für die FX-Seite 1 und dreh SND3 mit dem Regler darunter etwa zur Hälfte auf, wie bei
den Akkorden in Session 7 (§12.8): Das Pad erreicht den Hall auf Spur 15. Drücke [MOD], bis die
Seite die von FX LFO 1 ist (§12.15). Dreh [D], DEST, auf Send 3 Amount und drücke [YES]: Ein FX LFO
erreicht die Effekte der Spur und ihre Sends, nicht die Stimme (Anhang B des Handbuchs listet sie
auf). Dreh [E], WAVE, auf TRI, [A], SPD, auf 6, [B], MULT, auf BPM 4 und [H], DEP, auf etwa 30,
und sieh nach, dass MODE auf FREE steht. Ein Zyklus sind 2048 ÷ 24 = 85⅓ Schritte: länger als das
Pattern, und nichts startet ihn neu.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 6", "MULT BPM 4", FADE, DEST, "WAVE TRI", SPH, "MODE FREE", "DEP 30"], invert: [0, 1, 4, 7] }
hear: Das Pad treibt in den Raum hinein und wieder heraus, langsamer als der Filter und nie im Gleichschritt mit ihm.
recover: Kein Send 3 Amount in der Liste: Die Seite ist die von LFO 1, LFO 2 oder der Hüllkurve, und die erreichen nur die Stimme — [MOD], bis FX LFO 1 kommt. Gar kein Raum: SND3 ist auf einer anderen Spur hochgegangen (zuerst [TRK] + [TRIG 4]), oder Spur 15 hat in diesem Pattern etwas anderes. Der Raum braucht etwa doppelt so lang, bis er herum ist: der Multiplikator-Fehler aus Schritt 5, mit demselben Ausweg.
:::

## Step: Sechzehn Takte, Hände weg
keys: [FUNC, MOD, NO]
source: manual §11.6
mode: playback

Halte [FUNC] gedrückt und drücke [MOD]: ein Bild davon, was auf dieser Spur was erreicht, die
beiden LFOs und die Hüllkurve SRC, FLTR und AMP, die FX LFOs die Effekte. Einstellen lässt sich
darauf nichts; das tun die MOD-Seiten (§11.6). Drücke [NO]. Dann nimm die Hände vier Durchläufe
des Patterns lang vom Gerät, sechzehn Takte.

:::checkpoint
hear: Der Filter macht bei jedem Durchlauf dieselbe Reise. Das Panorama wird bei jedem neu ausgeteilt. Die Biegung markiert jeden Anfang. Der Raum trifft den Filter erst nach sechzehn Takten wieder.
recover: Der Raum und der Filter steigen und fallen zusammen: SPD von FX LFO 1 steht auch auf 8 — [MOD], bis FX LFO 1 kommt, und [A] auf 6.
:::

## Step: Speichern
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Halte [FUNC] gedrückt und drücke [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4 }
hear: Das Stück mit seinem Pad: ein Akkord, der sich nie ändert, und vier Modulatoren, die ihn bewegen.
recover: Kein Display hat gemeldet, dass das Projekt geschrieben wurde: [FUNC] war nicht unten, als [SETTINGS] kam. Drück beide noch einmal zusammen.
:::

## What you now have

Spur 4 hat einen Trig: E und A, vier Takte lang. Vier Modulatoren bewegen ihn. LFO 1 fährt den
Filter einmal pro Durchlauf auf und zu und beginnt mit Takt 1. LFO 2 teilt dem Pad bei jedem
Durchlauf einen neuen Platz zwischen links und rechts zu. Die Mod-Hüllkurve biegt den Anfang jedes
Akkords. FX LFO 1 bewegt den Send zum Hall auf einer Uhr von 85⅓ Schritten, die die 64 des Filters
alle sechzehn Takte trifft. Es ist mit dem Stück gespeichert.

## Explore further

### Ein Modulator auf einem Modulator
Dreh auf der Seite von LFO 2 DEST von AMP:Pan weiter, an den AMP-Zeilen vorbei, bis zur Tiefe von
LFO 1, und drücke [YES]: LFO 2 und die Hüllkurve können die eigenen Einstellungen von LFO 1
erreichen (Anhang B des Handbuchs). Jeder Durchlauf fährt den Filter jetzt um einen anderen
Betrag.

### Velocity bewegt vier Regler
[FUNC] + [TRIG], hinunter zu VELOCITY MOD, und [YES]: [A] bis [D] wählen bis zu vier Parameter,
[YES] bestätigt sie, und [E] bis [H] stellen ein, wie weit sich jeder bewegt (§11.1.10). Die VEL
des Akkord-Trigs ist dann eine Hand auf allen vieren. Stell vorher VELOCITY TO VOL auf OFF, in
[FUNC] + [AMP] (§11.4.1), sonst ist ein weicher Akkord auch ein leiser
([Besitzer dazu](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/616)). [FUNC] + [PLAY]
leert die Seite (§11.1).

### Ein Pad, das seine Lage kennt
Im selben Menü nimmt KEY TRACKING ebenfalls bis zu vier Parameter (§11.1.9). Gib ihm
FLTR:Frequency mit einer positiven Tiefe und spiel die untere Reihe von links nach rechts: Jede
Taste ist heller als die davor.

### Würfeln auf einer Seite
Speichere zuerst. Auf der Seite von LFO 2 gibt [MOD] + [YES] jedem Regler der Seite einen neuen
Wert, bei jedem Druck einen anderen, und [MOD] + [PLAY] stellt die Seite auf ihre Grundwerte zurück
(§12.1). Schritt 7 stellt sie wieder ein.

### Eine andere zweite Uhr
Stell SPD von FX LFO 1 auf 8: Der Raum bewegt sich mit dem Filter, Durchlauf für Durchlauf. Stell
es auf 5: Die beiden treffen sich alle 32 Takte. Der Simulator in Schritt 6 nennt die Zahl für
jedes Paar von Einstellungen.

## Next

Session 9 sampelt das Stück selbst: ein eintaktiger Loop des Mixes, auf Spur 5 gelegt.
