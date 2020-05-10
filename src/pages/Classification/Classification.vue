<template>
  <div class="classificationContainer">
    <div class="search">
      <form action="/" class="searchItem">
        <van-search
          class="searchItem"
          placeholder="请输入搜索关键词"
          input-align="center"
        />
      </form>
    </div>
    <div class="bottom">
      <div class="left" ref="leftWrap">
        <ul ref="ulWrap">
          <li @click="changeId(item.id,index)" :class=" item.id === id ? 'active': ''" v-for="(item,index) in leftList" :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="right" v-if="rightListItem" ref="rightWrap">
        <div>
          <div class="title">
            <img src="https://yanxuan.nosdn.127.net/a41ddf5b8d7921d5d09987022dd71cac.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
          </div>
          <div class="itemComtainer">
            <div class="rightItrm" v-for="(item,index) in rightListItem.categoryList" :key="index">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
</template>

<script>
  import { Search } from 'vant';
  import BScroll from 'better-scroll'
  import {LEFTNAVLIST} from '@/store/classIfication/mutaitions_types.js'
  import {mapState,mapActions} from 'vuex'
  export default {
    name: 'Classification',
    data(){
      return{
        id: 11,
        rightList: []
      }
    },
    components:{
      [Search.name]: Search
    },
    methods:{

      // 左侧导航数据
      ...mapActions([LEFTNAVLIST]),
      // 修改id
      changeId(id,index){
        this.id = id
        // console.log(index);
        // let listItem = this.$refs.ulWrap && this.$refs.ulWrap.children[index] 
        // this.leftWrap1 && this.leftWrap1.scrollToElement(listItem,300)
      }
    },
    computed:{
      ...mapState({
        leftList: state => state.classIfication.leftNavList
      }),
      rightListItem(){
        return this.rightList.find((item)=>{
          return item.id === this.id
        })
      }
    },
    async mounted(){
      this[LEFTNAVLIST]()
      // 请求右侧数据
      let body = await this.$http.classIfication.getCateLists()
      this.rightList = body
      
      this.$nextTick(()=>{
        new BScroll(this.$refs.rightWrap)
        // this.leftWrap1 = new BScroll(this.$refs.leftWrap)
      })
    }
  }
</script>

<style scoped lang="stylus">
  .search
    width 100%
    padding 0 30px
    height 88px
    box-sizing border-box
    border-bottom 1px solid #d9d9d9
    overflow hidden
    .searchItem
      text-align center
      height 56px
      background #F7F8FA
      margin-top 16px
      border-radius 20px
  .bottom
    display flex
    .left
      width 162px
      height 1150px
      padding  40px 0
      // background pink
      box-sizing border-box
      border-right 1px solid #d9d9d9
      ul
        text-align center
        position relative
        li
          margin-bottom 50px
          font-size 28px
          &.active
            position relative
            color  red
            &:after
              content ''
              width 4px
              height 40px
              position absolute
              left 0
              top -6px
              background red
    .right
      width 610px
      height 1150px
      padding 30px 30px 20px 30px
      box-sizing border-box
      overflow hidden
      .title
        display flex
        flex-wrap wrap
        width 100%
        height 192px
        margin-bottom 32px
        img 
          width 100%
          height 100%
      .itemComtainer
        display flex
        flex-wrap wrap
        .rightItrm
          text-align center
          width 144px
          height 216px
          margin-right 32px
          img 
            width 144px
        

</style>