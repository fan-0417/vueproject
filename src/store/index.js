import Vue from 'vue'
import Vuex from 'vuex'

import indexData from './indexData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    indexData
  }
})

