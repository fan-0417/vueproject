export default {
  name:"",
  // baseUrl:"http://localhost:4000",
  api:{
    getHotList:{
        url:"/xhr/search/init.json", // 搜索列表数据
        method:"get",
        corsUrl:"/163"
      },

    searchKword:{
        url:"/xhr/search/searchAutoComplete.json", // 搜索列表数据
        method:"post",
        corsUrl:"/163",
        isForm:true
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
