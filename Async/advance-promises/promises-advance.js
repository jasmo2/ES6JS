let promiseCount = 0

function testPromise() {
  let thisPromiseCount = ++promiseCount

  let log = document.getElementById('log')
  log.insertAdjacentHTML(
    'beforeend',
    `<h5>${thisPromiseCount}) Started (Sync code started)</h5>`
  )

  // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
  let p1 = new Promise(
    // The executor function is called with the ability to resolve or
    // reject the promise
    (resolve, reject) => {
      log.insertAdjacentHTML(
        'beforeend',
        `<h5>${thisPromiseCount}) Promise started (Async code started)</h5>`
      )
      // This is only an example to create asynchronism
      window.setTimeout(() => {
        // We fulfill the promise !
        resolve(thisPromiseCount)
      }, Math.random() * 2000 + 1000)
    }
  )

  // We define what to do when the promise is resolved with the then() call,
  // and what to do when the promise is rejected with the catch() call
  p1.then(
    // Log the fulfillment value
    val => {
      log.insertAdjacentHTML(
        'beforeend',
        `<h4>${val}) Promise fulfilled (Async code terminated)</h4>`
      )
    }
  ).catch(
    // Log the rejection reason
    reason => {
      console.log('Handle rejected promise (' + reason + ') here.')
    }
  )

  log.insertAdjacentHTML(
    'beforeend',
    `<h5> ${thisPromiseCount}) Promise made (Sync code terminated)</h5>`
  )
}

const button = document.getElementById('btn')
button.onclick = e => {
  e.preventDefault()
  console.log('TCL: onclick')

  testPromise()
}
