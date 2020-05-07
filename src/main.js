import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'lib-flexible/flexible'

// 引入路由器
import router from '@/router/index'

// 引入store对象
import store from '@/store'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
