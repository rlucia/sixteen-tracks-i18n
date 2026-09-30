---
number: 7
chapter: sound
slug: the-signal-path
title: Il percorso del segnale
goal: Manda la batteria in un bus che la comprime, fai respirare gli accordi su un bus tutto loro, dagli una stanza, e richiama un effetto da un tasto.
needs: [Il progetto della sessione 6, Cuffie collegate, "Circa sedici minuti"]
teaches: [routing, bus, compressor, shape-envelope, send-fx, parameter-locks, trig-preview, effect-scenes]
simulator: routing
ends: { keys16: { 15: red, 16: red } }
---

## Step: Dove sei
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

La sessione 6 ha lasciato A01 con il kit sulla traccia 1, la bassline sulla traccia 2 e quattro
accordi sulla traccia 3, e ognuna va dritta al mixer. Se il sequencer è fermo, premi [PLAY]. Tieni
premuto [FUNC] e premi [SETTINGS] prima che cambi il routing: tutto in questa sessione cambia dove
va il suono, non cosa suonano le tracce.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: Il pezzo come l'ha lasciato la sessione 6: il beat, la bassline che si muove sotto, un accordo a battuta.
recover: Parti da qui senza la sessione 6? Quella sessione scrive il basso e gli accordi, e dura circa sedici minuti; va bene anche qualsiasi pattern con la batteria sulla traccia 1 e gli accordi sulla traccia 3.
:::

## Step: Dove va il suono
keys: [FUNC, MUTE, UP, DOWN]
source: manual §4.4.1
mode: menu:ROUTING

Tieni premuto [FUNC] e premi [MUTE]: il menu ROUTING (§4.4.1). [UP] e [DOWN] passano tra i suoi
due gruppi, le tracce audio 1–8 e i bus e le tracce send. Sulle tracce ogni riga dice MIX AB: ogni
traccia va al mixer, attraverso l'effetto principale, alle uscite A/B e alle cuffie. È da lì che
parte ogni traccia di un pattern nuovo.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 MIX AB", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: Non cambia niente: il menu mostra solo le strade.
recover: Una lista di bus e tracce send invece di TRK1–TRK8: l'altro gruppo — [UP] o [DOWN] per tornare alle tracce.
:::

## Step: La batteria sul bus 1
keys: [TRIG 1, TRIG 9]
source: manual §4.4.1, §A.2.3
mode: menu:ROUTING

Con ROUTING aperto, tieni premuto [TRIG 1] e premi [TRIG 9]. Ora la traccia 1 va su BUS 1, cioè la
traccia 9, e la riga dice TRK1 BUS 1. Il kit si sposta tutto insieme: i suoi otto suoni condividono
l'unico percorso della traccia 1 (§A.2.3). Il bus passa la batteria al mixer così com'è finché non
ci metti sopra un effetto.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: La batteria esattamente come prima: un bus senza effetti lascia passare l'audio.
recover: È comparsa la traccia 9 da modificare, o la batteria è cambiata mentre la riga dice ancora TRK1 MIX AB: i tasti sono stati premuti con il menu chiuso. Solo il menu ROUTING, o ROUT nella pagina FX 1 della traccia 1, instrada una traccia (§12.8) — [FUNC] + [MUTE] e di nuovo il gesto.
:::

:::simulator

## Step: Comprimila
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO]
source: manual §11.5, §13.5, §A.3.4
mode: menu:TRACK SETUP

Tieni premuto [TRK] e premi [TRIG 9]: il bus 1 è la traccia attiva. Tieni premuto [FUNC] e premi
[FX]: TRACK SETUP si apre sul primo insert del bus, FX1. [UP]/[DOWN] fino a COMPRESSOR e [YES] lo
mette nello slot; [NO] chiude il menu. Premi [FX] fino alla pagina FX 2, quella del compressore
(§13.5). Abbassa THR finché kick e snare cominciano a spingere giù il livello, metti RAT a 4.00 e
alza MUP finché la batteria è forte come prima (§A.3.4).

:::checkpoint
screen: { menu: "FX 1", items: ["BYPASS", "CHRONO PITCH", "COMB ± FILTER", "COMPRESSOR"], sel: 3 }
hear: Kick e snare più vicini di livello agli hi-hat, tutto il kit più denso e più uniforme, forte quanto prima.
recover: La batteria più bassa di prima: MUP è ancora basso — alzalo. Nessun cambiamento: la traccia 1 non è su BUS 1 (passo 3), o il compressore è finito su un'altra traccia — [TRK] + [TRIG 9] e di nuovo [FUNC] + [FX].
:::

