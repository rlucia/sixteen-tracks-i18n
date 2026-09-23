---
number: 1
chapter: rhythm
slug: first-sound
title: Första ljudet
goal: Slå på strömmen, lägg ett trumkit på spår 1, hitta dess kick på den nedre raden, ställ tempot och spara ett projekt du kan komma tillbaka till.
needs: [Tonverk och dess nätadapter, "Hörlurar med 6,3 mm-kontakt (eller en mixer på OUT A/B)", Fabriks-SD-kortet i sin plats, "Ungefär sexton minuter"]
teaches: [power, volume, new-project, track-select, load-preset, kit, subtrack-select, tempo, metronome, name-project, save-project]
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

## Step: Ladda ett kit
keys: [PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §7.1, §9.1.4
mode: menu:LOAD PRESET

Tryck på [PRESET]. LOAD PRESET-menyn öppnas på det aktiva spåret. [LEFT]/[RIGHT] flyttar
mellan preset-kategorierna DRUMS och KEYS; stanna i DRUMS. Scrolla med [UP]/[DOWN] eller
[LEVEL/DATA] till 017 HELLO KIT, kitet som exempelstycket använder, och tryck på [YES] för att
ladda det till spår 1. Ett annat kit fungerar lika bra: stegen nämner HELLO KITs tangenter, och
i ditt kan samma ljud ligga på andra tangenter.

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 0 }
hear: Tryck en gång på [TRIG 1]. Ett av kitets ljud spelar.
recover: Tystnad: upp lite med [MAIN VOLUME], och hörlurskontakten hela vägen in. Ger [TRIG 1] inget ljud alls, hamnade presetet någon annanstans — håll [TRK], tryck på [TRIG 1] och ladda om det.
:::

:::note
Nästan allt under DRUMS är ett kit: åtta ljud på ett spår, inte en enda trumma.
[En rundtur bland fabrikskiten](https://www.youtube.com/watch?v=vWVw534Xvs4) spelar dem ett
efter ett. Det finns inget preset som bara är en kick: du laddar ett kit och hittar kicken i
det.
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

## Step: Åtta ljud på den nedre raden
keys: [KEYBOARD C1, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, KEYBOARD G1, KEYBOARD A1, KEYBOARD B1, KEYBOARD C2, TRIG 1]
leds: { KEYBOARD C1: red }
source: manual §3.1, §A.2.3
mode: any

Tryck på klaviaturens nedre rad en tangent i taget, från [KEYBOARD C1] till [KEYBOARD C2].
Varje tangent är ett av kitets ljud. Siffran på skärmen följer tangenten du tryckte på, och
den tangenten förblir röd: det är ljudet som [TRIG 1] spelar nu. Skilj dem åt efter var de
ligger och hur länge de klingar. Kicken är den mörkaste, och kort — den som de andra står
på. Snaren är en skarp smäll mitt i registret; en clap är en handklappning och tar ofta
snarens plats. Den stängda hi-haten är den ljusaste och kortaste av alla; en öppen hi-hat är
lika ljus men ringer kvar. En tom är en trumma med tydlig tonhöjd, och en cymbal är ett långt
metalliskt sus. I HELLO KIT ligger kicken på [KEYBOARD C1]: tryck på den sist, och sedan på
[TRIG 1].

:::checkpoint
hear: Åtta olika ljud, och sedan kicken ensam från [TRIG 1].
recover: Klaviaturens övre rad och oktavtangenterna gör ingenting medan ett kit ligger på spåret; det är kitet, inte ett fel. Spelar [TRIG 1] något som inte är din kick ligger den röda tangenten någon annanstans — tryck på [KEYBOARD C1], eller tangenten där ditt kit har kicken, och försök igen.
:::

:::note
Klaviaturen följer inte alltid spåret du just har valt. Välj vad som helst från spår 9 till
16 medan ett audiospår var aktivt och [KEYBOARD] stannar kvar på det tidigare audiospåret
(§5.3.7, §8.5), så att du kan spela genom en buss medan du justerar den. För en nykomling
läses det som ett val som inte gick igenom.
[Det är meningen](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
välj ett audiospår, 1 till 8, så kommer klaviaturen tillbaka.
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
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Inget ändras ännu; tempot står uppe till höger på huvuddisplayen.
recover: Vägrar BPM att röra sig, följer Tonverk en extern klocka. §7.5.1 säger att displayen visar "MIDI" ovanför BPM; §6 beskriver en låsikon bredvid. Båda märkena betyder samma sak — dra ur MIDI- eller USB-klockan tills vidare.
:::

## Step: Hör tempot
keys: [FUNC, KEYBOARD F#1, PLAY, KEYBOARD C1, STOP]
source: manual §7.5.2
checked: yes
mode: playback

Håll [FUNC] och tryck på [KEYBOARD F#1] — dess mintgröna text säger Metronome. Tryck på
[PLAY]: ett klick i ditt tempo. Spela kicken på [KEYBOARD C1] mot det en minut; det är
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
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Inget ändras. Projektet, dess pattern och ditt kit ligger nu på kortet under ett namn du har valt.
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
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
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

Ett projekt som heter SIXTEEN med ett pattern, A01, ett trumkit på spår 1 — HELLO KIT, med
kicken hittad på [KEYBOARD C1] — och ett tempo på 92. Det är sparat, så du kan stänga av här: nästa session börjar från det här
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
Bläddra i KEYS, ladda något och spela på klaviaturen: ett KEYS-preset är ett enda ljud över
hela klaviaturen, den övre raden och oktavtangenterna inräknade. Ladda sedan tillbaka HELLO
KIT. Laddningen ersätter spåret båda gångerna — bara patternets kopia ändras någonsin, och på
kortet ligger båda preseten kvar precis som de var.

### Andra kit
Ladda några kit till från DRUMS och spela den nedre raden på vart och ett. Tangenterna är
desamma; det som ligger på dem skiftar från kit till kit, och ditt öra är den enda kartan.
Ladda tillbaka HELLO KIT när du är klar, eller behåll kitet du gillade och kom ihåg var dess
kick, snaren, den stängda hi-haten och clapen ligger.

### Nivåratten
[LEVEL/DATA] ställer det aktiva spårets nivå, och displayen visar den nere till höger medan
du vrider. Nu när du vet vad den gör slutar den vara ratten som mystiskt tystar ner saker.

## Next

Session 2 skriver det beat på en takt som hela stycket står på, på det här enda spåret, ett
av kitets ljud i taget. Innan dess förklarar tio minuter på
[Innan du börjar](/before-you-start/) de fem behållarna en sparning rör vid och de fyra
sorternas spår: det är sidan varje senare session lutar sig mot.
