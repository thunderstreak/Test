const path = require('path')
const resolve = dir => path.join(__dirname, dir)

export const baseConfig = (config) => {
  // 路径别名
  config.resolve.alias
    .set('@src', resolve('src'))
    .set('@styles', resolve('src/styles'))
    .set('@utils', resolve('src/utils'))
    .set('@config', resolve('src/config'))
    .set('@components', resolve('src/components'))
    .set('@store', resolve('src/store'))
}
