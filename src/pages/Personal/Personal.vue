<template>
  <div class="PersonalContainer">
    <div class="title">
      <div class="gohome">
        <i class="iconfont icon-shouye"></i>
      </div>
      <p class="name">网易严选</p>
      <div class="search">
        <i class="iconfont icon-search"></i>
      </div>
      <div class="goCart">
        <i class="iconfont icon-cart"></i>
      </div>
    </div>
    <div class="logo"></div>
  </div>
</template>

<script>
  export default {
    name: 'Personal'
  }
</script>

<style scoped lang="stylus">
  .PersonalContainer
    width 100%
    height 100%
    background #F2F5F4
    .title
      position relative
      width 100%
      height 88px
      box-sizing border-box
      border-bottom 1px solid #eee
      padding 0 24px
      background #FAFAFA
      display flex
      align-items center
      .gohome
        width 48px
        height 44px
      .search
        width 48px
        height 44px
        position absolute
        right 100px
        top 20px
      .goCart
        width 48px
        height 44px
        position absolute
        right 25px
        top 20px
      i  
        font-size 48px
      .name
        position absolute
        top 20px
        left 50%
        transform translateX(-50%)
        font-size 40px
        font-family '楷体'
        font-weight 700
    .logo
      width 100%
      height 482px
</style>