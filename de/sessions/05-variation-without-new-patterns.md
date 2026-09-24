---
number: 5
chapter: rhythm
slug: variation-without-new-patterns
title: Variation ohne neue Patterns
goal: Ein Pattern mit Bedingungen, Wahrscheinlichkeit und einem Fill bei jedem Loop anders klingen lassen, und die zwei Sicherheitsnetze kennenlernen, bevor du es aufs Spiel setzt.
needs: [Das Projekt aus Session 4, Angeschlossene Kopfhörer, "Etwa sechzehn Minuten"]
teaches: [trig-conditions, chance, fill, transform, memorise-recall, perform]
simulator: conditions
ends: { keys16: { 5: red, 13: red, 14: red, 15: red, 16: red } }
---

## Step: Wo du stehst
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 4 hat dich im GRID RECORDING auf Spur 1 zurückgelassen, mit Subtrack 2, der Snare, auf
den sechzehn Tasten. Läuft der Sequenzer nicht, drücke [PLAY] und lass ihn laufen — alles hier
wird Loop für Loop beurteilt, ein stehendes Pattern zeigt dir also nichts davon. Dann halte
[FUNC] und drücke [SETTINGS]: diese Session setzt das Pattern zweimal aufs Spiel, und dieses
Speichern ist der Boden unter beidem.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: Das Kit aus Session 4 im Umlauf: die Ghost Notes hinter den Hi-Hats, die dumpfe Hi-Hat auf Zählzeit drei, der Roll in den nächsten Takt und der Part, den du eingespielt hast. Zwei Tasten leuchten auf dem Streifen — die Snare auf 5 und 13, mit 13 blinkend für den Retrig darauf.
recover: Ein dunkler Streifen heißt, [RECORD] leuchtet nicht: drücke es für GRID RECORDING. Ein Streifen mit acht Tasten ist die geschlossene Hi-Hat und nicht die Snare — halte [TRK] und drücke [KEYBOARD D1], die zweite SUBTRACKS-Taste. Du fängst hier ohne Session 4 an? Diese Session schreibt die Locks, die diese hier variiert, und sie dauert etwa sechzehn Minuten.
:::

## Step: Eine Kick, die jeden zweiten Loop kommt
keys: [TRK, KEYBOARD C1, TRIG 15, TRIG, H]
leds: { TRIG 15: red }
source: manual §10.10.2, §12.2
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD C1], die erste SUBTRACKS-Taste, für die Kick, dann drücke
[TRIG 15], um eine Kick dorthin zu setzen, wo der Subtrack keine hatte — ein Auftakt in den
Anfang des Takts. Halte [TRIG 15] gedrückt, drücke [TRIG] für TRIG PAGE 1 und dreh
DATA-ENTRY-Regler [H], COND, bis dort 1:2 steht.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND 1:2], invert: [7] }
keys16: { 1: red, 5: red, 9: red, 13: red, 15: red }
hear: Der Auftakt kommt, setzt beim nächsten Durchlauf aus und kommt beim übernächsten wieder — A:B zählt, wie oft das Pattern gespielt hat, nicht, wo du im Takt bist (§10.10.2). Schritt 15 blinkt gegen die vier dauerhaften Kicks, wie jeder Trig mit einem Lock, und COND ist das eine invertierte Feld auf der Seite.
recover: Kommt der Auftakt bei jedem Loop, steht COND noch auf dem Strich: halte [TRIG 15] gedrückt und sieh zu, wie sich dieser Wert beim Drehen von [H] ändert, statt auf die Tasten zu sehen. Kommt er überhaupt nie, bist du über 1:2 hinaus — die Bedingungen sind eine Liste auf einem Regler, und 2:2 spielt genau in den Loops, die 1:2 aussetzt.
:::

## Step: Wahrscheinlichkeit auf den Ghost Notes
keys: [TRK, KEYBOARD A1, TRIG 3, TRIG 7, TRIG 11, TRIG 15, D]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §12.2
mode: grid-recording

