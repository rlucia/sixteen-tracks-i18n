---
number: 3
chapter: rhythm
slug: the-kit-your-way
title: Kitet, på ditt sätt
goal: Se ett steg genom hela kitet, stäm om ett ljud, byt ut ett annat mot ett sample från kortet och möt supertracket.
needs: ["Projektet från session 2 (SIXTEEN, eller ditt eget namn)", Anslutna hörlurar, Fabriks-SD-kortet i sin plats, "Ungefär sexton minuter"]
teaches: [step-edit, per-subtrack-sound, sample-browser, pool, supertrack, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Var du är
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

Är inte SIXTEEN-projektet på displayen, så ladda det: [FUNC] + [PRESET] öppnar FILE-menyn,
sedan [UP]/[DOWN] genom PROJECT, LOAD och ditt projekt, [YES]. Tryck på [PLAY] och låt
beatet gå — allt i den här sessionen händer medan det spelar.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Session 2:s beat i loop från A01: kick, snare, stängd hi-hat och clap, alla ur kitet på spår 1.
recover: Har du spelat sedan dess och vill ha tillbaka det sparade läget: markera ditt projekt i LOAD-listan, tryck på [RIGHT] för PROJECT ACTIONS och välj RELOAD. Spelar [TRIG 2], [TRIG 3] eller [TRIG 4] egna ljud, är ditt beat utspritt över fyra spår: session 2 bygger det på ett enda, och dess första steg rensar det gamla. Börjar du här utan session 2? Den sessionen skriver det beat som den här arbetar med, och den tar ungefär sexton minuter.
:::

## Step: En trig-tangents tre liv
keys: [TRK, PTN, RECORD]
leds: { TRIG 1: white, RECORD: red }
source: manual §5.3.7, §10.1.1, §10.2.1
mode: playback

Med beatet igång, håll [TRK]: de sexton tangenterna är de sexton spåren, och den vita är
spåret du står på (§5.3.7). Håll [PTN] i stället och samma tangenter är pattern-platser —
vita där ett pattern bor, röd för det som spelar, vilket är A01 med din A02-kopia bredvid
(§10.1.1). Lyser [RECORD] redan sedan session 2: tryck en gång för att släcka den först.
Tryck på [RECORD] och de är en takts sexton steg på det aktiva spåret, röda där en note-trig
sitter (§10.2.1); tryck igen för att komma ut. Tre jobb, en rad tangenter, och färgen är det
enda som säger vilket: [sidan om tangentfärger](/key-colours/) har hela listan.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Beatet löper genom alla tre. Inget du tryckte på ändrade ett ljud.
recover: Släckte ditt första tryck på [RECORD] ljuset i stället för att tända det? Då lämnade session 2 GRID RECORDING på; tryck en gång till. Remsan ovanför är det tredje livet — spår 1:s kick, på de fyra slag du skrev i session 2.
:::

## Step: Spara först
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Håll [FUNC] och tryck på [SETTINGS]. Ingenting frågar dig något och inget på displayen säger
att det hände; på kortet ligger nu A01:s beat och A02:s kopia av det. Allt från nästa steg
och framåt ändrar kitet, och det här är läget du kan komma tillbaka till.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Inget — beatet fortsätter gå. En sparning på den här maskinen är tyst, och den avbryter inte sequencern.
recover: Öppnades en meny med inställningar, var [FUNC] inte nere först. Tryck på [NO], håll [FUNC], tryck sedan på [SETTINGS].
:::

## Step: Ett steg, hela kitet
keys: [STEP EDIT, TRIG 1, TRIG 7, KEYBOARD F1]
leds: { TRIG 1: green }
source: manual §10.3.1
mode: step-edit

Tryck på [STEP EDIT] och sedan på [TRIG 1]. Tangenten blir grön, och den nedre raden visar nu
ljuden som spelar på steg 1: kicken och den stängda hi-haten. Tryck på [TRIG 7] så visar raden
den stängda hi-haten och clapen. Session 2 skrev beatet ett ljud tvärs över takten; det här är
tvärtom, ett steg tvärs över kitet. Tryck på [KEYBOARD F1] medan steg 7 är grönt så lämnar
clapen det steget; tryck igen så är den tillbaka. Tryck på [STEP EDIT] igen för att gå ur.

:::checkpoint
hear: Beatet som det var, när du har satt tillbaka det du tog bort.
recover: STEP EDIT hör till GRID RECORDING (§10.3.1), så [RECORD] tänds med. En svagt lysande tangent på den nedre raden är ljudet du har valt, inte ett som spelar på steget — [Elektrons egen genomgång varnar för det](https://www.youtube.com/watch?v=ijPa_vgY8QA).
:::

## Step: Stäm om ett ljud
keys: [TRK, KEYBOARD D1, SRC, A]
source: manual §A.2.3
mode: any

Håll [TRK] och tryck på [KEYBOARD D1]: snaren är det valda ljudet. Tryck på [SRC] för dess
källsida och vrid DATA ENTRY-ratten [A], TUNE, några steg nedåt; trycker du in den medan du
vrider flyttar den ett halvtonssteg i taget. Bara snaren flyttar sig. Vart och ett av de åtta
ljuden har sina egna sidor SRC, FLTR, AMP och MOD, och det de delar är kitets effekter, som
supertracket håller — två steg längre fram.

:::checkpoint
hear: En mörkare snare i samma beat; kicken, hi-hatsen och clapen som förut.
recover: Flyttade sig ett annat ljud, låg den röda tangenten någon annanstans när du vred: håll [TRK], tryck på [KEYBOARD D1] och vrid igen. För att komma tillbaka: läs av TUNE innan du vrider och ställ tillbaka den på det värdet.
:::

## Step: Byt ut ett sample
keys: [TRK, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Håll [TRK] och tryck på
[KEYBOARD F1], den fjärde SUBTRACKS-tangenten, så att clapen är ljudet du står på.
[FUNC] + [KEYBOARD F1] öppnar Sample-bläddraren på SD-kortet, riktad mot just det
subtracket: [UP]/[DOWN] scrollar kortet, [YES] öppnar en mapp och [YES] på ett sample laddar
det in i projektets sample-pool och ut på subtracket (§5.2.6), och [NO] backar upp en nivå.
Välj ett kort ljud du gillar i clapens ställe, och sedan [FUNC] + [NO] för att lämna
bläddraren (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Ditt eget sample på steg 7 och 15, i stället för kitets clap, med resten av beatet oförändrat.
recover: Lägger ett [YES] till samplet men subtracket vägrar spela det, vill bläddraren ha sin OPERATIONS-meny: tryck på [RIGHT], välj LOAD SAMPLES och tryck på [YES] (§6.13.1).
:::

:::note
Det finns ingen skärm som heter sample-poolen. Poolen är manualens namn på det projektet har
laddat in i RAM, och du tittar på den genom SAMPLE BANKS i samma bläddrare (§6.13.2);
bläddraren visar vad den har kostat, i megabyte och som andel av RAM-minnet
(§6.13). Fråga forumet efter "sample-poolen" så
[blir du omdirigerad](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/965).
:::

## Step: Supertracket, sett en gång
keys: [TRK, TRIG 1, KEYBOARD C1]
source: manual §A.2.3
mode: any

Håll [TRK] och tryck på [TRIG 1] två gånger: första trycket väljer spår 1, det andra väljer
dess supertrack, och tre små vita rektanglar dyker upp ovanför spårnumret. Supertracket är
inte ett nionde ljud — det är där de åtta subtrackens delade inställningar bor: FX-sidorna,
de två FX-LFO:erna och, enligt ägare, send-nivåerna med dem. Håll [TRK] och tryck på
[KEYBOARD C1], den första SUBTRACKS-tangenten, för att komma ut igen.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", super: true }
hear: Inget nytt. Supertracket har ingen egen röst, och beatet löper vidare under det.
recover: Inga rektanglar ovanför spårnumret betyder att det andra trycket valde ett annat spår — håll [TRK] nere och tryck på [TRIG 1] två gånger utan att släppa.
:::

:::note
En lock som läggs här flyttar alla åtta subtracks på en gång, vilket passar
[tonalt eller texturellt material bättre än ett trumkit](https://www.youtube.com/watch?v=QHRGueJ8FsI);
[send-nivåerna delas också här](https://www.elektronauts.com/t/tonverk-subtrack-drum-strategies/243084),
i stället för att sättas per subtrack, och det är därför en mix av ett kit röst för röst går
genom supertracket. Elektrons presentatör i den videon kallar märket på displayen tre
punkter snarare än tre rektanglar.
:::

## Step: Spara
keys: [FUNC, SETTINGS, RECORD, TRK, KEYBOARD A1]
source: manual §9.1.1
mode: grid-recording

Håll [FUNC] och tryck på [SETTINGS]: sparat, i tystnad, så som varje sparning här går till.
Tryck sedan på [RECORD] om den är släckt, håll [TRK] och tryck på [KEYBOARD A1], den stängda
hi-hatens tangent, och titta på den en sista gång — varje udda steg rött.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Hela beatet från spår 1, med en mörkare snare och ett eget ljud i clapens ställe, sparat.
recover: En mörk remsa betyder att [RECORD] inte lyser: tryck på den för GRID RECORDING och titta igen. Sparningen visar ingenting och frågar ingenting; vill du ha bevis, står ditt projekts namn i FILE-menyns lista under PROJECT, LOAD.
:::

## What you now have

A01 spelar beatet från spår 1 på HELLO KIT: kicken på [KEYBOARD C1], en snare på
[KEYBOARD D1] stämd mörkare än kitets, den stängda hi-haten på [KEYBOARD A1] och, på
[KEYBOARD F1], ett ljud du själv valde från kortet. Spår 2, 3 och 4 är tomma, fria för basen,
ackorden och paden i session 6 och 8, och A02 behåller kopian av beatet från session 2 tills
session 9 behöver platsen. Allt är sparat.

## Explore further

### Börja från ett tomt kit
Håll [TRK] och tryck på [TRIG 2], sedan [FUNC] + [SRC]: MACHINE-menyn. Välj SUBTRACKS så frågar
en andra lista vilket instrument som ska laddas — ett tomt kit i ena änden, fabrikens
instrumentset bredvid, och här spelar [KEYBOARD] upp det markerade innan du bestämmer dig.
Det tomma kitet är åtta subtracks som väntar på samples, fyllda ett i taget genom
sample-bläddraren, och ingenting fyller åtta platser från en mapp i en enda sväng —
[ägare har bett om det](https://www.elektronauts.com/t/subtracks-use-cases/239235). Gör det på
spår 2, inte på ditt beat: en ny maskin skriver om spårets inställningar (§5.3.2).

### Kopiera alla åtta subtracks på en gång
I STEP EDIT kopierar [FUNC] + [RECORD] varje trig på de åtta subtracken och supertracket
tillsammans, och [FUNC] + [STOP] klistrar in dem på ett annat spår som kör en
Subtracks-maskin (§10.10.4). Samma två tangenter i vanlig GRID RECORDING flyttar ett enda
subtrack.

### Rensningen utan ångra
[TRK] + [PLAY] nollställer ett spårs preset-parametrar, vilket är något annat än att rensa
dess trigs — och det är den enda operation som sequencerns ångra inte når (§10.10.5).
[FUNC] + [NO] tar inte tillbaka ett preset, så prova det på ett spår du är beredd att
förlora.

### Poolen, sedd i sin helhet
[FUNC] + [SAMPLING] öppnar samma Sample-bläddrare uppifrån. Välj SAMPLE BANKS för varje
sample det här projektet har laddat, med SELECT UNUSED och UNLOAD för att rensa ut dem som
inget pattern spelar (§6.13.2).

## Next

Session 4 behåller det här kitet och får det att röra sig: ghost notes, en filterlock på en
hi-hat, en snare-roll och en stämma du spelar in live och sedan kvantiserar. Ingenting nytt
laddas — allt kommer ur de åtta ljud du redan har.
