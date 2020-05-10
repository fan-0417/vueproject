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
      <div class="nav" ref="nav1">
        <div @click="changeIdx(0)" class="navitem" :class="0 === idx ? 'active' : ''">
          <span>推荐</span>
        </div>
        <div @click="changeIdx(index+1,item.id)" class="navitem" v-for="(item,index) in list" :key="index" :class="index+1 === idx ? 'active' : ''">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="huapingContainer" ref="huapingContainer">
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

        <div v-if="0 === idx">
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
                  <img src="@/static/imgs/2.webp" alt="">
                </div>
                <div class="Welfare1">
                  <h3>福利社</h3>
                  <span>今日特价</span>
                  <img src="@/static/imgs/3.webp" alt="">
                </div>
              </div>
            </div>
          </div>

          <!-- 线 -->
          <v-line></v-line>

          <!-- 热销榜 -->
          <div class="hotList">
            <div class="title">
              类目热销榜
            </div>
            <div class="hotClass" >
              <div class="leftHot">
                <span>热销榜</span>
                <img src="@/static/imgs/4.webp" alt="">
              </div>
              <div class="rightHot">
                <span>好评榜</span>
                <img src="@/static/imgs/5.webp" alt="">
              </div>
              <div class="hotItemList">
                <div class="hotItem" v-for="(item,index) in hotClass" :key="index">
                  <span>{{item.categoryName}}</span>
                  <img :src="item.picUrl" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>


        <div v-if="idx !==0">
            <!-- 线 -->
            <v-line></v-line>
            <!-- 模块数据 -->
            <v-CateModule :id="id"></v-CateModule>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import {Button} from 'vant';
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {GETINDEXCATELIST,POLICYDESCLIST} from '@/store/indexData/mutaitions_types.js'
  import 'swiper/css/swiper.min.css'
  import V_Line from '@/components/line/line.vue'
  import V_CateModule from '@/components/cateModule/cateModule.vue'
  export default {
    name: 'Home',
    components:{
       [Button.name]:Button,
       'v-line': V_Line,
        'v-CateModule':V_CateModule,
    },
    data(){
      return{
        idx : 0,   //nav区域下边框显示标识
        hotClassList: [],
        id: 0
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
      }),
      // 热搜区域数据
      ...mapState({
        hotClass: state => state.indexData.hotClass
      }),
      
    },
    async mounted(){
      this[GETINDEXCATELIST]()
      this[POLICYDESCLIST]()
      
      this.$nextTick(()=>{
        this.navList = new BScroll(this.$refs.navContainer,{scrollY:false,scrollX:true,click:true})
        new BScroll(this.$refs.huapingContainer,{click:true,bounce: {top: false,bottom: false,left: false,right: false}})
      })

      this.swiper()
      
    },
    methods:{
      //  nav导航数据
      ...mapActions([GETINDEXCATELIST]),
      // 主页数据
      ...mapActions([POLICYDESCLIST]),
      
      
      changeIdx(idx,id){
        this.idx = idx
        this.id = id
        // 让nav区域自动往前顶
        let listItem = this.$refs.nav1 && this.$refs.nav1.children[this.idx]
        this.navList && this.navList.scrollToElement(listItem,300,-15)
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
    .huapingContainer
      width 100%
      height 1090px
      overflow hidden
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
          box-sizing  border-box
          float right
          .Welfare
            position relative
            width 100%
            height 49%
            background #FBE2D3
            margin-bottom 2px
            overflow hidden
            h3
              margin  20px 0 0 30px
              font-size 32px
              margin-bottom 10px
            span
              margin-left 30px
            img 
              position absolute
              right 0px
              bottom 0px
              width 200px
              height 200px
          .Welfare1
            position relative
            width 100%
            height 50%
            background #FFECC2
            overflow hidden
            h3
              margin  20px 0 0 30px
              font-size 32px
              margin-bottom 10px
            span
              margin-left 30px
            img 
              position absolute
              right 0px
              bottom 0px
              width 200px
              height 200px
    .hotList
      width 100%
      height 720px
      box-sizing border-box
      padding 0 30px 0 30px
      .title
        width 100%
        height 100px
        font-size 32px
        line-height 100px
      .hotClass
        width 100%
        height 200px
        display flex
        flex-wrap wrap
        .leftHot
        .rightHot
          position relative
          width 339px
          height 100%
          margin-right 10px
          background yellow
          span  
            font-size 28px
            margin-left 24px
            line-height 200px
          img
            position absolute
            right 0
            bottom 0
            width 200px
            height 200px
        .leftHot
          background #F9F3E4
        .rightHot
          background #EBEFF6
          margin-right 0px
        .hotItemList
          width 100%
          margin-top 10px
          display flex
          flex-wrap wrap
          .hotItem
            width 165px
            height 180px
            display flex
            flex-direction column
            align-items center
            margin-right 10px
            margin-bottom 10px
            background #F5F5F5
            &:nth-of-type(4)
              margin-right 0px
            &:last-child
              margin-right 0px
            span
              font-size 24px
              margin-top 20px
            img
              width 120px
              height 120px
</style>