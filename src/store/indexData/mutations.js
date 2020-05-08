import {GETINDEXCATELIST,POLICYDESCLIST} from '@/store/indexData/mutaitions_types.js'

export default {
  [GETINDEXCATELIST](state,data){
    state.list = data
  },
  [POLICYDESCLIST](state,data){
    state.homeData = data
    state.hotClass = data.categoryHotSellModule.categoryList.splice(2,10)
  },
  
}