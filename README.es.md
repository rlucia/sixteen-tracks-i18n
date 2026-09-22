# Sixteen Tracks — traducciones

[Sixteen Tracks](https://www.iscanet.com/music/sixteen-tracks/) es un curso práctico para el Elektron Tonverk, OS 1.4.0: once sesiones que construyen una pieza, cada paso con un dibujo del panel que usa. Está escrito en inglés. Este repositorio es donde se convierte en otros idiomas, de pull request en pull request.

El sitio está publicado en cinco idiomas: English, Deutsch, Italiano, Español y Svenska. Las cuatro traducciones son **primeros borradores**, escritos con una IA y leídos una vez por un revisor, todavía no por un hablante nativo de ese idioma — así que lo más útil que puedes hacer hoy no es empezar un idioma desde cero, sino corregir uno. Mira "Si tu idioma ya tiene un borrador" más abajo.

## Qué hay aquí

- `en/` — el inglés, exportado desde el sitio. **No lo edites nunca.** Si el inglés está mal, abre una issue; el propietario del sitio lo corrige en el sitio y lo vuelve a exportar.
- `de/`, `it/`, `es/`, `sv/` — una carpeta por idioma, las traducciones. Cada una tiene la misma forma que `en/`; una carpeta que solo contiene `TRANSLATORS` es un idioma que espera su primer archivo. Un `TRANSLATORS` vacío significa lo contrario del abandono: el borrador está ahí, y todavía nadie ha puesto su nombre debajo.
- `lint.mjs` — el linter. Comprueba una traducción de la misma manera que lo hace el build del sitio, e imprime qué está mal con un nombre de archivo y un número de línea.
- `lib/` — el código que ejecuta el linter, exportado desde el sitio. No lo edites nunca.

## Qué traducir

En `<lang>/`:

- `sessions/NN-slug.md` — las sesiones. Traduce la prosa de cada paso, los títulos de los pasos después de `## Step:`, el `title:`, el `goal:` y el `needs:` del front matter, las líneas `hear:` y `recover:` de un punto de control, los bloques `:::note` y las tres secciones finales. Deja el nombre del archivo, `number:`, `slug:`, `chapter:`, `teaches:`, `ends:`, `keys:`, `leds:`, `source:`, `mode:`, `new:`, `simulator:`, `screen:` y `keys16:` — y el sitio donde está el marcador `:::simulator` — exactamente como en inglés: son de la máquina, y el linter rechaza cualquier diferencia. Los tres encabezados finales `## What you now have`, `## Explore further` y `## Next` también se quedan en inglés — son marcadores, y la página imprime los encabezados de tu idioma desde `strings.json`.
- `chapters.json` — los títulos de los capítulos, y los títulos y los logros de una línea de las sesiones planificadas. Los ids, los números, los slugs y el orden se quedan.
- `key-colours.json` — el `meaning` de cada fila. Todo lo demás se queda.
- `strings.json` — cada frase que imprime el código del sitio: botones, leyendas, etiquetas, las palabras de los simuladores. Cada clave de `en/strings.json`, traducida; conserva cada `{placeholder}` que tenga el valor inglés; nunca pongas `<`, `>` ni `"` en un valor, y nunca dejes uno vacío — el linter rechaza las cuatro cosas, porque una página las imprime tal cual dentro de su markup.
- `pages/*.html` — las cinco páginas escritas a mano. Traduce el texto; deja cada etiqueta, cada atributo y cada expresión `{{ expression }}` exactamente como en inglés (el linter los compara). Una expresión como `{{{ S.sim.caption }}}` es la página imprimiendo una frase de tu `strings.json`, así que se queda exactamente como está — la frase se traduce allí, una sola vez. Los enlaces se quedan como en inglés: el build los apunta a tu idioma.
- `TRANSLATORS` — tu nombre, uno por línea. Se imprime en el colofón de tu idioma.

## Qué no cambia nunca

Los nombres de las teclas entre corchetes — `[RECORD]`, `[FUNC] + [SETTINGS]`, `[TRIG 1]` — son lo que está impreso en la unidad, y el manual de Elektron, que cada paso cita (`manual §10.3`), existe en inglés. Un paso en alemán dice "Drücke [RECORD]". Un `[TOKEN]` que no sea una tecla que el panel tiene se rechaza. Los nombres de los modos y de los menús (`GRID RECORDING`, `FILL EDIT`) y lo que imprime una pantalla se quedan en inglés por la misma razón.

Las palabras del productor también se quedan en inglés, porque así las usan los lectores: kick, snare, hi-hat, clap, tom, pickup, fill, roll, loop, pattern, preset, sample, kit, trig, lock, velocity, mute, bus, send, sweep, ghost note. Es el vocabulario que un productor joven encuentra en los tutoriales, en los foros y en los nombres de los samples de la propia máquina, y traducirlo — "bombo" por kick, "anacrusa" por pickup — hace que la página suene a conservatorio, no a estudio. Traduce la gramática de la música (pista, paso, compás, a tiempo, a contratiempo) a las palabras de todos los días de tu idioma; deja las palabras de moda como están, con las costumbres de escritura de tu idioma (`el kick`, `los samples`). En caso de duda, pregúntate qué escribiría un productor en tu idioma en un post de un foro.

La única frase que nombra una serie de teclas, "from [TRIG 1] to [TRIG 15]", se escribe en el `strings.json` de tu idioma como `range.phrase` (`von [TRIG {a}] bis [TRIG {b}]`), para que puedas escribirla con naturalidad y el linter siga contando las teclas de en medio.

## Si tu idioma ya tiene un borrador

Todas las frases están y la estructura es correcta — de lo que un borrador no puede estar seguro es
del idioma vivo. Léelo como músico de tu idioma, no como corrector, y mira primero:

- **Las palabras que significan otra cosa.** El borrador sueco usaba `tappa` para "tap", que en sueco
  quiere decir *dejar caer*, en ocho sitios — y dos de ellos eran las frases que enseñan la diferencia
  entre mantener pulsado y tap. El italiano decía `cassa` y `anacrusi`, palabras de conservatorio
  donde el productor dice `kick` y `pickup`; en español la misma equivocación es decir `caja` por
  `snare` o `anacrusa` por `pickup`.
- **El glosario.** Cada idioma eligió una palabra, un género y una flexión por término y los mantuvo
  a lo largo de todas las sesiones. Si cambias uno, cámbialo en todas partes: el linter comprueba la
  estructura, nunca la coherencia del vocabulario.
- **Las líneas `recover:`.** Son las frases más difíciles del curso — qué hacer cuando la máquina ha
  hecho otra cosa — y el primer sitio donde una traducción se queda tiesa.
- **La página de privacidad.** Es un aviso legal; sus términos deberían ser los que usa la autoridad
  de tu país.

Una corrección es tan bienvenida como un idioma nuevo, y es más pequeña: `fix(es): …`, una frase en
el cuerpo que diga qué decía antes. Cuando hayas leído un idioma entero, pon tu nombre en su
`TRANSLATORS` — para eso está el archivo.

## Ejecutar el linter

Node 24 o más reciente, nada que instalar:

    node lint.mjs es

Cada problema es una línea, `es/sessions/03-a-kit-from-one-sample.md:41:1: step 7: keys differ — …`, a la que tu editor puede saltar. Los avisos (`still English?`, `stale since …`, `not stamped`) no detienen nada. Cuando pasa, imprime el título de cada sesión y los títulos de los pasos en tu idioma, para que puedas releer lo que escribiste. `node lint.mjs --all` comprueba todas las carpetas de idioma.

## Los sellos, y qué significa "stale"

    node lint.mjs es --stamp

registra, en `es/stamps.json`, desde qué inglés se tradujo cada uno de tus archivos. Nunca escribes un hash. Cuando el inglés cambia más tarde, el linter lo dice — `es/sessions/03-…md:1:1: warning: stale since 2026-09-28, English changed in step 4, step 10` — y el sitio sigue publicando tu traducción con una nota de que el inglés ha avanzado. Revisa esos pasos, y luego `node lint.mjs es --stamp es/sessions/03-a-kit-from-one-sample.md` para decir que vuelve a estar al día (una corrección de una errata inglesa que no necesita ningún cambio en tu idioma se vuelve a sellar de la misma manera, sin ediciones). Mientras el linter informe de un error, `--stamp` no escribe nada; nombrar un archivo que no pasa tampoco escribe nada.

## Enviarla

Haz un fork, traduce, ejecuta el linter hasta que esté limpio, abre una pull request. El mismo linter se ejecuta en cada pull request de aquí (`npm run lint`, cada idioma que ha empezado); una pull request que toque `en/`, `lib/`, `lint.mjs` o `package.json` falla a propósito — esos cuatro se exportan desde el sitio, y una corrección en ellos es una issue, no un commit. El propietario del sitio la fusiona y el sitio se reconstruye con tu idioma. Una sesión se publica cuando su archivo pasa; hasta entonces, su sitio en la página principal de tu idioma dice "(en inglés)" y enlaza a la página inglesa, así que un idioma puede salir en vivo de sesión en sesión.

Tu traducción se publica bajo la misma licencia que los textos del curso, CC BY 4.0, con tu nombre en el colofón.

## Commits

Este repositorio sigue [Conventional Commits](https://www.conventionalcommits.org/): cada asunto de commit es `type(scope): what the change does`, en imperativo, en minúsculas, sin punto final, de 72 caracteres como máximo. El scope es tu código de idioma. Los tipos que necesitarás:

- `feat(es): translate session 3` — llega o se completa una sesión, una página o un archivo de strings.
- `fix(es): step 7 of session 3 named the wrong key` — algo ya publicado estaba mal.
- `chore(es): re-stamp after the English change of 2026-09-28` — mantenimiento, como los sellos.

Di más en el cuerpo si el asunto no lo puede contener. Una pull request puede llevar varios commits; cada uno conserva esta forma, y el que toca `TRANSLATORS` es `docs(es): add <name> to TRANSLATORS`.
