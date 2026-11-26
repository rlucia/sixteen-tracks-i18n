---
number: 8
chapter: sound
slug: modulation
title: Modulación
goal: "Mantén un acorde durante cuatro compases en la pista 4 y haz que se mueva solo con moduladores: un filtro que se abre y se cierra con el pattern, un sitio nuevo entre izquierda y derecha en cada vuelta, una inflexión al entrar cada acorde, y una reverb que deriva con un reloj propio."
needs: [El proyecto de la sesión 7, Auriculares conectados, "Unos dieciséis minutos"]
teaches: [lfo, lfo-speed, lfo-modes, play-mode, mod-envelope, fx-lfo, modulation-destinations, mod-overview]
simulator: modulation
ends: { keys16: { 1: red } }
---

## Step: Dónde estás
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1
mode: playback

La sesión 7 dejó A01 enrutado: el kit comprimido en el bus 1, los acordes respirando en el bus 2
y dentro de la reverb de la pista 15, el bajo directo al mezclador, y el bus 1 como pista activa.
Si el secuenciador está parado, pulsa [PLAY]. Mantén pulsado [FUNC] y pulsa [SETTINGS] antes de
que la pista 4 tenga un sonido: en esta sesión entra en ella un acorde, y no vuelve a cambiar.
Todo lo que se mueve después es un modulador.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 9 }
hear: La pieza como la dejó la sesión 7: la batería compacta en su bus, los acordes bajando en cada tiempo con una sala detrás, la bassline debajo de los dos.
recover: ¿Empiezas aquí sin la sesión 7? Esa sesión enruta la pieza, y dura unos dieciséis minutos; también vale cualquier pattern con acordes en la pista 3 y nada en la pista 4, siempre que la pista 15 conserve la reverb que tiene en un pattern nuevo.
:::

