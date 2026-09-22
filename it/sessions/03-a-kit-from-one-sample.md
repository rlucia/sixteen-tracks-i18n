---
number: 3
chapter: rhythm
slug: a-kit-from-one-sample
title: Un kit da un solo sample
goal: Metti tutto il beat su una sola traccia con un kit Subtracks, libera le altre tre e sostituisci uno dei suoi suoni con uno che scegli tu dalla scheda.
needs: ["Il progetto della sessione 2 (SIXTEEN, o con il tuo nome)", "Cuffie collegate", "La scheda SD di fabbrica nel suo slot", "Circa sedici minuti"]
teaches: [subtracks, supertrack, machine-select, sample-browser, pool, track-clear, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Dove sei
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

Se SIXTEEN non è il progetto sul display, caricalo: [FUNC] + [PRESET] apre il menu FILE, poi
[UP]/[DOWN] attraverso PROJECT, LOAD e il tuo progetto, [YES]. Premi [PLAY] e lascia girare
il beat — questa sessione lo ricostruisce sotto le tue mani mentre suona.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Il beat della sessione 2 in loop da A01: kick, snare, hi-hat e una quarta voce, su quattro tracce.
recover: Se nel frattempo hai suonato e vuoi tornare allo stato salvato, evidenzia il tuo progetto nella lista LOAD, premi [RIGHT] per PROJECT ACTIONS e scegli RELOAD. Cominci da qui senza la sessione 2? Quella sessione scrive il beat che questa smonta, e ci vogliono circa sedici minuti.
:::

## Step: Le tre vite di un tasto trig
keys: [TRK, PTN, RECORD]
leds: { TRIG 1: white, RECORD: red }
source: manual §5.3.7, §10.1.1, §10.2.1
mode: playback

Con il beat che gira, tieni premuto [TRK]: i sedici tasti sono le sedici tracce, e quello
bianco è la traccia in cui sei (§5.3.7). Tieni premuto [PTN] invece, e gli stessi tasti sono
slot di pattern — bianco dove c'è un pattern, rosso per quello che suona, cioè A01 con la tua
copia A02 accanto (§10.1.1). Se [RECORD] è già acceso dalla sessione 2, premilo una volta per
spegnerlo, prima. Premi [RECORD] e sono i sedici passi di una battuta sulla traccia attiva,
rossi dove c'è un trig di nota (§10.2.1); premilo di nuovo per uscire. Tre compiti, una fila
di tasti, e il colore è l'unica cosa che dice quale: la
[pagina dei colori dei tasti](/key-colours/) tiene la lista completa.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Il beat continua attraverso tutti e tre. Niente di quello che hai premuto ha cambiato un suono.
recover: Se la tua prima pressione di [RECORD] ha spento la sua luce invece di accenderla, la sessione 2 aveva lasciato GRID RECORDING attivo; premilo ancora una volta. La striscia qui sopra è la terza vita — il kick della traccia 1, sui quattro quarti che hai scritto nella sessione 2.
:::

## Step: Prima salva
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Tieni premuto [FUNC] e premi [SETTINGS]. Niente ti chiede niente e niente sul display dice
che è successo; la scheda ora ha il beat a quattro tracce di A01 e la sua copia in A02.
Tutto, dal prossimo passo in poi, riscrive la traccia 1, e questo è lo stato a cui puoi
tornare.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Niente — il beat continua a girare. Su questa macchina un salvataggio è silenzioso, e non interrompe il sequencer.
recover: Se si è aperto un menu di impostazioni, [FUNC] non era premuto prima. Premi [NO], tieni premuto [FUNC], poi premi [SETTINGS].
:::

## Step: Una machine Subtracks sulla traccia 1
keys: [TRK, TRIG 1, FUNC, SRC, UP, DOWN, KEYBOARD, YES]
source: community https://www.youtube.com/watch?v=QHRGueJ8FsI
mode: menu:MACHINE

Tieni premuto [TRK] e premi [TRIG 1]. Tieni premuto [FUNC] e premi [SRC]: il menu MACHINE si
apre sulle machine che la traccia 1 può prendere. [UP]/[DOWN] fino a SUBTRACKS e [YES] — e
una seconda lista chiede quale instrument caricare, un kit vuoto a un'estremità e i kit di
fabbrica accanto. Suona la [KEYBOARD] per sentire quello evidenziato prima di decidere, poi
premi [YES] su un kit di batteria di fabbrica i cui otto suoni ti piacciono.

:::checkpoint
screen: { menu: "MACHINE", items: [SINGLE PLAYER, MULTI PLAYER, SUBTRACKS, GRAINER, WAVEFINDER, MIDI], sel: 2 }
hear: La traccia 1 scatta ancora su tutti e quattro i quarti, ma quello che scatta è il kit nuovo: il kick della sessione 1 se n'è andato con la machine.
recover: Una lista di machine invece che di instrument vuol dire che [YES] non è ancora arrivato su SUBTRACKS. Hai caricato un kit che non ti piace? [FUNC] + [SRC], di nuovo SUBTRACKS, e scegline un altro — è la via di ritorno che dà il manuale stesso (§5.3.1).
:::

:::note
"Vuoto" è una scelta, non silenzio: l'instrument vuoto ti dà otto subtrack in attesa di
sample, uno alla volta attraverso il browser dei sample, e niente riempie otto slot da una
cartella in un solo passaggio —
[i proprietari l'hanno chiesto](https://www.elektronauts.com/t/subtracks-use-cases/239235). Un
kit di fabbrica arriva pieno, ed è per questo che questa sessione comincia con uno di quelli
e sostituisce un solo suono al passo 10. Il kick se ne va in entrambi i casi: un preset è
le impostazioni delle pagine SRC, FLTR, AMP, FX e MOD (§5.3.2), e una nuova machine SRC le
riscrive.
:::

## Step: Suona il kit
keys: [SUBTRACKS]
source: manual §3.1, §A.2.3
mode: any

Premi gli otto tasti [SUBTRACKS] uno alla volta: otto suoni, uno per tasto, e quello è il
kit. Non sono una fila nuova di controlli — sono la fila in basso della tastiera, stampata
con entrambi i nomi, che fa un quarto lavoro ora che sulla traccia c'è una machine Subtracks.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Otto sample diversi, uno per tasto, sopra il beat che gira ancora.
recover: Un tasto che non fa nessun suono è una subtrack vuota nel kit che hai scelto, e non è un ostacolo: questa sessione ne usa quattro su otto. L'indicazione della machine è disegnata qui come SUBTRACKS; se la tua unità la stampa in un altro modo, ha ragione l'unità. Sarà la tua unità a dirlo.
:::

## Step: Cancella i vecchi trig della traccia 1
keys: [STEP EDIT, FUNC, PLAY]
source: manual §10.10.4, §10.3.1
mode: step-edit

Premi [STEP EDIT]. STEP EDIT fa parte di GRID RECORDING (§10.3.1), quindi aspettati [RECORD]
acceso. Tieni premuto [FUNC] e premi [PLAY]: cancella ogni trig su tutte e otto le subtrack
e sulla supertrack in una sola pressione, ed è l'unica cancellazione che arriva a tutto il
kit (§10.10.4). Premi di nuovo [STEP EDIT] per uscire.

:::checkpoint
keys16: { }
hear: Il kit tace e il loop torna vuoto; le tracce 2, 3 e 4 continuano a suonare.
recover: Un trig ancora acceso appartiene a una subtrack a cui la cancellazione non è arrivata: selezionala con [TRK] + [SUBTRACKS], premi [RECORD] per GRID RECORDING, e cancella quella con [FUNC] + [PLAY]. Nel GRID RECORDING semplice quella combinazione prende solo la subtrack selezionata, che è [quello che i proprietari scoprono quando si aspettano una pulizia dell'intera traccia](https://www.elektronauts.com/t/tonverk-user-thread/238631/2436).
:::

:::note
Questa cancellazione si può annullare: [FUNC] + [NO] rimette i trig (§10.10.5), e l'undo
arriva agli incolla e alle cancellazioni a ogni livello in cui il sequencer ne tiene uno. La
cancellazione senza undo è quella del preset di una traccia, ed è [TRK] + [PLAY] — Esplora
ancora, più sotto.
:::

## Step: Il kick sulla subtrack 1
keys: [RECORD, TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Premi [RECORD] per GRID RECORDING. Tieni premuto [TRK] e premi [KEYBOARD C1], il primo tasto
SUBTRACKS: seleziona la subtrack 1 senza farla suonare. Ora premi [TRIG 1], [TRIG 5],
[TRIG 9] e [TRIG 13] — il kick, sugli stessi quattro quarti della sessione 2, su una
subtrack invece che su una traccia.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Di nuovo un kick su ogni quarto, e questa volta viene tutto dalla traccia 1.
recover: Se la subtrack ha suonato mentre la selezionavi, [TRK] non era tenuto premuto. Se la subtrack 1 del tuo kit non è un kick, premi i tasti [SUBTRACKS] finché non trovi quella che lo è e usa quella subtrack qui al suo posto; al resto della sessione importa solo che tu sappia quale suono sta dove.
:::

## Step: Snare, hi-hat chiuso, hi-hat aperto
keys: [TRK, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

[TRK] + [KEYBOARD D1], il secondo tasto SUBTRACKS, ti porta alla subtrack 2, e lo snare va
su [TRIG 5] e [TRIG 13]. Il terzo tasto, [TRK] + [KEYBOARD E1], è la subtrack 3, l'hi-hat
chiuso: ogni passo dispari, da [TRIG 1] a [TRIG 15]. Il quarto, [TRK] + [KEYBOARD F1], è la
subtrack 4, l'hi-hat aperto, su [TRIG 7] e [TRIG 15] — poi ancora una volta
[TRK] + [KEYBOARD E1], così la fila dell'hi-hat chiuso è quella sui tasti.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Il beat della sessione 2, completo, da una sola traccia. La striscia è la subtrack 3: l'hi-hat chiuso su ogni passo dispari.
recover: Una fila che ha già trig che non hai scritto tu è la subtrack che hai appena lasciato — tieni premuto [TRK], non toccarlo soltanto, e premi di nuovo il tasto della subtrack. Questi tre non devono per forza essere uno snare e due hi-hat: metti su questi passi le voci migliori del kit.
:::

## Step: Libera le tracce da 2 a 4
keys: [TRK, TRIG 2, TRIG 3, TRIG 4, FUNC, PLAY]
source: manual §10.10.4
mode: grid-recording

Ancora in GRID RECORDING: tieni premuto [TRK] e premi [TRIG 2], poi tieni premuto [FUNC] e
premi [PLAY]. I trig dello snare sono spariti. Fai lo stesso su [TRIG 3] e su [TRIG 4] — tre
tracce normali, tre cancellazioni, e tutto il beat viene dalla traccia 1.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, type: "AUDIO" }
hear: Lo stesso beat di un minuto fa senza niente che lo raddoppi: le tracce 2, 3 e 4 sono in silenzio.
recover: Ne hai cancellata una di troppo? [FUNC] + [NO] rimette l'ultima (§10.10.5). Se una fila che hai cancellato è ancora accesa, la cancellazione è finita sulla traccia in cui eri prima — tieni premuto [TRK] mentre scegli.
:::

:::note
I preset restano dove sono. Questa cancellazione prende i trig, non i suoni: le tracce da 2
a 4 hanno ancora lo snare e gli hi-hat della sessione 2, e la sessione 6 ci carica sopra
un basso e degli accordi. A02 ha ancora la versione a quattro tracce del beat, e niente la
sovrascrive prima della sessione 9.
:::

## Step: Sostituisci un sample
keys: [TRK, TRIG 1, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Tieni premuto [TRK] e premi [TRIG 1] per tornare al kit, poi [TRK] + [KEYBOARD F1], il quarto
tasto SUBTRACKS, così l'hi-hat aperto è la subtrack in cui sei. [FUNC] + [KEYBOARD F1] apre
il browser dei sample sulla scheda SD, puntato su quella sola subtrack: [UP]/[DOWN] scorre la
scheda, [YES] apre una cartella e [YES] su un sample lo carica nel pool di sample del progetto
e sulla subtrack (§5.2.6), e [NO] risale di un livello. Scegli un suono che ti piace per
l'hi-hat aperto — delle quattro voci, è quella su cui il pezzo è meno esigente — poi
[FUNC] + [NO] per uscire dal browser (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Il tuo sample sui passi 7 e 15, al posto dell'hi-hat aperto del kit, con il resto del beat invariato.
recover: Se un [YES] aggiunge il sample ma la subtrack non lo suona, il browser vuole il suo menu OPERATIONS: premi [RIGHT], scegli LOAD SAMPLES e premi [YES] (§6.13.1). Se questa strada richieda una pressione o due è una domanda per l'unità — il manuale le descrive entrambe, su pagine diverse.
:::

:::note
Non esiste una schermata chiamata pool di sample. Il pool è il nome che il manuale dà a
quello che il progetto ha caricato in RAM, e lo guardi attraverso SAMPLE BANKS in questo
stesso browser (§6.13.2); il browser mostra quanto è costato, in megabyte e in percentuale
della RAM (§6.13). Chiedi al forum del "pool di sample" e
[ti rimandano altrove](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/965).
:::

## Step: La supertrack, vista una volta
keys: [TRK, TRIG 1, KEYBOARD C1]
source: manual §A.2.3
mode: any

Tieni premuto [TRK] e premi [TRIG 1] due volte: la prima seleziona la traccia 1, la seconda
seleziona la sua supertrack, e tre piccoli rettangoli bianchi compaiono sopra il numero della
traccia. La supertrack non è un nono suono — è dove vivono le impostazioni condivise delle
otto subtrack: le pagine FX, i due LFO degli FX e, scoprono i proprietari, i livelli di send
con loro. Tieni premuto [TRK] e premi [KEYBOARD C1], il primo tasto SUBTRACKS, per uscirne.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", super: true }
hear: Niente di nuovo. La supertrack non ha una voce sua, e il beat continua a girare sotto di lei.
recover: Nessun rettangolo sopra il numero della traccia vuol dire che la seconda pressione ha scelto un'altra traccia — tieni premuto [TRK] e premi [TRIG 1] due volte senza lasciarlo.
:::

:::note
Un lock messo qui muove tutte e otto le subtrack insieme, il che si addice
[più a materiale tonale o di texture che a un kit di batteria](https://www.youtube.com/watch?v=QHRGueJ8FsI);
[anche i livelli di send sono condivisi qui](https://www.elektronauts.com/t/tonverk-subtrack-drum-strategies/243084),
invece di essere impostati per subtrack, ed è per questo che mixare un kit voce per voce
passa dalla supertrack. Il presentatore di Elektron in quel video chiama il segno sul display
tre puntini invece di tre rettangoli, quindi il suo aspetto merita una seconda occhiata sulla
tua unità.
:::

## Step: Salva
keys: [FUNC, SETTINGS, TRK, KEYBOARD E1]
source: manual §9.1.1
mode: grid-recording

Tieni premuto [FUNC] e premi [SETTINGS]: salvato, in silenzio, come va ogni salvataggio qui.
Poi tieni premuto [TRK] e premi [KEYBOARD E1], il terzo tasto SUBTRACKS, e guarda l'hi-hat
chiuso un'ultima volta — ogni passo dispari rosso. Quell'immagine è la testata di questa
sessione.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Tutto il beat dalla sola traccia 1, salvato.
recover: Una striscia spenta vuol dire che [RECORD] non è acceso: premilo per GRID RECORDING e guarda di nuovo. Il salvataggio non mostra niente e non chiede niente; se vuoi una prova, il nome del tuo progetto è nella lista PROJECT, LOAD del menu FILE.
:::

## What you now have

A01 suona tutto il beat dalla traccia 1: un kit Subtracks con un kick sulla subtrack 1, un
snare sulla 2, un hi-hat chiuso sulla 3 e, sulla 4, un hi-hat aperto che hai scelto tu
dalla scheda. Le tracce 2, 3 e 4 hanno ancora i preset della sessione 2 ma nessun trig —
libere per il basso, gli accordi e il pad delle sessioni 6 e 8 — e A02 tiene la versione a
quattro tracce del beat finché la sessione 9 non avrà bisogno dello slot. È tutto salvato.

## Explore further

### STEP EDIT, un passo alla volta
In riproduzione, premi [STEP EDIT] e poi un tasto trig: diventa verde, e la tastiera aggiunge
e toglie note su quel solo passo (§10.3.1). Su una traccia Subtracks è così che guardi un
singolo passo attraverso il kit invece di una subtrack lungo la battuta.

### Copia tutte e otto le subtrack insieme
In STEP EDIT, [FUNC] + [RECORD] copia ogni trig delle otto subtrack e della supertrack
insieme, e [FUNC] + [STOP] li incolla su un'altra traccia con una machine Subtracks
(§10.10.4). Gli stessi due tasti nel GRID RECORDING semplice spostano una subtrack sola.

### La cancellazione senza undo
[TRK] + [PLAY] azzera i parametri del preset di una traccia, che è una cosa diversa dal
cancellarne i trig — ed è l'unica operazione a cui l'undo del sequencer non arriva
(§10.10.5). [FUNC] + [NO] non riporterà indietro un preset, quindi provalo su una traccia
che sei disposto a perdere.

### Il pool, visto per intero
[FUNC] + [SAMPLING] apre lo stesso browser dei sample dall'inizio. Scegli SAMPLE BANKS per
ogni sample che questo progetto ha caricato, con SELECT UNUSED e UNLOAD per fare pulizia di
quelli che nessun pattern suona (§6.13.2).

## Next

La sessione 4 tiene questo kit e lo fa muovere: ghost note, un lock del filtro su un hi-hat,
un roll di snare, e una parte suonata dal vivo e poi quantizzata. Non si carica niente di
nuovo — viene tutto dagli otto suoni che hai già.