Halte [TRK] und drücke [KEYBOARD A1], die sechste SUBTRACKS-Taste, für die geschlossene Hi-Hat —
TRIG PAGE 1 bleibt vor dir. Halte [TRIG 3], [TRIG 7], [TRIG 11] und [TRIG 15], die vier Ghost
Notes aus Session 4, und dreh Regler [D], PROB, herunter auf 50 %.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 50%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [3] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Etwa die Hälfte der Ghost Notes taucht in einem Loop auf, und eine andere Hälfte im nächsten: die Münze wird jedes Mal neu geworfen, wenn ein Schritt an der Reihe ist (§12.2). Die Schritte 3, 7, 11 und 15 blinken jetzt für den Lock, den sie tragen, und 1, 5, 9 und 13 leuchten dauerhaft — die vier Hi-Hats auf den Zählzeiten sind unberührt, der Takt behält also seine Form, während er aufhört, sich zu wiederholen.
recover: Fangen auch die vier Hi-Hats auf den Zählzeiten an auszusetzen, ist PROB auf dem Subtrack gelandet statt auf den vier Trigs: nimm es zurück auf 100 %, ohne etwas zu halten, dann halte [TRIG 3], [TRIG 7], [TRIG 11] und [TRIG 15] und dreh [D] noch einmal. Klingen die Ghost Notes Loop für Loop gleich, sieh auf den Wert: 50 % ist die Zahl hier, und alles über etwa 90 % geht über eine Handvoll Takte als Gewissheit durch.
:::

## Step: Eine Antwort, die ihre Frage braucht
keys: [TRIG 16, H]
leds: { TRIG 16: red }
source: manual §10.10.2
mode: grid-recording

Drücke [TRIG 16] einmal: eine Hi-Hat auf dem letzten Schritt des Takts, wo dieser Subtrack
keine hatte. Halte sie und dreh [H] bis zu PRE: der Trig klingt nur, wenn der, den der
Sequenzer vor ihm abgewogen hat, auch geklungen hat (§10.10.2).

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red, 16: red }
hear: Die letzten zwei Schritte des Takts kommen als Paar oder gar nicht — gewinnt die Ghost Note auf 15 ihren Münzwurf, antwortet 16 darauf; setzt 15 aus, setzt 16 mit ihr aus. Beide Tasten blinken, 15 für ihre Wahrscheinlichkeit und 16 für ihre Bedingung.
recover: Spielt 16 bei jedem Loop, steht COND noch auf dem Strich: halte [TRIG 16] und dreh [H] Klick für Klick, am FILL-Paar vorbei, bis PRE der Wert ist. Und bist du versucht, ein zweites PRE auf dieses zu stapeln: es würde immer noch nach 15 fragen — ein PRE-Trig wird übersprungen, wenn ein späteres PRE zurückschaut (§10.10.2). §10.10.2 beschreibt PRE auf einer Spur, nicht in einem Kit: es sagt nicht, ob 16 auf den Trig vor ihm auf diesem Subtrack zurückschaut oder irgendwo auf Spur 1.
:::

