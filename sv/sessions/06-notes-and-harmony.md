---
number: 6
chapter: sound
slug: notes-and-harmony
title: Toner och harmoni
goal: Lägg en bassline och fyra ackord under beatet genom att spela fyra tangenter två gånger, och låt arpeggiatorn och ackordläget göra resten.
needs: [Projektet från session 5, Anslutna hörlurar, "Ungefär sexton minuter"]
teaches: [track-select, load-preset, play-mode, octave, page-setup-per-track, chord-scale, live-recording, arpeggiator, chord-mode, pattern-transpose]
simulator: null
ends: { keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green } }
---

## Step: Var du är
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

Session 5 lämnade A01 så att det ändrar sig från loop till loop på spår 1, i GRID RECORDING på
snarens subtrack. Står sequencern still, tryck på [PLAY]. Håll [FUNC] nere och tryck på
[SETTINGS] innan något nytt läggs till: i den här sessionen fylls spår 2 och 3, och sparningen är
golvet under båda.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Beatet från session 5 som går runt: pickupen varannan loop, ghost notes som slår om sin plats. Fem tangenter tända på remsan — snaren på 5 och 13 och de tre fill-snarerna efter.
recover: Börjar du här utan session 5? Den sessionen skriver patternet som den här spelar över, och den tar ungefär sexton minuter; vilket pattern som helst med ett beat på spår 1 och ingenting på spår 2 och 3 fungerar lika bra.
:::

## Step: En bas på spår 2
keys: [TRK, TRIG 2, PRESET, RIGHT, UP, DOWN, YES]
leds: { TRIG 2: white }
source: manual §5.3.7, §9.1.4, §7.3
mode: menu:LOAD PRESET

Håll [TRK] nere och tryck på [TRIG 2]: spår 2 är det aktiva spåret. Tryck på [PRESET], [RIGHT]
till KEYS, [UP]/[DOWN] till 035 SHORT LONG BASS, och [YES] för att ladda det — eller vilket KEYS-preset
som helst vars djupaste toner är runda och korta. Spela sedan den nedre raden. På spår 1 var de
tangenterna kitets åtta ljud; här spelar var och en samma ljud på en annan tonhöjd, och den övre
raden, tyst på kitet, spelar tonerna emellan (§7.3).

:::note
Samma lista öppnad från FILE-menyn, [FUNC] + [PRESET], förblir öppen efter varje laddning, så det
går fortare att prova flera presets ([en ägares väg](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/606)).
:::

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 1 }
hear: Beatet fortsätter under dig. Varje tangent i den nedre raden spelar en djup ton från basen, högre från vänster till höger.
recover: Kommer kitets ljud ur tangenterna är spår 1 fortfarande aktivt — håll [TRK], tryck på [TRIG 2] och ladda igen. En lista med bara kit i är DRUMS: [RIGHT] en gång till.
:::

## Step: En röst, en oktav ner
keys: [FUNC, TRIG, UP, DOWN, LEFT, RIGHT, NO, -]
source: manual §11, §11.1.1, §8.5
mode: menu:TRACK SETUP

Håll [FUNC] nere och tryck på [TRIG]: TRACK SETUP öppnas på sin TRIG-sida (§11). [UP] och [DOWN]
går genom raderna; PLAY MODE är den första. Ställ den på MONO med [LEFT]/[RIGHT] och tryck på [NO]:
nu klipper en ny ton av den förra, en ton i taget (§11.1.1). Tryck sedan en gång på [-].
Klaviaturen går ner en oktav, och den tända pricken bredvid [+] och [-] flyttar från 0 till −1
(§8.5).

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE MONO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: Håll en tangent och tryck på en annan: den första tystnar. Varje tangent låter en oktav djupare än förut.
recover: Två toner samtidigt: PLAY MODE står fortfarande på POLY — [FUNC] + [TRIG] igen. Ingen sänkning: [-] gick till en meny som fortfarande var öppen; tryck på den med huvudskärmen framme.
:::

## Step: Fyra takter för basen
keys: [FUNC, PAGE, YES, E, NO]
source: manual §10.9, §10.9.1, §10.9.2
mode: menu:PAGE SETUP

