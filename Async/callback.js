const nums = []
const quantity = Math.pow(10, 7)
console.log('TCL: quantity', quantity)
for (let index = 0; index < quantity; index++) {
  nums.push(index)
}

/**
 * Callback
 * aquí se muestra como hacer para que elcodigo NO se bloquee aun con la ejecución.
 */

function callbackSquare(cb) {
  setTimeout(() => {
    const result = square(nums)
    cb(result)
  }, 0)
}

function square(arr) {
  const result = []
  arr.forEach(el => result.push(el * el))

  return result
}

console.time('callback-time')
callbackSquare(result => {
  console.log('TCL: 1 result[last]', result[quantity - 1])
  console.log('TCL: 2 increhible NO se bloqueo y me arrojó el resultado')
})

console.log('TCL: 3 Impresión imedatamente después de Callback')

console.timeEnd('callback-time')
