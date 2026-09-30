---
number: 6
chapter: sound
slug: notes-and-harmony
title: Noten und Harmonie
goal: Leg eine Bassline und vier Akkorde unter den Beat, indem du zweimal vier Tasten spielst, und lass Arpeggiator und Akkordmodus den Rest machen.
needs: [Das Projekt aus Session 5, Angeschlossene Kopfhörer, "Etwa sechzehn Minuten"]
teaches: [track-select, load-preset, play-mode, octave, page-setup-per-track, chord-scale, live-recording, arpeggiator, chord-mode, pattern-transpose]
simulator: null
ends: { keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green } }
---

## Step: Wo du stehst
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 5 hat A01 auf Spur 1 so hinterlassen, dass es sich von Loop zu Loop ändert, in GRID
RECORDING auf dem Subtrack der Snare. Steht der Sequencer, drücke [PLAY]. Halte [FUNC] gedrückt
und drücke [SETTINGS], bevor etwas Neues dazukommt: In dieser Session füllen sich die Spuren 2
und 3, und das Speichern ist der Boden unter beiden.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Der Beat aus Session 5 läuft: der Pickup in jedem zweiten Loop, die Ghost Notes, die um ihren Platz würfeln. Fünf Tasten leuchten auf dem Streifen — die Snare auf 5 und 13 und die drei Fill-Snares danach.
recover: Du fängst hier ohne Session 5 an? Diese Session schreibt das Pattern, über dem diese hier spielt, und sie dauert etwa sechzehn Minuten; jedes Pattern mit einem Beat auf Spur 1 und nichts auf den Spuren 2 und 3 geht genauso.
:::

## Step: Ein Bass auf Spur 2
keys: [TRK, TRIG 2, PRESET, RIGHT, UP, DOWN, YES]
leds: { TRIG 2: white }
source: manual §5.3.7, §9.1.4, §7.3
mode: menu:LOAD PRESET

Halte [TRK] gedrückt und drücke [TRIG 2]: Spur 2 ist die aktive Spur. Drücke [PRESET], mit
[RIGHT] zu KEYS, mit [UP]/[DOWN] zu ⟨bass preset⟩, und [YES] lädt es — oder jedes KEYS-Preset,
dessen tiefste Töne rund und kurz sind. Dann spiel die untere Reihe. Auf Spur 1 waren diese Tasten
die acht Sounds des Kits; hier spielt jede denselben Sound in einer anderen Tonhöhe, und die obere
Reihe, auf dem Kit stumm, spielt die Töne dazwischen (§7.3).

:::note
Dieselbe Liste aus dem FILE-Menü, [FUNC] + [PRESET], bleibt nach jedem Laden offen, und so lassen
sich mehrere Presets schneller ausprobieren ([der Weg eines Besitzers](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/606)).
:::

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 1 }
hear: Der Beat läuft unter dir weiter. Jede Taste der unteren Reihe spielt einen tiefen Ton des Basses, von links nach rechts höher.
recover: Kommen die Sounds des Kits aus den Tasten, ist noch Spur 1 aktiv — halte [TRK], drücke [TRIG 2] und lade noch einmal. Eine Liste mit nichts als Kits ist DRUMS: noch einmal [RIGHT].
:::

## Step: Eine Stimme, eine Oktave tiefer
keys: [FUNC, TRIG, UP, DOWN, LEFT, RIGHT, NO, -]
source: manual §11, §11.1.1, §8.5
mode: menu:TRACK SETUP

