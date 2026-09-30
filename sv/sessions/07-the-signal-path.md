---
number: 7
chapter: sound
slug: the-signal-path
title: Signalvägen
goal: Skicka trummorna genom en buss som pressar ihop dem, låt ackorden andas på en egen buss, ge dem ett rum, och slå på en effekt från en tangent.
needs: [Projektet från session 6, Hörlurar anslutna, "Ungefär sexton minuter"]
teaches: [routing, bus, compressor, shape-envelope, send-fx, parameter-locks, trig-preview, effect-scenes]
simulator: routing
ends: { keys16: { 15: red, 16: red } }
---

## Step: Där du är
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

Session 6 lämnade A01 med kitet på spår 1, basslinjen på spår 2 och fyra ackord på spår 3, och
alla går raka vägen till mixern. Står sequencern still, tryck på [PLAY]. Håll [FUNC] nere och tryck
på [SETTINGS] innan routingen ändras: allt i den här sessionen ändrar vart ljudet går, inte vad
spåren spelar.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: Stycket som session 6 lämnade det: beatet, basslinjen som rör sig under det, ett ackord per takt.
recover: Börjar du här utan session 6? Den sessionen skriver basen och ackorden, och den tar ungefär sexton minuter; vilket pattern som helst med trummor på spår 1 och ackord på spår 3 fungerar lika bra.
:::

## Step: Vart ljudet går
keys: [FUNC, MUTE, UP, DOWN]
source: manual §4.4.1
mode: menu:ROUTING

Håll [FUNC] nere och tryck på [MUTE]: ROUTING-menyn (§4.4.1). [UP] och [DOWN] växlar mellan dess två
grupper, ljudspåren 1–8 och bussarna och sendspåren. På spåren står det MIX AB på varje rad: varje
spår går till mixern, genom huvudeffekten, till utgångarna A/B och hörlurarna. Där börjar varje spår
i ett nytt pattern.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 MIX AB", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: Ingenting ändras: menyn visar bara vägarna.
recover: En lista med bussar och sendspår i stället för TRK1 till TRK8: den andra gruppen — [UP] eller [DOWN] tillbaka till spåren.
:::

## Step: Trummorna till buss 1
keys: [TRIG 1, TRIG 9]
source: manual §4.4.1, §A.2.3
mode: menu:ROUTING

Med ROUTING öppen, håll [TRIG 1] och tryck på [TRIG 9]. Spår 1 går nu till BUS 1, som är spår 9,
och raden lyder TRK1 BUS 1. Kitet flyttar sig i ett stycke: dess åtta ljud delar spår 1:s enda väg
(§A.2.3). Bussen lämnar trummorna oförändrade vidare till mixern tills en effekt läggs på den.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: Trummorna precis som förut: en buss utan effekt släpper igenom ljudet.
recover: Spår 9 kom upp för redigering, eller trummorna ändrades medan raden fortfarande lyder TRK1 MIX AB: tangenterna trycktes med menyn stängd. Bara ROUTING-menyn, eller ROUT på spår 1:s FX-sida 1, routar ett spår (§12.8) — [FUNC] + [MUTE] och greppet igen.
:::

:::simulator

## Step: Pressa ihop dem
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO]
source: manual §11.5, §13.5, §A.3.4
mode: menu:TRACK SETUP

Håll [TRK] och tryck på [TRIG 9]: buss 1 är det aktiva spåret. Håll [FUNC] och tryck på [FX]:
TRACK SETUP öppnas på bussens första insert, FX1. [UP]/[DOWN] till COMPRESSOR, och [YES] lägger den
i sloten; [NO] stänger menyn. Tryck på [FX] tills FX-sida 2, kompressorns sida (§13.5). Sänk THR
tills kicken och snaren börjar trycka ner nivån, ställ RAT på 4.00 och höj MUP tills trummorna är
lika starka som förut (§A.3.4).

:::checkpoint
screen: { menu: "FX 1", items: ["BYPASS", "CHRONO PITCH", "COMB ± FILTER", "COMPRESSOR"], sel: 3 }
hear: Kicken och snaren närmare hi-hatsen i nivå, hela kitet tätare och jämnare, lika starkt som förut.
recover: Trummorna svagare än förut: MUP står fortfarande lågt — höj den. Ingen skillnad alls: spår 1 ligger inte på BUS 1 (steg 3), eller så hamnade kompressorn på ett annat spår — [TRK] + [TRIG 9] och [FUNC] + [FX] igen.
:::

