---
number: 1
chapter: rhythm
slug: first-sound
title: Il primo suono
goal: Accendi, metti un kit di batteria sulla traccia 1, trova il suo kick sulla fila in basso, imposta il tempo e salva un progetto a cui poter tornare.
needs: ["Il Tonverk e il suo alimentatore", "Cuffie con jack da 1/4 di pollice (o un mixer su OUT A/B)", "La scheda SD di fabbrica nel suo slot", "Circa sedici minuti"]
teaches: [power, volume, new-project, track-select, load-preset, kit, subtrack-select, tempo, metronome, name-project, save-project]
simulator: null
ends: { keys16: { 1: white } }
---

## Step: Accensione
keys: []
source: manual §3.2, §3.3, §5.2.1
checked: yes
mode: any

Collega l'alimentatore in dotazione a una presa a muro e il suo cavo USB a una delle due
porte USB sul retro; entrambe possono alimentare la macchina, e la piccola vite accanto alla
porta serve a impedire che il cavo si allenti. Premi POWER sul pannello posteriore. Il
display si accende e mostra il progetto che il Tonverk stava usando l'ultima volta — non c'è
nessuna procedura guidata al primo avvio, e niente qui ti chiede una decisione.

:::checkpoint
hear: Ancora niente. La macchina è accesa e silenziosa, e mostra un progetto che non hai scelto tu.
recover: Non si accende niente? Il cavo va in USB 1 o USB 2, e l'alimentatore che il manuale raccomanda è l'Elektron PSU-5 che c'era nella scatola (§3.2, §20). La porta di un laptop o il caricatore di un telefono possono non bastare.
:::

:::note
Per spegnere, più tardi: premi POWER, poi [YES] — oppure premi POWER due volte. Aspetta che
ogni LED e la retroilluminazione del display si spengano prima di staccare il cavo. Se la
macchina dovesse smettere di rispondere, tenere premuto POWER la forza a spegnersi, e tutto
ciò che non è salvato se ne va con lei.
:::

## Step: Le cuffie e le due manopole del volume
keys: [MAIN VOLUME, LEVEL/DATA]
source: manual §3.1, §6.1
checked: yes
mode: any

Collega le cuffie a OUT E/F (HEADPHONES) sul retro. Porta [MAIN VOLUME] a circa un quarto.
Sulla sinistra di questo pannello ci sono due manopole grandi e solo questa è il livello di
*uscita*: [LEVEL/DATA] è il livello della traccia attiva in quel momento, e in tutto il resto
della macchina scorre anche le liste e imposta i valori. Per ora lasciala stare.

