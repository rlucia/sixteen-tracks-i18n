---
number: 2
chapter: rhythm
slug: first-beat
title: El primer beat
goal: Pon batería en las pistas 1 a 4, escribe un beat de un compás en GRID RECORDING, pon en mute y quita el mute, copia el pattern y guarda.
needs: ["El proyecto SIXTEEN de la sesión 1 (o cualquier proyecto con un kick en la pista 1 — el paso 1 dice cómo)", "Auriculares conectados", "Los presets de batería de fábrica en la tarjeta SD", "Unos dieciséis minutos"]
teaches: [grid-recording, track-select, page-length, mute, copy-paste-clear, undo, pattern-select]
simulator: null
ends: { keys16: { 1: red, 5: red, 9: red, 13: red } }
---

## Step: Dónde estás
keys: [FUNC, PRESET, UP, DOWN, RIGHT, YES]
source: manual §9.1.1
mode: menu:FILE

Si SIXTEEN no es el proyecto que hay en la pantalla, cárgalo: [FUNC] + [PRESET] abre el menú
FILE, luego [UP]/[DOWN] por PROJECT, LOAD y tu proyecto, [YES]. ¿Empiezas aquí sin la
sesión 1? Necesitas un proyecto que puedas editar con un kick en la pista 1 — la sesión 1,
pasos 3 a 5, lleva cuatro minutos.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
hear: Pulsa [TRIG 1]: el kick de la sesión 1.
recover: Si has experimentado desde entonces y quieres recuperar el estado guardado, resalta tu proyecto en la lista LOAD y pulsa [RIGHT] para PROJECT ACTIONS, luego RELOAD. Ese es el último guardado.
:::

:::note
Cargar un proyecto sustituye al que estás (§9.1.1). Si la máquina ha estado encendida desde
la sesión 1 y has estado tocando, guarda antes de cargar nada — el estado de trabajo que
estás a punto de abandonar no se escribe de vuelta en tu proyecto por sí solo.
:::

## Step: Un snare en la pista 2
keys: [TRK, TRIG 2, PRESET, LEFT, RIGHT, UP, DOWN, YES]
leds: { TRIG 2: white }
source: manual §5.3.7, §7.1
mode: menu:LOAD PRESET

Mantén pulsado [TRK] y pulsa [TRIG 2]. Pulsa [PRESET]; si no estás en DRUMS, [LEFT]/[RIGHT]
te devuelve. [UP]/[DOWN] hasta un snare — cualquier preset que se llame así — y pulsa [YES].

:::checkpoint
keys16: { 2: white }
hear: [TRIG 2] toca el snare; [TRIG 1] sigue tocando el kick.
recover: Si [TRIG 2] toca el kick, el preset cayó en la pista 1: el preset va siempre a la pista que estuviera activa cuando pulsaste [YES]. Mantén pulsado [TRK] y pulsa [TRIG 2] primero, luego carga otra vez.
:::

## Step: Un hi-hat cerrado en la pista 3
keys: [TRK, TRIG 3, PRESET, UP, DOWN, YES]
leds: { TRIG 3: white }
source: manual §5.3.7, §7.1
mode: menu:LOAD PRESET

Mantén pulsado [TRK] y pulsa [TRIG 3]. Luego [PRESET], [UP]/[DOWN] hasta un hi-hat cerrado,
[YES].

:::checkpoint
keys16: { 3: white }
hear: [TRIG 3] toca el hi-hat.
recover: La misma regla que con el snare: la pista activa decide dónde cae un preset.
:::

## Step: Una cuarta voz en la pista 4
keys: [TRK, TRIG 4, PRESET, UP, DOWN, YES]
leds: { TRIG 4: white }
source: manual §5.3.7, §7.1
mode: menu:LOAD PRESET

Mantén pulsado [TRK] y pulsa [TRIG 4]. La pieza de ejemplo usa aquí un hi-hat abierto; un
clap o un golpe de percusión funcionan igual de bien, y el beat seguirá cayendo donde dicen
los puntos de control. Cárgalo: [PRESET], [UP]/[DOWN] hasta él, [YES].

