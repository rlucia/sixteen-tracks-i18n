---
number: 2
chapter: rhythm
slug: first-beat
title: Första beatet
goal: Skriv ett beat på en takt med kitets ljud i GRID RECORDING, mutea ett ljud, kopiera patternet och spara.
needs: ["SIXTEEN-projektet från session 1 (eller vilket projekt som helst med ett trumkit på spår 1 — steg 1 säger hur)", Anslutna hörlurar, "Ungefär sexton minuter"]
teaches: [grid-recording, subtrack-select, page-length, mute, copy-paste-clear, undo, pattern-select]
simulator: null
ends: { keys16: { 1: red, 5: red, 9: red, 13: red } }
---

## Step: Var du är
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES]
source: manual §9.1.1
mode: menu:FILE

Är inte SIXTEEN-projektet på displayen, så ladda det: [FUNC] + [PRESET] öppnar FILE-menyn,
sedan [UP]/[DOWN] genom PROJECT, LOAD och ditt projekt, [YES]. Börjar du här utan session 1?
Då behöver du ett projekt du kan redigera med ett trumkit på spår 1 — session 1, steg 3 till
6, tar fem minuter.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Tryck på [TRIG 1]: kicken från session 1.
recover: Har du experimenterat sedan dess och vill ha tillbaka det sparade läget: markera ditt projekt i LOAD-listan och tryck på [RIGHT] för PROJECT ACTIONS, sedan RELOAD. Det är den senaste sparningen. Spelar [TRIG 2], [TRIG 3] eller [TRIG 4] egna trummor, lämnade en tidigare genomgång beatet över fyra spår: med GRID RECORDING avstängt rensar [FUNC] + [PLAY] och [YES] A01:s trigs (§10.10.4), och stegen nedan skriver det igen på spår 1.
:::

:::note
Att ladda ett projekt ersätter det du är i (§9.1.1). Har maskinen stått på sedan session 1
och du har spelat under tiden: spara innan du laddar något — arbetsläget du är på väg att
överge skrivs inte tillbaka till ditt projekt av sig självt.
:::

## Step: Välj ett ljud i tystnad
keys: [TRK, KEYBOARD D1, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1]
leds: { KEYBOARD C1: red }
source: manual §A.2.3
mode: any

Håll [TRK] och tryck på [KEYBOARD D1]. Nu är snaren det valda ljudet, och ingenting spelade:
samma tysta val som [TRK] ger trig-tangenterna för spår, här för ljuden i ett kit. Siffran på
skärmen säger 2 och D1 är den röda tangenten. Gör likadant med [KEYBOARD A1], den stängda
hi-haten, och [KEYBOARD F1], clapen, och sluta på [KEYBOARD C1], kicken. De här fyra är
beatet.

:::checkpoint
hear: Ingenting medan [TRK] hålls. Varje ljud spelar bara när du trycker på dess tangent ensam.
recover: Ett ljud som spelade betyder att [TRK] inte var nere först — håll den, tryck sedan. Med ett annat kit ligger snaren, den stängda hi-haten och den fjärde rösten där ditt öra hittade dem i session 1; använd de tangenterna överallt där kursen säger D1, A1 och F1.
:::

## Step: Gå in i GRID RECORDING
keys: [RECORD]
leds: { RECORD: red }
source: manual §10.3
mode: playback

Tryck på [RECORD]. Tangenten lyser rött, och det röda är GRID RECORDING. De sexton
trig-tangenterna står inte längre för spår. Nu står de för en takts sexton steg, för det
aktiva spårets valda ljud.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", page: { n: 1, of: 1 } }
hear: Inget ännu; sequencern går inte.
recover: Visar trig-tangenterna pattern-platser i stället? Då är du i pattern-valet. Tryck på [PTN] eller [NO] för att lämna det, tryck sedan på [RECORD].
:::

:::note
Att gå in i GRID RECORDING startar ingenting. [PLAY] startar sequencern, och du kan skriva
trigs medan den går eller medan den står stilla — det du tycker är lättast.
:::

## Step: Kicken på slagen
keys: [TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3, §10.2.1
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD C1] så att kicken blir ljudet du skriver. Tryck sedan på
[TRIG 1], [TRIG 5], [TRIG 9] och [TRIG 13]: en kick på varje slag.
Alla fyra lyser rött — rött är en note-trig.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Inget ännu.
recover: En tangent som slocknade när du tryckte höll redan en trig och du tog bort den — ett snabbt tryck är raderingen (§10.3). Tryck på den igen.
:::