:::note
Abbassare [LEVEL/DATA] per attenuare le cuffie tira giù il livello di una traccia e lo lascia
lì; più tardi rialzi [MAIN VOLUME] e quella traccia è ancora bassa, senza niente sul display
che dica perché.
[Una guida che tiene distinte le due manopole](https://www.youtube.com/watch?v=lrcaoGwYL00).
:::

## Step: Un progetto nuovo
keys: [FUNC, PRESET, UP, DOWN, YES, NO]
source: manual §9.1, §9.1.1
checked: yes
mode: menu:FILE

Tieni premuto [FUNC] e premi [PRESET]: si apre il menu FILE. Vai su PROJECT con [UP]/[DOWN]
e [YES], poi NEW e [YES]. Se ti chiede di salvare il progetto che era aperto, premi [NO] —
il progetto di fabbrica è già sulla scheda e non ci hai cambiato niente.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
hear: Niente. Un progetto vuoto, pattern A01, nessun suono caricato.
recover: Se invece si è aperta una lista di progetti, sei in LOAD e non in NEW. Premi [NO] una volta e scegli NEW.
:::

:::note
Un progetto nuovo non carica niente, ma il browser dei preset nei prossimi passi elenca
comunque tutta la libreria di fabbrica. Quella è la libreria della scheda, condivisa da ogni
progetto, non il contenuto del tuo progetto — la distinzione che
[questo thread](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)
esiste per spiegare. Niente di quello che fai qui dentro può danneggiare il materiale di
fabbrica.
:::

## Step: Seleziona la traccia 1
keys: [TRK, TRIG 1]
leds: { TRIG 1: white }
source: manual §5.3.7
checked: yes
mode: any

Tieni premuto [TRK] e premi [TRIG 1]. La traccia 1 è ora la traccia attiva: quella che il
display descrive, quella che [LEVEL/DATA] controlla, quella che la tastiera suonerà. Tenere
premuto [TRK] conta — un [TRIG 1] da solo seleziona la traccia *e* la fa suonare, cioè una
nota che non hai chiesto, ogni volta che cambi traccia.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
keys16: { 1: white }
hear: Ancora niente; sulla traccia non c'è nessun suono.
recover: L'angolo in basso a sinistra del display è l'indicazione di cui fidarti: dice T1. Anche un [TRIG 1] premuto da solo seleziona la traccia 1 — e la fa suonare, ed è tutta lì la differenza.
:::

:::note
Tre parti del manuale scrivono questo tasto in tre modi — [TRK] nel §5.3.7, TRACK nel §10.3,
e la procedura per i preset del §9.1.4 chiede invece [FUNC] e un tasto trig. Il pannello che
hai davanti stampa TRK, quindi è così che lo chiama questo corso.
[I proprietari la risolvono allo stesso modo](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
[TRK] e un tasto trig è la selezione silenziosa.
:::

## Step: Carica un kit
keys: [PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §7.1, §9.1.4
mode: menu:LOAD PRESET

Premi [PRESET]. Il menu LOAD PRESET si apre sulla traccia attiva. [LEFT]/[RIGHT] spostano tra
le categorie di preset, DRUMS e KEYS; resta in DRUMS. Scorri con [UP]/[DOWN] o [LEVEL/DATA]
fino a 017 HELLO KIT, il kit che usa il pezzo d'esempio, e premi [YES] per caricarlo sulla
traccia 1. Un altro kit va bene lo stesso: i passi nominano i tasti di HELLO KIT, e nel tuo
gli stessi suoni possono stare su tasti diversi.

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 0 }
hear: Premi [TRIG 1] una volta. Suona uno dei suoni del kit.
recover: Silenzio: alza un po' [MAIN VOLUME], e il jack delle cuffie fino in fondo. Se [TRIG 1] non fa nessun suono, il preset è finito da un'altra parte — tieni premuto [TRK], premi [TRIG 1] e caricalo di nuovo.
:::

:::note
Quasi tutto quello che c'è in DRUMS è un kit: otto suoni su una traccia, non un tamburo solo.
[Un giro dei kit di fabbrica](https://www.youtube.com/watch?v=vWVw534Xvs4) li fa sentire uno
dopo l'altro. Non esiste un preset che sia un kick da solo: carichi un kit, e il kick lo
trovi dentro.
:::

:::note
Qui non c'è anteprima. L'unico modo di sentire un preset è caricarlo, e caricarlo sostituisce
quello che la traccia aveva.
[I recensori lo chiamano l'ammazza-flusso](https://www.soundonsound.com/reviews/elektron-tonverk).
E [FUNC] + [NO] non è una via di ritorno: l'undo è per gli incolla e le cancellazioni
(§10.10.5), e caricare un preset sopra un altro non è nessuna delle due.
:::

:::note
Caricare un preset lo copia nel pattern (§9). Da adesso in poi una manopola che giri cambia
*la copia di questo pattern*, mai il file sulla scheda. È la prima delle cinque regole dei
contenitori; la mappa in [Prima di cominciare](/before-you-start/) mostra le altre.
:::

## Step: Otto suoni sulla fila in basso
keys: [KEYBOARD C1, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, KEYBOARD G1, KEYBOARD A1, KEYBOARD B1, KEYBOARD C2, TRIG 1]
leds: { KEYBOARD C1: red }
source: manual §3.1, §A.2.3
mode: any

Premi la fila in basso della tastiera un tasto alla volta, da [KEYBOARD C1] a
[KEYBOARD C2]. Ogni tasto è un suono del kit. Il numero sul display segue il tasto che hai
premuto, e quel tasto resta rosso: è il suono che adesso suona [TRIG 1]. Riconoscili da dove
stanno e da quanto durano. Il kick è il più basso, e breve — quello su cui poggiano gli
altri. Lo snare è uno schiocco secco a metà del registro; un clap è un battito di mani e
spesso prende il posto dello snare. L'hi-hat chiuso è il più acuto e il più breve di tutti;
un hi-hat aperto è altrettanto acuto ma resta a suonare. Un tom è un tamburo con un'altezza
precisa, e un piatto è una lunga scia metallica. In HELLO KIT il kick è su [KEYBOARD C1]:
premilo per ultimo, poi [TRIG 1].

:::checkpoint
hear: Otto suoni diversi, poi il kick da solo da [TRIG 1].
recover: La fila in alto della tastiera e i tasti delle ottave non fanno niente mentre sulla traccia c'è un kit; è il kit, non un guasto. Se [TRIG 1] suona qualcosa che non è il tuo kick, il tasto rosso è altrove — premi [KEYBOARD C1], o il tasto dove il tuo kit tiene il kick, e riprova.
:::

:::note
La tastiera non segue sempre la traccia che hai appena scelto. Seleziona una qualsiasi traccia
da 9 a 16 mentre era attiva una traccia audio e la [KEYBOARD] resta su quella traccia audio
di prima (§5.3.7, §8.5), così puoi suonare attraverso un bus mentre lo regoli. A chi è nuovo
sembra una selezione che non ha funzionato.
[È voluto](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
seleziona una traccia audio, da 1 a 8, per riavere la tastiera.
:::

## Step: Imposta il tempo
keys: [TEMPO, A, NO]
source: manual §7.5.1
checked: yes
mode: menu:TEMPO

Premi [TEMPO]. La manopola DATA ENTRY [A] è il BPM; premila mentre la giri e si muove di otto
alla volta. Il pezzo d'esempio va a 92. Se hai in mente un tempo, usa quello — qualunque
valore tra 80 e 100 tiene comode le sessioni successive. [NO] richiude il menu.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Ancora non cambia niente; il tempo compare in alto a destra nella schermata principale.
recover: Se il BPM si rifiuta di muoversi, il Tonverk sta seguendo un clock esterno. Il §7.5.1 dice che il display mostra "MIDI" sopra il BPM; il §6 descrive un'icona a lucchetto accanto. I due segni vogliono dire la stessa cosa — per ora stacca la sorgente di clock MIDI o USB.
:::

## Step: Ascolta il tempo
keys: [FUNC, KEYBOARD F#1, PLAY, KEYBOARD C1, STOP]
source: manual §7.5.2
checked: yes
mode: playback

Tieni premuto [FUNC] e premi [KEYBOARD F#1] — la sua scritta menta dice Metronome. Premi
[PLAY]: un click al tuo tempo. Suonaci sopra il kick su [KEYBOARD C1] per un minuto;
l'esercizio è questo, ed è tutta la ragione per cui il tempo è venuto prima del beat. Premi
[STOP], poi di nuovo [FUNC] + [KEYBOARD F#1] per zittire il click.

:::checkpoint
hear: Un click al tuo tempo, quattro per battuta, e il tuo kick sopra.
recover: Nessun click: apri [TEMPO] e guarda le manopole da E ad H — METRO lo accende e GAIN decide quanto è forte. Il metronomo non ha un menu suo; vive nella metà destra del menu del tempo.
:::

## Step: Dai un nome al progetto
keys: [FUNC, PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §9.1.1, §6.7
checked: yes
mode: menu:NAMING

Tieni premuto [FUNC] e premi [PRESET] per il menu FILE, di nuovo, poi PROJECT e SAVE AS. Si
apre una schermata NAMING: [LEFT]/[RIGHT] spostano tra i caratteri, [LEVEL/DATA] o [UP]/[DOWN]
ne scelgono uno, e tenendo premuto [FUNC] compaiono tutte le lettere, le cifre e i simboli
insieme, così puoi scegliere con le frecce. Chiamalo SIXTEEN, o in qualunque modo tu possa
riconoscere, e premi [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Non cambia niente. Il progetto, il suo pattern e il tuo kit sono ora sulla scheda con un nome che hai scelto tu.
recover: Se finisci da qualche parte senza schermata NAMING, hai scelto SAVE invece di SAVE AS. [NO] torna indietro; SAVE AS è quello che chiede un nome e prende uno slot nuovo. Nella schermata del nome, [FUNC] + [NO] cancella una lettera e [FUNC] + [YES] inserisce uno spazio.
:::

## Step: L'abitudine del salvataggio
keys: [FUNC, SETTINGS, NO]
source: community https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370
checked: yes
mode: any

Tieni premuto [FUNC] e premi [SETTINGS] — la scritta menta dice Save Proj. Niente ti chiede
niente. Nessun nome, nessuna conferma, nessuna lista: il progetto torna dritto nel suo slot
con il nome che gli hai appena dato, e sei di nuovo nella schermata principale. Fallo adesso,
così la prima volta che vedi quel silenzio è una volta in cui te lo aspettavi.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Niente di niente. Quel silenzio è il passo: il progetto è sulla scheda, con il nome che gli hai dato.
recover: Se invece si è aperto un menu di impostazioni, hai premuto [SETTINGS] senza [FUNC]. Premi [NO], tieni premuto [FUNC] prima, poi premi [SETTINGS]. Se non sei sicuro che il salvataggio sia avvenuto, apri il menu FILE, PROJECT, LOAD: il tuo nome è nella lista.
:::

:::note
La trappola è l'assenza di una richiesta. I proprietari premono [FUNC] + [SETTINGS], non
vedono nessuna schermata del nome e concludono che non è stato salvato niente —
[il thread da cui è tratto questo passo](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)
sono proprietari che se ne rendono conto. Il §9.1.1 dà alla combinazione un solo compito —
riscrive quello su cui stai lavorando nello slot da cui viene — e il nome è SAVE AS, che hai
già fatto. Potresti vedere un breve banner mentre la scheda viene scritta; i proprietari su
questo OS
[hanno chiesto di toglierlo](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824),
anche se il §9.1.1 non ne parla mai, quindi prendilo come qualcosa che può passare in un
lampo e non come qualcosa da aspettare. Sarà la tua unità a dirlo.
:::

:::note
Su questa macchina non esiste il salvataggio del pattern, e nemmeno un tasto di salvataggio
rapido per farlo. Un pattern vive dentro il progetto e arriva sulla scheda solo quando il
progetto viene salvato. Nient'altro conta: la modalità PERFORM non è un salvataggio, la
memorizzazione temporanea è un punto di ripristino provvisorio che muore allo spegnimento
(§10.10.6), e una catena non viene mai salvata. [FUNC] + [SETTINGS] è l'unica abitudine;
prendila adesso.
:::

## What you now have

Un progetto chiamato SIXTEEN con un pattern, A01, un kit di batteria sulla traccia 1 — HELLO
KIT, con il kick trovato su [KEYBOARD C1] — e un tempo di 92. È salvato, quindi puoi spegnere qui: la prossima sessione parte da questo
stato. Se hai tenuto un nome tuo o un tempo tuo, la prossima sessione funziona lo stesso.

## Explore further

### Batti il tempo
Tieni premuto [FUNC] e batti [TEMPO] quattro volte a tempo. Dal quarto colpo in poi la media
diventa il BPM, e continua ad aggiornarsi finché continui a battere.

### Nudge
Con il sequencer in funzione, tieni premuto [LEFT] o [RIGHT] nella schermata principale: il
tempo cala o sale del dieci per cento finché non lasci. Serve per allinearsi a un disco o a
un'altra macchina, non per comporre, e non ti serve il menu del tempo aperto per farlo.

### Filtra la lista dei preset
Apri [PRESET] e premi [LEFT] ancora, oltre le categorie: si apre un menu SORTING con
CATEGORY, TAGS e una SEARCH testuale, e i tre si sommano invece di sostituirsi ([FUNC] + [NO]
cancella una ricerca). È stato
[aggiunto nell'OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes) ed è
la differenza tra un browser e uno scorrimento.

### L'altra categoria
Sfoglia KEYS, carica qualcosa e suona la tastiera: un preset KEYS è un suono solo su tutta la
tastiera, compresi la fila in alto e i tasti delle ottave. Poi ricarica HELLO KIT. Caricare
sostituisce la traccia entrambe le volte — cambia solo la copia del pattern, e la scheda ha
ancora entrambi i preset esattamente com'erano.

### Altri kit
Carica qualche altro kit da DRUMS e suona la fila in basso di ciascuno. I tasti restano gli
stessi; quello che ci sta sopra cambia da kit a kit, e l'orecchio è l'unica mappa. Ricarica
HELLO KIT quando hai finito, oppure tieni il kit che ti è piaciuto e ricordati dove stanno il
suo kick, lo snare, l'hi-hat chiuso e il clap.

### La manopola del livello
[LEVEL/DATA] imposta il livello della traccia attiva, e il display lo mostra in basso a
destra mentre la giri. Ora che sai cosa fa, smette di essere la manopola che misteriosamente
abbassa le cose.

## Next

La sessione 2 scrive il beat di una battuta su cui poggia tutto il pezzo, su questa sola
traccia, un suono del kit alla volta. Prima, dieci minuti su
[Prima di cominciare](/before-you-start/) spiegano i cinque contenitori che un salvataggio
tocca e i quattro tipi di traccia: è la pagina su cui ogni sessione successiva si appoggia.
