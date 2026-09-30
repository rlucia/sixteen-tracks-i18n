---
number: 7
chapter: sound
slug: the-signal-path
title: Der Signalweg
goal: Schick die Drums durch einen Bus, der sie verdichtet, lass die Akkorde auf einem eigenen Bus atmen, gib ihnen einen Raum, und ruf einen Effekt von einer Taste ab.
needs: [Das Projekt aus Session 6, Angeschlossene Kopfhörer, "Etwa sechzehn Minuten"]
teaches: [routing, bus, compressor, shape-envelope, send-fx, parameter-locks, trig-preview, effect-scenes]
simulator: routing
ends: { keys16: { 15: red, 16: red } }
---

## Step: Wo du stehst
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

Session 6 hat A01 mit dem Kit auf Spur 1, der Bassline auf Spur 2 und vier Akkorden auf Spur 3
hinterlassen, und jede davon geht direkt zum Mixer. Steht der Sequencer, drücke [PLAY]. Halte
[FUNC] gedrückt und drücke [SETTINGS], bevor sich das Routing ändert: Alles in dieser Session
ändert, wohin der Klang geht, nicht, was die Spuren spielen.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: Das Stück, wie Session 6 es hinterlassen hat: der Beat, die Bassline, die sich darunter bewegt, ein Akkord pro Takt.
recover: Du fängst hier ohne Session 6 an? Diese Session schreibt den Bass und die Akkorde, und sie dauert etwa sechzehn Minuten; jedes Pattern mit Drums auf Spur 1 und Akkorden auf Spur 3 geht genauso.
:::

## Step: Wohin der Klang geht
keys: [FUNC, MUTE, UP, DOWN]
source: manual §4.4.1
mode: menu:ROUTING

Halte [FUNC] gedrückt und drücke [MUTE]: das ROUTING-Menü (§4.4.1). [UP] und [DOWN] wechseln
zwischen seinen zwei Gruppen, den Audiospuren 1–8 und den Bussen und Send-Spuren. Bei den Spuren
steht in jeder Zeile MIX AB: Jede Spur geht zum Mixer, durch den Haupteffekt, zu den Ausgängen A/B
und zu den Kopfhörern. So beginnt jede Spur eines frischen Patterns.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 MIX AB", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: Nichts ändert sich: Das Menü zeigt nur die Wege.
recover: Eine Liste von Bussen und Send-Spuren statt TRK1 bis TRK8: die andere Gruppe — mit [UP] oder [DOWN] zurück zu den Spuren.
:::

## Step: Die Drums auf Bus 1
keys: [TRIG 1, TRIG 9]
source: manual §4.4.1, §A.2.3
mode: menu:ROUTING

Bei offenem ROUTING halte [TRIG 1] gedrückt und drücke [TRIG 9]. Spur 1 geht jetzt auf BUS 1,
das ist Spur 9, und die Zeile lautet TRK1 BUS 1. Das Kit zieht als Ganzes um: Seine acht Sounds
teilen sich den einen Weg von Spur 1 (§A.2.3). Der Bus gibt die Drums unverändert an den Mixer
weiter, bis ein Effekt auf ihm liegt.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: Die Drums genau wie vorher: Ein Bus ohne Effekt reicht das Audio durch.
recover: Spur 9 kam zum Bearbeiten nach vorn, oder die Drums haben sich verändert, während die Zeile noch TRK1 MIX AB zeigt: Die Tasten wurden bei geschlossenem Menü gedrückt. Nur das ROUTING-Menü oder ROUT auf der FX-Seite 1 von Spur 1 routet eine Spur (§12.8) — [FUNC] + [MUTE] und die Geste noch einmal.
:::

:::simulator

## Step: Verdichte sie
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO]
source: manual §11.5, §13.5, §A.3.4
mode: menu:TRACK SETUP

Halte [TRK] gedrückt und drücke [TRIG 9]: Bus 1 ist die aktive Spur. Halte [FUNC] gedrückt und
drücke [FX]: TRACK SETUP öffnet sich auf dem ersten Insert des Busses, FX1. Mit [UP]/[DOWN] zu
COMPRESSOR, und [YES] setzt ihn in den Slot; [NO] schließt das Menü. Drücke [FX], bis die FX-Seite
2 erscheint, die Seite des Kompressors (§13.5). Senke THR, bis Kick und Snare den Pegel
herunterdrücken, stell RAT auf 4.00 und heb MUP an, bis die Drums so laut sind wie vorher
(§A.3.4).

:::checkpoint
screen: { menu: "FX 1", items: ["BYPASS", "CHRONO PITCH", "COMB ± FILTER", "COMPRESSOR"], sel: 3 }
hear: Kick und Snare im Pegel näher an den Hi-Hats, das ganze Kit dichter und gleichmäßiger, so laut wie vorher.
recover: Die Drums leiser als vorher: MUP steht noch tief — heb es an. Gar keine Änderung: Spur 1 liegt nicht auf BUS 1 (Schritt 3), oder der Kompressor ist auf einer anderen Spur gelandet — [TRK] + [TRIG 9] und noch einmal [FUNC] + [FX].
:::

