export default {
  name:"",
  // baseUrl:"http://localhost:4000",
  api:{
    getIndexCateList:{
        url:"/getIndexCateList", // 主页导航数据
        method:"get",
        corsUrl:"/api"
      },
      getIndex:{
        url: 'getIndex',  // 主页数据
        method: 'get',
        corsUrl:"/api"
      }


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