## Step: Un pad en la pista 4
keys: [TRK, TRIG 4, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 4: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Mantén pulsado [TRK] y pulsa [TRIG 4]. Pulsa [PRESET], [RIGHT] hasta KEYS, [UP]/[DOWN] hasta
063 OXY GEN, y [YES] — o cualquier sonido de KEYS que aguante mientras su tecla esté pulsada y
que entretanto se quede quieto. Luego mantén [FUNC], pulsa [PAGE], mantén [FUNC] y gira [E] hasta
LENGTH 64 para la pista 4, y pulsa [NO]. El menú sigue en PER TRACK, así que el kit conserva su
único compás (§10.9.2). Mantén una tecla de la fila de abajo durante cuatro compases y escúchala.

:::note
Un preset que ya se mueve trae una modulación propia. La tecla de una página de parámetros,
mantenida junto con [PLAY], devuelve esa página a sus valores de partida (§12.1): [MOD] recorre
las cinco páginas MOD, y [MOD] + [PLAY] en cada una deja el sonido quieto.
:::

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Con la tecla mantenida, una nota dura los cuatro compases y nada se mueve dentro de ella; el beat, la bassline y los acordes siguen debajo.
recover: La nota se apaga antes de que acaben los cuatro compases: este preset no aguanta — elige otro. LENGTH ya decía 64 cuando se abrió el menú: es la de otra pista — [TRK] + [TRIG 4], y luego otra vez [FUNC] + [PAGE].
:::

## Step: Un acorde, cuatro compases
keys: [+, RECORD, TRIG 1, KEYBOARD E1, KEYBOARD A1, TRIG, C]
leds: { RECORD: red }
source: manual §8.5, §10.3, §10.3.1, §12.2
mode: grid-recording

Pulsa [+] hasta que el punto encendido junto a [+] y [-] esté en 0. La sesión 6 puso el teclado
en −1 y los acordes se tocaron ahí, así que ahora las teclas suenan una octava por encima (§8.5).
Pulsa [RECORD] para GRID RECORDING y pulsa [TRIG 1]: un trig. Mantén pulsado [TRIG 1] y pulsa
[KEYBOARD E1] y [KEYBOARD A1]: las dos notas ocupan el lugar de la del trig (§10.3.1). Pulsa
[TRIG] para la página TRIG, mantén otra vez [TRIG 1] y gira [C], LEN, hasta 64 pasos (§12.2):
ahora el acorde dura todo el pattern. Una nota puede durar hasta 128 pasos
([lo que cuentan los propietarios](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/147)).
Pulsa [RECORD] para salir de GRID RECORDING.

:::checkpoint
keys16: { 1: red }
hear: Mi y La juntos, desde el primer tiempo del compás 1 hasta que el loop da la vuelta, por encima de los cuatro acordes y afinados con cada uno.
recover: El pad gruñe debajo de los acordes, o roza con el segundo: está una octava abajo — [+] hasta que el punto esté en 0, luego [RECORD], mantén [TRIG 1] y pulsa otra vez las dos teclas. Una nota en lugar de dos: las teclas entraron sin [TRIG 1] mantenido. El otro camino, desde la reproducción: [STEP EDIT], luego [TRIG 1], que se pone verde; ahí una tecla apagada añade su nota y una encendida la quita, así que pulsa hasta que solo estén encendidas [KEYBOARD E1] y [KEYBOARD A1], y luego otra vez [STEP EDIT] (§10.3.1). Un acorde de un solo paso aunque LEN diga 64: le pasó a un propietario en 1.4.1 ([el informe](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2588)) — baja LEN y vuelve a subirlo a 64.
:::

## Step: LFO 1, de oído
keys: [FLTR, MOD, E, H, D, YES]
source: manual §12.12
mode: playback

Pulsa [FLTR] y lleva FREQ, con el mando que tiene debajo, más o menos a la mitad: un LFO suma su
profundidad alrededor del valor propio del parámetro, así que el filtro necesita sitio hacia los
dos lados. Pulsa [MOD] hasta que la página sea la del LFO 1 (§12.12). Gira [E], WAVE, hasta TRI,
el triángulo, y [H], DEP, hasta unos 40. Luego gira [D], DEST: se abre una lista sobre la página, y
cada línea se oye mientras está resaltada. Baja despacio y escucha lo que el LFO le hace a cada
parámetro. Párate en FLTR:Frequency y pulsa [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST FLTR FREQ", "WAVE TRI", SPH, MODE, "DEP 40"], invert: [3, 4] }
hear: El pad se aclara y se oscurece solo, a un ritmo que no tiene nada que ver con los compases.
recover: La mitad de cada sweep no hace nada: FREQ está en un extremo — [FLTR], y FREQ a la mitad. No se mueve nada: DEP está en 0, o la lista se cerró con [NO], que deja el destino que había.
:::

## Step: Cuatro compases de largo
keys: [A, B]
source: manual §12.12, §12.16
mode: playback

Gira [A], SPD, hasta 8 y [B], MULT, hasta BPM 4. Un ciclo de un LFO dura 2048 ÷ (SPD × MULT)
pasos de su pista (la tabla que sigue al §12.16): 2048 ÷ 32 son 64, los cuatro compases del
pattern. En MODE FREE un LFO sigue el tempo y no hace caso de [PLAY] ni de [STOP]: sigue
corriendo mientras el secuenciador está parado
([lo cuenta un tester](https://www.elektronauts.com/t/experiencing-some-massive-lfo-confusion/256117/9)).

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 8", "MULT BPM 4", FADE, "DEST FLTR FREQ", "WAVE TRI", SPH, "MODE FREE", "DEP 40"], invert: [0, 1] }
hear: Una subida y una bajada duran ahora los cuatro acordes, y el sweep empieza en otro punto en cada [PLAY].
recover: Un sweep más o menos el doble de largo que los cuatro compases: en 1.4.1 un multiplicador puesto por primera vez puede ir lento hasta que se sale del pattern y se vuelve a entrar ([el informe](https://www.elektronauts.com/t/tonverk-bug-reports/238306/2636)) — mantén [PTN] y pulsa [TRIG 2], espera a que suene A02, luego mantén [PTN] y pulsa [TRIG 1]. El sweep ya empieza siempre en el mismo punto: MODE no está en FREE, y el paso 6 lo pone.
:::

## Step: Desde el principio
keys: [G, FUNC, TRIG, LEFT, RIGHT, NO, STOP, PLAY]
source: manual §12.12, §11.1.1
mode: menu:TRACK SETUP

Gira [G], MODE, hasta TRIG: ahora cada trig de nota reinicia el LFO, y el pad tiene uno, en el
paso 1 (§12.12). Mantén pulsado [FUNC] y pulsa [TRIG]: TRACK SETUP, con PLAY MODE como primera
línea. Ponla en POLY M.LFO con [LEFT]/[RIGHT] y pulsa [NO]. En POLY cada una de las dos notas
lleva un LFO propio; en POLY M.LFO comparten uno (§11.1.1). Pulsa [STOP], luego [PLAY]: el sweep
empieza con el compás 1.

El simulador de abajo empieza con estos ajustes, con los moduladores de los pasos 7 a 9 ya en su
sitio. Pon sus trigs de nota en uno en cada compás: el LFO 1 se reinicia a los dieciséis pasos de
cada sweep y nunca termina ninguno. Es un solo trig, de cuatro compases, lo que deja que el sweep
llegue hasta el final. Luego pulsa su [STOP], luego [PLAY]: el LFO 1 empieza donde empezó; el FX
LFO 1, que el paso 9 deja en FREE, no, y al LFO 2 le tocan valores nuevos.

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE POLY M.LFO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: El sweep empieza con el compás 1 en cada vuelta, y otra vez después de cada [STOP] y [PLAY].
recover: Un sweep que empieza en cualquier parte: MODE sigue en FREE. Las dos notas se separan, una clara mientras la otra está oscura: PLAY MODE sigue en POLY.
:::

:::simulator

## Step: Un sitio nuevo en cada vuelta
keys: [MOD, E, G, D, YES, H]
source: manual §12.13
mode: playback

Pulsa [MOD] hasta que la página sea la del LFO 2: los mismos ocho mandos (§12.13). Gira [E],
WAVE, hasta RND y [G], MODE, hasta HOLD: la onda aleatoria corre sin verse, y cada trig de nota
retiene el valor que tiene en ese momento, hasta el trig siguiente (§12.12). Gira [D], DEST, hasta
AMP:Pan y pulsa [YES], y luego [H], DEP, hasta unos 40.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: [SPD, MULT, FADE, "DEST AMP PAN", "WAVE RND", SLEW, "MODE HOLD", "DEP 40"], invert: [3, 4, 6] }
hear: Cada cuatro compases el pad está en otro sitio entre izquierda y derecha, y se queda ahí hasta que el acorde vuelve a empezar.
recover: El pad vaga a izquierda y derecha sin descanso: MODE no está en HOLD. Las dos notas caen en dos sitios: PLAY MODE está en POLY (paso 6). Siempre justo en el centro: DEP está en 0.
:::

## Step: Una inflexión al entrar cada acorde
keys: [MOD, G, YES, H, A, B, C]
source: manual §12.14
mode: playback

Pulsa [MOD] otra vez: la página de la envolvente de modulación (§12.14). Gira [G], DEST, hasta
SRC:Tune y pulsa [YES]. Pon [A], ATK, en 0, [B], DEC, corto, y [C], SUS, en 0, y luego gira [H],
DEP, un poco por debajo de cero. La envolvente se dispara una vez en cada trig de nota y luego se
acaba: tiene un principio y un final, donde un LFO da vueltas.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["ATK 0", DEC, "SUS 0", REL, RSET, "", "DEST SRC TUNE", DEP], invert: [6] }
hear: Cada vez que empieza el acorde entra un punto bajo de afinación y se asienta, una sola vez.
recover: El pad se queda bajo durante todo el acorde: SUS está por encima de 0. Entra alto: DEP está por encima de cero. Ninguna inflexión: la lista se cerró sin [YES], o DEP está en 0.
:::

## Step: La sala con su propio reloj
keys: [FX, MOD, D, YES, E, A, B, H]
source: manual §12.8, §12.15
mode: playback

Pulsa [FX] para la página FX 1 y sube SND3 con el mando que tiene debajo, hasta la mitad más o
menos, como en los acordes de la sesión 7 (§12.8): el pad llega a la reverb de la pista 15. Pulsa
[MOD] hasta que la página sea la del FX LFO 1 (§12.15). Gira [D], DEST, hasta Send 3 Amount y
pulsa [YES]: un FX LFO llega a los efectos de la pista y a sus envíos, no a la voz (el Apéndice B
del manual los enumera). Gira [E], WAVE, hasta TRI, [A], SPD, hasta 6, [B], MULT, hasta BPM 4 y
[H], DEP, hasta unos 30, y comprueba que MODE diga FREE. Un ciclo son 2048 ÷ 24 = 85⅓ pasos: más
largo que el pattern, y nada lo reinicia.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4, params: ["SPD 6", "MULT BPM 4", FADE, DEST, "WAVE TRI", SPH, "MODE FREE", "DEP 30"], invert: [0, 1, 4, 7] }
hear: El pad se va metiendo en la sala y vuelve a salir, más lento que el filtro y nunca acompasado con él.
recover: Ningún Send 3 Amount en la lista: la página es la del LFO 1, la del LFO 2 o la de la envolvente, y esos solo llegan a la voz — [MOD] hasta que salga el FX LFO 1. Ninguna sala: SND3 subió en otra pista (primero [TRK] + [TRIG 4]), o la pista 15 tiene otra cosa en este pattern. La sala tarda más o menos el doble en dar la vuelta: el fallo del multiplicador del paso 5, con la misma salida.
:::

## Step: Dieciséis compases, manos fuera
keys: [FUNC, MOD, NO]
source: manual §11.6
mode: playback

Mantén pulsado [FUNC] y pulsa [MOD]: un dibujo de qué llega a qué en esta pista, los dos LFO y la
envolvente a SRC, FLTR y AMP, los FX LFO a los efectos. En él no se ajusta nada; eso lo hacen las
páginas MOD (§11.6). Pulsa [NO]. Luego quita las manos de la máquina durante cuatro vueltas del
pattern, dieciséis compases.

:::checkpoint
hear: El filtro hace el mismo viaje en cada vuelta. El panorama se reparte de nuevo en cada una. La inflexión marca cada comienzo. La sala vuelve a encontrarse con el filtro solo después de dieciséis compases.
recover: La sala y el filtro suben y bajan juntos: el SPD del FX LFO 1 también está en 8 — [MOD] hasta que salga el FX LFO 1, y [A] a 6.
:::

## Step: Guarda
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Mantén pulsado [FUNC] y pulsa [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 4 }
hear: La pieza con su pad: un acorde que nunca cambia, y cuatro moduladores que lo mueven.
recover: Ninguna pantalla dijo que el proyecto se había escrito: [FUNC] no estaba abajo cuando entró [SETTINGS]. Púlsalos juntos otra vez.
:::

## What you now have

La pista 4 tiene un solo trig: Mi y La, de cuatro compases. Lo mueven cuatro moduladores. El LFO 1
abre y cierra el filtro una vez por vuelta y empieza con el compás 1. El LFO 2 le da al pad un
sitio nuevo entre izquierda y derecha en cada vuelta. La envolvente de modulación dobla el
comienzo de cada acorde. El FX LFO 1 mueve el envío a la reverb con un reloj de 85⅓ pasos, que se
encuentra con los 64 del filtro cada dieciséis compases. Está guardado con la pieza.

## Explore further

### Un modulador sobre un modulador
En la página del LFO 2 gira DEST más allá de AMP:Pan, pasadas las líneas de AMP, hasta la
profundidad del LFO 1, y pulsa [YES]: el LFO 2 y la envolvente pueden llegar a los ajustes del
LFO 1 (el Apéndice B del manual). Ahora cada vuelta mueve el filtro una cantidad distinta.

### La velocity mueve cuatro mandos
[FUNC] + [TRIG], baja hasta VELOCITY MOD, y [YES]: de [A] a [D] se eligen hasta cuatro
parámetros, [YES] los confirma, y de [E] a [H] se fija cuánto se mueve cada uno (§11.1.10). La
VEL del trig del acorde es entonces una mano sobre los cuatro. Pon antes VELOCITY TO VOL en OFF,
en [FUNC] + [AMP] (§11.4.1), o un acorde suave es también un acorde bajo de volumen
([lo que cuentan los propietarios](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/616)).
[FUNC] + [PLAY] vacía la página (§11.1).

### Un pad que sabe en qué registro está
En el mismo menú, KEY TRACKING también admite hasta cuatro parámetros (§11.1.9). Dale
FLTR:Frequency con una profundidad positiva y toca la fila de abajo de izquierda a derecha: cada
tecla es más clara que la anterior.

### Dados sobre una página
Guarda primero. En la página del LFO 2, [MOD] + [YES] da a cada mando de la página un valor
nuevo, distinto en cada pulsación, y [MOD] + [PLAY] devuelve la página a sus valores de partida
(§12.1). El paso 7 la vuelve a poner.

### Otro segundo reloj
Pon el SPD del FX LFO 1 en 8: la sala se mueve con el filtro, vuelta tras vuelta. Ponlo en 5: los
dos se encuentran cada 32 compases. El simulador del paso 6 da la cuenta para cualquier pareja de
ajustes.

## Next

La sesión 9 samplea la propia pieza: un loop de un compás de la mezcla, puesto en la pista 5.
