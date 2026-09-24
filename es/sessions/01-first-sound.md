---
number: 1
chapter: rhythm
slug: first-sound
title: El primer sonido
goal: Enciende, pon un kit de batería en la pista 1, encuentra su kick en la fila de abajo, ajusta el tempo y guarda un proyecto al que puedas volver.
needs: ["El Tonverk y su fuente de alimentación", "Auriculares con jack de 1/4 de pulgada (o un mezclador en OUT A/B)", "La tarjeta SD de fábrica en su ranura", "Unos dieciséis minutos"]
teaches: [power, volume, new-project, track-select, load-preset, kit, subtrack-select, tempo, metronome, name-project, save-project]
simulator: null
ends: { keys16: { 1: white } }
---

## Step: Encendido
keys: []
source: manual §3.2, §3.3, §5.2.1
checked: yes
mode: any

Enchufa el adaptador incluido a una toma de corriente y su cable USB a cualquiera de los dos
puertos USB de la parte trasera; los dos pueden alimentar la máquina, y el tornillito junto
al puerto está para que el cable no se afloje. Pulsa POWER en el panel trasero. La pantalla se
enciende y muestra el proyecto que el Tonverk estaba usando la última vez — no hay ningún
asistente de primer arranque, y nada aquí te pide una decisión.

:::checkpoint
hear: Nada todavía. La máquina está encendida y en silencio, mostrando un proyecto que no elegiste tú.
recover: ¿No se enciende nada? El cable va en USB 1 o USB 2, y la fuente que el manual recomienda es la Elektron PSU-5 que venía en la caja (§3.2, §20). El puerto de un portátil o el cargador de un teléfono pueden no bastar.
:::

:::note
Para apagar, más tarde: pulsa POWER y luego [YES] — o pulsa POWER dos veces. Espera a que
todos los LED y la retroiluminación de la pantalla se apaguen antes de desconectar el cable.
Si la máquina deja de responder alguna vez, mantener POWER pulsado la fuerza a apagarse, y
todo lo que no esté guardado se va con ella.
:::

## Step: Los auriculares y los dos mandos de volumen
keys: [MAIN VOLUME, LEVEL/DATA]
source: manual §3.1, §6.1
checked: yes
mode: any

Conecta los auriculares a OUT E/F (HEADPHONES) en la parte trasera. Pon [MAIN VOLUME] más o
menos a un cuarto. A la izquierda de este panel hay dos mandos grandes y solo este es el nivel
de *salida*: [LEVEL/DATA] es el nivel de la pista que esté activa, y además recorre listas y
ajusta valores en todo el resto de la máquina. Por ahora, déjalo quieto.

