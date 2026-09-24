---
number: 2
chapter: rhythm
slug: first-beat
title: Der erste Beat
goal: Einen eintaktigen Beat auf den Sounds des Kits im GRID RECORDING schreiben, einen Sound stummschalten, das Pattern kopieren und speichern.
needs: ["Das Projekt SIXTEEN aus Session 1 (oder irgendein Projekt mit einem Drum-Kit auf Spur 1 — Schritt 1 sagt, wie)", Angeschlossene Kopfhörer, "Etwa sechzehn Minuten"]
teaches: [grid-recording, subtrack-select, page-length, mute, copy-paste-clear, undo, pattern-select]
simulator: null
ends: { keys16: { 1: red, 5: red, 9: red, 13: red } }
---

## Step: Wo du stehst
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES]
source: manual §9.1.1
mode: menu:FILE

Ist SIXTEEN nicht das Projekt auf dem Display, lade es: [FUNC] + [PRESET] öffnet das FILE-Menü,
dann mit [UP]/[DOWN] durch PROJECT, LOAD und dein Projekt, [YES]. Du fängst hier ohne Session 1
an? Du brauchst ein Projekt, das du bearbeiten kannst, mit einem Drum-Kit auf Spur 1 — Session 1,
Schritte 3 bis 6, dauert fünf Minuten.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Drücke [TRIG 1]: die Kick aus Session 1.
recover: Hast du seither experimentiert und willst den gespeicherten Stand zurück, markiere dein Projekt in der LOAD-Liste und drücke [RIGHT] für PROJECT ACTIONS, dann RELOAD. Das ist der letzte Speicherstand. Spielen [TRIG 2], [TRIG 3] oder [TRIG 4] eigene Drums, hat ein früherer Durchgang den Beat über vier Spuren verteilt: bei ausgeschaltetem GRID RECORDING löschen [FUNC] + [PLAY] und [YES] die Trigs von A01 (§10.10.4), und die Schritte unten schreiben ihn neu auf Spur 1.
:::

:::note
Ein Projekt zu laden ersetzt das, in dem du bist (§9.1.1). War das Gerät seit Session 1 an und
hast du gespielt, speichere, bevor du irgendetwas lädst — der Arbeitszustand, den du gleich
aufgibst, wird nicht von allein in dein Projekt zurückgeschrieben.
:::

## Step: Einen Sound still wählen
keys: [TRK, KEYBOARD D1, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1]
leds: { KEYBOARD C1: red }
source: manual §A.2.3
mode: any

Halte [TRK] und drücke [KEYBOARD D1]. Die Snare ist jetzt der gewählte Sound, und nichts hat
gespielt: dieselbe stille Auswahl, die [TRK] den Trig-Tasten für Spuren gibt, hier für die
Sounds eines Kits. Die Zahl auf dem Display sagt 2, und D1 ist die rote Taste. Mach dasselbe
mit [KEYBOARD A1], der geschlossenen Hi-Hat, und mit [KEYBOARD F1], dem Clap, und schließ mit
[KEYBOARD C1], der Kick. Diese vier sind der Beat.

:::checkpoint
hear: Nichts, solange [TRK] gehalten ist. Jeder Sound spielt nur, wenn du seine Taste allein drückst.
recover: Ein Sound, der gespielt hat, heißt, [TRK] war nicht zuerst unten — halte es, dann drücke. Mit einem anderen Kit liegen die Snare, die geschlossene Hi-Hat und die vierte Stimme dort, wo dein Ohr sie in Session 1 gefunden hat; nimm diese Tasten überall, wo der Kurs D1, A1 und F1 nennt.
:::

## Step: Ins GRID RECORDING
keys: [RECORD]
leds: { RECORD: red }
source: manual §10.3
mode: playback

