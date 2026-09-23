---
number: 2
chapter: rhythm
slug: first-beat
title: Il primo beat
goal: Scrivi un beat di una battuta sui suoni del kit in GRID RECORDING, metti in mute un suono, copia il pattern e salva.
needs: ["Il progetto SIXTEEN della sessione 1 (o un progetto qualsiasi con un kit di batteria sulla traccia 1 — il passo 1 dice come)", "Cuffie collegate", "Circa sedici minuti"]
teaches: [grid-recording, subtrack-select, page-length, mute, copy-paste-clear, undo, pattern-select]
simulator: null
ends: { keys16: { 1: red, 5: red, 9: red, 13: red } }
---

## Step: Dove sei
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES]
source: manual §9.1.1
mode: menu:FILE

Se SIXTEEN non è il progetto sul display, caricalo: [FUNC] + [PRESET] apre il menu FILE, poi
[UP]/[DOWN] attraverso PROJECT, LOAD e il tuo progetto, [YES]. Cominci da qui senza la
sessione 1? Ti serve un progetto che puoi modificare, con un kit di batteria sulla traccia 1
— la sessione 1, passi da 3 a 6, ci mette cinque minuti.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Premi [TRIG 1]: il kick della sessione 1.
recover: Se nel frattempo hai sperimentato e vuoi tornare allo stato salvato, evidenzia il tuo progetto nella lista LOAD e premi [RIGHT] per PROJECT ACTIONS, poi RELOAD. Quello è l'ultimo salvataggio.
:::

:::note
Caricare un progetto sostituisce quello in cui sei (§9.1.1). Se la macchina è rimasta accesa
dalla sessione 1 e hai suonato, salva prima di caricare qualsiasi cosa — lo stato di lavoro
che stai per abbandonare non viene riscritto nel tuo progetto da solo.
:::

## Step: Scegli un suono in silenzio
keys: [TRK, KEYBOARD D1, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1]
leds: { KEYBOARD C1: red }
source: manual §A.2.3
mode: any

Tieni premuto [TRK] e premi [KEYBOARD D1]. Adesso il suono scelto è lo snare, e non ha
suonato niente: la stessa selezione silenziosa che [TRK] dà ai tasti trig per le tracce, qui
per i suoni di un kit. Il numero sul display dice 2 e D1 è il tasto rosso. Fai lo stesso con
[KEYBOARD A1], l'hi-hat chiuso, e con [KEYBOARD F1], il clap, poi chiudi su [KEYBOARD C1], il
kick. Questi quattro sono il beat.

:::checkpoint
hear: Niente mentre tieni premuto [TRK]. Ogni suono suona solo quando premi il suo tasto da solo.
recover: Un suono che ha suonato vuol dire che [TRK] non era giù prima — tienilo premuto, poi premi. Con un altro kit, lo snare, l'hi-hat chiuso e la quarta voce stanno dove li ha trovati il tuo orecchio nella sessione 1; usa quei tasti ovunque questa sessione dice D1, A1 e F1.
:::

## Step: Entra in GRID RECORDING
keys: [RECORD]
leds: { RECORD: red }
source: manual §10.3
mode: playback

Premi [RECORD]. Il tasto si accende di rosso, e quel rosso è GRID RECORDING. I sedici tasti
trig hanno smesso di rappresentare le tracce. Ora rappresentano i sedici passi di una
battuta, per il suono scelto della traccia attiva.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", page: { n: 1, of: 1 } }
hear: Ancora niente; il sequencer non sta girando.
recover: Se i tasti trig mostrano invece gli slot dei pattern, sei nella selezione pattern. Premi [PTN] o [NO] per uscirne, poi premi [RECORD].
:::

:::note
Entrare in GRID RECORDING non avvia niente. [PLAY] avvia il sequencer, e puoi scrivere i trig
mentre gira o mentre è fermo — come ti viene più facile.
:::

## Step: Il kick sui quarti
keys: [TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3, §10.2.1
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD C1] perché il kick sia il suono che scrivi. Poi premi
[TRIG 1], [TRIG 5], [TRIG 9] e [TRIG 13]: un kick su ogni quarto. Ognuno dei quattro si accende di rosso — il rosso è un trig di nota.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Ancora niente.
recover: Un tasto che si è spento quando l'hai premuto aveva già un trig e l'hai tolto — una pressione breve è la cancellazione (§10.3). Premilo di nuovo.
:::

## Step: Play
keys: [PLAY, MAIN VOLUME]
leds: { RECORD: red }
source: manual §10.1.2
mode: grid-recording

