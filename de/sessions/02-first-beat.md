---
number: 2
chapter: rhythm
slug: first-beat
title: Der erste Beat
goal: Drums auf die Spuren 1 bis 4 legen, einen eintaktigen Beat im GRID RECORDING schreiben, stummschalten und wieder freigeben, das Pattern kopieren und speichern.
needs: ["Das Projekt SIXTEEN aus Session 1 (oder irgendein Projekt mit einer Kick auf Spur 1 — Schritt 1 sagt, wie)", Angeschlossene Kopfhörer, Werks-Drum-Presets auf der SD-Karte, "Etwa sechzehn Minuten"]
teaches: [grid-recording, track-select, page-length, mute, copy-paste-clear, undo, pattern-select]
simulator: null
ends: { keys16: { 1: red, 5: red, 9: red, 13: red } }
---

## Step: Wo du stehst
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES]
source: manual §9.1.1
mode: menu:FILE

Ist SIXTEEN nicht das Projekt auf dem Display, lade es: [FUNC] + [PRESET] öffnet das FILE-Menü,
dann mit [UP]/[DOWN] durch PROJECT, LOAD und dein Projekt, [YES]. Du fängst hier ohne Session 1
an? Du brauchst ein Projekt, das du bearbeiten kannst, mit einer Kick auf Spur 1 — Session 1,
Schritte 3 bis 5, dauert vier Minuten.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Drücke [TRIG 1]: die Kick aus Session 1.
recover: Hast du seither experimentiert und willst den gespeicherten Stand zurück, markiere dein Projekt in der LOAD-Liste und drücke [RIGHT] für PROJECT ACTIONS, dann RELOAD. Das ist der letzte Speicherstand.
:::

:::note
Ein Projekt zu laden ersetzt das, in dem du bist (§9.1.1). War das Gerät seit Session 1 an und
hast du gespielt, speichere, bevor du irgendetwas lädst — der Arbeitszustand, den du gleich
aufgibst, wird nicht von allein in dein Projekt zurückgeschrieben.
:::

## Step: Eine Snare auf Spur 2
keys: [TRK, TRIG 2, PRESET, LEFT, RIGHT, UP, DOWN, YES]
leds: { TRIG 2: white }
source: manual §5.3.7, §7.1
mode: menu:LOAD PRESET

Halte [TRK] und drücke [TRIG 2]. Drücke [PRESET]; bist du nicht in DRUMS, bringen dich
[LEFT]/[RIGHT] zurück. Mit [UP]/[DOWN] zu einer Snare — jedes Preset, das so heißt — und
drücke [YES].

:::checkpoint
keys16: { 2: white }
hear: [TRIG 2] spielt die Snare; [TRIG 1] spielt weiterhin die Kick.
recover: Spielt [TRIG 2] die Kick, ist das Preset auf Spur 1 gelandet: das Preset geht immer auf die Spur, die aktiv war, als du [YES] gedrückt hast. Halte erst [TRK] und drücke [TRIG 2], dann lade noch einmal.
:::

## Step: Eine geschlossene Hi-Hat auf Spur 3
keys: [TRK, TRIG 3, PRESET, UP, DOWN, YES]
leds: { TRIG 3: white }
source: manual §5.3.7, §7.1
mode: menu:LOAD PRESET

Halte [TRK] und drücke [TRIG 3]. Dann [PRESET], mit [UP]/[DOWN] zu einer geschlossenen Hi-Hat,
[YES].

:::checkpoint
keys16: { 3: white }
hear: [TRIG 3] spielt die Hi-Hat.
recover: Dieselbe Regel wie bei der Snare: die aktive Spur entscheidet, wo ein Preset landet.
:::

## Step: Eine vierte Stimme auf Spur 4
keys: [TRK, TRIG 4, PRESET, UP, DOWN, YES]
leds: { TRIG 4: white }
source: manual §5.3.7, §7.1
mode: menu:LOAD PRESET

