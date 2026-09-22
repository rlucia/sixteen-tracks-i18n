---
number: 4
chapter: rhythm
slug: make-it-move
title: Fallo muovere
goal: Dai al beat delle ghost note, un lock del filtro, un roll di snare e una parte suonata da te, poi quantizzala.
needs: ["Il progetto della sessione 3", "Cuffie collegate", "Circa sedici minuti"]
teaches: [parameter-locks, trig-preview, retrigs, micro-timing, live-recording, quantize, sequence-lanes]
simulator: null
ends: { keys16: { 5: red, 13: red } }
---

## Step: Dove sei
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

La sessione 3 ti ha lasciato in GRID RECORDING sulla traccia 1 con la subtrack 3, l'hi-hat
chiuso, sui sedici tasti. Se il sequencer non sta girando, premi [PLAY] e lascialo girare:
ogni passo qui si scrive sopra il loop. Poi tieni premuto [FUNC] e premi [SETTINGS] — questa
sessione scrive lock in tutto il kit, e quel salvataggio è lo stato a cui puoi tornare.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Tutto il beat dalla traccia 1 — kick, snare, hi-hat chiuso, hi-hat aperto — in loop da A01.
recover: Una striscia spenta vuol dire che [RECORD] non è acceso: premilo per GRID RECORDING, poi tieni premuto [TRK] e premi [KEYBOARD E1], il terzo tasto SUBTRACKS, per tornare all'hi-hat chiuso. Cominci da qui senza la sessione 3? Quella sessione costruisce il kit che questa fa muovere, e ci vogliono circa sedici minuti.
:::

## Step: Ghost note
keys: [TRIG 3, TRIG 7, TRIG 11, TRIG 15, TRIG, B]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §10.10.1, §12.2
mode: grid-recording

Tieni premuti insieme [TRIG 3], [TRIG 7], [TRIG 11] e [TRIG 15] — i quattro hi-hat che cadono
tra i quarti — e, sempre tenendoli, premi [TRIG], il tasto TRIG PARAMETERS, quello a sinistra
di [SRC]. Si apre TRIG PAGE 1; sempre tenendo i quattro, gira la manopola DATA ENTRY [B],
VEL, giù fino a circa 60.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [1] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Gli hi-hat sui quarti restano dov'erano e i quattro in mezzo si ritirano dietro di loro. VEL è l'unico riquadro della pagina disegnato invertito, e i quattro tasti che hai tenuto lampeggiano in rosso mentre gli altri quattro restano fissi.
recover: Se tutti e otto gli hi-hat si sono abbassati, non era tenuto niente e il giro ha mosso la VEL di tutta la subtrack: rialzala, tieni premuti i quattro tasti, poi gira di nuovo. Aspettati che NOTE mostri un trattino — il §12.2 dice solo che non è disponibile su una traccia Subtracks — e aspettati che le altre sette letture siano diverse dal disegno, che è fatto da quella sezione e non da un'unità.
:::

