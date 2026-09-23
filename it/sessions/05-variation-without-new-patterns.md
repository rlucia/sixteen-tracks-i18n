---
number: 5
chapter: rhythm
slug: variation-without-new-patterns
title: Variazione senza nuovi pattern
goal: Fai cambiare un solo pattern a ogni loop con condizioni, probabilità e un fill, e impara le due reti di sicurezza prima di giocartelo.
needs: ["Il progetto della sessione 4", "Cuffie collegate", "Circa sedici minuti"]
teaches: [trig-conditions, chance, fill, transform, memorise-recall, perform]
simulator: conditions
ends: { keys16: { 5: red, 13: red, 14: red, 15: red, 16: red } }
---

## Step: Dove sei
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

La sessione 4 ti ha lasciato in GRID RECORDING sulla traccia 1 con la subtrack 2, il
snare, sui sedici tasti. Se il sequencer non sta girando, premi [PLAY] e lascialo girare
— qui tutto si giudica loop per loop, quindi un pattern fermo non te ne mostra niente. Poi
tieni premuto [FUNC] e premi [SETTINGS]: questa sessione si gioca il pattern due volte, e
quel salvataggio è il pavimento sotto entrambe.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: Il kit della sessione 4 che gira: le ghost note dietro gli hi-hat, l'hi-hat opaco sul terzo quarto, il roll verso la battuta successiva e la parte che hai suonato. Due tasti accesi sulla striscia — lo snare sul 5 e sul 13, con il 13 che lampeggia per il retrig che ha sopra.
recover: Una striscia spenta vuol dire che [RECORD] non è acceso: premilo per GRID RECORDING. Una striscia con otto tasti accesi è l'hi-hat chiuso e non lo snare — tieni premuto [TRK] e premi [KEYBOARD D1], il secondo tasto SUBTRACKS. Cominci da qui senza la sessione 4? Quella sessione scrive i lock che questa fa variare, e ci vogliono circa sedici minuti.
:::

## Step: Un kick che arriva un loop sì e uno no
keys: [TRK, KEYBOARD C1, TRIG 15, TRIG, H]
leds: { TRIG 15: red }
source: manual §10.10.2, §12.2
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD C1], il primo tasto SUBTRACKS, per il kick, poi premi
[TRIG 15] per mettere un kick dove la subtrack non ne aveva — un pickup verso l'inizio
della battuta. Tieni premuto [TRIG 15], premi [TRIG] per TRIG PAGE 1, e gira la manopola
DATA ENTRY [H], COND, finché non dice 1:2.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND 1:2], invert: [7] }
keys16: { 1: red, 5: red, 9: red, 13: red, 15: red }
hear: Il pickup arriva, salta il giro successivo, e torna su quello dopo — A:B conta quante volte il pattern ha suonato, non dove sei nella battuta (§10.10.2). Il passo 15 lampeggia contro i quattro kick fissi, come fa qualunque trig che porta un lock, e COND è l'unico riquadro invertito della pagina.
recover: Se il pickup arriva a ogni loop, COND è ancora sul trattino: tieni premuto [TRIG 15] e guarda quella lettura cambiare mentre giri [H], invece di guardare i tasti. Se non arriva mai, sei andato oltre 1:2 — le condizioni sono una lista sola su una manopola sola, e il suo vicino 2:2 suona esattamente sui loop che 1:2 salta, anche se il §10.10.2 dà quei due solo come esempi e non come un ordine su cui contare. Le altre sette letture sul disegno vengono dal §12.2, non da un'unità.
:::

