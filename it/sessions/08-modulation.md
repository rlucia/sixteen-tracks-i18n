---
number: 8
chapter: sound
slug: modulation
title: Modulazione
goal: "Tieni un accordo per quattro battute sulla traccia 4 e fallo muovere con i soli modulatori: un filtro che si apre e si chiude con il pattern, un posto nuovo tra sinistra e destra a ogni giro, una piega dentro ogni accordo, e un riverbero che va alla deriva su un orologio tutto suo."
needs: [Il progetto della sessione 7, Cuffie collegate, "Circa sedici minuti"]
teaches: [lfo, lfo-speed, lfo-modes, play-mode, mod-envelope, fx-lfo, modulation-destinations, mod-overview]
simulator: modulation
ends: { keys16: { 1: red } }
---

## Step: Dove sei
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

La sessione 7 ha lasciato A01 instradato: il kit compresso sul bus 1, gli accordi che respirano
sul bus 2 e dentro il riverbero della traccia 15, il basso dritto al mixer, e il bus 1 come traccia
attiva. Se il sequencer è fermo, premi [PLAY]. Tieni premuto [FUNC] e premi [SETTINGS] prima che
la traccia 4 abbia un suono: in questa sessione ci va sopra un accordo, e non cambia più. Tutto
quello che si muove dopo è un modulatore.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: Il pezzo come l'ha lasciato la sessione 7: la batteria compatta sul suo bus, gli accordi che si abbassano a ogni movimento con una stanza dietro, la bassline sotto a tutti e due.
recover: Parti da qui senza la sessione 7? Quella sessione instrada il pezzo, e dura circa sedici minuti; va bene anche qualsiasi pattern con gli accordi sulla traccia 3 e niente sulla traccia 4, purché la traccia 15 contenga ancora il riverbero che ha in un pattern nuovo.
:::