:::note
Eine Ghost Note, die ihren Münzwurf verliert, zählt, soweit es 16 betrifft, als eine Ghost
Note, die nie da war. Vor OS 1.4.0 war das nicht so: Elektrons Release Notes führen
[einen PROB-Lock, der bei der PRE- und NEI-Rechnung ausgelassen wurde](https://www.elektron.se/release-notes/tonverk-os-release-notes),
unter den Fehlern, die 1.4.0 behoben hat, und auf einem älteren OS fällt das Paar auseinander.
:::

## Step: Warum hat Schritt 16 nicht gespielt?
keys: []
source: community https://www.elektronauts.com/t/nei-and-pre-trig-conditions/51959
mode: any

Zwei Regeln entscheiden jetzt über diese letzten zwei Schritte, und sie werden in dieser
Reihenfolge aufgelöst: erst die Wahrscheinlichkeit auf 15, dann das PRE von 16 auf dem, was
die Wahrscheinlichkeit übrig gelassen hat. Der Simulator unten beginnt auf dem Kit, das du
gerade gebaut hast — die Kick mit ihrem 1:2-Auftakt, die Hi-Hats mit ihren Ghost Notes bei
50 % und PRE auf 16 — und gibt jedem Schritt einen Grund statt eines Klangs.

:::simulator

:::checkpoint
hear: Drücke vier- oder fünfmal Nächster Loop, und die Zeilen des Protokolls zeigen, wie das Paar auf 15 und 16 zusammen kommt und zusammen ausbleibt. Klick Schritt 16 in der Hi-Hat-Reihe an, und die Zeile unter dem Editor gibt das Schicksal dieses Schritts für den Loop, in dem du bist — den Trig, auf den er zurückgeschaut hat, und ob der gespielt hat; die Punkte im Protokoll tragen denselben Satz unter dem Zeiger. Setz die Chance von 15 auf 100, und 16 bleibt nicht mehr aus.
recover: Der Simulator zählt einen schlichten Trig, ohne Bedingung und ohne Wahrscheinlichkeit, als einen, auf den PRE zurückschauen kann, wie der Satz in §10.10.2 lautet; Besitzer anderer Elektron-Geräte mit derselben Regel sagen, ein bloßer Trig werde überhaupt nie ausgewertet.
:::

## Step: Ein Fill-Takt
keys: [TRK, KEYBOARD D1, TRIG 14, TRIG 15, TRIG 16, H, FUNC, FILL, UP, DOWN, YES]
leds: { TRIG 14: red, TRIG 15: red, TRIG 16: red }
source: manual §10.10.3, §10.10.2
mode: menu:FILL EDIT

Halte [TRK] und drücke [KEYBOARD D1], die zweite SUBTRACKS-Taste, für die Snare, und drücke
[TRIG 14], [TRIG 15] und [TRIG 16] — drei Snares, die sich am Ende des Takts drängen. TRIG
PAGE 1 ist immer noch die Seite vor dir: halte alle drei gedrückt und dreh [H] auf FILL, damit
sie nur spielen, während der FILL-Modus an ist. Dann halte [FUNC] und drücke [FILL] für das
FILL-EDIT-Menü, [UP]/[DOWN], bis MOMENTARY die gewählte Option ist, [YES], um es zu schließen,
und halte [FILL] über die letzte Zählzeit des Takts gedrückt.

:::checkpoint
screen: { menu: "FILL EDIT", items: [MOMENTARY, LATCHING], sel: 0 }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Mit gehaltenem [FILL] endet der Takt in einem Lauf von drei Snares in den nächsten hinein; lass los, und diese drei Schritte sind wieder still, Loop für Loop, während 5 und 13 weitermachen wie immer. Fünf Tasten auf dem Streifen jetzt, die drei neuen blinkend für die Bedingung darauf.
recover: Spielt der Lauf, ohne dass etwas gehalten wird, stehen entweder die drei Trigs noch auf dem Strich statt auf FILL, oder LATCHING ist die gewählte Option, und ein früheres Antippen hat den FILL-Modus eingeschaltet gelassen — drücke [FILL] einmal und hör noch einmal hin.
:::

## Step: Ein Wiederherstellungspunkt, dann ein Risiko
keys: [FUNC, KEYBOARD D#1, -, UP, DOWN, YES, NO, KEYBOARD C#1]
source: manual §10.10.6, §10.6
mode: menu:TRANSFORM

Halte [FUNC] und drücke [KEYBOARD D#1]: das Pattern, wie es dasteht, wird irgendwo
vorübergehend beiseitegelegt (§10.10.6). Jetzt halte [FUNC] und drücke [-] für das
TRANSFORM-Menü, geh mit [UP]/[DOWN] zu VELOCITY RANDOMIZE und drücke [YES]; [NO] schließt das
Menü. Hör einen oder zwei Loops lang zu, dann halte [FUNC] und drücke [KEYBOARD C#1], um
zurückzuholen, was du dir gemerkt hast.

:::checkpoint
screen: { menu: "TRANSFORM", items: [VELOCITY UNLOCK, VELOCITY RANDOMIZE, VELOCITY RAMP UP, VELOCITY RAMP DOWN, PLACEMENT RANDOMIZE, PLACEMENT REVERSE], sel: 1 }
hear: Jede Velocity auf der Spur landet auf einmal irgendwo neu — Hi-Hats laut, wo sie leise waren, Ghost Notes, die keine Ghost Notes mehr sind, das Abklingen des Snare-Rolls neu gebaut — und nach dem Zurückholen sind die Velocities wieder dort, wo Session 4 sie gelassen hat, die vier Ghost Notes sitzen wieder hinter den Zählzeiten. Was das Zurückholen zurücksetzt, ist das Pattern, das du dir eben gemerkt hast — Bedingungen, Wahrscheinlichkeit und Fill-Trigs eingeschlossen — nicht das aus Session 4.
recover: Hat sich nichts geändert, ist das [YES] nicht auf der markierten Zeile gelandet: öffne das Menü noch einmal und sieh, welche Aktion hervorgehoben ist, bevor du drückst. Bringt das Zurückholen die Velocities nicht zurück, hat das Speichern aus Schritt 1 sie noch.
:::

:::note
Eine Transformation bleibt nicht auf dem Subtrack, den du gerade ansiehst. §10.6 zieht seine
Grenze an der Spur, und auf einer Subtracks-Spur heißt das: das ganze Kit in einem Durchgang.
Die Auftakt-Kick bekommt mit den Hi-Hats eine neue Velocity, und jede Snare auch. Velocity und
sonst nichts — VELOCITY RANDOMIZE schreibt VEL-Locks, der Auftakt behält also sein 1:2 und die
drei neuen Snares ihr FILL. Besitzer bestätigen, dass die acht Subtracks zusammen gehen: sie
haben um eine Möglichkeit gebeten, eine Transformation auf einen Subtrack zu richten, und
[es gibt noch keine](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2057), und
ein anderer Bericht hat PLACEMENT RANDOMIZE
[Lock-Trigs bewegen, die nichts spielen](https://www.elektronauts.com/t/tonverk-feature-requests/238027/1559),
zusammen mit den Noten. VELOCITY UNLOCK ist ein schwererer Hammer, als sein Name vermuten
lässt: es nimmt jeden VEL-Lock von der Spur, die vier aus Session 4 eingeschlossen.
:::

## Step: PERFORM-Modus
keys: [FUNC, SETTINGS, TRK, FLTR, E]
leds: { TRK: green }
source: manual §10.12, §A.2.3
mode: grid-recording

Halte zuerst [FUNC] und drücke [SETTINGS]: wer den PERFORM-Modus verlässt, bringt das Pattern
auf seinen zuletzt gespeicherten Stand zurück (§10.12). Jetzt halte [FUNC] und drücke [TRK]: der PERFORM-Modus ist an, und [TRK]
leuchtet grün, solange er es ist (§10.12). Drücke [FLTR] und dreh Regler [E], FREQ, bei
laufendem Loop deutlich herunter, dann halte [FUNC] und drücke [TRK] noch einmal, um ihn zu
verlassen.

:::checkpoint
hear: Die Snare wird unter deiner Hand dumpf — der Filter gehört zu dem Subtrack, auf dem du bist (§A.2.3), Kick und Hi-Hats klingen also weiter wie gehabt — und sie bleibt dumpf, solange der PERFORM-Modus an ist. In dem Moment, in dem du ihn verlässt, ist die Snare wieder hell und das grüne Licht aus: die Änderung ist weg, und Speichern, während du drin warst, hätte sie auch nicht behalten (§10.12).
recover: Ist die Snare nach dem Verlassen dumpf geblieben, war [FUNC] beim zweiten Druck nicht unten; das grüne Licht ist das, worauf du achten musst. Hat sich beim Drehen gar nichts geändert, zeigt [FLTR] die Seite eines anderen Subtracks — halte [TRK] und drücke [KEYBOARD D1] für die Snare, und versuch es noch einmal.
:::

## Step: Speichern
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: grid-recording

Halte [FUNC] und drücke [SETTINGS] ein letztes Mal. Die sechzehn Tasten gehören noch der
Snare: zwei, die bei jedem Loop spielen, und drei, die auf deinen Daumen warten.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Derselbe Takt, mit dem du die Session begonnen hast, und keine zwei Loops davon gleich — eine Auftakt-Kick bei jedem zweiten Durchlauf, die Hälfte der Ghost Notes, eine antwortende Hi-Hat, die nur kommt, wenn ihre Frage kam, und ein Fill unter deinem Daumen.
recover: Fünf Tasten, und 14, 15 und 16 blinken. Sind diese drei dunkel, sind die Fill-Trigs auf einen anderen Subtrack gegangen: halte [TRK] und drücke [KEYBOARD D1] und sieh noch einmal hin — und fehlen sie auch dort, ist Schritt 6 drei Tastendrücke und einen Regler von oben entfernt.
:::

## What you now have

A01 ist der Takt, den Session 4 gespeichert hat, und er wiederholt sich nicht mehr. Eine fünfte
Kick kommt bei jedem zweiten Loop, die vier Ghost Notes würfeln jede um ihren Platz, eine
Hi-Hat auf dem letzten Schritt antwortet der Ghost Note davor oder schweigt mit ihr, und drei
Snares am Ende des Takts gehören [FILL] allein. Nichts wurde geladen und kein zweites Pattern
geschrieben: all das ist ein Parameter auf einer Seite, gesetzt auf Trigs, die du schon
hattest. Du hast außerdem die zwei Wege zurück — das Gemerkte, das du zurückholen kannst, und
das Speichern, zu dem dich der PERFORM-Modus zurückbringt — und die machen den Rest erst das
Risiko wert.

## Explore further

### Der Fill, der Platz macht
Gib der Snare auf 13 das Gegenteil einer FILL-Bedingung — die mit dem Strich darüber, ¬FILL
hier und im Simulator — und sie tritt beiseite, sobald [FILL] gehalten wird (§10.10.2). Die
drei neuen Snares ersetzen die alte, statt sich um sie zu drängen, und das ist es, was ein
Drum-Fill üblicherweise tut.

### LATCHING, für wenn deine Hände beschäftigt sind
Noch einmal [FUNC] + [FILL], [DOWN] auf LATCHING, [YES]: jetzt schaltet [FILL] den Modus mit
einem Antippen ein und aus, statt gehalten zu werden (§10.10.3). Praktisch, sobald deine
andere Hand an einem Regler ist, und leicht aus Versehen angelassen.

### Die andere Kick
Leg den 1:2-Auftakt von der Kick auf [KEYBOARD E1], die tiefe Kick von HELLO KIT: lösche
Schritt 15 auf [KEYBOARD C1], schreib ihn auf E1 und setz dort COND auf dieselbe Weise auf 1:2.
Der Takt behält seine vier Kicks auf den Zählzeiten, und jeden zweiten Durchlauf führt eine
tiefere in den Anfang.

### 1ST, ein Intro, das einmal passiert
1ST feuert einen Trig beim ersten Durchlauf des Patterns und nie wieder; dieselbe Bedingung
mit einem Strich darüber setzt diesen ersten Durchlauf aus und spielt bei allen übrigen
(§10.10.2). Ein Becken auf Schritt 1 mit 1ST — HELLO KIT hat ein langes auf [KEYBOARD C2] — und das
Pattern meldet sich an und macht dann weiter.

### NEI, im Simulator statt auf dem Kit
NEI schaut zur Seite: es fragt, wie die letzte Bedingung auf der Spur nebenan ausgegangen ist
— der mit der Nummer vor der, auf der du bist — und spielt, oder nicht, auf diese Antwort hin
(§10.10.2). Die zwei Spuren des Simulators sind genau dieses Paar. Was NEI für einen Subtrack
innerhalb eines Kits liest, sagt das Handbuch nicht.

### PROB, ohne etwas zu halten
Dreh [D], ohne eine Trig-Taste zu halten, und PROB wird zur Einstellung des Subtracks selbst
statt eines Trigs (§12.2). Jede Hi-Hat auf dem Subtrack würfelt dann um ihren Platz, und das
ist eine andere, nervösere Art von Takt als vier Ghost Notes, die allein würfeln.

### PERFORM-Modus auf zwei Patterns
Nur ein Pattern kann zugleich im PERFORM-Modus sein. Verlass es für ein anderes Pattern und
komm zurück, und deine Änderungen warten; schalte den PERFORM-Modus stattdessen dort drüben
ein, und die des ersten Patterns sind weg (§10.12).

## Next

Session 6 lässt die Drums in Ruhe und beginnt das zweite Kapitel: ein Bass auf Spur 2 und ein
Akkordpart auf Spur 3, von der Tastatur in a-Moll gespielt, auf den Spuren 2 und 3, die
der Beat frei lässt. Der Rhythmus ist fertig — von hier an gewinnt das Stück Noten.