## Step: Probabilità sulle ghost note
keys: [TRK, KEYBOARD A1, TRIG 3, TRIG 7, TRIG 11, TRIG 15, D]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §12.2
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD A1], il sesto tasto SUBTRACKS, per l'hi-hat chiuso —
TRIG PAGE 1 resta davanti a te. Tieni premuti [TRIG 3], [TRIG 7], [TRIG 11] e [TRIG 15], le
quattro ghost note della sessione 4, e gira la manopola [D], PROB, giù al 50%.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 50%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [3] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Circa metà delle ghost note si presenta in un loop qualsiasi, e una metà diversa in quello dopo: la moneta viene lanciata di nuovo ogni volta che un passo arriva (§12.2). I passi 3, 7, 11 e 15 adesso lampeggiano per il lock che portano, e 1, 5, 9 e 13 restano fissi — i quattro hi-hat sui quarti sono intatti, così la battuta tiene la sua forma mentre smette di ripetersi.
recover: Se anche i quattro hi-hat sui quarti cominciano a sparire, PROB è finita sulla subtrack invece che sui quattro trig: senza niente premuto, riportala al 100%, poi tieni premuti [TRIG 3], [TRIG 7], [TRIG 11] e [TRIG 15] e gira [D] di nuovo. Se le ghost note suonano identiche loop dopo loop, guarda la lettura: qui il numero è 50%, e qualunque valore sopra il 90% circa passerà per certezza nel giro di una manciata di battute.
:::

## Step: Una risposta che ha bisogno della sua domanda
keys: [TRIG 16, H]
leds: { TRIG 16: red }
source: manual §10.10.2
mode: grid-recording

Premi [TRIG 16] una volta: un hi-hat sull'ultimo passo della battuta, dove questa subtrack
non ne aveva. Tienilo premuto e gira [H] fino a PRE: il trig suona solo se ha suonato anche
quello che il sequencer ha valutato prima di lui (§10.10.2).

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red, 16: red }
hear: Gli ultimi due passi della battuta arrivano in coppia o per niente — quando la ghost note sul 15 vince il suo lancio di moneta, il 16 le risponde; quando il 15 salta, il 16 salta con lui. Entrambi i tasti lampeggiano, il 15 per la sua probabilità e il 16 per la sua condizione.
recover: Se il 16 suona a ogni loop, COND è ancora sul trattino: tieni premuto [TRIG 16] e gira [H] uno scatto alla volta, oltre la coppia FILL, finché la lettura non è PRE. E se sei tentato di impilare un secondo PRE sopra questo, chiederebbe comunque del 15 — un trig PRE viene saltato quando un PRE successivo guarda indietro (§10.10.2). Una cosa che il §10.10.2 stabilisce per una traccia e non per un kit: se il trig a cui il 16 guarda indietro è quello prima di lui su questa subtrack o quello prima di lui dovunque sulla traccia 1. Sarà la tua unità a dirlo; questa coppia è scritta per la prima lettura.
:::

