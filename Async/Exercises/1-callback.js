function fibonacci(num) {
  if (num <= 1) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}

/**
 * Tienendo la función de fibonacci recursiva.
 * ¿Como podríamos hacer para que sea asyncrona?
 */

callbackFibo(result => console.log(`TCL: el resultado de fibo es ${result}`))
console.log('TCL: Después de la función')
