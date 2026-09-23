---
number: 5
chapter: rhythm
slug: variation-without-new-patterns
title: Variation utan nya patterns
goal: Få ett pattern att ändra sig varje loop med villkor, chans och ett fill, och lär dig de två skyddsnäten innan du spelar hasard med det.
needs: [Projektet från session 4, Anslutna hörlurar, "Ungefär sexton minuter"]
teaches: [trig-conditions, chance, fill, transform, memorise-recall, perform]
simulator: conditions
ends: { keys16: { 5: red, 13: red, 14: red, 15: red, 16: red } }
---

## Step: Var du är
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 4 lämnade dig i GRID RECORDING på spår 1 med subtrack 2, snaren, på de sexton
tangenterna. Går inte sequencern: tryck på [PLAY] och låt den gå — allt här bedöms loop för
loop, så ett stoppat pattern visar dig ingenting av det. Håll sedan [FUNC] och tryck på
[SETTINGS]: den här sessionen chansar med patternet två gånger, och den sparningen är
golvet under båda.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: Kitet från session 4 som går runt: ghost notes bakom hi-hatsen, den matta hi-haten på slag tre, rollen in i nästa takt och stämman du spelade in. Två tangenter tända på remsan — snaren på 5 och 13, med 13 blinkande för retrigen på den.
recover: En mörk remsa betyder att [RECORD] inte lyser: tryck på den för GRID RECORDING. En remsa med åtta tangenter på är den stängda hi-haten och inte snaren — håll [TRK] och tryck på [KEYBOARD D1], den andra SUBTRACKS-tangenten. Börjar du här utan session 4? Den sessionen skriver de lockar som den här varierar, och den tar ungefär sexton minuter.
:::

## Step: En kick som kommer varannan loop
keys: [TRK, KEYBOARD C1, TRIG 15, TRIG, H]
leds: { TRIG 15: red }
source: manual §10.10.2, §12.2
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD C1], den första SUBTRACKS-tangenten, för kicken, och tryck
sedan på [TRIG 15] för att lägga en kick där subtracket inte hade någon — en pickup in i
toppen av takten. Håll [TRIG 15] nere, tryck på [TRIG] för TRIG PAGE 1, och vrid DATA
ENTRY-ratten [H], COND, tills den visar 1:2.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND 1:2], invert: [7] }
keys16: { 1: red, 5: red, 9: red, 13: red, 15: red }
hear: Pickupen kommer, sitter över nästa varv och är tillbaka på varvet därpå — A:B räknar hur många gånger patternet har spelat, inte var du är i takten (§10.10.2). Steg 15 blinkar mot de fyra fasta kickarna, så som varje trig som bär en lock gör, och COND är den enda inverterade rutan på sidan.
recover: Kommer pickupen varje loop, står COND fortfarande på strecket: håll [TRIG 15] nere och se den avläsningen ändra sig medan du vrider på [H], i stället för att titta på tangenterna. Kommer den aldrig alls, har du gått förbi 1:2 — villkoren är en enda lista på en enda ratt, och grannen 2:2 spelar på exakt de loopar som 1:2 sitter över, även om §10.10.2 ger de två bara som exempel och inte som en ordning att räkna med. De andra sju avläsningarna på teckningen kommer från §12.2, inte från en enhet.
:::

## Step: Chans på ghost notes
keys: [TRK, KEYBOARD A1, TRIG 3, TRIG 7, TRIG 11, TRIG 15, D]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §12.2
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD A1], den sjätte SUBTRACKS-tangenten, för den stängda
hi-haten — TRIG PAGE 1 ligger kvar framför dig. Håll [TRIG 3], [TRIG 7], [TRIG 11] och
[TRIG 15], session 4:s fyra ghost notes, och vrid ratten [D], PROB, ner till 50%.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 50%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [3] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Ungefär hälften av ghost notes dyker upp på en given loop, och en annan hälft på nästa: myntet kastas om varje gång ett steg kommer runt (§12.2). Steg 3, 7, 11 och 15 blinkar nu för locken de bär, och 1, 5, 9 och 13 lyser fast — de fyra hi-hatsen på slagen är orörda, så takten behåller sin form medan den slutar upprepa sig själv.
recover: Börjar de fyra hi-hatsen på slagen också falla bort, hamnade PROB på subtracket i stället för på de fyra trigsen: med ingenting hållet, ta tillbaka den till 100%, håll sedan [TRIG 3], [TRIG 7], [TRIG 11] och [TRIG 15] och vrid på [D] igen. Låter ghost notes likadana loop efter loop: titta på avläsningen — 50% är siffran här, och allt över ungefär 90% går att ta för säkerhet över en handfull takter.
:::

