---
number: 8
chapter: sound
slug: modulation
title: Modulation
goal: "Håll ett ackord i fyra takter på spår 4 och få det att röra sig med enbart modulatorer: ett filter som sveper med patternet, en ny plats mellan vänster och höger vid varje varv, en böjning in i varje ackord, och en reverb som driver på en egen klocka."
needs: [Projektet från session 7, Hörlurar anslutna, "Ungefär sexton minuter"]
teaches: [lfo, lfo-speed, lfo-modes, play-mode, mod-envelope, fx-lfo, modulation-destinations, mod-overview]
simulator: modulation
ends: { keys16: { 1: red } }
---

## Step: Där du är
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

Session 7 lämnade A01 routat: kitet ihoppressat på buss 1, ackorden som andas på buss 2 och in i
reverben på spår 15, basen raka vägen till mixern, och buss 1 som aktivt spår. Står sequencern
still, tryck på [PLAY]. Håll [FUNC] nere och tryck på [SETTINGS] innan spår 4 får ett ljud: i den
här sessionen läggs ett ackord på det, och det ändras aldrig mer. Allt som rör sig efter det är en
modulator.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: Stycket som session 7 lämnade det: trummorna täta på sin buss, ackorden som dyker på varje slag med ett rum bakom sig, basslinjen under båda.
recover: Börjar du här utan session 7? Den sessionen routar stycket, och den tar ungefär sexton minuter; vilket pattern som helst med ackord på spår 3 och inget på spår 4 fungerar lika bra, så länge spår 15 fortfarande har reverben som ett nytt pattern har där.
:::