Premi [PLAY]. Quattro kick per battuta al tuo tempo, e una luce che corre lungo i sedici
tasti. Lascialo girare: tutto quello che viene dopo si scrive mentre suona.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Un kick su ogni quarto, in loop.
recover: Silenzio mentre la luce corre ancora è di solito una di due cose: [MAIN VOLUME] troppo basso, o il jack delle cuffie non spinto fino in fondo. Se la luce non si muove affatto, hai premuto [PLAY] due volte — la seconda pressione mette in pausa (§10.1.2). Premilo ancora una volta.
:::

## Step: Lo snare sul due e sul quattro
keys: [TRK, KEYBOARD D1, TRIG 5, TRIG 13]
leds: { RECORD: red, TRIG 5: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD D1]. I sedici tasti si svuotano: adesso mostrano i
passi dello snare, e lo snare non ne ha ancora. Premi [TRIG 5] e [TRIG 13].

:::checkpoint
keys16: { 5: red, 13: red }
hear: Kick, snare, kick, snare.
recover: Se i quattro tasti del kick sono ancora accesi, non hai mai lasciato il kick. Tieni premuto [TRK] — premuto, non un tocco — e premi di nuovo [KEYBOARD D1].
:::

## Step: Hi-hat un passo sì e uno no
keys: [TRK, KEYBOARD A1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD A1], l'hi-hat chiuso. Ora premi tutti i tasti dispari
da [TRIG 1] a [TRIG 15]: otto hi-hat, uno ogni ottavo. Preferisci uno su ogni passo? Premili
tutti — il pezzo d'esempio ne tiene otto, e da qui in poi ai punti di controllo non importa
cosa hai scelto.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Il beat ha una pulsazione che corre tra le voci.
recover: Troppo fitto: premi i tasti che vuoi spenti. La pressione breve toglie; una pressione tenuta invece conserva il trig e lo prepara per la modifica (§10.3).
:::

