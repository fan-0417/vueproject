import http from '@/utils/http'


import {GETINDEXCATELIST,POLICYDESCLIST} from '@/store/indexData/mutaitions_types.js'
export default {
  // 主页导航数据
  async [GETINDEXCATELIST]({commit}){
    let {status,data} = await http('/getIndexCateList')
    if(status === 200){
      commit(GETINDEXCATELIST,data)
    }
  },

  // 主页数据
  async [POLICYDESCLIST]({commit}){
    let {status,data} = await http('/getIndex')
    if(status === 200){
      commit(POLICYDESCLIST,data)
    }
  }
}