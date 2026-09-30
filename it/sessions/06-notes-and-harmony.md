---
number: 6
chapter: sound
slug: notes-and-harmony
title: Note e armonia
goal: Metti una bassline e quattro accordi sotto il beat suonando quattro tasti due volte, e lascia che arpeggiatore e modalità accordi facciano il resto.
needs: ["Il progetto della sessione 5", "Cuffie collegate", "Circa sedici minuti"]
teaches: [track-select, load-preset, play-mode, octave, page-setup-per-track, chord-scale, live-recording, arpeggiator, chord-mode, pattern-transpose]
simulator: null
ends: { keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green } }
---

## Step: Dove sei
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

La sessione 5 ha lasciato A01 che cambia da un loop all'altro sulla traccia 1, in GRID RECORDING
sulla subtrack dello snare. Se il sequencer è fermo, premi [PLAY]. Tieni premuto [FUNC] e premi
[SETTINGS] prima di aggiungere qualcosa: in questa sessione si riempiono le tracce 2 e 3, e il
salvataggio è il pavimento sotto entrambe.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Il beat della sessione 5 che gira: il pickup un loop sì e uno no, le ghost note che si giocano il loro posto. Cinque tasti accesi sulla striscia — lo snare su 5 e 13 e i tre snare del fill dopo.
recover: Parti da qui senza la sessione 5? Quella sessione scrive il pattern su cui suona questa, e dura circa sedici minuti; va bene anche qualsiasi pattern con un beat sulla traccia 1 e niente sulle tracce 2 e 3.
:::

## Step: Un basso sulla traccia 2
keys: [TRK, TRIG 2, PRESET, RIGHT, UP, DOWN, YES]
leds: { TRIG 2: white }
source: manual §5.3.7, §9.1.4, §7.3
mode: menu:LOAD PRESET

Tieni premuto [TRK] e premi [TRIG 2]: la traccia 2 è la traccia attiva. Premi [PRESET], [RIGHT]
fino a KEYS, [UP]/[DOWN] fino a ⟨bass preset⟩, e [YES] per caricarlo — oppure qualsiasi preset
KEYS con le note più basse rotonde e corte. Poi suona la fila in basso. Sulla traccia 1 quei tasti
erano gli otto suoni del kit; qui ognuno suona lo stesso suono a un'altra altezza, e la fila in
alto, muta sul kit, suona le note di mezzo (§7.3).

:::note
La stessa lista aperta dal menu FILE, [FUNC] + [PRESET], resta aperta dopo ogni caricamento, e
provare più preset diventa più veloce ([la strada di un possessore](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/606)).
:::

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 1 }
hear: Il beat continua sotto di te. Ogni tasto della fila in basso suona una nota grave del basso, più alta da sinistra a destra.
recover: Se dai tasti escono i suoni del kit, la traccia attiva è ancora la 1 — tieni [TRK], premi [TRIG 2] e carica di nuovo. Una lista con dentro solo kit è DRUMS: ancora una volta [RIGHT].
:::

## Step: Una voce, un'ottava sotto
keys: [FUNC, TRIG, UP, DOWN, LEFT, RIGHT, NO, -]
source: manual §11, §11.1.1, §8.5
mode: menu:TRACK SETUP

Tieni premuto [FUNC] e premi [TRIG]: TRACK SETUP si apre sulla sua pagina TRIG (§11). [UP] e
[DOWN] scorrono le righe; PLAY MODE è la prima. Impostala su MONO con [LEFT]/[RIGHT] e premi [NO]:
ora una nota nuova taglia quella prima, una nota alla volta (§11.1.1). Poi premi [-] una volta. La
tastiera scende di un'ottava, e il puntino acceso accanto a [+] e [-] passa da 0 a −1 (§8.5).

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE MONO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: Tieni un tasto e premine un altro: il primo si ferma. Ogni tasto suona un'ottava più in basso di prima.
recover: Due note insieme: PLAY MODE è ancora su POLY — di nuovo [FUNC] + [TRIG]. Nessun calo di altezza: [-] è andato a un menu ancora aperto; premilo con la schermata principale in vista.
:::

## Step: Quattro battute per il basso
keys: [FUNC, PAGE, YES, E, NO]
source: manual §10.9, §10.9.1, §10.9.2
mode: menu:PAGE SETUP

