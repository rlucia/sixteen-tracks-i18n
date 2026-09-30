---
number: 6
chapter: sound
slug: notes-and-harmony
title: Notas y armonía
goal: Pon una bassline y cuatro acordes bajo el beat tocando cuatro teclas dos veces, y deja que el arpegiador y el modo acordes hagan el resto.
needs: ["El proyecto de la sesión 5", "Auriculares conectados", "Unos dieciséis minutos"]
teaches: [track-select, load-preset, play-mode, octave, page-setup-per-track, chord-scale, live-recording, arpeggiator, chord-mode, pattern-transpose]
simulator: null
ends: { keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green } }
---

## Step: Dónde estás
keys: [PLAY, FUNC, SETTINGS]
source: manual §9.1.1, §10.1.2
mode: grid-recording

La sesión 5 dejó A01 cambiando de un loop a otro en la pista 1, en GRID RECORDING sobre el
subtrack del snare. Si el secuenciador está parado, pulsa [PLAY]. Mantén pulsado [FUNC] y pulsa
[SETTINGS] antes de añadir nada: en esta sesión se llenan las pistas 2 y 3, y el guardado es el
suelo bajo las dos.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
keys16: { 5: red, 13: red, 14: red, 15: red, 16: red }
hear: El beat de la sesión 5 dando vueltas: el pickup un loop sí y otro no, las ghost notes jugándose su sitio. Cinco teclas encendidas en la tira — el snare en 5 y 13 y los tres snares del fill después.
recover: ¿Empiezas aquí sin la sesión 5? Esa sesión escribe el pattern sobre el que suena esta, y dura unos dieciséis minutos; también vale cualquier pattern con un beat en la pista 1 y nada en las pistas 2 y 3.
:::

## Step: Un bajo en la pista 2
keys: [TRK, TRIG 2, PRESET, RIGHT, UP, DOWN, YES]
leds: { TRIG 2: white }
source: manual §5.3.7, §9.1.4, §7.3
mode: menu:LOAD PRESET

Mantén pulsado [TRK] y pulsa [TRIG 2]: la pista 2 es la pista activa. Pulsa [PRESET], [RIGHT]
hasta KEYS, [UP]/[DOWN] hasta ⟨bass preset⟩, y [YES] para cargarlo — o cualquier preset de KEYS
cuyas notas más graves sean redondas y cortas. Luego toca la fila de abajo. En la pista 1 esas
teclas eran los ocho sonidos del kit; aquí cada una toca el mismo sonido a otra altura, y la fila
de arriba, muda en el kit, toca las notas intermedias (§7.3).

