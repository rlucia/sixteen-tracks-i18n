---
number: 5
chapter: rhythm
slug: variation-without-new-patterns
title: Variación sin patterns nuevos
goal: Haz que un solo pattern cambie en cada loop con condiciones, probabilidad y un fill, y aprende las dos redes de seguridad antes de jugártelo.
needs: ["El proyecto de la sesión 4", "Auriculares conectados", "Unos dieciséis minutos"]
teaches: [trig-conditions, chance, fill, transform, memorise-recall, perform]
simulator: conditions
ends: { keys16: { 5: red, 13: red, 14: red, 15: red, 16: red } }
---

## Step: Dónde estás
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

La sesión 4 te dejó en GRID RECORDING en la pista 1 con la subtrack 2, el snare, en las
dieciséis teclas. Si el secuenciador no está en marcha, pulsa [PLAY] y déjalo correr — todo
lo de aquí se juzga loop a loop, así que un pattern parado no te enseña nada. Luego mantén
pulsado [FUNC] y pulsa [SETTINGS]: esta sesión se juega el pattern dos veces, y ese guardado
es el suelo bajo las dos.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: El kit de la sesión 4 dando vueltas: las ghost notes detrás de los hi-hats, el hi-hat apagado del tercer tiempo, el roll hacia el compás siguiente y la parte que tocaste. Dos teclas encendidas en la tira — el snare en el 5 y el 13, con el 13 parpadeando por el retrig que lleva.
recover: Una tira apagada significa que [RECORD] no está encendido: púlsalo para GRID RECORDING. Una tira con ocho teclas es el hi-hat cerrado y no el snare — mantén pulsado [TRK] y pulsa [KEYBOARD D1], la segunda tecla SUBTRACKS. ¿Empiezas aquí sin la sesión 4? Esa sesión escribe los locks que esta varía, y lleva unos dieciséis minutos.
:::

## Step: Un kick que llega un loop sí y otro no
keys: [TRK, KEYBOARD C1, TRIG 15, TRIG, H]
leds: { TRIG 15: red }
source: manual §10.10.2, §12.2
mode: grid-recording

Mantén pulsado [TRK] y pulsa [KEYBOARD C1], la primera tecla SUBTRACKS, para el kick, y
luego pulsa [TRIG 15] para poner un kick donde la subtrack no tenía ninguno — un pickup
hacia el principio del compás. Mantén pulsado [TRIG 15], pulsa [TRIG] para TRIG PAGE 1, y
gira el mando DATA ENTRY [H], COND, hasta que marque 1:2.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND 1:2], invert: [7] }
keys16: { 1: red, 5: red, 9: red, 13: red, 15: red }
hear: El pickup llega, se salta la vuelta siguiente y vuelve en la de después — A:B cuenta cuántas veces ha sonado el pattern, no en qué punto del compás estás (§10.10.2). El paso 15 parpadea frente a los cuatro kicks fijos, como hace cualquier trig que lleva un lock, y COND es la única casilla invertida de la página.
recover: Si el pickup llega en cada loop, COND sigue en el guion: mantén pulsado [TRIG 15] y mira cómo cambia esa lectura mientras giras [H], en vez de mirar las teclas. Si no llega nunca, te has pasado de 1:2 — las condiciones son una sola lista en un solo mando, y su vecina 2:2 suena exactamente en los loops que 1:2 se salta, aunque el §10.10.2 da esas dos solo como ejemplos y no como un orden con el que contar. Las otras siete lecturas del dibujo vienen del §12.2, no de una unidad.
:::

## Step: Probabilidad en las ghost notes
keys: [TRK, KEYBOARD E1, TRIG 3, TRIG 7, TRIG 11, TRIG 15, D]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §12.2
mode: grid-recording

