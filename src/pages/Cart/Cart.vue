<template>
  <div class="cartContainer">
    <div>
      <div class="title">
        <span class="cart">购物车</span>
        <span class="juan">领券</span>
      </div>
      <div class="Notice">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满99免邮费</span>
      </div>
      <img class="gouwuche" src="@/static/imgs/ct.png" alt="">
      <div class="login">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cart'
  }
</script>

<style scoped lang="stylus">
  .cartContainer
    position relative
    width 100%
    height 1238px
    background #F4F4F4
    .title
      width 100%
      height 88px
      box-sizing border-box
      padding 0 30px
      background #fff
      line-height 88px
      display flex
      justify-content space-between
      .cart
        font-size 36px
      .juan
        margin-right 40px
        font-size 30px
        color red
    .Notice
      width 100%
      height 70px
      background #eee
      display flex
      justify-content space-around
      line-height 70px
    .gouwuche
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      margin auto
      width 248px
      height 248px
    .login
      width 480px
      height 92px
      background #DD1A21
      color #fff
      line-height 92px
      text-align center
      position absolute
      left 50%
      bottom 380px
      transform translateX(-50%)
</style>