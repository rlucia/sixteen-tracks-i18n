# Sixteen Tracks — översättningar

[Sixteen Tracks](https://www.iscanet.com/music/sixteen-tracks/) är en praktisk kurs för Elektron Tonverk, OS 1.4.0: elva sessioner som bygger ett stycke, varje steg med en teckning av panelen det använder. Den är skriven på engelska. Det här arkivet är där den blir andra språk, en pull request i taget.

Sajten är live på fem språk: English, Deutsch, Italiano, Español och Svenska. De fyra översättningarna är **första utkast**, skrivna med en AI och lästa en gång av en granskare, ännu inte av någon som har språket som modersmål — så det nyttigaste du kan göra i dag är inte att börja ett språk från noll utan att rätta ett. Se "Om ditt språk redan har ett utkast" längre ner.

## Vad som finns här

- `en/` — engelskan, exporterad från sajten. **Redigera den aldrig.** Är engelskan fel: öppna ett ärende; sajtens ägare rättar det i sajten och exporterar på nytt.
- `de/`, `it/`, `es/`, `sv/` — en mapp per språk, översättningarna. Var och en har samma form som `en/`; en mapp som bara innehåller `TRANSLATORS` är ett språk som väntar på sin första fil. En tom `TRANSLATORS` betyder motsatsen till försummelse: utkastet finns, och ingen har ännu satt sitt namn under det.
- `lint.mjs` — lintern. Den kontrollerar en översättning på samma sätt som sajtens eget bygge, och skriver ut vad som är fel med filnamn och radnummer.
- `lib/` — koden lintern kör, exporterad från sajten. Redigera den aldrig.

## Vad du översätter

I `<språk>/`:

- `sessions/NN-slug.md` — sessionerna. Översätt prosan i varje steg, stegrubrikerna efter `## Step:`, `title:`, `goal:` och `needs:` i front matter, raderna `hear:` och `recover:` i en kontrollpunkt, `:::note`-blocken och de tre avslutande avsnitten. Behåll filnamnet, `number:`, `slug:`, `chapter:`, `teaches:`, `ends:`, `keys:`, `leds:`, `source:`, `mode:`, `new:`, `simulator:`, `screen:` och `keys16:` — och platsen för markören `:::simulator` — exakt som i engelskan: de är maskinens, och lintern vägrar en avvikelse. De tre avslutande rubrikerna `## What you now have`, `## Explore further` och `## Next` står kvar på engelska också — de är markörer, och sidan skriver ut ditt språks egna rubriker från `strings.json`.
- `chapters.json` — kapitelrubrikerna, och rubrikerna och enradsvinsterna för de planerade sessionerna. Id:n, nummer, sluggar och ordning står kvar.
- `key-colours.json` — `meaning` för varje rad. Allt annat står kvar.
- `strings.json` — varje mening sajtens kod skriver ut: knappar, bildtexter, etiketter, simulatorernas ord. Varje nyckel i `en/strings.json`, översatt; behåll varje `{platshållare}` som det engelska värdet har; sätt aldrig `<`, `>` eller `"` i ett värde, och lämna aldrig ett tomt — lintern vägrar alla fyra, eftersom en sida skriver ut dem rakt in i sin markup.
- `pages/*.html` — de fem handskrivna sidorna. Översätt texten; behåll varje tagg, attribut och `{{ uttryck }}` exakt som i engelskan (lintern jämför dem). Ett uttryck som `{{{ S.sim.caption }}}` är sidan som skriver ut en mening från din `strings.json`, så det står kvar precis som det är — meningen översätts där, en gång. Länkar står kvar som i engelskan: bygget pekar dem mot ditt språk.
- `TRANSLATORS` — ditt namn, ett per rad. Det skrivs ut på ditt språks kolofon.

## Vad som aldrig ändras

Tangentnamn inom hakparentes — `[RECORD]`, `[FUNC] + [SETTINGS]`, `[TRIG 1]` — är det som står tryckt på enheten, och Elektrons manual, som varje steg hänvisar till (`manual §10.3`), finns på engelska. Ett svenskt steg lyder "Tryck på [RECORD]". En `[TOKEN]` som inte är en tangent panelen har vägras. Läges- och menynamn (`GRID RECORDING`, `FILL EDIT`) och det displayen skriver ut står kvar på engelska av samma skäl.

Producentens egna ord står kvar på engelska också, för det gör läsarna: kick, snare, hi-hat, clap, tom, pickup, fill, roll, loop, pattern, preset, sample, kit, trig, lock, velocity, mute, bus, send, sweep, ghost note. Det är ordförrådet en ung producent möter i tutorials, forum och maskinens egna sample-namn, och att översätta det — "cassa" för kick, "anacrusi" för pickup — får sidan att låta som ett konservatorium, inte en studio. Översätt musikens grammatik (track, step, bar, downbeat, upbeat) till ditt språks vardagsord; låt trendorden stå som de står, i ditt språks stavningsvanor (`il kick`, `los samples`). Är du tveksam: fråga vad en producent på ditt språk skulle skriva i ett foruminlägg.

Den enda frasen som namnger en rad tangenter, "from [TRIG 1] to [TRIG 15]", skrivs i ditt språks `strings.json` som `range.phrase` (`från [TRIG {a}] till [TRIG {b}]`) så att du kan skriva den naturligt och lintern ändå kan räkna tangenterna emellan.

## Om ditt språk redan har ett utkast

Varje mening finns där och strukturen stämmer — det ett utkast inte kan vara säkert på är idiomet.
Läs det som musiker på ditt språk, inte som korrekturläsare, och titta först på:

- **Ord som betyder något annat.** Det här utkastet använde `tappa` för "tap" på åtta ställen — och
  att tappa är att släppa något i golvet, inte att slå an en tangent. Två av de åtta var meningarna
  som lär ut skillnaden mellan att hålla och att trycka till. Italienskan sa `cassa` och `anacrusi`,
  konservatorieord för `kick` och `pickup`.
- **Ordlistan.** Varje språk valde ett ord, ett genus och en böjning per term och höll fast vid dem
  genom alla sessioner. Ändrar du ett, ändra det överallt: lintern kontrollerar strukturen, aldrig
  att ordvalen är konsekventa.
- **`recover:`-raderna.** De är kursens svåraste meningar — vad du gör när maskinen gjorde något
  annat — och det första stället där en översättning blir stel.
- **Integritetssidan.** Den är en juridisk text; dess termer bör vara de som ditt lands myndighet
  använder.

En rättelse är lika välkommen som ett nytt språk, och mindre: `fix(sv): …`, en mening i brödtexten
som säger vad det stod förut. När du har läst igenom ett helt språk, skriv in ditt namn i dess
`TRANSLATORS` — det är vad filen är till för.

## Att köra lintern

Node 24 eller nyare, inget att installera:

    node lint.mjs sv

Varje problem är en rad, `sv/sessions/03-a-kit-from-one-sample.md:41:1: step 7: keys differ — …`, som din editor kan hoppa till. Varningar (`still English?`, `stale since …`, `not stamped`) stoppar ingenting. När den går igenom skriver den ut varje sessions rubrik och stegrubriker på ditt språk, så att du kan läsa tillbaka det du skrev. `node lint.mjs --all` lintar varje språkmapp.

## Stämplar, och vad "stale" betyder

    node lint.mjs sv --stamp

antecknar, i `sv/stamps.json`, vilken engelska var och en av dina filer översattes från. Du skriver aldrig en hash. När engelskan ändras senare säger lintern det — `sv/sessions/03-…md:1:1: warning: stale since 2026-09-28, English changed in step 4, step 10` — och sajten publicerar ändå din översättning med en notis om att engelskan har gått vidare. Revidera de stegen och säg sedan att den är aktuell igen med `node lint.mjs sv --stamp sv/sessions/03-a-kit-from-one-sample.md` (en engelsk stavfelsrättning som inte kräver någon ändring på ditt språk stämplas om på samma sätt, utan redigeringar). Så länge lintern rapporterar ett fel skriver `--stamp` ingenting; att namnge en fil som inte går igenom skriver heller ingenting.

## Att skicka in den

Forka, översätt, kör lintern tills den är ren, öppna en pull request. Samma linter körs på varje pull request här (`npm run lint`, varje språk som har börjat); en pull request som rör `en/`, `lib/`, `lint.mjs` eller `package.json` går rött med flit — de fyra exporteras från sajten, och en rättelse i dem är ett ärende, inte en commit. Sajtens ägare mergear och sajten byggs om med ditt språk. En session publiceras när dess fil går igenom; till dess säger dess plats på ditt språks startsida "(engelska)" och länkar till den engelska sidan, så att ett språk kan gå live en session i taget.

Din översättning publiceras under samma licens som kursens text, CC BY 4.0, med ditt namn på kolofonen.

## Commits

Det här arkivet följer [Conventional Commits](https://www.conventionalcommits.org/): varje commit-rubrik är `type(scope): vad ändringen gör`, i imperativ, gemener, utan avslutande punkt, högst 72 tecken. Scope är din språkkod. De typer du kommer att behöva:

- `feat(sv): translate session 3` — en session, en sida eller en strings-fil kommer till eller blir färdig.
- `fix(sv): step 7 of session 3 named the wrong key` — något redan publicerat var fel.
- `chore(sv): re-stamp after the English change of 2026-09-28` — hushållsarbete, till exempel stämplar.

Säg mer i brödtexten om rubriken inte rymmer det. En pull request får innehålla flera commits; var och en behåller den här formen, och den som rör `TRANSLATORS` är `docs(sv): add <namn> to TRANSLATORS`.
