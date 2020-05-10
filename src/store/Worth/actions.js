import http from '@/utils/http'
import {NAVLIST} from '@/store/Worth/mutaitions_types.js'

export default {
  async [NAVLIST]({commit}){
    let {status,data} = await http('/zhidemailist')
    // console.log(data);
    if(status === 200){
      commit(NAVLIST,data.data)
    }
  }
}