:::note
Un lock che metti qui appartiene alla subtrack in cui sei e a nient'altro: ogni subtrack
tiene le proprie impostazioni SRC, FLTR, AMP e MOD (§A.2.3), quindi questo giro lascia la
kick e lo snare esattamente com'erano. Le pagine FX e i livelli di send sono l'eccezione
— quelle otto le condividono attraverso la supertrack, ed è per questo che un proprietario
che registrava dal vivo un send di delay se l'è trovato
[su tutte le subtrack insieme](https://www.elektronauts.com/t/tonverk-bug-reports/238306/1676)
e per questo
[non c'è un filtro sulla supertrack a cui arrivare](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2263).
:::

## Step: Ascolta un passo
keys: [TRIG 1, TRIG 3, YES]
source: manual §10.3
mode: grid-recording

Tieni premuto [TRIG 3] e premi [YES]: quel solo passo suona, con la sua nuova VEL
incorporata. Tieni premuto [TRIG 1] e premi [YES] per l'hi-hat sul quarto accanto.

:::checkpoint
hear: Due hi-hat, uno dopo l'altro, ai due volumi che hai appena impostato, sopra il loop che continua a girare sotto.
recover: Se i due suonano identici, il lock non è mai arrivato — torna indietro di un passo, tieni premuti i quattro tasti e guarda VEL diventare invertito mentre giri la manopola. Se questa anteprima suoni la subtrack del trig tenuto o la subtrack che hai selezionato non è stabilito da nessuna parte che siamo riusciti a trovare; sarà la tua unità a dirlo.
:::

## Step: Un lock del filtro
keys: [FLTR, TRIG 9, E]
leds: { TRIG 9: red }
source: manual §10.10.1, §12.5
mode: grid-recording

Premi [FLTR] per FLTR PAGE 1. Tieni premuto [TRIG 9] — l'hi-hat sul terzo quarto — e gira la
manopola DATA ENTRY [E], FREQ, verso il basso finché quel solo hi-hat non diventa opaco.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [ATK, DEC, SUS, REL, FREQ 42, RESO, TYPE, ENV], invert: [4] }
hear: Sette hi-hat come prima, e uno sul terzo quarto a cui è stato tolto l'acuto. Il passo 9 adesso lampeggia, insieme alle quattro ghost note.
recover: Se tutti gli hi-hat sono diventati opachi insieme, [TRIG 9] non era premuto quando hai girato: prima tienilo premuto. La tua unità riempie tutti e otto i riquadri di questa pagina con delle letture; il disegno ne dà una solo al riquadro che hai cambiato.
:::

## Step: Togli un lock
keys: [TRIG 9, E]
source: manual §10.10.1
mode: grid-recording

Tieni premuto [TRIG 9] di nuovo e premi la manopola DATA ENTRY [E] — premila, non girarla. Il
lock su FREQ se ne va e il trig resta dov'è. Ora tieni premuto [TRIG 9] e gira di nuovo [E]
verso il basso: il pezzo d'esempio questo lo tiene.

:::checkpoint
hear: L'hi-hat sul terzo quarto torna brillante, e torna opaco quando rimetti il lock.
recover: Se l'hi-hat è sparito del tutto, quella era una pressione breve e non una tenuta, e toglie il trig — premi [TRIG 9] ancora una volta per riscriverlo, e sappi che ogni lock che portava se n'è andato con lui (§10.10.1), quindi questo passo vale la pena di farlo due volte.
:::

## Step: Il roll di snare
keys: [TRK, KEYBOARD D1, TRIG 13, TRIG, E, F, G]
leds: { TRIG 5: red, TRIG 13: red }
source: manual §10.7, §12.2
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD D1], il secondo tasto SUBTRACKS, per lo snare.
Tieni premuto [TRIG 13] e premi [TRIG] per TRIG PAGE 1, e continua a tenerlo: gira [E] per
accendere RTRG, [F] per mettere RTIM a 1/32, e [G] per portare RVEL su verso 1, così le
ripetizioni crescono invece di spegnersi. Sono un punto di partenza, non l'unica risposta.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG ON, RTIM 1/32, RVEL 0.5, COND —], invert: [4, 5, 6] }
keys16: { 5: red, 13: red }
hear: Lo snare sul quarto quarto arriva come un roll breve: le ripetizioni durano quanto la LEN del trig e si fermano dentro il passo 13, un pickup verso la battuta successiva più che un fill attraverso di essa. Lo snare sul 5 è intatto, e sulla pagina — disegnata qui, non letta da un'unità — i tre che hai girato sono quelli invertiti. Il passo 13 adesso lampeggia, il 5 è fisso.
recover: Un roll che non senti di solito è RTRG ancora spento — tieni premuto [TRIG 13] e guarda quella lettura cambiare prima di avvicinarti a RTIM. Se fanno il roll entrambi gli snare, [TRIG 13] è stato lasciato prima di girare e l'impostazione è andata su tutta la subtrack invece che su quel solo trig: rispegni RTRG senza niente premuto, poi ricomincia tenendo il tasto. Troppo fitto? [F] di nuovo a 1/16 dà una ripetizione per passo, 1/12 dà le terzine. Nessuno ha pubblicato numeri per questo; sarà la tua unità a dire quali sono i più puliti.
:::

:::note
Due cose su questa pagina fregano la gente. Non c'è RLEN: il quarto dei parametri di retrig
è COND, una condizione di trig, che è l'argomento della sessione 5 — quello che dà forma a un
roll è RVEL, e lavora rispetto alla VEL del trig stesso. E il manuale non è d'accordo con sé
stesso su quale manopola accenda RTRG: la regola del §6.3 è che un parametro risponde alla
manopola sopra cui sta, il che mette RTRG su [E], mentre la frase del §12.2 nomina la
manopola [A]. Gira la manopola sotto il parametro, e se la tua unità dice altrimenti, ha
ragione la tua unità.
:::

## Step: Spingi l'hi-hat aperto in ritardo
keys: [TRK, KEYBOARD F1, TRIG 7, RIGHT, UP, DOWN]
source: community https://www.youtube.com/watch?v=7lFFSUOsXsA
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD F1], il quarto tasto SUBTRACKS, per l'hi-hat aperto.
Tieni premuto [TRIG 7] e premi [RIGHT]: si apre il pop-up MICRO TIMING e mostra l'offset di
quel passo in percentuale (§10.5). Tieni il tasto premuto — [RIGHT] ancora lo spinge più in
là a grandi salti, [UP] e [DOWN] lo muovono un po' alla volta — e lascia [TRIG 7] per uscire.

