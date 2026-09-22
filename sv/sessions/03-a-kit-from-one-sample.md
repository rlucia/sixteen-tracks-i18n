---
number: 3
chapter: rhythm
slug: a-kit-from-one-sample
title: Ett kit av ett enda sample
goal: Lägg hela beatet på ett spår med ett Subtracks-kit, frigör de andra tre och byt ett av dess ljud mot ett du väljer från kortet.
needs: ["Projektet från session 2 (SIXTEEN, eller ditt eget namn)", Anslutna hörlurar, Fabriks-SD-kortet i sin plats, "Ungefär sexton minuter"]
teaches: [subtracks, supertrack, machine-select, sample-browser, pool, track-clear, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Var du är
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

Är inte SIXTEEN-projektet på displayen, så ladda det: [FUNC] + [PRESET] öppnar FILE-menyn,
sedan [UP]/[DOWN] genom PROJECT, LOAD och ditt projekt, [YES]. Tryck på [PLAY] och låt
beatet gå — den här sessionen bygger om det under dig medan det spelar.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Session 2:s beat i loop från A01: kick, snare, hi-hats och en fjärde röst, över fyra spår.
recover: Har du spelat sedan dess och vill ha tillbaka det sparade läget: markera ditt projekt i LOAD-listan, tryck på [RIGHT] för PROJECT ACTIONS och välj RELOAD. Börjar du här utan session 2? Den sessionen skriver det beat som den här plockar isär, och den tar ungefär sexton minuter.
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
att det hände; på kortet ligger nu A01:s beat på fyra spår och A02:s kopia av det. Allt från
nästa steg och framåt skriver om spår 1, och det här är läget du kan komma tillbaka till.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Inget — beatet fortsätter gå. En sparning på den här maskinen är tyst, och den avbryter inte sequencern.
recover: Öppnades en meny med inställningar, var [FUNC] inte nere först. Tryck på [NO], håll [FUNC], tryck sedan på [SETTINGS].
:::

## Step: En Subtracks-maskin på spår 1
keys: [TRK, TRIG 1, FUNC, SRC, UP, DOWN, KEYBOARD, YES]
source: community https://www.youtube.com/watch?v=QHRGueJ8FsI
mode: menu:MACHINE

Håll [TRK] och tryck på [TRIG 1]. Håll [FUNC] och tryck på [SRC]: MACHINE-menyn öppnas på de
maskiner spår 1 kan ta. [UP]/[DOWN] till SUBTRACKS och [YES] — och en andra lista frågar
vilket instrument som ska laddas, ett tomt kit i ena änden och fabrikskiten bredvid. Spela
på [KEYBOARD] för att höra det markerade innan du bestämmer dig, och tryck sedan på [YES] på
ett fabrikstrumkit vars åtta ljud du gillar.

:::checkpoint
screen: { menu: "MACHINE", items: [SINGLE PLAYER, MULTI PLAYER, SUBTRACKS, GRAINER, WAVEFINDER, MIDI], sel: 2 }
hear: Spår 1 avfyrar fortfarande på alla fyra slagen, men det som avfyras är det nya kitet: session 1:s kick följde med maskinen.
recover: En lista med maskiner i stället för instrument betyder att [YES] inte har landat på SUBTRACKS ännu. Laddade du ett kit du inte gillar? [FUNC] + [SRC], SUBTRACKS igen, och välj ett annat — det är manualens egen väg tillbaka (§5.3.1).
:::

:::note
"Tomt" är ett val, inte tystnad: det tomma instrumentet ger dig åtta subtracks som väntar på
samples, ett i taget genom sample-bläddraren, och ingenting fyller åtta platser från en mapp
i en enda sväng —
[ägare har bett om det](https://www.elektronauts.com/t/subtracks-use-cases/239235). Ett
fabrikskit kommer fullt, och det är därför den här sessionen börjar med ett och byter ut ett
enda ljud i steg 10. Kicken försvinner hur du än gör: ett preset är inställningarna på
sidorna SRC, FLTR, AMP, FX och MOD (§5.3.2), och en ny SRC-maskin skriver om dem.
:::

## Step: Spela kitet
keys: [SUBTRACKS]
source: manual §3.1, §A.2.3
mode: any

Tryck på de åtta [SUBTRACKS]-tangenterna en i taget: åtta ljud, ett per tangent, och det är
kitet. De är inte en ny rad reglage — de är klaviaturens nedre rad, tryckt med båda namnen,
som gör ett fjärde jobb nu när en Subtracks-maskin sitter på spåret.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Åtta olika samples, ett per tangent, ovanpå beatet som fortfarande går.
recover: En tangent som inte ger något ljud är ett tomt subtrack i kitet du valde, och det är inget hinder: den här sessionen använder fyra av de åtta. Maskinens avläsning är ritad här som SUBTRACKS; skriver din enhet den på något annat sätt, har enheten rätt. Din enhet får avgöra det.
:::

## Step: Rensa spår 1:s gamla trigs
keys: [STEP EDIT, FUNC, PLAY]
source: manual §10.10.4, §10.3.1
mode: step-edit

Tryck på [STEP EDIT]. STEP EDIT är en del av GRID RECORDING (§10.3.1), så räkna med att
[RECORD] lyser. Håll [FUNC] och tryck på [PLAY]: det rensar varje trig över alla åtta
subtracks och supertracket i ett enda tryck, vilket är den enda rensning som når hela kitet
(§10.10.4). Tryck på [STEP EDIT] igen för att lämna.

:::checkpoint
keys16: { }
hear: Kitet tystnar och loopen kommer runt tom; spår 2, 3 och 4 spelar vidare.
recover: En trig som fortfarande lyser hör till ett subtrack som rensningen inte nådde: välj det med [TRK] + [SUBTRACKS], tryck på [RECORD] för GRID RECORDING och rensa just det med [FUNC] + [PLAY]. I vanlig GRID RECORDING tar den kombinationen bara det valda subtracket, vilket är [vad ägare upptäcker när de väntar sig att hela spåret ska sopas rent](https://www.elektronauts.com/t/tonverk-user-thread/238631/2436).
:::

:::note
Den här rensningen går att ångra: [FUNC] + [NO] lägger tillbaka trigsen (§10.10.5), och
ångra når inklistringar och rensningar på varje nivå där sequencern har en. Rensningen
utan ångra gäller ett spårs preset, och den är [TRK] + [PLAY] — Utforska vidare, nedan.
:::

## Step: Kicken på subtrack 1
keys: [RECORD, TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Tryck på [RECORD] för GRID RECORDING. Håll [TRK] och tryck på [KEYBOARD C1], den första
SUBTRACKS-tangenten: det väljer subtrack 1 utan att låta det. Tryck nu på [TRIG 1],
[TRIG 5], [TRIG 9] och [TRIG 13] — kicken, på samma fyra slag som i session 2, på ett
subtrack i stället för på ett spår.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: En kick på varje slag igen, och den här gången kommer alltihop från spår 1.
recover: Lät subtracket när du valde det, var [TRK] inte nedtryckt. Är subtrack 1 i ditt kit ingen kick: tryck på [SUBTRACKS]-tangenterna tills du hittar den som är det och använd det subtracket här i stället; resten av sessionen bryr sig bara om att du vet vilket ljud som sitter var.
:::

## Step: Snare, stängd hi-hat, öppen hi-hat
keys: [TRK, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

[TRK] + [KEYBOARD D1], den andra SUBTRACKS-tangenten, tar dig till subtrack 2, och snaren
går på [TRIG 5] och [TRIG 13]. Den tredje tangenten, [TRK] + [KEYBOARD E1], är subtrack 3,
den stängda hi-haten: varje udda steg, från [TRIG 1] till [TRIG 15]. Den fjärde, [TRK] +
[KEYBOARD F1], är subtrack 4, den öppna hi-haten, på [TRIG 7] och [TRIG 15] — sedan [TRK] +
[KEYBOARD E1] en gång till, så att den stängda hi-hatens rad är den som ligger på
tangenterna.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Session 2:s beat, komplett, från ett enda spår. Remsan är subtrack 3: den stängda hi-haten på varje udda steg.
recover: En rad som redan har trigs du inte skrev är subtracket du just lämnade — håll [TRK], tryck inte på den, och tryck på subtrackets tangent igen. De här tre behöver inte vara en snare och två hi-hats: lägg kitets bästa röster på de här stegen.
:::

## Step: Frigör spår 2 till 4
keys: [TRK, TRIG 2, TRIG 3, TRIG 4, FUNC, PLAY]
source: manual §10.10.4
mode: grid-recording

Fortfarande i GRID RECORDING: håll [TRK] och tryck på [TRIG 2], håll sedan [FUNC] och tryck
på [PLAY]. Snarens trigs är borta. Gör samma sak på [TRIG 3] och på [TRIG 4] — tre vanliga
spår, tre rensningar, och hela beatet kommer från spår 1.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, type: "AUDIO" }
hear: Samma beat som för en minut sedan, utan att något dubblerar det: spår 2, 3 och 4 är tysta.
recover: Rensade du ett för mycket? [FUNC] + [NO] lägger tillbaka det senaste (§10.10.5). Lyser en rad du rensade fortfarande, hamnade rensningen på spåret du var på innan — håll [TRK] medan du väljer.
:::

:::note
Preseten står kvar där de är. Den här rensningen tar trigs, inte ljud: spår 2 till 4 har
fortfarande kvar session 2:s snare och hi-hats, och session 6 laddar en bas och ackord över
dem. A02 har fortfarande kvar versionen av beatet på fyra spår, och ingenting skriver över
den före session 9.
:::

## Step: Byt ut ett sample
keys: [TRK, TRIG 1, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Håll [TRK] och tryck på [TRIG 1] för att komma tillbaka till kitet, sedan [TRK] +
[KEYBOARD F1], den fjärde SUBTRACKS-tangenten, så att den öppna hi-haten är subtracket du
står på. [FUNC] + [KEYBOARD F1] öppnar Sample-bläddraren på SD-kortet, riktad mot just det
subtracket: [UP]/[DOWN] scrollar kortet, [YES] öppnar en mapp och [YES] på ett sample laddar
det in i projektets sample-pool och ut på subtracket (§5.2.6), och [NO] backar upp en nivå.
Välj ett ljud du gillar till den öppna hi-haten — av de fyra rösterna är det den stycket är
minst kinkigt med — och sedan [FUNC] + [NO] för att lämna bläddraren (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Ditt eget sample på steg 7 och 15, i stället för kitets öppna hi-hat, med resten av beatet oförändrat.
recover: Lägger ett [YES] till samplet men subtracket vägrar spela det, vill bläddraren ha sin OPERATIONS-meny: tryck på [RIGHT], välj LOAD SAMPLES och tryck på [YES] (§6.13.1). Om den här vägen behöver ett tryck eller två är en fråga för enheten — manualen beskriver båda, på olika sidor.
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
punkter snarare än tre rektanglar, så hur det ser ut är värt en andra blick på din egen
enhet.
:::

## Step: Spara
keys: [FUNC, SETTINGS, TRK, KEYBOARD E1]
source: manual §9.1.1
mode: grid-recording

Håll [FUNC] och tryck på [SETTINGS]: sparat, i tystnad, så som varje sparning här går till.
Håll sedan [TRK] och tryck på [KEYBOARD E1], den tredje SUBTRACKS-tangenten, och titta på
den stängda hi-haten en sista gång — varje udda steg rött. Den bilden är den här sessionens
vinjett.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Hela beatet från enbart spår 1, sparat.
recover: En mörk remsa betyder att [RECORD] inte lyser: tryck på den för GRID RECORDING och titta igen. Sparningen visar ingenting och frågar ingenting; vill du ha bevis, står ditt projekts namn i FILE-menyns lista under PROJECT, LOAD.
:::

## What you now have

A01 spelar hela beatet från spår 1: ett Subtracks-kit med en kick på subtrack 1, en snare på
2, en stängd hi-hat på 3 och, på 4, en öppen hi-hat du själv valde från kortet. Spår 2, 3
och 4 har fortfarande kvar session 2:s presets men inga trigs — fria för basen, ackorden och
paden i session 6 och 8 — och A02 behåller versionen av beatet på fyra spår tills session 9
behöver platsen. Allt är sparat.

## Explore further

### STEP EDIT, ett steg i taget
I uppspelning: tryck på [STEP EDIT] och sedan på en trig-tangent, så blir den grön, och
klaviaturen lägger till och tar bort toner på just det steget (§10.3.1). På ett
Subtracks-spår är det så du tittar på ett enda steg tvärs över kitet i stället för på ett
subtrack tvärs över takten.

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
