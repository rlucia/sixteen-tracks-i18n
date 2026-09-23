---
number: 4
chapter: rhythm
slug: make-it-move
title: Bring es in Bewegung
goal: Dem Beat Ghost Notes, einen Filter-Lock, einen Snare-Roll und einen Part geben, den du einspielst, und ihn dann quantisieren.
needs: [Das Projekt aus Session 3, Angeschlossene Kopfhörer, "Etwa sechzehn Minuten"]
teaches: [parameter-locks, trig-preview, retrigs, micro-timing, live-recording, quantize, sequence-lanes]
simulator: null
ends: { keys16: { 5: red, 13: red } }
---

## Step: Wo du stehst
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 3 hat dich im GRID RECORDING auf Spur 1 zurückgelassen, mit Subtrack 6, der
geschlossenen Hi-Hat, auf den sechzehn Tasten. Läuft der Sequenzer nicht, drücke [PLAY] und
lass ihn laufen: jeder Schritt hier wird über den Loop geschrieben. Dann halte [FUNC] und
drücke [SETTINGS] — diese Session schreibt Locks quer durchs ganze Kit, und dieses Speichern
ist der Stand, zu dem du zurückkommen kannst.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Der ganze Beat von Spur 1 — Kick, Snare, geschlossene Hi-Hat und dein Sound anstelle des Claps — im Loop von A01.
recover: Ein dunkler Streifen heißt, [RECORD] leuchtet nicht: drücke es für GRID RECORDING, dann halte [TRK] und drücke [KEYBOARD A1], die sechste SUBTRACKS-Taste, um zur geschlossenen Hi-Hat zurückzukommen. Du fängst hier ohne Session 3 an? Diese Session baut das Kit, das diese hier in Bewegung bringt, und sie dauert etwa sechzehn Minuten.
:::

## Step: Ghost Notes
keys: [TRIG 3, TRIG 7, TRIG 11, TRIG 15, TRIG, B]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §10.10.1, §12.2
mode: grid-recording

Halte [TRIG 3], [TRIG 7], [TRIG 11] und [TRIG 15] zusammen gedrückt — die vier Hi-Hats, die
zwischen die Zählzeiten fallen — und drücke, während du sie noch hältst, [TRIG], die
TRIG-PARAMETERS-Taste, die Taste links neben [SRC]. TRIG PAGE 1 öffnet sich; halte die vier weiter und
dreh DATA-ENTRY-Regler [B], VEL, herunter auf etwa 60.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [1] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Die Hi-Hats auf den Zählzeiten stehen, wo sie waren, und die vier dazwischen treten hinter sie zurück. VEL ist das eine Feld auf der Seite, das invertiert gezeichnet ist, und die vier Tasten, die du gehalten hast, blinken rot, während die anderen vier dauerhaft leuchten.
recover: Sind alle acht Hi-Hats leise geworden, war nichts gehalten, und die Drehung hat die VEL des ganzen Subtracks bewegt: dreh sie wieder hoch, halte die vier Tasten, dann dreh noch einmal. Rechne damit, dass NOTE als Strich erscheint — §12.2 sagt nur, dass es auf einer Subtracks-Spur nicht verfügbar ist — und damit, dass die anderen sieben Werte von der Zeichnung abweichen, die aus diesem Abschnitt gemacht ist und nicht von einem Gerät abgelesen.
:::

