---
number: 1
chapter: rhythm
slug: first-sound
title: Första ljudet
goal: Slå på strömmen, lägg ett ljud på spår 1, spela det från klaviaturen, ställ tempot och spara ett projekt du kan komma tillbaka till.
needs: [Tonverk och dess nätadapter, "Hörlurar med 6,3 mm-kontakt (eller en mixer på OUT A/B)", Fabriks-SD-kortet i sin plats, "Ungefär sexton minuter"]
teaches: [power, volume, new-project, track-select, load-preset, keyboard, octave, tempo, metronome, name-project, save-project]
simulator: null
ends: { keys16: { 1: white } }
---

## Step: Slå på strömmen
keys: []
source: manual §3.2, §3.3, §5.2.1
checked: yes
mode: any

Sätt den medföljande adaptern i ett vägguttag och dess USB-kabel i någon av de två
USB-portarna på baksidan; båda portarna kan driva maskinen, och den lilla skruven bredvid
porten sitter där för att kabeln inte ska glappa loss. Tryck på POWER på baksidan.
Displayen tänds och visar projektet som Tonverk senast använde — det finns ingen startguide,
och inget här kräver ett beslut av dig.

:::checkpoint
hear: Inget ännu. Maskinen är på och tyst och visar ett projekt du inte har valt.
recover: Inget tänds? Kabeln hör hemma i USB 1 eller USB 2, och nätadaptern manualen rekommenderar är Elektron PSU-5 som låg i kartongen (§3.2, §20). En laptop-port eller en mobilladdare räcker kanske inte.
:::

:::note
För att stänga av senare: tryck på POWER, sedan [YES] — eller tryck på POWER två gånger.
Vänta tills varje LED och displayens bakgrundsbelysning har slocknat innan du drar ur
kabeln. Om maskinen någon gång slutar svara tvingar ett långt tryck på POWER fram en
avstängning, och allt osparat följer med.
:::

## Step: Hörlurarna och de två volymrattarna
keys: [MAIN VOLUME, LEVEL/DATA]
source: manual §3.1, §6.1
checked: yes
mode: any

Koppla in hörlurarna i OUT E/F (HEADPHONES) på baksidan. Vrid [MAIN VOLUME] till ungefär en
fjärdedel. Det sitter två stora rattar till vänster på den här panelen och bara den här är
*utgångs*nivån: [LEVEL/DATA] är nivån på det spår som är aktivt, och den scrollar dessutom i
listor och ställer värden överallt annars i maskinen. Låt den vara tills vidare.