## Step: Spela
keys: [PLAY, MAIN VOLUME]
leds: { RECORD: red }
source: manual §10.1.2
mode: grid-recording

Tryck på [PLAY]. Fyra kickar per takt i ditt tempo, och ett ljus som löper längs de sexton
tangenterna. Låt den gå: allt efter det här skrivs medan den spelar.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: En kick på varje slag, i loop.
recover: Tystnad medan ljuset fortfarande löper beror oftast på en av två saker: [MAIN VOLUME] för lågt, eller hörlurskontakten inte helt intryckt. Rör sig ljuset inte alls, tryckte du på [PLAY] två gånger — andra trycket pausar (§10.1.2). Tryck en gång till.
:::

## Step: Snaren på två och fyra
keys: [TRK, KEYBOARD D1, TRIG 5, TRIG 13]
leds: { RECORD: red, TRIG 5: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD D1]. De sexton tangenterna töms: de visar snarens steg nu,
och snaren har inga än. Tryck på [TRIG 5] och [TRIG 13].

:::checkpoint
keys16: { 5: red, 13: red }
hear: Kick, snare, kick, snare.
recover: Lyser kickens fyra tangenter fortfarande, lämnade du aldrig kicken. Håll [TRK] — håll, tryck inte bara till — och tryck på [KEYBOARD D1] igen.
:::

## Step: Hi-hats på varannat steg
keys: [TRK, KEYBOARD A1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD A1], den stängda hi-haten. Tryck nu på varje udda tangent från [TRIG 1] till [TRIG 15]: åtta
hi-hats, en på varje åttondel. Vill du hellre ha en på varje steg? Tryck på allihop;
exempelstycket håller sig till åtta.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Beatet har fått en puls som löper mellan trummorna.
recover: För plottrigt: tryck på de tangenter du vill ha släckta. Ett snabbt tryck tar bort; ett hållet tryck behåller trigen och förbereder den för redigering i stället (§10.3).
:::

## Step: Den fjärde rösten, vid sidan av slaget
keys: [TRK, KEYBOARD F1, TRIG 7, TRIG 15]
leds: { RECORD: red, TRIG 7: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Håll [TRK] och tryck på [KEYBOARD F1], clapen. Lägg den på [TRIG 7] och [TRIG 15]:
"och"-slaget före slag tre och slag ett, där det puttar takten framåt. Var som helst utanför
snaren duger, och ett annat kort ljud ur kitet i clapens ställe likaså.

:::checkpoint
keys16: { 7: red, 15: red }
hear: Takten lutar in i nästa.
recover: Hamnar den ovanpå snaren och grumlar den: flytta den, tryck på tangenten för att ta bort och på en annan för att lägga till.
:::

## Step: Fixa ett slag
keys: [TRIG 7, YES, LEFT, RIGHT]
leds: { RECORD: red }
source: manual §10.3, §19
mode: grid-recording

Välj ett slag du är osäker på, till exempel clapen på steg 7. Håll [TRIG 7] och tryck
på [YES]: just den trigen låter, ensam, med det som är satt på den. Ett snabbt tryck på
[TRIG 7] tar bort den; tryck igen för att lägga tillbaka den.

:::checkpoint
hear: Det enda slaget för sig självt, medan du håller tangenten och trycker på [YES].
recover: En hållen trig öppnas för redigering, den raderas inte, så att hålla en kostar dig ingenting. Dök en MICRO TIMING-meny upp, snuddade du vid [LEFT] eller [RIGHT] medan du höll (§10.5); släpp tangenten och tryck på [NO].
:::

## Step: En sida, sexton steg
keys: [FUNC, PAGE, E, NO]
leds: { RECORD: red }
source: manual §10.9, §10.9.1
mode: menu:PAGE SETUP

Håll [FUNC] och tryck på [PAGE]. LENGTH, på DATA ENTRY-ratten [E], visar 16 — en sida, en
takt, vilket är vad den här sessionen vill ha. De små rutorna högst upp på huvuddisplayen
räknar patternets sidor; det finns en. [NO] backar ut igen och lämnar allt som det var.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER PATTERN, "LENGTH 16", "SPEED 1"] }
hear: Oförändrat.
recover: Råkade du flytta LENGTH: vrid tillbaka ratten [E] till 16 före [NO]. Ett längre pattern är inte tomma takter — stegen du redan har kopieras framåt in i de nya sidorna (§10.9.1).
:::

