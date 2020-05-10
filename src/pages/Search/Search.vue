<template>
  <div class="searchContainer">
    <van-search class="search" v-model="value" placeholder="请输入搜索关键词" />
    <span class="cancel">取消</span>
  </div>
</template>

<script>
  import { Search } from 'vant';
  export default {
    name: 'Search',
    components:{
      [Search.name]:Search
    }
  }
</script>

<style scoped lang="stylus">
  .searchContainer
    position relative
    width 100%
    height 88px
    box-sizing border-box
    padding 0 30px
    overflow hidden
    .search
      width 85%
      height 80%
      margin-top 20px
      border-radius 20px
      background #F7F8FA
    .cancel
      position absolute
      top 50%
      right 30px
      font-size 28px
      transform translateY(-30%)
</style>