Drücke [RECORD]. Die Taste leuchtet rot, und dieses Rot ist GRID RECORDING. Die sechzehn
Trig-Tasten stehen nicht mehr für Spuren. Sie stehen jetzt für die sechzehn Schritte eines
Takts, für den gewählten Sound der aktiven Spur.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", page: { n: 1, of: 1 } }
hear: Noch nichts; der Sequenzer läuft nicht.
recover: Zeigen die Trig-Tasten stattdessen Pattern-Plätze, bist du in der Pattern-Auswahl. Drücke [PTN] oder [NO], um sie zu verlassen, dann drücke [RECORD].
:::

:::note
Ins GRID RECORDING zu gehen startet nichts. [PLAY] startet den Sequenzer, und du kannst Trigs
schreiben, während er läuft oder während er steht — je nachdem, was dir leichter fällt.
:::

## Step: Die Kick auf die Zählzeiten
keys: [TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3, §10.2.1
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD C1], damit die Kick der Sound ist, den du schreibst. Dann
drücke [TRIG 1], [TRIG 5], [TRIG 9] und [TRIG 13]: eine Kick auf jeder Zählzeit. Jede der vier leuchtet rot — rot ist ein Noten-Trig.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Noch nichts.
recover: Eine Taste, die beim Drücken dunkel wurde, hatte schon einen Trig, und du hast ihn entfernt — ein kurzer Druck ist das Löschen (§10.3). Drücke sie noch einmal.
:::

## Step: Abspielen
keys: [PLAY, MAIN VOLUME]
leds: { RECORD: red }
source: manual §10.1.2
mode: grid-recording

Drücke [PLAY]. Vier Kicks pro Takt in deinem Tempo, und ein Licht, das über die sechzehn
Tasten läuft. Lass es laufen: alles ab hier wird geschrieben, während es spielt.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Eine Kick auf jeder Zählzeit, im Loop.
recover: Stille, während das Licht noch läuft, ist meistens eins von zwei Dingen: [MAIN VOLUME] zu niedrig, oder der Kopfhörerstecker nicht ganz drin. Bewegt sich das Licht gar nicht, hast du [PLAY] zweimal gedrückt — der zweite Druck pausiert (§10.1.2). Drücke es noch einmal.
:::

## Step: Die Snare auf zwei und vier
keys: [TRK, KEYBOARD D1, TRIG 5, TRIG 13]
leds: { RECORD: red, TRIG 5: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD D1]. Die sechzehn Tasten leeren sich: sie zeigen jetzt die
Schritte der Snare, und die Snare hat noch keine. Drücke [TRIG 5] und [TRIG 13].

:::checkpoint
keys16: { 5: red, 13: red }
hear: Kick, Snare, Kick, Snare.
recover: Leuchten die vier Tasten der Kick noch, hast du die Kick nie verlassen. Halte [TRK] — halten, nicht tippen — und drücke [KEYBOARD D1] noch einmal.
:::

## Step: Hi-Hats auf jedem zweiten Schritt
keys: [TRK, KEYBOARD A1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD A1], die geschlossene Hi-Hat. Jetzt drücke jede ungerade Taste von [TRIG 1] bis [TRIG 15]:
acht Hi-Hats, eine auf jeder Achtel. Lieber eine auf jedem Schritt? Drücke sie alle; das
Beispielstück bleibt bei acht.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Der Beat hat einen Puls, der zwischen den Drums läuft.
recover: Zu voll: drücke die Tasten, die dunkel werden sollen. Ein kurzer Druck entfernt; ein gehaltener Druck behält den Trig und öffnet ihn stattdessen zum Bearbeiten (§10.3).
:::

## Step: Die vierte Stimme, neben der Zählzeit
keys: [TRK, KEYBOARD F1, TRIG 7, TRIG 15]
leds: { RECORD: red, TRIG 7: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD F1], den Clap. Leg ihn auf [TRIG 7] und [TRIG 15]: das
„und“ vor den Zählzeiten drei und eins, wo es den Takt nach vorn schiebt. Irgendwo neben der
Snare ist gut, und ein anderer kurzer Sound des Kits an Stelle des Claps auch.

