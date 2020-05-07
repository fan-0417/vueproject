import config from './config.js'
import axios from 'axios'
export default  (url,method='get',data)=>{
  return new Promise(async(resolve,reject)=>{
    let body = await axios({
      url: config.BASEURL + url,
      method,
      data
    })
    
    resolve(body)

    reject((err)=>{
      return err
    })
  })
}