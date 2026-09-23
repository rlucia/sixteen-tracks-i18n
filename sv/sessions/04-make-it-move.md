---
number: 4
chapter: rhythm
slug: make-it-move
title: Få det att röra sig
goal: Ge beatet ghost notes, en filterlock, en snare-roll och en stämma du spelar in, och kvantisera den sedan.
needs: [Projektet från session 3, Anslutna hörlurar, "Ungefär sexton minuter"]
teaches: [parameter-locks, trig-preview, retrigs, micro-timing, live-recording, quantize, sequence-lanes]
simulator: null
ends: { keys16: { 5: red, 13: red } }
---

## Step: Var du är
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 3 lämnade dig i GRID RECORDING på spår 1 med subtrack 6, den stängda hi-haten, på de
sexton tangenterna. Går inte sequencern: tryck på [PLAY] och låt den gå — varje steg här
skrivs över loopen. Håll sedan [FUNC] och tryck på [SETTINGS] — den här sessionen skriver
lockar tvärs genom kitet, och den sparningen är läget du kan komma tillbaka till.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Hela beatet från spår 1 — kick, snare, stängd hi-hat och ditt ljud i clapens ställe — i loop från A01.
recover: En mörk remsa betyder att [RECORD] inte lyser: tryck på den för GRID RECORDING, håll sedan [TRK] och tryck på [KEYBOARD A1], den sjätte SUBTRACKS-tangenten, för att komma tillbaka till den stängda hi-haten. Börjar du här utan session 3? Den sessionen bygger det kit som den här får att röra sig, och den tar ungefär sexton minuter.
:::

## Step: Ghost notes
keys: [TRIG 3, TRIG 7, TRIG 11, TRIG 15, TRIG, B]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §10.10.1, §12.2
mode: grid-recording

Håll [TRIG 3], [TRIG 7], [TRIG 11] och [TRIG 15] nere samtidigt — de fyra hi-hats som faller
mellan slagen — och tryck, med dem fortfarande nere, på [TRIG], TRIG PARAMETERS-tangenten,
den till vänster om [SRC]. TRIG PAGE 1 öppnas; håll de fyra kvar och vrid DATA ENTRY-ratten
[B], VEL, ner till omkring 60.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [1] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Hi-hatsen på slagen står där de stod och de fyra mellan dem lägger sig bakom dem. VEL är den enda rutan på sidan som är ritad inverterad, och de fyra tangenter du höll blinkar rött medan de andra fyra lyser fast.
recover: Tystnade alla åtta hi-hats? Då hölls ingenting nere, och vridningen flyttade hela subtrackets VEL: vrid tillbaka upp, håll de fyra tangenterna och vrid igen. Räkna med att NOTE visar ett streck — §12.2 säger bara att den inte är tillgänglig på ett Subtracks-spår — och räkna med att de andra sju avläsningarna skiljer sig från teckningen, som är gjord ur det avsnittet och inte från en enhet.
:::

:::note
En lock du lägger här hör till subtracket du står på och till ingenting annat: varje subtrack
behåller sina egna inställningar på SRC, FLTR, AMP och MOD (§A.2.3), så den här vridningen
lämnar kicken och snaren precis som de var. FX-sidorna och send-nivåerna är undantaget — de
åtta delar dem genom supertracket, och det är därför en ägare som live-spelade in en
delay-send såg
[den landa på varje subtrack på en gång](https://www.elektronauts.com/t/tonverk-bug-reports/238306/1676)
och varför det
[inte finns något filter på supertracket att sträcka sig efter](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2263).
:::

## Step: Hör ett enda steg
keys: [TRIG 1, TRIG 3, YES]
source: manual §10.3
mode: grid-recording

Håll [TRIG 3] och tryck på [YES]: just det steget spelar, med sin nya VEL inbakad. Håll
[TRIG 1] och tryck på [YES] för hi-haten på slaget bredvid.

:::checkpoint
hear: Två hi-hats, en efter den andra, i de två volymer du just satte, ovanpå loopen som fortsätter gå under.
recover: Låter de två likadant, landade locken aldrig — gå tillbaka ett steg, håll de fyra tangenterna och se VEL bli inverterad medan du vrider på ratten. Om den här förhandslyssningen låter den hållna trigens eget subtrack eller det subtrack du har valt är inte avgjort någonstans vi har kunnat hitta; din enhet får avgöra det.
:::

## Step: En filterlock
keys: [FLTR, TRIG 9, E]
leds: { TRIG 9: red }
source: manual §10.10.1, §12.5
mode: grid-recording

Tryck på [FLTR] för FLTR PAGE 1. Håll [TRIG 9] — hi-haten på slag tre — och vrid DATA
ENTRY-ratten [E], FREQ, ner tills just den hi-haten blir matt.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [ATK, DEC, SUS, REL, FREQ 42, RESO, TYPE, ENV], invert: [4] }
hear: Sju hi-hats som de var, och en på slag tre med toppen borttagen. Steg 9 blinkar nu, vid sidan av de fyra ghost notes.
recover: Blev varje hi-hat matt på en gång? Då var [TRIG 9] inte nere när du vred: håll den först. Din enhet fyller alla åtta rutor på den här sidan med avläsningar; teckningen ger bara en åt rutan du ändrade.
:::

