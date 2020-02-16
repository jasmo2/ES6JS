/**
 * Con el API de Github pedir el usuario de github usando promesas
 * he imprimirlo por consola el nombre del usuario
 *
 * `node Async/Exercises/3-await`
 */

// HINT: usar FETCH de JS para el llamado al API
// https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait

const fetch = require('node-fetch')
const githubUser = 'jasmo2'
const url = `https://api.github.com/users/${githubUser}`

async function githubFetch() {
  const res = await fetch(url)
  const json = await res.json()

  const userName = json.name
  console.log('TCL: githubFetch -> userName', userName)
}

githubFetch()
