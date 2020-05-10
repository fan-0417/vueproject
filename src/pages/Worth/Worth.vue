<template>
  <div>
    <div class="header">
      <div class="home" @click="goHome()">
        <i class="iconfont icon-shouye"></i>
      </div>
      <span>值得买</span>
      <div class="search">
        <i class="iconfont icon-search"></i>
      </div>
      <div class="cart">
        <i class="iconfont icon-cart"></i>
      </div>
    </div>
    <div class="content" ref="contentContainer">
      <div>
        <div class="top">
           <div class="bg">
            <img class="bgImg" src="@/static/imgs/bg.png" alt="">
          </div>
          <img class="zhidemai" src="@/static/imgs/zhidemai.png" alt="">
          <p>严选好物,用心生活</p>

          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in navList" :key="index">
                <img :src="item.picUrl" alt="">
                <span class="bold">{{item.mainTitle}}</span>
                <span>{{item.viceTitle}}</span>
              </div>
              
            </div>

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
        <!-- 瀑布流 -->
        <div class="masonry">
          <div class="column">
            <div v-for="(item,index) in waterfallFirst" :key="index">
              <div class="item" v-if="index % 2 === 0">
                <img :src="item.topics[0].picUrl" alt="">
                <div class="text">{{item.topics[0].title}}</div>
                <v-line class="line"></v-line>
                <div class="info">
                  <img class="user" :src="item.topics[0].avatar" alt="">
                  <span>{{item.topics[0].nickname}}</span>
                  <img class="look" src="@/static/imgs/yan.png" alt="">
                  <span class="num">{{Math.floor(item.topics[0].readCount/1000)}}K</span>
                </div>
                <div class="buy" v-if="item.topics[0].buyNow">
                  <div class="text2">{{item.topics[0].buyNow.itemName}}</div>
                  <div class="text1">去购买&gt;</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="column">
            <div v-for="(item,index) in waterfallFirst" :key="index">
              <div  class="item" v-if="index % 2 === 1">
                <img :src="item.topics[0].picUrl" alt="">
                <div class="text">{{item.topics[0].title}}</div>
                <v-line class="line"></v-line>
                <div class="info">
                  <img class="user" :src="item.topics[0].avatar" alt="">
                  <span>{{item.topics[0].nickname}}</span>
                  <img class="look" src="@/static/imgs/yan.png" alt="">
                  <span class="num">{{Math.floor(item.topics[0].readCount/1000)}}K</span>
                </div>
                <div class="buy" v-if="item.topics[0].buyNow">
                  <div class="text2">{{item.topics[0].buyNow.itemName}}</div>
                  <div class="text1">去购买&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {mapActions, mapState} from 'vuex'
  import axios from 'axios'
  import http from '@/utils/http'
  import PubSub from 'pubsub-js'
  import {NAVLIST} from '@/store/Worth/mutaitions_types.js'
  import 'swiper/css/swiper.min.css'
  import Line from '@/components/line/line.vue'
  export default {
    name: 'Worth',
    components:{
      'v-line': Line
    },
    data(){
      return{
        waterfallFirst: [],
        page: 1,
        pagesList: []
      }
    },
    async mounted(){
      this[NAVLIST]()
      this.$nextTick(()=>{
          this.swiper()
      })

      this.huaping()
      // 瀑布流首屏数据
      this.getWaterfallFirst()
      
    },
    methods:{
      // 跳转至主页
      goHome(){
        this.$router.replace('/Home')
        PubSub.publish('idx',1)
      },
      huaping(){
        this.scroll = new BScroll(
          this.$refs.contentContainer,
          {
            click:true,
            pullUpLoad:{
              stop: 0,
              threshold: -30
            },
            bounce: {top: false,bottom: true,left: false,right: false}
          },
        )
        this.scroll.on("pullingUp",async()=>{
          // console.log(123);   {data:page=1,size=3}
          
          let {code,data} = await this.$http.Worth.getList({page:this.page,size:10})
          this.page++
          
          if(code === '200'){
            
            this.waterfallFirst.push(...(data.result))
          }
          
          this.scroll.finishPullUp();
        })
      },
      
      swiper(){
        let mySwiper = new Swiper ('.swiper-container', {
          slidesPerView: 4,//一行显示4个
          slidesPerColumn: 2,//显示2行
          slidesPerColumnFill : 'row', //个体排列方式
          observer: true,
          // spaceBetween: 2,
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 20,
          },
        })
        mySwiper.scrollbar.$dragEl.css('background','#f00');
      },

      ...mapActions([NAVLIST]),

      async getWaterfallFirst(){
        let {status,data} = await http('/getWaterfallFirst')
        if(status === 200){
          this.waterfallFirst = data.data
        }
      }
    },
    computed:{
      ...mapState({
        navList: state => state.Worth.navList
      }),
      
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/mixin.styl'
  .header
    position relative
    display flex
    box-sizing border-box
    width 100%
    padding 0 26px
    height 100px
    background #fafafa
    .icon-search
      color #666
    i 
      font-size 46px
      line-height 100px
      color #333
    .home
      width 46px
      height 100px
    span
      position absolute
      left 40%
      top 32%
      font-size 36px
    .search
      position absolute
      top 0
      right 105px
      width 62px
      height 100px
    .cart
      position absolute
      top 0
      right 20px
      width 49px
      height 100px
  .content
    width 100%
    height 1138px
    overflow hidden
    background #EEEEEE
    .top
      width 100%
      height 685px
      position relative
      .bg
        width 100%
        height 518px
        .bgImg
          width 100%
      .zhidemai
        width 130px
        height 68px
        position absolute
        left 20px
        top 60px
      p
        position absolute
        left 160px
        top 86px
        font-size 30px
        color #ffffff
    .swiper-container
      position absolute
      z-index 100
      top 0
      left 0
      box-sizing border-box
      width 710px
      height 540px
      margin 145px 20px 0 20px
      padding-top 36px
      border-radius 20px
      background #fff
      .swiper-slide
        height 30%
        display flex
        flex-direction column
        align-items center
        img 
          width 120px
        .bold
          font-weight 700
          padding 10px 0
    .swiper-scrollbar
      width 35%
      position absolute
      left 50%
      bottom 20px
      transform translateX(-50%)
    .masonry 
      display: flex;
      flex-direction: row;
      flex-wrap wrap
      justify-content space-between
      padding 0 20px 
      .column 
        display: flex;
        flex-flow: column wrap;
        width: 48%;
        height 100%
        border-radius 20px
        overflow hidden
        padding-top 30px
        .item
          width 100%
          display flex
          flex-direction column
          margin-bottom 30px
          background-color #fff
          border-radius 20px
          overflow hidden
          img 
            width 100%
            height auto
          .text
            padding 18px 16px 0
          .line
            width 100%
            background #fff
            hei(17px)
          .info
            display flex
            position relative
            padding 16px 16px 24px
            align-items center
            .user 
              width 48px
              height 48px
              border-radius 50%
              margin-right 16px
            .look
              width 32px
              height 32px
              position absolute
              top 50%
              right 72px
              transform translateY(-50%)
            .num
              position absolute
              top 50%
              right 16px
              transform translateY(-50%)
          .buy
            position relative
            width 100%
            height 90px
            box-sizing border-box
            padding 20px 16px
            display flex
            align-items center
            &:after
              content ''
              position absolute
              top 0
              left 50%
              transform translateX(-50%)
              width 85%
              height 2px
              background #d9d9d9
            .text2
              width 207px
              height 32px
              line-height 32px
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
            .text1
              width 90px
              height 32px
              line-height 32px
              float right
              color red

     
      
    
      


</style>