Halte [TRK] und drücke [TRIG 4]. Das Beispielstück nimmt hier eine offene Hi-Hat; ein Clap
oder ein Percussion-Schlag tut es genauso, und der Beat landet trotzdem dort, wo die
Kontrollpunkte es sagen. Lade sie: [PRESET], mit [UP]/[DOWN] hin, [YES].

:::checkpoint
keys16: { 4: white }
hear: Vier verschiedene Sounds auf [TRIG 1] bis [TRIG 4].
recover: Lade ein anderes Preset darüber. Nur die Kopie des Patterns ändert sich, und die Karte hält jedes Preset, an dem du vorbeigekommen bist.
:::

## Step: Ins GRID RECORDING
keys: [RECORD]
leds: { RECORD: red }
source: manual §10.3
mode: playback

Drücke [RECORD]. Die Taste leuchtet rot, und dieses Rot ist GRID RECORDING. Die sechzehn
Trig-Tasten stehen nicht mehr für Spuren. Sie stehen jetzt für die sechzehn Schritte eines
Takts, auf der aktiven Spur.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, type: "AUDIO", page: { n: 1, of: 1 } }
hear: Noch nichts; der Sequenzer läuft nicht.
recover: Zeigen die Trig-Tasten stattdessen Pattern-Plätze, bist du in der Pattern-Auswahl. Drücke [PTN] oder [NO], um sie zu verlassen, dann drücke [RECORD].
:::

:::note
Ins GRID RECORDING zu gehen startet nichts. [PLAY] startet den Sequenzer, und du kannst Trigs
schreiben, während er läuft oder während er steht — je nachdem, was dir leichter fällt.
:::