## Step: Ta bort en lock
keys: [TRIG 9, E]
source: manual §10.10.1
mode: grid-recording

Håll [TRIG 9] igen och tryck in DATA ENTRY-ratten [E] — tryck, vrid inte. FREQ-locken
lossnar och trigen står kvar där den är. Håll nu [TRIG 9] och vrid ner [E] igen:
exempelstycket behåller den här.

:::checkpoint
hear: Hi-haten på slag tre kommer tillbaka ljus, och blir matt igen när du lägger tillbaka locken.
recover: Försvann hi-haten helt? Då var det ett snabbt tryck och inte ett hållet, vilket tar bort trigen — tryck på [TRIG 9] en gång till för att skriva tillbaka den, och vet att varje lock den bar följde med (§10.10.1), så det här steget är värt att göra två gånger.
:::

## Step: Snare-rollen
keys: [TRK, KEYBOARD D1, TRIG 13, TRIG, E, F, G]
leds: { TRIG 5: red, TRIG 13: red }
source: manual §10.7, §12.2
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD D1], den andra SUBTRACKS-tangenten, för snaren. Håll
[TRIG 13] och tryck på [TRIG] för TRIG PAGE 1, och håll kvar: vrid [E] för att slå på RTRG,
[F] för att sätta RTIM till 1/32 och [G] för att ta RVEL upp mot 1, så att upprepningarna
växer i stället för att falna. Det är en utgångspunkt och inte det enda svaret.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG ON, RTIM 1/32, RVEL 0.5, COND —], invert: [4, 5, 6] }
keys16: { 5: red, 13: red }
hear: Snaren på slag fyra kommer som en kort roll: upprepningarna löper trigens egen LEN och slutar inom steg 13, en pickup in i nästa takt snarare än ett fill tvärs över den. Snaren på 5 är orörd, och på sidan — ritad här, inte avläst från en enhet — är de tre du vred de inverterade. Steg 13 blinkar nu, 5 lyser fast.
recover: En roll du inte hör beror oftast på att RTRG fortfarande är av — håll [TRIG 13] och se den avläsningen ändra sig innan du går nära RTIM. Rullar båda snarerna, släpptes [TRIG 13] innan du vred, och inställningen hamnade på hela subtracket i stället för på just den trigen: vrid tillbaka RTRG till av utan att hålla något, och börja sedan om med tangenten nere. För plottrigt? [F] tillbaka till 1/16 ger en upprepning per steg, 1/12 ger trioler. Ingen har publicerat siffror för det här; din enhet får avgöra vilka som är snyggast.
:::

:::note
Två saker på den här sidan fångar folk. Det finns ingen RLEN: den fjärde av
retrig-parametrarna är COND, ett trig-villkor, som är session 5:s ämne — det som formar en
roll är RVEL, och den arbetar mot trigens egen VEL. Och manualen är av två sinnen om vilken
ratt som slår på RTRG: regeln i §6.3 är att en parameter svarar på ratten den sitter
ovanför, vilket lägger RTRG på [E], medan meningen i §12.2 pekar ut ratten [A]. Vrid på
ratten under parametern, och säger din enhet något annat har din enhet rätt.
:::

## Step: Putta clapen sent
keys: [TRK, KEYBOARD F1, TRIG 7, RIGHT, UP, DOWN]
source: community https://www.youtube.com/watch?v=7lFFSUOsXsA
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD F1], den fjärde SUBTRACKS-tangenten, för clapen
— ditt ljud sedan session 3. Håll [TRIG 7] och tryck på [RIGHT]: MICRO TIMING-rutan öppnas och visar det
stegets förskjutning i procent (§10.5). Håll kvar tangenten — [RIGHT] igen puttar den längre
i stora hopp, [UP] och [DOWN] flyttar den lite i taget — och släpp [TRIG 7] för att lämna.