## Step: Un pad sulla traccia 4
keys: [TRK, TRIG 4, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 4: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Tieni premuto [TRK] e premi [TRIG 4]. Premi [PRESET], [RIGHT] fino a KEYS, [UP]/[DOWN] fino a
⟨pad preset⟩, e [YES] — oppure qualsiasi suono KEYS che tiene finché il suo tasto è premuto, e
intanto sta fermo. Poi tieni [FUNC], premi [PAGE], tieni [FUNC] e gira [E] fino a LENGTH 64 per la
traccia 4, e premi [NO]. Il menu è ancora su PER TRACK, quindi il kit tiene la sua unica battuta
(§10.9.2). Tieni premuto un tasto della fila in basso per quattro battute e ascoltalo.

:::note
Un preset che si muove già porta con sé una modulazione sua. Il tasto di una pagina di parametri,
tenuto insieme a [PLAY], riporta quella pagina ai valori di partenza (§12.1): [MOD] passa per le
cinque pagine MOD, e [MOD] + [PLAY] su ognuna lascia il suono fermo.
:::

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Con il tasto tenuto, una nota dura le quattro battute e dentro non si muove niente; il beat, la bassline e gli accordi vanno avanti sotto.
recover: La nota si spegne prima che le quattro battute finiscano: questo preset non tiene — scegline un altro. LENGTH diceva già 64 quando il menu si è aperto: è quella di un'altra traccia — [TRK] + [TRIG 4], poi di nuovo [FUNC] + [PAGE].
:::

## Step: Un accordo, quattro battute
keys: [+, RECORD, TRIG 1, KEYBOARD E1, KEYBOARD A1, TRIG, C]
leds: { RECORD: red }
source: manual §8.5, §10.3, §10.3.1, §12.2
mode: grid-recording

Premi [+] finché il puntino acceso accanto a [+] e [-] è su 0. La sessione 6 ha messo la tastiera
su −1 e gli accordi sono stati suonati lì, quindi adesso i tasti suonano un'ottava sopra (§8.5).
Premi [RECORD] per GRID RECORDING e premi [TRIG 1]: un trig. Tieni premuto [TRIG 1] e premi
[KEYBOARD E1] e [KEYBOARD A1]: le due note prendono il posto di quella del trig (§10.3.1). Premi
[TRIG] per la pagina TRIG, tieni di nuovo premuto [TRIG 1] e gira [C], LEN, fino a 64 passi
(§12.2): adesso l'accordo dura tutto il pattern. Una nota può durare fino a 128 passi
([i proprietari ne parlano](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/147)). Premi
[RECORD] per uscire da GRID RECORDING.

:::checkpoint
keys16: { 1: red }
hear: Mi e La insieme, dal primo movimento della battuta 1 finché il loop torna da capo, sopra tutti e quattro gli accordi e intonati con ognuno.
recover: Il pad ringhia sotto gli accordi, o stride contro il secondo: è un'ottava sotto — [+] finché il puntino è su 0, poi [RECORD], tieni [TRIG 1] e premi di nuovo i due tasti. Una nota invece di due: i tasti sono entrati senza [TRIG 1] tenuto. L'altra strada: [STEP EDIT], [TRIG 1], i due tasti, [STEP EDIT] (§10.3). Un accordo lungo un passo solo anche se LEN dice 64: è capitato a un proprietario su 1.4.1 ([la segnalazione](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2588)) — abbassa LEN e riportalo a 64.
:::

## Step: LFO 1, a orecchio
keys: [FLTR, MOD, H, D, YES]
source: manual §12.12
mode: playback

Premi [FLTR] e porta FREQ, con la manopola sotto, circa a metà: un LFO aggiunge la sua profondità
intorno al valore proprio del parametro, quindi al filtro serve spazio da tutte e due le parti.
Premi [MOD]: la pagina dell'LFO 1 (§12.12). Gira [H], DEP, fino a circa 40. Poi gira [D], DEST: si
apre una lista sopra la pagina, e ogni riga si sente finché è evidenziata. Scendi piano e ascolta
che cosa fa l'LFO a ogni parametro. Fermati su FLTR:Frequency e premi [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST FLTR FREQ", WAVE, SPH, MODE, "DEP 40"], invert: [3] }
hear: Il pad si schiarisce e si scurisce da solo, con un passo che non ha niente a che fare con le battute.
recover: Metà di ogni sweep non fa niente: FREQ è fermo a un estremo — [FLTR], e FREQ a metà. Non si muove niente: DEP è a 0, oppure la lista è stata chiusa con [NO], che lascia la destinazione di prima.
:::

## Step: Lungo quattro battute
keys: [A, B]
source: manual §12.12, §12.16
mode: playback

Gira [A], SPD, fino a 8 e [B], MULT, fino a BPM 4. Un ciclo di un LFO dura 2048 ÷ (SPD × MULT)
passi della sua traccia (la tabella dopo il §12.16): 2048 ÷ 32 fa 64, le quattro battute del
pattern. In MODE FREE un LFO segue il tempo e non bada a [PLAY] né a [STOP]: continua a correre
mentre il sequencer è fermo
([ne parla un tester](https://www.elektronauts.com/t/experiencing-some-massive-lfo-confusion/256117/9)).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 8", "MULT BPM 4", FADE, "DEST FLTR FREQ", WAVE, SPH, "MODE FREE", "DEP 40"], invert: [0, 1] }
hear: Una salita e una discesa durano adesso i quattro accordi, e lo sweep parte da un punto diverso a ogni [PLAY].
recover: Uno sweep lungo circa il doppio delle quattro battute: su 1.4.1 un moltiplicatore impostato per la prima volta può andare lento finché non si esce dal pattern e ci si rientra ([la segnalazione](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2636)) — tieni [PTN] e premi [TRIG 2], poi tieni [PTN] e premi [TRIG 1]. Lo sweep parte già ogni volta dallo stesso punto: MODE non è su FREE, e il passo 6 lo imposta.
:::

## Step: Da capo
keys: [G, FUNC, TRIG, LEFT, RIGHT, NO, STOP, PLAY]
source: manual §12.12, §11.1.1
mode: menu:TRACK SETUP

Gira [G], MODE, su TRIG: adesso ogni trig di nota fa ripartire l'LFO, e il pad ne ha uno, sul
passo 1 (§12.12). Tieni premuto [FUNC] e premi [TRIG]: TRACK SETUP, con PLAY MODE come prima
riga. Impostala su POLY M.LFO con [LEFT]/[RIGHT] e premi [NO]. In POLY ognuna delle due note ha
un LFO suo; in POLY M.LFO ne condividono uno (§11.1.1). Premi [STOP], poi [PLAY]: lo sweep
comincia con la battuta 1.

Il simulatore qui sotto parte da queste impostazioni, con i modulatori dei passi da 7 a 9 già al
loro posto. Imposta i suoi trig di nota su uno in ogni battuta: l'LFO 1 riparte sedici passi dopo
l'inizio di ogni sweep e non ne finisce mai uno. È un trig solo, lungo quattro battute, a lasciare
che lo sweep arrivi in fondo. Poi premi il suo [STOP], poi [PLAY]: l'LFO 1 parte da dove era
partito; l'FX LFO 1, che il passo 9 lascia in FREE, no, e all'LFO 2 toccano valori nuovi.

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE POLY M.LFO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: Lo sweep comincia con la battuta 1 a ogni giro, e di nuovo dopo ogni [STOP] e [PLAY].
recover: Uno sweep che parte da un punto qualsiasi: MODE è ancora su FREE. Le due note si separano, una chiara mentre l'altra è scura: PLAY MODE è ancora su POLY.
:::

:::simulator

## Step: Un posto nuovo a ogni giro
keys: [MOD, E, G, D, YES, H]
source: manual §12.13
mode: playback

Premi [MOD] finché la pagina è quella dell'LFO 2: le stesse otto manopole (§12.13). Gira [E],
WAVE, su RND e [G], MODE, su HOLD: l'onda casuale corre senza farsi vedere, e ogni trig di nota
ferma il valore che ha in quel momento, fino al trig successivo (§12.12). Gira [D], DEST, su
AMP:Pan e premi [YES], poi [H], DEP, fino a circa 40.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST AMP PAN", "WAVE RND", SLEW, "MODE HOLD", "DEP 40"], invert: [3, 4, 6] }
hear: Ogni quattro battute il pad è da un'altra parte tra sinistra e destra, e ci resta finché l'accordo ricomincia.
recover: Il pad vaga a sinistra e a destra senza fermarsi: MODE non è su HOLD. Le due note finiscono in due posti diversi: PLAY MODE è su POLY (passo 6). Sempre esattamente al centro: DEP è a 0.
:::

## Step: Una piega dentro ogni accordo
keys: [MOD, G, YES, H, A, B, C]
source: manual §12.14
mode: playback

Premi ancora [MOD]: la pagina dell'inviluppo di modulazione (§12.14). Gira [G], DEST, su SRC:Tune e
premi [YES]. Metti [A], ATK, a 0, [B], DEC, corto, e [C], SUS, a 0, poi gira [H], DEP, appena
sotto lo zero. L'inviluppo parte una volta a ogni trig di nota e poi è finito: ha un inizio e una
fine, dove un LFO gira in tondo.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["ATK 0", DEC, "SUS 0", REL, RSET, "", "DEST SRC TUNE", DEP], invert: [6] }
hear: Ogni volta che l'accordo comincia entra appena calante e si assesta, una volta sola.
recover: Il pad resta calante per tutto l'accordo: SUS è sopra 0. Entra crescente: DEP è sopra lo zero. Nessuna piega: la lista è stata chiusa senza [YES], oppure DEP è a 0.
:::

## Step: La stanza sul suo orologio
keys: [FX, MOD, D, YES, A, B, H]
source: manual §12.8, §12.15
mode: playback

Premi [FX] per la pagina FX 1 e alza SND3 con la manopola sotto, circa a metà, come sugli accordi
nella sessione 7 (§12.8): il pad arriva al riverbero della traccia 15. Premi [MOD] finché la
pagina è quella dell'FX LFO 1 (§12.15). Gira [D], DEST, su Send 3 Amount e premi [YES]: un FX LFO
arriva agli effetti della traccia e ai suoi send, non alla voce (l'Appendice B del manuale li
elenca). Gira [A], SPD, fino a 6, [B], MULT, fino a BPM 4 e [H], DEP, fino a circa 30, e lascia
MODE su FREE. Un ciclo è 2048 ÷ 24 = 85⅓ passi: più lungo del pattern, e niente lo fa ripartire.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 6", "MULT BPM 4", FADE, DEST, WAVE, SPH, "MODE FREE", "DEP 30"], invert: [0, 1, 7] }
hear: Il pad scivola dentro la stanza e ne esce di nuovo, più lento del filtro e mai al passo con lui.
recover: Nessun Send 3 Amount nella lista: la pagina è quella dell'LFO 1, dell'LFO 2 o dell'inviluppo, e quelli arrivano solo alla voce — [MOD] finché arriva l'FX LFO 1. Nessuna stanza: SND3 è salito su un'altra traccia (prima [TRK] + [TRIG 4]), o la traccia 15 contiene altro in questo pattern.
:::

## Step: Sedici battute, giù le mani
keys: [FUNC, MOD, NO]
source: manual §11.6
mode: playback

Tieni premuto [FUNC] e premi [MOD]: un disegno di che cosa arriva a che cosa su questa traccia, i
due LFO e l'inviluppo a SRC, FLTR e AMP, gli FX LFO agli effetti. Lì sopra non si imposta niente;
lo fanno le pagine MOD (§11.6). Premi [NO]. Poi togli le mani dalla macchina per quattro giri del
pattern, sedici battute.

:::checkpoint
hear: Il filtro fa lo stesso viaggio a ogni giro. Il pan viene ridato a ognuno. La piega segna ogni inizio. La stanza ritrova il filtro solo dopo sedici battute.
recover: La stanza e il filtro salgono e scendono insieme: anche l'SPD dell'FX LFO 1 è a 8 — [MOD] finché arriva l'FX LFO 1, e [A] a 6.
:::

## Step: Salva
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Tieni premuto [FUNC] e premi [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4 }
hear: Il pezzo con il suo pad: un accordo che non cambia mai, e quattro modulatori che lo muovono.
recover: Nessuna schermata ha detto che il progetto è stato scritto: [FUNC] non era giù quando è arrivato [SETTINGS]. Premili di nuovo insieme.
:::

## What you now have

La traccia 4 ha un trig solo: Mi e La, lungo quattro battute. Lo muovono quattro modulatori. L'LFO
1 apre e chiude il filtro una volta per giro e comincia con la battuta 1. L'LFO 2 dà al pad un
posto nuovo tra sinistra e destra a ogni giro. L'inviluppo di modulazione piega l'inizio di ogni
accordo. L'FX LFO 1 muove il send del riverbero su un orologio di 85⅓ passi, che ritrova i 64 del
filtro ogni sedici battute. È salvato con il pezzo.

## Explore further

### Un modulatore su un modulatore
Sulla pagina dell'LFO 2 gira DEST oltre AMP:Pan, passate le righe AMP, fino alla profondità
dell'LFO 1, e premi [YES]: l'LFO 2 e l'inviluppo possono arrivare alle impostazioni dell'LFO 1
(l'Appendice B del manuale). Adesso ogni giro muove il filtro di una quantità diversa.

### La velocity muove quattro manopole
[FUNC] + [TRIG], giù fino a VELOCITY MOD, e [YES]: da [A] a [D] si scelgono fino a quattro
parametri, [YES] li conferma, e da [E] a [H] si decide di quanto si muove ognuno (§11.1.10). La
VEL del trig dell'accordo è allora una mano su tutti e quattro. Prima metti VELOCITY TO VOL su
OFF, in [FUNC] + [AMP] (§11.4.1), o un accordo morbido è anche un accordo piano
([i proprietari ne parlano](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/616)).
[FUNC] + [PLAY] svuota la pagina (§11.1).

### Un pad che sa in che registro è
Nello stesso menu anche KEY TRACKING prende fino a quattro parametri (§11.1.9). Dagli
FLTR:Frequency con una profondità positiva e suona la fila in basso da sinistra a destra: ogni
tasto è più chiaro di quello prima.

### I dadi su una pagina
Prima salva. Sulla pagina dell'LFO 2, [MOD] + [YES] dà a ogni manopola della pagina un valore
nuovo, diverso a ogni pressione, e [MOD] + [PLAY] riporta la pagina ai valori di partenza (§12.1).
Il passo 7 la imposta di nuovo.

### Un altro secondo orologio
Metti l'SPD dell'FX LFO 1 a 8: la stanza si muove con il filtro, giro dopo giro. Mettilo a 5: i
due si ritrovano ogni 32 battute. Il simulatore del passo 6 dà il conto per qualsiasi coppia di
impostazioni.

## Next

La sessione 9 campiona il pezzo stesso: un loop di una battuta del mix, messo sulla traccia 5.
