import {LEFTNAVLIST} from '@/store/classIfication/mutaitions_types.js'

export default {
  [LEFTNAVLIST](state,data){
    state.leftNavList = data.categoryL1List
  }
}