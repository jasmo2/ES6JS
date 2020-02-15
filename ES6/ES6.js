/**
 * Ecma script 6
 **/

/**
 * Variables y diferencias
 */

// Let es de alcance de bloque y evita problemas
// if (true) {
//   var a = 5
//   let b = 6
// }

// console.log(a) // 5
// console.log(b) // undefined

/**
 * También evita redefinición de las variables
 * */

// var c = 5
// var c = 6 // no sale error

// let d = 5
// let d = 6 // error!

/**
 * Iterpolation
 * Antiguamente se tenía que usar un string y luego sumarlo a la variable
 * ahora es más simple
 */

// const i = 1
// const j = 2
// console.log(`TCL: i+j= ${i + j}`)

/**
 * Arrow function
 * Son funciones anonimas que no necesitan nombre y pueden tener varios
 * argumentos o ninguno.
 * */

// const tada = () => {
//   console.log('TCL: tada -> tada')
// }
// tada()

// const tadaFor = name => {
//   console.log(`TCL: tada -> tada for ${name}`)
// }
// tadaFor('Santiago')

/**
 * Spread Syntax
 * La idea de esta syntaxys es que pueda recibir multiples argumentos y
 * no haya necesidad de escribirlos todos en el siguiente ejemplo
 * veremos como recibe los argumentos cuando se usa.
 */

// const sumIt = (...args) => {
//   console.log('TCL: SumIt -> args', args)
//   let result = 0

//   for (const num of args) {
//     console.log('TCL: sumIt -> num', num)
//     result += num
//   }

//   console.log('TCL: sumIt -> result', result)
//   return result
// }

// sumIt(1, 9, 8, 6)

/**
 * Destructuring
 * la destructuración es un metodo cuando recibimos información y
 * queremos ser más concisos en en las resupuesta
 */

// const result = { a: 1, b: 2, c: 3, d: 4 }
// const { a, b, ...rest } = result
// console.log('TCL: a', a)
// console.log('TCL: b', b)
// console.log('TCL: rest', rest)

/**
 * Classes
 * directamente reemplaza a Prototipos
 */

// class Rectangle {
//   constructor(length, width) {
//     this.length = length
//     this.width = width
//   }

//   getArea() {
//     return this.length * this.width
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side)
//   }
// }
