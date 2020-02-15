const nums = []
const quantity = Math.pow(10, 7)
console.log('TCL: quantity', quantity)
for (let index = 0; index < quantity; index++) {
  nums.push(index)
}

/**
 * Código Bloqueante
 * Lo es porqué tiene que esperar hasta que acabe la ejecución antes de mostrar el código.
 */
function square(arr) {
  const result = []
  arr.forEach(el => result.push(el * el))

  return result
}

console.time('blocking-time')
const result = square(nums)
console.log('TCL: 1 no me va imprimir de inmediato')
console.log('TCL: 2 result[last]', result[quantity - 1])

console.timeEnd('blocking-time')