## Step: La quarta voce, in levare
keys: [TRK, KEYBOARD F1, TRIG 7, TRIG 15]
leds: { RECORD: red, TRIG 7: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Tieni premuto [TRK] e premi [KEYBOARD F1], il clap. Mettilo su [TRIG 7] e [TRIG 15]: il "e"
prima del tre e dell'uno, dove spinge la battuta in avanti. Va bene dovunque, purché non
sullo snare, e va bene anche un altro suono corto del kit al posto del clap.

:::checkpoint
keys16: { 7: red, 15: red }
hear: La battuta si sporge verso quella dopo.
recover: Se cade sopra lo snare e lo impasta, spostalo: premi il tasto per togliere, premine un altro per aggiungere.
:::

## Step: Sistema un colpo
keys: [TRIG 7, YES, LEFT, RIGHT]
leds: { RECORD: red }
source: manual §10.3, §19
mode: grid-recording

Scegli un colpo di cui non sei sicuro — qui l'esempio usa il clap sul passo 7. Tieni
premuto [TRIG 7] e premi [YES]: quel trig suona, da solo, con quello che ha impostato sopra.
Una pressione breve di [TRIG 7] lo toglie; premi ancora per rimetterlo.

:::checkpoint
hear: Il singolo colpo da solo, mentre tieni premuto il tasto e premi [YES].
recover: Un trig tenuto premuto viene aperto per la modifica, non cancellato, quindi tenerne uno non ti costa niente. Se è comparso un menu MICRO TIMING, hai sfiorato [LEFT] o [RIGHT] mentre tenevi premuto (§10.5); lascia il tasto e premi [NO].
:::

## Step: Una pagina, sedici passi
keys: [FUNC, PAGE, E, NO]
leds: { RECORD: red }
source: manual §10.9, §10.9.1
mode: menu:PAGE SETUP

Tieni premuto [FUNC] e premi [PAGE]. LENGTH, sulla manopola DATA ENTRY [E], dice 16 — una
pagina, una battuta, che è quello che vuole questa sessione. I quadratini in cima alla
schermata principale contano le pagine del pattern; ce n'è una. [NO] torna indietro,
lasciando tutto com'era.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER PATTERN, "LENGTH 16", "SPEED 1"] }
hear: Invariato.
recover: Se hai mosso LENGTH per sbaglio, riporta la manopola [E] a 16 prima di [NO]. Un pattern più lungo non sono battute vuote — i passi che hai già vengono copiati in avanti nelle pagine nuove (§10.9.1).
:::

:::note
Due cose qui mordono più tardi. Questo menu imposta una sola lunghezza per *ogni* traccia
finché non premi [FUNC] + [YES], che lo passa a lunghezze per traccia. E il manuale non sa
decidere come si chiama questo menu — il titolo del §10.9 e la scritta sul pannello dicono
PAGE SETUP, il testo dello stesso §10.9 dice SCALE. Sono lo stesso menu.
:::

## Step: Metti in mute un suono
keys: [MUTE, KEYBOARD D1, UP, DOWN]
leds: { KEYBOARD C1: green, KEYBOARD E1: green, KEYBOARD F1: green, KEYBOARD G1: green, KEYBOARD A1: green, KEYBOARD B1: green, KEYBOARD C2: green }
source: manual §8.6
mode: playback

Premi [MUTE] con la traccia 1 ancora attiva — i suoni del kit vengono offerti solo per la
traccia su cui eri. I tasti della fila in basso si accendono per loro: quelli accesi suonano,
quelli spenti sono zittiti. Premi [KEYBOARD D1] e lo snare sparisce; premilo di nuovo e
torna. Premi [MUTE] per uscire. Il verde è il mute GLOBAL, che ti segue in ogni pattern e
viene salvato con il progetto; [MUTE] + [DOWN] passa al mute PATTERN, magenta, che
appartiene solo a questo pattern. [MUTE] + [UP] torna al globale.

:::checkpoint
hear: Il beat senza il suo snare, poi di nuovo con.
recover: Hai lasciato qualcosa in mute? [MUTE] stesso brilla debolmente, verde o magenta, ogni volta che qualcosa lo è — e il colore ti dice in quale modalità andare a cercare. Premilo e trova il tasto spento. In questa modalità i tasti trig sono tracce intere: un tasto trig zittirebbe il kit, tutti i suoni insieme.
:::

:::note
Per questi colori fidati del §8.6, non della guida rapida. Il §7.4 dà una regola sola —
spento è in mute, verde si sente — e non dice mai che il verde è specifico della modalità
globale, così chi lo impara lì ha mezza regola.
[I proprietari ricostruiscono le due modalità per analogia con le altre macchine Elektron](https://www.elektronauts.com/t/global-mute-mode/242420),
che è quello che succede quando un manuale risponde due volte alla stessa domanda.
:::

## Step: Copia il pattern in A02
keys: [RECORD, FUNC, PTN, TRIG 2, STOP]
leds: { TRIG 1: white, TRIG 2: red }
source: manual §6.6, §10.10.4, §10.1.1
mode: playback

Premi [RECORD] per uscire da GRID RECORDING — la copia di un pattern non funziona mentre è
attivo. Tieni premuto [FUNC] e premi [RECORD], la cui scritta menta dice Copy. Tieni premuto
[PTN] e premi [TRIG 2]: A02 è scelto, e parte quando A01 arriva alla fine. Nella selezione
pattern un tasto bianco è uno slot con qualcosa dentro e il tasto rosso è quello che sta
suonando. Ora tieni premuto [FUNC] e premi [STOP], scritta menta Paste. A02 è il tuo beat,
al sicuro dai cambiamenti in arrivo nella sessione 3.

:::checkpoint
screen: { bank: "A02", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: white, 2: red }
hear: Lo stesso beat, che adesso suona da A02.
recover: Se A02 arriva in silenzio, l'incolla è avvenuto prima del cambio. Aspetta che il numero di A02 smetta di lampeggiare in alto a sinistra — quel lampeggio è il pattern in coda, non la macchina che ti ignora — poi di nuovo [FUNC] + [STOP].
:::

:::note
Restare dentro il banco A è una scelta di questa sessione, non un muro. Per raggiungere un
altro banco premi [PTN], scegli il banco sulla fila [KEYBOARD] in basso, poi premi un tasto
trig per il pattern (§10.1.1). Quella fila risponde a tre nomi in questo manuale — fila
[KEYBOARD] in basso, i tasti [SUBTRACKS], il tasto segnato [KEYBOARD C1] per il banco A — e
la lista del pannello del §3.1, voce 21, ne stampa due sulla stessa riga, perché sono una
sola fila di tasti. Dentro il banco in cui sei già, [PTN] e un tasto trig è tutto il gesto,
ed è tutto quello che serve oggi.
:::

## Step: Cancella, e annulla
keys: [FUNC, PLAY, YES, NO]
leds: { TRIG 2: red }
source: manual §6.6, §10.10.4, §10.10.5
mode: playback

Tieni premuto [FUNC] e premi [PLAY] — scritta menta Clear — poi [YES] alla richiesta. Ogni
trig di A02 è sparito e il loop successivo è silenzio. Ora tieni premuto [FUNC] e premi [NO],
scritta menta Undo. Il beat è tornato. Fallo apposta, una volta.

:::checkpoint
hear: Una battuta di silenzio, poi di nuovo il beat.
recover: Se l'undo non fa niente, incolla di nuovo — la copia è ancora negli appunti. L'undo arriva a un incolla o a una cancellazione a ogni livello in cui il sequencer ne tiene uno: un pattern intero, la sequenza di una traccia, una singola pagina, una pagina di parametri, il suono di una traccia. Si ferma davanti a una cosa sola, e il §10.10.5 lo dice chiaro: cancella il preset di una traccia ed è andato.
:::

## Step: Torna ad A01, e salva
keys: [PTN, TRIG 1, FUNC, SETTINGS, RECORD, TRK, KEYBOARD C1]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.1.1, §9.1.1
mode: playback

Tieni premuto [PTN] e premi [TRIG 1] per tornare ad A01. Tieni premuto [FUNC] e premi
[SETTINGS]: salvati, entrambi i pattern, nessuna richiesta. Poi premi [RECORD] ancora una
volta, tieni premuto [TRK] e premi [KEYBOARD C1], e guarda il kick un'ultima volta — passi 1, 5,
9 e 13, rossi. Quell'immagine è la testata di questa sessione.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Il tuo beat, da A01.
recover: Il salvataggio non dice niente e non mostra nessuna schermata del nome; qui un salvataggio è fatto così. Se vuoi esserne certo, la lista PROJECT, LOAD del menu FILE ha dentro il tuo nome.
:::

## What you now have

SIXTEEN ha un beat di una battuta su A01 — kick, snare, hi-hat chiuso e clap, tutti dal kit
sulla traccia 1 — e A02 ne contiene una copia. Le tracce da 2 a 4 sono ancora vuote.
Entrambi i pattern sono salvati. Fermati qui, o continua
a suonare: tutto quello che cambi da adesso non è salvato fino al prossimo [FUNC] +
[SETTINGS].

## Explore further

### Una seconda pagina
[FUNC] + [PAGE], poi porta LENGTH a 32. Il pattern è di due pagine e la seconda è una copia
della prima, non battute vuote (§10.9.1). In GRID RECORDING, [PAGE] passa dall'una all'altra,
così puoi cambiare un colpo solo sulla pagina due. Rimetti LENGTH a 16 prima della sessione
3, oppure tienilo così e sappi che i punti di controllo della sessione 3 descrivono una
pagina sola.

### Copia i trig di un suono
In GRID RECORDING — questa lo vuole *acceso* — [FUNC] + [RECORD] solleva i trig dal suono in
cui sei; scegli un altro suono con [TRK] e il suo tasto della fila in basso e [FUNC] + [STOP]
ce li mette (§10.10.4). Metti il pattern dell'hi-hat chiuso sul tom, [KEYBOARD B1], e senti
cosa fa alla battuta; [FUNC] + [NO] lo riporta indietro. Gli stessi due tasti, con il grid
recording spento, spostano un pattern intero: è la modalità a decidere su cosa agiscono.

### Mute rapido
[MUTE] + [TRIG 1] mette in mute tutto il kit senza entrare affatto nella modalità mute, e lo
rifà per togliere il mute (§8.6). Questo è quello da imparare se mai lo suonerai dal vivo.

### Swing
Nel menu [TEMPO], la manopola [D] imposta SWING tra il 50 e l'80 per cento, e 50 è
perfettamente dritto (§7.5.1). Prova 58 con gli hi-hat che girano. Rimettilo a 50 prima di
salvare se vuoi il feel del pezzo d'esempio.

### Copia un pattern senza lasciare questo
Premi [PTN], poi tieni premuto un tasto trig e premi [RECORD] per copiare quel pattern,
[STOP] per incollarci dentro, [PLAY] per cancellarlo — tutto senza spostarti dal pattern che
stai suonando. È
[nuovo nell'OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes) ed è
una famiglia diversa dalle combinazioni con [FUNC] qui sopra, che agiscono sempre dove sei.

## Next

La sessione 3 rende tuo il kit: un passo visto attraverso tutti e otto i suoni, un suono
riaccordato, un tuo sample al posto del clap. La tua copia A02 resta esattamente com'è. La
lezione sui colori dei tasti — i tasti trig come tracce, come passi, come slot dei pattern, e
la fila in basso come i suoni del kit — è la cosa da portarsi dietro.