Tieni premuto [FUNC] e premi [PAGE]. PAGE SETUP si apre in PER PATTERN, dove tutte le tracce
condividono una sola lunghezza (§10.9.1). Tieni [FUNC] e premi [YES] per PER TRACK, dove LENGTH
appartiene solo alla traccia attiva (§10.9.2). Tieni [FUNC] e gira [E]: LENGTH si muove di sedici
passi alla volta — fermati a 64, quattro battute. [NO] chiude il menu. La traccia 1 tiene i suoi 16,
così il kit fa il giro a ogni battuta mentre la traccia 2 ne ha quattro da riempire.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Ancora niente di nuovo: la lunghezza fa solo spazio. Sulla schermata principale, quattro quadratini per le quattro pagine della traccia 2.
recover: Se anche il kit ha quattro quadratini, il menu era ancora su PER PATTERN quando LENGTH si è mosso: [FUNC] + [PAGE], [FUNC] + [YES] per PER TRACK, poi con la traccia 1 attiva ([TRK] + [TRIG 1]) riporta LENGTH a 16. Se LENGTH avanza un passo alla volta, [FUNC] non è premuto mentre giri [E]. Quattro battute che ripartono dopo una: RESET, nella colonna PATTERN del menu, è sotto 64 — giralo su INF (§10.9.2). Prima del passo 6, [TRK] + [TRIG 2]: è la traccia 2 quella da suonare.
:::

## Step: Dai una tonalità al pattern
keys: [CHORD, NO]
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Premi [CHORD]: CHORD/SCALE SETUP, un'immagine di cosa suona la tastiera (§8.5.1). Con la manopola
sotto ogni impostazione, metti ROOT su A, SCALE su AEOLIAN (MINOR) e GUIDE su LIGHT, poi premi
[NO]. L'impostazione appartiene al pattern, non a una traccia. Sulla traccia 2 ora si accendono i
tasti di La minore: tutta la fila in basso, e nessuno di quella in alto — La minore sono i tasti
bianchi.

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD OFF"] }
hear: Nel suono non cambia niente. La fila in basso accesa, quella in alto spenta.
recover: Nessun tasto acceso: GUIDE è ancora su OFF. Un tasto che suona una nota diversa da quella premuta: GUIDE è su SNAP, che sposta un tasto fuori scala alla nota più vicina dentro la scala — LIGHT si limita a mostrare.
:::

