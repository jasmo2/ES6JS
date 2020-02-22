/**
 * Promesas
 * aquí veremos como cambia de manera significativa la forma de programar
 *
 * Vemos que la promesa tiene 2 argumentos que recibe
 * resolve
 * reject
 *
 * Estos 2 argumentos son los que se ejecutarán cuando el código esté terminado y no
 */
const getRnd = () => Math.floor(Math.random() * (100 - 1 + 1))

console.log('TCL: 1º new Promise')
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.

  console.log('TCL: 2º myFirstPromise')

  const good = getRnd()
  console.log('TCL: good', good)
  setTimeout(() => {
    resolve('Success!')
  }, good)

  const bad = getRnd()
  console.log('TCL: bad', bad)
  setTimeout(() => {
    reject('BAD :(')
  }, bad)
})

console.log('TCL: 3º myFirstPromise')
myFirstPromise
  .then(successMessage => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log('4-Aº Yay! ' + successMessage)
  })
  .catch(errMsg => {
    console.log('4-Bº Bad boy' + errMsg)
  })

console.log('END of the program')

// Ejemplo avanzado
// ./advance-promises.js