:::note
La misma lista abierta desde el menú FILE, [FUNC] + [PRESET], sigue abierta después de cada carga,
y probar varios presets es más rápido ([el camino de un propietario](https://www.elektronauts.com/t/tonverk-tips-tricks/238162/606)).
:::

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 1 }
hear: El beat sigue debajo. Cada tecla de la fila de abajo toca una nota grave del bajo, más aguda de izquierda a derecha.
recover: Si de las teclas salen los sonidos del kit, la pista activa sigue siendo la 1 — mantén [TRK], pulsa [TRIG 2] y carga otra vez. Una lista con solo kits es DRUMS: [RIGHT] una vez más.
:::

## Step: Una voz, una octava más abajo
keys: [FUNC, TRIG, UP, DOWN, LEFT, RIGHT, NO, -]
source: manual §11, §11.1.1, §8.5
mode: menu:TRACK SETUP

Mantén pulsado [FUNC] y pulsa [TRIG]: TRACK SETUP se abre en su página TRIG (§11). [UP] y [DOWN]
recorren sus líneas; PLAY MODE es la primera. Ponla en MONO con [LEFT]/[RIGHT] y pulsa [NO]: ahora
una nota nueva corta la anterior, una nota cada vez (§11.1.1). Luego pulsa [-] una vez. El teclado
baja una octava, y el punto encendido junto a [+] y [-] pasa de 0 a −1 (§8.5).

:::checkpoint
screen: { menu: "TRACK SETUP", items: ["PLAY MODE MONO", "MONO NOTE PRIO", "REUSE VOICES", "PORTAMENTO", "LOOP MODE", "OCTAVE"], sel: 0 }
hear: Mantén una tecla y pulsa otra: la primera se calla. Cada tecla suena una octava más grave que antes.
recover: Dos notas a la vez: PLAY MODE sigue en POLY — otra vez [FUNC] + [TRIG]. La altura no baja: [-] fue a un menú que seguía abierto; púlsalo con la pantalla principal a la vista.
:::

## Step: Cuatro compases para el bajo
keys: [FUNC, PAGE, YES, E, NO]
source: manual §10.9, §10.9.1, §10.9.2
mode: menu:PAGE SETUP

Mantén pulsado [FUNC] y pulsa [PAGE]. PAGE SETUP se abre en PER PATTERN, donde todas las pistas
comparten una longitud (§10.9.1). Mantén [FUNC] y pulsa [YES] para PER TRACK, donde LENGTH
pertenece solo a la pista activa (§10.9.2). Mantén [FUNC] y gira [E]: LENGTH avanza de dieciséis
en dieciséis pasos — para en 64, cuatro compases. [NO] cierra el menú. La pista 1 conserva sus 16,
así que el kit da la vuelta en cada compás mientras la pista 2 tiene cuatro por llenar.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Nada nuevo todavía: la longitud solo hace sitio. En la pantalla principal, cuatro cuadraditos para las cuatro páginas de la pista 2.
recover: Si el kit también tiene cuatro cuadraditos, el menú seguía en PER PATTERN cuando LENGTH se movió: [FUNC] + [PAGE], [FUNC] + [YES] para PER TRACK, y luego con la pista 1 activa ([TRK] + [TRIG 1]) devuelve LENGTH a 16. Si LENGTH avanza paso a paso, [FUNC] no está pulsado mientras giras [E].
:::

## Step: Dale una tonalidad al pattern
keys: [CHORD, NO]
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Pulsa [CHORD]: CHORD/SCALE SETUP, una imagen de lo que toca el teclado (§8.5.1). Con el mando bajo
cada ajuste, pon ROOT en A, SCALE en AEOLIAN (MINOR) y GUIDE en LIGHT, y luego pulsa [NO]. El
ajuste pertenece al pattern, no a una pista. En la pista 2 se encienden ahora las teclas de La
menor: toda la fila de abajo y ninguna de la de arriba — La menor son las teclas blancas.

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD OFF"] }
hear: En el sonido no cambia nada. La fila de abajo encendida, la de arriba apagada.
recover: Ninguna tecla encendida: GUIDE sigue en OFF. Una tecla que toca otra nota distinta de la pulsada: GUIDE está en SNAP, que mueve una tecla fuera de la escala a la más cercana dentro de ella — LIGHT solo muestra.
:::

## Step: Cuatro fundamentales, tocadas en directo
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red }
source: manual §10.4
mode: live-recording