## Step: Ackorden till buss 2
keys: [FUNC, MUTE, TRIG 3, TRIG 10, NO]
source: manual §4.4.1
mode: menu:ROUTING

Håll [FUNC] och tryck på [MUTE] igen. Håll [TRIG 3] och tryck på [TRIG 10]: ackorden går till BUS
2, spår 10. Tryck på [NO] för att stänga menyn.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 BUS 2", "TRK4 MIX AB"], sel: 2 }
hear: Ackorden oförändrade, trummorna fortfarande ihoppressade på buss 1.
recover: TRK3 lyder fortfarande MIX AB: [TRIG 10] trycktes utan att [TRIG 3] hölls — håll först, tryck sedan. TRK3 lyder BUS 1: [TRIG 9] i stället för [TRIG 10].
:::

## Step: Bussen andas
keys: [TRK, TRIG 10, RECORD, TRIG 1, TRIG 5, TRIG 9, TRIG 13, AMP]
leds: { RECORD: red }
source: manual §13.2, §A.2.6
mode: grid-recording

Håll [TRK] och tryck på [TRIG 10]: buss 2 är det aktiva spåret. Tryck på [RECORD] för GRID
RECORDING och tryck på [TRIG 1], [TRIG 5], [TRIG 9] och [TRIG 13]: fyra trigs på buss 2:s egen
sequencer. En busstrig spelar inget ljud; den startar bussens Shape-envelope (§A.2.6). Tryck på [AMP]
för dess sida: ATK kort, DEC tillräckligt lång för att nå nästa slag, och ENV vriden långt från 0.
Nu dyker ackorden och sväller igen med vart och ett av de fyra.

