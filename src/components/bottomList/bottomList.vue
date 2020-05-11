<template>
  <div class="listContainer">
    <ul class="list">
      <li :class="1 === idx ? 'active' : ''" @click="toHome" >
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </li>
      <li :class="2 === idx ? 'active' : ''" @click="toClassification">
        <i class="iconfont icon-tabbar_category_activce"></i>
        <span>分类</span>
      </li>
      <li :class="3 === idx ? 'active' : ''" @click="toWorth">
        <i class="iconfont icon-topic"></i>
        <span>值得买</span>
      </li>
      <li :class="4 === idx ? 'active' : ''" @click="toCart">
        <i class="iconfont icon-cart"></i>
        <span>购物车</span>
      </li>
      <li :class="5 === idx ? 'active' : ''" @click="toPersonal">
        <i class="iconfont icon-ucenter"></i>
        <span>个人</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    name: 'BottomList',
    data(){
      return{
        idx: 1
      }
    },
    mounted(){
      PubSub.subscribe('searchId',(smg,id)=>{
        // console.log(id);
        this.idx = id
      })
      PubSub.subscribe('cartId',(smg,id)=>{
        // console.log(id);
        this.idx = id
      })
      // this.$bus.$on('idx',(msg,idx)=>{
      //   console.log('$on');
        
      //   this.idx = id
      // })
    },
     
    computed:{
     
    },
    methods:{
      
      toHome(){
        this.$router.replace('/Home')
        this.idx = 1
      },
      toClassification(){
        this.$router.replace('/Classification')
        this.idx = 2
      },
      toWorth(){
        this.$router.replace('/Worth')
        this.idx = 3
      },
      toCart(){
        this.$router.replace('/Cart')
        this.idx = 4
      },
      toPersonal(){
        this.$router.replace('/Personal')
        this.idx = 5
      }
    }
  }
</script>

<style scoped lang="stylus">
  .listContainer
    position fixed
    border-top 1px solid #eee
    left 0
    bottom 0
    width 100%
    height 96px
    background-color: #fff;
    .list
      display flex
      justify-content space-around
      height 100%
      li
        display flex
        align-items center
        justify-content space-around
        flex-direction column
        color #666
        &.active
          color red
        i 
          font-size 40px
</style>