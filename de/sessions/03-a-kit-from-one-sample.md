---
number: 3
chapter: rhythm
slug: a-kit-from-one-sample
title: Ein Kit aus einem Sample
goal: Den ganzen Beat mit einem Subtracks-Kit auf eine Spur legen, die anderen drei freimachen und einen seiner Sounds gegen einen tauschen, den du selbst von der Karte wählst.
needs: ["Das Projekt aus Session 2 (SIXTEEN, oder dein eigener Name)", Angeschlossene Kopfhörer, Die Werks-SD-Karte im Schacht, "Etwa sechzehn Minuten"]
teaches: [subtracks, supertrack, machine-select, sample-browser, pool, track-clear, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Wo du stehst
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

Ist SIXTEEN nicht das Projekt auf dem Display, lade es: [FUNC] + [PRESET] öffnet das FILE-Menü,
dann mit [UP]/[DOWN] durch PROJECT, LOAD und dein Projekt, [YES]. Drücke [PLAY] und lass den
Beat laufen — diese Session baut ihn unter dir neu auf, während er spielt.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Der Beat aus Session 2 im Loop von A01: Kick, Snare, Hi-Hats und eine vierte Stimme, über vier Spuren.
recover: Hast du seither gespielt und willst den gespeicherten Stand zurück, markiere dein Projekt in der LOAD-Liste, drücke [RIGHT] für PROJECT ACTIONS und wähle RELOAD. Du fängst hier ohne Session 2 an? Diese Session schreibt den Beat, den diese hier auseinandernimmt, und sie dauert etwa sechzehn Minuten.
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
sagt, dass es passiert ist; die Karte hält jetzt den Vierspur-Beat von A01 und die Kopie in
A02. Alles ab dem nächsten Schritt schreibt Spur 1 um, und das hier ist der Stand, zu dem du
zurückkommen kannst.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Nichts — der Beat läuft weiter. Ein Speichern auf diesem Gerät ist still, und es unterbricht den Sequenzer nicht.
recover: Hat sich ein Menü mit Einstellungen geöffnet, war [FUNC] nicht zuerst unten. Drücke [NO], halte [FUNC], dann drücke [SETTINGS].
:::

## Step: Eine Subtracks-Machine auf Spur 1
keys: [TRK, TRIG 1, FUNC, SRC, UP, DOWN, KEYBOARD, YES]
source: community https://www.youtube.com/watch?v=QHRGueJ8FsI
mode: menu:MACHINE

Halte [TRK] und drücke [TRIG 1]. Halte [FUNC] und drücke [SRC]: das MACHINE-Menü öffnet sich
mit den Machines, die Spur 1 annehmen kann. Mit [UP]/[DOWN] zu SUBTRACKS und [YES] — und eine
zweite Liste fragt, welches Instrument geladen werden soll, ein leeres Kit an einem Ende und
die Werks-Kits daneben. Spiel die [KEYBOARD]-Tasten, um das markierte zu hören, bevor du dich
festlegst, dann drücke [YES] auf einem Werks-Drumkit, dessen acht Sounds dir gefallen.

:::checkpoint
screen: { menu: "MACHINE", items: [SINGLE PLAYER, MULTI PLAYER, SUBTRACKS, GRAINER, WAVEFINDER, MIDI], sel: 2 }
hear: Spur 1 feuert noch auf allen vier Zählzeiten, aber was sie feuert, ist das neue Kit: die Kick aus Session 1 ist mit der Machine gegangen.
recover: Eine Liste von Machines statt Instrumenten heißt, dass [YES] noch nicht auf SUBTRACKS gelandet ist. Ein Kit geladen, das dir nicht gefällt? [FUNC] + [SRC], wieder SUBTRACKS, und wähle ein anderes — das ist der Weg zurück, den das Handbuch selbst vorsieht (§5.3.1).
:::

:::note
„Leer“ ist eine Wahl, keine Stille: das leere Instrument gibt dir acht Subtracks, die auf
Samples warten, eins nach dem anderen über den Sample-Browser, und nichts füllt acht Plätze
aus einem Ordner in einem Durchgang —
[Besitzer haben darum gebeten](https://www.elektronauts.com/t/subtracks-use-cases/239235). Ein
Werks-Kit kommt voll an, und darum beginnt diese Session mit einem und tauscht in Schritt 10
einen einzelnen Sound. Die Kick geht so oder so: ein Preset sind die Einstellungen auf den
Seiten SRC, FLTR, AMP, FX und MOD (§5.3.2), und eine neue SRC-Machine schreibt sie um.
:::

## Step: Das Kit spielen
keys: [SUBTRACKS]
source: manual §3.1, §A.2.3
mode: any

Drücke die acht [SUBTRACKS]-Tasten eine nach der anderen: acht Sounds, einer pro Taste, und
das ist das Kit. Sie sind keine neue Reihe von Bedienelementen — sie sind die untere Reihe der
Tastatur, mit beiden Namen bedruckt, und tun jetzt, wo eine Subtracks-Machine auf der Spur
liegt, eine vierte Aufgabe.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Acht verschiedene Samples, eines pro Taste, über dem Beat, der immer noch läuft.
recover: Eine Taste, die keinen Ton macht, ist ein leerer Subtrack in dem Kit, das du gewählt hast, und kein Hindernis: diese Session nutzt vier der acht. Die Machine-Anzeige ist hier als SUBTRACKS gezeichnet; druckt dein Gerät sie anders, hat das Gerät recht. Das klärt dein Gerät.
:::

## Step: Die alten Trigs von Spur 1 löschen
keys: [STEP EDIT, FUNC, PLAY]
source: manual §10.10.4, §10.3.1
mode: step-edit

Drücke [STEP EDIT]. STEP EDIT ist Teil des GRID RECORDING (§10.3.1), rechne also damit, dass
[RECORD] leuchtet. Halte [FUNC] und drücke [PLAY]: das löscht mit einem Druck jeden Trig über
alle acht Subtracks und den Supertrack hinweg, und es ist das einzige Löschen, das das ganze
Kit erreicht (§10.10.4). Drücke [STEP EDIT] noch einmal, um wieder herauszugehen.

:::checkpoint
keys16: { }
hear: Das Kit wird still, und der Loop kommt leer herum; die Spuren 2, 3 und 4 spielen weiter.
recover: Ein Trig, der noch leuchtet, gehört zu einem Subtrack, den das Löschen nicht erreicht hat: wähle ihn mit [TRK] + [SUBTRACKS], drücke [RECORD] für GRID RECORDING und lösche diesen einen mit [FUNC] + [PLAY]. Im einfachen GRID RECORDING nimmt diese Kombination nur den gewählten Subtrack, und das ist es, [was Besitzer vorfinden, wenn sie ein Löschen der ganzen Spur erwarten](https://www.elektronauts.com/t/tonverk-user-thread/238631/2436).
:::

:::note
Dieses Löschen lässt sich rückgängig machen: [FUNC] + [NO] setzt die Trigs zurück (§10.10.5),
und Undo erreicht Einfügen und Löschen auf jeder Ebene, auf der der Sequenzer eines behält.
Das Löschen ohne Undo ist das eines Spur-Presets, und das ist [TRK] + [PLAY] — Weiter
erkunden, unten.
:::

## Step: Die Kick auf Subtrack 1
keys: [RECORD, TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Drücke [RECORD] für GRID RECORDING. Halte [TRK] und drücke [KEYBOARD C1], die erste
SUBTRACKS-Taste: das wählt Subtrack 1, ohne ihn erklingen zu lassen. Jetzt drücke [TRIG 1],
[TRIG 5], [TRIG 9] und [TRIG 13] — die Kick, auf denselben vier Zählzeiten wie in Session 2,
auf einem Subtrack statt auf einer Spur.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Wieder eine Kick auf jeder Zählzeit, und diesmal kommt sie ganz von Spur 1.
recover: Hat der Subtrack beim Auswählen geklungen, war [TRK] nicht gedrückt. Ist Subtrack 1 deines Kits keine Kick, drücke die [SUBTRACKS]-Tasten, bis du die findest, die eine ist, und nimm hier stattdessen diesen Subtrack; dem Rest der Session ist nur wichtig, dass du weißt, welcher Sound wo sitzt.
:::

## Step: Snare, geschlossene Hi-Hat, offene Hi-Hat
keys: [TRK, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

[TRK] + [KEYBOARD D1], die zweite SUBTRACKS-Taste, bringt dich zu Subtrack 2, und die Snare
kommt auf [TRIG 5] und [TRIG 13]. Die dritte Taste, [TRK] + [KEYBOARD E1], ist Subtrack 3, die
geschlossene Hi-Hat: jeder ungerade Schritt, von [TRIG 1] bis [TRIG 15]. Die vierte,
[TRK] + [KEYBOARD F1], ist Subtrack 4, die offene Hi-Hat, auf [TRIG 7] und [TRIG 15] — dann
noch einmal [TRK] + [KEYBOARD E1], damit die Reihe der geschlossenen Hi-Hat die auf den Tasten
ist.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Der Beat aus Session 2, vollständig, von einer Spur. Der Streifen ist Subtrack 3: die geschlossene Hi-Hat auf jedem ungeraden Schritt.
recover: Eine Reihe, die schon Trigs hat, die du nicht geschrieben hast, ist der Subtrack, den du gerade verlassen hast — halte [TRK], tipp es nicht nur an, und drücke die Taste des Subtracks noch einmal. Diese drei müssen keine Snare und zwei Hi-Hats sein: leg die besten Stimmen des Kits auf diese Schritte.
:::

## Step: Die Spuren 2 bis 4 freimachen
keys: [TRK, TRIG 2, TRIG 3, TRIG 4, FUNC, PLAY]
source: manual §10.10.4
mode: grid-recording

Immer noch im GRID RECORDING: halte [TRK] und drücke [TRIG 2], dann halte [FUNC] und drücke
[PLAY]. Die Trigs der Snare sind weg. Mach dasselbe auf [TRIG 3] und auf [TRIG 4] — drei
gewöhnliche Spuren, drei Löschvorgänge, und der ganze Beat kommt von Spur 1.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, type: "AUDIO" }
hear: Derselbe Beat wie vor einer Minute, ohne dass ihn etwas doppelt: die Spuren 2, 3 und 4 sind still.
recover: Eine zu viel gelöscht? [FUNC] + [NO] setzt die letzte zurück (§10.10.5). Leuchtet eine Reihe, die du gelöscht hast, noch, ist das Löschen auf der Spur gelandet, auf der du vorher warst — halte [TRK], während du wählst.
:::

:::note
Die Presets bleiben, wo sie sind. Dieses Löschen nimmt Trigs, keine Sounds: die Spuren 2 bis 4
halten noch die Snare und die Hi-Hats aus Session 2, und Session 6 lädt einen Bass und Akkorde
darüber. A02 hält noch die Vierspur-Fassung des Beats, und nichts überschreibt sie vor
Session 9.
:::

## Step: Ein Sample tauschen
keys: [TRK, TRIG 1, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Halte [TRK] und drücke [TRIG 1], um zum Kit zurückzukommen, dann [TRK] + [KEYBOARD F1], die
vierte SUBTRACKS-Taste, damit die offene Hi-Hat der Subtrack ist, auf dem du bist.
[FUNC] + [KEYBOARD F1] öffnet den Sample-Browser auf der SD-Karte, gerichtet auf diesen einen
Subtrack: [UP]/[DOWN] scrollt durch die Karte, [YES] öffnet einen Ordner, und [YES] auf einem
Sample lädt es in den Sample-Pool des Projekts und auf den Subtrack (§5.2.6), und [NO] geht
eine Ebene zurück nach oben. Such dir einen Sound für die offene Hi-Hat, der dir gefällt — von
den vier Stimmen ist es die, bei der das Stück am wenigsten wählerisch ist — dann
[FUNC] + [NO], um den Browser zu verlassen (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Dein eigenes Sample auf den Schritten 7 und 15, anstelle der offenen Hi-Hat des Kits, und der Rest des Beats unverändert.
recover: Fügt ein [YES] das Sample hinzu, aber der Subtrack spielt es nicht, will der Browser sein OPERATIONS-Menü: drücke [RIGHT], wähle LOAD SAMPLES und drücke [YES] (§6.13.1). Ob dieser Weg einen Druck braucht oder zwei, ist eine Frage an das Gerät — das Handbuch beschreibt beides, auf verschiedenen Seiten.
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
Punkte statt drei Rechtecke, ihr Aussehen ist auf deinem eigenen Gerät also einen zweiten
Blick wert.
:::

## Step: Speichern
keys: [FUNC, SETTINGS, TRK, KEYBOARD E1]
source: manual §9.1.1
mode: grid-recording

Halte [FUNC] und drücke [SETTINGS]: gespeichert, in Stille, wie jedes Speichern hier abläuft.
Dann halte [TRK] und drücke [KEYBOARD E1], die dritte SUBTRACKS-Taste, und sieh dir die
geschlossene Hi-Hat ein letztes Mal an — jeder ungerade Schritt rot. Dieses Bild ist das
Titelbild dieser Session.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Der ganze Beat von Spur 1 allein, gespeichert.
recover: Ein dunkler Streifen heißt, [RECORD] leuchtet nicht: drücke es für GRID RECORDING und sieh noch einmal hin. Das Speichern zeigt nichts und fragt nichts; willst du einen Beweis, steht der Name deines Projekts in der Liste unter PROJECT, LOAD im FILE-Menü.
:::

## What you now have

A01 spielt den ganzen Beat von Spur 1: ein Subtracks-Kit mit einer Kick auf Subtrack 1, einer
Snare auf 2, einer geschlossenen Hi-Hat auf 3 und, auf 4, einer offenen Hi-Hat, die du selbst
von der Karte gewählt hast. Die Spuren 2, 3 und 4 halten noch die Presets aus Session 2, aber
keine Trigs — frei für den Bass, die Akkorde und das Pad der Sessions 6 und 8 — und A02 behält
die Vierspur-Fassung des Beats, bis Session 9 den Platz braucht. All das ist gespeichert.

## Explore further

### STEP EDIT, ein Schritt nach dem anderen
Drücke in der Wiedergabe [STEP EDIT] und dann eine Trig-Taste: sie wird grün, und die Tastatur
fügt auf diesem einen Schritt Noten hinzu und entfernt sie (§10.3.1). Auf einer Subtracks-Spur
sieht man so einen einzelnen Schritt quer durchs Kit statt einen Subtrack quer durch den Takt.

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