## Step: Quattro fondamentali, suonate dal vivo
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Premi [STOP]. Tieni premuto [RECORD] e premi [PLAY]: ogni traccia riparte dal suo primo passo, e
LIVE RECORDING è attivo, con [RECORD] che lampeggia in rosso (§10.4). Tieni subito [KEYBOARD A1],
per una battuta — contando fino a quattro — poi [KEYBOARD F1] per la seconda battuta,
[KEYBOARD C1] per la terza e [KEYBOARD G1] per la quarta. Premi [STOP] alla fine della quarta
battuta, poi [PLAY] per ascoltare.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 2 }
hear: Sotto il beat, quattro note lunghe e gravi, una per battuta: La, Fa, Do, Sol, e di nuovo da capo.
recover: Una nota che si ferma prima della fine della sua battuta è stata lasciata troppo presto. Una nota suonata dal vivo tiene la durata per cui è stata tenuta, e girare LEN sul suo trig non la cambia ([l'hanno scoperto dei possessori](https://www.elektronauts.com/t/trig-len-not-working/249623/8)). Per suonare di nuovo le quattro, prima cancellale: [RECORD] per GRID RECORDING, poi [FUNC] + [PLAY] — se ne vanno i trig della traccia 2, quelli del kit restano (§10.10.4) —, di nuovo [RECORD], e ricomincia questo passo da capo. La prima nota va insieme alla pressione di [PLAY], non un battito dopo.
:::

## Step: L'arp scrive la linea
keys: [ARP, H, LEFT, RIGHT, E, DOWN, FUNC, NO]
leds: { ARP: cyan }
source: manual §9.4, §9.4.5, §9.4.6
mode: menu:ARPEGGIATOR

Premi [ARP] con la traccia 2 attiva: il menu ARPEGGIATOR (§9.4). Gira [H] su ARP LENGTH 8
(§9.4.6). [LEFT] e [RIGHT] scelgono uno degli otto passi e [E] ne imposta lo scarto, in semitoni
dalla nota sul trig (§9.4.5): il passo 1 resta a 0, poi +12, +7, il passo 4 muto con [DOWN], 0, +7,
il passo 7 muto, +12. Tieni [FUNC] e premi [ARP] per accendere l'arpeggiatore. [NO] esce dal menu;
fuori dal menu, [ARP] resta acceso in ciano finché la traccia 2 è attiva.

:::note
Gli scarti contano dalla nota di ciascun trig, quindi una sola figura parte da La nella prima
battuta, da Fa nella seconda, poi da Do e Sol. 0, +2, +7 e +12 restano in La minore su tutte e
quattro le fondamentali; +3 va bene su La ma non su Fa, Do o Sol.
:::

:::checkpoint
screen: { menu: "ARPEGGIATOR", items: ["MODE", "SPEED", "N.LEN", "OFFSET", "ARP LENGTH 8"] }
keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green }
hear: Le quattro note lunghe diventano una linea in movimento, otto passi brevi e di nuovo da capo, che salta sulla nuova fondamentale a ogni battuta. Nel menu, sei tasti trig accesi in verde e due spenti: i passi muti.
recover: Ancora una nota lunga: l'arpeggiatore è spento — MODE dice OFF, oppure [ARP] è spento fuori dal menu: [FUNC] + [ARP]. La linea si ferma prima della fine della battuta: la nota sotto è corta, e l'arp suona solo finché dura la nota del suo trig (passo 6). Una nota stonata: uno scarto diverso da 0, +2, +7 o +12.
:::

## Step: Accordi sulla traccia 3
keys: [TRK, TRIG 3, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 3: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Tieni premuto [TRK] e premi [TRIG 3]. Premi [PRESET], [RIGHT] fino a KEYS, [UP]/[DOWN] fino a
⟨chord preset⟩, e [YES] — oppure qualsiasi suono KEYS che tiene la nota finché il tasto è premuto.
Poi tieni [FUNC], premi [PAGE], tieni [FUNC] e gira [E] fino a LENGTH 64 per la traccia 3, e premi
[NO]. Il menu è ancora su PER TRACK, e ogni traccia tiene la sua lunghezza.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Un tasto della fila in basso tiene una nota del nuovo suono finché lo tieni premuto; la bassline e il beat vanno avanti.
recover: LENGTH diceva già 64 quando il menu si è aperto: è quella della traccia 2 — [TRK] + [TRIG 3], poi di nuovo [FUNC] + [PAGE]. Il menu dice PER PATTERN: prima [FUNC] + [YES] per PER TRACK, altrimenti tutte le tracce vanno a 64.
:::

## Step: Un tasto, un accordo
keys: [CHORD, NO, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { CHORD: cyan }
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Premi [CHORD] e, con le manopole sotto, metti SHAPE su 1-3-5 e CHORD su ON, poi premi [NO]: la
modalità accordi è attiva, [CHORD] acceso in ciano ([FUNC] + [CHORD] fa lo stesso da ovunque).
Premi [KEYBOARD A1]: tre note insieme, La minore. Ogni tasto suona l'accordo della scala di La
minore che parte da lui — [KEYBOARD F1] Fa maggiore, [KEYBOARD C1] Do maggiore, [KEYBOARD G1] Sol
maggiore (§8.5.1).

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD ON", "SHAPE 1-3-5"], sel: 4 }
hear: Un tasto, tre note: La minore, poi Fa, Do e Sol maggiore dagli altri tre tasti.
recover: Una sola nota da ogni tasto: la modalità accordi è spenta, [CHORD] spento. Il Fa suona minore: SCALE è su CHROMATIC, dove lo stesso tipo di accordo viene stampato su ogni tasto — rimettila su AEOLIAN (MINOR). Diversi suoni della batteria da un tasto: la traccia attiva è la 1 — [TRK] + [TRIG 3].
:::

## Step: Quattro accordi, suonati dal vivo
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red, CHORD: cyan }
source: manual §10.4, §8.5.1
mode: live-recording

Il gesto del passo 6, sulla traccia 3: premi [STOP], tieni [RECORD] e premi [PLAY], poi tieni
[KEYBOARD A1], [KEYBOARD F1], [KEYBOARD C1] e [KEYBOARD G1], una battuta ciascuno dal primo
battito. [STOP] alla fine della quarta battuta, poi [PLAY].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: La minore, Fa, Do, Sol, un accordo per battuta, sopra la bassline.
recover: Un accordo troncato è stato lasciato troppo presto: come al passo 6, [RECORD] per GRID RECORDING, poi [FUNC] + [PLAY] cancella i trig della traccia 3, di nuovo [RECORD], e suona di nuovo i quattro — ogni accordo dura quanto è stato tenuto il suo tasto. Una battuta di accordi che gira invece di quattro: la traccia 3 è ancora lunga 16 passi — LENGTH 64 come al passo 8, cancella e suonali di nuovo. Le sue note sono scritte sul trig come note semplici, quindi resta quello che senti.
:::

## Step: Modalità accordi spenta
keys: [FUNC, CHORD, TRK, TRIG 1, KEYBOARD C1]
source: community https://www.elektronauts.com/t/tonverk-tips-tricks/238162/334
mode: playback

Tieni premuto [FUNC] e premi [CHORD]: [CHORD] si spegne. La modalità accordi è un solo interruttore
per tutto il pattern, kit compreso — se resta accesa, un tasto del kit fa partire diversi suoni
insieme. I quattro accordi restano: ora sono note sui trig. Tieni [TRK], premi [TRIG 1] e premi
[KEYBOARD C1].

:::checkpoint
hear: Il kick da solo da [KEYBOARD C1], e gli accordi che continuano sulla traccia 3.
recover: Il kick arriva con altri suoni della batteria: [CHORD] è ancora acceso — tieni [FUNC] e premi [CHORD].
:::

## Step: Un'altra tonalità, e ritorno
keys: [PTN, +, -]
source: manual §10.10.8
mode: playback

Tieni [PTN], premi [+] tre volte e lascia [PTN]: la bassline e gli accordi salgono di tre
semitoni, in Do minore (§10.10.8), e il kit resta dov'era. Ascolta per qualche battuta. Poi tieni
[PTN], premi [-] tre volte e lascia: a casa, in La minore. Le note sui trig non sono mai cambiate;
la trasposizione sta sopra di loro.

:::note
Dei possessori l'hanno provato sulla OS 1.4.0: una traccia con la macchina Subtracks non viene
trasposta ([la prova](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824/107)).
:::

:::checkpoint
hear: L'armonia più alta e più chiara, la batteria uguale; poi il pezzo com'era.
recover: Anche la batteria si è spostata: la traccia 1 non è sulla macchina Subtracks. Ancora più in alto dopo tre pressioni di [-]: confronta quello che senti con il La — tre semitoni sotto il Do c'è il La.
:::

## Step: Salva
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Tieni premuto [FUNC] e premi [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: A01 com'è adesso: il beat, la bassline, quattro accordi.
recover: Nessuna schermata ha detto che il progetto è stato scritto: [FUNC] non era giù quando hai premuto [SETTINGS]. Premili di nuovo insieme.
:::

## What you now have

La traccia 2 suona una bassline mai scritta nota per nota: quattro fondamentali, una per
battuta, e una figura di otto passi che l'arpeggiatore costruisce su ciascuna. La traccia 3 suona
La minore, Fa, Do e Sol, quattro accordi da quattro tasti. Il kit continua a girare a ogni
battuta sotto quattro battute di armonia, il pattern è di nuovo in La minore, e tutto è salvato.

## Explore further

### Un basso che scivola
Nella stessa pagina di TRACK SETUP, metti PLAY MODE su MONO LEG e PORTAMENTO su MONO LEG (§11.1.1,
§11.1.5), poi accendi PORT su TRIG PAGE 2 e dagli un PTIM breve (§12.3). Due note scivolano l'una nell'altra quando la
prima dura oltre l'inizio della seconda; le note separate da una pausa attaccano ancora pulite.

### I dadi per l'arp
Prima memorizza il pattern: tieni [FUNC] e premi [KEYBOARD D#1] (§10.10.6). Nel menu
ARPEGGIATOR, [ARP] + [YES] tira a sorte tutte le impostazioni insieme, e [E] premuta con [YES]
tira a sorte solo gli scarti (§9.4). Tieni un tiro che ti piace, oppure tieni [FUNC] e premi
[KEYBOARD C#1] per tornare indietro.

### Un accordo arpeggiato a mano
In STEP EDIT ogni nota di un accordo tiene il suo micro timing: sposta le note in alto un po' più
tardi della più bassa, e l'accordo entra rotolando dal basso invece di cadere in blocco
([mostrato qui](https://www.youtube.com/watch?v=lrcaoGwYL00&t=2400)).

### Un altro rivolto
La modalità accordi suona ogni accordo dalla fondamentale in su. [STEP EDIT] sul trig di un
accordo mostra le sue note sulla tastiera: un tasto acceso premuto toglie quella nota, uno spento
premuto la aggiunge, e [+] e [-] raggiungono l'ottava sopra o sotto (§10.3.1).

### Il kit con la modalità accordi
Riaccendi la modalità accordi, seleziona la traccia 1 e premi un tasto del kit: diversi suoi suoni
partono dal solo tasto. Di nuovo [FUNC] + [CHORD], poi salva.

## Next

La sessione 7 segue il suono fuori dalle tracce: la batteria attraverso un bus con un compressore,
gli accordi in un riverbero, e il menu ROUTING che li collega.
