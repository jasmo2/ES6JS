# Async Programming

Javascript no es un lenguaje de programación que se bloquea, por el contrario es un lenguaje pensado en la asyncronisidad

## ¿Qué es asyncrono?

Lo que significa asincrono es que la el programam NO se va a quedar esperando la respuesta.

Sino que en un momento futuro (el cual **_NO_** sabemos) volverá a para escuchar el resultado.

## ¿Como manejamos la asyncronía en JS?

En Javascript existen 3 tipos de tecnicas para manejar los llamados asincronos.

- Callbacks
- Promises - Promesas
- _async_ / _await_

## Callbacks

Los **Callbacks** son funciones que son pasadas como argumentos a otras funciones. Esto es para que se ejecuten cuando el resultado esté listo y pueda retornar.

##### EJ

[./callback.js](./callback.js)

En los ejemplos podemos apreciar un las diferencias entre código bloqueante y el asyncrono-Callbacks

aquí notamos que la forma de escribir uno y otro es diferente.

#### Ahora ustedes

[./Exercises/1-callback.js](./Exercises/1-callback.js)

##### Async/Exercices/1-callback.js

## Promesas

En realidad las promesas están contruidas sobre los mismos _Callbacks_ por eso la importancía de entender estos de primero.

Una Promesa aparte de que haga que se vea más sequencial el código también.
Una de las formas más comunes donde se encuentran las promesas son en los llamados HTTP.

Adicionalmente de las promesas que ya vienen defindas en los llamados web. También hay una forma de crearlos

##### EJ

[./promises.js](./promises.js)

[./advance-promises/promises-advance.js](./advance-promises/promises-advance.js)

#### Ahora ustedes - Promesas

[./Exercises/2-promises.js](./Exercises/2-promises.js)

## Async/await

**Async/await** es una nueva caracteristica introducida para lidiar con llamados asincronos, dando la apariencia de que es un código sequencial.

Esto fué copiado de otros lenguages de programación, ya que lo implementaban desde antes que JS lo tuviera en su CORE

Y como ustedes Ya saben promesas. Esta caracteristica está construido sobre _promesas_

#### EJ

[./async-await.js](./async-await.js)

#### Ahora ustedes - async\await

Es mucho más facíl entonces a darle!
[./Exercises/3-async-await.js](./Exercises/3-async-await.js)
