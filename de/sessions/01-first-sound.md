---
number: 1
chapter: rhythm
slug: first-sound
title: Der erste Klang
goal: Einschalten, ein Drum-Kit auf Spur 1 legen, seine Kick auf der unteren Reihe finden, das Tempo setzen und ein Projekt speichern, zu dem du zurückkommen kannst.
needs: [Der Tonverk und sein Netzteil, "Kopfhörer mit 6,3-mm-Klinke (oder ein Mischpult an OUT A/B)", Die Werks-SD-Karte im Schacht, "Etwa sechzehn Minuten"]
teaches: [power, volume, new-project, track-select, load-preset, kit, subtrack-select, tempo, metronome, name-project, save-project]
simulator: null
ends: { keys16: { 1: white } }
---

## Step: Einschalten
keys: []
source: manual §3.2, §3.3, §5.2.1
checked: yes
mode: any

Steck das mitgelieferte Netzteil in eine Steckdose und sein USB-Kabel in einen der beiden
USB-Ports auf der Rückseite; beide Ports können das Gerät versorgen, und die kleine Schraube
neben dem Port ist dazu da, dass sich das Kabel nicht lockert. Drücke POWER auf der Rückseite.
Das Display leuchtet auf und zeigt das Projekt, das der Tonverk zuletzt benutzt hat — es gibt
keinen Einrichtungsassistenten, und nichts hier verlangt eine Entscheidung von dir.

:::checkpoint
hear: Noch nichts. Das Gerät ist an und still und zeigt ein Projekt, das du nicht ausgesucht hast.
recover: Nichts leuchtet? Das Kabel gehört in USB 1 oder USB 2, und das vom Handbuch empfohlene Netzteil ist das Elektron PSU-5 aus der Verpackung (§3.2, §20). Ein Laptop-Port oder ein Handy-Ladegerät reicht womöglich nicht.
:::

:::note
Zum späteren Ausschalten: drücke POWER, dann [YES] — oder drücke POWER zweimal. Warte, bis
jede LED und die Hintergrundbeleuchtung des Displays dunkel sind, bevor du das Kabel ziehst.
Falls das Gerät je nicht mehr reagiert, erzwingt gedrückt gehaltenes POWER das Ausschalten,
und alles Ungespeicherte geht damit verloren.
:::

## Step: Kopfhörer und die zwei Lautstärkeregler
keys: [MAIN VOLUME, LEVEL/DATA]
source: manual §3.1, §6.1
checked: yes
mode: any

Steck deinen Kopfhörer hinten in OUT E/F (HEADPHONES). Dreh [MAIN VOLUME] auf etwa ein
Viertel. Links auf diesem Bedienfeld sitzen zwei große Regler, und nur dieser eine ist die
*Ausgangs*lautstärke: [LEVEL/DATA] ist die Lautstärke der gerade aktiven Spur, und er scrollt
außerdem überall sonst im Gerät durch Listen und setzt Werte. Lass ihn vorerst in Ruhe.