:::note
Una ghost note che perde il suo lancio di moneta conta, per quanto riguarda il 16, come una
ghost note che non c'è mai stata. Vale la pena dirlo ad alta voce perché non è sempre stato
così: le note di rilascio di Elektron stessa elencano
[un lock PROB lasciato fuori dal conto di PRE e NEI](https://www.elektron.se/release-notes/tonverk-os-release-notes)
tra i bug che l'OS 1.4.0 ha corretto, e 1.4.0 è la versione contro cui è scritto questo
corso. Su un OS più vecchio la coppia si separa.
:::

## Step: Perché il passo 16 non ha suonato?
keys: []
source: community https://www.elektronauts.com/t/nei-and-pre-trig-conditions/51959
mode: any

Due regole adesso decidono quegli ultimi due passi, e si risolvono in quest'ordine: prima la
probabilità sul 15, poi il PRE del 16 sopra quello che la probabilità ha lasciato. Il
simulatore qui sotto parte dal kit che hai appena costruito — il kick con il suo pickup
1:2, gli hi-hat con le loro ghost note al 50% e PRE sul 16 — e dà a ogni passo una ragione
invece di un suono.

:::simulator

:::checkpoint
hear: Premi Loop successivo quattro o cinque volte e le righe del registro mostrano la coppia sul 15 e sul 16 arrivare insieme e mancare insieme. Clicca il passo 16 sulla fila degli hi-hat e la riga sotto l'editor dà la sorte di quel passo per il loop in cui sei — il trig a cui ha guardato indietro, e se quello ha suonato; i dischetti nel registro portano la stessa frase sotto il puntatore. Metti la probabilità del 15 a 100 e il 16 smette di mancare.
recover: Niente qui è una prova d'ascolto — il simulatore disegna la regola, non il kit, e il suo unico suono è un click. Su una cosa deve prendere posizione: se un trig semplice, senza condizione e senza probabilità sopra, sia il trig a cui PRE guarda indietro. Legge la frase del §10.10.2 alla lettera e guarda all'ultimo trig che ha valutato, mentre i thread dei proprietari su altre macchine Elektron con questa stessa regola dicono che un trig nudo non viene valutato affatto. Sarà la tua unità a dirlo.
:::

## Step: Una battuta di fill
keys: [TRK, KEYBOARD D1, TRIG 14, TRIG 15, TRIG 16, H, FUNC, FILL, UP, DOWN, YES]
leds: { TRIG 14: red, TRIG 15: red, TRIG 16: red }
source: manual §10.10.3, §10.10.2
mode: menu:FILL EDIT

Tieni premuto [TRK] e premi [KEYBOARD D1], il secondo tasto SUBTRACKS, per lo snare, e
premi [TRIG 14], [TRIG 15] e [TRIG 16] — tre snare che si affollano alla fine della
battuta. TRIG PAGE 1 è ancora la pagina davanti a te: tieni premuti tutti e tre e gira [H] su
FILL, così suonano solo mentre la modalità FILL è attiva. Poi tieni premuto [FUNC] e premi
[FILL] per il menu FILL EDIT, [UP]/[DOWN] finché MOMENTARY non è l'opzione scelta, [YES] per
chiuderlo, e tieni premuto [FILL] per tutto l'ultimo quarto della battuta.

:::checkpoint
screen: { menu: "FILL EDIT", items: [MOMENTARY, LATCHING], sel: 0 }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Con [FILL] premuto, la battuta finisce con una corsa di tre snare verso quella dopo; lascia e quei tre passi sono di nuovo in silenzio, loop dopo loop, mentre il 5 e il 13 vanno avanti come hanno sempre fatto. Adesso cinque tasti sulla striscia, i tre nuovi che lampeggiano per la condizione che hanno sopra.
recover: Se la corsa suona senza niente premuto, o i tre trig sono ancora sul trattino invece che su FILL, o l'opzione scelta è LATCHING e un tocco precedente ha lasciato la modalità FILL accesa — premi [FILL] una volta e ascolta di nuovo. Se il tasto [FILL] stesso si accenda mentre è premuto, e di che colore, non è nel manuale e in nessun posto che siamo riusciti a trovare; sarà la tua unità a dirlo.
:::

## Step: Un punto di ripristino, poi un rischio
keys: [FUNC, KEYBOARD D#1, -, UP, DOWN, YES, NO, KEYBOARD C#1]
source: manual §10.10.6, §10.6
mode: menu:TRANSFORM

Tieni premuto [FUNC] e premi [KEYBOARD D#1]: il pattern così com'è viene messo da parte in un
posto temporaneo (§10.10.6). Ora tieni premuto [FUNC] e premi [-] per il menu TRANSFORM,
scorri con [UP]/[DOWN] fino a VELOCITY RANDOMIZE e premi [YES]; [NO] chiude il menu. Ascolta
per un loop o due, poi tieni premuto [FUNC] e premi [KEYBOARD C#1] per richiamare quello che
hai memorizzato.

:::checkpoint
screen: { menu: "TRANSFORM", items: [VELOCITY UNLOCK, VELOCITY RANDOMIZE, VELOCITY RAMP UP, VELOCITY RAMP DOWN, PLACEMENT RANDOMIZE, PLACEMENT REVERSE], sel: 1 }
hear: Ogni velocity della traccia finisce da qualche parte di nuovo, tutte insieme — hi-hat forti dov'erano piano, ghost note che non sono più ghost note, la dissolvenza del roll di snare ricostruita — e dopo il richiamo le velocity sono di nuovo dove le ha lasciate la sessione 4, le quattro ghost note di nuovo dietro il beat. Quello che il richiamo rimette è il pattern che hai memorizzato un momento fa — condizioni, probabilità e trig di fill compresi — non quello della sessione 4.
recover: Se non è cambiato niente, [YES] non è arrivato sulla riga evidenziata: apri di nuovo il menu e guarda quale azione è selezionata prima di premere. Se il richiamo rimetta le vecchie velocity esattamente o soltanto vicine è l'unica parte di tutto questo che nessuno ha messo per iscritto; sarà la tua unità a dirlo, e finché non lo fa, il salvataggio del passo 1 è il vero pavimento.
:::

:::note
Un transform non resta sulla subtrack che stai guardando. Il §10.6 traccia il suo confine
alla traccia, e su una traccia Subtracks questo si legge come tutto il kit in un passaggio
solo: il kick del pickup prende una velocity nuova insieme agli hi-hat, e così ogni
snare. Velocity e nient'altro — VELOCITY RANDOMIZE scrive lock VEL, quindi il pickup
tiene il suo 1:2 e i tre snare nuovi tengono il loro FILL. Che le otto subtrack vadano
davvero insieme è un resoconto dei proprietari, non del manuale: hanno chiesto un modo di
puntare un transform su una sola subtrack e
[non ce n'è ancora](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2057), e
un altro resoconto ha PLACEMENT RANDOMIZE
[che sposta trig di lock che non suonano niente](https://www.elektronauts.com/t/tonverk-feature-requests/238027/1559)
insieme alle note — sarà la tua unità a dirlo. In ogni caso la memorizzazione viene prima, e
VELOCITY UNLOCK è un martello più pesante di quanto il nome suggerisca: toglie ogni lock VEL
dalla traccia, compresi i quattro della sessione 4.
:::

## Step: La modalità PERFORM
keys: [FUNC, SETTINGS, TRK, FLTR, E]
leds: { TRK: green }
source: manual §10.12, §A.2.3
mode: grid-recording

Prima tieni premuto [FUNC] e premi [SETTINGS]; il salvataggio conta qui più che in qualunque
altro punto di questa sessione. Ora tieni premuto [FUNC] e premi [TRK]: la modalità PERFORM
è attiva, e [TRK] diventa verde finché lo è (§10.12). Premi [FLTR] e gira la manopola [E],
FREQ, ben in basso mentre il loop gira, poi tieni premuto [FUNC] e premi di nuovo [TRK] per
uscire.

:::checkpoint
hear: Lo snare diventa opaco sotto la tua mano — il filtro appartiene alla subtrack in cui sei (§A.2.3), quindi il kick e gli hi-hat continuano a suonare com'erano — e resta opaco finché la modalità PERFORM è attiva. Nel momento in cui esci, lo snare è di nuovo brillante e la luce verde è spenta: il ritocco è sparito, e salvare mentre eri lì dentro non l'avrebbe tenuto comunque (§10.12).
recover: Se lo snare è rimasto opaco dopo che sei uscito, [FUNC] non era premuto per la seconda pressione; la luce verde è la cosa da guardare. Se non è cambiato niente mentre giravi, [FLTR] sta mostrando la pagina di un'altra subtrack — tieni premuto [TRK] e premi [KEYBOARD D1] per lo snare e riprova. Il passo salva prima apposta: il §10.12 promette che il pattern torna a uno stato salvato e non dice altro, e cosa succede alle modifiche fatte dopo l'ultimo salvataggio e prima di entrare nella modalità PERFORM non è scritto da nessuna parte. Sarà la tua unità a dirlo; salvare prima rende la domanda inutile.
:::

## Step: Salva
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: grid-recording

Tieni premuto [FUNC] e premi [SETTINGS] un'ultima volta. I sedici tasti sono ancora quelli
dello snare: due che suonano a ogni loop e tre che aspettano il tuo pollice.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: La stessa battuta con cui hai cominciato la sessione, e nessun loop uguale a un altro — un kick di pickup un giro sì e uno no, metà delle ghost note, un hi-hat di risposta che arriva solo quando è arrivata la sua domanda, e un fill sotto il pollice. Quella striscia di cinque tasti è la testata di questa sessione.
recover: Cinque tasti, e 14, 15 e 16 che lampeggiano. Se quei tre sono spenti, i trig di fill sono finiti su un'altra subtrack: tieni premuto [TRK] e premi [KEYBOARD D1] e guarda di nuovo — e se mancano anche lì, il passo 6 è a tre pressioni e una manopola dall'inizio.
:::

## What you now have

A01 è la battuta che la sessione 4 ha salvato, e non si ripete più. Un quinto kick arriva
un loop sì e uno no, le quattro ghost note tirano ciascuna per il proprio posto, un hi-hat
sull'ultimo passo risponde alla ghost note prima di lui o tace con lei, e tre snare alla
fine della battuta appartengono solo a [FILL]. Non è stato caricato niente e nessun secondo
pattern è stato scritto: è tutto un parametro su una pagina, impostato su trig che avevi
già. Hai anche le due vie di ritorno — la memorizzazione che puoi richiamare, e il
salvataggio a cui la modalità PERFORM ti riporta — ed è questo che rende il resto degno del
rischio.

## Explore further

### Il fill che fa spazio
Dai allo snare sul 13 il contrario di una condizione FILL — quella stampata con una riga
sopra, ¬FILL qui e nel simulatore — e si fa da parte ogni volta che [FILL] è premuto
(§10.10.2). I tre snare nuovi sostituiscono il vecchio invece di affollarlo, che è quello
che un fill di batteria fa di solito.

### LATCHING, per quando hai le mani occupate
Di nuovo [FUNC] + [FILL], [DOWN] fino a LATCHING, [YES]: adesso [FILL] accende e spegne la
modalità con un tocco invece che con una tenuta (§10.10.3). Comodo nel momento in cui l'altra
mano è su una manopola, e facile da lasciare acceso per sbaglio.

### L'altro kick
Sposta il pickup 1:2 dal kick a [KEYBOARD E1], il kick basso di HELLO KIT: cancella il passo 15
su [KEYBOARD C1], scrivilo su E1 e imposta lì COND a 1:2 allo stesso modo. La battuta tiene i
suoi quattro kick sui quarti, e un giro sì e uno no un kick più profondo porta verso l'inizio.

### 1ST, un'intro che succede una volta sola
1ST fa scattare un trig al primo giro del pattern e mai più; la stessa condizione con una
riga sopra salta quel primo passaggio e suona su tutti gli altri (§10.10.2). Un piatto sul
passo 1 con 1ST — HELLO KIT ne tiene uno lungo su [KEYBOARD C2] — e il pattern si annuncia e
poi va avanti per la sua strada.

### NEI, nel simulatore più che sul kit
NEI guarda di lato: chiede com'è andata l'ultima condizione sulla traccia accanto — quella
con il numero prima di quella in cui sei — e suona, o no, in base a quella risposta
(§10.10.2). Le due tracce del simulatore sono esattamente quella coppia, ed è per questo che
NEI sta lì: cosa legga il NEI di una subtrack di Subtracks non è detto in nessun posto che
siamo riusciti a trovare, e solo la tua unità può dirlo.

### PROB senza niente premuto
Gira [D] senza nessun tasto trig premuto e PROB diventa l'impostazione della subtrack invece
che di un solo trig (§12.2). Ogni hi-hat della subtrack tira allora per il proprio posto, che
è un tipo di battuta diverso, più nervoso, rispetto a quattro ghost note che tirano da sole.

### La modalità PERFORM su due pattern
Solo un pattern alla volta può essere in modalità PERFORM. Lascialo per un altro pattern e
torna, e i tuoi ritocchi ti aspettano; accendi invece la modalità PERFORM anche di là, e
quelli del primo pattern sono spariti (§10.12).

## Next

La sessione 6 lascia stare la batteria e comincia il secondo capitolo: un basso sulla
traccia 2 e una parte di accordi sulla traccia 3, suonate dalla tastiera in La minore, sulle
tracce 2 e 3, che il beat lascia libere. Il ritmo è finito — da qui il pezzo guadagna le note.