## Step: Die Akkorde auf Bus 2
keys: [FUNC, MUTE, TRIG 3, TRIG 10, NO]
source: manual §4.4.1
mode: menu:ROUTING

Halte [FUNC] gedrückt und drücke wieder [MUTE]. Halte [TRIG 3] gedrückt und drücke [TRIG 10]: Die
Akkorde gehen auf BUS 2, Spur 10. Drücke [NO], um das Menü zu schließen.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 BUS 2", "TRK4 MIX AB"], sel: 2 }
hear: Die Akkorde unverändert, die Drums weiter verdichtet auf Bus 1.
recover: TRK3 zeigt noch MIX AB: [TRIG 10] kam, ohne dass [TRIG 3] gehalten war — erst halten, dann drücken. TRK3 zeigt BUS 1: [TRIG 9] statt [TRIG 10].
:::

## Step: Der Bus atmet
keys: [TRK, TRIG 10, RECORD, TRIG 1, TRIG 5, TRIG 9, TRIG 13, AMP]
leds: { RECORD: red }
source: manual §13.2, §A.2.6
mode: grid-recording

Halte [TRK] gedrückt und drücke [TRIG 10]: Bus 2 ist die aktive Spur. Drücke [RECORD] für GRID
RECORDING und drücke [TRIG 1], [TRIG 5], [TRIG 9] und [TRIG 13]: vier Trigs auf dem eigenen
Sequencer von Bus 2. Ein Bus-Trig spielt keinen Klang; er löst die Shape-Hüllkurve des Busses aus
(§A.2.6). Drücke [AMP] für ihre Seite: ATK kurz, DEC lang genug, um bis zur nächsten Zählzeit zu
reichen, und ENV weit weg von 0 gedreht. Die Akkorde tauchen jetzt mit jedem der vier ab und
schwellen wieder an.

