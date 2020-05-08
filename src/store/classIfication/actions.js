import http from '@/utils/http'
import {LEFTNAVLIST} from '@/store/classIfication/mutaitions_types.js'

export default {
  async [LEFTNAVLIST]({commit}){
    let {status,data} = await http('/getCateNavList')
    // console.log(body);
    if(status === 200){
      commit(LEFTNAVLIST,data)
    }
  }
}