Håll [FUNC] nere och tryck på [PAGE]. PAGE SETUP öppnas i PER PATTERN, där alla spår delar en längd
(§10.9.1). Håll [FUNC] och tryck på [YES] för PER TRACK, där LENGTH bara hör till det aktiva spåret
(§10.9.2). Håll [FUNC] och vrid [E]: LENGTH flyttar sexton steg i taget — stanna på 64, fyra takter.
[NO] stänger menyn. Spår 1 behåller sina 16, så kitet går runt varje takt medan spår 2 har fyra att
fylla.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Inget nytt än: längden gör bara plats. På huvudskärmen fyra små rutor för spår 2:s fyra sidor.
recover: Har kitet också fyra rutor stod menyn fortfarande på PER PATTERN när LENGTH flyttades: [FUNC] + [PAGE], [FUNC] + [YES] för PER TRACK, och sedan med spår 1 aktivt ([TRK] + [TRIG 1]) LENGTH tillbaka till 16. Kryper LENGTH ett steg i taget är [FUNC] inte nere medan [E] vrids. Fyra takter som börjar om efter en: RESET, i menyns PATTERN-kolumn, står under 64 — vrid den till INF (§10.9.2). Före steg 6, [TRK] + [TRIG 2]: det är spår 2 som ska spelas.
:::

## Step: Ge patternet en tonart
keys: [CHORD, NO]
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Tryck på [CHORD]: CHORD/SCALE SETUP, en bild av vad klaviaturen spelar (§8.5.1). Ställ med ratten
under varje inställning ROOT på A, SCALE på AEOLIAN (MINOR) och GUIDE på LIGHT, och tryck sedan på
[NO]. Inställningen hör till patternet, inte till ett spår. På spår 2 tänds nu tangenterna i a-moll:
hela den nedre raden och ingen i den övre — a-moll är de vita tangenterna.

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD OFF"] }
hear: Ingenting ändras i ljudet. Den nedre raden tänd, den övre släckt.
recover: Inga tangenter tända: GUIDE står fortfarande på OFF. En tangent som spelar en annan ton än den som trycktes: GUIDE står på SNAP, som flyttar en tangent utanför skalan till den närmaste inom den — LIGHT visar bara.
:::