:::note
Två saker här ställer till det senare. Den här menyn sätter en längd för *varje* spår tills
du trycker [FUNC] + [YES], som byter till längder per spår. Och rubriken i §10.9 och panelens
text kallar menyn PAGE SETUP, medan brödtexten i §10.9 kallar den SCALE: det är samma meny.
:::

## Step: Mutea ett ljud
keys: [MUTE, KEYBOARD D1, UP, DOWN]
leds: { KEYBOARD C1: green, KEYBOARD E1: green, KEYBOARD F1: green, KEYBOARD G1: green, KEYBOARD A1: green, KEYBOARD B1: green, KEYBOARD C2: green }
source: manual §8.6
mode: playback

Tryck på [MUTE] medan spår 1 fortfarande är det aktiva spåret — kitets ljud erbjuds bara för
spåret du stod på. Den nedre radens tangenter tänds för dem: tända spelar, släckta är mutade.
Tryck på [KEYBOARD D1] så faller snaren bort; tryck igen så kommer den tillbaka. Tryck på
[MUTE] för att lämna. Grönt är GLOBAL mute, som följer med dig in i varje pattern och sparas
med projektet; [MUTE] + [DOWN] byter till PATTERN mute, magenta, som hör till bara det här
patternet. [MUTE] + [UP] går tillbaka till global.

:::checkpoint
hear: Beatet utan sin snare, sedan med den igen.
recover: Lämnade du något mutat? [MUTE] själv glöder svagt, grönt eller magenta, så snart något är det — och färgen säger vilket läge du ska leta i. Tryck på den och hitta den släckta tangenten. I det här läget är trig-tangenterna hela spår: en trig-tangent skulle mutea kitet, alla ljud på en gång.
:::

