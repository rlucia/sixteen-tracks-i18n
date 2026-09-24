---
number: 3
chapter: rhythm
slug: the-kit-your-way
title: Das Kit, auf deine Art
goal: Einen Schritt quer durchs ganze Kit sehen, einen Sound umstimmen, einen anderen gegen ein Sample von der Karte tauschen und den Supertrack kennenlernen.
needs: ["Das Projekt aus Session 2 (SIXTEEN, oder dein eigener Name)", Angeschlossene Kopfhörer, Die Werks-SD-Karte im Schacht, "Etwa sechzehn Minuten"]
teaches: [step-edit, per-subtrack-sound, sample-browser, pool, supertrack, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Wo du stehst
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

Ist SIXTEEN nicht das Projekt auf dem Display, lade es: [FUNC] + [PRESET] öffnet das FILE-Menü,
dann mit [UP]/[DOWN] durch PROJECT, LOAD und dein Projekt, [YES]. Drücke [PLAY] und lass den
Beat laufen — alles in dieser Session passiert, während er spielt.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Der Beat aus Session 2 im Loop von A01: Kick, Snare, geschlossene Hi-Hat und Clap, alle aus dem Kit auf Spur 1.
recover: Hast du seither gespielt und willst den gespeicherten Stand zurück, markiere dein Projekt in der LOAD-Liste, drücke [RIGHT] für PROJECT ACTIONS und wähle RELOAD. Spielen [TRIG 2], [TRIG 3] oder [TRIG 4] eigene Sounds, ist dein Beat über vier Spuren verteilt: Session 2 baut ihn auf einer einzigen, und ihr erster Schritt löscht den alten. Du fängst hier ohne Session 2 an? Diese Session schreibt den Beat, an dem diese hier arbeitet, und sie dauert etwa sechzehn Minuten.
:::

## Step: Drei Leben einer Trig-Taste
keys: [TRK, PTN, RECORD]
leds: { TRIG 1: white, RECORD: red }
source: manual §5.3.7, §10.1.1, §10.2.1
mode: playback

Halte bei laufendem Beat [TRK]: die sechzehn Tasten sind die sechzehn Spuren, und die weiße ist
die Spur, auf der du bist (§5.3.7). Halte stattdessen [PTN], und dieselben Tasten sind
Pattern-Plätze — weiß, wo ein Pattern liegt, rot für das, das spielt, also A01 mit deiner Kopie
A02 daneben (§10.1.1). Leuchtet [RECORD] noch aus Session 2, drücke es einmal, um es erst
auszuschalten. Drücke [RECORD], und sie sind die sechzehn Schritte eines Takts auf der aktiven
Spur, rot, wo ein Noten-Trig sitzt (§10.2.1); drücke es noch einmal, um wieder herauszukommen.
Drei Aufgaben, eine Reihe Tasten, und die Farbe ist das Einzige, was sagt, welche: die
[Seite über Tastenfarben](/key-colours/) hält die ganze Liste.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Der Beat läuft durch alle drei durch. Nichts, was du gedrückt hast, hat einen Sound verändert.
recover: Hat dein erster Druck auf [RECORD] sein Licht aus- statt eingeschaltet, hat Session 2 das GRID RECORDING angelassen; drücke es noch einmal. Der Streifen oben ist das dritte Leben — die Kick von Spur 1, auf den vier Zählzeiten, die du in Session 2 geschrieben hast.
:::

## Step: Erst speichern
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Halte [FUNC] und drücke [SETTINGS]. Nichts fragt dich irgendetwas, und nichts auf dem Display
sagt, dass es passiert ist; die Karte hält jetzt den Beat von A01 und die Kopie in A02. Alles
ab dem nächsten Schritt verändert das Kit, und das hier ist der Stand, zu dem du zurückkommen
kannst.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Nichts — der Beat läuft weiter. Ein Speichern auf diesem Gerät ist still, und es unterbricht den Sequenzer nicht.
recover: Hat sich ein Menü mit Einstellungen geöffnet, war [FUNC] nicht zuerst unten. Drücke [NO], halte [FUNC], dann drücke [SETTINGS].
:::

## Step: Ein Schritt, das ganze Kit
keys: [STEP EDIT, TRIG 1, TRIG 7, KEYBOARD F1]
leds: { TRIG 1: green }
source: manual §10.3.1
mode: step-edit

Drücke [STEP EDIT], dann [TRIG 1]. Die Taste wird grün, und die untere Reihe zeigt jetzt die
Sounds, die auf Schritt 1 spielen: die Kick und die geschlossene Hi-Hat. Drücke [TRIG 7], und
die Reihe zeigt die geschlossene Hi-Hat und den Clap. Session 2 hat den Beat einen Sound quer
durch den Takt geschrieben; das hier ist der umgekehrte Weg, ein Schritt quer durchs Kit.
Drücke [KEYBOARD F1], solange Schritt 7 grün ist, und der Clap verlässt diesen Schritt; drück
sie noch einmal, und er ist zurück. Drücke [STEP EDIT] noch einmal, um herauszugehen.

:::checkpoint
hear: Der Beat, wie er war, sobald du zurückgesetzt hast, was du herausgenommen hast.
recover: STEP EDIT gehört zum GRID RECORDING (§10.3.1), also leuchtet [RECORD] mit. Eine schwach leuchtende Taste auf der unteren Reihe ist der Sound, den du gewählt hast, nicht einer, der auf dem Schritt spielt — [davor warnt Elektrons eigenes Tutorial](https://www.youtube.com/watch?v=ijPa_vgY8QA).
:::

## Step: Einen Sound umstimmen
keys: [TRK, KEYBOARD D1, SRC, A]
source: manual §A.2.3
mode: any

Halte [TRK] und drücke [KEYBOARD D1]: die Snare ist der gewählte Sound. Drücke [SRC] für ihre
Quellseite und dreh DATA-ENTRY-Regler [A], TUNE, ein paar Schritte nach unten; drückst du ihn
beim Drehen hinein, bewegt er sich in Halbtönen. Nur die Snare bewegt sich. Jeder der acht
Sounds behält seine eigenen Seiten SRC, FLTR, AMP und MOD, und gemeinsam haben sie die Effekte
des Kits, die der Supertrack hält — zwei Schritte weiter.

:::checkpoint
hear: Eine tiefere Snare im selben Beat; die Kick, die Hi-Hats und der Clap wie vorher.
recover: Hat sich ein anderer Sound bewegt, war die rote Taste woanders, als du gedreht hast: halte [TRK], drücke [KEYBOARD D1] und dreh noch einmal. Um zurückzukommen, lies TUNE vor dem Drehen ab und stell es wieder auf diesen Wert.
:::

## Step: Ein Sample tauschen
keys: [TRK, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Halte [TRK] und drücke [KEYBOARD F1], die
vierte SUBTRACKS-Taste, damit der Clap der Sound ist, auf dem du bist. [FUNC] + [KEYBOARD F1]
öffnet den Sample-Browser auf der SD-Karte, gerichtet auf diesen einen Subtrack: [UP]/[DOWN]
scrollt durch die Karte, [YES] öffnet einen Ordner, und [YES] auf einem Sample lädt es in den
Sample-Pool des Projekts und auf den Subtrack (§5.2.6), und [NO] geht eine Ebene zurück nach
oben. Such dir anstelle des Claps einen kurzen Sound, der dir gefällt, dann [FUNC] + [NO], um den
Browser zu verlassen (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Dein eigenes Sample auf den Schritten 7 und 15, anstelle des Claps des Kits, und der Rest des Beats unverändert.
recover: Fügt ein [YES] das Sample hinzu, aber der Subtrack spielt es nicht, will der Browser sein OPERATIONS-Menü: drücke [RIGHT], wähle LOAD SAMPLES und drücke [YES] (§6.13.1).
:::

:::note
Es gibt keine Ansicht namens Sample-Pool. Der Pool ist der Name des Handbuchs für das, was das
Projekt in den RAM geladen hat, und du siehst ihn über SAMPLE BANKS in ebendiesem Browser
(§6.13.2); der Browser zeigt, was er gekostet hat, in Megabyte und als Prozentsatz des RAM
(§6.13). Frag im Forum nach „dem Sample-Pool“, und
[du wirst weitergeschickt](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/965).
:::

## Step: Der Supertrack, einmal gesehen
keys: [TRK, TRIG 1, KEYBOARD C1]
source: manual §A.2.3
mode: any

Halte [TRK] und drücke [TRIG 1] zweimal: einmal wählt Spur 1, noch einmal wählt ihren
Supertrack, und drei kleine weiße Rechtecke erscheinen über der Spurnummer. Der Supertrack ist
kein neunter Sound — er ist der Ort, an dem die gemeinsamen Einstellungen der acht Subtracks
leben: die FX-Seiten, die zwei FX-LFOs und, wie Besitzer feststellen, mit ihnen die Send-Pegel.
Halte [TRK] und drücke [KEYBOARD C1], die erste SUBTRACKS-Taste, um wieder herauszukommen.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", super: true }
hear: Nichts Neues. Der Supertrack hat keine eigene Stimme, und der Beat läuft darunter weiter.
recover: Keine Rechtecke über der Spurnummer heißt, der zweite Druck hat eine andere Spur gewählt — halte [TRK] gedrückt und drücke [TRIG 1] zweimal, ohne loszulassen.
:::

:::note
Ein Lock, der hier gesetzt wird, bewegt alle acht Subtracks auf einmal, was
[tonalem oder texturalem Material eher liegt als einem Drumkit](https://www.youtube.com/watch?v=QHRGueJ8FsI);
[die Send-Pegel sind hier ebenfalls gemeinsam](https://www.elektronauts.com/t/tonverk-subtrack-drum-strategies/243084),
statt pro Subtrack gesetzt, und darum läuft das Mischen eines Kits Stimme für Stimme über den
Supertrack. Elektrons Präsentator in diesem Video nennt die Markierung auf dem Display drei
Punkte statt drei Rechtecke.
:::

## Step: Speichern
keys: [FUNC, SETTINGS, RECORD, TRK, KEYBOARD A1]
source: manual §9.1.1
mode: grid-recording

Halte [FUNC] und drücke [SETTINGS]: gespeichert, in Stille, wie jedes Speichern hier abläuft.
Dann drücke [RECORD], falls es dunkel ist, halte [TRK] und drücke [KEYBOARD A1], die Taste der
geschlossenen Hi-Hat, und sieh sie dir ein letztes Mal an — jeder ungerade Schritt rot.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Der ganze Beat von Spur 1, mit einer tieferen Snare und einem eigenen Sound anstelle des Claps, gespeichert.
recover: Ein dunkler Streifen heißt, [RECORD] leuchtet nicht: drücke es für GRID RECORDING und sieh noch einmal hin. Das Speichern zeigt nichts und fragt nichts; willst du einen Beweis, steht der Name deines Projekts in der Liste unter PROJECT, LOAD im FILE-Menü.
:::

## What you now have

A01 spielt den Beat von Spur 1 auf HELLO KIT: die Kick auf [KEYBOARD C1], eine Snare auf
[KEYBOARD D1], tiefer gestimmt als die des Kits, die geschlossene Hi-Hat auf [KEYBOARD A1] und,
auf [KEYBOARD F1], einen Sound, den du selbst von der Karte gewählt hast. Die Spuren 2, 3 und 4
sind leer, frei für den Bass, die Akkorde und das Pad der Sessions 6 und 8, und A02 behält die
Kopie des Beats aus Session 2, bis Session 9 den Platz braucht. All das ist gespeichert.

## Explore further

### Mit einem leeren Kit beginnen
Halte [TRK] und drücke [TRIG 2], dann [FUNC] + [SRC]: das MACHINE-Menü. Wähle SUBTRACKS, und
eine zweite Liste fragt, welches Instrument geladen werden soll — ein leeres Kit an einem Ende,
die Werks-Instrumentsets daneben, und hier spielt die [KEYBOARD] das markierte vor, bevor du
dich festlegst. Das leere Kit sind acht Subtracks, die auf Samples warten, einer nach dem
anderen über den Sample-Browser gefüllt, und nichts füllt acht Plätze in einem Durchgang aus
einem Ordner —
[Besitzer haben darum gebeten](https://www.elektronauts.com/t/subtracks-use-cases/239235).
Mach das auf Spur 2, nicht auf deinem Beat: eine neue Machine schreibt die Einstellungen der
Spur um (§5.3.2).

### Alle acht Subtracks auf einmal kopieren
Im STEP EDIT kopiert [FUNC] + [RECORD] jeden Trig auf den acht Subtracks und dem Supertrack
zusammen, und [FUNC] + [STOP] fügt sie auf einer anderen Spur ein, auf der eine
Subtracks-Machine läuft (§10.10.4). Dieselben zwei Tasten im einfachen GRID RECORDING bewegen
einen Subtrack.

### Das Löschen ohne Undo
[TRK] + [PLAY] setzt die Preset-Parameter einer Spur zurück, was etwas anderes ist, als ihre
Trigs zu löschen — und es ist die eine Operation, die das Undo des Sequenzers nicht erreicht
(§10.10.5). [FUNC] + [NO] bringt ein Preset nicht zurück, probier es also auf einer Spur, die
du verlieren kannst.

### Der Pool, im Ganzen
[FUNC] + [SAMPLING] öffnet denselben Sample-Browser von oben. Wähle SAMPLE BANKS für jedes
Sample, das dieses Projekt geladen hat, mit SELECT UNUSED und UNLOAD, um die auszumisten, die
kein Pattern spielt (§6.13.2).

## Next

Session 4 behält dieses Kit und bringt es in Bewegung: Ghost Notes, ein Filter-Lock auf einer
Hi-Hat, ein Snare-Roll und ein Part, live eingespielt und dann quantisiert. Nichts Neues wird
geladen — all das kommt aus den acht Sounds, die du schon hast.
