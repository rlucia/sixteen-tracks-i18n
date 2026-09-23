---
number: 3
chapter: rhythm
slug: the-kit-your-way
title: Il kit, a modo tuo
goal: Guarda un passo attraverso tutto il kit, riaccorda un suono, sostituiscine un altro con un sample dalla scheda e incontra la supertrack.
needs: ["Il progetto della sessione 2 (SIXTEEN, o con il tuo nome)", "Cuffie collegate", "La scheda SD di fabbrica nel suo slot", "Circa sedici minuti"]
teaches: [step-edit, per-subtrack-sound, sample-browser, pool, supertrack, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Dove sei
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

Se SIXTEEN non è il progetto sul display, caricalo: [FUNC] + [PRESET] apre il menu FILE, poi
[UP]/[DOWN] attraverso PROJECT, LOAD e il tuo progetto, [YES]. Premi [PLAY] e lascia girare
il beat — tutto quello che fai in questa sessione succede mentre suona.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Il beat della sessione 2 in loop da A01: kick, snare, hi-hat chiuso e clap, tutti dal kit sulla traccia 1.
recover: Se nel frattempo hai suonato e vuoi tornare allo stato salvato, evidenzia il tuo progetto nella lista LOAD, premi [RIGHT] per PROJECT ACTIONS e scegli RELOAD. Se [TRIG 2], [TRIG 3] o [TRIG 4] suonano suoni propri, il tuo beat è sparso su quattro tracce: la sessione 2 lo costruisce su una sola, e il suo primo passo cancella quello vecchio. Cominci da qui senza la sessione 2? Quella sessione scrive il beat su cui lavora questa, e ci vogliono circa sedici minuti.
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
che è successo; la scheda ora ha il beat di A01 e la sua copia in A02. Tutto, dal prossimo
passo in poi, cambia il kit, e questo è lo stato a cui puoi tornare.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Niente — il beat continua a girare. Su questa macchina un salvataggio è silenzioso, e non interrompe il sequencer.
recover: Se si è aperto un menu di impostazioni, [FUNC] non era premuto prima. Premi [NO], tieni premuto [FUNC], poi premi [SETTINGS].
:::

## Step: Un passo, tutto il kit
keys: [STEP EDIT, TRIG 1, TRIG 7, KEYBOARD F1]
leds: { TRIG 1: green }
source: manual §10.3.1
mode: step-edit

Premi [STEP EDIT], poi [TRIG 1]. Il tasto diventa verde, e la fila in basso ora mostra i
suoni che suonano sul passo 1: il kick e l'hi-hat chiuso. Premi [TRIG 7] e la fila mostra
l'hi-hat chiuso e il clap. La sessione 2 ha scritto il beat un suono lungo tutta la battuta;
questo è il contrario, un passo attraverso tutto il kit. Premi [KEYBOARD F1] mentre il passo
7 è verde e il clap lascia quel passo; premilo di nuovo ed è tornato. Premi di nuovo
[STEP EDIT] per uscire.

:::checkpoint
hear: Il beat com'era, una volta rimesso quello che hai tolto.
recover: STEP EDIT fa parte del GRID RECORDING (§10.3.1), quindi [RECORD] si accende insieme. Un tasto acceso debolmente sulla fila in basso è il suono che hai selezionato, non uno che suona sul passo — [lo avverte il tutorial di Elektron stesso](https://www.youtube.com/watch?v=ijPa_vgY8QA).
:::

## Step: Riaccorda un suono
keys: [TRK, KEYBOARD D1, SRC, A]
source: manual §A.2.3
mode: any

Tieni premuto [TRK] e premi [KEYBOARD D1]: il suono scelto è lo snare. Premi [SRC] per la
sua pagina sorgente e gira la manopola DATA ENTRY [A], TUNE, verso il basso di qualche passo;
se la premi mentre la giri, si muove di un semitono alla volta. Si muove solo lo snare. Ognuno
degli otto suoni tiene le sue pagine SRC, FLTR, AMP e MOD, e quello che hanno in comune sono
gli effetti del kit, che tiene la supertrack — due passi più avanti.

:::checkpoint
hear: Uno snare più basso nello stesso beat; il kick, gli hi-hat e il clap come prima.
recover: Se si è mosso un altro suono, il tasto rosso era altrove quando hai girato: tieni premuto [TRK], premi [KEYBOARD D1] e gira di nuovo. Per tornare indietro, leggi TUNE prima di girare e riportalo a quel valore.
:::

## Step: Sostituisci un sample
keys: [TRK, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Tieni premuto [TRK] e premi [KEYBOARD F1], il quarto
tasto SUBTRACKS, così il clap è il suono su cui sei. [FUNC] + [KEYBOARD F1] apre il browser
dei sample sulla scheda SD, puntato su quella sola subtrack: [UP]/[DOWN] scorre la scheda,
[YES] apre una cartella e [YES] su un sample lo carica nel pool di sample del progetto e sulla
subtrack (§5.2.6), e [NO] risale di un livello. Scegli un suono corto che ti piace al posto
del clap — delle quattro voci, è quella su cui il pezzo è meno esigente — poi [FUNC] + [NO]
per uscire dal browser (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Il tuo sample sui passi 7 e 15, al posto del clap del kit, con il resto del beat invariato.
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
keys: [FUNC, SETTINGS, RECORD, TRK, KEYBOARD A1]
source: manual §9.1.1
mode: grid-recording

Tieni premuto [FUNC] e premi [SETTINGS]: salvato, in silenzio, come va ogni salvataggio qui.
Poi premi [RECORD] se è spento, tieni premuto [TRK] e premi [KEYBOARD A1], il tasto
dell'hi-hat chiuso, e guardalo un'ultima volta — ogni passo dispari rosso. Quell'immagine è
la testata di questa sessione.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Tutto il beat dalla traccia 1, con uno snare più basso e un suono tuo al posto del clap, salvato.
recover: Una striscia spenta vuol dire che [RECORD] non è acceso: premilo per GRID RECORDING e guarda di nuovo. Il salvataggio non mostra niente e non chiede niente; se vuoi una prova, il nome del tuo progetto è nella lista PROJECT, LOAD del menu FILE.
:::

## What you now have

A01 suona il beat dalla traccia 1 su HELLO KIT: il kick su [KEYBOARD C1], uno snare su
[KEYBOARD D1] accordato più basso di quello del kit, l'hi-hat chiuso su [KEYBOARD A1] e, su
[KEYBOARD F1], un suono che hai scelto tu dalla scheda. Le tracce 2, 3 e 4 sono vuote, libere
per il basso, gli accordi e il pad delle sessioni 6 e 8, e A02 tiene la copia del beat della
sessione 2 finché la sessione 9 non avrà bisogno dello slot. È tutto salvato.

## Explore further

### Parti da un kit vuoto
Tieni premuto [TRK] e premi [TRIG 2], poi [FUNC] + [SRC]: il menu MACHINE. Scegli SUBTRACKS e
una seconda lista chiede quale instrument caricare — un kit vuoto a un capo, i set di
instrument di fabbrica accanto, e qui la [KEYBOARD] fa sentire quello evidenziato prima che tu
confermi. Il kit vuoto è otto subtrack in attesa di sample, riempite una alla volta attraverso
il browser dei sample, e niente riempie otto slot da una cartella in un solo passaggio —
[i proprietari l'hanno chiesto](https://www.elektronauts.com/t/subtracks-use-cases/239235).
Fallo sulla traccia 2, non sul tuo beat: una machine nuova riscrive le impostazioni della
traccia (§5.3.2).

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
