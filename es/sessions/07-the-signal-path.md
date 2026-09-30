---
number: 7
chapter: sound
slug: the-signal-path
title: El camino de la señal
goal: Manda la batería por un bus que la comprime, haz que los acordes respiren en un bus propio, dales una sala, y dispara un efecto desde una tecla.
needs: [El proyecto de la sesión 6, Auriculares conectados, "Unos dieciséis minutos"]
teaches: [routing, bus, compressor, shape-envelope, send-fx, parameter-locks, trig-preview, effect-scenes]
simulator: routing
ends: { keys16: { 15: red, 16: red } }
---

## Step: Dónde estás
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

La sesión 6 dejó A01 con el kit en la pista 1, la bassline en la pista 2 y cuatro acordes en la
pista 3, y cada una va directa al mezclador. Si el secuenciador está parado, pulsa [PLAY]. Mantén
pulsado [FUNC] y pulsa [SETTINGS] antes de que cambie el routing: todo en esta sesión cambia adónde
va el sonido, no lo que tocan las pistas.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: La pieza como la dejó la sesión 6: el beat, la bassline moviéndose debajo, un acorde por compás.
recover: ¿Empiezas aquí sin la sesión 6? Esa sesión escribe el bajo y los acordes, y dura unos dieciséis minutos; también vale cualquier pattern con batería en la pista 1 y acordes en la pista 3.
:::

## Step: Adónde va el sonido
keys: [FUNC, MUTE, UP, DOWN]
source: manual §4.4.1
mode: menu:ROUTING

Mantén pulsado [FUNC] y pulsa [MUTE]: el menú ROUTING (§4.4.1). [UP] y [DOWN] cambian entre sus dos
grupos, las pistas de audio 1–8 y los buses y las pistas de envío. En las pistas, cada línea dice
MIX AB: cada pista va al mezclador, a través del efecto principal, a las salidas A/B y a los
auriculares. Así empieza cada pista de un pattern nuevo.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 MIX AB", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: No cambia nada: el menú solo muestra los caminos.
recover: Una lista de buses y pistas de envío en lugar de TRK1 a TRK8: el otro grupo — [UP] o [DOWN] para volver a las pistas.
:::

## Step: La batería al bus 1
keys: [TRIG 1, TRIG 9]
source: manual §4.4.1, §A.2.3
mode: menu:ROUTING

Con ROUTING abierto, mantén pulsado [TRIG 1] y pulsa [TRIG 9]. La pista 1 va ahora a BUS 1, que es
la pista 9, y la línea dice TRK1 BUS 1. El kit se mueve entero: sus ocho sonidos comparten la única
ruta de la pista 1 (§A.2.3). El bus pasa la batería al mezclador sin cambios hasta que lleva un
efecto.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 MIX AB", "TRK4 MIX AB"], sel: 0 }
hear: La batería exactamente como antes: un bus sin efectos deja pasar el audio.
recover: Apareció la pista 9 para editar, o la batería cambió mientras la línea sigue diciendo TRK1 MIX AB: las teclas se pulsaron con el menú cerrado. Solo el menú ROUTING, o ROUT en la página FX 1 de la pista 1, enruta una pista (§12.8) — [FUNC] + [MUTE] y el gesto otra vez.
:::

:::simulator

## Step: Comprímela
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO]
source: manual §11.5, §13.5, §A.3.4
mode: menu:TRACK SETUP

Mantén pulsado [TRK] y pulsa [TRIG 9]: el bus 1 es la pista activa. Mantén pulsado [FUNC] y pulsa
[FX]: TRACK SETUP se abre en el primer insert del bus, FX1. [UP]/[DOWN] hasta COMPRESSOR y [YES] lo
pone en el slot; [NO] cierra el menú. Pulsa [FX] hasta la página FX 2, la del compresor (§13.5).
Baja THR hasta que el kick y el snare empiecen a empujar el nivel hacia abajo, pon RAT en 4.00 y
sube MUP hasta que la batería suene tan fuerte como antes (§A.3.4).

:::checkpoint
screen: { menu: "FX 1", items: ["BYPASS", "CHRONO PITCH", "COMB ± FILTER", "COMPRESSOR"], sel: 3 }
hear: El kick y el snare más cerca en nivel de los hi-hats, todo el kit más denso y más parejo, tan fuerte como estaba.
recover: La batería más baja que antes: MUP sigue abajo — súbelo. Ningún cambio: la pista 1 no está en BUS 1 (paso 3), o el compresor fue a parar a otra pista — [TRK] + [TRIG 9] y otra vez [FUNC] + [FX].
:::