Halte [FUNC] gedrückt und drücke [TRIG]: TRACK SETUP öffnet sich auf seiner TRIG-Seite (§11).
[UP] und [DOWN] gehen durch die Zeilen; PLAY MODE ist die erste. Stell sie mit [LEFT]/[RIGHT] auf
MONO und drücke [NO]: Ein neuer Ton schneidet jetzt den vorigen ab, immer nur ein Ton (§11.1.1).
Dann drücke einmal [-]. Die Tastatur rutscht eine Oktave nach unten, und der leuchtende Punkt neben
[+] und [-] wandert von 0 auf −1 (§8.5).

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE MONO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: Halte eine Taste und drück eine zweite: Die erste verstummt. Jede Taste klingt eine Oktave tiefer als vorher.
recover: Zwei Töne zugleich: PLAY MODE steht noch auf POLY — noch einmal [FUNC] + [TRIG]. Keine tiefere Lage: [-] ging an ein Menü, das noch offen war; drück es, während der Hauptbildschirm zu sehen ist.
:::

## Step: Vier Takte für den Bass
keys: [FUNC, PAGE, YES, E, NO]
source: manual §10.9, §10.9.1, §10.9.2
mode: menu:PAGE SETUP

Halte [FUNC] gedrückt und drücke [PAGE]. PAGE SETUP öffnet sich in PER PATTERN, wo alle Spuren
eine Länge teilen (§10.9.1). Halte [FUNC] und drücke [YES] für PER TRACK, wo LENGTH nur der aktiven
Spur gehört (§10.9.2). Halte [FUNC] und dreh [E]: LENGTH springt in Sechzehnerschritten — halte bei
64, vier Takten. [NO] schließt das Menü. Spur 1 behält ihre 16, also läuft das Kit jeden Takt einmal
herum, während Spur 2 vier zu füllen hat.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Noch nichts Neues: Die Länge schafft nur Platz. Auf dem Hauptbildschirm vier kleine Quadrate für die vier Seiten von Spur 2.
recover: Hat das Kit auch vier Quadrate, stand das Menü noch auf PER PATTERN, als LENGTH sich bewegte: [FUNC] + [PAGE], [FUNC] + [YES] für PER TRACK, dann mit Spur 1 aktiv ([TRK] + [TRIG 1]) LENGTH zurück auf 16. Kriecht LENGTH Schritt für Schritt, ist [FUNC] nicht gedrückt, während [E] sich dreht. Vier Takte, die nach einem von vorn beginnen: RESET in der PATTERN-Spalte des Menüs steht unter 64 — dreh es auf INF (§10.9.2). Vor Schritt 6 [TRK] + [TRIG 2]: Spur 2 ist die, die gespielt wird.
:::

## Step: Gib dem Pattern eine Tonart
keys: [CHORD, NO]
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Drücke [CHORD]: CHORD/SCALE SETUP, ein Bild davon, was die Tastatur spielt (§8.5.1). Stell mit dem
Regler unter jeder Einstellung ROOT auf A, SCALE auf AEOLIAN (MINOR) und GUIDE auf LIGHT, dann
drücke [NO]. Die Einstellung gehört zum Pattern, nicht zu einer Spur. Auf Spur 2 leuchten jetzt die
Tasten in a-Moll: die ganze untere Reihe und keine der oberen — a-Moll sind die weißen Tasten.

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD OFF"] }
hear: Am Klang ändert sich nichts. Die untere Reihe leuchtet, die obere bleibt dunkel.
recover: Keine Taste leuchtet: GUIDE steht noch auf OFF. Eine Taste spielt einen anderen Ton als den gedrückten: GUIDE steht auf SNAP, das eine Taste außerhalb der Tonleiter auf die nächste innerhalb verschiebt — LIGHT zeigt nur.
:::

