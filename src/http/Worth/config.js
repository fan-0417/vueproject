export default {
  name:"",
  // baseUrl:"https://m.you.163.com",
  api:{
    getList:{
        url:"/topic/v1/find/recAuto.json", 
        method:"get",
        corsUrl:"/163"
      },
      zhidemailist:{
        url:"/zhidemailist", 
        method:"get",
        corsUrl:"/api"
      },
      
      getWaterfallFirst:{
        url:"/getWaterfallFirst", 
        method:"get",
        corsUrl:"/api"
      },
      


    //   autoLogin:{
    //       url:"/auto_login",
    //       method:"get",
    //       corsUrl:"/4000",
    //       token:()=>{
    //           return local.get("ele-token")
    //       }
    //   }
  }
}
