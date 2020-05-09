export const prod = 'prod'
export const test = 'test'

let baseUrl
switch (process.env.VUE_APP_ENV) {
  case test:
    baseUrl = 'http://www.test.com'
    break
  case prod:
    baseUrl = 'https://www.prod.com'
    break
  default:
    baseUrl = window.location.origin
}

export default baseUrl