:::checkpoint
screen: { menu: "MICRO TIMING", items: [+25%] }
hear: L'hi-hat aperto sul 7 cade un pelo dopo il passo su cui sta, e la battuta si sporge più forte verso la successiva. La lettura qui è disegnata spinta in ritardo; quanto lontano la porti una pressione spetta all'unità dirtelo.
recover: Non si è aperto niente? Il pop-up vuole prima il tasto trig tenuto e poi la freccia, e un passo senza trig non ha niente da spostare nel tempo. Spinto troppo: [LEFT] lo riporta indietro, e l'offset viene salvato con il pattern, quindi sopravvive al salvataggio alla fine (§10.5).
:::

## Step: Suona una parte dal vivo
keys: [RECORD, PLAY, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Tieni premuto [RECORD] e premi [PLAY] una volta: [RECORD] comincia a lampeggiare in rosso e
LIVE RECORDING è attivo con il pattern ancora in loop. Lasciali entrambi, poi batti
[KEYBOARD G1], il quinto tasto SUBTRACKS, a tempo con il beat per una battuta o due. Premi
[PLAY] da solo per uscire.

:::checkpoint
hear: Una quinta voce del kit dove l'hanno messa le tue dita, sopra le quattro che hai scritto a mano, e il loop non si ferma mai.
recover: Se [RECORD] si è acceso fisso invece di lampeggiare, [PLAY] è andato giù prima di [RECORD] e sei in GRID RECORDING: premi [RECORD] per spegnerlo e ricomincia. Un quinto tasto che non fa nessun suono è una subtrack vuota nel tuo kit — suonane uno che suona e usa quella subtrack al suo posto.
:::

:::note
[PLAY] vuol dire due cose diverse intorno a questo passo. Premuto una seconda volta mentre
[RECORD] è ancora tenuto, accende e spegne la quantizzazione automatica per quello che stai
per registrare (§10.4); lascialo spento, perché il passo successivo fa quel lavoro a mano e
non c'è niente da tirare se la macchina l'ha già tirato. Premuto una volta che [RECORD] è
stato lasciato, esce dalla registrazione dal vivo e il pattern continua a girare.
:::

## Step: Quantizza quello che hai suonato
keys: [FUNC, KEYBOARD G#1, TRIG 1, TRIG, E, F, NO]
source: manual §10.8
mode: menu:QUANTIZE

Tieni premuto [FUNC] e premi [KEYBOARD G#1] per il menu QUANTIZE, e premi [TRIG 1] per
puntarlo sulla traccia 1. Gira la manopola DATA ENTRY [E], TRK, su un po' alla volta e
fermati nel momento in cui la parte che hai suonato sta a tempo: a metà strada è dove la
vuoi, e il punto lo sceglie il tuo orecchio. La manopola [F], PATTERN, farebbe lo stesso a
ogni traccia del pattern insieme, e questa sessione la lascia stare; [NO] chiude il menu.

:::checkpoint
screen: { menu: "QUANTIZE", items: [TRK 0, PATTERN 0] }
hear: Entrambe le impostazioni partono da zero. Il kick e lo snare non si muovono, perché sono stati scritti sulla griglia e ci sono già. Quello che TRK tira è tutto ciò che non lo è: la parte che hai suonato a mano, e l'hi-hat aperto che hai spinto in ritardo due passi fa (§10.8) — ed è per questo che smetti di salire appena la take è a tempo.
recover: Il menu non si è aperto? Prova invece [FUNC] + [TRIG], la combinazione che il §10.4 dà per questo stesso menu dove il §10.8 dà [FUNC] + [KEYBOARD G#1]; sarà la tua unità a dire quale delle due accetta. Sei andato fino in fondo e hai perso l'hi-hat aperto in ritardo? Torna alla subtrack dell'hi-hat aperto, tieni premuto [TRIG 7] e premi [RIGHT] per spingerlo di nuovo fuori (§10.5); quantizzare arrotonda al passo più vicino, e per un trig con il micro timing quello non è per forza il passo su cui è stato scritto (§10.8). E se la take ancora non suona come quello che hai suonato, non te lo stai immaginando: [un proprietario riporta lo stesso](https://www.elektronauts.com/t/tonverk-user-thread/238631/1812), senza risposta nel thread.
:::

## Step: Guarda solo i lock
keys: [TRK, KEYBOARD E1, RECORD, FUNC, UP, DOWN, NO]
leds: { RECORD: red }
source: manual §10.3.2
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD E1], il terzo tasto SUBTRACKS, per tornare all'hi-hat
chiuso, poi premi [RECORD] per GRID RECORDING. Tieni premuto [FUNC] e premi [UP] per il menu
SEQUENCE LANE, e premi [UP]/[DOWN] finché P-LOCKS non è quello scelto. Rimettilo su
NOTES + P-LOCKS prima di uscire, poi premi [NO].

:::checkpoint
screen: { bank: "A01", name: "P-LOCKS", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Nel suono non cambia niente. Il nome della lane si stampa in cima al display accanto alle pagine del pattern, e ogni hi-hat diventa rosso tenue — tutti e otto, 1, 5 e 13 semplici e 3, 7, 9, 11 e 15 con i loro lock. Niente lampeggia: il §10.3.2 ordina questa lane per tipo di trig, non per quello che c'è in lock sopra, e un trig di nota che porta un lock è ancora un trig di nota (§10.2.1), quindi qui tutti e otto sono lo stesso tipo di trig. Se invece 3, 7, 9, 11 e 15 lampeggiano, la tua unità legge una nota con lock come entrambi i tipi — una cosa per il colophon, e niente è rotto in nessuno dei due casi.
recover: [UP] e [DOWN] percorrono le tre lane come una lista sola, quindi qualunque dei due premi, continua finché P-LOCKS non è quello scelto e dopo lascialo su NOTES + P-LOCKS. Se gli hi-hat sono rosso pieno invece che tenue, sei ancora su NOTES, dove i trig di nota sono rossi e i trig di lock giallo tenue (§10.3.2) — continua a scorrere la lista. Il presentatore di Elektron stesso ha trovato un trig di lock apparentemente rimovibile dalla modalità NOTES, [cosa che il manuale dice non possa succedere](https://www.youtube.com/watch?v=7lFFSUOsXsA); sarà la tua unità a dire anche questo.
:::

## Step: Salva
keys: [FUNC, SETTINGS, TRK, KEYBOARD D1]
source: manual §9.1.1
mode: grid-recording

Tieni premuto [FUNC] e premi [SETTINGS]: salvato, in silenzio, come va ogni salvataggio qui.
Poi tieni premuto [TRK] e premi [KEYBOARD D1], il secondo tasto SUBTRACKS, e guarda il
snare un'ultima volta — 5 e 13, con il 13 che lampeggia per il roll che ha sopra.
Quell'immagine è la testata di questa sessione.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: Il beat con tutto quello che ci hai messo, salvato: le ghost note, l'hi-hat opaco, il roll e la parte che hai suonato.
recover: Due tasti e non di più è giusto — lo snare ha sempre avuto due trig, e il roll vive dentro uno di loro invece che su passi propri.
:::

## What you now have

A01 è lo stesso kit e le stesse quattro voci, in movimento. Sull'hi-hat chiuso, quattro
ghost note stanno dietro le quattro sui quarti e un passo sul terzo quarto è filtrato opaco;
lo snare sul 13 è un roll breve, un pickup verso la battuta successiva; l'hi-hat aperto
sul 7 sta un pelo in ritardo se hai lasciato TRK sotto il massimo, ed esattamente sul passo
se non l'hai fatto; e una quinta subtrack porta una parte che hai suonato con le mani e poi
tirato sulla griglia. È tutto parameter lock e timing su trig che avevi già, è tutto salvato,
e A02 ha ancora il beat a quattro tracce della sessione 2.

## Explore further

### Rendi casuali le velocity, poi torna indietro
[FUNC] + [-] apre il menu TRANSFORM, che agisce su ogni trig della traccia in cui sei
(§10.6). VELOCITY RANDOMIZE scrive un lock VEL su tutti; VELOCITY UNLOCK toglie ogni lock VEL
che c'è — comprese le quattro ghost note — quindi provalo sulla subtrack dell'hi-hat aperto
invece che su quella del chiuso, e tieni il salvataggio a portata di mano.

### Un lock senza una nota sotto
In GRID RECORDING, [FUNC] + [TRIG 8] su un passo vuoto scrive un trig di lock: giallo invece
che rosso, porta cambiamenti di parametri ma non fa scattare niente (§10.2.1). Mettine uno
sul passo 8 dell'hi-hat chiuso, mettici in lock FREQ, e senti l'hi-hat successivo uscire da
un filtro che si è mosso mentre non suonava niente.

### PROB, due riquadri dopo VEL
PROB è su TRIG PAGE 1 accanto ai parametri che hai girato, sulla manopola [D], e imposta
quanto è probabile che un trig suoni — 100% di default, rideciso ogni volta che il passo
arriva (§12.2). Mettilo in lock al 50% su una ghost note e ascolta la battuta smettere di
ripetersi. La sessione 5 è costruita su quell'idea.

## Next

La sessione 5 fa smettere il pattern di ripetersi: condizioni di trig sul kit che hai, una
kick che arriva un loop sì e uno no, probabilità su queste stesse ghost note, e una battuta
di fill che tieni premuta — tutto dentro A01, senza caricare niente di nuovo. Il simulatore
in quella pagina risponde all'unica domanda che le condizioni sollevano sempre, cioè perché
un trig non ha suonato.