## Step: Vier Grundtöne, eingespielt
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Drücke [STOP]. Halte [RECORD] gedrückt und drücke [PLAY]: Jede Spur startet bei ihrem ersten
Schritt, und LIVE RECORDING ist an, [RECORD] blinkt rot (§10.4). Halte sofort [KEYBOARD A1], einen
Takt lang — bis vier gezählt —, dann [KEYBOARD F1] für den zweiten Takt, [KEYBOARD C1] für den
dritten und [KEYBOARD G1] für den vierten. Drücke [STOP], wenn der vierte Takt endet, dann [PLAY],
um es zu hören.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 2 }
hear: Unter dem Beat vier lange tiefe Töne, einer pro Takt: A, F, C, G, und wieder von vorn.
recover: Ein Ton, der vor dem Ende seines Takts aufhört, wurde zu früh losgelassen. Ein eingespielter Ton behält die Länge, die er gehalten wurde, und LEN auf seinem Trig zu drehen ändert daran nichts ([Besitzer haben es gefunden](https://www.elektronauts.com/t/trig-len-not-working/249623/8)). Um die vier noch einmal zu spielen, lösch sie zuerst: [RECORD] für GRID RECORDING, dann [FUNC] + [PLAY] — die Trigs von Spur 2 gehen, die des Kits bleiben (§10.10.4) —, wieder [RECORD], und fang diesen Schritt von vorn an. Der erste Ton gehört zum Druck auf [PLAY], nicht einen Schlag danach.
:::

## Step: Der Arp schreibt die Linie
keys: [ARP, H, LEFT, RIGHT, E, DOWN, FUNC, NO]
leds: { ARP: cyan }
source: manual §9.4, §9.4.5, §9.4.6
mode: menu:ARPEGGIATOR

Drücke [ARP], während Spur 2 aktiv ist: das ARPEGGIATOR-Menü (§9.4). Dreh [H] auf ARP LENGTH 8
(§9.4.6). [LEFT] und [RIGHT] wählen einen der acht Schritte, und [E] setzt seinen Versatz, in
Halbtönen vom Ton auf dem Trig aus (§9.4.5): Schritt 1 bleibt auf 0, dann +12, +7, Schritt 4 mit
[DOWN] stumm, 0, +7, Schritt 7 stumm, +12. Halte [FUNC] und drücke [ARP], um den Arpeggiator
einzuschalten. [NO] verlässt das Menü; außerhalb davon leuchtet [ARP] cyan, solange Spur 2 aktiv
ist.

:::note
Die Versätze zählen vom eigenen Ton jedes Trigs aus, also beginnt eine Figur im ersten Takt auf A,
im zweiten auf F, dann auf C und G. 0, +2, +7 und +12 bleiben über allen vier Grundtönen in a-Moll;
+3 passt zu A, aber nicht zu F, C oder G.
:::

:::checkpoint
screen: { menu: "ARPEGGIATOR", items: ["MODE", "SPEED", "N.LEN", "OFFSET", "ARP LENGTH 8"] }
keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green }
hear: Aus den vier langen Tönen wird eine bewegte Linie, acht kurze Schritte und wieder von vorn, die in jedem Takt auf den neuen Grundton springt. Im Menü leuchten sechs Trig-Tasten grün und zwei bleiben dunkel: die stummen Schritte.
recover: Immer noch ein langer Ton: Der Arpeggiator ist aus — MODE zeigt OFF, oder [ARP] ist außerhalb des Menüs dunkel: [FUNC] + [ARP]. Die Linie hört vor dem Ende des Takts auf: Der Ton darunter ist kurz, und der Arp spielt nur, solange der Ton seines Trigs dauert (Schritt 6). Ein saurer Ton: ein Versatz außer 0, +2, +7 oder +12.
:::

## Step: Akkorde auf Spur 3
keys: [TRK, TRIG 3, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 3: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Halte [TRK] gedrückt und drücke [TRIG 3]. Drücke [PRESET], mit [RIGHT] zu KEYS, mit [UP]/[DOWN] zu
⟨chord preset⟩, und [YES] — oder jeder KEYS-Sound, der seinen Ton hält, solange die Taste unten
ist. Dann halte [FUNC], drücke [PAGE], halte [FUNC] und dreh [E] auf LENGTH 64 für Spur 3, und
drücke [NO]. Das Menü steht noch auf PER TRACK, und jede Spur behält ihre eigene Länge.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Eine Taste der unteren Reihe hält einen Ton des neuen Sounds, so lange sie gehalten wird; Bassline und Beat laufen weiter.
recover: LENGTH zeigte schon 64, als das Menü aufging: Das ist die von Spur 2 — [TRK] + [TRIG 3], dann noch einmal [FUNC] + [PAGE]. Das Menü zeigt PER PATTERN: zuerst [FUNC] + [YES] für PER TRACK, sonst gehen alle Spuren auf 64.
:::

## Step: Eine Taste, ein Akkord
keys: [CHORD, NO, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { CHORD: cyan }
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Drücke [CHORD], stell mit den Reglern darunter SHAPE auf 1-3-5 und CHORD auf ON, dann drücke
[NO]: Der Akkordmodus ist an, [CHORD] leuchtet cyan ([FUNC] + [CHORD] macht dasselbe von überall).
Drücke [KEYBOARD A1]: drei Töne zugleich, a-Moll. Jede Taste spielt den Akkord der a-Moll-Tonleiter,
der auf ihr beginnt — [KEYBOARD F1] F-Dur, [KEYBOARD C1] C-Dur, [KEYBOARD G1] G-Dur (§8.5.1).

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD ON", "SHAPE 1-3-5"], sel: 4 }
hear: Eine Taste, drei Töne: a-Moll, dann F-, C- und G-Dur von den anderen drei Tasten.
recover: Aus jeder Taste nur ein Ton: Der Akkordmodus ist aus, [CHORD] dunkel. F klingt nach Moll: SCALE steht auf CHROMATIC, wo jeder Taste dieselbe Akkordart aufgestempelt wird — stell sie zurück auf AEOLIAN (MINOR). Mehrere Drums aus einer Taste: Spur 1 ist die aktive — [TRK] + [TRIG 3].
:::

## Step: Vier Akkorde, eingespielt
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red, CHORD: cyan }
source: manual §10.4, §8.5.1
mode: live-recording

Der Handgriff aus Schritt 6, auf Spur 3: Drücke [STOP], halte [RECORD] und drücke [PLAY], dann
halte [KEYBOARD A1], [KEYBOARD F1], [KEYBOARD C1] und [KEYBOARD G1], jede einen Takt lang vom ersten
Schlag an. [STOP], wenn der vierte Takt endet, dann [PLAY].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: a-Moll, F, C, G, ein Akkord pro Takt, über der Bassline.
recover: Ein zu kurzer Akkord wurde zu früh losgelassen: wie in Schritt 6 [RECORD] für GRID RECORDING, dann löscht [FUNC] + [PLAY] die Trigs von Spur 3, wieder [RECORD], und spiel die vier noch einmal — jeder Akkord dauert so lange, wie seine Taste gehalten wurde. Ein Takt Akkorde, der herumläuft, statt vier: Spur 3 ist noch 16 Schritte lang — LENGTH 64 wie in Schritt 8, löschen und noch einmal spielen. Seine Töne stehen als einfache Töne auf dem Trig, also bleibt, was du hörst.
:::

## Step: Akkordmodus aus
keys: [FUNC, CHORD, TRK, TRIG 1, KEYBOARD C1]
source: community https://www.elektronauts.com/t/tonverk-tips-tricks/238162/334
mode: playback

Halte [FUNC] gedrückt und drücke [CHORD]: [CHORD] wird dunkel. Der Akkordmodus ist ein Schalter
für das ganze Pattern, das Kit eingeschlossen — bleibt er an, feuert eine Taste des Kits mehrere
seiner Sounds auf einmal. Die vier Akkorde bleiben: Sie sind jetzt Töne auf den Trigs. Halte [TRK],
drücke [TRIG 1] und drücke [KEYBOARD C1].

:::checkpoint
hear: Die Kick allein aus [KEYBOARD C1], und die Akkorde spielen auf Spur 3 weiter.
recover: Die Kick kommt mit anderen Drums: [CHORD] leuchtet noch — halte [FUNC] und drücke [CHORD].
:::

## Step: Eine andere Tonart, und zurück
keys: [PTN, +, -]
source: manual §10.10.8
mode: playback

Halte [PTN], drücke dreimal [+] und lass [PTN] los: Bassline und Akkorde rücken drei Halbtöne
nach oben, nach c-Moll (§10.10.8), und das Kit bleibt, wo es war. Hör ein paar Takte zu. Dann
halte [PTN], drücke dreimal [-] und lass los: zu Hause, in a-Moll. Die Töne auf den Trigs haben
sich nie geändert; die Transposition liegt oben auf ihnen.

:::note
Besitzer haben es auf OS 1.4.0 getestet: Eine Spur mit der Subtracks-Maschine wird nicht
transponiert ([der Test](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824/107)).
:::

:::checkpoint
hear: Die Harmonie höher und heller, die Drums unverändert; dann das Stück wie vorher.
recover: Die Drums sind mitgewandert: Spur 1 läuft nicht auf der Subtracks-Maschine. Nach dreimal [-] immer noch höher: Miss, was du hörst, an A — drei Halbtöne unter C ist A.
:::

## Step: Speichern
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Halte [FUNC] gedrückt und drücke [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: A01, wie es jetzt ist: der Beat, die Bassline, vier Akkorde.
recover: Kein Bildschirm hat gemeldet, dass das Projekt geschrieben wurde: [FUNC] war nicht unten, als [SETTINGS] gedrückt wurde. Drück beide noch einmal zusammen.
:::

## What you now have

Spur 2 spielt eine Bassline, die nie Ton für Ton geschrieben wurde: vier Grundtöne, einer pro
Takt, und eine Figur aus acht Schritten, die der Arpeggiator auf jedem baut. Spur 3 spielt a-Moll,
F, C und G, vier Akkorde aus vier Tasten. Das Kit läuft weiter jeden Takt herum unter vier Takten
Harmonie, das Pattern steht wieder in a-Moll, und alles ist gespeichert.

## Explore further

### Ein Bass, der gleitet
Stell auf derselben TRACK-SETUP-Seite PLAY MODE auf MONO LEG und PORTAMENTO auf MONO LEG (§11.1.1,
§11.1.5), dann schalte PORT auf TRIG PAGE 2 ein und gib ihm eine kurze PTIM (§12.3). Zwei Töne gleiten ineinander, wenn der erste
über den Beginn des zweiten hinaus dauert; Töne mit einer Lücke dazwischen setzen weiter sauber
ein.

### Würfel für den Arp
Merk dir zuerst das Pattern: halte [FUNC] und drücke [KEYBOARD D#1] (§10.10.6). Im
ARPEGGIATOR-Menü würfelt [ARP] + [YES] alle Einstellungen auf einmal, und [E] gedrückt mit [YES]
würfelt nur die Versätze (§9.4). Behalte einen Wurf, der dir gefällt, oder halte [FUNC] und drücke
[KEYBOARD C#1], um zurückzugehen.

### Ein geschlagener Akkord
In STEP EDIT behält jeder Ton eines Akkords sein eigenes Micro Timing: Schieb die oberen Töne ein
wenig später als den tiefsten, und der Akkord rollt von unten herein, statt als Block zu landen
([hier gezeigt](https://www.youtube.com/watch?v=lrcaoGwYL00&t=2400)).

### Eine andere Lage
Der Akkordmodus spielt jeden Akkord von seinem Grundton aufwärts. [STEP EDIT] auf dem Trig eines
Akkords zeigt seine Töne auf der Tastatur: Eine leuchtende Taste gedrückt nimmt diesen Ton weg,
eine dunkle gedrückt fügt ihn hinzu, und [+] und [-] erreichen die Oktave darüber oder darunter
(§10.3.1).

### Das Kit mit Akkordmodus
Schalte den Akkordmodus wieder ein, wähle Spur 1 und drück eine Taste des Kits: Mehrere seiner
Sounds feuern aus der einen Taste. Wieder [FUNC] + [CHORD], dann speichern.

## Next

Session 7 folgt dem Klang aus den Spuren hinaus: die Drums durch einen Bus mit einem Kompressor,
die Akkorde in einen Hall, und das ROUTING-Menü, das sie verbindet.