:::note
Ein Lock, den du hier setzt, gehört zu dem Subtrack, auf dem du bist, und zu sonst nichts:
jeder Subtrack behält seine eigenen SRC-, FLTR-, AMP- und MOD-Einstellungen (§A.2.3), diese
Drehung lässt Kick und Snare also genau, wie sie waren. Die FX-Seiten und die Send-Pegel sind
die Ausnahme — die teilen sich die acht über den Supertrack, und darum fand ein Besitzer, der
einen Delay-Send live aufnahm,
[ihn auf jedem Subtrack zugleich](https://www.elektronauts.com/t/tonverk-bug-reports/238306/1676),
und darum gibt es
[auf dem Supertrack keinen Filter, nach dem man greifen könnte](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2263).
:::

## Step: Einen Schritt hören
keys: [TRIG 1, TRIG 3, YES]
source: manual §10.3
mode: grid-recording

Halte [TRIG 3] und drücke [YES]: dieser eine Schritt spielt, mit seiner neuen VEL eingebacken.
Halte [TRIG 1] und drücke [YES] für die Hi-Hat auf der Zählzeit daneben.

:::checkpoint
hear: Zwei Hi-Hats, eine nach der anderen, in den zwei Lautstärken, die du gerade gesetzt hast, über dem Loop, der darunter weiterläuft.
recover: Klingen die beiden gleich, ist der Lock nie gelandet — geh einen Schritt zurück, halte die vier Tasten und sieh zu, wie VEL beim Drehen invertiert wird. Ob diese Vorschau den eigenen Subtrack des gehaltenen Trigs erklingen lässt oder den Subtrack, den du gewählt hast, ist nirgends geklärt, wo sich nachsehen ließ; das klärt dein Gerät.
:::

## Step: Ein Filter-Lock
keys: [FLTR, TRIG 9, E]
leds: { TRIG 9: red }
source: manual §10.10.1, §12.5
mode: grid-recording

Drücke [FLTR] für FLTR PAGE 1. Halte [TRIG 9] — die Hi-Hat auf Zählzeit drei — und dreh
DATA-ENTRY-Regler [E], FREQ, herunter, bis diese eine Hi-Hat dumpf wird.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [ATK, DEC, SUS, REL, FREQ 42, RESO, TYPE, ENV], invert: [4] }
hear: Sieben Hi-Hats wie gehabt, und eine auf Zählzeit drei, der die Höhen genommen sind. Schritt 9 blinkt jetzt, neben den vier Ghost Notes.
recover: Sind alle Hi-Hats auf einmal dumpf geworden, war [TRIG 9] beim Drehen nicht unten: halte sie zuerst. Dein Gerät füllt alle acht Felder auf dieser Seite mit Werten; die Zeichnung gibt nur dem Feld einen, das du geändert hast.
:::

## Step: Einen Lock entfernen
keys: [TRIG 9, E]
source: manual §10.10.1
mode: grid-recording

Halte [TRIG 9] noch einmal und drücke DATA-ENTRY-Regler [E] — drücken, nicht drehen. Der
FREQ-Lock geht ab, und der Trig bleibt, wo er ist. Jetzt halte [TRIG 9] und dreh [E] wieder
herunter: das Beispielstück behält diesen.

:::checkpoint
hear: Die Hi-Hat auf Zählzeit drei kommt hell zurück und wird wieder dumpf, wenn du den Lock zurücksetzt.
recover: Ist die Hi-Hat ganz verschwunden, war das ein kurzer Druck statt eines Haltens, und der entfernt den Trig — drücke [TRIG 9] noch einmal, um ihn zurückzuschreiben, und wisse, dass jeder Lock, den er trug, mit ihm gegangen ist (§10.10.1), dieser Schritt ist es also wert, zweimal gemacht zu werden.
:::

## Step: Der Snare-Roll
keys: [TRK, KEYBOARD D1, TRIG 13, TRIG, E, F, G]
leds: { TRIG 5: red, TRIG 13: red }
source: manual §10.7, §12.2
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD D1], die zweite SUBTRACKS-Taste, für die Snare. Halte
[TRIG 13] und drücke [TRIG] für TRIG PAGE 1, und halte weiter: dreh [E], um RTRG einzuschalten,
[F], um RTIM auf 1/32 zu setzen, und [G], um RVEL Richtung 1 hochzunehmen, damit die
Wiederholungen anwachsen, statt abzufallen. Das ist ein Ausgangspunkt und nicht die einzige
Antwort.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG ON, RTIM 1/32, RVEL 0.5, COND —], invert: [4, 5, 6] }
keys16: { 5: red, 13: red }
hear: Die Snare auf Zählzeit vier kommt als kurzer Roll: die Wiederholungen laufen für die eigene LEN des Trigs und enden innerhalb von Schritt 13, ein Auftakt in den nächsten Takt statt ein Fill quer darüber. Die Snare auf 5 ist unberührt, und auf der Seite — hier gezeichnet, nicht von einem Gerät abgelesen — sind die drei, die du gedreht hast, die invertierten. Schritt 13 blinkt jetzt, 5 leuchtet dauerhaft.
recover: Ein Roll, den du nicht hörst, ist meistens RTRG, das noch aus ist — halte [TRIG 13] und sieh zu, wie sich dieser Wert ändert, bevor du RTIM anfasst. Rollen beide Snares, wurde [TRIG 13] vor dem Drehen losgelassen, und die Einstellung ging auf den ganzen Subtrack statt auf diesen einen Trig: schalte RTRG aus, ohne etwas zu halten, und fang noch einmal mit gehaltener Taste an. Zu voll? [F] zurück auf 1/16 gibt eine Wiederholung pro Schritt, 1/12 gibt Triolen. Niemand hat Zahlen dafür veröffentlicht; welche am saubersten sind, klärt dein Gerät.
:::