:::checkpoint
keys16: { 4: white }
hear: Cuatro sonidos distintos de [TRIG 1] a [TRIG 4].
recover: Carga otro preset encima. Solo cambia la copia del pattern, y la tarjeta sigue teniendo todos los presets por los que pasaste.
:::

## Step: Entra en GRID RECORDING
keys: [RECORD]
leds: { RECORD: red }
source: manual §10.3
mode: playback

Pulsa [RECORD]. La tecla se enciende en rojo, y ese rojo es GRID RECORDING. Las dieciséis
teclas trig han dejado de representar pistas. Ahora representan los dieciséis pasos de un
compás, en la pista activa.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, type: "AUDIO", page: { n: 1, of: 1 } }
hear: Nada todavía; el secuenciador no está en marcha.
recover: Si las teclas trig muestran slots de pattern en su lugar, estás en la selección de pattern. Pulsa [PTN] o [NO] para salir, y luego pulsa [RECORD].
:::

:::note
Entrar en GRID RECORDING no pone nada en marcha. [PLAY] arranca el secuenciador, y puedes
escribir trigs mientras corre o mientras está parado — lo que te resulte más fácil.
:::

## Step: El kick a tiempo
keys: [TRK, TRIG 1, TRIG 5, TRIG 9, TRIG 13]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.3, §10.2.1
mode: grid-recording

Mantén pulsado [TRK] y pulsa [TRIG 1] para que la pista del kick sea la que estás
escribiendo; su tecla se pone blanca. Luego pulsa [TRIG 1], [TRIG 5], [TRIG 9] y [TRIG 13]:
un kick en cada tiempo. Cada una de las cuatro se enciende en rojo — rojo es un trig de
nota.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Nada todavía.
recover: Una tecla que se apagó al pulsarla ya tenía un trig y lo has quitado — una pulsación corta es el borrado (§10.3). Púlsala otra vez.
:::

## Step: Play
keys: [PLAY, MAIN VOLUME]
leds: { RECORD: red }
source: manual §10.1.2
mode: grid-recording

Pulsa [PLAY]. Cuatro kicks por compás a tu tempo, y una luz corriendo por las dieciséis
teclas. Déjalo en marcha: todo lo que viene después se escribe mientras suena.

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Un kick en cada tiempo, en loop.
recover: Silencio mientras la luz sigue corriendo suele ser una de dos cosas: [MAIN VOLUME] demasiado bajo, o el jack de los auriculares sin llegar al fondo. Si la luz no se mueve en absoluto, pulsaste [PLAY] dos veces — la segunda pulsación pausa (§10.1.2). Púlsalo una vez más.
:::

## Step: El snare en el dos y el cuatro
keys: [TRK, TRIG 2, TRIG 5, TRIG 13]
leds: { RECORD: red, TRIG 5: red, TRIG 13: red }
source: manual §10.3
mode: grid-recording

Mantén pulsado [TRK] y pulsa [TRIG 2]. Las dieciséis teclas se vacían: ahora muestran la
pista 2, y la pista 2 no tiene nada. Pulsa [TRIG 5] y [TRIG 13].

:::checkpoint
keys16: { 5: red, 13: red }
hear: Kick, snare, kick, snare.
recover: Si las cuatro teclas del kick siguen encendidas, nunca saliste de la pista 1. Mantén pulsado [TRK] — pulsado, no un toque — y pulsa [TRIG 2] otra vez.
:::