## Step: Die Kick auf die Zählzeiten
keys: [TRK, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3, §10.2.1
mode: grid-recording

Halte [TRK] und drücke [TRIG 1], damit die Spur der Kick die ist, auf der du schreibst; ihre
Taste wird weiß. Dann drücke [TRIG 1], [TRIG 5], [TRIG 9] und [TRIG 13]: eine Kick auf jeder
Zählzeit. Jede der vier leuchtet rot — rot ist ein Noten-Trig.

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
keys: [TRK, TRIG 2, TRIG 5, TRIG 13]
leds: { RECORD: red, TRIG 5: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Halte [TRK] und drücke [TRIG 2]. Die sechzehn Tasten leeren sich: sie zeigen jetzt Spur 2, und
auf Spur 2 liegt nichts. Drücke [TRIG 5] und [TRIG 13].

:::checkpoint
keys16: { 5: red, 13: red }
hear: Kick, Snare, Kick, Snare.
recover: Leuchten die vier Tasten der Kick noch, hast du Spur 1 nie verlassen. Halte [TRK] — halten, nicht tippen — und drücke [TRIG 2] noch einmal.
:::

## Step: Hi-Hats auf jedem zweiten Schritt
keys: [TRK, TRIG 3, TRIG 1, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Halte [TRK] und drücke [TRIG 3]. Jetzt drücke jede ungerade Taste von [TRIG 1] bis [TRIG 15]:
acht Hi-Hats, eine auf jeder Achtel. Lieber eine auf jedem Schritt? Drücke sie alle — das
Beispielstück bleibt bei acht, und den Kontrollpunkten ab hier ist egal, was du gewählt hast.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Der Beat hat einen Puls, der zwischen den Drums läuft.
recover: Zu voll: drücke die Tasten, die dunkel werden sollen. Ein kurzer Druck entfernt; ein gehaltener Druck behält den Trig und öffnet ihn stattdessen zum Bearbeiten (§10.3).
:::

## Step: Die vierte Stimme, neben der Zählzeit
keys: [TRK, TRIG 4, TRIG 7, TRIG 15]
leds: { RECORD: red, TRIG 7: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Halte [TRK] und drücke [TRIG 4]. Leg die offene Hi-Hat — oder deinen Clap — auf [TRIG 7] und
[TRIG 15]: das „und“ vor den Zählzeiten drei und eins, wo es den Takt nach vorn schiebt.
Irgendwo neben der Snare ist gut.

:::checkpoint
keys16: { 7: red, 15: red }
hear: Der Takt lehnt sich in den nächsten hinein.
recover: Landet sie auf der Snare und verwischt sie, verschieb sie: drücke die Taste zum Entfernen, drücke eine andere zum Hinzufügen.
:::

## Step: Einen Schlag korrigieren
keys: [TRIG 7, YES, LEFT, RIGHT]
leds: { RECORD: red }
source: manual §10.3, §19
mode: grid-recording

Such dir einen Schlag, bei dem du nicht sicher bist — der Kurs nimmt die offene Hi-Hat auf
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
[FUNC] + [YES] drückst, was auf Längen pro Spur umschaltet. Und das Handbuch kann sich nicht
entscheiden, wie dieses Menü heißt — die Überschrift von §10.9 und die Beschriftung auf dem
Bedienfeld sagen PAGE SETUP, der Text von §10.9 selbst sagt SCALE. Es ist dasselbe Menü.
:::

## Step: Eine Spur stummschalten
keys: [MUTE, TRIG 2, UP, DOWN]
leds: { TRIG 1: green, TRIG 3: green, TRIG 4: green }
source: manual §8.6
mode: playback

Drücke [MUTE]. Die Trig-Tasten sind wieder Spuren: leuchtende spielen, dunkle sind stumm.
Drücke [TRIG 2], und die Snare fällt weg; drücke sie noch einmal, und sie kommt zurück. Drücke
[MUTE], um wieder herauszugehen. Grün ist GLOBAL MUTE, das dir in jedes Pattern folgt und mit
dem Projekt gespeichert wird; [MUTE] + [DOWN] schaltet auf PATTERN MUTE um, magenta, das nur
zu diesem Pattern gehört. [MUTE] + [UP] geht zurück auf global.

:::checkpoint
keys16: { 1: green, 3: green, 4: green }
hear: Der Beat ohne seine Snare, dann wieder mit ihr.
recover: Etwas stumm gelassen? [MUTE] selbst glimmt schwach, grün oder magenta, sobald irgendetwas stumm ist — und die Farbe sagt dir, in welchem Modus du suchen musst. Drücke sie und such die dunkle Taste.
:::

:::note
Halte dich bei diesen Farben an §8.6, nicht an die Kurzanleitung. §7.4 gibt eine Regel —
dunkel ist stumm, grün ist hörbar — und erwähnt nie, dass Grün nur für den globalen Modus gilt,
wer es also dort lernt, hat eine halbe Regel.
[Besitzer erschließen sich die beiden Modi im Vergleich mit anderen Elektron-Geräten](https://www.elektronauts.com/t/global-mute-mode/242420),
und so geht es, wenn ein Handbuch dieselbe Frage zweimal beantwortet.
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
screen: { bank: "A02", tempo: 92, track: 4, type: "AUDIO" }
keys16: { 1: white, 2: red }
hear: Derselbe Beat, jetzt von A02 gespielt.
recover: Kommt A02 still herum, ist das Einfügen vor dem Wechsel passiert. Warte, bis die Nummer von A02 oben links aufhört zu blinken — dieses Blinken ist das Pattern in der Warteschlange, nicht das Gerät, das dich ignoriert — dann noch einmal [FUNC] + [STOP].
:::

:::note
In Bank A zu bleiben ist die Wahl dieser Session, keine Mauer. Um eine andere Bank zu
erreichen, drückst du [PTN], wählst die Bank auf der unteren [KEYBOARD]-Reihe und drückst dann
eine Trig-Taste für das Pattern (§10.1.1). Diese Reihe hört in diesem Handbuch auf drei Namen
— untere [KEYBOARD]-Reihe, die [SUBTRACKS]-Tasten, die Taste mit der Aufschrift [KEYBOARD C1]
für Bank A — und die Bedienfeld-Liste in §3.1, Punkt 21, druckt zwei davon in eine Zeile, weil
es eine Reihe von Tasten ist. Innerhalb der Bank, in der du schon bist, ist [PTN] und eine
Trig-Taste die ganze Geste, und mehr braucht der heutige Tag nicht.
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
recover: Tut Undo nichts, füge noch einmal ein — die Kopie liegt noch in der Zwischenablage. Undo erreicht ein Einfügen oder ein Löschen auf jeder Ebene, auf der der Sequenzer eines behält: ein ganzes Pattern, die Sequenz einer Spur, eine einzelne Seite, eine Seite Parameter, den Sound einer Spur. Es hält bei genau einer Sache, und §10.10.5 sagt es unumwunden: lösche ein Spur-Preset, und es ist weg.
:::

## Step: Zurück zu A01, und speichern
keys: [PTN, TRIG 1, FUNC, SETTINGS, RECORD, TRK]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.1.1, §9.1.1
mode: playback

Halte [PTN] und drücke [TRIG 1], um zu A01 zurückzukehren. Halte [FUNC] und drücke
[SETTINGS]: gespeichert, beide Patterns, keine Rückfrage. Dann drücke noch einmal [RECORD],
halte [TRK] und drücke [TRIG 1], und sieh dir die Kick ein letztes Mal an — Schritte 1, 5, 9
und 13, rot. Dieses Bild ist das Titelbild dieser Session.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Dein Beat, von A01.
recover: Das Speichern sagt nichts und zeigt keine NAMING-Ansicht; so sieht ein Speichern hier aus. Willst du sicher sein: in der Liste unter PROJECT, LOAD im FILE-Menü steht dein Name.
:::

## What you now have

SIXTEEN hat einen eintaktigen Beat auf A01 — Kick, Snare, Hi-Hats und eine vierte Stimme über
vier Spuren — und A02 hält eine Kopie davon. Beide sind gespeichert. Hör hier auf, oder spiel
weiter: alles, was du von jetzt an änderst, ist ungespeichert bis zum nächsten
[FUNC] + [SETTINGS].

## Explore further

### Eine zweite Seite
[FUNC] + [PAGE], dann LENGTH auf 32 hochdrehen. Das Pattern hat zwei Seiten, und die zweite
ist eine Kopie der ersten, keine leeren Takte (§10.9.1). Im GRID RECORDING blättert [PAGE]
zwischen ihnen, du kannst also einen Schlag nur auf Seite zwei ändern. Stell LENGTH vor
Session 3 auf 16 zurück, oder behalte es und wisse, dass die Kontrollpunkte von Session 3
eine Seite beschreiben.

### Die Trigs einer Spur kopieren
Im GRID RECORDING — hier muss es *an* sein — hebt [FUNC] + [RECORD] die Trigs von der Spur,
auf der du bist; wechsle auf eine andere Spur, und [FUNC] + [STOP] setzt sie dort ab
(§10.10.4). Leg das Hi-Hat-Pattern auf Spur 4 und hör zwei Hi-Hats. Dieselben zwei Tasten
bewegen bei ausgeschaltetem GRID RECORDING ein ganzes Pattern: der Modus entscheidet, worauf
sie wirken.

### Schnelles Stummschalten
[MUTE] + [TRIG 2] schaltet die Snare stumm, ohne überhaupt in den Mute-Modus zu gehen, und
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

Session 3 lädt eine Subtracks-Machine auf Spur 1 und baut diese vier Stimmen als ein einziges
Kit neu auf, was die Spuren 2 bis 4 für Bass, Akkorde und Pad freimacht, die später kommen.
Deine Kopie A02 bleibt genau, wie sie ist. Die Lektion über die Tastenfarben — Trig-Tasten als
Spuren, als Schritte, als Pattern-Plätze — ist das, was du mitnehmen solltest.
