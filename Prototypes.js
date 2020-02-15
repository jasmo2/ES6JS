const Dog = function(breed, size) {
  this.breed = breed
  this.size = size
}

Dog.prototype.woff = function() {
  return `${this.nombre} Wof `
}

//¿Qué pasa Aquí?

const chiguaguaInstanse = new Dog('chiguagua', 'xs')
console.log('TCL: chiguaguaInstanse.woff', this.woff())

// Crear un prototipo de Object-Person que reciba 2 parametros
// Y tenga una función en el prototipo el cual retorno el nombre completo