## Step: Hi-hats paso sí, paso no
keys: [TRK, TRIG 3, TRIG 1, TRIG 5, TRIG 7, TRIG 9, TRIG 11, TRIG 13, TRIG 15]
leds: { RECORD: red, TRIG 1: red, TRIG 3: red, TRIG 5: red, TRIG 7: red, TRIG 9: red, TRIG 11: red, TRIG 13: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Mantén pulsado [TRK] y pulsa [TRIG 3]. Ahora pulsa todas las teclas impares
de [TRIG 1] a [TRIG 15]: ocho hi-hats, uno cada corchea. ¿Prefieres uno en cada paso?
Púlsalas todas — la pieza de ejemplo se queda con ocho, y a los puntos de control de aquí en
adelante no les importa cuál elegiste.

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: El beat tiene un pulso corriendo entre las voces.
recover: Demasiado cargado: pulsa las teclas que quieras apagar. Una pulsación corta quita; una pulsación mantenida conserva el trig y lo prepara para editarlo (§10.3).
:::

## Step: La cuarta voz, a contratiempo
keys: [TRK, TRIG 4, TRIG 7, TRIG 15]
leds: { RECORD: red, TRIG 7: red, TRIG 15: red }
source: manual §10.3
mode: grid-recording

Mantén pulsado [TRK] y pulsa [TRIG 4]. Pon el hi-hat abierto — o tu clap — en [TRIG 7] y
[TRIG 15]: el "y" antes de los tiempos tres y uno, donde empuja el compás hacia delante.
Cualquier sitio fuera del snare vale.

:::checkpoint
keys16: { 7: red, 15: red }
hear: El compás se inclina hacia el siguiente.
recover: Si cae encima del snare y lo emborrona, muévelo: pulsa la tecla para quitarlo, pulsa otra para añadirlo.
:::

## Step: Corrige un golpe
keys: [TRIG 7, YES, LEFT, RIGHT]
leds: { RECORD: red }
source: manual §10.3, §19
mode: grid-recording

Elige un golpe del que no estés seguro — aquí usamos el hi-hat abierto del paso 7. Mantén
pulsado [TRIG 7] y pulsa [YES]: ese trig suena, solo, con lo que tenga ajustado. Una
pulsación corta de [TRIG 7] lo quita; pulsa otra vez para volver a ponerlo.

:::checkpoint
hear: El golpe suelto, solo, mientras mantienes la tecla y pulsas [YES].
recover: Un trig mantenido se abre para editarlo, no se borra, así que mantener uno no te cuesta nada. Si apareció un menú MICRO TIMING, rozaste [LEFT] o [RIGHT] mientras lo mantenías (§10.5); suelta la tecla y pulsa [NO].
:::

## Step: Una página, dieciséis pasos
keys: [FUNC, PAGE, E, NO]
leds: { RECORD: red }
source: manual §10.9, §10.9.1
mode: menu:PAGE SETUP

Mantén pulsado [FUNC] y pulsa [PAGE]. LENGTH, en el mando DATA ENTRY [E], marca 16 — una
página, un compás, que es lo que quiere esta sesión. Los cuadraditos de arriba de la
pantalla principal cuentan las páginas del pattern; hay una. [NO] sale otra vez, dejándolo
todo como estaba.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER PATTERN, "LENGTH 16", "SPEED 1"] }
hear: Sin cambios.
recover: Si moviste LENGTH sin querer, devuelve el mando [E] a 16 antes de [NO]. Un pattern más largo no son compases vacíos — los pasos que ya tienes se copian hacia delante en las páginas nuevas (§10.9.1).
:::

:::note
Dos cosas de aquí pasan factura más tarde. Este menú fija una sola longitud para *todas* las
pistas hasta que pulsas [FUNC] + [YES], que lo cambia a longitudes por pista. Y el manual no
se decide sobre cómo se llama este menú — el encabezado del §10.9 y el rótulo del panel
dicen PAGE SETUP, el propio texto del §10.9 dice SCALE. Son el mismo menú.
:::

## Step: Pon una pista en mute
keys: [MUTE, TRIG 2, UP, DOWN]
leds: { TRIG 1: green, TRIG 3: green, TRIG 4: green }
source: manual §8.6
mode: playback

