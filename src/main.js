import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'lib-flexible/flexible'

// 引入路由器
import router from '@/router/index'

// 引入store对象
import store from '@/store'

// 引入http请求工具
import http from '@/http'
Vue.prototype.$http = http

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