:::checkpoint
keys16: { 7: red, 15: red }
hear: Der Takt lehnt sich in den nächsten hinein.
recover: Landet er auf der Snare und verwischt sie, verschieb ihn: drücke die Taste zum Entfernen, drücke eine andere zum Hinzufügen.
:::

## Step: Einen Schlag korrigieren
keys: [TRIG 7, YES, LEFT, RIGHT]
leds: { RECORD: red }
source: manual §10.3, §19
mode: grid-recording

Such dir einen Schlag, bei dem du nicht sicher bist, etwa den Clap auf
Schritt 7. Halte [TRIG 7] und drücke [YES]: dieser eine Trig klingt, allein, mit allem, was
auf ihm eingestellt ist. Ein kurzer Druck auf [TRIG 7] entfernt ihn; drücke noch einmal, um
ihn zurückzusetzen.

:::checkpoint
hear: Der einzelne Schlag für sich, solange du die Taste hältst und [YES] drückst.
recover: Ein gehaltener Trig wird zum Bearbeiten geöffnet, nicht gelöscht, halten kostet dich also nichts. Ist ein MICRO-TIMING-Menü erschienen, hast du beim Halten [LEFT] oder [RIGHT] gestreift (§10.5); lass die Taste los und drücke [NO].
:::

## Step: Eine Seite, sechzehn Schritte
keys: [FUNC, PAGE, E, NO]
leds: { RECORD: red }
source: manual §10.9, §10.9.1
mode: menu:PAGE SETUP

Halte [FUNC] und drücke [PAGE]. LENGTH, auf DATA-ENTRY-Regler [E], steht auf 16 — eine Seite,
ein Takt, und genau das will diese Session. Die kleinen Quadrate oben auf dem Hauptdisplay
zählen die Seiten des Patterns; es ist eine. [NO] geht wieder zurück und lässt alles, wie es
war.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER PATTERN, "LENGTH 16", "SPEED 1"] }
hear: Unverändert.
recover: Hast du LENGTH aus Versehen bewegt, dreh Regler [E] vor [NO] auf 16 zurück. Ein längeres Pattern sind keine leeren Takte — die Schritte, die du schon hast, werden in die neuen Seiten vorkopiert (§10.9.1).
:::

:::note
Zwei Dinge hier beißen später. Dieses Menü setzt eine Länge für *jede* Spur, bis du
[FUNC] + [YES] drückst, was auf Längen pro Spur umschaltet. Und die Überschrift von §10.9 und
die Beschriftung auf dem Bedienfeld nennen dieses Menü PAGE SETUP, der Text von §10.9 nennt es
SCALE: es ist dasselbe Menü.
:::

## Step: Einen Sound stummschalten
keys: [MUTE, KEYBOARD D1, UP, DOWN]
leds: { KEYBOARD C1: green, KEYBOARD E1: green, KEYBOARD F1: green, KEYBOARD G1: green, KEYBOARD A1: green, KEYBOARD B1: green, KEYBOARD C2: green }
source: manual §8.6
mode: playback

Drücke [MUTE], während Spur 1 noch die aktive Spur ist — die Sounds des Kits werden nur für
die Spur angeboten, auf der du warst. Die Tasten der unteren Reihe leuchten für sie:
leuchtende spielen, dunkle sind stumm. Drücke [KEYBOARD D1], und die Snare fällt weg; drücke
sie noch einmal, und sie kommt zurück. Drücke [MUTE], um wieder herauszugehen. Grün ist
GLOBAL MUTE, das dir in jedes Pattern folgt und mit dem Projekt gespeichert wird;
[MUTE] + [DOWN] schaltet auf PATTERN MUTE um, magenta, das nur zu diesem Pattern gehört.
[MUTE] + [UP] geht zurück auf global.

:::checkpoint
hear: Der Beat ohne seine Snare, dann wieder mit ihr.
recover: Etwas stumm gelassen? [MUTE] selbst glimmt schwach, grün oder magenta, sobald irgendetwas stumm ist — und die Farbe sagt dir, in welchem Modus du suchen musst. Drücke sie und such die dunkle Taste. In diesem Modus sind die Trig-Tasten ganze Spuren: eine Trig-Taste würde das Kit stummschalten, alle Sounds auf einmal.
:::

