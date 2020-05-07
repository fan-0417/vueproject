<template>
  <div class="homeContainer">
    <div class="top">
      <img src="@/static/imgs/logo.jpg" alt="">
      <div class="searchContainer">
        <i class="iconfont icon-search"></i>
        <input class="search"/>
      </div>
      <van-button plain  type="default" class="login">登录</van-button >
    </div>
    <!-- nav区域 -->
    <div class="navContainer" ref="navContainer">
      <div class="nav">
        <div @click="changeIdx(0)" class="navitem" :class="0 === idx ? 'active' : ''">
          <span>推荐</span>
        </div>
        <div @click="changeIdx(index+1)" class="navitem" v-for="(item,index) in list" :key="index" :class="index+1 === idx ? 'active' : ''">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="huapingContainer" ref="huapingContainer" style="height:545px; overflow: hidden;">
      <div>
        <!-- 轮播区域 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/b31d102f53aca8590919c4eef56c06d1.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/ee856ce5b451dbdeab78abffce195957.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/a16ac18c02bb26755dbcac1911631aa0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/6569149eeece0e39b9b38554570235da.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/bf2d7fc620ef5fc52c06bfff18a93024.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/bdf62c937dfdf6090b1fc611b9081ce8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination count"></div>
        </div>

        <!-- s三个图标区域 -->
        <div class="policyDescList">
          <div class="policyDescItem"  v-for="(item,index) in homeData.policyDescList" :key="index">
            <img :src="item.icon" alt="">
            <span>{{item.desc}}</span>
          </div>
        </div>

        <!-- kingKongList -->
        <div class="kingKongList" v-if="homeData.kingKongModule">
          <div class="kingkongItem" 
            v-for="(item,index) in homeData.kingKongModule.kingKongList"
            :key="index"
            >
            <img :src="item.picUrl">
            <span>{{item.text}}</span>
          </div>
          
        </div>

        <!-- 抗议图片 -->
        <div class="kangyi">
          <img src="../../static/imgs/kangyi.gif" alt="">
        </div>

        <!-- 线 -->
        <v-line></v-line>

        <!-- 新人专享 -->
        <div class="peopleEnjoy">
          <p class="title">新人专享礼包</p>
          <div class="bottom">
            <div class="left">
              <p>新人专享礼</p>
              <img src="@/static/imgs/15元.png" alt="">
            </div>
            <div class="right">
              <div class="Welfare">
                <h3>福利社</h3>
                <span>今日特价</span>
                <img src="" alt="">
              </div>
              <div class="bottom">

              </div>
            </div>
          </div>
        </div>



        


      </div>
    </div>

  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import {Button} from 'vant';
  import http from '@/utils/http'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {GETINDEXCATELIST,POLICYDESCLIST} from '@/store/indexData/mutaitions_types.js'
  import 'swiper/css/swiper.min.css'
  import V_Line from '@/components/line/line.vue'
  export default {
    name: 'Home',
    components:{
       [Button.name]:Button,
       'v-line': V_Line
    },
    data(){
      return{
        idx : 0,   //nav区域下边框显示标识
      }
    },
    computed:{
      // nav区域数据
      ...mapState({
        list: state => state.indexData.list
      }),
      // nav区域数据
      ...mapState({
        homeData: state => state.indexData.homeData
      })
    },
    async mounted(){
      this[GETINDEXCATELIST]()
      this[POLICYDESCLIST]()
      
      this.$nextTick(()=>{
        let navContainer = this.$refs.navContainer
        let huapingContainer = this.$refs.huapingContainer
        new BScroll(navContainer,{scrollY:false,scrollX:true,click:true})
        new BScroll(huapingContainer,{click:true})
      })

      this.swiper()

      
    },
    methods:{
      //  nav导航数据
      ...mapActions([GETINDEXCATELIST]),
      // 主页数据
      ...mapActions([POLICYDESCLIST]),
      changeIdx(idx){
        // console.log(idx)
        this.idx = idx
      },
      swiper(){
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }) 
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .homeContainer
    width 100%
    // height 1238px
    // overflow hidden
    padding-top 150px
    .top
      position fixed
      left 0
      top 0
      display flex
      align-items center
      padding  16px 30px
      img 
        width 138px
        height 40px
        margin-right 20px
      .searchContainer
        position relative
        width 440px
        height 56px
        background #ededed
        border-radius 50px
        .search
          box-sizing border-box
          width 440px
          height 56px
          background #ededed
          padding-left 50px
        .iconfont
          position absolute
          left 10px
          top 12px
      .login
        margin-left 10px
        color red
        border: 2px solid red
        border-radius 10px
        white-space nowrap
    .navContainer
      width 100%
      height 60px
      position fixed
      left 0
      top 80px
      .nav
        // width 100%
        // position fixed
        // left 0
        // top 80px
        height 60px
        padding-left 30px
        display inline-block
        // display flex
        // align-items center
        white-space nowrap
        .navitem
          display inline-block
          height 60px
          line-height 60px
          margin 0 20px
          &.active
            border-bottom 4px solid #f00
          span 
            font-size 28px
            padding 0 10px
    .swiper-container
      margin-top 4px
      width 100%
      height 296px
      img
        width 100%
        height auto
        margin-top -40px
    .policyDescList
      width 100%
      height 72px
      padding 0 20px
      display flex
      .policyDescItem
        display flex
        align-items center
        flex 1
        img 
          width 32px
          height 32px
        span 
          margin-left 8px
    .kingKongList
      width 100%
      height 341px
      padding-bottom 32px
      display flex
      flex-wrap wrap
      .kingkongItem
        width 20%
        display flex
        flex-direction column
        align-items center
        img 
          width 110px
        span 
          margin-top 10px
    .kangyi
      width 100%
      height 240px
      img
        width 100%
        height 100%
    .peopleEnjoy
      width 100%
      height 527px 
      background pink
      padding 0 30px
      box-sizing border-box
      .title
        position relative
        width 100%
        height 90px
        text-align center
        line-height 90px
        font-size 32px
        &:after
          content ''
          position absolute
          width 24px
          height 3px
          background #000
          left 30%
          top 50%
        &:before
          content ''
          position absolute
          width 24px
          height 3px
          background #000
          right 30%
          top 50%
      .bottom
        width 100%
        display flex
        .left
          width 49%
          height 434px
          background #F9E9CF
          margin-right 1px
          p
            padding 30px 0 0 30px
            font-size 32px
          img
            width 285px
            height 257px
            margin: 42px 37px
        .right
          width 49%
          height 434px
          padding 20px 0 0 30px
          box-sizing  border-box
          float right
          background yellow

</style>