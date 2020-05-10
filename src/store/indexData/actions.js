import http from '@/http'

import {GETINDEXCATELIST,POLICYDESCLIST} from '@/store/indexData/mutaitions_types.js'
export default {
  // 主页导航数据
  async [GETINDEXCATELIST]({commit}){
    let body = await http.home.getIndexCateList()
    // console.log(body);
      commit(GETINDEXCATELIST,body)
  },

  // 主页数据
  async [POLICYDESCLIST]({commit}){
    let body = await http.home.getIndex()
      commit(POLICYDESCLIST,body)
  },

 
}