Pulsa [MUTE]. Las teclas trig vuelven a ser pistas: las encendidas suenan, las apagadas
están silenciadas. Pulsa [TRIG 2] y el snare desaparece; púlsala otra vez y vuelve. Pulsa
[MUTE] para salir. El verde es el mute GLOBAL, que te sigue a todos los patterns y se guarda
con el proyecto; [MUTE] + [DOWN] cambia al mute PATTERN, magenta, que pertenece solo a este
pattern. [MUTE] + [UP] vuelve al global.

:::checkpoint
keys16: { 1: green, 3: green, 4: green }
hear: El beat sin su snare, y luego con él otra vez.
recover: ¿Te dejaste algo en mute? El propio [MUTE] brilla tenue, verde o magenta, siempre que haya algo en mute — y el color te dice en qué modo ir a buscar. Púlsalo y encuentra la tecla apagada.
:::

:::note
Para estos colores, guíate por el §8.6, no por la guía rápida. El §7.4 da una sola regla —
apagado está en mute, verde es audible — y nunca menciona que el verde es propio del modo
global, así que quien lo aprende ahí tiene media regla.
[Los propietarios deducen los dos modos por analogía con otras cajas de Elektron](https://www.elektronauts.com/t/global-mute-mode/242420),
que es lo que pasa cuando un manual responde dos veces a la misma pregunta.
:::

## Step: Copia el pattern a A02
keys: [RECORD, FUNC, PTN, TRIG 2, STOP]
leds: { TRIG 1: white, TRIG 2: red }
source: manual §6.6, §10.10.4, §10.1.1
mode: playback

Pulsa [RECORD] para salir de GRID RECORDING — una copia de pattern no funciona mientras está
activado. Mantén pulsado [FUNC] y pulsa [RECORD], cuyo rótulo menta dice Copy. Mantén pulsado
[PTN] y pulsa [TRIG 2]: A02 queda elegido, y empieza cuando A01 llega a su final. En la
selección de pattern, una tecla blanca es un slot con algo dentro y la tecla roja es el que
está sonando. Ahora mantén pulsado [FUNC] y pulsa [STOP], rótulo menta Paste. A02 es tu
beat, a salvo de los cambios que vienen en la sesión 3.

:::checkpoint
screen: { bank: "A02", tempo: 92, track: 4, type: "AUDIO" }
keys16: { 1: white, 2: red }
hear: El mismo beat, sonando ahora desde A02.
recover: Si A02 llega en silencio, el pegado ocurrió antes que el cambio. Espera a que el número de A02 deje de parpadear arriba a la izquierda — ese parpadeo es el pattern en cola, no la máquina ignorándote — y luego [FUNC] + [STOP] otra vez.
:::

:::note
Quedarse dentro del banco A es la elección de esta sesión, no un muro. Para llegar a otro
banco pulsas [PTN], eliges el banco en la fila inferior del [KEYBOARD] y luego pulsas una
tecla trig para el pattern (§10.1.1). Esa fila responde a tres nombres en este manual — fila
inferior del [KEYBOARD], las teclas [SUBTRACKS], la tecla marcada [KEYBOARD C1] para el
banco A — y la lista del panel del §3.1, punto 21, imprime dos de ellos en una misma línea,
porque son una sola fila de teclas. Dentro del banco en el que ya estás, [PTN] y una tecla
trig es todo el gesto, que es todo lo que hoy hace falta.
:::

## Step: Borra, y deshaz
keys: [FUNC, PLAY, YES, NO]
leds: { TRIG 2: red }
source: manual §6.6, §10.10.4, §10.10.5
mode: playback

Mantén pulsado [FUNC] y pulsa [PLAY] — rótulo menta Clear — y luego [YES] en la pregunta.
Todos los trigs de A02 han desaparecido y el siguiente loop es silencio. Ahora mantén
pulsado [FUNC] y pulsa [NO], rótulo menta Undo. El beat ha vuelto. Hazlo a propósito una vez.

:::checkpoint
hear: Un compás de silencio, y luego el beat otra vez.
recover: Si deshacer no hace nada, pega otra vez — la copia sigue en el portapapeles. Deshacer alcanza un pegado o un borrado en cada nivel en el que el secuenciador guarda uno: un pattern entero, la secuencia de una pista, una sola página, una página de parámetros, el sonido de una pista. Se detiene en exactamente una cosa, y el §10.10.5 lo dice sin rodeos: borra el preset de una pista y ya no está.
:::

## Step: Vuelta a A01, y guarda
keys: [PTN, TRIG 1, FUNC, SETTINGS, RECORD, TRK]
leds: { RECORD: red, TRIG 1: red, TRIG 5: red, TRIG 9: red, TRIG 13: red }
source: manual §10.1.1, §9.1.1
mode: playback

Mantén pulsado [PTN] y pulsa [TRIG 1] para volver a A01. Mantén pulsado [FUNC] y pulsa
[SETTINGS]: guardado, los dos patterns, sin aviso. Luego pulsa [RECORD] una vez más, mantén
pulsado [TRK] y pulsa [TRIG 1], y mira el kick por última vez — pasos 1, 5, 9 y 13, en
rojo. Esa imagen es la cabecera de esta sesión.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "AUDIO" }
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Tu beat, desde A01.
recover: El guardado no dice nada y no muestra ninguna pantalla de nombre; así es como se ve un guardado aquí. Si quieres estar seguro, la lista PROJECT, LOAD del menú FILE tiene tu nombre.
:::

