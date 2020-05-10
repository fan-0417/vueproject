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
      <span class="cancel" @click="goMorth">取消</span>

      <div class="hotSerch" v-if="!keyWord && searchHistoryList.length">
        <p>历史记录</p>
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
        searchHistoryList: []
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
    },
    methods:{
      goMorth(){
        this.$router.replace('/Worth')
        // this.$bus.$emit('changeId',2)
        PubSub.publish('idx',3)

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
          // local.set('history',this.keyWord)
          this.searchHistoryList.unshift(this.keyWord)
          let body = this.searchHistoryList.filter((item)=>{
            return item !== this.keyWord
          })
          // console.log(body);
          
          
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