:::note
Åt vilket håll ENV ska vridas för att ackorden ska dyka är inte avgjort: Red Means Recording vrider
den under noll ([videon](https://www.youtube.com/watch?v=Ku3u0uUJoSE&t=977)), umonox vrider den
uppåt med kort decay ([videon](https://www.youtube.com/watch?v=bN-HX1n-0cQ&t=147)). Vrid den tills
ackorden dyker på slaget.
:::

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Ackorden pulserar fyra gånger per takt, dyker på varje slag och stiger tillbaka före nästa.
recover: Trigsen lyser men ackorden står still: ENV står på 0. Ackorden andas en takt och står still i tre: buss 2 går 64 steg — med buss 2 aktivt, [FUNC] + [PAGE], [FUNC] och [E] till LENGTH 16, [NO]. Trigsen lyser, ENV är inställd, och ändå inget: ägare rapporterar att busstrigs på 1.4.1 kan sluta starta envelopen tills maskinen startas om ([rapporten](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2569)) — spara, stäng av och slå på.
:::

## Step: Ett rum för ackorden
keys: [TRK, TRIG 3, FX]
source: manual §12.8, §5.3.4
mode: playback

Håll [TRK] och tryck på [TRIG 3]. Tryck på [FX] för FX-sida 1, där spårets routing och dess tre
sends finns (§12.8). Vrid upp SND3 med ratten under den, ungefär till hälften: ackorden går till buss
2 som förut, och en kopia av dem går till spår 15, sendspåret som har reverben i ett nytt pattern
(§5.3.4).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3, params: [SND1 0, SND2 0, SND3 64, "ROUT BUS2"], invert: [2] }
hear: En svans efter varje ackord, rummet bakom dem; trummorna och basen torra.
recover: Ett svajande, fördubblat ljud i stället för en svans: SND1 gick upp — spår 13 har en chorus; ställ tillbaka den på 0 och höj SND3. Ingen svans: spår 15 har något annat i det här patternet ([TRK] + [TRIG 15] visar det), eller så gick SND3 upp på basen — [TRK] + [TRIG 3] först.
:::

## Step: En scen på en tangent
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO, RECORD, TRIG 15, TRIG 16, TRIG, D]
leds: { RECORD: red }
source: manual §10.3, §13.2, §13.6, §A.3.12
mode: grid-recording

Håll [TRK] och tryck på [TRIG 9]. Håll [FUNC] och tryck på [FX], tryck på [FX] igen för den andra
sloten, FX2, och [UP]/[DOWN] till LOW-PASS FILTER, [YES], [NO]. På FX-sida 3, filtrets sida
(§13.6), vrid FREQ hela vägen upp. Tryck på [RECORD] för GRID RECORDING och tryck på [TRIG 15] och
[TRIG 16]: två trigs på buss 1. Tryck på [TRIG] för TRIG-sidan, håll [TRIG 15] och vrid [D], PROB,
till 0 %, och sedan samma sak medan du håller [TRIG 16]: ingen av dem spelar någonsin av sig själv
(§13.2). Tillbaka på FX-sida 3, håll [TRIG 15] och vrid FREQ nästan helt stängd; håll [TRIG 16] och
vrid FREQ ner och sedan hela vägen upp igen, så att den trigen bär filtret öppet. Tryck nu på
[TRIG 15] + [YES], trigtangenten först: trummorna hamnar bakom en vägg och stannar där.
[TRIG 16] + [YES]: de kommer tillbaka (§10.3).

:::checkpoint
keys16: { 15: red, 16: red }
hear: Med [TRIG 15] + [YES] trummorna dova och avlägsna under basen och ackorden, takt efter takt; med [TRIG 16] + [YES] ljusa igen.
recover: Väggen försvinner aldrig av sig själv: så fungerar ett lock på en buss — det håller tills en annan trig ändrar det ([vad ägare säger](https://www.elektronauts.com/t/tonverk-user-thread/238631/998)); [TRIG 16] + [YES] öppnar filtret igen. Trummorna blir dova av sig själva en gång per takt: PROB på steg 15 står inte på 0 % — håll [TRIG 15] på TRIG-sidan och vrid ner [D]. Ingenting alls händer: locket hamnade på FX-sida 2, på kompressorn — FREQ ligger på FX-sida 3.
:::

## Step: Spara
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Håll [FUNC] och tryck på [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: Stycket routat: trummorna ihoppressade, ackorden som andas in i sitt rum, basen raka vägen till mixern.
recover: Ingen skärm sa att projektet skrevs: [FUNC] var inte nere när [SETTINGS] trycktes. Tryck på dem tillsammans igen.
:::

## What you now have

Kitet går genom buss 1, där en kompressor håller ihop det och ett lågpassfilter väntar på att
[TRIG 15] + [YES] ska stänga det och [TRIG 16] + [YES] öppna det. Ackorden går genom buss 2, vars
egna fyra trigs får dem att andas på varje slag, och skickar en kopia av sig själva in i reverben på
spår 15. Basen går raka vägen till mixern. Routingen hör till A01, och den är sparad.

## Explore further

### Routa om medan det spelar
I ROUTING, [DOWN] till bussarna, håll [TRIG 10] och tryck på [KEYBOARD A1]: buss 2 går till OUT CD,
raka vägen till utgångarna C/D, och ackorden lämnar hörlurarna och utgångarna A/B. Med ingenting
inkopplat i C/D är de borta. [TRIG 10] och LEVEL/DATA ställer tillbaka den på MIX AB (§4.4.1).

### Ordningen efter gehör
På buss 1 når [FUNC] + [FX] och [FX] två gånger till den tredje undersidan: markera SWAP FX1/FX2 och
tryck på [YES] (§11.5.4). Nu kommer filtret före kompressorn. Slå på scenen i båda ordningarna och
behåll den du föredrar.

### Stoppa andningen med en tangent
Ge buss 2:s fyra trigs villkoret ¬FILL (§10.10.2): ackorden andas så länge [FILL] är uppe och står
still medan den hålls nere.

### Mutea bussen
[MUTE] + [TRIG 10] mutear buss 2. Dess trigs stannar och ackorden står still, men de hörs fortfarande:
att mutea en buss stoppar dess sequencer, inte ljudet som går genom den
([vad ägare säger](https://www.elektronauts.com/t/buses-mute-question/244694/1)).

### Röstens egen ordning
Varje ljudspår skickar sitt ljud genom en overdrive och två filter, i en ordning du väljer:
[FUNC] + [FLTR] på spår 3, sedan [LEFT]/[RIGHT] (§11.3.1), och lyssna på ackorden i varje ordning.

## Next

Session 8 lägger till ett pad på spår 4 som rör sig av sig självt, med LFO:er och en
modulationsenvelope på ljudet.