## Step: Ett svar som behöver sin fråga
keys: [TRIG 16, H]
leds: { TRIG 16: red }
source: manual §10.10.2
mode: grid-recording

Tryck en gång på [TRIG 16]: en hi-hat på taktens sista steg, där det här subtracket inte
hade någon. Håll den och vrid [H] fram till PRE: trigen låter bara om den som sequencern
vägde före den också lät (§10.10.2).

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red, 16: red }
hear: Taktens två sista steg kommer som ett par eller inte alls — när ghost noten på 15 vinner sitt myntkast svarar 16 på den; när 15 sitter över sitter 16 över med den. Båda tangenterna blinkar, 15 för sin chans och 16 för sitt villkor.
recover: Spelar 16 på varje loop, står COND fortfarande på strecket: håll [TRIG 16] och vrid [H] ett klick i taget, förbi FILL-paret, tills PRE är avläsningen. Och frestas du att stapla en andra PRE ovanpå den här, skulle den fortfarande fråga om 15 — en PRE-trig hoppas över när en senare PRE tittar bakåt (§10.10.2). En sak som §10.10.2 avgör för ett spår men inte för ett kit: om trigen som 16 tittar tillbaka på är den närmast före på det här subtracket eller den närmast före var som helst på spår 1. Din enhet får avgöra det; det här paret är skrivet efter den första läsningen.
:::