## Step: Gli accordi sul bus 2
keys: [FUNC, MUTE, TRIG 3, TRIG 10, NO]
source: manual §4.4.1
mode: menu:ROUTING

Tieni premuto [FUNC] e premi di nuovo [MUTE]. Tieni premuto [TRIG 3] e premi [TRIG 10]: gli
accordi vanno su BUS 2, la traccia 10. Premi [NO] per chiudere il menu.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 BUS 2", "TRK4 MIX AB"], sel: 2 }
hear: Gli accordi invariati, la batteria ancora compressa sul bus 1.
recover: TRK3 dice ancora MIX AB: [TRIG 10] è arrivato senza [TRIG 3] tenuto — prima tieni, poi premi. TRK3 dice BUS 1: [TRIG 9] al posto di [TRIG 10].
:::

## Step: Il bus respira
keys: [TRK, TRIG 10, RECORD, TRIG 1, TRIG 5, TRIG 9, TRIG 13, AMP]
leds: { RECORD: red }
source: manual §13.2, §A.2.6
mode: grid-recording

Tieni premuto [TRK] e premi [TRIG 10]: il bus 2 è la traccia attiva. Premi [RECORD] per GRID
RECORDING e premi [TRIG 1], [TRIG 5], [TRIG 9] e [TRIG 13]: quattro trig sul sequencer del bus 2.
Un trig di un bus non suona niente; fa partire l'inviluppo Shape del bus (§A.2.6). Premi [AMP] per
la sua pagina: ATK breve, DEC lungo abbastanza da arrivare al movimento successivo, ed ENV girato
ben lontano da 0. Ora gli accordi si abbassano e risalgono a ognuno dei quattro.

