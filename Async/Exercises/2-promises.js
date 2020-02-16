/**
 * Dado la siguiente cadena de Strings
 * ponerlas en mayusculas y cada uno hacerlo
 * una promesa.
 *
 * cuando todas las promesas se cumplan
 * imprimirlos todos
 */

// Hint: Buscar Promise.all
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const animals = ['sariguella', 'vaca', 'iguana', 'peresoso']
const promisesAnimals = animals.map(animal => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(animal.toUpperCase())
    }, 1000)
  })
  return promise
})

Promise.all(promisesAnimals).then(promisedAnimals => {
  console.log('TCL: promisedAnimals', promisedAnimals)
})