## Step: En pad på spår 4
keys: [TRK, TRIG 4, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 4: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Håll [TRK] nere och tryck på [TRIG 4]. Tryck på [PRESET], [RIGHT] till KEYS, [UP]/[DOWN] till
⟨pad preset⟩, och [YES] — eller vilket KEYS-ljud som helst som håller så länge dess tangent är nere
och står stilla under tiden. Håll sedan [FUNC], tryck på [PAGE], håll [FUNC] och vrid [E] till
LENGTH 64 för spår 4, och tryck på [NO]. Menyn står fortfarande på PER TRACK, så kitet behåller
sin enda takt (§10.9.2). Håll en tangent i den nedre raden i fyra takter och lyssna på den.

:::note
Ett preset som redan rör sig har en egen modulation med sig. Tangenten för en parametersida,
hållen tillsammans med [PLAY], ställer tillbaka den sidan på sina grundvärden (§12.1): [MOD] går
igenom de fem MOD-sidorna, och [MOD] + [PLAY] på var och en lämnar ljudet stilla.
:::

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Med tangenten nere varar en ton de fyra takterna och ingenting i den rör sig; beatet, basslinjen och ackorden fortsätter under den.
recover: Tonen dör ut innan de fyra takterna är slut: det här presetet håller inte — välj ett annat. LENGTH visade redan 64 när menyn öppnades: det är ett annat spårs — [TRK] + [TRIG 4], och sedan [FUNC] + [PAGE] igen.
:::

## Step: Ett ackord, fyra takter
keys: [+, RECORD, TRIG 1, KEYBOARD E1, KEYBOARD A1, TRIG, C]
leds: { RECORD: red }
source: manual §8.5, §10.3, §10.3.1, §12.2
mode: grid-recording

Tryck på [+] tills den tända pricken bredvid [+] och [-] står på 0. Session 6 ställde klaviaturen
på −1 och ackorden spelades där, så nu låter tangenterna en oktav över dem (§8.5). Tryck på
[RECORD] för GRID RECORDING och tryck på [TRIG 1]: en trig. Håll [TRIG 1] nere och tryck på
[KEYBOARD E1] och [KEYBOARD A1]: de två tonerna tar platsen för trigens egen ton (§10.3.1). Tryck på
[TRIG] för TRIG-sidan, håll [TRIG 1] nere igen och vrid [C], LEN, upp till 64 steg (§12.2): nu
varar ackordet hela patternet. En ton kan vara upp till 128 steg lång
([vad ägare säger](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/147)). Tryck på
[RECORD] för att lämna GRID RECORDING.

:::checkpoint
keys16: { 1: red }
hear: E och A tillsammans, från första slaget i takt 1 tills loopen går runt, över alla fyra ackorden och rena mot vart och ett av dem.
recover: Padden morrar under ackorden, eller skaver mot det andra: den ligger en oktav för lågt — [+] tills pricken står på 0, sedan [RECORD], håll [TRIG 1] och tryck på de två tangenterna igen. En ton i stället för två: tangenterna trycktes utan att [TRIG 1] hölls. Den andra vägen in: [STEP EDIT], [TRIG 1], de två tangenterna, [STEP EDIT] (§10.3). Ett ackord som varar ett enda steg fast LEN visar 64: en ägare råkade ut för det på 1.4.1 ([rapporten](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2588)) — vrid ner LEN och upp till 64 igen.
:::

## Step: LFO 1, på gehör
keys: [FLTR, MOD, H, D, YES]
source: manual §12.12
mode: playback

Tryck på [FLTR] och vrid FREQ, med ratten under den, till ungefär hälften: en LFO lägger sitt djup
runt parameterns eget värde, så filtret behöver plats åt båda hållen. Tryck på [MOD]: LFO 1:s sida
(§12.12). Vrid [H], DEP, till ungefär 40. Vrid sedan [D], DEST: en lista öppnas över sidan, och
varje rad hörs så länge den är markerad. Gå långsamt nedåt och lyssna på vad LFO:n gör med varje
parameter. Stanna på FLTR:Frequency och tryck på [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST FLTR FREQ", WAVE, SPH, MODE, "DEP 40"], invert: [3] }
hear: Padden ljusnar och mörknar av sig själv, i en takt som inte har något med takterna att göra.
recover: Halva varje sweep gör ingenting: FREQ står i ena änden — [FLTR], och FREQ till hälften. Ingenting rör sig: DEP står på 0, eller så stängdes listan med [NO], som behåller destinationen den hade.
:::

## Step: Fyra takter lång
keys: [A, B]
source: manual §12.12, §12.16
mode: playback

Vrid [A], SPD, till 8 och [B], MULT, till BPM 4. En cykel hos en LFO varar 2048 ÷ (SPD × MULT)
steg på sitt spår (tabellen efter §12.16): 2048 ÷ 32 är 64, patternets fyra takter. I MODE FREE
följer en LFO tempot och bryr sig inte om [PLAY] eller [STOP]: den fortsätter gå medan sequencern
står still
([en testare om det](https://www.elektronauts.com/t/experiencing-some-massive-lfo-confusion/256117/9)).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 8", "MULT BPM 4", FADE, "DEST FLTR FREQ", WAVE, SPH, "MODE FREE", "DEP 40"], invert: [0, 1] }
hear: En uppgång och en nedgång varar nu de fyra ackorden, och sweepen börjar på ett nytt ställe vid varje [PLAY].
recover: En sweep ungefär dubbelt så lång som de fyra takterna: på 1.4.1 kan en multiplikator som ställs in för första gången gå för långsamt tills man lämnar patternet och går in i det igen ([rapporten](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2636)) — håll [PTN] och tryck på [TRIG 2], håll sedan [PTN] och tryck på [TRIG 1]. Sweepen börjar redan på samma ställe varje gång: MODE står inte på FREE, och steg 6 ställer in det.
:::

## Step: Från början
keys: [G, FUNC, TRIG, LEFT, RIGHT, NO, STOP, PLAY]
source: manual §12.12, §11.1.1
mode: menu:TRACK SETUP

Vrid [G], MODE, till TRIG: nu startar varje note-trig om LFO:n, och padden har en, på steg 1
(§12.12). Håll [FUNC] nere och tryck på [TRIG]: TRACK SETUP, med PLAY MODE som första rad. Ställ
den på POLY M.LFO med [LEFT]/[RIGHT] och tryck på [NO]. I POLY har var och en av de två tonerna en
egen LFO; i POLY M.LFO delar de på en (§11.1.1). Tryck på [STOP], sedan [PLAY]: sweepen börjar med
takt 1.

Simulatorn nedanför börjar med de här inställningarna, med modulatorerna från steg 7 till 9 redan
på plats. Ställ dess note-trigs på en i varje takt: LFO 1 startar om sexton steg in i varje sweep
och avslutar aldrig någon. Det är en enda trig, fyra takter lång, som låter sweepen gå till sitt
slut. Tryck sedan på dess [STOP], sedan [PLAY]: LFO 1 börjar där den började; FX LFO 1, som steg 9
lämnar i FREE, gör det inte, och LFO 2 får nya värden.

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE POLY M.LFO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: Sweepen börjar med takt 1 på varje varv, och igen efter varje [STOP] och [PLAY].
recover: En sweep som börjar var som helst: MODE står fortfarande på FREE. De två tonerna går isär, en ljus medan den andra är mörk: PLAY MODE står fortfarande på POLY.
:::

:::simulator

## Step: En ny plats vid varje varv
keys: [MOD, E, G, D, YES, H]
source: manual §12.13
mode: playback

Tryck på [MOD] tills sidan är LFO 2:s: samma åtta rattar (§12.13). Vrid [E], WAVE, till RND och
[G], MODE, till HOLD: slumpvågen går osedd, och varje note-trig håller kvar det värde den har just
då, fram till nästa (§12.12). Vrid [D], DEST, till AMP:Pan och tryck på [YES], och sedan [H], DEP,
till ungefär 40.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST AMP PAN", "WAVE RND", SLEW, "MODE HOLD", "DEP 40"], invert: [3, 4, 6] }
hear: Var fjärde takt är padden någon annanstans mellan vänster och höger, och stannar där tills ackordet börjar igen.
recover: Padden vandrar åt vänster och höger utan vila: MODE står inte på HOLD. De två tonerna hamnar på två ställen: PLAY MODE står på POLY (steg 6). Alltid exakt i mitten: DEP står på 0.
:::

## Step: En böjning in i varje ackord
keys: [MOD, G, YES, H, A, B, C]
source: manual §12.14
mode: playback

Tryck på [MOD] igen: mod-envelopens sida (§12.14). Vrid [G], DEST, till SRC:Tune och tryck på
[YES]. Ställ [A], ATK, på 0, [B], DEC, kort, och [C], SUS, på 0, och vrid sedan [H], DEP, en aning
under noll. Envelopen startar en gång vid varje note-trig och sedan är den över: den har en början
och ett slut, där en LFO går runt.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["ATK 0", DEC, "SUS 0", REL, RSET, "", "DEST SRC TUNE", DEP], invert: [6] }
hear: Varje gång ackordet börjar kommer det in en aning för lågt och lägger sig till rätta, en gång.
recover: Padden ligger för lågt genom hela ackordet: SUS står över 0. Den kommer in för högt: DEP står över noll. Ingen böjning alls: listan stängdes utan [YES], eller så står DEP på 0.
:::

## Step: Rummet på sin egen klocka
keys: [FX, MOD, D, YES, A, B, H]
source: manual §12.8, §12.15
mode: playback

Tryck på [FX] för FX-sida 1 och vrid upp SND3 med ratten under den, ungefär till hälften, som på
ackorden i session 7 (§12.8): padden når reverben på spår 15. Tryck på [MOD] tills sidan är FX
LFO 1:s (§12.15). Vrid [D], DEST, till Send 3 Amount och tryck på [YES]: en FX LFO når spårets
effekter och dess sends, inte rösten (manualens Appendix B räknar upp dem). Vrid [A], SPD, till 6,
[B], MULT, till BPM 4 och [H], DEP, till ungefär 30, och låt MODE stå på FREE. En cykel är
2048 ÷ 24 = 85⅓ steg: längre än patternet, och ingenting startar om den.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 6", "MULT BPM 4", FADE, DEST, WAVE, SPH, "MODE FREE", "DEP 30"], invert: [0, 1, 7] }
hear: Padden driver in i rummet och ut ur det igen, långsammare än filtret och aldrig i takt med det.
recover: Ingen Send 3 Amount i listan: sidan är LFO 1:s, LFO 2:s eller envelopens, och de når bara rösten — [MOD] tills FX LFO 1 kommer. Inget rum alls: SND3 gick upp på ett annat spår ([TRK] + [TRIG 4] först), eller så har spår 15 något annat i det här patternet.
:::

## Step: Sexton takter, händerna borta
keys: [FUNC, MOD, NO]
source: manual §11.6
mode: playback

Håll [FUNC] nere och tryck på [MOD]: en bild av vad som når vad på det här spåret, de två LFO:erna
och envelopen till SRC, FLTR och AMP, FX LFO:erna till effekterna. Ingenting på den går att ställa
in; det gör MOD-sidorna (§11.6). Tryck på [NO]. Ta sedan händerna från maskinen i fyra varv av
patternet, sexton takter.

:::checkpoint
hear: Filtret gör samma resa på varje varv. Panoreringen delas ut på nytt vid varje. Böjningen markerar varje början. Rummet möter filtret igen först efter sexton takter.
recover: Rummet och filtret stiger och sjunker tillsammans: FX LFO 1:s SPD står också på 8 — [MOD] tills FX LFO 1 kommer, och [A] till 6.
:::

## Step: Spara
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Håll [FUNC] nere och tryck på [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4 }
hear: Stycket med sin pad: ett ackord som aldrig ändras, och fyra modulatorer som rör det.
recover: Ingen skärm sa att projektet skrevs: [FUNC] var inte nere när [SETTINGS] trycktes. Tryck på dem tillsammans igen.
:::

## What you now have

Spår 4 har en enda trig: E och A, fyra takter lång. Fyra modulatorer rör den. LFO 1 sveper filtret
en gång per varv och börjar med takt 1. LFO 2 ger padden en ny plats mellan vänster och höger vid
varje varv. Mod-envelopen böjer början av varje ackord. FX LFO 1 rör senden till reverben på en
klocka om 85⅓ steg, som möter filtrets 64 var sextonde takt. Det är sparat med stycket.

## Explore further

### En modulator på en modulator
På LFO 2:s sida, vrid DEST vidare från AMP:Pan, förbi AMP-raderna, till LFO 1:s djup, och tryck på
[YES]: LFO 2 och envelopen kan nå LFO 1:s egna inställningar (manualens Appendix B). Nu sveper
varje varv filtret olika långt.

### Velocity rör fyra rattar
[FUNC] + [TRIG], ner till VELOCITY MOD, och [YES]: [A] till [D] väljer upp till fyra parametrar,
[YES] bekräftar dem, och [E] till [H] ställer in hur långt var och en rör sig (§11.1.10).
Ackordtrigens VEL är då en hand på alla fyra. Ställ först VELOCITY TO VOL på OFF, i [FUNC] + [AMP]
(§11.4.1), annars är ett mjukt ackord också ett svagt
([vad ägare säger](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/616)). [FUNC] + [PLAY]
tömmer sidan (§11.1).

### En pad som vet sitt register
I samma meny tar KEY TRACKING också upp till fyra parametrar (§11.1.9). Ge den FLTR:Frequency med
ett positivt djup och spela den nedre raden från vänster till höger: varje tangent är ljusare än
den före.

### Tärningar på en sida
Spara först. På LFO 2:s sida ger [MOD] + [YES] varje ratt på sidan ett nytt värde, ett annat vid
varje tryck, och [MOD] + [PLAY] ställer tillbaka sidan på sina grundvärden (§12.1). Steg 7 ställer
in den igen.

### En annan andra klocka
Ställ FX LFO 1:s SPD på 8: rummet rör sig med filtret, varv efter varv. Ställ den på 5: de två
möts var 32:a takt. Simulatorn i steg 6 ger antalet för vilket par av inställningar som helst.

## Next

Session 9 samplar själva stycket: en loop på en takt av mixen, lagd på spår 5.