## Step: Fyra grundtoner, inspelade
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Tryck på [STOP]. Håll [RECORD] nere och tryck på [PLAY]: varje spår startar från sitt första steg,
och LIVE RECORDING är på, [RECORD] blinkar rött (§10.4). Håll genast [KEYBOARD A1], en takt — räkna
till fyra —, sedan [KEYBOARD F1] för andra takten, [KEYBOARD C1] för den tredje och [KEYBOARD G1]
för den fjärde. Tryck på [STOP] när den fjärde takten tar slut, och sedan på [PLAY] för att lyssna.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 2 }
hear: Under beatet fyra långa djupa toner, en per takt: A, F, C, G, och runt igen.
recover: En ton som slutar innan dess takt är slut släpptes för tidigt. En inspelad ton behåller längden den hölls, och att vrida LEN på dess trig ändrar inte den ([ägare upptäckte det](https://www.elektronauts.com/t/trig-len-not-working/249623/8)). För att spela de fyra igen, rensa dem först: [RECORD] för GRID RECORDING, sedan [FUNC] + [PLAY] — spår 2:s trigs försvinner, kitets stannar (§10.10.4) —, [RECORD] igen, och börja om det här steget. Den första tonen hör ihop med trycket på [PLAY], inte ett slag efter.
:::

## Step: Arpen skriver linjen
keys: [ARP, H, LEFT, RIGHT, E, DOWN, FUNC, NO]
leds: { ARP: cyan }
source: manual §9.4, §9.4.5, §9.4.6
mode: menu:ARPEGGIATOR

Tryck på [ARP] med spår 2 aktivt: ARPEGGIATOR-menyn (§9.4). Vrid [H] till ARP LENGTH 8 (§9.4.6).
[LEFT] och [RIGHT] väljer ett av de åtta stegen och [E] ställer in dess förskjutning, i halvtoner
från tonen på triggen (§9.4.5): steg 1 stannar på 0, sedan +12, +7, steg 4 tystat med [DOWN], 0,
+7, steg 7 tystat, +12. Håll [FUNC] och tryck på [ARP] för att slå på arpeggiatorn. [NO] lämnar
menyn; utanför den lyser [ARP] cyan så länge spår 2 är aktivt.

:::note
Förskjutningarna räknas från varje triggs egen ton, så en och samma figur börjar på A i första
takten, på F i andra, och sedan på C och G. 0, +2, +7 och +12 stannar i a-moll över alla fyra
grundtonerna; +3 passar på A men inte på F, C eller G.
:::

:::checkpoint
screen: { menu: "ARPEGGIATOR", items: ["MODE", "SPEED", "N.LEN", "OFFSET", "ARP LENGTH 8"] }
keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green }
hear: De fyra långa tonerna blir en linje i rörelse, åtta korta steg och runt igen, som hoppar till den nya grundtonen varje takt. I menyn sex trigtangenter tända i grönt och två släckta: de tystade stegen.
recover: Fortfarande en lång ton: arpeggiatorn är av — MODE visar OFF, eller [ARP] är släckt utanför menyn: [FUNC] + [ARP]. Linjen slutar innan takten är slut: tonen under den är kort, och arpen spelar bara så länge dess triggs ton varar (steg 6). En sur ton: en förskjutning annan än 0, +2, +7 eller +12.
:::

## Step: Ackord på spår 3
keys: [TRK, TRIG 3, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 3: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Håll [TRK] nere och tryck på [TRIG 3]. Tryck på [PRESET], [RIGHT] till KEYS, [UP]/[DOWN] till
088 GLITCHY PIANO, och [YES] — eller vilket KEYS-ljud som helst som håller sin ton så länge tangenten
är nere. Håll sedan [FUNC], tryck på [PAGE], håll [FUNC] och vrid [E] till LENGTH 64 för spår 3,
och tryck på [NO]. Menyn står fortfarande på PER TRACK, och varje spår behåller sin egen längd.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: En tangent i den nedre raden håller en ton av det nya ljudet så länge den hålls; basslinen och beatet fortsätter.
recover: LENGTH visade redan 64 när menyn öppnades: det är spår 2:s — [TRK] + [TRIG 3], och sedan [FUNC] + [PAGE] igen. Menyn visar PER PATTERN: först [FUNC] + [YES] för PER TRACK, annars går alla spår till 64.
:::

## Step: En tangent, ett ackord
keys: [CHORD, NO, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { CHORD: cyan }
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Tryck på [CHORD] och ställ med rattarna under dem SHAPE på 1-3-5 och CHORD på ON, tryck sedan på
[NO]: ackordläget är på, [CHORD] tänd i cyan ([FUNC] + [CHORD] gör samma sak varifrån som helst).
Tryck på [KEYBOARD A1]: tre toner på en gång, a-moll. Varje tangent spelar det ackord ur
a-moll-skalan som börjar på den — [KEYBOARD F1] F-dur, [KEYBOARD C1] C-dur, [KEYBOARD G1] G-dur
(§8.5.1).

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD ON", "SHAPE 1-3-5"], sel: 4 }
hear: En tangent, tre toner: a-moll, och sedan F-, C- och G-dur från de tre andra tangenterna.
recover: Bara en ton från varje tangent: ackordläget är av, [CHORD] släckt. F låter moll: SCALE står på CHROMATIC, där samma ackordtyp stämplas på varje tangent — ställ tillbaka den på AEOLIAN (MINOR). Flera trumljud från en tangent: spår 1 är det aktiva — [TRK] + [TRIG 3].
:::

## Step: Fyra ackord, inspelade
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red, CHORD: cyan }
source: manual §10.4, §8.5.1
mode: live-recording

Samma grepp som i steg 6, på spår 3: tryck på [STOP], håll [RECORD] och tryck på [PLAY], och håll
sedan [KEYBOARD A1], [KEYBOARD F1], [KEYBOARD C1] och [KEYBOARD G1], en takt var från första slaget.
[STOP] när den fjärde takten tar slut, och sedan [PLAY].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: a-moll, F, C, G, ett ackord per takt, över basslinen.
recover: Ett avhugget ackord släpptes för tidigt: som i steg 6, [RECORD] för GRID RECORDING, sedan rensar [FUNC] + [PLAY] spår 3:s trigs, [RECORD] igen, och spela de fyra igen — varje ackord varar så länge dess tangent hölls. En takt ackord som går runt i stället för fyra: spår 3 är fortfarande 16 steg långt — LENGTH 64 som i steg 8, rensa och spela dem igen. Dess toner står på triggen som vanliga toner, så det du hör är det som sparas.
:::

## Step: Ackordläget av
keys: [FUNC, CHORD, TRK, TRIG 1, KEYBOARD C1]
source: community https://www.elektronauts.com/t/tonverk-tips-tricks/238162/334
mode: playback

Håll [FUNC] nere och tryck på [CHORD]: [CHORD] släcks. Ackordläget är en enda brytare för hela
patternet, kitet inräknat — står det kvar på, avfyrar en tangent i kitet flera av dess ljud på en
gång. De fyra ackorden stannar: de är toner på triggarna nu. Håll [TRK], tryck på [TRIG 1] och tryck
på [KEYBOARD C1].

:::checkpoint
hear: Kicken ensam från [KEYBOARD C1], och ackorden som fortsätter på spår 3.
recover: Kicken kommer med andra trumljud: [CHORD] lyser fortfarande — håll [FUNC] och tryck på [CHORD].
:::

## Step: En annan tonart, och tillbaka
keys: [PTN, +, -]
source: manual §10.10.8
mode: playback

Håll [PTN], tryck tre gånger på [+] och släpp [PTN]: basslinen och ackorden flyttar tre halvtoner
upp, till c-moll (§10.10.8), och kitet stannar där det var. Lyssna några takter. Håll sedan [PTN],
tryck tre gånger på [-] och släpp: hemma igen, i a-moll. Tonerna på triggarna ändrades aldrig;
transponeringen ligger ovanpå dem.

:::note
Ägare testade det på OS 1.4.0: ett spår med Subtracks-maskinen transponeras inte
([testet](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824/107)).
:::

:::checkpoint
hear: Harmonin högre och ljusare, trummorna oförändrade; sedan stycket som det var.
recover: Trummorna flyttade också: spår 1 går inte på Subtracks-maskinen. Fortfarande högre efter tre tryck på [-]: jämför det du hör med A — tre halvtoner under C är A.
:::

## Step: Spara
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Håll [FUNC] nere och tryck på [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: A01 som det står nu: beatet, basslinen, fyra ackord.
recover: Ingen skärm sa att projektet skrevs: [FUNC] var inte nere när [SETTINGS] trycktes. Tryck dem tillsammans igen.
:::

## What you now have

Spår 2 spelar en bassline som aldrig skrevs ton för ton: fyra grundtoner, en per takt, och en figur
på åtta steg som arpeggiatorn bygger på var och en. Spår 3 spelar a-moll, F, C och G, fyra ackord
från fyra tangenter. Kitet går fortfarande runt varje takt under fyra takter harmoni, patternet
står i a-moll igen, och allt är sparat.

## Explore further

### En bas som glider
På samma TRACK SETUP-sida, ställ PLAY MODE på MONO LEG och PORTAMENTO på MONO LEG (§11.1.1,
§11.1.5), slå sedan på PORT på TRIG PAGE 2 och ge den en kort PTIM (§12.3). Två toner glider in i varandra när den första varar förbi
början av den andra; toner med ett mellanrum emellan börjar fortfarande rent.

### Tärningar för arpen
Memorera patternet först: håll [FUNC] och tryck på [KEYBOARD D#1] (§10.10.6). I ARPEGGIATOR-menyn
slår [ARP] + [YES] om alla inställningar på en gång, och [E] intryckt med [YES] slår bara om
förskjutningarna (§9.4). Behåll ett slag du gillar, eller håll [FUNC] och tryck på [KEYBOARD C#1]
för att gå tillbaka.

### Ett slaget ackord
I STEP EDIT behåller varje ton i ett ackord sin egen micro timing: flytta de övre tonerna lite
senare än den djupaste, så rullar ackordet in nerifrån i stället för att landa som ett block
([visat här](https://www.youtube.com/watch?v=lrcaoGwYL00&t=2400)).

### Ett annat läge
Ackordläget spelar varje ackord från grundtonen och uppåt. [STEP EDIT] på ett ackords trig visar
dess toner på klaviaturen: en tänd tangent intryckt tar bort den tonen, en släckt intryckt lägger
till den, och [+] och [-] når oktaven över eller under (§10.3.1).

### Kitet med ackordläget på
Slå på ackordläget igen, välj spår 1 och tryck på en tangent i kitet: flera av dess ljud avfyras
från den enda tangenten. [FUNC] + [CHORD] igen, och spara sedan.

## Next

Session 7 följer ljudet ut ur spåren: trummorna genom en buss med en kompressor, ackorden in i ett
reverb, och ROUTING-menyn som förenar dem.
