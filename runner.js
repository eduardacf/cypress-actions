const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc1ZDZmYTEyLTk2MzQtNGQzZC04ZmQ3LWZmNmI0ZmM5YWM4NS0xNjk5Nzk2MTUzNTI4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNmQ3NmZmOTUtNWE0Yy00NGVlLWEzZWUtMmUyYWJhOGM2MWE3IiwidHlwZSI6InQifQ.qB2pXSc7dJdbPPtWiMNv_b2EJu18uOo-Aa3rVkvikcU'
cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