:::note
Wer [LEVEL/DATA] herunterdreht, um den Kopfhörer leiser zu machen, zieht die Lautstärke einer
Spur herunter und lässt sie dort; dreh [MAIN VOLUME] später wieder auf, und diese Spur ist
immer noch leise, ohne dass das Display sagt, warum.
[Ein Rundgang, der die beiden auseinanderhält](https://www.youtube.com/watch?v=lrcaoGwYL00).
:::

## Step: Ein neues Projekt
keys: [FUNC, PRESET, UP, DOWN, YES, NO]
source: manual §9.1, §9.1.1
checked: yes
mode: menu:FILE

Halte [FUNC] und drücke [PRESET]: das FILE-Menü öffnet sich. Geh mit [UP]/[DOWN] und [YES] zu
PROJECT, dann NEW und [YES]. Wirst du gefragt, ob das offene Projekt gespeichert werden soll,
drücke [NO] — das Werksprojekt liegt schon auf der Karte, und du hast nichts darin geändert.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
hear: Nichts. Ein leeres Projekt, Pattern A01, keine Sounds geladen.
recover: Hat sich stattdessen eine Liste von Projekten geöffnet, bist du in LOAD statt in NEW. Drücke einmal [NO] und wähle NEW.
:::

:::note
Ein neues Projekt lädt nichts, aber der Preset-Browser in den nächsten Schritten listet trotzdem
die ganze Werksbibliothek. Das ist die Bibliothek der Karte, die sich alle Projekte teilen, nicht
der Inhalt deines Projekts — genau die Unterscheidung, für die
[dieser Thread](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)
da ist. Nichts, was du hier tust, kann dem Werksmaterial schaden.
:::

## Step: Spur 1 wählen
keys: [TRK, TRIG 1]
leds: { TRIG 1: white }
source: manual §5.3.7
checked: yes
mode: any

Halte [TRK] und drücke [TRIG 1]. Spur 1 ist jetzt die aktive Spur: die, die das Display
beschreibt, die, die [LEVEL/DATA] regelt, die, die die Tastatur spielen wird. Dass du [TRK]
hältst, ist wichtig — ein bloßes [TRIG 1] wählt die Spur *und* löst sie aus, und das ist bei
jedem Spurwechsel eine Note, die du nicht bestellt hast.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
keys16: { 1: white }
hear: Noch nichts; auf der Spur liegt kein Sound.
recover: Die untere linke Ecke des Displays ist die Anzeige, der du trauen kannst: dort steht T1. Ein bloßer Druck auf [TRIG 1] wählt Spur 1 auch — und löst sie aus, und das ist der ganze Unterschied.
:::

:::note
Drei Stellen im Handbuch schreiben diese Taste auf drei Arten — [TRK] in §5.3.7, TRACK in
§10.3, und die eigene Preset-Anleitung in §9.1.4 verlangt stattdessen [FUNC] und eine
Trig-Taste. Auf dem Bedienfeld vor dir steht TRK, also sagt dieser Kurs das.
[Die Besitzer regeln es genauso](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
[TRK] und eine Trig-Taste ist die stille Auswahl.
:::

## Step: Ein Kit laden
keys: [PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §7.1, §9.1.4
mode: menu:LOAD PRESET

Drücke [PRESET]. Das LOAD-PRESET-Menü öffnet sich für die aktive Spur. [LEFT]/[RIGHT] wechseln
zwischen den Preset-Kategorien DRUMS und KEYS; bleib in DRUMS. Scrolle mit [UP]/[DOWN] oder
[LEVEL/DATA] zu 017 HELLO KIT, dem Kit, das das Beispielstück nimmt, und drücke [YES], um es
auf Spur 1 zu laden. Ein anderes Kit geht genauso: die Schritte nennen die Tasten von HELLO
KIT, und in deinem können dieselben Sounds auf anderen Tasten liegen.

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 0 }
hear: Drücke [TRIG 1] einmal. Einer der Sounds des Kits spielt.
recover: Stille: [MAIN VOLUME] ein Stück auf, und den Kopfhörerstecker ganz hinein. Macht [TRIG 1] gar keinen Ton, ist das Preset woanders gelandet — halte [TRK], drücke [TRIG 1], und lade es noch einmal.
:::

:::note
Fast alles unter DRUMS ist ein Kit: acht Sounds auf einer Spur, nicht eine einzelne Trommel.
[Ein Rundgang durch die Werks-Kits](https://www.youtube.com/watch?v=vWVw534Xvs4) spielt sie
eins nach dem anderen. Ein Preset, das nur eine Kick ist, gibt es nicht: du lädst ein Kit und
findest die Kick darin.
:::

:::note
Eine Vorschau gibt es hier nicht. Ein Preset hörst du nur, indem du es lädst, und Laden ersetzt,
was die Spur gerade hatte.
[Rezensenten nennen das den Flow-Killer](https://www.soundonsound.com/reviews/elektron-tonverk).
Und [FUNC] + [NO] ist auch kein Weg zurück: Undo gilt für Einfügen und Löschen (§10.10.5), und
ein Preset über ein anderes zu laden ist keins von beidem.
:::

:::note
Ein Preset zu laden kopiert es ins Pattern (§9). Von jetzt an ändert ein Regler, den du drehst,
*die Kopie dieses Patterns*, nie die Datei auf der Karte. Das ist die erste der fünf
Behälter-Regeln; die Karte auf [Bevor du beginnst](/before-you-start/) zeigt die übrigen.
:::

## Step: Acht Sounds auf der unteren Reihe
keys: [KEYBOARD C1, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, KEYBOARD G1, KEYBOARD A1, KEYBOARD B1, KEYBOARD C2, TRIG 1]
leds: { KEYBOARD C1: red }
source: manual §3.1, §A.2.3
mode: any

Drücke die untere Reihe der Tastatur Taste für Taste, von [KEYBOARD C1] bis [KEYBOARD C2].
Jede Taste ist ein Sound des Kits. Die Zahl auf dem Display folgt der Taste, die du gedrückt
hast, und diese Taste bleibt rot: sie ist der Sound, den [TRIG 1] jetzt spielt. Unterscheide
sie danach, wo sie liegen und wie lange sie klingen. Die Kick ist der tiefste Sound, und kurz,
der, auf dem die anderen stehen. Die Snare ist ein scharfer Knall in der Mitte des Bereichs;
ein Clap ist ein Händeklatschen und nimmt oft den Platz der Snare ein. Die geschlossene Hi-Hat
ist der höchste und kürzeste Sound von allen; eine offene Hi-Hat ist genauso hoch, klingt aber nach.
Ein Tom ist eine Trommel mit deutlicher Tonhöhe, und ein Becken ist ein langes metallisches
Rauschen. In HELLO KIT liegt die Kick auf [KEYBOARD C1]: drück sie zuletzt, dann [TRIG 1].

:::checkpoint
hear: Acht verschiedene Sounds, dann die Kick allein von [TRIG 1].
recover: Die obere Tastaturreihe und die Oktavtasten tun nichts, solange ein Kit auf der Spur liegt; das ist das Kit, kein Fehler. Spielt [TRIG 1] etwas, das nicht deine Kick ist, ist die rote Taste woanders — drücke [KEYBOARD C1], oder die Taste, auf der dein Kit die Kick hat, und versuch es noch einmal.
:::

:::note
Die Tastatur folgt nicht immer der Spur, die du gerade gewählt hast. Wähle irgendetwas von Spur
9 bis 16, während eine Audiospur aktiv war, und die [KEYBOARD]-Tasten bleiben auf dieser
früheren Audiospur (§5.3.7, §8.5), damit du durch einen Bus spielen kannst, während du an ihm
drehst. Für einen Neuling liest sich das wie eine Auswahl, die nicht funktioniert hat.
[Es ist so gewollt](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
wähle eine Audiospur, 1 bis 8, um die Tastatur zurückzuholen.
:::

## Step: Das Tempo setzen
keys: [TEMPO, A, NO]
source: manual §7.5.1
checked: yes
mode: menu:TEMPO

Drücke [TEMPO]. DATA-ENTRY-Regler [A] ist die BPM; drück ihn beim Drehen hinein, und er
springt in Achterschritten. Das Beispielstück läuft mit 92. Hast du ein Tempo im Kopf, nimm
das — alles von 80 bis 100 hält die späteren Sessions bequem. [NO] schließt das Menü wieder.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Noch ändert sich nichts; das Tempo steht oben rechts auf dem Hauptdisplay.
recover: Lässt sich die BPM nicht bewegen, folgt der Tonverk einer externen Clock. §7.5.1 sagt, das Display zeigt dann MIDI über der BPM; §6 beschreibt ein Schloss-Symbol daneben. Beide Zeichen bedeuten dasselbe — zieh die MIDI- oder USB-Clock-Quelle vorerst ab.
:::

## Step: Das Tempo hören
keys: [FUNC, KEYBOARD F#1, PLAY, KEYBOARD C1, STOP]
source: manual §7.5.2
checked: yes
mode: playback

Halte [FUNC] und drücke [KEYBOARD F#1] — die mintfarbene Beschriftung sagt Metronome. Drücke
[PLAY]: ein Klick in deinem Tempo. Spiel die Kick auf [KEYBOARD C1] eine Minute lang dagegen;
das ist die Übung, und der ganze Grund, warum das Tempo vor dem Beat kam. Drücke [STOP], dann
noch einmal [FUNC] + [KEYBOARD F#1], um den Klick abzustellen.

:::checkpoint
hear: Ein Klick in deinem Tempo, vier pro Takt, und deine Kick darüber.
recover: Kein Klick: öffne [TEMPO] und sieh auf die Regler E bis H — METRO schaltet ihn ein, und GAIN setzt, wie laut er ist. Das Metronom hat kein eigenes Menü; es wohnt in der rechten Hälfte des Tempo-Menüs.
:::

## Step: Das Projekt benennen
keys: [FUNC, PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §9.1.1, §6.7
checked: yes
mode: menu:NAMING

Halte [FUNC] und drücke [PRESET] für das FILE-Menü, dann PROJECT und SAVE AS. Eine
NAMING-Ansicht öffnet sich: [LEFT]/[RIGHT] wandern zwischen den Zeichen, [LEVEL/DATA] oder
[UP]/[DOWN] wählen eines, und wer [FUNC] gedrückt hält, bekommt alle Buchstaben, Ziffern und
Symbole auf einmal, um mit den Pfeilen auszuwählen. Nenn es SIXTEEN, oder irgendetwas, das du
wiedererkennst, und drücke [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Nichts ändert sich. Das Projekt, sein Pattern und dein Kit liegen jetzt unter einem Namen deiner Wahl auf der Karte.
recover: Landest du irgendwo ohne NAMING-Ansicht, hast du SAVE statt SAVE AS gewählt. [NO] geht zurück; SAVE AS ist das, was nach einem Namen fragt und einen neuen Platz nimmt. In der NAMING-Ansicht selbst löscht [FUNC] + [NO] einen Buchstaben, und [FUNC] + [YES] fügt ein Leerzeichen ein.
:::

## Step: Die Speichergewohnheit
keys: [FUNC, SETTINGS, NO]
source: community https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370
checked: yes
mode: any

Halte [FUNC] und drücke [SETTINGS] — die mintfarbene Beschriftung sagt Save Proj. Nichts fragt
dich irgendetwas. Kein Name, keine Bestätigung, keine Liste: das Projekt geht direkt zurück auf
seinen eigenen Platz, unter dem Namen, den du ihm gerade gegeben hast, und du bist wieder auf
dem Hauptdisplay. Tu es jetzt, damit du diese Stille zum ersten Mal in einem Moment erlebst, in
dem du sie erwartet hast.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Gar nichts. Diese Stille ist der Schritt: das Projekt liegt auf der Karte, unter dem Namen, den du ihm gegeben hast.
recover: Hat sich stattdessen ein Menü mit Einstellungen geöffnet, hast du [SETTINGS] ohne [FUNC] gedrückt. Drücke [NO], halte erst [FUNC], dann drücke [SETTINGS]. Bist du nicht sicher, ob gespeichert wurde, öffne das FILE-Menü, PROJECT, LOAD: dein Name steht in der Liste.
:::

:::note
Das Fehlen einer Rückfrage ist die Falle. Besitzer drücken [FUNC] + [SETTINGS], sehen keine
NAMING-Ansicht und schließen daraus, dass nichts gespeichert wurde —
[der Thread, aus dem dieser Schritt stammt](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370),
besteht aus Besitzern, die genau das herausfinden. §9.1.1 gibt der Kombination eine einzige
Aufgabe — sie schreibt, woran du gerade arbeitest, zurück auf den Platz, von dem es kam — und
das Benennen ist SAVE AS, was du schon getan hast. Vielleicht siehst du kurz einen Hinweis,
während die Karte geschrieben wird; Besitzer auf diesem OS
[haben darum gebeten, dass er verschwindet](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824),
obwohl §9.1.1 keinen erwähnt — nimm ihn also als etwas, das vorbeiflackern kann, nicht als
etwas, auf das du wartest. Das klärt dein Gerät.
:::

:::note
Es gibt auf diesem Gerät kein Pattern-Speichern und keine Schnellspeichertaste dafür. Ein
Pattern lebt im Projekt und erreicht die Karte nur, wenn das Projekt gespeichert wird. Nichts
anderes zählt: der PERFORM-Modus ist kein Speichern, das vorübergehende Merken ist ein
Wiederherstellungspunkt für zwischendurch, der beim Ausschalten stirbt (§10.10.6), und eine
Chain wird überhaupt nie gespeichert. [FUNC] + [SETTINGS] ist die eine Gewohnheit; leg sie dir
jetzt zu.
:::

## What you now have

Ein Projekt namens SIXTEEN mit einem Pattern, A01, einem Drum-Kit auf Spur 1 — HELLO KIT, die
Kick auf [KEYBOARD C1] gefunden — und einem Tempo von 92. Es ist gespeichert, du kannst also hier ausschalten: die nächste Session
beginnt in diesem Zustand. Hast du deinen eigenen Namen oder dein eigenes Tempo behalten,
funktioniert die nächste Session genauso.

## Explore further

### Tempo tippen
Halte [FUNC] und tippe [TEMPO] viermal im Takt an. Ab dem vierten Tipp wird der Durchschnitt
zur BPM und aktualisiert sich weiter, solange du weitertippst.

### Nudge
Halte bei laufendem Sequenzer [LEFT] oder [RIGHT] auf dem Hauptdisplay: das Tempo sinkt oder
steigt um zehn Prozent, bis du loslässt. Das ist zum Angleichen an eine Platte oder ein anderes
Gerät gedacht, nicht zum Komponieren, und das Tempo-Menü muss dafür nicht offen sein.

### Die Preset-Liste filtern
Öffne [PRESET] und drücke [LEFT] noch einmal, über die Kategorien hinaus: ein SORTING-Menü
öffnet sich mit CATEGORY, TAGS und einer Textsuche SEARCH, und die drei stapeln sich, statt
einander zu ersetzen ([FUNC] + [NO] löscht eine Suche). Das kam
[mit OS 1.4.0 dazu](https://www.elektron.se/release-notes/tonverk-os-release-notes), und es
ist der Unterschied zwischen einem Browser und einer Scroll-Liste.

### Die andere Kategorie
Stöbere in KEYS, lade etwas und spiel die Tastatur: ein KEYS-Preset ist ein einziger Sound über
die ganze Tastatur, die obere Reihe und die Oktavtasten eingeschlossen. Dann lade HELLO KIT
zurück. Beide Male ersetzt das Laden die Spur — nur die Kopie des Patterns ändert sich je, und
die Karte hält beide Presets noch genau so, wie sie waren.

### Andere Kits
Lade ein paar weitere Kits aus DRUMS und spiel bei jedem die untere Reihe. Die Tasten bleiben
dieselben; was auf ihnen liegt, wechselt von Kit zu Kit, und dein Ohr ist die einzige Karte.
Lade HELLO KIT zurück, wenn du fertig bist, oder behalte das Kit, das dir gefallen hat, und
merk dir, wo seine Kick, die Snare, die geschlossene Hi-Hat und der Clap liegen.

### Der Level-Regler
[LEVEL/DATA] setzt die Lautstärke der aktiven Spur, und das Display zeigt sie unten rechts,
während du drehst. Jetzt, wo du weißt, was er tut, ist er nicht mehr der Regler, der auf
rätselhafte Weise Dinge leiser macht.

## Next

Session 2 schreibt den eintaktigen Beat, auf dem das ganze Stück steht, auf dieser einen
Spur, ein Sound des Kits nach dem anderen. Davor erklären zehn Minuten auf
[Bevor du beginnst](/before-you-start/) die fünf Behälter, die ein Speichern berührt, und die
vier Arten von Spuren: es ist die Seite, auf die sich jede spätere Session stützt.
