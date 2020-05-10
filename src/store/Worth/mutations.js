import {NAVLIST} from '@/store/Worth/mutaitions_types.js'

export default {
  [NAVLIST](state,data){
    state.navList = data.navList
  }
}