Mantén pulsado [TRK] y pulsa [KEYBOARD E1], la tercera tecla SUBTRACKS, para el hi-hat
cerrado — TRIG PAGE 1 sigue delante de ti. Mantén pulsados [TRIG 3], [TRIG 7], [TRIG 11] y
[TRIG 15], las cuatro ghost notes de la sesión 4, y baja el mando [D], PROB, al 50%.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 50%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [3] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Más o menos la mitad de las ghost notes aparecen en un loop cualquiera, y otra mitad distinta en el siguiente: la moneda se vuelve a lanzar cada vez que llega un paso (§12.2). Los pasos 3, 7, 11 y 15 parpadean ahora por el lock que llevan, y 1, 5, 9 y 13 se quedan fijos — los cuatro hi-hats a tiempo están intactos, así que el compás conserva su forma mientras deja de repetirse.
recover: Si los cuatro hi-hats a tiempo también empiezan a fallar, PROB cayó en la subtrack en vez de en los cuatro trigs: sin nada pulsado, devuélvelo al 100%, y luego mantén pulsados [TRIG 3], [TRIG 7], [TRIG 11] y [TRIG 15] y gira [D] otra vez. Si las ghost notes suenan idénticas loop tras loop, mira la lectura: 50% es la cifra aquí, y cualquier cosa por encima de un 90% pasará por certeza a lo largo de un puñado de compases.
:::

## Step: Una respuesta que necesita su pregunta
keys: [TRIG 16, H]
leds: { TRIG 16: red }
source: manual §10.10.2
mode: grid-recording

Pulsa [TRIG 16] una vez: un hi-hat en el último paso del compás, donde esta subtrack no
tenía ninguno. Mantenlo pulsado y gira [H] hasta PRE: el trig suena solo si el que el
secuenciador evaluó antes que él también sonó (§10.10.2).

:::checkpoint
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red, 16: red }
hear: Los dos últimos pasos del compás llegan en pareja o no llegan — cuando la ghost note del 15 gana su tirada, el 16 le responde; cuando el 15 se queda fuera, el 16 se queda fuera con él. Las dos teclas parpadean, el 15 por su probabilidad y el 16 por su condición.
recover: Si el 16 suena en cada loop, COND sigue en el guion: mantén pulsado [TRIG 16] y gira [H] clic a clic, pasando el par de FILL, hasta que PRE sea la lectura. Y si te tienta apilar un segundo PRE encima de este, seguiría preguntando por el 15 — un trig PRE se salta cuando un PRE posterior mira hacia atrás (§10.10.2). Una cosa que el §10.10.2 resuelve para una pista y no para un kit: si el trig al que el 16 mira hacia atrás es el anterior en esta subtrack o el anterior en cualquier parte de la pista 1. Tu unidad lo dirá; esta pareja está escrita para la primera lectura.
:::

