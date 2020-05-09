// cdn预加载使用
// const externals = {
//   vue: 'Vue',
//   'vue-router': 'VueRouter',
//   vuex: 'Vuex',
//   axios: 'axios',
//   'element-ui': 'ELEMENT'
// }

const cdn = {
  // 开发环境
  dev: {
    css: [
      'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    ],
    js: []
  },
  // 生产环境
  build: {
    css: [
      'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://unpkg.com/element-ui/lib/index.js'
    ]
  }
}

export const cdnConfig = (config) => {
  config.plugin('html').tap(args => {
    if (process.env.NODE_ENV === 'production') {
      args[0].cdn = cdn.build
    }
    if (process.env.NODE_ENV === 'development') {
      args[0].cdn = cdn.dev
    }
    return args
  })
}