:::note
Zwei Dinge auf dieser Seite erwischen Leute. Es gibt kein RLEN: der vierte der
Retrig-Parameter ist COND, eine Trig-Bedingung, das Thema von Session 5 — was einen Roll
formt, ist RVEL, und es arbeitet gegen die eigene VEL des Trigs. Und das Handbuch ist sich
uneins, welcher Regler RTRG einschaltet: die Regel in §6.3 lautet, dass ein Parameter auf den
Regler hört, über dem er sitzt, was RTRG auf [E] legt, während der Satz in §12.2 selbst
Regler [A] nennt. Dreh den Regler unter dem Parameter, und sagt dein Gerät etwas anderes, hat
dein Gerät recht.
:::

## Step: Den Clap nach hinten schieben
keys: [TRK, KEYBOARD F1, TRIG 7, RIGHT, UP, DOWN]
source: community https://www.youtube.com/watch?v=7lFFSUOsXsA
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD F1], die vierte SUBTRACKS-Taste, für den Clap — deinen Sound seit Session 3. Halte
[TRIG 7] und drücke [RIGHT]: das MICRO-TIMING-Pop-up öffnet sich und zeigt den Versatz dieses
Schritts als Prozentzahl (§10.5). Halte die Taste gedrückt — [RIGHT] noch einmal schiebt ihn in
großen Sprüngen weiter, [UP] und [DOWN] bewegen ihn ein Stück nach dem anderen — und lass
[TRIG 7] los, um herauszugehen.

:::checkpoint
screen: { menu: "MICRO TIMING", items: [+25%] }
hear: Der Clap auf 7 landet einen Hauch nach dem Schritt, auf dem er sitzt, und der Takt lehnt sich stärker in den nächsten. Der Wert ist hier nach hinten geschoben gezeichnet; wie weit ihn ein Druck bringt, sagt dir das Gerät.
recover: Nichts hat sich geöffnet? Das Pop-up will zuerst die gehaltene Trig-Taste und dann den Pfeil, und ein Schritt ohne Trig hat nichts zu timen. Zu weit geschoben: [LEFT] geht zurück, und der Versatz wird mit dem Pattern gespeichert, er überlebt also das Speichern am Ende (§10.5).
:::