## Step: Los acordes al bus 2
keys: [FUNC, MUTE, TRIG 3, TRIG 10, NO]
source: manual §4.4.1
mode: menu:ROUTING

Mantén pulsado [FUNC] y pulsa [MUTE] otra vez. Mantén pulsado [TRIG 3] y pulsa [TRIG 10]: los
acordes van a BUS 2, la pista 10. Pulsa [NO] para cerrar el menú.

:::checkpoint
screen: { menu: "ROUTING", items: ["TRK1 BUS 1", "TRK2 MIX AB", "TRK3 BUS 2", "TRK4 MIX AB"], sel: 2 }
hear: Los acordes sin cambios, la batería aún comprimida en el bus 1.
recover: TRK3 sigue diciendo MIX AB: [TRIG 10] entró sin [TRIG 3] pulsado — primero mantén, luego pulsa. TRK3 dice BUS 1: [TRIG 9] en lugar de [TRIG 10].
:::

## Step: El bus respira
keys: [TRK, TRIG 10, RECORD, TRIG 1, TRIG 5, TRIG 9, TRIG 13, AMP]
leds: { RECORD: red }
source: manual §13.2, §A.2.6
mode: grid-recording

Mantén pulsado [TRK] y pulsa [TRIG 10]: el bus 2 es la pista activa. Pulsa [RECORD] para GRID
RECORDING y pulsa [TRIG 1], [TRIG 5], [TRIG 9] y [TRIG 13]: cuatro trigs en el secuenciador propio
del bus 2. Un trig de bus no suena; dispara la envolvente Shape del bus (§A.2.6). Pulsa [AMP] para
su página: ATK corto, DEC lo bastante largo para llegar al tiempo siguiente, y ENV girado bien
lejos de 0. Ahora los acordes bajan y vuelven a subir con cada uno de los cuatro.