## What you now have

SIXTEEN tiene un beat de un compás en A01 — kick, snare, hi-hats y una cuarta voz repartidos
en cuatro pistas — y A02 guarda una copia. Los dos están guardados. Para aquí, o sigue
tocando: todo lo que cambies a partir de ahora está sin guardar hasta el siguiente
[FUNC] + [SETTINGS].

## Explore further

### Una segunda página
[FUNC] + [PAGE], y luego sube LENGTH a 32. El pattern tiene dos páginas y la segunda es una
copia de la primera, no compases en blanco (§10.9.1). En GRID RECORDING, [PAGE] alterna entre
ellas, así que puedes cambiar un golpe solo en la página dos. Devuelve LENGTH a 16 antes de
la sesión 3, o déjalo y ten en cuenta que los puntos de control de la sesión 3 describen una
sola página.

### Copia los trigs de una sola pista
En GRID RECORDING — esta lo quiere *activado* — [FUNC] + [RECORD] levanta los trigs de la
pista en la que estás; pasa a otra pista y [FUNC] + [STOP] los suelta ahí (§10.10.4). Pon el
pattern del hi-hat en la pista 4 y escucha dos hi-hats. Las mismas dos teclas, con grid
recording desactivado, mueven un pattern entero: el modo decide sobre qué actúan.

### Mute rápido
[MUTE] + [TRIG 2] pone el snare en mute sin entrar siquiera en el modo mute, y lo mismo otra vez
para reactivarla (§8.6). Esta es la que hay que aprender si alguna vez tocas esto en directo.

### Swing
En el menú [TEMPO], el mando [D] ajusta SWING entre el 50 y el 80 por ciento, y 50 es
perfectamente recto (§7.5.1). Prueba 58 con los hi-hats en marcha. Devuélvelo a 50 antes de
guardar si quieres el feel de la pieza de ejemplo.

### Copia un pattern sin salir de este
Pulsa [PTN], luego mantén pulsada una tecla trig y pulsa [RECORD] para copiar ese pattern,
[STOP] para pegar en él, [PLAY] para borrarlo — todo sin moverte del pattern que estás
tocando. Esto es
[nuevo en el OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes) y es
una familia distinta de las combinaciones con [FUNC] de arriba, que siempre actúan sobre
donde estás.

## Next

La sesión 3 carga una máquina Subtracks en la pista 1 y reconstruye estas cuatro voces como
un solo kit, lo que libera las pistas 2 a 4 para el bajo, los acordes y el pad que vienen
después. Tu copia A02 se queda exactamente como está. La lección de los colores de las
teclas — teclas trig como pistas, como pasos, como slots de pattern — es lo que hay que
llevarse.
