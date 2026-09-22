# Sixteen Tracks — Übersetzungen

[Sixteen Tracks](https://www.iscanet.com/music/sixteen-tracks/) ist ein Praxiskurs für den Elektron Tonverk, OS 1.4.0: elf Sessions, die ein Stück bauen, jeder Schritt mit einer Zeichnung des Bedienfelds, das er benutzt. Er ist auf Englisch geschrieben. Dieses Repository ist der Ort, an dem er zu anderen Sprachen wird, ein Pull Request nach dem anderen.

Die Website ist in fünf Sprachen online: English, Deutsch, Italiano, Español und Svenska. Die vier Übersetzungen sind **erste Entwürfe**, mit einer KI geschrieben und einmal von einem Lektor gelesen, noch nicht von einem Muttersprachler der jeweiligen Sprache — das Nützlichste, was du heute tun kannst, ist deshalb nicht, eine Sprache bei null anzufangen, sondern eine zu korrigieren. Siehe „Wenn deine Sprache schon einen Entwurf hat“ weiter unten.

## Was hier liegt

- `en/` — das Englische, aus der Website exportiert. **Nie bearbeiten.** Ist das Englische falsch, eröffne ein Issue; der Besitzer der Website korrigiert es dort und exportiert neu.
- `de/`, `it/`, `es/`, `sv/` — ein Ordner pro Sprache, die Übersetzungen. Jeder hat dieselbe Form wie `en/`; ein Ordner, der nur `TRANSLATORS` enthält, ist eine Sprache, die auf ihre erste Datei wartet. Eine leere `TRANSLATORS` bedeutet das Gegenteil von Vernachlässigung: der Entwurf ist da, und noch hat niemand seinen Namen daruntergesetzt.
- `lint.mjs` — der Linter. Er prüft eine Übersetzung so, wie es der Build der Website selbst tut, und druckt, was nicht stimmt, mit Dateiname und Zeilennummer.
- `lib/` — der Code, den der Linter ausführt, aus der Website exportiert. Nie bearbeiten.

## Was zu übersetzen ist

In `<lang>/`:

- `sessions/NN-slug.md` — die Sessions. Übersetze die Prosa jedes Schritts, die Schritttitel nach `## Step:`, `title:`, `goal:` und `needs:` im Front Matter, die Zeilen `hear:` und `recover:` eines Kontrollpunkts, die `:::note`-Blöcke und die drei Schlussabschnitte. Lass den Dateinamen, `number:`, `slug:`, `chapter:`, `teaches:`, `ends:`, `keys:`, `leds:`, `source:`, `mode:`, `new:`, `simulator:`, `screen:` und `keys16:` — und die Stelle, an der der `:::simulator`-Marker steht — genau wie im Englischen: sie gehören dem Gerät, und der Linter lehnt eine Abweichung ab. Die drei Schlussüberschriften `## What you now have`, `## Explore further` und `## Next` bleiben ebenfalls englisch — sie sind Marker, und die Seite druckt die Überschriften deiner Sprache aus `strings.json`.
- `chapters.json` — die Kapiteltitel sowie die Titel und die einzeiligen Ergebnisse der geplanten Sessions. Ids, Nummern, Slugs und Reihenfolge bleiben.
- `key-colours.json` — die `meaning` jeder Zeile. Alles andere bleibt.
- `strings.json` — jeder Satz, den der Code der Website druckt: Buttons, Bildunterschriften, Beschriftungen, die Wörter der Simulatoren. Jeder Schlüssel aus `en/strings.json`, übersetzt; behalte jeden `{placeholder}`, den der englische Wert hat; schreib nie `<`, `>` oder `"` in einen Wert, und lass nie einen leer — der Linter lehnt alle vier ab, weil eine Seite sie direkt in ihr Markup druckt.
- `pages/*.html` — die fünf von Hand geschriebenen Seiten. Übersetze den Text; lass jedes Tag, jedes Attribut und jeden `{{ expression }}`-Ausdruck genau wie im Englischen (der Linter vergleicht sie). Ein Ausdruck wie `{{{ S.sim.caption }}}` ist die Seite, die einen Satz aus deiner `strings.json` druckt, er bleibt also genau, wie er ist — der Satz wird dort übersetzt, einmal. Links bleiben wie im Englischen: der Build richtet sie auf deine Sprache.
- `TRANSLATORS` — dein Name, einer pro Zeile. Er wird auf dem Kolophon deiner Sprache gedruckt.

## Was sich nie ändert

Tastennamen in eckigen Klammern — `[RECORD]`, `[FUNC] + [SETTINGS]`, `[TRIG 1]` — sind das, was auf dem Gerät aufgedruckt ist, und Elektrons Handbuch, das jeder Schritt zitiert (`manual §10.3`), existiert auf Englisch. Ein deutscher Schritt liest sich „Drücke [RECORD]“. Ein `[TOKEN]`, das keine Taste des Bedienfelds ist, wird abgelehnt. Modus- und Menünamen (`GRID RECORDING`, `FILL EDIT`) und das, was ein Display anzeigt, bleiben aus demselben Grund englisch.

Auch die Wörter der Producer bleiben Englisch, weil die Leser sie so benutzen: Kick, Snare, Hi-Hat, Clap, Tom, Pickup, Fill, Roll, Loop, Pattern, Preset, Sample, Kit, Trig, Lock, Velocity, Mute, Bus, Send, Sweep, Ghost Note. Das ist das Vokabular, dem ein junger Producer in Tutorials, Foren und den Sample-Namen der Maschine begegnet; übersetzt man es, klingt die Seite nach Konservatorium statt nach Studio. Übersetze die Grammatik der Musik (Spur, Schritt, Takt, Schlag, Auftakt) in die Alltagswörter deiner Sprache; die Trendwörter bleiben, in der Schreibweise deiner Sprache (`der Kick`, `die Samples`). Im Zweifel: Was würde ein Producer in deiner Sprache in einem Forum tippen?

Die eine Wendung, die eine Reihe von Tasten benennt, „from [TRIG 1] to [TRIG 15]“, steht in der `strings.json` deiner Sprache als `range.phrase` (`von [TRIG {a}] bis [TRIG {b}]`), damit du sie natürlich schreiben kannst und der Linter die Tasten dazwischen trotzdem zählt.

## Wenn deine Sprache schon einen Entwurf hat

Jeder Satz ist da, und die Struktur stimmt — worüber ein Entwurf keine Sicherheit geben kann, ist die
Idiomatik. Lies ihn als Musiker deiner Sprache, nicht als Korrektor, und schau zuerst auf:

- **Wörter, die etwas anderes heißen.** Der schwedische Entwurf benutzte `tappa` für „tap“, was auf
  Schwedisch *fallen lassen* heißt, an acht Stellen — und zwei davon waren die Sätze, die Halten gegen
  Tap erklären. Das Italienische sagte `cassa` und `anacrusi`, Konservatoriumswörter für `kick` und
  `pickup`.
- **Das Glossar.** Jede Sprache hat pro Begriff ein Wort, ein Geschlecht und eine Beugung gewählt und
  über alle Sessions hinweg durchgehalten. Änderst du eines, ändere es überall: der Linter prüft die
  Struktur, nie die Einheitlichkeit des Vokabulars.
- **Die `recover:`-Zeilen.** Sie sind die schwersten Sätze des Kurses — was zu tun ist, wenn das Gerät
  etwas anderes getan hat — und die erste Stelle, an der eine Übersetzung steif wird.
- **Die Datenschutzseite.** Sie ist ein rechtlicher Hinweis; ihre Begriffe sollten die sein, die die
  Behörde deines Landes benutzt.

Eine Korrektur ist so willkommen wie eine neue Sprache, und kleiner: `fix(de): …`, ein Satz im Body,
der sagt, was vorher dastand. Wenn du eine ganze Sprache durchgelesen hast, trag deinen Namen in ihre
`TRANSLATORS` ein — dafür ist die Datei da.

## Den Linter ausführen

Node 24 oder neuer, nichts zu installieren:

    node lint.mjs de

Jedes Problem ist eine Zeile, `de/sessions/03-a-kit-from-one-sample.md:41:1: step 7: keys differ — …`, zu der dein Editor springen kann. Warnungen (`still English?`, `stale since …`, `not stamped`) halten nichts auf. Wenn er durchläuft, druckt er den Titel jeder Session und ihre Schritttitel in deiner Sprache, damit du zurücklesen kannst, was du geschrieben hast. `node lint.mjs --all` prüft jeden Sprachordner.

## Stempel, und was „stale“ bedeutet

    node lint.mjs de --stamp

hält in `de/stamps.json` fest, aus welchem Englisch jede deiner Dateien übersetzt wurde. Du tippst nie einen Hash. Ändert sich das Englische später, sagt der Linter es — `de/sessions/03-…md:1:1: warning: stale since 2026-09-28, English changed in step 4, step 10` — und die Website veröffentlicht deine Übersetzung trotzdem, mit einem Hinweis, dass das Englische weitergegangen ist. Überarbeite diese Schritte, dann `node lint.mjs de --stamp de/sessions/03-a-kit-from-one-sample.md`, um zu sagen, dass sie wieder aktuell ist (eine englische Tippfehlerkorrektur, die in deiner Sprache keine Änderung braucht, wird auf dieselbe Weise neu gestempelt, ohne Bearbeitung). Solange der Linter einen Fehler meldet, schreibt `--stamp` nichts; eine Datei zu nennen, die nicht durchläuft, schreibt ebenfalls nichts.

## Einsenden

Forken, übersetzen, den Linter laufen lassen, bis er sauber ist, einen Pull Request eröffnen. Derselbe Linter läuft hier bei jedem Pull Request (`npm run lint`, jede Sprache, die angefangen hat); ein Pull Request, der `en/`, `lib/`, `lint.mjs` oder `package.json` anfasst, schlägt mit Absicht fehl — diese vier werden aus der Website exportiert, und eine Korrektur daran ist ein Issue, kein Commit. Der Besitzer der Website merged, und die Website wird mit deiner Sprache neu gebaut. Eine Session wird veröffentlicht, sobald ihre Datei durchläuft; bis dahin steht an ihrer Stelle auf der Startseite deiner Sprache „(Englisch)“ und ein Link auf die englische Seite, sodass eine Sprache eine Session nach der anderen live gehen kann.

Deine Übersetzung wird unter derselben Lizenz veröffentlicht wie der Text des Kurses, CC BY 4.0, mit deinem Namen auf dem Kolophon.

## Commits

Dieses Repository folgt [Conventional Commits](https://www.conventionalcommits.org/): jeder Commit-Betreff ist `type(scope): what the change does`, im Imperativ, kleingeschrieben, ohne Punkt am Ende, höchstens 72 Zeichen. Der Scope ist dein Sprachcode. Die Typen, die du brauchen wirst:

- `feat(de): translate session 3` — eine Session, eine Seite oder eine Strings-Datei kommt an oder wird vervollständigt.
- `fix(de): step 7 of session 3 named the wrong key` — etwas schon Veröffentlichtes war falsch.
- `chore(de): re-stamp after the English change of 2026-09-28` — Aufräumarbeiten wie Stempel.

Sag mehr im Body, wenn der Betreff es nicht fassen kann. Ein Pull Request darf mehrere Commits tragen; jeder behält diese Form, und der, der `TRANSLATORS` anfasst, heißt `docs(de): add <name> to TRANSLATORS`.
