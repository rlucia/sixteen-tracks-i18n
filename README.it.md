# Sixteen Tracks — traduzioni

[Sixteen Tracks](https://www.iscanet.com/music/sixteen-tracks/) è un corso pratico per l'Elektron Tonverk, OS 1.4.0: undici sessioni che costruiscono un pezzo, ogni passo con un disegno del pannello che usa. È scritto in inglese. Questo repository è il posto dove diventa altre lingue, una pull request alla volta.

Il sito è online in cinque lingue: English, Deutsch, Italiano, Español e Svenska. Le quattro traduzioni sono **prime bozze**, scritte con un'IA e lette una volta da un revisore, non ancora da un madrelingua di quella lingua — quindi la cosa più utile che puoi fare oggi non è cominciare una lingua da zero ma correggerne una. Vedi "Se la tua lingua ha già una bozza" più sotto.

## Cosa c'è qui

- `en/` — l'inglese, esportato dal sito. **Non modificarlo mai.** Se l'inglese è sbagliato, apri una issue; il proprietario del sito lo corregge nel sito e lo esporta di nuovo.
- `de/`, `it/`, `es/`, `sv/` — una cartella per lingua, le traduzioni. Ognuna ha la stessa forma di `en/`; una cartella che contiene solo `TRANSLATORS` è una lingua che aspetta il suo primo file. Un `TRANSLATORS` vuoto vuol dire il contrario dell'abbandono: la bozza c'è, e nessuno ci ha ancora messo il proprio nome.
- `lint.mjs` — il linter. Controlla una traduzione nello stesso modo in cui lo fa il build del sito, e stampa cosa non va con il nome del file e il numero di riga.
- `lib/` — il codice che il linter esegue, esportato dal sito. Non modificarlo mai.

## Cosa tradurre

In `<lang>/`:

- `sessions/NN-slug.md` — le sessioni. Traduci la prosa di ogni passo, i titoli dei passi dopo `## Step:`, `title:`, `goal:` e `needs:` nel front matter, le righe `hear:` e `recover:` di un punto di controllo, i blocchi `:::note` e le tre sezioni finali. Lascia il nome del file, `number:`, `slug:`, `chapter:`, `teaches:`, `ends:`, `keys:`, `leds:`, `source:`, `mode:`, `new:`, `simulator:`, `screen:` e `keys16:` — e il posto del marcatore `:::simulator` — esattamente come in inglese: appartengono alla macchina, e il linter rifiuta una differenza. Anche le tre intestazioni finali `## What you now have`, `## Explore further` e `## Next` restano in inglese — sono marcatori, e la pagina stampa le intestazioni della tua lingua da `strings.json`.
- `chapters.json` — i titoli dei capitoli, e i titoli e i risultati in una riga delle sessioni pianificate. Id, numeri, slug e ordine restano.
- `key-colours.json` — il `meaning` di ogni riga. Tutto il resto resta.
- `strings.json` — ogni frase che il codice del sito stampa: pulsanti, didascalie, etichette, le parole dei simulatori. Ogni chiave di `en/strings.json`, tradotta; conserva ogni `{placeholder}` che il valore inglese ha; non mettere mai `<`, `>` o `"` in un valore, e non lasciarne mai uno vuoto — il linter rifiuta tutti e quattro, perché una pagina li stampa dritti dentro il suo markup.
- `pages/*.html` — le cinque pagine scritte a mano. Traduci il testo; lascia ogni tag, attributo ed espressione `{{ expression }}` esattamente come in inglese (il linter li confronta). Un'espressione come `{{{ S.sim.caption }}}` è la pagina che stampa una frase dal tuo `strings.json`, quindi resta esattamente com'è — la frase è tradotta lì, una volta sola. I link restano come in inglese: il build li punta alla tua lingua.
- `TRANSLATORS` — il tuo nome, uno per riga. Viene stampato nel colophon della tua lingua.

## Cosa non cambia mai

I nomi dei tasti tra parentesi quadre — `[RECORD]`, `[FUNC] + [SETTINGS]`, `[TRIG 1]` — sono quello che è stampato sull'unità, e il manuale di Elektron, che ogni passo cita (`manual §10.3`), esiste in inglese. Un passo in tedesco dice "Drücke [RECORD]". Un `[TOKEN]` che non è un tasto che il pannello ha viene rifiutato. I nomi delle modalità e dei menu (`GRID RECORDING`, `FILL EDIT`) e quello che un display stampa restano in inglese per la stessa ragione.

Anche le parole del producer restano in inglese, perché in inglese le dicono i lettori: kick, snare, hi-hat, clap, tom, pickup, fill, roll, loop, pattern, preset, sample, kit, trig, lock, velocity, mute, bus, send, sweep, ghost note. È il vocabolario che un giovane producer incontra nei tutorial, nei forum e nei nomi dei sample della macchina stessa, e tradurlo — "cassa" per kick, "anacrusi" per pickup — fa suonare la pagina come un conservatorio, non come uno studio. Traduci la grammatica della musica (traccia, passo, battuta, battere, levare) nelle parole di tutti i giorni della tua lingua; lascia le parole di tendenza come sono, con le abitudini di scrittura della tua lingua (`il kick`, `los samples`). Nel dubbio, chiediti cosa scriverebbe un producer nella tua lingua in un post su un forum.

L'unica frase che nomina una serie di tasti, "from [TRIG 1] to [TRIG 15]", è scritta nel `strings.json` della tua lingua come `range.phrase` (`von [TRIG {a}] bis [TRIG {b}]`), così puoi scriverla in modo naturale e il linter conta comunque i tasti in mezzo.

## Se la tua lingua ha già una bozza

Ogni frase c'è e la struttura è giusta — quello di cui una bozza non può essere sicura è l'idioma.
Leggila da musicista della tua lingua, non da correttore di bozze, e guarda prima di tutto:

- **Le parole che vogliono dire un'altra cosa.** La bozza svedese usava `tappa` per "tap", che in
  svedese vuol dire *far cadere*, in otto punti — e due erano le frasi che insegnano la differenza
  fra tenere premuto e tap. L'italiano, qui, diceva `cassa` e `anacrusi`, parole da conservatorio
  per `kick` e `pickup`.
- **Il glossario.** Ogni lingua ha scelto una parola, un genere e una flessione per ogni termine e
  li ha tenuti per tutte le sessioni. Se ne cambi uno, cambialo dappertutto: il linter controlla la
  struttura, mai la coerenza del vocabolario.
- **Le righe `recover:`.** Sono le frasi più difficili del corso — cosa fare quando la macchina ha
  fatto qualcos'altro — e il primo posto dove una traduzione si irrigidisce.
- **La pagina sulla privacy.** È un'informativa legale; i suoi termini dovrebbero essere quelli che
  usa l'autorità del tuo paese.

Una correzione è benvenuta quanto una lingua nuova, ed è più piccola: `fix(it): …`, una frase nel
corpo che dice cosa c'era scritto prima. Quando hai letto una lingua intera, metti il tuo nome nel
suo `TRANSLATORS` — il file serve a questo.

## Eseguire il linter

Node 24 o più recente, niente da installare:

    node lint.mjs it

Ogni problema è una riga, `it/sessions/03-a-kit-from-one-sample.md:41:1: step 7: keys differ — …`, a cui il tuo editor può saltare. Gli avvisi (`still English?`, `stale since …`, `not stamped`) non fermano niente. Quando passa, stampa il titolo di ogni sessione e i titoli dei passi nella tua lingua, così puoi rileggere quello che hai scritto. `node lint.mjs --all` controlla ogni cartella di lingua.

## I timbri, e cosa vuol dire "stale"

    node lint.mjs it --stamp

registra, in `it/stamps.json`, da quale inglese è stato tradotto ciascuno dei tuoi file. Non digiti mai un hash. Quando l'inglese cambia più tardi, il linter lo dice — `it/sessions/03-…md:1:1: warning: stale since 2026-09-28, English changed in step 4, step 10` — e il sito pubblica comunque la tua traduzione con una nota che dice che l'inglese è andato avanti. Rivedi quei passi, poi `node lint.mjs it --stamp it/sessions/03-a-kit-from-one-sample.md` per dire che è di nuovo aggiornata (una correzione di un refuso in inglese che non richiede cambiamenti nella tua lingua si ritimbra nello stesso modo, senza modifiche). Finché il linter segnala un errore, `--stamp` non scrive niente; nominare un file che non passa non scrive niente nemmeno.

## Inviarla

Fai un fork, traduci, esegui il linter finché è pulito, apri una pull request. Lo stesso linter gira su ogni pull request qui (`npm run lint`, ogni lingua che è cominciata); una pull request che tocca `en/`, `lib/`, `lint.mjs` o `package.json` fallisce apposta — questi quattro sono esportati dal sito, e una correzione su di loro è una issue, non un commit. Il proprietario del sito fa il merge e il sito viene ricostruito con la tua lingua. Una sessione viene pubblicata quando il suo file passa; fino ad allora il suo posto nella pagina iniziale della tua lingua dice "(in inglese)" e rimanda alla pagina inglese, così una lingua può andare online una sessione alla volta.

La tua traduzione è pubblicata con la stessa licenza dei testi del corso, CC BY 4.0, con il tuo nome nel colophon.

## Commit

Questo repository segue i [Conventional Commits](https://www.conventionalcommits.org/): ogni oggetto di commit è `type(scope): cosa fa la modifica`, all'imperativo, in minuscolo, senza punto finale, al massimo 72 caratteri. Lo scope è il codice della tua lingua. I tipi che ti serviranno:

- `feat(it): translate session 3` — arriva o viene completata una sessione, una pagina o un file di stringhe.
- `fix(it): step 7 of session 3 named the wrong key` — qualcosa di già pubblicato era sbagliato.
- `chore(it): re-stamp after the English change of 2026-09-28` — manutenzione, come i timbri.

Di' di più nel corpo se l'oggetto non basta. Una pull request può portare più commit; ognuno mantiene questa forma, e quello che tocca `TRANSLATORS` è `docs(it): add <name> to TRANSLATORS`.
