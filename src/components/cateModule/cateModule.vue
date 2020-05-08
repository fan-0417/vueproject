<template>
  <div class="CateModuleContainer">
    <div class="title">
      <h2>{{listItem.name}}</h2>
      <span>{{listItem.name}}</span>
    </div>
    <div class="list">
      <div class="listItem" v-for="(item,index) in listItem.subCateList" :key="index">
        <img :src="item.wapBannerUrl" alt="">
        <div>
          {{item.frontDesc}}
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import {GETINDEXCATELIST} from '@/store/indexData/mutaitions_types.js'

  export default {
    name: 'CateModule',
    props: {
      id: Number,
    },
    mounted(){
      // this.listItem = this.list
      // console.log(this.listItem);

    },
    

    computed:{
      ...mapState({
        list: state => state.indexData.list
      }),
      listItem(){
        return this.list.find((item)=>{
          return item.id === this.id
        })
      }
    }
    
  }
</script>

<style scoped lang="stylus">
  .CateModuleContainer
    .title
      width 100%
      height 120px
      display flex
      flex-direction column
      align-items center
      h2
        font-size 32px
        color #333
        margin-top 24px
      span 
        font-size 24px
        margin-top 16px
        color #999
    .list
      display flex
      flex-wrap wrap
      box-sizing border-box
      padding 0 20px 33px 10px
      justify-content space-between
      .listItem
        width 48%
        height 449px
        overflow hidden
        img
          width 100%
          height 345px
          background #eee
        div
          width 100%
          height 36px
          background #F1ECE2
          font-size 24px
          margin-top -2px
          line-height 36px
          padding-left 20px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        p
          width 100%
          height 39px
          font-size 28px
          margin-top 20px
</style>