:::note
§8.6 hat die ganze Regel für diese Farben. §7.4 in der Kurzanleitung gibt nur die Hälfte —
dunkel ist stumm, grün ist hörbar — und sagt nie, dass Grün zum globalen Modus gehört.
[Besitzer erschließen sich die beiden Modi im Vergleich mit anderen Elektron-Geräten](https://www.elektronauts.com/t/global-mute-mode/242420).
:::

## Step: Das Pattern nach A02 kopieren
keys: [RECORD, FUNC, PTN, TRIG 2, STOP]
leds: { TRIG 1: white, TRIG 2: red }
source: manual §6.6, §10.10.4, §10.1.1
mode: playback

Drücke [RECORD], um das GRID RECORDING zu verlassen — eine Pattern-Kopie läuft nicht, solange
es an ist. Halte [FUNC] und drücke [RECORD], dessen mintfarbene Beschriftung Copy sagt. Halte
[PTN] und drücke [TRIG 2]: A02 ist gewählt, und es startet, wenn A01 sein Ende erreicht. In
der Pattern-Auswahl ist eine weiße Taste ein Platz mit etwas darauf, und die rote Taste ist
die, die spielt. Jetzt halte [FUNC] und drücke [STOP], mintfarbene Beschriftung Paste. A02 ist
dein Beat, in Sicherheit vor den Änderungen, die in Session 3 kommen.

:::checkpoint
screen: { bank: "A02", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: white, 2: red }
hear: Derselbe Beat, jetzt von A02 gespielt.
recover: Kommt A02 still herum, ist das Einfügen vor dem Wechsel passiert. Warte, bis die Nummer von A02 oben links aufhört zu blinken — dieses Blinken ist das Pattern in der Warteschlange, nicht das Gerät, das dich ignoriert — dann noch einmal [FUNC] + [STOP].
:::

:::note
Um eine andere Bank zu erreichen, drücke [PTN], wähle die Bank auf der unteren
[KEYBOARD]-Reihe und drücke dann eine Trig-Taste für das Pattern (§10.1.1). Das Handbuch nennt
diese Reihe dreierlei — die untere [KEYBOARD]-Reihe, die [SUBTRACKS]-Tasten und [KEYBOARD C1]
als Taste für Bank A — und die Bedienfeld-Liste in §3.1, Punkt 21, druckt zwei davon in eine
Zeile: es ist eine Reihe von Tasten. Innerhalb der Bank, in der du bist, genügen [PTN] und eine
Trig-Taste.
:::

## Step: Löschen, und rückgängig
keys: [FUNC, PLAY, YES, NO]
leds: { TRIG 2: red }
source: manual §6.6, §10.10.4, §10.10.5
mode: playback

Halte [FUNC] und drücke [PLAY] — mintfarbene Beschriftung Clear — dann [YES] auf die Rückfrage.
Jeder Trig in A02 ist weg, und der nächste Loop ist Stille. Jetzt halte [FUNC] und drücke
[NO], mintfarbene Beschriftung Undo. Der Beat ist zurück. Mach das einmal mit Absicht.

:::checkpoint
hear: Ein Takt Stille, dann wieder der Beat.
recover: Tut Undo nichts, füge noch einmal ein — die Kopie liegt noch in der Zwischenablage. Undo erreicht ein Einfügen oder ein Löschen auf jeder Ebene, auf der der Sequenzer eines behält: ein ganzes Pattern, die Sequenz einer Spur, eine einzelne Seite, eine Seite Parameter, den Sound einer Spur. Das eine, was es nicht erreicht, ist ein gelöschtes Spur-Preset (§10.10.5): das ist weg.
:::

## Step: Zurück zu A01, und speichern
keys: [PTN, TRIG 1, FUNC, SETTINGS, RECORD, TRK, KEYBOARD C1]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.1.1, §9.1.1
mode: playback

Halte [PTN] und drücke [TRIG 1], um zu A01 zurückzukehren. Halte [FUNC] und drücke
[SETTINGS]: gespeichert, beide Patterns, keine Rückfrage. Dann drücke noch einmal [RECORD],
halte [TRK] und drücke [KEYBOARD C1], und sieh dir die Kick ein letztes Mal an — Schritte 1, 5, 9
und 13, rot.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Dein Beat, von A01.
recover: Das Speichern sagt nichts und zeigt keine NAMING-Ansicht; so sieht ein Speichern hier aus. Willst du sicher sein: in der Liste unter PROJECT, LOAD im FILE-Menü steht dein Name.
:::

## What you now have

SIXTEEN hat einen eintaktigen Beat auf A01 — Kick, Snare, geschlossene Hi-Hat und Clap, alle
aus dem Kit auf Spur 1 — und A02 hält eine Kopie davon. Die Spuren 2 bis 4 spielen nichts.
Beide Patterns sind gespeichert. Hör hier auf, oder spiel
weiter: alles, was du von jetzt an änderst, ist ungespeichert bis zum nächsten
[FUNC] + [SETTINGS].

## Explore further

### Eine zweite Seite
[FUNC] + [PAGE], dann LENGTH auf 32 hochdrehen. Das Pattern hat zwei Seiten, und die zweite
ist eine Kopie der ersten, keine leeren Takte (§10.9.1). Im GRID RECORDING blättert [PAGE]
zwischen ihnen, du kannst also einen Schlag nur auf Seite zwei ändern. Stell LENGTH vor
Session 3 auf 16 zurück, oder behalte es und wisse, dass die Kontrollpunkte von Session 3
eine Seite beschreiben.

### Die Trigs eines Sounds kopieren
Im GRID RECORDING — hier muss es *an* sein — hebt [FUNC] + [RECORD] die Trigs von dem Sound,
auf dem du bist; wähl mit [TRK] und seiner Taste der unteren Reihe einen anderen Sound, und
[FUNC] + [STOP] setzt sie dort ab (§10.10.4). Leg das Pattern der geschlossenen Hi-Hat auf den
Tom, [KEYBOARD B1], und hör, was es mit dem Takt macht; [FUNC] + [NO] nimmt es zurück. Dieselben zwei Tasten
bewegen bei ausgeschaltetem GRID RECORDING ein ganzes Pattern: der Modus entscheidet, worauf
sie wirken.

### Schnelles Stummschalten
[MUTE] + [TRIG 1] schaltet das ganze Kit stumm, ohne überhaupt in den Mute-Modus zu gehen, und
noch einmal hebt es die Stummschaltung auf (§8.6). Das ist das, was du lernen solltest, falls
du das je live spielst.

### Swing
Im [TEMPO]-Menü setzt Regler [D] SWING zwischen 50 und 80 Prozent, und 50 ist völlig gerade
(§7.5.1). Probier 58 mit laufenden Hi-Hats. Stell es vor dem Speichern auf 50 zurück, wenn du
das Feeling des Beispielstücks willst.

### Ein Pattern kopieren, ohne dieses zu verlassen
Drücke [PTN], dann halte eine Trig-Taste und drücke [RECORD], um dieses Pattern zu kopieren,
[STOP], um in es einzufügen, [PLAY], um es zu löschen — alles, ohne das Pattern zu verlassen,
das du spielst. Das ist
[neu in OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes), und es ist
eine andere Familie als die [FUNC]-Kombinationen oben, die immer dort wirken, wo du bist.

## Next

Session 3 macht das Kit zu deinem: ein Schritt quer durch alle acht Sounds, ein Sound
umgestimmt, ein eigenes Sample an Stelle des Claps. Deine Kopie A02 bleibt genau, wie sie ist.
Die Lektion über die Tastenfarben — Trig-Tasten als Spuren, als Schritte, als Pattern-Plätze,
und die untere Reihe als die Sounds des Kits — ist das, was du mitnehmen solltest.