:::note
Bajar [LEVEL/DATA] para atenuar los auriculares baja el nivel de una pista y lo deja ahí; más
tarde vuelves a subir [MAIN VOLUME] y esa pista sigue baja, sin nada en la pantalla que diga
por qué.
[Un recorrido que distingue los dos mandos](https://www.youtube.com/watch?v=lrcaoGwYL00).
:::

## Step: Un proyecto nuevo
keys: [FUNC, PRESET, UP, DOWN, YES, NO]
source: manual §9.1, §9.1.1
checked: yes
mode: menu:FILE

Mantén pulsado [FUNC] y pulsa [PRESET]: se abre el menú FILE. Ve a PROJECT con [UP]/[DOWN] y
[YES], luego NEW y [YES]. Si te pregunta si guardar el proyecto que estaba abierto, pulsa
[NO] — el proyecto de fábrica ya está en la tarjeta y no has cambiado nada en él.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
hear: Nada. Un proyecto vacío, pattern A01, ningún sonido cargado.
recover: Si en cambio se abrió una lista de proyectos, estás en LOAD y no en NEW. Pulsa [NO] una vez y elige NEW.
:::

:::note
Un proyecto nuevo no carga nada, pero el navegador de presets de los próximos pasos sigue
mostrando toda la biblioteca de fábrica. Esa es la biblioteca de la tarjeta, compartida por
todos los proyectos, no el contenido de tu proyecto — la distinción que
[este hilo](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)
existe para explicar. Nada de lo que hagas aquí dentro puede dañar el material de fábrica.
:::

## Step: Selecciona la pista 1
keys: [TRK, TRIG 1]
leds: { TRIG 1: white }
source: manual §5.3.7
checked: yes
mode: any

Mantén pulsado [TRK] y pulsa [TRIG 1]. La pista 1 es ahora la pista activa: la que describe
la pantalla, la que controla [LEVEL/DATA], la que tocará el teclado. Mantener [TRK] pulsado
importa — un [TRIG 1] a secas selecciona la pista *y* la dispara, que es una nota que no
pediste cada vez que cambias de pista.

:::checkpoint
screen: { bank: "A01", track: 1, type: "AUDIO" }
keys16: { 1: white }
hear: Nada todavía; no hay ningún sonido en la pista.
recover: La esquina inferior izquierda de la pantalla es la indicación de fiar: dice T1. Un [TRIG 1] pulsado a secas también selecciona la pista 1 — y la dispara, que es toda la diferencia.
:::

:::note
Tres partes del manual escriben esta tecla de tres maneras — [TRK] en el §5.3.7, TRACK en
el §10.3, y el procedimiento de presets del §9.1.4 pide [FUNC] y una tecla trig en su lugar.
El panel imprime TRK, y
[los propietarios confirman](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088) que
[TRK] y una tecla trig es la selección silenciosa.
:::

## Step: Carga un kit
keys: [PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §7.1, §9.1.4
checked: yes
mode: menu:LOAD PRESET

Pulsa [PRESET]. El menú LOAD PRESET se abre sobre la pista activa. [LEFT]/[RIGHT] se mueven
entre las categorías de presets, DRUMS y KEYS; quédate en DRUMS. Desplázate con [UP]/[DOWN] o
[LEVEL/DATA] hasta 017 HELLO KIT, el kit que usa la pieza de ejemplo, y pulsa [YES] para
cargarlo en la pista 1. Otro kit sirve igual: los pasos nombran las teclas de HELLO KIT, y en
el tuyo los mismos sonidos pueden estar en otras teclas.

:::checkpoint
screen: { menu: "LOAD PRESET", items: [DRUMS, KEYS], sel: 0 }
hear: Pulsa [TRIG 1] una vez. Suena uno de los sonidos del kit.
recover: Silencio: sube un poco [MAIN VOLUME], y el jack de los auriculares hasta el fondo. Si [TRIG 1] no hace ningún sonido, el preset fue a parar a otro sitio — mantén pulsado [TRK], pulsa [TRIG 1] y cárgalo otra vez.
:::

:::note
Casi todo lo que hay en DRUMS es un kit: ocho sonidos en una pista, no un solo tambor.
[Un recorrido por los kits de fábrica](https://www.youtube.com/watch?v=vWVw534Xvs4) los hace
sonar uno tras otro. No existe un preset que sea solo un kick: cargas un kit y encuentras el
kick dentro.
:::

:::note
Aquí no hay previsualización. La única manera de oír un preset es cargarlo, y cargarlo
sustituye lo que la pista tuviera.
[Las reseñas lo llaman el mata-flujo](https://www.soundonsound.com/reviews/elektron-tonverk).
Y [FUNC] + [NO] tampoco es un camino de vuelta: el deshacer es para pegados y borrados
(§10.10.5), y cargar un preset encima de otro no es ninguna de las dos cosas.
:::

:::note
Cargar un preset lo copia en el pattern (§9). A partir de ahora, un mando que gires cambia
*la copia de este pattern*, nunca el archivo de la tarjeta. Es la primera de las cinco reglas
de los contenedores; el mapa de [Antes de empezar](/before-you-start/) muestra las demás.
:::

## Step: Ocho sonidos en la fila de abajo
keys: [KEYBOARD C1, KEYBOARD D1, KEYBOARD E1, KEYBOARD F1, KEYBOARD G1, KEYBOARD A1, KEYBOARD B1, KEYBOARD C2, TRIG 1]
leds: { KEYBOARD C1: red }
source: manual §3.1, §A.2.3
checked: yes
mode: any

Pulsa la fila de abajo del teclado tecla a tecla, de [KEYBOARD C1] a [KEYBOARD C2]. Cada tecla
es un sonido del kit. El número de la pantalla sigue la tecla que has pulsado, y esa tecla se
queda en rojo: es el sonido que ahora toca [TRIG 1]. Distínguelos por dónde están y cuánto
duran. El kick es el más grave, y corto: sobre él se apoyan los demás. El snare es
un chasquido seco en mitad del registro; un clap es una palmada y a menudo ocupa el lugar del
snare. El hi-hat cerrado es el más agudo y el más breve de todos; un hi-hat abierto es igual
de agudo pero se queda sonando. Un tom es un tambor con una altura clara, y un platillo es una
larga estela metálica. En HELLO KIT el kick está en [KEYBOARD C1]: púlsalo el último, y luego
[TRIG 1].

:::checkpoint
hear: Ocho sonidos distintos, y luego el kick solo desde [TRIG 1].
recover: La fila de arriba del teclado y las teclas de octava no hacen nada mientras hay un kit en la pista; es el kit, no una avería. Si [TRIG 1] toca algo que no es tu kick, la tecla roja está en otro sitio — pulsa [KEYBOARD C1], o la tecla donde tu kit tiene el kick, y vuelve a probar.
:::

:::note
El teclado no siempre sigue la pista que acabas de elegir. Selecciona cualquier pista de la 9
a la 16 con una pista de audio activa y el [KEYBOARD] se queda en esa pista de audio anterior
(§5.3.7, §8.5), para que puedas tocar a través de un bus mientras lo retocas. A quien es
nuevo le parece una selección que no funcionó.
[Es intencionado](https://www.elektronauts.com/t/tonverk-technical-q-a/238273/1088):
selecciona una pista de audio, de la 1 a la 8, para recuperar el teclado.
:::

## Step: Ajusta el tempo
keys: [TEMPO, A, NO]
source: manual §7.5.1
checked: yes
mode: menu:TEMPO

Pulsa [TEMPO]. El mando DATA ENTRY [A] es el BPM; púlsalo mientras lo giras y se mueve de
ocho en ocho. La pieza de ejemplo va a 92. Si tienes un tempo en mente, usa ese — cualquiera
entre 80 y 100 mantiene cómodas las sesiones siguientes. [NO] vuelve a cerrar el menú.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Nada cambia todavía; el tempo aparece arriba a la derecha en la pantalla principal.
recover: Si el BPM se niega a moverse, el Tonverk está siguiendo un reloj externo. El §7.5.1 dice que la pantalla muestra "MIDI" encima del BPM; el §6 describe un icono de candado al lado. Las dos marcas significan lo mismo — desconecta por ahora la fuente de reloj MIDI o USB.
:::

## Step: Escucha el tempo
keys: [FUNC, KEYBOARD F#1, PLAY, KEYBOARD C1, STOP]
source: manual §7.5.2
checked: yes
mode: playback

Mantén pulsado [FUNC] y pulsa [KEYBOARD F#1] — su rótulo menta dice Metronome. Pulsa [PLAY]:
un clic a tu tempo. Toca el kick en [KEYBOARD C1] encima durante un minuto. Pulsa [STOP] y
luego [FUNC] + [KEYBOARD F#1] otra vez para callar el clic.

:::checkpoint
hear: Un clic a tu tempo, cuatro por compás, y tu kick encima.
recover: Sin clic: abre [TEMPO] y mira los mandos de E a H — METRO lo enciende y GAIN ajusta lo fuerte que suena. El metrónomo no tiene menú propio; vive en la mitad derecha del menú del tempo.
:::

## Step: Ponle nombre al proyecto
keys: [FUNC, PRESET, LEFT, RIGHT, UP, DOWN, LEVEL/DATA, YES]
source: manual §9.1.1, §6.7
checked: yes
mode: menu:NAMING

Mantén pulsado [FUNC] y pulsa [PRESET] para el menú FILE otra vez, luego PROJECT y SAVE AS.
Se abre una pantalla NAMING: [LEFT]/[RIGHT] se mueven entre los caracteres, [LEVEL/DATA] o
[UP]/[DOWN] eligen uno, y mantener pulsado [FUNC] saca todas las letras, cifras y símbolos a
la vez, para que puedas elegir con las flechas. Llámalo SIXTEEN, o como quieras siempre que lo
reconozcas, y pulsa [YES].

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Nada cambia. El proyecto, su pattern y tu kit están ahora en la tarjeta con un nombre que elegiste tú.
recover: Si acabas en algún sitio sin pantalla NAMING, elegiste SAVE en vez de SAVE AS. [NO] sale; SAVE AS es el que pide un nombre y ocupa un slot nuevo. En la propia pantalla del nombre, [FUNC] + [NO] borra una letra y [FUNC] + [YES] inserta un espacio.
:::

## Step: El hábito de guardar
keys: [FUNC, SETTINGS, NO]
source: community https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370
checked: yes
mode: any

Mantén pulsado [FUNC] y pulsa [SETTINGS] — el rótulo menta dice Save Proj. Nada te pregunta
nada. Ni nombre, ni confirmación, ni lista: el proyecto vuelve directo a su propio slot con
el nombre que acabas de darle, y estás otra vez en la pantalla principal. Hazlo ahora, para
que la primera vez que veas ese silencio sea una vez en la que lo esperabas.

:::checkpoint
screen: { bank: "A01", tempo: 92, track: 1, type: "SUBTRACKS" }
hear: Nada de nada. Ese silencio es el paso: el proyecto está en la tarjeta, con el nombre que le diste.
recover: Si en cambio se abrió un menú de ajustes, pulsaste [SETTINGS] sin [FUNC]. Pulsa [NO], mantén pulsado [FUNC] primero y luego pulsa [SETTINGS]. Si no estás seguro de que se haya guardado, abre el menú FILE, PROJECT, LOAD: tu nombre está en la lista.
:::

:::note
La trampa es la ausencia de aviso. Los propietarios pulsan [FUNC] + [SETTINGS], no ven
ninguna pantalla de nombre y concluyen que no se guardó nada
([un hilo de propietarios dándose cuenta](https://www.elektronauts.com/t/create-new-empty-project-no-samples-inside-my-own-name-how/238370)).
El §9.1.1 le da a la combinación una sola tarea — escribe lo que estés trabajando de vuelta al
slot del que vino — y el nombre es cosa de SAVE AS, que ya has hecho. Puede que veas un breve
aviso en pantalla mientras se escribe la tarjeta; el §9.1.1 nunca lo menciona, y los
propietarios con este OS
[han pedido que desaparezca](https://www.elektronauts.com/t/os-upgrade-tonverk-os-1-4-0/254824).
No lo esperes.
:::

:::note
En esta máquina no existe el guardado de pattern, ni un botón de guardado rápido para uno.
Un pattern vive dentro del proyecto y llega a la tarjeta solo cuando se guarda el proyecto.
Nada más cuenta: el modo PERFORM no es un guardado, la memorización temporal es un punto de
restauración provisional que muere al apagar (§10.10.6), y una cadena no se guarda nunca.
[FUNC] + [SETTINGS] es el único hábito; adquiérelo ahora.
:::

## What you now have

Un proyecto llamado SIXTEEN con un pattern, A01, un kit de batería en la pista 1 — HELLO KIT,
con su kick encontrado en [KEYBOARD C1] — y un tempo de 92. Está guardado, así que puedes apagar aquí: la próxima sesión parte de este
estado. Si te quedaste con tu propio nombre o tu propio tempo, la próxima sesión funciona
igual.

## Explore further

### Marca el tempo
Mantén pulsado [FUNC] y da cuatro toques a [TEMPO] a tempo. A partir del cuarto toque, la
media se convierte en el BPM, y se sigue actualizando mientras sigas tocando.

### Nudge
Con el secuenciador en marcha, mantén pulsado [LEFT] o [RIGHT] en la pantalla principal: el
tempo baja o sube un diez por ciento hasta que sueltes. Esto es para cuadrarte con un disco
u otra máquina, no para componer, y no necesitas el menú del tempo abierto para hacerlo.

### Filtra la lista de presets
Abre [PRESET] y pulsa [LEFT] otra vez, más allá de las categorías: se abre un menú SORTING
con CATEGORY, TAGS y una SEARCH de texto, y los tres se suman en vez de sustituirse
([FUNC] + [NO] borra una búsqueda). Esto se
[añadió en el OS 1.4.0](https://www.elektron.se/release-notes/tonverk-os-release-notes) y es
la diferencia entre un navegador y un desplazamiento.

### La otra categoría
Recorre KEYS, carga algo y toca el teclado: un preset de KEYS es un solo sonido en todo el
teclado, la fila de arriba y las teclas de octava incluidas. Luego vuelve a cargar HELLO KIT.
Cargar sustituye la pista las dos veces — solo cambia la copia del pattern, y la tarjeta sigue
teniendo los dos presets exactamente como estaban.

### Otros kits
Carga algunos kits más de DRUMS y toca la fila de abajo de cada uno. Las teclas siguen siendo
las mismas; lo que hay en ellas cambia de un kit a otro, y tu oído es el único mapa. Vuelve a
cargar HELLO KIT cuando termines, o quédate con el kit que te gustó y recuerda dónde están su
kick, el snare, el hi-hat cerrado y el clap.

### El mando de nivel
[LEVEL/DATA] ajusta el nivel de la pista activa, y la pantalla lo muestra abajo a la derecha
mientras lo giras. Ahora que sabes lo que hace, deja de ser el mando que misteriosamente baja
las cosas.

## Next

La sesión 2 escribe el beat de un compás sobre el que se apoya toda la pieza, en esta misma
pista, un sonido del kit cada vez. Antes, diez minutos en
[Antes de empezar](/before-you-start/) explican los cinco contenedores que toca un guardado y
los cuatro tipos de pista.