:::note
Da che parte vada girato ENV per un avvallamento non è chiarito: Red Means Recording lo porta sotto
zero ([il video](https://www.youtube.com/watch?v=Ku3u0uUJoSE&t=977)), umonox lo alza con un decay
breve ([il video](https://www.youtube.com/watch?v=bN-HX1n-0cQ&t=147)). Giralo finché gli accordi
si abbassano sul movimento.
:::

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Gli accordi pulsano quattro volte a battuta, si abbassano su ogni movimento e risalgono prima del successivo.
recover: I trig accesi ma gli accordi fermi: ENV è a 0. Gli accordi respirano per una battuta e restano fermi per tre: il bus 2 è lungo 64 passi — con il bus 2 attivo, [FUNC] + [PAGE], [FUNC] e [E] fino a LENGTH 16, [NO]. Trig accesi, ENV impostato, e ancora niente: i proprietari riportano che sull'1.4.1 i trig dei bus possono smettere di far partire l'inviluppo finché la macchina non viene riavviata ([la segnalazione](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2569)) — salva, spegni e riaccendi.
:::

## Step: Una stanza per gli accordi
keys: [TRK, TRIG 3, FX]
source: manual §12.8, §5.3.4
mode: playback

Tieni premuto [TRK] e premi [TRIG 3]. Premi [FX] per la pagina FX 1, dove stanno il routing della
traccia e i suoi tre send (§12.8). Alza SND3 con la manopola sotto, circa a metà: gli accordi vanno
al bus 2 come prima, e una loro copia va alla traccia 15, la traccia send che in un pattern nuovo
contiene il riverbero (§5.3.4).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3, params: [SND1 0, SND2 0, SND3 64, "ROUT BUS2"], invert: [2] }
hear: Una coda dopo ogni accordo, la stanza dietro di loro; la batteria e il basso asciutti.
recover: Un suono ondeggiante, raddoppiato, invece di una coda: è salito SND1 — la traccia 13 contiene un chorus; riportalo a 0 e alza SND3. Nessuna coda: la traccia 15 contiene altro in questo pattern ([TRK] + [TRIG 15] lo mostra), o SND3 è salito sul basso — prima [TRK] + [TRIG 3].
:::

## Step: Una scena su un tasto
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO, RECORD, TRIG 15, TRIG 16, TRIG, D]
leds: { RECORD: red }
source: manual §10.3, §13.2, §13.6, §A.3.12
mode: grid-recording

Tieni premuto [TRK] e premi [TRIG 9]. Tieni premuto [FUNC] e premi [FX], premi di nuovo [FX] per il
secondo slot, FX2, e [UP]/[DOWN] fino a LOW-PASS FILTER, [YES], [NO]. Nella pagina FX 3, quella del
filtro (§13.6), gira FREQ tutto aperto. Premi [RECORD] per GRID RECORDING e premi [TRIG 15] e
[TRIG 16]: due trig sul bus 1. Premi [TRIG] per la pagina TRIG, tieni premuto [TRIG 15] e gira
[D], PROB, fino a 0 %, poi lo stesso tenendo [TRIG 16]: nessuno dei due suonerà mai da solo
(§13.2). Di nuovo nella pagina FX 3, tieni premuto [TRIG 15] e chiudi FREQ quasi del tutto; tieni
premuto [TRIG 16] e gira FREQ giù e di nuovo su fino in cima, così quel trig porta il filtro aperto.
Ora premi [TRIG 15] + [YES], prima il tasto del trig: la batteria finisce dietro un muro e ci
resta. [TRIG 16] + [YES]: torna (§10.3).

:::checkpoint
keys16: { 15: red, 16: red }
hear: Con [TRIG 15] + [YES] la batteria sorda e lontana sotto basso e accordi, battuta dopo battuta; con [TRIG 16] + [YES] di nuovo brillante.
recover: Il muro non se ne va mai da solo: così funziona un lock su un bus — resta finché un altro trig non lo cambia ([i proprietari ne parlano](https://www.elektronauts.com/t/tonverk-user-thread/238631/998)); [TRIG 16] + [YES] riapre il filtro. La batteria diventa sorda da sola una volta a battuta: PROB sul passo 15 non è a 0 % — tieni premuto [TRIG 15] nella pagina TRIG e abbassa [D]. Non succede proprio niente: il lock è finito nella pagina FX 2, sul compressore — FREQ è nella pagina FX 3.
:::

## Step: Salva
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Tieni premuto [FUNC] e premi [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: Il pezzo instradato: la batteria compressa, gli accordi che respirano nella loro stanza, il basso dritto al mixer.
recover: Nessuna schermata ha detto che il progetto è stato scritto: [FUNC] non era giù quando è arrivato [SETTINGS]. Premili di nuovo insieme.
:::

## What you now have

Il kit passa dal bus 1, dove un compressore lo tiene insieme e un filtro passa-basso aspetta che
[TRIG 15] + [YES] lo chiuda e [TRIG 16] + [YES] lo apra. Gli accordi passano dal bus 2, i cui
quattro trig li fanno respirare su ogni movimento, e mandano una loro copia nel riverbero della
traccia 15. Il basso va dritto al mixer. Il routing appartiene ad A01, ed è salvato.

## Explore further

### Instradare mentre suona
In ROUTING, [DOWN] fino ai bus, tieni premuto [TRIG 10] e premi [KEYBOARD A1]: il bus 2 va su OUT
CD, dritto alle uscite C/D, e gli accordi lasciano le cuffie e le uscite A/B. Se a C/D non è
collegato niente, spariscono. [TRIG 10] e LEVEL/DATA lo riportano su MIX AB (§4.4.1).

### L'ordine a orecchio
Sul bus 1, [FUNC] + [FX] e altre due volte [FX] arrivano alla terza sottopagina: evidenzia SWAP
FX1/FX2 e premi [YES] (§11.5.4). Ora il filtro viene prima del compressore. Richiama la scena nei
due ordini e tieni quello che preferisci.

### Fermare il respiro con un tasto
Dai ai quattro trig del bus 2 la condizione ¬FILL (§10.10.2): gli accordi respirano finché [FILL]
è su e restano fermi finché è tenuto premuto.

### Mettere in mute il bus
[MUTE] + [TRIG 10] mette in mute il bus 2. I suoi trig si fermano e gli accordi restano fermi, ma
suonano ancora: mettere in mute un bus ferma il suo sequencer, non l'audio che ci passa
([i proprietari ne parlano](https://www.elektronauts.com/t/buses-mute-question/244694/1)).

### L'ordine della voce
Ogni traccia audio fa passare il suo suono per un overdrive e due filtri, nell'ordine che scegli:
[FUNC] + [FLTR] sulla traccia 3, poi [LEFT]/[RIGHT] (§11.3.1), e ascolta gli accordi in ogni
ordine.

## Next

La sessione 8 aggiunge un pad sulla traccia 4 che si muove da solo, con LFO e un inviluppo di
modulazione sul suono.
