import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@styles/index.less'
import '@utils'
import '@config'
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
