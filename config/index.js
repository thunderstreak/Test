const buildConfig = require('./build')
const ENV = process.env.NODE_ENV
const production = 'production'
// const development = 'development'
const isProduction = ENV === production

let mergeConfig
if (isProduction) {
  mergeConfig = buildConfig
} else {
}

module.exports = mergeConfig
