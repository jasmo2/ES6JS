/**
 * Con el API de Github pedir el usuario de github usando promesas
 * he imprimirlo por consola el nombre del usuario
 *
 * `node Async/Exercises/3-await`
 */

// HINT: usar FETCH de JS para el llamado al API
// https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait

/**
 * 
 * 

 fetch("https://api.github.com/users/jasmo2")
.then(respose => {
  //console.log("response :", respose)
  return respose.json()
})
.then(data => {
 console.log("Github Username",data.login)
})

 */

const fetch = require('node-fetch')
const githubUser = ''
const url = `https://api.github.com/users/${githubUser}`
