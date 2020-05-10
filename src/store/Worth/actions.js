import http from '@/http'
import {NAVLIST} from '@/store/Worth/mutaitions_types.js'

export default {
  async [NAVLIST]({commit}){
    let {code,data} = await http.Worth.zhidemailist()
    // console.log(data);
    if(code === '200'){
      commit(NAVLIST,data)
    }
  }
}