:::note
En ghost note som förlorar sitt myntkast räknas, så långt 16 är berörd, som en ghost note som
aldrig fanns där. Det är värt att säga högt, för så har det inte alltid varit: Elektrons egna
release notes listar [en PROB-lock som lämnades utanför PRE- och
NEI-räkningen](https://www.elektron.se/release-notes/tonverk-os-release-notes) bland de
buggar OS 1.4.0 rättade, och 1.4.0 är versionen den här kursen är skriven mot. På ett äldre
OS faller paret isär.
:::

## Step: Varför spelade inte steg 16?
keys: []
source: community https://www.elektronauts.com/t/nei-and-pre-trig-conditions/51959
mode: any

Två regler avgör nu de sista två stegen, och de löses i den ordningen: chansen på 15 först,
sedan 16:s PRE ovanpå det chansen lämnade efter sig. Simulatorn nedan börjar på kitet du
just har byggt — kicken med sin 1:2-pickup, hi-hatsen med sina 50-procentiga ghost notes och
PRE på 16 — och ger varje steg ett skäl i stället för ett ljud.

:::simulator

:::checkpoint
hear: Tryck på Nästa loop fyra eller fem gånger så visar loggens rader att paret på 15 och 16 kommer tillsammans och uteblir tillsammans. Klicka på steg 16 på hi-hat-raden så ger raden under editorn det stegets öde för loopen du är på — trigen den tittade tillbaka på, och om den spelade; skivorna i loggen bär samma mening under pekaren. Sätt chansen på 15 till 100 och 16 slutar utebli.
recover: Ingenting här är ett hörselprov — simulatorn ritar regeln, inte kitet, och dess enda ljud är ett klick. En sak måste den ta ställning i: om en vanlig trig, utan villkor och utan chans på sig, är den trig PRE tittar tillbaka på. Den läser meningen i §10.10.2 bokstavligt och tittar tillbaka på den senaste trig den utvärderade, medan ägartrådar om andra Elektron-lådor med samma regel säger att en naken trig aldrig utvärderas alls. Din enhet får avgöra det.
:::

## Step: En fill-takt
keys: [TRK, KEYBOARD D1, TRIG 14, TRIG 15, TRIG 16, H, FUNC, FILL, UP, DOWN, YES]
leds: { TRIG 14: red, TRIG 15: red, TRIG 16: red }
source: manual §10.10.3, §10.10.2
mode: menu:FILL EDIT

Håll [TRK] och tryck på [KEYBOARD D1], den andra SUBTRACKS-tangenten, för snaren, och tryck
på [TRIG 14], [TRIG 15] och [TRIG 16] — tre snares som trängs i slutet av takten. TRIG
PAGE 1 är fortfarande sidan framför dig: håll alla tre nere och vrid [H] till FILL, så att de
spelar bara medan FILL-läget är på. Håll sedan [FUNC] och tryck på
[FILL] för FILL EDIT-menyn, [UP]/[DOWN] tills MOMENTARY är det valda alternativet, [YES] för
att stänga den, och håll [FILL] nere genom taktens sista slag.

:::checkpoint
screen: { menu: "FILL EDIT", items: [MOMENTARY, LATCHING], sel: 0 }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Med [FILL] hållen slutar takten i en räcka om tre snares in i nästa; släpp och de tre stegen är tysta igen, loop efter loop, medan 5 och 13 fortsätter som de alltid har gjort. Fem tangenter på remsan nu, de tre nya blinkande för villkoret på dem.
recover: Spelar räckan utan att något hålls nere, står antingen de tre trigsen fortfarande på strecket i stället för på FILL, eller så är LATCHING det valda alternativet och ett tidigare tryck lämnade FILL-läget påslaget — tryck en gång på [FILL] och lyssna igen. Om [FILL]-tangenten själv lyser medan den hålls nere, och i vilken färg, står inte i manualen och ingen annanstans vi har kunnat hitta; din enhet får avgöra det.
:::

## Step: En återställningspunkt, sedan en risk
keys: [FUNC, KEYBOARD D#1, -, UP, DOWN, YES, NO, KEYBOARD C#1]
source: manual §10.10.6, §10.6
mode: menu:TRANSFORM

Håll [FUNC] och tryck på [KEYBOARD D#1]: patternet som det står läggs undan någonstans
tillfälligt (§10.10.6). Håll nu [FUNC] och tryck på [-] för TRANSFORM-menyn, vandra med
[UP]/[DOWN] till VELOCITY RANDOMIZE och tryck på [YES]; [NO] stänger menyn. Lyssna en loop
eller två, håll sedan [FUNC] och tryck på [KEYBOARD C#1] för att återkalla det du
memorerade.

:::checkpoint
screen: { menu: "TRANSFORM", items: [VELOCITY UNLOCK, VELOCITY RANDOMIZE, VELOCITY RAMP UP, VELOCITY RAMP DOWN, PLACEMENT RANDOMIZE, PLACEMENT REVERSE], sel: 1 }
hear: Varje velocity på spåret landar någon annanstans på en gång — hi-hats starka där de var svaga, ghost notes som inte längre är ghost notes, snare-rollens uttoning ombyggd — och efter återkallningen är velocityn tillbaka där session 4 lämnade den, de fyra ghost notes sitter bakom slagen igen. Det återkallningen lägger tillbaka är patternet du memorerade för en stund sedan — villkor, chans och fill-trigs inräknade — inte session 4:s.
recover: Ändrades ingenting? Då landade inte [YES] på den markerade raden: öppna menyn igen och se vilken åtgärd som är utpekad innan du trycker. Om återkallningen lägger tillbaka de gamla velocityvärdena exakt eller bara ungefär är den enda delen av det här som ingen har skrivit ner; din enhet får avgöra det, och tills den gör det är sparningen från steg 1 det riktiga golvet.
:::

:::note
En transform stannar inte på subtracket du tittar på. §10.6 drar sin gräns vid spåret, och på
ett Subtracks-spår läses det som hela kitet i en enda sväng: pickup-kicken får en ny velocity
tillsammans med hi-hatsen, och det gör varje snare också. Velocity och ingenting annat —
VELOCITY RANDOMIZE skriver VEL-lockar, så pickupen behåller sin 1:2 och de tre nya snarerna
behåller sitt FILL. Att de åtta subtracken verkligen följs åt är ägares rapportering och inte
manualens: de har bett om ett sätt att rikta en transform mot ett enda subtrack och
[det finns inget ännu](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2057),
och en annan rapport har PLACEMENT RANDOMIZE som
[flyttar lock-trigs som inte spelar något](https://www.elektronauts.com/t/tonverk-feature-requests/238027/1559)
tillsammans med tonerna — din enhet får avgöra det. Hur som helst kommer memoreringen först,
och VELOCITY UNLOCK är en tyngre hammare än namnet antyder: den tar varenda VEL-lock av
spåret, session 4:s fyra inräknade.
:::

## Step: PERFORM-läget
keys: [FUNC, SETTINGS, TRK, FLTR, E]
leds: { TRK: green }
source: manual §10.12, §A.2.3
mode: grid-recording

Håll [FUNC] och tryck på [SETTINGS] först; sparningen betyder mer här än någon annanstans i
den här sessionen. Håll nu [FUNC] och tryck på [TRK]: PERFORM-läget är på, och [TRK] lyser
grönt så länge det är (§10.12). Tryck på [FLTR] och vrid ratten [E], FREQ, ordentligt ner
medan loopen går, håll sedan [FUNC] och tryck på [TRK] igen för att lämna.

:::checkpoint
hear: Snaren blir matt under din hand — filtret hör till subtracket du står på (§A.2.3), så kicken och hi-hatsen klingar vidare som de var — och den förblir matt så länge PERFORM-läget är på. I samma stund som du lämnar är snaren ljus igen och den gröna lampan släckt: ändringen är borta, och att spara medan du var där inne hade inte behållit den heller (§10.12).
recover: Förblev snaren matt efter att du lämnade, var [FUNC] inte nere vid det andra trycket; den gröna lampan är det att hålla ögonen på. Ändrades ingenting alls medan du vred, visar [FLTR] något annat subtracks sida — håll [TRK] och tryck på [KEYBOARD D1] för snaren och prova igen. Steget sparar först med avsikt: §10.12 lovar att patternet kommer tillbaka till ett sparat tillstånd och säger inte mer, och vad som händer med ändringar gjorda efter den senaste sparningen och innan PERFORM-läget slogs på står ingenstans. Din enhet får avgöra det; att spara först gör frågan betydelselös.
:::

## Step: Spara
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: grid-recording

Håll [FUNC] och tryck på [SETTINGS] en sista gång. De sexton tangenterna är fortfarande
snarens: två som spelar på varje loop och tre som väntar på din tumme.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Samma takt som du började sessionen med, och inga två loopar av den lika — en pickup-kick varannan gång runt, hälften av ghost notes, en svarande hi-hat som kommer bara när dess fråga kom, och ett fill under din tumme. Den remsan med fem tangenter är den här sessionens vinjett.
recover: Fem tangenter, och 14, 15 och 16 blinkande. Är de tre mörka, hamnade fill-trigsen på ett annat subtrack: håll [TRK] och tryck på [KEYBOARD D1] och titta igen — och saknas de där också, är steg 6 tre tryck och en ratt bort.
:::

## What you now have

A01 är takten session 4 sparade, och den upprepar sig inte längre. En femte kick kommer
varannan loop, de fyra ghost notes singlar var och en slant om sin plats, en hi-hat på sista
steget svarar på ghost noten före den eller tiger med den, och tre snares i slutet av takten hör
till [FILL] ensam. Ingenting laddades och inget andra pattern skrevs: allt är en parameter på
en sida, satt på trigs du redan hade. Du har också de två vägarna tillbaka — memoreringen du
kan återkalla och sparningen som PERFORM-läget tar dig tillbaka till — och det är det som gör
resten värt att riskera.

## Explore further

### Fillet som röjer vägen
Ge snaren på 13 motsatsen till ett FILL-villkor — det som är tryckt med ett streck över,
¬FILL här och i simulatorn — så kliver den åt sidan så snart [FILL] hålls nere (§10.10.2).
De tre nya snarerna ersätter den gamla i stället för att trängas med den, vilket är vad ett
trumfill brukar göra.

### LATCHING, för när händerna är upptagna
[FUNC] + [FILL] igen, [DOWN] till LATCHING, [YES]: nu växlar [FILL] läget på och av med ett
tryck i stället för ett håll (§10.10.3). Praktiskt i samma stund som din andra hand ligger på
en ratt, och lätt att lämna påslaget av misstag.

### Den andra kicken
Flytta 1:2-pickupen från kicken till [KEYBOARD E1], HELLO KITs mörka kick: rensa steg 15 på
[KEYBOARD C1], skriv det på E1 och sätt COND till 1:2 där på samma sätt. Takten behåller sina
fyra kickar på slagen, och vartannat varv leder en djupare kick in i början.

### 1ST, en intro som händer en gång
1ST avfyrar en trig första varvet runt patternet och aldrig mer; samma villkor med ett streck
över sitter över det första varvet och spelar på alla de andra (§10.10.2). En cymbal på steg
1 med 1ST — HELLO KIT har en lång på [KEYBOARD C2] — och patternet anmäler sig och går sedan
vidare.

### NEI, i simulatorn i stället för på kitet
NEI tittar åt sidan: den frågar hur det senaste villkoret gick på spåret bredvid — det som är
numrerat före det du står på — och spelar, eller spelar inte, på det svaret (§10.10.2).
Simulatorns två spår är exakt det paret, och det är därför NEI hör hemma där: vad en
Subtracks-subtracks egen NEI läser står inte någonstans vi har kunnat hitta, och bara din
enhet kan säga det.

### PROB utan att hålla något
Vrid på [D] utan någon trig-tangent nere och PROB blir subtrackets egen inställning i stället
för en enda trigs (§12.2). Varje hi-hat på subtracket singlar då slant om sin plats, vilket
är en annan, mer nervös sorts takt än fyra ghost notes som singlar slant på egen hand.

### PERFORM-läget på två patterns
Bara ett pattern i taget kan vara i PERFORM-läget. Lämna det för ett annat pattern och kom
tillbaka, så väntar dina ändringar; slå på PERFORM-läget där borta i stället, och det första
patternets är borta (§10.12).

## Next

Session 6 lämnar trummorna i fred och börjar det andra kapitlet: en bas på spår 2 och en
ackordstämma på spår 3, spelade från klaviaturen i a-moll, på spår 2 och 3, som beatet lämnar fria.
Rytmen är klar — härifrån får stycket toner.
