---
number: 4
chapter: rhythm
slug: make-it-move
title: Haz que se mueva
goal: Dale al beat ghost notes, un lock de filtro, un roll de snare y una parte que tocas tú, y luego cuantízala.
needs: ["El proyecto de la sesión 3", "Auriculares conectados", "Unos dieciséis minutos"]
teaches: [parameter-locks, trig-preview, retrigs, micro-timing, live-recording, quantize, sequence-lanes]
simulator: null
ends: { keys16: { 5: red, 13: red } }
---

## Step: Dónde estás
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

La sesión 3 te dejó en GRID RECORDING en la pista 1 con la subtrack 6, el hi-hat cerrado, en
las dieciséis teclas. Si el secuenciador no está en marcha, pulsa [PLAY] y déjalo correr:
cada paso de aquí se escribe sobre el loop. Luego mantén pulsado [FUNC] y pulsa [SETTINGS] —
esta sesión escribe locks por todo el kit, y ese guardado es el estado al que puedes volver.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Todo el beat desde la pista 1 — kick, snare, hi-hat cerrado y tu sonido en lugar del clap — en loop desde A01.
recover: Una tira apagada significa que [RECORD] no está encendido: púlsalo para GRID RECORDING, luego mantén pulsado [TRK] y pulsa [KEYBOARD A1], la sexta tecla SUBTRACKS, para volver al hi-hat cerrado. ¿Empiezas aquí sin la sesión 3? Esa sesión construye el kit que esta pone en movimiento, y lleva unos dieciséis minutos.
:::

## Step: Ghost notes
keys: [TRIG 3, TRIG 7, TRIG 11, TRIG 15, TRIG, B]
leds: { TRIG 3: red, TRIG 7: red, TRIG 11: red, TRIG 15: red }
source: manual §10.10.1, §12.2
mode: grid-recording

Mantén pulsados [TRIG 3], [TRIG 7], [TRIG 11] y [TRIG 15] a la vez — los cuatro hi-hats que
caen entre los tiempos — y, sin soltarlos, pulsa [TRIG], la tecla TRIG PARAMETERS, la que
está a la izquierda de [SRC]. Se abre TRIG PAGE 1; todavía con los cuatro pulsados, baja el
mando DATA ENTRY [B], VEL, hasta más o menos 60.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 60, LEN 1/16, PROB 100%, RTRG OFF, RTIM 1/16, RVEL 0, COND —], invert: [1] }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Los hi-hats a tiempo se quedan donde estaban y los cuatro de en medio se retiran detrás de ellos. VEL es la única casilla de la página dibujada invertida, y las cuatro teclas que mantuviste parpadean en rojo mientras las otras cuatro se quedan fijas.
recover: Si los ocho hi-hats se callaron, no había nada pulsado y el giro movió el VEL de toda la subtrack: vuelve a subirlo, mantén pulsadas las cuatro teclas y gira otra vez. NOTE se lee como un guion: el §12.2 dice que no está disponible en una pista Subtracks.
:::

