<template>
  <div class="bg">
    <div class="searchContainer">
      <van-search 
        class="search" 
        v-model="keyWord" 
        v-if="hotList.defaultKeywords" 
        :placeholder="hotList.defaultKeywords[0].keyword" 
        @input="searchKword"
        @search="onSearch"
      />
      <span class="cancel" @click="goBack">取消</span>

      <div class="hotSerch" v-if="!keyWord && searchHistoryList.length">
        <p>历史记录</p>
        <i @click="deleteList" class=" delete1 iconfont icon-del"></i>
        <ul class="hotList">
          <li v-for="(item,index) in searchHistoryList" :key="index">
            {{item}}
          </li>
        </ul>
        <v-line class="line"></v-line>
      </div>
      
      <div class="searchList" v-if="keyWord">
        <ul>
          <li class="searchItem" v-for="(item,index) in keyList" :key="index">
            <div class="text">
              {{item}}
              <span>＞</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="hotSerch" v-if="!keyWord">
        <p>热门搜索</p>
        <ul class="hotList">
          <li :class="item.highlight === 1 ? 'active' : ''" v-for="(item,index) in hotList.hotKeywordVOList" :key="index">
            {{item.keyword}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { Search } from 'vant';
  import PubSub from 'pubsub-js'
  import Line from '@/components/line/line.vue'
  import local from '@/util/local.js'
  let timer = null
  export default {
    name: 'Search',
    data(){
      return{
        hotList: {}, //热门搜索列表
        keyWord: '',
        keyList: [],
        searchHistoryList: [],
      }
    },
    components:{
      [Search.name]:Search,
      'v-line': Line
    },
    async mounted(){
      
      
      let {code,data} = await this.$http.search.getHotList()
      // console.log(data)
      if(code === '200'){
        this.hotList = data
      }
      this.searchHistoryList = local.get('searchList',[])
    },
    methods:{
      goBack(){
        this.$router.back()
        // this.$bus.$emit('idx',3)
        PubSub.publish('searchId',3)

      },
      searchKword(){
        clearInterval(timer)
        timer = setTimeout(async()=>{
          let {code,data} = await this.$http.search.searchKword({keywordPrefix:this.keyWord})
          // console.log(data);
          if(code === '200'){
            this.keyList = data
          }
          timer = null
        },500)
      },
      onSearch(){
        let searchHistoryList = this.searchHistoryList
        searchHistoryList.unshift(this.keyWord)
        let n = [];//一个新的临时数组
        //遍历当前数组
        for(let i=0; i<searchHistoryList.length; i++){
          //如果当前数组的第i已经保存进了临时数组，那么跳过，
          //否则把当前项push到临时数组里面
          if(n.indexOf(searchHistoryList[i]) == -1){
            n.push(searchHistoryList[i]);
          }
        }
        this.searchHistoryList = n
        local.set('searchList',n)
      },


      deleteList(){
        this.searchHistoryList = []
        local.remove('searchList')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .bg
    background #eee
    width 100%
    height 100%
    .searchContainer
      position relative
      width 100%
      box-sizing border-box
      padding 0 30px
      overflow hidden
      background #fff
      padding-bottom 20px
      .search
        width 85%
        height 64px
        margin-top 20px
        border-radius 20px
        background #F7F8FA
      .cancel
        position absolute
        top 30px
        right 30px
        font-size 28px
      .hotSerch
        position relative
        .delete1
          position absolute
          top 0
          right 0
        p
          margin-top 50px
          margin-bottom 30px
          color #666
        .hotList
          display flex
          flex-wrap wrap
          li
            padding 5px
            border 1px solid #999
            color #333
            margin 0 30px 30px 0
            &.active
              color red
              border 1px solid #f00
          .line
            position relative
            width 100%
      .searchList
        .searchItem 
          position relative
          height 100px
          line-height 120px
          border-bottom 1px solid #eeeeee
          .text
            font-size 30px
            span 
              position absolute
              top 50%
              right 0
              transform translateY(-40%)
              font-size 40px
              color #333

</style>