:::note
In welche Richtung ENV für ein Abtauchen gedreht werden muss, ist nicht geklärt: Red Means
Recording dreht es unter null ([das Video](https://www.youtube.com/watch?v=Ku3u0uUJoSE&t=977)),
umonox dreht es mit kurzem Decay nach oben ([das Video](https://www.youtube.com/watch?v=bN-HX1n-0cQ&t=147)).
Dreh es, bis die Akkorde auf der Zählzeit abtauchen.
:::

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Die Akkorde pulsieren viermal pro Takt, tauchen auf jeder Zählzeit ab und steigen vor der nächsten wieder an.
recover: Die Trigs leuchten, aber die Akkorde bleiben ruhig: ENV steht auf 0. Die Akkorde atmen einen Takt lang und stehen drei Takte still: Bus 2 läuft 64 Schritte — mit Bus 2 aktiv [FUNC] + [PAGE], [FUNC] und [E] auf LENGTH 16, [NO]. Trigs leuchten, ENV ist gesetzt, und trotzdem nichts: Besitzer berichten, dass auf 1.4.1 Bus-Trigs aufhören können, die Hüllkurve auszulösen, bis das Gerät neu startet ([der Bericht](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2569)) — speichern, aus- und wieder einschalten.
:::

## Step: Ein Raum für die Akkorde
keys: [TRK, TRIG 3, FX]
source: manual §12.8, §5.3.4
mode: playback

Halte [TRK] gedrückt und drücke [TRIG 3]. Drücke [FX] für die FX-Seite 1, wo das Routing der Spur
und ihre drei Sends liegen (§12.8). Dreh SND3 mit dem Regler darunter etwa zur Hälfte auf: Die
Akkorde gehen wie vorher auf Bus 2, und eine Kopie davon geht auf Spur 15, die Send-Spur, die in
einem frischen Pattern den Hall hat (§5.3.4).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3, params: [SND1 0, SND2 0, SND3 64, "ROUT BUS2"], invert: [2] }
hear: Ein Nachklang nach jedem Akkord, der Raum hinter ihnen; die Drums und der Bass trocken.
recover: Ein schwankender, gedoppelter Klang statt eines Nachklangs: SND1 ist hochgegangen — Spur 13 hat einen Chorus; stell es zurück auf 0 und dreh SND3 auf. Kein Nachklang: Spur 15 hat in diesem Pattern etwas anderes ([TRK] + [TRIG 15] zeigt es), oder SND3 ist auf dem Bass hochgegangen — zuerst [TRK] + [TRIG 3].
:::

## Step: Eine Szene auf einer Taste
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO, RECORD, TRIG 15, TRIG 16, TRIG, D]
leds: { RECORD: red }
source: manual §10.3, §13.2, §13.6, §A.3.12
mode: grid-recording

Halte [TRK] gedrückt und drücke [TRIG 9]. Halte [FUNC] gedrückt und drücke [FX], drücke noch
einmal [FX] für den zweiten Slot, FX2, und mit [UP]/[DOWN] zu LOW-PASS FILTER, [YES], [NO]. Auf
der FX-Seite 3, der Seite des Filters (§13.6), dreh FREQ ganz auf. Drücke [RECORD] für GRID
RECORDING und drücke [TRIG 15] und [TRIG 16]: zwei Trigs auf Bus 1. Drücke [TRIG] für die
TRIG-Seite, halte [TRIG 15] und dreh [D], PROB, auf 0 %, dann dasselbe mit [TRIG 16] gehalten:
Keiner von beiden spielt je von selbst (§13.2). Zurück auf der FX-Seite 3 halte [TRIG 15] und dreh
FREQ fast ganz zu; halte [TRIG 16] und dreh FREQ herunter und wieder ganz hinauf, damit dieser Trig
den offenen Filter trägt. Jetzt drücke [TRIG 15] + [YES], die Trig-Taste zuerst: Die Drums
verschwinden hinter einer Wand und bleiben dort. [TRIG 16] + [YES]: Sie kommen zurück (§10.3).

:::checkpoint
keys16: { 15: red, 16: red }
hear: Mit [TRIG 15] + [YES] die Drums dumpf und fern unter Bass und Akkorden, Takt für Takt; mit [TRIG 16] + [YES] wieder hell.
recover: Die Wand geht nie von selbst weg: So wirkt ein Lock auf einem Bus — er hält, bis ein anderer Trig ihn ändert ([Besitzer dazu](https://www.elektronauts.com/t/tonverk-user-thread/238631/998)); [TRIG 16] + [YES] öffnet den Filter wieder. Die Drums werden einmal pro Takt von selbst dumpf: PROB auf Schritt 15 steht nicht auf 0 % — halte [TRIG 15] auf der TRIG-Seite und dreh [D] herunter. Gar nichts passiert: Der Lock ist auf der FX-Seite 2 gelandet, beim Kompressor — FREQ liegt auf der FX-Seite 3.
:::

## Step: Speichern
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Halte [FUNC] gedrückt und drücke [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: Das Stück geroutet: die Drums verdichtet, die Akkorde atmend in ihrem Raum, der Bass direkt zum Mixer.
recover: Kein Display hat gemeldet, dass das Projekt geschrieben wurde: [FUNC] war nicht unten, als [SETTINGS] kam. Drück beide noch einmal zusammen.
:::

## What you now have

Das Kit geht durch Bus 1, wo ein Kompressor es zusammenhält und ein Low-Pass-Filter darauf wartet,
dass [TRIG 15] + [YES] ihn schließt und [TRIG 16] + [YES] ihn öffnet. Die Akkorde gehen durch Bus
2, dessen eigene vier Trigs sie auf jeder Zählzeit atmen lassen, und schicken eine Kopie von sich in
den Hall auf Spur 15. Der Bass geht direkt zum Mixer. Das Routing gehört zu A01, und es ist
gespeichert.

## Explore further

### Umrouten, während es spielt
Im ROUTING mit [DOWN] zu den Bussen, halte [TRIG 10] gedrückt und drücke [KEYBOARD A1]: Bus 2 geht
auf OUT CD, direkt zu den Ausgängen C/D, und die Akkorde verlassen die Kopfhörer und die Ausgänge
A/B. Ist an C/D nichts angeschlossen, sind sie weg. [TRIG 10] und LEVEL/DATA stellen ihn zurück auf
MIX AB (§4.4.1).

### Die Reihenfolge nach Gehör
Auf Bus 1 erreichen [FUNC] + [FX] und zweimal mehr [FX] die dritte Unterseite: Markiere SWAP
FX1/FX2 und drücke [YES] (§11.5.4). Der Filter kommt jetzt vor dem Kompressor. Ruf die Szene in
beiden Reihenfolgen ab und behalte die, die dir besser gefällt.

### Das Atmen mit einer Taste anhalten
Gib den vier Trigs von Bus 2 die Bedingung ¬FILL (§10.10.2): Die Akkorde atmen, solange [FILL]
oben ist, und stehen still, solange es gehalten wird.

### Den Bus stummschalten
[MUTE] + [TRIG 10] schaltet Bus 2 stumm. Seine Trigs hören auf, und die Akkorde stehen still, aber
sie klingen weiter: Einen Bus stummzuschalten hält seinen Sequencer an, nicht das Audio, das durch
ihn läuft ([Besitzer dazu](https://www.elektronauts.com/t/buses-mute-question/244694/1)).

### Die eigene Reihenfolge der Stimme
Jede Audiospur schickt ihren Klang durch einen Overdrive und zwei Filter, in einer Reihenfolge, die
du wählst: [FUNC] + [FLTR] auf Spur 3, dann [LEFT]/[RIGHT] (§11.3.1), und hör dir die Akkorde in
jeder Reihenfolge an.

## Next

Session 8 bringt ein Pad auf Spur 4, das sich von selbst bewegt, mit LFOs und einer
Modulationshüllkurve auf dem Klang.
