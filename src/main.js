import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import 'amfe-flexible'
import '@src/styles/index.less'
import '@src/utils'
import '@src/config'

FastClick.attach(document.body) // 使用 fastclick

Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    eventHub: new Vue()
  }
})

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
