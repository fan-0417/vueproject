import {LEFTNAVLIST} from '@/store/classIfication/mutaitions_types.js'
import http from '@/http'
export default {
  async [LEFTNAVLIST]({commit}){
    let data = await http.classIfication.getCateNavList()
    // console.log(data);
      commit(LEFTNAVLIST,data)
  }
}