:::note
Una ghost note que pierde su tirada cuenta, en lo que al 16 respecta, como una ghost note que
nunca estuvo ahí. Vale la pena decirlo en voz alta porque no siempre ha sido así: las propias
notas de lanzamiento de Elektron incluyen [un lock de PROB que quedaba fuera del cálculo de
PRE y NEI](https://www.elektron.se/release-notes/tonverk-os-release-notes) entre los errores
que el OS 1.4.0 corrigió, y 1.4.0 es la versión para la que está escrito este curso. En un
OS más antiguo la pareja se descompone.
:::

## Step: ¿Por qué no sonó el paso 16?
keys: []
source: community https://www.elektronauts.com/t/nei-and-pre-trig-conditions/51959
mode: any

Dos reglas deciden ahora esos dos últimos pasos, y se resuelven en ese orden: primero la
probabilidad del 15, y luego el PRE del 16 sobre lo que la probabilidad haya dejado. El
simulador de abajo empieza en el kit que acabas de construir — el kick con su pickup 1:2,
los hi-hats con sus ghost notes al 50% y PRE en el 16 — y le da a cada paso una razón en vez de
un sonido.

:::simulator

:::checkpoint
hear: Pulsa Siguiente loop cuatro o cinco veces y las filas del registro muestran la pareja del 15 y el 16 llegando juntos y faltando juntos. Haz clic en el paso 16 de la fila de los hi-hats y la línea bajo el editor da el destino de ese paso en el loop en el que estás — el trig al que miró hacia atrás, y si ese sonó; los discos del registro llevan la misma frase bajo el puntero. Pon la probabilidad del 15 al 100 y el 16 deja de faltar.
recover: Nada de esto es una prueba de oído — el simulador dibuja la regla, no el kit, y su único sonido es un clic. Una cosa en la que tiene que tomar partido: si un trig liso, sin condición ni probabilidad, es el trig al que PRE mira hacia atrás. Lee la frase del §10.10.2 al pie de la letra y mira al último trig que evaluó, mientras que los hilos de propietarios de otras cajas de Elektron con esta misma regla dicen que un trig a secas no se evalúa nunca. Tu unidad lo dirá.
:::

## Step: Un compás de fill
keys: [TRK, KEYBOARD D1, TRIG 14, TRIG 15, TRIG 16, H, FUNC, FILL, UP, DOWN, YES]
leds: { TRIG 14: red, TRIG 15: red, TRIG 16: red }
source: manual §10.10.3, §10.10.2
mode: menu:FILL EDIT

Mantén pulsado [TRK] y pulsa [KEYBOARD D1], la segunda tecla SUBTRACKS, para el snare, y
pulsa [TRIG 14], [TRIG 15] y [TRIG 16] — tres snares apretados al final del compás. TRIG
PAGE 1 sigue siendo la página que tienes delante: mantén pulsados los tres y gira [H] hasta
FILL, para que suenen solo mientras el modo FILL está activado. Luego mantén pulsado [FUNC]
y pulsa [FILL] para el menú FILL EDIT, [UP]/[DOWN] hasta que MOMENTARY sea la opción
elegida, [YES] para cerrarlo, y mantén [FILL] pulsado durante el último tiempo del compás.

:::checkpoint
screen: { menu: "FILL EDIT", items: [MOMENTARY, LATCHING], sel: 0 }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: Con [FILL] pulsado, el compás termina en una carrera de tres snares hacia el siguiente; suelta y esos tres pasos vuelven a estar en silencio, loop tras loop, mientras el 5 y el 13 siguen como siempre. Cinco teclas en la tira ahora, las tres nuevas parpadeando por la condición que llevan.
recover: Si la carrera suena sin nada pulsado, o los tres trigs siguen en el guion en vez de en FILL, o LATCHING es la opción elegida y un toque anterior dejó el modo FILL activado — pulsa [FILL] una vez y escucha otra vez. Si la propia tecla [FILL] se enciende mientras la mantienes, y de qué color, no está en el manual ni en ningún sitio que hayamos encontrado; tu unidad lo dirá.
:::

## Step: Un punto de restauración, y luego un riesgo
keys: [FUNC, KEYBOARD D#1, -, UP, DOWN, YES, NO, KEYBOARD C#1]
source: manual §10.10.6, §10.6
mode: menu:TRANSFORM

Mantén pulsado [FUNC] y pulsa [KEYBOARD D#1]: el pattern tal como está se aparta en algún
sitio temporal (§10.10.6). Ahora mantén pulsado [FUNC] y pulsa [-] para el menú TRANSFORM,
recorre con [UP]/[DOWN] hasta VELOCITY RANDOMIZE y pulsa [YES]; [NO] cierra el menú. Escucha
un loop o dos, y luego mantén pulsado [FUNC] y pulsa [KEYBOARD C#1] para recuperar lo que
memorizaste.

:::checkpoint
screen: { menu: "TRANSFORM", items: [VELOCITY UNLOCK, VELOCITY RANDOMIZE, VELOCITY RAMP UP, VELOCITY RAMP DOWN, PLACEMENT RANDOMIZE, PLACEMENT REVERSE], sel: 1 }
hear: Todas las velocities de la pista caen en algún sitio nuevo a la vez — hi-hats fuertes donde eran suaves, ghost notes que ya no son ghost notes, el desvanecimiento del roll de snare reconstruido — y tras la recuperación las velocities vuelven a estar donde la sesión 4 las dejó, con las cuatro ghost notes otra vez detrás del tiempo. Lo que la recuperación devuelve es el pattern que memorizaste hace un momento — condiciones, probabilidad y trigs de fill incluidos — no el de la sesión 4.
recover: Si no cambió nada, el [YES] no cayó en la línea resaltada: abre el menú otra vez y mira qué acción está marcada antes de pulsar. Si la recuperación devuelve las velocities viejas exactamente o solo aproximadamente es la única parte de esto que nadie ha dejado por escrito; tu unidad lo dirá, y hasta entonces el guardado del paso 1 es el suelo de verdad.
:::

:::note
Una transformación no se queda en la subtrack que estás mirando. El §10.6 traza su límite en
la pista, y en una pista Subtracks eso se lee como el kit entero de una pasada: el kick del
pickup recibe una velocity nueva junto con los hi-hats, y también todos los snares.
Velocity y nada más — VELOCITY RANDOMIZE escribe locks de VEL, así que el pickup conserva
su 1:2 y los tres snares nuevos conservan su FILL. Que las ocho subtracks van de verdad
juntas es cosa de lo que cuentan los propietarios y no del manual: han pedido una manera de
apuntar una transformación a una sola subtrack y
[todavía no la hay](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2057), y
otro informe tiene a PLACEMENT RANDOMIZE
[moviendo trigs de lock que no tocan nada](https://www.elektronauts.com/t/tonverk-feature-requests/238027/1559)
junto con las notas — tu unidad lo dirá. En cualquier caso, la memorización va primero, y
VELOCITY UNLOCK es un martillo más pesado de lo que sugiere su nombre: quita todos los locks
de VEL de la pista, incluidos los cuatro de la sesión 4.
:::

## Step: Modo PERFORM
keys: [FUNC, SETTINGS, TRK, FLTR, E]
leds: { TRK: green }
source: manual §10.12, §A.2.3
mode: grid-recording

Mantén pulsado [FUNC] y pulsa [SETTINGS] primero; el guardado importa aquí más que en ningún
otro sitio de esta sesión. Ahora mantén pulsado [FUNC] y pulsa [TRK]: el modo PERFORM está
activado, y [TRK] se pone verde mientras lo está (§10.12). Pulsa [FLTR] y baja bien el mando
[E], FREQ, mientras corre el loop, y luego mantén pulsado [FUNC] y pulsa [TRK] otra vez para
salir.

:::checkpoint
hear: El snare se apaga bajo tu mano — el filtro pertenece a la subtrack en la que estás (§A.2.3), así que el kick y los hi-hats siguen sonando como estaban — y se queda apagado mientras el modo PERFORM está activado. En el momento en que sales, el snare vuelve a ser brillante y la luz verde se apaga: el retoque se ha ido, y guardar mientras estabas dentro tampoco lo habría conservado (§10.12).
recover: Si el snare se quedó apagado después de salir, [FUNC] no estaba pulsado en la segunda pulsación; la luz verde es lo que hay que mirar. Si no cambió nada en absoluto mientras girabas, [FLTR] está mostrando la página de otra subtrack — mantén pulsado [TRK] y pulsa [KEYBOARD D1] para el snare y prueba otra vez. El paso guarda primero a propósito: el §10.12 promete que el pattern vuelve a un estado guardado y no dice más, y lo que pasa con los cambios hechos después del último guardado y antes de entrar en el modo PERFORM no está escrito en ningún sitio. Tu unidad lo dirá; guardar primero deja la pregunta sin importancia.
:::

## Step: Guarda
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: grid-recording

Mantén pulsado [FUNC] y pulsa [SETTINGS] por última vez. Las dieciséis teclas siguen siendo
las del snare: dos que suenan en cada loop y tres que esperan a tu pulgar.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: El mismo compás con el que empezaste la sesión, y sin dos loops iguales — un kick de pickup una vuelta sí y otra no, la mitad de las ghost notes, un hi-hat que responde solo cuando su pregunta llegó, y un fill bajo tu pulgar. Esa tira de cinco teclas es la cabecera de esta sesión.
recover: Cinco teclas, con 14, 15 y 16 parpadeando. Si esas tres están apagadas, los trigs de fill fueron a otra subtrack: mantén pulsado [TRK] y pulsa [KEYBOARD D1] y mira otra vez — y si tampoco están ahí, el paso 6 está a tres pulsaciones y un mando del principio.
:::

## What you now have

A01 es el compás que la sesión 4 guardó, y ya no se repite. Un quinto kick llega un loop sí
y otro no, cada una de las cuatro ghost notes se juega su sitio, un hi-hat en el último
paso responde a la ghost note anterior o se calla con ella, y tres snares al final del compás
pertenecen solo a [FILL]. No se cargó nada y no se escribió ningún segundo pattern: todo es
un parámetro en una página, puesto en trigs que ya tenías. También tienes los dos caminos de
vuelta — la memorización que puedes recuperar, y el guardado al que el modo PERFORM te
devuelve — que es lo que hace que el resto valga la pena arriesgarlo.

## Explore further

### El fill que despeja el camino
Dale al snare del 13 lo contrario de una condición FILL — la que se imprime con una raya
encima, ¬FILL aquí y en el simulador — y se aparta siempre que [FILL] está pulsado
(§10.10.2). Los tres snares nuevos sustituyen al viejo en vez de apretujarlo, que es lo que
suele hacer un fill de batería.

### LATCHING, para cuando tienes las manos ocupadas
[FUNC] + [FILL] otra vez, [DOWN] hasta LATCHING, [YES]: ahora [FILL] activa y desactiva el
modo con un toque en vez de manteniéndolo (§10.10.3). Útil en cuanto tu otra mano está en un
mando, y fácil de dejar activado por error.

### 1ST, una intro que ocurre una sola vez
1ST dispara un trig la primera vuelta del pattern y nunca más; la misma condición con una
raya encima se salta esa primera pasada y suena en todas las demás (§10.10.2). Un hi-hat
abierto en el paso 1 con 1ST, y el pattern se anuncia y luego sigue a lo suyo.

### NEI, en el simulador y no en el kit
NEI mira de lado: pregunta cómo salió la última condición en la pista de al lado — la
numerada antes de la que estás — y suena, o no, según esa respuesta (§10.10.2). Las dos
pistas del simulador son exactamente esa pareja, y por eso NEI tiene su sitio allí: lo que lee
el NEI de una subtrack de Subtracks no está dicho en ningún sitio que hayamos encontrado, y
solo tu unidad puede decirlo.

### PROB sin nada pulsado
Gira [D] sin ninguna tecla trig pulsada y PROB pasa a ser el ajuste de la propia subtrack en
vez de el de un trig (§12.2). Cada hi-hat de la subtrack se juega entonces su sitio, que es un
tipo de compás distinto, más nervioso, que cuatro ghost notes jugándoselo por su cuenta.

### El modo PERFORM en dos patterns
Solo un pattern a la vez puede estar en el modo PERFORM. Sal de él hacia otro pattern y
vuelve, y tus retoques te esperan; activa el modo PERFORM allí en cambio, y los del primer
pattern se han ido (§10.12).

## Next

La sesión 6 deja la batería en paz y empieza el segundo capítulo: un bajo en la pista 2 y una
parte de acordes en la pista 3, tocados desde el teclado en la menor, en las pistas que la
sesión 3 liberó. El ritmo está terminado — a partir de aquí la pieza gana notas.
