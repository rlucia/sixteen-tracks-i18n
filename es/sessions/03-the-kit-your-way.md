---
number: 3
chapter: rhythm
slug: the-kit-your-way
title: El kit, a tu manera
goal: Mira un paso a lo largo de todo el kit, reafina un sonido, cambia otro por un sample de la tarjeta y conoce la supertrack.
needs: ["El proyecto de la sesión 2 (SIXTEEN, o tu propio nombre)", "Auriculares conectados", "La tarjeta SD de fábrica en su ranura", "Unos dieciséis minutos"]
teaches: [step-edit, per-subtrack-sound, sample-browser, pool, supertrack, key-colours]
simulator: null
ends: { keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red } }
---

## Step: Dónde estás
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES, PLAY]
source: manual §9.1.1, §10.1.2
mode: playback

Si SIXTEEN no es el proyecto que hay en la pantalla, cárgalo: [FUNC] + [PRESET] abre el menú
FILE, luego [UP]/[DOWN] por PROJECT, LOAD y tu proyecto, [YES]. Pulsa [PLAY] y deja el beat
en marcha — todo lo que haces en esta sesión pasa mientras suena.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: El beat de la sesión 2 en loop desde A01: kick, snare, hi-hat cerrado y clap, todos del kit de la pista 1.
recover: Si has estado tocando desde entonces y quieres recuperar el estado guardado, resalta tu proyecto en la lista LOAD, pulsa [RIGHT] para PROJECT ACTIONS y elige RELOAD. Si [TRIG 2], [TRIG 3] o [TRIG 4] tocan sonidos propios, tu beat está repartido en cuatro pistas: la sesión 2 lo construye en una sola, y su primer paso borra el antiguo. ¿Empiezas aquí sin la sesión 2? Esa sesión escribe el beat con el que trabaja esta, y lleva unos dieciséis minutos.
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
que haya pasado; la tarjeta tiene ahora el beat de A01 y la copia de A02. Todo lo que viene a
partir del paso siguiente cambia el kit, y este es el estado al que puedes volver.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Nada — el beat sigue en marcha. Un guardado en esta máquina es silencioso, y no interrumpe el secuenciador.
recover: Si se abrió un menú de ajustes, [FUNC] no estaba pulsado primero. Pulsa [NO], mantén pulsado [FUNC] y luego pulsa [SETTINGS].
:::

## Step: Un paso, todo el kit
keys: [STEP EDIT, TRIG 1, TRIG 7, KEYBOARD F1]
leds: { TRIG 1: green }
source: manual §10.3.1
mode: step-edit

Pulsa [STEP EDIT] y luego [TRIG 1]. La tecla se pone verde, y la fila de abajo muestra ahora
los sonidos que suenan en el paso 1: el kick y el hi-hat cerrado. Pulsa [TRIG 7] y la fila
muestra el hi-hat cerrado y el clap. La sesión 2 escribió el beat un sonido a lo largo del
compás; esto es al revés, un paso a lo largo del kit. Pulsa [KEYBOARD F1] mientras el paso 7
está verde y el clap deja ese paso; púlsala otra vez y vuelve. Pulsa [STEP EDIT] otra vez para
salir.