:::note
Hacia qué lado hay que girar ENV para que bajen no está aclarado: Red Means Recording lo lleva por
debajo de cero ([el vídeo](https://www.youtube.com/watch?v=Ku3u0uUJoSE&t=977)), umonox lo sube
con un decay corto ([el vídeo](https://www.youtube.com/watch?v=bN-HX1n-0cQ&t=147)). Gíralo hasta
que los acordes bajen en el tiempo.
:::

:::checkpoint
keys16: { 1: red, 5: red, 9: red, 13: red }
hear: Los acordes laten cuatro veces por compás, bajan en cada tiempo y vuelven a subir antes del siguiente.
recover: Los trigs encendidos pero los acordes quietos: ENV está en 0. Los acordes respiran un compás y se quedan quietos tres: el bus 2 dura 64 pasos — con el bus 2 activo, [FUNC] + [PAGE], [FUNC] y [E] hasta LENGTH 16, [NO]. Trigs encendidos, ENV ajustado, y aun así nada: los propietarios cuentan que en 1.4.1 los trigs de bus pueden dejar de disparar la envolvente hasta que la máquina se reinicia ([el informe](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2569)) — guarda, apaga y enciende.
:::

## Step: Una sala para los acordes
keys: [TRK, TRIG 3, FX]
source: manual §12.8, §5.3.4
mode: playback

Mantén pulsado [TRK] y pulsa [TRIG 3]. Pulsa [FX] para la página FX 1, donde están el routing de la
pista y sus tres envíos (§12.8). Sube SND3 con el mando que tiene debajo, hasta la mitad más o
menos: los acordes siguen yendo al bus 2 como antes, y una copia de ellos va a la pista 15, la pista
de envío que tiene la reverb en un pattern nuevo (§5.3.4).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3, params: [SND1 0, SND2 0, SND3 64, "ROUT BUS2"], invert: [2] }
hear: Una cola después de cada acorde, la sala detrás de ellos; la batería y el bajo secos.
recover: Un sonido ondulante y doblado en lugar de una cola: subió SND1 — la pista 13 tiene un chorus; devuélvelo a 0 y sube SND3. Ninguna cola: la pista 15 tiene otra cosa en este pattern ([TRK] + [TRIG 15] lo muestra), o SND3 subió en el bajo — primero [TRK] + [TRIG 3].
:::

## Step: Una escena en una tecla
keys: [TRK, TRIG 9, FUNC, FX, UP, DOWN, YES, NO, RECORD, TRIG 15, TRIG 16, TRIG, D]
leds: { RECORD: red }
source: manual §10.3, §13.2, §13.6, §A.3.12
mode: grid-recording

Mantén pulsado [TRK] y pulsa [TRIG 9]. Mantén pulsado [FUNC] y pulsa [FX], pulsa [FX] otra vez para
el segundo slot, FX2, y [UP]/[DOWN] hasta LOW-PASS FILTER, [YES], [NO]. En la página FX 3, la del
filtro (§13.6), abre FREQ del todo. Pulsa [RECORD] para GRID RECORDING y pulsa [TRIG 15] y
[TRIG 16]: dos trigs en el bus 1. Pulsa [TRIG] para la página TRIG, mantén pulsado [TRIG 15] y gira
[D], PROB, hasta 0 %, y lo mismo manteniendo [TRIG 16]: ninguno de los dos sonará nunca por sí solo
(§13.2). De vuelta en la página FX 3, mantén pulsado [TRIG 15] y cierra FREQ casi del todo; mantén
pulsado [TRIG 16] y gira FREQ hacia abajo y otra vez arriba del todo, para que ese trig lleve el
filtro abierto. Ahora pulsa [TRIG 15] + [YES], primero la tecla del trig: la batería queda detrás
de un muro y se queda ahí. [TRIG 16] + [YES]: vuelve (§10.3).

:::checkpoint
keys16: { 15: red, 16: red }
hear: Con [TRIG 15] + [YES] la batería apagada y lejana bajo el bajo y los acordes, compás tras compás; con [TRIG 16] + [YES] brillante otra vez.
recover: El muro nunca se va solo: así funciona un lock en un bus — se mantiene hasta que otro trig lo cambia ([lo que cuentan los propietarios](https://www.elektronauts.com/t/tonverk-user-thread/238631/998)); [TRIG 16] + [YES] vuelve a abrir el filtro. La batería se apaga sola una vez por compás: PROB en el paso 15 no está en 0 % — mantén pulsado [TRIG 15] en la página TRIG y baja [D]. No pasa nada en absoluto: el lock fue a la página FX 2, al compresor — FREQ está en la página FX 3.
:::

## Step: Guarda
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Mantén pulsado [FUNC] y pulsa [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: La pieza enrutada: la batería comprimida, los acordes respirando en su sala, el bajo directo al mezclador.
recover: Ninguna pantalla dijo que el proyecto se había escrito: [FUNC] no estaba abajo cuando entró [SETTINGS]. Púlsalos juntos otra vez.
:::

## What you now have

El kit pasa por el bus 1, donde un compresor lo mantiene unido y un filtro paso bajo espera a que
[TRIG 15] + [YES] lo cierre y [TRIG 16] + [YES] lo abra. Los acordes pasan por el bus 2, cuyos
cuatro trigs propios los hacen respirar en cada tiempo, y mandan una copia de sí mismos a la reverb
de la pista 15. El bajo va directo al mezclador. El routing pertenece a A01, y está guardado.

## Explore further

### Reenrutar mientras suena
En ROUTING, [DOWN] hasta los buses, mantén pulsado [TRIG 10] y pulsa [KEYBOARD A1]: el bus 2 va a
OUT CD, directo a las salidas C/D, y los acordes dejan los auriculares y las salidas A/B. Sin nada
conectado a C/D, desaparecen. [TRIG 10] y LEVEL/DATA lo devuelven a MIX AB (§4.4.1).

### El orden de oído
En el bus 1, [FUNC] + [FX] y dos veces más [FX] llegan a la tercera subpágina: resalta SWAP FX1/FX2
y pulsa [YES] (§11.5.4). Ahora el filtro va antes del compresor. Dispara la escena en los dos
órdenes y quédate con el que prefieras.

### Parar la respiración con una tecla
Da a los cuatro trigs del bus 2 la condición ¬FILL (§10.10.2): los acordes respiran mientras [FILL]
está arriba y se quedan quietos mientras está pulsado.

### Silenciar el bus
[MUTE] + [TRIG 10] silencia el bus 2. Sus trigs se paran y los acordes se quedan quietos, pero
siguen sonando: silenciar un bus para su secuenciador, no el audio que pasa por él
([lo que cuentan los propietarios](https://www.elektronauts.com/t/buses-mute-question/244694/1)).

### El orden propio de la voz
Cada pista de audio pasa su sonido por un overdrive y dos filtros, en el orden que elijas:
[FUNC] + [FLTR] en la pista 3, luego [LEFT]/[RIGHT] (§11.3.1), y escucha los acordes en cada
orden.

## Next

La sesión 8 añade un pad en la pista 4 que se mueve solo, con LFOs y una envolvente de modulación
sobre el sonido.
