/**
 * Veremos que el Código aquí es mucho más "normal"
 * como estamos acostumbrados ya que todas las promesas
 * se resuelven tras banbalinas
 */

function server3SecondsResponse() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`resolved ${Math.random() * 10}`)
    }, 2000)
  })
}

async function asyncCall() {
  console.log('calling')
  let result = await server3SecondsResponse()
  console.log('TCL: asyncCall -> result 1', result)
  result = await server3SecondsResponse()
  console.log('TCL: asyncCall -> result 2', result)
  result = await server3SecondsResponse()
  console.log('TCL: asyncCall -> result 3', result)
  result = await server3SecondsResponse()
  console.log('TCL: asyncCall -> result 4', result)
}

asyncCall()