## Step: Etwas einspielen
keys: [RECORD, PLAY, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Halte [RECORD] gedrückt und drücke einmal [PLAY]: [RECORD] fängt an, rot zu blinken, und LIVE
RECORDING ist an, während das Pattern weiter loopt. Lass beide los, dann tipp [KEYBOARD G1],
die fünfte SUBTRACKS-Taste, einen oder zwei Takte lang im Takt des Beats an. Drücke [PLAY]
allein, um wieder herauszukommen.

:::checkpoint
hear: Eine fünfte Stimme aus dem Kit, dort, wo deine Finger sie hingesetzt haben, über den vier, die du von Hand geschrieben hast, und der Loop hält nie an.
recover: Hat [RECORD] dauerhaft geleuchtet statt zu blinken, ging [PLAY] vor [RECORD] herunter, und du bist im GRID RECORDING: drücke [RECORD], um es auszuschalten, und fang noch einmal an. Eine fünfte Taste, die keinen Ton macht, ist ein leerer Subtrack in deinem Kit — spiel eine, die klingt, und nimm stattdessen diesen Subtrack.
:::

:::note
[PLAY] bedeutet rund um diesen Schritt zwei verschiedene Dinge. Ein zweites Mal gedrückt,
während [RECORD] noch gehalten wird, schaltet es die automatische Quantisierung für das, was
du gleich aufnimmst, ein und aus (§10.4); lass sie aus, denn der nächste Schritt erledigt
diese Aufgabe von Hand, und es gibt nichts zu ziehen, wenn das Gerät es schon gezogen hat.
Einmal gedrückt, nachdem [RECORD] losgelassen ist, verlässt es die Live-Aufnahme, und das
Pattern läuft weiter.
:::

## Step: Quantisiere, was du gespielt hast
keys: [FUNC, KEYBOARD G#1, TRIG 1, TRIG, E, F, NO]
source: manual §10.8
mode: menu:QUANTIZE

Halte [FUNC] und drücke [KEYBOARD G#1] für das QUANTIZE-Menü, und drücke [TRIG 1], um es auf
Spur 1 zu richten. Dreh DATA-ENTRY-Regler [E], TRK, ein Stück nach dem anderen hoch und halt in
dem Moment an, in dem der Part, den du gespielt hast, eng sitzt: auf halbem Weg nach oben liegt
die Stelle, die du suchst, und dein Ohr findet sie. Regler [F], PATTERN, täte dasselbe mit jeder Spur
im Pattern auf einmal, und diese Session lässt ihn in Ruhe; [NO] schließt das Menü.

:::checkpoint
screen: { menu: "QUANTIZE", items: [TRK 0, PATTERN 0] }
hear: Beide Einstellungen beginnen bei null. Kick und Snare bewegen sich nicht, denn sie wurden auf dem Raster geschrieben und sitzen schon darauf. Was TRK zieht, ist alles, was nicht darauf sitzt: der Part, den du von Hand gespielt hast, und die offene Hi-Hat, die du zwei Schritte zuvor nach hinten geschoben hast (§10.8) — darum hörst du auf zu drehen, sobald die Aufnahme eng sitzt.
recover: Menü nicht aufgegangen? Probier stattdessen [FUNC] + [TRIG], die Kombination, die §10.4 für dasselbe Menü gibt, wo §10.8 [FUNC] + [KEYBOARD G#1] gibt; welche der beiden es annimmt, klärt dein Gerät. Ganz hochgedreht und die späte offene Hi-Hat verloren? Geh zurück auf den Subtrack der offenen Hi-Hat, halte [TRIG 7] und drücke [RIGHT], um sie wieder herauszuschieben (§10.5); Quantisieren rundet auf den nächsten Schritt, und für einen Trig mit Micro-Timing muss das nicht der Schritt sein, auf dem er geschrieben wurde (§10.8). Und klingt die Aufnahme immer noch nicht wie das, was du gespielt hast, bildest du dir das nicht ein: [ein Besitzer berichtet dasselbe](https://www.elektronauts.com/t/tonverk-user-thread/238631/1812), ohne Antwort im Thread.
:::

## Step: Nur die Locks sehen
keys: [TRK, KEYBOARD A1, RECORD, FUNC, UP, DOWN, NO]
leds: { RECORD: red }
source: manual §10.3.2
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD A1], die sechste SUBTRACKS-Taste, um zur geschlossenen Hi-Hat
zurückzukommen, dann drücke [RECORD] für GRID RECORDING. Halte [FUNC] und drücke [UP] für das
SEQUENCE-LANE-Menü, und drücke [UP]/[DOWN], bis P-LOCKS die gewählte ist. Stell es zurück auf
NOTES + P-LOCKS, bevor du gehst, dann drücke [NO].

:::checkpoint
screen: { bank: "A01", name: "P-LOCKS", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Am Klang ändert sich nichts. Der Name der Lane steht oben auf dem Display neben den Pattern-Seiten, und jede Hi-Hat wird blassrot — alle acht, 1, 5 und 13 schlicht und 3, 7, 9, 11 und 15 mit ihren Locks. Nichts blinkt: §10.3.2 sortiert diese Lane nach der Art des Trigs, nicht nach dem, was darauf gelockt ist, und ein Noten-Trig mit einem Lock ist immer noch ein Noten-Trig (§10.2.1), hier sind also alle acht dieselbe Art von Trig. Blinken 3, 7, 9, 11 und 15 stattdessen, liest dein Gerät eine gelockte Note als beide Arten — eins fürs Kolophon, und kaputt ist so oder so nichts.
recover: [UP] und [DOWN] gehen die drei Lanes als eine Liste durch, egal welche du also drückst, mach weiter, bis P-LOCKS die gewählte ist, und lass es danach auf NOTES + P-LOCKS. Sind die Hi-Hats vollrot statt blass, bist du noch auf NOTES, wo Noten-Trigs rot sind und Lock-Trigs blassgelb (§10.3.2) — geh die Liste weiter durch. Elektrons eigener Präsentator fand einen Lock-Trig, der sich im NOTES-Modus scheinbar entfernen ließ, [was das Handbuch für unmöglich erklärt](https://www.youtube.com/watch?v=7lFFSUOsXsA); auch das klärt dein Gerät.
:::

## Step: Speichern
keys: [FUNC, SETTINGS, TRK, KEYBOARD D1]
source: manual §9.1.1
mode: grid-recording

Halte [FUNC] und drücke [SETTINGS]: gespeichert, in Stille, wie jedes Speichern hier abläuft.
Dann halte [TRK] und drücke [KEYBOARD D1], die zweite SUBTRACKS-Taste, und sieh dir die Snare
ein letztes Mal an — 5 und 13, mit 13 blinkend für den Roll darauf. Dieses Bild ist das
Titelbild dieser Session.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: Der Beat mit allem, was du hineingelegt hast, gespeichert: die Ghost Notes, die dumpfe Hi-Hat, der Roll und der Part, den du gespielt hast.
recover: Zwei Tasten und nicht mehr ist richtig — die Snare hatte immer zwei Trigs, und der Roll lebt in einem davon statt auf eigenen Schritten.
:::

## What you now have

A01 ist dasselbe Kit und dieselben vier Stimmen, in Bewegung. Auf der geschlossenen Hi-Hat
sitzen vier Ghost Notes hinter den vieren auf den Zählzeiten, und ein Schritt auf Zählzeit
drei ist dumpf gefiltert; die Snare auf 13 ist ein kurzer Roll, ein Auftakt in den nächsten
Takt; der Clap auf 7 sitzt einen Hauch spät, wenn du TRK unter dem Maximum gelassen
hast, und genau auf dem Schritt, wenn nicht; und ein fünfter Subtrack trägt einen Part, den du
mit den Händen gespielt und dann aufs Raster gezogen hast. All das sind Parameter-Locks und
Timing auf Trigs, die du schon hattest, all das ist gespeichert, und A02 hält noch die
Kopie des Beats aus Session 2.

## Explore further

### Die Velocities zufällig verteilen, dann zurücknehmen
[FUNC] + [-] öffnet das TRANSFORM-Menü, das auf jeden Trig der Spur wirkt, auf der du bist
(§10.6). VELOCITY RANDOMIZE schreibt einen VEL-Lock auf alle; VELOCITY UNLOCK entfernt jeden
VEL-Lock, den es gibt — die vier Ghost Notes eingeschlossen — probier es also auf dem Subtrack
des Claps statt auf dem der geschlossenen Hi-Hat, und behalte dein Speichern in Reichweite.

### Ein Lock ohne Note darunter
Im GRID RECORDING schreibt [FUNC] + [TRIG 8] auf einen leeren Schritt einen Lock-Trig: gelb
statt rot, mit Parameteränderungen, aber ohne etwas auszulösen (§10.2.1). Setz einen auf
Schritt 8 der geschlossenen Hi-Hat, locke FREQ darauf, und hör, wie die nächste Hi-Hat aus
einem Filter kommt, der sich bewegt hat, während nichts spielte.

### PROB, zwei Felder neben VEL
PROB liegt auf TRIG PAGE 1 neben den Parametern, die du gedreht hast, auf Regler [D], und es
setzt, wie wahrscheinlich ein Trig überhaupt spielt — 100 % als Voreinstellung, jedes Mal neu
entschieden, wenn der Schritt an der Reihe ist (§12.2). Locke es auf einer Ghost Note auf 50 %
und hör zu, wie der Takt aufhört, sich zu wiederholen. Session 5 ist auf dieser Idee gebaut.

## Next

Session 5 bringt das Pattern dazu, sich nicht mehr zu wiederholen: Trig-Bedingungen auf dem
Kit, das du hast, eine Kick, die jeden zweiten Loop kommt, Wahrscheinlichkeit auf ebendiesen
Ghost Notes und ein Fill-Takt, den du gedrückt hältst — alles innerhalb von A01, ohne dass
etwas Neues geladen wird. Der Simulator auf dieser Seite beantwortet die eine Frage, die
Bedingungen immer aufwerfen: warum ein Trig nicht gespielt hat.