:::note
Un lock que pones aquí pertenece a la subtrack en la que estás y a nada más: cada subtrack
conserva sus propios ajustes de SRC, FLTR, AMP y MOD (§A.2.3), así que este giro deja el
kick y el snare exactamente como estaban. Las páginas FX y los niveles de send son la
excepción — las ocho los comparten a través de la supertrack, y por eso un propietario que
grababa en directo un send de delay se lo encontró
[cayendo en todas las subtracks a la vez](https://www.elektronauts.com/t/tonverk-bug-reports/238306/1676)
y por eso
[no hay ningún filtro en la supertrack al que echar mano](https://www.elektronauts.com/t/tonverk-feature-requests/238027/2263).
:::

## Step: Escucha un solo paso
keys: [TRIG 1, TRIG 3, YES]
source: manual §10.3
mode: grid-recording

Mantén pulsado [TRIG 3] y pulsa [YES]: ese único paso suena, con su VEL nuevo incorporado.
Mantén pulsado [TRIG 1] y pulsa [YES] para el hi-hat a tiempo de al lado.

:::checkpoint
hear: Dos hi-hats, uno tras otro, a los dos volúmenes que acabas de fijar, sobre el loop que sigue corriendo por debajo.
recover: Si los dos suenan idénticos, el lock nunca llegó — vuelve un paso atrás, mantén pulsadas las cuatro teclas y mira cómo VEL se invierte mientras giras el mando.
:::

## Step: Un lock de filtro
keys: [FLTR, TRIG 9, E]
leds: { TRIG 9: red }
source: manual §10.10.1, §12.5
mode: grid-recording

Pulsa [FLTR] para FLTR PAGE 1. Mantén pulsado [TRIG 9] — el hi-hat del tercer tiempo — y
baja el mando DATA ENTRY [E], FREQ, hasta que ese único hi-hat se apague.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [ATK, DEC, SUS, REL, FREQ 42, RESO, TYPE, ENV], invert: [4] }
hear: Siete hi-hats como estaban, y uno en el tercer tiempo sin agudos. El paso 9 parpadea ahora, junto a las cuatro ghost notes.
recover: Si todos los hi-hats se apagaron a la vez, [TRIG 9] no estaba pulsado cuando giraste: mantenlo pulsado primero.
:::

## Step: Quita un lock
keys: [TRIG 9, E]
source: manual §10.10.1
mode: grid-recording

Mantén pulsado [TRIG 9] otra vez y pulsa el mando DATA ENTRY [E] — púlsalo, no lo gires. El
lock de FREQ se quita y el trig se queda donde está. Ahora mantén pulsado [TRIG 9] y vuelve
a bajar [E]: la pieza de ejemplo se queda con este.

:::checkpoint
hear: El hi-hat del tercer tiempo vuelve brillante, y se apaga otra vez cuando vuelves a poner el lock.
recover: Si el hi-hat desapareció del todo, fue una pulsación corta y no mantenida, que quita el trig — pulsa [TRIG 9] una vez más para volver a escribirlo, y todos los locks que llevaba se fueron con él (§10.10.1).
:::

## Step: El roll de snare
keys: [TRK, KEYBOARD D1, TRIG 13, TRIG, E, F, G]
leds: { TRIG 5: red, TRIG 13: red }
source: manual §10.7, §12.2
mode: grid-recording

Mantén pulsado [TRK] y pulsa [KEYBOARD D1], la segunda tecla SUBTRACKS, para el snare. Mantén
pulsado [TRIG 13] y pulsa [TRIG] para TRIG PAGE 1, y sigue manteniéndolo: gira [E] para
activar RTRG, [F] para poner RTIM en 1/32, y [G] para subir RVEL hacia 1, de modo que las
repeticiones crezcan en vez de apagarse.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS", params: [NOTE —, VEL 100, LEN 1/16, PROB 100%, RTRG ON, RTIM 1/32, RVEL 0.5, COND —], invert: [4, 5, 6] }
keys16: { 5: red, 13: red }
hear: El snare del cuarto tiempo llega como un roll corto: las repeticiones duran lo que el LEN del propio trig y se detienen dentro del paso 13, un pickup hacia el compás siguiente y no un fill a lo largo de él. El snare del 5 está intacto, y en la página los tres que giraste son los invertidos. El paso 13 parpadea ahora; el 5 está fijo.
recover: Un roll que no oyes suele ser RTRG todavía desactivado — mantén pulsado [TRIG 13] y mira cómo cambia esa lectura antes de acercarte a RTIM. Si los dos snares hacen el roll, soltaste [TRIG 13] antes de girar y el ajuste fue a toda la subtrack en vez de a ese único trig: vuelve a desactivar RTRG sin nada pulsado, y empieza de nuevo manteniendo la tecla. ¿Demasiado cargado? [F] de vuelta a 1/16 da una repetición por paso, 1/12 da tresillos.
:::

:::note
Dos cosas de esta página confunden a la gente. No hay RLEN: el cuarto de los parámetros de
retrig es COND, una condición de trig, que es el tema de la sesión 5 — lo que da forma a un
roll es RVEL, y actúa contra el propio VEL del trig. Y el manual nombra dos mandos para
RTRG: la regla del §6.3 es que un parámetro responde al mando que tiene encima, lo que pone
RTRG en [E], mientras que la frase del §12.2 nombra el mando [A]. Gira el mando que está bajo
el parámetro.
:::

## Step: Retrasa el clap
keys: [TRK, KEYBOARD F1, TRIG 7, RIGHT, UP, DOWN]
source: community https://www.youtube.com/watch?v=7lFFSUOsXsA
mode: grid-recording

Mantén pulsado [TRK] y pulsa [KEYBOARD F1], la cuarta tecla SUBTRACKS, para el clap
— tu sonido desde la sesión 3. Mantén pulsado [TRIG 7] y pulsa [RIGHT]: se abre la ventana MICRO TIMING y muestra
el desplazamiento de ese paso como un porcentaje (§10.5). Mantén la tecla pulsada — [RIGHT]
otra vez lo empuja más lejos a saltos grandes, [UP] y [DOWN] lo mueven poco a poco — y suelta
[TRIG 7] para salir.

:::checkpoint
screen: { menu: "MICRO TIMING", items: [+25%] }
hear: El clap del 7 cae un pelo después del paso en el que está, y el compás se inclina con más fuerza hacia el siguiente.
recover: ¿No se abrió nada? La ventana quiere primero la tecla trig pulsada y después la flecha, y un paso sin trig no tiene nada que desplazar. Si te pasaste: [LEFT] lo devuelve, y el desplazamiento se guarda con el pattern, así que sobrevive al guardado del final (§10.5).
:::

## Step: Toca algo tú
keys: [RECORD, PLAY, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Mantén pulsado [RECORD] y pulsa [PLAY] una vez: [RECORD] empieza a parpadear en rojo y LIVE
RECORDING está activado con el pattern todavía en loop. Suelta los dos y luego toca
[KEYBOARD G1], la quinta tecla SUBTRACKS, a tiempo con el beat durante un compás o dos.
Pulsa [PLAY] solo para volver a salir.

:::checkpoint
hear: Una quinta voz del kit donde la pusieron tus dedos, sobre las cuatro que escribiste a mano, y el loop no se detiene nunca.
recover: Si [RECORD] se encendió fijo en vez de parpadear, [PLAY] bajó antes que [RECORD] y estás en GRID RECORDING: pulsa [RECORD] para apagarlo y empieza de nuevo. Una quinta tecla que no hace ningún sonido es una subtrack vacía en tu kit — toca una que sí suene y usa esa subtrack en su lugar.
:::

:::note
[PLAY] significa dos cosas distintas alrededor de este paso. Pulsado una segunda vez mientras
[RECORD] sigue pulsado, activa y desactiva la cuantización automática de lo que estás a punto
de grabar (§10.4); déjala desactivada, porque el paso siguiente cuantiza a mano. Pulsado una
vez soltado [RECORD], sale
de la grabación en directo y el pattern sigue en marcha.
:::

## Step: Cuantiza lo que tocaste
keys: [FUNC, KEYBOARD G#1, TRIG 1, TRIG, E, F, NO]
source: manual §10.8
mode: menu:QUANTIZE

Mantén pulsado [FUNC] y pulsa [KEYBOARD G#1] para el menú QUANTIZE, y pulsa [TRIG 1] para
apuntarlo a la pista 1. Sube el mando DATA ENTRY [E], TRK, poco a poco, y para en el momento
en que la parte que tocaste quede ajustada: a medio camino es donde lo quieres, y tu oído
elige el punto. El mando [F], PATTERN, haría lo mismo con todas las pistas del pattern a la
vez; déjalo en cero. [NO] cierra el menú.

:::checkpoint
screen: { menu: "QUANTIZE", items: [TRK 0, PATTERN 0] }
hear: Los dos ajustes empiezan en cero. El kick y el snare no se mueven, porque se escribieron en la rejilla y ya están en ella. Lo que TRK arrastra es todo lo que no lo está: la parte que tocaste a mano, y el clap que retrasaste hace dos pasos (§10.8).
recover: ¿No se abrió el menú? Prueba [FUNC] + [TRIG] en su lugar, la combinación que el §10.4 da para este mismo menú donde el §10.8 da [FUNC] + [KEYBOARD G#1]. ¿Subiste hasta el final y perdiste el clap retrasado? Vuelve a la subtrack del clap, mantén pulsado [TRIG 7] y pulsa [RIGHT] para volver a empujarlo (§10.5); cuantizar redondea al paso más cercano, y para un trig con micro timing ese no tiene por qué ser el paso en el que se escribió (§10.8). Si la toma sigue sin sonar como lo que tocaste, [un propietario cuenta lo mismo](https://www.elektronauts.com/t/tonverk-user-thread/238631/1812), sin respuesta en el hilo.
:::

## Step: Mira los locks a solas
keys: [TRK, KEYBOARD A1, RECORD, FUNC, UP, DOWN, NO]
leds: { RECORD: red }
source: manual §10.3.2
mode: grid-recording

Mantén pulsado [TRK] y pulsa [KEYBOARD A1], la sexta tecla SUBTRACKS, para volver al
hi-hat cerrado, y luego pulsa [RECORD] para GRID RECORDING. Mantén pulsado [FUNC] y pulsa
[UP] para el menú SEQUENCE LANE, y pulsa [UP]/[DOWN] hasta que P-LOCKS sea la opción elegida.
Vuelve a ponerlo en NOTES + P-LOCKS antes de salir, y luego pulsa [NO].

:::checkpoint
screen: { bank: "A01", name: "P-LOCKS", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 1: red, 3: red, 5: red, 7: red, 9: red, 11: red, 13: red, 15: red }
hear: Nada cambia en el sonido. El nombre del carril se imprime en la parte de arriba de la pantalla junto a las páginas del pattern, y todos los hi-hats pasan a un rojo tenue — los ocho, 1, 5 y 13 lisos y 3, 7, 9, 11 y 15 con sus locks. Nada parpadea: el §10.3.2 ordena este carril por el tipo de trig, no por los locks que lleva, y un trig de nota que lleva un lock sigue siendo un trig de nota (§10.2.1), así que aquí los ocho son el mismo tipo de trig.
recover: [UP] y [DOWN] recorren los tres carriles como una sola lista, así que pulses el que pulses, sigue hasta que P-LOCKS sea el elegido y déjalo en NOTES + P-LOCKS después. Si los hi-hats están en rojo pleno y no tenue, sigues en NOTES, donde los trigs de nota son rojos y los trigs de lock amarillo tenue (§10.3.2) — sigue recorriendo la lista. El propio presentador de Elektron encontró un trig de lock aparentemente eliminable desde el modo NOTES, [cosa que el manual dice que no puede pasar](https://www.youtube.com/watch?v=7lFFSUOsXsA).
:::

## Step: Guarda
keys: [FUNC, SETTINGS, TRK, KEYBOARD D1]
source: manual §9.1.1
mode: grid-recording

Mantén pulsado [FUNC] y pulsa [SETTINGS]: guardado, en silencio, como va todo guardado aquí.
Luego mantén pulsado [TRK] y pulsa [KEYBOARD D1], la segunda tecla SUBTRACKS, y mira el snare
por última vez — 5 y 13, con el 13 parpadeando por el roll que lleva.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red }
hear: El beat con todo lo que le has metido, guardado: las ghost notes, el hi-hat apagado, el roll y la parte que tocaste.
recover: Dos teclas y ninguna más es lo correcto — el snare siempre ha tenido dos trigs, y el roll vive dentro de uno de ellos y no en pasos propios.
:::

## What you now have

A01 es el mismo kit y las mismas cuatro voces, en movimiento. En el hi-hat cerrado, cuatro
ghost notes se sientan detrás de las cuatro a tiempo y un paso del tercer tiempo está
filtrado y apagado; el snare del 13 es un roll corto, un pickup hacia el compás
siguiente; el clap del 7 va un pelo retrasado si dejaste TRK sin llegar al tope, y
clavado en el paso si no; y una quinta subtrack lleva una parte que tocaste con las manos y
luego arrastraste a la rejilla. Todo son parameter locks y timing sobre trigs que ya tenías,
todo está guardado, y A02 sigue teniendo la copia del beat de la sesión 2.

## Explore further

### Aleatoriza las velocities, y luego deshazlo
[FUNC] + [-] abre el menú TRANSFORM, que actúa sobre todos los trigs de la pista en la que
estás (§10.6). VELOCITY RANDOMIZE escribe un lock de VEL en todos; VELOCITY UNLOCK quita
todos los locks de VEL que haya — incluidas las cuatro ghost notes — así que pruébalo en la
subtrack del clap y no en la del hi-hat cerrado, y ten tu guardado a mano.

### Un lock sin nota debajo
En GRID RECORDING, [FUNC] + [TRIG 8] en un paso vacío escribe un trig de lock: amarillo en
vez de rojo, que lleva cambios de parámetros pero no dispara nada (§10.2.1). Pon uno en el
paso 8 del hi-hat cerrado, haz un lock de FREQ en él, y escucha cómo el siguiente hi-hat sale de un
filtro que se movió mientras nada sonaba.

### PROB, dos casillas más allá de VEL
PROB está en TRIG PAGE 1 junto a los parámetros que has estado girando, en el mando [D], y
fija la probabilidad de que un trig suene o no — 100% por defecto, decidida de nuevo cada
vez que llega el paso (§12.2). Ponle un lock al 50% en una ghost note y escucha cómo el compás
deja de repetirse. La sesión 5 se construye sobre esa idea.

## Next

La sesión 5 impide que el pattern se repita: condiciones de trig en el kit que tienes, un
kick que llega un loop sí y otro no, probabilidad en estas mismas ghost notes y un
compás de fill que mantienes pulsado — todo dentro de A01, sin cargar nada nuevo. El
simulador de esa página muestra por qué un trig no sonó.