:::note
§8.6 har hela regeln för de här färgerna. Snabbstartens §7.4 ger bara halva — släckt är
mutat, grönt hörs — och säger aldrig att grönt hör till det globala läget.
[Ägare listar ut de två lägena genom analogi med andra Elektron-lådor](https://www.elektronauts.com/t/global-mute-mode/242420).
:::

## Step: Kopiera patternet till A02
keys: [RECORD, FUNC, PTN, TRIG 2, STOP]
leds: { TRIG 1: white, TRIG 2: red }
source: manual §6.6, §10.10.4, §10.1.1
mode: playback

Tryck på [RECORD] för att lämna GRID RECORDING — en pattern-kopiering går inte medan det är
på. Håll [FUNC] och tryck på [RECORD], vars mintgröna text läser Copy. Håll [PTN] och tryck
på [TRIG 2]: A02 är valt, och det startar när A01 når sitt slut. I pattern-valet är en vit
tangent en plats med något i sig och den röda tangenten den som spelar. Håll nu [FUNC] och
tryck på [STOP], mintgrön text Paste. A02 är ditt beat, i säkerhet undan de ändringar som
kommer i session 3.

:::checkpoint
screen: { bank: "A02", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: white, 2: red }
hear: Samma beat, nu spelat från A02.
recover: Kommer A02 runt och är tyst, skedde inklistringen före bytet. Vänta tills A02:s nummer slutar blinka uppe till vänster — det blinkandet är patternet i kö, inte maskinen som ignorerar dig — och sedan [FUNC] + [STOP] igen.
:::

:::note
För att nå en annan bank: tryck på [PTN], välj banken på den nedre raden av [KEYBOARD] och
tryck sedan på en trig-tangent för patternet (§10.1.1). Manualen kallar den raden tre saker —
den nedre raden av [KEYBOARD], [SUBTRACKS]-tangenterna, och [KEYBOARD C1] för bank A:s
tangent — och panellistan i §3.1, punkt 21, trycker två av dem på samma rad: de är en enda
rad tangenter. Inne i banken du är i räcker [PTN] och en trig-tangent.
:::

## Step: Rensa, och ångra
keys: [FUNC, PLAY, YES, NO]
leds: { TRIG 2: red }
source: manual §6.6, §10.10.4, §10.10.5
mode: playback

Håll [FUNC] och tryck på [PLAY] — mintgrön text Clear — sedan [YES] på frågan. Varje trig i
A02 är borta och nästa loop är tystnad. Håll nu [FUNC] och tryck på [NO], mintgrön text
Undo. Beatet är tillbaka. Gör det här med flit en gång.

:::checkpoint
hear: En takt tystnad, sedan beatet igen.
recover: Gör Undo ingenting: klistra in igen — kopian ligger kvar i urklippet. Ångra når en inklistring eller en rensning på varje nivå där sequencern har en: ett helt pattern, ett spårs sekvens, en enda sida, en sida med parametrar, ett spårs ljud. Det enda den inte når är ett rensat spår-preset (§10.10.5): det är borta.
:::

## Step: Tillbaka till A01, och spara
keys: [PTN, TRIG 1, FUNC, SETTINGS, RECORD, TRK, KEYBOARD C1]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.1.1, §9.1.1
mode: playback

Håll [PTN] och tryck på [TRIG 1] för att komma tillbaka till A01. Håll [FUNC] och tryck på
[SETTINGS]: sparat, båda patterns, ingen fråga. Tryck sedan på [RECORD] en gång till, håll
[TRK] och tryck på [KEYBOARD C1], och titta på kicken en sista gång — steg 1, 5, 9 och 13, röda.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Ditt beat, från A01.
recover: Sparningen säger ingenting och visar ingen namnskärm; så ser en sparning ut här. Vill du vara säker? Då står ditt namn i FILE-menyns lista under PROJECT, LOAD.
:::

## What you now have

SIXTEEN har ett beat på en takt i A01 — kick, snare, stängd hi-hat och clap, alla ur kitet på
spår 1 — och A02 innehåller en kopia av det. Spår 2 till 4 spelar ingenting. Båda
patternen är sparade. Sluta här, eller fortsätt spela:
allt du ändrar från och med nu är osparat fram till nästa [FUNC] + [SETTINGS].

## Explore further

### En andra sida
[FUNC] + [PAGE], vrid sedan upp LENGTH till 32. Patternet är två sidor och den andra är en
kopia av den första, inte tomma takter (§10.9.1). I GRID RECORDING växlar [PAGE] mellan dem,
så du kan ändra ett slag bara på sida två. Sätt tillbaka LENGTH till 16 före session 3,
eller behåll det och kom ihåg att session 3:s kontrollpunkter beskriver en sida.

### Kopiera ett ljuds trigs
I GRID RECORDING — det här vill ha det *på* — lyfter [FUNC] + [RECORD] av trigsen från
ljudet du står på; välj ett annat ljud med [TRK] och dess tangent på den nedre raden och
[FUNC] + [STOP] släpper ner dem (§10.10.4). Lägg den stängda hi-hatens figur på tomen,
[KEYBOARD B1], och hör vad den gör med takten; [FUNC] + [NO] tar tillbaka den. Samma två tangenter, med grid recording
av, flyttar ett helt pattern: läget avgör vad de verkar på.

### Snabb mute
[MUTE] + [TRIG 1] mutear hela kitet utan att du går in i mute-läget alls, och gör det igen för
att unmutea (§8.6). Det är den att lära sig om du någon gång spelar det här live.

### Swing
I [TEMPO]-menyn ställer ratten [D] SWING mellan 50 och 80 procent, och 50 är helt rakt
(§7.5.1). Prova 58 med hi-hatsen igång. Sätt tillbaka den till 50 innan du sparar om du vill
ha känslan i exempelstycket.

### Kopiera ett pattern utan att lämna det du är i
Tryck på [PTN], håll sedan en trig-tangent och tryck på [RECORD] för att kopiera det
patternet, [STOP] för att klistra in i det, [PLAY] för att rensa det — allt utan att flytta
dig från patternet du spelar. Det här är
[nytt i OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes) och det är
en annan familj än [FUNC]-kombinationerna ovan, som alltid verkar på där du står.

## Next

Session 3 gör kitet till ditt: ett steg sett genom alla åtta ljuden, ett ljud omstämt, ett
eget sample i clapens ställe. Din A02-kopia står kvar precis som den är. Lärdomen om
tangentfärgerna — trig-tangenter som spår, som steg, som pattern-platser, och den nedre raden
som kitets ljud — är det du ska ta med dig vidare.
