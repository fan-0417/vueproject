import Vue from 'vue'
import Vuex from 'vuex'

import indexData from './indexData'
import classIfication from './classIfication'
import Worth from './Worth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    indexData,
    classIfication,
    Worth
  }
})