:::checkpoint
screen: { menu: "MICRO TIMING", items: [+25%] }
hear: Clapen på 7 landar en aning efter steget den sitter på, och takten lutar hårdare in i nästa. Avläsningen är ritad här puttad sent; hur långt ett tryck tar den är enhetens sak att berätta.
recover: Öppnades ingenting? Rutan vill ha trig-tangenten hållen först och pilen sedan, och ett steg utan trig har ingenting att tajma. Puttad för långt: [LEFT] går tillbaka, och förskjutningen sparas med patternet, så den överlever sparningen på slutet (§10.5).
:::

## Step: Spela in något
keys: [RECORD, PLAY, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Håll [RECORD] nere och tryck en gång på [PLAY]: [RECORD] börjar blinka rött och LIVE
RECORDING är på medan patternet fortfarande loopar. Släpp båda, och tryck sedan kort på
[KEYBOARD G1], den femte SUBTRACKS-tangenten, i takt med beatet under en takt eller två.
Tryck på [PLAY] ensam för att komma ut igen.

:::checkpoint
hear: En femte röst ur kitet där dina fingrar lade den, ovanpå de fyra du skrev för hand, och loopen slutar aldrig.
recover: Lyste [RECORD] fast i stället för att blinka? Då gick [PLAY] ner före [RECORD] och du är i GRID RECORDING: tryck på [RECORD] för att släcka den och börja om. En femte tangent som inte ger något ljud är ett tomt subtrack i ditt kit — spela en som låter och använd det subtracket i stället.
:::

:::note
[PLAY] betyder två olika saker runt det här steget. Tryckt en andra gång medan [RECORD]
fortfarande hålls nere slår den på och av automatisk kvantisering för det du är på väg att
spela in (§10.4); låt det vara av, eftersom nästa steg gör det jobbet för hand och det finns
inget att dra om maskinen redan har dragit det. Tryckt när [RECORD] har släppts lämnar den
live-inspelningen och patternet fortsätter gå.
:::

## Step: Kvantisera det du spelade
keys: [FUNC, KEYBOARD G#1, TRIG 1, TRIG, E, F, NO]
source: manual §10.8
mode: menu:QUANTIZE

Håll [FUNC] och tryck på [KEYBOARD G#1] för QUANTIZE-menyn, och tryck på [TRIG 1] för att
rikta den mot spår 1. Vrid DATA ENTRY-ratten [E], TRK, upp lite i taget och stanna i samma
stund som stämman du spelade sitter tajt: en bit upp är där du vill ha den, och ditt öra
väljer punkten. Ratten [F], PATTERN, skulle göra samma sak med varje spår i patternet på en
gång, och den här sessionen låter den vara; [NO] stänger menyn.

:::checkpoint
screen: { menu: "QUANTIZE", items: [TRK 0, PATTERN 0] }
hear: Båda inställningarna börjar på noll. Kicken och snaren rör sig inte, för de skrevs på rutnätet och ligger redan på det. Det TRK drar är allt som inte gör det: stämman du spelade för hand, och clapen du puttade sent två steg tillbaka (§10.8) — och det är därför du slutar klättra så snart tagningen sitter.
recover: Öppnades inte menyn? Prova [FUNC] + [TRIG] i stället, kombinationen §10.4 ger för samma meny där §10.8 ger [FUNC] + [KEYBOARD G#1]; din enhet får avgöra vilken av de två den tar. Gick du hela vägen och tappade den sena clapen? Gå tillbaka till clapens subtrack, håll [TRIG 7] och tryck på [RIGHT] för att putta ut den igen (§10.5); kvantisering avrundar till närmaste steg, och för en mikrotajmad trig behöver det inte vara steget den skrevs på (§10.8). Och låter tagningen ändå inte som det du spelade, inbillar du dig inte: [en ägare rapporterar samma sak](https://www.elektronauts.com/t/tonverk-user-thread/238631/1812), utan svar i tråden.
:::

## Step: Se lockarna för sig
keys: [TRK, KEYBOARD A1, RECORD, FUNC, UP, DOWN, NO]
leds: { RECORD: red }
source: manual §10.3.2
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD A1], den sjätte SUBTRACKS-tangenten, för att komma
tillbaka till den stängda hi-haten, och tryck sedan på [RECORD] för GRID RECORDING. Håll
[FUNC] och tryck på [UP] för SEQUENCE LANE-menyn, och tryck på [UP]/[DOWN] tills P-LOCKS är
den valda. Sätt tillbaka den på NOTES + P-LOCKS innan du lämnar, och tryck sedan på [NO].

:::checkpoint
screen: { bank: "A01", name: "P-LOCKS", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Inget i ljudet ändras. Lanens namn skrivs ut tvärs över displayens överkant bredvid patternsidorna, och varje hi-hat blir svagt röd — alla åtta, 1, 5 och 13 rena och 3, 7, 9, 11 och 15 med sina lockar. Ingenting blinkar: §10.3.2 sorterar den här lanen efter typen av trig, inte efter vad som är lockat på den, och en note-trig som bär en lock är fortfarande en note-trig (§10.2.1), så alla åtta är samma sorts trig här. Blinkar 3, 7, 9, 11 och 15 i stället läser din enhet en lockad ton som båda sorterna — en sak för kolofonen, och ingenting är trasigt i något av fallen.
recover: [UP] och [DOWN] vandrar genom de tre lanerna som en enda lista, så vilken du än trycker på: fortsätt tills P-LOCKS är den valda och lämna den på NOTES + P-LOCKS efteråt. Är hi-hatsen helröda i stället för svaga, står du fortfarande på NOTES, där note-trigs är röda och lock-trigs svagt gula (§10.3.2) — fortsätt vandra i listan. Elektrons egen presentatör fick en lock-trig att se ut att gå att ta bort från NOTES-läget, [vilket manualen säger inte kan hända](https://www.youtube.com/watch?v=7lFFSUOsXsA); din enhet får avgöra det också.
:::

## Step: Spara
keys: [FUNC, SETTINGS, TRK, KEYBOARD D1]
source: manual §9.1.1
mode: grid-recording

Håll [FUNC] och tryck på [SETTINGS]: sparat, i tystnad, så som varje sparning här går till.
Håll sedan [TRK] och tryck på [KEYBOARD D1], den andra SUBTRACKS-tangenten, och titta på
snaren en sista gång — 5 och 13, med 13 blinkande för rollen på den. Den bilden är den här
sessionens vinjett.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: Beatet med allt du lade i det, sparat: ghost notes, den matta hi-haten, rollen och stämman du spelade.
recover: Två tangenter och inte fler är rätt — snaren har alltid haft två trigs, och rollen bor inuti en av dem i stället för på egna steg.
:::

## What you now have

A01 är samma kit och samma fyra röster, i rörelse. På den stängda hi-haten sitter fyra ghost
notes bakom de fyra på slagen och ett steg på slag tre är filtrerat matt; snaren på 13 är en
kort roll, en pickup in i nästa takt; clapen på 7 sitter en aning sent om du
lämnade TRK under toppen, och exakt på steget om du inte gjorde det; och ett femte subtrack
bär en stämma du spelade med händerna och sedan drog in på rutnätet. Allt är parameterlockar
och tajming på trigs du redan hade, allt är sparat, och A02 har fortfarande kvar session 2:s
kopia av beatet.

## Explore further

### Randomisera velocity, och ta tillbaka det
[FUNC] + [-] öppnar TRANSFORM-menyn, som verkar på varje trig på spåret du står på (§10.6).
VELOCITY RANDOMIZE skriver en VEL-lock på allihop; VELOCITY UNLOCK tar bort varenda VEL-lock
som finns — de fyra ghost notes inräknade — så prova den på clapens subtrack i
stället för på den stängda hi-hatens, och håll din sparning inom räckhåll.

### En lock utan ton under sig
I GRID RECORDING skriver [FUNC] + [TRIG 8] på ett tomt steg en lock-trig: gul i stället för
röd, som bär parameterändringar men triggar ingenting (§10.2.1). Lägg en på steg 8 av den
stängda hi-haten, locka FREQ på den, och hör nästa hi-hat komma ut ur ett filter som rörde
sig medan ingenting spelade.

### PROB, två rutor bort från VEL
PROB ligger på TRIG PAGE 1 bredvid parametrarna du har vridit på, på ratten [D], och den
sätter hur troligt det är att en trig spelar över huvud taget — 100% som standard, omprövat
varje gång steget kommer runt (§12.2). Locka den till 50% på en ghost note och hör takten
sluta upprepa sig själv. Session 5 är byggd på den idén.

## Next

Session 5 får patternet att sluta upprepa sig: trig-villkor på kitet du har, en kick som
kommer varannan loop, chans på samma ghost notes, och en fill-takt du håller nere — allt
inuti A01, utan att något nytt laddas. Simulatorn på den sidan svarar på den enda fråga som
villkor alltid väcker, nämligen varför en trig inte spelade.