:::checkpoint
hear: El beat como estaba, una vez que vuelves a poner lo que quitaste.
recover: STEP EDIT forma parte de GRID RECORDING (§10.3.1), así que [RECORD] se enciende con él. Una tecla tenue en la fila de abajo es el sonido que tienes seleccionado, no uno que suene en el paso — [lo advierte el propio tutorial de Elektron](https://www.youtube.com/watch?v=ijPa_vgY8QA).
:::

## Step: Reafina un sonido
keys: [TRK, KEYBOARD D1, SRC, A]
source: manual §A.2.3
mode: any

Mantén pulsado [TRK] y pulsa [KEYBOARD D1]: el sonido elegido es el snare. Pulsa [SRC] para
su página de fuente y gira el mando DATA ENTRY [A], TUNE, unos pasos hacia abajo; si lo pulsas
mientras lo giras, se mueve de semitono en semitono. Solo se mueve el snare. Cada uno de los
ocho sonidos tiene sus propias páginas SRC, FLTR, AMP y MOD, y lo que comparten son los
efectos del kit, que guarda la supertrack — dos pasos más adelante.

:::checkpoint
hear: Un snare más grave en el mismo beat; el kick, los hi-hats y el clap como antes.
recover: Si se movió otro sonido, la tecla roja estaba en otro sitio cuando giraste: mantén pulsado [TRK], pulsa [KEYBOARD D1] y gira otra vez. Para volver atrás, lee TUNE antes de girar y devuélvelo a ese valor.
:::

## Step: Cambia un sample
keys: [TRK, KEYBOARD F1, FUNC, UP, DOWN, YES, NO]
source: manual §A.2.3, §6.13
mode: menu:SAMPLE BROWSER

Mantén pulsado [TRK] y pulsa [KEYBOARD F1], la
cuarta tecla SUBTRACKS, para que el clap sea el sonido en el que estás.
[FUNC] + [KEYBOARD F1] abre el navegador de samples en la tarjeta SD, apuntando a esa sola
subtrack: [UP]/[DOWN] recorre la tarjeta, [YES] abre una carpeta y [YES] sobre un sample lo
carga en el pool de samples del proyecto y en la subtrack (§5.2.6), y [NO] sube un nivel.
Elige un sonido corto que te guste en lugar del clap — de las cuatro voces, es con la que la
pieza es menos exigente — y luego [FUNC] + [NO] para salir del navegador (§6.13.1).

:::checkpoint
screen: { menu: "SAMPLE BROWSER", items: [SD CARD, SAMPLE BANKS, WAVETABLES], sel: 0 }
hear: Tu propio sample en los pasos 7 y 15, en lugar del clap del kit, con el resto del beat sin cambios.
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
keys: [FUNC, SETTINGS, RECORD, TRK, KEYBOARD A1]
source: manual §9.1.1
mode: grid-recording

Mantén pulsado [FUNC] y pulsa [SETTINGS]: guardado, en silencio, como va todo guardado aquí.
Luego pulsa [RECORD] si está apagado, mantén pulsado [TRK] y pulsa [KEYBOARD A1], la tecla del
hi-hat cerrado, y míralo por última vez — todos los pasos impares en rojo. Esa imagen es la
cabecera de esta sesión.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Todo el beat desde la pista 1, con un snare más grave y un sonido tuyo en lugar del clap, guardado.
recover: Una tira apagada significa que [RECORD] no está encendido: púlsalo para GRID RECORDING y mira otra vez. El guardado no muestra nada y no pregunta nada; si quieres una prueba, el nombre de tu proyecto está en la lista PROJECT, LOAD del menú FILE.
:::

## What you now have

A01 toca el beat desde la pista 1 con HELLO KIT: el kick en [KEYBOARD C1], un snare en
[KEYBOARD D1] afinado más grave que el del kit, el hi-hat cerrado en [KEYBOARD A1] y, en
[KEYBOARD F1], un sonido que elegiste tú mismo de la tarjeta. Las pistas 2, 3 y 4 están
vacías, libres para el bajo, los acordes y el pad de las sesiones 6 y 8, y A02 guarda la copia
del beat de la sesión 2 hasta que la sesión 9 necesite el slot. Todo está guardado.

## Explore further

### Empieza desde un kit vacío
Mantén pulsado [TRK] y pulsa [TRIG 2], luego [FUNC] + [SRC]: el menú MACHINE. Elige SUBTRACKS
y una segunda lista pregunta qué instrumento cargar — un kit vacío en un extremo, los juegos
de instrumentos de fábrica al lado, y aquí el [KEYBOARD] hace sonar el resaltado antes de que
te decidas. El kit vacío son ocho subtracks esperando samples, que se llenan de una en una a
través del navegador de samples, y nada llena ocho slots desde una carpeta de una sola pasada —
[los propietarios lo han pedido](https://www.elektronauts.com/t/subtracks-use-cases/239235).
Hazlo en la pista 2, no en tu beat: una máquina nueva reescribe los ajustes de la pista
(§5.3.2).

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