:::note
Att vrida ner [LEVEL/DATA] för att få hörlurarna tystare drar ner ett enda spårs nivå och
lämnar den där; vrid upp [MAIN VOLUME] igen senare och det spåret är fortfarande tyst, utan
att något på displayen säger varför.
[En genomgång som håller de två isär](https://www.youtube.com/watch?v=lrcaoGwYL00).
:::

## Step: Ett nytt projekt
keys: [FUNC, PRESET, UP, DOWN, YES, NO]
source: manual §9.1, §9.1.1
checked: yes
mode: menu:FILE

Håll [FUNC] och tryck på [PRESET]: FILE-menyn öppnas. Gå till PROJECT med [UP]/[DOWN] och
[YES], sedan NEW och [YES]. Blir du tillfrågad om du vill spara projektet som var öppet
trycker du på [NO] — fabriksprojektet ligger redan på kortet och du har inte ändrat något i
det.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
hear: Inget. Ett tomt projekt, pattern A01, inga ljud laddade.
recover: Öppnades en lista med projekt i stället? Då är du i LOAD och inte i NEW. Tryck en gång på [NO] och välj NEW.
:::

:::note
Ett nytt projekt laddar ingenting, men preset-bläddraren i nästa steg listar ändå hela
fabriksbiblioteket. Det är kortets bibliotek, som alla projekt delar på, inte innehållet i
ditt projekt — just den skillnad som
[den här tråden](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)
finns till för att förklara. Inget du gör här inne kan skada fabriksmaterialet.
:::

## Step: Välj spår 1
keys: [TRK, TRIG 1]
leds: { TRIG 1: white }
source: manual §5.3.7
checked: yes
mode: any

Håll [TRK] och tryck på [TRIG 1]. Spår 1 är nu det aktiva spåret: det som displayen
beskriver, det som [LEVEL/DATA] styr, det som klaviaturen kommer att spela. Att hålla [TRK]
spelar roll — ett ensamt [TRIG 1] väljer spåret *och* avfyrar det, vilket blir en ton du
inte bad om varje gång du byter spår.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
keys16: { 1: white }
hear: Inget ännu; det finns inget ljud på spåret.
recover: Det är displayens nedre vänstra hörn som gäller: där står T1. Ett ensamt tryck på [TRIG 1] väljer också spår 1 — och avfyrar det, vilket är hela skillnaden.
:::

:::note
Tre ställen i manualen stavar den här tangenten på tre sätt — [TRK] i §5.3.7, TRACK i §10.3,
och preset-proceduren i §9.1.4 ber i stället om [FUNC] och en trig-tangent. Panelen framför
dig har TRK tryckt på sig, så det är vad den här kursen säger.
[Ägare gör samma bedömning](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
[TRK] och en trig-tangent är det tysta valet.
:::

## Step: Ladda en kick
keys: [PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §7.1, §9.1.4
checked: yes
mode: menu:LOAD PRESET

Tryck på [PRESET]. LOAD PRESET-menyn öppnas på det aktiva spåret. [LEFT]/[RIGHT] flyttar
mellan preset-kategorierna DRUMS och KEYS; stanna i DRUMS. Scrolla med [UP]/[DOWN] eller
[LEVEL/DATA] tills du hittar en kick — vilket preset som helst med ett sådant namn duger.
Exempelstycket använder den första kicken i listan; välj en du gillar. Tryck på [YES] för
att ladda den till spår 1.

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 0 }
hear: Tryck en gång på [TRIG 1]. Kicken spelar.
recover: Tystnad: upp lite med [MAIN VOLUME], och hörlurskontakten hela vägen in. Ger [TRIG 1] inget ljud alls, hamnade presetet någon annanstans — håll [TRK], tryck på [TRIG 1] och ladda om det.
:::

:::note
Det finns ingen förhandslyssning här. Enda sättet att höra ett preset är att ladda det, och
laddningen ersätter det som spåret höll på.
[Recensenter kallar det flow-mördaren](https://www.soundonsound.com/reviews/elektron-tonverk).
[FUNC] + [NO] är inte heller någon väg tillbaka: ångra gäller inklistringar och rensningar
(§10.10.5), och att ladda ett preset över ett annat är ingetdera.
:::

:::note
Att ladda ett preset kopierar in det i patternet (§9). Från och med nu ändrar en ratt du
vrider på *det här patternets kopia*, aldrig filen på kortet. Det är den första av de fem
behållarreglerna; kartan på [Innan du börjar](/before-you-start/) visar resten.
:::

## Step: Spela det från klaviaturen
keys: [KEYBOARD]
leds: { TRIG 1: white }
source: manual §7.3, §8.5
checked: yes
mode: any

Tryck på den nedre raden av [KEYBOARD]-tangenter, C1 till C2, och sedan på de svarta
tangenterna ovanför. Det är samma kick varje gång, spelad i olika tonhöjd: klaviaturen är
kromatisk och presetet följer den. Ett trumpreset spelat två oktaver ner är ett annat
instrument, och det är värt fem sekunder av din tid.

:::checkpoint
hear: Presetet spelar i olika tonhöjd på varje tangent.
recover: Spelar klaviaturen något som inte är din kick? Då har det aktiva spåret flyttat sig. [TRK] + [TRIG 1] tar tillbaka det.
:::

:::note
Klaviaturen följer inte alltid spåret du just har valt. Välj vad som helst från spår 9 till
16 medan ett audiospår var aktivt och [KEYBOARD] stannar kvar på det tidigare audiospåret
(§5.3.7, §8.5), så att du kan spela genom en buss medan du justerar den. För en nykomling
läses det som ett val som inte gick igenom.
[Det är meningen](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
välj ett audiospår, 1 till 8, så kommer klaviaturen tillbaka.
:::

## Step: Oktaver
keys: [+, -]
source: manual §8.5
checked: yes
mode: any

Tryck på [+]: klaviaturens fönster flyttar upp en oktav, och lysdioderna för KEYBOARD OCTAVE
bredvid tangenten visar var du är. [-] flyttar ner. Tryck på [+] + [-] samtidigt för att
komma tillbaka till 0.

:::checkpoint
hear: Samma tangent, en oktav högre efter [+]; tillbaka där den var efter [+] + [-].
recover: Fem oktaver åt vardera hållet är gränsen, så ett tryck som inte gör något betyder att du är längst ut. Läs lysdioderna för KEYBOARD OCTAVE bredvid [+] för att se var du har hamnat, och håll återställningskombinationen nära till hands.
:::

## Step: Ställ tempot
keys: [TEMPO, A, NO]
source: manual §7.5.1
checked: yes
mode: menu:TEMPO

Tryck på [TEMPO]. DATA ENTRY-ratten [A] är BPM; tryck in den medan du vrider så går det åtta
i taget. Exempelstycket går i 92. Har du ett tempo i huvudet så använd det — allt mellan
80 och 100 gör de senare sessionerna bekväma. [NO] stänger menyn igen.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Inget ändras ännu; tempot står uppe till höger på huvuddisplayen.
recover: Vägrar BPM att röra sig, följer Tonverk en extern klocka. §7.5.1 säger att displayen visar "MIDI" ovanför BPM; §6 beskriver en låsikon bredvid. Båda märkena betyder samma sak — dra ur MIDI- eller USB-klockan tills vidare.
:::

## Step: Hör tempot
keys: [FUNC, KEYBOARD F#1, PLAY, STOP]
source: manual §7.5.2
checked: yes
mode: playback

Håll [FUNC] och tryck på [KEYBOARD F#1] — dess mintgröna text säger Metronome. Tryck på
[PLAY]: ett klick i ditt tempo. Spela kicken mot det från klaviaturen en minut; det är
övningen, och det är hela skälet till att tempot kom före beatet. Tryck på [STOP], sedan
[FUNC] + [KEYBOARD F#1] igen för att tysta klicket.

:::checkpoint
hear: Ett klick i ditt tempo, fyra per takt, och din kick ovanpå.
recover: Inget klick: öppna [TEMPO] och titta på rattarna E till H — METRO slår på det och GAIN ställer hur högt det låter. Metronomen har ingen egen meny; den bor i högra halvan av tempomenyn.
:::

## Step: Döp projektet
keys: [FUNC, PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §9.1.1, §6.7
checked: yes
mode: menu:NAMING

Håll [FUNC] och tryck på [PRESET] för FILE-menyn igen, sedan PROJECT och SAVE AS. En
NAMING-skärm öppnas: [LEFT]/[RIGHT] flyttar mellan tecknen, [LEVEL/DATA] eller [UP]/[DOWN]
väljer ett, och att hålla [FUNC] nere tar fram alla bokstäver, siffror och tecken på en gång
så att du kan peka ut ett med pilarna. Döp det till SIXTEEN, eller något du känner igen, och
tryck på [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Inget ändras. Projektet, dess pattern och din kick ligger nu på kortet under ett namn du har valt.
recover: Hamnar du någonstans utan NAMING-skärm, valde du SAVE och inte SAVE AS. [NO] backar ut; SAVE AS är den som frågar efter ett namn och tar en ny plats. På själva namnskärmen raderar [FUNC] + [NO] en bokstav och [FUNC] + [YES] infogar ett mellanslag.
:::

## Step: Spara-vanan
keys: [FUNC, SETTINGS, NO]
source: community https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370
checked: yes
mode: any

Håll [FUNC] och tryck på [SETTINGS] — den mintgröna texten läser Save Proj. Ingenting frågar
dig något. Inget namn, ingen bekräftelse, ingen lista: projektet går rakt tillbaka till sin
egen plats under namnet du just gav det, och du är på huvuddisplayen igen. Gör det nu, så
att första gången du möter den tystnaden är en gång då du väntade dig den.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Ingenting alls. Den tystnaden är steget: projektet ligger på kortet, under namnet du gav det.
recover: Öppnades en meny med inställningar i stället? Då tryckte du på [SETTINGS] utan [FUNC]. Tryck på [NO], håll [FUNC] först, tryck sedan på [SETTINGS]. Är du osäker på om sparningen skedde: öppna FILE-menyn, PROJECT, LOAD — ditt namn står i listan.
:::

:::note
Frånvaron av en fråga är fällan. Ägare trycker [FUNC] + [SETTINGS], ser ingen namnskärm och
drar slutsatsen att inget sparades —
[tråden det här steget är hämtat ur](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)
är ägare som reder ut just det. §9.1.1 ger kombinationen ett enda jobb — den skriver det du
håller på med tillbaka till platsen det kom ifrån — och att döpa är SAVE AS, som du redan
har gjort. Du kan få se en kort banner medan kortet skrivs; ägare på det här OS:et
[har bett om att den ska bort](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824),
fast §9.1.1 aldrig nämner någon, så ta den som något som kan blinka förbi snarare än något
att vänta på. Din enhet får avgöra det.
:::

:::note
Det finns ingen pattern-sparning på den här maskinen, och ingen snabbknapp för en. Ett
pattern bor inuti projektet och når kortet först när projektet sparas. Inget annat räknas:
PERFORM-läget är ingen sparning, den tillfälliga memoreringen är en tillfällig
återställningspunkt som dör vid avstängning (§10.10.6), och en kedja sparas aldrig alls.
[FUNC] + [SETTINGS] är den enda vanan; skaffa dig den nu.
:::

## What you now have

Ett projekt som heter SIXTEEN med ett pattern, A01, ett ljud — en kick på spår 1 — och ett
tempo på 92. Det är sparat, så du kan stänga av här: nästa session börjar från det här
läget. Behöll du ditt eget namn eller ditt eget tempo fungerar nästa session likadant.

## Explore further

### Knacka in tempot
Håll [FUNC] och knacka på [TEMPO] fyra gånger i takt. Medelvärdet blir BPM från den fjärde
knackningen och framåt, och fortsätter uppdateras så länge du fortsätter knacka.

### Knuffa tempot
Med sequencern igång: håll [LEFT] eller [RIGHT] på huvuddisplayen, så sjunker eller stiger
tempot tio procent tills du släpper. Det här är till för att haka i en skiva eller en annan
maskin, inte för att komponera, och du behöver inte ha tempomenyn öppen för att göra det.

### Filtrera preset-listan
Öppna [PRESET] och tryck på [LEFT] en gång till, förbi kategorierna: en SORTING-meny öppnas
med CATEGORY, TAGS och en textbaserad SEARCH, och de tre staplas i stället för att ersätta
varandra ([FUNC] + [NO] rensar en sökning). Det här
[kom i OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes) och det är
skillnaden mellan en bläddrare och en scroll.

### Den andra kategorin
Bläddra i KEYS, ladda något, spela på klaviaturen och ladda sedan tillbaka din kick.
Laddningen ersätter spåret båda gångerna — bara patternets kopia ändras någonsin, och på
kortet ligger båda preseten kvar precis som de var.

### Nivåratten
[LEVEL/DATA] ställer det aktiva spårets nivå, och displayen visar den nere till höger medan
du vrider. Nu när du vet vad den gör slutar den vara ratten som mystiskt tystar ner saker.

## Next

Session 2 lägger tre trumljud till på spår 2 till 4 och skriver det beat på en takt som hela
stycket står på. Innan dess förklarar tio minuter på
[Innan du börjar](/before-you-start/) de fem behållarna en sparning rör vid och de fyra
sorternas spår: det är sidan varje senare session lutar sig mot.
