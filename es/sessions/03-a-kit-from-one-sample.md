---
number: 3
chapter: rhythm
slug: a-kit-from-one-sample
title: Un kit a partir de un solo sample
goal: Pon todo el beat en una sola pista con un kit de Subtracks, libera las otras tres y cambia uno de sus sonidos por uno que elijas tú de la tarjeta.
needs: ["El proyecto de la sesión 2 (SIXTEEN, o tu propio nombre)", "Auriculares conectados", "La tarjeta SD de fábrica en su ranura", "Unos dieciséis minutos"]
teaches: [subtracks, supertrack, machine-select, sample-browser, pool, track-clear, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Dónde estás
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

Si SIXTEEN no es el proyecto que hay en la pantalla, cárgalo: [FUNC] + [PRESET] abre el menú
FILE, luego [UP]/[DOWN] por PROJECT, LOAD y tu proyecto, [YES]. Pulsa [PLAY] y deja el beat
en marcha — esta sesión lo reconstruye por debajo mientras suena.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: El beat de la sesión 2 en loop desde A01: kick, snare, hi-hats y una cuarta voz, en cuatro pistas.
recover: Si has estado tocando desde entonces y quieres recuperar el estado guardado, resalta tu proyecto en la lista LOAD, pulsa [RIGHT] para PROJECT ACTIONS y elige RELOAD. ¿Empiezas aquí sin la sesión 2? Esa sesión escribe el beat que esta desmonta, y lleva unos dieciséis minutos.
:::

## Step: Tres vidas de una tecla trig
keys: [TRK, PTN, RECORD]
leds: { TRIG 1: white, RECORD: red }
source: manual §5.3.7, §10.1.1, §10.2.1
mode: playback

Con el beat en marcha, mantén pulsado [TRK]: las dieciséis teclas son las dieciséis pistas, y
la blanca es la pista en la que estás (§5.3.7). Mantén pulsado [PTN] en su lugar y las mismas
teclas son slots de pattern — blanco donde vive un pattern, rojo para el que suena, que es
A01 con tu copia A02 al lado (§10.1.1). Si [RECORD] ya está encendido desde la sesión 2,
púlsalo una vez para apagarlo primero. Pulsa [RECORD] y son los dieciséis pasos de un compás
en la pista activa, rojo donde hay un trig de nota (§10.2.1); púlsalo otra vez para volver a
salir. Tres trabajos, una fila de teclas, y el color es lo único que dice cuál: la
[página de colores de las teclas](/key-colours/) guarda la lista completa.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: El beat corre a través de las tres. Nada de lo que pulsaste cambió un sonido.
recover: Si tu primera pulsación de [RECORD] apagó su luz en vez de encenderla, la sesión 2 dejó GRID RECORDING activado; púlsalo una vez más. La tira de arriba es la tercera vida — el kick de la pista 1, en los cuatro tiempos que escribiste en la sesión 2.
:::

## Step: Guarda primero
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Mantén pulsado [FUNC] y pulsa [SETTINGS]. Nada te pregunta nada y nada en la pantalla dice
que haya pasado; la tarjeta tiene ahora el beat de cuatro pistas de A01 y la copia de A02.
Todo lo que viene a partir del paso siguiente reescribe la pista 1, y este es el estado al
que puedes volver.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Nada — el beat sigue en marcha. Un guardado en esta máquina es silencioso, y no interrumpe el secuenciador.
recover: Si se abrió un menú de ajustes, [FUNC] no estaba pulsado primero. Pulsa [NO], mantén pulsado [FUNC] y luego pulsa [SETTINGS].
:::

## Step: Una máquina Subtracks en la pista 1
keys: [TRK, TRIG 1, FUNC, SRC, UP, DOWN, KEYBOARD, YES]
source: community https://www.youtube.com/watch?v=QHRGueJ8FsI
mode: menu:MACHINE

Mantén pulsado [TRK] y pulsa [TRIG 1]. Mantén pulsado [FUNC] y pulsa [SRC]: el menú MACHINE
se abre con las máquinas que la pista 1 puede tomar. [UP]/[DOWN] hasta SUBTRACKS y [YES] — y
una segunda lista pregunta qué instrumento cargar, un kit vacío en un extremo y los kits de
fábrica al lado. Toca el [KEYBOARD] para oír el resaltado antes de decidirte, y luego pulsa
[YES] sobre un kit de batería de fábrica cuyos ocho sonidos te gusten.

:::checkpoint
screen: { menu: "MACHINE", items: [SINGLE PLAYER, MULTI PLAYER, SUBTRACKS, GRAINER, WAVEFINDER, MIDI], sel: 2 }
hear: La pista 1 sigue disparando en los cuatro tiempos, pero lo que dispara es el kit nuevo: el kick de la sesión 1 se fue con la máquina.
recover: Una lista de máquinas en vez de instrumentos significa que [YES] todavía no ha caído sobre SUBTRACKS. ¿Cargaste un kit que no te gusta? [FUNC] + [SRC], SUBTRACKS otra vez, y elige otro — ese es el camino de vuelta del propio manual (§5.3.1).
:::

:::note
"Vacío" es una elección, no silencio: el instrumento vacío te da ocho subtracks esperando
samples, de una en una a través del navegador de samples, y nada llena ocho slots desde una
carpeta de una sola pasada —
[los propietarios lo han pedido](https://www.elektronauts.com/t/subtracks-use-cases/239235).
Un kit de fábrica llega lleno, y por eso esta sesión empieza con uno y cambia un solo sonido
en el paso 10. El kick se va de cualquier manera: un preset son los ajustes de las páginas
SRC, FLTR, AMP, FX y MOD (§5.3.2), y una máquina SRC nueva los reescribe.
:::

## Step: Toca el kit
keys: [SUBTRACKS]
source: manual §3.1, §A.2.3
mode: any

Pulsa las ocho teclas [SUBTRACKS] de una en una: ocho sonidos, uno por tecla, y ese es el
kit. No son una fila nueva de controles — son la fila inferior del teclado, impresa con los
dos nombres, haciendo un cuarto trabajo ahora que hay una máquina Subtracks en la pista.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Ocho samples distintos, uno por tecla, sobre el beat que sigue en marcha.
recover: Una tecla que no hace ningún sonido es una subtrack vacía en el kit que elegiste, lo que no es ningún obstáculo: esta sesión usa cuatro de las ocho. La indicación de la máquina está dibujada aquí como SUBTRACKS; si tu unidad la imprime de otra manera, la unidad tiene razón. Tu unidad lo dirá.
:::

## Step: Borra los trigs viejos de la pista 1
keys: [STEP EDIT, FUNC, PLAY]
source: manual §10.10.4, §10.3.1
mode: step-edit

Pulsa [STEP EDIT]. STEP EDIT forma parte de GRID RECORDING (§10.3.1), así que cuenta con que
[RECORD] esté encendido. Mantén pulsado [FUNC] y pulsa [PLAY]: eso borra todos los trigs de
las ocho subtracks y de la supertrack de una sola pulsación, que es el único borrado que
alcanza al kit entero (§10.10.4). Pulsa [STEP EDIT] otra vez para salir.

:::checkpoint
keys16: { }
hear: El kit se calla y el loop vuelve vacío; las pistas 2, 3 y 4 siguen sonando.
recover: Un trig que sigue encendido pertenece a una subtrack a la que el borrado no llegó: selecciónala con [TRK] + [SUBTRACKS], pulsa [RECORD] para GRID RECORDING, y bórrala con [FUNC] + [PLAY]. En GRID RECORDING a secas esa combinación se lleva solo la subtrack seleccionada, que es [lo que los propietarios encuentran cuando esperan un borrado de toda la pista](https://www.elektronauts.com/t/tonverk-user-thread/238631/2436).
:::

:::note
Este borrado se puede deshacer: [FUNC] + [NO] devuelve los trigs (§10.10.5), y deshacer
alcanza pegados y borrados en cada nivel en el que el secuenciador guarda uno. El borrado sin
deshacer es el del preset de una pista, y ese es [TRK] + [PLAY] — Explora más, abajo.
:::

## Step: El kick en la subtrack 1
keys: [RECORD, TRK, KEYBOARD C1, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Pulsa [RECORD] para GRID RECORDING. Mantén pulsado [TRK] y pulsa [KEYBOARD C1], la primera
tecla SUBTRACKS: eso selecciona la subtrack 1 sin hacerla sonar. Ahora pulsa [TRIG 1],
[TRIG 5], [TRIG 9] y [TRIG 13] — el kick, en los mismos cuatro tiempos que en la sesión 2,
en una subtrack en vez de en una pista.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Un kick en cada tiempo otra vez, y esta vez todo sale de la pista 1.
recover: Si la subtrack sonó al seleccionarla, [TRK] no estaba pulsado. Si la subtrack 1 de tu kit no es un kick, pulsa las teclas [SUBTRACKS] hasta encontrar la que lo es y usa esa subtrack aquí en su lugar; al resto de la sesión solo le importa que sepas qué sonido está en cada sitio.
:::

## Step: Snare, hi-hat cerrado, hi-hat abierto
keys: [TRK, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, TRIG 1, TRIG 3, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

[TRK] + [KEYBOARD D1], la segunda tecla SUBTRACKS, te lleva a la subtrack 2, y el snare va en
[TRIG 5] y [TRIG 13]. La tercera tecla, [TRK] + [KEYBOARD E1], es la subtrack 3, el hi-hat
cerrado: todos los pasos impares, de [TRIG 1] a [TRIG 15]. La cuarta, [TRK] + [KEYBOARD F1],
es la subtrack 4, el hi-hat abierto, en [TRIG 7] y [TRIG 15] — y luego [TRK] + [KEYBOARD E1]
una vez más, para que la fila del hi-hat cerrado sea la que está en las teclas.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: El beat de la sesión 2, completo, desde una sola pista. La tira es la subtrack 3: el hi-hat cerrado en todos los pasos impares.
recover: Una fila que ya tiene trigs que no escribiste es la subtrack que acabas de dejar — mantén pulsado [TRK], sin soltarlo, y pulsa la tecla de la subtrack otra vez. Estas tres no tienen por qué ser un snare y dos hi-hats: pon las mejores voces del kit en estos pasos.
:::

## Step: Libera las pistas 2 a 4
keys: [TRK, TRIG 2, TRIG 3, TRIG 4, FUNC, PLAY]
source: manual §10.10.4
mode: grid-recording

Todavía en GRID RECORDING: mantén pulsado [TRK] y pulsa [TRIG 2], luego mantén pulsado
[FUNC] y pulsa [PLAY]. Los trigs del snare han desaparecido. Haz lo mismo en [TRIG 3] y en
[TRIG 4] — tres pistas normales, tres borrados, y todo el beat sale de la pista 1.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, type: "AUDIO" }
hear: El mismo beat de hace un minuto sin nada que lo doble: las pistas 2, 3 y 4 están en silencio.
recover: ¿Borraste una de más? [FUNC] + [NO] devuelve la última (§10.10.5). Si una fila que borraste sigue encendida, el borrado cayó en la pista en la que estabas antes — mantén pulsado [TRK] mientras eliges.
:::

:::note
Los presets se quedan donde están. Este borrado se lleva trigs, no sonidos: las pistas 2 a 4
siguen teniendo el snare y los hi-hats de la sesión 2, y la sesión 6 carga un bajo y unos
acordes encima. A02 sigue teniendo la versión de cuatro pistas del beat, y nada lo
sobrescribe antes de la sesión 9.
:::

## Step: Cambia un sample
keys: [TRK, TRIG 1, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Mantén pulsado [TRK] y pulsa [TRIG 1] para volver al kit, luego [TRK] + [KEYBOARD F1], la
cuarta tecla SUBTRACKS, para que el hi-hat abierto sea la subtrack en la que estás.
[FUNC] + [KEYBOARD F1] abre el navegador de samples en la tarjeta SD, apuntando a esa sola
subtrack: [UP]/[DOWN] recorre la tarjeta, [YES] abre una carpeta y [YES] sobre un sample lo
carga en el pool de samples del proyecto y en la subtrack (§5.2.6), y [NO] sube un nivel.
Elige un sonido que te guste para el hi-hat abierto — de las cuatro voces, es con la que la
pieza es menos exigente — y luego [FUNC] + [NO] para salir del navegador (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Tu propio sample en los pasos 7 y 15, en lugar del hi-hat abierto del kit, con el resto del beat sin cambios.
recover: Si un [YES] añade el sample pero la subtrack no lo toca, el navegador quiere su menú OPERATIONS: pulsa [RIGHT], elige LOAD SAMPLES y pulsa [YES] (§6.13.1). Si este camino necesita una pulsación o dos es una pregunta para la unidad — el manual describe las dos, en páginas distintas.
:::

:::note
No hay ninguna pantalla que se llame pool de samples. El pool es el nombre que el manual da a
lo que el proyecto ha cargado en RAM, y lo miras a través de SAMPLE BANKS en este mismo
navegador (§6.13.2); el navegador muestra lo que ha costado, en megabytes y como porcentaje
de la RAM (§6.13). Pregunta en el foro por "el pool de samples" y
[te redirigen](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/965).
:::

## Step: La supertrack, vista una vez
keys: [TRK, TRIG 1, KEYBOARD C1]
source: manual §A.2.3
mode: any

Mantén pulsado [TRK] y pulsa [TRIG 1] dos veces: la primera selecciona la pista 1, la
segunda selecciona su supertrack, y aparecen tres rectangulitos blancos encima del número de
pista. La supertrack no es un noveno sonido — es donde viven los ajustes compartidos de las
ocho subtracks: las páginas FX, los dos LFO de FX y, según encuentran los propietarios, los
niveles de send con ellas. Mantén pulsado [TRK] y pulsa [KEYBOARD C1], la primera tecla
SUBTRACKS, para volver a salir.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", super: true }
hear: Nada nuevo. La supertrack no tiene voz propia, y el beat sigue corriendo por debajo.
recover: Sin rectángulos encima del número de pista significa que la segunda pulsación eligió otra pista — mantén [TRK] pulsado y pulsa [TRIG 1] dos veces sin soltarlo.
:::

:::note
Un lock puesto aquí mueve las ocho subtracks a la vez, lo que va mejor con
[material tonal o de textura que con un kit de batería](https://www.youtube.com/watch?v=QHRGueJ8FsI);
[los niveles de send también se comparten aquí](https://www.elektronauts.com/t/tonverk-subtrack-drum-strategies/243084),
en vez de ajustarse por subtrack, y por eso mezclar un kit voz por voz pasa por la
supertrack. El presentador de Elektron en ese vídeo llama a la marca de la pantalla tres
puntos en vez de tres rectángulos, así que su aspecto merece un segundo vistazo en tu propia
unidad.
:::

## Step: Guarda
keys: [FUNC, SETTINGS, TRK, KEYBOARD E1]
source: manual §9.1.1
mode: grid-recording

Mantén pulsado [FUNC] y pulsa [SETTINGS]: guardado, en silencio, como va todo guardado aquí.
Luego mantén pulsado [TRK] y pulsa [KEYBOARD E1], la tercera tecla SUBTRACKS, y mira el
hi-hat cerrado por última vez — todos los pasos impares en rojo. Esa imagen es la cabecera
de esta sesión.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Todo el beat desde la pista 1 sola, guardado.
recover: Una tira apagada significa que [RECORD] no está encendido: púlsalo para GRID RECORDING y mira otra vez. El guardado no muestra nada y no pregunta nada; si quieres una prueba, el nombre de tu proyecto está en la lista PROJECT, LOAD del menú FILE.
:::

## What you now have

A01 toca todo el beat desde la pista 1: un kit de Subtracks con un kick en la subtrack 1,
un snare en la 2, un hi-hat cerrado en la 3 y, en la 4, un hi-hat abierto que elegiste tú
mismo de la tarjeta. Las pistas 2, 3 y 4 siguen teniendo los presets de la sesión 2 pero
ningún trig — libres para el bajo, los acordes y el pad de las sesiones 6 y 8 — y A02 guarda
la versión de cuatro pistas del beat hasta que la sesión 9 necesite el slot. Todo está
guardado.

## Explore further

### STEP EDIT, un paso cada vez
En reproducción, pulsa [STEP EDIT] y luego una tecla trig: se pone verde, y el teclado añade
y quita notas en ese único paso (§10.3.1). En una pista Subtracks, así es como miras un solo
paso a lo ancho del kit en vez de una sola subtrack a lo largo del compás.

### Copia las ocho subtracks a la vez
En STEP EDIT, [FUNC] + [RECORD] copia todos los trigs de las ocho subtracks y de la
supertrack juntos, y [FUNC] + [STOP] los pega en otra pista que tenga una máquina Subtracks
(§10.10.4). Las mismas dos teclas en GRID RECORDING a secas mueven una sola subtrack.

### El borrado sin deshacer
[TRK] + [PLAY] reinicia los parámetros del preset de una pista, que es algo distinto de borrar
sus trigs — y es la única operación a la que el deshacer del secuenciador no llega
(§10.10.5). [FUNC] + [NO] no devolverá un preset, así que pruébalo en una pista que estés
dispuesto a perder.

### El pool, visto entero
[FUNC] + [SAMPLING] abre el mismo navegador de samples desde arriba. Elige SAMPLE BANKS para
ver todos los samples que ha cargado este proyecto, con SELECT UNUSED y UNLOAD para limpiar
los que ningún pattern toca (§6.13.2).

## Next

La sesión 4 conserva este kit y hace que se mueva: ghost notes, un lock de filtro en un
hi-hat, un roll de snare y una parte tocada en directo y luego cuantizada. No se carga
nada nuevo — todo sale de los ocho sonidos que ya tienes.