Pulsa [STOP]. Mantén pulsado [RECORD] y pulsa [PLAY]: cada pista arranca desde su primer paso, y
LIVE RECORDING está activado, con [RECORD] parpadeando en rojo (§10.4). Mantén enseguida
[KEYBOARD A1], durante un compás — contando hasta cuatro —, luego [KEYBOARD F1] para el segundo
compás, [KEYBOARD C1] para el tercero y [KEYBOARD G1] para el cuarto. Pulsa [STOP] al terminar el
cuarto compás, y luego [PLAY] para escucharlo.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 2 }
hear: Bajo el beat, cuatro notas largas y graves, una por compás: La, Fa, Do, Sol, y otra vez desde el principio.
recover: Una nota que se corta antes de acabar su compás se soltó demasiado pronto. Una nota tocada en directo conserva la duración con que se mantuvo, y girar LEN en su trig no la cambia ([lo descubrieron unos propietarios](https://www.elektronauts.com/t/trig-len-not-working/249623/8)): mantén [FUNC], pulsa [NO] para deshacer y toca otra vez las cuatro. La primera nota va con la pulsación de [PLAY], no un pulso después.
:::

## Step: El arp escribe la línea
keys: [ARP, H, LEFT, RIGHT, E, DOWN, FUNC, NO]
leds: { ARP: cyan }
source: manual §9.4, §9.4.5, §9.4.6
mode: menu:ARPEGGIATOR

Pulsa [ARP] con la pista 2 activa: el menú ARPEGGIATOR (§9.4). Gira [H] hasta ARP LENGTH 8
(§9.4.6). [LEFT] y [RIGHT] eligen uno de los ocho pasos y [E] fija su desplazamiento, en semitonos
desde la nota del trig (§9.4.5): el paso 1 se queda en 0, luego +12, +7, el paso 4 silenciado con
[DOWN], 0, +7, el paso 7 silenciado, +12. Mantén [FUNC] y pulsa [ARP] para encender el arpegiador.
[NO] sale del menú; fuera de él, [ARP] sigue encendido en cian mientras la pista 2 esté activa.

:::note
Los desplazamientos cuentan desde la nota de cada trig, así que una sola figura empieza en La en el
primer compás, en Fa en el segundo, y luego en Do y Sol. 0, +2, +7 y +12 se quedan en La menor
sobre las cuatro fundamentales; +3 encaja sobre La pero no sobre Fa, Do o Sol.
:::

:::checkpoint
screen: { menu: "ARPEGGIATOR", items: ["MODE", "SPEED", "N.LEN", "OFFSET", "ARP LENGTH 8"] }
keys16: { 1: green, 2: green, 3: green, 5: green, 6: green, 8: green }
hear: Las cuatro notas largas se convierten en una línea en movimiento, ocho pasos cortos y otra vez, que salta a la nueva fundamental en cada compás. En el menú, seis teclas trig encendidas en verde y dos apagadas: los pasos silenciados.
recover: Sigue una sola nota larga: el arpegiador está apagado — MODE dice OFF, o [ARP] está apagado fuera del menú: [FUNC] + [ARP]. La línea se corta antes del final del compás: la nota de debajo es corta, y el arp solo suena mientras dura la nota de su trig (paso 6). Una nota desafinada: un desplazamiento distinto de 0, +2, +7 o +12.
:::

## Step: Acordes en la pista 3
keys: [TRK, TRIG 3, PRESET, RIGHT, UP, DOWN, YES, FUNC, PAGE, E, NO]
leds: { TRIG 3: white }
source: manual §9.1.4, §10.9.2
mode: menu:LOAD PRESET

Mantén pulsado [TRK] y pulsa [TRIG 3]. Pulsa [PRESET], [RIGHT] hasta KEYS, [UP]/[DOWN] hasta
⟨chord preset⟩, y [YES] — o cualquier sonido de KEYS que mantenga su nota mientras la tecla esté
pulsada. Luego mantén [FUNC], pulsa [PAGE], mantén [FUNC] y gira [E] hasta LENGTH 64 para la pista
3, y pulsa [NO]. El menú sigue en PER TRACK, y cada pista conserva su propia longitud.

:::checkpoint
screen: { menu: "PAGE SETUP", items: [PER TRACK, "LENGTH 64", "SPEED 1"], sel: 1 }
hear: Una tecla de la fila de abajo mantiene una nota del nuevo sonido mientras la mantienes; la bassline y el beat siguen.
recover: LENGTH dice 16 después de [NO]: la pista 2 seguía activa cuando se abrió el menú — [TRK] + [TRIG 3], y luego otra vez [FUNC] + [PAGE].
:::

## Step: Una tecla, un acorde
keys: [CHORD, NO, FUNC, KEYBOARD A1]
leds: { CHORD: cyan }
source: manual §8.5.1
mode: menu:CHORD/SCALE SETUP

Pulsa [CHORD], pon SHAPE en 1-3-5 con el mando de debajo, y pulsa [NO]. Mantén [FUNC] y pulsa
[CHORD]: el modo acordes está activado, [CHORD] encendido en cian. Pulsa [KEYBOARD A1]: tres notas a
la vez, La menor. Cada tecla toca el acorde de La menor que empieza en ella — [KEYBOARD F1] Fa
mayor, [KEYBOARD C1] Do mayor, [KEYBOARD G1] Sol mayor (§8.5.1).

:::checkpoint
screen: { menu: "CHORD/SCALE SETUP", items: ["ROOT A", "SCALE AEOLIAN (MINOR)", "GUIDE LIGHT", "CHORD ON", "SHAPE 1-3-5"], sel: 4 }
hear: Una tecla, tres notas: La menor, y luego Fa, Do y Sol mayor desde las otras tres teclas.
recover: Una sola nota por tecla: el modo acordes está apagado, [CHORD] oscuro. El Fa suena menor: SCALE está en CHROMATIC, donde el mismo tipo de acorde se estampa en cada tecla — vuelve a ponerla en AEOLIAN (MINOR).
:::

## Step: Cuatro acordes, tocados en directo
keys: [STOP, RECORD, PLAY, KEYBOARD A1, KEYBOARD F1, KEYBOARD C1, KEYBOARD G1]
leds: { RECORD: red, CHORD: cyan }
source: manual §10.4, §8.5.1
mode: live-recording

El gesto del paso 6, en la pista 3: pulsa [STOP], mantén [RECORD] y pulsa [PLAY], y luego mantén
[KEYBOARD A1], [KEYBOARD F1], [KEYBOARD C1] y [KEYBOARD G1], un compás cada una desde el primer
pulso. [STOP] al terminar el cuarto compás, y luego [PLAY].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: La menor, Fa, Do, Sol, un acorde por compás, sobre la bassline.
recover: Un acorde cortado se soltó demasiado pronto; como en el paso 6, mantén [FUNC] y pulsa [NO] para deshacer, y toca otra vez los cuatro — cada acorde dura lo que se mantuvo su tecla. Sus notas quedan escritas en el trig como notas simples, así que se conserva lo que oyes.
:::

## Step: Modo acordes apagado
keys: [FUNC, CHORD, TRK, TRIG 1, KEYBOARD C1]
source: community https://www.elektronauts.com/t/tonverk-tips-tricks/238162/334
mode: playback

Mantén pulsado [FUNC] y pulsa [CHORD]: [CHORD] se apaga. El modo acordes es un solo interruptor
para todo el pattern, kit incluido — si se queda encendido, una tecla del kit dispara varios de sus
sonidos a la vez. Los cuatro acordes se quedan: ahora son notas en los trigs. Mantén [TRK], pulsa
[TRIG 1] y pulsa [KEYBOARD C1].

:::checkpoint
hear: El kick solo desde [KEYBOARD C1], y los acordes que siguen sonando en la pista 3.
recover: El kick llega con otros sonidos de la batería: [CHORD] sigue encendido — mantén [FUNC] y pulsa [CHORD].
:::

## Step: Otra tonalidad, y vuelta
keys: [PTN, +, -]
source: manual §10.10.8
mode: playback

Mantén [PTN], pulsa [+] tres veces y suelta [PTN]: la bassline y los acordes suben tres
semitonos, a Do menor, y el kit se queda donde estaba (§10.10.8). Escucha unos compases. Luego
mantén [PTN], pulsa [-] tres veces y suelta: de vuelta en casa, en La menor. Las notas de los trigs
nunca cambiaron; la transposición va por encima de ellas.

:::note
Unos propietarios lo probaron en el OS 1.4.0: una pista con la máquina Subtracks no se transpone
([la prueba](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824/107)).
:::

:::checkpoint
hear: La armonía más aguda y más brillante, la batería igual; luego la pieza como estaba.
recover: La batería también se ha movido: la pista 1 no está en la máquina Subtracks. Sigue más aguda tras tres pulsaciones de [-]: compara lo que oyes con el La — tres semitonos por debajo del Do está el La.
:::

## Step: Guarda
keys: [FUNC, SETTINGS]
source: manual §9.1.1
mode: any

Mantén pulsado [FUNC] y pulsa [SETTINGS].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 3 }
hear: A01 tal como está ahora: el beat, la bassline, cuatro acordes.
recover: Ninguna pantalla dijo que el proyecto se había escrito: [FUNC] no estaba pulsado cuando entró [SETTINGS]. Púlsalos otra vez juntos.
:::

## What you now have

La pista 2 toca una bassline que nunca se escribió nota a nota: cuatro fundamentales, una por
compás, y una figura de ocho pasos que el arpegiador construye sobre cada una. La pista 3 toca La
menor, Fa, Do y Sol, cuatro acordes desde cuatro teclas. El kit sigue dando la vuelta en cada
compás bajo cuatro compases de armonía, el pattern vuelve a estar en La menor, y todo está
guardado.

## Explore further

### Un bajo que se desliza
En la misma página de TRACK SETUP, pon PLAY MODE en MONO LEG y activa PORTAMENTO (§11.1.1,
§11.1.5); su tiempo está en TRIG PAGE 2 (§12.3). Dos notas se deslizan una en otra cuando la primera
dura más allá del inicio de la segunda; las notas separadas por un hueco siguen atacando limpias.

### Dados para el arp
Primero memoriza el pattern: mantén [FUNC] y pulsa [KEYBOARD D#1] (§10.10.6). En el menú
ARPEGGIATOR, [ARP] + [YES] sortea todos los ajustes a la vez, y [E] pulsado con [YES] sortea solo
los desplazamientos (§9.4). Quédate con una tirada que te guste, o mantén [FUNC] y pulsa
[KEYBOARD C#1] para volver atrás.

### Un acorde rasgueado
En STEP EDIT cada nota de un acorde conserva su propio micro timing: mueve las notas de arriba un
poco más tarde que la más grave, y el acorde entra rodando desde abajo en lugar de caer en bloque
([aquí se ve](https://www.youtube.com/watch?v=lrcaoGwYL00&t=2400)).

### Otra inversión
El modo acordes toca cada acorde desde su fundamental hacia arriba. [STEP EDIT] sobre el trig de un
acorde muestra sus notas en el teclado: una tecla encendida pulsada quita esa nota, una apagada
pulsada la añade, y [+] y [-] alcanzan la octava de arriba o de abajo (§10.3.1).

### El kit con el modo acordes
Vuelve a encender el modo acordes, selecciona la pista 1 y pulsa una tecla del kit: varios de sus
sonidos salen de la misma tecla. Antes de guardar, otra vez [FUNC] + [CHORD].

## Next

La sesión 7 sigue al sonido fuera de las pistas: la batería por un bus con un compresor, los
acordes a una reverb, y el menú ROUTING que los une.
